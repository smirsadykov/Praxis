// Encyclopedia-style expansion: 8 additional practice problems per topic
// and longer-form expository articles for foundational topics. All content
// is original prose covering universal mathematical and physical concepts.

(function () {
  window.ENCYCLOPEDIA_PROBLEMS = window.ENCYCLOPEDIA_PROBLEMS || {};
  window.ENCYCLOPEDIA_ARTICLE  = window.ENCYCLOPEDIA_ARTICLE  || {};

  // ============================================================
  // PROBLEM SETS: 8 fresh problems per topic
  // ============================================================
  Object.assign(window.ENCYCLOPEDIA_PROBLEMS, {

    // ===== MATH =====
    "arithmetic-foundations": [
      { q: "Compute $(-7) + 4 - (-3)$.", a: "0" },
      { q: "$|{-9}| \\cdot |{-4}| = ?$", a: "36" },
      { q: "Evaluate $5 + 6 \\cdot 2 - 8/4$.", a: "15" },
      { q: "$\\gcd(48, 180)$?", a: "12" },
      { q: "$\\operatorname{lcm}(15, 20)$?", a: "60" },
      { q: "Prime factorize $504$.", a: "$2^3 \\cdot 3^2 \\cdot 7$" },
      { q: "Compute $(-2)^5 + 2^5$.", a: "0" },
      { q: "$|{-3} - 7| = ?$", a: "10" }
    ],
    "fractions-percentages": [
      { q: "$\\dfrac{2}{3} + \\dfrac{1}{4} = ?$", a: "11/12" },
      { q: "$\\dfrac{5}{6} \\cdot \\dfrac{3}{10} = ?$", a: "1/4" },
      { q: "Simplify $\\dfrac{84}{126}$.", a: "2/3" },
      { q: "Convert $5/8$ to a percent.", a: "62.5%" },
      { q: "$15\\%$ of $80$?", a: "12" },
      { q: "Increase $200$ by $25\\%$.", a: "250" },
      { q: "$12$ is what percent of $48$?", a: "25%" },
      { q: "Divide $\\dfrac{7}{12}$ by $\\dfrac{14}{9}$.", a: "3/8" }
    ],
    "exponents-roots": [
      { q: "Simplify $(2x^3)^4$.", a: "$16 x^{12}$" },
      { q: "Evaluate $27^{2/3}$.", a: "9" },
      { q: "Simplify $\\sqrt{200}$.", a: "$10\\sqrt 2$" },
      { q: "Compute $4^{-3/2}$.", a: "1/8" },
      { q: "Solve $5^{2x} = 125$.", a: "x = 3/2" },
      { q: "Rationalize $\\dfrac{3}{\\sqrt 7}$.", a: "$3\\sqrt 7/7$" },
      { q: "Simplify $\\sqrt[3]{-64}$.", a: "-4" },
      { q: "Compute $9^{0.5} + 16^{0.25}$.", a: "5" }
    ],
    "ratios-proportions": [
      { q: "$x:y = 5:8$. If $y = 32$, find $x$.", a: "20" },
      { q: "If $a:b = 4:9$ and $b:c = 3:7$, find $a:c$.", a: "4:21" },
      { q: "Divide \\$300 in ratio $2:3:5$.", a: "60, 90, 150" },
      { q: "Speed $60$ km/h to m/s.", a: "50/3 ≈ 16.67" },
      { q: "Map ratio $1:50000$. 8 cm on map = ? km.", a: "4" },
      { q: "$y$ inversely proportional to $x$. $y=10$ at $x=3$. Find $y$ at $x=5$.", a: "6" },
      { q: "12 workers do a job in 15 days. How many days for 20?", a: "9" },
      { q: "Mixture 3:5 of milk:water. Total 32 L. Volume of milk?", a: "12" }
    ],
    "linear-equations": [
      { q: "Solve $5x - 9 = 16$.", a: "x = 5" },
      { q: "Solve $7(x - 2) = 3x + 6$.", a: "x = 5" },
      { q: "Solve $\\dfrac{x}{3} + \\dfrac{x}{4} = 14$.", a: "x = 24" },
      { q: "Find slope through $(2, -3)$ and $(5, 6)$.", a: "3" },
      { q: "Equation of line through $(1, 4)$ with slope $-2$.", a: "y = -2x + 6" },
      { q: "x-intercept of $3x - 4y = 12$.", a: "4" },
      { q: "Solve $\\dfrac{2x+1}{3} = \\dfrac{x-1}{2}$.", a: "x = -5" },
      { q: "Sum of three consecutive integers is 84. Smallest?", a: "27" }
    ],
    "inequalities": [
      { q: "Solve $4x - 7 < 5$.", a: "x < 3" },
      { q: "Solve $-3x + 1 \\geq 7$.", a: "x ≤ -2" },
      { q: "Solve $|x - 4| < 2$.", a: "2 < x < 6" },
      { q: "Solve $|2x + 1| \\geq 5$.", a: "x ≤ -3 or x ≥ 2" },
      { q: "Solve $x^2 - 4 > 0$.", a: "x < -2 or x > 2" },
      { q: "Solve $\\dfrac{x-2}{x+3} \\leq 0$.", a: "-3 < x ≤ 2" },
      { q: "Solve $3 < 2x - 1 \\leq 9$.", a: "2 < x ≤ 5" },
      { q: "Smallest integer $x$ with $4x - 7 \\geq 0$.", a: "2" }
    ],
    "plane-geometry": [
      { q: "Area of triangle with sides 5, 12, 13.", a: "30" },
      { q: "Sum of interior angles of a 10-gon (degrees).", a: "1440" },
      { q: "Each angle of a regular hexagon (degrees).", a: "120" },
      { q: "Diagonal of a unit square.", a: "$\\sqrt 2$" },
      { q: "Area of circle with circumference $10\\pi$.", a: "$25\\pi$" },
      { q: "Right triangle, legs 9 and 12. Hypotenuse.", a: "15" },
      { q: "Two parallel lines cut by a transversal. If one angle is 70°, find alternate-interior.", a: "70°" },
      { q: "Area of equilateral triangle, side 4.", a: "$4\\sqrt 3$" }
    ],
    "set-logic": [
      { q: "$|A|=8$, $|B|=12$, $|A \\cap B|=3$. $|A \\cup B|$?", a: "17" },
      { q: "Number of subsets of $\\{a,b,c,d,e\\}$.", a: "32" },
      { q: "$A = \\{1,2,3\\}$, $B = \\{2,3,4\\}$. $A \\setminus B$?", a: "{1}" },
      { q: "Negate $\\forall x (P(x) \\to Q(x))$.", a: "$\\exists x(P(x) \\land \\neg Q(x))$" },
      { q: "$(P \\lor Q) \\land \\neg P$ implies?", a: "Q" },
      { q: "Cardinality of $\\mathbb Z \\times \\mathbb Z$?", a: "countable" },
      { q: "Power set of $\\emptyset$.", a: "{∅}" },
      { q: "Equivalence relation properties (number)?", a: "3" }
    ],
    "number-theory": [
      { q: "$5^{20} \\bmod 7$?", a: "2" },
      { q: "$\\phi(36)$?", a: "12" },
      { q: "Number of divisors of 60.", a: "12" },
      { q: "Smallest prime > 50.", a: "53" },
      { q: "Solve $7x \\equiv 4 \\pmod {15}$.", a: "x = 7" },
      { q: "$\\gcd(143, 91)$.", a: "13" },
      { q: "Is 2027 prime?", a: "Yes" },
      { q: "Sum of divisors of 12.", a: "28" }
    ],
    "combinatorics": [
      { q: "$\\binom{10}{4}$?", a: "210" },
      { q: "Number of 5-letter strings from $\\{A,B,C\\}$.", a: "243" },
      { q: "Arrangements of letters in BANANA.", a: "60" },
      { q: "Number of ways to choose 3 books from 12.", a: "220" },
      { q: "Integer solutions to $x_1+x_2+x_3 = 8$, $x_i \\geq 0$.", a: "45" },
      { q: "Derangements of 4 elements.", a: "9" },
      { q: "$P(\\text{5 cards from 52, all hearts}) \\times \\binom{52}{5}$.", a: "$\\binom{13}{5} = 1287$" },
      { q: "Number of permutations of 7 objects.", a: "5040" }
    ],
    "systems-of-equations": [
      { q: "Solve $x + y = 9$, $x - y = 3$.", a: "x=6, y=3" },
      { q: "Solve $2x + 3y = 12$, $4x - y = 10$.", a: "x=3, y=2" },
      { q: "Determinant of $\\begin{pmatrix}3 & 1\\\\2 & 4\\end{pmatrix}$.", a: "10" },
      { q: "When is $\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix}$ singular?", a: "ad = bc" },
      { q: "Cramer's rule: $x$ for $2x + y = 5, x - y = 1$.", a: "2" },
      { q: "Solve $x + 2y - z = 3$, $2x - y + z = 0$, $x + y + z = 6$.", a: "x=1, y=2, z=3" },
      { q: "Rank of $\\begin{pmatrix}1 & 2 \\\\ 2 & 4\\end{pmatrix}$.", a: "1" },
      { q: "Two equations, three unknowns: dimension of solution space (if consistent)?", a: "at least 1" }
    ],
    "quadratic-equations": [
      { q: "Solve $x^2 - 7x + 12 = 0$.", a: "x = 3 or 4" },
      { q: "Discriminant of $2x^2 + 3x - 5$.", a: "49" },
      { q: "Sum of roots of $3x^2 - 12x + 7 = 0$.", a: "4" },
      { q: "Product of roots of $5x^2 + 2x - 8$.", a: "-8/5" },
      { q: "Solve $x^2 = 5x$.", a: "x = 0 or 5" },
      { q: "Min of $x^2 - 6x + 11$.", a: "2" },
      { q: "Solve $(x-1)(x+3) = 5$.", a: "x = -4 or 2" },
      { q: "Complete the square: $x^2 + 8x = 9$.", a: "(x+4)² = 25" }
    ],
    "polynomials-rational": [
      { q: "Factor $x^3 - 8$.", a: "$(x-2)(x^2+2x+4)$" },
      { q: "Remainder of $x^4 - 3x + 1$ at $x=1$.", a: "-1" },
      { q: "Sum of roots of $x^4 - 2x^3 + x - 5 = 0$.", a: "2" },
      { q: "Vertical asymptote of $\\dfrac{x+1}{x^2-9}$.", a: "x = ±3" },
      { q: "Horizontal asymptote of $\\dfrac{3x^2+1}{x^2-4}$.", a: "y = 3" },
      { q: "Rational roots of $x^3 - 4x^2 + x + 6$.", a: "-1, 2, 3" },
      { q: "Expand $(x+y)^4$ coefficient of $x^2 y^2$.", a: "6" },
      { q: "Degree of $(x^2 + 1)(x^3 + x)$.", a: "5" }
    ],
    "functions-graphs": [
      { q: "Domain of $\\sqrt{4 - x^2}$.", a: "[-2, 2]" },
      { q: "$f(x) = x^2 + 1$. $f(f(2))$?", a: "26" },
      { q: "Range of $\\sin x + 2$.", a: "[1, 3]" },
      { q: "Is $f(x) = x|x|$ odd?", a: "Yes" },
      { q: "Inverse of $f(x) = (x+3)/2$.", a: "2x - 3" },
      { q: "Vertex of $y = -2(x-1)^2 + 5$.", a: "(1, 5)" },
      { q: "y-intercept of $y = 3 - 2x + x^2$.", a: "3" },
      { q: "Composition $f(g(x))$ for $f = x+2$, $g = x^2$.", a: "x² + 2" }
    ],
    "logarithms": [
      { q: "$\\log_2 32$?", a: "5" },
      { q: "Solve $\\log_3(x) = 4$.", a: "x = 81" },
      { q: "$\\log_{10}(1000) - \\log_{10}(10)$?", a: "2" },
      { q: "Solve $e^{2x} = 7$.", a: "$x = \\ln 7/2$" },
      { q: "$\\log_a b = 3$. Then $\\log_b a = ?$", a: "1/3" },
      { q: "$\\log_4 8$?", a: "3/2" },
      { q: "$\\ln(e^7)$?", a: "7" },
      { q: "Number of digits in $2^{100}$.", a: "31" }
    ],
    "sequences-series": [
      { q: "10th term of $a_n = 3n - 1$.", a: "29" },
      { q: "Sum $\\sum_{n=1}^{20} n$.", a: "210" },
      { q: "Sum of geometric $1 + 1/2 + 1/4 + \\ldots$.", a: "2" },
      { q: "Does $\\sum (-1)^n/n$ converge?", a: "Yes" },
      { q: "Ratio test: $\\sum n!/n^n$. Converge?", a: "Yes" },
      { q: "Sum of first 50 odd integers.", a: "2500" },
      { q: "Limit of $a_n = \\sqrt{n^2+1} - n$.", a: "0" },
      { q: "10th term of geometric with $a_1 = 2$, $r = 3$.", a: "$2 \\cdot 3^9 = 39366$" }
    ],
    "trigonometry": [
      { q: "$\\sin(\\pi/6)$.", a: "1/2" },
      { q: "$\\cos(2\\pi/3)$.", a: "-1/2" },
      { q: "Solve $\\tan x = 1$ in $[0, 2\\pi)$.", a: "π/4, 5π/4" },
      { q: "$\\sin^2(15°) + \\cos^2(15°)$.", a: "1" },
      { q: "$\\sin(A + B) - \\sin(A - B) = ?$", a: "$2\\cos A \\sin B$" },
      { q: "Largest angle of triangle with sides 3, 4, 6.", a: "$\\arccos(-11/24) \\approx 117.3°$" },
      { q: "$\\cos(120°)$?", a: "-1/2" },
      { q: "Convert $5\\pi/6$ rad to degrees.", a: "150" }
    ],
    "probability": [
      { q: "Roll 2 dice. P(sum = 8)?", a: "5/36" },
      { q: "5 cards from 52. P(all same suit)?", a: "≈0.00198" },
      { q: "P(at least one 6 in 4 rolls)?", a: "≈0.518" },
      { q: "Coin tossed 8 times. P(exactly 5 heads)?", a: "7/32" },
      { q: "Two events $A, B$ with $P(A)=0.3, P(B)=0.5, P(A\\cap B) = 0.2$. $P(A|B)$?", a: "0.4" },
      { q: "$E[X]$ for fair 6-sided die.", a: "3.5" },
      { q: "$\\text{Var}(X)$ same die.", a: "35/12 ≈ 2.917" },
      { q: "P(king or heart) from standard deck?", a: "4/13" }
    ],
    "statistics": [
      { q: "Median of {3, 7, 2, 8, 5}.", a: "5" },
      { q: "Mean of {1, 2, 3, 4, 5}.", a: "3" },
      { q: "Sample variance of {2, 4, 6, 8}.", a: "20/3 ≈ 6.67" },
      { q: "Correlation of $y = 2x + 1$ exactly.", a: "1" },
      { q: "z-score of $x = 75$ given $\\mu = 65, \\sigma = 5$.", a: "2" },
      { q: "95% CI half-width with $\\sigma = 1, n = 100$.", a: "0.196" },
      { q: "p-value < $\\alpha$: reject or accept H₀?", a: "Reject" },
      { q: "Mode of {1, 2, 2, 3, 4, 4, 4, 5}.", a: "4" }
    ],
    "complex-numbers": [
      { q: "$(2+3i)(1-i)$.", a: "5 + i" },
      { q: "$|3 - 4i|$.", a: "5" },
      { q: "$\\overline{2 + 5i}$.", a: "2 - 5i" },
      { q: "Solve $z^2 + 4 = 0$.", a: "±2i" },
      { q: "$\\arg(1 + i)$.", a: "π/4" },
      { q: "$(1+i)^{10}$.", a: "32i" },
      { q: "$e^{i\\pi}$.", a: "-1" },
      { q: "Real part of $\\dfrac{1}{1+i}$.", a: "1/2" }
    ],
    "vector-algebra": [
      { q: "$\\mathbf u = (1,2,2)$, $|\\mathbf u|$?", a: "3" },
      { q: "$(2,1,0) \\cdot (1,3,-2)$.", a: "5" },
      { q: "$(1,0,0) \\times (0,1,0)$.", a: "(0, 0, 1)" },
      { q: "Unit vector along $(3, 4)$.", a: "(0.6, 0.8)" },
      { q: "Area of parallelogram on (1,0,0), (0,2,0).", a: "2" },
      { q: "Angle between (1,1,0) and (1,−1,0).", a: "90°" },
      { q: "Projection of (3,4) onto (1,0).", a: "(3,0)" },
      { q: "$(1,1,1) \\cdot ((1,0,0) \\times (0,1,0))$.", a: "1" }
    ],
    "linear-algebra": [
      { q: "$\\det \\begin{pmatrix}2 & 3\\\\1 & 4\\end{pmatrix}$.", a: "5" },
      { q: "Eigenvalues of $\\begin{pmatrix}3 & 0\\\\0 & -1\\end{pmatrix}$.", a: "3, -1" },
      { q: "Trace of $\\begin{pmatrix}1 & 5\\\\7 & 3\\end{pmatrix}$.", a: "4" },
      { q: "Solve $\\begin{pmatrix}2 & 1\\\\1 & 3\\end{pmatrix} \\mathbf x = \\begin{pmatrix}5\\\\7\\end{pmatrix}$.", a: "x = (8/5, 9/5)" },
      { q: "Rank of $\\begin{pmatrix}1&2&3\\\\2&4&6\\\\3&6&9\\end{pmatrix}$.", a: "1" },
      { q: "Is $\\{(1,2),(2,4)\\}$ linearly independent?", a: "No" },
      { q: "Null space dimension of $\\begin{pmatrix}1&2\\\\3&6\\end{pmatrix}$.", a: "1" },
      { q: "Inverse of $\\begin{pmatrix}2 & 0\\\\0 & 5\\end{pmatrix}$.", a: "$\\begin{pmatrix}1/2 & 0\\\\0 & 1/5\\end{pmatrix}$" }
    ],
    "limits": [
      { q: "$\\lim_{x\\to 3} (x^2 - 9)/(x - 3)$.", a: "6" },
      { q: "$\\lim_{x\\to 0} (\\sin 3x)/x$.", a: "3" },
      { q: "$\\lim_{x\\to\\infty}(3x^2 + 1)/(2x^2 - x)$.", a: "3/2" },
      { q: "$\\lim_{x\\to 0^+} x\\ln x$.", a: "0" },
      { q: "$\\lim_{x\\to 2}(x^3 - 8)/(x - 2)$.", a: "12" },
      { q: "L'Hôpital $\\lim_{x\\to 0}(1-\\cos x)/x^2$.", a: "1/2" },
      { q: "$\\lim_{n\\to\\infty}(1 - 1/n)^n$.", a: "1/e" },
      { q: "$\\lim_{x\\to \\infty}\\sqrt{x^2 + x} - x$.", a: "1/2" }
    ],
    "derivatives": [
      { q: "$d/dx[x^7]$.", a: "$7x^6$" },
      { q: "$d/dx[\\ln(x^2 + 1)]$.", a: "$2x/(x^2 + 1)$" },
      { q: "$d/dx[e^{3x}\\sin x]$.", a: "$e^{3x}(3\\sin x + \\cos x)$" },
      { q: "Equation of tangent to $y = x^2$ at $x = 2$.", a: "y = 4x - 4" },
      { q: "Local max of $f(x) = -x^2 + 4x$.", a: "(2, 4)" },
      { q: "$d/dx[\\arctan x]$.", a: "$1/(1+x^2)$" },
      { q: "Velocity if $s(t) = 5t^2 - 3t$ at $t = 2$.", a: "17" },
      { q: "Implicit derivative of $x^2 + y^2 = 25$.", a: "-x/y" }
    ],
    "integrals": [
      { q: "$\\int x^4\\,dx$.", a: "$x^5/5 + C$" },
      { q: "$\\int \\sec^2 x\\,dx$.", a: "$\\tan x + C$" },
      { q: "$\\int_0^2 x e^{-x^2}\\,dx$.", a: "$(1 - e^{-4})/2$" },
      { q: "$\\int_0^1 (3x^2 - 2x)\\,dx$.", a: "0" },
      { q: "Area under $y = 1/x$ from 1 to $e$.", a: "1" },
      { q: "$\\int \\dfrac{1}{x^2 + 4}\\,dx$.", a: "$(1/2)\\arctan(x/2) + C$" },
      { q: "$\\int_0^{\\pi/2}\\sin x \\cos x\\,dx$.", a: "1/2" },
      { q: "Average value of $x^2$ on $[0, 3]$.", a: "3" }
    ],
    "multivariable-calculus": [
      { q: "$\\partial/\\partial x(x^2 y^3)$.", a: "$2xy^3$" },
      { q: "Critical points of $f = x^2 - y^2$.", a: "(0, 0)" },
      { q: "$\\nabla(xy^2 + z)$ at (1,2,3).", a: "(4, 4, 1)" },
      { q: "Directional derivative of $f = x^2 + y$ at (1,1) in direction (1,1)/√2.", a: "$3/\\sqrt 2$" },
      { q: "$\\iint_R x\\,dA$ for $R = [0,2]\\times[0,3]$.", a: "6" },
      { q: "Volume bounded by $z = 4 - x^2 - y^2$ and $z = 0$.", a: "$8\\pi$" },
      { q: "$\\iint_D 1\\,dA$ for triangle vertices (0,0), (2,0), (0,3).", a: "3" },
      { q: "Polar volume: $\\iint_D r\\,dr\\,d\\theta$ over $r \\leq 2$.", a: "$4\\pi$" }
    ],
    "vector-calculus": [
      { q: "Div of $\\mathbf F = (x^2, y^2, z^2)$.", a: "$2(x+y+z)$" },
      { q: "Curl of $\\mathbf F = (-y, x, 0)$.", a: "(0, 0, 2)" },
      { q: "$\\nabla \\times \\nabla f = ?$", a: "0" },
      { q: "$\\nabla \\cdot (\\nabla \\times \\mathbf F) = ?$", a: "0" },
      { q: "Flux of $(x,y,z)$ through sphere radius $R$.", a: "$4\\pi R^3$" },
      { q: "Line integral $\\int_C \\mathbf F \\cdot d\\mathbf r$ for $\\mathbf F = \\nabla f$ closed curve?", a: "0" },
      { q: "Stokes connects which two integrals?", a: "Line and surface" },
      { q: "Gauss connects which two integrals?", a: "Surface and volume" }
    ],
    "ode": [
      { q: "Solve $\\dot y = 3y$, $y(0) = 2$.", a: "$2 e^{3t}$" },
      { q: "Solve $\\dot y = -y + 1$, $y(0) = 0$.", a: "$1 - e^{-t}$" },
      { q: "General solution $\\ddot y + 4y = 0$.", a: "$C_1 \\cos 2t + C_2 \\sin 2t$" },
      { q: "Particular soln for $\\ddot y + y = \\cos t$.", a: "$(t/2)\\sin t$" },
      { q: "Solve $\\dot y = y^2$, $y(0) = 1$.", a: "$1/(1 - t)$" },
      { q: "Integrating factor for $\\dot y + 3y/t = t$.", a: "$t^3$" },
      { q: "Order of $\\ddot y + 3\\dot y + 2y = 0$.", a: "2" },
      { q: "Characteristic equation roots for $\\ddot y - 5\\dot y + 6y = 0$.", a: "2, 3" }
    ],
    "pde": [
      { q: "Type of $u_{xx} = u_t$.", a: "Parabolic" },
      { q: "Type of $u_{tt} - u_{xx} = 0$.", a: "Hyperbolic" },
      { q: "Type of $u_{xx} + u_{yy} = 0$.", a: "Elliptic" },
      { q: "d'Alembert solution of wave eqn from f(x), g(x)?", a: "$[f(x-ct) + f(x+ct)]/2 + (1/2c)\\int_{x-ct}^{x+ct}g$" },
      { q: "Heat eqn $u_t = u_{xx}$, IC $\\delta(x)$. Solution?", a: "$(1/\\sqrt{4\\pi t})e^{-x^2/4t}$" },
      { q: "Laplace eqn maximum principle: max on boundary?", a: "Yes" },
      { q: "Speed of wave in $u_{tt} = 9 u_{xx}$.", a: "3" },
      { q: "$u_t + u_x = 0$ with $u(x,0) = f(x)$.", a: "u = f(x − t)" }
    ],
    "real-analysis": [
      { q: "Is $\\{(-1)^n\\}$ Cauchy?", a: "No" },
      { q: "Limit of $(\\sin n)/n$.", a: "0" },
      { q: "Does $\\sum 1/n!$ converge?", a: "Yes" },
      { q: "Is $f(x) = 1/x$ uniformly continuous on $(0, 1)$?", a: "No" },
      { q: "Compact subset of $\\mathbb R$?", a: "Closed + bounded" },
      { q: "Open cover of [0,1] has a finite subcover?", a: "Yes" },
      { q: "Sup of $\\{1 - 1/n : n \\in \\mathbb N\\}$.", a: "1" },
      { q: "Is $\\mathbb Q$ open in $\\mathbb R$?", a: "No" }
    ],
    "complex-analysis": [
      { q: "Cauchy integral $\\oint_{|z|=1} z\\,dz$.", a: "0" },
      { q: "$\\oint_{|z|=1} 1/z^2\\,dz$.", a: "0" },
      { q: "Residue of $1/(z-i)^2$ at $z = i$.", a: "0" },
      { q: "$e^z = 0$ has solutions?", a: "None" },
      { q: "Power series radius of $\\sum z^n/n!$.", a: "∞" },
      { q: "Is $\\bar z$ analytic?", a: "No" },
      { q: "Laurent expansion of $1/(1-z)$ at 0, $|z|<1$.", a: "$\\sum z^n$" },
      { q: "Liouville: bounded entire function is?", a: "Constant" }
    ],
    "fourier-analysis": [
      { q: "Period of $f$ for Fourier series in $[-L, L]$?", a: "2L" },
      { q: "Fourier transform of $\\delta(x)$.", a: "1" },
      { q: "Fourier of $\\cos(\\omega_0 t)$ gives delta at?", a: "$\\pm\\omega_0$" },
      { q: "Parseval relates $\\int|f|^2 = ?$", a: "$\\sum|c_n|^2$ (Fourier series)" },
      { q: "Convolution theorem: $f * g \\to ?$", a: "$\\hat f \\hat g$" },
      { q: "FT of Gaussian $e^{-x^2/2}$ (scaling const)?", a: "Gaussian" },
      { q: "Discrete FT of impulse $\\delta[n]$?", a: "1" },
      { q: "Sampling: anti-alias above which frequency?", a: "Nyquist" }
    ],
    "abstract-algebra": [
      { q: "Order of $\\mathbb Z/12$.", a: "12" },
      { q: "Cyclic subgroups of $\\mathbb Z/12$.", a: "5 (orders 1,2,3,4,6,12)" },
      { q: "Is $S_3$ cyclic?", a: "No" },
      { q: "Order of element 4 in $\\mathbb Z/10$.", a: "5" },
      { q: "Quotient $\\mathbb Z/6 / \\{0,3\\}$ has order?", a: "3" },
      { q: "Index of $3\\mathbb Z$ in $\\mathbb Z$.", a: "3" },
      { q: "Is $\\mathbb Z[i]$ an integral domain?", a: "Yes" },
      { q: "Field with 4 elements: $\\mathbb Z/4$ or $\\mathbb F_4$?", a: "$\\mathbb F_4$" }
    ],
    "topology": [
      { q: "Is (0,1) compact?", a: "No" },
      { q: "Closure of $\\mathbb Q$ in $\\mathbb R$?", a: "$\\mathbb R$" },
      { q: "Interior of $[0,1]$ in $\\mathbb R$?", a: "(0,1)" },
      { q: "Connected components of $\\mathbb R \\setminus \\{0\\}$.", a: "2" },
      { q: "Is the empty set open?", a: "Yes" },
      { q: "Is a finite union of compact sets compact?", a: "Yes" },
      { q: "Hausdorff: distinct points have what?", a: "Disjoint open nbhds" },
      { q: "Discrete topology: every subset is?", a: "Open" }
    ],
    "numerical-methods": [
      { q: "Bisection error after $n$ steps from interval $[a,b]$.", a: "$(b-a)/2^n$" },
      { q: "Newton step for $f$ at $x_0$.", a: "$x_0 - f(x_0)/f'(x_0)$" },
      { q: "Trapezoid rule with $n$ intervals on $[a,b]$ error: $O(?)$.", a: "$h^2$" },
      { q: "Simpson's rule error: $O(?)$.", a: "$h^4$" },
      { q: "Runge-Kutta-4 order?", a: "4" },
      { q: "Forward Euler stability for $\\dot y = -\\lambda y$.", a: "$h < 2/\\lambda$" },
      { q: "Floating-point eps for double precision (≈)?", a: "$2 \\times 10^{-16}$" },
      { q: "LU decomposition factors $A$ into?", a: "Lower × Upper triangular" }
    ],
    "coordinate-geometry": [
      { q: "Midpoint of $(2, -1)$ and $(8, 5)$.", a: "(5, 2)" },
      { q: "Distance $(1, 1)$ to $(4, 5)$.", a: "5" },
      { q: "Slope perpendicular to $y = 3x + 1$.", a: "-1/3" },
      { q: "Equation of circle radius 2 centered (1,−1).", a: "$(x-1)^2 + (y+1)^2 = 4$" },
      { q: "Centroid of $(0,0), (6,0), (0,9)$.", a: "(2, 3)" },
      { q: "Reflect $(3, 4)$ in x-axis.", a: "(3, −4)" },
      { q: "Line through origin with slope $1/2$.", a: "y = x/2" },
      { q: "Translate $(2, 3)$ by $(4, -1)$.", a: "(6, 2)" }
    ],
    "solid-geometry": [
      { q: "Volume of cube edge 4.", a: "64" },
      { q: "Surface area of sphere radius 2.", a: "$16\\pi$" },
      { q: "Volume of cylinder $r=3, h=5$.", a: "$45\\pi$" },
      { q: "Volume of cone $r=2, h=6$.", a: "$8\\pi$" },
      { q: "Diagonal of cube edge $a$.", a: "$a\\sqrt 3$" },
      { q: "Surface area of cylinder $r=1, h=2$ (no caps).", a: "$4\\pi$" },
      { q: "Regular tetrahedron edge 2: volume.", a: "$2\\sqrt 2/3$" },
      { q: "Number of vertices in octahedron.", a: "6" }
    ],
    "conic-sections": [
      { q: "Eccentricity of circle.", a: "0" },
      { q: "Focus of $y^2 = 4x$.", a: "(1, 0)" },
      { q: "Asymptotes of $x^2 - y^2 = 4$.", a: "$y = \\pm x$" },
      { q: "Semi-major axis of $x^2/9 + y^2/16 = 1$.", a: "4" },
      { q: "Directrix of $x^2 = 8y$.", a: "y = −2" },
      { q: "Eccentricity of hyperbola $x^2 - y^2 = 1$.", a: "$\\sqrt 2$" },
      { q: "Latus rectum of ellipse $x^2/25 + y^2/9 = 1$.", a: "18/5" },
      { q: "Conic for $5x^2 + 5y^2 = 20$.", a: "circle" }
    ],
    "mathematical-logic": [
      { q: "Contrapositive of $P \\to Q$.", a: "$\\neg Q \\to \\neg P$" },
      { q: "Converse of $P \\to Q$.", a: "$Q \\to P$" },
      { q: "$P \\lor (\\neg P \\land Q) \\equiv ?$", a: "$P \\lor Q$" },
      { q: "Negation of $\\exists x P(x)$.", a: "$\\forall x \\neg P(x)$" },
      { q: "Modus ponens uses what premises?", a: "P → Q and P" },
      { q: "Is $((P \\to Q) \\land P) \\to Q$ a tautology?", a: "Yes" },
      { q: "Gödel's first incompleteness theorem applies to?", a: "Sufficiently strong arithmetic" },
      { q: "DNF (disjunctive normal form) is sum of?", a: "Products (ANDs)" }
    ],
    "graph-theory": [
      { q: "Edges of $K_6$.", a: "15" },
      { q: "Edges of complete bipartite $K_{3,4}$.", a: "12" },
      { q: "Chromatic number of $K_n$.", a: "n" },
      { q: "Tree with 12 vertices has how many edges?", a: "11" },
      { q: "Euler's formula for connected planar graphs.", a: "V − E + F = 2" },
      { q: "Is $K_5$ planar?", a: "No" },
      { q: "Hamilton cycle visits each vertex how many times?", a: "Once" },
      { q: "Graph with 6 vertices and 4 edges: at least how many components?", a: "2" }
    ],
    "recurrence-generating": [
      { q: "Solve $a_n = 2a_{n-1} + 1$, $a_0 = 0$.", a: "$2^n - 1$" },
      { q: "Closed form $F_n$ via Binet.", a: "$(\\phi^n - \\psi^n)/\\sqrt 5$" },
      { q: "Generating fn $\\sum n x^n$.", a: "$x/(1-x)^2$" },
      { q: "Catalan number $C_3$.", a: "5" },
      { q: "$\\sum_{n=0}^\\infty x^n/n!$ converges to?", a: "$e^x$" },
      { q: "Solve $a_n = 4a_{n-1} - 4a_{n-2}$, repeated root form?", a: "$(A + Bn)2^n$" },
      { q: "Number of paths in $n \\times n$ grid (only right/up).", a: "$\\binom{2n}{n}$" },
      { q: "Recurrence for $T(n) = 2T(n/2) + n$ has soln?", a: "$O(n\\log n)$" }
    ],
    "computability": [
      { q: "Is the empty language regular?", a: "Yes" },
      { q: "Are CFLs closed under intersection?", a: "No" },
      { q: "Pumping lemma applies to which language class?", a: "Regular and CFLs" },
      { q: "NP ⊆ EXP?", a: "Yes" },
      { q: "Is graph isomorphism in P (open)?", a: "Open" },
      { q: "Time complexity of binary search.", a: "$O(\\log n)$" },
      { q: "DFA $\\subseteq$ NFA?", a: "Yes (and equally powerful)" },
      { q: "Reduction from problem A to B: if B is in P then A is?", a: "in P" }
    ],
    "galois-theory": [
      { q: "Galois group of $\\mathbb Q(\\sqrt 2, \\sqrt 3)/\\mathbb Q$.", a: "Klein 4-group" },
      { q: "Splitting field of $x^4 - 2$ over $\\mathbb Q$ degree.", a: "8" },
      { q: "Galois group of $x^5 - 1$ over $\\mathbb Q$.", a: "$\\mathbb Z/4$" },
      { q: "Solvable group means quintic is?", a: "Solvable by radicals" },
      { q: "$\\mathbb F_{p^n}$ has Galois group over $\\mathbb F_p$?", a: "$\\mathbb Z/n$" },
      { q: "Constructible if extension degree is?", a: "Power of 2" },
      { q: "Can angle 60° be trisected with ruler-compass?", a: "No" },
      { q: "Squaring the circle requires?", a: "Transcendental π" }
    ],
    "lie-groups": [
      { q: "Dimension of $SO(3)$.", a: "3" },
      { q: "Dimension of $SU(N)$.", a: "$N^2 - 1$" },
      { q: "Is $U(1)$ compact?", a: "Yes" },
      { q: "Universal cover of $SO(3)$.", a: "SU(2)" },
      { q: "Center of $SU(2)$.", a: "$\\{\\pm I\\}$" },
      { q: "Lie bracket $[X, Y]$ for $X, Y$ in commutative algebra?", a: "0" },
      { q: "Killing form on semisimple Lie algebra is?", a: "Non-degenerate" },
      { q: "Dimension of irrep of SU(2) with spin $j$.", a: "$2j+1$" }
    ],
    "differential-geometry": [
      { q: "Curvature of circle radius $R$.", a: "1/R" },
      { q: "Torsion of plane curve.", a: "0" },
      { q: "Gaussian curvature of plane.", a: "0" },
      { q: "Gaussian curvature of unit sphere.", a: "1" },
      { q: "Gauss-Bonnet for sphere: $\\int K\\,dA$?", a: "$4\\pi$" },
      { q: "Mean curvature of cylinder radius R (signed).", a: "1/(2R)" },
      { q: "Is the catenoid a minimal surface?", a: "Yes" },
      { q: "First fundamental form gives?", a: "Lengths and angles" }
    ],
    "tensor-calculus": [
      { q: "$\\delta^i_j$ contracted with $V^j$.", a: "$V^i$" },
      { q: "Metric raises which type of index?", a: "Lower → upper" },
      { q: "Christoffel symbols are tensors? (Y/N)", a: "No" },
      { q: "Riemann tensor in flat space.", a: "0" },
      { q: "Symmetric (0,2) tensor independent components in $n$D.", a: "$n(n+1)/2$" },
      { q: "Antisymmetric (0,2) tensor independent components.", a: "$n(n-1)/2$" },
      { q: "Trace of Kronecker delta in 4D.", a: "4" },
      { q: "Levi-Civita $\\varepsilon_{123} = ?$", a: "1" }
    ],
    "algebraic-topology": [
      { q: "$\\pi_1(\\mathbb R^n)$ for $n \\geq 1$.", a: "0" },
      { q: "$\\pi_2(S^2)$.", a: "$\\mathbb Z$" },
      { q: "$\\pi_1(\\mathbb R^2 \\setminus \\{0\\})$.", a: "$\\mathbb Z$" },
      { q: "Euler characteristic $\\chi(S^2)$.", a: "2" },
      { q: "$\\chi(\\text{torus})$.", a: "0" },
      { q: "Number of holes in genus-2 surface.", a: "2" },
      { q: "Homology $H_2$ of torus.", a: "$\\mathbb Z$" },
      { q: "Brouwer fixed point: continuous map $D^n \\to D^n$ has?", a: "Fixed point" }
    ],
    "riemannian-geometry": [
      { q: "Riemann curvature of $\\mathbb R^n$.", a: "0" },
      { q: "Length of arc $\\theta$ on sphere radius $R$.", a: "$R\\theta$" },
      { q: "Geodesic equation contains which symbol?", a: "Christoffel" },
      { q: "Sectional curvature of $S^n$.", a: "1 (unit sphere)" },
      { q: "Ricci flat means $R_{ij} = ?$", a: "0" },
      { q: "Constant negative curvature space.", a: "Hyperbolic" },
      { q: "Volume form on Riemannian manifold uses $\\sqrt{?}$.", a: "$|\\det g|$" },
      { q: "Identity $\\Gamma^k_{ij} = \\Gamma^k_{ji}$ requires?", a: "Torsion-free" }
    ],
    "measure-theory": [
      { q: "Lebesgue measure of single point.", a: "0" },
      { q: "Lebesgue measure of [0,1] ∪ [2,3].", a: "2" },
      { q: "$\\sigma$-algebra closed under what?", a: "Countable unions, complements" },
      { q: "Is the union of measurable sets measurable?", a: "Yes (countable)" },
      { q: "Monotone convergence theorem applies to?", a: "Monotone non-negative measurable" },
      { q: "Dominated convergence needs a dominating function that is?", a: "Integrable" },
      { q: "Pushforward of measure by measurable map: still a measure?", a: "Yes" },
      { q: "Almost everywhere means: except on set of measure?", a: "0" }
    ],
    "functional-analysis": [
      { q: "Is $\\ell^1$ a Hilbert space?", a: "No" },
      { q: "Dual of $L^p$ for $1 < p < \\infty$.", a: "$L^q$ with $1/p+1/q = 1$" },
      { q: "Open mapping theorem requires?", a: "Surjective bounded between Banach" },
      { q: "Banach contraction principle gives?", a: "Unique fixed point" },
      { q: "Compact operator on infinite-dim Hilbert space: spectrum?", a: "Discrete + 0" },
      { q: "Riesz representation: bounded linear on Hilbert =?", a: "Inner product with fixed vector" },
      { q: "Self-adjoint operator's eigenvalues are?", a: "Real" },
      { q: "Norm of identity on Banach space.", a: "1" }
    ],
    "calculus-of-variations": [
      { q: "Geodesic on plane is?", a: "Straight line" },
      { q: "Brachistochrone curve is?", a: "Cycloid" },
      { q: "Minimum surface of revolution between rings.", a: "Catenoid" },
      { q: "Euler-Lagrange for $L = L(\\dot q)$ only (no q).", a: "$\\partial L/\\partial \\dot q = $ const" },
      { q: "Hamilton's principle minimizes which integral?", a: "Action $\\int L\\,dt$" },
      { q: "Beltrami identity used when L lacks?", a: "explicit $t$" },
      { q: "Constraints handled by which trick?", a: "Lagrange multipliers" },
      { q: "Shortest path on sphere is?", a: "Great-circle arc" }
    ],
    "function-sequences": [
      { q: "Uniform convergence implies pointwise?", a: "Yes" },
      { q: "Pointwise implies uniform?", a: "No" },
      { q: "Weierstrass M-test conclusion?", a: "Uniform convergence" },
      { q: "Limit of uniform convergent continuous functions is?", a: "Continuous" },
      { q: "$\\sum x^n/n^2$ uniformly converges on?", a: "[-1, 1]" },
      { q: "Stone-Weierstrass density requires algebra to separate?", a: "Points" },
      { q: "$\\sin(nx)/n$ converges uniformly to?", a: "0" },
      { q: "Equicontinuous + bounded implies (on compact)?", a: "Relatively compact (Arzela-Ascoli)" }
    ],
    "random-variables": [
      { q: "Expected value of $\\text{Unif}(0, 6)$.", a: "3" },
      { q: "$\\text{Var}(\\text{Bernoulli}(p))$.", a: "p(1-p)" },
      { q: "MGF of $\\text{Exp}(\\lambda)$ at $t$.", a: "$\\lambda/(\\lambda - t)$" },
      { q: "Sum of two independent N(0,1).", a: "N(0, 2)" },
      { q: "$P(X > 0)$ for $X \\sim N(0, 1)$.", a: "0.5" },
      { q: "CDF of $\\text{Exp}(\\lambda)$ at $x$.", a: "$1 - e^{-\\lambda x}$" },
      { q: "$E[X^2]$ for $X \\sim N(0, \\sigma^2)$.", a: "$\\sigma^2$" },
      { q: "Sum of $n$ iid Bernoulli($p$) is?", a: "Binomial(n, p)" }
    ],
    "stochastic-processes": [
      { q: "Variance of standard Brownian motion at time $t$.", a: "t" },
      { q: "Mean of Poisson process at time $t$, rate $\\lambda$.", a: "$\\lambda t$" },
      { q: "Markov property: future depends on?", a: "Present only" },
      { q: "Stationary distribution exists for finite irreducible chain?", a: "Yes" },
      { q: "Brownian motion is differentiable a.s.?", a: "No" },
      { q: "Reflection principle for Brownian computes?", a: "Maximum distribution" },
      { q: "Ito's lemma: $df(B_t) = ?$", a: "$f'\\,dB + (1/2)f''\\,dt$" },
      { q: "Time spent above 0 by Brownian up to T: distribution?", a: "Arcsine" }
    ],
    "bayesian-statistics": [
      { q: "Beta-binomial: prior Beta(2,3), observe 5/10. Posterior?", a: "Beta(7, 8)" },
      { q: "Normal-normal: prior $N(0,1)$, observe $x=2, \\sigma=1$. Posterior mean?", a: "1" },
      { q: "Maximum a posteriori (MAP) coincides with MLE if prior is?", a: "Uniform" },
      { q: "Conjugate prior for Poisson rate?", a: "Gamma" },
      { q: "Conjugate prior for normal mean (known variance)?", a: "Normal" },
      { q: "Bayes factor compares which two?", a: "Hypotheses" },
      { q: "Credible interval interpretation?", a: "Param in interval with prob 0.95" },
      { q: "Posterior predictive uses?", a: "Posterior + likelihood" }
    ],
    "optimization": [
      { q: "Is $f(x) = e^x$ convex?", a: "Yes" },
      { q: "Convex combination of two convex functions is?", a: "Convex" },
      { q: "KKT conditions number of conditions for inequality constraints?", a: "Complementary slackness" },
      { q: "Strong duality holds when?", a: "Convex problem + Slater's condition" },
      { q: "Gradient descent step size too large causes?", a: "Divergence" },
      { q: "Newton's method uses what derivative info?", a: "Hessian" },
      { q: "Linear program: optimal at?", a: "Vertex of feasible polytope" },
      { q: "Lagrangian for $\\min f$ s.t. $g = 0$?", a: "$f + \\lambda g$" }
    ],
    "information-theory": [
      { q: "Entropy of uniform over $n$ outcomes.", a: "$\\log_2 n$" },
      { q: "Maximum entropy distribution on $[a, b]$?", a: "Uniform" },
      { q: "Differential entropy of N(0, σ²).", a: "$(1/2)\\log(2\\pi e\\sigma^2)$" },
      { q: "$H(X|Y) \\leq H(X)$ true?", a: "Yes" },
      { q: "Coding rate of an optimal code approaches?", a: "Entropy" },
      { q: "Shannon's source coding theorem says?", a: "$R \\geq H$" },
      { q: "Channel capacity of binary symmetric with error $p$.", a: "$1 - H(p)$" },
      { q: "Cross-entropy minimized by?", a: "True distribution" }
    ],
    "game-theory": [
      { q: "Number of NE in Rock-Paper-Scissors.", a: "1 (mixed)" },
      { q: "Stackelberg leader's advantage exists when?", a: "Strategic substitutes" },
      { q: "Repeated PD: Tit-for-Tat is?", a: "Cooperative trigger strategy" },
      { q: "Subgame perfect equilibrium uses what?", a: "Backward induction" },
      { q: "Bayesian Nash equilibrium adds what?", a: "Incomplete information" },
      { q: "Auction with private values: 2nd-price truthful?", a: "Yes" },
      { q: "Shapley value satisfies how many axioms (classical)?", a: "4" },
      { q: "Cournot duopoly NE quantity (symmetric)?", a: "$Q = (a-c)/(3b)$" }
    ],
    "dynamical-systems": [
      { q: "Lyapunov stability iff eigenvalues are?", a: "Negative real part" },
      { q: "Period of $\\dot x = -x$ approach to 0?", a: "None (asymptotic)" },
      { q: "Limit cycle in 2D smooth system requires (Bendixson)?", a: "Sign-changing divergence in region" },
      { q: "Pitchfork bifurcation normal form?", a: "$\\dot x = rx - x^3$" },
      { q: "Hopf bifurcation eigenvalues cross?", a: "Imaginary axis" },
      { q: "Lorenz system parameters $(\\sigma, \\rho, \\beta)$ for chaos?", a: "(10, 28, 8/3)" },
      { q: "Discrete logistic map first bifurcation at?", a: "r = 3" },
      { q: "Strange attractor has dimension?", a: "Fractional" }
    ],
    "cryptography": [
      { q: "DES key length (bits).", a: "56" },
      { q: "AES-128 round count.", a: "10" },
      { q: "RSA security depends on?", a: "Factoring" },
      { q: "Diffie-Hellman provides what?", a: "Shared secret key" },
      { q: "ECDLP stands for?", a: "Elliptic curve discrete log problem" },
      { q: "Hash function output of SHA-3-256 bits.", a: "256" },
      { q: "MAC provides?", a: "Authentication + integrity" },
      { q: "Forward secrecy means?", a: "Past sessions safe if key leaked" }
    ],

    // ===== PHYSICS =====
    "units-measurement": [
      { q: "Convert 25 km to m.", a: "25000" },
      { q: "Dimensions of energy.", a: "ML²T⁻²" },
      { q: "Significant figures in 0.00203.", a: "3" },
      { q: "Convert 60 mph to m/s (approx).", a: "26.8" },
      { q: "Express 5 GeV in joules.", a: "$8 \\times 10^{-10}$" },
      { q: "Speed of light in cm/s.", a: "$3 \\times 10^{10}$" },
      { q: "Boltzmann constant value (SI).", a: "$1.38 \\times 10^{-23}$ J/K" },
      { q: "Planck's constant approx (SI).", a: "$6.63 \\times 10^{-34}$ J·s" }
    ],
    "kinematics": [
      { q: "Object at rest, accel $4$ m/s² for $3$ s. Final speed?", a: "12 m/s" },
      { q: "$x_0 = 10$, $v_0 = 5$ m/s, $a = 2$ m/s². $x$ at $t = 4$ s.", a: "46 m" },
      { q: "Free fall from 45 m. Time to land ($g = 10$).", a: "3 s" },
      { q: "Projectile $v_0 = 20$ m/s at 30°. Time of flight ($g = 10$).", a: "2 s" },
      { q: "Same: range.", a: "$20\\sqrt 3 \\approx 34.6$ m" },
      { q: "Car decelerates from 30 m/s at $-5$ m/s². Stopping distance.", a: "90 m" },
      { q: "Body thrown up at $25$ m/s. Max height ($g = 10$).", a: "31.25 m" },
      { q: "$v^2 = v_0^2 - 2gh$. Object launched 20 m/s up. Speed at 10 m?", a: "$\\sqrt{200} \\approx 14.1$ m/s" }
    ],
    "vectors-physics": [
      { q: "Magnitude of $(6, 8, 0)$.", a: "10" },
      { q: "Force $\\mathbf F = (3, 4)$ N along $\\mathbf d = (1, 0)$. Work for 5 m.", a: "15 J" },
      { q: "$\\hat i \\times \\hat j$.", a: "$\\hat k$" },
      { q: "Angle between (1,0,0) and (0,1,1).", a: "90°" },
      { q: "Resultant of forces 3N east and 4N north.", a: "5 N, 53° N of E" },
      { q: "Unit vector along $(0, 3, 4)$.", a: "(0, 0.6, 0.8)" },
      { q: "$\\hat j \\times \\hat k$.", a: "$\\hat i$" },
      { q: "Component of (5, 12) along $\\hat i$.", a: "5" }
    ],
    "newtons-laws": [
      { q: "2 kg at 3 m/s² needs force?", a: "6 N" },
      { q: "10 kg on frictionless surface, pulled at 30 N. Accel.", a: "3 m/s²" },
      { q: "Weight of 5 kg on Moon ($g = 1.6$).", a: "8 N" },
      { q: "Atwood: 4 kg and 6 kg over pulley. Tension ($g = 10$)?", a: "48 N" },
      { q: "Block on 45° incline, $\\mu = 0$. Accel.", a: "$g/\\sqrt 2 \\approx 6.93$ m/s²" },
      { q: "Max static $\\mu$ for block not to slide on 20° ramp.", a: "tan 20° ≈ 0.364" },
      { q: "Mass 8 kg, applied force 32 N at 60° above horizontal. Horizontal accel.", a: "2 m/s²" },
      { q: "Cable holding 100 kg elevator accelerating up at 1 m/s². Tension.", a: "1080 N" }
    ],
    "momentum-impulse": [
      { q: "$p = mv$. 0.5 kg at 6 m/s.", a: "3 kg·m/s" },
      { q: "Impulse to reverse 2 kg from 4 m/s to -4 m/s.", a: "16 N·s" },
      { q: "5 kg at 2 m/s + 3 kg at rest, inelastic. Final v.", a: "1.25 m/s" },
      { q: "Bullet 10 g at 500 m/s into 2 kg block. Final v.", a: "≈2.49 m/s" },
      { q: "1 kg dropped 20 m, ball-floor contact 0.1 s. Avg force ($g=10$).", a: "200 N" },
      { q: "Center of mass: 1 kg at 0, 4 kg at 5.", a: "x = 4" },
      { q: "Rocket exhaust 3000 m/s, $dm/dt = 20$ kg/s. Thrust.", a: "60000 N" },
      { q: "Elastic collision, equal masses, $m_1$ moving, $m_2$ at rest. Final $v_1$.", a: "0" }
    ],
    "energy-work": [
      { q: "Work by 8 N over 5 m.", a: "40 J" },
      { q: "KE of 2 kg at 6 m/s.", a: "36 J" },
      { q: "PE of 5 kg at 10 m ($g = 10$).", a: "500 J" },
      { q: "Spring $k = 100$ N/m, $x = 0.2$ m. Energy stored.", a: "2 J" },
      { q: "Power of 100 W for 5 minutes. Energy?", a: "30000 J" },
      { q: "Efficiency 25%, input 1000 J. Useful output.", a: "250 J" },
      { q: "Speed at bottom of 5 m frictionless ramp ($g=10$).", a: "10 m/s" },
      { q: "Horsepower of 10 kg lifted 10 m in 5 s.", a: "≈0.263 hp" }
    ],
    "circular-gravitation": [
      { q: "Radial accel of car at 20 m/s on 50 m radius.", a: "8 m/s²" },
      { q: "Period of moon at $4 \\times 10^8$ m around Earth (use Kepler approx). Earth mass = $6 \\times 10^{24}$.", a: "≈27 days" },
      { q: "$g$ at Earth's surface from $G M/R^2$ (use rough values).", a: "≈9.8 m/s²" },
      { q: "Escape velocity proportional to?", a: "$\\sqrt{M/R}$" },
      { q: "Satellite orbital speed at radius $r$ around mass $M$.", a: "$\\sqrt{GM/r}$" },
      { q: "Centripetal force on 1 kg circling at 5 m/s, radius 2 m.", a: "12.5 N" },
      { q: "Bucket of water swung overhead. Min speed at top to not spill (radius 1 m).", a: "$\\sqrt{10} \\approx 3.16$ m/s" },
      { q: "Two stars orbit common COM. Each describes a?", a: "ellipse" }
    ],
    "shm": [
      { q: "Spring $k = 100$ N/m, $m = 1$ kg. Period.", a: "$2\\pi/10 \\approx 0.628$ s" },
      { q: "$\\omega_n$ for $m=0.5, k=50$.", a: "10 rad/s" },
      { q: "Pendulum length 25 cm. Period ($g = 9.8$).", a: "1.0 s" },
      { q: "Max speed of SHM with $A = 0.05$ m, $\\omega = 4$ rad/s.", a: "0.2 m/s" },
      { q: "Phase shift between displacement and velocity in SHM.", a: "π/2" },
      { q: "Energy of SHM with $A$, $k$.", a: "$kA^2/2$" },
      { q: "Critically damped requires $\\zeta = ?$", a: "1" },
      { q: "Resonance frequency of damped driven oscillator (light damping).", a: "$\\omega_n$" }
    ],
    "rotational": [
      { q: "$I$ of hoop mass $m$, radius $R$ about CM perpendicular axis.", a: "$mR^2$" },
      { q: "$I$ of solid disc same axis.", a: "$mR^2/2$" },
      { q: "Torque 5 N·m on $I = 2$ kg·m². Angular accel.", a: "2.5 rad/s²" },
      { q: "Rolling sphere KE fraction in rotation.", a: "2/7" },
      { q: "Rolling cylinder same fraction.", a: "1/3" },
      { q: "Angular momentum of disk $I = 0.5$ kg·m² at 8 rad/s.", a: "4 kg·m²/s" },
      { q: "Period of physical pendulum, $I$, $m$, distance to pivot $d$.", a: "$2\\pi\\sqrt{I/(mgd)}$" },
      { q: "$L = I\\omega$ conservation in skater pulling arms in.", a: "$\\omega$ increases" }
    ],
    "fluids": [
      { q: "Pressure at 5 m water depth.", a: "≈49 kPa (gauge)" },
      { q: "Buoyancy on 0.5 m³ object in water.", a: "4900 N" },
      { q: "Density of mercury (kg/m³).", a: "13600" },
      { q: "Volume flow rate $Q$ at $v = 2$ m/s, pipe area 0.01 m².", a: "0.02 m³/s" },
      { q: "Bernoulli: pipe rise + velocity drop both happen?", a: "Pressure increases" },
      { q: "Floating ice fraction underwater in seawater.", a: "≈0.89" },
      { q: "Pascal pressure transmits how?", a: "Undiminished" },
      { q: "Capillary rise vs tube radius: $h \\propto ?$", a: "1/r" }
    ],
    "kinetic-theory": [
      { q: "Avg KE per molecule at 300 K (3D).", a: "$\\approx 6.21 \\times 10^{-21}$ J" },
      { q: "Temperature for $v_\\text{rms} = $ 500 m/s for N₂.", a: "≈280 K" },
      { q: "$pV = NkT$ is which gas law?", a: "Ideal" },
      { q: "Heat capacity per mole at constant V for monatomic ideal gas.", a: "(3/2)R" },
      { q: "Same for diatomic at room T.", a: "(5/2)R" },
      { q: "Mean free path $\\lambda \\propto ?$", a: "1/(nd²)" },
      { q: "Maxwell-Boltzmann speed distribution peaks at?", a: "$\\sqrt{2kT/m}$" },
      { q: "Equipartition energy per quadratic DOF.", a: "kT/2" }
    ],
    "thermodynamics": [
      { q: "Carnot efficiency 1200 K / 300 K.", a: "0.75" },
      { q: "First law: ΔU for $Q = 100$ J in, $W = 30$ J done by system.", a: "70 J" },
      { q: "Entropy change of isothermal expansion (V₁ to V₂).", a: "$nR\\ln(V₂/V₁)$" },
      { q: "ΔS of universe in reversible process.", a: "0" },
      { q: "Specific heat of water (J/(kg·K)).", a: "4186" },
      { q: "Heat to warm 1 kg water from 20 to 100°C.", a: "≈335 kJ" },
      { q: "Adiabatic γ for ideal monatomic gas.", a: "5/3" },
      { q: "Latent heat of vaporization water (J/kg).", a: "$2.26 \\times 10^6$" }
    ],
    "waves": [
      { q: "$v = f\\lambda$. $f = 100$ Hz, $\\lambda = 2$ m. $v$?", a: "200 m/s" },
      { q: "Speed of sound air at 0°C (m/s).", a: "≈331" },
      { q: "Speed of light in vacuum (m/s).", a: "$3 \\times 10^8$" },
      { q: "Wavelength of 1 MHz EM wave.", a: "300 m" },
      { q: "Period of 50 Hz.", a: "0.02 s" },
      { q: "String fixed both ends, $L$, n-th harmonic frequency $\\propto ?$", a: "n" },
      { q: "Doppler shift, observer approaches stationary source at v, sound speed c. Ratio?", a: "(c + v)/c" },
      { q: "Energy of wave proportional to amplitude?", a: "Squared" }
    ],
    "optics-geometric": [
      { q: "Lens $f = 10$ cm, object at 20 cm. Image distance.", a: "20 cm" },
      { q: "Same: magnification.", a: "-1" },
      { q: "Snell: from air (n=1) to glass (n=1.5) at 30°. Refracted angle.", a: "≈19.5°" },
      { q: "Critical angle from water (n=1.33) to air.", a: "≈48.8°" },
      { q: "Mirror equation analog of $1/f = 1/d_o + 1/d_i$ for sign of $d_i$ behind concave.", a: "Negative" },
      { q: "Plane mirror image distance equals?", a: "Object distance" },
      { q: "Focal length of converging-diverging pair $f_1 = 10, f_2 = -20$ in contact.", a: "20" },
      { q: "Light through prism deflection depends on $n$?", a: "Yes, higher n more deflection" }
    ],
    "optics-wave": [
      { q: "Path diff for constructive interference at angle $\\theta$ in double slit, separation $d$.", a: "$d\\sin\\theta = m\\lambda$" },
      { q: "First single-slit minimum, width $a$.", a: "$a\\sin\\theta = \\lambda$" },
      { q: "Diffraction grating with 500 lines/mm: $d$?", a: "$2 \\times 10^{-6}$ m" },
      { q: "Brewster's angle for $n = 1.5$.", a: "≈56.3°" },
      { q: "Polaroid I and II at angle θ. Transmission of unpolarized after both.", a: "$(1/2)\\cos^2\\theta$" },
      { q: "Resolving power of grating $N$ slits at order $m$.", a: "$Nm$" },
      { q: "Newton's rings: bright/dark depending on?", a: "Path-length and phase reversal" },
      { q: "Thin film of soap, anti-reflective coating: optical thickness?", a: "$\\lambda/4$" }
    ],
    "electrostatics": [
      { q: "Coulomb force between 1 μC at 1 m apart.", a: "0.009 N" },
      { q: "Field at center of square with equal q at all corners.", a: "0" },
      { q: "Potential of point charge $q$ at $r$.", a: "$kq/r$" },
      { q: "Capacitance of 1 m² parallel plates 1 mm apart.", a: "≈8.85 nF" },
      { q: "Two 6 μF in parallel: total.", a: "12 μF" },
      { q: "Two 6 μF in series: total.", a: "3 μF" },
      { q: "Field inside conductor in static equilibrium.", a: "0" },
      { q: "Energy stored in 100 pF cap at 100 V.", a: "$5 \\times 10^{-7}$ J" }
    ],
    "electric-circuits": [
      { q: "$V = IR$. $I = 0.5$ A, $R = 20$ Ω. $V$?", a: "10 V" },
      { q: "Power dissipated in $R$ with $V$ across.", a: "$V^2/R$" },
      { q: "Two 4 Ω in series: total.", a: "8 Ω" },
      { q: "Two 4 Ω in parallel: total.", a: "2 Ω" },
      { q: "RC charging time to 63% (one tau).", a: "RC" },
      { q: "Battery EMF 9 V, internal r = 1 Ω, external R = 8 Ω. Current.", a: "1 A" },
      { q: "Energy of 12 V battery delivering 2 A for 10 s.", a: "240 J" },
      { q: "Kirchhoff: sum of currents at a node.", a: "0" }
    ],
    "magnetism-induction": [
      { q: "Force on 1 C at 100 m/s perpendicular to 0.5 T.", a: "50 N" },
      { q: "Magnetic field at center of 2-cm-radius loop carrying 1 A.", a: "≈$3.14 \\times 10^{-5}$ T" },
      { q: "Lenz's law: induced EMF opposes change in?", a: "Flux" },
      { q: "EMF for $d\\Phi/dt = 0.05$ Wb/s in 200-turn coil.", a: "10 V" },
      { q: "Inductance: V across L with current changing 2 A/s in 0.5 H.", a: "1 V" },
      { q: "Self-inductance of solenoid scales with $n^2$?", a: "Yes" },
      { q: "Magnetic flux unit.", a: "Weber" },
      { q: "Tesla in fundamental units.", a: "kg/(A·s²)" }
    ],
    "ac-circuits": [
      { q: "RMS of sinusoidal voltage $V_0 = 170$ V.", a: "120 V" },
      { q: "$X_L$ at 60 Hz for L = 0.1 H.", a: "≈37.7 Ω" },
      { q: "$X_C$ at 1 kHz for C = 1 μF.", a: "≈159 Ω" },
      { q: "Resonance of L = 10 mH, C = 100 μF.", a: "$f \\approx$ 159 Hz" },
      { q: "Phase angle when $X_L = X_C$.", a: "0" },
      { q: "Power factor of pure resistor.", a: "1" },
      { q: "Quality factor depends on which ratio?", a: "$\\omega L/R$" },
      { q: "Average power = $V_{rms} I_{rms} \\cos\\phi$. True?", a: "True" }
    ],
    "maxwell-em": [
      { q: "$\\nabla \\cdot \\mathbf E = ?$", a: "$\\rho/\\epsilon_0$" },
      { q: "$\\nabla \\cdot \\mathbf B = ?$", a: "0" },
      { q: "$\\nabla \\times \\mathbf E = ?$", a: "$-\\partial \\mathbf B/\\partial t$" },
      { q: "$\\nabla \\times \\mathbf B = ?$", a: "$\\mu_0\\mathbf J + \\mu_0\\epsilon_0 \\partial \\mathbf E/\\partial t$" },
      { q: "Poynting vector direction = ?", a: "Energy flow" },
      { q: "Intensity of EM wave $\\propto E_0^2$?", a: "Yes" },
      { q: "Speed of EM wave in glass n=1.5.", a: "$2 \\times 10^8$ m/s" },
      { q: "Radiation pressure on perfectly reflective surface, intensity I.", a: "2I/c" }
    ],
    "special-relativity": [
      { q: "γ at v = 0.5c.", a: "≈1.155" },
      { q: "γ at v = 0.9c.", a: "≈2.294" },
      { q: "Length contraction 10 m rod at 0.6c.", a: "8 m" },
      { q: "Time dilation factor at 0.8c.", a: "1.667" },
      { q: "Rest mass-energy of 1 kg.", a: "$9 \\times 10^{16}$ J" },
      { q: "Velocity addition: 0.6c + 0.6c rel to frame.", a: "≈0.882c" },
      { q: "E² − (pc)² = ?", a: "$(mc^2)^2$" },
      { q: "Spacetime interval invariant under?", a: "Lorentz transformations" }
    ],
    "general-relativity": [
      { q: "Schwarzschild metric singularity at r = ?", a: "$r_s$ (coord) and 0 (true)" },
      { q: "Schwarzschild radius for 1 kg.", a: "≈$1.5 \\times 10^{-27}$ m" },
      { q: "Gravitational time dilation factor near Earth surface.", a: "≈$1 - GM/(Rc^2)$" },
      { q: "Geodesic equation features which symbol?", a: "Christoffel" },
      { q: "Equivalence principle equates which two?", a: "Inertial and gravitational mass" },
      { q: "Mercury's perihelion precession (arcsec/century).", a: "≈43" },
      { q: "Bending of starlight by Sun.", a: "≈1.75 arcsec" },
      { q: "Cosmological constant denoted?", a: "Λ" }
    ],
    "lagrangian-hamiltonian": [
      { q: "L for free particle.", a: "$\\frac{1}{2}mv^2$" },
      { q: "L for harmonic oscillator.", a: "$\\frac{1}{2}m\\dot x^2 - \\frac{1}{2}kx^2$" },
      { q: "Hamiltonian for free particle.", a: "$p^2/2m$" },
      { q: "Canonical equation $\\dot q = ?$", a: "$\\partial H/\\partial p$" },
      { q: "$\\dot p = ?$", a: "$-\\partial H/\\partial q$" },
      { q: "Action of free particle from $t=0$ to $T$.", a: "$mv^2 T/2$" },
      { q: "Liouville's theorem: phase space density?", a: "Conserved along trajectories" },
      { q: "Poisson bracket $\\{q, p\\}$.", a: "1" }
    ],
    "statistical-mechanics": [
      { q: "Maxwell-Boltzmann distribution proportional to?", a: "$e^{-E/kT}$" },
      { q: "Partition function of two-level system gap ε.", a: "$1 + e^{-\\epsilon/kT}$" },
      { q: "Free energy F = ?", a: "$-kT\\ln Z$" },
      { q: "Entropy in terms of partition function.", a: "$k(\\ln Z + \\beta \\langle E\\rangle)$" },
      { q: "Bose-Einstein occupation of energy ε.", a: "$1/(e^{(\\epsilon-\\mu)/kT} - 1)$" },
      { q: "Fermi-Dirac occupation.", a: "$1/(e^{(\\epsilon-\\mu)/kT} + 1)$" },
      { q: "Equipartition theorem: per quadratic DOF, energy?", a: "kT/2" },
      { q: "Specific heat of ideal monatomic gas at constant V.", a: "(3/2)R" }
    ],
    "qm-foundations": [
      { q: "$[\\hat x, \\hat p]$.", a: "$i\\hbar$" },
      { q: "Uncertainty principle for x and p.", a: "$\\Delta x \\Delta p \\geq \\hbar/2$" },
      { q: "Born rule probability $P(x) = ?$", a: "$|\\psi(x)|^2$" },
      { q: "Time-dep Schrödinger: $i\\hbar \\partial\\psi/\\partial t = ?$", a: "$H\\psi$" },
      { q: "Eigenvalue equation for energy.", a: "$H\\psi = E\\psi$" },
      { q: "Conservation of probability requires which kind of operator H?", a: "Hermitian" },
      { q: "Free-particle dispersion $E(k) = ?$", a: "$\\hbar^2 k^2/(2m)$" },
      { q: "Normalization condition.", a: "$\\int|\\psi|^2 = 1$" }
    ],
    "qm-1d": [
      { q: "Infinite well length L, energy level n.", a: "$n^2\\pi^2\\hbar^2/(2mL^2)$" },
      { q: "Harmonic oscillator nth energy.", a: "$(n + 1/2)\\hbar\\omega$" },
      { q: "Ground state HO wavefunction $\\propto ?$", a: "$e^{-m\\omega x^2/(2\\hbar)}$" },
      { q: "Tunneling transmission rough form.", a: "$e^{-2\\kappa L}$ with $\\kappa = \\sqrt{2m(V-E)}/\\hbar$" },
      { q: "Finite well: lowest bound state E?", a: "Between 0 and ∞-well analog" },
      { q: "Parity of n-th infinite-well state.", a: "$(-1)^{n-1}$" },
      { q: "$\\langle x \\rangle$ for HO ground state.", a: "0" },
      { q: "$\\langle x^2 \\rangle$ for HO ground state.", a: "$\\hbar/(2m\\omega)$" }
    ],
    "atomic-physics": [
      { q: "Hydrogen ground state energy.", a: "-13.6 eV" },
      { q: "n=2 energy hydrogen.", a: "-3.4 eV" },
      { q: "Lyman alpha wavelength.", a: "≈122 nm" },
      { q: "Hα (Balmer) wavelength.", a: "≈656 nm" },
      { q: "Bohr radius.", a: "≈$5.29 \\times 10^{-11}$ m" },
      { q: "Fine-structure constant α ≈?", a: "1/137" },
      { q: "Spin-orbit coupling order in α?", a: "α²" },
      { q: "Zeeman effect splits which states?", a: "$m_\\ell$" }
    ],
    "solid-state": [
      { q: "Conduction in metal: which carriers?", a: "Electrons" },
      { q: "Band gap of silicon.", a: "≈1.12 eV" },
      { q: "BCC packing efficiency.", a: "≈68%" },
      { q: "FCC packing efficiency.", a: "≈74%" },
      { q: "Fermi level in intrinsic semiconductor.", a: "Mid-gap" },
      { q: "Effective mass in parabolic band: $m^* = ?$", a: "$\\hbar^2/(d^2 E/dk^2)$" },
      { q: "Curie temperature ferromagnetic above which is?", a: "Paramagnetic" },
      { q: "Drude conductivity $\\sigma = ?$", a: "$ne^2\\tau/m$" }
    ],
    "nuclear": [
      { q: "Half-life formula relating $\\lambda$.", a: "$t_{1/2} = \\ln 2 / \\lambda$" },
      { q: "$\\alpha$ particle composition.", a: "2p, 2n" },
      { q: "β⁻ decay: neutron → ?", a: "proton + e⁻ + $\\bar\\nu_e$" },
      { q: "Most abundant isotope of carbon.", a: "C-12" },
      { q: "Binding energy peak around mass number.", a: "≈56 (Fe)" },
      { q: "Fission of U-235 releases energy roughly.", a: "200 MeV" },
      { q: "Deuteron binding energy.", a: "≈2.22 MeV" },
      { q: "Strong force range.", a: "≈1 fm" }
    ],
    "particle-physics": [
      { q: "Number of quark flavors.", a: "6" },
      { q: "Number of lepton families.", a: "3" },
      { q: "Top quark mass (approx GeV).", a: "≈173" },
      { q: "Higgs boson spin.", a: "0" },
      { q: "Photon spin.", a: "1" },
      { q: "Up quark charge.", a: "+2/3" },
      { q: "Force carrier of strong.", a: "Gluon" },
      { q: "Number of gluons.", a: "8" }
    ],
    "astrophysics-cosmology": [
      { q: "Hubble's law: v = ?", a: "$H_0 d$" },
      { q: "Distance to nearest star (ly).", a: "≈4.24 (Proxima)" },
      { q: "Light from Sun reaches Earth in.", a: "≈8.3 min" },
      { q: "Age of universe.", a: "≈13.8 Gyr" },
      { q: "CMB temperature.", a: "≈2.725 K" },
      { q: "Dark energy fraction (approx).", a: "≈68%" },
      { q: "Mass of Sun (kg).", a: "≈$2 \\times 10^{30}$" },
      { q: "Distance Earth-Sun.", a: "≈1 AU = $1.5 \\times 10^{11}$ m" }
    ],
    "plasma-physics": [
      { q: "Debye length proportional to?", a: "$\\sqrt{T/n}$" },
      { q: "Plasma frequency for $n = 10^{18}$ /m³.", a: "≈56 GHz" },
      { q: "Cyclotron frequency electron in 1 T.", a: "≈28 GHz" },
      { q: "Larmor radius proportional to?", a: "$v_\\perp/B$" },
      { q: "Plasma valid when Debye length << what?", a: "System size" },
      { q: "ITER fusion fuel.", a: "D + T" },
      { q: "Tokamak confines using which field configuration?", a: "Toroidal + poloidal" },
      { q: "Magnetic confinement vs inertial: which uses lasers?", a: "Inertial" }
    ],
    "fluid-dynamics": [
      { q: "Re for water in 1 cm pipe at 1 m/s. $\\nu = 10^{-6}$.", a: "10000" },
      { q: "Above which Re does turbulence typically appear in pipe?", a: "≈2300" },
      { q: "Bernoulli applies along which line?", a: "Streamline" },
      { q: "Vorticity zero implies which flow?", a: "Irrotational" },
      { q: "Compressible flow: which dimensionless > 1?", a: "Mach > 0.3" },
      { q: "Drag coefficient of sphere at Re=10⁵.", a: "≈0.5" },
      { q: "Boundary layer thickness scales with $\\sqrt{?}$.", a: "$\\nu x/U$" },
      { q: "Wave speed in shallow water depth $h$.", a: "$\\sqrt{gh}$" }
    ],
    "continuum-elasticity": [
      { q: "Stress: force per area, units.", a: "Pa" },
      { q: "Strain: relative deformation, dimensionless?", a: "Yes" },
      { q: "Young's modulus units.", a: "Pa" },
      { q: "Bulk modulus measures resistance to?", a: "Volume change" },
      { q: "Shear modulus G in terms of E and ν.", a: "$E/[2(1+\\nu)]$" },
      { q: "Tension in cable supporting 1000 kg.", a: "9800 N" },
      { q: "Wave speed in rod with E, ρ.", a: "$\\sqrt{E/\\rho}$" },
      { q: "Bending stiffness $EI$ governs?", a: "Beam deflection" }
    ],
    "central-force": [
      { q: "Effective potential added term.", a: "$L^2/(2mr^2)$" },
      { q: "Orbit shape for $1/r$ potential.", a: "Conic section" },
      { q: "Energy of circular orbit at radius r, GM.", a: "$-GMm/(2r)$" },
      { q: "Conservation laws in central force.", a: "E, L" },
      { q: "Period of orbit semi-major axis a, GM.", a: "$2\\pi a^{3/2}/\\sqrt{GM}$" },
      { q: "Escape vs circular at same r ratio.", a: "$\\sqrt 2$" },
      { q: "Perihelion of Earth ≈ km.", a: "≈$1.471 \\times 10^8$" },
      { q: "Lagrange points: total.", a: "5" }
    ],
    "nonlinear-chaos-physics": [
      { q: "Logistic map first chaos transition r ≈?", a: "3.57" },
      { q: "Feigenbaum number δ.", a: "≈4.669" },
      { q: "Strange attractor of Lorenz dim.", a: "≈2.06" },
      { q: "Lyapunov exponent of tent map at $r=1$.", a: "$\\ln 2$" },
      { q: "KAM theorem applies to?", a: "Quasi-periodic orbits under perturbation" },
      { q: "Hopf bifurcation eigenvalues form?", a: "Complex conjugate pair" },
      { q: "Period 3 implies chaos (Sharkovsky/Li-Yorke).", a: "Yes" },
      { q: "Pendulum driven at resonance shows?", a: "Period doubling, chaos" }
    ],
    "angular-momentum-spin": [
      { q: "Spin of electron.", a: "1/2" },
      { q: "Total spin of two spin-1/2 in singlet.", a: "0" },
      { q: "$L^2$ eigenvalue for $\\ell = 2$.", a: "$6\\hbar^2$" },
      { q: "$\\sigma_x \\sigma_y = ?$", a: "$i\\sigma_z$" },
      { q: "Pauli matrix trace.", a: "0" },
      { q: "Number of spherical harmonics at $\\ell$.", a: "$2\\ell + 1$" },
      { q: "Spin in QHE has integer flavors?", a: "Yes, integer/fractional" },
      { q: "Stern-Gerlach beam splits into?", a: "$2s + 1$ beams" }
    ],
    "qm-3d-hydrogen": [
      { q: "Hydrogen $E_n = ?$", a: "$-13.6/n^2$ eV" },
      { q: "Bohr radius.", a: "≈0.529 Å" },
      { q: "Degeneracy of n=2 (no spin).", a: "4" },
      { q: "Degeneracy of n=3 (no spin).", a: "9" },
      { q: "Allowed $\\ell$ values for n.", a: "0 ≤ ℓ ≤ n−1" },
      { q: "$m_\\ell$ values for $\\ell$.", a: "$-\\ell \\ldots \\ell$" },
      { q: "Radial probability of 1s peaks at?", a: "$r = a_0$" },
      { q: "Fine structure scaling.", a: "$\\alpha^2 E_n$" }
    ],
    "perturbation-theory": [
      { q: "1st-order energy correction formula.", a: "$\\langle n|H'|n\\rangle$" },
      { q: "2nd-order energy correction sums over?", a: "$m \\neq n$" },
      { q: "Time-dep transition probability $|c_f|^2 \\propto ?$", a: "$|M_{fi}|^2$" },
      { q: "Fermi's golden rule rate $\\propto ?$", a: "$|M|^2 \\rho(E)$" },
      { q: "Stark effect on H ground state, order.", a: "Quadratic" },
      { q: "Zeeman ($B$): linear or quadratic?", a: "Linear (anomalous)" },
      { q: "Degenerate PT requires diagonalization in?", a: "Degenerate subspace" },
      { q: "Avoided crossing involves?", a: "Mixing of nearly-degenerate states" }
    ],
    "identical-particles": [
      { q: "Two-fermion state symmetric or antisymmetric?", a: "Antisymmetric" },
      { q: "Two-boson state?", a: "Symmetric" },
      { q: "Pauli principle excludes?", a: "Two identical fermions in same state" },
      { q: "Spin-statistics: half-integer spin →?", a: "Fermion" },
      { q: "Slater determinant ensures?", a: "Antisymmetry" },
      { q: "BEC = many bosons in?", a: "Ground state" },
      { q: "Photon statistics.", a: "Bose-Einstein" },
      { q: "Electron statistics.", a: "Fermi-Dirac" }
    ],
    "scattering-theory": [
      { q: "Differential cross section $d\\sigma/d\\Omega = ?$ (in terms of $f$).", a: "$|f|^2$" },
      { q: "Born approximation valid when?", a: "Weak potential" },
      { q: "Hard sphere total cross section.", a: "$4\\pi a^2$ (low energy)" },
      { q: "Optical theorem connects $\\sigma_\\text{tot}$ with?", a: "Imag part forward $f$" },
      { q: "Partial wave expansion uses?", a: "Legendre polynomials" },
      { q: "S-wave scattering length $a$ defines?", a: "Low-energy phase shift" },
      { q: "Resonance shows up as peak in?", a: "$\\sigma$ vs E" },
      { q: "Rutherford cross section $\\propto ?$", a: "$1/\\sin^4(\\theta/2)$" }
    ],
    "density-matrices": [
      { q: "Pure state $\\rho^2 = ?$", a: "ρ" },
      { q: "$\\text{tr}(\\rho)$.", a: "1" },
      { q: "Maximally mixed qubit density.", a: "I/2" },
      { q: "von Neumann entropy of pure state.", a: "0" },
      { q: "Master equation form.", a: "$\\dot\\rho = -i[H, \\rho]/\\hbar + \\mathcal D[\\rho]$" },
      { q: "Reduced density matrix obtained by?", a: "Partial trace" },
      { q: "Eigenvalues of ρ lie in?", a: "[0, 1]" },
      { q: "Sum of eigenvalues equals?", a: "1" }
    ],
    "path-integrals": [
      { q: "Action of classical path is?", a: "Stationary" },
      { q: "Weight of path in Feynman sum.", a: "$e^{iS/\\hbar}$" },
      { q: "Free particle propagator from x to x'.", a: "Gaussian in $x'-x$" },
      { q: "Imaginary time integral relates to?", a: "Partition function" },
      { q: "Lattice discretization step size $\\epsilon \\to ?$", a: "0" },
      { q: "Stationary phase corresponds to classical limit when?", a: "$\\hbar \\to 0$" },
      { q: "Number of paths is formally?", a: "Infinite" },
      { q: "Wick rotation: $t \\to ?$", a: "$-i\\tau$" }
    ],
    "quantum-information": [
      { q: "Pauli X applied to $|0\\rangle$.", a: "$|1\\rangle$" },
      { q: "$Z|1\\rangle$.", a: "$-|1\\rangle$" },
      { q: "Number of Bell states.", a: "4" },
      { q: "No-cloning theorem says we can't?", a: "Copy unknown quantum states" },
      { q: "Shor algorithm factors integers in time?", a: "Polynomial" },
      { q: "Grover search complexity for $N$ items.", a: "$O(\\sqrt N)$" },
      { q: "BB84 uses how many bases?", a: "2" },
      { q: "Quantum teleportation requires classical channels?", a: "Yes (2 bits)" }
    ],
    "symmetries-noether": [
      { q: "Symmetry under time translation conserves?", a: "Energy" },
      { q: "Translation symmetry conserves?", a: "Momentum" },
      { q: "Rotation symmetry conserves?", a: "Angular momentum" },
      { q: "$U(1)$ gauge symmetry of QED conserves?", a: "Charge" },
      { q: "CPT theorem combines?", a: "C, P, T" },
      { q: "Parity violation observed in which interaction?", a: "Weak" },
      { q: "Continuous group generators form?", a: "Lie algebra" },
      { q: "Noether current for time translation.", a: "Energy current" }
    ],
    "classical-field-theory": [
      { q: "Klein-Gordon Lagrangian density.", a: "$(1/2)(\\partial \\phi)^2 - (1/2)m^2\\phi^2$" },
      { q: "Free Dirac Lagrangian.", a: "$\\bar\\psi(i\\gamma^\\mu\\partial_\\mu - m)\\psi$" },
      { q: "Maxwell action $\\propto ?$", a: "$\\int F_{\\mu\\nu}F^{\\mu\\nu}$" },
      { q: "Field strength $F_{\\mu\\nu}$ antisymmetric in indices?", a: "Yes" },
      { q: "Energy-momentum tensor conserved: $\\partial_\\mu T^{\\mu\\nu} = ?$", a: "0" },
      { q: "Action principle minimizes/extremizes?", a: "Extremizes" },
      { q: "Gauge transformation of $A_\\mu$.", a: "$A_\\mu \\to A_\\mu + \\partial_\\mu \\Lambda$" },
      { q: "Lorentz scalar from $A_\\mu$ and itself.", a: "$A_\\mu A^\\mu$" }
    ],
    "qft": [
      { q: "Number of generators of $SU(3)$ in QCD.", a: "8" },
      { q: "Coupling constant of QED $\\alpha \\approx ?$", a: "1/137" },
      { q: "Z boson mass.", a: "≈91 GeV" },
      { q: "Higgs vacuum expectation value.", a: "≈246 GeV" },
      { q: "Fermion loop in QED contributes which sign?", a: "Negative" },
      { q: "Anomalous magnetic moment electron leading order $\\alpha/?$", a: "$2\\pi$" },
      { q: "Photon mass.", a: "0" },
      { q: "Confinement of quarks happens at scale?", a: "$\\Lambda_\\text{QCD}$" }
    ],
    "renormalization": [
      { q: "QED $\\beta(g)$ at one-loop sign?", a: "Positive" },
      { q: "QCD $\\beta$ at one-loop sign?", a: "Negative" },
      { q: "Asymptotic freedom belongs to?", a: "QCD" },
      { q: "Wilson RG integrates out which modes?", a: "High-momentum" },
      { q: "Number of dimensions where φ⁴ is marginal.", a: "4" },
      { q: "Anomalous dimension first appears at order $g^?$", a: "$g^2$ typically" },
      { q: "Mass renormalization in QED depends on cutoff how?", a: "Logarithmically" },
      { q: "Fixed point of RG flow corresponds to?", a: "Scale invariance" }
    ],
    "radiation-theory": [
      { q: "Power radiated by accelerated charge.", a: "$q^2 a^2/(6\\pi\\epsilon_0 c^3)$" },
      { q: "Dipole radiation pattern angular dependence.", a: "$\\sin^2\\theta$" },
      { q: "Frequency of synchrotron radiation peak $\\propto ?$", a: "$\\gamma^3$" },
      { q: "Photon energy at 500 nm.", a: "≈2.48 eV" },
      { q: "Number of photon polarizations.", a: "2" },
      { q: "Cherenkov radiation requires v > ?", a: "c/n" },
      { q: "Bremsstrahlung emitted when?", a: "Charged particle decelerates" },
      { q: "Larmor formula uses which time?", a: "Retarded" }
    ],
    "em-waves-matter": [
      { q: "Index of refraction water.", a: "1.33" },
      { q: "Skin depth $\\propto 1/\\sqrt ?$", a: "$\\sigma\\omega$" },
      { q: "Brewster's angle definition.", a: "Reflected and refracted perpendicular" },
      { q: "Phase velocity in non-dispersive medium.", a: "Constant" },
      { q: "Anomalous dispersion: $n$ vs $\\omega$?", a: "$dn/d\\omega < 0$" },
      { q: "Critical angle for TIR (n₁ to n₂, n₁ > n₂).", a: "$\\arcsin(n_2/n_1)$" },
      { q: "Plasma frequency formula uses?", a: "$ne^2/(m\\epsilon_0)$" },
      { q: "Reflection coefficient at normal incidence (n₁, n₂).", a: "$((n_1-n_2)/(n_1+n_2))^2$" }
    ],
    "lasers": [
      { q: "Stimulated emission rate $\\propto ?$", a: "Photon number" },
      { q: "Population inversion is needed because?", a: "Stimulated > absorption" },
      { q: "He-Ne laser wavelength.", a: "≈632.8 nm" },
      { q: "Coherence length of typical laser.", a: "≫ thermal source" },
      { q: "Threshold gain equals?", a: "Loss per pass" },
      { q: "Q-switching pulses (ns) order.", a: "≈ns" },
      { q: "Mode-locked pulses (fs) order.", a: "≈fs" },
      { q: "Semiconductor laser uses?", a: "p-n junction" }
    ],
    "quantum-optics": [
      { q: "Photon number variance coherent state mean $\\bar n$.", a: "$\\bar n$" },
      { q: "Squeezed state variance below?", a: "Standard quantum limit" },
      { q: "Cavity Q factor relates to?", a: "Photon lifetime" },
      { q: "Vacuum fluctuations energy per mode.", a: "$\\hbar\\omega/2$" },
      { q: "HOM dip width determined by?", a: "Photon bandwidth" },
      { q: "Single photon detector dark count: lower the better. T/F", a: "True" },
      { q: "Bunching vs antibunching for thermal light.", a: "Bunching" },
      { q: "Coherent state second-order correlation $g^{(2)}(0)$.", a: "1" }
    ],
    "amo": [
      { q: "MOT temperature scale.", a: "≈μK" },
      { q: "Sub-Doppler cooling exploits?", a: "Polarization gradient" },
      { q: "BEC requires temperature below?", a: "$T_c$ ≈ nK" },
      { q: "Magic wavelength in atomic clocks suppresses?", a: "Light shift" },
      { q: "Optical lattice formed by?", a: "Standing waves" },
      { q: "Rydberg state principal quantum number.", a: "$n \\gg 1$" },
      { q: "Cesium clock frequency.", a: "≈9.19 GHz" },
      { q: "Trapped ion qubit coherence times.", a: "seconds-minutes" }
    ],
    "phase-transitions": [
      { q: "Critical exponent $\\alpha$ for specific heat divergence.", a: "$C \\propto |t|^{-\\alpha}$" },
      { q: "Mean-field $\\beta$.", a: "1/2" },
      { q: "2D Ising $\\beta$.", a: "1/8" },
      { q: "Renormalization group fixed point at critical point.", a: "Yes" },
      { q: "Universality classes depend on?", a: "Symmetry + dimension" },
      { q: "First-order transition has discontinuous?", a: "First derivative of F" },
      { q: "Mean field exact above upper critical dimension.", a: "$d > 4$ for Ising" },
      { q: "Order parameter for ferromagnet.", a: "Magnetization" }
    ],
    "nonequilibrium-statmech": [
      { q: "Einstein relation $D = ?$", a: "$kT/\\gamma$" },
      { q: "RMS Brownian displacement $\\propto ?$", a: "$\\sqrt t$" },
      { q: "Fluctuation-dissipation relates response to?", a: "Correlation" },
      { q: "Detailed balance in equilibrium.", a: "Holds" },
      { q: "Fokker-Planck equation evolves?", a: "Probability density" },
      { q: "Langevin equation has stochastic force with?", a: "White noise" },
      { q: "Onsager reciprocity: symmetry of?", a: "Cross transport coeffs" },
      { q: "Mean first-passage time for symmetric random walk on integers from 0 to N.", a: "infinite (continuous time differs)" }
    ],
    "superconductivity": [
      { q: "Type I SC: complete flux expulsion (Meissner)?", a: "Yes" },
      { q: "Type II: vortex state between $H_{c1}, H_{c2}$.", a: "Yes" },
      { q: "BCS gap value $2\\Delta/(k_B T_c)$.", a: "≈3.53" },
      { q: "Cooper pair charge.", a: "-2e" },
      { q: "Critical temperature of mercury (historical).", a: "≈4.2 K" },
      { q: "Penetration depth $\\lambda$ vs $\\xi$: $\\kappa = ?$", a: "$\\lambda/\\xi$" },
      { q: "High-Tc cuprates have $T_c$ up to (K)?", a: "≈135" },
      { q: "Josephson junction current proportional to?", a: "$\\sin\\phi$" }
    ],
    "quantum-hall-topological": [
      { q: "von Klitzing constant (Ω).", a: "≈25813" },
      { q: "Filling factor $\\nu = 1$ corresponds to $\\sigma_{xy} = ?$", a: "$e^2/h$" },
      { q: "Fractional QHE filling factor example.", a: "1/3" },
      { q: "Chern number characterizes?", a: "Topological phase" },
      { q: "Edge states in QH protected against?", a: "Backscattering" },
      { q: "Topological insulator surface states are?", a: "Conducting" },
      { q: "Time-reversal symmetric topological insulator $\\mathbb Z_2$ invariant.", a: "Yes" },
      { q: "Quantum spin Hall first proposed material.", a: "HgTe quantum wells" }
    ],
    "phonons": [
      { q: "Number of phonon branches in $N$-atom basis 3D.", a: "$3N$" },
      { q: "Acoustic branches start at $\\omega = ?$ at $k = 0$.", a: "0" },
      { q: "Optical branches start at $\\omega = ?$ at $k = 0$.", a: "Finite" },
      { q: "Specific heat at very low T: Debye model.", a: "$\\propto T^3$" },
      { q: "Specific heat at very high T: Dulong-Petit.", a: "3R per mole" },
      { q: "Sound speed in solid relates to phonon velocity.", a: "Yes" },
      { q: "Phonon momentum $\\hbar k$ in first BZ.", a: "Yes" },
      { q: "Number of acoustic branches in 3D crystal.", a: "3" }
    ],
    "stellar-evolution": [
      { q: "Sun's main sequence lifetime (years).", a: "≈$10^{10}$" },
      { q: "Sun's age (Gyr).", a: "≈4.6" },
      { q: "Energy source in main sequence.", a: "H → He fusion" },
      { q: "End state of 1 M☉ star.", a: "White dwarf" },
      { q: "End state of 25 M☉ star.", a: "Black hole" },
      { q: "Hayashi track is which phase?", a: "Pre-MS contraction" },
      { q: "AGB stars lose mass through?", a: "Stellar winds" },
      { q: "Red giant phase the Sun becomes (Gyr in future).", a: "≈5" }
    ],
    "stellar-nucleosynthesis": [
      { q: "Most common nuclear fuel in stars.", a: "H" },
      { q: "Triple-α creates which nucleus.", a: "C-12" },
      { q: "CNO cycle dominates above mass (M☉).", a: "≈1.3" },
      { q: "r-process: rapid neutron capture in?", a: "SN/neutron star mergers" },
      { q: "s-process: slow neutron capture in?", a: "AGB stars" },
      { q: "Iron peak indicates which property of nuclear physics?", a: "Maximum binding energy per nucleon" },
      { q: "p-p chain net reaction.", a: "$4p \\to {}^4\\text{He} + 2e^+ + 2\\nu_e$" },
      { q: "Carbon burning temperature (K).", a: "≈$8 \\times 10^8$" }
    ],
    "compact-objects": [
      { q: "Neutron star radius typical (km).", a: "≈10-12" },
      { q: "Maximum mass of neutron star (M☉).", a: "≈2-2.5" },
      { q: "Pulsar period typical (ms).", a: "ms to seconds" },
      { q: "Magnetar field strength (T).", a: "$10^{10}$+" },
      { q: "Stellar BH formed when initial mass exceeds (M☉).", a: "≈20-25" },
      { q: "Schwarzschild radius for 10 M☉ BH (km).", a: "≈30" },
      { q: "Event horizon: no escape for what?", a: "Light" },
      { q: "Accretion disk temperature for stellar BH (K).", a: "≈$10^7$" }
    ],
    "galactic-dynamics": [
      { q: "Milky Way disk diameter (kpc).", a: "≈30" },
      { q: "Sun's orbital speed around Galactic Center (km/s).", a: "≈220" },
      { q: "Sun's distance from GC (kpc).", a: "≈8" },
      { q: "Local Group: dominant galaxy.", a: "Andromeda + Milky Way" },
      { q: "Spiral arms density wave or material?", a: "Density wave" },
      { q: "Globular clusters orbit?", a: "Halo" },
      { q: "Tully-Fisher: relates luminosity to?", a: "Rotation velocity" },
      { q: "Plummer model for clusters." , a: "Bounded density profile" }
    ],
    "bbn-cmb-inflation": [
      { q: "CMB temperature (K).", a: "2.725" },
      { q: "Photon-to-baryon ratio.", a: "≈$10^9$" },
      { q: "Last scattering redshift.", a: "≈1100" },
      { q: "Inflation duration order (s).", a: "≈$10^{-32}$" },
      { q: "Number of e-folds typical inflation.", a: "≈60" },
      { q: "Acoustic peak first $\\ell$ in CMB.", a: "≈200" },
      { q: "Helium-4 mass fraction predicted by BBN.", a: "≈25%" },
      { q: "Deuterium abundance D/H.", a: "≈$3 \\times 10^{-5}$" }
    ],
    "gravitational-waves": [
      { q: "Number of GW polarizations.", a: "2" },
      { q: "GW speed.", a: "c" },
      { q: "Quadrupole formula amplitude $\\propto ?$", a: "$\\ddot Q$" },
      { q: "LIGO arm length (km).", a: "4" },
      { q: "First GW direct detection year.", a: "2015" },
      { q: "Source GW150914.", a: "Binary BH merger" },
      { q: "Chirp mass relates to?", a: "Frequency evolution" },
      { q: "Tensor (GW) mode of metric perturbation.", a: "$h_{ij}$ transverse traceless" }
    ],
    "high-energy-astrophysics": [
      { q: "GRB duration short vs long boundary (s).", a: "≈2" },
      { q: "Long GRB origin.", a: "Massive star collapse" },
      { q: "Short GRB origin.", a: "Neutron star merger" },
      { q: "Cosmic ray spectrum power-law E^?", a: "$\\approx -2.7$" },
      { q: "AGN central engine.", a: "Supermassive BH" },
      { q: "Synchrotron emits from?", a: "Relativistic electrons in B" },
      { q: "Compton scattering of CMB by electrons.", a: "Sunyaev-Zel'dovich" },
      { q: "ULIRG luminosity threshold (L☉).", a: "$> 10^{12}$" }
    ],
    "math-methods-physics": [
      { q: "$\\int_0^\\infty x^n e^{-x}dx$.", a: "$n!$" },
      { q: "Legendre $P_3(x)$.", a: "$(5x^3 - 3x)/2$" },
      { q: "Hermite polynomial $H_2(x)$.", a: "$4x^2 - 2$" },
      { q: "Bessel $J_0(x)$ at $x = 0$.", a: "1" },
      { q: "Gamma $\\Gamma(1/2)$.", a: "$\\sqrt\\pi$" },
      { q: "Stirling: $\\ln n! \\approx ?$", a: "$n\\ln n - n$" },
      { q: "Dirac delta property $\\int \\delta(x) f(x)dx = ?$", a: "$f(0)$" },
      { q: "Solid angle of sphere.", a: "$4\\pi$" }
    ],
    "group-theory-physics": [
      { q: "Number of irreps of finite group equals?", a: "Number of conjugacy classes" },
      { q: "Sum of squares of dimensions of irreps equals?", a: "Group order" },
      { q: "Schur's lemma intertwiner of irrep with itself is?", a: "Scalar" },
      { q: "SU(2) irrep dimensions.", a: "$2j+1$ for $j = 0, 1/2, 1, \\ldots$" },
      { q: "Number of irreps of $S_n$ equals?", a: "Number of partitions of n" },
      { q: "Color SU(3) fundamental dim.", a: "3" },
      { q: "SU(3) adjoint dim.", a: "8" },
      { q: "Discrete groups in crystallography: how many in 3D?", a: "230 space groups" }
    ],
    "computational-physics": [
      { q: "Verlet integrator preserves?", a: "Symplectic structure" },
      { q: "Monte Carlo error $\\propto ?$", a: "$1/\\sqrt N$" },
      { q: "Metropolis acceptance criterion.", a: "$\\min(1, e^{-\\Delta E/kT})$" },
      { q: "FFT requires N to be?", a: "Power of 2 (typically)" },
      { q: "Finite difference of $f''$ to $O(h^2)$.", a: "$(f_{i+1} - 2f_i + f_{i-1})/h^2$" },
      { q: "Wave equation CFL condition (1D, speed c).", a: "$c\\Delta t/\\Delta x \\leq 1$" },
      { q: "Number of grid points for accuracy doubles when?", a: "Step halves" },
      { q: "GPU advantage for which kind of problem?", a: "Massive parallelism" }
    ],
    "soft-matter-biophysics": [
      { q: "Random walk RMS distance $\\propto ?$", a: "$\\sqrt N$" },
      { q: "Flory exponent good solvent 3D.", a: "≈0.588" },
      { q: "Persistence length DNA (nm).", a: "≈50" },
      { q: "Membrane bending energy quadratic in?", a: "Curvature" },
      { q: "Reynolds number bacterium.", a: "≈$10^{-5}$" },
      { q: "Brownian time scale to diffuse $\\ell$.", a: "$\\ell^2/D$" },
      { q: "Hydrodynamic radius Stokes.", a: "$a$" },
      { q: "ATP hydrolysis energy (kT).", a: "≈20" }
    ],

    // ===== CONTROL =====
    "intro-control": [
      { q: "Closed-loop formula T = ?", a: "G/(1+GH)" },
      { q: "Negative feedback sign at summing junction.", a: "-" },
      { q: "Disturbance attenuation requires high |GH| or low?", a: "high |GH|" },
      { q: "Open-loop systems cannot reject?", a: "Disturbances" },
      { q: "Reference signal also called?", a: "Set point" },
      { q: "Closed loop usually more stable or less stable than open loop?", a: "Could be either" },
      { q: "SISO stands for?", a: "Single input single output" },
      { q: "MIMO stands for?", a: "Multi input multi output" }
    ],
    "laplace-transforms-control": [
      { q: "$\\mathcal L\\{e^{-2t}\\}$.", a: "$1/(s+2)$" },
      { q: "$\\mathcal L\\{t e^{-3t}\\}$.", a: "$1/(s+3)^2$" },
      { q: "$\\mathcal L\\{\\sin 5t\\}$.", a: "$5/(s^2 + 25)$" },
      { q: "$\\mathcal L^{-1}\\{1/s^3\\}$.", a: "$t^2/2$" },
      { q: "Final value of $Y(s) = 5/(s(s+2)(s+3))$.", a: "5/6" },
      { q: "Initial value of $F(s) = (3s+1)/(s^2+s+1)$.", a: "3" },
      { q: "$\\mathcal L\\{f(t-2)u(t-2)\\}$ for $f \\leftrightarrow F$.", a: "$e^{-2s}F$" },
      { q: "$\\mathcal L^{-1}\\{1/(s^2+9)\\}$.", a: "$(\\sin 3t)/3$" }
    ],
    "transfer-functions": [
      { q: "DC gain of $G = 6/(s+3)$.", a: "2" },
      { q: "Pole of $G = 4/(s+8)$.", a: "-8" },
      { q: "Step response final value of $G = 10/(s^2+4s+10)$.", a: "1" },
      { q: "Order of $G = (s+1)/(s^3 + 3s^2 + 2s + 5)$.", a: "3" },
      { q: "Zero of $G = (s+2)/(s+5)$.", a: "-2" },
      { q: "Proper $G(s)$ has degree-numerator ≤ degree-denominator?", a: "Yes" },
      { q: "Stable if all poles in?", a: "LHP" },
      { q: "G(s) with pole at s = 0 is which type?", a: "Type 1" }
    ],
    "electrical-modeling-control": [
      { q: "Impedance of L = 0.5 H at s = 4.", a: "2" },
      { q: "Impedance of C = 100 μF at s = 100 rad/s.", a: "100 Ω" },
      { q: "RC time constant for R = 1 kΩ, C = 10 μF.", a: "0.01 s" },
      { q: "RL time constant for R = 100 Ω, L = 0.2 H.", a: "0.002 s" },
      { q: "Gain of inverting op-amp R_f = 50k, R_i = 10k.", a: "-5" },
      { q: "Op-amp integrator pole.", a: "s = 0" },
      { q: "Op-amp differentiator zero.", a: "s = 0" },
      { q: "Series R-L cutoff $\\omega_c = ?$", a: "R/L" }
    ],
    "mechanical-modeling-control": [
      { q: "$\\omega_n$ for m=2, k=200.", a: "10 rad/s" },
      { q: "$\\zeta$ for m=1, b=4, k=4.", a: "1" },
      { q: "Critical damping b for m=1, k=100.", a: "20" },
      { q: "Transfer function for translational mass alone: $X/F$.", a: "$1/(ms^2)$" },
      { q: "Force from spring k stretched x.", a: "kx" },
      { q: "Force from damper b at velocity v.", a: "bv" },
      { q: "Rotational analog of mass.", a: "Moment of inertia" },
      { q: "Rotational analog of force.", a: "Torque" }
    ],
    "state-space": [
      { q: "Number of states for $\\ddot y + 2\\dot y + y = u$.", a: "2" },
      { q: "Eigenvalues of $A = [[-2, 0], [0, -3]]$.", a: "-2, -3" },
      { q: "Controllable canonical form B is?", a: "[0; 0; ...; 1]" },
      { q: "Observable canonical form C is?", a: "[1, 0, ..., 0]" },
      { q: "Dimension of A for n-state system.", a: "n × n" },
      { q: "Transfer function from SS: $G(s) = ?$", a: "$C(sI-A)^{-1}B + D$" },
      { q: "MIMO system has B with how many columns (for m inputs)?", a: "m" },
      { q: "Diagonal A corresponds to which modes?", a: "Decoupled exponentials" }
    ],
    "first-order-response": [
      { q: "$\\tau$ for G = 5/(s+10).", a: "0.1 s" },
      { q: "Settling time (2%) for $\\tau = 0.5$.", a: "2 s" },
      { q: "Rise time for $\\tau = 0.25$.", a: "0.55 s" },
      { q: "After 1τ, percent of final value.", a: "63%" },
      { q: "After 4τ, percent.", a: "98%" },
      { q: "Closed-loop $\\tau$ for plant $1/(\\tau s + 1)$ with K and unity feedback.", a: "$\\tau/(1+K)$" },
      { q: "DC gain of $G = 8/(2s+4)$.", a: "2" },
      { q: "Pole of G = 3/(2s + 6).", a: "-3" }
    ],
    "second-order-response": [
      { q: "$\\omega_n$ and $\\zeta$ for G = 25/(s² + 6s + 25).", a: "5, 0.6" },
      { q: "%OS for $\\zeta = 0.5$.", a: "16.3%" },
      { q: "%OS for $\\zeta = 0.7$.", a: "≈4.6%" },
      { q: "$T_s$ (2%) for $\\omega_n = 10$, $\\zeta = 0.5$.", a: "0.8 s" },
      { q: "$T_p$ for $\\omega_n = 4$, $\\zeta = 0.5$.", a: "≈0.907 s" },
      { q: "$\\omega_d$ for $\\omega_n = 10$, $\\zeta = 0.6$.", a: "8 rad/s" },
      { q: "Critically damped poles for $\\omega_n = 5$.", a: "-5, -5" },
      { q: "Resonant peak $M_p$ for $\\zeta = 0.5$.", a: "≈1.155" }
    ],
    "block-diagrams": [
      { q: "$G_1 = 2/s$, $G_2 = s$ in series.", a: "2" },
      { q: "$G_1 = 1/(s+1)$, $G_2 = 1/(s+1)$ parallel.", a: "$2/(s+1)$" },
      { q: "Unity neg feedback with G = 100/(s+10). T = ?", a: "$100/(s + 110)$" },
      { q: "Positive feedback G/(1 - GH). H = 0.5, G = 4. T?", a: "$-4$" },
      { q: "Sensitivity = ?", a: "$1/(1+GH)$" },
      { q: "Complementary sensitivity = ?", a: "$GH/(1+GH)$" },
      { q: "$S + T = ?$", a: "1" },
      { q: "Disturbance at output sees transfer function?", a: "S" }
    ],
    "signal-flow-mason": [
      { q: "$\\Delta$ for graph with 2 non-touching loops $L_1, L_2$.", a: "$1 - L_1 - L_2 + L_1L_2$" },
      { q: "If forward path touches all loops, $\\Delta_k = ?$", a: "1" },
      { q: "Source node has how many incoming?", a: "0" },
      { q: "Sink node has how many outgoing?", a: "0" },
      { q: "Number of distinct forward paths needed for Mason?", a: "All of them" },
      { q: "Two loops touching means $\\Delta$ excludes their product?", a: "Yes" },
      { q: "Loop gain = product of?", a: "Branch gains around loop" },
      { q: "Mason gives transfer between source and?", a: "Sink" }
    ],
    "routh-hurwitz": [
      { q: "Stable: $s^3 + 4s^2 + 5s + 6$? Y/N", a: "Yes" },
      { q: "Stable: $s^3 + s^2 + s + 6$?", a: "No" },
      { q: "Sign changes in first column = ?", a: "RHP roots" },
      { q: "Necessary cond: all coefficients same sign?", a: "Yes" },
      { q: "Range of K for $s^3 + 3s^2 + 2s + K$ stability.", a: "0 < K < 6" },
      { q: "Row of zeros indicates poles on?", a: "$j\\omega$ axis" },
      { q: "Auxiliary polynomial uses row?", a: "Above zero row" },
      { q: "Hurwitz polynomial = all roots in?", a: "LHP" }
    ],
    "steady-state-errors": [
      { q: "Type-1 plant to step input. $e_{ss}$?", a: "0" },
      { q: "Type-0 plant to ramp input.", a: "∞" },
      { q: "$K_p = G(0)$. For G = 10/((s+2)(s+5)).", a: "1" },
      { q: "$e_{ss}$ for step on previous: 1/(1+K_p) = ?", a: "0.5" },
      { q: "Type-1 plant to ramp $e_{ss} = 1/K_v$. For $G = 100/(s(s+10))$, $K_v = ?$", a: "10" },
      { q: "Then $e_{ss}$ ramp.", a: "0.1" },
      { q: "Type-2 to parabolic input $e_{ss} = ?$", a: "$1/K_a$" },
      { q: "How to make type-0 track step exactly?", a: "Add integrator" }
    ],
    "root-locus": [
      { q: "Number of branches starts at?", a: "Open-loop poles" },
      { q: "Ends at?", a: "Open-loop zeros (incl ∞)" },
      { q: "Real-axis: locus to left of odd count of?", a: "Poles + zeros" },
      { q: "Asymptote count = ?", a: "n - m" },
      { q: "Asymptote angles for n-m=3: ?", a: "60°, 180°, 300°" },
      { q: "Centroid for poles 0, -2, -6 no zeros.", a: "-8/3" },
      { q: "Magnitude condition $|GH| = ?$ on locus.", a: "1/K" },
      { q: "Phase condition.", a: "$\\angle GH = (2k+1)180°$" }
    ],
    "root-locus-design": [
      { q: "Adding zero pulls locus which direction?", a: "Left" },
      { q: "Adding pole pushes locus which direction?", a: "Right" },
      { q: "Lead has z < p (closer to origin)? Y/N", a: "Yes" },
      { q: "Lag has z < p?", a: "No (z > p)" },
      { q: "PD adds zero at?", a: "$-K_p/K_d$" },
      { q: "Cancellation of slow pole risky because?", a: "Modeling error" },
      { q: "Max phase boost of single lead?", a: "<90°" },
      { q: "Lag boosts DC gain by?", a: "z/p" }
    ],
    "bode-plots": [
      { q: "dB of |G| = 10.", a: "20" },
      { q: "dB of 0.01.", a: "-40" },
      { q: "Slope of $1/s$.", a: "-20 dB/dec" },
      { q: "Slope of integrator squared.", a: "-40 dB/dec" },
      { q: "Phase of $-1$ (constant).", a: "180°" },
      { q: "Pole at $\\omega_p$ above corner contributes how many dB/dec.", a: "-20" },
      { q: "Bandwidth defined at how many dB?", a: "-3" },
      { q: "2nd-order resonance peak for $\\zeta = 0.1$ approx.", a: "≈14 dB" }
    ],
    "nyquist": [
      { q: "Stability when N = 0, P = 0.", a: "Stable" },
      { q: "Stability when N = 1 (cw), P = 0.", a: "Unstable" },
      { q: "Critical point.", a: "-1" },
      { q: "Nyquist contour encloses which half-plane?", a: "RHP" },
      { q: "Type-1 plant Nyquist plot goes through origin?", a: "Yes, at $\\omega = \\infty$" },
      { q: "Phase at $\\omega_{pc}$.", a: "-180°" },
      { q: "Magnitude at $\\omega_{gc}$.", a: "1" },
      { q: "Bode's gain-phase relation for minimum phase: phase from?", a: "Magnitude" }
    ],
    "gain-phase-margins": [
      { q: "Good PM range.", a: "30°-60°" },
      { q: "Good GM (dB) minimum.", a: "6" },
      { q: "PM at instability.", a: "0" },
      { q: "GM at instability.", a: "0 dB (= 1)" },
      { q: "$\\zeta \\approx $ PM/100 (deg). For PM = 50°.", a: "0.5" },
      { q: "Delay margin = PM/$\\omega_{gc}$. PM = 60° (1.047 rad), $\\omega_{gc} = 4$.", a: "0.262 s" },
      { q: "Vector margin smallest distance to?", a: "-1" },
      { q: "Pure integrator added to loop reduces PM by?", a: "90°" }
    ],
    "lead-lag": [
      { q: "Max boost of lead with α = 0.1.", a: "≈55°" },
      { q: "$\\omega_m$ for z=1, p=10.", a: "≈3.16" },
      { q: "Lag with z=1, p=0.1 multiplies DC gain by?", a: "10" },
      { q: "Phase at $\\omega_m$.", a: "$\\phi_{max}$" },
      { q: "Lead-lag combines benefits, costs?", a: "More tuning params" },
      { q: "Place lag pole much below?", a: "Crossover" },
      { q: "Place lead corner near?", a: "Desired crossover" },
      { q: "Realizable D term needs pole because?", a: "Avoid noise amplification at high $\\omega$" }
    ],
    "pid-control": [
      { q: "Ziegler-Nichols PID Kp = ?", a: "$0.6 K_u$" },
      { q: "Ziegler-Nichols PID $T_i = ?$", a: "$T_u/2$" },
      { q: "Ziegler-Nichols PID $T_d = ?$", a: "$T_u/8$" },
      { q: "Integral term removes which error?", a: "Steady-state" },
      { q: "Derivative term amplifies which signal?", a: "Noise" },
      { q: "Anti-windup needed when actuator?", a: "Saturates" },
      { q: "PID as TF: $K_p + K_i/s + K_d s = ?$", a: "$(K_d s^2 + K_p s + K_i)/s$" },
      { q: "Pole of PID controller.", a: "$s = 0$" }
    ],
    "state-space-design": [
      { q: "Controllability matrix has dimension (n×?).", a: "n" },
      { q: "Pole placement requires which property?", a: "Controllability" },
      { q: "LQR minimizes which type of cost?", a: "Quadratic" },
      { q: "Riccati equation for LQR is?", a: "Algebraic Riccati" },
      { q: "Reference tracking by static feedback alone?", a: "No (needs feedforward)" },
      { q: "Integral action via?", a: "Augmented integral state" },
      { q: "LQG combines LQR with?", a: "Kalman filter" },
      { q: "Ackermann's formula gives?", a: "Feedback gain K" }
    ],
    "state-observers": [
      { q: "Observer eigenvalues from?", a: "$A - LC$" },
      { q: "Innovation defined as?", a: "$y - C\\hat x$" },
      { q: "Observability matrix uses?", a: "$C, CA, CA^2, \\ldots$" },
      { q: "Reduced-order observer estimates only?", a: "Unmeasured states" },
      { q: "Kalman filter optimal for?", a: "Gaussian noise" },
      { q: "Separation principle: design observer + controller?", a: "Independently" },
      { q: "Observer convergence rate via L?", a: "Faster than controller" },
      { q: "Observability dual of?", a: "Controllability" }
    ],
    "digital-control": [
      { q: "Unit circle stability for?", a: "Discrete systems" },
      { q: "$z = e^{sT}$ for $s = -1, T = 0.1$.", a: "$e^{-0.1} ≈ 0.905$" },
      { q: "Tustin: $s \\to ?$", a: "$(2/T)(z-1)/(z+1)$" },
      { q: "Nyquist sampling rate above?", a: "$2 f_{max}$" },
      { q: "Aliasing arises when?", a: "$f_s < 2 f_{max}$" },
      { q: "ZOH transfer function $(1 - e^{-sT})/s$. T/F", a: "True" },
      { q: "Jury's test discrete analog of?", a: "Routh-Hurwitz" },
      { q: "Difference equation $y[k] + 0.5 y[k-1] = u[k]$. Pole?", a: "z = -0.5" }
    ]
  });

  // ============================================================
  // ENCYCLOPEDIA ARTICLES: extended prose for foundational topics
  // ============================================================
  Object.assign(window.ENCYCLOPEDIA_ARTICLE, {

    "arithmetic-foundations": `<p><strong>Arithmetic</strong> is the study of numbers and the four basic operations: addition, subtraction, multiplication, and division. The integer system $\\mathbb Z$ was built from the natural numbers $\\mathbb N$ by allowing subtraction; the rationals $\\mathbb Q$ extended this by allowing division. The real number system $\\mathbb R$ then fills in the "gaps" (irrationals like $\\sqrt 2$ and $\\pi$), and complex numbers $\\mathbb C$ extend further by introducing $i = \\sqrt{-1}$.</p>
<p>Three things to internalize at this stage. First, the <strong>order of operations</strong> (sometimes called PEMDAS): parentheses bind tightest, then exponents, then multiplication and division left-to-right, then addition and subtraction. This is a convention — without it, $3 + 4 \\times 2$ would be ambiguous. Second, <strong>signs</strong>: $-x^2$ means $-(x^2)$, not $(-x)^2$. Two negatives multiplied give a positive; odd powers preserve the sign. Third, <strong>factorization</strong> into primes: every positive integer has a unique prime factorization (fundamental theorem of arithmetic), and this powers gcd/lcm calculations and number theory.</p>
<p>The deepest result hidden inside basic arithmetic is the fact that $\\mathbb Z$ is a unique factorization domain. Modern algebra spent two centuries figuring out which other rings share this property (Euclidean rings, principal ideal domains). The Euclidean algorithm for $\\gcd$ — keep replacing the larger by its remainder — is the same algorithm Euclid wrote down around 300 BC; it remains the fastest general method.</p>`,

    "linear-equations": `<p>A <strong>linear equation</strong> is one of the form $ax + b = 0$, with solution $x = -b/a$ provided $a \\neq 0$. Beyond a single variable, linear equations describe straight lines ($y = mx + b$), planes in 3D ($ax + by + cz = d$), and ultimately the entire field of linear algebra in higher dimensions.</p>
<p>The geometric picture pays dividends. The slope $m$ of a line is rise over run — change in $y$ per unit change in $x$. Two lines are parallel iff they have the same slope; perpendicular iff $m_1 m_2 = -1$. The y-intercept $b$ is where the line crosses the $y$-axis at $x = 0$. To find the line through two points $(x_1, y_1)$ and $(x_2, y_2)$, compute $m = (y_2 - y_1)/(x_2 - x_1)$, then use point-slope form $y - y_1 = m(x - x_1)$.</p>
<p>Systems of linear equations are solved by elimination (Gauss), substitution, or matrix methods (Cramer, inverse). A 2×2 system has a unique solution iff the lines are not parallel; otherwise no solution (parallel non-coincident) or infinitely many (coincident). Modern numerical linear algebra solves systems with millions of variables using Gaussian elimination with partial pivoting plus iterative methods like conjugate gradient.</p>
<p>Solving word problems requires translation: read each English sentence as an equation, define variables, then apply the algebra. The hardest part is almost always the translation. With practice the patterns become recognizable: "is" means equals, "more than" means plus, "the sum of" means add, and so on.</p>`,

    "derivatives": `<p>The <strong>derivative</strong> $f'(x) = \\lim_{h \\to 0} (f(x+h) - f(x))/h$ measures the instantaneous rate of change of $f$ at $x$. Geometrically it is the slope of the tangent line; physically it is velocity (when $f$ is position), force per unit charge (when $f$ is potential), and so on. The notation $df/dx$ is due to Leibniz; $f'(x)$ comes from Lagrange. Newton wrote $\\dot f$ — still used in physics for time derivatives.</p>
<p>The mechanical computation rules — power rule $d/dx[x^n] = nx^{n-1}$, product rule $(fg)' = f'g + fg'$, quotient rule, chain rule $d/dx[f(g(x))] = f'(g(x)) g'(x)$ — let you differentiate essentially any elementary function. The chain rule is the most important: it's the rule for composed functions, and it's the basis of automatic differentiation that powers neural network training.</p>
<p>Applications are everywhere. Critical points (where $f' = 0$) yield maxima, minima, and saddle points; the second derivative test distinguishes them. Related rates problems use chain rule to relate the time derivatives of geometrically connected quantities. Linear approximation $f(x) \\approx f(a) + f'(a)(x - a)$ is the simplest case of Taylor's theorem and is the foundation of Newton's method, error analysis, and infinitesimal physics.</p>
<p>The deep result is the Fundamental Theorem of Calculus: differentiation and integration are inverse operations. If $F(x) = \\int_a^x f(t)\\,dt$, then $F'(x) = f(x)$. This identification, made rigorous in the 19th century by Cauchy and Riemann, unified two thousand years of geometric reasoning about areas and tangents into a single calculus.</p>`,

    "integrals": `<p>The <strong>integral</strong> $\\int_a^b f(x)\\,dx$ measures the signed area between the curve $y = f(x)$ and the x-axis from $a$ to $b$. Riemann defined it rigorously as the limit of "Riemann sums" — partition the interval into small pieces, multiply $f$ at a sample point by the width, sum, and let the partition get finer. For continuous functions on closed intervals this limit always exists.</p>
<p>The Fundamental Theorem of Calculus connects integration to differentiation: $\\int_a^b f(x)\\,dx = F(b) - F(a)$ where $F'(x) = f(x)$. This converts integration into anti-differentiation. The substitution rule ($u = g(x)$, $du = g'(x)\\,dx$) is the chain rule run backwards; integration by parts ($\\int u\\,dv = uv - \\int v\\,du$) is the product rule run backwards.</p>
<p>Specific techniques each correspond to specific integrand forms. Trigonometric substitution handles $\\sqrt{a^2 \\pm x^2}$. Partial fractions decomposes rational integrands. Trigonometric identities convert $\\sin^m \\cos^n$ products into single-power forms. Improper integrals over infinite intervals are evaluated as limits. Multidimensional generalizations follow: double and triple integrals, surface and line integrals, Stokes' and Gauss's theorems unify everything in vector calculus.</p>
<p>The Lebesgue integral, defined a half-century after Riemann, generalizes to a vastly larger class of functions and integrates over abstract measure spaces. It is the integral underlying modern probability theory and harmonic analysis. The Riemann integral is the calculus version; the Lebesgue integral is the analyst's version.</p>`,

    "linear-algebra": `<p><strong>Linear algebra</strong> studies vector spaces and the linear maps between them. The two core objects are <strong>matrices</strong> (rectangular arrays of numbers, representing linear maps in some chosen bases) and <strong>vectors</strong> (elements of those spaces). A linear map preserves addition and scalar multiplication; it sends lines through the origin to lines (or single points) through the origin.</p>
<p>The four big computational tasks: <strong>solve $A\\mathbf x = \\mathbf b$</strong> (Gaussian elimination), <strong>find eigenvalues and eigenvectors</strong> ($A\\mathbf v = \\lambda \\mathbf v$, computed from $\\det(A - \\lambda I) = 0$), <strong>diagonalize</strong> a matrix (write $A = PDP^{-1}$ with $D$ diagonal), and <strong>find a basis for a subspace</strong> (column space, null space, etc.). The rank-nullity theorem connects column rank and null-space dimension: $\\dim(\\text{col}(A)) + \\dim(\\text{null}(A)) = n$ for an $m \\times n$ matrix.</p>
<p>Geometric content: a matrix maps the unit square to a parallelogram; $|\\det A|$ is the area of that parallelogram, and $\\det A$ is signed positive iff $A$ preserves orientation. Eigenvectors are the directions left unchanged (up to scale) by the map. Symmetric matrices have orthogonal eigenvectors and real eigenvalues — spectral theorem. Singular value decomposition $A = U\\Sigma V^T$ generalizes this to arbitrary matrices and is the workhorse of modern data analysis.</p>
<p>Applications saturate science and engineering. Mechanics: the moment-of-inertia tensor is a $3 \\times 3$ symmetric matrix; principal axes are eigenvectors. Statistics: principal component analysis is just SVD on a centered data matrix. Quantum mechanics: states are vectors, observables are Hermitian matrices, measurement outcomes are eigenvalues. Computer graphics: every transformation is a $4 \\times 4$ matrix multiplication.</p>`,

    "newtons-laws": `<p><strong>Newton's three laws of motion</strong>, published in his <em>Principia</em> in 1687, form the foundation of classical mechanics. <strong>First law</strong>: an object at rest stays at rest, and an object in motion stays in motion in a straight line, unless acted upon by a net external force. This defines inertia and inertial reference frames. <strong>Second law</strong>: $\\mathbf F = m\\mathbf a$. The net force on an object equals its mass times its acceleration. <strong>Third law</strong>: for every action there is an equal and opposite reaction.</p>
<p>Newton's second law is more than the equation $F = ma$. It says that forces produce accelerations, not velocities — a moving object with no force continues at constant velocity. The mass $m$ is the inertia: it measures how much the object resists acceleration. The formulation generalizes to systems of particles via the center-of-mass theorem: $\\mathbf F_\\text{net} = M\\mathbf a_\\text{CM}$.</p>
<p>The most important problem-solving tool is the <strong>free-body diagram</strong>: isolate the object, draw every force acting on it, decompose into a chosen coordinate system, and apply $\\sum F_x = m a_x$ and $\\sum F_y = m a_y$ separately. Common forces: gravity ($mg$ downward), normal force (perpendicular to a surface), friction (along surface, opposing motion or attempted motion), tension (along a rope, away from the object), spring force ($-kx$), and applied forces.</p>
<p>Newton's laws are exact in inertial frames at low speeds. In rotating frames you must add fictitious forces (centrifugal, Coriolis). At speeds approaching light, replace with relativistic mechanics. At atomic scales, replace with quantum mechanics. But over a wide range of everyday phenomena — from car crashes to planetary orbits to the design of skyscrapers — Newton's laws are accurate to extraordinary precision.</p>`,

    "energy-work": `<p><strong>Work</strong> done by a force $\\mathbf F$ on an object moving along a path is $W = \\int \\mathbf F \\cdot d\\mathbf r$ — the line integral of force dotted with displacement. For constant force and straight-line displacement: $W = F d \\cos\\theta$. The dot product captures the fact that only the component of force along the direction of motion does work; a force perpendicular to motion (like gravity on a satellite in circular orbit) does no work.</p>
<p><strong>Kinetic energy</strong> $KE = \\frac{1}{2}mv^2$ is the energy of motion. The <strong>work-energy theorem</strong> connects them: the net work done on an object equals its change in kinetic energy. Proof: integrate $F = ma = m\\,dv/dt$ along the path; the right side becomes $\\int m v\\,dv = \\frac{1}{2}mv^2$.</p>
<p><strong>Potential energy</strong> is associated with conservative forces — forces whose work depends only on the endpoints of the path, not the route. Gravitational PE near Earth: $U = mgh$. Elastic PE in a spring: $U = \\frac{1}{2}kx^2$. Universal gravitational: $U = -GMm/r$. For conservative forces, total mechanical energy $E = KE + PE$ is conserved as the object moves.</p>
<p>The principle of energy conservation extends beyond mechanics: thermal energy (random molecular motion), chemical energy (bond energy), electromagnetic energy (in fields), nuclear energy, and ultimately mass-energy $E = mc^2$ in relativity. Einstein's first law of thermodynamics says energy can be transformed but never created or destroyed. <strong>Power</strong>, $P = dE/dt = \\mathbf F \\cdot \\mathbf v$, measures the rate of energy transfer.</p>`,

    "qm-foundations": `<p><strong>Quantum mechanics</strong> is the framework for describing physics at atomic and subatomic scales, where classical mechanics fails. The central object is the wavefunction $\\psi(\\mathbf r, t)$, a complex-valued function whose squared magnitude $|\\psi|^2$ gives the probability density of finding the particle at $\\mathbf r$ at time $t$. This probabilistic interpretation, due to Born (1926), is the cleanest break from classical determinism.</p>
<p>Quantum states evolve via the <strong>time-dependent Schrödinger equation</strong>: $i\\hbar \\partial\\psi/\\partial t = \\hat H \\psi$, where $\\hat H$ is the Hamiltonian (energy) operator. For time-independent problems, separate variables to get the time-independent Schrödinger equation $\\hat H \\psi = E\\psi$ — an eigenvalue equation. Energy levels are eigenvalues; eigenfunctions are stationary states.</p>
<p>Observables are <strong>Hermitian operators</strong>: position $\\hat x$, momentum $\\hat p = -i\\hbar \\partial/\\partial x$, energy $\\hat H$, angular momentum $\\hat L_z = -i\\hbar \\partial/\\partial \\phi$. Measurement of an observable yields one of its eigenvalues; the state collapses to the corresponding eigenstate. The expected value is $\\langle\\hat A\\rangle = \\int \\psi^* \\hat A \\psi$. Operators that don't commute — like $[\\hat x, \\hat p] = i\\hbar$ — lead to uncertainty relations: $\\Delta x \\Delta p \\geq \\hbar/2$.</p>
<p>The conceptual core: particles exhibit wave-particle duality, energy is quantized in bound systems, measurement is probabilistic and disturbs the state, and the universe has irreducible randomness at small scales. Decoherence, entanglement, and the measurement problem remain active areas of foundational research. Despite the philosophical strangeness, the predictions of QM have been confirmed to extraordinary precision — better than one part in a billion for the electron's magnetic moment.</p>`,

    "transfer-functions": `<p>A <strong>transfer function</strong> $G(s) = Y(s)/U(s)$ is the s-domain ratio of output to input for a linear time-invariant system with zero initial conditions. It packages all the dynamics of the system into a single rational function of the complex frequency $s$. Once you have $G(s)$, you can predict step responses, frequency responses, stability, and design controllers — all by manipulating one ratio of polynomials.</p>
<p>The <strong>poles</strong> are the roots of the denominator. They tell you the system's natural modes — the exponentials and sinusoids the system "wants" to produce. A pole at $s = -2$ contributes a mode $e^{-2t}$; a pole at $-1 \\pm 3i$ contributes $e^{-t}\\cos(3t)$ and $e^{-t}\\sin(3t)$. Stability requires all poles in the left half-plane: any pole with positive real part means an exponentially growing mode, hence instability.</p>
<p>The <strong>zeros</strong> are the roots of the numerator. They tell you which input shapes the system "kills." A zero at $-2$ means an input $e^{-2t}$ produces zero steady-state output. Zeros can also cause undershoot (response moves the wrong way initially) when they lie in the right half-plane — a phenomenon called non-minimum-phase behavior, characteristic of bicycle steering, aircraft pitch dynamics, and certain chemical reactors.</p>
<p>The <strong>DC gain</strong> $G(0)$ — value at $s = 0$ — is the steady-state output for a unit step input on a stable system. Used to set scaling and to verify that the controller will deliver the right magnitude at low frequencies. Above the corner frequencies, the slope of magnitude on a Bode plot (in dB per decade) equals $-20(p - z)$ where $p$ is the number of poles and $z$ the number of zeros below that frequency. Reading $G(s)$ at a glance — number of poles, where they are, how many zeros, DC gain, dominant pole — is the most important skill in classical control.</p>`,

    "routh-hurwitz": `<p>The <strong>Routh-Hurwitz criterion</strong> (Routh 1877, Hurwitz 1895) is a purely algebraic test for whether a polynomial has all its roots in the left half-plane — equivalently, whether the corresponding system is stable. It does this without factoring the polynomial, which is computationally hard for degree ≥ 5.</p>
<p>The procedure: arrange the coefficients of $a_n s^n + a_{n-1}s^{n-1} + \\ldots + a_0$ into a table. The top two rows contain alternate coefficients (even-degree in row $s^n$, odd-degree in row $s^{n-1}$). Subsequent rows are computed by a cross-multiplication rule: each entry is a $2 \\times 2$ determinant formed from the two rows above, divided by the leading entry of the row above. Continue until the bottom row ($s^0$). Count <strong>sign changes</strong> in the first column. By Routh's theorem, this count equals the number of right-half-plane roots.</p>
<p>The most common application is finding the range of a tunable gain $K$ for which a closed-loop system is stable. Substitute the closed-loop characteristic polynomial (containing $K$ as a parameter) into the table, set each first-column entry positive, and solve the resulting inequalities. This gives the exact stable range — invaluable for sizing PID gains or compensator parameters.</p>
<p>Two special cases require extra care. A <strong>zero in the first column</strong> (with other entries nonzero in that row) is handled by the $\\epsilon$-method: replace it with a small positive $\\epsilon$, complete the table, then take $\\epsilon \\to 0$ and count sign changes. A <strong>row of zeros</strong> indicates symmetric roots (typically on the $j\\omega$-axis): build the auxiliary polynomial from the row above, differentiate it, and use the result to fill in the zero row. The roots of the auxiliary polynomial are precisely the imaginary-axis poles — the frequencies of sustained oscillation at the stability boundary.</p>`
  });
})();
