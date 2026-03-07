# RF-Hub Interactives — Three.js r128 Patterns

Reference for building antenna pattern geometries and scene objects.
All code targets Three.js r128 loaded from cdnjs.

---

## Scene Architecture (existing)

```
scene
├── AmbientLight
├── PointLight
├── antenna (CylinderGeometry — the yellow dipole rod)
├── feedPoint (SphereGeometry — feed point dot)
├── patternGroup (Group — cleared and rebuilt on antenna change)
│   └── [pattern mesh(es) for current antenna type]
├── wavefronts[] (rings/shells — animated)
├── axes (LineSegments)
└── rxAntenna (the cyan receiver)
```

`patternGroup` is the only thing that changes between antenna types.
Clear it before building a new pattern:

```javascript
function clearPattern() {
  while (patternGroup.children.length > 0) {
    const child = patternGroup.children[0];
    child.geometry.dispose();
    child.material.dispose();
    patternGroup.remove(child);
  }
}
```

---

## Pattern Material (standard)

All patterns use a consistent translucent purple material:

```javascript
const patternMat = new THREE.MeshBasicMaterial({
  color: 0xa78bfa,
  transparent: true,
  opacity: 0.18,
  side: THREE.DoubleSide,
  depthWrite: false,
});

const patternWireMat = new THREE.LineBasicMaterial({
  color: 0xa78bfa,
  transparent: true,
  opacity: 0.35,
});
```

Use `MeshBasicMaterial` not `MeshStandardMaterial` — no lighting dependency.

---

## Dipole Pattern (existing — reference implementation)

The existing dipole is a toroid (donut). Study this before building others.

```javascript
// Toroid: major radius R (distance from centre to tube centre)
//         minor radius r (tube thickness)
const geo = new THREE.TorusGeometry(12, 5, 24, 48);
const mesh = new THREE.Mesh(geo, patternMat);
// Dipole lies on Y axis — toroid sits in XZ plane (equator)
// No rotation needed — TorusGeometry is in XZ plane by default
patternGroup.add(mesh);
```

---

## Vertical Pattern

⚠️ COMMON MISTAKE: Do NOT rotate the toroid. The vertical monopole pattern has the same
axis and orientation as the dipole. The hole stays along Y (vertical). The ONLY difference
is that the lower hemisphere (below the ground plane at y=0) is absent.

From the top: identical circle to dipole (both omnidirectional in azimuth).
From the side: upper D-shape only — no energy below ground.

```javascript
function buildVerticalPattern() {
  clearPattern();
  // Same geometry as dipole — NO rotation applied
  const geo = new THREE.TorusGeometry(12, 5, 24, 48);
  // rotateX(PI/2) keeps hole along Y axis (same as dipole — correct)
  geo.rotateX(Math.PI / 2);
  const mesh = new THREE.Mesh(geo, patternMat);
  // Clip lower half visually — move group up so base sits at y=0
  // The patternF function returns 0 for theta > PI/2, so shell wavefronts
  // already show no energy below ground. The static geometry can be
  // handled by scaling: show only upper half via a clipping approach,
  // or accept that the static shape shows both halves (less critical
  // than the animated wavefronts being correct).
  patternGroup.add(mesh);
}
```

The antenna element geometry is unchanged — CylinderGeometry along Y axis, same as dipole.
Ground plane (gridHelper) provides the visual floor reference.

---

## Collinear Pattern

Flattened toroid — same XZ orientation as dipole but compressed vertically.
Represents gain concentrated toward horizon, less energy skyward.

```javascript
function buildCollinearPattern() {
  clearPattern();
  const geo = new THREE.TorusGeometry(14, 4, 24, 48);
  const mesh = new THREE.Mesh(geo, patternMat);
  // Squash vertically — scale Y axis down
  mesh.scale.set(1, 0.45, 1);
  patternGroup.add(mesh);
}
```

The wider major radius (14 vs 12) and scale compression together give the
"more energy at horizon" visual.

---

## Yagi Pattern

Forward cardioid lobe. Suppressed rear. Use a custom BufferGeometry built
from a parametric surface, or approximate with a scaled/deformed sphere.

Simplest effective approach — deformed SphereGeometry:

```javascript
function buildYagiPattern() {
  clearPattern();
  // Use a sphere and deform vertices to create cardioid forward lobe
  const geo = new THREE.SphereGeometry(10, 32, 32);
  const pos = geo.attributes.position;

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    // Cardioid-style deformation along Z axis (forward direction)
    const r = Math.sqrt(x*x + y*y + z*z);
    const cosTheta = z / r; // cos of angle from forward axis
    // Pattern function: forward lobe shape
    const pattern = Math.pow(Math.max(0, cosTheta), 3) * 2.5 + 0.15;
    pos.setXYZ(i, x * pattern, y * pattern, z * pattern);
  }
  geo.attributes.position.needsUpdate = true;
  geo.computeVertexNormals();

  const mesh = new THREE.Mesh(geo, patternMat);
  // Yagi boom points along Z — driven element on Y axis
  // No rotation needed if Z = forward
  patternGroup.add(mesh);
}
```

