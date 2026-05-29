// Key formulas and core results for every topic.
// Each entry: { f: "<formula in LaTeX>", n: "<short note>" }
window.FORMULAS = {

  // ===== MATH =====

  "arithmetic-foundations": [
    { f: "PEMDAS", n: "Parentheses → Exponents → ×/÷ → +/− (left to right)." },
    { f: "$-(-a) = a$", n: "Subtracting a negative is adding." },
    { f: "$|x| = \\begin{cases} x, & x \\geq 0 \\\\ -x, & x < 0 \\end{cases}$", n: "Absolute value: distance from zero." },
    { f: "$\\gcd(a, b) \\cdot \\operatorname{lcm}(a, b) = ab$", n: "GCD-LCM relation." },
    { f: "$n = p_1^{a_1} \\cdots p_k^{a_k}$", n: "Fundamental theorem of arithmetic — unique prime factorization." }
  ],

  "fractions-percentages": [
    { f: "$\\dfrac{a}{b} + \\dfrac{c}{d} = \\dfrac{ad + bc}{bd}$", n: "Add fractions via common denominator." },
    { f: "$\\dfrac{a}{b} \\cdot \\dfrac{c}{d} = \\dfrac{ac}{bd}$", n: "Multiply across." },
    { f: "$\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\cdot \\dfrac{d}{c}$", n: "Divide = multiply by reciprocal." },
    { f: "$p\\% = \\dfrac{p}{100}$", n: "Percent = parts per hundred." },
    { f: "% change $= \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$", n: "Always divide by the original." }
  ],

  "exponents-roots": [
    { f: "$x^a \\cdot x^b = x^{a+b}$", n: "Product rule." },
    { f: "$\\dfrac{x^a}{x^b} = x^{a-b}$", n: "Quotient rule." },
    { f: "$(x^a)^b = x^{ab}$", n: "Power of a power." },
    { f: "$x^{-n} = \\dfrac{1}{x^n}$", n: "Negative exponent = reciprocal." },
    { f: "$x^{1/n} = \\sqrt[n]{x}$", n: "Fractional exponent = root." },
    { f: "$\\sqrt{ab} = \\sqrt a \\cdot \\sqrt b$", n: "Roots split over products." }
  ],

  "ratios-proportions": [
    { f: "$\\dfrac{a}{b} = \\dfrac{c}{d} \\iff ad = bc$", n: "Cross-multiply." },
    { f: "$y \\propto x \\Rightarrow y = kx$", n: "Direct proportion." },
    { f: "$y \\propto \\dfrac{1}{x} \\Rightarrow y = \\dfrac{k}{x}$", n: "Inverse proportion." },
    { f: "speed $= \\dfrac{\\text{distance}}{\\text{time}}$", n: "Rate triangle." },
    { f: "$C_{\\text{mix}} = \\dfrac{C_1 V_1 + C_2 V_2}{V_1 + V_2}$", n: "Weighted average for mixtures." }
  ],

  "linear-equations": [
    { f: "$ax + b = c \\Rightarrow x = \\dfrac{c-b}{a}$", n: "Single-variable linear solution." },
    { f: "$y = mx + b$", n: "Slope-intercept form of a line." },
    { f: "$y - y_1 = m(x - x_1)$", n: "Point-slope form." },
    { f: "Do same operation to both sides", n: "Balance principle — preserves equality." }
  ],

  "inequalities": [
    { f: "$a < b, c > 0 \\Rightarrow ac < bc$", n: "Multiplying by positive preserves direction." },
    { f: "$a < b, c < 0 \\Rightarrow ac > bc$", n: "Multiplying by negative flips direction." },
    { f: "$|x| < a \\iff -a < x < a$", n: "Absolute-value inequality unpacks." },
    { f: "$|x| > a \\iff x < -a \\text{ or } x > a$", n: "Outside a band." },
    { f: "AM ≥ GM", n: "Arithmetic mean ≥ geometric mean (positive reals)." }
  ],

  "plane-geometry": [
    { f: "$a^2 + b^2 = c^2$", n: "Pythagorean theorem." },
    { f: "$A_\\triangle = \\tfrac{1}{2} b h$", n: "Triangle area." },
    { f: "$A_\\text{rect} = \\ell w$", n: "Rectangle area." },
    { f: "$C = 2\\pi r, \\; A = \\pi r^2$", n: "Circle circumference and area." },
    { f: "Triangle angle sum $= 180°$", n: "Always." },
    { f: "Regular $n$-gon interior angle $= \\dfrac{(n-2)\\cdot 180°}{n}$", n: "Sum of interior angles is $(n-2)180°$." }
  ],

  "set-logic": [
    { f: "$|A \\cup B| = |A| + |B| - |A \\cap B|$", n: "Inclusion-exclusion." },
    { f: "$|\\mathcal{P}(A)| = 2^{|A|}$", n: "Power set size." },
    { f: "$\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$", n: "De Morgan." },
    { f: "$p \\Rightarrow q \\equiv \\neg q \\Rightarrow \\neg p$", n: "Contrapositive equivalence." },
    { f: "$\\neg(\\forall x\\, P(x)) \\equiv \\exists x\\, \\neg P(x)$", n: "Quantifier negation." }
  ],

  "number-theory": [
    { f: "$a = bq + r, \\; 0 \\leq r < b$", n: "Division algorithm." },
    { f: "$\\gcd(a,b) = \\gcd(b, a \\bmod b)$", n: "Euclidean algorithm step." },
    { f: "$a^{\\varphi(n)} \\equiv 1 \\pmod n$", n: "Euler's theorem (gcd$(a,n)=1$)." },
    { f: "$a^{p-1} \\equiv 1 \\pmod p$", n: "Fermat's little theorem ($p$ prime)." },
    { f: "$ax + by = \\gcd(a,b)$", n: "Bezout's identity — extended Euclid." },
    { f: "CRT", n: "Chinese Remainder Theorem: pairwise-coprime moduli combine uniquely." }
  ],

  "combinatorics": [
    { f: "$n! = n(n-1)\\cdots 1$", n: "Number of permutations of $n$." },
    { f: "$P(n,k) = \\dfrac{n!}{(n-k)!}$", n: "Ordered selections (permutations)." },
    { f: "$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$", n: "Combinations." },
    { f: "$(x+y)^n = \\sum_k \\binom{n}{k} x^{n-k} y^k$", n: "Binomial theorem." },
    { f: "$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$", n: "Pascal's identity." },
    { f: "Stars-and-bars: $\\binom{n+k-1}{k-1}$", n: "Non-negative integer solutions to $x_1 + \\cdots + x_k = n$." }
  ],

  "systems-of-equations": [
    { f: "$\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix}\\begin{pmatrix}x \\\\ y\\end{pmatrix} = \\begin{pmatrix}p \\\\ q\\end{pmatrix}$", n: "Matrix form of 2×2 system." },
    { f: "$x = \\dfrac{dp - bq}{ad - bc}$", n: "Cramer's rule." },
    { f: "$\\det \\neq 0$", n: "Unique solution exists." },
    { f: "$\\det = 0, \\text{consistent}$", n: "Infinitely many solutions." },
    { f: "$\\det = 0, \\text{inconsistent}$", n: "No solution (parallel)." }
  ],

  "quadratic-equations": [
    { f: "$x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$", n: "Quadratic formula." },
    { f: "$\\Delta = b^2 - 4ac$", n: "Discriminant: >0 two real, =0 double, <0 complex." },
    { f: "$x_1 + x_2 = -\\dfrac{b}{a}, \\; x_1 x_2 = \\dfrac{c}{a}$", n: "Vieta's formulas." },
    { f: "Vertex $\\left(-\\dfrac{b}{2a}, \\; c - \\dfrac{b^2}{4a}\\right)$", n: "Max/min of parabola." },
    { f: "Complete the square: $x^2 + bx = (x + \\tfrac{b}{2})^2 - \\tfrac{b^2}{4}$", n: "Identity for completing the square." }
  ],

  "polynomials-rational": [
    { f: "$p(x) = q(x) d(x) + r(x), \\; \\deg r < \\deg d$", n: "Polynomial division." },
    { f: "$p(a) = 0 \\iff (x - a) \\mid p(x)$", n: "Factor theorem." },
    { f: "Remainder of $p(x) / (x-a) = p(a)$", n: "Remainder theorem." },
    { f: "Vertical asymptote: $q(x_0) = 0, p(x_0) \\neq 0$", n: "For $p/q$." },
    { f: "Horizontal asymptote: ratio of leading coefficients (same degree)", n: "Or $0$ (deg num < deg den), or none (deg num > deg den)." }
  ],

  "functions-graphs": [
    { f: "Vertical line test", n: "Tests whether a curve is a function." },
    { f: "Domain: allowed inputs; Range: outputs", n: "Two fundamental sets." },
    { f: "$(f \\circ g)(x) = f(g(x))$", n: "Composition: inner then outer." },
    { f: "$f^{-1}(f(x)) = x$", n: "Inverse undoes the function." },
    { f: "$y = a f(b(x - h)) + k$", n: "Vertical scale $a$, horizontal scale $1/b$, shift $(h, k)$." },
    { f: "Even: $f(-x) = f(x)$; Odd: $f(-x) = -f(x)$", n: "Symmetries." }
  ],

  "logarithms": [
    { f: "$\\log_b(xy) = \\log_b x + \\log_b y$", n: "Product rule." },
    { f: "$\\log_b(x/y) = \\log_b x - \\log_b y$", n: "Quotient rule." },
    { f: "$\\log_b(x^p) = p \\log_b x$", n: "Power rule." },
    { f: "$\\log_b a = \\dfrac{\\ln a}{\\ln b}$", n: "Change of base." },
    { f: "$b^{\\log_b x} = x$", n: "Log is inverse of exponential." },
    { f: "$\\log_b 1 = 0, \\; \\log_b b = 1$", n: "Defining points." }
  ],

  "sequences-series": [
    { f: "Arithmetic: $a_n = a_1 + (n-1)d$", n: "$n$th term." },
    { f: "$S_n = \\dfrac{n(a_1 + a_n)}{2}$", n: "Arithmetic sum." },
    { f: "Geometric: $a_n = a_1 r^{n-1}$", n: "$n$th term." },
    { f: "$S_n = a_1 \\dfrac{1 - r^n}{1 - r}$", n: "Geometric finite sum." },
    { f: "$S_\\infty = \\dfrac{a_1}{1 - r}, \\; |r| < 1$", n: "Geometric infinite sum." },
    { f: "$\\sum_{k=1}^n k = \\tfrac{n(n+1)}{2}$, $\\sum k^2 = \\tfrac{n(n+1)(2n+1)}{6}$", n: "Power sums." }
  ],

  "trigonometry": [
    { f: "$\\sin\\theta = \\dfrac{\\text{opp}}{\\text{hyp}}, \\; \\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}}, \\; \\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}}$", n: "Right-triangle ratios." },
    { f: "$\\sin^2\\theta + \\cos^2\\theta = 1$", n: "Pythagorean identity." },
    { f: "$\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$", n: "Sine sum/difference." },
    { f: "$\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B$", n: "Cosine sum/difference." },
    { f: "$\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}$", n: "Law of sines." },
    { f: "$c^2 = a^2 + b^2 - 2ab\\cos C$", n: "Law of cosines." }
  ],

  "probability": [
    { f: "$0 \\leq P(A) \\leq 1$", n: "Axiom 1." },
    { f: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$", n: "Inclusion-exclusion." },
    { f: "$P(A \\cap B) = P(A) P(B)$", n: "If independent." },
    { f: "$P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$", n: "Conditional probability." },
    { f: "$P(A \\mid B) = \\dfrac{P(B \\mid A) P(A)}{P(B)}$", n: "Bayes' theorem." },
    { f: "$E[X] = \\sum x_i P(X = x_i)$", n: "Expectation." }
  ],

  "statistics": [
    { f: "$\\bar x = \\dfrac{1}{n}\\sum x_i$", n: "Sample mean." },
    { f: "$s^2 = \\dfrac{1}{n-1}\\sum (x_i - \\bar x)^2$", n: "Sample variance." },
    { f: "$z = \\dfrac{x - \\mu}{\\sigma}$", n: "Standard score." },
    { f: "CI: $\\bar x \\pm z^* \\dfrac{\\sigma}{\\sqrt n}$", n: "Confidence interval for mean." },
    { f: "$z^* = 1.96$ for $95\\%$, $2.576$ for $99\\%$", n: "Critical values." },
    { f: "$r = \\dfrac{\\sum (x_i - \\bar x)(y_i - \\bar y)}{\\sqrt{\\sum (x_i - \\bar x)^2 \\sum (y_i - \\bar y)^2}}$", n: "Pearson correlation." }
  ],

  "complex-numbers": [
    { f: "$i^2 = -1$", n: "Definition of imaginary unit." },
    { f: "$|a + bi| = \\sqrt{a^2 + b^2}$", n: "Modulus." },
    { f: "$\\arg(a + bi) = \\arctan(b/a)$", n: "Argument (account for quadrant)." },
    { f: "$z = r e^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)$", n: "Polar / Euler form." },
    { f: "$e^{i\\pi} + 1 = 0$", n: "Euler's identity." },
    { f: "$(re^{i\\theta})^n = r^n e^{in\\theta}$", n: "De Moivre's theorem." },
    { f: "$\\overline{a + bi} = a - bi$", n: "Complex conjugate." }
  ],

  "vector-algebra": [
    { f: "$|\\vec v| = \\sqrt{v_x^2 + v_y^2 + v_z^2}$", n: "Magnitude." },
    { f: "$\\vec a \\cdot \\vec b = a_x b_x + a_y b_y + a_z b_z$", n: "Dot product." },
    { f: "$\\vec a \\cdot \\vec b = |\\vec a||\\vec b|\\cos\\theta$", n: "Geometric dot product." },
    { f: "$\\vec a \\times \\vec b = \\det \\begin{pmatrix} \\hat i & \\hat j & \\hat k \\\\ a_x & a_y & a_z \\\\ b_x & b_y & b_z \\end{pmatrix}$", n: "Cross product." },
    { f: "$|\\vec a \\times \\vec b| = |\\vec a||\\vec b|\\sin\\theta$", n: "Cross-product magnitude = parallelogram area." },
    { f: "$\\text{proj}_{\\vec b} \\vec a = \\dfrac{\\vec a \\cdot \\vec b}{|\\vec b|^2}\\vec b$", n: "Vector projection." }
  ],

  "linear-algebra": [
    { f: "$(AB)_{ij} = \\sum_k A_{ik} B_{kj}$", n: "Matrix multiplication." },
    { f: "$\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$", n: "2×2 determinant." },
    { f: "$A^{-1} = \\dfrac{1}{\\det A}\\,\\text{adj}(A)$", n: "Matrix inverse formula." },
    { f: "$A\\vec v = \\lambda \\vec v$", n: "Eigenvalue equation." },
    { f: "$\\det(A - \\lambda I) = 0$", n: "Characteristic polynomial." },
    { f: "$\\text{rank}(A) + \\text{nullity}(A) = n$", n: "Rank-nullity theorem." },
    { f: "$\\text{tr}(A) = \\sum \\lambda_i, \\; \\det(A) = \\prod \\lambda_i$", n: "Trace and determinant from eigenvalues." }
  ],

  "limits": [
    { f: "$\\lim_{x \\to a} f(x) = L$", n: "$\\varepsilon$-$\\delta$: $\\forall\\varepsilon\\exists\\delta\\, |x-a|<\\delta \\Rightarrow |f-L|<\\varepsilon$." },
    { f: "$\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$", n: "Classic." },
    { f: "$\\lim_{x \\to 0} \\dfrac{1 - \\cos x}{x^2} = \\tfrac{1}{2}$", n: "From Taylor series." },
    { f: "$\\lim_{x \\to \\infty}\\left(1 + \\tfrac{1}{x}\\right)^x = e$", n: "Definition of $e$." },
    { f: "L'Hôpital: $\\lim \\dfrac{f}{g} = \\lim \\dfrac{f'}{g'}$", n: "For $0/0$ or $\\infty/\\infty$." },
    { f: "Squeeze: $g \\leq f \\leq h, \\lim g = \\lim h$", n: "Sandwich theorem." }
  ],

  "derivatives": [
    { f: "$f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}$", n: "Definition." },
    { f: "$(x^n)' = n x^{n-1}$", n: "Power rule." },
    { f: "$(fg)' = f'g + fg'$", n: "Product rule." },
    { f: "$\\left(\\dfrac{f}{g}\\right)' = \\dfrac{f'g - fg'}{g^2}$", n: "Quotient rule." },
    { f: "$(f \\circ g)'(x) = f'(g(x)) g'(x)$", n: "Chain rule." },
    { f: "$(e^x)' = e^x, \\; (\\ln x)' = \\dfrac{1}{x}$", n: "Exponential and log." },
    { f: "$(\\sin x)' = \\cos x, \\; (\\cos x)' = -\\sin x$", n: "Trig." }
  ],

  "integrals": [
    { f: "$\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C$", n: "Power rule ($n \\neq -1$)." },
    { f: "$\\int \\dfrac{dx}{x} = \\ln|x| + C$", n: "The $n=-1$ exception." },
    { f: "$\\int e^x\\,dx = e^x + C$", n: "Exponential." },
    { f: "$\\int_a^b f'(x)\\,dx = f(b) - f(a)$", n: "FTC II." },
    { f: "$\\int u\\,dv = uv - \\int v\\,du$", n: "Integration by parts." },
    { f: "$\\int f(g(x)) g'(x)\\,dx = \\int f(u)\\,du$", n: "u-substitution." },
    { f: "$\\int_{-\\infty}^\\infty e^{-x^2}\\,dx = \\sqrt\\pi$", n: "Gaussian." }
  ],

  "multivariable-calculus": [
    { f: "$\\nabla f = \\left(\\partial f/\\partial x, \\partial f/\\partial y, \\partial f/\\partial z\\right)$", n: "Gradient." },
    { f: "Directional derivative: $D_{\\vec u} f = \\nabla f \\cdot \\hat u$", n: "Rate of change in direction $\\hat u$." },
    { f: "Critical point: $\\nabla f = \\vec 0$", n: "Necessary for max/min." },
    { f: "Hessian: $H_{ij} = \\partial^2 f / \\partial x_i \\partial x_j$", n: "Second-derivative matrix." },
    { f: "$\\iint_R f\\,dA$", n: "Double integral over region $R$." },
    { f: "Lagrange: $\\nabla f = \\lambda \\nabla g$", n: "Constrained optimization." },
    { f: "Jacobian for change of variables: $|\\det J|$", n: "Volume element transform." }
  ],

  "vector-calculus": [
    { f: "$\\nabla \\cdot \\vec F = \\partial_x F_x + \\partial_y F_y + \\partial_z F_z$", n: "Divergence." },
    { f: "$\\nabla \\times \\vec F$", n: "Curl (determinant form with $\\hat i, \\hat j, \\hat k$)." },
    { f: "$\\nabla \\times (\\nabla f) = \\vec 0$", n: "Curl of gradient is zero." },
    { f: "$\\nabla \\cdot (\\nabla \\times \\vec F) = 0$", n: "Divergence of curl is zero." },
    { f: "Green: $\\oint_C \\vec F \\cdot d\\vec r = \\iint_R (\\partial_x Q - \\partial_y P)\\,dA$", n: "2D circulation = curl integral." },
    { f: "Stokes: $\\oint_C \\vec F \\cdot d\\vec r = \\iint_S (\\nabla \\times \\vec F) \\cdot d\\vec S$", n: "Generalizes Green to surfaces." },
    { f: "Divergence: $\\iiint_V \\nabla \\cdot \\vec F\\,dV = \\oiint_S \\vec F \\cdot d\\vec S$", n: "Gauss's theorem." }
  ],

  "ode": [
    { f: "$\\dfrac{dy}{dx} = ky \\Rightarrow y = Ce^{kx}$", n: "Exponential growth/decay." },
    { f: "$y' + p(x) y = q(x)$", n: "Linear first-order. Integrating factor $e^{\\int p}$." },
    { f: "$a y'' + b y' + c y = 0$", n: "Constant-coefficient linear. Use $y = e^{rx}$." },
    { f: "Characteristic: $ar^2 + br + c = 0$", n: "Roots give exponential solutions." },
    { f: "$y'' + \\omega^2 y = 0 \\Rightarrow y = A\\cos\\omega t + B\\sin\\omega t$", n: "Harmonic oscillator." },
    { f: "Wronskian: $W = y_1 y_2' - y_1' y_2$", n: "Tests linear independence." }
  ],

  "pde": [
    { f: "Heat: $u_t = \\alpha u_{xx}$", n: "Parabolic — smoothing diffusion." },
    { f: "Wave: $u_{tt} = c^2 u_{xx}$", n: "Hyperbolic — propagation at speed $c$." },
    { f: "Laplace: $\\nabla^2 u = 0$", n: "Elliptic — steady state." },
    { f: "D'Alembert: $u = \\tfrac{1}{2}[f(x-ct) + f(x+ct)]$", n: "1D wave with $u_t(0) = 0$." },
    { f: "Heat fundamental: $G = \\dfrac{1}{\\sqrt{4\\pi\\alpha t}} e^{-x^2/(4\\alpha t)}$", n: "Green's function." },
    { f: "Separation: $u(x,t) = X(x)T(t)$", n: "Reduces PDE to ODEs." }
  ],

  "real-analysis": [
    { f: "$\\forall \\varepsilon > 0 \\, \\exists N : n > N \\Rightarrow |a_n - L| < \\varepsilon$", n: "Sequence convergence." },
    { f: "Cauchy: $\\forall \\varepsilon \\, \\exists N : m, n > N \\Rightarrow |a_m - a_n| < \\varepsilon$", n: "Cauchy criterion." },
    { f: "MVT: $\\exists c \\in (a,b) : f'(c) = \\dfrac{f(b) - f(a)}{b - a}$", n: "Mean Value Theorem." },
    { f: "Bolzano-Weierstrass", n: "Every bounded sequence in $\\mathbb{R}^n$ has a convergent subsequence." },
    { f: "Heine-Borel", n: "In $\\mathbb{R}^n$: compact $\\iff$ closed and bounded." },
    { f: "Riemann sum: $\\int_a^b f = \\lim \\sum f(\\xi_i)\\Delta x_i$", n: "Limit of partition sums." }
  ],

  "complex-analysis": [
    { f: "Cauchy-Riemann: $u_x = v_y, \\; u_y = -v_x$", n: "Holomorphy condition for $f = u + iv$." },
    { f: "$\\oint_\\gamma f(z)\\,dz = 0$", n: "Cauchy's theorem (analytic inside $\\gamma$)." },
    { f: "$f(z_0) = \\dfrac{1}{2\\pi i} \\oint \\dfrac{f(z)}{z - z_0}\\,dz$", n: "Cauchy integral formula." },
    { f: "$\\oint f\\,dz = 2\\pi i \\sum \\text{Res}$", n: "Residue theorem." },
    { f: "Liouville", n: "Bounded entire function is constant." },
    { f: "Max modulus", n: "On a closed domain, max of $|f|$ on boundary." }
  ],

  "fourier-analysis": [
    { f: "$f(x) = \\sum (a_n \\cos nx + b_n \\sin nx)$", n: "Fourier series." },
    { f: "$a_n = \\dfrac{1}{\\pi}\\int_{-\\pi}^\\pi f \\cos(nx)\\,dx$", n: "Coefficient formula." },
    { f: "$\\hat f(k) = \\int f(x) e^{-ikx}\\,dx$", n: "Fourier transform (one convention)." },
    { f: "$f(x) = \\dfrac{1}{2\\pi}\\int \\hat f(k) e^{ikx}\\,dk$", n: "Inverse transform." },
    { f: "$\\widehat{f \\ast g} = \\hat f \\cdot \\hat g$", n: "Convolution theorem." },
    { f: "Parseval: $\\int |f|^2 = \\tfrac{1}{2\\pi}\\int |\\hat f|^2$", n: "Energy preservation." },
    { f: "$\\sigma_x \\sigma_k \\geq \\tfrac{1}{2}$", n: "Uncertainty principle." }
  ],

  "abstract-algebra": [
    { f: "Group axioms: closure, associativity, identity, inverse", n: "Four pillars." },
    { f: "Lagrange: $|H| \\mid |G|$", n: "Subgroup order divides group order." },
    { f: "$|G/H| = |G|/|H|$", n: "Quotient group order (when $H \\triangleleft G$)." },
    { f: "First isomorphism: $G/\\ker\\phi \\cong \\text{im}\\,\\phi$", n: "Homomorphism factors through kernel." },
    { f: "Cauchy: $p \\mid |G| \\Rightarrow$ element of order $p$", n: "Existence of $p$-elements." },
    { f: "$\\mathbb{Z}/p\\mathbb{Z}$ is a field iff $p$ prime", n: "Foundation of finite fields." }
  ],

  "topology": [
    { f: "Topology axioms", n: "Closed under union, finite intersection; includes $\\emptyset, X$." },
    { f: "Continuous: preimage of open is open", n: "Topological definition." },
    { f: "Compact: every open cover has a finite subcover", n: "Definition." },
    { f: "Connected: not the union of two disjoint non-empty open sets", n: "Definition." },
    { f: "Hausdorff: distinct points have disjoint neighborhoods", n: "$T_2$ separation axiom." },
    { f: "Heine-Borel: compact in $\\mathbb{R}^n \\iff$ closed and bounded", n: "Concrete characterization." }
  ],

  "numerical-methods": [
    { f: "Newton: $x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$", n: "Quadratic convergence near root." },
    { f: "Bisection: midpoint of sign-changing interval", n: "Linear convergence, very reliable." },
    { f: "Trapezoid: $\\int_a^b f \\approx \\tfrac{h}{2}\\sum (f_i + f_{i+1})$", n: "$O(h^2)$." },
    { f: "Simpson: $\\int \\approx \\tfrac{h}{3}(f_0 + 4f_1 + 2f_2 + \\ldots + f_n)$", n: "$O(h^4)$." },
    { f: "Euler: $y_{n+1} = y_n + h f(t_n, y_n)$", n: "$O(h)$ — crude but foundational." },
    { f: "RK4: 4-stage update", n: "$O(h^4)$ — standard nonstiff solver." },
    { f: "Condition number: $\\kappa(A) = \\|A\\| \\|A^{-1}\\|$", n: "Measures error amplification." }
  ],

  "coordinate-geometry": [
    { f: "$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$", n: "Distance between two points." },
    { f: "$M = \\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$", n: "Midpoint." },
    { f: "$m = \\dfrac{y_2 - y_1}{x_2 - x_1}$", n: "Slope of line through two points." },
    { f: "$y - y_1 = m(x - x_1)$", n: "Point-slope form." },
    { f: "$y = mx + b$", n: "Slope-intercept form." },
    { f: "$Ax + By + C = 0$", n: "General form." },
    { f: "Parallel: $m_1 = m_2$; Perpendicular: $m_1 m_2 = -1$", n: "Line relations." }
  ],

  "solid-geometry": [
    { f: "Cube: $V = s^3, \\; SA = 6s^2$", n: "Side $s$." },
    { f: "Rectangular box: $V = \\ell w h$", n: "Three dimensions." },
    { f: "Sphere: $V = \\tfrac{4}{3}\\pi r^3, \\; SA = 4\\pi r^2$", n: "Radius $r$." },
    { f: "Cylinder: $V = \\pi r^2 h, \\; SA = 2\\pi r(r + h)$", n: "Radius $r$, height $h$." },
    { f: "Cone: $V = \\tfrac{1}{3}\\pi r^2 h$", n: "Slant height $\\ell = \\sqrt{r^2 + h^2}$." },
    { f: "Pyramid: $V = \\tfrac{1}{3} B h$", n: "$B$ = base area." }
  ],

  "conic-sections": [
    { f: "Parabola: $y = a(x - h)^2 + k$", n: "Vertex $(h, k)$, focus at $(h, k + 1/(4a))$." },
    { f: "Ellipse: $\\dfrac{(x - h)^2}{a^2} + \\dfrac{(y - k)^2}{b^2} = 1$", n: "Semi-axes $a, b$; $c^2 = a^2 - b^2$." },
    { f: "Hyperbola: $\\dfrac{(x - h)^2}{a^2} - \\dfrac{(y - k)^2}{b^2} = 1$", n: "Asymptotes $y - k = \\pm (b/a)(x - h)$." },
    { f: "Circle: $(x - h)^2 + (y - k)^2 = r^2$", n: "Eccentricity $e = 0$." },
    { f: "Eccentricity: circle $0$, ellipse $0 < e < 1$, parabola $1$, hyperbola $> 1$", n: "Classifies conics." }
  ],

  "mathematical-logic": [
    { f: "Direct: $p \\Rightarrow q$", n: "Chain inferences forward." },
    { f: "Contradiction: assume $\\neg q$, derive false", n: "Reductio ad absurdum." },
    { f: "Contrapositive: $\\neg q \\Rightarrow \\neg p$", n: "Logically equivalent to $p \\Rightarrow q$." },
    { f: "Induction: $P(1)$ and $P(n) \\Rightarrow P(n+1)$", n: "Proves $\\forall n \\in \\mathbb{Z}^+$." },
    { f: "Strong induction: $P(1), \\ldots, P(n) \\Rightarrow P(n+1)$", n: "All previous as hypothesis." },
    { f: "Pigeonhole: $n+1$ items in $n$ boxes", n: "Some box has $\\geq 2$." }
  ],

  "graph-theory": [
    { f: "$\\sum_v \\deg(v) = 2|E|$", n: "Handshake lemma." },
    { f: "Tree: connected, $|E| = |V| - 1$", n: "No cycles." },
    { f: "$K_n$ has $\\binom{n}{2}$ edges", n: "Complete graph." },
    { f: "Eulerian circuit iff all degrees even", n: "Connected graph." },
    { f: "Hamiltonian: visits every vertex once", n: "NP-hard in general." },
    { f: "Bipartite iff no odd cycle", n: "Two-colorable." },
    { f: "Four-color theorem: planar $\\Rightarrow \\chi \\leq 4$", n: "Famous result." }
  ],

  "recurrence-generating": [
    { f: "Linear: $a_n = c_1 a_{n-1} + \\ldots + c_k a_{n-k}$", n: "Constant-coefficient." },
    { f: "Characteristic: $x^k - c_1 x^{k-1} - \\ldots - c_k = 0$", n: "Roots give solutions." },
    { f: "$F_n = \\dfrac{\\varphi^n - \\hat\\varphi^n}{\\sqrt 5}$", n: "Binet's Fibonacci formula." },
    { f: "$\\sum x^n = \\dfrac{1}{1-x}$", n: "Geometric GF." },
    { f: "$\\sum \\dfrac{x^n}{n!} = e^x$", n: "Exponential GF." },
    { f: "$\\sum \\binom{n}{k} x^k = (1+x)^n$", n: "Binomial GF." },
    { f: "Convolution: $(\\sum a_n x^n)(\\sum b_n x^n) = \\sum (\\sum_{k} a_k b_{n-k}) x^n$", n: "Cauchy product." }
  ],

  "computability": [
    { f: "Halting problem: undecidable", n: "Turing 1936." },
    { f: "Church-Turing thesis", n: "Effective computation = Turing-computable." },
    { f: "P: poly-time decidable", n: "Tractable problems." },
    { f: "NP: poly-time verifiable", n: "Tractable to check, hard to find." },
    { f: "NP-complete: hardest NP", n: "Cook-Levin: SAT is NP-complete." },
    { f: "Rice's theorem", n: "Non-trivial semantic property of programs is undecidable." }
  ],

  "galois-theory": [
    { f: "$[L : K]$ = vector-space dim of $L$ over $K$", n: "Extension degree." },
    { f: "$\\text{Gal}(L/K) = \\text{Aut}(L/K)$", n: "Galois group (automorphisms fixing $K$)." },
    { f: "$|\\text{Gal}(L/K)| = [L : K]$", n: "For Galois extensions." },
    { f: "Solvable by radicals $\\iff$ Galois group solvable", n: "Galois's theorem." },
    { f: "Abel-Ruffini", n: "Generic quintic NOT solvable by radicals ($S_5$ not solvable)." },
    { f: "Fundamental theorem", n: "Subfields ↔ subgroups (anti-iso)." }
  ],

  "lie-groups": [
    { f: "$\\dim SO(n) = n(n-1)/2$", n: "Rotation group dimension." },
    { f: "$\\dim SU(n) = n^2 - 1$", n: "Special unitary." },
    { f: "$[X, Y] = XY - YX$", n: "Lie bracket (commutator)." },
    { f: "$[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0$", n: "Jacobi identity." },
    { f: "$g(t) = \\exp(tX)$", n: "One-parameter subgroup from Lie algebra element." },
    { f: "$[L_i, L_j] = i \\hbar \\epsilon_{ijk} L_k$", n: "SO(3) angular momentum algebra." }
  ],

  "differential-geometry": [
    { f: "Arc length: $L = \\int_a^b |\\vec r'(t)|\\,dt$", n: "For parametrized curve." },
    { f: "Curvature: $\\kappa = \\dfrac{|\\vec r' \\times \\vec r''|}{|\\vec r'|^3}$", n: "For space curve." },
    { f: "Torsion: $\\tau$", n: "Out-of-plane twisting." },
    { f: "Frenet-Serret: $\\vec T', \\vec N', \\vec B'$", n: "Tangent, normal, binormal evolution." },
    { f: "Gaussian curvature: $K = \\kappa_1 \\kappa_2$", n: "Product of principal curvatures." },
    { f: "Theorema Egregium", n: "Gaussian curvature is intrinsic (preserved by bending)." }
  ],

  "tensor-calculus": [
    { f: "Einstein summation: repeated index summed", n: "$A_\\mu B^\\mu = \\sum_\\mu A_\\mu B^\\mu$." },
    { f: "Metric: $ds^2 = g_{\\mu\\nu} dx^\\mu dx^\\nu$", n: "Defines geometry." },
    { f: "Raise/lower: $A^\\mu = g^{\\mu\\nu} A_\\nu$", n: "Metric converts indices." },
    { f: "Christoffel: $\\Gamma^\\mu_{\\alpha\\beta} = \\tfrac{1}{2} g^{\\mu\\nu}(\\partial_\\alpha g_{\\nu\\beta} + \\partial_\\beta g_{\\nu\\alpha} - \\partial_\\nu g_{\\alpha\\beta})$", n: "Connection from metric." },
    { f: "Covariant derivative: $\\nabla_\\mu A^\\nu = \\partial_\\mu A^\\nu + \\Gamma^\\nu_{\\mu\\lambda} A^\\lambda$", n: "Curvature-aware derivative." },
    { f: "Riemann: $R^\\rho{}_{\\sigma\\mu\\nu}$ has $20$ independent components in 4D", n: "Curvature tensor." }
  ],

  "algebraic-topology": [
    { f: "$\\pi_1(S^1) = \\mathbb{Z}$", n: "Winding numbers." },
    { f: "$\\pi_n(S^n) = \\mathbb{Z}$", n: "Sphere homotopy." },
    { f: "$\\pi_1(\\text{torus}) = \\mathbb{Z}^2$", n: "Two independent loops." },
    { f: "$\\chi = V - E + F$", n: "Euler characteristic." },
    { f: "$\\chi(\\Sigma_g) = 2 - 2g$", n: "Genus-$g$ surface." },
    { f: "$H_n(S^n) = \\mathbb{Z}$, else $0$", n: "Sphere homology." },
    { f: "Brouwer fixed point", n: "Continuous $D^n \\to D^n$ has a fixed point." }
  ],

  "riemannian-geometry": [
    { f: "$ds^2 = g_{ij} dx^i dx^j$", n: "Line element." },
    { f: "Geodesic: $\\ddot x^\\mu + \\Gamma^\\mu_{\\alpha\\beta} \\dot x^\\alpha \\dot x^\\beta = 0$", n: "Shortest paths." },
    { f: "$R_{\\mu\\nu} = R^\\alpha{}_{\\mu\\alpha\\nu}$", n: "Ricci tensor (contracted Riemann)." },
    { f: "$R = g^{\\mu\\nu} R_{\\mu\\nu}$", n: "Ricci scalar." },
    { f: "Einstein manifold: $R_{\\mu\\nu} = \\lambda g_{\\mu\\nu}$", n: "Vacuum GR with $\\Lambda$." },
    { f: "Killing vector: $\\nabla_{(\\mu} K_{\\nu)} = 0$", n: "Symmetry of the metric." }
  ],

  "measure-theory": [
    { f: "$\\sigma$-algebra: closed under complements & countable unions", n: "Definition." },
    { f: "$m([a, b]) = b - a$", n: "Lebesgue measure on intervals." },
    { f: "$m(\\bigcup A_i) \\leq \\sum m(A_i)$", n: "Subadditivity." },
    { f: "$m(\\bigcup A_i) = \\sum m(A_i)$ if disjoint", n: "Countable additivity." },
    { f: "MCT: $f_n \\uparrow f \\Rightarrow \\int f_n \\to \\int f$", n: "Monotone convergence theorem." },
    { f: "DCT: $|f_n| \\leq g$ integrable, $f_n \\to f \\Rightarrow \\int f_n \\to \\int f$", n: "Dominated convergence." },
    { f: "Fatou: $\\int \\liminf f_n \\leq \\liminf \\int f_n$", n: "Fatou's lemma." }
  ],

  "functional-analysis": [
    { f: "Banach: complete normed space", n: "Cauchy = convergent." },
    { f: "Hilbert: complete inner product space", n: "Adds angles." },
    { f: "$\\|T\\| = \\sup_{\\|x\\| \\leq 1} \\|Tx\\|$", n: "Operator norm." },
    { f: "Riesz representation", n: "Bounded functional on Hilbert = inner product with a vector." },
    { f: "Hahn-Banach", n: "Extend bounded linear functionals from subspaces." },
    { f: "Open mapping theorem", n: "Surjective bounded linear ⇒ open." },
    { f: "Spectral theorem (self-adjoint, compact)", n: "Orthonormal eigenbasis." }
  ],

  "calculus-of-variations": [
    { f: "Euler-Lagrange: $\\dfrac{\\partial L}{\\partial y} - \\dfrac{d}{dx}\\dfrac{\\partial L}{\\partial y'} = 0$", n: "Optimality condition." },
    { f: "$S = \\int L\\,dt$", n: "Action functional." },
    { f: "Principle of least action: $\\delta S = 0$", n: "Classical mechanics from variation." },
    { f: "Brachistochrone: $L = \\sqrt{\\dfrac{1 + y'^2}{2gy}}$", n: "Time of descent." },
    { f: "Soap film: minimize $\\int 2\\pi y \\sqrt{1 + y'^2}\\,dx$", n: "Gives catenoid." },
    { f: "Noether: continuous symmetry ⇒ conservation law", n: "Theorem of 1918." }
  ],

  "function-sequences": [
    { f: "Pointwise: $\\forall x : f_n(x) \\to f(x)$", n: "Each $x$ converges independently." },
    { f: "Uniform: $\\sup_x |f_n - f| \\to 0$", n: "Same rate for all $x$." },
    { f: "Uniform ⇒ pointwise; not converse", n: "Strict implication." },
    { f: "Uniform limit of continuous = continuous", n: "Preservation." },
    { f: "M-test: $|f_n| \\leq M_n$, $\\sum M_n < \\infty$ ⇒ uniform", n: "Weierstrass M-test." },
    { f: "Power series radius: $R = 1/\\limsup |a_n|^{1/n}$", n: "Cauchy-Hadamard." }
  ],

  "random-variables": [
    { f: "$E[X] = \\int x f(x)\\,dx$ (continuous) or $\\sum x_i P_i$ (discrete)", n: "Expectation." },
    { f: "$\\text{Var}(X) = E[X^2] - E[X]^2$", n: "Variance." },
    { f: "Binomial: $E = np, \\text{Var} = np(1-p)$", n: "$n$ trials, success prob $p$." },
    { f: "Poisson: $P(X=k) = e^{-\\lambda}\\lambda^k/k!, E = \\text{Var} = \\lambda$", n: "Rare events." },
    { f: "Normal: $f = \\dfrac{1}{\\sigma\\sqrt{2\\pi}} e^{-(x-\\mu)^2/(2\\sigma^2)}$", n: "Bell curve." },
    { f: "CLT: $\\sqrt n (\\bar X - \\mu) \\to N(0, \\sigma^2)$", n: "Sample mean is normal." },
    { f: "Markov: $P(X \\geq a) \\leq E[X]/a$ for $X \\geq 0$", n: "Tail bound." }
  ],

  "stochastic-processes": [
    { f: "Markov: $P(X_{n+1} | X_n, X_{n-1}, \\ldots) = P(X_{n+1} | X_n)$", n: "Memorylessness." },
    { f: "Stationary: $\\pi P = \\pi$", n: "Invariant distribution." },
    { f: "Detailed balance: $\\pi_i P_{ij} = \\pi_j P_{ji}$", n: "Reversibility." },
    { f: "Poisson process: $P(N(t) = k) = e^{-\\lambda t}(\\lambda t)^k/k!$", n: "Inter-arrivals exponential." },
    { f: "Brownian motion: $W(t) \\sim N(0, t)$", n: "Wiener process." },
    { f: "Itô: $dW^2 = dt$", n: "Quadratic variation of Brownian motion." },
    { f: "GBM: $dX = \\mu X\\,dt + \\sigma X\\,dW$", n: "Geometric Brownian (stock prices)." }
  ],

  "bayesian-statistics": [
    { f: "$P(\\theta | D) = \\dfrac{P(D | \\theta) P(\\theta)}{P(D)}$", n: "Bayes' rule." },
    { f: "Posterior $\\propto$ Likelihood $\\times$ Prior", n: "Practical form." },
    { f: "$P(D) = \\int P(D | \\theta) P(\\theta)\\,d\\theta$", n: "Marginal likelihood (evidence)." },
    { f: "Beta-Binomial: $\\text{Beta}(\\alpha + k, \\beta + n - k)$", n: "Conjugate update." },
    { f: "Normal mean (known $\\sigma$): conjugate prior normal", n: "Closed-form update." },
    { f: "MAP: $\\hat\\theta = \\arg\\max P(\\theta | D)$", n: "Mode of posterior." },
    { f: "Posterior predictive: $\\int P(y | \\theta) P(\\theta | D)\\,d\\theta$", n: "Future predictions." }
  ],

  "optimization": [
    { f: "$\\min f(x)$ s.t. $g_i(x) \\leq 0, h_j(x) = 0$", n: "General problem." },
    { f: "$\\mathcal{L} = f + \\sum \\lambda_i g_i + \\sum \\mu_j h_j$", n: "Lagrangian." },
    { f: "KKT: $\\nabla \\mathcal{L} = 0, \\lambda_i \\geq 0, \\lambda_i g_i = 0$", n: "First-order conditions." },
    { f: "Convex: $f(\\theta x + (1-\\theta) y) \\leq \\theta f(x) + (1-\\theta) f(y)$", n: "Definition." },
    { f: "Gradient descent: $x_{n+1} = x_n - \\eta \\nabla f$", n: "Update rule." },
    { f: "Newton's: $x_{n+1} = x_n - H^{-1} \\nabla f$", n: "Uses Hessian." },
    { f: "LP duality: $\\max c^T x = \\min b^T y$", n: "Primal = dual at optimum." }
  ],

  "information-theory": [
    { f: "$H(X) = -\\sum p_i \\log_2 p_i$", n: "Shannon entropy (bits)." },
    { f: "$H(X, Y) \\leq H(X) + H(Y)$", n: "Joint ≤ sum." },
    { f: "$I(X; Y) = H(X) - H(X | Y)$", n: "Mutual information." },
    { f: "$D(p \\| q) = \\sum p_i \\log(p_i / q_i)$", n: "KL divergence." },
    { f: "Channel capacity: $C = \\max I(X; Y)$", n: "Shannon's theorem." },
    { f: "BSC capacity: $C = 1 - H(p)$", n: "Binary symmetric channel." },
    { f: "Differential entropy of $N(0,\\sigma^2)$: $\\tfrac{1}{2}\\log(2\\pi e \\sigma^2)$", n: "Continuous case." }
  ],

  "game-theory": [
    { f: "Nash: $u_i(s_i^*, s_{-i}^*) \\geq u_i(s_i, s_{-i}^*)$", n: "No unilateral improvement." },
    { f: "Minimax: $\\max_s \\min_t u(s, t)$", n: "Value of zero-sum game." },
    { f: "Mixed strategy: probability over pure strategies", n: "Randomization." },
    { f: "Shapley value: $\\phi_i = \\sum \\dfrac{|S|! (n - |S| - 1)!}{n!}[v(S \\cup i) - v(S)]$", n: "Cooperative payoff distribution." },
    { f: "Subgame perfect: Nash in every subgame", n: "Backward induction." },
    { f: "Stable matching (Gale-Shapley)", n: "Deferred-acceptance algorithm." }
  ],

  "dynamical-systems": [
    { f: "$\\dot{\\vec x} = \\vec f(\\vec x)$", n: "Autonomous flow." },
    { f: "Fixed point: $\\vec f(\\vec x^*) = 0$", n: "Equilibrium." },
    { f: "Linearization: $D\\vec f(\\vec x^*)$", n: "Stability via eigenvalues." },
    { f: "Stable: all $\\text{Re}(\\lambda) < 0$", n: "Local stability." },
    { f: "Lyapunov exponent: $\\lambda = \\lim \\tfrac{1}{n} \\sum \\log|f'|$", n: "Positive ⇒ chaos." },
    { f: "Feigenbaum: $\\delta \\approx 4.669$", n: "Period-doubling universality." },
    { f: "Poincaré section", n: "Reduces continuous flow to discrete map." }
  ],

  "cryptography": [
    { f: "RSA: $c = m^e \\bmod n, \\; m = c^d \\bmod n$", n: "Public/private keys." },
    { f: "$ed \\equiv 1 \\pmod{\\varphi(n)}$", n: "Key relationship." },
    { f: "DH: shared key $g^{ab} \\bmod p$", n: "Diffie-Hellman exchange." },
    { f: "AES: 128-bit blocks, 128/192/256-bit keys", n: "Symmetric standard." },
    { f: "Hash: collision-resistant, preimage-resistant", n: "Security properties." },
    { f: "Birthday bound: $\\sim 2^{n/2}$", n: "Collisions after this many tries." },
    { f: "Perfect secrecy: $H(M | C) = H(M)$", n: "OTP achieves." }
  ],

  // ===== PHYSICS =====

  "units-measurement": [
    { f: "$1$ km/h $= \\tfrac{5}{18}$ m/s", n: "Standard conversion." },
    { f: "$[F] = \\text{kg·m/s}^2 = $ N", n: "Force in base SI." },
    { f: "$[E] = \\text{kg·m}^2/\\text{s}^2 = $ J", n: "Energy in base SI." },
    { f: "$[P] = \\text{W} = $ J/s", n: "Power." },
    { f: "Sig figs in multiply: fewest of inputs", n: "Precision rule." },
    { f: "Sig figs in add: fewest decimal places", n: "Precision rule." }
  ],

  "kinematics": [
    { f: "$\\bar v = \\Delta x / \\Delta t$", n: "Average velocity." },
    { f: "$v = v_0 + at$", n: "Velocity at time $t$." },
    { f: "$x = x_0 + v_0 t + \\tfrac{1}{2} a t^2$", n: "Position." },
    { f: "$v^2 = v_0^2 + 2a(x - x_0)$", n: "Time-free." },
    { f: "Free fall: $g = 9.8$ m/s²", n: "Near Earth's surface." },
    { f: "Projectile: $y = x\\tan\\theta - \\dfrac{gx^2}{2v_0^2 \\cos^2\\theta}$", n: "Trajectory." },
    { f: "Range: $R = \\dfrac{v_0^2 \\sin(2\\theta)}{g}$", n: "Same-level projectile range." }
  ],

  "vectors-physics": [
    { f: "$|\\vec v| = \\sqrt{v_x^2 + v_y^2}$", n: "Magnitude in 2D." },
    { f: "$\\theta = \\arctan(v_y / v_x)$", n: "Direction (check quadrant)." },
    { f: "$\\vec A + \\vec B = \\langle A_x + B_x, A_y + B_y\\rangle$", n: "Component addition." },
    { f: "$F_x = F\\cos\\theta, \\; F_y = F\\sin\\theta$", n: "Resolving a force." },
    { f: "$\\vec a - \\vec b = \\vec a + (-\\vec b)$", n: "Subtraction." },
    { f: "$\\hat u = \\vec v / |\\vec v|$", n: "Unit vector." }
  ],

  "newtons-laws": [
    { f: "$\\vec F_{\\text{net}} = m \\vec a$", n: "Newton's second law." },
    { f: "$\\vec F_{12} = -\\vec F_{21}$", n: "Newton's third law (action-reaction)." },
    { f: "$W = mg$", n: "Weight on Earth." },
    { f: "$f_s \\leq \\mu_s N$", n: "Static friction." },
    { f: "$f_k = \\mu_k N$", n: "Kinetic friction." },
    { f: "Tension transmits force", n: "Massless rope." },
    { f: "Normal force ⊥ surface", n: "Adjusts to maintain non-penetration." }
  ],

  "momentum-impulse": [
    { f: "$\\vec p = m \\vec v$", n: "Linear momentum." },
    { f: "$\\vec F = d\\vec p/dt$", n: "Newton II (general form)." },
    { f: "$\\vec J = \\int \\vec F\\,dt = \\Delta \\vec p$", n: "Impulse." },
    { f: "$\\sum \\vec p_i = \\sum \\vec p_f$", n: "Conservation in closed systems." },
    { f: "Elastic: $KE$ also conserved", n: "Specific collision type." },
    { f: "Equal masses elastic 1D: velocities exchange", n: "Special case." },
    { f: "Center of mass: $\\vec R_{cm} = \\dfrac{\\sum m_i \\vec r_i}{\\sum m_i}$", n: "Weighted average." }
  ],

  "energy-work": [
    { f: "$W = \\vec F \\cdot \\vec d = Fd\\cos\\theta$", n: "Work." },
    { f: "$KE = \\tfrac{1}{2} m v^2$", n: "Kinetic energy." },
    { f: "$PE_g = mgh$", n: "Gravitational PE." },
    { f: "$PE_s = \\tfrac{1}{2} k x^2$", n: "Spring PE." },
    { f: "$W_{\\text{net}} = \\Delta KE$", n: "Work-energy theorem." },
    { f: "$E_{\\text{total}} = KE + PE = $ const", n: "Conservation (no non-conservative forces)." },
    { f: "$P = dW/dt = \\vec F \\cdot \\vec v$", n: "Power." }
  ],

  "circular-gravitation": [
    { f: "$a_c = v^2/r = \\omega^2 r$", n: "Centripetal acceleration." },
    { f: "$F_c = m v^2 / r$", n: "Centripetal force." },
    { f: "$F_g = G \\dfrac{m_1 m_2}{r^2}$", n: "Newton's gravitation." },
    { f: "$g = GM/r^2$", n: "Surface gravity." },
    { f: "Orbital: $v = \\sqrt{GM/r}$", n: "Circular orbit speed." },
    { f: "Escape: $v_{\\text{esc}} = \\sqrt{2GM/r}$", n: "Escape velocity." },
    { f: "Kepler III: $T^2 = \\dfrac{4\\pi^2}{GM} a^3$", n: "Period vs semi-major axis." }
  ],

  "shm": [
    { f: "$F = -kx$", n: "Hooke's law restoring force." },
    { f: "$\\omega = \\sqrt{k/m}$", n: "Spring angular frequency." },
    { f: "$T = 2\\pi/\\omega = 2\\pi\\sqrt{m/k}$", n: "Period." },
    { f: "$x(t) = A\\cos(\\omega t + \\phi)$", n: "General solution." },
    { f: "Pendulum: $T = 2\\pi\\sqrt{L/g}$", n: "Small-angle, simple pendulum." },
    { f: "$E_{\\text{SHM}} = \\tfrac{1}{2} k A^2$", n: "Total energy." },
    { f: "Damped: $\\ddot x + 2\\gamma \\dot x + \\omega_0^2 x = 0$", n: "Damped oscillator." }
  ],

  "rotational": [
    { f: "$\\theta, \\omega, \\alpha$ analogous to $x, v, a$", n: "Angular kinematics." },
    { f: "$v = \\omega r, \\; a_t = \\alpha r$", n: "Linear-rotational link." },
    { f: "$\\tau = r F \\sin\\theta = I\\alpha$", n: "Torque and Newton II for rotation." },
    { f: "$I = \\sum m_i r_i^2$", n: "Moment of inertia." },
    { f: "$KE_{\\text{rot}} = \\tfrac{1}{2} I \\omega^2$", n: "Rotational KE." },
    { f: "$L = I\\omega$", n: "Angular momentum." },
    { f: "Parallel axis: $I = I_{cm} + Md^2$", n: "Useful for shifted axes." }
  ],

  "fluids": [
    { f: "$P = \\rho g h$", n: "Hydrostatic pressure (gauge)." },
    { f: "$F_B = \\rho V g$", n: "Buoyancy (Archimedes)." },
    { f: "$P = F/A$", n: "Pressure definition." },
    { f: "$A_1 v_1 = A_2 v_2$", n: "Continuity (incompressible)." },
    { f: "$P + \\tfrac{1}{2}\\rho v^2 + \\rho g h = $ const", n: "Bernoulli's equation." },
    { f: "Pascal: pressure transmits equally", n: "Hydraulics principle." },
    { f: "$1$ atm $\\approx 101325$ Pa", n: "Standard atmospheric." }
  ],

  "kinetic-theory": [
    { f: "$PV = nRT$", n: "Ideal gas law." },
    { f: "$\\langle KE \\rangle = \\tfrac{3}{2} k_B T$", n: "Translational KE per particle." },
    { f: "$v_{rms} = \\sqrt{3 k_B T / m}$", n: "RMS molecular speed." },
    { f: "$P = \\tfrac{1}{3} n m \\langle v^2 \\rangle$", n: "Pressure from kinetic theory." },
    { f: "Equipartition: $\\tfrac{1}{2} k_B T$ per quadratic DOF", n: "Classical result." },
    { f: "$k_B = R/N_A = 1.38 \\times 10^{-23}$ J/K", n: "Boltzmann constant." },
    { f: "$\\lambda = \\dfrac{1}{\\sqrt 2 n \\pi d^2}$", n: "Mean free path." }
  ],

  "thermodynamics": [
    { f: "$\\Delta U = Q - W$", n: "First law." },
    { f: "$Q = mc\\Delta T$", n: "Specific heat." },
    { f: "$\\eta = 1 - Q_c/Q_h$", n: "Engine efficiency." },
    { f: "$\\eta_{\\text{Carnot}} = 1 - T_c/T_h$", n: "Max possible (reversible)." },
    { f: "$\\Delta S = Q_{\\text{rev}}/T$", n: "Entropy change." },
    { f: "$\\Delta S_{\\text{universe}} \\geq 0$", n: "Second law." },
    { f: "$W = \\int P\\,dV$", n: "Work by gas." }
  ],

  "waves": [
    { f: "$v = f\\lambda$", n: "Wave equation." },
    { f: "$T = 1/f, \\; \\omega = 2\\pi f$", n: "Period and angular frequency." },
    { f: "$y(x, t) = A\\sin(kx - \\omega t)$", n: "Travelling wave (one direction)." },
    { f: "$k = 2\\pi/\\lambda$", n: "Wavenumber." },
    { f: "Speed in string: $v = \\sqrt{T/\\mu}$", n: "Tension over linear mass density." },
    { f: "Doppler: $f' = f \\dfrac{v \\pm v_o}{v \\mp v_s}$", n: "Observer/source motion." },
    { f: "Sound in air: $\\approx 343$ m/s", n: "At room temperature." }
  ],

  "optics-geometric": [
    { f: "$\\theta_i = \\theta_r$", n: "Law of reflection." },
    { f: "$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$", n: "Snell's law." },
    { f: "$\\dfrac{1}{f} = \\dfrac{1}{d_o} + \\dfrac{1}{d_i}$", n: "Thin-lens / mirror equation." },
    { f: "$m = -d_i/d_o$", n: "Magnification." },
    { f: "$\\sin\\theta_c = n_2/n_1$", n: "Critical angle for TIR." },
    { f: "Lensmaker: $\\dfrac{1}{f} = (n-1)\\left(\\dfrac{1}{R_1} - \\dfrac{1}{R_2}\\right)$", n: "Focal length from curvatures." },
    { f: "Power: $P = 1/f$ (in diopters when $f$ in m)", n: "Lens strength." }
  ],

  "optics-wave": [
    { f: "Two-slit fringe spacing: $\\Delta y = \\lambda L/d$", n: "Distance between bright fringes." },
    { f: "Constructive: $\\Delta = m\\lambda$; destructive: $(m + \\tfrac{1}{2})\\lambda$", n: "Interference conditions." },
    { f: "Single-slit minima: $a\\sin\\theta = m\\lambda$", n: "Diffraction." },
    { f: "Grating maxima: $d\\sin\\theta = m\\lambda$", n: "$N$-slit grating." },
    { f: "Thin film constructive (with one inversion): $2nt = (m + \\tfrac{1}{2})\\lambda$", n: "Soap bubbles." },
    { f: "Malus: $I = I_0 \\cos^2\\theta$", n: "Polarizer transmission." },
    { f: "Bragg: $2d\\sin\\theta = n\\lambda$", n: "X-ray crystallography." }
  ],

  "electrostatics": [
    { f: "$F = \\dfrac{k q_1 q_2}{r^2}$", n: "Coulomb's law." },
    { f: "$k = 1/(4\\pi\\varepsilon_0) \\approx 9 \\times 10^9$ N·m²/C²", n: "Coulomb constant." },
    { f: "$\\vec E = \\vec F/q$", n: "Electric field." },
    { f: "Point charge: $E = kq/r^2$, $V = kq/r$", n: "Field and potential." },
    { f: "$\\oint \\vec E \\cdot d\\vec A = Q_{\\text{enc}}/\\varepsilon_0$", n: "Gauss's law." },
    { f: "$C = Q/V$", n: "Capacitance." },
    { f: "$C = \\varepsilon_0 A/d$", n: "Parallel-plate capacitor." },
    { f: "$U_C = \\tfrac{1}{2} CV^2$", n: "Energy in capacitor." }
  ],

  "electric-circuits": [
    { f: "$V = IR$", n: "Ohm's law." },
    { f: "Series: $R_{eq} = \\sum R_i$", n: "Add resistances." },
    { f: "Parallel: $1/R_{eq} = \\sum 1/R_i$", n: "Add conductances." },
    { f: "$P = VI = I^2 R = V^2/R$", n: "Power dissipation." },
    { f: "KCL: $\\sum I_{\\text{in}} = \\sum I_{\\text{out}}$", n: "Kirchhoff current law." },
    { f: "KVL: $\\sum V = 0$ around loop", n: "Kirchhoff voltage law." },
    { f: "$\\tau = RC$", n: "RC time constant." },
    { f: "EMF: $V_T = \\varepsilon - Ir$", n: "Terminal voltage with internal resistance." }
  ],

  "magnetism-induction": [
    { f: "$\\vec F = q\\vec v \\times \\vec B$", n: "Magnetic force on charge." },
    { f: "$\\vec F = I \\vec L \\times \\vec B$", n: "Force on current-carrying wire." },
    { f: "$\\Phi_B = \\int \\vec B \\cdot d\\vec A$", n: "Magnetic flux." },
    { f: "$\\varepsilon = -N \\dfrac{d\\Phi_B}{dt}$", n: "Faraday's law." },
    { f: "$B = \\mu_0 I/(2\\pi r)$", n: "Long straight wire." },
    { f: "$B = \\mu_0 n I$", n: "Inside long solenoid." },
    { f: "$\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A", n: "Vacuum permeability." },
    { f: "$U_L = \\tfrac{1}{2} L I^2$", n: "Inductor energy." }
  ],

  "ac-circuits": [
    { f: "$V_{rms} = V_0/\\sqrt 2$", n: "RMS voltage from peak." },
    { f: "$X_L = \\omega L$", n: "Inductive reactance." },
    { f: "$X_C = 1/(\\omega C)$", n: "Capacitive reactance." },
    { f: "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$", n: "Impedance magnitude." },
    { f: "$\\tan\\phi = (X_L - X_C)/R$", n: "Phase angle." },
    { f: "$\\omega_0 = 1/\\sqrt{LC}$", n: "Resonance frequency." },
    { f: "$Q = \\omega_0 L/R$", n: "Quality factor." },
    { f: "$P_{\\text{real}} = V_{rms} I_{rms} \\cos\\phi$", n: "Real power." },
    { f: "Transformer: $V_2/V_1 = N_2/N_1$", n: "Voltage ratio." }
  ],

  "maxwell-em": [
    { f: "$\\nabla \\cdot \\vec E = \\rho/\\varepsilon_0$", n: "Gauss for E." },
    { f: "$\\nabla \\cdot \\vec B = 0$", n: "No magnetic monopoles." },
    { f: "$\\nabla \\times \\vec E = -\\partial \\vec B/\\partial t$", n: "Faraday." },
    { f: "$\\nabla \\times \\vec B = \\mu_0 \\vec J + \\mu_0 \\varepsilon_0 \\partial \\vec E/\\partial t$", n: "Ampère-Maxwell." },
    { f: "$c = 1/\\sqrt{\\mu_0 \\varepsilon_0} \\approx 3 \\times 10^8$ m/s", n: "EM wave speed." },
    { f: "$\\vec S = \\vec E \\times \\vec B/\\mu_0$", n: "Poynting vector (energy flux)." },
    { f: "$Z_0 = \\sqrt{\\mu_0/\\varepsilon_0} \\approx 377$ Ω", n: "Impedance of free space." },
    { f: "Radiation pressure: $P_{\\text{rad}} = I/c$", n: "Perfectly absorbing surface." }
  ],

  "special-relativity": [
    { f: "$\\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}}$", n: "Lorentz factor." },
    { f: "$\\Delta t = \\gamma \\Delta t_0$", n: "Time dilation." },
    { f: "$L = L_0/\\gamma$", n: "Length contraction." },
    { f: "$E = \\gamma m c^2$", n: "Total energy." },
    { f: "$E^2 = (pc)^2 + (mc^2)^2$", n: "Energy-momentum relation." },
    { f: "$p = \\gamma m v$", n: "Relativistic momentum." },
    { f: "$u' = \\dfrac{u - v}{1 - uv/c^2}$", n: "Velocity addition." },
    { f: "$ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2$", n: "Spacetime interval." }
  ],

  "general-relativity": [
    { f: "$G_{\\mu\\nu} = \\dfrac{8\\pi G}{c^4} T_{\\mu\\nu}$", n: "Einstein field equations." },
    { f: "$G_{\\mu\\nu} = R_{\\mu\\nu} - \\tfrac{1}{2} R g_{\\mu\\nu}$", n: "Einstein tensor." },
    { f: "$r_s = 2GM/c^2$", n: "Schwarzschild radius." },
    { f: "Geodesic: $\\ddot x^\\mu + \\Gamma^\\mu_{\\alpha\\beta} \\dot x^\\alpha \\dot x^\\beta = 0$", n: "Freely falling test particles." },
    { f: "$d\\tau = \\sqrt{1 - 2GM/(rc^2)}\\,dt$", n: "Gravitational time dilation." },
    { f: "$v = H_0 d$", n: "Hubble's law." },
    { f: "$H_0 \\approx 70$ km/s/Mpc", n: "Hubble constant." }
  ],

  "lagrangian-hamiltonian": [
    { f: "$L = T - V$", n: "Lagrangian." },
    { f: "$\\dfrac{d}{dt}\\dfrac{\\partial L}{\\partial \\dot q} - \\dfrac{\\partial L}{\\partial q} = 0$", n: "Euler-Lagrange equations." },
    { f: "$p = \\partial L/\\partial \\dot q$", n: "Generalized momentum." },
    { f: "$H = \\sum p \\dot q - L$", n: "Hamiltonian." },
    { f: "$\\dot q = \\partial H/\\partial p, \\; \\dot p = -\\partial H/\\partial q$", n: "Hamilton's equations." },
    { f: "$\\{f, g\\} = \\sum \\dfrac{\\partial f}{\\partial q} \\dfrac{\\partial g}{\\partial p} - \\dfrac{\\partial f}{\\partial p} \\dfrac{\\partial g}{\\partial q}$", n: "Poisson bracket." },
    { f: "$S = \\int L\\,dt$", n: "Action." },
    { f: "Noether's theorem", n: "Symmetry ⇒ conservation." }
  ],

  "statistical-mechanics": [
    { f: "$Z = \\sum_i e^{-\\beta E_i}$", n: "Partition function." },
    { f: "$P_i = e^{-\\beta E_i}/Z$", n: "Boltzmann distribution." },
    { f: "$\\langle E \\rangle = -\\partial \\ln Z/\\partial \\beta$", n: "Mean energy." },
    { f: "$F = -k_B T \\ln Z$", n: "Free energy." },
    { f: "$S = k_B \\ln W$", n: "Boltzmann entropy." },
    { f: "Fermi-Dirac: $\\dfrac{1}{e^{(E-\\mu)/k_B T} + 1}$", n: "Fermions." },
    { f: "Bose-Einstein: $\\dfrac{1}{e^{(E-\\mu)/k_B T} - 1}$", n: "Bosons." },
    { f: "Equipartition: $\\tfrac{1}{2} k_B T$ per quadratic DOF", n: "Classical limit." }
  ],

  "qm-foundations": [
    { f: "$i\\hbar \\partial_t \\psi = \\hat H \\psi$", n: "Schrödinger equation." },
    { f: "$\\hat H = \\hat p^2/(2m) + V$", n: "Hamiltonian." },
    { f: "$\\hat p = -i\\hbar \\partial_x$", n: "Momentum operator." },
    { f: "$|\\psi|^2$", n: "Probability density." },
    { f: "$\\langle \\hat O \\rangle = \\int \\psi^* \\hat O \\psi\\,dx$", n: "Expectation value." },
    { f: "$[\\hat x, \\hat p] = i\\hbar$", n: "Canonical commutator." },
    { f: "$\\sigma_x \\sigma_p \\geq \\hbar/2$", n: "Heisenberg uncertainty." },
    { f: "$\\hbar = 1.055 \\times 10^{-34}$ J·s", n: "Reduced Planck." }
  ],

  "qm-1d": [
    { f: "Infinite well: $E_n = \\dfrac{n^2 \\pi^2 \\hbar^2}{2mL^2}$", n: "Box of width $L$." },
    { f: "Infinite well wave: $\\psi_n = \\sqrt{2/L}\\sin(n\\pi x/L)$", n: "Normalized." },
    { f: "Harmonic oscillator: $E_n = \\hbar\\omega(n + 1/2)$", n: "Equally spaced levels." },
    { f: "Zero-point: $E_0 = \\hbar\\omega/2$", n: "Ground state non-zero." },
    { f: "Tunneling: $T \\sim e^{-2\\kappa a}$, $\\kappa = \\sqrt{2m(V_0 - E)}/\\hbar$", n: "Exponential suppression." },
    { f: "Free particle: $E = \\hbar^2 k^2/(2m)$", n: "Plane waves." },
    { f: "Delta well: one bound state for any depth", n: "Even infinitely weak." }
  ],

  "atomic-physics": [
    { f: "$a_0 = \\dfrac{4\\pi\\varepsilon_0 \\hbar^2}{m_e e^2} \\approx 0.529$ Å", n: "Bohr radius." },
    { f: "$E_n = -13.6/n^2$ eV", n: "Hydrogen energy levels." },
    { f: "$1/\\lambda = R(1/n_1^2 - 1/n_2^2)$", n: "Rydberg formula." },
    { f: "Quantum numbers: $n, \\ell, m, m_s$", n: "Four labels per electron." },
    { f: "$\\ell = 0, 1, \\ldots, n - 1$", n: "Orbital constraint." },
    { f: "Spin: $s = 1/2$", n: "Electron is fermion." },
    { f: "Pauli: no two electrons in identical state", n: "Determines shell filling." }
  ],

  "solid-state": [
    { f: "$14$ Bravais lattices in 3D", n: "Possible periodic arrangements." },
    { f: "$E_F = \\dfrac{\\hbar^2 (3\\pi^2 n)^{2/3}}{2m}$", n: "Free-electron Fermi energy." },
    { f: "Drude: $\\sigma = ne^2 \\tau/m$", n: "Conductivity." },
    { f: "Si gap: $\\approx 1.1$ eV", n: "Semiconductor." },
    { f: "Hall coefficient: $R_H = 1/(nq)$", n: "Carrier density." },
    { f: "Wiedemann-Franz: $\\kappa/\\sigma T = \\pi^2 k_B^2/(3e^2)$", n: "Metallic thermal-electrical link." },
    { f: "Debye specific heat (low T): $C_V \\propto T^3$", n: "Phonons." }
  ],

  "nuclear": [
    { f: "$BE = (Zm_p + Nm_n - M)c^2$", n: "Binding energy." },
    { f: "$N(t) = N_0 e^{-\\lambda t}$", n: "Radioactive decay." },
    { f: "$t_{1/2} = \\ln 2/\\lambda$", n: "Half-life." },
    { f: "$A = \\lambda N$", n: "Activity." },
    { f: "$r \\approx 1.2 A^{1/3}$ fm", n: "Nuclear radius." },
    { f: "Most stable: Fe-56", n: "Maximum binding energy per nucleon." },
    { f: "Fission U-235: $\\approx 200$ MeV/event", n: "Energy release." },
    { f: "Magic numbers: $2, 8, 20, 28, 50, 82, 126$", n: "Closed shells." }
  ],

  "particle-physics": [
    { f: "Standard Model: $SU(3) \\times SU(2) \\times U(1)$", n: "Gauge group." },
    { f: "Quarks: u, d, c, s, t, b ($Q = +2/3$ or $-1/3$)", n: "Six flavors." },
    { f: "Leptons: e, μ, τ + neutrinos", n: "Six leptons." },
    { f: "Gauge bosons: γ, $W^\\pm$, Z, g", n: "Force carriers." },
    { f: "Higgs mass: $\\approx 125$ GeV", n: "Discovered 2012." },
    { f: "Proton: uud; Neutron: udd", n: "Baryon content." },
    { f: "$\\alpha \\approx 1/137$ at low energy", n: "EM fine-structure constant." }
  ],

  "astrophysics-cosmology": [
    { f: "$L = 4\\pi R^2 \\sigma T^4$", n: "Stefan-Boltzmann (star luminosity)." },
    { f: "$\\lambda_{\\max} T \\approx 2.9 \\times 10^{-3}$ m·K", n: "Wien's displacement law." },
    { f: "$v = H_0 d$", n: "Hubble's law." },
    { f: "Universe age: $\\approx 13.8$ Gyr", n: "Standard cosmology." },
    { f: "$T_{\\text{CMB}} \\approx 2.725$ K", n: "Microwave background." },
    { f: "$\\Omega_m \\approx 0.32, \\Omega_\\Lambda \\approx 0.68$", n: "Density parameters." },
    { f: "$L_\\odot \\approx 3.8 \\times 10^{26}$ W", n: "Solar luminosity." },
    { f: "Chandrasekhar: $\\approx 1.4 M_\\odot$", n: "Max WD mass." }
  ],

  "plasma-physics": [
    { f: "$\\lambda_D = \\sqrt{\\dfrac{\\varepsilon_0 k_B T}{n e^2}}$", n: "Debye length." },
    { f: "$\\omega_p = \\sqrt{\\dfrac{n e^2}{\\varepsilon_0 m_e}}$", n: "Plasma frequency." },
    { f: "$\\omega_c = eB/m$", n: "Cyclotron frequency." },
    { f: "$r_L = m v_\\perp/(qB)$", n: "Larmor (gyro) radius." },
    { f: "Lawson: $n\\tau T > 5 \\times 10^{21}$ keV·s/m³", n: "Fusion ignition criterion." },
    { f: "MHD: combines fluid + Maxwell", n: "Plasma dynamics framework." },
    { f: "Alfvén speed: $v_A = B/\\sqrt{\\mu_0 \\rho}$", n: "Magnetic wave speed." }
  ],

  "fluid-dynamics": [
    { f: "$\\rho(\\partial_t \\vec v + \\vec v \\cdot \\nabla \\vec v) = -\\nabla p + \\mu \\nabla^2 \\vec v + \\rho \\vec g$", n: "Navier-Stokes." },
    { f: "$\\nabla \\cdot \\vec v = 0$", n: "Incompressibility." },
    { f: "$Re = \\rho v L/\\mu$", n: "Reynolds number." },
    { f: "$Re < 2300$: laminar in pipe", n: "Transition to turbulence." },
    { f: "Stokes drag: $F = 6\\pi\\mu r v$", n: "Low-Reynolds sphere." },
    { f: "$\\Gamma = \\oint \\vec v \\cdot d\\vec r$", n: "Circulation." },
    { f: "Kolmogorov: $\\eta = (\\nu^3/\\epsilon)^{1/4}$", n: "Dissipation scale." }
  ],

  "continuum-elasticity": [
    { f: "$\\sigma = F/A$", n: "Stress." },
    { f: "$\\varepsilon = \\Delta L/L$", n: "Strain." },
    { f: "$\\sigma = E\\varepsilon$", n: "Hooke's law (uniaxial)." },
    { f: "Steel: $E \\approx 200$ GPa", n: "Typical Young's modulus." },
    { f: "Poisson's ratio: $-\\varepsilon_{\\text{trans}}/\\varepsilon_{\\text{axial}}$", n: "Range $-1$ to $1/2$." },
    { f: "$K = -V\\dfrac{\\partial P}{\\partial V}$", n: "Bulk modulus." },
    { f: "Wave speed: $v = \\sqrt{E/\\rho}$", n: "Longitudinal in thin rod." },
    { f: "Euler buckling: $P_{cr} = \\pi^2 EI/L^2$", n: "Critical compressive load." }
  ],

  "central-force": [
    { f: "$\\vec L = $ const", n: "Conserved by central force." },
    { f: "$dA/dt = L/(2m)$", n: "Areal velocity constant (Kepler II)." },
    { f: "$V_{\\text{eff}}(r) = V(r) + \\dfrac{L^2}{2mr^2}$", n: "Effective radial potential." },
    { f: "$T^2 = \\dfrac{4\\pi^2}{GM} a^3$", n: "Kepler III." },
    { f: "Eccentricity: $e = \\sqrt{1 + \\dfrac{2EL^2}{m(GMm)^2}}$", n: "$e < 1$ bound, $e \\geq 1$ unbound." },
    { f: "Inverse-square ⇒ closed orbits", n: "Bertrand's theorem." },
    { f: "Virial: $\\langle T \\rangle = -\\tfrac{1}{2}\\langle V \\rangle$", n: "For $1/r$ potential." }
  ],

  "nonlinear-chaos-physics": [
    { f: "Logistic: $x_{n+1} = r x_n(1 - x_n)$", n: "Simplest chaos model." },
    { f: "Chaos onset: $r \\approx 3.57$", n: "Period-doubling accumulation." },
    { f: "Feigenbaum $\\delta \\approx 4.669$", n: "Universal." },
    { f: "Lyapunov: $\\lambda > 0 \\Leftrightarrow$ chaos", n: "Exponential divergence." },
    { f: "Lorenz: $\\dot x = \\sigma(y-x), \\dot y = x(\\rho - z) - y, \\dot z = xy - \\beta z$", n: "Strange attractor." },
    { f: "KAM theorem", n: "Persistence of quasi-periodic motion." }
  ],

  "angular-momentum-spin": [
    { f: "$[L_i, L_j] = i\\hbar\\epsilon_{ijk} L_k$", n: "Angular momentum algebra." },
    { f: "$L^2 |\\ell, m\\rangle = \\hbar^2 \\ell(\\ell+1)|\\ell, m\\rangle$", n: "Eigenvalue of $L^2$." },
    { f: "$L_z |\\ell, m\\rangle = \\hbar m |\\ell, m\\rangle$", n: "Eigenvalue of $L_z$." },
    { f: "$m = -\\ell, \\ldots, \\ell$ ($2\\ell + 1$ values)", n: "Multiplicity." },
    { f: "$L_\\pm |\\ell, m\\rangle = \\hbar\\sqrt{\\ell(\\ell+1) - m(m\\pm 1)}|\\ell, m\\pm 1\\rangle$", n: "Ladder operators." },
    { f: "Pauli: $\\sigma_x, \\sigma_y, \\sigma_z$", n: "Spin-1/2 operators." },
    { f: "Spin-1/2 ⊗ Spin-1/2 = singlet ⊕ triplet", n: "Addition of two spin-1/2." }
  ],

  "qm-3d-hydrogen": [
    { f: "$\\psi = R_{n\\ell}(r) Y_\\ell^m(\\theta, \\phi)$", n: "Separation in spherical." },
    { f: "$Y_\\ell^m$: spherical harmonics", n: "Angular part." },
    { f: "$E_n = -\\dfrac{13.6}{n^2}$ eV", n: "Hydrogen levels." },
    { f: "$\\psi_{100} = \\dfrac{1}{\\sqrt{\\pi a_0^3}} e^{-r/a_0}$", n: "Ground state." },
    { f: "Degeneracy of level $n$: $n^2$ orbital, $2n^2$ with spin", n: "Hydrogen only." },
    { f: "$a_0 \\approx 0.529$ Å", n: "Bohr radius." },
    { f: "Selection rules: $\\Delta\\ell = \\pm 1$", n: "Electric dipole transitions." }
  ],

  "perturbation-theory": [
    { f: "$H = H_0 + \\lambda H'$", n: "Setup." },
    { f: "$E_n^{(1)} = \\langle n | H' | n \\rangle$", n: "First-order energy." },
    { f: "$|n^{(1)}\\rangle = \\sum_{m \\neq n} \\dfrac{\\langle m | H' | n \\rangle}{E_n - E_m} |m\\rangle$", n: "First-order state." },
    { f: "$E_n^{(2)} = \\sum_{m \\neq n} \\dfrac{|H'_{mn}|^2}{E_n - E_m}$", n: "Second-order energy." },
    { f: "Fermi golden rule: $\\Gamma_{i \\to f} = \\dfrac{2\\pi}{\\hbar}|\\langle f | H' | i \\rangle|^2 \\rho(E_f)$", n: "Transition rate." },
    { f: "Degenerate: diagonalize $H'$ in degenerate subspace first", n: "Special procedure." }
  ],

  "identical-particles": [
    { f: "Bosons: symmetric wavefunction", n: "Integer spin." },
    { f: "Fermions: antisymmetric wavefunction", n: "Half-integer spin." },
    { f: "Pauli exclusion (fermions)", n: "No two in identical state." },
    { f: "Slater determinant: enforces antisymmetry", n: "$N$-fermion construction." },
    { f: "Bose-Einstein: $\\dfrac{1}{e^{(E-\\mu)/k_B T} - 1}$", n: "Boson statistics." },
    { f: "Fermi-Dirac: $\\dfrac{1}{e^{(E-\\mu)/k_B T} + 1}$", n: "Fermion statistics." },
    { f: "Spin-statistics theorem", n: "Tie spin to symmetry, proved in QFT." }
  ],

  "scattering-theory": [
    { f: "$d\\sigma/d\\Omega = |f(\\theta)|^2$", n: "Differential cross section." },
    { f: "Born: $f = -\\dfrac{m}{2\\pi\\hbar^2}\\int e^{-i\\vec q\\cdot\\vec r} V(\\vec r)\\,d^3 r$", n: "First-order approximation." },
    { f: "Rutherford: $\\dfrac{d\\sigma}{d\\Omega} \\propto \\dfrac{1}{\\sin^4(\\theta/2)}$", n: "Coulomb scattering." },
    { f: "Partial waves: $f = \\dfrac{1}{k}\\sum (2\\ell + 1) e^{i\\delta_\\ell}\\sin\\delta_\\ell P_\\ell(\\cos\\theta)$", n: "Phase shifts $\\delta_\\ell$." },
    { f: "Optical theorem: $\\sigma_{\\text{tot}} = \\dfrac{4\\pi}{k}\\text{Im}\\,f(0)$", n: "Forward amplitude." },
    { f: "Mean free path: $\\lambda = 1/(n\\sigma)$", n: "Average distance between scatterings." }
  ],

  "density-matrices": [
    { f: "$\\rho = |\\psi\\rangle\\langle\\psi|$", n: "Pure state." },
    { f: "$\\rho = \\sum p_i |\\psi_i\\rangle\\langle\\psi_i|$", n: "Mixed state." },
    { f: "$\\text{tr}(\\rho) = 1, \\; \\rho \\succeq 0$", n: "Properties." },
    { f: "Pure iff $\\text{tr}(\\rho^2) = 1$", n: "Equivalent to $\\rho^2 = \\rho$." },
    { f: "$\\rho_A = \\text{tr}_B \\rho_{AB}$", n: "Partial trace." },
    { f: "Von Neumann entropy: $S = -\\text{tr}(\\rho \\ln \\rho)$", n: "Quantum entropy." },
    { f: "Lindblad: $\\dot\\rho = -\\tfrac{i}{\\hbar}[H, \\rho] + \\sum_k (L_k \\rho L_k^\\dagger - \\tfrac{1}{2}\\{L_k^\\dagger L_k, \\rho\\})$", n: "Open-system evolution." }
  ],

  "path-integrals": [
    { f: "$\\langle x_f | e^{-iHt/\\hbar} | x_i \\rangle = \\int \\mathcal{D}x\\, e^{iS[x]/\\hbar}$", n: "Feynman propagator." },
    { f: "$S = \\int L\\,dt$", n: "Action functional." },
    { f: "Classical limit: stationary phase, $\\delta S = 0$", n: "Recovers Euler-Lagrange." },
    { f: "Free particle: $K = \\sqrt{\\dfrac{m}{2\\pi i\\hbar t}}e^{im(x_f - x_i)^2/(2\\hbar t)}$", n: "Closed form." },
    { f: "Euclidean (Wick): $t \\to -i\\tau$", n: "Yields partition function." },
    { f: "Functional integral measure $\\mathcal{D}x$", n: "Formal — defined by lattice limits." }
  ],

  "quantum-information": [
    { f: "$|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle, \\; |\\alpha|^2 + |\\beta|^2 = 1$", n: "Qubit." },
    { f: "Bloch sphere: $|\\psi\\rangle = \\cos(\\theta/2)|0\\rangle + e^{i\\phi}\\sin(\\theta/2)|1\\rangle$", n: "Geometric view." },
    { f: "Bell: $|\\Phi^\\pm\\rangle, |\\Psi^\\pm\\rangle$", n: "Four maximally entangled states." },
    { f: "Hadamard: $H|0\\rangle = (|0\\rangle + |1\\rangle)/\\sqrt 2$", n: "Creates superposition." },
    { f: "CNOT: $|c\\rangle|t\\rangle \\to |c\\rangle|t \\oplus c\\rangle$", n: "Two-qubit gate." },
    { f: "No-cloning: $\\nexists U : U|\\psi\\rangle|0\\rangle = |\\psi\\rangle|\\psi\\rangle$", n: "Unknown states can't be copied." },
    { f: "Shor's algorithm: polynomial factoring", n: "On a quantum computer." },
    { f: "Grover: $O(\\sqrt N)$ search", n: "Quadratic speedup." }
  ],

  "symmetries-noether": [
    { f: "Continuous symmetry ⇒ conserved current $\\partial_\\mu j^\\mu = 0$", n: "Noether's theorem." },
    { f: "Translation $\\Rightarrow$ momentum", n: "Spatial homogeneity." },
    { f: "Rotation $\\Rightarrow$ angular momentum", n: "Spatial isotropy." },
    { f: "Time translation $\\Rightarrow$ energy", n: "Temporal homogeneity." },
    { f: "Global $U(1) \\Rightarrow$ charge", n: "Phase symmetry." },
    { f: "Lorentz $\\Rightarrow$ stress-energy tensor conservation", n: "$\\partial_\\mu T^{\\mu\\nu} = 0$." },
    { f: "Gauge symmetry $\\Rightarrow$ local current conservation", n: "Higher level — Noether's second theorem." }
  ],

  "classical-field-theory": [
    { f: "$\\mathcal{L}$ — Lagrangian density", n: "Function of fields and derivatives." },
    { f: "$S = \\int d^4 x \\, \\mathcal{L}$", n: "Action." },
    { f: "$\\partial_\\mu \\dfrac{\\partial \\mathcal{L}}{\\partial(\\partial_\\mu \\phi)} - \\dfrac{\\partial \\mathcal{L}}{\\partial \\phi} = 0$", n: "Field Euler-Lagrange." },
    { f: "Klein-Gordon: $(\\Box + m^2)\\phi = 0$", n: "Scalar field eq." },
    { f: "Dirac: $(i\\gamma^\\mu \\partial_\\mu - m)\\psi = 0$", n: "Spinor field eq." },
    { f: "$F_{\\mu\\nu} = \\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu$", n: "EM field strength." },
    { f: "$\\mathcal{L}_{\\text{EM}} = -\\tfrac{1}{4} F_{\\mu\\nu} F^{\\mu\\nu}$", n: "EM Lagrangian density." }
  ],

  "qft": [
    { f: "$\\phi(x) = \\int \\dfrac{d^3 k}{(2\\pi)^3 \\sqrt{2\\omega_k}}(a_k e^{-ikx} + a_k^\\dagger e^{ikx})$", n: "Field expansion." },
    { f: "$[a_k, a_{k'}^\\dagger] = (2\\pi)^3 \\delta(k - k')$", n: "Bosonic commutator." },
    { f: "Propagator: $\\dfrac{i}{p^2 - m^2 + i\\epsilon}$", n: "Scalar Feynman propagator." },
    { f: "QED vertex: $-ie\\gamma^\\mu$", n: "Coupling." },
    { f: "$\\alpha = e^2/(4\\pi\\varepsilon_0 \\hbar c) \\approx 1/137$", n: "Fine structure constant." },
    { f: "Vacuum energy: $\\sum_k \\tfrac{1}{2}\\hbar\\omega_k$", n: "Divergent, renormalized away." },
    { f: "Compton wavelength: $\\lambda_C = h/(mc)$", n: "Natural length scale." }
  ],

  "renormalization": [
    { f: "$g_{\\text{bare}} = g_R + \\delta g$", n: "Absorb divergence into counterterm." },
    { f: "$\\beta(g) = \\mu \\partial g/\\partial \\mu$", n: "Beta function." },
    { f: "QED: $\\beta > 0$", n: "Coupling grows at high energy." },
    { f: "QCD: $\\beta < 0$", n: "Asymptotic freedom." },
    { f: "Dimensional reg: $D = 4 - \\varepsilon$", n: "Regulator." },
    { f: "Wilsonian RG: integrate out high-$k$ modes", n: "Flow in coupling space." },
    { f: "Fixed points: $\\beta(g^*) = 0$", n: "Scale invariance / critical points." }
  ],

  "radiation-theory": [
    { f: "Larmor: $P = \\dfrac{q^2 a^2}{6\\pi\\varepsilon_0 c^3}$", n: "Non-relativistic." },
    { f: "Dipole: $P = \\dfrac{\\omega^4 p_0^2}{12\\pi\\varepsilon_0 c^3}$", n: "Oscillating dipole." },
    { f: "Rayleigh: scattering $\\propto 1/\\lambda^4$", n: "Blue sky." },
    { f: "Synchrotron: relativistic, beamed", n: "From charged particles in B." },
    { f: "Retarded time: $t' = t - r/c$", n: "Causality in radiation." },
    { f: "Multipole expansion: $1/r^n$ falloff", n: "Higher moments fall faster." },
    { f: "Abraham-Lorentz: $F_{\\text{rad}} = \\dfrac{q^2}{6\\pi\\varepsilon_0 c^3}\\dot{\\vec a}$", n: "Radiation reaction." }
  ],

  "em-waves-matter": [
    { f: "$n = \\sqrt{\\varepsilon_r \\mu_r}$", n: "Refractive index." },
    { f: "$v_p = \\omega/k$", n: "Phase velocity." },
    { f: "$v_g = d\\omega/dk$", n: "Group velocity." },
    { f: "Critical angle: $\\sin\\theta_c = n_2/n_1$", n: "Total internal reflection." },
    { f: "Brewster angle: $\\tan\\theta_B = n_2/n_1$", n: "Reflected light fully polarized." },
    { f: "Skin depth: $\\delta = \\sqrt{2/(\\mu\\sigma\\omega)}$", n: "Conductor EM penetration." },
    { f: "Plasma frequency: reflects below, transmits above", n: "Cutoff." }
  ],

  "lasers": [
    { f: "$A_{21}, B_{12}, B_{21}$ (Einstein coefficients)", n: "$A_{21} = (8\\pi h\\nu^3/c^3) B_{21}$, $g_1 B_{12} = g_2 B_{21}$." },
    { f: "Population inversion: $N_2 > N_1$", n: "Required for net amplification." },
    { f: "Threshold: gain = losses", n: "Lasing condition." },
    { f: "$L_c \\sim c/\\Delta\\nu$", n: "Coherence length." },
    { f: "He-Ne: $632.8$ nm", n: "Classic visible laser line." },
    { f: "Cavity modes: $\\nu_n = nc/(2L)$", n: "Fabry-Pérot resonator." },
    { f: "Q-switched, mode-locked", n: "Pulse-generation techniques." }
  ],

  "quantum-optics": [
    { f: "Coherent state: $\\hat a |\\alpha\\rangle = \\alpha|\\alpha\\rangle$", n: "Eigenstate of annihilation." },
    { f: "$|\\alpha\\rangle = e^{-|\\alpha|^2/2}\\sum \\dfrac{\\alpha^n}{\\sqrt{n!}}|n\\rangle$", n: "Number-state expansion." },
    { f: "Poisson statistics for coherent: $\\langle n \\rangle = |\\alpha|^2$, $\\text{Var}(n) = |\\alpha|^2$", n: "Sub-classical regime." },
    { f: "$g^{(2)}(0) = 1$ coherent; $< 1$ antibunched", n: "Photon-statistics indicator." },
    { f: "Squeezed: $\\Delta x \\Delta p = \\hbar/2$ saturated asymmetrically", n: "One quadrature noise reduced." },
    { f: "Jaynes-Cummings: $H = \\hbar\\omega(\\hat a^\\dagger \\hat a + \\hat\\sigma_+\\hat\\sigma_-/2) + \\hbar g(\\hat a^\\dagger \\hat\\sigma_- + \\hat a \\hat\\sigma_+)$", n: "Two-level atom + cavity mode." }
  ],

  "amo": [
    { f: "Doppler limit: $T_D = \\hbar\\Gamma/(2k_B)$", n: "Lowest cooling temperature." },
    { f: "Recoil limit: $T_R = \\hbar^2 k^2/(m k_B)$", n: "Below Doppler with sub-Doppler techniques." },
    { f: "MOT: counter-propagating beams + magnetic gradient", n: "Standard trap." },
    { f: "$T_c^{\\text{BEC}} \\propto n^{2/3} \\hbar^2/(m k_B)$", n: "BEC critical temperature." },
    { f: "$\\lambda_{dB} = h/(mv)$", n: "Thermal de Broglie." },
    { f: "BEC when $n\\lambda_{dB}^3 \\gtrsim 2.6$", n: "Quantum degeneracy." },
    { f: "Atomic clock: Cs-133 hyperfine transition", n: "$9192631770$ Hz." }
  ],

  "phase-transitions": [
    { f: "First-order: latent heat, discontinuous order param", n: "E.g., ice ↔ water." },
    { f: "Second-order: no latent heat, continuous order param", n: "E.g., Curie point." },
    { f: "Landau: $F = a(T - T_c) m^2 + b m^4 + \\ldots$", n: "Free energy expansion." },
    { f: "Mean-field $T_c$: $k_B T_c = z J$ (Ising)", n: "$z$ = coordination." },
    { f: "Critical exponents: $\\alpha, \\beta, \\gamma, \\delta, \\nu, \\eta$", n: "Universal near $T_c$." },
    { f: "Ising 2D: $\\beta = 1/8, \\gamma = 7/4$", n: "Onsager." },
    { f: "Mean field: $\\beta = 1/2$ (incorrect except above upper critical dim)", n: "Universality class indicator." }
  ],

  "nonequilibrium-statmech": [
    { f: "Boltzmann eq: $(\\partial_t + \\vec v \\cdot \\nabla_x + \\vec F \\cdot \\nabla_v) f = (\\partial_t f)_{\\text{coll}}$", n: "Phase-space distribution." },
    { f: "Relaxation: $(\\partial_t f)_{\\text{coll}} \\approx -(f - f_0)/\\tau$", n: "Simple closure." },
    { f: "H-theorem: $dH/dt \\leq 0$", n: "Increase of entropy." },
    { f: "FDT: $\\chi''(\\omega) = (1 - e^{-\\beta\\hbar\\omega})/(2\\hbar) \\, S(\\omega)$", n: "Fluctuation-dissipation." },
    { f: "Onsager: $L_{ij} = L_{ji}$", n: "Reciprocity." },
    { f: "Einstein: $D = \\mu k_B T$", n: "Diffusion-mobility." },
    { f: "Wiedemann-Franz: $\\kappa/(\\sigma T) = L_0$", n: "Metals." }
  ],

  "superconductivity": [
    { f: "$T_c$: critical temperature", n: "Below it, SC behavior." },
    { f: "Meissner: $\\vec B = 0$ inside", n: "Perfect diamagnetism." },
    { f: "$\\lambda_L$: penetration depth", n: "$B$ falloff scale." },
    { f: "$\\xi$: coherence length", n: "Cooper pair size." },
    { f: "$2\\Delta(0) \\approx 3.5\\, k_B T_c$", n: "BCS gap." },
    { f: "Cooper pair charge: $2e$", n: "Bound electron pair." },
    { f: "Josephson AC: $\\omega = 2eV/\\hbar$", n: "Frequency from DC voltage." },
    { f: "Flux quantum: $\\Phi_0 = h/(2e)$", n: "Vortex flux." }
  ],

  "quantum-hall-topological": [
    { f: "$\\sigma_{xy} = \\nu e^2/h$", n: "Quantized Hall conductance." },
    { f: "$\\nu = nh/(eB)$", n: "Filling factor." },
    { f: "Landau levels: $E_n = \\hbar\\omega_c(n + 1/2)$, $\\omega_c = eB/m$", n: "Energies in $B$." },
    { f: "FQHE: Laughlin states at $\\nu = 1/3, 1/5, \\ldots$", n: "Many-body topological." },
    { f: "Chern number $\\in \\mathbb{Z}$", n: "Topological invariant." },
    { f: "Topological insulator: bulk gap, conducting edge", n: "Symmetry-protected." },
    { f: "Berry phase: $\\gamma = i\\oint \\langle \\psi | \\nabla | \\psi \\rangle \\cdot d\\vec R$", n: "Geometric phase." }
  ],

  "phonons": [
    { f: "1D chain: $\\omega(q) = 2\\sqrt{K/m}|\\sin(qa/2)|$", n: "Dispersion." },
    { f: "Sound speed: $v_s = a\\sqrt{K/m}$", n: "Long-wavelength limit." },
    { f: "Debye temperature: $\\Theta_D = \\hbar\\omega_D/k_B$", n: "Maximum mode scale." },
    { f: "Debye specific heat: $C_V \\propto T^3$ (low T)", n: "Universal." },
    { f: "Phonon = quantum of vibration", n: "Bose statistics." },
    { f: "Acoustic vs optical branches", n: "Two-atom unit cells." },
    { f: "Brillouin zone: Wigner-Seitz of reciprocal lattice", n: "Periodicity in $k$." }
  ],

  "stellar-evolution": [
    { f: "MS lifetime $\\propto M^{-2.5}$", n: "From $L \\propto M^{3.5}$." },
    { f: "Hayashi track", n: "Pre-main-sequence convective phase." },
    { f: "Eddington luminosity: $L_E = 4\\pi G M m_p c / \\sigma_T$", n: "Radiation-pressure limit." },
    { f: "Chandrasekhar: $M_{Ch} \\approx 1.4 M_\\odot$", n: "WD upper mass." },
    { f: "TOV limit: $\\sim 2$–$3 M_\\odot$", n: "NS upper mass." },
    { f: "Sun's age: $\\sim 4.6$ Gyr; lifetime $\\sim 10$ Gyr", n: "Solar context." },
    { f: "Main sequence: H → He fusion", n: "Hydrogen burning phase." }
  ],

  "stellar-nucleosynthesis": [
    { f: "pp chain: $4\\,{}^1\\text{H} \\to {}^4\\text{He} + 26.7$ MeV", n: "Sun's main process." },
    { f: "CNO: dominant for $T \\gtrsim 2 \\times 10^7$ K", n: "Heavier stars." },
    { f: "Triple-α: $3\\alpha \\to {}^{12}\\text{C}$", n: "Carbon synthesis." },
    { f: "Iron peak: ${}^{56}\\text{Fe}$ most bound", n: "End of stellar fusion." },
    { f: "r-process: rapid n-capture, NS mergers / SNe", n: "Heavy elements (Au, U)." },
    { f: "s-process: slow n-capture in AGB stars", n: "Up to ${}^{209}\\text{Bi}$." },
    { f: "Solar metallicity: $Z_\\odot \\approx 0.014$", n: "Reference value." }
  ],

  "compact-objects": [
    { f: "$M_{Ch} \\approx 1.4 M_\\odot$", n: "Chandrasekhar mass." },
    { f: "WD density: $\\sim 10^9$ kg/m³", n: "Earth-sized, sun-mass." },
    { f: "NS density: $\\sim 10^{17}$ kg/m³", n: "Nuclear density." },
    { f: "NS radius: $\\sim 10$ km", n: "Compact." },
    { f: "$r_s = 2GM/c^2$", n: "Schwarzschild radius." },
    { f: "$T_H = \\hbar c^3/(8\\pi GMk_B)$", n: "Hawking temperature." },
    { f: "$S_{BH} = k_B A/(4\\ell_P^2)$", n: "Bekenstein-Hawking entropy." },
    { f: "Sgr A* mass: $\\approx 4 \\times 10^6 M_\\odot$", n: "Milky Way center." }
  ],

  "galactic-dynamics": [
    { f: "Rotation curves: flat at large $r$ ⇒ dark matter", n: "Observational hallmark." },
    { f: "$M(r) \\sim v^2 r / G$", n: "Enclosed mass from rotation." },
    { f: "Virial: $\\langle T \\rangle = -\\tfrac{1}{2}\\langle V \\rangle$", n: "Bound system." },
    { f: "Tully-Fisher: $L \\propto v^4$", n: "Spirals." },
    { f: "Faber-Jackson: $L \\propto \\sigma^4$", n: "Ellipticals." },
    { f: "MW DM halo mass: $\\sim 10^{12} M_\\odot$", n: "Estimate." },
    { f: "Density wave theory", n: "Spiral arm origin." }
  ],

  "bbn-cmb-inflation": [
    { f: "Primordial He fraction: $Y_p \\approx 0.245$", n: "BBN prediction." },
    { f: "$T_{\\text{CMB}} \\approx 2.725$ K today", n: "Cosmic blackbody." },
    { f: "Recombination: $z \\sim 1100$, $T \\sim 3000$ K", n: "Universe became transparent." },
    { f: "Acoustic peaks at $\\ell \\sim 220, 540, 800, \\ldots$", n: "CMB power spectrum." },
    { f: "Inflation: $\\sim 60$ e-folds", n: "Solves horizon/flatness." },
    { f: "Scalar spectral index: $n_s \\approx 0.965$", n: "Almost scale-invariant." },
    { f: "$\\Omega_b h^2 \\approx 0.022$", n: "Baryon density from CMB." }
  ],

  "gravitational-waves": [
    { f: "$h \\sim \\Delta L/L$", n: "Strain amplitude." },
    { f: "Quadrupole: $P = \\dfrac{G}{5c^5}\\langle \\dddot Q_{ij}^2 \\rangle$", n: "GW power." },
    { f: "Speed: $c$", n: "Same as light." },
    { f: "Two polarizations: $+$ and $\\times$", n: "Tensor modes." },
    { f: "Chirp: $f \\propto (t_c - t)^{-3/8}$", n: "Inspiral frequency rise." },
    { f: "Strain: $h \\sim 10^{-21}$ typical", n: "Tiny but measurable." },
    { f: "GW150914: first detection", n: "September 14, 2015." }
  ],

  "high-energy-astrophysics": [
    { f: "AGN $L \\lesssim 10^{47}$ erg/s", n: "Accreting SMBH luminosity." },
    { f: "GRB: $\\sim 10^{52}$ erg isotropic", n: "Most luminous events." },
    { f: "CR spectrum: $\\propto E^{-2.7}$", n: "Up to knee at $\\sim 10^{15}$ eV." },
    { f: "GZK cutoff: $\\sim 5 \\times 10^{19}$ eV", n: "Suppresses UHECR." },
    { f: "Synchrotron: $\\propto B^2 \\gamma^2$", n: "Relativistic charged particles." },
    { f: "Inverse Compton: low-$\\nu$ photon + high-$\\gamma$ electron", n: "Up-scattering." },
    { f: "Eddington for SMBH: $\\sim 1.3 \\times 10^{38}(M/M_\\odot)$ erg/s", n: "Max luminosity." }
  ],

  "math-methods-physics": [
    { f: "Legendre, Bessel, Hermite, Laguerre", n: "Classical special functions." },
    { f: "Green's function: response to delta source", n: "Solves linear PDEs by convolution." },
    { f: "Heat: $G = (4\\pi\\alpha t)^{-1/2} e^{-x^2/(4\\alpha t)}$", n: "1D Gaussian kernel." },
    { f: "Contour integral $\\to$ residue sum", n: "$2\\pi i \\sum \\text{Res}$." },
    { f: "Saddle point: $\\int e^{Nf(x)} dx \\approx e^{Nf(x_0)}\\sqrt{2\\pi/(N|f''(x_0)|)}$", n: "Asymptotic." },
    { f: "Sturm-Liouville: real eigenvalues, orthogonal eigenfunctions", n: "Standard form." },
    { f: "WKB: $\\psi \\approx \\dfrac{1}{\\sqrt{p(x)}} e^{\\pm i\\int p\\,dx/\\hbar}$", n: "Semiclassical." }
  ],

  "group-theory-physics": [
    { f: "$SU(2)$ generators: Pauli/$2$", n: "Three generators." },
    { f: "$SU(3)$: Gell-Mann matrices, 8 generators", n: "Underlies QCD." },
    { f: "Standard Model: $SU(3) \\times SU(2) \\times U(1)$", n: "Gauge group." },
    { f: "Lorentz: $SO(3, 1)$, double cover $SL(2, \\mathbb{C})$", n: "Spacetime symmetry." },
    { f: "Crystallographic point groups: $32$ in 3D", n: "Discrete." },
    { f: "Space groups: $230$", n: "Crystallographic." },
    { f: "Representations: $D^j$ of $SU(2)$, labeled by half-integer $j$", n: "Spin labels." }
  ],

  "computational-physics": [
    { f: "MC integration error: $\\sigma/\\sqrt N$", n: "Independent of dimension." },
    { f: "Metropolis: accept with $\\min(1, e^{-\\beta \\Delta E})$", n: "Boltzmann sampling." },
    { f: "Verlet: $x_{n+1} = 2x_n - x_{n-1} + (\\Delta t)^2 a$", n: "Symplectic." },
    { f: "RK4: 4-stage update, $O(h^4)$", n: "Standard ODE solver." },
    { f: "FFT: $O(N \\log N)$", n: "Cooley-Tukey." },
    { f: "Detailed balance for correct equilibrium", n: "Required for Markov chain MC." },
    { f: "Multigrid: $O(N)$ for elliptic PDEs", n: "Hierarchical solver." }
  ],

  "soft-matter-biophysics": [
    { f: "Polymer end-to-end: $\\langle R^2 \\rangle = N b^2$", n: "Random walk model." },
    { f: "Flory exponent: $R \\sim N^\\nu$, $\\nu = 3/5$ in good solvent", n: "Self-avoiding." },
    { f: "Persistence length $\\ell_p$", n: "Worm-like chain stiffness scale." },
    { f: "DNA $\\ell_p \\approx 50$ nm", n: "Genome mechanics." },
    { f: "Membrane: $E = \\tfrac{\\kappa}{2}\\int (2H)^2\\,dA$", n: "Helfrich curvature energy." },
    { f: "Motor force: $\\sim$ pN, step $\\sim$ nm", n: "Kinesin, myosin scales." },
    { f: "ATP hydrolysis: $\\sim 20\\, k_B T$ ($\\sim 0.5$ eV)", n: "Cell energy unit." }
  ]
};
