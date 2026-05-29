// Per-step "why?" reasoning for worked examples.
// Schema: { topic-id: [[why_step0, why_step1, ...], ...one per example] }
// null means no extra reasoning needed (the step body speaks for itself).
window.STEP_WHYS = {

  // ===== MATH =====

  "arithmetic-foundations": [
    [
      "Parentheses first by PEMDAS — they group operations that must be done together as a unit.",
      "Exponents come before multiplication because exponentiation is repeated multiplication; it's a 'higher-order' operation.",
      "Multiplication before addition. The exponent is now resolved, so we can multiply.",
      "Same-priority operations (+, −) go left to right by convention so everyone gets the same answer."
    ],
    [
      "Subtracting a negative reverses direction twice — same as adding. Visualize: going backward into a debt is taking on more debt, but undoing a debt means receiving money.",
      "Adding a negative is the same as subtracting. We collect the negatives at the end."
    ],
    [
      "Absolute value strips direction, leaving distance. So $|x - 4| = 7$ means '$x - 4$ is 7 units from zero' — could be $+7$ or $-7$.",
      "Solve each case independently. Either equation gives a valid $x$."
    ],
    [
      "Start with the smallest prime (2) and keep dividing while you can. Move to next prime (3) when 2 no longer divides.",
      "Continue with the next prime. We stop when the remaining factor is itself prime.",
      "Group repeated primes as powers for clean notation."
    ]
  ],

  "fractions-percentages": [
    [
      "You can't add fractions with different denominators directly — the 'pieces' are different sizes. So we find a common denominator first.",
      "Multiply top and bottom of each fraction by what's needed to reach the common denominator. This doesn't change the value.",
      "Now the denominators match, so we can add numerators directly."
    ],
    [
      "Multiplying fractions is the simplest operation — just go straight across. Why? Because $\\frac{a}{b} \\cdot \\frac{c}{d}$ is 'a/b of c/d', and multiplication doesn't care about denominators matching."
    ],
    [
      "Percent means 'per hundred', so $25\\%$ is shorthand for $25/100 = 0.25$.",
      "Multiply to find what the discount is in dollars — '25% of $\\$80$' is $0.25 \\times 80$.",
      "Subtract the discount from the original to get the sale price."
    ],
    [
      "Compare the CHANGE (new minus old) to the ORIGINAL value. This is why percent change is asymmetric — going up 10% then down 10% doesn't return to the start.",
      "Express the fraction as a percentage — multiply by 100."
    ]
  ],

  "exponents-roots": [
    [
      "Exponent means repeated multiplication. $x^3 \\cdot x^5$ is $x$ multiplied 3 times, then 5 more times — 8 times total. So we add the exponents."
    ],
    [
      "Negative exponent is defined to make $x^a \\cdot x^{-a} = x^0 = 1$ work consistently. The only way: $x^{-a} = 1/x^a$.",
      "Just compute $2^3 = 8$, then flip."
    ],
    [
      "Look for a perfect square hidden inside — the largest one possible.",
      "Use the rule $\\sqrt{ab} = \\sqrt a \\sqrt b$ — splits the root so we can simplify the perfect square."
    ],
    [
      "Multiplying top and bottom by $\\sqrt 3$ (which is the same as multiplying by 1) doesn't change the value, but eliminates the root from the denominator."
    ]
  ],

  "linear-equations": [
    [
      "We want $x$ alone. The constant $+5$ is in the way — subtract it from BOTH sides to peel it off without disturbing equality.",
      "Now the coefficient $3$ multiplies $x$. Divide both sides by $3$ to undo the multiplication."
    ],
    [
      "Get all $x$-terms on one side by subtracting $2x$ from both sides. The choice of which side is arbitrary; pick whatever keeps the $x$ coefficient positive.",
      "Now isolate $x$ — undo the subtraction by adding 7 to both sides.",
      "Final step: divide by the coefficient."
    ],
    [
      "Fractions complicate things. Multiplying every term by the LCD ($6$) clears them all at once.",
      "Now it's a standard linear equation — subtract, then divide."
    ],
    [
      "Convert words to algebra: 'fare equals $\\$3.50$ plus $\\$2$ per mile' becomes $3.50 + 2m$. Equate this to the given fare.",
      "Solve the linear equation. Subtract $3.50$, divide by $2$."
    ]
  ],

  "quadratic-equations": [
    [
      "Look for two numbers that multiply to the constant ($+6$) and add to the middle coefficient ($-5$). This works when the leading coefficient is 1.",
      "Once factored, use zero-product: a product is zero only if one of the factors is zero. So each factor gives a root."
    ],
    [
      "Identify $a, b, c$ from $ax^2 + bx + c = 0$ — needed to plug into the quadratic formula.",
      "Compute the discriminant first to see if real solutions exist (positive ⇒ two reals, zero ⇒ double, negative ⇒ complex).",
      "Plug into the formula $x = \\frac{-b \\pm \\sqrt\\Delta}{2a}$ to get both roots.",
      "The $\\pm$ gives two separate solutions."
    ],
    [
      "Isolate the variable terms on one side.",
      "Add $(b/2)^2$ — the magic number that completes the square. We add it to BOTH sides to keep balance.",
      "Now the left side factors as a perfect square. Take roots — remembering the $\\pm$ — and solve."
    ],
    [
      "Parabola's max (downward-opening, $a < 0$) occurs at the vertex $x = -b/(2a)$. This formula comes from the symmetry of a parabola.",
      "Plug this $x$ back into $h(t)$ to get the maximum height."
    ]
  ],

  "trigonometry": [
    [
      "Sine of the angle relates the opposite side to the hypotenuse — this is the right relation when you know the hyp and an angle, and want the opposite side.",
      "Plug in known values and solve for the unknown."
    ],
    [
      "The Pythagorean identity links sin and cos — knowing one determines the other (up to sign).",
      "Sub the known $\\sin$ and isolate $\\cos^2$.",
      "Take the square root. Sign matters: $\\theta$ is acute (between 0 and 90°), so $\\cos$ is positive."
    ],
    [
      "Isolate $\\sin\\theta$ first — standard 'undo what's around it' approach.",
      "$\\sin = 1/2$ at known reference angles. Within one full revolution there are two: in Q1 and Q2."
    ],
    [
      "Use the law of cosines when you know two sides AND the angle BETWEEN them. The angle's cosine handles the geometric correction beyond Pythagoras.",
      "Compute the squared side length.",
      "Take the square root to get the actual side length."
    ]
  ],

  "limits": [
    [
      "Polynomials are continuous everywhere — the limit equals the function value. So we can just substitute."
    ],
    [
      "Direct substitution gives $0/0$ — an indeterminate form. We can't conclude the limit is 'zero divided by zero' (meaningless); we need to manipulate first.",
      "Factor and cancel the common factor. Once the $(x - 2)$ in the denominator is gone, substitution works.",
      "Now substitute $x = 2$ into the simplified expression."
    ],
    [
      "For limits at infinity of rational functions, divide every term by the highest power of $x$ in the denominator.",
      "As $x \\to \\infty$, terms with $1/x^k$ vanish. Only the ratio of leading coefficients survives."
    ],
    [
      "$\\sin x/x$ gives $0/0$ at $x = 0$ — indeterminate. L'Hôpital's rule applies: take derivative of numerator and denominator separately.",
      "Now evaluate the simpler expression. Since $\\cos$ is continuous, just plug in."
    ]
  ],

  "derivatives": [
    [
      "Power rule applies term-by-term in a polynomial. Linear combinations differentiate term-by-term.",
      "Apply power rule: bring exponent down, decrease exponent by 1. The constant $+7$ has derivative zero."
    ],
    [
      "Notice $\\sin(3x^2)$ is a COMPOSITION (sin OF something). Chain rule is the tool for compositions.",
      "Differentiate the outer ($\\sin$) keeping the inner intact.",
      "Differentiate the inner using power rule.",
      "Multiply the two results — that's the chain rule."
    ],
    [
      "We have a PRODUCT $x^2 \\cdot \\sin x$. Product rule applies (chain rule wouldn't — it's not a composition).",
      "Use $(fg)' = f'g + fg'$. Differentiate each factor in turn while keeping the other intact.",
      "Combine — two terms, one for each factor's turn at being differentiated."
    ],
    [
      "Quotient of two functions — use the quotient rule: $(u/v)' = (u'v - uv')/v^2$. Sign matters: top is $u'v - uv'$ in that order.",
      "Compute the derivatives of numerator and denominator.",
      "Plug into the formula and simplify."
    ]
  ],

  "integrals": [
    [
      "Power rule for integrals: bump exponent up by 1, divide by the new exponent. Inverse of differentiation.",
      "Apply term-by-term. The constant of integration $+C$ accounts for the lost constant when differentiating."
    ],
    [
      "Find an antiderivative first — any function whose derivative is $3x^2$.",
      "The Fundamental Theorem of Calculus: definite integral = antiderivative at upper limit minus at lower limit."
    ],
    [
      "$u$-sub recognizes a function and its derivative both inside the integrand. Here, $x^2$ and $2x$ pair up.",
      "Substitute. The integral simplifies into a standard form.",
      "Replace $u$ with the original expression to get the final answer in terms of $x$."
    ],
    [
      "We have a product where one factor ($x$) simplifies on differentiation, and the other ($e^x$) stays manageable. That's the IBP setup.",
      "Apply $\\int u\\,dv = uv - \\int v\\,du$. The remaining integral is simpler than the original.",
      "Evaluate the remaining integral and combine."
    ]
  ],

  "systems-of-equations": [
    [
      "Substitution works when one variable is already isolated (here $y$ in the first equation). Plug it into the other equation to eliminate $y$.",
      "Now you have a single-variable equation. Solve for $x$.",
      "Plug $x = 2$ back into either original equation to find $y$."
    ],
    [
      "Notice the $y$ coefficients are $+3$ and $-3$. Adding the equations will eliminate $y$ — that's the elimination trick.",
      "Substitute $x = 3$ into either equation to find $y$."
    ],
    [
      "When two equations represent parallel lines, the system has no solution. We detect this when scaling one equation produces a contradiction with the other.",
      "$2x + 4y$ can't equal both $8$ and $9$ — contradiction confirms inconsistency."
    ],
    [
      "Set up the equation system from the word problem.",
      "Use elimination — multiply first equation by 5 so the $c$ coefficients match, then subtract.",
      "Solve for $a$, then back-substitute for $c$."
    ]
  ],

  "logarithms": [
    [
      "$\\log_2 32$ asks 'what exponent on 2 gives 32?'. Counting: $2, 4, 8, 16, 32$ — that's 5 multiplications."
    ],
    [
      "Logs turn products into sums: $\\log(xy) = \\log x + \\log y$. Applies to multiplication inside the log.",
      "Then logs of powers come out as multipliers: $\\log(y^2) = 2 \\log y$."
    ],
    [
      "$\\log_b A = C$ is equivalent to $b^C = A$. Use this to rewrite without logs.",
      "Now solve the simpler equation."
    ],
    [
      "Most calculators don't have $\\log_5$. Change of base $\\log_b a = \\ln a / \\ln b$ converts to a base your calculator can handle.",
      "Compute on a calculator."
    ]
  ],

  // ===== PHYSICS =====

  "kinematics": [
    [
      "Average speed is simply total distance over total time. Definitions matter — no formula manipulation needed."
    ],
    [
      "Use $v = v_0 + gt$ for constant gravitational acceleration. Starting from rest, $v_0 = 0$.",
      "Compute."
    ],
    [
      "Horizontal and vertical motions are INDEPENDENT (Galileo's insight). Time to fall depends only on the vertical drop.",
      "Use $h = \\tfrac{1}{2} g t^2$ to find time of flight.",
      "Horizontal distance is just (horizontal velocity) × (time of flight)."
    ],
    [
      "When you have starting speed, ending speed, and distance but no time, use the time-free kinematic equation $v^2 = v_0^2 + 2ax$.",
      "Substitute and solve for $a$."
    ]
  ],

  "newtons-laws": [
    [
      "Newton's 2nd law $F = ma$ — net force equals mass times acceleration. Direct application."
    ],
    [
      "Same law, rearranged. Force is given, mass is given — solve for acceleration."
    ],
    [
      "At rest = equilibrium = net force is zero. Gravity pulls down with force $mg$, so tension must pull up with the same magnitude.",
      "Compute the magnitude."
    ],
    [
      "Kinetic friction depends on the NORMAL force. On a horizontal surface, $N = mg$ (no vertical acceleration).",
      "Apply $f_k = \\mu_k N$."
    ]
  ],

  "momentum-impulse": [
    [
      "Linear momentum is mass × velocity. Direct definition."
    ],
    [
      "Compute change in momentum (impulse).",
      "Force = impulse / time when the force is constant."
    ],
    [
      "Apply conservation of momentum (no external forces during the collision). Total momentum before = total momentum after.",
      "Substitute. Final state has the combined mass moving at one velocity."
    ],
    [
      "For equal masses in 1D elastic collisions, velocities swap. This is a clean special case — comes from solving the simultaneous conservation of momentum AND KE."
    ]
  ],

  "energy-work": [
    [
      "Kinetic energy formula — direct substitution."
    ],
    [
      "Conservation of energy: initial PE becomes final KE (no friction). Set them equal.",
      "Substitute given values."
    ],
    [
      "Work = force × displacement when they're aligned ($\\cos 0 = 1$)."
    ],
    [
      "First compute work done — equal to the gain in gravitational PE.",
      "Power is work per unit time."
    ]
  ],

  "circular-gravitation": [
    [
      "Centripetal acceleration formula: $a_c = v^2/r$. Direct."
    ],
    [
      "Centripetal force is just mass × centripetal acceleration. The 'cause' of the circular motion."
    ],
    [
      "Newton's universal gravitation: $F = G m_1 m_2 / r^2$. Plug in.",
      "Note how tiny the force is — gravity is incredibly weak between everyday masses."
    ],
    [
      "For circular orbit, gravity provides centripetal force. Set $mg = mv^2/r$, solve for $v = \\sqrt{gr}$.",
      "Compute."
    ]
  ],

  "shm": [
    [
      "Angular frequency $\\omega = \\sqrt{k/m}$ comes from the equation of motion $\\ddot x = -(k/m) x$. The coefficient inside the cosine is $\\omega$."
    ],
    [
      "Pendulum period formula $T = 2\\pi \\sqrt{L/g}$ — independent of mass. Compute."
    ],
    [
      "Energy in SHM oscillates between KE and PE, but total stays $\\tfrac{1}{2} k A^2$. Direct application."
    ],
    [
      "When starting at maximum displacement with zero velocity, the cosine form applies (sine would start at equilibrium)."
    ]
  ],

  "waves": [
    [
      "Wave equation: speed = frequency × wavelength."
    ],
    [
      "Same formula, rearranged: $f = c/\\lambda$."
    ],
    [
      "Light is essentially instantaneous on these scales; thunder travels at speed of sound. Distance = speed × time."
    ],
    [
      "Doppler effect: approaching source compresses wavelengths and raises perceived frequency. Use the source-approaching formula."
    ]
  ],

  "electric-circuits": [
    [
      "Ohm's law $V = IR$ rearranged: $I = V/R$."
    ],
    [
      "Resistances in series add — current flows through each in sequence and faces cumulative opposition."
    ],
    [
      "In parallel, currents split between paths. Reciprocals of resistance (conductances) add — splitting routes increases conductance.",
      "Invert to get equivalent resistance."
    ],
    [
      "Power dissipated by a resistor: $P = I^2 R$. Direct formula application."
    ]
  ],

  "special-relativity": [
    [
      "Lorentz factor formula: $\\gamma = 1/\\sqrt{1 - v^2/c^2}$. Plug in $v = 0.6c$ to get $\\gamma = 1.25$."
    ],
    [
      "Moving clocks run slow as seen from a stationary frame. Multiply proper time by $\\gamma$."
    ],
    [
      "Moving lengths shorten as seen from a stationary frame. Divide proper length by $\\gamma$."
    ],
    [
      "Mass-energy equivalence: $E = mc^2$.",
      "Convert grams to kilograms first (SI units).",
      "Compute."
    ]
  ],

  "qm-foundations": [
    [
      "Normalization: $\\int |\\psi|^2 dx = 1$. For a Gaussian, this requires a specific normalization constant."
    ],
    [
      "The canonical commutator $[\\hat x, \\hat p] = i\\hbar$ is one of the defining axioms of quantum mechanics — comes from $\\hat p = -i\\hbar \\partial/\\partial x$ and direct computation."
    ],
    [
      "Expectation value: sandwich the operator between $\\psi^*$ and $\\psi$, then integrate."
    ],
    [
      "Heisenberg uncertainty principle — the lower bound is a fundamental feature of quantum mechanics, not a measurement limit."
    ]
  ],

  "atomic-physics": [
    [
      "Bohr radius formula collects fundamental constants. Compute numerically."
    ],
    [
      "Hydrogen energy levels go as $-13.6/n^2$ eV. Negative means bound; smaller $|E|$ as $n$ grows means less binding."
    ],
    [
      "Photon energy = energy difference between levels. Then $\\lambda = hc/E$.",
      "Plug in to get the wavelength — in the UV, since the transition is to the ground state."
    ],
    [
      "Electron spin is intrinsic with $s = 1/2$. The eigenvalues of $S_z$ are $\\pm \\hbar/2$."
    ]
  ],

  "vector-algebra": [
    [
      "Magnitude of a vector = Pythagoras on its components."
    ],
    [
      "Dot product = sum of pairwise component products. Returns a scalar."
    ],
    [
      "Angle between vectors comes from $\\cos\\theta = (\\vec a \\cdot \\vec b)/(|\\vec a||\\vec b|)$.",
      "Compute the cosine, then take the inverse cosine to get $\\theta$."
    ],
    [
      "Cross product gives a vector perpendicular to both. Formula: each component is a 2x2 determinant of the other two coordinates.",
      "Apply the formula component-by-component."
    ]
  ],

  "linear-algebra": [
    [
      "Matrix × vector: each entry of the result is a row of the matrix dotted with the input vector."
    ],
    [
      "Determinant of a $2\\times 2$ matrix is $ad - bc$ — geometrically the signed area of the parallelogram spanned by columns."
    ],
    [
      "Inverse of a $2\\times 2$ matrix: swap diagonal, negate off-diagonal, divide by determinant. Works as long as $\\det \\neq 0$."
    ],
    [
      "Eigenvalues come from $\\det(A - \\lambda I) = 0$.",
      "For triangular matrices, the eigenvalues are just the diagonal entries — a useful shortcut."
    ]
  ],

  "complex-numbers": [
    [
      "Multiply like binomials, then replace $i^2$ with $-1$."
    ],
    [
      "Modulus = Pythagorean distance from origin. Compute."
    ],
    [
      "Convert to polar: $r = $ modulus, $\\theta = $ angle. For $1 + i$: $r = \\sqrt 2$, $\\theta = 45°$."
    ],
    [
      "De Moivre's theorem: raise $r$ to the power, multiply $\\theta$ by the power.",
      "Compute and simplify. The result is a real number because $e^{i 2\\pi} = 1$."
    ]
  ],

  "probability": [
    [
      "Probability = favorable outcomes / total outcomes. Direct definition."
    ],
    [
      "Independent events: probabilities multiply. Each coin is independent and fair."
    ],
    [
      "Complement: $P(\\text{not } A) = 1 - P(A)$. Easier than counting all the other faces."
    ],
    [
      "Apply Bayes' theorem.",
      "Surprising result: even a 95% accurate test gives mostly false positives when the disease is rare. Base rates matter."
    ]
  ]
};
