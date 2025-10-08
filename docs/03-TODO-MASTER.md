[FULL CONTENT FROM 03-TODO-MASTER ARTIFACT]
# Master To-Do List

**Prioritized Task Backlog**  
**Last Updated:** October 8, 2025 23:00 UTC  
**Next Review:** October 10, 2025 (Anthony)

---

## Legend

**Priority:**
- 🔥 CRITICAL - Blocking other work, do immediately
- ⚡ HIGH - Core functionality, this week
- 📌 MEDIUM - Important but not urgent, next 2 weeks
- 💡 LOW - Nice to have, future

**Assignment:**
- 🎯 ANTHONY - Needs Anthony's decision/input
- 🔍 CLAUDE - Research/planning task
- 🔧 CC - Implementation/coding task
- 👥 ALL - Requires collaboration

**Status:**
- ⏳ Not Started
- 🔄 In Progress  
- ⏸️ Blocked/Waiting
- ✅ Complete

---

## 🔥 CRITICAL (Do First)

### 1. 🎯 ANTHONY: Choose Backend Technology
**Priority:** 🔥 CRITICAL  
**Status:** ⏳ Not Started  
**Deadline:** October 10, 2025  
**Estimated Time:** 2 hours (research + decision)

**Task:** Decide between Firebase vs Node.js + PostgreSQL

**Options:**
1. **Firebase (Recommended for MVP)**
   - ✅ Faster setup (days vs weeks)
   - ✅ Built-in auth, real-time DB
   - ✅ Free tier: 50k reads/day, 20k writes/day
   - ✅ Hosting included
   - ❌ Vendor lock-in
   - ❌ Less flexibility long-term

2. **Node.js + PostgreSQL**
   - ✅ Full control
   - ✅ No vendor lock-in
   - ✅ Better for complex queries
   - ❌ Longer setup time
   - ❌ Need separate hosting
   - ❌ More maintenance

**Impacts:** Authentication, progress tracking, quiz system, all user features  
**Blocks:** 8+ tasks waiting on this decision

**Action Items:**
- [ ] Test Firebase free tier with sample data
- [ ] Compare hosting costs (Firebase vs VPS)
- [ ] Consider migration path if we outgrow Firebase
- [ ] Make final decision and document in ANTHONY-DECISIONS.md

---

### 2. 🔧 CC: Create assets/js/main.js File
**Priority:** 🔥 CRITICAL  
**Status:** ⏳ Not Started  
**Assigned:** Claude Code  
**Deadline:** October 9, 2025  
**Estimated Time:** 2 hours

