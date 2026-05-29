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
      { q: "Distance covered in Q1?", a: "$24$ m" },
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
      { q: "Magnitude of sum from Q4?", a: "$\\sqrt 2$" },
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
      { title: "Example 3 — Magnification", prompt: "From Ex 2.", steps: [
        { label: "Compute", body: "$m = -0.5$." }
      ], answer: "$-0.5$" },
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
  }
];
