# Styling Guide

**Last Updated:** October 8, 2025 by Claude Code
# Styling Guide

**Document Owner:** Claude Code  
**Last Updated:** October 8, 2025  
**Purpose:** Define and document the complete design system

---

## 🎨 Design Philosophy

**Aesthetic:** Modern, technical, futuristic yet accessible  
**Inspiration:** Space exploration, radio waves, high-tech interfaces  
**Feel:** Professional but welcoming, educational but not academic  
**Target:** Appeal to both hobbyists and professionals

---

## 🌈 Color Palette

### Primary Colors

```css
/* Background Gradients */
--bg-primary: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
--bg-secondary: rgba(48, 43, 99, 0.6);
--bg-tertiary: rgba(15, 12, 41, 0.8);

/* Accent Colors */
--accent-cyan: #00d4ff;        /* Primary interactive elements */
--accent-purple: #7b2ff7;      /* Secondary highlights */
--accent-blue: #3498db;        /* Info elements */

/* Status Colors */
--success: #2ecc71;            /* Completed, success states */
--warning: #f39c12;            /* Caution, pending states */
--danger: #e74c3c;             /* Errors, critical items */
--info: #3498db;               /* Information boxes */

/* Text Colors */
--text-primary: #e0e0e0;       /* Main body text */
--text-secondary: #c0c0c0;     /* Secondary text, labels */
--text-muted: #808080;         /* Disabled, placeholders */
--text-dark: #2c3e50;          /* Text on light backgrounds */

/* Border & Dividers */
--border-light: rgba(0, 212, 255, 0.3);
--border-medium: rgba(0, 212, 255, 0.5);
--border-strong: #00d4ff;
```

### Color Usage Guidelines

