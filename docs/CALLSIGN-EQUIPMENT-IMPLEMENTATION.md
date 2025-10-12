# Call Sign and Equipment Features Implementation Guide

**Date:** 2025-10-12  
**Version:** 1.0  
**Status:** Ready for Testing

---

## Overview

This implementation adds two major features to the RF Learning Hub:

1. **User Call Sign Profile** - Amateur radio operators can add their call signs to their profiles
2. **Equipment Inventory System** - Users can manage their RF equipment, create setups, and receive AI-powered suggestions

---

## Database Changes

### New Tables

#### 1. `user_equipment`
Stores individual pieces of RF equipment owned by users.

**Key Features:**
- Support for all major RF equipment types (transceivers, SDRs, antennas, etc.)
- RF-specific fields (frequency ranges, power output, gain, VSWR)
- Operational status tracking
- Location and portability flags
- Tags and compatibility tracking

#### 2. `equipment_presets`
Pre-configured equipment templates for quick addition of common gear.

**Includes:**
- Popular SDRs (HackRF, RTL-SDR, USRP, LimeSDR)
- Transceivers (Yaesu, Icom, Kenwood models)
- Common antennas and accessories
- Popularity tracking

#### 3. `equipment_setups`
Complete station configurations combining multiple equipment items.

**Features:**
- Named setups (e.g., "HF Portable Station", "VHF Base")
- Equipment item lists
- Configuration notes and diagrams
- Active/favorite status

#### 4. `ai_equipment_suggestions`
AI-generated suggestions for activities based on user's equipment.

**Future Integration:**
- Activity suggestions
- Practical experiments
- Module recommendations
- Equipment upgrade paths

### Modified Tables

#### `users` table - Added fields:
- `call_sign` - Amateur radio call sign (e.g., M0ABC, K1XYZ)
- `call_sign_verified` - Verification status
- `call_sign_country` - Country of registration
- `call_sign_license_class` - License class (Foundation, Intermediate, Full)

---

## API Endpoints

### Call Sign Endpoints

#### Get User Profile with Equipment Stats
```
GET /api/auth/profile/full
Authorization: Bearer {token}
```

**Response:**
```json
{
  "profile": {
    "user_id": "...",
    "username": "john_doe",
    "email": "john@example.com",
    "call_sign": "M0ABC",
    "call_sign_verified": true,
    "call_sign_country": "United Kingdom",
    "call_sign_license_class": "Full",
    "equipment_stats": {
      "total_equipment": 5,
      "operational_equipment": 4,
      "transceivers": 1,
      "sdrs": 2,
      "antennas": 2
    }
  }
}
```

#### Update Profile (Including Call Sign)
```
PUT /api/auth/profile
Authorization: Bearer {token}

{
  "call_sign": "M0ABC",
  "call_sign_country": "United Kingdom",
  "call_sign_license_class": "Full"
}
```

#### Lookup User by Call Sign (Public)
```
GET /api/auth/callsign/M0ABC
```

**Response:**
```json
{
  "user": {
    "user_id": "...",
    "username": "john_doe",
    "call_sign": "M0ABC",
    "call_sign_verified": true,
    "call_sign_country": "United Kingdom",
    "call_sign_license_class": "Full"
  }
}
```

---

### Equipment Endpoints

#### Get All Equipment
```
GET /api/equipment
Authorization: Bearer {token}
Query params: ?type=sdr&status=operational&is_primary=true
```

**Response:**
```json
{
  "equipment": [
    {
      "equipment_id": "...",
      "equipment_type": "sdr",
      "manufacturer": "Great Scott Gadgets",
      "model": "HackRF One",
      "description": "Software Defined Radio",
      "frequency_range_min": 1,
      "frequency_range_max": 6000,
      "operational_status": "operational",
      "is_primary": true,
      "created_at": "2025-10-12T10:00:00Z"
    }
  ],
  "count": 1
}
```

