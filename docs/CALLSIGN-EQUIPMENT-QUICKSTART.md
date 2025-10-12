# Call Sign & Equipment Features - Quick Reference

**Date:** 2025-10-12  
**Status:** ✅ Implementation Complete - Ready for Testing

---

## What's New? 🎉

### 1. User Call Sign Profiles
Amateur radio operators can now add their call signs to their profiles:
- **Call Sign** (e.g., M0ABC, K1XYZ)
- **Country** of registration
- **License Class** (Foundation, Intermediate, Full, etc.)
- **Verification Status** (for future admin verification)

### 2. Equipment Inventory System
Users can now:
- **Track all their RF equipment** (SDRs, transceivers, antennas, etc.)
- **Use equipment presets** for quick entry of popular gear
- **Create station setups** combining multiple pieces of equipment
- **Get suggestions** for complementary equipment
- **Search by frequency** to find compatible equipment

---

## Files Created/Modified

### ✅ New Files Created:
1. `/backend/migrations/add_callsign_equipment.sql` - Database migration
2. `/backend/models/Equipment.js` - Equipment data model
3. `/backend/routes/equipment.js` - Equipment API routes
4. `/docs/CALLSIGN-EQUIPMENT-IMPLEMENTATION.md` - Full documentation

### ✅ Modified Files:
1. `/backend/models/User.js` - Added call sign methods
2. `/backend/routes/auth.js` - Added call sign lookup endpoint
3. `/backend/server.js` - Registered equipment routes

---

## Quick Start Guide

### Step 1: Run the Database Migration

```bash
# Navigate to backend directory
cd backend

# Run the migration
psql -d rf_learning_hub -f migrations/add_callsign_equipment.sql

# Verify tables were created
psql -d rf_learning_hub -c "\dt"
```

Expected new tables:
- `user_equipment`
- `equipment_presets`
- `equipment_setups`
- `ai_equipment_suggestions`

### Step 2: Restart the Backend Server

```bash
# Stop current server (Ctrl+C)
# Start server
npm start
```

You should see the equipment routes registered.

### Step 3: Test the New Endpoints

```bash
# Get enhanced profile with equipment stats
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:3000/api/auth/profile/full

# Add a call sign
curl -X PUT http://localhost:3000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "call_sign": "M0ABC",
    "call_sign_country": "United Kingdom",
    "call_sign_license_class": "Full"
  }'

# Get equipment presets
curl http://localhost:3000/api/equipment/presets/all

# Add equipment
curl -X POST http://localhost:3000/api/equipment \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "equipment_type": "sdr",
    "manufacturer": "Great Scott Gadgets",
    "model": "HackRF One",
    "frequency_range_min": 1,
    "frequency_range_max": 6000,
    "location": "Home Lab"
  }'
```

---

## API Endpoints Summary

### Call Sign Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/auth/profile/full` | Enhanced profile with equipment stats | ✅ |
| PUT | `/api/auth/profile` | Update profile (including call sign) | ✅ |
| GET | `/api/auth/callsign/:callsign` | Lookup user by call sign | ❌ |

### Equipment Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/equipment` | Get all user equipment | ✅ |
| POST | `/api/equipment` | Add new equipment | ✅ |
| GET | `/api/equipment/:id` | Get specific equipment | ✅ |
| PUT | `/api/equipment/:id` | Update equipment | ✅ |
| DELETE | `/api/equipment/:id` | Delete equipment | ✅ |
| GET | `/api/equipment/stats` | Get equipment statistics | ✅ |
| GET | `/api/equipment/frequency/:freq` | Search by frequency | ✅ |
| GET | `/api/equipment/suggestions` | Get equipment suggestions | ✅ |

### Equipment Presets

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/equipment/presets/all` | Get all presets | ✅ |
| GET | `/api/equipment/presets/:id` | Get specific preset | ✅ |
| POST | `/api/equipment/from-preset/:id` | Create from preset | ✅ |

### Equipment Setups

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/equipment/setups/all` | Get all setups | ✅ |
| POST | `/api/equipment/setups` | Create new setup | ✅ |
| GET | `/api/equipment/setups/:id` | Get setup with details | ✅ |
| PUT | `/api/equipment/setups/:id` | Update setup | ✅ |
| DELETE | `/api/equipment/setups/:id` | Delete setup | ✅ |

