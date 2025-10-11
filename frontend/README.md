# RF Learning Hub

🛰️ **Your Complete Interactive RF Engineering Platform**

An educational platform for Radio Frequency engineering, featuring interactive learning modules, equipment tracking, measurement logging, and comprehensive reference materials.

## 🚀 Features

### 📊 Dashboard
- **Progress Tracking**: Monitor completion of 26 learning modules
- **Statistics**: View hours logged, measurements taken, active projects
- **Equipment Status**: Real-time status of your RF equipment
- **Recent Activity**: Track your learning journey

### 📚 Learning Path
Interactive curriculum covering:
- **Foundations**: Frequency, wavelength, decibels
- **Components**: Resistors, capacitors, inductors, transmission lines
- **Circuits**: Oscillators, mixers, amplifiers, filters
- **Systems**: Antennas, transceivers, spectrum analysis
- **Advanced**: S-parameters, Smith charts, VNA measurements

### 🔧 Equipment Management
Comprehensive tracking for:
- **Rigol RSA5065N** - Real-Time Spectrum Analyzer + VNA (9 kHz - 6.5 GHz)
- **HackRF One** - Software Defined Radio (1 MHz - 6 GHz)
- **RTL-SDR v5** (x2) - Receive-Only SDR (500 kHz - 1.75 GHz)
- **Antennas & Accessories** - Complete inventory with specifications

### 📊 Measurements & Analysis
- **VNA Data Logging**: S-parameters, impedance, SWR measurements
- **Spectrum Analysis**: Power spectral density, frequency domain analysis
- **CSV/JSON Export**: Data export for further analysis
- **Search & Filter**: Quickly find specific measurements

### 📝 Lab Notebook
- **Rich Text Entries**: Document experiments and observations
- **Timestamped Records**: Automatic date/time logging
- **Search Functionality**: Find entries by keywords
- **Export Capabilities**: Backup your research

### 🎯 Project Tracking
- **Project Management**: Track RF projects from planning to completion
- **Status Updates**: Planning, In Progress, Completed, Paused
- **Progress Monitoring**: Visual indicators and timelines

### 🗺️ RF Signal Map
- **Signal Observations**: Log frequency discoveries and signal characteristics
- **Geographic Mapping**: Track signals by location (future enhancement)
- **Frequency Database**: Build your local spectrum knowledge

### 📹 Video Tutorials
- **Curated Content**: Links to essential RF engineering videos
- **Equipment Guides**: Tutorials specific to your hardware
- **Theory Explanations**: Visual learning resources

### 🔗 Resources
- **Technical References**: Standards, application notes, datasheets
- **Software Tools**: SDR software, analysis tools, simulators
- **Communities**: Forums, Discord servers, amateur radio groups
- **Manufacturers**: Direct links to equipment vendors

### 🧮 RF Calculators
Six essential calculators:
1. **Wavelength Calculator** - Frequency to wavelength conversion
2. **Dipole Length Calculator** - Antenna design calculations
3. **dB to Power Ratio** - Decibel conversions
4. **SWR from S11** - Standing wave ratio calculations
5. **Cable Loss Calculator** - Transmission line loss estimation
6. **Link Budget Calculator** - RF link analysis

### 📻 Frequency Bands Reference
Comprehensive frequency allocation tables:
- **VLF to SHF** - Complete spectrum coverage (3 kHz - 30 GHz)
- **Amateur Radio Bands** - UK-specific allocations and power limits
- **IEEE Radar Bands** - L, S, C, X, Ku, K, Ka band definitions
- **Special Frequencies** - Emergency, satellite, aviation frequencies
- **Equipment Compatibility** - Which of your devices can access each band

## 🛠️ Technical Details

### Architecture
- **Pure HTML/CSS/JavaScript** - No frameworks, maximum compatibility
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Progressive Web App** - Offline functionality
- **Local Storage** - All data stored in browser, no server required

### Performance
- **Optimized CSS** - Consolidated stylesheets for fast loading
- **Modular JavaScript** - Separated concerns for maintainability
- **Image Optimization** - Efficient loading and caching
- **Mobile First** - Responsive design principles

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📁 Project Structure

```
rf-learning-hub/
├── index.html              # Dashboard (landing page)
├── assets/
│   ├── css/
│   │   └── styles.css      # Consolidated CSS
│   ├── js/
│   │   ├── main.js         # Core functionality
│   │   ├── storage.js      # localStorage management
│   │   └── calculators.js  # RF calculator functions
│   └── images/
│       └── (photos, icons)
├── pages/
│   ├── learning-path.html
│   ├── equipment.html
│   ├── gallery.html
│   ├── measurements.html
│   ├── notebook.html
│   ├── projects.html
│   ├── rf-map.html
│   ├── videos.html
│   ├── resources.html
│   ├── calculators.html
│   └── frequency-bands.html
├── data/
│   └── (exported JSON backups)
└── README.md
```