#### Create Equipment
```
POST /api/equipment
Authorization: Bearer {token}

{
  "equipment_type": "sdr",
  "manufacturer": "Great Scott Gadgets",
  "model": "HackRF One",
  "description": "My primary SDR for experiments",
  "frequency_range_min": 1,
  "frequency_range_max": 6000,
  "purchase_date": "2025-01-15",
  "operational_status": "operational",
  "location": "Home Lab",
  "is_primary": true
}
```

#### Create Equipment from Preset
```
POST /api/equipment/from-preset/{preset_id}
Authorization: Bearer {token}

{
  "serial_number": "ABC123",
  "location": "Home Lab",
  "purchase_date": "2025-01-15"
}
```

#### Update Equipment
```
PUT /api/equipment/{equipment_id}
Authorization: Bearer {token}

{
  "operational_status": "maintenance",
  "location": "Portable Kit"
}
```

#### Delete Equipment
```
DELETE /api/equipment/{equipment_id}
Authorization: Bearer {token}
```

#### Get Equipment Statistics
```
GET /api/equipment/stats
Authorization: Bearer {token}
```

**Response:**
```json
{
  "stats": {
    "total_items": 8,
    "operational_items": 7,
    "primary_items": 3,
    "equipment_types": 5,
    "antennas": 3,
    "transceivers": 2,
    "sdrs": 2
  }
}
```

#### Search Equipment by Frequency
```
GET /api/equipment/frequency/144.5
Authorization: Bearer {token}
```

Returns all equipment that can operate on the specified frequency (144.5 MHz).

#### Get Equipment Suggestions
```
GET /api/equipment/suggestions
Authorization: Bearer {token}
```

**Response:**
```json
{
  "suggestions": [
    {
      "type": "antenna",
      "reason": "You have an SDR but no antenna. An antenna is essential for receiving signals.",
      "priority": "high"
    }
  ]
}
```

---

### Equipment Presets Endpoints

#### Get All Presets
```
GET /api/equipment/presets/all
Query params: ?type=sdr&manufacturer=Great%20Scott%20Gadgets&search=hackrf
```

**Response:**
```json
{
  "presets": [
    {
      "preset_id": "...",
      "equipment_type": "sdr",
      "manufacturer": "Great Scott Gadgets",
      "model": "HackRF One",
      "description": "Software Defined Radio with 1 MHz to 6 GHz range",
      "frequency_range_min": 1,
      "frequency_range_max": 6000,
      "popularity_count": 142,
      "is_verified": true
    }
  ],
  "count": 1
}
```

---

### Equipment Setups Endpoints

#### Create Setup
```
POST /api/equipment/setups
Authorization: Bearer {token}

{
  "setup_name": "HF Portable Station",
  "description": "Portable setup for field operations",
  "purpose": "HF Portable",
  "equipment_items": [
    "equipment_id_1",
    "equipment_id_2",
    "equipment_id_3"
  ],
  "configuration_notes": "Connect transceiver to antenna via 10m coax...",
  "is_active": true,
  "is_favorite": true
}
```

#### Get All Setups
```
GET /api/equipment/setups/all
Authorization: Bearer {token}
```

#### Get Setup with Equipment Details
```
GET /api/equipment/setups/{setup_id}
Authorization: Bearer {token}
```

**Response:**
```json
{
  "setup": {
    "setup_id": "...",
    "setup_name": "HF Portable Station",
    "description": "...",
    "purpose": "HF Portable",
    "equipment_items": ["id1", "id2"],
    "equipment_details": [
      {
        "equipment_id": "id1",
        "model": "FT-891",
        "equipment_type": "transceiver"
      }
    ]
  }
}
```

#### Update Setup
```
PUT /api/equipment/setups/{setup_id}
Authorization: Bearer {token}

{
  "is_active": false,
  "last_used": "2025-10-12T14:30:00Z"
}
```

