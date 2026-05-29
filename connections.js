// Topic dependency graph + real-world hooks.
// prereq: topics you should know first.
// next: topics you can tackle after this one.
// realWorld: concrete place this concept appears in life.
window.CONNECTIONS = {

  // ===== MATH =====

  "arithmetic-foundations": {
    prereq: [],
    next: ["fractions-percentages", "exponents-roots", "linear-equations"],
    realWorld: "Money, time, recipes, sports scores — anywhere you combine numbers. Built into every calculator and spreadsheet on Earth."
  },
  "fractions-percentages": {
    prereq: ["arithmetic-foundations"],
    next: ["ratios-proportions", "linear-equations", "probability"],
    realWorld: "Sales tax, tips, discounts, loan interest, stock returns, recipe scaling, lab dilutions. If you can't do percentages, the world overcharges you."
  },
  "exponents-roots": {
    prereq: ["arithmetic-foundations"],
    next: ["logarithms", "polynomials-rational", "quadratic-equations"],
    realWorld: "Compound interest, population growth, computer memory (2^n bytes), earthquake intensity, the brightness of stars."
  },
  "ratios-proportions": {
    prereq: ["fractions-percentages"],
    next: ["linear-equations", "trigonometry"],
    realWorld: "Mixing paint, currency exchange, map scales, gear ratios, medicine dosing, mixing chemicals."
  },
  "linear-equations": {
    prereq: ["arithmetic-foundations"],
    next: ["inequalities", "systems-of-equations", "quadratic-equations", "coordinate-geometry"],
    realWorld: "Pricing, planning, budgeting, conversion between units. Most everyday math problems are linear equations in disguise."
  },
  "inequalities": {
    prereq: ["linear-equations"],
    next: ["optimization", "real-analysis"],
    realWorld: "Budget caps, speed limits, safety margins in engineering, medicine dose ranges, manufacturing tolerances."
  },
  "plane-geometry": {
    prereq: ["arithmetic-foundations"],
    next: ["solid-geometry", "trigonometry", "coordinate-geometry", "conic-sections"],
    realWorld: "Architecture, art, navigation, sports, screen design, packaging. Pythagoras alone underpins half of engineering."
  },
  "set-logic": {
    prereq: [],
    next: ["mathematical-logic", "number-theory", "combinatorics", "probability"],
    realWorld: "Programming, databases, search engines, AI. Every Google search is a set operation."
  },
  "number-theory": {
    prereq: ["arithmetic-foundations", "set-logic"],
    next: ["cryptography", "galois-theory", "abstract-algebra"],
    realWorld: "Online banking, secure messaging, cryptocurrencies. Every padlock in your browser is doing number theory."
  },
  "combinatorics": {
    prereq: ["arithmetic-foundations", "set-logic"],
    next: ["probability", "graph-theory", "recurrence-generating"],
    realWorld: "Lottery odds, password strength, scheduling, genetics, computer algorithms."
  },
  "systems-of-equations": {
    prereq: ["linear-equations"],
    next: ["linear-algebra", "optimization"],
    realWorld: "Circuit analysis, traffic-flow modeling, supply and demand, mixing problems, balancing chemical reactions."
  },
  "quadratic-equations": {
    prereq: ["linear-equations", "exponents-roots"],
    next: ["polynomials-rational", "conic-sections", "complex-numbers"],
    realWorld: "Projectile motion, parabolic dishes (satellite, telescope), profit maximization, structural engineering."
  },
  "polynomials-rational": {
    prereq: ["quadratic-equations"],
    next: ["functions-graphs", "complex-numbers", "limits"],
    realWorld: "Curve fitting in data analysis, Bezier curves in graphics, transfer functions in engineering, signal processing."
  },
  "functions-graphs": {
    prereq: ["linear-equations", "coordinate-geometry"],
    next: ["limits", "sequences-series", "logarithms", "trigonometry"],
    realWorld: "Every quantity that changes with another — velocity over time, temperature with altitude, profit at different prices."
  },
  "logarithms": {
    prereq: ["exponents-roots", "functions-graphs"],
    next: ["information-theory", "statistics"],
    realWorld: "Decibels, pH scale, Richter scale, star brightness, compound interest, complexity of algorithms."
  },
  "sequences-series": {
    prereq: ["functions-graphs"],
    next: ["limits", "recurrence-generating", "function-sequences"],
    realWorld: "Loan payments, savings growth, computer numerical approximations, Fourier series for sound and image."
  },
  "trigonometry": {
    prereq: ["plane-geometry", "ratios-proportions"],
    next: ["complex-numbers", "fourier-analysis", "waves"],
    realWorld: "GPS, surveying, signal processing, music, AC electricity, computer graphics. Sine waves are everywhere."
  },
  "probability": {
    prereq: ["fractions-percentages", "combinatorics"],
    next: ["statistics", "random-variables", "information-theory"],
    realWorld: "Insurance, weather forecasts, medical risk, gambling, investing, quality control, machine learning."
  },
  "statistics": {
    prereq: ["probability"],
    next: ["bayesian-statistics", "random-variables"],
    realWorld: "Medical trials, election polling, A/B testing for websites, sports analytics, business decisions."
  },
  "complex-numbers": {
    prereq: ["quadratic-equations", "trigonometry"],
    next: ["complex-analysis", "fourier-analysis", "qm-foundations"],
    realWorld: "AC circuits, signal processing, quantum mechanics, control systems, 2D rotations in graphics."
  },
  "vector-algebra": {
    prereq: ["coordinate-geometry"],
    next: ["linear-algebra", "vector-calculus", "vectors-physics"],
    realWorld: "Computer graphics, physics simulations, robotics, navigation, machine learning."
  },
  "linear-algebra": {
    prereq: ["systems-of-equations", "vector-algebra"],
    next: ["multivariable-calculus", "abstract-algebra", "qm-foundations", "lie-groups"],
    realWorld: "Machine learning, 3D graphics, Google PageRank, quantum mechanics, every modern data analysis pipeline."
  },
  "limits": {
    prereq: ["functions-graphs"],
    next: ["derivatives", "integrals", "real-analysis", "sequences-series"],
    realWorld: "Foundation of calculus. Every instantaneous rate (velocity, current) and every smooth quantity uses limits."
  },
  "derivatives": {
    prereq: ["limits"],
    next: ["integrals", "multivariable-calculus", "ode"],
    realWorld: "Velocity, acceleration, marginal cost, optimization in machine learning, every smooth physical change."
  },
  "integrals": {
    prereq: ["derivatives"],
    next: ["multivariable-calculus", "ode", "probability"],
    realWorld: "Area, volume, work done, total charge from current, probabilities from densities, every accumulation."
  },
  "multivariable-calculus": {
    prereq: ["derivatives", "integrals", "vector-algebra"],
    next: ["vector-calculus", "ode", "pde"],
    realWorld: "Heat flow, weather modeling, gravitational fields, machine learning gradients, economics in many dimensions."
  },
  "vector-calculus": {
    prereq: ["multivariable-calculus"],
    next: ["pde", "maxwell-em", "fluid-dynamics"],
    realWorld: "Electromagnetism (Maxwell's equations), fluid flow, weather, plasma physics, gravitational fields."
  },
  "ode": {
    prereq: ["derivatives", "integrals"],
    next: ["pde", "dynamical-systems", "shm"],
    realWorld: "Population dynamics, planetary orbits, circuits, chemical reactions, epidemics, oscillations."
  },
  "pde": {
    prereq: ["multivariable-calculus", "ode"],
    next: ["fourier-analysis", "maxwell-em", "qm-foundations"],
    realWorld: "Heat conduction, sound, electromagnetic waves, Schrödinger equation, options pricing in finance."
  },
  "real-analysis": {
    prereq: ["limits", "set-logic"],
    next: ["measure-theory", "functional-analysis", "complex-analysis"],
    realWorld: "Foundation of rigorous calculus. Used wherever convergence, continuity, or compactness matter rigorously."
  },
  "complex-analysis": {
    prereq: ["complex-numbers", "real-analysis"],
    next: ["fourier-analysis", "qft"],
    realWorld: "Fluid flow (potential theory), quantum field theory, signal processing, evaluating real integrals."
  },
  "fourier-analysis": {
    prereq: ["complex-numbers", "trigonometry", "sequences-series"],
    next: ["pde", "qm-foundations", "waves"],
    realWorld: "MP3, JPEG, noise cancellation, MRI, radar, sonar, every audio equalizer, signal processing everywhere."
  },
  "abstract-algebra": {
    prereq: ["linear-algebra", "set-logic"],
    next: ["galois-theory", "lie-groups", "algebraic-topology"],
    realWorld: "Cryptography, error-correcting codes, quantum mechanics (symmetry groups), chemistry, particle physics."
  },
  "topology": {
    prereq: ["set-logic", "real-analysis"],
    next: ["algebraic-topology", "differential-geometry", "riemannian-geometry"],
    realWorld: "Data analysis (topological data analysis), robotics (configuration spaces), topological phases of matter."
  },
  "numerical-methods": {
    prereq: ["derivatives", "integrals", "linear-algebra"],
    next: ["computational-physics"],
    realWorld: "Weather prediction, structural engineering, computer graphics, finance, ML training, every simulation."
  },
  "coordinate-geometry": {
    prereq: ["plane-geometry", "linear-equations"],
    next: ["conic-sections", "functions-graphs", "vector-algebra"],
    realWorld: "Maps, graphs on screen, GPS, computer graphics, robotics — anywhere you need coordinates."
  },
  "solid-geometry": {
    prereq: ["plane-geometry"],
    next: ["multivariable-calculus", "differential-geometry"],
    realWorld: "Packaging, containers, 3D printing, architecture, medicine dosing by body volume."
  },
  "conic-sections": {
    prereq: ["quadratic-equations", "coordinate-geometry"],
    next: ["central-force", "polynomials-rational"],
    realWorld: "Planetary orbits, satellite dishes, headlight reflectors, comet trajectories, shock waves."
  },
  "mathematical-logic": {
    prereq: ["set-logic"],
    next: ["computability", "abstract-algebra"],
    realWorld: "Computer science, formal verification of software, philosophy of math, theorem provers."
  },
  "graph-theory": {
    prereq: ["combinatorics"],
    next: ["computability"],
    realWorld: "Google PageRank, GPS routing, social networks, chip design, scheduling, epidemic modeling, neural networks."
  },
  "recurrence-generating": {
    prereq: ["sequences-series", "combinatorics"],
    next: [],
    realWorld: "Algorithm analysis, finance, biology population models, error-correcting codes."
  },
  "computability": {
    prereq: ["mathematical-logic", "graph-theory"],
    next: [],
    realWorld: "Foundation of computer science. Sets hard limits on what software can do. Drives complexity theory (P vs NP)."
  },
  "galois-theory": {
    prereq: ["abstract-algebra", "number-theory"],
    next: [],
    realWorld: "Cryptography, error-correcting codes, classical impossibility results (trisecting an angle, solving quintics)."
  },
  "lie-groups": {
    prereq: ["abstract-algebra", "linear-algebra"],
    next: ["differential-geometry", "particle-physics", "group-theory-physics"],
    realWorld: "Standard Model of particle physics, general relativity, robotics, quantum spin, every continuous symmetry."
  },
  "differential-geometry": {
    prereq: ["multivariable-calculus", "linear-algebra"],
    next: ["riemannian-geometry", "tensor-calculus", "general-relativity"],
    realWorld: "General relativity, computer graphics (smooth surfaces), robotics, modern data analysis (manifold learning)."
  },
  "tensor-calculus": {
    prereq: ["linear-algebra", "differential-geometry"],
    next: ["general-relativity", "continuum-elasticity"],
    realWorld: "General relativity, continuum mechanics (stress, strain), anisotropic materials, machine learning ('tensor' data)."
  },
  "algebraic-topology": {
    prereq: ["topology", "abstract-algebra"],
    next: ["riemannian-geometry"],
    realWorld: "Topological data analysis, robotics (configuration spaces), topological phases of matter, knot theory."
  },
  "riemannian-geometry": {
    prereq: ["differential-geometry", "tensor-calculus"],
    next: ["general-relativity"],
    realWorld: "General relativity (spacetime IS a Riemannian manifold), optimization on manifolds, statistical inference."
  },
  "measure-theory": {
    prereq: ["real-analysis"],
    next: ["functional-analysis", "stochastic-processes"],
    realWorld: "Foundation of modern probability and analysis. Underpins finance, statistics, quantum theory."
  },
  "functional-analysis": {
    prereq: ["real-analysis", "linear-algebra"],
    next: ["qm-foundations", "pde"],
    realWorld: "Quantum mechanics, signal processing, optimization in infinite dimensions, modern PDE theory."
  },
  "calculus-of-variations": {
    prereq: ["multivariable-calculus", "ode"],
    next: ["lagrangian-hamiltonian", "general-relativity"],
    realWorld: "Principle of least action (all of physics), optimal control, image processing, machine learning."
  },
  "function-sequences": {
    prereq: ["sequences-series", "real-analysis"],
    next: ["fourier-analysis", "functional-analysis"],
    realWorld: "Convergence of power series, Fourier series, Taylor expansions, every numerical approximation."
  },
  "random-variables": {
    prereq: ["probability", "integrals"],
    next: ["stochastic-processes", "bayesian-statistics", "statistical-mechanics"],
    realWorld: "Statistics, finance, insurance, ML, statistical mechanics, reliability engineering, medical risk."
  },
  "stochastic-processes": {
    prereq: ["random-variables", "measure-theory"],
    next: [],
    realWorld: "Finance (Black-Scholes), Brownian motion in physics, queueing theory, biological population dynamics."
  },
  "bayesian-statistics": {
    prereq: ["statistics", "random-variables"],
    next: [],
    realWorld: "Machine learning, medical diagnosis, forecasting, A/B testing, robotics (sensor fusion)."
  },
  "optimization": {
    prereq: ["multivariable-calculus", "linear-algebra"],
    next: ["computational-physics"],
    realWorld: "ML training, portfolio finance, logistics, engineering design — every algorithm that tunes parameters."
  },
  "information-theory": {
    prereq: ["probability", "logarithms"],
    next: [],
    realWorld: "Data compression (ZIP, MP3, JPEG), error-correcting codes, cryptography, machine learning (cross-entropy)."
  },
  "game-theory": {
    prereq: ["probability"],
    next: [],
    realWorld: "Economics, auction design (Google ads), evolutionary biology, multi-agent AI, military strategy."
  },
  "dynamical-systems": {
    prereq: ["ode"],
    next: ["nonlinear-chaos-physics"],
    realWorld: "Weather/climate, ecology, neuroscience, economics, control theory — any system evolving in time."
  },
  "cryptography": {
    prereq: ["number-theory"],
    next: [],
    realWorld: "Online banking, secure messaging, HTTPS, cryptocurrency, two-factor auth, military communications."
  },

  // ===== PHYSICS =====

  "units-measurement": {
    prereq: ["arithmetic-foundations"],
    next: ["kinematics"],
    realWorld: "Engineering, medicine dosing, cooking conversions. NASA lost a Mars orbiter because two teams used different units."
  },
  "kinematics": {
    prereq: ["units-measurement", "functions-graphs"],
    next: ["vectors-physics", "newtons-laws"],
    realWorld: "Driving, sports (projectile motion), animation, traffic engineering, video games, ballistics."
  },
  "vectors-physics": {
    prereq: ["kinematics", "vector-algebra"],
    next: ["newtons-laws", "circular-gravitation"],
    realWorld: "Navigation, sailing, flying, force analysis in engineering, computer graphics, robotics."
  },
  "newtons-laws": {
    prereq: ["kinematics", "vectors-physics"],
    next: ["momentum-impulse", "energy-work", "circular-gravitation", "shm", "rotational"],
    realWorld: "Every machine, vehicle, building, sport. Foundation for all classical mechanics — the way we built the modern world."
  },
  "momentum-impulse": {
    prereq: ["newtons-laws"],
    next: ["energy-work", "rotational"],
    realWorld: "Car crashes, rocket propulsion, billiards, jet engines, particle physics collisions, recoil."
  },
  "energy-work": {
    prereq: ["newtons-laws", "integrals"],
    next: ["thermodynamics", "shm", "circular-gravitation"],
    realWorld: "Energy bills, food calories, batteries, engines, power plants, climate change, biology."
  },
  "circular-gravitation": {
    prereq: ["newtons-laws", "energy-work"],
    next: ["shm", "central-force", "general-relativity"],
    realWorld: "Satellites, GPS, planetary motion, centrifuges, banked roads, roller coasters, galaxy structure."
  },
  "shm": {
    prereq: ["newtons-laws", "ode"],
    next: ["waves", "qm-1d", "rotational"],
    realWorld: "Clocks, musical instruments, atomic vibrations, building earthquake response, AC current."
  },
  "rotational": {
    prereq: ["newtons-laws", "momentum-impulse"],
    next: ["angular-momentum-spin", "central-force"],
    realWorld: "Engines, wheels, gyroscopes, hard drives, satellites, figure skating, conservation of angular momentum."
  },
  "fluids": {
    prereq: ["newtons-laws", "energy-work"],
    next: ["fluid-dynamics", "soft-matter-biophysics"],
    realWorld: "Plumbing, hydraulics, ships, blood circulation, weather, oceans, dams, airplanes, syringes."
  },
  "kinetic-theory": {
    prereq: ["newtons-laws", "energy-work"],
    next: ["thermodynamics", "statistical-mechanics"],
    realWorld: "Bridges classical mechanics to thermodynamics. The reason temperature and pressure 'mean' something."
  },
  "thermodynamics": {
    prereq: ["energy-work", "kinetic-theory"],
    next: ["statistical-mechanics", "phase-transitions"],
    realWorld: "Engines, refrigerators, power plants, atmosphere, ocean dynamics, stars, every living cell."
  },
  "waves": {
    prereq: ["shm", "trigonometry"],
    next: ["optics-geometric", "optics-wave", "maxwell-em"],
    realWorld: "Sound, light, radio, music, earthquakes, ocean waves, sonar, ultrasound, every signal in nature."
  },
  "optics-geometric": {
    prereq: ["waves"],
    next: ["optics-wave"],
    realWorld: "Eyeglasses, microscopes, telescopes, cameras, the human eye, fiber optics, projectors."
  },
  "optics-wave": {
    prereq: ["optics-geometric", "waves"],
    next: ["quantum-optics"],
    realWorld: "CDs/DVDs, oil-film colors, X-ray crystallography (how DNA structure was found), holograms, polarized sunglasses."
  },
  "electrostatics": {
    prereq: ["newtons-laws", "vector-calculus"],
    next: ["electric-circuits", "magnetism-induction"],
    realWorld: "Electronics, capacitors, lightning, ink-jet printers, photocopiers, the structure of atoms, biology (membranes)."
  },
  "electric-circuits": {
    prereq: ["electrostatics"],
    next: ["ac-circuits", "magnetism-induction"],
    realWorld: "Every electronic device, every appliance, every wire in your house and car."
  },
  "magnetism-induction": {
    prereq: ["electric-circuits", "electrostatics"],
    next: ["ac-circuits", "maxwell-em"],
    realWorld: "Every electric motor, generator, transformer, MRI scanner, hard drive, induction stove, contactless charger, maglev train."
  },
  "ac-circuits": {
    prereq: ["electric-circuits", "magnetism-induction", "complex-numbers"],
    next: ["maxwell-em"],
    realWorld: "Power grids, radio tuning, audio equipment, oscillators, filters, wireless communications. Why your outlet is 50/60 Hz."
  },
  "maxwell-em": {
    prereq: ["magnetism-induction", "vector-calculus", "waves"],
    next: ["special-relativity", "em-waves-matter", "radiation-theory"],
    realWorld: "Radio, TV, Wi-Fi, cell phones, microwaves, X-rays, lasers, every electromagnetic technology."
  },
  "special-relativity": {
    prereq: ["maxwell-em", "kinematics"],
    next: ["general-relativity", "qft", "particle-physics"],
    realWorld: "GPS satellites (which must correct for time dilation), particle accelerators, nuclear energy ($E = mc^2$)."
  },
  "general-relativity": {
    prereq: ["special-relativity", "riemannian-geometry", "tensor-calculus"],
    next: ["astrophysics-cosmology", "compact-objects", "gravitational-waves"],
    realWorld: "GPS, black holes, gravitational waves (LIGO), the structure of the universe, cosmology."
  },
  "lagrangian-hamiltonian": {
    prereq: ["newtons-laws", "calculus-of-variations"],
    next: ["classical-field-theory", "qft", "symmetries-noether"],
    realWorld: "Foundation of modern physics. QM, QFT, GR, string theory all use this formalism."
  },
  "statistical-mechanics": {
    prereq: ["thermodynamics", "probability", "kinetic-theory"],
    next: ["phase-transitions", "nonequilibrium-statmech"],
    realWorld: "Materials science, condensed matter, finance, machine learning, biology (protein folding)."
  },
  "qm-foundations": {
    prereq: ["complex-numbers", "linear-algebra", "pde"],
    next: ["qm-1d", "angular-momentum-spin", "perturbation-theory"],
    realWorld: "Every electronic device, laser, MRI, GPS atomic clock. The universe is quantum at small scales."
  },
  "qm-1d": {
    prereq: ["qm-foundations"],
    next: ["qm-3d-hydrogen", "perturbation-theory"],
    realWorld: "Nuclear decay, scanning tunneling microscopes, flash memory, semiconductor physics, quantum dots."
  },
  "atomic-physics": {
    prereq: ["qm-3d-hydrogen", "angular-momentum-spin"],
    next: ["solid-state", "amo", "lasers"],
    realWorld: "Lasers, atomic clocks (GPS), all of chemistry, spectroscopy, quantum computing using atoms, MRI."
  },
  "solid-state": {
    prereq: ["qm-foundations", "atomic-physics", "statistical-mechanics"],
    next: ["semiconductors", "phonons", "superconductivity", "quantum-hall-topological"],
    realWorld: "Silicon revolution. Every chip, LED, solar panel, magnetic storage device, semiconductor laser."
  },
  "nuclear": {
    prereq: ["qm-foundations", "energy-work"],
    next: ["particle-physics", "stellar-nucleosynthesis"],
    realWorld: "Nuclear power, weapons, medical imaging (PET), cancer therapy, carbon dating, fusion energy, energy of stars."
  },
  "particle-physics": {
    prereq: ["special-relativity", "qm-foundations", "lie-groups"],
    next: ["qft", "renormalization"],
    realWorld: "Reveals the deepest known laws of nature. Spawned the World Wide Web. Drives accelerator and detector technology."
  },
  "astrophysics-cosmology": {
    prereq: ["general-relativity", "thermodynamics"],
    next: ["stellar-evolution", "compact-objects", "bbn-cmb-inflation"],
    realWorld: "Tells us our origin and fate. Stars made the atoms in your body. The Big Bang and dark energy."
  },
  "plasma-physics": {
    prereq: ["electrostatics", "fluids", "statistical-mechanics"],
    next: [],
    realWorld: "99% of visible universe is plasma. Fusion energy, plasma TVs, neon signs, lightning, aurora."
  },
  "fluid-dynamics": {
    prereq: ["fluids", "vector-calculus", "ode"],
    next: ["plasma-physics", "soft-matter-biophysics"],
    realWorld: "Weather, climate, blood flow, airplanes, rockets, ships, wind turbines. Turbulence is unsolved."
  },
  "continuum-elasticity": {
    prereq: ["newtons-laws", "tensor-calculus"],
    next: ["fluid-dynamics"],
    realWorld: "Civil engineering, buildings, bridges, vehicles, prosthetics, material science, earthquake engineering."
  },
  "central-force": {
    prereq: ["circular-gravitation", "ode"],
    next: [],
    realWorld: "Planetary orbits, Rutherford scattering, atomic structure (Coulomb), satellite design, comet trajectories."
  },
  "nonlinear-chaos-physics": {
    prereq: ["dynamical-systems", "ode"],
    next: [],
    realWorld: "Weather prediction limits, cardiac arrhythmias, population dynamics, lasers, fluid turbulence, solar system stability."
  },
  "angular-momentum-spin": {
    prereq: ["qm-foundations", "rotational"],
    next: ["qm-3d-hydrogen", "atomic-physics", "particle-physics"],
    realWorld: "MRI (nuclear spin), atomic structure, magnetism, quantum computing (qubits are spins)."
  },
  "qm-3d-hydrogen": {
    prereq: ["qm-1d", "angular-momentum-spin"],
    next: ["atomic-physics"],
    realWorld: "Foundation of chemistry, atomic spectra, lasers, semiconductors. The orbital shapes from chemistry."
  },
  "perturbation-theory": {
    prereq: ["qm-foundations"],
    next: ["scattering-theory", "qft"],
    realWorld: "Atomic spectra (fine structure), Stark/Zeeman effects, QED accuracy, almost every realistic QM calculation."
  },
  "identical-particles": {
    prereq: ["qm-foundations"],
    next: ["atomic-physics", "solid-state", "statistical-mechanics"],
    realWorld: "Pauli exclusion gives the periodic table. White dwarf and neutron star stability. Lasers, BEC, superconductors."
  },
  "scattering-theory": {
    prereq: ["qm-foundations", "perturbation-theory"],
    next: ["particle-physics", "nuclear"],
    realWorld: "Particle accelerator experiments, X-ray crystallography (how DNA was solved), nuclear physics."
  },
  "density-matrices": {
    prereq: ["qm-foundations", "linear-algebra"],
    next: ["quantum-information"],
    realWorld: "Quantum error correction, decoherence in quantum computers, open quantum systems, atomic clocks."
  },
  "path-integrals": {
    prereq: ["qm-foundations", "calculus-of-variations"],
    next: ["qft", "renormalization"],
    realWorld: "Standard formulation of QFT, lattice QCD, quantum gravity research, finance (path-integral options pricing)."
  },
  "quantum-information": {
    prereq: ["qm-foundations", "density-matrices"],
    next: [],
    realWorld: "Quantum computers, quantum cryptography (provably secure), quantum sensing (precision metrology)."
  },
  "symmetries-noether": {
    prereq: ["lagrangian-hamiltonian"],
    next: ["classical-field-theory", "qft", "group-theory-physics"],
    realWorld: "Standard Model construction, every conservation law in physics, modern theoretical physics framework."
  },
  "classical-field-theory": {
    prereq: ["lagrangian-hamiltonian", "vector-calculus", "special-relativity"],
    next: ["qft"],
    realWorld: "EM, fluid dynamics, elasticity, GR — all field theories. Bridge to QFT and modern theoretical physics."
  },
  "qft": {
    prereq: ["qm-foundations", "special-relativity", "classical-field-theory"],
    next: ["renormalization", "particle-physics"],
    realWorld: "Standard Model, high-energy collider physics, condensed matter quasiparticles, early universe."
  },
  "renormalization": {
    prereq: ["qft"],
    next: ["phase-transitions"],
    realWorld: "Every realistic QFT calculation. Phase transitions in condensed matter use the same machinery."
  },
  "radiation-theory": {
    prereq: ["maxwell-em"],
    next: ["em-waves-matter", "high-energy-astrophysics"],
    realWorld: "Every wireless device, radar, astronomy, lighting, photonic devices, climate."
  },
  "em-waves-matter": {
    prereq: ["maxwell-em", "waves"],
    next: ["lasers", "optics-wave"],
    realWorld: "Lenses, prisms, fiber optics, antireflective coatings, metamaterials, photonic crystals."
  },
  "lasers": {
    prereq: ["em-waves-matter", "qm-foundations", "atomic-physics"],
    next: ["quantum-optics", "amo"],
    realWorld: "Fiber optic communications, surgery, manufacturing, CD/DVD, barcode scanners, laser cooling, LIGO."
  },
  "quantum-optics": {
    prereq: ["lasers", "qm-foundations"],
    next: [],
    realWorld: "Quantum cryptography, quantum computing with photons, LIGO sensitivity, atomic clocks, precision spectroscopy."
  },
  "amo": {
    prereq: ["atomic-physics", "lasers"],
    next: [],
    realWorld: "Atomic clocks (the SI second), GPS, Bose-Einstein condensates, quantum simulation, precision tests of physics."
  },
  "phase-transitions": {
    prereq: ["statistical-mechanics", "thermodynamics"],
    next: [],
    realWorld: "Materials, magnetism, superconductors, water boiling, ferromagnetism, cosmological transitions in the early universe."
  },
  "nonequilibrium-statmech": {
    prereq: ["statistical-mechanics"],
    next: [],
    realWorld: "Heat transfer, electrical conductivity, transport in semiconductors, climate, biological systems."
  },
  "superconductivity": {
    prereq: ["solid-state", "qm-foundations"],
    next: [],
    realWorld: "MRI magnets, LHC, maglev trains, transmon qubits, SQUID magnetometers, fusion-reactor magnets."
  },
  "quantum-hall-topological": {
    prereq: ["solid-state", "qm-foundations"],
    next: [],
    realWorld: "Resistance standard (defines the ohm), topological insulators, candidates for topological quantum computing."
  },
  "phonons": {
    prereq: ["solid-state", "qm-foundations"],
    next: [],
    realWorld: "Heat capacity of solids, thermal conductivity, electron-phonon scattering, BCS superconductivity."
  },
  "stellar-evolution": {
    prereq: ["thermodynamics", "nuclear"],
    next: ["stellar-nucleosynthesis", "compact-objects"],
    realWorld: "Where stars come from and go. Tells the origin and fate of our Sun. Origin of the chemical elements."
  },
  "stellar-nucleosynthesis": {
    prereq: ["stellar-evolution", "nuclear"],
    next: ["compact-objects", "bbn-cmb-inflation"],
    realWorld: "Origin of all elements heavier than hydrogen. The atoms in your body were forged in dying stars."
  },
  "compact-objects": {
    prereq: ["general-relativity", "stellar-evolution"],
    next: ["gravitational-waves", "high-energy-astrophysics"],
    realWorld: "Black holes, neutron stars. LIGO detections, the Event Horizon Telescope image, pulsar timing."
  },
  "galactic-dynamics": {
    prereq: ["circular-gravitation", "astrophysics-cosmology"],
    next: ["bbn-cmb-inflation"],
    realWorld: "Dark matter inference, galaxy formation, Milky Way structure, AGN, large-scale cosmic structure."
  },
  "bbn-cmb-inflation": {
    prereq: ["astrophysics-cosmology", "thermodynamics"],
    next: ["gravitational-waves"],
    realWorld: "Big Bang theory, Planck/WMAP CMB experiments, cosmological parameters, origin of structure in universe."
  },
  "gravitational-waves": {
    prereq: ["general-relativity"],
    next: [],
    realWorld: "LIGO, Virgo, LISA. New astronomy: black hole binaries, neutron star mergers, possibly inflation."
  },
  "high-energy-astrophysics": {
    prereq: ["compact-objects", "particle-physics"],
    next: [],
    realWorld: "AGN, gamma-ray bursts, cosmic rays, neutrino astronomy (IceCube), most extreme physics regimes."
  },
  "math-methods-physics": {
    prereq: ["multivariable-calculus", "complex-analysis", "fourier-analysis"],
    next: [],
    realWorld: "Universal toolkit for theoretical physics. Used everywhere from EM to QM to GR."
  },
  "group-theory-physics": {
    prereq: ["abstract-algebra", "lie-groups"],
    next: ["particle-physics", "qft"],
    realWorld: "Standard Model gauge groups, crystal symmetries, atomic and molecular spectroscopy, condensed matter."
  },
  "computational-physics": {
    prereq: ["numerical-methods", "ode", "statistical-mechanics"],
    next: [],
    realWorld: "Climate models, drug design, materials discovery, lattice QCD, plasma simulation, astrophysics."
  },
  "soft-matter-biophysics": {
    prereq: ["statistical-mechanics", "fluid-dynamics"],
    next: [],
    realWorld: "Drug delivery, plastics, food science, biology (proteins, membranes, motors), active matter, biophysics."
  }
};
