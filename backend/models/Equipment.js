const pool = require('../config/database');

class Equipment {
  /**
   * Create new equipment item
   */
  static async create(equipmentData) {
    const {
      user_id,
      equipment_type,
      manufacturer,
      model,
      description,
      serial_number,
      purchase_date,
      frequency_range_min,
      frequency_range_max,
      max_power_output,
      antenna_type,
      gain_dbi,
      vswr,
      cable_length,
      connector_type,
      location,
      is_primary,
      is_portable,
      operational_status,
      tags,
      compatible_with,
      manual_url,
      photo_url
    } = equipmentData;

    const query = `
      INSERT INTO user_equipment (
        user_id, equipment_type, manufacturer, model, description,
        serial_number, purchase_date, frequency_range_min, frequency_range_max,
        max_power_output, antenna_type, gain_dbi, vswr, cable_length,
        connector_type, location, is_primary, is_portable, operational_status,
        tags, compatible_with, manual_url, photo_url
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)
      RETURNING *
    `;

    const values = [
      user_id, equipment_type, manufacturer, model, description,
      serial_number, purchase_date, frequency_range_min, frequency_range_max,
      max_power_output, antenna_type, gain_dbi, vswr, cable_length,
      connector_type, location, is_primary || false, is_portable || false,
      operational_status || 'operational',
      tags ? JSON.stringify(tags) : null,
      compatible_with ? JSON.stringify(compatible_with) : null,
      manual_url, photo_url
    ];

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  /**
   * Create equipment from preset
   */
  static async createFromPreset(user_id, preset_id, customData = {}) {
    // Get preset details
    const presetQuery = 'SELECT * FROM equipment_presets WHERE preset_id = $1';
    const presetResult = await pool.query(presetQuery, [preset_id]);
    
    if (presetResult.rows.length === 0) {
      throw new Error('Preset not found');
    }

    const preset = presetResult.rows[0];

    // Merge preset with custom data
    const equipmentData = {
      user_id,
      equipment_type: preset.equipment_type,
      manufacturer: preset.manufacturer,
      model: preset.model,
      description: customData.description || preset.description,
      frequency_range_min: preset.frequency_range_min,
      frequency_range_max: preset.frequency_range_max,
      max_power_output: preset.max_power_output,
      antenna_type: preset.antenna_type,
      gain_dbi: preset.gain_dbi,
      manual_url: customData.manual_url || preset.manual_url,
      ...customData
    };

    // Increment popularity count
    await pool.query(
      'UPDATE equipment_presets SET popularity_count = popularity_count + 1 WHERE preset_id = $1',
      [preset_id]
    );

    return await this.create(equipmentData);
  }

  /**
   * Get all equipment for a user
   */
  static async getAllByUserId(user_id, filters = {}) {
    let query = 'SELECT * FROM user_equipment WHERE user_id = $1';
    const values = [user_id];
    let paramIndex = 2;

    // Apply filters
    if (filters.equipment_type) {
      query += ` AND equipment_type = $${paramIndex}`;
      values.push(filters.equipment_type);
      paramIndex++;
    }

    if (filters.operational_status) {
      query += ` AND operational_status = $${paramIndex}`;
      values.push(filters.operational_status);
      paramIndex++;
    }

    if (filters.is_primary !== undefined) {
      query += ` AND is_primary = $${paramIndex}`;
      values.push(filters.is_primary);
      paramIndex++;
    }

    if (filters.is_portable !== undefined) {
      query += ` AND is_portable = $${paramIndex}`;
      values.push(filters.is_portable);
      paramIndex++;
    }

    query += ' ORDER BY created_at DESC';

    const result = await pool.query(query, values);
    return result.rows;
  }

  /**
   * Get equipment by ID
   */
  static async getById(equipment_id, user_id) {
    const query = `
      SELECT * FROM user_equipment 
      WHERE equipment_id = $1 AND user_id = $2
    `;
    const result = await pool.query(query, [equipment_id, user_id]);
    return result.rows[0];
  }

  /**
   * Update equipment
   */
  static async update(equipment_id, user_id, updates) {
    // Build update query dynamically
    const allowedFields = [
      'manufacturer', 'model', 'description', 'serial_number', 'purchase_date',
      'frequency_range_min', 'frequency_range_max', 'max_power_output',
      'antenna_type', 'gain_dbi', 'vswr', 'cable_length', 'connector_type',
      'location', 'is_primary', 'is_portable', 'operational_status',
      'tags', 'compatible_with', 'manual_url', 'photo_url', 'last_used'
    ];

    const updateFields = [];
    const values = [];
    let paramIndex = 1;

    for (const [key, value] of Object.entries(updates)) {
      if (allowedFields.includes(key)) {
        updateFields.push(`${key} = $${paramIndex}`);
        
        // Handle JSON fields
        if (['tags', 'compatible_with'].includes(key)) {
          values.push(JSON.stringify(value));
        } else {
          values.push(value);
        }
        paramIndex++;
      }
    }

    if (updateFields.length === 0) {
      throw new Error('No valid fields to update');
    }

    values.push(equipment_id, user_id);

    const query = `
      UPDATE user_equipment 
      SET ${updateFields.join(', ')}
      WHERE equipment_id = $${paramIndex} AND user_id = $${paramIndex + 1}
      RETURNING *
    `;

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  /**
   * Delete equipment
   */
  static async delete(equipment_id, user_id) {
    const query = `
      DELETE FROM user_equipment 
      WHERE equipment_id = $1 AND user_id = $2
      RETURNING *
    `;
    const result = await pool.query(query, [equipment_id, user_id]);
    return result.rows[0];
  }

  /**
   * Get equipment statistics for user
   */
  static async getStatistics(user_id) {
    const query = `
      SELECT 
        COUNT(*) as total_items,
        COUNT(CASE WHEN operational_status = 'operational' THEN 1 END) as operational_items,
        COUNT(CASE WHEN is_primary = true THEN 1 END) as primary_items,
        COUNT(DISTINCT equipment_type) as equipment_types,
        COUNT(CASE WHEN equipment_type = 'antenna' THEN 1 END) as antennas,
        COUNT(CASE WHEN equipment_type = 'transceiver' THEN 1 END) as transceivers,
        COUNT(CASE WHEN equipment_type = 'sdr' THEN 1 END) as sdrs
      FROM user_equipment
      WHERE user_id = $1
    `;
    const result = await pool.query(query, [user_id]);
    return result.rows[0];
  }

  /**
   * Search equipment by frequency range
   */
  static async searchByFrequency(user_id, frequency_mhz) {
    const query = `
      SELECT * FROM user_equipment
      WHERE user_id = $1
        AND frequency_range_min <= $2
        AND frequency_range_max >= $2
        AND operational_status = 'operational'
      ORDER BY equipment_type, model
    `;
    const result = await pool.query(query, [user_id, frequency_mhz]);
    return result.rows;
  }

  /**
   * Get equipment suggestions based on user's current equipment
   */
  static async getEquipmentSuggestions(user_id) {
    // This would integrate with AI in the future
    // For now, return basic suggestions based on what they have
    
    const statsQuery = `
      SELECT 
        equipment_type,
        COUNT(*) as count
      FROM user_equipment
      WHERE user_id = $1 AND operational_status = 'operational'
      GROUP BY equipment_type
    `;
    const stats = await pool.query(statsQuery, [user_id]);
    
    const suggestions = [];
    const equipmentCounts = {};
    
    stats.rows.forEach(row => {
      equipmentCounts[row.equipment_type] = parseInt(row.count);
    });

    // Suggest complementary equipment
    if (equipmentCounts['sdr'] && !equipmentCounts['antenna']) {
      suggestions.push({
        type: 'antenna',
        reason: 'You have an SDR but no antenna. An antenna is essential for receiving signals.',
        priority: 'high'
      });
    }

    if (equipmentCounts['transceiver'] && !equipmentCounts['antenna']) {
      suggestions.push({
        type: 'antenna',
        reason: 'You have a transceiver but no antenna. You need an antenna to transmit and receive.',
        priority: 'high'
      });
    }

    if ((equipmentCounts['sdr'] || equipmentCounts['transceiver']) && !equipmentCounts['analyzer']) {
      suggestions.push({
        type: 'analyzer',
        reason: 'An antenna analyzer or VNA will help you tune your antennas for optimal performance.',
        priority: 'medium'
      });
    }

    return suggestions;
  }

  // ========================================
  // EQUIPMENT PRESETS
  // ========================================

  /**
   * Get all equipment presets
   */
  static async getAllPresets(filters = {}) {
    let query = 'SELECT * FROM equipment_presets WHERE 1=1';
    const values = [];
    let paramIndex = 1;

    if (filters.equipment_type) {
      query += ` AND equipment_type = $${paramIndex}`;
      values.push(filters.equipment_type);
      paramIndex++;
    }

    if (filters.manufacturer) {
      query += ` AND manufacturer ILIKE $${paramIndex}`;
      values.push(`%${filters.manufacturer}%`);
      paramIndex++;
    }

    if (filters.search) {
      query += ` AND (model ILIKE $${paramIndex} OR description ILIKE $${paramIndex})`;
      values.push(`%${filters.search}%`);
      paramIndex++;
    }

    query += ' ORDER BY popularity_count DESC, manufacturer, model';

    const result = await pool.query(query, values);
    return result.rows;
  }

  /**
   * Get preset by ID
   */
  static async getPresetById(preset_id) {
    const query = 'SELECT * FROM equipment_presets WHERE preset_id = $1';
    const result = await pool.query(query, [preset_id]);
    return result.rows[0];
  }

  // ========================================
  // EQUIPMENT SETUPS
  // ========================================

  /**
   * Create equipment setup
   */
  static async createSetup(user_id, setupData) {
    const {
      setup_name,
      description,
      purpose,
      equipment_items,
      diagram_url,
      photo_url,
      configuration_notes,
      is_active,
      is_favorite
    } = setupData;

    const query = `
      INSERT INTO equipment_setups (
        user_id, setup_name, description, purpose, equipment_items,
        diagram_url, photo_url, configuration_notes, is_active, is_favorite
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *
    `;

    const values = [
      user_id,
      setup_name,
      description,
      purpose,
      JSON.stringify(equipment_items),
      diagram_url,
      photo_url,
      configuration_notes,
      is_active !== false,
      is_favorite || false
    ];

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  /**
   * Get all setups for user
   */
  static async getAllSetups(user_id) {
    const query = `
      SELECT * FROM equipment_setups
      WHERE user_id = $1
      ORDER BY is_favorite DESC, last_used DESC, created_at DESC
    `;
    const result = await pool.query(query, [user_id]);
    return result.rows;
  }

  /**
   * Get setup details with equipment
   */
  static async getSetupWithEquipment(setup_id, user_id) {
    const setupQuery = `
      SELECT * FROM equipment_setups
      WHERE setup_id = $1 AND user_id = $2
    `;
    const setupResult = await pool.query(setupQuery, [setup_id, user_id]);
    
    if (setupResult.rows.length === 0) {
      return null;
    }

    const setup = setupResult.rows[0];
    const equipmentIds = setup.equipment_items;

    if (equipmentIds && equipmentIds.length > 0) {
      const equipmentQuery = `
        SELECT * FROM user_equipment
        WHERE equipment_id = ANY($1) AND user_id = $2
      `;
      const equipmentResult = await pool.query(equipmentQuery, [equipmentIds, user_id]);
      setup.equipment_details = equipmentResult.rows;
    } else {
      setup.equipment_details = [];
    }

    return setup;
  }

  /**
   * Update setup
   */
  static async updateSetup(setup_id, user_id, updates) {
    const allowedFields = [
      'setup_name', 'description', 'purpose', 'equipment_items',
      'diagram_url', 'photo_url', 'configuration_notes',
      'is_active', 'is_favorite', 'last_used'
    ];

    const updateFields = [];
    const values = [];
    let paramIndex = 1;

    for (const [key, value] of Object.entries(updates)) {
      if (allowedFields.includes(key)) {
        updateFields.push(`${key} = $${paramIndex}`);
        
        if (key === 'equipment_items') {
          values.push(JSON.stringify(value));
        } else {
          values.push(value);
        }
        paramIndex++;
      }
    }

    if (updateFields.length === 0) {
      throw new Error('No valid fields to update');
    }

    values.push(setup_id, user_id);

    const query = `
      UPDATE equipment_setups
      SET ${updateFields.join(', ')}
      WHERE setup_id = $${paramIndex} AND user_id = $${paramIndex + 1}
      RETURNING *
    `;

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  /**
   * Delete setup
   */
  static async deleteSetup(setup_id, user_id) {
    const query = `
      DELETE FROM equipment_setups
      WHERE setup_id = $1 AND user_id = $2
      RETURNING *
    `;
    const result = await pool.query(query, [setup_id, user_id]);
    return result.rows[0];
  }
}

module.exports = Equipment;