#### Delete Setup
```
DELETE /api/equipment/setups/{setup_id}
Authorization: Bearer {token}
```

---

## Migration Steps

### 1. Run the Migration SQL
```bash
psql -d rf_learning_hub -f backend/migrations/add_callsign_equipment.sql
```

This will:
- Add call sign fields to users table
- Create user_equipment table
- Create equipment_presets table
- Create equipment_setups table
- Create ai_equipment_suggestions table
- Insert initial equipment presets

### 2. Restart Backend Server
The new routes and models are already integrated into server.js

### 3. Test the Endpoints
Use Postman or curl to test:

```bash
# Get enhanced profile
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:3000/api/auth/profile/full

# Add equipment
curl -X POST http://localhost:3000/api/equipment \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "equipment_type": "sdr",
    "manufacturer": "Great Scott Gadgets",
    "model": "HackRF One",
    "frequency_range_min": 1,
    "frequency_range_max": 6000
  }'
```

---

## Frontend Integration

### Profile Page Update

Create `/frontend/pages/profile.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Profile - RF Learning Hub</title>
    <link rel="stylesheet" href="../assets/css/main.css">
</head>
<body>
    <div class="profile-container">
        <h1>My Profile</h1>
        
        <!-- Basic Info Section -->
        <section class="profile-section">
            <h2>Personal Information</h2>
            <div class="form-group">
                <label>Username:</label>
                <input type="text" id="username" disabled>
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input type="email" id="email" disabled>
            </div>
        </section>

        <!-- Call Sign Section -->
        <section class="profile-section callsign-section">
            <h2>Amateur Radio Call Sign</h2>
            <p class="section-note">
                Add your amateur radio call sign once you've passed your licensing exam!
            </p>
            <div class="form-group">
                <label>Call Sign:</label>
                <input type="text" id="callSign" placeholder="e.g., M0ABC, K1XYZ">
                <span id="callSignVerified" class="badge verified" style="display:none;">
                    ✓ Verified
                </span>
            </div>
            <div class="form-group">
                <label>Country:</label>
                <select id="callSignCountry">
                    <option value="">Select Country</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <!-- Add more countries -->
                </select>
            </div>
            <div class="form-group">
                <label>License Class:</label>
                <select id="licenseClass">
                    <option value="">Select License Class</option>
                    <option value="Foundation">Foundation</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Full">Full</option>
                    <option value="Technician">Technician (US)</option>
                    <option value="General">General (US)</option>
                    <option value="Extra">Extra (US)</option>
                </select>
            </div>
            <button id="saveCallSign" class="btn btn-primary">
                Save Call Sign
            </button>
        </section>

        <!-- Equipment Stats Section -->
        <section class="profile-section equipment-stats">
            <h2>My Equipment</h2>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-value" id="totalEquipment">0</div>
                    <div class="stat-label">Total Items</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" id="sdrs">0</div>
                    <div class="stat-label">SDRs</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" id="transceivers">0</div>
                    <div class="stat-label">Transceivers</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" id="antennas">0</div>
                    <div class="stat-label">Antennas</div>
                </div>
            </div>
            <a href="equipment.html" class="btn btn-secondary">
                Manage Equipment →
            </a>
        </section>
    </div>

    <script src="../assets/js/profile.js"></script>
</body>
</html>
```

### Equipment Page