## 🚀 Getting Started

### Local Development
1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. Start exploring the interactive modules!

### GitHub Pages Deployment
1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Choose source: `Deploy from a branch`
4. Select branch: `main` and folder: `/ (root)`
5. Your site will be available at `https://yourusername.github.io/rf-learning-hub/`

### Custom Domain (Optional)
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 💾 Data Management

### Export/Import
- **Full Backup**: Export all data (modules, measurements, notebook, projects)
- **Selective Export**: Export individual sections as CSV or JSON
- **Cross-Browser Sync**: Import data between different browsers/devices

### Data Storage
All data is stored locally in your browser using localStorage:
- **Module Progress**: Completion status for all 26 modules
- **Measurements**: VNA and spectrum analyzer data
- **Lab Notebook**: Research entries and observations
- **Projects**: Project tracking and status updates
- **Gallery**: Photo uploads and captions
- **RF Map**: Signal observation database

## 🔧 Equipment Specifications

### Rigol RSA5065N Real-Time Spectrum Analyzer
- **Frequency Range**: 9 kHz - 6.5 GHz
- **Real-Time Bandwidth**: Up to 40 MHz
- **VNA Capability**: Built-in vector network analyzer
- **Phase Noise**: < -98 dBc/Hz @ 10 kHz offset
- **Cost**: £8,000

### HackRF One Software Defined Radio
- **Frequency Range**: 1 MHz - 6 GHz
- **Sample Rate**: Up to 20 MS/s
- **Bandwidth**: 20 MHz
- **Half-Duplex**: TX/RX capability
- **Cost**: £300

### RTL-SDR v5 (Quantity: 2)
- **Frequency Range**: 500 kHz - 1.75 GHz
- **Sample Rate**: Up to 3.2 MS/s
- **Bandwidth**: 3.2 MHz
- **Receive Only**: Monitoring and analysis
- **Cost**: £35 each

**Total Equipment Investment**: £10,100+

## 🎯 Learning Objectives

By completing this hub, you will master:

1. **RF Fundamentals** - Frequency, wavelength, decibels, complex impedance
2. **Component Knowledge** - Passive and active RF components
3. **Circuit Analysis** - RF circuit design and analysis techniques
4. **Measurement Skills** - Spectrum analysis, network analysis, VNA usage
5. **Antenna Theory** - Radiation patterns, gain, impedance matching
6. **System Design** - Complete RF system architecture
7. **Practical Skills** - Hands-on experience with professional equipment

## 🤝 Contributing

This is an educational project. Contributions welcome:

### Bug Reports
- Use GitHub Issues for bug reports
- Include browser version and steps to reproduce
- Screenshots help immensely

### Feature Requests
- Suggest new calculators or reference tables
- Propose additional learning modules
- Request equipment integrations

### Content Contributions
- Additional frequency allocations
- New tutorial links
- Equipment reviews and specifications

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Third-Party Content
- Frequency allocation data from ITU and Ofcom
- Equipment specifications from manufacturer datasheets
- Educational content follows fair use guidelines

## 🔗 External Resources

### Standards Organizations
- **ITU** - International Telecommunication Union
- **Ofcom** - UK Communications Regulator
- **IEEE** - Institute of Electrical and Electronics Engineers
- **RSGB** - Radio Society of Great Britain

### Equipment Manufacturers
- **Rigol Technologies** - Test & Measurement Equipment
- **Great Scott Gadgets** - HackRF One SDR
- **RTL-SDR.com** - RTL-SDR v5 Dongles

### Software Tools
- **SDR#** - Windows SDR Software
- **GQRX** - Linux/Mac SDR Software
- **GNU Radio** - Open Source SDR Framework
- **HDSDR** - High Definition SDR

## 🆘 Support

### Getting Help
1. Check the built-in help sections in each module
2. Review the FAQ in the Resources section
3. Search GitHub Issues for similar problems
4. Create a new issue with detailed description

### Community
- Join the amateur radio community on Discord
- Participate in RF engineering forums
- Attend local amateur radio club meetings
- Contribute to open source SDR projects

---

**Happy Learning! 73!** 📡

*This platform represents months of planning and a significant investment in professional RF equipment. Use it to build your expertise in radio frequency engineering.*