# Ergon — Math, Physics & Engineering

(Formerly "Praxis" — renamed because PRAXIS is an ETS trademark.)

A Progressive Web App that teaches math and physics from basic to graduate level — every topic explained in plain language and taught through worked examples and practice problems.

## Highlights

- **68 topics** — 35 math + 33 physics, organised basic → intermediate → advanced
- **272 worked examples** — step-by-step solutions, KaTeX-rendered
- **680 practice problems** — each with a "Show answer" toggle
- **Plain-language intros** on every topic answering *What is this and why does it exist?*, *Why does it matter?*, and *The big idea* — written assuming zero background
- **Offline-first PWA** — installable on phone/desktop, works without a network
- **Zero build step** — pure vanilla HTML/CSS/JS

## Coverage

### Mathematics

Arithmetic Foundations · Fractions & Percentages · Exponents & Roots · Ratios & Proportions · Linear Equations · Inequalities · Plane Geometry · Set Theory & Logic · Number Theory · Combinatorics · Systems of Equations · Quadratic Equations · Polynomials & Rational Functions · Functions & Graphs · Logarithms · Sequences & Series · Trigonometry · Probability · Statistics · Complex Numbers · Vector Algebra · Linear Algebra · Limits · Derivatives · Integrals · Multivariable Calculus · Vector Calculus · Ordinary Differential Equations · Partial Differential Equations · Real Analysis · Complex Analysis · Fourier Analysis · Abstract Algebra · Topology · Numerical Methods

### Physics

Units & Measurement · Kinematics · Vectors in Physics · Newton's Laws · Momentum & Impulse · Work, Energy & Power · Circular Motion & Gravitation · Simple Harmonic Motion · Rotational Motion · Fluids · Kinetic Theory of Gases · Thermodynamics · Waves & Sound · Geometric Optics · Wave Optics · Electrostatics · Electricity & Circuits · Magnetism & Induction · AC Circuits · Maxwell's Equations & EM Waves · Special Relativity · General Relativity · Lagrangian & Hamiltonian Mechanics · Statistical Mechanics · Quantum Mechanics: Foundations · QM: 1D Problems · Atomic Physics · Solid State Physics · Nuclear Physics · Particle Physics · Astrophysics & Cosmology · Plasma Physics · Fluid Dynamics

## Run locally

Web version (no build):

```bash
python3 -m http.server 8766 -d www
```

Native apps (Capacitor 8, `com.egtech.ergon`):

```bash
npm install
node test.mjs        # answer-checker self-test
npx cap sync         # copy www/ into ios/ and android/
```

Store texts, screenshots and the support site live in `store/`. Release steps: `~/.config/app-release/ergon/profile.md`.

## Project layout

```
www/               the app (index.html, app.js, styles.css, content *.js, vendor/katex)
www/answer-check.js  answer matching for practice problems (tested by test.mjs)
ios/, android/     Capacitor native shells
assets/            icon source (icon.svg) and generated icon/splash PNGs
store/             listing.md, screenshots.mjs, site/ (support + privacy pages)
```

## Extending

Add a new topic by appending to `CONTENT.math` or `CONTENT.physics` in `www/math.js` / `www/physics.js`. Add its plain-language intro to `INTROS` in `www/intros.js`.
