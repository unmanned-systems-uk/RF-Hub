-- Seed Data for Modules (Phase 1)
-- RF Learning Hub Database

INSERT INTO modules (module_number, phase, order_in_phase, title, slug, description, learning_objectives, difficulty, estimated_time_minutes, prerequisites, content_url, is_published) VALUES

-- Module 1.1
('1.1', 1, 1, 'Introduction to RF', 'introduction-to-rf',
 'Comprehensive introduction to Radio Frequency engineering, electromagnetic spectrum, and basic concepts that form the foundation of all RF work.',
 '["Understand what RF (Radio Frequency) means and its place in the electromagnetic spectrum", "Learn about frequency bands and their applications", "Identify common RF applications in everyday life", "Understand basic RF regulations and spectrum allocation"]',
 'beginner', 45, '[]',
 '/pages/learning-path.html#module-1-1', true),

-- Module 1.2
('1.2', 1, 2, 'Electromagnetic Waves', 'electromagnetic-waves',
 'Understanding the physics of electromagnetic waves, how they propagate through space, and their fundamental characteristics.',
 '["Understand electromagnetic wave properties (frequency, wavelength, amplitude)", "Learn about wave propagation through different media", "Study the relationship between electric and magnetic fields", "Explore different propagation modes (ground wave, sky wave, line-of-sight)"]',
 'beginner', 50, '["1.1"]',
 '/pages/learning-path.html#module-1-2', true),

-- Module 1.3
('1.3', 1, 3, 'Frequency and Wavelength', 'frequency-and-wavelength',
 'Deep dive into the mathematical relationship between frequency and wavelength, with practical calculations and real-world applications.',
 '["Calculate wavelength from frequency using the speed of light", "Understand the speed of light in different media and velocity factor", "Apply formulas to real-world antenna design scenarios", "Master unit conversions (Hz to MHz to GHz, meters to feet)"]',
 'beginner', 40, '["1.2"]',
 '/pages/learning-path.html#module-1-3', true),

-- Module 1.4
('1.4', 1, 4, 'Antenna Fundamentals', 'antenna-fundamentals',
 'Introduction to antenna theory, types, and basic principles of electromagnetic radiation from conductors.',
 '["Understand how antennas convert electrical energy to electromagnetic waves", "Learn about antenna radiation patterns and directivity", "Explore common antenna types (dipole, monopole, Yagi, etc.)", "Understand polarization (horizontal, vertical, circular)"]',
 'beginner', 60, '["1.3"]',
 '/pages/learning-path.html#module-1-4', true),

-- Module 1.5
('1.5', 1, 5, 'Transmission Lines', 'transmission-lines',
 'Understanding coaxial cables, transmission line theory, characteristic impedance, and signal loss mechanisms.',
 '["Learn about different transmission line types (coax, twin-lead, waveguide)", "Understand characteristic impedance (50Ω vs 75Ω)", "Calculate transmission line losses (attenuation)", "Study velocity factor and its impact on wavelength"]',
 'intermediate', 55, '["1.4"]',
 '/pages/learning-path.html#module-1-5', true),

-- Module 1.6
('1.6', 1, 6, 'Impedance Matching', 'impedance-matching',
 'Techniques for matching impedances to maximize power transfer and minimize Standing Wave Ratio (SWR).',
 '["Understand the importance of impedance matching in RF systems", "Learn about SWR (Standing Wave Ratio) and its impact", "Study matching networks (L-network, Pi-network, T-network)", "Introduction to Smith charts for impedance matching"]',
 'intermediate', 65, '["1.5"]',
 '/pages/learning-path.html#module-1-6', true);

-- Verify insertion
SELECT module_number, title, phase, difficulty FROM modules WHERE phase = 1 ORDER BY order_in_phase;
