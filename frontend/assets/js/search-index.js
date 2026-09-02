/* RF-Hub Search Index — update when new pages are added */
window.SEARCH_INDEX = [
  {
    title: "Dashboard",
    url: "/index.html",
    description: "RF-Hub home — learning modules, curriculum overview",
    keywords: ["home", "dashboard", "overview", "modules", "start", "rf", "hub"],
    sections: ["Learning Path", "RF Modules", "Curriculum"]
  },
  {
    title: "Frequency Bands",
    url: "/pages/frequency-bands.html",
    description: "Frequency band reference — HF, VHF, UHF, SHF, amateur allocations",
    keywords: ["frequency", "band", "HF", "VHF", "UHF", "SHF", "EHF", "MHz", "GHz",
               "spectrum", "amateur", "allocation", "radio", "shortwave", "microwave",
               "LF", "MF", "wavelength", "160m", "80m", "40m", "20m", "10m",
               "2m", "70cm", "ISM", "propagation"],
    sections: ["HF Bands", "VHF Bands", "UHF Bands", "SHF Bands", "Amateur Allocations"]
  },
  {
    title: "Antennas",
    url: "/pages/antennas.html",
    description: "Antenna reference — types, design, construction, EFHW, dipole, Yagi",
    keywords: ["antenna", "dipole", "yagi", "vertical", "EFHW", "end-fed",
               "unun", "balun", "half-wave", "quarter-wave", "beam", "loop",
               "ground plane", "omnidirectional", "directional", "gain", "dBi",
               "radiation pattern", "feedpoint", "coax", "SWR"],
    sections: ["HF Antennas", "VHF/UHF Antennas", "Antenna Theory", "Construction"]
  },
  {
    title: "Learning Path",
    url: "/pages/learning-path.html",
    description: "26-lesson antenna curriculum — EM radiation to phased arrays",
    keywords: ["learn", "curriculum", "lessons", "units", "course", "tutorial",
               "beginner", "foundation", "intermediate", "advanced", "study",
               "EM radiation", "polarisation", "impedance", "VNA", "Smith chart",
               "phased array", "beamforming", "direction finding", "Yagi"],
    sections: ["Unit 1 — How Antennas Work", "Unit 2 — Characteristics and Measurement",
               "Unit 3 — Design and Construction", "Unit 4 — Advanced Systems"]
  },
  {
    title: "GSM & Cellular",
    url: "/pages/gsm-cellular.html",
    description: "Mobile cellular systems — GSM, UMTS, LTE, 5G, NR architecture",
    keywords: ["GSM", "cellular", "mobile", "LTE", "5G", "NR", "UMTS", "3G", "4G",
               "TDMA", "CDMA", "OFDM", "OFDMA", "cell", "base station", "eNodeB",
               "gNB", "IMSI", "SIM", "handover", "handoff", "spectrum", "band",
               "uplink", "downlink", "MIMO", "beamforming", "network", "core"],
    sections: ["GSM Architecture", "Generations", "Frequency Bands", "Access Methods"]
  },
  {
    title: "Sidebands — Topic Index",
    url: "/pages/sidebands/",
    description: "Topic snippet index — focused RF reference pages",
    keywords: ["sidebands", "topics", "snippets", "reference", "index",
               "impedance", "s-parameters", "VSWR", "digital modes", "Q-codes", "DUT"],
    sections: ["Resistance Reactance Impedance", "S-Parameters", "VSWR",
               "S21", "DUT Characterisation", "Digital Modes"]
  },
  {
    title: "Resistance, Reactance & Impedance",
    url: "/pages/sidebands/resistance-reactance-impedance.html",
    description: "Three types of opposition to current flow — resistance, reactance, impedance",
    keywords: ["resistance", "reactance", "impedance", "ohm", "ohms", "R", "X", "Z",
               "capacitive", "inductive", "capacitor", "inductor", "AC", "DC",
               "complex impedance", "phasor", "phase angle", "series", "parallel",
               "ohms law", "smith chart", "matching", "conjugate"],
    sections: ["Resistance", "Reactance", "Impedance", "Smith Chart", "Matching"]
  },
  {
    title: "S-Parameters — The Four Numbers That Describe Any RF Device",
    url: "/pages/sidebands/s-parameter-matrix.html",
    description: "S11, S21, S12, S22 — scattering parameters and two-port network analysis",
    keywords: ["S-parameters", "S11", "S21", "S12", "S22", "scattering", "two-port",
               "network", "return loss", "insertion loss", "transmission", "reflection",
               "VNA", "port", "forward", "reverse", "matrix", "dB", "magnitude",
               "phase", "touchstone", "S1P", "S2P"],
    sections: ["S11 — Reflection", "S21 — Forward Transmission",
               "S12 — Reverse Transmission", "S22 — Output Reflection"]
  },
  {
    title: "The VSWR Bridge — How Your Analyser Measures Reflections",
    url: "/pages/sidebands/vswr-bridge-measurement.html",
    description: "Wheatstone bridge circuit for VSWR and S11 reflection measurement",
    keywords: ["VSWR", "SWR", "standing wave ratio", "bridge", "wheatstone",
               "reflection", "directional coupler", "return loss", "directivity",
               "coupler", "detector", "balun", "resistive bridge", "analyser",
               "antenna analyser", "MFJ", "NanoVNA", "measurement"],
    sections: ["Bridge Principle", "VSWR Definition", "Measurement Setup", "Directivity"]
  },
  {
    title: "S21 — Measuring What Gets Through",
    url: "/pages/sidebands/s21-transmission-measurement.html",
    description: "Forward transmission measurement — insertion loss, filter characterisation",
    keywords: ["S21", "transmission", "insertion loss", "through", "filter",
               "bandpass", "low-pass", "high-pass", "notch", "attenuation",
               "two-port", "VNA", "cable loss", "amplifier gain", "forward",
               "network analyser", "frequency response"],
    sections: ["S21 Definition", "Two-Port Setup", "Insertion Loss", "Filter Measurement"]
  },
  {
    title: "DUT Characterisation — A Complete Measurement Walkthrough",
    url: "/pages/sidebands/dut-characterisation-workflow.html",
    description: "Device under test measurement workflow — calibration to results",
    keywords: ["DUT", "device under test", "characterisation", "characterization",
               "calibration", "SOLT", "open", "short", "load", "through",
               "de-embedding", "VNA", "measurement", "workflow", "RSA5065N",
               "Rigol", "port extension", "reference plane"],
    sections: ["Calibration", "Connection", "Measurement", "Results Interpretation"]
  },
  {
    title: "Digital Modes — Every Way Your Radio Can Talk Without Your Voice",
    url: "/pages/sidebands/digital-modes.html",
    description: "30+ amateur digital radio modes — FT8, RTTY, PSK31, APRS, Winlink",
    keywords: ["digital", "modes", "FT8", "RTTY", "PSK31", "PSK", "WSPR", "JT65",
               "APRS", "Winlink", "Vara", "Packet", "AX25", "SSTV", "slow scan",
               "BPSK", "QPSK", "FSK", "MFSK", "Olivia", "Contestia", "PACTOR",
               "bandwidth", "waterfall", "audio", "soundcard", "WSJT-X", "Fldigi",
               "digi", "amateur", "HF", "VHF",
               "DMR", "D-STAR", "DSTAR", "Fusion", "C4FM", "digital voice", "D-star",
               "talkgroup", "hotspot", "Pi-Star", "MMDVM", "reflector",
               "mesh", "AREDN", "JS8Call", "Vara HF", "FreeDV", "codec2", "AMBE",
               "M17", "EchoLink", "IRLP", "AllStar", "repeater"],
    sections: ["CW Modes", "Phone Digital", "Weak Signal", "Packet", "Image Modes",
               "Voice Digital", "Mesh Networking"]
  },
  {
    title: "Q-Codes",
    url: "/pages/sidebands/q-codes.html",
    description: "Amateur radio Q-codes — QRA, QRZ, QTH, QSO, QSL, RST and prosigns",
    keywords: ["Q-codes", "Q-code", "QRA", "QRZ", "QTH", "QSO", "QSL", "QSY", "QRT",
               "QRP", "QRO", "QRM", "QRN", "QRV", "QRL", "QRX", "QSB", "QRK",
               "QRS", "QRG", "QRB", "QTR", "73", "CQ", "DX", "RST", "signal report",
               "prosign", "abbreviation", "phonetic alphabet", "NATO"],
    sections: ["Common Q-Codes", "RST System", "Prosigns", "Phonetic Alphabet"]
  },
  {
    title: "QSO Scripts",
    url: "/pages/sidebands/qso-scripts.html",
    description: "What to say on air — first contact scripts for HF, repeater, CW, and digital",
    keywords: ["QSO", "script", "contact", "first contact", "what to say", "calling",
               "CQ", "repeater", "HF SSB", "CW", "morse", "net", "FM simplex",
               "digital voice", "signal report", "callsign", "over", "out",
               "phonetic", "NATO alphabet", "beginner"],
    sections: ["FM Repeater", "HF SSB", "CW/Morse", "Digital Voice", "Net Check-In"]
  },
  {
    title: "UK Spectrum Allocation & Band Plan",
    url: "/pages/sidebands/uk-spectrum-band-plan.html",
    description: "UK frequency allocations and amateur band plan — Ofcom, RSGB, ITU Region 1",
    keywords: ["spectrum", "allocation", "band plan", "frequency", "HF", "VHF", "UHF",
               "Ofcom", "RSGB", "ITU", "Region 1", "160m", "80m", "60m", "40m", "30m",
               "20m", "17m", "15m", "12m", "10m", "6m", "4m", "2m", "70cm", "23cm",
               "power limit", "Foundation", "Intermediate", "Full", "licence",
               "LSB", "USB", "sideband convention", "FT8", "centre of activity",
               "WARC", "beacon", "contest", "CW", "SSB", "FM", "digital",
               "offset", "primary", "secondary"],
    sections: ["HF Allocations", "VHF/UHF Allocations", "Licence Classes", "Band Plan Rules"]
  },
  {
    title: "UK Repeaters",
    url: "/pages/sidebands/uk-repeaters.html",
    description: "UK amateur repeater guide — GB3, GB7, CTCSS, offsets, DMR, D-STAR, Fusion",
    keywords: ["repeater", "GB3", "GB7", "CTCSS", "tone", "1750", "offset", "duplex",
               "simplex", "2m", "70cm", "145.500", "433.500", "FM", "D-STAR", "DMR",
               "Fusion", "talkgroup", "colour code", "time slot", "hotspot",
               "Pi-Star", "MMDVM", "EchoLink", "IRLP", "ukrepeater",
               "repeater keeper", "NOV", "ETCC", "timeout", "courtesy tone", "kerchunk"],
    sections: ["FM Repeaters", "DMR", "D-STAR", "Fusion/C4FM", "Hotspots"]
  },
  {
    title: "NATO Phonetic Alphabet — Say It So It's Heard",
    url: "/pages/sidebands/phonetic-alphabet.html",
    description: "A–Z phonetic alphabet with pronunciations, numbers, callsign suffixes and practice tips",
    keywords: ["NATO", "phonetic", "alphabet", "Alpha", "Bravo", "Charlie", "Delta", "Echo",
               "Foxtrot", "Golf", "Hotel", "India", "Juliet", "Kilo", "Lima", "Mike",
               "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango",
               "Uniform", "Victor", "Whiskey", "X-ray", "Yankee", "Zulu",
               "callsign", "suffix", "/M", "/P", "/A", "/MM", "mobile", "portable",
               "pronunciation", "say again", "radio alphabet", "spelling"],
    sections: ["A–Z Reference", "Numbers", "Callsign Suffixes", "Practice Tips"]
  },
  {
    title: "Understanding S11 Measurements",
    url: "/pages/blog/understanding-s11.html",
    description: "Practical guide to S11, return loss, SWR and Smith Chart on the Rigol RSA5065N",
    keywords: ["S11", "return loss", "SWR", "VSWR", "Smith Chart", "VNA",
               "Rigol", "RSA5065N", "antenna", "reflection", "measurement",
               "dB", "impedance", "resonance", "bandwidth", "calibration",
               "port", "coax", "connector", "marker", "sweep"],
    sections: ["What is S11?", "Return Loss", "SWR", "Smith Chart", "Practical Measurement"]
  }
];
