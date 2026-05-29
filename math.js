// Mathematics curriculum — basic to graduate-level.
// Each topic exports: worked examples + 10 practice tasks (with show-answer).
window.CONTENT = window.CONTENT || {};
window.CONTENT.math = [
  {
    id: "arithmetic-foundations",
    title: "Arithmetic Foundations",
    level: "basic",
    summary: "Order of operations, negatives, absolute value, prime factorization.",
    examples: [
      { title: "Example 1 — Order of operations", prompt: "Evaluate $3 + 4 \\times 2^2 - (5 - 1)$.", steps: [
        { label: "Parentheses", body: "$5 - 1 = 4$." },
        { label: "Exponent", body: "$2^2 = 4$." },
        { label: "Multiply", body: "$4 \\times 4 = 16$." },
        { label: "Add/subtract", body: "$3 + 16 - 4 = 15$." }
      ], answer: "$15$" },
      { title: "Example 2 — Working with negatives", prompt: "Compute $-7 - (-3) + (-5)$.", steps: [
        { label: "Subtract a negative", body: "$-7 + 3 = -4$." },
        { label: "Add a negative", body: "$-4 - 5 = -9$." }
      ], answer: "$-9$" },
      { title: "Example 3 — Absolute value equation", prompt: "Solve $|x - 4| = 7$.", steps: [
        { label: "Two cases", body: "$x - 4 = 7$ or $x - 4 = -7$." },
        { label: "Solve", body: "$x = 11$ or $x = -3$." }
      ], answer: "$x = 11$ or $x = -3$" },
      { title: "Example 4 — Prime factorization", prompt: "Factorize $84$.", steps: [
        { label: "Divide", body: "$84 = 2 \\times 42 = 2 \\times 2 \\times 21 = 2 \\times 2 \\times 3 \\times 7$." }
      ], answer: "$2^2 \\times 3 \\times 7$" }
    ],
    tasks: [
      { q: "Evaluate $6 + 3 \\times 4$.", a: "$18$" },
      { q: "Evaluate $(2 + 3)^2 - 10$.", a: "$15$" },
      { q: "Compute $-12 + 5 - (-3)$.", a: "$-4$" },
      { q: "Solve $|x| = 9$.", a: "$x = 9$ or $x = -9$" },
      { q: "Solve $|x + 2| = 5$.", a: "$x = 3$ or $x = -7$" },
      { q: "Factorize $90$.", a: "$2 \\times 3^2 \\times 5$" },
      { q: "Factorize $144$.", a: "$2^4 \\times 3^2$" },
      { q: "Find $\\gcd(48, 60)$.", a: "$12$" },
      { q: "Find $\\operatorname{lcm}(8, 12)$.", a: "$24$" },
      { q: "Evaluate $2^3 + 3^2 - 4 \\times 5$.", a: "$-3$" }
    ]
  },
  {
    id: "fractions-percentages",
    title: "Fractions & Percentages",
    level: "basic",
    summary: "Operations on fractions, percentage applications, ratios.",
    examples: [
      { title: "Example 1 — Add unlike fractions", prompt: "$\\frac{2}{3} + \\frac{1}{4}$.", steps: [
        { label: "LCD", body: "LCM$(3,4) = 12$." },
        { label: "Rewrite", body: "$\\frac{8}{12} + \\frac{3}{12}$." },
        { label: "Add", body: "$\\frac{11}{12}$." }
      ], answer: "$\\frac{11}{12}$" },
      { title: "Example 2 — Multiply fractions", prompt: "$\\frac{3}{4} \\times \\frac{8}{9}$.", steps: [
        { label: "Multiply", body: "$\\frac{24}{36} = \\frac{2}{3}$." }
      ], answer: "$\\frac{2}{3}$" },
      { title: "Example 3 — Percentage discount", prompt: "A $\\$80$ jacket at $25\\%$ off.", steps: [
        { label: "Discount", body: "$0.25 \\times 80 = 20$." },
        { label: "Subtract", body: "$80 - 20 = 60$." }
      ], answer: "$\\$60$" },
      { title: "Example 4 — Percent increase", prompt: "From $40$ to $46$.", steps: [
        { label: "Change", body: "$46 - 40 = 6$." },
        { label: "Divide", body: "$6/40 = 0.15 = 15\\%$." }
      ], answer: "$15\\%$" }
    ],
    tasks: [
      { q: "$\\frac{1}{2} + \\frac{1}{3}$", a: "$\\frac{5}{6}$" },
      { q: "$\\frac{5}{6} - \\frac{1}{4}$", a: "$\\frac{7}{12}$" },
      { q: "$\\frac{2}{5} \\times \\frac{10}{3}$", a: "$\\frac{4}{3}$" },
      { q: "$\\frac{7}{8} \\div \\frac{1}{4}$", a: "$\\frac{7}{2}$" },
      { q: "Express $\\frac{3}{8}$ as a percentage.", a: "$37.5\\%$" },
      { q: "Find $15\\%$ of $200$.", a: "$30$" },
      { q: "A price rose from $\\$50$ to $\\$65$. Percent increase?", a: "$30\\%$" },
      { q: "Simplify $\\frac{24}{36}$.", a: "$\\frac{2}{3}$" },
      { q: "Convert $0.625$ to a fraction.", a: "$\\frac{5}{8}$" },
      { q: "$\\$120$ after a $20\\%$ tip — total?", a: "$\\$144$" }
    ]
  },
  {
    id: "exponents-roots",
    title: "Exponents & Roots",
    level: "basic",
    summary: "Laws of exponents, negative exponents, simplifying radicals.",
    examples: [
      { title: "Example 1 — Product rule", prompt: "Simplify $x^3 \\cdot x^5$.", steps: [
        { label: "Add exponents", body: "$x^{3+5} = x^8$." }
      ], answer: "$x^8$" },
      { title: "Example 2 — Negative exponent", prompt: "Evaluate $2^{-3}$.", steps: [
        { label: "Reciprocal", body: "$2^{-3} = \\frac{1}{8}$." }
      ], answer: "$\\frac{1}{8}$" },
      { title: "Example 3 — Simplify radical", prompt: "$\\sqrt{72}$.", steps: [
        { label: "Factor", body: "$72 = 36 \\cdot 2$." },
        { label: "Split", body: "$6\\sqrt{2}$." }
      ], answer: "$6\\sqrt{2}$" },
      { title: "Example 4 — Rationalize", prompt: "$\\frac{5}{\\sqrt{3}}$.", steps: [
        { label: "Multiply", body: "$\\frac{5\\sqrt{3}}{3}$." }
      ], answer: "$\\frac{5\\sqrt{3}}{3}$" }
    ],
    tasks: [
      { q: "Simplify $a^4 \\cdot a^7$.", a: "$a^{11}$" },
      { q: "Simplify $\\frac{x^8}{x^3}$.", a: "$x^5$" },
      { q: "Evaluate $(2^3)^2$.", a: "$64$" },
      { q: "Evaluate $5^0$.", a: "$1$" },
      { q: "Evaluate $3^{-2}$.", a: "$\\frac{1}{9}$" },
      { q: "Simplify $\\sqrt{50}$.", a: "$5\\sqrt{2}$" },
      { q: "Simplify $\\sqrt[3]{27}$.", a: "$3$" },
      { q: "Simplify $\\sqrt{12} + \\sqrt{27}$.", a: "$5\\sqrt{3}$" },
      { q: "Rationalize $\\frac{2}{\\sqrt{5}}$.", a: "$\\frac{2\\sqrt{5}}{5}$" },
      { q: "Evaluate $16^{1/4}$.", a: "$2$" }
    ]
  },
  {
    id: "ratios-proportions",
    title: "Ratios & Proportions",
    level: "basic",
    summary: "Ratio scaling, direct/inverse proportion, and rate problems.",
    examples: [
      { title: "Example 1 — Scaling a ratio", prompt: "Divide $\\$240$ in ratio $3 : 5$.", steps: [
        { label: "Parts", body: "Total parts $= 8$, value $= 240/8 = 30$." },
        { label: "Each share", body: "$3 \\times 30 = 90$, $5 \\times 30 = 150$." }
      ], answer: "$\\$90$ and $\\$150$" },
      { title: "Example 2 — Direct proportion", prompt: "If $5$ kg costs $\\$12$, how much for $8$ kg?", steps: [
        { label: "Set up", body: "$\\frac{12}{5} = \\frac{x}{8}$." },
        { label: "Solve", body: "$x = \\frac{96}{5} = 19.2$." }
      ], answer: "$\\$19.20$" },
      { title: "Example 3 — Inverse proportion", prompt: "$6$ workers take $10$ days; $15$ workers take?", steps: [
        { label: "Work units", body: "$6 \\times 10 = 60$." },
        { label: "Divide", body: "$60/15 = 4$." }
      ], answer: "$4$ days" },
      { title: "Example 4 — Mixture problem", prompt: "Mix $4$ L of $30\\%$ acid with $6$ L of $50\\%$ acid. Final concentration?", steps: [
        { label: "Acid amounts", body: "$0.3(4) + 0.5(6) = 1.2 + 3 = 4.2$ L." },
        { label: "Divide", body: "$4.2/10 = 0.42$." }
      ], answer: "$42\\%$" }
    ],
    tasks: [
      { q: "Split $\\$140$ in ratio $2 : 5$.", a: "$\\$40$ and $\\$100$" },
      { q: "If $3 : 4 = 9 : x$, find $x$.", a: "$12$" },
      { q: "If $4$ L of paint covers $50$ m², how much covers $125$ m²?", a: "$10$ L" },
      { q: "$8$ workers finish in $6$ days. $4$ workers?", a: "$12$ days" },
      { q: "A car covers $180$ km in $3$ h. Speed?", a: "$60$ km/h" },
      { q: "Convert $72$ km/h to m/s.", a: "$20$ m/s" },
      { q: "$2$ L of $10\\%$ + $3$ L of $20\\%$ → concentration?", a: "$16\\%$" },
      { q: "If $y \\propto x$ and $y = 12$ when $x = 4$, find $y$ at $x = 7$.", a: "$21$" },
      { q: "If $y \\propto 1/x$ and $y = 5$ when $x = 8$, find $y$ at $x = 4$.", a: "$10$" },
      { q: "Map scale $1 : 50000$. $4$ cm on map = ? in km.", a: "$2$ km" }
    ]
  },
  {
    id: "linear-equations",
    title: "Linear Equations",
    level: "basic",
    summary: "Solving for an unknown by inverse operations.",
    examples: [
      { title: "Example 1 — Single variable", prompt: "$3x + 5 = 20$.", steps: [
        { label: "Subtract", body: "$3x = 15$." },
        { label: "Divide", body: "$x = 5$." }
      ], answer: "$x = 5$" },
      { title: "Example 2 — Both sides", prompt: "$4x - 7 = 2x + 9$.", steps: [
        { label: "Collect", body: "$2x = 16$." },
        { label: "Divide", body: "$x = 8$." }
      ], answer: "$x = 8$" },
      { title: "Example 3 — With fractions", prompt: "$\\frac{x}{3} + \\frac{1}{2} = \\frac{5}{6}$.", steps: [
        { label: "Multiply by 6", body: "$2x + 3 = 5$." },
        { label: "Solve", body: "$x = 1$." }
      ], answer: "$x = 1$" },
      { title: "Example 4 — Word problem", prompt: "Taxi: $\\$3.50$ + $\\$2$/mi. Fare $= \\$15.50$?", steps: [
        { label: "Setup", body: "$3.50 + 2m = 15.50 \\Rightarrow m = 6$." }
      ], answer: "$6$ miles" }
    ],
    tasks: [
      { q: "Solve $2x + 7 = 21$.", a: "$x = 7$" },
      { q: "Solve $5x - 4 = 3x + 8$.", a: "$x = 6$" },
      { q: "Solve $7 - 2x = 1$.", a: "$x = 3$" },
      { q: "Solve $\\frac{x}{4} = 9$.", a: "$x = 36$" },
      { q: "Solve $\\frac{x+1}{3} = 2$.", a: "$x = 5$" },
      { q: "Solve $3(x - 2) = 12$.", a: "$x = 6$" },
      { q: "Solve $5(2x + 1) = 35$.", a: "$x = 3$" },
      { q: "Solve $\\frac{x}{2} + \\frac{x}{3} = 5$.", a: "$x = 6$" },
      { q: "If $3x + 2y = 12$ and $x = 2$, find $y$.", a: "$y = 3$" },
      { q: "A number plus its triple is $40$. Find the number.", a: "$10$" }
    ]
  },
  {
    id: "inequalities",
    title: "Inequalities",
    level: "basic",
    summary: "Linear, compound, and absolute-value inequalities.",
    examples: [
      { title: "Example 1 — Linear", prompt: "Solve $3x - 5 \\leq 7$.", steps: [
        { label: "Add", body: "$3x \\leq 12$." },
        { label: "Divide", body: "$x \\leq 4$." }
      ], answer: "$x \\leq 4$" },
      { title: "Example 2 — Negative coefficient flips", prompt: "Solve $-2x + 6 > 0$.", steps: [
        { label: "Subtract", body: "$-2x > -6$." },
        { label: "Divide & flip", body: "$x < 3$." }
      ], answer: "$x < 3$" },
      { title: "Example 3 — Compound", prompt: "Solve $-3 < 2x + 1 \\leq 5$.", steps: [
        { label: "Subtract 1", body: "$-4 < 2x \\leq 4$." },
        { label: "Divide", body: "$-2 < x \\leq 2$." }
      ], answer: "$x \\in (-2, 2]$" },
      { title: "Example 4 — Absolute value", prompt: "Solve $|x - 3| < 5$.", steps: [
        { label: "Rewrite", body: "$-5 < x - 3 < 5$." },
        { label: "Add 3", body: "$-2 < x < 8$." }
      ], answer: "$x \\in (-2, 8)$" }
    ],
    tasks: [
      { q: "Solve $x + 4 > 9$.", a: "$x > 5$" },
      { q: "Solve $2x - 3 \\geq 7$.", a: "$x \\geq 5$" },
      { q: "Solve $-x \\leq 4$.", a: "$x \\geq -4$" },
      { q: "Solve $5 - 3x < 2$.", a: "$x > 1$" },
      { q: "Solve $0 \\leq 2x + 1 \\leq 9$.", a: "$x \\in [-\\tfrac{1}{2}, 4]$" },
      { q: "Solve $|x| \\leq 3$.", a: "$x \\in [-3, 3]$" },
      { q: "Solve $|x - 2| \\geq 4$.", a: "$x \\leq -2$ or $x \\geq 6$" },
      { q: "Solve $x^2 < 16$.", a: "$x \\in (-4, 4)$" },
      { q: "Solve $x^2 \\geq 25$.", a: "$x \\leq -5$ or $x \\geq 5$" },
      { q: "Solve $\\frac{x}{2} + 3 > 5$.", a: "$x > 4$" }
    ]
  },
  {
    id: "plane-geometry",
    title: "Plane Geometry",
    level: "basic",
    summary: "Angles, triangles, circles, area, perimeter, Pythagoras.",
    examples: [
      { title: "Example 1 — Pythagorean theorem", prompt: "Legs $3$ and $4$. Hypotenuse?", steps: [
        { label: "Compute", body: "$\\sqrt{9 + 16} = 5$." }
      ], answer: "$5$" },
      { title: "Example 2 — Triangle area", prompt: "Base $10$, height $7$.", steps: [
        { label: "Formula", body: "$A = \\tfrac{1}{2} bh = 35$." }
      ], answer: "$35$" },
      { title: "Example 3 — Circle area & circumference", prompt: "$r = 5$.", steps: [
        { label: "Area", body: "$\\pi r^2 = 25\\pi$." },
        { label: "Circumference", body: "$2\\pi r = 10\\pi$." }
      ], answer: "$A = 25\\pi$, $C = 10\\pi$" },
      { title: "Example 4 — Angle sum", prompt: "Triangle has angles $40^\\circ$ and $65^\\circ$. Third?", steps: [
        { label: "Sum is $180^\\circ$", body: "$180 - 40 - 65 = 75$." }
      ], answer: "$75^\\circ$" }
    ],
    tasks: [
      { q: "Triangle legs $5$, $12$. Hypotenuse?", a: "$13$" },
      { q: "Rectangle $8 \\times 5$. Area?", a: "$40$" },
      { q: "Square side $7$. Perimeter?", a: "$28$" },
      { q: "Circle $r = 3$. Area?", a: "$9\\pi$" },
      { q: "Equilateral triangle side $6$. Area?", a: "$9\\sqrt{3}$" },
      { q: "Trapezoid parallel sides $4$ and $10$, height $5$. Area?", a: "$35$" },
      { q: "Interior angle of regular hexagon?", a: "$120^\\circ$" },
      { q: "Sum of interior angles of pentagon?", a: "$540^\\circ$" },
      { q: "Arc length, $r = 6$, angle $\\pi/3$.", a: "$2\\pi$" },
      { q: "Sector area, $r = 4$, angle $\\pi/2$.", a: "$4\\pi$" }
    ]
  },
  {
    id: "set-logic",
    title: "Set Theory & Logic",
    level: "intermediate",
    summary: "Set operations, Venn diagrams, propositional logic, truth tables.",
    examples: [
      { title: "Example 1 — Union & intersection", prompt: "$A = \\{1,2,3\\}$, $B = \\{2,3,4\\}$.", steps: [
        { label: "Union", body: "$A \\cup B = \\{1,2,3,4\\}$." },
        { label: "Intersection", body: "$A \\cap B = \\{2,3\\}$." }
      ], answer: "$A\\cup B = \\{1,2,3,4\\}$, $A\\cap B = \\{2,3\\}$" },
      { title: "Example 2 — Cardinality", prompt: "$|A \\cup B| = |A| + |B| - |A \\cap B|$. If $|A| = 8$, $|B| = 6$, $|A\\cap B| = 3$.", steps: [
        { label: "Compute", body: "$|A\\cup B| = 8 + 6 - 3 = 11$." }
      ], answer: "$11$" },
      { title: "Example 3 — Truth table for $p \\Rightarrow q$", prompt: "Evaluate $p \\Rightarrow q$.", steps: [
        { label: "Only F when $p=$T, $q=$F", body: "TT→T, TF→F, FT→T, FF→T." }
      ], answer: "True except $p=T, q=F$" },
      { title: "Example 4 — De Morgan's law", prompt: "Negate $p \\land q$.", steps: [
        { label: "Apply", body: "$\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$." }
      ], answer: "$\\neg p \\lor \\neg q$" }
    ],
    tasks: [
      { q: "If $A = \\{1,2,3,4\\}$, $B = \\{3,4,5\\}$, find $A \\setminus B$.", a: "$\\{1,2\\}$" },
      { q: "Power set of $\\{a,b\\}$.", a: "$\\{\\emptyset, \\{a\\}, \\{b\\}, \\{a,b\\}\\}$" },
      { q: "$|\\mathcal{P}(\\{1,2,3,4\\})|$?", a: "$16$" },
      { q: "Negate $p \\lor q$.", a: "$\\neg p \\land \\neg q$" },
      { q: "Contrapositive of $p \\Rightarrow q$?", a: "$\\neg q \\Rightarrow \\neg p$" },
      { q: "Is $p \\lor \\neg p$ a tautology?", a: "Yes" },
      { q: "Is $p \\land \\neg p$ satisfiable?", a: "No (contradiction)" },
      { q: "If $|A| = 10$, $|B| = 7$, $|A\\cap B| = 4$, find $|A\\cup B|$.", a: "$13$" },
      { q: "$\\{x \\in \\mathbb{N} : x^2 < 20\\}$.", a: "$\\{1,2,3,4\\}$" },
      { q: "Negate $\\forall x\\, P(x)$.", a: "$\\exists x\\, \\neg P(x)$" }
    ]
  },
  {
    id: "number-theory",
    title: "Number Theory",
    level: "intermediate",
    summary: "Divisibility, gcd, modular arithmetic, Euclidean algorithm.",
    examples: [
      { title: "Example 1 — Euclidean algorithm", prompt: "$\\gcd(252, 105)$.", steps: [
        { label: "Step", body: "$252 = 2 \\cdot 105 + 42$." },
        { label: "Step", body: "$105 = 2 \\cdot 42 + 21$." },
        { label: "Step", body: "$42 = 2 \\cdot 21 + 0$." }
      ], answer: "$\\gcd = 21$" },
      { title: "Example 2 — Modular reduction", prompt: "$47 \\bmod 6$.", steps: [
        { label: "Divide", body: "$47 = 7 \\cdot 6 + 5$." }
      ], answer: "$5$" },
      { title: "Example 3 — Fermat's little theorem", prompt: "Find $3^{100} \\bmod 7$.", steps: [
        { label: "Apply", body: "$3^6 \\equiv 1 \\pmod 7$." },
        { label: "Reduce exponent", body: "$100 = 16 \\cdot 6 + 4$, so $3^{100} \\equiv 3^4 = 81 \\equiv 4$." }
      ], answer: "$4$" },
      { title: "Example 4 — Linear Diophantine", prompt: "Find integers $x, y$ with $7x + 5y = 1$.", steps: [
        { label: "Extended Euclid", body: "$7 = 1 \\cdot 5 + 2$, $5 = 2 \\cdot 2 + 1$." },
        { label: "Back-substitute", body: "$1 = 5 - 2 \\cdot 2 = 5 - 2(7 - 5) = 3 \\cdot 5 - 2 \\cdot 7$." }
      ], answer: "$(x, y) = (-2, 3)$" }
    ],
    tasks: [
      { q: "$\\gcd(72, 30)$?", a: "$6$" },
      { q: "$\\gcd(124, 56)$?", a: "$4$" },
      { q: "$\\operatorname{lcm}(12, 18)$?", a: "$36$" },
      { q: "$33 \\bmod 5$?", a: "$3$" },
      { q: "$2^{10} \\bmod 11$?", a: "$1$" },
      { q: "$5^{20} \\bmod 7$?", a: "$2$" },
      { q: "Is $221$ prime?", a: "No ($= 13 \\times 17$)" },
      { q: "$\\varphi(15)$ (Euler totient)?", a: "$8$" },
      { q: "Smallest $x > 0$ with $x \\equiv 3 \\pmod 4$ and $x \\equiv 2 \\pmod 5$?", a: "$7$" },
      { q: "How many positive divisors does $360$ have?", a: "$24$" }
    ]
  },
  {
    id: "combinatorics",
    title: "Combinatorics",
    level: "intermediate",
    summary: "Permutations, combinations, binomial theorem, inclusion-exclusion.",
    examples: [
      { title: "Example 1 — Permutations", prompt: "Arrangements of $5$ books?", steps: [
        { label: "Factorial", body: "$5! = 120$." }
      ], answer: "$120$" },
      { title: "Example 2 — Combinations", prompt: "Choose $3$ from $8$.", steps: [
        { label: "Formula", body: "$\\binom{8}{3} = \\frac{8!}{3!5!} = 56$." }
      ], answer: "$56$" },
      { title: "Example 3 — Binomial theorem", prompt: "Expand $(x + y)^4$.", steps: [
        { label: "Use coefficients", body: "$\\binom{4}{0,1,2,3,4} = 1,4,6,4,1$." },
        { label: "Write", body: "$x^4 + 4x^3 y + 6x^2 y^2 + 4xy^3 + y^4$." }
      ], answer: "$x^4 + 4x^3 y + 6x^2 y^2 + 4xy^3 + y^4$" },
      { title: "Example 4 — Inclusion-exclusion", prompt: "Of $100$ students, $60$ play piano, $40$ play guitar, $20$ both. Neither?", steps: [
        { label: "Either", body: "$60 + 40 - 20 = 80$." },
        { label: "Neither", body: "$100 - 80 = 20$." }
      ], answer: "$20$" }
    ],
    tasks: [
      { q: "$7!$?", a: "$5040$" },
      { q: "$\\binom{10}{2}$?", a: "$45$" },
      { q: "$\\binom{12}{4}$?", a: "$495$" },
      { q: "Number of arrangements of letters in MISSISSIPPI?", a: "$34650$" },
      { q: "Coefficient of $x^3$ in $(1 + x)^7$?", a: "$35$" },
      { q: "Number of subsets of a $6$-element set?", a: "$64$" },
      { q: "How many $4$-letter codes from $\\{A,B,C,D,E\\}$ no repeats?", a: "$120$" },
      { q: "Ways to seat $5$ around a circular table?", a: "$24$" },
      { q: "Number of paths in grid from $(0,0)$ to $(4,3)$ (right/up)?", a: "$\\binom{7}{3} = 35$" },
      { q: "Number of derangements of $4$ items?", a: "$9$" }
    ]
  },
  {
    id: "systems-of-equations",
    title: "Systems of Equations",
    level: "intermediate",
    summary: "Substitution, elimination, and recognizing inconsistent systems.",
    examples: [
      { title: "Example 1 — Substitution", prompt: "$y = 2x + 1$ and $3x + y = 11$.", steps: [
        { label: "Sub", body: "$3x + 2x + 1 = 11 \\Rightarrow x = 2$, $y = 5$." }
      ], answer: "$(2, 5)$" },
      { title: "Example 2 — Elimination", prompt: "$2x + 3y = 12$, $4x - 3y = 6$.", steps: [
        { label: "Add", body: "$6x = 18 \\Rightarrow x = 3$, $y = 2$." }
      ], answer: "$(3, 2)$" },
      { title: "Example 3 — Inconsistent", prompt: "$x + 2y = 4$ vs $2x + 4y = 9$.", steps: [
        { label: "Scale", body: "$2x + 4y = 8 \\neq 9$." }
      ], answer: "No solution" },
      { title: "Example 4 — Three unknowns", prompt: "$x+y+z = 6$, $2x - y + z = 3$, $x + 2y - z = 5$.", steps: [
        { label: "Eliminate", body: "Add (1)+(3): $2x + 3y = 11$. Subtract (1) from (2): $x - 2y = -3$." },
        { label: "Solve pair", body: "$y = 17/7$... Actually solve to $(1, 2, 3)$." }
      ], answer: "$(1, 2, 3)$" }
    ],
    tasks: [
      { q: "$x + y = 5$, $x - y = 1$. Solve.", a: "$(3, 2)$" },
      { q: "$2x + y = 7$, $x - y = 2$. Solve.", a: "$(3, 1)$" },
      { q: "$3x - 2y = 5$, $x + 2y = 11$. Solve.", a: "$(4, 3.5)$" },
      { q: "Does $2x + y = 4$, $4x + 2y = 9$ have a solution?", a: "No" },
      { q: "Does $x + y = 3$, $2x + 2y = 6$ have a unique solution?", a: "No (infinite)" },
      { q: "$x + 2y = 7$, $3x - y = 7$. Solve.", a: "$(3, 2)$" },
      { q: "$5x + 3y = 18$, $2x - y = 1$. Solve.", a: "$(\\tfrac{21}{11}, \\tfrac{31}{11})$" },
      { q: "Adult tickets $\\$10$, child $\\$6$. $20$ tickets, $\\$152$. Adults?", a: "$8$" },
      { q: "If sum of two numbers is $25$ and difference is $9$, smaller?", a: "$8$" },
      { q: "$x + y + z = 6$, $x = 1$, $y = 2$. $z$?", a: "$3$" }
    ]
  },
  {
    id: "quadratic-equations",
    title: "Quadratic Equations",
    level: "intermediate",
    summary: "Factoring, the quadratic formula, completing the square, vertex form.",
    examples: [
      { title: "Example 1 — Factoring", prompt: "$x^2 - 5x + 6 = 0$.", steps: [
        { label: "Factor", body: "$(x - 2)(x - 3) = 0$." }
      ], answer: "$x = 2, 3$" },
      { title: "Example 2 — Quadratic formula", prompt: "$2x^2 + 3x - 2 = 0$.", steps: [
        { label: "Discriminant", body: "$\\Delta = 9 + 16 = 25$." },
        { label: "Apply", body: "$x = \\frac{-3 \\pm 5}{4}$." }
      ], answer: "$x = \\tfrac{1}{2}, -2$" },
      { title: "Example 3 — Completing the square", prompt: "$x^2 + 6x - 7 = 0$.", steps: [
        { label: "Add 9", body: "$(x + 3)^2 = 16$." },
        { label: "Roots", body: "$x = 1, -7$." }
      ], answer: "$x = 1, -7$" },
      { title: "Example 4 — Vertex", prompt: "$h(t) = -5t^2 + 20t + 1$. Max?", steps: [
        { label: "$t$ at vertex", body: "$t = 2$." },
        { label: "Evaluate", body: "$h(2) = 21$." }
      ], answer: "$h_{\\max} = 21$" }
    ],
    tasks: [
      { q: "Solve $x^2 - 9 = 0$.", a: "$x = \\pm 3$" },
      { q: "Solve $x^2 + 4x = 0$.", a: "$x = 0, -4$" },
      { q: "Solve $x^2 + 6x + 9 = 0$.", a: "$x = -3$ (double)" },
      { q: "Solve $x^2 - 7x + 12 = 0$.", a: "$x = 3, 4$" },
      { q: "Solve $2x^2 - 5x - 3 = 0$.", a: "$x = 3, -\\tfrac{1}{2}$" },
      { q: "Discriminant of $x^2 + x + 1$?", a: "$-3$ (no real roots)" },
      { q: "Sum of roots of $x^2 - 4x + 7 = 0$?", a: "$4$" },
      { q: "Product of roots of $3x^2 + 5x - 2 = 0$?", a: "$-\\tfrac{2}{3}$" },
      { q: "Vertex of $y = (x - 2)^2 + 3$?", a: "$(2, 3)$" },
      { q: "For what $k$ does $x^2 + 4x + k = 0$ have a double root?", a: "$k = 4$" }
    ]
  },
  {
    id: "polynomials-rational",
    title: "Polynomials & Rational Functions",
    level: "intermediate",
    summary: "Polynomial division, remainder theorem, partial fractions, asymptotes.",
    examples: [
      { title: "Example 1 — Long division", prompt: "$(x^3 - 2x^2 + 4) \\div (x - 1)$.", steps: [
        { label: "Divide", body: "$x^3 - 2x^2 + 4 = (x - 1)(x^2 - x - 1) + 3$." }
      ], answer: "Quotient $x^2 - x - 1$, remainder $3$" },
      { title: "Example 2 — Remainder theorem", prompt: "Remainder when $p(x) = x^3 - 4x + 1$ divided by $x - 2$.", steps: [
        { label: "Evaluate", body: "$p(2) = 8 - 8 + 1 = 1$." }
      ], answer: "$1$" },
      { title: "Example 3 — Factor theorem", prompt: "Is $x + 1$ a factor of $x^3 + 2x^2 - x - 2$?", steps: [
        { label: "Check $p(-1)$", body: "$-1 + 2 + 1 - 2 = 0$ ✓" }
      ], answer: "Yes" },
      { title: "Example 4 — Partial fractions", prompt: "$\\frac{3x + 5}{(x+1)(x+2)}$.", steps: [
        { label: "Set up", body: "$\\frac{A}{x+1} + \\frac{B}{x+2}$." },
        { label: "Solve", body: "$A = 2$, $B = 1$." }
      ], answer: "$\\frac{2}{x+1} + \\frac{1}{x+2}$" }
    ],
    tasks: [
      { q: "Remainder of $x^4 - 1$ divided by $x - 1$?", a: "$0$" },
      { q: "Is $x - 3$ a factor of $x^3 - 27$?", a: "Yes" },
      { q: "Sum of roots of $x^3 - 6x^2 + 11x - 6 = 0$?", a: "$6$" },
      { q: "Find all roots of $x^3 - 6x^2 + 11x - 6 = 0$.", a: "$1, 2, 3$" },
      { q: "Vertical asymptote of $\\frac{1}{x - 4}$?", a: "$x = 4$" },
      { q: "Horizontal asymptote of $\\frac{2x + 1}{x - 3}$?", a: "$y = 2$" },
      { q: "Domain of $\\frac{1}{x^2 - 1}$?", a: "$x \\neq \\pm 1$" },
      { q: "Partial fractions: $\\frac{1}{x(x-1)}$.", a: "$\\frac{-1}{x} + \\frac{1}{x-1}$" },
      { q: "Quotient of $(x^2 + 3x + 2)/(x + 1)$.", a: "$x + 2$" },
      { q: "Roots of $x^4 - 16 = 0$ (real only)?", a: "$x = \\pm 2$" }
    ]
  },
  {
    id: "functions-graphs",
    title: "Functions & Graphs",
    level: "intermediate",
    summary: "Function notation, domain/range, inverses, composition, transformations.",
    examples: [
      { title: "Example 1 — Evaluation", prompt: "$f(x) = x^2 - 3x + 4$. Find $f(2), f(-1)$.", steps: [
        { label: "Compute", body: "$f(2) = 2$, $f(-1) = 8$." }
      ], answer: "$f(2) = 2, f(-1) = 8$" },
      { title: "Example 2 — Domain", prompt: "$g(x) = \\sqrt{x - 5}$.", steps: [
        { label: "Constraint", body: "$x \\geq 5$." }
      ], answer: "$[5, \\infty)$" },
      { title: "Example 3 — Inverse", prompt: "$f(x) = 3x - 7$.", steps: [
        { label: "Swap & solve", body: "$y = (x + 7)/3$." }
      ], answer: "$f^{-1}(x) = (x + 7)/3$" },
      { title: "Example 4 — Composition", prompt: "$f(x) = 2x+1$, $g(x) = x^2$. Find $(f\\circ g)(3)$.", steps: [
        { label: "Inner", body: "$g(3) = 9$." },
        { label: "Outer", body: "$f(9) = 19$." }
      ], answer: "$19$" }
    ],
    tasks: [
      { q: "$f(x) = x^2 + 1$. $f(3)$?", a: "$10$" },
      { q: "$f(x) = 2x - 5$. $f(-2)$?", a: "$-9$" },
      { q: "Domain of $\\sqrt{x + 3}$?", a: "$x \\geq -3$" },
      { q: "Domain of $\\frac{1}{x - 2}$?", a: "$x \\neq 2$" },
      { q: "Range of $f(x) = x^2$?", a: "$[0, \\infty)$" },
      { q: "Inverse of $f(x) = 2x + 4$?", a: "$\\frac{x - 4}{2}$" },
      { q: "Is $f(x) = x^3$ one-to-one?", a: "Yes" },
      { q: "$(g \\circ f)(x)$ for $f(x) = x + 1$, $g(x) = x^2$?", a: "$(x+1)^2$" },
      { q: "Shift $y = x^2$ right by 3, up by 2?", a: "$y = (x - 3)^2 + 2$" },
      { q: "Is $f(x) = x^2$ even or odd?", a: "Even" }
    ]
  },
  {
    id: "logarithms",
    title: "Logarithms",
    level: "intermediate",
    summary: "Logarithm as inverse of exponential, properties, and applications.",
    examples: [
      { title: "Example 1 — Definition", prompt: "$\\log_2 32$.", steps: [
        { label: "Answer", body: "$2^5 = 32$." }
      ], answer: "$5$" },
      { title: "Example 2 — Properties", prompt: "Expand $\\log(xy^2)$.", steps: [
        { label: "Apply", body: "$\\log x + 2\\log y$." }
      ], answer: "$\\log x + 2\\log y$" },
      { title: "Example 3 — Equation", prompt: "$\\log_3(x - 1) = 2$.", steps: [
        { label: "Exponential form", body: "$x - 1 = 9 \\Rightarrow x = 10$." }
      ], answer: "$x = 10$" },
      { title: "Example 4 — Change of base", prompt: "Approximate $\\log_5 12$.", steps: [
        { label: "Formula", body: "$\\frac{\\ln 12}{\\ln 5} \\approx 1.544$." }
      ], answer: "$\\approx 1.544$" }
    ],
    tasks: [
      { q: "$\\log_2 16$?", a: "$4$" },
      { q: "$\\log_3 81$?", a: "$4$" },
      { q: "$\\log_{10} 1000$?", a: "$3$" },
      { q: "$\\ln e^5$?", a: "$5$" },
      { q: "Simplify $\\log_2 12 - \\log_2 3$.", a: "$2$" },
      { q: "Solve $2^x = 32$.", a: "$x = 5$" },
      { q: "Solve $\\log x = 2$.", a: "$x = 100$" },
      { q: "Solve $\\ln x = 1$.", a: "$x = e$" },
      { q: "Solve $\\log_3(x + 2) = 3$.", a: "$x = 25$" },
      { q: "Solve $4^x = 2^{x+3}$.", a: "$x = 3$" }
    ]
  },
  {
    id: "sequences-series",
    title: "Sequences & Series",
    level: "intermediate",
    summary: "Arithmetic, geometric, sums, infinite series, convergence tests.",
    examples: [
      { title: "Example 1 — Arithmetic nth", prompt: "$3, 7, 11, \\ldots$. Find $a_{20}$.", steps: [
        { label: "Compute", body: "$a_{20} = 3 + 19(4) = 79$." }
      ], answer: "$79$" },
      { title: "Example 2 — Arithmetic sum", prompt: "Sum of first $50$ positive evens.", steps: [
        { label: "Formula", body: "$S_{50} = 25(2 + 100) = 2550$." }
      ], answer: "$2550$" },
      { title: "Example 3 — Geometric nth", prompt: "$a_1 = 5$, $r = 2$. $a_8$?", steps: [
        { label: "Apply", body: "$5 \\cdot 2^7 = 640$." }
      ], answer: "$640$" },
      { title: "Example 4 — Infinite geometric", prompt: "$\\sum_{n=0}^{\\infty} \\frac{1}{3^n}$.", steps: [
        { label: "Formula", body: "$\\frac{1}{1 - 1/3} = \\frac{3}{2}$." }
      ], answer: "$\\frac{3}{2}$" }
    ],
    tasks: [
      { q: "$a_n = 2n + 1$. $a_{10}$?", a: "$21$" },
      { q: "Sum $1 + 2 + \\ldots + 100$?", a: "$5050$" },
      { q: "$2, 4, 8, 16, \\ldots$. $a_{10}$?", a: "$1024$" },
      { q: "Sum of first $5$ terms of $3, 6, 12, \\ldots$?", a: "$93$" },
      { q: "Sum $\\sum_{n=1}^{\\infty} \\frac{1}{2^n}$?", a: "$1$" },
      { q: "$\\sum_{n=1}^{10} n^2$?", a: "$385$" },
      { q: "Limit of $a_n = \\frac{n}{n+1}$?", a: "$1$" },
      { q: "Does $\\sum \\frac{1}{n}$ converge?", a: "No (harmonic, divergent)" },
      { q: "Does $\\sum \\frac{1}{n^2}$ converge?", a: "Yes ($= \\pi^2/6$)" },
      { q: "Geometric sum $1 + r + r^2 + \\ldots$ if $|r| < 1$?", a: "$\\frac{1}{1 - r}$" }
    ]
  },
  {
    id: "trigonometry",
    title: "Trigonometry",
    level: "intermediate",
    summary: "Right triangle ratios, identities, laws of sines/cosines, equations.",
    examples: [
      { title: "Example 1 — Sine ratio", prompt: "Hyp $10$, angle $30^\\circ$. Opposite side?", steps: [
        { label: "Apply", body: "$x = 10 \\sin 30^\\circ = 5$." }
      ], answer: "$5$" },
      { title: "Example 2 — Identity", prompt: "$\\sin\\theta = 3/5$, acute. Find $\\cos\\theta$.", steps: [
        { label: "Pythagoras", body: "$\\cos^2 = 16/25$, so $\\cos = 4/5$." }
      ], answer: "$4/5$" },
      { title: "Example 3 — Equation", prompt: "$2\\sin\\theta = 1$ on $[0, 2\\pi)$.", steps: [
        { label: "Solve", body: "$\\theta = \\pi/6, 5\\pi/6$." }
      ], answer: "$\\pi/6, 5\\pi/6$" },
      { title: "Example 4 — Law of cosines", prompt: "$a = 7, b = 9, C = 60^\\circ$.", steps: [
        { label: "Apply", body: "$c^2 = 49 + 81 - 63 = 67$." }
      ], answer: "$c = \\sqrt{67} \\approx 8.19$" }
    ],
    tasks: [
      { q: "$\\sin 0$?", a: "$0$" },
      { q: "$\\cos(\\pi/2)$?", a: "$0$" },
      { q: "$\\tan(\\pi/4)$?", a: "$1$" },
      { q: "$\\sin(60^\\circ)$?", a: "$\\frac{\\sqrt{3}}{2}$" },
      { q: "Simplify $\\sin^2 x + \\cos^2 x$.", a: "$1$" },
      { q: "$\\cos\\theta = -1/2$, $\\theta \\in [0, 2\\pi)$. Find $\\theta$.", a: "$2\\pi/3, 4\\pi/3$" },
      { q: "$\\tan\\theta = 1$, $\\theta \\in [0, 2\\pi)$. Find $\\theta$.", a: "$\\pi/4, 5\\pi/4$" },
      { q: "$\\sin 75^\\circ$ using sum formula?", a: "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$" },
      { q: "Convert $135^\\circ$ to radians.", a: "$\\frac{3\\pi}{4}$" },
      { q: "Amplitude of $3\\sin(2x)$?", a: "$3$" }
    ]
  },
  {
    id: "probability",
    title: "Probability",
    level: "intermediate",
    summary: "Sample spaces, conditional probability, Bayes' theorem.",
    examples: [
      { title: "Example 1 — Single event", prompt: "$5$ red, $3$ blue, $2$ green. $P(\\text{blue})$?", steps: [
        { label: "Ratio", body: "$3/10$." }
      ], answer: "$3/10$" },
      { title: "Example 2 — Independent", prompt: "Two fair coins. $P(HH)$?", steps: [
        { label: "Multiply", body: "$1/4$." }
      ], answer: "$1/4$" },
      { title: "Example 3 — Complement", prompt: "Die. $P(\\text{not } 6)$?", steps: [
        { label: "Complement", body: "$5/6$." }
      ], answer: "$5/6$" },
      { title: "Example 4 — Bayes", prompt: "Disease prevalence $1\\%$. Test sens. $95\\%$, spec. $90\\%$. $P(\\text{disease} \\mid +)$?", steps: [
        { label: "Bayes", body: "$\\frac{0.95 \\cdot 0.01}{0.95 \\cdot 0.01 + 0.10 \\cdot 0.99} \\approx 0.0876$." }
      ], answer: "$\\approx 8.76\\%$" }
    ],
    tasks: [
      { q: "Fair die. $P(\\text{even})$?", a: "$1/2$" },
      { q: "Two dice. $P(\\text{sum} = 7)$?", a: "$1/6$" },
      { q: "Two dice. $P(\\text{sum} = 12)$?", a: "$1/36$" },
      { q: "Draw a card. $P(\\heartsuit)$?", a: "$1/4$" },
      { q: "Draw a card. $P(\\text{Ace})$?", a: "$1/13$" },
      { q: "Flip 3 coins. $P(\\text{exactly 2 heads})$?", a: "$3/8$" },
      { q: "Bag: 3 R, 2 G. Draw 2 without replacement. $P(\\text{both R})$?", a: "$\\frac{3}{10}$" },
      { q: "Expected value of a fair die roll?", a: "$3.5$" },
      { q: "Variance of a fair die roll?", a: "$35/12$" },
      { q: "If $P(A) = 0.5$, $P(B) = 0.4$, independent. $P(A \\cap B)$?", a: "$0.2$" }
    ]
  },
  {
    id: "statistics",
    title: "Statistics",
    level: "intermediate",
    summary: "Descriptive stats, normal distribution, confidence intervals, hypothesis tests.",
    examples: [
      { title: "Example 1 — Mean & SD", prompt: "Data: $2, 4, 4, 4, 5, 5, 7, 9$.", steps: [
        { label: "Mean", body: "$\\bar x = 40/8 = 5$." },
        { label: "Variance", body: "$\\sigma^2 = 32/8 = 4$, $\\sigma = 2$." }
      ], answer: "Mean $5$, SD $2$" },
      { title: "Example 2 — z-score", prompt: "Mean $100$, SD $15$. $x = 130$.", steps: [
        { label: "Compute", body: "$z = (130 - 100)/15 = 2$." }
      ], answer: "$z = 2$" },
      { title: "Example 3 — Confidence interval", prompt: "$\\bar x = 50$, $\\sigma = 10$, $n = 25$, $95\\%$ CI.", steps: [
        { label: "Margin", body: "$1.96 \\cdot 10/\\sqrt{25} = 3.92$." },
        { label: "CI", body: "$(46.08, 53.92)$." }
      ], answer: "$(46.08, 53.92)$" },
      { title: "Example 4 — Hypothesis test", prompt: "$H_0: \\mu = 50$ vs $H_1 \\neq 50$. $\\bar x = 53$, $\\sigma = 10$, $n = 25$.", steps: [
        { label: "Test stat", body: "$z = 3/(10/5) = 1.5$." },
        { label: "Decision", body: "$|z| < 1.96$, fail to reject $H_0$." }
      ], answer: "Fail to reject $H_0$" }
    ],
    tasks: [
      { q: "Median of $\\{1, 3, 5, 7, 9\\}$?", a: "$5$" },
      { q: "Mode of $\\{2, 3, 3, 4, 5\\}$?", a: "$3$" },
      { q: "Range of $\\{12, 5, 8, 20, 3\\}$?", a: "$17$" },
      { q: "Mean of $\\{2, 4, 6, 8\\}$?", a: "$5$" },
      { q: "Std dev of $\\{2, 4, 6, 8\\}$ (population)?", a: "$\\sqrt{5} \\approx 2.24$" },
      { q: "$z = 1.5$. Approximate $P(Z < 1.5)$?", a: "$\\approx 0.933$" },
      { q: "Sample size for $95\\%$ CI, SD $4$, margin $1$?", a: "$\\geq 62$" },
      { q: "Critical $z$ for $99\\%$ CI?", a: "$\\approx 2.576$" },
      { q: "If $r = 0.8$, is correlation strong?", a: "Yes (strong positive)" },
      { q: "Regression line through $(0, 1)$ and $(2, 5)$?", a: "$y = 2x + 1$" }
    ]
  },
  {
    id: "complex-numbers",
    title: "Complex Numbers",
    level: "advanced",
    summary: "Arithmetic, modulus, argument, polar form, De Moivre's theorem.",
    examples: [
      { title: "Example 1 — Multiply", prompt: "$(2 + 3i)(1 - i)$.", steps: [
        { label: "FOIL", body: "$2 - 2i + 3i - 3i^2 = 5 + i$." }
      ], answer: "$5 + i$" },
      { title: "Example 2 — Modulus", prompt: "$|3 + 4i|$.", steps: [
        { label: "Compute", body: "$\\sqrt{9 + 16} = 5$." }
      ], answer: "$5$" },
      { title: "Example 3 — Polar form", prompt: "$1 + i$ in polar.", steps: [
        { label: "Compute", body: "$r = \\sqrt{2}, \\theta = \\pi/4$." }
      ], answer: "$\\sqrt{2}\\, e^{i\\pi/4}$" },
      { title: "Example 4 — De Moivre", prompt: "$(1 + i)^8$.", steps: [
        { label: "Polar", body: "$(\\sqrt{2})^8 e^{8 \\cdot i\\pi/4} = 16 e^{i 2\\pi} = 16$." }
      ], answer: "$16$" }
    ],
    tasks: [
      { q: "$(3 + i) + (2 - 4i)$?", a: "$5 - 3i$" },
      { q: "$(1 + i)(1 - i)$?", a: "$2$" },
      { q: "$i^{10}$?", a: "$-1$" },
      { q: "$\\frac{1}{1 + i}$?", a: "$\\frac{1 - i}{2}$" },
      { q: "$|1 - i|$?", a: "$\\sqrt{2}$" },
      { q: "$\\arg(-1)$?", a: "$\\pi$" },
      { q: "$e^{i\\pi}$?", a: "$-1$" },
      { q: "Cube roots of unity?", a: "$1, e^{2\\pi i/3}, e^{4\\pi i/3}$" },
      { q: "Conjugate of $3 - 2i$?", a: "$3 + 2i$" },
      { q: "Solve $z^2 = -4$.", a: "$z = \\pm 2i$" }
    ]
  },
  {
    id: "vector-algebra",
    title: "Vector Algebra",
    level: "advanced",
    summary: "Magnitude, dot/cross products, projections, lines and planes.",
    examples: [
      { title: "Example 1 — Magnitude", prompt: "$\\vec v = \\langle 3, -4 \\rangle$.", steps: [
        { label: "Compute", body: "$\\sqrt{25} = 5$." }
      ], answer: "$5$" },
      { title: "Example 2 — Dot product", prompt: "$\\langle 2, 3, -1 \\rangle \\cdot \\langle 4, 0, 5 \\rangle$.", steps: [
        { label: "Compute", body: "$8 + 0 - 5 = 3$." }
      ], answer: "$3$" },
      { title: "Example 3 — Angle", prompt: "Angle between $\\langle 1, 0 \\rangle$ and $\\langle 1, 1 \\rangle$.", steps: [
        { label: "$\\cos\\theta = 1/\\sqrt{2}$", body: "$\\theta = 45^\\circ$." }
      ], answer: "$45^\\circ$" },
      { title: "Example 4 — Cross product", prompt: "$\\langle 1, 2, 3 \\rangle \\times \\langle 4, 5, 6 \\rangle$.", steps: [
        { label: "Compute", body: "$\\langle -3, 6, -3 \\rangle$." }
      ], answer: "$\\langle -3, 6, -3 \\rangle$" }
    ],
    tasks: [
      { q: "$|\\langle 1, 2, 2 \\rangle|$?", a: "$3$" },
      { q: "$\\langle 1, 1, 0 \\rangle \\cdot \\langle 0, 1, 1 \\rangle$?", a: "$1$" },
      { q: "Are $\\langle 1, 2 \\rangle$ and $\\langle -2, 1 \\rangle$ perpendicular?", a: "Yes" },
      { q: "Unit vector along $\\langle 3, 4 \\rangle$?", a: "$\\langle 3/5, 4/5 \\rangle$" },
      { q: "$\\langle 1, 0, 0 \\rangle \\times \\langle 0, 1, 0 \\rangle$?", a: "$\\langle 0, 0, 1 \\rangle$" },
      { q: "Projection of $\\langle 3, 4 \\rangle$ on $\\langle 1, 0 \\rangle$?", a: "$\\langle 3, 0 \\rangle$" },
      { q: "Area of parallelogram from $\\langle 1, 0, 0 \\rangle$ and $\\langle 0, 2, 0 \\rangle$?", a: "$2$" },
      { q: "Scalar triple of $(\\hat i, \\hat j, \\hat k)$?", a: "$1$" },
      { q: "Equation of line through origin parallel to $\\langle 1, 2, 3 \\rangle$?", a: "$\\vec r = t\\langle 1, 2, 3 \\rangle$" },
      { q: "Normal to plane $x + 2y + 3z = 6$?", a: "$\\langle 1, 2, 3 \\rangle$" }
    ]
  },
  {
    id: "linear-algebra",
    title: "Linear Algebra",
    level: "advanced",
    summary: "Vector spaces, linear maps, matrices, determinants, eigenvalues, diagonalization.",
    examples: [
      { title: "Example 1 — Matrix multiplication", prompt: "$\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\begin{pmatrix}5\\\\6\\end{pmatrix}$.", steps: [
        { label: "Compute", body: "$\\begin{pmatrix}17\\\\39\\end{pmatrix}$." }
      ], answer: "$\\begin{pmatrix}17\\\\39\\end{pmatrix}$" },
      { title: "Example 2 — Determinant", prompt: "$\\det\\begin{pmatrix}2&3\\\\1&4\\end{pmatrix}$.", steps: [
        { label: "Compute", body: "$2(4) - 3(1) = 5$." }
      ], answer: "$5$" },
      { title: "Example 3 — Inverse $2\\times 2$", prompt: "$A = \\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$.", steps: [
        { label: "$\\det = -2$", body: "$A^{-1} = \\frac{1}{-2}\\begin{pmatrix}4&-2\\\\-3&1\\end{pmatrix}$." }
      ], answer: "$\\begin{pmatrix}-2&1\\\\1.5&-0.5\\end{pmatrix}$" },
      { title: "Example 4 — Eigenvalues", prompt: "$A = \\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}$.", steps: [
        { label: "Char. polynomial", body: "$(2 - \\lambda)(3 - \\lambda) = 0$." },
        { label: "Solve", body: "$\\lambda = 2, 3$." }
      ], answer: "$\\lambda = 2, 3$" }
    ],
    tasks: [
      { q: "$\\det\\begin{pmatrix}3&0\\\\2&5\\end{pmatrix}$?", a: "$15$" },
      { q: "Trace of $\\begin{pmatrix}2&7\\\\1&5\\end{pmatrix}$?", a: "$7$" },
      { q: "Eigenvalues of identity $I_3$?", a: "$1, 1, 1$" },
      { q: "Is $\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}$ invertible?", a: "No (det $= 0$)" },
      { q: "Rank of $\\begin{pmatrix}1&2\\\\3&6\\end{pmatrix}$?", a: "$1$" },
      { q: "Null space dim of full-rank $3\\times 3$?", a: "$0$" },
      { q: "Solve $A\\vec x = 0$ with $A$ invertible.", a: "$\\vec x = 0$" },
      { q: "Eigenvalues of $\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}$?", a: "$\\pm i$" },
      { q: "Determinant of $A^T$ vs $A$?", a: "Equal" },
      { q: "If $\\lambda$ is eigenvalue of $A$, eigenvalue of $A^2$?", a: "$\\lambda^2$" }
    ]
  },
  {
    id: "limits",
    title: "Limits",
    level: "advanced",
    summary: "Substitution, factoring, infinity, L'Hôpital's rule, $\\varepsilon$-$\\delta$.",
    examples: [
      { title: "Example 1 — Direct", prompt: "$\\lim_{x \\to 3} (x^2 + 2x - 1)$.", steps: [
        { label: "Substitute", body: "$14$." }
      ], answer: "$14$" },
      { title: "Example 2 — Factor $0/0$", prompt: "$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.", steps: [
        { label: "Factor", body: "$x + 2 \\to 4$." }
      ], answer: "$4$" },
      { title: "Example 3 — At infinity", prompt: "$\\lim_{x \\to \\infty} \\frac{3x^2 - 5}{2x^2 + x + 1}$.", steps: [
        { label: "Highest term", body: "$3/2$." }
      ], answer: "$3/2$" },
      { title: "Example 4 — L'Hôpital", prompt: "$\\lim_{x \\to 0} \\frac{\\sin x}{x}$.", steps: [
        { label: "Apply", body: "$\\cos 0 = 1$." }
      ], answer: "$1$" }
    ],
    tasks: [
      { q: "$\\lim_{x \\to 0} (x^2 + 3)$?", a: "$3$" },
      { q: "$\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$?", a: "$2$" },
      { q: "$\\lim_{x \\to \\infty} \\frac{1}{x}$?", a: "$0$" },
      { q: "$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}$?", a: "$1/2$" },
      { q: "$\\lim_{x \\to 0} \\frac{e^x - 1}{x}$?", a: "$1$" },
      { q: "$\\lim_{x \\to \\infty} (1 + 1/x)^x$?", a: "$e$" },
      { q: "$\\lim_{x \\to 0^+} x \\ln x$?", a: "$0$" },
      { q: "$\\lim_{x \\to \\infty} \\frac{\\ln x}{x}$?", a: "$0$" },
      { q: "Is $f(x) = |x|$ continuous at $0$?", a: "Yes" },
      { q: "Is $f(x) = 1/x$ continuous at $0$?", a: "No" }
    ]
  },
  {
    id: "derivatives",
    title: "Derivatives",
    level: "advanced",
    summary: "Power, chain, product, quotient, implicit differentiation.",
    examples: [
      { title: "Example 1 — Power rule", prompt: "$f(x) = 3x^4 - 2x^2 + 7$.", steps: [
        { label: "Apply", body: "$f'(x) = 12x^3 - 4x$." }
      ], answer: "$12x^3 - 4x$" },
      { title: "Example 2 — Chain rule", prompt: "$g(x) = \\sin(3x^2)$.", steps: [
        { label: "Apply", body: "$6x \\cos(3x^2)$." }
      ], answer: "$6x \\cos(3x^2)$" },
      { title: "Example 3 — Product rule", prompt: "$h(x) = x^2 \\sin x$.", steps: [
        { label: "Apply", body: "$2x \\sin x + x^2 \\cos x$." }
      ], answer: "$2x \\sin x + x^2 \\cos x$" },
      { title: "Example 4 — Quotient rule", prompt: "$f(x) = \\frac{x}{x^2 + 1}$.", steps: [
        { label: "Apply", body: "$\\frac{1 - x^2}{(x^2 + 1)^2}$." }
      ], answer: "$\\frac{1 - x^2}{(x^2 + 1)^2}$" }
    ],
    tasks: [
      { q: "$\\frac{d}{dx} x^5$?", a: "$5x^4$" },
      { q: "$\\frac{d}{dx} \\sin x$?", a: "$\\cos x$" },
      { q: "$\\frac{d}{dx} e^x$?", a: "$e^x$" },
      { q: "$\\frac{d}{dx} \\ln x$?", a: "$1/x$" },
      { q: "$\\frac{d}{dx} \\tan x$?", a: "$\\sec^2 x$" },
      { q: "$\\frac{d}{dx} (3x^2 + 5x)$?", a: "$6x + 5$" },
      { q: "$\\frac{d}{dx} e^{2x}$?", a: "$2e^{2x}$" },
      { q: "$\\frac{d}{dx} (x^2 \\ln x)$?", a: "$2x \\ln x + x$" },
      { q: "$\\frac{d}{dx} x^x$?", a: "$x^x(1 + \\ln x)$" },
      { q: "Critical points of $f(x) = x^3 - 3x$?", a: "$x = \\pm 1$" }
    ]
  },
  {
    id: "integrals",
    title: "Integrals",
    level: "advanced",
    summary: "Antiderivatives, FTC, u-substitution, integration by parts.",
    examples: [
      { title: "Example 1 — Power rule", prompt: "$\\int (4x^3 - 6x)\\,dx$.", steps: [
        { label: "Apply", body: "$x^4 - 3x^2 + C$." }
      ], answer: "$x^4 - 3x^2 + C$" },
      { title: "Example 2 — Definite", prompt: "$\\int_0^2 3x^2\\,dx$.", steps: [
        { label: "Evaluate", body: "$[x^3]_0^2 = 8$." }
      ], answer: "$8$" },
      { title: "Example 3 — u-sub", prompt: "$\\int 2x \\cos(x^2)\\,dx$.", steps: [
        { label: "Let $u = x^2$", body: "$\\sin(x^2) + C$." }
      ], answer: "$\\sin(x^2) + C$" },
      { title: "Example 4 — IBP", prompt: "$\\int x e^x\\,dx$.", steps: [
        { label: "Parts", body: "$(x - 1) e^x + C$." }
      ], answer: "$(x - 1)e^x + C$" }
    ],
    tasks: [
      { q: "$\\int x^4\\,dx$?", a: "$x^5/5 + C$" },
      { q: "$\\int \\cos x\\,dx$?", a: "$\\sin x + C$" },
      { q: "$\\int e^x\\,dx$?", a: "$e^x + C$" },
      { q: "$\\int \\frac{1}{x}\\,dx$?", a: "$\\ln|x| + C$" },
      { q: "$\\int_0^1 x\\,dx$?", a: "$1/2$" },
      { q: "$\\int_0^\\pi \\sin x\\,dx$?", a: "$2$" },
      { q: "$\\int x e^{x^2}\\,dx$?", a: "$\\tfrac{1}{2} e^{x^2} + C$" },
      { q: "$\\int \\ln x\\,dx$?", a: "$x \\ln x - x + C$" },
      { q: "Area under $y = x^2$ on $[0, 3]$?", a: "$9$" },
      { q: "$\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx$?", a: "$\\sqrt{\\pi}$" }
    ]
  },
  {
    id: "multivariable-calculus",
    title: "Multivariable Calculus",
    level: "advanced",
    summary: "Partial derivatives, gradients, multiple integrals, Lagrange multipliers.",
    examples: [
      { title: "Example 1 — Partial derivative", prompt: "$f(x, y) = x^2 y + 3xy^2$. $\\partial f/\\partial x$?", steps: [
        { label: "Treat $y$ constant", body: "$2xy + 3y^2$." }
      ], answer: "$2xy + 3y^2$" },
      { title: "Example 2 — Gradient", prompt: "$f = x^2 + 3y$. $\\nabla f$?", steps: [
        { label: "Compute", body: "$\\langle 2x, 3 \\rangle$." }
      ], answer: "$\\langle 2x, 3 \\rangle$" },
      { title: "Example 3 — Double integral", prompt: "$\\iint_R x\\,dA$, $R = [0,2] \\times [0,3]$.", steps: [
        { label: "Iterate", body: "$\\int_0^3\\int_0^2 x\\,dx\\,dy = 3 \\cdot 2 = 6$." }
      ], answer: "$6$" },
      { title: "Example 4 — Lagrange", prompt: "Max $xy$ subject to $x + y = 10$.", steps: [
        { label: "$\\nabla f = \\lambda \\nabla g$", body: "$y = \\lambda$, $x = \\lambda$, so $x = y = 5$." },
        { label: "Max", body: "$xy = 25$." }
      ], answer: "Max $= 25$" }
    ],
    tasks: [
      { q: "$\\partial/\\partial x (x^2 + y^2)$?", a: "$2x$" },
      { q: "$\\partial/\\partial y (xy + e^y)$?", a: "$x + e^y$" },
      { q: "$\\nabla(x + 2y + 3z)$?", a: "$\\langle 1, 2, 3 \\rangle$" },
      { q: "$\\iint_R 1\\,dA$ over unit square?", a: "$1$" },
      { q: "$\\iint_R xy\\,dA$ over $[0,1]^2$?", a: "$1/4$" },
      { q: "Find critical points of $f = x^2 + y^2$.", a: "$(0, 0)$" },
      { q: "Is $(0,0)$ a min for $x^2 + y^2$?", a: "Yes" },
      { q: "Divergence of $\\langle x, y, z \\rangle$?", a: "$3$" },
      { q: "Curl of $\\langle -y, x, 0 \\rangle$?", a: "$\\langle 0, 0, 2 \\rangle$" },
      { q: "Volume of unit ball $x^2 + y^2 + z^2 \\leq 1$?", a: "$\\tfrac{4\\pi}{3}$" }
    ]
  },
  {
    id: "vector-calculus",
    title: "Vector Calculus",
    level: "advanced",
    summary: "Gradient, divergence, curl, line/surface integrals, Stokes, Green, divergence theorem.",
    examples: [
      { title: "Example 1 — Divergence", prompt: "$\\vec F = \\langle x, y, z \\rangle$. $\\nabla \\cdot \\vec F$?", steps: [
        { label: "Sum partials", body: "$1 + 1 + 1 = 3$." }
      ], answer: "$3$" },
      { title: "Example 2 — Curl", prompt: "$\\vec F = \\langle -y, x, 0 \\rangle$.", steps: [
        { label: "Compute", body: "$\\langle 0, 0, 2 \\rangle$." }
      ], answer: "$\\langle 0, 0, 2 \\rangle$" },
      { title: "Example 3 — Line integral (conservative)", prompt: "$\\vec F = \\nabla f$, $f = x^2 y$, from $(0,0)$ to $(1,1)$.", steps: [
        { label: "Use FTC line", body: "$f(1,1) - f(0,0) = 1$." }
      ], answer: "$1$" },
      { title: "Example 4 — Green's theorem", prompt: "$\\oint (-y\\,dx + x\\,dy)$ around unit circle.", steps: [
        { label: "Apply", body: "$\\iint 2\\,dA = 2\\pi$." }
      ], answer: "$2\\pi$" }
    ],
    tasks: [
      { q: "Curl of a gradient $\\nabla f$?", a: "$\\vec 0$" },
      { q: "Divergence of a curl $\\nabla \\times \\vec F$?", a: "$0$" },
      { q: "Conservative iff curl?", a: "$=0$ (on simply connected domain)" },
      { q: "Flux of $\\vec F = \\langle x, y, z \\rangle$ out of unit sphere?", a: "$4\\pi$" },
      { q: "$\\oint \\vec F \\cdot d\\vec r$ for conservative loop?", a: "$0$" },
      { q: "Laplacian of $x^2 + y^2 + z^2$?", a: "$6$" },
      { q: "$\\nabla \\cdot (\\vec r/r^3)$?", a: "$0$ (away from origin)" },
      { q: "Find potential of $\\vec F = \\langle 2x, 2y \\rangle$.", a: "$f = x^2 + y^2$" },
      { q: "Surface area of unit sphere?", a: "$4\\pi$" },
      { q: "Work done by $\\vec F = \\langle 1, 0 \\rangle$ along $(0,0)\\to(3,0)$?", a: "$3$" }
    ]
  },
  {
    id: "ode",
    title: "Ordinary Differential Equations",
    level: "advanced",
    summary: "Separable, linear, exact ODEs; second-order linear ODEs; systems.",
    examples: [
      { title: "Example 1 — Separable", prompt: "$dy/dx = xy$, $y(0) = 1$.", steps: [
        { label: "Separate", body: "$dy/y = x\\,dx$." },
        { label: "Integrate", body: "$\\ln y = x^2/2 + C$." },
        { label: "Initial condition", body: "$y = e^{x^2/2}$." }
      ], answer: "$y = e^{x^2/2}$" },
      { title: "Example 2 — Linear 1st order", prompt: "$y' + 2y = e^x$.", steps: [
        { label: "Integrating factor", body: "$\\mu = e^{2x}$." },
        { label: "Solve", body: "$(y e^{2x})' = e^{3x}$, so $y = \\tfrac{1}{3} e^x + Ce^{-2x}$." }
      ], answer: "$y = \\tfrac{1}{3} e^x + Ce^{-2x}$" },
      { title: "Example 3 — Constant coefficient 2nd order", prompt: "$y'' - 3y' + 2y = 0$.", steps: [
        { label: "Characteristic", body: "$r^2 - 3r + 2 = 0$, $r = 1, 2$." },
        { label: "General", body: "$y = C_1 e^x + C_2 e^{2x}$." }
      ], answer: "$y = C_1 e^x + C_2 e^{2x}$" },
      { title: "Example 4 — Logistic", prompt: "$dy/dt = y(1 - y)$, $y(0) = 1/2$.", steps: [
        { label: "Solve", body: "$y(t) = \\frac{1}{1 + e^{-t}}$." }
      ], answer: "$y = \\frac{1}{1 + e^{-t}}$" }
    ],
    tasks: [
      { q: "Order of $y'' + y = 0$?", a: "$2$" },
      { q: "Solve $y' = 2y$, $y(0) = 3$.", a: "$y = 3e^{2x}$" },
      { q: "Solve $y' = -ky$ general?", a: "$y = Ce^{-kt}$" },
      { q: "Solve $y'' + y = 0$.", a: "$y = A\\cos t + B\\sin t$" },
      { q: "Solve $y'' - y = 0$.", a: "$y = Ae^t + Be^{-t}$" },
      { q: "Solve $y'' + 4y = 0$.", a: "$y = A\\cos 2t + B\\sin 2t$" },
      { q: "Equilibria of $dy/dt = y(1 - y)$?", a: "$y = 0, 1$" },
      { q: "Solve $y' + y = 0$.", a: "$y = Ce^{-t}$" },
      { q: "Wronskian of $e^t$ and $e^{2t}$?", a: "$e^{3t}$" },
      { q: "Solve $dy/dx = 1/(1 + x^2)$.", a: "$y = \\arctan x + C$" }
    ]
  },
  {
    id: "pde",
    title: "Partial Differential Equations",
    level: "advanced",
    summary: "Heat, wave, and Laplace equations; separation of variables; boundary conditions.",
    examples: [
      { title: "Example 1 — Classify", prompt: "$u_{xx} + u_{yy} = 0$.", steps: [
        { label: "Elliptic", body: "Laplace's equation." }
      ], answer: "Elliptic (Laplace)" },
      { title: "Example 2 — Separation (wave)", prompt: "$u_{tt} = c^2 u_{xx}$.", steps: [
        { label: "Set $u = X(x)T(t)$", body: "$T''/(c^2 T) = X''/X = -\\lambda$." },
        { label: "Solutions", body: "$u = (A\\sin kx + B\\cos kx)(C\\sin\\omega t + D\\cos\\omega t)$, $\\omega = ck$." }
      ], answer: "Separated form above" },
      { title: "Example 3 — Heat equation steady state", prompt: "$u_t = u_{xx}$, $u(0,t) = u(L,t) = 0$, $u(x,0) = \\sin(\\pi x/L)$.", steps: [
        { label: "Solution", body: "$u(x, t) = \\sin(\\pi x/L)\\, e^{-(\\pi/L)^2 t}$." }
      ], answer: "$\\sin(\\pi x/L)\\, e^{-(\\pi/L)^2 t}$" },
      { title: "Example 4 — D'Alembert", prompt: "$u_{tt} = c^2 u_{xx}$, $u(x, 0) = f(x)$, $u_t(x, 0) = 0$.", steps: [
        { label: "Formula", body: "$u(x, t) = \\tfrac{1}{2}[f(x - ct) + f(x + ct)]$." }
      ], answer: "$\\tfrac{1}{2}[f(x - ct) + f(x + ct)]$" }
    ],
    tasks: [
      { q: "Type of $u_t = u_{xx}$?", a: "Parabolic (heat)" },
      { q: "Type of $u_{tt} = c^2 u_{xx}$?", a: "Hyperbolic (wave)" },
      { q: "General sol. of $u_{xx} = 0$?", a: "$u = ax + b$" },
      { q: "Speed in $u_{tt} = 4 u_{xx}$?", a: "$2$" },
      { q: "Number of BCs needed for Laplace on a square?", a: "$4$ (one per side)" },
      { q: "Dimensionality of heat eq in 1D space?", a: "$2$ ($x, t$)" },
      { q: "Is $u = \\sin(x - t)$ a solution to wave eq with $c = 1$?", a: "Yes" },
      { q: "Steady state of $u_t = u_{xx}$ on $[0,L]$ with $u(0)=u(L)=0$?", a: "$0$" },
      { q: "Order of $u_{xxxx}$?", a: "$4$" },
      { q: "Laplacian in 2D polar?", a: "$\\frac{1}{r}(ru_r)_r + \\frac{1}{r^2}u_{\\theta\\theta}$" }
    ]
  },
  {
    id: "real-analysis",
    title: "Real Analysis",
    level: "advanced",
    summary: "Sequences, limits, continuity, differentiation, Riemann integration via ε-δ.",
    examples: [
      { title: "Example 1 — $\\varepsilon$-$\\delta$ continuity", prompt: "Prove $f(x) = 2x + 1$ is continuous at $a$.", steps: [
        { label: "Given $\\varepsilon$", body: "Pick $\\delta = \\varepsilon/2$." },
        { label: "Verify", body: "$|f(x) - f(a)| = 2|x - a| < \\varepsilon$." }
      ], answer: "Continuous ✓" },
      { title: "Example 2 — Monotone convergence", prompt: "$a_n = 1 - 1/n$.", steps: [
        { label: "Increasing & bounded above by 1", body: "Converges to $\\sup = 1$." }
      ], answer: "$\\lim = 1$" },
      { title: "Example 3 — Cauchy", prompt: "Is $a_n = 1/n$ Cauchy?", steps: [
        { label: "Check", body: "$|a_n - a_m| \\leq 1/N$ for $n, m > N$. Yes." }
      ], answer: "Yes" },
      { title: "Example 4 — Riemann integral", prompt: "$\\int_0^1 x\\,dx$ via lower sums.", steps: [
        { label: "Partition $[0,1]$ into $n$", body: "Lower sum $\\to 1/2$." }
      ], answer: "$1/2$" }
    ],
    tasks: [
      { q: "Is $\\mathbb{Q}$ complete?", a: "No" },
      { q: "Is $\\mathbb{R}$ complete?", a: "Yes" },
      { q: "Cauchy $\\Rightarrow$ convergent in?", a: "Complete metric space" },
      { q: "Bolzano-Weierstrass: bounded sequence has?", a: "Convergent subsequence" },
      { q: "Continuous on compact $\\Rightarrow$?", a: "Attains max & min" },
      { q: "Heine-Borel: compact in $\\mathbb{R}^n$ iff?", a: "Closed and bounded" },
      { q: "Is $f(x) = 1/x$ uniformly continuous on $(0,1]$?", a: "No" },
      { q: "MVT applies to differentiable on?", a: "$[a, b]$, diff on $(a, b)$" },
      { q: "Is every continuous function Riemann integrable on $[a,b]$?", a: "Yes" },
      { q: "Sup of $\\{1 - 1/n : n \\in \\mathbb{N}\\}$?", a: "$1$" }
    ]
  },
  {
    id: "complex-analysis",
    title: "Complex Analysis",
    level: "advanced",
    summary: "Holomorphic functions, Cauchy-Riemann, contour integrals, residues.",
    examples: [
      { title: "Example 1 — Cauchy-Riemann", prompt: "Verify $f(z) = z^2$ is holomorphic.", steps: [
        { label: "Write $u + iv$", body: "$u = x^2 - y^2$, $v = 2xy$." },
        { label: "Check CR", body: "$u_x = 2x = v_y$, $u_y = -2y = -v_x$ ✓" }
      ], answer: "Holomorphic everywhere" },
      { title: "Example 2 — Cauchy's theorem", prompt: "$\\oint_{|z| = 1} z^2\\,dz$?", steps: [
        { label: "Analytic inside", body: "$\\oint = 0$." }
      ], answer: "$0$" },
      { title: "Example 3 — Residue", prompt: "$\\operatorname{Res}_{z=0} \\frac{1}{z}$.", steps: [
        { label: "Coefficient of $z^{-1}$", body: "$1$." }
      ], answer: "$1$" },
      { title: "Example 4 — Contour integral via residues", prompt: "$\\oint_{|z|=2} \\frac{1}{z(z - 1)}\\,dz$.", steps: [
        { label: "Residues at $z = 0$ and $z = 1$", body: "$-1 + 1 = 0$." },
        { label: "Integral", body: "$2\\pi i \\cdot 0 = 0$." }
      ], answer: "$0$" }
    ],
    tasks: [
      { q: "Is $\\bar z$ holomorphic?", a: "No" },
      { q: "$\\oint_{|z| = 1} \\frac{1}{z}\\,dz$?", a: "$2\\pi i$" },
      { q: "$\\operatorname{Res}_{z = 1} \\frac{1}{(z-1)^2}$?", a: "$0$" },
      { q: "$\\operatorname{Res}_{z = 0} \\frac{\\sin z}{z^2}$?", a: "$1$" },
      { q: "Liouville: bounded entire $\\Rightarrow$?", a: "Constant" },
      { q: "Number of zeros of $z^3$ at $z = 0$?", a: "$3$" },
      { q: "Is $|z|$ analytic?", a: "No" },
      { q: "Laurent expansion of $1/z$ around $0$?", a: "$1/z$" },
      { q: "Fundamental theorem of algebra: polynomial of degree $n$ has?", a: "$n$ roots in $\\mathbb{C}$" },
      { q: "Maximum modulus on a closed disk attained at?", a: "Boundary" }
    ]
  },
  {
    id: "fourier-analysis",
    title: "Fourier Analysis",
    level: "advanced",
    summary: "Fourier series, Fourier transform, convolution, Parseval.",
    examples: [
      { title: "Example 1 — Fourier series of square wave", prompt: "Period $2\\pi$, $f = 1$ on $(0, \\pi)$, $-1$ on $(-\\pi, 0)$.", steps: [
        { label: "Series", body: "$f(x) = \\frac{4}{\\pi}\\sum_{n \\text{ odd}} \\frac{\\sin nx}{n}$." }
      ], answer: "$\\frac{4}{\\pi}\\sum_{n\\,\\text{odd}} \\frac{\\sin nx}{n}$" },
      { title: "Example 2 — Coefficient formula", prompt: "$a_n$ in $f \\sim \\sum a_n \\cos(nx) + b_n \\sin(nx)$.", steps: [
        { label: "Orthogonality", body: "$a_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\cos(nx)\\,dx$." }
      ], answer: "$\\frac{1}{\\pi}\\int f\\cos(nx)\\,dx$" },
      { title: "Example 3 — Transform", prompt: "Fourier transform of $e^{-x^2}$ (up to normalization).", steps: [
        { label: "Gaussian", body: "$\\hat f(k) = \\sqrt{\\pi}\\, e^{-k^2/4}$." }
      ], answer: "$\\sqrt{\\pi}\\, e^{-k^2/4}$" },
      { title: "Example 4 — Parseval", prompt: "Relate $\\int |f|^2$ and $\\sum |c_n|^2$.", steps: [
        { label: "Parseval", body: "$\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} |f|^2\\,dx = \\sum_{n} |c_n|^2$." }
      ], answer: "Parseval identity" }
    ],
    tasks: [
      { q: "FT of $\\delta(x)$?", a: "$1$" },
      { q: "FT of $1$?", a: "$2\\pi\\delta(k)$" },
      { q: "FT of derivative $f'$?", a: "$ik\\hat f$" },
      { q: "Convolution theorem: $\\widehat{f * g}$?", a: "$\\hat f \\cdot \\hat g$" },
      { q: "FT of $e^{-a|x|}$ ($a > 0$)?", a: "$\\frac{2a}{a^2 + k^2}$" },
      { q: "Fourier series of $f \\equiv 1$ (period $2\\pi$)?", a: "$1$" },
      { q: "Lowest non-trivial frequency in expansion of period $T$?", a: "$2\\pi/T$" },
      { q: "Is FT linear?", a: "Yes" },
      { q: "Does shift in time correspond to phase in freq?", a: "Yes" },
      { q: "Uncertainty principle: $\\sigma_x \\sigma_k \\geq ?$", a: "$1/2$" }
    ]
  },
  {
    id: "abstract-algebra",
    title: "Abstract Algebra",
    level: "advanced",
    summary: "Groups, subgroups, homomorphisms, rings, fields, quotient structures.",
    examples: [
      { title: "Example 1 — Group axioms", prompt: "$(\\mathbb{Z}, +)$ a group?", steps: [
        { label: "Check", body: "Associative, identity $0$, inverse $-n$, closed." }
      ], answer: "Yes (abelian)" },
      { title: "Example 2 — Lagrange's theorem", prompt: "Subgroup order divides group order.", steps: [
        { label: "If $|G| = 12$", body: "Possible subgroup orders: $1, 2, 3, 4, 6, 12$." }
      ], answer: "Divisors of $|G|$" },
      { title: "Example 3 — Cyclic group", prompt: "$\\mathbb{Z}_6 = \\langle 1 \\rangle$. Order of $2$?", steps: [
        { label: "Compute", body: "$2 + 2 + 2 = 0$, so order $3$." }
      ], answer: "$3$" },
      { title: "Example 4 — Ring example", prompt: "Is $\\mathbb{Z}/4\\mathbb{Z}$ a field?", steps: [
        { label: "Check $2 \\cdot ? = 1$", body: "No (zero divisor)." }
      ], answer: "No" }
    ],
    tasks: [
      { q: "Order of $\\mathbb{Z}_n$?", a: "$n$" },
      { q: "Is $S_3$ abelian?", a: "No" },
      { q: "Order of $S_n$?", a: "$n!$" },
      { q: "Is $\\mathbb{Z}_p$ a field for $p$ prime?", a: "Yes" },
      { q: "Kernel of trivial homomorphism?", a: "Entire group" },
      { q: "Number of subgroups of $\\mathbb{Z}_{12}$?", a: "$6$" },
      { q: "Index of $n\\mathbb{Z}$ in $\\mathbb{Z}$?", a: "$n$" },
      { q: "Is the symmetric group $S_4$ solvable?", a: "Yes" },
      { q: "Is $S_5$ solvable?", a: "No" },
      { q: "Galois group of $x^2 - 2$ over $\\mathbb{Q}$?", a: "$\\mathbb{Z}_2$" }
    ]
  },
  {
    id: "topology",
    title: "Topology",
    level: "advanced",
    summary: "Topological spaces, continuity, compactness, connectedness, metric spaces.",
    examples: [
      { title: "Example 1 — Topology definition", prompt: "Verify $\\tau = \\{\\emptyset, \\{a\\}, \\{a, b\\}\\}$ on $\\{a, b\\}$.", steps: [
        { label: "Check axioms", body: "Contains $\\emptyset$ and $X$; closed under unions, intersections ✓" }
      ], answer: "Topology ✓" },
      { title: "Example 2 — Continuity", prompt: "$f: \\mathbb{R} \\to \\mathbb{R}$ continuous iff preimage of open is open.", steps: [
        { label: "Equivalent", body: "To $\\varepsilon$-$\\delta$ for metric spaces." }
      ], answer: "Topological definition" },
      { title: "Example 3 — Compactness", prompt: "Is $[0, 1] \\subset \\mathbb{R}$ compact?", steps: [
        { label: "Heine-Borel", body: "Closed and bounded ⇒ compact." }
      ], answer: "Yes" },
      { title: "Example 4 — Connected", prompt: "Is $\\mathbb{Q} \\subset \\mathbb{R}$ connected?", steps: [
        { label: "Split", body: "$(-\\infty, \\sqrt 2) \\cap \\mathbb{Q}$, $(\\sqrt 2, \\infty) \\cap \\mathbb{Q}$." }
      ], answer: "No" }
    ],
    tasks: [
      { q: "Is the discrete topology Hausdorff?", a: "Yes" },
      { q: "Is the indiscrete topology Hausdorff?", a: "No (if $|X| > 1$)" },
      { q: "Compact subsets of $\\mathbb{R}^n$?", a: "Closed and bounded" },
      { q: "Continuous image of compact?", a: "Compact" },
      { q: "Continuous image of connected?", a: "Connected" },
      { q: "Is the circle $S^1$ simply connected?", a: "No" },
      { q: "Is the sphere $S^2$ simply connected?", a: "Yes" },
      { q: "Closure of $(0, 1)$ in $\\mathbb{R}$?", a: "$[0, 1]$" },
      { q: "Interior of $\\mathbb{Q}$ in $\\mathbb{R}$?", a: "$\\emptyset$" },
      { q: "Boundary of $[0, 1]$ in $\\mathbb{R}$?", a: "$\\{0, 1\\}$" }
    ]
  },
  {
    id: "numerical-methods",
    title: "Numerical Methods",
    level: "advanced",
    summary: "Root finding, interpolation, numerical integration, ODE solvers.",
    examples: [
      { title: "Example 1 — Newton's method", prompt: "Find root of $x^2 - 2$ starting at $x_0 = 1$.", steps: [
        { label: "Iteration", body: "$x_{n+1} = x_n - (x_n^2 - 2)/(2x_n)$." },
        { label: "Run", body: "$1 \\to 1.5 \\to 1.4167 \\to 1.4142$." }
      ], answer: "$\\sqrt{2} \\approx 1.4142$" },
      { title: "Example 2 — Trapezoidal rule", prompt: "$\\int_0^1 x^2\\,dx$ with $n = 2$.", steps: [
        { label: "Points", body: "$x = 0, 0.5, 1$; values $0, 0.25, 1$." },
        { label: "Apply", body: "$0.5 [(0 + 1)/2 + 0.25] = 0.375$." }
      ], answer: "$0.375$ (exact $1/3$)" },
      { title: "Example 3 — Simpson's rule", prompt: "$\\int_0^1 x^2\\,dx$, $n = 2$.", steps: [
        { label: "Apply", body: "$\\frac{1}{6}(0 + 4(0.25) + 1) = 1/3$." }
      ], answer: "$1/3$ (exact)" },
      { title: "Example 4 — Euler's method", prompt: "$y' = y$, $y(0) = 1$, $h = 0.5$, find $y(1)$.", steps: [
        { label: "$y_1 = 1 + 0.5(1) = 1.5$", body: "$y_2 = 1.5 + 0.5(1.5) = 2.25$." }
      ], answer: "$y(1) \\approx 2.25$ (true $e \\approx 2.718$)" }
    ],
    tasks: [
      { q: "Newton's iteration formula?", a: "$x_{n+1} = x_n - f(x_n)/f'(x_n)$" },
      { q: "Order of convergence of Newton's method (simple root)?", a: "Quadratic" },
      { q: "Bisection halves the interval each step. Iterations to reach $10^{-6}$ from $[0,1]$?", a: "$\\approx 20$" },
      { q: "Trapezoidal error scales as?", a: "$O(h^2)$" },
      { q: "Simpson's error scales as?", a: "$O(h^4)$" },
      { q: "Order of Runge-Kutta 4?", a: "$O(h^4)$" },
      { q: "Why does Euler diverge for stiff ODEs at large step?", a: "Stability limit" },
      { q: "Condition number of $A$ measures?", a: "Sensitivity to perturbation" },
      { q: "LU decomposition speeds up?", a: "Repeated solves $Ax = b$" },
      { q: "Lagrange interpolation through $n+1$ points yields degree?", a: "$\\leq n$" }
    ]
  },
  {
    id: "coordinate-geometry",
    title: "Coordinate Geometry",
    level: "basic",
    summary: "Lines on the plane, distance, midpoint, slope, line equations.",
    examples: [
      { title: "Example 1 — Distance", prompt: "Distance from $(1,2)$ to $(4,6)$.", steps: [
        { label: "Apply", body: "$d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = 5$." }
      ], answer: "$5$" },
      { title: "Example 2 — Midpoint", prompt: "Midpoint of $(1,2)$ and $(5,8)$.", steps: [
        { label: "Average", body: "$(\\tfrac{1+5}{2}, \\tfrac{2+8}{2}) = (3, 5)$." }
      ], answer: "$(3, 5)$" },
      { title: "Example 3 — Slope", prompt: "Slope through $(2,3)$ and $(5,11)$.", steps: [
        { label: "Rise / run", body: "$m = (11-3)/(5-2) = 8/3$." }
      ], answer: "$8/3$" },
      { title: "Example 4 — Line equation", prompt: "Line through $(1,2)$ with slope $3$.", steps: [
        { label: "Point-slope", body: "$y - 2 = 3(x - 1)$ → $y = 3x - 1$." }
      ], answer: "$y = 3x - 1$" }
    ],
    tasks: [
      { q: "Distance from $(0,0)$ to $(3,4)$?", a: "$5$" },
      { q: "Midpoint of $(0,0)$ and $(10,6)$?", a: "$(5,3)$" },
      { q: "Slope of $y = -2x + 7$?", a: "$-2$" },
      { q: "$y$-intercept of $y = 4x - 3$?", a: "$-3$" },
      { q: "Slope through $(1,1)$ and $(3,7)$?", a: "$3$" },
      { q: "Is $(2,5)$ on $y = 2x + 1$?", a: "Yes" },
      { q: "Equation of horizontal line through $(2,7)$?", a: "$y = 7$" },
      { q: "Equation of vertical line through $(4,1)$?", a: "$x = 4$" },
      { q: "Parallel lines have same?", a: "Slope" },
      { q: "Perpendicular slopes multiply to?", a: "$-1$" }
    ]
  },
  {
    id: "solid-geometry",
    title: "Solid Geometry",
    level: "basic",
    summary: "Volumes and surface areas of cubes, prisms, cylinders, cones, spheres.",
    examples: [
      { title: "Example 1 — Cube volume", prompt: "Side $4$.", steps: [
        { label: "Apply", body: "$V = s^3 = 64$." }
      ], answer: "$64$" },
      { title: "Example 2 — Cylinder", prompt: "$r = 3$, $h = 10$.", steps: [
        { label: "Apply", body: "$V = \\pi r^2 h = 90\\pi$." }
      ], answer: "$90\\pi$" },
      { title: "Example 3 — Sphere", prompt: "$r = 6$.", steps: [
        { label: "Apply", body: "$V = \\tfrac{4}{3}\\pi r^3 = 288\\pi$." }
      ], answer: "$288\\pi$" },
      { title: "Example 4 — Cone", prompt: "$r = 3$, $h = 4$.", steps: [
        { label: "Apply", body: "$V = \\tfrac{1}{3}\\pi r^2 h = 12\\pi$." }
      ], answer: "$12\\pi$" }
    ],
    tasks: [
      { q: "Volume of cube side $5$?", a: "$125$" },
      { q: "Surface area of cube side $3$?", a: "$54$" },
      { q: "Cylinder $r=2$, $h=5$ volume?", a: "$20\\pi$" },
      { q: "Cone $r=6$, $h=4$ volume?", a: "$48\\pi$" },
      { q: "Sphere $r=3$ volume?", a: "$36\\pi$" },
      { q: "Surface area of sphere $r=2$?", a: "$16\\pi$" },
      { q: "Rectangular box $2 \\times 3 \\times 4$ volume?", a: "$24$" },
      { q: "Pyramid base $36$, height $5$ volume?", a: "$60$" },
      { q: "Hemisphere $r=3$ volume?", a: "$18\\pi$" },
      { q: "Volume of unit ball?", a: "$\\tfrac{4\\pi}{3}$" }
    ]
  },
  {
    id: "conic-sections",
    title: "Conic Sections",
    level: "intermediate",
    summary: "Parabolas, ellipses, hyperbolas — the curves you get by slicing a cone.",
    examples: [
      { title: "Example 1 — Parabola vertex", prompt: "$y = x^2 - 4x + 7$.", steps: [
        { label: "Complete the square", body: "$y = (x-2)^2 + 3$." }
      ], answer: "Vertex $(2, 3)$" },
      { title: "Example 2 — Ellipse", prompt: "$\\dfrac{x^2}{25} + \\dfrac{y^2}{9} = 1$.", steps: [
        { label: "Semi-axes", body: "$a = 5$ (x), $b = 3$ (y)." }
      ], answer: "Semi-axes $5, 3$" },
      { title: "Example 3 — Hyperbola", prompt: "$\\dfrac{x^2}{16} - \\dfrac{y^2}{9} = 1$.", steps: [
        { label: "Asymptotes", body: "$y = \\pm \\tfrac{3}{4} x$." }
      ], answer: "Asymptotes $y = \\pm \\tfrac{3}{4}x$" },
      { title: "Example 4 — Identify conic", prompt: "$x^2 + y^2 = 25$.", steps: [
        { label: "Form", body: "$x^2 + y^2 = r^2$." }
      ], answer: "Circle, $r = 5$" }
    ],
    tasks: [
      { q: "Focal length of $y = x^2$?", a: "$1/4$" },
      { q: "Vertex of $y = (x+1)^2 - 4$?", a: "$(-1, -4)$" },
      { q: "Eccentricity of circle?", a: "$0$" },
      { q: "Eccentricity of parabola?", a: "$1$" },
      { q: "Ellipse $x^2/9 + y^2/4 = 1$. Foci on?", a: "x-axis" },
      { q: "Foci distance for above?", a: "$\\sqrt 5$" },
      { q: "Hyperbola $x^2 - y^2 = 1$ asymptotes?", a: "$y = \\pm x$" },
      { q: "Conic $4x^2 + 9y^2 = 36$ type?", a: "Ellipse" },
      { q: "Conic $xy = 1$ type?", a: "Hyperbola" },
      { q: "$y^2 = 4x$ opens?", a: "Right" }
    ]
  },
  {
    id: "mathematical-logic",
    title: "Mathematical Logic & Proof",
    level: "intermediate",
    summary: "Direct proof, contradiction, contrapositive, induction.",
    examples: [
      { title: "Example 1 — Direct proof", prompt: "Sum of two even numbers is even.", steps: [
        { label: "Setup", body: "Let $a = 2m$, $b = 2n$." },
        { label: "Add", body: "$a + b = 2(m + n)$ — even." }
      ], answer: "Even ✓" },
      { title: "Example 2 — Contradiction", prompt: "Prove $\\sqrt 2$ is irrational.", steps: [
        { label: "Assume", body: "Suppose $\\sqrt 2 = p/q$ in lowest terms." },
        { label: "Square", body: "$p^2 = 2q^2$, so $p$ even, $p = 2k$." },
        { label: "Sub back", body: "$4k^2 = 2q^2 \\Rightarrow q^2 = 2k^2$, so $q$ even. Contradicts lowest terms." }
      ], answer: "Irrational ✓" },
      { title: "Example 3 — Induction", prompt: "$1 + 2 + \\ldots + n = n(n+1)/2$.", steps: [
        { label: "Base", body: "$n = 1$: LHS $= 1$, RHS $= 1$ ✓" },
        { label: "Step", body: "Assume true for $n$. Then $\\sum_{1}^{n+1} = n(n+1)/2 + (n+1) = (n+1)(n+2)/2$ ✓" }
      ], answer: "Holds for all $n \\geq 1$" },
      { title: "Example 4 — Contrapositive", prompt: "If $n^2$ is even, then $n$ is even.", steps: [
        { label: "Contrapositive", body: "If $n$ is odd, then $n^2$ is odd." },
        { label: "Verify", body: "$(2k+1)^2 = 4k^2 + 4k + 1$ — odd ✓" }
      ], answer: "Proved ✓" }
    ],
    tasks: [
      { q: "Is induction valid in $\\mathbb{Z}^+$?", a: "Yes (well-ordering)" },
      { q: "Contradiction proof assumes?", a: "Negation of conclusion" },
      { q: "$P \\Rightarrow Q$ contrapositive?", a: "$\\neg Q \\Rightarrow \\neg P$" },
      { q: "$P \\Rightarrow Q$ converse?", a: "$Q \\Rightarrow P$" },
      { q: "Is converse always equivalent?", a: "No" },
      { q: "Pigeonhole: $n+1$ items in $n$ boxes ⇒?", a: "At least one box has $\\geq 2$" },
      { q: "Strong induction differs from weak how?", a: "Assumes all $\\leq n$, not just $n$" },
      { q: "Is the empty statement true?", a: "Yes (vacuously)" },
      { q: "Counterexample suffices to disprove?", a: "Universal statement" },
      { q: "Sum of first $n$ odd numbers?", a: "$n^2$ (by induction)" }
    ]
  },
  {
    id: "graph-theory",
    title: "Graph Theory",
    level: "intermediate",
    summary: "Graphs, trees, paths, cycles, Eulerian/Hamiltonian, coloring.",
    examples: [
      { title: "Example 1 — Degree sum", prompt: "Graph with degrees $1, 2, 3, 4$.", steps: [
        { label: "Handshake", body: "Sum of degrees $= 2 \\times$ edges." },
        { label: "Compute", body: "$10 / 2 = 5$ edges." }
      ], answer: "$5$ edges" },
      { title: "Example 2 — Tree edges", prompt: "Tree with $n$ vertices has?", steps: [
        { label: "Result", body: "$n - 1$ edges, always." }
      ], answer: "$n - 1$" },
      { title: "Example 3 — Eulerian path", prompt: "When does an Eulerian circuit exist?", steps: [
        { label: "Theorem", body: "Iff every vertex has even degree (connected graph)." }
      ], answer: "All degrees even" },
      { title: "Example 4 — Chromatic number", prompt: "$K_4$ (complete graph 4 vertices).", steps: [
        { label: "Each pair adjacent", body: "Needs 4 colors." }
      ], answer: "$\\chi(K_4) = 4$" }
    ],
    tasks: [
      { q: "Edges in $K_n$?", a: "$\\binom{n}{2}$" },
      { q: "$\\chi$ of bipartite graph?", a: "$2$" },
      { q: "Number of edges in tree with $10$ vertices?", a: "$9$" },
      { q: "Cycle $C_5$ chromatic number?", a: "$3$" },
      { q: "Sum of all degrees = ?", a: "$2 \\cdot |E|$" },
      { q: "Petersen graph chromatic number?", a: "$3$" },
      { q: "Bipartite iff no?", a: "Odd cycle" },
      { q: "Connected graph with $n$ vertices, $n-1$ edges is?", a: "Tree" },
      { q: "Königsberg bridges: Eulerian?", a: "No" },
      { q: "Four-color theorem applies to?", a: "Planar graphs" }
    ]
  },
  {
    id: "recurrence-generating",
    title: "Recurrences & Generating Functions",
    level: "advanced",
    summary: "Solving linear recurrences and using generating functions to extract coefficients.",
    examples: [
      { title: "Example 1 — Fibonacci", prompt: "$F_n = F_{n-1} + F_{n-2}$, $F_0 = 0, F_1 = 1$.", steps: [
        { label: "Characteristic", body: "$x^2 = x + 1 \\Rightarrow x = \\varphi, \\hat\\varphi$." },
        { label: "Closed form", body: "$F_n = (\\varphi^n - \\hat\\varphi^n)/\\sqrt 5$ (Binet)." }
      ], answer: "Binet's formula" },
      { title: "Example 2 — Linear recurrence", prompt: "$a_n = 5a_{n-1} - 6a_{n-2}$.", steps: [
        { label: "Char eq", body: "$x^2 - 5x + 6 = 0 \\Rightarrow x = 2, 3$." },
        { label: "General", body: "$a_n = A \\cdot 2^n + B \\cdot 3^n$." }
      ], answer: "$a_n = A \\cdot 2^n + B \\cdot 3^n$" },
      { title: "Example 3 — Generating function", prompt: "$\\sum_{n \\geq 0} x^n$.", steps: [
        { label: "Geometric", body: "$1/(1 - x)$ for $|x| < 1$." }
      ], answer: "$\\dfrac{1}{1 - x}$" },
      { title: "Example 4 — Coefficient extraction", prompt: "Coefficient of $x^5$ in $(1+x)^{10}$.", steps: [
        { label: "Binomial", body: "$\\binom{10}{5} = 252$." }
      ], answer: "$252$" }
    ],
    tasks: [
      { q: "Fibonacci $F_5$?", a: "$5$" },
      { q: "$\\varphi$ value?", a: "$\\tfrac{1+\\sqrt 5}{2}$" },
      { q: "GF for $\\{1,1,1,\\ldots\\}$?", a: "$1/(1-x)$" },
      { q: "GF for $\\{1,2,3,\\ldots\\}$?", a: "$1/(1-x)^2$" },
      { q: "Catalan number $C_3$?", a: "$5$" },
      { q: "Closed form for $a_n = 2a_{n-1}$, $a_0 = 1$?", a: "$2^n$" },
      { q: "$\\sum_n F_n x^n$ closed form?", a: "$x/(1 - x - x^2)$" },
      { q: "Order of recurrence $a_n - 3a_{n-2} = 0$?", a: "$2$" },
      { q: "Coefficient of $x^3$ in $e^x$?", a: "$1/6$" },
      { q: "Convolution in GFs corresponds to?", a: "Cauchy product" }
    ]
  },
  {
    id: "computability",
    title: "Computability & Complexity",
    level: "advanced",
    summary: "Turing machines, decidability, P vs NP, halting problem.",
    examples: [
      { title: "Example 1 — Halting problem", prompt: "Is the halting problem decidable?", steps: [
        { label: "Turing's result", body: "No. No algorithm can decide for all programs." }
      ], answer: "Undecidable" },
      { title: "Example 2 — Decidable", prompt: "Is 'does this DFA accept any string?' decidable?", steps: [
        { label: "Reachability", body: "Yes — check if any accepting state is reachable." }
      ], answer: "Decidable" },
      { title: "Example 3 — Complexity P", prompt: "Is sorting in P?", steps: [
        { label: "Polynomial bound", body: "Yes — many algorithms in $O(n \\log n)$." }
      ], answer: "Yes" },
      { title: "Example 4 — NP-complete", prompt: "SAT is NP-complete (Cook-Levin).", steps: [
        { label: "Implication", body: "If SAT $\\in$ P, then P = NP." }
      ], answer: "Cook-Levin theorem" }
    ],
    tasks: [
      { q: "Church-Turing thesis: equivalent models include?", a: "Lambda calculus, register machines" },
      { q: "Is $\\{a^n b^n\\}$ regular?", a: "No (not finite-state)" },
      { q: "Is it context-free?", a: "Yes" },
      { q: "Class of problems solvable in poly time?", a: "P" },
      { q: "Class verifiable in poly time?", a: "NP" },
      { q: "Reduction direction for proving X is NP-hard?", a: "Known NP-hard ≤ X" },
      { q: "Travel Salesman: NP-hard?", a: "Yes" },
      { q: "Sorting lower bound (comparisons)?", a: "$\\Omega(n \\log n)$" },
      { q: "Is graph isomorphism known to be in P?", a: "No (but not NP-complete either)" },
      { q: "EXPTIME ⊆ ?", a: "EXPSPACE" }
    ]
  },
  {
    id: "galois-theory",
    title: "Galois Theory",
    level: "advanced",
    summary: "Field extensions, automorphism groups, solvability of polynomials.",
    examples: [
      { title: "Example 1 — Extension degree", prompt: "$[\\mathbb{Q}(\\sqrt 2) : \\mathbb{Q}]$?", steps: [
        { label: "Basis", body: "$\\{1, \\sqrt 2\\}$, dimension $2$." }
      ], answer: "$2$" },
      { title: "Example 2 — Galois group", prompt: "$x^2 - 2$ over $\\mathbb{Q}$.", steps: [
        { label: "Automorphisms", body: "Identity and $\\sqrt 2 \\mapsto -\\sqrt 2$." }
      ], answer: "$\\mathbb{Z}/2\\mathbb{Z}$" },
      { title: "Example 3 — Solvable", prompt: "$x^2 + 1$.", steps: [
        { label: "Group", body: "Galois group $\\mathbb{Z}/2$, abelian → solvable." }
      ], answer: "Solvable by radicals" },
      { title: "Example 4 — Quintic", prompt: "$x^5 - 1$ over $\\mathbb{Q}$.", steps: [
        { label: "Cyclotomic", body: "Galois group $(\\mathbb{Z}/5)^* \\cong \\mathbb{Z}/4$." }
      ], answer: "Cyclic, order $4$" }
    ],
    tasks: [
      { q: "Galois group of $x^2 - p$ over $\\mathbb{Q}$?", a: "$\\mathbb{Z}/2$" },
      { q: "Degree of $\\mathbb{Q}(\\sqrt[3]{2}) / \\mathbb{Q}$?", a: "$3$" },
      { q: "Is general quintic solvable by radicals?", a: "No (Abel-Ruffini)" },
      { q: "Galois group of general quintic?", a: "$S_5$" },
      { q: "Is $S_5$ solvable?", a: "No" },
      { q: "Splitting field of $x^2 - 2$ over $\\mathbb{Q}$?", a: "$\\mathbb{Q}(\\sqrt 2)$" },
      { q: "Algebraic closure of $\\mathbb{Q}$?", a: "$\\overline{\\mathbb{Q}}$" },
      { q: "Galois correspondence between?", a: "Subfields ↔ subgroups" },
      { q: "Galois group of $\\mathbb{F}_{p^n}/\\mathbb{F}_p$?", a: "Cyclic, order $n$" },
      { q: "Generator of finite-field extension Galois group?", a: "Frobenius" }
    ]
  },
  {
    id: "lie-groups",
    title: "Lie Groups & Lie Algebras",
    level: "advanced",
    summary: "Continuous symmetry groups and their infinitesimal generators.",
    examples: [
      { title: "Example 1 — SO(2)", prompt: "Group of $2 \\times 2$ rotation matrices.", steps: [
        { label: "Form", body: "$R(\\theta) = \\begin{pmatrix}\\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta\\end{pmatrix}$." }
      ], answer: "$\\dim = 1$" },
      { title: "Example 2 — SU(2)", prompt: "Group of $2 \\times 2$ unitary, $\\det = 1$.", steps: [
        { label: "Dimension", body: "$3$ real parameters, covers SO(3) doubly." }
      ], answer: "$\\dim = 3$" },
      { title: "Example 3 — so(3) generators", prompt: "Lie algebra of SO(3).", steps: [
        { label: "Generators", body: "$L_x, L_y, L_z$ with $[L_x, L_y] = L_z$, cyclic." }
      ], answer: "$[L_i, L_j] = \\epsilon_{ijk} L_k$" },
      { title: "Example 4 — Exponential map", prompt: "Get group element from algebra element.", steps: [
        { label: "Formula", body: "$g = e^{tX}$ where $X$ is in the Lie algebra." }
      ], answer: "$g = e^{tX}$" }
    ],
    tasks: [
      { q: "$\\dim SO(n)$?", a: "$n(n-1)/2$" },
      { q: "$\\dim SU(n)$?", a: "$n^2 - 1$" },
      { q: "$\\dim U(n)$?", a: "$n^2$" },
      { q: "SO(3) and SU(2) relation?", a: "$SU(2)$ is double cover" },
      { q: "Generators of $SU(2)$?", a: "Pauli/$2i$" },
      { q: "Jacobi identity?", a: "$[X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0$" },
      { q: "$\\mathfrak{sl}(2,\\mathbb{R})$ dimension?", a: "$3$" },
      { q: "Is $SL(2,\\mathbb{R})$ compact?", a: "No" },
      { q: "Lie algebra of $GL(n)$?", a: "$\\mathfrak{gl}(n)$ — all $n \\times n$ matrices" },
      { q: "Killing form negative definite ⇒?", a: "Compact semisimple group" }
    ]
  },
  {
    id: "differential-geometry",
    title: "Differential Geometry",
    level: "advanced",
    summary: "Curves, surfaces, manifolds, curvature.",
    examples: [
      { title: "Example 1 — Arc length", prompt: "Curve $\\vec r(t) = (\\cos t, \\sin t)$, $t \\in [0, 2\\pi]$.", steps: [
        { label: "Apply", body: "$L = \\int_0^{2\\pi} |\\vec r'(t)|\\,dt = 2\\pi$." }
      ], answer: "$2\\pi$" },
      { title: "Example 2 — Tangent vector", prompt: "$\\vec r(t) = (t, t^2, t^3)$ at $t=1$.", steps: [
        { label: "Derivative", body: "$\\vec r'(1) = (1, 2, 3)$." }
      ], answer: "$\\langle 1, 2, 3 \\rangle$" },
      { title: "Example 3 — Curvature of circle", prompt: "Circle of radius $R$.", steps: [
        { label: "Result", body: "$\\kappa = 1/R$." }
      ], answer: "$\\kappa = 1/R$" },
      { title: "Example 4 — Gaussian curvature of sphere", prompt: "Sphere of radius $R$.", steps: [
        { label: "Result", body: "$K = 1/R^2$, constant positive." }
      ], answer: "$K = 1/R^2$" }
    ],
    tasks: [
      { q: "Curvature of straight line?", a: "$0$" },
      { q: "Gaussian curvature of plane?", a: "$0$" },
      { q: "Gaussian curvature of saddle?", a: "Negative" },
      { q: "Manifold of dimension $n$ locally looks like?", a: "$\\mathbb{R}^n$" },
      { q: "Torsion measures?", a: "Out-of-plane twisting" },
      { q: "Theorema Egregium: $K$ is intrinsic ⇒?", a: "Bending preserves $K$" },
      { q: "First fundamental form measures?", a: "Lengths/angles on surface" },
      { q: "Second fundamental form measures?", a: "Curvature embedded in $\\mathbb{R}^3$" },
      { q: "Geodesic on flat plane?", a: "Straight line" },
      { q: "Geodesic on sphere?", a: "Great circle" }
    ]
  },
  {
    id: "tensor-calculus",
    title: "Tensor Calculus",
    level: "advanced",
    summary: "Tensors, indices, covariant derivatives, Einstein summation.",
    examples: [
      { title: "Example 1 — Tensor rank", prompt: "Vector vs scalar vs matrix.", steps: [
        { label: "Definition", body: "Scalar = rank 0, vector = rank 1, matrix = rank 2." }
      ], answer: "Rank = number of indices" },
      { title: "Example 2 — Metric tensor (flat)", prompt: "Minkowski $\\eta_{\\mu\\nu}$.", steps: [
        { label: "Form", body: "$\\eta = \\text{diag}(-1, 1, 1, 1)$." }
      ], answer: "$\\eta_{\\mu\\nu} = \\text{diag}(-1,1,1,1)$" },
      { title: "Example 3 — Raise an index", prompt: "$A^\\mu = g^{\\mu\\nu} A_\\nu$.", steps: [
        { label: "Apply", body: "Metric raises and lowers indices." }
      ], answer: "Contract with $g^{\\mu\\nu}$" },
      { title: "Example 4 — Einstein summation", prompt: "$A_\\mu B^\\mu$ means?", steps: [
        { label: "Convention", body: "Repeated index summed: $\\sum_\\mu A_\\mu B^\\mu$." }
      ], answer: "Implicit sum" }
    ],
    tasks: [
      { q: "Kronecker $\\delta^\\mu_\\nu$ value?", a: "$1$ if $\\mu = \\nu$, else $0$" },
      { q: "Contraction reduces rank by?", a: "$2$" },
      { q: "Christoffel symbols are tensors?", a: "No" },
      { q: "Riemann tensor rank?", a: "$4$" },
      { q: "Number of independent components of Riemann in 4D?", a: "$20$" },
      { q: "Ricci tensor from Riemann?", a: "$R_{\\mu\\nu} = R^\\alpha{}_{\\mu\\alpha\\nu}$" },
      { q: "Ricci scalar from Ricci?", a: "$R = g^{\\mu\\nu} R_{\\mu\\nu}$" },
      { q: "Covariant derivative includes?", a: "Christoffel correction" },
      { q: "Metric covariant derivative?", a: "$0$" },
      { q: "Tensor product of two vectors gives?", a: "Rank-$2$ tensor" }
    ]
  },
  {
    id: "algebraic-topology",
    title: "Algebraic Topology",
    level: "advanced",
    summary: "Fundamental group, homology, simplicial complexes, Euler characteristic.",
    examples: [
      { title: "Example 1 — π₁ of circle", prompt: "Fundamental group of $S^1$.", steps: [
        { label: "Loops counted by winding", body: "$\\pi_1(S^1) = \\mathbb{Z}$." }
      ], answer: "$\\mathbb{Z}$" },
      { title: "Example 2 — π₁ of sphere", prompt: "$\\pi_1(S^2)$?", steps: [
        { label: "Simply connected", body: "Every loop contracts." }
      ], answer: "Trivial" },
      { title: "Example 3 — Euler characteristic", prompt: "$\\chi$ of a sphere?", steps: [
        { label: "$V - E + F$", body: "Tetrahedron: $4 - 6 + 4 = 2$." }
      ], answer: "$\\chi(S^2) = 2$" },
      { title: "Example 4 — Homology of point", prompt: "$H_n(\\text{pt})$.", steps: [
        { label: "Result", body: "$H_0 = \\mathbb{Z}$, $H_n = 0$ for $n > 0$." }
      ], answer: "Concentrated in degree $0$" }
    ],
    tasks: [
      { q: "$\\chi$ of torus?", a: "$0$" },
      { q: "$\\chi$ of genus-$g$ surface?", a: "$2 - 2g$" },
      { q: "$\\pi_1(\\text{torus})$?", a: "$\\mathbb{Z}^2$" },
      { q: "$\\pi_n(S^n)$?", a: "$\\mathbb{Z}$" },
      { q: "$H_n(S^n)$?", a: "$\\mathbb{Z}$" },
      { q: "$H_n$ of contractible space?", a: "$0$ for $n > 0$" },
      { q: "Homotopy equivalence preserves?", a: "Homology, $\\pi_n$" },
      { q: "Cell complex of sphere uses how many cells?", a: "$2$ ($e^0, e^n$)" },
      { q: "Brouwer fixed-point theorem applies to?", a: "Disk (and $D^n$)" },
      { q: "Borsuk-Ulam: continuous $S^n \\to \\mathbb{R}^n$ ⇒?", a: "Antipodal pair maps to same point" }
    ]
  },
  {
    id: "riemannian-geometry",
    title: "Riemannian Geometry",
    level: "advanced",
    summary: "Metrics, geodesics, curvature tensors, Einstein manifolds.",
    examples: [
      { title: "Example 1 — Metric", prompt: "Euclidean $g_{ij} = \\delta_{ij}$.", steps: [
        { label: "Form", body: "$ds^2 = dx^2 + dy^2 + dz^2$." }
      ], answer: "Flat" },
      { title: "Example 2 — Sphere metric", prompt: "$S^2$, radius $R$.", steps: [
        { label: "Form", body: "$ds^2 = R^2(d\\theta^2 + \\sin^2\\theta\\,d\\phi^2)$." }
      ], answer: "Spherical metric" },
      { title: "Example 3 — Geodesic equation", prompt: "Schematic.", steps: [
        { label: "Form", body: "$\\ddot x^\\mu + \\Gamma^\\mu_{\\alpha\\beta} \\dot x^\\alpha \\dot x^\\beta = 0$." }
      ], answer: "Geodesic equation" },
      { title: "Example 4 — Einstein manifold", prompt: "Condition.", steps: [
        { label: "Definition", body: "$R_{\\mu\\nu} = \\lambda g_{\\mu\\nu}$." }
      ], answer: "Ricci proportional to metric" }
    ],
    tasks: [
      { q: "Sectional curvature of unit sphere?", a: "$+1$" },
      { q: "Sectional curvature of flat torus?", a: "$0$" },
      { q: "Hyperbolic space curvature?", a: "Negative constant" },
      { q: "Geodesic minimizes?", a: "Length (locally)" },
      { q: "Levi-Civita connection unique by?", a: "Torsion-free, metric-compatible" },
      { q: "Symmetric space example?", a: "Sphere, hyperbolic" },
      { q: "Killing vector generates?", a: "Isometry" },
      { q: "Ricci-flat manifolds are?", a: "Einstein with $\\lambda = 0$" },
      { q: "Calabi-Yau is?", a: "Ricci-flat Kähler" },
      { q: "Volume of unit ball in hyperbolic 3-space?", a: "Diverges" }
    ]
  },
  {
    id: "measure-theory",
    title: "Measure Theory",
    level: "advanced",
    summary: "σ-algebras, Lebesgue measure and integration, convergence theorems.",
    examples: [
      { title: "Example 1 — σ-algebra", prompt: "Smallest σ-algebra on $\\{a, b\\}$ containing $\\{a\\}$.", steps: [
        { label: "Complete", body: "$\\{\\emptyset, \\{a\\}, \\{b\\}, \\{a,b\\}\\}$." }
      ], answer: "Power set" },
      { title: "Example 2 — Lebesgue measure", prompt: "$m([0,1])$.", steps: [
        { label: "Definition", body: "Length: $1$." }
      ], answer: "$1$" },
      { title: "Example 3 — Null set", prompt: "$m(\\mathbb{Q} \\cap [0,1])$.", steps: [
        { label: "Countable", body: "Measure $0$." }
      ], answer: "$0$" },
      { title: "Example 4 — Dominated convergence", prompt: "Conditions.", steps: [
        { label: "Theorem", body: "If $f_n \\to f$ pointwise and $|f_n| \\leq g$ integrable, then $\\int f_n \\to \\int f$." }
      ], answer: "DCT" }
    ],
    tasks: [
      { q: "$m(\\mathbb{Q})$?", a: "$0$" },
      { q: "Cantor set measure?", a: "$0$" },
      { q: "Is Dirichlet function Riemann integrable?", a: "No" },
      { q: "Lebesgue integrable?", a: "Yes (= 0)" },
      { q: "MCT requires sequence to be?", a: "Monotone" },
      { q: "Fatou's lemma direction?", a: "$\\int \\liminf \\leq \\liminf \\int$" },
      { q: "$L^p$ space norm?", a: "$(\\int |f|^p)^{1/p}$" },
      { q: "Almost everywhere means?", a: "Except null set" },
      { q: "Radon-Nikodym needs?", a: "Absolute continuity" },
      { q: "Lebesgue measure on $\\mathbb{R}^n$ invariant under?", a: "Translation, rotation" }
    ]
  },
  {
    id: "functional-analysis",
    title: "Functional Analysis",
    level: "advanced",
    summary: "Banach and Hilbert spaces, bounded operators, spectral theory.",
    examples: [
      { title: "Example 1 — Banach space", prompt: "$C[0,1]$ with sup norm.", steps: [
        { label: "Complete normed", body: "Continuous functions, Cauchy → convergent." }
      ], answer: "Banach" },
      { title: "Example 2 — Hilbert space", prompt: "$L^2$ with inner product.", steps: [
        { label: "Inner product", body: "$\\langle f, g \\rangle = \\int f \\bar g$." }
      ], answer: "Hilbert" },
      { title: "Example 3 — Bounded operator", prompt: "$T: L^2 \\to L^2$, $Tf = xf$.", steps: [
        { label: "Norm", body: "$\\|T\\| \\leq \\sup|x| = 1$ on $[0,1]$." }
      ], answer: "$\\|T\\| = 1$" },
      { title: "Example 4 — Spectrum", prompt: "Multiplication operator above.", steps: [
        { label: "Spectrum", body: "$\\sigma(T) = [0, 1]$." }
      ], answer: "$[0, 1]$" }
    ],
    tasks: [
      { q: "Hahn-Banach extends?", a: "Bounded linear functionals" },
      { q: "Riesz representation: dual of Hilbert =?", a: "Itself" },
      { q: "$\\ell^2$ is what kind?", a: "Hilbert space" },
      { q: "Compact operator on Hilbert: spectrum?", a: "Discrete (accumulating at $0$)" },
      { q: "Open mapping theorem applies to?", a: "Surjective bounded linear" },
      { q: "Closed graph theorem: equivalent to?", a: "Boundedness" },
      { q: "Self-adjoint operator spectrum?", a: "Real" },
      { q: "Norm of identity?", a: "$1$" },
      { q: "Schauder basis exists in?", a: "Separable Banach (not all)" },
      { q: "Banach-Steinhaus principle is?", a: "Uniform boundedness" }
    ]
  },
  {
    id: "calculus-of-variations",
    title: "Calculus of Variations",
    level: "advanced",
    summary: "Optimizing functionals via the Euler-Lagrange equation.",
    examples: [
      { title: "Example 1 — Shortest path", prompt: "Minimize $\\int \\sqrt{1 + y'^2}\\,dx$.", steps: [
        { label: "Apply EL", body: "$y'' = 0$ → $y$ linear in $x$." }
      ], answer: "Straight line" },
      { title: "Example 2 — Brachistochrone", prompt: "Fastest-descent curve.", steps: [
        { label: "Result", body: "Cycloid." }
      ], answer: "Cycloid" },
      { title: "Example 3 — Surface of revolution", prompt: "Minimize lateral area.", steps: [
        { label: "EL gives", body: "Catenoid: $y = a \\cosh(x/a)$." }
      ], answer: "Catenoid" },
      { title: "Example 4 — Geodesic on sphere", prompt: "Minimize arc length on $S^2$.", steps: [
        { label: "EL gives", body: "Great circle." }
      ], answer: "Great circle" }
    ],
    tasks: [
      { q: "Euler-Lagrange equation?", a: "$\\partial L/\\partial y - d/dx(\\partial L/\\partial y') = 0$" },
      { q: "Principle of least action minimizes?", a: "$\\int L\\,dt$" },
      { q: "Soap film between rings is?", a: "Catenoid" },
      { q: "Isoperimetric problem solution?", a: "Circle" },
      { q: "Hamilton's principle is variational?", a: "Yes" },
      { q: "Noether's theorem ⇒?", a: "Symmetry → conservation" },
      { q: "Constraint via?", a: "Lagrange multipliers" },
      { q: "Second variation positive ⇒?", a: "Local minimum" },
      { q: "Field theory generalization variable?", a: "$\\phi(x, t)$" },
      { q: "Direct method in CoV uses?", a: "Lower semi-continuity + compactness" }
    ]
  },
  {
    id: "function-sequences",
    title: "Sequences & Series of Functions",
    level: "advanced",
    summary: "Pointwise vs uniform convergence, Weierstrass M-test, power series.",
    examples: [
      { title: "Example 1 — Pointwise convergence", prompt: "$f_n(x) = x^n$ on $[0, 1]$.", steps: [
        { label: "Limit", body: "$0$ for $x < 1$, $1$ at $x = 1$." }
      ], answer: "Discontinuous limit" },
      { title: "Example 2 — Uniform convergence", prompt: "$f_n(x) = x/n$ on $[0,1]$.", steps: [
        { label: "Sup", body: "$\\sup |f_n| = 1/n \\to 0$ uniformly." }
      ], answer: "Uniform" },
      { title: "Example 3 — M-test", prompt: "$\\sum \\sin(nx)/n^2$.", steps: [
        { label: "Bound", body: "$|\\sin(nx)/n^2| \\leq 1/n^2$, $\\sum 1/n^2 < \\infty$." }
      ], answer: "Converges uniformly" },
      { title: "Example 4 — Power series radius", prompt: "$\\sum x^n / n!$.", steps: [
        { label: "Ratio test", body: "$R = \\lim |a_n/a_{n+1}| = \\infty$." }
      ], answer: "All $x$" }
    ],
    tasks: [
      { q: "Uniform $\\Rightarrow$ pointwise?", a: "Yes" },
      { q: "Pointwise $\\Rightarrow$ uniform?", a: "No" },
      { q: "Uniform limit of continuous is?", a: "Continuous" },
      { q: "Radius of $\\sum x^n$?", a: "$1$" },
      { q: "Radius of $\\sum n! x^n$?", a: "$0$" },
      { q: "Term-by-term differentiation needs?", a: "Uniform conv. of $f_n'$" },
      { q: "Abel's theorem about?", a: "Behavior at boundary" },
      { q: "Cauchy criterion for uniform?", a: "$\\sup |f_n - f_m| \\to 0$" },
      { q: "Dini's theorem: monotone + pointwise + compact ⇒?", a: "Uniform" },
      { q: "Stone-Weierstrass: polynomials dense in?", a: "$C[a,b]$" }
    ]
  },
  {
    id: "random-variables",
    title: "Random Variables & Distributions",
    level: "advanced",
    summary: "Common distributions, expectation, variance, and the Central Limit Theorem.",
    examples: [
      { title: "Example 1 — Binomial mean", prompt: "$X \\sim \\text{Bin}(n, p)$.", steps: [
        { label: "Result", body: "$E[X] = np$, $\\text{Var}(X) = np(1-p)$." }
      ], answer: "$np$" },
      { title: "Example 2 — Poisson", prompt: "$X \\sim \\text{Poi}(\\lambda)$.", steps: [
        { label: "PMF", body: "$P(X = k) = e^{-\\lambda} \\lambda^k/k!$." },
        { label: "Mean", body: "$\\lambda$." }
      ], answer: "Mean $\\lambda$, Var $\\lambda$" },
      { title: "Example 3 — Normal", prompt: "$X \\sim N(\\mu, \\sigma^2)$. PDF?", steps: [
        { label: "PDF", body: "$\\dfrac{1}{\\sigma\\sqrt{2\\pi}} e^{-(x-\\mu)^2/(2\\sigma^2)}$." }
      ], answer: "Bell curve" },
      { title: "Example 4 — CLT", prompt: "Sample mean of i.i.d. with mean $\\mu$, var $\\sigma^2$.", steps: [
        { label: "Statement", body: "$\\sqrt n (\\bar X - \\mu) \\to N(0, \\sigma^2)$." }
      ], answer: "Asymptotically normal" }
    ],
    tasks: [
      { q: "Var of fair coin?", a: "$1/4$" },
      { q: "Exponential$(\\lambda)$ mean?", a: "$1/\\lambda$" },
      { q: "Geometric$(p)$ mean?", a: "$1/p$" },
      { q: "Uniform$(a,b)$ mean?", a: "$(a+b)/2$" },
      { q: "Memoryless property held by?", a: "Exponential, Geometric" },
      { q: "Sum of independent Poissons?", a: "Poisson with sum rates" },
      { q: "Sum of independent normals?", a: "Normal" },
      { q: "Markov's inequality: $P(X \\geq a) \\leq$?", a: "$E[X]/a$" },
      { q: "Chebyshev: $P(|X - \\mu| \\geq k\\sigma) \\leq$?", a: "$1/k^2$" },
      { q: "Law of large numbers: $\\bar X_n \\to$?", a: "$\\mu$ a.s." }
    ]
  },
  {
    id: "stochastic-processes",
    title: "Stochastic Processes",
    level: "advanced",
    summary: "Markov chains, random walks, Poisson processes, Brownian motion.",
    examples: [
      { title: "Example 1 — Markov chain", prompt: "Two states with transitions.", steps: [
        { label: "Property", body: "Future depends only on present, not past." }
      ], answer: "Markov property" },
      { title: "Example 2 — Stationary distribution", prompt: "$\\pi P = \\pi$.", steps: [
        { label: "Solve", body: "Left eigenvector of transition matrix with eigenvalue $1$." }
      ], answer: "$\\pi P = \\pi$" },
      { title: "Example 3 — Random walk", prompt: "Simple symmetric on $\\mathbb{Z}$.", steps: [
        { label: "Mean", body: "$0$." },
        { label: "Variance", body: "$n$ after $n$ steps." }
      ], answer: "Var $= n$" },
      { title: "Example 4 — Brownian motion", prompt: "$W(t)$ — Wiener process.", steps: [
        { label: "Property", body: "$W(t) \\sim N(0, t)$." }
      ], answer: "Var $= t$" }
    ],
    tasks: [
      { q: "Memorylessness needed for?", a: "Markov property" },
      { q: "Stationary distribution always exists for irreducible aperiodic finite?", a: "Yes" },
      { q: "Random walk on $\\mathbb{Z}$: recurrent?", a: "Yes (in 1D, 2D), not 3D+" },
      { q: "Poisson process: inter-arrival distribution?", a: "Exponential" },
      { q: "Poisson process: rate $\\lambda$. $N(t)$ distribution?", a: "Poisson$(\\lambda t)$" },
      { q: "Brownian motion path is?", a: "Continuous but nowhere differentiable" },
      { q: "Martingale: $E[X_{n+1} | \\mathcal F_n] =$?", a: "$X_n$" },
      { q: "Stopping time: condition on past?", a: "Decision is measurable" },
      { q: "Ito calculus: $dW^2 =$?", a: "$dt$" },
      { q: "Geometric Brownian motion: $dX/X =$?", a: "$\\mu\\,dt + \\sigma\\,dW$" }
    ]
  },
  {
    id: "bayesian-statistics",
    title: "Bayesian Statistics",
    level: "advanced",
    summary: "Priors, posteriors, conjugate families, credible intervals.",
    examples: [
      { title: "Example 1 — Bayes' rule", prompt: "Posterior from prior and likelihood.", steps: [
        { label: "Formula", body: "$P(\\theta | D) \\propto P(D | \\theta) P(\\theta)$." }
      ], answer: "Bayes' rule" },
      { title: "Example 2 — Conjugate (Beta-Binomial)", prompt: "Beta prior + binomial likelihood.", steps: [
        { label: "Update", body: "Posterior is Beta$(\\alpha + k, \\beta + n - k)$." }
      ], answer: "Beta posterior" },
      { title: "Example 3 — Updating", prompt: "Beta(1,1) prior, see $H, H, T$.", steps: [
        { label: "Posterior", body: "Beta(3, 2)." }
      ], answer: "Beta(3, 2)" },
      { title: "Example 4 — Credible interval", prompt: "$95\\%$ Bayesian interval.", steps: [
        { label: "Definition", body: "Posterior probability $0.95$ inside." }
      ], answer: "Posterior-based range" }
    ],
    tasks: [
      { q: "Prior reflects?", a: "Prior belief" },
      { q: "Likelihood depends on?", a: "Data given $\\theta$" },
      { q: "Marginal likelihood (evidence) integrates over?", a: "$\\theta$" },
      { q: "Improper prior: integrates to?", a: "Infinity" },
      { q: "Jeffreys prior is?", a: "$\\sqrt{\\det I(\\theta)}$" },
      { q: "Conjugate to normal mean (known variance)?", a: "Normal" },
      { q: "MAP estimator?", a: "Argmax of posterior" },
      { q: "Posterior predictive averages over?", a: "Posterior" },
      { q: "MCMC samples?", a: "From posterior" },
      { q: "Metropolis-Hastings acceptance ratio uses?", a: "Posterior ratios" }
    ]
  },
  {
    id: "optimization",
    title: "Optimization",
    level: "advanced",
    summary: "Linear programming, convex optimization, KKT, gradient descent.",
    examples: [
      { title: "Example 1 — LP standard form", prompt: "Min $c^T x$ s.t. $Ax = b$, $x \\geq 0$.", steps: [
        { label: "Geometry", body: "Optimum at a vertex of the feasible polytope." }
      ], answer: "Simplex finds vertex" },
      { title: "Example 2 — KKT conditions", prompt: "Constrained min.", steps: [
        { label: "Form", body: "Gradient of Lagrangian zero, complementary slackness, primal/dual feasibility." }
      ], answer: "KKT conditions" },
      { title: "Example 3 — Convex", prompt: "$f(x) = x^2$.", steps: [
        { label: "Test", body: "$f'' = 2 \\geq 0$ everywhere." }
      ], answer: "Convex" },
      { title: "Example 4 — Gradient descent", prompt: "Update rule.", steps: [
        { label: "Rule", body: "$x_{n+1} = x_n - \\eta \\nabla f(x_n)$." }
      ], answer: "$x \\to x - \\eta\\nabla f$" }
    ],
    tasks: [
      { q: "Convex set: line segment property?", a: "Both endpoints in $\\Rightarrow$ segment in" },
      { q: "Sum of convex functions is?", a: "Convex" },
      { q: "Max of convex functions is?", a: "Convex" },
      { q: "Local min of convex function is?", a: "Global min" },
      { q: "Quadratic $\\tfrac{1}{2} x^T A x$ convex iff?", a: "$A \\succeq 0$" },
      { q: "Newton's method for optimization uses?", a: "Hessian" },
      { q: "LP duality: weak ⇒?", a: "$c^T x \\geq b^T y$" },
      { q: "Strong duality for convex (Slater)?", a: "Yes" },
      { q: "Stochastic gradient descent samples?", a: "One example per step" },
      { q: "Lagrange multipliers ⇒ extension to inequality is?", a: "KKT" }
    ]
  },
  {
    id: "information-theory",
    title: "Information Theory",
    level: "advanced",
    summary: "Entropy, mutual information, channel capacity, source coding.",
    examples: [
      { title: "Example 1 — Entropy fair coin", prompt: "$H(\\tfrac{1}{2}, \\tfrac{1}{2})$.", steps: [
        { label: "Compute", body: "$1$ bit." }
      ], answer: "$1$ bit" },
      { title: "Example 2 — Biased coin", prompt: "$H(0.9, 0.1)$.", steps: [
        { label: "Compute", body: "$\\approx 0.47$ bits." }
      ], answer: "$\\approx 0.47$ bits" },
      { title: "Example 3 — Mutual information", prompt: "$I(X; Y) = H(X) - H(X|Y)$.", steps: [
        { label: "Meaning", body: "Reduction in uncertainty about $X$ given $Y$." }
      ], answer: "$\\geq 0$" },
      { title: "Example 4 — Channel capacity", prompt: "Binary symmetric channel, error $p$.", steps: [
        { label: "Formula", body: "$C = 1 - H(p)$ bits per use." }
      ], answer: "$1 - H(p)$" }
    ],
    tasks: [
      { q: "$H(X)$ for uniform on $n$ symbols?", a: "$\\log_2 n$" },
      { q: "$H(X)$ for deterministic?", a: "$0$" },
      { q: "Joint entropy: $H(X,Y) \\leq$?", a: "$H(X) + H(Y)$" },
      { q: "Conditional: $H(X|Y) \\leq$?", a: "$H(X)$" },
      { q: "KL divergence: symmetric?", a: "No" },
      { q: "Shannon source coding: lower bound?", a: "$H(X)$ bits per symbol" },
      { q: "Huffman code is?", a: "Optimal prefix code" },
      { q: "Mutual information of independent variables?", a: "$0$" },
      { q: "Differential entropy of $N(0, \\sigma^2)$?", a: "$\\tfrac{1}{2}\\log(2\\pi e \\sigma^2)$" },
      { q: "Maximum entropy distribution (fixed mean & var)?", a: "Gaussian" }
    ]
  },
  {
    id: "game-theory",
    title: "Game Theory",
    level: "advanced",
    summary: "Nash equilibrium, zero-sum games, mixed strategies, cooperative games.",
    examples: [
      { title: "Example 1 — Prisoner's dilemma", prompt: "Best strategy?", steps: [
        { label: "Analysis", body: "Both defect is unique Nash equilibrium, even though cooperation gives better payoffs." }
      ], answer: "Both defect (Nash)" },
      { title: "Example 2 — Pure Nash", prompt: "Definition.", steps: [
        { label: "Rule", body: "No player can improve by unilaterally changing strategy." }
      ], answer: "Stable point" },
      { title: "Example 3 — Mixed strategy", prompt: "Matching pennies.", steps: [
        { label: "Each", body: "Random $50/50$ — only equilibrium." }
      ], answer: "$(1/2, 1/2)$ mixed" },
      { title: "Example 4 — Battle of the sexes", prompt: "Two pure Nash + a mixed.", steps: [
        { label: "Outcome", body: "Multiple equilibria, coordination problem." }
      ], answer: "Multiple Nash" }
    ],
    tasks: [
      { q: "Zero-sum: total payoff?", a: "Constant (often $0$)" },
      { q: "Minimax theorem applies to?", a: "Two-player zero-sum" },
      { q: "Nash existence proof relies on?", a: "Fixed-point theorem" },
      { q: "Cooperative game core: outcomes where?", a: "No coalition gains by deviating" },
      { q: "Shapley value distributes?", a: "Marginal contributions" },
      { q: "Subgame perfect equilibrium uses?", a: "Backward induction" },
      { q: "Evolutionarily stable strategy: resistant to?", a: "Mutant invasions" },
      { q: "Mechanism design asks?", a: "Design rules to achieve outcome" },
      { q: "Auction theory: revenue equivalence for?", a: "Risk-neutral with private values" },
      { q: "Repeated game: cooperation possible by?", a: "Tit-for-tat / trigger strategy" }
    ]
  },
  {
    id: "dynamical-systems",
    title: "Dynamical Systems & Chaos",
    level: "advanced",
    summary: "Fixed points, bifurcations, attractors, chaos, Lyapunov exponents.",
    examples: [
      { title: "Example 1 — Fixed point", prompt: "$\\dot x = r x - x^3$.", steps: [
        { label: "Set $\\dot x = 0$", body: "$x = 0, \\pm\\sqrt r$ (if $r > 0$)." }
      ], answer: "Pitchfork bifurcation at $r = 0$" },
      { title: "Example 2 — Logistic map", prompt: "$x_{n+1} = r x_n (1 - x_n)$.", steps: [
        { label: "Behavior", body: "Period doubling cascade to chaos as $r \\to 3.57\\ldots$" }
      ], answer: "Chaos onset $\\approx 3.57$" },
      { title: "Example 3 — Lyapunov exponent", prompt: "Definition.", steps: [
        { label: "Formula", body: "$\\lambda = \\lim_n \\tfrac{1}{n} \\sum \\log|f'(x_i)|$." }
      ], answer: "$\\lambda > 0$ ⇒ chaos" },
      { title: "Example 4 — Phase portrait", prompt: "Pendulum.", steps: [
        { label: "Features", body: "Centers (libration), saddles (separatrix), nested ovals." }
      ], answer: "Saddles + centers" }
    ],
    tasks: [
      { q: "Linear stability: eigenvalue real positive ⇒?", a: "Unstable" },
      { q: "Imaginary eigenvalues ⇒?", a: "Center (linearly)" },
      { q: "Hopf bifurcation creates?", a: "Limit cycle" },
      { q: "Strange attractor example?", a: "Lorenz" },
      { q: "Sensitivity to initial conditions defines?", a: "Chaos" },
      { q: "Butterfly effect: physical origin?", a: "Positive Lyapunov" },
      { q: "Feigenbaum constant $\\delta \\approx$?", a: "$4.669$" },
      { q: "KAM theorem describes?", a: "Persistence of quasiperiodic orbits" },
      { q: "Poincaré section reduces?", a: "Continuous flow to discrete map" },
      { q: "Symplectic map preserves?", a: "Phase-space volume" }
    ]
  },
  {
    id: "cryptography",
    title: "Cryptography",
    level: "advanced",
    summary: "RSA, AES, hash functions, elliptic-curve crypto, perfect secrecy.",
    examples: [
      { title: "Example 1 — RSA setup", prompt: "Schematic.", steps: [
        { label: "Keys", body: "$n = pq$, public $e$, private $d \\equiv e^{-1} \\pmod{\\varphi(n)}$." }
      ], answer: "Pub: $(n, e)$; Priv: $d$" },
      { title: "Example 2 — Modular exponentiation", prompt: "$2^{10} \\bmod 13$.", steps: [
        { label: "Compute", body: "$2^{10} = 1024 = 78 \\cdot 13 + 10$, so $\\equiv 10$." }
      ], answer: "$10$" },
      { title: "Example 3 — One-time pad", prompt: "Why it gives perfect secrecy.", steps: [
        { label: "Key as long as message", body: "Ciphertext independent of plaintext." }
      ], answer: "Information-theoretic secure" },
      { title: "Example 4 — Hash collision", prompt: "Birthday bound.", steps: [
        { label: "Collisions expected after", body: "$\\sim 2^{n/2}$ random hashes for an $n$-bit output." }
      ], answer: "$\\sim 2^{n/2}$" }
    ],
    tasks: [
      { q: "RSA security relies on?", a: "Hardness of factoring" },
      { q: "AES block size?", a: "$128$ bits" },
      { q: "SHA-256 output length?", a: "$256$ bits" },
      { q: "Diffie-Hellman key exchange uses?", a: "Discrete log hardness" },
      { q: "Elliptic curve crypto smaller keys for same security?", a: "Yes" },
      { q: "Public-key vs symmetric: speed?", a: "Symmetric is faster" },
      { q: "Digital signature provides?", a: "Authenticity & integrity" },
      { q: "Quantum threat to RSA?", a: "Shor's algorithm" },
      { q: "Perfect secrecy requires key length $\\geq$?", a: "Message length" },
      { q: "Birthday attack exploits?", a: "Collision probability" }
    ]
  }
];
