// Control Systems Engineering content — based on Norman S. Nise's textbook.
// All chapter references below are to Nise, "Control Systems Engineering" (7th ed.).

window.CONTENT = window.CONTENT || {};
window.CONTENT.control = [

  // ===================== CHAPTER 1 — INTRODUCTION =====================
  {
    id: "intro-control",
    title: "Introduction to Control Systems",
    level: "basic",
    summary: "Open- vs closed-loop systems, the feedback principle, plant, controller, sensor, error.",
    examples: [
      {
        title: "Example 1 — Open-loop vs closed-loop",
        prompt: "A toaster runs for a fixed time set by a dial — bread may come out raw or burnt. A car cruise control measures speed and adjusts the throttle. Classify each.",
        steps: [
          { label: "Toaster", body: "There is no measurement of how toasted the bread actually is. The output (toastiness) does not feed back into the input (heating time). <strong>Open-loop.</strong>" },
          { label: "Cruise control", body: "Measures actual speed, compares with the set point, and adjusts the throttle to drive the difference to zero. The output (speed) feeds back into the input. <strong>Closed-loop.</strong>" },
          { label: "Why feedback matters", body: "Closed-loop systems automatically reject disturbances — going up a hill the car slows, the error grows, the throttle opens. Open-loop cannot." }
        ],
        answer: "Toaster — open-loop; cruise control — closed-loop. Closed-loop systems use the output to correct themselves."
      },
      {
        title: "Example 2 — Identify the blocks",
        prompt: "Draw the block diagram of a home thermostat heating system. Label plant, controller, sensor, set point, error.",
        steps: [
          { label: "Set point (reference)", body: "Desired temperature you dial in: <code>R(s)</code>, say 22 °C." },
          { label: "Sensor (feedback)", body: "Thermometer reports current room temperature <code>C(s)</code>." },
          { label: "Error", body: "Summing junction: <code>E(s) = R(s) − C(s)</code>. If room is at 20 °C, error is +2 °C." },
          { label: "Controller", body: "Decides what to do with the error — simplest: turn furnace on if <code>E > 0</code>, off otherwise. PID would scale the response." },
          { label: "Plant", body: "The furnace + room. Heat flows in, temperature rises, with dynamics (thermal mass = lag)." }
        ],
        answer: "R → ⊕(−) → Controller → Plant → C; Sensor closes the loop from C back to the ⊕."
      },
      {
        title: "Example 3 — Why we want fast, accurate, stable systems",
        prompt: "List the three primary performance requirements every control engineer tries to meet, and a real-world cost when each fails.",
        steps: [
          { label: "Stability", body: "The output stays bounded. Loss: an unstable autopilot flips the plane." },
          { label: "Speed (transient response)", body: "How fast it reaches the set point. Loss: an elevator that takes 5 min to reach a floor is useless." },
          { label: "Accuracy (steady-state error)", body: "Final value matches the set point. Loss: a CNC mill cutting 0.5 mm short on every part scraps the batch." }
        ],
        answer: "Stability, transient response, steady-state error. All three at once — that's the design problem."
      }
    ],
    tasks: [
      { q: "A washing machine that runs a preset cycle regardless of how clean clothes get is open- or closed-loop?", a: "Open-loop" },
      { q: "Is an autonomous car's lane-keeping system open- or closed-loop?", a: "Closed-loop" },
      { q: "In a feedback control system, the controller acts on which signal: the reference, the error, or the output?", a: "Error" },
      { q: "If the reference is 50 and the measured output is 47, what is the error?", a: "3" },
      { q: "The sensor in a closed-loop temperature system reports the room temperature. Where in the block diagram does its signal go?", a: "Back to the summing junction" },
      { q: "Open-loop systems are simpler but cannot reject what?", a: "Disturbances" },
      { q: "Closed-loop systems can become unstable if the feedback gain is too what?", a: "High" },
      { q: "Name one open-loop system used at home (other than the toaster).", a: "Microwave timer" },
      { q: "Name one closed-loop system in a car (other than cruise control).", a: "Anti-lock brakes" },
      { q: "The summing junction in a feedback diagram computes which arithmetic operation on the reference and the fed-back output?", a: "Subtraction" }
    ]
  },

  // ===================== CHAPTER 2 — LAPLACE =====================
  {
    id: "laplace-transforms-control",
    title: "Laplace Transforms for Control",
    level: "basic",
    summary: "From time domain to s-domain. Why differential equations become algebra.",
    examples: [
      {
        title: "Example 1 — Transform of a step input",
        prompt: "Find the Laplace transform of $u(t) = A$ for $t \\geq 0$.",
        steps: [
          { label: "Definition", body: "The Laplace transform of any function $f(t)$ defined for $t \\geq 0$ is $\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^\\infty f(t) e^{-st}\\,dt$. The new variable $s$ is complex: $s = \\sigma + j\\omega$. We integrate over all positive time, multiplying our function by the decaying exponential $e^{-st}$." },
          { label: "Substitute $f(t) = A$ (constant)", body: "Plug $f(t) = A$ into the integral: $F(s) = \\int_0^\\infty A e^{-st}\\,dt$. Since $A$ is a constant, pull it outside: $F(s) = A \\int_0^\\infty e^{-st}\\,dt$." },
          { label: "Evaluate the integral", body: "The antiderivative of $e^{-st}$ (with respect to $t$) is $-e^{-st}/s$. So $F(s) = A \\cdot \\left[ -\\frac{e^{-st}}{s} \\right]_0^\\infty$. At $t = \\infty$: $e^{-st} \\to 0$ (assuming $\\operatorname{Re}(s) > 0$). At $t = 0$: $e^{0} = 1$. Subtracting: $F(s) = A \\cdot (0 - (-1/s)) = A/s$." }
        ],
        answer: "$\\mathcal{L}\\{A\\} = A/s$. The unit step ($A = 1$) becomes $1/s$ — the most important Laplace pair in control."
      },
      {
        title: "Example 2 — Solve $\\dot y + 3y = 6$, $y(0)=0$",
        prompt: "Use Laplace to solve this first-order ODE. Notice that with Laplace, we'll never have to find a 'general solution' or 'particular solution' separately — one algebraic equation gives everything.",
        steps: [
          { label: "Transform both sides", body: "Apply $\\mathcal{L}$ to each term. From the derivative rule, $\\mathcal{L}\\{\\dot y\\} = sY(s) - y(0)$. By linearity, $\\mathcal{L}\\{3y\\} = 3Y(s)$. And $\\mathcal{L}\\{6\\} = 6/s$ (constant times Laplace of 1). So: $sY(s) - y(0) + 3Y(s) = 6/s$. Plug in $y(0) = 0$: $(s + 3)Y(s) = 6/s$." },
          { label: "Solve algebraically", body: "This is now ordinary algebra, not calculus. Divide both sides by $(s+3)$: $Y(s) = \\dfrac{6}{s(s + 3)}$. That's the Laplace transform of the answer." },
          { label: "Partial fractions", body: "To invert, we break the rational function into pieces we recognize. Write $\\dfrac{6}{s(s+3)} = \\dfrac{A}{s} + \\dfrac{B}{s+3}$. The 'cover-up' shortcut: to find $A$, cover the $s$ factor in the original and substitute $s = 0$ in what remains: $A = 6/(0 + 3) = 2$. For $B$, cover $(s+3)$ and substitute $s = -3$: $B = 6/(-3) = -2$. Check: $\\dfrac{2}{s} - \\dfrac{2}{s+3} = \\dfrac{2(s+3) - 2s}{s(s+3)} = \\dfrac{6}{s(s+3)}$ ✓." },
          { label: "Inverse Laplace", body: "From the table: $1/s \\leftrightarrow 1$ and $1/(s + a) \\leftrightarrow e^{-at}$. So $2/s \\leftrightarrow 2$ and $-2/(s+3) \\leftrightarrow -2 e^{-3t}$. Linearity says we add: $y(t) = 2 - 2 e^{-3t}$." }
        ],
        answer: "$y(t) = 2(1 - e^{-3t})$. Verify: $\\dot y = 6 e^{-3t}$, $3y = 6 - 6 e^{-3t}$, sum $= 6$ ✓. Steady state $y(\\infty) = 2$. Time constant $\\tau = 1/3$ s."
      },
      {
        title: "Example 3 — Final-value theorem",
        prompt: "Given $Y(s) = \\dfrac{10}{s(s^2 + 4s + 5)}$, find $y(\\infty)$ without inverting.",
        steps: [
          { label: "Check stability", body: "All poles of $sY(s) = \\dfrac{10}{s^2 + 4s + 5}$ except possibly $s = 0$ must lie in left half-plane. Roots: $-2 \\pm j$ — yes, LHP. Theorem applies." },
          { label: "Apply FVT", body: "$y(\\infty) = \\lim_{s\\to 0} sY(s) = \\dfrac{10}{0 + 0 + 5} = 2$." }
        ],
        answer: "$y(\\infty) = 2$."
      }
    ],
    tasks: [
      { q: "$\\mathcal{L}\\{1\\} = ?$", a: "$1/s$" },
      { q: "$\\mathcal{L}\\{e^{-at}\\} = ?$", a: "$1/(s+a)$" },
      { q: "$\\mathcal{L}\\{t\\} = ?$", a: "$1/s^2$" },
      { q: "$\\mathcal{L}\\{\\sin\\omega t\\} = ?$", a: "$\\omega/(s^2+\\omega^2)$" },
      { q: "$\\mathcal{L}\\{\\cos\\omega t\\} = ?$", a: "$s/(s^2+\\omega^2)$" },
      { q: "$\\mathcal{L}\\{\\dot f(t)\\} = ?$ (assume $f(0)=0$)", a: "$sF(s)$" },
      { q: "Initial-value theorem for $F(s) = \\dfrac{5s+10}{s^2+3s+2}$ gives $f(0^+) = ?$", a: "5" },
      { q: "Final-value theorem for $F(s) = \\dfrac{8}{s(s+4)}$ gives $f(\\infty) = ?$", a: "2" },
      { q: "Partial fractions: $\\dfrac{1}{s(s+2)} = \\dfrac{A}{s} + \\dfrac{B}{s+2}$. Find $A$.", a: "1/2" },
      { q: "Inverse Laplace of $\\dfrac{1}{(s+3)^2}$ is?", a: "$t e^{-3t}$" }
    ]
  },

  // ===================== TRANSFER FUNCTIONS =====================
  {
    id: "transfer-functions",
    title: "Transfer Functions",
    level: "basic",
    summary: "G(s) = output/input in the s-domain. Poles, zeros, and what they tell you.",
    examples: [
      {
        title: "Example 1 — From ODE to G(s)",
        prompt: "Find $G(s) = Y(s)/U(s)$ for the system $\\ddot y + 5\\dot y + 6y = 2u$, with zero initial conditions.",
        steps: [
          { label: "Laplace both sides", body: "$s^2 Y + 5sY + 6Y = 2U$ → $(s^2 + 5s + 6) Y = 2U$." },
          { label: "Solve", body: "$G(s) = \\dfrac{Y(s)}{U(s)} = \\dfrac{2}{s^2 + 5s + 6}$." },
          { label: "Factor", body: "$s^2 + 5s + 6 = (s+2)(s+3)$. Poles at $s = -2, -3$. No zeros." }
        ],
        answer: "$G(s) = \\dfrac{2}{(s+2)(s+3)}$. Stable (poles in LHP)."
      },
      {
        title: "Example 2 — Identify poles and zeros",
        prompt: "For $G(s) = \\dfrac{10(s+1)}{s(s+4)(s^2+2s+5)}$, list all poles and zeros.",
        steps: [
          { label: "Zeros", body: "Roots of numerator: $s + 1 = 0 \\Rightarrow s = -1$. One zero." },
          { label: "Poles", body: "Roots of denominator: $s = 0$, $s = -4$, and $s^2 + 2s + 5 = 0 \\Rightarrow s = -1 \\pm 2j$." }
        ],
        answer: "Zero: $-1$. Poles: $0$, $-4$, $-1\\pm 2j$. The pair $-1\\pm 2j$ tells you oscillation will appear in the response."
      },
      {
        title: "Example 3 — DC gain",
        prompt: "For $G(s) = \\dfrac{10}{s^2 + 4s + 5}$, what is the steady-state output when the input is a unit step?",
        steps: [
          { label: "Output", body: "$Y(s) = G(s) \\cdot 1/s = \\dfrac{10}{s(s^2 + 4s + 5)}$." },
          { label: "Final-value theorem", body: "$y(\\infty) = \\lim_{s\\to 0} s Y(s) = G(0) = 10/5 = 2$." }
        ],
        answer: "DC gain = $G(0) = 2$. Step input of 1 gives steady-state output of 2."
      }
    ],
    tasks: [
      { q: "For $G(s) = \\dfrac{4}{s+8}$, what is the DC gain?", a: "0.5" },
      { q: "How many poles does $G(s) = \\dfrac{s+1}{s^3 + 3s^2 + 2s}$ have?", a: "3" },
      { q: "How many zeros does the same $G(s)$ have?", a: "1" },
      { q: "$G(s) = \\dfrac{6}{(s+2)(s+3)}$. The poles are at?", a: "$-2, -3$" },
      { q: "$G(s) = \\dfrac{1}{s^2 + 4}$. The poles are at?", a: "$\\pm 2j$" },
      { q: "A proper transfer function has degree of numerator $\\leq$ degree of denominator. True or false?", a: "True" },
      { q: "If all poles of $G(s)$ lie in the left half-plane, the system is?", a: "Stable" },
      { q: "Order of $G(s) = \\dfrac{s+1}{s^4 + 2s^3 + 3s^2 + 4s + 5}$?", a: "4" },
      { q: "$G(s) = \\dfrac{K}{s^2 + 2s + 10}$ has DC gain 5. Find $K$.", a: "50" },
      { q: "Pole at $s = 0$ means the system contains an?", a: "Integrator" }
    ]
  },

  // ===================== ELECTRICAL MODELING =====================
  {
    id: "electrical-modeling-control",
    title: "Electrical Network Modeling",
    level: "intermediate",
    summary: "RLC circuits as transfer functions. Impedance method.",
    examples: [
      {
        title: "Example 1 — RC low-pass filter",
        prompt: "Find $V_o(s)/V_i(s)$ for an RC series circuit, output across the capacitor.",
        steps: [
          { label: "Impedances", body: "Resistor: $Z_R = R$. Capacitor: $Z_C = 1/(Cs)$." },
          { label: "Voltage divider", body: "$\\dfrac{V_o}{V_i} = \\dfrac{Z_C}{Z_R + Z_C} = \\dfrac{1/(Cs)}{R + 1/(Cs)} = \\dfrac{1}{RCs + 1}$." }
        ],
        answer: "$G(s) = \\dfrac{1}{RCs+1}$. First-order; cutoff $\\omega_c = 1/(RC)$."
      },
      {
        title: "Example 2 — Series RLC",
        prompt: "Find $V_C(s)/V_i(s)$ for a series RLC circuit with output across $C$.",
        steps: [
          { label: "Loop equation", body: "$V_i = (Ls + R + 1/(Cs)) I(s)$, and $V_C = I/(Cs)$." },
          { label: "Combine", body: "$\\dfrac{V_C}{V_i} = \\dfrac{1/(Cs)}{Ls + R + 1/(Cs)} = \\dfrac{1}{LCs^2 + RCs + 1}$." }
        ],
        answer: "$G(s) = \\dfrac{1}{LCs^2 + RCs + 1}$ — classic 2nd-order; $\\omega_n = 1/\\sqrt{LC}$, $\\zeta = (R/2)\\sqrt{C/L}$."
      },
      {
        title: "Example 3 — Op-amp inverting amplifier",
        prompt: "Op-amp with input through $Z_i$, feedback $Z_f$. Find $V_o/V_i$.",
        steps: [
          { label: "Virtual short", body: "Inverting input at virtual ground; current through $Z_i$ = current through $Z_f$ (no current into op-amp)." },
          { label: "KCL", body: "$V_i/Z_i = -V_o/Z_f$." }
        ],
        answer: "$V_o/V_i = -Z_f/Z_i$. Choose $Z_i, Z_f$ as R, C combos to build filters/PID."
      }
    ],
    tasks: [
      { q: "Impedance of an inductor $L$ in s-domain?", a: "$Ls$" },
      { q: "Impedance of a capacitor $C$ in s-domain?", a: "$1/(Cs)$" },
      { q: "Impedance of a resistor $R$ in s-domain?", a: "$R$" },
      { q: "An RC low-pass has $R = 1\\,\\text{k}\\Omega$, $C = 1\\,\\mu\\text{F}$. Time constant in ms?", a: "1" },
      { q: "Cutoff frequency $\\omega_c$ of an RC low-pass with $R = 10\\,\\text{k}\\Omega$ and $C = 0.1\\,\\mu\\text{F}$ (rad/s)?", a: "1000" },
      { q: "Output across the resistor in an RC series circuit is a low-pass or high-pass filter?", a: "High-pass" },
      { q: "For a series RLC with $L = 1$ H, $C = 1$ F, $\\omega_n$ (rad/s)?", a: "1" },
      { q: "Op-amp inverting amp with $R_f = 100\\,\\text{k}\\Omega$, $R_i = 10\\,\\text{k}\\Omega$: gain?", a: "-10" },
      { q: "An ideal op-amp draws how much current into its inputs?", a: "0" },
      { q: "The two inputs of an ideal op-amp in negative feedback are at equal what?", a: "Voltage" }
    ]
  },

  // ===================== MECHANICAL MODELING =====================
  {
    id: "mechanical-modeling-control",
    title: "Mechanical System Modeling",
    level: "intermediate",
    summary: "Mass-spring-damper systems and their transfer functions.",
    examples: [
      {
        title: "Example 1 — Mass-spring-damper",
        prompt: "Mass $m$ on a spring $k$ with damper $b$, driven by force $f(t)$, position $x(t)$. Find $X(s)/F(s)$.",
        steps: [
          { label: "Newton's 2nd law", body: "$m\\ddot x + b\\dot x + kx = f(t)$." },
          { label: "Laplace", body: "$(ms^2 + bs + k)X(s) = F(s)$." }
        ],
        answer: "$G(s) = \\dfrac{1}{ms^2 + bs + k}$. Classic 2nd-order with $\\omega_n = \\sqrt{k/m}$, $\\zeta = b/(2\\sqrt{km})$."
      },
      {
        title: "Example 2 — Rotational system",
        prompt: "Disk with moment of inertia $J$, viscous friction $D$, torsional spring $K$, applied torque $T(t)$, angle $\\theta(t)$. Find $\\theta(s)/T(s)$.",
        steps: [
          { label: "Rotational Newton", body: "$J\\ddot\\theta + D\\dot\\theta + K\\theta = T$." },
          { label: "Laplace", body: "$(Js^2 + Ds + K)\\Theta = T$." }
        ],
        answer: "$G(s) = \\dfrac{1}{Js^2 + Ds + K}$. Identical structure to translational version — just relabeled."
      },
      {
        title: "Example 3 — Two masses coupled by a spring",
        prompt: "Mass 1 connected to wall by spring $k_1$, to mass 2 by spring $k_2$. Force on mass 1, find $X_2(s)/F(s)$.",
        steps: [
          { label: "Equations", body: "$m_1 \\ddot x_1 + (k_1+k_2)x_1 - k_2 x_2 = f$;  $m_2 \\ddot x_2 + k_2 x_2 - k_2 x_1 = 0$." },
          { label: "Laplace and solve", body: "Treat as $2\\times 2$ system in $X_1, X_2$. Use Cramer's rule." },
          { label: "Result", body: "$X_2/F = k_2 / \\Delta$, where $\\Delta = (m_1 s^2 + k_1 + k_2)(m_2 s^2 + k_2) - k_2^2$." }
        ],
        answer: "$X_2(s)/F(s) = k_2 / [(m_1 s^2 + k_1 + k_2)(m_2 s^2 + k_2) - k_2^2]$. 4th-order — coupled bodies."
      }
    ],
    tasks: [
      { q: "Force on a damper with coefficient $b$ moving at velocity $v$: $f = ?$", a: "$bv$" },
      { q: "Force from a spring constant $k$ stretched by $x$: $f = ?$", a: "$kx$" },
      { q: "Inertial force on mass $m$ with acceleration $a$: $f = ?$", a: "$ma$" },
      { q: "$\\omega_n$ of mass-spring with $m = 4$, $k = 16$ (rad/s)?", a: "2" },
      { q: "Damping ratio of $m=1, b=2, k=1$ system?", a: "1" },
      { q: "If $\\zeta = 1$, the system is?", a: "Critically damped" },
      { q: "If $\\zeta < 1$, the system is?", a: "Underdamped" },
      { q: "Rotational analog of mass is?", a: "Moment of inertia" },
      { q: "Rotational analog of force is?", a: "Torque" },
      { q: "A car suspension is a mass-spring-damper. Output is usually which variable?", a: "Position" }
    ]
  },

  // ===================== STATE SPACE =====================
  {
    id: "state-space",
    title: "State-Space Representation",
    level: "intermediate",
    summary: "Matrix form $\\dot{\\mathbf x} = A\\mathbf x + B u$, $y = C\\mathbf x + D u$.",
    examples: [
      {
        title: "Example 1 — From ODE to state space",
        prompt: "$\\ddot y + 3\\dot y + 2y = u$. Choose states $x_1 = y$, $x_2 = \\dot y$. Find the matrices $A, B, C, D$.",
        steps: [
          { label: "Why two states", body: "This is a 2nd-order ODE — it needs TWO initial conditions ($y(0)$ and $\\dot y(0)$) to fully predict the future. So we need two state variables: one to track $y$, one to track $\\dot y$. Call them $x_1 = y$ and $x_2 = \\dot y$. Think of the state vector $\\mathbf x = (x_1, x_2)^T$ as 'everything the system needs to remember.'" },
          { label: "Compute derivatives of each state", body: "We need $\\dot x_1$ and $\\dot x_2$ in terms of $\\mathbf x$ and $u$. First: $\\dot x_1 = \\dot y$. But $\\dot y = x_2$ (by definition). So $\\dot x_1 = x_2$. Second: $\\dot x_2 = \\ddot y$. Solve the original ODE for $\\ddot y$: $\\ddot y = u - 3\\dot y - 2y = -2 x_1 - 3 x_2 + u$." },
          { label: "Read off the matrix entries", body: "Write the two equations in matrix form: $\\begin{pmatrix}\\dot x_1\\\\\\dot x_2\\end{pmatrix} = \\begin{pmatrix}0 & 1\\\\-2 & -3\\end{pmatrix}\\begin{pmatrix}x_1\\\\x_2\\end{pmatrix} + \\begin{pmatrix}0\\\\1\\end{pmatrix} u$. So $A = \\begin{pmatrix}0 & 1\\\\-2 & -3\\end{pmatrix}$, $B = \\begin{pmatrix}0\\\\1\\end{pmatrix}$. For the output: we measure $y = x_1$, so $C = (1\\ 0)$. No direct feedthrough, so $D = 0$." }
        ],
        answer: "$A = \\begin{pmatrix}0 & 1\\\\-2 & -3\\end{pmatrix}$, $B = \\begin{pmatrix}0\\\\1\\end{pmatrix}$, $C = (1\\ 0)$, $D = 0$. This is 'controllable canonical form.' Eigenvalues of $A$ are the roots of $s^2 + 3s + 2 = (s+1)(s+2) = 0$, namely $-1, -2$ — these are also the poles of the transfer function $G(s)$."
      },
      {
        title: "Example 2 — State space to transfer function",
        prompt: "Given $A = \\begin{pmatrix} 0 & 1 \\\\ -6 & -5 \\end{pmatrix}$, $B = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$, $C = (1\\ 0)$, $D = 0$. Find $G(s)$.",
        steps: [
          { label: "Formula", body: "Take Laplace of $\\dot{\\mathbf x} = A\\mathbf x + B u$ assuming $\\mathbf x(0) = 0$: $s\\mathbf X = A\\mathbf X + B U$, so $\\mathbf X = (sI - A)^{-1} B U$. Then $Y = C\\mathbf X + DU = [C(sI - A)^{-1}B + D] U$. So $G(s) = C(sI - A)^{-1} B + D$." },
          { label: "Compute $sI - A$", body: "$sI = \\begin{pmatrix} s & 0 \\\\ 0 & s \\end{pmatrix}$. Subtract $A$: $sI - A = \\begin{pmatrix} s - 0 & 0 - 1 \\\\ 0 - (-6) & s - (-5) \\end{pmatrix} = \\begin{pmatrix} s & -1 \\\\ 6 & s+5 \\end{pmatrix}$. Its determinant: $\\det(sI - A) = s(s+5) - (-1)(6) = s^2 + 5s + 6$ — this WILL be the denominator of $G(s)$." },
          { label: "Invert via adjugate formula", body: "For a 2×2 matrix $\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$, inverse is $\\frac{1}{ad-bc}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}$. So $(sI-A)^{-1} = \\dfrac{1}{s^2 + 5s + 6}\\begin{pmatrix} s+5 & 1 \\\\ -6 & s \\end{pmatrix}$." },
          { label: "Multiply $C \\cdot (sI-A)^{-1} \\cdot B$", body: "First $(sI-A)^{-1} B = \\dfrac{1}{s^2+5s+6} \\begin{pmatrix} s+5 & 1 \\\\ -6 & s \\end{pmatrix} \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\dfrac{1}{s^2+5s+6} \\begin{pmatrix} 1 \\\\ s \\end{pmatrix}$. Then $C \\cdot (\\ldots) = (1\\ 0) \\cdot \\dfrac{1}{s^2+5s+6}\\begin{pmatrix} 1 \\\\ s \\end{pmatrix} = \\dfrac{1}{s^2+5s+6}$. Adding $D = 0$ gives the final answer." }
        ],
        answer: "$G(s) = \\dfrac{1}{s^2 + 5s + 6} = \\dfrac{1}{(s+2)(s+3)}$. Poles at $-2, -3$ — exactly the eigenvalues of $A$, as expected."
      },
      {
        title: "Example 3 — Eigenvalues = poles",
        prompt: "$A = \\begin{pmatrix} -2 & 0 \\\\ 0 & -5 \\end{pmatrix}$. Find the natural modes of the system.",
        steps: [
          { label: "Eigenvalues", body: "$A$ is diagonal — eigenvalues are $-2$ and $-5$." },
          { label: "Modes", body: "Free response is sum of $e^{-2t}$ and $e^{-5t}$. Both decay — system is stable." }
        ],
        answer: "Eigenvalues $\\{-2, -5\\}$ → modes $e^{-2t}, e^{-5t}$. Stable."
      }
    ],
    tasks: [
      { q: "How many states does an $n$th-order ODE require?", a: "n" },
      { q: "Transfer function from state space: $G(s) = C(sI - A)^{-1}B + D$. If $D=0$, system is what?", a: "Strictly proper" },
      { q: "Eigenvalues of $A = \\text{diag}(-1, -3, -4)$ are?", a: "-1, -3, -4" },
      { q: "Stability of state-space system depends on eigenvalues of which matrix?", a: "A" },
      { q: "Dimension of $B$ for a 3-state, 2-input system?", a: "3x2" },
      { q: "Dimension of $C$ for a 3-state, 1-output system?", a: "1x3" },
      { q: "$x_1 = y$, $x_2 = \\dot y$, $x_3 = \\ddot y$. This is a chain of?", a: "Integrators" },
      { q: "Controllable canonical form has the input matrix $B$ equal to?", a: "$[0;0;...;1]$" },
      { q: "If all eigenvalues of $A$ have negative real parts, the system is?", a: "Asymptotically stable" },
      { q: "State-space allows MIMO systems easily. True or false?", a: "True" }
    ]
  },

  // ===================== FIRST-ORDER RESPONSE =====================
  {
    id: "first-order-response",
    title: "First-Order System Response",
    level: "basic",
    summary: "Time constant τ, rise time, settling time of $G(s) = a/(s+a)$.",
    examples: [
      {
        title: "Example 1 — Step response of $G(s) = 5/(s+5)$",
        prompt: "Compute $y(t)$ for a unit step input.",
        steps: [
          { label: "Output transform", body: "$Y(s) = \\dfrac{5}{s(s+5)}$." },
          { label: "Partial fractions", body: "$\\dfrac{5}{s(s+5)} = \\dfrac{1}{s} - \\dfrac{1}{s+5}$." },
          { label: "Inverse", body: "$y(t) = 1 - e^{-5t}$." }
        ],
        answer: "$y(t) = 1 - e^{-5t}$. Time constant $\\tau = 1/5 = 0.2$ s."
      },
      {
        title: "Example 2 — Settling time (2% criterion)",
        prompt: "For $G(s) = 1/(s+a)$ with step input, find the time to reach within 2% of final value.",
        steps: [
          { label: "Response", body: "$y(t) = (1/a)(1 - e^{-at})$. Final value $1/a$." },
          { label: "Reach 98%", body: "$1 - e^{-at_s} = 0.98 \\Rightarrow e^{-at_s} = 0.02 \\Rightarrow t_s = -\\ln(0.02)/a \\approx 3.91/a \\approx 4\\tau$." }
        ],
        answer: "$t_s \\approx 4\\tau = 4/a$. Standard rule of thumb."
      },
      {
        title: "Example 3 — Rise time",
        prompt: "Time to go from 10% to 90% of final value, $G(s) = a/(s+a)$.",
        steps: [
          { label: "Solve $y(t_{10}) = 0.1$ and $y(t_{90}) = 0.9$", body: "$1 - e^{-at_{10}} = 0.1 \\Rightarrow t_{10} = \\ln(10/9)/a \\approx 0.105/a$. $t_{90} = \\ln 10 / a \\approx 2.303/a$." },
          { label: "Difference", body: "$t_r = t_{90} - t_{10} \\approx 2.2/a = 2.2\\tau$." }
        ],
        answer: "$t_r \\approx 2.2 \\tau$."
      }
    ],
    tasks: [
      { q: "Time constant of $G(s) = 2/(s+10)$ in seconds?", a: "0.1" },
      { q: "Time constant of $G(s) = 8/(s+4)$?", a: "0.25" },
      { q: "Settling time (2%) of system with $\\tau = 0.5$ s?", a: "2" },
      { q: "Rise time of system with $\\tau = 0.5$ s?", a: "1.1" },
      { q: "DC gain of $G(s) = 10/(s+5)$?", a: "2" },
      { q: "After one time constant, a first-order step response has reached what fraction of final value?", a: "0.632" },
      { q: "After 3 time constants, response is at what % of final value?", a: "95" },
      { q: "Pole of $G(s) = 1/(s+8)$?", a: "-8" },
      { q: "A pole farther from origin in LHP gives a faster or slower response?", a: "Faster" },
      { q: "Final value of step response of $G(s) = 6/(2s+4)$?", a: "1.5" }
    ]
  },

  // ===================== SECOND-ORDER RESPONSE =====================
  {
    id: "second-order-response",
    title: "Second-Order System Response",
    level: "intermediate",
    summary: "Damping ratio ζ, natural frequency ω_n, overshoot, settling time.",
    examples: [
      {
        title: "Example 1 — Identify $\\zeta$ and $\\omega_n$",
        prompt: "$G(s) = \\dfrac{36}{s^2 + 4.8s + 36}$. Find $\\omega_n$ and $\\zeta$.",
        steps: [
          { label: "Standard form", body: "Compare with $\\omega_n^2 / (s^2 + 2\\zeta\\omega_n s + \\omega_n^2)$." },
          { label: "Solve", body: "$\\omega_n^2 = 36 \\Rightarrow \\omega_n = 6$. $2\\zeta\\omega_n = 4.8 \\Rightarrow \\zeta = 4.8/12 = 0.4$." }
        ],
        answer: "$\\omega_n = 6$ rad/s, $\\zeta = 0.4$ (underdamped)."
      },
      {
        title: "Example 2 — % overshoot",
        prompt: "For $\\zeta = 0.4$, what is the percent overshoot in step response?",
        steps: [
          { label: "Formula", body: "$\\%OS = 100 \\cdot \\exp\\left( -\\dfrac{\\zeta \\pi}{\\sqrt{1-\\zeta^2}} \\right)$." },
          { label: "Plug in", body: "Exponent: $-0.4\\pi/\\sqrt{0.84} = -1.257/0.917 = -1.371$. $e^{-1.371} = 0.254$. So $\\%OS \\approx 25.4\\%$." }
        ],
        answer: "About 25%."
      },
      {
        title: "Example 3 — Peak time and settling time",
        prompt: "Same system: $\\omega_n = 6$, $\\zeta = 0.4$. Find $T_p$ (peak time) and $T_s$ (2% settling).",
        steps: [
          { label: "Damped frequency", body: "$\\omega_d = \\omega_n \\sqrt{1 - \\zeta^2} = 6\\sqrt{0.84} = 5.50$." },
          { label: "Peak time", body: "$T_p = \\pi/\\omega_d = 3.1416/5.50 \\approx 0.571$ s." },
          { label: "Settling", body: "$T_s = 4/(\\zeta\\omega_n) = 4/2.4 \\approx 1.67$ s." }
        ],
        answer: "$T_p \\approx 0.57$ s, $T_s \\approx 1.67$ s."
      }
    ],
    tasks: [
      { q: "$\\omega_n^2$ in $G = 100/(s^2 + 8s + 100)$. Find $\\omega_n$.", a: "10" },
      { q: "$\\zeta$ in $G = 100/(s^2 + 8s + 100)$?", a: "0.4" },
      { q: "If $\\zeta = 1$, the system is?", a: "Critically damped" },
      { q: "If $\\zeta > 1$, the system is?", a: "Overdamped" },
      { q: "% overshoot for $\\zeta = 0.707$?", a: "4.3" },
      { q: "% overshoot for $\\zeta = 0.5$?", a: "16.3" },
      { q: "Settling time (2%) for $\\omega_n = 4$, $\\zeta = 0.5$?", a: "2" },
      { q: "Peak time for $\\omega_n = 10$, $\\zeta = 0.6$?", a: "0.393" },
      { q: "Damped natural frequency formula?", a: "$\\omega_n\\sqrt{1-\\zeta^2}$" },
      { q: "Poles of $G = 25/(s^2 + 6s + 25)$ are at?", a: "$-3 \\pm 4j$" }
    ]
  },

  // ===================== BLOCK DIAGRAMS =====================
  {
    id: "block-diagrams",
    title: "Block Diagram Reduction",
    level: "intermediate",
    summary: "Series, parallel, feedback rules to collapse complex diagrams.",
    examples: [
      {
        title: "Example 1 — Series",
        prompt: "Combine $G_1(s) = 2/(s+1)$ and $G_2(s) = 3/(s+2)$ in series.",
        steps: [
          { label: "Rule", body: "Series: multiply." },
          { label: "Result", body: "$G = G_1 G_2 = \\dfrac{6}{(s+1)(s+2)}$." }
        ],
        answer: "$G = \\dfrac{6}{(s+1)(s+2)}$."
      },
      {
        title: "Example 2 — Parallel",
        prompt: "$G_1(s) = 1/(s+1)$ and $G_2(s) = 2/(s+3)$ in parallel.",
        steps: [
          { label: "Rule", body: "Parallel: add." },
          { label: "Common denominator", body: "$\\dfrac{1}{s+1} + \\dfrac{2}{s+3} = \\dfrac{(s+3) + 2(s+1)}{(s+1)(s+3)} = \\dfrac{3s+5}{(s+1)(s+3)}$." }
        ],
        answer: "$G = \\dfrac{3s+5}{(s+1)(s+3)}$."
      },
      {
        title: "Example 3 — Negative feedback",
        prompt: "Forward path $G = 10/(s+2)$, feedback $H = 1$ (unity). Find closed-loop $T(s)$.",
        steps: [
          { label: "Formula", body: "$T = \\dfrac{G}{1 + GH}$." },
          { label: "Compute", body: "$1 + GH = 1 + 10/(s+2) = (s+12)/(s+2)$. So $T = \\dfrac{10/(s+2)}{(s+12)/(s+2)} = \\dfrac{10}{s+12}$." }
        ],
        answer: "$T(s) = \\dfrac{10}{s+12}$. Faster pole than open-loop — feedback speeds it up."
      }
    ],
    tasks: [
      { q: "$G_1 = 1/(s+1)$, $G_2 = 4$, in series: combined?", a: "$4/(s+1)$" },
      { q: "$G_1 = 1/s$, $G_2 = 2/s$ in parallel: combined?", a: "$3/s$" },
      { q: "Unity feedback, forward $G$. Closed-loop $T = ?$", a: "$G/(1+G)$" },
      { q: "Positive feedback, forward $G$, feedback $H$: $T = ?$", a: "$G/(1-GH)$" },
      { q: "Forward $G = 4$, feedback $H = 0.5$ (negative). $T = ?$", a: "$4/3$" },
      { q: "Forward $G = 100$, unity negative feedback. $T \\approx ?$", a: "1" },
      { q: "If $|GH| \\gg 1$, $T \\approx 1/H$. True or false?", a: "True" },
      { q: "Order of closed-loop $T$ when $G = (s+1)/(s^2+3s+2)$, $H=1$: order?", a: "2" },
      { q: "Moving a summing junction past a block multiplies the entering signal by what?", a: "The block's transfer function" },
      { q: "A block in series with itself $n$ times has transfer function $G^n$. True?", a: "True" }
    ]
  },

  // ===================== SIGNAL FLOW & MASON =====================
  {
    id: "signal-flow-mason",
    title: "Signal-Flow Graphs & Mason's Rule",
    level: "advanced",
    summary: "Nodes and branches; computing complex transfer functions without block-diagram algebra.",
    examples: [
      {
        title: "Example 1 — Mason's rule, single path",
        prompt: "Forward path gain $P_1 = G_1 G_2$, loop gain $L_1 = -G_2 H$. Find $T$.",
        steps: [
          { label: "Determinant", body: "$\\Delta = 1 - \\sum L_i = 1 - (-G_2 H) = 1 + G_2 H$." },
          { label: "Cofactor", body: "$\\Delta_1$ = $\\Delta$ with loops touching path 1 removed. Loop $L_1$ touches path → $\\Delta_1 = 1$." },
          { label: "Mason", body: "$T = P_1 \\Delta_1 / \\Delta = G_1 G_2 / (1 + G_2 H)$." }
        ],
        answer: "$T = \\dfrac{G_1 G_2}{1 + G_2 H}$."
      },
      {
        title: "Example 2 — Two non-touching loops",
        prompt: "Loops $L_1, L_2$ are non-touching (share no node). One forward path $P_1$ touches both. Apply Mason.",
        steps: [
          { label: "$\\Delta$", body: "$\\Delta = 1 - (L_1 + L_2) + L_1 L_2$." },
          { label: "$\\Delta_1$", body: "Since $P_1$ touches both loops, remove both: $\\Delta_1 = 1$." },
          { label: "Mason", body: "$T = P_1 / [1 - L_1 - L_2 + L_1 L_2]$." }
        ],
        answer: "$T = \\dfrac{P_1}{1 - L_1 - L_2 + L_1 L_2}$. Product term only present for non-touching loops."
      },
      {
        title: "Example 3 — Simple cascade",
        prompt: "Series-then-feedback: path gain $P_1 = G_1 G_2 G_3$, single loop around $G_2$ with $L_1 = -G_2 H$. Find $T$.",
        steps: [
          { label: "Determinant", body: "$\\Delta = 1 + G_2 H$." },
          { label: "$\\Delta_1$", body: "Loop touches path → $\\Delta_1 = 1$." },
          { label: "Result", body: "$T = G_1 G_2 G_3 / (1 + G_2 H)$." }
        ],
        answer: "$T = \\dfrac{G_1 G_2 G_3}{1 + G_2 H}$."
      }
    ],
    tasks: [
      { q: "In Mason's rule, $T = \\sum P_k \\Delta_k / \\Delta$. Variable $\\Delta$ is called the?", a: "Determinant" },
      { q: "$\\Delta_k$ uses only loops that do NOT touch path $k$. True?", a: "True" },
      { q: "Two loops are non-touching if they share no?", a: "Node" },
      { q: "Negative-feedback loop gain $-GH$ contributes $+GH$ to $\\Delta$. True?", a: "True" },
      { q: "If a single forward path touches all loops, $\\Delta_1 = ?$", a: "1" },
      { q: "Three pairwise non-touching loops: $\\Delta$ includes a term with how many loop gains multiplied?", a: "3" },
      { q: "Branch from node $a$ to node $b$ has gain $G$: signal $b$ contribution from $a$ is?", a: "$Ga$" },
      { q: "A self-loop at a node represents what kind of feedback?", a: "Local" },
      { q: "Mason's rule handles which the block-diagram method handles only with rearrangement?", a: "Multiple loops" },
      { q: "Sign convention: a loop gain is the product of branch gains around the loop, including signs. True?", a: "True" }
    ]
  },

  // ===================== ROUTH-HURWITZ =====================
  {
    id: "routh-hurwitz",
    title: "Stability: Routh-Hurwitz Criterion",
    level: "intermediate",
    summary: "Check pole locations without factoring the characteristic equation.",
    examples: [
      {
        title: "Example 1 — Build a Routh array",
        prompt: "$s^4 + 3s^3 + 3s^2 + 2s + 1 = 0$. Is the system stable? We'll build the array column by column and read off the answer at the end.",
        steps: [
          { label: "Top two rows: split the coefficients", body: "Take the polynomial coefficients in order: 1, 3, 3, 2, 1. Put EVEN-power coefficients (degrees 4, 2, 0) in the $s^4$ row: <strong>1, 3, 1</strong>. Put ODD-power coefficients (degrees 3, 1) in the $s^3$ row: <strong>3, 2</strong>. (Pad with 0 if needed to align columns.) These two rows are given — no computation needed." },
          { label: "Row $s^2$: cross-multiplication formula", body: "Each new entry is a 2×2 determinant divided by the leading entry of the row above. For position 1 of $s^2$: take the 2×2 block from the first two columns of $s^4, s^3$ rows: $\\begin{vmatrix} 1 & 3 \\\\ 3 & 2 \\end{vmatrix} = (1)(2) - (3)(3) = -7$. Then NEGATE and divide by the leader (3) of the row above: $-(-7)/3 = 7/3$. For position 2: $\\begin{vmatrix} 1 & 1 \\\\ 3 & 0 \\end{vmatrix} = 0 - 3 = -3$. Negate, divide by 3: $-(-3)/3 = 1$. So $s^2$ row: <strong>7/3, 1</strong>." },
          { label: "Row $s^1$: same rule, applied to rows $s^3$ and $s^2$", body: "Position 1: $\\begin{vmatrix} 3 & 2 \\\\ 7/3 & 1 \\end{vmatrix} = 3 - 14/3 = -5/3$. Negate, divide by $7/3$: $(5/3)/(7/3) = 5/7$. So $s^1$ row: <strong>5/7</strong>." },
          { label: "Row $s^0$: final entry", body: "Same procedure with $s^2$ and $s^1$ rows: $\\begin{vmatrix} 7/3 & 1 \\\\ 5/7 & 0 \\end{vmatrix} = 0 - 5/7 = -5/7$. Negate, divide by $5/7$: $1$. So $s^0$ row: <strong>1</strong>." },
          { label: "Read the verdict", body: "First column from top to bottom: <strong>1, 3, 7/3, 5/7, 1</strong>. All positive — zero sign changes — so zero RHP poles. System is stable." }
        ],
        answer: "First column: 1, 3, 7/3, 5/7, 1 — all positive. Zero sign changes → 0 RHP poles → system is stable."
      },
      {
        title: "Example 2 — Find the range of $K$ for stability",
        prompt: "Characteristic polynomial: $s^3 + 3s^2 + 3s + 1 + K = 0$. Find $K$ for stability.",
        steps: [
          { label: "Routh", body: "$s^3$: 1, 3.  $s^2$: 3, $1+K$.  $s^1$: $(3\\cdot 3 - 1\\cdot(1+K))/3 = (8-K)/3$.  $s^0$: $1+K$." },
          { label: "Conditions", body: "All first column positive: $(8-K)/3 > 0 \\Rightarrow K < 8$, and $1+K > 0 \\Rightarrow K > -1$." }
        ],
        answer: "$-1 < K < 8$ for stability."
      },
      {
        title: "Example 3 — Special case: row of zeros",
        prompt: "$s^4 + 2s^2 + 1$. Use auxiliary polynomial to continue.",
        steps: [
          { label: "Rows", body: "$s^4$: 1, 2, 1.  $s^3$: 0, 0. (Row of zeros.)" },
          { label: "Auxiliary polynomial from $s^4$ row", body: "$A(s) = s^4 + 2s^2 + 1 = (s^2+1)^2$. Differentiate: $A'(s) = 4s^3 + 4s$." },
          { label: "Replace zero row", body: "$s^3$: 4, 4.  Continue Routh." }
        ],
        answer: "Row of zeros indicates poles on the $j\\omega$-axis — system not asymptotically stable."
      }
    ],
    tasks: [
      { q: "If any coefficient of the characteristic polynomial is negative, can the system be stable?", a: "No" },
      { q: "Number of sign changes in first column of Routh array = number of poles in?", a: "Right half-plane" },
      { q: "$s^3 + 2s^2 + 3s + 6 = 0$. Stable?", a: "Marginally" },
      { q: "$s^3 + s^2 + s + 1 = 0$. Stable?", a: "No" },
      { q: "Number of RHP poles of $s^3 + 2s^2 - s + 4 = 0$?", a: "2" },
      { q: "If characteristic eqn is $s^4 + as^3 + bs^2 + cs + d$ with $a, b, c, d > 0$, is it automatically stable?", a: "No" },
      { q: "For stability of $s^3 + 3s^2 + 2s + K$, need $K < ?$", a: "6" },
      { q: "Row of zeros in Routh array indicates poles on what axis?", a: "$j\\omega$" },
      { q: "Routh-Hurwitz tells us pole locations (yes/no)?", a: "Stability only" },
      { q: "Does Routh-Hurwitz work for systems with delay $e^{-sT}$?", a: "No" }
    ]
  },

  // ===================== STEADY-STATE ERRORS =====================
  {
    id: "steady-state-errors",
    title: "Steady-State Errors",
    level: "intermediate",
    summary: "System type, error constants K_p, K_v, K_a, and what each input demands.",
    examples: [
      {
        title: "Example 1 — Type-0 system, step input",
        prompt: "Unity feedback, $G(s) = 10/((s+2)(s+5))$. Find $e_{ss}$ for a unit step.",
        steps: [
          { label: "Position constant", body: "$K_p = G(0) = 10/(2 \\cdot 5) = 1$." },
          { label: "Error", body: "$e_{ss} = 1/(1 + K_p) = 1/2 = 0.5$." }
        ],
        answer: "$e_{ss} = 0.5$. Type-0 system can never track a step exactly."
      },
      {
        title: "Example 2 — Type-1 system, ramp input",
        prompt: "Unity feedback, $G(s) = 100/(s(s+10))$. Find $e_{ss}$ for a unit ramp.",
        steps: [
          { label: "Velocity constant", body: "$K_v = \\lim_{s\\to 0} sG(s) = 100/10 = 10$." },
          { label: "Error", body: "$e_{ss} = 1/K_v = 0.1$." }
        ],
        answer: "$e_{ss} = 0.1$ to a unit ramp."
      },
      {
        title: "Example 3 — Type-2 system, parabolic input",
        prompt: "Unity feedback, $G(s) = 50/(s^2(s+5))$. Find $e_{ss}$ for $r(t) = t^2/2$ ($R(s) = 1/s^3$).",
        steps: [
          { label: "Acceleration constant", body: "$K_a = \\lim_{s\\to 0} s^2 G(s) = 50/5 = 10$." },
          { label: "Error", body: "$e_{ss} = 1/K_a = 0.1$." }
        ],
        answer: "$e_{ss} = 0.1$."
      }
    ],
    tasks: [
      { q: "System type = number of integrators (poles at origin) in the open loop. True?", a: "True" },
      { q: "$e_{ss}$ of a type-0 system to a step input is finite, zero, or infinite?", a: "Finite" },
      { q: "$e_{ss}$ of a type-1 system to a step input?", a: "0" },
      { q: "$e_{ss}$ of a type-1 system to a ramp input is?", a: "Finite" },
      { q: "$e_{ss}$ of a type-0 system to a ramp input is?", a: "Infinite" },
      { q: "$K_p = \\lim_{s\\to 0} G(s)$. True?", a: "True" },
      { q: "$K_v = \\lim_{s\\to 0} sG(s)$. True?", a: "True" },
      { q: "For $G = 20/((s+2)(s+10))$, $K_p = ?$", a: "1" },
      { q: "$e_{ss}$ for that system to a unit step?", a: "0.5" },
      { q: "Adding an integrator increases the system type by?", a: "1" }
    ]
  },

  // ===================== ROOT LOCUS =====================
  {
    id: "root-locus",
    title: "Root Locus Construction",
    level: "advanced",
    summary: "How closed-loop poles move as gain $K$ varies from 0 to ∞.",
    examples: [
      {
        title: "Example 1 — Basic rules",
        prompt: "Open-loop $G(s)H(s) = K/[s(s+2)(s+4)]$. Sketch the root locus.",
        steps: [
          { label: "Poles and zeros", body: "Poles: 0, $-2$, $-4$. No zeros. So 3 branches, all going to infinity." },
          { label: "Real-axis segments", body: "On real axis, root locus exists to the left of an odd number of poles+zeros. So between 0 and $-2$, and to the left of $-4$." },
          { label: "Asymptote angles", body: "$\\theta = (2k+1) \\cdot 180°/(n-m) = 60°, 180°, 300°$ for $n-m=3$." },
          { label: "Asymptote centroid", body: "$\\sigma = (\\sum \\text{poles} - \\sum \\text{zeros})/(n-m) = (0 - 2 - 4)/3 = -2$." }
        ],
        answer: "3 branches; centroid at $-2$; asymptotes at $\\pm 60°$ and $180°$. Two branches cross into RHP for large $K$ — system goes unstable."
      },
      {
        title: "Example 2 — Find $K$ at $j\\omega$-axis crossing",
        prompt: "Same system: at what $K$ do branches cross $j\\omega$?",
        steps: [
          { label: "Closed-loop char eq", body: "$s(s+2)(s+4) + K = 0 \\Rightarrow s^3 + 6s^2 + 8s + K = 0$." },
          { label: "Routh", body: "$s^3$: 1, 8.  $s^2$: 6, $K$.  $s^1$: $(48-K)/6$.  $s^0$: $K$. For $j\\omega$-crossing, $s^1$ row vanishes: $K = 48$." },
          { label: "Frequency", body: "From $s^2$ row: $6s^2 + 48 = 0 \\Rightarrow s = \\pm j\\sqrt 8 = \\pm 2.83 j$." }
        ],
        answer: "$K = 48$ at $\\omega = 2\\sqrt 2 \\approx 2.83$ rad/s."
      },
      {
        title: "Example 3 — Breakaway point",
        prompt: "Same system: find the real-axis breakaway between 0 and $-2$.",
        steps: [
          { label: "Method", body: "Solve $dK/ds = 0$ on the locus. $K = -s(s+2)(s+4) = -(s^3 + 6s^2 + 8s)$." },
          { label: "Differentiate", body: "$dK/ds = -(3s^2 + 12s + 8) = 0 \\Rightarrow s = (-12 \\pm \\sqrt{144 - 96})/6 = -0.845$ or $-3.15$." },
          { label: "Pick the one in [-2, 0]", body: "$s = -0.845$." }
        ],
        answer: "Breakaway at $s \\approx -0.845$ (between the poles at 0 and $-2$)."
      }
    ],
    tasks: [
      { q: "Number of branches in root locus = ?", a: "Number of open-loop poles" },
      { q: "Root locus starts ($K = 0$) at open-loop poles. True?", a: "True" },
      { q: "Root locus ends ($K = \\infty$) at open-loop?", a: "Zeros" },
      { q: "If $n$ poles and $m$ zeros, $n - m$ branches go to?", a: "Infinity" },
      { q: "Asymptote angles for $n - m = 2$?", a: "$\\pm 90°$" },
      { q: "Asymptote angles for $n - m = 4$?", a: "$\\pm 45°, \\pm 135°$" },
      { q: "Real-axis root locus exists to the left of an even or odd count of poles+zeros?", a: "Odd" },
      { q: "Root locus is symmetric about which axis?", a: "Real" },
      { q: "Breakaway points are roots of which derivative being zero?", a: "$dK/ds = 0$" },
      { q: "Magnitude condition: $|G(s)H(s)| = ?$ on the locus.", a: "$1/K$" }
    ]
  },

  // ===================== ROOT LOCUS DESIGN =====================
  {
    id: "root-locus-design",
    title: "Design via Root Locus",
    level: "advanced",
    summary: "PD, lead, and lag compensators to reshape the locus and meet specs.",
    examples: [
      {
        title: "Example 1 — Choose $K$ for given damping",
        prompt: "$G(s)H(s) = K/[s(s+4)]$. Find $K$ for closed-loop $\\zeta = 0.5$.",
        steps: [
          { label: "Closed loop", body: "$s^2 + 4s + K = 0$." },
          { label: "Match standard form", body: "$\\omega_n^2 = K$, $2\\zeta\\omega_n = 4 \\Rightarrow \\omega_n = 4/(2 \\cdot 0.5) = 4$." },
          { label: "Compute $K$", body: "$K = \\omega_n^2 = 16$." }
        ],
        answer: "$K = 16$ gives $\\zeta = 0.5$, $\\omega_n = 4$."
      },
      {
        title: "Example 2 — PD compensator",
        prompt: "Plant: $G(s) = 1/[s(s+1)]$. Add $G_c(s) = K(s+z_c)$ to shift dominant poles for faster response.",
        steps: [
          { label: "Effect of adding a zero", body: "Pulls the root locus to the LEFT — branches that were heading toward instability now bend back into LHP." },
          { label: "Pick $z_c$", body: "Cancel slow pole at $-1$: choose $z_c = 1$. New open loop: $G_c G = K(s+1)/[s(s+1)] = K/s$ — integrator, infinite phase margin asymptotically." }
        ],
        answer: "Zero at $-1$ cancels plant pole, leaving $K/s$. Stable for all $K > 0$."
      },
      {
        title: "Example 3 — Lead compensator",
        prompt: "$G_c(s) = K(s+z)/(s+p)$ with $z < p$. What does it do?",
        steps: [
          { label: "Geometry", body: "Zero closer to origin pulls locus left; pole farther out has weaker effect. Net: faster response, better damping." },
          { label: "Use case", body: "Improves transient (rise time, overshoot) without much steady-state penalty." }
        ],
        answer: "Lead = phase boost in mid frequencies → faster, better-damped transient."
      }
    ],
    tasks: [
      { q: "Adding a zero to the left of poles pulls the root locus in which direction?", a: "Left" },
      { q: "Lead compensator has $z < p$ (zero closer to origin). True?", a: "True" },
      { q: "Lag compensator has $z > p$ (pole closer to origin). True?", a: "True" },
      { q: "Lead improves which: transient or steady-state?", a: "Transient" },
      { q: "Lag improves which?", a: "Steady-state" },
      { q: "PD controller form: $K_p + K_d s$. Equivalent to a lead with $p \\to ?$", a: "Infinity" },
      { q: "Cancelling a slow plant pole with a compensator zero is called?", a: "Pole-zero cancellation" },
      { q: "Approximate cancellation is risky because of which kind of error?", a: "Modeling" },
      { q: "Phase boost from a lead compensator is at most close to which angle?", a: "90°" },
      { q: "To reduce overshoot, $\\zeta$ must be?", a: "Increased" }
    ]
  },

  // ===================== BODE PLOTS =====================
  {
    id: "bode-plots",
    title: "Frequency Response: Bode Plots",
    level: "advanced",
    summary: "Magnitude (dB) and phase (deg) vs $\\log\\omega$.",
    examples: [
      {
        title: "Example 1 — Bode of $G(s) = 10/(s+10)$",
        prompt: "Sketch magnitude asymptotes.",
        steps: [
          { label: "Low freq", body: "For $\\omega \\ll 10$, $G(j\\omega) \\approx 1$ → 0 dB." },
          { label: "Corner", body: "Pole at $\\omega = 10$." },
          { label: "High freq", body: "For $\\omega \\gg 10$, $G \\approx 10/(j\\omega)$ → magnitude $10/\\omega$, slope $-20$ dB/dec." }
        ],
        answer: "Flat at 0 dB until $\\omega = 10$, then $-20$ dB/dec rolloff. Phase: 0° → $-90°$."
      },
      {
        title: "Example 2 — Magnitude in dB",
        prompt: "$|G(j10)| = 5$. Express in dB.",
        steps: [
          { label: "Formula", body: "dB = $20 \\log_{10} |G|$." },
          { label: "Compute", body: "$20 \\log_{10} 5 = 20 \\cdot 0.699 \\approx 14$ dB." }
        ],
        answer: "$|G| = 5$ ≈ 14 dB."
      },
      {
        title: "Example 3 — Slope contributions",
        prompt: "$G(s) = K \\dfrac{s+1}{s^2(s+10)}$. Slope at very high $\\omega$?",
        steps: [
          { label: "Count contributions", body: "Numerator zero: $+20$ dB/dec. Two poles at origin: $-40$. Pole at 10: $-20$." },
          { label: "Net", body: "$+20 - 40 - 20 = -40$ dB/dec at high frequency." }
        ],
        answer: "$-40$ dB/dec asymptote."
      }
    ],
    tasks: [
      { q: "Magnitude (dB) of a value of 1?", a: "0" },
      { q: "Magnitude (dB) of $0.1$?", a: "-20" },
      { q: "Pole at $\\omega = 1$: contributes how many dB/dec at high $\\omega$?", a: "-20" },
      { q: "Zero at $\\omega = 5$: contributes how many dB/dec at high $\\omega$?", a: "+20" },
      { q: "Phase contribution of a single pole goes from 0 to what?", a: "-90°" },
      { q: "Phase contribution of an integrator $1/s$ is?", a: "-90° (constant)" },
      { q: "$G(s) = K$ (pure gain). Phase?", a: "0°" },
      { q: "$G(s) = 1/s^2$. Slope (dB/dec) at all $\\omega$?", a: "-40" },
      { q: "Magnitude of $|G(j10)| = 100$ in dB?", a: "40" },
      { q: "Bandwidth: frequency at which magnitude drops to what dB below DC value?", a: "-3 dB" }
    ]
  },

  // ===================== NYQUIST =====================
  {
    id: "nyquist",
    title: "Nyquist Stability Criterion",
    level: "advanced",
    summary: "Encirclements of $-1$ in the complex plane tell you closed-loop stability.",
    examples: [
      {
        title: "Example 1 — Nyquist of $G(s) = 1/(s+1)$",
        prompt: "Sketch the Nyquist plot and determine closed-loop stability under unity feedback.",
        steps: [
          { label: "Map $j\\omega$", body: "$G(j\\omega) = 1/(1+j\\omega)$ → starts at 1 (DC), spirals to 0 at high freq, in the lower half plane." },
          { label: "Closure", body: "Closing back via large semicircle through origin. Full Nyquist plot is a semicircle in the right half-plane." },
          { label: "$N$, $P$", body: "Encirclements of $-1$: $N = 0$. Open-loop RHP poles: $P = 0$. $Z = N + P = 0$." }
        ],
        answer: "Zero closed-loop RHP poles → stable."
      },
      {
        title: "Example 2 — Marginal case",
        prompt: "$G(s) = K/(s(s+1)(s+2))$. Find $K$ at which Nyquist plot passes through $-1$.",
        steps: [
          { label: "Crossover frequency", body: "Phase $= -180°$: $\\arg(G(j\\omega)) = -90 - \\arctan\\omega - \\arctan(\\omega/2) = -180$. Solve numerically: $\\omega \\approx \\sqrt 2$." },
          { label: "Magnitude at that $\\omega$", body: "$|G(j\\sqrt 2)| = K / (\\sqrt 2 \\cdot \\sqrt 3 \\cdot \\sqrt 6) = K/6$. Set $= 1$: $K = 6$." }
        ],
        answer: "$K = 6$. Above $K=6$ system is unstable."
      },
      {
        title: "Example 3 — Counting encirclements",
        prompt: "Open-loop has $P = 1$ pole in RHP. Nyquist makes $N = -1$ clockwise (i.e., 1 counterclockwise) encirclement of $-1$. Stable?",
        steps: [
          { label: "Formula", body: "$Z = P - N$ (counterclockwise positive). $Z = 1 - 1 = 0$." }
        ],
        answer: "$Z = 0$ → closed-loop stable."
      }
    ],
    tasks: [
      { q: "Closed-loop RHP poles: $Z = N + P$. What is $P$?", a: "Open-loop RHP poles" },
      { q: "$N$ = number of clockwise encirclements of what point?", a: "-1" },
      { q: "If open loop is stable ($P=0$) and Nyquist has 1 clockwise encirclement, closed loop is?", a: "Unstable" },
      { q: "If open loop is stable and no encirclements, closed loop is?", a: "Stable" },
      { q: "Nyquist plot of $1/(s+1)$ is a semicircle in which half-plane?", a: "Right" },
      { q: "Bode plot relates to Nyquist via what variable substitution?", a: "$s = j\\omega$" },
      { q: "Phase margin = $180° + \\angle G$ at which crossover?", a: "Gain crossover" },
      { q: "Gain margin (dB) = $-20\\log|G|$ at which crossover?", a: "Phase crossover" },
      { q: "Phase crossover is where phase equals?", a: "-180°" },
      { q: "Gain crossover is where magnitude equals?", a: "1 (0 dB)" }
    ]
  },

  // ===================== GAIN & PHASE MARGINS =====================
  {
    id: "gain-phase-margins",
    title: "Gain & Phase Margins",
    level: "advanced",
    summary: "How much extra gain or phase the loop can absorb before going unstable.",
    examples: [
      {
        title: "Example 1 — Compute GM and PM from Bode",
        prompt: "At $\\omega = 2$ rad/s, $|G| = 0$ dB and phase is $-135°$. At $\\omega = 5$ rad/s, $|G| = -10$ dB and phase is $-180°$.",
        steps: [
          { label: "Gain crossover", body: "$|G| = 0$ dB at $\\omega = 2$. Phase there: $-135°$." },
          { label: "Phase margin", body: "PM = $180° + (-135°) = 45°$." },
          { label: "Phase crossover", body: "Phase = $-180°$ at $\\omega = 5$. Magnitude there: $-10$ dB." },
          { label: "Gain margin", body: "GM = $-(-10) = 10$ dB." }
        ],
        answer: "PM = 45°, GM = 10 dB."
      },
      {
        title: "Example 2 — PM-damping relation",
        prompt: "Rule of thumb: PM ≈ $100\\zeta$ (for $\\zeta < 0.7$). Find $\\zeta$ for PM = 60°.",
        steps: [
          { label: "Solve", body: "$\\zeta \\approx 60/100 = 0.6$." }
        ],
        answer: "$\\zeta \\approx 0.6$. Quick estimate; not exact for high $\\zeta$."
      },
      {
        title: "Example 3 — Negative phase margin",
        prompt: "If at gain crossover the phase is $-200°$, find PM. Is the system stable?",
        steps: [
          { label: "PM", body: "PM = $180° - 200° = -20°$." }
        ],
        answer: "Negative PM → unstable."
      }
    ],
    tasks: [
      { q: "Typical good design: PM in what range?", a: "30°-60°" },
      { q: "Typical good design: GM at least how many dB?", a: "6" },
      { q: "PM = 0° means system is on the edge of?", a: "Instability" },
      { q: "Larger PM means more or less damped response?", a: "More" },
      { q: "GM = 1 (0 dB) means closed loop is?", a: "Marginally stable" },
      { q: "PM is measured at which crossover?", a: "Gain" },
      { q: "GM is measured at which crossover?", a: "Phase" },
      { q: "If PM = 90°, approximate $\\zeta$ by rule of thumb?", a: "0.9" },
      { q: "Adding integral action typically does what to PM?", a: "Reduces" },
      { q: "Adding lead compensation typically does what to PM?", a: "Increases" }
    ]
  },

  // ===================== LEAD-LAG =====================
  {
    id: "lead-lag",
    title: "Lead and Lag Compensation",
    level: "advanced",
    summary: "Classical compensators to fix transient or steady-state behavior.",
    examples: [
      {
        title: "Example 1 — Maximum phase of a lead",
        prompt: "Lead: $G_c(s) = (s+z)/(s+p)$, $\\alpha = z/p < 1$. Find $\\phi_{\\max}$ and the frequency at which it occurs.",
        steps: [
          { label: "Formula", body: "$\\sin\\phi_{\\max} = (1-\\alpha)/(1+\\alpha)$." },
          { label: "Frequency", body: "$\\omega_m = \\sqrt{zp}$ (geometric mean of corner frequencies)." }
        ],
        answer: "$\\sin\\phi_{\\max} = (1-\\alpha)/(1+\\alpha)$; $\\omega_m = \\sqrt{zp}$."
      },
      {
        title: "Example 2 — Pick $\\alpha$ for 45° boost",
        prompt: "Need 45° of phase boost at $\\omega_m$. Solve for $\\alpha$.",
        steps: [
          { label: "Plug in", body: "$\\sin 45° = 0.707 = (1-\\alpha)/(1+\\alpha)$. Cross-multiply: $1+\\alpha = (1-\\alpha)/0.707$ → $0.707(1+\\alpha) = 1-\\alpha$ → $0.707 + 0.707\\alpha + \\alpha = 1$ → $\\alpha(1.707) = 0.293$ → $\\alpha = 0.172$." }
        ],
        answer: "$\\alpha \\approx 0.17$ (so $p/z \\approx 5.8$)."
      },
      {
        title: "Example 3 — Lag compensator design",
        prompt: "Plant has $K_v = 1$. Want $K_v = 10$ without changing transient much. Use a lag.",
        steps: [
          { label: "Lag form", body: "$G_c = (s/z + 1)/(s/p + 1)$, $z > p$. DC gain $= 1$, but boosts low-frequency gain by $z/p$." },
          { label: "Pick ratio", body: "Need 10× DC gain boost → $z/p = 10$." },
          { label: "Place far below crossover", body: "So phase lag at crossover is small (~5°). E.g., $p \\sim \\omega_c/10$." }
        ],
        answer: "Pick $z/p = 10$ with $p \\sim \\omega_c/10$. Steady-state error drops 10×."
      }
    ],
    tasks: [
      { q: "Lead compensator: $z$ smaller than $p$ or larger?", a: "Smaller" },
      { q: "Lag compensator: $z$ smaller than $p$ or larger?", a: "Larger" },
      { q: "Lead adds positive phase (yes/no)?", a: "Yes" },
      { q: "Lag adds positive or negative phase?", a: "Negative" },
      { q: "Lead used to improve which spec?", a: "Transient" },
      { q: "Lag used to improve which spec?", a: "Steady-state" },
      { q: "Maximum phase boost from a single-section lead is roughly how many degrees?", a: "75" },
      { q: "Lag-lead combines benefits but adds what?", a: "Complexity" },
      { q: "Pole-zero ratio of a lag with 20× DC boost?", a: "20" },
      { q: "Place a lag's pole far below crossover frequency. True?", a: "True" }
    ]
  },

  // ===================== PID =====================
  {
    id: "pid-control",
    title: "PID Controllers",
    level: "intermediate",
    summary: "Proportional + Integral + Derivative. The workhorse of industry.",
    examples: [
      {
        title: "Example 1 — Effect of each term",
        prompt: "What does each gain do qualitatively?",
        steps: [
          { label: "Proportional $K_p$", body: "Big $K_p$ → fast, but oscillatory and possibly unstable. Cannot eliminate steady-state error alone (for type-0 plants)." },
          { label: "Integral $K_i$", body: "Drives steady-state error to zero. But adds phase lag → can destabilize." },
          { label: "Derivative $K_d$", body: "Predicts future error → adds damping. But amplifies sensor noise." }
        ],
        answer: "P fast, I accurate, D damped. Tuning balances the three."
      },
      {
        title: "Example 2 — Ziegler-Nichols ultimate gain",
        prompt: "P-only test: oscillates at $K_u = 12$, period $T_u = 2$ s. Find P, PI, PID gains by Z-N.",
        steps: [
          { label: "P", body: "$K_p = 0.5 K_u = 6$." },
          { label: "PI", body: "$K_p = 0.45 K_u = 5.4$;  $T_i = 0.83 T_u = 1.66$ s." },
          { label: "PID", body: "$K_p = 0.6 K_u = 7.2$;  $T_i = 0.5 T_u = 1$ s;  $T_d = 0.125 T_u = 0.25$ s." }
        ],
        answer: "PID: $K_p = 7.2$, $T_i = 1$ s, $T_d = 0.25$ s. Aggressive — often needs tuning down."
      },
      {
        title: "Example 3 — PID transfer function",
        prompt: "Write $G_c(s)$ for PID.",
        steps: [
          { label: "Form", body: "$G_c(s) = K_p + K_i/s + K_d s = (K_d s^2 + K_p s + K_i)/s$." }
        ],
        answer: "Two zeros, one pole at origin. Realizable with derivative low-pass filter in practice."
      }
    ],
    tasks: [
      { q: "Letter for proportional term?", a: "P" },
      { q: "Letter for integral term?", a: "I" },
      { q: "Letter for derivative term?", a: "D" },
      { q: "Term that eliminates steady-state error for step input on type-0 plant?", a: "Integral" },
      { q: "Term that adds damping?", a: "Derivative" },
      { q: "Term most affected by sensor noise?", a: "Derivative" },
      { q: "PID transfer function: how many zeros?", a: "2" },
      { q: "PID transfer function: how many poles?", a: "1" },
      { q: "Z-N PID $K_p = ?$ times $K_u$.", a: "0.6" },
      { q: "Integral windup is a problem when actuator?", a: "Saturates" }
    ]
  },

  // ===================== STATE-SPACE DESIGN =====================
  {
    id: "state-space-design",
    title: "State-Space Design: Pole Placement",
    level: "graduate",
    summary: "Full-state feedback $u = -Kx$ places closed-loop eigenvalues anywhere.",
    examples: [
      {
        title: "Example 1 — Check controllability",
        prompt: "$A = \\begin{pmatrix}0&1\\\\-2&-3\\end{pmatrix}$, $B = \\begin{pmatrix}0\\\\1\\end{pmatrix}$. Is the pair $(A,B)$ controllable?",
        steps: [
          { label: "Controllability matrix", body: "$\\mathcal{C} = [B \\ AB]$. $AB = \\begin{pmatrix}1\\\\-3\\end{pmatrix}$. So $\\mathcal{C} = \\begin{pmatrix}0&1\\\\1&-3\\end{pmatrix}$." },
          { label: "Rank", body: "$\\det\\mathcal{C} = 0 \\cdot (-3) - 1\\cdot 1 = -1 \\neq 0$. Full rank." }
        ],
        answer: "Controllable — we can place closed-loop poles anywhere."
      },
      {
        title: "Example 2 — Place poles via Ackermann",
        prompt: "Same $(A,B)$. Want closed-loop poles at $-3, -4$. Find $K$.",
        steps: [
          { label: "Desired char poly", body: "$(s+3)(s+4) = s^2 + 7s + 12$." },
          { label: "Compare with $\\det(sI - (A - BK)) $", body: "$A - BK = \\begin{pmatrix}0&1\\\\-2-k_1&-3-k_2\\end{pmatrix}$. Char poly: $s^2 + (3+k_2)s + (2+k_1)$." },
          { label: "Match", body: "$3 + k_2 = 7 \\Rightarrow k_2 = 4$. $2 + k_1 = 12 \\Rightarrow k_1 = 10$." }
        ],
        answer: "$K = (10\\ 4)$."
      },
      {
        title: "Example 3 — Observability",
        prompt: "$A = \\begin{pmatrix}0&1\\\\-2&-3\\end{pmatrix}$, $C = (1\\ 0)$. Observable?",
        steps: [
          { label: "Observability matrix", body: "$\\mathcal{O} = \\begin{pmatrix} C \\\\ CA \\end{pmatrix} = \\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$." },
          { label: "Rank", body: "Identity, rank 2 = order. Observable." }
        ],
        answer: "Observable — we can reconstruct $x(t)$ from $y$ alone."
      }
    ],
    tasks: [
      { q: "Controllability matrix for $n$-state SISO system has how many columns?", a: "n" },
      { q: "$(A,B)$ controllable iff $\\mathcal{C}$ has full rank. True?", a: "True" },
      { q: "Observability matrix uses $A$ and which matrix?", a: "C" },
      { q: "Pole placement requires controllability. True?", a: "True" },
      { q: "Observer design requires observability. True?", a: "True" },
      { q: "Full-state feedback: $u = -K\\mathbf x$. Closed-loop $A_{cl} = ?$", a: "A-BK" },
      { q: "LQR minimizes which type of cost?", a: "Quadratic" },
      { q: "Separation principle: design controller and observer separately. True?", a: "True" },
      { q: "Kalman filter is the optimal observer for systems with what?", a: "Noise" },
      { q: "Hautus test: $(A,B)$ controllable iff rank of which matrix is $n$ for all eigenvalues?", a: "[sI-A, B]" }
    ]
  },

  // ===================== OBSERVERS =====================
  {
    id: "state-observers",
    title: "State Observers (Estimators)",
    level: "graduate",
    summary: "Luenberger observer reconstructs the state from output measurements.",
    examples: [
      {
        title: "Example 1 — Observer equation",
        prompt: "Write the dynamics of a full-order Luenberger observer.",
        steps: [
          { label: "Plant", body: "$\\dot x = Ax + Bu$, $y = Cx$." },
          { label: "Observer", body: "$\\dot{\\hat x} = A\\hat x + Bu + L(y - C\\hat x)$." },
          { label: "Error dynamics", body: "$\\dot e = (A - LC) e$, where $e = x - \\hat x$." }
        ],
        answer: "Choose $L$ so that $(A - LC)$ has fast, stable eigenvalues. Then $\\hat x \\to x$."
      },
      {
        title: "Example 2 — Design L",
        prompt: "$A = \\begin{pmatrix}0&1\\\\-2&-3\\end{pmatrix}$, $C = (1\\ 0)$. Place observer poles at $-10, -10$.",
        steps: [
          { label: "Use duality", body: "Pole placement of $(A^T, C^T)$ via $K$ gives $L = K^T$." },
          { label: "Desired char poly", body: "$(s+10)^2 = s^2 + 20s + 100$." },
          { label: "Solve", body: "$A - LC = \\begin{pmatrix}-\\ell_1 & 1\\\\-2-\\ell_2 & -3\\end{pmatrix}$. Char poly: $s^2 + (\\ell_1 + 3)s + (3\\ell_1 + 2 + \\ell_2)$. Match: $\\ell_1 = 17$, $\\ell_2 = 100 - 2 - 51 = 47$." }
        ],
        answer: "$L = \\begin{pmatrix}17\\\\47\\end{pmatrix}$."
      },
      {
        title: "Example 3 — Separation principle",
        prompt: "If $u = -K\\hat x$, what are the closed-loop poles?",
        steps: [
          { label: "Combined system", body: "States: $(x, e)$. Dynamics: $\\dot x = (A - BK)x + BKe$, $\\dot e = (A - LC)e$. Triangular." },
          { label: "Eigenvalues", body: "Union of eigenvalues of $(A - BK)$ and $(A - LC)$." }
        ],
        answer: "Controller poles and observer poles separate — design them independently."
      }
    ],
    tasks: [
      { q: "Observer estimate is denoted $\\hat x$. True?", a: "True" },
      { q: "Observer error dynamics: $\\dot e = (A - LC)e$. True?", a: "True" },
      { q: "For convergence, eigenvalues of $A - LC$ must be?", a: "Stable" },
      { q: "Observer poles usually placed how fast vs controller poles?", a: "Faster" },
      { q: "Common rule: observer poles 2-10 times faster than dominant closed-loop poles. True?", a: "True" },
      { q: "Reduced-order observer estimates only which states?", a: "Unmeasured" },
      { q: "Kalman filter handles measurement and process what?", a: "Noise" },
      { q: "Duality between controllability and observability uses transpose. True?", a: "True" },
      { q: "Dim of $L$ for 3-state, 2-output system?", a: "3x2" },
      { q: "Observer design needs which structural property?", a: "Observability" }
    ]
  },

  // ===================== DIGITAL CONTROL =====================
  {
    id: "digital-control",
    title: "Digital Control & Z-Transforms",
    level: "graduate",
    summary: "Sampled-data systems, z-transform, discrete stability (inside unit circle).",
    examples: [
      {
        title: "Example 1 — z-transform of a unit step",
        prompt: "Sample $u(t) = 1$ at $T = 1$ s. Find $U(z)$.",
        steps: [
          { label: "Definition", body: "$U(z) = \\sum_{k=0}^\\infty u[k] z^{-k} = \\sum_{k=0}^\\infty z^{-k} = \\dfrac{1}{1 - z^{-1}} = \\dfrac{z}{z-1}$." }
        ],
        answer: "$U(z) = z/(z-1)$."
      },
      {
        title: "Example 2 — Discrete pole map",
        prompt: "Continuous pole at $s = -2$ with sampling period $T = 0.1$ s. Where is the discrete pole in $z$-plane?",
        steps: [
          { label: "Map", body: "$z = e^{sT} = e^{-0.2} \\approx 0.819$." }
        ],
        answer: "Discrete pole at $z \\approx 0.819$. Inside unit circle → stable."
      },
      {
        title: "Example 3 — Stability test",
        prompt: "Discrete system with poles at $z = 0.5$ and $z = 1.1$. Stable?",
        steps: [
          { label: "Criterion", body: "All discrete poles must be inside unit disk: $|z| < 1$." },
          { label: "Check", body: "$|0.5| < 1$ OK. $|1.1| > 1$ → outside." }
        ],
        answer: "Unstable — one pole outside unit circle."
      }
    ],
    tasks: [
      { q: "Discrete-time stability: poles must be where in z-plane?", a: "Inside unit circle" },
      { q: "z-transform of unit impulse $\\delta[k]$?", a: "1" },
      { q: "z-transform of $a^k u[k]$?", a: "$z/(z-a)$" },
      { q: "Sampling continuous pole $s = -1$ at $T = 0.5$ gives $z = ?$", a: "0.607" },
      { q: "Nyquist sampling theorem: sample at >$2 f_{\\max}$. True?", a: "True" },
      { q: "Aliasing occurs when sampling rate is too what?", a: "Low" },
      { q: "Zero-order hold reconstructs the signal how?", a: "Holds the last sample" },
      { q: "Bilinear (Tustin) transform: $s \\to (2/T)(z-1)/(z+1)$. True?", a: "True" },
      { q: "Jury's test is the discrete analog of which classical test?", a: "Routh-Hurwitz" },
      { q: "Difference equation = discrete equivalent of which continuous concept?", a: "ODE" }
    ]
  }
];