Create `/frontend/pages/equipment.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Equipment - RF Learning Hub</title>
    <link rel="stylesheet" href="../assets/css/main.css">
</head>
<body>
    <div class="equipment-container">
        <div class="page-header">
            <h1>My Equipment Inventory</h1>
            <button id="addEquipmentBtn" class="btn btn-primary">
                + Add Equipment
            </button>
        </div>

        <!-- Equipment Filter -->
        <div class="filter-bar">
            <select id="typeFilter">
                <option value="">All Types</option>
                <option value="sdr">SDRs</option>
                <option value="transceiver">Transceivers</option>
                <option value="antenna">Antennas</option>
                <option value="amplifier">Amplifiers</option>
                <option value="analyzer">Analyzers</option>
            </select>
            <select id="statusFilter">
                <option value="">All Status</option>
                <option value="operational">Operational</option>
                <option value="maintenance">Maintenance</option>
                <option value="broken">Broken</option>
            </select>
        </div>

        <!-- Equipment List -->
        <div id="equipmentList" class="equipment-grid">
            <!-- Equipment cards will be added here dynamically -->
        </div>

        <!-- Add Equipment Modal -->
        <div id="addEquipmentModal" class="modal" style="display:none;">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Add Equipment</h2>
                
                <div class="tabs">
                    <button class="tab active" data-tab="manual">Manual Entry</button>
                    <button class="tab" data-tab="preset">From Preset</button>
                </div>

                <div id="manualTab" class="tab-content active">
                    <form id="addEquipmentForm">
                        <div class="form-group">
                            <label>Equipment Type:*</label>
                            <select name="equipment_type" required>
                                <option value="">Select Type</option>
                                <option value="sdr">SDR</option>
                                <option value="transceiver">Transceiver</option>
                                <option value="antenna">Antenna</option>
                                <option value="amplifier">Amplifier</option>
                                <option value="analyzer">Analyzer</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Manufacturer:</label>
                            <input type="text" name="manufacturer">
                        </div>
                        <div class="form-group">
                            <label>Model:*</label>
                            <input type="text" name="model" required>
                        </div>
                        <div class="form-group">
                            <label>Description:</label>
                            <textarea name="description" rows="3"></textarea>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Min Frequency (MHz):</label>
                                <input type="number" name="frequency_range_min" step="0.001">
                            </div>
                            <div class="form-group">
                                <label>Max Frequency (MHz):</label>
                                <input type="number" name="frequency_range_max" step="0.001">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Add Equipment</button>
                    </form>
                </div>

                <div id="presetTab" class="tab-content">
                    <div class="preset-search">
                        <input type="text" id="presetSearch" placeholder="Search presets...">
                        <select id="presetTypeFilter">
                            <option value="">All Types</option>
                            <option value="sdr">SDRs</option>
                            <option value="transceiver">Transceivers</option>
                            <option value="antenna">Antennas</option>
                        </select>
                    </div>
                    <div id="presetList" class="preset-list">
                        <!-- Presets will be loaded here -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="../assets/js/equipment.js"></script>
</body>
</html>
```

---

## JavaScript Examples

### Profile Page (`/frontend/assets/js/profile.js`)

```javascript
// Load profile data
async function loadProfile() {
    const token = localStorage.getItem('token');
    
    try {
        const response = await fetch('http://localhost:3000/api/auth/profile/full', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        const data = await response.json();
        const profile = data.profile;
        
        // Populate basic info
        document.getElementById('username').value = profile.username;
        document.getElementById('email').value = profile.email;
        
        // Populate call sign info
        if (profile.call_sign) {
            document.getElementById('callSign').value = profile.call_sign;
            document.getElementById('callSignCountry').value = profile.call_sign_country || '';
            document.getElementById('licenseClass').value = profile.call_sign_license_class || '';
            
            if (profile.call_sign_verified) {
                document.getElementById('callSignVerified').style.display = 'inline';
            }
        }
        
        // Populate equipment stats
        const stats = profile.equipment_stats;
        document.getElementById('totalEquipment').textContent = stats.total_equipment;
        document.getElementById('sdrs').textContent = stats.sdrs;
        document.getElementById('transceivers').textContent = stats.transceivers;
        document.getElementById('antennas').textContent = stats.antennas;
        
    } catch (error) {
        console.error('Error loading profile:', error);
        alert('Failed to load profile');
    }
}

// Save call sign
document.getElementById('saveCallSign').addEventListener('click', async () => {
    const token = localStorage.getItem('token');
    const callSign = document.getElementById('callSign').value.trim().toUpperCase();
    const country = document.getElementById('callSignCountry').value;
    const licenseClass = document.getElementById('licenseClass').value;
    
    if (!callSign) {
        alert('Please enter a call sign');
        return;
    }
    
    try {
        const response = await fetch('http://localhost:3000/api/auth/profile', {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                call_sign: callSign,
                call_sign_country: country,
                call_sign_license_class: licenseClass
            })
        });
        
        if (response.ok) {
            alert('Call sign saved successfully!');
            loadProfile(); // Reload to show updates
        } else {
            const error = await response.json();
            alert('Error: ' + error.error);
        }
    } catch (error) {
        console.error('Error saving call sign:', error);
        alert('Failed to save call sign');
    }
});

// Load on page load
document.addEventListener('DOMContentLoaded', loadProfile);
```

