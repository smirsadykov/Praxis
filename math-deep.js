// Deep additional worked examples for every math topic.
// Each example: title, prompt, explain (ELI5), steps, answer.
// Rendered after the main worked examples in the topic view.

(function () {
  window.EXTRA_EXAMPLES = window.EXTRA_EXAMPLES || {};

  Object.assign(window.EXTRA_EXAMPLES, {

    "arithmetic-foundations": [{
      title: "Example — Order of operations with negatives",
      prompt: "Evaluate $-3^2 + (-3)^2 + (-2)^3$ paying careful attention to signs.",
      explain: "Trickiest thing in basic arithmetic: the minus sign in front of $3^2$ does NOT belong to the base. $-3^2$ means $-(3^2) = -9$, not $(-3)^2 = 9$. Parentheses change everything.",
      steps: [
        { label: "Resolve $-3^2$", body: "Exponentiation binds tighter than the unary minus. So $-3^2 = -(3 \\cdot 3) = -9$. The 3 is being squared; the minus is sitting outside, waiting to flip the result." },
        { label: "Resolve $(-3)^2$", body: "Parentheses force the minus INTO the base. So $(-3)^2 = (-3) \\cdot (-3) = +9$. Same digits, opposite sign — because two negatives make a positive when multiplied." },
        { label: "Resolve $(-2)^3$", body: "$(-2)^3 = (-2)(-2)(-2) = (+4)(-2) = -8$. Odd power preserves the negative sign." },
        { label: "Sum", body: "$-9 + 9 + (-8) = -8$." }
      ],
      answer: "$-8$. Memorize: $-x^2$ and $(-x)^2$ are not the same expression."
    }],

    "fractions-percentages": [{
      title: "Example — Successive percentage changes",
      prompt: "A stock rises 20% then falls 20%. What is the net percentage change?",
      explain: "Common trap: students answer 'zero, they cancel.' But percentages multiply, not add. A 20% rise of \\$100 gives \\$120. Then a 20% fall of \\$120 — not \\$100 — gives \\$96. You lose money.",
      steps: [
        { label: "After the rise", body: "Original price $\\times (1 + 0.20) = 1.20 \\times$ original. If original is \\$100, now \\$120." },
        { label: "After the fall", body: "New price $\\times (1 - 0.20) = 0.80 \\times \\$120 = \\$96$. The 20% fall is computed off the NEW price, not the original." },
        { label: "Net factor", body: "$1.20 \\times 0.80 = 0.96$, so 96% of original — a 4% loss." }
      ],
      answer: "−4% (loss). The general rule: successive percentage changes of $+p\\%$ then $-p\\%$ produce a net change of $-p^2/100\\,\\%$."
    }],

    "exponents-roots": [{
      title: "Example — Solve an exponential equation",
      prompt: "Solve $4^x \\cdot 8^{x+1} = 32$.",
      explain: "Trick: rewrite everything with the same base. All three numbers are powers of 2. Once unified, exponents on the same base must equal each other.",
      steps: [
        { label: "Express in base 2", body: "$4 = 2^2$, $8 = 2^3$, $32 = 2^5$. So $4^x = (2^2)^x = 2^{2x}$, $8^{x+1} = (2^3)^{x+1} = 2^{3(x+1)} = 2^{3x+3}$." },
        { label: "Multiply LHS", body: "$2^{2x} \\cdot 2^{3x+3} = 2^{2x + 3x + 3} = 2^{5x + 3}$. (Same base — add exponents.)" },
        { label: "Equate exponents", body: "$2^{5x+3} = 2^5 \\Rightarrow 5x + 3 = 5 \\Rightarrow x = 2/5$." }
      ],
      answer: "$x = 2/5$. Check: $4^{0.4} \\cdot 8^{1.4} = 2^{0.8} \\cdot 2^{4.2} = 2^5 = 32$ ✓."
    }],

    "ratios-proportions": [{
      title: "Example — Mixture problem",
      prompt: "A mixture of milk and water is in ratio 3:2. After adding 4 L of water, the ratio becomes 3:4. How much milk was originally there?",
      explain: "Classic word problem. Let the original quantities be $3k$ (milk) and $2k$ (water) — same ratio means a common multiplier. The amount of milk doesn't change; only water increases.",
      steps: [
        { label: "Set up", body: "Milk = $3k$, water = $2k$. After adding 4 L water: milk = $3k$, water = $2k + 4$." },
        { label: "Use new ratio", body: "New ratio milk:water = 3:4. So $3k/(2k + 4) = 3/4$. Cross-multiply: $12k = 6k + 12$, giving $6k = 12$, $k = 2$." },
        { label: "Compute milk", body: "Milk = $3k = 6$ L." }
      ],
      answer: "6 L of milk. Always express ratios with a common multiplier $k$; it makes the algebra straightforward."
    }],

    "linear-equations": [{
      title: "Example — Word problem to two equations",
      prompt: "The sum of two numbers is 25. Twice the larger plus the smaller equals 40. Find both numbers.",
      explain: "Words into algebra. Pick variables, write each English sentence as an equation, then solve the system. The translation is the hard part; the algebra is mechanical.",
      steps: [
        { label: "Define variables", body: "Let $L$ = larger, $S$ = smaller. We need two equations because two unknowns." },
        { label: "Translate sentences", body: "'Sum is 25' → $L + S = 25$. 'Twice the larger plus the smaller is 40' → $2L + S = 40$." },
        { label: "Subtract to eliminate", body: "Subtract first from second: $(2L + S) - (L + S) = 40 - 25 \\Rightarrow L = 15$." },
        { label: "Back-substitute", body: "$L + S = 25 \\Rightarrow S = 10$." }
      ],
      answer: "Larger = 15, smaller = 10. Check: $15 + 10 = 25$ ✓; $2(15) + 10 = 40$ ✓."
    }],

    "inequalities": [{
      title: "Example — Compound inequality with absolute value",
      prompt: "Solve $|2x - 1| < 5$.",
      explain: "Absolute value means 'distance from zero.' So $|2x-1| < 5$ means $2x-1$ is within 5 of zero — between $-5$ and $+5$. Translate, solve, done.",
      steps: [
        { label: "Unfold the absolute value", body: "$|2x - 1| < 5$ is equivalent to $-5 < 2x - 1 < 5$. (Both inequalities must hold.)" },
        { label: "Add 1 to all parts", body: "$-4 < 2x < 6$." },
        { label: "Divide by 2 (positive, no flip)", body: "$-2 < x < 3$." }
      ],
      answer: "$-2 < x < 3$, or $(-2, 3)$ in interval notation. Always express as $-A < \\ldots < +A$ first — that's the standard technique."
    }],

    "plane-geometry": [{
      title: "Example — Inscribed angle theorem",
      prompt: "A chord $AB$ subtends an angle of $80°$ at the center of a circle. What angle does it subtend at a point $P$ on the major arc?",
      explain: "Beautiful Euclidean fact: the inscribed angle is HALF the central angle subtending the same arc. Knowing this trims dozens of geometry proofs in half.",
      steps: [
        { label: "Identify the central angle", body: "$\\angle AOB = 80°$ where $O$ is the center." },
        { label: "Apply inscribed angle theorem", body: "Any point $P$ on the major arc sees $AB$ under angle $\\angle APB = \\tfrac{1}{2} \\angle AOB = 40°$." }
      ],
      answer: "$40°$. The result depends only on which arc $P$ is on — anywhere on the major arc gives the same $40°$. (Points on the minor arc would see $180° - 40° = 140°$.)"
    }],

    "set-logic": [{
      title: "Example — De Morgan's law in action",
      prompt: "Let $A = \\{1, 2, 3, 4\\}$ and $B = \\{3, 4, 5, 6\\}$ inside universe $U = \\{1, 2, ..., 10\\}$. Compute $(A \\cup B)^c$ and verify it equals $A^c \\cap B^c$.",
      explain: "De Morgan: the complement of a union is the intersection of complements. The rule lets you turn 'NOT (this OR that)' into 'NOT this AND NOT that' — common in proofs and logic.",
      steps: [
        { label: "Compute $A \\cup B$", body: "Elements in either set: $\\{1, 2, 3, 4, 5, 6\\}$." },
        { label: "Complement", body: "Elements of $U$ not in $A \\cup B$: $\\{7, 8, 9, 10\\}$." },
        { label: "Now compute $A^c$ and $B^c$", body: "$A^c = \\{5, 6, 7, 8, 9, 10\\}$, $B^c = \\{1, 2, 7, 8, 9, 10\\}$." },
        { label: "Intersect", body: "$A^c \\cap B^c = \\{7, 8, 9, 10\\}$. Same as above." }
      ],
      answer: "$(A \\cup B)^c = A^c \\cap B^c = \\{7, 8, 9, 10\\}$. De Morgan verified."
    }],

    "number-theory": [{
      title: "Example — Find $3^{50} \\bmod 7$ using Fermat's little theorem",
      prompt: "Compute $3^{50} \\bmod 7$.",
      explain: "Brute-force computation of $3^{50}$ gives a 24-digit number — impractical. Fermat's little theorem says $a^{p-1} \\equiv 1 \\pmod p$ for prime $p$ not dividing $a$. Here $p = 7$, so $3^6 \\equiv 1 \\pmod 7$. Divide 50 by 6 to reduce.",
      steps: [
        { label: "Apply Fermat", body: "$3^6 \\equiv 1 \\pmod 7$ since 7 is prime." },
        { label: "Divide 50 by 6", body: "$50 = 6 \\times 8 + 2$, so $50 = 48 + 2$." },
        { label: "Reduce", body: "$3^{50} = 3^{48} \\cdot 3^2 = (3^6)^8 \\cdot 3^2 \\equiv 1^8 \\cdot 9 = 9 \\equiv 2 \\pmod 7$." }
      ],
      answer: "$3^{50} \\equiv 2 \\pmod 7$. Fermat's little theorem reduces enormous exponents to small ones."
    }],

    "combinatorics": [{
      title: "Example — Path counting on a grid",
      prompt: "How many shortest paths are there from $(0,0)$ to $(5,3)$ on an integer grid, moving only right or up?",
      explain: "A shortest path takes exactly 5 right-moves and 3 up-moves — 8 moves total. The question is in what order. That's a multiset arrangement: $\\binom{8}{3}$ ways to pick which moves are 'up.'",
      steps: [
        { label: "Total moves", body: "Each path = sequence of 5 R's and 3 U's. Total length 8." },
        { label: "Choose positions of U's", body: "From 8 slots, choose 3 to be U: $\\binom{8}{3}$. (The other 5 are automatically R.)" },
        { label: "Compute", body: "$\\binom{8}{3} = 8!/(3! \\cdot 5!) = (8 \\cdot 7 \\cdot 6)/(3 \\cdot 2 \\cdot 1) = 56$." }
      ],
      answer: "56 paths. This 'lattice path' technique generalizes: paths from $(0,0)$ to $(m,n)$ count $\\binom{m+n}{n}$."
    }],

    "systems-of-equations": [{
      title: "Example — 3×3 system by substitution",
      prompt: "Solve $\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases}$",
      explain: "Three equations, three unknowns. Strategy: use eqn 1 to isolate one variable, substitute into the other two, get a 2×2 system. Repeat. Gaussian elimination automates this.",
      steps: [
        { label: "Eliminate z from eqns (1) and (3)", body: "Add eqn (1) + eqn (3): $(x + y + z) + (x + 2y - z) = 6 + 2 \\Rightarrow 2x + 3y = 8$." },
        { label: "Eliminate z from eqns (1) and (2)", body: "Subtract eqn (1) from eqn (2): $(2x - y + z) - (x + y + z) = 3 - 6 \\Rightarrow x - 2y = -3$." },
        { label: "Solve 2×2", body: "From $x - 2y = -3$: $x = 2y - 3$. Substitute into $2x + 3y = 8$: $2(2y-3) + 3y = 8 \\Rightarrow 7y = 14 \\Rightarrow y = 2$, $x = 1$." },
        { label: "Back to z", body: "From eqn (1): $1 + 2 + z = 6 \\Rightarrow z = 3$." }
      ],
      answer: "$x = 1, y = 2, z = 3$. Check all three: $1+2+3=6$ ✓, $2-2+3=3$ ✓, $1+4-3=2$ ✓."
    }],

    "quadratic-equations": [{
      title: "Example — Complete the square explicitly",
      prompt: "Rewrite $x^2 - 6x + 11$ in completed-square form. Use this to find its minimum.",
      explain: "Completing the square turns any quadratic into $(x - h)^2 + k$ form. Reading off: vertex at $(h, k)$. Min/max is $k$. This is the universal way to extract the vertex without calculus.",
      steps: [
        { label: "Identify half of the linear coefficient", body: "Coefficient of $x$ is $-6$; half is $-3$." },
        { label: "Add and subtract its square", body: "$x^2 - 6x + 11 = (x^2 - 6x + 9) - 9 + 11 = (x - 3)^2 + 2$." },
        { label: "Read off vertex", body: "Form $(x - h)^2 + k$ with $h = 3, k = 2$. Vertex at $(3, 2)$. Since coefficient of $(x-h)^2$ is positive, parabola opens up — vertex is a minimum." }
      ],
      answer: "Min value is $2$, achieved at $x = 3$. Completing the square is the source of the quadratic formula and many physics derivations (e.g., harmonic oscillator energy minimization)."
    }],

    "polynomials-rational": [{
      title: "Example — Polynomial long division",
      prompt: "Divide $2x^3 - 5x^2 + x + 3$ by $x - 2$. Find quotient and remainder.",
      explain: "Polynomial long division is the mechanical procedure for factoring polynomials. Synthetic division is a shortcut, but learn the long version first — it makes the logic clear.",
      steps: [
        { label: "First step", body: "$2x^3 \\div x = 2x^2$. Multiply: $2x^2 (x - 2) = 2x^3 - 4x^2$. Subtract from dividend: $(-5x^2) - (-4x^2) = -x^2$. Bring down the $+x$: working remainder $-x^2 + x$." },
        { label: "Second step", body: "$-x^2 \\div x = -x$. Multiply: $-x(x - 2) = -x^2 + 2x$. Subtract: $(x) - (2x) = -x$. Bring down $+3$: working remainder $-x + 3$." },
        { label: "Third step", body: "$-x \\div x = -1$. Multiply: $-1(x - 2) = -x + 2$. Subtract: $(3) - (2) = 1$. Done — remainder is just a constant." }
      ],
      answer: "Quotient $2x^2 - x - 1$, remainder $1$. So $2x^3 - 5x^2 + x + 3 = (x - 2)(2x^2 - x - 1) + 1$."
    }],

    "functions-graphs": [{
      title: "Example — Transformation of a graph",
      prompt: "Starting from $y = \\sqrt x$, describe the transformations that produce $y = 2\\sqrt{x - 3} + 1$.",
      explain: "Function transformations follow predictable rules: $f(x - h)$ shifts right by $h$; $A f(x)$ stretches vertically by $A$; $f(x) + k$ shifts up by $k$. The order MATTERS — inside-out: shifts inside the function happen first.",
      steps: [
        { label: "Inside the square root: $x - 3$", body: "Replacing $x$ with $x - 3$ shifts the graph 3 units RIGHT. (Counter-intuitive: subtract → shift right.)" },
        { label: "Multiply by 2: $2 \\sqrt{\\ldots}$", body: "Stretches the y-values by a factor of 2. Graph gets taller." },
        { label: "Add 1 outside: $\\ldots + 1$", body: "Shifts the entire graph UP by 1 unit." }
      ],
      answer: "Right 3, vertical stretch ×2, up 1. New domain $x \\geq 3$; new range $y \\geq 1$. (Original was $x \\geq 0, y \\geq 0$.)"
    }],

    "logarithms": [{
      title: "Example — Solve a logarithmic equation",
      prompt: "Solve $\\log_2(x) + \\log_2(x - 2) = 3$.",
      explain: "Use the product rule $\\log a + \\log b = \\log(ab)$ to combine. Then convert log form to exponential form to solve. Always check: log arguments must be positive.",
      steps: [
        { label: "Combine with product rule", body: "$\\log_2[x(x - 2)] = 3$." },
        { label: "Convert to exponential", body: "$x(x-2) = 2^3 = 8$, so $x^2 - 2x - 8 = 0$." },
        { label: "Solve quadratic", body: "Factor: $(x-4)(x+2) = 0$. Roots: $x = 4$ or $x = -2$." },
        { label: "Check domain", body: "Original logs need $x > 0$ and $x - 2 > 0$, so $x > 2$. Only $x = 4$ qualifies; $x = -2$ is extraneous." }
      ],
      answer: "$x = 4$. Always discard solutions that make log arguments non-positive."
    }],

    "sequences-series": [{
      title: "Example — Sum of an arithmetic-geometric series",
      prompt: "Find $\\sum_{n=1}^\\infty n / 2^n$.",
      explain: "Differentiation trick on a geometric series. Start with $\\sum x^n = 1/(1-x)$, differentiate, multiply by $x$. A classic — appears in probability (expected values) and physics (partition functions).",
      steps: [
        { label: "Start from geometric", body: "$\\sum_{n=0}^\\infty x^n = 1/(1-x)$ for $|x| < 1$." },
        { label: "Differentiate", body: "$\\sum_{n=1}^\\infty n x^{n-1} = 1/(1-x)^2$." },
        { label: "Multiply by x", body: "$\\sum_{n=1}^\\infty n x^n = x/(1-x)^2$." },
        { label: "Plug in $x = 1/2$", body: "$\\sum n / 2^n = (1/2)/(1/2)^2 = (1/2)/(1/4) = 2$." }
      ],
      answer: "$\\sum_{n=1}^\\infty n/2^n = 2$. The 'differentiate the geometric series' trick generalizes — multiply by $x$ and differentiate $k$ times to get $\\sum n^k x^n$ type series."
    }],

    "trigonometry": [{
      title: "Example — Solve using sum-to-product",
      prompt: "Find all solutions in $[0, 2\\pi)$ of $\\sin 3x + \\sin x = 0$.",
      explain: "Sum-to-product identity: $\\sin A + \\sin B = 2 \\sin\\frac{A+B}{2} \\cos\\frac{A-B}{2}$. Converts a sum into a product, which is easier to solve (product = 0 means one factor is 0).",
      steps: [
        { label: "Apply identity", body: "$\\sin 3x + \\sin x = 2 \\sin\\frac{3x + x}{2} \\cos\\frac{3x - x}{2} = 2 \\sin(2x) \\cos(x)$." },
        { label: "Set to zero", body: "$2 \\sin(2x)\\cos(x) = 0 \\Rightarrow \\sin(2x) = 0$ or $\\cos(x) = 0$." },
        { label: "Solve each", body: "$\\sin(2x) = 0 \\Rightarrow 2x = 0, \\pi, 2\\pi, 3\\pi \\Rightarrow x = 0, \\pi/2, \\pi, 3\\pi/2$. $\\cos(x) = 0 \\Rightarrow x = \\pi/2, 3\\pi/2$." },
        { label: "Combine and deduplicate", body: "Union: $\\{0, \\pi/2, \\pi, 3\\pi/2\\}$." }
      ],
      answer: "$x \\in \\{0, \\pi/2, \\pi, 3\\pi/2\\}$. Sum-to-product is the canonical move when you see two sines or two cosines added."
    }],

    "probability": [{
      title: "Example — Bayes' theorem (false positives)",
      prompt: "A disease affects 1% of a population. A test has 99% sensitivity (catches sick) and 95% specificity (correctly clears healthy). If you test positive, what's the probability you're actually sick?",
      explain: "Famously counterintuitive. The answer is much lower than 99% because the disease is rare. Bayes' theorem makes this precise: posterior depends on the PRIOR, which is the 1% base rate.",
      steps: [
        { label: "Set up", body: "$P(D) = 0.01$ (sick). $P(+|D) = 0.99$. $P(+|D^c) = 1 - 0.95 = 0.05$ (false positive rate)." },
        { label: "Total probability of testing positive", body: "$P(+) = P(+|D) P(D) + P(+|D^c) P(D^c) = 0.99 \\cdot 0.01 + 0.05 \\cdot 0.99 = 0.0099 + 0.0495 = 0.0594$." },
        { label: "Bayes' theorem", body: "$P(D|+) = P(+|D) P(D) / P(+) = 0.0099 / 0.0594 \\approx 0.167$." }
      ],
      answer: "About 17%. False positives swamp the true positives because healthy people vastly outnumber sick ones, even at 5% false-positive rate."
    }],

    "statistics": [{
      title: "Example — Two-sample t-test",
      prompt: "Group A: $\\bar x_A = 75$, $s_A = 10$, $n_A = 30$. Group B: $\\bar x_B = 70$, $s_B = 12$, $n_B = 30$. Test whether means differ ($\\alpha = 0.05$).",
      explain: "When comparing two sample means with unknown variances, use the two-sample t-statistic. Compute, compare to critical value. The denominator combines both samples' uncertainty.",
      steps: [
        { label: "Pooled standard error", body: "Assuming equal variances: $s_p^2 = ((n_A - 1)s_A^2 + (n_B - 1)s_B^2)/(n_A + n_B - 2) = (29 \\cdot 100 + 29 \\cdot 144)/58 = 122$. $s_p = 11.05$. SE $= s_p \\sqrt{1/n_A + 1/n_B} = 11.05 \\sqrt{2/30} = 2.85$." },
        { label: "t-statistic", body: "$t = (\\bar x_A - \\bar x_B)/\\text{SE} = 5/2.85 \\approx 1.75$." },
        { label: "Critical value and decision", body: "df = 58, two-tailed $\\alpha = 0.05$ critical value $\\approx 2.00$. $|t| = 1.75 < 2.00$. Fail to reject $H_0$." }
      ],
      answer: "Fail to reject — no significant difference at 5%. The 5-point gap looks meaningful but with this much variance and these sample sizes, it could easily be sampling noise."
    }],

    "complex-numbers": [{
      title: "Example — De Moivre's theorem to find roots",
      prompt: "Find all cube roots of $8i$.",
      explain: "To find $n$-th roots of a complex number, use polar form. Express in $r e^{i\\theta}$, take $n$-th root of $r$, divide angle by $n$ (and add multiples of $2\\pi/n$ for the other roots).",
      steps: [
        { label: "Polar form", body: "$8i = 8 e^{i\\pi/2}$. Magnitude 8, angle $\\pi/2$." },
        { label: "Cube root", body: "Magnitudes: $\\sqrt[3]{8} = 2$. Angles: $\\pi/6$, $\\pi/6 + 2\\pi/3$, $\\pi/6 + 4\\pi/3$ — three roots equally spaced around the circle of radius 2." },
        { label: "Convert back", body: "$z_1 = 2(\\cos\\pi/6 + i\\sin\\pi/6) = \\sqrt 3 + i$. $z_2 = 2(\\cos 5\\pi/6 + i\\sin 5\\pi/6) = -\\sqrt 3 + i$. $z_3 = 2(\\cos 3\\pi/2 + i\\sin 3\\pi/2) = -2i$." }
      ],
      answer: "Roots: $\\sqrt 3 + i$, $-\\sqrt 3 + i$, $-2i$. They sit at the vertices of an equilateral triangle on the circle $|z| = 2$ — that's a general fact about $n$-th roots."
    }],

    "vector-algebra": [{
      title: "Example — Decompose into parallel + perpendicular",
      prompt: "Decompose $\\mathbf v = (3, 4, 0)$ into components parallel and perpendicular to $\\mathbf u = (1, 0, 0)$.",
      explain: "Every vector $\\mathbf v$ decomposes uniquely as 'along $\\mathbf u$' plus 'perpendicular to $\\mathbf u$.' The parallel piece is the projection; subtract to get the perpendicular piece. Used constantly in physics (component along force, etc.).",
      steps: [
        { label: "Projection formula", body: "$\\mathbf v_\\parallel = (\\mathbf v \\cdot \\hat u) \\hat u$ where $\\hat u$ is the unit vector along $\\mathbf u$. Here $|\\mathbf u| = 1$ already, so $\\hat u = \\mathbf u$." },
        { label: "Compute dot product", body: "$\\mathbf v \\cdot \\mathbf u = 3 \\cdot 1 + 4 \\cdot 0 + 0 \\cdot 0 = 3$." },
        { label: "Parallel component", body: "$\\mathbf v_\\parallel = 3 \\cdot (1, 0, 0) = (3, 0, 0)$." },
        { label: "Perpendicular component", body: "$\\mathbf v_\\perp = \\mathbf v - \\mathbf v_\\parallel = (3, 4, 0) - (3, 0, 0) = (0, 4, 0)$." }
      ],
      answer: "$\\mathbf v = (3, 0, 0) + (0, 4, 0)$. Check: $\\mathbf v_\\perp \\cdot \\mathbf u = 0$ ✓."
    }],

    "linear-algebra": [{
      title: "Example — Diagonalize a 2×2 matrix",
      prompt: "Diagonalize $A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$.",
      explain: "Diagonalization: find $P$ and $D$ with $A = PDP^{-1}$. $D$ is diagonal of eigenvalues; columns of $P$ are eigenvectors. Once done, $A^n = PD^nP^{-1}$ — enormous computational savings.",
      steps: [
        { label: "Characteristic polynomial", body: "$\\det(A - \\lambda I) = (4-\\lambda)(3-\\lambda) - 2 = \\lambda^2 - 7\\lambda + 10 = (\\lambda - 2)(\\lambda - 5)$. Eigenvalues: $\\lambda_1 = 2, \\lambda_2 = 5$." },
        { label: "Eigenvector for $\\lambda = 2$", body: "$(A - 2I)\\mathbf v = 0$: $\\begin{pmatrix}2 & 1\\\\2 & 1\\end{pmatrix} \\mathbf v = 0$. Take $\\mathbf v_1 = (1, -2)$." },
        { label: "Eigenvector for $\\lambda = 5$", body: "$\\begin{pmatrix}-1 & 1\\\\2 & -2\\end{pmatrix} \\mathbf v = 0$. Take $\\mathbf v_2 = (1, 1)$." },
        { label: "Assemble", body: "$P = \\begin{pmatrix}1 & 1\\\\-2 & 1\\end{pmatrix}$, $D = \\begin{pmatrix}2 & 0\\\\0 & 5\\end{pmatrix}$." }
      ],
      answer: "$A = PDP^{-1}$ with $P, D$ as above. Verify: $AP$ should equal $PD$. ✓"
    }],

    "limits": [{
      title: "Example — Limit via algebraic manipulation",
      prompt: "Find $\\lim_{x \\to 4} \\dfrac{\\sqrt x - 2}{x - 4}$.",
      explain: "Direct substitution gives $0/0$. Trick: multiply by conjugate to rationalize the numerator. The $\\sqrt x - 2$ in the numerator cancels with the $(x-4)$ in the denominator.",
      steps: [
        { label: "Multiply by conjugate", body: "$\\dfrac{\\sqrt x - 2}{x - 4} \\cdot \\dfrac{\\sqrt x + 2}{\\sqrt x + 2} = \\dfrac{x - 4}{(x - 4)(\\sqrt x + 2)}$." },
        { label: "Cancel", body: "$= \\dfrac{1}{\\sqrt x + 2}$ (for $x \\neq 4$, which is fine for limits)." },
        { label: "Now substitute", body: "$\\lim_{x \\to 4} \\dfrac{1}{\\sqrt x + 2} = \\dfrac{1}{2 + 2} = \\dfrac{1}{4}$." }
      ],
      answer: "$1/4$. Always look for algebraic simplification BEFORE reaching for L'Hôpital."
    }],

    "derivatives": [{
      title: "Example — Optimization: closest point on parabola",
      prompt: "Find the point on $y = x^2$ closest to $(0, 1)$.",
      explain: "Minimize distance to find the closest point. Trick: minimize the SQUARE of distance (avoids square roots, gives same critical points). Set derivative to zero, solve.",
      steps: [
        { label: "Distance squared", body: "$D^2 = x^2 + (y - 1)^2 = x^2 + (x^2 - 1)^2$ (using $y = x^2$)." },
        { label: "Expand and differentiate", body: "$D^2 = x^2 + x^4 - 2x^2 + 1 = x^4 - x^2 + 1$. $d(D^2)/dx = 4x^3 - 2x = 2x(2x^2 - 1) = 0$." },
        { label: "Critical points", body: "$x = 0$ or $x = \\pm 1/\\sqrt 2$. At $x = 0$: $D^2 = 1$. At $x = 1/\\sqrt 2$: $D^2 = 1/4 - 1/2 + 1 = 3/4 < 1$. Minimum is at $x = \\pm 1/\\sqrt 2$." }
      ],
      answer: "Closest points: $(\\pm 1/\\sqrt 2, 1/2)$, distance $\\sqrt 3/2 \\approx 0.866$. Origin $(0, 0)$ is a LOCAL max — by symmetry not the min."
    }],

    "integrals": [{
      title: "Example — Trigonometric substitution",
      prompt: "Evaluate $\\int \\sqrt{1 - x^2}\\,dx$.",
      explain: "When you see $\\sqrt{a^2 - x^2}$, substitute $x = a \\sin\\theta$. The square root simplifies cleanly because $1 - \\sin^2\\theta = \\cos^2\\theta$. A staple technique.",
      steps: [
        { label: "Substitute", body: "Let $x = \\sin\\theta$. Then $dx = \\cos\\theta\\,d\\theta$, and $\\sqrt{1 - x^2} = \\sqrt{1 - \\sin^2\\theta} = |\\cos\\theta| = \\cos\\theta$ (choosing $\\theta \\in [-\\pi/2, \\pi/2]$)." },
        { label: "Rewrite integral", body: "$\\int \\cos\\theta \\cdot \\cos\\theta\\,d\\theta = \\int \\cos^2\\theta\\,d\\theta = \\int \\dfrac{1 + \\cos 2\\theta}{2}d\\theta = \\dfrac{\\theta}{2} + \\dfrac{\\sin 2\\theta}{4} + C$." },
        { label: "Back-substitute", body: "$\\theta = \\arcsin x$. $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2x\\sqrt{1-x^2}$. Final: $\\dfrac{\\arcsin x}{2} + \\dfrac{x\\sqrt{1-x^2}}{2} + C$." }
      ],
      answer: "$\\dfrac{1}{2}(\\arcsin x + x\\sqrt{1-x^2}) + C$. Geometrically: $\\int_0^1 \\sqrt{1 - x^2}\\,dx = \\pi/4$ — area of a quarter unit circle."
    }],

    "multivariable-calculus": [{
      title: "Example — Lagrange multipliers",
      prompt: "Maximize $f(x, y) = xy$ subject to $x + y = 10$.",
      explain: "Lagrange multipliers handle constrained optimization. Idea: at the max, the gradient of $f$ is parallel to the gradient of the constraint. Introduce a multiplier $\\lambda$ to relate them.",
      steps: [
        { label: "Setup", body: "Want $\\nabla f = \\lambda \\nabla g$ where $g = x + y - 10 = 0$." },
        { label: "Gradient equations", body: "$\\nabla f = (y, x)$, $\\nabla g = (1, 1)$. So $y = \\lambda$, $x = \\lambda$ → $x = y$." },
        { label: "Apply constraint", body: "$x + y = 10$ and $x = y$ → $2x = 10$ → $x = y = 5$." }
      ],
      answer: "Max value $f(5,5) = 25$. Lagrange's method is the systematic way to handle ANY constrained optimization — generalizes to multiple constraints by adding more $\\lambda$'s."
    }],

    "vector-calculus": [{
      title: "Example — Green's theorem to compute area",
      prompt: "Use Green's theorem to find the area enclosed by the ellipse $x = a\\cos t$, $y = b\\sin t$, $t \\in [0, 2\\pi]$.",
      explain: "Green's theorem: $\\oint_C(P\\,dx + Q\\,dy) = \\iint_D (\\partial Q/\\partial x - \\partial P/\\partial y)\\,dA$. Pick $P = -y/2$, $Q = x/2$, the integrand becomes 1, and the line integral gives the area directly.",
      steps: [
        { label: "Area formula via Green", body: "Take $P = -y/2$, $Q = x/2$. Then $\\partial Q/\\partial x - \\partial P/\\partial y = 1/2 - (-1/2) = 1$. So area $= \\oint_C(-y/2\\,dx + x/2\\,dy) = \\frac{1}{2}\\oint_C(x\\,dy - y\\,dx)$." },
        { label: "Plug in parametrization", body: "$dx = -a\\sin t\\,dt$, $dy = b\\cos t\\,dt$. $x\\,dy - y\\,dx = ab\\cos^2 t + ab\\sin^2 t = ab$." },
        { label: "Integrate", body: "Area $= \\frac{1}{2}\\int_0^{2\\pi} ab\\,dt = ab\\pi$." }
      ],
      answer: "Area $= \\pi a b$. Reduces to $\\pi r^2$ when $a = b = r$ — the circle's area. The Green's-theorem method computes 2D areas from line integrals."
    }],

    "ode": [{
      title: "Example — Linear ODE with integrating factor",
      prompt: "Solve $\\dfrac{dy}{dx} + 2y = e^{3x}$.",
      explain: "Linear first-order ODE $y' + P(x)y = Q(x)$. Multiply by integrating factor $\\mu = e^{\\int P\\,dx}$. The left side becomes a perfect derivative, and you can integrate directly.",
      steps: [
        { label: "Integrating factor", body: "$P(x) = 2$, so $\\mu = e^{\\int 2\\,dx} = e^{2x}$." },
        { label: "Multiply through", body: "$e^{2x} y' + 2e^{2x} y = e^{2x} \\cdot e^{3x} = e^{5x}$. Left side is $(e^{2x} y)'$." },
        { label: "Integrate both sides", body: "$e^{2x} y = \\int e^{5x}\\,dx = e^{5x}/5 + C$." },
        { label: "Solve for y", body: "$y = e^{3x}/5 + C e^{-2x}$." }
      ],
      answer: "$y(x) = e^{3x}/5 + C e^{-2x}$. First term is a particular solution; second is the general solution of the homogeneous equation."
    }],

    "pde": [{
      title: "Example — Solve the heat equation via separation",
      prompt: "Solve $u_t = u_{xx}$ on $0 \\leq x \\leq \\pi$ with $u(0, t) = u(\\pi, t) = 0$ and $u(x, 0) = \\sin(2x)$.",
      explain: "Separation of variables: guess $u(x, t) = X(x)T(t)$, plug in, separate. Boundary conditions give a sine series solution. The initial condition picks out which modes are present.",
      steps: [
        { label: "Separate", body: "$XT' = X'' T$ → $T'/T = X''/X = -\\lambda$ (constant). So $X'' = -\\lambda X$, $T' = -\\lambda T$." },
        { label: "Solve X", body: "With $X(0) = X(\\pi) = 0$: solutions are $X_n = \\sin(nx)$, $\\lambda_n = n^2$." },
        { label: "Solve T", body: "$T_n(t) = e^{-n^2 t}$." },
        { label: "Match initial condition", body: "General solution $u(x,t) = \\sum b_n \\sin(nx) e^{-n^2 t}$. Initial: $\\sin(2x) = \\sum b_n \\sin(nx)$ → only $b_2 = 1$." }
      ],
      answer: "$u(x, t) = \\sin(2x) e^{-4t}$. The mode decays at rate $\\lambda = n^2 = 4$ — higher modes decay faster, which is the smoothing nature of the heat equation."
    }],

    "real-analysis": [{
      title: "Example — Prove $\\sum 1/n^2$ converges",
      prompt: "Prove by comparison test that $\\sum_{n=1}^\\infty 1/n^2$ converges.",
      explain: "Comparison test: if $0 \\leq a_n \\leq b_n$ and $\\sum b_n$ converges, then $\\sum a_n$ converges. Compare $1/n^2$ with $1/(n(n-1)) = 1/(n-1) - 1/n$ (telescoping).",
      steps: [
        { label: "Comparison", body: "For $n \\geq 2$: $1/n^2 \\leq 1/(n(n-1)) = 1/(n-1) - 1/n$." },
        { label: "Sum of telescoping", body: "$\\sum_{n=2}^N [1/(n-1) - 1/n] = 1 - 1/N \\to 1$ as $N \\to \\infty$. Converges." },
        { label: "Conclude", body: "$\\sum 1/n^2 \\leq 1 + 1 = 2$ (the leading $n=1$ term is 1; the tail is bounded by 1). Convergent and bounded." }
      ],
      answer: "Converges. Actual value $\\pi^2/6 \\approx 1.645$ — Euler's famous result (Basel problem). Comparison test gives convergence; computing the value requires Fourier analysis."
    }],

    "complex-analysis": [{
      title: "Example — Residue calculation",
      prompt: "Find the residue of $f(z) = \\dfrac{z + 1}{z^2 (z - 2)}$ at $z = 0$.",
      explain: "Residue at a pole of order $k$: $\\text{Res}(f, z_0) = \\dfrac{1}{(k-1)!} \\lim_{z \\to z_0} \\dfrac{d^{k-1}}{dz^{k-1}} [(z - z_0)^k f(z)]$. Here $z = 0$ is a pole of order 2.",
      steps: [
        { label: "Identify pole order", body: "$z = 0$ is double pole (factor $z^2$ in denominator)." },
        { label: "Apply formula", body: "$\\text{Res}(f, 0) = \\lim_{z \\to 0} \\dfrac{d}{dz}\\left[z^2 \\cdot \\dfrac{z+1}{z^2(z-2)}\\right] = \\lim_{z \\to 0} \\dfrac{d}{dz}\\dfrac{z+1}{z-2}$." },
        { label: "Differentiate (quotient rule)", body: "$\\dfrac{d}{dz}\\dfrac{z+1}{z-2} = \\dfrac{(z-2) - (z+1)}{(z-2)^2} = \\dfrac{-3}{(z-2)^2}$. At $z = 0$: $-3/4$." }
      ],
      answer: "$\\text{Res}(f, 0) = -3/4$. Residues are the engine of contour integration — every real definite integral via complex methods reduces to summing residues."
    }],

    "fourier-analysis": [{
      title: "Example — Fourier series of square wave",
      prompt: "Find the Fourier series of $f(x) = 1$ for $0 < x < \\pi$, $f(x) = -1$ for $-\\pi < x < 0$.",
      explain: "Odd function on a symmetric interval, so only sine terms. Compute the Fourier coefficients $b_n$ by integration. Result: a series of odd harmonics that approximates the discontinuous square wave.",
      steps: [
        { label: "Identify symmetry", body: "$f$ is odd, period $2\\pi$. So $a_0 = a_n = 0$; only $b_n$ terms." },
        { label: "Compute $b_n$", body: "$b_n = \\dfrac{2}{\\pi}\\int_0^\\pi \\sin(nx)\\,dx = \\dfrac{2}{\\pi}\\left[-\\dfrac{\\cos nx}{n}\\right]_0^\\pi = \\dfrac{2}{n\\pi}(1 - \\cos n\\pi)$." },
        { label: "Simplify", body: "$\\cos n\\pi = (-1)^n$. So $b_n = 2(1 - (-1)^n)/(n\\pi)$. Zero for even $n$; $4/(n\\pi)$ for odd $n$." }
      ],
      answer: "$f(x) = \\dfrac{4}{\\pi}\\sum_{k=0}^\\infty \\dfrac{\\sin((2k+1)x)}{2k+1}$. Famous result. At the discontinuities, the series converges to the midpoint (0) — Gibbs phenomenon hovers nearby."
    }],

    "abstract-algebra": [{
      title: "Example — Compute the order of a group element",
      prompt: "In $\\mathbb Z/12\\mathbb Z$, find the order of the element $4$.",
      explain: "Order of $g$ = smallest positive $n$ with $g^n = e$ (identity). In additive group $\\mathbb Z/12$, the operation is addition mod 12, and identity is 0. So we want smallest $n$ with $4n \\equiv 0 \\pmod{12}$.",
      steps: [
        { label: "Compute multiples", body: "$4 \\cdot 1 = 4$, $4 \\cdot 2 = 8$, $4 \\cdot 3 = 12 \\equiv 0 \\pmod{12}$." },
        { label: "Read off", body: "Smallest $n$ with $4n \\equiv 0$ is $n = 3$." }
      ],
      answer: "Order of 4 is 3. General fact: order of $k$ in $\\mathbb Z/n$ is $n/\\gcd(n, k)$. Here $12/\\gcd(12, 4) = 12/4 = 3$ ✓."
    }],

    "topology": [{
      title: "Example — Prove a function is continuous (ε-δ in metric form)",
      prompt: "Show that $f: \\mathbb R \\to \\mathbb R$, $f(x) = x^2$, is continuous at $x = 2$ using the metric definition.",
      explain: "Metric continuity: for every $\\epsilon > 0$, there exists $\\delta > 0$ such that $|x - 2| < \\delta$ implies $|f(x) - f(2)| < \\epsilon$. Find an explicit $\\delta$ in terms of $\\epsilon$.",
      steps: [
        { label: "Bound the difference", body: "$|x^2 - 4| = |x - 2||x + 2|$. If $|x - 2| < 1$, then $1 < x < 3$, so $|x + 2| < 5$." },
        { label: "Pick $\\delta$", body: "Choose $\\delta = \\min(1, \\epsilon/5)$. Then $|x - 2| < \\delta$ gives $|x^2 - 4| < 5 \\cdot (\\epsilon/5) = \\epsilon$." }
      ],
      answer: "Choose $\\delta = \\min(1, \\epsilon/5)$ — always works. The $\\min$ with 1 is the standard trick to bound the 'other factor' $|x+2|$."
    }],

    "numerical-methods": [{
      title: "Example — Newton's method for $\\sqrt{10}$",
      prompt: "Use Newton's method to estimate $\\sqrt{10}$ starting from $x_0 = 3$.",
      explain: "Newton's method for $f(x) = 0$: $x_{n+1} = x_n - f(x_n)/f'(x_n)$. For $\\sqrt a$, take $f(x) = x^2 - a$, giving $x_{n+1} = (x_n + a/x_n)/2$ — the famous Babylonian method, quadratically convergent.",
      steps: [
        { label: "Setup", body: "$f(x) = x^2 - 10$, $f'(x) = 2x$. Iteration: $x_{n+1} = x_n - (x_n^2 - 10)/(2x_n) = (x_n + 10/x_n)/2$." },
        { label: "Iterate", body: "$x_1 = (3 + 10/3)/2 = 19/6 \\approx 3.1667$. $x_2 = (3.1667 + 10/3.1667)/2 \\approx 3.16228$." },
        { label: "Check", body: "Actual $\\sqrt{10} = 3.16228...$ Converged to 5 digits in 2 iterations." }
      ],
      answer: "$\\sqrt{10} \\approx 3.16228$. Each Newton step roughly DOUBLES the number of correct digits — that's quadratic convergence."
    }],

    "coordinate-geometry": [{
      title: "Example — Equation of a line by two-point form",
      prompt: "Find the equation of the line through $(2, -1)$ and $(5, 8)$.",
      explain: "Two-point form: slope $m = (y_2 - y_1)/(x_2 - x_1)$, then point-slope $y - y_1 = m(x - x_1)$. Mechanical — but always express the final answer in a standard form.",
      steps: [
        { label: "Compute slope", body: "$m = (8 - (-1))/(5 - 2) = 9/3 = 3$." },
        { label: "Point-slope", body: "Using $(2, -1)$: $y - (-1) = 3(x - 2)$, so $y + 1 = 3x - 6$." },
        { label: "Rearrange", body: "$y = 3x - 7$, or $3x - y - 7 = 0$." }
      ],
      answer: "$y = 3x - 7$. Verify both points: $(2, -1)$: $3(2) - 7 = -1$ ✓. $(5, 8)$: $3(5) - 7 = 8$ ✓."
    }],

    "solid-geometry": [{
      title: "Example — Volume of a tetrahedron",
      prompt: "Find the volume of a tetrahedron with vertices $(0,0,0)$, $(1,0,0)$, $(0,1,0)$, $(0,0,1)$.",
      explain: "Volume of a tetrahedron from a vertex $O$ and three edge vectors $\\mathbf a, \\mathbf b, \\mathbf c$: $V = \\frac{1}{6}|\\mathbf a \\cdot (\\mathbf b \\times \\mathbf c)|$. The scalar triple product = signed volume of the parallelepiped.",
      steps: [
        { label: "Edge vectors from origin", body: "$\\mathbf a = (1,0,0)$, $\\mathbf b = (0,1,0)$, $\\mathbf c = (0,0,1)$." },
        { label: "Triple product", body: "$\\mathbf b \\times \\mathbf c = (1, 0, 0)$. $\\mathbf a \\cdot (\\mathbf b \\times \\mathbf c) = 1$." },
        { label: "Volume", body: "$V = |1|/6 = 1/6$." }
      ],
      answer: "$1/6$. Generally any tetrahedron volume = (1/3) × base area × height, but the scalar-triple form handles arbitrary orientation."
    }],

    "conic-sections": [{
      title: "Example — Ellipse from focal property",
      prompt: "An ellipse has foci at $(\\pm 3, 0)$ and the sum of distances from any point on the ellipse to the foci is 10. Find its equation.",
      explain: "Definition of ellipse: $2a$ = sum of distances to foci. So $a = 5$. With foci at $(\\pm c, 0)$: $c^2 = a^2 - b^2$, giving $b$.",
      steps: [
        { label: "Identify a and c", body: "$2a = 10 \\Rightarrow a = 5$. $c = 3$." },
        { label: "Find b", body: "$b^2 = a^2 - c^2 = 25 - 9 = 16 \\Rightarrow b = 4$." },
        { label: "Write equation", body: "$x^2/25 + y^2/16 = 1$." }
      ],
      answer: "$\\dfrac{x^2}{25} + \\dfrac{y^2}{16} = 1$. Eccentricity $e = c/a = 3/5$."
    }],

    "mathematical-logic": [{
      title: "Example — Direct proof: sum of two odd numbers is even",
      prompt: "Prove: if $m$ and $n$ are odd integers, then $m + n$ is even.",
      explain: "Direct proof: assume the hypothesis, manipulate algebraically, arrive at the conclusion. Define odd as $2k + 1$ for some integer; define even as $2k$.",
      steps: [
        { label: "Express oddness", body: "$m = 2a + 1$ and $n = 2b + 1$ for some integers $a, b$." },
        { label: "Add", body: "$m + n = (2a + 1) + (2b + 1) = 2a + 2b + 2 = 2(a + b + 1)$." },
        { label: "Conclude", body: "$m + n$ is 2 times an integer, hence even. QED." }
      ],
      answer: "Proven. Pattern of direct proof: unpack definitions → manipulate → repack into target form."
    }],

    "graph-theory": [{
      title: "Example — Trees: $n$ vertices, $n - 1$ edges",
      prompt: "Prove by induction that any tree on $n$ vertices has $n - 1$ edges.",
      explain: "A tree is a connected acyclic graph. Induction on $n$. Remove a leaf (degree-1 vertex; any tree on $\\geq 2$ vertices has one) — what remains is still a tree.",
      steps: [
        { label: "Base", body: "$n = 1$: a single vertex, 0 edges. $0 = 1 - 1$ ✓." },
        { label: "Inductive step", body: "Assume true for $n - 1$ vertices. Let $T$ be a tree on $n$ vertices. $T$ has a leaf $v$ (else every vertex has degree $\\geq 2$ and $T$ contains a cycle, contradiction). Remove $v$ and its single incident edge: get a tree on $n - 1$ vertices, with (by IH) $n - 2$ edges." },
        { label: "Count", body: "Add back $v$ and its edge: $n$ vertices, $n - 2 + 1 = n - 1$ edges." }
      ],
      answer: "Proven. This is one of the cleanest induction proofs in discrete math."
    }],

    "recurrence-generating": [{
      title: "Example — Solve linear recurrence with characteristic polynomial",
      prompt: "Solve $a_n = 5a_{n-1} - 6a_{n-2}$ with $a_0 = 1$, $a_1 = 4$.",
      explain: "Linear recurrences with constant coefficients have characteristic polynomial. Roots → general solution as combo of $r^n$ powers. Initial conditions pin down the coefficients.",
      steps: [
        { label: "Characteristic equation", body: "$r^2 = 5r - 6 \\Rightarrow r^2 - 5r + 6 = 0 \\Rightarrow (r-2)(r-3) = 0$. Roots: 2, 3." },
        { label: "General solution", body: "$a_n = A \\cdot 2^n + B \\cdot 3^n$." },
        { label: "Apply initial conditions", body: "$a_0 = A + B = 1$. $a_1 = 2A + 3B = 4$. Solve: $A = -1$, $B = 2$." }
      ],
      answer: "$a_n = -2^n + 2 \\cdot 3^n$. Check: $a_2 = -4 + 18 = 14$, and via recurrence $5 \\cdot 4 - 6 \\cdot 1 = 14$ ✓."
    }],

    "computability": [{
      title: "Example — Show that the halting problem is undecidable",
      prompt: "Outline the proof that no Turing machine $H$ can decide whether an arbitrary TM $M$ halts on input $w$.",
      explain: "Classic diagonal argument by Turing (1936). Assume $H$ exists. Build a machine $D$ that uses $H$ to do the opposite of what $H$ says it'll do. Run $D$ on itself — contradiction.",
      steps: [
        { label: "Assume H exists", body: "$H(M, w)$ returns YES if $M$ halts on $w$, else NO." },
        { label: "Build D", body: "$D$ takes a TM $M$ as input. It computes $H(M, M)$. If YES (i.e., $M$ halts on itself), $D$ loops forever. If NO, $D$ halts." },
        { label: "Run D on D", body: "Does $D$ halt on $D$? If $H(D, D) = $ YES, $D$ loops on $D$ — so $D$ does NOT halt on $D$, contradicting H. If $H(D, D) = $ NO, $D$ halts on $D$ — also contradicting H." }
      ],
      answer: "Contradiction in both cases — $H$ cannot exist. Halting problem is undecidable. The technique (diagonalization) underlies Gödel's incompleteness theorem and many other limitative results."
    }],

    "galois-theory": [{
      title: "Example — $\\mathbb Q(\\sqrt 2)$ over $\\mathbb Q$",
      prompt: "Determine the Galois group of $\\mathbb Q(\\sqrt 2)/\\mathbb Q$.",
      explain: "Galois group = group of field automorphisms fixing the base. For $\\mathbb Q(\\sqrt 2)/\\mathbb Q$, automorphisms permute the roots of the minimal polynomial $x^2 - 2$. Two roots ($\\pm\\sqrt 2$), so order 2.",
      steps: [
        { label: "Find automorphisms", body: "Each automorphism is determined by where it sends $\\sqrt 2$. Options: $\\sqrt 2 \\mapsto \\sqrt 2$ (identity) or $\\sqrt 2 \\mapsto -\\sqrt 2$." },
        { label: "Both are valid", body: "Both preserve $\\mathbb Q$ and send the minimal polynomial's roots to roots — both are field automorphisms." },
        { label: "Group structure", body: "Order 2, cyclic. Isomorphic to $\\mathbb Z/2\\mathbb Z$." }
      ],
      answer: "$\\text{Gal}(\\mathbb Q(\\sqrt 2)/\\mathbb Q) \\cong \\mathbb Z/2\\mathbb Z$. The nontrivial automorphism is 'flip the sign of $\\sqrt 2$.'"
    }],

    "lie-groups": [{
      title: "Example — Generators of $SO(2)$",
      prompt: "Find the Lie algebra of $SO(2)$ (rotations of the plane).",
      explain: "$SO(2)$ is a 1-dimensional Lie group. Its Lie algebra is the 1-d space of generators — the derivative of group elements at the identity.",
      steps: [
        { label: "Parametrize SO(2)", body: "$R(\\theta) = \\begin{pmatrix}\\cos\\theta & -\\sin\\theta\\\\\\sin\\theta & \\cos\\theta\\end{pmatrix}$." },
        { label: "Differentiate at identity", body: "$\\dfrac{dR}{d\\theta}\\Big|_{\\theta=0} = \\begin{pmatrix}0 & -1\\\\1 & 0\\end{pmatrix}$. Call this $J$." },
        { label: "Lie algebra", body: "$\\mathfrak{so}(2) = \\{\\theta J : \\theta \\in \\mathbb R\\}$ — antisymmetric 2×2 matrices. Exponentiating: $\\exp(\\theta J) = R(\\theta)$." }
      ],
      answer: "1-dimensional Lie algebra spanned by $J = \\begin{pmatrix}0 & -1\\\\1 & 0\\end{pmatrix}$. Every rotation comes from exponentiating a multiple of $J$."
    }],

    "differential-geometry": [{
      title: "Example — Curvature of a parabola",
      prompt: "Compute the curvature of $y = x^2$ at the origin.",
      explain: "Curvature for $y = f(x)$: $\\kappa = |f''|/(1 + f'^2)^{3/2}$. At the origin, derivatives are simple, and we get the curvature directly.",
      steps: [
        { label: "Derivatives", body: "$f'(x) = 2x$, $f''(x) = 2$. At $x = 0$: $f'(0) = 0$, $f''(0) = 2$." },
        { label: "Plug in", body: "$\\kappa = |2|/(1 + 0)^{3/2} = 2$." }
      ],
      answer: "$\\kappa(0) = 2$. Radius of curvature is $1/\\kappa = 1/2$. So at the origin, the parabola is approximated by a circle of radius $1/2$ — the 'osculating circle.'"
    }],

    "tensor-calculus": [{
      title: "Example — Raise an index using the metric",
      prompt: "Given metric $g_{ij}$ and covector $V_i = (1, 2)$ in 2D Cartesian, find $V^i$.",
      explain: "Raising an index: $V^i = g^{ij} V_j$. In Cartesian, the metric is diagonal $g_{ij} = \\delta_{ij}$, and its inverse is the same. So $V^i = V_i$ — but in curvilinear coordinates they differ.",
      steps: [
        { label: "Identify metric", body: "Cartesian: $g_{ij} = \\delta_{ij}$, so $g^{ij} = \\delta^{ij}$." },
        { label: "Sum over j", body: "$V^i = \\sum_j g^{ij} V_j = V_i$." }
      ],
      answer: "$V^i = (1, 2)$ — same components in Cartesian. In, say, polar coordinates, the metric is $g_{rr} = 1$, $g_{\\theta\\theta} = r^2$, and $V^\\theta = V_\\theta / r^2$ — they differ!"
    }],

    "algebraic-topology": [{
      title: "Example — Compute $\\pi_1(S^1)$",
      prompt: "Argue that the fundamental group of the circle is $\\mathbb Z$.",
      explain: "$\\pi_1(S^1)$ classifies loops in the circle up to continuous deformation. Each loop has a 'winding number' — how many times it goes around. Winding numbers add when loops concatenate.",
      steps: [
        { label: "Lift loops to the real line", body: "The real line $\\mathbb R$ covers $S^1$ via $t \\mapsto e^{2\\pi i t}$. Any loop in $S^1$ based at 1 lifts uniquely to a path in $\\mathbb R$ starting at 0." },
        { label: "Winding number", body: "The path's endpoint in $\\mathbb R$ is some integer $n$ — the winding number. Two loops are homotopic iff they have the same $n$." },
        { label: "Group structure", body: "Concatenation of loops corresponds to addition of winding numbers. So $\\pi_1(S^1) \\cong \\mathbb Z$." }
      ],
      answer: "$\\pi_1(S^1) = \\mathbb Z$. Fundamental result — the circle is the simplest space with nontrivial topology, and its fundamental group is the integers under addition."
    }],

    "riemannian-geometry": [{
      title: "Example — Length of a curve on the sphere",
      prompt: "Compute the length of the curve $\\gamma(t) = (\\sin t \\cos t, \\sin t \\sin t, \\cos t)$ on the unit sphere for $t \\in [0, \\pi/2]$. Wait — this isn't on the sphere. Let me parametrize a great circle from north pole to equator.",
      explain: "On unit sphere with $(\\theta, \\phi)$ (polar angle, azimuth): metric is $ds^2 = d\\theta^2 + \\sin^2\\theta\\,d\\phi^2$. Length = integral of $\\sqrt{ds^2/dt^2}$.",
      steps: [
        { label: "Parametrize a great circle", body: "Take $\\phi = 0$ constant, $\\theta$ from 0 to $\\pi/2$ (north pole to equator)." },
        { label: "Compute $ds$", body: "Since $\\phi$ is constant, $d\\phi = 0$. So $ds = d\\theta$." },
        { label: "Integrate", body: "Length $= \\int_0^{\\pi/2} d\\theta = \\pi/2$." }
      ],
      answer: "Length $\\pi/2$. Quarter of the great circle on a unit sphere — checks out: full great circle is $2\\pi$."
    }],

    "measure-theory": [{
      title: "Example — Lebesgue measure of the Cantor set",
      prompt: "Compute the Lebesgue measure of the standard middle-thirds Cantor set.",
      explain: "Each iteration removes the middle third of every remaining interval. Total length removed at step $n$ is $2^{n-1}/3^n$. Sum the geometric series. What remains has zero measure but is uncountable.",
      steps: [
        { label: "Length removed at each step", body: "Step 1: one interval of length $1/3$. Step 2: two intervals of length $1/9$ each, total $2/9$. Step $n$: $2^{n-1}$ intervals of length $1/3^n$, total $2^{n-1}/3^n$." },
        { label: "Sum total removed", body: "$\\sum_{n=1}^\\infty 2^{n-1}/3^n = (1/3) \\sum_{n=0}^\\infty (2/3)^n = (1/3)/(1 - 2/3) = 1$." },
        { label: "Remaining", body: "Original interval has measure 1; we removed total measure 1. Remaining set has measure 0." }
      ],
      answer: "$\\lambda(\\text{Cantor}) = 0$. Stunning: an uncountable set with the cardinality of $\\mathbb R$, yet 'invisible' to Lebesgue measure."
    }],

    "functional-analysis": [{
      title: "Example — Show $\\ell^2$ is complete",
      prompt: "Sketch why the Banach space $\\ell^2 = \\{(x_n) : \\sum |x_n|^2 < \\infty\\}$ is complete.",
      explain: "A Cauchy sequence in $\\ell^2$ is a sequence OF sequences. Componentwise Cauchy in $\\mathbb R$ → componentwise limit. Then verify the limit is in $\\ell^2$ and the convergence is in norm.",
      steps: [
        { label: "Cauchy gives componentwise Cauchy", body: "If $\\|x^{(m)} - x^{(n)}\\|_2 \\to 0$, then each component is Cauchy in $\\mathbb R$, hence converges to some $x_k$." },
        { label: "Limit in $\\ell^2$", body: "Fatou's lemma on finite truncations: $\\sum_{k \\leq N} |x_k|^2 \\leq \\liminf_m \\sum_{k \\leq N} |x_k^{(m)}|^2 \\leq M^2$, so the limit is square-summable." },
        { label: "Norm convergence", body: "Similar Fatou argument shows $\\|x^{(m)} - x\\|_2 \\to 0$." }
      ],
      answer: "$\\ell^2$ is a Hilbert space. The argument generalizes: $\\ell^p$ is complete for $1 \\leq p \\leq \\infty$."
    }],

    "calculus-of-variations": [{
      title: "Example — Geodesic on flat plane",
      prompt: "Show that geodesics in the plane (paths of minimum length) are straight lines, via Euler-Lagrange.",
      explain: "Length of curve $y(x)$ from $a$ to $b$: $L = \\int_a^b \\sqrt{1 + y'^2}\\,dx$. Euler-Lagrange gives the equation a minimizing curve must satisfy.",
      steps: [
        { label: "Lagrangian", body: "$L(y, y') = \\sqrt{1 + y'^2}$. Note: $\\partial L/\\partial y = 0$ (no explicit $y$ dependence)." },
        { label: "Euler-Lagrange", body: "$\\dfrac{d}{dx}\\dfrac{\\partial L}{\\partial y'} = 0$, so $\\partial L/\\partial y'$ is constant. Compute: $\\partial L/\\partial y' = y'/\\sqrt{1 + y'^2}$. Constant means $y'$ is constant." },
        { label: "Integrate", body: "$y' = m$ (constant) → $y = mx + c$. Straight line." }
      ],
      answer: "Geodesics in flat space are straight lines $y = mx + c$. This is the same Euler-Lagrange method that gives Newton's laws from Lagrangian mechanics."
    }],

    "function-sequences": [{
      title: "Example — Uniform vs pointwise convergence",
      prompt: "Consider $f_n(x) = x^n$ on $[0, 1]$. Show pointwise convergence but not uniform.",
      explain: "Pointwise: each fixed $x$ converges to a limit. Uniform: convergence rate is the same across all $x$. The function $x^n$ converges pointwise to 0 on $[0, 1)$ and to 1 at $x = 1$, but the convergence is slow near $x = 1$.",
      steps: [
        { label: "Pointwise limit", body: "For $0 \\leq x < 1$: $x^n \\to 0$. For $x = 1$: $x^n = 1$. So $f(x) = 0$ on $[0,1)$, $f(1) = 1$." },
        { label: "Discontinuity of limit", body: "The pointwise limit is discontinuous! Continuous functions can pointwise-converge to a discontinuous limit; that's the difference uniform convergence forbids." },
        { label: "Show non-uniform", body: "$\\sup_{x \\in [0,1)} |f_n(x) - f(x)| = \\sup x^n = 1$ (achieved as $x \\to 1^-$). Doesn't go to zero. So convergence is NOT uniform." }
      ],
      answer: "Pointwise to discontinuous limit; not uniform. Uniform convergence preserves continuity — that's why the test fails here."
    }],

    "random-variables": [{
      title: "Example — Compute the variance of a Poisson",
      prompt: "Show $\\text{Var}(X) = \\lambda$ for $X \\sim \\text{Poisson}(\\lambda)$.",
      explain: "Use the moment-generating function or compute directly: $\\text{Var}(X) = E[X^2] - E[X]^2$. For Poisson, $E[X] = \\lambda$. Compute $E[X^2]$ via $E[X(X-1)] + E[X]$.",
      steps: [
        { label: "Compute $E[X(X-1)]$", body: "$E[X(X-1)] = \\sum_{k=0}^\\infty k(k-1) \\dfrac{\\lambda^k e^{-\\lambda}}{k!} = \\sum_{k=2}^\\infty \\dfrac{\\lambda^k e^{-\\lambda}}{(k-2)!} = \\lambda^2 \\sum_{j=0}^\\infty \\dfrac{\\lambda^j e^{-\\lambda}}{j!} = \\lambda^2$." },
        { label: "$E[X^2]$", body: "$E[X^2] = E[X(X-1)] + E[X] = \\lambda^2 + \\lambda$." },
        { label: "Variance", body: "$\\text{Var}(X) = \\lambda^2 + \\lambda - \\lambda^2 = \\lambda$." }
      ],
      answer: "$\\text{Var}(X) = \\lambda$. Poisson is special — mean and variance are equal. If your data has $\\bar x \\neq s^2$, it's NOT Poisson (overdispersion / underdispersion)."
    }],

    "stochastic-processes": [{
      title: "Example — Random walk: expected return time",
      prompt: "A simple random walk on $\\mathbb Z$ starts at 0. What's the probability it returns to 0?",
      explain: "Famous result: 1D and 2D walks return with probability 1 (recurrent). 3D walks return with probability ≈ 0.34 (transient). This sharp dimensional transition is one of probability's classic surprises.",
      steps: [
        { label: "Return probability", body: "Let $p$ = prob walk returns to 0 starting from 0. By translation invariance and ±1 step symmetry, $p = 1$ for 1D." },
        { label: "Expected return time", body: "Despite $P(\\text{return}) = 1$, the EXPECTED time to return is infinite — the walk is 'null recurrent.'" }
      ],
      answer: "Returns w.p. 1 in 1D. Expected return time infinite. The walk meanders out arbitrarily far before coming back."
    }],

    "bayesian-statistics": [{
      title: "Example — Beta-binomial conjugacy",
      prompt: "Given a Beta(2, 2) prior on coin probability $\\theta$ and observing 7 heads in 10 flips, find the posterior.",
      explain: "Beta conjugate to Binomial. Posterior is Beta with parameters $(\\alpha + \\text{heads}, \\beta + \\text{tails})$. Mechanical — and the posterior is closed-form (no integration needed).",
      steps: [
        { label: "Prior", body: "Beta(2, 2): symmetric, mean 0.5, mild concentration." },
        { label: "Likelihood", body: "$\\binom{10}{7}\\theta^7(1-\\theta)^3$." },
        { label: "Posterior", body: "Beta(2+7, 2+3) = Beta(9, 5). Mean: $9/(9+5) = 9/14 \\approx 0.643$." }
      ],
      answer: "Beta(9, 5). Posterior mean shifted from 0.5 (prior) toward 0.7 (data) — at 0.64. Bayesian shrinkage at work."
    }],

    "optimization": [{
      title: "Example — Linear programming graphically",
      prompt: "Maximize $z = 3x + 5y$ subject to $x + y \\leq 4$, $x \\leq 3$, $y \\leq 2$, $x, y \\geq 0$.",
      explain: "LP optimal lies at a vertex of the feasible region. Sketch the constraints, identify vertices, evaluate objective at each. The largest wins.",
      steps: [
        { label: "Vertices of feasible region", body: "Intersections of constraint lines: $(0,0)$, $(3, 0)$, $(3, 1)$ (from $x \\leq 3$ and $x + y \\leq 4$), $(2, 2)$ (from $y \\leq 2$ and $x + y \\leq 4$), $(0, 2)$." },
        { label: "Evaluate z", body: "$(0,0)$: 0. $(3,0)$: 9. $(3,1)$: 14. $(2,2)$: 16. $(0,2)$: 10." },
        { label: "Max", body: "16 at $(2, 2)$." }
      ],
      answer: "Max $z = 16$ at $x = 2, y = 2$. Simplex algorithm walks vertex-to-vertex finding the same answer in higher dimensions."
    }],

    "information-theory": [{
      title: "Example — Entropy of a biased coin",
      prompt: "Compute the entropy (in bits) of a coin with $P(\\text{heads}) = 0.25$.",
      explain: "Entropy $H = -\\sum p_i \\log_2 p_i$. For a biased coin, $H < 1$ — less than a fair coin's 1 bit. The closer to 50/50, the higher the entropy.",
      steps: [
        { label: "Apply formula", body: "$H = -0.25 \\log_2 0.25 - 0.75 \\log_2 0.75$." },
        { label: "Compute", body: "$\\log_2 0.25 = -2$. $\\log_2 0.75 \\approx -0.415$. So $H = -0.25(-2) - 0.75(-0.415) = 0.5 + 0.311 = 0.811$ bits." }
      ],
      answer: "$H \\approx 0.811$ bits. A biased coin carries less information per flip than a fair coin (1 bit). With 100 flips of this coin, you carry only ~81 bits of information."
    }],

    "game-theory": [{
      title: "Example — Mixed-strategy Nash for Rock-Paper-Scissors",
      prompt: "Find the mixed-strategy Nash equilibrium of Rock-Paper-Scissors.",
      explain: "Symmetric zero-sum game. Pure strategies have no equilibrium (any strategy beaten). The unique NE: mix 1/3, 1/3, 1/3 — making your opponent indifferent between their choices.",
      steps: [
        { label: "Indifference principle", body: "In equilibrium, each player's mix must make the opponent's expected payoff equal for all pure strategies." },
        { label: "Set up", body: "If you play R, P, S with probabilities $p, q, r$, opponent's expected payoff from each pure strategy must be equal. Solving gives $p = q = r = 1/3$." }
      ],
      answer: "$(1/3, 1/3, 1/3)$ for each player. Symmetric, fair — and any deviation from it can be exploited."
    }],

    "dynamical-systems": [{
      title: "Example — Saddle-node bifurcation",
      prompt: "For $\\dot x = r + x^2$, find equilibria and analyze stability as $r$ varies.",
      explain: "Classic 1D bifurcation: as $r$ decreases through 0, equilibria appear out of nowhere. Above $r = 0$: no equilibrium. At $r = 0$: one degenerate equilibrium. Below: two equilibria, one stable, one unstable.",
      steps: [
        { label: "Find equilibria", body: "$\\dot x = 0 \\Rightarrow x^2 = -r$. Solutions $x = \\pm \\sqrt{-r}$ exist only for $r < 0$." },
        { label: "Stability", body: "$d\\dot x/dx = 2x$. At $x = -\\sqrt{-r}$: $-2\\sqrt{-r} < 0$, stable. At $x = +\\sqrt{-r}$: $+2\\sqrt{-r} > 0$, unstable." },
        { label: "At $r = 0$", body: "Degenerate equilibrium at $x = 0$, marginally stable from left, unstable from right (half-stable)." }
      ],
      answer: "Saddle-node bifurcation at $r = 0$. Two equilibria for $r < 0$ collide and annihilate as $r$ crosses 0. Ubiquitous in physics — e.g., bistable switches turning off."
    }],

    "cryptography": [{
      title: "Example — RSA with small primes",
      prompt: "Set up RSA with $p = 11$, $q = 13$. Choose $e = 7$. Compute $d$ and encrypt the message $m = 9$.",
      explain: "RSA: pick two primes, multiply to get $n$. Pick $e$ coprime to $\\phi(n) = (p-1)(q-1)$. Compute $d$ as $e^{-1} \\bmod \\phi(n)$. Encrypt: $c = m^e \\bmod n$. Decrypt: $m = c^d \\bmod n$.",
      steps: [
        { label: "Compute $n, \\phi$", body: "$n = 143$. $\\phi(n) = 10 \\cdot 12 = 120$." },
        { label: "Find d", body: "Need $d$ with $7d \\equiv 1 \\pmod{120}$. Extended Euclidean: $d = 103$. Check: $7 \\cdot 103 = 721 = 6 \\cdot 120 + 1$ ✓." },
        { label: "Encrypt", body: "$c = 9^7 \\bmod 143$. Compute step-by-step: $9^2 = 81$, $9^4 = 81^2 = 6561 \\equiv 126$ (mod 143), $9^7 = 9^4 \\cdot 9^2 \\cdot 9 = 126 \\cdot 81 \\cdot 9 \\equiv 48 \\pmod{143}$." }
      ],
      answer: "Public key $(e=7, n=143)$, private $d = 103$. Ciphertext $c = 48$. Decryption: $48^{103} \\bmod 143 = 9$ (verify). Real RSA uses 2048-bit primes; the math is identical."
    }]
  });
})();
