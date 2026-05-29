// Deep explanations for control topics: ELI5 callouts under each worked
// example, and per-step "Why?" callouts that explain not just WHAT each
// algebraic move is but WHY it's the right move.
//
// Indexed by topic id, then example index, then (for STEP_WHYS) step index.

(function () {
  window.EXPLAIN = window.EXPLAIN || {};
  window.STEP_WHYS = window.STEP_WHYS || {};

  // ====== EXPLAIN (ELI5 per worked example) ======
  Object.assign(window.EXPLAIN, {

    "intro-control": [
      "Two machines: one runs blind, one watches itself. The toaster sets a timer and walks away. The cruise control measures speed and adjusts. Everything else in this course is just elaborating on this difference.",
      "Every closed-loop system has the same five pieces — reference, error, controller, plant, sensor. Memorize this drawing once. Whether it's a thermostat, autopilot, robot arm, or chemical reactor, the picture is identical; only the boxes change.",
      "Three things a control engineer worries about: <strong>stability</strong> (it doesn't blow up), <strong>speed</strong> (it gets there quickly), <strong>accuracy</strong> (it gets there exactly). All design tradeoffs sit between these three."
    ],

    "laplace-transforms-control": [
      "The Laplace transform converts a function of time into a function of $s$. The reason we care: differentiation in time becomes multiplication by $s$, so differential equations become algebra. The step input $A$ becomes $A/s$ in the s-domain — that's the most-used Laplace pair in control.",
      "This is THE reason Laplace exists. A first-order ODE that would take three lines by integrating factor takes one line: transform, solve algebraically, partial-fraction, invert. Memorize the steps; they're identical for every ODE you'll meet.",
      "Final-value theorem is a shortcut: 'where does $y(t)$ end up?' without computing the full inverse transform. Just plug $s = 0$ into $sY(s)$. The catch — must verify the limit exists (all poles of $sY(s)$ in LHP)."
    ],

    "transfer-functions": [
      "Take an ODE, sprinkle Laplace on it, do algebra, get $G(s) = Y/U$. That single ratio packages all the dynamics. Once you have $G(s)$, you can compute step response, frequency response, stability — everything — by working with this one object.",
      "Poles tell you the natural modes — the exponentials and oscillations the system 'wants' to produce. Zeros tell you which input shapes it kills. Reading $G(s)$ at a glance is the most important visual skill in this course.",
      "DC gain is the steady-state amplification: plug in $s = 0$ and you get the ratio of steady output to a unit-step input. Quick check on any new transfer function."
    ],

    "electrical-modeling-control": [
      "RC low-pass: high frequencies are shorted by the capacitor (low impedance), low frequencies are blocked from going around (high impedance), so the output sees only low frequencies. The math just confirms this physical intuition.",
      "Series RLC has TWO energy stores (capacitor's electric field, inductor's magnetic field). Two stores means second-order — capable of oscillation. Damping comes from the resistor, which burns energy.",
      "Op-amps in negative feedback obey two rules: input voltages are equal (virtual short), no current flows into the inputs (high impedance). With those two rules alone you can derive every basic amplifier topology."
    ],

    "mechanical-modeling-control": [
      "Newton's second law plus a damper plus a spring is the universal 2nd-order mechanical system. Almost everything you'll see — car suspensions, robot links, MEMS oscillators — fits this template.",
      "Rotational version is mathematically identical. Replace mass with moment of inertia, force with torque, position with angle. The equations look the same — that's why we use the same diagrams.",
      "When two masses are coupled by springs, you get TWO 2nd-order equations and a 4th-order system. You'll see crossed coupling terms — that's the signature of a multi-body system."
    ],

    "state-space": [
      "Take an $n$-th order ODE and rewrite it as $n$ first-order ODEs by picking states. The matrix form $\\dot{\\mathbf x} = A\\mathbf x + B u$ packages all dynamics into linear algebra. Computers love this — every modern control tool runs in state-space.",
      "Going FROM state space back to a transfer function uses one formula: $G(s) = C(sI - A)^{-1}B + D$. Just matrix arithmetic. Useful for checking your model.",
      "The eigenvalues of the $A$ matrix ARE the poles of $G(s)$. Same information, two representations. Eigenvalues tell you stability and natural modes directly."
    ],

    "first-order-response": [
      "Picture pouring hot water into a cold mug. Temperature climbs fast at first, then slower as it approaches equilibrium. That curve $1 - e^{-t/\\tau}$ IS the universal first-order response. The number $\\tau$ — time constant — is the only parameter that matters.",
      "After one time constant: 63% of the way there. After three: 95%. After four: 98%. After five: basically done. These are the rules of thumb every engineer carries in their head.",
      "Rise time (10% to 90%) is $2.2\\tau$ for first-order. So if your scope shows a 10 ms rise, the system's $\\tau \\approx 4.5$ ms. Used constantly to identify systems experimentally."
    ],

    "second-order-response": [
      "Two energy stores → oscillation possible. $\\omega_n$ controls HOW FAST it oscillates, $\\zeta$ controls HOW DAMPED. Together they describe all 2nd-order behavior. Memorize the form $s^2 + 2\\zeta\\omega_n s + \\omega_n^2$.",
      "% overshoot is a function of $\\zeta$ ONLY. Doesn't depend on $\\omega_n$. $\\zeta = 0.4$ → 25% overshoot. $\\zeta = 0.7$ → 5%. $\\zeta = 1$ → 0%. Pick your damping from the spec.",
      "Peak time $\\pi/\\omega_d$ and settling time $4/(\\zeta\\omega_n)$. The first depends on damped frequency; the second on the real part of the pole. Two clean formulas, two important specs."
    ],

    "block-diagrams": [
      "Three rules collapse any block diagram: series (multiply), parallel (add), feedback ($G/(1+GH)$). Most textbook problems reduce in three lines with these.",
      "Parallel paths add. If you have a PID controller drawn as P + I + D blocks all summing, the combined transfer function is just the sum.",
      "Negative feedback is the workhorse. The trick: if you make $|GH|$ huge, $T \\to 1/H$. The plant variations disappear into the feedback loop — that's why feedback is so powerful."
    ],

    "signal-flow-mason": [
      "Mason's rule is a 'one-shot' formula: identify forward paths, identify loops, plug into one equation. Saves you from iteratively reducing a block diagram.",
      "Non-touching loops are subtle: they share no node. A product of non-touching loop gains shows up in the determinant as a POSITIVE term. Pairs subtract, triples add, etc.",
      "If your forward path touches all loops, the cofactor is just 1. Most simple problems work out this way."
    ],

    "routh-hurwitz": [
      "Stability without factoring. Lay coefficients in a table, cross-multiply to fill in rows, count sign changes in the first column. Zero sign changes = stable. Memorize the algorithm; it's purely mechanical.",
      "Find the range of a tunable gain $K$ for which all first-column entries are positive. That's your stable design range — invaluable when sizing controllers.",
      "Row of zeros is a special case: poles on the $j\\omega$ axis. The auxiliary polynomial built from the row above tells you exactly which frequencies."
    ],

    "steady-state-errors": [
      "System type = number of integrators (poles at $s=0$) in the open loop. Each integrator lets you track 'one more derivative' of the input perfectly: type-0 tracks constants with offset; type-1 tracks ramps with offset (and constants exactly); type-2 tracks parabolas with offset.",
      "Type-1 to a ramp: error is $1/K_v$. Higher gain → smaller error but worse damping. Always a trade-off.",
      "Type-2 to a parabolic ($t^2/2$) input: error is $1/K_a$. Used for tracking accelerating targets — missile guidance, satellite pointing."
    ],

    "root-locus": [
      "Closed-loop poles MOVE as the gain $K$ varies. Root locus is just a plot of where they go. A few rules sketch the picture: branches start at open-loop poles, end at zeros (or infinity), real-axis segments to the left of odd counts of poles+zeros.",
      "When branches cross into the right half-plane, you've found the gain at which the system goes unstable. Use Routh to find that exact $K$.",
      "Breakaway points are where two real-axis branches meet and head into complex plane. Solve $dK/ds = 0$ on the locus."
    ],

    "root-locus-design": [
      "Pure gain isn't enough for hard specs. Add a compensator zero — that pulls the root locus left (faster, more damped). Add a pole — it pushes the locus right (worse for stability).",
      "Lead compensator: zero closer to origin than pole. Provides phase boost. Like a PD with a realizable high-frequency pole.",
      "Lag compensator: pole closer to origin than zero. Provides extra low-frequency gain — better steady-state error — without changing transient much."
    ],

    "bode-plots": [
      "Bode plots magnitude in dB and phase in degrees, both vs $\\log\\omega$. The trick: multiplications become additions on the log scale, so you sketch each pole and zero separately and add up the contributions.",
      "Decibels: a factor of 10 in magnitude is 20 dB. So $|G| = 100$ is 40 dB; $|G| = 0.01$ is $-40$ dB. Convert ratios to dB by $20\\log_{10}$.",
      "Slope rules: each pole adds $-20$ dB/dec above its corner; each zero adds $+20$. So if there are 2 poles and 1 zero all active at high $\\omega$, slope is $-20$ dB/dec."
    ],

    "nyquist": [
      "Nyquist takes the open-loop $G(s)H(s)$, evaluates it on the entire $j\\omega$ axis (and closing semicircle), plots the result in the complex plane, and asks: how many times did the curve encircle the point $-1$? That tells you stability — including when Bode would mislead you.",
      "Critical case: tune $K$ so the Nyquist plot just touches $-1$ at the phase crossover. Above that gain → unstable.",
      "Encirclement formula: $Z = N + P$. $Z$ = closed-loop RHP poles you'll get. $N$ = clockwise encirclements of $-1$. $P$ = open-loop RHP poles. Sum them — if zero, stable closed loop."
    ],

    "gain-phase-margins": [
      "Margins are your safety factor. Phase margin says: 'how much extra phase lag can my loop absorb before going unstable?' Gain margin says: 'how much extra gain?' Real plants drift; without margin, the lab demo blows up in the field.",
      "Rule of thumb: phase margin (in degrees) ≈ damping ratio × 100. So PM = 45° → ζ ≈ 0.45 → about 20% overshoot. Quick mental check.",
      "Negative phase margin = unstable. Period. Don't ship that controller."
    ],

    "lead-lag": [
      "Lead = phase boost. The maximum boost depends only on the pole/zero ratio $\\alpha$. Place the boost right at the gain crossover frequency to maximize phase margin gain.",
      "Pick $\\alpha$ from the boost you need. 30° → α ≈ 0.33. 45° → α ≈ 0.17. 60° → α ≈ 0.07. Bigger pole/zero ratio = more boost but also more high-frequency amplification.",
      "Lag: place pole near origin, zero further out. DC gain boost is exactly $z/p$. Crossover should be at a frequency where the lag's phase contribution is small."
    ],

    "pid-control": [
      "Three terms, three knobs. $K_p$ does the heavy lifting NOW. $K_i$ cleans up the residual error over TIME. $K_d$ damps the response by predicting the FUTURE. Tune them one at a time and watch the effect.",
      "Ziegler-Nichols ultimate-gain method: crank up $K_p$ in P-only until the system just barely oscillates, note that gain and period, then plug into formulas. Aggressive — usually back off by 30-50%.",
      "PID in transfer-function form: two zeros plus one pole at origin. The integrator (pole at origin) makes the closed loop type-1 — kills steady-state error to step inputs."
    ],

    "state-space-design": [
      "If the system is controllable, you can put the closed-loop poles ANYWHERE you want by choosing the right $K$. This is 'pole placement' — no graphical sketching, no iteration.",
      "Ackermann's formula gives $K$ in closed form. In practice: choose desired poles, compute the matrices, multiply. MATLAB does this in one line: K = acker(A, B, poles).",
      "Observability is the dual concept: can we reconstruct the state from outputs alone? Same algorithm, with $(A^T, C^T)$ instead of $(A, B)$."
    ],

    "state-observers": [
      "Real plants don't give you the full state — you measure one or two outputs. An observer is a software model that estimates the missing states. Run the plant model in parallel; correct it with the measured output.",
      "Observer design: pick the gain $L$ so that $A - LC$ has fast, stable eigenvalues. Then the estimation error decays away — $\\hat x \\to x$.",
      "Separation principle: design the observer and the state-feedback controller independently. Their poles don't interfere. This is the magic that makes modern control practical."
    ],

    "digital-control": [
      "Microprocessors sample. Z-transform plays the role of Laplace for sampled signals. The stability boundary becomes the unit circle: poles inside = stable, outside = unstable.",
      "Mapping from continuous to discrete: $z = e^{sT}$. A continuous pole at $s = -2$ with sampling $T = 0.1$ s becomes $z = e^{-0.2} \\approx 0.82$ — inside the unit circle. Stable, as it should be.",
      "Most discrete designs come from discretizing a continuous design. Tustin (bilinear) is the standard: it maps the LHP exactly to the unit disk, preserving stability."
    ]
  });

  // ====== STEP_WHYS (per-step "Why?" callouts) ======
  Object.assign(window.STEP_WHYS, {

    "intro-control": [
      // Example 1: Open-loop vs closed-loop
      [
        "Without measurement, the toaster has no idea whether the bread is dark or pale. The recipe (time on the dial) might be wrong because the bread was thicker, colder, or the element worn down. Open loop = no measurement of what's actually happening.",
        "Closed loop has THREE essential pieces: a sensor (speedometer), a controller (the car's computer), and an actuator (throttle). Knock out any one — say, the speedometer fails — and you're back to open loop. The system needs ALL three to close.",
        "Disturbance rejection is 'free' under feedback: any change in output that doesn't match the reference automatically becomes an error, which automatically drives a correcting action. The car doesn't need to know there's a hill; it just sees the speed dropping and pushes the throttle."
      ],
      // Example 2: Identify the blocks
      [
        "We call it 'reference' because everything else in the loop is measured against this number. Set it to 22 °C and the system will work to bring you there. Reset it to 18 °C and the same loop now tracks the new value. Reference is what the user controls.",
        "The arrow drawn from the sensor back to the summing junction is what makes this <em>feedback</em>. Without that arrow, the loop is open. The arrow direction matters too — going forward is from input to output; going back closes the loop.",
        "Subtraction (not addition) at the summing junction is no accident. If the room is colder than wanted, $R - C > 0$, so the error is positive — and a positive error tells the controller to push the furnace harder. Negative error = too hot = back off. The sign aligns with the corrective action.",
        "The controller is the only block you design. Plant and sensor are given to you. So 'controller design' is the entire engineering choice. Bang-bang (on/off), P-only, PI, PID, modern — each has trade-offs in cost, performance, robustness.",
        "Plant dynamics are why we can't just crank up the gain infinitely. Thermal mass means the room takes minutes to respond to the furnace; motor inertia means a robot arm doesn't accelerate instantly. The controller must respect this — too much gain causes overshoot or oscillation."
      ],
      // Example 3: Why we want fast, accurate, stable systems
      [
        "Stability comes first because without it nothing else matters. An autopilot that's slightly inaccurate is annoying. An autopilot that's unstable kills people.",
        "Speed is measured by rise time and settling time because these are objective, computable, and matter to the user. 'Get to the set point in under 100 ms' is a spec engineers can verify.",
        "Steady-state error is the eternal gap. Even a perfectly damped, fast response is worthless if the final value is wrong. A CNC mill 0.3 mm short on every cut produces scrap."
      ]
    ],

    "laplace-transforms-control": [
      // Example 1: Transform of a step
      [
        "The Laplace integral $\\int_0^\\infty f(t)e^{-st}dt$ was designed so that differentiation in time becomes multiplication by $s$ in the transformed domain. The $e^{-st}$ factor is what makes this work: it converges nicely for $\\text{Re}(s) > 0$ and turns the integral of $\\dot f$ into $sF(s) - f(0)$ via integration by parts.",
        "We need $\\text{Re}(s) > 0$ for the integral to converge. As $t \\to \\infty$, $e^{-st} \\to 0$ only if the real part of $s$ is positive. For functions that grow like $e^{at}$, the convergence region shifts to $\\text{Re}(s) > a$."
      ],
      // Example 2: Solve ODE via Laplace
      [
        "Why $sY - y(0)$ from $\\dot y$: integration by parts gives $\\int_0^\\infty \\dot y e^{-st}dt = [y e^{-st}]_0^\\infty + s\\int_0^\\infty y e^{-st}dt = -y(0) + sY(s)$. The boundary value carries the initial condition into the algebra.",
        "Why this is the whole point of Laplace: we've gone from a differential equation in $t$ to an algebraic equation in $s$. Solving algebraic equations is straightforward — no integrating factors, no characteristic roots in your head.",
        "Cover-up method: to find $A$, multiply both sides by $s$ and set $s = 0$. The $A$ term survives because its denominator just got cancelled; the $B$ term vanishes because its denominator $(s+3)$ stays. Setting $s = 0$ in the right side gives $A$ directly.",
        "Inverse Laplace pieces: $1/s$ corresponds to a constant function (1). $1/(s+3)$ corresponds to $e^{-3t}$. Linearity lets us assemble: $2/s$ gives 2, $-2/(s+3)$ gives $-2e^{-3t}$. Sum: $2 - 2e^{-3t}$."
      ],
      // Example 3: Final-value theorem
      [
        "Why check stability first: if a pole of $sY(s)$ sits in the RHP or on the $j\\omega$ axis, then $y(t)$ doesn't actually settle — it grows or oscillates forever. FVT would still spit out a number, but it'd be meaningless. Always factor and verify LHP first.",
        "Why $\\lim_{s\\to 0} sY(s)$ equals $y(\\infty)$: the Laplace integral at $s = 0$ becomes $\\int_0^\\infty y(t)dt$. Multiplying by $s$ before taking the limit cancels the divergence and isolates the asymptotic constant. Cleanly extracted without an inverse transform."
      ]
    ],

    "transfer-functions": [
      // Example 1: ODE to G(s)
      [
        "Why zero initial conditions: by convention, transfer functions describe the input-output relationship assuming the system starts at rest. Initial conditions are handled separately. This makes $G(s)$ purely a property of the system, not of any specific test.",
        "Why this is exactly $G(s)$: we solved for $Y/U$ as a ratio of polynomials. Numerator is everything multiplying the input; denominator is the characteristic polynomial — same as the ODE's characteristic equation.",
        "Why factor: factoring the denominator gives the poles. Poles tell you the natural exponential modes the system contains. Two poles in LHP means two decaying exponentials in the response — stable."
      ],
      // Example 2: Identify poles and zeros
      [
        "Why one zero (not three): the numerator $10(s+1)$ is degree 1. Only one root. The coefficient 10 doesn't create roots; only the $(s+1)$ factor does.",
        "Why complex poles come in pairs: $s^2 + 2s + 5$ has discriminant $4 - 20 = -16 < 0$. Discriminant negative → complex roots. They must be conjugates because the polynomial has real coefficients."
      ],
      // Example 3: DC gain
      [
        "Why $1/s$ for a unit step: the Laplace of $u(t) = 1$ is $1/s$.",
        "Why FVT applies: poles of $sY = 10/(s^2+4s+5)$ are roots of $s^2+4s+5$ = $-2 \\pm j$ — both in LHP. Safe to apply. $G(0) = 10/5 = 2$, so steady-state output is 2."
      ]
    ],

    "electrical-modeling-control": [
      // Example 1: RC low-pass
      [
        "Why use impedances: we're using Laplace transforms, so $V = L\\,di/dt$ becomes $V(s) = Ls\\,I(s)$ — multiplying current by impedance $Ls$. Same for the capacitor: $i = C\\,dv/dt$ becomes $I(s) = Cs\\,V(s)$, so $V = I/(Cs)$, impedance $1/(Cs)$. KVL/KCL still work, but in s-domain.",
        "Why voltage divider works in s-domain: same circuit law as in DC, just with frequency-dependent impedances. $V_{\\text{out}}/V_{\\text{in}} = Z_2 / (Z_1 + Z_2)$ — applies to ANY two-impedance series with output across $Z_2$."
      ],
      // Example 2: Series RLC
      [
        "Why $V_C = I/(Cs)$: the capacitor's impedance is $1/(Cs)$, and Ohm's law (in s-domain) says $V = ZI$.",
        "Why a 2nd-order result: the circuit has TWO independent energy storage elements (capacitor + inductor). Each contributes one differential equation; together they give 2nd-order dynamics — and a denominator quadratic in $s$."
      ],
      // Example 3: Op-amp inverting
      [
        "Why virtual short: in negative feedback, the op-amp's huge open-loop gain drives the inverting input to match the non-inverting input. Here non-inverting is grounded, so the inverting is at virtual ground.",
        "Why KCL gives the result: current into the inverting node is zero (high input impedance), so what flows in through $Z_i$ must flow out through $Z_f$. Voltage across $Z_i$ is $V_i - 0 = V_i$; across $Z_f$ is $0 - V_o = -V_o$. Equate currents and you get $V_o/V_i = -Z_f/Z_i$."
      ]
    ],

    "mechanical-modeling-control": [
      // Example 1: Mass-spring-damper
      [
        "Why these three forces: applied force $f$ pushes the mass. Damper exerts $b\\dot x$ (proportional to velocity, opposite to motion). Spring exerts $kx$ (proportional to displacement, restoring). Newton: sum = $m\\ddot x$.",
        "Why Laplace turns this into algebra: each derivative becomes a power of $s$. $\\ddot x \\to s^2 X$, $\\dot x \\to sX$, $x \\to X$. All terms become polynomials in $s$."
      ],
      // Example 2: Rotational
      [
        "Why it has the same form: rotational Newton's 2nd law is $\\sum T = J\\alpha$. With viscous friction $D\\dot\\theta$ and torsional spring $K\\theta$, the structure is identical to translational case.",
        "Why same Laplace recipe applies: it's the same kind of ODE — linear, constant coefficients."
      ],
      // Example 3: Two masses
      [
        "Why two equations: there are two free bodies (mass 1 and mass 2), each obeying Newton's law independently. They're coupled through the spring connecting them.",
        "Why Cramer's rule: we have a 2×2 linear system in $X_1, X_2$. Cramer's rule solves any such system in closed form.",
        "Why 4th-order denominator: each mass contributes 2nd-order dynamics; the system has two of them coupled, giving 4th order in $s$."
      ]
    ],

    "state-space": [
      // Example 1: ODE to state space
      [
        "Why these state choices: any nth-order ODE needs n initial conditions. So we need n state variables. The natural choice — for output $y$ — is $y, \\dot y, \\ddot y, \\ldots$. This gives the system 'memory.'",
        "Why this form for $A$: row 1 says $\\dot x_1 = x_2$ — natural since $x_1 = y$, $x_2 = \\dot y$. Row 2 says $\\dot x_2 = -2x_1 - 3x_2 + u$ — that's the original ODE solved for $\\ddot y$. The structure is called <em>controllable canonical form</em>."
      ],
      // Example 2: State space to G(s)
      [
        "Why this formula: take Laplace of $\\dot{\\mathbf x} = A\\mathbf x + B u$ with $\\mathbf x(0) = 0$. Get $sX = AX + BU$, so $X = (sI - A)^{-1}BU$, and $Y = CX + DU = [C(sI-A)^{-1}B + D]U$.",
        "Why $\\det(sI - A)$ is the denominator: this is the characteristic polynomial of $A$. Its roots are the eigenvalues = poles of $G(s)$.",
        "Why dimension matters: for SISO ($u, y$ scalars), the result is a scalar transfer function. For MIMO, $G(s)$ is a matrix — each entry is the transfer from one input to one output."
      ],
      // Example 3: Eigenvalues = poles
      [
        "Why diagonal makes it easy: a diagonal $A$ has eigenvalues sitting right on the diagonal. No characteristic polynomial to solve.",
        "Why these are the modes: solution of $\\dot{\\mathbf x} = A\\mathbf x$ with diagonal $A$ is just $x_i(t) = x_i(0) e^{a_i t}$ for each eigenvalue $a_i$. Decoupled exponentials."
      ]
    ],

    "first-order-response": [
      // Example 1: Step response
      [
        "Why $G(s) \\cdot 1/s$: input is unit step, whose Laplace is $1/s$. Output Laplace is $G(s) U(s)$.",
        "Why these partial fractions: pole at $s = 0$ contributes $1/s$ (the constant), pole at $s = -5$ contributes $1/(s+5)$ (the exponential decay). Cover-up gives the coefficients.",
        "Why $y(t) = 1 - e^{-5t}$: $1/s$ inverse-transforms to 1, $-1/(s+5)$ to $-e^{-5t}$."
      ],
      // Example 2: Settling time
      [
        "Why $1 - e^{-at_s} = 0.98$: we want the response to be within 2% of final value 1. So $|1 - y(t_s)| = e^{-at_s} = 0.02$.",
        "Why $t_s = 4/a$: $\\ln(1/0.02) = 3.91$, rounded to 4 in practice. So $t_s \\approx 4\\tau$. Conservative engineering rule."
      ],
      // Example 3: Rise time
      [
        "Why these two equations: rise time is defined as the time to go from 10% to 90% of final value.",
        "Why $t_r \\approx 2.2\\tau$: $\\ln 9 \\approx 2.2$. Different from settling time because we're looking at how fast the curve climbs, not when it's done."
      ]
    ],

    "second-order-response": [
      // Example 1: Identify zeta, omega_n
      [
        "Why this form: the standard 2nd-order has the form $\\omega_n^2/(s^2 + 2\\zeta\\omega_n s + \\omega_n^2)$. Match coefficients with what we have.",
        "Why $\\omega_n = \\sqrt{36} = 6$: the constant term of the denominator is $\\omega_n^2$, so take the square root.",
        "Why $\\zeta = 4.8/(2 \\cdot 6)$: the $s$ coefficient is $2\\zeta\\omega_n$. We know $\\omega_n$, solve for $\\zeta$."
      ],
      // Example 2: Overshoot
      [
        "Why this formula: solve the 2nd-order step response, evaluate at peak time $T_p = \\pi/\\omega_d$. Algebra gives the clean exponential expression.",
        "Why depends only on zeta: the formula has no $\\omega_n$ — only $\\zeta$. Makes intuitive sense: $\\omega_n$ rescales time, but the SHAPE of the response is determined by damping."
      ],
      // Example 3: Peak/settling
      [
        "Why $\\omega_d$: the damped natural frequency. Real oscillation rate of the underdamped response — slightly slower than $\\omega_n$ because damping pulls the frequency down.",
        "Why $T_p = \\pi/\\omega_d$: peak occurs at the first maximum of the oscillation, which is half a period in.",
        "Why $T_s = 4/(\\zeta\\omega_n)$: the envelope of the oscillation is $e^{-\\zeta\\omega_n t}$. Same rule as first-order: 4 time constants for 2% settling. Here time constant is $1/(\\zeta\\omega_n)$."
      ]
    ],

    "block-diagrams": [
      // Example 1: Series
      [
        "Why multiply: cascaded blocks pass the signal through each in turn. Output of one is input to the next. So if $Y_1 = G_1 U$ and $Y_2 = G_2 Y_1$, then $Y_2 = G_1 G_2 U$. Note: order doesn't matter for linear blocks.",
        "Why we just multiply the polynomials: $2/(s+1) \\cdot 3/(s+2) = 6/[(s+1)(s+2)]$. Numerators multiply, denominators multiply."
      ],
      // Example 2: Parallel
      [
        "Why add: parallel paths share the same input. Each block produces an output; their outputs sum at the joining junction.",
        "Why common denominator: to add fractions you need a common denominator. $(s+1)(s+3)$ is the LCM here. Combine numerators."
      ],
      // Example 3: Negative feedback
      [
        "Why this formula: write $Y = G(U - HY)$. Solve for $Y/U$: $Y + GHY = GU \\Rightarrow Y(1+GH) = GU \\Rightarrow T = G/(1+GH)$.",
        "Why faster pole: open-loop pole was at $-2$. Closed-loop pole at $-12$. Feedback amplifies the system's natural responsiveness — closed-loop bandwidth higher than open-loop."
      ]
    ],

    "signal-flow-mason": [
      // Example 1: Single path
      [
        "Why $\\Delta = 1 - \\sum L_i$: that's the standard form. Sum loop gains, subtract from 1.",
        "Why $\\Delta_1 = 1$: loop $L_1$ touches the forward path (shares a node), so it's removed for the cofactor. With no loops left, $\\Delta_1 = 1$.",
        "Why this matches block-diagram answer: it's the same closed-loop formula, derived a different way."
      ],
      // Example 2: Non-touching loops
      [
        "Why $L_1 L_2$ in $\\Delta$: non-touching loops don't interact, so their product appears as a 'second-order' term in the determinant. Sign alternates: subtract single loops, add pairs, subtract triples...",
        "Why $\\Delta_1 = 1$: forward path touches both loops, so both are removed. Nothing left in the cofactor.",
        "Why this scales: with three non-touching loops, $\\Delta$ would include $-L_1L_2L_3$ as the 'triple' term."
      ],
      // Example 3: Cascade
      [
        "Why $\\Delta$ uses only loops: $\\Delta$ depends only on the loop topology of the graph, not on the forward paths.",
        "Why $\\Delta_1 = 1$ here too: the forward path passes through $G_2$, so it touches the single loop $L_1$ at the $G_2$ node. Loop is removed."
      ]
    ],

    "routh-hurwitz": [
      // Example 1: Build Routh array
      [
        "Why these rows: $s^4$ row gets even-indexed coefficients: 1, 3, 1. $s^3$ row gets odd-indexed: 3, 2, 0. Standard convention.",
        "Why this cross-multiplication: each new row entry is a 2×2 determinant divided by the leading entry of the row above. The rule comes from Routh's clever algebraic identity that makes sign changes correspond to RHP roots.",
        "Why continue: each subsequent row reduces the polynomial degree by one. Five rows total (for 4th order) — labeled $s^4, s^3, s^2, s^1, s^0$.",
        "Why $s^0$ is just the constant: $s^0$ row in our setup is the constant term of the original polynomial."
      ],
      // Example 2: Range of K
      [
        "Why first column matters: by Routh's theorem, number of sign changes there equals number of RHP roots.",
        "Why two conditions: both $(8-K)/3 > 0$ AND $1+K > 0$ must hold. Each condition gives an inequality on $K$. Intersect them."
      ],
      // Example 3: Row of zeros
      [
        "Why a row of zeros happens: indicates the original polynomial has a factor with symmetric roots — typically pure imaginary or symmetric about origin.",
        "Why auxiliary polynomial: it's built from the row JUST ABOVE the zero row. Differentiate it and put coefficients in the zero row to continue Routh.",
        "Why $j\\omega$-axis roots: solving the auxiliary directly gives those roots — frequency of oscillation at the stability boundary."
      ]
    ],

    "steady-state-errors": [
      // Example 1: Type-0, step
      [
        "Why $G(0)$ is the position constant: for step input on a type-0 system, $K_p = G(0)$. Just substitute $s = 0$ in the transfer function.",
        "Why $1/(1+K_p)$: derive from $E(s) = R(s)/(1 + G(s))$ with $R = 1/s$, apply FVT. Algebra gives this clean expression."
      ],
      // Example 2: Type-1, ramp
      [
        "Why $\\lim_{s\\to 0} sG(s)$: for a type-1 system (one pole at origin), this limit picks out the leading coefficient after cancelling the $s$.",
        "Why $1/K_v$: derive similarly to position case, but with ramp input $R = 1/s^2$."
      ],
      // Example 3: Type-2, parabolic
      [
        "Why $s^2 G(s)$: for type-2 (two poles at origin), need $s^2$ to cancel both integrators and get a finite limit.",
        "Why $1/K_a$: same derivation pattern; parabolic input has $R = 1/s^3$."
      ]
    ],

    "root-locus": [
      // Example 1: Basic rules
      [
        "Why 3 branches: open-loop has 3 poles. Each pole gives one branch. With no zeros, all 3 must go to infinity.",
        "Why odd count rule: at any test point on real axis, sum the phase contributions of all poles and zeros. Each LHP pole/zero to the LEFT contributes 0°; each to the RIGHT contributes 180°. For the locus condition (phase = ±180°), need odd count to the right.",
        "Why these asymptote angles: derived from the angle condition at large $s$. Three equally-spaced rays at $\\pm 60°, 180°$.",
        "Why this centroid: large-$s$ analysis gives the centroid formula directly. It's the 'center of mass' of poles minus zeros divided by their excess count."
      ],
      // Example 2: jω crossing
      [
        "Why characteristic equation: $1 + G(s)H(s) = 0$ is where closed-loop poles live. Multiply through to get the polynomial form.",
        "Why Routh: it tells us when the polynomial has $j\\omega$-axis roots — exactly when first-column entries become zero.",
        "Why these frequencies: from the row above the zero row of Routh, solve $6s^2 + 48 = 0$. $s^2 = -8$, $s = \\pm 2\\sqrt 2 j$."
      ],
      // Example 3: Breakaway
      [
        "Why $dK/ds = 0$: at a breakaway, two branches collide. That means the characteristic equation has a double root — equivalent to $dK/ds = 0$ on the locus.",
        "Why solve quadratic: derivative is degree-2 in $s$, so 2 candidate breakaway points.",
        "Why pick the one in [-2, 0]: the real-axis locus segment exists only between the poles 0 and $-2$. The other root is outside the locus."
      ]
    ],

    "root-locus-design": [
      // Example 1: Choose K
      [
        "Why match coefficients: standard 2nd-order form is $s^2 + 2\\zeta\\omega_n s + \\omega_n^2$. Compare with $s^2 + 4s + K$ — coefficient of $s$ gives $2\\zeta\\omega_n = 4$.",
        "Why $\\omega_n = 4$: from $2\\zeta\\omega_n = 4$ with $\\zeta = 0.5$.",
        "Why $K = 16$: $K = \\omega_n^2 = 16$."
      ],
      // Example 2: PD
      [
        "Why a zero pulls locus left: phase condition says locus exists where total angle from poles/zeros equals 180°. A zero subtracts angle, so a LHP zero acts as a 'pulling' magnet for the locus.",
        "Why cancellation: choose zero at $-1$ to cancel the plant's slow pole at $-1$. New open loop simplifies to $K/s$ — pure integrator."
      ],
      // Example 3: Lead
      [
        "Why lead pulls locus left: same reason as PD — but the realizable pole tempers the effect at high frequency.",
        "Why use for transient: phase boost at gain crossover increases damping → faster, less-overshooting response."
      ]
    ],

    "bode-plots": [
      // Example 1: Bode sketch
      [
        "Why flat below corner: at low $\\omega$, $|j\\omega| \\ll 10$, so $G(j\\omega) \\approx 10/10 = 1$. Magnitude is constant.",
        "Why corner at $\\omega = 10$: that's where $|j\\omega| = |10|$. Pole's contribution starts to dominate.",
        "Why $-20$ dB/dec: at high $\\omega$, $G(j\\omega) \\approx 10/(j\\omega) = 10/j\\omega$. Magnitude $10/\\omega$. Doubling $\\omega$ halves magnitude — that's $-6$ dB per octave or $-20$ dB per decade."
      ],
      // Example 2: dB
      [
        "Why $20\\log_{10}$: a doubling of voltage/current corresponds to a factor of 4 in power. Power dB is $10\\log$. For amplitude quantities we use $20\\log$ so that the same dB number corresponds to the same effect.",
        "Why this number: $\\log_{10} 5 \\approx 0.699$, times 20 = 14 (approx)."
      ],
      // Example 3: Slope contributions
      [
        "Why count each: every pole or zero contributes its standard slope above its corner. Add the contributions to get the overall slope.",
        "Why at high frequency: above ALL corners, all poles/zeros are active. So the high-frequency slope is the sum of every contribution.",
        "Why $-40$: $20$ (zero) $-40$ (two poles at origin) $-20$ (pole at 10) = $-40$."
      ]
    ],

    "nyquist": [
      // Example 1: G = 1/(s+1)
      [
        "Why map $j\\omega$: the Nyquist contour goes up the imaginary axis. Plug $s = j\\omega$ for $\\omega$ from $-\\infty$ to $\\infty$.",
        "Why a semicircle: $1/(1 + j\\omega)$ traces a perfect circle as $\\omega$ varies. Starts at 1 (DC), spirals to 0 (high freq).",
        "Why $Z = 0$: no encirclements of $-1$ ($N = 0$) and stable open loop ($P = 0$) give $Z = 0$ closed-loop RHP poles. Stable."
      ],
      // Example 2: Marginal
      [
        "Why phase = $-180°$ matters: that's where the Nyquist plot crosses the negative real axis. If it hits exactly $-1$, the closed loop has a $j\\omega$-axis pole.",
        "Why solve for $\\omega$: numerical solution of the phase equation — but it has clean structure. Approximation $\\omega \\approx \\sqrt 2$ works.",
        "Why $K = 6$: magnitude at $\\omega = \\sqrt 2$ is $K/(6)$ (after computing the products). Set magnitude $= 1$ for the boundary."
      ],
      // Example 3: Counting
      [
        "Why $P = 1$ (open-loop has 1 RHP pole): this is given. Examples: inverted pendulum, magnetic levitation.",
        "Why counterclockwise positive in $Z = P - N$: convention is that counterclockwise encirclements cancel out unstable open-loop poles."
      ]
    ],

    "gain-phase-margins": [
      // Example 1: Compute from Bode
      [
        "Why gain crossover for PM: PM measures phase relative to $-180°$ at the frequency where the loop has unity gain. Beyond this frequency, the loop doesn't amplify, so phase is less critical.",
        "Why $180° + \\angle G$: total phase reaches $-180°$ at instability. PM = how far we are from that.",
        "Why $-(-10) = 10$ dB: GM is the FACTOR by which we can multiply gain before instability. In dB, that's $0 - |G|_{dB}$ at the phase crossover. Subtract to get GM positive."
      ],
      // Example 2: PM-zeta rule
      [
        "Why $\\zeta = $ PM/100: comes from a Taylor expansion of the exact relationship for 2nd-order systems. Good up to PM ≈ 60°."
      ],
      // Example 3: Negative PM
      [
        "Why PM = $-20°$: phase at gain crossover is $-200°$, which is 20° past the $-180°$ instability boundary. Negative PM means unstable closed loop."
      ]
    ],

    "lead-lag": [
      // Example 1: Max phase
      [
        "Why this formula: derivative of phase with respect to $\\omega$ set to zero. Gives the closed-form expression.",
        "Why $\\omega_m = \\sqrt{zp}$: same derivation gives this geometric mean — neat answer."
      ],
      // Example 2: 45° lead
      [
        "Why this algebra: solve the formula for $\\alpha$ given $\\phi_{\\max} = 45°$."
      ],
      // Example 3: Lag design
      [
        "Why $z/p$ = DC boost: at DC ($\\omega = 0$), $G_c = z/p$ (from the form $G_c = (s+z)/(s+p)$). With our form, DC gain is exactly $z/p$.",
        "Why place pole low: so the lag's phase contribution at the crossover frequency is small (just 5° or so), preserving phase margin."
      ]
    ],

    "pid-control": [
      // Example 1: Effect of each
      [
        "Why P is fast: proportional action responds immediately to error. But it can't eliminate steady-state error in type-0 plants, because at steady state error is constant.",
        "Why I removes error: an integrator accumulates error over time, so any nonzero error eventually drives the controller output up arbitrarily. The system has no choice but to drive error to zero.",
        "Why D adds damping: derivative responds to the rate of change of error. If error is growing, D pushes back hard before it gets large. Effectively a phase-lead."
      ],
      // Example 2: Z-N
      [
        "Why this method: empirical. Find the gain at which the system just barely oscillates (sustained oscillation), measure the period, plug into formulas. Aggressive by design.",
        "Why slightly different formulas for PI vs PID: PI is more conservative; D allows pushing harder.",
        "Why aggressive: Z-N targets ~25% overshoot — usually need to back off in practice."
      ],
      // Example 3: TF
      [
        "Why two zeros: numerator is degree 2 in $s$. Two zeros.",
        "Why one pole: denominator is $s$ — just one pole at origin (the integrator)."
      ]
    ],

    "state-space-design": [
      // Example 1: Controllability
      [
        "Why $\\mathcal{C} = [B \\ AB]$: for SISO 2-state, the controllability matrix has 2 columns. General formula: $[B \\ AB \\ A^2 B \\ \\ldots \\ A^{n-1}B]$.",
        "Why full rank means controllable: any state can be reached via some input. The columns span $\\mathbb{R}^n$."
      ],
      // Example 2: Pole placement
      [
        "Why this char poly: we want closed-loop poles at $-3, -4$. Their polynomial is $(s+3)(s+4) = s^2 + 7s + 12$.",
        "Why $A - BK$ has this form: $K = (k_1\\ k_2)$, $BK = \\begin{pmatrix}0 \\\\ 1\\end{pmatrix}(k_1\\ k_2) = \\begin{pmatrix}0&0\\\\k_1&k_2\\end{pmatrix}$. So $A - BK$ as shown.",
        "Why coefficient matching: characteristic polynomial of $A - BK$ has standard form. Match $s$ and $s^0$ coefficients to desired polynomial."
      ],
      // Example 3: Observability
      [
        "Why $\\mathcal{O}$ uses $A$ and $C$: observability is the dual of controllability. Dual matrices: $A^T$ and $C^T$ instead of $A$ and $B$.",
        "Why rank check: if $\\mathcal{O}$ has full rank, we can reconstruct the state from outputs alone."
      ]
    ],

    "state-observers": [
      // Example 1: Observer dynamics
      [
        "Why $A\\hat x + Bu$: that's our model — what we THINK the system is doing. Run it in software.",
        "Why $L(y - C\\hat x)$ correction: $y - C\\hat x$ is the 'innovation' — gap between measured output and predicted output. Multiply by $L$ to correct the estimate.",
        "Why error dynamics work out cleanly: subtract observer equation from plant equation. Plant terms involving $u$ cancel. What's left is $(A - LC)e$. Beautiful linear structure."
      ],
      // Example 2: Design L
      [
        "Why duality: pole placement for $(A^T, C^T)$ gives a matrix $K$. The observer gain $L$ is exactly $K^T$. Same algorithm, just transposed.",
        "Why this char poly: want observer poles at $-10, -10$. Repeated root, so polynomial is $(s + 10)^2$.",
        "Why solve for $\\ell_1, \\ell_2$: match coefficients term-by-term. Two unknowns, two equations."
      ],
      // Example 3: Separation
      [
        "Why combined system is triangular: the controller equation depends on $\\hat x = x - e$. The error equation doesn't depend on $x$ — only on $e$. Block triangular.",
        "Why eigenvalues separate: a block-triangular matrix's eigenvalues are the union of its diagonal blocks' eigenvalues. So closed-loop poles split cleanly."
      ]
    ],

    "digital-control": [
      // Example 1: Z-transform
      [
        "Why this definition: z-transform is the discrete analog of Laplace. Each sample $u[k]$ gets multiplied by $z^{-k}$ (representing $k$ time steps of delay).",
        "Why $1/(1 - z^{-1})$: it's the geometric series formula. Multiply top and bottom by $z$ to get $z/(z-1)$."
      ],
      // Example 2: Pole map
      [
        "Why $z = e^{sT}$: $z$ represents one time-step delay. Continuous shift by $T$ in time corresponds to multiplying Laplace by $e^{sT}$. So $z$ is the discrete equivalent.",
        "Why $z = e^{-0.2}$: $s = -2$, $T = 0.1$, so $z = e^{-2 \\cdot 0.1} = e^{-0.2} \\approx 0.819$."
      ],
      // Example 3: Stability
      [
        "Why unit circle: the LHP $\\text{Re}(s) < 0$ maps under $z = e^{sT}$ to the unit disk $|z| < 1$. Stability boundary becomes the unit circle.",
        "Why one pole outside is fatal: just like one RHP pole in continuous time. The unstable mode grows without bound regardless of the other poles."
      ]
    ]
  });
})();
