// Key formulas and core results for every topic.
// Each entry: { f: "<formula in LaTeX>", n: "<short note>" }
window.FORMULAS = {

  // ===== MATH =====

  "arithmetic-foundations": [
    { f: "PEMDAS", n: "Order of operations: Parentheses → Exponents → ×/÷ → +/− (left to right). Without it, $3 + 4 \\times 2$ would be ambiguous; with it, everyone gets $11$ not $14$." },
    { f: "$-(-a) = a$", n: "Subtracting a negative is the same as adding. Two negatives cancel because reversing direction twice puts you back the way you started." },
    { f: "$|x| = \\begin{cases} x, & x \\geq 0 \\\\ -x, & x < 0 \\end{cases}$", n: "Absolute value = distance from zero (always non-negative). $|x| = a$ has two solutions ($\\pm a$) for $a > 0$." },
    { f: "$\\gcd(a, b) \\cdot \\operatorname{lcm}(a, b) = ab$", n: "Greatest common divisor × least common multiple equals the product. Handy: find one, get the other for free." },
    { f: "$n = p_1^{a_1} \\cdots p_k^{a_k}$", n: "Fundamental theorem of arithmetic: every positive integer has a unique prime factorization (up to order). Primes are the atoms of the integers." }
  ],

  "fractions-percentages": [
    { f: "$\\dfrac{a}{b} + \\dfrac{c}{d} = \\dfrac{ad + bc}{bd}$", n: "Add unlike fractions by getting a common denominator first. The cross-product form $ad + bc$ over $bd$ always works; simplify afterward if possible." },
    { f: "$\\dfrac{a}{b} \\cdot \\dfrac{c}{d} = \\dfrac{ac}{bd}$", n: "Multiply tops together and bottoms together — no common denominator needed. Cancel common factors before multiplying to keep numbers small." },
    { f: "$\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\cdot \\dfrac{d}{c}$", n: "Dividing by a fraction = multiplying by its reciprocal. Why? Because $\\div c/d$ undoes $\\times c/d$." },
    { f: "$p\\% = \\dfrac{p}{100}$", n: "Percent means 'parts per hundred'. Convert to a decimal by moving the decimal two places left: $25\\% = 0.25$." },
    { f: "% change $= \\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$", n: "Percent change always divides by the STARTING value, not the ending one. A jump from 40 to 50 is +25%, not +20%." }
  ],

  "exponents-roots": [
    { f: "$x^a \\cdot x^b = x^{a+b}$", n: "Product rule. Same base × same base: add the exponents (you're multiplying $x$ by itself $a+b$ total times)." },
    { f: "$\\dfrac{x^a}{x^b} = x^{a-b}$", n: "Quotient rule. Same base ÷ same base: subtract exponents. The $b$ copies of $x$ in the denominator cancel against $b$ copies on top." },
    { f: "$(x^a)^b = x^{ab}$", n: "Power of a power: multiply the exponents. $(x^2)^3 = x^2 \\cdot x^2 \\cdot x^2 = x^6$, not $x^5$." },
    { f: "$x^{-n} = \\dfrac{1}{x^n}$", n: "Negative exponents flip into the denominator. Comes from the quotient rule: $x^0/x^n = x^{-n}$, and $x^0 = 1$." },
    { f: "$x^{1/n} = \\sqrt[n]{x}$", n: "Fractional exponents are roots. $(x^{1/n})^n = x^1 = x$, so $x^{1/n}$ is the number whose $n$-th power is $x$." },
    { f: "$\\sqrt{ab} = \\sqrt a \\cdot \\sqrt b$", n: "Roots distribute over products (for non-negative inputs). Use it to simplify: $\\sqrt{72} = \\sqrt{36}\\sqrt 2 = 6\\sqrt 2$." }
  ],

  "ratios-proportions": [
    { f: "$\\dfrac{a}{b} = \\dfrac{c}{d} \\iff ad = bc$", n: "Cross-multiplication. The shortcut for solving proportions — multiply each numerator by the other denominator, set equal." },
    { f: "$y \\propto x \\Rightarrow y = kx$", n: "Direct proportion: $y$ scales linearly with $x$ through a constant $k$. Double $x$, double $y$." },
    { f: "$y \\propto \\dfrac{1}{x} \\Rightarrow y = \\dfrac{k}{x}$", n: "Inverse proportion: more $x$, less $y$. Double $x$, halve $y$. Their product $xy = k$ stays constant." },
    { f: "speed $= \\dfrac{\\text{distance}}{\\text{time}}$", n: "Rate = quantity per unit of something. Rearrange to find any one from the other two (the 'rate triangle')." },
    { f: "$C_{\\text{mix}} = \\dfrac{C_1 V_1 + C_2 V_2}{V_1 + V_2}$", n: "Concentration after mixing — a volume-weighted average. The result sits between $C_1$ and $C_2$, closer to whichever you used more of." }
  ],

  "linear-equations": [
    { f: "$ax + b = c \\Rightarrow x = \\dfrac{c-b}{a}$", n: "Solving a single linear equation: subtract the constant, then divide by the coefficient. Undo operations in reverse order to isolate $x$." },
    { f: "$y = mx + b$", n: "Slope-intercept form. $m$ is the slope (rise over run); $b$ is the $y$-intercept (where the line crosses the $y$-axis)." },
    { f: "$y - y_1 = m(x - x_1)$", n: "Point-slope form. Lets you write a line if you know one point $(x_1, y_1)$ and the slope $m$. Algebraically rearranges to slope-intercept." },
    { f: "Do same operation to both sides", n: "Balance principle. An equation is a scale — whatever you do to one side, do to the other, and equality is preserved." }
  ],

  "inequalities": [
    { f: "$a < b, c > 0 \\Rightarrow ac < bc$", n: "Multiplying both sides by a positive number preserves the inequality direction. Same with adding/subtracting any number." },
    { f: "$a < b, c < 0 \\Rightarrow ac > bc$", n: "Multiplying or dividing both sides by a NEGATIVE flips the inequality. Easy to forget — burns students all the time." },
    { f: "$|x| < a \\iff -a < x < a$", n: "Distance from zero is less than $a$ means $x$ is in the interval $(-a, a)$. The 'sandwich' formulation." },
    { f: "$|x| > a \\iff x < -a \\text{ or } x > a$", n: "Distance from zero is greater than $a$ means $x$ is outside the interval. Two disjoint pieces — solution set is a union, not a single interval." },
    { f: "AM ≥ GM", n: "Arithmetic mean ≥ geometric mean for non-negative reals: $\\frac{a+b}{2} \\geq \\sqrt{ab}$, with equality iff $a = b$. Useful for bounding sums and products." }
  ],

  "plane-geometry": [
    { f: "$a^2 + b^2 = c^2$", n: "Pythagorean theorem. In a right triangle, hypotenuse squared = sum of leg squares. The backbone of all distance and length calculations." },
    { f: "$A_\\triangle = \\tfrac{1}{2} b h$", n: "Triangle area = half base times height. The half comes from triangles being half of a rectangle of the same base and height." },
    { f: "$A_\\text{rect} = \\ell w$", n: "Rectangle area = length × width. Counting unit squares: $\\ell$ columns of $w$ rows each." },
    { f: "$C = 2\\pi r, \\; A = \\pi r^2$", n: "Circle: circumference (perimeter) is $2\\pi r$, area is $\\pi r^2$. The constant $\\pi \\approx 3.14159$ is the ratio of any circle's circumference to its diameter." },
    { f: "Triangle angle sum $= 180°$", n: "Three angles of any triangle add to a straight line ($180°$). True regardless of triangle shape — easy to verify by tearing off corners and lining them up." },
    { f: "Regular $n$-gon interior angle $= \\dfrac{(n-2)\\cdot 180°}{n}$", n: "Sum of interior angles in any $n$-gon is $(n-2)\\cdot 180°$. Each interior angle in a regular one is this sum divided by $n$." }
  ],

  "set-logic": [
    { f: "$|A \\cup B| = |A| + |B| - |A \\cap B|$", n: "Inclusion-exclusion. Add the sizes, then subtract the overlap once (it was double-counted). Generalizes to more sets with alternating signs." },
    { f: "$|\\mathcal{P}(A)| = 2^{|A|}$", n: "Power set size. Each element is either in or out — two choices per element — so the number of subsets doubles for each element added." },
    { f: "$\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$", n: "De Morgan's law. The negation of an AND becomes an OR of negations (and vice versa). Essential in logic, set theory, and circuits." },
    { f: "$p \\Rightarrow q \\equiv \\neg q \\Rightarrow \\neg p$", n: "Contrapositive. 'If $p$ then $q$' is logically the same as 'if not $q$ then not $p$'. Often the contrapositive is easier to prove." },
    { f: "$\\neg(\\forall x\\, P(x)) \\equiv \\exists x\\, \\neg P(x)$", n: "Quantifier negation. 'Not all $x$ have property $P$' means 'some $x$ doesn't have $P$'. Flips $\\forall \\leftrightarrow \\exists$ and negates the inner statement." }
  ],

  "number-theory": [
    { f: "$a = bq + r, \\; 0 \\leq r < b$", n: "Division algorithm. Every integer pair has a unique quotient $q$ and remainder $r$. Foundation of modular arithmetic and the Euclidean algorithm." },
    { f: "$\\gcd(a,b) = \\gcd(b, a \\bmod b)$", n: "Euclidean algorithm step. Replace the bigger number with the remainder; repeat until one is zero. The other is the GCD. Surprisingly fast." },
    { f: "$a^{\\varphi(n)} \\equiv 1 \\pmod n$", n: "Euler's theorem (when $\\gcd(a, n) = 1$). $\\varphi(n)$ counts integers coprime to $n$. Underpins RSA cryptography." },
    { f: "$a^{p-1} \\equiv 1 \\pmod p$", n: "Fermat's little theorem (special case of Euler with $p$ prime, so $\\varphi(p) = p-1$). Lets you compute huge powers mod $p$ instantly." },
    { f: "$ax + by = \\gcd(a,b)$", n: "Bezout's identity. The GCD can be written as an integer combination of $a$ and $b$. The Extended Euclidean Algorithm finds $x, y$ explicitly." },
    { f: "CRT", n: "Chinese Remainder Theorem. A system of congruences with pairwise-coprime moduli has a unique solution mod the product. Lets you split big modular problems into smaller pieces." }
  ],

  "combinatorics": [
    { f: "$n! = n(n-1)\\cdots 1$", n: "Factorial. Number of ways to arrange $n$ distinct objects in a row. Grows extremely fast — $10! = 3{,}628{,}800$." },
    { f: "$P(n,k) = \\dfrac{n!}{(n-k)!}$", n: "Permutations of $k$ from $n$, ORDER MATTERS. $n$ choices for first slot, $n-1$ for second, ..., $n-k+1$ for last. " },
    { f: "$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$", n: "Combinations, ORDER DOESN'T MATTER. Take $P(n,k)$ and divide by $k!$ to remove the orderings of the same group." },
    { f: "$(x+y)^n = \\sum_k \\binom{n}{k} x^{n-k} y^k$", n: "Binomial theorem. Expanding the product picks $k$ copies of $y$ and $n-k$ copies of $x$; the number of ways to do this is $\\binom{n}{k}$." },
    { f: "$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$", n: "Pascal's identity. Either you include item $n$ in your group of $k$ (so choose $k-1$ from the rest) or you don't. Builds Pascal's triangle." },
    { f: "Stars-and-bars: $\\binom{n+k-1}{k-1}$", n: "Distributing $n$ identical items into $k$ distinct boxes. Lay $n$ stars in a row and use $k-1$ bars to divide them into groups." }
  ],

  "systems-of-equations": [
    { f: "$\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix}\\begin{pmatrix}x \\\\ y\\end{pmatrix} = \\begin{pmatrix}p \\\\ q\\end{pmatrix}$", n: "Matrix form of a $2 \\times 2$ system. Compact and generalizes to any size. Solving uses determinants, inverses, or row reduction." },
    { f: "$x = \\dfrac{dp - bq}{ad - bc}$", n: "Cramer's rule for $x$. Replace the $x$-column with the right-hand side, take the determinant, divide by the original determinant. Works in any dimension." },
    { f: "$\\det \\neq 0$", n: "If the coefficient matrix has nonzero determinant, the system has exactly one solution. The lines/planes intersect at a unique point." },
    { f: "$\\det = 0, \\text{consistent}$", n: "Zero determinant but compatible right-hand side: infinitely many solutions. The equations are dependent — same line or overlapping planes." },
    { f: "$\\det = 0, \\text{inconsistent}$", n: "Zero determinant with incompatible right-hand side: no solution. Parallel lines or contradictory equations." }
  ],

  "quadratic-equations": [
    { f: "$x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$", n: "Quadratic formula. Solves any $ax^2 + bx + c = 0$. Derived by completing the square once and for all." },
    { f: "$\\Delta = b^2 - 4ac$", n: "Discriminant. $\\Delta > 0$: two distinct real roots. $\\Delta = 0$: one repeated root. $\\Delta < 0$: no real roots (the parabola never touches the x-axis). The roots in that case use complex numbers, which you'll meet later." },
    { f: "$x_1 + x_2 = -\\dfrac{b}{a}, \\; x_1 x_2 = \\dfrac{c}{a}$", n: "Vieta's formulas. Sum and product of roots are read directly off the coefficients — handy for checking factorizations." },
    { f: "Vertex $\\left(-\\dfrac{b}{2a}, \\; c - \\dfrac{b^2}{4a}\\right)$", n: "Maximum or minimum of the parabola, located at $x = -b/(2a)$. Sign of $a$ tells you which: $a > 0$ opens up (min), $a < 0$ opens down (max)." },
    { f: "Complete the square: $x^2 + bx = (x + \\tfrac{b}{2})^2 - \\tfrac{b^2}{4}$", n: "Algebraic identity for rewriting any quadratic as a perfect square plus/minus a constant. Source of the quadratic formula and a key tool throughout math." }
  ],

  "polynomials-rational": [
    { f: "$p(x) = q(x) d(x) + r(x), \\; \\deg r < \\deg d$", n: "Polynomial division algorithm — like long division of integers. The remainder has strictly lower degree than the divisor." },
    { f: "$p(a) = 0 \\iff (x - a) \\mid p(x)$", n: "Factor theorem. $a$ is a root of the polynomial if and only if $(x-a)$ divides it cleanly. Converts root-finding to factoring and vice versa." },
    { f: "Remainder of $p(x) / (x-a) = p(a)$", n: "Remainder theorem. To get the remainder when dividing by $(x-a)$, just plug $a$ into the polynomial — no division needed." },
    { f: "Vertical asymptote: $q(x_0) = 0, p(x_0) \\neq 0$", n: "For a rational function $p/q$: where the denominator vanishes (but the numerator doesn't), the function blows up to $\\pm\\infty$." },
    { f: "Horizontal asymptote: ratio of leading coefficients (same degree)", n: "When the numerator's and denominator's degrees match, the ratio of leading coefficients gives the horizontal asymptote. Lower-degree numerator: asymptote is $y = 0$. Higher: no horizontal asymptote." }
  ],

  "functions-graphs": [
    { f: "Vertical line test", n: "A curve is the graph of a function if and only if every vertical line crosses it at most once. Each input has exactly one output." },
    { f: "Domain: allowed inputs; Range: outputs", n: "Domain = set of $x$-values where the function is defined. Range = set of $y$-values it actually produces. Always check both when describing a function." },
    { f: "$(f \\circ g)(x) = f(g(x))$", n: "Composition: feed $x$ into $g$ first, then feed the result into $f$. Read right-to-left like a chain of machines." },
    { f: "$f^{-1}(f(x)) = x$", n: "Inverse function undoes the original. Exists only when $f$ is one-to-one (passes the horizontal line test). To find it: swap $x$ and $y$, then solve." },
    { f: "$y = a f(b(x - h)) + k$", n: "General transformation. Stretches vertically by $a$, horizontally by $1/b$; shifts right $h$ and up $k$. Negative $a$ or $b$ flips the graph." },
    { f: "Even: $f(-x) = f(x)$; Odd: $f(-x) = -f(x)$", n: "Symmetries. Even functions mirror across the $y$-axis (like $x^2$). Odd functions have $180°$ rotational symmetry about the origin (like $x^3$)." }
  ],

  "logarithms": [
    { f: "$\\log_b(xy) = \\log_b x + \\log_b y$", n: "Product rule. Logs turn multiplication into addition — historically why they were invented (slide rules, log tables)." },
    { f: "$\\log_b(x/y) = \\log_b x - \\log_b y$", n: "Quotient rule. Logs turn division into subtraction. Mirrors the exponent rule $x^a/x^b = x^{a-b}$." },
    { f: "$\\log_b(x^p) = p \\log_b x$", n: "Power rule. Exponents come out front as multipliers. Lets you 'lower' an unknown exponent when solving equations." },
    { f: "$\\log_b a = \\dfrac{\\ln a}{\\ln b}$", n: "Change of base. Most calculators only have $\\ln$ (natural log) and $\\log$ (base 10). Convert by dividing." },
    { f: "$b^{\\log_b x} = x$", n: "Log and exponential are inverse operations — they undo each other. Same as $\\log_b(b^x) = x$." },
    { f: "$\\log_b 1 = 0, \\; \\log_b b = 1$", n: "Two anchor values. $b^0 = 1$ for any base, and $b^1 = b$. Useful sanity checks." }
  ],

  "sequences-series": [
    { f: "Arithmetic: $a_n = a_1 + (n-1)d$", n: "$n$th term of an arithmetic sequence. Start at $a_1$, take $n-1$ steps of size $d$. Each term differs from the next by the same constant $d$." },
    { f: "$S_n = \\dfrac{n(a_1 + a_n)}{2}$", n: "Sum of first $n$ arithmetic terms: $n$ times the average of first and last (Gauss's trick — pair endpoints, each pair has the same sum)." },
    { f: "Geometric: $a_n = a_1 r^{n-1}$", n: "$n$th term of a geometric sequence. Multiply by $r$ (the common ratio) $n-1$ times. Grows or shrinks exponentially." },
    { f: "$S_n = a_1 \\dfrac{1 - r^n}{1 - r}$", n: "Sum of first $n$ geometric terms (when $r \\neq 1$). Derived by subtracting $r \\cdot S_n$ from $S_n$ to telescope away most terms." },
    { f: "$S_\\infty = \\dfrac{a_1}{1 - r}, \\; |r| < 1$", n: "Infinite geometric sum converges when $|r| < 1$. Each term shrinks fast enough that the total is finite." },
    { f: "$\\sum_{k=1}^n k = \\tfrac{n(n+1)}{2}$, $\\sum k^2 = \\tfrac{n(n+1)(2n+1)}{6}$", n: "Closed-form power sums. The first is famously what Gauss derived as a child by pairing 1+100, 2+99, etc." }
  ],

  "trigonometry": [
    { f: "$\\sin\\theta = \\dfrac{\\text{opp}}{\\text{hyp}}, \\; \\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}}, \\; \\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}}$", n: "Right-triangle ratios. Mnemonic SOH-CAH-TOA. Defined to depend only on the angle, not the triangle's size." },
    { f: "$\\sin^2\\theta + \\cos^2\\theta = 1$", n: "Pythagorean identity — the most-used trig identity. It's just Pythagoras applied to the unit-circle point $(\\cos\\theta, \\sin\\theta)$." },
    { f: "$\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$", n: "Sine of a sum/difference. Useful for finding sines of weird angles like $75° = 45° + 30°$, and for rewriting products as sums." },
    { f: "$\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B$", n: "Cosine of a sum/difference. Note the sign flip — minus in the cosine version when sum, plus when difference." },
    { f: "$\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}$", n: "Law of sines. Sides and opposite angles are in proportion. Useful when you know two angles and a side, or two sides and a non-included angle." },
    { f: "$c^2 = a^2 + b^2 - 2ab\\cos C$", n: "Law of cosines. Generalizes Pythagoras — the $-2ab\\cos C$ term vanishes when $C = 90°$. Use it when you have two sides and the included angle." }
  ],

  "probability": [
    { f: "$0 \\leq P(A) \\leq 1$", n: "Probabilities are numbers between 0 (impossible) and 1 (certain). The whole sample space has probability 1." },
    { f: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$", n: "Probability of either event. Add the individual probabilities then subtract the overlap (counted twice). Mirrors counting inclusion-exclusion." },
    { f: "$P(A \\cap B) = P(A) P(B)$", n: "If $A$ and $B$ are INDEPENDENT, joint probability is the product. 'Heads twice in a row' = $\\tfrac{1}{2} \\cdot \\tfrac{1}{2}$." },
    { f: "$P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$", n: "Conditional probability — probability of $A$ given that $B$ already occurred. Restrict the sample space to outcomes where $B$ is true." },
    { f: "$P(A \\mid B) = \\dfrac{P(B \\mid A) P(A)}{P(B)}$", n: "Bayes' theorem. Lets you flip a conditional probability — given how data looks under a hypothesis, infer how likely the hypothesis is given the data." },
    { f: "$E[X] = \\sum x_i P(X = x_i)$", n: "Expectation = probability-weighted average of values. The long-run average if you repeat the experiment many times." }
  ],

  "statistics": [
    { f: "$\\bar x = \\dfrac{1}{n}\\sum x_i$", n: "Sample mean — the arithmetic average of your data. Most common measure of center, but pulled by outliers." },
    { f: "$s^2 = \\dfrac{1}{n-1}\\sum (x_i - \\bar x)^2$", n: "Sample variance. Average of squared deviations from the mean. Divide by $n-1$ (Bessel's correction) so it's an unbiased estimator of population variance." },
    { f: "$z = \\dfrac{x - \\mu}{\\sigma}$", n: "Z-score — number of standard deviations $x$ is from the mean. Lets you compare points from different distributions on a common scale." },
    { f: "CI: $\\bar x \\pm z^* \\dfrac{\\sigma}{\\sqrt n}$", n: "Confidence interval for the mean. Margin of error shrinks as $1/\\sqrt n$ — need 4× the sample to halve it." },
    { f: "$z^* = 1.96$ for $95\\%$, $2.576$ for $99\\%$", n: "Critical $z$-values for common confidence levels. The 95% / 99% choice trades width for certainty." },
    { f: "$r = \\dfrac{\\sum (x_i - \\bar x)(y_i - \\bar y)}{\\sqrt{\\sum (x_i - \\bar x)^2 \\sum (y_i - \\bar y)^2}}$", n: "Pearson correlation. Ranges from $-1$ (perfect anti-correlation) to $+1$ (perfect correlation). Measures LINEAR association only." }
  ],

  "complex-numbers": [
    { f: "$i^2 = -1$", n: "Defining property of the imaginary unit. Lets every polynomial have roots; once accepted, all of complex analysis flows out." },
    { f: "$|a + bi| = \\sqrt{a^2 + b^2}$", n: "Modulus = distance from origin in the complex plane (Pythagoras applied to the real and imaginary parts)." },
    { f: "$\\arg(a + bi) = \\arctan(b/a)$", n: "Argument = angle from positive real axis. Use $\\text{atan2}(b, a)$ in practice — plain $\\arctan$ doesn't distinguish quadrants." },
    { f: "$z = r e^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)$", n: "Polar / Euler form. Multiplication becomes 'multiply magnitudes, add angles' — much cleaner than rectangular form." },
    { f: "$e^{i\\pi} + 1 = 0$", n: "Euler's identity — connects five fundamental constants ($e$, $i$, $\\pi$, $1$, $0$) in one equation. Often called the most beautiful in math." },
    { f: "$(re^{i\\theta})^n = r^n e^{in\\theta}$", n: "De Moivre's theorem. Raising to a power: $n$-th power the magnitude, multiply the angle by $n$. Makes $n$th roots and powers trivial." },
    { f: "$\\overline{a + bi} = a - bi$", n: "Complex conjugate — flip the sign of the imaginary part. Then $z \\cdot \\bar z = |z|^2$, real and non-negative." }
  ],

  "vector-algebra": [
    { f: "$|\\vec v| = \\sqrt{v_x^2 + v_y^2 + v_z^2}$", n: "Vector magnitude (length) — Pythagoras extended to any dimension. Square components, sum, square root." },
    { f: "$\\vec a \\cdot \\vec b = a_x b_x + a_y b_y + a_z b_z$", n: "Dot product (component formula). Sum of products of matching components. Returns a scalar (not a vector)." },
    { f: "$\\vec a \\cdot \\vec b = |\\vec a||\\vec b|\\cos\\theta$", n: "Geometric meaning of dot product. Measures how aligned two vectors are: 0 means perpendicular; max positive means parallel; negative means opposite." },
    { f: "$\\vec a \\times \\vec b = \\det \\begin{pmatrix} \\hat i & \\hat j & \\hat k \\\\ a_x & a_y & a_z \\\\ b_x & b_y & b_z \\end{pmatrix}$", n: "Cross product as a formal determinant. Output is a vector perpendicular to both inputs. Direction follows right-hand rule." },
    { f: "$|\\vec a \\times \\vec b| = |\\vec a||\\vec b|\\sin\\theta$", n: "Cross-product magnitude equals the parallelogram area spanned by the two vectors. Zero when vectors are parallel." },
    { f: "$\\text{proj}_{\\vec b} \\vec a = \\dfrac{\\vec a \\cdot \\vec b}{|\\vec b|^2}\\vec b$", n: "Projection of $\\vec a$ onto $\\vec b$. The 'shadow' of $\\vec a$ along the direction of $\\vec b$. Used in Gram-Schmidt and least-squares." }
  ],

  "linear-algebra": [
    { f: "$(AB)_{ij} = \\sum_k A_{ik} B_{kj}$", n: "Matrix multiplication. Each entry is the dot product of row $i$ of $A$ with column $j$ of $B$. Non-commutative: usually $AB \\neq BA$." },
    { f: "$\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$", n: "$2 \\times 2$ determinant. Geometrically: signed area of the parallelogram spanned by the columns." },
    { f: "$A^{-1} = \\dfrac{1}{\\det A}\\,\\text{adj}(A)$", n: "Matrix inverse via adjugate. Exists iff $\\det A \\neq 0$. In practice, use row reduction or LU decomposition — faster." },
    { f: "$A\\vec v = \\lambda \\vec v$", n: "Eigenvalue equation. The matrix $A$ acts on $\\vec v$ just by stretching (factor $\\lambda$), not rotating. Picks out invariant directions." },
    { f: "$\\det(A - \\lambda I) = 0$", n: "Characteristic equation. Its roots are the eigenvalues — values of $\\lambda$ for which $A - \\lambda I$ is singular." },
    { f: "$\\text{rank}(A) + \\text{nullity}(A) = n$", n: "Rank-nullity theorem. Number of independent columns + dim of nullspace = number of columns. Fundamental balance equation of linear algebra." },
    { f: "$\\text{tr}(A) = \\sum \\lambda_i, \\; \\det(A) = \\prod \\lambda_i$", n: "Trace = sum of eigenvalues; determinant = product. Useful sanity checks without finding eigenvectors." }
  ],

  "limits": [
    { f: "$\\lim_{x \\to a} f(x) = L$", n: "Formal $\\varepsilon$-$\\delta$ definition: for every tolerance $\\varepsilon$, there's a window width $\\delta$ around $a$ keeping outputs within $\\varepsilon$ of $L$." },
    { f: "$\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = 1$", n: "Classic limit. Comes from $\\sin x \\approx x$ near zero (first Taylor term). Implies derivative of $\\sin$ at $0$ is $1$." },
    { f: "$\\lim_{x \\to 0} \\dfrac{1 - \\cos x}{x^2} = \\tfrac{1}{2}$", n: "From Taylor: $\\cos x \\approx 1 - x^2/2$, so $1 - \\cos x \\approx x^2/2$. Used in derivations of trig derivatives." },
    { f: "$\\lim_{x \\to \\infty}\\left(1 + \\tfrac{1}{x}\\right)^x = e$", n: "Definition of $e$ as a limit. Models continuous compounding: interest applied infinitely often." },
    { f: "L'Hôpital: $\\lim \\dfrac{f}{g} = \\lim \\dfrac{f'}{g'}$", n: "When you hit $\\tfrac{0}{0}$ or $\\tfrac{\\infty}{\\infty}$, differentiate top and bottom separately, then take the limit. Repeat if still indeterminate." },
    { f: "Squeeze: $g \\leq f \\leq h, \\lim g = \\lim h$", n: "If two functions converge to the same limit, anything sandwiched between them does too. Used to prove tricky limits like $x \\sin(1/x) \\to 0$." }
  ],

  "derivatives": [
    { f: "$f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}$", n: "Definition of derivative — instantaneous rate of change. The slope of $f$ at $x$, found as a limit of average slopes." },
    { f: "$(x^n)' = n x^{n-1}$", n: "Power rule. Multiply by exponent, lower exponent by 1. Works for any real $n$, not just integers." },
    { f: "$(fg)' = f'g + fg'$", n: "Product rule. Differentiate each factor in turn, keeping the others fixed; then add. Comes from expanding $(f+\\Delta f)(g+\\Delta g)$." },
    { f: "$\\left(\\dfrac{f}{g}\\right)' = \\dfrac{f'g - fg'}{g^2}$", n: "Quotient rule. Mnemonic: 'low d-high minus high d-low, over low squared.' Sign matters — order of subtraction is fixed." },
    { f: "$(f \\circ g)'(x) = f'(g(x)) g'(x)$", n: "Chain rule. Differentiate the outer function (keeping inside intact), then multiply by the derivative of the inside. The workhorse of derivative computation." },
    { f: "$(e^x)' = e^x, \\; (\\ln x)' = \\dfrac{1}{x}$", n: "$e^x$ is its own derivative — its defining property. $\\ln$ is its inverse, with derivative $1/x$." },
    { f: "$(\\sin x)' = \\cos x, \\; (\\cos x)' = -\\sin x$", n: "Trig derivatives. Sine and cosine cycle through each other (with a sign flip every other step) — period 4 in the derivative." }
  ],

  "integrals": [
    { f: "$\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C$", n: "Power rule for integrals (reverse of derivative power rule). Bump exponent up by 1, divide by the new exponent. Add the constant of integration." },
    { f: "$\\int \\dfrac{dx}{x} = \\ln|x| + C$", n: "The $n = -1$ exception — the power rule would divide by zero. Absolute value because $\\ln$ requires positive input." },
    { f: "$\\int e^x\\,dx = e^x + C$", n: "$e^x$ integrates to itself (plus $C$) — same reason it's its own derivative. The simplest 'nontrivial' antiderivative." },
    { f: "$\\int_a^b f'(x)\\,dx = f(b) - f(a)$", n: "Fundamental Theorem of Calculus (Part II). Definite integral = change in antiderivative across the interval. Links derivatives and integrals." },
    { f: "$\\int u\\,dv = uv - \\int v\\,du$", n: "Integration by parts — reversed product rule. Use when the integrand is a product where one factor simplifies on differentiation, the other on integration." },
    { f: "$\\int f(g(x)) g'(x)\\,dx = \\int f(u)\\,du$", n: "$u$-substitution — reversed chain rule. Spot a function and its derivative both inside the integral; let $u = $ the inner function." },
    { f: "$\\int_{-\\infty}^\\infty e^{-x^2}\\,dx = \\sqrt\\pi$", n: "Gaussian integral. Has no elementary antiderivative, but the definite integral over all reals is exact. Foundation of probability and statistics." }
  ],

  "multivariable-calculus": [
    { f: "$\\nabla f = \\left(\\partial f/\\partial x, \\partial f/\\partial y, \\partial f/\\partial z\\right)$", n: "Gradient — vector of all partial derivatives. Points in the direction of steepest increase; magnitude is the rate of climb." },
    { f: "Directional derivative: $D_{\\vec u} f = \\nabla f \\cdot \\hat u$", n: "Rate of change of $f$ in direction $\\hat u$ (a unit vector). Maximum is $|\\nabla f|$ in the direction of $\\nabla f$ itself." },
    { f: "Critical point: $\\nabla f = \\vec 0$", n: "Necessary condition for local max, local min, or saddle. The function is flat at the point in every direction." },
    { f: "Hessian: $H_{ij} = \\partial^2 f / \\partial x_i \\partial x_j$", n: "Matrix of second partial derivatives. At a critical point: positive-definite ⇒ local min, negative-definite ⇒ local max, indefinite ⇒ saddle." },
    { f: "$\\iint_R f\\,dA$", n: "Double integral — sums $f$ values over a 2D region $R$. Iterate as nested 1D integrals; Fubini lets you swap the order (for nice functions)." },
    { f: "Lagrange: $\\nabla f = \\lambda \\nabla g$", n: "Method of Lagrange multipliers. At a constrained extremum, gradient of objective is parallel to gradient of constraint." },
    { f: "Jacobian for change of variables: $|\\det J|$", n: "When you change variables in a multiple integral, multiply the integrand by the absolute determinant of the Jacobian matrix to account for volume distortion." }
  ],

  "vector-calculus": [
    { f: "$\\nabla \\cdot \\vec F = \\partial_x F_x + \\partial_y F_y + \\partial_z F_z$", n: "Divergence. Measures local 'spreading-out' of a vector field. Positive: source (fluid flows out). Negative: sink. Zero: incompressible." },
    { f: "$\\nabla \\times \\vec F$", n: "Curl — computed as a formal determinant. Measures local rotation of a vector field. Direction follows right-hand rule; magnitude is the spin rate." },
    { f: "$\\nabla \\times (\\nabla f) = \\vec 0$", n: "Curl of any gradient is zero. Means gradient fields are 'conservative' — line integrals depend only on endpoints, not path." },
    { f: "$\\nabla \\cdot (\\nabla \\times \\vec F) = 0$", n: "Divergence of any curl is zero. Together with the above, these are the cornerstones of vector calculus identities." },
    { f: "Green: $\\oint_C \\vec F \\cdot d\\vec r = \\iint_R (\\partial_x Q - \\partial_y P)\\,dA$", n: "Green's theorem (2D). Circulation around a boundary equals total 'curl' inside. Translates loop integrals into easier area integrals." },
    { f: "Stokes: $\\oint_C \\vec F \\cdot d\\vec r = \\iint_S (\\nabla \\times \\vec F) \\cdot d\\vec S$", n: "Stokes' theorem (3D). Same idea as Green but for surfaces in 3D — circulation around the boundary = curl flux through the surface." },
    { f: "Divergence: $\\iiint_V \\nabla \\cdot \\vec F\\,dV = \\oiint_S \\vec F \\cdot d\\vec S$", n: "Divergence (Gauss) theorem. Total source inside a volume = total flux out through its boundary. Foundation of Gauss's law in EM." }
  ],

  "ode": [
    { f: "$\\dfrac{dy}{dx} = ky \\Rightarrow y = Ce^{kx}$", n: "Exponential growth ($k > 0$) or decay ($k < 0$). The unique solution where the rate of change is proportional to the current value." },
    { f: "$y' + p(x) y = q(x)$", n: "Linear first-order ODE. Multiply by the integrating factor $e^{\\int p\\,dx}$ to make the left side an exact derivative, then integrate." },
    { f: "$a y'' + b y' + c y = 0$", n: "Constant-coefficient linear ODE. Guess $y = e^{rx}$ — plug in and you get a polynomial equation for $r$." },
    { f: "Characteristic: $ar^2 + br + c = 0$", n: "Characteristic polynomial. Its roots give the exponential building blocks of the solution. Repeated roots add a $t$-factor; complex roots give oscillations." },
    { f: "$y'' + \\omega^2 y = 0 \\Rightarrow y = A\\cos\\omega t + B\\sin\\omega t$", n: "Harmonic oscillator. The most important equation in physics — every system near equilibrium looks like this to first order." },
    { f: "Wronskian: $W = y_1 y_2' - y_1' y_2$", n: "Tests whether two solutions are linearly independent. Nonzero Wronskian ⇒ independent ⇒ they span the solution space of a second-order linear ODE." }
  ],

  "pde": [
    { f: "Heat: $u_t = \\alpha u_{xx}$", n: "Parabolic — diffusion equation. Smooths out initial conditions over time; sharp features blur. Models heat conduction, particle diffusion, options pricing." },
    { f: "Wave: $u_{tt} = c^2 u_{xx}$", n: "Hyperbolic. Disturbances propagate at finite speed $c$ without smoothing. Models sound, light, vibrations on a string." },
    { f: "Laplace: $\\nabla^2 u = 0$", n: "Elliptic — equilibrium / steady-state equation. Solutions have no local extrema in the interior (mean value property). Describes electric potentials, equilibrium temperatures." },
    { f: "D'Alembert: $u = \\tfrac{1}{2}[f(x-ct) + f(x+ct)]$", n: "Exact 1D wave solution: initial shape splits into two halves, one moving left, one moving right (when initial velocity is zero)." },
    { f: "Heat fundamental: $G = \\dfrac{1}{\\sqrt{4\\pi\\alpha t}} e^{-x^2/(4\\alpha t)}$", n: "Green's function for the heat equation. Convolve with any initial condition to get the solution. The spreading width grows as $\\sqrt t$." },
    { f: "Separation: $u(x,t) = X(x)T(t)$", n: "Separation of variables. Try a product solution; the PDE splits into ODEs for $X$ and $T$. Works for linear PDEs in nice geometries." }
  ],

  "real-analysis": [
    { f: "$\\forall \\varepsilon > 0 \\, \\exists N : n > N \\Rightarrow |a_n - L| < \\varepsilon$", n: "Formal definition of sequence convergence. For any tolerance $\\varepsilon$, eventually all terms are within $\\varepsilon$ of $L$." },
    { f: "Cauchy: $\\forall \\varepsilon \\, \\exists N : m, n > N \\Rightarrow |a_m - a_n| < \\varepsilon$", n: "Cauchy criterion — terms get arbitrarily close to each other, not just to some limit. In complete spaces (like $\\mathbb{R}$), Cauchy implies convergent." },
    { f: "MVT: $\\exists c \\in (a,b) : f'(c) = \\dfrac{f(b) - f(a)}{b - a}$", n: "Mean Value Theorem. Somewhere in the interval, the instantaneous slope equals the average slope. The basis for many calculus proofs." },
    { f: "Bolzano-Weierstrass", n: "Every bounded sequence in $\\mathbb{R}^n$ has a convergent subsequence. The key tool for proving existence of limits when you only have bounds." },
    { f: "Heine-Borel", n: "In $\\mathbb{R}^n$: a set is compact $\\iff$ it is closed and bounded. Compactness is what lets you upgrade local properties to global ones." },
    { f: "Riemann sum: $\\int_a^b f = \\lim \\sum f(\\xi_i)\\Delta x_i$", n: "Definition of the Riemann integral — limit of sums over finer partitions. The 'area under the curve' formalized rigorously." }
  ],

  "complex-analysis": [
    { f: "Cauchy-Riemann: $u_x = v_y, \\; u_y = -v_x$", n: "Necessary and (with continuity) sufficient condition for a function $f = u + iv$ to be holomorphic. Far stricter than real differentiability." },
    { f: "$\\oint_\\gamma f(z)\\,dz = 0$", n: "Cauchy's theorem. Integral of a holomorphic function around a closed loop is zero (in a simply connected region). Holomorphic functions are 'conservative' in the complex plane." },
    { f: "$f(z_0) = \\dfrac{1}{2\\pi i} \\oint \\dfrac{f(z)}{z - z_0}\\,dz$", n: "Cauchy integral formula. The value of a holomorphic function at a point is determined by its values on any surrounding loop. Astonishingly rigid." },
    { f: "$\\oint f\\,dz = 2\\pi i \\sum \\text{Res}$", n: "Residue theorem. Closed-loop integral of a meromorphic function equals $2\\pi i$ times the sum of residues inside. Computes real integrals that resist all other methods." },
    { f: "Liouville", n: "A bounded entire (holomorphic on all of $\\mathbb{C}$) function must be constant. Implies the Fundamental Theorem of Algebra in one elegant line." },
    { f: "Max modulus", n: "On a bounded closed domain, $|f|$ attains its maximum on the boundary (never strictly inside). Reflects the rigidity of holomorphic functions." }
  ],

  "fourier-analysis": [
    { f: "$f(x) = \\sum (a_n \\cos nx + b_n \\sin nx)$", n: "Fourier series. Any reasonable periodic function decomposes into a sum of sines and cosines. Even sharp square waves work (with infinitely many terms)." },
    { f: "$a_n = \\dfrac{1}{\\pi}\\int_{-\\pi}^\\pi f \\cos(nx)\\,dx$", n: "Fourier coefficient formula. Multiply by $\\cos nx$, integrate, divide by $\\pi$ — orthogonality picks out just the $n$-th cosine component." },
    { f: "$\\hat f(k) = \\int f(x) e^{-ikx}\\,dx$", n: "Fourier transform (continuous, non-periodic version). Decomposes a signal into a continuous spectrum of frequencies." },
    { f: "$f(x) = \\dfrac{1}{2\\pi}\\int \\hat f(k) e^{ikx}\\,dk$", n: "Inverse Fourier transform. Rebuilds the original signal from its spectrum. Time and frequency are two views of the same information." },
    { f: "$\\widehat{f \\ast g} = \\hat f \\cdot \\hat g$", n: "Convolution theorem. Convolution in time = pointwise multiplication in frequency (and vice versa). Why filtering is easy in the frequency domain." },
    { f: "Parseval: $\\int |f|^2 = \\tfrac{1}{2\\pi}\\int |\\hat f|^2$", n: "Parseval's identity. Total energy is preserved between time and frequency domains. Fourier transforms are unitary on $L^2$." },
    { f: "$\\sigma_x \\sigma_k \\geq \\tfrac{1}{2}$", n: "Time-frequency uncertainty. You cannot localize a signal sharply in both time and frequency. Quantum-mechanical $\\Delta x \\Delta p \\geq \\hbar/2$ is this with $p = \\hbar k$." }
  ],

  "abstract-algebra": [
    { f: "Group axioms: closure, associativity, identity, inverse", n: "Four properties defining a group. From these minimal rules, an enormous theory follows. Commutativity is NOT required (groups can be non-abelian)." },
    { f: "Lagrange: $|H| \\mid |G|$", n: "Subgroup order divides group order. For a group of size 12, possible subgroup sizes are exactly 1, 2, 3, 4, 6, 12." },
    { f: "$|G/H| = |G|/|H|$", n: "Quotient group order (when $H$ is normal in $G$). The quotient 'collapses' all elements of $H$ to one — like working modulo a subgroup." },
    { f: "First isomorphism: $G/\\ker\\phi \\cong \\text{im}\\,\\phi$", n: "Any homomorphism factors through its kernel: the image is isomorphic to the quotient. The cleanest way to identify a quotient group." },
    { f: "Cauchy: $p \\mid |G| \\Rightarrow$ element of order $p$", n: "Cauchy's theorem (group theory version). If a prime $p$ divides the group order, there's an element of order exactly $p$. Partial converse of Lagrange." },
    { f: "$\\mathbb{Z}/p\\mathbb{Z}$ is a field iff $p$ prime", n: "Integers mod $p$ form a field exactly when $p$ is prime — every nonzero element has a multiplicative inverse. Foundation of finite-field constructions." }
  ],

  "topology": [
    { f: "Topology axioms", n: "A topology on $X$ is a collection of subsets ('open sets') closed under arbitrary unions and finite intersections, containing $\\emptyset$ and $X$. The minimum structure for continuity." },
    { f: "Continuous: preimage of open is open", n: "Topological definition of continuity — no $\\varepsilon$-$\\delta$ needed. Equivalent to the standard definition when both are available." },
    { f: "Compact: every open cover has a finite subcover", n: "Compactness — a kind of 'finite-ness' that lets you upgrade local properties to global ones. In $\\mathbb{R}^n$: closed and bounded." },
    { f: "Connected: not the union of two disjoint non-empty open sets", n: "Connected = can't be split into two separate pieces. The image of a connected space under a continuous map is connected." },
    { f: "Hausdorff: distinct points have disjoint neighborhoods", n: "Hausdorff ($T_2$) — you can separate distinct points with open sets. Without it, limits aren't unique. Almost all useful spaces are Hausdorff." },
    { f: "Heine-Borel: compact in $\\mathbb{R}^n \\iff$ closed and bounded", n: "Concrete characterization of compactness in Euclidean space. In infinite dimensions or arbitrary topological spaces, this equivalence fails." }
  ],

  "numerical-methods": [
    { f: "Newton: $x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$", n: "Newton's iteration. Slide along the tangent to its $x$-intercept; repeat. Doubles the number of correct digits each step (quadratic convergence) near a simple root." },
    { f: "Bisection: midpoint of sign-changing interval", n: "Find a sign change of $f$ on $[a, b]$, take midpoint, repeat on the half where the sign still changes. Slow (linear) but bulletproof." },
    { f: "Trapezoid: $\\int_a^b f \\approx \\tfrac{h}{2}\\sum (f_i + f_{i+1})$", n: "Approximate integral by trapezoid areas. Error scales as $O(h^2)$: halve the step size, cut the error to a quarter." },
    { f: "Simpson: $\\int \\approx \\tfrac{h}{3}(f_0 + 4f_1 + 2f_2 + \\ldots + f_n)$", n: "Approximate with parabolas over pairs of intervals. $O(h^4)$ error — halving step reduces error by 16×. Exact for cubics." },
    { f: "Euler: $y_{n+1} = y_n + h f(t_n, y_n)$", n: "Euler's method for ODEs. Step along the local slope. Crude ($O(h)$) but foundational; the basis for everything sophisticated." },
    { f: "RK4: 4-stage update", n: "Runge-Kutta 4 — combines four slope estimates per step into a weighted average. $O(h^4)$ error, the standard go-to nonstiff ODE solver." },
    { f: "Condition number: $\\kappa(A) = \\|A\\| \\|A^{-1}\\|$", n: "Sensitivity of a linear system to perturbation. Large $\\kappa$ ⇒ small input errors blow up into huge output errors. Watch for $\\kappa \\gtrsim 10^{16/2}$ in double precision." }
  ],

  "coordinate-geometry": [
    { f: "$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$", n: "DISTANCE FORMULA between two points $(x_1, y_1)$ and $(x_2, y_2)$. Just the Pythagorean theorem applied to the differences in $x$ and $y$ coordinates — they're the legs of a right triangle, the distance is the hypotenuse. Generalizes to any dimension: square the differences, sum, square root." },
    { f: "$M = \\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right)$", n: "MIDPOINT of two points — just the average of their coordinates, taken component-wise. Geometrically obvious; algebraically clean. Used constantly for bisecting lines, finding centroids, in geometric proofs." },
    { f: "$m = \\dfrac{y_2 - y_1}{x_2 - x_1}$", n: "SLOPE of a line through two points. Rise over run — how much $y$ changes per unit $x$. Positive slope: line goes up left-to-right. Negative: goes down. Zero: horizontal. Undefined (division by zero): vertical line." },
    { f: "$y - y_1 = m(x - x_1)$", n: "POINT-SLOPE FORM of a line. If you know one point $(x_1, y_1)$ and the slope $m$, this gives the equation directly. Most useful starting point — easy to remember, and you can convert to slope-intercept or general form as needed." },
    { f: "$y = mx + b$", n: "SLOPE-INTERCEPT FORM. $m$ is the slope; $b$ is the $y$-intercept (where the line crosses the $y$-axis, when $x = 0$). The form you'd graph from instantly: start at $(0, b)$, climb $m$ units for every step right." },
    { f: "$Ax + By + C = 0$", n: "GENERAL FORM of a line. Useful when the line is vertical ($B = 0$, so $x = -C/A$) — slope-intercept can't handle vertical lines. Also nice for finding parallel/perpendicular lines: parallel lines have the same $A, B$; perpendicular ones swap and negate." },
    { f: "Parallel: $m_1 = m_2$; Perpendicular: $m_1 m_2 = -1$", n: "Two lines are PARALLEL iff they have the same slope (never meet). They're PERPENDICULAR iff the product of their slopes is $-1$ (slopes are 'negative reciprocals'). Special case: a horizontal line ($m = 0$) is perpendicular to a vertical line (slope undefined), which the formula doesn't capture — handle separately." }
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
    { f: "$\\sum_v \\deg(v) = 2|E|$", n: "Handshake lemma. $\\deg(v)$ is the number of edges meeting at vertex $v$; $|E|$ is the total number of edges. Sum all the vertex degrees and you get TWICE the edge count — because each edge has two ends, contributing $1$ to each of its two endpoints' degrees. Consequence: the total degree is always even, so the number of ODD-degree vertices must also be even." },
    { f: "Tree: connected, $|E| = |V| - 1$", n: "A TREE is a connected graph (every vertex reachable from every other) with NO cycles. Crucially, it always has exactly $|V| - 1$ edges. Why? With fewer, it'd be disconnected; with more, you'd have to revisit a vertex, creating a cycle. Trees are the 'minimum spanning' structure — branching diagrams, file systems, decision trees, evolutionary trees." },
    { f: "$K_n$ has $\\binom{n}{2}$ edges", n: "$K_n$ is the COMPLETE GRAPH on $n$ vertices — every pair of distinct vertices is connected by an edge. Since each edge corresponds to a pair of vertices, the count is $\\binom{n}{2} = n(n-1)/2$. So $K_5$ has 10 edges, $K_{10}$ has 45." },
    { f: "Eulerian circuit iff all degrees even", n: "An EULERIAN circuit traverses every EDGE exactly once and returns to start. It exists if and only if the graph is connected AND every vertex has even degree. Why? You enter a vertex via one edge and leave via another, using two edges per visit. If any vertex has odd degree, you'll get stuck there. This was Euler's solution to the Königsberg bridges puzzle in 1736 — and the birth of graph theory." },
    { f: "Hamiltonian: visits every vertex once", n: "A HAMILTONIAN circuit visits every VERTEX exactly once (compare: Eulerian visits every EDGE). Sounds similar but is MUCH harder — there's no simple characterization. Deciding whether a Hamiltonian circuit exists is NP-hard: the only known algorithms take exponential time in the worst case, and most computer scientists believe a polynomial-time algorithm doesn't exist. The Traveling Salesman Problem is a famous variant." },
    { f: "Bipartite iff no odd cycle", n: "A graph is BIPARTITE if its vertices can be split into two groups with edges ONLY between groups (never within). Equivalent: the graph can be properly colored with just 2 colors. A graph is bipartite iff it contains NO ODD CYCLE — because an odd cycle forces a coloring clash (start red-blue-red-blue... and odd-length brings you back the wrong color). Bipartite graphs model matching problems (jobs to applicants, hospitals to residents)." },
    { f: "Four-color theorem: planar $\\Rightarrow \\chi \\leq 4$", n: "A graph is PLANAR if you can draw it on paper with no edges crossing. $\\chi$ (chromatic number) is the minimum number of colors needed to color the vertices so neighbors differ. The four-color theorem says: every planar graph is 4-colorable. Conjectured 1852, proved 1976 — controversial because the proof relied on computer verification of thousands of cases. Practical meaning: any political map can be colored with just 4 colors so that no neighboring countries share a color." }
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
    { f: "$E[X] = \\int x f(x)\\,dx$ (continuous) or $\\sum x_i P_i$ (discrete)", n: "EXPECTATION (or mean) — the long-run average value of a random variable if you sampled it many times. Probability-weighted sum of possible values. Plain English: 'what would I get on average?'" },
    { f: "$\\text{Var}(X) = E[X^2] - E[X]^2$", n: "VARIANCE measures how spread out a random variable is around its mean. Large variance = wild swings; zero variance = constant. Standard deviation $\\sigma = \\sqrt{\\text{Var}(X)}$ has the same units as $X$, which makes it more interpretable." },
    { f: "Binomial: $E = np, \\text{Var} = np(1-p)$", n: "BINOMIAL distribution counts successes in $n$ independent Bernoulli trials with success probability $p$. Mean: $np$ (intuitive — expected fraction). Variance: $np(1-p)$, maximized at $p = 1/2$ (most uncertain). Models: coin flips, survey responses, defective items in a batch." },
    { f: "Poisson: $P(X=k) = e^{-\\lambda}\\lambda^k/k!, E = \\text{Var} = \\lambda$", n: "POISSON distribution models rare-event counts when each event happens independently at average rate $\\lambda$. Distinctive: mean = variance = $\\lambda$. Examples: emails per hour, decay events per second, customers per minute. Derived as the limit of binomial when $n \\to \\infty$ and $p \\to 0$ with $np = \\lambda$." },
    { f: "Normal: $f = \\dfrac{1}{\\sigma\\sqrt{2\\pi}} e^{-(x-\\mu)^2/(2\\sigma^2)}$", n: "The NORMAL (Gaussian) distribution — the famous bell curve. Parameters: mean $\\mu$ and standard deviation $\\sigma$. Sums of many independent small random effects always tend toward normal (Central Limit Theorem). Heights, measurement errors, test scores, IQs all approximately follow it." },
    { f: "CLT: $\\sqrt n (\\bar X - \\mu) \\to N(0, \\sigma^2)$", n: "CENTRAL LIMIT THEOREM — perhaps the most remarkable theorem in probability. Take any reasonable distribution, sample $n$ values, compute the mean. As $n$ grows, the distribution of sample means converges to a NORMAL distribution — regardless of the underlying shape. This is why normal distributions appear everywhere and why $\\sqrt n$ is the typical statistical precision scaling." },
    { f: "Markov: $P(X \\geq a) \\leq E[X]/a$ for $X \\geq 0$", n: "MARKOV'S INEQUALITY: an absurdly simple but useful tail bound. For any non-negative random variable, the probability of being more than $a$ above zero is at most $E[X]/a$. No assumption about distribution shape. Extension (Chebyshev): $P(|X - \\mu| > k\\sigma) \\leq 1/k^2$." }
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
    { f: "$\\min f(x)$ s.t. $g_i(x) \\leq 0, h_j(x) = 0$", n: "STANDARD OPTIMIZATION PROBLEM. Minimize an OBJECTIVE function $f(x)$ subject to INEQUALITY constraints $g_i(x) \\leq 0$ and EQUALITY constraints $h_j(x) = 0$. Almost every real optimization (logistics, ML training, engineering design) fits this template. Maximization is just minimization of $-f$." },
    { f: "$\\mathcal{L} = f + \\sum \\lambda_i g_i + \\sum \\mu_j h_j$", n: "LAGRANGIAN. Encodes the constrained problem into a single function by adding the constraints multiplied by 'Lagrange multipliers' $\\lambda_i, \\mu_j$. At an optimum, the gradient of the Lagrangian is zero. Turns constrained problems into unconstrained ones, a fundamental trick." },
    { f: "KKT: $\\nabla \\mathcal{L} = 0, \\lambda_i \\geq 0, \\lambda_i g_i = 0$", n: "KARUSH-KUHN-TUCKER conditions — first-order necessary conditions for an optimum with inequality constraints. (1) Lagrangian gradient zero. (2) Multipliers non-negative. (3) COMPLEMENTARY SLACKNESS: either the constraint is active ($g_i = 0$) or its multiplier is zero. Generalizes 'derivative = 0' from calculus." },
    { f: "Convex: $f(\\theta x + (1-\\theta) y) \\leq \\theta f(x) + (1-\\theta) f(y)$", n: "CONVEXITY definition. The function lies BELOW (or on) any chord connecting two of its points. Equivalently, any line segment between two points on the graph stays above the graph. A convex function looks like a bowl — every local minimum is a GLOBAL minimum. Convex problems are tractable; non-convex ones can have many local minima trapping algorithms." },
    { f: "Gradient descent: $x_{n+1} = x_n - \\eta \\nabla f$", n: "GRADIENT DESCENT update rule. Step in the direction OPPOSITE the gradient (downhill) by a learning rate $\\eta$. Simple and universal — the workhorse of machine learning. Repeated application moves you toward a minimum. Step too big and you overshoot; too small and you crawl. Choosing $\\eta$ is the art." },
    { f: "Newton's: $x_{n+1} = x_n - H^{-1} \\nabla f$", n: "NEWTON'S METHOD for optimization. Uses the HESSIAN matrix $H$ (matrix of second derivatives) to scale the step intelligently. Converges QUADRATICALLY near a minimum (much faster than gradient descent) — but computing $H^{-1}$ is expensive in high dimensions. Quasi-Newton methods (L-BFGS) approximate $H^{-1}$ cheaply." },
    { f: "LP duality: $\\max c^T x = \\min b^T y$", n: "LINEAR PROGRAMMING DUALITY. Every LP has a 'dual' LP, and at the optimum both have the same value. Practical use: a feasible solution to the dual gives an UPPER BOUND on the primal optimum, certifying near-optimality without solving the primal exactly. Foundational result in operations research." }
  ],

  "information-theory": [
    { f: "$H(X) = -\\sum p_i \\log_2 p_i$", n: "SHANNON ENTROPY of a random variable $X$, in BITS (base-2 log). Measures the average information content per outcome — how UNCERTAIN you are about $X$ before seeing it. Fair coin: $H = 1$ bit (max uncertainty for 2 outcomes). Always-heads coin: $H = 0$ bits (no uncertainty). The negative sign cancels the negative logs of probabilities (which are ≤ 1)." },
    { f: "$H(X, Y) \\leq H(X) + H(Y)$", n: "JOINT entropy of two variables can't exceed the sum of their individual entropies. Equality holds iff $X$ and $Y$ are independent. If they're correlated, knowing $X$ tells you something about $Y$, so the joint uncertainty is LESS than the sum." },
    { f: "$I(X; Y) = H(X) - H(X | Y)$", n: "MUTUAL INFORMATION — how much knowing $Y$ reduces your uncertainty about $X$. Equals zero iff $X$ and $Y$ are independent. The amount of 'information shared' between two random variables. Symmetric: $I(X;Y) = I(Y;X)$." },
    { f: "$D(p \\| q) = \\sum p_i \\log(p_i / q_i)$", n: "KULLBACK-LEIBLER (KL) DIVERGENCE — how much the distribution $p$ differs from $q$. Asymmetric (NOT a distance metric): $D(p\\|q) \\neq D(q\\|p)$ in general. Used in machine learning everywhere — the cross-entropy loss in classification is essentially KL divergence." },
    { f: "Channel capacity: $C = \\max I(X; Y)$", n: "SHANNON'S CHANNEL CODING THEOREM. The capacity of any noisy communication channel is the maximum mutual information between input $X$ and output $Y$, over all input distributions. Shannon proved you can transmit at any rate BELOW $C$ with arbitrarily low error, but rates ABOVE $C$ are impossible. The fundamental speed limit of communication." },
    { f: "BSC capacity: $C = 1 - H(p)$", n: "Capacity of a BINARY SYMMETRIC CHANNEL — one that flips each bit independently with probability $p$. $H(p)$ is the binary entropy. At $p = 0$ (perfect channel) capacity = 1 bit per use; at $p = 1/2$ (pure noise) capacity = 0. The channel is most informative when bits are reliably 0 or 1." },
    { f: "Differential entropy of $N(0,\\sigma^2)$: $\\tfrac{1}{2}\\log(2\\pi e \\sigma^2)$", n: "Continuous version of entropy. For a Gaussian distribution with variance $\\sigma^2$, the differential entropy depends only on $\\sigma$. Among all distributions with given variance, the GAUSSIAN MAXIMIZES entropy — this is why noise often looks Gaussian (max-entropy distributions emerge from many tiny independent perturbations)." }
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
    { f: "RSA: $c = m^e \\bmod n, \\; m = c^d \\bmod n$", n: "RSA public-key encryption. $m$ is the plaintext message, $c$ is the ciphertext, $n$ is the public modulus, $e$ is the public exponent, $d$ is the private exponent. To ENCRYPT: raise the message to the public power $e$ modulo $n$. To DECRYPT: raise the ciphertext to the private power $d$ modulo $n$. Anyone can encrypt (public key $(n, e)$), but only the holder of $d$ can decrypt." },
    { f: "$ed \\equiv 1 \\pmod{\\varphi(n)}$", n: "The relationship that makes RSA work. $\\varphi(n)$ is Euler's totient (count of integers coprime to $n$); for $n = pq$ with $p, q$ prime, $\\varphi(n) = (p-1)(q-1)$. We pick $e$ first, then compute $d$ as the modular inverse. This ensures $(m^e)^d = m^{ed} = m \\pmod n$ — encryption and decryption invert each other. Security collapses if someone factors $n$ into $p, q$, since that reveals $\\varphi(n)$ and hence $d$." },
    { f: "DH: shared key $g^{ab} \\bmod p$", n: "DIFFIE-HELLMAN key exchange. Alice and Bob agree publicly on a prime $p$ and a generator $g$. Alice picks a secret $a$, sends $g^a \\bmod p$ to Bob. Bob picks a secret $b$, sends $g^b \\bmod p$ to Alice. Each then raises the other's value to their own secret: both end up with $g^{ab} \\bmod p$, a SHARED SECRET, without ever transmitting $a$ or $b$. Security relies on the discrete-log problem: knowing $g$ and $g^a \\bmod p$, finding $a$ is computationally hard." },
    { f: "AES: 128-bit blocks, 128/192/256-bit keys", n: "Advanced Encryption Standard — the global standard for symmetric encryption (both parties share the same key). Encrypts data in 128-bit blocks using a key of 128, 192, or 256 bits. Replaces older DES. Symmetric ciphers are MUCH faster than asymmetric (RSA) — typically used to encrypt actual data, while RSA is used to share the AES key. The 'TLS' protecting your HTTPS connection uses both." },
    { f: "Hash: collision-resistant, preimage-resistant", n: "A cryptographic hash function takes arbitrary-length input and produces a fixed-length 'fingerprint' (e.g., 256 bits for SHA-256). Two security properties matter: COLLISION-RESISTANT (hard to find two different inputs giving the same hash) and PREIMAGE-RESISTANT (given a hash, hard to find an input that produces it). Used for password storage, digital signatures, blockchain, integrity checks." },
    { f: "Birthday bound: $\\sim 2^{n/2}$", n: "Named after the birthday paradox (in a room of 23 people, two share a birthday with $>50\\%$ probability). For an $n$-bit hash, you only need about $2^{n/2}$ random hashes before a collision becomes likely — much faster than the $2^n$ you might naively expect. This is why hash output sizes must be DOUBLE the security level you want: SHA-256 (256-bit output) provides only 128 bits of collision security." },
    { f: "Perfect secrecy: $H(M | C) = H(M)$", n: "Shannon's INFORMATION-THEORETIC definition of perfect secrecy: knowing the ciphertext $C$ gives you ZERO information about the plaintext $M$. Equivalently, the conditional entropy of $M$ given $C$ equals the entropy of $M$ alone — the ciphertext didn't help an attacker at all. The ONE-TIME PAD (OTP) achieves this if the key is truly random and as long as the message. Impractical in general (key distribution), but cryptographically unbreakable." }
  ],

  // ===== PHYSICS =====

  "units-measurement": [
    { f: "$1$ km/h $= \\tfrac{5}{18}$ m/s", n: "Standard conversion. Multiply km/h by $5/18$ (or divide by $3.6$) to get m/s. From: 1 km = 1000 m, 1 h = 3600 s." },
    { f: "$[F] = \\text{kg·m/s}^2 = $ N", n: "Force has units of mass times acceleration. The newton is defined as the force that accelerates 1 kg at 1 m/s²." },
    { f: "$[E] = \\text{kg·m}^2/\\text{s}^2 = $ J", n: "Energy units. Same as force × distance (work) or mass × velocity² (kinetic energy). The joule is the SI energy unit." },
    { f: "$[P] = \\text{W} = $ J/s", n: "Power is energy per time. A 100-watt bulb uses 100 joules every second. 1 horsepower ≈ 746 W." },
    { f: "Sig figs in multiply: fewest of inputs", n: "When multiplying or dividing, the result has as many significant figures as the LEAST precise input. Precision can't be created from imprecise data." },
    { f: "Sig figs in add: fewest decimal places", n: "When adding or subtracting, match the least precise decimal place. $1.23 + 4.5 = 5.7$ (not $5.73$) — you can't be more precise than your worst input." }
  ],

  "kinematics": [
    { f: "$\\bar v = \\Delta x / \\Delta t$", n: "Average velocity = displacement over time. Note: average SPEED uses total distance; average VELOCITY uses net displacement." },
    { f: "$v = v_0 + at$", n: "Velocity at time $t$ under constant acceleration. The most basic kinematic equation — linear change in velocity." },
    { f: "$x = x_0 + v_0 t + \\tfrac{1}{2} a t^2$", n: "Position vs time under constant acceleration. The $\\tfrac{1}{2} at^2$ term comes from integrating the linearly changing velocity." },
    { f: "$v^2 = v_0^2 + 2a(x - x_0)$", n: "Time-free kinematic equation. Use it when you don't know (or care about) the elapsed time. Derives from energy conservation." },
    { f: "Free fall: $g = 9.8$ m/s²", n: "Gravitational acceleration near Earth's surface. Independent of mass (Galileo's insight). On the Moon, $g \\approx 1.6$ m/s²." },
    { f: "Projectile: $y = x\\tan\\theta - \\dfrac{gx^2}{2v_0^2 \\cos^2\\theta}$", n: "Trajectory of a launched projectile (no air resistance). A parabola — vertical drop grows with horizontal distance squared." },
    { f: "Range: $R = \\dfrac{v_0^2 \\sin(2\\theta)}{g}$", n: "Horizontal range on level ground. Maximum at $\\theta = 45°$ (where $\\sin 2\\theta = 1$). Same range for $\\theta$ and $90° - \\theta$." }
  ],

  "vectors-physics": [
    { f: "$|\\vec v| = \\sqrt{v_x^2 + v_y^2}$", n: "Vector magnitude in 2D — Pythagoras on the components. The 'size' or 'length' of the vector, ignoring direction." },
    { f: "$\\theta = \\arctan(v_y / v_x)$", n: "Direction angle from $+x$-axis. Use $\\text{atan2}$ to handle quadrants correctly — $\\arctan$ alone misses the case when $v_x < 0$." },
    { f: "$\\vec A + \\vec B = \\langle A_x + B_x, A_y + B_y\\rangle$", n: "Vector addition: add components independently. Geometrically: tip-to-tail or parallelogram rule." },
    { f: "$F_x = F\\cos\\theta, \\; F_y = F\\sin\\theta$", n: "Resolving a force into components. The vector's $x$-component is the projection onto the $x$-axis: magnitude times the cosine of the angle." },
    { f: "$\\vec a - \\vec b = \\vec a + (-\\vec b)$", n: "Vector subtraction = add the negated vector. Result points from $\\vec b$'s tip to $\\vec a$'s tip — useful for relative displacement." },
    { f: "$\\hat u = \\vec v / |\\vec v|$", n: "Unit vector — same direction as $\\vec v$, but magnitude 1. Strips out the size to leave only direction information." }
  ],

  "newtons-laws": [
    { f: "$\\vec F_{\\text{net}} = m \\vec a$", n: "Newton's second law. The vector sum of all forces equals mass times acceleration. The single most important equation in classical mechanics." },
    { f: "$\\vec F_{12} = -\\vec F_{21}$", n: "Newton's third law. Forces come in equal and opposite pairs between two objects. The pair acts on different objects — they don't cancel on one object." },
    { f: "$W = mg$", n: "Weight = mass × gravitational acceleration. Weight is a force (newtons); mass is a property (kg). On the Moon you weigh less, but your mass is the same." },
    { f: "$f_s \\leq \\mu_s N$", n: "Static friction can be anywhere from zero up to $\\mu_s N$ — it adjusts to prevent motion. Exceeds the limit and the surface starts sliding." },
    { f: "$f_k = \\mu_k N$", n: "Kinetic friction is a fixed magnitude once sliding starts. Typically $\\mu_k < \\mu_s$ — it's harder to start sliding than to keep sliding." },
    { f: "Tension transmits force", n: "An ideal (massless, inextensible) rope transmits force from one end to the other unchanged in magnitude. Tension throughout the rope is uniform." },
    { f: "Normal force ⊥ surface", n: "The surface pushes back perpendicular to itself, with whatever magnitude is needed to prevent objects from penetrating. Magnitude adjusts to the situation." }
  ],

  "momentum-impulse": [
    { f: "$\\vec p = m \\vec v$", n: "Linear momentum — the 'amount of motion'. A vector quantity (direction matters). Heavier or faster objects have more." },
    { f: "$\\vec F = d\\vec p/dt$", n: "Newton's second law in its original (and most general) form. For variable mass (rockets), this is needed instead of $F = ma$." },
    { f: "$\\vec J = \\int \\vec F\\,dt = \\Delta \\vec p$", n: "Impulse equals change in momentum. A short large force or a long small force can produce the same change in motion." },
    { f: "$\\sum \\vec p_i = \\sum \\vec p_f$", n: "Conservation of momentum in a closed system (no external forces). Total momentum before = total momentum after. Holds even when energy is dissipated." },
    { f: "Elastic: $KE$ also conserved", n: "In an elastic collision, kinetic energy is also conserved (no heat, sound, or deformation losses). Most real collisions aren't perfectly elastic." },
    { f: "Equal masses elastic 1D: velocities exchange", n: "When two equal masses collide elastically head-on, they swap velocities. Demonstrated dramatically in Newton's cradle." },
    { f: "Center of mass: $\\vec R_{cm} = \\dfrac{\\sum m_i \\vec r_i}{\\sum m_i}$", n: "Mass-weighted average position. Moves with constant velocity in a closed system (no external forces) — useful frame to analyze collisions." }
  ],

  "energy-work": [
    { f: "$W = \\vec F \\cdot \\vec d = Fd\\cos\\theta$", n: "Work = force component along the displacement, times the displacement. Zero work if force is perpendicular to motion." },
    { f: "$KE = \\tfrac{1}{2} m v^2$", n: "Kinetic energy. Quadratic in speed — doubling speed quadruples KE. That's why crashes get violent quickly as speed rises." },
    { f: "$PE_g = mgh$", n: "Gravitational potential energy near Earth's surface. Reference height is arbitrary (choose wherever PE = 0); only differences matter." },
    { f: "$PE_s = \\tfrac{1}{2} k x^2$", n: "Spring potential energy. Quadratic in displacement from equilibrium. Comes from integrating Hooke's law $F = -kx$." },
    { f: "$W_{\\text{net}} = \\Delta KE$", n: "Work-energy theorem. Net work done on an object equals its change in kinetic energy. Connects forces to motion via energy." },
    { f: "$E_{\\text{total}} = KE + PE = $ const", n: "Conservation of mechanical energy when only conservative forces (gravity, springs) act. Non-conservative forces (friction) dissipate energy to heat." },
    { f: "$P = dW/dt = \\vec F \\cdot \\vec v$", n: "Power — rate of doing work. Equal to force dotted with velocity. A constant force times a constant velocity gives constant power output." }
  ],

  "circular-gravitation": [
    { f: "$a_c = v^2/r = \\omega^2 r$", n: "Centripetal acceleration. Always points toward the center of the circle. Larger speed or tighter radius means stronger centripetal acceleration." },
    { f: "$F_c = m v^2 / r$", n: "Centripetal force = mass × centripetal acceleration. Required net force to keep an object on a circular path. Provided by friction, tension, gravity, etc." },
    { f: "$F_g = G \\dfrac{m_1 m_2}{r^2}$", n: "Newton's law of universal gravitation. Force falls off with distance squared. $G$ is the gravitational constant: $6.67 \\times 10^{-11}$ N·m²/kg²." },
    { f: "$g = GM/r^2$", n: "Surface gravity of a body of mass $M$ at distance $r$. On Earth (using $M_\\oplus$ and $R_\\oplus$): $g \\approx 9.8$ m/s²." },
    { f: "Orbital: $v = \\sqrt{GM/r}$", n: "Circular orbital speed at radius $r$. Set gravity equal to centripetal force and solve. Low Earth orbit: $\\approx 7.9$ km/s." },
    { f: "Escape: $v_{\\text{esc}} = \\sqrt{2GM/r}$", n: "Speed needed to escape the gravitational pull to infinity. From Earth's surface: $\\approx 11.2$ km/s. Factor of $\\sqrt 2$ over orbital speed." },
    { f: "Kepler III: $T^2 = \\dfrac{4\\pi^2}{GM} a^3$", n: "Period squared proportional to semi-major axis cubed. Lets you compare orbits across the Solar System: outer planets orbit slower." }
  ],

  "shm": [
    { f: "$F = -kx$", n: "Hooke's law — restoring force proportional to (and opposing) displacement. Defines a harmonic oscillator. The negative sign is what makes it oscillate." },
    { f: "$\\omega = \\sqrt{k/m}$", n: "Spring angular frequency. Stiffer spring (bigger $k$) means faster oscillation; heavier mass means slower. Independent of amplitude." },
    { f: "$T = 2\\pi/\\omega = 2\\pi\\sqrt{m/k}$", n: "Period (time for one full oscillation). Depends only on $m$ and $k$ — not on how hard you push the system." },
    { f: "$x(t) = A\\cos(\\omega t + \\phi)$", n: "General SHM solution. Amplitude $A$, angular frequency $\\omega$, phase $\\phi$ set by initial conditions. Could equivalently use sine." },
    { f: "Pendulum: $T = 2\\pi\\sqrt{L/g}$", n: "Small-angle simple pendulum period. Independent of mass and amplitude (Galileo's discovery). Breaks down for large swings." },
    { f: "$E_{\\text{SHM}} = \\tfrac{1}{2} k A^2$", n: "Total energy of SHM. Constant, but sloshes between kinetic and potential as the oscillation proceeds." },
    { f: "Damped: $\\ddot x + 2\\gamma \\dot x + \\omega_0^2 x = 0$", n: "Damped oscillator equation. $\\gamma$ is the damping rate. Three regimes: underdamped (oscillates, decays), critical ($\\gamma = \\omega_0$), overdamped (no oscillation)." }
  ],

  "rotational": [
    { f: "$\\theta, \\omega, \\alpha$ analogous to $x, v, a$", n: "Angular kinematics — same equations as linear, but with angular quantities. Just replace each linear symbol with its rotational analog." },
    { f: "$v = \\omega r, \\; a_t = \\alpha r$", n: "Link between rotational and linear quantities for a point at distance $r$ from the axis. Tangential speed grows with both angular speed and distance from axis." },
    { f: "$\\tau = r F \\sin\\theta = I\\alpha$", n: "Torque equation. $\\vec\\tau = \\vec r \\times \\vec F$ gives the rotational push. Newton's 2nd law for rotation: torque = moment of inertia × angular acceleration." },
    { f: "$I = \\sum m_i r_i^2$", n: "Moment of inertia — rotational analog of mass. Depends on mass AND how that mass is distributed around the axis. Far-from-axis mass costs more." },
    { f: "$KE_{\\text{rot}} = \\tfrac{1}{2} I \\omega^2$", n: "Rotational kinetic energy — analog of $\\tfrac{1}{2}mv^2$. A rolling object has both translational and rotational KE." },
    { f: "$L = I\\omega$", n: "Angular momentum — rotational analog of $p = mv$. Conserved when no external torque acts. A figure skater pulling in their arms reduces $I$, so $\\omega$ rises." },
    { f: "Parallel axis: $I = I_{cm} + Md^2$", n: "If you know $I$ about the center of mass, find $I$ about any parallel axis by adding $Md^2$. Saves recomputing the moment of inertia for shifted axes." }
  ],

  "fluids": [
    { f: "$P = \\rho g h$", n: "Hydrostatic gauge pressure at depth $h$ below the surface. Independent of container shape. Every 10 m of water adds about one atmosphere." },
    { f: "$F_B = \\rho V g$", n: "Buoyant force = weight of fluid displaced (Archimedes). Determines what floats: if average density < fluid density, it floats." },
    { f: "$P = F/A$", n: "Pressure = force per area. Same force on a smaller area = higher pressure (why a knife cuts and a fingernail doesn't)." },
    { f: "$A_1 v_1 = A_2 v_2$", n: "Continuity for incompressible flow. What goes in must come out — narrow the pipe, speed up the flow proportionally." },
    { f: "$P + \\tfrac{1}{2}\\rho v^2 + \\rho g h = $ const", n: "Bernoulli's equation along a streamline. Sum of pressure, kinetic, and potential energy density is constant. Fast flow ⇒ low pressure (why planes lift)." },
    { f: "Pascal: pressure transmits equally", n: "Pressure applied at any point in a confined fluid transmits undiminished to every point. The basis of hydraulic systems and brake fluids." },
    { f: "$1$ atm $\\approx 101325$ Pa", n: "Standard atmospheric pressure at sea level. About 14.7 psi, or 760 mm Hg. The weight of the air column above you." }
  ],

  "kinetic-theory": [
    { f: "$PV = nRT$", n: "Ideal gas law. Three of $P, V, T$ determine the fourth (given $n$ moles). Real gases approximate this at low pressure and high temperature." },
    { f: "$\\langle KE \\rangle = \\tfrac{3}{2} k_B T$", n: "Average translational kinetic energy per particle in a gas. Temperature literally IS molecular kinetic energy (up to a constant). 3D space, hence 3 translational degrees." },
    { f: "$v_{rms} = \\sqrt{3 k_B T / m}$", n: "Root-mean-square molecular speed. Air molecules at room temperature zip around at ~500 m/s — faster than commercial jets." },
    { f: "$P = \\tfrac{1}{3} n m \\langle v^2 \\rangle$", n: "Gas pressure from microscopic collisions with walls. Macroscopic pressure emerges from countless molecular impacts per second." },
    { f: "Equipartition: $\\tfrac{1}{2} k_B T$ per quadratic DOF", n: "Each independent way a molecule can store energy quadratically (translation, rotation, vibration) gets $\\tfrac{1}{2} k_B T$ on average. Classical limit only." },
    { f: "$k_B = R/N_A = 1.38 \\times 10^{-23}$ J/K", n: "Boltzmann constant — converts temperature to energy at the molecular scale. Relates macroscopic $R$ to per-molecule energy." },
    { f: "$\\lambda = \\dfrac{1}{\\sqrt 2 n \\pi d^2}$", n: "Mean free path — average distance a molecule travels between collisions. In air at STP: about 70 nm. Larger $n$ or $d$ (size) means more collisions." }
  ],

  "thermodynamics": [
    { f: "$\\Delta U = Q - W$", n: "First law of thermodynamics. Internal energy change = heat in minus work done BY system. Energy is conserved when heat and work are properly tracked." },
    { f: "$Q = mc\\Delta T$", n: "Heat required to change temperature. $c$ is specific heat (J/kg·K). Water has unusually high $c$ — that's why oceans buffer climate." },
    { f: "$\\eta = 1 - Q_c/Q_h$", n: "Efficiency of a heat engine — fraction of input heat converted to work. The waste heat $Q_c$ to cold reservoir is unavoidable (2nd law)." },
    { f: "$\\eta_{\\text{Carnot}} = 1 - T_c/T_h$", n: "Carnot efficiency — the maximum possible (any reversible engine). Depends only on the reservoir temperatures. Hotter $T_h$ or colder $T_c$ improves it." },
    { f: "$\\Delta S = Q_{\\text{rev}}/T$", n: "Entropy change for a reversible process. Definition links entropy to heat flow and temperature. Irreversible processes have $\\Delta S > Q/T$." },
    { f: "$\\Delta S_{\\text{universe}} \\geq 0$", n: "Second law of thermodynamics. Total entropy never decreases — only stays the same (reversible) or increases (irreversible). The arrow of time." },
    { f: "$W = \\int P\\,dV$", n: "Work done by an expanding gas. Equals area under the curve in a PV diagram. The sign convention: positive when system expands." }
  ],

  "waves": [
    { f: "$v = f\\lambda$", n: "Universal wave equation. Wave speed equals frequency times wavelength. Holds for ALL waves: sound, light, water, strings." },
    { f: "$T = 1/f, \\; \\omega = 2\\pi f$", n: "Period $T$ is time per cycle; angular frequency $\\omega$ is radians per second. Three equivalent ways to express temporal behavior." },
    { f: "$y(x, t) = A\\sin(kx - \\omega t)$", n: "Sinusoidal travelling wave moving in $+x$ direction. $A$ = amplitude, $k$ = wavenumber, $\\omega$ = angular frequency. Move with constant phase $kx - \\omega t$." },
    { f: "$k = 2\\pi/\\lambda$", n: "Wavenumber — radians per unit distance. Spatial analog of angular frequency. $k$ measures spatial oscillation rate the way $\\omega$ measures temporal." },
    { f: "Speed in string: $v = \\sqrt{T/\\mu}$", n: "Wave speed on a stretched string. Higher tension or lighter string = faster waves. Why guitar strings are tightened to set pitch." },
    { f: "Doppler: $f' = f \\dfrac{v \\pm v_o}{v \\mp v_s}$", n: "Doppler shift — apparent frequency for moving source or observer. Signs: '+ observer' if approaching, '− source' if approaching. Approaching = higher frequency." },
    { f: "Sound in air: $\\approx 343$ m/s", n: "Speed of sound in air at room temperature (~20°C). Scales with $\\sqrt T$ — hotter air, faster sound." }
  ],

  "optics-geometric": [
    { f: "$\\theta_i = \\theta_r$", n: "Law of reflection. Angle of incidence equals angle of reflection, measured from the normal (perpendicular) to the surface." },
    { f: "$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$", n: "Snell's law — refraction at an interface. Light bends toward the normal when entering a denser medium (larger $n$)." },
    { f: "$\\dfrac{1}{f} = \\dfrac{1}{d_o} + \\dfrac{1}{d_i}$", n: "Thin lens (or mirror) equation. Given object distance $d_o$ and focal length $f$, find image distance $d_i$. Sign conventions: real positive, virtual negative." },
    { f: "$m = -d_i/d_o$", n: "Magnification — image height over object height. Negative $m$ means inverted; $|m| > 1$ means enlarged." },
    { f: "$\\sin\\theta_c = n_2/n_1$", n: "Critical angle for total internal reflection (going from denser to less dense). Above $\\theta_c$, all light reflects — the basis of fiber optics." },
    { f: "Lensmaker: $\\dfrac{1}{f} = (n-1)\\left(\\dfrac{1}{R_1} - \\dfrac{1}{R_2}\\right)$", n: "Computes focal length from the lens material's index and the radii of its two surfaces. Lets you design custom lenses." },
    { f: "Power: $P = 1/f$ (in diopters when $f$ in m)", n: "Lens power — how strongly it bends light. Reading glasses are typically +1 to +3 diopters." }
  ],

  "optics-wave": [
    { f: "Two-slit fringe spacing: $\\Delta y = \\lambda L/d$", n: "Distance between bright fringes in Young's experiment. Wider slit separation $d$ ⇒ tighter fringes. Confirmed light is a wave." },
    { f: "Constructive: $\\Delta = m\\lambda$; destructive: $(m + \\tfrac{1}{2})\\lambda$", n: "Path-length-difference conditions. Integer wavelengths of difference: in phase (bright). Half-integer: out of phase (dark)." },
    { f: "Single-slit minima: $a\\sin\\theta = m\\lambda$", n: "Single-slit diffraction first minimum. Narrower slit ⇒ wider central spread. Counter-intuitive: squeezing the wave makes it spread more." },
    { f: "Grating maxima: $d\\sin\\theta = m\\lambda$", n: "Diffraction grating ($N$ identical slits). Sharper maxima than two slits — gratings separate colors precisely. Used in spectrometers." },
    { f: "Thin film constructive (with one inversion): $2nt = (m + \\tfrac{1}{2})\\lambda$", n: "Soap film / oil slick colors. The $\\tfrac{1}{2}$ accounts for the $\\pi$ phase shift on reflection from a denser medium." },
    { f: "Malus: $I = I_0 \\cos^2\\theta$", n: "Intensity through a polarizer at angle $\\theta$ to incoming polarization. Crossed polarizers ($\\theta = 90°$) block all light." },
    { f: "Bragg: $2d\\sin\\theta = n\\lambda$", n: "X-ray diffraction by crystal planes spaced $d$ apart. The way DNA's double-helix structure was determined." }
  ],

  "electrostatics": [
    { f: "$F = \\dfrac{k q_1 q_2}{r^2}$", n: "Coulomb's law. Force between two charges falls off as $1/r^2$ — same inverse-square pattern as gravity. Positive if same sign (repulsive), negative if opposite (attractive)." },
    { f: "$k = 1/(4\\pi\\varepsilon_0) \\approx 9 \\times 10^9$ N·m²/C²", n: "Coulomb's constant. Tells you how strong electric forces are: enormous compared to gravity, which is why charge separation produces lightning." },
    { f: "$\\vec E = \\vec F/q$", n: "Electric field — force per unit positive test charge. The field exists independently of the test charge; it's a property of the source charges." },
    { f: "Point charge: $E = kq/r^2$, $V = kq/r$", n: "Field and potential at distance $r$ from a point charge $q$. $V \\to 0$ at infinity. Note $V$ falls off as $1/r$, slower than $E$." },
    { f: "$\\oint \\vec E \\cdot d\\vec A = Q_{\\text{enc}}/\\varepsilon_0$", n: "Gauss's law. Electric flux through any closed surface equals enclosed charge over $\\varepsilon_0$. Powerful for symmetric charge distributions." },
    { f: "$C = Q/V$", n: "Capacitance — charge stored per volt. A larger $C$ stores more charge at the same voltage. Units: farads." },
    { f: "$C = \\varepsilon_0 A/d$", n: "Parallel-plate capacitor: capacitance grows with plate area $A$ and shrinks with separation $d$. Add a dielectric to multiply by $\\varepsilon_r$." },
    { f: "$U_C = \\tfrac{1}{2} CV^2$", n: "Energy stored in a charged capacitor. Quadratic in voltage. Equivalent forms: $\\tfrac{1}{2} QV$ and $\\tfrac{1}{2} Q^2/C$." }
  ],

  "electric-circuits": [
    { f: "$V = IR$", n: "Ohm's law. Voltage across a resistor equals current times resistance. The fundamental DC circuit relation — like water pressure pushing flow through a narrow pipe." },
    { f: "Series: $R_{eq} = \\sum R_i$", n: "Resistors in series add. Current is the same through each; voltages divide proportional to resistance. Like adding pipe lengths in a row." },
    { f: "Parallel: $1/R_{eq} = \\sum 1/R_i$", n: "Resistors in parallel: reciprocals add. Voltage is the same across each; currents add. Equivalent resistance is always less than the smallest." },
    { f: "$P = VI = I^2 R = V^2/R$", n: "Power dissipated as heat in a resistor. Three equivalent forms — pick whichever you have data for. Same energy, different formulas." },
    { f: "KCL: $\\sum I_{\\text{in}} = \\sum I_{\\text{out}}$", n: "Kirchhoff's current law. Charge conservation at any junction — what flows in must flow out. Total current at a node sums to zero." },
    { f: "KVL: $\\sum V = 0$ around loop", n: "Kirchhoff's voltage law. Energy conservation around any closed loop — sum of voltage drops equals sum of voltage rises." },
    { f: "$\\tau = RC$", n: "RC time constant. Capacitor charging/discharging exponential with characteristic time $RC$. After $5\\tau$, essentially fully charged/discharged." },
    { f: "EMF: $V_T = \\varepsilon - Ir$", n: "Terminal voltage of a battery with internal resistance $r$. Under load, terminal voltage drops below the EMF $\\varepsilon$ — that's why batteries warm up under heavy use." }
  ],

  "magnetism-induction": [
    { f: "$\\vec F = q\\vec v \\times \\vec B$", n: "Magnetic force on a moving charge. Perpendicular to BOTH velocity and field. Causes circular motion when $\\vec v \\perp \\vec B$; zero work, just turning." },
    { f: "$\\vec F = I \\vec L \\times \\vec B$", n: "Force on a current-carrying wire in a magnetic field. Direction follows right-hand rule. The basis for all electric motors." },
    { f: "$\\Phi_B = \\int \\vec B \\cdot d\\vec A$", n: "Magnetic flux through a surface. Counts how many $\\vec B$ lines pierce through. Units: webers (Wb = T·m²)." },
    { f: "$\\varepsilon = -N \\dfrac{d\\Phi_B}{dt}$", n: "Faraday's law of induction. Changing flux through a coil of $N$ turns induces an EMF. The minus sign (Lenz's law): induced current opposes the change." },
    { f: "$B = \\mu_0 I/(2\\pi r)$", n: "Magnetic field around a long straight wire carrying current $I$. Inverse-distance falloff. Field circles the wire (right-hand rule)." },
    { f: "$B = \\mu_0 n I$", n: "Field inside an ideal long solenoid. Depends only on turns per unit length $n$ and current $I$ — not on radius. Nearly uniform." },
    { f: "$\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A", n: "Vacuum permeability — fundamental constant. Counterpart to $\\varepsilon_0$ on the magnetic side; together they give $c = 1/\\sqrt{\\mu_0 \\varepsilon_0}$." },
    { f: "$U_L = \\tfrac{1}{2} L I^2$", n: "Energy stored in an inductor's magnetic field. Quadratic in current. Inductors don't 'like' sudden current changes — that takes infinite power." }
  ],

  "ac-circuits": [
    { f: "$V_{rms} = V_0/\\sqrt 2$", n: "Root-mean-square voltage from peak. The DC voltage that would dissipate the same average power. US wall outlets are 120 V RMS (170 V peak)." },
    { f: "$X_L = \\omega L$", n: "Inductive reactance — frequency-dependent 'resistance' of an inductor. Higher frequency, more opposition. Inductors block high-frequency signals." },
    { f: "$X_C = 1/(\\omega C)$", n: "Capacitive reactance. Falls with frequency — capacitors pass high frequencies and block DC. Opposite behavior to inductors." },
    { f: "$Z = \\sqrt{R^2 + (X_L - X_C)^2}$", n: "Total impedance of a series RLC circuit. Inductive and capacitive reactances partially cancel — when equal, $Z = R$ (resonance)." },
    { f: "$\\tan\\phi = (X_L - X_C)/R$", n: "Phase angle between current and voltage. Pure resistor: in phase ($\\phi = 0$). Pure inductor: current lags by 90°. Pure capacitor: current leads by 90°." },
    { f: "$\\omega_0 = 1/\\sqrt{LC}$", n: "Resonant angular frequency of an LC circuit. At resonance, energy sloshes between $L$ and $C$ freely. The basis of radio tuners." },
    { f: "$Q = \\omega_0 L/R$", n: "Quality factor — how sharply tuned a resonator is. Higher $Q$ = narrower bandwidth, slower decay. Radio tuners want high $Q$; speakers usually want lower." },
    { f: "$P_{\\text{real}} = V_{rms} I_{rms} \\cos\\phi$", n: "Real (average) power delivered. Reactive component sloshes back and forth without doing net work. Power factor $\\cos\\phi$ near 1 is efficient." },
    { f: "Transformer: $V_2/V_1 = N_2/N_1$", n: "Voltage ratio in an ideal transformer = turns ratio. Step-up (more secondary turns) or step-down. Currents scale inversely to conserve power." }
  ],

  "maxwell-em": [
    { f: "$\\nabla \\cdot \\vec E = \\rho/\\varepsilon_0$", n: "Gauss's law (differential form). Electric field lines start on positive charges and end on negative ones. Charges are sources of $\\vec E$." },
    { f: "$\\nabla \\cdot \\vec B = 0$", n: "No magnetic monopoles — $\\vec B$ lines have no sources or sinks; they always form closed loops. Cut a magnet in half and you get two complete magnets, never north or south alone." },
    { f: "$\\nabla \\times \\vec E = -\\partial \\vec B/\\partial t$", n: "Faraday's law. A changing magnetic field induces a curling electric field. The mechanism behind every generator and transformer." },
    { f: "$\\nabla \\times \\vec B = \\mu_0 \\vec J + \\mu_0 \\varepsilon_0 \\partial \\vec E/\\partial t$", n: "Ampère-Maxwell law. Currents AND changing $\\vec E$ both create curling $\\vec B$. Maxwell added the displacement-current term, enabling EM waves." },
    { f: "$c = 1/\\sqrt{\\mu_0 \\varepsilon_0} \\approx 3 \\times 10^8$ m/s", n: "Speed of light derived from purely electrostatic and magnetic constants. Maxwell's stunning realization: light IS an electromagnetic wave." },
    { f: "$\\vec S = \\vec E \\times \\vec B/\\mu_0$", n: "Poynting vector — energy flow density of the EM field (W/m²). Direction = direction of energy flow; magnitude = power per area." },
    { f: "$Z_0 = \\sqrt{\\mu_0/\\varepsilon_0} \\approx 377$ Ω", n: "Impedance of free space. Ratio of $E$ to $B$ in an EM wave (with $c$ factor). Matters for antenna design." },
    { f: "Radiation pressure: $P_{\\text{rad}} = I/c$", n: "Light exerts pressure on absorbing surfaces. Double if fully reflecting. The basis of solar sails — slow but free propulsion." }
  ],

  "special-relativity": [
    { f: "$\\gamma = \\dfrac{1}{\\sqrt{1 - v^2/c^2}}$", n: "Lorentz factor — the ubiquitous relativistic correction. Equals 1 at low speeds, blows up as $v \\to c$. Sets the scale of all relativistic effects." },
    { f: "$\\Delta t = \\gamma \\Delta t_0$", n: "Time dilation. Moving clocks tick slower as seen from a stationary frame. $\\Delta t_0$ is the proper time (clock at rest with the event); $\\Delta t$ is what you measure." },
    { f: "$L = L_0/\\gamma$", n: "Length contraction. Moving objects appear shorter along the direction of motion. $L_0$ is the proper (rest) length. Width perpendicular to motion is unchanged." },
    { f: "$E = \\gamma m c^2$", n: "Total relativistic energy. At rest, reduces to $E = mc^2$. At high speeds, dominated by kinetic energy; takes infinite energy to reach $c$." },
    { f: "$E^2 = (pc)^2 + (mc^2)^2$", n: "Energy-momentum relation. The invariant version of energy — valid for any frame. For photons ($m = 0$): $E = pc$." },
    { f: "$p = \\gamma m v$", n: "Relativistic momentum. Same as classical at low speeds; diverges as $v \\to c$. Conservation laws hold with this definition, not the classical $mv$." },
    { f: "$u' = \\dfrac{u - v}{1 - uv/c^2}$", n: "Relativistic velocity addition. Two velocities never combine to exceed $c$. At low speeds, reduces to $u - v$." },
    { f: "$ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2$", n: "Spacetime interval — invariant under Lorentz transformations. The minus sign on time is what makes time fundamentally different from space." }
  ],

  "general-relativity": [
    { f: "$G_{\\mu\\nu} = \\dfrac{8\\pi G}{c^4} T_{\\mu\\nu}$", n: "Einstein field equations. Curvature on the left, matter/energy on the right. 'Spacetime tells matter how to move; matter tells spacetime how to curve.'" },
    { f: "$G_{\\mu\\nu} = R_{\\mu\\nu} - \\tfrac{1}{2} R g_{\\mu\\nu}$", n: "Einstein tensor — the geometric side. Constructed from Ricci tensor and Ricci scalar so that its divergence is automatically zero (energy-momentum conservation)." },
    { f: "$r_s = 2GM/c^2$", n: "Schwarzschild radius — the event horizon of a non-rotating black hole. For the Sun: ~3 km. For Earth: ~9 mm." },
    { f: "Geodesic: $\\ddot x^\\mu + \\Gamma^\\mu_{\\alpha\\beta} \\dot x^\\alpha \\dot x^\\beta = 0$", n: "Geodesic equation — paths of freely falling particles in curved spacetime. Christoffel symbols $\\Gamma$ encode the curvature corrections." },
    { f: "$d\\tau = \\sqrt{1 - 2GM/(rc^2)}\\,dt$", n: "Gravitational time dilation. Clocks near massive bodies run slower than far-away clocks. GPS satellites must correct for this every second." },
    { f: "$v = H_0 d$", n: "Hubble's law. Distant galaxies recede at speed proportional to distance. Discovered by Hubble (1929). Reveals an expanding universe." },
    { f: "$H_0 \\approx 70$ km/s/Mpc", n: "Hubble constant (current value, with tension between methods). Inverse gives a rough age of the universe: ~14 billion years." }
  ],

  "lagrangian-hamiltonian": [
    { f: "$L = T - V$", n: "Lagrangian. Kinetic energy minus potential energy — a scalar that completely determines the dynamics. The fundamental object in modern physics." },
    { f: "$\\dfrac{d}{dt}\\dfrac{\\partial L}{\\partial \\dot q} - \\dfrac{\\partial L}{\\partial q} = 0$", n: "Euler-Lagrange equations. Equivalent to Newton's laws but in any generalized coordinates. Constraints handled automatically." },
    { f: "$p = \\partial L/\\partial \\dot q$", n: "Generalized momentum conjugate to coordinate $q$. Reduces to $mv$ for Cartesian coordinates but generalizes to any chosen variable." },
    { f: "$H = \\sum p \\dot q - L$", n: "Hamiltonian (Legendre transform of $L$). Often equals total energy. Foundation for both classical Hamilton's equations and quantum mechanics." },
    { f: "$\\dot q = \\partial H/\\partial p, \\; \\dot p = -\\partial H/\\partial q$", n: "Hamilton's equations of motion. Two first-order equations per coordinate (vs. one second-order). Symmetric in $q$ and $p$ — phase space view." },
    { f: "$\\{f, g\\} = \\sum \\dfrac{\\partial f}{\\partial q} \\dfrac{\\partial g}{\\partial p} - \\dfrac{\\partial f}{\\partial p} \\dfrac{\\partial g}{\\partial q}$", n: "Poisson bracket — the classical precursor to the quantum commutator. $\\{q, p\\} = 1$ becomes $[\\hat q, \\hat p] = i\\hbar$ in QM." },
    { f: "$S = \\int L\\,dt$", n: "Action — integral of the Lagrangian over time. Nature minimizes (or stationarizes) the action. The principle behind everything from optics to QFT." },
    { f: "Noether's theorem", n: "Every continuous symmetry of the action gives a conserved quantity. Translation ⇒ momentum, rotation ⇒ angular momentum, time-shift ⇒ energy." }
  ],

  "statistical-mechanics": [
    { f: "$Z = \\sum_i e^{-\\beta E_i}$", n: "Partition function. Sum of Boltzmann factors over all microstates. Every thermodynamic quantity can be derived from $Z$." },
    { f: "$P_i = e^{-\\beta E_i}/Z$", n: "Boltzmann distribution. Probability of being in microstate $i$ at temperature $T = 1/(k_B \\beta)$. Higher-energy states are exponentially suppressed." },
    { f: "$\\langle E \\rangle = -\\partial \\ln Z/\\partial \\beta$", n: "Mean energy from the partition function. A clean recipe — take a single derivative of $\\ln Z$ to extract macroscopic energy." },
    { f: "$F = -k_B T \\ln Z$", n: "Helmholtz free energy. Drives spontaneous change at constant $T$ and $V$. Equilibrium minimizes $F$." },
    { f: "$S = k_B \\ln W$", n: "Boltzmann's entropy formula — engraved on his tomb. $W$ is the number of microstates consistent with the macroscopic state. Entropy is statistical, not mysterious." },
    { f: "Fermi-Dirac: $\\dfrac{1}{e^{(E-\\mu)/k_B T} + 1}$", n: "Occupation number for fermions (electrons, protons, neutrons). At $T = 0$, fills states up to Fermi energy; above it, all empty." },
    { f: "Bose-Einstein: $\\dfrac{1}{e^{(E-\\mu)/k_B T} - 1}$", n: "Occupation for bosons (photons, He-4 atoms). Can pile up in the same state — leading to lasers, superfluids, BEC." },
    { f: "Equipartition: $\\tfrac{1}{2} k_B T$ per quadratic DOF", n: "Classical equipartition. Each independent quadratic energy term (translation, rotation, vibration) shares $\\tfrac{1}{2} k_B T$ on average. Quantum mechanics modifies this at low $T$." }
  ],

  "qm-foundations": [
    { f: "$i\\hbar \\partial_t \\psi = \\hat H \\psi$", n: "Time-dependent Schrödinger equation. Governs the evolution of the wavefunction $\\psi(\\vec r, t)$. The fundamental equation of non-relativistic QM." },
    { f: "$\\hat H = \\hat p^2/(2m) + V$", n: "Quantum Hamiltonian — operator version of kinetic + potential energy. Eigenvalues are allowed energies; eigenvectors are stationary states." },
    { f: "$\\hat p = -i\\hbar \\partial_x$", n: "Momentum operator in the position representation. Derivative + a factor of $-i\\hbar$. Generates spatial translations." },
    { f: "$|\\psi|^2$", n: "Probability density. The wavefunction $\\psi$ is complex and not directly observable; $|\\psi|^2$ gives the probability density of finding the particle at a position." },
    { f: "$\\langle \\hat O \\rangle = \\int \\psi^* \\hat O \\psi\\,dx$", n: "Expectation value of an observable. Sandwich the operator between $\\psi^*$ and $\\psi$, integrate. Repeated measurements average to this." },
    { f: "$[\\hat x, \\hat p] = i\\hbar$", n: "Canonical commutator. Position and momentum operators don't commute — the seed of nearly all quantum strangeness, including the uncertainty principle." },
    { f: "$\\sigma_x \\sigma_p \\geq \\hbar/2$", n: "Heisenberg uncertainty principle. You cannot simultaneously know position and momentum precisely. Not a measurement issue — a fundamental feature of quantum reality." },
    { f: "$\\hbar = 1.055 \\times 10^{-34}$ J·s", n: "Reduced Planck constant ($h/2\\pi$). Sets the scale of quantum effects. So small that quantum effects are imperceptible at macroscopic scales." }
  ],

  "qm-1d": [
    { f: "Infinite well: $E_n = \\dfrac{n^2 \\pi^2 \\hbar^2}{2mL^2}$", n: "Energy levels in a 1D box of width $L$. Quantized like a guitar string's standing-wave frequencies. Quadratic spacing — levels spread out as $n$ rises." },
    { f: "Infinite well wave: $\\psi_n = \\sqrt{2/L}\\sin(n\\pi x/L)$", n: "Normalized eigenstates. Sine waves with $n$ half-wavelengths fitting in the box. Number of nodes inside = $n - 1$." },
    { f: "Harmonic oscillator: $E_n = \\hbar\\omega(n + 1/2)$", n: "Equally spaced levels — a unique feature of the harmonic oscillator. Foundation of QFT (every field mode is an oscillator)." },
    { f: "Zero-point: $E_0 = \\hbar\\omega/2$", n: "Ground-state energy is nonzero. The oscillator can't sit at rest — uncertainty principle forbids it. Leads to Casimir effect and vacuum fluctuations." },
    { f: "Tunneling: $T \\sim e^{-2\\kappa a}$, $\\kappa = \\sqrt{2m(V_0 - E)}/\\hbar$", n: "Probability of crossing a barrier classically forbidden. Exponential suppression with barrier width — but never zero. Source of radioactive decay and STM imaging." },
    { f: "Free particle: $E = \\hbar^2 k^2/(2m)$", n: "Free-particle dispersion relation. Plane waves $e^{ikx}$ with definite momentum $\\hbar k$. Continuous spectrum (not quantized — no boundaries)." },
    { f: "Delta well: one bound state for any depth", n: "An attractive delta function potential, no matter how weak, has exactly one bound state. 1D quantum mechanics is generous about binding." }
  ],

  "atomic-physics": [
    { f: "$a_0 = \\dfrac{4\\pi\\varepsilon_0 \\hbar^2}{m_e e^2} \\approx 0.529$ Å", n: "Bohr radius — characteristic size of a hydrogen atom. Sets the length scale for all atomic physics." },
    { f: "$E_n = -13.6/n^2$ eV", n: "Hydrogen energy levels. Negative = bound. Ground state ($n=1$): $-13.6$ eV — the ionization energy of hydrogen." },
    { f: "$1/\\lambda = R(1/n_1^2 - 1/n_2^2)$", n: "Rydberg formula for hydrogen spectral lines. $R \\approx 1.097 \\times 10^7$ m⁻¹. Predicted before quantum mechanics; explained after." },
    { f: "Quantum numbers: $n, \\ell, m, m_s$", n: "Four numbers fully label an atomic electron. Principal ($n$), orbital ($\\ell$), magnetic ($m$), spin ($m_s = \\pm 1/2$). Generate the periodic table structure." },
    { f: "$\\ell = 0, 1, \\ldots, n - 1$", n: "Orbital quantum number constraint. $\\ell = 0$ s-orbital, $1$ p, $2$ d, $3$ f. The s/p/d/f spectroscopic labels." },
    { f: "Spin: $s = 1/2$", n: "Intrinsic angular momentum of the electron. Gives only two values: spin-up and spin-down. The electron is a fermion (half-integer spin)." },
    { f: "Pauli: no two electrons in identical state", n: "Pauli exclusion principle. No two fermions can share all four quantum numbers. Determines shell structure and the periodic table." }
  ],

  "solid-state": [
    { f: "$14$ Bravais lattices in 3D", n: "Exhaustive list of distinct repeating lattice symmetries in 3D. All crystalline solids are based on one of these 14 — plus possibly multiple atoms per unit cell." },
    { f: "$E_F = \\dfrac{\\hbar^2 (3\\pi^2 n)^{2/3}}{2m}$", n: "Fermi energy of a free-electron gas at $T = 0$ — highest occupied energy. Sets the energy scale of metallic behavior." },
    { f: "Drude: $\\sigma = ne^2 \\tau/m$", n: "Drude conductivity. Treats electrons as a classical gas bouncing off ions every $\\tau$ seconds. Crude but qualitatively right." },
    { f: "Si gap: $\\approx 1.1$ eV", n: "Silicon's band gap — small enough to thermally excite some electrons, large enough to remain mostly insulating. The compromise that enables electronics." },
    { f: "Hall coefficient: $R_H = 1/(nq)$", n: "Hall effect: transverse voltage in a current-carrying conductor in a magnetic field. $R_H$ reveals carrier density and sign (electron vs hole)." },
    { f: "Wiedemann-Franz: $\\kappa/\\sigma T = \\pi^2 k_B^2/(3e^2)$", n: "Universal ratio of thermal to electrical conductivity in metals. Both come from the same electrons — so the ratio is fixed." },
    { f: "Debye specific heat (low T): $C_V \\propto T^3$", n: "Low-temperature heat capacity of solids — universal $T^3$ behavior from phonons. Above the Debye temperature, classical equipartition takes over ($3R$ per mole)." }
  ],

  "nuclear": [
    { f: "$BE = (Zm_p + Nm_n - M)c^2$", n: "Binding energy. Mass defect (difference between free nucleon mass and actual nuclear mass) times $c^2$. Bigger BE per nucleon = more stable." },
    { f: "$N(t) = N_0 e^{-\\lambda t}$", n: "Exponential decay law. Each unstable nucleus decays independently at the same rate. The number remaining drops exponentially with time." },
    { f: "$t_{1/2} = \\ln 2/\\lambda$", n: "Half-life — time for half the nuclei to decay. Independent of the initial number. Range: nanoseconds (short-lived) to billions of years (U-238)." },
    { f: "$A = \\lambda N$", n: "Activity — decays per second. Measured in becquerels (Bq) or curies (Ci). Equal to the product of decay constant and number present." },
    { f: "$r \\approx 1.2 A^{1/3}$ fm", n: "Nuclear radius as a function of mass number $A$. Volume scales linearly with $A$ — nuclear matter has essentially constant density." },
    { f: "Most stable: Fe-56", n: "Iron-56 has the highest binding energy per nucleon. Fusion of lighter elements releases energy; fission of heavier elements also releases energy. Both 'roll downhill' to iron." },
    { f: "Fission U-235: $\\approx 200$ MeV/event", n: "Energy released per fission event. Millions of times more than chemical reactions per atom — that's why nuclear power and weapons are so potent." },
    { f: "Magic numbers: $2, 8, 20, 28, 50, 82, 126$", n: "Nucleon counts that produce extra-stable nuclei. Analog of noble-gas electron numbers — closed nuclear shells. Helium-4, oxygen-16, calcium-40 are doubly magic." }
  ],

  "particle-physics": [
    { f: "Standard Model: $SU(3) \\times SU(2) \\times U(1)$", n: "Gauge group of the Standard Model. SU(3) is color (strong); SU(2)×U(1) breaks to U(1) of electromagnetism via the Higgs mechanism." },
    { f: "Quarks: u, d, c, s, t, b ($Q = +2/3$ or $-1/3$)", n: "Six quark flavors in three generations. Up-type ($u, c, t$) have charge $+2/3$; down-type ($d, s, b$) have $-1/3$. Never seen alone — always confined." },
    { f: "Leptons: e, μ, τ + neutrinos", n: "Six leptons in three generations. Electron, muon, tau — each with a corresponding (nearly massless) neutrino. Don't feel the strong force." },
    { f: "Gauge bosons: γ, $W^\\pm$, Z, g", n: "Force carriers. Photon (EM), $W^\\pm$ and $Z$ (weak), 8 gluons (strong). Each emerges from a gauge symmetry." },
    { f: "Higgs mass: $\\approx 125$ GeV", n: "Mass of the Higgs boson, discovered at the LHC in 2012. The Higgs field gives masses to other elementary particles via the Higgs mechanism." },
    { f: "Proton: uud; Neutron: udd", n: "Quark content of nucleons. Total charge: proton +1 (= $\\tfrac{2}{3} + \\tfrac{2}{3} - \\tfrac{1}{3}$), neutron 0 (= $\\tfrac{2}{3} - \\tfrac{1}{3} - \\tfrac{1}{3}$)." },
    { f: "$\\alpha \\approx 1/137$ at low energy", n: "Fine-structure constant — dimensionless strength of the electromagnetic interaction. Mysteriously close to $1/137$ at low energy; rises slowly with energy." }
  ],

  "astrophysics-cosmology": [
    { f: "$L = 4\\pi R^2 \\sigma T^4$", n: "Stefan-Boltzmann law. A star's luminosity depends on its surface area and surface temperature to the fourth power. Hot stars are dramatically brighter." },
    { f: "$\\lambda_{\\max} T \\approx 2.9 \\times 10^{-3}$ m·K", n: "Wien's displacement law. Peak emission wavelength of a blackbody is inversely proportional to temperature. Sun (5800 K) peaks at green; cool stars peak at red." },
    { f: "$v = H_0 d$", n: "Hubble's law. Distant galaxies recede at speed proportional to distance. The signature of an expanding universe." },
    { f: "Universe age: $\\approx 13.8$ Gyr", n: "Age of the universe from the Big Bang. Inferred from $1/H_0$ corrected for matter and dark energy content." },
    { f: "$T_{\\text{CMB}} \\approx 2.725$ K", n: "Cosmic microwave background temperature. Redshifted from $\\sim 3000$ K at recombination to today's microwave temperature. Astonishingly uniform." },
    { f: "$\\Omega_m \\approx 0.32, \\Omega_\\Lambda \\approx 0.68$", n: "Cosmological density parameters. Matter $\\Omega_m$ (mostly dark) and dark energy $\\Omega_\\Lambda$ sum to ~1: spatially flat universe." },
    { f: "$L_\\odot \\approx 3.8 \\times 10^{26}$ W", n: "Solar luminosity. The Sun radiates this constantly — and has been doing so for 4.6 billion years. Most of it from p-p chain fusion." },
    { f: "Chandrasekhar: $\\approx 1.4 M_\\odot$", n: "Chandrasekhar mass — maximum white dwarf mass. Beyond it, electron degeneracy pressure can't support against gravity. Triggers Type Ia supernovae." }
  ],

  "plasma-physics": [
    { f: "$\\lambda_D = \\sqrt{\\dfrac{\\varepsilon_0 k_B T}{n e^2}}$", n: "Debye length — distance over which charges in a plasma screen out external fields. Beyond it, plasma is quasi-neutral. Foundational plasma scale." },
    { f: "$\\omega_p = \\sqrt{\\dfrac{n e^2}{\\varepsilon_0 m_e}}$", n: "Plasma frequency — electron oscillation rate around heavy ions. EM waves below $\\omega_p$ can't propagate — why the ionosphere reflects AM radio." },
    { f: "$\\omega_c = eB/m$", n: "Cyclotron frequency. Charged particles in a magnetic field spiral at this rate. Used in cyclotrons, mass spectrometers, and confinement physics." },
    { f: "$r_L = m v_\\perp/(qB)$", n: "Larmor (gyro) radius — radius of circular motion in a magnetic field. Bigger field = tighter spiral. Determines plasma confinement." },
    { f: "Lawson: $n\\tau T > 5 \\times 10^{21}$ keV·s/m³", n: "Lawson criterion for fusion ignition. Product of density, confinement time, and temperature must exceed this threshold. ITER aims to achieve it." },
    { f: "MHD: combines fluid + Maxwell", n: "Magnetohydrodynamics. Treats plasma as a fluid that also conducts current and feels magnetic forces. Foundation of much astrophysics and fusion engineering." },
    { f: "Alfvén speed: $v_A = B/\\sqrt{\\mu_0 \\rho}$", n: "Speed of magnetic-pressure waves in a plasma. Stronger field or lighter plasma ⇒ faster waves. Important in the solar corona and fusion devices." }
  ],

  "fluid-dynamics": [
    { f: "$\\rho(\\partial_t \\vec v + \\vec v \\cdot \\nabla \\vec v) = -\\nabla p + \\mu \\nabla^2 \\vec v + \\rho \\vec g$", n: "Navier-Stokes equation — Newton's 2nd law applied to a fluid element. Pressure gradient, viscous damping, gravity. The nonlinear $\\vec v \\cdot \\nabla \\vec v$ makes it brutally hard to solve." },
    { f: "$\\nabla \\cdot \\vec v = 0$", n: "Incompressibility constraint — velocity field has zero divergence. Valid for liquids and low-Mach gases. Reduces flow problems significantly." },
    { f: "$Re = \\rho v L/\\mu$", n: "Reynolds number — ratio of inertial to viscous forces. Low $Re$: viscous flow (smooth, predictable). High $Re$: inertia dominates (turbulent, chaotic)." },
    { f: "$Re < 2300$: laminar in pipe", n: "Transition Reynolds number for pipe flow. Below: laminar. Above: turbulent. Most engineering flows are turbulent." },
    { f: "Stokes drag: $F = 6\\pi\\mu r v$", n: "Drag on a sphere at very low Reynolds number. Linear in velocity (not quadratic like high-$Re$ drag). Governs bacteria, dust, slow settling." },
    { f: "$\\Gamma = \\oint \\vec v \\cdot d\\vec r$", n: "Circulation — line integral of velocity around a closed loop. Measures net swirl enclosed. Related to lift on an airfoil via Kutta-Joukowski." },
    { f: "Kolmogorov: $\\eta = (\\nu^3/\\epsilon)^{1/4}$", n: "Kolmogorov dissipation scale — smallest eddy size in turbulence. Energy cascades down from large eddies to this scale, where viscosity finally turns it into heat." }
  ],

  "continuum-elasticity": [
    { f: "$\\sigma = F/A$", n: "Stress. Force per unit area. Units: pascals (N/m²). Tells you how concentrated the load is — the same 100 N applied to a thumbtack vs. an elephant foot creates wildly different stresses." },
    { f: "$\\varepsilon = \\Delta L/L$", n: "Strain. Fractional deformation — change in length over original length. Dimensionless. A 1-meter rod stretched by 1 mm has strain $10^{-3}$." },
    { f: "$\\sigma = E\\varepsilon$", n: "Hooke's law for solids. Stress is proportional to strain in the elastic regime — the material behaves like a spring. The proportionality constant $E$ is YOUNG'S MODULUS, the material's stiffness." },
    { f: "Steel: $E \\approx 200$ GPa", n: "Steel's Young's modulus. For comparison: aluminum ~70 GPa, wood ~10 GPa, rubber ~0.01 GPa. Big $E$ means stiff: takes a lot of stress to produce noticeable strain." },
    { f: "Poisson's ratio: $-\\varepsilon_{\\text{trans}}/\\varepsilon_{\\text{axial}}$", n: "When you stretch a material in one direction, it usually shrinks perpendicular. POISSON'S RATIO is the ratio of transverse contraction to axial extension. Typical values: $\\sim 0.3$ for most metals, $0.5$ for incompressible rubber, can be negative for exotic auxetic materials." },
    { f: "$K = -V\\dfrac{\\partial P}{\\partial V}$", n: "Bulk modulus. Measures resistance to UNIFORM COMPRESSION (squeezing from all sides). The minus sign is because increasing pressure DECREASES volume. Big $K$ ⇒ hard to compress (steel, diamond). Small $K$ ⇒ easily compressed (gases)." },
    { f: "Wave speed: $v = \\sqrt{E/\\rho}$", n: "Longitudinal wave (sound) speed in a thin rod: stiffness over density. Stiffer or lighter materials carry waves faster. Steel: ~5000 m/s. Air: ~343 m/s. The same formula type recurs across physics: wave speed ~ $\\sqrt{\\text{restoring}/\\text{inertia}}$." },
    { f: "Euler buckling: $P_{cr} = \\pi^2 EI/L^2$", n: "Critical compressive load above which a slender column buckles instead of just compressing. $I$ is the cross-section's moment of inertia, $L$ is the column length. The $1/L^2$ dependence explains why long thin pillars buckle while short stubby ones just crush. Essential for building design." }
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
    { f: "$[L_i, L_j] = i\\hbar\\epsilon_{ijk} L_k$", n: "ANGULAR MOMENTUM ALGEBRA. The three components $L_x, L_y, L_z$ DO NOT COMMUTE — measuring one disturbs the others. The commutator of any two yields $i\\hbar$ times the third (with Levi-Civita symbol $\\epsilon_{ijk}$ tracking signs). This non-commutativity is the entire reason angular momentum is quantized: it forces eigenvalues to come in discrete steps." },
    { f: "$L^2 |\\ell, m\\rangle = \\hbar^2 \\ell(\\ell+1)|\\ell, m\\rangle$", n: "Eigenvalue of the TOTAL angular momentum squared. State $|\\ell, m\\rangle$ has $L^2$ eigenvalue $\\hbar^2 \\ell(\\ell+1)$, where $\\ell = 0, 1, 2, \\ldots$ The $\\ell(\\ell+1)$ rather than $\\ell^2$ is a quantum surprise — comes from the algebra. The QUANTUM NUMBER $\\ell$ labels which 'shell' of angular momentum you're in." },
    { f: "$L_z |\\ell, m\\rangle = \\hbar m |\\ell, m\\rangle$", n: "Eigenvalue of $L_z$ (z-component of angular momentum). Quantum number $m$ takes integer values from $-\\ell$ to $\\ell$. Tells you the projection of the angular-momentum vector onto the z-axis. The fact that only certain projections are allowed is space quantization — observed in the Stern-Gerlach experiment." },
    { f: "$m = -\\ell, \\ldots, \\ell$ ($2\\ell + 1$ values)", n: "For each shell $\\ell$, there are $2\\ell + 1$ allowed values of $m$ (the magnetic quantum number). So $\\ell = 0$: 1 state (s-orbital). $\\ell = 1$: 3 states (p-orbitals). $\\ell = 2$: 5 states (d-orbitals). This explains the structure of the periodic table." },
    { f: "$L_\\pm |\\ell, m\\rangle = \\hbar\\sqrt{\\ell(\\ell+1) - m(m\\pm 1)}|\\ell, m\\pm 1\\rangle$", n: "LADDER OPERATORS $L_+ = L_x + iL_y$ and $L_- = L_x - iL_y$. They raise or lower the $m$ quantum number by 1, climbing or descending the ladder of states. The square-root coefficient ensures the resulting state is properly normalized. Repeatedly applying $L_+$ eventually annihilates the state (you reach $m = \\ell$)." },
    { f: "Pauli: $\\sigma_x, \\sigma_y, \\sigma_z$", n: "PAULI MATRICES — the three $2 \\times 2$ matrices that represent SPIN-1/2 operators (spin in the x, y, z directions). Anti-commuting and traceless. They generate all quantum-mechanical descriptions of two-level systems — every qubit is described with Pauli matrices. The spin operator is $\\vec S = \\tfrac{\\hbar}{2} \\vec\\sigma$." },
    { f: "Spin-1/2 ⊗ Spin-1/2 = singlet ⊕ triplet", n: "ADDITION of two spin-1/2 angular momenta. Combine them: you get a SINGLET (total spin 0, antisymmetric, one state) and a TRIPLET (total spin 1, symmetric, three states $m = -1, 0, +1$). Four states total = $2 \\times 2$. This decomposition is crucial in atomic physics (Pauli exclusion + spin combinations) and chemistry (singlet vs. triplet states of molecules)." }
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
    { f: "$H = H_0 + \\lambda H'$", n: "PERTURBATION setup. $H_0$ is a Hamiltonian you can solve EXACTLY (free particle, harmonic oscillator, hydrogen atom...). $\\lambda H'$ is a small extra term ($\\lambda$ tracks 'order of smallness'). The hope: expand the answer as a power series in $\\lambda$, computing the first few terms." },
    { f: "$E_n^{(1)} = \\langle n | H' | n \\rangle$", n: "First-order energy correction: average value of the perturbation in the unperturbed state $|n\\rangle$. Remarkably easy formula — just compute one matrix element. Often gives a respectable estimate without much work." },
    { f: "$|n^{(1)}\\rangle = \\sum_{m \\neq n} \\dfrac{\\langle m | H' | n \\rangle}{E_n - E_m} |m\\rangle$", n: "First-order STATE correction: the perturbation slightly mixes other unperturbed states $|m\\rangle$ into $|n\\rangle$, with weights determined by matrix elements divided by energy gaps. States near in energy mix most; far-away states contribute little." },
    { f: "$E_n^{(2)} = \\sum_{m \\neq n} \\dfrac{|H'_{mn}|^2}{E_n - E_m}$", n: "Second-order energy correction. Note: always pushes the ground state DOWN (denominators negative for the ground state). Sum over all other states. Often needed when first-order vanishes by symmetry (e.g., Stark effect on hydrogen ground state)." },
    { f: "Fermi golden rule: $\\Gamma_{i \\to f} = \\dfrac{2\\pi}{\\hbar}|\\langle f | H' | i \\rangle|^2 \\rho(E_f)$", n: "Transition rate from initial state $|i\\rangle$ to final state $|f\\rangle$ under a perturbation. Used for atomic transitions, nuclear decays, scattering cross sections — the rate at which the system jumps between quantum states. $\\rho(E_f)$ is the density of final states." },
    { f: "Degenerate: diagonalize $H'$ in degenerate subspace first", n: "When unperturbed states share the same energy (degeneracy), the basic formulas blow up (zero in the denominator). The fix: within each degenerate subspace, first DIAGONALIZE the perturbation matrix; that picks out the right basis in which standard perturbation theory works." }
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
    { f: "$|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle, \\; |\\alpha|^2 + |\\beta|^2 = 1$", n: "A QUBIT is a 2-state quantum system. Unlike a classical bit (definitely 0 or 1), a qubit is a SUPERPOSITION — both at once, weighted by complex amplitudes $\\alpha$ and $\\beta$. The probabilities $|\\alpha|^2$ and $|\\beta|^2$ of measuring 0 or 1 must sum to 1." },
    { f: "Bloch sphere: $|\\psi\\rangle = \\cos(\\theta/2)|0\\rangle + e^{i\\phi}\\sin(\\theta/2)|1\\rangle$", n: "Geometric picture of a qubit: every pure state corresponds to a point on the surface of a sphere. North pole = $|0\\rangle$, south pole = $|1\\rangle$, equator = equal superpositions. Lets you visualize qubit operations as rotations." },
    { f: "Bell: $|\\Phi^\\pm\\rangle, |\\Psi^\\pm\\rangle$", n: "Four BELL STATES — the maximally entangled two-qubit states. Example: $|\\Phi^+\\rangle = (|00\\rangle + |11\\rangle)/\\sqrt 2$ — measuring either qubit guarantees the same result on the other, instantly, no matter how far apart. The phenomenon Einstein called 'spooky action at a distance.'" },
    { f: "Hadamard: $H|0\\rangle = (|0\\rangle + |1\\rangle)/\\sqrt 2$", n: "The HADAMARD gate creates a uniform superposition from $|0\\rangle$ — the most basic 'quantum-ifying' operation. Applied to all qubits at the start of an algorithm, it puts the computer into a superposition over ALL possible inputs simultaneously. This is where quantum parallelism begins." },
    { f: "CNOT: $|c\\rangle|t\\rangle \\to |c\\rangle|t \\oplus c\\rangle$", n: "Controlled-NOT gate. If the CONTROL qubit $c$ is 1, FLIP the target qubit $t$; otherwise leave it. Combined with single-qubit gates, CNOT is universal — any quantum computation can be built from these pieces. Also entangles qubits when control is in superposition." },
    { f: "No-cloning: $\\nexists U : U|\\psi\\rangle|0\\rangle = |\\psi\\rangle|\\psi\\rangle$", n: "NO-CLONING THEOREM: no quantum operation can take an arbitrary unknown state and produce two copies of it. Provable directly from linearity of QM. Means quantum information is fundamentally different from classical — and it's why quantum cryptography (BB84) can detect eavesdropping." },
    { f: "Shor's algorithm: polynomial factoring", n: "On a quantum computer, Shor's algorithm factors $N$-digit numbers in $O((\\log N)^3)$ time — polynomial in the number of digits. The best classical algorithm requires exponential time. If a large quantum computer is built, RSA cryptography (which assumes factoring is hard) is broken. This is the most famous quantum-speedup result." },
    { f: "Grover: $O(\\sqrt N)$ search", n: "Grover's algorithm searches an unstructured database of $N$ items in $O(\\sqrt N)$ steps, vs. $O(N)$ classically. Quadratic speedup — less dramatic than Shor's exponential one, but applies to a much wider class of problems. The square-root is provably optimal for unstructured search." }
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
    { f: "$T_c$: critical temperature", n: "CRITICAL TEMPERATURE — the threshold below which a material becomes superconducting (zero electrical resistance, expulsion of magnetic fields). Typical values: conventional SC like aluminum: ~1 K. High-$T_c$ cuprates: ~100 K (above liquid nitrogen!). Room-temperature superconductors remain the holy grail of materials science." },
    { f: "Meissner: $\\vec B = 0$ inside", n: "MEISSNER EFFECT. A superconductor doesn't just resist magnetic field penetration — it EXPELS magnetic fields completely from its interior. This is what makes magnetic levitation possible: a superconductor floating above a magnet (or vice versa). Distinguishes SC from a 'perfect conductor' — perfect conductors trap whatever field was inside; superconductors push it out." },
    { f: "$\\lambda_L$: penetration depth", n: "LONDON PENETRATION DEPTH — distance over which an external magnetic field decays exponentially into the superconductor before being fully expelled. Typically ~100 nm. Small penetration depth = strong field expulsion. Goes to infinity at $T_c$ (where the SC phase ends)." },
    { f: "$\\xi$: coherence length", n: "COHERENCE LENGTH — the spatial extent of a Cooper pair. Roughly 'how big' the bound electron pair is. Conventional SCs: ~100 nm. High-$T_c$ cuprates: ~1 nm (much smaller). The ratio $\\lambda_L/\\xi$ determines whether a superconductor is Type I (expels fields completely) or Type II (allows quantized magnetic flux through as vortices)." },
    { f: "$2\\Delta(0) \\approx 3.5\\, k_B T_c$", n: "BCS energy GAP. The minimum energy required to break a Cooper pair (split it back into two electrons). $\\Delta(0)$ is the gap at zero temperature; the ratio $2\\Delta/k_B T_c \\approx 3.5$ is a universal prediction of BCS theory. The energy gap is what protects superconductivity from thermal fluctuations — until you heat enough to bridge it." },
    { f: "Cooper pair charge: $2e$", n: "Two electrons in a superconductor BIND together (via phonon exchange) into a COOPER PAIR with total charge $2e$. These pairs behave as bosons (integer total spin) and condense into a single quantum ground state — that's what enables zero-resistance flow. Quantum mechanics at macroscopic scales." },
    { f: "Josephson AC: $\\omega = 2eV/\\hbar$", n: "AC JOSEPHSON EFFECT. Apply a DC voltage $V$ across a thin barrier between two superconductors, and you get an alternating supercurrent at frequency $\\omega = 2eV/\\hbar$. The factor of $2e$ comes from Cooper pair tunneling. Used as a voltage standard: measure the frequency, you know the voltage to extraordinary precision." },
    { f: "Flux quantum: $\\Phi_0 = h/(2e)$", n: "MAGNETIC FLUX QUANTUM. In a superconductor, magnetic flux can only exist in discrete multiples of $\\Phi_0 = h/(2e) \\approx 2 \\times 10^{-15}$ Wb. The $2e$ again signals Cooper pair charge. SQUIDs (Superconducting Quantum Interference Devices) exploit this quantization for ultra-sensitive magnetic field measurements." }
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
