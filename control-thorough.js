// Thorough deepening of control topics: brings formula tables, glossaries,
// and misconceptions up to the same depth as math/physics topics. Uses a
// push pattern so we APPEND to existing arrays rather than overwrite.

(function () {
  window.FORMULAS = window.FORMULAS || {};
  window.GLOSSARY = window.GLOSSARY || {};
  window.MISCONCEPTIONS = window.MISCONCEPTIONS || {};

  function F(id, items) { (window.FORMULAS[id] = window.FORMULAS[id] || []).push(...items); }
  function G(id, items) { (window.GLOSSARY[id] = window.GLOSSARY[id] || []).push(...items); }
  function M(id, items) { (window.MISCONCEPTIONS[id] = window.MISCONCEPTIONS[id] || []).push(...items); }

  // ============================================================
  // CHAPTER 1 — INTRO TO CONTROL
  // ============================================================
  F("intro-control", [
    { f: "Disturbance rejection $\\propto 1/(1+GH)$", n: "ORIGIN: write output under disturbance $d$: $Y = G(R - HY) + d$, solve. DERIVATION: $Y(1+GH) = GR + d$, so the disturbance-to-output transfer function is $1/(1+GH)$. Large loop gain crushes disturbances. WORKED: $|GH|=99$ at low frequency makes the loop reject disturbances by a factor of 100." },
    { f: "Sensitivity $S = 1/(1+GH)$", n: "How much closed-loop output changes when plant changes. Small $|S|$ at a frequency = robust to plant variations there. ORIGIN: take derivative of $T$ with respect to $G$; the ratio of fractional changes is $S$." },
    { f: "Complementary $T = GH/(1+GH)$", n: "$S + T = 1$ — fundamental identity. Where you have low sensitivity to plant variations ($S$ small), you have high sensitivity to measurement noise ($T$ near 1). The unavoidable trade-off." },
    { f: "Loop gain $L = GH$", n: "The single most important compound quantity. Bode plots usually show $L$; root locus is plotted for $L$; Nyquist plot is of $L$. Whenever you see 'loop gain' that's what's meant — the product of all blocks around the loop." }
  ]);
  G("intro-control", [
    { term: "Disturbance", def: "An unwanted signal added to the loop (wind on a plane, hill on a road). The whole point of feedback is to suppress disturbances." },
    { term: "Actuator", def: "The device that pushes the plant (motor, valve, heater). Together with the controller it makes the system DO something." },
    { term: "Bandwidth", def: "Range of frequencies the closed loop tracks accurately. Higher bandwidth = faster response but more noise sensitivity." },
    { term: "Tracking", def: "Following a changing reference. Step tracking, ramp tracking, sinusoidal tracking each demand different controllers." },
    { term: "Regulation", def: "Holding the output at a constant set point despite disturbances. Most industrial loops are regulators." }
  ]);

  // ============================================================
  // CH 2 — LAPLACE TRANSFORMS
  // ============================================================
  F("laplace-transforms-control", [
    { f: "$\\mathcal L\\{\\ddot f\\} = s^2 F(s) - sf(0) - \\dot f(0)$", n: "DERIVATION: apply the derivative rule twice. Each derivative pulls down an $s$ and leaves behind one initial condition. For zero IC's the formula reduces to $s^2 F$. WORKED: $\\mathcal L\\{\\cos\\omega t\\}$ via this and the ODE $\\ddot f + \\omega^2 f = 0$ gives $s/(s^2+\\omega^2)$." },
    { f: "$\\mathcal L\\{e^{-at}f(t)\\} = F(s+a)$", n: "Frequency shifting / first translation theorem. ORIGIN: substitute into the definition. USE: instantly invert things like $1/((s+a)^2 + \\omega^2)$ as $e^{-at}\\sin\\omega t/\\omega$." },
    { f: "$\\mathcal L\\{f(t-\\tau)u(t-\\tau)\\} = e^{-s\\tau}F(s)$", n: "Time-shifting / second translation theorem. ORIGIN: substitute $t' = t-\\tau$ in the integral. The factor $e^{-s\\tau}$ is the s-domain signature of a pure delay $\\tau$ — useful for transport-delay modeling." },
    { f: "$\\mathcal L\\{tf(t)\\} = -dF/ds$", n: "Multiplication by $t$ in time corresponds to negative differentiation in $s$. WORKED: $\\mathcal L\\{t e^{-at}\\} = -d/ds(1/(s+a)) = 1/(s+a)^2$." },
    { f: "$\\mathcal L\\{f \\ast g\\} = F(s)G(s)$", n: "Convolution becomes multiplication. ORIGIN: substitute the convolution integral into Laplace and swap order of integration. PROFOUND: this is why transfer functions multiply in series — the time-domain output is a convolution, which becomes multiplication in the s-domain." }
  ]);
  G("laplace-transforms-control", [
    { term: "Causal signal", def: "A function that is zero for $t < 0$. Laplace transform is naturally defined for causal signals — the integral starts at 0." },
    { term: "Pole", def: "A value of $s$ where $F(s)$ blows up. Encodes one decaying or oscillating mode of the time-domain function." },
    { term: "Convolution", def: "$(f \\ast g)(t) = \\int_0^t f(\\tau)g(t-\\tau)d\\tau$. Time-domain operation that becomes ordinary multiplication after Laplace." },
    { term: "Delay block", def: "Multiplies the s-domain signal by $e^{-s\\tau}$. Adds linear phase $-\\omega\\tau$ in frequency. Difficult to handle with classical methods." },
    { term: "Transfer pair", def: "A function and its Laplace transform that go together: $1 \\leftrightarrow 1/s$, $e^{-at} \\leftrightarrow 1/(s+a)$, etc. Memorize the dozen most common." }
  ]);

  // ============================================================
  // CH 2 — TRANSFER FUNCTIONS
  // ============================================================
  F("transfer-functions", [
    { f: "Step response $y(t)$ from $G(s)$", n: "$Y(s) = G(s) \\cdot 1/s$. Inverse-transform to get $y(t)$. WORKED: $G(s) = 5/(s+5)$ gives $Y = 5/(s(s+5)) = 1/s - 1/(s+5)$, so $y(t) = 1 - e^{-5t}$." },
    { f: "Impulse response = $\\mathcal L^{-1}\\{G(s)\\}$", n: "The output when input is $\\delta(t)$. ORIGIN: $\\mathcal L\\{\\delta\\} = 1$, so $Y(s) = G(s) \\cdot 1 = G(s)$. The impulse response COMPLETELY characterizes a linear system." },
    { f: "Frequency response $G(j\\omega)$", n: "Replace $s$ with $j\\omega$. Magnitude $|G(j\\omega)|$ = gain at frequency $\\omega$; angle $\\angle G(j\\omega)$ = phase shift. ORIGIN: under sinusoidal input, the steady-state output is $|G(j\\omega)|\\sin(\\omega t + \\angle G(j\\omega))$." },
    { f: "Initial slope from $G(s)$", n: "$\\dot y(0^+) = \\lim_{s\\to\\infty} s^2 G(s) \\cdot 1/s = \\lim_{s\\to\\infty} sG(s)$ for unit step. Tells you whether the response starts moving immediately (strictly proper) or has a jump (proper but not strictly)." },
    { f: "Time-constant form $G(s) = K \\prod (\\tau_i s + 1)^{-1}$", n: "Often more useful than pole-zero form for hand sketching. Each $\\tau_i s + 1$ adds $-20$ dB/dec above $\\omega = 1/\\tau_i$. DC gain is just $K$. Used pervasively in process control." }
  ]);
  G("transfer-functions", [
    { term: "Causal", def: "Output depends only on past inputs, not future. All physically realizable systems are causal. In the s-domain: numerator degree $\\leq$ denominator degree." },
    { term: "Strictly proper", def: "Numerator degree strictly less than denominator. Has no instantaneous response — $y(0^+) = 0$ for step input." },
    { term: "Bi-proper", def: "Numerator degree equal to denominator. There's a direct feedthrough — output responds instantly to input changes." },
    { term: "Minimum phase", def: "All zeros in the LHP. The Bode magnitude uniquely determines the phase. Non-minimum-phase zeros (in RHP) cause undershoot." },
    { term: "Undershoot", def: "When step response moves the wrong way before going to the target. Signature of a RHP zero. Boeing 747 elevator famously does this." }
  ]);
  M("transfer-functions", [
    { wrong: "Order of $G(s)$ counts zeros plus poles.", right: "Order is just the denominator degree — number of poles. Zeros don't add to order." },
    { wrong: "DC gain depends on the zeros.", right: "DC gain $G(0)$ depends on BOTH numerator and denominator at $s = 0$, so it's affected by where zeros sit too — but it's a single number you compute by substitution." }
  ]);

  // ============================================================
  // ELECTRICAL MODELING
  // ============================================================
  F("electrical-modeling-control", [
    { f: "RC high-pass $V_R/V_i = RCs/(RCs+1)$", n: "Output across R rather than C. At DC: $G(0) = 0$ — blocks the constant. At high $\\omega$: $G \\to 1$ — passes through. DERIVATION: voltage divider with $V_R$ on top." },
    { f: "RL low-pass $V_R/V_i = R/(Ls + R)$", n: "Inductor blocks high frequencies; resistor output sees only the low-frequency component. Time constant $\\tau = L/R$. DERIVATION: voltage divider, $V_R$ on top." },
    { f: "Op-amp integrator $V_o/V_i = -1/(RCs)$", n: "Inverting op-amp with $R$ in input, $C$ in feedback. Pole at $s = 0$ (pure integrator). WORKED: 1 V step input gives ramp output with slope $-1/(RC)$ V/s." },
    { f: "Op-amp PID $V_o/V_i = K_p + K_i/s + K_d s$", n: "Build by paralleling: P (gain), I (op-amp integrator), D (op-amp differentiator with high-frequency rolloff). Industry standard analog implementation. Each gain is independently tunable via a resistor or capacitor." },
    { f: "Network impedance combining: $Z_\\text{series} = Z_1 + Z_2$, $Z_\\text{parallel} = Z_1Z_2/(Z_1+Z_2)$", n: "Same rules as DC resistors, just with complex impedances. Once you have the total $Z(s)$, voltage and current relate by $V = ZI$ in the s-domain." }
  ]);
  G("electrical-modeling-control", [
    { term: "Phasor", def: "Complex-number representation of a sinusoid: $V_0 e^{j\\phi}$. Magnitude = amplitude, angle = phase. Steady-state AC analysis uses phasors." },
    { term: "Admittance", def: "$Y = 1/Z$. Useful when adding parallel branches — admittances add in parallel." },
    { term: "Two-port network", def: "A circuit with input and output ports. Characterized by 2×2 matrices (Z, Y, ABCD, hybrid). Cascaded networks combine by matrix multiplication." },
    { term: "Loading effect", def: "Connecting a downstream stage that draws current changes the transfer function of the upstream stage. Buffer with an op-amp follower to prevent." },
    { term: "Bandwidth-gain product", def: "For an op-amp: gain × bandwidth = constant. Higher closed-loop gain → lower bandwidth. The gain-bandwidth trade." }
  ]);

  // ============================================================
  // MECHANICAL MODELING
  // ============================================================
  F("mechanical-modeling-control", [
    { f: "Force balance: $\\sum F = m\\ddot x$ on each body", n: "Write Newton for every mass; let the resulting equations couple through the spring/damper connections. The Laplace transform produces a matrix of polynomials in $s$." },
    { f: "Rotational analog: $J\\ddot\\theta + D\\dot\\theta + K\\theta = T$", n: "Translation ↔ rotation: $m \\leftrightarrow J$, $F \\leftrightarrow T$, $x \\leftrightarrow \\theta$, $v \\leftrightarrow \\omega$, spring const $k \\leftrightarrow$ torsional stiffness $K$. Same diagram, same equations." },
    { f: "Gear ratio $N = N_2/N_1$ transforms $T$ and $\\omega$", n: "Torque multiplies by $N$, angular velocity divides by $N$. Reflected inertia from output to input: $J_\\text{ref} = J_2/N^2$. Why high-ratio gearboxes make motors 'feel' big loads as small." },
    { f: "DC motor $V = R i + L di/dt + K_b \\dot\\theta$,  $T = K_t i$", n: "Two coupled equations: electrical (KVL) and mechanical (torque from current). $K_b$ = back-EMF constant, $K_t$ = torque constant. Combine to get $\\omega(s)/V(s) = K_t/(JLs^2 + (JR + DL)s + DR + K_t K_b)$." },
    { f: "Friction model: $F = b\\dot x + F_c \\text{sgn}(\\dot x)$", n: "Linear viscous part + Coulomb (dry) friction. Real systems usually have both. Coulomb friction is nonlinear — causes stick-slip and dead band at low velocity." }
  ]);
  G("mechanical-modeling-control", [
    { term: "Stiffness", def: "Spring constant $k$. Force needed for unit displacement. Higher stiffness → higher natural frequency." },
    { term: "Compliance", def: "Inverse of stiffness, $1/k$. Often used in vibration isolation: high compliance = soft mount = good isolation above resonance." },
    { term: "Quality factor Q", def: "Sharpness of resonance: $Q = 1/(2\\zeta)$. High Q = lightly damped, narrow resonance peak. Loudspeakers, tuning forks, MEMS oscillators." },
    { term: "Modal analysis", def: "Decompose a complex mechanical system into independent SHM modes. Each mode has its own $\\omega_n$, $\\zeta$, shape." },
    { term: "Lumped vs distributed", def: "Lumped: discrete masses and springs (ODE). Distributed: continuous beam, string (PDE). Lumped is the engineering approximation for low frequencies." }
  ]);

  // ============================================================
  // STATE SPACE
  // ============================================================
  F("state-space", [
    { f: "Solution: $\\mathbf x(t) = e^{At}\\mathbf x(0) + \\int_0^t e^{A(t-\\tau)}B\\mathbf u(\\tau)d\\tau$", n: "Variation-of-constants for linear systems. The matrix exponential $e^{At}$ generalizes the scalar $e^{at}$. Computed via Jordan form, Pade approximant, or just numerical libraries." },
    { f: "Similarity transformation: $\\tilde A = T^{-1}AT$", n: "Change of basis. Pick $T$ to diagonalize $A$ (eigenvectors as columns) and the dynamics decouple — each state evolves independently as an exponential." },
    { f: "Observability matrix $\\mathcal O = [C; CA; CA^2; \\ldots; CA^{n-1}]$", n: "Stack $C$ on top of $CA$, $CA^2$, etc. Full rank ⇔ observable. The dual of controllability." },
    { f: "Modal decomposition", n: "If $A = T\\Lambda T^{-1}$ (eigendecomposition), then the response is a sum of $T$ columns weighted by $e^{\\lambda_i t}$. Each eigenvector is a mode shape." }
  ]);
  G("state-space", [
    { term: "State", def: "A minimal set of variables that, with the input, predicts the future. For a circuit: capacitor voltages and inductor currents." },
    { term: "Order", def: "Number of states. Same as the order of the underlying ODE." },
    { term: "Realization", def: "A specific $(A, B, C, D)$ that yields a given transfer function. Not unique — infinitely many realizations correspond to the same $G(s)$." },
    { term: "Minimal realization", def: "Realization with smallest possible state dimension. Both controllable and observable." },
    { term: "Equilibrium point", def: "$\\mathbf x^*$ where $\\dot{\\mathbf x} = 0$ with zero input. Linear systems usually have one equilibrium at origin." }
  ]);
  M("state-space", [
    { wrong: "State variables are unique.", right: "Many choices work — phase variables ($y, \\dot y, \\ldots$), modal variables (eigenvectors), physical variables (capacitor voltage, inductor current). All equivalent up to similarity transformation." },
    { wrong: "Controllability and observability are the same thing.", right: "They are DUAL but distinct. A system can be controllable but not observable (you can drive it anywhere, but can't tell from the output where it is) or vice versa." }
  ]);

  // ============================================================
  // FIRST-ORDER
  // ============================================================
  F("first-order-response", [
    { f: "Impulse response $h(t) = (1/\\tau)e^{-t/\\tau}$", n: "Output when input is $\\delta(t)$. Integrating gives the step response. WORKED: $\\tau = 0.5$ s; impulse peaks at $1/\\tau = 2$ at $t = 0$, decays to 5% by $t = 1.5$ s." },
    { f: "Ramp response $y(t) = t - \\tau + \\tau e^{-t/\\tau}$", n: "Eventually tracks the ramp with a constant lag of $\\tau$ — the velocity error. ORIGIN: $Y(s) = G(s)/s^2$, partial fractions, inverse-Laplace." },
    { f: "Pole location $s = -1/\\tau$", n: "Farther LEFT = smaller $\\tau$ = faster response. Closer to imaginary axis = slow and sluggish. Single number that determines everything." },
    { f: "Closed-loop $\\tau$ shrinks under feedback", n: "Plant $1/(\\tau s + 1)$ with proportional gain $K$ and unity feedback gives closed-loop time constant $\\tau/(1+K)$. Higher gain → faster response (no oscillation in 1st order)." }
  ]);
  G("first-order-response", [
    { term: "Natural response", def: "Output with zero input, decaying from initial condition. Pure exponential for 1st-order systems." },
    { term: "Forced response", def: "Output with zero initial condition, driven only by input. Steady-state part of step response." },
    { term: "Order", def: "Highest derivative in the governing ODE. For first-order: $\\dot y + ay = bu$." },
    { term: "Tau ($\\tau$)", def: "Time constant. 1/pole-magnitude. Time to reach 63% of final value." },
    { term: "Type", def: "Number of integrators (poles at origin) in the open loop. First-order plant with no integrator is type 0." }
  ]);

  // ============================================================
  // SECOND-ORDER
  // ============================================================
  F("second-order-response", [
    { f: "Step response: $y(t) = 1 - \\dfrac{e^{-\\zeta\\omega_n t}}{\\sqrt{1-\\zeta^2}}\\sin(\\omega_d t + \\phi)$", n: "Underdamped case. $\\phi = \\arctan(\\sqrt{1-\\zeta^2}/\\zeta)$. Envelope decays exponentially at rate $\\zeta\\omega_n$. Useful for symbolic analysis of overshoot, peak time." },
    { f: "Critically damped: $y(t) = 1 - (1 + \\omega_n t)e^{-\\omega_n t}$", n: "Boundary case $\\zeta = 1$. No oscillation. Fastest rise without overshoot. Used in instruments where any ringing is unacceptable." },
    { f: "Number of oscillations: $\\approx (\\pi/2)\\sqrt{1-\\zeta^2}/\\zeta$", n: "Roughly how many overshoots before settling. $\\zeta = 0.5$ → ~3 visible oscillations; $\\zeta = 0.1$ → ~15." },
    { f: "Sinusoidal frequency response peak $M_p = 1/(2\\zeta\\sqrt{1-\\zeta^2})$", n: "Resonant peak height in Bode magnitude plot. Occurs at resonant frequency $\\omega_r = \\omega_n\\sqrt{1 - 2\\zeta^2}$ for $\\zeta < 1/\\sqrt 2$; flat for higher $\\zeta$." }
  ]);
  G("second-order-response", [
    { term: "Underdamped", def: "$\\zeta < 1$. Complex conjugate poles. Step response oscillates and overshoots." },
    { term: "Overdamped", def: "$\\zeta > 1$. Two distinct real poles. No oscillation; slower than critical." },
    { term: "Critically damped", def: "$\\zeta = 1$. Repeated real pole. Fastest non-oscillatory response." },
    { term: "Dominant pole", def: "When there are several poles, the one closest to the $j\\omega$ axis dominates — its mode decays slowest and shapes the late response." },
    { term: "Resonance", def: "Peak in frequency response near $\\omega_n$. For lightly damped systems can be tens of dB above DC gain." }
  ]);

  // ============================================================
  // BLOCK DIAGRAMS
  // ============================================================
  F("block-diagrams", [
    { f: "Disturbance at output: $Y = \\dfrac{G}{1+GH}R + \\dfrac{1}{1+GH}D$", n: "Two-input formula. Reference is multiplied by $T = G/(1+GH)$; disturbance is multiplied by $S = 1/(1+GH)$. The same denominator $1 + GH$ for both — the closed-loop characteristic polynomial." },
    { f: "Noise at sensor: $Y = TR - TN$", n: "Measurement noise shows up at output multiplied by $T$ — bad. So $T$ being near 1 (good for tracking) means full noise transmission. Hence the noise/tracking trade." },
    { f: "Moving a summing junction past a block", n: "If junction is BEFORE block $G$, you can move it AFTER by multiplying the bypass branch by $G$. Equivalent diagram, simpler topology." },
    { f: "Splitting a pickoff point", n: "If pickoff is BEFORE block $G$, you can move it AFTER by inserting $1/G$ on the downstream branch. Useful when reducing systems with multiple feedback loops." }
  ]);
  G("block-diagrams", [
    { term: "Pickoff point", def: "A node where one signal splits into multiple downstream branches. Doesn't change the signal — just routes it." },
    { term: "Inner loop", def: "A feedback loop nested inside another. Often used for inner velocity loop + outer position loop in motion control." },
    { term: "Cascade", def: "Multiple blocks in series. Transfer function is the product. Note: assumes no loading between stages." },
    { term: "Equivalent diagram", def: "Different topology, same input-output relationship. Block-diagram algebra produces equivalents by following the three reduction rules." }
  ]);

  // ============================================================
  // SIGNAL FLOW / MASON
  // ============================================================
  F("signal-flow-mason", [
    { f: "Total transfer = $\\sum_k P_k \\Delta_k / \\Delta$", n: "If there are multiple forward paths $P_1, P_2, \\ldots$, each gets its own cofactor $\\Delta_k$. WORKED: with 2 forward paths and 1 loop touching both, $T = (P_1 + P_2)/(1 - L)$." },
    { f: "Cofactor of path $k$: $\\Delta_k = \\Delta|_{\\text{loops touching path } k = 0}$", n: "Set to zero any loop that shares a node with path $k$. The remaining is the cofactor. For simple graphs $\\Delta_k = 1$." },
    { f: "Loop touching rule", n: "Two loops touch if they share any node. In the determinant, products of MUTUALLY NON-TOUCHING loops appear as higher-order terms (with alternating signs)." },
    { f: "Sign convention", n: "Every loop gain includes the negative-feedback sign as part of its product. A loop with a $-1$ summing junction contributes $-GH$ to $\\Delta$; in the formula this becomes $1 - (-GH) = 1 + GH$." }
  ]);
  G("signal-flow-mason", [
    { term: "Source node", def: "A node with no incoming branches. Where independent inputs enter." },
    { term: "Sink node", def: "A node with no outgoing branches. Where outputs are read off." },
    { term: "Forward path", def: "A path from a source to a sink that doesn't revisit any node." },
    { term: "Determinant", def: "$\\Delta = 1 - (\\sum L_i) + (\\sum L_i L_j)_{NT} - \\ldots$. Captures the loop topology of the entire graph." }
  ]);

  // ============================================================
  // ROUTH-HURWITZ
  // ============================================================
  F("routh-hurwitz", [
    { f: "Number of RHP roots = sign changes in first column", n: "ROUTH'S THEOREM. The deep result. WORKED: $s^3 + 2s^2 - s + 1$: Routh first column 1, 2, $-3/2$, 1 → 2 sign changes → 2 RHP roots." },
    { f: "Routh entry formula: $a_{i,j} = -(a_{i-1,1} a_{i-2, j+1} - a_{i-2,1} a_{i-1, j+1})/a_{i-1,1}$", n: "The cross-multiplication rule, written explicitly. Each new entry uses the leftmost of the row above and two entries from the two rows above." },
    { f: "Auxiliary polynomial substitution", n: "If row $s^k$ vanishes entirely, build auxiliary $A(s)$ from row $s^{k+1}$ (coefficients on even powers). Differentiate $A$, use its coefficients as the replacement row, continue. Roots of $A(s)$ are on the $j\\omega$ axis." },
    { f: "$\\epsilon$-method for zero in first column only", n: "If first column has a zero (but the row isn't all zeros), replace the zero with small $\\epsilon > 0$, continue, then take $\\epsilon \\to 0$ to count sign changes." }
  ]);
  G("routh-hurwitz", [
    { term: "Hurwitz polynomial", def: "Polynomial with all roots in LHP. Equivalent to: Routh array first column all positive." },
    { term: "Marginally stable", def: "Poles on the $j\\omega$ axis (simple) but none in RHP. System oscillates without growing or decaying. Boundary of stability." },
    { term: "Sign change", def: "Two consecutive entries with opposite signs in the first column. Each sign change counts one RHP root." }
  ]);

  // ============================================================
  // STEADY-STATE ERRORS
  // ============================================================
  F("steady-state-errors", [
    { f: "Error transfer function $E/R = 1/(1+G)$", n: "For unity feedback. Apply FVT: $e_{ss} = \\lim_{s\\to 0} sE(s) = \\lim_{s\\to 0} sR/(1+G)$. Sets up all the type/input combinations." },
    { f: "Disturbance steady-state error: $e_{ss,d} = -G_d(0)/(1+G(0))$", n: "Where $G_d$ is the transfer from disturbance to error. Integral action ($G$ with pole at origin) → $G(0) \\to \\infty$ → disturbance error vanishes." },
    { f: "Type table summary", n: "Type 0: tracks step with offset, infinite ramp error. Type 1: tracks step exactly, ramp with offset. Type 2: tracks ramp exactly, parabola with offset. Each integrator buys you one." },
    { f: "Trade-off: high $K \\to$ low $e_{ss}$ but worse damping", n: "$e_{ss} = 1/(1+K_p)$ for type 0 — you'd love $K_p$ huge. But high $K$ in feedback often hurts transient stability. The eternal trade." }
  ]);
  G("steady-state-errors", [
    { term: "Set point", def: "The reference value the controller is trying to track. May be constant (regulation) or varying (tracking)." },
    { term: "Offset", def: "Persistent gap between output and set point. Type-0 systems leave an offset for step inputs unless something is done." },
    { term: "Velocity error", def: "Steady-state error to a ramp input. The 'lag' the system sees while tracking a moving target." },
    { term: "Reset action", def: "Industry term for integral action. 'Reset' the controller after each excursion." }
  ]);

  // ============================================================
  // ROOT LOCUS
  // ============================================================
  F("root-locus", [
    { f: "Angle condition $\\angle G(s)H(s) = (2k+1)180°$ on the locus", n: "Where the locus lives. Equivalent to: sum of angles from poles to $s$ MINUS sum of angles from zeros equals odd multiple of $180°$." },
    { f: "Magnitude condition $|G(s)H(s)|=1/K$", n: "Once you've found a point on the locus, this gives the corresponding $K$. Used to read off the gain at any locus point — e.g., the $K$ at which damping is exactly 0.5." },
    { f: "Departure angle from complex pole $p$: $\\theta_d = 180° + \\sum \\angle\\text{zeros}_{\\to p} - \\sum \\angle\\text{other poles}_{\\to p}$", n: "Direction the locus leaves a complex pole. Critical for sketching loci with complex starting points." },
    { f: "Number of branches going to zeros at infinity = $n - m$", n: "Open loop has $n$ poles and $m$ zeros. $m$ branches end at finite zeros; the other $n - m$ head off along asymptotes." }
  ]);
  G("root-locus", [
    { term: "Open-loop transfer function", def: "$G(s)H(s)$ — the loop gain. Root locus is plotted for this." },
    { term: "Departure angle", def: "Angle at which a locus branch leaves a complex pole." },
    { term: "Arrival angle", def: "Angle at which a locus branch arrives at a complex zero." },
    { term: "Symmetry", def: "Locus is symmetric about the real axis because complex poles always come in conjugate pairs." }
  ]);

  // ============================================================
  // ROOT LOCUS DESIGN
  // ============================================================
  F("root-locus-design", [
    { f: "Lead compensator $G_c = K_c(s+z)/(s+p)$, $z < p$", n: "Provides phase boost. WORKED: $z=2, p=20$ gives 10x pole/zero ratio, max boost ~55° at $\\omega_m = \\sqrt{40} \\approx 6.3$ rad/s." },
    { f: "Lag compensator $G_c = K_c(s+z)/(s+p)$, $z > p$", n: "Adds DC gain without much phase penalty. WORKED: $z=1, p=0.1$ multiplies DC gain by 10, kills steady-state error 10×." },
    { f: "Pole-zero cancellation: $z_c = $ slow plant pole", n: "Place compensator zero exactly on the slow plant pole. The two cancel; remaining dynamics are dominated by fast roots. Risky if model is wrong — leaves a slow residual." },
    { f: "Compensator gain $K_c$ from magnitude condition", n: "After placing $z$ and $p$, find the desired closed-loop pole location, evaluate $|G_c G H|$ there, solve for $K_c$. Standard recipe." }
  ]);
  G("root-locus-design", [
    { term: "Phase boost", def: "Positive phase contribution added by a lead. Helps move dominant poles further into the LHP." },
    { term: "Steady-state booster", def: "Lag compensator's role — multiplies low-frequency loop gain without changing transient response." },
    { term: "Notch filter", def: "Compensator with complex zeros to suppress a specific frequency. Used to cancel resonances in flexible structures." }
  ]);

  // ============================================================
  // BODE PLOTS
  // ============================================================
  F("bode-plots", [
    { f: "Octave vs decade", n: "Octave = factor of 2. Decade = factor of 10. Slopes: $-20$ dB/dec = $-6$ dB/octave. Common in audio where octaves are natural." },
    { f: "Second-order resonance peak: $|G(j\\omega_n)| = 1/(2\\zeta)$", n: "For underdamped $G = \\omega_n^2/(s^2 + 2\\zeta\\omega_n s + \\omega_n^2)$, magnitude at $\\omega_n$ is exactly $1/(2\\zeta)$. Lightly damped systems show big resonance peaks." },
    { f: "Asymptotic phase rules", n: "Pole at $\\omega_p$: phase drops from 0 to $-90°$, with most of the drop between $0.1\\omega_p$ and $10\\omega_p$. At the corner itself: exactly $-45°$." },
    { f: "Bode magnitude-phase relation (Bode's gain-phase formula)", n: "For minimum-phase systems, phase is determined by the slope of the magnitude plot. Slope $-20$ dB/dec corresponds asymptotically to $-90°$ phase. The deep reason behind 'phase = derivative of magnitude.'" }
  ]);
  G("bode-plots", [
    { term: "Crossover frequency", def: "The frequency where magnitude crosses 0 dB (= unity gain). Gain crossover ($\\omega_{gc}$)." },
    { term: "Slope", def: "Rate of change of magnitude in dB per decade. Each pole adds $-20$ dB/dec above its corner; each zero adds $+20$." },
    { term: "Bode magnitude asymptote", def: "Piecewise-linear approximation to the magnitude curve, made from the corner-frequency rules. Within 3 dB of the actual curve, except near corners." },
    { term: "Bandwidth", def: "Frequency at which closed-loop magnitude drops to $-3$ dB below its DC value. Related to rise time: $t_r \\approx 0.35/$bandwidth." }
  ]);

  // ============================================================
  // NYQUIST
  // ============================================================
  F("nyquist", [
    { f: "Nyquist contour D", n: "Path enclosing all of RHP: up the $j\\omega$ axis from $-j\\infty$ to $+j\\infty$, closing via an infinite semicircle in the right half-plane. Detours around any RHP poles on the axis." },
    { f: "Mapping theorem", n: "If $f(s)$ has $Z$ zeros and $P$ poles inside a contour, the image of the contour under $f$ encircles 0 exactly $Z - P$ times (clockwise = positive)." },
    { f: "Apply to $f = 1 + GH$", n: "Zeros of $1 + GH$ are closed-loop poles. Poles of $1 + GH$ are the open-loop poles. So encirclements of zero by $1 + GH$ = encirclements of $-1$ by $GH$." },
    { f: "Use semi-log: plot magnitude+phase, deduce encirclements", n: "Often easier than directly drawing $G(j\\omega)$. Bode + tracking phase + counting $-180°$ crossings = effective Nyquist count." }
  ]);
  G("nyquist", [
    { term: "Stability margin", def: "How far the Nyquist curve passes from the critical point $-1$. The smaller the margin, the closer to instability." },
    { term: "Conditionally stable system", def: "Stable for a RANGE of gains but unstable for higher and lower. Nyquist curve has multiple crossings of negative real axis." },
    { term: "Type-1 system Nyquist", def: "Goes to infinity at $\\omega = 0$ (pole at origin). Closing the contour requires a small detour, contributing a half-encirclement." }
  ]);

  // ============================================================
  // GAIN / PHASE MARGINS
  // ============================================================
  F("gain-phase-margins", [
    { f: "Delay margin = PM/$\\omega_{gc}$", n: "Maximum pure time delay the loop can absorb before instability. WORKED: PM = 45° = 0.785 rad at $\\omega_{gc} = 10$ rad/s → delay margin $= 78$ ms. Useful for digital implementations." },
    { f: "Vector margin (modulus margin) = $1/|1+L|_{\\min}$", n: "Closest distance from Nyquist curve to $-1$. More robust measure than GM/PM separately — captures both. Typical good design: vector margin ≥ 0.5." },
    { f: "Stability margin from sensitivity peak", n: "$|S|_{\\text{max}} = M_s$. Smaller $M_s$ = larger margin. Industry target: $M_s \\leq 2$ (i.e., 6 dB). Captures combined gain-phase robustness." },
    { f: "Margin vs settling time trade-off", n: "Pushing PM up adds damping (lowers overshoot) but slows rise time. There's an optimum around PM ≈ 60°-65° for a 'fast but well-damped' design." }
  ]);
  G("gain-phase-margins", [
    { term: "Delay margin", def: "Maximum pure delay before instability, in seconds. Useful when implementing in software where computation time adds delay." },
    { term: "Vector margin", def: "Minimum distance from Nyquist plot to $-1$. Single number capturing both GM and PM." },
    { term: "Robust stability", def: "Maintaining stability despite plant uncertainty. Quantified by sensitivity peak, vector margin, or $\\mu$-analysis." },
    { term: "Modulus margin", def: "Another name for vector margin." }
  ]);

  // ============================================================
  // LEAD-LAG
  // ============================================================
  F("lead-lag", [
    { f: "Lead transfer $G_c(s) = K_c \\dfrac{1 + s/z}{1 + s/p}$", n: "Time-constant form. $z < p$. Phase: starts at 0°, rises to max around $\\sqrt{zp}$, returns to 0°. Magnitude rises by factor $p/z$." },
    { f: "Lag transfer $G_c(s) = K_c\\dfrac{1 + s/z}{1 + s/p}$", n: "Same form but $z > p$. Phase: starts 0°, dips negative, returns to 0°. Magnitude DROPS by factor $z/p$ from DC to high freq — but DC gain itself is multiplied by $K_c$." },
    { f: "Lead-lag combined", n: "Cascade of a lead and a lag, well separated in frequency. Lag at low frequencies fixes $e_{ss}$; lead at crossover fixes margins. Best of both at cost of more parameters." },
    { f: "PID = lag at low frequency + lead at high frequency", n: "PI part has pole at 0 and zero at $K_i/K_p$ (lag-like). D part is a lead. PID is a structured lead-lag with specific parameter relationships." }
  ]);
  G("lead-lag", [
    { term: "Lead", def: "Compensator with positive phase contribution in a frequency band. Phase boost for stability margin." },
    { term: "Lag", def: "Compensator with negative phase but high DC gain. Reduces steady-state error." },
    { term: "Lead-lag", def: "Combined compensator. Independent lead and lag sections targeting different frequency bands." },
    { term: "Crossover frequency", def: "Where loop magnitude hits unity. Lead compensators target this region for phase boost." }
  ]);

  // ============================================================
  // PID
  // ============================================================
  F("pid-control", [
    { f: "Cohen-Coon tuning rules", n: "Alternative to Z-N. Based on step-response identification of process gain $K$, time constant $\\tau$, dead time $\\theta$. Formulas: $K_p = (1.35/K)(\\tau/\\theta)(1 + 0.18\\theta/\\tau)$, etc. Often better for processes with significant dead time." },
    { f: "IMC tuning", n: "Internal Model Control: design closed loop to behave like a first-order filter with chosen time constant $\\lambda$. Translates to PID gains. Single tuning knob $\\lambda$ trades aggressiveness vs robustness." },
    { f: "Anti-windup via back-calculation", n: "When actuator saturates, feed the saturation gap back to the integrator with gain $1/T_t$ to bleed off integrator state. Prevents 'windup' = unbounded integral accumulation during saturation." },
    { f: "Derivative on measurement only", n: "Implement D as $-K_d \\dot y$ instead of $K_d \\dot e$ to avoid kick when set point changes. Industry standard practice." }
  ]);
  G("pid-control", [
    { term: "Integral windup", def: "Integrator keeps accumulating during saturation, then takes a long time to bleed off when error reverses. Causes overshoot or oscillation." },
    { term: "Setpoint weighting", def: "Different gains on the reference vs the measurement, to decouple setpoint tracking from disturbance rejection. Modern PID feature." },
    { term: "Dead time", def: "Pure delay between input change and output response. Hard for PID — needs Smith predictor or model-based methods to handle well." },
    { term: "Filter pole", def: "Realizability pole added to derivative term. Without it, D term is non-causal and noise-amplifying." }
  ]);
  M("pid-control", [
    { wrong: "More integral action always reduces steady-state error.", right: "Adding integral lowers error to zero (for step), but too much I causes oscillation and overshoot. The amount, not the presence, must be tuned." }
  ]);

  // ============================================================
  // STATE-SPACE DESIGN
  // ============================================================
  F("state-space-design", [
    { f: "Linear Quadratic Regulator: minimize $\\int(\\mathbf x^T Q \\mathbf x + \\mathbf u^T R \\mathbf u)dt$", n: "Standard optimal control. Optimal $K = R^{-1}B^T P$, where $P$ solves the algebraic Riccati equation $A^T P + PA - PBR^{-1}B^T P + Q = 0$. Tuning is through $Q$ (state penalty) and $R$ (control penalty)." },
    { f: "Riccati equation $A^T P + PA - PBR^{-1}B^T P + Q = 0$", n: "Matrix equation for optimal control gain. Solve numerically. Stable solution exists iff $(A, B)$ stabilizable and $(A, Q^{1/2})$ detectable." },
    { f: "Reference tracking via feedforward", n: "Pure state feedback regulates to origin. To track $r$, add $u = -K\\mathbf x + K_r r$ where $K_r$ is chosen so the closed-loop DC gain equals 1." },
    { f: "Integral action via augmented state", n: "Add a state $\\dot x_I = r - y$ (integral of tracking error) to the system. Design feedback for the augmented system. Closed loop now has integral action — zero steady-state error to step references." }
  ]);
  G("state-space-design", [
    { term: "Stabilizable", def: "Weaker than controllable — only the unstable modes need to be controllable. Sufficient for pole placement of just the unstable poles." },
    { term: "LQR", def: "Linear-Quadratic Regulator. Optimal pole placement minimizing weighted sum of state and control magnitudes." },
    { term: "Riccati equation", def: "Matrix equation defining the LQR optimal feedback gain. Quadratic in $P$." },
    { term: "Linear-Quadratic-Gaussian (LQG)", def: "LQR + Kalman filter. Optimal control under Gaussian process and measurement noise." }
  ]);

  // ============================================================
  // OBSERVERS
  // ============================================================
  F("state-observers", [
    { f: "Kalman filter steady-state: $L = PC^T R^{-1}$", n: "Optimal observer gain under Gaussian noise. $P$ solves a Riccati equation (the dual of LQR's). $R$ is measurement noise covariance; smaller $R$ → bigger $L$ → trust the measurement more." },
    { f: "Innovation $\\mathbf{i} = \\mathbf y - C\\hat{\\mathbf x}$", n: "Difference between measurement and prediction. In a well-tuned Kalman filter, the innovation sequence is white noise — no remaining structure to extract." },
    { f: "Estimator-controller cascade transfer function", n: "Combined controller is a strictly proper rational function in $s$. Has the same DEGREE as plant (or higher) — observer adds dimensions but separation principle keeps closed-loop dynamics tractable." },
    { f: "Reduced-order observer (Luenberger)", n: "If $C$ has full row rank, we know some states directly from $\\mathbf y$. Only need to estimate the rest. Reduces observer order from $n$ to $n - p$ (where $p$ = number of outputs)." }
  ]);
  G("state-observers", [
    { term: "Innovation", def: "Output residual $y - C\\hat x$. Drives the observer's correction term." },
    { term: "Kalman filter", def: "Optimal observer for linear Gaussian systems. Continuously updates state estimate using measurements." },
    { term: "Extended Kalman filter", def: "Linearization-based extension of KF to nonlinear systems. Used everywhere: GPS, navigation, tracking." },
    { term: "Separation principle", def: "Controller and observer can be designed independently. Combined closed-loop poles are union of each design's poles." }
  ]);

  // ============================================================
  // DIGITAL CONTROL
  // ============================================================
  F("digital-control", [
    { f: "Difference equation $y[k] = -a_1 y[k-1] - a_2 y[k-2] - \\ldots + b_0 u[k] + b_1 u[k-1] + \\ldots$", n: "Discrete-time recursion. Computed at each sample by the microcontroller. Direct implementation of $H(z) = (b_0 + b_1 z^{-1} + \\ldots)/(1 + a_1 z^{-1} + \\ldots)$." },
    { f: "Final-value theorem (discrete): $f(\\infty) = \\lim_{z\\to 1}(z-1)F(z)/z$", n: "Apply only if $(z-1)F(z)$ has all poles inside unit circle. Used for discrete steady-state error analysis." },
    { f: "Aliasing rule: $\\omega_{\\text{aliased}} = \\omega - n\\omega_s$", n: "Frequencies above Nyquist fold back into baseband. Anti-alias filter (analog) before ADC is mandatory in real systems." },
    { f: "Pole mapping $z = e^{sT}$ visualizations", n: "LHP $\\sigma < 0$ → $|z| < 1$ (inside unit circle). $j\\omega$ axis → unit circle. RHP → outside. Lines of constant damping in $s$-plane map to logarithmic spirals in $z$-plane." }
  ]);
  G("digital-control", [
    { term: "Sample-and-hold", def: "Discretization model: input held constant over each sampling interval. The hold dynamics are captured by ZOH transfer function $(1 - e^{-sT})/s$." },
    { term: "Nyquist rate", def: "Twice the highest frequency in the signal. Below this, aliasing destroys reconstruction." },
    { term: "Quantization noise", def: "Error from converting analog to a finite number of digital levels. Modeled as uniform noise with variance $\\Delta^2/12$ where $\\Delta$ is the LSB size." },
    { term: "Tustin (bilinear) transform", def: "$s \\to (2/T)(z-1)/(z+1)$. Maps LHP exactly to unit disk. Standard way to digitize a continuous design." },
    { term: "Pole-zero matched equivalent", def: "Alternative discretization: replace continuous pole/zero at $-\\alpha$ with discrete pole/zero at $e^{-\\alpha T}$. Preserves DC gain and pole/zero locations directly." }
  ]);
})();
