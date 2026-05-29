// External images from Wikimedia Commons.
// Each entry: { file, caption, credit, license }
//   - file: canonical filename on Commons (URL-encoded for special chars)
//   - caption: pedagogical caption shown below the image
//   - credit: author / source line for attribution
//   - license: CC-BY-SA, CC-BY, CC0, or PD ("Public Domain")
//
// URL pattern used: https://commons.wikimedia.org/wiki/Special:FilePath/{file}?width=720
// Special:FilePath always redirects to the current canonical file URL —
// stable across renames. Wikimedia hotlinking is permitted with proper
// attribution per the file's license.

(function () {
  window.COMMONS_IMAGES = window.COMMONS_IMAGES || {};

  Object.assign(window.COMMONS_IMAGES, {

    // ===== MATH =====
    "trigonometry": [{
      file: "Unit_circle.svg",
      caption: "The unit circle. A point at angle θ has coordinates $(\\cos\\theta, \\sin\\theta)$. Reading angles in radians counter-clockwise from the positive x-axis is the standard convention.",
      credit: "Wikimedia Commons",
      license: "Public Domain"
    }],

    "complex-numbers": [{
      file: "Complex_conjugate_picture.svg",
      caption: "A complex number $z = a + bi$ as a point in the plane. The conjugate $\\bar z = a - bi$ is its reflection across the real axis.",
      credit: "Wikimedia Commons",
      license: "Public Domain"
    }],

    "graph-theory": [{
      file: "Complete_graph_K5.svg",
      caption: "The complete graph $K_5$ on five vertices. Every pair of vertices is connected — 10 edges total. $K_5$ is famously the smallest non-planar complete graph (Kuratowski).",
      credit: "Wikimedia Commons / David Benbennick",
      license: "CC BY-SA 3.0"
    }],

    "topology": [{
      file: "M%C3%B6bius_strip.jpg",
      caption: "A Möbius strip — a surface with only one side and one edge. Obtained from a rectangle by gluing two opposite edges with a half-twist.",
      credit: "Wikimedia Commons / David Benbennick",
      license: "CC BY-SA 3.0"
    }],

    "probability": [{
      file: "Normal_Distribution_PDF.svg",
      caption: "The normal distribution. About 68% of the probability lies within one standard deviation of the mean; 95% within two.",
      credit: "Wikimedia Commons / Inductiveload",
      license: "Public Domain"
    }],

    "statistics": [{
      file: "Standard_deviation_diagram.svg",
      caption: "Standard deviation σ and the bell curve. The bands at 1σ, 2σ, 3σ contain ≈68%, 95%, 99.7% of the data — the famous '68-95-99.7' rule.",
      credit: "Wikimedia Commons / Mwtoews",
      license: "CC BY 2.5"
    }],

    "linear-algebra": [{
      file: "Matrix_transformation.png",
      caption: "A linear transformation reshapes the unit square into a parallelogram. The determinant of the matrix equals the signed area of the new parallelogram — negative if orientation flips.",
      credit: "Wikimedia Commons",
      license: "CC BY-SA 3.0"
    }],

    "derivatives": [{
      file: "Derivative_GIF.gif",
      caption: "The derivative as the limit of secant slopes. As the second point slides toward the first, the secant becomes the tangent.",
      credit: "Wikimedia Commons / Maschen",
      license: "CC BY-SA 3.0"
    }],

    "integrals": [{
      file: "Riemann_sum_convergence.png",
      caption: "Riemann sum approximating an integral. As the partition becomes finer, the staircase of rectangles converges to the exact area under the curve.",
      credit: "Wikimedia Commons / Kieff",
      license: "Public Domain"
    }],

    "multivariable-calculus": [{
      file: "3D_function_x_squared_minus_y_squared.svg",
      caption: "A saddle surface $z = x^2 - y^2$. The origin is a critical point but neither a max nor min — it's a saddle point.",
      credit: "Wikimedia Commons",
      license: "CC BY-SA 3.0"
    }],

    "vector-calculus": [{
      file: "Vector_field_E.svg",
      caption: "A vector field assigns an arrow to each point in space. Divergence measures the local 'spreading'; curl measures the local rotation.",
      credit: "Wikimedia Commons",
      license: "CC BY-SA 3.0"
    }],

    "fourier-analysis": [{
      file: "Fourier_series_square_wave_circles_animation.gif",
      caption: "Fourier series synthesizing a square wave from sinusoidal harmonics. Each spinning circle adds one more odd-harmonic term; the sum converges to the discontinuous square.",
      credit: "Wikimedia Commons / Lucas Vieira",
      license: "Public Domain"
    }],

    "differential-geometry": [{
      file: "Osculating_circle.svg",
      caption: "The osculating circle: the unique circle that best matches a curve at a given point. Its radius is $1/\\kappa$ where $\\kappa$ is the curvature.",
      credit: "Wikimedia Commons",
      license: "CC BY-SA 3.0"
    }],

    "dynamical-systems": [{
      file: "Logistic_Bifurcation_map_High_Resolution.png",
      caption: "The bifurcation diagram of the logistic map. As $r$ increases, the stable orbit period-doubles repeatedly until chaos sets in near $r ≈ 3.57$.",
      credit: "Wikimedia Commons / PAR",
      license: "Public Domain"
    }],

    "cryptography": [{
      file: "Public_key_encryption.svg",
      caption: "Public-key cryptography. The sender encrypts with a public key; only the recipient's private key can decrypt. The security rests on hard mathematical problems (factoring, discrete log).",
      credit: "Wikimedia Commons",
      license: "CC BY-SA 3.0"
    }],

    // ===== PHYSICS =====
    "newtons-laws": [{
      file: "NewtonsPrincipia.jpg",
      caption: "The opening pages of Newton's <em>Principia Mathematica</em> (1687), where the three laws of motion were first published. The Latin text became the foundation of classical mechanics for the next two centuries.",
      credit: "Wikimedia Commons",
      license: "Public Domain"
    }],

    "kinematics": [{
      file: "Ferde_hajitas.svg",
      caption: "Projectile trajectories. With air resistance neglected, the path is a parabola; horizontal range is maximized at 45°. Pairs of complementary angles (e.g. 30° and 60°) yield the same range.",
      credit: "Wikimedia Commons",
      license: "CC BY-SA 3.0"
    }],

    "shm": [{
      file: "Simple_Harmonic_Motion_Orbit.gif",
      caption: "Simple harmonic motion as the projection of uniform circular motion. Position, velocity, and acceleration are all sinusoids 90° apart.",
      credit: "Wikimedia Commons / Mazemaster",
      license: "Public Domain"
    }],

    "waves": [{
      file: "Simple_harmonic_motion_animation.gif",
      caption: "A propagating sinusoidal wave. Each particle oscillates in place; the wave pattern travels at speed $v = f\\lambda$.",
      credit: "Wikimedia Commons",
      license: "Public Domain"
    }],

    "optics-geometric": [{
      file: "Light_dispersion_conceptual_waves.gif",
      caption: "A prism disperses white light. Different wavelengths refract by different amounts because the index of refraction depends weakly on color — the basis of spectroscopy.",
      credit: "Wikimedia Commons / Lucas Vieira",
      license: "Public Domain"
    }],

    "optics-wave": [{
      file: "Two-Slit_Experiment_Light.svg",
      caption: "Young's two-slit experiment. Coherent light through two narrow slits creates an interference pattern of bright and dark fringes on the screen.",
      credit: "Wikimedia Commons",
      license: "CC BY-SA 3.0"
    }],

    "electrostatics": [{
      file: "VFPt_dipole_electric.svg",
      caption: "Electric field of a dipole. Field lines run from positive to negative charge. Far from the dipole the field falls off as $1/r^3$ — faster than a single charge's $1/r^2$.",
      credit: "Wikimedia Commons / Geek3",
      license: "CC BY-SA 3.0"
    }],

    "magnetism-induction": [{
      file: "VFPt_dipole_magnetic.svg",
      caption: "Magnetic field of a dipole — formally identical to the electric dipole's field, but with no real magnetic monopoles at the ends. Bar magnets and current loops both look like this far away.",
      credit: "Wikimedia Commons / Geek3",
      license: "CC BY-SA 3.0"
    }],

    "maxwell-em": [{
      file: "EM_Spectrum_Properties_edit.svg",
      caption: "The electromagnetic spectrum. All EM waves travel at $c$ in vacuum; they differ only in wavelength and frequency. Visible light occupies a tiny slice between infrared and ultraviolet.",
      credit: "Wikimedia Commons / Inductiveload, NASA",
      license: "CC BY-SA 3.0"
    }],

    "special-relativity": [{
      file: "World_line.svg",
      caption: "Spacetime diagram with light cone. Past and future are the regions a particle could have come from / could reach. The 'elsewhere' region is causally disconnected from the origin event.",
      credit: "Wikimedia Commons / Stib",
      license: "CC BY-SA 3.0"
    }],

    "general-relativity": [{
      file: "Spacetime_curvature.png",
      caption: "Mass curves spacetime; the curvature determines how other objects move. Einstein's field equations relate curvature ($G_{\\mu\\nu}$) to matter-energy ($T_{\\mu\\nu}$).",
      credit: "Wikimedia Commons / Johnstone",
      license: "CC BY-SA 3.0"
    }],

    "atomic-physics": [{
      file: "Hydrogen_Density_Plots.png",
      caption: "Probability densities of hydrogen orbitals for various $(n, \\ell, m)$. The 1s state is spherical; higher orbitals develop nodes and angular structure — exactly as the Schrödinger equation predicts.",
      credit: "Wikimedia Commons / PoorLeno",
      license: "Public Domain"
    }],

    "qm-3d-hydrogen": [{
      file: "Hydrogen_eigenstate_n5_l2_m1.png",
      caption: "A hydrogen $n=5$, $\\ell=2$, $m=1$ orbital. Nodes (zero-probability surfaces) increase with quantum numbers; the angular pattern reflects spherical harmonic structure.",
      credit: "Wikimedia Commons / PoorLeno",
      license: "Public Domain"
    }],

    "solid-state": [{
      file: "Sodium-chloride-3D-ionic.png",
      caption: "The rock-salt (NaCl) crystal structure: a face-centered cubic lattice of Na⁺ and Cl⁻ ions. The periodic arrangement is what makes ordinary salt a crystal rather than a glass.",
      credit: "Wikimedia Commons / Benjah-bmm27",
      license: "Public Domain"
    }],

    "particle-physics": [{
      file: "Standard_Model_of_Elementary_Particles.svg",
      caption: "The Standard Model of particle physics. Three generations of quarks and leptons, four gauge bosons (γ, W, Z, gluon), plus the Higgs. Discovered piece by piece between 1897 (electron) and 2012 (Higgs).",
      credit: "Wikimedia Commons / Cush",
      license: "Public Domain"
    }],

    "nuclear": [{
      file: "Binding_energy_curve_-_common_isotopes.svg",
      caption: "Nuclear binding energy per nucleon vs mass number. Peak around iron-56 means fusion releases energy below the peak (powering stars) and fission releases energy above it (powering reactors).",
      credit: "Wikimedia Commons / Fastfission",
      license: "Public Domain"
    }],

    "stellar-evolution": [{
      file: "HRDiagram.png",
      caption: "Hertzsprung-Russell diagram: stellar luminosity vs surface temperature. Most stars lie on the diagonal main sequence; evolution moves them off toward giants and ultimately remnants.",
      credit: "Wikimedia Commons",
      license: "Public Domain"
    }],

    "astrophysics-cosmology": [{
      file: "CMB_Timeline300_no_WMAP.jpg",
      caption: "Cosmic timeline from the Big Bang to today. Inflation, recombination (CMB release at ~380,000 years), structure formation, and accelerating expansion.",
      credit: "NASA / WMAP Science Team",
      license: "Public Domain"
    }],

    "bbn-cmb-inflation": [{
      file: "PIA16874_Planck_CMB.jpg",
      caption: "The cosmic microwave background as mapped by ESA's Planck satellite. Tiny temperature variations (~1 part in 10⁵) encode the seeds of all later cosmic structure.",
      credit: "ESA / Planck Collaboration",
      license: "Public Domain"
    }],

    "compact-objects": [{
      file: "BH_LMC.png",
      caption: "Simulated view of a black hole in front of the Large Magellanic Cloud. Strong gravitational lensing distorts light passing near the event horizon into characteristic rings.",
      credit: "Wikimedia Commons / Alain r",
      license: "CC BY-SA 2.5"
    }],

    "galactic-dynamics": [{
      file: "Galaxy_rotation_under_the_influence_of_dark_matter.jpg",
      caption: "Galactic rotation curves stay flat at large radii — direct evidence that galaxies are embedded in massive dark-matter halos far larger than their visible disks.",
      credit: "Wikimedia Commons",
      license: "CC BY-SA 3.0"
    }],

    "gravitational-waves": [{
      file: "Detection_of_gravitational_waves.gif",
      caption: "Binary black hole inspiral as detected by LIGO (2015). Frequency and amplitude both rise toward merger — the characteristic 'chirp' signal.",
      credit: "LIGO Collaboration / NASA",
      license: "Public Domain"
    }],

    "high-energy-astrophysics": [{
      file: "Black_hole_-_Messier_87_crop_max_res.jpg",
      caption: "First direct image of a black hole's shadow: M87* by the Event Horizon Telescope (2019). The bright ring is hot plasma orbiting near the event horizon.",
      credit: "Event Horizon Telescope Collaboration",
      license: "CC BY 4.0"
    }],

    "kinetic-theory": [{
      file: "Translational_motion.gif",
      caption: "Gas molecules in random thermal motion. Collisions transfer energy and momentum; macroscopic temperature and pressure emerge from the statistics of countless collisions.",
      credit: "Wikimedia Commons / Greg L",
      license: "CC BY-SA 3.0"
    }],

    "thermodynamics": [{
      file: "Carnot_cycle_p-V_diagram.svg",
      caption: "Carnot cycle on a $P$-$V$ diagram. Two isotherms plus two adiabats form a closed loop; the enclosed area equals the net work per cycle.",
      credit: "Wikimedia Commons / Keta",
      license: "CC BY-SA 3.0"
    }],

    "phase-transitions": [{
      file: "Phase-diag2.svg",
      caption: "Pressure-temperature phase diagram. Lines mark coexistence (solid-liquid, liquid-gas, solid-gas); the triple point is where all three meet; the critical point ends the liquid-gas line.",
      credit: "Wikimedia Commons / Matthieumarechal",
      license: "CC BY-SA 3.0"
    }],

    "phonons": [{
      file: "Diatomic_phonons.png",
      caption: "Phonon dispersion in a diatomic chain. Two branches: acoustic (linear near $k=0$, vanishing frequency) and optical (gap at $k=0$, characteristic of two-atom basis).",
      credit: "Wikimedia Commons",
      license: "CC BY-SA 3.0"
    }],

    "superconductivity": [{
      file: "Meissner_effect_p1390048.jpg",
      caption: "The Meissner effect: a magnet levitates above a superconductor. Below $T_c$ the superconductor expels magnetic flux, creating an image current that repels the magnet.",
      credit: "Wikimedia Commons / Mai-Linh Doan",
      license: "CC BY-SA 3.0"
    }],

    "fluid-dynamics": [{
      file: "Turbulent_jet_flow_visualization.png",
      caption: "Turbulent fluid flow visualized. At high Reynolds number, viscosity loses to inertia; cascading vortices on every scale produce the familiar chaotic mixing.",
      credit: "Wikimedia Commons",
      license: "CC BY-SA 3.0"
    }],

    "central-force": [{
      file: "Kepler_laws_diagram.svg",
      caption: "Kepler's three laws of planetary motion. Orbits are ellipses with the Sun at one focus; equal areas are swept in equal times; period squared $\\propto$ semi-major axis cubed.",
      credit: "Wikimedia Commons",
      license: "CC BY-SA 3.0"
    }],

    "ac-circuits": [{
      file: "Phasor_diagram_for_RLC_series_circuit.svg",
      caption: "Phasor diagram for a series RLC circuit. Voltage across L leads current by 90°; across C lags by 90°. Resonance: $X_L = X_C$, voltage and current in phase.",
      credit: "Wikimedia Commons",
      license: "CC BY-SA 3.0"
    }],

    "lasers": [{
      file: "Stimulated_Emission.svg",
      caption: "Stimulated emission: an incoming photon triggers an excited atom to emit a second photon identical in phase, direction, and energy. This coherent amplification is the basis of lasers.",
      credit: "Wikimedia Commons / V1adis1av",
      license: "CC BY-SA 3.0"
    }],

    // ===== CONTROL =====
    "intro-control": [{
      file: "Feedback_loop_with_descriptions.svg",
      caption: "A canonical closed-loop control system. Reference, error, controller, plant, sensor — the same five blocks recur in every feedback system from thermostats to autopilots.",
      credit: "Wikimedia Commons",
      license: "CC BY-SA 3.0"
    }],

    "bode-plots": [{
      file: "Bode_plot_template.svg",
      caption: "A Bode plot: log-magnitude (in dB) and phase (in degrees) plotted against log-frequency. Asymptotic slopes from poles ($-20$ dB/dec) and zeros ($+20$ dB/dec) make sketching mechanical.",
      credit: "Wikimedia Commons",
      license: "Public Domain"
    }],

    "nyquist": [{
      file: "Nyquist_plot.png",
      caption: "A Nyquist plot in the complex plane. Encirclements of the point $-1$ tell you closed-loop stability — even when Bode interpretation fails (e.g., open-loop unstable plants).",
      credit: "Wikimedia Commons",
      license: "CC BY-SA 3.0"
    }],

    "pid-control": [{
      file: "PID_en.svg",
      caption: "The PID controller. Three parallel paths — proportional, integral, derivative — sum to drive the actuator. Tuning balances speed (P), accuracy (I), and damping (D).",
      credit: "Wikimedia Commons / TravTigerEE",
      license: "CC BY-SA 3.0"
    }],

    "root-locus": [{
      file: "Root_locus_example_w_compensator.svg",
      caption: "Root locus: closed-loop poles traced as gain $K$ varies from 0 to ∞. Branches start at open-loop poles, end at zeros (or infinity along asymptotes).",
      credit: "Wikimedia Commons",
      license: "Public Domain"
    }]
  });
})();
