// Deep additional worked examples for every physics topic.
// Each example: title, prompt, explain (ELI5), steps, answer.

(function () {
  window.EXTRA_EXAMPLES = window.EXTRA_EXAMPLES || {};

  Object.assign(window.EXTRA_EXAMPLES, {

    "units-measurement": [{
      title: "Example — Dimensional analysis of a pendulum",
      prompt: "A pendulum's period might depend on mass $m$, length $L$, and gravity $g$. Use dimensional analysis to find the form of the period $T$.",
      explain: "Dimensional analysis: only combinations with the right units can show up. Time has dimension T. The only way to combine $L$ (length) and $g$ (length/time²) into a time is $\\sqrt{L/g}$. Mass is irrelevant — it can't enter.",
      steps: [
        { label: "List dimensions", body: "$[m] = M$, $[L] = L$, $[g] = L/T^2$. Need a combination with dimension $T$." },
        { label: "Try $T \\sim m^a L^b g^c$", body: "Dimensions: $M^a \\cdot L^{b+c} \\cdot T^{-2c}$. Set $M^0 L^0 T^1$: $a = 0$, $b + c = 0$, $-2c = 1$. So $c = -1/2$, $b = 1/2$." },
        { label: "Result", body: "$T \\propto \\sqrt{L/g}$. Mass cancels — physically because the same $g$ acts on all masses." }
      ],
      answer: "$T \\propto \\sqrt{L/g}$. The actual prefactor (2π) requires dynamics; dimensional analysis gets you 90% of the way for free."
    }],

    "kinematics": [{
      title: "Example — Projectile range on level ground",
      prompt: "A ball is launched at angle $\\theta$ with initial speed $v_0$ from ground level. Derive the formula for range $R$.",
      explain: "Decompose into horizontal (constant velocity) and vertical (gravity). Find time of flight from vertical motion, then horizontal distance = horizontal velocity × time.",
      steps: [
        { label: "Initial velocity components", body: "$v_x = v_0 \\cos\\theta$ (constant). $v_y = v_0 \\sin\\theta$ initially, decreasing under gravity." },
        { label: "Time of flight", body: "Ball lands when $y = 0$. $y(t) = v_0\\sin\\theta \\cdot t - \\frac{1}{2}gt^2 = 0$. Solutions $t = 0$ (launch) and $t = 2v_0\\sin\\theta/g$." },
        { label: "Horizontal range", body: "$R = v_x \\cdot t_{\\text{flight}} = v_0\\cos\\theta \\cdot 2v_0\\sin\\theta/g = v_0^2 \\sin(2\\theta)/g$." }
      ],
      answer: "$R = v_0^2 \\sin(2\\theta)/g$. Maximum at $\\theta = 45°$. Same range for $\\theta$ and $90° - \\theta$ — pairs like 30° and 60° land in the same spot."
    }],

    "vectors-physics": [{
      title: "Example — Force balance on an inclined plane",
      prompt: "A 5 kg block sits on a 30° frictionless incline. Find the component of gravity parallel and perpendicular to the incline.",
      explain: "Project the weight vector onto the incline's coordinates: parallel and perpendicular. The parallel component drives motion down; the perpendicular is balanced by the normal force.",
      steps: [
        { label: "Weight", body: "$W = mg = 5 \\cdot 9.8 = 49$ N, pointing straight down." },
        { label: "Parallel to incline", body: "$W_\\parallel = W \\sin\\theta = 49 \\sin 30° = 24.5$ N — drives the block down the slope." },
        { label: "Perpendicular to incline", body: "$W_\\perp = W \\cos\\theta = 49 \\cos 30° \\approx 42.4$ N — balanced by normal force." }
      ],
      answer: "Parallel: 24.5 N (down the slope). Perpendicular: 42.4 N. Acceleration: $a = g\\sin\\theta = 4.9$ m/s² down the slope."
    }],

    "newtons-laws": [{
      title: "Example — Atwood machine",
      prompt: "Two masses $m_1 = 3$ kg and $m_2 = 5$ kg hang over a frictionless, massless pulley. Find their acceleration.",
      explain: "Classic. Write F=ma for each mass with tension as common unknown. Solve the two equations simultaneously. Note: both masses have the SAME magnitude of acceleration (string is inextensible).",
      steps: [
        { label: "Mass 1 (lighter, accelerates up)", body: "$T - m_1 g = m_1 a$." },
        { label: "Mass 2 (heavier, accelerates down)", body: "$m_2 g - T = m_2 a$." },
        { label: "Add the equations", body: "$T$ cancels: $(m_2 - m_1) g = (m_1 + m_2) a$. So $a = (m_2 - m_1) g / (m_1 + m_2) = 2 \\cdot 9.8 / 8 = 2.45$ m/s²." },
        { label: "Find tension", body: "From mass 1: $T = m_1(g + a) = 3(9.8 + 2.45) = 36.75$ N." }
      ],
      answer: "$a = 2.45$ m/s², $T = 36.75$ N. Always add equations to eliminate tension."
    }],

    "momentum-impulse": [{
      title: "Example — 2D collision",
      prompt: "Mass 2 kg moving at 4 m/s east collides elastically with stationary 1 kg mass. After collision, the 2 kg mass moves at 2 m/s at 30° north of east. Find velocity of the 1 kg mass.",
      explain: "Two equations from momentum conservation (one for each axis). Use them — no need for the elastic-collision speed equation if we have the post-collision velocity of one body.",
      steps: [
        { label: "Set up coordinates", body: "East = +x, north = +y. Before: $\\mathbf{p_i} = (2 \\cdot 4, 0) = (8, 0)$ kg·m/s. Mass 1: $\\mathbf{p_1}' = 2 \\cdot 2 (\\cos 30°, \\sin 30°) = (3.46, 2)$." },
        { label: "Apply conservation", body: "$\\mathbf{p_2}' = \\mathbf{p_i} - \\mathbf{p_1}' = (8 - 3.46, 0 - 2) = (4.54, -2)$." },
        { label: "Velocity of mass 1", body: "$\\mathbf{v_2}' = \\mathbf{p_2}'/m_2 = (4.54, -2)$ m/s. Magnitude $\\sqrt{4.54^2 + 4} = 4.96$ m/s at $\\arctan(-2/4.54) = -23.8°$." }
      ],
      answer: "1 kg mass: 4.96 m/s at 23.8° south of east. Quick energy check: $\\frac{1}{2}(2)(4)^2 = 16$ before vs $\\frac{1}{2}(2)(2)^2 + \\frac{1}{2}(1)(4.96)^2 = 4 + 12.3 = 16.3$ — close but with rounding; truly elastic would be 16.0 exactly."
    }],

    "energy-work": [{
      title: "Example — Loop-the-loop",
      prompt: "A ball rolls down a frictionless ramp from height $h$ and into a vertical loop of radius $R$. What is the minimum $h$ for the ball to complete the loop?",
      explain: "At the top of the loop, gravity provides centripetal force. Minimum speed at top: gravity alone supplies $mv^2/R$. Use energy conservation to relate $h$ to top-of-loop kinetic energy.",
      steps: [
        { label: "Minimum speed at top of loop", body: "Centripetal: $mv_{\\text{top}}^2/R = mg$ (gravity provides ALL the centripetal force at minimum). So $v_{\\text{top}}^2 = gR$." },
        { label: "Energy conservation", body: "$mgh = mg(2R) + \\frac{1}{2}mv_{\\text{top}}^2 = mg(2R) + \\frac{1}{2}m(gR)$." },
        { label: "Solve for h", body: "$h = 2R + R/2 = 5R/2$." }
      ],
      answer: "$h_{\\text{min}} = 5R/2$ — two-and-a-half times the loop radius. The 'extra' $R/2$ above the loop top accounts for the kinetic energy needed at the top."
    }],

    "circular-gravitation": [{
      title: "Example — Geostationary orbit altitude",
      prompt: "Find the altitude of a geostationary satellite (one whose orbital period equals Earth's rotation period of 24 hours).",
      explain: "Use Kepler's third law: $T^2 = 4\\pi^2 r^3/(GM)$. Solve for $r$, subtract Earth's radius to get altitude. Famous answer: about 35,800 km.",
      steps: [
        { label: "Setup", body: "$T = 86400$ s. $GM_\\text{Earth} = 3.986 \\times 10^{14}$ m³/s²." },
        { label: "Solve for r", body: "$r^3 = GM T^2/(4\\pi^2) = (3.986 \\times 10^{14})(86400)^2/(4\\pi^2) \\approx 7.54 \\times 10^{22}$ m³. $r \\approx 4.22 \\times 10^7$ m = 42,200 km from Earth's center." },
        { label: "Altitude", body: "Subtract Earth's radius: $42200 - 6400 = 35800$ km." }
      ],
      answer: "$\\approx 35,800$ km altitude. This is where every TV and weather satellite lives — they orbit at the same rate Earth rotates, so they appear stationary."
    }],

    "shm": [{
      title: "Example — Pendulum period with small-angle approximation",
      prompt: "Derive the period $T = 2\\pi\\sqrt{L/g}$ for a simple pendulum.",
      explain: "Pendulum's equation of motion is $\\ddot\\theta = -(g/L)\\sin\\theta$. For small angles, $\\sin\\theta \\approx \\theta$, so $\\ddot\\theta = -(g/L)\\theta$ — SHM with angular frequency $\\omega = \\sqrt{g/L}$.",
      steps: [
        { label: "Equation of motion", body: "Torque about pivot: $-mgL\\sin\\theta$. Moment of inertia: $mL^2$. So $mL^2 \\ddot\\theta = -mgL\\sin\\theta$, giving $\\ddot\\theta = -(g/L)\\sin\\theta$." },
        { label: "Small-angle limit", body: "For $\\theta \\ll 1$ rad: $\\sin\\theta \\approx \\theta$. Equation becomes $\\ddot\\theta = -(g/L)\\theta$ — standard SHM." },
        { label: "Read off frequency", body: "$\\omega^2 = g/L$, so $T = 2\\pi/\\omega = 2\\pi\\sqrt{L/g}$." }
      ],
      answer: "$T = 2\\pi\\sqrt{L/g}$. Independent of mass and amplitude (in the small-angle approximation) — Galileo's discovery."
    }],

    "rotational": [{
      title: "Example — Rolling without slipping",
      prompt: "A solid sphere of mass $m$ and radius $R$ rolls without slipping down a 30° incline. Find its acceleration.",
      explain: "Rolling constraint: $v = R\\omega$, so $a = R\\alpha$. Two equations: Newton's 2nd law (linear), torque equation (angular). Solve simultaneously.",
      steps: [
        { label: "Forces along incline", body: "Weight component $mg\\sin\\theta$ pushes down. Friction $f$ pushes UP the incline (provides torque for spinning)." },
        { label: "Linear: F = ma", body: "$mg\\sin\\theta - f = ma$." },
        { label: "Angular: τ = Iα", body: "Only friction provides torque about CM. $fR = I\\alpha = (\\frac{2}{5}mR^2)(a/R)$, so $f = \\frac{2}{5}ma$." },
        { label: "Combine", body: "$mg\\sin\\theta - \\frac{2}{5}ma = ma \\Rightarrow mg\\sin\\theta = \\frac{7}{5}ma \\Rightarrow a = \\frac{5}{7}g\\sin\\theta$." }
      ],
      answer: "$a = (5/7) g \\sin\\theta \\approx 3.5$ m/s² at 30°. Less than $g\\sin\\theta = 4.9$ m/s² — energy goes into rotation, not just translation."
    }],

    "fluids": [{
      title: "Example — Bernoulli on a pipe with changing radius",
      prompt: "Water flows through a pipe whose radius narrows from 4 cm to 2 cm. At the wide end, pressure is 200 kPa and speed is 2 m/s. Find the pressure at the narrow end.",
      explain: "Bernoulli: $P + \\frac{1}{2}\\rho v^2 + \\rho g h$ is conserved along a streamline. Continuity: $A_1 v_1 = A_2 v_2$. Combine to find pressure at the constriction.",
      steps: [
        { label: "Continuity to find $v_2$", body: "Area ratio $A_1/A_2 = (4/2)^2 = 4$. So $v_2 = 4 v_1 = 8$ m/s." },
        { label: "Bernoulli (same height)", body: "$P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$. With $\\rho = 1000$ kg/m³." },
        { label: "Compute", body: "$P_2 = P_1 + \\frac{1}{2}\\rho(v_1^2 - v_2^2) = 200000 + 500(4 - 64) = 200000 - 30000 = 170$ kPa." }
      ],
      answer: "$P_2 = 170$ kPa. Pressure drops where velocity rises — that's the principle behind atomizers, carburetors, and venturi flow meters."
    }],

    "kinetic-theory": [{
      title: "Example — RMS speed of nitrogen at room temperature",
      prompt: "Find $v_{\\text{rms}}$ of $N_2$ molecules at 300 K.",
      explain: "From equipartition: $\\frac{1}{2}m v_{\\text{rms}}^2 = \\frac{3}{2}k T$, so $v_{\\text{rms}} = \\sqrt{3kT/m}$. Plug in.",
      steps: [
        { label: "Mass of N₂", body: "Molecular mass 28 g/mol → one molecule: $m = 28/(6 \\times 10^{23}) = 4.65 \\times 10^{-26}$ kg." },
        { label: "Plug in", body: "$v_{\\text{rms}} = \\sqrt{3 \\cdot 1.38 \\times 10^{-23} \\cdot 300 / 4.65 \\times 10^{-26}} = \\sqrt{2.67 \\times 10^5} \\approx 517$ m/s." }
      ],
      answer: "$v_{\\text{rms}} \\approx 517$ m/s — faster than the speed of sound in air (343 m/s). Air molecules zip around at supersonic speeds; sound is the COLLECTIVE motion."
    }],

    "thermodynamics": [{
      title: "Example — Carnot engine efficiency",
      prompt: "A Carnot engine operates between $T_h = 800$ K and $T_c = 300$ K. If it absorbs 1000 J from the hot reservoir per cycle, find work output and heat rejected.",
      explain: "Carnot efficiency = $1 - T_c/T_h$. This is the BEST possible efficiency between those two temperatures. Real engines do worse.",
      steps: [
        { label: "Efficiency", body: "$\\eta = 1 - 300/800 = 5/8 = 0.625$ or 62.5%." },
        { label: "Work", body: "$W = \\eta Q_h = 0.625 \\cdot 1000 = 625$ J." },
        { label: "Heat rejected", body: "$Q_c = Q_h - W = 1000 - 625 = 375$ J." }
      ],
      answer: "$W = 625$ J, $Q_c = 375$ J. Efficient — but to get 100%, you'd need $T_c = 0$ K. Cold reservoirs are expensive."
    }],

    "waves": [{
      title: "Example — Doppler shift for an ambulance",
      prompt: "An ambulance siren emits 1000 Hz, approaching at 30 m/s. Speed of sound 340 m/s. What frequency do you hear?",
      explain: "Source moving toward observer: $f_o = f_s \\cdot c/(c - v_s)$. Source-toward = compressed wavelengths = higher pitch.",
      steps: [
        { label: "Plug in", body: "$f_o = 1000 \\cdot 340/(340 - 30) = 1000 \\cdot 340/310 = 1097$ Hz." }
      ],
      answer: "About 1097 Hz — pitch up by 97 Hz. As the ambulance passes and recedes, pitch drops to $f = 1000 \\cdot 340/370 = 919$ Hz — the characteristic 'wee-ooh' chirp."
    }],

    "optics-geometric": [{
      title: "Example — Image by a converging lens",
      prompt: "An object is 30 cm in front of a converging lens of focal length 20 cm. Find the image distance and magnification.",
      explain: "Thin lens equation: $1/f = 1/d_o + 1/d_i$. Magnification: $m = -d_i/d_o$. Sign convention: positive $d_i$ = real image on opposite side.",
      steps: [
        { label: "Lens equation", body: "$1/20 = 1/30 + 1/d_i \\Rightarrow 1/d_i = 1/20 - 1/30 = 1/60$." },
        { label: "Image distance", body: "$d_i = 60$ cm. Positive — real image on the opposite side." },
        { label: "Magnification", body: "$m = -60/30 = -2$. Image is twice as tall, inverted." }
      ],
      answer: "$d_i = 60$ cm, $m = -2$. Inverted, magnified, real — typical projector configuration."
    }],

    "optics-wave": [{
      title: "Example — Two-slit interference",
      prompt: "Light of wavelength 500 nm passes through two slits 0.2 mm apart. On a screen 2 m away, find the spacing between adjacent bright fringes.",
      explain: "Fringe spacing $\\Delta y = \\lambda L / d$ for small angles. The bigger the wavelength, the wider the fringes; the closer the slits, the wider too.",
      steps: [
        { label: "Apply formula", body: "$\\Delta y = (500 \\times 10^{-9})(2)/(0.2 \\times 10^{-3}) = 10^{-6}/2 \\times 10^{-4} = 5 \\times 10^{-3}$ m = 5 mm." }
      ],
      answer: "5 mm between adjacent fringes. Note the pattern depends on the slit geometry — much like an interferometer's sensitivity to path length."
    }],

    "electrostatics": [{
      title: "Example — Electric field of a uniformly charged ring",
      prompt: "Find the electric field on the axis of a ring of radius $R$ carrying total charge $Q$ at distance $z$ from the center.",
      explain: "By symmetry, the field on-axis points along the axis. Integrate the axial component of $dE$ from each charge element. Result depends on $z$ in a non-trivial way.",
      steps: [
        { label: "Element dq at angle $\\phi$", body: "$dE = k\\,dq/r^2$ where $r = \\sqrt{R^2 + z^2}$. Axial component: $dE_z = dE \\cos\\theta = dE \\cdot z/r$." },
        { label: "Integrate around ring", body: "All transverse components cancel. $E_z = k z/r^3 \\int dq = kQz/(R^2 + z^2)^{3/2}$." }
      ],
      answer: "$E_z = kQz/(R^2 + z^2)^{3/2}$. At $z = 0$: zero (symmetric). At $z \\gg R$: looks like a point charge $Q$ — as expected."
    }],

    "electric-circuits": [{
      title: "Example — RC discharging time",
      prompt: "A 100 μF capacitor charged to 12 V discharges through a 10 kΩ resistor. How long until voltage drops to 1 V?",
      explain: "RC circuit: voltage decays exponentially $V(t) = V_0 e^{-t/\\tau}$ with $\\tau = RC$. Solve for $t$ given the target voltage.",
      steps: [
        { label: "Time constant", body: "$\\tau = RC = 10^4 \\cdot 10^{-4} = 1$ s." },
        { label: "Solve $V_0 e^{-t/\\tau} = V$", body: "$12 e^{-t} = 1 \\Rightarrow e^{-t} = 1/12 \\Rightarrow t = \\ln 12 \\approx 2.48$ s." }
      ],
      answer: "$t \\approx 2.5$ s. After 5τ ≈ 5 s, voltage is below 1% of initial. Used to set timing in flashing-LED circuits, audio attack/release, etc."
    }],

    "magnetism-induction": [{
      title: "Example — EMF in a moving rod",
      prompt: "A rod of length 0.5 m moves at 4 m/s perpendicular to a 0.3 T magnetic field. Find the EMF induced across the rod.",
      explain: "Motional EMF: $\\varepsilon = BLv$. Comes from the magnetic force on free electrons in the rod — they separate, creating an electric potential.",
      steps: [
        { label: "Apply formula", body: "$\\varepsilon = (0.3)(0.5)(4) = 0.6$ V." }
      ],
      answer: "0.6 V. Direction: use right-hand rule. This is the principle of an electric generator — mechanical motion → EMF → current."
    }],

    "ac-circuits": [{
      title: "Example — Resonance in series RLC",
      prompt: "An RLC circuit has $R = 50$ Ω, $L = 10$ mH, $C = 10$ μF. Find the resonant frequency and quality factor.",
      explain: "At resonance, $X_L = X_C$, so impedance is purely $R$ and current peaks. Q factor measures sharpness — how narrow the resonance peak.",
      steps: [
        { label: "Resonant frequency", body: "$\\omega_0 = 1/\\sqrt{LC} = 1/\\sqrt{10^{-2} \\cdot 10^{-5}} = 1/\\sqrt{10^{-7}} \\approx 3162$ rad/s = 503 Hz." },
        { label: "Quality factor", body: "$Q = \\omega_0 L/R = 3162 \\cdot 0.01/50 \\approx 0.63$." }
      ],
      answer: "$f_0 \\approx 503$ Hz, $Q \\approx 0.63$. Low Q — broad resonance. Higher Q (lower $R$) gives sharper tuning, used in radio receivers."
    }],

    "maxwell-em": [{
      title: "Example — Speed of light from Maxwell's equations",
      prompt: "Derive the speed of EM waves from $\\mu_0 \\epsilon_0$.",
      explain: "Maxwell combined his equations and found wave solutions with speed $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$. This was the discovery that light IS electromagnetic.",
      steps: [
        { label: "Constants", body: "$\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A, $\\epsilon_0 = 8.854 \\times 10^{-12}$ C²/(N·m²)." },
        { label: "Product", body: "$\\mu_0 \\epsilon_0 = 1.113 \\times 10^{-17}$ s²/m²." },
        { label: "Speed", body: "$c = 1/\\sqrt{1.113 \\times 10^{-17}} = 2.998 \\times 10^8$ m/s." }
      ],
      answer: "$c = 3.00 \\times 10^8$ m/s. Maxwell (1862): 'we can scarcely avoid the inference that light consists in the transverse undulations of the same medium which is the cause of electric and magnetic phenomena.'"
    }],

    "special-relativity": [{
      title: "Example — Twin paradox numerical",
      prompt: "Alice stays on Earth. Bob travels to a star 10 light-years away at 0.8c, then returns. How much do their ages differ when reunited?",
      explain: "Time dilation: Bob's clock ticks slower from Earth's frame. Round trip time on Earth: $20/0.8 = 25$ years. Bob's clock: $\\gamma$ times slower.",
      steps: [
        { label: "Earth time", body: "$T_\\text{Earth} = 2 \\cdot 10/0.8 = 25$ years." },
        { label: "Gamma factor", body: "$\\gamma = 1/\\sqrt{1 - 0.64} = 1/\\sqrt{0.36} = 1/0.6 = 5/3$." },
        { label: "Bob's time", body: "$T_\\text{Bob} = T_\\text{Earth}/\\gamma = 25 \\cdot 0.6 = 15$ years." }
      ],
      answer: "Bob ages 15 years; Alice ages 25. Difference: 10 years. Bob is the YOUNGER one — twin paradox resolved by Bob's acceleration (he's the one who turned around)."
    }],

    "general-relativity": [{
      title: "Example — Schwarzschild radius of the Sun",
      prompt: "Compute the Schwarzschild radius of an object with the mass of the Sun.",
      explain: "Schwarzschild radius $r_s = 2GM/c^2$. The radius at which an object becomes a black hole. For the Sun: just 3 km — far smaller than the Sun's actual 700,000 km radius.",
      steps: [
        { label: "Setup", body: "$G = 6.67 \\times 10^{-11}$, $M_\\odot = 2 \\times 10^{30}$ kg, $c = 3 \\times 10^8$ m/s." },
        { label: "Compute", body: "$r_s = 2 \\cdot (6.67 \\times 10^{-11})(2 \\times 10^{30})/(3 \\times 10^8)^2 = 2.67 \\times 10^{20}/9 \\times 10^{16} \\approx 2960$ m." }
      ],
      answer: "$r_s \\approx 3$ km. If you crushed the Sun to a radius of 3 km, it would become a black hole. For Earth: 9 mm. For you: $\\sim 10^{-25}$ m."
    }],

    "lagrangian-hamiltonian": [{
      title: "Example — Lagrangian of pendulum",
      prompt: "Derive the equation of motion of a simple pendulum using Lagrangian mechanics.",
      explain: "Generalized coordinate: angle $\\theta$. Write KE and PE in terms of $\\theta, \\dot\\theta$. Lagrangian $L = T - V$. Euler-Lagrange gives the EOM — same as Newton, but no free-body diagram needed.",
      steps: [
        { label: "KE and PE", body: "Mass at $(L\\sin\\theta, -L\\cos\\theta)$. Velocity: $L\\dot\\theta$. $T = \\frac{1}{2}m L^2 \\dot\\theta^2$. $V = -mgL\\cos\\theta$." },
        { label: "Lagrangian", body: "$L = T - V = \\frac{1}{2}m L^2 \\dot\\theta^2 + mgL\\cos\\theta$." },
        { label: "Euler-Lagrange", body: "$\\partial L/\\partial \\theta = -mgL\\sin\\theta$. $d/dt(\\partial L/\\partial \\dot\\theta) = m L^2 \\ddot\\theta$. So $mL^2 \\ddot\\theta = -mgL\\sin\\theta$, i.e., $\\ddot\\theta = -(g/L)\\sin\\theta$." }
      ],
      answer: "$\\ddot\\theta = -(g/L)\\sin\\theta$. Identical to the Newtonian result, but the derivation needed no force decomposition — just energies."
    }],

    "statistical-mechanics": [{
      title: "Example — Two-level system at high T",
      prompt: "A particle has energy levels 0 and $\\epsilon$. Find its average energy at temperature $T$, and the high-T and low-T limits.",
      explain: "Partition function $Z = 1 + e^{-\\beta\\epsilon}$. Average energy: $\\langle E \\rangle = -d(\\ln Z)/d\\beta$.",
      steps: [
        { label: "Partition function", body: "$Z = 1 + e^{-\\beta\\epsilon}$ where $\\beta = 1/(kT)$." },
        { label: "Average energy", body: "$\\langle E \\rangle = \\epsilon e^{-\\beta\\epsilon}/(1 + e^{-\\beta\\epsilon}) = \\epsilon/(1 + e^{\\beta\\epsilon})$." },
        { label: "Limits", body: "Low T ($\\beta\\epsilon \\gg 1$): $\\langle E \\rangle \\to 0$ (frozen in ground state). High T ($\\beta\\epsilon \\ll 1$): $\\langle E \\rangle \\to \\epsilon/2$ (equally occupied)." }
      ],
      answer: "$\\langle E\\rangle = \\epsilon/(1 + e^{\\epsilon/kT})$. The Schottky anomaly: heat capacity peaks at $T \\sim \\epsilon/k$ — a thermal signature of discrete energy levels."
    }],

    "qm-foundations": [{
      title: "Example — Normalization of a wavefunction",
      prompt: "Normalize $\\psi(x) = A e^{-x^2/a^2}$ on the real line.",
      explain: "Quantum wavefunctions must satisfy $\\int|\\psi|^2 dx = 1$ — total probability of finding the particle somewhere is 1. Find $A$ that makes this work.",
      steps: [
        { label: "Set up", body: "$\\int_{-\\infty}^{\\infty} |A|^2 e^{-2x^2/a^2} dx = 1$." },
        { label: "Gaussian integral", body: "$\\int_{-\\infty}^{\\infty} e^{-2x^2/a^2}\\,dx = \\sqrt{\\pi a^2/2} = a\\sqrt{\\pi/2}$." },
        { label: "Solve for A", body: "$|A|^2 \\cdot a\\sqrt{\\pi/2} = 1 \\Rightarrow A = (2/(\\pi a^2))^{1/4}$." }
      ],
      answer: "$A = (2/(\\pi a^2))^{1/4}$. Normalization is the FIRST thing you do with any wavefunction — without it, probabilities don't add up."
    }],

    "qm-1d": [{
      title: "Example — Ground state energy of infinite square well",
      prompt: "Find the ground-state energy of an electron in a 1D infinite well of width 1 nm.",
      explain: "Particle in a box: $E_n = n^2 \\pi^2 \\hbar^2 / (2mL^2)$. Ground state is $n = 1$. Quantum confinement: smaller box → higher energy.",
      steps: [
        { label: "Formula", body: "$E_1 = \\pi^2 \\hbar^2/(2mL^2)$ where $L = 10^{-9}$ m, $m = 9.11 \\times 10^{-31}$ kg, $\\hbar = 1.055 \\times 10^{-34}$ J·s." },
        { label: "Compute", body: "$E_1 = \\pi^2 (1.055 \\times 10^{-34})^2 / (2 \\cdot 9.11 \\times 10^{-31} \\cdot 10^{-18}) \\approx 6.0 \\times 10^{-20}$ J = 0.376 eV." }
      ],
      answer: "$E_1 \\approx 0.38$ eV. Quantum dots exploit this for color tuning: smaller dot = bluer emission."
    }],

    "atomic-physics": [{
      title: "Example — Hydrogen Balmer line wavelengths",
      prompt: "Calculate the wavelength of the $n=3 \\to n=2$ transition in hydrogen (Balmer H-alpha).",
      explain: "Rydberg formula: $1/\\lambda = R_H (1/n_f^2 - 1/n_i^2)$. Energy of transition becomes a photon. H-alpha is in the visible (red).",
      steps: [
        { label: "Rydberg", body: "$1/\\lambda = 1.097 \\times 10^7 (1/4 - 1/9) = 1.097 \\times 10^7 \\cdot 5/36 = 1.524 \\times 10^6$ /m." },
        { label: "Wavelength", body: "$\\lambda = 1/(1.524 \\times 10^6) = 6.56 \\times 10^{-7}$ m = 656 nm." }
      ],
      answer: "656 nm — bright red. The H-alpha line is the most famous emission line in astronomy."
    }],

    "solid-state": [{
      title: "Example — Density of states in 3D free electron gas",
      prompt: "Derive the density of states $g(\\epsilon)$ for a free 3D electron gas.",
      explain: "Count electron states with energy below $\\epsilon$. Use $\\epsilon = \\hbar^2 k^2/(2m)$, integrate over k-space. Density of states scales as $\\sqrt\\epsilon$ — a signature of 3D.",
      steps: [
        { label: "k-space volume", body: "States with $|k| < k_F$ fill a sphere of volume $\\frac{4}{3}\\pi k_F^3$." },
        { label: "Number of states (per spin)", body: "$N = V (4\\pi k_F^3/3)/(2\\pi)^3 = V k_F^3/(6\\pi^2)$." },
        { label: "DOS", body: "$g(\\epsilon) = dN/d\\epsilon = (V/(2\\pi^2))(2m/\\hbar^2)^{3/2} \\sqrt\\epsilon$." }
      ],
      answer: "$g(\\epsilon) \\propto \\sqrt\\epsilon$ in 3D. (In 2D: constant. In 1D: $1/\\sqrt\\epsilon$.) These dimensional signatures show up in optical and transport measurements."
    }],

    "nuclear": [{
      title: "Example — Half-life from decay constant",
      prompt: "Carbon-14 has a decay constant $\\lambda = 1.21 \\times 10^{-4}$ per year. Find its half-life.",
      explain: "Half-life $t_{1/2} = \\ln 2/\\lambda$. Used in dating organic material — knowing $C^{14}/C^{12}$ ratio fixes time of death.",
      steps: [
        { label: "Apply formula", body: "$t_{1/2} = \\ln 2/\\lambda = 0.693/(1.21 \\times 10^{-4}) \\approx 5730$ years." }
      ],
      answer: "5730 years — within the range of human archaeology. Useful from a few hundred years to about 50,000 years ago."
    }],

    "particle-physics": [{
      title: "Example — Conservation in pion decay",
      prompt: "$\\pi^+ \\to \\mu^+ + \\nu_\\mu$. Verify charge, lepton number, baryon number conservation.",
      explain: "Every conservation law must hold separately. Charge, baryon number, three lepton numbers (electron, muon, tau).",
      steps: [
        { label: "Charge", body: "$+1 = +1 + 0$ ✓." },
        { label: "Baryon number", body: "Pion is meson (B = 0). Muon: B = 0. Neutrino: B = 0. $0 = 0 + 0$ ✓." },
        { label: "Muon lepton number", body: "Pion: 0. $\\mu^+$: $-1$ (antiparticle of muon). $\\nu_\\mu$: $+1$. $0 = -1 + 1$ ✓." }
      ],
      answer: "All conserved. The Standard Model treats these as exact symmetries (well, lepton number conservation has subtle violations from neutrino oscillations — but B-L is essentially exact)."
    }],

    "astrophysics-cosmology": [{
      title: "Example — Friedmann equation for matter-dominated universe",
      prompt: "Show that in a flat matter-dominated universe, the scale factor grows as $a(t) \\propto t^{2/3}$.",
      explain: "Friedmann: $(\\dot a/a)^2 = 8\\pi G\\rho/3$. Matter density scales as $\\rho \\propto 1/a^3$. Plug in, solve.",
      steps: [
        { label: "Friedmann + matter density", body: "$(\\dot a/a)^2 = 8\\pi G \\rho_0/(3 a^3)$. So $\\dot a^2 = (8\\pi G \\rho_0/3) a^{-1}$." },
        { label: "Separate and integrate", body: "$a^{1/2}\\,da = C\\,dt$ where $C = \\sqrt{8\\pi G \\rho_0/3}$. Integrate: $(2/3) a^{3/2} = Ct$." },
        { label: "Solve for a(t)", body: "$a(t) = (3Ct/2)^{2/3} \\propto t^{2/3}$." }
      ],
      answer: "$a(t) \\propto t^{2/3}$. Universe decelerates because matter pulls inward. (Note: today we're radiation-poor and dark-energy dominated, so $a \\propto e^{Ht}$.)"
    }],

    "plasma-physics": [{
      title: "Example — Plasma frequency of the ionosphere",
      prompt: "The ionosphere has electron density $\\sim 10^{12}$ /m³. Find its plasma frequency.",
      explain: "$\\omega_p = \\sqrt{ne^2/(m\\epsilon_0)}$. Frequencies below $\\omega_p$ are reflected by the plasma — that's why long-distance shortwave radio bounces off the ionosphere.",
      steps: [
        { label: "Plug in", body: "$\\omega_p^2 = (10^{12})(1.6\\times10^{-19})^2/((9.11\\times10^{-31})(8.85\\times10^{-12}))$." },
        { label: "Compute", body: "$\\omega_p \\approx 5.6 \\times 10^7$ rad/s, or $f_p \\approx 9$ MHz." }
      ],
      answer: "$f_p \\approx 9$ MHz. AM radio (~1 MHz) bounces off the ionosphere; FM (~100 MHz) doesn't, so it's line-of-sight only."
    }],

    "fluid-dynamics": [{
      title: "Example — Terminal velocity in Stokes regime",
      prompt: "A 1 mm radius water droplet falls through air. Find terminal velocity assuming Stokes drag.",
      explain: "At terminal velocity, weight balances drag: $mg = 6\\pi\\eta r v_t$ (Stokes). Solve for $v_t$. Air viscosity $\\eta \\approx 1.8 \\times 10^{-5}$ Pa·s.",
      steps: [
        { label: "Mass", body: "$m = \\rho_w V = 1000 \\cdot (4/3)\\pi (10^{-3})^3 \\approx 4.2 \\times 10^{-6}$ kg." },
        { label: "Solve", body: "$v_t = mg/(6\\pi\\eta r) = 4.2 \\times 10^{-6} \\cdot 9.8/(6\\pi \\cdot 1.8 \\times 10^{-5} \\cdot 10^{-3}) \\approx 122$ m/s." }
      ],
      answer: "$v_t \\approx 122$ m/s — but Stokes only valid for small Re. Real raindrops fall at ~9 m/s due to turbulent drag at higher Re — a useful warning about applicability."
    }],

    "continuum-elasticity": [{
      title: "Example — Stretch of a steel wire",
      prompt: "A 2 m steel wire of cross section 1 mm² is pulled with 500 N. Young's modulus $E = 200$ GPa. Find the elongation.",
      explain: "Hooke for a wire: $\\Delta L = F L/(A E)$. Tension times length, divided by area and stiffness.",
      steps: [
        { label: "Plug in", body: "$\\Delta L = (500)(2)/((10^{-6})(2 \\times 10^{11})) = 1000/200000 = 5 \\times 10^{-3}$ m = 5 mm." }
      ],
      answer: "5 mm. Steel is incredibly stiff: only 0.25% strain under enormous stress. Bridges and skyscrapers depend on this near-rigidity."
    }],

    "central-force": [{
      title: "Example — Kepler's third law for Earth's orbit",
      prompt: "Earth orbits at 1 AU = $1.5 \\times 10^{11}$ m with period 1 year. Use Kepler to estimate the mass of the Sun.",
      explain: "Kepler: $T^2 = 4\\pi^2 a^3/(GM)$. Solve for $M$.",
      steps: [
        { label: "Setup", body: "$T = 1$ yr $= 3.15 \\times 10^7$ s. $a = 1.5 \\times 10^{11}$ m. $G = 6.67 \\times 10^{-11}$." },
        { label: "Solve", body: "$M = 4\\pi^2 a^3/(G T^2) = 4\\pi^2 (1.5 \\times 10^{11})^3/(6.67 \\times 10^{-11} \\cdot (3.15 \\times 10^7)^2) \\approx 2 \\times 10^{30}$ kg." }
      ],
      answer: "$M_\\odot \\approx 2 \\times 10^{30}$ kg. One Earth orbit, three pieces of data — and you've weighed the Sun."
    }],

    "nonlinear-chaos-physics": [{
      title: "Example — Logistic map fixed points",
      prompt: "Find the fixed points of $x_{n+1} = r x_n (1 - x_n)$ and analyze their stability.",
      explain: "Fixed point: $x^* = r x^* (1 - x^*)$. Stability: $|f'(x^*)| < 1$. As $r$ grows, fixed points lose stability and period-doubling cascade begins.",
      steps: [
        { label: "Fixed points", body: "$x = rx(1 - x) \\Rightarrow x[1 - r(1-x)] = 0$. So $x = 0$ or $x = 1 - 1/r$." },
        { label: "Derivative", body: "$f'(x) = r - 2rx$." },
        { label: "Stability of $x = 0$", body: "$|f'(0)| = |r|$. Stable for $r < 1$." },
        { label: "Stability of $x = 1 - 1/r$", body: "$|f'(1 - 1/r)| = |2 - r|$. Stable for $1 < r < 3$." }
      ],
      answer: "Below $r = 1$: only origin stable. $1 < r < 3$: nontrivial fixed point stable. At $r = 3$: period-doubling begins. At $r \\approx 3.57$: chaos."
    }],

    "angular-momentum-spin": [{
      title: "Example — Addition of two spin-1/2",
      prompt: "Combine two spin-1/2 particles. What are the possible total spins and their multiplicities?",
      explain: "Add angular momenta: $j_1 \\otimes j_2 = (j_1 + j_2) \\oplus (j_1 + j_2 - 1) \\oplus \\ldots \\oplus |j_1 - j_2|$. For two 1/2's: $0 \\oplus 1$.",
      steps: [
        { label: "Range of total j", body: "$j = j_1 + j_2 = 1$ down to $|j_1 - j_2| = 0$. So $j = 0$ or $j = 1$." },
        { label: "Multiplicities", body: "$j = 0$: 1 state (singlet, antisymmetric). $j = 1$: 3 states (triplet, symmetric). Total: 4 states, matching $2 \\cdot 2 = 4$." }
      ],
      answer: "Singlet (j=0) + triplet (j=1). Singlet is antisymmetric under particle exchange — relevant for two electrons in helium ground state."
    }],

    "qm-3d-hydrogen": [{
      title: "Example — Most probable r for hydrogen ground state",
      prompt: "Find the most probable radius for the electron in 1s hydrogen.",
      explain: "Radial probability $P(r) = 4\\pi r^2 |\\psi|^2$. The $r^2$ factor (volume element) shifts the max from $r = 0$. Differentiate and set to zero.",
      steps: [
        { label: "Setup", body: "1s wavefunction: $\\psi \\propto e^{-r/a_0}$. $P(r) \\propto r^2 e^{-2r/a_0}$." },
        { label: "Maximize", body: "$dP/dr = (2r - 2r^2/a_0) e^{-2r/a_0} = 0 \\Rightarrow r = a_0$." }
      ],
      answer: "$r_\\text{max} = a_0 \\approx 5.3 \\times 10^{-11}$ m. The Bohr radius — exactly the value Bohr predicted with his pre-Schrödinger atom model."
    }],

    "perturbation-theory": [{
      title: "Example — First-order Stark shift of hydrogen 1s",
      prompt: "Show that the first-order Stark shift of hydrogen ground state is zero.",
      explain: "Perturbation: $H' = eEz$. First-order correction: $\\langle 1s|H'|1s\\rangle = eE\\langle 1s|z|1s\\rangle$. By symmetry of 1s (spherical), this integral is zero.",
      steps: [
        { label: "Symmetry argument", body: "1s wavefunction is spherically symmetric: $|\\psi_{1s}|^2$ depends only on $r$. $z$ is odd under $z \\to -z$. Integral of odd function over symmetric domain is zero." }
      ],
      answer: "Zero. So 1s Stark effect is QUADRATIC in field — first observed by Stark in 1913. Linear effect requires degenerate excited states ($n \\geq 2$)."
    }],

    "identical-particles": [{
      title: "Example — Two fermions in same trap",
      prompt: "Two non-interacting fermions occupy a 1D harmonic oscillator. Write the ground-state wavefunction.",
      explain: "Pauli exclusion: identical fermions can't share a state. Lowest energy: one in ground state, one in first excited. Wavefunction must be antisymmetric under exchange — use a Slater determinant.",
      steps: [
        { label: "States", body: "$\\phi_0(x)$ = ground state, $\\phi_1(x)$ = first excited." },
        { label: "Slater determinant", body: "$\\Psi(x_1, x_2) = \\dfrac{1}{\\sqrt 2}[\\phi_0(x_1)\\phi_1(x_2) - \\phi_1(x_1)\\phi_0(x_2)]$." }
      ],
      answer: "Antisymmetric Slater determinant. The 'Pauli pressure' that holds up white dwarfs and neutron stars comes from this same antisymmetry."
    }],

    "scattering-theory": [{
      title: "Example — Born approximation for Coulomb potential",
      prompt: "Compute the differential cross section for Coulomb scattering in the Born approximation.",
      explain: "First-order scattering amplitude is the Fourier transform of the potential. Coulomb $V = e^2/(4\\pi\\epsilon_0 r)$. Result: Rutherford formula $d\\sigma/d\\Omega \\propto 1/\\sin^4(\\theta/2)$.",
      steps: [
        { label: "Born amplitude", body: "$f(\\theta) = -(m/2\\pi\\hbar^2) \\int e^{-i\\mathbf q \\cdot \\mathbf r} V(r)\\,d^3r$." },
        { label: "Coulomb Fourier", body: "$\\int e^{-i\\mathbf q \\cdot \\mathbf r} (1/r)\\,d^3r = 4\\pi/q^2$." },
        { label: "Cross section", body: "$d\\sigma/d\\Omega = |f|^2 \\propto 1/q^4 \\propto 1/\\sin^4(\\theta/2)$." }
      ],
      answer: "Rutherford differential cross section. Same answer as classical Rutherford 1911 — quantum mechanics happens to give the same result for Coulomb."
    }],

    "density-matrices": [{
      title: "Example — Maximally mixed state of a qubit",
      prompt: "Write the density matrix for a maximally mixed qubit and compute its von Neumann entropy.",
      explain: "Maximally mixed: 50% |0⟩, 50% |1⟩. Density matrix is $I/2$. Entropy is maximal for the 2D space: 1 bit.",
      steps: [
        { label: "Density matrix", body: "$\\rho = \\frac{1}{2}|0\\rangle\\langle 0| + \\frac{1}{2}|1\\rangle\\langle 1| = \\frac{1}{2}I$." },
        { label: "Eigenvalues", body: "Both 1/2. Pure states would have one eigenvalue 1, rest 0." },
        { label: "Entropy", body: "$S = -\\text{tr}(\\rho \\log \\rho) = -2 \\cdot (1/2)\\log_2(1/2) = 1$ bit." }
      ],
      answer: "$\\rho = I/2$, $S = 1$ bit. Maximally mixed = maximally ignorant about the state. Pure states have $S = 0$."
    }],

    "path-integrals": [{
      title: "Example — Free particle propagator",
      prompt: "Compute the propagator $K(x', T; x, 0)$ for a free particle from $x$ to $x'$ in time $T$.",
      explain: "Path integral: sum over all paths weighted by $e^{iS/\\hbar}$. For free particle, the integral is Gaussian and exactly doable. Result: clean closed form.",
      steps: [
        { label: "Action of straight-line classical path", body: "$S_\\text{cl} = \\frac{m(x' - x)^2}{2T}$." },
        { label: "Gaussian path integral around classical", body: "Result: $K = \\sqrt{m/(2\\pi i\\hbar T)} e^{iS_\\text{cl}/\\hbar}$." }
      ],
      answer: "$K(x', T; x, 0) = \\sqrt{m/(2\\pi i\\hbar T)} \\exp(im(x'-x)^2/(2\\hbar T))$. The exponential is purely the classical action — quantum mechanics whispers small corrections to that."
    }],

    "quantum-information": [{
      title: "Example — Bell state from Hadamard + CNOT",
      prompt: "Show how to create the Bell state $(|00\\rangle + |11\\rangle)/\\sqrt 2$ from $|00\\rangle$.",
      explain: "Step 1: Hadamard on first qubit makes it $(|0\\rangle + |1\\rangle)/\\sqrt 2$. Step 2: CNOT (control=1st, target=2nd) flips second qubit if first is 1. Result: entangled.",
      steps: [
        { label: "After Hadamard on qubit 1", body: "$|00\\rangle \\to (|00\\rangle + |10\\rangle)/\\sqrt 2$." },
        { label: "After CNOT", body: "If first is 0, leave second alone. If first is 1, flip second. So $|10\\rangle \\to |11\\rangle$. Final state: $(|00\\rangle + |11\\rangle)/\\sqrt 2$." }
      ],
      answer: "$(|00\\rangle + |11\\rangle)/\\sqrt 2$ — the Bell state $|\\Phi^+\\rangle$. Maximally entangled. Two simple gates produce the quantum's most peculiar resource."
    }],

    "symmetries-noether": [{
      title: "Example — Energy conservation from time translation",
      prompt: "Show that time-translation invariance of the Lagrangian implies energy conservation.",
      explain: "Noether's theorem: every continuous symmetry of the action gives a conserved quantity. Time-translation symmetry ($t \\to t + \\epsilon$) leads directly to energy conservation. This is THE deepest result in classical mechanics.",
      steps: [
        { label: "Time-independent L", body: "If $L = L(q, \\dot q)$ (no explicit $t$), then $dL/dt = (\\partial L/\\partial q)\\dot q + (\\partial L/\\partial \\dot q)\\ddot q$." },
        { label: "Use Euler-Lagrange", body: "$\\partial L/\\partial q = d/dt(\\partial L/\\partial \\dot q)$." },
        { label: "Combine", body: "$dL/dt = d/dt(\\partial L/\\partial \\dot q) \\dot q + (\\partial L/\\partial \\dot q) \\ddot q = d/dt[(\\partial L/\\partial \\dot q)\\dot q]$. So $d/dt[(\\partial L/\\partial \\dot q)\\dot q - L] = 0$. The conserved quantity is the Hamiltonian $H$ = energy." }
      ],
      answer: "$H = (\\partial L/\\partial \\dot q) \\dot q - L$ is conserved. This is energy. Time invariance ↔ energy conservation."
    }],

    "classical-field-theory": [{
      title: "Example — Wave equation from Klein-Gordon at m = 0",
      prompt: "Derive the massless Klein-Gordon equation from the Lagrangian density $\\mathcal L = \\frac{1}{2}(\\partial_\\mu\\phi)(\\partial^\\mu\\phi)$.",
      explain: "Field-theory Euler-Lagrange: $\\partial_\\mu(\\partial\\mathcal L/\\partial(\\partial_\\mu\\phi)) - \\partial\\mathcal L/\\partial\\phi = 0$. For free scalar, gives the wave equation.",
      steps: [
        { label: "Compute derivatives", body: "$\\partial\\mathcal L/\\partial(\\partial_\\mu\\phi) = \\partial^\\mu\\phi$. $\\partial\\mathcal L/\\partial\\phi = 0$." },
        { label: "Euler-Lagrange", body: "$\\partial_\\mu \\partial^\\mu \\phi = 0 \\Rightarrow \\Box \\phi = 0$, the wave equation." }
      ],
      answer: "$\\Box \\phi = 0$ — equivalent to $(1/c^2)\\partial^2\\phi/\\partial t^2 - \\nabla^2\\phi = 0$. Adding $m^2$ to $\\mathcal L$ gives massive Klein-Gordon."
    }],

    "qft": [{
      title: "Example — Tree-level e+e- → μ+μ-",
      prompt: "Compute the cross-section for $e^+e^- \\to \\mu^+\\mu^-$ at high energy via tree-level QED.",
      explain: "Single photon exchange in s-channel. Compute Feynman amplitude with QED rules, square, integrate over phase space. At high energy: $\\sigma = 4\\pi\\alpha^2/(3s)$.",
      steps: [
        { label: "Feynman amplitude", body: "Two vertices, one photon propagator. Sum over spins, square: $|M|^2 \\propto e^4 (1 + \\cos^2\\theta)$." },
        { label: "Cross section", body: "Integrating over solid angle: $\\sigma = 4\\pi\\alpha^2/(3s)$ where $s = E_\\text{CM}^2$." }
      ],
      answer: "$\\sigma = 4\\pi\\alpha^2/(3s)$. At LEP collider, this set the standard candle for measuring more exotic cross-sections."
    }],

    "renormalization": [{
      title: "Example — Logarithmic running of QED coupling",
      prompt: "Sketch why the QED coupling $\\alpha$ grows logarithmically with energy.",
      explain: "Vacuum polarization: virtual electron-positron pairs screen the bare charge. Probing at higher energy = shorter distance = inside the screen = bigger effective charge.",
      steps: [
        { label: "Vacuum polarization loop", body: "Photon propagator at momentum $q$ gets a one-loop correction $\\sim \\alpha \\ln(q^2/m_e^2)$." },
        { label: "Running coupling", body: "$\\alpha(q^2) = \\alpha_0/(1 - (\\alpha_0/3\\pi)\\ln(q^2/m_e^2))$. Logarithmic growth." }
      ],
      answer: "$\\alpha$ grows logarithmically with $q^2$. From $\\alpha \\approx 1/137$ at low energy to $\\alpha \\approx 1/127$ at $Z$ pole — measured experimentally at LEP."
    }],

    "radiation-theory": [{
      title: "Example — Larmor formula numerical",
      prompt: "An electron accelerates at $10^{20}$ m/s². How much power does it radiate?",
      explain: "Larmor: $P = e^2 a^2/(6\\pi\\epsilon_0 c^3)$. Order-of-magnitude estimate. Used in synchrotron design.",
      steps: [
        { label: "Plug in", body: "$P = (1.6 \\times 10^{-19})^2 (10^{20})^2/(6\\pi \\cdot 8.85 \\times 10^{-12} \\cdot (3 \\times 10^8)^3)$." },
        { label: "Compute", body: "$P \\approx 5.7 \\times 10^{-18}$ W." }
      ],
      answer: "$\\sim 5.7 \\times 10^{-18}$ W per electron. Synchrotrons have huge numbers of electrons producing visible-to-X-ray brightness."
    }],

    "em-waves-matter": [{
      title: "Example — Skin depth in copper at 1 MHz",
      prompt: "Calculate the skin depth of copper at 1 MHz. Conductivity $\\sigma \\approx 5.96 \\times 10^7$ S/m.",
      explain: "Skin effect: high-frequency current flows in a thin surface layer. Depth $\\delta = \\sqrt{2/(\\mu_0 \\sigma \\omega)}$.",
      steps: [
        { label: "Plug in", body: "$\\omega = 2\\pi \\times 10^6$. $\\delta = \\sqrt{2/(4\\pi \\times 10^{-7} \\cdot 5.96 \\times 10^7 \\cdot 2\\pi \\times 10^6)} \\approx 65$ μm." }
      ],
      answer: "$\\delta \\approx 65$ μm — current flows in a layer thinner than a human hair. Why we use Litz wire (many thin strands) for RF circuits — less wasted material."
    }],

    "lasers": [{
      title: "Example — Threshold gain for a Fabry-Perot laser",
      prompt: "A laser cavity has length 10 cm and mirror reflectivities 99% and 100%. Find the threshold gain per unit length.",
      explain: "Round-trip gain must equal round-trip loss. Loss = $-\\ln(R_1 R_2)/2L$ per pass. Gain at threshold equals this.",
      steps: [
        { label: "Loss per round trip", body: "$\\ln(1/(R_1 R_2)) = \\ln(1/0.99) \\approx 0.01$." },
        { label: "Gain per length", body: "$g_\\text{th} = \\ln(1/(R_1 R_2))/(2L) = 0.01/0.2 = 0.05$ /m." }
      ],
      answer: "$g_\\text{th} = 0.05$ m⁻¹ = 0.5% per cm. To lase, the gain medium must provide at least this much per pass."
    }],

    "quantum-optics": [{
      title: "Example — Photon number statistics of a coherent state",
      prompt: "Show that the photon number distribution of $|\\alpha\\rangle$ is Poisson with mean $|\\alpha|^2$.",
      explain: "Coherent state: $|\\alpha\\rangle = e^{-|\\alpha|^2/2}\\sum (\\alpha^n/\\sqrt{n!})|n\\rangle$. Probability of $n$ photons: $|c_n|^2 = |\\alpha|^{2n} e^{-|\\alpha|^2}/n!$ — Poisson with mean $|\\alpha|^2$.",
      steps: [
        { label: "Expand", body: "$|\\langle n|\\alpha\\rangle|^2 = |\\alpha|^{2n} e^{-|\\alpha|^2}/n!$." },
        { label: "Recognize Poisson", body: "Poisson formula $P(n) = e^{-\\lambda}\\lambda^n/n!$ with $\\lambda = |\\alpha|^2$." }
      ],
      answer: "Photon number is Poisson with mean $\\bar n = |\\alpha|^2$. Coherent light from lasers shows this — measured by photon counting. Variance equals mean (shot noise)."
    }],

    "amo": [{
      title: "Example — Doppler limit for laser cooling",
      prompt: "Find the Doppler cooling limit for sodium (linewidth $\\Gamma \\approx 2\\pi \\times 10$ MHz).",
      explain: "Doppler limit: temperature at which cooling stops, set by random spontaneous emission. $T_D = \\hbar\\Gamma/(2k_B)$.",
      steps: [
        { label: "Plug in", body: "$T_D = (1.055 \\times 10^{-34} \\cdot 2\\pi \\cdot 10^7)/(2 \\cdot 1.38 \\times 10^{-23})$." },
        { label: "Compute", body: "$T_D \\approx 240$ μK." }
      ],
      answer: "$T_D \\approx 240$ μK. Sub-Doppler techniques (polarization-gradient cooling) push lower — down to recoil limit around 1 μK."
    }],

    "phase-transitions": [{
      title: "Example — Mean-field critical exponent β",
      prompt: "Show that mean-field theory predicts $\\beta = 1/2$ for magnetization near a 2nd-order transition.",
      explain: "Mean-field free energy: $f = at m^2 + b m^4$ where $t = (T - T_c)/T_c$. Minimize. Below $T_c$: nontrivial minimum at $m \\propto \\sqrt{-t}$.",
      steps: [
        { label: "Minimize", body: "$df/dm = 2at m + 4b m^3 = 0$. So $m = 0$ or $m^2 = -at/(2b)$." },
        { label: "Below T_c", body: "For $t < 0$, $m^2 = |t| \\cdot a/(2b)$, so $m \\propto |t|^{1/2}$. Thus $\\beta = 1/2$." }
      ],
      answer: "$\\beta = 1/2$ mean-field. Real Ising 2D: $\\beta = 1/8$. The difference is due to fluctuations, and is what makes the renormalization group important."
    }],

    "nonequilibrium-statmech": [{
      title: "Example — Einstein relation for diffusion",
      prompt: "Derive the Einstein relation $D = k_B T/\\gamma$ from a Brownian particle in equilibrium.",
      explain: "Two pictures: thermal random walk (diffusion D) and Stokes drag (friction γ). In equilibrium, the fluctuation-dissipation theorem connects them.",
      steps: [
        { label: "Setup", body: "Brownian particle in fluid: random force from kicks, drag from viscosity." },
        { label: "Equilibrium condition", body: "Equipartition: $\\frac{1}{2}m\\langle v^2 \\rangle = \\frac{1}{2}k_B T$ per d.o.f." },
        { label: "Use Langevin equation", body: "$m\\dot v = -\\gamma v + F(t)$ gives stationary $\\langle v^2 \\rangle$. Algebraic manipulation: $D = k_B T/\\gamma$." }
      ],
      answer: "$D = k_B T/\\gamma$. Stunning: diffusion (a transport property) is fixed by temperature and friction. Measure diffusion → infer molecular size — that's how Perrin won the Nobel."
    }],

    "superconductivity": [{
      title: "Example — Critical magnetic field of type-I superconductor",
      prompt: "Lead has $T_c = 7.2$ K and $H_c(0) = 803$ Oe. Find $H_c$ at 4 K using the parabolic approximation.",
      explain: "Empirical formula: $H_c(T) = H_c(0)[1 - (T/T_c)^2]$. Used for design of magnets and superconducting circuits.",
      steps: [
        { label: "Plug in", body: "$H_c(4) = 803 [1 - (4/7.2)^2] = 803 [1 - 0.309] = 803 \\cdot 0.691 \\approx 555$ Oe." }
      ],
      answer: "$H_c(4) \\approx 555$ Oe. Above this field the superconductivity is destroyed."
    }],

    "quantum-hall-topological": [{
      title: "Example — Hall resistance quantization",
      prompt: "Compute the Hall resistance at filling factor $\\nu = 1$.",
      explain: "Quantum Hall: $\\sigma_{xy} = \\nu e^2/h$, so $R_{xy} = h/(\\nu e^2)$. Universal — depends on no material parameter. Used as the resistance standard.",
      steps: [
        { label: "Plug in", body: "$R_{xy} = h/e^2 = (6.626 \\times 10^{-34})/(1.6 \\times 10^{-19})^2 = 25813$ Ω." }
      ],
      answer: "$\\approx 25813$ Ω (the von Klitzing constant). Measured to better than 1 part per billion — the universal quantum of resistance."
    }],

    "phonons": [{
      title: "Example — Debye temperature of diamond",
      prompt: "Diamond has a sound velocity $\\sim 12000$ m/s and lattice spacing $\\sim 3.6$ Å. Estimate Debye temperature.",
      explain: "Debye temperature roughly: $\\Theta_D \\approx \\hbar\\omega_\\text{max}/k_B \\sim \\hbar v_s k_\\text{BZ}/k_B$ where $k_\\text{BZ} \\sim \\pi/a$.",
      steps: [
        { label: "Estimate", body: "$\\Theta_D \\approx \\hbar v_s \\pi/(a k_B) = (1.055 \\times 10^{-34} \\cdot 12000 \\cdot \\pi)/(3.6 \\times 10^{-10} \\cdot 1.38 \\times 10^{-23}) \\approx 800$ K." }
      ],
      answer: "$\\Theta_D \\sim 800$ K (rough). Actual: ~2230 K. The estimate is in the right ballpark; getting the prefactor right requires careful integration."
    }],

    "stellar-evolution": [{
      title: "Example — Sun's main-sequence lifetime",
      prompt: "Estimate the Sun's main-sequence lifetime using its luminosity, hydrogen mass, and energy per fusion.",
      explain: "About 10% of Sun's H is consumed before leaving main sequence. Each fusion of 4H → He releases ~26 MeV. Divide total energy by luminosity.",
      steps: [
        { label: "Total energy", body: "Mass fusable: $0.1 \\cdot 2 \\times 10^{30} = 2 \\times 10^{29}$ kg. Energy: $0.007 \\cdot mc^2 \\approx 1.3 \\times 10^{44}$ J (using 0.7% mass-to-energy)." },
        { label: "Divide by luminosity", body: "$T \\approx 1.3 \\times 10^{44}/(3.8 \\times 10^{26}) \\approx 3.4 \\times 10^{17}$ s $\\approx 10^{10}$ yr." }
      ],
      answer: "About 10 billion years. We're roughly half way."
    }],

    "stellar-nucleosynthesis": [{
      title: "Example — Why iron is the end of fusion",
      prompt: "Explain why elements heavier than iron can't be created by fusion in a stable star.",
      explain: "Binding energy per nucleon peaks at iron-56. Fusing lighter elements RELEASES energy; fusing heavier elements ABSORBS energy. So stars can't power themselves with heavier-than-Fe fusion.",
      steps: [
        { label: "Binding curve", body: "Plot $B/A$ vs $A$: increases sharply through H, He, C, O, Si... peaks at Fe-56 (8.79 MeV/nucleon)... then decreases." },
        { label: "Energy budget", body: "Star = self-gravitating thermonuclear reactor. Must release energy to support itself against gravity. Beyond Fe, fusion costs energy — star collapses." }
      ],
      answer: "Past iron, fusion is endothermic. Heavier elements (Au, U) require neutron-capture in core-collapse supernovae or neutron-star mergers."
    }],

    "compact-objects": [{
      title: "Example — Schwarzschild radius for typical objects",
      prompt: "Compute Schwarzschild radius for Earth (mass $6 \\times 10^{24}$ kg).",
      explain: "$r_s = 2GM/c^2$. For Earth: about 9 mm. To make Earth a black hole, compress it to a marble.",
      steps: [
        { label: "Plug in", body: "$r_s = 2(6.67 \\times 10^{-11})(6 \\times 10^{24})/(3 \\times 10^8)^2 \\approx 8.9 \\times 10^{-3}$ m = 8.9 mm." }
      ],
      answer: "$r_s \\approx 9$ mm. Earth would need to be compressed to 9 mm radius to become a black hole — a density of $\\sim 10^{30}$ kg/m³."
    }],

    "galactic-dynamics": [{
      title: "Example — Galactic rotation curve and dark matter",
      prompt: "If the visible matter in a galaxy were the only mass, predicted orbital velocity at radius $r$ would fall as $1/\\sqrt r$ outside. Observation shows it's nearly constant. What does that mean?",
      explain: "Kepler: $v^2 = GM(r)/r$, where $M(r)$ is mass enclosed within radius $r$. Flat rotation curve means $M(r) \\propto r$ — much more mass at large $r$ than the visible light suggests. Hence dark matter.",
      steps: [
        { label: "Visible matter only", body: "Most light from inner part. At large $r$: $M(r) \\approx$ const. So $v(r) \\propto 1/\\sqrt r$." },
        { label: "Observed", body: "$v(r) \\approx$ const at large $r$ → $M(r) \\propto r$." }
      ],
      answer: "Dark matter halo with mass growing linearly with radius. Galaxies are ≥ 90% dark matter by mass."
    }],

    "bbn-cmb-inflation": [{
      title: "Example — Helium-4 mass fraction from BBN",
      prompt: "Explain why the universe is ≈25% helium by mass.",
      explain: "At the freezeout temperature (~1 MeV), $n/p \\approx e^{-\\Delta m/T} \\approx 1/6$. Roughly all neutrons end up in $^4$He. Each $^4$He has 2 neutrons. Mass fraction $\\approx 2n/(n+p) \\cdot 1/(\\text{factor})$.",
      steps: [
        { label: "Neutron-to-proton ratio", body: "$n/p \\approx 1/6$ at freezeout (then decays slightly until BBN proper)." },
        { label: "Final Y", body: "$Y = 2n/(n + p) \\approx 2(1/7)/(8/7) = 2/8 = 0.25$." }
      ],
      answer: "≈25% by mass. Observed: 24-25%. Stunning agreement — one of the pillars of Big Bang cosmology."
    }],

    "gravitational-waves": [{
      title: "Example — Strain from a binary merger",
      prompt: "GW150914 detected strain $h \\sim 10^{-21}$ from binary BH merger at 400 Mpc. Estimate the GW power radiated.",
      explain: "Strain falls as $1/r$ from source. Power scales as $h^2 r^2$. For GW150914 the power peaked at $\\sim 200$ solar masses worth of luminosity converted to GWs.",
      steps: [
        { label: "Energy flux", body: "$F \\sim c^3 h^2 \\dot h^2/(16\\pi G) \\sim$ enormous for $\\dot h \\sim h \\cdot 200$ Hz." },
        { label: "Total power", body: "Multiply by $4\\pi r^2$: $P \\sim 3.6 \\times 10^{49}$ W — more than all stars combined for 0.2 s." }
      ],
      answer: "About $3.6 \\times 10^{49}$ W at peak. Most energetic event humans have ever observed — but invisible to optical telescopes."
    }],

    "high-energy-astrophysics": [{
      title: "Example — Synchrotron critical frequency",
      prompt: "An electron with Lorentz factor $\\gamma = 10^4$ in a 10 μG field. Find the synchrotron critical frequency.",
      explain: "Synchrotron critical $\\omega_c = (3/2)\\gamma^3 \\omega_B$ where $\\omega_B = eB/(mc)$ is the gyrofrequency.",
      steps: [
        { label: "Gyrofrequency", body: "$\\omega_B = eB/m = 1.6\\times10^{-19} \\cdot 10^{-9}/(9.11\\times10^{-31}) \\approx 176$ rad/s." },
        { label: "Synchrotron critical", body: "$\\omega_c \\sim 1.5 \\cdot (10^4)^3 \\cdot 176 \\approx 2.6 \\times 10^{14}$ rad/s. Optical-IR range." }
      ],
      answer: "$\\omega_c \\sim 3 \\times 10^{14}$ rad/s (visible-IR). For higher-energy electrons or stronger fields, frequencies push into X-ray and γ-ray ranges."
    }],

    "math-methods-physics": [{
      title: "Example — Gaussian integral via differentiation under integral sign",
      prompt: "Compute $\\int_{-\\infty}^\\infty x^2 e^{-\\alpha x^2}\\,dx$.",
      explain: "Trick: $\\int e^{-\\alpha x^2}\\,dx = \\sqrt{\\pi/\\alpha}$. Differentiate both sides with respect to $\\alpha$ to bring down a factor of $x^2$.",
      steps: [
        { label: "Differentiate", body: "$\\frac{d}{d\\alpha}\\int e^{-\\alpha x^2}dx = -\\int x^2 e^{-\\alpha x^2}dx$. And $\\frac{d}{d\\alpha}\\sqrt{\\pi/\\alpha} = -\\frac{1}{2}\\sqrt{\\pi}\\alpha^{-3/2}$." },
        { label: "Compare", body: "$\\int x^2 e^{-\\alpha x^2}dx = \\frac{1}{2}\\sqrt{\\pi}\\alpha^{-3/2} = \\frac{\\sqrt\\pi}{2\\alpha\\sqrt\\alpha}$." }
      ],
      answer: "$\\dfrac{\\sqrt\\pi}{2\\alpha^{3/2}}$. Trick generalizes to compute $\\int x^{2n} e^{-\\alpha x^2}dx$ by differentiating $n$ times."
    }],

    "group-theory-physics": [{
      title: "Example — Decompose a rep of $S_3$",
      prompt: "$S_3$ has irreps of dimension 1, 1, 2. The 3D permutation representation decomposes as ?",
      explain: "Use character orthogonality. Permutation rep has character $\\chi(\\sigma)$ = number of fixed points of $\\sigma$. Decompose by computing inner products with each irrep character.",
      steps: [
        { label: "Permutation rep characters", body: "Identity (3 fixed pts), 3 transpositions (1 fixed pt), 2 three-cycles (0 fixed pts). $\\chi = (3, 1, 0)$." },
        { label: "Inner products with irreps", body: "Trivial: $(3+3+0)/6 = 1$. Sign: $(3-3+0)/6 = 0$. 2D: $(6+0+0)/6 = 1$." }
      ],
      answer: "Permutation rep = trivial ⊕ 2D irrep. Identity reduces to: dimension $3 = 1 + 2$ ✓."
    }],

    "computational-physics": [{
      title: "Example — Euler method for a falling object",
      prompt: "Use Euler's method to simulate a falling ball with $g = 10$ m/s², starting at rest from height 100 m, using step $\\Delta t = 0.5$ s.",
      explain: "Discretize: $v_{n+1} = v_n + g\\Delta t$, $y_{n+1} = y_n - v_n \\Delta t$. Iterate until $y < 0$. Simple but introduces stability and accuracy issues.",
      steps: [
        { label: "Initial", body: "$y_0 = 100$, $v_0 = 0$." },
        { label: "Step 1", body: "$v_1 = 0 + 10 \\cdot 0.5 = 5$. $y_1 = 100 - 0 = 100$." },
        { label: "Step 2", body: "$v_2 = 5 + 5 = 10$. $y_2 = 100 - 2.5 = 97.5$." },
        { label: "Continue", body: "Continue until $y < 0$. Better methods (Verlet, RK4) give much more accuracy per step." }
      ],
      answer: "Euler is order $O(\\Delta t)$ — error halves when step halves. RK4 is $O(\\Delta t^4)$ — error 16x lower for same step. Always use RK4 or symplectic for physics."
    }],

    "soft-matter-biophysics": [{
      title: "Example — End-to-end distance of a polymer",
      prompt: "Estimate the RMS end-to-end distance of a polymer with N = 10000 segments, each of length b = 1.5 Å (random walk model).",
      explain: "Ideal random walk: $\\langle R^2\\rangle = Nb^2$, so $R_\\text{rms} = b\\sqrt N$. Independent of details — a universal scaling.",
      steps: [
        { label: "Compute", body: "$R_\\text{rms} = 1.5 \\sqrt{10000} = 1.5 \\cdot 100 = 150$ Å = 15 nm." }
      ],
      answer: "$R_\\text{rms} \\approx 15$ nm. Note: contour length is $Nb = 1.5$ μm — 100× longer than the typical end-to-end distance. Polymers are coiled."
    }]
  });
})();
