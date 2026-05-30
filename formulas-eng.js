// Formulas + WHERE blocks for Electrical, Mechanical, Computer Science topics.
// Each note follows the same pattern: short statement + "WHERE:" + symbol breakdown + worked example.

(function () {
  window.FORMULAS = window.FORMULAS || {};

  function add(id, list) {
    window.FORMULAS[id] = (window.FORMULAS[id] || []).concat(list);
  }

  // ===================== ELECTRICAL ENGINEERING =====================

  add("circuit-basics", [
    { f: "$I = \\dfrac{Q}{t}$",
      n: "CURRENT = charge per unit time. <br><br><strong>WHERE:</strong> $I$ = current (amperes, A). $Q$ = charge (coulombs, C). $t$ = time (s). WORKED EXAMPLE: $5$ C passing through a wire in $2$ s gives $I = 2.5$ A." },
    { f: "$P = V I$",
      n: "ELECTRICAL power dissipated or delivered. <br><br><strong>WHERE:</strong> $P$ = power (watts, W). $V$ = voltage (V). $I$ = current (A). WORKED EXAMPLE: a $12$ V phone charger delivering $1$ A consumes $P = 12$ W." },
    { f: "$E = P\\,t$",
      n: "ENERGY = power × time. <br><br><strong>WHERE:</strong> $E$ = energy (joules, J or Wh). $P$ = power. $t$ = time. WORKED EXAMPLE: a $1500$ W heater for $2$ h consumes $3$ kWh = $1.08 \\times 10^7$ J." },
    { f: "$1 \\text{ eV}",
      n: "ELECTRON-VOLT: energy gained by 1 electron accelerated through 1 V. <br><br><strong>WHERE:</strong> $1$ eV $\\approx 1.602 \\times 10^{-19}$ J. $e$ = elementary charge ($1.602 \\times 10^{-19}$ C). WORKED EXAMPLE: silicon bandgap is $\\approx 1.12$ eV." }
  ]);

  add("ohms-law", [
    { f: "$V = I R$",
      n: "OHM's law for a linear resistor. <br><br><strong>WHERE:</strong> $V$ = voltage across resistor (V). $I$ = current through it (A). $R$ = resistance (ohms, $\\Omega$). WORKED EXAMPLE: $5$ V across $1$ k$\\Omega$ → $I = 5$ mA." },
    { f: "$R_\\text{series} = R_1 + R_2 + \\ldots$",
      n: "RESISTORS in series ADD. <br><br><strong>WHERE:</strong> $R_i$ = individual resistances ($\\Omega$). WORKED EXAMPLE: $100\\,\\Omega + 220\\,\\Omega + 330\\,\\Omega = 650\\,\\Omega$." },
    { f: "$\\dfrac{1}{R_\\text{par}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\ldots$",
      n: "RESISTORS in parallel: reciprocals add. <br><br><strong>WHERE:</strong> Same units as above. For two: $R_\\text{par} = R_1R_2/(R_1+R_2)$. WORKED EXAMPLE: $300 \\| 600 = 200\\,\\Omega$." },
    { f: "$V_\\text{out} = V_\\text{in}\\dfrac{R_2}{R_1 + R_2}$",
      n: "VOLTAGE divider. <br><br><strong>WHERE:</strong> $V_\\text{in}$ = source voltage across series pair. $R_1, R_2$ = resistors in series. $V_\\text{out}$ = voltage across $R_2$. WORKED EXAMPLE: $10$ V across $1$ k + $4$ k: voltage across $4$ k = $8$ V." },
    { f: "$P = I^2 R = \\dfrac{V^2}{R}$",
      n: "POWER dissipated by a resistor. <br><br><strong>WHERE:</strong> $P$ = power (W). $I, V, R$ as above. THREE equivalent forms via $V = IR$. WORKED EXAMPLE: $2$ A through $5\\,\\Omega$: $P = 20$ W." }
  ]);

  add("kirchhoff-laws", [
    { f: "$\\sum I_\\text{in} = \\sum I_\\text{out}$",
      n: "KCL (Kirchhoff's Current Law): currents into a node = currents out. <br><br><strong>WHERE:</strong> Sum over all branches at a node. CONSEQUENCE of charge conservation. WORKED EXAMPLE: $3$ A and $2$ A flowing in, $5$ A must flow out." },
    { f: "$\\sum_\\text{loop} V = 0$",
      n: "KVL (Kirchhoff's Voltage Law): voltage drops around any closed loop = 0. <br><br><strong>WHERE:</strong> Sum signed voltage changes around the loop. CONSEQUENCE of energy conservation. WORKED EXAMPLE: $12$ V battery, drops $5$ V across $R_1$ and $7$ V across $R_2$ — sums to $0$ around loop." }
  ]);

  add("rc-circuits", [
    { f: "$\\tau = R C$",
      n: "RC time constant. <br><br><strong>WHERE:</strong> $\\tau$ = time constant (s). $R$ = resistance ($\\Omega$). $C$ = capacitance (F). WORKED EXAMPLE: $10$ k$\\Omega$ × $10\\,\\mu$F = $0.1$ s." },
    { f: "$V_C(t) = V_f(1 - e^{-t/\\tau})$",
      n: "Capacitor voltage while CHARGING from rest. <br><br><strong>WHERE:</strong> $V_C$ = voltage across capacitor at time $t$. $V_f$ = final (asymptotic) voltage. $\\tau = RC$. WORKED EXAMPLE: charging to $5$ V with $\\tau = 0.1$ s, at $t = \\tau$: $V_C \\approx 3.16$ V (63.2% of final)." },
    { f: "$V_C(t) = V_0 e^{-t/\\tau}$",
      n: "Capacitor voltage while DISCHARGING. <br><br><strong>WHERE:</strong> $V_0$ = initial voltage on capacitor. $\\tau = RC$. WORKED EXAMPLE: $V_0 = 10$ V, $\\tau = 0.1$ s, at $t = 0.1$ s: $V_C \\approx 3.68$ V." },
    { f: "$Q = C V$",
      n: "Charge stored on a capacitor. <br><br><strong>WHERE:</strong> $Q$ = charge (C). $C$ = capacitance (F). $V$ = voltage across it (V). WORKED EXAMPLE: $10\\,\\mu$F at $5$ V holds $50\\,\\mu$C." },
    { f: "$E = \\dfrac{1}{2} C V^2$",
      n: "Energy stored in a capacitor. <br><br><strong>WHERE:</strong> $E$ = energy (J). $C, V$ as above. WORKED EXAMPLE: $100\\,\\mu$F at $10$ V: $E = 5$ mJ." }
  ]);

  add("rl-rlc-circuits", [
    { f: "$\\tau = \\dfrac{L}{R}$",
      n: "RL time constant. <br><br><strong>WHERE:</strong> $\\tau$ = time constant (s). $L$ = inductance (H). $R$ = resistance ($\\Omega$). WORKED EXAMPLE: $100$ mH and $200\\,\\Omega$ gives $\\tau = 0.5$ ms." },
    { f: "$E = \\dfrac{1}{2} L I^2$",
      n: "Energy stored in an inductor. <br><br><strong>WHERE:</strong> $E$ = energy (J). $L$ = inductance (H). $I$ = current (A). WORKED EXAMPLE: $0.1$ H at $2$ A holds $0.2$ J." },
    { f: "$\\omega_0 = \\dfrac{1}{\\sqrt{LC}}$",
      n: "RESONANT angular frequency of LC tank. <br><br><strong>WHERE:</strong> $\\omega_0$ = angular freq (rad/s). $L$ = inductance (H). $C$ = capacitance (F). $f_0 = \\omega_0/(2\\pi)$. WORKED EXAMPLE: $L = 10$ mH, $C = 1\\,\\mu$F → $\\omega_0 = 10^4$ rad/s, $f_0 \\approx 1.59$ kHz." },
    { f: "$Q = \\dfrac{\\omega_0 L}{R}$",
      n: "QUALITY factor of series RLC. <br><br><strong>WHERE:</strong> $Q$ = quality factor (dimensionless). $\\omega_0$ = resonant freq. $L, R$ = inductance and resistance. HIGHER $Q$ = narrower bandwidth. WORKED EXAMPLE: $\\omega_0 = 10^4$, $L = 10$ mH, $R = 5\\,\\Omega$ → $Q = 20$." }
  ]);

  add("ac-phasors", [
    { f: "$\\mathbf V = V_m \\angle \\phi$",
      n: "PHASOR representation of a sinusoid $v(t) = V_m\\cos(\\omega t + \\phi)$. <br><br><strong>WHERE:</strong> $V_m$ = peak amplitude (V). $\\phi$ = phase angle (rad or deg). $\\omega$ implicit (same throughout circuit). WORKED EXAMPLE: $v(t) = 170\\cos(377t + 30°)$ → $\\mathbf V = 170\\angle 30°$ V." },
    { f: "$Z_R = R$",
      n: "RESISTOR impedance is real. <br><br><strong>WHERE:</strong> $Z_R$ = impedance ($\\Omega$). $R$ = resistance ($\\Omega$). NO phase shift. WORKED EXAMPLE: $100\\,\\Omega$ resistor: $Z_R = 100\\,\\Omega \\angle 0°$." },
    { f: "$Z_L = j\\omega L$",
      n: "INDUCTOR impedance. <br><br><strong>WHERE:</strong> $Z_L$ = impedance ($\\Omega$). $j$ = imaginary unit. $\\omega$ = angular frequency (rad/s). $L$ = inductance (H). Phase: $+90°$. WORKED EXAMPLE: $L = 0.1$ H at $\\omega = 1000$ rad/s: $Z_L = j100\\,\\Omega$." },
    { f: "$Z_C = \\dfrac{1}{j\\omega C}",
      n: "CAPACITOR impedance. <br><br><strong>WHERE:</strong> $Z_C$ = impedance ($\\Omega$). $\\omega$ = angular freq. $C$ = capacitance (F). Phase: $-90°$. WORKED EXAMPLE: $C = 1\\,\\mu$F at $\\omega = 1000$ rad/s: $Z_C = -j1000\\,\\Omega$." },
    { f: "$V_\\text{rms} = \\dfrac{V_m}{\\sqrt 2}",
      n: "RMS value of a sinusoid. <br><br><strong>WHERE:</strong> $V_\\text{rms}$ = root-mean-square voltage (V). $V_m$ = peak amplitude (V). WORKED EXAMPLE: $V_m = 170$ V → $V_\\text{rms} = 120$ V (US wall outlet)." },
    { f: "$P = V_\\text{rms} I_\\text{rms} \\cos\\phi",
      n: "REAL (average) power in AC circuit. <br><br><strong>WHERE:</strong> $V_\\text{rms}, I_\\text{rms}$ = rms voltage and current. $\\phi$ = phase angle between them. $\\cos\\phi$ = power factor. WORKED EXAMPLE: $120$ V, $5$ A rms, $\\cos\\phi = 0.8$: $P = 480$ W." }
  ]);

  add("thevenin-norton", [
    { f: "$V_\\text{th},\\; R_\\text{th}",
      n: "THÉVENIN equivalent: any linear two-terminal network = ideal voltage source + series resistor. <br><br><strong>WHERE:</strong> $V_\\text{th}$ = open-circuit voltage at terminals. $R_\\text{th}$ = resistance seen with all independent sources deactivated. WORKED EXAMPLE: $12$ V source through $4\\,\\Omega + 8\\,\\Omega$ divider: $V_\\text{th} = 8$ V, $R_\\text{th} = 4\\|8 \\approx 2.67\\,\\Omega$." },
    { f: "$I_N = \\dfrac{V_\\text{th}}{R_\\text{th}}",
      n: "NORTON-THÉVENIN conversion: same $R$, current source replaces voltage source. <br><br><strong>WHERE:</strong> $I_N$ = Norton current (= short-circuit current at terminals). $R_N = R_\\text{th}$. WORKED EXAMPLE: $V_\\text{th} = 8$ V, $R_\\text{th} = 2.67\\,\\Omega$ → $I_N = 3$ A, $R_N = 2.67\\,\\Omega$." },
    { f: "$R_\\text{load} = R_\\text{th}",
      n: "MAXIMUM power transfer theorem: load equal to source resistance transfers max power. <br><br><strong>WHERE:</strong> $R_\\text{load}$ = load resistance. $P_\\text{max} = V_\\text{th}^2/(4R_\\text{th})$. WORKED EXAMPLE: $V_\\text{th} = 12$ V, $R_\\text{th} = 4\\,\\Omega$ → $P_\\text{max} = 9$ W at $R_\\text{load} = 4\\,\\Omega$." }
  ]);

  add("diodes-rectifiers", [
    { f: "$I = I_S(e^{V/V_T} - 1)$",
      n: "SHOCKLEY diode equation. <br><br><strong>WHERE:</strong> $I$ = diode current (A). $I_S$ = saturation current (nA to pA). $V$ = forward voltage (V). $V_T = k_BT/e \\approx 26$ mV at room temperature. WORKED EXAMPLE: forward bias $V = 0.6$ V → exponential factor $e^{23} \\approx 10^{10}$ times $I_S$." },
    { f: "$V_F \\approx 0.7 \\text{ V}",
      n: "Approximate Si diode FORWARD voltage drop in the conducting regime. <br><br><strong>WHERE:</strong> Ge $\\approx 0.3$ V, Si $\\approx 0.7$ V, Schottky $\\approx 0.3$ V, LED varies $\\approx 1.8$–$3.5$ V depending on color. WORKED EXAMPLE: $5$ V supply, $1$ k$\\Omega$ load, Si diode in series: $I = (5 - 0.7)/1000 = 4.3$ mA." },
    { f: "$V_\\text{avg} = \\dfrac{2V_p}{\\pi}",
      n: "Average DC output of a FULL-WAVE rectifier (ideal). <br><br><strong>WHERE:</strong> $V_p$ = peak input. Full-wave produces 2 pulses per cycle. Half-wave: $V_p/\\pi$. WORKED EXAMPLE: $V_p = 170$ V → full-wave avg $\\approx 108$ V; half-wave $\\approx 54$ V." }
  ]);

  add("op-amps", [
    { f: "$A_v = -\\dfrac{R_f}{R_\\text{in}}",
      n: "INVERTING amplifier gain. <br><br><strong>WHERE:</strong> $A_v$ = closed-loop voltage gain. $R_f$ = feedback resistor. $R_\\text{in}$ = input resistor. SIGN: output inverted. WORKED EXAMPLE: $R_f = 100$ k, $R_\\text{in} = 10$ k → $A_v = -10$." },
    { f: "$A_v = 1 + \\dfrac{R_f}{R_g}",
      n: "NON-INVERTING amplifier gain. <br><br><strong>WHERE:</strong> $R_f$ = feedback resistor from output to inverting input. $R_g$ = resistor from inverting input to ground. Gain always $\\geq 1$. WORKED EXAMPLE: $R_f = 90$ k, $R_g = 10$ k → $A_v = 10$." },
    { f: "$V_+ = V_-$",
      n: "VIRTUAL SHORT: ideal op-amp with negative feedback drives the input difference to zero. <br><br><strong>WHERE:</strong> $V_+, V_-$ = non-inverting and inverting input voltages. CONSEQUENCE of infinite open-loop gain. WORKED EXAMPLE: in inverting amp with $V_+$ grounded, $V_-$ is also at ground ('virtual ground')." },
    { f: "$V_o = -R_f \\int \\dfrac{V_i}{R_\\text{in}} dt$",
      n: "INTEGRATOR (capacitor as feedback element). <br><br><strong>WHERE:</strong> $V_o$ = output voltage. $V_i$ = input. $R_\\text{in}$ = input resistor. $R_f$ replaced by capacitor $C$: $V_o = -(1/R_\\text{in}C)\\int V_i\\,dt$. WORKED EXAMPLE: constant $V_i = 1$ V into $R_\\text{in}C = 1$ s integrator: $V_o$ ramps down at $1$ V/s." }
  ]);

  add("transistors-bjt", [
    { f: "$I_C = \\beta I_B$",
      n: "FORWARD active BJT relation. <br><br><strong>WHERE:</strong> $I_C$ = collector current. $I_B$ = base current. $\\beta$ (or $h_{FE}$) = current gain (typ. $50$–$300$). WORKED EXAMPLE: $\\beta = 100$, $I_B = 20\\,\\mu$A → $I_C = 2$ mA." },
    { f: "$I_E = I_B + I_C$",
      n: "KCL at the BJT (emitter = base + collector). <br><br><strong>WHERE:</strong> $I_E$ = emitter current. WORKED EXAMPLE: $I_B = 20\\,\\mu$A, $I_C = 2$ mA → $I_E \\approx 2.02$ mA." },
    { f: "$V_{BE} \\approx 0.7 \\text{ V}",
      n: "Base-emitter forward voltage drop in conducting NPN. <br><br><strong>WHERE:</strong> $V_{BE}$ = base-emitter voltage. PNP: $V_{EB} \\approx 0.7$ V. WORKED EXAMPLE: a $5$ V signal driving the base through a series resistor leaves $\\approx 4.3$ V across that resistor." }
  ]);

  add("transistors-mosfet", [
    { f: "$I_D = \\dfrac{1}{2}k(V_{GS} - V_t)^2$",
      n: "MOSFET drain current in SATURATION. <br><br><strong>WHERE:</strong> $I_D$ = drain current (A). $k = \\mu C_\\text{ox}(W/L)$ = transconductance parameter (A/V²). $V_{GS}$ = gate-source voltage. $V_t$ = threshold voltage. VALID when $V_{DS} \\geq V_{GS} - V_t$. WORKED EXAMPLE: $k = 2$ mA/V², $V_t = 1$ V, $V_{GS} = 3$ V → $I_D = 4$ mA." },
    { f: "$V_{GS} > V_t$",
      n: "MOSFET ON condition (NMOS). <br><br><strong>WHERE:</strong> $V_{GS}$ = gate-source voltage. $V_t$ = threshold voltage. PMOS: $V_{GS} < V_t < 0$. WORKED EXAMPLE: $V_t = 0.7$ V, $V_{GS} = 1.5$ V → device is ON." },
    { f: "$g_m = k(V_{GS} - V_t)$",
      n: "TRANSCONDUCTANCE in saturation. <br><br><strong>WHERE:</strong> $g_m$ = transconductance (A/V). DERIVATIVE of $I_D$ with respect to $V_{GS}$. ALSO $g_m = \\sqrt{2k I_D}$. WORKED EXAMPLE: $k = 2$ mA/V², $V_{GS} - V_t = 2$ V → $g_m = 4$ mA/V." }
  ]);

  add("digital-logic", [
    { f: "$F = A \\oplus B = A\\bar B + \\bar A B$",
      n: "XOR (exclusive-or) gate. <br><br><strong>WHERE:</strong> $A, B$ = binary inputs. Output 1 iff inputs DIFFER. WORKED EXAMPLE: half-adder sum = $A \\oplus B$." },
    { f: "$\\overline{A + B} = \\bar A \\cdot \\bar B$",
      n: "DE MORGAN's law (one form). <br><br><strong>WHERE:</strong> $A, B$ = boolean variables. NOT of OR = AND of NOTs. SECOND form: $\\overline{AB} = \\bar A + \\bar B$. WORKED EXAMPLE: simplify $\\overline{A + B + C}$ → $\\bar A \\bar B \\bar C$." },
    { f: "$S = A \\oplus B,\\; C = AB$",
      n: "HALF-ADDER outputs. <br><br><strong>WHERE:</strong> $A, B$ = input bits. $S$ = sum bit (LSB). $C$ = carry-out bit. WORKED EXAMPLE: $A = 1, B = 1$ → $S = 0, C = 1$ (representing $1 + 1 = 2$ in binary)." }
  ]);

  add("transformers-power", [
    { f: "$\\dfrac{V_1}{V_2} = \\dfrac{N_1}{N_2}",
      n: "IDEAL transformer voltage ratio. <br><br><strong>WHERE:</strong> $V_1, N_1$ = primary voltage and turns. $V_2, N_2$ = secondary. WORKED EXAMPLE: $1000$-turn primary at $240$ V, $100$-turn secondary → $V_2 = 24$ V." },
    { f: "$\\dfrac{I_1}{I_2} = \\dfrac{N_2}{N_1}",
      n: "IDEAL transformer current ratio (inverse of voltage ratio). <br><br><strong>WHERE:</strong> Same symbols. From power conservation $V_1 I_1 = V_2 I_2$. WORKED EXAMPLE: same transformer, secondary draws $5$ A → primary $0.5$ A." },
    { f: "$P_{3\\phi} = \\sqrt 3 V_L I_L \\cos\\phi",
      n: "Total real power in BALANCED three-phase system. <br><br><strong>WHERE:</strong> $V_L$ = line-to-line voltage (rms). $I_L$ = line current (rms). $\\cos\\phi$ = power factor. WORKED EXAMPLE: $400$ V, $10$ A, pf $= 0.9$ → $P \\approx 6.24$ kW." }
  ]);

  // ===================== MECHANICAL ENGINEERING =====================

  add("statics-equilibrium", [
    { f: "$\\sum \\vec F = 0$",
      n: "FORCE equilibrium. <br><br><strong>WHERE:</strong> $\\vec F$ = forces acting on body. Vector equation = 3 scalar equations (or 2 in 2D). WORKED EXAMPLE: book on table: gravity ($-mg\\hat z$) + normal ($+N\\hat z$) = 0 → $N = mg$." },
    { f: "$\\sum \\vec M = 0$",
      n: "MOMENT equilibrium. <br><br><strong>WHERE:</strong> $\\vec M$ = moments (torques) about any chosen point. PREVENTS rotation. WORKED EXAMPLE: balanced lever — clockwise moments = counterclockwise moments about pivot." },
    { f: "$\\vec M = \\vec r \\times \\vec F$",
      n: "MOMENT (torque) of a force. <br><br><strong>WHERE:</strong> $\\vec r$ = position vector from pivot to force application point. $\\vec F$ = applied force. $\\vec M$ direction by right-hand rule. WORKED EXAMPLE: $10$ N perpendicular at $0.3$ m: $M = 3$ N·m." }
  ]);

  add("trusses", [
    { f: "$m + r = 2j$",
      n: "STATICALLY determinate 2D truss condition. <br><br><strong>WHERE:</strong> $m$ = number of members. $r$ = number of reaction components. $j$ = number of joints. WORKED EXAMPLE: simple triangle with 3 members, 3 joints, 3 reactions: $3 + 3 = 6 = 2 \\cdot 3$ ✓." },
    { f: "$\\text{joint:}\\;\\sum F_x = 0,\\; \\sum F_y = 0$",
      n: "METHOD of joints: each pin in equilibrium. <br><br><strong>WHERE:</strong> Sum forces on each joint = 0. 2 equations per joint in 2D. WORKED EXAMPLE: at apex of triangle with vertical load $P$ and two angled members: each carries $P/(2\\sin\\theta)$." }
  ]);

  add("stress-strain", [
    { f: "$\\sigma = \\dfrac{F}{A}",
      n: "AXIAL stress. <br><br><strong>WHERE:</strong> $\\sigma$ = stress (Pa = N/m²). $F$ = axial force (N). $A$ = cross-section area (m²). WORKED EXAMPLE: $40$ kN on $2 \\times 10^{-4}$ m² → $\\sigma = 200$ MPa." },
    { f: "$\\varepsilon = \\dfrac{\\Delta L}{L}",
      n: "AXIAL strain (engineering). <br><br><strong>WHERE:</strong> $\\Delta L$ = elongation (m). $L$ = original length (m). DIMENSIONLESS. WORKED EXAMPLE: $1$ mm stretch on $1$ m rod → $\\varepsilon = 0.001$." },
    { f: "$\\sigma = E\\varepsilon$",
      n: "HOOKE's law (uniaxial). <br><br><strong>WHERE:</strong> $E$ = Young's modulus (Pa). Steel: $\\approx 200$ GPa; Al: $\\approx 70$ GPa. VALID below yield. WORKED EXAMPLE: $\\sigma = 200$ MPa in steel → $\\varepsilon = 200/200000 = 10^{-3}$." },
    { f: "$\\nu = -\\dfrac{\\varepsilon_\\text{trans}}{\\varepsilon_\\text{axial}}$",
      n: "POISSON's ratio. <br><br><strong>WHERE:</strong> $\\varepsilon_\\text{trans}, \\varepsilon_\\text{axial}$ = transverse and axial strains. Most metals $\\nu \\approx 0.3$. Rubber $\\nu \\approx 0.5$ (incompressible). WORKED EXAMPLE: pull rod, $\\nu = 0.3$, axial strain $10^{-3}$ → transverse strain $-3 \\times 10^{-4}$." }
  ]);

  add("beam-bending", [
    { f: "$\\sigma = \\dfrac{My}{I}",
      n: "FLEXURE formula: bending stress in a beam. <br><br><strong>WHERE:</strong> $\\sigma$ = bending stress (Pa). $M$ = bending moment (N·m). $y$ = distance from neutral axis (m). $I$ = second moment of area (m⁴). WORKED EXAMPLE: $M = 5$ kN·m, $I = 4.17 \\times 10^{-6}$ m⁴, $y = 0.05$ m → $\\sigma = 60$ MPa." },
    { f: "$I_\\text{rect} = \\dfrac{bh^3}{12}",
      n: "SECOND moment of area of a rectangle about centroidal axis. <br><br><strong>WHERE:</strong> $b$ = width, $h$ = depth (in bending direction). WORKED EXAMPLE: $50 \\times 100$ mm: $I = 50 \\times 100^3/12 \\approx 4.17 \\times 10^6$ mm⁴." },
    { f: "$EI \\dfrac{d^2 y}{dx^2} = M(x)",
      n: "EULER-BERNOULLI beam equation. <br><br><strong>WHERE:</strong> $E$ = Young's modulus. $I$ = second moment of area. $y$ = deflection. $M$ = bending moment. WORKED EXAMPLE: integrate twice with boundary conditions to find $y(x)$." },
    { f: "$\\delta_\\text{cant} = \\dfrac{PL^3}{3EI}",
      n: "CANTILEVER tip deflection under point load $P$ at tip. <br><br><strong>WHERE:</strong> $L$ = length (m). $P$ = tip load (N). $EI$ = flexural rigidity. WORKED EXAMPLE: $L = 2$ m, $P = 1$ kN, $EI = 5 \\times 10^5$ N·m²: $\\delta \\approx 5.33$ mm." }
  ]);

  add("dynamics-kinematics", [
    { f: "$\\vec F = m\\vec a$",
      n: "NEWTON's 2nd law. <br><br><strong>WHERE:</strong> $\\vec F$ = net force (N). $m$ = mass (kg). $\\vec a$ = acceleration (m/s²). WORKED EXAMPLE: $10$ N on $2$ kg → $a = 5$ m/s²." },
    { f: "$v^2 = v_0^2 + 2a(x - x_0)$",
      n: "CONSTANT-acceleration kinematic relation (time eliminated). <br><br><strong>WHERE:</strong> $v$ = velocity (m/s). $v_0$ = initial velocity. $a$ = acceleration. $x - x_0$ = displacement. WORKED EXAMPLE: $v_0 = 0$, $a = 2$ m/s², $x = 25$ m → $v = 10$ m/s." },
    { f: "$R = \\dfrac{v_0^2\\sin(2\\theta)}{g}",
      n: "PROJECTILE range on flat ground. <br><br><strong>WHERE:</strong> $v_0$ = initial speed. $\\theta$ = launch angle. $g$ = gravity. MAX at $\\theta = 45°$. WORKED EXAMPLE: $v_0 = 30$ m/s, $\\theta = 45°$ → $R \\approx 91.7$ m." },
    { f: "$F_c = \\dfrac{mv^2}{r}",
      n: "CENTRIPETAL force for circular motion. <br><br><strong>WHERE:</strong> $F_c$ = centripetal force (N). $m$ = mass. $v$ = speed. $r$ = radius of curvature. POINTS toward center. WORKED EXAMPLE: $1500$ kg, $20$ m/s, $r = 100$ m → $F_c = 6$ kN." }
  ]);

  add("work-energy-machines", [
    { f: "$W = Fd\\cos\\theta",
      n: "WORK done by constant force. <br><br><strong>WHERE:</strong> $W$ = work (J). $F$ = force magnitude (N). $d$ = displacement magnitude (m). $\\theta$ = angle between $\\vec F$ and $\\vec d$. WORKED EXAMPLE: push $50$ N over $10$ m along motion: $W = 500$ J." },
    { f: "$\\eta = \\dfrac{P_\\text{out}}{P_\\text{in}}",
      n: "EFFICIENCY (mechanical or thermal). <br><br><strong>WHERE:</strong> $\\eta$ = efficiency (0 to 1). $P_\\text{out}, P_\\text{in}$ = useful and input power (W). WORKED EXAMPLE: $7$ kW out, $10$ kW in → $\\eta = 70\\%$." },
    { f: "$\\text{MA} = \\dfrac{F_\\text{out}}{F_\\text{in}}",
      n: "MECHANICAL advantage. <br><br><strong>WHERE:</strong> $F_\\text{out}$ = load force lifted. $F_\\text{in}$ = applied force. WORKED EXAMPLE: pulley with 4 supporting ropes → MA = 4; lift $200$ N with $50$ N effort (ideal)." }
  ]);

  add("thermo-cycles", [
    { f: "$\\eta_\\text{Carnot} = 1 - \\dfrac{T_C}{T_H}",
      n: "CARNOT efficiency (max possible for heat engine). <br><br><strong>WHERE:</strong> $T_C, T_H$ = cold and hot reservoir temperatures (kelvin). WORKED EXAMPLE: $T_H = 800$ K, $T_C = 300$ K → $\\eta \\leq 62.5\\%$." },
    { f: "$\\eta_\\text{Otto} = 1 - \\dfrac{1}{r^{\\gamma-1}}",
      n: "OTTO cycle efficiency (idealized gasoline engine). <br><br><strong>WHERE:</strong> $r = V_1/V_2$ = compression ratio. $\\gamma = c_p/c_v$ = specific heat ratio ($\\approx 1.4$ for air). WORKED EXAMPLE: $r = 9$, $\\gamma = 1.4$ → $\\eta \\approx 58.5\\%$." },
    { f: "$\\Delta U = Q - W$",
      n: "FIRST law of thermodynamics. <br><br><strong>WHERE:</strong> $\\Delta U$ = change in internal energy (J). $Q$ = heat added TO system. $W$ = work done BY system. WORKED EXAMPLE: gas absorbs $500$ J heat and does $200$ J work → $\\Delta U = 300$ J." },
    { f: "$\\text{COP}_\\text{ref} = \\dfrac{T_C}{T_H - T_C}",
      n: "Coefficient of performance — refrigerator (Carnot limit). <br><br><strong>WHERE:</strong> $T_C$ = cold side. $T_H$ = warm side. WORKED EXAMPLE: fridge at $5°$C ($278$ K), room at $25°$C ($298$ K): COP $\\leq 278/20 \\approx 13.9$." }
  ]);

  add("heat-transfer", [
    { f: "$\\dot Q = -kA\\dfrac{dT}{dx}",
      n: "FOURIER's law of conduction (1D). <br><br><strong>WHERE:</strong> $\\dot Q$ = heat rate (W). $k$ = thermal conductivity (W/m·K). $A$ = cross-section area (m²). $dT/dx$ = temperature gradient. MINUS sign: heat flows from hot to cold. WORKED EXAMPLE: $k = 0.5$, $A = 10$ m², $\\Delta T = 20$ K over $0.1$ m wall: $\\dot Q = 1000$ W." },
    { f: "$\\dot Q = hA(T_s - T_\\infty)$",
      n: "NEWTON's law of cooling (convection). <br><br><strong>WHERE:</strong> $h$ = convective heat transfer coefficient (W/m²·K). $A$ = surface area. $T_s$ = surface temp. $T_\\infty$ = fluid temp far from surface. WORKED EXAMPLE: $h = 25$, $A = 0.5$ m², $\\Delta T = 60$ K → $\\dot Q = 750$ W." },
    { f: "$\\dot Q = \\varepsilon \\sigma A T^4$",
      n: "STEFAN-BOLTZMANN radiation law. <br><br><strong>WHERE:</strong> $\\varepsilon$ = emissivity (0 to 1). $\\sigma = 5.67 \\times 10^{-8}$ W/m²K⁴. $T$ = absolute temperature (K). WORKED EXAMPLE: black body ($\\varepsilon = 1$) at $500$ K, $1$ m²: $\\dot Q \\approx 3544$ W." }
  ]);

  add("fluid-statics-dynamics", [
    { f: "$p = \\rho g h$",
      n: "HYDROSTATIC pressure. <br><br><strong>WHERE:</strong> $p$ = gauge pressure (Pa). $\\rho$ = density (kg/m³). $g$ = gravity (m/s²). $h$ = depth (m). WORKED EXAMPLE: water at $20$ m: $p \\approx 196$ kPa gauge." },
    { f: "$A_1 v_1 = A_2 v_2$",
      n: "CONTINUITY equation (incompressible flow). <br><br><strong>WHERE:</strong> $A$ = cross-section area. $v$ = average flow speed. WORKED EXAMPLE: pipe narrows $0.1 \\to 0.025$ m², inlet $5$ m/s → outlet $20$ m/s." },
    { f: "$p + \\tfrac{1}{2}\\rho v^2 + \\rho gz = \\text{const}",
      n: "BERNOULLI equation along streamline (steady, inviscid, incompressible). <br><br><strong>WHERE:</strong> $p$ = static pressure. $\\tfrac{1}{2}\\rho v^2$ = dynamic pressure. $\\rho gz$ = elevation head. WORKED EXAMPLE: flow speeds from $5$ to $20$ m/s at same height → pressure drops $\\approx 188$ kPa." },
    { f: "$\\text{Re} = \\dfrac{\\rho v L}{\\mu}",
      n: "REYNOLDS number — ratio of inertia to viscous forces. <br><br><strong>WHERE:</strong> $\\rho$ = density. $v$ = characteristic speed. $L$ = characteristic length. $\\mu$ = dynamic viscosity. DIMENSIONLESS. WORKED EXAMPLE: water in $25$ mm pipe at $1$ m/s: Re $\\approx 25000$ → turbulent." },
    { f: "$F_b = \\rho g V$",
      n: "ARCHIMEDES' principle: buoyant force on submerged body. <br><br><strong>WHERE:</strong> $\\rho$ = fluid density. $V$ = displaced volume. WORKED EXAMPLE: $1$ m³ submerged in water: $F_b \\approx 9810$ N (1 tonne weight)." }
  ]);

  add("vibrations", [
    { f: "$\\omega_n = \\sqrt{k/m}",
      n: "NATURAL angular frequency of mass-spring oscillator. <br><br><strong>WHERE:</strong> $\\omega_n$ = natural freq (rad/s). $k$ = spring stiffness (N/m). $m$ = mass (kg). WORKED EXAMPLE: $k = 200$, $m = 2$ → $\\omega_n = 10$ rad/s, $f_n \\approx 1.59$ Hz." },
    { f: "$\\zeta = \\dfrac{c}{2\\sqrt{km}}",
      n: "DAMPING ratio. <br><br><strong>WHERE:</strong> $\\zeta$ = damping ratio. $c$ = damping coefficient (N·s/m). $k, m$ as above. $\\zeta < 1$ underdamped; $= 1$ critically damped; $> 1$ overdamped. WORKED EXAMPLE: $c = 8$, $k = 200$, $m = 2$ → $\\zeta = 0.2$." },
    { f: "$\\omega_d = \\omega_n\\sqrt{1 - \\zeta^2}",
      n: "DAMPED natural frequency. <br><br><strong>WHERE:</strong> $\\omega_d$ = damped natural frequency. $\\omega_n$ = undamped. $\\zeta$ = damping ratio. WORKED EXAMPLE: $\\omega_n = 10$, $\\zeta = 0.2$ → $\\omega_d \\approx 9.8$ rad/s." }
  ]);

  add("materials-strength", [
    { f: "$\\sigma_y,\\; \\sigma_u$",
      n: "YIELD and ULTIMATE stresses. <br><br><strong>WHERE:</strong> $\\sigma_y$ = onset of permanent deformation. $\\sigma_u$ = max engineering stress before necking. WORKED EXAMPLE: A36 steel: $\\sigma_y \\approx 250$ MPa, $\\sigma_u \\approx 400$ MPa." },
    { f: "$K_t = \\dfrac{\\sigma_\\text{max}}{\\sigma_\\text{nom}}",
      n: "STRESS concentration factor (theoretical). <br><br><strong>WHERE:</strong> $\\sigma_\\text{max}$ = peak local stress. $\\sigma_\\text{nom}$ = nominal stress (e.g., $F/A$). WORKED EXAMPLE: small circular hole in plate under tension: $K_t \\approx 3$." },
    { f: "$\\text{FoS} = \\dfrac{\\sigma_\\text{allow}}{\\sigma_\\text{working}}",
      n: "FACTOR of safety. <br><br><strong>WHERE:</strong> $\\sigma_\\text{allow}$ = allowable stress (typ. yield or ultimate). Typical FoS for static loads: 2–4. WORKED EXAMPLE: yield $250$ MPa, design stress $100$ MPa → FoS = 2.5." }
  ]);

  add("manufacturing", [
    { f: "$N = \\dfrac{1000\\,v}{\\pi D}",
      n: "SPINDLE speed for given cutting speed. <br><br><strong>WHERE:</strong> $N$ = rotational speed (rpm). $v$ = cutting speed (m/min). $D$ = workpiece diameter (mm). WORKED EXAMPLE: $v = 30$ m/min, $D = 25$ mm → $N \\approx 382$ rpm." },
    { f: "$Q = AN f$",
      n: "MATERIAL removal rate in turning. <br><br><strong>WHERE:</strong> $A$ = depth-of-cut × width (mm²). $N$ = spindle speed. $f$ = feed per revolution. WORKED EXAMPLE: depth $2$ mm, $N = 500$ rpm, $f = 0.2$ mm/rev → $Q = 200$ mm³/rev × $500$ = $10^5$ mm³/min." }
  ]);

  // ===================== COMPUTER SCIENCE =====================

  add("big-o-complexity", [
    { f: "$O(1)$",
      n: "CONSTANT time. Operation count does not depend on input size $n$. <br><br><strong>WHERE:</strong> $n$ = input size. WORKED EXAMPLE: array random access by index, hash table lookup (average), checking a boolean flag." },
    { f: "$O(\\log n)$",
      n: "LOGARITHMIC time. Each step halves (or constant-factor reduces) the problem. <br><br><strong>WHERE:</strong> $n$ = input size, $\\log$ typically base 2 (constants absorbed in $O$). WORKED EXAMPLE: binary search in a sorted array of $n$ items takes $\\approx \\log_2 n$ comparisons." },
    { f: "$O(n)$",
      n: "LINEAR time. Work proportional to input size. <br><br><strong>WHERE:</strong> $n$ = input size. WORKED EXAMPLE: linear search, sum an array, single pass through $n$ elements." },
    { f: "$O(n \\log n)$",
      n: "LINEARITHMIC time. Optimal comparison-based sorting. <br><br><strong>WHERE:</strong> $n$ = input size. WORKED EXAMPLE: merge sort, heap sort, average-case quicksort." },
    { f: "$O(n^2)$",
      n: "QUADRATIC time. Often nested loops over the input. <br><br><strong>WHERE:</strong> $n$ = input size. WORKED EXAMPLE: bubble sort, comparing every pair in an array." },
    { f: "$O(2^n)$",
      n: "EXPONENTIAL time. Doubles for each unit increase in $n$. <br><br><strong>WHERE:</strong> $n$ = input size. WORKED EXAMPLE: naive recursive Fibonacci, brute-force subset enumeration, traveling-salesman by brute force." }
  ]);

  add("sorting-algorithms", [
    { f: "Merge: $T(n) = 2T(n/2) + O(n)$",
      n: "MERGE-SORT recurrence. <br><br><strong>WHERE:</strong> $T(n)$ = time to sort $n$ items. $2T(n/2)$ = two recursive sorts of half-arrays. $O(n)$ = merge step. SOLUTION: $T(n) = O(n\\log n)$. WORKED EXAMPLE: sorting $10^6$ items takes $\\sim 2 \\times 10^7$ comparisons — finishes in well under a second." },
    { f: "Quick avg: $O(n\\log n)$",
      n: "QUICKSORT expected time with random pivot. <br><br><strong>WHERE:</strong> $n$ = input size. WORST case $O(n^2)$ when pivot is consistently extreme (e.g., sorted input with first-element pivot). MITIGATION: random or median-of-three pivot." },
    { f: "Heap: $O(n\\log n)$",
      n: "HEAPSORT time complexity. <br><br><strong>WHERE:</strong> Build heap in $O(n)$; extract max $n$ times, each $O(\\log n)$. IN-PLACE — $O(1)$ extra space. WORKED EXAMPLE: sorting $10^6$ items in place without merge sort's $O(n)$ auxiliary array." },
    { f: "Lower bound: $\\Omega(n\\log n)$",
      n: "INFORMATION-THEORETIC lower bound for comparison-based sorting. <br><br><strong>WHERE:</strong> $n!$ possible orderings; decision tree must have $\\geq n!$ leaves; height $\\geq \\log_2(n!) = \\Theta(n\\log n)$. CIRCUMVENTED by non-comparison sorts (counting/radix)." }
  ]);

  add("data-structures", [
    { f: "Array access: $O(1)$",
      n: "ARRAY direct access via index. <br><br><strong>WHERE:</strong> Memory laid out contiguously; address = base + index × size. WORKED EXAMPLE: `arr[5]` is a single pointer dereference — no traversal." },
    { f: "Linked list search: $O(n)$",
      n: "LINKED list traversal time to find a value. <br><br><strong>WHERE:</strong> $n$ = number of nodes. NO random access — must walk from head. WORKED EXAMPLE: finding the 1000th node in a singly linked list requires 999 pointer dereferences." },
    { f: "Hash insert/lookup: $O(1)$ avg",
      n: "HASH table average operation time. <br><br><strong>WHERE:</strong> Assumes good hash function + load factor bounded. WORST case $O(n)$ if all keys collide. WORKED EXAMPLE: Python `dict`, Java `HashMap`." },
    { f: "BST balanced: $O(\\log n)$",
      n: "BALANCED binary search tree operations. <br><br><strong>WHERE:</strong> Height $\\Theta(\\log n)$. EXAMPLES: AVL, red-black trees. WORKED EXAMPLE: 1 million-node red-black tree → at most ~40 comparisons per lookup." },
    { f: "Heap insert: $O(\\log n)$",
      n: "BINARY heap insertion (or extract-min/max). <br><br><strong>WHERE:</strong> Heap is complete binary tree, height $\\log n$. Insert: bubble up the new key. WORKED EXAMPLE: priority queues for Dijkstra, A*, top-$k$." }
  ]);

  add("recursion-dp", [
    { f: "$f(n) = f(n-1) + f(n-2)$",
      n: "FIBONACCI recurrence. <br><br><strong>WHERE:</strong> $f(0) = 0$, $f(1) = 1$. NAIVE recursion: $O(\\varphi^n)$ time. WITH MEMOIZATION: $O(n)$. WORKED EXAMPLE: $f(10) = 55$." },
    { f: "DP: optimal substructure",
      n: "DYNAMIC programming applies when problem's optimal solution can be built from optimal sub-solutions, and subproblems OVERLAP. <br><br><strong>WHERE:</strong> Top-down: memoize recursive calls. Bottom-up: tabulate in order. WORKED EXAMPLE: shortest path in DAG (relaxation in topological order)." },
    { f: "Knapsack: $O(nW)$",
      n: "0/1 KNAPSACK DP complexity. <br><br><strong>WHERE:</strong> $n$ = items. $W$ = capacity. PSEUDO-polynomial — exponential in input size (bits of $W$). WORKED EXAMPLE: 100 items, capacity $1000$: 100{,}000 entries, $O(1)$ each → very fast." },
    { f: "LCS: $O(nm)$",
      n: "LONGEST COMMON SUBSEQUENCE DP. <br><br><strong>WHERE:</strong> $n, m$ = string lengths. Recurrence: $L[i,j] = L[i-1,j-1] + 1$ if $a_i = b_j$, else $\\max(L[i-1,j], L[i,j-1])$. WORKED EXAMPLE: diff tools, DNA sequence alignment." }
  ]);

  add("graph-algorithms", [
    { f: "BFS: $O(V + E)$",
      n: "BREADTH-FIRST search time complexity. <br><br><strong>WHERE:</strong> $V$ = vertices, $E$ = edges. USES queue. FINDS shortest path in unweighted graph. WORKED EXAMPLE: web crawler, social-network distance." },
    { f: "DFS: $O(V + E)$",
      n: "DEPTH-FIRST search time complexity. <br><br><strong>WHERE:</strong> Same as BFS. USES stack (or recursion). USEFUL for cycle detection, topological sort, connectivity. WORKED EXAMPLE: dependency resolution." },
    { f: "Dijkstra: $O((V+E)\\log V)$",
      n: "DIJKSTRA's shortest path with binary heap. <br><br><strong>WHERE:</strong> Non-negative edge weights. With Fibonacci heap: $O(E + V\\log V)$. WORKED EXAMPLE: GPS routing, network routing protocols (OSPF)." },
    { f: "Bellman-Ford: $O(VE)$",
      n: "BELLMAN-FORD shortest path. <br><br><strong>WHERE:</strong> Handles NEGATIVE edge weights. Detects negative cycles. WORKED EXAMPLE: arbitrage detection in currency exchange." },
    { f: "Floyd-Warshall: $O(V^3)$",
      n: "ALL-pairs shortest paths via dynamic programming. <br><br><strong>WHERE:</strong> Triple loop over intermediate vertex $k$, source $i$, destination $j$. WORKED EXAMPLE: dense graph with $\\leq 500$ vertices." }
  ]);

  add("automata-computability", [
    { f: "DFA: $(Q, \\Sigma, \\delta, q_0, F)$",
      n: "DETERMINISTIC finite automaton. <br><br><strong>WHERE:</strong> $Q$ = finite set of states. $\\Sigma$ = input alphabet. $\\delta : Q \\times \\Sigma \\to Q$ = transition function. $q_0$ = start state. $F \\subseteq Q$ = accept states. WORKED EXAMPLE: detect strings containing 'abc' substring — 4 states." },
    { f: "Pumping lemma",
      n: "REGULAR pumping lemma. <br><br><strong>WHERE:</strong> For every regular $L$ there is pumping length $p$ such that any $w \\in L$ with $|w| \\geq p$ splits as $xyz$ with $|y| \\geq 1$, $|xy| \\leq p$, $xy^iz \\in L$ for all $i \\geq 0$. USED to prove NON-regularity. WORKED EXAMPLE: $\\{a^n b^n\\}$ fails the lemma → not regular." },
    { f: "Halting problem",
      n: "UNDECIDABLE — no algorithm decides whether arbitrary program $P$ halts on input $x$. <br><br><strong>WHERE:</strong> $P$ = program (Turing machine). $x$ = input string. RESULT: Turing 1936. PROOF: diagonal argument. WORKED EXAMPLE: no general 'will this loop forever?' debugger exists." }
  ]);

  add("p-vs-np", [
    { f: "$\\text{P} \\subseteq \\text{NP}$",
      n: "P is subset of NP (trivially). <br><br><strong>WHERE:</strong> P = decidable in polynomial time. NP = verifiable in polynomial time given a witness. OPEN: P = NP? Clay $1M Millennium Prize. WORKED EXAMPLE: factoring is in NP (verify by multiplication); not known to be in P." },
    { f: "NP-complete",
      n: "HARDEST problems in NP. <br><br><strong>WHERE:</strong> Problem $A$ is NP-complete if (1) $A \\in$ NP and (2) every NP problem reduces to $A$ in polynomial time. WORKED EXAMPLE: SAT (Cook-Levin 1971), 3-SAT, TSP (decision), clique, vertex cover, subset sum." },
    { f: "Polynomial reduction",
      n: "Problem $A \\leq_p B$: poly-time algorithm transforms instances of $A$ to instances of $B$ preserving answer. <br><br><strong>WHERE:</strong> $A$ = source problem. $B$ = target problem. WORKED EXAMPLE: 3-SAT $\\leq_p$ clique by standard graph construction." }
  ]);

  add("discrete-cs", [
    { f: "$|A \\cup B| = |A| + |B| - |A \\cap B|$",
      n: "INCLUSION-EXCLUSION for two sets. <br><br><strong>WHERE:</strong> $|\\cdot|$ = cardinality. EXTENDS to $n$ sets with alternating signs. WORKED EXAMPLE: $|A| = 10$, $|B| = 8$, $|A \\cap B| = 3$ → $|A \\cup B| = 15$." },
    { f: "$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$",
      n: "BINOMIAL coefficient. <br><br><strong>WHERE:</strong> $n$ = total items. $k$ = chosen. NUMBER of ways to choose $k$ from $n$ (unordered). WORKED EXAMPLE: $\\binom{8}{3} = 56$ — bit strings of length 8 with exactly three 1's." },
    { f: "Induction",
      n: "MATHEMATICAL induction proves $P(n)$ for all $n \\geq n_0$. <br><br><strong>WHERE:</strong> (1) BASE: prove $P(n_0)$. (2) STEP: assume $P(k)$ holds, prove $P(k+1)$. WORKED EXAMPLE: prove $1 + 2 + \\ldots + n = n(n+1)/2$." },
    { f: "$a \\equiv b \\pmod n$",
      n: "MODULAR equivalence: $n$ divides $a - b$. <br><br><strong>WHERE:</strong> $a, b, n$ integers, $n > 0$. WORKED EXAMPLE: $17 \\equiv 2 \\pmod 5$ since $17 - 2 = 15 = 3 \\cdot 5$." }
  ]);

  add("info-theory", [
    { f: "$H(X) = -\\sum p_i \\log_2 p_i",
      n: "SHANNON entropy of discrete random variable. <br><br><strong>WHERE:</strong> $X$ = random variable. $p_i$ = probability of outcome $i$. UNIT: bits (log base 2). WORKED EXAMPLE: fair coin: $H = 1$ bit. Biased coin $p = 0.9$: $H \\approx 0.469$ bits." },
    { f: "$H_\\text{max} = \\log_2 n$",
      n: "MAX entropy for $n$ equally likely outcomes. <br><br><strong>WHERE:</strong> $n$ = number of possible outcomes. ACHIEVED by uniform distribution. WORKED EXAMPLE: fair die (6 sides): $H = \\log_2 6 \\approx 2.585$ bits per roll." },
    { f: "$L_\\text{avg} \\geq H(X)$",
      n: "SHANNON source coding theorem: average code length $\\geq$ entropy. <br><br><strong>WHERE:</strong> $L_\\text{avg}$ = average codeword length. $H(X)$ = source entropy. HUFFMAN code achieves within 1 bit; arithmetic coding gets arbitrarily close. WORKED EXAMPLE: $H = 2.5$ bits means you can't compress below 2.5 bits per symbol on average." },
    { f: "$D_\\text{KL}(P\\|Q) = \\sum p_i \\log\\dfrac{p_i}{q_i}",
      n: "KL DIVERGENCE between distributions. <br><br><strong>WHERE:</strong> $P, Q$ = probability distributions. $\\geq 0$, $= 0$ iff $P = Q$. ASYMMETRIC. WORKED EXAMPLE: used as loss in variational inference, classification." }
  ]);

  add("ml-basics", [
    { f: "$\\hat\\beta = (X^TX)^{-1}X^Ty$",
      n: "LINEAR regression closed-form (ordinary least squares). <br><br><strong>WHERE:</strong> $X$ = design matrix ($n \\times p$). $y$ = target vector ($n$). $\\hat\\beta$ = estimated coefficient vector ($p$). REQUIRES $X^TX$ invertible. WORKED EXAMPLE: 1D regression $y = \\beta_0 + \\beta_1 x$ — closed form returns familiar slope/intercept formulas." },
    { f: "$\\theta \\leftarrow \\theta - \\eta\\nabla L(\\theta)$",
      n: "GRADIENT descent update rule. <br><br><strong>WHERE:</strong> $\\theta$ = parameters. $\\eta$ = learning rate (small positive). $\\nabla L$ = gradient of loss. ITERATIVE — converges to local min. WORKED EXAMPLE: in linear regression, gradient descent finds same $\\hat\\beta$ as closed form, scales to massive datasets." },
    { f: "$L_\\text{MSE} = \\tfrac{1}{n}\\sum (y_i - \\hat y_i)^2",
      n: "MEAN squared error loss for regression. <br><br><strong>WHERE:</strong> $n$ = number of samples. $y_i$ = true target. $\\hat y_i$ = prediction. WORKED EXAMPLE: predicting house prices — penalizes large errors quadratically." },
    { f: "$L_\\text{CE} = -\\sum y_i \\log \\hat y_i",
      n: "CROSS-ENTROPY loss for classification. <br><br><strong>WHERE:</strong> $y_i$ = true label (one-hot). $\\hat y_i$ = predicted probability for class $i$. WORKED EXAMPLE: predicting 'cat' with probability 0.9 when label is cat: loss $= -\\log 0.9 \\approx 0.105$." },
    { f: "Bias-variance:",
      n: "TEST error $\\approx$ bias$^2$ + variance + noise. <br><br><strong>WHERE:</strong> BIAS = error from oversimple model assumptions. VARIANCE = error from sensitivity to training data. NOISE = irreducible. WORKED EXAMPLE: linear model on a parabola has high bias; deep net with few training samples has high variance." }
  ]);

  add("databases-sql", [
    { f: "SELECT col FROM T WHERE cond",
      n: "BASIC SQL query: filter rows of table $T$ by condition, project specified columns. <br><br><strong>WHERE:</strong> $T$ = table. col = column(s). cond = boolean expression. WORKED EXAMPLE: `SELECT name FROM users WHERE age > 25;` returns user names of those over 25." },
    { f: "JOIN ON condition",
      n: "INNER JOIN combines rows from two tables based on a matching condition. <br><br><strong>WHERE:</strong> Returns only rows with matches in both tables. LEFT JOIN keeps all from left side. WORKED EXAMPLE: `SELECT u.name, o.total FROM users u JOIN orders o ON u.id = o.user_id;` pairs each order with its user." },
    { f: "Normalization:",
      n: "NORMAL forms reduce redundancy. <br><br><strong>WHERE:</strong> 1NF: atomic values, no repeating groups. 2NF: 1NF + no partial dependencies. 3NF: 2NF + no transitive dependencies on non-key. BCNF: stricter version of 3NF. WORKED EXAMPLE: split addresses into separate table to avoid repeating customer name on each order." }
  ]);

  add("os-fundamentals", [
    { f: "Process vs thread",
      n: "PROCESS = isolated address space; THREAD = shares process address space. <br><br><strong>WHERE:</strong> Process: heavyweight, OS-protected. Thread: lightweight, shares globals & heap, has own stack & registers. WORKED EXAMPLE: web browser uses processes per tab (isolation) and threads within (parallel rendering)." },
    { f: "Deadlock conditions",
      n: "COFFMAN conditions for deadlock. <br><br><strong>WHERE:</strong> (1) Mutual exclusion. (2) Hold-and-wait. (3) No preemption. (4) Circular wait. ALL FOUR required; breaking any prevents deadlock. WORKED EXAMPLE: total ordering on lock acquisition breaks (4)." },
    { f: "Virtual memory",
      n: "PAGED virtual memory translation. <br><br><strong>WHERE:</strong> Virtual address split into page number + offset. Page table maps virtual page → physical frame. TLB caches recent translations. WORKED EXAMPLE: 4 KB pages, 32-bit virtual address space → up to $2^{20}$ pages per process." },
    { f: "Throughput vs latency",
      n: "Performance metrics. <br><br><strong>WHERE:</strong> THROUGHPUT = jobs completed per unit time. LATENCY = time for one job. Trade-off in scheduling. WORKED EXAMPLE: batch scheduling maximizes throughput; interactive scheduling minimizes latency." }
  ]);
})();