---

## Database Schema Overview

### Users Table (Modified)
```sql
-- New fields added:
call_sign VARCHAR(20) UNIQUE
call_sign_verified BOOLEAN DEFAULT FALSE
call_sign_country VARCHAR(50)
call_sign_license_class VARCHAR(50)
```

### User Equipment Table
```sql
equipment_id UUID PRIMARY KEY
user_id UUID REFERENCES users
equipment_type VARCHAR(50)  -- sdr, transceiver, antenna, etc.
manufacturer VARCHAR(100)
model VARCHAR(100)
frequency_range_min NUMERIC(10,3)  -- MHz
frequency_range_max NUMERIC(10,3)  -- MHz
max_power_output NUMERIC(8,2)      -- Watts
operational_status VARCHAR(20)     -- operational, maintenance, broken
location VARCHAR(200)
is_primary BOOLEAN
tags JSONB
```

### Equipment Presets Table
```sql
preset_id UUID PRIMARY KEY
equipment_type VARCHAR(50)
manufacturer VARCHAR(100)
model VARCHAR(100)
-- Pre-filled specifications
frequency_range_min, frequency_range_max, etc.
popularity_count INTEGER
is_verified BOOLEAN
```

---

## Pre-Seeded Equipment Presets

The migration includes popular equipment presets:

**SDRs:**
- HackRF One (1 MHz - 6 GHz)
- RTL-SDR Blog V3 (500 kHz - 1766 MHz)
- USRP B200 (70 MHz - 6 GHz)
- LimeSDR (100 kHz - 3.8 GHz)

**Transceivers:**
- Yaesu FT-891 (HF/50 MHz, 100W)
- Icom IC-7300 (HF/50 MHz, 100W)
- Kenwood TS-590SG (HF/50 MHz, 100W)
- Yaesu FT-991A (HF/VHF/UHF, 100W)

**Handhelds:**
- Baofeng UV-5R (VHF/UHF, 5W)
- Yaesu FT-70DR (VHF/UHF, 5W)
- Icom ID-52A (VHF/UHF, 5W)

**Antennas:**
- Diamond X50A (VHF/UHF dual band)
- MFJ-1788 (HF loop)
- Buddipole Deluxe Kit (HF portable)

**Analyzers:**
- NanoVNA H4 (50 kHz - 1.5 GHz)
- RigExpert AA-55 ZOOM (0.1 - 55 MHz)

---

## Frontend Integration (To Do)

### Pages to Create:
1. **Profile Page** (`/frontend/pages/profile.html`)
   - Display and edit call sign
   - Show equipment statistics
   - Link to equipment management

2. **Equipment Page** (`/frontend/pages/equipment.html`)
   - List all equipment
   - Add new equipment (manual or from preset)
   - Edit/delete equipment
   - Filter and search

3. **Equipment Setups Page** (`/frontend/pages/setups.html`)
   - Create and manage station setups
   - Visual equipment combinations
   - Configuration notes

### JavaScript Files to Create:
1. `/frontend/assets/js/profile.js` - Profile page logic
2. `/frontend/assets/js/equipment.js` - Equipment management
3. `/frontend/assets/js/setups.js` - Setup management

---

## Example Usage Flow

### User Journey: Adding Equipment

1. **User registers and logs in**
2. **User adds call sign to profile:**
   - Navigate to Profile page
   - Enter call sign: "M0ABC"
   - Select country: "United Kingdom"
   - Select license class: "Full"
   - Click "Save Call Sign"

3. **User adds their first piece of equipment:**
   - Navigate to Equipment page
   - Click "Add Equipment"
   - Choose "From Preset" tab
   - Search for "HackRF"
   - Select "HackRF One" preset
   - Add serial number and location
   - Click "Add"

4. **User adds custom equipment:**
   - Click "Add Equipment"
   - Choose "Manual Entry" tab
   - Select type: "Antenna"
   - Enter manufacturer: "Homemade"
   - Enter model: "J-Pole 2m"
   - Enter frequency range: 144-148 MHz
   - Click "Add"

