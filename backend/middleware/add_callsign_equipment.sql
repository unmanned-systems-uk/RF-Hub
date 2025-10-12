-- Migration: Add Call Sign and Equipment List Features
-- Date: 2025-10-12
-- Description: Adds call_sign field to users table and creates equipment_list table

-- ========================================
-- 1. ADD CALL_SIGN TO USERS TABLE
-- ========================================

ALTER TABLE users 
ADD COLUMN call_sign VARCHAR(20) UNIQUE,
ADD COLUMN call_sign_verified BOOLEAN DEFAULT FALSE,
ADD COLUMN call_sign_country VARCHAR(50),
ADD COLUMN call_sign_license_class VARCHAR(50),
ADD CONSTRAINT valid_call_sign CHECK (call_sign IS NULL OR call_sign ~* '^[A-Z0-9]{3,10}$');

-- Index for call sign lookups
CREATE INDEX idx_users_call_sign ON users(call_sign) WHERE call_sign IS NOT NULL;

-- Comment
COMMENT ON COLUMN users.call_sign IS 'Amateur radio call sign (e.g., M0ABC, K1XYZ)';
COMMENT ON COLUMN users.call_sign_verified IS 'Whether call sign has been verified';
COMMENT ON COLUMN users.call_sign_country IS 'Country of call sign registration';
COMMENT ON COLUMN users.call_sign_license_class IS 'License class (e.g., Foundation, Intermediate, Full)';

-- ========================================
-- 2. CREATE EQUIPMENT_LIST TABLE
-- ========================================

CREATE TABLE user_equipment (
    -- Primary identification
    equipment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Association
    user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    
    -- Equipment details
    equipment_type VARCHAR(50) NOT NULL,
    manufacturer VARCHAR(100),
    model VARCHAR(100) NOT NULL,
    
    -- Description and notes
    description TEXT,
    serial_number VARCHAR(100),
    purchase_date DATE,
    
    -- RF-specific details
    frequency_range_min NUMERIC(10,3), -- MHz
    frequency_range_max NUMERIC(10,3), -- MHz
    max_power_output NUMERIC(8,2), -- Watts
    
    -- Antenna-specific details
    antenna_type VARCHAR(50), -- dipole, yagi, vertical, loop, etc.
    gain_dbi NUMERIC(5,2), -- dBi
    vswr NUMERIC(4,2), -- Voltage Standing Wave Ratio
    
    -- Cable/Accessory details
    cable_length NUMERIC(6,2), -- meters
    connector_type VARCHAR(50), -- N-type, BNC, SMA, PL-259, etc.
    
    -- Organization
    location VARCHAR(200), -- Where equipment is stored/installed
    is_primary BOOLEAN DEFAULT FALSE, -- Primary equipment for this type
    is_portable BOOLEAN DEFAULT FALSE, -- Portable vs fixed installation
    
    -- Status
    operational_status VARCHAR(20) DEFAULT 'operational',
    -- 'operational', 'maintenance', 'broken', 'sold', 'loaned'
    
    -- Tags and categorization
    tags JSONB, -- Array of custom tags
    compatible_with JSONB, -- Array of equipment_ids this works with
    
    -- Documentation
    manual_url VARCHAR(500),
    photo_url VARCHAR(500),
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_used TIMESTAMP,
    
    -- Constraints
    CONSTRAINT valid_equipment_type CHECK (
        equipment_type IN (
            'transceiver', 'receiver', 'transmitter', 'sdr', 
            'antenna', 'amplifier', 'tuner', 'power_supply',
            'cable', 'connector', 'filter', 'duplexer',
            'rotator', 'analyzer', 'meter', 'other'
        )
    ),
    CONSTRAINT valid_status CHECK (
        operational_status IN ('operational', 'maintenance', 'broken', 'sold', 'loaned')
    ),
    CONSTRAINT valid_frequency_range CHECK (
        frequency_range_min IS NULL OR frequency_range_max IS NULL OR 
        frequency_range_min <= frequency_range_max
    ),
    CONSTRAINT positive_power CHECK (max_power_output IS NULL OR max_power_output >= 0),
    CONSTRAINT positive_gain CHECK (gain_dbi IS NULL OR gain_dbi >= -50 AND gain_dbi <= 50),
    CONSTRAINT positive_vswr CHECK (vswr IS NULL OR vswr >= 1)
);

-- Indexes for equipment table
CREATE INDEX idx_equipment_user ON user_equipment(user_id);
CREATE INDEX idx_equipment_type ON user_equipment(equipment_type);
CREATE INDEX idx_equipment_status ON user_equipment(operational_status);
CREATE INDEX idx_equipment_manufacturer ON user_equipment(manufacturer);
CREATE INDEX idx_equipment_created ON user_equipment(created_at);
CREATE INDEX idx_equipment_primary ON user_equipment(user_id, is_primary) WHERE is_primary = TRUE;
CREATE INDEX idx_equipment_tags ON user_equipment USING GIN (tags);
CREATE INDEX idx_equipment_frequency ON user_equipment(frequency_range_min, frequency_range_max);

