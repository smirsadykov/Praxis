// Physics curriculum — basic to graduate-level.
// Each topic exports: worked examples + 10 practice tasks (with show-answer).
window.CONTENT = window.CONTENT || {};
window.CONTENT.physics = [
  {
    id: "units-measurement",
    title: "Units & Measurement",
    level: "basic",
    summary: "Unit conversion, scientific notation, significant figures, dimensional analysis.",
    examples: [
      { title: "Example 1 — Unit conversion", prompt: "Convert $72\\,\\text{km/h}$ to m/s.", steps: [
        { label: "Factor", body: "$\\times 1000/3600 = \\times 5/18$." },
        { label: "Compute", body: "$72 \\times 5/18 = 20$ m/s." }
      ], answer: "$20$ m/s" },
      { title: "Example 2 — Scientific notation", prompt: "$0.00042$ in scientific notation.", steps: [
        { label: "Shift decimal", body: "$4.2 \\times 10^{-4}$." }
      ], answer: "$4.2 \\times 10^{-4}$" },
      { title: "Example 3 — Sig figs", prompt: "$3.14 \\times 2.5$ — proper sig figs?", steps: [
        { label: "Result", body: "$7.85$; limited to $2$ sig figs ($2.5$)." }
      ], answer: "$7.9$" },
      { title: "Example 4 — Dimensional analysis", prompt: "Does $v = \\sqrt{2gh}$ have units of speed?", steps: [
        { label: "Check", body: "$\\sqrt{\\text{m/s}^2 \\cdot \\text{m}} = \\sqrt{\\text{m}^2/\\text{s}^2} = $ m/s ✓" }
      ], answer: "Yes" }
    ],
    tasks: [
      { q: "$100$ cm in m?", a: "$1$ m" },
      { q: "$2.5$ km in m?", a: "$2500$ m" },
      { q: "$1$ hr in seconds?", a: "$3600$ s" },
      { q: "$60$ mph $\\approx$ ? m/s?", a: "$\\approx 26.8$ m/s" },
      { q: "Convert $5 \\times 10^3$ to standard form.", a: "$5000$" },
      { q: "$3.5 \\times 10^{-3} + 1.2 \\times 10^{-4}$?", a: "$3.62 \\times 10^{-3}$" },
      { q: "$(2.0 \\times 10^3)(3.0 \\times 10^4)$?", a: "$6.0 \\times 10^7$" },
      { q: "How many sig figs in $0.00450$?", a: "$3$" },
      { q: "$[F]$ in base SI units?", a: "$\\text{kg·m/s}^2$" },
      { q: "$[E]$ in base SI units?", a: "$\\text{kg·m}^2/\\text{s}^2$" }
    ]
  },
  {
    id: "kinematics",
    title: "Kinematics",
    level: "basic",
    summary: "Constant-acceleration motion, projectiles, 1D & 2D motion.",
    examples: [
      { title: "Example 1 — Average speed", prompt: "$150$ km in $2.5$ h.", steps: [
        { label: "Compute", body: "$60$ km/h." }
      ], answer: "$60$ km/h" },
      { title: "Example 2 — Free fall", prompt: "Dropped, $t = 3$ s, $g = 9.8$.", steps: [
        { label: "Apply", body: "$v = gt = 29.4$ m/s." }
      ], answer: "$29.4$ m/s" },
      { title: "Example 3 — Projectile range", prompt: "Horizontal throw, $h = 20$ m, $v_x = 15$ m/s.", steps: [
        { label: "$t$", body: "$\\sqrt{2h/g} \\approx 2.02$ s." },
        { label: "$x$", body: "$15 \\times 2.02 \\approx 30.3$ m." }
      ], answer: "$\\approx 30.3$ m" },
      { title: "Example 4 — Kinematic equation", prompt: "$10 \\to 30$ m/s over $100$ m. $a$?", steps: [
        { label: "$v^2 = v_0^2 + 2ax$", body: "$a = 4$ m/s²." }
      ], answer: "$4$ m/s²" }
    ],
    tasks: [
      { q: "Object at rest accelerates $3$ m/s² for $4$ s. Final speed?", a: "$12$ m/s" },
      { q: "Same object as above (rest → $3$ m/s² for $4$ s) — total distance covered?", a: "$24$ m" },
      { q: "$v = 20$ m/s decelerates at $5$ m/s² to rest. Distance?", a: "$40$ m" },
      { q: "Free-fall distance in $2$ s?", a: "$19.6$ m" },
      { q: "Horizontal projectile lands in $3$ s. Vertical drop?", a: "$44.1$ m" },
      { q: "Max height when thrown up at $20$ m/s?", a: "$\\approx 20.4$ m" },
      { q: "Time to reach max height?", a: "$\\approx 2.04$ s" },
      { q: "Range of projectile at $45^\\circ$, $v = 20$ m/s?", a: "$\\approx 40.8$ m" },
      { q: "Average velocity if you go $60$ m/s for $1$ s then $20$ m/s for $1$ s?", a: "$40$ m/s" },
      { q: "Object moving at constant velocity has acceleration?", a: "$0$" }
    ]
  },
  {
    id: "vectors-physics",
    title: "Vectors in Physics",
    level: "basic",
    summary: "Resultants, components, direction angles.",
    examples: [
      { title: "Example 1 — Resultant", prompt: "$4$ east + $3$ north m/s.", steps: [
        { label: "Magnitude", body: "$\\sqrt{16 + 9} = 5$ m/s." }
      ], answer: "$5$ m/s" },
      { title: "Example 2 — Components", prompt: "$50$ N at $30^\\circ$.", steps: [
        { label: "$F_x = 50\\cos 30 \\approx 43.3$", body: "$F_y = 50 \\sin 30 = 25$." }
      ], answer: "$F_x \\approx 43.3$ N, $F_y = 25$ N" },
      { title: "Example 3 — Direction", prompt: "Vector $\\langle 4, 3 \\rangle$. Angle from x-axis?", steps: [
        { label: "Compute", body: "$\\tan^{-1}(3/4) \\approx 36.9^\\circ$." }
      ], answer: "$36.9^\\circ$" },
      { title: "Example 4 — Adding", prompt: "$\\langle 5, 2 \\rangle + \\langle -2, 4 \\rangle$.", steps: [
        { label: "Sum", body: "$\\langle 3, 6 \\rangle$." }
      ], answer: "$\\langle 3, 6 \\rangle$" }
    ],
    tasks: [
      { q: "Magnitude of $\\langle 6, 8 \\rangle$?", a: "$10$" },
      { q: "Angle of $\\langle 1, 1 \\rangle$ from x-axis?", a: "$45^\\circ$" },
      { q: "Component of $20$ N at $60^\\circ$ horizontally?", a: "$10$ N" },
      { q: "Sum $\\langle 1, 0 \\rangle + \\langle 0, 1 \\rangle$?", a: "$\\langle 1, 1 \\rangle$" },
      { q: "Magnitude of $\\langle 1, 1 \\rangle$ (the sum from the previous problem)?", a: "$\\sqrt 2$" },
      { q: "Unit vector along $\\langle 3, 4 \\rangle$?", a: "$\\langle 0.6, 0.8 \\rangle$" },
      { q: "$\\vec A - \\vec B$ if $\\vec A = \\langle 5, 1 \\rangle$, $\\vec B = \\langle 2, -3 \\rangle$?", a: "$\\langle 3, 4 \\rangle$" },
      { q: "Equilibrium net force?", a: "$\\vec 0$" },
      { q: "Resultant of opposite equal forces?", a: "$\\vec 0$" },
      { q: "Two forces of $5$ N perpendicular. Resultant?", a: "$5\\sqrt 2$ N" }
    ]
  },
  {
    id: "newtons-laws",
    title: "Newton's Laws of Motion",
    level: "basic",
    summary: "Inertia, $F = ma$, action-reaction, tension, friction.",
    examples: [
      { title: "Example 1 — $F = ma$", prompt: "$m = 5$, $a = 2$.", steps: [
        { label: "Apply", body: "$F = 10$ N." }
      ], answer: "$10$ N" },
      { title: "Example 2 — $a$ from $F$", prompt: "$F = 20$ N, $m = 4$.", steps: [
        { label: "Apply", body: "$a = 5$ m/s²." }
      ], answer: "$5$ m/s²" },
      { title: "Example 3 — Tension", prompt: "Hanging $10$ kg box.", steps: [
        { label: "Equilibrium", body: "$T = mg = 98$ N." }
      ], answer: "$98$ N" },
      { title: "Example 4 — Kinetic friction", prompt: "$m = 20$ kg, $\\mu_k = 0.3$.", steps: [
        { label: "Normal", body: "$N = 196$ N." },
        { label: "Friction", body: "$f = 0.3 \\times 196 = 58.8$ N." }
      ], answer: "$58.8$ N" }
    ],
    tasks: [
      { q: "Force on $2$ kg accelerating at $3$ m/s²?", a: "$6$ N" },
      { q: "Mass with $20$ N causing $4$ m/s²?", a: "$5$ kg" },
      { q: "Net force on object moving at constant velocity?", a: "$0$" },
      { q: "Weight of $10$ kg on Earth?", a: "$98$ N" },
      { q: "Normal on $5$ kg on horizontal surface?", a: "$49$ N" },
      { q: "Static friction max for $\\mu_s = 0.4$, $N = 50$?", a: "$20$ N" },
      { q: "Pair force when you push wall with $10$ N?", a: "$10$ N back" },
      { q: "Acceleration on smooth incline at $30^\\circ$?", a: "$g/2 = 4.9$ m/s²" },
      { q: "Tension in massless rope pulling $2$ kg at $3$ m/s² (horizontal)?", a: "$6$ N" },
      { q: "Two $5$ kg blocks connected, pushed by $30$ N. Common $a$?", a: "$3$ m/s²" }
    ]
  },
  {
    id: "momentum-impulse",
    title: "Momentum & Impulse",
    level: "basic",
    summary: "Linear momentum, impulse, conservation in collisions.",
    examples: [
      { title: "Example 1 — Momentum", prompt: "$2$ kg at $5$ m/s.", steps: [
        { label: "Compute", body: "$p = 10$ kg·m/s." }
      ], answer: "$10$ kg·m/s" },
      { title: "Example 2 — Impulse", prompt: "$0.05$ kg from $0 \\to 40$ m/s in $0.01$ s.", steps: [
        { label: "Force", body: "$F = 2/0.01 = 200$ N." }
      ], answer: "$200$ N" },
      { title: "Example 3 — Inelastic collision", prompt: "$3$ kg at $4$ m/s + $2$ kg at rest stuck.", steps: [
        { label: "$v_f$", body: "$12/5 = 2.4$ m/s." }
      ], answer: "$2.4$ m/s" },
      { title: "Example 4 — Elastic, equal mass", prompt: "$1$ kg at $3$ m/s hits $1$ kg at rest.", steps: [
        { label: "Exchange", body: "$v_1' = 0$, $v_2' = 3$ m/s." }
      ], answer: "$v_1' = 0, v_2' = 3$" }
    ],
    tasks: [
      { q: "Momentum of $5$ kg at $4$ m/s?", a: "$20$ kg·m/s" },
      { q: "$10$ kg ball stops in $0.1$ s. Impulse?", a: "$|J| = mv$" },
      { q: "Two $1$ kg balls toward each other at $2$ m/s. After elastic?", a: "Reverse: $-2, +2$ m/s" },
      { q: "Bullet $0.01$ kg at $400$ m/s into $2$ kg block. Final speed?", a: "$\\approx 1.99$ m/s" },
      { q: "Impulse units?", a: "N·s = kg·m/s" },
      { q: "Recoil speed of $50$ kg gunner firing $5$ g bullet at $300$ m/s?", a: "$0.03$ m/s" },
      { q: "Force × time = ?", a: "Impulse" },
      { q: "Momentum is conserved when?", a: "No external forces" },
      { q: "KE conserved in elastic collisions?", a: "Yes" },
      { q: "Center of mass velocity in isolated system?", a: "Constant" }
    ]
  },
  {
    id: "energy-work",
    title: "Work, Energy & Power",
    level: "intermediate",
    summary: "Kinetic and potential energy, work-energy theorem, conservation, power.",
    examples: [
      { title: "Example 1 — KE", prompt: "$1500$ kg at $20$ m/s.", steps: [
        { label: "Compute", body: "$3.0 \\times 10^5$ J." }
      ], answer: "$3.0 \\times 10^5$ J" },
      { title: "Example 2 — Conservation", prompt: "$0.5$ kg from $10$ m.", steps: [
        { label: "$v = \\sqrt{2gh}$", body: "$14$ m/s." }
      ], answer: "$14$ m/s" },
      { title: "Example 3 — Work", prompt: "$50$ N $\\times 10$ m (parallel).", steps: [
        { label: "Compute", body: "$500$ J." }
      ], answer: "$500$ J" },
      { title: "Example 4 — Power", prompt: "$200$ kg lifted $5$ m in $4$ s.", steps: [
        { label: "$P = W/t$", body: "$2.45$ kW." }
      ], answer: "$\\approx 2.45$ kW" }
    ],
    tasks: [
      { q: "KE of $2$ kg at $10$ m/s?", a: "$100$ J" },
      { q: "PE of $3$ kg at $5$ m?", a: "$147$ J" },
      { q: "Speed at bottom of $20$ m drop (no friction)?", a: "$\\approx 19.8$ m/s" },
      { q: "Work by gravity on $1$ kg falling $10$ m?", a: "$98$ J" },
      { q: "Work by friction is negative because?", a: "$\\theta = 180^\\circ$" },
      { q: "Power of $100$ W lamp on $1$ h?", a: "$360{,}000$ J" },
      { q: "Energy unit equivalent to N·m?", a: "Joule" },
      { q: "Convert $1$ kWh to J.", a: "$3.6 \\times 10^6$ J" },
      { q: "Spring constant $200$ N/m compressed $0.1$ m. PE?", a: "$1$ J" },
      { q: "Efficiency = $250/1000$ engine?", a: "$25\\%$" }
    ]
  },
  {
    id: "circular-gravitation",
    title: "Circular Motion & Gravitation",
    level: "intermediate",
    summary: "Centripetal acceleration, force, Newton's gravitation, orbits.",
    examples: [
      { title: "Example 1 — $a_c$", prompt: "$v = 20$, $r = 50$.", steps: [
        { label: "Apply", body: "$a = 8$ m/s²." }
      ], answer: "$8$ m/s²" },
      { title: "Example 2 — $F_c$", prompt: "$1000$ kg, $r = 40$, $v = 15$.", steps: [
        { label: "Compute", body: "$5625$ N." }
      ], answer: "$5625$ N" },
      { title: "Example 3 — Gravity", prompt: "Two $5000$ kg, $r = 10$ m.", steps: [
        { label: "$F = Gm_1 m_2/r^2$", body: "$\\approx 1.67 \\times 10^{-5}$ N." }
      ], answer: "$\\approx 1.67 \\times 10^{-5}$ N" },
      { title: "Example 4 — Orbital speed", prompt: "$r = 6.4 \\times 10^6$ m.", steps: [
        { label: "$v = \\sqrt{gr}$", body: "$\\approx 7920$ m/s." }
      ], answer: "$\\approx 7.92$ km/s" }
    ],
    tasks: [
      { q: "Period of uniform circular motion?", a: "$T = 2\\pi r/v$" },
      { q: "Centripetal force always points?", a: "Toward center" },
      { q: "$a_c$ on $r = 2$ m, $v = 4$?", a: "$8$ m/s²" },
      { q: "Banking angle for $v = 20$, $r = 100$, frictionless?", a: "$\\tan^{-1}(v^2/gr) \\approx 22.2^\\circ$" },
      { q: "Escape velocity formula?", a: "$\\sqrt{2GM/r}$" },
      { q: "Kepler 3rd: $T^2 \\propto$?", a: "$r^3$" },
      { q: "Gravity inside uniform sphere $\\propto$?", a: "$r$" },
      { q: "Free-fall acceleration is independent of mass because?", a: "$mg = ma$ cancels" },
      { q: "Geostationary orbit period?", a: "$24$ h" },
      { q: "If $r$ doubles, $F_g$ becomes?", a: "$F/4$" }
    ]
  },
  {
    id: "shm",
    title: "Simple Harmonic Motion",
    level: "intermediate",
    summary: "Springs, pendulums, energy in SHM, damping, resonance.",
    examples: [
      { title: "Example 1 — Spring", prompt: "$k = 200$, $m = 0.5$. $\\omega$?", steps: [
        { label: "Apply", body: "$\\omega = \\sqrt{k/m} = 20$ rad/s." }
      ], answer: "$20$ rad/s" },
      { title: "Example 2 — Period of pendulum", prompt: "$L = 1$ m.", steps: [
        { label: "$T = 2\\pi\\sqrt{L/g}$", body: "$\\approx 2.0$ s." }
      ], answer: "$\\approx 2.0$ s" },
      { title: "Example 3 — Amplitude and energy", prompt: "$k = 50$, amplitude $0.2$ m.", steps: [
        { label: "$E = \\tfrac{1}{2} k A^2$", body: "$1$ J." }
      ], answer: "$1$ J" },
      { title: "Example 4 — Position equation", prompt: "Start at $x = A$, no initial velocity.", steps: [
        { label: "Write", body: "$x(t) = A\\cos(\\omega t)$." }
      ], answer: "$x(t) = A\\cos(\\omega t)$" }
    ],
    tasks: [
      { q: "Frequency from $\\omega = 10$ rad/s?", a: "$f = 5/\\pi$ Hz" },
      { q: "$T$ from $f = 2$ Hz?", a: "$0.5$ s" },
      { q: "Period independent of amplitude (small)?", a: "Yes" },
      { q: "Max speed in SHM at?", a: "Equilibrium" },
      { q: "Max acceleration at?", a: "Turning points" },
      { q: "Period of mass on spring: $T = 2\\pi$?", a: "$\\sqrt{m/k}$" },
      { q: "Underdamped, critically, or overdamped boundary?", a: "$\\gamma = 2\\omega_0$" },
      { q: "Resonance frequency?", a: "$\\omega_0$" },
      { q: "Energy in SHM is?", a: "Constant" },
      { q: "Phase difference between $x$ and $v$?", a: "$\\pi/2$" }
    ]
  },
  {
    id: "rotational",
    title: "Rotational Motion",
    level: "intermediate",
    summary: "Angular kinematics, torque, moment of inertia, angular momentum.",
    examples: [
      { title: "Example 1 — Angular acceleration", prompt: "$\\omega: 0 \\to 20$ rad/s in $4$ s.", steps: [
        { label: "Apply", body: "$\\alpha = 5$ rad/s²." }
      ], answer: "$5$ rad/s²" },
      { title: "Example 2 — Torque", prompt: "$F = 10$ N at $r = 0.5$ m, perpendicular.", steps: [
        { label: "Compute", body: "$\\tau = 5$ N·m." }
      ], answer: "$5$ N·m" },
      { title: "Example 3 — Moment of inertia", prompt: "Solid sphere $M = 2$ kg, $R = 0.1$ m.", steps: [
        { label: "$I = (2/5)MR^2$", body: "$0.008$ kg·m²." }
      ], answer: "$0.008$ kg·m²" },
      { title: "Example 4 — Rotational KE", prompt: "$I = 0.5$, $\\omega = 4$.", steps: [
        { label: "$\\tfrac{1}{2}I\\omega^2$", body: "$4$ J." }
      ], answer: "$4$ J" }
    ],
    tasks: [
      { q: "Convert $360^\\circ$ to rad.", a: "$2\\pi$" },
      { q: "Angular freq from $T = 1$ s?", a: "$2\\pi$ rad/s" },
      { q: "$I$ of thin ring radius $R$ mass $M$?", a: "$MR^2$" },
      { q: "$I$ of solid disk?", a: "$\\tfrac{1}{2}MR^2$" },
      { q: "$I$ of thin rod about center?", a: "$\\tfrac{1}{12}ML^2$" },
      { q: "Newton's 2nd for rotation?", a: "$\\tau = I\\alpha$" },
      { q: "Angular momentum $L$?", a: "$I\\omega$" },
      { q: "Conserved if?", a: "No external torque" },
      { q: "Rolling without slipping: $v = ?$", a: "$\\omega R$" },
      { q: "Parallel-axis theorem: $I = I_{cm} + ?$", a: "$Md^2$" }
    ]
  },
  {
    id: "fluids",
    title: "Fluids",
    level: "intermediate",
    summary: "Hydrostatics, buoyancy, continuity, Bernoulli.",
    examples: [
      { title: "Example 1 — Pressure", prompt: "$h = 5$ m water.", steps: [
        { label: "$P = \\rho g h$", body: "$49000$ Pa." }
      ], answer: "$\\approx 49$ kPa" },
      { title: "Example 2 — Buoyancy", prompt: "$V = 0.001$ m³ submerged.", steps: [
        { label: "$F_B = \\rho V g$", body: "$9.8$ N." }
      ], answer: "$9.8$ N" },
      { title: "Example 3 — Continuity", prompt: "$A_1 = 0.02$, $v_1 = 3$, $A_2 = 0.005$.", steps: [
        { label: "$v_2 = A_1 v_1/A_2$", body: "$12$ m/s." }
      ], answer: "$12$ m/s" },
      { title: "Example 4 — Bernoulli", prompt: "$v_1 = 2$, $P_1 = 200$ kPa, $v_2 = 6$.", steps: [
        { label: "Apply", body: "$P_2 = 184$ kPa." }
      ], answer: "$184$ kPa" }
    ],
    tasks: [
      { q: "Atmospheric pressure?", a: "$\\approx 101$ kPa" },
      { q: "Density of water?", a: "$1000$ kg/m³" },
      { q: "Floating object displaces water equal to its?", a: "Weight" },
      { q: "$1$ atm in Pa?", a: "$\\approx 101325$" },
      { q: "Manometer measures?", a: "Pressure difference" },
      { q: "Pascal's principle?", a: "Pressure transmitted equally" },
      { q: "Specific gravity of mercury?", a: "$13.6$" },
      { q: "Viscosity dimension?", a: "Pa·s" },
      { q: "Reynolds number measures?", a: "Inertia/viscous" },
      { q: "Why airplanes lift?", a: "Bernoulli + Newton 3rd" }
    ]
  },
  {
    id: "kinetic-theory",
    title: "Kinetic Theory of Gases",
    level: "intermediate",
    summary: "Molecular speed, pressure, equipartition, ideal-gas predictions.",
    examples: [
      { title: "Example 1 — RMS speed", prompt: "$T = 300$ K, $M = 0.032$ kg/mol (O₂).", steps: [
        { label: "$v_{rms} = \\sqrt{3RT/M}$", body: "$\\approx 484$ m/s." }
      ], answer: "$\\approx 484$ m/s" },
      { title: "Example 2 — Average KE", prompt: "Monoatomic at $T$.", steps: [
        { label: "$\\langle KE \\rangle = \\tfrac{3}{2}k_B T$", body: "$\\approx 6.2 \\times 10^{-21}$ J at $300$ K." }
      ], answer: "$\\tfrac{3}{2} k_B T$" },
      { title: "Example 3 — Pressure", prompt: "Microscopic origin.", steps: [
        { label: "$P = \\tfrac{1}{3} n m \\langle v^2 \\rangle$", body: "Derives ideal gas." }
      ], answer: "$\\tfrac{1}{3} n m \\langle v^2 \\rangle$" },
      { title: "Example 4 — Mean free path", prompt: "Order-of-magnitude in air.", steps: [
        { label: "$\\lambda \\sim 70$ nm at STP", body: "" }
      ], answer: "$\\sim 70$ nm" }
    ],
    tasks: [
      { q: "Equipartition energy per quadratic DOF?", a: "$\\tfrac{1}{2}k_B T$" },
      { q: "$\\langle KE \\rangle$ of diatomic (no vib) at $T$?", a: "$\\tfrac{5}{2}k_B T$" },
      { q: "Maxwell-Boltzmann distribution peaks at?", a: "$v_{mp} = \\sqrt{2k_B T/m}$" },
      { q: "Average vs RMS speed: which larger?", a: "RMS" },
      { q: "Boltzmann constant value?", a: "$1.38 \\times 10^{-23}$ J/K" },
      { q: "$N_A$ value?", a: "$6.02 \\times 10^{23}$" },
      { q: "$R = N_A k_B$ value?", a: "$8.314$ J/(mol·K)" },
      { q: "Speed of sound in ideal gas $\\propto$?", a: "$\\sqrt{T/M}$" },
      { q: "Heat capacity $C_V$ of monoatomic ideal?", a: "$\\tfrac{3}{2}R$" },
      { q: "$\\gamma = C_p/C_V$ for monoatomic?", a: "$5/3$" }
    ]
  },
  {
    id: "thermodynamics",
    title: "Thermodynamics",
    level: "intermediate",
    summary: "Heat, first and second laws, ideal-gas processes, entropy, engines.",
    examples: [
      { title: "Example 1 — Heating water", prompt: "$2$ kg, $20 \\to 80^\\circ$C.", steps: [
        { label: "Compute", body: "$\\approx 5.02 \\times 10^5$ J." }
      ], answer: "$\\approx 5.02 \\times 10^5$ J" },
      { title: "Example 2 — First law", prompt: "$Q = 500$, $W = 200$.", steps: [
        { label: "Apply", body: "$\\Delta U = 300$ J." }
      ], answer: "$300$ J" },
      { title: "Example 3 — Ideal gas pressure", prompt: "$n = 2$, $T = 300$, $V = 0.05$.", steps: [
        { label: "Apply", body: "$P \\approx 99.8$ kPa." }
      ], answer: "$\\approx 99.8$ kPa" },
      { title: "Example 4 — Efficiency", prompt: "$Q_h = 1000$, $Q_c = 750$.", steps: [
        { label: "$\\eta$", body: "$25\\%$." }
      ], answer: "$25\\%$" }
    ],
    tasks: [
      { q: "Carnot efficiency, $T_h = 500$ K, $T_c = 300$ K?", a: "$40\\%$" },
      { q: "$\\Delta S$ of reversible isothermal expansion?", a: "$Q/T$" },
      { q: "Adiabatic: $Q = ?$", a: "$0$" },
      { q: "Isobaric: $W = ?$", a: "$P\\Delta V$" },
      { q: "Isochoric: $W = ?$", a: "$0$" },
      { q: "Second law forbids?", a: "Total entropy decrease in isolated system" },
      { q: "Third law: entropy at $T = 0$?", a: "Approaches constant (0 for perfect crystal)" },
      { q: "Refrigerator COP?", a: "$Q_c/W$" },
      { q: "Why is $C_p > C_V$?", a: "Work done on expansion" },
      { q: "Boltzmann formula?", a: "$S = k_B \\ln W$" }
    ]
  },
  {
    id: "waves",
    title: "Waves & Sound",
    level: "intermediate",
    summary: "Wave speed, frequency, standing waves, beats, Doppler effect.",
    examples: [
      { title: "Example 1 — Wave speed", prompt: "$\\lambda = 0.5$, $f = 200$.", steps: [
        { label: "Apply", body: "$v = 100$ m/s." }
      ], answer: "$100$ m/s" },
      { title: "Example 2 — Light frequency", prompt: "$\\lambda = 5.0 \\times 10^{-7}$.", steps: [
        { label: "$f = c/\\lambda$", body: "$6.0 \\times 10^{14}$ Hz." }
      ], answer: "$6.0 \\times 10^{14}$ Hz" },
      { title: "Example 3 — Thunder distance", prompt: "$\\Delta t = 4$ s.", steps: [
        { label: "Apply", body: "$\\approx 1360$ m." }
      ], answer: "$\\approx 1360$ m" },
      { title: "Example 4 — Doppler", prompt: "$f = 500$, $v_{src} = 30$ approaching.", steps: [
        { label: "Apply", body: "$f' \\approx 548$ Hz." }
      ], answer: "$\\approx 548$ Hz" }
    ],
    tasks: [
      { q: "Speed of sound in air (room temp)?", a: "$\\approx 343$ m/s" },
      { q: "Speed of light?", a: "$3 \\times 10^8$ m/s" },
      { q: "Frequency of $1$ s period?", a: "$1$ Hz" },
      { q: "Period of $50$ Hz?", a: "$0.02$ s" },
      { q: "Wavelength of $440$ Hz sound in air?", a: "$\\approx 0.78$ m" },
      { q: "Standing wave nodes spacing?", a: "$\\lambda/2$" },
      { q: "Beat frequency of $440$ and $443$ Hz?", a: "$3$ Hz" },
      { q: "Doppler away from observer: $f'$ ?", a: "Lower" },
      { q: "Intensity $\\propto$?", a: "Amplitude²" },
      { q: "$10$ dB increase = factor?", a: "$10$ in intensity" }
    ]
  },
  {
    id: "optics-geometric",
    title: "Geometric Optics",
    level: "intermediate",
    summary: "Reflection, refraction, lenses, mirrors, total internal reflection.",
    examples: [
      { title: "Example 1 — Snell", prompt: "Air → glass, $\\theta = 30^\\circ$.", steps: [
        { label: "Apply", body: "$\\theta_2 \\approx 19.5^\\circ$." }
      ], answer: "$\\approx 19.5^\\circ$" },
      { title: "Example 2 — Lens", prompt: "$f = 10$ cm, $d_o = 30$ cm.", steps: [
        { label: "Apply", body: "$d_i = 15$ cm." }
      ], answer: "$15$ cm (real)" },
      { title: "Example 3 — Magnification", prompt: "For the lens in Example 2 ($f = 10$ cm, object $30$ cm out, image at $d_i = 15$ cm), find the magnification.", steps: [
        { label: "Formula", body: "Magnification $m = -d_i/d_o$." },
        { label: "Compute", body: "$m = -15/30 = -0.5$." },
        { label: "Interpret", body: "Negative ⇒ inverted. $|m| = 0.5 < 1$ ⇒ half the size." }
      ], answer: "$-0.5$ (inverted, half-size)" },
      { title: "Example 4 — Critical angle", prompt: "Water-air, $n = 1.33$.", steps: [
        { label: "Apply", body: "$\\theta_c \\approx 48.8^\\circ$." }
      ], answer: "$\\approx 48.8^\\circ$" }
    ],
    tasks: [
      { q: "Refractive index of vacuum?", a: "$1$" },
      { q: "Refractive index of water?", a: "$\\approx 1.33$" },
      { q: "Law of reflection: $\\theta_i = ?$", a: "$\\theta_r$" },
      { q: "Convex lens for parallel light gives?", a: "Convergence at $f$" },
      { q: "Concave mirror is?", a: "Converging" },
      { q: "$d_i$ negative means?", a: "Virtual image" },
      { q: "Magnification negative means?", a: "Inverted" },
      { q: "Power of $f = 0.5$ m lens (diopter)?", a: "$2$ D" },
      { q: "Snell's law for $n_1 = 2$ to $n_2 = 1$ at $\\theta_1 = 30^\\circ$?", a: "$\\theta_2 = \\arcsin(1) = 90^\\circ$ (grazing)" },
      { q: "Mirror formula?", a: "$1/d_o + 1/d_i = 1/f$" }
    ]
  },
  {
    id: "optics-wave",
    title: "Wave Optics",
    level: "intermediate",
    summary: "Interference, diffraction, polarization, Young's experiment.",
    examples: [
      { title: "Example 1 — Young's slits", prompt: "$d = 0.1$ mm, $\\lambda = 500$ nm, $L = 1$ m.", steps: [
        { label: "Fringe width", body: "$\\Delta y = \\lambda L/d = 5$ mm." }
      ], answer: "$\\Delta y = 5$ mm" },
      { title: "Example 2 — Single slit min", prompt: "$a = 0.05$ mm, $\\lambda = 600$ nm.", steps: [
        { label: "$\\sin\\theta = \\lambda/a$", body: "$\\theta \\approx 0.69^\\circ$." }
      ], answer: "$\\approx 0.69^\\circ$" },
      { title: "Example 3 — Thin film", prompt: "Path difference condition.", steps: [
        { label: "Constructive (no phase flip)", body: "$2nt = m\\lambda$." }
      ], answer: "$2nt = m\\lambda$" },
      { title: "Example 4 — Polarization (Malus)", prompt: "$I_0$ through analyzer at $60^\\circ$.", steps: [
        { label: "Apply", body: "$I = I_0 \\cos^2 60 = I_0/4$." }
      ], answer: "$I_0/4$" }
    ],
    tasks: [
      { q: "Condition for constructive interference?", a: "$\\Delta = m\\lambda$" },
      { q: "Condition for destructive?", a: "$\\Delta = (m + 1/2)\\lambda$" },
      { q: "Two-slit fringe spacing?", a: "$\\lambda L/d$" },
      { q: "Diffraction grating with $N$ slits — main maxima at?", a: "$d\\sin\\theta = m\\lambda$" },
      { q: "Resolution of grating $\\propto$?", a: "$Nm$" },
      { q: "Polarized light passing crossed polarizer?", a: "$0$" },
      { q: "Unpolarized through one polarizer?", a: "$I_0/2$" },
      { q: "Bragg's law?", a: "$2d\\sin\\theta = n\\lambda$" },
      { q: "Coherence required for stable interference?", a: "Yes" },
      { q: "Why blue sky?", a: "Rayleigh scattering $\\propto 1/\\lambda^4$" }
    ]
  },
  {
    id: "electrostatics",
    title: "Electrostatics",
    level: "intermediate",
    summary: "Coulomb's law, electric field, Gauss's law, potential.",
    examples: [
      { title: "Example 1 — Coulomb", prompt: "$q_1 = q_2 = 2$ μC, $r = 0.1$ m.", steps: [
        { label: "$F = kq_1q_2/r^2$", body: "$3.6$ N." }
      ], answer: "$3.6$ N" },
      { title: "Example 2 — Field of point charge", prompt: "$q = 1$ C, $r = 1$ m.", steps: [
        { label: "$E = kq/r^2$", body: "$9 \\times 10^9$ N/C." }
      ], answer: "$9 \\times 10^9$ N/C" },
      { title: "Example 3 — Gauss's law (sphere)", prompt: "Field outside uniformly charged sphere $Q$.", steps: [
        { label: "Apply", body: "$E = kQ/r^2$ for $r > R$." }
      ], answer: "$kQ/r^2$" },
      { title: "Example 4 — Potential of point charge", prompt: "$q = 1$ μC at $r = 0.5$ m.", steps: [
        { label: "$V = kq/r$", body: "$V = 1.8 \\times 10^4$ V." }
      ], answer: "$\\approx 1.8 \\times 10^4$ V" }
    ],
    tasks: [
      { q: "Coulomb's constant $k$?", a: "$9 \\times 10^9$ N·m²/C²" },
      { q: "Permittivity $\\varepsilon_0$?", a: "$8.85 \\times 10^{-12}$ F/m" },
      { q: "Field inside conductor at equilibrium?", a: "$0$" },
      { q: "Field of infinite line charge $\\lambda$?", a: "$\\lambda/(2\\pi\\varepsilon_0 r)$" },
      { q: "Field between parallel plates $\\sigma$?", a: "$\\sigma/\\varepsilon_0$" },
      { q: "Capacitance of parallel plate?", a: "$\\varepsilon_0 A/d$" },
      { q: "Energy in capacitor?", a: "$\\tfrac{1}{2} CV^2$" },
      { q: "Series capacitors: $1/C$ rule?", a: "$\\sum 1/C_i$" },
      { q: "Parallel capacitors?", a: "$\\sum C_i$" },
      { q: "Equipotentials are perpendicular to?", a: "$\\vec E$" }
    ]
  },
  {
    id: "electric-circuits",
    title: "Electricity & Circuits",
    level: "intermediate",
    summary: "Ohm's law, series/parallel, Kirchhoff's laws, power dissipation.",
    examples: [
      { title: "Example 1 — Ohm", prompt: "$R = 200$, $V = 12$.", steps: [
        { label: "Compute", body: "$I = 60$ mA." }
      ], answer: "$60$ mA" },
      { title: "Example 2 — Series", prompt: "$10 + 20 + 30$ Ω.", steps: [
        { label: "Add", body: "$60$ Ω." }
      ], answer: "$60$ Ω" },
      { title: "Example 3 — Parallel", prompt: "$6$ and $12$ Ω.", steps: [
        { label: "Reciprocal", body: "$R = 4$ Ω." }
      ], answer: "$4$ Ω" },
      { title: "Example 4 — Power", prompt: "$R = 100$, $I = 0.5$.", steps: [
        { label: "$P = I^2 R$", body: "$25$ W." }
      ], answer: "$25$ W" }
    ],
    tasks: [
      { q: "$V$ across $5$ Ω with $0.4$ A?", a: "$2$ V" },
      { q: "Equivalent of $4$, $6$ Ω in parallel?", a: "$2.4$ Ω" },
      { q: "Equivalent of two equal $R$ in parallel?", a: "$R/2$" },
      { q: "Total $R$ of $n$ equal $R$ in series?", a: "$nR$" },
      { q: "EMF vs terminal voltage when $I > 0$?", a: "$V_T = \\varepsilon - Ir$" },
      { q: "Kirchhoff's current law at a node?", a: "Sum of currents $= 0$" },
      { q: "Kirchhoff's voltage law around loop?", a: "Sum of voltages $= 0$" },
      { q: "Energy delivered: $V$ × $I$ × $t$?", a: "Yes" },
      { q: "Conductance unit?", a: "Siemens (S)" },
      { q: "RC time constant?", a: "$RC$" }
    ]
  },
  {
    id: "magnetism-induction",
    title: "Magnetism & Induction",
    level: "intermediate",
    summary: "Magnetic force, wire forces, Ampère, Faraday's law of induction.",
    examples: [
      { title: "Example 1 — Force on charge", prompt: "$q = e$, $v = 2 \\times 10^6$, $B = 0.5$.", steps: [
        { label: "Apply", body: "$F = 1.6 \\times 10^{-13}$ N." }
      ], answer: "$1.6 \\times 10^{-13}$ N" },
      { title: "Example 2 — Wire", prompt: "$L = 0.5$, $I = 10$, $B = 0.2$.", steps: [
        { label: "Apply", body: "$F = 1$ N." }
      ], answer: "$1$ N" },
      { title: "Example 3 — Faraday", prompt: "$N = 100$, $\\Delta\\Phi = 0.3$ Wb in $0.05$ s.", steps: [
        { label: "Apply", body: "$|\\varepsilon| = 600$ V." }
      ], answer: "$600$ V" },
      { title: "Example 4 — Solenoid", prompt: "$N = 1000$, $L = 0.5$ m, $I = 2$ A.", steps: [
        { label: "$B = \\mu_0 nI$", body: "$\\approx 5$ mT." }
      ], answer: "$\\approx 5$ mT" }
    ],
    tasks: [
      { q: "Force on current-carrying wire perpendicular to $\\vec B$?", a: "$BIL$" },
      { q: "Lenz's law states?", a: "Induced current opposes change" },
      { q: "Period of charged particle in $B$?", a: "$T = 2\\pi m/(qB)$" },
      { q: "Magnetic flux unit?", a: "Weber (Wb)" },
      { q: "$B$ field around long wire?", a: "$\\mu_0 I/(2\\pi r)$" },
      { q: "Force between two parallel wires?", a: "Attractive if same direction" },
      { q: "Faraday's law: $\\varepsilon = -d\\Phi/dt$. SI unit?", a: "Volts" },
      { q: "Inductor stored energy?", a: "$\\tfrac{1}{2}LI^2$" },
      { q: "$\\mu_0$ value?", a: "$4\\pi \\times 10^{-7}$ T·m/A" },
      { q: "Hall voltage measures?", a: "Carrier sign and density" }
    ]
  },
  {
    id: "ac-circuits",
    title: "AC Circuits",
    level: "advanced",
    summary: "RLC circuits, impedance, resonance, power factor.",
    examples: [
      { title: "Example 1 — RMS", prompt: "$V_0 = 170$ V peak.", steps: [
        { label: "Apply", body: "$V_{rms} = 120$ V." }
      ], answer: "$120$ V" },
      { title: "Example 2 — Reactance", prompt: "$L = 0.1$ H at $60$ Hz.", steps: [
        { label: "$X_L = \\omega L$", body: "$\\approx 37.7$ Ω." }
      ], answer: "$\\approx 37.7$ Ω" },
      { title: "Example 3 — Resonance", prompt: "$L = 0.01$ H, $C = 1$ μF.", steps: [
        { label: "$\\omega_0 = 1/\\sqrt{LC}$", body: "$\\approx 10^4$ rad/s, $f_0 \\approx 1.59$ kHz." }
      ], answer: "$f_0 \\approx 1.59$ kHz" },
      { title: "Example 4 — Power factor", prompt: "Phase angle $\\phi = 60^\\circ$.", steps: [
        { label: "Compute", body: "$\\cos 60 = 0.5$." }
      ], answer: "$0.5$" }
    ],
    tasks: [
      { q: "$V_{rms}$ from peak?", a: "$V_0/\\sqrt 2$" },
      { q: "Capacitive reactance?", a: "$1/(\\omega C)$" },
      { q: "At resonance, $Z$ minimum equals?", a: "$R$" },
      { q: "Q factor?", a: "$\\omega_0 L/R$" },
      { q: "Real power?", a: "$V_{rms} I_{rms} \\cos\\phi$" },
      { q: "RC circuit current vs voltage phase?", a: "Current leads" },
      { q: "RL circuit?", a: "Current lags" },
      { q: "Transformer ratio: $V_2/V_1 = ?$", a: "$N_2/N_1$" },
      { q: "Apparent power unit?", a: "VA" },
      { q: "Why use 3-phase power?", a: "Constant power delivery" }
    ]
  },
  {
    id: "maxwell-em",
    title: "Maxwell's Equations & EM Waves",
    level: "advanced",
    summary: "Maxwell's four equations; EM wave propagation; energy and momentum.",
    examples: [
      { title: "Example 1 — Maxwell list", prompt: "Write Maxwell's equations (vacuum).", steps: [
        { label: "Gauss E", body: "$\\nabla \\cdot \\vec E = \\rho/\\varepsilon_0$." },
        { label: "Gauss B", body: "$\\nabla \\cdot \\vec B = 0$." },
        { label: "Faraday", body: "$\\nabla \\times \\vec E = -\\partial \\vec B/\\partial t$." },
        { label: "Ampère-Maxwell", body: "$\\nabla \\times \\vec B = \\mu_0 \\vec J + \\mu_0 \\varepsilon_0 \\partial\\vec E/\\partial t$." }
      ], answer: "Four equations" },
      { title: "Example 2 — Wave equation", prompt: "Derive from Maxwell.", steps: [
        { label: "Take curl of Faraday", body: "$\\nabla^2 \\vec E = \\mu_0 \\varepsilon_0 \\partial^2 \\vec E/\\partial t^2$." }
      ], answer: "$\\nabla^2 \\vec E = \\mu_0 \\varepsilon_0 \\ddot{\\vec E}$" },
      { title: "Example 3 — Speed of light", prompt: "$c = 1/\\sqrt{\\mu_0 \\varepsilon_0}$.", steps: [
        { label: "Compute", body: "$\\approx 3 \\times 10^8$ m/s." }
      ], answer: "$3 \\times 10^8$ m/s" },
      { title: "Example 4 — Poynting vector", prompt: "$\\vec S = \\vec E \\times \\vec B/\\mu_0$.", steps: [
        { label: "Meaning", body: "Energy flux of EM field." }
      ], answer: "Energy flux density" }
    ],
    tasks: [
      { q: "$\\nabla \\cdot \\vec B = ?$", a: "$0$" },
      { q: "Source of $\\vec E$?", a: "Charge & changing $\\vec B$" },
      { q: "Source of $\\vec B$?", a: "Current & changing $\\vec E$" },
      { q: "Speed of EM waves?", a: "$c$" },
      { q: "Impedance of free space?", a: "$\\approx 377$ Ω" },
      { q: "Wavelength of $1$ GHz wave?", a: "$30$ cm" },
      { q: "Radiation pressure on perfectly absorbing surface?", a: "$I/c$" },
      { q: "Plane wave: $\\vec E \\perp \\vec B \\perp$?", a: "$\\vec k$ (propagation)" },
      { q: "Energy density of EM field?", a: "$\\tfrac{1}{2}\\varepsilon_0 E^2 + B^2/(2\\mu_0)$" },
      { q: "Group velocity in vacuum?", a: "$c$" }
    ]
  },
  {
    id: "special-relativity",
    title: "Special Relativity",
    level: "advanced",
    summary: "Lorentz transformations, time dilation, length contraction, $E = mc^2$.",
    examples: [
      { title: "Example 1 — Lorentz factor", prompt: "$v = 0.6c$.", steps: [
        { label: "Compute", body: "$\\gamma = 1.25$." }
      ], answer: "$\\gamma = 1.25$" },
      { title: "Example 2 — Time dilation", prompt: "$\\Delta t_0 = 10$ s on ship, $v = 0.6c$.", steps: [
        { label: "Apply", body: "$\\Delta t = 12.5$ s on Earth." }
      ], answer: "$12.5$ s" },
      { title: "Example 3 — Length contraction", prompt: "$L_0 = 100$ m, $v = 0.6c$.", steps: [
        { label: "$L = L_0/\\gamma$", body: "$80$ m." }
      ], answer: "$80$ m" },
      { title: "Example 4 — Energy", prompt: "Rest energy of $1$ g.", steps: [
        { label: "Apply", body: "$E = 9 \\times 10^{13}$ J." }
      ], answer: "$9 \\times 10^{13}$ J" }
    ],
    tasks: [
      { q: "Postulates of SR?", a: "Laws same in all inertial; $c$ same" },
      { q: "$\\gamma$ at $v = 0.8c$?", a: "$5/3$" },
      { q: "Relativistic momentum?", a: "$\\gamma m v$" },
      { q: "Total energy?", a: "$\\gamma m c^2$" },
      { q: "Energy-momentum relation?", a: "$E^2 = (pc)^2 + (mc^2)^2$" },
      { q: "Velocity addition: $u'$ if $u = v$?", a: "$u' = \\frac{2v}{1 + v^2/c^2}$" },
      { q: "Invariant interval?", a: "$ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2$" },
      { q: "Twin paradox: who is younger?", a: "Traveling twin" },
      { q: "Photon rest mass?", a: "$0$" },
      { q: "Minkowski metric signature?", a: "$(-, +, +, +)$ (or opposite)" }
    ]
  },
  {
    id: "general-relativity",
    title: "General Relativity",
    level: "advanced",
    summary: "Equivalence principle, curved spacetime, Einstein equations, black holes.",
    examples: [
      { title: "Example 1 — Equivalence", prompt: "Inertial mass = gravitational mass.", steps: [
        { label: "Implication", body: "Locally indistinguishable acceleration & gravity." }
      ], answer: "Equivalence principle" },
      { title: "Example 2 — Schwarzschild radius", prompt: "$M = M_\\odot$.", steps: [
        { label: "$r_s = 2GM/c^2$", body: "$\\approx 3$ km." }
      ], answer: "$\\approx 3$ km" },
      { title: "Example 3 — Gravitational time dilation", prompt: "Clock near massive body.", steps: [
        { label: "$d\\tau = \\sqrt{1 - 2GM/(rc^2)}\\,dt$", body: "Runs slower near mass." }
      ], answer: "Slower near mass" },
      { title: "Example 4 — Light deflection", prompt: "Sun limb angle.", steps: [
        { label: "$\\Delta\\phi = 4GM/(c^2 b)$", body: "$\\approx 1.75''$." }
      ], answer: "$\\approx 1.75''$" }
    ],
    tasks: [
      { q: "Einstein field equation (schematic)?", a: "$G_{\\mu\\nu} = 8\\pi G T_{\\mu\\nu}/c^4$" },
      { q: "Black hole event horizon for $M$?", a: "$r_s = 2GM/c^2$" },
      { q: "$r_s$ for Earth?", a: "$\\approx 9$ mm" },
      { q: "Cosmological constant symbol?", a: "$\\Lambda$" },
      { q: "Friedmann equations describe?", a: "Cosmic expansion" },
      { q: "Hubble's law?", a: "$v = H_0 d$" },
      { q: "$H_0$ value?", a: "$\\approx 70$ km/s/Mpc" },
      { q: "Tests of GR include?", a: "Mercury perihelion, lensing, GPS" },
      { q: "Gravitational wave: tensor mode?", a: "Quadrupolar" },
      { q: "Predicted by Einstein in?", a: "1916" }
    ]
  },
  {
    id: "lagrangian-hamiltonian",
    title: "Lagrangian & Hamiltonian Mechanics",
    level: "advanced",
    summary: "Variational principle, Euler-Lagrange equations, generalized coordinates, Hamilton's equations.",
    examples: [
      { title: "Example 1 — Lagrangian", prompt: "Free particle: $L = \\tfrac{1}{2}m\\dot x^2$.", steps: [
        { label: "Euler-Lagrange", body: "$m\\ddot x = 0$." }
      ], answer: "$\\ddot x = 0$ (free)" },
      { title: "Example 2 — Pendulum", prompt: "$L = \\tfrac{1}{2}mL^2\\dot\\theta^2 + mgL\\cos\\theta$.", steps: [
        { label: "EL", body: "$\\ddot\\theta + (g/L)\\sin\\theta = 0$." }
      ], answer: "$\\ddot\\theta = -(g/L)\\sin\\theta$" },
      { title: "Example 3 — Hamiltonian", prompt: "$H = T + V$ for conservative.", steps: [
        { label: "Example: harmonic oscillator", body: "$H = p^2/(2m) + \\tfrac{1}{2}kx^2$." }
      ], answer: "$p^2/(2m) + \\tfrac{1}{2}kx^2$" },
      { title: "Example 4 — Hamilton's equations", prompt: "From $H$.", steps: [
        { label: "Equations", body: "$\\dot q = \\partial H/\\partial p$, $\\dot p = -\\partial H/\\partial q$." }
      ], answer: "Hamilton's equations" }
    ],
    tasks: [
      { q: "Generalized momentum conjugate to $q$?", a: "$p = \\partial L/\\partial \\dot q$" },
      { q: "Cyclic coordinate ⇒?", a: "Conserved momentum" },
      { q: "Noether: symmetry ⇒?", a: "Conservation law" },
      { q: "Translation symmetry ⇒?", a: "Momentum conservation" },
      { q: "Rotation symmetry ⇒?", a: "Angular momentum conservation" },
      { q: "Time symmetry ⇒?", a: "Energy conservation" },
      { q: "Poisson bracket of $q$ and $p$?", a: "$\\{q, p\\} = 1$" },
      { q: "Phase space dimension for $N$ particles in 3D?", a: "$6N$" },
      { q: "Liouville's theorem about?", a: "Phase space volume preservation" },
      { q: "Action $S = $?", a: "$\\int L\\,dt$" }
    ]
  },
  {
    id: "statistical-mechanics",
    title: "Statistical Mechanics",
    level: "advanced",
    summary: "Microstates, ensembles, partition function, Boltzmann distribution.",
    examples: [
      { title: "Example 1 — Boltzmann", prompt: "Two states $E_0 = 0$, $E_1 = \\epsilon$, ratio at $T$.", steps: [
        { label: "Apply", body: "$N_1/N_0 = e^{-\\epsilon/(k_B T)}$." }
      ], answer: "$e^{-\\epsilon/k_B T}$" },
      { title: "Example 2 — Partition function", prompt: "Two-level system.", steps: [
        { label: "Compute", body: "$Z = 1 + e^{-\\epsilon/k_B T}$." }
      ], answer: "$Z = 1 + e^{-\\beta\\epsilon}$" },
      { title: "Example 3 — Average energy", prompt: "From $Z$.", steps: [
        { label: "$\\langle E \\rangle = -\\partial \\ln Z/\\partial\\beta$", body: "Compute as needed." }
      ], answer: "$-\\partial_\\beta \\ln Z$" },
      { title: "Example 4 — Entropy", prompt: "From microstates $W$.", steps: [
        { label: "Boltzmann", body: "$S = k_B \\ln W$." }
      ], answer: "$S = k_B \\ln W$" }
    ],
    tasks: [
      { q: "Canonical ensemble fixes?", a: "$N, V, T$" },
      { q: "Microcanonical?", a: "$N, V, E$" },
      { q: "Grand canonical?", a: "$\\mu, V, T$" },
      { q: "Fermi-Dirac distribution?", a: "$1/(e^{(E-\\mu)/kT} + 1)$" },
      { q: "Bose-Einstein?", a: "$1/(e^{(E-\\mu)/kT} - 1)$" },
      { q: "Classical limit (high $T$)?", a: "Maxwell-Boltzmann" },
      { q: "Free energy?", a: "$F = -k_B T \\ln Z$" },
      { q: "$\\langle E \\rangle$ for monoatomic ideal gas?", a: "$\\tfrac{3}{2}Nk_B T$" },
      { q: "Equipartition: each quadratic DOF contributes?", a: "$\\tfrac{1}{2}k_B T$" },
      { q: "Specific heat of ideal gas (isochoric, monoatomic)?", a: "$\\tfrac{3}{2}Nk_B$" }
    ]
  },
  {
    id: "qm-foundations",
    title: "Quantum Mechanics: Foundations",
    level: "advanced",
    summary: "Wavefunctions, operators, commutators, Heisenberg uncertainty.",
    examples: [
      { title: "Example 1 — Normalization", prompt: "$\\psi(x) = A e^{-x^2/2}$.", steps: [
        { label: "Apply", body: "$A = \\pi^{-1/4}$ (Gaussian normalization)." }
      ], answer: "$A = \\pi^{-1/4}$" },
      { title: "Example 2 — Commutator", prompt: "$[\\hat x, \\hat p]$.", steps: [
        { label: "Compute", body: "$i\\hbar$." }
      ], answer: "$i\\hbar$" },
      { title: "Example 3 — Expectation", prompt: "$\\langle \\hat O \\rangle$.", steps: [
        { label: "Formula", body: "$\\int \\psi^* \\hat O\\,\\psi\\,dx$." }
      ], answer: "$\\int \\psi^* \\hat O\\,\\psi\\,dx$" },
      { title: "Example 4 — Uncertainty", prompt: "$\\sigma_x \\sigma_p \\geq ?$.", steps: [
        { label: "Heisenberg", body: "$\\hbar/2$." }
      ], answer: "$\\hbar/2$" }
    ],
    tasks: [
      { q: "Planck constant $\\hbar$?", a: "$1.055 \\times 10^{-34}$ J·s" },
      { q: "Eigenvalue equation for $\\hat H$?", a: "$\\hat H \\psi = E \\psi$" },
      { q: "Probability density?", a: "$|\\psi|^2$" },
      { q: "Schrödinger equation (time-dep)?", a: "$i\\hbar \\dot\\psi = \\hat H \\psi$" },
      { q: "Hermitian operators have?", a: "Real eigenvalues" },
      { q: "Bra-ket of normalized state?", a: "$\\langle\\psi|\\psi\\rangle = 1$" },
      { q: "Stationary state evolves as?", a: "$e^{-iEt/\\hbar}$" },
      { q: "Observable ↔ operator: position?", a: "Multiplication by $x$" },
      { q: "Momentum operator?", a: "$-i\\hbar \\partial/\\partial x$" },
      { q: "Energy operator?", a: "$i\\hbar \\partial/\\partial t$" }
    ]
  },
  {
    id: "qm-1d",
    title: "QM: 1D Problems",
    level: "advanced",
    summary: "Infinite well, harmonic oscillator, tunneling, free particle.",
    examples: [
      { title: "Example 1 — Infinite well", prompt: "Energies in width $L$.", steps: [
        { label: "Apply", body: "$E_n = n^2 \\pi^2 \\hbar^2/(2mL^2)$." }
      ], answer: "$E_n = n^2 \\pi^2 \\hbar^2/(2mL^2)$" },
      { title: "Example 2 — Harmonic oscillator", prompt: "Levels.", steps: [
        { label: "Apply", body: "$E_n = \\hbar\\omega(n + 1/2)$." }
      ], answer: "$\\hbar\\omega(n + 1/2)$" },
      { title: "Example 3 — Tunneling", prompt: "Barrier $V_0$, width $a$, $E < V_0$.", steps: [
        { label: "Transmission", body: "$T \\sim e^{-2\\kappa a}$, $\\kappa = \\sqrt{2m(V_0-E)}/\\hbar$." }
      ], answer: "$T \\sim e^{-2\\kappa a}$" },
      { title: "Example 4 — Free particle", prompt: "Plane wave.", steps: [
        { label: "Solution", body: "$\\psi = e^{i(kx - \\omega t)}$, $E = \\hbar^2 k^2/(2m)$." }
      ], answer: "$E = \\hbar^2 k^2/(2m)$" }
    ],
    tasks: [
      { q: "Ground state of infinite well width $L$?", a: "$\\pi^2 \\hbar^2/(2mL^2)$" },
      { q: "Ground state of HO?", a: "$\\hbar\\omega/2$" },
      { q: "Spacing of HO levels?", a: "$\\hbar\\omega$" },
      { q: "Are HO levels equally spaced?", a: "Yes" },
      { q: "Number of nodes in 3rd excited well state?", a: "$3$" },
      { q: "Parity of HO ground state?", a: "Even" },
      { q: "Tunneling probability decreases with?", a: "Barrier width" },
      { q: "$\\psi$ continuity required for?", a: "Smooth potential" },
      { q: "Zero-point energy means?", a: "Lowest energy $\\neq 0$" },
      { q: "Bound vs scattering states differ by?", a: "Normalizability" }
    ]
  },
  {
    id: "atomic-physics",
    title: "Atomic Physics",
    level: "advanced",
    summary: "Bohr model, hydrogen levels, spin, Pauli exclusion, periodic table.",
    examples: [
      { title: "Example 1 — Bohr radius", prompt: "Definition.", steps: [
        { label: "Compute", body: "$a_0 = 4\\pi\\varepsilon_0 \\hbar^2/(m_e e^2) \\approx 0.529$ Å." }
      ], answer: "$\\approx 0.529$ Å" },
      { title: "Example 2 — Hydrogen levels", prompt: "$E_n$.", steps: [
        { label: "Apply", body: "$E_n = -13.6/n^2$ eV." }
      ], answer: "$-13.6/n^2$ eV" },
      { title: "Example 3 — Lyman alpha", prompt: "$n = 2 \\to 1$.", steps: [
        { label: "$\\Delta E = 10.2$ eV", body: "$\\lambda \\approx 121.6$ nm." }
      ], answer: "$\\approx 121.6$ nm" },
      { title: "Example 4 — Spin", prompt: "Electron spin quantum number.", steps: [
        { label: "Value", body: "$s = 1/2$, $m_s = \\pm 1/2$." }
      ], answer: "$s = 1/2$" }
    ],
    tasks: [
      { q: "Ionization energy of H?", a: "$13.6$ eV" },
      { q: "$n, \\ell, m, s$: quantum numbers of?", a: "Atomic electrons" },
      { q: "Pauli exclusion forbids?", a: "Same set of quantum numbers" },
      { q: "Number of electrons in 3p subshell?", a: "$6$" },
      { q: "Number of electrons in n=2 shell?", a: "$8$" },
      { q: "Fine structure due to?", a: "Spin-orbit + relativistic" },
      { q: "Zeeman effect: split in?", a: "Magnetic field" },
      { q: "Stern-Gerlach demonstrates?", a: "Quantization of spin" },
      { q: "Stark effect: split in?", a: "Electric field" },
      { q: "Hund's rule maximizes?", a: "Total spin (for ground state)" }
    ]
  },
  {
    id: "solid-state",
    title: "Solid State Physics",
    level: "advanced",
    summary: "Crystal lattices, band structure, semiconductors, conductors, magnetism.",
    examples: [
      { title: "Example 1 — Bravais lattices", prompt: "How many in 3D?", steps: [
        { label: "Count", body: "$14$." }
      ], answer: "$14$" },
      { title: "Example 2 — Drude conductivity", prompt: "$\\sigma$.", steps: [
        { label: "Apply", body: "$\\sigma = ne^2 \\tau/m$." }
      ], answer: "$ne^2\\tau/m$" },
      { title: "Example 3 — Band gap", prompt: "Si vs Ge.", steps: [
        { label: "Values", body: "Si $\\approx 1.1$ eV, Ge $\\approx 0.67$ eV." }
      ], answer: "Si: $1.1$ eV, Ge: $0.67$ eV" },
      { title: "Example 4 — Fermi energy", prompt: "Free electron gas at $T = 0$.", steps: [
        { label: "Apply", body: "$E_F = \\hbar^2 (3\\pi^2 n)^{2/3}/(2m)$." }
      ], answer: "$E_F = \\hbar^2(3\\pi^2 n)^{2/3}/(2m)$" }
    ],
    tasks: [
      { q: "FCC packing fraction?", a: "$\\approx 0.74$" },
      { q: "BCC coordination number?", a: "$8$" },
      { q: "Conductor band picture?", a: "Partially filled" },
      { q: "Insulator?", a: "Large gap, full valence" },
      { q: "Semiconductor at $T = 0$?", a: "Acts as insulator" },
      { q: "n-type doping adds?", a: "Electrons" },
      { q: "p-type?", a: "Holes" },
      { q: "Diode is what kind of junction?", a: "p-n" },
      { q: "Specific heat at low $T$ (metal)?", a: "$\\propto T$" },
      { q: "Phonon dispersion at $q \\to 0$?", a: "Linear (acoustic)" }
    ]
  },
  {
    id: "nuclear",
    title: "Nuclear Physics",
    level: "advanced",
    summary: "Nuclear structure, binding energy, radioactive decay, fission/fusion.",
    examples: [
      { title: "Example 1 — Binding energy", prompt: "Definition.", steps: [
        { label: "Apply", body: "$BE = (Z m_p + N m_n - M)c^2$." }
      ], answer: "$BE = \\Delta m\\, c^2$" },
      { title: "Example 2 — Decay law", prompt: "$N(t)$.", steps: [
        { label: "Apply", body: "$N = N_0 e^{-\\lambda t}$." }
      ], answer: "$N_0 e^{-\\lambda t}$" },
      { title: "Example 3 — Half-life", prompt: "From $\\lambda$.", steps: [
        { label: "Apply", body: "$t_{1/2} = \\ln 2/\\lambda$." }
      ], answer: "$t_{1/2} = \\ln 2/\\lambda$" },
      { title: "Example 4 — Fission energy", prompt: "U-235 fission yields?", steps: [
        { label: "Order", body: "$\\approx 200$ MeV/event." }
      ], answer: "$\\approx 200$ MeV" }
    ],
    tasks: [
      { q: "Strong force range?", a: "$\\sim 1$ fm" },
      { q: "Alpha decay emits?", a: "He-4 nucleus" },
      { q: "Beta⁻ decay emits?", a: "Electron + antineutrino" },
      { q: "Most stable nucleus?", a: "Fe-56" },
      { q: "Mass defect → energy via?", a: "$E = mc^2$" },
      { q: "Half-life of C-14?", a: "$\\approx 5730$ y" },
      { q: "Magic numbers?", a: "$2, 8, 20, 28, 50, 82, 126$" },
      { q: "Fusion in Sun primarily?", a: "p-p chain" },
      { q: "Neutron mean lifetime (free)?", a: "$\\approx 880$ s" },
      { q: "Q-value positive ⇒?", a: "Exothermic reaction" }
    ]
  },
  {
    id: "particle-physics",
    title: "Particle Physics",
    level: "advanced",
    summary: "Standard Model, quarks, leptons, gauge bosons, symmetries.",
    examples: [
      { title: "Example 1 — SM matter", prompt: "Three generations.", steps: [
        { label: "List", body: "Quarks: u, d, c, s, t, b. Leptons: e, μ, τ + neutrinos." }
      ], answer: "$6$ quarks, $6$ leptons" },
      { title: "Example 2 — Gauge bosons", prompt: "Forces.", steps: [
        { label: "List", body: "$\\gamma$ (EM), $W^\\pm, Z$ (weak), $g$ (strong), (graviton hyp.)" }
      ], answer: "$\\gamma, W^\\pm, Z, g$" },
      { title: "Example 3 — Higgs", prompt: "Mass.", steps: [
        { label: "Value", body: "$\\approx 125$ GeV." }
      ], answer: "$\\approx 125$ GeV" },
      { title: "Example 4 — Baryons & mesons", prompt: "Quark content.", steps: [
        { label: "Baryon", body: "3 quarks (e.g. proton uud)." },
        { label: "Meson", body: "$q\\bar q$ (e.g. $\\pi^+ = u\\bar d$)." }
      ], answer: "Baryons (qqq) and mesons (q$\\bar q$)" }
    ],
    tasks: [
      { q: "Proton quark content?", a: "uud" },
      { q: "Neutron?", a: "udd" },
      { q: "Photon mass?", a: "$0$" },
      { q: "Force carriers of strong force?", a: "Gluons" },
      { q: "Color charges?", a: "Red, green, blue" },
      { q: "Antiparticle of electron?", a: "Positron" },
      { q: "Lepton number conservation in beta decay?", a: "Yes" },
      { q: "Strong coupling at high $E$?", a: "Asymptotic freedom" },
      { q: "Higgs mechanism gives mass to?", a: "$W, Z$ and fermions" },
      { q: "CKM matrix mixes?", a: "Quark flavors" }
    ]
  },
  {
    id: "astrophysics-cosmology",
    title: "Astrophysics & Cosmology",
    level: "advanced",
    summary: "Stellar physics, galaxies, Big Bang, CMB, dark matter/energy.",
    examples: [
      { title: "Example 1 — Stefan-Boltzmann", prompt: "Star luminosity.", steps: [
        { label: "Apply", body: "$L = 4\\pi R^2 \\sigma T^4$." }
      ], answer: "$L = 4\\pi R^2 \\sigma T^4$" },
      { title: "Example 2 — Wien", prompt: "Sun $T \\approx 5800$ K.", steps: [
        { label: "$\\lambda_{max} T \\approx 2.9\\times 10^{-3}$", body: "$\\lambda_{max} \\approx 500$ nm." }
      ], answer: "$\\approx 500$ nm" },
      { title: "Example 3 — Hubble's law", prompt: "Distance $100$ Mpc.", steps: [
        { label: "$v = H_0 d$", body: "$\\approx 7000$ km/s." }
      ], answer: "$\\approx 7000$ km/s" },
      { title: "Example 4 — Friedmann", prompt: "Schematic.", steps: [
        { label: "Equation", body: "$H^2 = \\tfrac{8\\pi G}{3}\\rho - k/a^2 + \\Lambda/3$." }
      ], answer: "Friedmann equation" }
    ],
    tasks: [
      { q: "Solar luminosity $L_\\odot$?", a: "$3.8 \\times 10^{26}$ W" },
      { q: "Solar radius?", a: "$7 \\times 10^8$ m" },
      { q: "Distance Earth-Sun (AU)?", a: "$1.5 \\times 10^{11}$ m" },
      { q: "Light-year in m?", a: "$\\approx 9.46 \\times 10^{15}$ m" },
      { q: "Universe age?", a: "$\\approx 13.8$ Gyr" },
      { q: "CMB temperature?", a: "$\\approx 2.725$ K" },
      { q: "Dark matter fraction of mass-energy?", a: "$\\approx 27\\%$" },
      { q: "Dark energy fraction?", a: "$\\approx 68\\%$" },
      { q: "Schwarzschild radius of Sun?", a: "$\\approx 3$ km" },
      { q: "Chandrasekhar limit?", a: "$\\approx 1.4 M_\\odot$" }
    ]
  },
  {
    id: "plasma-physics",
    title: "Plasma Physics",
    level: "advanced",
    summary: "Quasi-neutrality, Debye screening, magnetohydrodynamics, fusion.",
    examples: [
      { title: "Example 1 — Debye length", prompt: "Definition.", steps: [
        { label: "Apply", body: "$\\lambda_D = \\sqrt{\\varepsilon_0 k_B T/(n e^2)}$." }
      ], answer: "$\\lambda_D = \\sqrt{\\varepsilon_0 k_B T/(ne^2)}$" },
      { title: "Example 2 — Plasma frequency", prompt: "Electron oscillations.", steps: [
        { label: "Apply", body: "$\\omega_p = \\sqrt{ne^2/(\\varepsilon_0 m_e)}$." }
      ], answer: "$\\omega_p = \\sqrt{ne^2/(\\varepsilon_0 m_e)}$" },
      { title: "Example 3 — Cyclotron frequency", prompt: "Electron in $B$.", steps: [
        { label: "Apply", body: "$\\omega_c = eB/m$." }
      ], answer: "$eB/m$" },
      { title: "Example 4 — Fusion threshold", prompt: "Lawson criterion (D-T).", steps: [
        { label: "Order", body: "$n\\tau T > 5 \\times 10^{21}$ keV·s/m³." }
      ], answer: "Lawson criterion" }
    ],
    tasks: [
      { q: "Is plasma a state of matter?", a: "Yes (4th)" },
      { q: "Quasi-neutrality scale?", a: "$\\lambda_D$" },
      { q: "Magnetic confinement device?", a: "Tokamak" },
      { q: "Inertial confinement uses?", a: "Lasers/implosion" },
      { q: "Plasma density $n_e$ typical fusion?", a: "$\\sim 10^{20}$ m⁻³" },
      { q: "Temperature for D-T fusion?", a: "$\\sim 10^8$ K" },
      { q: "Alfvén wave: propagates along?", a: "$\\vec B$" },
      { q: "Larmor radius?", a: "$r_L = m v_\\perp/(qB)$" },
      { q: "ITER goal?", a: "$Q > 10$ fusion gain" },
      { q: "Cold vs hot plasma distinction?", a: "Temperature regime" }
    ]
  },
  {
    id: "fluid-dynamics",
    title: "Fluid Dynamics",
    level: "advanced",
    summary: "Navier-Stokes, Reynolds number, boundary layers, turbulence.",
    examples: [
      { title: "Example 1 — Navier-Stokes", prompt: "Incompressible.", steps: [
        { label: "Equation", body: "$\\rho(\\partial_t \\vec v + \\vec v \\cdot \\nabla \\vec v) = -\\nabla p + \\mu \\nabla^2 \\vec v + \\rho \\vec g$." }
      ], answer: "Navier-Stokes" },
      { title: "Example 2 — Reynolds", prompt: "Definition.", steps: [
        { label: "Apply", body: "$Re = \\rho v L/\\mu$." }
      ], answer: "$Re = \\rho v L/\\mu$" },
      { title: "Example 3 — Stokes drag", prompt: "Sphere small $Re$.", steps: [
        { label: "Apply", body: "$F = 6\\pi\\mu r v$." }
      ], answer: "$F = 6\\pi\\mu r v$" },
      { title: "Example 4 — Vortex circulation", prompt: "Definition.", steps: [
        { label: "Apply", body: "$\\Gamma = \\oint \\vec v \\cdot d\\vec r$." }
      ], answer: "$\\Gamma = \\oint \\vec v \\cdot d\\vec r$" }
    ],
    tasks: [
      { q: "Incompressible flow: $\\nabla \\cdot \\vec v = ?$", a: "$0$" },
      { q: "Bernoulli applies along?", a: "Streamline (inviscid)" },
      { q: "Critical $Re$ for pipe flow?", a: "$\\approx 2300$" },
      { q: "Boundary layer thickness scales as?", a: "$\\delta \\sim \\sqrt{\\nu x/U}$" },
      { q: "Turbulence energy cascade direction?", a: "Large to small (3D)" },
      { q: "Kolmogorov scale?", a: "$\\eta = (\\nu^3/\\epsilon)^{1/4}$" },
      { q: "Drag coefficient definition?", a: "$F_D/(\\tfrac{1}{2}\\rho v^2 A)$" },
      { q: "Lift on wing requires?", a: "Circulation" },
      { q: "Mach number?", a: "$v/c_s$" },
      { q: "Subsonic vs supersonic boundary?", a: "$M = 1$" }
    ]
  },
  {
    id: "continuum-elasticity",
    title: "Continuum Mechanics & Elasticity",
    level: "intermediate",
    summary: "Stress, strain, Young's modulus, Hooke's law for solids.",
    examples: [
      { title: "Example 1 — Stress", prompt: "$10000$ N on $0.01$ m² area.", steps: [
        { label: "Apply", body: "$\\sigma = F/A = 10^6$ Pa." }
      ], answer: "$1$ MPa" },
      { title: "Example 2 — Strain", prompt: "$1$ m rod stretches $0.001$ m.", steps: [
        { label: "Apply", body: "$\\varepsilon = \\Delta L/L = 10^{-3}$." }
      ], answer: "$10^{-3}$" },
      { title: "Example 3 — Young's modulus", prompt: "$\\sigma = 10^6$ Pa gives $\\varepsilon = 5 \\times 10^{-6}$.", steps: [
        { label: "Apply", body: "$E = \\sigma/\\varepsilon = 2 \\times 10^{11}$ Pa." }
      ], answer: "$200$ GPa (steel-ish)" },
      { title: "Example 4 — Bulk modulus", prompt: "Volume strain under pressure.", steps: [
        { label: "Form", body: "$K = -V \\partial P/\\partial V$." }
      ], answer: "$K = -V\\partial_V P$" }
    ],
    tasks: [
      { q: "Pascal unit?", a: "N/m²" },
      { q: "Shear modulus symbol?", a: "$G$" },
      { q: "Poisson's ratio range?", a: "$-1$ to $0.5$" },
      { q: "Yield stress: beyond, deformation is?", a: "Plastic" },
      { q: "Hooke's law: stress $\\propto$?", a: "Strain" },
      { q: "Tensile vs compressive: opposite sign?", a: "Yes" },
      { q: "Stress tensor rank?", a: "$2$" },
      { q: "Plane stress: nonzero components?", a: "In-plane only" },
      { q: "Wave speed in solid $\\propto$?", a: "$\\sqrt{E/\\rho}$" },
      { q: "Buckling load: Euler formula uses?", a: "$EI/L^2$" }
    ]
  },
  {
    id: "central-force",
    title: "Central Force & Kepler",
    level: "intermediate",
    summary: "Orbits under inverse-square force; Kepler's three laws.",
    examples: [
      { title: "Example 1 — Angular momentum conserved", prompt: "Central force ⇒?", steps: [
        { label: "Why", body: "Torque about center is zero." }
      ], answer: "$\\vec L$ conserved" },
      { title: "Example 2 — Kepler 2", prompt: "Equal areas in equal times.", steps: [
        { label: "Reason", body: "Constant $\\vec L$ ⇒ $dA/dt = L/(2m)$." }
      ], answer: "Areal speed constant" },
      { title: "Example 3 — Kepler 3", prompt: "$T^2 \\propto a^3$.", steps: [
        { label: "Derivation", body: "From Newtonian gravity + circular orbit." }
      ], answer: "$T^2 = (4\\pi^2/GM) a^3$" },
      { title: "Example 4 — Effective potential", prompt: "Form.", steps: [
        { label: "Combine radial KE and centrifugal", body: "$V_{eff}(r) = V(r) + L^2/(2mr^2)$." }
      ], answer: "$V_{eff}$" }
    ],
    tasks: [
      { q: "Kepler 1: orbits are?", a: "Ellipses" },
      { q: "Eccentricity of circle?", a: "$0$" },
      { q: "$e > 1$ orbit shape?", a: "Hyperbola" },
      { q: "Earth's orbital eccentricity?", a: "$\\approx 0.017$" },
      { q: "$1/r^2$ force closed orbits?", a: "Yes (Bertrand)" },
      { q: "Perihelion is?", a: "Closest approach" },
      { q: "Aphelion is?", a: "Farthest distance" },
      { q: "Precession of Mercury's perihelion (extra)?", a: "GR contribution" },
      { q: "Effective potential minimum gives?", a: "Circular orbit" },
      { q: "Virial theorem: $\\langle T \\rangle =$?", a: "$-\\tfrac{1}{2}\\langle V \\rangle$ (for $1/r$)" }
    ]
  },
  {
    id: "nonlinear-chaos-physics",
    title: "Nonlinear Dynamics & Chaos",
    level: "advanced",
    summary: "Bifurcations, strange attractors, chaos in physical systems.",
    examples: [
      { title: "Example 1 — Logistic map", prompt: "$x_{n+1} = r x_n(1-x_n)$.", steps: [
        { label: "Bifurcations", body: "Period-doubling to chaos at $r \\approx 3.57$." }
      ], answer: "Onset of chaos" },
      { title: "Example 2 — Lorenz attractor", prompt: "$\\dot x = \\sigma(y-x)$, etc.", steps: [
        { label: "Behavior", body: "Bounded chaotic orbits — strange attractor." }
      ], answer: "Strange attractor" },
      { title: "Example 3 — Lyapunov exponent", prompt: "Definition.", steps: [
        { label: "Sign", body: "Positive $\\Rightarrow$ chaos." }
      ], answer: "$\\lambda > 0 \\Rightarrow$ chaos" },
      { title: "Example 4 — Driven pendulum", prompt: "Behavior.", steps: [
        { label: "Regimes", body: "Periodic, quasi-periodic, chaotic depending on drive." }
      ], answer: "Routes to chaos" }
    ],
    tasks: [
      { q: "Sensitive dependence on initial conditions = ?", a: "Chaos" },
      { q: "Feigenbaum $\\delta \\approx$?", a: "$4.669$" },
      { q: "Strange attractor dimension?", a: "Fractal" },
      { q: "Hamiltonian chaos preserves?", a: "Phase volume" },
      { q: "Lorenz model came from?", a: "Convection" },
      { q: "KAM tori: persistence under?", a: "Small perturbations" },
      { q: "Universal route to chaos through period doubling?", a: "Yes" },
      { q: "Self-similarity in attractors?", a: "Common" },
      { q: "Poincaré-Bendixson: 2D continuous, no chaos for?", a: "Smooth flow" },
      { q: "Weather prediction limit due to?", a: "Lyapunov time" }
    ]
  },
  {
    id: "angular-momentum-spin",
    title: "Angular Momentum & Spin",
    level: "advanced",
    summary: "$L^2$ and $L_z$ eigenvalues, Pauli matrices, addition of angular momenta.",
    examples: [
      { title: "Example 1 — $L_z$ eigenvalues", prompt: "Quantum number $\\ell$.", steps: [
        { label: "Result", body: "$m = -\\ell, \\ldots, \\ell$, eigenvalues $m\\hbar$." }
      ], answer: "$2\\ell + 1$ values" },
      { title: "Example 2 — $L^2$ eigenvalue", prompt: "$L^2$ acts on $|\\ell, m\\rangle$.", steps: [
        { label: "Result", body: "$\\ell(\\ell+1)\\hbar^2$." }
      ], answer: "$\\ell(\\ell+1)\\hbar^2$" },
      { title: "Example 3 — Pauli matrices", prompt: "$\\sigma_z$.", steps: [
        { label: "Form", body: "$\\sigma_z = \\begin{pmatrix}1 & 0 \\\\ 0 & -1\\end{pmatrix}$." }
      ], answer: "Spin-$z$ operator" },
      { title: "Example 4 — Add two spin-$1/2$", prompt: "Total spin.", steps: [
        { label: "Result", body: "Singlet ($s = 0$) and triplet ($s = 1$)." }
      ], answer: "$0 \\oplus 1$" }
    ],
    tasks: [
      { q: "Commutator $[L_x, L_y]$?", a: "$i\\hbar L_z$" },
      { q: "Total angular momentum operator?", a: "$\\vec J = \\vec L + \\vec S$" },
      { q: "Spin of photon?", a: "$1$" },
      { q: "Spin of electron?", a: "$1/2$" },
      { q: "Spherical harmonics solve?", a: "Angular part" },
      { q: "Ladder operators $L_\\pm$?", a: "$L_x \\pm i L_y$" },
      { q: "$L_+ |\\ell, m\\rangle$?", a: "$\\hbar\\sqrt{\\ell(\\ell+1) - m(m+1)} |\\ell, m+1\\rangle$" },
      { q: "Clebsch-Gordan coefficients combine?", a: "Two angular momenta" },
      { q: "$j$-values from $j_1 \\otimes j_2$?", a: "$|j_1 - j_2| \\ldots j_1 + j_2$" },
      { q: "Wigner-Eckart isolates?", a: "Geometric vs dynamical parts" }
    ]
  },
  {
    id: "qm-3d-hydrogen",
    title: "QM in 3D & Hydrogen Atom",
    level: "advanced",
    summary: "Separation of variables in spherical coords; the hydrogen atom solution.",
    examples: [
      { title: "Example 1 — Spherical separation", prompt: "$\\psi = R(r) Y(\\theta, \\phi)$.", steps: [
        { label: "Result", body: "Angular part: $Y_\\ell^m$; radial part: $R_{n\\ell}$." }
      ], answer: "Separable" },
      { title: "Example 2 — Hydrogen levels", prompt: "$E_n$.", steps: [
        { label: "Result", body: "$E_n = -13.6/n^2$ eV." }
      ], answer: "$-13.6/n^2$ eV" },
      { title: "Example 3 — Ground state $|100\\rangle$", prompt: "Shape.", steps: [
        { label: "Form", body: "$\\psi_{100} \\propto e^{-r/a_0}$, spherically symmetric." }
      ], answer: "$\\propto e^{-r/a_0}$" },
      { title: "Example 4 — Degeneracy of level $n$", prompt: "Count states.", steps: [
        { label: "Sum", body: "$\\sum_{\\ell=0}^{n-1} (2\\ell+1) = n^2$." }
      ], answer: "$n^2$ (or $2n^2$ with spin)" }
    ],
    tasks: [
      { q: "Bohr radius $a_0 \\approx$?", a: "$5.29 \\times 10^{-11}$ m" },
      { q: "Quantum numbers for hydrogen?", a: "$n, \\ell, m, m_s$" },
      { q: "$\\ell$ range for given $n$?", a: "$0$ to $n-1$" },
      { q: "$2s$ vs $2p$ energy in pure hydrogen?", a: "Same" },
      { q: "Fine structure splits?", a: "$2s$ and $2p$" },
      { q: "Spin-orbit coupling $\\propto$?", a: "$L \\cdot S$" },
      { q: "Lamb shift due to?", a: "QED corrections" },
      { q: "Hyperfine due to?", a: "Nuclear spin" },
      { q: "Selection rule for E1 transitions?", a: "$\\Delta \\ell = \\pm 1$" },
      { q: "Effective potential includes?", a: "Centrifugal $\\ell(\\ell+1)\\hbar^2/(2mr^2)$" }
    ]
  },
  {
    id: "perturbation-theory",
    title: "Perturbation Theory",
    level: "advanced",
    summary: "Small corrections to known solutions: time-independent and time-dependent.",
    examples: [
      { title: "Example 1 — First-order energy", prompt: "$H = H_0 + \\lambda H'$.", steps: [
        { label: "Result", body: "$E_n^{(1)} = \\langle n | H' | n \\rangle$." }
      ], answer: "$\\langle n | H' | n \\rangle$" },
      { title: "Example 2 — First-order state", prompt: "Correction to $|n\\rangle$.", steps: [
        { label: "Result", body: "$|n^{(1)}\\rangle = \\sum_{m \\neq n} |m\\rangle \\dfrac{\\langle m | H' | n \\rangle}{E_n - E_m}$." }
      ], answer: "Sum over other states" },
      { title: "Example 3 — Fermi's golden rule", prompt: "Transition rate.", steps: [
        { label: "Formula", body: "$\\Gamma = \\tfrac{2\\pi}{\\hbar} |\\langle f | H' | i \\rangle|^2 \\rho(E_f)$." }
      ], answer: "$\\propto |\\text{matrix element}|^2 \\rho$" },
      { title: "Example 4 — Degenerate case", prompt: "Approach.", steps: [
        { label: "Method", body: "Diagonalize $H'$ in the degenerate subspace first." }
      ], answer: "Degenerate perturbation theory" }
    ],
    tasks: [
      { q: "Perturbation parameter $\\lambda$ small?", a: "Yes (controls expansion)" },
      { q: "Second-order energy?", a: "$\\sum_{m \\neq n} |H'_{mn}|^2/(E_n - E_m)$" },
      { q: "Stark effect: H atom in E field?", a: "Quadratic for ground state" },
      { q: "Zeeman: H atom in B field?", a: "Linear in $B$" },
      { q: "Time-dependent: result for harmonic perturbation?", a: "Rabi-like" },
      { q: "Adiabatic theorem assumes?", a: "Slow change" },
      { q: "Sudden approximation: state?", a: "Unchanged" },
      { q: "Variational principle gives?", a: "Upper bound on ground state" },
      { q: "Brillouin-Wigner vs Rayleigh-Schrödinger differ?", a: "Treatment of denominators" },
      { q: "Convergence of series usually?", a: "Asymptotic" }
    ]
  },
  {
    id: "identical-particles",
    title: "Identical Particles",
    level: "advanced",
    summary: "Bosons (symmetric) vs fermions (antisymmetric); Pauli exclusion; exchange.",
    examples: [
      { title: "Example 1 — Two fermions", prompt: "Two-particle wavefunction.", steps: [
        { label: "Antisymmetric", body: "$\\psi(1,2) = -\\psi(2,1)$. Slater determinant of single-particle orbitals." }
      ], answer: "Slater det" },
      { title: "Example 2 — Two bosons", prompt: "Symmetric form.", steps: [
        { label: "Symmetric", body: "$\\psi(1,2) = +\\psi(2,1)$." }
      ], answer: "Symmetric" },
      { title: "Example 3 — Pauli exclusion", prompt: "Consequence for fermions in same state.", steps: [
        { label: "Result", body: "Vanishing wavefunction → forbidden." }
      ], answer: "Forbidden" },
      { title: "Example 4 — Helium ground state", prompt: "Two electrons.", steps: [
        { label: "Configuration", body: "$1s^2$ — both spatial $1s$, spins antiparallel (singlet)." }
      ], answer: "$1s^2$ singlet" }
    ],
    tasks: [
      { q: "Fermions have spin?", a: "Half-integer" },
      { q: "Bosons have spin?", a: "Integer" },
      { q: "Spin-statistics theorem?", a: "Fermion ↔ antisym, boson ↔ sym" },
      { q: "Pauli exclusion ⇒ periodic table?", a: "Yes" },
      { q: "Bose-Einstein condensation in identical bosons?", a: "Yes, at low $T$" },
      { q: "Fermi-Dirac distribution applies to?", a: "Fermions" },
      { q: "Pauli pressure stabilizes?", a: "White dwarfs" },
      { q: "Exchange energy in helium splits?", a: "Singlet vs triplet" },
      { q: "Identical particles can be?", a: "Distinguished only by quantum state" },
      { q: "Composite bosons from fermions?", a: "Yes (pairs)" }
    ]
  },
  {
    id: "scattering-theory",
    title: "Scattering Theory",
    level: "advanced",
    summary: "Differential cross sections, Born approximation, partial waves.",
    examples: [
      { title: "Example 1 — Cross section", prompt: "Definition.", steps: [
        { label: "Form", body: "$d\\sigma/d\\Omega = |f(\\theta)|^2$." }
      ], answer: "$|f|^2$" },
      { title: "Example 2 — Born approximation", prompt: "Weak potential.", steps: [
        { label: "Result", body: "$f(\\theta) = -(m/2\\pi\\hbar^2) \\int e^{-i\\vec q \\cdot \\vec r} V(\\vec r)\\,d^3 r$." }
      ], answer: "Fourier transform of $V$" },
      { title: "Example 3 — Partial waves", prompt: "Expansion.", steps: [
        { label: "Form", body: "$f = (1/k) \\sum_\\ell (2\\ell+1) e^{i\\delta_\\ell} \\sin\\delta_\\ell \\, P_\\ell(\\cos\\theta)$." }
      ], answer: "Phase-shift series" },
      { title: "Example 4 — Optical theorem", prompt: "Total cross section.", steps: [
        { label: "Form", body: "$\\sigma_{tot} = (4\\pi/k) \\text{Im}\\,f(0)$." }
      ], answer: "$\\sigma \\propto \\text{Im}\\,f(0)$" }
    ],
    tasks: [
      { q: "Born series valid for?", a: "Weak potentials" },
      { q: "Low-energy s-wave only (often)?", a: "Yes for short-range" },
      { q: "Hard sphere cross section (low $E$)?", a: "$4\\pi a^2$" },
      { q: "Resonance ⇒ rapid phase shift change?", a: "Through $\\pi/2$" },
      { q: "Coulomb scattering: Rutherford formula?", a: "Yes" },
      { q: "Differential cross section units?", a: "Area / steradian" },
      { q: "Scattering amplitude units?", a: "Length" },
      { q: "Identical particles modify cross section by?", a: "Symmetrization" },
      { q: "Mean free path $\\sim$?", a: "$1/(n\\sigma)$" },
      { q: "Inelastic vs elastic: distinguishable how?", a: "Final state energy" }
    ]
  },
  {
    id: "density-matrices",
    title: "Density Matrices & Open Systems",
    level: "advanced",
    summary: "Mixed states, partial trace, decoherence, Lindblad evolution.",
    examples: [
      { title: "Example 1 — Pure state $\\rho$", prompt: "$|\\psi\\rangle$.", steps: [
        { label: "Form", body: "$\\rho = |\\psi\\rangle\\langle\\psi|$." }
      ], answer: "$\\rho = |\\psi\\rangle\\langle\\psi|$" },
      { title: "Example 2 — Mixed", prompt: "$\\rho = \\sum p_i |\\psi_i\\rangle\\langle\\psi_i|$.", steps: [
        { label: "Properties", body: "$\\text{tr}\\rho = 1$, $\\rho^2 \\neq \\rho$." }
      ], answer: "Mixed" },
      { title: "Example 3 — Partial trace", prompt: "Reduce subsystem.", steps: [
        { label: "Trace over $B$", body: "$\\rho_A = \\text{tr}_B(\\rho_{AB})$." }
      ], answer: "$\\rho_A$" },
      { title: "Example 4 — Lindblad evolution", prompt: "Markovian open system.", steps: [
        { label: "Form", body: "$\\dot\\rho = -i[H,\\rho]/\\hbar + \\sum (L\\rho L^\\dagger - \\tfrac{1}{2}\\{L^\\dagger L, \\rho\\})$." }
      ], answer: "Lindblad equation" }
    ],
    tasks: [
      { q: "$\\rho$ Hermitian?", a: "Yes" },
      { q: "$\\rho$ positive semi-definite?", a: "Yes" },
      { q: "Trace of $\\rho$?", a: "$1$" },
      { q: "Pure iff $\\rho^2 = \\rho$?", a: "Yes" },
      { q: "Decoherence: $\\rho$ off-diagonal terms?", a: "Decay" },
      { q: "Von Neumann entropy?", a: "$-\\text{tr}(\\rho \\ln \\rho)$" },
      { q: "Maximally mixed state on $n$ levels?", a: "$I/n$" },
      { q: "Schmidt decomposition for entangled?", a: "$\\sum \\sqrt{\\lambda_i} |i\\rangle_A |i\\rangle_B$" },
      { q: "Decoherence time vs relaxation time?", a: "$T_2 \\leq 2T_1$" },
      { q: "Master equation = ?", a: "Density matrix evolution" }
    ]
  },
  {
    id: "path-integrals",
    title: "Path Integrals",
    level: "advanced",
    summary: "Feynman's sum over histories; propagator; classical limit.",
    examples: [
      { title: "Example 1 — Amplitude", prompt: "Definition.", steps: [
        { label: "Form", body: "$\\langle x_f | e^{-iHt/\\hbar} | x_i \\rangle = \\int \\mathcal{D}x\\, e^{iS[x]/\\hbar}$." }
      ], answer: "Sum over paths" },
      { title: "Example 2 — Classical limit", prompt: "Stationary phase.", steps: [
        { label: "Why classical wins", body: "Action stationary on classical path; nearby paths interfere destructively elsewhere." }
      ], answer: "Classical = stationary action" },
      { title: "Example 3 — Free propagator", prompt: "Result.", steps: [
        { label: "Form", body: "$K(x_f, t; x_i, 0) = \\sqrt{m/(2\\pi i\\hbar t)}\\, e^{im(x_f-x_i)^2/(2\\hbar t)}$." }
      ], answer: "Gaussian" },
      { title: "Example 4 — Double slit", prompt: "Pictorial.", steps: [
        { label: "Interpretation", body: "Sum two leading paths through each slit; their phases interfere." }
      ], answer: "Interference" }
    ],
    tasks: [
      { q: "$\\hbar \\to 0$ limit selects?", a: "Classical path" },
      { q: "Action units?", a: "$\\hbar$" },
      { q: "Wick rotation $t \\to -i\\tau$ gives?", a: "Euclidean path integral" },
      { q: "Euclidean PI computes?", a: "Partition function" },
      { q: "Lattice gauge theory uses?", a: "Discrete PI" },
      { q: "Path integral over which?", a: "All paths between endpoints" },
      { q: "Schrödinger equation from PI?", a: "Yes, via short-time" },
      { q: "Functional integral measure $\\mathcal{D}x$?", a: "Formal" },
      { q: "Feynman diagram = ?", a: "Perturbative PI term" },
      { q: "Renormalization handles?", a: "Loop divergences" }
    ]
  },
  {
    id: "quantum-information",
    title: "Quantum Information",
    level: "advanced",
    summary: "Qubits, entanglement, gates, Bell inequalities, teleportation.",
    examples: [
      { title: "Example 1 — Qubit", prompt: "General state.", steps: [
        { label: "Form", body: "$|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle$, $|\\alpha|^2 + |\\beta|^2 = 1$." }
      ], answer: "Bloch sphere" },
      { title: "Example 2 — Bell state", prompt: "Maximally entangled.", steps: [
        { label: "Form", body: "$|\\Phi^+\\rangle = (|00\\rangle + |11\\rangle)/\\sqrt 2$." }
      ], answer: "Bell state" },
      { title: "Example 3 — CNOT", prompt: "Action.", steps: [
        { label: "Logic", body: "Flip target iff control is $|1\\rangle$." }
      ], answer: "CNOT" },
      { title: "Example 4 — No-cloning", prompt: "Statement.", steps: [
        { label: "Why", body: "Linearity + unitarity preclude $|\\psi\\rangle \\to |\\psi\\rangle|\\psi\\rangle$." }
      ], answer: "Can't copy arbitrary states" }
    ],
    tasks: [
      { q: "Number of qubits in $n$ dimensions?", a: "$\\log_2 n$" },
      { q: "Hadamard gate $H|0\\rangle$?", a: "$(|0\\rangle + |1\\rangle)/\\sqrt 2$" },
      { q: "Entanglement entropy of Bell state?", a: "$1$ bit ($\\ln 2$ nat)" },
      { q: "Teleportation requires?", a: "Bell pair + 2 classical bits" },
      { q: "Quantum supremacy demonstrated by?", a: "Sycamore (Google, 2019)" },
      { q: "Shor's algorithm factors in?", a: "Polynomial time" },
      { q: "Grover's search speedup?", a: "Quadratic" },
      { q: "Quantum error correction needs?", a: "Redundancy across qubits" },
      { q: "Bell inequality violation rules out?", a: "Local hidden variables" },
      { q: "Quantum key distribution example?", a: "BB84" }
    ]
  },
  {
    id: "symmetries-noether",
    title: "Symmetries & Noether's Theorem",
    level: "advanced",
    summary: "Every continuous symmetry of an action gives a conserved current.",
    examples: [
      { title: "Example 1 — Translation", prompt: "Symmetry ⇒ ?", steps: [
        { label: "Result", body: "Momentum conserved." }
      ], answer: "Momentum" },
      { title: "Example 2 — Rotation", prompt: "Symmetry ⇒ ?", steps: [
        { label: "Result", body: "Angular momentum conserved." }
      ], answer: "Angular momentum" },
      { title: "Example 3 — Time translation", prompt: "Symmetry ⇒ ?", steps: [
        { label: "Result", body: "Energy conserved." }
      ], answer: "Energy" },
      { title: "Example 4 — Gauge", prompt: "Internal U(1) symmetry ⇒?", steps: [
        { label: "Result", body: "Electric charge conserved." }
      ], answer: "Charge" }
    ],
    tasks: [
      { q: "Noether's theorem connects?", a: "Symmetries ↔ conservation laws" },
      { q: "Discrete symmetries also have conservation laws?", a: "Yes (parities)" },
      { q: "Lorentz symmetry ⇒?", a: "Stress-energy tensor conservation" },
      { q: "Spontaneous symmetry breaking ⇒?", a: "Goldstone bosons (continuous)" },
      { q: "Higgs mechanism for gauged broken symmetry ⇒?", a: "Massive gauge bosons" },
      { q: "Global vs gauge symmetry?", a: "Gauge = local" },
      { q: "Conserved current $\\partial_\\mu j^\\mu = ?$", a: "$0$" },
      { q: "Symmetry of $L$ vs $S$?", a: "Action — total derivatives don't matter" },
      { q: "Internal symmetry of QCD?", a: "$SU(3)_{\\text{color}}$" },
      { q: "Approximate symmetries lead to?", a: "Approximate conservation" }
    ]
  },
  {
    id: "classical-field-theory",
    title: "Classical Field Theory",
    level: "advanced",
    summary: "Lagrangian densities, Klein-Gordon, Dirac, electromagnetism as fields.",
    examples: [
      { title: "Example 1 — Scalar field Lagrangian", prompt: "Free real scalar.", steps: [
        { label: "Form", body: "$\\mathcal{L} = \\tfrac{1}{2}(\\partial_\\mu\\phi)^2 - \\tfrac{1}{2}m^2\\phi^2$." }
      ], answer: "Free scalar" },
      { title: "Example 2 — Klein-Gordon", prompt: "Equation of motion.", steps: [
        { label: "Result", body: "$(\\Box + m^2)\\phi = 0$." }
      ], answer: "$(\\Box + m^2)\\phi = 0$" },
      { title: "Example 3 — Dirac", prompt: "Equation.", steps: [
        { label: "Form", body: "$(i\\gamma^\\mu \\partial_\\mu - m)\\psi = 0$." }
      ], answer: "Dirac equation" },
      { title: "Example 4 — EM as field", prompt: "Lagrangian.", steps: [
        { label: "Form", body: "$\\mathcal{L} = -\\tfrac{1}{4} F_{\\mu\\nu} F^{\\mu\\nu}$." }
      ], answer: "$-\\tfrac{1}{4}F^2$" }
    ],
    tasks: [
      { q: "Field has degrees of freedom per?", a: "Spacetime point" },
      { q: "Lagrangian density units (natural)?", a: "$(\\text{mass})^4$" },
      { q: "Action $S = $?", a: "$\\int d^4 x\\, \\mathcal{L}$" },
      { q: "Stress-energy tensor symbol?", a: "$T^{\\mu\\nu}$" },
      { q: "Gauge potential symbol?", a: "$A_\\mu$" },
      { q: "$F_{\\mu\\nu} = ?$", a: "$\\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu$" },
      { q: "Spinor field describes?", a: "Spin-$1/2$ matter" },
      { q: "Vector field describes?", a: "Spin-$1$" },
      { q: "Higgs field is?", a: "Scalar" },
      { q: "Graviton spin?", a: "$2$" }
    ]
  },
  {
    id: "qft",
    title: "Quantum Field Theory",
    level: "advanced",
    summary: "Canonical quantization, creation/annihilation, Feynman diagrams, QED.",
    examples: [
      { title: "Example 1 — Field quantization", prompt: "Promote $\\phi(x)$ to operator.", steps: [
        { label: "Expand", body: "$\\phi(x) = \\int \\tfrac{d^3 k}{(2\\pi)^3 \\sqrt{2\\omega_k}}(a_k e^{-ikx} + a_k^\\dagger e^{ikx})$." }
      ], answer: "Operator field" },
      { title: "Example 2 — Particle creation", prompt: "$a_k^\\dagger$ does what?", steps: [
        { label: "Action", body: "Adds a quantum with momentum $k$." }
      ], answer: "Adds a particle" },
      { title: "Example 3 — Feynman diagram", prompt: "QED vertex.", steps: [
        { label: "Vertex factor", body: "$-ie\\gamma^\\mu$." }
      ], answer: "Vertex $\\propto e$" },
      { title: "Example 4 — Cross section example", prompt: "$e^+ e^- \\to \\mu^+ \\mu^-$ at high energy.", steps: [
        { label: "Result", body: "$\\sigma \\propto \\alpha^2 / s$." }
      ], answer: "$\\sigma \\propto \\alpha^2/s$" }
    ],
    tasks: [
      { q: "QED coupling constant value?", a: "$\\alpha \\approx 1/137$" },
      { q: "Quanta of EM field?", a: "Photons" },
      { q: "Anti-particles in QFT come from?", a: "Negative-frequency modes" },
      { q: "Vacuum has?", a: "Zero-point fluctuations" },
      { q: "Number of QED vertices in tree-level $e^- e^- \\to e^- e^-$?", a: "$2$" },
      { q: "Casimir effect uses?", a: "Vacuum energy difference" },
      { q: "Renormalization needed because?", a: "Loop integrals diverge" },
      { q: "QCD coupling at high energy?", a: "Asymptotically free" },
      { q: "Wightman axioms formalize?", a: "QFT axioms" },
      { q: "Spin-statistics theorem proved in?", a: "Lorentz-invariant QFT" }
    ]
  },
  {
    id: "renormalization",
    title: "Renormalization",
    level: "advanced",
    summary: "Loop divergences, regularization, running couplings, renormalization group.",
    examples: [
      { title: "Example 1 — Bare vs renormalized", prompt: "Idea.", steps: [
        { label: "Strategy", body: "Absorb infinities into redefined parameters." }
      ], answer: "Bare → physical" },
      { title: "Example 2 — Running coupling", prompt: "QED.", steps: [
        { label: "Behavior", body: "$\\alpha$ grows logarithmically with energy." }
      ], answer: "$\\alpha$ grows with $E$" },
      { title: "Example 3 — Beta function", prompt: "Definition.", steps: [
        { label: "Form", body: "$\\beta(g) = \\mu \\partial g/\\partial \\mu$." }
      ], answer: "Coupling flow rate" },
      { title: "Example 4 — Asymptotic freedom", prompt: "QCD.", steps: [
        { label: "Behavior", body: "$\\alpha_s \\to 0$ at high $E$. Negative $\\beta$ near origin." }
      ], answer: "QCD coupling shrinks at high $E$" }
    ],
    tasks: [
      { q: "Cutoff regularization introduces?", a: "$\\Lambda$ scale" },
      { q: "Dimensional regularization uses?", a: "$D = 4 - \\varepsilon$" },
      { q: "Renormalizable theories: divergences absorbable into?", a: "Finite # of parameters" },
      { q: "QED renormalizable?", a: "Yes" },
      { q: "Gravity (GR) renormalizable?", a: "No (perturbatively)" },
      { q: "Wilsonian RG flows toward?", a: "Fixed points / phases" },
      { q: "Effective field theory's validity?", a: "Below cutoff" },
      { q: "Standard Model is?", a: "Renormalizable EFT" },
      { q: "Asymptotic safety?", a: "Possibility for gravity" },
      { q: "Mass renormalization?", a: "Yes (e.g., electron self-energy)" }
    ]
  },
  {
    id: "radiation-theory",
    title: "Radiation Theory",
    level: "advanced",
    summary: "Larmor formula, dipole radiation, multipoles, retarded potentials.",
    examples: [
      { title: "Example 1 — Larmor", prompt: "Power radiated by accelerating charge.", steps: [
        { label: "Formula", body: "$P = q^2 a^2/(6\\pi\\varepsilon_0 c^3)$." }
      ], answer: "$\\propto a^2$" },
      { title: "Example 2 — Dipole radiation", prompt: "Power.", steps: [
        { label: "Form", body: "$P = \\omega^4 p_0^2/(12\\pi\\varepsilon_0 c^3)$." }
      ], answer: "$\\propto \\omega^4$" },
      { title: "Example 3 — Retarded potentials", prompt: "Concept.", steps: [
        { label: "Idea", body: "Field at $(\\vec r, t)$ depends on charge state at retarded time $t' = t - |\\vec r - \\vec r'|/c$." }
      ], answer: "Causality built in" },
      { title: "Example 4 — Multipole expansion", prompt: "Leading terms.", steps: [
        { label: "Form", body: "Monopole, dipole, quadrupole, …" }
      ], answer: "Series in $1/r$" }
    ],
    tasks: [
      { q: "Why sky blue?", a: "Rayleigh $\\propto \\omega^4$" },
      { q: "Sunset red?", a: "Blue scattered out" },
      { q: "Antenna radiates if?", a: "Currents oscillate" },
      { q: "Cyclotron radiation?", a: "From circular motion in $B$" },
      { q: "Synchrotron at relativistic speeds?", a: "Forward-focused beam" },
      { q: "Bremsstrahlung from?", a: "Decelerating charge" },
      { q: "Magnetic monopoles in standard EM?", a: "Absent" },
      { q: "Radiation reaction force = ?", a: "Abraham-Lorentz" },
      { q: "Black-body relates to?", a: "Quantized EM radiation" },
      { q: "Coulomb gauge: $\\nabla \\cdot \\vec A = ?$", a: "$0$" }
    ]
  },
  {
    id: "em-waves-matter",
    title: "EM Waves in Matter",
    level: "advanced",
    summary: "Dispersion, dielectric and magnetic response, group velocity.",
    examples: [
      { title: "Example 1 — Refractive index", prompt: "In linear medium.", steps: [
        { label: "Form", body: "$n = \\sqrt{\\varepsilon_r \\mu_r}$." }
      ], answer: "$n = \\sqrt{\\varepsilon_r \\mu_r}$" },
      { title: "Example 2 — Phase vs group velocity", prompt: "Definitions.", steps: [
        { label: "Forms", body: "$v_p = \\omega/k$, $v_g = d\\omega/dk$." }
      ], answer: "Different in dispersive media" },
      { title: "Example 3 — Dispersion", prompt: "Visible light in glass.", steps: [
        { label: "Result", body: "$n$ varies with $\\lambda$ — prism separates colors." }
      ], answer: "Color separation" },
      { title: "Example 4 — Kramers-Kronig", prompt: "Statement.", steps: [
        { label: "Idea", body: "Real and imaginary parts of $\\varepsilon(\\omega)$ are related via Hilbert transforms (causality)." }
      ], answer: "$\\varepsilon_1$ and $\\varepsilon_2$ linked" }
    ],
    tasks: [
      { q: "$n$ for vacuum?", a: "$1$" },
      { q: "$n$ for water?", a: "$\\approx 1.33$" },
      { q: "Wavelength shortens in?", a: "Denser medium" },
      { q: "Speed slows in?", a: "Denser medium" },
      { q: "$v_g > c$ possible (anomalous dispersion)?", a: "Yes (no info > $c$)" },
      { q: "Plasma reflects below?", a: "Plasma frequency" },
      { q: "Skin depth in conductor?", a: "$\\delta = \\sqrt{2/(\\mu\\sigma\\omega)}$" },
      { q: "Brewster angle: reflected light?", a: "Fully polarized" },
      { q: "Permittivity tensor in anisotropic media?", a: "Yes" },
      { q: "Photonic crystal: band gaps in?", a: "Optical frequencies" }
    ]
  },
  {
    id: "lasers",
    title: "Lasers & Coherent Optics",
    level: "advanced",
    summary: "Stimulated emission, population inversion, threshold, gain.",
    examples: [
      { title: "Example 1 — Einstein A and B", prompt: "Relations.", steps: [
        { label: "Form", body: "$A_{21}$: spontaneous; $B_{12}, B_{21}$: stimulated." }
      ], answer: "Spontaneous + stimulated" },
      { title: "Example 2 — Population inversion", prompt: "Condition.", steps: [
        { label: "Required", body: "$N_2 > N_1$ for net gain." }
      ], answer: "$N_2 > N_1$" },
      { title: "Example 3 — Laser threshold", prompt: "Idea.", steps: [
        { label: "Condition", body: "Round-trip gain = losses." }
      ], answer: "Gain = loss" },
      { title: "Example 4 — Coherence length", prompt: "Definition.", steps: [
        { label: "Form", body: "$L_c = c\\tau_c \\sim c/\\Delta\\nu$." }
      ], answer: "$c/\\Delta\\nu$" }
    ],
    tasks: [
      { q: "Laser stands for?", a: "Light Amplification by Stimulated Emission of Radiation" },
      { q: "He-Ne laser wavelength?", a: "$632.8$ nm" },
      { q: "CO$_2$ laser wavelength?", a: "$10.6$ μm" },
      { q: "Mode-locked laser produces?", a: "Short pulses" },
      { q: "Q-switched laser produces?", a: "High peak power" },
      { q: "Fabry-Pérot cavity defines?", a: "Modes" },
      { q: "Three- vs four-level systems: easier inversion?", a: "Four-level" },
      { q: "Optical pumping uses?", a: "Light or current" },
      { q: "Diode lasers based on?", a: "p-n junction" },
      { q: "Spectroscopy benefits from laser?", a: "Narrow linewidth" }
    ]
  },
  {
    id: "quantum-optics",
    title: "Quantum Optics",
    level: "advanced",
    summary: "Coherent states, photon statistics, Jaynes-Cummings, squeezed light.",
    examples: [
      { title: "Example 1 — Coherent state", prompt: "Definition.", steps: [
        { label: "Eigenvalue", body: "$\\hat a |\\alpha\\rangle = \\alpha |\\alpha\\rangle$." },
        { label: "Photons", body: "Poisson distribution." }
      ], answer: "$|\\alpha\\rangle$" },
      { title: "Example 2 — Jaynes-Cummings", prompt: "Rabi oscillations.", steps: [
        { label: "Coupling", body: "Single atom + single cavity mode → vacuum Rabi." }
      ], answer: "Rabi oscillation" },
      { title: "Example 3 — Antibunching", prompt: "Non-classical light.", steps: [
        { label: "$g^{(2)}(0)$", body: "$< 1$ — sub-Poissonian." }
      ], answer: "Non-classical" },
      { title: "Example 4 — Squeezed", prompt: "Reduced fluctuations.", steps: [
        { label: "Form", body: "One quadrature has less noise than vacuum at cost of the other." }
      ], answer: "Below shot noise" }
    ],
    tasks: [
      { q: "Photon number variance for coherent state?", a: "Equal to mean" },
      { q: "Number state $|n\\rangle$: photon variance?", a: "$0$" },
      { q: "Thermal state photon statistics?", a: "Bose-Einstein" },
      { q: "HBT experiment measures?", a: "$g^{(2)}$" },
      { q: "Single photon source: $g^{(2)}(0) = ?$", a: "$0$" },
      { q: "Squeezed light used in?", a: "LIGO" },
      { q: "Optical parametric oscillator generates?", a: "Squeezed/entangled photons" },
      { q: "Cavity QED studies?", a: "Strong matter-light coupling" },
      { q: "EIT?", a: "Electromagnetically induced transparency" },
      { q: "Boson sampling problem?", a: "Quantum advantage candidate" }
    ]
  },
  {
    id: "amo",
    title: "Atomic, Molecular & Optical Physics",
    level: "advanced",
    summary: "Laser cooling, magneto-optical traps, BEC, ultracold matter.",
    examples: [
      { title: "Example 1 — Doppler cooling", prompt: "Mechanism.", steps: [
        { label: "Idea", body: "Counter-propagating lasers slightly red-detuned: moving atoms see Doppler-shifted photons resonantly, get cooled." }
      ], answer: "Red-detuned counter-prop" },
      { title: "Example 2 — Doppler limit", prompt: "Lowest temperature.", steps: [
        { label: "Form", body: "$T_D = \\hbar\\Gamma/(2 k_B)$." }
      ], answer: "$\\hbar\\Gamma/(2 k_B)$" },
      { title: "Example 3 — Magnetic trap", prompt: "Idea.", steps: [
        { label: "Mechanism", body: "Magnetic gradient creates potential well for atoms in low-field-seeking state." }
      ], answer: "Field minimum traps" },
      { title: "Example 4 — BEC critical T", prompt: "Form.", steps: [
        { label: "Result", body: "$T_c \\propto n^{2/3} \\hbar^2/(m k_B)$." }
      ], answer: "$T_c \\propto n^{2/3}$" }
    ],
    tasks: [
      { q: "Sub-Doppler cooling reaches?", a: "Below $T_D$" },
      { q: "Recoil limit?", a: "$T_R = \\hbar^2 k^2/(m k_B)$" },
      { q: "MOT acronym?", a: "Magneto-optical trap" },
      { q: "Optical lattice formed by?", a: "Interfering lasers" },
      { q: "BEC first observed?", a: "$1995$" },
      { q: "Fermionic superfluidity in atoms?", a: "Yes (Cooper-paired cold atoms)" },
      { q: "Feshbach resonance tunes?", a: "Interaction strength" },
      { q: "Atomic clock based on?", a: "Optical transition" },
      { q: "Cs clock SI second defined since?", a: "$1967$" },
      { q: "Rydberg atoms are?", a: "High-$n$ excited states" }
    ]
  },
  {
    id: "phase-transitions",
    title: "Phase Transitions & Critical Phenomena",
    level: "advanced",
    summary: "Landau theory, Ising, order parameter, scaling exponents, universality.",
    examples: [
      { title: "Example 1 — Curie point", prompt: "Ferromagnet.", steps: [
        { label: "Behavior", body: "Spontaneous magnetization vanishes at $T_c$." }
      ], answer: "$T_c$" },
      { title: "Example 2 — Landau expansion", prompt: "Free energy.", steps: [
        { label: "Form", body: "$F = a(T - T_c) m^2 + b m^4 + \\ldots$" }
      ], answer: "$F(m, T)$" },
      { title: "Example 3 — Mean-field $T_c$ (Ising)", prompt: "Result.", steps: [
        { label: "Value", body: "$k_B T_c = z J$ in mean field ($z =$ coordination number)." }
      ], answer: "Mean-field $T_c$" },
      { title: "Example 4 — Critical exponents", prompt: "Order parameter.", steps: [
        { label: "Form", body: "$m \\propto (T_c - T)^\\beta$, $\\beta \\approx 1/8$ in 2D Ising." }
      ], answer: "$m \\propto |T - T_c|^\\beta$" }
    ],
    tasks: [
      { q: "Universality class depends on?", a: "Dimension + symmetry" },
      { q: "First-order transition: latent heat?", a: "Yes" },
      { q: "Second-order transition: latent heat?", a: "No" },
      { q: "Susceptibility diverges at?", a: "Critical point" },
      { q: "Correlation length at $T_c$?", a: "Diverges" },
      { q: "Renormalization group fixed point ↔ ?", a: "Critical point" },
      { q: "Upper critical dimension Ising?", a: "$4$" },
      { q: "Liquid-gas critical point: universality?", a: "Ising 3D" },
      { q: "Mean-field predicts $\\beta$ = ?", a: "$1/2$" },
      { q: "Onsager solved exactly?", a: "$2$D Ising" }
    ]
  },
  {
    id: "nonequilibrium-statmech",
    title: "Non-equilibrium Statistical Mechanics",
    level: "advanced",
    summary: "Boltzmann equation, transport coefficients, fluctuation-dissipation.",
    examples: [
      { title: "Example 1 — Boltzmann equation", prompt: "Form.", steps: [
        { label: "Form", body: "$(\\partial_t + \\vec v \\cdot \\nabla_x + \\vec F \\cdot \\nabla_v) f = (\\partial f/\\partial t)_{coll}$." }
      ], answer: "Distribution evolution" },
      { title: "Example 2 — Relaxation time", prompt: "Approx.", steps: [
        { label: "Form", body: "$(\\partial f/\\partial t)_{coll} \\approx -(f - f_0)/\\tau$." }
      ], answer: "Relaxation approx" },
      { title: "Example 3 — Thermal conductivity", prompt: "Kinetic theory.", steps: [
        { label: "Order", body: "$\\kappa \\sim n v \\lambda c_V/m$." }
      ], answer: "$\\kappa$" },
      { title: "Example 4 — Fluctuation-dissipation", prompt: "Statement.", steps: [
        { label: "Idea", body: "Linear response $\\chi(\\omega)$ related to equilibrium fluctuations." }
      ], answer: "FDT" }
    ],
    tasks: [
      { q: "Boltzmann H-theorem: entropy?", a: "Non-decreasing" },
      { q: "Onsager reciprocal relations?", a: "$L_{ij} = L_{ji}$" },
      { q: "Drude conductivity?", a: "$\\sigma = ne^2 \\tau/m$" },
      { q: "Einstein-Smoluchowski (mobility-diffusion)?", a: "$D = \\mu k_B T$" },
      { q: "Wiedemann-Franz (metals)?", a: "$\\kappa/(\\sigma T) = L_0$" },
      { q: "Mean free path symbol?", a: "$\\lambda$" },
      { q: "Master equation for Markovian?", a: "Yes" },
      { q: "Detailed balance: equilibrium condition?", a: "Yes" },
      { q: "Fokker-Planck describes?", a: "Probability density of stochastic dynamics" },
      { q: "Jarzynski equality: $\\langle e^{-\\beta W} \\rangle = ?$", a: "$e^{-\\beta \\Delta F}$" }
    ]
  },
  {
    id: "superconductivity",
    title: "Superconductivity",
    level: "advanced",
    summary: "Meissner, Cooper pairs, BCS gap, Josephson effect.",
    examples: [
      { title: "Example 1 — Meissner effect", prompt: "Below $T_c$.", steps: [
        { label: "Result", body: "Expulsion of magnetic field (perfect diamagnet)." }
      ], answer: "$B = 0$ inside" },
      { title: "Example 2 — Coherence length", prompt: "Order parameter scale.", steps: [
        { label: "Order", body: "$\\xi \\sim \\hbar v_F / (\\pi \\Delta)$." }
      ], answer: "$\\sim 100$ nm in conventional SC" },
      { title: "Example 3 — BCS gap", prompt: "Cooper pair binding.", steps: [
        { label: "Order", body: "$2\\Delta(0) \\approx 3.5\\, k_B T_c$." }
      ], answer: "$\\sim 3.5 k_B T_c$" },
      { title: "Example 4 — Josephson freq", prompt: "Junction with DC voltage $V$.", steps: [
        { label: "AC current", body: "$\\omega = 2eV/\\hbar$." }
      ], answer: "$\\omega = 2eV/\\hbar$" }
    ],
    tasks: [
      { q: "Superconducting transition: discovered by?", a: "Onnes (1911)" },
      { q: "BCS theory year?", a: "$1957$" },
      { q: "Cooper pair charge?", a: "$2e$" },
      { q: "London penetration depth: typical?", a: "$\\sim 100$ nm" },
      { q: "Type-II SC allows?", a: "Magnetic vortices" },
      { q: "High-$T_c$ cuprates: typical $T_c$?", a: "$> 77$ K (LN$_2$)" },
      { q: "Iron-based SCs?", a: "Discovered $2008$" },
      { q: "Magnetic levitation uses?", a: "Meissner" },
      { q: "SQUID measures?", a: "Tiny magnetic fields" },
      { q: "Josephson DC effect: zero-voltage current up to?", a: "Critical current" }
    ]
  },
  {
    id: "quantum-hall-topological",
    title: "Quantum Hall & Topological Phases",
    level: "advanced",
    summary: "Integer and fractional QH, Landau levels, topological invariants.",
    examples: [
      { title: "Example 1 — Hall conductance", prompt: "Quantization.", steps: [
        { label: "Result", body: "$\\sigma_{xy} = \\nu e^2/h$, $\\nu$ integer (IQHE)." }
      ], answer: "Quantized" },
      { title: "Example 2 — Filling factor", prompt: "Definition.", steps: [
        { label: "Form", body: "$\\nu = n h/(eB)$." }
      ], answer: "$\\nu$" },
      { title: "Example 3 — Landau levels", prompt: "Energies.", steps: [
        { label: "Form", body: "$E_n = \\hbar\\omega_c(n + 1/2)$, $\\omega_c = eB/m$." }
      ], answer: "Discrete levels" },
      { title: "Example 4 — Topological invariant", prompt: "Chern number.", steps: [
        { label: "Idea", body: "Integer characterizing Berry curvature, robust to perturbations." }
      ], answer: "Chern number" }
    ],
    tasks: [
      { q: "FQHE filling $\\nu = 1/3$ discovered by?", a: "Tsui-Stormer ($1982$)" },
      { q: "Anyons exist where?", a: "FQHE edges/quasiparticles" },
      { q: "Topological insulator surface states?", a: "Conducting (bulk insulating)" },
      { q: "Quantum spin Hall effect: edge?", a: "Spin-momentum locked" },
      { q: "Berry phase generalizes?", a: "Geometric phase" },
      { q: "Chern insulator vs $\\mathbb{Z}_2$ insulator?", a: "Time-reversal symmetry" },
      { q: "Topological order: ground-state degeneracy on?", a: "Genus" },
      { q: "Majorana fermion in?", a: "Topological superconductor" },
      { q: "Weyl semimetal: nodes?", a: "Linear band crossings in 3D" },
      { q: "Nobel for topological phases?", a: "Thouless-Haldane-Kosterlitz ($2016$)" }
    ]
  },
  {
    id: "phonons",
    title: "Phonons & Lattice Dynamics",
    level: "advanced",
    summary: "Lattice vibrations, dispersion, Debye and Einstein models.",
    examples: [
      { title: "Example 1 — 1D chain dispersion", prompt: "Mass-spring chain.", steps: [
        { label: "Result", body: "$\\omega(q) = 2\\sqrt{K/m}|\\sin(qa/2)|$." }
      ], answer: "Sinusoidal" },
      { title: "Example 2 — Sound speed", prompt: "Long wavelength.", steps: [
        { label: "Result", body: "$v_s = a\\sqrt{K/m}$." }
      ], answer: "$a\\sqrt{K/m}$" },
      { title: "Example 3 — Debye temperature", prompt: "Order in metals.", steps: [
        { label: "Range", body: "$\\Theta_D \\sim 100$–$1000$ K depending on material." }
      ], answer: "$\\Theta_D$" },
      { title: "Example 4 — Specific heat (low T)", prompt: "Debye prediction.", steps: [
        { label: "Form", body: "$C_V \\propto T^3$ for $T \\ll \\Theta_D$." }
      ], answer: "$\\propto T^3$" }
    ],
    tasks: [
      { q: "Acoustic vs optical branches: differ at?", a: "$q \\to 0$" },
      { q: "Acoustic branch frequency at $q = 0$?", a: "$0$" },
      { q: "Optical branch frequency at $q = 0$?", a: "Finite" },
      { q: "Brillouin zone is?", a: "Wigner-Seitz of reciprocal lattice" },
      { q: "Bose-Einstein for phonons?", a: "Yes" },
      { q: "Phonons are?", a: "Quanta of lattice vibrations" },
      { q: "Anharmonicity gives?", a: "Thermal expansion" },
      { q: "Umklapp scattering?", a: "Phonon momentum + $\\vec G$" },
      { q: "Sound speed in steel?", a: "$\\sim 5000$ m/s" },
      { q: "Cooper pairs from electron-phonon coupling?", a: "Yes (BCS)" }
    ]
  },
  {
    id: "stellar-evolution",
    title: "Stellar Structure & Evolution",
    level: "advanced",
    summary: "Main sequence, HR diagram, red giants, white dwarfs.",
    examples: [
      { title: "Example 1 — Main-sequence lifetime", prompt: "Scaling.", steps: [
        { label: "Result", body: "$t \\propto M/L \\propto M^{-2.5}$ for $L \\propto M^{3.5}$." }
      ], answer: "$\\propto M^{-2.5}$" },
      { title: "Example 2 — HR diagram", prompt: "Axes.", steps: [
        { label: "Setup", body: "$\\log L$ vs $T_{eff}$ (or color)." }
      ], answer: "Luminosity vs temperature" },
      { title: "Example 3 — Sun's fate", prompt: "Trajectory.", steps: [
        { label: "Sequence", body: "Main seq → red giant → planetary nebula → white dwarf." }
      ], answer: "Eventually WD" },
      { title: "Example 4 — Massive star end", prompt: "Sequence.", steps: [
        { label: "Trajectory", body: "Red supergiant → core-collapse SN → neutron star or BH." }
      ], answer: "Supernova" }
    ],
    tasks: [
      { q: "Main-sequence H burning to?", a: "He" },
      { q: "Sun's age?", a: "$\\sim 4.6$ Gyr" },
      { q: "Sun's main-sequence lifetime?", a: "$\\sim 10$ Gyr" },
      { q: "Heavier stars burn faster?", a: "Yes" },
      { q: "Type II supernova: collapse of?", a: "Iron core" },
      { q: "Type Ia: explosion of?", a: "White dwarf (Chandrasekhar)" },
      { q: "Schönberg-Chandrasekhar limit?", a: "Inert core mass fraction" },
      { q: "Helium flash occurs at?", a: "RGB tip (low-mass stars)" },
      { q: "Brown dwarfs vs stars?", a: "Don't sustain H fusion" },
      { q: "Globular cluster ages from?", a: "MS turnoff" }
    ]
  },
  {
    id: "stellar-nucleosynthesis",
    title: "Stellar Nucleosynthesis",
    level: "advanced",
    summary: "pp chain, CNO cycle, s-process, r-process, origin of heavy elements.",
    examples: [
      { title: "Example 1 — pp chain", prompt: "Net reaction.", steps: [
        { label: "Net", body: "$4\\,{}^1\\text{H} \\to {}^4\\text{He} + 2 e^+ + 2 \\nu + 26.7$ MeV." }
      ], answer: "$26.7$ MeV" },
      { title: "Example 2 — CNO temperature", prompt: "Dominant above.", steps: [
        { label: "Threshold", body: "$T \\gtrsim 2 \\times 10^7$ K (heavier stars)." }
      ], answer: "$\\gtrsim 17$ MK" },
      { title: "Example 3 — r-process", prompt: "Site.", steps: [
        { label: "Where", body: "Neutron star mergers (and core-collapse SNe)." }
      ], answer: "NS mergers" },
      { title: "Example 4 — Iron peak", prompt: "Why elements pile up.", steps: [
        { label: "Reason", body: "$^{56}$Fe is most tightly bound — endpoint of stellar fusion." }
      ], answer: "Most bound nucleus" }
    ],
    tasks: [
      { q: "Helium produced in?", a: "Big Bang + stars" },
      { q: "Carbon produced by?", a: "Triple-alpha" },
      { q: "Oxygen produced via?", a: "Alpha capture on C" },
      { q: "s-process: slow neutron capture in?", a: "AGB stars" },
      { q: "Heaviest naturally occurring?", a: "U (and trace heavier)" },
      { q: "Solar neutrino problem solved by?", a: "Neutrino oscillations" },
      { q: "Sun's energy from?", a: "pp chain primarily" },
      { q: "Gold synthesis?", a: "Mostly r-process (NS mergers)" },
      { q: "BBN produces?", a: "H, He, traces of Li" },
      { q: "Metals in astronomy mean?", a: "Anything heavier than He" }
    ]
  },
  {
    id: "compact-objects",
    title: "Compact Objects",
    level: "advanced",
    summary: "White dwarfs, neutron stars, black holes — physics of extremes.",
    examples: [
      { title: "Example 1 — Chandrasekhar mass", prompt: "WD max mass.", steps: [
        { label: "Value", body: "$\\approx 1.4\\, M_\\odot$." }
      ], answer: "$1.4 M_\\odot$" },
      { title: "Example 2 — NS density", prompt: "Order.", steps: [
        { label: "Value", body: "$\\sim 10^{17}$ kg/m³ (nuclear density)." }
      ], answer: "Nuclear density" },
      { title: "Example 3 — Hawking temperature", prompt: "BH of mass $M$.", steps: [
        { label: "Form", body: "$T = \\hbar c^3 / (8\\pi G M k_B)$." }
      ], answer: "$T \\propto 1/M$" },
      { title: "Example 4 — BH entropy", prompt: "Bekenstein-Hawking.", steps: [
        { label: "Form", body: "$S = k_B A/(4 \\ell_P^2)$." }
      ], answer: "$S \\propto A$" }
    ],
    tasks: [
      { q: "WD supported by?", a: "Electron degeneracy" },
      { q: "NS supported by?", a: "Neutron degeneracy + strong force" },
      { q: "TOV limit (NS max)?", a: "$\\sim 2$–$3 M_\\odot$" },
      { q: "Stellar BH minimum mass?", a: "$\\sim 3 M_\\odot$" },
      { q: "Supermassive BH at galaxy center?", a: "Yes" },
      { q: "Sgr A* mass?", a: "$\\sim 4 \\times 10^6 M_\\odot$" },
      { q: "Pulsar = rotating?", a: "Neutron star" },
      { q: "Magnetar?", a: "Highly magnetic NS" },
      { q: "BH no-hair theorem?", a: "Mass, charge, spin only" },
      { q: "Penrose process extracts energy from?", a: "Rotating BH ergosphere" }
    ]
  },
  {
    id: "galactic-dynamics",
    title: "Galactic Dynamics",
    level: "advanced",
    summary: "Rotation curves, density-wave theory, virial mass, dark matter.",
    examples: [
      { title: "Example 1 — Rotation curve", prompt: "Outer galaxies.", steps: [
        { label: "Result", body: "Flat (not Keplerian), implying dark matter halo." }
      ], answer: "Flat → dark matter" },
      { title: "Example 2 — Virial theorem", prompt: "$\\langle T \\rangle = -\\tfrac{1}{2}\\langle V \\rangle$.", steps: [
        { label: "Use", body: "Estimate cluster masses." }
      ], answer: "Mass estimator" },
      { title: "Example 3 — Spiral arms", prompt: "Density-wave theory.", steps: [
        { label: "Idea", body: "Arms are wave patterns, not material structures." }
      ], answer: "Waves, not material" },
      { title: "Example 4 — Halo mass", prompt: "From rotation $v$.", steps: [
        { label: "Estimate", body: "$M(r) \\sim v^2 r/G$." }
      ], answer: "$\\sim v^2 r/G$" }
    ],
    tasks: [
      { q: "Milky Way DM fraction?", a: "Majority of mass" },
      { q: "Local group dominant galaxies?", a: "Milky Way + Andromeda" },
      { q: "Hubble sequence: spiral vs?", a: "Elliptical, irregular" },
      { q: "AGN powered by?", a: "Accretion onto SMBH" },
      { q: "Tully-Fisher: $L \\propto$?", a: "$v^4$ (spirals)" },
      { q: "Faber-Jackson: $\\sigma$ for ellipticals?", a: "Velocity dispersion" },
      { q: "MOND alternative to?", a: "Dark matter" },
      { q: "Bullet Cluster shows?", a: "Mass-light offset → DM" },
      { q: "Globular clusters orbit?", a: "Galactic halo" },
      { q: "Galaxy merger product example?", a: "Antennae" }
    ]
  },
  {
    id: "bbn-cmb-inflation",
    title: "BBN, CMB & Inflation",
    level: "advanced",
    summary: "Big Bang nucleosynthesis, cosmic microwave background, inflationary cosmology.",
    examples: [
      { title: "Example 1 — BBN ratio", prompt: "Primordial He/H.", steps: [
        { label: "Value", body: "$Y_p \\approx 0.245$ by mass." }
      ], answer: "$\\sim 25\\%$ He" },
      { title: "Example 2 — CMB temperature", prompt: "Today.", steps: [
        { label: "Value", body: "$\\approx 2.725$ K." }
      ], answer: "$2.725$ K" },
      { title: "Example 3 — Acoustic peaks", prompt: "Origin.", steps: [
        { label: "Cause", body: "Sound waves in photon-baryon plasma before recombination." }
      ], answer: "Plasma oscillations" },
      { title: "Example 4 — Inflation e-folds", prompt: "Typical number.", steps: [
        { label: "Order", body: "$\\sim 60$ e-folds to solve horizon and flatness." }
      ], answer: "$\\sim 60$" }
    ],
    tasks: [
      { q: "BBN occurred at?", a: "$\\sim 3$ min after Big Bang" },
      { q: "Recombination at?", a: "$z \\sim 1100$, $T \\sim 3000$ K" },
      { q: "CMB discovered by?", a: "Penzias-Wilson ($1965$)" },
      { q: "CMB anisotropy at level?", a: "$\\sim 10^{-5}$" },
      { q: "Inflation solves problems?", a: "Horizon, flatness, monopole" },
      { q: "Slow-roll: $\\epsilon, \\eta$ small means?", a: "Quasi-de Sitter" },
      { q: "Quantum fluctuations seed?", a: "Structure" },
      { q: "Lithium problem?", a: "$^7$Li abundance" },
      { q: "Reionization at $z \\sim$?", a: "$6$–$10$" },
      { q: "Sachs-Wolfe effect causes?", a: "Large-scale CMB anisotropy" }
    ]
  },
  {
    id: "gravitational-waves",
    title: "Gravitational Waves",
    level: "advanced",
    summary: "Quadrupole formula, binary mergers, LIGO detection.",
    examples: [
      { title: "Example 1 — Strain", prompt: "Definition.", steps: [
        { label: "Form", body: "$h \\sim \\Delta L/L$, tiny: $\\sim 10^{-21}$." }
      ], answer: "$10^{-21}$" },
      { title: "Example 2 — Quadrupole power", prompt: "Form.", steps: [
        { label: "Form", body: "$P = (G/5c^5) \\langle \\dddot Q_{ij} \\dddot Q^{ij} \\rangle$." }
      ], answer: "Quadrupole formula" },
      { title: "Example 3 — Chirp", prompt: "Binary inspiral.", steps: [
        { label: "Frequency", body: "Increases as $f \\propto (t_c - t)^{-3/8}$ before merger." }
      ], answer: "Chirp signal" },
      { title: "Example 4 — Energy", prompt: "GW150914 emitted energy.", steps: [
        { label: "Order", body: "$\\sim 3 M_\\odot c^2$ over $\\sim 0.2$ s." }
      ], answer: "$\\sim 3 M_\\odot c^2$" }
    ],
    tasks: [
      { q: "GW travel speed?", a: "$c$" },
      { q: "First direct detection?", a: "$2015$ (GW150914)" },
      { q: "LIGO uses?", a: "Michelson interferometer" },
      { q: "Polarization states of GW?", a: "$2$ ($+, \\times$)" },
      { q: "Source frequency band for LIGO?", a: "$\\sim 10$–$1000$ Hz" },
      { q: "LISA targets?", a: "mHz band (space)" },
      { q: "Pulsar timing arrays target?", a: "nHz (supermassive BH)" },
      { q: "Binary NS merger seen with EM?", a: "GW170817" },
      { q: "Stochastic background sources?", a: "Inflation, cosmic strings, mergers" },
      { q: "Nobel for GW detection?", a: "$2017$" }
    ]
  },
  {
    id: "high-energy-astrophysics",
    title: "High-Energy Astrophysics",
    level: "advanced",
    summary: "AGN, jets, gamma-ray bursts, cosmic rays.",
    examples: [
      { title: "Example 1 — GRB total energy", prompt: "Beamed energy.", steps: [
        { label: "Order", body: "$\\sim 10^{52}$ erg (isotropic), $\\sim 10^{50}$ beamed." }
      ], answer: "$\\sim 10^{52}$ erg iso" },
      { title: "Example 2 — Cosmic ray spectrum", prompt: "Power law.", steps: [
        { label: "Form", body: "$N(E) \\propto E^{-2.7}$ up to knee." }
      ], answer: "$\\propto E^{-2.7}$" },
      { title: "Example 3 — Relativistic jet", prompt: "AGN/blazar.", steps: [
        { label: "Cause", body: "Magnetically accelerated outflow from accreting BH." }
      ], answer: "Magnetic" },
      { title: "Example 4 — Synchrotron", prompt: "Charged particles in $B$.", steps: [
        { label: "Spectrum", body: "Power-law radiation peaking $\\propto \\gamma^2 B$." }
      ], answer: "Synchrotron emission" }
    ],
    tasks: [
      { q: "AGN luminosity range?", a: "Up to $10^{47}$ erg/s" },
      { q: "Blazar: jet pointed at?", a: "Observer" },
      { q: "GRBs (long): collapsars from?", a: "Massive star collapse" },
      { q: "GRBs (short): mergers of?", a: "Compact binaries" },
      { q: "UHECR origin?", a: "Extragalactic (likely AGN)" },
      { q: "GZK cutoff at?", a: "$\\sim 5 \\times 10^{19}$ eV" },
      { q: "TeV gamma rays from?", a: "Pulsars, AGN, SNRs" },
      { q: "X-ray binaries: NS or BH?", a: "Either" },
      { q: "Active galaxies host?", a: "Accreting SMBH" },
      { q: "IceCube detects?", a: "TeV-PeV neutrinos" }
    ]
  },
  {
    id: "math-methods-physics",
    title: "Mathematical Methods for Physics",
    level: "advanced",
    summary: "Special functions, Green's functions, contour integration, asymptotic methods.",
    examples: [
      { title: "Example 1 — Bessel functions", prompt: "Where they appear.", steps: [
        { label: "Use", body: "Radial part of wave/heat equation in cylindrical coords." }
      ], answer: "Cylindrical solutions" },
      { title: "Example 2 — Green's function", prompt: "Heat equation 1D.", steps: [
        { label: "Form", body: "$G(x, t) = (4\\pi D t)^{-1/2} e^{-x^2/(4Dt)}$." }
      ], answer: "Gaussian kernel" },
      { title: "Example 3 — Contour integral", prompt: "$\\int_{-\\infty}^\\infty \\dfrac{dx}{1 + x^2}$.", steps: [
        { label: "Close upper", body: "Residue at $x = i$ gives $\\pi$." }
      ], answer: "$\\pi$" },
      { title: "Example 4 — Saddle point", prompt: "Method.", steps: [
        { label: "Idea", body: "Approximate $\\int e^{i S(x)/\\hbar}$ around stationary $S$." }
      ], answer: "Stationary phase" }
    ],
    tasks: [
      { q: "Legendre polynomials orthogonal on?", a: "$[-1, 1]$" },
      { q: "Hermite polynomials appear in?", a: "QM harmonic oscillator" },
      { q: "Laguerre polynomials in?", a: "Hydrogen radial part" },
      { q: "Spherical harmonics orthogonal on?", a: "Sphere" },
      { q: "Sturm-Liouville theory: eigenvalues?", a: "Discrete, real" },
      { q: "Method of images: applies to?", a: "Boundary-value problems" },
      { q: "Dimensional analysis: 3 variables, 2 dimensions ⇒?", a: "$1$ dimensionless group" },
      { q: "WKB approximation valid for?", a: "Slowly varying potential" },
      { q: "Variational principle bounds?", a: "Ground state above" },
      { q: "Laplace transform $\\mathcal{L}\\{e^{at}\\}$?", a: "$1/(s - a)$" }
    ]
  },
  {
    id: "group-theory-physics",
    title: "Group Theory in Physics",
    level: "advanced",
    summary: "Continuous and discrete symmetry groups in physical applications.",
    examples: [
      { title: "Example 1 — SU(2) generators", prompt: "Pauli matrices.", steps: [
        { label: "Generators", body: "$T_i = \\sigma_i/2$." }
      ], answer: "$\\sigma_i/2$" },
      { title: "Example 2 — SU(3) Gell-Mann", prompt: "Number of generators.", steps: [
        { label: "Count", body: "$3^2 - 1 = 8$." }
      ], answer: "$8$ (Gell-Mann)" },
      { title: "Example 3 — Character table", prompt: "Use.", steps: [
        { label: "Purpose", body: "Decompose representations of finite groups." }
      ], answer: "Decomposition tool" },
      { title: "Example 4 — Selection rules", prompt: "QM transitions.", steps: [
        { label: "Idea", body: "Symmetry forbids transitions whose matrix element vanishes by group theory." }
      ], answer: "Symmetry forbids transitions" }
    ],
    tasks: [
      { q: "Symmetry group of equilateral triangle?", a: "$D_3$" },
      { q: "Symmetry group of cube (rotations)?", a: "$S_4$ (order $24$)" },
      { q: "Crystallographic point groups in 3D?", a: "$32$" },
      { q: "Bravais lattices in 3D?", a: "$14$" },
      { q: "Space groups in 3D?", a: "$230$" },
      { q: "$SO(3)$ irreducible reps labeled by?", a: "Integer $\\ell$" },
      { q: "$SU(2)$ irreducible reps labeled by?", a: "Half-integer $j$" },
      { q: "Standard Model gauge group?", a: "$SU(3) \\times SU(2) \\times U(1)$" },
      { q: "GUT example?", a: "$SU(5)$" },
      { q: "Lorentz group double cover?", a: "$SL(2, \\mathbb{C})$" }
    ]
  },
  {
    id: "computational-physics",
    title: "Computational Physics",
    level: "advanced",
    summary: "Monte Carlo, molecular dynamics, lattice methods.",
    examples: [
      { title: "Example 1 — MC integration", prompt: "Estimate $\\int f$ by random samples.", steps: [
        { label: "Idea", body: "Sample $x_i$ uniformly, $\\int f \\approx \\bar f \\cdot V$." }
      ], answer: "Random sampling" },
      { title: "Example 2 — Metropolis", prompt: "Sampling Boltzmann distribution.", steps: [
        { label: "Step", body: "Propose, accept w/ probability $\\min(1, e^{-\\beta \\Delta E})$." }
      ], answer: "Metropolis-Hastings" },
      { title: "Example 3 — MD step", prompt: "Verlet update.", steps: [
        { label: "Form", body: "$x_{n+1} = 2x_n - x_{n-1} + (\\Delta t)^2 a_n$." }
      ], answer: "Verlet" },
      { title: "Example 4 — Lattice spacing", prompt: "Why discretize?", steps: [
        { label: "Trade-off", body: "Smaller $a$: more accurate, more compute." }
      ], answer: "$a$ vs cost" }
    ],
    tasks: [
      { q: "Monte Carlo error scales as?", a: "$1/\\sqrt N$" },
      { q: "Symplectic integrators preserve?", a: "Phase volume" },
      { q: "Runge-Kutta-4 error?", a: "$O(h^4)$" },
      { q: "FFT complexity?", a: "$O(N \\log N)$" },
      { q: "Lattice QCD computes?", a: "Hadron properties" },
      { q: "Importance sampling reduces?", a: "Variance" },
      { q: "Detailed balance ensures?", a: "Correct equilibrium" },
      { q: "Multigrid methods speed up?", a: "Elliptic PDE solvers" },
      { q: "DFT in chemistry/physics?", a: "Density Functional Theory" },
      { q: "Tensor networks useful for?", a: "Many-body QM" }
    ]
  },
  {
    id: "soft-matter-biophysics",
    title: "Soft Matter & Biophysics",
    level: "advanced",
    summary: "Polymers, membranes, motors, protein folding.",
    examples: [
      { title: "Example 1 — Polymer size", prompt: "Random walk model.", steps: [
        { label: "RMS end-to-end", body: "$\\langle R^2 \\rangle = N b^2$." }
      ], answer: "$\\propto \\sqrt N$" },
      { title: "Example 2 — Membrane bending", prompt: "Helfrich energy.", steps: [
        { label: "Form", body: "$E = \\tfrac{\\kappa}{2} \\int (2H)^2\\,dA$." }
      ], answer: "Curvature elastic" },
      { title: "Example 3 — Motor force", prompt: "Kinesin step.", steps: [
        { label: "Order", body: "$\\sim 5$ pN over $8$ nm." }
      ], answer: "$\\sim 5$ pN" },
      { title: "Example 4 — Protein folding", prompt: "Levinthal paradox.", steps: [
        { label: "Resolution", body: "Energy landscape funnels to native state, not random search." }
      ], answer: "Funneled landscape" }
    ],
    tasks: [
      { q: "Persistence length for DNA?", a: "$\\sim 50$ nm" },
      { q: "Worm-like chain model used for?", a: "Stiff polymers" },
      { q: "Flory exponent in good solvent?", a: "$\\nu \\approx 3/5$" },
      { q: "$\\theta$-solvent: $\\nu$?", a: "$1/2$" },
      { q: "Cell membranes are?", a: "Lipid bilayers" },
      { q: "ATP hydrolysis energy?", a: "$\\sim 0.5$ eV" },
      { q: "Brownian ratchet?", a: "Asymmetric noise → directed motion" },
      { q: "Glass transition: crystallizes?", a: "No (frozen liquid)" },
      { q: "Liquid crystals have orientational order?", a: "Yes" },
      { q: "Active matter: energy injection at?", a: "Microscopic scale" }
    ]
  }
];
