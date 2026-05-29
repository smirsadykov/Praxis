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
})();
