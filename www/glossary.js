// Plain-language definitions of technical terms used in each topic.
// Each entry: { term: "...", def: "1-2 sentence explanation" }
window.GLOSSARY = {

  // ===== MATH =====

  "arithmetic-foundations": [
    { term: "Operation", def: "An action on numbers — $+$, $-$, $\\times$, $\\div$, or raising to a power." },
    { term: "Exponent", def: "The small number written above another that says how many times to multiply it by itself. In $2^3$, the $3$ is the exponent." },
    { term: "Absolute value", def: "How far a number is from zero, ignoring direction. $|−5| = 5$." },
    { term: "Prime number", def: "A whole number greater than 1 whose only divisors are 1 and itself. $2, 3, 5, 7, 11, \\ldots$" },
    { term: "Factor", def: "A number that divides another evenly. The factors of $12$ are $1, 2, 3, 4, 6, 12$." },
    { term: "GCD", def: "Greatest Common Divisor — the largest number that divides both of two given numbers." },
    { term: "LCM", def: "Least Common Multiple — the smallest positive number that's a multiple of both given numbers." }
  ],

  "fractions-percentages": [
    { term: "Fraction", def: "Part of a whole, written $a/b$. The top counts how many pieces; the bottom how many equal pieces a whole was cut into." },
    { term: "Numerator", def: "The TOP number of a fraction — how many pieces you have." },
    { term: "Denominator", def: "The BOTTOM number of a fraction — how many equal pieces make a whole." },
    { term: "Common denominator", def: "A shared bottom for two fractions, needed before you can add or subtract them." },
    { term: "Reciprocal", def: "A fraction flipped upside down. Reciprocal of $\\tfrac{2}{3}$ is $\\tfrac{3}{2}$. Used when dividing." },
    { term: "Percent", def: "'Out of 100.' $25\\%$ means $25/100 = 0.25$. Percentages are just fractions with denominator 100." }
  ],

  "exponents-roots": [
    { term: "Base", def: "The number being multiplied. In $2^3$, the $2$ is the base." },
    { term: "Exponent (power)", def: "How many times to multiply the base by itself." },
    { term: "Square root", def: "The number that, multiplied by itself, gives the original. $\\sqrt{9} = 3$ because $3 \\times 3 = 9$." },
    { term: "Cube root", def: "The number whose cube (third power) gives the original. $\\sqrt[3]{27} = 3$ because $3^3 = 27$." },
    { term: "Radical", def: "The $\\sqrt{\\;}$ symbol. The thing inside is called the radicand." },
    { term: "Rationalize", def: "Get rid of a root in the denominator by multiplying top and bottom by the same expression." }
  ],

  "ratios-proportions": [
    { term: "Ratio", def: "How two amounts compare. The ratio $2 : 3$ means 'for every 2 of one, there are 3 of the other.'" },
    { term: "Proportion", def: "A statement that two ratios are equal: $\\tfrac{a}{b} = \\tfrac{c}{d}$." },
    { term: "Direct proportion", def: "Two quantities that grow together at the same rate. Double one, double the other." },
    { term: "Inverse proportion", def: "Two quantities where one grows as the other shrinks: $y = k/x$. Their product is constant." },
    { term: "Rate", def: "How much of one thing per unit of another. Speed (km per hour) is a rate." },
    { term: "Cross-multiply", def: "In $\\tfrac{a}{b} = \\tfrac{c}{d}$, multiply $a$ by $d$ and $b$ by $c$ to get $ad = bc$." }
  ],

  "linear-equations": [
    { term: "Variable", def: "A letter (like $x$) standing in for an unknown number." },
    { term: "Coefficient", def: "The number multiplying a variable. In $3x + 5$, the coefficient of $x$ is $3$." },
    { term: "Constant", def: "A fixed number with no variable attached. In $3x + 5$, the constant is $5$." },
    { term: "Solution", def: "A value of $x$ that makes the equation true." },
    { term: "Slope", def: "How steep a line is — rise over run. Positive slope goes up; negative goes down." },
    { term: "y-intercept", def: "Where a line crosses the $y$-axis (when $x = 0$). The 'b' in $y = mx + b$." }
  ],

  "inequalities": [
    { term: "Inequality", def: "An equation-like statement with $<, >, \\leq,$ or $\\geq$ instead of $=$. Describes a range, not a single value." },
    { term: "Strict inequality", def: "Uses $<$ or $>$ — endpoint not included." },
    { term: "Non-strict inequality", def: "Uses $\\leq$ or $\\geq$ — endpoint IS included." },
    { term: "Interval", def: "A continuous range of numbers. $(2, 5)$ is open, $[2, 5]$ is closed." },
    { term: "Compound inequality", def: "Two inequalities joined with 'and' or 'or'. Like $-3 < x < 5$." }
  ],

  "plane-geometry": [
    { term: "Arc", def: "A curved piece of a circle's edge — the part of the circle between two points on it. Like the curved top of a pizza slice." },
    { term: "Arc length", def: "The distance you'd travel walking along an arc. For radius $r$ and angle $\\theta$ in radians: arc length $= r\\theta$." },
    { term: "Radius", def: "Distance from the center of a circle to its edge. Symbol $r$." },
    { term: "Diameter", def: "Distance across a circle through the center. Equal to $2r$." },
    { term: "Circumference", def: "The total distance around a circle. Equal to $2\\pi r$." },
    { term: "Perimeter", def: "Total distance around the outside of any shape." },
    { term: "Hypotenuse", def: "The longest side of a right triangle — always opposite the right angle." },
    { term: "Vertex", def: "A corner — a point where two sides of a shape meet. Plural: vertices." },
    { term: "Sector", def: "A pie-slice-shaped region of a circle, bounded by two radii and an arc." },
    { term: "π (pi)", def: "The constant $\\approx 3.14159$, equal to a circle's circumference divided by its diameter. Appears whenever circles do." }
  ],

  "set-logic": [
    { term: "Set", def: "A collection of distinct objects. Written with curly braces: $\\{1, 2, 3\\}$." },
    { term: "Element", def: "A member of a set. $2 \\in \\{1, 2, 3\\}$ means '$2$ is an element of $\\{1, 2, 3\\}$.'" },
    { term: "Union ($\\cup$)", def: "Combine sets — everything in either one. $\\{1,2\\} \\cup \\{2,3\\} = \\{1,2,3\\}$." },
    { term: "Intersection ($\\cap$)", def: "What's in BOTH sets. $\\{1,2\\} \\cap \\{2,3\\} = \\{2\\}$." },
    { term: "Subset ($\\subseteq$)", def: "A set where every element is also in another. $\\{1,2\\} \\subseteq \\{1,2,3\\}$." },
    { term: "Empty set ($\\emptyset$)", def: "The set with no elements. Different from $\\{0\\}$, which contains one element." },
    { term: "Quantifier", def: "$\\forall$ means 'for all', $\\exists$ means 'there exists'. They turn open statements into propositions." }
  ],

  "number-theory": [
    { term: "Divisor", def: "A number that divides another evenly with no remainder." },
    { term: "Modulo (mod)", def: "The remainder after division. $7 \\bmod 3 = 1$ because $7 = 2 \\cdot 3 + 1$." },
    { term: "Congruent", def: "$a \\equiv b \\pmod n$ means $a$ and $b$ leave the same remainder when divided by $n$." },
    { term: "Coprime", def: "Two numbers are coprime if their GCD is 1 — they share no common factor." },
    { term: "Diophantine equation", def: "An equation where only integer solutions count." },
    { term: "Euler's totient $\\varphi(n)$", def: "Counts how many positive integers $\\leq n$ are coprime to $n$." }
  ],

  "combinatorics": [
    { term: "Permutation", def: "An ordered arrangement. $abc$ and $bac$ count as different permutations of $\\{a, b, c\\}$." },
    { term: "Combination", def: "An unordered selection. $\\{a, b\\}$ and $\\{b, a\\}$ count as the SAME combination." },
    { term: "Factorial ($n!$)", def: "$n \\times (n-1) \\times \\ldots \\times 1$. Number of ways to arrange $n$ distinct items. $5! = 120$." },
    { term: "Binomial coefficient $\\binom{n}{k}$", def: "Number of ways to choose $k$ items from $n$, ignoring order. Read 'n choose k.'" },
    { term: "Inclusion-exclusion", def: "Counting overlap-aware: add, then subtract double-counts." }
  ],

  "systems-of-equations": [
    { term: "System", def: "Two or more equations that share variables and must hold simultaneously." },
    { term: "Substitution", def: "Solve one equation for one variable, then plug into the other." },
    { term: "Elimination", def: "Add or subtract equations to cancel out a variable." },
    { term: "Consistent system", def: "Has at least one solution." },
    { term: "Inconsistent system", def: "Has no solution — the equations contradict each other (parallel lines)." }
  ],

  "quadratic-equations": [
    { term: "Quadratic", def: "An expression with $x^2$ as the highest power. General form: $ax^2 + bx + c$." },
    { term: "Parabola", def: "The U-shaped curve you get from graphing a quadratic. Opens up if $a > 0$, down if $a < 0$." },
    { term: "Root (zero)", def: "A value of $x$ where the quadratic equals zero — where the parabola crosses the $x$-axis." },
    { term: "Discriminant", def: "$b^2 - 4ac$. Tells you how many real roots: positive (two), zero (one), negative (none real)." },
    { term: "Vertex", def: "The tip of the parabola — the highest or lowest point." },
    { term: "Completing the square", def: "Rewriting $x^2 + bx$ as $(x + b/2)^2 - b^2/4$. Used to derive the quadratic formula." }
  ],

  "polynomials-rational": [
    { term: "Polynomial", def: "A sum of terms like $a_n x^n + \\ldots + a_1 x + a_0$. No division by variables, no negative or fractional exponents." },
    { term: "Degree", def: "The highest power of $x$ in a polynomial." },
    { term: "Rational function", def: "A polynomial divided by another polynomial." },
    { term: "Asymptote", def: "A line a curve gets arbitrarily close to but never touches." },
    { term: "Vertical asymptote", def: "A vertical line $x = c$ where a rational function blows up to infinity." },
    { term: "Horizontal asymptote", def: "A horizontal line a function approaches as $x \\to \\pm\\infty$." }
  ],

  "functions-graphs": [
    { term: "Function", def: "A rule that takes each input to exactly one output. Like a machine." },
    { term: "Domain", def: "All allowed inputs to a function." },
    { term: "Range", def: "All outputs the function actually produces." },
    { term: "Inverse function", def: "The function that undoes another. Notation: $f^{-1}$." },
    { term: "Composition $f \\circ g$", def: "Apply $g$ first, then $f$: $f(g(x))$." },
    { term: "Even function", def: "$f(-x) = f(x)$. Graph is symmetric across the $y$-axis." },
    { term: "Odd function", def: "$f(-x) = -f(x)$. Graph has 180° rotational symmetry about origin." }
  ],

  "logarithms": [
    { term: "Logarithm", def: "The opposite of an exponent. $\\log_b(x)$ asks: '$b$ to what power gives $x$?'" },
    { term: "Base", def: "The number being raised to a power. $\\log_2$ has base 2." },
    { term: "Natural log ($\\ln$)", def: "Logarithm with base $e \\approx 2.718$. The most common in calculus." },
    { term: "Common log ($\\log$)", def: "Logarithm with base 10 (in everyday math). In computer science, $\\log$ often means base 2." },
    { term: "$e$", def: "Euler's number, $\\approx 2.71828$. The natural base for exponential growth/decay." },
    { term: "Exponential function", def: "$f(x) = b^x$. Grows or decays multiplicatively." }
  ],

  "sequences-series": [
    { term: "Sequence", def: "An ordered list of numbers, like $2, 4, 6, 8, \\ldots$" },
    { term: "Series", def: "The sum of the terms of a sequence." },
    { term: "Term", def: "One number in a sequence. $a_n$ usually means the $n$-th term." },
    { term: "Arithmetic sequence", def: "Each term is the previous plus a constant $d$ (common difference)." },
    { term: "Geometric sequence", def: "Each term is the previous times a constant $r$ (common ratio)." },
    { term: "Converge", def: "Approach a finite limit as terms continue forever." },
    { term: "Diverge", def: "Fail to converge — either grow without bound or oscillate." }
  ],

  "trigonometry": [
    { term: "Sine ($\\sin$)", def: "In a right triangle, opposite side over hypotenuse. On unit circle, the $y$-coordinate." },
    { term: "Cosine ($\\cos$)", def: "Adjacent side over hypotenuse. On unit circle, the $x$-coordinate." },
    { term: "Tangent ($\\tan$)", def: "Opposite over adjacent. Equals $\\sin/\\cos$." },
    { term: "Radian", def: "An angle measurement where a full circle is $2\\pi$ radians ($\\approx 6.28$). Used everywhere in calculus and physics." },
    { term: "Unit circle", def: "A circle of radius 1 centered at the origin. Used to define $\\sin$ and $\\cos$ for any angle." },
    { term: "Period", def: "How often a function repeats. $\\sin$ and $\\cos$ have period $2\\pi$." },
    { term: "Amplitude", def: "Half the difference between max and min — how tall the wave gets." }
  ],

  "probability": [
    { term: "Sample space", def: "All possible outcomes of an experiment. Rolling a die: $\\{1, 2, 3, 4, 5, 6\\}$." },
    { term: "Event", def: "A subset of the sample space — a particular outcome or set of outcomes." },
    { term: "Probability", def: "A number between 0 (impossible) and 1 (certain) measuring how likely an event is." },
    { term: "Independent", def: "Two events are independent if one doesn't affect the other's probability." },
    { term: "Conditional probability", def: "$P(A | B)$ = probability of $A$ given that $B$ already happened." },
    { term: "Expected value", def: "Long-run average outcome of a random experiment." },
    { term: "Complement", def: "The event of $A$ NOT happening. $P(\\text{not } A) = 1 - P(A)$." }
  ],

  "statistics": [
    { term: "Mean", def: "The arithmetic average — sum of values over count." },
    { term: "Median", def: "The middle value when sorted. Half the data is below it, half above." },
    { term: "Mode", def: "The most frequent value." },
    { term: "Variance", def: "Average squared deviation from the mean — how spread out the data is." },
    { term: "Standard deviation ($\\sigma$)", def: "Square root of variance — same units as the data." },
    { term: "z-score", def: "How many standard deviations a value is from the mean: $z = (x - \\mu)/\\sigma$." },
    { term: "Confidence interval", def: "A range likely to contain the true value, with a stated confidence (e.g., 95%)." },
    { term: "Hypothesis test", def: "A procedure to decide if data supports rejecting a 'null' assumption." }
  ],

  "complex-numbers": [
    { term: "Imaginary unit ($i$)", def: "A number with $i^2 = -1$. Lets you take square roots of negative numbers." },
    { term: "Complex number", def: "$a + bi$ where $a$ (real part) and $b$ (imaginary part) are real numbers." },
    { term: "Real part", def: "The $a$ in $a + bi$." },
    { term: "Imaginary part", def: "The $b$ in $a + bi$ (not $bi$ itself)." },
    { term: "Conjugate", def: "Flip the sign of the imaginary part: conjugate of $a + bi$ is $a - bi$." },
    { term: "Modulus (absolute value)", def: "Distance from origin in the complex plane: $|a + bi| = \\sqrt{a^2 + b^2}$." },
    { term: "Argument", def: "The angle from the positive real axis to the point $a + bi$." }
  ],

  "vector-algebra": [
    { term: "Vector", def: "A quantity with both magnitude (size) and direction. Drawn as an arrow." },
    { term: "Scalar", def: "A single number — no direction. Like temperature or mass." },
    { term: "Magnitude", def: "The length (size) of a vector, written $|\\vec v|$." },
    { term: "Dot product", def: "Combines two vectors to give a scalar: $\\vec a \\cdot \\vec b = |\\vec a||\\vec b|\\cos\\theta$." },
    { term: "Cross product", def: "Combines two 3D vectors to give a vector perpendicular to both." },
    { term: "Unit vector", def: "A vector of magnitude 1 — just direction, no size info." },
    { term: "Component", def: "A vector's projection along a coordinate axis. $\\vec v = \\langle v_x, v_y, v_z \\rangle$." }
  ],

  "linear-algebra": [
    { term: "Matrix", def: "A rectangular grid of numbers. Used to represent linear transformations and systems of equations." },
    { term: "Vector space", def: "A set where vectors can be added and scaled — like $\\mathbb{R}^n$." },
    { term: "Linear transformation", def: "A function that preserves vector addition and scalar multiplication." },
    { term: "Identity matrix ($I$)", def: "Square matrix with $1$s on the diagonal and $0$s elsewhere. $IA = AI = A$ — leaves anything unchanged." },
    { term: "Inverse matrix ($A^{-1}$)", def: "Matrix that undoes $A$: $AA^{-1} = I$. Exists iff $\\det A \\neq 0$." },
    { term: "Singular matrix", def: "A square matrix with $\\det = 0$ — has no inverse." },
    { term: "Invertible", def: "Same as 'non-singular' — has an inverse, equivalently $\\det \\neq 0$." },
    { term: "Determinant", def: "A number computed from a square matrix. Zero means non-invertible. Geometrically: signed volume scale factor." },
    { term: "Eigenvalue ($\\lambda$)", def: "A scalar such that $A\\vec v = \\lambda \\vec v$ — directions the matrix only stretches." },
    { term: "Eigenvector", def: "A nonzero vector that gets only scaled (not rotated) by the matrix." },
    { term: "Rank", def: "Number of independent rows (or columns) of a matrix." },
    { term: "Linearly independent", def: "A set of vectors where none is a sum of multiples of the others. Each contributes a new direction." },
    { term: "Basis", def: "A linearly independent set that spans the space — every vector is a unique combination of basis vectors." },
    { term: "Null space", def: "All vectors $\\vec v$ such that $A\\vec v = \\vec 0$. Bigger null space = more solutions to $A\\vec v = \\vec 0$." },
    { term: "Nullity", def: "Dimension of the null space." },
    { term: "Trace", def: "Sum of diagonal entries of a square matrix." },
    { term: "Transpose ($A^T$)", def: "Flip the matrix across its diagonal — rows become columns." }
  ],

  "limits": [
    { term: "Limit", def: "The value a function APPROACHES as its input nears some point. Crucially, the limit can exist even when $f(a)$ itself is undefined — the limit cares about the function's behavior NEAR $a$, not AT $a$." },
    { term: "$\\varepsilon$-$\\delta$ definition", def: "Formal limit definition: for ANY output tolerance $\\varepsilon$, there exists an input window $\\delta$ around $a$ such that all inputs in that window produce outputs within $\\varepsilon$ of the limit. Makes 'gets close' mathematically precise." },
    { term: "Continuous", def: "A function with no breaks, jumps, or holes at a point — formally, $\\lim_{x \\to a} f(x) = f(a)$. Continuous everywhere means you can draw the graph without lifting your pencil." },
    { term: "Discontinuity", def: "A point where a function fails to be continuous. Types: removable (hole), jump (graph leaps), infinite (vertical asymptote)." },
    { term: "One-sided limit", def: "Limit from the left ($x \\to a^-$) or right ($x \\to a^+$) only. The two-sided limit exists iff both one-sided limits exist and are equal." },
    { term: "Indeterminate form", def: "Expressions like $\\tfrac{0}{0}$, $\\tfrac{\\infty}{\\infty}$, $0 \\cdot \\infty$, $\\infty - \\infty$. The limit MIGHT exist, but you can't tell without more work. Different functions giving the same indeterminate form can have very different limits." },
    { term: "L'Hôpital's rule", def: "For limits of $\\tfrac{0}{0}$ or $\\tfrac{\\infty}{\\infty}$ form, take derivatives of top and bottom SEPARATELY, then try the limit again. Repeat if still indeterminate." },
    { term: "Squeeze theorem", def: "If $g(x) \\leq f(x) \\leq h(x)$ near $a$ and $\\lim g = \\lim h = L$, then $\\lim f = L$. Sandwich anything tricky between two known limits." }
  ],

  "derivatives": [
    { term: "Derivative", def: "The instantaneous rate of change of a function — the slope of its tangent line at a point. Written $f'(x)$ or $df/dx$." },
    { term: "Tangent line", def: "The straight line that 'just touches' a curve at a single point, matching its slope there." },
    { term: "Differentiable", def: "Having a derivative at a point. A function with a sharp corner (like $|x|$ at 0) is not differentiable there. Differentiable implies continuous, but not vice versa." },
    { term: "Chain rule", def: "Rule for differentiating composed functions: $\\frac{d}{dx} f(g(x)) = f'(g(x)) g'(x)$. Differentiate outer keeping inner intact, then multiply by inner's derivative." },
    { term: "Critical point", def: "A value $x = c$ where $f'(c) = 0$ OR $f'(c)$ doesn't exist. These are the ONLY places a smooth function can have a local maximum or minimum — that's why they matter. To find them: compute the derivative, set it to zero, solve. Example: $f(x) = x^3 - 3x$ has $f'(x) = 3x^2 - 3 = 0$, giving $x = \\pm 1$ as critical points." },
    { term: "Local maximum", def: "A point where $f$ is bigger than at all nearby points (a hilltop). Found among critical points. Test: $f'$ changes from $+$ to $-$, or $f''(c) < 0$." },
    { term: "Local minimum", def: "A point where $f$ is smaller than at all nearby points (a valley). Found among critical points. Test: $f'$ changes from $-$ to $+$, or $f''(c) > 0$." },
    { term: "Saddle point", def: "A critical point that's neither a max nor a min — slope is zero but you go up in some directions and down in others. Common in functions of multiple variables." },
    { term: "Inflection point", def: "Where the curvature changes — from concave up to concave down or vice versa. Found where $f''(x) = 0$ AND the sign of $f''$ actually flips there." },
    { term: "Concave up", def: "Curve shaped like a smile — second derivative positive. Tangent lines lie BELOW the curve." },
    { term: "Concave down", def: "Curve shaped like a frown — second derivative negative. Tangent lines lie ABOVE the curve." },
    { term: "Higher-order derivative", def: "The derivative of the derivative (etc.). $f''(x)$ is the rate of change of $f'(x)$; tells you about acceleration of $f$, or curvature." },
    { term: "Increasing", def: "Function is going up: $f'(x) > 0$ on an interval." },
    { term: "Decreasing", def: "Function is going down: $f'(x) < 0$ on an interval." }
  ],

  "integrals": [
    { term: "Integral", def: "Accumulates a function over an interval — geometrically, the (signed) area between the curve and the x-axis. The inverse of differentiation." },
    { term: "Antiderivative", def: "A function $F$ whose derivative is the given function $f$: $F'(x) = f(x)$. Found by integrating. Many antiderivatives exist (differ by a constant)." },
    { term: "Definite integral", def: "$\\int_a^b f(x)\\,dx$ — produces a single NUMBER. Equals signed area between $f$ and the x-axis from $x = a$ to $x = b$. Areas above the axis count positive; below, negative." },
    { term: "Indefinite integral", def: "$\\int f(x)\\,dx$ — produces a family of FUNCTIONS (antiderivatives plus constant $C$). Notation reflects that integration 'undoes' differentiation." },
    { term: "Constant of integration $C$", def: "An arbitrary constant added to any indefinite integral. Needed because constants have derivative zero — so any antiderivative is only known up to a constant. Initial conditions pin it down." },
    { term: "Riemann sum", def: "Approximation of an integral as a sum of thin rectangles: $\\sum f(x_i) \\Delta x$. As rectangle width → 0, this becomes the integral." },
    { term: "Fundamental theorem of calculus", def: "Connects derivatives and integrals: $\\int_a^b f'(x)\\,dx = f(b) - f(a)$. Means integration and differentiation are inverse operations." },
    { term: "u-substitution", def: "Technique that reverses the chain rule. Spot a function $g(x)$ AND its derivative $g'(x)$ in the integrand; let $u = g(x)$ to simplify." },
    { term: "Integration by parts", def: "Reverses the product rule: $\\int u\\,dv = uv - \\int v\\,du$. Use when integrand is a PRODUCT where one factor simplifies on differentiation, the other on integration." },
    { term: "Improper integral", def: "An integral with infinite limits ($\\int_a^\\infty$) or an unbounded integrand. May converge to a finite value or diverge." }
  ],

  "multivariable-calculus": [
    { term: "Partial derivative", def: "Derivative with respect to ONE variable while treating all others as constants. Written $\\partial f/\\partial x$. Tells you how $f$ changes if you move only in the $x$ direction." },
    { term: "Gradient ($\\nabla f$)", def: "Vector whose components are the partial derivatives. Points in the direction $f$ increases fastest; its magnitude is the maximum slope. The 'compass for steepest uphill.'" },
    { term: "Directional derivative", def: "Rate of change of $f$ in a specified direction $\\hat u$: $D_{\\hat u} f = \\nabla f \\cdot \\hat u$. Maximum when $\\hat u$ aligns with $\\nabla f$." },
    { term: "Critical point (multivariable)", def: "Where ALL partial derivatives are zero — i.e., $\\nabla f = \\vec 0$. Possible site of a max, min, or saddle. The multivariable analog of $f'(x) = 0$." },
    { term: "Hessian", def: "Matrix of all second partial derivatives. At a critical point: positive-definite → local min, negative-definite → local max, indefinite → saddle. The multivariable second-derivative test." },
    { term: "Saddle point", def: "A critical point that's a max in one direction and a min in another — shaped like a Pringles chip or a horse saddle. Common: $f(x, y) = x^2 - y^2$ at the origin." },
    { term: "Multiple integral", def: "Integral over a 2D region (double) or 3D region (triple). Done by iterating 1D integrals — integrate over one variable, then the next." },
    { term: "Fubini's theorem", def: "Lets you swap the order of integration in a multiple integral (under mild conditions). Crucial for evaluation strategies." },
    { term: "Lagrange multiplier", def: "Method for optimizing $f$ subject to a constraint $g = 0$. At the optimum, $\\nabla f = \\lambda \\nabla g$ — gradients are parallel. Auxiliary variable $\\lambda$ handles the constraint." }
  ],

  "vector-calculus": [
    { term: "Vector field", def: "An assignment of a vector to every point in space. Wind speed at each location is a vector field." },
    { term: "Divergence ($\\nabla \\cdot \\vec F$)", def: "Local 'spreading-out rate' of a vector field. Positive: source. Negative: sink. Zero: incompressible." },
    { term: "Curl ($\\nabla \\times \\vec F$)", def: "Local rotation of a vector field. Imagine a paddle wheel — curl is its spin axis and rate." },
    { term: "Line integral", def: "Integral of a function along a curve (not a straight $x$-axis)." },
    { term: "Surface integral", def: "Integral over a 2D surface in 3D space — like total flux through a membrane." },
    { term: "Conservative field", def: "A vector field that's the gradient of some scalar function. Path-independent line integrals." }
  ],

  "ode": [
    { term: "Differential equation", def: "An equation involving a function and its derivatives." },
    { term: "ODE", def: "Ordinary Differential Equation — derivatives in ONE variable (like time)." },
    { term: "Order", def: "The highest derivative that appears. $y'' + y = 0$ is second order." },
    { term: "Initial condition", def: "Value of $y$ (and possibly $y'$, etc.) at a starting point, used to pin down a unique solution." },
    { term: "Separable", def: "An ODE where you can put all $y$'s on one side and all $x$'s on the other." },
    { term: "Linear ODE", def: "Doesn't multiply $y$ by itself or by its derivatives." },
    { term: "Homogeneous", def: "ODE with right-hand side zero. Particular vs. homogeneous solutions add to the general solution." }
  ],

  "pde": [
    { term: "PDE", def: "Partial Differential Equation — involves partial derivatives in multiple variables." },
    { term: "Boundary condition", def: "Constraint at the spatial boundary of the region (e.g., temperature fixed at 0 at the edge)." },
    { term: "Initial condition", def: "Value of the solution at the starting time $t = 0$." },
    { term: "Elliptic", def: "PDE describing equilibrium (no time evolution). Laplace's equation is the prototype." },
    { term: "Parabolic", def: "PDE describing diffusion/smoothing. Heat equation is the prototype." },
    { term: "Hyperbolic", def: "PDE describing wave-like propagation. Wave equation is the prototype." }
  ],

  "real-analysis": [
    { term: "Bounded", def: "Stays within some finite range. A bounded sequence is between some $-M$ and $+M$." },
    { term: "Cauchy sequence", def: "Terms get arbitrarily close to each other (not necessarily close to some limit)." },
    { term: "Complete", def: "Every Cauchy sequence converges to something in the space. $\\mathbb{R}$ is complete; $\\mathbb{Q}$ isn't." },
    { term: "Compact", def: "Closed and bounded (in $\\mathbb{R}^n$). Compact sets behave nicely under continuous maps." },
    { term: "Open set", def: "A set where every point has a small surrounding ball entirely inside the set." },
    { term: "Closed set", def: "Contains all its limit points. Complement of an open set." },
    { term: "Supremum (sup)", def: "Least upper bound. Smaller than any other upper bound." }
  ],

  "complex-analysis": [
    { term: "Holomorphic", def: "Complex-differentiable on an open set. Much stronger than real differentiability." },
    { term: "Analytic", def: "Equals its Taylor series locally. For complex functions, equivalent to holomorphic." },
    { term: "Entire function", def: "Holomorphic on all of $\\mathbb{C}$. Polynomials and $e^z$ are entire." },
    { term: "Pole", def: "A point where the function blows up to infinity in a controlled way (like $1/(z-a)^n$)." },
    { term: "Residue", def: "Coefficient of $1/(z-a)$ in the Laurent expansion near a pole. The only piece contributing to closed-loop integrals." },
    { term: "Contour", def: "A path in the complex plane along which an integral is taken." },
    { term: "Cauchy-Riemann", def: "Pair of equations $u_x = v_y, u_y = -v_x$ that test whether $f = u + iv$ is holomorphic." }
  ],

  "fourier-analysis": [
    { term: "Frequency", def: "How many cycles per unit time/distance." },
    { term: "Harmonic", def: "A frequency that's an integer multiple of a fundamental. 1st, 2nd, 3rd harmonics." },
    { term: "Fourier series", def: "Decomposition of a periodic function into sines and cosines at integer multiples of a base frequency." },
    { term: "Fourier transform", def: "Generalization of Fourier series to non-periodic functions. Decomposes into a continuous spectrum." },
    { term: "Spectrum", def: "How a signal's energy is distributed across frequencies." },
    { term: "Convolution", def: "An operation $(f * g)(x) = \\int f(y) g(x - y)\\,dy$ — like smearing one function with another." }
  ],

  "abstract-algebra": [
    { term: "Group", def: "A set with one operation that's associative, has an identity, and has inverses." },
    { term: "Abelian", def: "Commutative: $a \\cdot b = b \\cdot a$ for all elements." },
    { term: "Subgroup", def: "A subset that's itself a group under the same operation." },
    { term: "Ring", def: "A set with two operations (like $+$ and $\\times$), with appropriate axioms." },
    { term: "Field", def: "A ring where every nonzero element has a multiplicative inverse. $\\mathbb{Q}, \\mathbb{R}, \\mathbb{C}$ are fields." },
    { term: "Homomorphism", def: "A function between groups (or rings) that preserves the operation: $\\phi(a \\cdot b) = \\phi(a) \\cdot \\phi(b)$." },
    { term: "Kernel", def: "Elements that get mapped to the identity by a homomorphism." }
  ],

  "topology": [
    { term: "Open set", def: "Defining notion of topology — sets satisfying certain axioms." },
    { term: "Closed set", def: "Complement of an open set." },
    { term: "Continuous (topological)", def: "Preimage of every open set is open." },
    { term: "Compact", def: "Every open cover has a finite sub-cover. Generalizes 'closed and bounded.'" },
    { term: "Hausdorff", def: "Distinct points have disjoint neighborhoods. Almost all useful spaces satisfy this." },
    { term: "Connected", def: "Can't be split into two disjoint non-empty open sets — one piece." },
    { term: "Homeomorphism", def: "A continuous bijection with continuous inverse. Topologically, two spaces are 'the same' if homeomorphic." }
  ],

  "numerical-methods": [
    { term: "Iteration", def: "Repeating a step until you get close enough to the answer." },
    { term: "Convergence rate", def: "How fast errors shrink with each iteration. Linear: errors × constant. Quadratic: errors squared." },
    { term: "Step size ($h$)", def: "How big a chunk each iteration covers. Smaller $h$: more accurate, more compute." },
    { term: "Round-off error", def: "Tiny errors from finite-precision arithmetic (typically $\\sim 10^{-16}$ in double precision)." },
    { term: "Stability", def: "An algorithm is stable if small errors don't grow uncontrollably." },
    { term: "Condition number", def: "How sensitive a problem's output is to input perturbation. Big condition number: ill-conditioned." }
  ],

  "coordinate-geometry": [
    { term: "Coordinate plane", def: "A 2D grid with $x$-axis (horizontal) and $y$-axis (vertical) meeting at the origin." },
    { term: "Origin", def: "The point $(0, 0)$ where the axes cross." },
    { term: "Slope", def: "Steepness — rise over run. $(y_2 - y_1)/(x_2 - x_1)$ between two points." },
    { term: "Intercept", def: "Where a line crosses an axis. $x$-intercept: crosses $x$-axis. $y$-intercept: crosses $y$-axis." },
    { term: "Quadrant", def: "One of the four regions of the plane divided by the axes. Numbered I-IV counterclockwise from upper-right." }
  ],

  "solid-geometry": [
    { term: "Volume", def: "How much space a 3D shape takes up. Measured in cubic units." },
    { term: "Surface area", def: "Total area of all surfaces of a 3D shape." },
    { term: "Face", def: "A flat surface of a 3D shape." },
    { term: "Edge", def: "Where two faces meet." },
    { term: "Vertex", def: "A corner where edges meet (plural: vertices)." },
    { term: "Apex", def: "The top point of a pyramid or cone, opposite the base." }
  ],

  "conic-sections": [
    { term: "Conic section", def: "Any curve you get by slicing a cone with a plane: circle, ellipse, parabola, hyperbola." },
    { term: "Focus (focal point)", def: "A special point inside a conic — e.g., a parabolic dish focuses parallel rays to its focus." },
    { term: "Directrix", def: "A line associated with a conic — points on the conic are equidistant from focus and directrix (for parabolas)." },
    { term: "Eccentricity ($e$)", def: "Number measuring how 'stretched' a conic is. Circle: $0$, ellipse: $<1$, parabola: $1$, hyperbola: $>1$." },
    { term: "Semi-major axis", def: "Half the longest diameter of an ellipse." },
    { term: "Asymptote (hyperbola)", def: "A line a hyperbola gets arbitrarily close to but never touches as you go to infinity." }
  ],

  "mathematical-logic": [
    { term: "Proposition", def: "A statement that's either true or false." },
    { term: "Conjunction ($\\land$)", def: "AND. $p \\land q$ is true only when both $p$ and $q$ are true." },
    { term: "Disjunction ($\\lor$)", def: "OR. $p \\lor q$ is true when at least one is true." },
    { term: "Implication ($\\Rightarrow$)", def: "'If $p$ then $q$.' False only when $p$ is true and $q$ is false." },
    { term: "Contrapositive", def: "Of '$p \\Rightarrow q$', the statement '$\\neg q \\Rightarrow \\neg p$.' Logically equivalent." },
    { term: "Converse", def: "Of '$p \\Rightarrow q$', the statement '$q \\Rightarrow p$.' NOT generally equivalent." },
    { term: "Tautology", def: "A statement that's always true regardless of variable values." }
  ],

  "graph-theory": [
    { term: "Graph", def: "A collection of points (vertices) connected by lines (edges). Models any system of pairwise connections." },
    { term: "Vertex (node)", def: "A point in a graph. Plural: vertices." },
    { term: "Edge", def: "A connection between two vertices." },
    { term: "Degree", def: "Number of edges meeting at a vertex." },
    { term: "Path", def: "A sequence of edges connecting one vertex to another, without revisiting any vertex." },
    { term: "Cycle", def: "A path that returns to its starting vertex." },
    { term: "Tree", def: "A connected graph with no cycles. $n$ vertices, $n-1$ edges." },
    { term: "Bipartite", def: "Vertices split into two groups, with edges only between (not within) groups." }
  ],

  "recurrence-generating": [
    { term: "Recurrence relation", def: "An equation defining each term of a sequence in terms of earlier ones." },
    { term: "Generating function", def: "Power series $\\sum a_n x^n$ that 'encodes' a sequence as a function." },
    { term: "Closed form", def: "An explicit formula for $a_n$ in terms of $n$ — no recursion needed." },
    { term: "Characteristic equation", def: "Polynomial associated with a linear recurrence; roots give exponential solutions." },
    { term: "Fibonacci sequence", def: "$1, 1, 2, 3, 5, 8, 13, \\ldots$ — each term is the sum of the previous two." }
  ],

  "computability": [
    { term: "Algorithm", def: "A step-by-step procedure that terminates with an answer." },
    { term: "Decidable", def: "A problem solvable by some algorithm for all inputs." },
    { term: "Turing machine", def: "An idealized model of computation: tape, head, finite states." },
    { term: "P (class)", def: "Problems solvable in polynomial time. The 'tractable' class." },
    { term: "NP (class)", def: "Problems whose solutions can be verified in polynomial time. Tractable to check, possibly hard to find." },
    { term: "Halting problem", def: "Given a program and input, will it halt? Proved undecidable by Turing (1936)." }
  ],

  "galois-theory": [
    { term: "Field", def: "Set with addition and multiplication, plus inverses (except for 0). $\\mathbb{Q}, \\mathbb{R}, \\mathbb{C}$, finite fields." },
    { term: "Field extension", def: "A bigger field containing a smaller one. $\\mathbb{Q}(\\sqrt 2)$ extends $\\mathbb{Q}$." },
    { term: "Degree of extension", def: "Dimension of the bigger field as a vector space over the smaller. $\\mathbb{Q}(\\sqrt 2)$ has degree 2." },
    { term: "Galois group", def: "Group of automorphisms of an extension fixing the base field." },
    { term: "Solvable group", def: "A group built from abelian pieces — corresponds to polynomials solvable by radicals." }
  ],

  "lie-groups": [
    { term: "Lie group", def: "A group that's also a smooth manifold — multiplication and inverse vary smoothly." },
    { term: "Lie algebra", def: "Linearization of a Lie group near the identity. Vector space with a bracket $[X, Y]$." },
    { term: "Exponential map", def: "Sends Lie algebra elements to group elements: $X \\mapsto e^X$. Connects the linear and curved pictures." },
    { term: "Commutator", def: "$[X, Y] = XY - YX$. Measures how much two operations fail to commute." },
    { term: "Generator", def: "A Lie algebra element generating a one-parameter subgroup via the exponential map." }
  ],

  "differential-geometry": [
    { term: "Curve", def: "A 1D path through space, often parametrized by $t$." },
    { term: "Surface", def: "A 2D shape in space, like a sphere or saddle." },
    { term: "Manifold", def: "Generalization of curve/surface to any dimension; locally looks like Euclidean space." },
    { term: "Tangent vector", def: "A vector pointing along the direction of motion on a curve or in a plane." },
    { term: "Curvature", def: "How much a curve or surface bends." },
    { term: "Gaussian curvature", def: "Intrinsic measure of surface curvature, preserved under bending without stretching." }
  ],

  "tensor-calculus": [
    { term: "Tensor", def: "Generalization of scalars (rank 0), vectors (rank 1), matrices (rank 2) — multi-index objects with definite transformation rules." },
    { term: "Index", def: "A label like $\\mu$ on a tensor component, telling you which 'slot' you mean." },
    { term: "Einstein summation", def: "Convention: an index appearing once up and once down is implicitly summed." },
    { term: "Metric tensor ($g_{\\mu\\nu}$)", def: "Object encoding geometry — measures lengths and angles." },
    { term: "Christoffel symbol", def: "Coordinate-dependent correction terms for derivatives on a curved space." },
    { term: "Covariant derivative", def: "Derivative that accounts for curvature: $\\nabla_\\mu A^\\nu = \\partial_\\mu A^\\nu + \\Gamma^\\nu_{\\mu\\lambda} A^\\lambda$." }
  ],

  "algebraic-topology": [
    { term: "Loop", def: "A continuous path that starts and ends at the same point." },
    { term: "Fundamental group ($\\pi_1$)", def: "Group of loops at a basepoint, classified by which ones can be deformed into each other." },
    { term: "Homology ($H_n$)", def: "Groups detecting $n$-dimensional 'holes' in a space." },
    { term: "Euler characteristic ($\\chi$)", def: "$V - E + F$ for a polyhedron. Same for all triangulations of the same surface." },
    { term: "Simply connected", def: "Every loop can be continuously shrunk to a point. Sphere is; torus isn't." },
    { term: "Homotopy", def: "Continuous deformation of one map into another." }
  ],

  "riemannian-geometry": [
    { term: "Metric", def: "A way to measure distances and angles on a manifold." },
    { term: "Geodesic", def: "The shortest path between two points on a curved space — the 'straight line' generalization." },
    { term: "Ricci curvature", def: "A particular curvature tensor; appears in Einstein's equations." },
    { term: "Sectional curvature", def: "Generalizes Gaussian curvature to higher-dimensional manifolds — curvature of 2-planes." },
    { term: "Christoffel symbols", def: "Coefficients computed from the metric, used in defining geodesics and curvature." }
  ],

  "measure-theory": [
    { term: "Measure", def: "A consistent way to assign sizes to subsets. Lebesgue measure extends 'length' to many subsets of $\\mathbb{R}$." },
    { term: "$\\sigma$-algebra", def: "Family of subsets closed under complement and countable unions. The sets you're allowed to 'measure.'" },
    { term: "Null set", def: "A set of measure zero. Rationals form a null set in $\\mathbb{R}$." },
    { term: "Lebesgue integral", def: "Generalization of Riemann integral. Integrates more functions, behaves better under limits." },
    { term: "Almost everywhere (a.e.)", def: "True except on a null set." }
  ],

  "functional-analysis": [
    { term: "Banach space", def: "A complete normed vector space — Cauchy sequences converge." },
    { term: "Hilbert space", def: "A complete inner-product space. Adds the notion of angle." },
    { term: "Inner product", def: "Generalizes the dot product to infinite dimensions. Lets you talk about orthogonality." },
    { term: "Operator", def: "A function between vector spaces, usually linear." },
    { term: "Bounded operator", def: "An operator whose 'amplification' is finite: $\\|Tx\\| \\leq C\\|x\\|$." },
    { term: "Spectrum", def: "Generalization of eigenvalues to operators on infinite-dimensional spaces." }
  ],

  "calculus-of-variations": [
    { term: "Functional", def: "A function that takes a FUNCTION as input and returns a number. Like $\\int L\\,dt$." },
    { term: "Variation ($\\delta$)", def: "A small change to a function (analogous to the derivative for ordinary functions)." },
    { term: "Stationary", def: "A function where the variation of the functional vanishes — a 'critical point' in function space." },
    { term: "Euler-Lagrange equation", def: "The PDE/ODE that a stationary function must satisfy. Generalizes 'derivative = 0' to functionals." },
    { term: "Action", def: "A functional, often $\\int L\\,dt$, that nature minimizes in many physical contexts." }
  ],

  "function-sequences": [
    { term: "Pointwise convergence", def: "For each $x$, $f_n(x) \\to f(x)$ — possibly at different rates for different $x$." },
    { term: "Uniform convergence", def: "$f_n \\to f$ at the same rate everywhere: $\\sup_x |f_n - f| \\to 0$." },
    { term: "Power series", def: "$\\sum a_n x^n$ — like a polynomial of infinite degree." },
    { term: "Radius of convergence", def: "Distance from center within which the power series converges." },
    { term: "M-test", def: "Tool for proving uniform convergence: if $|f_n| \\leq M_n$ and $\\sum M_n$ converges, so does $\\sum f_n$ uniformly." }
  ],

  "random-variables": [
    { term: "Random variable", def: "A function from outcomes (in a sample space) to numbers. Captures 'random' real-world quantities." },
    { term: "Distribution", def: "How the values of a random variable are spread out probabilistically." },
    { term: "PDF (Probability Density Function)", def: "For continuous random variables, $f(x)$ such that $P(a < X < b) = \\int_a^b f\\,dx$." },
    { term: "PMF (Probability Mass Function)", def: "For discrete random variables, $P(X = x_i) = p_i$." },
    { term: "Expectation $E[X]$", def: "Long-run average — sum (or integral) of values weighted by probability." },
    { term: "CLT (Central Limit Theorem)", def: "Sums of many independent variables tend toward a normal distribution." }
  ],

  "stochastic-processes": [
    { term: "Markov chain", def: "A sequence of random states where the next depends only on the current — no memory." },
    { term: "Stationary distribution", def: "A probability distribution unchanged by the chain's transitions." },
    { term: "Random walk", def: "A path made of random steps. 1D: each step $\\pm 1$ with equal probability." },
    { term: "Brownian motion", def: "Continuous-time random walk; described by the Wiener process. Models stock prices, particles in fluid." },
    { term: "Martingale", def: "A 'fair' process: expected future value, given the past, equals the present value." }
  ],

  "bayesian-statistics": [
    { term: "Prior", def: "Probability distribution describing your beliefs about a parameter BEFORE seeing data." },
    { term: "Likelihood", def: "Probability of seeing the data given a specific parameter value." },
    { term: "Posterior", def: "Updated belief AFTER seeing data: $P(\\theta | D) \\propto P(D | \\theta) P(\\theta)$." },
    { term: "Conjugate prior", def: "A prior whose posterior has the same functional form (clean math)." },
    { term: "MAP", def: "Maximum A Posteriori — most likely parameter value given the data." },
    { term: "Credible interval", def: "A range containing some probability of the posterior (e.g., 95% credible interval)." }
  ],

  "optimization": [
    { term: "Objective function", def: "The function you're trying to maximize or minimize." },
    { term: "Constraint", def: "A condition restricting allowed values (e.g., $x \\geq 0$)." },
    { term: "Feasible region", def: "Set of points satisfying all constraints." },
    { term: "Convex", def: "Function shaped like a bowl — line segments between any two points stay above the function." },
    { term: "Lagrange multiplier ($\\lambda$)", def: "Auxiliary variable used to incorporate constraints into optimization." },
    { term: "KKT conditions", def: "Generalized Lagrange conditions for inequality-constrained optimization." },
    { term: "Gradient descent", def: "Iteratively step in the direction opposite the gradient to find a minimum." }
  ],

  "information-theory": [
    { term: "Bit", def: "Unit of information. One bit answers one yes/no question." },
    { term: "Entropy $H$", def: "Average information content of a random source, in bits. Maximum uncertainty when all outcomes are equally likely." },
    { term: "Mutual information $I(X;Y)$", def: "How much knowing $Y$ tells you about $X$." },
    { term: "Channel", def: "Any system carrying information, possibly with noise." },
    { term: "Capacity", def: "Maximum rate at which information can be sent reliably over a channel." },
    { term: "Coding", def: "Systematically representing data, often to compress or protect against errors." }
  ],

  "game-theory": [
    { term: "Player", def: "An agent making decisions in a game." },
    { term: "Strategy", def: "A complete plan of how to play, covering all possible situations." },
    { term: "Payoff", def: "The reward a player gets from a particular outcome." },
    { term: "Nash equilibrium", def: "Strategy profile where no player can improve by unilaterally changing their strategy." },
    { term: "Zero-sum game", def: "One player's gain is another's loss — total payoff is constant." },
    { term: "Mixed strategy", def: "A randomized strategy — choose each pure strategy with some probability." }
  ],

  "dynamical-systems": [
    { term: "State", def: "Complete information needed to determine future evolution. Position + velocity for a particle." },
    { term: "Phase space", def: "Space of all possible states." },
    { term: "Fixed point", def: "A state that doesn't change — system stays there if started there." },
    { term: "Limit cycle", def: "A closed loop the system tends toward — periodic motion." },
    { term: "Attractor", def: "A set of states the system tends toward over time." },
    { term: "Bifurcation", def: "Qualitative change in behavior as a parameter is varied." },
    { term: "Chaos", def: "Sensitive dependence on initial conditions: tiny initial differences become huge later." }
  ],

  "cryptography": [
    { term: "Plaintext", def: "The original readable message." },
    { term: "Ciphertext", def: "The encrypted, scrambled message." },
    { term: "Key", def: "Secret information that controls encryption and decryption." },
    { term: "Symmetric cipher", def: "Same key for both encryption and decryption (AES)." },
    { term: "Asymmetric cipher", def: "Different keys for encryption (public) and decryption (private) — RSA." },
    { term: "Hash function", def: "Compresses any-length input to a fixed-length 'fingerprint.'" },
    { term: "Public key", def: "Shared openly; lets anyone encrypt or verify." },
    { term: "Private key", def: "Kept secret; lets you decrypt or sign." }
  ],

  // ===== PHYSICS =====

  "units-measurement": [
    { term: "SI units", def: "International System — modern metric units. Meter, kilogram, second, ampere, kelvin, mole, candela." },
    { term: "Dimension", def: "The kind of quantity (length, mass, time). Independent of units used." },
    { term: "Scientific notation", def: "Compact notation for very large or small numbers: $4.2 \\times 10^{-4}$." },
    { term: "Significant figures", def: "Digits in a measurement that carry meaning — reflects measurement precision." },
    { term: "Dimensional analysis", def: "Checking equations by tracking units — both sides must have the same dimensions." }
  ],

  "kinematics": [
    { term: "Position", def: "Where an object is — its location at a given time." },
    { term: "Displacement", def: "Change in position. A vector pointing from start to end." },
    { term: "Distance", def: "Total path length traveled (always positive). Different from displacement." },
    { term: "Velocity", def: "Rate of change of position. Vector — includes direction." },
    { term: "Speed", def: "Magnitude of velocity — how fast, ignoring direction." },
    { term: "Acceleration", def: "Rate of change of velocity. Equal to $g = 9.8$ m/s² for free fall on Earth." },
    { term: "Free fall", def: "Motion under gravity alone — no air resistance. Constant downward acceleration $g$." },
    { term: "Projectile", def: "An object thrown or launched, then moving under gravity alone." },
    { term: "Range", def: "Horizontal distance covered by a projectile before landing." },
    { term: "Trajectory", def: "The path an object follows through space. Projectiles trace parabolas." }
  ],

  "vectors-physics": [
    { term: "Vector", def: "A quantity with magnitude AND direction (arrow). Like velocity or force." },
    { term: "Scalar", def: "A pure number, no direction. Like temperature or time." },
    { term: "Component", def: "A vector's projection along a coordinate axis." },
    { term: "Magnitude", def: "The size (length) of a vector." },
    { term: "Resultant", def: "The vector you get from adding two or more vectors together." },
    { term: "Resolve (a vector)", def: "Break a vector into components along chosen axes." },
    { term: "Force", def: "A push or pull, treated as a vector with magnitude and direction. Units: newtons (N). (You'll study forces formally in the NEXT topic, Newton's Laws — for now, just 'a push or pull' that adds as a vector.)" },
    { term: "Equilibrium", def: "Zero NET force. The vector sum of all forces is the zero vector. Object stays at rest or moves at constant velocity (Newton's 1st law)." },
    { term: "Resultant force", def: "The single vector you get by adding all force vectors. If it's zero, you're in equilibrium." }
  ],

  "newtons-laws": [
    { term: "Force", def: "A push or pull. Measured in newtons (N). $1$ N accelerates $1$ kg at $1$ m/s²." },
    { term: "Net force", def: "The vector sum of all forces acting on an object. Newton's 2nd law: net force $= ma$." },
    { term: "Mass", def: "Amount of matter — measures inertia (resistance to acceleration)." },
    { term: "Inertia", def: "Tendency of objects to keep doing what they're doing — at rest or in uniform motion." },
    { term: "Weight", def: "Force of gravity on an object: $W = mg$. Different from mass." },
    { term: "Normal force", def: "Force a surface exerts perpendicular to itself, preventing penetration." },
    { term: "Friction", def: "Force opposing relative motion between surfaces in contact." },
    { term: "Static friction", def: "Friction on a non-moving object — adjusts to prevent motion, up to a limit $\\mu_s N$." },
    { term: "Kinetic friction", def: "Friction once an object is sliding — fixed magnitude $\\mu_k N$, opposes motion." },
    { term: "Coefficient of friction ($\\mu$)", def: "A dimensionless number that scales the friction force. Depends on the two surfaces in contact." },
    { term: "Tension", def: "Force transmitted through a rope, string, or cable." },
    { term: "Equilibrium", def: "Zero net force (and zero net torque, for rotational equilibrium). Object stays at rest or moves at constant velocity." },
    { term: "Free-body diagram", def: "A picture showing ALL forces acting on a single object as arrows." }
  ],

  "momentum-impulse": [
    { term: "Momentum", def: "Mass times velocity: $\\vec p = m\\vec v$. Measures 'how hard to stop.' A vector — direction matters." },
    { term: "Impulse", def: "Change in momentum, equal to force times time over which it acts. $\\vec J = \\vec F \\cdot \\Delta t = \\Delta \\vec p$." },
    { term: "Kinetic energy (KE)", def: "Energy associated with motion: $KE = \\tfrac{1}{2} m v^2$. Bigger mass or higher speed = more KE. Note: speed is SQUARED, so doubling speed quadruples KE. (You'll study energy in depth in the next topic — for now, just 'energy of motion.')" },
    { term: "Isolated system", def: "A system with NO external forces acting on it — the parts can push each other, but nothing outside pushes in. In an isolated system, total momentum is conserved." },
    { term: "Closed system", def: "A system that doesn't exchange matter with its surroundings. Often used interchangeably with 'isolated' in mechanics." },
    { term: "External force", def: "A force from OUTSIDE the system (like gravity from the Earth on a ball in flight). Internal forces (objects pushing each other) don't change total momentum." },
    { term: "Conservation", def: "A quantity that doesn't change over time. Momentum is conserved when no external force acts." },
    { term: "Elastic collision", def: "A 'bouncy' collision where the objects rebound and KE is also conserved (no energy lost to heat, sound, or deformation). Billiard balls and atomic collisions are nearly elastic." },
    { term: "Inelastic collision", def: "A collision where some KE is lost — turned into heat, sound, or permanent deformation of the objects. Momentum is still conserved; energy isn't." },
    { term: "Perfectly inelastic", def: "The extreme inelastic case: objects stick together after the collision. Maximum possible KE lost." },
    { term: "Center of mass", def: "Mass-weighted average position of all parts. Moves smoothly even when individual parts collide. In an isolated system, moves at CONSTANT velocity." }
  ],

  "energy-work": [
    { term: "Energy", def: "Capacity to do work. Measured in joules (J)." },
    { term: "Work", def: "Energy transferred by a force over a distance: $W = \\vec F \\cdot \\vec d$." },
    { term: "Kinetic energy (KE)", def: "Energy of motion: $\\tfrac{1}{2} m v^2$." },
    { term: "Potential energy (PE)", def: "Stored energy from position (gravitational, elastic, etc.)." },
    { term: "Conservative force", def: "A force where work depends only on endpoints, not path (gravity, springs). Has a potential energy." },
    { term: "Non-conservative force", def: "A force whose work depends on the path taken (friction, air resistance). Dissipates mechanical energy to heat." },
    { term: "Conservation of energy", def: "Total energy (kinetic + potential + heat + ...) is constant — never created or destroyed, just converted between forms." },
    { term: "Power", def: "Rate of doing work — energy per unit time. Watts (W) = J/s." },
    { term: "Joule (J)", def: "SI unit of energy. $1$ J = $1$ N·m. A small chocolate bar holds about $10^6$ J." },
    { term: "Watt (W)", def: "SI unit of power. $1$ W = $1$ J/s. A standard LED bulb is about $10$ W." },
    { term: "Efficiency", def: "Useful output energy divided by input energy. Always less than 1." }
  ],

  "circular-gravitation": [
    { term: "Centripetal force", def: "Net force pointing TOWARD the center of a circular path. Required to bend motion into a circle." },
    { term: "Centripetal acceleration", def: "Acceleration toward the center: $a_c = v^2/r$." },
    { term: "Centrifugal force", def: "Fictitious 'outward' force that only appears in a rotating frame. Not a real force." },
    { term: "Orbit", def: "The closed path of one body around another under their mutual gravity." },
    { term: "Orbital velocity", def: "Speed needed to maintain a circular orbit at a given radius: $v = \\sqrt{GM/r}$." },
    { term: "Escape velocity", def: "Minimum speed to escape gravity to infinity: $v_{esc} = \\sqrt{2GM/r}$." },
    { term: "Geostationary orbit", def: "Orbit where the period matches Earth's rotation (24 h) — satellite stays above the same point on the equator." },
    { term: "Period ($T$)", def: "Time for one complete orbit (or oscillation)." },
    { term: "Gravitational constant ($G$)", def: "$6.67 \\times 10^{-11}$ N·m²/kg². Sets the strength of Newtonian gravity." },
    { term: "Banking angle", def: "Tilt of a curved road that lets cars turn using normal force instead of friction." },
    { term: "Kepler's laws", def: "Three laws describing planetary orbits: elliptical orbits, equal areas in equal times, $T^2 \\propto a^3$." }
  ],

  "shm": [
    { term: "Simple harmonic motion (SHM)", def: "Oscillation where restoring force is proportional to displacement: $F = -kx$." },
    { term: "Restoring force", def: "A force pushing an object back toward equilibrium. Pulls harder the further away you go." },
    { term: "Equilibrium position", def: "Where the net force is zero — the 'rest' point of the oscillation." },
    { term: "Spring constant ($k$)", def: "Stiffness of a spring. Big $k$ = stiff (small displacement per force). Small $k$ = floppy." },
    { term: "Hooke's law", def: "$F = -kx$ — the restoring force is proportional to displacement. Defines a harmonic oscillator." },
    { term: "Amplitude ($A$)", def: "Maximum displacement from equilibrium." },
    { term: "Period ($T$)", def: "Time for one complete cycle." },
    { term: "Frequency ($f$)", def: "Cycles per second: $f = 1/T$. Units: hertz (Hz)." },
    { term: "Angular frequency ($\\omega$)", def: "$2\\pi f$. Convenient for trig formulas." },
    { term: "Phase", def: "Where in the cycle the oscillation is. $x = A\\cos(\\omega t + \\phi)$ — $\\phi$ is the phase." },
    { term: "Damping", def: "Force that slows oscillations over time, like air resistance or friction." },
    { term: "Underdamped", def: "Damping weak enough that oscillation still occurs (just with decaying amplitude)." },
    { term: "Overdamped", def: "Damping strong enough that no oscillation — system slides back to equilibrium." },
    { term: "Critical damping", def: "Boundary case ($\\gamma = \\omega_0$) — fastest return to equilibrium with no oscillation." },
    { term: "Resonance", def: "Large response when a driving force matches the natural frequency." },
    { term: "Pendulum", def: "Mass on a string/rod swinging under gravity. Period $T = 2\\pi\\sqrt{L/g}$ for small angles." }
  ],

  "rotational": [
    { term: "Angular velocity ($\\omega$)", def: "How fast something rotates, in radians per second." },
    { term: "Angular acceleration ($\\alpha$)", def: "Rate of change of angular velocity." },
    { term: "Axis of rotation", def: "The fixed line around which an object rotates." },
    { term: "Torque ($\\tau$)", def: "Rotational analog of force — twist. $\\tau = rF\\sin\\theta$." },
    { term: "Moment of inertia ($I$)", def: "Rotational analog of mass — depends on how mass is distributed around the axis." },
    { term: "Angular momentum ($L$)", def: "Rotational analog of momentum: $L = I\\omega$. Conserved if no external torque." },
    { term: "Parallel axis theorem", def: "If $I_{cm}$ is the moment of inertia about the center of mass, the moment about a parallel axis distance $d$ away is $I_{cm} + Md^2$." },
    { term: "Radian", def: "Angle measure where the full circle is $2\\pi$ rad. $360° = 2\\pi$ rad." },
    { term: "Rolling without slipping", def: "Wheel rolls so contact point momentarily stationary: $v = \\omega R$." }
  ],

  "fluids": [
    { term: "Fluid", def: "A substance that flows — liquids and gases. Cannot resist shear indefinitely (solids can)." },
    { term: "Density ($\\rho$)", def: "Mass per unit volume. Water: $1000$ kg/m³." },
    { term: "Pressure ($P$)", def: "Force per unit area. Pascals (Pa) = N/m²." },
    { term: "Atmosphere (atm)", def: "Standard atmospheric pressure at sea level. $1$ atm $\\approx 101325$ Pa." },
    { term: "Buoyancy", def: "Upward force on a submerged object equal to the weight of fluid displaced (Archimedes)." },
    { term: "Archimedes' principle", def: "An object in a fluid feels an upward buoyant force equal to the weight of fluid it displaces." },
    { term: "Hydrostatic", def: "Relating to fluids at rest." },
    { term: "Gauge pressure", def: "Pressure ABOVE atmospheric. Tire gauges read gauge pressure (zero when tire is flat in air)." },
    { term: "Incompressible", def: "Density doesn't change under pressure (good approximation for liquids)." },
    { term: "Continuity equation", def: "$A_1 v_1 = A_2 v_2$ — flow rate constant in an incompressible pipe." },
    { term: "Bernoulli's principle", def: "Faster flow = lower pressure. Why airplanes lift and curveballs curve." },
    { term: "Streamline", def: "An imaginary line in a flowing fluid such that velocity is tangent to it at every point." },
    { term: "Viscosity", def: "Resistance to flow. Honey: high viscosity. Water: low." },
    { term: "Pascal's principle", def: "Pressure applied to a confined fluid transmits undiminished to every point. The basis of hydraulics." }
  ],

  "kinetic-theory": [
    { term: "Molecule", def: "Group of atoms bound together. Gas molecules zip around colliding." },
    { term: "Mean free path", def: "Average distance between molecular collisions." },
    { term: "RMS speed", def: "Root-mean-square speed — typical molecular speed in a gas: $v_{rms} = \\sqrt{3 k_B T / m}$." },
    { term: "Boltzmann constant ($k_B$)", def: "$1.38 \\times 10^{-23}$ J/K. Bridges temperature and microscopic energy." },
    { term: "Ideal gas", def: "Model: point particles, no interactions except collisions. $PV = nRT$." },
    { term: "Degree of freedom", def: "Independent way to store energy (translation, rotation, vibration)." },
    { term: "Equipartition", def: "Each quadratic energy term averages $\\tfrac{1}{2} k_B T$ in equilibrium." }
  ],

  "thermodynamics": [
    { term: "System", def: "The part of the universe you're studying. Surroundings = everything else." },
    { term: "Isolated system", def: "Neither energy nor matter crosses the system boundary." },
    { term: "Closed system", def: "Energy can cross, but matter can't." },
    { term: "Open system", def: "Both energy and matter can cross the boundary." },
    { term: "Temperature ($T$)", def: "Measure of average molecular kinetic energy. Always positive on the absolute (kelvin) scale." },
    { term: "Kelvin (K)", def: "SI temperature scale. $0$ K = absolute zero ≈ $-273.15°$C. No degree symbol." },
    { term: "Heat ($Q$)", def: "Energy transferred due to temperature difference. NOT a stored substance." },
    { term: "Internal energy ($U$)", def: "Total microscopic kinetic + potential energy of a system." },
    { term: "Entropy ($S$)", def: "Measure of microscopic disorder, or equivalently of the number of microstates consistent with the macrostate." },
    { term: "Specific heat ($c$)", def: "Heat needed per kilogram to raise temperature by 1 K." },
    { term: "Adiabatic", def: "No heat exchange with surroundings. $Q = 0$." },
    { term: "Isothermal", def: "Constant temperature." },
    { term: "Isobaric", def: "Constant pressure." },
    { term: "Isochoric", def: "Constant volume." },
    { term: "Reversible", def: "Idealized process that can be run backwards without any net change. Maximum efficiency processes are reversible." },
    { term: "Carnot engine", def: "Idealized reversible heat engine with maximum possible efficiency." }
  ],

  "waves": [
    { term: "Wave", def: "A disturbance that propagates through space, carrying energy but not matter." },
    { term: "Wavelength ($\\lambda$)", def: "Distance between successive crests of a wave." },
    { term: "Frequency ($f$)", def: "Cycles per second. Hertz (Hz)." },
    { term: "Amplitude", def: "Height of a wave from rest level to peak." },
    { term: "Wave speed ($v$)", def: "How fast a wave travels: $v = f\\lambda$." },
    { term: "Period ($T$)", def: "Time for one complete cycle: $T = 1/f$." },
    { term: "Wavenumber ($k$)", def: "Spatial frequency: $k = 2\\pi/\\lambda$." },
    { term: "Crest", def: "Highest point of a wave. Opposite: trough (lowest)." },
    { term: "Node", def: "Point of zero displacement in a standing wave. Antinode: maximum displacement." },
    { term: "Standing wave", def: "A wave that doesn't travel — looks stationary with fixed nodes." },
    { term: "Transverse wave", def: "Oscillation perpendicular to direction of propagation. Light, string waves." },
    { term: "Longitudinal wave", def: "Oscillation along direction of propagation. Sound." },
    { term: "Interference", def: "When waves overlap, they add (or partially cancel) — constructive or destructive." },
    { term: "Beat frequency", def: "Slow pulsing in amplitude when two close-frequency waves overlap. $f_{beat} = |f_1 - f_2|$." },
    { term: "Doppler effect", def: "Apparent frequency shift due to relative motion between source and observer." },
    { term: "Decibel (dB)", def: "Logarithmic measure of sound intensity. $+10$ dB = $10\\times$ intensity." }
  ],

  "optics-geometric": [
    { term: "Refraction", def: "Bending of light when passing between media of different refractive index." },
    { term: "Reflection", def: "Light bouncing off a surface — angle of incidence equals angle of reflection." },
    { term: "Refractive index ($n$)", def: "Ratio $c/v$ — how much a medium slows light." },
    { term: "Focal length ($f$)", def: "Distance from a lens to where parallel rays converge." },
    { term: "Real image", def: "Light actually converges there — can project on a screen." },
    { term: "Virtual image", def: "Light only APPEARS to come from there (e.g., behind a mirror)." },
    { term: "Total internal reflection", def: "All light reflects back from a boundary (no refraction) — basis of fiber optics." },
    { term: "Magnification", def: "Ratio of image size to object size." }
  ],

  "optics-wave": [
    { term: "Interference pattern", def: "Bright/dark fringes from overlapping waves." },
    { term: "Diffraction", def: "Wave bending around obstacles or through openings." },
    { term: "Coherent light", def: "Light waves with a stable phase relationship — needed for stable interference (lasers)." },
    { term: "Polarization", def: "The direction in which a transverse wave oscillates (e.g., electric field of light)." },
    { term: "Slit", def: "Narrow opening light passes through. Width comparable to wavelength gives strong diffraction." },
    { term: "Path difference", def: "Difference in distance traveled by two waves before meeting. Determines interference." },
    { term: "Grating", def: "Many parallel slits — sharpens the interference pattern, used to separate colors." }
  ],

  "electrostatics": [
    { term: "Charge ($q$)", def: "Property of particles that determines electric force. Two types: positive and negative." },
    { term: "Coulomb (C)", def: "Unit of charge. Electron has charge $-1.6 \\times 10^{-19}$ C." },
    { term: "Coulomb's law", def: "Force between charges: $F = kq_1 q_2/r^2$. Same sign repels, opposite attracts." },
    { term: "Coulomb constant ($k$)", def: "$k = 1/(4\\pi\\varepsilon_0) \\approx 9 \\times 10^9$ N·m²/C². Sets EM force strength." },
    { term: "Electric field ($\\vec E$)", def: "Force per unit positive test charge — describes the influence around a charge." },
    { term: "Field line", def: "A line tangent to $\\vec E$ at every point. Visualization tool — points from $+$ to $-$." },
    { term: "Electric potential ($V$)", def: "Potential energy per unit charge. Measured in volts." },
    { term: "Voltage", def: "Difference in electric potential between two points." },
    { term: "Volt (V)", def: "Unit of potential. $1$ V = $1$ J/C." },
    { term: "Equipotential", def: "Surface where the potential is the same everywhere. Always perpendicular to $\\vec E$." },
    { term: "Conductor", def: "Material where charges move freely (metals)." },
    { term: "Insulator", def: "Material where charges don't move easily (plastic, glass)." },
    { term: "Dielectric", def: "Insulating material that polarizes in an electric field. Reduces field strength inside." },
    { term: "Capacitor", def: "Device that stores energy in an electric field between two conductors." },
    { term: "Gauss's law", def: "Total electric flux through any closed surface = enclosed charge $/ \\varepsilon_0$. Powerful for symmetric distributions." },
    { term: "Flux ($\\Phi$)", def: "How much of a field passes through a surface. For $\\vec E$: $\\Phi = \\int \\vec E \\cdot d\\vec A$." }
  ],

  "electric-circuits": [
    { term: "Circuit", def: "A closed loop allowing current to flow. Need a source (battery) and a path back." },
    { term: "Current ($I$)", def: "Rate of charge flow. Measured in amperes (A) = C/s." },
    { term: "Resistance ($R$)", def: "How much a component opposes current. Ohms ($\\Omega$) = V/A." },
    { term: "Voltage ($V$)", def: "Energy per charge — what pushes current through a circuit." },
    { term: "Ohm's law", def: "$V = IR$ for ohmic materials." },
    { term: "Resistor", def: "Circuit component with fixed resistance — dissipates energy as heat." },
    { term: "Series", def: "Components in a single path — same current through all. Resistances add." },
    { term: "Parallel", def: "Components on separate branches — same voltage across all. Reciprocal resistances add." },
    { term: "EMF (electromotive force)", def: "Voltage a battery would supply with no current flowing. Internal resistance reduces actual output." },
    { term: "Power dissipation", def: "Energy lost as heat per second: $P = VI = I^2R = V^2/R$." },
    { term: "Internal resistance", def: "Resistance inside a real battery — causes voltage drop under load." },
    { term: "Conductance", def: "Reciprocal of resistance: $G = 1/R$. Units: siemens (S)." },
    { term: "Junction", def: "A point where three or more wires meet in a circuit. KCL applies here." },
    { term: "Loop", def: "A closed path around a circuit. KVL applies to any loop." },
    { term: "Kirchhoff's current law (KCL)", def: "Total current into a junction equals total current out (charge conservation)." },
    { term: "Kirchhoff's voltage law (KVL)", def: "Sum of voltages around any closed loop equals zero (energy conservation)." }
  ],

  "magnetism-induction": [
    { term: "Magnetic field ($\\vec B$)", def: "Field that exerts force on moving charges and current-carrying wires. Units: tesla (T)." },
    { term: "Magnetic flux ($\\Phi_B$)", def: "How much $\\vec B$ pierces a surface. $\\Phi = \\int \\vec B \\cdot d\\vec A$. Webers (Wb)." },
    { term: "Induction", def: "Generating an EMF (voltage) from a changing magnetic flux." },
    { term: "Faraday's law", def: "EMF = $-N \\, d\\Phi/dt$. Changing flux drives current." },
    { term: "Lenz's law", def: "Induced current opposes the change that caused it. Nature resists flux change." },
    { term: "Solenoid", def: "Coil of wire — produces nearly uniform field inside." },
    { term: "Inductor", def: "Component that stores energy in a magnetic field. Opposes current change." }
  ],

  "ac-circuits": [
    { term: "AC (alternating current)", def: "Current that oscillates direction periodically (e.g., $60$ Hz in US wall outlets)." },
    { term: "DC (direct current)", def: "Current flowing in one direction only — what batteries supply." },
    { term: "Reactance ($X$)", def: "AC 'resistance' from inductors or capacitors. Frequency-dependent." },
    { term: "Impedance ($Z$)", def: "Total opposition to AC current — combines resistance and reactance." },
    { term: "RMS value", def: "Root-mean-square — the DC equivalent that would deliver the same average power." },
    { term: "Phase angle ($\\phi$)", def: "Lag/lead between voltage and current waveforms in AC." },
    { term: "Resonance", def: "Frequency where $X_L = X_C$ — circuit responds maximally." },
    { term: "Transformer", def: "Two coupled coils — steps voltage up or down based on turns ratio." }
  ],

  "maxwell-em": [
    { term: "Electromagnetic wave", def: "Self-propagating oscillation of electric and magnetic fields. Travels at $c$ in vacuum." },
    { term: "Speed of light ($c$)", def: "$\\approx 3 \\times 10^8$ m/s. The same in every inertial frame." },
    { term: "Poynting vector", def: "$\\vec S = \\vec E \\times \\vec B/\\mu_0$ — gives direction and magnitude of EM energy flow." },
    { term: "Permittivity ($\\varepsilon_0$)", def: "Constant relating $\\vec E$ to charge density: Gauss's law." },
    { term: "Permeability ($\\mu_0$)", def: "Constant relating $\\vec B$ to current density: Ampère's law." },
    { term: "Displacement current", def: "Maxwell's addition: changing electric field acts like a current. Closes the EM wave loop." }
  ],

  "special-relativity": [
    { term: "Reference frame", def: "A coordinate system from which observations are made — like an observer's viewpoint." },
    { term: "Inertial frame", def: "A reference frame moving at constant velocity (not accelerating). Newton's laws hold in inertial frames." },
    { term: "Rest frame", def: "An inertial frame where the object in question is stationary." },
    { term: "Lorentz factor ($\\gamma$)", def: "$1/\\sqrt{1 - v^2/c^2}$. Equals 1 at rest, grows as $v \\to c$." },
    { term: "Lorentz transformation", def: "Equations relating coordinates between two inertial frames at relative velocity $v$." },
    { term: "Time dilation", def: "Moving clocks tick slower as seen from another frame: $\\Delta t = \\gamma \\Delta t_0$." },
    { term: "Length contraction", def: "Moving objects shorten along the direction of motion: $L = L_0/\\gamma$." },
    { term: "Proper time ($\\Delta t_0$)", def: "Time measured by a clock at rest with the event — the smallest possible $\\Delta t$." },
    { term: "Proper length ($L_0$)", def: "Length measured by a frame at rest with the object — the largest possible $L$." },
    { term: "Rest mass ($m$)", def: "Mass measured in the object's rest frame. An invariant quantity in modern usage." },
    { term: "Spacetime", def: "Unified 4D structure: 3 space dimensions + 1 time dimension. Relativity treats them together." },
    { term: "Light cone", def: "Region of spacetime causally connected to an event. Past and future inside; 'elsewhere' is causally disconnected." },
    { term: "Invariant", def: "A quantity all observers agree on, regardless of their frame. E.g., spacetime interval and rest mass." }
  ],

  "general-relativity": [
    { term: "Equivalence principle", def: "Locally, you can't distinguish gravity from acceleration. Free fall = inertial." },
    { term: "Spacetime curvature", def: "GR says gravity isn't a force but the curvature of spacetime caused by mass-energy." },
    { term: "Geodesic", def: "The 'straight line' in curved spacetime — the path of a freely falling object." },
    { term: "Schwarzschild radius", def: "Event horizon of a non-rotating black hole: $r_s = 2GM/c^2$." },
    { term: "Black hole", def: "Region where escape velocity exceeds $c$ — nothing escapes from inside the event horizon." },
    { term: "Cosmological constant ($\\Lambda$)", def: "Constant in Einstein's equations — drives accelerating expansion (dark energy)." },
    { term: "Hubble constant ($H_0$)", def: "Expansion rate of the universe today. $\\approx 70$ km/s per megaparsec." }
  ],

  "lagrangian-hamiltonian": [
    { term: "Lagrangian ($L$)", def: "$T - V$ — kinetic minus potential energy. The fundamental scalar of analytical mechanics." },
    { term: "Generalized coordinates", def: "Coordinates that uniquely describe the system, possibly non-Cartesian (angles, distances along curves)." },
    { term: "Generalized momentum", def: "$\\partial L/\\partial \\dot q$. Reduces to ordinary $mv$ for Cartesian coordinates." },
    { term: "Hamiltonian ($H$)", def: "Often the total energy, written in terms of positions and momenta." },
    { term: "Phase space", def: "Space of all $(q, p)$ pairs — complete description of system state." },
    { term: "Action ($S$)", def: "Time integral of the Lagrangian. Nature picks the path that makes $S$ stationary." },
    { term: "Poisson bracket", def: "Operation on phase-space functions. Classical precursor to the quantum commutator." }
  ],

  "statistical-mechanics": [
    { term: "Microstate", def: "Detailed description of the system (positions and momenta of every particle)." },
    { term: "Macrostate", def: "Coarse description (temperature, pressure, total energy)." },
    { term: "Partition function ($Z$)", def: "Sum of Boltzmann factors over all microstates. Encodes all thermodynamics." },
    { term: "Boltzmann factor", def: "$e^{-E/k_B T}$ — probability weight of a microstate at temperature $T$." },
    { term: "Canonical ensemble", def: "Many copies of a system at fixed $N, V, T$. Describes systems in contact with a heat bath." },
    { term: "Equipartition", def: "Each quadratic energy term gets $\\tfrac{1}{2} k_B T$ on average (classical limit)." }
  ],

  "qm-foundations": [
    { term: "Wavefunction ($\\psi$)", def: "Complex-valued function whose squared modulus gives the probability density." },
    { term: "Normalized", def: "Total probability $\\int |\\psi|^2 dx = 1$. Required for a valid wavefunction." },
    { term: "Schrödinger equation", def: "Fundamental QM equation: $i\\hbar \\partial_t \\psi = \\hat H \\psi$." },
    { term: "Hamiltonian ($\\hat H$)", def: "Total energy operator — kinetic + potential. Governs time evolution." },
    { term: "Operator", def: "QM observable — a Hermitian object acting on wavefunctions. Eigenvalues are possible measurement results." },
    { term: "Hermitian", def: "An operator equal to its own conjugate transpose. Hermitian operators have real eigenvalues — required for observables." },
    { term: "Observable", def: "Anything you can measure (position, momentum, energy)." },
    { term: "Expectation value", def: "Average measurement result: $\\langle \\hat O \\rangle = \\int \\psi^* \\hat O \\psi\\,dx$." },
    { term: "Eigenstate", def: "A state where measuring an observable gives a definite value with certainty." },
    { term: "Eigenvalue", def: "The number an operator returns when acting on its eigenstate: $\\hat O |\\psi\\rangle = a |\\psi\\rangle$, $a$ is the eigenvalue." },
    { term: "Superposition", def: "A linear combination of eigenstates — the cat-half-alive-half-dead phenomenon." },
    { term: "Commutator", def: "$[A, B] = AB - BA$. Nonzero ⇒ can't simultaneously measure both observables sharply." },
    { term: "Bra-ket notation", def: "Dirac's notation: $|\\psi\\rangle$ is a state vector (ket), $\\langle\\psi|$ its dual (bra). $\\langle\\phi|\\psi\\rangle$ is an inner product." },
    { term: "$\\hbar$ (h-bar)", def: "Reduced Planck constant, $\\approx 1.055 \\times 10^{-34}$ J·s. Sets the quantum scale." }
  ],

  "qm-1d": [
    { term: "Bound state", def: "A normalizable wavefunction confined to a region — particle stays put." },
    { term: "Scattering state", def: "A non-normalizable state extending to infinity — particle can escape." },
    { term: "Quantization", def: "Restriction of energies to discrete allowed values — like notes on a guitar string." },
    { term: "Zero-point energy", def: "Lowest possible energy — nonzero in QM (uncertainty forbids rest)." },
    { term: "Tunneling", def: "Quantum particle crossing a classically forbidden barrier — wavefunction leaks through." },
    { term: "Infinite well", def: "Box with impenetrable walls — particle trapped exactly inside." },
    { term: "Harmonic oscillator", def: "QM version of $V = \\tfrac{1}{2} k x^2$. Levels equally spaced by $\\hbar\\omega$." }
  ],

  "atomic-physics": [
    { term: "Orbital", def: "Quantum-mechanical electron 'cloud' — probability distribution around the nucleus." },
    { term: "Quantum numbers", def: "Integers labeling allowed electron states: $n$ (principal), $\\ell$ (orbital), $m$ (magnetic), $m_s$ (spin)." },
    { term: "Shell", def: "Electrons with the same $n$. K shell: $n = 1$, L shell: $n = 2$, etc." },
    { term: "Subshell", def: "Electrons with the same $n$ and $\\ell$. s, p, d, f orbitals." },
    { term: "Pauli exclusion", def: "No two electrons can share all four quantum numbers." },
    { term: "Spin", def: "Intrinsic angular momentum of the electron. Half-integer: $\\pm \\hbar/2$." },
    { term: "Ionization energy", def: "Energy needed to remove an electron from an atom. For H: 13.6 eV." }
  ],

  "solid-state": [
    { term: "Crystal lattice", def: "Repeating periodic arrangement of atoms forming a solid." },
    { term: "Band", def: "A range of allowed electron energies in a solid (from overlapping atomic orbitals)." },
    { term: "Band gap", def: "Energy range with no allowed states, between valence and conduction bands." },
    { term: "Conductor", def: "Material with partially filled conduction band — electrons flow freely." },
    { term: "Insulator", def: "Material with large band gap — no free electrons at room temperature." },
    { term: "Semiconductor", def: "Material with small band gap — between conductor and insulator." },
    { term: "Doping", def: "Adding impurities to a semiconductor to tune its conductivity." },
    { term: "Fermi energy", def: "Highest occupied electron energy at absolute zero." }
  ],

  "nuclear": [
    { term: "Nucleus", def: "Tiny dense center of an atom — protons + neutrons, $\\sim 10^5$ times smaller than the atom." },
    { term: "Nucleon", def: "A particle in the nucleus — proton OR neutron." },
    { term: "Isotope", def: "Atoms of the same element with different numbers of neutrons. Same chemistry, different mass." },
    { term: "Binding energy", def: "Energy holding the nucleus together — released when nucleons bind, must be added to separate them." },
    { term: "Half-life", def: "Time for half of a radioactive sample to decay." },
    { term: "Alpha decay", def: "Emission of a He-4 nucleus (2 protons + 2 neutrons)." },
    { term: "Beta decay", def: "A neutron turns into a proton (or vice versa), emitting an electron (or positron) and a neutrino." },
    { term: "Fission", def: "Splitting a heavy nucleus into lighter ones — releases energy." },
    { term: "Fusion", def: "Combining light nuclei into heavier ones — releases energy. Powers stars." }
  ],

  "particle-physics": [
    { term: "Standard Model", def: "Our best theory of fundamental particles and forces (excluding gravity)." },
    { term: "Quark", def: "Elementary particle that makes up protons, neutrons, and other hadrons. Six flavors." },
    { term: "Lepton", def: "Elementary particle that doesn't feel the strong force. Electrons, muons, neutrinos." },
    { term: "Boson", def: "Particle with integer spin — includes force carriers (photon, gluon, $W, Z$, Higgs)." },
    { term: "Fermion", def: "Particle with half-integer spin — quarks and leptons. Obeys Pauli exclusion." },
    { term: "Hadron", def: "Particle made of quarks: baryons (3 quarks, like proton) and mesons ($q\\bar q$ pairs)." },
    { term: "Antiparticle", def: "Partner with opposite charge but same mass. Electron ↔ positron." },
    { term: "Higgs boson", def: "Quantum of the Higgs field — gives mass to other particles. Discovered 2012." }
  ],

  "astrophysics-cosmology": [
    { term: "Luminosity ($L$)", def: "Total energy emitted per second by a star or other source. Watts." },
    { term: "Parsec (pc)", def: "$\\approx 3.26$ light-years. Astronomical distance unit." },
    { term: "Light-year", def: "Distance light travels in one year: $\\approx 9.46 \\times 10^{15}$ m." },
    { term: "Redshift", def: "Cosmological stretching of light wavelengths as the universe expands." },
    { term: "Big Bang", def: "Model: universe was hot, dense, and expanding 13.8 billion years ago." },
    { term: "CMB", def: "Cosmic Microwave Background — leftover thermal radiation from when the universe became transparent at $z \\sim 1100$." },
    { term: "Dark matter", def: "Matter not interacting via electromagnetism. Detected only through gravity. ~85% of all matter." },
    { term: "Dark energy", def: "Mysterious cause of accelerating cosmic expansion. ~68% of total mass-energy." }
  ],

  "plasma-physics": [
    { term: "Plasma", def: "Ionized gas — atoms have lost or gained electrons. Fourth state of matter." },
    { term: "Ionization", def: "Process of stripping electrons from atoms, creating charged particles." },
    { term: "Debye length", def: "Distance over which a plasma screens out electric fields." },
    { term: "Plasma frequency", def: "Natural electron oscillation frequency in a plasma." },
    { term: "Magnetic confinement", def: "Using magnetic fields to trap a hot plasma — needed for fusion." },
    { term: "Tokamak", def: "Doughnut-shaped magnetic-confinement fusion device." },
    { term: "Fusion", def: "Combining light nuclei to release energy — the holy grail of clean energy." }
  ],

  "fluid-dynamics": [
    { term: "Streamline", def: "A path tangent to the velocity field at every point — shows fluid flow." },
    { term: "Laminar", def: "Smooth, predictable flow — layers slide past each other." },
    { term: "Turbulent", def: "Chaotic, swirling flow at high speeds or low viscosity." },
    { term: "Reynolds number ($Re$)", def: "Dimensionless ratio of inertial to viscous forces. Sets laminar/turbulent transition." },
    { term: "Viscosity ($\\mu$)", def: "Resistance to flow. Honey: high. Water: low." },
    { term: "Navier-Stokes equation", def: "Fundamental fluid-flow equation — Newton's 2nd law for a fluid element." },
    { term: "Boundary layer", def: "Thin region near a surface where viscosity dominates flow." },
    { term: "Mach number", def: "Speed divided by speed of sound. $M < 1$: subsonic, $M > 1$: supersonic." }
  ],

  "continuum-elasticity": [
    { term: "Stress ($\\sigma$)", def: "Force per area applied to a material. Pascals (Pa)." },
    { term: "Strain ($\\varepsilon$)", def: "Fractional deformation: $\\Delta L/L$. Dimensionless." },
    { term: "Young's modulus ($E$)", def: "Stiffness — stress over strain for elastic stretching. Steel: $\\sim 200$ GPa." },
    { term: "Elastic limit", def: "Maximum stress before permanent deformation begins." },
    { term: "Poisson's ratio", def: "Ratio of transverse to axial strain. Tells you how much something contracts sideways when stretched." },
    { term: "Bulk modulus ($K$)", def: "Resistance to volume change under pressure." },
    { term: "Shear modulus ($G$)", def: "Resistance to shape change under shearing forces." }
  ],

  "central-force": [
    { term: "Central force", def: "A force pointing toward (or away from) a fixed center, magnitude depending only on distance." },
    { term: "Orbit", def: "Path of an object under a central force — typically an ellipse for $1/r^2$ forces." },
    { term: "Eccentricity ($e$)", def: "Shape of orbit: $0$ circle, $<1$ ellipse, $=1$ parabola, $>1$ hyperbola." },
    { term: "Perihelion", def: "Closest approach to the central body (Sun, for planets)." },
    { term: "Aphelion", def: "Farthest point in an orbit." },
    { term: "Effective potential", def: "Combines true potential with the centrifugal $L^2/(2mr^2)$ — turns 2D problem into 1D radial." }
  ],

  "nonlinear-chaos-physics": [
    { term: "Nonlinear", def: "An equation where output isn't proportional to input. Real-world systems are mostly nonlinear." },
    { term: "Chaos", def: "Sensitive dependence on initial conditions — tiny perturbations grow exponentially." },
    { term: "Strange attractor", def: "Bounded but never-repeating trajectory in phase space (e.g., Lorenz)." },
    { term: "Lyapunov exponent", def: "Quantifies chaos — positive value means exponential divergence of trajectories." },
    { term: "Bifurcation", def: "Qualitative change in behavior as a parameter is varied." },
    { term: "Period doubling", def: "Common route to chaos: stable period 2, 4, 8, 16, ... then chaos." }
  ],

  "angular-momentum-spin": [
    { term: "Angular momentum ($\\vec L$)", def: "Rotational analog of momentum. $\\vec L = \\vec r \\times \\vec p$ for orbital motion." },
    { term: "Orbital angular momentum", def: "$\\vec L$ associated with motion around a point." },
    { term: "Spin angular momentum ($\\vec S$)", def: "Intrinsic angular momentum — particles 'have' it without orbiting anything." },
    { term: "Pauli matrices", def: "Three $2 \\times 2$ matrices ($\\sigma_x, \\sigma_y, \\sigma_z$) representing spin-1/2 operators." },
    { term: "Total angular momentum ($\\vec J$)", def: "$\\vec L + \\vec S$ — what's conserved when both contribute." },
    { term: "Quantum number $\\ell$", def: "Labels eigenvalues of $L^2$: $\\hbar^2 \\ell(\\ell+1)$. Takes integer values." },
    { term: "Magnetic quantum number $m$", def: "Labels eigenvalues of $L_z$: $\\hbar m$, with $-\\ell \\leq m \\leq \\ell$." }
  ],

  "qm-3d-hydrogen": [
    { term: "Spherical coordinates", def: "$(r, \\theta, \\phi)$ — distance, polar angle, azimuthal angle. Natural for central-force problems." },
    { term: "Spherical harmonic ($Y_\\ell^m$)", def: "Angular eigenfunctions in spherical coordinates — appear everywhere in atomic physics." },
    { term: "Radial wavefunction $R_{n\\ell}(r)$", def: "Radial part of the H wavefunction. Depends on $n$ and $\\ell$." },
    { term: "Principal quantum number ($n$)", def: "Main label of H energy levels. $n = 1, 2, 3, \\ldots$" },
    { term: "Bohr radius ($a_0$)", def: "Natural length scale of hydrogen: $\\approx 0.53$ Å." },
    { term: "Degeneracy", def: "Number of states with the same energy. In H: $n^2$ orbital states per level." }
  ],

  "perturbation-theory": [
    { term: "Perturbation", def: "Small change to a system whose exact solution is known." },
    { term: "Unperturbed Hamiltonian", def: "The 'easy' part you can solve exactly: $H_0$." },
    { term: "Perturbation ($H'$)", def: "Small additional term you're trying to handle: $H = H_0 + \\lambda H'$." },
    { term: "Matrix element", def: "$\\langle n | \\hat O | m \\rangle$ — overlap of operator action between two states." },
    { term: "Fermi's golden rule", def: "Transition rate from initial to final state under a perturbation." },
    { term: "Degenerate perturbation theory", def: "Special technique when the unperturbed states have the same energy." }
  ],

  "identical-particles": [
    { term: "Identical particle", def: "Same kind — electrons are indistinguishable; you can't label them." },
    { term: "Symmetric wavefunction", def: "Unchanged under swapping two particles. Bosons." },
    { term: "Antisymmetric wavefunction", def: "Flips sign under swapping. Fermions." },
    { term: "Boson", def: "Particle with integer spin (photons, He-4 atoms). Can pile up in the same state." },
    { term: "Fermion", def: "Particle with half-integer spin (electrons, protons). Obeys Pauli exclusion." },
    { term: "Exchange interaction", def: "Energy difference from the (anti)symmetrization requirement — no classical analog." },
    { term: "Slater determinant", def: "Mathematical construction guaranteeing antisymmetry for a multi-fermion state." }
  ],

  "scattering-theory": [
    { term: "Cross section ($\\sigma$)", def: "Effective area for an interaction — like a target size." },
    { term: "Differential cross section", def: "$d\\sigma/d\\Omega$ — scattering distribution per unit solid angle." },
    { term: "Scattering amplitude $f(\\theta)$", def: "Complex function whose square gives the differential cross section." },
    { term: "Born approximation", def: "First-order treatment of scattering for weak potentials." },
    { term: "Phase shift", def: "How much the asymptotic wave is shifted by the potential. Encodes scattering info." },
    { term: "Partial wave", def: "Component of the scattering amplitude with definite angular momentum $\\ell$." }
  ],

  "density-matrices": [
    { term: "Pure state", def: "Quantum state describable by a single wavefunction $|\\psi\\rangle$." },
    { term: "Mixed state", def: "Classical mixture of pure states. Density matrix $\\rho = \\sum p_i |\\psi_i\\rangle\\langle\\psi_i|$." },
    { term: "Density matrix ($\\rho$)", def: "Generalizes wavefunction to mixed states. Positive, Hermitian, trace 1." },
    { term: "Partial trace", def: "'Trace out' a subsystem to get the reduced density matrix on the other." },
    { term: "Decoherence", def: "Loss of quantum interference due to environmental coupling. Why macroscopic objects appear classical." },
    { term: "Lindblad equation", def: "Master equation governing how density matrices evolve in open systems." }
  ],

  "path-integrals": [
    { term: "Path integral", def: "Feynman's formulation of QM: sum amplitudes $e^{iS/\\hbar}$ over all possible paths." },
    { term: "Propagator", def: "Amplitude to go from initial to final state — computed by path integral." },
    { term: "Stationary phase", def: "In the classical limit, only paths near the stationary action contribute (recovers classical mechanics)." },
    { term: "Wick rotation", def: "$t \\to -i\\tau$ — converts the path integral to a statistical-mechanics partition function." },
    { term: "Functional integral", def: "Integral over all functions (paths or fields) — backbone of QFT formulations." }
  ],

  "quantum-information": [
    { term: "Qubit", def: "Quantum bit — a 2-state quantum system that can be in superposition." },
    { term: "Bloch sphere", def: "3D representation of a single qubit state." },
    { term: "Entanglement", def: "Correlation between qubits that can't be explained by separate states — strictly quantum." },
    { term: "Bell state", def: "Maximally entangled two-qubit state, like $(|00\\rangle + |11\\rangle)/\\sqrt 2$." },
    { term: "Quantum gate", def: "Unitary operation on qubits (e.g., Hadamard, CNOT)." },
    { term: "No-cloning theorem", def: "No quantum operation can copy an unknown state." },
    { term: "Teleportation", def: "Sending a qubit state using entanglement + 2 classical bits." }
  ],

  "symmetries-noether": [
    { term: "Symmetry", def: "A transformation that leaves the laws of physics unchanged." },
    { term: "Continuous symmetry", def: "Parameterized by a continuous variable (rotations, translations)." },
    { term: "Discrete symmetry", def: "Finite or countable set of transformations (parity, time reversal)." },
    { term: "Conserved quantity", def: "Doesn't change with time under the dynamics." },
    { term: "Noether's theorem", def: "Every continuous symmetry of the action gives a conserved quantity." },
    { term: "Gauge symmetry", def: "Local (spacetime-dependent) symmetry — leads to force-carrying fields." }
  ],

  "classical-field-theory": [
    { term: "Field", def: "A quantity defined at every point in spacetime — like temperature, $\\vec E$, or a relativistic scalar." },
    { term: "Lagrangian density ($\\mathcal{L}$)", def: "Generalization of Lagrangian: $L = \\int \\mathcal{L}\\,d^3 x$." },
    { term: "Scalar field", def: "A field that's just a number at each point (like the Higgs)." },
    { term: "Vector field", def: "A field that's a vector at each point (like $\\vec E$ or $\\vec A$)." },
    { term: "Spinor field", def: "A field describing spin-$1/2$ matter (electrons in QFT)." },
    { term: "Field equation", def: "PDE governing field evolution. Klein-Gordon for scalars, Dirac for spinors, Maxwell for EM." }
  ],

  "qft": [
    { term: "Quantum field", def: "An operator-valued field — promotes classical fields to quantum entities." },
    { term: "Creation operator", def: "$a^\\dagger$ — adds a quantum (particle) to the field." },
    { term: "Annihilation operator", def: "$a$ — removes a quantum from the field." },
    { term: "Vacuum", def: "Quantum state with no particles — still has zero-point fluctuations." },
    { term: "Feynman diagram", def: "Pictorial representation of a perturbative QFT process. Lines = propagators; vertices = interactions." },
    { term: "Propagator", def: "Amplitude for a particle to travel between two spacetime points." },
    { term: "QED", def: "Quantum Electrodynamics — QFT of electrons and photons. Most precisely tested theory ever." }
  ],

  "renormalization": [
    { term: "Renormalization", def: "Systematic procedure to absorb infinities from loop diagrams into redefined parameters." },
    { term: "Bare parameter", def: "Original (often infinite) parameter in the Lagrangian." },
    { term: "Renormalized parameter", def: "Physical, measurable, finite parameter." },
    { term: "Beta function ($\\beta$)", def: "Tells how coupling constants change with energy scale." },
    { term: "Running coupling", def: "Coupling constant depending on the energy at which you measure it." },
    { term: "Asymptotic freedom", def: "Coupling shrinks at high energy. QCD has this." },
    { term: "Renormalization group", def: "Framework for tracking how theories change under scale transformations." }
  ],

  "radiation-theory": [
    { term: "Radiation", def: "Energy emitted by accelerating charges in the form of EM waves." },
    { term: "Larmor formula", def: "$P \\propto a^2$ — power radiated by a non-relativistic accelerating charge." },
    { term: "Dipole radiation", def: "Radiation from oscillating dipole moment. Pattern: figure-8." },
    { term: "Multipole expansion", def: "Decomposes a charge distribution into monopole, dipole, quadrupole, ..." },
    { term: "Retarded potential", def: "EM potential computed at a delayed (retarded) time, accounting for finite signal speed." },
    { term: "Bremsstrahlung", def: "'Braking radiation' — emitted when a charged particle decelerates." },
    { term: "Synchrotron radiation", def: "Radiation from charged particles spiraling in magnetic fields. Forward-beamed when relativistic." }
  ],

  "em-waves-matter": [
    { term: "Dispersion", def: "Speed of wave depends on frequency. Causes prisms to split white light." },
    { term: "Refractive index ($n$)", def: "$c/v$ — factor by which medium slows light." },
    { term: "Permittivity ($\\varepsilon$)", def: "Material's response to electric field. $\\varepsilon = \\varepsilon_0 \\varepsilon_r$." },
    { term: "Phase velocity", def: "Speed of individual wave crests: $\\omega/k$." },
    { term: "Group velocity", def: "Speed of a wave packet (or signal): $d\\omega/dk$." },
    { term: "Skin depth", def: "Distance EM waves penetrate into a conductor before damping out." },
    { term: "Brewster angle", def: "Angle of incidence where reflected light is fully polarized." }
  ],

  "lasers": [
    { term: "LASER", def: "Light Amplification by Stimulated Emission of Radiation." },
    { term: "Spontaneous emission", def: "Excited atom emits a photon randomly." },
    { term: "Stimulated emission", def: "Excited atom emits a photon triggered by another, identical to it. The basis of laser amplification." },
    { term: "Population inversion", def: "More atoms in excited state than ground — required for amplification." },
    { term: "Cavity", def: "Pair of mirrors providing feedback in a laser — light bounces and builds up." },
    { term: "Coherent light", def: "Light waves with stable phase relationship — monochromatic and unidirectional." },
    { term: "Pumping", def: "External energy supply creating population inversion." }
  ],

  "quantum-optics": [
    { term: "Photon", def: "Quantum (particle) of light. Energy $E = hf$." },
    { term: "Coherent state", def: "Quantum state of light closest to classical — Poissonian photon counts." },
    { term: "Number state ($|n\\rangle$)", def: "State with exactly $n$ photons. Highly non-classical." },
    { term: "Squeezed light", def: "Quantum state with reduced noise in one quadrature at the cost of the other." },
    { term: "Antibunching", def: "Photon arrivals less random than Poisson — signature of single-photon source." },
    { term: "Cavity QED", def: "Quantum optics of atoms inside an optical cavity — strong coupling regime." }
  ],

  "amo": [
    { term: "Laser cooling", def: "Using lasers to slow atomic motion via momentum transfer — cools to microkelvin." },
    { term: "Magneto-optical trap (MOT)", def: "Combines laser cooling with magnetic field gradient to trap atoms." },
    { term: "Bose-Einstein condensate (BEC)", def: "Macroscopic occupation of the ground state by many bosons at ultralow temperature." },
    { term: "Doppler limit", def: "Lowest temperature achievable by basic Doppler cooling: $T_D = \\hbar\\Gamma/(2k_B)$." },
    { term: "Optical lattice", def: "Standing-wave laser interference pattern used to trap atoms in a periodic array." },
    { term: "Feshbach resonance", def: "Magnetic-field-tunable scattering — lets you tune atom interaction strength." }
  ],

  "phase-transitions": [
    { term: "Order parameter", def: "Quantity (like magnetization) that distinguishes phases. Zero in one phase, nonzero in the other." },
    { term: "First-order transition", def: "Discontinuous order parameter, latent heat (e.g., melting)." },
    { term: "Second-order transition", def: "Continuous order parameter, no latent heat (e.g., Curie point)." },
    { term: "Critical point", def: "Special point where phase boundary terminates. Distinct phases become indistinguishable." },
    { term: "Universality class", def: "Group of phase transitions with the same critical exponents, set by symmetry + dimension." },
    { term: "Correlation length ($\\xi$)", def: "Length scale of fluctuations. Diverges at the critical point." },
    { term: "Landau theory", def: "Free energy expansion in the order parameter. Gives mean-field predictions for phase transitions." }
  ],

  "nonequilibrium-statmech": [
    { term: "Boltzmann equation", def: "Evolution of the single-particle distribution function due to streaming + collisions." },
    { term: "Linear response", def: "First-order response of a system to a small perturbation. Gives transport coefficients." },
    { term: "Fluctuation-dissipation", def: "Equilibrium fluctuations and dissipative response are related." },
    { term: "Onsager relations", def: "Cross-transport coefficients are symmetric: $L_{ij} = L_{ji}$." },
    { term: "Master equation", def: "Differential equation describing evolution of probabilities between discrete states." }
  ],

  "superconductivity": [
    { term: "Superconductor", def: "Material with zero electrical resistance below a critical temperature $T_c$." },
    { term: "Meissner effect", def: "Expulsion of magnetic field from inside a superconductor." },
    { term: "Cooper pair", def: "Two electrons bound together by phonon-mediated attraction. Charge $2e$, acts as boson." },
    { term: "Energy gap ($\\Delta$)", def: "Energy required to break a Cooper pair. Protects the superconducting state." },
    { term: "Type I / Type II", def: "Type I expels all magnetic field. Type II allows flux through as quantized vortices." },
    { term: "Josephson effect", def: "Supercurrent through a thin barrier between two superconductors — basis of SQUID sensors." }
  ],

  "quantum-hall-topological": [
    { term: "Quantum Hall effect", def: "2D electrons in strong $B$ show quantized Hall conductance $\\sigma_{xy} = \\nu e^2/h$." },
    { term: "Landau level", def: "Quantized electron energy in a magnetic field: $E_n = \\hbar\\omega_c (n + 1/2)$." },
    { term: "Filling factor ($\\nu$)", def: "Electron density divided by Landau-level degeneracy density." },
    { term: "Chern number", def: "Topological invariant — an integer characterizing certain phases." },
    { term: "Topological insulator", def: "Insulating bulk but conducting boundary states protected by topology." },
    { term: "Anyon", def: "Particle in 2D that's neither boson nor fermion — exists in FQH systems." }
  ],

  "phonons": [
    { term: "Phonon", def: "Quantum of lattice vibration — analogous to photon being quantum of EM field." },
    { term: "Dispersion relation", def: "$\\omega$ vs $k$ — how vibration frequency depends on wavevector." },
    { term: "Brillouin zone", def: "Fundamental periodic domain in reciprocal space for a crystal." },
    { term: "Acoustic mode", def: "Phonon branch with $\\omega \\to 0$ as $k \\to 0$ — sound." },
    { term: "Optical mode", def: "Phonon branch with $\\omega$ finite at $k = 0$ — atoms in unit cell move out of phase." },
    { term: "Debye temperature", def: "Characteristic temperature scale of lattice vibrations: $\\Theta_D = \\hbar\\omega_D/k_B$." }
  ],

  "stellar-evolution": [
    { term: "Main sequence", def: "Long-lived hydrogen-burning phase. Most stars spend most of their lives here." },
    { term: "Red giant", def: "Late-stage stellar phase: expanded, cooler outer layers; helium burning core." },
    { term: "White dwarf", def: "End state of low/medium-mass stars: Earth-sized, supported by electron degeneracy pressure." },
    { term: "Neutron star", def: "End state of massive stars after core collapse: nuclear density, supported by neutron pressure." },
    { term: "Supernova", def: "Explosive end of a massive star (Type II) or detonating white dwarf (Type Ia)." },
    { term: "HR diagram", def: "Hertzsprung-Russell plot of luminosity vs. surface temperature — classifies stars by evolutionary stage." }
  ],

  "stellar-nucleosynthesis": [
    { term: "Nucleosynthesis", def: "Building heavier nuclei from lighter ones via nuclear reactions." },
    { term: "pp chain", def: "Proton-proton fusion chain that powers the Sun: $4p \\to {}^4\\text{He} + \\ldots$" },
    { term: "CNO cycle", def: "Catalytic fusion cycle in heavier stars using carbon, nitrogen, oxygen." },
    { term: "Triple-alpha", def: "Three alpha particles fuse to ${}^{12}\\text{C}$ in red giants." },
    { term: "s-process", def: "Slow neutron capture in evolved stars — builds heavy elements gradually." },
    { term: "r-process", def: "Rapid neutron capture in neutron-star mergers/supernovae — builds heaviest elements." }
  ],

  "compact-objects": [
    { term: "Compact object", def: "Stellar remnant with extreme density: WD, NS, or BH." },
    { term: "Degeneracy pressure", def: "Quantum pressure from Pauli exclusion — supports WDs and NSs against gravity." },
    { term: "Chandrasekhar mass", def: "Maximum white dwarf mass: $\\approx 1.4 M_\\odot$. Above it, electron pressure fails." },
    { term: "Event horizon", def: "Black hole boundary — nothing escapes from within. At $r_s = 2GM/c^2$." },
    { term: "Schwarzschild radius", def: "Radius of a non-rotating black hole's event horizon." },
    { term: "Hawking radiation", def: "Quantum thermal emission from black holes. Temperature inversely proportional to mass." }
  ],

  "galactic-dynamics": [
    { term: "Galaxy", def: "Gravitationally bound system of stars, gas, dust, dark matter — typically $10^9$–$10^{12}$ stars." },
    { term: "Rotation curve", def: "Plot of orbital speed vs. radius for a galaxy. Flatness reveals dark matter." },
    { term: "Virial theorem", def: "For bound systems: $\\langle T \\rangle = -\\tfrac{1}{2}\\langle V \\rangle$. Lets you estimate masses." },
    { term: "Dark matter halo", def: "Spherical distribution of dark matter surrounding visible galaxy." },
    { term: "Local Group", def: "Our galactic neighborhood: Milky Way, Andromeda, and dozens of satellites." }
  ],

  "bbn-cmb-inflation": [
    { term: "Big Bang nucleosynthesis (BBN)", def: "Formation of light elements (H, He, Li) in the first minutes of the universe." },
    { term: "Recombination", def: "Era when electrons combined with nuclei, making the universe transparent. CMB released here." },
    { term: "CMB", def: "Cosmic Microwave Background — leftover thermal radiation from recombination." },
    { term: "Inflation", def: "Theorized exponential expansion in the very early universe. Solves horizon, flatness, monopole problems." },
    { term: "e-fold", def: "Factor of $e$ in expansion. Inflation gives ~60 e-folds." },
    { term: "Anisotropy", def: "Tiny temperature variations in the CMB ($\\sim 10^{-5}$). Seeds for large-scale structure." }
  ],

  "gravitational-waves": [
    { term: "Gravitational wave", def: "Ripple in spacetime curvature, propagating at $c$." },
    { term: "Strain ($h$)", def: "Fractional length change a GW causes: $h = \\Delta L/L$. Tiny — $10^{-21}$ typical." },
    { term: "Inspiral", def: "Phase of binary merger where two objects spiral inward, emitting GWs." },
    { term: "Chirp", def: "Distinctive frequency rise as a binary inspirals." },
    { term: "LIGO", def: "Laser Interferometer Gravitational-Wave Observatory. First direct detection in 2015." },
    { term: "Quadrupole", def: "Lowest mass moment producing GWs (monopole/dipole forbidden by conservation laws)." }
  ],

  "high-energy-astrophysics": [
    { term: "Active galactic nucleus (AGN)", def: "Compact, extremely luminous galactic center powered by accretion onto a supermassive BH." },
    { term: "Gamma-ray burst (GRB)", def: "Brief, brightest electromagnetic events known. Two flavors: long (collapsar) and short (NS merger)." },
    { term: "Cosmic ray", def: "High-energy charged particle from space — mostly protons." },
    { term: "Synchrotron radiation", def: "Radiation from relativistic charged particles spiraling in magnetic fields." },
    { term: "Inverse Compton", def: "Low-energy photon up-scattered by a high-energy electron." },
    { term: "Jet", def: "Collimated relativistic outflow from accreting black holes." }
  ],

  "math-methods-physics": [
    { term: "Special function", def: "Named function arising from common PDEs: Bessel, Legendre, Hermite, Laguerre." },
    { term: "Green's function", def: "Solution to a PDE with a point source. Convolve with arbitrary sources to get general solutions." },
    { term: "Contour integral", def: "Integral along a path in the complex plane, used to evaluate real integrals via residues." },
    { term: "Asymptotic expansion", def: "Series that approximates a function for large/small values — doesn't have to converge." },
    { term: "Saddle point", def: "Critical point of a complex-valued exponent. Stationary phase method." },
    { term: "WKB approximation", def: "Semi-classical expansion for QM in the $\\hbar \\to 0$ limit." }
  ],

  "group-theory-physics": [
    { term: "Symmetry group", def: "Set of symmetries with composition as the operation. Forms a group." },
    { term: "Representation", def: "A way the group acts on a vector space — assigns matrices to each group element." },
    { term: "Irreducible rep", def: "Representation that doesn't break into smaller invariant subspaces." },
    { term: "Character", def: "Trace of a representation matrix — characterizes the rep without specifying a basis." },
    { term: "Lie group", def: "Continuous group (smooth manifold). Examples: SO(3), SU(2), SU(3)." },
    { term: "Generator", def: "Lie algebra element generating a one-parameter subgroup." }
  ],

  "computational-physics": [
    { term: "Monte Carlo", def: "Method using random sampling — useful for high-dimensional integrals and statistical systems." },
    { term: "Molecular dynamics (MD)", def: "Time integration of Newton's equations for many particles." },
    { term: "Lattice method", def: "Discretize space (and time) onto a grid. Used in lattice QCD, fluid simulations." },
    { term: "Metropolis algorithm", def: "Markov-chain Monte Carlo sampler for Boltzmann-distributed states." },
    { term: "Symplectic integrator", def: "Time-stepping scheme preserving phase-space volume — needed for long simulations." },
    { term: "DFT", def: "Density Functional Theory — workhorse for electronic structure of materials." }
  ],

  "soft-matter-biophysics": [
    { term: "Polymer", def: "Long chain of repeating molecular units." },
    { term: "Membrane", def: "Thin bilayer (typically phospholipids) forming cell boundaries." },
    { term: "Persistence length", def: "Length scale over which a polymer 'remembers' its direction." },
    { term: "Molecular motor", def: "Protein converting chemical energy (ATP) into directed motion (e.g., kinesin)." },
    { term: "ATP", def: "Adenosine triphosphate — cell's energy currency. Hydrolysis releases ~0.5 eV." },
    { term: "Self-assembly", def: "Spontaneous organization of components into ordered structures (e.g., membranes from lipids)." }
  ]
};
