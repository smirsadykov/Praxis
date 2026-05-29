// Append a "WHERE:" component-definition block to every formula's note,
// explaining each variable / symbol used. Uses the same find-by-prefix
// pattern as formulas-expanded.js — runs AFTER it.

(function () {
  if (!window.FORMULAS) return;

  function W(id, fPrefix, where) {
    const arr = window.FORMULAS[id];
    if (!arr) return;
    for (const item of arr) {
      if (item.f && item.f.indexOf(fPrefix) === 0) {
        // Don't double-append if already extended.
        if (item.n && !item.n.includes("WHERE:")) {
          item.n = item.n + " <br><br><strong>WHERE:</strong> " + where;
        }
        return;
      }
    }
  }

  // ============================================================
  // PHASE TRANSITIONS (the topic in the user's screenshot)
  // ============================================================
  W("phase-transitions", "First-order:",
    "<em>First-order transition</em> = discontinuous change at the transition temperature; latent heat is absorbed or released. <em>Order parameter</em> = a quantity that is zero in one phase and nonzero in the other (e.g., density difference between liquid and gas).");
  W("phase-transitions", "Second-order:",
    "<em>Second-order (continuous) transition</em> = order parameter goes smoothly to zero at $T_c$; no latent heat but specific heat / susceptibility may diverge. <em>Curie point</em> = temperature above which a ferromagnet loses its magnetization.");
  W("phase-transitions", "Landau:",
    "$F$ = Helmholtz free energy. $T$ = temperature. $T_c$ = critical temperature where the transition happens. $m$ = order parameter (e.g., magnetization). $a, b$ = phenomenological expansion coefficients ($a > 0$, $b > 0$ for a stable second-order transition). The linear term in $m$ is forbidden by the symmetry that gets broken at $T_c$.");
  W("phase-transitions", "Mean-field $T_c$:",
    "$k_B$ = Boltzmann constant ($\\approx 1.38 \\times 10^{-23}$ J/K). $T_c$ = critical temperature. $z$ = <em>coordination number</em>, the number of nearest neighbors each lattice site has (6 for simple cubic, 8 for BCC, 12 for FCC). $J$ = <em>exchange coupling</em> between neighboring spins (energy units).");
  W("phase-transitions", "Critical exponents:",
    "$\\alpha$ governs specific heat: $C \\sim |t|^{-\\alpha}$. $\\beta$ governs order parameter: $m \\sim (-t)^\\beta$ below $T_c$. $\\gamma$ governs susceptibility: $\\chi \\sim |t|^{-\\gamma}$. $\\delta$ governs response at $T_c$. $\\nu$ governs correlation length: $\\xi \\sim |t|^{-\\nu}$. $\\eta$ governs correlation function at $T_c$. Here $t = (T - T_c)/T_c$ is the reduced temperature.");
  W("phase-transitions", "Ising 2D:",
    "$\\beta = 1/8$ means magnetization vanishes as $(T_c - T)^{1/8}$ — a non-trivial power law, exactly different from mean-field's $1/2$. $\\gamma = 7/4$ means magnetic susceptibility diverges as $|T - T_c|^{-7/4}$. These values were computed exactly by Lars Onsager in 1944 for the 2D Ising model on a square lattice.");
  W("phase-transitions", "Mean field:",
    "$\\beta = 1/2$ is the prediction of mean-field (Curie-Weiss / van der Waals) theory. CORRECT only above the <em>upper critical dimension</em> $d_u$ ($d_u = 4$ for Ising). Below: fluctuations are too strong for mean-field to apply, and the true exponents come from the renormalization group.");

  // ============================================================
  // PHYSICS — FOUNDATIONAL
  // ============================================================
  W("kinematics", "Velocity",
    "$v$ = velocity (m/s). $x$ = position (m). $t$ = time (s). For 1D motion, $v = dx/dt$. SI units throughout.");
  W("kinematics", "Acceleration",
    "$a$ = acceleration (m/s²). $v$ = velocity. $t$ = time. $a = dv/dt$.");
  W("kinematics", "SUVAT",
    "$s$ = displacement. $u$ = initial velocity. $v$ = final velocity. $a$ = (constant) acceleration. $t$ = time elapsed. Valid only for UNIFORM acceleration.");
  W("kinematics", "Projectile range",
    "$R$ = horizontal range (m). $v_0$ = launch speed (m/s). $\\theta$ = launch angle above horizontal. $g$ = gravitational acceleration ($\\approx 9.8$ m/s²). Valid only for level ground and negligible air resistance.");
  W("kinematics", "Centripetal",
    "$a_c$ = centripetal (radial) acceleration directed toward center. $v$ = speed along the circle. $r$ = radius of the circular path. $\\omega = v/r$ = angular velocity (rad/s).");

  W("newtons-laws", "$\\mathbf F = m\\mathbf a$",
    "$\\mathbf F$ = net force vector (N). $m$ = inertial mass (kg). $\\mathbf a$ = acceleration vector (m/s²). The force is the NET (vector sum) of all external forces.");
  W("newtons-laws", "Gravity",
    "$F_g$ = weight = gravitational force on an object near Earth's surface (N). $m$ = mass (kg). $g$ = gravitational field strength ($\\approx 9.8$ m/s² on Earth, $\\approx 1.6$ on Moon).");
  W("newtons-laws", "Friction",
    "$F_f$ = friction force opposing motion (N). $\\mu$ = coefficient of friction (kinetic $\\mu_k$ for moving, static $\\mu_s$ for at rest; $\\mu_s > \\mu_k$ typically). $N$ = normal force (perpendicular to surface).");
  W("newtons-laws", "Spring",
    "$F$ = restoring force from spring (N). $k$ = spring constant (N/m), stiffness of the spring. $x$ = displacement from equilibrium (m). The minus sign means the force opposes the displacement.");

  W("momentum-impulse", "Momentum",
    "$\\mathbf p$ = momentum vector (kg·m/s). $m$ = mass (kg). $\\mathbf v$ = velocity vector (m/s). For relativistic particles: $\\mathbf p = \\gamma m\\mathbf v$ with $\\gamma = 1/\\sqrt{1 - v^2/c^2}$.");
  W("momentum-impulse", "Impulse",
    "$\\mathbf J$ = impulse (N·s). $\\mathbf F$ = force applied during a time interval. $\\Delta \\mathbf p$ = change in momentum. Equivalently $\\mathbf J = \\langle\\mathbf F\\rangle \\Delta t$ where $\\langle F\\rangle$ is the time-averaged force.");
  W("momentum-impulse", "Conservation",
    "Total momentum $\\mathbf P_\\text{tot} = \\sum \\mathbf p_i$ is constant in an ISOLATED system (no external forces). Holds for ANY type of internal interaction — elastic or inelastic collisions, explosions, etc.");

  W("energy-work", "Work",
    "$W$ = work done by force (J). $\\mathbf F$ = applied force vector. $d\\mathbf r$ = displacement vector. The dot product gives only the component of force along the direction of motion. For constant force on straight path: $W = Fd\\cos\\theta$.");
  W("energy-work", "KE",
    "$KE$ = kinetic energy (J = N·m = kg·m²/s²). $m$ = mass (kg). $v$ = speed (m/s). Always non-negative. Reference frame dependent (depends on observer).");
  W("energy-work", "PE gravity",
    "$U$ = gravitational potential energy (J). $m$ = mass (kg). $g$ = gravitational field strength ($\\approx 9.8$ m/s²). $h$ = height above some reference level. CHOICE of reference: doesn't affect physics, only the constant.");
  W("energy-work", "PE spring",
    "$U$ = elastic potential energy stored in a spring (J). $k$ = spring constant (N/m). $x$ = displacement from natural (unstretched) length.");
  W("energy-work", "Power",
    "$P$ = power (watts, W = J/s). $E$ = energy. $t$ = time. Also $P = \\mathbf F \\cdot \\mathbf v$ for an instantaneous force. 1 horsepower $\\approx 746$ W.");

  W("circular-gravitation", "Newton gravitation",
    "$F$ = gravitational force between two masses (N). $G$ = gravitational constant ($\\approx 6.67 \\times 10^{-11}$ N·m²/kg²). $m_1, m_2$ = the two masses (kg). $r$ = distance between centers of mass (m).");
  W("circular-gravitation", "Kepler",
    "$T$ = orbital period (s). $a$ = semi-major axis of the elliptical orbit (m). $M$ = mass of the central body (kg). Used to weigh stars, find planet distances, characterize exoplanets.");
  W("circular-gravitation", "Escape",
    "$v_e$ = escape velocity from surface of mass $M$ at radius $R$ (m/s). $G$ = gravitational constant. Beyond $v_e$, an object can reach infinity without further propulsion. Earth: 11.2 km/s.");

  W("shm", "SHM equation",
    "$x$ = displacement from equilibrium (m). $\\omega$ = angular frequency (rad/s). Solutions are sinusoidal. <em>Period</em> $T = 2\\pi/\\omega$. <em>Frequency</em> $f = 1/T$ (Hz).");
  W("shm", "Spring-mass",
    "$\\omega$ = angular frequency (rad/s). $k$ = spring constant (N/m). $m$ = mass (kg). Stiffer spring → faster oscillation; heavier mass → slower.");
  W("shm", "Pendulum",
    "$T$ = period (s). $L$ = pendulum length from pivot to center of mass (m). $g$ = gravity ($\\approx 9.8$ m/s²). Valid only in the small-angle approximation ($\\theta \\lesssim 10°$).");
  W("shm", "Damping",
    "$m$ = mass. $b$ = damping coefficient (N·s/m). $k$ = spring constant. Damping ratio $\\zeta = b/(2\\sqrt{mk})$. $\\zeta < 1$: underdamped (oscillates). $\\zeta = 1$: critical. $\\zeta > 1$: overdamped.");

  // ============================================================
  // CONTROL — symbols matter most here
  // ============================================================
  W("transfer-functions", "$G(s) = \\dfrac{Y(s)}{U(s)}",
    "$s$ = complex Laplace variable (units of 1/time). $Y(s)$ = Laplace transform of output. $U(s)$ = Laplace transform of input. $a_i, b_j$ = polynomial coefficients of denominator and numerator. Roots of denominator = poles; roots of numerator = zeros.");
  W("transfer-functions", "Pole at",
    "$s = \\sigma + j\\omega$ — complex frequency. $\\sigma$ = real part: determines decay (negative) or growth (positive). $\\omega$ = imaginary part: determines oscillation frequency. Pole in LHP ($\\sigma < 0$): stable mode. Pole in RHP ($\\sigma > 0$): unstable.");
  W("transfer-functions", "DC gain",
    "DC gain = value of the transfer function at $s = 0$ (zero frequency). EQUALS the steady-state output when input is a unit step. UNITS: same as output/input ratio.");
  W("transfer-functions", "Step response",
    "$y(t)$ = output as a function of time. $G(s)$ = plant transfer function. $1/s$ = Laplace of a unit step. Compute $Y(s) = G(s)/s$, then inverse-transform.");
  W("transfer-functions", "Impulse response",
    "Output when input is the Dirac delta $\\delta(t)$. Since $\\mathcal L\\{\\delta\\} = 1$, $Y(s) = G(s) \\cdot 1 = G(s)$. So the inverse Laplace of $G(s)$ IS the impulse response. Characterizes the system completely.");
  W("transfer-functions", "Frequency response",
    "$G(j\\omega)$ = transfer function evaluated at $s = j\\omega$ (purely imaginary). $\\omega$ = angular frequency (rad/s). $|G(j\\omega)|$ = magnitude (gain at frequency $\\omega$). $\\angle G(j\\omega)$ = phase shift at frequency $\\omega$.");
  W("transfer-functions", "Time-constant form",
    "$K$ = DC gain. $\\tau_i$ = time constant of $i$-th pole (seconds). Each factor $\\tau_i s + 1$ has corner frequency $1/\\tau_i$. Convenient for Bode-plot sketching since each corner contributes $-20$ dB/dec at $\\omega = 1/\\tau_i$.");

  W("first-order-response", "Impulse response",
    "$h(t)$ = output for impulse input. $\\tau$ = time constant (s). At $t = 0$: $h = 1/\\tau$. Decays exponentially with rate $1/\\tau$.");
  W("first-order-response", "Step response",
    "$y(t)$ = output for unit step input. $\\tau$ = time constant (s). $y_\\infty$ = final value. After 1 time constant: 63.2% of $y_\\infty$. After 3: 95.0%. After 4: 98.2%. After 5: 99.3%.");
  W("first-order-response", "Ramp response",
    "$y(t)$ = output for ramp input ($r(t) = t$). $\\tau$ = time constant. AT STEADY STATE: $y$ tracks the ramp with constant lag of $\\tau$ — the velocity error.");
  W("first-order-response", "Pole location",
    "Pole at $s = -1/\\tau$. $\\tau$ = time constant. FARTHER LEFT in the s-plane (larger $|s|$) = faster decay = smaller $\\tau$. Pole position completely determines first-order behavior.");
  W("first-order-response", "Closed-loop $\\tau$",
    "Original plant time constant $\\tau$. $K$ = proportional gain. Closed-loop time constant: $\\tau/(1 + K)$. HIGHER GAIN → smaller closed-loop $\\tau$ → faster response. No instability possible (first-order can't oscillate).");
  W("first-order-response", "$t_r",
    "$t_r$ = rise time (10% to 90% of final value). $t_s$ = settling time (to within 2% of final). $\\tau$ = time constant. Universal ratios for first-order systems.");

  W("second-order-response", "$G(s) = \\dfrac{\\omega_n^2",
    "$\\omega_n$ = <em>natural frequency</em> (rad/s) — frequency at which the system would oscillate if there were no damping. $\\zeta$ = <em>damping ratio</em> (dimensionless) — measures damping relative to critical. Standard form for second-order systems.");
  W("second-order-response", "$\\%OS",
    "$\\%OS$ = percent overshoot in step response. $\\zeta$ = damping ratio. DEPENDS ONLY on $\\zeta$, not on $\\omega_n$. $\\zeta = 0.4$ → 25% overshoot; $\\zeta = 0.7$ → 5%; $\\zeta = 1$ → 0% (critically damped).");
  W("second-order-response", "$T_p =",
    "$T_p$ = peak time (s) — time to first peak in step response. $T_s$ = 2% settling time (s). $\\omega_d = \\omega_n\\sqrt{1 - \\zeta^2}$ = damped natural frequency. $\\omega_n$ = natural frequency. $\\zeta$ = damping ratio.");
  W("second-order-response", "Step response: $y(t)",
    "$y(t)$ = output (normalized to unit step). $\\zeta$ = damping ratio (must be $< 1$ for this form). $\\omega_n$ = natural frequency. $\\omega_d = \\omega_n\\sqrt{1 - \\zeta^2}$ = damped frequency. $\\phi = \\arctan(\\sqrt{1 - \\zeta^2}/\\zeta)$ = phase offset.");
  W("second-order-response", "Critically damped",
    "Critically damped case: $\\zeta = 1$. $\\omega_n$ = natural frequency. NO oscillation. Fastest response with NO overshoot. Repeated pole at $-\\omega_n$.");
  W("second-order-response", "Number of oscillations",
    "Approximate count of distinguishable overshoots before settling. $\\zeta$ = damping ratio. Smaller $\\zeta$ → more visible oscillations. $\\zeta = 0.5$ → ~3; $\\zeta = 0.1$ → ~15.");
  W("second-order-response", "Sinusoidal frequency",
    "$M_p$ = peak in Bode magnitude plot at resonant frequency $\\omega_r$. $\\zeta$ = damping ratio. $\\omega_r = \\omega_n\\sqrt{1 - 2\\zeta^2}$. NO peak for $\\zeta > 1/\\sqrt 2 \\approx 0.707$.");

  W("routh-hurwitz", "Number of RHP roots",
    "RHP = right half-plane (positive real part). Sign changes counted from top to bottom in the LEFTMOST COLUMN of the Routh array. Each sign change = one unstable pole.");
  W("routh-hurwitz", "Routh entry formula",
    "$a_{i,j}$ = entry at row $i$, column $j$ of the Routh array. Each entry is a 2×2 determinant of the two rows above, divided by the leading entry of the row immediately above. Recursive: row $i$ depends on rows $i-1$ and $i-2$.");
  W("routh-hurwitz", "Auxiliary polynomial",
    "$A(s)$ = auxiliary polynomial built from the row just above an all-zero row. Coefficients of $A$ are the entries of that row, applied to even powers of $s$. Differentiate $A$, use the coefficients in place of the zero row, and continue Routh.");
  W("routh-hurwitz", "$\\epsilon$-method",
    "When a single entry (not the whole row) in the first column is zero, replace it with $\\epsilon > 0$ small. Continue building the array. Take $\\epsilon \\to 0^+$ at the end and count sign changes.");

  W("steady-state-errors", "Error transfer function",
    "$E(s)$ = error in s-domain. $R(s)$ = reference. $G(s)$ = open-loop transfer function (forward path for unity feedback). The denominator $1 + G(s)$ is the closed-loop characteristic polynomial.");
  W("steady-state-errors", "Disturbance steady-state",
    "$e_{ss,d}$ = steady-state error due to a step disturbance. $G_d(s)$ = transfer function from disturbance to error. $G(0)$ = DC gain of the open loop. INTEGRAL action ($G$ has a pole at zero) drives this error to zero.");
  W("steady-state-errors", "$K_p, K_v, K_a",
    "$K_p$ = position constant = $\\lim_{s\\to 0} G(s)$. $K_v$ = velocity constant = $\\lim_{s\\to 0} sG(s)$. $K_a$ = acceleration constant = $\\lim_{s\\to 0} s^2 G(s)$. Larger = smaller steady-state error. Type-$n$ system has $n$ poles at origin.");

  W("bode-plots", "Magnitude (dB)",
    "$|G(j\\omega)|$ = magnitude of frequency response at $\\omega$. dB = 20 × log base 10. FACTOR of 10 in $|G|$ = 20 dB. FACTOR of 2 = 6 dB. $|G| = 1$ = 0 dB. $|G| = 100$ = 40 dB. $|G| = 0.1$ = $-20$ dB.");
  W("bode-plots", "Pole at $\\omega_p$",
    "$\\omega_p$ = pole's corner frequency (= magnitude of the pole). Above the corner, magnitude rolls off at $-20$ dB/dec and phase asymptotes to $-90°$. AT the corner: magnitude is $-3$ dB, phase is $-45°$.");
  W("bode-plots", "Zero at $\\omega_z",
    "$\\omega_z$ = zero's corner frequency. Mirror of a pole: above the corner, contributes $+20$ dB/dec slope and $+90°$ phase asymptote. AT the corner: $+3$ dB and $+45°$.");
  W("bode-plots", "Second-order resonance",
    "$\\omega_n$ = natural frequency. $\\zeta$ = damping ratio. For underdamped ($\\zeta < 1/\\sqrt 2$): magnitude PEAKS near $\\omega_n$ at height $1/(2\\zeta)$. Lower damping → sharper, taller peak.");

  W("nyquist", "$Z = N + P",
    "$Z$ = number of closed-loop poles in the right half-plane (= number of unstable closed-loop poles). $N$ = number of CLOCKWISE encirclements of $-1$ by the Nyquist plot. $P$ = number of OPEN-loop poles in the right half-plane.");

  W("gain-phase-margins", "PM",
    "PM = phase margin (degrees). $\\omega_{gc}$ = gain crossover frequency (rad/s) where $|G| = 1$. $\\angle G(j\\omega_{gc})$ = phase at that frequency. Industry target: PM ≥ 45°.");
  W("gain-phase-margins", "GM",
    "GM = gain margin (dimensionless ratio; often in dB). $\\omega_{pc}$ = phase crossover frequency where $\\angle G = -180°$. $|G(j\\omega_{pc})|$ = magnitude at that frequency. Industry target: GM ≥ 6 dB ($= $ factor of 2).");
  W("gain-phase-margins", "Rule of thumb",
    "$\\zeta$ = closed-loop damping ratio. PM = phase margin in degrees. Approximate relationship for second-order-dominant designs, valid up to PM ≈ 60°. PM = 50° → $\\zeta$ ≈ 0.5.");
  W("gain-phase-margins", "Delay margin",
    "Delay margin (seconds) = maximum pure delay the loop can absorb before instability. PM in RADIANS / $\\omega_{gc}$ in rad/s. Critical for digital implementations where ADC/DAC delay matters.");
  W("gain-phase-margins", "Vector margin",
    "Vector margin = minimum distance from the Nyquist plot to the critical point $-1$. SMALLER is closer to instability. $|S|_\\text{max}$ = peak of sensitivity function. Single number capturing both GM and PM.");
  W("gain-phase-margins", "Sensitivity peak",
    "$M_s$ = peak of $|S(j\\omega)|$ over all frequencies, where $S = 1/(1 + GH)$ is the sensitivity. SMALLER $M_s$ = larger robustness margin. Industry target: $M_s \\leq 2$ (= 6 dB).");

  W("pid-control", "$G_c(s) = K_p",
    "$G_c(s)$ = controller transfer function in the s-domain. $K_p$ = proportional gain. $K_i$ = integral gain. $K_d$ = derivative gain. All three gains have appropriate units (e.g., $K_i$ has units of $K_p$/time).");
  W("pid-control", "$G_c = K_p(1",
    "$K_p$ = proportional gain. $T_i$ = integral time (seconds; reset time). $T_d$ = derivative time (seconds). Industrial form related to $K_p, K_i, K_d$ via $K_i = K_p/T_i$ and $K_d = K_p T_d$.");
  W("pid-control", "Realizable D",
    "Pure differentiator $K_d s$ is non-realizable (amplifies high-frequency noise infinitely). Add a high-frequency pole at $\\omega = N/T_d$ (with $N$ typically 10-100) to filter noise. $N$ = filter coefficient.");
  W("pid-control", "Cohen-Coon",
    "$K$ = process steady-state gain. $\\tau$ = process time constant. $\\theta$ = process dead time (delay). Cohen-Coon formulas designed for processes with significant dead time, where Ziegler-Nichols overshoots.");
  W("pid-control", "IMC tuning",
    "$\\lambda$ = closed-loop time constant (single tuning parameter). $K$ = process gain. $\\tau$ = process time constant. Smaller $\\lambda$ → more aggressive control. Robust default: $\\lambda \\approx \\tau$.");
  W("pid-control", "Anti-windup",
    "$T_t$ = tracking time constant (seconds). $u$ = controller output. $u_\\text{sat}$ = saturated output (actuator-clipped). The difference $u_\\text{sat} - u$ is fed back to the integrator with gain $1/T_t$ to bleed off windup.");

  W("state-space", "$\\dot{\\mathbf x} = A\\mathbf x",
    "$\\mathbf x$ = state vector (dimension $n$ = system order). $A$ = $n \\times n$ system matrix (encodes internal dynamics). $B$ = $n \\times m$ input matrix ($m$ = number of inputs). $C$ = $p \\times n$ output matrix ($p$ = number of outputs). $D$ = $p \\times m$ feedthrough matrix.");
  W("state-space", "$G(s) = C(sI",
    "$I$ = identity matrix (size $n$). $A, B, C, D$ = state-space matrices. $G(s)$ = transfer function matrix (or scalar for SISO). Same plant in two equivalent representations.");
  W("state-space", "Eigenvalues of $A",
    "Eigenvalues of $A$ are the SAME as poles of $G(s)$. The polynomial $\\det(sI - A)$ IS the characteristic polynomial. Determines stability (LHP eigenvalues).");
  W("state-space", "Solution:",
    "$\\mathbf x(t)$ = state at time $t$. $\\mathbf x(0)$ = initial state. $e^{At}$ = matrix exponential (the natural generalization of $e^{at}$ to matrices). $B, \\mathbf u$ as defined above.");
  W("state-space", "Similarity transformation",
    "$T$ = invertible $n \\times n$ matrix (change of basis). $\\tilde A = T^{-1}AT$ has SAME eigenvalues as $A$ but different entries. Used to diagonalize or transform to canonical forms.");
  W("state-space", "Observability matrix",
    "$\\mathcal O$ = observability matrix ($pn \\times n$). $C, A$ = state-space matrices. Stacked rows: $C; CA; CA^2; \\ldots; CA^{n-1}$. Full rank ($= n$) means the state can be reconstructed from outputs.");
  W("state-space", "Modal decomposition",
    "$T$ = matrix whose columns are eigenvectors of $A$. $\\Lambda$ = diagonal matrix of eigenvalues. $A = T\\Lambda T^{-1}$. Free response is a sum of modes $e^{\\lambda_i t}$ scaled by eigenvector components of the initial condition.");

  W("state-space-design", "Linear Quadratic",
    "$\\mathbf x$ = state vector. $\\mathbf u$ = control input. $Q$ = state penalty matrix (positive semidefinite). $R$ = control penalty matrix (positive definite). Larger $Q$ = penalizes deviations more. Larger $R$ = penalizes control effort more.");
  W("state-space-design", "Riccati",
    "$P$ = positive-definite solution of algebraic Riccati equation. Used to compute the optimal LQR feedback gain $K = R^{-1}B^T P$. $A, B$ = state-space matrices. $Q, R$ = LQR penalties.");
  W("state-space-design", "Reference tracking",
    "$\\mathbf u$ = control input. $K$ = state-feedback gain. $\\mathbf x$ = state. $K_r$ = feedforward gain chosen so the closed-loop DC gain from $r$ to $y$ equals 1. $r$ = reference signal.");
  W("state-space-design", "Integral action",
    "$x_I$ = augmented integral state (integral of tracking error $r - y$). $r$ = reference. $y$ = output. Adding $x_I$ to the state vector and including it in the feedback gives zero steady-state error to step references.");

  W("state-observers", "Kalman filter",
    "$L$ = optimal observer gain matrix. $P$ = error covariance from solution to dual Riccati equation. $C$ = output matrix. $R$ = measurement-noise covariance. Smaller $R$ → larger $L$ → trust measurements more.");
  W("state-observers", "Innovation",
    "$\\mathbf{i}$ = innovation vector. $\\mathbf y$ = measured output. $C$ = output matrix. $\\hat{\\mathbf x}$ = estimated state. The innovation is the residual that drives the observer's correction.");
  W("state-observers", "Reduced-order",
    "$C$ = output matrix. If $C$ has rank $p$ (full row rank), $p$ states are directly observed and only $n - p$ need to be estimated. Reduces observer order.");

  W("digital-control", "Difference equation",
    "$y[k]$ = output at sample $k$. $u[k]$ = input at sample $k$. $a_i, b_j$ = coefficients of the discrete transfer function $H(z) = B(z^{-1})/A(z^{-1})$. Direct realization in software via the recursion.");
  W("digital-control", "Final-value theorem (discrete)",
    "$f[\\infty]$ = steady-state output. $F(z)$ = $z$-transform of output. Apply only if $(z-1)F(z)/z$ has all poles strictly inside the unit circle.");
  W("digital-control", "Aliasing rule",
    "$\\omega$ = signal frequency. $\\omega_s = 2\\pi/T$ = sampling angular frequency. Frequencies above Nyquist ($\\omega_s/2$) fold back: a signal at $\\omega$ is indistinguishable from one at $\\omega - n\\omega_s$ after sampling.");
  W("digital-control", "Pole mapping",
    "$s = \\sigma + j\\omega$ = continuous-domain complex frequency. $T$ = sampling period. $z = e^{sT}$ = corresponding discrete pole location. LHP ↔ inside unit disk; $j\\omega$ axis ↔ unit circle.");

  // ============================================================
  // MATH — formulas with non-obvious symbols
  // ============================================================
  W("derivatives", "Power rule",
    "$x$ = independent variable. $n$ = power (can be any real number, integer or not). Valid for all real $x$ if $n$ is a positive integer; for $x > 0$ for general real $n$.");
  W("derivatives", "Product rule",
    "$f, g$ = differentiable functions of $x$. $f', g'$ = their derivatives. Generalizes: derivative of a product is NOT the product of derivatives — you must use this rule.");
  W("derivatives", "Quotient rule",
    "$f, g$ = differentiable functions. $g \\neq 0$. Sign convention: numerator order $f'g - fg'$ (NOT $fg' - f'g$, which gives wrong sign).");
  W("derivatives", "Chain rule",
    "$f, g$ = differentiable functions. $f \\circ g$ = composition: $(f \\circ g)(x) = f(g(x))$. PHYSICALLY: rate of $f$ with respect to $x$ = rate of $f$ with respect to $g$ × rate of $g$ with respect to $x$. The cornerstone of differentiation.");

  W("integrals", "Power rule (integral)",
    "$x$ = variable of integration. $n$ = power, must NOT equal $-1$ (special case: $\\int dx/x = \\ln|x| + C$). $C$ = arbitrary constant of integration.");
  W("integrals", "Substitution",
    "$u$ = new variable, related to $x$ by some substitution $u = g(x)$. $du/dx = g'(x)$, so $du = g'(x)\\,dx$. Chain rule run backwards.");
  W("integrals", "By parts",
    "$u, v$ = differentiable functions of $x$ (you choose). Product rule run backwards. CHOOSE $u$ so that $du$ is simpler; choose $dv$ so that $v$ is easy to compute by integration.");
  W("integrals", "Definite integral",
    "$a, b$ = limits of integration. $F(x)$ = antiderivative of $f(x)$ (i.e., $F' = f$). Result is a number, not a function. FTC: definite integral = $F(b) - F(a)$.");

  W("limits", "$\\epsilon$-$\\delta",
    "$\\epsilon$ (epsilon) = tolerance for the function value. $\\delta$ (delta) = tolerance for the input. STATEMENT: for every $\\epsilon > 0$, there exists $\\delta > 0$ such that whenever $0 < |x - a| < \\delta$, then $|f(x) - L| < \\epsilon$.");

  W("complex-numbers", "Euler formula",
    "$e$ = base of natural log ($\\approx 2.718$). $i$ = imaginary unit ($i^2 = -1$). $\\theta$ = real angle (radians). Connects exponentials to trig: spinning around the unit circle.");
  W("complex-numbers", "Modulus",
    "$z = a + bi$ where $a, b$ are real. $|z|$ = modulus (length) = $\\sqrt{a^2 + b^2}$ — Pythagorean theorem applied to the Argand-plane representation.");
  W("complex-numbers", "Argument",
    "$z$ = complex number. $\\arg z$ = angle (in radians) from the positive real axis to the line connecting origin to $z$. Multi-valued (add $2\\pi n$); principal value usually taken in $(-\\pi, \\pi]$.");

  W("linear-algebra", "Eigenvalue equation",
    "$A$ = $n \\times n$ matrix. $\\mathbf v$ = eigenvector (nonzero). $\\lambda$ = corresponding eigenvalue (scalar). The matrix stretches the eigenvector by factor $\\lambda$ without rotating it. Found from $\\det(A - \\lambda I) = 0$.");
  W("linear-algebra", "Determinant",
    "$A$ = square matrix. $\\det A$ = scalar invariant. Geometrically: signed volume scaling factor. Zero ⇔ singular (non-invertible) ⇔ has zero eigenvalue.");

  W("probability", "Bayes",
    "$A, B$ = events. $P(A)$ = probability of $A$ (prior). $P(A|B)$ = probability of $A$ given $B$ occurred (posterior). $P(B|A)$ = likelihood. $P(B)$ = total probability of $B$ (normalizing constant).");
  W("probability", "Expectation",
    "$X$ = random variable. $E[X]$ = expected value (population mean). For discrete: sum $x \\cdot P(X = x)$. For continuous: integral $x \\cdot f(x)\\,dx$ where $f$ is the probability density.");
  W("probability", "Variance",
    "$X$ = random variable. $\\text{Var}(X)$ = variance (spread). $\\mu = E[X]$ = mean. $\\sigma^2 = \\text{Var}(X)$, $\\sigma = $ standard deviation (same units as $X$).");

  W("statistics", "Sample mean",
    "$\\bar x$ = sample mean. $x_i$ = data points. $n$ = sample size. Estimator of population mean $\\mu$ (unbiased: $E[\\bar x] = \\mu$).");
  W("statistics", "Sample variance",
    "$s^2$ = sample variance. $x_i$ = data points. $\\bar x$ = sample mean. $n$ = sample size. DIVISION BY $n-1$ (not $n$) makes this unbiased (Bessel's correction).");
  W("statistics", "z-score",
    "$z$ = standardized value. $x$ = data point. $\\mu$ = mean. $\\sigma$ = standard deviation. Measures how many standard deviations $x$ lies from the mean.");

  // ============================================================
  // PHYSICS — E&M
  // ============================================================
  W("electrostatics", "Coulomb",
    "$F$ = electrostatic force between two point charges (N). $k = 1/(4\\pi\\epsilon_0) \\approx 9 \\times 10^9$ N·m²/C² (Coulomb's constant). $q_1, q_2$ = the charges (C). $r$ = distance between them (m). Force is along the line joining the charges.");
  W("electrostatics", "Electric field",
    "$\\mathbf E$ = electric field vector (V/m or N/C). $\\mathbf F$ = force on a test charge $q$. Field is a property of space, independent of the test charge.");
  W("electrostatics", "Gauss",
    "$\\Phi_E$ = electric flux through closed surface ($\\oint \\mathbf E \\cdot d\\mathbf A$). $Q_\\text{enc}$ = total charge enclosed by the surface (C). $\\epsilon_0 \\approx 8.85 \\times 10^{-12}$ F/m (permittivity of free space).");
  W("electrostatics", "Capacitance",
    "$C$ = capacitance (farads, F = C/V). $A$ = plate area (m²). $d$ = plate separation (m). $\\epsilon_0 = 8.85 \\times 10^{-12}$ F/m. For dielectric medium: multiply by $\\epsilon_r$ (relative permittivity).");

  W("magnetism-induction", "Lorentz",
    "$\\mathbf F$ = magnetic force on charge (N). $q$ = charge (C). $\\mathbf v$ = velocity (m/s). $\\mathbf B$ = magnetic field (tesla, T = kg/(A·s²)). Force always perpendicular to both $\\mathbf v$ and $\\mathbf B$ — does no work.");
  W("magnetism-induction", "Biot-Savart",
    "$d\\mathbf B$ = field contribution from a current element. $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A (vacuum permeability). $I$ = current (A). $d\\boldsymbol\\ell$ = directed length element along the wire. $\\hat r$ = unit vector from element to field point. $r$ = distance.");
  W("magnetism-induction", "Faraday",
    "$\\mathcal E$ = induced electromotive force (volts). $\\Phi_B$ = magnetic flux through the loop (webers, Wb = T·m²). MINUS SIGN (Lenz's law): the induced EMF opposes the change.");
  W("magnetism-induction", "Inductance",
    "$L$ = self-inductance (henries, H = V·s/A). $\\Phi$ = flux linked (Wb). $I$ = current (A). EMF induced: $V = -L\\,dI/dt$. Energy stored: $\\tfrac{1}{2}LI^2$.");

  W("maxwell-em", "Gauss for $E$",
    "$\\mathbf E$ = electric field. $\\rho$ = charge density (C/m³). $\\epsilon_0 = 8.85 \\times 10^{-12}$ F/m. $\\nabla \\cdot$ = divergence. The first of Maxwell's four equations.");
  W("maxwell-em", "Gauss for $B$",
    "$\\mathbf B$ = magnetic field. No magnetic monopoles (or none found yet) means $\\nabla \\cdot \\mathbf B = 0$ always. Magnetic field lines have no beginning or end.");
  W("maxwell-em", "Faraday (Maxwell)",
    "$\\nabla \\times \\mathbf E$ = curl of electric field. $\\partial \\mathbf B/\\partial t$ = time rate of change of magnetic field. A changing B field creates a circulating E field.");
  W("maxwell-em", "Ampère-Maxwell",
    "$\\nabla \\times \\mathbf B$ = curl of magnetic field. $\\mathbf J$ = current density (A/m²). $\\mu_0 \\epsilon_0 \\partial \\mathbf E/\\partial t$ = Maxwell's displacement current term. $\\mu_0 \\epsilon_0 = 1/c^2$.");
  W("maxwell-em", "Speed of EM",
    "$c$ = speed of light in vacuum. $\\mu_0 \\approx 4\\pi \\times 10^{-7}$ T·m/A. $\\epsilon_0 \\approx 8.85 \\times 10^{-12}$ F/m. The relation $c = 1/\\sqrt{\\mu_0\\epsilon_0}$ predicted that light is EM — Maxwell's stunning 1864 insight.");
  W("maxwell-em", "Poynting",
    "$\\mathbf S$ = Poynting vector = energy flux density (W/m²). $\\mathbf E$ = electric field. $\\mathbf B$ = magnetic field. $\\mu_0$ = vacuum permeability. Direction of $\\mathbf S$ = direction of energy flow.");

  // ============================================================
  // PHYSICS — Thermo / Stat Mech / QM
  // ============================================================
  W("thermodynamics", "First law",
    "$U$ = internal energy of the system (J). $Q$ = heat added to the system (J). $W$ = work done BY the system on surroundings (J). Convention varies; check yours.");
  W("thermodynamics", "Carnot",
    "$\\eta$ = thermodynamic efficiency (dimensionless, between 0 and 1). $T_h$ = hot reservoir temperature (K — must be absolute). $T_c$ = cold reservoir temperature (K). UPPER BOUND on any cyclic engine's efficiency.");
  W("thermodynamics", "Entropy",
    "$S$ = entropy (J/K). $Q_\\text{rev}$ = heat absorbed in a REVERSIBLE process. $T$ = absolute temperature (K). Real processes: $dS > \\delta Q/T$ (second law).");

  W("kinetic-theory", "RMS speed",
    "$v_\\text{rms}$ = root-mean-square molecular speed (m/s). $k_B = 1.38 \\times 10^{-23}$ J/K (Boltzmann constant). $T$ = absolute temperature (K). $m$ = mass of ONE molecule (kg).");
  W("kinetic-theory", "Equipartition",
    "Each quadratic degree of freedom in the Hamiltonian contributes $k_BT/2$ to the average energy. $k_B$ = Boltzmann constant. $T$ = absolute temperature. CLASSICAL result; fails when $k_BT \\ll \\hbar\\omega$ for an oscillator (quantum freeze-out).");
  W("kinetic-theory", "Maxwell-Boltzmann",
    "$f(v)$ = probability density of molecular speeds. $m$ = molecular mass. $k_B$ = Boltzmann constant. $T$ = absolute temperature. Three characteristic speeds: most probable $v_p = \\sqrt{2k_BT/m}$, mean $\\langle v\\rangle = \\sqrt{8k_BT/(\\pi m)}$, rms $v_\\text{rms} = \\sqrt{3k_BT/m}$.");

  W("qm-foundations", "$[\\hat x, \\hat p]",
    "$\\hat x$ = position operator. $\\hat p$ = momentum operator. $i$ = imaginary unit. $\\hbar = h/(2\\pi) \\approx 1.055 \\times 10^{-34}$ J·s (reduced Planck constant). Non-commuting → uncertainty principle.");
  W("qm-foundations", "Uncertainty",
    "$\\Delta x$ = standard deviation of position measurements. $\\Delta p$ = standard deviation of momentum measurements. $\\hbar$ = reduced Planck constant. Equality achieved by Gaussian wavefunctions (minimum-uncertainty states).");
  W("qm-foundations", "Schrödinger",
    "$\\psi(\\mathbf r, t)$ = wavefunction. $i$ = imaginary unit. $\\hbar$ = reduced Planck constant. $\\hat H$ = Hamiltonian operator (total energy). Unitary evolution; preserves probability.");
  W("qm-foundations", "Energy eigenvalue",
    "$\\hat H$ = Hamiltonian (energy operator). $\\psi$ = energy eigenstate. $E$ = energy eigenvalue. Stationary states evolve as $\\psi(t) = \\psi(0)e^{-iEt/\\hbar}$.");
  W("qm-foundations", "Born rule",
    "$P(x)$ = probability density of finding the particle at $x$. $\\psi(x)$ = wavefunction. $|\\psi|^2 = \\psi^*\\psi$ is the absolute square. Probability is always non-negative real.");

  W("qm-1d", "Infinite well",
    "$E_n$ = energy of $n$-th level. $n = 1, 2, 3, \\ldots$ = principal quantum number. $\\hbar$ = reduced Planck constant. $m$ = particle mass. $L$ = well width. Ground-state energy is NOT zero (zero-point energy).");
  W("qm-1d", "Harmonic oscillator",
    "$E_n$ = energy of $n$-th level. $n = 0, 1, 2, \\ldots$ (note: starts at zero). $\\hbar$ = reduced Planck constant. $\\omega = \\sqrt{k/m}$ = angular frequency. Energy levels are EQUALLY spaced by $\\hbar\\omega$.");
  W("qm-1d", "Tunneling",
    "$T$ = transmission probability (dimensionless, between 0 and 1). $\\kappa = \\sqrt{2m(V - E)}/\\hbar$ = decay rate inside the barrier. $L$ = barrier width. $V$ = barrier height; $E$ = particle energy (with $V > E$).");

  // ============================================================
  // MORE CONTROL FORMULAS
  // ============================================================
  W("intro-control", "$E = R - C$",
    "$E$ = error signal (input to controller). $R$ = reference / set point (what you want). $C$ = measured output (what you have). Closed loop drives $E$ toward zero.");
  W("intro-control", "$T = \\dfrac{G}",
    "$T$ = closed-loop transfer function (from reference to output). $G$ = forward path (controller × plant). $H$ = feedback path (sensor dynamics; often 1 for unity feedback). For high loop gain ($|GH| \\gg 1$): $T \\approx 1/H$.");
  W("intro-control", "Disturbance rejection",
    "Disturbance-to-output transfer function. $G$ = forward path. $H$ = feedback. Higher loop gain $|GH|$ → smaller transmission of disturbances. The whole reason feedback is powerful.");
  W("intro-control", "Sensitivity $S",
    "$S$ = sensitivity function = transfer from disturbance to output. Small $|S|$ means good rejection. Tracks how sensitive the output is to PLANT changes.");
  W("intro-control", "Complementary $T",
    "$T$ = complementary sensitivity = transfer from reference to output (in unity feedback). $S + T = 1$ always. SMALL $|T|$ rejects sensor noise; LARGE $|T|$ tracks references.");
  W("intro-control", "Loop gain",
    "$L$ = loop gain = product of all blocks around the feedback loop. Most important compound quantity in control. Bode plots and Nyquist plots are usually plots of $L$.");

  W("laplace-transforms-control", "$F(s) = \\int_0^",
    "$f(t)$ = function of time, $t \\geq 0$. $F(s)$ = Laplace transform. $s$ = complex variable ($s = \\sigma + j\\omega$). Converges for $\\text{Re}(s) > $ some lower bound (region of convergence).");
  W("laplace-transforms-control", "$\\mathcal L\\{\\dot f\\} = sF(s) - f(0)",
    "$\\dot f$ = time derivative of $f$. $F(s)$ = Laplace of $f$. $f(0^-)$ = value just before $t = 0$ (encodes initial condition). For zero initial condition: simply $sF(s)$.");
  W("laplace-transforms-control", "$\\lim_{t\\to\\infty}",
    "Final-value theorem. $f(\\infty)$ = steady-state value (if it exists). $F(s)$ = Laplace transform. VALID only if $sF(s)$ has all poles in the LHP (else $f$ doesn't actually settle).");
  W("laplace-transforms-control", "$\\mathcal L\\{\\ddot f\\}",
    "$\\ddot f$ = second derivative of $f$. $f(0)$, $\\dot f(0)$ = initial conditions. For zero initial conditions: simply $s^2 F(s)$.");
  W("laplace-transforms-control", "$\\mathcal L\\{e^{-at}",
    "Frequency-shifting theorem. $a$ = real constant (or complex). MULTIPLYING by $e^{-at}$ in time-domain corresponds to a SHIFT of the Laplace transform by $a$.");
  W("laplace-transforms-control", "$\\mathcal L\\{f(t-\\tau)",
    "Time-shifting theorem. $\\tau$ = delay (seconds, $\\tau > 0$). $u(t - \\tau)$ = unit step starting at $\\tau$. The factor $e^{-s\\tau}$ in the s-domain represents a pure delay of $\\tau$ seconds.");
  W("laplace-transforms-control", "$\\mathcal L\\{tf(t)",
    "Multiplication by $t$ in time-domain corresponds to negative differentiation in s-domain. Useful for computing transforms involving $te^{-at}$, $t\\cos\\omega t$, etc.");
  W("laplace-transforms-control", "$\\mathcal L\\{f \\ast g\\}",
    "$f \\ast g$ = convolution: $(f \\ast g)(t) = \\int_0^t f(\\tau)g(t-\\tau)d\\tau$. Becomes ordinary multiplication in s-domain. Why series blocks multiply their transfer functions.");

  // ============================================================
  // GENERAL MATHEMATICAL CONSTANTS (referenced in many formulas)
  // (we don't have these as standalone, but mention them in topics)
  // ============================================================
  W("trigonometry", "Pythagoras",
    "$a, b$ = legs of right triangle. $c$ = hypotenuse (longest side, opposite the right angle). VALID only for right triangles.");
  W("trigonometry", "Sine",
    "$\\theta$ = angle (in radians for calculus, in degrees for elementary geometry). 'Opposite' = side opposite to $\\theta$. 'Hypotenuse' = side opposite to the right angle.");
  W("trigonometry", "Law of cosines",
    "$a, b, c$ = sides of triangle. $C$ = angle opposite to side $c$. GENERALIZES Pythagoras (which is the special case $C = 90°$, $\\cos C = 0$).");

  W("logarithms", "Definition",
    "$b$ = base of the logarithm ($b > 0, b \\neq 1$). $x$ = argument ($x > 0$). $\\log_b x$ = the power to which $b$ must be raised to get $x$.");
  W("logarithms", "$\\log_b 1 = 0",
    "$b$ = any valid log base. Anchor values: $b^0 = 1$ (so log of 1 is 0) and $b^1 = b$ (so log of $b$ is 1). Used to check work and locate landmark values.");
  W("logarithms", "Change of base",
    "$a, b$ = two different log bases (both positive, not 1). $x$ = argument ($x > 0$). LETS you compute any log using a calculator that has only natural log (ln) or common log (log_10).");

  // ============================================================
  // BATCH 2 — extending coverage across remaining topics
  // ============================================================

  // ----- MATH -----
  W("arithmetic-foundations", "PEMDAS",
    "Operator precedence: Parentheses, Exponents, Multiplication and Division (left to right), Addition and Subtraction (left to right). UNIVERSAL convention so that $3 + 4 \\times 2$ has one definite meaning.");
  W("arithmetic-foundations", "Absolute value",
    "$x$ = real number. $|x|$ = distance from $x$ to 0 on the number line. Always non-negative; $|x| = x$ for $x \\geq 0$, $|x| = -x$ for $x < 0$.");
  W("arithmetic-foundations", "Negative",
    "$a$ = any real number. Two negatives cancel: $-(-a) = a$. Equivalent to saying that 'opposite of opposite' returns the original.");
  W("arithmetic-foundations", "Distributive",
    "$a, b, c$ = real numbers. Multiplication distributes over addition. CONSEQUENCE: $a \\cdot 0 = 0$ and $-1 \\cdot a = -a$.");
  W("arithmetic-foundations", "Prime factorization",
    "$n$ = positive integer $> 1$. $p_1, p_2, \\ldots$ = distinct primes. $e_1, e_2, \\ldots$ = positive integer exponents. UNIQUE up to ordering (Fundamental Theorem of Arithmetic).");
  W("arithmetic-foundations", "Euclidean algorithm",
    "$a, b$ = positive integers. $a \\bmod b$ = remainder when $a$ is divided by $b$. RECURSIVE: repeatedly replace the larger number by the remainder until reaching 0. Last nonzero remainder is $\\gcd$.");

  W("fractions-percentages", "Common denominator",
    "$a, b, c, d$ = integers (or any numbers). $b, d \\neq 0$. RESULT is in lowest terms if you divide by gcd of numerator and denominator afterward.");
  W("fractions-percentages", "Multiplication",
    "Numerators multiply across; denominators multiply across. No common denominator needed. Reduce after.");
  W("fractions-percentages", "Division",
    "$a/b \\div c/d = a/b \\times d/c$. INVERT the second fraction and multiply.");
  W("fractions-percentages", "Percentage",
    "$p$ = percentage (number between 0 and 100, or larger). $x$ = base quantity. $p\\%$ of $x = (p/100) \\cdot x$.");

  W("exponents-roots", "$a^m a^n",
    "$a$ = base ($a > 0$ for general real exponents). $m, n$ = exponents (real). Same base — add exponents.");
  W("exponents-roots", "$(a^m)^n",
    "$a$ = base. $m, n$ = exponents. Power of a power — multiply exponents.");
  W("exponents-roots", "$a^{-n}",
    "$a$ = nonzero base. $n$ = positive integer (or real). Negative exponent flips to denominator.");
  W("exponents-roots", "$a^{1/n}",
    "$a \\geq 0$ for real $n$-th root (even $n$); $a$ any real for odd $n$. $n$ = positive integer. Symbol $\\sqrt[n]{a}$ = $n$-th root.");
  W("exponents-roots", "Rationalize",
    "Multiply numerator and denominator by the conjugate radical to eliminate the radical from the denominator. Standard form for hand calculation.");

  W("ratios-proportions", "Ratio",
    "$a, b$ = quantities being compared. Ratio $a:b$ = same as fraction $a/b$. Order matters: $3:5$ ≠ $5:3$.");
  W("ratios-proportions", "Proportion",
    "$a/b = c/d$ ⟺ $ad = bc$ (cross-multiplication). SOLVES for any one unknown given the other three.");
  W("ratios-proportions", "Direct proportion",
    "$x, y$ = related quantities. $k$ = constant of proportionality. Doubling $x$ doubles $y$. Graph is a line through origin.");
  W("ratios-proportions", "Inverse proportion",
    "$x, y$ = related quantities. $k$ = constant. Doubling $x$ halves $y$. Graph is a hyperbola.");

  W("linear-equations", "Line",
    "$x, y$ = coordinates. $m$ = slope (rise over run). $b$ = y-intercept (value of $y$ when $x = 0$).");
  W("linear-equations", "Slope",
    "$(x_1, y_1), (x_2, y_2)$ = two distinct points. $m$ = slope. Undefined for vertical lines ($x_1 = x_2$).");
  W("linear-equations", "Two-point form",
    "$(x_1, y_1)$ = a known point. $m$ = slope. Point-slope form of a line.");

  W("inequalities", "Multiplication by negative",
    "When multiplying or dividing an inequality by a NEGATIVE number, REVERSE the inequality sign. The single most-forgotten rule.");
  W("inequalities", "Absolute value (less than)",
    "$|x| < r$ ⟺ $-r < x < r$. Equivalent to 'distance from 0 less than $r$.' Always a single interval.");
  W("inequalities", "Absolute value (greater than)",
    "$|x| > r$ ⟺ $x < -r$ or $x > r$. Equivalent to 'distance from 0 greater than $r$.' Two separate rays.");
  W("inequalities", "AM-GM",
    "$a, b \\geq 0$. Arithmetic mean ≥ geometric mean. Equality iff $a = b$. Generalizes to $n$ terms.");
  W("inequalities", "Cauchy-Schwarz",
    "$\\mathbf u, \\mathbf v$ = vectors in an inner-product space. $\\langle \\cdot,\\cdot\\rangle$ = inner product. $\\|\\cdot\\|$ = norm. Equality iff $\\mathbf u$ and $\\mathbf v$ are parallel.");
  W("inequalities", "Triangle inequality",
    "$a, b$ = real numbers (or vectors). The length of a sum is at most the sum of lengths. Geometrically: shortest path between two points is a straight line.");

  W("plane-geometry", "Sum of angles",
    "Sum of interior angles of any triangle is 180°. EQUIVALENT to the parallel postulate. False in non-Euclidean geometries (spheres: > 180°; hyperbolic: < 180°).");
  W("plane-geometry", "Pythagoras",
    "$a, b$ = legs of right triangle. $c$ = hypotenuse (opposite the right angle).");
  W("plane-geometry", "Triangle area",
    "$b$ = base (any side). $h$ = perpendicular height to that base. Works for any triangle.");
  W("plane-geometry", "Heron",
    "$a, b, c$ = sides. $s = (a+b+c)/2$ = semi-perimeter. Gives the area without knowing any angle.");
  W("plane-geometry", "Inscribed angle",
    "$\\theta_c$ = central angle subtending an arc. $\\theta_i$ = inscribed angle subtending the same arc. The inscribed angle is HALF the central angle.");
  W("plane-geometry", "Circle",
    "$r$ = radius. $C = 2\\pi r$ (circumference). $A = \\pi r^2$ (area). $\\pi \\approx 3.14159$ is irrational and transcendental.");

  W("number-theory", "Fermat little",
    "$p$ = prime. $a$ = integer not divisible by $p$. $a^{p-1} \\equiv 1 \\pmod p$. Used in primality testing and RSA cryptography.");
  W("number-theory", "Euler totient",
    "$n$ = positive integer. $\\phi(n)$ = number of integers in $\\{1, 2, \\ldots, n\\}$ coprime to $n$. Multiplicative: $\\phi(mn) = \\phi(m)\\phi(n)$ for $\\gcd(m, n) = 1$. $\\phi(p) = p - 1$ for prime $p$.");
  W("number-theory", "Bezout",
    "$a, b$ = integers (not both 0). $d = \\gcd(a, b)$. INTEGERS $x, y$ found by extended Euclidean algorithm.");
  W("number-theory", "Chinese remainder",
    "$m_1, m_2, \\ldots, m_k$ = pairwise coprime moduli. $a_1, \\ldots, a_k$ = arbitrary residues. SOLUTION $x$ exists and is unique modulo $m_1 m_2 \\cdots m_k$.");

  W("combinatorics", "$\\binom{n}{k}",
    "$n$ = total number of items. $k$ = number to choose ($0 \\leq k \\leq n$). $n!$ = $n$ factorial = $n(n-1)(n-2)\\cdots 2 \\cdot 1$. Counts subsets of size $k$.");
  W("combinatorics", "Permutations",
    "$n$ = number of distinct items. $n!$ = factorial. Counts orderings.");
  W("combinatorics", "$k$-permutations",
    "$n$ = total items. $k$ = number chosen and arranged in order. Equals $n(n-1)\\cdots(n-k+1)$ = falling factorial.");
  W("combinatorics", "Stars and bars",
    "$n$ = total items to distribute. $k$ = number of bins. Number of ways to put $n$ identical items into $k$ distinguishable bins (no restriction).");
  W("combinatorics", "Inclusion-exclusion",
    "$A_i$ = events or sets. Alternating sum: add singles, subtract doubles, add triples, etc. UNIVERSAL technique for counting unions.");
  W("combinatorics", "Pigeonhole",
    "$n$ items, $k$ boxes, $n > k$. At least one box has ≥ 2 items. GENERALIZED: $kn + 1$ items in $k$ boxes forces some box to have ≥ $n + 1$.");

  W("quadratic-equations", "Quadratic formula",
    "$a, b, c$ = coefficients of $ax^2 + bx + c = 0$, $a \\neq 0$. Discriminant $b^2 - 4ac$ determines: positive → two real roots, zero → one repeated root, negative → two complex conjugate roots.");
  W("quadratic-equations", "Discriminant",
    "$\\Delta = b^2 - 4ac$ = discriminant of quadratic. Sign determines nature of roots; magnitude gives spacing between them.");
  W("quadratic-equations", "Vieta",
    "$\\alpha, \\beta$ = roots of $ax^2 + bx + c = 0$. Sum and product of roots are determined by the coefficients without solving.");
  W("quadratic-equations", "Completing the square",
    "$a, b, c$ = quadratic coefficients. Rewrites the quadratic so the variable $x$ appears in only one place, making the vertex obvious.");

  W("polynomials-rational", "Factor theorem",
    "$p(x)$ = polynomial. $c$ = constant. $c$ is a root ⟺ $(x - c)$ divides $p(x)$.");
  W("polynomials-rational", "Remainder theorem",
    "$p(x)$ = polynomial. $c$ = constant. The remainder when $p$ is divided by $x - c$ equals $p(c)$ (evaluate at $c$).");
  W("polynomials-rational", "Rational root",
    "$p(x) = a_n x^n + \\ldots + a_0$ with integer coefficients. Any rational root $p/q$ in lowest terms has $p | a_0$ and $q | a_n$.");
  W("polynomials-rational", "Fundamental theorem of algebra",
    "Every non-constant polynomial with complex coefficients has at least one complex root. Hence degree-$n$ polynomial has exactly $n$ complex roots with multiplicity.");
  W("polynomials-rational", "Partial fractions",
    "$P(x), Q(x)$ = polynomials with $\\deg P < \\deg Q$. $Q$ factored into linear and quadratic factors. Decomposes into a sum of simple rational pieces — essential for integration and inverse Laplace.");

  W("functions-graphs", "Function",
    "$A$ = domain. $B$ = codomain. $f$ = function. Each input has EXACTLY ONE output. RANGE = subset of $B$ actually achieved.");
  W("functions-graphs", "Composition",
    "$f, g$ = functions. $(f \\circ g)(x) = f(g(x))$ — apply $g$ first, then $f$. Order matters: $f \\circ g \\neq g \\circ f$ in general.");
  W("functions-graphs", "Inverse",
    "$f$ = bijective function. $f^{-1}$ = inverse function. $f^{-1}(f(x)) = x$ and $f(f^{-1}(y)) = y$. Graph reflects across $y = x$.");
  W("functions-graphs", "Even/odd",
    "Even: $f(-x) = f(x)$ — symmetric about y-axis. Odd: $f(-x) = -f(x)$ — symmetric about origin. Most functions are neither.");

  W("sequences-series", "Arithmetic",
    "$a_1$ = first term. $d$ = common difference (constant). Linear in $n$.");
  W("sequences-series", "Geometric",
    "$a_1$ = first term. $r$ = common ratio (constant). Exponential in $n$.");
  W("sequences-series", "Geometric sum",
    "$S_n$ = sum of first $n$ terms. $a_1$ = first term. $r$ = ratio ($r \\neq 1$). For infinite sum with $|r| < 1$: $S_\\infty = a_1/(1-r)$.");
  W("sequences-series", "Harmonic",
    "$H_n$ = $n$-th harmonic number. As $n \\to \\infty$: $H_n \\sim \\ln n + \\gamma$ where $\\gamma \\approx 0.577$ is the Euler-Mascheroni constant. DIVERGES (slowly).");
  W("sequences-series", "$p$-series",
    "$p$ = positive real. Converges iff $p > 1$. Borderline case $p = 1$ is the harmonic series, which diverges.");
  W("sequences-series", "Ratio test",
    "$\\sum a_n$ = series of positive terms (or apply to $|a_n|$). $L$ = limit of $a_{n+1}/a_n$. $L < 1$: converges. $L > 1$: diverges. $L = 1$: inconclusive.");
  W("sequences-series", "Comparison",
    "$0 \\leq a_n \\leq b_n$. If $\\sum b_n$ converges, so does $\\sum a_n$. Converse: if $\\sum a_n$ diverges, so does $\\sum b_n$.");

  W("limits", "Sin/x",
    "$x$ = real variable, approaching 0 from either side. Limit equals 1 (in radians). FOUNDATIONAL — needed to differentiate trig functions.");
  W("limits", "$(1+1/n)^n",
    "$n \\to \\infty$ along the natural numbers. $e \\approx 2.71828$ — Euler's number. Equivalent definitions: $\\sum 1/n!$ or unique solution to $f'(0) = 1$ for $f(x) = a^x$.");
  W("limits", "L'Hôpital",
    "$f, g$ = differentiable functions. Indeterminate form $0/0$ or $\\infty/\\infty$. REPLACE numerator and denominator with their derivatives. Iterate if still indeterminate.");

  W("integrals", "Definite",
    "$f$ = continuous function (sufficient). $a, b$ = limits. $F$ = any antiderivative of $f$ ($F' = f$). Constant of integration cancels.");
  W("integrals", "FTC",
    "Fundamental Theorem of Calculus. $f$ continuous on $[a, b]$. Differentiation and integration are inverse operations.");

  W("vector-algebra", "Magnitude",
    "$\\mathbf v = (v_1, v_2, v_3)$ = vector components. $|\\mathbf v|$ = magnitude (length). PYTHAGORAS in $n$ dimensions.");
  W("vector-algebra", "Dot product",
    "$\\mathbf a, \\mathbf b$ = vectors. $\\theta$ = angle between them. SCALAR result. Positive: acute angle. Zero: perpendicular. Negative: obtuse.");
  W("vector-algebra", "Cross product",
    "$\\mathbf a, \\mathbf b$ = vectors in $\\mathbb R^3$. $\\theta$ = angle between them. $\\hat n$ = unit normal (right-hand rule). VECTOR result, perpendicular to both inputs.");
  W("vector-algebra", "Triple product",
    "$\\mathbf a, \\mathbf b, \\mathbf c$ = three vectors. SCALAR equal to the signed volume of the parallelepiped they span.");

  W("linear-algebra", "Matrix multiplication",
    "$A$ = $m \\times k$ matrix. $B$ = $k \\times n$ matrix. $AB$ = $m \\times n$ matrix. Inner dimensions must match. Order matters: $AB \\neq BA$ in general.");
  W("linear-algebra", "Trace",
    "$A$ = square matrix. $\\text{tr}(A)$ = sum of diagonal entries. Equals sum of eigenvalues (with multiplicity).");
  W("linear-algebra", "Inverse",
    "$A$ = square matrix. $A^{-1}$ exists iff $\\det A \\neq 0$. $A A^{-1} = A^{-1} A = I$. For $2\\times 2$ matrix: $A^{-1} = (1/\\det A) \\cdot \\text{adj}(A)$.");
  W("linear-algebra", "Rank",
    "$A$ = matrix. $\\text{rank}(A)$ = number of linearly independent rows (= columns). Maximum rank = $\\min(m, n)$.");
  W("linear-algebra", "Orthogonal",
    "$Q$ = square matrix. $Q^T Q = I$. Preserves lengths and angles: $|Q\\mathbf x| = |\\mathbf x|$. Determinant $\\pm 1$.");

  W("multivariable-calculus", "Partial derivative",
    "$f(x, y)$ = function of two variables. $\\partial f/\\partial x$ = derivative treating $y$ as constant.");
  W("multivariable-calculus", "Gradient",
    "$f(\\mathbf r)$ = scalar function. $\\nabla f$ = vector of partial derivatives. POINTS in the direction of steepest increase; magnitude is the steepness.");
  W("multivariable-calculus", "Directional derivative",
    "$\\hat u$ = unit vector specifying direction. $\\nabla f$ = gradient at the point. RATE of change of $f$ in direction $\\hat u$. Maximum when $\\hat u$ aligns with gradient.");
  W("multivariable-calculus", "Hessian",
    "$f$ = twice-differentiable function. $H$ = matrix of second partials. At a critical point: positive definite → local min; negative definite → local max; indefinite → saddle.");
  W("multivariable-calculus", "Lagrange",
    "$f$ = function to extremize. $g = 0$ = constraint. $\\lambda$ = Lagrange multiplier (one per constraint).");
  W("multivariable-calculus", "Jacobian",
    "$(x, y), (u, v)$ = old and new coordinates. $J$ = Jacobian determinant. Needed when changing variables in multiple integrals: $dA_{xy} = |J|\\,dA_{uv}$.");

  W("vector-calculus", "Divergence",
    "$\\mathbf F = (F_x, F_y, F_z)$ = vector field. $\\nabla \\cdot \\mathbf F$ = scalar (a number at each point). MEASURES net outflow per unit volume.");
  W("vector-calculus", "Curl",
    "$\\mathbf F$ = vector field. $\\nabla \\times \\mathbf F$ = vector field. MEASURES local rotation; direction is the axis of rotation (right-hand rule).");
  W("vector-calculus", "Gradient theorem",
    "$\\nabla f$ = gradient. $C$ = curve from point $A$ to point $B$. CONSEQUENCE: gradient fields are conservative — path-independent line integrals.");
  W("vector-calculus", "Stokes",
    "$C$ = closed curve bounding surface $S$. $\\mathbf F$ = vector field. Line integral around boundary = surface integral of curl.");
  W("vector-calculus", "Divergence theorem",
    "$V$ = volume. $S = \\partial V$ = boundary surface. $\\mathbf F$ = vector field. Flux through boundary = integral of divergence inside.");

  W("ode", "Linear first-order",
    "$y$ = unknown function of $x$. $p(x), q(x)$ = given functions. $y'$ = $dy/dx$. INTEGRATING FACTOR $\\mu = e^{\\int p\\,dx}$ multiplies both sides to make the left a perfect derivative.");
  W("ode", "Separable",
    "$y$ = unknown function. $f, g$ = given functions. SEPARATE: $dy/g(y) = f(x)\\,dx$; integrate both sides.");
  W("ode", "Linear second-order",
    "$y$ = unknown. $a, b, c$ = constants (real). $f(t)$ = forcing. HOMOGENEOUS solution from characteristic equation $a r^2 + br + c = 0$; particular solution depends on $f$.");
  W("ode", "Characteristic equation",
    "$r$ = unknown root. $a, b, c$ = ODE coefficients. Roots determine homogeneous solution form: real distinct ($e^{r_1 t}, e^{r_2 t}$), repeated ($e^{rt}, te^{rt}$), or complex ($e^{\\alpha t}\\cos\\beta t, e^{\\alpha t}\\sin\\beta t$).");
  W("ode", "Variation of parameters",
    "$y_1, y_2$ = homogeneous solutions. $W$ = Wronskian. $f$ = forcing. PARTICULAR solution constructed without guessing.");

  W("pde", "Wave",
    "$u(x, t)$ = wave displacement. $c$ = wave speed (m/s). $u_{tt}$ = second time derivative. $u_{xx}$ = second space derivative. SOLUTIONS: any function of $x \\pm ct$.");
  W("pde", "Heat",
    "$u(x, t)$ = temperature. $\\alpha$ = thermal diffusivity. $u_t$ = time derivative. $u_{xx}$ = second space derivative. INFINITE signal speed (defect).");
  W("pde", "Laplace",
    "$u(\\mathbf r)$ = steady-state field. $\\nabla^2$ = Laplacian (sum of second partials). Describes equilibrium: electrostatics, steady heat, irrotational flow.");
  W("pde", "d'Alembert",
    "$u(x, t)$ = wave equation solution. $f, g$ = initial position and velocity functions. $c$ = wave speed. EXPLICIT formula — no need for Fourier methods for 1D wave.");
  W("pde", "Heat fundamental solution",
    "$u(x, t)$ = response to a unit impulse at origin. $\\alpha$ = diffusivity. $t > 0$. GAUSSIAN spreading with width $\\propto \\sqrt t$.");

  W("real-analysis", "Cauchy",
    "$(a_n)$ = sequence. EVENTUALLY close: for any $\\epsilon$ small, all terms past some index are within $\\epsilon$ of each other. $\\mathbb R$ is COMPLETE: every Cauchy sequence converges.");
  W("real-analysis", "Bolzano-Weierstrass",
    "Every bounded sequence in $\\mathbb R^n$ has a convergent subsequence. EQUIVALENT to compactness of bounded closed sets.");
  W("real-analysis", "Mean value theorem",
    "$f$ = continuous on $[a, b]$, differentiable on $(a, b)$. AT LEAST one $c$ in $(a, b)$ where the tangent slope equals the average slope.");

  W("complex-analysis", "Cauchy-Riemann",
    "$f = u + iv$ analytic. $u, v$ = real and imaginary parts. CR equations relate partials of $u$ and $v$. EQUIVALENT to complex differentiability.");
  W("complex-analysis", "Cauchy theorem",
    "$f$ = holomorphic on a simply connected domain. $C$ = closed contour in the domain. INTEGRAL is zero.");
  W("complex-analysis", "Cauchy integral",
    "$f$ = holomorphic. $z_0$ = point inside contour $C$. INTERIOR values of $f$ are determined by boundary values.");
  W("complex-analysis", "Residue",
    "$f$ = function with isolated singularity at $z_0$. RESIDUE = coefficient of $(z - z_0)^{-1}$ in Laurent expansion. KEY ingredient of residue theorem.");
  W("complex-analysis", "Liouville",
    "$f$ = entire (holomorphic on all of $\\mathbb C$) and bounded. CONCLUSION: $f$ is constant. CONSEQUENCE: nontrivial entire functions must be unbounded.");

  // ----- PHYSICS BATCH 2 -----
  W("rotational", "$\\tau = I\\alpha",
    "$\\boldsymbol\\tau$ = net torque vector (N·m). $I$ = moment of inertia about the rotation axis (kg·m²). $\\boldsymbol\\alpha$ = angular acceleration (rad/s²). ROTATIONAL Newton's 2nd law.");
  W("rotational", "Moment of inertia",
    "$I$ = moment of inertia (kg·m²). $m_i$ = mass of particle $i$. $r_i$ = perpendicular distance from particle to rotation axis. CONTINUOUS form: $I = \\int r^2\\,dm$.");
  W("rotational", "Rotational KE",
    "$K$ = rotational kinetic energy (J). $I$ = moment of inertia. $\\omega$ = angular velocity (rad/s). For combined translation + rotation: add $\\tfrac{1}{2}mv_\\text{CM}^2$.");
  W("rotational", "Angular momentum",
    "$\\mathbf L$ = angular momentum vector (kg·m²/s). $I$ = moment of inertia. $\\boldsymbol\\omega$ = angular velocity. CONSERVED when net external torque is zero.");
  W("rotational", "Parallel axis",
    "$I_\\parallel$ = moment of inertia about a parallel axis distance $d$ from center of mass. $I_\\text{CM}$ = moment about CM axis. $M$ = total mass. $d$ = perpendicular distance.");
  W("rotational", "Rolling",
    "$v$ = translational speed of CM. $R$ = radius. $\\omega$ = angular velocity. CONSTRAINT for rolling without slipping.");

  W("fluids", "Pressure depth",
    "$p$ = pressure at depth $h$ below surface (Pa). $p_0$ = pressure at surface. $\\rho$ = fluid density (kg/m³). $g$ = gravity (m/s²). $h$ = depth (m).");
  W("fluids", "Pascal",
    "$F_1/A_1 = F_2/A_2$ — pressure is constant in a connected fluid. CONSEQUENCE: hydraulic press multiplies force by area ratio.");
  W("fluids", "Archimedes",
    "$F_b$ = buoyant force (N). $\\rho_\\text{fluid}$ = density of displaced fluid. $V_\\text{displaced}$ = volume of fluid displaced by object. $g$ = gravity.");
  W("fluids", "Continuity",
    "$A_1 v_1 = A_2 v_2$ for incompressible flow. $A$ = cross-sectional area. $v$ = flow speed. Volume flow rate conserved.");
  W("fluids", "Bernoulli",
    "$p$ = pressure. $\\rho$ = fluid density. $v$ = flow speed. $g$ = gravity. $h$ = elevation. SUM is constant along a streamline (steady, incompressible, inviscid).");
  W("fluids", "Reynolds",
    "$\\text{Re}$ = Reynolds number (dimensionless). $\\rho$ = density. $v$ = characteristic speed. $L$ = characteristic length. $\\mu$ = dynamic viscosity (Pa·s).");

  W("kinetic-theory", "Ideal gas",
    "$p$ = pressure (Pa). $V$ = volume (m³). $N$ = number of molecules. $k_B$ = Boltzmann constant ($1.38 \\times 10^{-23}$ J/K). $T$ = absolute temperature (K). Equivalent: $pV = nRT$ with $n$ = moles, $R = N_A k_B$.");
  W("kinetic-theory", "Mean free path",
    "$\\lambda$ = mean free path (m). $n$ = number density (1/m³). $d$ = molecular diameter (m). DISTANCE between successive collisions.");

  W("thermodynamics", "Second law",
    "Total entropy never decreases. $\\Delta S_\\text{tot} \\geq 0$ for any process; equality for reversible processes.");
  W("thermodynamics", "Heat engine",
    "$\\eta$ = efficiency. $W$ = work output. $Q_h$ = heat absorbed from hot reservoir. $Q_c$ = heat dumped to cold reservoir.");
  W("thermodynamics", "Adiabatic",
    "$\\gamma = C_p/C_v$ = ratio of specific heats. $p$ = pressure. $V$ = volume. ADIABATIC: no heat exchange ($Q = 0$).");
  W("thermodynamics", "Specific heat",
    "$C$ = heat capacity (J/K). $Q$ = heat. $\\Delta T$ = temperature change. Subscripts: $C_V$ constant volume, $C_p$ constant pressure.");

  W("waves", "Wave equation",
    "$v = f\\lambda$. $v$ = wave speed (m/s). $f$ = frequency (Hz). $\\lambda$ = wavelength (m). ALL waves obey this.");
  W("waves", "Traveling wave",
    "$y(x, t)$ = displacement. $A$ = amplitude. $k = 2\\pi/\\lambda$ = wavenumber (1/m). $\\omega = 2\\pi f$ = angular frequency (rad/s). Phase $kx - \\omega t$ for rightward-moving wave.");
  W("waves", "Doppler",
    "$f_o$ = frequency heard by observer. $f_s$ = source frequency. $v$ = wave speed. $v_o, v_s$ = observer and source speeds (with sign convention). UPPER/LOWER signs depending on motion direction.");
  W("waves", "Standing wave",
    "$L$ = length. $n = 1, 2, 3, \\ldots$. For string fixed at both ends: harmonics at $f_n = nv/(2L)$. For open-open or closed-closed pipe: same. Closed-open pipe: only odd harmonics.");

  W("optics-geometric", "Snell",
    "$n_1, n_2$ = refractive indices of two media. $\\theta_1$ = incident angle (from normal). $\\theta_2$ = refracted angle. Light bends TOWARD the normal when entering a denser medium ($n_2 > n_1$).");
  W("optics-geometric", "Thin lens",
    "$f$ = focal length. $d_o$ = object distance. $d_i$ = image distance. SIGN convention: $f > 0$ converging, $f < 0$ diverging; $d_i > 0$ real image, $d_i < 0$ virtual.");
  W("optics-geometric", "Magnification",
    "$m$ = magnification. $d_o, d_i$ = object and image distances. NEGATIVE $m$ → inverted; $|m| > 1$ → enlarged.");
  W("optics-geometric", "Critical angle",
    "$\\theta_c$ = critical angle. $n_1, n_2$ = refractive indices ($n_1 > n_2$). Above $\\theta_c$: total internal reflection — basis of fiber optics.");

  W("ac-circuits", "Impedance",
    "$Z$ = impedance (Ω). $R$ = resistance. $X = X_L - X_C$ = net reactance. $X_L = \\omega L$ inductive; $X_C = 1/(\\omega C)$ capacitive. $\\omega = 2\\pi f$.");
  W("ac-circuits", "Resonance",
    "$\\omega_0$ = resonance angular frequency (rad/s). $L$ = inductance (H). $C$ = capacitance (F). AT RESONANCE: $X_L = X_C$, impedance is purely resistive.");
  W("ac-circuits", "Quality factor",
    "$Q$ = quality factor (dimensionless). $\\omega_0$ = resonance frequency. $L, R$ = inductance, resistance. HIGH $Q$ → sharp resonance; energy stored relative to dissipated per cycle.");
  W("ac-circuits", "Phase",
    "$\\phi$ = phase difference between voltage and current. $X_L, X_C$ = inductive/capacitive reactances. $R$ = resistance. Positive $\\phi$: inductive (voltage leads current).");

  W("special-relativity", "Time dilation",
    "$\\Delta t$ = time in observer's frame. $\\Delta \\tau$ = proper time (in moving clock's frame). $\\gamma = 1/\\sqrt{1 - v^2/c^2}$ = Lorentz factor. $v$ = relative velocity. $c$ = speed of light.");
  W("special-relativity", "Length contraction",
    "$L_0$ = proper length (measured in object's rest frame). $L$ = length measured by observer with relative velocity $v$. $\\gamma$ = Lorentz factor.");
  W("special-relativity", "Lorentz transformation",
    "$(x, t), (x', t')$ = coordinates in two frames with relative velocity $v$. $\\gamma = 1/\\sqrt{1 - v^2/c^2}$. $c$ = speed of light. Reduces to Galilean transformation when $v \\ll c$.");
  W("special-relativity", "Energy-momentum",
    "$E$ = total energy. $p$ = momentum magnitude. $m$ = rest mass. $c$ = speed of light. INVARIANT: same in all frames.");
  W("special-relativity", "Velocity addition",
    "$u, v$ = velocities. $c$ = speed of light. REDUCES to $u + v$ when both $\\ll c$. NEVER exceeds $c$.");
  W("special-relativity", "Spacetime interval",
    "$\\Delta s^2$ = invariant interval. $\\Delta t, \\Delta x$ = time and space separations. $c$ = speed of light. NEGATIVE: timelike; positive: spacelike; zero: lightlike.");

  W("general-relativity", "Einstein field",
    "$G_{\\mu\\nu}$ = Einstein tensor (curvature). $g_{\\mu\\nu}$ = metric. $\\Lambda$ = cosmological constant. $T_{\\mu\\nu}$ = stress-energy tensor (matter and energy). $G$ = Newton's constant. $c$ = speed of light.");
  W("general-relativity", "Schwarzschild radius",
    "$r_s$ = Schwarzschild radius (m). $G$ = gravitational constant. $M$ = mass (kg). $c$ = speed of light. AT $r = r_s$: event horizon of a non-rotating black hole.");
  W("general-relativity", "Gravitational redshift",
    "$\\Delta\\nu/\\nu$ = fractional frequency shift. $G, M$ = mass-related parameters. $r$ = distance from mass. $c$ = speed of light. SIGN: light loses energy climbing out of gravitational well.");
  W("general-relativity", "Geodesic",
    "$x^\\mu(\\tau)$ = trajectory parametrized by proper time. $\\Gamma^\\mu_{\\alpha\\beta}$ = Christoffel symbols (from metric). EQUATION of motion for free-fall in curved spacetime.");

  W("lagrangian-hamiltonian", "Euler-Lagrange",
    "$L(q, \\dot q, t)$ = Lagrangian. $q$ = generalized coordinate. $\\dot q$ = generalized velocity. EQUATIONS of motion equivalent to Newton's second law.");
  W("lagrangian-hamiltonian", "Hamiltonian",
    "$H$ = Hamiltonian (usually total energy). $p_i$ = generalized momentum conjugate to $q_i$ ($p_i = \\partial L/\\partial \\dot q_i$). $L$ = Lagrangian.");
  W("lagrangian-hamiltonian", "Hamilton equations",
    "Two first-order ODEs per degree of freedom. $H$ = Hamiltonian. $q, p$ = position and momentum. EQUIVALENT to single second-order Euler-Lagrange equation.");
  W("lagrangian-hamiltonian", "Poisson bracket",
    "$f, g$ = functions on phase space. $\\{f, g\\}$ = Poisson bracket. CLASSICAL analog of quantum commutator. Time evolution: $df/dt = \\{f, H\\}$ (plus explicit time dependence).");
  W("lagrangian-hamiltonian", "Cyclic",
    "If $L$ doesn't depend on $q_i$, then $p_i$ is conserved. Direct consequence of Euler-Lagrange when $\\partial L/\\partial q_i = 0$.");

  W("statistical-mechanics", "Boltzmann distribution",
    "$P_i$ = probability of microstate $i$. $E_i$ = energy of microstate. $k_B$ = Boltzmann constant. $T$ = absolute temperature. $Z$ = partition function (normalizing).");
  W("statistical-mechanics", "Partition function",
    "$Z$ = partition function. $\\beta = 1/(k_BT)$. $E_i$ = energy of microstate. ALL thermodynamic quantities derive from $Z$.");
  W("statistical-mechanics", "Free energy",
    "$F$ = Helmholtz free energy. $k_B$ = Boltzmann constant. $T$ = absolute temperature. $Z$ = partition function. MINIMIZED at equilibrium at fixed $T, V$.");
  W("statistical-mechanics", "Equipartition stat mech",
    "Each quadratic degree of freedom contributes $k_BT/2$ to the average energy. $k_B$ = Boltzmann constant. $T$ = absolute temperature. Classical limit only.");

  W("electric-circuits", "Ohm",
    "$V$ = voltage across resistor (V). $I$ = current (A). $R$ = resistance (Ω). Linear, frequency-independent for ideal resistor.");
  W("electric-circuits", "Power dissipation",
    "$P$ = power dissipated (W). $V$ = voltage. $I$ = current. $R$ = resistance. Three equivalent forms via Ohm's law.");
  W("electric-circuits", "Series resistors",
    "$R_\\text{eq}$ = equivalent resistance. $R_i$ = individual resistors. SAME current through each; voltages add.");
  W("electric-circuits", "Parallel resistors",
    "$R_\\text{eq}$ = equivalent. $R_i$ = individual. SAME voltage across each; currents add. Result is SMALLER than smallest $R_i$.");
  W("electric-circuits", "RC time constant",
    "$\\tau$ = time constant (s). $R$ = resistance (Ω). $C$ = capacitance (F). After 1 τ: 63% charged/discharged. After 5 τ: essentially complete.");
  W("electric-circuits", "Kirchhoff",
    "KCL (current law): sum of currents at a node = 0. KVL (voltage law): sum of voltage drops around a loop = 0. Conservation of charge and energy.");

  // ----- ADVANCED PHYSICS -----
  W("atomic-physics", "Hydrogen energy",
    "$E_n$ = energy of $n$-th level (eV). $n = 1, 2, 3, \\ldots$ = principal quantum number. NEGATIVE because bound. Ground state $E_1 = -13.6$ eV.");
  W("atomic-physics", "Rydberg",
    "$1/\\lambda$ = inverse wavelength of emitted/absorbed photon. $R_H \\approx 1.097 \\times 10^7$ /m = Rydberg constant. $n_f, n_i$ = final and initial principal quantum numbers.");
  W("atomic-physics", "Bohr radius",
    "$a_0$ = Bohr radius. $\\epsilon_0$ = vacuum permittivity. $\\hbar$ = reduced Planck. $m_e$ = electron mass. $e$ = elementary charge.");
  W("atomic-physics", "Fine structure constant",
    "$\\alpha$ = fine-structure constant (dimensionless). $e$ = elementary charge. $\\epsilon_0$ = vacuum permittivity. $\\hbar$ = reduced Planck. $c$ = speed of light. $\\alpha \\approx 1/137.036$.");

  W("solid-state", "Bragg",
    "$n$ = integer (diffraction order). $\\lambda$ = X-ray wavelength. $d$ = lattice plane spacing. $\\theta$ = incident angle from the planes. Basis of X-ray crystallography.");
  W("solid-state", "Drude",
    "$\\sigma$ = electrical conductivity (S/m). $n$ = electron density. $e$ = elementary charge. $\\tau$ = mean scattering time. $m$ = electron mass.");
  W("solid-state", "Hall effect",
    "$V_H$ = Hall voltage. $I$ = current. $B$ = magnetic field. $n$ = carrier density. $e$ = charge. $t$ = sample thickness.");

  W("nuclear", "Mass-energy",
    "$\\Delta m$ = mass defect (kg). $c$ = speed of light. $\\Delta E$ = binding energy released. Einstein's $E = mc^2$ in action.");
  W("nuclear", "Half-life",
    "$t_{1/2}$ = half-life (s). $\\lambda$ = decay constant (1/s). After $n$ half-lives: $N = N_0 / 2^n$.");
  W("nuclear", "Decay",
    "$N(t)$ = number of nuclei at time $t$. $N_0$ = initial number. $\\lambda$ = decay constant. EXPONENTIAL decay, statistical at the single-nucleus level.");

  W("particle-physics", "Yukawa",
    "$V(r)$ = Yukawa potential. $g$ = coupling strength. $m$ = mediator mass. $r$ = distance. $\\hbar, c$ = constants. RANGE $\\sim \\hbar/(mc)$ — short for massive mediators, infinite for massless.");
  W("particle-physics", "Higgs vacuum expectation",
    "$v$ = vacuum expectation value of Higgs field $\\approx 246$ GeV. SETS the electroweak scale. Masses of W, Z, fermions all proportional to $v$.");

  W("plasma-physics", "Debye length",
    "$\\lambda_D$ = Debye length (m). $\\epsilon_0$ = vacuum permittivity. $k_B$ = Boltzmann constant. $T$ = temperature. $n$ = density. $e$ = elementary charge.");
  W("plasma-physics", "Plasma frequency",
    "$\\omega_p$ = plasma frequency (rad/s). $n$ = electron density. $e$ = elementary charge. $m_e$ = electron mass. $\\epsilon_0$ = vacuum permittivity.");
  W("plasma-physics", "Cyclotron",
    "$\\omega_c$ = cyclotron angular frequency. $e$ = elementary charge. $B$ = magnetic field. $m$ = particle mass. INDEPENDENT of speed (non-relativistic).");
  W("plasma-physics", "Larmor radius",
    "$r_L$ = Larmor radius (gyroradius). $m, v_\\perp$ = mass and perpendicular velocity. $e$ = charge. $B$ = magnetic field. ORBIT radius in uniform B field.");

  // ----- MISC FORMULAS -----
  W("information-theory", "Entropy",
    "$H(X)$ = Shannon entropy (bits). $p(x)$ = probability of value $x$. $\\log_2$ for bits, $\\ln$ for nats. MAXIMUM at uniform distribution.");
  W("information-theory", "Mutual information",
    "$I(X; Y)$ = mutual information. $H(X), H(Y), H(X, Y)$ = individual and joint entropies. ALWAYS non-negative; zero iff independent.");
  W("information-theory", "KL divergence",
    "$D_\\text{KL}(p \\| q)$ = relative entropy from $q$ to $p$. NOT symmetric. ALWAYS non-negative; zero iff $p = q$.");
  W("information-theory", "Channel capacity",
    "$C$ = channel capacity (bits per symbol). $\\max$ over input distributions. $I(X; Y)$ = mutual information between input and output. MAXIMUM error-free transmission rate.");

  W("optimization", "Lagrangian",
    "$L$ = Lagrangian. $f$ = objective. $g_i$ = equality constraints. $\\lambda_i$ = Lagrange multipliers (one per constraint). STATIONARY points give constrained extrema.");
  W("optimization", "KKT",
    "$\\lambda_i$ = inequality-constraint multipliers ($\\geq 0$). COMPLEMENTARY SLACKNESS: $\\lambda_i g_i = 0$ — either constraint is active or multiplier vanishes.");
  W("optimization", "Newton method",
    "$\\mathbf x_n$ = current estimate. $H$ = Hessian. $\\nabla f$ = gradient. QUADRATIC convergence near a regular minimum.");

  W("game-theory", "Nash equilibrium",
    "$s_i^*$ = strategy of player $i$ at equilibrium. $s_{-i}^*$ = strategies of all OTHER players. $u_i$ = utility/payoff for player $i$. NO PROFITABLE unilateral deviation.");
  W("game-theory", "Minimax",
    "$u(s, t)$ = payoff to player 1 (= negative payoff to player 2 in zero-sum). MIN-MAX = MAX-MIN at the value of the game (von Neumann's theorem).");

  W("differential-geometry", "Curvature (curve)",
    "$\\kappa$ = curvature (1/m). $\\vec r(t)$ = parametrized curve. $\\vec r', \\vec r''$ = first and second derivatives. RECIPROCAL of radius of best-fitting circle.");
  W("differential-geometry", "Gaussian curvature",
    "$K$ = Gaussian curvature. $\\kappa_1, \\kappa_2$ = principal curvatures (max and min curvatures at the point). INTRINSIC by Theorema Egregium.");
  W("differential-geometry", "Gauss-Bonnet",
    "$M$ = closed orientable surface. $K$ = Gaussian curvature. $\\chi$ = Euler characteristic (topological invariant). CONNECTS local curvature to global topology.");

  W("dynamical-systems", "Phase portrait",
    "$\\vec f$ = vector field on phase space. $\\vec x$ = state vector. AUTONOMOUS = right-hand side doesn't depend explicitly on $t$.");
  W("dynamical-systems", "Lyapunov exponent",
    "$\\lambda$ = Lyapunov exponent (1/time). $\\delta_0, \\delta(t)$ = initial and current separation between nearby trajectories. POSITIVE $\\lambda$ → chaos (exponential divergence).");

  W("cryptography", "RSA",
    "$m$ = plaintext message (integer mod $n$). $e$ = public exponent. $d$ = private exponent. $n = pq$ = product of two large primes. $c$ = ciphertext.");
  W("cryptography", "Diffie-Hellman",
    "$g$ = generator of cyclic group. $p$ = large prime. $a, b$ = private keys (kept secret). Alice sends $g^a$, Bob sends $g^b$. Shared secret: $g^{ab}$.");

  // ----- ADDITIONAL CONTROL FORMULAS -----
  W("electrical-modeling-control", "Impedances",
    "$Z_R$ = resistor impedance (Ω, frequency-independent). $Z_L = Ls$ = inductor impedance in s-domain. $Z_C = 1/(Cs)$ = capacitor impedance. $s$ = Laplace variable.");
  W("electrical-modeling-control", "Op-amp inverting",
    "$V_o, V_i$ = output and input voltages. $Z_f$ = feedback impedance (between output and inverting input). $Z_i$ = input impedance. GAIN is the negative ratio.");
  W("electrical-modeling-control", "RC high-pass",
    "$V_R$ = output voltage across resistor. $V_i$ = input. $R, C$ = resistance and capacitance. $s$ = Laplace variable. CUTOFF at $\\omega = 1/(RC)$.");
  W("electrical-modeling-control", "RL low-pass",
    "$V_R, V_i$ = output and input. $R, L$ = resistance, inductance. TIME constant $L/R$. Inductor blocks high frequencies.");

  W("mechanical-modeling-control", "Mass-spring-damper",
    "$m$ = mass (kg). $b$ = damping coefficient (N·s/m). $k$ = spring stiffness (N/m). $x$ = displacement (m). $f$ = applied force (N). The universal 2nd-order template.");
  W("mechanical-modeling-control", "Rotational analog",
    "$J$ = moment of inertia (kg·m²). $D$ = rotational damping (N·m·s/rad). $K$ = torsional stiffness (N·m/rad). $\\theta$ = angle (rad). $T$ = applied torque (N·m).");
  W("mechanical-modeling-control", "Gear ratio",
    "$N = N_2/N_1$ where $N_1, N_2$ are tooth counts. Torque OUTPUT = $N \\times$ input torque; speed OUTPUT = input speed $/N$. Reflected inertia: $J_\\text{ref} = J_2/N^2$.");
  W("mechanical-modeling-control", "DC motor",
    "$V$ = applied voltage. $R, L$ = armature resistance and inductance. $i$ = current. $K_b$ = back-EMF constant. $K_t$ = torque constant. $\\theta$ = shaft angle. $T = K_t i$ = electromagnetic torque.");

  W("block-diagrams", "Series",
    "$G_1, G_2$ = blocks cascaded in series. Combined transfer function = PRODUCT of individual transfer functions. Order doesn't matter for linear systems.");
  W("block-diagrams", "Parallel",
    "$G_1, G_2$ = blocks driven by the same input, outputs summed. Combined = SUM. Different from series — both see the input simultaneously.");
  W("block-diagrams", "Negative feedback",
    "$T$ = closed-loop transfer function. $G$ = forward-path transfer function. $H$ = feedback-path transfer function. STANDARD form; the most-used equation in control.");
  W("block-diagrams", "Disturbance at output",
    "$Y$ = output. $R$ = reference. $D$ = disturbance entering at output. Reference is shaped by $T = G/(1+GH)$; disturbance by $S = 1/(1+GH)$.");
  W("block-diagrams", "Noise at sensor",
    "$N$ = sensor noise. Noise shows up at output multiplied by $T$ — bad. INHERENT trade-off: $T$ near 1 for tracking ⇒ full noise transmission.");
  W("block-diagrams", "Moving junction",
    "Block-diagram algebra: move a summing junction past a block by inserting a copy of the block's transfer function on the bypass path.");
  W("block-diagrams", "Splitting pickoff",
    "Move a pickoff point past a block by inserting $1/G$ on the downstream branch. Equivalent diagram, different topology.");

  W("signal-flow-mason", "Mason gain",
    "$T$ = transfer function from source to sink. $P_k$ = $k$-th forward-path gain. $\\Delta$ = graph determinant. $\\Delta_k$ = cofactor for path $k$. SUM over all forward paths.");
  W("signal-flow-mason", "Cofactor",
    "$\\Delta_k$ = $\\Delta$ recomputed with loops that touch path $k$ removed. 'Touch' = share at least one node. If path $k$ touches every loop: $\\Delta_k = 1$.");
  W("signal-flow-mason", "Touching rule",
    "Two loops TOUCH if they share at least one node. Non-touching loops contribute product terms (with alternating signs) to the determinant $\\Delta$.");
  W("signal-flow-mason", "Sign convention",
    "Each loop's gain in $\\Delta$ keeps its sign (e.g., negative-feedback loop contributes $-GH$, which becomes $+GH$ in $\\Delta = 1 - L_\\text{neg}$).");
  W("signal-flow-mason", "Determinant",
    "$\\Delta$ = determinant of the graph. Sum over single loops, pairs of non-touching loops, triples, etc., with alternating signs.");

  W("root-locus", "Branch count",
    "Number of root-locus branches equals the number of OPEN-LOOP poles. Branches start at poles ($K = 0$) and end at zeros or infinity ($K = \\infty$).");
  W("root-locus", "Asymptote angles",
    "$n$ = number of poles. $m$ = number of zeros. $k = 0, 1, \\ldots, n - m - 1$. $n - m$ asymptotes equally spaced.");
  W("root-locus", "Centroid",
    "$\\sigma$ = asymptote intersection on real axis. $p_i, z_j$ = open-loop pole and zero locations. $n - m$ = number of asymptotes.");
  W("root-locus", "Breakaway",
    "Real-axis points where two branches collide and leave (or arrive). FOUND by solving $dK/ds = 0$ on a real-axis locus segment.");
  W("root-locus", "Angle condition",
    "$s$ = a point on the locus. SUM of angles from open-loop zeros minus sum of angles from open-loop poles to $s$ equals odd multiple of 180°. DEFINING property of the locus.");
  W("root-locus", "Magnitude condition",
    "$|G(s)H(s)|$ = magnitude of open-loop transfer function at the candidate point. $K$ = gain. Used to find the gain corresponding to any locus point.");
  W("root-locus", "Departure angle",
    "$\\theta_d$ = angle at which locus leaves a complex open-loop pole. SUM of angles from zeros to that pole, minus sum of angles from OTHER poles, plus 180°.");

  W("root-locus-design", "Lead compensator",
    "$G_c$ = compensator transfer function. $K_c$ = gain. $z < p$ — zero at lower frequency than pole. PROVIDES phase boost between $z$ and $p$, peaking at $\\sqrt{zp}$.");
  W("root-locus-design", "Lag compensator",
    "$z > p$ — pole at lower frequency than zero. INCREASES DC gain by $z/p$, which improves steady-state error. Place far below crossover so phase lag at crossover is small.");
  W("root-locus-design", "Pole-zero cancellation",
    "$z_c$ = compensator zero placed at the slow plant pole. They cancel; remaining dynamics dominated by faster modes. RISKY if model is uncertain.");
  W("root-locus-design", "Compensator gain",
    "$K_c$ = compensator gain. Determined by the magnitude condition at the desired closed-loop pole location.");

  W("nyquist", "Nyquist contour",
    "$D$ = contour enclosing the entire right half-plane. Goes up the $j\\omega$ axis, closes via infinite semicircle in RHP. Detours around any RHP poles on the axis.");
  W("nyquist", "Mapping theorem",
    "$f$ = function with $Z$ zeros and $P$ poles inside a closed contour. The image of the contour encircles 0 exactly $Z - P$ times (clockwise positive). Cauchy's argument principle.");
  W("nyquist", "Apply to $1 + GH$",
    "Zeros of $1 + GH$ are closed-loop poles. Poles of $1 + GH$ are open-loop poles. So encirclements of 0 by $1 + GH$ = encirclements of $-1$ by $GH$.");
  W("nyquist", "Semi-log",
    "When plotting Bode (magnitude in dB, phase in degrees) is more convenient than drawing the polar Nyquist plot directly. Count $-180°$ crossings of the phase curve to deduce encirclements.");

  W("lead-lag", "Lead transfer",
    "$K_c$ = compensator gain. $z, p$ = corner frequencies (with $z < p$ for lead). Time-constant form: zero corner $1/z$ comes first as $\\omega$ increases.");
  W("lead-lag", "Lag transfer",
    "Same form but $z > p$. Magnitude DROPS from low-frequency value $K_c (z/p)$ to high-frequency value $K_c$.");
  W("lead-lag", "Max phase",
    "$\\phi_\\text{max}$ = max phase boost from a single lead section. $\\alpha = z/p < 1$. Realizable only for $\\phi_\\text{max} < 90°$.");
  W("lead-lag", "$\\omega_m$",
    "$\\omega_m$ = frequency at which lead's phase boost is maximum. $z, p$ = corner frequencies (geometric mean).");
  W("lead-lag", "Lag DC boost",
    "Lag's gain at DC divided by gain at high frequency. = ratio of corner frequencies $z/p > 1$. CUTS steady-state error by this factor.");
  W("lead-lag", "Lead-lag",
    "Lag at low frequencies (improves $e_{ss}$) + lead at mid frequencies (improves margins). Independent design of two corners.");

  W("steady-state-errors", "Type table",
    "Type 0: tracks step with offset, ramp diverges. Type 1: tracks step exactly, ramp with offset. Type 2: tracks ramp exactly, parabola with offset. Each integrator (pole at $s = 0$) raises the type by 1.");
  W("steady-state-errors", "Trade-off",
    "$K$ = loop gain. $e_{ss}$ = steady-state error. Higher $K$ reduces $e_{ss}$ but degrades stability margins. The eternal trade.");

  // ============================================================
  // STILL-MISSING TOPICS — sweep through to add basic WHERE
  // ============================================================

  W("set-logic", "Subset",
    "$A, B$ = sets. $A \\subseteq B$ ⟺ every element of $A$ is also in $B$. Reflexive: $A \\subseteq A$. Transitive: $A \\subseteq B \\subseteq C$ ⟹ $A \\subseteq C$.");
  W("set-logic", "De Morgan",
    "$A, B$ = sets, complemented within some universe $U$. $A^c$ = complement of $A$. Two equivalent forms — pick the one that fits your situation.");
  W("set-logic", "Cantor",
    "$A$ = any set. $P(A)$ = power set (all subsets of $A$). CONSEQUENCE: there's no largest set, no biggest infinity.");

  W("mathematical-logic", "Direct",
    "$p$ = hypothesis. $q$ = conclusion. Chain of inferences from $p$ to $q$ using axioms and previously-proven theorems.");
  W("mathematical-logic", "Contradiction",
    "$q$ = statement to prove. NEGATION $\\neg q$ is assumed; derive a contradiction (an absurd or false statement). Therefore $q$ holds.");
  W("mathematical-logic", "Contrapositive",
    "$p, q$ = statements. $\\neg q \\Rightarrow \\neg p$ is logically equivalent to $p \\Rightarrow q$ — same truth table.");
  W("mathematical-logic", "Induction",
    "$P(n)$ = statement depending on positive integer $n$. BASE case + inductive step ⟹ $P(n)$ for all $n \\geq 1$.");
  W("mathematical-logic", "Strong induction",
    "$P(n)$ = statement. Inductive step uses ALL prior cases $P(1), \\ldots, P(n)$ rather than only $P(n)$. Logically equivalent to ordinary induction.");
  W("mathematical-logic", "Pigeonhole",
    "$n$ items distributed into $k$ boxes with $n > k$. AT LEAST one box contains at least 2 items. Generalizes to $\\lceil n/k \\rceil$.");

  W("graph-theory", "Handshake",
    "$V$ = vertex set. $E$ = edge set. Sum of degrees of all vertices equals twice the number of edges. ALSO: number of odd-degree vertices is even.");
  W("graph-theory", "Euler formula",
    "$V$ = number of vertices. $E$ = number of edges. $F$ = number of faces (including outer face). VALID for connected planar graphs.");
  W("graph-theory", "Tree",
    "$n$ = number of vertices. TREE = connected, acyclic graph. Equivalently: connected with $n - 1$ edges, or any two distinct conditions of (connected, $n - 1$ edges, acyclic).");
  W("graph-theory", "Kuratowski",
    "Graph is PLANAR iff it contains no subdivision of $K_5$ (complete on 5 vertices) or $K_{3,3}$ (complete bipartite).");
  W("graph-theory", "Chromatic",
    "$\\chi(G)$ = chromatic number of graph $G$ = minimum colors needed to color vertices so no two adjacent share a color. Always $\\leq$ 1 + max degree.");

  W("solid-geometry", "Diagonal cube",
    "$s$ = side length. $d$ = space diagonal (vertex to opposite vertex). Application of Pythagoras in 3D.");
  W("solid-geometry", "Surface area cube",
    "$s$ = side. 6 congruent square faces. $SA = 6s^2$.");
  W("solid-geometry", "Volume box",
    "$\\ell, w, h$ = three edge lengths. $V = \\ell w h$. $SA = 2(\\ell w + wh + \\ell h)$.");

  W("conic-sections", "Eccentricity",
    "$e$ = eccentricity (dimensionless). $c$ = distance from center to focus. $a$ = semi-major axis. CLASSIFIES conic: $e = 0$ circle, $0 < e < 1$ ellipse, $e = 1$ parabola, $e > 1$ hyperbola.");

  W("numerical-methods", "Bisection",
    "$[a, b]$ = interval where $f$ changes sign. $n$ = step count. Error halves each step. SLOW (linear) but GUARANTEED convergence.");
  W("numerical-methods", "Newton method",
    "$x_n$ = current iterate. $f, f'$ = function and derivative. CONVERGES quadratically near a simple root; can fail if $f'(x_n) \\approx 0$ or starting far from root.");
  W("numerical-methods", "Trapezoidal",
    "$h$ = step size. $f(x_i)$ = function values at the nodes. Error $O(h^2)$ for smooth functions.");
  W("numerical-methods", "Simpson",
    "$h$ = step size (uniform). Number of intervals must be EVEN. Error $O(h^4)$ for smooth integrands — much better than trapezoidal at same cost.");
  W("numerical-methods", "Euler ODE",
    "$y_n$ = current value. $h$ = step size. $f$ = right-hand side of $y' = f(t, y)$. SIMPLEST ODE solver; error $O(h)$ per step.");
  W("numerical-methods", "Runge-Kutta",
    "RK4 = standard 4th-order method. 4 function evaluations per step. Error $O(h^4)$ — workhorse for non-stiff ODEs.");

  W("recurrence-generating", "Linear recurrence",
    "$a_n$ = sequence term. $c_1, \\ldots, c_k$ = constant coefficients. ORDER = $k$ (depends on $k$ previous terms).");
  W("recurrence-generating", "Characteristic",
    "$x$ = unknown root. Polynomial in $x$ obtained by substituting $a_n = x^n$ into the recurrence. Roots determine the form of solutions.");

  W("computability", "Halting",
    "$P$ = program. $w$ = input. THERE IS NO algorithm to decide universally whether $P$ halts on $w$. Proven by diagonalization (Turing 1936).");
  W("computability", "Church-Turing",
    "THESIS (not theorem): every effectively computable function is computable by a Turing machine. Equivalent formalisms: lambda calculus, recursive functions, modern computers.");
  W("computability", "P class",
    "$P$ = class of decision problems solvable in polynomial time (in input size) on a deterministic Turing machine.");
  W("computability", "NP class",
    "$NP$ = class of decision problems with YES answers verifiable in polynomial time given a certificate. P ⊆ NP; whether P = NP is open.");
  W("computability", "NP-complete",
    "Problems IN NP and such that every NP problem reduces to them in polynomial time. SAT was the first (Cook-Levin 1971).");

  W("galois-theory", "Field extension degree",
    "$L \\supseteq K$ = field extension. $[L : K]$ = dimension of $L$ as a vector space over $K$. MULTIPLICATIVE in towers: $[M : K] = [M : L][L : K]$.");
  W("galois-theory", "Galois group",
    "$L/K$ = field extension. $\\text{Gal}(L/K)$ = group of automorphisms of $L$ fixing $K$ pointwise. ENCODES symmetries of the extension.");
  W("galois-theory", "Galois order",
    "$|\\text{Gal}(L/K)|$ = order of Galois group. EQUALS extension degree for normal separable extensions (Galois extensions).");
  W("galois-theory", "Solvable by radicals",
    "Polynomial equation solvable by repeated extractions of $n$-th roots iff Galois group is solvable (has composition series with abelian factors).");

  W("lie-groups", "SO(n) dimension",
    "$n$ = dimension of the rotation group $SO(n)$. $\\dim = n(n-1)/2$ = number of independent rotation planes.");
  W("lie-groups", "SU(n) dimension",
    "$n$ = size of $SU(n)$ matrices. $\\dim = n^2 - 1$. EXAMPLES: $SU(2)$ dim 3 (matches $SO(3)$); $SU(3)$ dim 8 (gluon count in QCD).");
  W("lie-groups", "Lie bracket",
    "$X, Y$ = generators (matrices for matrix Lie groups). $[X, Y] = XY - YX$ = commutator. SATISFIES bilinearity, antisymmetry, Jacobi identity.");
  W("lie-groups", "Jacobi",
    "$X, Y, Z$ = elements of a Lie algebra. JACOBI identity must hold for all triples. Equivalent to associativity of the group law at the algebra level.");
  W("lie-groups", "Exponential map",
    "$X$ = element of Lie algebra. $t$ = real parameter. $\\exp$ = matrix exponential. GENERATES a one-parameter subgroup of the Lie group.");
  W("lie-groups", "Angular momentum algebra",
    "$L_i$ = angular momentum operators ($L_x, L_y, L_z$). $\\epsilon_{ijk}$ = Levi-Civita symbol. $\\hbar$ = reduced Planck constant. CORE relation of quantum angular momentum.");

  W("topology", "Hausdorff",
    "$X$ = topological space. ANY two distinct points have disjoint open neighborhoods. RULE OUT pathological non-Hausdorff spaces. Most spaces of interest are Hausdorff.");
  W("topology", "Compact",
    "$K$ = topological space. EVERY open cover has a finite subcover. In $\\mathbb R^n$: equivalent to CLOSED + BOUNDED (Heine-Borel).");
  W("topology", "Connected",
    "$X$ = topological space. CANNOT be split into two nonempty disjoint open subsets. Preserved by continuous images.");

  W("algebraic-topology", "Fundamental group $S^1$",
    "$\\pi_1(S^1)$ = fundamental group of the circle. Each integer $n$ corresponds to a loop winding $n$ times. CONCATENATION of loops = addition.");
  W("algebraic-topology", "$\\pi_n(S^n)",
    "$\\pi_n(S^n) = \\mathbb Z$ = classified by degree of the map. Brouwer fixed-point theorem follows.");
  W("algebraic-topology", "Torus",
    "$T^2$ = 2-torus. TWO independent non-contractible loops: around the hole, through the hole. Generates $\\mathbb Z^2$.");
  W("algebraic-topology", "Euler characteristic",
    "$V, E, F$ = vertices, edges, faces of a CW structure. INVARIANT under continuous deformation.");
  W("algebraic-topology", "Genus surface",
    "$\\Sigma_g$ = closed orientable surface of genus $g$ (number of handles). $\\chi = 2 - 2g$. Sphere: $g = 0, \\chi = 2$; torus: $g = 1, \\chi = 0$; etc.");

  W("riemannian-geometry", "Line element",
    "$g_{ij}$ = metric tensor (symmetric, positive-definite). $dx^i$ = coordinate differentials. EINSTEIN summation over $i, j$ implied.");
  W("riemannian-geometry", "Geodesic equation",
    "$x^\\mu(t)$ = parameterized geodesic. $\\Gamma^\\mu_{\\alpha\\beta}$ = Christoffel symbols from the metric. STRAIGHT lines on curved manifolds.");
  W("riemannian-geometry", "Ricci",
    "$R_{\\mu\\nu}$ = Ricci tensor (symmetric, rank 2). $R^\\rho_{\\;\\sigma\\mu\\nu}$ = Riemann curvature tensor. CONTRACT on first and third indices.");
  W("riemannian-geometry", "Ricci scalar",
    "$R$ = Ricci scalar (single number at each point). $g^{\\mu\\nu}$ = inverse metric. Curvature reduced to a single number.");
  W("riemannian-geometry", "Einstein manifold",
    "$R_{\\mu\\nu} = \\lambda g_{\\mu\\nu}$. $\\lambda$ = real constant. INCLUDES vacuum GR with cosmological constant.");

  W("measure-theory", "Sigma-algebra",
    "$\\mathcal F$ = $\\sigma$-algebra on set $X$. Closed under: complements within $X$, countable unions, countable intersections. CONTAINS $\\emptyset$ and $X$.");
  W("measure-theory", "Lebesgue measure",
    "$m$ = Lebesgue measure on $\\mathbb R$. For an interval $[a, b]$: just the length $b - a$. EXTENDS to a vast class of subsets while preserving translation invariance.");
  W("measure-theory", "Countable additivity",
    "$A_i$ = countable collection of DISJOINT measurable sets. Measure of the union = sum of measures. CORE axiom of a measure.");

  W("functional-analysis", "Banach",
    "Banach space = complete normed vector space. Every Cauchy sequence converges. EXAMPLES: $\\mathbb R^n$, $\\ell^p$, $L^p$, $C[0,1]$ with sup norm.");
  W("functional-analysis", "Hilbert",
    "Hilbert space = complete inner product space. Has angles and orthogonality. EXAMPLES: $\\mathbb R^n$, $\\ell^2$, $L^2(\\Omega)$. QUANTUM mechanics lives here.");
  W("functional-analysis", "Operator norm",
    "$T$ = bounded linear operator. $x$ = vector. $\\|T\\|$ = operator norm. MEASURES the maximum stretching factor.");

  W("calculus-of-variations", "Euler-Lagrange (CoV)",
    "$y(x)$ = unknown function. $L(x, y, y')$ = Lagrangian. NECESSARY condition for extremizing $\\int L\\,dx$.");
  W("calculus-of-variations", "Action",
    "$S$ = action functional. $L$ = Lagrangian (function of generalized coordinates and velocities). PHYSICAL trajectories extremize $S$.");
  W("calculus-of-variations", "Variational principle",
    "$\\delta S = 0$ — first variation of action vanishes for physical paths. GENERALIZES to fields and to GR.");

  W("function-sequences", "Pointwise convergence",
    "$f_n, f$ = functions. EACH $x$ converges, but possibly at different rates.");
  W("function-sequences", "Uniform convergence",
    "$\\|f_n - f\\|_\\infty$ = supremum of $|f_n(x) - f(x)|$. SAME rate across the whole domain.");
  W("function-sequences", "Weierstrass M-test",
    "$M_n$ = upper bounds on $|f_n(x)|$ valid for all $x$. If $\\sum M_n < \\infty$: $\\sum f_n$ converges uniformly.");
  W("function-sequences", "Power series radius",
    "$R$ = radius of convergence. $a_n$ = power-series coefficients. $\\limsup$ = limit superior.");

  W("random-variables", "Expectation",
    "$X$ = random variable. $f$ = probability density (continuous case). $E[X]$ = expected value (population mean).");
  W("random-variables", "Variance",
    "$X$ = random variable. $\\mu = E[X]$. STANDARD DEVIATION $\\sigma = \\sqrt{\\text{Var}}$.");
  W("random-variables", "MGF",
    "$M_X(t)$ = moment generating function. Useful for finding moments via differentiation and for proving sums of independent variables.");

  W("stochastic-processes", "Markov property",
    "$X_n$ = state at time $n$. ONLY the present state matters for the next step's distribution; the entire history is irrelevant.");
  W("stochastic-processes", "Stationary distribution",
    "$\\pi$ = row vector of stationary probabilities. $P$ = transition matrix. UNIQUE for irreducible aperiodic chains.");
  W("stochastic-processes", "Detailed balance",
    "$\\pi_i, \\pi_j$ = stationary probabilities. $P_{ij}$ = transition probabilities. STRONGER than mere stationarity.");
  W("stochastic-processes", "Poisson process",
    "$N(t)$ = number of events in $[0, t]$. $\\lambda$ = rate (events per unit time). INTER-EVENT times are independent exponentials.");
  W("stochastic-processes", "Brownian",
    "$W(t)$ = standard Brownian motion at time $t$. CONTINUOUS but nowhere differentiable. Independent Gaussian increments.");

  W("bayesian-statistics", "Posterior",
    "$\\theta$ = unknown parameter. $D$ = observed data. $P(\\theta)$ = prior. $P(D|\\theta)$ = likelihood. $P(D)$ = marginal likelihood (evidence). $P(\\theta|D)$ = posterior.");
  W("bayesian-statistics", "Evidence",
    "$P(D)$ = marginal likelihood = normalizing constant. INTEGRATED over the prior.");
  W("bayesian-statistics", "Beta-binomial",
    "Prior Beta($\\alpha, \\beta$) + binomial likelihood with $k$ successes in $n$ trials → posterior Beta($\\alpha + k, \\beta + n - k$). CONJUGATE.");
  W("bayesian-statistics", "MAP",
    "MAP = maximum a posteriori. Mode of posterior; with FLAT prior, equals maximum likelihood estimate.");

  W("optimization", "Gradient descent",
    "$\\mathbf x_n$ = current point. $\\alpha$ = learning rate (step size). $\\nabla f$ = gradient. CONVERGES for small enough $\\alpha$ to a local minimum.");
  W("optimization", "Convexity",
    "$f$ convex iff for any two points, the chord lies above the function: $f(\\lambda x + (1-\\lambda)y) \\leq \\lambda f(x) + (1-\\lambda)f(y)$ for $\\lambda \\in [0, 1]$.");

  W("information-theory", "Differential entropy",
    "$h(X)$ = differential entropy (nats or bits). $f(x)$ = density. WARNING: can be negative.");
  W("information-theory", "Conditional entropy",
    "$H(X|Y) = H(X, Y) - H(Y)$. INFORMATION needed for $X$ given $Y$. Never increases under conditioning: $H(X|Y) \\leq H(X)$.");

  // Misc final
  W("information-theory", "Shannon source",
    "Source coding theorem. $H(X)$ = entropy. $R$ = compression rate. NO LOSSLESS code can compress below $H$ bits per symbol on average. Asymptotically tight.");

  W("tensor-calculus", "Einstein summation",
    "Repeated index (once upper, once lower) is automatically summed over its range. SAVES tedious $\\sum$ symbols.");
  W("tensor-calculus", "Metric line element",
    "$ds^2$ = infinitesimal squared length. $g_{\\mu\\nu}$ = metric tensor. $dx^\\mu$ = coordinate differentials.");
  W("tensor-calculus", "Raise/lower",
    "$g^{\\mu\\nu}$ = inverse metric. $g_{\\mu\\nu}$ = metric. CONVERTS between covariant (lower) and contravariant (upper) indices.");
  W("tensor-calculus", "Christoffel",
    "$\\Gamma^\\mu_{\\alpha\\beta}$ = Christoffel symbols of the second kind. $g^{\\mu\\nu}$ = inverse metric. NOT tensors — depend on coordinate choice.");
  W("tensor-calculus", "Covariant derivative",
    "$\\nabla_\\mu$ = covariant derivative. $A^\\nu$ = contravariant vector. $\\Gamma$ = Christoffels. CORRECTS ordinary partial to transform as a tensor.");
  W("tensor-calculus", "Riemann tensor",
    "$R^\\rho_{\\;\\sigma\\mu\\nu}$ = Riemann curvature tensor. 20 independent components in 4D. Measures failure of second covariant derivatives to commute.");

  // ----- More physics niches -----
  W("central-force", "Conservation L",
    "$\\mathbf L = m\\mathbf r \\times \\mathbf v$ = angular momentum. CONSERVED for central forces (torque is zero). Motion confined to a plane.");
  W("central-force", "Kepler 2nd",
    "$dA/dt$ = areal velocity. $L$ = angular momentum magnitude. $m$ = orbiting mass. CONSTANT — Kepler's second law in disguise.");
  W("central-force", "Effective potential",
    "$V_\\text{eff}$ = effective radial potential. $V(r)$ = actual potential. $L^2/(2mr^2)$ = centrifugal barrier. REDUCES 2D motion to 1D radial.");
  W("central-force", "Kepler 3rd",
    "$T$ = orbital period. $a$ = semi-major axis. $G$ = gravitational constant. $M$ = central mass.");

  W("nonlinear-chaos-physics", "Logistic map",
    "$x_n \\in [0, 1]$ = state. $r$ = parameter. CHAOS sets in around $r \\approx 3.57$ after period-doubling cascade.");
  W("nonlinear-chaos-physics", "Feigenbaum",
    "$\\delta \\approx 4.66920$ = universal constant. UNIVERSALITY: SAME number for any smooth unimodal map (quadratic, sine, etc.).");
  W("nonlinear-chaos-physics", "Lyapunov",
    "$\\lambda$ = Lyapunov exponent. Positive ⟹ chaos: nearby trajectories diverge exponentially. NEGATIVE ⟹ regular (decay).");
  W("nonlinear-chaos-physics", "Lorenz",
    "$\\sigma, \\rho, \\beta$ = parameters. CLASSIC choice $\\sigma = 10, \\rho = 28, \\beta = 8/3$ gives the butterfly attractor.");

  W("angular-momentum-spin", "L commutator",
    "$L_i, L_j$ = angular momentum operators. $\\epsilon_{ijk}$ = Levi-Civita. $\\hbar$ = reduced Planck. NON-commuting → uncertainty principle.");
  W("angular-momentum-spin", "L² eigenvalue",
    "$L^2$ = total angular momentum squared. $\\ell = 0, 1, 2, \\ldots$ = orbital quantum number. EIGENVALUES quantized.");
  W("angular-momentum-spin", "L_z eigenvalue",
    "$L_z$ = z-component of angular momentum. $m = -\\ell, -\\ell+1, \\ldots, \\ell$. ($2\\ell+1$ values for each $\\ell$).");
  W("angular-momentum-spin", "Pauli matrices",
    "$\\sigma_x, \\sigma_y, \\sigma_z$ = Pauli matrices ($2\\times 2$ Hermitian, traceless). ANTICOMMUTE pairwise.");

  W("qm-3d-hydrogen", "Hydrogen energy levels",
    "$E_n$ = energy (eV). $n = 1, 2, 3, \\ldots$ = principal quantum number. NEGATIVE (bound states); approaches 0 (ionization) as $n \\to \\infty$.");
  W("qm-3d-hydrogen", "Bohr radius",
    "$a_0 \\approx 0.529$ Å. SETS the atomic length scale.");
  W("qm-3d-hydrogen", "Degeneracy",
    "$n$ = principal quantum number. $n^2$ orbital states; factor of 2 for electron spin gives $2n^2$.");
  W("qm-3d-hydrogen", "Selection rules",
    "$\\Delta\\ell = \\pm 1$: angular momentum changes by exactly $\\hbar$. ALLOWED electric dipole transitions; others are forbidden or much weaker.");

  W("perturbation-theory", "First order energy",
    "$E_n^{(1)}$ = first-order energy correction. $V$ = perturbation Hamiltonian. $|n^{(0)}\\rangle$ = unperturbed eigenstate.");
  W("perturbation-theory", "First order wavefunction",
    "$|n^{(1)}\\rangle$ = first-order wavefunction correction. SUM over other states. Mixes in states with significant matrix elements.");
  W("perturbation-theory", "Second order energy",
    "$E_n^{(2)}$ = second-order energy correction. Always NEGATIVE for ground state (level repulsion).");
  W("perturbation-theory", "Time-dependent",
    "$c_f(t)$ = amplitude to be in state $f$ at time $t$. $V$ = time-dependent perturbation. $\\omega_{fi} = (E_f - E_i)/\\hbar$ = transition frequency.");
  W("perturbation-theory", "Fermi golden",
    "$\\Gamma_{fi}$ = transition rate (1/s). $V$ = perturbation. $\\rho(E_f)$ = density of final states.");

  W("identical-particles", "Bosons symmetric",
    "INTEGER spin. Wavefunction unchanged under exchange of any two identical bosons. Examples: photons, gluons, Higgs.");
  W("identical-particles", "Fermions antisymmetric",
    "HALF-INTEGER spin. Wavefunction picks up a minus sign under exchange. Examples: electrons, quarks, neutrinos.");
  W("identical-particles", "Pauli",
    "NO TWO identical fermions occupy the same quantum state. CONSEQUENCES: atomic shell structure, periodic table, white dwarf and neutron star stability.");
  W("identical-particles", "Slater",
    "$N$ = particle count. $\\phi_a$ = single-particle orbitals. Determinant form AUTOMATICALLY enforces antisymmetry under exchange.");

  W("scattering-theory", "Differential cross section",
    "$\\sigma$ = total cross section (m²). $d\\Omega$ = element of solid angle. $f(\\theta)$ = scattering amplitude. The KEY measurable in scattering experiments.");
  W("scattering-theory", "Born",
    "$f$ = first-order Born amplitude. $V$ = potential. $\\mathbf q$ = momentum transfer. Valid for WEAK potentials.");
  W("scattering-theory", "Optical theorem",
    "$\\sigma_\\text{tot}$ = total cross section. $k$ = wavenumber. $\\text{Im}\\,f(0)$ = imaginary part of forward scattering amplitude. From unitarity.");

  W("density-matrices", "Pure state rho",
    "$|\\psi\\rangle$ = pure state vector. $\\rho = |\\psi\\rangle\\langle\\psi|$ = density matrix. SATISFIES $\\rho^2 = \\rho$, tr$(\\rho) = 1$.");
  W("density-matrices", "Mixed state rho",
    "$p_i$ = classical probabilities ($p_i \\geq 0$, $\\sum p_i = 1$). $|\\psi_i\\rangle$ = orthonormal pure states. ENCODES classical uncertainty about which pure state.");
  W("density-matrices", "Properties rho",
    "$\\rho$ = density matrix. TRACE 1 (probabilities sum to 1), POSITIVE semi-definite (probabilities non-negative). Defines the convex set of valid states.");
  W("density-matrices", "Partial trace",
    "$\\rho_A$ = reduced density matrix for subsystem $A$. tr$_B$ = partial trace over subsystem $B$. SUMS over $B$'s degrees of freedom.");
  W("density-matrices", "Von Neumann entropy",
    "$S(\\rho)$ = von Neumann entropy (nats or bits). $\\lambda_i$ = eigenvalues of $\\rho$. ZERO for pure states, maximum $\\ln d$ for maximally mixed in $d$-dim space.");

  W("path-integrals", "Feynman propagator",
    "$K$ = propagator: amplitude from $x_i$ to $x_f$ in time $t$. $S[x]$ = classical action of path. $\\hbar$ = reduced Planck. INTEGRATE over ALL paths.");

  W("quantum-information", "No-cloning",
    "$|\\psi\\rangle$ = unknown quantum state. THEOREM: no unitary operation can produce a perfect copy. Distinguishes quantum from classical information.");

  W("symmetries-noether", "Continuous symmetry",
    "$j^\\mu$ = conserved current ($\\partial_\\mu j^\\mu = 0$). $Q = \\int j^0\\,d^3x$ = conserved charge. THE deepest theorem in field theory.");
  W("symmetries-noether", "Stress-energy",
    "$T^{\\mu\\nu}$ = stress-energy tensor. $\\partial_\\mu T^{\\mu\\nu} = 0$ → energy-momentum conservation. SOURCE of curvature in GR.");

  W("classical-field-theory", "Lagrangian density",
    "$\\mathcal L$ = Lagrangian density (energy per volume). $\\phi$ = field. $\\partial_\\mu \\phi$ = field derivatives.");
  W("classical-field-theory", "Action field",
    "$S$ = action (dimensionless or units of $\\hbar$). $d^4 x$ = spacetime volume element. PHYSICAL fields extremize $S$.");
  W("classical-field-theory", "Field Euler-Lagrange",
    "$\\phi$ = field. $\\mathcal L$ = Lagrangian density. FIELD analog of mechanical Euler-Lagrange equations.");

  W("qft", "Field expansion",
    "$\\phi$ = quantum field operator. $a_k, a_k^\\dagger$ = annihilation and creation operators. $\\omega_k = \\sqrt{|\\mathbf k|^2 + m^2}$ = mode frequency.");
  W("qft", "Bosonic commutator",
    "$a_k, a_{k'}^\\dagger$ = creation/annihilation operators. $\\delta$ = Dirac delta. FERMIONS replace commutator with anticommutator.");
  W("qft", "Propagator (QFT)",
    "$p$ = 4-momentum. $m$ = particle mass. $i\\epsilon$ = causal prescription. AMPLITUDE for virtual particle propagation.");

  W("renormalization", "Beta function",
    "$\\beta(g)$ = beta function. $g$ = renormalized coupling. $\\mu$ = renormalization scale. POSITIVE ⟹ coupling grows with energy; negative ⟹ asymptotic freedom.");
  W("renormalization", "Dimensional reg",
    "$D = 4 - \\epsilon$ = generalized spacetime dimension. Integrals computed in $D$ dim; divergences appear as poles in $\\epsilon$.");

  W("radiation-theory", "Larmor",
    "$P$ = power radiated. $q$ = charge. $a$ = acceleration magnitude. $\\epsilon_0$ = vacuum permittivity. $c$ = speed of light. NON-relativistic limit.");
  W("radiation-theory", "Dipole",
    "$P$ = dipole power. $p_0$ = dipole moment amplitude. $\\omega$ = angular frequency. STRONG $\\omega^4$ dependence.");
  W("radiation-theory", "Rayleigh",
    "Scattering cross section $\\sim 1/\\lambda^4$. EXPLAINS blue sky and red sunsets.");

  W("em-waves-matter", "Refractive index",
    "$n$ = refractive index (dimensionless, ≥ 1 for normal materials). $\\epsilon_r, \\mu_r$ = relative permittivity and permeability.");
  W("em-waves-matter", "Phase velocity",
    "$v_p$ = phase velocity. $\\omega$ = angular frequency. $k$ = wavenumber. Speed of wavefronts.");
  W("em-waves-matter", "Group velocity",
    "$v_g$ = group velocity. $d\\omega/dk$ = derivative. Speed of wave-packet envelope. Carries energy and information.");
  W("em-waves-matter", "Critical angle",
    "$\\theta_c$ = critical angle. $n_1, n_2$ = refractive indices ($n_1 > n_2$). Above this incidence: total internal reflection.");
  W("em-waves-matter", "Brewster",
    "$\\theta_B$ = Brewster's angle. $n_1, n_2$ = refractive indices. AT this angle: reflected light is fully polarized perpendicular to plane of incidence.");
  W("em-waves-matter", "Skin depth",
    "$\\delta$ = skin depth (m). $\\mu$ = permeability. $\\sigma$ = conductivity. $\\omega$ = angular frequency. AC current concentrated in this surface layer in conductors.");

  W("lasers", "Population inversion",
    "$N_1, N_2$ = populations of lower and upper laser levels. $N_2 > N_1$ for net stimulated emission to exceed absorption. NOT achievable in thermal equilibrium.");
  W("lasers", "Threshold",
    "Single-pass gain in the amplifier = round-trip loss in the cavity. ABOVE: coherent buildup. Below: spontaneous emission dominates.");
  W("lasers", "Coherence length",
    "$L_c$ = coherence length. $c$ = speed of light. $\\Delta\\nu$ = laser linewidth (Hz). HIGHLY monochromatic lasers have long $L_c$.");

  W("quantum-optics", "Coherent state",
    "$|\\alpha\\rangle$ = coherent state. $\\hat a$ = annihilation operator. $\\alpha$ = complex eigenvalue (NOT a photon number).");
  W("quantum-optics", "$g^{(2)}$",
    "$g^{(2)}(0)$ = second-order correlation at zero delay. CLASSIFIES light: 2 (thermal/bunched), 1 (coherent), <1 (antibunched, non-classical).");

  W("amo", "Doppler limit",
    "$T_D$ = Doppler cooling temperature limit. $\\hbar$ = reduced Planck. $\\Gamma$ = atomic transition linewidth. $k_B$ = Boltzmann constant.");
  W("amo", "Recoil limit",
    "$T_R$ = recoil-limited temperature. $\\hbar, k$ = reduced Planck and photon wavenumber. $m$ = atomic mass. $k_B$ = Boltzmann.");
  W("amo", "BEC critical",
    "$T_c$ = BEC critical temperature. $n$ = density. $\\hbar$ = reduced Planck. $m$ = atomic mass. $k_B$ = Boltzmann.");

  W("phonons", "1D chain dispersion",
    "$\\omega(q)$ = phonon angular frequency at wavenumber $q$. $K$ = spring constant between neighbors. $m$ = atomic mass. $a$ = lattice spacing.");
  W("phonons", "Sound speed",
    "$v_s$ = sound speed in the long-wavelength limit. $a, K, m$ = lattice spacing, spring constant, atomic mass.");
  W("phonons", "Debye temperature",
    "$\\Theta_D$ = Debye temperature (K). $\\hbar, \\omega_D$ = reduced Planck and maximum phonon angular frequency. $k_B$ = Boltzmann constant.");
  W("phonons", "Debye specific heat",
    "$C_V$ = constant-volume specific heat. At $T \\ll \\Theta_D$: $C_V \\propto T^3$. At $T \\gg \\Theta_D$: $C_V \\to 3R$ (Dulong-Petit).");

  W("stellar-evolution", "Main sequence lifetime",
    "$M$ = stellar mass. $L \\propto M^{3.5}$ (mass-luminosity relation). Fuel $\\propto M$. Lifetime $\\propto M/L \\propto M^{-2.5}$.");
  W("stellar-evolution", "Eddington",
    "$L_E$ = Eddington luminosity (max). $G$ = Newton's constant. $M$ = stellar mass. $m_p$ = proton mass. $c$ = speed of light. $\\sigma_T$ = Thomson cross section.");
  W("stellar-evolution", "Chandrasekhar",
    "$M_\\text{Ch}$ = Chandrasekhar mass ≈ 1.4 $M_\\odot$. UPPER limit on white dwarf mass; above this, relativistic electron degeneracy can't support against gravity.");
  W("stellar-evolution", "TOV",
    "TOV (Tolman-Oppenheimer-Volkoff) limit ≈ 2-3 $M_\\odot$. UPPER limit on neutron star mass. Above this: black hole.");

  W("stellar-nucleosynthesis", "pp chain",
    "Net reaction: 4 protons → 1 He-4 nucleus + 2 positrons + 2 neutrinos + 26.7 MeV. RATE-LIMITED by the first step ($p + p \\to D$); explains why the Sun burns slowly.");
  W("stellar-nucleosynthesis", "Triple alpha",
    "Three He-4 nuclei fuse to one C-12. REQUIRES $T \\gtrsim 10^8$ K. Source of all carbon in the universe.");
  W("stellar-nucleosynthesis", "Iron peak",
    "Fe-56 has the highest binding energy per nucleon. END of energy-releasing fusion. Stars build up Fe cores then collapse.");

  W("compact-objects", "WD density",
    "Density on the order of $10^9$ kg/m³. EARTH-SIZED object with the mass of the Sun. Supported by electron degeneracy pressure.");
  W("compact-objects", "NS density",
    "Density on the order of $10^{17}$ kg/m³ — nuclear matter density. Supported by neutron degeneracy + strong-force repulsion.");
  W("compact-objects", "Hawking temperature",
    "$T_H$ = Hawking temperature. $\\hbar, c, G, k_B$ = fundamental constants. $M$ = BH mass. TINY for stellar-mass BHs; large for primordial.");
  W("compact-objects", "BH entropy",
    "$S_{BH}$ = Bekenstein-Hawking entropy. $A$ = event-horizon area. $\\ell_P$ = Planck length. PROPORTIONAL to AREA, not volume — basis of holographic principle.");

  W("galactic-dynamics", "Enclosed mass",
    "$M(r)$ = mass enclosed within radius $r$. $v$ = circular orbital velocity. $G$ = Newton's constant. ESTIMATE from rotation curves.");
  W("galactic-dynamics", "Virial",
    "$\\langle T \\rangle$ = average kinetic energy. $\\langle V \\rangle$ = average potential energy. Bound system in equilibrium.");
  W("galactic-dynamics", "Tully-Fisher",
    "$L$ = luminosity of spiral galaxy. $v$ = flat rotation speed. EMPIRICAL relation used as distance indicator.");

  W("bbn-cmb-inflation", "He fraction",
    "$Y_p \\approx 0.245$ = predicted primordial mass fraction of He-4. MATCHES observed abundance in oldest stars to within 1% — pillar of Big Bang.");
  W("bbn-cmb-inflation", "CMB temperature",
    "$T_\\text{CMB}$ ≈ 2.725 K — measured today. ORIGINATED at recombination ($z \\sim 1100$, $T \\sim 3000$ K); cooled by expansion factor of 1100.");
  W("bbn-cmb-inflation", "Acoustic peaks",
    "$\\ell$ = multipole moment in CMB power spectrum. First peak at $\\ell \\sim 220$ — measures spatial curvature (universe is FLAT).");

  W("gravitational-waves", "Quadrupole",
    "$P$ = GW power. $G$ = Newton's constant. $c$ = speed of light. $Q_{ij}$ = quadrupole moment tensor. THIRD time derivative — explains why GWs are so weak.");
  W("gravitational-waves", "Chirp",
    "$f$ = GW frequency. $t_c$ = coalescence time. Frequency rises as inspiral tightens — characteristic 'chirp' signal.");

  W("high-energy-astrophysics", "CR spectrum",
    "Cosmic-ray flux scales with energy as $E^{-2.7}$ up to the knee ($\\sim 10^{15}$ eV), then $E^{-3}$. POWER-LAW spectrum.");
  W("high-energy-astrophysics", "Eddington SMBH",
    "$M$ in units of $M_\\odot$. Maximum luminosity from accretion onto supermassive BHs.");

  W("math-methods-physics", "Heat kernel",
    "$G$ = heat-equation Green's function (1D). $\\alpha$ = thermal diffusivity. $x, t$ = position and time. GAUSSIAN spreading with width $\\sqrt{4\\alpha t}$.");
  W("math-methods-physics", "Saddle point",
    "$N$ = large parameter. $f$ = analytic function. $x_0$ = maximum of $f$ on the integration contour. GIVES Stirling's approximation when applied to $\\Gamma(N+1)$.");
  W("math-methods-physics", "WKB",
    "$\\psi$ = semiclassical wavefunction. $p(x) = \\sqrt{2m(E - V(x))}$ = classical momentum. $\\hbar$ = reduced Planck. VALID when wavelength varies slowly.");

  W("group-theory-physics", "SU(2) generators",
    "$\\sigma_i$ = Pauli matrices ($i = x, y, z$). Generators of $SU(2)$. ALGEBRA: $[\\sigma_i, \\sigma_j] = 2i\\epsilon_{ijk}\\sigma_k$.");
  W("group-theory-physics", "SU(3) generators",
    "8 Gell-Mann matrices $\\lambda_a$ ($a = 1, \\ldots, 8$). Generators of $SU(3)$. UNDERLIE color in QCD.");

  W("computational-physics", "MC error",
    "$\\sigma$ = standard deviation of integrand. $N$ = sample size. Error scales as $1/\\sqrt N$ — INDEPENDENT of dimension.");
  W("computational-physics", "Metropolis",
    "$\\Delta E$ = energy change for proposed move. $\\beta = 1/(k_BT)$. ACCEPT with probability $\\min(1, e^{-\\beta \\Delta E})$. Samples Boltzmann.");
  W("computational-physics", "Verlet",
    "$x_n$ = position at step $n$. $a$ = acceleration. $\\Delta t$ = time step. SYMPLECTIC: preserves phase-space volume.");
  W("computational-physics", "RK4 order",
    "Standard 4th-order Runge-Kutta. Error per step $O(h^5)$; global error $O(h^4)$. Most-used non-stiff ODE integrator.");

  W("soft-matter-biophysics", "Polymer R²",
    "$R$ = end-to-end distance. $N$ = number of segments. $b$ = segment length. IDEAL chain (random walk) result.");
  W("soft-matter-biophysics", "Flory",
    "$\\nu$ = Flory exponent. SELF-AVOIDING walk in 3D: $\\nu \\approx 3/5$. Ideal: $\\nu = 1/2$. 2D exact: $\\nu = 3/4$.");
  W("soft-matter-biophysics", "DNA persistence",
    "$\\ell_p$ ≈ 50 nm for DNA ~ 150 base pairs. Sets the scale of bending stiffness.");
  W("soft-matter-biophysics", "Membrane",
    "$\\kappa$ = bending modulus (units of $k_BT$). $H$ = mean curvature. Energy quadratic in curvature.");
  W("soft-matter-biophysics", "ATP",
    "ATP hydrolysis releases ~20 $k_BT$ ≈ 0.5 eV per molecule. Cell uses ~$10^{20}$ ATP/s.");

  W("nonequilibrium-statmech", "Einstein",
    "$D$ = diffusion coefficient. $\\mu$ = mobility (drift velocity per force). $k_B$ = Boltzmann constant. $T$ = absolute temperature.");
  W("nonequilibrium-statmech", "Onsager",
    "$L_{ij}$ = phenomenological transport-coefficient matrix. RECIPROCITY: matrix is symmetric. CONSEQUENCE of microscopic time-reversal.");
  W("nonequilibrium-statmech", "Wiedemann-Franz",
    "$\\kappa$ = thermal conductivity. $\\sigma$ = electrical conductivity. $T$ = temperature. $L_0 = \\pi^2 k_B^2/(3e^2) \\approx 2.44 \\times 10^{-8}$ W·Ω/K². UNIVERSAL in metals.");

  W("superconductivity", "BCS gap",
    "$2\\Delta$ = superconducting gap energy. $T_c$ = critical temperature. $k_B$ = Boltzmann constant. UNIVERSAL BCS prediction.");
  W("superconductivity", "London depth",
    "$\\lambda_L$ = London penetration depth (m). $m_e, e$ = electron mass and charge. $n_s$ = superfluid density. $\\mu_0$ = vacuum permeability.");
  W("superconductivity", "Cooper pair charge",
    "$2e$ = charge of a Cooper pair. NEGATIVE because electron carries negative charge. Basis of flux quantum $\\Phi_0 = h/(2e)$.");

  W("quantum-hall-topological", "QH conductance",
    "$\\sigma_{xy}$ = Hall conductance. $\\nu$ = filling factor (integer or fraction). $e^2/h$ = quantum of conductance.");
  W("quantum-hall-topological", "Filling factor",
    "$\\nu$ = filling factor. $n$ = electron density. $h, e, B$ = Planck, charge, magnetic field. INTEGER ν for integer QHE; fractional for FQHE.");
  W("quantum-hall-topological", "Landau levels",
    "$E_n$ = energy. $n = 0, 1, 2, \\ldots$. $\\omega_c = eB/m$ = cyclotron frequency. EQUAL spacing $\\hbar\\omega_c$.");
  W("quantum-hall-topological", "Berry phase",
    "$\\gamma$ = geometric (Berry) phase. $|\\psi\\rangle$ = quantum state parametrized by $\\mathbf R$. PATH-DEPENDENT, not a dynamical phase.");

  // ============================================================
  // BATCH 3 — match actual LaTeX prefixes used in formulas.js
  // ============================================================

  // ----- NEWTON'S LAWS -----
  W("newtons-laws", "$\\vec F_{\\text{net}}",
    "$\\vec F_\\text{net}$ = vector sum of all external forces on the object (N). $m$ = inertial mass (kg). $\\vec a$ = acceleration (m/s²). Valid in any inertial reference frame.");
  W("newtons-laws", "$\\vec F_{12}",
    "Newton's third law. $\\vec F_{12}$ = force ON object 1 BY object 2. $\\vec F_{21}$ = force ON object 2 BY object 1. EQUAL magnitude, OPPOSITE direction, applied to DIFFERENT objects.");
  W("newtons-laws", "$W = mg$",
    "$W$ = weight (N). $m$ = mass (kg). $g$ = gravitational field strength ($\\approx 9.8$ m/s² on Earth, varies with altitude and latitude).");
  W("newtons-laws", "$f_s \\leq",
    "$f_s$ = static friction force (N). $\\mu_s$ = coefficient of static friction (dimensionless). $N$ = normal force (N). INEQUALITY: friction adjusts to keep object stationary until it can't, then slip.");
  W("newtons-laws", "$f_k = ",
    "$f_k$ = kinetic friction force (N). $\\mu_k$ = coefficient of kinetic friction (dimensionless, typically smaller than $\\mu_s$). $N$ = normal force. EQUALITY: kinetic friction is essentially independent of relative speed.");
  W("newtons-laws", "Tension",
    "Tension in an inextensible massless rope transmits force unchanged from one end to the other. CONSEQUENCE: tension is the same magnitude throughout a single piece of rope.");
  W("newtons-laws", "Normal force",
    "Normal force is the force a surface exerts on objects in contact with it, ALWAYS perpendicular to the surface. Adjusts to satisfy other force constraints (e.g., no penetration into the surface).");

  // ----- KINEMATICS -----
  W("kinematics", "$\\bar v",
    "$\\bar v$ = average velocity (m/s). $\\Delta x$ = displacement (m). $\\Delta t$ = elapsed time (s). DEFINITION; does not require constant acceleration.");
  W("kinematics", "$v = v_0 + at$",
    "$v$ = final velocity. $v_0$ = initial velocity. $a$ = CONSTANT acceleration. $t$ = time. SUVAT 1.");
  W("kinematics", "$x = x_0",
    "$x, x_0$ = final and initial positions. $v_0$ = initial velocity. $a$ = constant acceleration. $t$ = time. SUVAT 2.");
  W("kinematics", "$v^2 = v_0^2",
    "$v, v_0$ = final and initial speeds. $a$ = constant acceleration. $x - x_0$ = displacement. SUVAT 3 (time-independent).");
  W("kinematics", "Free fall:",
    "$g \\approx 9.8$ m/s² (Earth, sea level). Acceleration due to gravity for objects in free fall near Earth's surface — independent of mass (Galileo).");
  W("kinematics", "Projectile:",
    "$y$ = vertical position. $x$ = horizontal position. $\\theta$ = launch angle. $v_0$ = launch speed. $g$ = gravity. Trajectory is a parabola (no air resistance).");
  W("kinematics", "Range:",
    "$R$ = horizontal range on level ground (m). $v_0$ = launch speed. $\\theta$ = launch angle. $g$ = gravity. MAXIMUM at $\\theta = 45°$.");

  // ----- MOMENTUM -----
  W("momentum-impulse", "$\\vec p = m\\vec v$",
    "$\\vec p$ = momentum (kg·m/s). $m$ = mass (kg). $\\vec v$ = velocity (m/s). A VECTOR. Relativistic version: $\\vec p = \\gamma m\\vec v$.");
  W("momentum-impulse", "$\\vec F = d\\vec p/dt$",
    "$\\vec F$ = net force. $\\vec p$ = momentum. ORIGINAL form of Newton's 2nd law. For constant mass: reduces to $\\vec F = m\\vec a$.");
  W("momentum-impulse", "$\\vec J",
    "$\\vec J$ = impulse (N·s). $\\vec F$ = force. $\\Delta \\vec p$ = change in momentum. CHANGES momentum by the integrated force over time.");
  W("momentum-impulse", "Conservation:",
    "In an ISOLATED system (no external forces), total momentum stays constant. Holds for ANY collision (elastic, inelastic) and explosions.");
  W("momentum-impulse", "Elastic",
    "Both momentum AND kinetic energy conserved. EQUAL masses 1D, target at rest: incoming stops, target takes all the velocity (Newton's cradle).");
  W("momentum-impulse", "Inelastic",
    "Momentum conserved; KE NOT. PERFECTLY inelastic: objects stick together, maximum KE lost (to heat, sound, deformation).");
  W("momentum-impulse", "Center of mass",
    "$\\vec R$ = center of mass. $m_i, \\vec r_i$ = masses and positions of constituents. CM moves as if all mass concentrated at one point, with all external forces applied there.");

  // ----- ENERGY/WORK -----
  W("energy-work", "$W = \\vec F",
    "$W$ = work done by force $\\vec F$ over displacement $d\\vec r$ (J). The dot product picks out only the force component along the motion.");
  W("energy-work", "$W = Fd\\cos\\theta",
    "$W$ = work (J). $F$ = force magnitude. $d$ = displacement magnitude. $\\theta$ = angle between force and displacement. Constant force, straight path.");
  W("energy-work", "$KE",
    "$KE$ = kinetic energy (J). $m$ = mass (kg). $v$ = speed (m/s). NEVER negative. Reference-frame-dependent.");
  W("energy-work", "Work-energy",
    "Net work done on object = change in its kinetic energy. ENERGY accounting; works for any net force.");
  W("energy-work", "$U_g",
    "$U_g$ = gravitational PE near Earth (J). $m$ = mass. $g$ = gravity. $h$ = height above some reference. Reference is arbitrary; only differences matter.");
  W("energy-work", "$U_s",
    "$U_s$ = elastic PE in spring (J). $k$ = spring constant (N/m). $x$ = displacement from natural length. ALWAYS non-negative.");
  W("energy-work", "$P = ",
    "$P$ = power (W = J/s). $E$ = energy. $t$ = time. Instantaneous: $P = \\vec F \\cdot \\vec v$.");

  // ----- ELECTROSTATICS -----
  W("electrostatics", "$F = \\dfrac{k q_1",
    "$F$ = electrostatic force (N). $k = 1/(4\\pi\\epsilon_0) \\approx 9 \\times 10^9$ N·m²/C². $q_1, q_2$ = charges (C). $r$ = distance (m). Like charges repel, unlike attract.");
  W("electrostatics", "$k = 1/",
    "$k$ = Coulomb's constant. $\\epsilon_0 \\approx 8.85 \\times 10^{-12}$ F/m = permittivity of free space. UNITS combine to give N·m²/C².");
  W("electrostatics", "$\\vec E = \\vec F/q",
    "$\\vec E$ = electric field (V/m or N/C). $\\vec F$ = force on test charge $q$. Field is a property of space, independent of the test charge.");
  W("electrostatics", "Point charge:",
    "$E$ = field magnitude at distance $r$ from point charge $q$ (V/m). $V$ = potential at the same point (V). $k$ = Coulomb's constant.");
  W("electrostatics", "$\\oint \\vec E",
    "Gauss's law. $\\vec E$ = electric field. $d\\vec A$ = area element (outward normal). $Q_\\text{enc}$ = total charge inside closed surface (C). $\\epsilon_0$ = vacuum permittivity.");
  W("electrostatics", "$C = Q/V$",
    "$C$ = capacitance (farads, F = C/V). $Q$ = charge stored. $V$ = voltage across the capacitor.");
  W("electrostatics", "$C = \\varepsilon_0",
    "$C$ = parallel-plate capacitance. $\\epsilon_0$ = vacuum permittivity. $A$ = plate area (m²). $d$ = plate separation (m). With dielectric: multiply by $\\epsilon_r$.");
  W("electrostatics", "$U_C",
    "$U_C$ = energy stored in capacitor (J). $C$ = capacitance. $V$ = voltage. Alternative forms: $Q^2/(2C)$ or $QV/2$.");

  // ----- DERIVATIVES -----
  W("derivatives", "$f'(x) =",
    "$f'(x)$ = derivative of $f$ at $x$. $h$ = small increment. DEFINITION via limit: instantaneous rate of change = limit of average rate of change.");
  W("derivatives", "$(x^n)'",
    "$x$ = variable. $n$ = real number. ALWAYS valid for integer $n$; for general real $n$, requires $x > 0$ (or treat carefully).");
  W("derivatives", "$(fg)'",
    "$f, g$ = differentiable functions of the same variable. The derivative of a product is NOT the product of derivatives.");
  W("derivatives", "$\\left(\\dfrac{f}{g}",
    "$f, g$ = differentiable functions. $g \\neq 0$. SIGN convention is $f'g - fg'$ in the numerator (mnemonic: 'lo d hi minus hi d lo').");
  W("derivatives", "$(f \\circ g)'",
    "Chain rule. $f, g$ = differentiable functions. $f \\circ g$ = composition. Rate of $f$ wrt outer variable times rate of inner wrt $x$.");
  W("derivatives", "$(e^x)'",
    "$e \\approx 2.718$ = Euler's number. $\\ln$ = natural logarithm. The exponential is its OWN derivative (defining property of $e$).");
  W("derivatives", "$(\\sin x)'",
    "$x$ in RADIANS (essential for these clean formulas). The derivative cycles: $\\sin \\to \\cos \\to -\\sin \\to -\\cos \\to \\sin$.");

  // ----- INTEGRALS -----
  W("integrals", "$\\int x^n",
    "$x$ = integration variable. $n$ = power, must NOT equal $-1$. $C$ = arbitrary constant of integration. For $n = -1$: $\\int dx/x = \\ln|x| + C$.");
  W("integrals", "$\\int \\dfrac{dx}{x}",
    "$x \\neq 0$. ABSOLUTE VALUE because $\\ln$ is undefined for negative argument; works for $x < 0$ too. $C$ = constant of integration.");
  W("integrals", "$\\int e^x",
    "Exponential integrates to itself. KEY property: only function (up to constant) whose derivative equals itself.");
  W("integrals", "$\\int_a^b f'(x)",
    "Fundamental Theorem of Calculus, part 2. $f$ = differentiable on $[a, b]$. $a, b$ = limits of integration. Definite integral = signed change in $f$.");
  W("integrals", "$\\int u\\,dv",
    "$u, v$ = differentiable functions of $x$ (you choose). Integration by parts — product rule run backwards.");
  W("integrals", "$\\int f(g(x))",
    "$u = g(x)$ substitution. $du = g'(x)\\,dx$. Chain rule run backwards. Choose $u$ so the rest of the integrand simplifies.");
  W("integrals", "$\\int_{-\\infty}^",
    "Gaussian integral. RESULT $\\sqrt\\pi$. PROVED via a 2D trick converting to polar coordinates.");

  // ----- TRIG -----
  W("trigonometry", "$\\sin\\theta =",
    "$\\theta$ = angle. 'Opp' = length of side opposite to angle. 'Adj' = length of side adjacent. 'Hyp' = hypotenuse. Valid only for right triangles (or via unit-circle extension).");
  W("trigonometry", "$\\sin^2\\theta",
    "Pythagorean identity. $\\theta$ = any real angle. Comes from Pythagoras applied to the unit circle (coordinates $(\\cos\\theta, \\sin\\theta)$).");
  W("trigonometry", "$\\sin(A \\pm B)",
    "Angle-sum identity for sine. $A, B$ = angles. ± signs correlated on both sides.");
  W("trigonometry", "$\\cos(A \\pm B)",
    "Angle-sum identity for cosine. NOTE the $\\mp$ on the right side — opposite of the sign on left.");
  W("trigonometry", "$\\dfrac{a}{\\sin A}",
    "Law of sines. $a, b, c$ = sides of triangle. $A, B, C$ = OPPOSITE angles. Common ratio = $2R$ where $R$ is the circumradius.");
  W("trigonometry", "$c^2 = a^2",
    "Law of cosines. $a, b, c$ = sides. $C$ = angle opposite to $c$. GENERALIZES Pythagoras ($C = 90°$ gives $\\cos C = 0$).");

  // ----- COMPLEX NUMBERS -----
  W("complex-numbers", "$i^2",
    "$i$ = imaginary unit. DEFINING property: $i^2 = -1$. Algebra with complex numbers follows from extending the reals to include $i$.");
  W("complex-numbers", "$|a + bi|",
    "$a, b$ = real parts. $|z|$ = modulus (length) of complex number. PYTHAGORAS applied to the Argand-plane representation.");
  W("complex-numbers", "$\\arg(a + bi)",
    "$\\arg$ = argument (angle, in radians). Multi-valued; principal value usually taken in $(-\\pi, \\pi]$. Care needed for quadrant.");
  W("complex-numbers", "$z = re^{i\\theta}",
    "$r = |z|$ = modulus. $\\theta = \\arg z$ = argument. POLAR form makes multiplication geometric: magnitudes multiply, angles add.");
  W("complex-numbers", "$e^{i\\pi}",
    "Euler's identity. CONNECTS five fundamental constants: $e, i, \\pi, 1, 0$. Often called the most beautiful equation.");
  W("complex-numbers", "$(re^{i\\theta})^n",
    "De Moivre's theorem. $n$ = integer (or real). Powers of complex numbers in polar form.");
  W("complex-numbers", "$\\overline{a + bi}",
    "$\\overline{z}$ = complex conjugate. Real part unchanged; imaginary part flips sign. $z\\bar z = |z|^2$ (real and non-negative).");

  // ----- THERMODYNAMICS -----
  W("thermodynamics", "$\\Delta U",
    "$\\Delta U$ = change in internal energy (J). $Q$ = heat added to the system. $W$ = work done BY the system on surroundings. First law (energy conservation).");
  W("thermodynamics", "$Q = mc",
    "$Q$ = heat absorbed (J). $m$ = mass (kg). $c$ = specific heat capacity (J/(kg·K)). $\\Delta T$ = temperature change. For water: $c = 4186$ J/(kg·K).");
  W("thermodynamics", "$\\eta = 1 -",
    "$\\eta$ = efficiency of heat engine (dimensionless). $Q_c$ = heat rejected to cold reservoir. $Q_h$ = heat absorbed from hot reservoir.");
  W("thermodynamics", "$\\eta_{\\text{Carnot}}",
    "$\\eta_\\text{Carnot}$ = maximum efficiency between reservoirs at temperatures $T_h$ (hot) and $T_c$ (cold). MUST be absolute temperatures (kelvin).");
  W("thermodynamics", "$\\Delta S",
    "$\\Delta S$ = entropy change (J/K). $Q_\\text{rev}$ = heat absorbed in a REVERSIBLE process. $T$ = absolute temperature.");
  W("thermodynamics", "$\\Delta S_{\\text{universe}}",
    "Second law. Total entropy of universe never decreases. EQUALITY only for reversible processes; INEQUALITY for any real process.");
  W("thermodynamics", "$W = \\int P",
    "$W$ = work done by gas during volume change (J). $P$ = pressure (Pa). $dV$ = volume element. GEOMETRIC: area under the $P$-$V$ curve.");

  // ----- MAXWELL -----
  W("maxwell-em", "$\\nabla \\cdot \\vec E",
    "$\\vec E$ = electric field. $\\rho$ = charge density (C/m³). $\\epsilon_0 \\approx 8.85 \\times 10^{-12}$ F/m. Differential form of Gauss's law.");
  W("maxwell-em", "$\\nabla \\cdot \\vec B",
    "$\\vec B$ = magnetic field. EQUALS ZERO everywhere. No magnetic monopoles have been observed.");
  W("maxwell-em", "$\\nabla \\times \\vec E",
    "Faraday's law. $\\vec E$ = electric field. $\\partial \\vec B/\\partial t$ = rate of change of magnetic field. Changing B field creates a circulating E field.");
  W("maxwell-em", "$\\nabla \\times \\vec B",
    "Ampère-Maxwell law. $\\vec J$ = current density (A/m²). $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A. Maxwell's displacement-current term $\\mu_0\\epsilon_0 \\partial \\vec E/\\partial t$ completes the symmetry.");
  W("maxwell-em", "$c = 1/",
    "$c$ = speed of light in vacuum ($\\approx 3 \\times 10^8$ m/s). $\\mu_0, \\epsilon_0$ = vacuum permeability and permittivity. PROFOUND: Maxwell predicted light is EM in 1864.");
  W("maxwell-em", "$\\vec S",
    "$\\vec S$ = Poynting vector (W/m²). $\\vec E$ = electric field. $\\vec B$ = magnetic field. $\\mu_0$ = vacuum permeability. DIRECTION: energy flow.");

  // ----- AC CIRCUITS -----
  W("ac-circuits", "$V_\\text{RMS}",
    "$V_\\text{RMS}$ = root-mean-square voltage. $V_0$ = peak amplitude. Same heating effect as DC of value $V_\\text{RMS}$. US mains: 120 V RMS = 170 V peak.");
  W("ac-circuits", "$X_L",
    "$X_L$ = inductive reactance (Ω). $\\omega = 2\\pi f$ = angular frequency. $L$ = inductance (H). INCREASES with frequency.");
  W("ac-circuits", "$X_C",
    "$X_C$ = capacitive reactance (Ω). $\\omega$ = angular frequency. $C$ = capacitance (F). DECREASES with frequency.");
  W("ac-circuits", "$Z =",
    "$Z$ = impedance magnitude (Ω). $R$ = resistance. $X_L - X_C$ = net reactance. Generalized Ohm's law: $V = IZ$.");
  W("ac-circuits", "$\\omega_0",
    "$\\omega_0$ = resonance angular frequency (rad/s). $L, C$ = inductance, capacitance. AT RESONANCE: $X_L = X_C$, impedance purely resistive.");
  W("ac-circuits", "$Q",
    "$Q$ = quality factor (dimensionless). $\\omega_0$ = resonance frequency. $L$ = inductance. $R$ = resistance. HIGH $Q$: narrow resonance, low loss.");
  W("ac-circuits", "$\\phi",
    "$\\phi$ = phase angle. $X_L, X_C$ = reactances. $R$ = resistance. Positive: voltage leads current (inductive); negative: current leads voltage (capacitive).");

  // ----- SR -----
  W("special-relativity", "$\\gamma",
    "$\\gamma$ = Lorentz factor (dimensionless). $v$ = relative speed. $c$ = speed of light. $\\gamma \\geq 1$; $\\gamma = 1$ at rest, $\\gamma \\to \\infty$ as $v \\to c$.");
  W("special-relativity", "$\\Delta t",
    "$\\Delta t$ = time in observer's frame. $\\Delta \\tau$ = proper time (in clock's rest frame). $\\gamma$ = Lorentz factor. MOVING clocks tick slow.");
  W("special-relativity", "$L =",
    "$L$ = length measured in lab frame. $L_0$ = proper length (rest-frame length). $\\gamma$ = Lorentz factor. MOVING rods are SHORTER along motion direction.");
  W("special-relativity", "$x' =",
    "Lorentz transformation. $(x, t), (x', t')$ = coordinates in two frames. $v$ = relative velocity. $\\gamma$ = Lorentz factor. REDUCES to Galilean when $v \\ll c$.");
  W("special-relativity", "$E =",
    "$E$ = total energy. $\\gamma$ = Lorentz factor. $m$ = rest mass. $c$ = speed of light. AT REST: $E = mc^2$ (famous).");
  W("special-relativity", "$E^2",
    "$E$ = total energy. $p$ = momentum magnitude. $mc^2$ = rest energy. INVARIANT under Lorentz transformation.");
  W("special-relativity", "$u' =",
    "Relativistic velocity addition. $u, v, u'$ = velocities. $c$ = speed of light. NEVER exceeds $c$.");
  W("special-relativity", "$\\Delta s^2",
    "Spacetime interval. $\\Delta t$ = time separation. $\\Delta x$ = space separation. $c$ = speed of light. INVARIANT — same in all inertial frames.");

  // ----- QM FOUNDATIONS -----
  W("qm-foundations", "$[\\hat x,",
    "$\\hat x, \\hat p$ = position and momentum operators. $i$ = imaginary unit. $\\hbar = h/(2\\pi) \\approx 1.055 \\times 10^{-34}$ J·s. Source of uncertainty principle.");
  W("qm-foundations", "$\\Delta x",
    "$\\Delta x, \\Delta p$ = standard deviations of position and momentum measurements. $\\hbar$ = reduced Planck constant. Equality at GAUSSIAN states.");
  W("qm-foundations", "$i\\hbar",
    "Time-dependent Schrödinger equation. $\\psi$ = wavefunction. $\\hat H$ = Hamiltonian operator (energy). UNITARY evolution; preserves probability.");
  W("qm-foundations", "$\\hat H\\psi",
    "Time-independent (stationary) Schrödinger equation. $\\psi$ = energy eigenstate. $E$ = energy eigenvalue. Stationary states have definite energy.");
  W("qm-foundations", "$P(x)",
    "Born rule. $P(x)$ = probability density of finding particle at $x$. $\\psi$ = wavefunction. Probability is ALWAYS non-negative real.");
  W("qm-foundations", "$\\int|\\psi|^2",
    "Normalization condition. Total probability of finding the particle somewhere is 1. ESSENTIAL for probabilistic interpretation.");

  // ----- ELECTRIC CIRCUITS -----
  W("electric-circuits", "$V = IR$",
    "Ohm's law. $V$ = voltage (V). $I$ = current (A). $R$ = resistance (Ω). For ohmic resistors (linear, frequency-independent).");
  W("electric-circuits", "$P =",
    "$P$ = power dissipated as heat (W). Three equivalent forms via Ohm's law: $VI$, $I^2 R$, $V^2/R$.");
  W("electric-circuits", "Series:",
    "$R_\\text{eq}$ = equivalent resistance. Resistors in SERIES carry the same current; voltages add.");
  W("electric-circuits", "Parallel:",
    "$R_\\text{eq}$ = equivalent resistance. Resistors in PARALLEL share the same voltage; currents add. Result is SMALLER than smallest individual.");
  W("electric-circuits", "$\\tau",
    "$\\tau$ = RC time constant (s). $R$ = resistance (Ω). $C$ = capacitance (F). After 1τ: 63% charged; after 5τ: 99.3%.");
  W("electric-circuits", "KVL",
    "KVL = Kirchhoff's voltage law: sum of voltage drops around any closed loop = 0. Conservation of energy.");
  W("electric-circuits", "KCL",
    "KCL = Kirchhoff's current law: sum of currents into any node = 0. Conservation of charge.");
  W("electric-circuits", "EMF",
    "EMF (electromotive force) = source voltage when no current flows. With internal resistance $r$ and external $R$: $I = $ EMF / $(R + r)$.");

  // ----- MAGNETISM -----
  W("magnetism-induction", "$\\vec F = q",
    "Lorentz magnetic force. $q$ = charge (C). $\\vec v$ = velocity. $\\vec B$ = magnetic field (T). PERPENDICULAR to both $\\vec v$ and $\\vec B$ — does no work.");
  W("magnetism-induction", "$d\\vec B",
    "Biot-Savart. $d\\vec B$ = contribution from a current element. $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A. $I$ = current. $d\\vec\\ell$ = directed length element. $\\hat r$ = unit vector to field point. $r$ = distance.");
  W("magnetism-induction", "$\\oint \\vec B",
    "Ampère's law (static). $\\vec B$ = magnetic field. $d\\vec\\ell$ = path element. $I_\\text{enc}$ = total enclosed current. $\\mu_0$ = vacuum permeability.");
  W("magnetism-induction", "Long straight",
    "$B$ = field magnitude. $\\mu_0$ = vacuum permeability. $I$ = current. $r$ = perpendicular distance from wire. Field circles the wire (right-hand rule).");
  W("magnetism-induction", "Center of loop",
    "$B$ = field at center of circular loop of radius $R$ carrying current $I$. $\\mu_0$ = vacuum permeability. Directed along loop axis.");
  W("magnetism-induction", "Solenoid",
    "$B$ = field inside long solenoid (essentially uniform). $\\mu_0$ = vacuum permeability. $n$ = turns per unit length (1/m). $I$ = current.");
  W("magnetism-induction", "$\\mathcal E",
    "Faraday's law. $\\mathcal E$ = induced EMF (V). $\\Phi_B$ = magnetic flux (Wb = T·m²). MINUS SIGN: Lenz's law — induced current opposes the flux change.");
  W("magnetism-induction", "$L =",
    "$L$ = self-inductance (H = V·s/A). $\\Phi$ = total flux linked by the inductor. $I$ = current. Energy stored: $\\tfrac{1}{2}LI^2$.");

  // ----- KINETIC THEORY -----
  W("kinetic-theory", "$pV",
    "Ideal gas law. $p$ = pressure (Pa). $V$ = volume (m³). $N$ = number of molecules. $k_B = 1.38 \\times 10^{-23}$ J/K. $T$ = absolute temperature (K). Equivalent: $pV = nRT$ with $n$ moles and $R = N_A k_B \\approx 8.314$ J/(mol·K).");
  W("kinetic-theory", "$\\langle E_\\text{KE}",
    "Average translational kinetic energy of a molecule. $k_B$ = Boltzmann constant. $T$ = absolute temperature. EQUIPARTITION: $k_BT/2$ per quadratic degree of freedom.");
  W("kinetic-theory", "$v_{\\text{rms}}",
    "$v_\\text{rms}$ = root-mean-square molecular speed (m/s). $k_B$ = Boltzmann constant. $T$ = absolute temperature. $m$ = mass of ONE molecule.");
  W("kinetic-theory", "Maxwell-Boltzmann",
    "$f(v)$ = speed distribution (probability density). $m$ = molecular mass. $k_B$ = Boltzmann constant. $T$ = absolute temperature.");
  W("kinetic-theory", "$\\lambda",
    "$\\lambda$ = mean free path (m). $n$ = number density (1/m³). $d$ = molecular diameter (m). Average distance between collisions.");

  // ----- QM 1D -----
  W("qm-1d", "$E_n",
    "$E_n$ = energy of $n$-th level. $n = 1, 2, 3, \\ldots$ = quantum number. $\\hbar$ = reduced Planck constant. $m$ = particle mass. $L$ = well width. Ground state NOT zero (zero-point energy).");

  // ----- WAVES -----
  W("waves", "$v = f\\lambda$",
    "$v$ = wave speed (m/s). $f$ = frequency (Hz). $\\lambda$ = wavelength (m). UNIVERSAL relation for all waves.");
  W("waves", "$v = \\sqrt{T/\\mu}",
    "$v$ = wave speed on a stretched string. $T$ = tension (N). $\\mu$ = linear mass density (kg/m).");
  W("waves", "$v_\\text{sound}",
    "$v_\\text{sound}$ in air at 20°C ≈ 343 m/s. Speed increases with temperature, slightly with humidity.");
  W("waves", "$y(x, t)",
    "Traveling sinusoidal wave. $y$ = displacement. $A$ = amplitude. $k = 2\\pi/\\lambda$ = wavenumber. $\\omega = 2\\pi f$ = angular frequency. Minus sign: rightward; plus sign: leftward.");
  W("waves", "Doppler",
    "$f_o$ = frequency heard. $f_s$ = source frequency. $v$ = wave speed. $v_o, v_s$ = observer and source speeds. Signs depend on motion direction.");
  W("waves", "Standing wave",
    "$L$ = length. $n = 1, 2, \\ldots$. $v$ = wave speed. For string fixed at both ends OR pipe with same boundaries on both ends.");

  // ----- OPTICS GEO -----
  W("optics-geometric", "$n_1\\sin\\theta_1",
    "Snell's law of refraction. $n_1, n_2$ = refractive indices. $\\theta_1$ = angle of incidence (from normal). $\\theta_2$ = angle of refraction. Light BENDS toward normal entering denser medium.");
  W("optics-geometric", "$\\dfrac{1}{f}",
    "Thin lens (or mirror) equation. $f$ = focal length. $d_o$ = object distance. $d_i$ = image distance. SIGN conventions vary by textbook; be consistent.");
  W("optics-geometric", "$m =",
    "$m$ = magnification. Negative $m$: inverted image. $|m| > 1$: enlarged. $|m| < 1$: reduced.");
  W("optics-geometric", "Critical angle",
    "$\\theta_c$ = critical angle. $n_1 > n_2$ (going from denser to less dense). Above $\\theta_c$: total internal reflection — basis of fiber optics.");

  // ----- OPTICS WAVE -----
  W("optics-wave", "Path difference",
    "Double-slit interference. $d$ = slit separation (m). $\\theta$ = angle to fringe. $m$ = integer order. $\\lambda$ = wavelength. Constructive interference at these angles.");
  W("optics-wave", "Single-slit min",
    "$a$ = slit width (m). $\\theta$ = angle to first minimum. $\\lambda$ = wavelength. NARROWER slit → wider diffraction pattern.");
  W("optics-wave", "$\\Delta y",
    "Fringe spacing. $\\lambda$ = wavelength. $L$ = distance to screen. $d$ = slit separation. SMALL-angle approximation.");
  W("optics-wave", "Rayleigh resolution",
    "$\\theta_\\text{min}$ = minimum resolvable angle. $\\lambda$ = wavelength. $D$ = aperture diameter. Bigger telescope → finer resolution.");
  W("optics-wave", "Brewster",
    "$\\theta_B$ = Brewster's angle. $n_1, n_2$ = refractive indices. At this incidence: reflected light is fully polarized perpendicular to incidence plane.");
  W("optics-wave", "Malus",
    "$I$ = transmitted intensity. $I_0$ = incident intensity through first polarizer. $\\theta$ = angle between successive polarizers.");

  // ----- ROTATIONAL -----
  W("rotational", "$\\boldsymbol\\tau",
    "$\\boldsymbol\\tau$ = torque (N·m). $\\vec r$ = position vector from axis. $\\vec F$ = force. $I$ = moment of inertia (kg·m²). $\\boldsymbol\\alpha$ = angular acceleration (rad/s²).");
  W("rotational", "Moment of inertia (point)",
    "$I$ = moment of inertia. $m_i, r_i$ = mass and perpendicular distance for each particle. CONTINUOUS body: $I = \\int r^2\\,dm$.");
  W("rotational", "Rotational KE",
    "$K$ = rotational kinetic energy (J). $I$ = moment of inertia. $\\omega$ = angular velocity (rad/s). Add $\\tfrac{1}{2}mv_\\text{CM}^2$ for combined translation + rotation.");
  W("rotational", "$\\vec L",
    "$\\vec L$ = angular momentum (kg·m²/s). $I$ = moment of inertia. $\\boldsymbol\\omega$ = angular velocity. Conserved when net external torque is zero.");
  W("rotational", "Parallel axis",
    "$I_d$ = moment about parallel axis distance $d$ from CM. $I_\\text{CM}$ = moment about CM-axis. $M$ = total mass. $d$ = perpendicular distance.");
  W("rotational", "Rolling",
    "$v$ = translational speed of CM. $R$ = radius. $\\omega$ = angular velocity. Constraint for ROLLING WITHOUT SLIPPING.");

  // ----- ATOMIC PHYSICS -----
  W("atomic-physics", "Hydrogen",
    "$E_n$ = energy of $n$-th level (eV). $n = 1, 2, 3, \\ldots$ = principal quantum number. NEGATIVE because bound. Ground state $E_1 = -13.6$ eV.");
  W("atomic-physics", "Rydberg",
    "$\\lambda$ = wavelength of emitted/absorbed photon. $R_H \\approx 1.097 \\times 10^7$ /m. $n_f, n_i$ = final and initial principal quantum numbers.");
  W("atomic-physics", "$a_0$",
    "$a_0 \\approx 0.529$ Å = Bohr radius. Atomic length scale; characteristic spatial extent of hydrogen ground state.");
  W("atomic-physics", "Selection rules",
    "$\\Delta\\ell = \\pm 1$ for electric-dipole transitions. $\\ell$ = orbital quantum number. Other transitions forbidden or much weaker.");

  // ----- LAGRANGIAN/HAMILTONIAN -----
  W("lagrangian-hamiltonian", "$L =",
    "$L$ = Lagrangian (J). $T$ = kinetic energy. $V$ = potential energy. Depends on generalized coordinates $q_i$ and velocities $\\dot q_i$.");
  W("lagrangian-hamiltonian", "Euler-Lagrange (LH)",
    "$L$ = Lagrangian. $q_i$ = generalized coordinate. $\\dot q_i$ = generalized velocity. EQUIVALENT to Newton's 2nd law but uses ENERGIES instead of FORCES.");
  W("lagrangian-hamiltonian", "$p_i =",
    "$p_i$ = generalized momentum conjugate to $q_i$. Computed from the Lagrangian. For Cartesian coordinates: $p = m\\dot x$ (ordinary momentum).");
  W("lagrangian-hamiltonian", "$H =",
    "$H$ = Hamiltonian (usually total energy). $p_i, q_i$ = canonical momentum, coordinate. $L$ = Lagrangian. Legendre transform.");
  W("lagrangian-hamiltonian", "$\\dot q",
    "Hamilton's equations. $H$ = Hamiltonian. $q$ = position, $p$ = momentum. Two FIRST-order ODEs replace one second-order.");
  W("lagrangian-hamiltonian", "Poisson",
    "$\\{f, g\\}$ = Poisson bracket. Classical analog of quantum commutator $[A, B]/(i\\hbar)$. Equations of motion: $df/dt = \\{f, H\\}$ + explicit time dependence.");
  W("lagrangian-hamiltonian", "Cyclic",
    "If Lagrangian doesn't depend on $q_i$: conjugate momentum $p_i$ is conserved. Generalization of Newton's first law.");

  // ----- STAT MECH -----
  W("statistical-mechanics", "Boltzmann",
    "$P_i$ = probability of microstate $i$. $E_i$ = energy of microstate. $k_B$ = Boltzmann constant. $T$ = absolute temperature. $Z$ = partition function (normalizes).");
  W("statistical-mechanics", "Z =",
    "$Z$ = partition function. $\\beta = 1/(k_BT)$. Sum over ALL microstates. EVERY thermodynamic quantity follows from $Z$.");
  W("statistical-mechanics", "F =",
    "$F$ = Helmholtz free energy (J). $k_B$ = Boltzmann constant. $T$ = absolute temperature. $Z$ = partition function. Minimized at equilibrium at fixed $T, V$.");
  W("statistical-mechanics", "S =",
    "$S$ = entropy. $\\langle E\\rangle$ = average energy. EQUIVALENT: $S = -k_B \\sum P_i \\ln P_i$ (Gibbs).");
  W("statistical-mechanics", "Bose-Einstein",
    "Occupation of single-particle state of energy $E$. $\\mu$ = chemical potential. $k_B$ = Boltzmann. $T$ = temperature. CAN DIVERGE near $E = \\mu$ (BEC).");
  W("statistical-mechanics", "Fermi-Dirac",
    "Occupation of single-particle state. BOUNDED in $[0, 1]$ — Pauli exclusion. At $T = 0$: step function at $E = \\mu$ (Fermi energy).");
  W("statistical-mechanics", "Equipartition (SM)",
    "Each quadratic degree of freedom contributes $k_BT/2$ to average energy. Classical only — fails below $\\hbar\\omega/k_B$.");

  // ----- FLUID DYNAMICS -----
  W("fluid-dynamics", "Reynolds",
    "$\\text{Re}$ = Reynolds number (dimensionless). $\\rho$ = density. $v$ = characteristic speed. $L$ = characteristic length. $\\mu$ = dynamic viscosity (Pa·s).");
  W("fluid-dynamics", "Stokes drag",
    "$F_d$ = Stokes drag force (N). $\\mu$ = viscosity. $r$ = sphere radius. $v$ = relative speed. VALID for low Reynolds number.");
  W("fluid-dynamics", "Vorticity",
    "$\\boldsymbol\\omega$ = vorticity vector. $\\vec v$ = velocity field. Curl of velocity. Measures local rotation in the flow.");
  W("fluid-dynamics", "Continuity (FD)",
    "Continuity for incompressible flow. $\\vec v$ = velocity field. Divergence-free.");

  // ----- CENTRAL FORCE -----
  W("central-force", "$\\vec L =",
    "Angular momentum conservation. $\\vec L = m\\vec r \\times \\vec v$. CONSERVED because torque is zero for central force.");
  W("central-force", "dA/dt",
    "Kepler's second law. $A$ = swept area. $L$ = angular momentum magnitude. $m$ = orbiting mass. CONSTANT areal velocity.");
  W("central-force", "$V_{\\text{eff}}",
    "$V_\\text{eff}$ = effective radial potential. $V(r)$ = actual potential. $L^2/(2mr^2)$ = centrifugal barrier. Reduces 2D motion to 1D radial.");
  W("central-force", "$T^2",
    "Kepler's third law. $T$ = orbital period. $G$ = Newton's constant. $M$ = central mass. $a$ = semi-major axis.");
  W("central-force", "Eccentricity (CF)",
    "$e$ = orbital eccentricity. $E$ = total energy (negative for bound). $L$ = angular momentum. $G, M, m$ = constants/masses. CLASSIFIES orbit: $e < 1$ bound, $\\geq 1$ unbound.");

  // ----- NUCLEAR -----
  W("nuclear", "$E = mc^2",
    "$E$ = energy equivalent of mass (J). $m$ = mass (kg). $c$ = speed of light. EINSTEIN's famous relation; basis of nuclear energy.");
  W("nuclear", "$N(t)",
    "Radioactive decay. $N(t)$ = number of nuclei at time $t$. $N_0$ = initial number. $\\lambda$ = decay constant (1/s). EXPONENTIAL decay.");
  W("nuclear", "$t_{1/2}",
    "$t_{1/2}$ = half-life (s). $\\lambda$ = decay constant. After $n$ half-lives: $N/N_0 = 1/2^n$.");
  W("nuclear", "Binding",
    "Binding energy per nucleon (MeV). PEAK at Fe-56 ($\\sim 8.8$ MeV). Fusion below peak releases energy; fission above peak releases energy.");
  W("nuclear", "Alpha",
    "$\\alpha$ particle = $^4_2$He nucleus (2 protons, 2 neutrons). EMITTED by heavy nuclei. Reduces atomic number by 2, mass number by 4.");
  W("nuclear", "Beta-",
    "$\\beta^-$ = electron + antineutrino emitted as a neutron transmutes to a proton. INCREASES atomic number by 1, leaves mass number unchanged.");
  W("nuclear", "Beta+",
    "$\\beta^+$ = positron + neutrino emitted as a proton transmutes to a neutron. DECREASES atomic number by 1.");
  W("nuclear", "Gamma",
    "$\\gamma$ = high-energy photon. Emitted as a nucleus drops to a lower energy state. No change in atomic or mass number.");

  // ----- PARTICLE PHYSICS -----
  W("particle-physics", "Quarks",
    "Six quark flavors: up, down, charm, strange, top, bottom. CHARGES: $+2/3$ (up, charm, top); $-1/3$ (down, strange, bottom).");
  W("particle-physics", "Leptons",
    "Three lepton families: electron, muon, tau (each charged $-1$) + associated neutrino (neutral). Neutrinos have tiny mass.");
  W("particle-physics", "Gauge bosons",
    "Photon (γ): EM. Gluons (8): strong. W$^\\pm$, Z: weak. All spin 1. Higgs: spin 0, gives mass to other particles.");
  W("particle-physics", "Standard Model gauge group",
    "$SU(3)_C$ = color (QCD). $SU(2)_L$ = weak isospin. $U(1)_Y$ = hypercharge. Higgs mechanism breaks $SU(2) \\times U(1)$ to $U(1)_\\text{EM}$.");

  // ----- ASTROPHYSICS -----
  W("astrophysics-cosmology", "Hubble",
    "$v$ = recession velocity. $H_0$ = Hubble constant ($\\approx 70$ km/s/Mpc). $d$ = distance. Expansion of universe.");
  W("astrophysics-cosmology", "Friedmann",
    "$a(t)$ = scale factor of universe. $H$ = Hubble parameter. $G$ = Newton's constant. $\\rho$ = energy density. $k$ = curvature.");
  W("astrophysics-cosmology", "Critical density",
    "$\\rho_c$ = critical energy density. $H_0$ = Hubble constant. $G$ = Newton's constant. Universe is FLAT iff actual density equals $\\rho_c$.");
  W("astrophysics-cosmology", "Solar luminosity",
    "$L_\\odot \\approx 3.83 \\times 10^{26}$ W. Standard astronomical luminosity unit.");
  W("astrophysics-cosmology", "Solar mass",
    "$M_\\odot \\approx 1.99 \\times 10^{30}$ kg. Standard astronomical mass unit.");

  // ----- UNITS -----
  W("units-measurement", "Dimensional",
    "Every physical equation must have consistent dimensions on both sides. UNITS must also match (a meter is not a foot).");
  W("units-measurement", "Sig figs",
    "Number of significant figures = precision indicator. Leading zeros don't count. Multiplication/division: result has sig figs of least precise input.");
  W("units-measurement", "Constants",
    "$c \\approx 3 \\times 10^8$ m/s (light). $G \\approx 6.67 \\times 10^{-11}$ N·m²/kg² (gravity). $k_B \\approx 1.38 \\times 10^{-23}$ J/K (Boltzmann). $h \\approx 6.63 \\times 10^{-34}$ J·s (Planck). $e \\approx 1.6 \\times 10^{-19}$ C (elementary charge).");

  // ----- COORDINATE GEOMETRY -----
  W("coordinate-geometry", "Distance",
    "$d$ = Euclidean distance. $(x_1, y_1), (x_2, y_2)$ = two points. PYTHAGORAS applied to the right triangle formed.");
  W("coordinate-geometry", "Midpoint",
    "$M$ = midpoint of segment joining $(x_1, y_1)$ and $(x_2, y_2)$. Average the coordinates.");
  W("coordinate-geometry", "Slope (coord)",
    "$m$ = slope. $(x_1, y_1), (x_2, y_2)$ = two distinct points. UNDEFINED for vertical lines.");
  W("coordinate-geometry", "Line slope-intercept",
    "$y = mx + b$. $m$ = slope. $b$ = y-intercept (where line crosses y-axis).");
  W("coordinate-geometry", "Line point-slope",
    "$(x_1, y_1)$ = known point. $m$ = slope. Gives line through point with given slope.");
  W("coordinate-geometry", "Circle (coord)",
    "$(h, k)$ = center. $r$ = radius. Equation of circle in standard form.");

  // ----- DYNAMICAL SYSTEMS -----
  W("dynamical-systems", "Autonomous flow",
    "$\\vec x$ = state vector. $\\vec f$ = vector field on state space. AUTONOMOUS means $\\vec f$ doesn't depend explicitly on time.");
  W("dynamical-systems", "Fixed point",
    "$\\vec x^*$ = fixed point. $\\vec f(\\vec x^*) = 0$. STATE doesn't move; equilibrium.");
  W("dynamical-systems", "Linearization (DS)",
    "$D\\vec f$ = Jacobian matrix. Evaluated at fixed point. EIGENVALUES classify the equilibrium.");
  W("dynamical-systems", "Stable",
    "All eigenvalues of linearization have NEGATIVE real parts. Nearby trajectories decay back to the fixed point.");
  W("dynamical-systems", "Lyapunov DS",
    "$\\lambda$ = Lyapunov exponent. Limit of log of average derivative magnitudes. POSITIVE: chaos.");

  // ----- CONTINUUM ELASTICITY -----
  W("continuum-elasticity", "Stress",
    "$\\sigma$ = stress (Pa = N/m²). Force per unit area within a material. Tensor — 9 components in 3D (6 independent by symmetry).");
  W("continuum-elasticity", "Strain",
    "$\\epsilon$ = strain (dimensionless). Relative deformation. Tensor: 6 independent components.");
  W("continuum-elasticity", "Hooke",
    "$\\sigma = E\\epsilon$. $E$ = Young's modulus (Pa). $\\sigma$ = uniaxial stress. $\\epsilon$ = uniaxial strain. LINEAR regime — valid for small strains.");
  W("continuum-elasticity", "Poisson",
    "$\\nu$ = Poisson's ratio (dimensionless). Transverse strain / longitudinal strain (with sign convention). Most materials: $\\nu \\in [0, 0.5]$.");
  W("continuum-elasticity", "Shear modulus",
    "$G$ = shear modulus (Pa). $E$ = Young's modulus. $\\nu$ = Poisson's ratio. Resistance to shear deformation.");
  W("continuum-elasticity", "Bulk modulus",
    "$K$ = bulk modulus (Pa). $E$ = Young's modulus. $\\nu$ = Poisson's ratio. Resistance to volume change under hydrostatic pressure.");
  W("continuum-elasticity", "Wave speed elasticity",
    "$v$ = longitudinal wave speed. $E$ = Young's modulus. $\\rho$ = density. Faster waves in stiffer or less dense materials.");

  // ----- SOLID STATE -----
  W("solid-state", "Bragg",
    "$n$ = diffraction order (integer). $\\lambda$ = X-ray wavelength. $d$ = lattice plane spacing. $\\theta$ = incidence angle from the planes. Basis of X-ray crystallography.");
  W("solid-state", "Drude conductivity",
    "$\\sigma$ = electrical conductivity (S/m). $n$ = electron density. $e$ = elementary charge. $\\tau$ = mean scattering time. $m$ = electron mass.");
  W("solid-state", "Hall",
    "$V_H$ = Hall voltage. $I$ = current. $B$ = magnetic field. $n$ = carrier density. $e$ = charge. $t$ = sample thickness.");
  W("solid-state", "Bands",
    "Periodic potentials produce continuous BANDS of allowed energies separated by FORBIDDEN GAPS. Filled bands: insulator/semiconductor. Partially filled: metal.");
  W("solid-state", "Effective mass",
    "$m^*$ = effective electron mass in a band (kg). $E(k)$ = energy dispersion. Curvature of band gives effective mass.");
  W("solid-state", "Fermi energy",
    "$E_F$ = Fermi energy. Energy of the highest filled state at $T = 0$. $k_F$ = Fermi momentum. $n$ = electron density.");
  W("solid-state", "Band gap silicon",
    "Si: $E_g \\approx 1.12$ eV at 300 K. Determines whether material is metal, semiconductor, or insulator (roughly $E_g \\gtrsim 3$ eV for insulators).");

  // ============================================================
  // BATCH 4 — define what each symbol IS plus worked example
  // ============================================================

  // ----- FUNCTIONS-GRAPHS -----
  W("functions-graphs", "Vertical line test",
    "A graph in the plane represents a function $f: x \\mapsto y$ if and only if every vertical line crosses the graph at most once. WHY: a function assigns each input one output, so two points above the same $x$ would mean two outputs. WORKED EXAMPLE: the parabola $y = x^2$ passes (any vertical line crosses once). The circle $x^2 + y^2 = 1$ fails (vertical line $x = 0$ crosses at $y = 1$ and $y = -1$).");
  W("functions-graphs", "Domain:",
    "$f$ = a function. <em>Domain</em> = the set of all inputs $x$ for which $f(x)$ is defined. <em>Range</em> = the set of outputs actually produced. WORKED EXAMPLE: $f(x) = \\sqrt x$ has domain $x \\geq 0$ (can't take root of negative reals) and range $f \\geq 0$. $f(x) = 1/x$ has domain $x \\neq 0$.");
  W("functions-graphs", "$(f \\circ g)(x)",
    "$f, g$ = two functions. $(f \\circ g)$ = the composition: apply $g$ first, then $f$ to the result. Read 'f composed with g' or 'f circle g'. ORDER matters — $f \\circ g$ is usually different from $g \\circ f$. WORKED EXAMPLE: let $f(x) = x^2$ and $g(x) = x + 3$. Then $(f \\circ g)(x) = f(g(x)) = f(x+3) = (x+3)^2$. By contrast $(g \\circ f)(x) = g(f(x)) = g(x^2) = x^2 + 3$. Different!");
  W("functions-graphs", "$f^{-1}",
    "$f$ = a one-to-one (bijective) function. $f^{-1}$ = its <em>inverse function</em>, which 'undoes' $f$: $f^{-1}(f(x)) = x$ and $f(f^{-1}(y)) = y$. GEOMETRIC view: the graph of $f^{-1}$ is the reflection of the graph of $f$ across the line $y = x$. WORKED EXAMPLE: if $f(x) = 2x + 5$, solve $y = 2x + 5$ for $x$: $x = (y - 5)/2$. So $f^{-1}(y) = (y - 5)/2$. Check: $f(f^{-1}(7)) = f(1) = 7$ ✓.");
  W("functions-graphs", "$y = a f",
    "Generic transformation of $y = f(x)$. $a$ = vertical stretch factor ($|a| > 1$ stretches, $0 < |a| < 1$ compresses, $a < 0$ reflects in x-axis). $b$ = horizontal stretch factor (inverted: $|b| > 1$ COMPRESSES, $|b| < 1$ stretches). $h$ = horizontal shift to the right. $k$ = vertical shift upward. WORKED EXAMPLE: starting from $y = x^2$, the function $y = 2(x-3)^2 + 1$ has $a=2, b=1, h=3, k=1$: parabola stretched vertically by 2, shifted right 3 and up 1.");
  W("functions-graphs", "Even:",
    "$f$ = a function. <em>Even</em>: $f(-x) = f(x)$ — graph is symmetric across the y-axis (e.g., $x^2, \\cos x, |x|$). <em>Odd</em>: $f(-x) = -f(x)$ — graph is symmetric through the origin (e.g., $x^3, \\sin x, \\tan x$). MOST functions are neither. WORKED EXAMPLE: $f(x) = x^3 - x$: $f(-x) = (-x)^3 - (-x) = -x^3 + x = -(x^3 - x) = -f(x)$, so odd.");

  // ----- SET-LOGIC -----
  W("set-logic", "$|A \\cup B|",
    "$A, B$ = finite sets. $|S|$ = number of elements (cardinality) of set $S$. $A \\cup B$ = union (elements in either). $A \\cap B$ = intersection (elements in both). Subtract the overlap so we don't count it twice. WORKED EXAMPLE: $A = \\{1, 2, 3, 4\\}$, $B = \\{3, 4, 5, 6\\}$. $|A| = 4$, $|B| = 4$, $|A \\cap B| = 2$. So $|A \\cup B| = 4 + 4 - 2 = 6$. Check: $A \\cup B = \\{1, 2, 3, 4, 5, 6\\}$, which has 6 elements. ✓");
  W("set-logic", "$|\\mathcal{P}(A)|",
    "$A$ = any set. $\\mathcal P(A)$ = <em>power set</em> = the set of all subsets of $A$. For a finite set with $n$ elements: $2^n$ subsets (each element is in or out — 2 choices, $n$ elements). WORKED EXAMPLE: $A = \\{a, b, c\\}$ (3 elements). Subsets: $\\emptyset, \\{a\\}, \\{b\\}, \\{c\\}, \\{a,b\\}, \\{a,c\\}, \\{b,c\\}, \\{a,b,c\\}$ — that's $2^3 = 8$.");
  W("set-logic", "$\\neg(p \\land q)",
    "$p, q$ = logical propositions (each either true or false). $\\neg$ = negation (NOT). $\\land$ = conjunction (AND). $\\lor$ = disjunction (OR). $\\equiv$ = logically equivalent. DE MORGAN's law: 'NOT (P and Q)' is the same as 'NOT P or NOT Q'. WORKED EXAMPLE: $p = $ 'it's raining', $q = $ 'it's cold'. $\\neg(p \\land q) = $ 'it's not (raining AND cold)' = 'it's not raining OR it's not cold' = $\\neg p \\lor \\neg q$.");
  W("set-logic", "$p \\Rightarrow q",
    "$p, q$ = propositions. The <em>contrapositive</em> $\\neg q \\Rightarrow \\neg p$ has the same truth value as $p \\Rightarrow q$. PROOFS often easier in contrapositive form. WORKED EXAMPLE: 'if $n^2$ is even then $n$ is even' is equivalent to 'if $n$ is odd then $n^2$ is odd', which is straightforward to prove: $n = 2k+1 \\Rightarrow n^2 = 4k^2 + 4k + 1$ (odd).");
  W("set-logic", "$\\neg(\\forall x",
    "$\\forall x$ = 'for all $x$'. $\\exists x$ = 'there exists an $x$'. $P(x)$ = some statement about $x$. NEGATING a universal makes an existential of the negation. WORKED EXAMPLE: 'all swans are white' = $\\forall x (\\text{swan}(x) \\Rightarrow \\text{white}(x))$. Negation: 'there exists a non-white swan' = $\\exists x(\\text{swan}(x) \\land \\neg\\text{white}(x))$.");

  // ----- LOGARITHMS -----
  W("logarithms", "$\\log_b(xy)",
    "$b$ = base of the logarithm ($b > 0, b \\neq 1$). $x, y$ = positive arguments. PRODUCT rule: log of a product is the sum of logs. WORKED EXAMPLE: $\\log_{10}(20) = \\log_{10}(4 \\cdot 5) = \\log_{10}(4) + \\log_{10}(5) \\approx 0.602 + 0.699 = 1.301$. Check: $10^{1.301} \\approx 20$ ✓. This is why logarithms turn multiplication into addition — basis of slide rules.");
  W("logarithms", "$\\log_b(x/y)",
    "$b$ = base. $x, y$ = positive numbers. QUOTIENT rule: log of a quotient is the difference. WORKED EXAMPLE: $\\log_2(8/3) = \\log_2(8) - \\log_2(3) = 3 - 1.585 = 1.415$.");
  W("logarithms", "$\\log_b(x^p)",
    "$b$ = base. $x > 0$. $p$ = any real exponent. POWER rule: log brings the exponent down. WORKED EXAMPLE: $\\log_{10}(1000^5) = 5\\log_{10}(1000) = 5 \\cdot 3 = 15$. Useful for solving exponential equations like $2^x = 1000$: take log → $x\\log 2 = \\log 1000 = 3$, so $x = 3/\\log 2 \\approx 9.97$.");
  W("logarithms", "$\\log_b a",
    "$a, b$ = positive numbers (bases). $\\ln$ = natural log (base $e$). CHANGE-of-base formula lets you compute any log using only $\\ln$ (or $\\log_{10}$) on a calculator. WORKED EXAMPLE: compute $\\log_2 7$. Answer: $\\ln 7 / \\ln 2 = 1.9459/0.6931 \\approx 2.807$. Check: $2^{2.807} \\approx 7$ ✓.");
  W("logarithms", "$b^{\\log_b x}",
    "$b$ = base. $x > 0$. The exponential and logarithm with the same base are INVERSE operations — they undo each other. SIMILARLY, $\\log_b(b^x) = x$. WORKED EXAMPLE: $10^{\\log_{10} 50} = 50$. $\\ln(e^{17}) = 17$.");

  // ----- LINEAR EQUATIONS -----
  W("linear-equations", "$ax + b = c",
    "$x$ = unknown. $a, b, c$ = known constants with $a \\neq 0$. Solve by subtracting $b$ from both sides, then dividing by $a$. WORKED EXAMPLE: solve $3x + 7 = 16$. Subtract 7: $3x = 9$. Divide by 3: $x = 3$. Check: $3(3) + 7 = 16$ ✓.");
  W("linear-equations", "$y = mx + b$",
    "$y, x$ = coordinates of a point on the line. $m$ = slope (rise over run; how much $y$ changes per unit change in $x$). $b$ = y-intercept (value of $y$ when $x = 0$). WORKED EXAMPLE: $y = 2x + 5$ has slope 2 and y-intercept 5. At $x = 3$: $y = 11$. At $x = 0$: $y = 5$. As $x$ increases by 1, $y$ increases by 2.");
  W("linear-equations", "$y - y_1",
    "$(x_1, y_1)$ = a specific known point on the line. $m$ = slope. $(x, y)$ = variable point. POINT-SLOPE form is the easiest way to write a line through a given point with a given slope. WORKED EXAMPLE: line through $(2, 7)$ with slope $-3$: $y - 7 = -3(x - 2)$, expand: $y = -3x + 13$.");
  W("linear-equations", "Do same",
    "Whatever you do to one side of an equation, do to the other. EXAMPLES of valid operations: add a number, subtract a number, multiply by a NONZERO number, divide by a NONZERO number. Preserves the solution set. INVALID: multiplying by 0 (loses information), dividing by an expression that might be zero.");

  // ----- QUADRATIC EQUATIONS -----
  W("quadratic-equations", "$x = \\dfrac{-b",
    "$a, b, c$ = coefficients of the quadratic $ax^2 + bx + c = 0$, with $a \\neq 0$. $x$ = unknown. The ± gives TWO solutions in general. WORKED EXAMPLE: solve $2x^2 - 7x + 3 = 0$. Here $a = 2, b = -7, c = 3$. $x = (7 \\pm \\sqrt{49 - 24})/4 = (7 \\pm 5)/4$. So $x = 3$ or $x = 1/2$. Check: $2(3)^2 - 7(3) + 3 = 18 - 21 + 3 = 0$ ✓.");
  W("quadratic-equations", "$\\Delta",
    "$\\Delta$ = discriminant. $a, b, c$ = quadratic coefficients. CLASSIFIES the nature of roots without computing them. WORKED EXAMPLE: $x^2 - 4x + 4$ has $\\Delta = 16 - 16 = 0$ → one repeated root ($x = 2$). $x^2 + 1$ has $\\Delta = 0 - 4 = -4 < 0$ → complex conjugate roots ($\\pm i$). $x^2 - 3x + 2$ has $\\Delta = 9 - 8 = 1 > 0$ → two real roots ($x = 1, 2$).");
  W("quadratic-equations", "$x_1 + x_2",
    "$x_1, x_2$ = the two roots of $ax^2 + bx + c = 0$. VIETA's formulas relate sum and product of roots to the coefficients. WORKED EXAMPLE: roots of $x^2 - 5x + 6$? By Vieta, sum = 5, product = 6. So roots are 2 and 3 (numbers summing to 5 and multiplying to 6). No solving needed.");
  W("quadratic-equations", "Vertex",
    "VERTEX of parabola $y = ax^2 + bx + c$ has $x$-coordinate $-b/(2a)$ and $y$-coordinate is the corresponding value. MAXIMUM if $a < 0$, MINIMUM if $a > 0$. WORKED EXAMPLE: $y = x^2 - 6x + 11$ has vertex at $x = 6/2 = 3$, $y = 9 - 18 + 11 = 2$. Vertex $(3, 2)$ — minimum value of $y$ is 2.");
  W("quadratic-equations", "Complete the square",
    "$b$ = coefficient of $x$. ADD and SUBTRACT $(b/2)^2$ to make a perfect square. WORKED EXAMPLE: $x^2 + 6x + 5$. Half of 6 is 3. Add and subtract 9: $x^2 + 6x + 9 - 9 + 5 = (x + 3)^2 - 4$. Now the minimum is obvious: $-4$ at $x = -3$. Same technique derives the quadratic formula.");

  // ----- POLYNOMIALS-RATIONAL -----
  W("polynomials-rational", "$p(x) = q(x)",
    "$p(x)$ = dividend polynomial. $d(x)$ = divisor polynomial. $q(x)$ = quotient. $r(x)$ = remainder with degree less than $\\deg d$. WORKED EXAMPLE: divide $p(x) = x^3 - 2x^2 + 3x - 5$ by $d(x) = x - 2$. Result: $q(x) = x^2 + 3$, $r(x) = 1$. Check: $(x-2)(x^2 + 3) + 1 = x^3 + 3x - 2x^2 - 6 + 1 = x^3 - 2x^2 + 3x - 5$ ✓.");
  W("polynomials-rational", "$p(a) = 0",
    "$p$ = polynomial. $a$ = constant. FACTOR theorem: $a$ is a root of $p$ if and only if $(x - a)$ is a factor of $p(x)$. WORKED EXAMPLE: $p(x) = x^3 - 6x^2 + 11x - 6$. Try $x = 1$: $1 - 6 + 11 - 6 = 0$. So $(x - 1)$ is a factor: $p(x) = (x-1)(x^2 - 5x + 6) = (x-1)(x-2)(x-3)$.");
  W("polynomials-rational", "Remainder of",
    "$p$ = polynomial. $a$ = constant. SHORT cut: to find the remainder when $p(x)$ is divided by $x - a$, just evaluate $p(a)$. WORKED EXAMPLE: remainder of $p(x) = x^4 + 2x - 3$ divided by $x - 2$ = $p(2) = 16 + 4 - 3 = 17$. No division needed.");
  W("polynomials-rational", "Vertical asymptote",
    "$p(x)/q(x)$ = rational function. $x_0$ = a real number. VERTICAL asymptote at $x = x_0$ when the denominator vanishes but the numerator doesn't. WORKED EXAMPLE: $f(x) = (x + 1)/((x - 3)(x + 5))$ has vertical asymptotes at $x = 3$ and $x = -5$. As $x$ approaches these values, $|f| \\to \\infty$.");
  W("polynomials-rational", "Horizontal asymptote",
    "For $p(x)/q(x)$. When $\\deg p = \\deg q$, the horizontal asymptote $y = $ (leading coefficient of $p$) / (leading coefficient of $q$). When $\\deg p < \\deg q$: asymptote $y = 0$. When $\\deg p > \\deg q$: no horizontal asymptote (may have oblique). WORKED EXAMPLE: $f(x) = (3x^2 + 1)/(x^2 - 4)$ has horizontal asymptote $y = 3/1 = 3$.");

  // ----- SEQUENCES-SERIES -----
  W("sequences-series", "Arithmetic:",
    "$a_n$ = $n$-th term. $a_1$ = first term. $d$ = constant common difference between successive terms ($d = a_{n+1} - a_n$). $n$ = position in sequence (1, 2, 3, ...). WORKED EXAMPLE: $5, 8, 11, 14, \\ldots$ has $a_1 = 5, d = 3$. So $a_n = 5 + 3(n-1)$. The 10th term: $a_{10} = 5 + 27 = 32$.");
  W("sequences-series", "$S_n = \\dfrac{n",
    "$S_n$ = sum of the first $n$ terms of an arithmetic sequence. $a_1, a_n$ = first and $n$-th terms. INTUITION: average of first and last, times count. WORKED EXAMPLE: sum of $1 + 2 + \\ldots + 100$. Here $a_1 = 1, a_{100} = 100, n = 100$. $S = 100 \\cdot (1 + 100)/2 = 5050$ — Gauss's elementary-school trick.");
  W("sequences-series", "Geometric:",
    "$a_n$ = $n$-th term of geometric sequence. $a_1$ = first term. $r$ = common ratio ($r = a_{n+1}/a_n$). WORKED EXAMPLE: $3, 6, 12, 24, \\ldots$ has $a_1 = 3, r = 2$. So $a_n = 3 \\cdot 2^{n-1}$. The 7th term: $a_7 = 3 \\cdot 64 = 192$.");
  W("sequences-series", "$S_n = a_1 \\dfrac",
    "$S_n$ = sum of first $n$ terms of geometric sequence with $r \\neq 1$. $a_1$ = first term. $r$ = ratio. WORKED EXAMPLE: sum of $1 + 2 + 4 + \\ldots + 1024$ (powers of 2 up to $2^{10}$). $a_1 = 1, r = 2, n = 11$. $S = (1 - 2^{11})/(1 - 2) = 2047$.");
  W("sequences-series", "$S_\\infty",
    "$S_\\infty$ = infinite-series sum. $a_1$ = first term. $r$ = common ratio. ONLY converges when $|r| < 1$. WORKED EXAMPLE: $1 + 1/2 + 1/4 + 1/8 + \\ldots = 1/(1 - 1/2) = 2$. The Zeno-style series sums to a finite number.");
  W("sequences-series", "$\\sum_{k=1}^n k",
    "FAMOUS partial sums. WORKED EXAMPLE: $\\sum_{k=1}^{100} k = 100 \\cdot 101/2 = 5050$. $\\sum_{k=1}^{10} k^2 = 10 \\cdot 11 \\cdot 21/6 = 385$. $\\sum_{k=1}^{5} k^3 = (1+2+3+4+5)^2 = 225$.");

  // ----- PROBABILITY -----
  W("probability", "$0 \\leq P(A)",
    "$A$ = an event (subset of the sample space). $P(A)$ = probability of $A$. ALWAYS between 0 (impossible) and 1 (certain). WORKED EXAMPLE: rolling a fair 6-sided die. $P(\\text{1}) = 1/6 \\approx 0.167$. $P(\\text{odd}) = 3/6 = 0.5$.");
  W("probability", "$P(A \\cup B)",
    "$A, B$ = two events. $A \\cup B$ = at least one occurs. Subtract the overlap so we don't double-count. WORKED EXAMPLE: draw one card from standard 52-card deck. $P(\\text{heart}) = 13/52 = 0.25$. $P(\\text{king}) = 4/52 \\approx 0.077$. $P(\\text{heart} \\cap \\text{king}) = 1/52$ (king of hearts). $P(\\text{heart} \\cup \\text{king}) = 0.25 + 0.077 - 0.019 = 0.308$.");
  W("probability", "$P(A \\cap B) =",
    "$A, B$ = INDEPENDENT events (one doesn't affect the other's probability). For independent events: probability of both = product of individual probabilities. WORKED EXAMPLE: flip two fair coins. $P(\\text{HH}) = (1/2)(1/2) = 1/4$. For NON-independent events, use conditional probability instead.");
  W("probability", "$P(A \\mid B)",
    "$P(A | B)$ = <em>conditional probability</em> of $A$ given $B$ has occurred. WORKED EXAMPLE: draw a card from 52. $P(\\text{ace}) = 4/52$. Given that the card is a face card (J, Q, K), $P(\\text{ace} | \\text{face}) = 0$ — no ace is a face card. Given that it's a black card, $P(\\text{ace} | \\text{black}) = 2/26 = 1/13$.");
  W("probability", "$P(A \\mid B) = \\dfrac{P(B",
    "BAYES' theorem. Inverts conditional probabilities. $P(A)$ = prior probability. $P(B|A)$ = likelihood. $P(B)$ = normalizing constant. $P(A|B)$ = posterior. WORKED EXAMPLE: disease affects 1% of population. Test has 99% true positive rate, 5% false positive rate. You test positive: $P(\\text{disease} | +) = (0.99)(0.01) / [(0.99)(0.01) + (0.05)(0.99)] \\approx 0.167$. Only 16.7%, not 99% — the famous counterintuitive result.");
  W("probability", "$E[X] = \\sum",
    "$X$ = random variable taking values $x_1, x_2, \\ldots$ with probabilities $P(X = x_i)$. $E[X]$ = expected value (population mean). WORKED EXAMPLE: roll a fair 6-sided die. $E[X] = (1+2+3+4+5+6)/6 = 3.5$. Note the expected value need not be an actual possible outcome.");

  // ----- STATISTICS -----
  W("statistics", "$\\bar x = ",
    "$\\bar x$ = sample mean (sample average). $x_i$ = individual data points. $n$ = sample size. ESTIMATOR of true population mean $\\mu$. WORKED EXAMPLE: data $\\{2, 5, 7, 8, 13\\}$. $\\bar x = 35/5 = 7$.");
  W("statistics", "$s^2 = ",
    "$s^2$ = sample variance. $x_i$ = data. $\\bar x$ = sample mean. $n - 1$ (NOT $n$) makes this unbiased (Bessel's correction). WORKED EXAMPLE: data $\\{2, 4, 4, 4, 5, 5, 7, 9\\}$, $\\bar x = 5$. Deviations: $-3, -1, -1, -1, 0, 0, 2, 4$, squared: $9, 1, 1, 1, 0, 0, 4, 16$, sum $32$. $s^2 = 32/7 \\approx 4.57$. $s \\approx 2.14$.");
  W("statistics", "$z = \\dfrac{x",
    "$z$ = z-score (standardized value, dimensionless). $x$ = data point. $\\mu$ = population mean. $\\sigma$ = population standard deviation. MEASURES how many standard deviations $x$ lies from the mean. WORKED EXAMPLE: IQ scores $\\mu = 100, \\sigma = 15$. A person with IQ 130 has $z = (130-100)/15 = 2$ — two standard deviations above mean, top ~2.5%.");
  W("statistics", "CI:",
    "$\\bar x$ = sample mean. $z^*$ = critical value (1.96 for 95% CI). $\\sigma$ = population standard deviation (or $s$ if unknown, use t-distribution). $n$ = sample size. WORKED EXAMPLE: $\\bar x = 50, \\sigma = 10, n = 100$. 95% CI: $50 \\pm 1.96 \\cdot 10/\\sqrt{100} = 50 \\pm 1.96$, i.e., $(48.04, 51.96)$.");
  W("statistics", "$z^*",
    "Critical $z$-values for standard normal confidence intervals. 90% CI: $z^* = 1.645$. 95%: 1.96. 99%: 2.576. WORKED EXAMPLE: a poll says 'margin of error 3 percentage points at 95% confidence' — that 3% IS the $1.96 \\sigma/\\sqrt n$ part of the CI formula.");
  W("statistics", "$r =",
    "$r$ = Pearson correlation coefficient. $x_i, y_i$ = paired data. $\\bar x, \\bar y$ = sample means. RANGES from $-1$ (perfect negative) to $+1$ (perfect positive); 0 means no linear correlation. WORKED EXAMPLE: data $(1,2),(2,4),(3,6)$. Perfectly linearly related: $y = 2x$, so $r = 1$.");

  // ----- VECTOR-ALGEBRA -----
  W("vector-algebra", "$|\\vec v|",
    "$\\vec v = (v_x, v_y, v_z)$ = vector with three real components. $|\\vec v|$ = magnitude (length). PYTHAGORAS in 3D. WORKED EXAMPLE: $\\vec v = (3, 4, 12)$. $|\\vec v| = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$.");
  W("vector-algebra", "$\\vec a \\cdot \\vec b = a_x",
    "$\\vec a, \\vec b$ = vectors in $\\mathbb R^3$. Dot product is a SCALAR (number). COMPUTE: multiply corresponding components and add. WORKED EXAMPLE: $\\vec a = (1, 2, 3), \\vec b = (4, -1, 2)$. $\\vec a \\cdot \\vec b = 4 - 2 + 6 = 8$.");
  W("vector-algebra", "$\\vec a \\cdot \\vec b = |\\vec a|",
    "$\\theta$ = angle between $\\vec a$ and $\\vec b$. GEOMETRIC formula for dot product. POSITIVE for acute angle, ZERO for perpendicular, NEGATIVE for obtuse. WORKED EXAMPLE: $\\vec a = (1, 0)$, $\\vec b = (0, 1)$. Both have length 1, angle 90°. $\\vec a \\cdot \\vec b = 0$ ✓ (perpendicular).");
  W("vector-algebra", "$\\vec a \\times \\vec b",
    "$\\vec a, \\vec b$ = vectors in $\\mathbb R^3$. Cross product gives a VECTOR perpendicular to both, with magnitude $|\\vec a||\\vec b|\\sin\\theta$ (area of parallelogram). $\\hat i, \\hat j, \\hat k$ = unit vectors along x, y, z axes. WORKED EXAMPLE: $\\hat i \\times \\hat j = \\hat k$ (right-hand rule). $(1, 0, 0) \\times (0, 1, 0) = (0, 0, 1)$.");
  W("vector-algebra", "$|\\vec a \\times \\vec b|",
    "MAGNITUDE of cross product = area of the parallelogram spanned by $\\vec a$ and $\\vec b$. ZERO for parallel vectors. WORKED EXAMPLE: $\\vec a = (2, 0, 0), \\vec b = (0, 3, 0)$. $|\\vec a \\times \\vec b| = 2 \\cdot 3 \\cdot \\sin 90° = 6$ — area of the $2 \\times 3$ rectangle.");
  W("vector-algebra", "$\\text{proj}",
    "PROJECTION of $\\vec a$ onto $\\vec b$. Resulting vector is parallel to $\\vec b$, with length equal to $\\vec a$'s component along $\\vec b$. WORKED EXAMPLE: $\\vec a = (3, 4), \\vec b = (1, 0)$. $\\vec a \\cdot \\vec b = 3$, $|\\vec b|^2 = 1$. Projection $= 3 \\cdot (1, 0) = (3, 0)$ — the x-component of $\\vec a$.");

  // ----- LINEAR-ALGEBRA -----
  W("linear-algebra", "$(AB)_{ij}",
    "$A$ = $m \\times k$ matrix. $B$ = $k \\times n$ matrix. INNER dimension $k$ must match. Result $AB$ is $m \\times n$. ENTRY $(i, j)$ of $AB$ = dot product of row $i$ of $A$ with column $j$ of $B$. WORKED EXAMPLE: $A = \\begin{pmatrix}1 & 2\\\\3 & 4\\end{pmatrix}, B = \\begin{pmatrix}5 & 6\\\\7 & 8\\end{pmatrix}$. $(AB)_{11} = 1\\cdot 5 + 2\\cdot 7 = 19$. Full result: $\\begin{pmatrix}19 & 22\\\\43 & 50\\end{pmatrix}$.");
  W("linear-algebra", "$\\det \\begin{pmatrix} a",
    "$a, b, c, d$ = entries of a $2 \\times 2$ matrix. Determinant is a SCALAR. POSITIVE: orientation-preserving. NEGATIVE: orientation-flipping. ZERO: singular (non-invertible). WORKED EXAMPLE: $\\det\\begin{pmatrix}3 & 1\\\\2 & 4\\end{pmatrix} = 12 - 2 = 10$. $\\det\\begin{pmatrix}1 & 2\\\\2 & 4\\end{pmatrix} = 4 - 4 = 0$ (rows are proportional → singular).");
  W("linear-algebra", "$A^{-1}",
    "$A$ = invertible square matrix ($\\det A \\neq 0$). $\\text{adj}(A)$ = adjugate (transpose of cofactor matrix). $A^{-1}$ satisfies $A A^{-1} = I$. WORKED EXAMPLE for $2 \\times 2$: $A = \\begin{pmatrix}3 & 1\\\\2 & 4\\end{pmatrix}$, $\\det = 10$. $A^{-1} = (1/10)\\begin{pmatrix}4 & -1\\\\-2 & 3\\end{pmatrix}$. Check: $AA^{-1} = I$ ✓.");
  W("linear-algebra", "$A\\vec v = \\lambda",
    "$A$ = $n \\times n$ matrix. $\\vec v$ = nonzero vector (the <em>eigenvector</em>). $\\lambda$ = scalar (the <em>eigenvalue</em>). $A$ stretches $\\vec v$ by factor $\\lambda$ without rotating. WORKED EXAMPLE: $A = \\begin{pmatrix}2 & 0\\\\0 & 3\\end{pmatrix}$. $\\vec v_1 = (1, 0)$ is an eigenvector with eigenvalue 2. $\\vec v_2 = (0, 1)$ has eigenvalue 3.");
  W("linear-algebra", "$\\det(A - \\lambda I)",
    "$A$ = matrix. $\\lambda$ = unknown eigenvalue. $I$ = identity matrix. SOLVE this CHARACTERISTIC equation to find all eigenvalues. WORKED EXAMPLE: $A = \\begin{pmatrix}4 & 1\\\\2 & 3\\end{pmatrix}$. $\\det(A - \\lambda I) = (4-\\lambda)(3-\\lambda) - 2 = \\lambda^2 - 7\\lambda + 10 = (\\lambda - 2)(\\lambda - 5)$. Eigenvalues: 2 and 5.");
  W("linear-algebra", "$\\text{rank}",
    "$\\text{rank}(A)$ = dimension of column space (= row space). $\\text{nullity}(A)$ = dimension of null space (vectors $\\vec v$ with $A\\vec v = 0$). $n$ = number of columns. RANK-NULLITY theorem. WORKED EXAMPLE: $A = \\begin{pmatrix}1 & 2\\\\2 & 4\\end{pmatrix}$. Rank 1 (rows proportional). $n = 2$. Nullity $= 1$.");
  W("linear-algebra", "$\\text{tr}(A)",
    "$\\lambda_i$ = eigenvalues (with multiplicity). $\\text{tr}(A)$ = trace = sum of diagonal entries. $\\det(A)$ = product of eigenvalues. POWERFUL: lets you find $\\text{tr}$ and $\\det$ from eigenvalues without knowing $A$ explicitly. WORKED EXAMPLE: matrix with eigenvalues 2, 3, 5. $\\text{tr} = 10$, $\\det = 30$.");

  // ----- LIMITS -----
  W("limits", "$\\lim_{x \\to a}",
    "$f$ = a function. $a$ = point (possibly $\\pm\\infty$). $L$ = limit value. MEANS: as $x$ gets close to $a$, $f(x)$ gets close to $L$. Need NOT have $f(a) = L$ (or even $f(a)$ defined). WORKED EXAMPLE: $\\lim_{x \\to 2} (x^2 - 4)/(x - 2)$. At $x = 2$: $0/0$, undefined. But factor: $(x-2)(x+2)/(x-2) = x + 2$ for $x \\neq 2$. Limit is $4$.");
  W("limits", "$\\lim_{x \\to 0} \\dfrac{\\sin x",
    "$x$ in radians. INDETERMINATE form $0/0$. The limit equals exactly 1. PROOF: squeeze theorem with geometric inequalities. CONSEQUENCE: $\\sin x \\approx x$ for small $x$. WORKED EXAMPLE: $\\sin(0.1) \\approx 0.0998$ — very close to 0.1.");
  W("limits", "$\\lim_{x \\to 0} \\dfrac{1",
    "$x$ in radians. ANOTHER famous indeterminate-form limit. CONSEQUENCE: $\\cos x \\approx 1 - x^2/2$ for small $x$. Used in deriving Taylor series and in QM small-angle calculations.");
  W("limits", "$\\lim_{x \\to \\infty}",
    "DEFINITION of Euler's number $e \\approx 2.71828$. $e$ is irrational and transcendental. APPEARS everywhere in compound interest, exponential growth, calculus. WORKED EXAMPLE: $(1 + 1/100)^{100} \\approx 2.7048$, getting close to $e$.");
  W("limits", "L'Hôpital",
    "$f, g$ = differentiable functions. INDETERMINATE form $0/0$ or $\\infty/\\infty$. Replace numerator and denominator with their derivatives. ITERATE if still indeterminate. WORKED EXAMPLE: $\\lim_{x \\to 0}\\sin x/x = \\lim_{x \\to 0}\\cos x/1 = 1$. (Be careful: this is circular if used to PROVE the sin/x limit — that's done by squeeze theorem.)");
  W("limits", "Squeeze:",
    "$f, g, h$ = functions with $g(x) \\leq f(x) \\leq h(x)$ near $a$. If $g, h$ both have limit $L$ at $a$, then so does $f$. USEFUL when you can bound a tricky expression. WORKED EXAMPLE: $\\lim_{x \\to 0} x^2 \\sin(1/x)$. Note $-x^2 \\leq x^2\\sin(1/x) \\leq x^2$, and both bounds → 0. So limit is 0, despite the oscillation.");

  // ----- VECTOR CALCULUS -----
  W("vector-calculus", "$\\nabla \\cdot \\vec F",
    "$\\vec F = (F_x, F_y, F_z)$ = vector field. $\\nabla \\cdot \\vec F$ = divergence (a SCALAR field). Measures net outflow per unit volume. WORKED EXAMPLE: $\\vec F = (x, y, z)$ (radially outward field). $\\nabla \\cdot \\vec F = 1 + 1 + 1 = 3$. The field 'spreads' uniformly.");
  W("vector-calculus", "$\\nabla \\times \\vec F$",
    "$\\vec F$ = vector field. $\\nabla \\times \\vec F$ = curl (a VECTOR field). Measures local rotation; direction along axis (right-hand rule). WORKED EXAMPLE: $\\vec F = (-y, x, 0)$ (counterclockwise rotation). $\\nabla \\times \\vec F = (0, 0, 2)$ — points along z-axis, magnitude 2 (twice the rotation rate).");
  W("vector-calculus", "$\\nabla \\times (\\nabla f)",
    "$f$ = scalar function. CURL of any gradient is identically zero. INTERPRETATION: gradient fields are 'conservative' — irrotational, hence path-independent.");
  W("vector-calculus", "$\\nabla \\cdot (\\nabla \\times \\vec F)",
    "$\\vec F$ = any vector field. DIVERGENCE of any curl is identically zero. INTERPRETATION: curls are 'divergence-free' — no sources or sinks.");
  W("vector-calculus", "Green:",
    "$C$ = closed plane curve oriented counterclockwise. $R$ = region enclosed. $\\vec F = (P, Q)$ = 2D vector field. CONNECTS line integral around boundary with double integral inside. WORKED EXAMPLE: compute area of region $R$ by $\\tfrac{1}{2}\\oint_C(-y\\,dx + x\\,dy)$.");
  W("vector-calculus", "Stokes:",
    "$C$ = closed curve in 3D bounding surface $S$. $\\vec F$ = vector field. $d\\vec S$ = oriented area element. WORKED EXAMPLE: line integral of $\\vec F$ around a loop equals flux of curl $\\vec F$ through any surface bounded by that loop. Faraday's law of induction is Stokes applied to electric field.");
  W("vector-calculus", "Divergence:",
    "$V$ = volume bounded by closed surface $S$. $\\vec F$ = vector field. FLUX through closed surface = volume integral of divergence inside. WORKED EXAMPLE: Gauss's law in EM is divergence theorem applied to electric field — total flux equals enclosed charge / $\\epsilon_0$.");

  // ----- ODE -----
  W("ode", "$\\dfrac{dy}{dx}",
    "$y(x)$ = unknown function. $k$ = constant rate. $C$ = constant of integration determined by initial condition $y(0) = C$. SOLUTION is exponential. WORKED EXAMPLE: bacterial population doubling every hour: $dy/dt = (\\ln 2)y$, so $y(t) = y_0 \\cdot 2^t$. Radioactive decay: $dy/dt = -\\lambda y$, $y(t) = y_0 e^{-\\lambda t}$.");
  W("ode", "$y' + p(x) y",
    "$y(x)$ = unknown. $p(x), q(x)$ = given functions. LINEAR first-order ODE. Solve via integrating factor $\\mu = e^{\\int p\\,dx}$. WORKED EXAMPLE: $y' + 2y = e^x$. $\\mu = e^{2x}$. Multiply: $(e^{2x}y)' = e^{3x}$. Integrate: $e^{2x}y = e^{3x}/3 + C$, so $y = e^x/3 + Ce^{-2x}$.");
  W("ode", "$a y'' + b y' + c y = 0",
    "$y(x)$ = unknown. $a, b, c$ = constants. HOMOGENEOUS linear 2nd-order ODE. Solution depends on roots of characteristic equation. WORKED EXAMPLE: $y'' - 5y' + 6y = 0$. Char eq: $r^2 - 5r + 6 = (r-2)(r-3)$, roots 2, 3. Solution: $y = Ae^{2x} + Be^{3x}$.");
  W("ode", "Characteristic:",
    "$a, b, c$ = ODE coefficients. $r$ = unknown root. CASES: real distinct ($Ae^{r_1 x} + Be^{r_2 x}$), repeated ($(A + Bx)e^{rx}$), complex pair $\\alpha \\pm i\\beta$ ($e^{\\alpha x}(A\\cos\\beta x + B\\sin\\beta x)$). WORKED EXAMPLE: $y'' + 6y' + 9y = 0$. Char: $(r+3)^2 = 0$, repeated $r = -3$. Solution: $(A + Bx)e^{-3x}$.");
  W("ode", "$y'' + \\omega^2 y = 0",
    "$y(t)$ = unknown. $\\omega$ = angular frequency. SOLUTION is sinusoidal — the equation of simple harmonic motion. $A, B$ = constants from initial conditions. WORKED EXAMPLE: pendulum (small angles) $\\ddot\\theta + (g/L)\\theta = 0$ has $\\omega = \\sqrt{g/L}$, solution $\\theta(t) = A\\cos\\omega t + B\\sin\\omega t$.");
  W("ode", "Wronskian:",
    "$y_1, y_2$ = two solutions of a 2nd-order linear ODE. $W$ = Wronskian. NONZERO $W$ means $y_1, y_2$ are linearly independent — they form a basis for the solution space. WORKED EXAMPLE: $y_1 = e^x, y_2 = e^{-x}$. $W = e^x(-e^{-x}) - e^x \\cdot e^{-x} = -2 \\neq 0$. Linearly independent.");

  // ----- PDE -----
  W("pde", "Heat:",
    "$u(x, t)$ = temperature at position $x$, time $t$. $\\alpha$ = thermal diffusivity (m²/s). $u_t = \\partial u/\\partial t$, $u_{xx} = \\partial^2 u/\\partial x^2$. PARABOLIC PDE. WORKED EXAMPLE: copper has $\\alpha \\approx 1.1 \\times 10^{-4}$ m²/s. A point heated locally spreads as a Gaussian, width growing as $\\sqrt{4\\alpha t}$.");
  W("pde", "Wave:",
    "$u(x, t)$ = displacement (string height, pressure, electric field). $c$ = wave speed (m/s). HYPERBOLIC PDE. SOLUTIONS travel as $f(x \\pm ct)$. WORKED EXAMPLE: guitar string: $c = \\sqrt{T/\\mu}$ where $T$ is tension (N), $\\mu$ is linear mass density (kg/m). Typical $c \\sim 300$ m/s.");
  W("pde", "Laplace:",
    "$u(\\vec r)$ = steady-state scalar field. $\\nabla^2 u$ = Laplacian. ELLIPTIC PDE. SOLUTIONS are 'harmonic' — averaged over any sphere, equal the central value. WORKED EXAMPLE: electrostatic potential in vacuum, steady-state temperature, irrotational fluid potential — all obey Laplace's equation.");
  W("pde", "D'Alembert:",
    "$f$ = arbitrary twice-differentiable function. $c$ = wave speed. GENERAL solution of 1D wave equation: left-moving wave $f(x + ct)$ plus right-moving wave $f(x - ct)$. WORKED EXAMPLE: initial pulse $f(x) = e^{-x^2}$ on a string: it splits into two pulses traveling in opposite directions.");
  W("pde", "Heat fundamental:",
    "$G(x, t)$ = heat-equation fundamental solution (Green's function). $\\alpha$ = diffusivity. RESPONSE to a unit point source at origin. WORKED EXAMPLE: drop a hot droplet at $x = 0$; after time $t$, temperature is a Gaussian with width $\\sqrt{4\\alpha t}$. After $t = 1$ s in copper: width $\\sim 0.02$ m = 2 cm.");
  W("pde", "Separation:",
    "$u(x, t)$ = unknown solution. ANSATZ: write as a product. SUBSTITUTE into the PDE; if the equation separates, each side equals a constant, giving ODEs. WORKED EXAMPLE: heat equation with $u = X(x)T(t)$: $XT' = \\alpha X''T$, divide by $\\alpha XT$: $T'/(\\alpha T) = X''/X = -\\lambda$. Two ODEs.");

  // ----- REAL-ANALYSIS -----
  W("real-analysis", "$\\forall \\varepsilon",
    "RIGOROUS definition of sequence convergence. $a_n$ = $n$-th term of sequence. $L$ = limit. SAYS: for any tolerance $\\varepsilon > 0$ (no matter how small), there's a threshold $N$ after which ALL terms are within $\\varepsilon$ of $L$. WORKED EXAMPLE: prove $1/n \\to 0$. Given $\\varepsilon > 0$, choose $N > 1/\\varepsilon$. Then $n > N \\Rightarrow 1/n < 1/N < \\varepsilon$. ✓");
  W("real-analysis", "Cauchy:",
    "$a_n$ = sequence. CAUCHY: terms get arbitrarily close to EACH OTHER (not to a specific limit). In $\\mathbb R$: Cauchy ⟺ convergent (completeness). WORKED EXAMPLE: $a_n = \\sum_{k=1}^n 1/k!$. $|a_m - a_n| \\to 0$ since the tail $\\sum 1/k!$ is small. So $a_n$ converges (to $e - 1$, in fact).");
  W("real-analysis", "MVT:",
    "$f$ = continuous on $[a, b]$, differentiable on $(a, b)$. AT LEAST one $c$ in $(a, b)$ where instantaneous rate of change equals the average rate. WORKED EXAMPLE: $f(x) = x^2$ on $[1, 3]$. Average slope $= (9 - 1)/(3 - 1) = 4$. $f'(c) = 2c = 4 \\Rightarrow c = 2$, which is in $(1, 3)$ ✓.");
  W("real-analysis", "Bolzano-Weierstrass",
    "Every bounded sequence in $\\mathbb R$ (or $\\mathbb R^n$) has a convergent subsequence. WORKED EXAMPLE: $a_n = \\sin n$ is bounded in $[-1, 1]$, so it has a convergent subsequence (in fact infinitely many — $\\sin n$ comes close to any value in $[-1, 1]$).");
  W("real-analysis", "Heine-Borel",
    "In $\\mathbb R^n$: a subset is COMPACT (every open cover has a finite subcover) ⟺ it's CLOSED AND BOUNDED. WORKED EXAMPLE: $[0, 1]$ is closed and bounded → compact. $(0, 1)$ is bounded but NOT closed → not compact. $\\mathbb R$ is closed but not bounded → not compact.");
  W("real-analysis", "Riemann sum:",
    "$f$ = function on $[a, b]$. $\\Delta x_i$ = width of $i$-th subinterval. $\\xi_i$ = sample point in that subinterval. LIMIT (as partition gets finer) is the Riemann integral if it exists. WORKED EXAMPLE: $\\int_0^1 x\\,dx$ via right endpoints: $\\sum_{i=1}^n (i/n)(1/n) = (1/n^2)\\sum i = (n+1)/(2n) \\to 1/2$. ✓");

  // ----- COMPLEX-ANALYSIS -----
  W("complex-analysis", "Cauchy-Riemann:",
    "$f(z) = u(x, y) + iv(x, y)$ where $z = x + iy$ and $u, v$ are real-valued. CR equations are NECESSARY (and locally sufficient with continuity) for $f$ to be holomorphic. WORKED EXAMPLE: $f(z) = z^2 = (x^2 - y^2) + 2ixy$. $u = x^2 - y^2$, $v = 2xy$. $u_x = 2x = v_y$ ✓. $u_y = -2y = -v_x$ ✓. Holomorphic.");
  W("complex-analysis", "$\\oint_\\gamma f(z)",
    "$f$ = holomorphic function on a simply-connected domain. $\\gamma$ = closed contour. CAUCHY-Goursat: integral around any closed contour is zero. WORKED EXAMPLE: $\\oint_{|z|=1} z\\,dz = 0$ (since $z$ is entire).");
  W("complex-analysis", "$f(z_0)",
    "Cauchy integral formula. $f$ = holomorphic inside and on contour $\\gamma$. $z_0$ = point inside $\\gamma$. INTERIOR values are determined by boundary values. WORKED EXAMPLE: $\\oint_{|z|=1} (e^z/z)\\,dz = 2\\pi i \\cdot e^0 = 2\\pi i$ (residue is $e^0 = 1$).");
  W("complex-analysis", "$\\oint f\\,dz",
    "RESIDUE theorem. $\\text{Res}$ = residue at a pole inside $\\gamma$. SUM over all poles enclosed by $\\gamma$. WORKED EXAMPLE: $\\oint_{|z|=2}(1/(z^2-1))\\,dz$. Poles at $\\pm 1$, both inside. $\\text{Res}_{z=1} = 1/2$, $\\text{Res}_{z=-1} = -1/2$. Sum $= 0$. Integral $= 0$.");
  W("complex-analysis", "Liouville",
    "$f$ = entire (holomorphic on all of $\\mathbb C$) AND bounded. CONCLUSION: $f$ is constant. WORKED EXAMPLE: nontrivial entire functions like $e^z$, $\\sin z$ are UNBOUNDED. The only bounded ones are constants.");
  W("complex-analysis", "Max modulus",
    "$f$ = holomorphic on a closed bounded domain. The maximum of $|f|$ is attained on the BOUNDARY (unless $f$ is constant). WORKED EXAMPLE: on the unit disk, $f(z) = z$ has $|z| \\leq 1$ with maximum on the unit circle (boundary), not in the interior.");

  // ----- FOURIER-ANALYSIS -----
  W("fourier-analysis", "$f(x) = \\sum (a_n",
    "$f(x)$ = $2\\pi$-periodic function. $a_n, b_n$ = Fourier coefficients. EVERY (sufficiently regular) periodic function decomposes into sines and cosines. WORKED EXAMPLE: square wave $f(x) = $ sign$(\\sin x)$ has Fourier series $\\frac{4}{\\pi}(\\sin x + \\sin 3x/3 + \\sin 5x/5 + \\ldots)$.");
  W("fourier-analysis", "$a_n = \\dfrac{1}{\\pi}",
    "$a_n$ = Fourier cosine coefficient. ORTHOGONALITY of cosines makes this projection work. SIMILARLY $b_n = (1/\\pi)\\int f\\sin(nx)\\,dx$. WORKED EXAMPLE: even function on $[-\\pi, \\pi]$ has all $b_n = 0$ (odd integrand); odd function has all $a_n = 0$.");
  W("fourier-analysis", "$\\hat f(k)",
    "$\\hat f(k)$ = Fourier transform of $f$ at frequency $k$. $f(x)$ = original signal in space (or time). EXTENDS the Fourier-series idea to non-periodic functions. WORKED EXAMPLE: $f(x) = e^{-x^2/2}$ (Gaussian) has $\\hat f(k) = \\sqrt{2\\pi}e^{-k^2/2}$ — another Gaussian!");
  W("fourier-analysis", "$f(x) = \\dfrac{1}{2\\pi}",
    "INVERSE Fourier transform. Reconstructs $f$ from $\\hat f$. WHY this normalization: different conventions; this one's symmetric in a sense.");
  W("fourier-analysis", "$\\widehat{f \\ast g}",
    "Convolution $(f \\ast g)(x) = \\int f(t)g(x - t)\\,dt$. CONVOLUTION theorem: Fourier transform of convolution is the product. WORKED EXAMPLE: blurring an image is convolution with a kernel. In frequency domain, blurring is just multiplying the spectrum by the kernel's transform — FAST.");
  W("fourier-analysis", "Parseval:",
    "ENERGY is preserved under Fourier transform. $\\int |f|^2$ = $L^2$ norm squared (signal energy). WORKED EXAMPLE: a signal with most energy in low frequencies has most $|\\hat f(k)|^2$ concentrated near $k = 0$. Useful for filtering and compression.");
  W("fourier-analysis", "$\\sigma_x \\sigma_k",
    "$\\sigma_x$ = spatial standard deviation. $\\sigma_k$ = frequency standard deviation. UNCERTAINTY principle in signal processing: a signal can't be simultaneously narrow in space and narrow in frequency. WORKED EXAMPLE: pure sinusoid is infinitely extended in time but has one delta in frequency. Short pulses (small $\\sigma_x$) have broad spectra (large $\\sigma_k$).");

  // ----- ABSTRACT-ALGEBRA -----
  W("abstract-algebra", "Group axioms",
    "A GROUP is a set $G$ with a binary operation satisfying four axioms: <em>closure</em> (operation stays in $G$), <em>associativity</em>, <em>identity</em> element $e$ with $eg = ge = g$, and each $g$ has an <em>inverse</em> $g^{-1}$ with $gg^{-1} = e$. WORKED EXAMPLE: integers under addition. Identity 0, inverse of $n$ is $-n$. Multiplication isn't a group on $\\mathbb Z$ — no inverses for most elements.");
  W("abstract-algebra", "Lagrange",
    "$G$ = finite group. $H$ = subgroup of $G$. $|G|, |H|$ = orders (number of elements). LAGRANGE: subgroup order divides group order. WORKED EXAMPLE: $S_3$ has order 6. Possible subgroup orders: 1, 2, 3, 6. NOT 4 or 5.");
  W("abstract-algebra", "$|G/H|",
    "$G/H$ = quotient group (when $H$ is normal). INDEX = number of distinct cosets = group order / subgroup order. WORKED EXAMPLE: $\\mathbb Z/3\\mathbb Z$ has $|G| = \\infty$... but $\\mathbb Z/3\\mathbb Z = \\{0, 1, 2\\}$ has $|G/H| = 3$. For finite groups: $|G/H| = |G|/|H|$.");
  W("abstract-algebra", "First isomorphism",
    "$\\phi: G \\to H$ = group homomorphism. $\\ker \\phi$ = elements mapping to identity. $\\text{im}\\,\\phi$ = image. THEOREM: $G/\\ker\\phi \\cong \\text{im}\\,\\phi$. WORKED EXAMPLE: $\\phi: \\mathbb Z \\to \\mathbb Z/n\\mathbb Z$, $\\phi(k) = k \\bmod n$. $\\ker\\phi = n\\mathbb Z$. $\\text{im}\\,\\phi = \\mathbb Z/n\\mathbb Z$. So $\\mathbb Z/n\\mathbb Z \\cong \\mathbb Z/n\\mathbb Z$ — confirmed.");
  W("abstract-algebra", "Cauchy:",
    "$G$ = finite group. $p$ = prime dividing $|G|$. CAUCHY: $G$ contains an element of order exactly $p$. WORKED EXAMPLE: $S_4$ has order 24. Primes dividing 24: 2 and 3. So $S_4$ has elements of order 2 (e.g., transpositions like (12)) and of order 3 (e.g., 3-cycles like (123)).");
  W("abstract-algebra", "$\\mathbb{Z}/p\\mathbb{Z}",
    "$p$ = a prime number. $\\mathbb Z/p\\mathbb Z$ = integers mod $p$. UNIQUE field of $p$ elements. WORKED EXAMPLE: $\\mathbb Z/5\\mathbb Z = \\{0, 1, 2, 3, 4\\}$. $2 \\cdot 3 = 6 \\equiv 1$, so $3$ is the inverse of $2$. Every nonzero element has an inverse — that's what makes it a field. For composite $n$ (e.g., $n = 6$), $\\mathbb Z/n\\mathbb Z$ is NOT a field — $2 \\cdot 3 = 0$ is a zero divisor.");

  // ----- RANDOM-VARIABLES -----
  W("random-variables", "$E[X]",
    "$X$ = random variable. $f(x)$ = probability density (continuous) or $P_i$ = probability mass (discrete). EXPECTED value = population mean. WORKED EXAMPLE: $X$ uniform on $[0, 1]$, $f(x) = 1$. $E[X] = \\int_0^1 x\\,dx = 1/2$. Roll a die: $E[X] = (1+2+\\ldots+6)/6 = 3.5$.");
  W("random-variables", "$\\text{Var}(X)",
    "$X$ = random variable. $E[X^2]$ = expectation of square. $E[X]^2$ = square of expectation. VARIANCE measures spread. WORKED EXAMPLE: $X$ takes values $-1, 0, 1$ each with probability $1/3$. $E[X] = 0$. $E[X^2] = 2/3$. $\\text{Var}(X) = 2/3$. $\\sigma = \\sqrt{2/3} \\approx 0.816$.");
  W("random-variables", "Binomial:",
    "$n$ = number of independent trials. $p$ = probability of success per trial. $X$ = number of successes. EXPECTED successes: $np$. VARIANCE: $np(1-p)$, maximum at $p = 1/2$. WORKED EXAMPLE: 100 fair coin flips. $E = 50$, $\\text{Var} = 25$, $\\sigma = 5$. Typical range $50 \\pm 10$ (within 2σ).");
  W("random-variables", "Poisson:",
    "$\\lambda$ = rate parameter (average events per unit time/space). $X$ = number of events. $k$ = nonnegative integer outcome. KEY property: mean = variance = $\\lambda$. WORKED EXAMPLE: a call center gets 3 calls/minute on average. Probability of exactly 5 calls in a minute: $e^{-3} 3^5/5! \\approx 0.101$.");
  W("random-variables", "Normal:",
    "$X$ = normally distributed random variable. $\\mu$ = mean. $\\sigma$ = standard deviation. BELL CURVE. CENTRAL LIMIT THEOREM: sums of many random variables approach normal. WORKED EXAMPLE: human heights $\\mu \\approx 170$ cm, $\\sigma \\approx 8$ cm (adult). Probability of height between 162 and 178 cm: 68% (within 1σ).");
  W("random-variables", "CLT:",
    "$\\bar X$ = sample mean of $n$ i.i.d. random variables. $\\mu$ = true mean. $\\sigma^2$ = true variance. AS $n \\to \\infty$: sample mean is approximately normal, REGARDLESS of underlying distribution. WORKED EXAMPLE: 100 dice rolls. Each $\\mu = 3.5, \\sigma^2 = 35/12$. Sample mean $\\bar X$ is approximately normal with $\\sigma_{\\bar X} \\approx \\sqrt{35/(12 \\cdot 100)} \\approx 0.17$.");
  W("random-variables", "Markov:",
    "$X$ = nonnegative random variable. $a > 0$. MARKOV inequality: probability of being at least $a$ is bounded by mean over $a$. CRUDE but universal. WORKED EXAMPLE: if income mean is $\\$50{,}000$, then at most $50{,}000/200{,}000 = 25\\%$ of people earn at least $\\$200{,}000$.");

  // ----- NUMBER-THEORY -----
  W("number-theory", "$a = bq",
    "$a, b$ = integers with $b > 0$. $q$ = quotient. $r$ = remainder. DIVISION algorithm: unique $q, r$ exist. WORKED EXAMPLE: $a = 17, b = 5$: $17 = 5 \\cdot 3 + 2$, so $q = 3, r = 2$.");
  W("number-theory", "$\\gcd(a,b)",
    "$\\gcd$ = greatest common divisor. $a \\bmod b$ = remainder when $a$ is divided by $b$. EUCLIDEAN ALGORITHM: replace larger by remainder until reaching 0. WORKED EXAMPLE: $\\gcd(48, 18)$. $48 = 2 \\cdot 18 + 12$. $\\gcd(18, 12)$. $18 = 1 \\cdot 12 + 6$. $\\gcd(12, 6) = 6$ (since $12 = 2\\cdot 6 + 0$).");
  W("number-theory", "$a^{\\varphi(n)}",
    "EULER's theorem. $\\varphi(n)$ = Euler totient (count of integers in $\\{1, \\ldots, n\\}$ coprime to $n$). $a, n$ coprime. WORKED EXAMPLE: $n = 10$, $\\varphi(10) = 4$ (the numbers 1, 3, 7, 9). $3^4 = 81 \\equiv 1 \\pmod{10}$ ✓. Basis of RSA cryptography.");
  W("number-theory", "$a^{p-1}",
    "FERMAT's little theorem (special case of Euler with $n = p$ prime). $p$ = prime. $a$ NOT divisible by $p$. WORKED EXAMPLE: $5^{6} \\bmod 7$. $5^6 = 15625 = 2232 \\cdot 7 + 1$, so $\\equiv 1$ ✓. By Fermat: $5^6 \\equiv 1 \\pmod 7$.");
  W("number-theory", "$ax + by",
    "BEZOUT's identity. $a, b$ = integers, not both zero. $x, y$ = integers found by EXTENDED Euclidean algorithm. WORKED EXAMPLE: $\\gcd(48, 18) = 6$. Find $x, y$: $6 = 18 - 12 = 18 - (48 - 2\\cdot 18) = 3\\cdot 18 - 48$. So $x = -1, y = 3$.");
  W("number-theory", "CRT",
    "CHINESE remainder theorem. $m_1, m_2, \\ldots, m_k$ = pairwise coprime moduli. $a_1, \\ldots, a_k$ = arbitrary residues. UNIQUE solution mod $m_1 \\cdots m_k$. WORKED EXAMPLE: find $x$ with $x \\equiv 2 \\pmod 3, x \\equiv 3 \\pmod 5, x \\equiv 2 \\pmod 7$. Answer: $x = 23$ (and $x \\equiv 23 \\pmod{105}$).");

  // ----- FUNCTIONAL ANALYSIS -----
  W("functional-analysis", "Banach:",
    "BANACH space = complete normed vector space. 'Complete' means every Cauchy sequence converges (to a point in the space). NORM gives lengths but not necessarily angles. WORKED EXAMPLE: $\\ell^1$ = absolutely summable sequences, $\\|x\\|_1 = \\sum |x_n|$. Complete — Banach. $C[0,1]$ with $\\|f\\|_\\infty = \\max |f|$ — Banach.");
  W("functional-analysis", "Hilbert:",
    "HILBERT space = complete inner product space. The inner product gives angles and orthogonality. EXAMPLE: $\\ell^2 = \\{(x_n) : \\sum |x_n|^2 < \\infty\\}$ with $\\langle x, y\\rangle = \\sum x_n \\bar y_n$. Quantum mechanics lives in Hilbert spaces.");
  W("functional-analysis", "$\\|T\\|",
    "$T$ = bounded linear operator. The OPERATOR norm measures the max amplification factor. WORKED EXAMPLE: $T: \\mathbb R^2 \\to \\mathbb R^2$ with matrix $\\text{diag}(3, 5)$. $\\|T\\| = 5$ — the largest singular value. Operator norm is the natural norm on the Banach algebra of bounded operators.");
  W("functional-analysis", "Riesz representation",
    "$H$ = Hilbert space. $\\phi$ = bounded linear functional on $H$. UNIQUE vector $y \\in H$ with $\\phi(x) = \\langle x, y\\rangle$ for all $x$. Dual of $H$ is isomorphic to $H$ itself. WORKED EXAMPLE: on $L^2[0,1]$, every bounded functional is $\\phi(f) = \\int_0^1 f(x)\\overline{g(x)}\\,dx$ for some $g \\in L^2$.");
  W("functional-analysis", "Hahn-Banach",
    "$X$ = vector space. $Y$ = subspace. $\\phi$ = bounded linear functional on $Y$. EXTENDS to a functional on all of $X$ with same norm. CONSEQUENCES: enough functionals to separate points; convex sets separable by hyperplanes (basis of convex optimization).");
  W("functional-analysis", "Open mapping",
    "BANACH spaces $X, Y$. $T: X \\to Y$ = bounded linear surjection. $T$ takes open sets to open sets. CONSEQUENCE: closed graph theorem (linear operator with closed graph is bounded).");
  W("functional-analysis", "Spectral theorem",
    "$T$ = compact self-adjoint operator on Hilbert space. EXISTS orthonormal basis of eigenvectors with REAL eigenvalues approaching zero. WORKED EXAMPLE: integral operator with continuous symmetric kernel has discrete spectrum — foundation of Sturm-Liouville theory.");

  // ----- CALCULUS OF VARIATIONS -----
  W("calculus-of-variations", "Euler-Lagrange:",
    "$y(x)$ = unknown function to be found. $L(x, y, y')$ = Lagrangian. SOLVES variational problem: extremize $\\int L\\,dx$. WORKED EXAMPLE: shortest curve between two points. $L = \\sqrt{1 + y'^2}$. EL: $d/dx(y'/\\sqrt{1+y'^2}) = 0$, so $y' = $ constant, so $y = mx + b$ — straight line.");
  W("calculus-of-variations", "$S = \\int L",
    "$S$ = action functional. $L$ = Lagrangian = $T - V$ (kinetic minus potential). UNITS: J·s (same as $\\hbar$). WORKED EXAMPLE: free particle $L = \\tfrac{1}{2}mv^2$. Action of straight path from $0$ to $T$: $S = \\tfrac{1}{2}mv^2 T$.");
  W("calculus-of-variations", "Principle of least action:",
    "$\\delta S = 0$ — physical paths extremize the action. NEEDN'T be a minimum; saddle points work too. UNDERLIES classical mechanics, GR, QM (Feynman path integral). WORKED EXAMPLE: pendulum motion is the path through phase space that extremizes the action with $L = T - V$.");
  W("calculus-of-variations", "Brachistochrone:",
    "BEAD sliding under gravity from $A$ to $B$. $y$ = height. $y' = dy/dx$. $g$ = gravity. SOLUTION: cycloid. ORIGIN: Johann Bernoulli's 1696 challenge; Newton solved it overnight. WORKED EXAMPLE: bead reaches bottom faster on cycloid than on straight line, despite cycloid being longer.");
  W("calculus-of-variations", "Soap film:",
    "$y$ = profile of surface of revolution. $y'$ = derivative. SURFACE area of revolution. MINIMIZER: catenoid (surface of revolution of $\\cosh$). WORKED EXAMPLE: dip two parallel rings in soap solution; film forms a catenoid if rings are close enough.");
  W("calculus-of-variations", "Noether:",
    "EVERY continuous symmetry of the action yields a conserved current. EXAMPLES: time translation → energy; space translation → momentum; rotation → angular momentum; gauge symmetry → charge. PROVED by Emmy Noether (1918).");

  // ----- GAME THEORY -----
  W("game-theory", "Nash:",
    "$s_i^*$ = equilibrium strategy of player $i$. $s_{-i}^*$ = strategies of all OTHER players at equilibrium. $u_i$ = utility (payoff) function for player $i$. CONDITION: no player can improve by unilaterally changing strategy. WORKED EXAMPLE: Prisoner's Dilemma. Both confess is the unique Nash, even though both staying silent gives higher joint payoff.");
  W("game-theory", "Minimax:",
    "$s, t$ = strategies of two players in a zero-sum game. $u(s, t)$ = payoff to player 1 (negative of player 2's). VON NEUMANN's theorem: max-min = min-max = VALUE of the game. WORKED EXAMPLE: rock-paper-scissors. Value is 0 (symmetric). Optimal strategy: uniform random.");
  W("game-theory", "Mixed strategy:",
    "Player randomizes among pure strategies with specific probabilities. NECESSARY when no pure-strategy equilibrium exists. WORKED EXAMPLE: matching pennies has unique mixed equilibrium $(1/2, 1/2)$ for both players. ANY deviation invites exploitation.");
  W("game-theory", "Shapley value:",
    "$v(S)$ = value created by coalition $S$. $n$ = total number of players. $\\phi_i$ = Shapley value (fair share) for player $i$. WORKED EXAMPLE: profit-sharing in a coalition: each player's Shapley value = average marginal contribution across all orderings of joining. USED in attribution methods like SHAP for machine learning.");
  W("game-theory", "Subgame perfect:",
    "REFINEMENT of Nash: every subgame must be a Nash equilibrium. COMPUTED via BACKWARD induction in finite-horizon games. ELIMINATES non-credible threats. WORKED EXAMPLE: centipede game — backward induction predicts immediate stopping, even though human players often cooperate longer.");
  W("game-theory", "Stable matching",
    "GALE-SHAPLEY (1962) algorithm. PRODUCES a matching where no two participants prefer each other to their assigned partners. USED IN: medical residency (NRMP), school choice, kidney exchange. NOBEL Prize 2012 to Shapley and Roth.");

  // ----- OPTIMIZATION -----
  W("optimization", "$\\min f(x)",
    "$f(x)$ = objective function (to minimize). $g_i(x) \\leq 0$ = inequality constraints. $h_j(x) = 0$ = equality constraints. $x$ = decision variable (vector). GENERAL form of a constrained optimization problem. WORKED EXAMPLE: minimize $x^2 + y^2$ subject to $x + y \\geq 1$. Solution: $x = y = 1/2$, min value $1/2$.");
  W("optimization", "$\\mathcal{L}",
    "LAGRANGIAN function. $\\lambda_i$ = Lagrange multipliers for inequalities ($\\lambda_i \\geq 0$). $\\mu_j$ = multipliers for equalities (any sign). KEY tool for constrained optimization. WORKED EXAMPLE: minimize $x^2 + y^2$ s.t. $x + y = 1$. $\\mathcal L = x^2 + y^2 + \\mu(x + y - 1)$. Set $\\nabla_x \\mathcal L = 0$: $2x + \\mu = 0, 2y + \\mu = 0$, plus constraint. Solve: $x = y = 1/2$.");
  W("optimization", "KKT:",
    "KKT (Karush-Kuhn-Tucker) conditions = necessary for optimality with inequality constraints. STATIONARITY: gradient of Lagrangian is zero. DUAL feasibility: $\\lambda_i \\geq 0$. COMPLEMENTARY slackness: $\\lambda_i g_i = 0$ (either constraint is active or multiplier is zero).");
  W("optimization", "Convex:",
    "$f$ is CONVEX iff any chord lies above the function. $\\theta \\in [0, 1]$ = interpolation parameter. WORKED EXAMPLE: $f(x) = x^2$ is convex. Check at $x = 0, y = 1, \\theta = 1/2$: $f(0.5) = 0.25 \\leq 0.5(0) + 0.5(1) = 0.5$ ✓. For convex optimization: every local min is a global min.");
  W("optimization", "Gradient descent:",
    "$x_n$ = current iterate. $\\eta$ = step size (learning rate). $\\nabla f$ = gradient. MOVE in direction of steepest decrease. WORKED EXAMPLE: minimize $f(x) = (x - 5)^2$. $\\nabla f = 2(x - 5)$. From $x_0 = 0$ with $\\eta = 0.1$: $x_1 = 0 + 1 = 1$, $x_2 = 1 + 0.8 = 1.8$, etc., converging to $x = 5$.");
  W("optimization", "Newton's:",
    "$H$ = Hessian (matrix of second partials). $\\nabla f$ = gradient. USES second-order info. QUADRATIC convergence near regular minimum. EXPENSIVE per iteration (must form and invert $H$).");
  W("optimization", "LP duality:",
    "LP = linear program. PRIMAL: maximize $c^T x$ subject to $Ax \\leq b, x \\geq 0$. DUAL: minimize $b^T y$ subject to $A^T y \\geq c, y \\geq 0$. STRONG duality: optimal primal value equals optimal dual value (under standard assumptions).");

  // ----- INFORMATION THEORY -----
  W("information-theory", "$H(X)",
    "$X$ = discrete random variable. $p_i$ = probability of outcome $i$. $H(X)$ = SHANNON entropy in bits (when log base 2). MEASURES average information per symbol. WORKED EXAMPLE: fair coin: $H = -2 \\cdot (1/2)\\log_2(1/2) = 1$ bit. Biased coin $p = 0.9$: $H = -0.9\\log_2(0.9) - 0.1\\log_2(0.1) \\approx 0.469$ bits.");
  W("information-theory", "$H(X, Y)",
    "$H(X, Y)$ = joint entropy. SUBADDITIVITY: $H(X, Y) \\leq H(X) + H(Y)$. EQUALITY iff $X, Y$ independent. WORKED EXAMPLE: two independent coin flips have $H(X, Y) = 2$ bits (= $H(X) + H(Y) = 1 + 1$).");
  W("information-theory", "$I(X; Y)",
    "$I(X; Y)$ = MUTUAL information between $X$ and $Y$. MEASURES information $X$ provides about $Y$. SYMMETRIC: $I(X; Y) = I(Y; X)$. ZERO iff independent. WORKED EXAMPLE: $Y = X$ (perfectly correlated): $I = H(X)$ (all info shared). $X, Y$ independent: $I = 0$.");
  W("information-theory", "$D(p \\| q)",
    "$D_{KL}$ = Kullback-Leibler divergence. $p, q$ = two probability distributions. NOT symmetric. ALWAYS non-negative; zero iff $p = q$. MEASURES 'cost' of using $q$ to model true distribution $p$. WORKED EXAMPLE: $p = (0.5, 0.5)$ (fair coin), $q = (0.9, 0.1)$ (biased model). $D(p\\|q) = 0.5\\log(0.5/0.9) + 0.5\\log(0.5/0.1) \\approx 0.737$ bits — significant penalty.");
  W("information-theory", "Channel capacity:",
    "$C$ = MAXIMUM rate (bits per channel use) for reliable communication. MAX taken over input distributions $P(X)$. SHANNON's theorem: at any rate $R < C$, error probability can be made arbitrarily small with long codes.");
  W("information-theory", "BSC capacity:",
    "BSC = Binary Symmetric Channel: each bit independently flipped with probability $p$. $H(p)$ = binary entropy. WORKED EXAMPLE: $p = 0.1$ (10% error): $H(0.1) \\approx 0.469$. Capacity $C \\approx 0.531$ bits/use. So you need at least ~2 channel uses per intended bit.");
  W("information-theory", "Differential entropy of",
    "$\\sigma^2$ = variance. Differential entropy of Gaussian = $\\tfrac{1}{2}\\log(2\\pi e\\sigma^2)$. MAXIMUM entropy among continuous distributions with given variance — that's why Gaussians appear so often.");

  // ----- EXPONENTS-ROOTS -----
  W("exponents-roots", "$x^a \\cdot x^b",
    "$x$ = base (any nonzero real, or positive for real $a, b$). $a, b$ = real exponents. MULTIPLYING powers of the same base — ADD the exponents. WORKED EXAMPLE: $2^3 \\cdot 2^4 = 2^7 = 128$. Check: $8 \\cdot 16 = 128$ ✓.");
  W("exponents-roots", "$\\dfrac{x^a}{x^b}",
    "$x$ = base ($x \\neq 0$). DIVIDING powers — SUBTRACT exponents. WORKED EXAMPLE: $5^{10}/5^7 = 5^3 = 125$.");
  W("exponents-roots", "$(x^a)^b",
    "RAISING a power to a power — MULTIPLY exponents. WORKED EXAMPLE: $(2^3)^4 = 2^{12} = 4096$. Check: $8^4 = 4096$ ✓.");
  W("exponents-roots", "$x^{-n}",
    "$n$ = positive integer (or any positive real). NEGATIVE exponent flips to the denominator. CONSISTENT with the exponent laws: $x^{-n} \\cdot x^n = x^0 = 1$. WORKED EXAMPLE: $3^{-2} = 1/9$.");
  W("exponents-roots", "$x^{1/n}",
    "$n$ = positive integer. $\\sqrt[n]{x}$ = the $n$-th root of $x$. CONSISTENT with exponent laws: $(x^{1/n})^n = x$. WORKED EXAMPLE: $8^{1/3} = \\sqrt[3]{8} = 2$. $16^{1/4} = 2$.");
  W("exponents-roots", "$\\sqrt{ab}",
    "$a, b \\geq 0$. SQUARE ROOT distributes over multiplication. WARNING: does NOT distribute over addition ($\\sqrt{a + b} \\neq \\sqrt a + \\sqrt b$). WORKED EXAMPLE: $\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt 2$ — standard surd simplification.");

  // ============================================================
  // BATCH 5 — advanced physics and remaining math
  // ============================================================

  // ----- GENERAL RELATIVITY -----
  W("general-relativity", "$G_{\\mu\\nu} = \\dfrac{8\\pi",
    "$G_{\\mu\\nu}$ = Einstein tensor (a $4\\times 4$ symmetric tensor encoding spacetime curvature). $T_{\\mu\\nu}$ = stress-energy tensor (encoding the local distribution of matter and energy). $G \\approx 6.67\\times10^{-11}$ N·m²/kg² (Newton's gravitational constant). $c \\approx 3\\times10^8$ m/s. 10 coupled nonlinear PDEs. WORKED EXAMPLE: for a perfect fluid at rest, $T^{00} = \\rho c^2$ and Einstein's equation in the weak-field limit recovers Newton's $\\nabla^2\\Phi = 4\\pi G\\rho$.");
  W("general-relativity", "$G_{\\mu\\nu} = R_{\\mu\\nu}",
    "$G_{\\mu\\nu}$ = Einstein tensor. $R_{\\mu\\nu}$ = Ricci tensor (contraction of Riemann curvature). $R = g^{\\mu\\nu}R_{\\mu\\nu}$ = Ricci scalar. $g_{\\mu\\nu}$ = metric tensor. CONSTRUCTED to be divergence-free, ensuring local conservation of energy-momentum. WORKED EXAMPLE: Schwarzschild solution has $R_{\\mu\\nu} = 0$ (vacuum) and the Einstein tensor automatically vanishes.");
  W("general-relativity", "$r_s = 2GM/c^2",
    "$r_s$ = Schwarzschild radius (m). $G$ = Newton's gravitational constant. $M$ = mass of the gravitating object (kg). $c$ = speed of light. AT $r = r_s$: event horizon of a non-rotating black hole. WORKED EXAMPLES: Sun ($M = 2\\times10^{30}$ kg) → $r_s \\approx 3$ km. Earth → $r_s \\approx 9$ mm. A 1 kg object → $r_s \\approx 1.5\\times10^{-27}$ m.");
  W("general-relativity", "$d\\tau",
    "$d\\tau$ = proper time interval (time measured by a stationary clock at radius $r$). $dt$ = coordinate time (time measured far from the mass). $G, M, r, c$ as above. CONSEQUENCE: clocks deeper in a gravitational well tick slower. WORKED EXAMPLE: GPS satellites at altitude $\\sim 20{,}000$ km tick faster than Earth-surface clocks by $\\sim 38$ μs/day — without GR correction, GPS would drift by 10 km/day.");
  W("general-relativity", "$v = H_0",
    "$v$ = recession velocity of distant galaxy (km/s). $H_0$ = Hubble constant ($\\approx 70$ km/s/Mpc). $d$ = proper distance (Mpc). HUBBLE's law: the universe is expanding uniformly. WORKED EXAMPLE: a galaxy at $d = 100$ Mpc recedes at $\\sim 7000$ km/s. Doesn't apply at very large distances (cosmological complications).");
  W("general-relativity", "$H_0 \\approx",
    "$H_0$ = Hubble constant ≈ 67-73 km/s/Mpc (current measurement tension). $1/H_0 \\approx 14$ Gyr = Hubble time, roughly the age of the universe. Mpc = megaparsec = $3.086\\times10^{22}$ m.");

  // ----- QFT -----
  W("qft", "$\\phi(x) = \\int",
    "$\\phi(x)$ = quantum scalar field operator at spacetime point $x$. $a_k$ = annihilation operator removing a particle of momentum $k$. $a_k^\\dagger$ = creation operator adding one. $\\omega_k = \\sqrt{|\\mathbf k|^2 + m^2}$ = relativistic mode frequency. $d^3k/(2\\pi)^3$ = Lorentz-invariant momentum-space measure. The field is a sum of all possible particle creations and annihilations.");
  W("qft", "$[a_k, a_{k'}^\\dagger]",
    "$a_k, a_k^\\dagger$ = creation/annihilation operators. $\\delta(k - k')$ = Dirac delta in continuous momentum space. BOSON commutator (with anti-commutator for fermions: $\\{b_k, b_{k'}^\\dagger\\} = (2\\pi)^3\\delta(k - k')$). Encodes that bosons can pile into the same state; fermions cannot (Pauli).");
  W("qft", "Propagator:",
    "Feynman propagator for a scalar field. $p$ = 4-momentum (energy + 3-momentum). $m$ = particle mass. $i\\epsilon$ = small positive imaginary part (Feynman's $i\\epsilon$ prescription for causality). VIRTUAL particle propagation amplitude. WORKED EXAMPLE: pole at $p^2 = m^2$ corresponds to an on-shell particle (real, not virtual).");
  W("qft", "QED vertex:",
    "QED interaction vertex. $-ie$ = coupling (proportional to electron charge). $\\gamma^\\mu$ = Dirac gamma matrix (4×4). EVERY interaction in QED is built from this single 3-leg vertex (electron-positron-photon). WORKED EXAMPLE: $e^+ e^- \\to \\mu^+ \\mu^-$ scattering has 2 vertices and 1 photon propagator at tree level. Result: cross section $\\propto \\alpha^2$.");
  W("qft", "$\\alpha = e^2",
    "$\\alpha$ = fine-structure constant (dimensionless). $e \\approx 1.6\\times10^{-19}$ C = elementary charge. $\\epsilon_0$ = vacuum permittivity. $\\hbar$ = reduced Planck constant. $c$ = speed of light. PROFOUND: a pure dimensionless number ≈ 1/137.036. Same in all unit systems. SMALL → perturbation theory in QED works extraordinarily well.");
  W("qft", "Vacuum energy:",
    "$\\hbar\\omega_k/2$ = zero-point energy per mode (from harmonic-oscillator quantization). SUM over all modes is FORMALLY infinite. RENORMALIZED away in flat space (only differences matter). PUZZLE: GR couples to absolute energy → predicted cosmological constant exceeds observed by factor $\\sim 10^{120}$. Cosmological constant problem.");
  W("qft", "Compton wavelength:",
    "$\\lambda_C$ = Compton wavelength (m). $h$ = Planck constant. $m$ = particle mass. $c$ = speed of light. SETS the length scale below which relativistic QFT effects (particle creation) matter. WORKED EXAMPLES: electron $\\lambda_C \\approx 2.43\\times10^{-12}$ m. Proton $\\lambda_C \\approx 1.32\\times10^{-15}$ m (fm scale — nuclear physics).");

  // ----- CLASSICAL FIELD THEORY -----
  W("classical-field-theory", "$\\mathcal{L}$ — Lagrangian",
    "$\\mathcal L$ = Lagrangian density (energy per unit spatial volume, units J/m³). Function of the field $\\phi$ and its derivatives $\\partial_\\mu \\phi$ (covariant derivatives in 4D). LORENTZ-invariant scalar in relativistic field theory. WORKED EXAMPLE: free real scalar $\\mathcal L = \\tfrac{1}{2}(\\partial_\\mu\\phi)(\\partial^\\mu\\phi) - \\tfrac{1}{2}m^2\\phi^2$. Mass term breaks scale invariance.");
  W("classical-field-theory", "$S = \\int d^4 x",
    "$S$ = action (units of $\\hbar$, J·s). $d^4 x = dt\\,dx\\,dy\\,dz$ = 4D spacetime volume element. $\\mathcal L$ = Lagrangian density. EXTREMIZING $S$ gives the field equations of motion. WORKED EXAMPLE: action of free EM field is $-\\frac{1}{4}\\int F_{\\mu\\nu}F^{\\mu\\nu}d^4x$ — Lorentz-invariant and gauge-invariant.");
  W("classical-field-theory", "$\\partial_\\mu \\dfrac{\\partial \\mathcal{L}}",
    "FIELD-theory Euler-Lagrange equation. $\\phi$ = field. $\\partial_\\mu \\phi$ = field derivatives. NECESSARY condition for $\\phi$ to extremize $\\int \\mathcal L\\,d^4 x$. WORKED EXAMPLE: free scalar $\\mathcal L = \\tfrac{1}{2}(\\partial\\phi)^2 - \\tfrac{1}{2}m^2\\phi^2$ gives $(\\partial^2 + m^2)\\phi = 0$ — Klein-Gordon equation.");
  W("classical-field-theory", "Klein-Gordon:",
    "$\\Box = \\partial_\\mu \\partial^\\mu = (1/c^2)\\partial_t^2 - \\nabla^2$ = d'Alembertian (wave operator). $m$ = particle mass. $\\phi$ = scalar field (real or complex). RELATIVISTIC wave equation for spin-0 particles. WORKED EXAMPLE: plane-wave solutions $\\phi \\propto e^{-ip\\cdot x/\\hbar}$ with $p^2 = m^2 c^2$ — relativistic energy-momentum dispersion.");
  W("classical-field-theory", "Dirac:",
    "$\\gamma^\\mu$ = Dirac gamma matrices (4×4, satisfying $\\{\\gamma^\\mu, \\gamma^\\nu\\} = 2\\eta^{\\mu\\nu}$). $\\psi$ = Dirac spinor (4-component complex field). $m$ = particle mass. ORIGIN: Dirac (1928) sought a first-order relativistic equation; required spinors and predicted antimatter (positron). Solutions describe spin-1/2 particles.");
  W("classical-field-theory", "$F_{\\mu\\nu} = \\partial_\\mu",
    "$F_{\\mu\\nu}$ = electromagnetic field strength tensor (antisymmetric, 6 independent components). $A_\\mu = (\\phi/c, \\vec A)$ = electromagnetic 4-potential. Components encode $\\vec E$ and $\\vec B$. WORKED EXAMPLE: $F_{0i} = -E_i/c$, $F_{ij} = -\\epsilon_{ijk}B_k$. Gauge invariant under $A_\\mu \\to A_\\mu + \\partial_\\mu \\Lambda$.");
  W("classical-field-theory", "$\\mathcal{L}_{\\text{EM}}",
    "$\\mathcal L_\\text{EM}$ = electromagnetic Lagrangian density. $F_{\\mu\\nu}$ = field strength. $F^{\\mu\\nu} = g^{\\mu\\alpha}g^{\\nu\\beta}F_{\\alpha\\beta}$ = with raised indices. THE simplest Lorentz- and gauge-invariant Lagrangian. Variation gives Maxwell's equations.");

  // ----- SYMMETRIES-NOETHER -----
  W("symmetries-noether", "Translation $\\Rightarrow$",
    "TRANSLATIONAL symmetry: physics is the same if you shift the origin. Noether → linear momentum conservation. WORKED EXAMPLE: an isolated rocket's total momentum is conserved because empty space looks the same everywhere (translational invariance). Exhaust gas and rocket body acquire equal-and-opposite momentum.");
  W("symmetries-noether", "Rotation $\\Rightarrow$",
    "ROTATIONAL symmetry: physics is the same in all directions. Noether → angular momentum conservation. WORKED EXAMPLE: planetary orbits stay in a plane because the gravitational force is rotationally symmetric about the Sun. A figure skater spinning faster as she pulls her arms in: $L = I\\omega$ stays constant, so smaller $I$ means larger $\\omega$.");
  W("symmetries-noether", "Time translation",
    "TIME translation symmetry: physics is the same now as it was yesterday. Noether → energy conservation. WORKED EXAMPLE: in cosmology, the expanding universe BREAKS time-translation symmetry — and photon energy redshifts (no longer conserved in the usual sense). For lab experiments, time invariance is exact.");
  W("symmetries-noether", "Global $U(1)",
    "$U(1)$ = abelian Lie group of complex phase rotations $\\psi \\to e^{i\\theta}\\psi$. GLOBAL: $\\theta$ is constant in spacetime. Noether → electric charge conservation. CONSERVED current $j^\\mu = i(\\psi^*\\partial^\\mu\\psi - \\psi\\partial^\\mu\\psi^*)$. WORKED EXAMPLE: in QM, $\\rho = |\\psi|^2$ and $\\vec j = (\\hbar/m)\\text{Im}(\\psi^*\\nabla\\psi)$ satisfy continuity $\\partial_t\\rho + \\nabla\\cdot\\vec j = 0$.");
  W("symmetries-noether", "Lorentz $\\Rightarrow$",
    "LORENTZ symmetry: physics is the same in all inertial frames (rotations + boosts). Noether → conservation of stress-energy tensor $\\partial_\\mu T^{\\mu\\nu} = 0$. ENCODES both energy AND momentum conservation. WORKED EXAMPLE: in GR, $T^{\\mu\\nu}$ sources spacetime curvature in Einstein's equations; its conservation is automatic (Bianchi identity).");
  W("symmetries-noether", "Gauge symmetry",
    "LOCAL (gauge) symmetry: $\\theta$ varies with spacetime point. Noether's SECOND theorem → identity, not new conservation law. INSTEAD, forces gauge bosons (photon, gluons) to be massless (broken by Higgs in electroweak theory). KEY structural principle of the Standard Model.");

  // ----- IDENTICAL PARTICLES -----
  W("identical-particles", "Bosons: symmetric",
    "BOSON: a particle whose multi-particle wavefunction is SYMMETRIC under exchange of any two identical particles: $\\Psi(\\ldots, i, \\ldots, j, \\ldots) = +\\Psi(\\ldots, j, \\ldots, i, \\ldots)$. INTEGER spin ($0, 1, 2, \\ldots$). EXAMPLES: photon, gluon, W$^\\pm$, Z, Higgs, $^4$He nucleus. CONSEQUENCE: many bosons can occupy the same quantum state — basis of lasers, BEC, superfluid helium-4.");
  W("identical-particles", "Fermions: antisymmetric",
    "FERMION: wavefunction picks up a minus sign under particle exchange: $\\Psi(\\ldots, i, \\ldots, j, \\ldots) = -\\Psi(\\ldots, j, \\ldots, i, \\ldots)$. HALF-INTEGER spin ($1/2, 3/2, \\ldots$). EXAMPLES: electron, quark, neutrino, proton, neutron, $^3$He nucleus. CONSEQUENCE: PAULI exclusion — no two fermions in the same state. WORKED EXAMPLE: two electrons cannot share both the same spatial orbital AND spin state — basis of atomic shell structure.");
  W("identical-particles", "Bose-Einstein:",
    "$n(E)$ = average occupation of a single-particle state at energy $E$ in thermal equilibrium. $\\mu$ = chemical potential (energy cost of adding one boson). $k_B$ = Boltzmann constant. $T$ = absolute temperature. DIVERGES as $E \\to \\mu$ — basis of Bose-Einstein condensation. WORKED EXAMPLE: photons in a cavity at temperature $T$ obey BE with $\\mu = 0$ → Planck blackbody distribution.");
  W("identical-particles", "Fermi-Dirac:",
    "$n(E)$ = average occupation. $\\mu$ = chemical potential = Fermi energy at $T = 0$. $k_B, T$ = Boltzmann, temperature. BOUNDED in $[0, 1]$ — Pauli. AT $T = 0$: step function (filled below $\\mu$, empty above). WORKED EXAMPLE: electrons in copper at room temperature have $\\mu \\approx 7$ eV, much greater than $k_B T \\approx 0.026$ eV → essentially the $T=0$ step function with thin thermal tail. Explains metallic conductivity, specific heat.");
  W("identical-particles", "Spin-statistics theorem",
    "PAULI 1940. In relativistic QFT: integer-spin particles MUST obey Bose statistics; half-integer MUST obey Fermi. PROOF requires causality + positive energy. Otherwise: instabilities or violations of causality. WORKED EXAMPLE: photon (spin 1) is a boson — lasers possible. Electron (spin 1/2) is a fermion — atomic structure possible. Can't be otherwise.");

  // ----- PERTURBATION THEORY -----
  W("perturbation-theory", "$H = H_0",
    "$H$ = total Hamiltonian. $H_0$ = unperturbed Hamiltonian (you know its eigenstates and eigenvalues). $H'$ = perturbation. $\\lambda$ = bookkeeping parameter (often set to 1 at the end). EXPAND eigenstates and eigenvalues as power series in $\\lambda$. WORKED EXAMPLE: hydrogen in weak external electric field $\\vec E$ — $H_0$ is the Coulomb Hamiltonian, $H' = -e\\vec E \\cdot \\vec r$ is the Stark perturbation.");
  W("perturbation-theory", "$E_n^{(1)}",
    "$E_n^{(1)}$ = first-order energy correction for state $n$. $|n\\rangle$ = unperturbed eigenstate of $H_0$. $H'$ = perturbation. JUST the expectation value of the perturbation in the unperturbed state. WORKED EXAMPLE: hydrogen $|1s\\rangle$ ground state in uniform field $\\vec E$: $E_1^{(1)} = \\langle 1s| -eEz|1s\\rangle = 0$ by symmetry (1s is spherical, $z$ is odd). So no linear Stark effect for ground state.");
  W("perturbation-theory", "$|n^{(1)}\\rangle",
    "$|n^{(1)}\\rangle$ = first-order wavefunction correction. SUM mixes in OTHER unperturbed states with weight given by matrix element / energy gap. WORKED EXAMPLE: ground state of harmonic oscillator with cubic perturbation $\\lambda x^3$ — mixes in mostly $|1\\rangle$ (allowed by selection rules), giving energy shift only at 2nd order.");
  W("perturbation-theory", "$E_n^{(2)}",
    "$E_n^{(2)}$ = second-order energy correction. $H'_{mn} = \\langle m | H' | n \\rangle$ = matrix element. SUM over all other unperturbed states. ALWAYS NEGATIVE for ground state (level repulsion). WORKED EXAMPLE: quadratic Stark effect in hydrogen ground state has $E^{(2)} \\propto -|\\vec E|^2$ — polarizability of hydrogen.");
  W("perturbation-theory", "Degenerate:",
    "DEGENERATE perturbation theory. When multiple unperturbed states share an energy, naive PT fails (small denominators). FIX: diagonalize $H'$ within the degenerate subspace first. The eigenvalues become first-order corrections. WORKED EXAMPLE: linear Stark effect in hydrogen $n=2$ — 4 degenerate states (2s, 2p_x, 2p_y, 2p_z) split into 4 levels in an electric field due to 2s-2p mixing.");

  // ----- SCATTERING THEORY -----
  W("scattering-theory", "$d\\sigma/d\\Omega",
    "$d\\sigma/d\\Omega$ = differential cross section (area per solid angle, units m²/sr). $f(\\theta)$ = scattering amplitude (complex-valued). $\\theta$ = scattering angle from incoming beam direction. WORKED EXAMPLE: in a typical experiment, count detector events per second per area, divide by incident beam flux and target density.");
  W("scattering-theory", "Rutherford:",
    "RUTHERFORD scattering: Coulomb potential between point charges. $\\theta$ = scattering angle. $1/\\sin^4(\\theta/2)$ singularity at small angles (large impact parameters). ORIGIN: Rutherford 1911, used $\\alpha$ particles on gold foil to discover the atomic nucleus. WORKED EXAMPLE: backward scattering ($\\theta = \\pi$) of $\\alpha$ from atomic electrons would be impossible classically — but possible from a tiny massive nucleus.");
  W("scattering-theory", "Partial waves:",
    "PARTIAL wave expansion. $\\ell = 0, 1, 2, \\ldots$ = orbital angular momentum quantum number. $\\delta_\\ell$ = phase shift in $\\ell$ channel. $P_\\ell$ = Legendre polynomial. $k$ = wavenumber. USEFUL at low energies or short-range potentials, where only a few partial waves contribute. WORKED EXAMPLE: hard-sphere scattering at low energy is dominated by s-wave ($\\ell = 0$). $\\delta_0 \\to -ka$ where $a$ = scattering length.");
  W("scattering-theory", "Mean free path:",
    "$\\lambda$ = mean free path (m). $n$ = number density of scatterers (m$^{-3}$). $\\sigma$ = scattering cross section (m²). AVERAGE distance traveled between scatterings. WORKED EXAMPLE: photon in the Sun's core: $n \\sim 10^{32}$ m$^{-3}$, $\\sigma \\sim 10^{-29}$ m² → $\\lambda \\sim 10^{-3}$ m. Photon takes $\\sim 10^5$ years random-walking to escape from the Sun.");

  // ----- DENSITY MATRICES -----
  W("density-matrices", "$\\rho = |\\psi\\rangle",
    "$\\rho$ = density matrix (Hermitian, positive semidefinite, trace 1). $|\\psi\\rangle$ = a pure state (state vector). FOR pure states: $\\rho^2 = \\rho$ (idempotent). WORKED EXAMPLE: $|\\psi\\rangle = (1/\\sqrt 2)(|0\\rangle + |1\\rangle)$ gives $\\rho = (1/2)\\begin{pmatrix}1 & 1\\\\1 & 1\\end{pmatrix}$ — off-diagonal coherence terms.");
  W("density-matrices", "$\\rho = \\sum p_i",
    "$\\rho$ = mixed-state density matrix. $p_i$ = classical probabilities (nonnegative, sum to 1). $|\\psi_i\\rangle$ = pure states (not necessarily orthogonal). ARISES from: classical statistical mixture, or tracing out an environment from a larger entangled state. WORKED EXAMPLE: 50/50 mixture of $|0\\rangle$ and $|1\\rangle$ gives $\\rho = (I/2)$ — maximally mixed; off-diagonal terms zero (no coherence).");
  W("density-matrices", "$\\text{tr}(\\rho)",
    "$\\text{tr}(\\rho) = 1$: probabilities sum to 1. $\\rho \\succeq 0$: positive semidefinite (all eigenvalues $\\geq 0$, so probabilities are non-negative). DEFINES the convex set of valid density matrices.");
  W("density-matrices", "Pure iff",
    "$\\rho^2 = \\rho$ characterizes pure states; equivalent to $\\text{tr}(\\rho^2) = 1$. The quantity $\\text{tr}(\\rho^2) \\in [1/d, 1]$ is called PURITY ($d$ = Hilbert space dim). WORKED EXAMPLE: maximally mixed qubit $\\rho = I/2$ has $\\text{tr}(\\rho^2) = 1/2$ (lower bound for 2D).");
  W("density-matrices", "$\\rho_A = \\text{tr}_B",
    "$\\rho_{AB}$ = density matrix of composite system $A \\otimes B$. $\\rho_A$ = REDUCED density matrix for subsystem $A$, obtained by PARTIAL TRACE over $B$. WORKED EXAMPLE: Bell state $|\\Phi^+\\rangle = (|00\\rangle + |11\\rangle)/\\sqrt 2$ is PURE on $AB$, but tracing out $B$ gives $\\rho_A = I/2$ — maximally mixed. Source of entanglement entropy.");
  W("density-matrices", "Lindblad:",
    "LINDBLAD master equation: most general MARKOVIAN dynamics consistent with positivity and trace preservation. $H$ = Hamiltonian (coherent dynamics). $L_k$ = Lindblad jump operators (dissipative dynamics, like spontaneous emission). USED in quantum optics (cavity decay), quantum information (decoherence), open quantum systems generally.");

  // ----- PATH INTEGRALS -----
  W("path-integrals", "$\\langle x_f |",
    "Quantum-mechanical amplitude to propagate from $x_i$ to $x_f$ in time $t$. $H$ = Hamiltonian. $\\hbar$ = reduced Planck. $\\mathcal D x$ = formal measure over all paths $x(\\tau)$ with $x(0) = x_i, x(t) = x_f$. $S[x]$ = classical action along path. WEIGHT each path by $e^{iS/\\hbar}$ and integrate. ORIGIN: Feynman PhD thesis (1942-48).");
  W("path-integrals", "$S = \\int L\\,dt$",
    "$S$ = action (J·s). $L = T - V$ = Lagrangian (kinetic minus potential energy). Same definition as in classical mechanics. WORKED EXAMPLE: free particle from origin to $x$ in time $t$: classical path is straight line at speed $v = x/t$, action $S_\\text{cl} = mx^2/(2t)$.");
  W("path-integrals", "Classical limit:",
    "When $S \\gg \\hbar$: stationary-phase approximation. Only paths with $\\delta S = 0$ (classical paths) contribute coherently; others cancel by destructive interference. RECOVERS Euler-Lagrange equations. WORKED EXAMPLE: a baseball follows a parabolic trajectory because the action of any other path is enormously larger than $\\hbar$ → quantum interference exponentially suppresses them.");
  W("path-integrals", "Free particle:",
    "$K(x_f, x_i; t)$ = free-particle propagator. $m$ = mass. $\\hbar$ = reduced Planck. $t$ = propagation time. EXACTLY computable: the integral is Gaussian. PHASE depends only on the classical action; magnitude depends only on $t$. WORKED EXAMPLE: $|K|^2 = m/(2\\pi\\hbar t)$ — uniform in $x_f - x_i$ (free particles spread).");
  W("path-integrals", "Euclidean (Wick):",
    "WICK rotation: $t \\to -i\\tau$ (imaginary time). $e^{iS/\\hbar} \\to e^{-S_E/\\hbar}$ where $S_E$ = Euclidean action (positive). CONNECTS quantum mechanics in real time to statistical mechanics at temperature $T = \\hbar/(k_B \\tau)$. BASIS of lattice QFT computations.");
  W("path-integrals", "Functional integral",
    "$\\mathcal D x$ = heuristic 'sum over all paths' measure. RIGOROUSLY defined via lattice discretization (chop $[0, t]$ into $N$ steps, integrate over $x$ at each step, take $N \\to \\infty$). In QM: well-defined for many cases. In QFT: requires renormalization.");

  // ----- QUANTUM INFORMATION -----
  W("quantum-information", "$|\\psi\\rangle = \\alpha|0\\rangle",
    "$|\\psi\\rangle$ = arbitrary qubit state. $|0\\rangle, |1\\rangle$ = computational basis states (e.g., spin-down/up or two atomic levels). $\\alpha, \\beta$ = complex amplitudes. NORMALIZATION condition. UNLIKE classical bit: arbitrary superposition possible. WORKED EXAMPLE: $|+\\rangle = (|0\\rangle + |1\\rangle)/\\sqrt 2$ — equal superposition.");
  W("quantum-information", "Bloch sphere:",
    "Parametrization of pure qubit states on a 2-sphere. $\\theta \\in [0, \\pi]$ = polar angle. $\\phi \\in [0, 2\\pi)$ = azimuthal angle. NORTH pole ($\\theta = 0$): $|0\\rangle$. SOUTH pole: $|1\\rangle$. EQUATOR: equal superpositions. WORKED EXAMPLE: $|+\\rangle$ at $(\\theta = \\pi/2, \\phi = 0)$; $|-\\rangle$ at $(\\pi/2, \\pi)$.");
  W("quantum-information", "Bell:",
    "FOUR Bell states form a basis of maximally entangled two-qubit states. $|\\Phi^\\pm\\rangle = (|00\\rangle \\pm |11\\rangle)/\\sqrt 2$. $|\\Psi^\\pm\\rangle = (|01\\rangle \\pm |10\\rangle)/\\sqrt 2$. CANNOT be written as products of single-qubit states — quantum entanglement.");
  W("quantum-information", "Hadamard:",
    "$H$ = Hadamard gate, $H = (1/\\sqrt 2)\\begin{pmatrix}1 & 1\\\\1 & -1\\end{pmatrix}$. CREATES superposition from a basis state. KEY ingredient in most quantum algorithms (Shor, Grover, etc.). WORKED EXAMPLE: $H|0\\rangle = |+\\rangle$, $H|1\\rangle = |-\\rangle$. $H \\otimes H \\otimes \\ldots \\otimes H$ applied to $|00\\ldots0\\rangle$ gives uniform superposition over all $2^n$ basis states.");
  W("quantum-information", "CNOT:",
    "CNOT (Controlled-NOT) gate. $|c\\rangle$ = control qubit. $|t\\rangle$ = target qubit. $\\oplus$ = XOR. FLIPS target iff control is $|1\\rangle$. UNIVERSAL: $H$, T (phase $\\pi/4$), and CNOT generate any quantum circuit. WORKED EXAMPLE: $|10\\rangle \\to |11\\rangle$. Acting on $(|0\\rangle + |1\\rangle) \\otimes |0\\rangle / \\sqrt 2 \\to (|00\\rangle + |11\\rangle)/\\sqrt 2$ — creates a Bell state.");
  W("quantum-information", "Shor's",
    "SHOR's algorithm factors $n$-digit integers in time polynomial in $n$. CLASSICAL best known: exponential in $n^{1/3}$. THREAT to RSA cryptography. WORKED EXAMPLE: factoring a 2048-bit RSA modulus would take far longer than the age of the universe classically, but polynomially fast on a quantum computer.");
  W("quantum-information", "Grover:",
    "GROVER's algorithm searches an unstructured database of $N$ items in $O(\\sqrt N)$ queries. CLASSICAL: $O(N)$. QUADRATIC speedup (not exponential). WORKED EXAMPLE: search $10^9$ items: $\\sim 3\\times10^4$ quantum queries vs $5\\times10^8$ classical (on average).");

  // ----- RENORMALIZATION -----
  W("renormalization", "$g_{\\text{bare}}",
    "$g_\\text{bare}$ = bare coupling (infinite in original Lagrangian). $g_R$ = renormalized (physical, finite) coupling. $\\delta g$ = counterterm absorbing the infinity. CONCEPT: rewrite the divergent theory in terms of physical (measured) couplings, which are finite. WORKED EXAMPLE: in QED, bare electron charge is infinite; physical charge $e \\approx 1.6\\times10^{-19}$ C is measured.");
  W("renormalization", "$\\beta(g)",
    "$\\beta(g)$ = beta function — how the renormalized coupling changes with energy scale. $\\mu$ = renormalization scale (energy). DIFFERENTIAL equation describing the RUNNING coupling. WORKED EXAMPLE: QED $\\beta(\\alpha) = +2\\alpha^2/(3\\pi)$ at one loop — coupling grows with energy.");
  W("renormalization", "QED: $\\beta > 0",
    "QED beta function is POSITIVE → coupling $\\alpha$ GROWS at high energies. PHYSICAL: vacuum polarization (virtual e$^+$e$^-$ pairs) screens the bare charge. WORKED EXAMPLE: $\\alpha$ at low energy is $1/137.036$; at the Z boson mass (91 GeV), $\\alpha \\approx 1/128$ — measurably bigger.");
  W("renormalization", "QCD: $\\beta < 0",
    "QCD beta function is NEGATIVE → coupling SHRINKS at high energies. CALLED asymptotic freedom. WORKED EXAMPLE: at high energies (e.g., deep inelastic scattering), quarks behave almost as free particles ($\\alpha_s$ small); at low energies, $\\alpha_s$ blows up → confinement. NOBEL 2004 to Gross, Wilczek, Politzer.");
  W("renormalization", "Wilsonian RG:",
    "WILSONIAN renormalization group. Integrate out high-momentum (short-distance) modes; track how effective Lagrangian flows. CONCEPTUAL revolution: renormalization is COARSE-GRAINING, not hiding infinities. UNIFIES critical phenomena with QFT (Wilson, Nobel 1982).");
  W("renormalization", "Fixed points:",
    "Couplings at which $\\beta(g^*) = 0$ — the theory is SCALE INVARIANT. UV fixed points (asymptotic freedom) and IR fixed points (low-energy attractors). WORKED EXAMPLES: free theory $g = 0$ is a Gaussian fixed point. Wilson-Fisher fixed point describes 3D Ising universality class.");

  // ----- RADIATION THEORY -----
  W("radiation-theory", "Synchrotron:",
    "RELATIVISTIC charged particle moving in a magnetic field radiates SYNCHROTRON light. $\\gamma = 1/\\sqrt{1 - v^2/c^2}$ = Lorentz factor. CHARACTERISTIC frequency $\\omega_c \\sim \\gamma^3 \\omega_B$ where $\\omega_B = eB/m$. BEAMED into a cone of opening angle $\\sim 1/\\gamma$. WORKED EXAMPLE: 1 GeV electron ($\\gamma \\sim 2000$) in $B = 1$ T radiates in keV X-ray range, in a beam of $\\sim 0.03°$ opening.");
  W("radiation-theory", "Retarded time:",
    "$t$ = observation time. $t'$ = retarded time (when the radiation was emitted). $r$ = distance from source to observer at retarded time. $c$ = speed of light. CAUSALITY: radiation observed now was emitted earlier by light-travel time $r/c$. WORKED EXAMPLE: sunlight you see now left the Sun 8 minutes ago; $r = 1$ AU, $r/c = 500$ s.");
  W("radiation-theory", "Multipole expansion:",
    "Far-field radiation pattern decomposed by angular momentum $\\ell$. Each $\\ell$-multipole falls as $1/r$ at large distance, but is suppressed by $(\\omega R/c)^\\ell$ for source of size $R$. WORKED EXAMPLE: atomic dipole transition ($\\ell = 1$) is dominant; quadrupole ($\\ell = 2$) is $\\sim (\\omega R/c)^2 \\sim 10^{-6}$ times weaker for visible light from atoms.");
  W("radiation-theory", "Abraham-Lorentz:",
    "$F_\\text{rad}$ = radiation reaction force on an accelerating charge (N). $q$ = charge. $\\epsilon_0$ = vacuum permittivity. $c$ = light speed. $\\dot{\\vec a}$ = derivative of acceleration (jerk). PROBLEMATIC: predicts pre-acceleration and runaway solutions — sign of incompleteness. RESOLVED in modern relativistic treatments. RELEVANT for very strong fields and synchrotrons.");

  // ----- EM WAVES IN MATTER -----
  W("em-waves-matter", "$n = \\sqrt{\\varepsilon_r",
    "$n$ = refractive index of medium (dimensionless, $\\geq 1$ for ordinary materials). $\\epsilon_r$ = relative permittivity (dielectric constant). $\\mu_r$ = relative permeability ($\\approx 1$ for non-magnetic materials). $v_\\text{light in medium} = c/n$. WORKED EXAMPLES: water $n \\approx 1.33$; glass $n \\approx 1.5$; diamond $n \\approx 2.42$.");
  W("em-waves-matter", "$v_p = \\omega/k",
    "$v_p$ = phase velocity (speed of wavefronts). $\\omega$ = angular frequency (rad/s). $k$ = wavenumber (rad/m). NOT necessarily the speed of energy or information transport. WORKED EXAMPLE: in a waveguide above cutoff, $v_p > c$ — but no causality violation (it's just the speed of wavefronts).");
  W("em-waves-matter", "$v_g = d\\omega/dk",
    "$v_g$ = group velocity (speed of a wave-packet envelope). $\\omega(k)$ = dispersion relation. CARRIES energy and information. WORKED EXAMPLE: pulses of light in optical fibers travel at $v_g$, which depends on wavelength → dispersion limits data rate.");
  W("em-waves-matter", "Plasma frequency:",
    "$\\omega_p$ = plasma frequency (rad/s) = $\\sqrt{ne^2/(m\\epsilon_0)}$. BELOW $\\omega_p$: EM waves are reflected (medium 'opaque'). ABOVE: waves propagate (medium 'transparent'). WORKED EXAMPLE: Earth's ionosphere has $\\omega_p \\sim 2\\pi \\times 10$ MHz. AM radio (1 MHz) reflects → long-distance propagation. FM radio (100 MHz) passes through → line-of-sight only.");

  // ----- LASERS -----
  W("lasers", "$A_{21}, B_{12}",
    "EINSTEIN coefficients (1916). $A_{21}$ = spontaneous emission rate from upper level 2 to lower level 1 (1/s). $B_{12}$ = stimulated absorption coefficient. $B_{21}$ = stimulated emission coefficient. $g_1, g_2$ = degeneracies. $h\\nu^3/c^3$ ratio derived from detailed balance with blackbody radiation. WORKED EXAMPLE: laser-grade transitions have small $A_{21}$ (long-lived upper states) so population inversion is achievable.");
  W("lasers", "$L_c",
    "$L_c$ = coherence length (m). $c$ = speed of light. $\\Delta\\nu$ = laser linewidth (Hz). $L_c$ = INVERSE of linewidth (in spatial terms). MAXIMUM path-length difference over which laser light can still interfere with itself. WORKED EXAMPLE: HeNe laser $\\Delta\\nu \\sim 1$ MHz → $L_c \\sim 300$ m. Stabilized lasers reach $L_c \\sim 10^6$ km (used in LIGO).");
  W("lasers", "He-Ne:",
    "$632.8$ nm = wavelength of the red HeNe laser line. The TRANSITION is in NEON; HELIUM is a pump (electron impact excites He metastable states, energy then transfers to Ne). FIRST gas laser (1961). Used in alignment, holography, supermarket barcode scanners (historically).");
  W("lasers", "Cavity modes:",
    "$\\nu_n$ = $n$-th cavity mode frequency. $n$ = positive integer. $c$ = speed of light. $L$ = optical length of cavity. CAVITY supports only frequencies where round-trip phase is multiple of $2\\pi$. SPACING $c/(2L)$ between adjacent modes. WORKED EXAMPLE: $L = 1$ m → mode spacing 150 MHz. Laser may oscillate on many modes unless mode-selection (etalon) is used.");
  W("lasers", "Q-switched",
    "Q-SWITCHING: spoil cavity Q to build up large inversion, then suddenly increase Q → giant ns pulse. MODE-LOCKING: phase-lock many longitudinal modes → fs pulse train (1 / mode spacing apart). WORKED EXAMPLE: Q-switched YAG laser delivers $\\sim 10$ ns, $\\sim 100$ mJ pulses; Ti:sapphire mode-locked laser delivers $\\sim 10$ fs pulses at $\\sim 80$ MHz repetition rate.");

  // ----- QUANTUM OPTICS -----
  W("quantum-optics", "$|\\alpha\\rangle =",
    "$|\\alpha\\rangle$ = coherent state, eigenstate of annihilation operator $\\hat a$ with eigenvalue $\\alpha$. $\\alpha$ = complex amplitude. $|n\\rangle$ = number (Fock) states. WORKED EXAMPLE: laser output is well-approximated by a coherent state. $|\\alpha|^2$ = mean photon number; Poisson statistics in photon counting.");
  W("quantum-optics", "Poisson statistics",
    "$\\langle n\\rangle = |\\alpha|^2$ = mean photon number. $\\text{Var}(n) = |\\alpha|^2$ = variance EQUALS mean. SHOT-noise limit. CLASSICAL light. WORKED EXAMPLE: laser beam delivering 1 photon per μs (on average) shows Poisson variance — detection times are uncorrelated.");
  W("quantum-optics", "$g^{(2)}(0)",
    "$g^{(2)}(0)$ = second-order correlation at zero delay (intensity correlation). $g^{(2)}(0) = 2$: thermal/chaotic light (bunched). $g^{(2)}(0) = 1$: coherent (Poisson). $g^{(2)}(0) < 1$: antibunched (non-classical). WORKED EXAMPLE: single-atom fluorescence has $g^{(2)}(0) = 0$ — a single atom can emit only one photon at a time, then must re-excite.");
  W("quantum-optics", "Squeezed:",
    "$\\Delta x, \\Delta p$ = quadrature uncertainties (units of $\\hbar^{1/2}$). HEISENBERG bound $\\Delta x \\Delta p \\geq \\hbar/2$ saturated, but $\\Delta x$ reduced below shot-noise at cost of larger $\\Delta p$. WORKED EXAMPLE: LIGO injects squeezed light to reduce shot noise → factor-of-2 improvement in gravitational-wave sensitivity at high frequencies.");
  W("quantum-optics", "Jaynes-Cummings:",
    "JAYNES-CUMMINGS model: simplest cavity QED system, two-level atom coupled to a single cavity-mode field. $\\omega$ = atomic frequency = cavity frequency (resonance). $\\hat a, \\hat a^\\dagger$ = cavity-mode ladder operators. $\\hat\\sigma_\\pm$ = atomic raising/lowering operators. $g$ = coupling strength. EXHIBITS Rabi oscillations between atomic and photonic excitation.");

  // ----- AMO -----
  W("amo", "MOT:",
    "MAGNETO-OPTICAL TRAP. 6 counter-propagating red-detuned laser beams (3 pairs along Cartesian axes) + quadrupole magnetic field gradient. ATOMS scatter more photons from the beam they move toward → velocity damping. Magnetic gradient makes scattering POSITION-dependent → spatial confinement. WORKED EXAMPLE: rubidium MOT routinely traps $10^8 - 10^{10}$ atoms at $\\sim 100$ μK.");
  W("amo", "$T_c^{\\text{BEC}}",
    "$T_c$ = critical temperature for Bose-Einstein condensation. $n$ = atomic density. $\\hbar$ = reduced Planck. $m$ = atomic mass. $k_B$ = Boltzmann. PROPORTIONALITY constant is $\\sim 3.31$. WORKED EXAMPLE: $^{87}$Rb at $n = 10^{14}$ cm$^{-3}$ → $T_c \\sim 100$ nK. NOBEL 2001 to Cornell, Wieman, Ketterle for first BEC (1995).");
  W("amo", "$\\lambda_{dB}",
    "$\\lambda_{dB}$ = de Broglie wavelength of atoms (m). $h$ = Planck constant. $m$ = mass. $v$ = velocity (typically thermal). SETS scale of quantum coherence. WORKED EXAMPLE: rubidium at 1 μK has $v \\sim 1$ cm/s, $\\lambda_{dB} \\sim 0.6$ μm — already comparable to inter-particle spacing in typical traps. Quantum identical-particle effects dominate.");
  W("amo", "BEC when",
    "BEC criterion: phase-space density $n\\lambda_{dB}^3 \\gtrsim 2.612$ (numerical factor from Bose distribution). PHYSICAL: de Broglie wavelengths start to overlap. WORKED EXAMPLE: at $T \\sim T_c$, $n\\lambda_{dB}^3 \\sim 2.6$ — onset of condensation.");
  W("amo", "Atomic clock:",
    "$f_\\text{Cs} = 9{,}192{,}631{,}770$ Hz EXACTLY (definition of the second since 1967). CESIUM-133 hyperfine ground-state transition. MODERN optical clocks (Sr, Yb, Al$^+$) reach fractional accuracy $\\sim 10^{-18}$ — equivalent to losing 1 second in the age of the universe.");

  // ----- NONEQUILIBRIUM STATMECH -----
  W("nonequilibrium-statmech", "Boltzmann eq:",
    "BOLTZMANN equation. $f(\\vec x, \\vec v, t)$ = single-particle distribution function in phase space. $\\vec F$ = external force. RHS = collision integral describing scattering. EVOLUTION of a dilute classical gas out of equilibrium. WORKED EXAMPLE: derive Navier-Stokes equations as approximate moments of Boltzmann (Chapman-Enskog expansion).");
  W("nonequilibrium-statmech", "Relaxation:",
    "BHATNAGAR-GROSS-KROOK (1954) relaxation-time approximation. $f_0$ = local equilibrium distribution. $\\tau$ = relaxation time. SIMPLEST closure of the collision integral. WORKED EXAMPLE: in lattice Boltzmann methods, the relaxation form makes simulation tractable.");
  W("nonequilibrium-statmech", "H-theorem:",
    "BOLTZMANN's H-theorem (1872). $H = \\int f \\ln f\\,d^3 v\\,d^3 x$. SHOWS that $H$ decreases monotonically (equivalent to entropy increasing) for any process described by the Boltzmann equation with Stosszahlansatz. EXPLAINS the second law from microscopic dynamics — but introduces irreversibility via assumption of molecular chaos.");
  W("nonequilibrium-statmech", "FDT:",
    "FLUCTUATION-DISSIPATION theorem. $\\chi''(\\omega)$ = imaginary part of response function (dissipative). $S(\\omega)$ = spectrum of equilibrium fluctuations. $\\beta = 1/(k_BT)$. RELATES equilibrium fluctuations to non-equilibrium response. WORKED EXAMPLE: Johnson-Nyquist noise in resistor $\\langle V^2\\rangle = 4k_BT R \\Delta f$ — thermal voltage fluctuations from dissipation.");

  // ----- SUPERCONDUCTIVITY -----
  W("superconductivity", "$T_c$:",
    "$T_c$ = critical temperature (K). BELOW $T_c$: zero resistance, perfect diamagnetism (Meissner effect). WORKED EXAMPLES: Hg 4.15 K (1911 Onnes); Nb 9.3 K; MgB$_2$ 39 K; YBa$_2$Cu$_3$O$_7$ (YBCO) 92 K (above LN$_2$ at 77 K); H$_3$S 203 K at 155 GPa pressure.");
  W("superconductivity", "Meissner:",
    "MEISSNER effect (1933): superconductor expels magnetic flux from its interior below $T_c$. NOT just perfect conductivity — even if field is applied BEFORE cooling, it's expelled at $T_c$. WORKED EXAMPLE: magnet levitates above superconductor; image currents in the SC repel the magnet.");
  W("superconductivity", "$\\lambda_L$",
    "$\\lambda_L$ = London penetration depth (m). DEPTH over which magnetic field penetrates the superconductor before being screened. WORKED EXAMPLES: pure metals $\\lambda_L \\sim 100$ nm. Cuprates: shorter. Field decays exponentially with depth.");
  W("superconductivity", "$\\xi$:",
    "$\\xi$ = coherence length (m). SCALE over which the superconducting order parameter varies. WORKED EXAMPLES: Al $\\xi \\sim 1.6$ μm. Nb $\\xi \\sim 40$ nm. Cuprates: $\\xi \\sim 1$ nm (extremely short — sign of strong correlations). $\\kappa = \\lambda_L/\\xi$ distinguishes type I ($\\kappa < 1/\\sqrt 2$) from type II.");
  W("superconductivity", "$2\\Delta(0)",
    "$2\\Delta(0)$ = energy gap at $T = 0$ (J). $k_B T_c$ = thermal energy at critical temperature. UNIVERSAL BCS ratio 3.5. WORKED EXAMPLE: Nb $T_c = 9.3$ K → $\\Delta \\approx 1.4$ meV. Tunneling spectroscopy measures the gap directly.");
  W("superconductivity", "Josephson AC:",
    "$\\omega$ = AC Josephson frequency (rad/s). $e$ = electron charge. $V$ = DC voltage across Josephson junction. $\\hbar$ = reduced Planck. APPLY DC voltage → AC current at frequency proportional to voltage. WORKED EXAMPLE: 1 μV across a junction → 484 MHz. Used to define the volt and as ultra-precise frequency-voltage standard.");
  W("superconductivity", "Flux quantum:",
    "$\\Phi_0 = h/(2e) \\approx 2.07 \\times 10^{-15}$ Wb. MAGNETIC flux through superconducting loops is QUANTIZED in units of $\\Phi_0$. The factor of 2 reflects Cooper-pair charge $2e$. WORKED EXAMPLE: SQUID (superconducting quantum interference device) detects flux changes to $\\Phi_0/10^6$ — most sensitive magnetometer.");

  // ----- QUANTUM HALL / TOPOLOGICAL -----
  W("quantum-hall-topological", "$\\sigma_{xy}",
    "$\\sigma_{xy}$ = Hall conductivity (S = $\\Omega^{-1}$). $\\nu$ = filling factor (integer or fraction). $e, h$ = elementary charge, Planck constant. QUANTIZED. WORKED EXAMPLE: at $\\nu = 1$, $\\sigma_{xy} = e^2/h$, $R_{xy} = h/e^2 \\approx 25813$ Ω (von Klitzing constant) — measured to better than 1 part in $10^9$, used as resistance standard.");
  W("quantum-hall-topological", "$\\nu = nh/(eB)",
    "$\\nu$ = filling factor. $n$ = electron density (1/m²). $h, e$ = Planck, electron charge. $B$ = magnetic field (T). RATIO of electron density to magnetic flux density per Landau level. WORKED EXAMPLE: $n = 2.4\\times10^{15}$ m$^{-2}$, $B = 10$ T → $\\nu = 1$. Adjust $B$ to sweep through plateaus.");
  W("quantum-hall-topological", "FQHE:",
    "FRACTIONAL Quantum Hall Effect. LAUGHLIN states at $\\nu = 1/m$ ($m$ odd integer). Strongly interacting many-body state with quasiparticles of FRACTIONAL charge $e/m$. NOBEL 1998 to Tsui, Stormer, Laughlin. WORKED EXAMPLE: $\\nu = 1/3$ state — quasiparticles carry charge $e/3$, obey anyonic exchange statistics.");
  W("quantum-hall-topological", "Chern",
    "CHERN number = topological invariant of a band (integer). Computed as integral of Berry curvature over Brillouin zone. PROTECTED: doesn't change under smooth deformations. WORKED EXAMPLE: integer QH conductance $\\sigma_{xy} = (e^2/h) \\times$ (total Chern number of filled bands). Why QH plateaus are so flat.");
  W("quantum-hall-topological", "Topological insulator:",
    "TOPOLOGICAL insulator: bulk is INSULATING (gapped), edges/surfaces are CONDUCTING (gapless). EDGE states protected by symmetry (typically time-reversal). WORKED EXAMPLES: HgTe quantum wells, Bi$_2$Se$_3$, Bi$_2$Te$_3$. Used as platforms for spintronics and proposed Majorana qubits.");

  // ----- PHONONS -----
  W("phonons", "1D chain:",
    "1D chain of $N$ identical atoms, mass $m$, connected by springs of constant $K$, spacing $a$. $q$ = wavenumber in first Brillouin zone $[-\\pi/a, \\pi/a]$. $\\omega(q)$ = phonon dispersion. WORKED EXAMPLE: at $q = 0$, $\\omega = 0$ (uniform translation, no restoring force). At $q = \\pi/a$ (zone boundary): $\\omega = 2\\sqrt{K/m}$ — maximum frequency; neighbors move opposite directions.");
  W("phonons", "Phonon = quantum",
    "PHONON = quantum of lattice vibrations. Just as photons are quanta of EM waves, phonons are quanta of acoustic waves in crystals. EACH phonon carries energy $\\hbar\\omega$ and crystal momentum $\\hbar \\mathbf k$. BOSE statistics. WORKED EXAMPLE: thermal phonons populate modes with $\\hbar\\omega \\lesssim k_BT$; this is the basis of specific heat in solids.");
  W("phonons", "Acoustic vs optical",
    "Crystals with $p$ atoms in the basis have $3p$ phonon branches per polarization (3 acoustic + $3p - 3$ optical). ACOUSTIC: $\\omega \\to 0$ at $\\mathbf k = 0$ (translation symmetry). OPTICAL: finite $\\omega$ at $\\mathbf k = 0$ (neighboring atoms move oppositely). WORKED EXAMPLE: NaCl has 1 transverse-acoustic + 1 longitudinal-acoustic + 1 LO + 2 TO branches. LO at $\\sim 25$ THz drives IR absorption.");
  W("phonons", "Brillouin zone:",
    "BRILLOUIN zone = Wigner-Seitz unit cell of the reciprocal lattice. PERIODICITY: all physics is periodic in $\\mathbf k$ with the reciprocal lattice — only the first BZ is independent. WORKED EXAMPLES: 1D chain BZ is $[-\\pi/a, \\pi/a]$. 2D square lattice BZ is a square. FCC BZ is the truncated octahedron.");

  // ----- STELLAR EVOLUTION -----
  W("stellar-evolution", "MS lifetime",
    "MAIN-SEQUENCE lifetime $\\propto M^{-2.5}$. $M$ = stellar mass in solar units. DERIVATION: lifetime $\\sim $ fuel/luminosity. Fuel $\\propto M$. Luminosity $L \\propto M^{3.5}$ (mass-luminosity relation). WORKED EXAMPLES: 10 $M_\\odot$ star: $\\sim 30$ Myr. Sun: $\\sim 10$ Gyr. 0.5 $M_\\odot$ star: $\\sim 50$ Gyr (longer than universe age — these K and M dwarfs have all survived).");
  W("stellar-evolution", "Hayashi track",
    "HAYASHI track: pre-main-sequence contraction phase. Protostar is fully convective and follows a nearly vertical line in the HR diagram at $T_\\text{surface} \\sim 4000$ K. WORKED EXAMPLE: Sun spent $\\sim 30$ Myr on the Hayashi track contracting before reaching the main sequence. T Tauri stars are observed today on this track.");
  W("stellar-evolution", "Sun's age:",
    "$\\sim 4.6$ Gyr = Sun's current age (from meteorite radiometric dating). $\\sim 10$ Gyr = total main-sequence lifetime (stellar models). The Sun is roughly HALFWAY through its hydrogen-burning phase. WORKED EXAMPLE: in $\\sim 5$ Gyr, the Sun will become a red giant, engulfing Mercury and possibly Venus.");
  W("stellar-evolution", "Main sequence:",
    "MAIN sequence: phase where the star fuses hydrogen into helium in its core via either the pp chain (low-mass) or the CNO cycle (high-mass). LONGEST phase of stellar life. WORKED EXAMPLE: 90% of stars in our galaxy are currently on the main sequence — including the Sun.");

  // ----- STELLAR NUCLEOSYNTHESIS -----
  W("stellar-nucleosynthesis", "CNO:",
    "CNO cycle: hydrogen → helium catalyzed by C, N, O nuclei. $T \\gtrsim 2\\times10^7$ K threshold. DOMINANT in stars more massive than $\\sim 1.3 M_\\odot$. WORKED EXAMPLE: Sun (core $T \\sim 1.5\\times10^7$ K) gets most energy from pp chain; CNO contributes only $\\sim 1\\%$. Stars of $1.5 M_\\odot$+: CNO dominates.");
  W("stellar-nucleosynthesis", "Triple-α:",
    "TRIPLE-alpha process: 3 $^4$He → $^{12}$C + 7.27 MeV. REQUIRES $T \\gtrsim 10^8$ K (red-giant cores). RESONANT through Hoyle state — predicted by Hoyle (1953) and later observed, a triumph of anthropic reasoning. WORKED EXAMPLE: all carbon in the universe (and hence all life) came from triple-α in red giant interiors.");
  W("stellar-nucleosynthesis", "r-process:",
    "RAPID neutron capture process. Neutrons captured FASTER than $\\beta^-$ decay. PRODUCES neutron-rich nuclei up to actinides (uranium, etc.). SITES: neutron star mergers (CONFIRMED in 2017 by GW170817 kilonova observations); possibly core-collapse supernovae. RESPONSIBLE for ~half of nuclei heavier than iron.");
  W("stellar-nucleosynthesis", "s-process:",
    "SLOW neutron capture process. Neutron capture rate much slower than $\\beta^-$ decay → walk up valley of stability. SITES: AGB stars (asymptotic giant branch). PRODUCES nuclei up to $^{209}$Bi. RESPONSIBLE for the other half of nuclei heavier than iron.");
  W("stellar-nucleosynthesis", "Solar metallicity:",
    "$Z_\\odot \\approx 0.014$ = fraction of solar mass in elements heavier than helium. REFERENCE value. POPULATION I stars: similar to solar (young, metal-rich). Pop II: $Z \\sim 10^{-3}$ to $10^{-4}$ (old, metal-poor). Pop III: hypothetical first stars with $Z = 0$.");

  // ----- COMPACT OBJECTS -----
  W("compact-objects", "$M_{Ch}",
    "$M_\\text{Ch} \\approx 1.44 M_\\odot$ = CHANDRASEKHAR mass. UPPER limit for white dwarf mass — above this, relativistic electron degeneracy can't support against gravity. ORIGIN: Chandrasekhar (1930, on the boat from India to England) — Nobel 1983. WORKED EXAMPLE: a WD accreting from a companion that reaches $M_\\text{Ch}$ explodes as a Type Ia supernova — standard candle for cosmology.");
  W("compact-objects", "NS radius:",
    "NEUTRON star radius $\\sim 10-12$ km. Mass $\\sim 1.4-2 M_\\odot$. DENSITY $\\sim 10^{17}$ kg/m³ — comparable to nuclear matter. SURFACE gravity $\\sim 10^{12} g_\\text{Earth}$. WORKED EXAMPLE: a teaspoon of neutron star matter would weigh $\\sim 10^{12}$ kg — more than Mt. Everest.");
  W("compact-objects", "$r_s = 2GM/c^2",
    "$r_s$ = Schwarzschild radius. $G$ = Newton's constant. $M$ = mass. $c$ = speed of light. BOUNDARY of a non-rotating black hole (event horizon). WORKED EXAMPLES: 1 $M_\\odot$: 3 km. 10 $M_\\odot$ stellar BH: 30 km. Sgr A* ($4\\times10^6 M_\\odot$): 0.08 AU. M87* ($6.5\\times10^9 M_\\odot$): 130 AU.");
  W("compact-objects", "$T_H",
    "$T_H$ = HAWKING temperature of black hole (K). $\\hbar, c, G, k_B$ = fundamental constants. $M$ = BH mass. WORKED EXAMPLES: 1 $M_\\odot$: $T_H \\sim 60$ nK (utterly undetectable). Primordial BH of $10^{12}$ kg: $T_H \\sim 10^{11}$ K — would emit gamma rays. UNOBSERVED in any astrophysical BH (overwhelmed by CMB).");
  W("compact-objects", "$S_{BH}",
    "$S_\\text{BH}$ = Bekenstein-Hawking entropy. $k_B$ = Boltzmann. $A$ = event horizon area. $\\ell_P = \\sqrt{\\hbar G/c^3} \\approx 1.6\\times10^{-35}$ m = Planck length. PROFOUND: entropy proportional to AREA, not volume → holographic principle. WORKED EXAMPLE: 1 $M_\\odot$ BH entropy $\\sim 10^{77} k_B$ — astronomically large.");
  W("compact-objects", "Sgr A* mass:",
    "SAGITTARIUS A* = supermassive black hole at center of Milky Way. Mass $\\approx 4.15\\times10^6 M_\\odot$ — measured by tracking orbits of nearby stars (S2, S0-2) over decades. Distance $\\approx 26{,}000$ ly. NOBEL 2020 to Genzel and Ghez. IMAGED by Event Horizon Telescope in 2022.");

  // ----- GALACTIC DYNAMICS -----
  W("galactic-dynamics", "Rotation curves:",
    "ORBITAL velocity $v(r)$ in disk galaxies stays nearly CONSTANT at large radii instead of falling as Kepler $v \\propto 1/\\sqrt r$. ORIGIN: Rubin et al. (1970s). CONCLUSION: massive dark matter halos extending far beyond visible disk. WORKED EXAMPLE: Milky Way rotation curve flat at $\\sim 220$ km/s out to $\\sim 50$ kpc, well beyond visible stellar disk at $\\sim 15$ kpc.");
  W("galactic-dynamics", "$M(r)",
    "$M(r)$ = total mass enclosed within radius $r$ (kg or $M_\\odot$). $v$ = circular orbital velocity at radius $r$. $G$ = Newton's constant. FROM Newtonian dynamics of circular orbit: $v^2/r = GM(r)/r^2$. WORKED EXAMPLE: at Sun's radius (8 kpc, $v = 220$ km/s): $M(<8\\text{ kpc}) \\sim 9\\times10^{10} M_\\odot$. At 100 kpc: $\\sim 10^{12} M_\\odot$ — most dark.");
  W("galactic-dynamics", "Faber-Jackson:",
    "FABER-JACKSON relation for elliptical galaxies. $L$ = luminosity. $\\sigma$ = central velocity dispersion. ORIGIN: Faber and Jackson (1976). REFINED to fundamental plane (3-parameter). PHYSICAL basis: virial relation + uniform mass-to-light ratio. WORKED EXAMPLE: massive elliptical with $\\sigma = 300$ km/s has $L \\sim 10^{11} L_\\odot$.");
  W("galactic-dynamics", "MW DM halo mass:",
    "Milky Way total mass within virial radius (~250 kpc) $\\sim 10^{12} M_\\odot$. ONLY a few percent is visible stars and gas; rest is dark. WORKED EXAMPLE: estimated from tracer dynamics — high-velocity stars, satellite galaxy orbits (LMC, Sagittarius dwarf), Gaia stellar kinematics — all converge.");
  W("galactic-dynamics", "Density wave theory:",
    "LIN-SHU (1964) density wave theory. SPIRAL ARMS are NOT material structures; they are density waves that propagate through the disk. STARS and gas pass through; the WAVE persists. EXPLAINS why arms are not wound up by differential rotation. WORKED EXAMPLE: in the Milky Way, the pattern speed of the spirals is $\\sim 25$ km/s/kpc — slower than disk rotation at 8 kpc.");

  // ----- BBN / CMB / INFLATION -----
  W("bbn-cmb-inflation", "Primordial He fraction:",
    "$Y_p \\approx 0.245$ = mass fraction of helium-4 produced in BBN (first $\\sim 3$ minutes after Big Bang). PREDICTED from baryon density, neutron lifetime, expansion rate. MATCHES observations in old metal-poor stars and primordial gas clouds. PILLAR of Big Bang cosmology.");
  W("bbn-cmb-inflation", "$T_{\\text{CMB}}",
    "$T_\\text{CMB} \\approx 2.725$ K = current CMB temperature. DISCOVERED 1965 by Penzias and Wilson — Nobel 1978. ORIGINATED at recombination ($z \\sim 1100$, $T \\sim 3000$ K); cooled by expansion factor of $\\sim 1100$. PERFECT blackbody — pre-Planck experiment.");
  W("bbn-cmb-inflation", "Recombination:",
    "$z \\sim 1100$ = redshift of recombination, $T \\sim 3000$ K. At this epoch, electrons combined with protons to form neutral hydrogen; universe became transparent. CMB photons last scattered HERE. UNIVERSE was $\\sim 380{,}000$ years old.");
  W("bbn-cmb-inflation", "Inflation:",
    "$\\sim 60$ e-folds = typical amount of inflationary expansion needed to solve horizon and flatness problems. ONE e-fold = factor of $e \\approx 2.72$ in scale factor. 60 e-folds = factor of $e^{60} \\sim 10^{26}$. WORKED EXAMPLE: a region the size of a proton expanded to $\\sim 1$ m in $\\sim 10^{-32}$ s.");
  W("bbn-cmb-inflation", "Scalar spectral index:",
    "$n_s \\approx 0.965$ measured by Planck. SPECTRAL TILT of the primordial scalar (density) perturbation spectrum: $P(k) \\propto k^{n_s - 1}$. SLIGHTLY less than 1 (red tilt) — agrees with simplest inflation models. EXACT scale invariance ($n_s = 1$) ruled out at $> 5\\sigma$.");
  W("bbn-cmb-inflation", "$\\Omega_b h^2",
    "$\\Omega_b$ = baryon density parameter (fraction of critical density). $h = H_0/100$. $\\Omega_b h^2 \\approx 0.022$ from CMB acoustic peaks AND independently from BBN deuterium abundance. AGREEMENT between two independent probes is a triumph of cosmology. CONSEQUENCE: baryons are only ~5% of universe; the rest is dark matter (~27%) and dark energy (~68%).");

  // ----- GRAVITATIONAL WAVES -----
  W("gravitational-waves", "$h \\sim",
    "$h$ = GW strain (dimensionless). $\\Delta L$ = induced change in length. $L$ = unperturbed length. TYPICAL astrophysical strain at Earth $h \\sim 10^{-21}$ — extraordinarily small. WORKED EXAMPLE: LIGO arms 4 km long → strain $h = 10^{-21}$ corresponds to $\\Delta L \\sim 4\\times10^{-18}$ m — smaller than a proton diameter.");
  W("gravitational-waves", "Quadrupole:",
    "$P$ = power radiated as GWs (W). $G, c$ = constants. $Q_{ij}$ = mass quadrupole moment tensor. THIRD time derivative — explains why GWs are so faint (high derivative order). DIPOLE radiation forbidden by momentum conservation.");
  W("gravitational-waves", "Speed: $c$",
    "GWs travel at the speed of light $c$. CONFIRMED by GW170817: binary neutron star merger, GW arrived 1.7 s before gamma-ray burst, after 130 million-year journey. SPEED deviation constrained to less than 1 part in $10^{15}$ — rules out many modified-gravity theories.");
  W("gravitational-waves", "Two polarizations:",
    "GR predicts exactly TWO GW polarization states: 'plus' ($h_+$) and 'cross' ($h_\\times$), differing by 45° rotation. TRANSVERSE: stretches and squeezes space perpendicular to propagation. SCALAR or vector polarizations (predicted by some modified gravity) constrained by LIGO/Virgo to be small.");
  W("gravitational-waves", "Chirp:",
    "$f$ = GW frequency. $t_c$ = coalescence time. FREQUENCY rises as $\\sim (t_c - t)^{-3/8}$ during inspiral. CALLED the 'chirp' — characteristic frequency-rising signal. WORKED EXAMPLE: GW150914 spent $\\sim 0.2$ s in LIGO band as frequency swept from $\\sim 35$ to $\\sim 250$ Hz before merger.");
  W("gravitational-waves", "GW150914:",
    "GW150914: first direct detection of gravitational waves on September 14, 2015 by LIGO. SOURCE: merger of two black holes of $\\sim 30 M_\\odot$ each, at distance $\\sim 1.3$ Gly. PEAK power $\\sim 3\\times10^{49}$ W — more than the rest of the observable universe combined for $\\sim 0.2$ s. NOBEL 2017 to Weiss, Barish, Thorne.");

  // ----- HIGH-ENERGY ASTROPHYSICS -----
  W("high-energy-astrophysics", "AGN",
    "AGN = Active Galactic Nucleus. MAXIMUM luminosity $\\sim 10^{47}$ erg/s = $10^{40}$ W. POWERED by gas accretion onto supermassive black hole ($10^6 - 10^{10} M_\\odot$). WORKED EXAMPLE: quasar 3C 273 visible despite being 2.4 Gly away. Types: quasars, Seyferts, blazars, radio galaxies — different orientations.");
  W("high-energy-astrophysics", "GRB:",
    "GRB = Gamma-Ray Burst. Isotropic energy $\\sim 10^{52}$ erg $= 10^{45}$ J (brightest electromagnetic events). DURATION: short ($<2$ s, NS merger origin) or long ($>2$ s, collapsar origin). WORKED EXAMPLE: GRB observed by Vela satellites (1967, classified); cosmological distances confirmed 1997 (afterglow + host galaxy redshift).");
  W("high-energy-astrophysics", "CR spectrum:",
    "Cosmic ray flux scales as $E^{-2.7}$ up to the 'knee' at $\\sim 10^{15}$ eV, then steepens to $E^{-3}$. POWER LAW. WORKED EXAMPLE: at 1 GeV: $\\sim 10^4$ particles/m²/s/sr/GeV. At $10^{20}$ eV: $\\sim 1$ particle/km²/century.");
  W("high-energy-astrophysics", "GZK cutoff:",
    "GZK (Greisen-Zatsepin-Kuz'min) cutoff at $\\sim 5\\times10^{19}$ eV. ULTRA-high-energy cosmic-ray protons interact with CMB photons via photo-pion production ($p + \\gamma_\\text{CMB} \\to p/n + \\pi$), losing energy. CONSEQUENCE: UHECRs above the cutoff must come from within $\\sim 50$ Mpc. CONFIRMED by Pierre Auger Observatory.");
  W("high-energy-astrophysics", "Synchrotron:",
    "Synchrotron power $\\propto B^2 \\gamma^2$. $B$ = magnetic field strength (T). $\\gamma$ = Lorentz factor of charged particle (typically electrons). DOMINATES astrophysical radio emission. WORKED EXAMPLE: Crab Nebula radio synchrotron from $\\gamma \\sim 10^4$ electrons in $\\mu$G fields; X-ray synchrotron from $\\gamma \\sim 10^9$ electrons.");
  W("high-energy-astrophysics", "Inverse Compton:",
    "INVERSE Compton: high-energy electron ($\\gamma$ Lorentz factor) up-scatters a low-frequency photon to higher energy by factor $\\sim \\gamma^2$. WORKED EXAMPLE: AGN: CMB photons inverse-Compton-scattered to gamma rays. Cluster gas hot electrons: CMB photons up-scattered → Sunyaev-Zel'dovich effect (used to identify and weigh galaxy clusters).");
  W("high-energy-astrophysics", "Eddington for SMBH:",
    "$L_E$ = Eddington luminosity for a supermassive BH. $M$ = mass in solar units. NUMERICAL value: $L_E \\approx 1.3\\times10^{38}(M/M_\\odot)$ erg/s. UPPER limit for steady accretion luminosity. WORKED EXAMPLE: $10^9 M_\\odot$ SMBH: $L_E \\sim 10^{47}$ erg/s — matches brightest quasars.");

  // ----- MATH METHODS FOR PHYSICS -----
  W("math-methods-physics", "Legendre, Bessel",
    "Four families of orthogonal SPECIAL functions arising as Sturm-Liouville eigenfunctions. LEGENDRE polynomials $P_\\ell(x)$ on $[-1, 1]$: spherical harmonics, multipole expansion. BESSEL functions $J_\\nu(x)$: cylindrical problems (drum modes, optical fibers). HERMITE $H_n(x)$: quantum harmonic oscillator. LAGUERRE $L_n(x)$: hydrogen radial wavefunctions. WORKED EXAMPLE: $P_2(x) = (3x^2 - 1)/2$, $H_2(x) = 4x^2 - 2$.");
  W("math-methods-physics", "Green's function:",
    "$G(\\vec r, \\vec r')$ = response of a linear PDE to a unit point source at $\\vec r'$. SATISFIES $\\mathcal L G = \\delta(\\vec r - \\vec r')$ where $\\mathcal L$ is the PDE operator. SOLVES forced equation via convolution: $u(\\vec r) = \\int G(\\vec r, \\vec r') f(\\vec r')\\,d^3 r'$. WORKED EXAMPLE: Poisson equation $\\nabla^2 \\phi = -\\rho/\\epsilon_0$ has Green's function $G = 1/(4\\pi|\\vec r - \\vec r'|)$ — Coulomb potential.");
  W("math-methods-physics", "Heat:",
    "$G(x, t)$ = Green's function for 1D heat equation. $\\alpha$ = thermal diffusivity (m²/s). $x, t$ = position, time. GAUSSIAN that spreads with width $\\sqrt{4\\alpha t}$. WORKED EXAMPLE: drop a hot droplet at $x = 0, t = 0$; after $t = 1$ s in copper ($\\alpha \\sim 10^{-4}$ m²/s), temperature distribution has width $\\sim 2$ cm.");
  W("math-methods-physics", "Contour integral",
    "RESIDUE theorem. $\\oint_C f(z)\\,dz = 2\\pi i \\sum \\text{Res}$ where the sum is over poles enclosed by $C$. PROVIDES powerful method for real definite integrals. WORKED EXAMPLE: $\\int_{-\\infty}^\\infty 1/(1 + x^2)\\,dx$ — close in upper half-plane, encloses pole at $i$ with residue $1/(2i)$, integral = $\\pi$.");
  W("math-methods-physics", "Saddle point:",
    "SADDLE-POINT (Laplace's) approximation. $N$ = large parameter. $f(x)$ = function with a maximum at $x_0$ in the interior. $f''(x_0) < 0$ (local max). APPROXIMATE integral by Gaussian around the maximum. WORKED EXAMPLE: Stirling's formula $n! \\sim \\sqrt{2\\pi n}(n/e)^n$ derived from $\\int x^n e^{-x}\\,dx = n!$ via saddle point.");
  W("math-methods-physics", "Sturm-Liouville:",
    "STURM-LIOUVILLE form $(py')' + (q + \\lambda w)y = 0$ on an interval. $p, q, w$ = given functions. $\\lambda$ = eigenvalue. PROPERTIES: real discrete eigenvalues, orthogonal eigenfunctions with respect to weight $w$. FOUNDATION of quantum-mechanical bound-state problems and many PDE solution methods.");
  W("math-methods-physics", "WKB:",
    "WKB (Wentzel-Kramers-Brillouin) semiclassical approximation. $\\psi(x)$ = wavefunction. $p(x) = \\sqrt{2m(E - V(x))}$ = classical momentum. $\\hbar$ = reduced Planck. VALID when wavelength $\\lambda = h/p$ varies slowly. WORKED EXAMPLE: tunneling through a barrier: $T \\sim e^{-2\\int\\sqrt{2m(V-E)}/\\hbar\\,dx}$ — explains alpha decay (Gamow 1928).");

  // ----- GROUP THEORY IN PHYSICS -----
  W("group-theory-physics", "$SU(2)$ generators:",
    "Three generators of SU(2) Lie group: $J_i = \\sigma_i/2$ for $i = x, y, z$. $\\sigma_i$ = Pauli matrices (2x2 Hermitian, traceless). ALGEBRA: $[J_i, J_j] = i\\hbar\\epsilon_{ijk}J_k$. WORKED EXAMPLE: rotation by angle $\\theta$ about axis $\\hat n$: $U = e^{-i\\theta\\hat n\\cdot \\vec J/\\hbar}$. Applied to spin states, this rotates the spin direction.");
  W("group-theory-physics", "$SU(3)$:",
    "SU(3) gauge group. EIGHT generators = Gell-Mann matrices $\\lambda_a/2$, $a = 1, \\ldots, 8$. UNDERLIES QCD: color $SU(3)$ — quarks carry color, gluons are in the 8-dimensional adjoint representation. Also $SU(3)$ flavor (approximate) gives Eightfold Way classification of hadrons (Gell-Mann, Nobel 1969).");
  W("group-theory-physics", "Standard Model:",
    "STANDARD MODEL gauge group $SU(3)_C \\times SU(2)_L \\times U(1)_Y$. THREE forces unified: STRONG ($SU(3)$ color), WEAK ($SU(2)$ left-handed), HYPERCHARGE ($U(1)$). HIGGS mechanism breaks $SU(2) \\times U(1) \\to U(1)_\\text{EM}$, giving masses to W and Z.");
  W("group-theory-physics", "Lorentz:",
    "LORENTZ group $SO(3, 1)$: 6 generators (3 rotations + 3 boosts). UNIVERSAL cover $SL(2, \\mathbb C)$ gives rise to spinor representations of half-integer spin. CONSEQUENCE: existence of fermions in nature follows from the spinor representations of the spacetime symmetry group.");
  W("group-theory-physics", "Crystallographic",
    "32 crystallographic point groups in 3D. ROTATIONS restricted to $2, 3, 4, 6$-fold (crystallographic theorem; rules out 5-fold lattices, hence quasicrystals require quasi-periodic order). ORIGIN: Hessel (1830), Bravais.");
  W("group-theory-physics", "Space groups:",
    "230 SPACE groups in 3D = point group operations combined with translations (including non-primitive screw axes and glide planes). EVERY crystal structure belongs to one. International Tables of Crystallography catalog them.");
  W("group-theory-physics", "Representations:",
    "$D^j$ = (2j+1)-dimensional irreducible representation of $SU(2)$. $j = 0, 1/2, 1, 3/2, \\ldots$ = spin quantum number. PHYSICALLY: $D^j$ = the angular-momentum-$j$ multiplet. WORKED EXAMPLE: $j = 1/2$ rep is 2D (spin-up, spin-down). $j = 1$ rep is 3D ($m = -1, 0, +1$).");

  // ----- COMPUTATIONAL PHYSICS -----
  W("computational-physics", "Verlet:",
    "VERLET integration. $x_n, x_{n-1}$ = positions at the last two time steps. $a$ = acceleration. $\\Delta t$ = time step. SYMPLECTIC: preserves phase-space volume → stable long-time energy conservation. WORKED EXAMPLE: solar system simulations with Verlet are stable over millions of years; Euler diverges in a few orbits.");
  W("computational-physics", "RK4:",
    "RK4 = 4th-order Runge-Kutta method. 4 function evaluations per step. ERROR per step $O(h^5)$; global error $O(h^4)$ for step size $h$. WORKHORSE for non-stiff ODEs. ADAPTIVE variants (RKF45) automatically choose $h$ to maintain tolerance.");
  W("computational-physics", "FFT:",
    "FFT = Fast Fourier Transform. Computes DFT of $N$ samples in $O(N\\log N)$ operations (naive: $O(N^2)$). ORIGIN: Cooley-Tukey (1965), with antecedents back to Gauss. WORKED EXAMPLE: 1024-point FFT: $\\sim 10{,}000$ operations vs $\\sim 10^6$ for naive. Enables practical signal processing, spectral PDE methods.");
  W("computational-physics", "Detailed balance",
    "DETAILED balance condition for MCMC: $\\pi_i P_{ij} = \\pi_j P_{ji}$. $\\pi$ = target stationary distribution. $P_{ij}$ = transition probability. SUFFICIENT (not necessary) for $\\pi$ to be stationary. ENFORCED by Metropolis acceptance rule.");
  W("computational-physics", "Multigrid:",
    "MULTIGRID solver for elliptic PDEs. Relax on fine grid (smooths short-wavelength errors), restrict to coarse grid (smooths long-wavelength errors), solve, prolongate back. RECURSIVE. RUNTIME: $O(N)$ — OPTIMAL. WORKED EXAMPLE: solving 3D Poisson with $N = 10^9$ unknowns: multigrid $\\sim 10^{10}$ ops; naive Gauss-Seidel $\\sim 10^{18}$.");

  // ----- SOFT MATTER / BIOPHYSICS -----
  W("soft-matter-biophysics", "Persistence length",
    "$\\ell_p$ = persistence length (m). SCALE over which a polymer 'forgets' its direction due to thermal bending. WORKED EXAMPLES: flexible polymers (rubber) $\\ell_p \\sim$ few monomers ~ 1 nm. DNA $\\ell_p \\approx 50$ nm (about 150 base pairs). Actin $\\ell_p \\sim 10$ μm. Microtubules $\\ell_p \\sim 1$ mm.");
  W("soft-matter-biophysics", "Membrane:",
    "HELFRICH membrane bending energy. $\\kappa$ = bending modulus (J or $k_B T$). $H = (\\kappa_1 + \\kappa_2)/2$ = mean curvature. EQUILIBRIUM SHAPES minimize this energy. WORKED EXAMPLE: lipid bilayers $\\kappa \\sim 10-20\\, k_B T$. Red blood cell discocyte shape minimizes bending energy under volume constraint.");
  W("soft-matter-biophysics", "Motor force:",
    "MOLECULAR motors (kinesin, myosin, dynein) exert forces $\\sim $ pN over steps $\\sim$ nm. WORKED EXAMPLES: kinesin walks 8 nm per ATP hydrolysis, force up to $\\sim 6$ pN, speed $\\sim 0.5$ μm/s. Power $\\sim 10^{-17}$ W per motor. Cells run on billions of them.");

  // ----- FUNCTION SEQUENCES -----
  W("function-sequences", "Uniform ⇒ pointwise",
    "Uniform convergence implies pointwise (specialize the sup to one point); but pointwise does NOT imply uniform. WORKED EXAMPLE: $f_n(x) = x^n$ on $[0, 1]$ converges pointwise but not uniformly to a discontinuous limit. The sup of $|f_n - f|$ stays at 1 (achieved as $x \\to 1^-$).");
  W("function-sequences", "Uniform limit of",
    "If $f_n$ are continuous and $f_n \\to f$ uniformly, then $f$ is continuous. PROOF: triangle inequality. CONTRAPOSITIVE: continuous functions cannot uniformly converge to a discontinuous function. WORKED EXAMPLE: $\\sin(nx)/n$ converges uniformly to 0 on $\\mathbb R$ (sup is $1/n \\to 0$), and 0 is continuous ✓.");

  // ----- BAYESIAN STATS -----
  W("bayesian-statistics", "Normal mean (BS)",
    "Normal-normal conjugacy. Prior $N(\\mu_0, \\sigma_0^2)$ on the mean. Observe $x \\sim N(\\mu, \\sigma^2)$ with known $\\sigma$. POSTERIOR is normal with mean = precision-weighted average of prior mean and observation. WORKED EXAMPLE: prior $N(0, 1)$ + observation $x = 2, \\sigma = 1$ → posterior $N(1, 0.5)$ — pulled toward prior.");
  W("bayesian-statistics", "Posterior predictive:",
    "$y$ = future observation. INTEGRATES likelihood against posterior of $\\theta$. ACCOUNTS for parameter uncertainty. WORKED EXAMPLE: predicting a coin flip after seeing 7 heads in 10 tosses with Beta(2, 2) prior. Posterior Beta(9, 5). Posterior predictive prob of heads = $9/14 \\approx 0.643$ — wider uncertainty than point estimate would suggest.");

  // ----- STOCHASTIC PROCESSES -----
  W("stochastic-processes", "GBM:",
    "GBM = Geometric Brownian Motion. $X(t)$ = stock price (always positive). $\\mu$ = drift (expected return). $\\sigma$ = volatility. $W_t$ = standard Brownian motion. SOLUTION: $X(t) = X_0 \\exp((\\mu - \\sigma^2/2)t + \\sigma W_t)$. WORKED EXAMPLE: stock at $\\$100$, drift 8%/yr, volatility 20%/yr. After 1 year: log-normal distribution centered near $\\$108$.");

  // ----- DYNAMICAL SYSTEMS -----
  W("dynamical-systems", "Feigenbaum:",
    "FEIGENBAUM constant $\\delta \\approx 4.66920$ — UNIVERSAL ratio of successive period-doubling bifurcation intervals. SAME number for ANY smooth unimodal map (quadratic, sine, etc.). DISCOVERED by Mitchell Feigenbaum 1978 on an HP-65 calculator. WORKED EXAMPLE: logistic map first 4 doublings at $r = 3, 3.449, 3.544, 3.5644, \\ldots$ — ratios approach 4.669.");
  W("dynamical-systems", "Poincaré section",
    "POINCARÉ section: take a transverse hyperplane in phase space; record points where the trajectory pierces it. CONTINUOUS flow reduces to DISCRETE map of lower dimension. WORKED EXAMPLE: Lorenz attractor visualized via cross-sections shows its fractal structure. Planetary three-body problem analyzed via surface-of-section (Poincaré, 1890s).");

  // ----- CRYPTOGRAPHY -----
  W("cryptography", "AES",
    "AES (Advanced Encryption Standard, 2001). Block size 128 bits. KEY sizes 128/192/256 bits, with 10/12/14 rounds. EACH round: SubBytes (S-box nonlinearity), ShiftRows, MixColumns, AddRoundKey. WORKED EXAMPLE: AES-128 encrypts a 128-bit block in $\\sim 10$ μs on commodity hardware. Best-known cryptanalysis only marginally faster than exhaustive key search.");
  W("cryptography", "RSA",
    "RSA (Rivest-Shamir-Adleman, 1977). $n = pq$ = product of two large primes. $e$ = public exponent (often 65537). $d = e^{-1} \\bmod (p-1)(q-1)$ = private exponent. ENCRYPT $m$: $c = m^e \\bmod n$. DECRYPT: $m = c^d \\bmod n$. SECURITY: factoring large $n$ is hard. WORKED EXAMPLE: 2048-bit RSA secures essentially all HTTPS traffic.");
  W("cryptography", "Diffie-Hellman",
    "DIFFIE-HELLMAN key exchange (1976). $p$ = large prime. $g$ = generator of $(\\mathbb Z/p)^*$. ALICE picks secret $a$, sends $g^a \\bmod p$. BOB picks secret $b$, sends $g^b \\bmod p$. SHARED secret: $g^{ab} \\bmod p$. EAVESDROPPER must solve discrete log to recover. WORKED EXAMPLE: TLS uses elliptic-curve DH for key agreement before switching to AES for bulk encryption.");

  // ----- COMBINATORICS -----
  W("combinatorics", "$P(n, k)",
    "$P(n, k)$ = number of ways to arrange $k$ items chosen from $n$ distinct items, ORDER matters. $= n(n-1)(n-2)\\cdots(n-k+1) = n!/(n-k)!$. WORKED EXAMPLE: how many ways to pick 1st, 2nd, 3rd place from 8 finalists? $P(8, 3) = 8\\cdot 7\\cdot 6 = 336$.");

  // ----- LIE GROUPS -----
  W("lie-groups", "Angular momentum",
    "ANGULAR momentum algebra of $\\mathfrak{su}(2)$. $L_x, L_y, L_z$ = three angular-momentum operators. $\\hbar$ = reduced Planck. $\\epsilon_{ijk}$ = Levi-Civita symbol. CONSEQUENCE: can simultaneously know only $L^2$ and ONE component (usually $L_z$). WORKED EXAMPLE: for $\\ell = 1$ multiplet (3 states), $L_z$ takes eigenvalues $-\\hbar, 0, +\\hbar$.");

  // ----- TENSOR CALCULUS -----
  W("tensor-calculus", "Symmetric tensor",
    "$n$ = dimension. SYMMETRIC $(0, 2)$ tensor in $n$ dimensions has $n(n+1)/2$ independent components. WORKED EXAMPLE: 3D inertia tensor: $3\\cdot 4/2 = 6$ independent components. 4D stress-energy tensor: $4\\cdot 5/2 = 10$ components. Compare ANTISYMMETRIC: $n(n-1)/2$ — 3 for $F_{\\mu\\nu}$ in 3D, 6 in 4D.");

  // ----- ALGEBRAIC TOPOLOGY (further entries) -----
  W("algebraic-topology", "$H_n(S^n)",
    "$S^n$ = $n$-sphere. $H_n$ = $n$-th homology group. $H_n(S^n) = \\mathbb Z$ (fundamental class); other $H_k = 0$ for $0 < k < n$. $H_0 = \\mathbb Z$ since $S^n$ is connected. WORKED EXAMPLE: $S^2$ has $H_0 = H_2 = \\mathbb Z$, $H_1 = 0$. The torus is different: $H_0 = H_2 = \\mathbb Z$, $H_1 = \\mathbb Z^2$.");
  W("algebraic-topology", "Brouwer",
    "BROUWER fixed-point theorem. $D^n$ = closed $n$-disk. Every continuous self-map has at least one fixed point. PROOF via algebraic topology (or Sperner's lemma). APPLIES to economics (Nash equilibrium existence), game theory, optimization.");

  // ----- RIEMANNIAN GEOMETRY -----
  W("riemannian-geometry", "Killing",
    "$K^\\mu$ = Killing vector field. $\\nabla_\\mu$ = covariant derivative. SYMMETRIZATION over $\\mu\\nu$. INFINITESIMAL generator of isometry (metric-preserving transformation). WORKED EXAMPLE: Minkowski has 10 Killing vectors (4 translations + 3 rotations + 3 boosts). Schwarzschild has 4 (time translation + 3 rotations).");

  // ----- DIFFERENTIAL GEOMETRY -----
  W("differential-geometry", "Arc length:",
    "$L$ = arc length (m). $\\vec r(t)$ = parametrized curve. $|\\vec r'(t)|$ = speed. $[a, b]$ = parameter interval. INVARIANT under reparametrization. WORKED EXAMPLE: unit circle parametrized as $\\vec r(t) = (\\cos t, \\sin t)$, $t \\in [0, 2\\pi]$. Speed = 1 everywhere. Length = $\\int_0^{2\\pi} 1\\,dt = 2\\pi$ ✓.");
  W("differential-geometry", "Curvature:",
    "$\\kappa$ = curvature of a space curve (1/m). $\\vec r'$ = tangent. $\\vec r''$ = derivative of tangent. RECIPROCAL = radius of osculating circle (best-fitting circle at that point). WORKED EXAMPLE: circle of radius $R$ has $\\kappa = 1/R$ everywhere. Straight line: $\\kappa = 0$.");
  W("differential-geometry", "Frenet-Serret:",
    "FRENET-SERRET frame: orthonormal triad $(\\vec T, \\vec N, \\vec B)$ along a 3D curve. $\\vec T$ = unit tangent. $\\vec N$ = principal normal. $\\vec B = \\vec T \\times \\vec N$ = binormal. EVOLUTION: $\\vec T' = \\kappa \\vec N$, $\\vec N' = -\\kappa\\vec T + \\tau\\vec B$, $\\vec B' = -\\tau\\vec N$. UNIQUELY determine curve from $\\kappa(s), \\tau(s)$.");
  W("differential-geometry", "Gaussian curvature:",
    "$K$ = Gaussian curvature of surface. $\\kappa_1, \\kappa_2$ = principal curvatures (max and min curvatures of normal sections). WORKED EXAMPLES: unit sphere: $K = +1$. Cylinder: $K = 0$ (one principal curvature is zero). Saddle: $K < 0$. INTRINSIC by Theorema Egregium.");

  // ----- MEASURE THEORY (further) -----
  W("measure-theory", "Fatou",
    "FATOU's lemma. $f_n$ = sequence of non-negative measurable functions. $\\liminf$ = limit inferior (always exists). ONE-SIDED inequality: liminf goes inside integral. NO assumption of monotonicity or dominating function — the most general convergence inequality.");
})();