**Cyan (#00d4ff):**
- Primary call-to-action buttons
- Links and interactive elements
- Active navigation states
- Hover effects
- Progress indicators

**Purple (#7b2ff7):**
- Secondary buttons
- Badge backgrounds
- Section headers
- Feature highlights

**Green (#2ecc71):**
- Success messages
- Completed checkboxes
- Positive statistics
- "Go" or "Start" actions

**Orange (#f39c12):**
- Warning messages
- Pending states
- Important notices
- In-progress indicators

**Red (#e74c3c):**
- Error messages
- Critical alerts
- Delete/remove actions
- Failed states

---

## 📝 Typography

### Font Families

```css
/* Headings */
--font-heading: 'Orbitron', sans-serif;
/* Modern, technical, futuristic */
/* Weight: 400, 500, 700, 900 */

/* Body Text */
--font-body: 'Roboto', sans-serif;
/* Clean, readable, professional */
/* Weight: 300, 400, 500, 700 */

/* Code/Monospace */
--font-mono: 'Fira Code', 'Consolas', monospace;
/* For code blocks, technical data */
/* Weight: 400, 500, 700 */
```

### Font Sizes

```css
/* Headings */
--text-h1: 2.5rem;      /* 40px - Page titles */
--text-h2: 2rem;        /* 32px - Section headers */
--text-h3: 1.5rem;      /* 24px - Subsections */
--text-h4: 1.25rem;     /* 20px - Cards, modules */
--text-h5: 1.125rem;    /* 18px - Small headings */
--text-h6: 1rem;        /* 16px - Labels */

/* Body */
--text-base: 1rem;      /* 16px - Standard body */
--text-small: 0.875rem; /* 14px - Captions, meta */
--text-tiny: 0.75rem;   /* 12px - Footnotes */

/* Display */
--text-display: 3rem;   /* 48px - Hero text */
```

### Line Heights

```css
--line-tight: 1.2;      /* Headings */
--line-normal: 1.5;     /* Body text */
--line-relaxed: 1.75;   /* Long-form content */
```

### Font Weight

```css
--weight-light: 300;
--weight-normal: 400;
--weight-medium: 500;
--weight-bold: 700;
--weight-black: 900;
```

---

## 📐 Spacing System

### Base Unit: 4px

```css
--space-xs: 0.25rem;    /* 4px */
--space-sm: 0.5rem;     /* 8px */
--space-md: 1rem;       /* 16px */
--space-lg: 1.5rem;     /* 24px */
--space-xl: 2rem;       /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */
```

### Usage Guidelines

- **Margins between sections:** `--space-2xl` (48px)
- **Padding inside cards:** `--space-lg` (24px)
- **Gap between flex/grid items:** `--space-md` (16px)
- **Button padding:** `--space-md` horizontal, `--space-sm` vertical
- **Form field spacing:** `--space-lg` (24px)

---

## 🔲 Component Library

### 1. Cards

```css
.card {
    background: rgba(48, 43, 99, 0.6);
    border: 2px solid rgba(0, 212, 255, 0.3);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s ease;
}

.card:hover {
    border-color: #00d4ff;
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
}

.card-header {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #00d4ff;
    margin-bottom: 1rem;
}

.card-body {
    font-family: 'Roboto', sans-serif;
    color: #e0e0e0;
    line-height: 1.5;
}
```

**Usage:** Equipment cards, module cards, info boxes

---

### 2. Buttons

#### Primary Button
```css
.btn-primary {
    background: linear-gradient(135deg, #00d4ff, #7b2ff7);
    color: #ffffff;
    font-family: 'Orbitron', sans-serif;
    font-weight: 500;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 212, 255, 0.4);
}

.btn-primary:active {
    transform: translateY(0);
}
```

#### Secondary Button
```css
.btn-secondary {
    background: transparent;
    color: #00d4ff;
    border: 2px solid #00d4ff;
    font-family: 'Orbitron', sans-serif;
    font-weight: 500;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-secondary:hover {
    background: rgba(0, 212, 255, 0.1);
    transform: translateY(-2px);
}
```

#### Small Button
```css
.btn-small {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
}
```

---

### 3. Navigation

```css
.nav-tabs {
    display: flex;
    gap: 0.5rem;
    background: rgba(15, 12, 41, 0.8);
    padding: 1rem;
    border-radius: 12px;
    margin-bottom: 2rem;
}

.nav-tab {
    color: #c0c0c0;
    text-decoration: none;
    padding: 0.75rem 1.25rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
}

.nav-tab:hover {
    background: rgba(0, 212, 255, 0.1);
    color: #00d4ff;
}

.nav-tab.active {
    background: linear-gradient(135deg, #00d4ff, #7b2ff7);
    color: #ffffff;
}
```

---

### 4. Status Icons

```css
.status-icons {
    display: flex;
    gap: 0.5rem;
    margin: 0.5rem 0;
}

.status-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 2px solid rgba(0, 212, 255, 0.3);
    background: rgba(48, 43, 99, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.2rem;
}

.status-icon:hover {
    border-color: #00d4ff;
    transform: scale(1.1);
}

.status-icon.active {
    background: linear-gradient(135deg, #00d4ff, #7b2ff7);
    border-color: #00d4ff;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.5);
}

/* Specific status colors */
.status-icon.completed { color: #2ecc71; }
.status-icon.reading { color: #3498db; }
.status-icon.bookmarked { color: #f39c12; }
.status-icon.struggling { color: #e74c3c; }
.status-icon.revisit { color: #9b59b6; }
```

**Icons:**
- ✅ Completed (green)
- 📖 Currently Reading (blue)
- ⭐ Bookmarked (yellow/orange)
- ❓ Need Help (red)
- 🔄 Revisit Later (purple)

---

### 5. Info Boxes

```css
.info-box {
    padding: 1.5rem;
    border-radius: 12px;
    margin: 1rem 0;
    border-left: 4px solid;
}

.info-box-success {
    background: rgba(46, 204, 113, 0.1);
    border-color: #2ecc71;
    color: #2ecc71;
}

.info-box-warning {
    background: rgba(243, 156, 18, 0.1);
    border-color: #f39c12;
    color: #f39c12;
}

.info-box-danger {
    background: rgba(231, 76, 60, 0.1);
    border-color: #e74c3c;
    color: #e74c3c;
}

.info-box-info {
    background: rgba(52, 152, 219, 0.1);
    border-color: #3498db;
    color: #3498db;
}
```

---

### 6. Image Galleries

```css
.image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.image-card {
    background: rgba(48, 43, 99, 0.6);
    border: 2px solid rgba(0, 212, 255, 0.3);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.image-card:hover {
    border-color: #00d4ff;
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
}

.image-card img {
    width: 100%;
    height: 220px;
    object-fit: contain;
    background: rgba(15, 12, 41, 0.5);
    padding: 1rem;
}

.image-card-caption {
    padding: 1rem;
    color: #e0e0e0;
}

.image-card-title {
    font-weight: 600;
    color: #00d4ff;
    margin-bottom: 0.5rem;
}
```

---

### 7. Tables

```css
.data-table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    background: rgba(48, 43, 99, 0.4);
    border-radius: 12px;
    overflow: hidden;
}

.data-table thead {
    background: linear-gradient(135deg, #00d4ff, #7b2ff7);
}

.data-table th {
    color: #ffffff;
    font-family: 'Orbitron', sans-serif;
    font-weight: 600;
    padding: 1rem;
    text-align: left;
}

.data-table td {
    padding: 1rem;
    border-top: 1px solid rgba(0, 212, 255, 0.2);
    color: #e0e0e0;
}

.data-table tr:hover {
    background: rgba(0, 212, 255, 0.05);
}
```

---

### 8. Forms

```css
.form-group {
    margin-bottom: 1.5rem;
}

.form-label {
    display: block;
    color: #00d4ff;
    font-weight: 500;
    margin-bottom: 0.5rem;
    font-family: 'Roboto', sans-serif;
}

.form-input {
    width: 100%;
    padding: 0.75rem 1rem;
    background: rgba(48, 43, 99, 0.6);
    border: 2px solid rgba(0, 212, 255, 0.3);
    border-radius: 8px;
    color: #e0e0e0;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-input:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.3);
}

.form-input::placeholder {
    color: #808080;
}
```

---

### 9. Progress Bars

```css
.progress-bar {
    width: 100%;
    height: 24px;
    background: rgba(48, 43, 99, 0.6);
    border: 2px solid rgba(0, 212, 255, 0.3);
    border-radius: 12px;
    overflow: hidden;
    position: relative;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #00d4ff, #7b2ff7);
    transition: width 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 600;
    font-size: 0.875rem;
}
```

---

### 10. Badges

```css
.badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
}

.badge-success {
    background: rgba(46, 204, 113, 0.2);
    color: #2ecc71;
    border: 1px solid #2ecc71;
}

.badge-warning {
    background: rgba(243, 156, 18, 0.2);
    color: #f39c12;
    border: 1px solid #f39c12;
}

.badge-danger {
    background: rgba(231, 76, 60, 0.2);
    color: #e74c3c;
    border: 1px solid #e74c3c;
}

.badge-info {
    background: rgba(52, 152, 219, 0.2);
    color: #3498db;
    border: 1px solid #3498db;
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */

/* Extra Small Devices (phones) */
--breakpoint-xs: 0px;
/* Base styles, no media query needed */

/* Small Devices (large phones) */
--breakpoint-sm: 576px;
@media (min-width: 576px) { }

/* Medium Devices (tablets) */
--breakpoint-md: 768px;
@media (min-width: 768px) { }

/* Large Devices (desktops) */
--breakpoint-lg: 992px;
@media (min-width: 992px) { }

/* Extra Large Devices (large desktops) */
--breakpoint-xl: 1200px;
@media (min-width: 1200px) { }

/* XXL Devices (very large screens) */
--breakpoint-xxl: 1400px;
@media (min-width: 1400px) { }
```

### Responsive Grid

```css
/* Mobile: 1 column */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
}

/* Desktop: 3 columns */
@media (min-width: 992px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
}
```

---

## ⚡ Animations & Transitions

### Hover Effects

```css
.hover-lift {
    transition: transform 0.3s ease;
}

.hover-lift:hover {
    transform: translateY(-5px);
}

.hover-glow {
    transition: box-shadow 0.3s ease;
}

.hover-glow:hover {
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
}
```

### Loading Animation

```css
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

.loading {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Fade In

```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.5s ease-out;
}
```

---

## ♿ Accessibility

### Minimum Requirements

- **Color Contrast:** WCAG AA compliant (4.5:1 for text)
- **Focus States:** Visible focus rings on all interactive elements
- **Alt Text:** All images must have descriptive alt text
- **ARIA Labels:** Use ARIA labels for icon-only buttons
- **Keyboard Navigation:** All features accessible via keyboard

### Focus Styles

```css
*:focus {
    outline: 2px solid #00d4ff;
    outline-offset: 2px;
}

button:focus,
a:focus {
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.3);
}
```

---

## 📝 Usage Examples

### Complete Card Example

```html
<div class="card">
    <div class="card-header">
        <i class="fas fa-antenna"></i>
        Half-Wave Dipole
    </div>
    <div class="card-body">
        <p>The most fundamental antenna design...</p>
        <div class="status-icons">
            <button class="status-icon completed">✅</button>
            <button class="status-icon bookmarked active">⭐</button>
        </div>
    </div>
</div>
```

### Complete Button Group

```html
<div class="button-group">
    <button class="btn-primary">Start Learning</button>
    <button class="btn-secondary">View Docs</button>
</div>
```

---

## 🎯 Design Principles

1. **Consistency** - Use established patterns throughout
2. **Hierarchy** - Clear visual hierarchy guides users
3. **Feedback** - Immediate visual feedback for interactions
4. **Simplicity** - Don't over-design; clarity over decoration
5. **Accessibility** - Everyone can use the platform
6. **Performance** - Optimize animations and images

---

## 📋 Maintenance

**Owner:** Claude Code  
**Update When:**
- Adding new components
- Changing existing styles
- Modifying color palette
- Adjusting responsive breakpoints

**Testing Required:**
- Visual review on multiple devices
- Accessibility audit
- Browser compatibility check
- Performance impact assessment

---

**Last Updated:** October 8, 2025 by Claude Code  
**Next Review:** Monthly or after major UI changes  
**Version:** 1.0