-- Trigger for updated_at
CREATE TRIGGER update_equipment_updated_at BEFORE UPDATE ON user_equipment
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Comments
COMMENT ON TABLE user_equipment IS 'User equipment inventory for Radio Amateur gear';
COMMENT ON COLUMN user_equipment.equipment_type IS 'Type of RF equipment';
COMMENT ON COLUMN user_equipment.frequency_range_min IS 'Minimum operating frequency in MHz';
COMMENT ON COLUMN user_equipment.frequency_range_max IS 'Maximum operating frequency in MHz';
COMMENT ON COLUMN user_equipment.max_power_output IS 'Maximum RF power output in Watts';
COMMENT ON COLUMN user_equipment.antenna_type IS 'Type of antenna (if equipment_type is antenna)';
COMMENT ON COLUMN user_equipment.gain_dbi IS 'Antenna gain in dBi';
COMMENT ON COLUMN user_equipment.vswr IS 'Voltage Standing Wave Ratio';

-- ========================================
-- 3. CREATE EQUIPMENT PRESETS TABLE
-- ========================================
-- This table stores common equipment models to help users quickly add equipment

CREATE TABLE equipment_presets (
    preset_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Equipment identification
    equipment_type VARCHAR(50) NOT NULL,
    manufacturer VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    
    -- Pre-filled specifications
    description TEXT,
    frequency_range_min NUMERIC(10,3),
    frequency_range_max NUMERIC(10,3),
    max_power_output NUMERIC(8,2),
    antenna_type VARCHAR(50),
    gain_dbi NUMERIC(5,2),
    
    -- Preset metadata
    popularity_count INTEGER DEFAULT 0, -- How many users have this
    is_verified BOOLEAN DEFAULT FALSE, -- Verified by admin
    
    -- Links
    manufacturer_url VARCHAR(500),
    manual_url VARCHAR(500),
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT unique_preset UNIQUE (manufacturer, model)
);

CREATE INDEX idx_presets_type ON equipment_presets(equipment_type);
CREATE INDEX idx_presets_manufacturer ON equipment_presets(manufacturer);
CREATE INDEX idx_presets_popularity ON equipment_presets(popularity_count DESC);

COMMENT ON TABLE equipment_presets IS 'Pre-configured equipment templates for common RF gear';

-- ========================================
-- 4. CREATE EQUIPMENT SETUPS TABLE
-- ========================================
-- This table stores complete station setups/configurations

CREATE TABLE equipment_setups (
    setup_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Association
    user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    
    -- Setup details
    setup_name VARCHAR(200) NOT NULL,
    description TEXT,
    purpose VARCHAR(100), -- e.g., 'HF Portable', 'VHF Base Station', 'SDR Monitoring'
    
    -- Equipment in this setup (array of equipment_ids)
    equipment_items JSONB NOT NULL,
    
    -- Setup diagram/photo
    diagram_url VARCHAR(500),
    photo_url VARCHAR(500),
    
    -- Configuration notes
    configuration_notes TEXT,
    
    -- Status
    is_active BOOLEAN DEFAULT TRUE, -- Currently in use
    is_favorite BOOLEAN DEFAULT FALSE,
    
    -- Metadata
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_used TIMESTAMP,
    
    CONSTRAINT setup_name_per_user UNIQUE (user_id, setup_name)
);

CREATE INDEX idx_setups_user ON equipment_setups(user_id);
CREATE INDEX idx_setups_active ON equipment_setups(user_id, is_active) WHERE is_active = TRUE;
CREATE INDEX idx_setups_favorite ON equipment_setups(user_id, is_favorite) WHERE is_favorite = TRUE;

CREATE TRIGGER update_setups_updated_at BEFORE UPDATE ON equipment_setups
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

COMMENT ON TABLE equipment_setups IS 'User-defined equipment configurations and station setups';

-- ========================================
-- 5. CREATE AI SUGGESTIONS TABLE
-- ========================================
-- This table stores AI-generated suggestions for activities based on equipment