Adjust the `Math.pow` exponent to control beamwidth — higher = narrower forward lobe.

---

## Loop Pattern

Figure-of-eight. Nulls broadside (perpendicular to loop face). Max radiation edge-on.
Two lobes, symmetric, on opposite sides.

```javascript
function buildLoopPattern() {
  clearPattern();
  // Two lobes — one each side along Z axis
  // Use elongated spheres offset from centre
  const lobeMat = patternMat.clone();

  for (const sign of [-1, 1]) {
    const geo = new THREE.SphereGeometry(6, 24, 24);
    const mesh = new THREE.Mesh(geo, lobeMat);
    mesh.scale.set(0.7, 0.7, 1.4); // elongate along Z
    mesh.position.set(0, 0, sign * 6);
    patternGroup.add(mesh);
  }
  // Loop itself (visual reference — thin torus in XY plane)
  const loopGeo = new THREE.TorusGeometry(5, 0.3, 8, 32);
  const loopMesh = new THREE.Mesh(loopGeo, new THREE.MeshBasicMaterial({
    color: 0xf59e0b, transparent: true, opacity: 0.6
  }));
  loopMesh.rotation.x = Math.PI / 2; // loop in XZ plane
  patternGroup.add(loopMesh);
}
```

---

## Patch Pattern

Broadside hemisphere. Main lobe perpendicular to ground plane (upward along Y).
Low gain, wide beamwidth.

```javascript
function buildPatchPattern() {
  clearPattern();
  // Upper hemisphere only — ground plane blocks downward radiation
  const geo = new THREE.SphereGeometry(10, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
  const mesh = new THREE.Mesh(geo, patternMat);
  // Sits above XZ ground plane
  patternGroup.add(mesh);

  // Ground plane visual
  const groundGeo = new THREE.PlaneGeometry(30, 30);
  const groundMesh = new THREE.Mesh(groundGeo, new THREE.MeshBasicMaterial({
    color: 0x1e293b, transparent: true, opacity: 0.5, side: THREE.DoubleSide
  }));
  groundMesh.rotation.x = Math.PI / 2;
  patternGroup.add(groundMesh);
}
```

---

## Dish Pattern

Narrow pencil beam. Very elongated forward lobe. Use deformed sphere with
high exponent — much more directional than Yagi.

```javascript
function buildDishPattern() {
  clearPattern();
  const geo = new THREE.SphereGeometry(8, 32, 32);
  const pos = geo.attributes.position;

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const r = Math.sqrt(x*x + y*y + z*z);
    const cosTheta = z / r;
    // Very high exponent = very narrow beam
    const pattern = Math.pow(Math.max(0, cosTheta), 12) * 4.0 + 0.05;
    pos.setXYZ(i, x * pattern, y * pattern, z * pattern);
  }
  geo.attributes.position.needsUpdate = true;
  geo.computeVertexNormals();

  const mesh = new THREE.Mesh(geo, patternMat);
  patternGroup.add(mesh);

  // Dish reflector visual (parabola approximated as shallow bowl)
  const dishGeo = new THREE.SphereGeometry(8, 32, 16, 0, Math.PI * 2, Math.PI * 0.6, Math.PI * 0.3);
  const dishMesh = new THREE.Mesh(dishGeo, new THREE.MeshBasicMaterial({
    color: 0x94a3b8, transparent: true, opacity: 0.4,
    side: THREE.DoubleSide, wireframe: true
  }));
  dishMesh.rotation.y = Math.PI; // open face forward
  patternGroup.add(dishMesh);
}
```

---

## buildAntennaPattern() Dispatcher

Wire all patterns through a single function:

```javascript
function buildAntennaPattern(type) {
  clearPattern();
  switch(type) {
    case 'dipole':    buildDipolePattern();    break;
    case 'vertical':  buildVerticalPattern();  break;
    case 'collinear': buildCollinearPattern(); break;
    case 'yagi':      buildYagiPattern();      break;
    case 'loop':      buildLoopPattern();      break;
    case 'patch':     buildPatchPattern();     break;
    case 'dish':      buildDishPattern();      break;
    default:          buildDipolePattern();    break; // safe fallback
  }
  // Update HUD
  const labels = {
    dipole: 'Half-wave Dipole', vertical: 'Vertical Monopole',
    collinear: 'Collinear Array', yagi: 'Yagi-Uda',
    loop: 'Small Loop', patch: 'Patch / Microstrip', dish: 'Parabolic Dish'
  };
  const hudAntenna = document.querySelector('.hud .hud-val');
  if (hudAntenna) hudAntenna.textContent = labels[type] || type;
}
```

Call this on load after reading `?antenna=` param, and again when selector changes.
