// Mechanical Engineering curriculum — statics through thermo and fluids.
window.CONTENT = window.CONTENT || {};
window.CONTENT.me = [
  {
    id: "statics-equilibrium",
    title: "Statics — Equilibrium of Forces",
    level: "basic",
    summary: "Body at rest. Sum of forces = 0. Sum of moments = 0. Free body diagrams.",
    examples: [
      { title: "Example 1 — Concurrent forces", prompt: "Three forces meet at a point: $F_1 = 50$ N east, $F_2 = 30$ N north. Find $F_3$ to balance.", steps: [
        { label: "Sum of forces = 0", body: "$F_3$ must cancel resultant of $F_1, F_2$." },
        { label: "Resultant magnitude", body: "$\\sqrt{50^2 + 30^2} \\approx 58.3$ N." },
        { label: "Direction", body: "$F_3$ points southwest at $\\arctan(30/50) \\approx 30.96°$ south of west." }
      ], answer: "$\\approx 58.3$ N, southwest, $\\approx 31°$ south of west" },
      { title: "Example 2 — Beam on two supports", prompt: "Beam $4$ m long, supported at both ends. Point load $200$ N at $1$ m from left end. Find reactions.", steps: [
        { label: "Moments about left support", body: "$R_B \\cdot 4 = 200 \\cdot 1$ → $R_B = 50$ N." },
        { label: "Sum of vertical forces", body: "$R_A + R_B = 200$ → $R_A = 150$ N." }
      ], answer: "$R_A = 150$ N, $R_B = 50$ N" },
      { title: "Example 3 — Inclined plane", prompt: "$10$ kg block on $30°$ frictionless incline. Force along incline to hold it?", steps: [
        { label: "Weight component", body: "$W\\sin 30° = 98 \\cdot 0.5 = 49$ N." },
        { label: "Applied force", body: "$F = 49$ N up the incline." }
      ], answer: "$49$ N up the incline" }
    ],
    tasks: [
      { q: "Static equilibrium condition for forces?", a: "$\\sum \\vec F = 0$" },
      { q: "Equilibrium for moments?", a: "$\\sum \\vec M = 0$" },
      { q: "Beam loaded at center, two end supports. Each reaction = ?", a: "Half the load" },
      { q: "Force to hold $5$ kg on $45°$ frictionless slope?", a: "$\\approx 34.7$ N" },
      { q: "Moment of $20$ N force at $0.3$ m perpendicular?", a: "$6$ N·m" },
      { q: "Couple is what?", a: "Two equal and opposite forces, separated — pure moment" },
      { q: "Free body diagram excludes?", a: "Internal forces of the body" },
      { q: "Two-force member: forces are?", a: "Equal, opposite, collinear" },
      { q: "Number of equilibrium equations in 2D?", a: "$3$ ($\\sum F_x, \\sum F_y, \\sum M$)" },
      { q: "Number of equilibrium equations in 3D?", a: "$6$" }
    ]
  },
  {
    id: "trusses",
    title: "Trusses — Method of Joints",
    level: "intermediate",
    summary: "Pin-connected straight members. Each member in pure tension or compression. Solve joint by joint.",
    examples: [
      { title: "Example 1 — Simple triangle truss", prompt: "Equilateral triangle ABC, pin at A, roller at B. Load $P = 1000$ N down at C. Find member forces.", steps: [
        { label: "Reactions", body: "By symmetry of geometry (if equilateral and C above midpoint of AB), $R_A = R_B = 500$ N upward." },
        { label: "Joint A", body: "$F_{AC}\\sin 60° = 500$ → $F_{AC} = 577$ N (compression). $F_{AB} = F_{AC}\\cos 60° = 289$ N (tension)." }
      ], answer: "$F_{AC} = F_{BC} \\approx 577$ N (C), $F_{AB} \\approx 289$ N (T)" },
      { title: "Example 2 — Zero-force member identification", prompt: "Joint connects only two non-collinear members and no external load or reaction. Forces?", steps: [
        { label: "Equilibrium at joint", body: "Each member force has unique direction — only way for sum to be zero is both forces = 0." }
      ], answer: "Both are zero-force members" },
      { title: "Example 3 — Determinacy", prompt: "Truss with $j$ joints and $m$ members. When is it statically determinate?", steps: [
        { label: "Condition", body: "$m + r = 2j$ where $r$ is number of reaction components (2D)." }
      ], answer: "$m + r = 2j$" }
    ],
    tasks: [
      { q: "Truss member can carry which forces?", a: "Axial (tension or compression) only" },
      { q: "Method of joints uses how many equations per joint (2D)?", a: "$2$" },
      { q: "Method of sections uses how many?", a: "$3$" },
      { q: "Zero-force member at unloaded joint with two non-collinear members?", a: "Both zero" },
      { q: "$10$ joints, $4$ reactions. Determinate if $m = ?$", a: "$16$" },
      { q: "Three members meet at unloaded joint, two collinear. Third member?", a: "Zero-force" },
      { q: "Trusses are usually triangulated because?", a: "Triangles are geometrically stable" },
      { q: "Member in compression must check ____.", a: "Buckling" },
      { q: "Pinned joint allows what?", a: "Rotation only (no moment transfer)" },
      { q: "Truss bridge example?", a: "Pratt, Warren, Howe (any one)" }
    ]
  },
  {
    id: "stress-strain",
    title: "Stress, Strain, Hooke's Law",
    level: "intermediate",
    summary: "Axial stress $\\sigma = F/A$. Strain $\\epsilon = \\Delta L/L$. Young's modulus $E$. Poisson's ratio.",
    examples: [
      { title: "Example 1 — Stress in rod", prompt: "Steel rod, area $200$ mm², carries $40$ kN. Stress?", steps: [
        { label: "Convert", body: "$A = 200 \\times 10^{-6}$ m² = $2\\times 10^{-4}$ m²." },
        { label: "Stress", body: "$\\sigma = 40000/2\\times 10^{-4} = 2\\times 10^8$ Pa = $200$ MPa." }
      ], answer: "$\\sigma = 200$ MPa" },
      { title: "Example 2 — Elongation", prompt: "Same rod, length $2$ m, $E = 200$ GPa. Elongation?", steps: [
        { label: "Strain", body: "$\\epsilon = \\sigma/E = 200/200000 = 10^{-3}$." },
        { label: "Elongation", body: "$\\Delta L = \\epsilon L = 10^{-3} \\cdot 2 = 0.002$ m = $2$ mm." }
      ], answer: "$2$ mm" },
      { title: "Example 3 — Factor of safety", prompt: "Yield stress $250$ MPa, working stress $100$ MPa. FoS?", steps: [
        { label: "Define", body: "FoS = yield / working = $2.5$." }
      ], answer: "FoS = $2.5$" }
    ],
    tasks: [
      { q: "$\\sigma$ units?", a: "Pa (= N/m²)" },
      { q: "Strain has units?", a: "Dimensionless" },
      { q: "$E$ of steel approx?", a: "$200$ GPa" },
      { q: "$E$ of aluminum approx?", a: "$70$ GPa" },
      { q: "Hooke's law: $\\sigma = ?$", a: "$E\\epsilon$" },
      { q: "Poisson's ratio for most metals?", a: "$\\approx 0.3$" },
      { q: "Shear modulus $G$ relation to $E$?", a: "$G = E/(2(1+\\nu))$" },
      { q: "Bulk modulus $K$ relation to $E$?", a: "$K = E/(3(1-2\\nu))$" },
      { q: "True strain vs engineering strain at small strain?", a: "Approximately equal" },
      { q: "Yield is the start of?", a: "Permanent (plastic) deformation" }
    ]
  },
  {
    id: "beam-bending",
    title: "Beam Bending",
    level: "intermediate",
    summary: "Flexure formula $\\sigma = My/I$. Deflection from EI y'' = M. Cantilevers, simply supported beams.",
    examples: [
      { title: "Example 1 — Max bending stress in rectangle", prompt: "Beam $b = 50$ mm wide, $h = 100$ mm deep, $M = 5$ kN·m. Max stress?", steps: [
        { label: "Moment of inertia", body: "$I = bh^3/12 = 50 \\cdot 10^6/12 \\approx 4.17\\times 10^6$ mm⁴ = $4.17\\times 10^{-6}$ m⁴." },
        { label: "Max stress at extreme fiber", body: "$y = h/2 = 0.05$ m. $\\sigma = My/I = 5000 \\cdot 0.05/4.17\\times 10^{-6} = 60$ MPa." }
      ], answer: "$\\approx 60$ MPa" },
      { title: "Example 2 — Cantilever tip deflection", prompt: "Cantilever, length $L = 2$ m, point load $P = 1$ kN at tip, $EI = 5\\times 10^5$ N·m². Tip deflection?", steps: [
        { label: "Formula", body: "$\\delta = PL^3/(3EI)$." },
        { label: "Plug", body: "$\\delta = 1000 \\cdot 8/(3 \\cdot 500000) \\approx 5.33$ mm." }
      ], answer: "$\\approx 5.33$ mm" },
      { title: "Example 3 — Simply supported center load", prompt: "Beam $L = 4$ m, central point load $P = 10$ kN, $EI = 10^7$ N·m². Max deflection?", steps: [
        { label: "Formula", body: "$\\delta = PL^3/(48EI)$." },
        { label: "Plug", body: "$\\delta = 10000 \\cdot 64/(48 \\cdot 10^7) \\approx 1.33$ mm." }
      ], answer: "$\\approx 1.33$ mm" }
    ],
    tasks: [
      { q: "Flexure formula?", a: "$\\sigma = My/I$" },
      { q: "$I$ for rectangle?", a: "$bh^3/12$" },
      { q: "$I$ for solid circle?", a: "$\\pi r^4/4$" },
      { q: "$I$ for thin tube radius $r$, thickness $t$?", a: "$\\approx \\pi r^3 t$" },
      { q: "Where is bending stress zero in beam?", a: "Neutral axis" },
      { q: "Cantilever distributed load $w$, tip deflection?", a: "$wL^4/(8EI)$" },
      { q: "Simply supported UDL, max deflection at center?", a: "$5wL^4/(384EI)$" },
      { q: "Shear force = ____ of bending moment.", a: "Derivative" },
      { q: "Distributed load = ____ of shear force.", a: "Negative derivative" },
      { q: "Tall, narrow section: orient how for max stiffness?", a: "Deep dimension vertical (bigger $I$)" }
    ]
  },
  {
    id: "dynamics-kinematics",
    title: "Dynamics — Kinematics & Newton's Laws",
    level: "basic",
    summary: "Particle motion. $\\vec F = m\\vec a$. Projectile motion. Circular motion.",
    examples: [
      { title: "Example 1 — Free fall", prompt: "Drop from $20$ m. Time to hit ground? Use $g = 9.81$ m/s².", steps: [
        { label: "Kinematics", body: "$h = \\tfrac{1}{2}gt^2$ → $t = \\sqrt{2h/g}$." },
        { label: "Compute", body: "$t = \\sqrt{40/9.81} \\approx 2.02$ s." }
      ], answer: "$\\approx 2.02$ s" },
      { title: "Example 2 — Projectile range", prompt: "Launch at $30$ m/s, $45°$. Range on flat ground?", steps: [
        { label: "Formula", body: "$R = v^2 \\sin(2\\theta)/g$." },
        { label: "Compute", body: "$R = 900 \\cdot 1/9.81 \\approx 91.7$ m." }
      ], answer: "$\\approx 91.7$ m" },
      { title: "Example 3 — Centripetal force", prompt: "$1500$ kg car turning at $20$ m/s on $100$ m radius. Centripetal force?", steps: [
        { label: "Formula", body: "$F = mv^2/r$." },
        { label: "Compute", body: "$F = 1500 \\cdot 400/100 = 6000$ N." }
      ], answer: "$6000$ N" }
    ],
    tasks: [
      { q: "$\\vec F = ?$", a: "$m\\vec a$" },
      { q: "Drop from rest, distance after $3$ s?", a: "$\\approx 44.1$ m" },
      { q: "Constant accel: $v^2 = ?$", a: "$v_0^2 + 2a(x - x_0)$" },
      { q: "Projectile time of flight from level ground, $v_0 = 20$ m/s at $30°$?", a: "$\\approx 2.04$ s" },
      { q: "Max height of projectile $v_0\\sin\\theta$?", a: "$(v_0\\sin\\theta)^2/(2g)$" },
      { q: "Centripetal accel $v = 10$ m/s, $r = 5$ m?", a: "$20$ m/s²" },
      { q: "$1$ rev = ___ rad?", a: "$2\\pi$" },
      { q: "Angular vel of Earth?", a: "$\\approx 7.27\\times 10^{-5}$ rad/s" },
      { q: "Tangential vel from $\\omega$ and $r$?", a: "$v = \\omega r$" },
      { q: "Newton's 3rd law restated?", a: "Equal and opposite reaction forces" }
    ]
  },
  {
    id: "work-energy-machines",
    title: "Work, Energy, Power, Machines",
    level: "basic",
    summary: "Work-energy theorem. Efficiency. Simple machines: lever, pulley, inclined plane.",
    examples: [
      { title: "Example 1 — Work by constant force", prompt: "Push $50$ N over $10$ m. Work?", steps: [
        { label: "Formula", body: "$W = Fd\\cos\\theta$." },
        { label: "Compute", body: "$W = 50 \\cdot 10 = 500$ J (force along motion)." }
      ], answer: "$500$ J" },
      { title: "Example 2 — Efficiency", prompt: "Engine outputs $7$ kW, draws $10$ kW. Efficiency?", steps: [
        { label: "Compute", body: "$\\eta = P_\\text{out}/P_\\text{in} = 0.7$ or $70\\%$." }
      ], answer: "$70\\%$" },
      { title: "Example 3 — Pulley mechanical advantage", prompt: "Block and tackle with 4 supporting rope segments. Force to lift $200$ N load (ideal)?", steps: [
        { label: "MA", body: "MA = number of supporting segments = 4." },
        { label: "Force", body: "$F = 200/4 = 50$ N." }
      ], answer: "$50$ N" }
    ],
    tasks: [
      { q: "$1$ J = ___ N·m?", a: "$1$" },
      { q: "Power = ?", a: "$W/t$ or $\\vec F \\cdot \\vec v$" },
      { q: "$P$ at $200$ N, $5$ m/s?", a: "$1000$ W" },
      { q: "Efficiency of $80\\%$ engine, $10$ kW in. Out?", a: "$8$ kW" },
      { q: "Lever balance: $F_1 d_1 = F_2 d_2$. $50$ N at $0.3$ m balances ___ N at $0.1$ m?", a: "$150$ N" },
      { q: "Inclined plane MA?", a: "Length / height" },
      { q: "Screw MA?", a: "$2\\pi r$ / pitch" },
      { q: "Carnot efficiency $T_H = 600$ K, $T_C = 300$ K?", a: "$50\\%$" },
      { q: "Power of human at steady work?", a: "$\\approx 100$ W" },
      { q: "$1$ hp ≈ ?", a: "$746$ W" }
    ]
  },
  {
    id: "thermo-cycles",
    title: "Thermodynamic Cycles",
    level: "intermediate",
    summary: "Carnot, Otto, Diesel, Brayton, Rankine cycles. Efficiency and pressure-volume diagrams.",
    examples: [
      { title: "Example 1 — Carnot efficiency", prompt: "Hot reservoir at $800$ K, cold at $300$ K. Max efficiency?", steps: [
        { label: "Formula", body: "$\\eta = 1 - T_C/T_H$." },
        { label: "Plug", body: "$\\eta = 1 - 300/800 = 0.625$ or $62.5\\%$." }
      ], answer: "$62.5\\%$" },
      { title: "Example 2 — Otto cycle", prompt: "Otto cycle, compression ratio $r = 9$, $\\gamma = 1.4$. Thermal efficiency?", steps: [
        { label: "Formula", body: "$\\eta = 1 - 1/r^{\\gamma-1}$." },
        { label: "Compute", body: "$\\eta = 1 - 1/9^{0.4} \\approx 1 - 1/2.408 \\approx 0.585$ or $58.5\\%$." }
      ], answer: "$\\approx 58.5\\%$" },
      { title: "Example 3 — Rankine basic", prompt: "Why steam cycle uses condenser?", steps: [
        { label: "Pump work", body: "Pumping liquid water back to boiler pressure requires very little work (incompressible)." },
        { label: "Without condenser", body: "Compressing steam directly would consume more work than the turbine produced." }
      ], answer: "Condenser converts steam to liquid so pump work is small." }
    ],
    tasks: [
      { q: "Carnot $T_H = 500$, $T_C = 250$. $\\eta$?", a: "$50\\%$" },
      { q: "Otto $r = 8$, $\\gamma = 1.4$. $\\eta$?", a: "$\\approx 56.5\\%$" },
      { q: "1st law of thermo?", a: "$\\Delta U = Q - W$" },
      { q: "2nd law (Clausius)?", a: "Heat does not flow from cold to hot spontaneously" },
      { q: "Brayton cycle works fluid?", a: "Gas (e.g., air)" },
      { q: "Rankine cycle fluid?", a: "Water/steam" },
      { q: "Diesel cycle heat addition at constant?", a: "Pressure" },
      { q: "Otto heat addition at constant?", a: "Volume" },
      { q: "Refrigeration cycle is heat engine ___ ?", a: "Run in reverse" },
      { q: "COP of fridge vs Carnot limit?", a: "$T_C/(T_H - T_C)$" }
    ]
  },
  {
    id: "heat-transfer",
    title: "Heat Transfer",
    level: "intermediate",
    summary: "Conduction (Fourier's law), convection (Newton's law of cooling), radiation (Stefan-Boltzmann).",
    examples: [
      { title: "Example 1 — Conduction through wall", prompt: "Wall $0.1$ m thick, $k = 0.5$ W/(m·K), area $10$ m², $\\Delta T = 20$ K. Heat rate?", steps: [
        { label: "Fourier", body: "$\\dot Q = kA\\Delta T/L$." },
        { label: "Compute", body: "$\\dot Q = 0.5 \\cdot 10 \\cdot 20/0.1 = 1000$ W." }
      ], answer: "$1000$ W" },
      { title: "Example 2 — Convection", prompt: "$h = 25$ W/(m²·K), surface $0.5$ m² at $80$°C, air at $20$°C. Heat loss?", steps: [
        { label: "Formula", body: "$\\dot Q = hA(T_s - T_\\infty)$." },
        { label: "Compute", body: "$\\dot Q = 25 \\cdot 0.5 \\cdot 60 = 750$ W." }
      ], answer: "$750$ W" },
      { title: "Example 3 — Radiation", prompt: "Black body at $500$ K, area $1$ m². Power radiated?", steps: [
        { label: "Stefan-Boltzmann", body: "$\\dot Q = \\sigma A T^4$ with $\\sigma = 5.67\\times 10^{-8}$." },
        { label: "Compute", body: "$\\dot Q = 5.67\\times 10^{-8} \\cdot 1 \\cdot 500^4 = 3544$ W." }
      ], answer: "$\\approx 3544$ W" }
    ],
    tasks: [
      { q: "Fourier's law?", a: "$\\dot q = -k\\nabla T$" },
      { q: "Convection driver?", a: "Fluid motion + temperature difference" },
      { q: "Radiation depends on $T$ to what power?", a: "$T^4$" },
      { q: "Stefan-Boltzmann constant $\\sigma$?", a: "$5.67\\times 10^{-8}$ W/(m²·K⁴)" },
      { q: "Emissivity range?", a: "$0$ to $1$" },
      { q: "Insulation acts on which mechanism mainly?", a: "Conduction (also reduces convection if porous)" },
      { q: "$k$ of copper?", a: "$\\approx 400$ W/(m·K)" },
      { q: "$k$ of air?", a: "$\\approx 0.025$ W/(m·K)" },
      { q: "Forced vs natural convection: which has higher $h$?", a: "Forced (typically)" },
      { q: "Biot number compares?", a: "Internal vs surface thermal resistance" }
    ]
  },
  {
    id: "fluid-statics-dynamics",
    title: "Fluid Mechanics — Statics & Bernoulli",
    level: "intermediate",
    summary: "Hydrostatic pressure $p = \\rho gh$. Continuity. Bernoulli's equation along streamline.",
    examples: [
      { title: "Example 1 — Pressure at depth", prompt: "Water, depth $20$ m. Gauge pressure?", steps: [
        { label: "Formula", body: "$p = \\rho gh$." },
        { label: "Compute", body: "$p = 1000 \\cdot 9.81 \\cdot 20 = 196$ kPa." }
      ], answer: "$\\approx 196$ kPa gauge" },
      { title: "Example 2 — Continuity", prompt: "Pipe narrows from $0.1$ m² to $0.025$ m². Flow $5$ m/s in larger. Speed in narrower?", steps: [
        { label: "Continuity", body: "$A_1 v_1 = A_2 v_2$." },
        { label: "Compute", body: "$v_2 = 0.1 \\cdot 5/0.025 = 20$ m/s." }
      ], answer: "$20$ m/s" },
      { title: "Example 3 — Bernoulli", prompt: "Same pipe, large end at $1$ atm gauge, height same. Pressure at narrow end?", steps: [
        { label: "Bernoulli", body: "$p_1 + \\tfrac{1}{2}\\rho v_1^2 = p_2 + \\tfrac{1}{2}\\rho v_2^2$." },
        { label: "Compute", body: "$p_2 = 101325 + \\tfrac{1}{2}(1000)(25 - 400) = 101325 - 187500 \\approx -86$ kPa gauge — pressure drops dramatically; cavitation risk." }
      ], answer: "Drops by $\\approx 187.5$ kPa" }
    ],
    tasks: [
      { q: "Density of water?", a: "$1000$ kg/m³" },
      { q: "Pressure $10$ m underwater?", a: "$\\approx 98$ kPa gauge" },
      { q: "$1$ atm in Pa?", a: "$\\approx 101325$" },
      { q: "Continuity (incompressible)?", a: "$Av = $ const" },
      { q: "Bernoulli holds along?", a: "A streamline (and steady, inviscid, incompressible)" },
      { q: "Pitot tube measures?", a: "Stagnation pressure (used to infer velocity)" },
      { q: "Reynolds number?", a: "$\\rho v L/\\mu$" },
      { q: "Re $> 4000$: usually?", a: "Turbulent (pipe flow)" },
      { q: "Re $< 2300$: usually?", a: "Laminar (pipe flow)" },
      { q: "Buoyant force?", a: "$\\rho g V_\\text{displaced}$" }
    ]
  },
  {
    id: "vibrations",
    title: "Mechanical Vibrations",
    level: "intermediate",
    summary: "Free, damped, forced vibration of single-degree-of-freedom systems. Resonance.",
    examples: [
      { title: "Example 1 — Natural frequency", prompt: "$m = 2$ kg, $k = 200$ N/m. Find $\\omega_n$ and $f_n$.", steps: [
        { label: "Formula", body: "$\\omega_n = \\sqrt{k/m}$." },
        { label: "Compute", body: "$\\omega_n = \\sqrt{100} = 10$ rad/s. $f_n = 10/(2\\pi) \\approx 1.59$ Hz." }
      ], answer: "$\\omega_n = 10$ rad/s, $f_n \\approx 1.59$ Hz" },
      { title: "Example 2 — Damping ratio", prompt: "Same system, $c = 8$ N·s/m. $\\zeta$?", steps: [
        { label: "Formula", body: "$\\zeta = c/(2\\sqrt{km})$." },
        { label: "Compute", body: "$\\zeta = 8/(2\\sqrt{400}) = 8/40 = 0.2$ (underdamped)." }
      ], answer: "$\\zeta = 0.2$" },
      { title: "Example 3 — Resonance", prompt: "Sinusoidal force at $\\omega = \\omega_n$. What happens?", steps: [
        { label: "Lightly damped", body: "Amplitude grows large — only damping limits steady-state." },
        { label: "Practical", body: "Avoid driving at $\\omega_n$ to prevent failure." }
      ], answer: "Resonance: amplitude peaks, limited only by damping." }
    ],
    tasks: [
      { q: "$\\omega_n$ for $m = 1$ kg, $k = 100$ N/m?", a: "$10$ rad/s" },
      { q: "Critical damping $c_c$?", a: "$2\\sqrt{km}$" },
      { q: "$\\zeta = 1$: oscillates?", a: "No (critically damped)" },
      { q: "$\\zeta > 1$: regime?", a: "Overdamped" },
      { q: "Damped natural freq $\\omega_d = ?$", a: "$\\omega_n\\sqrt{1-\\zeta^2}$" },
      { q: "Logarithmic decrement measures?", a: "Rate of decay of free vibrations" },
      { q: "Forced response peak frequency $\\approx$ which for low $\\zeta$?", a: "$\\omega_n$" },
      { q: "Pendulum length $1$ m, $g = 9.81$. Period?", a: "$\\approx 2.006$ s" },
      { q: "Two coupled masses: how many natural freqs?", a: "$2$" },
      { q: "Resonance avoided by tuning what?", a: "$k$ or $m$ to shift $\\omega_n$" }
    ]
  },
  {
    id: "materials-strength",
    title: "Materials — Strength & Failure",
    level: "intermediate",
    summary: "Tensile test. Ductile vs brittle. Fatigue. Stress concentration.",
    examples: [
      { title: "Example 1 — Yield vs ultimate", prompt: "Steel: yield $250$ MPa, ultimate $400$ MPa. What does each mean?", steps: [
        { label: "Yield", body: "Onset of permanent deformation. Below: elastic recovery." },
        { label: "Ultimate", body: "Max engineering stress sustained before necking begins." }
      ], answer: "Yield = elastic limit; ultimate = max engineering strength" },
      { title: "Example 2 — Stress concentration", prompt: "Plate with small hole. Stress concentration factor?", steps: [
        { label: "Theoretical", body: "$K_t \\approx 3$ for a small circular hole in a wide plate under uniaxial tension." },
        { label: "Implication", body: "Local stress around hole is 3× the nominal." }
      ], answer: "$K_t \\approx 3$" },
      { title: "Example 3 — Fatigue", prompt: "Cyclic loading well below static yield. Failure possible?", steps: [
        { label: "Fatigue", body: "Yes — repeated stress causes crack initiation and growth." },
        { label: "S-N curve", body: "Plot allowable stress vs number of cycles. Many steels have an endurance limit (no failure below it for any $N$)." }
      ], answer: "Yes — fatigue failure even below static limits." }
    ],
    tasks: [
      { q: "Ductile material example?", a: "Mild steel, copper, aluminum" },
      { q: "Brittle material example?", a: "Cast iron, glass, concrete" },
      { q: "Necking happens at?", a: "Onset of plastic instability" },
      { q: "Endurance limit applies mostly to?", a: "Steels (some)" },
      { q: "Stress concentration at sharp corner: high or low?", a: "High" },
      { q: "Way to reduce stress concentration at hole?", a: "Fillet, polish, smooth transition" },
      { q: "Hardness vs strength: usually correlated?", a: "Yes (positively)" },
      { q: "Charpy test measures?", a: "Impact toughness" },
      { q: "Toughness = area under?", a: "Stress-strain curve" },
      { q: "Cold working effect on yield?", a: "Raises it (strain hardening)" }
    ]
  },
  {
    id: "manufacturing",
    title: "Manufacturing Processes",
    level: "intermediate",
    summary: "Casting, forming, machining, joining, additive. Tolerances and surface finish.",
    examples: [
      { title: "Example 1 — Pick a process", prompt: "Need 1 million identical small brass parts. Which process?", steps: [
        { label: "High volume", body: "Injection molding/die casting for low cost per part once tooling amortizes." },
        { label: "Material", body: "Brass die-casts well. Tooling cost high but unit cost very low at scale." }
      ], answer: "Die casting" },
      { title: "Example 2 — Tolerance class", prompt: "Why specify $\\pm 0.01$ mm vs $\\pm 1$ mm?", steps: [
        { label: "Function", body: "Tight tolerance needed for mating, bearings, seals." },
        { label: "Cost", body: "Tighter tolerances → finer machining, slower process, higher cost." }
      ], answer: "Tighter tolerances cost more — only specify what's needed." },
      { title: "Example 3 — Cutting speed", prompt: "Turning steel with HSS tool, recommended cutting speed $30$ m/min. Spindle speed for $\\varnothing 25$ mm bar?", steps: [
        { label: "Formula", body: "$N = 1000 \\cdot v/(\\pi D)$." },
        { label: "Compute", body: "$N = 30000/(\\pi \\cdot 25) \\approx 382$ rpm." }
      ], answer: "$\\approx 382$ rpm" }
    ],
    tasks: [
      { q: "Casting good for?", a: "Complex shapes, large parts" },
      { q: "Forging vs casting strength?", a: "Forging usually higher (worked grain structure)" },
      { q: "CNC stands for?", a: "Computer Numerical Control" },
      { q: "Additive manufacturing aka?", a: "3D printing" },
      { q: "FDM uses what material?", a: "Thermoplastic filament" },
      { q: "SLA uses?", a: "Photopolymer resin" },
      { q: "Welding joins via?", a: "Localized melting/fusion" },
      { q: "Surface roughness $R_a$ unit?", a: "μm" },
      { q: "Tolerance $\\pm 0.1$ mm vs $\\pm 0.001$ mm: which cheaper?", a: "$\\pm 0.1$ mm" },
      { q: "Sand casting surface finish?", a: "Rough" }
    ]
  }
];
