// Plain-language ELI5 explanation for every worked example.
// Indexed by topic id, then position in the examples array (0..3).
window.EXPLAIN = {

  // ===== MATH =====

  "arithmetic-foundations": [
    "When you see a long expression like this, where do you start? Math has to give the same answer to everyone, so we agreed on an order: parentheses first, then exponents, then × and ÷, then + and −. Following that order is the whole trick.",
    "Two negatives in a row cancel: subtracting a debt is the same as gaining money. Adding a negative is just subtracting. Once you keep these two rules straight, negatives stop being scary.",
    "Absolute value is the distance from zero, ignoring sign. If something is 7 units away from 4, it could be on either side — so there are always two possibilities to check.",
    "Every whole number is built by multiplying prime numbers together (primes are the 'atoms' of numbers). Keep dividing by the smallest prime that fits until you can't divide anymore."
  ],

  "fractions-percentages": [
    "You can't add two-thirds of a pizza to one-quarter of a pizza directly — the slices are different sizes. First we recut both pizzas into the same-size slices (twelfths), then we can just count them up.",
    "Multiplying fractions tells you 'this much OF that much'. Three-quarters of eight-ninths. The shortcut: multiply tops and bottoms separately, then simplify if you can.",
    "A 25% discount means you save a quarter. Turn the percent into a decimal (move the dot two left: $25\\% = 0.25$), multiply to find the savings, then subtract from the original.",
    "Percent change always compares the JUMP to the STARTING point. If you grew from $40$ to $46$, the jump is $6$. Divide by $40$ (where you started, not where you ended), then convert to a percent."
  ],

  "exponents-roots": [
    "When the same number is multiplied by itself a few times, exponents are shorthand. $x^3 \\cdot x^5$ is just $x$ multiplied $3+5 = 8$ times. So you add the exponents — no need to count.",
    "A negative exponent flips the fraction. $2^{-3}$ means 'one over $2^3$'. Think of exponents as a number line: positive multiplies, zero is identity (anything to the $0 = 1$), negative divides.",
    "$\\sqrt{72}$ feels ugly, but we can split it. Look for a perfect square hiding inside ($36 \\times 2 = 72$), pull that out as a clean number, and the rest stays under the root.",
    "Square roots in denominators are awkward to compute by hand. Multiplying the top AND bottom by the same root cleans up the bottom without changing the value (we're multiplying by 1 in disguise)."
  ],

  "ratios-proportions": [
    "Splitting $\\$240$ in ratio $3:5$ means imagine the money in $3+5 = 8$ equal parts. Find what one part is worth, then give 3 of them to one person and 5 to the other.",
    "If everything scales together, more kg means proportionally more dollars. Set up the ratio (cost per kg) and solve. This is the same logic you use intuitively when scaling a recipe.",
    "More workers, less time — that's inverse proportion. The total work (workers × days) stays the same. Compute total worker-days for the original job, then divide by your new number of workers.",
    "Mixing two solutions: count the pure acid in each, add them, divide by the total volume. The final concentration is somewhere between the two starting ones — closer to whichever you used more of."
  ],

  "linear-equations": [
    "Think of the equation as a balance scale. The unknown ($x$) is buried under '+5' and '×3'. To free it, undo those operations in reverse order: first subtract 5 from both sides, then divide both by 3.",
    "When $x$ appears on both sides, herd all the $x$'s onto one side and all the numbers onto the other. Then it's the same as a basic linear equation.",
    "Fractions in equations are annoying. The trick: multiply EVERY term by the lowest common denominator. The fractions vanish, leaving a normal equation.",
    "Turning words into math is half the battle. 'Costs $\\$3.50$ plus $\\$2$ per mile' becomes 'fare $= 3.50 + 2m$'. Now solve for the miles ($m$) that make the fare equal $\\$15.50$."
  ],

  "inequalities": [
    "Inequalities work just like equations: do the same thing to both sides to isolate $x$. The only difference: when you multiply or divide by a NEGATIVE, you have to flip the direction sign.",
    "Multiplying by $-1$ reverses size order (3 is more than 2, but $-3$ is LESS than $-2$). That's why dividing by a negative flips '>' to '<'. Watch out for the sign of whatever you're dividing by.",
    "Compound inequalities pin $x$ between two bounds. Whatever you do to the middle, do to both ends. The result describes a range, not a single value.",
    "$|x - 3|$ is the distance from $x$ to $3$. Saying it's less than $5$ means $x$ is within $5$ units of $3$ — so anywhere from $-2$ to $8$."
  ],

  "plane-geometry": [
    "A right triangle's longest side (the hypotenuse) is always $\\sqrt{a^2 + b^2}$. The famous Pythagorean theorem. With legs $3$ and $4$, the hypotenuse turns out to be a clean $5$ — one of the most useful triangles in all of math.",
    "Triangle area is base × height ÷ 2. Why divided by 2? Because a triangle is half of a rectangle. Multiply the base by the height of the rectangle, then take half.",
    "$\\pi$ shows up because the circle's circumference is always about $3.14$ times its diameter — a universal constant of the geometry of space. Area uses $r^2$ because area is two-dimensional.",
    "The three angles of any triangle add up to a straight line ($180^\\circ$) — try it with paper. Once you know two angles, the third is forced."
  ],

  "set-logic": [
    "Two sets, like two groups of friends. Union = 'invite everyone'. Intersection = 'only people who are in both groups'. Numbers in $\\{1,2,3\\}$ and $\\{2,3,4\\}$ — together you get $\\{1,2,3,4\\}$; in common you get $\\{2,3\\}$.",
    "If you just add $|A| + |B|$, you'd count the people in both groups twice. So we subtract the overlap once to correct. That's the inclusion-exclusion principle in its simplest form.",
    "'If $p$ then $q$' is only FALSE when the promise is broken: $p$ is true but $q$ failed. In all other cases — including when $p$ is false — the implication holds vacuously.",
    "De Morgan's laws: the opposite of 'A AND B' is 'not A OR not B'. Useful in logic, programming, and circuit design. Negate by flipping each piece and swapping AND ↔ OR."
  ],

  "number-theory": [
    "The Euclidean algorithm is a clever trick: the GCD of two numbers equals the GCD of the smaller one and the remainder. Keep replacing until the remainder is zero — the last non-zero remainder is the GCD.",
    "Modular arithmetic is 'clock arithmetic'. $47 \\bmod 6$ means: divide $47$ by $6$ and keep only the remainder. Used in cryptography, hashing, and anything that wraps around.",
    "Computing $3^{100}$ would be huge — but we only want it mod $7$. Fermat's little theorem says $3^6 \\equiv 1 \\pmod 7$, so the exponent only matters mod $6$. We can shrink the problem to $3^4 = 81 \\equiv 4$.",
    "Sometimes you want integer solutions to equations like $7x + 5y = 1$. The Extended Euclidean Algorithm gives you one. Work backward from the GCD computation, expressing $1$ as a combination of $7$ and $5$."
  ],

  "combinatorics": [
    "How many ways to arrange $5$ books in a row? Pick any of 5 for the first slot, any of the remaining 4 for the second, then 3, then 2, then 1. Multiply: $5! = 120$.",
    "Combinations are like permutations but order doesn't matter. Choosing 3 friends out of 8: there are $8 \\times 7 \\times 6$ ordered choices, but each group of 3 was counted $3! = 6$ times. Divide.",
    "Pascal's triangle gives the coefficients in $(x+y)^n$ for free. The numbers count how many ways to choose $k$ items from $n$. The expansion is symmetric and beautifully ordered.",
    "Inclusion-exclusion: count piano players + guitar players, but you double-counted the people who do both. Subtract the overlap once. That gives the count of 'either' — then total minus 'either' gives 'neither'."
  ],

  "systems-of-equations": [
    "Substitution: solve one equation for one variable, then plug into the other. The system collapses to a single equation in a single unknown. Solve that, then back out the other variable.",
    "Elimination is faster when one variable already has matching coefficients. Add the equations to wipe out the matching variable — done. Then back-substitute.",
    "If two lines are parallel, they never cross — no solution. Algebraically you'd get a contradiction like $8 = 9$. That's a flag that the system is inconsistent.",
    "Word problems with two unknowns need two equations. Adults+children $= 20$ people, and $8 \\cdot \\text{adults} + 5 \\cdot \\text{children} = \\$130$. Two equations, two unknowns — solve as a system."
  ],

  "quadratic-equations": [
    "Some quadratics factor neatly: find two numbers whose product is the constant and whose sum is the middle coefficient. $-2$ and $-3$ multiply to $6$ and add to $-5$. Done.",
    "When factoring doesn't jump out, the quadratic formula always works. It comes from completing the square applied to the general $ax^2 + bx + c$. The discriminant ($b^2 - 4ac$) tells you whether the roots are real, repeated, or complex.",
    "Completing the square turns $x^2 + 6x - 7$ into $(x+3)^2 = 16$ by adding the right constant. Then taking square roots is easy. This is how the quadratic formula was discovered.",
    "A parabola's tip (vertex) is where the projectile peaks or the parabolic bowl sits lowest. The $x$-coordinate is $-b/(2a)$. Plug it back in to get the max or min height."
  ],

  "polynomials-rational": [
    "Long division of polynomials works like long division of numbers — divide the leading term, multiply back, subtract, bring down. Whatever doesn't divide cleanly becomes the remainder.",
    "Remainder theorem shortcut: instead of doing long division, just plug $x = 2$ into the polynomial. The result IS the remainder when dividing by $x - 2$. No division needed.",
    "Factor theorem: if $p(c) = 0$, then $x - c$ divides $p$ exactly. Here $p(-1) = 0$, so $x + 1$ is a factor. This is how you 'find roots' by guessing and checking.",
    "Partial fractions: any nice rational function splits into a sum of simpler ones, each with a single root in the denominator. Equate coefficients on both sides to find the unknown constants."
  ],

  "functions-graphs": [
    "$f(x)$ is a recipe: put $x$ in, get one number out. $f(2)$ means substitute $2$ everywhere $x$ appears. Different inputs give different outputs.",
    "$\\sqrt{x-5}$ only makes sense when what's inside is zero or positive — you can't take the square root of a negative real number. Solve the inequality to find the allowed inputs.",
    "An inverse function undoes the original. If $f$ takes $x \\to 3x - 7$, then $f^{-1}$ takes the answer back to $x$. Procedure: write $y = f(x)$, swap $x$ and $y$, solve for $y$.",
    "Composition $(f \\circ g)(x)$ means $f(g(x))$ — apply $g$ first, then $f$. Read right to left like a chain of machines feeding into each other."
  ],

  "logarithms": [
    "$\\log_2 32$ asks: '2 to the WHAT equals 32?' Count: $2, 4, 8, 16, 32$ — that's 5 multiplications. So $\\log_2 32 = 5$. Logs and exponents are inverses.",
    "Logs turn multiplication into addition. $\\log(xy) = \\log x + \\log y$. Powers come out front: $\\log(y^2) = 2 \\log y$. These three rules let you 'expand' or 'condense' any log expression.",
    "To solve $\\log_3(x-1) = 2$, rewrite in exponential form: $x-1 = 3^2 = 9$. Logs and exponents undo each other — that's the whole game.",
    "Most calculators only have $\\ln$ (base $e$) and $\\log$ (base $10$). For $\\log_5 12$, use change of base: $\\log_5 12 = \\ln 12 / \\ln 5$. Same idea works with any base."
  ],

  "sequences-series": [
    "Arithmetic sequence: add the same number ($d$) each step. To jump from term $1$ to term $20$, take $19$ steps of size $d$. The formula $a_n = a_1 + (n-1)d$ captures that.",
    "Adding $2 + 4 + \\ldots + 100$ by hand is tedious. Gauss's trick: pair the first and last (sum $102$), the second and second-to-last (also $102$), etc. There are $25$ pairs, so total $= 25 \\times 102$.",
    "Geometric sequence: multiply by the same number ($r$) each step. From $a_1$ to $a_n$, multiply by $r$ a total of $n-1$ times. So $a_n = a_1 \\cdot r^{n-1}$.",
    "An infinite sum can be finite if the terms shrink fast enough. $1 + 1/3 + 1/9 + \\ldots$ approaches $3/2$ because each term is much smaller than the previous one. The formula $a/(1-r)$ works whenever $|r| < 1$."
  ],

  "trigonometry": [
    "$\\sin\\theta$ is the ratio of the opposite side to the hypotenuse — fixed for each angle. With hypotenuse $10$ and angle $30^\\circ$ (where $\\sin = 1/2$), the opposite side must be half: $5$.",
    "$\\sin^2 + \\cos^2 = 1$ is the Pythagorean theorem in disguise (sides squared add to hypotenuse squared, scaled to a unit circle). Knowing one ratio, you get the other.",
    "$\\sin\\theta = 1/2$ has two solutions in one rotation: one in the first quadrant ($\\pi/6$), one in the second ($5\\pi/6$). The unit circle has reflection symmetry.",
    "When you don't have a right angle, the regular sine/cosine don't apply directly. Law of cosines generalizes Pythagoras: $c^2 = a^2 + b^2 - 2ab\\cos C$. When $C = 90^\\circ$, the cosine term vanishes and Pythagoras returns."
  ],

  "probability": [
    "Probability of a specific outcome = (favorable outcomes) ÷ (total outcomes). $3$ blue out of $10$ marbles gives $3/10$. The whole field starts here.",
    "Two events are independent if one doesn't affect the other (separate coins). Independent probabilities multiply. Two heads in a row: $1/2 \\times 1/2 = 1/4$.",
    "The opposite (complement) of an event has probability $1 - P(\\text{event})$. 'Not rolling a 6' is easier to think about as 'all the other outcomes' which is $5/6$.",
    "Bayes' theorem flips conditional probability around. Even a $95\\%$ accurate test for a rare disease gives surprising results: most positives are false alarms because the base rate is so low. This is why screening tests need follow-up."
  ],

  "statistics": [
    "Mean averages everything. Standard deviation says how spread out the data is. Mean $5$ with SD $2$: values mostly fall between $3$ and $7$. Big SD = wild data; small SD = clustered.",
    "A z-score tells you how many standard deviations a value is from the mean. $z = 2$ means '2 SDs above average'. Useful for comparing across different scales.",
    "A confidence interval is the range where the true value probably lies. With mean $50$ and SD $10$ from $25$ samples, we're $95\\%$ sure the true mean is between $46$ and $54$. Wider sample → tighter interval.",
    "Hypothesis testing asks 'is my data extreme enough to doubt the default assumption?' We compute how far our result is from the null hypothesis. If it's within $\\pm 1.96$ SDs, the result isn't significant — could easily be chance."
  ],

  "complex-numbers": [
    "$i$ is the made-up number with $i^2 = -1$. To multiply complex numbers, treat them like binomials (FOIL), then replace $i^2$ with $-1$ wherever it appears.",
    "$|3 + 4i|$ is the distance from the origin to the point $(3, 4)$ — Pythagoras. So $|3 + 4i| = \\sqrt{9 + 16} = 5$.",
    "Polar form rewrites a complex number as distance × direction: $1 + i$ is at distance $\\sqrt 2$ from origin, pointing $45^\\circ$ ($\\pi/4$). Polar form makes multiplication and powers easy.",
    "De Moivre: to raise a polar complex number to a power, raise the magnitude to that power and multiply the angle. $(1+i)^8 = (\\sqrt 2)^8 \\cdot e^{8i\\pi/4} = 16 \\cdot e^{2\\pi i} = 16$. Pure real."
  ],

  "vector-algebra": [
    "A vector is an arrow with a length. To find that length, Pythagoras: square each component, add, take the root. $\\langle 3, -4 \\rangle$ has length $\\sqrt{9+16} = 5$.",
    "Dot product multiplies matching components and adds them up. Tells you how much one vector points in the same direction as the other. Big positive = aligned; zero = perpendicular; negative = pointing opposite ways.",
    "$\\cos\\theta = (\\vec a \\cdot \\vec b)/(|\\vec a||\\vec b|)$ — the dot product divided by the magnitudes is the cosine of the angle between them. Take the inverse cosine to get the angle.",
    "The cross product makes a new vector perpendicular to BOTH inputs. Its length equals the area of the parallelogram they span. Used in physics for torque, magnetic forces, and rotations."
  ],

  "linear-algebra": [
    "Matrix × vector: each row of the matrix dot-products with the vector to give one entry of the result. The matrix is a transformation; the vector is the input.",
    "Determinant of a $2 \\times 2$ matrix is $ad - bc$. Geometrically: the signed area of the parallelogram spanned by the columns. Zero determinant means the columns squash to a line.",
    "For a $2 \\times 2$ matrix, the inverse formula swaps the diagonal entries, negates the off-diagonals, and divides by the determinant. Only invertible when $\\det \\neq 0$.",
    "Eigenvalues are the special scalars $\\lambda$ for which $A\\vec v = \\lambda \\vec v$ — the matrix just stretches $\\vec v$ instead of rotating it. Found from $\\det(A - \\lambda I) = 0$. Triangular matrices have eigenvalues on the diagonal."
  ],

  "limits": [
    "Polynomials are continuous everywhere, so the limit is just the value. No tricks needed: substitute and compute.",
    "$0/0$ is undefined, but the limit might still exist. Factor the top and cancel the troublesome $(x-2)$. Once it cancels, you can substitute safely.",
    "For large $x$, the highest-degree terms dominate; everything else is a rounding error. Divide top and bottom by $x^2$ to see what survives — here, the ratio of leading coefficients.",
    "L'Hôpital's rule: when you get $0/0$ or $\\infty/\\infty$, take the derivative of top and bottom separately, then try again. Famous result: $\\lim \\sin x / x = 1$ at $0$."
  ],

  "derivatives": [
    "Power rule: bring the exponent down as a coefficient, then subtract 1 from the exponent. Apply to each term separately. Constants disappear because their slope is zero.",
    "Chain rule: when one function is wrapped inside another, differentiate the outer (keeping the inside intact) and multiply by the derivative of the inside. 'Outside times inside.'",
    "Product rule: derivative of $fg$ is (derivative of $f$) times $g$ + $f$ times (derivative of $g$). Both pieces, each one differentiated in turn, added together.",
    "Quotient rule: $(u/v)' = (u'v - uv')/v^2$. Memory hook: 'low d-high minus high d-low, over low squared.' Watch the sign — the order matters."
  ],

  "integrals": [
    "Integration reverses differentiation. If derivative of $x^4$ is $4x^3$, then integral of $4x^3$ is $x^4$. Add $+C$ because any constant has derivative zero — so we don't know which constant it was.",
    "Definite integrals give the actual area (or accumulated change). Find the antiderivative, plug in the upper and lower limits, subtract. The Fundamental Theorem of Calculus.",
    "When you see a function and its derivative both present, $u$-substitution works. Let $u = x^2$, then $du = 2x\\,dx$ — exactly what's in the integral. Rewrite, integrate, swap back.",
    "Integration by parts: when you can't $u$-sub but you see a product like $x \\cdot e^x$, IBP lets you trade one integral for an easier one. Choose $u$ to simplify on differentiation; $dv$ should be easy to integrate."
  ],

  "multivariable-calculus": [
    "A partial derivative treats every other variable as a constant. To compute $\\partial f / \\partial x$, pretend $y$ is just a number and differentiate as usual.",
    "The gradient is the vector of all partial derivatives. It points in the direction the function increases fastest. Think of a hilly landscape: the gradient is the direction of steepest uphill.",
    "Double integrals are integrals nested inside integrals. Integrate with respect to one variable, then the other. For a rectangular region, the order doesn't matter (Fubini).",
    "Lagrange multipliers find max/min on a curve or surface (a 'constraint'). At the optimum, the gradient of the objective is parallel to the gradient of the constraint. Solving these conditions gives you the answer."
  ],

  "vector-calculus": [
    "Divergence asks 'how much is this field expanding out of this point?' Take the partial derivative of each component with respect to its own coordinate, and add them up.",
    "Curl measures local rotation. Imagine a tiny paddlewheel in a fluid — curl is the axis and speed of its spin. The formula combines partial derivatives in an asymmetric pattern (a cross-product-like recipe).",
    "If a vector field is the gradient of some function, you don't need to compute the line integral along the path — just evaluate the function at the endpoints. That's the Fundamental Theorem for line integrals.",
    "Green's theorem ties a loop integral to a double integral over the enclosed area. It converts walking-around-a-boundary calculations into easier-area calculations (and vice versa)."
  ],

  "ode": [
    "Separable equations: get all the $y$'s on one side and all the $x$'s on the other, then integrate both sides. Use the initial condition to find the constant.",
    "Linear first-order: multiply by the right 'integrating factor' ($e^{\\int p\\,dx}$), and the left side becomes a perfect derivative. Then integrate once.",
    "For constant-coefficient equations, guess $y = e^{rx}$. You get the characteristic polynomial. Each root gives an exponential solution; the general solution is their linear combination.",
    "Logistic equation models constrained growth — like a population that grows fast at first, then levels off. The S-shaped solution starts small, accelerates, then plateaus at carrying capacity."
  ],

  "pde": [
    "Three big PDEs cover most physics. $u_{xx} + u_{yy} = 0$ (Laplace) means 'steady state' — no time dependence. Heat equation has one time derivative; wave equation has two.",
    "Separation of variables guesses $u(x,t) = X(x)T(t)$ — splitting space and time. Plug in, divide, and each side must equal a constant. You get two ordinary equations to solve.",
    "If the initial shape matches one of the special wave-like modes, it just decays exponentially while keeping its shape. The heat equation smooths out sharp features over time.",
    "D'Alembert's formula: any solution to the 1D wave equation is two halves of the initial shape, one moving left and one moving right, at speed $c$. Simple and beautiful."
  ],

  "real-analysis": [
    "$\\varepsilon$-$\\delta$ makes 'gets close' precise. Given any tolerance $\\varepsilon$ for the output, we promise an input tolerance $\\delta$ that keeps us inside. For $f(x) = 2x+1$, halve any $\\varepsilon$ to get a working $\\delta$.",
    "An increasing sequence bounded above MUST converge — it can't go up forever, and it can't go down. So it sneaks up on some limit. That limit is its supremum.",
    "A Cauchy sequence has terms getting arbitrarily close to each other (not just close to some limit). In complete spaces like $\\mathbb{R}$, Cauchy implies convergent — no gaps.",
    "Riemann's integral: split $[0,1]$ into thin slices, multiply each slice's width by the minimum height inside it, and sum. As slices shrink, the sum approaches the true area. For $f(x) = x$, that's $1/2$."
  ],

  "complex-analysis": [
    "A function is holomorphic if its derivative exists in the complex sense — much stronger than real-valued. The Cauchy-Riemann equations are exactly the condition: $u_x = v_y$ and $u_y = -v_x$.",
    "Cauchy's theorem: the integral of a holomorphic function around any closed loop is zero (in a simply connected region). Holomorphic functions are 'conservative' — paths don't matter, only endpoints.",
    "A residue captures what happens near a singularity. For $1/z$, the residue at $z=0$ is $1$ — the coefficient of $1/z$ in the Laurent expansion. Residues are the only things that contribute to closed-loop integrals.",
    "Residue theorem: closed-loop integral = $2\\pi i$ × (sum of residues inside). Used to evaluate real integrals that are otherwise hopeless. Here the residues at $0$ and $1$ cancel."
  ],

  "fourier-analysis": [
    "Even a sharp square wave is a sum of smooth sine waves. The fundamental frequency carries most of the energy, but higher odd harmonics sharpen the corners. Infinite series, but it converges.",
    "Fourier coefficients pick out the 'amount of each frequency' in your signal. The formulas come from orthogonality: $\\sin nx$ and $\\sin mx$ integrate to zero when $n \\neq m$, so each integral isolates one coefficient.",
    "The Gaussian is special: its Fourier transform is another Gaussian. It's the only function with this 'self-similar' property — and that's why it shows up in quantum mechanics, statistics, and signal theory.",
    "Parseval's identity says: the total energy of a signal in time = total energy in frequency. Fourier transforms preserve the 'size' of a signal; nothing is lost in switching views."
  ],

  "abstract-algebra": [
    "A group needs four things: closure, associativity, identity, inverses. $(\\mathbb{Z}, +)$: integers are closed under addition, $+$ is associative, $0$ is identity, $-n$ is the inverse of $n$. Done.",
    "Lagrange's theorem: the size of any subgroup must divide the size of the group exactly. For a group of order $12$, subgroups can only be of order $1, 2, 3, 4, 6,$ or $12$. Restrictive and powerful.",
    "Cyclic groups are generated by repeatedly adding (or multiplying) one element. In $\\mathbb{Z}_6$, repeatedly adding $2$ gives $\\{0, 2, 4\\}$ — a subgroup of order $3$. The element's order is how many steps to return to identity.",
    "$\\mathbb{Z}/4\\mathbb{Z}$ has a problem: $2 \\times 2 = 0$. So $2$ has no inverse — fields require every nonzero element to have a multiplicative inverse. $\\mathbb{Z}/p\\mathbb{Z}$ is a field exactly when $p$ is prime."
  ],

  "topology": [
    "A topology on a set is just a collection of subsets ('open sets') closed under unions and finite intersections, containing both empty set and the whole space. That's it — and from this minimal structure, you can define continuity.",
    "Topological continuity: preimage of every open set is open. Equivalent to $\\varepsilon$-$\\delta$ for metric spaces, but works in any topological space — even ones without distance.",
    "Compact sets are 'small in a topological sense': every open cover has a finite sub-cover. In $\\mathbb{R}^n$, this is just 'closed and bounded' (Heine-Borel).",
    "$\\mathbb{Q}$ is disconnected because you can split it with any irrational number — say at $\\sqrt 2$. The rationals don't touch each other in the topological sense. $\\mathbb{R}$ in contrast is connected."
  ],

  "numerical-methods": [
    "Newton's method uses the tangent line to approximate the zero of a function. Start with a guess, slide along the tangent to the x-axis, get a better guess. Convergence is quadratic — the error squares each step.",
    "Trapezoidal rule: approximate the curve with straight-line segments and sum up trapezoid areas. Easy and reliable, but only second-order accurate. Halving the step size cuts error by 4×.",
    "Simpson's rule fits parabolas to each pair of intervals instead of lines. Much more accurate for the same effort: fourth-order. Halving the step cuts error by 16×.",
    "Euler's method steps along the slope: $y_{n+1} = y_n + h \\cdot f(x_n, y_n)$. Crude but the foundation of every ODE solver. Better methods (RK4) refine the slope by averaging multiple estimates."
  ],

  // ===== PHYSICS =====

  "units-measurement": [
    "km/h and m/s measure the same thing (speed) in different units. Multiply by the right conversion factors so that 'km' cancels with 'km' and 'h' cancels with 'h'. What's left is meters per second.",
    "Scientific notation handles huge and tiny numbers cleanly. $0.00042$ has the decimal four places to the right of where it 'should' be. So we write $4.2 \\times 10^{-4}$ — negative exponent for small numbers.",
    "Significant figures track how confident you are. $2.5$ has only two sig figs — your final answer can't be more precise than that. Round to match the LEAST precise input.",
    "Dimensional analysis is a sanity check. Whatever's inside a square root should give 'speed squared' if the answer is a speed. Compute the units and confirm — if they're wrong, the formula is wrong."
  ],

  "kinematics": [
    "Average speed = total distance / total time. The simplest possible measurement. $150$ km in $2.5$ h = $60$ km/h.",
    "In free fall (no air resistance), every object gains $9.8$ m/s of speed per second. After $3$ seconds, that's $9.8 \\times 3 = 29.4$ m/s — regardless of weight (Galileo's insight).",
    "A horizontally launched projectile has TWO motions at once: constant horizontal speed AND vertical free fall. They are independent. The time to hit the ground is set by the falling, not the launching.",
    "When you have initial speed, final speed, and distance (but not time), use $v^2 = v_0^2 + 2ax$. Avoids having to find time as an intermediate step."
  ],

  "vectors-physics": [
    "A boat moving east and a current pushing north combine into a single arrow pointing northeast. The resultant length is the hypotenuse: $\\sqrt{4^2 + 3^2} = 5$ m/s.",
    "Any tilted force splits into horizontal and vertical pieces. $F\\cos\\theta$ pulls along the ground, $F\\sin\\theta$ lifts up. Sine and cosine come from right-triangle definitions.",
    "To find the direction of $\\langle 4, 3 \\rangle$, take the inverse tangent of $3/4$. About $36.9°$ — close to but not exactly halfway between east and north (north would require equal components).",
    "Adding vectors is adding their components separately: x with x, y with y. Like adding two trips' east-west movements and two trips' north-south movements independently."
  ],

  "newtons-laws": [
    "Newton's second law: net force = mass × acceleration. Push a 5-kg block with whatever force makes it speed up at $2$ m/s². That force is $5 \\times 2 = 10$ N.",
    "Same law backward: given the force and mass, the acceleration is determined. $20$ N on a $4$-kg block gives $5$ m/s². Heavier = harder to accelerate.",
    "When a box hangs from a rope at rest, the rope must pull up exactly as hard as gravity pulls down. So tension = weight = $mg = 10 \\times 9.8 = 98$ N.",
    "Friction opposes motion and depends on how hard the surfaces press together (the normal force). On flat ground, normal = weight. Multiply by friction coefficient: $0.3 \\times 196 = 58.8$ N."
  ],

  "momentum-impulse": [
    "Momentum measures 'how hard to stop'. A 2-kg ball at 5 m/s has $10$ kg·m/s of momentum. Heavier or faster things have more.",
    "Force × time = change in momentum. A tennis ball going from $0$ to $40$ m/s in just $0.01$ s requires a HUGE force ($200$ N) — that's why short impacts feel so violent.",
    "When two objects collide and stick, total momentum is conserved. Add momentum before, divide by combined mass to get final velocity. The kinetic energy is NOT conserved (heat, sound, deformation absorb some).",
    "When equal masses collide elastically in 1D, they swap velocities. Newton's cradle works exactly this way: one ball hits the end, the other end launches off."
  ],

  "energy-work": [
    "Kinetic energy is $\\tfrac{1}{2} m v^2$. Doubling speed quadruples energy — which is why crashes get violent fast as you speed up.",
    "When something falls, gravitational potential energy converts to kinetic energy. Setting them equal gives $v = \\sqrt{2gh}$. Drop something from $10$ m, it lands at $14$ m/s. Mass doesn't matter (ignoring air).",
    "Work is force × distance, when they point the same way. Push a box $10$ m with $50$ N: $500$ J of work done — and that energy now lives in the box as motion or heat.",
    "Power is how fast you do work (energy per time). Lifting $200$ kg by $5$ m takes $9800$ J. Doing it in $4$ s requires $2.45$ kW of power — about 3 horsepower."
  ],

  "circular-gravitation": [
    "Centripetal acceleration is $v^2/r$ — bigger speed or tighter turn means more centripetal acceleration needed. At $20$ m/s on a $50$ m track, you need $8$ m/s² toward the center.",
    "Now turn acceleration into force via $F = ma$. A $1000$ kg car needs $5625$ N pulling it inward — provided by friction between tires and road. Lose grip, lose the curve.",
    "Gravity falls off as $1/r^2$. Two $5000$ kg masses $10$ m apart feel a tiny force ($\\approx 10^{-5}$ N) — gravity is incredibly weak between everyday objects. Only planets and stars feel it strongly because they're massive.",
    "Orbiting just means falling without ever hitting the ground. The satellite's gravity = its required centripetal force, so $g = v^2/r$ gives $v = \\sqrt{gr} \\approx 7.9$ km/s for low Earth orbit."
  ],

  "shm": [
    "A spring's angular frequency is $\\omega = \\sqrt{k/m}$. Stiffer spring (bigger $k$) means faster oscillation; heavier mass means slower.",
    "A pendulum's period only depends on length and gravity, not mass or amplitude (for small swings). A $1$-meter pendulum takes about $2$ seconds per swing.",
    "All of SHM energy stays in the system, just sloshes between kinetic and potential. Total energy = $\\tfrac{1}{2} k A^2$ where $A$ is the amplitude.",
    "Starting at rest at maximum displacement, the motion follows $x(t) = A\\cos(\\omega t)$. If you'd started at equilibrium moving, it'd be $A\\sin(\\omega t)$. Same physics, different phase."
  ],

  "rotational": [
    "Angular acceleration = change in angular velocity / time. Just like linear, but using radians per second² instead of meters per second².",
    "Torque is the rotational version of force: $\\tau = rF\\sin\\theta$. Use a longer wrench for more torque with less effort.",
    "Moment of inertia depends on mass AND how that mass is distributed. A solid sphere has $I = (2/5)MR^2$ — concentrated near the center. A hollow sphere has $I = (2/3)MR^2$ — more mass at the edge means harder to spin up.",
    "Rotational kinetic energy: $\\tfrac{1}{2} I \\omega^2$ — exactly analogous to $\\tfrac{1}{2} m v^2$ in linear motion. Replace mass with moment of inertia, velocity with angular velocity."
  ],

  "fluids": [
    "Pressure under water rises linearly with depth — every $10$ m adds about one atmosphere. At $5$ m below: $50$ kPa above atmospheric.",
    "Archimedes: a submerged object feels an upward force equal to the weight of the fluid it displaced. So $1$ liter ($0.001$ m³) of water displaces about $9.8$ N — that's why steel ships float (they displace lots of water for their weight).",
    "Continuity: what flows in must flow out. If a pipe narrows, the speed has to increase so the same volume gets through. Speed goes up by the ratio of areas.",
    "Bernoulli: in moving fluid, fast = low pressure. That's why airplane wings lift (faster air over the top), why a roof can lift off in a hurricane, and why curveballs curve."
  ],

  "kinetic-theory": [
    "RMS speed is the typical molecular speed in a gas. At room temperature, oxygen molecules zip around at almost $500$ m/s — faster than a jet plane.",
    "Each direction of motion stores $\\tfrac{1}{2} k_B T$ of energy on average (equipartition). For 3D translation, each atom has $\\tfrac{3}{2} k_B T$ — that's the kinetic theory definition of temperature.",
    "Pressure is just zillions of molecular collisions per second on the walls. Average over many particles, and you derive the ideal gas law from Newton's laws.",
    "Mean free path is the average distance a molecule travels between collisions. In air at room conditions, that's only about $70$ nm — molecules collide constantly."
  ],

  "thermodynamics": [
    "Heating water needs $4186$ J per kg per degree (water's specific heat — much higher than most substances, which is why oceans buffer Earth's climate).",
    "First law: energy is conserved. Heat in minus work done = change in internal energy. If you add $500$ J of heat and the gas pushes out $200$ J of work, the gas keeps $300$ J as internal energy.",
    "$PV = nRT$ — the ideal gas law. Given any three of pressure, volume, temperature, moles, you can find the fourth. Real gases approximate this well at low pressure.",
    "No engine can be 100% efficient. Useful work / heat input is the efficiency. Whatever heat doesn't become work must be dumped as waste heat. Carnot's theorem sets the absolute upper bound."
  ],

  "waves": [
    "Wave speed = frequency × wavelength. $200$ Hz wave with $0.5$ m wavelength travels at $100$ m/s. This relation holds for all waves — sound, light, water.",
    "Light's frequency comes from $f = c/\\lambda$. Green light's wavelength is about $500$ nm, so frequency is $6 \\times 10^{14}$ Hz — 600 million million oscillations per second.",
    "Sound takes $\\sim 3$ s to travel a kilometer; light is instantaneous on these scales. So count seconds between lightning and thunder, multiply by $340$ — that's the distance.",
    "When a sound source moves toward you, the waves get compressed — higher frequency (siren approaching sounds high-pitched). The formula bakes in the source velocity: $f' = f \\cdot v_s / (v_s - v_{\\text{source}})$."
  ],

  "optics-geometric": [
    "Light bends when entering a denser medium. Snell's law: $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$. Going air → glass slows light, so the angle gets smaller (bends toward the normal).",
    "Thin-lens formula: $1/f = 1/d_o + 1/d_i$. Plug in object distance and focal length to get image distance. A $30$ cm object and $10$ cm focal length gives a real image at $15$ cm.",
    "Magnification $m = -d_i/d_o$. Negative means inverted; less than 1 means smaller than the object. Here the image is half-size and flipped — typical for a real image beyond the focal length.",
    "Going from dense (water, $n=1.33$) to less dense (air, $n=1$), at steep enough angles, light can't escape — total internal reflection. The critical angle is where the refracted ray would have to skim along the surface ($90°$)."
  ],

  "optics-wave": [
    "Two slits, monochromatic light. Where path differences are whole wavelengths, the waves arrive in step and brighten. Where they're a half-wavelength off, they cancel. Bright and dark fringes alternate, spacing $\\lambda L/d$.",
    "Diffraction: a wave passing through a slit spreads out. The first dark spot (minimum) appears where the path from edge to edge is exactly one wavelength. Smaller slit → wider spread.",
    "Thin films (soap bubbles, oil on water) show colors because light reflects from both the top and bottom surfaces, and the two reflections interfere. Different wavelengths constructively interfere at different angles → colors.",
    "Polarized light has its electric field along one direction. Pass it through an analyzer at angle $\\theta$, and you only get $\\cos^2\\theta$ of the intensity through (Malus' law). At $60°$, you keep $1/4$."
  ],

  "electrostatics": [
    "Coulomb's law: force = $k q_1 q_2 / r^2$. Like gravity but with charges, and MUCH stronger. Two $2$ μC charges $10$ cm apart push with $3.6$ N — try lifting a $360$ g weight to feel it.",
    "Electric field tells how much force a unit charge would feel. Around a $1$ C charge at $1$ m distance, the field is $9 \\times 10^9$ N/C — enormous, but $1$ C is a huge charge (most lightning is fractions of a coulomb).",
    "Gauss's law: flux through any closed surface = enclosed charge / $\\varepsilon_0$. For a charged sphere, symmetry gives the field outside the same as if all the charge were at the center.",
    "Voltage = electric potential energy per unit charge. At distance $r$ from a charge $q$: $V = kq/r$. Move a unit charge from infinity to $r$, and that's the work done."
  ],

  "electric-circuits": [
    "Ohm's law: voltage = current × resistance. $12$ V across $200$ Ω gives $12/200 = 0.06$ A. Bigger resistance, smaller current.",
    "Resistors in series: current must flow through each one, voltage drops add up. Equivalent resistance = sum. $10 + 20 + 30 = 60$ Ω.",
    "Resistors in parallel: current splits between paths, voltage is the same across all. Reciprocals add: $1/R = 1/6 + 1/12 = 1/4$, so $R = 4$ Ω. Equivalent always less than smallest individual.",
    "Power dissipated as heat: $P = I^2 R = V^2/R = VI$. Same energy, three useful forms. A $100$ Ω resistor with $0.5$ A drops $25$ W."
  ],

  "magnetism-induction": [
    "A moving charge in a magnetic field feels a force perpendicular to both its velocity and the field: $F = qvB\\sin\\theta$. Bends the path into a circle (if perpendicular).",
    "A current-carrying wire in a magnetic field feels the same force, summed over all moving charges: $F = BIL$. This is the principle behind every electric motor.",
    "Faraday: a changing magnetic flux through a coil induces a voltage. $|\\varepsilon| = N \\cdot d\\Phi/dt$. With $100$ turns and flux changing $0.3$ Wb in $0.05$ s: $600$ V.",
    "A solenoid (coil) carrying current creates a uniform magnetic field inside, proportional to turns per length and current: $B = \\mu_0 n I$. This is how electromagnets, MRI machines, and many sensors work."
  ],

  "ac-circuits": [
    "AC voltage oscillates: $V(t) = V_0 \\sin(\\omega t)$. The RMS (root-mean-square) value is what matters for power: $V_{\\text{rms}} = V_0/\\sqrt 2$. US peak voltage of $170$ V gives $120$ V RMS at the outlet.",
    "Inductors resist changing current. Their effective 'resistance' (reactance) increases with frequency: $X_L = \\omega L$. At $60$ Hz with $0.1$ H: about $37.7$ Ω.",
    "An RLC circuit naturally oscillates at $\\omega_0 = 1/\\sqrt{LC}$. Drive it at this frequency and it responds with huge amplitude — resonance, the basis of radio tuning.",
    "Real power flow = $VI\\cos\\phi$. If voltage and current are $60°$ out of phase, only half the apparent power is real (the rest sloshes back and forth). Power factor matters for utility billing."
  ],

  "maxwell-em": [
    "Four equations encode all classical electromagnetism. Gauss for E (charges create electric fields), Gauss for B (no magnetic monopoles), Faraday (changing B creates E), Ampère-Maxwell (current and changing E create B).",
    "Take the curl of Faraday's law, plug in Ampère-Maxwell, and out pops the wave equation. The fields themselves can travel through empty space — they don't need a medium.",
    "The wave speed turns out to be $c = 1/\\sqrt{\\mu_0 \\varepsilon_0}$ — independently measurable from electric and magnetic experiments, and it equals the measured speed of light. Light IS electromagnetism.",
    "Poynting vector points in the direction EM energy flows, with magnitude equal to power per area. Used to calculate everything from solar panel output to radiation pressure."
  ],

  "special-relativity": [
    "At speed $0.6c$, time dilation factor is $\\gamma = 1/\\sqrt{1-0.36} = 1.25$. Moving objects experience time slower; from Earth's view, the spaceship's clocks tick at $80\\%$ speed.",
    "Multiply ship-time by $\\gamma$ to get Earth-time. A $10$-second event on the ship takes $12.5$ s as seen from Earth. The ship's own crew measures their own clock perfectly normally.",
    "Length contracts in the direction of motion. A $100$-m ship at $0.6c$ measures only $80$ m from Earth's perspective. The ship doesn't 'feel' contracted internally — it's a feature of how outside observers measure.",
    "$E = mc^2$ says mass IS energy. Convert just $1$ gram completely and you get $9 \\times 10^{13}$ J — enough to power a city for hours. Nuclear bombs convert fractions of a percent of their mass."
  ],

  "general-relativity": [
    "Equivalence principle: in a closed elevator, you can't tell whether you're accelerating in space or sitting still in gravity. Inertial and gravitational mass are exactly equal — and Einstein took that as a clue that gravity is geometry.",
    "A black hole's event horizon is at $r_s = 2GM/c^2$. For the Sun, that's about $3$ km — if you compressed all $2 \\times 10^{30}$ kg into a 3 km sphere, you'd get a black hole.",
    "Clocks near massive objects run slower. GPS satellites must correct for this every second — without it, GPS would be off by kilometers within a day.",
    "Light bends near massive objects — measured during the 1919 solar eclipse, confirming GR. The Sun deflects starlight by about 1.75 arcseconds at its limb."
  ],

  "lagrangian-hamiltonian": [
    "For a free particle, $L = \\tfrac{1}{2} m \\dot x^2$ (kinetic energy only). The Euler-Lagrange equation gives back Newton: $m\\ddot x = 0$. Nothing new yet, but the framework will pay off.",
    "For a pendulum, $L = T - V$ in terms of the angle. The Euler-Lagrange equation automatically gives $\\ddot\\theta + (g/L)\\sin\\theta = 0$ — no force diagrams needed.",
    "Hamiltonian: total energy, written in terms of positions and momenta. For a harmonic oscillator: $H = p^2/(2m) + \\tfrac{1}{2}kx^2$. Sum of kinetic and potential.",
    "Hamilton's equations: $\\dot q = \\partial H/\\partial p$ and $\\dot p = -\\partial H/\\partial q$. They generate all the motion. This formalism scales beautifully to quantum mechanics, where $p$ becomes an operator."
  ],

  "statistical-mechanics": [
    "Two states with different energies: which is more likely? Higher energy is suppressed by $e^{-\\epsilon/k_B T}$. At high temperature, both states are populated; at low temperature, the system collapses to the ground state.",
    "$Z = \\sum e^{-\\beta E}$ sums over all states with Boltzmann weights. Every thermodynamic property follows from $Z$. For a two-level system: $Z = 1 + e^{-\\beta\\epsilon}$.",
    "$\\langle E \\rangle = -\\partial \\ln Z / \\partial \\beta$. From the partition function, take a derivative — out pops the average energy. This is the magic of the formalism.",
    "Boltzmann's tomb has $S = k_B \\ln W$ engraved on it. Entropy = log of the number of microscopic ways to arrange a macroscopic state. Bigger $W$ = more disorder = more entropy."
  ],

  "qm-foundations": [
    "Wavefunctions must be normalizable: $\\int |\\psi|^2 = 1$ (probabilities sum to one). For a Gaussian $A e^{-x^2/2}$, the right $A$ is $\\pi^{-1/4}$ — found from the Gaussian integral.",
    "Position and momentum don't commute: $[\\hat x, \\hat p] = i\\hbar$. This is the seed of Heisenberg's uncertainty. Most quantum weirdness traces back to non-commuting operators.",
    "To find the average value of any observable, sandwich its operator between $\\psi^*$ and $\\psi$ and integrate. The wavefunction encodes ALL information about the system.",
    "Heisenberg uncertainty: $\\sigma_x \\sigma_p \\geq \\hbar/2$. Trying to pin down position smears momentum, and vice versa. Not a measurement issue — a fundamental feature of quantum reality."
  ],

  "qm-1d": [
    "A particle stuck in an infinite well can only have certain energies — like a guitar string can only vibrate at certain frequencies. Energy quantization: $E_n = n^2 \\pi^2 \\hbar^2 / (2mL^2)$.",
    "The harmonic oscillator has equally spaced energy levels: $E_n = \\hbar\\omega(n + 1/2)$. The $1/2$ is the zero-point energy — even in its ground state, the oscillator has nonzero energy. Quantum mechanics insists.",
    "Particles can tunnel through barriers higher than their energy — classically impossible. Probability decays exponentially with barrier width: $T \\sim e^{-2\\kappa a}$. This is how alpha decay, nuclear fusion, and STMs work.",
    "Free particles: $\\psi \\propto e^{i(kx - \\omega t)}$. Their energy depends only on momentum: $E = \\hbar^2 k^2 / (2m)$ — same as classical kinetic energy, but with quantized momentum."
  ],

  "atomic-physics": [
    "The Bohr radius is roughly the size of a hydrogen atom — about $0.5$ Ångström. It comes from balancing the electron's quantum 'spread' with the Coulomb attraction from the proton.",
    "Hydrogen energy levels: $E_n = -13.6/n^2$ eV. The negative means bound. To ionize (free the electron), you need $13.6$ eV — that's hydrogen's ionization energy.",
    "Lyman-alpha is the transition from $n=2$ to $n=1$. Energy difference $10.2$ eV → photon wavelength $\\sim 121.6$ nm in the ultraviolet. We use this line to map hydrogen across the universe.",
    "Electrons have intrinsic angular momentum (spin) of $\\hbar/2$. Two values: 'up' and 'down'. Pauli exclusion: no two electrons in an atom can share all four quantum numbers — that's why the periodic table exists."
  ],

  "solid-state": [
    "There are 14 possible repeating 3D crystal lattice types (Bravais lattices). Every solid crystal is one of these, possibly with multiple atoms per repeating unit. Diamond and silicon are both 'face-centered cubic'.",
    "Drude model treats electrons in a metal as a gas bouncing off ions every $\\tau$ seconds. Conductivity $\\sigma = ne^2\\tau/m$. Crude but captures the physics of why metals conduct.",
    "Silicon's band gap is $1.1$ eV — small enough that thermal energy can promote a few electrons across, but big enough that it's still mostly insulating at room temperature. That's why we use it for semiconductors.",
    "Fermi energy is the highest occupied level at absolute zero. For a free electron gas, $E_F = \\hbar^2 (3\\pi^2 n)^{2/3} / (2m)$. Sets the energy scale for all metallic behavior."
  ],

  "nuclear": [
    "Binding energy is the energy released when nucleons clump into a nucleus. It comes from the missing mass: bound nucleons weigh less than their free parts (mass defect × $c^2$).",
    "Radioactive decay is random per atom, but predictable in bulk: $N(t) = N_0 e^{-\\lambda t}$. The exponential decay is the universal pattern.",
    "Half-life is when $N$ drops to $N_0/2$. From $e^{-\\lambda t_{1/2}} = 1/2$, we get $t_{1/2} = \\ln 2 / \\lambda$. Independent of how much you start with.",
    "Splitting a U-235 nucleus releases about $200$ MeV — millions of times more than chemical reactions per atom. That's why a kilogram of uranium fuel rivals thousands of tons of coal."
  ],

  "particle-physics": [
    "The Standard Model: 6 quarks (in 3 generations of 2), 6 leptons (electron, muon, tau, and their neutrinos), plus their antiparticles. That's all known matter.",
    "Forces come from exchange of gauge bosons: photons ($\\gamma$) carry electromagnetism, gluons (8 of them) carry the strong force, $W^\\pm$ and $Z$ carry the weak force.",
    "The Higgs boson is what gives elementary particles their mass — through interaction with the omnipresent Higgs field. Discovered at the LHC in 2012, mass $\\approx 125$ GeV.",
    "Baryons are made of 3 quarks (proton = uud, neutron = udd). Mesons are quark-antiquark pairs. Together they're called 'hadrons' — the particles built from quarks."
  ],

  "astrophysics-cosmology": [
    "Stefan-Boltzmann: a hot object radiates power $\\propto T^4 \\cdot$ surface area. A star's luminosity = $4\\pi R^2 \\sigma T^4$. This lets astronomers infer star sizes from brightness and temperature.",
    "Wien's law: the peak wavelength of black-body radiation is inversely proportional to temperature. The Sun at $5800$ K peaks at green light — and our eyes evolved to be most sensitive there. No coincidence.",
    "Hubble's law: galaxies recede with speed proportional to their distance — $v = H_0 d$. A galaxy $100$ Mpc away is moving away at $\\sim 7000$ km/s. The universe is expanding.",
    "Friedmann equation governs cosmic expansion: $H^2 = (8\\pi G/3)\\rho - k/a^2 + \\Lambda/3$. Together with the equation of state for matter and dark energy, it determines the universe's entire history and fate."
  ],

  "plasma-physics": [
    "Debye length is the scale over which a plasma neutralizes external charges — beyond it, the plasma 'screens' the disturbance. Foundational scale of plasma behavior.",
    "Plasma frequency is the rate at which electrons oscillate around the heavy ions when disturbed: $\\omega_p = \\sqrt{ne^2/(\\varepsilon_0 m_e)}$. Below this frequency, EM waves can't propagate through the plasma — they reflect (which is why AM radio bounces off the ionosphere).",
    "Charged particles spiral around magnetic field lines at the cyclotron frequency $\\omega_c = eB/m$. This confinement is what makes magnetic fusion possible — and what shapes the auroras.",
    "Lawson criterion: for fusion to release more energy than it costs, you need high enough density × confinement time × temperature: $n\\tau T > 5 \\times 10^{21}$ keV·s/m³. Hard to meet — but ITER aims to demonstrate it."
  ],

  "fluid-dynamics": [
    "Navier-Stokes: pressure gradient drives flow, viscosity damps it, gravity pulls it. Adding inertial $\\vec v \\cdot \\nabla \\vec v$ makes the equation NONLINEAR — and unsolvable in general.",
    "Reynolds number compares inertial forces to viscous forces. Below ~2300, flow in a pipe is smooth (laminar). Above, it transitions to chaotic turbulence. Crucial design parameter.",
    "Stokes drag: at low Reynolds (bacteria, dust, oil droplets), drag is $6\\pi\\mu r v$ — proportional to speed (not speed squared like at high Reynolds). Microscopic life lives in this regime.",
    "Circulation is the line integral of velocity around a closed loop — measures total swirl enclosed. A wing has circulation, which (via Kutta-Joukowski) generates its lift. No circulation, no flight."
  ],

  // ===== NEW MATH =====

  "coordinate-geometry": [
    "Distance between two points in the plane is the hypotenuse of a right triangle whose legs are the differences in x and y. So it's just Pythagoras applied to coordinates.",
    "Midpoint is the average — separately in x and y. Think of it like balancing two weights: their average position is in the middle.",
    "Slope = (change in y) / (change in x). It measures how steep a line is. Big slope = steep. Negative slope = going down. Same slope = parallel.",
    "Point-slope form $y - y_0 = m(x - x_0)$ lets you write a line if you know one point and the slope. Plug in the point, plug in the slope, you're done."
  ],

  "solid-geometry": [
    "Cube volume is side cubed. Why cubed? Because length × width × height, and they're all equal. Think of stacking 4×4×4 = 64 little unit cubes.",
    "Cylinder volume is the base area (a circle, $\\pi r^2$) times the height. Imagine stacking lots of thin discs.",
    "Sphere volume is $\\tfrac{4}{3}\\pi r^3$. The factor 4/3 comes from calculus (Archimedes worked it out by clever geometry).",
    "Cone volume is one-third base times height. Why a third? You can prove it by integration, or by a beautiful demonstration: a cone, a cylinder, and a hemisphere of equal radius and height have volumes in ratio 1:3:2."
  ],

  "conic-sections": [
    "$y = x^2 - 4x + 7$ is a parabola. Completing the square shows it's $(x-2)^2 + 3$ — the standard form with vertex at $(2, 3)$.",
    "$x^2/25 + y^2/9 = 1$ is an ellipse stretched 5 units along x, 3 units along y. The semi-axes are the square roots of the denominators.",
    "$x^2/16 - y^2/9 = 1$ is a hyperbola. As you go far from the origin, it approaches its asymptotes — straight lines you can read off as $y = \\pm (b/a) x$.",
    "$x^2 + y^2 = 25$ is a circle of radius 5 centered at the origin. Same coefficients on $x^2$ and $y^2$ means circle (not ellipse)."
  ],

  "mathematical-logic": [
    "Direct proof: assume what you're given, manipulate, arrive at the conclusion. Even numbers are $2k$. Sum of two even numbers is $2(k+m)$ — which is even by definition.",
    "Proof by contradiction: assume the OPPOSITE of what you want to show, derive nonsense, conclude the opposite must be false. The classic example is Euclid's proof that $\\sqrt 2$ is irrational.",
    "Induction proves an infinite family of statements. Show it works for $n=1$ (base case). Then show that if it works for $n$, it works for $n+1$ (inductive step). Dominoes fall.",
    "Contrapositive: 'if P then Q' is logically equivalent to 'if not Q then not P'. Sometimes proving the contrapositive is way easier than proving the original."
  ],

  "graph-theory": [
    "The 'handshake lemma': sum of all vertex degrees = twice the number of edges (each edge contributes 1 to each endpoint). So degrees $1+2+3+4 = 10$ means $5$ edges.",
    "A tree is a connected graph with no cycles. Counting argument: every tree with $n$ vertices has exactly $n-1$ edges. Add one more edge and you create a cycle.",
    "Euler's bridges of Königsberg: when can you traverse every edge exactly once and return to start? Euler proved: iff every vertex has even degree.",
    "Chromatic number is the minimum colors needed to color vertices so adjacent ones differ. $K_4$ (every pair connected) needs 4 colors. Bipartite graphs need only 2."
  ],

  "recurrence-generating": [
    "Fibonacci's characteristic equation $x^2 = x + 1$ has roots $\\varphi$ (golden ratio) and its conjugate. Binet's formula expresses $F_n$ exactly in closed form using these.",
    "For any linear recurrence with constant coefficients, guess $a_n = r^n$. The characteristic polynomial gives the roots. The general solution is a sum of these exponential modes.",
    "The geometric series $\\sum x^n = 1/(1-x)$ is the simplest generating function. It packages the entire sequence $\\{1, 1, 1, \\ldots\\}$ into one rational function.",
    "Binomial coefficient $\\binom{10}{5}$ counts the number of ways to pick 5 things from 10. By the binomial theorem, this is the $x^5$ coefficient of $(1+x)^{10}$."
  ],

  "computability": [
    "Halting problem: 'does program P halt on input I?' Turing showed no algorithm can answer this for all P and I. The proof is a clever diagonal argument — like Cantor's argument for uncountability.",
    "Deciding whether a finite automaton accepts ANY string is easy: just check whether any accept state is reachable from the start. Decidable in polynomial time.",
    "P is the class of problems solvable in polynomial time. Sorting is in P — many algorithms in $O(n \\log n)$. Polynomial = practical.",
    "NP-complete problems (like SAT) are the hardest problems in NP. If you solve one in P, you've solved them all in P. The biggest open question in computer science is whether P = NP."
  ],

  "galois-theory": [
    "$\\mathbb{Q}(\\sqrt 2)$ contains $a + b\\sqrt 2$ for rational $a, b$ — a 2D vector space over $\\mathbb{Q}$. So the extension degree is 2.",
    "The Galois group permutes the roots while preserving algebraic relations. For $x^2 - 2$, the only options are identity and $\\sqrt 2 \\mapsto -\\sqrt 2$. That's $\\mathbb{Z}/2$.",
    "Solvable by radicals iff Galois group is solvable. For $x^2 + 1$ the Galois group is $\\mathbb{Z}/2$, abelian, solvable. For general quintics, the group is $S_5$, not solvable — no radical formula exists.",
    "$x^5 - 1$ factors as $(x-1)(x^4 + x^3 + x^2 + x + 1)$. The roots are the 5th roots of unity. Their Galois group over $\\mathbb{Q}$ is the multiplicative group $(\\mathbb{Z}/5)^*$ — cyclic of order 4."
  ],

  "lie-groups": [
    "SO(2) is the group of 2D rotations. Each rotation is parameterized by one angle $\\theta$, so SO(2) has dimension 1. Multiplying corresponds to adding angles.",
    "SU(2) acts on 2D complex vectors preserving norm. It has 3 real parameters and is a double cover of SO(3) — important in quantum mechanics for spin.",
    "Lie algebra of SO(3) is so(3): the angular-momentum generators $L_x, L_y, L_z$. Their commutators close: $[L_i, L_j] = \\epsilon_{ijk} L_k$. This is the entire infinitesimal structure of rotations.",
    "The exponential map turns a Lie algebra element $X$ into a group element $e^{tX}$. Just like $e^{i\\theta}$ rotates in the complex plane — same idea, generalized to matrices."
  ],

  "differential-geometry": [
    "Arc length: $L = \\int |\\vec r'(t)|\\,dt$. For a circle, $|\\vec r'| = 1$ at every point, so $L = 2\\pi$.",
    "The tangent vector $\\vec r'(t)$ points along the curve. At $t=1$ for $(t, t^2, t^3)$, derivatives are $1, 2t, 3t^2$, giving $(1, 2, 3)$.",
    "Curvature of a circle of radius $R$ is exactly $1/R$. Tighter circle = higher curvature. Makes intuitive sense and is provable from the formula.",
    "A sphere has constant positive Gaussian curvature $1/R^2$. Flat plane has 0. Saddle has negative. This was Gauss's 'Theorema Egregium': curvature is intrinsic, preserved under bending."
  ],

  "tensor-calculus": [
    "Scalars are rank-0 tensors (a single number). Vectors are rank-1 (an array indexed by one slot). Matrices are rank-2 (two slots). General tensors have any rank.",
    "The Minkowski metric $\\eta_{\\mu\\nu} = \\text{diag}(-1, 1, 1, 1)$ encodes spacetime geometry. The minus sign is what makes time different from space.",
    "To raise an index: contract with the inverse metric, $A^\\mu = g^{\\mu\\nu} A_\\nu$. To lower: contract with the metric. This is why the metric is so important — it converts between upstairs and downstairs.",
    "Einstein's convention: when an index appears twice (once up, once down), sum over it implicitly. This saves writing $\\sum$ everywhere. $A_\\mu B^\\mu$ is automatically $\\sum_\\mu A_\\mu B^\\mu$."
  ],

  "algebraic-topology": [
    "$\\pi_1(S^1) = \\mathbb{Z}$. Loops on the circle are classified by their winding number — an integer counting net trips around. Adding loops adds winding numbers.",
    "Any loop on a sphere can be continuously shrunk to a point. So $\\pi_1(S^2)$ is trivial. The sphere is simply connected; the torus and circle are not.",
    "$\\chi = V - E + F$ is the Euler characteristic. For a tetrahedron: 4 vertices, 6 edges, 4 faces, so $\\chi = 2$. All polyhedra topologically equivalent to a sphere give $\\chi = 2$.",
    "Homology counts holes of each dimension. A single point has only $H_0 = \\mathbb{Z}$ (one connected component) and trivial higher homology. As you move to circles, spheres, tori, the higher $H_n$ light up."
  ],

  "riemannian-geometry": [
    "Euclidean metric is just $g_{ij} = \\delta_{ij}$ — diagonal with 1's. Length squared in 3D is $dx^2 + dy^2 + dz^2$. Flat space.",
    "A sphere of radius $R$ has metric $R^2(d\\theta^2 + \\sin^2\\theta\\,d\\phi^2)$. The $\\sin^2\\theta$ factor reflects that lines of longitude pinch together at the poles.",
    "The geodesic equation $\\ddot x^\\mu + \\Gamma^\\mu_{\\alpha\\beta} \\dot x^\\alpha \\dot x^\\beta = 0$ generalizes 'straight line'. In curved space, the Christoffel symbols tell you how to correct for the curvature.",
    "An Einstein manifold has $R_{\\mu\\nu} = \\lambda g_{\\mu\\nu}$. This is the condition in vacuum Einstein equations with cosmological constant. Such spaces are highly symmetric."
  ],

  "measure-theory": [
    "A σ-algebra is a collection of subsets closed under complements and countable unions. The smallest σ-algebra on $\\{a, b\\}$ containing $\\{a\\}$ is the full power set.",
    "Lebesgue measure on $\\mathbb{R}$ assigns the obvious length to intervals: $m([0,1]) = 1$. Then it extends to all 'reasonable' (measurable) sets — almost everything you'll ever care about.",
    "The rationals $\\mathbb{Q} \\cap [0, 1]$ form a countable set — and any countable set has Lebesgue measure 0. So integrating over $[0,1]$ is unaffected by the rationals.",
    "DCT (dominated convergence theorem): if $f_n \\to f$ pointwise and there's a single integrable bound $g \\geq |f_n|$, then you can swap limit and integral. Hugely useful."
  ],

  "functional-analysis": [
    "$C[0,1]$ with the sup norm is the canonical Banach space: continuous functions on $[0,1]$, equipped with $\\|f\\| = \\max |f|$. Limits of Cauchy sequences exist within the space.",
    "$L^2$ is a Hilbert space: square-integrable functions with inner product $\\int f \\bar g$. The richer structure (an angle, not just a length) makes it the natural setting for QM and Fourier analysis.",
    "The multiplication operator $T f(x) = x f(x)$ on $L^2[0,1]$ is bounded with norm 1. Bounded operators are well-behaved continuous linear maps — the kind you can analyze with confidence.",
    "Spectrum generalizes eigenvalues. For multiplication by $x$ on $L^2[0,1]$, the spectrum is the closed interval $[0,1]$ — continuous spectrum, no discrete eigenvalues."
  ],

  "calculus-of-variations": [
    "Shortest path between two points: minimize $\\int \\sqrt{1 + y'^2}\\,dx$. The Euler-Lagrange equation gives $y'' = 0$, so $y$ is linear — a straight line. (We knew this.)",
    "Brachistochrone: what curve gives fastest descent under gravity? Bernoulli posed the problem in 1696. Answer: cycloid — the curve traced by a point on a rolling wheel.",
    "Minimize surface area of revolution around the x-axis. The Euler-Lagrange equation leads to the catenoid: $y = a \\cosh(x/a)$. Soap films between rings make exactly this shape.",
    "Geodesics on a sphere are great circles — arcs of circles passing through the sphere's center. The Euler-Lagrange equation with the spherical metric proves it."
  ],

  "function-sequences": [
    "$x^n$ on $[0, 1]$ converges pointwise to 0 for $x < 1$ but jumps to 1 at $x = 1$. So the pointwise limit is discontinuous — even though each $x^n$ is continuous!",
    "$f_n(x) = x/n$ goes to 0 uniformly because $\\sup_{x \\in [0,1]} |x/n| = 1/n \\to 0$. The convergence rate is the same everywhere.",
    "Weierstrass M-test: if $|f_n(x)| \\leq M_n$ for all $x$, and $\\sum M_n < \\infty$, then $\\sum f_n(x)$ converges uniformly. Very easy to apply.",
    "Power series $\\sum a_n x^n$ converges inside the radius determined by ratio or root test. For $\\sum x^n/n!$, the ratio test gives radius $\\infty$ — converges everywhere (this is $e^x$)."
  ],

  "random-variables": [
    "Binomial $X = $ number of successes in $n$ independent trials. Mean is $np$ (intuitive). Variance is $np(1-p)$ — biggest at $p = 1/2$ (most uncertainty).",
    "Poisson distribution models counts of rare events. $P(X = k) = e^{-\\lambda} \\lambda^k / k!$. Both mean and variance equal $\\lambda$ — that's a Poisson signature.",
    "Normal (Gaussian) is the bell curve. PDF $\\propto e^{-(x-\\mu)^2/(2\\sigma^2)}$. Sums of many small independent effects converge to normal — that's the Central Limit Theorem.",
    "CLT: regardless of the underlying distribution (with finite variance), the standardized sample mean converges to $N(0, \\sigma^2)$. This is why normal distributions show up everywhere."
  ],

  "stochastic-processes": [
    "Markov property: future depends only on present, not history. Tomorrow's weather depends on today's, not last week's (approximately). This 'memoryless' property makes the math tractable.",
    "Stationary distribution: a probability distribution that the chain doesn't change. Found as the left eigenvector of the transition matrix with eigenvalue 1.",
    "Simple random walk: at each step, go $\\pm 1$ with equal probability. After $n$ steps, mean position is 0 but variance grows linearly: $n$. So typical displacement is $\\sqrt n$ — diffusive scaling.",
    "Brownian motion is the continuous-time limit of random walks. $W(t) \\sim N(0, t)$. Paths are continuous but nowhere differentiable — bizarre but well-defined."
  ],

  "bayesian-statistics": [
    "Bayes' rule: posterior $\\propto$ likelihood $\\times$ prior. Update your belief about $\\theta$ by combining what data says with what you thought beforehand.",
    "Conjugate prior: when posterior has the same functional form as prior. Beta prior + binomial likelihood = Beta posterior. Magic for analytical updates.",
    "Beta$(1, 1)$ is uniform on $[0, 1]$ — minimal prior info. After two heads and one tail, posterior is Beta$(3, 2)$ — peaked around 2/3.",
    "Credible interval: range containing 95% of posterior probability. Different from frequentist confidence intervals — Bayesian intervals make direct probability statements about the parameter."
  ],

  "optimization": [
    "Linear programming: minimize linear objective subject to linear constraints. The feasible region is a polytope; the optimum sits at a vertex. Simplex method walks vertex to vertex.",
    "KKT conditions extend Lagrange multipliers to inequalities. At an optimum: gradient of Lagrangian zero, primal feasibility, dual feasibility, and complementary slackness (constraint active or multiplier zero).",
    "Convex function: chord between any two points sits above the function. Test: second derivative non-negative. $x^2$ is convex, $-x^2$ isn't. For convex problems, every local min is global.",
    "Gradient descent: take a small step opposite the gradient to decrease the function. Step size $\\eta$ controls rate vs stability. Foundation of all modern machine learning."
  ],

  "information-theory": [
    "Entropy of a fair coin is 1 bit — maximum uncertainty for two outcomes. No coin flip can carry more information than 1 bit.",
    "Entropy of a biased coin is less than 1 bit because it's more predictable. $H(0.9, 0.1) \\approx 0.47$ bits. In the extreme — a coin that always lands heads — entropy is 0.",
    "Mutual information $I(X; Y) = H(X) - H(X|Y)$. Reduces uncertainty about $X$ by knowing $Y$. Always non-negative.",
    "Shannon's channel capacity: maximum reliable bit rate. For a binary symmetric channel with error probability $p$, capacity is $1 - H(p)$ bits per use. Equals 1 at $p = 0$ (perfect channel), drops to 0 at $p = 1/2$ (random noise)."
  ],

  "game-theory": [
    "Prisoner's dilemma: both cooperate gives total payoff 6, both defect gives 4. But each individual is better off defecting regardless of what the other does. Equilibrium is mutually destructive — the paradox.",
    "Nash equilibrium: a profile of strategies where no one can improve by unilaterally deviating. The classical definition of stable strategic outcome.",
    "Matching pennies: no pure Nash exists (each player wants to do the opposite of the other). The unique equilibrium is mixed: each plays randomly with $50/50$ probability.",
    "Battle of the sexes: coordination game where each prefers a different option but both prefer coordinating. Multiple pure equilibria + a mixed one. Real-world examples: technology standards, meeting locations."
  ],

  "dynamical-systems": [
    "$\\dot x = rx - x^3$. Fixed points where $\\dot x = 0$. For $r > 0$ there are three: $x = 0$ (unstable) and $\\pm\\sqrt r$ (stable). For $r \\leq 0$, only $x = 0$. The transition at $r = 0$ is a pitchfork bifurcation.",
    "Logistic map $x_{n+1} = r x_n (1 - x_n)$ is the simplest model of chaos. As $r$ increases past 3, the fixed point becomes a 2-cycle, then 4, 8, 16... — period doubling. Chaos at $r \\approx 3.57$.",
    "Lyapunov exponent measures exponential divergence of nearby trajectories. Positive $\\lambda$ ⇒ chaotic. The weather has Lyapunov time of about 2 weeks — beyond which predictions break down.",
    "Pendulum phase portrait shows centers (low-energy oscillations around stable downward position) and saddles (the unstable upward position). The separatrix passes through the saddles, separating libration from rotation."
  ],

  "cryptography": [
    "RSA: pick large primes $p, q$. Public $n = pq$ and exponent $e$. Private $d \\equiv e^{-1} \\pmod{\\varphi(n)}$. Security relies on the difficulty of factoring $n$ back into $p$ and $q$.",
    "Modular exponentiation: compute $2^{10} \\bmod 13$ efficiently. Square-and-multiply: $2, 4, 8, 16 \\equiv 3, 6, 12$. So $2^{10} \\equiv 10 \\pmod{13}$.",
    "One-time pad: XOR plaintext with a random key of equal length. The ciphertext is perfectly secure — no statistical leakage. Problem: distributing keys as long as the messages is impractical at scale.",
    "Hash collision: by the birthday paradox, you expect a collision after about $2^{n/2}$ random hashes, not $2^n$. So a 128-bit hash gives only 64 bits of collision security."
  ],

  // ===== NEW PHYSICS =====

  "continuum-elasticity": [
    "Stress is force per unit area: $\\sigma = F/A$. A 10000-N force over 0.01 m² gives 1 MPa. Think of it as how concentrated the load is.",
    "Strain is fractional deformation: $\\varepsilon = \\Delta L / L$. A 1-mm stretch on a 1-m rod is a strain of $10^{-3}$. Dimensionless quantity.",
    "Young's modulus $E$ relates them: $E = \\sigma / \\varepsilon$. Steel has $E \\sim 200$ GPa — meaning it takes a lot of stress to produce noticeable strain. That's what makes steel useful.",
    "Bulk modulus $K$ characterizes volume change under pressure. Important for fluids and isotropic solids. Inverse of compressibility — how stiff against squeezing."
  ],

  "central-force": [
    "If the force points toward (or away from) a fixed center, the torque about that center is zero. So angular momentum doesn't change. This is why orbits are planar.",
    "Equal areas in equal times (Kepler's 2nd) follows from constant $\\vec L$. The areal velocity $dA/dt = L/(2m)$ is fixed. Planets move fastest near the Sun (perihelion).",
    "Kepler's 3rd law: $T^2 \\propto a^3$. Derived from balancing gravity and centripetal force in a circular orbit. Generalizes to ellipses.",
    "Effective potential combines true potential with the centrifugal $L^2/(2mr^2)$ term. Plot it vs $r$ to find allowed orbits. Local minimum gives stable circular orbit."
  ],

  "nonlinear-chaos-physics": [
    "Logistic map: $x_{n+1} = r x_n(1 - x_n)$. As $r$ grows from 3 to 3.57, periodic orbits double and double, until chaos sets in. Universal route to chaos.",
    "Lorenz attractor (1963): three coupled ODEs from atmospheric convection produce a 'butterfly' attractor. Bounded but chaotic — and the discovery of strange attractors.",
    "Lyapunov exponent quantifies chaos: positive value means tiny errors grow exponentially. Sensitive dependence on initial conditions = chaos.",
    "Driven pendulum: with enough drive amplitude, periodic motion gives way to chaos. Phase space has fractal structures (Poincaré sections show beautiful islands and chaotic seas)."
  ],

  "angular-momentum-spin": [
    "For each $\\ell$, the magnetic quantum number $m$ takes integer values from $-\\ell$ to $+\\ell$, giving $2\\ell + 1$ states. The $z$-component of angular momentum is $m\\hbar$.",
    "$L^2 |\\ell, m\\rangle = \\ell(\\ell+1) \\hbar^2 |\\ell, m\\rangle$. Notice $\\ell(\\ell+1)$, not $\\ell^2$ — surprising at first, comes from the commutation algebra.",
    "Pauli matrix $\\sigma_z$ is diagonal: $|0\\rangle$ and $|1\\rangle$ are eigenstates with eigenvalues $+1$ and $-1$. Multiplying by $\\hbar/2$ gives spin-z eigenvalues.",
    "Two spin-1/2 particles combine into total spin 0 (singlet, antisymmetric) or 1 (triplet, symmetric). Three states total at $s=1$ ($m_s = -1, 0, +1$); one at $s=0$. Total: 4."
  ],

  "qm-3d-hydrogen": [
    "In spherical coordinates, the Schrödinger equation separates. Angular part: $Y_\\ell^m(\\theta, \\phi)$, spherical harmonics. Radial part: a 1D effective equation for $R(r)$.",
    "Hydrogen energy levels are $E_n = -13.6/n^2$ eV, where $n = 1, 2, 3, \\ldots$. Ground state at $-13.6$ eV; ionized at $E = 0$.",
    "Ground state wavefunction is spherically symmetric: $\\psi_{100} \\propto e^{-r/a_0}$. Probability peaks at $r = a_0$ (Bohr radius), not $r = 0$ — the radial measure $r^2 dr$ wins.",
    "Each level $n$ has $\\ell = 0, 1, \\ldots, n-1$, and for each $\\ell$, $2\\ell+1$ values of $m$. Total: $n^2$ orbital states. With spin: $2n^2$."
  ],

  "perturbation-theory": [
    "First-order energy correction is simply the expectation of the perturbation in the unperturbed state: $E_n^{(1)} = \\langle n | H' | n \\rangle$. Quick and clean.",
    "First-order state correction mixes in other unperturbed states, weighted by matrix elements divided by energy differences. Larger energy gap → less mixing.",
    "Fermi's golden rule: transition rate $\\propto |\\langle f|H'|i\\rangle|^2 \\rho(E_f)$. Used for atomic transitions, decay rates, scattering cross sections.",
    "Degenerate states need special care: diagonalize $H'$ within the degenerate subspace first, then continue with regular perturbation theory."
  ],

  "identical-particles": [
    "Two-fermion wavefunction must be antisymmetric: $\\psi(1, 2) = -\\psi(2, 1)$. Slater determinant builds it from single-particle orbitals automatically.",
    "Two bosons have symmetric wavefunctions: $\\psi(1, 2) = +\\psi(2, 1)$. They can occupy the same state freely — leading to lasers and BEC.",
    "Try to put two fermions in the same state in a Slater determinant: the determinant vanishes. That's Pauli exclusion mathematically. Why electrons fill atomic shells.",
    "Helium's two electrons in ground state: both in spatial 1s orbital (allowed because the spatial part is symmetric and the spin part is antisymmetric: a singlet). Configuration $1s^2$."
  ],

  "scattering-theory": [
    "Differential cross section is the modulus squared of the scattering amplitude: $d\\sigma/d\\Omega = |f(\\theta)|^2$. Captures angular distribution of scattered particles.",
    "Born approximation: for weak potentials, $f(\\theta)$ is essentially the Fourier transform of $V$. Treats the incoming wave as undeflected — first-order perturbation.",
    "Partial-wave expansion decomposes into angular momentum components. Each contributes a phase shift $\\delta_\\ell$. Far from resonance, $\\delta_\\ell$ is small.",
    "Optical theorem: total cross section relates to the forward scattering amplitude: $\\sigma_{tot} = (4\\pi/k) \\text{Im}\\, f(0)$. Probability conservation in disguise."
  ],

  "density-matrices": [
    "For pure state $|\\psi\\rangle$, density matrix is $|\\psi\\rangle\\langle\\psi|$ — a projector. Trace 1, eigenvalues 0 and 1.",
    "Mixed state: $\\rho = \\sum p_i |\\psi_i\\rangle\\langle\\psi_i|$ with classical probabilities $p_i$. $\\text{tr}\\rho = 1$ still, but now $\\rho^2 \\neq \\rho$.",
    "Partial trace over subsystem B gives the reduced density matrix on A: $\\rho_A = \\text{tr}_B(\\rho_{AB})$. Local observers only see reduced states — that's why entangled subsystems look mixed.",
    "Lindblad equation: master equation for Markovian open systems. Coherent Hamiltonian evolution + dissipative jump operators. Standard model of decoherence."
  ],

  "path-integrals": [
    "Feynman: the amplitude to go from initial to final state is $\\int e^{iS/\\hbar} \\mathcal{D}x$ — sum over all possible paths weighted by $e^{iS/\\hbar}$.",
    "When $S \\gg \\hbar$, only paths near the stationary (classical) path contribute constructively. That's how classical mechanics emerges as the $\\hbar \\to 0$ limit.",
    "Free particle propagator: a Gaussian in space and time. The factor $\\sqrt{m/(2\\pi i\\hbar t)}$ is set by normalization.",
    "Double slit: sum amplitudes for paths through each slit. Their phases differ by $kd\\sin\\theta$ — interference pattern emerges naturally."
  ],

  "quantum-information": [
    "A qubit is a 2-state quantum system: $\\alpha|0\\rangle + \\beta|1\\rangle$. The probabilities $|\\alpha|^2, |\\beta|^2$ sum to 1. Visualize as a point on the Bloch sphere.",
    "Bell state $(|00\\rangle + |11\\rangle)/\\sqrt 2$ is maximally entangled. Measuring one qubit instantly determines the other, no matter how far apart.",
    "CNOT (controlled-NOT) flips the target qubit iff the control is $|1\\rangle$. Combined with Hadamard, it's universal for quantum computation.",
    "No-cloning: no unitary can copy an arbitrary unknown quantum state. Provable from linearity — you can't have $|\\psi\\rangle \\to |\\psi\\rangle|\\psi\\rangle$ for all $|\\psi\\rangle$. Foundation of quantum cryptography."
  ],

  "symmetries-noether": [
    "Translation symmetry of the Lagrangian → momentum is conserved. Push a closed system: momentum doesn't change because the laws are the same everywhere.",
    "Rotational symmetry → angular momentum is conserved. The physics doesn't care which way is up.",
    "Time translation symmetry → energy is conserved. The laws of physics don't change over time.",
    "Internal $U(1)$ symmetry → conserved current → conserved charge. Different choice of phase of the wavefunction is unobservable, hence charge conservation."
  ],

  "classical-field-theory": [
    "Free scalar field Lagrangian: $\\mathcal{L} = \\tfrac{1}{2}(\\partial_\\mu \\phi)^2 - \\tfrac{1}{2}m^2 \\phi^2$. Kinetic term involves derivatives in time and space.",
    "Euler-Lagrange equation for this Lagrangian gives the Klein-Gordon equation: $(\\Box + m^2)\\phi = 0$. Relativistic generalization of Schrödinger.",
    "Dirac equation: first-order in derivatives, but uses 4-component spinors and gamma matrices. Describes spin-1/2 particles relativistically.",
    "EM Lagrangian: $\\mathcal{L} = -\\tfrac{1}{4} F_{\\mu\\nu} F^{\\mu\\nu}$. Maxwell's equations follow from Euler-Lagrange. Most elegant formulation of electromagnetism."
  ],

  "qft": [
    "Quantizing a field: expand in modes, promote coefficients $a_k$ and $a_k^\\dagger$ to operators with $[a, a^\\dagger] = 1$. Field becomes operator-valued.",
    "$a_k^\\dagger |\\text{vacuum}\\rangle$ creates a particle with momentum $k$. Stacks build multi-particle states. The vacuum has zero-point fluctuations.",
    "QED Feynman vertex: photon-electron-electron, factor $-ie\\gamma^\\mu$. All processes are built from these vertices and propagators.",
    "Cross section for $e^+ e^- \\to \\mu^+ \\mu^-$ at high energy: $\\sigma \\propto \\alpha^2/s$. Classic result confirmed at colliders to high precision."
  ],

  "renormalization": [
    "The 'bare' parameters in your Lagrangian aren't what you measure. Loop diagrams give infinite corrections; you absorb them by redefining parameters to match physical quantities.",
    "QED's fine structure constant runs: $\\alpha$ grows logarithmically with energy. At LHC energies, $\\alpha \\sim 1/127$ instead of $1/137$.",
    "Beta function $\\beta(g) = \\mu \\partial g / \\partial \\mu$ describes how coupling changes with energy scale. Sign of $\\beta$ determines whether coupling grows or shrinks at high energy.",
    "QCD: $\\beta < 0$ near origin. Coupling shrinks at high energy (asymptotic freedom) and grows at low energy (confinement). Nobel-winning insight."
  ],

  "radiation-theory": [
    "Larmor formula: power radiated by an accelerating charge is $P = q^2 a^2 / (6\\pi\\varepsilon_0 c^3)$. Quadratic in acceleration.",
    "Oscillating dipole radiates with power $\\propto \\omega^4$. This $\\omega^4$ scaling explains why blue light scatters much more than red — Rayleigh scattering gives us the blue sky.",
    "Retarded potentials: field at $(\\vec r, t)$ comes from the source's state at the retarded time $t - |\\vec r - \\vec r'|/c$. Causality built into Maxwell's equations.",
    "Multipole expansion: at long range, the field of any localized charge distribution looks like a sum of monopole + dipole + quadrupole + ... — each falling off faster than the last."
  ],

  "em-waves-matter": [
    "In a linear medium, refractive index is $n = \\sqrt{\\varepsilon_r \\mu_r}$. Larger $n$ slows light. Vacuum has $n = 1$; water has $n \\approx 1.33$.",
    "Phase velocity $\\omega/k$ is the speed of a single wave's crests. Group velocity $d\\omega/dk$ is the speed of wave packets — and the speed of energy and information transfer.",
    "Glass disperses (different $n$ for different $\\lambda$), bending blue more than red. That's why prisms produce rainbows.",
    "Kramers-Kronig: real and imaginary parts of the permittivity are related via dispersion integrals, enforced by causality. Real (refraction) and imaginary (absorption) are not independent."
  ],

  "lasers": [
    "Einstein A and B coefficients describe spontaneous emission ($A$), absorption, and stimulated emission ($B$). $A$ and $B$ are related — that's how lasers became conceivable.",
    "For amplification you need population inversion: more atoms excited than not. Otherwise net absorption wins over stimulated emission.",
    "Laser threshold: gain per round trip equals losses. Below it, no laser. Above, intensity builds up exponentially until saturation.",
    "Coherence length $L_c \\sim c/\\Delta\\nu$ measures how far the wave stays in phase. Laser linewidths can be sub-Hz, giving coherence lengths of millions of km."
  ],

  "quantum-optics": [
    "Coherent states $|\\alpha\\rangle$ are eigenstates of $\\hat a$. They saturate uncertainty (minimum uncertainty product). Closest quantum analog of classical light.",
    "Jaynes-Cummings model: single atom in a cavity, exchanging quanta with one cavity mode. Vacuum Rabi oscillations even with zero photons (interacting with vacuum fluctuations).",
    "Antibunched light: detection of one photon makes the next detection less likely. $g^{(2)}(0) < 1$ means non-classical light — single-photon sources.",
    "Squeezed light: reduce noise in one quadrature below vacuum, at cost of increasing it in the other. Used in LIGO to push beyond the standard quantum limit."
  ],

  "amo": [
    "Doppler cooling: red-detune lasers. Atoms moving toward a laser see it Doppler-shifted into resonance, absorb photons, lose momentum. Each cycle slows them by photon recoil.",
    "Doppler limit: $T_D = \\hbar\\Gamma / (2k_B)$, where $\\Gamma$ is the natural linewidth. Typically microkelvin range.",
    "Magneto-optical trap (MOT) combines counter-propagating laser beams with magnetic gradients. Atoms get cooled and pushed toward the trap center.",
    "Bose-Einstein condensation occurs when thermal de Broglie wavelength exceeds inter-particle spacing. $T_c \\propto n^{2/3}/m$. Demonstrated 1995, Nobel 2001."
  ],

  "phase-transitions": [
    "Above the Curie point, thermal agitation destroys spontaneous magnetization. Cool through $T_c$ and spins align — Landau-style second-order transition.",
    "Landau expansion: write free energy as power series in the order parameter. $a(T - T_c) m^2 + b m^4$ captures the essence. Symmetry forbids odd terms.",
    "Mean-field theory gives $k_B T_c = z J$ for Ising-like models, with $z$ the coordination number. Overestimates $T_c$ but captures qualitative behavior.",
    "Near $T_c$, observables scale as powers: $m \\propto |T - T_c|^\\beta$. Critical exponent $\\beta$ depends only on universality class — dimension and symmetry, not microscopic details."
  ],

  "nonequilibrium-statmech": [
    "Boltzmann equation: streaming + forces + collisions. Tracks how the single-particle distribution function $f(\\vec r, \\vec v, t)$ evolves.",
    "Relaxation time approximation: collisions push $f$ back toward equilibrium $f_0$ on timescale $\\tau$. Crude but works for many transport problems.",
    "Thermal conductivity in kinetic theory: $\\kappa \\sim nv\\lambda c_V/m$. Heat current is carried by particles, with effective speed $v$ and mean free path $\\lambda$.",
    "Fluctuation-dissipation theorem: equilibrium fluctuations encode the linear response. Connects what spontaneously happens (fluctuation) to what you can drive (dissipation)."
  ],

  "superconductivity": [
    "Below $T_c$, superconductors expel magnetic fields entirely (Meissner effect). Magnetic field lines bend around the superconductor — that's why magnets levitate above them.",
    "Coherence length $\\xi$ measures the size of a Cooper pair, set by $\\hbar v_F/(\\pi \\Delta)$. Around 100 nm for conventional SCs, much shorter for high-$T_c$.",
    "BCS energy gap $\\Delta$ sets the binding energy of Cooper pairs. Universal ratio: $2\\Delta(0) \\approx 3.5 k_B T_c$ for weak-coupling BCS.",
    "Josephson effect: with a DC voltage $V$ across a junction, current oscillates at $\\omega = 2eV/\\hbar$. Used in voltage standards (Volt redefined via Josephson)."
  ],

  "quantum-hall-topological": [
    "In a 2D electron gas under strong $B$, Hall conductance plateaus at exact multiples of $e^2/h$. The plateaus are flat to incredible precision — used as a resistance standard.",
    "Filling factor $\\nu = nh/(eB)$ — ratio of electron density to Landau-level degeneracy. Integer values give IQHE; fractions like 1/3, 2/5 give FQHE.",
    "In a magnetic field, kinetic energy quantizes into Landau levels: $E_n = \\hbar\\omega_c(n + 1/2)$. Each level is hugely degenerate.",
    "Chern number is the topological invariant. Integer-valued, can't change under small perturbations. Why QHE is so precise — quantization is protected by topology."
  ],

  "phonons": [
    "1D chain of atoms connected by springs: dispersion $\\omega(q) = 2\\sqrt{K/m}|\\sin(qa/2)|$. Sinusoidal — peaks at the Brillouin zone edge.",
    "Long-wavelength limit ($qa \\ll 1$): $\\omega \\approx \\sqrt{K/m}\\,qa$. Linear dispersion is sound, with speed $v_s = a\\sqrt{K/m}$.",
    "Debye temperature $\\Theta_D$ characterizes the maximum phonon frequency. Sets the scale where quantum effects matter for lattice vibrations. Typical metals: ~100-1000 K.",
    "Low-$T$ specific heat $\\propto T^3$ — the famous Debye result. Comes from counting phonon modes in a cube of $k$-space."
  ],

  "stellar-evolution": [
    "Main-sequence lifetime scales as mass/luminosity. Since $L \\propto M^{3.5}$, lifetime $\\propto M^{-2.5}$. Massive stars live fast and die young; red dwarfs last longer than the universe is old.",
    "HR diagram plots luminosity vs surface temperature. Main sequence is the diagonal where most stars sit, fusing hydrogen.",
    "Sun's future: it'll exhaust core hydrogen in ~5 billion years, become a red giant, shed its outer layers, and end as a white dwarf the size of Earth.",
    "Massive stars (>8 $M_\\odot$): exhaust successive nuclear fuels rapidly, collapse, explode as core-collapse supernovae, leave neutron stars or stellar-mass black holes."
  ],

  "stellar-nucleosynthesis": [
    "pp chain: net reaction $4\\,{}^1\\text{H} \\to {}^4\\text{He}$ + neutrinos + 26.7 MeV. Powers the Sun. Slow first step (proton-proton fusion) sets the rate.",
    "CNO cycle uses carbon as catalyst. Dominant in heavier stars where core temperatures exceed ~20 million K.",
    "r-process (rapid neutron capture) requires high neutron flux. Now known to happen mostly in neutron-star mergers (confirmed by GW170817). Sources of gold, platinum, uranium.",
    "Iron-56 has the highest binding energy per nucleon. Fusion to elements lighter than Fe releases energy; fusion past it costs energy. End of the nuclear road for stars."
  ],

  "compact-objects": [
    "Chandrasekhar mass: maximum mass white dwarf can support via electron degeneracy pressure. Beyond ~1.4 $M_\\odot$, gravity wins → Type Ia supernova or collapse.",
    "Neutron stars have densities comparable to atomic nuclei: $\\sim 10^{17}$ kg/m³. A teaspoon of NS material would weigh a billion tons.",
    "Hawking temperature: $T = \\hbar c^3 / (8\\pi GMk_B)$. Inversely proportional to mass — bigger black holes are colder. Stellar BHs are cooler than the CMB.",
    "Bekenstein-Hawking entropy: $S = k_B A / (4\\ell_P^2)$. Proportional to area, not volume — hints at the holographic principle."
  ],

  "galactic-dynamics": [
    "Observed: outer rotation curves of galaxies are flat, not falling off Keplerianly. Implies a massive halo of unseen matter providing extra gravity. Dark matter.",
    "Virial theorem: for gravitationally bound systems, $\\langle T \\rangle = -\\tfrac{1}{2}\\langle V \\rangle$. Gives mass from observed velocity dispersion.",
    "Spiral arms aren't material structures rotating with the galaxy. They're density waves — stars enter and leave them as they orbit.",
    "$M(r) \\sim v^2 r/G$ from circular orbits. Sets the enclosed mass profile. Reveals dark matter dominates beyond the visible galaxy."
  ],

  "bbn-cmb-inflation": [
    "BBN predicts primordial helium fraction $Y_p \\approx 0.245$, deuterium $\\sim 10^{-5}$, lithium $\\sim 10^{-10}$. Matches observation, except for a small lithium discrepancy.",
    "CMB temperature today is 2.725 K, redshifted from $\\sim 3000$ K at recombination. Discovered serendipitously by Penzias and Wilson (1964 Nobel-worthy noise).",
    "Acoustic peaks in the CMB power spectrum come from sound waves in the photon-baryon plasma before recombination. Their positions encode cosmological parameters.",
    "Inflation: exponential expansion for ~60 e-folds resolves the horizon, flatness, and monopole problems. Predicts a nearly scale-invariant spectrum of primordial fluctuations."
  ],

  "gravitational-waves": [
    "Strain $h \\sim 10^{-21}$ for typical detected events. LIGO's 4-km arms must measure changes much smaller than a proton width.",
    "Quadrupole formula: GW power $\\propto |\\dddot Q|^2$. Spherically symmetric collapse doesn't radiate; you need asymmetric mass distributions.",
    "Inspiral 'chirps': frequency increases as $(t_c - t)^{-3/8}$ before merger. Distinctive signature — first detection confirmed binary black holes (GW150914).",
    "GW150914: about $3 M_\\odot$ converted to gravitational-wave energy in 0.2 seconds. Briefly outshone the rest of the universe in GWs."
  ],

  "high-energy-astrophysics": [
    "GRBs release ~$10^{52}$ erg isotropic-equivalent — but the radiation is beamed, so true energy is ~$10^{50}$ erg. Still equivalent to converting solar masses to radiation.",
    "Cosmic ray spectrum: power law $\\propto E^{-2.7}$ to about $10^{15}$ eV (the 'knee'), then steepens. Source mostly Galactic up to the knee, extragalactic beyond.",
    "Relativistic jets from AGN/blazars accelerate particles to enormous energies. Magnetic-rotational energy extraction from spinning black holes is one explanation.",
    "Synchrotron radiation: charged particles spiraling in magnetic fields emit a characteristic power-law spectrum. Most non-thermal high-energy astrophysical emission is synchrotron."
  ],

  "math-methods-physics": [
    "Bessel functions appear in cylindrically symmetric problems: vibrations of a drum, EM in waveguides. Their zeros set boundary-condition frequencies.",
    "Green's function for the heat equation is a Gaussian kernel: $G(x, t) = (4\\pi Dt)^{-1/2} e^{-x^2/(4Dt)}$. Convolving with any initial condition gives the solution.",
    "Contour integration: $\\int dx/(1+x^2)$ over the real line. Close the contour in the upper half plane, pick up the residue at $x=i$, get $\\pi$.",
    "Saddle point (stationary phase) approximation: integrals like $\\int e^{iS/\\hbar}$ are dominated by points where $S$ is stationary. The path integral's classical limit is exactly this."
  ],

  "group-theory-physics": [
    "SU(2) has 3 generators $T_i = \\sigma_i/2$, the Pauli matrices over 2. They satisfy $[T_i, T_j] = i\\epsilon_{ijk} T_k$ — same algebra as SO(3) rotations.",
    "SU(3) has $3^2 - 1 = 8$ generators (Gell-Mann matrices). Used in the eightfold way for hadron classification.",
    "Character table compactly describes how each irreducible representation transforms under each conjugacy class. Powerful tool for decomposing reducible reps.",
    "Selection rules: a transition's matrix element must respect symmetry. If the integrand isn't symmetric under the group, the integral vanishes — transition forbidden."
  ],

  "computational-physics": [
    "Monte Carlo integration: sample $f$ at random points and average. Error scales as $1/\\sqrt N$ regardless of dimension — beats deterministic methods in high $d$.",
    "Metropolis algorithm: propose moves, accept with probability $\\min(1, e^{-\\beta\\Delta E})$. Generates Boltzmann-distributed samples.",
    "Verlet integration: $x_{n+1} = 2x_n - x_{n-1} + (\\Delta t)^2 a_n$. Time-reversible, symplectic, conserves energy well over long simulations.",
    "Lattice methods discretize space and/or time. Smaller lattice spacing → more accurate but more compute. Continuum limit requires extrapolation."
  ],

  "soft-matter-biophysics": [
    "Polymer modeled as a random walk: each monomer step $b$ in random direction. Mean-square end-to-end distance is $N b^2$ — polymer size grows as $\\sqrt N$.",
    "Helfrich free energy for membranes: $E = \\tfrac{\\kappa}{2} \\int (2H)^2 dA$, where $H$ is mean curvature. Lipid bilayers minimize this — explains cell membrane shapes.",
    "Molecular motors (kinesin, myosin, dynein) exert forces of ~5 pN over ~8-nm steps, powered by ATP hydrolysis. They convert chemical energy to directed motion.",
    "Levinthal paradox: random search would take longer than the age of the universe to find the protein's native fold. Resolution: the energy landscape funnels toward the native state."
  ]
};