CREATE TABLE ai_equipment_suggestions (
    suggestion_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Association
    user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    equipment_setup_id UUID REFERENCES equipment_setups(setup_id) ON DELETE CASCADE,
    
    -- Suggestion details
    suggestion_type VARCHAR(50) NOT NULL,
    -- 'activity', 'experiment', 'module', 'test', 'upgrade'
    
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    difficulty VARCHAR(20),
    estimated_time_minutes INTEGER,
    
    -- Requirements
    required_equipment JSONB, -- Array of equipment types needed
    required_modules JSONB, -- Array of module_ids as prerequisites
    
    -- Instructions
    steps JSONB, -- Array of step-by-step instructions
    expected_results TEXT,
    tips TEXT,
    
    -- References
    related_module_id UUID REFERENCES modules(module_id),
    external_links JSONB,
    
    -- Engagement
    times_viewed INTEGER DEFAULT 0,
    times_completed INTEGER DEFAULT 0,
    user_rating INTEGER, -- 1-5 stars
    user_notes TEXT,
    
    -- Status
    status VARCHAR(20) DEFAULT 'pending',
    -- 'pending', 'in_progress', 'completed', 'dismissed'
    
    completed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT valid_suggestion_type CHECK (
        suggestion_type IN ('activity', 'experiment', 'module', 'test', 'upgrade')
    ),
    CONSTRAINT valid_difficulty CHECK (
        difficulty IS NULL OR difficulty IN ('beginner', 'intermediate', 'advanced')
    ),
    CONSTRAINT valid_status CHECK (
        status IN ('pending', 'in_progress', 'completed', 'dismissed')
    ),
    CONSTRAINT valid_rating CHECK (user_rating IS NULL OR user_rating BETWEEN 1 AND 5)
);

CREATE INDEX idx_suggestions_user ON ai_equipment_suggestions(user_id);
CREATE INDEX idx_suggestions_status ON ai_equipment_suggestions(status);
CREATE INDEX idx_suggestions_type ON ai_equipment_suggestions(suggestion_type);
CREATE INDEX idx_suggestions_created ON ai_equipment_suggestions(created_at);
CREATE INDEX idx_suggestions_setup ON ai_equipment_suggestions(equipment_setup_id);

CREATE TRIGGER update_suggestions_updated_at BEFORE UPDATE ON ai_equipment_suggestions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

COMMENT ON TABLE ai_equipment_suggestions IS 'AI-generated suggestions for activities based on user equipment';

-- ========================================
-- 6. SEED DATA - EQUIPMENT PRESETS
-- ========================================

INSERT INTO equipment_presets (equipment_type, manufacturer, model, description, frequency_range_min, frequency_range_max, max_power_output, is_verified) VALUES
-- SDRs
('sdr', 'Great Scott Gadgets', 'HackRF One', 'Software Defined Radio with 1 MHz to 6 GHz range', 1, 6000, 0.01, true),
('sdr', 'RTL-SDR', 'RTL-SDR Blog V3', 'Budget SDR receiver for 500 kHz to 1766 MHz', 0.5, 1766, 0, true),
('sdr', 'Ettus Research', 'USRP B200', 'High-performance SDR with 70 MHz to 6 GHz range', 70, 6000, 0.1, true),
('sdr', 'Lime Microsystems', 'LimeSDR', 'Full duplex SDR 100 kHz to 3.8 GHz', 0.1, 3800, 0.01, true),

-- Transceivers
('transceiver', 'Yaesu', 'FT-891', 'HF/50 MHz all-mode transceiver', 1.8, 54, 100, true),
('transceiver', 'Icom', 'IC-7300', 'HF/50 MHz SDR transceiver', 1.8, 54, 100, true),
('transceiver', 'Kenwood', 'TS-590SG', 'HF/50 MHz transceiver', 1.8, 54, 100, true),
('transceiver', 'Yaesu', 'FT-991A', 'HF/VHF/UHF all-mode transceiver', 1.8, 470, 100, true),

-- Handheld Transceivers
('transceiver', 'Baofeng', 'UV-5R', 'VHF/UHF handheld transceiver', 136, 174, 5, true),
('transceiver', 'Yaesu', 'FT-70DR', 'VHF/UHF C4FM handheld', 144, 430, 5, true),
('transceiver', 'Icom', 'ID-52A', 'VHF/UHF D-STAR handheld', 144, 430, 5, true),

-- Antennas
('antenna', 'Diamond', 'X50A', 'VHF/UHF dual band vertical antenna', 144, 430, NULL, true),
('antenna', 'MFJ', 'MFJ-1788', 'HF loop antenna', 7, 54, NULL, true),
('antenna', 'Buddipole', 'Deluxe Portable Kit', 'Portable HF antenna system', 3.5, 54, NULL, true),

-- Analyzers
('analyzer', 'NanoVNA', 'H4', 'Vector Network Analyzer 50 kHz to 1.5 GHz', 0.05, 1500, NULL, true),
('analyzer', 'RigExpert', 'AA-55 ZOOM', 'Antenna Analyzer 0.1 to 55 MHz', 0.1, 55, NULL, true);

-- ========================================
-- DONE
-- ========================================