**Task:** Create the missing main.js file (currently referenced but doesn't exist)

**Required Functions:**
```javascript
// localStorage wrapper
function saveProgress(key, data)
function loadProgress(key)
function clearProgress()

// Utility functions  
function showModal(content)
function hideModal()
function showToast(message, type)

// Data export
function exportToJSON(data, filename)
function exportToCSV(data, filename)

// Form validation
function validateEmail(email)
function validateForm(formId)

// Event handlers
function initializeEventListeners()
```

**Blocks:** Progress tracking, all interactive features

**Action Items:**
- [ ] Create file at rf-learning-hub/assets/js/main.js
- [ ] Implement localStorage wrapper functions
- [ ] Add error handling and logging
- [ ] Test in all major browsers
- [ ] Update FILE-STRUCTURE.md
- [ ] Document functions in implementation-notes/

---

### 3. 🔍 CLAUDE: Complete Database Schema Design
**Priority:** 🔥 CRITICAL  
**Status:** 🔄 In Progress (60% complete)  
**Assigned:** Claude  
**Deadline:** October 9, 2025  
**Estimated Time:** 3 hours remaining

**Task:** Finish database schema and API endpoint specifications

**Remaining Work:**
- [ ] Complete quiz_attempts table (scoring logic)
- [ ] Design user_badges table
- [ ] Define saved_calculations table
- [ ] Document all API endpoints
  - Authentication endpoints (login, register, verify)
  - Progress endpoints (get, update, delete)
  - Quiz endpoints (fetch, submit, results)
  - User profile endpoints
- [ ] Create sample data (JSON fixtures)
- [ ] Write implementation guide for CC

**Dependencies:** Waiting for Anthony's backend decision  
**Output:** Complete 07-DATABASE-SCHEMA.md document

**Action Items:**
- [ ] Complete table designs
- [ ] Document relationships and constraints
- [ ] Create API endpoint specifications
- [ ] Prepare sample queries
- [ ] Pass to CC when ready

---

## ⚡ HIGH PRIORITY (This Week: Oct 8-15)

### 4. 🔧 CC: Build pages/learning-path.html
**Priority:** ⚡ HIGH  
**Status:** ⏳ Not Started  
**Assigned:** Claude Code  
**Deadline:** October 10, 2025  
**Estimated Time:** 8 hours

**Task:** Implement the 26-module curriculum page with progress tracking

**Requirements:**
- [ ] Create page structure with navigation
- [ ] Implement 4 phase sections (expandable/collapsible)
- [ ] Add all 26 modules with:
  - Module title and number
  - Description
  - Learning objectives (3-5 per module)
  - Estimated time
  - Prerequisite indicators
  - Progress checkbox (localStorage)
  - Quiz link (when available)
- [ ] Progress visualization
  - Overall percentage
  - Per-phase completion
  - Module completion badges
- [ ] Export progress feature (JSON/CSV)
- [ ] Mobile responsive design
- [ ] Smooth scroll navigation

**Spec Location:** claude/content-drafts/learning-path-content.md (to be created by Claude)  
**Dependencies:** main.js for localStorage functions

**Action Items:**
- [ ] Review module list from old context doc
- [ ] Create HTML structure
- [ ] Implement localStorage progress tracking
- [ ] Add accordion expand/collapse
- [ ] Mobile testing
- [ ] Update PROGRESS-TRACKER.md when complete

---

### 5. 🔍 CLAUDE: Create Quiz Question Bank
**Priority:** ⚡ HIGH  
**Status:** ⏳ Not Started  
**Assigned:** Claude  
**Deadline:** October 12, 2025  
**Estimated Time:** 6 hours

**Task:** Write 60+ quiz questions for Phase 1 modules (10 per module)

**Coverage:**
- Module 1.1: Introduction to RF (10 questions)
- Module 1.2: Electromagnetic Waves (10 questions)
- Module 1.3: Frequency and Wavelength (10 questions)
- Module 1.4: Antenna Fundamentals (10 questions)
- Module 1.5: Transmission Lines (10 questions)
- Module 1.6: Impedance Matching (10 questions)

**Format:**
```json
{
  "question_id": "m1.1-q1",
  "module": "1.1",
  "difficulty": "beginner",
  "question": "What does RF stand for?",
  "options": ["Radio Frequency", "Rapid Fire", "Real Fast", "Range Finder"],
  "correct_answer": 0,
  "explanation": "RF stands for Radio Frequency, referring to electromagnetic waves..."
}
```

**Quality Requirements:**
- Mix of difficulty levels (60% beginner, 30% intermediate, 10% advanced)
- Include calculations where appropriate
- Provide detailed explanations for all answers
- Cover key concepts from each module

**Output Location:** claude/content-drafts/quiz-questions-phase1.json

---

### 6. 🔧 CC: Fix Mobile Navigation Menu
**Priority:** ⚡ HIGH  
**Status:** ⏳ Not Started  
**Assigned:** Claude Code  
**Deadline:** October 9, 2025  
**Estimated Time:** 2 hours

**Task:** Implement hamburger menu for mobile devices (<768px)

**Requirements:**
- [ ] Add hamburger icon (☰) in mobile view
- [ ] Hide full nav menu on mobile
- [ ] Slide-in menu animation
- [ ] Close menu on item click
- [ ] Smooth transitions
- [ ] Test on actual mobile devices

**Files to Modify:**
- rf-learning-hub/assets/css/styles.css (add mobile nav styles)
- rf-learning-hub/assets/js/main.js (add menu toggle function)
- All pages (consistent across site)

---

### 7. 🔧 CC: Adjust Image Gallery for Mobile
**Priority:** ⚡ HIGH  
**Status:** ⏳ Not Started  
**Assigned:** Claude Code  
**Deadline:** October 9, 2025  
**Estimated Time:** 1 hour

**Task:** Fix image gallery grid breaking on narrow screens (<400px)

**Issue:** Current min-width of 280px causes horizontal scroll on small phones

**Solution:**
```css
.antenna-image-gallery {
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
}
```

**Files to Modify:**
- pages/antennas.html (inline styles section)
- Test on iPhone SE (375px), Galaxy Fold (280px)

---

### 8. 🎯 ANTHONY: Test Mobile Responsive Design
**Priority:** ⚡ HIGH  
**Status:** ⏳ Not Started  
**Assigned:** Anthony  
**Deadline:** October 10, 2025  
**Estimated Time:** 1 hour

**Task:** Test all 3 completed pages on mobile devices

**Devices to Test:**
- [ ] iPhone (Safari iOS)
- [ ] Android phone (Chrome)
- [ ] iPad (Safari)
- [ ] Android tablet (Chrome)

**Pages to Test:**
- [ ] index.html
- [ ] pages/frequency-bands.html
- [ ] pages/antennas.html

**Check For:**
- Navigation usability
- Image loading and sizing
- Text readability
- Button/link tap targets (min 44x44px)
- Horizontal scrolling (should be none)
- Form inputs (if any)

**Report Issues:** Create new tasks in TODO-MASTER.md for any bugs found

---

### 9. 🔍 CLAUDE: Write Equipment Page Content
**Priority:** ⚡ HIGH  
**Status:** ⏳ Not Started  
**Assigned:** Claude  
**Deadline:** October 11, 2025  
**Estimated Time:** 3 hours

**Task:** Create comprehensive content for equipment.html page

**Content Needed:**
- Complete equipment inventory (from context doc)
- Detailed specifications for each item
- Purchase information and links
- Documentation links
- Use cases and applications
- Maintenance and calibration notes
- Integration with other equipment
- Photos (to be added by Anthony)

**Equipment to Document:**
1. Rigol RSA5065N (full specs, VNA capabilities)
2. HackRF One
3. RTL-SDR devices (v3, v4)
4. SAWbird filters
5. All antennas
6. Raspberry Pi setup
7. Cables and accessories

**Output Location:** claude/content-drafts/equipment-page-content.md  
**Handoff to:** CC for HTML implementation

---

### 10. 🔍 CLAUDE: Research Authentication Best Practices
**Priority:** ⚡ HIGH  
**Status:** ⏳ Not Started  
**Assigned:** Claude  
**Deadline:** October 12, 2025  
**Estimated Time:** 4 hours

**Task:** Research and document authentication implementation

**Research Topics:**
- JWT vs session-based auth
- Password hashing (bcrypt, argon2)
- Email verification flow
- Password reset flow
- OAuth integration (Google, GitHub)
- Security best practices
- GDPR compliance for user data

**Dependencies:** Waiting for Anthony's backend decision

**Output:** Create new chat "3 - Authentication System Research"  
**Deliverable:** Authentication implementation guide for CC

---

## 📌 MEDIUM PRIORITY (Next 2 Weeks: Oct 15-29)

### 11. 🔧 CC: Build pages/equipment.html
**Priority:** 📌 MEDIUM  
**Status:** ⏳ Not Started  
**Assigned:** Claude Code  
**Deadline:** October 14, 2025  
**Estimated Time:** 6 hours

**Task:** Implement equipment inventory page

**Requirements:**
- Equipment cards with specs
- Filter by category (SDR, VNA, Antennas, etc.)
- Search functionality
- Photo gallery per item
- Documentation links
- Purchase information
- Maintenance log integration

**Dependencies:** 
- Content from Claude (task #9)
- Photos from Anthony

---

### 12. 🔧 CC: Build pages/measurements.html
**Priority:** 📌 MEDIUM  
**Status:** ⏳ Not Started  
**Assigned:** Claude Code  
**Deadline:** October 16, 2025  
**Estimated Time:** 6 hours

**Task:** Create VNA measurement database and visualization page

**Requirements:**
- Upload CSV files from VNA
- S11, S21 parameter display
- Smith chart visualization (using chart.js or plotly)
- Frequency sweep graphs
- Filter by antenna, date, frequency range
- Export measurements
- Comparison tool (overlay multiple measurements)

**Dependencies:**
- Database schema for measurements
- Chart.js or Plotly.js library integration

---

### 13. 🔍 CLAUDE: Create Measurement Logging Specification
**Priority:** 📌 MEDIUM  
**Status:** ⏳ Not Started  
**Assigned:** Claude  
**Deadline:** October 13, 2025  
**Estimated Time:** 3 hours

**Task:** Design VNA measurement logging system

**Specifications Needed:**
- CSV file format (from RSA5065N)
- Database schema for measurements
- Metadata fields (antenna, date, conditions)
- Visualization requirements
- Export formats

**Output:** claude/research-notes/measurement-logging-spec.md

---

### 14. 🔧 CC: Build pages/calculators.html
**Priority:** 📌 MEDIUM  
**Status:** ⏳ Not Started  
**Assigned:** Claude Code  
**Deadline:** October 18, 2025  
**Estimated Time:** 8 hours

**Task:** Implement RF calculator suite

**Calculators to Build:**
1. Dipole length calculator
2. Yagi antenna designer
3. Impedance matching calculator
4. SWR calculator
5. Link budget calculator
6. dB/power conversion
7. Wavelength/frequency converter
8. Coax loss calculator

**Requirements:**
- Input validation
- Real-time calculation
- Unit conversion
- Save calculations (localStorage)
- Export results
- Formula display (educational)

**Dependencies:**
- Calculator specifications from Claude
- main.js utility functions

---

### 15. 🔍 CLAUDE: Write Calculator Specifications
**Priority:** 📌 MEDIUM  
**Status:** ⏳ Not Started  
**Assigned:** Claude  
**Deadline:** October 15, 2025  
**Estimated Time:** 5 hours

**Task:** Create detailed specifications for each calculator

**For Each Calculator:**
- Mathematical formulas
- Input fields and units
- Output format
- Validation rules
- Example calculations
- Educational notes

**Output:** claude/research-notes/calculator-specs.md  
**Handoff to:** CC for implementation

---

### 16. 🔧 CC: Build pages/notebook.html
**Priority:** 📌 MEDIUM  
**Status:** ⏳ Not Started  
**Assigned:** Claude Code  
**Deadline:** October 20, 2025  
**Estimated Time:** 5 hours

**Task:** Create lab notebook with rich text editor

**Requirements:**
- Rich text editing (consider Quill.js or TinyMCE)
- Date/time stamps
- Tag system
- Search functionality
- Photo uploads (integration with gallery)
- Export to PDF/Markdown
- Auto-save (localStorage)

**Dependencies:**
- Rich text editor library decision
- Photo upload system

---

### 17. 🔧 CC: Build pages/projects.html
**Priority:** 📌 MEDIUM  
**Status:** ⏳ Not Started  
**Assigned:** Claude Code  
**Deadline:** October 22, 2025  
**Estimated Time:** 6 hours

**Task:** Implement project tracker

**Requirements:**
- Project cards with status (Planning, In Progress, Complete)
- Construction logs
- Photo gallery per project
- Material lists
- Link to VNA measurements
- Share projects (future - community feature)
- Project templates (dipole, Yagi, etc.)

---

### 18. 🔧 CC: Build pages/gallery.html
**Priority:** 📌 MEDIUM  
**Status:** ⏳ Not Started  
**Assigned:** Claude Code  
**Deadline:** October 24, 2025  
**Estimated Time:** 5 hours

**Task:** Create photo gallery with upload

**Requirements:**
- Photo upload (drag-and-drop)
- Organize by category/project
- Thumbnails with lightbox
- EXIF data display
- Tag and search
- Export photo albums
- Bulk operations (delete, move)

---

### 19. 🎯 ANTHONY: Document VNA Measurements
**Priority:** 📌 MEDIUM  
**Status:** ⏳ Not Started  
**Assigned:** Anthony  
**Deadline:** October 17, 2025  
**Estimated Time:** 3 hours

**Task:** Create baseline VNA measurements for all antennas

**Antennas to Measure:**
- [ ] Discone (500 MHz - 2.5 GHz sweep)
- [ ] Airband dipole (118-137 MHz)
- [ ] 1090 MHz ADS-B antenna
- [ ] EFHW (7, 14, 21, 28 MHz)

**Data to Capture:**
- S11 (return loss)
- SWR across frequency range
- Smith chart screenshots
- Resonant frequencies
- Bandwidth at SWR 2:1
- Notes on conditions

**Output:** Export CSV files, save to anthony/equipment-logs/

---

### 20. 🎯 ANTHONY: Choose Domain Name
**Priority:** 📌 MEDIUM  
**Status:** ⏳ Not Started  
**Assigned:** Anthony  
**Deadline:** October 20, 2025  
**Estimated Time:** 1 hour

**Task:** Select and register domain for the website

**Options to Check:**
- [ ] rflearninghub.com
- [ ] learnrf.com
- [ ] rfmastery.org
- [ ] antennaguide.com
- [ ] [other suggestions]

**Action Items:**
- [ ] Check availability (Namecheap, GoDaddy)
- [ ] Check pricing
- [ ] Consider .com vs .org vs .io
- [ ] Register domain
- [ ] Document in ANTHONY-DECISIONS.md

---

## 💡 LOW PRIORITY (Future: After Oct 29)

### 21. 🔧 CC: Build pages/resources.html
**Priority:** 💡 LOW  
**Status:** ⏳ Not Started  
**Assigned:** Claude Code  
**Deadline:** November 1, 2025  
**Estimated Time:** 3 hours

**Task:** Create external resources compilation page

**Content:** (Already available from context doc)
- Books (ARRL, antenna books, etc.)
- Software tools (SDR++, GQRX, 4nec2)
- Online communities (Reddit, forums)
- YouTube channels
- Podcasts
- Conferences

**Requirements:**
- Categorized lists
- Search/filter
- User ratings (future)
- Add new resources (admin feature)

---

### 22. 🔧 CC: Build pages/videos.html
**Priority:** 💡 LOW  
**Status:** ⏳ Not Started  
**Assigned:** Claude Code  
**Deadline:** November 5, 2025  
**Estimated Time:** 4 hours

**Task:** Create video tutorial library

**Requirements:**
- YouTube playlist embeds
- Categorization by topic
- Search functionality
- Channel recommendations
- Bookmark videos
- Watch history tracking

**Dependencies:**
- Video curation from Anthony/Claude

---

### 23. 🔍 CLAUDE: Research RF Environment Mapping
**Priority:** 💡 LOW  
**Status:** ⏳ Not Started  
**Assigned:** Claude  
**Deadline:** November 10, 2025  
**Estimated Time:** 6 hours

**Task:** Research and spec RF mapping visualization

**Research Topics:**
- Spectrum waterfall display
- Signal strength heatmap
- Location tagging (GPS integration)
- Historical data visualization
- Data export formats

**Output:** claude/research-notes/rf-mapping-spec.md

---

### 24. 🔧 CC: Build pages/rf-map.html
**Priority:** 💡 LOW  
**Status:** ⏳ Not Started  
**Assigned:** Claude Code  
**Deadline:** November 20, 2025  
**Estimated Time:** 10 hours (complex)

**Task:** Implement RF environment mapping page

**Requirements:**
- Spectrum waterfall (canvas or WebGL)
- Signal strength heatmap
- Location tagging
- Historical data playback
- Export data (CSV, JSON)

**Dependencies:**
- RF mapping spec from Claude
- Large dataset handling strategy
- Visualization library selection

---

### 25. 👥 ALL: Alpha Testing
**Priority:** 💡 LOW  
**Status:** ⏳ Not Started  
**Assigned:** All  
**Deadline:** November 15, 2025  
**Estimated Time:** 10 hours (distributed)

**Task:** Comprehensive alpha testing before beta launch

**Testing Areas:**
- Functionality testing (all features)
- User experience testing
- Performance testing
- Security testing
- Cross-browser testing
- Mobile device testing
- Content accuracy review

**Output:** Bug list and improvement suggestions

---

### 26. 🔍 CLAUDE: Create Marketing Content
**Priority:** 💡 LOW  
**Status:** ⏳ Not Started  
**Assigned:** Claude  
**Deadline:** November 25, 2025  
**Estimated Time:** 8 hours

**Task:** Prepare marketing materials for launch

**Content Needed:**
- Launch announcement (Reddit, forums)
- Social media posts
- Email to amateur radio clubs
- Press release (amateur radio news sites)
- Promotional images/graphics

**Platforms:**
- r/amateurradio, r/RTLSDR, r/rfelectronics
- QRZ forums
- eHam.net
- RSGB, ARRL social media

---

## ✅ COMPLETED (Last 7 Days)

### ✅ Documentation Restructure
**Completed:** October 8, 2025 by Claude  
**Task:** Split monolithic context doc into organized structure  
**Output:** 10+ documentation files, workspace folders, checkpoint system

### ✅ Antenna Page Implementation
**Completed:** October 8, 2025 by CC  
**Task:** Build antennas.html with 24 images  
**Output:** Complete antenna guide page, image gallery, navigation

### ✅ Antenna Research & Image Library
**Completed:** October 7, 2025 by Claude  
**Task:** Comprehensive antenna research and image curation  
**Output:** antenna_comprehensive_guide.md, 24 images, manifests

### ✅ Frequency Bands Page
**Completed:** October 7, 2025 by CC  
**Task:** Complete electromagnetic spectrum reference  
**Output:** frequency-bands.html with full spectrum coverage

### ✅ Dashboard Page
**Completed:** October 7, 2025 by CC  
**Task:** Build main index.html dashboard  
**Output:** Landing page with statistics and navigation

---

## 📋 Task Management Notes

### Adding New Tasks
**Anyone can add tasks, but:**
- Must include: Priority, Assignment, Deadline, Estimated Time
- Add to appropriate section (Critical/High/Medium/Low)
- If unsure of priority, mark as 💡 LOW and Anthony will review

### Weekly Review (Monday)
**Anthony reviews and:**
- Adjusts priorities based on progress
- Assigns new tasks
- Moves completed tasks to archive
- Updates deadlines if needed

### Completing Tasks
**When you complete a task:**
1. Mark with ✅ in this file
2. Move to COMPLETED section (keep last 7 days visible)
3. Update PROGRESS-TRACKER.md
4. Update your checkpoint file
5. Notify next person if handoff needed

### Blocking Issues
**If blocked:**
- Update task status to ⏸️ Blocked
- Add blocking reason
- Escalate to Anthony if critical

---

## 🗓️ Archived Tasks (Older than 7 Days)

**Archive Location:** docs/archives/todo-archive-[month].md

Tasks completed >7 days ago are moved to monthly archives to keep this file manageable.

---

**Remember:**
- Check this list DAILY
- Update after completing tasks
- Create new tasks as they arise
- Anthony reviews and prioritizes WEEKLY

**Next Review:** October 10, 2025 (Anthony)