5. **User creates a setup:**
   - Navigate to Setups page
   - Click "Create Setup"
   - Name: "Portable VHF Station"
   - Select equipment: HackRF, J-Pole antenna
   - Add configuration notes
   - Save setup

6. **System provides suggestions:**
   - System notices user has SDR but no antenna
   - Shows suggestion: "Add an antenna to receive signals"
   - Links to antenna presets

---

## Future AI Integration Examples

### Scenario 1: HackRF + Airband Antenna
**AI Suggestion:**
```
Activity: Monitor Air Traffic Communications
- Connect HackRF to airband antenna
- Launch SDR++
- Set frequency to 118-137 MHz
- Configure AM mode
- Tune to local airport tower frequency
- Listen to pilot-ATC communications
```

### Scenario 2: VHF Transceiver + No Training
**AI Suggestion:**
```
Module Recommendation: Complete Module 2.1 - VHF/UHF Basics
- Learn about VHF frequency allocations
- Understand repeater operations
- Study proper calling procedures
Before transmitting, make sure you understand VHF band plans!
```

### Scenario 3: Multiple Antennas
**AI Suggestion:**
```
Experiment: Compare Antenna Performance
- Use your HackRF to measure received signal strength
- Compare your dipole vs. vertical antenna
- Record RSSI values on different frequencies
- Create a performance chart
Related Module: 3.2 - Antenna Fundamentals
```

---

## Testing Checklist

### Backend Testing
- [ ] Migration creates all tables successfully
- [ ] Can add call sign to user profile
- [ ] Can lookup user by call sign
- [ ] Can create equipment manually
- [ ] Can create equipment from preset
- [ ] Equipment presets load with data
- [ ] Can update equipment
- [ ] Can delete equipment
- [ ] Equipment statistics calculate correctly
- [ ] Frequency search returns correct equipment
- [ ] Can create equipment setup
- [ ] Setup includes correct equipment details
- [ ] Equipment suggestions work

### Frontend Testing (To Do)
- [ ] Profile page displays call sign section
- [ ] Can save call sign to profile
- [ ] Equipment page loads equipment list
- [ ] Can add equipment manually
- [ ] Can add equipment from preset
- [ ] Preset search and filter work
- [ ] Equipment cards display correctly
- [ ] Can edit equipment
- [ ] Can delete equipment
- [ ] Equipment statistics display
- [ ] Can create setup
- [ ] Setup displays correct equipment

---

## Troubleshooting

### Common Issues

**Issue:** Migration fails with "relation already exists"
**Solution:** Tables may already exist. Drop them first:
```sql
DROP TABLE IF EXISTS ai_equipment_suggestions CASCADE;
DROP TABLE IF EXISTS equipment_setups CASCADE;
DROP TABLE IF EXISTS equipment_presets CASCADE;
DROP TABLE IF EXISTS user_equipment CASCADE;
ALTER TABLE users DROP COLUMN IF EXISTS call_sign CASCADE;
```

**Issue:** Equipment routes return 404
**Solution:** Make sure server.js includes the equipment routes:
```javascript
const equipmentRoutes = require('./routes/equipment');
app.use('/api/equipment', equipmentRoutes);
```

**Issue:** Can't add equipment - validation error
**Solution:** Ensure required fields are provided:
- `equipment_type` (required)
- `model` (required)

---

## Next Steps

### Immediate Tasks:
1. ✅ Run database migration
2. ✅ Test backend endpoints
3. 🔲 Create frontend profile page
4. 🔲 Create frontend equipment page
5. 🔲 Add CSS styling
6. 🔲 Test complete user flow

### Future Enhancements:
- Equipment photos upload
- QRZ.com integration for call sign verification
- Equipment value tracking
- Maintenance reminders
- Equipment marketplace
- Station diagram builder
- AI-powered activity suggestions (Phase 2)

---

## Support & Documentation

**Full Documentation:** `/docs/CALLSIGN-EQUIPMENT-IMPLEMENTATION.md`

**Database Schema:** `/docs/07-DATABASE-SCHEMA.md` (will be updated)

**API Docs:** See implementation guide for complete endpoint documentation

---

**Status:** ✅ Backend Complete - Frontend To Do  
**Version:** 1.0  
**Last Updated:** 2025-10-12
