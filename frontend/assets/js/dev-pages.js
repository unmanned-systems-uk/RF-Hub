/**
 * DEV-PAGES — Single Point of Truth for dev navigation dropdown.
 *
 * To add a new page: add an entry to the appropriate group below.
 * URL is absolute from the site root (NGINX serves /home/rfhub/rf-hub/frontend/).
 *
 * This file is loaded by dev-nav.js which builds the dropdown automatically.
 * NOT for production use.
 */
window.DEV_PAGES = [
  {
    group: 'Main',
    pages: [
      { label: 'Dashboard',         url: '/index.html' },
      { label: 'Frequency Bands',   url: '/pages/frequency-bands.html' },
      { label: 'Antennas',          url: '/pages/antennas.html' },
      { label: 'Learning Path',     url: '/pages/learning-path.html' },
      { label: 'GSM Cellular',      url: '/pages/gsm-cellular.html' },
    ]
  },
  {
    group: 'Blog',
    pages: [
      { label: 'Understanding S11', url: '/pages/blog/understanding-s11.html' },
    ]
  },
  {
    group: 'Sidebands',
    pages: [
      { label: 'R, X & Z',         url: '/pages/sidebands/resistance-reactance-impedance.html' },
    ]
  },
  {
    group: 'Resources',
    pages: [
      { label: 'Must Watch',        url: '/pages/resources/must-watch.html' },
    ]
  },
  {
    group: 'Electronics — Unit 1',
    pages: [
      { label: 'E01 What Is Electricity',  url: '/pages/electronics-curriculum/unit-1-language-of-electricity/lesson-01-what-is-electricity.html' },
      { label: 'E02 Voltage / Current / R', url: '/pages/electronics-curriculum/unit-1-language-of-electricity/lesson-02-voltage-current-resistance.html' },
    ]
  },
  {
    group: 'Unit 1 — How Antennas Work',
    pages: [
      { label: 'L01 EM Radiation',        url: '/pages/antenna-curriculum/unit-1-how-antennas-work/lesson-01-em-radiation.html' },
      { label: 'L02 How Antennas Radiate', url: '/pages/antenna-curriculum/unit-1-how-antennas-work/lesson-02-how-antennas-radiate.html' },
      { label: 'L03 Radiation Patterns',  url: '/pages/antenna-curriculum/unit-1-how-antennas-work/lesson-03-radiation-patterns.html' },
      { label: 'L04 Antenna Types',       url: '/pages/antenna-curriculum/unit-1-how-antennas-work/lesson-04-antenna-types-tour.html' },
      { label: 'L05 Polarisation',        url: '/pages/antenna-curriculum/unit-1-how-antennas-work/lesson-05-polarisation.html' },
    ]
  },
  {
    group: 'Unit 2 — Characteristics & Measurement',
    pages: [
      { label: 'L06 Impedance',               url: '/pages/antenna-curriculum/unit-2-characteristics-and-measurement/lesson-06-impedance.html' },
      { label: 'L07 SWR & Return Loss',        url: '/pages/antenna-curriculum/unit-2-characteristics-and-measurement/lesson-07-swr-and-return-loss.html' },
      { label: 'L08 Smith Chart',              url: '/pages/antenna-curriculum/unit-2-characteristics-and-measurement/lesson-08-smith-chart.html' },
      { label: 'L09 Gain / Directivity',       url: '/pages/antenna-curriculum/unit-2-characteristics-and-measurement/lesson-09-gain-directivity-efficiency.html' },
      { label: 'L10 VNA Lab',                  url: '/pages/antenna-curriculum/unit-2-characteristics-and-measurement/lesson-10-vna-antenna-measurement-lab.html' },
    ]
  },
  {
    group: 'Unit 3 — Design & Construction',
    pages: [
      { label: 'L11 Dipole Deep Dive',    url: '/pages/antenna-curriculum/unit-3-design-and-construction/lesson-11-dipole-deep-dive.html' },
      { label: 'L12 Vertical Antennas',   url: '/pages/antenna-curriculum/unit-3-design-and-construction/lesson-12-vertical-antennas.html' },
      { label: 'L13 Yagi Antennas',       url: '/pages/antenna-curriculum/unit-3-design-and-construction/lesson-13-yagi-antennas.html' },
      { label: 'L14 Broadband Antennas',  url: '/pages/antenna-curriculum/unit-3-design-and-construction/lesson-14-broadband-antennas.html' },
      { label: 'L15 Impedance Matching',  url: '/pages/antenna-curriculum/unit-3-design-and-construction/lesson-15-impedance-matching.html' },
    ]
  },
  {
    group: 'Unit 4 — Advanced Systems',
    pages: [
      { label: 'L16 Antenna Arrays',        url: '/pages/antenna-curriculum/unit-4-advanced-systems/lesson-16-antenna-arrays.html' },
      { label: 'L17 Phased Arrays',          url: '/pages/antenna-curriculum/unit-4-advanced-systems/lesson-17-phased-arrays.html' },
      { label: 'L18 Direction Finding',      url: '/pages/antenna-curriculum/unit-4-advanced-systems/lesson-18-direction-finding.html' },
      { label: 'L19 Practical Phased Array', url: '/pages/antenna-curriculum/unit-4-advanced-systems/lesson-19-practical-phased-array.html' },
      { label: 'L20 Software Beamforming',   url: '/pages/antenna-curriculum/unit-4-advanced-systems/lesson-20-software-beamforming.html' },
    ]
  },
];