---

## Future AI Integration Examples

### Activity Suggestions Based on Equipment

**Example Scenario:**
User has: HackRF SDR + Airband Antenna

**AI Suggestion:**
```json
{
  "title": "Monitor Air Traffic Communications",
  "description": "Learn how to use your HackRF and airband antenna to monitor aircraft communications",
  "difficulty": "beginner",
  "estimated_time_minutes": 30,
  "steps": [
    "Connect your HackRF to the airband antenna using appropriate cable",
    "Install and launch SDR++ software",
    "Set frequency to 118.0-137.0 MHz (VHF Airband)",
    "Configure AM demodulation mode",
    "Tune to your local airport's tower frequency",
    "Listen to pilot-ATC communications"
  ],
  "expected_results": "You should hear clear voice communications between pilots and air traffic control",
  "tips": "Best results near airports during busy hours (7am-9pm)"
}
```

**Example Scenario:**
User has: VHF Transceiver + Yagi Antenna + No completed modules

**AI Suggestion:**
```json
{
  "title": "Complete Module 1.2: Understanding Frequency Bands",
  "description": "Before using your VHF transceiver, learn about frequency allocations and band plans",
  "suggestion_type": "module",
  "related_module_id": "module_1_2_id",
  "reason": "Understanding frequency bands is essential before transmitting on VHF"
}
```

---

## Testing Checklist

### Backend Testing

- [ ] Migration runs successfully
- [ ] All equipment endpoints respond correctly
- [ ] Call sign can be added to profile
- [ ] Call sign lookup works
- [ ] Equipment CRUD operations work
- [ ] Equipment presets load correctly
- [ ] Setup creation and management works
- [ ] Equipment statistics calculate correctly
- [ ] Frequency search returns correct equipment

### Frontend Testing

- [ ] Profile page displays call sign section
- [ ] Call sign can be saved
- [ ] Equipment stats display correctly
- [ ] Equipment page loads equipment list
- [ ] Add equipment modal works
- [ ] Equipment filtering works
- [ ] Preset selection works
- [ ] Equipment cards display correctly

---

## Next Steps

1. **Run the migration** to add database tables
2. **Test backend endpoints** using Postman
3. **Create frontend pages** for profile and equipment
4. **Add CSS styling** to match existing site design
5. **Test the complete flow** of adding call sign and equipment
6. **Plan AI integration** for equipment suggestions

---

## Notes for Future Development

### AI Integration Plans
- Use user's equipment inventory to suggest relevant learning modules
- Generate custom experiments based on available equipment
- Recommend equipment upgrades based on learning progress
- Create equipment compatibility warnings
- Suggest practical tests and measurements

### Additional Features to Consider
- Equipment value tracking for insurance
- Maintenance schedule reminders
- Equipment loan tracking
- Equipment photos/documentation storage
- Integration with QRZ.com for call sign verification
- Equipment marketplace (buy/sell/trade)
- Station diagram builder
- Equipment comparison tool

---

**Status:** Implementation Complete - Ready for Testing  
**Next Task:** Run migration and test backend endpoints
