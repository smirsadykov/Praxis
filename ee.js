// Electrical Engineering curriculum — circuit analysis through digital systems.
window.CONTENT = window.CONTENT || {};
window.CONTENT.ee = [
  {
    id: "circuit-basics",
    title: "Circuit Basics — Charge, Current, Voltage",
    level: "basic",
    summary: "What current and voltage actually are. Conventional vs electron flow. Power.",
    examples: [
      { title: "Example 1 — Current from charge", prompt: "$10$ C of charge flow through a wire in $4$ s. What is the current?", steps: [
        { label: "Definition", body: "Current $I = Q/t$ where $Q$ is charge (coulombs) and $t$ is time (seconds)." },
        { label: "Plug in", body: "$I = 10/4 = 2.5$ A." }
      ], answer: "$2.5$ A" },
      { title: "Example 2 — Power", prompt: "A device runs at $12$ V and draws $0.5$ A. How much power does it use?", steps: [
        { label: "Power", body: "$P = VI$." },
        { label: "Compute", body: "$P = 12 \\times 0.5 = 6$ W." }
      ], answer: "$6$ W" },
      { title: "Example 3 — Energy used", prompt: "Run a $60$ W bulb for $2$ hours. Energy used?", steps: [
        { label: "Energy", body: "$E = P \\times t = 60 \\times 7200 = 432{,}000$ J = $432$ kJ." },
        { label: "In kWh", body: "$E = 60 \\text{ W} \\times 2 \\text{ h} = 120$ Wh = $0.12$ kWh." }
      ], answer: "$432$ kJ or $0.12$ kWh" }
    ],
    tasks: [
      { q: "$20$ C flow in $5$ s. Current?", a: "$4$ A" },
      { q: "Power for $24$ V, $2$ A?", a: "$48$ W" },
      { q: "Charge in $3$ A over $10$ s?", a: "$30$ C" },
      { q: "Voltage when $5$ W is delivered at $0.5$ A?", a: "$10$ V" },
      { q: "Energy from $100$ W for $1$ hr in kWh?", a: "$0.1$ kWh" },
      { q: "Conventional current flows from which terminal of a battery?", a: "Positive" },
      { q: "SI unit of voltage?", a: "Volt (V)" },
      { q: "SI unit of current?", a: "Ampere (A)" },
      { q: "$1$ kWh in joules?", a: "$3{,}600{,}000$ J" },
      { q: "Does a battery convert energy or store it?", a: "Stores electrochemical energy" }
    ]
  },
  {
    id: "ohms-law",
    title: "Ohm's Law & Resistors",
    level: "basic",
    summary: "$V = IR$. Series and parallel resistor combinations. Voltage and current dividers.",
    examples: [
      { title: "Example 1 — Ohm's law", prompt: "A $220\\,\\Omega$ resistor across a $5$ V supply. Find current.", steps: [
        { label: "Apply", body: "$I = V/R = 5/220 \\approx 0.0227$ A = $22.7$ mA." }
      ], answer: "$22.7$ mA" },
      { title: "Example 2 — Series resistors", prompt: "Three resistors in series: $100\\,\\Omega$, $220\\,\\Omega$, $330\\,\\Omega$. Total?", steps: [
        { label: "Add", body: "$R_\\text{tot} = 100 + 220 + 330 = 650\\,\\Omega$." }
      ], answer: "$650\\,\\Omega$" },
      { title: "Example 3 — Parallel resistors", prompt: "Two resistors in parallel: $300\\,\\Omega$ and $600\\,\\Omega$. Total?", steps: [
        { label: "Reciprocal sum", body: "$1/R = 1/300 + 1/600 = 3/600 = 1/200$." },
        { label: "Invert", body: "$R = 200\\,\\Omega$." }
      ], answer: "$200\\,\\Omega$" },
      { title: "Example 4 — Voltage divider", prompt: "$10$ V across $R_1 = 1$ k$\\Omega$ in series with $R_2 = 4$ k$\\Omega$. $V_{R_2}$?", steps: [
        { label: "Divider formula", body: "$V_{R_2} = V \\cdot R_2/(R_1 + R_2)$." },
        { label: "Compute", body: "$V_{R_2} = 10 \\cdot 4/5 = 8$ V." }
      ], answer: "$8$ V" }
    ],
    tasks: [
      { q: "$V = 12$ V, $R = 3\\,\\Omega$. $I$?", a: "$4$ A" },
      { q: "$I = 2$ A, $R = 5\\,\\Omega$. $V$?", a: "$10$ V" },
      { q: "$V = 9$ V, $I = 3$ A. $R$?", a: "$3\\,\\Omega$" },
      { q: "Two $100\\,\\Omega$ in series?", a: "$200\\,\\Omega$" },
      { q: "Two $100\\,\\Omega$ in parallel?", a: "$50\\,\\Omega$" },
      { q: "Voltage divider $1$ k$\\Omega$ / $9$ k$\\Omega$, $V_\\text{in} = 10$ V. $V$ across $1$ k?", a: "$1$ V" },
      { q: "$P = I^2 R$ at $2$ A, $5\\,\\Omega$?", a: "$20$ W" },
      { q: "$P = V^2/R$ at $10$ V, $20\\,\\Omega$?", a: "$5$ W" },
      { q: "Resistance of a $50$ W bulb at $120$ V?", a: "$288\\,\\Omega$" },
      { q: "Three $9\\,\\Omega$ resistors in parallel?", a: "$3\\,\\Omega$" }
    ]
  },
  {
    id: "kirchhoff-laws",
    title: "Kirchhoff's Laws",
    level: "basic",
    summary: "KCL (current sum at a node = 0). KVL (voltage sum around a loop = 0). Node and mesh analysis.",
    examples: [
      { title: "Example 1 — KCL at a node", prompt: "Currents flowing into a node: $3$ A and $2$ A. One current flows out. Find it.", steps: [
        { label: "KCL", body: "Sum in = sum out: $3 + 2 = I_\\text{out}$." },
        { label: "Compute", body: "$I_\\text{out} = 5$ A." }
      ], answer: "$5$ A" },
      { title: "Example 2 — KVL around a loop", prompt: "A $12$ V battery in a loop with two resistors. The voltage drop across $R_1$ is $5$ V. Find $V_{R_2}$.", steps: [
        { label: "KVL", body: "Sum of voltage drops around the loop = 0: $12 - 5 - V_{R_2} = 0$." },
        { label: "Solve", body: "$V_{R_2} = 7$ V." }
      ], answer: "$7$ V" },
      { title: "Example 3 — Mesh analysis", prompt: "Single-loop circuit: $V = 12$ V drives $R_1 = 4\\,\\Omega$ in series with $R_2 = 8\\,\\Omega$. Mesh current?", steps: [
        { label: "KVL around loop", body: "$12 - 4I - 8I = 0$." },
        { label: "Solve", body: "$12I = 12$, so $I = 1$ A." }
      ], answer: "$1$ A" }
    ],
    tasks: [
      { q: "Two currents in: $4$ A and $1$ A. One out — find it.", a: "$5$ A" },
      { q: "KCL: $7$ A in, $3$ A out via branch A, branch B out?", a: "$4$ A" },
      { q: "KVL: $9$ V battery, drop across $R_1$ = $2$ V. $V_{R_2}$?", a: "$7$ V" },
      { q: "Series loop $V = 6$ V, $R_1 = R_2 = 3\\,\\Omega$. Current?", a: "$1$ A" },
      { q: "KCL applies to ____", a: "Charge conservation" },
      { q: "KVL applies to ____", a: "Energy conservation" },
      { q: "Mesh analysis uses which law?", a: "KVL" },
      { q: "Node analysis uses which law?", a: "KCL" },
      { q: "For $n$ nodes, how many independent node equations?", a: "$n-1$" },
      { q: "Sign convention for voltage drop in KVL: which direction is positive?", a: "Direction of assumed current" }
    ]
  },
  {
    id: "rc-circuits",
    title: "RC Circuits — Charging and Discharging",
    level: "intermediate",
    summary: "First-order response. Time constant $\\tau = RC$. Exponential approach to final value.",
    examples: [
      { title: "Example 1 — Time constant", prompt: "$R = 10$ k$\\Omega$, $C = 10\\,\\mu$F. Find $\\tau$.", steps: [
        { label: "Compute", body: "$\\tau = RC = 10^4 \\cdot 10^{-5} = 0.1$ s." }
      ], answer: "$0.1$ s" },
      { title: "Example 2 — Charging", prompt: "Capacitor initially uncharged. Switch closes at $t = 0$ connecting to a $5$ V supply through $R = 1$ k$\\Omega$, $C = 100\\,\\mu$F. Voltage at $t = 0.2$ s?", steps: [
        { label: "Time constant", body: "$\\tau = RC = 0.1$ s." },
        { label: "Formula", body: "$V(t) = V_\\text{f}(1 - e^{-t/\\tau})$." },
        { label: "Plug in", body: "$V(0.2) = 5 \\cdot (1 - e^{-2}) \\approx 5 \\cdot 0.865 \\approx 4.32$ V." }
      ], answer: "$\\approx 4.32$ V" },
      { title: "Example 3 — Discharging", prompt: "Capacitor charged to $10$ V discharges through $R = 2$ k$\\Omega$, $C = 50\\,\\mu$F. Voltage after $0.1$ s?", steps: [
        { label: "Time constant", body: "$\\tau = 0.1$ s." },
        { label: "Formula", body: "$V(t) = V_0 e^{-t/\\tau}$." },
        { label: "Plug in", body: "$V(0.1) = 10 \\cdot e^{-1} \\approx 3.68$ V." }
      ], answer: "$\\approx 3.68$ V" }
    ],
    tasks: [
      { q: "$R = 5$ k$\\Omega$, $C = 2\\,\\mu$F. $\\tau$?", a: "$10$ ms" },
      { q: "After one $\\tau$, charging capacitor reaches what fraction of final?", a: "$\\approx 63.2\\%$" },
      { q: "After $5\\tau$, capacitor is at what fraction of final?", a: "$> 99\\%$" },
      { q: "Initial current when capacitor uncharged, $V = 10$ V, $R = 1$ k$\\Omega$?", a: "$10$ mA" },
      { q: "Steady-state current through a capacitor in DC?", a: "$0$" },
      { q: "Charge on a $10\\,\\mu$F capacitor at $5$ V?", a: "$50\\,\\mu$C" },
      { q: "Energy stored in that capacitor?", a: "$125\\,\\mu$J" },
      { q: "Time constant unit?", a: "Seconds" },
      { q: "Doubling $R$ does what to $\\tau$?", a: "Doubles it" },
      { q: "RC circuit acts as what kind of filter for low frequencies?", a: "Low-pass (across the capacitor)" }
    ]
  },
  {
    id: "rl-rlc-circuits",
    title: "RL & RLC Circuits",
    level: "intermediate",
    summary: "Inductor energy storage, $\\tau = L/R$. Second-order resonance, damping, $Q$ factor.",
    examples: [
      { title: "Example 1 — RL time constant", prompt: "$R = 200\\,\\Omega$, $L = 100$ mH. $\\tau$?", steps: [
        { label: "Compute", body: "$\\tau = L/R = 0.1/200 = 0.5$ ms." }
      ], answer: "$0.5$ ms" },
      { title: "Example 2 — RLC resonance", prompt: "Series RLC with $L = 10$ mH, $C = 1\\,\\mu$F. Find resonant frequency.", steps: [
        { label: "Formula", body: "$\\omega_0 = 1/\\sqrt{LC}$." },
        { label: "Compute", body: "$\\omega_0 = 1/\\sqrt{10^{-8}} = 10^4$ rad/s. $f_0 = \\omega_0/(2\\pi) \\approx 1592$ Hz." }
      ], answer: "$\\approx 1.59$ kHz" },
      { title: "Example 3 — Quality factor", prompt: "Same circuit with $R = 5\\,\\Omega$. Find $Q$.", steps: [
        { label: "Formula", body: "$Q = \\omega_0 L/R$." },
        { label: "Compute", body: "$Q = 10^4 \\cdot 10^{-2}/5 = 20$." }
      ], answer: "$Q = 20$" }
    ],
    tasks: [
      { q: "Energy in $L = 0.1$ H at $I = 2$ A?", a: "$0.2$ J" },
      { q: "RL with $R = 10\\,\\Omega$, $L = 1$ H. $\\tau$?", a: "$0.1$ s" },
      { q: "Resonance of $L = 1$ mH, $C = 1$ nF?", a: "$\\approx 159$ kHz" },
      { q: "What does inductor oppose changes in?", a: "Current" },
      { q: "What does capacitor oppose changes in?", a: "Voltage" },
      { q: "At resonance, impedance of series LC?", a: "Pure real (= $R$)" },
      { q: "Higher $Q$ means broader or narrower bandwidth?", a: "Narrower" },
      { q: "Critical damping: oscillates or not?", a: "Not (fastest non-oscillating)" },
      { q: "Underdamped: $\\zeta$ range?", a: "$0 < \\zeta < 1$" },
      { q: "Inductive reactance at $\\omega = 1000$ rad/s, $L = 10$ mH?", a: "$10\\,\\Omega$" }
    ]
  },
  {
    id: "ac-phasors",
    title: "AC Circuits & Phasors",
    level: "intermediate",
    summary: "Sinusoidal steady state. Phasors. Impedance. Complex power.",
    examples: [
      { title: "Example 1 — Phasor from sinusoid", prompt: "Express $v(t) = 170\\cos(377 t + 30°)$ V as a phasor.", steps: [
        { label: "Phasor", body: "Magnitude = amplitude (or rms). Angle = phase. $\\mathbf V = 170\\angle 30°$ V (peak) or $120\\angle 30°$ V rms." }
      ], answer: "$\\mathbf V = 120\\angle 30°$ V (rms)" },
      { title: "Example 2 — Capacitive impedance", prompt: "$C = 1\\,\\mu$F at $\\omega = 1000$ rad/s. Find $Z_C$.", steps: [
        { label: "Formula", body: "$Z_C = 1/(j\\omega C) = -j/(\\omega C)$." },
        { label: "Compute", body: "$Z_C = -j/(10^3 \\cdot 10^{-6}) = -j1000\\,\\Omega$." }
      ], answer: "$-j1000\\,\\Omega$" },
      { title: "Example 3 — RMS to peak", prompt: "An AC source has $V_\\text{rms} = 120$ V. Peak?", steps: [
        { label: "Conversion", body: "$V_\\text{peak} = V_\\text{rms} \\sqrt 2$." },
        { label: "Compute", body: "$V_\\text{peak} \\approx 169.7$ V." }
      ], answer: "$\\approx 169.7$ V" }
    ],
    tasks: [
      { q: "$Z_L$ at $\\omega = 100$ rad/s, $L = 0.5$ H?", a: "$j50\\,\\Omega$" },
      { q: "$Z_R$ for $R = 100\\,\\Omega$?", a: "$100\\,\\Omega$ (real)" },
      { q: "Phasor of $i(t) = 5\\cos(\\omega t - 45°)$?", a: "$5\\angle{-45°}$" },
      { q: "Power factor of a purely resistive load?", a: "$1$" },
      { q: "Power factor of a purely inductive load?", a: "$0$ (lagging)" },
      { q: "Apparent power $S$ at $V = 120$ V, $I = 5$ A rms?", a: "$600$ VA" },
      { q: "Real power $P$ if $\\cos\\phi = 0.8$?", a: "$480$ W" },
      { q: "Reactive power $Q$ in that case?", a: "$360$ VAR" },
      { q: "US line frequency?", a: "$60$ Hz" },
      { q: "Europe line frequency?", a: "$50$ Hz" }
    ]
  },
  {
    id: "thevenin-norton",
    title: "Thévenin & Norton Equivalents",
    level: "intermediate",
    summary: "Replace any linear two-terminal network with a voltage source + series resistor (Thévenin) or current source + parallel resistor (Norton).",
    examples: [
      { title: "Example 1 — Find Thévenin voltage", prompt: "$12$ V source, $R_1 = 4\\,\\Omega$ in series with $R_2 = 8\\,\\Omega$ to ground. Thévenin voltage seen at $R_2$ terminals (open)?", steps: [
        { label: "Open-circuit voltage", body: "With load removed, no current flows through $R_1$ to the load. Voltage divider: $V_\\text{th} = 12 \\cdot 8/(4+8) = 8$ V." }
      ], answer: "$V_\\text{th} = 8$ V" },
      { title: "Example 2 — Find Thévenin resistance", prompt: "Same circuit. Find $R_\\text{th}$.", steps: [
        { label: "Deactivate sources", body: "Short the voltage source." },
        { label: "Resistance at terminals", body: "$R_1$ and $R_2$ are now in parallel: $R_\\text{th} = (4 \\cdot 8)/(4+8) = 32/12 \\approx 2.67\\,\\Omega$." }
      ], answer: "$R_\\text{th} \\approx 2.67\\,\\Omega$" },
      { title: "Example 3 — Norton equivalent", prompt: "Convert previous Thévenin to Norton.", steps: [
        { label: "Norton current", body: "$I_N = V_\\text{th}/R_\\text{th} = 8/2.67 \\approx 3$ A." },
        { label: "Norton resistance", body: "$R_N = R_\\text{th} = 2.67\\,\\Omega$." }
      ], answer: "$I_N = 3$ A, $R_N = 2.67\\,\\Omega$" }
    ],
    tasks: [
      { q: "Thévenin voltage = ___ at terminals.", a: "Open-circuit voltage" },
      { q: "Thévenin resistance is found by ___ all independent sources.", a: "Deactivating" },
      { q: "Convert: $V_\\text{th} = 10$ V, $R_\\text{th} = 5\\,\\Omega$ to Norton.", a: "$I_N = 2$ A, $R_N = 5\\,\\Omega$" },
      { q: "Convert: $I_N = 4$ A, $R_N = 3\\,\\Omega$ to Thévenin.", a: "$V_\\text{th} = 12$ V, $R_\\text{th} = 3\\,\\Omega$" },
      { q: "Max power transfer occurs when load = ___.", a: "$R_\\text{th}$" },
      { q: "Max power delivered to matched load with $V_\\text{th} = 12$ V, $R_\\text{th} = 4\\,\\Omega$?", a: "$9$ W" },
      { q: "Deactivating a current source means ____ it.", a: "Opening" },
      { q: "Deactivating a voltage source means ____ it.", a: "Shorting" },
      { q: "Thévenin equivalent works for what kind of network?", a: "Linear" },
      { q: "Norton current = short-circuit current at terminals?", a: "Yes" }
    ]
  },
  {
    id: "diodes-rectifiers",
    title: "Diodes & Rectifiers",
    level: "intermediate",
    summary: "Diode conducts in one direction. $V_F \\approx 0.7$ V (Si). Half-wave and bridge rectifiers.",
    examples: [
      { title: "Example 1 — Diode in series with resistor", prompt: "$5$ V source, ideal diode (forward), $1$ k$\\Omega$ resistor in series. Current?", steps: [
        { label: "Diode drop", body: "Use $V_F = 0.7$ V model." },
        { label: "Current", body: "$I = (5 - 0.7)/1000 = 4.3$ mA." }
      ], answer: "$4.3$ mA" },
      { title: "Example 2 — Half-wave rectifier", prompt: "$120$ V rms AC into a single diode followed by load. DC output (avg)?", steps: [
        { label: "Peak", body: "$V_p = 120\\sqrt 2 \\approx 170$ V." },
        { label: "Average", body: "$V_\\text{avg} = V_p/\\pi \\approx 54$ V (idealized)." }
      ], answer: "$\\approx 54$ V (ignoring diode drop)" },
      { title: "Example 3 — Full-wave bridge", prompt: "Same input, full-wave bridge rectifier. DC output?", steps: [
        { label: "Two pulses per cycle", body: "$V_\\text{avg} = 2V_p/\\pi$." },
        { label: "Compute", body: "$V_\\text{avg} \\approx 108$ V." }
      ], answer: "$\\approx 108$ V" }
    ],
    tasks: [
      { q: "Si diode forward drop approx?", a: "$0.7$ V" },
      { q: "Ge diode forward drop approx?", a: "$0.3$ V" },
      { q: "Reverse biased ideal diode: current?", a: "$0$" },
      { q: "Bridge rectifier uses how many diodes?", a: "$4$" },
      { q: "LED needs current limiting because?", a: "Diode I-V is exponential — runaway risk" },
      { q: "Zener diode used as ____?", a: "Voltage reference / regulator" },
      { q: "Peak-to-peak from $120$ V rms?", a: "$\\approx 340$ V" },
      { q: "Diode equation: $I = I_S(e^{V/V_T} - 1)$. What is $V_T$ at room T?", a: "$\\approx 26$ mV" },
      { q: "Direction of conventional current in forward-biased diode?", a: "Anode to cathode" },
      { q: "Schottky diode advantage over Si pn?", a: "Lower forward drop and faster switching" }
    ]
  },
  {
    id: "op-amps",
    title: "Operational Amplifiers",
    level: "intermediate",
    summary: "Ideal op-amp: infinite gain, no input current, virtual short. Inverting, non-inverting, summing, integrator.",
    examples: [
      { title: "Example 1 — Inverting amplifier", prompt: "$R_f = 100$ k$\\Omega$, $R_\\text{in} = 10$ k$\\Omega$. Input $0.5$ V. Output?", steps: [
        { label: "Gain", body: "$A_v = -R_f/R_\\text{in} = -10$." },
        { label: "Output", body: "$V_o = -10 \\cdot 0.5 = -5$ V." }
      ], answer: "$-5$ V" },
      { title: "Example 2 — Non-inverting amplifier", prompt: "$R_f = 90$ k$\\Omega$, $R_g = 10$ k$\\Omega$ to ground. Input $0.5$ V. Output?", steps: [
        { label: "Gain", body: "$A_v = 1 + R_f/R_g = 10$." },
        { label: "Output", body: "$V_o = 10 \\cdot 0.5 = 5$ V." }
      ], answer: "$5$ V" },
      { title: "Example 3 — Voltage follower (buffer)", prompt: "Op-amp output connected directly to inverting input, signal to non-inverting. What does it do?", steps: [
        { label: "Gain", body: "$A_v = 1$ (unity gain)." },
        { label: "Purpose", body: "High input impedance, low output impedance — buffers signal sources." }
      ], answer: "Voltage follower, gain = $1$" }
    ],
    tasks: [
      { q: "Ideal op-amp input impedance?", a: "Infinite" },
      { q: "Ideal op-amp output impedance?", a: "Zero" },
      { q: "Inverting gain with $R_f = 47$ k, $R_\\text{in} = 4.7$ k?", a: "$-10$" },
      { q: "Non-inverting gain with $R_f = 99$ k, $R_g = 1$ k?", a: "$100$" },
      { q: "Virtual short means $V_+ \\approx V_-$. Why?", a: "Negative feedback drives error to zero with infinite gain" },
      { q: "Op-amp integrator: feedback element is?", a: "Capacitor" },
      { q: "Differentiator: input element is?", a: "Capacitor" },
      { q: "What sets practical bandwidth of op-amp circuit?", a: "Gain-bandwidth product (GBW)" },
      { q: "Slew rate units?", a: "V/μs" },
      { q: "Summing amp: $V_o = -R_f(V_1/R_1 + V_2/R_2 + \\ldots)$. Holds when?", a: "Virtual short at inverting input" }
    ]
  },
  {
    id: "transistors-bjt",
    title: "BJT Transistors",
    level: "intermediate",
    summary: "NPN/PNP. Base-emitter $\\approx 0.7$ V in forward active. $I_C = \\beta I_B$. Common-emitter amplifier.",
    examples: [
      { title: "Example 1 — Collector current", prompt: "NPN with $\\beta = 100$, $I_B = 20\\,\\mu$A. Find $I_C$.", steps: [
        { label: "Formula", body: "$I_C = \\beta I_B$." },
        { label: "Compute", body: "$I_C = 100 \\cdot 20\\,\\mu\\text A = 2$ mA." }
      ], answer: "$I_C = 2$ mA" },
      { title: "Example 2 — Emitter current", prompt: "Same. Find $I_E$.", steps: [
        { label: "KCL", body: "$I_E = I_B + I_C = 20\\,\\mu\\text A + 2$ mA $\\approx 2.02$ mA." }
      ], answer: "$\\approx 2.02$ mA" },
      { title: "Example 3 — Saturation check", prompt: "NPN with $V_{CC} = 10$ V, $R_C = 5$ k$\\Omega$, $I_B = 100\\,\\mu$A, $\\beta = 100$. Is it saturated?", steps: [
        { label: "If active", body: "$I_C = \\beta I_B = 10$ mA → $V_{R_C} = 50$ V. But $V_{CC}$ only $10$ V — impossible." },
        { label: "Saturated", body: "$I_C$ limited by external: $I_{C,\\text{sat}} \\approx V_{CC}/R_C = 2$ mA. $V_{CE} \\approx 0.2$ V." }
      ], answer: "Saturated. $I_C \\approx 2$ mA, $V_{CE} \\approx 0.2$ V." }
    ],
    tasks: [
      { q: "NPN forward active: $V_{BE} \\approx$?", a: "$0.7$ V" },
      { q: "$\\beta = 200$, $I_B = 10\\,\\mu$A. $I_C$?", a: "$2$ mA" },
      { q: "Direction of conventional current in NPN collector?", a: "Into collector" },
      { q: "Common-emitter amplifier: phase relationship of $V_o$ to $V_i$?", a: "Inverted ($180°$)" },
      { q: "$V_{CE,\\text{sat}} \\approx$?", a: "$0.2$ V" },
      { q: "What does $\\beta$ depend on?", a: "Device, temperature, $I_C$" },
      { q: "BJT in cutoff: $I_C$?", a: "$\\approx 0$" },
      { q: "Early voltage describes?", a: "Output resistance from base-width modulation" },
      { q: "PNP differs from NPN how?", a: "Polarity of currents and voltages all reversed" },
      { q: "Switch use: which two regions?", a: "Cutoff and saturation" }
    ]
  },
  {
    id: "transistors-mosfet",
    title: "MOSFETs",
    level: "intermediate",
    summary: "Voltage-controlled. $I_D = \\tfrac{1}{2}k(V_{GS} - V_t)^2$ in saturation. NMOS/PMOS. Workhorse of digital ICs.",
    examples: [
      { title: "Example 1 — Threshold check", prompt: "NMOS with $V_t = 1$ V. $V_{GS} = 0.8$ V applied. State?", steps: [
        { label: "Compare", body: "$V_{GS} < V_t$ → device is OFF (cutoff)." },
        { label: "Drain current", body: "$I_D \\approx 0$." }
      ], answer: "Cutoff, $I_D \\approx 0$" },
      { title: "Example 2 — Saturation drain current", prompt: "NMOS in saturation with $k = 2$ mA/V², $V_t = 1$ V, $V_{GS} = 3$ V. $I_D$?", steps: [
        { label: "Formula", body: "$I_D = \\tfrac{1}{2}k(V_{GS} - V_t)^2$." },
        { label: "Plug", body: "$I_D = \\tfrac{1}{2}(2)(2)^2 = 4$ mA." }
      ], answer: "$4$ mA" },
      { title: "Example 3 — Triode/saturation boundary", prompt: "When does MOSFET cross from triode to saturation?", steps: [
        { label: "Condition", body: "$V_{DS} = V_{GS} - V_t = V_{OV}$ (overdrive)." },
        { label: "Meaning", body: "Below this $V_{DS}$: triode region. Above: saturation (current is roughly constant)." }
      ], answer: "$V_{DS} = V_{GS} - V_t$" }
    ],
    tasks: [
      { q: "NMOS ON requires $V_{GS}$ ___ $V_t$.", a: "$>$" },
      { q: "PMOS ON requires $V_{GS}$ ___ $V_t$ (with $V_t < 0$).", a: "$<$" },
      { q: "Gate current in DC?", a: "$\\approx 0$" },
      { q: "CMOS gate: how many transistors per input?", a: "Two (one NMOS, one PMOS)" },
      { q: "Why is CMOS low static power?", a: "One device off in either state" },
      { q: "Threshold voltage range typical CMOS?", a: "$0.3$–$1$ V" },
      { q: "Saturation $I_D$ depends on $V_{DS}$?", a: "Weakly (channel-length modulation)" },
      { q: "Transconductance $g_m$ in saturation?", a: "$g_m = k(V_{GS} - V_t)$" },
      { q: "MOSFET preferred over BJT in ICs because?", a: "Low gate current, smaller area, easier scaling" },
      { q: "Body effect: $V_t$ depends on?", a: "$V_{SB}$ (source-body voltage)" }
    ]
  },
  {
    id: "digital-logic",
    title: "Digital Logic & Boolean Algebra",
    level: "basic",
    summary: "Gates (AND, OR, NOT, NAND, NOR, XOR). Truth tables. De Morgan. K-maps.",
    examples: [
      { title: "Example 1 — Truth table for $F = A\\bar B + \\bar A B$", prompt: "Build truth table.", steps: [
        { label: "Recognize", body: "$F = A \\oplus B$ — XOR." },
        { label: "Table", body: "$00\\to 0$, $01\\to 1$, $10\\to 1$, $11\\to 0$." }
      ], answer: "XOR (sum mod 2)" },
      { title: "Example 2 — De Morgan", prompt: "Simplify $\\overline{A + B}$.", steps: [
        { label: "De Morgan's law", body: "$\\overline{A + B} = \\bar A \\bar B$." },
        { label: "Reading", body: "NOT of OR = AND of NOTs." }
      ], answer: "$\\bar A \\bar B$" },
      { title: "Example 3 — Half-adder", prompt: "Inputs $A, B$. Outputs: sum and carry. Equations?", steps: [
        { label: "Sum", body: "$S = A \\oplus B$." },
        { label: "Carry", body: "$C = AB$." }
      ], answer: "$S = A \\oplus B$, $C = AB$" }
    ],
    tasks: [
      { q: "$1 \\text{ AND } 0$?", a: "$0$" },
      { q: "$1 \\text{ OR } 0$?", a: "$1$" },
      { q: "$\\text{NAND}(1, 1)$?", a: "$0$" },
      { q: "$\\text{XOR}(1, 1)$?", a: "$0$" },
      { q: "De Morgan: $\\overline{AB}$?", a: "$\\bar A + \\bar B$" },
      { q: "Number of rows in truth table for $n$ inputs?", a: "$2^n$" },
      { q: "NAND gate alone can implement all logic?", a: "Yes (functionally complete)" },
      { q: "Full adder has how many inputs?", a: "$3$ (A, B, carry-in)" },
      { q: "Binary $1101 + 1010$?", a: "$10111$" },
      { q: "Two's complement of $0101$ (4 bits)?", a: "$1011$" }
    ]
  },
  {
    id: "transformers-power",
    title: "Transformers & Power",
    level: "intermediate",
    summary: "Ideal transformer ratio $N_1/N_2 = V_1/V_2 = I_2/I_1$. Power factor. Three-phase basics.",
    examples: [
      { title: "Example 1 — Step-down", prompt: "Primary $240$ V, $N_1 = 1000$. Secondary $N_2 = 100$. Secondary voltage?", steps: [
        { label: "Ratio", body: "$V_2 = V_1 \\cdot N_2/N_1 = 240 \\cdot 100/1000 = 24$ V." }
      ], answer: "$24$ V" },
      { title: "Example 2 — Current ratio", prompt: "Same transformer. Secondary load draws $5$ A. Primary current?", steps: [
        { label: "Inverse ratio", body: "$I_1 = I_2 \\cdot N_2/N_1 = 5 \\cdot 100/1000 = 0.5$ A." }
      ], answer: "$0.5$ A" },
      { title: "Example 3 — Three-phase power", prompt: "Balanced wye load with $V_\\text{line} = 400$ V, $I_\\text{line} = 10$ A, $\\cos\\phi = 0.9$. Total power?", steps: [
        { label: "Formula", body: "$P = \\sqrt 3 V_L I_L \\cos\\phi$." },
        { label: "Compute", body: "$P = \\sqrt 3 \\cdot 400 \\cdot 10 \\cdot 0.9 \\approx 6235$ W." }
      ], answer: "$\\approx 6.24$ kW" }
    ],
    tasks: [
      { q: "Step-up doubles voltage. Current ratio?", a: "Halves" },
      { q: "Transformer works with DC?", a: "No (needs changing flux)" },
      { q: "Ideal transformer power transfer?", a: "$P_1 = P_2$" },
      { q: "Three-phase line vs phase voltage in wye?", a: "$V_L = \\sqrt 3 V_\\text{ph}$" },
      { q: "Three-phase line vs phase current in delta?", a: "$I_L = \\sqrt 3 I_\\text{ph}$" },
      { q: "Why three-phase for power transmission?", a: "Constant power flow, less conductor for same power" },
      { q: "Power factor below 1 means?", a: "Reactive power flowing" },
      { q: "Power factor correction uses what for inductive loads?", a: "Capacitors" },
      { q: "Transformer iron core reduces ___ losses.", a: "Magnetic flux leakage" },
      { q: "Eddy current losses reduced by?", a: "Laminating the core" }
    ]
  }
];
