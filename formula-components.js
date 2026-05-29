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
})();
