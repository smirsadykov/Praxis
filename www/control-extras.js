// Intros, formulas, glossary, explanations, task-whys for control topics.
// These extend the existing window.INTROS, FORMULAS, GLOSSARY, etc. objects
// without overwriting math/physics entries.

(function () {
  window.INTROS = window.INTROS || {};
  window.FORMULAS = window.FORMULAS || {};
  window.GLOSSARY = window.GLOSSARY || {};
  window.EXPLAIN = window.EXPLAIN || {};
  window.TASK_EXPLAIN = window.TASK_EXPLAIN || {};
  window.MISCONCEPTIONS = window.MISCONCEPTIONS || {};
  window.CONNECTIONS = window.CONNECTIONS || {};

  // ===== INTROS =====
  Object.assign(window.INTROS, {
    "intro-control": {
      whyExists: "Imagine trying to balance a broomstick on your hand. You can't just shove it once and walk away — you have to <em>keep watching</em>, sense which way it's tilting, and constantly nudge your hand to compensate. That moment-by-moment loop of <strong>sense → decide → act → sense again</strong> is the entire field of control engineering. Cruise control, autopilots, thermostats, robot arms, even the way a power grid keeps its frequency at exactly 50 Hz — all of it is this same loop running on different machinery.",
      whyImportant: "Most useful systems are not stable on their own. A rocket falls over. A motor spins out. A bioreactor cooks itself. The trick that makes all this technology work is <em>feedback</em>: measure what's actually happening, compare to what should be happening, and use the difference to drive the system back on course. Without control theory, the modern world — drones, MRI machines, anti-lock brakes, factory automation — simply does not function.",
      intuition: "Two pictures. <strong>Open loop</strong>: you set a timer on the oven, walk away, and hope. <strong>Closed loop</strong>: you watch the food, and turn the heat down when it browns. Closed loop wins every time something unexpected happens (the oven runs hot, the recipe lied, the meat was thicker than expected). The course will give you the mathematical tools — Laplace transforms, transfer functions, root locus, Bode plots — to predict what a closed loop will do <em>before you build it</em>."
    },
    "laplace-transforms-control": {
      whyExists: "Differential equations describe how things change over time, but they're a nightmare to solve by hand once you have anything more than the simplest case. In the 1700s Laplace had a trick: a clever integral that converts a function of time, $f(t)$, into a function of a new variable $s$. Inside the new world (the s-domain), <em>differentiation becomes multiplication by $s$</em>, and an ODE collapses into a single algebraic equation.",
      whyImportant: "Every control engineering technique you'll see — transfer functions, block diagrams, root locus, Bode plots — lives in the s-domain. Without Laplace, you'd be solving ODEs by hand for every new circuit, motor, or thermal system. With it, you write $G(s)$ once and reason about behavior almost geometrically.",
      intuition: "Think of $s$ as a complex frequency. $s = \\sigma + j\\omega$. The real part $\\sigma$ controls growth or decay; the imaginary part $j\\omega$ controls oscillation. A pole at $s = -2$ means a mode $e^{-2t}$ — decaying. A pole at $s = +1 + 3j$ means $e^t \\sin 3t$ — growing oscillation, disaster. The whole game is to keep your poles in the left half plane."
    },
    "transfer-functions": {
      whyExists: "A transfer function $G(s)$ is the s-domain answer to: <em>if the input is $U(s)$, what is the output $Y(s)$?</em> It packages all the dynamics of a system — circuit, motor, building, plane — into one ratio of polynomials. Once you have $G(s)$, you can predict response, design controllers, and combine subsystems with simple algebra (series = multiply, feedback = standard formula) instead of slogging through ODEs.",
      whyImportant: "The transfer function is the lingua franca of control. Block diagrams, root locus, Bode, Nyquist — all of them assume you have $G(s)$. The poles tell you how the system responds naturally; the zeros tell you which input shapes the system 'kills.' Reading $G(s)$ at a glance — fast pole? underdamped? integrator? — is a skill that separates a working control engineer from someone struggling.",
      intuition: "$G(s) = Y(s)/U(s)$. The denominator's roots are <strong>poles</strong> — the system's natural frequencies. The numerator's roots are <strong>zeros</strong> — frequencies the system blocks. Step input? Plug in $1/s$ and watch which exponentials show up. Sinusoid at $\\omega_0$? Just evaluate $G(j\\omega_0)$ — magnitude tells you the gain, angle tells you the phase shift."
    },
    "electrical-modeling-control": {
      whyExists: "Most real plants you'll control are electrical at some level — op-amp circuits, motor drives, filters. The trick is treating R, L, C as impedances $R$, $Ls$, $1/(Cs)$. KVL and KCL then give you transfer functions almost mechanically — no more solving differential equations one circuit at a time.",
      whyImportant: "Practical controllers are built from op-amps with R-C networks. Knowing how to read $V_o/V_i$ for any RLC topology lets you design analog PIDs, lead-lag compensators, anti-aliasing filters — everything that sits between the sensor and the actuator.",
      intuition: "An inductor 'resists changes in current' — at high frequency it looks like an open. A capacitor 'resists changes in voltage' — at high frequency it looks like a short. Resistors don't care about frequency. Stack these intuitions and you can roughly sketch a Bode plot in seconds without writing a single equation."
    },
    "mechanical-modeling-control": {
      whyExists: "Robots, vehicles, machine tools, even buildings under earthquake loading — all are mass-spring-damper combinations. Newton's second law ($F = ma$) plus a damping term and a spring term gives you the universal 2nd-order system. The math is identical in form to RLC circuits — engineers exploit this analogy constantly.",
      whyImportant: "Once you've seen one 2nd-order system, you've seen them all: $\\omega_n$ sets how fast it responds, $\\zeta$ sets how much it overshoots. Whether you're tuning a robot arm or designing a car suspension, the same numbers tell the same story.",
      intuition: "Stiffer spring → faster oscillation. Heavier mass → slower oscillation. More damping → less ringing. That's it. Even multi-body systems are just coupled versions of this picture."
    },
    "state-space": {
      whyExists: "Transfer functions are scalar — one input, one output. Real systems often have many of both: a quadcopter has 4 motors and tracks 12 states. State-space packs everything into matrices: $\\dot{\\mathbf x} = A\\mathbf x + B\\mathbf u$, and suddenly MIMO design is just linear algebra.",
      whyImportant: "Modern control (LQR, Kalman filtering, $H_\\infty$, MPC) is almost entirely state-space. It also handles nonlinear systems via linearization, time-varying systems by letting $A(t)$ vary, and gives you internal state visibility (the controller can react before the output even moves).",
      intuition: "The state $\\mathbf x$ is 'everything you need to know about the system right now to predict the future.' For a mass-spring-damper: position + velocity. For an RLC circuit: capacitor voltage + inductor current. Two numbers, and you know everything."
    },
    "first-order-response": {
      whyExists: "Many real plants are dominated by a single time constant — thermal systems (room heat-up), RC filters (signal smoothing), motor speed loops. They all behave like $G(s) = a/(s+a)$, and their step response is the same exponential approach. Master this one and you've mastered a huge class of real-world plants.",
      whyImportant: "The phrase 'time constant' is in every datasheet, every spec sheet, every Bode plot. Knowing that 'rise time ≈ 2.2τ' and 'settles in 4τ' is the fastest mental shortcut in engineering.",
      intuition: "Imagine pouring hot water into a cold mug. The temperature climbs fast at first, then more slowly as it gets close to the water's temperature. That curve <em>is</em> $1 - e^{-t/\\tau}$. After one $\\tau$: 63% there. After three: 95%. After five: basically done."
    },
    "second-order-response": {
      whyExists: "If you only have one time constant, things just decay. The moment you introduce a second energy storage (mass + spring, inductor + capacitor) the system can <em>oscillate</em>. That's the second-order system, and it's the most important non-trivial dynamic in engineering.",
      whyImportant: "Cars bouncing on suspensions, satellite attitude after a thruster firing, op-amps after a step input — all 2nd order. The two knobs are $\\omega_n$ (how fast) and $\\zeta$ (how much overshoot). Get those right and your system feels good. Get them wrong and it rings forever, or it crawls.",
      intuition: "$\\zeta = 0$: pure oscillation, forever. $\\zeta = 1$: just barely no overshoot (critical). $\\zeta < 1$: rings on the way to the target. $\\zeta > 1$: sluggish, no ring. The sweet spot for most engineering is $\\zeta \\approx 0.7$ — fast, small overshoot, no ring."
    },
    "block-diagrams": {
      whyExists: "Real control systems have controllers, sensors, actuators, plants — all interconnected. Block diagrams give you a visual algebra for combining them. Three rules — series, parallel, feedback — collapse complex pictures into a single $T(s)$.",
      whyImportant: "Before you can analyze or simulate anything, you have to know what the overall transfer function is. Block diagram reduction is how you get there.",
      intuition: "Three moves: (1) blocks in series multiply, (2) blocks in parallel add, (3) negative feedback gives $G/(1+GH)$. Memorize those and 90% of textbook problems collapse in three lines."
    },
    "signal-flow-mason": {
      whyExists: "Block diagram reduction is painful when you have many loops crossing each other. Signal-flow graphs (nodes and branches) plus Mason's gain formula give you a direct shortcut: identify the forward paths and loops, plug into one equation, done.",
      whyImportant: "For systems with multiple paths and nested loops (large electronics, communication systems), Mason saves hours of bookkeeping. It's also the conceptual basis for many graph-theoretic analyses in control.",
      intuition: "A node is a signal. A branch is a multiplier. A loop is a feedback cycle. Mason: sum (forward path × cofactor) divided by determinant. The determinant accounts for all loops; the cofactor strips out loops that touch the path."
    },
    "routh-hurwitz": {
      whyExists: "You need to know if a system is stable, but factoring a 5th-degree polynomial by hand is no fun. Routh (1877) and Hurwitz (1895) found a purely arithmetic test on the coefficients — no roots needed.",
      whyImportant: "Stability is the FIRST design constraint. Routh-Hurwitz also tells you the range of a gain $K$ for which a system stays stable — invaluable for design.",
      intuition: "Lay coefficients in a table. Build the rows by a cross-multiplication rule. Count sign changes in the first column — that's the number of unstable (RHP) poles. Zero changes means stable."
    },
    "steady-state-errors": {
      whyExists: "A control system is only as good as the gap between what you want and what you get at steady state. The size of that gap depends on (a) how many integrators the loop has and (b) what kind of reference you're tracking (step, ramp, parabola).",
      whyImportant: "If a robot needs to land on a target, the steady-state position error must be zero. If a CNC mill tracks a constant-velocity cut, the velocity error must be zero. Picking the right system type to meet your spec is a design decision worth millions.",
      intuition: "More integrators (more poles at $s = 0$) means better tracking. Type 0 tracks steps with offset. Type 1 tracks steps perfectly but ramps with offset. Type 2 tracks ramps perfectly but parabolas with offset. The rule: type $n$ tracks anything 'less aggressive than $t^n$' perfectly."
    },
    "root-locus": {
      whyExists: "When you crank up a gain $K$ in a feedback loop, the closed-loop poles MOVE. Sometimes they slide nicely to the left (faster, more damped). Sometimes they swing into the right half-plane and your system explodes. Root locus draws the entire path as $K$ varies from 0 to ∞, on a single picture.",
      whyImportant: "Evans (1948) realized that a few simple rules (count branches, find asymptotes, determine break points) let you sketch this picture by hand. You can <em>see</em> what gain you can get away with, what the closed-loop damping will be, where to add a compensator zero. It's geometric intuition for stability.",
      intuition: "Start at open-loop poles when $K = 0$. End at open-loop zeros (or infinity along asymptotes) when $K = \\infty$. Real-axis sections to the LEFT of an odd count of poles+zeros. Add a zero → locus bends LEFT (good for stability). Add a pole → locus bends RIGHT (bad)."
    },
    "root-locus-design": {
      whyExists: "Pure proportional gain isn't enough. You can't always meet damping, overshoot, AND steady-state error specs by tuning $K$ alone. Adding a zero (lead/PD) or pole (lag/PI) reshapes the root locus so the closed-loop poles land where you need them.",
      whyImportant: "This is the heart of classical compensator design. Lead → faster transient, more phase margin. Lag → kill steady-state error, accept a slight delay. Lead-lag → both, at a cost in complexity.",
      intuition: "A zero is a magnet that pulls the locus toward it. A pole is a magnet that pushes the locus away. Drop a zero near the slow plant pole and the locus bends sharply left — your closed-loop system gets fast without going unstable."
    },
    "bode-plots": {
      whyExists: "Plotting magnitude (in dB) and phase (in degrees) against $\\log\\omega$ turns multiplications of $G$'s factors into additions of straight-line segments. Bode (Bell Labs, 1930s) realized this makes both analysis AND design largely graphical.",
      whyImportant: "Bode is the working frequency-domain language. You can read stability margins, bandwidth, low-frequency error directly off the plot. Most industrial loop tuning is still done by looking at experimental Bode plots.",
      intuition: "Each pole adds $-20$ dB/dec to the slope above its corner frequency, and $-90°$ to the phase. Each zero adds $+20$ dB/dec and $+90°$. Stack the contributions and you have the whole story."
    },
    "nyquist": {
      whyExists: "Bode plots are easy to read but don't always tell you the truth about closed-loop stability — especially when the open loop is itself unstable. Nyquist (1932) showed that drawing $G(j\\omega)$ in the complex plane and COUNTING encirclements of the point $-1$ gives an exact stability answer.",
      whyImportant: "Nyquist is the rigorous criterion. It handles unstable open loops, multiple loops, time delays — situations where Bode might mislead you. It's also the conceptual root of phase and gain margins.",
      intuition: "Map the imaginary axis through $G$. If the resulting curve encircles $-1$, every encirclement counts as one new unstable closed-loop pole. No encirclements + stable open loop = stable closed loop."
    },
    "gain-phase-margins": {
      whyExists: "Your model is wrong. The plant changes with temperature, with wear, with manufacturing tolerance. Margins tell you how much extra gain or phase the loop can absorb before becoming unstable. They're the engineering safety factor for control.",
      whyImportant: "A design with PM = 5° will work on the bench and fail on the floor. Industry rules of thumb (PM ≥ 45°, GM ≥ 6 dB) come from decades of hard lessons.",
      intuition: "PM: how much extra phase lag (delay, slow sensor) can you add before the loop oscillates? GM: how much can the gain change (component drift, varying load) before it oscillates? Both should be comfortably positive."
    },
    "lead-lag": {
      whyExists: "Lead and lag compensators are the classical fix-it tools. Lead adds phase right at the gain-crossover frequency — the system gets snappier and more damped. Lag boosts low-frequency gain (better tracking) without hurting bandwidth.",
      whyImportant: "Most real-world classical designs are some flavor of lead, lag, or lead-lag. PID is one specific incarnation. Understanding the geometry — where to place the zero, where the pole — is bread and butter.",
      intuition: "Lead is a PD with a realizability pole. Lag is a PI with a finite DC gain. The 'where to put the zero' question is geometric: at the frequency where you need phase boost (lead) or far below where the loop closes (lag)."
    },
    "pid-control": {
      whyExists: "PID is by far the most-deployed controller in the world — chemical plants, HVAC, motor drives, drones. It's a flexible workhorse: $K_p$ for response, $K_i$ for accuracy, $K_d$ for damping. You can tune one knob at a time and see the effect.",
      whyImportant: "If you can only learn one control structure, learn PID. Industry surveys put PID at >95% of all installed control loops. Whole textbooks (and Ziegler-Nichols' famous 1942 paper) are devoted to tuning it.",
      intuition: "P responds to NOW. I responds to the PAST (accumulated error). D responds to the FUTURE (rate of change). Together they let one structure handle a vast range of plants — if you tune the gains."
    },
    "state-space-design": {
      whyExists: "Pole placement says: if your system is controllable, I can put the closed-loop eigenvalues ANYWHERE I want. No more graphical trial-and-error — just compute a feedback matrix $K$ directly.",
      whyImportant: "This is the foundation of modern (post-1960) control. LQR, Kalman filters, MPC all build on full-state feedback. It also handles MIMO systems naturally — something classical methods struggle with.",
      intuition: "Choose where you want the closed-loop poles. Compute the characteristic polynomial you want. Match it term-by-term against $\\det(sI - A + BK)$. Solve for $K$. Done — Ackermann's formula automates this."
    },
    "state-observers": {
      whyExists: "Full-state feedback needs all the states. In real systems you might only measure one or two outputs. Observers (Luenberger 1964) reconstruct the missing states from the output history.",
      whyImportant: "Almost no real system gives you all the states. Observers let you apply modern control to real plants. The Kalman filter is the noise-optimal observer — the heart of GPS, navigation, target tracking.",
      intuition: "Build a model of the plant in software. Feed it the same input. Compare the measured output to the model's predicted output. Use the difference (innovation) to correct the model — so $\\hat x$ chases the true $x$."
    },
    "digital-control": {
      whyExists: "Real controllers run on microprocessors that sample at discrete times. The z-transform plays the role of the Laplace transform for sampled signals: $z = e^{sT}$ maps continuous poles to discrete ones, and the stability boundary becomes the unit circle.",
      whyImportant: "Every embedded controller in the world — drones, EVs, washing machines — is a sampled system. Digital design lets you bypass analog electronics entirely and program any controller in software, including ones that are impossible to build with op-amps.",
      intuition: "$s = -2$ continuous (decay $e^{-2t}$) maps to $z = e^{-2T}$ — a real number less than 1, inside the unit disk → stable. Anything outside the unit disk blows up. Sample faster (smaller $T$) and discrete poles cluster nearer to $z = 1$ — more 'continuous-like' behavior."
    }
  });

  // ===== FORMULAS =====
  Object.assign(window.FORMULAS, {
    "intro-control": [
      { f: "$E = R - C$", n: "Error: the difference between reference (what you want) and measured output (what you have). Everything a controller does is in response to this single signal." },
      { f: "$T = \\dfrac{G}{1 + GH}$", n: "Closed-loop transfer function under negative feedback. The most-used formula in control. If $|GH| \\gg 1$, then $T \\approx 1/H$ — the system tracks the inverse of the feedback regardless of plant variations. That's why feedback is magic." }
    ],
    "laplace-transforms-control": [
      { f: "$F(s) = \\int_0^\\infty f(t)e^{-st}dt$", n: "ORIGIN: Pierre-Simon Laplace, 1782, working on probability. The integral exists for any 'reasonable' $f(t)$ that doesn't grow faster than an exponential. DERIVATION: by analogy with Fourier ($e^{-j\\omega t}$) but using $e^{-st}$ so it converges for decaying inputs too. WORKED EXAMPLE: $f(t) = 1$ gives $\\int_0^\\infty e^{-st}dt = 1/s$." },
      { f: "$\\mathcal{L}\\{\\dot f\\} = sF(s) - f(0)$", n: "ORIGIN: integration by parts on the definition. The whole reason Laplace is useful: differentiation in $t$ becomes algebra in $s$. WORKED EXAMPLE: $\\dot y + 2y = 0$, $y(0) = 1$ → $sY - 1 + 2Y = 0$ → $Y = 1/(s+2)$ → $y = e^{-2t}$." },
      { f: "$\\lim_{t\\to\\infty}f(t) = \\lim_{s\\to 0} sF(s)$", n: "Final-value theorem. ORIGIN: a corollary of how the Laplace integral behaves at low frequencies. CATCH: only valid if $sF(s)$ has no RHP or $j\\omega$-axis poles. WORKED EXAMPLE: $Y = 1/(s(s+3))$ → $\\lim sY = 1/3$, matching $y(\\infty)$ of $(1/3)(1 - e^{-3t})$." }
    ],
    "transfer-functions": [
      { f: "$G(s) = \\dfrac{Y(s)}{U(s)} = \\dfrac{b_m s^m + \\ldots}{a_n s^n + \\ldots}$", n: "ORIGIN: ratio of output to input transforms with all initial conditions = 0. The denominator $= 0$ gives the characteristic equation. The roots of the denominator are POLES (natural modes); the roots of the numerator are ZEROS (input shapes that the system blocks). WORKED EXAMPLE: $G(s) = 1/(s+2)$ — pole at $-2$ means mode $e^{-2t}$." },
      { f: "Pole at $s = \\sigma + j\\omega$", n: "DERIVATION: each pole contributes a term $e^{\\sigma t}(\\cos\\omega t + j\\sin\\omega t)$ to the response. $\\sigma < 0$ → decay; $\\sigma > 0$ → blow-up; $\\omega \\neq 0$ → oscillation. WORKED EXAMPLE: pole at $-1 + 2j$ → response contains $e^{-t}\\cos 2t$." },
      { f: "DC gain $= G(0)$", n: "Substitute $s = 0$ into the transfer function. For a stable system with step input, this is the steady-state output. WORKED EXAMPLE: $G(s) = 10/(s+5)$ → DC gain = 2; a unit step gives steady output 2." }
    ],
    "electrical-modeling-control": [
      { f: "$Z_R = R$, $Z_L = Ls$, $Z_C = 1/(Cs)$", n: "ORIGIN: Laplace transform of $v = Ri$ (trivial), $v = L\\,di/dt$ (becomes $LsI$), $i = C\\,dv/dt$ (becomes $CsV$). DERIVATION: just apply $\\mathcal{L}\\{\\dot f\\} = sF$. WORKED EXAMPLE: RC series, output across C: voltage divider gives $V_o/V_i = (1/(Cs))/(R + 1/(Cs)) = 1/(RCs+1)$." },
      { f: "Op-amp inverting: $V_o/V_i = -Z_f/Z_i$", n: "ORIGIN: ideal op-amp has $V_+ = V_-$ (virtual short) and no input current. DERIVATION: KCL at inverting input gives $V_i/Z_i = -V_o/Z_f$. WORKED EXAMPLE: $Z_i = R_1$, $Z_f = R_2 \\parallel 1/(Cs)$ → low-pass with DC gain $-R_2/R_1$ and pole at $-1/(R_2 C)$." }
    ],
    "mechanical-modeling-control": [
      { f: "$m\\ddot x + b\\dot x + kx = f$", n: "ORIGIN: Newton's 2nd law with viscous damping and Hookean spring. DERIVATION: sum of forces = mass × acceleration. WORKED EXAMPLE: car suspension, $m$ = quarter-car mass, $k$ = spring constant, $b$ = shock absorber. Transfer function $X/F = 1/(ms^2 + bs + k)$." },
      { f: "$\\omega_n = \\sqrt{k/m}$, $\\zeta = b/(2\\sqrt{km})$", n: "DERIVATION: write $ms^2 + bs + k = 0$ in standard form $s^2 + 2\\zeta\\omega_n s + \\omega_n^2 = 0$ by dividing through by $m$. WORKED EXAMPLE: $m=1, k=100, b=4$ → $\\omega_n = 10$ rad/s, $\\zeta = 4/(2\\cdot 10) = 0.2$ (lightly damped, ~52% overshoot)." },
      { f: "$J\\ddot\\theta + D\\dot\\theta + K\\theta = T$", n: "Rotational equivalent. $J$ = moment of inertia, $D$ = rotational damping, $K$ = torsional spring stiffness, $T$ = applied torque. Math is identical to translational." }
    ],
    "state-space": [
      { f: "$\\dot{\\mathbf x} = A\\mathbf x + B\\mathbf u$,  $\\mathbf y = C\\mathbf x + D\\mathbf u$", n: "ORIGIN: rewrite an $n$-th order ODE as $n$ first-order ODEs by choosing state variables. DERIVATION: pick $x_1 = y$, $x_2 = \\dot y$, …, $x_n = y^{(n-1)}$. Then $\\dot x_i = x_{i+1}$ for $i < n$, and $\\dot x_n$ comes from the ODE. WORKED EXAMPLE: $\\ddot y + 3\\dot y + 2y = u$ → $A = [0,1; -2,-3]$, $B = [0;1]$, $C = [1,0]$." },
      { f: "$G(s) = C(sI - A)^{-1}B + D$", n: "DERIVATION: take Laplace of state equations with $\\mathbf x(0) = 0$: $sX = AX + BU$ → $X = (sI-A)^{-1}BU$ → $Y = CX + DU = [C(sI-A)^{-1}B + D]U$. WORKED EXAMPLE: $A = [-2]$, $B = [3]$, $C = [4]$, $D = 0$ → $G = 12/(s+2)$." },
      { f: "Eigenvalues of $A$ = poles of $G(s)$", n: "DERIVATION: $\\det(sI - A) = 0$ at eigenvalues, which makes $(sI-A)^{-1}$ blow up — and that's exactly the denominator of $G$. WORKED EXAMPLE: $A = \\text{diag}(-1, -3)$ → poles at $s = -1, -3$." }
    ],
    "first-order-response": [
      { f: "$y(t) = (1 - e^{-t/\\tau}) y_\\infty$", n: "Step response of $G(s) = (1/\\tau)/(s + 1/\\tau)$. ORIGIN: integrating $\\tau\\dot y + y = 1$ with $y(0) = 0$. WORKED EXAMPLE: $\\tau = 0.5$ s; at $t = 0.5$ s, $y = (1 - 1/e)(1) \\approx 0.632$." },
      { f: "$t_r \\approx 2.2\\tau$, $t_s \\approx 4\\tau$ (2%)", n: "Rule-of-thumb rise time (10-90%) and settling time. DERIVATION: solve $1 - e^{-t_r/\\tau} = 0.9$ vs $= 0.1$ → $t_r = \\tau\\ln 9 \\approx 2.2\\tau$. WORKED EXAMPLE: $\\tau = 0.1$ s → $t_r \\approx 0.22$ s, $t_s \\approx 0.4$ s." }
    ],
    "second-order-response": [
      { f: "$G(s) = \\dfrac{\\omega_n^2}{s^2 + 2\\zeta\\omega_n s + \\omega_n^2}$", n: "Standard 2nd-order form. ORIGIN: dividing the mass-spring-damper denominator $ms^2+bs+k$ by $m$ and identifying $\\omega_n = \\sqrt{k/m}$ and $\\zeta = b/(2\\sqrt{km})$. WORKED EXAMPLE: $m=1, b=4, k=100$ → $\\omega_n = 10$, $\\zeta = 0.2$." },
      { f: "$\\%OS = 100\\,e^{-\\zeta\\pi/\\sqrt{1-\\zeta^2}}$", n: "DERIVATION: peak time $T_p = \\pi/\\omega_d$, evaluate step response there. Algebra gives this clean expression depending only on $\\zeta$. WORKED EXAMPLE: $\\zeta = 0.5$ → $\\%OS = 100e^{-0.5\\pi/\\sqrt{0.75}} = 100 e^{-1.814} \\approx 16.3\\%$." },
      { f: "$T_p = \\dfrac{\\pi}{\\omega_d}$,  $T_s = \\dfrac{4}{\\zeta\\omega_n}$ (2%)", n: "Peak time and 2% settling time. $\\omega_d = \\omega_n\\sqrt{1-\\zeta^2}$ is the damped natural frequency. WORKED EXAMPLE: $\\omega_n=10, \\zeta=0.4$ → $\\omega_d = 9.17$ → $T_p \\approx 0.343$ s; $T_s \\approx 1$ s." }
    ],
    "block-diagrams": [
      { f: "Series:  $G_{\\rm total} = G_1 G_2$", n: "Cascaded blocks multiply. ORIGIN: $Y = G_2(G_1 U) = G_1 G_2 U$ — order doesn't matter for linear systems. WORKED EXAMPLE: amp with $G_1 = 100$ feeding filter $G_2 = 1/(s+10)$ → $G = 100/(s+10)$." },
      { f: "Parallel:  $G_{\\rm total} = G_1 + G_2$", n: "Blocks sharing input and adding outputs. WORKED EXAMPLE: $1/s + 2$ → combined integrator + proportional path = PI structure." },
      { f: "Negative feedback:  $T = \\dfrac{G}{1 + GH}$", n: "ORIGIN: $Y = G(U - HY)$, solve for $Y/U$. DERIVATION: $Y + GHY = GU$ → $Y(1+GH) = GU$. WORKED EXAMPLE: $G = 10/(s+2)$, $H=1$ → $T = 10/(s+12)$. Closed-loop pole at $-12$ — much faster than open-loop $-2$." }
    ],
    "signal-flow-mason": [
      { f: "$T = \\dfrac{\\sum_k P_k \\Delta_k}{\\Delta}$", n: "Mason's gain formula. ORIGIN: S. J. Mason, 1953, generalizing Cramer's rule to signal-flow graphs. DERIVATION: $\\Delta$ is the determinant of $(I - L)$ where $L$ is the loop-gain matrix; $\\Delta_k$ is the cofactor for path $k$. WORKED EXAMPLE: one forward path $G_1 G_2$, one loop $-G_2 H$. $\\Delta = 1 + G_2H$, $\\Delta_1 = 1$, $T = G_1 G_2/(1 + G_2 H)$." },
      { f: "$\\Delta = 1 - \\sum L_i + \\sum L_i L_j - \\ldots$", n: "Determinant: alternating sum of products of pairwise, triple, etc. NON-TOUCHING loops. Non-touching = sharing no node." }
    ],
    "routh-hurwitz": [
      { f: "Routh array sign-change count", n: "ORIGIN: E. J. Routh, 1877 (cleaner formulation than Hurwitz 1895). DERIVATION: the array is built by recursive cross-multiplications; under Liénard-Chipart, the sign changes in column 1 = # RHP roots. WORKED EXAMPLE: $s^3 + 2s^2 + 3s + 6$: rows 1,2 → 1,3 / 2,6. Next row: $(2\\cdot 3 - 1\\cdot 6)/2 = 0$ — row of zeros — poles on $j\\omega$ axis." },
      { f: "Necessary: all coefficients same sign", n: "Liénard-Chipart shortcut: if any coefficient of the characteristic poly is missing or has opposite sign, the system is automatically unstable. Apply BEFORE building the array." }
    ],
    "steady-state-errors": [
      { f: "$e_{ss} = \\dfrac{1}{1 + K_p}$ (step, type 0)", n: "ORIGIN: $E(s) = R/(1 + G)$, apply final-value theorem with $R = 1/s$. $K_p = G(0)$. WORKED EXAMPLE: $G = 10/((s+2)(s+5))$, step → $K_p = 1$, $e_{ss} = 0.5$." },
      { f: "$e_{ss} = 1/K_v$ (ramp, type 1)", n: "$K_v = \\lim_{s\\to 0} sG(s)$. WORKED EXAMPLE: $G = 50/(s(s+5))$, ramp → $K_v = 10$, $e_{ss} = 0.1$." },
      { f: "$e_{ss} = 1/K_a$ (parabola, type 2)", n: "$K_a = \\lim_{s\\to 0} s^2 G(s)$. WORKED EXAMPLE: $G = 25/(s^2(s+5))$, parabola → $K_a = 5$, $e_{ss} = 0.2$." }
    ],
    "root-locus": [
      { f: "Asymptote angles $\\theta = (2k+1)180°/(n-m)$", n: "ORIGIN: at $s = \\infty$, the open-loop has $n - m$ extra poles relative to zeros, so the locus must head to infinity along $n - m$ asymptotes. DERIVATION: from the argument condition at large $s$. WORKED EXAMPLE: $n - m = 3$ → asymptotes at $60°, 180°, 300°$." },
      { f: "Asymptote centroid $\\sigma = \\dfrac{\\sum p_i - \\sum z_j}{n - m}$", n: "Where the asymptotes meet on the real axis. WORKED EXAMPLE: poles at $0, -2, -4$, no zeros → $\\sigma = -2$." },
      { f: "Breakaway: $dK/ds = 0$ on real-axis locus", n: "DERIVATION: at a breakaway, two branches meet, so the characteristic polynomial has a repeated root, meaning $dK/ds = 0$. WORKED EXAMPLE: $G = K/[s(s+2)]$ → $K = -s(s+2)$ → $dK/ds = -2s - 2 = 0$ → breakaway at $s = -1$." }
    ],
    "root-locus-design": [
      { f: "PD: $G_c = K(s + z)$", n: "Adds a zero at $-z$. Pulls root locus left → faster, more damped. WORKED EXAMPLE: plant $1/[s(s+2)]$; PD with $z = 3$ moves dominant poles further into LHP." },
      { f: "Lead: $G_c = K(s+z)/(s+p)$, $z < p$", n: "Realizable PD: zero closer to origin than pole. Provides phase boost between $z$ and $p$. ORIGIN: needed because pure PD is not realizable (improper). WORKED EXAMPLE: $z = 1, p = 10$ → boost peaks near $\\sqrt{10} \\approx 3.16$ rad/s." },
      { f: "Lag: $G_c = K(s+z)/(s+p)$, $z > p$", n: "Improves steady-state error. Place near origin so phase lag at crossover is small. WORKED EXAMPLE: $z = 0.1, p = 0.01$ → DC gain boosted by 10× while crossover region barely changes." }
    ],
    "bode-plots": [
      { f: "Magnitude (dB) $= 20\\log_{10}|G(j\\omega)|$", n: "ORIGIN: decibels invented at Bell Labs (1920s) to handle huge dynamic ranges. Factor 10 = 20 dB. DERIVATION: $\\log$ converts products to sums — Bode plot of $G_1 G_2$ is the sum of plots. WORKED EXAMPLE: $|G| = 100$ → 40 dB; $|G| = 0.1$ → −20 dB." },
      { f: "Pole at $\\omega_p$: $-20$ dB/dec, $-90°$ asymptotic phase", n: "ORIGIN: at high $\\omega$, $1/(s + \\omega_p) \\approx 1/s$ which has slope $-20$ dB/dec and phase $-90°$. The corner is at $\\omega = \\omega_p$. WORKED EXAMPLE: pole at 10 rad/s → magnitude is flat below 10, drops at $-20$ dB/dec above." },
      { f: "Zero at $\\omega_z$: $+20$ dB/dec, $+90°$", n: "Mirror image of a pole. Zeros boost high frequencies." }
    ],
    "nyquist": [
      { f: "$Z = N + P$", n: "Nyquist criterion. $Z$ = closed-loop RHP poles, $N$ = clockwise encirclements of $-1$, $P$ = open-loop RHP poles. ORIGIN: Nyquist, 1932, generalizing Cauchy's argument principle. DERIVATION: count zeros and poles of $1 + GH$ inside a contour enclosing the entire RHP. WORKED EXAMPLE: $P = 0$, $N = 0$ → $Z = 0$ → stable." },
      { f: "$s = j\\omega$ along the Nyquist contour", n: "The contour goes up the imaginary axis from $-j\\infty$ to $+j\\infty$, closes via large RHP semicircle. Plot $G(s)$ as $s$ traces this." }
    ],
    "gain-phase-margins": [
      { f: "PM $= 180° + \\angle G(j\\omega_{gc})$", n: "Phase margin at the gain crossover ($|G| = 1$). ORIGIN: how much extra phase lag the loop can absorb before total phase reaches $-180°$ (instability). WORKED EXAMPLE: at $\\omega_{gc} = 2$, $\\angle G = -135°$ → PM = $45°$." },
      { f: "GM $= 1/|G(j\\omega_{pc})|$", n: "At the phase crossover ($\\angle G = -180°$). How much you can multiply the gain before instability. WORKED EXAMPLE: $|G| = 0.5$ at $\\omega_{pc}$ → GM = 2 = 6 dB." },
      { f: "Rule of thumb: $\\zeta \\approx \\text{PM}/100$", n: "For 2nd-order-dominant systems, $\\zeta \\times 100 \\approx$ PM in degrees, for PM under ~60°. WORKED EXAMPLE: want $\\zeta = 0.7$ → aim for PM ≈ 70°." }
    ],
    "lead-lag": [
      { f: "$\\sin\\phi_{\\max} = (1-\\alpha)/(1+\\alpha)$", n: "Maximum phase of a lead with pole/zero ratio $1/\\alpha$. ORIGIN: differentiate phase expression. WORKED EXAMPLE: $\\alpha = 0.1$ → $\\sin\\phi_{\\max} = 0.9/1.1 = 0.818$ → $\\phi_{\\max} \\approx 55°$." },
      { f: "$\\omega_m = \\sqrt{zp}$", n: "Frequency of maximum phase boost — geometric mean of zero and pole corner frequencies. WORKED EXAMPLE: $z = 1, p = 10$ → $\\omega_m = \\sqrt{10} \\approx 3.16$ rad/s." },
      { f: "Lag DC gain boost $= z/p$", n: "Steady-state error reduction factor. WORKED EXAMPLE: $z = 1, p = 0.1$ → 10× DC boost → $e_{ss}$ drops 10×." }
    ],
    "pid-control": [
      { f: "$G_c(s) = K_p + \\dfrac{K_i}{s} + K_d s$", n: "ORIGIN: started life as Minorsky's marine autopilot, 1922; popularized by Ziegler-Nichols, 1942. DERIVATION: P responds to error, I to its integral, D to its derivative — three terms covering past, present, future. WORKED EXAMPLE: $K_p = 2, K_i = 1, K_d = 0.5$ → $G_c = (0.5s^2 + 2s + 1)/s$, two zeros plus pole at origin." },
      { f: "$G_c = K_p(1 + 1/(T_i s) + T_d s)$", n: "Industrial form. $T_i$ = integral time, $T_d$ = derivative time. Ziegler-Nichols ultimate-gain tuning: $K_p = 0.6 K_u$, $T_i = T_u/2$, $T_d = T_u/8$." },
      { f: "Realizable D: $K_d s/(1 + s/N)$", n: "Pure derivative amplifies noise. In practice, add a high-frequency pole at $N$ (typically $N = 10$-$100$) to roll off the derivative." }
    ],
    "state-space-design": [
      { f: "$u = -K\\mathbf x$,  $\\dot{\\mathbf x} = (A - BK)\\mathbf x$", n: "Full-state feedback. Closed-loop eigenvalues = eigenvalues of $A - BK$. WORKED EXAMPLE: $A = [0,1;-2,-3]$, $B = [0;1]$. With $K = (10\\ 4)$: $A - BK = [0,1;-12,-7]$ → poles at $-3, -4$." },
      { f: "Controllability matrix $\\mathcal{C} = [B\\ AB\\ \\ldots\\ A^{n-1}B]$", n: "ORIGIN: Kalman, 1960. DERIVATION: the reachable subspace at time $t$ is exactly the image of $\\mathcal{C}$. Full rank ⇔ can place poles anywhere. WORKED EXAMPLE: 2-state SISO, $\\mathcal{C}$ is $2\\times 2$ — check determinant." },
      { f: "Ackermann: $K = [0\\ \\ldots\\ 0\\ 1]\\mathcal{C}^{-1}\\alpha_d(A)$", n: "ORIGIN: Ackermann's formula, 1972. Compute $K$ in one closed-form. DERIVATION: matches char poly of $A-BK$ to desired $\\alpha_d(s)$ via Cayley-Hamilton." }
    ],
    "state-observers": [
      { f: "$\\dot{\\hat{\\mathbf x}} = A\\hat{\\mathbf x} + B u + L(y - C\\hat{\\mathbf x})$", n: "Luenberger observer. ORIGIN: Luenberger, 1964. DERIVATION: model + correction. The error $e = x - \\hat x$ satisfies $\\dot e = (A - LC)e$. WORKED EXAMPLE: choose $L$ so eigenvalues of $A-LC$ are at $-10, -10$ → estimate converges in ~0.4 s." },
      { f: "Observability matrix $\\mathcal{O} = [C^T\\ (CA)^T\\ \\ldots]^T$", n: "Dual of controllability. Full rank ⇔ can reconstruct state from output." }
    ],
    "digital-control": [
      { f: "$z = e^{sT}$", n: "Mapping from continuous $s$ to discrete $z$. ORIGIN: $z$ is the unit-delay operator: $z^{-1}x[k] = x[k-1]$. DERIVATION: $e^{sT}$ is the time shift by $T$ in continuous time. WORKED EXAMPLE: $s = -1$, $T = 0.1$ → $z = e^{-0.1} \\approx 0.905$, inside unit circle → stable." },
      { f: "Stability: all poles satisfy $|z| < 1$", n: "Discrete analog of 'LHP for continuous.' The unit circle is the stability boundary." },
      { f: "Bilinear (Tustin) transform: $s \\to \\dfrac{2}{T}\\dfrac{z-1}{z+1}$", n: "Maps LHP to inside-unit-disk exactly. Used to discretize continuous designs without warping stability." }
    ]
  });

  // ===== GLOSSARY =====
  Object.assign(window.GLOSSARY, {
    "intro-control": [
      { term: "Plant", def: "The system being controlled — motor, oven, chemical reactor." },
      { term: "Controller", def: "Decides the actuator command based on the error." },
      { term: "Sensor", def: "Measures the output and reports it to the controller." },
      { term: "Reference (set point)", def: "What you want the output to be." },
      { term: "Error", def: "$e = r - y$. Reference minus measured output." },
      { term: "Open loop", def: "No feedback — input depends only on a recipe, not on the actual output." },
      { term: "Closed loop", def: "Feedback present — control input depends on the measured output." }
    ],
    "laplace-transforms-control": [
      { term: "$\\mathcal{L}\\{\\cdot\\}$", def: "The Laplace operator. Converts $f(t)$ to $F(s)$." },
      { term: "$s$", def: "Complex frequency. $s = \\sigma + j\\omega$. Real part = decay/growth rate; imag part = oscillation frequency." },
      { term: "ROC", def: "Region of convergence — the set of $s$ for which the Laplace integral converges. Usually a right half-plane." },
      { term: "Partial fractions", def: "Breaking a rational function into simple pieces that have known inverse transforms." },
      { term: "Initial-value theorem", def: "$f(0^+) = \\lim_{s\\to\\infty} sF(s)$." },
      { term: "Final-value theorem", def: "$f(\\infty) = \\lim_{s\\to 0} sF(s)$, provided $sF(s)$ has only LHP poles." }
    ],
    "transfer-functions": [
      { term: "Transfer function $G(s)$", def: "Ratio $Y(s)/U(s)$ with zero initial conditions. Captures all LTI dynamics." },
      { term: "Pole", def: "Root of the denominator. Sets natural mode of response." },
      { term: "Zero", def: "Root of the numerator. Sets which input shapes the system kills." },
      { term: "Proper", def: "Numerator degree ≤ denominator degree. Required for physical realizability." },
      { term: "DC gain", def: "$G(0)$. Steady-state output for a unit step." },
      { term: "Order", def: "Degree of the denominator polynomial." }
    ],
    "electrical-modeling-control": [
      { term: "Impedance", def: "Generalized resistance in the s-domain. $Z_R = R, Z_L = Ls, Z_C = 1/(Cs)$." },
      { term: "KVL", def: "Kirchhoff's voltage law: sum of voltage drops around a loop = 0." },
      { term: "KCL", def: "Kirchhoff's current law: sum of currents into a node = 0." },
      { term: "Op-amp", def: "Operational amplifier — high-gain, high-impedance amplifier used to build filters, integrators, PIDs." },
      { term: "Virtual short", def: "Ideal op-amp in negative feedback has equal voltage at both inputs." }
    ],
    "mechanical-modeling-control": [
      { term: "$m$ (mass)", def: "Inertial element — resists changes in velocity." },
      { term: "$b$ (damper)", def: "Viscous damping element — force proportional to velocity." },
      { term: "$k$ (spring)", def: "Restoring element — force proportional to displacement." },
      { term: "$J$ (moment of inertia)", def: "Rotational analog of mass." },
      { term: "$\\omega_n$", def: "Undamped natural frequency. $\\sqrt{k/m}$ for translational." },
      { term: "$\\zeta$", def: "Damping ratio. Dimensionless. $\\zeta = 0$ undamped, $\\zeta = 1$ critically damped." }
    ],
    "state-space": [
      { term: "State $\\mathbf x$", def: "Vector of variables that fully describes the system's memory at any instant." },
      { term: "$A$ matrix", def: "System matrix. Governs internal dynamics. Eigenvalues = poles." },
      { term: "$B$ matrix", def: "Input matrix. How control inputs enter." },
      { term: "$C$ matrix", def: "Output matrix. Picks off which combinations of states are measured." },
      { term: "$D$ matrix", def: "Direct feedthrough. Usually 0 for physical systems." },
      { term: "MIMO", def: "Multiple-input multiple-output. State space handles this naturally." }
    ],
    "first-order-response": [
      { term: "Time constant $\\tau$", def: "Time to reach 63% of final value. $\\tau = 1/$pole-magnitude." },
      { term: "Settling time $t_s$", def: "Time to enter (and stay within) a band of the final value. Common: 2%, 5%." },
      { term: "Rise time $t_r$", def: "Time to go from 10% to 90% of final value." }
    ],
    "second-order-response": [
      { term: "Natural frequency $\\omega_n$", def: "Frequency the system would oscillate at if undamped." },
      { term: "Damping ratio $\\zeta$", def: "How damped the response is. 0 = pure oscillation; 1 = no overshoot." },
      { term: "Damped frequency $\\omega_d$", def: "$\\omega_n\\sqrt{1-\\zeta^2}$. Actual oscillation frequency in step response." },
      { term: "% overshoot", def: "Peak above final value, as a percent of the final value." },
      { term: "Peak time $T_p$", def: "Time of the first peak: $\\pi/\\omega_d$." }
    ],
    "block-diagrams": [
      { term: "Summing junction", def: "Adds/subtracts incoming signals." },
      { term: "Pickoff point", def: "A signal branching to multiple downstream blocks." },
      { term: "Forward path", def: "Series of blocks from input to output." },
      { term: "Feedback path", def: "Blocks from output back to summing junction." }
    ],
    "signal-flow-mason": [
      { term: "Node", def: "A signal." },
      { term: "Branch", def: "A directed arrow with gain." },
      { term: "Loop", def: "A closed sequence of branches returning to the starting node." },
      { term: "Loop gain", def: "Product of branch gains around the loop." },
      { term: "Non-touching loops", def: "Share no common node." }
    ],
    "routh-hurwitz": [
      { term: "Characteristic equation", def: "Denominator of closed-loop $T(s)$ set to zero." },
      { term: "First column", def: "The leftmost column of the Routh array — sign changes there count RHP roots." },
      { term: "Auxiliary polynomial", def: "Used when an entire row vanishes — built from coefficients in the row above." }
    ],
    "steady-state-errors": [
      { term: "System type", def: "Number of pure integrators ($s = 0$ poles) in the open loop." },
      { term: "$K_p$", def: "Position error constant: $\\lim_{s\\to 0} G(s)$." },
      { term: "$K_v$", def: "Velocity error constant: $\\lim_{s\\to 0} sG(s)$." },
      { term: "$K_a$", def: "Acceleration error constant: $\\lim_{s\\to 0} s^2 G(s)$." }
    ],
    "root-locus": [
      { term: "Branch", def: "Path traced by one closed-loop pole as $K$ varies." },
      { term: "Asymptote", def: "Line that branches approach as they head to infinity." },
      { term: "Centroid", def: "Where asymptotes meet on the real axis." },
      { term: "Breakaway point", def: "Where branches leave the real axis (or enter it: break-in)." },
      { term: "$j\\omega$ crossing", def: "Value of $K$ at which a branch crosses the imaginary axis (stability boundary)." }
    ],
    "root-locus-design": [
      { term: "PD controller", def: "Proportional-Derivative. Equivalent to lead with the pole at infinity (idealized)." },
      { term: "Lead", def: "Compensator with zero closer to origin than pole. Phase boost." },
      { term: "Lag", def: "Compensator with pole closer to origin than zero. DC gain boost." },
      { term: "Pole-zero cancellation", def: "Compensator zero placed at a slow plant pole to neutralize it." }
    ],
    "bode-plots": [
      { term: "Decibel (dB)", def: "$20 \\log_{10}|G|$. A factor of 10 in magnitude is 20 dB." },
      { term: "Decade", def: "A factor of 10 in frequency." },
      { term: "Corner frequency", def: "Frequency at which a pole or zero contributes its bend (= $|s|$ of the pole/zero)." },
      { term: "Bandwidth", def: "Highest frequency where $|T(j\\omega)|$ stays within 3 dB of DC value." }
    ],
    "nyquist": [
      { term: "Nyquist contour", def: "Path enclosing the entire RHP — imaginary axis plus infinite semicircle." },
      { term: "Encirclement", def: "How many times the plot wraps around a specified point (here, $-1$)." },
      { term: "Argument principle", def: "Cauchy's theorem: clockwise encirclements of origin by $f$ = $Z - P$ inside the contour." }
    ],
    "gain-phase-margins": [
      { term: "Gain crossover $\\omega_{gc}$", def: "Frequency where $|G(j\\omega)| = 1$ (= 0 dB)." },
      { term: "Phase crossover $\\omega_{pc}$", def: "Frequency where $\\angle G(j\\omega) = -180°$." },
      { term: "Phase margin (PM)", def: "$180° + \\angle G(j\\omega_{gc})$. How much extra phase lag the loop tolerates." },
      { term: "Gain margin (GM)", def: "$1/|G(j\\omega_{pc})|$. How much extra gain the loop tolerates." }
    ],
    "lead-lag": [
      { term: "$\\alpha$", def: "Ratio $z/p$ in a lead. $\\alpha < 1$." },
      { term: "$\\phi_{\\max}$", def: "Maximum phase boost from a single lead." },
      { term: "$\\omega_m$", def: "Frequency of maximum phase boost — geometric mean of corners." }
    ],
    "pid-control": [
      { term: "$K_p$", def: "Proportional gain." },
      { term: "$K_i$ or $T_i$", def: "Integral gain (or integral time)." },
      { term: "$K_d$ or $T_d$", def: "Derivative gain (or derivative time)." },
      { term: "Anti-windup", def: "Trick to prevent the integrator from accumulating when the actuator saturates." },
      { term: "Ziegler-Nichols", def: "Empirical tuning rules based on the ultimate gain and period." }
    ],
    "state-space-design": [
      { term: "Controllability", def: "Property that we can steer the state from any initial value to any target." },
      { term: "Pole placement", def: "Choosing $K$ so $A - BK$ has prescribed eigenvalues." },
      { term: "LQR", def: "Linear-Quadratic Regulator — optimal pole placement minimizing $\\int (x^T Q x + u^T R u)dt$." },
      { term: "Ackermann's formula", def: "Closed-form expression for the gain matrix $K$." }
    ],
    "state-observers": [
      { term: "Observer", def: "Algorithm that estimates the state from input + output." },
      { term: "Luenberger observer", def: "Standard linear observer with gain $L$." },
      { term: "Kalman filter", def: "Optimal observer for systems with Gaussian noise." },
      { term: "Innovation", def: "$y - C\\hat x$. The 'surprise' that updates the state estimate." },
      { term: "Separation principle", def: "Controller and observer can be designed independently." }
    ],
    "digital-control": [
      { term: "Sampling period $T$", def: "Time between samples." },
      { term: "$z$-transform", def: "Discrete-time analog of Laplace: $F(z) = \\sum f[k] z^{-k}$." },
      { term: "Unit circle", def: "Boundary of stability in $z$-plane." },
      { term: "Zero-order hold", def: "Reconstructs continuous signal by holding the last sample." },
      { term: "Aliasing", def: "Frequencies above Nyquist fold back into the visible band when sampling too slow." }
    ]
  });

  // ===== TASK EXPLANATIONS =====
  Object.assign(window.TASK_EXPLAIN, {
    "intro-control": [
      "No measurement → open loop. Bread doesn't tell the toaster how done it is.",
      "Lane-keeping uses cameras (sensors), computes steering (controller), drives the car (actuator). Output (car position) feeds back to input. → Closed loop.",
      "The controller's job is to drive the error to zero — it operates on the error signal.",
      "Error = reference − output = $50 - 47 = 3$.",
      "Sensor output is subtracted from the reference at the summing junction.",
      "Open-loop control has no way to know about disturbances — that's its biggest weakness.",
      "Too much loop gain → small disturbances get amplified before the feedback can correct them → oscillation or instability.",
      "Microwave timer just counts down — no sensor for actual food temperature.",
      "ABS measures wheel speed, modulates brake pressure to prevent skid → feedback.",
      "Negative feedback: the fed-back signal is subtracted from the reference. That's why it's drawn with a minus sign."
    ],
    "laplace-transforms-control": [
      "By definition: $\\int_0^\\infty e^{-st}dt = 1/s$ (for $\\operatorname{Re} s > 0$).",
      "By definition: $\\int_0^\\infty e^{-at}e^{-st}dt = 1/(s+a)$.",
      "Integration by parts on $\\int_0^\\infty t e^{-st}dt$ gives $1/s^2$.",
      "From $\\sin\\omega t = (e^{j\\omega t} - e^{-j\\omega t})/(2j)$ → $\\mathcal{L}\\{\\sin\\omega t\\} = \\omega/(s^2+\\omega^2)$.",
      "From $\\cos\\omega t = (e^{j\\omega t} + e^{-j\\omega t})/2$ → $s/(s^2+\\omega^2)$.",
      "Differentiation rule: $\\mathcal{L}\\{\\dot f\\} = sF(s) - f(0)$. With $f(0)=0$, just $sF(s)$.",
      "$f(0^+) = \\lim_{s\\to\\infty} sF(s) = \\lim (5s^2 + 10s)/(s^2 + 3s + 2) = 5$.",
      "$f(\\infty) = \\lim_{s\\to 0} sF(s) = \\lim 8/(s+4) = 2$.",
      "Cover-up at $s = 0$: $A = 1/(0+2) = 1/2$.",
      "$\\mathcal{L}^{-1}\\{1/(s+a)^2\\} = te^{-at}$. Here $a = 3$."
    ],
    "transfer-functions": [
      "DC gain = $G(0) = 4/8 = 0.5$.",
      "Denominator $s^3 + 3s^2 + 2s = s(s+1)(s+2)$ → 3 roots → 3 poles.",
      "Numerator $s+1$ → one root → one zero.",
      "Roots of $(s+2)(s+3)$ are $s = -2, -3$.",
      "$s^2 + 4 = 0 \\Rightarrow s = \\pm 2j$.",
      "Definition of proper. Improper (more zeros than poles) is non-causal — impossible physically.",
      "All poles in LHP = stable, by definition.",
      "Highest power in the denominator is $s^4$ → 4th order.",
      "$G(0) = K/10 = 5 \\Rightarrow K = 50$.",
      "$1/s$ is an integrator (Laplace of $\\int dt$)."
    ],
    "electrical-modeling-control": [
      "Standard impedance for an inductor in s-domain.",
      "Standard impedance for a capacitor in s-domain.",
      "Resistor doesn't store energy — impedance is frequency-independent.",
      "$\\tau = RC = 1000 \\times 10^{-6} = 10^{-3}$ s = 1 ms.",
      "$\\omega_c = 1/(RC) = 1/(10^4 \\cdot 10^{-7}) = 10^3 = 1000$ rad/s.",
      "Output across R passes high frequencies (capacitor blocks DC) → high-pass.",
      "$\\omega_n = 1/\\sqrt{LC} = 1/\\sqrt{1} = 1$ rad/s.",
      "Gain = $-R_f/R_i = -100/10 = -10$.",
      "Ideal op-amp has infinite input impedance → zero input current.",
      "Negative feedback drives the inverting input to match the non-inverting input → virtual short."
    ],
    "mechanical-modeling-control": [
      "Damper force is proportional to velocity: $f = bv$.",
      "Hooke's law: $f = kx$.",
      "Newton's second law: $f = ma$.",
      "$\\omega_n = \\sqrt{k/m} = \\sqrt{16/4} = 2$ rad/s.",
      "$\\zeta = b/(2\\sqrt{km}) = 2/(2\\sqrt{1}) = 1$.",
      "$\\zeta = 1$ is the critical damping boundary — fastest non-oscillatory.",
      "$\\zeta < 1$ → complex conjugate poles → oscillation.",
      "$J$ plays the same role as $m$ but for rotation: $T = J\\alpha$.",
      "Torque is the rotational analog of force: $T = Fr$.",
      "Car body position (heave) is the output you feel; spring-damper is between body and wheel."
    ],
    "state-space": [
      "An $n$th-order ODE has $n$ initial conditions → $n$ states fully describe the memory.",
      "If $D = 0$, no direct feedthrough → strictly proper transfer function (numerator degree < denominator).",
      "Diagonal matrix → eigenvalues are the diagonal entries.",
      "Free response is $e^{At}\\mathbf x(0)$. Eigenvalues of $A$ determine stability.",
      "3 states × 2 inputs → $B$ is $3\\times 2$.",
      "1 output × 3 states → $C$ is $1\\times 3$.",
      "If $x_1 = y, x_2 = \\dot y, x_3 = \\ddot y$, then each $\\dot x_i = x_{i+1}$ — a chain of integrators.",
      "Controllable canonical form: $B = [0,0,\\ldots,0,1]^T$ — input enters only the last integrator.",
      "Equivalent to all poles in LHP — same concept, matrix form.",
      "State space generalizes naturally to MIMO; transfer functions become matrix-valued."
    ],
    "first-order-response": [
      "$\\tau = 1/$pole-magnitude = $1/10 = 0.1$ s.",
      "$\\tau = 1/4 = 0.25$ s.",
      "$t_s \\approx 4\\tau = 4 \\times 0.5 = 2$ s.",
      "$t_r \\approx 2.2\\tau = 2.2 \\times 0.5 = 1.1$ s.",
      "$G(0) = 10/5 = 2$.",
      "$1 - e^{-1} \\approx 0.632$, i.e., 63.2%.",
      "$1 - e^{-3} \\approx 0.95$, i.e., 95%.",
      "Pole = $-a$ where $a$ is the constant in $s + a$. Here $a = 8$.",
      "Farther left = larger $|\\sigma|$ = smaller $\\tau$ = faster decay.",
      "$G(s) = 6/(2s+4) = 3/(s+2)$. DC gain = $3/2 = 1.5$."
    ],
    "second-order-response": [
      "$\\omega_n^2 = 100 \\Rightarrow \\omega_n = 10$.",
      "$2\\zeta\\omega_n = 8 \\Rightarrow \\zeta = 8/20 = 0.4$.",
      "$\\zeta = 1$ is the critical damping boundary.",
      "$\\zeta > 1$ → real distinct poles → no oscillation, slower than critical.",
      "$\\%OS = 100e^{-0.707\\pi/\\sqrt{0.5}} = 100e^{-3.14} \\approx 4.3\\%$.",
      "$\\%OS = 100e^{-0.5\\pi/\\sqrt{0.75}} = 100e^{-1.81} \\approx 16.3\\%$.",
      "$T_s = 4/(\\zeta\\omega_n) = 4/(0.5 \\times 4) = 2$ s.",
      "$\\omega_d = 10\\sqrt{0.64} = 8$; $T_p = \\pi/8 \\approx 0.393$ s.",
      "$\\omega_d = \\omega_n\\sqrt{1-\\zeta^2}$ — damped natural frequency formula.",
      "$\\omega_n = 5$, $\\zeta = 0.6$, $\\omega_d = 5(0.8) = 4$ → poles at $-3 \\pm 4j$."
    ],
    "block-diagrams": [
      "Series → multiply: $1/(s+1) \\times 4 = 4/(s+1)$.",
      "Parallel → add: $1/s + 2/s = 3/s$.",
      "Standard closed-loop with $H = 1$: $T = G/(1+G)$.",
      "Positive feedback flips the sign in the denominator: $G/(1 - GH)$.",
      "$T = G/(1+GH) = 4/(1 + 2) = 4/3$.",
      "$T = 100/(1+100) \\approx 1$. High loop gain makes output track reference.",
      "$T = G/(1+GH) \\approx (GH)/(GH) \\cdot (1/H) = 1/H$ when $|GH|\\gg 1$.",
      "Closed-loop denominator $(s^2+3s+2) + (s+1) = s^2 + 4s + 3$ — still 2nd order.",
      "Moving a summing junction past a block: the signal entering must be multiplied by the block to preserve equivalence.",
      "$G_1 = G_2 = G$ in series → $G \\cdot G \\cdot \\ldots = G^n$."
    ],
    "signal-flow-mason": [
      "$\\Delta$ is called the determinant of the graph.",
      "By definition: $\\Delta_k$ is computed from $\\Delta$ by removing loops that share nodes with path $k$.",
      "Non-touching = no shared nodes (and therefore no shared branches).",
      "Negative loop gain in $\\Delta$ appears with sign flipped: $1 - (-GH) = 1 + GH$.",
      "If the path touches all loops, all loops are removed → $\\Delta_k = 1$.",
      "Triple-product term in $\\Delta$ is $-L_1 L_2 L_3$ when all three pairs are non-touching.",
      "Linear branch: output = gain × input.",
      "A self-loop at one node is a local feedback at that node.",
      "Mason handles arbitrary loop topology without iterative reduction.",
      "Loop gain product preserves all signs from the branches."
    ],
    "routh-hurwitz": [
      "If any coefficient is negative (while others positive), there must be RHP roots → unstable.",
      "Sign changes in the first column count RHP poles. Stable means zero changes.",
      "Routh: $s^3$: 1, 3.  $s^2$: 2, 6.  $s^1$: $(2\\cdot 3 - 1\\cdot 6)/2 = 0$ — row of zeros → poles on $j\\omega$.",
      "Routh: $s^3$: 1, 1.  $s^2$: 1, 1.  $s^1$: $(1-1)/1 = 0$ — row of zeros. Auxiliary $s^2+1 = 0$ → poles at $\\pm j$, not asymptotically stable.",
      "$s^3 - s + 4$ has negative coefficient → 2 sign changes in Routh first column = 2 RHP poles.",
      "Counterexample exists: even with all positive coefficients, Routh first column can have a sign change. Necessity but not sufficiency.",
      "Routh: $s^3$: 1, 2.  $s^2$: 3, K.  $s^1$: $(6-K)/3 > 0 \\Rightarrow K < 6$. $s^0$: $K > 0$.",
      "Row of zeros → poles on imaginary axis (marginal stability).",
      "Routh tells us how many poles are in RHP, but not where they are.",
      "Delays $e^{-sT}$ are not polynomials, so Routh doesn't directly apply."
    ],
    "steady-state-errors": [
      "System type = order of pole at origin (number of integrators) in the open-loop.",
      "Type-0 to step: finite, nonzero error.",
      "Type-1 has a free integrator → no steady-state error to a step.",
      "Type-1 to a ramp: finite nonzero error $= 1/K_v$.",
      "Type-0 can't keep up with a ramp — error grows without bound.",
      "By definition: $K_p$ is the DC gain.",
      "By definition: $K_v$ scales as $s$ at low frequency.",
      "$G(0) = 20/20 = 1$. So $K_p = 1$.",
      "$e_{ss} = 1/(1+K_p) = 1/2 = 0.5$.",
      "Each integrator increases type by 1."
    ],
    "root-locus": [
      "Branches start at open-loop poles ($K=0$) → number of branches = number of poles.",
      "By definition, $K = 0$ → closed-loop poles = open-loop poles.",
      "Open-loop zeros are where branches end (or infinity, if zeros at infinity).",
      "$n$ poles - $m$ zeros = number going to infinity along asymptotes.",
      "$\\pm 90°$ for $n - m = 2$: standard.",
      "$\\pm 45°, \\pm 135°$ for $n - m = 4$.",
      "Real-axis rule: odd count of poles + zeros to the right.",
      "Complex poles come in conjugate pairs → root locus is symmetric about the real axis.",
      "Solve $dK/ds = 0$ on a real-axis interval to find break(away)/break(in) points.",
      "Magnitude condition: $|G(s)H(s)| = 1/K$ (or $K|GH| = 1$) on the locus."
    ],
    "root-locus-design": [
      "Adding a zero pulls the locus toward it → leftward shift if zero is in LHP.",
      "Lead: $z < p$. Geometry: zero closer to origin than pole.",
      "Lag: $z > p$. Pole closer to origin than zero.",
      "Lead boosts phase margin → improves transient (faster, less overshoot).",
      "Lag boosts low-frequency gain → improves steady-state error.",
      "Pure PD = $K_p + K_d s$. Has zero at $-K_p/K_d$ and 'pole at infinity.'",
      "Cancelling a slow plant pole with the compensator zero is called pole-zero cancellation.",
      "Cancellation only works if the model is exact — modeling errors leave a slow residual mode.",
      "Maximum lead phase is just under $90°$, achieved in the limit $\\alpha \\to 0$.",
      "Higher $\\zeta$ → smaller overshoot."
    ],
    "bode-plots": [
      "$20\\log_{10}(1) = 0$ dB.",
      "$20\\log_{10}(0.1) = -20$ dB.",
      "Single pole: $-20$ dB/dec asymptotic above corner.",
      "Single zero: $+20$ dB/dec above corner.",
      "Pole phase asymptotically $-90°$ at high frequency.",
      "Integrator: $-90°$ everywhere (constant).",
      "Constant gain has zero phase shift.",
      "$1/s^2$: two integrators → $-40$ dB/dec at all frequencies.",
      "$20\\log_{10}(100) = 40$ dB.",
      "Bandwidth defined as the $-3$ dB point."
    ],
    "nyquist": [
      "$P$ = number of unstable open-loop poles.",
      "$N$ counts clockwise encirclements of the critical point $-1$.",
      "$P = 0$ and $N = 1$ (clockwise) → $Z = 1$ → 1 closed-loop RHP pole → unstable.",
      "No encirclements and stable open loop → $Z = 0$ → stable.",
      "$1/(1+j\\omega)$ traces a semicircle in the right half-plane (positive real, negative imaginary).",
      "Bode and Nyquist both use $s = j\\omega$ — Nyquist is the polar form of the same data.",
      "PM is measured at the gain crossover.",
      "GM is measured at the phase crossover.",
      "By definition: phase crossover is where $\\arg G = -180°$.",
      "By definition: gain crossover is where $|G| = 1$ (= 0 dB)."
    ],
    "gain-phase-margins": [
      "Industry rule of thumb: PM 30° to 60° (45° is a sweet spot).",
      "Typical spec: GM ≥ 6 dB (factor of 2 in gain).",
      "PM = 0 is the boundary of instability.",
      "Larger PM → more damping → less ringing.",
      "GM = 0 dB → on the edge → marginally stable (oscillates).",
      "Phase margin uses the phase at the gain crossover.",
      "Gain margin uses the magnitude at the phase crossover.",
      "Rule: $\\zeta \\approx \\text{PM}/100$ → $0.9$ for PM = 90°.",
      "Integral action adds $-90°$ at low frequency → reduces PM if not compensated.",
      "Lead compensation adds positive phase → increases PM."
    ],
    "lead-lag": [
      "Lead has $z < p$ (zero closer to origin).",
      "Lag has $z > p$ (pole closer to origin).",
      "Lead boosts phase (positive contribution).",
      "Lag adds negative phase (small if placed correctly).",
      "Lead is for transient improvement: faster response, more damping.",
      "Lag is for steady-state: reduces $e_{ss}$ by boosting low-frequency gain.",
      "Single lead section maxes out around 75° (approaching 90° asymptotically).",
      "Lead-lag = both effects but more parameters to tune.",
      "Lag: $z/p$ ratio sets the DC boost. 20× boost → $z/p = 20$.",
      "Lag pole placed at low frequency so its phase lag doesn't hurt PM at crossover."
    ],
    "pid-control": [
      "P = proportional.",
      "I = integral.",
      "D = derivative.",
      "Integral term drives steady-state error to zero for step inputs (adds a free integrator).",
      "Derivative term adds damping via prediction.",
      "Derivative of noisy sensor signal blows up — noisiest term.",
      "PID: two zeros (from $K_d s^2 + K_p s + K_i$) and one pole at $s = 0$.",
      "One pole at origin (the integrator).",
      "$K_p = 0.6 K_u$ in Ziegler-Nichols ultimate-gain method.",
      "Windup happens when actuator saturates and integrator keeps accumulating error."
    ],
    "state-space-design": [
      "Controllability matrix is $[B\\ AB\\ A^2 B\\ \\ldots A^{n-1}B]$ — $n$ columns for SISO.",
      "Rank-$n$ controllability matrix ⇔ controllable.",
      "Observability matrix is $[C; CA; \\ldots; CA^{n-1}]$ — uses $A$ and $C$.",
      "You can't place a pole that you can't influence with the input → controllability needed.",
      "You can't reconstruct a state you can't see → observability needed.",
      "Standard full-state feedback: $A_{cl} = A - BK$.",
      "LQR minimizes a quadratic cost $\\int (x^T Q x + u^T R u)dt$.",
      "Separation principle: controller and observer eigenvalues are independent in cascade.",
      "Kalman filter is the optimal estimator under Gaussian noise.",
      "Hautus test (PBH): controllability via rank of $[\\lambda I - A,\\ B]$ at each eigenvalue."
    ],
    "state-observers": [
      "Standard notation: $\\hat x$ for estimate, $x$ for true state.",
      "Error dynamics $\\dot e = (A - LC)e$ where $L$ is observer gain.",
      "Eigenvalues of $A - LC$ must be in LHP → $e \\to 0$.",
      "Observer should converge faster than controller dynamics so estimate doesn't lag.",
      "Common rule: observer 2-10× faster than dominant controller poles.",
      "Reduced-order observer estimates only the unmeasured states (saving computation).",
      "Kalman is the optimal observer for systems with process and measurement noise.",
      "Duality: observability of $(A,C)$ = controllability of $(A^T, C^T)$.",
      "3 states × 2 outputs → $L$ is $3\\times 2$.",
      "Observer requires observability — without it, you can't reconstruct all states."
    ],
    "digital-control": [
      "Discrete stability: poles inside the unit disk $|z| < 1$.",
      "$\\mathcal{Z}\\{\\delta[k]\\} = 1$ by definition (one nonzero sample at $k=0$).",
      "Geometric series: $\\sum a^k z^{-k} = z/(z-a)$.",
      "$z = e^{sT} = e^{-0.5} \\approx 0.607$.",
      "Nyquist: $f_s > 2 f_{\\max}$ to avoid aliasing.",
      "Aliasing occurs when sampling rate is below Nyquist.",
      "ZOH holds the last sample constant until the next.",
      "Tustin (bilinear) is a popular continuous-to-discrete mapping.",
      "Jury's test is the discrete analog of Routh-Hurwitz.",
      "Difference equations are the discrete analog of ODEs."
    ]
  });

  // ===== MISCONCEPTIONS =====
  Object.assign(window.MISCONCEPTIONS, {
    "intro-control": [
      { wrong: "More feedback is always better.", right: "Too much loop gain can destabilize the system — feedback amplifies its own decisions, and timing errors get amplified." },
      { wrong: "Open-loop control is bad.", right: "Open-loop is fine when the plant is well-known and disturbances are absent. A microwave timer works perfectly well." }
    ],
    "transfer-functions": [
      { wrong: "DC gain is just the leading coefficient ratio.", right: "DC gain is $G(s)|_{s=0}$ — substitute zero everywhere, including in the constant term." },
      { wrong: "Stability depends on the numerator.", right: "Stability depends ONLY on the denominator (the poles). Numerator (zeros) affects shape of response, not stability." }
    ],
    "second-order-response": [
      { wrong: "Critically damped ($\\zeta=1$) is the 'fastest' response.", right: "Critically damped is the fastest <em>without overshoot</em>. Underdamped responses (typically $\\zeta \\approx 0.7$) are actually faster to first reach the target." },
      { wrong: "More damping always helps.", right: "More damping reduces overshoot but slows the response — there's a trade-off." }
    ],
    "routh-hurwitz": [
      { wrong: "All-positive coefficients means stable.", right: "Necessary but NOT sufficient. You still have to build the Routh array and check the first column." },
      { wrong: "Routh tells me exact pole locations.", right: "Routh tells you only how many poles are in the RHP (and on $j\\omega$), not where exactly." }
    ],
    "root-locus": [
      { wrong: "Root locus is plotted in the s-plane vs frequency.", right: "Root locus is plotted in the s-plane vs the gain $K$, not frequency." },
      { wrong: "Adding a zero always stabilizes.", right: "Adding a zero in the LHP usually helps, but a zero in the RHP (non-minimum phase) makes things harder." }
    ],
    "bode-plots": [
      { wrong: "Bode magnitude in dB is the log of the gain.", right: "It's $20\\log_{10}|G|$. Don't forget the factor of 20." },
      { wrong: "Phase always starts at 0°.", right: "Phase starts at 0° only if there are no integrators. Each integrator adds $-90°$." }
    ],
    "pid-control": [
      { wrong: "Higher $K_p$ always means faster response.", right: "Too high $K_p$ causes overshoot, ringing, or instability." },
      { wrong: "Adding $K_d$ always improves transient.", right: "Derivative amplifies measurement noise — in practice you need a derivative filter." }
    ],
    "state-space-design": [
      { wrong: "If a system is unobservable, I can still place all poles.", right: "Pole placement needs controllability; observer design needs observability. Unobservable modes can't be reconstructed." }
    ],
    "digital-control": [
      { wrong: "Sampling faster is always better.", right: "Sampling too fast can be expensive (CPU) and can amplify quantization noise. Sample at 10-20× the bandwidth, not 1000×." }
    ]
  });

  // ===== EXPLAIN (per worked example, ELI5) =====
  Object.assign(window.EXPLAIN, {
    "intro-control": [
      "Toaster has no eyes — it just runs the timer. Cruise control has a speedometer — it watches the road and adjusts.",
      "Set the dial to a temperature. Sensor watches the room. Controller compares. Furnace heats. Loop closes.",
      "Stable: doesn't blow up. Fast: gets there quickly. Accurate: gets there exactly. Hard part: all three at once."
    ],
    "transfer-functions": [
      "Take the differential equation, sprinkle Laplace on it, do algebra. $Y/U$ is your $G(s)$.",
      "Poles tell you the natural modes (what the system 'wants' to do). Zeros tell you what shapes get killed.",
      "DC gain = how big the steady-state output is for a constant input of 1."
    ],
    "second-order-response": [
      "Look at $s^2 + 2\\zeta\\omega_n s + \\omega_n^2$ and match coefficients term by term.",
      "Two numbers fully describe the bounce: how often it oscillates ($\\omega_n$) and how quickly the bounces fade ($\\zeta$).",
      "Peak time and settling time are functions of $\\omega_n$ and $\\zeta$. Memorize the two formulas, you can answer most 2nd-order questions."
    ],
    "routh-hurwitz": [
      "Make a table, cross-multiply, count sign changes in the leftmost column. Zero changes = stable.",
      "Find what values of $K$ keep all entries positive. That's your stable range.",
      "Row of zeros means imaginary-axis poles — system rings forever, not stable."
    ],
    "root-locus": [
      "Where do the closed-loop poles go as $K$ increases? That curve is your root locus.",
      "Find the $K$ at which the locus crosses the $j\\omega$ axis — that's your stability limit.",
      "Breakaway: $dK/ds = 0$. Plug in the constraint and solve."
    ],
    "pid-control": [
      "P does the heavy lifting NOW. I cleans up the residual error. D damps the oscillation.",
      "Ziegler-Nichols: find the gain at which the system just barely oscillates, then back off and use the rules.",
      "$G_c = K_p + K_i/s + K_d s$ — three terms, three knobs."
    ]
  });

  // ===== CONNECTIONS =====
  Object.assign(window.CONNECTIONS, {
    "intro-control": {
      prereq: [],
      next: ["laplace-transforms-control", "transfer-functions"],
      realWorld: "Every modern device with active regulation: cars (cruise, ABS, ESP), aircraft (autopilot), HVAC, robotics, power grid frequency, drug delivery pumps, even the closed-loop of a 3D printer's filament feed."
    },
    "laplace-transforms-control": {
      prereq: ["intro-control"],
      next: ["transfer-functions"],
      realWorld: "Underlies all classical control design, circuit analysis, signal processing — anywhere differential equations need to be solved fast."
    },
    "transfer-functions": {
      prereq: ["laplace-transforms-control"],
      next: ["electrical-modeling-control", "mechanical-modeling-control", "first-order-response", "second-order-response"],
      realWorld: "Every datasheet of an amplifier, filter, or motor lists a transfer function. It's the universal description of a linear dynamic system."
    },
    "first-order-response": {
      prereq: ["transfer-functions"],
      next: ["second-order-response", "pid-control"],
      realWorld: "Thermal systems (oven heat-up), RC filters in audio, motor speed control inner loops."
    },
    "second-order-response": {
      prereq: ["first-order-response"],
      next: ["block-diagrams", "routh-hurwitz"],
      realWorld: "Car suspensions, building seismic isolation, satellite attitude after a thruster impulse, op-amp step response."
    },
    "block-diagrams": {
      prereq: ["transfer-functions"],
      next: ["signal-flow-mason", "routh-hurwitz", "steady-state-errors"],
      realWorld: "How control systems are documented in industry — every controls textbook diagram, every Simulink model."
    },
    "routh-hurwitz": {
      prereq: ["block-diagrams"],
      next: ["root-locus", "steady-state-errors"],
      realWorld: "First-pass stability check before any simulation. Still used in modern tools (e.g., to find stable gain ranges symbolically)."
    },
    "steady-state-errors": {
      prereq: ["block-diagrams"],
      next: ["root-locus-design", "pid-control"],
      realWorld: "Determines whether a CNC mill, robot arm, or aircraft autopilot can hold its target exactly or only approximately."
    },
    "root-locus": {
      prereq: ["routh-hurwitz"],
      next: ["root-locus-design", "bode-plots"],
      realWorld: "Used in motor drive tuning, autopilot design, any place a gain has to be set with stability/damping guarantees."
    },
    "root-locus-design": {
      prereq: ["root-locus"],
      next: ["lead-lag", "pid-control"],
      realWorld: "Classical fix for slow plants — lead compensators in disk drive head positioning, servo amplifiers."
    },
    "bode-plots": {
      prereq: ["transfer-functions"],
      next: ["nyquist", "gain-phase-margins", "lead-lag"],
      realWorld: "Every audio amp, every loop tuning, every EMC analysis. Used on the bench with a frequency response analyzer."
    },
    "nyquist": {
      prereq: ["bode-plots"],
      next: ["gain-phase-margins"],
      realWorld: "Essential when the open loop has unstable poles (e.g., inverted pendulum, magnetic levitation)."
    },
    "gain-phase-margins": {
      prereq: ["bode-plots", "nyquist"],
      next: ["lead-lag", "pid-control"],
      realWorld: "Acceptance criterion in flight control, automotive controllers, industrial process loops."
    },
    "lead-lag": {
      prereq: ["bode-plots"],
      next: ["pid-control"],
      realWorld: "Classical compensator structure used in hard disk drives, optical disk read heads, servo amps."
    },
    "pid-control": {
      prereq: ["block-diagrams", "steady-state-errors"],
      next: ["state-space-design", "digital-control"],
      realWorld: "Over 95% of industrial control loops are PID. From baby incubators to oil refineries."
    },
    "state-space": {
      prereq: ["transfer-functions"],
      next: ["state-space-design", "state-observers"],
      realWorld: "Modern control — rocket attitude, drone flight, MIMO chemical plants. Standard in MATLAB/Simulink and aerospace tools."
    },
    "state-space-design": {
      prereq: ["state-space"],
      next: ["state-observers", "digital-control"],
      realWorld: "LQR/Kalman design used in aerospace (e.g., Apollo navigation), automotive ECUs, GPS receivers."
    },
    "state-observers": {
      prereq: ["state-space-design"],
      next: ["digital-control"],
      realWorld: "Sensorless motor control, GPS/INS fusion, target tracking, virtual sensors in engines."
    },
    "digital-control": {
      prereq: ["state-space-design", "pid-control"],
      next: [],
      realWorld: "Every embedded controller in the world. Microcontrollers in cars, drones, IoT, robotics."
    },
    "electrical-modeling-control": {
      prereq: ["transfer-functions"],
      next: ["mechanical-modeling-control"],
      realWorld: "Op-amp PIDs, anti-alias filters, audio crossovers, power-supply control loops."
    },
    "mechanical-modeling-control": {
      prereq: ["transfer-functions"],
      next: ["second-order-response"],
      realWorld: "Robot arms, vehicle dynamics, building structural control, MEMS gyroscopes."
    },
    "signal-flow-mason": {
      prereq: ["block-diagrams"],
      next: [],
      realWorld: "Communication systems analysis, large electronic networks, formal control synthesis tools."
    }
  });
})();
