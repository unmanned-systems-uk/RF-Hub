# Question Quality Audit — 2026-09-13

**Source:** `exam_questions` table — 526 questions audited  
**Criteria:** stem-word-leak · verbosity · straw-man · explanation-leak  
**Method:** Heuristic analysis — flag rate expected ~10–20%; Anthony reviews before any DB writes  
**Generated:** 2026-09-13T13:30 UTC  

> **Note on thresholds:** Verbosity flags fire when correct option is >65% longer than distractor average (>30 char gap). Stem-word-leak fires when correct option shares ≥2 content words with stem that no distractor shares. Some false positives expected — mark `ignore` on review if appropriate.

---

## Flagged Questions

| id (8) | section | syllabus_ref | issue_type | opt | current_text (truncated 80) | recommended_fix |
|--------|---------|--------------|------------|-----|------------------------------|-----------------|
| fdb0cdd6 | 1A | 1A1 | explanation-leak | B | Self-training in radio communications | Explanation quotes correct option verbatim: '...self training in radio communications...'. Paraphrase explanation teachi |
| 77b4ad7c | 1A | 1A3 | stem-word-leak | B | ICNIRP — International Commission on Non-Ionizing Radiation Protection | Stem words in correct 'B' not in distractors: ['ionizing', 'non', 'protection', 'radiation'] |
| 77b4ad7c | 1A | 1A3 | explanation-leak | B | ICNIRP — International Commission on Non-Ionizing Radiation Protection | Explanation quotes correct option verbatim: '...international commission on non ionizing...'. Paraphrase explanation tea |
| b52b717e | 1A | 1A5 | explanation-leak | A | Any person authorised by Ofcom has the right to inspect your station and equipme | Explanation quotes correct option verbatim: '...any person authorised by ofcom...'. Paraphrase explanation teaching poin |
| 97a187f0 | 1C | 1C2-2025-Int'd-8076 | straw-man | (distractors) | {'A': 'The Captain of a tour boat.', 'B': 'A member of a User Service.', 'C': 'T | Clearly off-topic distractor 'A': 'The Captain of a tour boat.'. Replace with plausible-sounding wrong answer. |
| aa9e4d20 | 1C | 1C3 | stem-word-leak | B | Yes — mountain rescue is a User Service and may use your equipment | Stem words in correct 'B' not in distractors: ['mountain', 'rescue'] |
| b9ffce9a | 1D | 1D1 | explanation-leak | A | Broadcasting — transmitting for general reception by the public | Explanation quotes correct option verbatim: '...transmitting for general reception by...'. Paraphrase explanation teachi |
| d2b0cd82 | 1D | 1D2 | verbosity | D | Secondary — amateurs must not cause interference to primary users and must accep | Correct 'D' len=104; avg distractors=53 (95% longer). Shorten or pad distractors. |
| d2b0cd82 | 1D | 1D2 | explanation-leak | D | Secondary — amateurs must not cause interference to primary users and must accep | Explanation quotes correct option verbatim: '...amateurs must not cause interference...'. Paraphrase explanation teachin |
| 57cd2ba8 | 1D | 1D4 | explanation-leak | C | The 13 cm band (2.3–2.45 GHz); amateurs must accept interference from ISM device | Explanation quotes correct option verbatim: '...amateurs must accept interference from...'. Paraphrase explanation teach |
| 4d91f93e | 1D | 1D5 | explanation-leak | D | Your transmission causing audio breakthrough into a neighbour's FM broadcast rec | Explanation quotes correct option verbatim: '...causing audio breakthrough into a...'. Paraphrase explanation teaching p |
| dfa24971 | 1E | 1E1 | explanation-leak | B | The control link must operate above 30 MHz | Explanation quotes correct option verbatim: '...must operate above 30 mhz...'. Paraphrase explanation teaching point. |
| 306d87cb | 1E | 1E2 | explanation-leak | C | The licensee's licence number | Explanation quotes correct option verbatim: '...the licensee s licence number...'. Paraphrase explanation teaching point |
| 2cd8cabf | 1E | 1E3 | stem-word-leak | B | No — the control link must not be encrypted | Stem words in correct 'B' not in distractors: ['control', 'encrypted', 'link'] |
| de4e8fc6 | 1E | 1E4 | explanation-leak | C | The station must automatically cease transmitting within a reasonable time | Explanation quotes correct option verbatim: '...the station must automatically cease...'. Paraphrase explanation teachin |
| be40e25d | 1F | 1F2 | verbosity | D | Operation is limited to 500 mW EIRP on primary-allocation bands, UK or Crown Dep | Correct 'D' len=135; avg distractors=77 (75% longer). Shorten or pad distractors. |
| 3b14228b | 1G | 1G2 | explanation-leak | B | CEPT T/R 61-01 — permits Full licensees from member states to operate in other C | Explanation quotes correct option verbatim: '...to operate in other cept...'. Paraphrase explanation teaching point. |
| 77430874 | 1G | 1G4 | explanation-leak | C | No — for permanent residence they must apply for a local Dutch licence | Explanation quotes correct option verbatim: '...they must apply for a...'. Paraphrase explanation teaching point. |
| 3cc56066 | 1G | D2F-M1-Q10 | verbosity | A | the ITU radio regulations for the ITU region that the vessel is currently locate | Correct 'A' len=82; avg distractors=39 (112% longer). Shorten or pad distractors. |
| 3cc56066 | 1G | D2F-M1-Q10 | straw-man | (distractors) | {'A': 'the ITU radio regulations for the ITU region that the vessel is currently | Short distractors likely straw-men: [('D', 'the CEPT list.')]. Expand to plausible-length alternatives. |
| 71b0cd51 | 1H | 1H7 | explanation-leak | B | Reassess your EMF compliance because you have changed to a different antenna typ | Explanation quotes correct option verbatim: '...to a different antenna type...'. Paraphrase explanation teaching point. |
| e4bc6abc | 2F | 2F1 | verbosity | B | Minimum, theoretically zero (just the winding resistance in practice) | Correct 'B' len=69; avg distractors=38 (83% longer). Shorten or pad distractors. |
| 3c196631 | 3A | 3A3 | verbosity | B | A higher IF places the image frequency further from the wanted signal, making it | Correct 'B' len=115; avg distractors=61 (88% longer). Shorten or pad distractors. |
| ce7feaab | 3A | 3A5 | verbosity | C | A TRF receiver has poor selectivity at higher frequencies because tuned circuits | Correct 'C' len=130; avg distractors=59 (119% longer). Shorten or pad distractors. |
| 4a7601d0 | 3B | 3B2 | verbosity | D | It uses four diodes in a bridge arrangement and suppresses both input frequencie | Correct 'D' len=129; avg distractors=68 (90% longer). Shorten or pad distractors. |
| 69375443 | 3C | 3C5 | stem-word-leak | B | If the preamplifier's own noise figure equals or exceeds the original receiver's | Stem words in correct 'B' not in distractors: ['figure', 'noise', 'preamplifier', 'receiver'] |
| 69375443 | 3C | 3C5 | explanation-leak | B | If the preamplifier's own noise figure equals or exceeds the original receiver's | Explanation quotes correct option verbatim: '...the original receiver s noise...'. Paraphrase explanation teaching point |
| d5f7a672 | 3E | 3E3 | verbosity | D | They are caused by hard (instantaneous) keying producing very fast rise and fall | Correct 'D' len=156; avg distractors=80 (96% longer). Shorten or pad distractors. |
| ac75d0b6 | 3E | 3E4 | verbosity | A | Chirp is a frequency shift of the transmitted signal when the key is pressed, ca | Correct 'A' len=215; avg distractors=94 (128% longer). Shorten or pad distractors. |
| 8b0b1ed7 | 3F | 3F2 | verbosity | B | The envelope is clipped, generating additional sidebands that cause splatter and | Correct 'B' len=117; avg distractors=69 (70% longer). Shorten or pad distractors. |
| f2c74077 | 3G | 3G5 | verbosity | B | RTTY has a near 100% duty cycle, so the PA operates at full dissipation continuo | Correct 'B' len=170; avg distractors=74 (130% longer). Shorten or pad distractors. |
| c05312f4 | 3H | 3H3 | verbosity | B | FT8 uses strong forward error-correcting codes combined with 15-second transmiss | Correct 'B' len=154; avg distractors=87 (78% longer). Shorten or pad distractors. |
| 1eda8157 | 3H | 3H-RFHUB-INT-015 | explanation-leak | B | a fixed frequency lower than the received signal. | Explanation quotes correct option verbatim: '...lower than the received signal...'. Paraphrase explanation teaching poin |
| cb5d13c2 | 3I | 3I1 | verbosity | B | A PLL synthesiser is locked to a crystal reference oscillator, giving it crystal | Correct 'B' len=152; avg distractors=69 (119% longer). Shorten or pad distractors. |
| 44fb58f0 | 3I | 3I2 | verbosity | B | On receive the IF signal passes through the filter for adjacent-channel rejectio | Correct 'B' len=203; avg distractors=93 (118% longer). Shorten or pad distractors. |
| 44fb58f0 | 3I | 3I2 | explanation-leak | B | On receive the IF signal passes through the filter for adjacent-channel rejectio | Explanation quotes correct option verbatim: '...if signal passes through the...'. Paraphrase explanation teaching point. |
| ecb64404 | 3I | 3I3 | verbosity | C | It mixes the low-level 14 MHz transceiver drive signal with an internal local os | Correct 'C' len=169; avg distractors=79 (114% longer). Shorten or pad distractors. |
| a5253df7 | 3K | 3K2 | verbosity | C | The AGC reduces gain rapidly (within milliseconds) when a strong signal arrives, | Correct 'C' len=173; avg distractors=102 (70% longer). Shorten or pad distractors. |
| 59e205d4 | 3M | 3M1 | explanation-leak | C | A crystal oscillator; its main advantage is excellent frequency stability, typic | Explanation quotes correct option verbatim: '...typically quoted in parts per...'. Paraphrase explanation teaching point |
| 2b235142 | 3M | 3M3 | verbosity | D | Phase noise is a spreading of energy around the oscillator carrier caused by ran | Correct 'D' len=197; avg distractors=96 (106% longer). Shorten or pad distractors. |
| ad51eeeb | 3M | 3M4 | stem-word-leak | C | It stores a digital sine wave lookup table and steps through it at a rate contro | Stem words in correct 'C' not in distractors: ['digital', 'output', 'sine', 'wave'] |
| ad51eeeb | 3M | 3M4 | verbosity | C | It stores a digital sine wave lookup table and steps through it at a rate contro | Correct 'C' len=177; avg distractors=100 (76% longer). Shorten or pad distractors. |
| ad51eeeb | 3M | 3M4 | explanation-leak | C | It stores a digital sine wave lookup table and steps through it at a rate contro | Explanation quotes correct option verbatim: '...a low pass reconstruction filter...'. Paraphrase explanation teaching po |
| f8e09223 | 4B | 4B1 | explanation-leak | B | The antenna impedance equals the feeder characteristic impedance — no reflected  | Explanation quotes correct option verbatim: '...equals the feeder characteristic impedance...'. Paraphrase explanation t |
| a2bfafd5 | 4B | 4B8 | stem-word-leak | A | Yes — the lossy feeder attenuates the reflected wave during its return journey,  | Stem words in correct 'A' not in distractors: ['antenna', 'end', 'lossy', 'meter', 'reads', 'swr'] |
| 13ed1045 | 4C | 4C1 | verbosity | B | Its characteristic impedance does not match the 50 Ω standard used by amateur tr | Correct 'B' len=126; avg distractors=64 (98% longer). Shorten or pad distractors. |
| ed530a81 | 4C | 4C2 | verbosity | A | A fixed property of the cable's physical construction, set by the conductor dime | Correct 'A' len=110; avg distractors=61 (79% longer). Shorten or pad distractors. |
| 83eeafd3 | 4D | 4D1 | explanation-leak | B | Prevent common-mode RF current from flowing on the outside of the coaxial braid | Explanation quotes correct option verbatim: '...common mode rf current from...'. Paraphrase explanation teaching point. |
| 469b98f3 | 4D | 4D3 | explanation-leak | C | At the antenna feedpoint — the point where the coax connects to the dipole | Explanation quotes correct option verbatim: '...the point where the coax...'. Paraphrase explanation teaching point. |
| fa18b7af | 4E | 4E1-2025-Int'd-1030 | verbosity | C | a combination of the RF from the transmitter and that reflected from the antenna | Correct 'C' len=81; avg distractors=40 (102% longer). Shorten or pad distractors. |
| a07e2f19 | 4E | 4E3 | stem-word-leak | B | 3.0:1 — the ATU only presents 50 Ω to the transmitter; the feeder still experien | Stem words in correct 'B' not in distractors: ['0', '1', 'antenna', 'atu', 'feeder', 'transmitter'] |
| d3aa633b | 4E | 4E6 | verbosity | A | The ATU components — particularly variable capacitors under high voltage at high | Correct 'A' len=195; avg distractors=105 (85% longer). Shorten or pad distractors. |
| 5ed91995 | 4F | 4F1-2025-Int'd-850 | verbosity | B | have no effect on the actual SWR on the feeder between the AMU and the antenna f | Correct 'B' len=90; avg distractors=51 (78% longer). Shorten or pad distractors. |
| e737b501 | 4F | 4F5 | explanation-leak | B | The angle between the two directions where the radiated power has fallen to half | Explanation quotes correct option verbatim: '...the angle between the two...'. Paraphrase explanation teaching point. |
| 2bcdf781 | 4F | 4F7 | explanation-leak | B | A horizontal dipole at λ/2 or higher above ground — greater height produces a lo | Explanation quotes correct option verbatim: '...greater height produces a lower...'. Paraphrase explanation teaching poi |
| 05d92e66 | 5A | 5A3 | explanation-leak | B | The 200 km station is in the skip zone — too far for ground wave but too close f | Explanation quotes correct option verbatim: '...the 200 km station is...'. Paraphrase explanation teaching point. |
| 237a0928 | 5A | 5A5 | stem-word-leak | B | Ground wave is most useful at LF and MF (below approximately 3 MHz); at higher H | Stem words in correct 'B' not in distractors: ['frequencies', 'ground', 'higher', 'range', 'wave'] |
| 237a0928 | 5A | 5A5 | explanation-leak | B | Ground wave is most useful at LF and MF (below approximately 3 MHz); at higher H | Explanation quotes correct option verbatim: '...resistive losses in the earth...'. Paraphrase explanation teaching point |
| 65f9ec38 | 5B | 5B1 | explanation-leak | B | It absorbs lower-frequency HF signals, preventing them from reaching the higher  | Explanation quotes correct option verbatim: '...absorbs lower frequency hf signals...'. Paraphrase explanation teaching  |
| 71677f77 | 5B | 5B2 | explanation-leak | C | F1 and F2 merge into a single weaker F layer at a lower altitude of approximatel | Explanation quotes correct option verbatim: '...f1 and f2 merge into...'. Paraphrase explanation teaching point. |
| 685529d1 | 5B | 5B4 | explanation-leak | B | E layer: 100–125 km; F2 layer: approximately 400 km during the day | Explanation quotes correct option verbatim: '...approximately 400 km during the...'. Paraphrase explanation teaching poi |
| 02116fa9 | 5B | 5B5 | verbosity | B | The D layer is at low altitude where the air is denser; when solar radiation sto | Correct 'B' len=279; avg distractors=151 (84% longer). Shorten or pad distractors. |
| df6263a8 | 5B | D2F-NEW-019 | verbosity | B | between the limit of ground wave reception and the nearest point of sky wave ret | Correct 'B' len=84; avg distractors=46 (81% longer). Shorten or pad distractors. |
| c88f930c | 5C | 5C1 | explanation-leak | B | The highest frequency that the ionosphere will refract back to earth for that pa | Explanation quotes correct option verbatim: '...the highest frequency that the...'. Paraphrase explanation teaching poin |
| cd245ece | 5C | 5C3 | stem-word-leak | C | The signal will pass straight through the ionosphere and escape into space — no  | Stem words in correct 'C' not in distractors: ['muf', 'sky', 'wave'] |
| f54f8214 | 5C | 5C5 | stem-word-leak | C | Any frequency between 7 MHz and 21 MHz — the usable frequency window lies betwee | Stem words in correct 'C' not in distractors: ['21', '7', 'luf', 'mhz', 'muf'] |
| f54f8214 | 5C | 5C5 | explanation-leak | C | Any frequency between 7 MHz and 21 MHz — the usable frequency window lies betwee | Explanation quotes correct option verbatim: '...between the luf and the...'. Paraphrase explanation teaching point. |
| 0e9d7dc0 | 5D | 5D2 | stem-word-leak | B | An HF blackout occurs because the intense X-ray radiation causes extremely stron | Stem words in correct 'B' not in distractors: ['hf', 'intense', 'radiation', 'ray', 'x'] |
| a7178a6d | 5D | 5D3 | stem-word-leak | B | In winter evenings, the D layer is absent (no absorption), while the F layer is  | Stem words in correct 'B' not in distractors: ['3', '5', 'afternoons', 'evenings', 'mhz', 'summer'] |
| a7178a6d | 5D | 5D3 | verbosity | B | In winter evenings, the D layer is absent (no absorption), while the F layer is  | Correct 'B' len=241; avg distractors=108 (124% longer). Shorten or pad distractors. |
| a7178a6d | 5D | 5D3 | explanation-leak | B | In winter evenings, the D layer is absent (no absorption), while the F layer is  | Explanation quotes correct option verbatim: '...the f layer is still...'. Paraphrase explanation teaching point. |
| f7fa9a83 | 5E | 5E2 | explanation-leak | B | A temperature inversion — a layer of warmer air above cooler air — that traps VH | Explanation quotes correct option verbatim: '...a layer of warmer air...'. Paraphrase explanation teaching point. |
| b1b8571c | 5E | 5E3 | verbosity | B | The atmosphere slightly refracts radio waves downward toward the Earth's surface | Correct 'B' len=174; avg distractors=99 (75% longer). Shorten or pad distractors. |
| bcb4bb05 | 5E | 5E4 | verbosity | C | Very brief bursts of signal are reflected from the ionised trails left by meteor | Correct 'C' len=204; avg distractors=116 (76% longer). Shorten or pad distractors. |
| 4d80716e | 5F | 5F1 | verbosity | B | Multipath propagation — the signal arrives via several slightly different path l | Correct 'B' len=202; avg distractors=107 (88% longer). Shorten or pad distractors. |
| f3819e4d | 5F | 5F2 | verbosity | B | SSB occupies a bandwidth of approximately 2.4 kHz — different frequencies within | Correct 'B' len=290; avg distractors=102 (183% longer). Shorten or pad distractors. |
| 05002a6c | 6A | 6A1 | verbosity | B | Equipment must not emit harmful electromagnetic interference to other equipment, | Correct 'B' len=167; avg distractors=97 (72% longer). Shorten or pad distractors. |
| 05002a6c | 6A | 6A1 | explanation-leak | B | Equipment must not emit harmful electromagnetic interference to other equipment, | Explanation quotes correct option verbatim: '...interference from other lawfully operated...'. Paraphrase explanation te |
| 6e2f278d | 6A | 6A3 | explanation-leak | B | As both a potential source of interference to neighbours' equipment and a victim | Explanation quotes correct option verbatim: '...source of interference to neighbours...'. Paraphrase explanation teachin |
| 543a8e54 | 6B | 6B4 | explanation-leak | C | 3.5 MHz (80 m) and 7 MHz (40 m) — VDSL signals extend up to approximately 17 MHz | Explanation quotes correct option verbatim: '...up to approximately 17 mhz...'. Paraphrase explanation teaching point. |
| 64c1a400 | 6C | 6C1 | verbosity | B | RF from the amateur's SSB transmission has broken through into the hi-fi's audio | Correct 'B' len=199; avg distractors=114 (75% longer). Shorten or pad distractors. |
| 7f06d9be | 6C | 6C2 | explanation-leak | C | FM receivers exhibit a capture effect — they lock onto the strongest available F | Explanation quotes correct option verbatim: '...the wanted fm broadcast station...'. Paraphrase explanation teaching poi |
| 93505785 | 6C | 6C2-2025-Int'd-1378 | stem-word-leak | D | the masthead amplifier is amplifying the amateur signal and overloading the tele | Stem words in correct 'D' not in distractors: ['amplifier', 'masthead', 'television'] |
| d5b0d6a5 | 6C | 6C3 | explanation-leak | B | The interference is caused by radiated RF from the antenna — the next step is to | Explanation quotes correct option verbatim: '...interference is caused by radiated...'. Paraphrase explanation teaching  |
| 4db3ec71 | 6D | 6D1 | explanation-leak | B | Between the transmitter RF output and the SWR meter (or antenna), in the RF sign | Explanation quotes correct option verbatim: '...between the transmitter rf output...'. Paraphrase explanation teaching p |
| 76bf9d60 | 6D | 6D2 | explanation-leak | C | As close to the transmitter as possible | Explanation quotes correct option verbatim: '...as close to the transmitter...'. Paraphrase explanation teaching point. |
| 49d1929f | 6D | 6D3 | stem-word-leak | B | House electrical wiring runs throughout the loft space. RF from a loft antenna c | Stem words in correct 'B' not in distractors: ['antenna', 'house', 'loft', 'space'] |
| 49d1929f | 6D | 6D3 | verbosity | B | House electrical wiring runs throughout the loft space. RF from a loft antenna c | Correct 'B' len=249; avg distractors=99 (152% longer). Shorten or pad distractors. |
| 49d1929f | 6D | 6D3 | explanation-leak | B | House electrical wiring runs throughout the loft space. RF from a loft antenna c | Explanation quotes correct option verbatim: '...runs throughout the loft space...'. Paraphrase explanation teaching poin |
| 448e653e | 6D | 6D4 | verbosity | B | The mains earth is a safety earth whose integrity must not be compromised. Conne | Correct 'B' len=219; avg distractors=115 (90% longer). Shorten or pad distractors. |
| 448e653e | 6D | 6D4 | explanation-leak | B | The mains earth is a safety earth whose integrity must not be compromised. Conne | Explanation quotes correct option verbatim: '...the mains earth is a...'. Paraphrase explanation teaching point. |
| bdc9d152 | 6D | 6D5 | stem-word-leak | A | Increased separation reduces the electric and magnetic field coupling between ca | Stem words in correct 'A' not in distractors: ['between', 'cables', 'coupling', 'reduces', 'separation'] |
| cd68b994 | 6E | 6E2 | verbosity | B | The television manufacturer — CE marking requires the product to meet immunity s | Correct 'B' len=223; avg distractors=128 (74% longer). Shorten or pad distractors. |
| 77b874b1 | 6F | 6F2 | verbosity | B | If a complaint of interference is made, a log allows the amateur to demonstrate  | Correct 'B' len=244; avg distractors=113 (117% longer). Shorten or pad distractors. |
| 189dceb9 | 7A | 7A3 | stem-word-leak | B | CW and narrow-band digital modes only — no SSB segment exists in the 10 MHz band | Stem words in correct 'B' not in distractors: ['10', 'mhz', 'modes', 'plan', 'segment', 'ssb'] |
| 189dceb9 | 7A | 7A3 | explanation-leak | B | CW and narrow-band digital modes only — no SSB segment exists in the 10 MHz band | Explanation quotes correct option verbatim: '...cw and narrow band digital...'. Paraphrase explanation teaching point. |
| 87e54d71 | 7A | 7A5 | verbosity | B | Band plans are voluntary IARU coordination agreements, not law. They prevent cha | Correct 'B' len=288; avg distractors=160 (80% longer). Shorten or pad distractors. |
| b9d6c9ae | 7B | 7B2 | explanation-leak | B | Listen for at least a minute, then say 'Is this frequency in use?' and pause bef | Explanation quotes correct option verbatim: '...listen for at least a...'. Paraphrase explanation teaching point. |
| ecb7ec5e | 7B | 7B3 | verbosity | C | 73 is a word meaning 'best regards', derived from the historical Landline Morse  | Correct 'C' len=218; avg distractors=92 (137% longer). Shorten or pad distractors. |
| f4c5cdfc | 7B | 7B4 | stem-word-leak | B | Letters that sound similar (B/D/E/G/P/T/V) become indistinguishable on a weak or | Stem words in correct 'B' not in distractors: ['alphabet', 'informal', 'nato', 'substitutions'] |
| f4c5cdfc | 7B | 7B4 | verbosity | B | Letters that sound similar (B/D/E/G/P/T/V) become indistinguishable on a weak or | Correct 'B' len=292; avg distractors=138 (111% longer). Shorten or pad distractors. |
| 623bc5cf | 7C | 7C1 | stem-word-leak | B | The DX station is transmitting on its published frequency and listening 5 kHz ab | Stem words in correct 'B' not in distractors: ['5', 'calling', 'dx', 'stations'] |
| 623bc5cf | 7C | 7C1 | verbosity | B | The DX station is transmitting on its published frequency and listening 5 kHz ab | Correct 'B' len=175; avg distractors=83 (111% longer). Shorten or pad distractors. |
| 623bc5cf | 7C | 7C1 | explanation-leak | B | The DX station is transmitting on its published frequency and listening 5 kHz ab | Explanation quotes correct option verbatim: '...listening 5 khz above it...'. Paraphrase explanation teaching point. |
| 95d70a1f | 7C | 7C3 | stem-word-leak | B | Split operation keeps the pileup of calling stations off the DX station's transm | Stem words in correct 'B' not in distractors: ['dx', 'operation', 'pileup', 'split', 'stations'] |
| 95d70a1f | 7C | 7C3 | verbosity | B | Split operation keeps the pileup of calling stations off the DX station's transm | Correct 'B' len=254; avg distractors=119 (113% longer). Shorten or pad distractors. |
| 78fab988 | 7D | 7D3 | verbosity | B | The FT8 signal, which sounds like a buzzing tone approximately 50 Hz wide, appea | Correct 'B' len=218; avg distractors=104 (110% longer). Shorten or pad distractors. |
| 30bac029 | 7E | 7E1 | explanation-leak | B | A scheduled on-air meeting of a group of stations on a fixed frequency and time, | Explanation quotes correct option verbatim: '...by a net control station...'. Paraphrase explanation teaching point. |
| e7814a72 | 7E | 7E2 | verbosity | B | RAYNET operators should use approved callsigns and pro-forma message formats, pa | Correct 'B' len=212; avg distractors=118 (80% longer). Shorten or pad distractors. |
| 99ea07ff | 7F | 7F3 | verbosity | B | Keep the exchange brief — give your callsign once clearly and wait; accept the s | Correct 'B' len=181; avg distractors=108 (67% longer). Shorten or pad distractors. |
| 99ea07ff | 7F | 7F3 | explanation-leak | B | Keep the exchange brief — give your callsign once clearly and wait; accept the s | Explanation quotes correct option verbatim: '...signal report plus serial number...'. Paraphrase explanation teaching po |
| b9c69d71 | 7G | 7G1 | stem-word-leak | B | No — log-keeping was removed as a licence condition in the 2024 UK amateur licen | Stem words in correct 'B' not in distractors: ['2024', 'keeping', 'uk'] |
| b9c69d71 | 7G | 7G1 | explanation-leak | B | No — log-keeping was removed as a licence condition in the 2024 UK amateur licen | Explanation quotes correct option verbatim: '...log keeping was removed as...'. Paraphrase explanation teaching point. |
| 983de8b7 | 7G | 7G2 | stem-word-leak | B | Without a log, the amateur cannot readily demonstrate whether they were transmit | Stem words in correct 'B' not in distractors: ['cannot', 'demonstrate', 'log', 'time', 'transmitting', 'whether'] |
| 983de8b7 | 7G | 7G2 | verbosity | B | Without a log, the amateur cannot readily demonstrate whether they were transmit | Correct 'B' len=345; avg distractors=120 (188% longer). Shorten or pad distractors. |
| 8ae2486d | 7H | 7H2 | verbosity | B | Investigate before transmitting; the significant change most likely indicates a  | Correct 'B' len=209; avg distractors=101 (107% longer). Shorten or pad distractors. |
| f3a70342 | 7H | 7H3 | explanation-leak | B | RF energy on the coaxial cable couples inductively and capacitively into the adj | Explanation quotes correct option verbatim: '...the transmitter s audio input...'. Paraphrase explanation teaching point |
| 946641dd | 8A | 8A6 | explanation-leak | B | 30 mA in 25 to 40 milliseconds | Explanation quotes correct option verbatim: '...in 25 to 40 milliseconds...'. Paraphrase explanation teaching point. |
| eef99ae7 | 8A | 8A8 | explanation-leak | C | Switch off the mains supply at the socket or at the consumer unit | Explanation quotes correct option verbatim: '...or at the consumer unit...'. Paraphrase explanation teaching point. |
| 62948d30 | 8B | 8B4 | stem-word-leak | B | It keeps one hand free of any conductor, eliminating the hand-to-hand current pa | Stem words in correct 'B' not in distractors: ['hand', 'one'] |
| 62948d30 | 8B | 8B4 | verbosity | B | It keeps one hand free of any conductor, eliminating the hand-to-hand current pa | Correct 'B' len=137; avg distractors=73 (89% longer). Shorten or pad distractors. |
| 462a02d4 | 8F | 8F | verbosity | B | Respiratory irritation and risk of occupational sensitisation — work in a well-v | Correct 'B' len=152; avg distractors=85 (80% longer). Shorten or pad distractors. |
| dcc71e37 | 8H | 8H | verbosity | B | It protects against static charge build-up from atmospheric electricity, but not | Correct 'B' len=185; avg distractors=103 (80% longer). Shorten or pad distractors. |
| e89676a5 | 9A | 9A2 | verbosity | B | Analogue — the moving needle makes it easy to see the direction of change and id | Correct 'B' len=128; avg distractors=72 (78% longer). Shorten or pad distractors. |
| 1c464f7e | 9A | 9A3 | explanation-leak | D | Connect the probes together and adjust the zero control until the needle reads e | Explanation quotes correct option verbatim: '...adjust the zero control until...'. Paraphrase explanation teaching point |
| 0b57e6eb | 9B | 9B | verbosity | D | Connect the voltmeter in parallel across the PA supply rails to read V, then bre | Correct 'D' len=179; avg distractors=89 (100% longer). Shorten or pad distractors. |
| 0b57e6eb | 9B | 9B | explanation-leak | D | Connect the voltmeter in parallel across the PA supply rails to read V, then bre | Explanation quotes correct option verbatim: '...the pa supply rails to...'. Paraphrase explanation teaching point. |
| b1e72b7d | 9B | 9B2 | stem-word-leak | A | The DMM has a much higher input impedance (typically 10 MΩ) than a typical analo | Stem words in correct 'A' not in distractors: ['analogue', 'circuit', 'dmm', 'voltmeter'] |
| 5cbc17fe | 9B | 9B5 | explanation-leak | B | Start on the highest available range, read the result, then switch to a lower ra | Explanation quotes correct option verbatim: '...start on the highest available...'. Paraphrase explanation teaching poin |
| 1067063a | 9D | 9D1 | verbosity | C | It injects a known frequency at a precisely known level into the receiver's ante | Correct 'C' len=188; avg distractors=106 (77% longer). Shorten or pad distractors. |
| c11e69a2 | 9E | 9E1 | explanation-leak | A | Between the transmitter output and the ATU | Explanation quotes correct option verbatim: '...between the transmitter output and...'. Paraphrase explanation teaching  |
| a655d0f6 | 9F | 9F3 | stem-word-leak | B | Connect the transmitter to a 100 W rated dummy load; use a directional coupler t | Stem words in correct 'B' not in distractors: ['100', 'transmitter', 'w'] |
| a655d0f6 | 9F | 9F3 | verbosity | B | Connect the transmitter to a 100 W rated dummy load; use a directional coupler t | Correct 'B' len=242; avg distractors=125 (93% longer). Shorten or pad distractors. |
| a655d0f6 | 9F | 9F3 | explanation-leak | B | Connect the transmitter to a 100 W rated dummy load; use a directional coupler t | Explanation quotes correct option verbatim: '...small fraction of the output...'. Paraphrase explanation teaching point. |
| 112fd3a6 | 9G | 9G | verbosity | C | When the dip meter's tuneable oscillator is adjusted to the resonant frequency o | Correct 'C' len=272; avg distractors=133 (105% longer). Shorten or pad distractors. |
| 112fd3a6 | 9G | 9G | explanation-leak | C | When the dip meter's tuneable oscillator is adjusted to the resonant frequency o | Explanation quotes correct option verbatim: '...on the built in meter...'. Paraphrase explanation teaching point. |
| cf41400e | 9H | 9H | stem-word-leak | B | Rated for at least 100 W (preferably 150 W or more for headroom), presenting 50  | Stem words in correct 'B' not in distractors: ['100', 'hf', 'w'] |

---

## Summary

| Metric | Count |
|--------|-------|
| Total questions audited | 526 |
| Total flags raised | 137 |
| Flag rate | 26.0% |
| Questions flagged 0× | 389 (clean) |

### By issue type

| Issue type | Count | % of total |
|------------|-------|------------|
| explanation-leak | 56 | 10.6% |
| verbosity | 54 | 10.3% |
| stem-word-leak | 25 | 4.8% |
| straw-man | 2 | 0.4% |

---

## Reviewer notes

- **stem-word-leak:** Check the flagged word list — remove/paraphrase that word from the correct option text, or add the same descriptive language to all options.
- **verbosity:** Either shorten the correct option to match distractor length, or expand distractors to match the level of detail.
- **straw-man:** Replace the flagged distractor with a plausible-sounding wrong answer that requires knowledge to eliminate.
- **explanation-leak:** The explanation shouldn't directly quote the option text — paraphrase the teaching point instead.

*Audit completed 2026-09-13T13:30 UTC*
