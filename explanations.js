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
  ]
};
