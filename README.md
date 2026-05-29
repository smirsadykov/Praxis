# Praxis — Math & Physics

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

No build, no install. Any static server works:

```bash
python3 -m http.server 8766
# then open http://localhost:8766
```

## Project layout

```
index.html         shell + KaTeX CDN + manifest hookup
styles.css         dark theme, responsive grid, card / task / intro styling
app.js             home/topic routing, intro rendering, show-answer toggle, SW registration
math.js            CONTENT.math — 35 topics × (4 examples + 10 tasks)
physics.js         CONTENT.physics — 33 topics × (4 examples + 10 tasks)
intros.js          INTROS — plain-language explanations per topic
manifest.json      PWA metadata
service-worker.js  cache-first offline support
icons/             icon-192.png, icon-512.png
```

## Extending

Add a new topic by appending to `CONTENT.math` or `CONTENT.physics` in `math.js` / `physics.js`. Add its plain-language intro to `INTROS` in `intros.js`. No other files need to change.
