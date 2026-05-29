// "Why" explanation for each practice problem.
// Indexed by topic id, then position in the tasks array (0..9).
window.TASK_EXPLAIN = {

  // ===== MATH =====

  "arithmetic-foundations": [
    "PEMDAS: multiplication before addition. $3 \\times 4 = 12$ first, then $6 + 12 = 18$.",
    "Parentheses first ($5$, then exponent $25$), then subtract: $25 - 10 = 15$.",
    "$-12 + 5 = -7$, then $-7 - (-3) = -7 + 3 = -4$. Two negatives cancel.",
    "$|x| = 9$ means $x$ is $9$ units from zero — either direction.",
    "$|x + 2| = 5$ means $x + 2 = \\pm 5$. Either $x = 3$ or $x = -7$.",
    "$90 = 2 \\times 45 = 2 \\times 9 \\times 5 = 2 \\times 3^2 \\times 5$. Keep dividing by primes.",
    "$144 = 12^2 = (2^2 \\cdot 3)^2 = 2^4 \\cdot 3^2$. Or factor step-by-step.",
    "$\\gcd(48, 60)$: largest number dividing both. $48 = 2^4 \\cdot 3$, $60 = 2^2 \\cdot 3 \\cdot 5$. Common: $2^2 \\cdot 3 = 12$.",
    "$\\operatorname{lcm}(8, 12)$: smallest multiple of both. $8 = 2^3$, $12 = 2^2 \\cdot 3$. Take max powers: $2^3 \\cdot 3 = 24$.",
    "PEMDAS: $2^3 = 8$, $3^2 = 9$, $4 \\times 5 = 20$. Then $8 + 9 - 20 = -3$."
  ],

  "fractions-percentages": [
    "Common denominator $6$: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.",
    "Common denominator $12$: $\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$.",
    "Multiply across: $\\frac{2 \\times 10}{5 \\times 3} = \\frac{20}{15} = \\frac{4}{3}$.",
    "Divide = multiply by reciprocal: $\\frac{7}{8} \\times \\frac{4}{1} = \\frac{28}{8} = \\frac{7}{2}$.",
    "$\\frac{3}{8} = 0.375 = 37.5\\%$. Divide top by bottom, then multiply by 100.",
    "$15\\%$ of $200 = 0.15 \\times 200 = 30$.",
    "Change is $\\$15$; divide by original $\\$50$: $15/50 = 0.30 = 30\\%$.",
    "Divide top and bottom by GCD $12$: $\\frac{24 \\div 12}{36 \\div 12} = \\frac{2}{3}$.",
    "$0.625 = \\frac{625}{1000} = \\frac{5}{8}$ after dividing by GCD $125$.",
    "$20\\%$ tip = $\\$24$. Total = $\\$120 + \\$24 = \\$144$."
  ],

  "exponents-roots": [
    "Same base, add exponents: $a^{4+7} = a^{11}$.",
    "Same base, subtract exponents: $x^{8-3} = x^5$.",
    "$(2^3)^2 = 2^{3 \\times 2} = 2^6 = 64$. Multiply exponents.",
    "Anything (nonzero) to the zero power is $1$. Comes from $x^n/x^n = 1$.",
    "$3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}$. Negative exponent flips to denominator.",
    "$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$. Pull out the perfect square.",
    "$3^3 = 27$, so $\\sqrt[3]{27} = 3$.",
    "$\\sqrt{12} = 2\\sqrt 3$, $\\sqrt{27} = 3\\sqrt 3$. Sum: $5\\sqrt 3$.",
    "Multiply top and bottom by $\\sqrt 5$: $\\frac{2\\sqrt 5}{5}$.",
    "$16^{1/4} = \\sqrt[4]{16}$. Since $2^4 = 16$, answer is $2$."
  ],

  "ratios-proportions": [
    "Total parts $= 7$. One part $= 140/7 = 20$. Then $2 \\times 20 = 40$ and $5 \\times 20 = 100$.",
    "Cross-multiply: $3x = 36$, so $x = 12$.",
    "Set up ratio: $4/50 = y/125$. Solve: $y = 10$ L.",
    "Inverse proportion: total work = $8 \\times 6 = 48$ worker-days. Then $48/4 = 12$ days.",
    "Speed = distance/time = $180/3 = 60$ km/h.",
    "Multiply by $\\frac{1000}{3600} = \\frac{5}{18}$: $72 \\times \\frac{5}{18} = 20$ m/s.",
    "Acid: $0.2 + 0.6 = 0.8$ L in $5$ L total. So $0.8/5 = 16\\%$.",
    "$y/x = 12/4 = 3$, so $y = 3x$. At $x = 7$: $y = 21$.",
    "$xy = 5 \\cdot 8 = 40$ constant. At $x = 4$: $y = 40/4 = 10$.",
    "$4$ cm × $50000 = 200000$ cm = $2000$ m = $2$ km."
  ],

  "linear-equations": [
    "Subtract $7$: $2x = 14$. Divide by $2$: $x = 7$.",
    "Collect: $2x = 12$, so $x = 6$.",
    "Subtract $7$, divide by $-2$: $x = 3$. (Or rearrange first: $-2x = -6$.)",
    "Multiply both sides by $4$: $x = 36$.",
    "Multiply by $3$: $x + 1 = 6$. So $x = 5$.",
    "Distribute: $3x - 6 = 12$, then $3x = 18$, $x = 6$.",
    "Distribute: $10x + 5 = 35$, then $10x = 30$, $x = 3$.",
    "Common denominator $6$: $3x + 2x = 30$. So $5x = 30$, $x = 6$.",
    "Sub $x = 2$: $6 + 2y = 12$, so $y = 3$.",
    "Let $n$ be number. $n + 3n = 4n = 40$, so $n = 10$."
  ],

  "inequalities": [
    "Subtract $4$: $x > 5$. Same direction.",
    "Add $3$: $2x \\geq 10$. Divide by positive $2$: $x \\geq 5$.",
    "Divide by $-1$ — FLIP: $x \\geq -4$.",
    "Subtract $5$: $-3x < -3$. Divide by $-3$ and flip: $x > 1$.",
    "Subtract $1$: $-1 \\leq 2x \\leq 8$. Divide by $2$: $-\\tfrac{1}{2} \\leq x \\leq 4$.",
    "$|x| \\leq 3$ means distance from $0$ is at most $3$.",
    "Distance from $2$ is at least $4$ — either $\\geq 6$ or $\\leq -2$.",
    "$x^2 < 16$ means $|x| < 4$, so $-4 < x < 4$.",
    "$|x| \\geq 5$. Distance from $0$ at least $5$ in either direction.",
    "Subtract $3$: $x/2 > 2$. Multiply by $2$: $x > 4$."
  ],

  "plane-geometry": [
    "Pythagoras: $\\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$. A famous Pythagorean triple.",
    "Area = length × width = $8 \\times 5 = 40$.",
    "Perimeter = $4 \\times$ side = $4 \\times 7 = 28$.",
    "$A = \\pi r^2 = \\pi \\cdot 9 = 9\\pi$.",
    "Equilateral side $s$: $A = \\frac{\\sqrt 3}{4} s^2 = \\frac{\\sqrt 3}{4} \\cdot 36 = 9\\sqrt 3$.",
    "Trapezoid area = $\\frac{1}{2}(b_1 + b_2)h = \\frac{1}{2}(4+10)(5) = 35$.",
    "Sum of hexagon angles: $(6-2)(180°) = 720°$. Each: $720°/6 = 120°$.",
    "Pentagon: $(5-2)(180°) = 540°$. Just $(n-2) \\cdot 180°$.",
    "Arc length = $r\\theta$ (in radians) = $6 \\times \\pi/3 = 2\\pi$.",
    "Sector area = $\\tfrac{1}{2} r^2 \\theta = \\tfrac{1}{2}(16)(\\pi/2) = 4\\pi$."
  ],

  "set-logic": [
    "$A \\setminus B$ = elements in $A$ but not in $B$. So $\\{1, 2\\}$.",
    "All $2^2 = 4$ subsets of $\\{a, b\\}$ including empty and the whole set.",
    "Power set of an $n$-element set has $2^n$ elements: $2^4 = 16$.",
    "De Morgan: $\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q$.",
    "Contrapositive flips and negates both sides — logically equivalent to original.",
    "Tautology = always true. $p \\lor \\neg p$ is true whether $p$ is true or false.",
    "$p \\land \\neg p$ is always false — a contradiction.",
    "Inclusion-exclusion: $|A| + |B| - |A \\cap B| = 10 + 7 - 4 = 13$.",
    "Squares less than $20$: $1, 4, 9, 16$. So $x \\in \\{1, 2, 3, 4\\}$.",
    "Negate universal: 'not all have $P$' = 'some doesn't have $P$'."
  ],

  "number-theory": [
    "$72 = 8 \\times 9 = 2^3 \\cdot 3^2$; $30 = 2 \\cdot 3 \\cdot 5$. Common: $2 \\cdot 3 = 6$.",
    "Use Euclidean algorithm: $124 = 2(56) + 12$, $56 = 4(12) + 8$, $12 = 1(8) + 4$, $8 = 2(4)$. GCD = 4.",
    "$12 = 2^2 \\cdot 3$, $18 = 2 \\cdot 3^2$. LCM takes max powers: $2^2 \\cdot 3^2 = 36$.",
    "$33 = 6 \\cdot 5 + 3$. So $33 \\equiv 3 \\pmod 5$.",
    "Fermat: $2^{10} = 1024 \\equiv 1 \\pmod{11}$ since $\\gcd(2,11) = 1$ and $11$ is prime.",
    "$\\varphi(7) = 6$, so $5^6 \\equiv 1$. Then $5^{20} = 5^{18} \\cdot 5^2 \\equiv 25 \\equiv 4 \\pmod 7$. Direct: $5^2 = 25 \\equiv 4$, $5^4 \\equiv 2$, $5^{20} = (5^4)^5 \\equiv 2^5 = 32 \\equiv 4$.",
    "$221 = 13 \\times 17$. Not prime — divisible by 13.",
    "$\\varphi(15) = \\varphi(3)\\varphi(5) = 2 \\cdot 4 = 8$. Numbers coprime to 15: 1, 2, 4, 7, 8, 11, 13, 14.",
    "Try $x = 3, 7, 11, \\ldots$ until $x \\equiv 2 \\pmod 5$: $x = 7$ works ($7 \\equiv 3 \\pmod 4$, $7 \\equiv 2 \\pmod 5$).",
    "$360 = 2^3 \\cdot 3^2 \\cdot 5$. Number of divisors: $(3+1)(2+1)(1+1) = 24$."
  ],

  "combinatorics": [
    "$7! = 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 = 5040$.",
    "$\\binom{10}{2} = \\frac{10 \\cdot 9}{2} = 45$.",
    "$\\binom{12}{4} = \\frac{12!}{4!8!} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24} = 495$.",
    "MISSISSIPPI has 11 letters with repeats: M(1), I(4), S(4), P(2). $\\frac{11!}{1!4!4!2!} = 34650$.",
    "Pascal/binomial: coefficient of $x^3$ in $(1+x)^7$ is $\\binom{7}{3} = 35$.",
    "$2^6 = 64$ subsets of a $6$-element set (each element: in or out).",
    "$5 \\times 4 \\times 3 \\times 2 = 120$ — pick from 5, then 4, etc.",
    "Circular permutations: fix one person, arrange remaining $4!$ = 24 ways.",
    "Need 4 rights and 3 ups in some order: $\\binom{7}{3} = 35$.",
    "Derangements of 4: $D_4 = 9$ (count permutations with no fixed point)."
  ],

  "systems-of-equations": [
    "Add: $2x = 6$, so $x = 3$. Then $y = 2$.",
    "Add: $3x = 9$, so $x = 3$. Then $y = 1$.",
    "Substitute: from second, $x = 11 - 2y$. Sub: $3(11-2y) - 2y = 5$, so $y = 3.5$, $x = 4$.",
    "Multiply first by 2: $4x + 2y = 8$. Compare with $4x + 2y = 9$. Contradiction.",
    "Second is twice the first. Same line — infinite solutions.",
    "Multiply first by 3: $3x + 6y = 21$. Subtract second: $7y = 14$, $y = 2$. Then $x = 3$.",
    "Solve via elimination. Gives $x = 21/11$, $y = 31/11$.",
    "Adults $a$, children $c$. $a + c = 20$, $10a + 6c = 152$. Solve: $a = 8$.",
    "$x + y = 25$, $x - y = 9$. Add: $2x = 34$, $x = 17$. So smaller $y = 8$.",
    "Sub: $1 + 2 + z = 6$, so $z = 3$."
  ],

  "quadratic-equations": [
    "$x^2 = 9$, so $x = \\pm 3$.",
    "Factor: $x(x + 4) = 0$, so $x = 0$ or $x = -4$.",
    "$(x + 3)^2 = 0$, so $x = -3$ (double root).",
    "Factor: $(x - 3)(x - 4) = 0$, so $x = 3, 4$.",
    "Quadratic formula or factor: $(2x + 1)(x - 3) = 0$, so $x = -\\tfrac{1}{2}, 3$.",
    "$\\Delta = 1 - 4 = -3 < 0$: no real roots, complex conjugate pair.",
    "By Vieta's: sum = $-b/a = -(-4)/1 = 4$.",
    "By Vieta's: product = $c/a = -2/3$.",
    "Vertex form $y = (x-h)^2 + k$ has vertex at $(h, k)$. Here $(2, 3)$.",
    "Double root when $\\Delta = 0$: $16 - 4k = 0$, so $k = 4$."
  ],

  "polynomials-rational": [
    "$p(1) = 1 - 1 = 0$. So $(x - 1)$ divides cleanly — remainder is $0$.",
    "$p(3) = 27 - 27 = 0$. Factor theorem: $(x - 3)$ is a factor.",
    "Vieta: sum of roots = $-(-6)/1 = 6$.",
    "Try integer roots: $p(1) = 0$, $p(2) = 0$, $p(3) = 0$. Done.",
    "Denominator zero where $x - 4 = 0$, i.e., $x = 4$. Vertical asymptote.",
    "Same degree top and bottom: ratio of leading coefficients $= 2/1 = 2$.",
    "Denominator zero at $x^2 = 1$, so $x = \\pm 1$. Excluded from domain.",
    "$\\frac{1}{x(x-1)} = \\frac{-1}{x} + \\frac{1}{x-1}$. Verify by combining.",
    "Long division gives quotient $x + 2$, remainder $0$.",
    "$x^4 = 16 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$ (real). Two more complex roots."
  ],

  "functions-graphs": [
    "$f(3) = 9 + 1 = 10$.",
    "$f(-2) = -4 - 5 = -9$.",
    "Need $x + 3 \\geq 0$: $x \\geq -3$.",
    "Denominator can't be zero: $x \\neq 2$.",
    "Squares are $\\geq 0$. Range: $[0, \\infty)$.",
    "Set $y = 2x + 4$, swap: $x = 2y + 4$, solve: $y = (x-4)/2$.",
    "$x^3$ is strictly increasing — passes horizontal line test.",
    "Inner first: $f(x) = x + 1$. Outer: $g(x+1) = (x+1)^2$.",
    "Shift right $h$: $f(x - 3)$. Shift up $k$: add $k$. So $(x - 3)^2 + 2$.",
    "$f(-x) = (-x)^2 = x^2 = f(x)$. Symmetric about $y$-axis: even."
  ],

  "logarithms": [
    "$2^4 = 16$, so $\\log_2 16 = 4$.",
    "$3^4 = 81$, so $\\log_3 81 = 4$.",
    "$10^3 = 1000$, so $\\log_{10} 1000 = 3$.",
    "$\\ln$ and $e^x$ are inverses: $\\ln e^5 = 5$.",
    "Quotient rule: $\\log_2(12/3) = \\log_2 4 = 2$.",
    "$2^5 = 32$, so $x = 5$.",
    "$\\log$ means base 10. $10^2 = 100$.",
    "$\\ln$ is base $e$. $e^1 = e$.",
    "Rewrite: $x + 2 = 3^3 = 27$. So $x = 25$.",
    "$4^x = 2^{2x}$, so $2x = x + 3$, giving $x = 3$."
  ],

  "sequences-series": [
    "$a_{10} = 2(10) + 1 = 21$.",
    "Gauss's sum: $\\frac{100 \\cdot 101}{2} = 5050$.",
    "Geometric, $r = 2$: $a_{10} = 2 \\cdot 2^9 = 1024$.",
    "Sum of geometric: $\\frac{3(2^5 - 1)}{2 - 1} = 3 \\cdot 31 = 93$.",
    "Geometric $a = 1/2, r = 1/2$: sum = $(1/2)/(1-1/2) = 1$.",
    "Formula $\\frac{n(n+1)(2n+1)}{6} = \\frac{10 \\cdot 11 \\cdot 21}{6} = 385$.",
    "$\\frac{n}{n+1} \\to 1$ as $n \\to \\infty$.",
    "Harmonic series diverges very slowly — sum grows like $\\ln n$.",
    "$p$-series with $p = 2 > 1$: converges. Exact value is $\\pi^2/6$.",
    "Geometric series formula when $|r| < 1$."
  ],

  "trigonometry": [
    "$\\sin 0 = 0$ (unit circle starts at $(1, 0)$, $y$-coordinate is $0$).",
    "$\\cos(\\pi/2) = 0$ — at top of unit circle, $x$-coordinate is zero.",
    "$\\tan(\\pi/4) = \\sin/\\cos = (\\sqrt 2/2)/(\\sqrt 2/2) = 1$.",
    "$\\sin 60° = \\sqrt 3/2$ from 30-60-90 triangle.",
    "Pythagorean identity — always $1$ for any angle.",
    "$\\cos$ is $-1/2$ at $2\\pi/3$ and $4\\pi/3$ (II and III quadrants).",
    "$\\tan$ has period $\\pi$. In $[0, 2\\pi)$: $\\pi/4$ and $5\\pi/4$.",
    "$\\sin(45° + 30°) = \\sin 45 \\cos 30 + \\cos 45 \\sin 30 = \\frac{\\sqrt 6 + \\sqrt 2}{4}$.",
    "$135° \\times \\frac{\\pi}{180°} = \\frac{3\\pi}{4}$.",
    "Amplitude is the coefficient of $\\sin$: $3$."
  ],

  "probability": [
    "Three of six faces are even: $3/6 = 1/2$.",
    "Out of 36 outcomes, 6 give sum 7: $(1,6), (2,5), \\ldots$. $6/36 = 1/6$.",
    "Only $(6, 6)$ gives 12: $1/36$.",
    "$13$ hearts in $52$ cards: $13/52 = 1/4$.",
    "$4$ aces in $52$ cards: $4/52 = 1/13$.",
    "$\\binom{3}{2}/2^3 = 3/8$.",
    "$P(R_1)P(R_2|R_1) = \\frac{3}{5} \\cdot \\frac{2}{4} = \\frac{3}{10}$.",
    "Mean = $(1+2+3+4+5+6)/6 = 21/6 = 3.5$.",
    "Variance = $E[X^2] - E[X]^2 = 91/6 - 49/4 = 35/12$.",
    "Independent: $P(A \\cap B) = P(A)P(B) = 0.5 \\times 0.4 = 0.2$."
  ],

  "statistics": [
    "Middle value when sorted: $5$.",
    "Mode = most frequent value: $3$ appears twice.",
    "Range = max − min = $20 - 3 = 17$.",
    "Mean = $(2+4+6+8)/4 = 5$.",
    "Population SD: $\\sqrt{((2-5)^2 + (4-5)^2 + (6-5)^2 + (8-5)^2)/4} = \\sqrt{5}$.",
    "From standard normal table: $P(Z < 1.5) \\approx 0.9332$.",
    "$n = (z\\sigma/E)^2 = (1.96 \\cdot 4/1)^2 \\approx 61.5$, so $n = 62$.",
    "$99\\%$ leaves $0.5\\%$ in each tail: $z^* \\approx 2.576$.",
    "$|r| > 0.7$ is generally considered strong.",
    "Slope $= (5-1)/(2-0) = 2$. Through $(0,1)$: $y = 2x + 1$."
  ],

  "complex-numbers": [
    "Add components: $(3+2) + (1-4)i = 5 - 3i$.",
    "$(1)(1) + (1)(-1)i + (1)(i) + (i)(-1)i = 1 - i + i + 1 = 2$. (Or $a + bi)(a - bi) = a^2 + b^2$.)",
    "$i^{10} = (i^4)^2 \\cdot i^2 = 1 \\cdot (-1) = -1$.",
    "Multiply top and bottom by conjugate $1 - i$: $\\frac{1-i}{(1+i)(1-i)} = \\frac{1-i}{2}$.",
    "$\\sqrt{1 + 1} = \\sqrt 2$.",
    "$-1$ is at angle $\\pi$ on the negative real axis.",
    "Euler: $e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1$.",
    "Solutions of $z^3 = 1$. Three roots equally spaced around unit circle.",
    "Flip sign of imaginary part: $3 + 2i$.",
    "$z = \\pm \\sqrt{-4} = \\pm 2i$."
  ],

  "vector-algebra": [
    "$\\sqrt{1 + 4 + 4} = \\sqrt 9 = 3$.",
    "$1 \\cdot 0 + 1 \\cdot 1 + 0 \\cdot 1 = 1$.",
    "Dot product: $1 \\cdot (-2) + 2 \\cdot 1 = 0$. Zero ⇒ perpendicular.",
    "Magnitude $= 5$. Unit vector: $\\langle 3/5, 4/5 \\rangle$.",
    "Standard basis cross: $\\hat i \\times \\hat j = \\hat k$ by right-hand rule.",
    "$\\text{proj}_{\\hat i} \\langle 3, 4 \\rangle = 3\\hat i = \\langle 3, 0 \\rangle$.",
    "$|\\vec a \\times \\vec b| = $ parallelogram area $= |1 \\cdot 0 \\cdot 0 - 0 \\cdot 2 \\cdot 0| = 2$ (or directly $1 \\cdot 2 = 2$).",
    "Scalar triple product = volume of parallelepiped. For unit basis: $1$.",
    "Parametric form: position = origin + parameter × direction.",
    "Plane $ax + by + cz = d$ has normal $\\langle a, b, c \\rangle$."
  ],

  "linear-algebra": [
    "$3 \\cdot 5 - 0 \\cdot 2 = 15$.",
    "Trace = sum of diagonal entries: $2 + 5 = 7$.",
    "Identity matrix has all eigenvalues equal to $1$.",
    "$\\det = 1 \\cdot 4 - 2 \\cdot 2 = 0$. Not invertible.",
    "Second row is $3 \\times$ first — rows linearly dependent. Rank $1$.",
    "Invertible ⇒ rank = $n$, so nullity = $0$.",
    "$A^{-1} A \\vec x = A^{-1} \\vec 0$, so $\\vec x = \\vec 0$.",
    "Characteristic: $\\lambda^2 + 1 = 0$, so $\\lambda = \\pm i$.",
    "Determinant is invariant under transpose: $\\det A = \\det A^T$.",
    "If $A \\vec v = \\lambda \\vec v$, then $A^2 \\vec v = \\lambda^2 \\vec v$."
  ],

  "limits": [
    "Polynomial, continuous everywhere. Substitute: $0 + 3 = 3$.",
    "Factor: $\\frac{(x-1)(x+1)}{x-1} = x + 1$. Limit at $1$ is $2$.",
    "As $x$ grows, $1/x$ shrinks to zero.",
    "Taylor: $\\cos x \\approx 1 - x^2/2$, so numerator $\\approx x^2/2$, giving $1/2$.",
    "Taylor: $e^x = 1 + x + x^2/2 + \\ldots$, so $(e^x - 1)/x \\to 1$.",
    "Compound-interest limit: defining property of $e$.",
    "L'Hôpital or substitute $u = \\ln x$: integrand vanishes.",
    "$\\ln x$ grows much slower than $x$. L'Hôpital: $\\to 1/1 \\cdot 1/x = 0$.",
    "$|x|$ is continuous everywhere; the only issue is differentiability at $0$.",
    "Blows up at $x = 0$ — not defined there, not continuous."
  ],

  "derivatives": [
    "Power rule: $5x^{5-1} = 5x^4$.",
    "Memorize the trig derivatives.",
    "$e^x$ is its own derivative — defining property.",
    "$\\ln$ is the inverse of $e^x$; chain rule gives $1/x$.",
    "$\\tan x = \\sin x/\\cos x$. Quotient rule gives $\\sec^2 x$.",
    "Linear combination: differentiate each term separately.",
    "Chain rule: derivative of inner ($2x$) times derivative of outer ($e^{2x}$).",
    "Product rule: $2x \\ln x + x^2 \\cdot (1/x) = 2x \\ln x + x$.",
    "Logarithmic differentiation: $y = x^x$, $\\ln y = x \\ln x$, $y'/y = \\ln x + 1$.",
    "$f'(x) = 3x^2 - 3 = 0$, so $x^2 = 1$, $x = \\pm 1$."
  ],

  "integrals": [
    "Power rule: $\\frac{x^{4+1}}{4+1} + C = x^5/5 + C$.",
    "Derivative of $\\sin x$ is $\\cos x$, so antiderivative is $\\sin x + C$.",
    "$e^x$ integrates to itself plus $C$.",
    "$\\int dx/x = \\ln|x| + C$. The $|\\ldots|$ handles negative $x$.",
    "$\\int_0^1 x\\,dx = [x^2/2]_0^1 = 1/2$.",
    "$\\int_0^\\pi \\sin x\\,dx = [-\\cos x]_0^\\pi = 1 - (-1) = 2$.",
    "Let $u = x^2$, $du = 2x\\,dx$, so $\\int xe^{x^2}dx = \\tfrac{1}{2}\\int e^u\\,du = \\tfrac{1}{2}e^{x^2}$.",
    "IBP with $u = \\ln x$, $dv = dx$: $x\\ln x - \\int 1\\,dx = x\\ln x - x + C$.",
    "$\\int_0^3 x^2 dx = 9$.",
    "Famous Gaussian integral — symmetry + polar coordinates trick."
  ],

  "multivariable-calculus": [
    "Treat $y$ as constant. Derivative of $x^2$ is $2x$; $y^2$ is constant ⇒ zero.",
    "Hold $x$ constant. $\\partial(xy)/\\partial y = x$; $\\partial e^y/\\partial y = e^y$.",
    "Each partial gives the corresponding coefficient: $\\langle 1, 2, 3 \\rangle$.",
    "Area of unit square = $1$.",
    "$\\int_0^1 \\int_0^1 xy\\,dx\\,dy = \\tfrac{1}{2} \\cdot \\tfrac{1}{2} = \\tfrac{1}{4}$.",
    "$\\nabla f = \\langle 2x, 2y \\rangle = \\vec 0 \\Rightarrow (0,0)$.",
    "Hessian is positive definite ($2I$): local min.",
    "$\\nabla \\cdot \\langle x, y, z \\rangle = 1 + 1 + 1 = 3$.",
    "Curl by determinant: $\\partial_x x - \\partial_y(-y) = 1 - (-1) = 2$. Actually computing: $\\hat k(\\partial_x x - \\partial_y(-y)) = \\hat k(1 + 1) = 2\\hat k$.",
    "Volume of $n$-ball: $\\tfrac{4\\pi}{3} r^3$, $r = 1$: $\\tfrac{4\\pi}{3}$."
  ],

  "vector-calculus": [
    "Mixed partials are equal: $\\nabla \\times \\nabla f = \\vec 0$ identically.",
    "Identity: $\\nabla \\cdot (\\nabla \\times \\vec F) = 0$ always.",
    "Conservative ⇔ curl-free (on simply connected). On non-simply-connected, additional conditions.",
    "Divergence theorem: $\\iint \\vec F \\cdot d\\vec S = \\iiint \\nabla \\cdot \\vec F\\,dV = 3 \\cdot \\tfrac{4\\pi}{3} = 4\\pi$.",
    "Conservative field has zero loop integral — path doesn't matter, only endpoints.",
    "$\\nabla^2(x^2 + y^2 + z^2) = 2 + 2 + 2 = 6$.",
    "Radial inverse-square field is divergence-free except at origin (where the source sits).",
    "$\\vec F = \\nabla f$ means $f_x = 2x$, $f_y = 2y$. So $f = x^2 + y^2 + C$.",
    "$4\\pi r^2$ for unit sphere: $4\\pi$.",
    "Work = $\\vec F \\cdot \\vec d = 1 \\cdot 3 = 3$."
  ],

  "ode": [
    "$y'' + y$ involves the second derivative. Order = 2.",
    "$dy/y = 2\\,dx$, so $\\ln y = 2x + C$. With $y(0) = 3$: $y = 3e^{2x}$.",
    "Exponential decay: separable, gives $y = Ce^{-kt}$.",
    "Characteristic $r^2 + 1 = 0$, so $r = \\pm i$. Solutions: $\\cos$ and $\\sin$.",
    "Characteristic $r^2 - 1 = 0$, so $r = \\pm 1$. Solutions: $e^t$ and $e^{-t}$.",
    "Characteristic $r^2 + 4 = 0$, so $r = \\pm 2i$. Frequency $\\omega = 2$.",
    "Set $y(1-y) = 0$: $y = 0$ or $y = 1$.",
    "Separable: $dy/y = -dt$. So $y = Ce^{-t}$.",
    "Wronskian determinant $e^{t} \\cdot 2e^{2t} - e^{t} \\cdot e^{2t} = e^{3t}$.",
    "$y = \\int \\frac{dx}{1+x^2} = \\arctan x + C$."
  ],

  "pde": [
    "Heat equation: parabolic, models diffusion.",
    "Wave equation: hyperbolic, propagation at speed $c$.",
    "$u_{xx} = 0$ integrates twice: $u = ax + b$ linear.",
    "Wave eq $u_{tt} = c^2 u_{xx}$ with coefficient $4 = c^2$, so $c = 2$.",
    "On a square (boundary is 4 sides), need a BC on each side.",
    "$x$ is the spatial dimension, plus time. Two variables total.",
    "Differentiate twice: $u_{tt} = -\\sin(x-t) = u_{xx}$ ✓ with $c = 1$.",
    "No flux, no source: heat dissipates to the zero solution.",
    "Counting subscripts: 4 derivatives in $x$.",
    "Standard form of Laplacian in polar coordinates."
  ],

  "real-analysis": [
    "$\\sqrt 2 \\notin \\mathbb{Q}$ but is a Cauchy limit of rationals — so $\\mathbb{Q}$ has 'holes'.",
    "$\\mathbb{R}$ is complete by construction (Dedekind cuts or Cauchy sequences).",
    "Cauchy convergent ⇔ convergent only in complete spaces.",
    "Bolzano-Weierstrass: bounded sequence has a convergent subsequence.",
    "Heine-Borel in $\\mathbb{R}^n$: compact = closed + bounded.",
    "Continuous on compact attains max and min (extreme value theorem).",
    "$1/x$ near $0$ has unbounded derivative — fails uniform continuity.",
    "MVT applies when $f$ is continuous on $[a, b]$ and differentiable on the open interval.",
    "Continuous on a compact interval ⇒ Riemann integrable.",
    "$\\sup = 1$ even though never attained."
  ],

  "complex-analysis": [
    "Conjugate $\\bar z = x - iy$ satisfies $u_x \\neq v_y$ generally. Not holomorphic.",
    "Pole of order 1 at $z = 0$. Cauchy: $2\\pi i \\cdot \\text{Res} = 2\\pi i$.",
    "Pole of order 2: residue is $\\frac{d}{dz}(z - 1)^2 \\cdot \\frac{1}{(z-1)^2}|_{z=1} = 0$. Wait — actually Res at order-2 pole = derivative of regular part at 1.",
    "Expand $\\sin z = z - z^3/3! + \\ldots$. Then $\\sin z/z^2 = 1/z - z/3! + \\ldots$. Residue (coefficient of $1/z$) is $1$.",
    "Liouville: bounded entire ⇒ constant.",
    "Multiplicity (degree of vanishing) at $z = 0$ is $3$.",
    "$|z|$ has no complex derivative — Cauchy-Riemann fails.",
    "$1/z$ is already its own Laurent series around 0 — single negative-power term.",
    "Fundamental theorem of algebra: $\\mathbb{C}$ is algebraically closed.",
    "Maximum modulus principle for non-constant holomorphic functions."
  ],

  "fourier-analysis": [
    "Sifting: $\\int \\delta(x) e^{-ikx} dx = 1$.",
    "Constant has all its 'frequency' at zero: $\\delta(k)$ times $2\\pi$ (convention-dependent).",
    "Time derivative ↔ multiply by $ik$ in frequency. Each derivative pulls down a factor of $ik$.",
    "Convolution in time = multiplication in frequency. Workhorse identity.",
    "Two-sided exponential transforms to a Lorentzian: $2a/(a^2 + k^2)$.",
    "Constant function has Fourier series 'one term, the constant itself'.",
    "Period $T$ ⇒ fundamental frequency $\\omega = 2\\pi/T$.",
    "Fourier transform is linear: $\\widehat{af + bg} = a\\hat f + b\\hat g$.",
    "Time shift ↔ phase ramp in frequency: $\\hat{f(t-a)} = e^{-iak}\\hat f(k)$.",
    "Tight signal in time ⇒ broad in frequency, and vice versa."
  ],

  "abstract-algebra": [
    "$\\mathbb{Z}/n\\mathbb{Z}$ has $n$ elements: $0, 1, \\ldots, n-1$.",
    "$S_3 = $ permutations of 3 letters. $(12)(23) \\neq (23)(12)$ — non-abelian.",
    "Each of $n$ letters can be sent to any of $n!$ positions in order.",
    "Every nonzero element has a multiplicative inverse mod $p$ when $p$ is prime.",
    "Trivial homomorphism sends everything to identity ⇒ kernel is the whole group.",
    "Subgroups of $\\mathbb{Z}_{12}$ correspond to divisors of 12: 1, 2, 3, 4, 6, 12.",
    "$n\\mathbb{Z}$ contains multiples of $n$. Index = $n$ (one coset per residue).",
    "Composition series ends in trivial: solvable.",
    "$A_5$ is simple non-abelian, blocking solvability.",
    "Galois group of $x^2 - 2$ over $\\mathbb{Q}$ is $\\mathbb{Z}_2$ (swap $\\pm\\sqrt 2$)."
  ],

  "topology": [
    "Every point has a unique neighborhood — discrete is Hausdorff.",
    "Indiscrete = only $\\emptyset, X$ are open. Can't separate distinct points.",
    "Heine-Borel: compact in $\\mathbb{R}^n$ iff closed and bounded.",
    "Compactness is preserved by continuous maps — image is compact.",
    "Same for connectedness — continuous image of connected is connected.",
    "$S^1$ has nontrivial $\\pi_1 = \\mathbb{Z}$ — not simply connected.",
    "$S^2$ has trivial $\\pi_1$ — every loop contracts.",
    "Closure adds all limit points: $[0, 1]$.",
    "Rationals are dense — no open interval is entirely rational. Interior is empty.",
    "Boundary = closure minus interior: $\\{0, 1\\}$ for $[0,1]$."
  ],

  "numerical-methods": [
    "Newton's iteration: $x_{n+1} = x_n - f/f'$.",
    "Newton converges quadratically near simple roots — doubles correct digits each step.",
    "$2^{-20} \\approx 10^{-6}$, so about 20 bisections.",
    "Error $\\propto h^2$: half $h$, quarter the error.",
    "Error $\\propto h^4$: half $h$, sixteenth the error.",
    "RK4 is fourth-order accurate.",
    "Stiff ODEs need implicit methods or very small step size; explicit Euler blows up.",
    "Higher condition number ⇒ tiny input changes give big output changes.",
    "LU done once; subsequent solves are cheap.",
    "Lagrange interpolation: unique polynomial of degree $\\leq n$ through $n+1$ points."
  ],

  "coordinate-geometry": [
    "$d = \\sqrt{9 + 16} = 5$. Classic 3-4-5.",
    "Average each coordinate: $(0+10)/2, (0+6)/2 = (5, 3)$.",
    "Slope-intercept form: coefficient of $x$ is slope. $-2$.",
    "$y$-intercept = $b$ in $y = mx + b$. Here $-3$.",
    "Slope = $(7-1)/(3-1) = 3$.",
    "$2(2) + 1 = 5$ ✓.",
    "Horizontal line: same $y$ everywhere. $y = 7$.",
    "Vertical line: same $x$ everywhere. $x = 4$.",
    "Same direction = same slope.",
    "Perpendicular slopes are negative reciprocals: $m_1 m_2 = -1$."
  ],

  "solid-geometry": [
    "$5^3 = 125$.",
    "6 faces × side² = $6 \\times 9 = 54$.",
    "$\\pi r^2 h = \\pi \\cdot 4 \\cdot 5 = 20\\pi$.",
    "$\\tfrac{1}{3}\\pi r^2 h = \\tfrac{1}{3}\\pi \\cdot 36 \\cdot 4 = 48\\pi$.",
    "$\\tfrac{4}{3}\\pi r^3 = \\tfrac{4}{3}\\pi \\cdot 27 = 36\\pi$.",
    "$4\\pi r^2 = 16\\pi$.",
    "$\\ell w h = 24$.",
    "$\\tfrac{1}{3} B h = \\tfrac{1}{3}(36)(5) = 60$.",
    "Half a sphere: $\\tfrac{1}{2} \\cdot \\tfrac{4\\pi}{3} \\cdot 27 = 18\\pi$.",
    "$\\tfrac{4\\pi}{3} r^3$ with $r = 1$: $\\tfrac{4\\pi}{3}$."
  ],

  "conic-sections": [
    "$y = x^2$ has focus at $(0, 1/(4a))$ with $a = 1$. So $1/4$.",
    "Vertex form $(x - h)^2 + k$ has vertex $(h, k) = (-1, -4)$.",
    "Eccentricity = 0 means perfect circle.",
    "Parabola: $e = 1$ exactly.",
    "Larger denominator under $x^2$ ⇒ major axis on $x$-axis.",
    "$c = \\sqrt{a^2 - b^2} = \\sqrt{9 - 4} = \\sqrt 5$.",
    "Asymptotes: $y = \\pm (b/a)x = \\pm x$ when $a = b$.",
    "Form matches ellipse: $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$.",
    "$xy = 1$ is a rectangular hyperbola.",
    "$y^2 = 4px$ opens right when $p > 0$."
  ],

  "mathematical-logic": [
    "Well-ordering of $\\mathbb{Z}^+$ justifies induction.",
    "Assume negation, derive contradiction — proves the original.",
    "Contrapositive: flip and negate both sides.",
    "Converse swaps hypothesis and conclusion.",
    "'If raining, wet ground' ≠ 'If wet ground, raining'.",
    "Pigeonhole principle — basic but powerful counting tool.",
    "Strong induction: $P(1) \\land P(2) \\land \\ldots \\land P(n) \\Rightarrow P(n+1)$.",
    "An empty universal claim is vacuously true.",
    "Just one counterexample disproves a universal statement.",
    "$1 + 3 + 5 + \\ldots + (2n-1) = n^2$, provable by induction."
  ],

  "graph-theory": [
    "$\\binom{n}{2}$ pairs of vertices, one edge per pair.",
    "Vertices split into two color classes, no edges within either: 2 colors.",
    "Tree: $|E| = |V| - 1$ always.",
    "Odd cycle needs 3 colors. $C_5$ is one such cycle.",
    "Handshake lemma — each edge contributes 2 to total degree.",
    "Petersen graph chromatic number = 3.",
    "Bipartite ⇔ no odd cycle — fundamental characterization.",
    "Connected, $n$ vertices, $n - 1$ edges: tree.",
    "Königsberg failed (4 vertices of odd degree).",
    "Four-color theorem: any planar graph 4-colorable."
  ],

  "recurrence-generating": [
    "$F_5 = F_4 + F_3 = 3 + 2 = 5$.",
    "Golden ratio: $(1 + \\sqrt 5)/2$.",
    "$\\sum x^n = 1/(1-x)$ for $|x| < 1$.",
    "Differentiate $1/(1-x)$: get $1/(1-x)^2 = \\sum (n+1)x^n$.",
    "$C_n = \\binom{2n}{n}/(n+1)$. $C_3 = 5$.",
    "$a_n = 2 a_{n-1}, a_0 = 1$: $a_n = 2^n$.",
    "Fibonacci GF: $x/(1 - x - x^2)$.",
    "Highest index gap in the recurrence: $a_n$ vs $a_{n-2}$.",
    "$e^x$ has Taylor $\\sum x^n/n!$, so coefficient of $x^3$ is $1/3! = 1/6$.",
    "Coefficient of $x^n$ in $AB$ is $\\sum a_k b_{n-k}$."
  ],

  "computability": [
    "Lambda calculus, register machines are equivalent to Turing machines.",
    "Need unbounded memory to track $a^n b^n$; finite-state can't.",
    "Pushdown automaton (stack) handles $a^n b^n$.",
    "P = polynomial time decidable.",
    "NP = polynomial time verifiable.",
    "To show X is NP-hard, reduce known NP-hard problem to X.",
    "TSP is classic NP-hard.",
    "$\\Omega(n \\log n)$ lower bound for comparison sorts.",
    "Graph isomorphism status open between P and NP-complete.",
    "EXPTIME ⊆ EXPSPACE follows from time ≤ space."
  ],

  "galois-theory": [
    "Quadratic field: dimension 2 over $\\mathbb{Q}$, basis $\\{1, \\sqrt p\\}$.",
    "Minimal polynomial of $\\sqrt[3]{2}$ is $x^3 - 2$, degree 3.",
    "Quintic Galois group $S_5$ is not solvable — no radical formula.",
    "$S_5$ permutes 5 roots — full symmetric group.",
    "$S_5$ has simple subgroup $A_5$ — not solvable.",
    "Splitting field is the smallest extension containing all roots.",
    "$\\overline{\\mathbb{Q}}$ = algebraic numbers.",
    "Galois correspondence: subfields ↔ subgroups (anti-iso).",
    "Frobenius $x \\mapsto x^p$ generates the Galois group of $\\mathbb{F}_{p^n}/\\mathbb{F}_p$.",
    "Frobenius is the prototype of a Galois generator over finite fields."
  ],

  "lie-groups": [
    "$\\dim SO(n) = $ count of independent rotation planes.",
    "$SU(n)$ has $n^2$ complex parameters minus 1 phase = $n^2 - 1$ real.",
    "$U(n)$: complex unitary, has $n^2$ real parameters.",
    "$SU(2) \\to SO(3)$ is 2-to-1: $\\pm I$ both map to identity.",
    "Pauli matrices over 2 generate spin-1/2 rotations.",
    "Jacobi identity holds in any Lie algebra.",
    "$\\mathfrak{sl}(2, \\mathbb{R})$ = traceless 2×2 real matrices.",
    "$SL(2, \\mathbb{R})$ is non-compact (boosts go to infinity).",
    "All real $n \\times n$ matrices form $\\mathfrak{gl}(n, \\mathbb{R})$.",
    "Negative Killing form distinguishes compact semisimple Lie algebras."
  ],

  "differential-geometry": [
    "Line has constant direction — curvature zero.",
    "Flat plane: $K = 0$ — no intrinsic bending.",
    "Saddle: principal curvatures have opposite signs, so $K < 0$.",
    "Local diffeomorphism to $\\mathbb{R}^n$ defines a manifold.",
    "Torsion measures how the curve fails to stay in its osculating plane.",
    "Theorema egregium: $K$ is preserved by isometries (bending without stretching).",
    "First fundamental form: $g_{ij}$ encodes the metric.",
    "Second fundamental form: $K$ encodes embedding curvature.",
    "Plane geodesics are straight lines.",
    "Sphere geodesics are great circles."
  ],

  "tensor-calculus": [
    "$\\delta^\\mu_\\nu = 1$ if indices match, else $0$ — Kronecker delta.",
    "Each contraction sums one upper and one lower index, removing both.",
    "Christoffel symbols depend on coordinates — NOT a tensor.",
    "Riemann tensor has 4 indices: $R^\\rho{}_{\\sigma\\mu\\nu}$.",
    "Independent components in 4D: $20$ (Bianchi identities cut down the count).",
    "Ricci is the contraction $R^\\alpha{}_{\\mu\\alpha\\nu}$ of Riemann.",
    "Trace of Ricci with metric gives the Ricci scalar.",
    "Covariant derivative adds Christoffel-symbol correction terms.",
    "Metric compatibility: $\\nabla_\\mu g_{\\nu\\rho} = 0$.",
    "Tensor product of rank-$a$ and rank-$b$ gives rank-$a+b$."
  ],

  "algebraic-topology": [
    "Torus: $\\chi(T^2) = 0$.",
    "Genus-$g$ surface: $\\chi = 2 - 2g$. Add a handle, lose 2 from $\\chi$.",
    "Torus loops: two independent generators, so $\\mathbb{Z}^2$.",
    "Identity map on $S^n$ has degree 1 — generates $\\pi_n(S^n) = \\mathbb{Z}$.",
    "$H_n(S^n) = \\mathbb{Z}$ — top homology of sphere.",
    "Contractible space has trivial higher homology.",
    "Homotopy equivalence preserves all topological invariants.",
    "Sphere = point ∪ $n$-cell. CW-structure has 2 cells.",
    "Brouwer fixed point: every continuous self-map of a closed ball has a fixed point.",
    "Borsuk-Ulam guarantees opposite poles have equal temperature, etc."
  ],

  "riemannian-geometry": [
    "Unit sphere has constant curvature $+1$.",
    "Flat torus: zero curvature (despite the closed shape).",
    "Hyperbolic space: constant negative curvature.",
    "Geodesics locally minimize length.",
    "Levi-Civita: unique torsion-free metric-compatible connection.",
    "Symmetric spaces have constant curvature.",
    "Killing vectors generate continuous isometries.",
    "Ricci-flat = Einstein with $\\Lambda = 0$.",
    "Calabi-Yau: Ricci-flat + Kähler — fundamental in string theory.",
    "Volume diverges in hyperbolic space — infinite room."
  ],

  "measure-theory": [
    "Rationals are countable, hence measure zero.",
    "Cantor set is uncountable but has measure zero!",
    "Dirichlet function not Riemann integrable — Riemann breaks on wild discontinuity.",
    "Lebesgue integral of indicator of rationals is 0 (rationals are null).",
    "MCT requires monotone sequence.",
    "Fatou bounds liminf integrals — useful one-sided estimate.",
    "$L^p$ norm: $\\left(\\int|f|^p\\right)^{1/p}$.",
    "'Almost everywhere' = except on a null set.",
    "Radon-Nikodym: derivative of one measure w.r.t. another, when absolutely continuous.",
    "Lebesgue measure on $\\mathbb{R}^n$ is translation-invariant and rotation-invariant."
  ],

  "functional-analysis": [
    "Hahn-Banach extends bounded linear functionals from subspaces.",
    "Riesz: dual of Hilbert is itself via $f \\mapsto \\langle \\cdot, f \\rangle$.",
    "$\\ell^2$ is the prototypical separable Hilbert space.",
    "Spectral theorem: compact self-adjoint operator has discrete spectrum (accumulating at 0).",
    "Open mapping: bounded linear surjection ⇒ open.",
    "Closed graph ⇔ bounded for linear maps between Banach spaces.",
    "Self-adjoint ⇒ real eigenvalues.",
    "$\\|I\\| = 1$ (identity has operator norm 1).",
    "Separable Banach spaces typically have Schauder bases, but not all.",
    "Banach-Steinhaus: pointwise bounded ⇒ uniformly bounded."
  ],

  "calculus-of-variations": [
    "Euler-Lagrange: variational condition for stationary action.",
    "Principle of least action: nature minimizes $\\int L\\,dt$.",
    "Catenoid: minimizes surface area of revolution.",
    "Isoperimetric: circle maximizes area for given perimeter.",
    "Hamilton: classical mechanics is variational.",
    "Noether links symmetry to conservation.",
    "Constrained variation: Lagrange multipliers for constraints.",
    "Positive second variation ⇒ local minimum.",
    "Field theory variational principle: vary the field $\\phi(x)$.",
    "Direct method requires lower semi-continuity plus compactness."
  ],

  "function-sequences": [
    "Uniform is the stronger condition.",
    "$f_n(x) = x^n$ on $[0, 1)$: pointwise but not uniform.",
    "Continuity is preserved under uniform limits.",
    "$\\sum x^n$: radius 1 from ratio test.",
    "$\\sum n! x^n$: radius 0 — terms grow too fast.",
    "Term-by-term derivative requires uniform convergence of $f_n'$.",
    "Abel summation handles boundary behavior of power series.",
    "Cauchy uniform: $\\sup|f_n - f_m| \\to 0$.",
    "Dini: monotone pointwise convergence on compact ⇒ uniform.",
    "Stone-Weierstrass: polynomials are dense in continuous functions on $[a, b]$."
  ],

  "random-variables": [
    "Fair coin: $E = 1/2$, $\\text{Var} = 1/4$.",
    "Exponential: mean = $1/\\lambda$.",
    "Geometric (first success): mean = $1/p$.",
    "Uniform $(a, b)$: mean = midpoint = $(a+b)/2$.",
    "Memoryless: $P(X > s + t | X > s) = P(X > t)$.",
    "Sum of independent Poissons is Poisson with parameter sum.",
    "Sum of independent normals is normal (means and variances add).",
    "Markov bounds tail probability by mean over threshold.",
    "Chebyshev: $P(|X - \\mu| > k\\sigma) \\leq 1/k^2$.",
    "Strong law of large numbers: sample mean converges almost surely to true mean."
  ],

  "stochastic-processes": [
    "Memorylessness is the Markov property.",
    "Irreducible aperiodic finite Markov chain has unique stationary distribution.",
    "1D and 2D simple random walks are recurrent; 3D+ are transient.",
    "Exponential inter-arrivals characterize Poisson processes.",
    "Number of arrivals in time $t$ is Poisson with mean $\\lambda t$.",
    "Brownian paths are continuous everywhere but differentiable nowhere.",
    "Martingale: expected next value = current value.",
    "Stopping time: knowable from current information.",
    "Itô calculus: extra $\\tfrac{1}{2}\\sigma^2$ term from $dW^2 = dt$.",
    "Geometric BM (used in finance): multiplicative noise."
  ],

  "bayesian-statistics": [
    "Prior captures initial belief.",
    "Likelihood: $P(D | \\theta)$.",
    "Marginal: $P(D) = \\int P(D|\\theta) P(\\theta)\\,d\\theta$.",
    "Improper prior: integrates to infinity (e.g., uniform on $\\mathbb{R}$).",
    "Jeffreys prior: $\\sqrt{\\det I}$, invariant to reparametrization.",
    "Normal-normal: conjugate for the mean (with known variance).",
    "MAP estimate: mode of posterior.",
    "Posterior predictive integrates over posterior to predict future data.",
    "MCMC: samples from posterior when integrals are intractable.",
    "Metropolis acceptance uses ratios of posteriors."
  ],

  "optimization": [
    "Convex sets: line segments stay inside.",
    "Sum of convex is convex.",
    "Max of convex is convex.",
    "For convex functions, every local min is global.",
    "$\\tfrac{1}{2}x^T A x$ convex iff $A$ positive semi-definite.",
    "Newton uses Hessian for quadratic convergence near minimum.",
    "Weak duality always holds: $c^T x \\geq b^T y$.",
    "Strong duality (Slater): convex + interior feasible ⇒ no duality gap.",
    "SGD samples one example per step — noisy but fast.",
    "KKT generalizes Lagrange multipliers to handle inequality constraints."
  ],

  "information-theory": [
    "Uniform on $n$ symbols: $H = \\log_2 n$.",
    "Deterministic: no uncertainty, $H = 0$.",
    "$H(X, Y) \\leq H(X) + H(Y)$, with equality iff independent.",
    "Conditioning reduces uncertainty: $H(X|Y) \\leq H(X)$.",
    "KL divergence is not symmetric: $D(p\\|q) \\neq D(q\\|p)$.",
    "Shannon: lossless compression bounded below by $H(X)$ bits/symbol.",
    "Huffman: optimal prefix code, achieves Shannon limit asymptotically.",
    "Independent: $I(X; Y) = 0$.",
    "Gaussian differential entropy: $\\tfrac{1}{2}\\log(2\\pi e \\sigma^2)$.",
    "Maxent for fixed mean/var: Gaussian."
  ],

  "game-theory": [
    "Zero-sum: total = constant.",
    "Minimax theorem for two-player zero-sum games (von Neumann).",
    "Nash existence relies on Brouwer/Kakutani fixed-point theorems.",
    "Core: outcomes stable against coalition defection.",
    "Shapley value distributes marginal contributions fairly.",
    "Backward induction for subgame-perfect equilibrium.",
    "ESS: resistant to small mutant invasions.",
    "Mechanism design designs rules to achieve outcome.",
    "Revenue equivalence: many auction types give the same expected revenue (risk-neutral, private values).",
    "Tit-for-tat sustains cooperation in repeated games."
  ],

  "dynamical-systems": [
    "Linear stability: positive real eigenvalue means unstable.",
    "Pure imaginary eigenvalues give a center (oscillation, no decay).",
    "Hopf bifurcation births a limit cycle.",
    "Lorenz attractor is the classic strange attractor.",
    "Sensitive dependence on initial conditions defines chaos.",
    "Butterfly effect = positive Lyapunov exponent.",
    "Feigenbaum constant $\\delta \\approx 4.669$ for period doubling.",
    "KAM tori persist under small perturbations of integrable systems.",
    "Poincaré section: cut flow with surface, get a discrete map.",
    "Symplectic maps preserve phase-space volume (Liouville)."
  ],

  "cryptography": [
    "RSA security rests on the difficulty of factoring big primes.",
    "AES: $128$-bit block, $128/192/256$-bit keys.",
    "SHA-256: $256$-bit output.",
    "Diffie-Hellman: shared secret via $g^{ab}$.",
    "ECC: shorter keys for same security (vs RSA).",
    "Symmetric (AES) much faster than asymmetric (RSA).",
    "Digital signature: authenticity and integrity.",
    "Shor's algorithm factors in polynomial time on quantum computer.",
    "OTP: perfect secrecy requires key ≥ message length.",
    "Birthday attack: collisions appear after ~$2^{n/2}$ tries."
  ],

  // ===== PHYSICS =====

  "units-measurement": [
    "$100$ cm = $1$ m by definition.",
    "$1$ km = $1000$ m, so $2.5$ km = $2500$ m.",
    "$1$ h = $60$ min = $3600$ s.",
    "$1$ mph $\\approx 0.447$ m/s. So $60 \\times 0.447 \\approx 26.8$ m/s.",
    "$5 \\times 10^3 = 5 \\cdot 1000 = 5000$.",
    "Same exponent: $3.5 \\times 10^{-3} + 0.12 \\times 10^{-3} = 3.62 \\times 10^{-3}$.",
    "Multiply coefficients, add exponents: $6 \\times 10^7$.",
    "Leading zeros don't count; trailing after decimal do. '0.00450' has $4, 5, 0$ — 3 sig figs.",
    "Force = mass × acceleration ⇒ kg·m/s².",
    "Energy = force × distance ⇒ kg·m²/s²."
  ],

  "kinematics": [
    "Use $v = v_0 + at$. Starting at rest, $v_0 = 0$. So $v = 0 + 3 \\cdot 4 = 12$ m/s.",
    "COMMON TRAP: thinking distance $= 12 \\times 4 = 48$ m. WRONG — the object isn't moving at $12$ m/s the whole time! It starts at $0$ and ends at $12$. Use AVERAGE speed: $(0 + 12)/2 = 6$ m/s, times $4$ s = $24$ m. Or use $x = \\tfrac{1}{2}at^2 = \\tfrac{1}{2}(3)(16) = 24$ m — both methods agree.",
    "Same trap: distance $\\neq 20 \\times t$ because the car DECELERATES. Average speed: $(20 + 0)/2 = 10$ m/s. Or use $v^2 = v_0^2 + 2ax$: $0 = 400 - 10x$, giving $x = 40$ m.",
    "Free fall from rest: $h = \\tfrac{1}{2}gt^2$. NOT $g \\times t$ — the speed isn't constant. Average speed is $(0 + g \\cdot 2)/2 = 9.8$ m/s, times $2$ s $= 19.6$ m. Or directly: $\\tfrac{1}{2}(9.8)(4) = 19.6$ m.",
    "Horizontal motion doesn't affect vertical free fall. Time in air = $3$ s. Vertical drop = $\\tfrac{1}{2}gt^2 = \\tfrac{1}{2}(9.8)(9) = 44.1$ m. NOT $g \\times t$ (speed grows from 0 to $g \\cdot 3$).",
    "Thrown up, gravity decelerates. At max height $v = 0$. Use $v^2 = v_0^2 - 2gh$: $0 = 400 - 19.6h$, so $h = 400/19.6 \\approx 20.4$ m.",
    "Time to reach the top: starting at $v_0 = 20$ m/s, decelerating at $g$, $v$ reaches zero when $0 = 20 - gt$, so $t = 20/9.8 \\approx 2.04$ s.",
    "Range formula for a projectile landing at launch height: $R = v_0^2 \\sin(2\\theta)/g$. At $\\theta = 45°$, $\\sin 90° = 1$ (max). $R = 400/9.8 \\approx 40.8$ m.",
    "Different speeds for equal time intervals — average is just the arithmetic mean: $(60 + 20)/2 = 40$ m/s. (For unequal times, weight by time spent at each speed.)",
    "Acceleration is the RATE OF CHANGE of velocity. Constant velocity = velocity not changing = zero acceleration. Newton's 1st law in math form."
  ],

  "vectors-physics": [
    "$\\sqrt{36 + 64} = 10$.",
    "Equal components: angle $45°$.",
    "$F_x = F\\cos 60° = 20 \\cdot 0.5 = 10$ N.",
    "Add components: $\\langle 1, 1 \\rangle$.",
    "$\\sqrt 2$ — diagonal of unit square.",
    "Magnitude is $5$; divide by 5: $\\langle 0.6, 0.8 \\rangle$.",
    "$\\vec A - \\vec B = \\langle 5-2, 1-(-3) \\rangle = \\langle 3, 4 \\rangle$.",
    "Equilibrium: forces sum to zero.",
    "Opposite equal forces cancel.",
    "$\\sqrt{5^2 + 5^2} = 5\\sqrt 2$."
  ],

  "newtons-laws": [
    "$F = ma = 2 \\cdot 3 = 6$ N.",
    "$m = F/a = 20/4 = 5$ kg.",
    "No acceleration ⇒ no net force (Newton I).",
    "$W = mg = 10 \\cdot 9.8 = 98$ N.",
    "$N = mg = 5 \\cdot 9.8 = 49$ N (horizontal surface).",
    "$f_{s,\\max} = \\mu_s N = 0.4 \\cdot 50 = 20$ N.",
    "Newton's third law: wall pushes back with equal force.",
    "On smooth incline: $a = g\\sin\\theta$. At $30°$: $a = g/2$.",
    "Whole system gets pulled. Tension = $ma = 2 \\cdot 3 = 6$ N.",
    "Combined mass $10$ kg, $F = 30$ N: $a = 3$ m/s²."
  ],

  "momentum-impulse": [
    "$p = mv = 5 \\cdot 4 = 20$ kg·m/s.",
    "Impulse magnitude = $|\\Delta p| = mv$.",
    "Equal masses elastic: velocities exchange. Each leaves at the opposite speed.",
    "Combined mass $\\approx 2$ kg, momentum $0.01 \\cdot 400 = 4$ kg·m/s. Speed $\\approx 4/2.01 \\approx 1.99$ m/s.",
    "Impulse has units of momentum: N·s = kg·m/s.",
    "Gun momentum = bullet momentum: $50 \\cdot v = 0.005 \\cdot 300$, so $v = 0.03$ m/s.",
    "Definition of impulse.",
    "Conservation of momentum: closed system.",
    "Elastic: no heat, no sound, perfectly bouncy.",
    "Without external forces, CoM moves at constant velocity."
  ],

  "energy-work": [
    "$KE = \\tfrac{1}{2} m v^2 = \\tfrac{1}{2} \\cdot 2 \\cdot 100 = 100$ J.",
    "$PE = mgh = 3 \\cdot 9.8 \\cdot 5 = 147$ J.",
    "$v = \\sqrt{2gh} = \\sqrt{392} \\approx 19.8$ m/s.",
    "$W = Fd = mg h = 1 \\cdot 9.8 \\cdot 10 = 98$ J.",
    "Friction opposite to motion: $\\cos 180° = -1$.",
    "$P \\times t = 100 \\cdot 3600 = 360000$ J.",
    "$1$ J = $1$ N·m.",
    "$1$ kWh = $1000$ W × $3600$ s = $3.6 \\times 10^6$ J.",
    "$PE = \\tfrac{1}{2} k x^2 = \\tfrac{1}{2} \\cdot 200 \\cdot 0.01 = 1$ J.",
    "$\\eta = W/Q_h = 250/1000 = 25\\%$."
  ],

  "circular-gravitation": [
    "Period $= $ circumference / speed.",
    "Centripetal means 'center-seeking'. Without an inward force, the object would fly off in a straight line (Newton's 1st law).",
    "$a_c = v^2/r = 16/2 = 8$ m/s².",
    "Banked road: $\\tan\\theta = v^2/(rg)$. $400/(100 \\cdot 9.8) \\approx 0.408$, $\\theta \\approx 22.2°$.",
    "Set $\\tfrac{1}{2}mv^2 = GMm/r$ ⇒ $v_{esc} = \\sqrt{2GM/r}$.",
    "Kepler's third law.",
    "Inside uniform sphere: only mass at radius $\\leq r$ matters; gives linear $g$.",
    "$F = mg, a = F/m = g$. Mass cancels.",
    "Geostationary: same period as Earth's rotation.",
    "Inverse-square: distance $\\times 2$ ⇒ force $\\div 4$."
  ],

  "shm": [
    "$\\omega = 10$ rad/s, $f = \\omega/(2\\pi) = 5/\\pi$ Hz.",
    "$T = 1/f = 1/2 = 0.5$ s.",
    "Small angles only — period independent of amplitude.",
    "At equilibrium: all energy kinetic ⇒ max speed.",
    "At turning points: all energy potential, momentarily stationary.",
    "$T = 2\\pi\\sqrt{m/k}$.",
    "Critical damping when $\\gamma = \\omega_0$.",
    "Resonance at natural frequency $\\omega_0$.",
    "Total energy is constant (conservation).",
    "Velocity is derivative of position — $90°$ ahead in phase."
  ],

  "rotational": [
    "$360° = 2\\pi$ rad.",
    "$\\omega = 2\\pi/T = 2\\pi$ rad/s.",
    "Ring: all mass at radius $R$: $I = MR^2$.",
    "Solid disk: $I = \\tfrac{1}{2} MR^2$ (mass distributed in).",
    "Thin rod about center: $I = \\tfrac{1}{12} ML^2$.",
    "$\\tau = I\\alpha$ — rotational Newton II.",
    "$L = I\\omega$.",
    "No external torque ⇒ angular momentum conserved.",
    "Rolling without slipping: $v = \\omega R$.",
    "Parallel axis: $I = I_{cm} + Md^2$."
  ],

  "fluids": [
    "Sea level atmospheric pressure $\\approx 101$ kPa.",
    "Water: $1000$ kg/m³ by definition (at 4°C).",
    "Archimedes: floating ⇔ buoyancy = weight.",
    "$1$ atm = $101325$ Pa.",
    "Manometer compares pressure to atmospheric.",
    "Pascal: pressure transmits undiminished (hydraulics).",
    "Mercury density 13.6× water.",
    "Viscosity: Pa·s = kg/(m·s).",
    "Reynolds number compares inertial to viscous forces.",
    "Lift = Bernoulli effect + downwash (Newton III)."
  ],

  "kinetic-theory": [
    "Each quadratic DOF: $\\tfrac{1}{2} k_B T$.",
    "Diatomic: 3 trans + 2 rot = 5 DOF; $\\tfrac{5}{2} k_B T$.",
    "Maxwell-Boltzmann peaks at most probable speed $v_{mp} = \\sqrt{2k_B T/m}$.",
    "RMS > avg > most probable (always).",
    "$k_B \\approx 1.38 \\times 10^{-23}$ J/K.",
    "Avogadro: $N_A \\approx 6.02 \\times 10^{23}$.",
    "$R = N_A k_B = 8.314$ J/(mol·K).",
    "Sound speed in gas: $\\propto \\sqrt{T/M}$.",
    "Monoatomic: $C_V = \\tfrac{3}{2} R$.",
    "$\\gamma = C_p/C_V = 5/3$ for monoatomic."
  ],

  "thermodynamics": [
    "$\\eta = 1 - T_c/T_h = 1 - 300/500 = 40\\%$.",
    "$\\Delta S = Q/T$ for reversible isothermal.",
    "Adiabatic: insulated, no heat exchange.",
    "Isobaric: constant pressure, $W = P\\Delta V$.",
    "Isochoric: constant volume, no volume change ⇒ no $PdV$ work.",
    "Total entropy never decreases (closed/isolated systems).",
    "Third law: $S \\to 0$ as $T \\to 0$ (perfect crystal).",
    "Refrigerator COP = $Q_c/W$ — heat removed per work input.",
    "$C_p > C_V$ because constant-pressure heating also does expansion work.",
    "Boltzmann's tomb has $S = k_B \\ln W$ engraved on it."
  ],

  "waves": [
    "Speed of sound in air: $\\approx 343$ m/s at $20°$C.",
    "$c \\approx 3 \\times 10^8$ m/s, the universal speed limit.",
    "$f = 1/T$: $1$ s period ⇒ $1$ Hz.",
    "$T = 1/f = 1/50 = 0.02$ s.",
    "$\\lambda = v/f = 343/440 \\approx 0.78$ m.",
    "Standing wave nodes are $\\lambda/2$ apart.",
    "Beat frequency = difference: $|443 - 440| = 3$ Hz.",
    "Receding source ⇒ longer wavelength, lower frequency.",
    "Intensity $\\propto$ amplitude².",
    "$10$ dB = factor of $10$ in intensity (or 2 in amplitude)."
  ],

  "optics-geometric": [
    "Vacuum: $n = 1$ exactly.",
    "Water: $n \\approx 1.33$.",
    "Law of reflection.",
    "Convex (converging) lens focuses parallel rays.",
    "Concave mirror: converging.",
    "Negative $d_i$: image on same side as object — virtual.",
    "Negative magnification: image is upside down.",
    "$P = 1/f = 1/0.5 = 2$ diopters.",
    "Snell: $\\sin\\theta_2 = 2 \\sin 30° = 1$, so $\\theta_2 = 90°$ — grazing.",
    "Mirror equation has the same form as the thin-lens equation."
  ],

  "optics-wave": [
    "Constructive interference: $\\Delta = m\\lambda$.",
    "Destructive: $\\Delta = (m + 1/2)\\lambda$.",
    "Young's experiment: $\\Delta y = \\lambda L/d$.",
    "Grating: $d\\sin\\theta = m\\lambda$.",
    "Resolution $\\propto Nm$ — more slits, narrower peaks.",
    "Crossed polarizers (90°): $\\cos^2(90°) = 0$.",
    "Unpolarized through polarizer: $I_0/2$ (averaging over angles).",
    "Bragg's law for X-ray crystallography.",
    "Coherent light = stable phase = stable interference.",
    "Blue scatters more: Rayleigh $\\propto 1/\\lambda^4$."
  ],

  "electrostatics": [
    "$k = 1/(4\\pi\\varepsilon_0)$.",
    "$\\varepsilon_0 = 8.85 \\times 10^{-12}$ F/m.",
    "Conductor at equilibrium: $\\vec E = 0$ inside.",
    "Infinite line: $E = \\lambda/(2\\pi\\varepsilon_0 r)$.",
    "Parallel plates with surface density $\\sigma$: $E = \\sigma/\\varepsilon_0$ between.",
    "Parallel-plate $C = \\varepsilon_0 A/d$.",
    "$U = \\tfrac{1}{2} CV^2$ — stored energy.",
    "Series capacitors: $1/C = \\sum 1/C_i$.",
    "Parallel capacitors: $C = \\sum C_i$.",
    "Equipotentials perpendicular to $\\vec E$ (E points down potential)."
  ],

  "electric-circuits": [
    "$V = IR = 5 \\cdot 0.4 = 2$ V.",
    "$\\frac{1}{R} = \\frac{1}{4} + \\frac{1}{6} = \\frac{5}{12}$, so $R = 12/5 = 2.4$ Ω.",
    "Two equal $R$ in parallel: $R/2$.",
    "$n$ equal $R$ in series: $nR$.",
    "Real battery: $V_T = \\varepsilon - Ir$.",
    "KCL at a node: sum in = sum out (charge conservation).",
    "KVL around loop: sum of voltages = 0 (energy conservation).",
    "Energy = power × time = $V \\cdot I \\cdot t$.",
    "Conductance = $1/R$, units siemens.",
    "RC time constant $= RC$."
  ],

  "magnetism-induction": [
    "$F = BIL\\sin\\theta = BIL$ when perpendicular.",
    "Lenz's law: induced current opposes the change.",
    "$T = 2\\pi m/(qB)$.",
    "Magnetic flux: 1 Wb = 1 T·m².",
    "Long straight wire: $B = \\mu_0 I/(2\\pi r)$.",
    "Parallel wires: same direction ⇒ attract; opposite ⇒ repel.",
    "Faraday: induced EMF in volts.",
    "$U_L = \\tfrac{1}{2} L I^2$ stored in inductor.",
    "$\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A.",
    "Hall effect reveals sign and density of charge carriers."
  ],

  "ac-circuits": [
    "$V_{rms} = V_0/\\sqrt 2$.",
    "$X_C = 1/(\\omega C)$.",
    "At resonance: $X_L = X_C$, so $Z = R$ (minimum).",
    "Quality factor $Q = \\omega_0 L/R$.",
    "Real power $= V_{rms} I_{rms} \\cos\\phi$.",
    "RC: capacitor delays voltage, current leads.",
    "RL: inductor delays current, current lags.",
    "Transformer: $V_2/V_1 = N_2/N_1$.",
    "Apparent power in VA (volt-amperes).",
    "3-phase delivers constant total power."
  ],

  "maxwell-em": [
    "No magnetic monopoles ⇒ $\\nabla \\cdot \\vec B = 0$.",
    "$\\vec E$ sourced by charges and changing $\\vec B$.",
    "$\\vec B$ sourced by currents and changing $\\vec E$.",
    "EM waves travel at $c$ in vacuum.",
    "Impedance of free space: $\\sqrt{\\mu_0/\\varepsilon_0} \\approx 377$ Ω.",
    "$\\lambda = c/f = 3 \\times 10^8/10^9 = 0.3$ m = $30$ cm.",
    "Absorbed: $P = I/c$; reflected: $P = 2I/c$.",
    "Plane wave: $\\vec E, \\vec B, \\vec k$ mutually perpendicular.",
    "Energy density: $u = \\tfrac{1}{2}\\varepsilon_0 E^2 + B^2/(2\\mu_0)$.",
    "Vacuum is non-dispersive: $v_g = v_p = c$."
  ],

  "special-relativity": [
    "Postulates: physical laws same in all inertial frames; $c$ is invariant.",
    "$\\gamma = 1/\\sqrt{1 - 0.64} = 1/0.6 = 5/3$.",
    "Relativistic $p = \\gamma m v$.",
    "$E_{total} = \\gamma m c^2$.",
    "Invariant: $E^2 - (pc)^2 = (mc^2)^2$.",
    "Velocity addition: $u' = (u + v)/(1 + uv/c^2)$.",
    "Spacetime interval: $ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2$.",
    "Twin paradox: only the accelerating twin is younger.",
    "Photons travel at $c$ ⇒ rest mass is zero.",
    "Minkowski signature: $(-, +, +, +)$ (or $(+, -, -, -)$ in some conventions)."
  ],

  "general-relativity": [
    "$G_{\\mu\\nu} = 8\\pi G T_{\\mu\\nu}/c^4$.",
    "$r_s = 2GM/c^2$.",
    "Earth's $r_s \\approx 9$ mm — Earth would have to compress to that to become a black hole.",
    "$\\Lambda$ is the cosmological constant.",
    "Friedmann equations govern the expansion rate.",
    "$v = H_0 d$.",
    "$H_0 \\approx 70$ km/s/Mpc.",
    "Mercury perihelion, light bending, GPS — all confirm GR.",
    "Gravitational waves are tensor modes — quadrupole, not dipole.",
    "Einstein predicted them in 1916; LIGO detected in 2015."
  ],

  "lagrangian-hamiltonian": [
    "Generalized momentum: $p = \\partial L/\\partial \\dot q$.",
    "Cyclic coordinate: doesn't appear in $L$ explicitly ⇒ conjugate momentum conserved.",
    "Noether: symmetry ⇒ conservation law.",
    "Translation invariance ⇒ momentum conserved.",
    "Rotational invariance ⇒ angular momentum conserved.",
    "Time-translation invariance ⇒ energy conserved.",
    "$\\{q, p\\} = 1$ — canonical Poisson bracket.",
    "$N$ particles in 3D: $6N$ phase-space dimensions ($3N$ positions + $3N$ momenta).",
    "Liouville's theorem: phase-space volume preserved.",
    "Action: $S = \\int L\\,dt$ — the variational principle."
  ],

  "statistical-mechanics": [
    "Canonical ensemble fixes $N, V, T$.",
    "Microcanonical: fixed $N, V, E$.",
    "Grand canonical: fixed $\\mu, V, T$.",
    "Fermi-Dirac: $1/(e^{(E-\\mu)/kT} + 1)$.",
    "Bose-Einstein: $1/(e^{(E-\\mu)/kT} - 1)$.",
    "Classical/high-$T$ limit: Maxwell-Boltzmann.",
    "$F = -k_B T \\ln Z$.",
    "Monoatomic ideal gas: $\\langle E \\rangle = \\tfrac{3}{2} N k_B T$.",
    "Equipartition: $\\tfrac{1}{2} k_B T$ per quadratic DOF.",
    "$C_V = \\tfrac{3}{2} N k_B$ for monoatomic ideal."
  ],

  "qm-foundations": [
    "$\\hbar \\approx 1.055 \\times 10^{-34}$ J·s.",
    "Stationary states satisfy $\\hat H \\psi = E \\psi$.",
    "$|\\psi|^2$ is the probability density.",
    "Schrödinger time-dependent: $i\\hbar \\dot\\psi = \\hat H \\psi$.",
    "Hermitian operators have real eigenvalues.",
    "Normalized state: $\\langle \\psi | \\psi \\rangle = 1$.",
    "Stationary state: $\\psi(t) = \\psi(0) e^{-iEt/\\hbar}$.",
    "Position operator: just multiply by $x$.",
    "$\\hat p = -i\\hbar \\partial/\\partial x$.",
    "$\\hat H = i\\hbar \\partial/\\partial t$ in Schrödinger picture."
  ],

  "qm-1d": [
    "$E_1 = \\pi^2 \\hbar^2/(2mL^2)$.",
    "$E_0 = \\hbar\\omega/2$ — zero-point energy of HO.",
    "Equally spaced HO levels: spacing $\\hbar\\omega$.",
    "All HO levels separated by $\\hbar\\omega$.",
    "$n$-th excited state has $n$ nodes.",
    "Symmetric potential: even/odd alternating parity. Ground state is even.",
    "Wider barrier ⇒ exponential decrease in tunneling probability.",
    "$\\psi$ and $\\psi'$ must be continuous at smooth potentials.",
    "Quantum systems can't sit perfectly at rest — uncertainty forbids.",
    "Bound: normalizable. Scattering: not normalizable (continuous spectrum)."
  ],

  "atomic-physics": [
    "$13.6$ eV — H ionization energy.",
    "$n, \\ell, m, m_s$ label all atomic electron states.",
    "Pauli: no two electrons share all four quantum numbers.",
    "3p: $\\ell = 1$, $2(2\\ell + 1) = 6$ electrons max.",
    "$n = 2$ shell: $2 \\cdot 4 = 8$ electrons (s² + p⁶).",
    "Fine structure: spin-orbit + relativistic corrections.",
    "Zeeman: external $B$ field splits levels.",
    "Stern-Gerlach showed spin quantization directly.",
    "Stark: external $E$ field splits levels.",
    "Hund's rule: maximize spin in ground state."
  ],

  "solid-state": [
    "FCC: each atom contacts $12$ neighbors. Packing fraction $\\approx 0.74$.",
    "BCC: $8$ nearest neighbors at body corners.",
    "Metals have partially filled bands ⇒ conduction.",
    "Large gap ⇒ no thermally-induced carriers ⇒ insulator.",
    "Semiconductor at $T = 0$: no carriers, acts insulating.",
    "n-type: donors add electrons.",
    "p-type: acceptors add holes (missing electrons).",
    "Diode = p-n junction.",
    "Linear-in-$T$ specific heat at low $T$: from electrons.",
    "Acoustic phonon dispersion linear at small $q$: sound waves."
  ],

  "nuclear": [
    "Strong force range $\\sim$ fm.",
    "Alpha = He-4 nucleus (2p, 2n).",
    "Beta⁻: $n \\to p + e^- + \\bar\\nu_e$.",
    "Iron-56: most tightly bound.",
    "$E = (\\Delta m) c^2$.",
    "C-14 half-life: $\\approx 5730$ years (basis of carbon dating).",
    "Magic numbers: filled nuclear shells.",
    "Sun's pp chain dominates at solar core temperatures.",
    "Free neutron mean lifetime $\\sim 880$ s.",
    "Positive Q ⇒ energy released (exothermic)."
  ],

  "particle-physics": [
    "Proton: u + u + d.",
    "Neutron: u + d + d.",
    "Photon is massless.",
    "Gluons mediate strong force.",
    "Three colors: red, green, blue (and their anti-colors).",
    "Electron antiparticle is positron.",
    "Beta decay conserves lepton number.",
    "Strong coupling decreases at high energy: asymptotic freedom.",
    "Higgs mechanism: gauge bosons + fermions acquire mass.",
    "CKM matrix: quark generation mixing."
  ],

  "astrophysics-cosmology": [
    "$L_\\odot \\approx 3.8 \\times 10^{26}$ W.",
    "$R_\\odot \\approx 7 \\times 10^8$ m.",
    "$1$ AU $\\approx 1.5 \\times 10^{11}$ m.",
    "$1$ ly $\\approx 9.46 \\times 10^{15}$ m.",
    "Universe age: $\\approx 13.8$ Gyr.",
    "CMB temperature: $\\approx 2.725$ K.",
    "Dark matter: $\\sim 27\\%$ of mass-energy.",
    "Dark energy: $\\sim 68\\%$.",
    "$r_s$ for Sun: $\\approx 3$ km.",
    "Chandrasekhar: $\\approx 1.4 M_\\odot$."
  ],

  "plasma-physics": [
    "Plasma is the fourth state of matter (ionized gas).",
    "Charge neutrality on scale $\\lambda_D$.",
    "Tokamak: toroidal magnetic confinement.",
    "Inertial confinement: laser-driven implosion.",
    "Fusion plasma density $\\sim 10^{20}$ m⁻³.",
    "Required temperature $\\sim 10^8$ K for D-T fusion.",
    "Alfvén waves propagate along magnetic field lines.",
    "Larmor radius: $r_L = mv_\\perp/(qB)$.",
    "ITER aims to achieve $Q > 10$ fusion energy gain.",
    "Cold vs hot plasma: defined by temperature regime."
  ],

  "fluid-dynamics": [
    "Incompressible: $\\nabla \\cdot \\vec v = 0$.",
    "Bernoulli along streamline (inviscid).",
    "Pipe flow becomes turbulent above $Re \\approx 2300$.",
    "Boundary layer: $\\delta \\sim \\sqrt{\\nu x/U}$.",
    "3D turbulence: energy cascades from large to small.",
    "Kolmogorov scale: $\\eta = (\\nu^3/\\epsilon)^{1/4}$.",
    "Drag coefficient: $C_D = F_D/(\\tfrac{1}{2}\\rho v^2 A)$.",
    "Lift on wing requires circulation (Kutta-Joukowski).",
    "Mach number: $M = v/c_s$.",
    "$M = 1$: sound barrier."
  ],

  "continuum-elasticity": [
    "$1$ Pa = $1$ N/m².",
    "Shear modulus: $G$.",
    "Poisson's ratio range: $-1$ to $1/2$.",
    "Yield stress: limit of elastic behavior.",
    "Hooke's law: stress proportional to strain.",
    "Tensile (pulling) vs compressive (pushing): opposite sign convention.",
    "Stress tensor: rank-2 (force per area, with two directions).",
    "Plane stress: thin sheet, $\\sigma_{zz} = 0$.",
    "Wave speed: $v = \\sqrt{E/\\rho}$.",
    "Euler buckling: $P_{cr} = \\pi^2 EI/L^2$."
  ],

  "central-force": [
    "Kepler I: orbits are ellipses.",
    "Circle: $e = 0$.",
    "$e > 1$: hyperbolic orbit (escape).",
    "Earth's eccentricity: $\\approx 0.017$ (nearly circular).",
    "Bertrand: only $1/r$ and $r^2$ give closed orbits.",
    "Perihelion: closest approach (planet/star).",
    "Aphelion: farthest distance.",
    "Mercury's extra perihelion advance: classic GR prediction.",
    "$V_{eff}$ minimum: stable circular orbit.",
    "Virial: $\\langle T \\rangle = -\\tfrac{1}{2}\\langle V \\rangle$ for $1/r$."
  ],

  "nonlinear-chaos-physics": [
    "Sensitive dependence on initial conditions = chaos.",
    "Feigenbaum constant: $\\delta \\approx 4.669$.",
    "Strange attractors: fractal dimension.",
    "Hamiltonian chaos: phase volume conserved (Liouville).",
    "Lorenz: convection model that birthed chaos theory.",
    "KAM tori: persistence of regular motion under small perturbations.",
    "Period-doubling is a universal route to chaos.",
    "Self-similarity common in strange attractors.",
    "Poincaré-Bendixson: 2D smooth flows cannot be chaotic.",
    "Weather prediction limited by Lyapunov time ($\\sim 2$ weeks)."
  ],

  "angular-momentum-spin": [
    "$[L_x, L_y] = i\\hbar L_z$ — angular momentum algebra.",
    "Total $\\vec J = \\vec L + \\vec S$.",
    "Photon: spin 1.",
    "Electron: spin $1/2$.",
    "Spherical harmonics: angular eigenfunctions of $L^2$.",
    "$L_\\pm = L_x \\pm i L_y$ — ladder operators.",
    "Raise $m$ by 1: $L_+ |\\ell, m\\rangle = \\hbar\\sqrt{\\ell(\\ell+1) - m(m+1)} |\\ell, m+1\\rangle$.",
    "Clebsch-Gordan: how to combine two angular momenta.",
    "$j_1 \\otimes j_2 = |j_1 - j_2| \\oplus \\ldots \\oplus j_1 + j_2$.",
    "Wigner-Eckart: separates geometry from physics."
  ],

  "qm-3d-hydrogen": [
    "Bohr radius: $a_0 \\approx 5.29 \\times 10^{-11}$ m.",
    "Quantum numbers: $n, \\ell, m, m_s$.",
    "$\\ell$ ranges from 0 to $n - 1$.",
    "In pure H: same $n$ ⇒ same energy (degenerate).",
    "Fine structure splits $2s$ and $2p$.",
    "Spin-orbit: $\\vec L \\cdot \\vec S$.",
    "Lamb shift: QED radiative corrections.",
    "Hyperfine: nuclear spin coupling.",
    "Electric dipole: $\\Delta\\ell = \\pm 1$.",
    "Centrifugal barrier: $\\ell(\\ell+1)\\hbar^2/(2mr^2)$."
  ],

  "perturbation-theory": [
    "Small perturbation parameter $\\lambda$.",
    "Second-order energy: sum over other states.",
    "H atom in $\\vec E$: quadratic Stark (ground state).",
    "H atom in $\\vec B$: linear Zeeman.",
    "Harmonic perturbation ⇒ Rabi-like oscillation.",
    "Adiabatic: slow change keeps state in instantaneous eigenstate.",
    "Sudden: wavefunction stays put while Hamiltonian jumps.",
    "Variational: upper bound on ground state.",
    "Brillouin-Wigner: self-consistent denominators.",
    "Perturbation series usually asymptotic, not convergent."
  ],

  "identical-particles": [
    "Half-integer spin: fermions.",
    "Integer spin: bosons.",
    "Spin-statistics: fermions antisym, bosons sym.",
    "Pauli exclusion ⇒ shell structure ⇒ periodic table.",
    "BEC: macroscopic occupation of ground state.",
    "Fermi-Dirac for fermions, Bose-Einstein for bosons.",
    "Degeneracy pressure supports white dwarfs/neutron stars.",
    "Helium singlet (lower) vs triplet — exchange energy.",
    "Quantum particles only distinguishable by state.",
    "Cooper pairs are bosonic composites of fermions."
  ],

  "scattering-theory": [
    "Born series converges for weak potentials.",
    "Low-energy: only $\\ell = 0$ (s-wave) matters for short-range potentials.",
    "Hard sphere: $\\sigma = 4\\pi a^2$ at low energy.",
    "Resonance: phase shift through $\\pi/2$ rapidly.",
    "Rutherford formula: Coulomb cross section.",
    "$d\\sigma/d\\Omega$: m²/sr.",
    "Amplitude $f(\\theta)$: meters.",
    "Identical particles: symmetrize/antisymmetrize amplitude.",
    "$\\lambda = 1/(n\\sigma)$.",
    "Inelastic: changes internal state."
  ],

  "density-matrices": [
    "$\\rho$ is Hermitian.",
    "$\\rho$ is positive semi-definite.",
    "$\\text{tr}(\\rho) = 1$.",
    "Pure ⇔ $\\rho^2 = \\rho$ ⇔ $\\text{tr}(\\rho^2) = 1$.",
    "Decoherence: off-diagonal elements decay.",
    "Von Neumann entropy: $-\\text{tr}(\\rho \\ln \\rho)$.",
    "Maximally mixed: $I/n$.",
    "Schmidt decomposition for bipartite pure states.",
    "$T_2 \\leq 2 T_1$ — decoherence at most twice as fast as relaxation.",
    "Master equation = evolution of density matrix."
  ],

  "path-integrals": [
    "Classical limit emerges as $\\hbar \\to 0$.",
    "Action has units of $\\hbar$.",
    "Wick rotation: $t \\to -i\\tau$ converts to Euclidean.",
    "Euclidean PI gives partition function.",
    "Lattice gauge theory uses discretized PI.",
    "Sum over all paths between endpoints.",
    "Schrödinger derivable from short-time PI.",
    "$\\mathcal{D}x$ measure formal — defined by lattice limit.",
    "Each Feynman diagram = perturbative term.",
    "Renormalization handles loop divergences."
  ],

  "quantum-information": [
    "$n$ dimensions = $\\log_2 n$ qubits.",
    "Hadamard creates superposition.",
    "Bell state has entanglement entropy $\\ln 2$ (1 bit).",
    "Teleportation: Bell pair + 2 classical bits.",
    "Quantum supremacy: Sycamore (Google, 2019).",
    "Shor factors in polynomial time.",
    "Grover: $O(\\sqrt N)$ search.",
    "QEC: spread quantum info redundantly.",
    "Bell inequality violation rules out local realism.",
    "BB84: pioneering QKD protocol."
  ],

  "symmetries-noether": [
    "Continuous symmetry ⇔ conserved current.",
    "Discrete also: parities P, C, T.",
    "Lorentz invariance ⇒ $\\partial_\\mu T^{\\mu\\nu} = 0$.",
    "Spontaneous symmetry breaking: ground state breaks the symmetry.",
    "Higgs: massive $W^\\pm, Z$ from gauged broken symmetry.",
    "Global: rigid phase. Gauge: spacetime-dependent phase.",
    "$\\partial_\\mu j^\\mu = 0$ for conserved current.",
    "Action symmetric up to surface terms.",
    "QCD color symmetry: $SU(3)$.",
    "Approximate symmetries ⇒ approximate conservation."
  ],

  "classical-field-theory": [
    "Field has DOF per spacetime point.",
    "$[\\mathcal{L}] = (\\text{mass})^4$ in natural units.",
    "Action: $\\int d^4 x \\mathcal{L}$.",
    "Stress-energy tensor: $T^{\\mu\\nu}$.",
    "Gauge potential: $A_\\mu$.",
    "$F_{\\mu\\nu} = \\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu$.",
    "Dirac spinor: spin-1/2 matter.",
    "Vector field: spin-1 (photon, $W, Z$).",
    "Higgs is a scalar.",
    "Graviton: spin-2."
  ],

  "qft": [
    "$\\alpha \\approx 1/137$ at low energy.",
    "Photons: quanta of EM field.",
    "Antiparticles from negative-frequency modes.",
    "Vacuum has zero-point fluctuations.",
    "Tree-level $e^- e^-$ scattering: two QED vertices.",
    "Casimir: difference of vacuum energies between configurations.",
    "Loop integrals naturally divergent; renormalization absorbs into bare parameters.",
    "QCD asymptotically free at high energy.",
    "Wightman axioms: rigorous QFT framework.",
    "Spin-statistics theorem proved in Lorentz-invariant QFT."
  ],

  "renormalization": [
    "$\\Lambda$: UV cutoff.",
    "Dim. reg: $D = 4 - \\varepsilon$.",
    "Renormalizable: finitely many parameters absorb divergences.",
    "QED is renormalizable.",
    "Gravity not perturbatively renormalizable.",
    "Wilsonian RG flow toward fixed points.",
    "EFT valid below cutoff scale.",
    "SM is a renormalizable EFT.",
    "Asymptotic safety: possible UV fixed point for gravity.",
    "Mass renormalization: electron self-energy is divergent."
  ],

  "radiation-theory": [
    "Rayleigh $\\propto \\omega^4$: blue scatters more.",
    "Sunset: short wavelengths scattered out, longer reach you.",
    "Antenna radiates when currents oscillate.",
    "Cyclotron: non-relativistic, circular motion in $B$.",
    "Synchrotron at relativistic speed: forward-beamed.",
    "Bremsstrahlung: decelerating charge.",
    "Standard EM has no magnetic monopoles (so far).",
    "Abraham-Lorentz: radiation reaction $\\propto \\dot a$.",
    "Black-body radiation: quantum origin (Planck).",
    "Coulomb gauge: $\\nabla \\cdot \\vec A = 0$."
  ],

  "em-waves-matter": [
    "Vacuum: $n = 1$.",
    "Water: $n \\approx 1.33$.",
    "Denser medium: shorter wavelength.",
    "Denser medium: slower speed.",
    "Group velocity can exceed $c$ in anomalous dispersion — but no information.",
    "Plasma cutoff: below plasma frequency, EM waves reflect.",
    "Skin depth: $\\delta = \\sqrt{2/(\\mu\\sigma\\omega)}$.",
    "Brewster: reflected light fully polarized perpendicular to plane of incidence.",
    "Anisotropic media: permittivity is a tensor.",
    "Photonic crystals have optical band gaps."
  ],

  "lasers": [
    "Laser = Light Amplification by Stimulated Emission of Radiation.",
    "He-Ne: $632.8$ nm red.",
    "CO₂ laser: $10.6$ μm (mid-IR).",
    "Mode-locked: short pulses.",
    "Q-switched: high peak power pulses.",
    "Fabry-Pérot cavity defines longitudinal modes.",
    "Four-level systems achieve inversion more easily than three-level.",
    "Optical pumping: light or current injects energy.",
    "Diode lasers: p-n junction with population inversion.",
    "Narrow linewidth ⇒ high-resolution spectroscopy."
  ],

  "quantum-optics": [
    "Coherent state: Poissonian photon statistics ($\\sigma^2 = \\mu$).",
    "Number state: $\\sigma^2 = 0$.",
    "Thermal light: Bose-Einstein statistics.",
    "HBT measures $g^{(2)}$.",
    "Single-photon source: $g^{(2)}(0) = 0$.",
    "LIGO uses squeezed light to beat shot noise.",
    "OPO generates squeezed/entangled photons.",
    "Cavity QED: strong matter-light coupling.",
    "EIT: electromagnetically induced transparency.",
    "Boson sampling: candidate for quantum advantage."
  ],

  "amo": [
    "Sub-Doppler cooling below $T_D$ (Sisyphus mechanism).",
    "Recoil limit: $T_R = \\hbar^2 k^2/(m k_B)$.",
    "MOT: magneto-optical trap.",
    "Optical lattice: standing-wave laser interference.",
    "BEC first observed in 1995 (Cornell, Wieman, Ketterle).",
    "Cold atoms can pair via Feshbach resonance.",
    "Feshbach tunes $a_s$ via magnetic field.",
    "Atomic clocks: ultra-narrow optical transitions.",
    "Cs-133 hyperfine: defines the SI second since 1967.",
    "Rydberg atoms: huge size, strong interactions."
  ],

  "phase-transitions": [
    "Universality class: dimension + symmetry, not microscopic details.",
    "First-order: latent heat present.",
    "Second-order: no latent heat, continuous order parameter.",
    "Susceptibility diverges at $T_c$.",
    "Correlation length diverges at $T_c$ — long-range fluctuations.",
    "RG fixed point ↔ critical point.",
    "Ising upper critical dimension: 4.",
    "Liquid-gas critical: same universality class as 3D Ising.",
    "Mean field gives $\\beta = 1/2$ (often wrong below upper critical dim).",
    "Onsager solved 2D Ising exactly (1944)."
  ],

  "nonequilibrium-statmech": [
    "Boltzmann H-theorem: entropy non-decreasing.",
    "Onsager: $L_{ij} = L_{ji}$ (reciprocity).",
    "Drude: $\\sigma = ne^2\\tau/m$.",
    "Einstein: $D = \\mu k_B T$ (diffusion-mobility).",
    "Wiedemann-Franz: $\\kappa/(\\sigma T) = L_0$ (Lorenz number).",
    "Mean free path: $\\lambda$.",
    "Master equation: probability flow between states.",
    "Detailed balance ⇒ equilibrium.",
    "Fokker-Planck: PDE for probability density.",
    "Jarzynski: $\\langle e^{-\\beta W}\\rangle = e^{-\\beta \\Delta F}$."
  ],

  "superconductivity": [
    "Discovered by Onnes (1911).",
    "BCS theory: 1957.",
    "Cooper pair has charge $2e$.",
    "London penetration depth: $\\lambda_L \\sim 100$ nm.",
    "Type II: allows magnetic vortices.",
    "Cuprate $T_c$: above LN₂ temperature (77 K).",
    "Iron-based SC discovered in 2008.",
    "Meissner: magnet levitates above superconductor.",
    "SQUID: ultra-sensitive magnetometer.",
    "DC Josephson: zero-voltage supercurrent up to $I_c$."
  ],

  "quantum-hall-topological": [
    "FQHE $\\nu = 1/3$: Tsui-Stormer (1982 discovery).",
    "Anyons appear in FQHE.",
    "Topological insulator: insulating bulk + conducting edges.",
    "Quantum spin Hall: edge spin-momentum locked.",
    "Berry phase: holonomy in parameter space.",
    "$\\mathbb{Z}_2$ vs Chern: time-reversal symmetry.",
    "Topological order: ground-state degeneracy depends on genus.",
    "Majorana in topological superconductor.",
    "Weyl semimetal: linear band crossings in 3D.",
    "Topological-phases Nobel: 2016 (Thouless, Haldane, Kosterlitz)."
  ],

  "phonons": [
    "Acoustic and optical branches differ at $q \\to 0$.",
    "Acoustic branch: $\\omega \\to 0$ as $q \\to 0$.",
    "Optical branch: $\\omega$ finite at $q = 0$.",
    "Brillouin zone: Wigner-Seitz of reciprocal lattice.",
    "Phonons obey Bose-Einstein statistics.",
    "Phonon = quantum of vibration.",
    "Anharmonicity ⇒ thermal expansion.",
    "Umklapp: large-$q$ scattering with reciprocal lattice vector.",
    "Sound in steel: $\\sim 5000$ m/s.",
    "BCS Cooper pairs: phonon-mediated attraction."
  ],

  "stellar-evolution": [
    "Main sequence = H → He fusion.",
    "Sun age: $\\sim 4.6$ Gyr.",
    "Solar MS lifetime: $\\sim 10$ Gyr total.",
    "Higher mass ⇒ faster burning.",
    "Type II SN: core collapse of massive star.",
    "Type Ia: white-dwarf detonation at Chandrasekhar.",
    "Schönberg-Chandrasekhar: inert core mass limit.",
    "Helium flash at RGB tip (low mass).",
    "Brown dwarfs: $< 0.08 M_\\odot$, can't sustain H fusion.",
    "MS turnoff dates globular clusters."
  ],

  "stellar-nucleosynthesis": [
    "Helium: BBN + stars.",
    "Carbon: triple-alpha in red giants.",
    "Oxygen: alpha capture on carbon.",
    "s-process: slow neutron capture in AGB stars.",
    "Heaviest natural: uranium.",
    "Solar neutrino problem: solved by oscillations (Nobel 2015).",
    "Sun's energy: mostly pp chain.",
    "Gold: mostly r-process (NS mergers).",
    "BBN: H, He, traces of Li.",
    "'Metals' in astronomy: anything heavier than helium."
  ],

  "compact-objects": [
    "Electron degeneracy pressure supports WDs.",
    "Neutron degeneracy + strong force support NSs.",
    "TOV limit: $\\sim 2$–$3 M_\\odot$ for NS.",
    "Stellar BH: above $\\sim 3 M_\\odot$.",
    "Supermassive BH at galactic centers.",
    "Sgr A*: $\\sim 4 \\times 10^6 M_\\odot$.",
    "Pulsar = rotating neutron star with strong $\\vec B$.",
    "Magnetar: extreme magnetic field NS.",
    "BH no-hair: mass, charge, spin only (Kerr-Newman).",
    "Penrose process extracts rotational energy."
  ],

  "galactic-dynamics": [
    "MW DM fraction: majority of mass.",
    "Local Group: MW, Andromeda, Triangulum, satellites.",
    "Hubble sequence: spiral, elliptical, irregular.",
    "AGN: accreting supermassive BH.",
    "Tully-Fisher: $L \\propto v^4$ for spirals.",
    "Faber-Jackson: $L \\propto \\sigma^4$ for ellipticals.",
    "MOND: alternative to dark matter (modified gravity).",
    "Bullet Cluster: mass and light offset — favors DM.",
    "Globular clusters in galactic halo.",
    "Antennae: famous spiral merger."
  ],

  "bbn-cmb-inflation": [
    "BBN: $\\sim 3$ min after Big Bang.",
    "Recombination: $z \\sim 1100$, $T \\sim 3000$ K.",
    "CMB discovered 1965 by Penzias-Wilson.",
    "CMB anisotropy: $\\sim 10^{-5}$.",
    "Inflation solves horizon, flatness, monopole problems.",
    "Slow-roll: $\\epsilon, \\eta \\ll 1$ — quasi-de Sitter.",
    "Quantum fluctuations seed cosmic structure.",
    "Lithium problem: $^7$Li abundance discrepancy.",
    "Reionization: $z \\sim 6$–$10$.",
    "Sachs-Wolfe: large-scale CMB anisotropy from gravitational potential."
  ],

  "gravitational-waves": [
    "GWs travel at $c$.",
    "First direct detection: 2015 (GW150914).",
    "LIGO: Michelson interferometers, 4 km arms.",
    "GWs have two tensor polarizations ($+, \\times$).",
    "LIGO band: $\\sim 10$–$1000$ Hz.",
    "LISA targets millihertz (space).",
    "PTAs target nanohertz (supermassive BH binaries).",
    "GW170817: NS merger seen with EM counterparts.",
    "Stochastic background: inflation, cosmic strings, mergers.",
    "Nobel for GW detection: 2017."
  ],

  "high-energy-astrophysics": [
    "AGN luminosity up to $10^{47}$ erg/s.",
    "Blazar: jet pointed at observer.",
    "Long GRBs: collapsars (massive-star collapse).",
    "Short GRBs: compact mergers (e.g., NS-NS).",
    "UHECR origin likely extragalactic (AGN candidates).",
    "GZK cutoff: $\\sim 5 \\times 10^{19}$ eV.",
    "TeV gamma rays: pulsars, AGN, SNRs.",
    "X-ray binaries: NS or BH accretors.",
    "Active galaxies: accreting SMBH.",
    "IceCube: TeV–PeV neutrino detector."
  ],

  "math-methods-physics": [
    "Legendre on $[-1, 1]$ — angular part in spherical problems.",
    "Hermite in QM harmonic oscillator.",
    "Laguerre in H atom radial equation.",
    "Spherical harmonics on sphere.",
    "Sturm-Liouville: discrete real eigenvalues, orthogonal eigenfunctions.",
    "Method of images: replace boundary with image charge.",
    "Dimensional analysis: $n - k$ dimensionless groups.",
    "WKB: semiclassical $\\hbar \\to 0$ expansion.",
    "Variational: $E_0 \\leq \\langle\\psi|H|\\psi\\rangle/\\langle\\psi|\\psi\\rangle$.",
    "Laplace: $\\mathcal{L}\\{e^{at}\\} = 1/(s - a)$."
  ],

  "group-theory-physics": [
    "Equilateral triangle: $D_3$ symmetry (6 elements).",
    "Cube rotations: $S_4$ (24 elements).",
    "Crystallographic point groups in 3D: 32.",
    "Bravais lattices in 3D: 14.",
    "Space groups in 3D: 230.",
    "$SO(3)$ irreps: integer $\\ell$ (orbital).",
    "$SU(2)$ irreps: half-integer $j$ (allows spin).",
    "Standard Model gauge: $SU(3) \\times SU(2) \\times U(1)$.",
    "GUT example: $SU(5)$.",
    "Lorentz double cover: $SL(2, \\mathbb{C})$."
  ],

  "computational-physics": [
    "MC error: $\\sim \\sigma/\\sqrt N$, dimension-independent.",
    "Symplectic integrators preserve phase-space volume.",
    "RK4 error: $O(h^4)$.",
    "FFT complexity: $O(N \\log N)$.",
    "Lattice QCD computes hadron masses from first principles.",
    "Importance sampling reduces variance.",
    "Detailed balance: correct equilibrium sampling.",
    "Multigrid: $O(N)$ for elliptic PDEs.",
    "DFT: Density Functional Theory.",
    "Tensor networks for many-body QM."
  ],

  "soft-matter-biophysics": [
    "DNA persistence length: $\\sim 50$ nm.",
    "Worm-like chain: stiff polymer model.",
    "Flory: $\\nu \\approx 3/5$ in good solvent.",
    "$\\theta$-solvent: $\\nu = 1/2$ (ideal).",
    "Cell membrane: phospholipid bilayer.",
    "ATP energy: $\\sim 0.5$ eV $\\approx 20 k_B T$.",
    "Brownian ratchet: rectifies thermal noise into motion.",
    "Glass transition: kinetic freezing, not crystallization.",
    "Liquid crystals: orientational order without positional order.",
    "Active matter: microscopic energy injection."
  ]
};
