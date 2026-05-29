// Substantially expand all short formula notes (< 60 chars) with original
// explanations covering origin, derivation, worked example, or insight.
// Uses a find-by-prefix pattern so it's resilient to array reordering.

(function () {
  if (!window.FORMULAS) return;

  function E(id, fPrefix, newNote) {
    const arr = window.FORMULAS[id];
    if (!arr) return;
    for (const item of arr) {
      if (item.f && item.f.indexOf(fPrefix) === 0) {
        item.n = newNote;
        return;
      }
    }
  }

  // ============================================================
  // SOLID GEOMETRY
  // ============================================================
  E("solid-geometry", "Cube:",
    "All six faces are congruent squares of side $s$, all twelve edges are length $s$, all eight vertices are right angles. ORIGIN: the simplest regular polyhedron after the tetrahedron. WORKED EXAMPLE: $s = 4$ gives $V = 64$ and $SA = 96$. Volume scales as the cube of size, surface as the square — that's why small things have proportionally more surface area, the reason ice cubes melt slower than crushed ice.");
  E("solid-geometry", "Rectangular box:",
    "Three edge lengths $\\ell, w, h$ (length, width, height). $V = \\ell w h$; total surface $SA = 2(\\ell w + wh + \\ell h)$ from six rectangular faces. Diagonal across the box: $d = \\sqrt{\\ell^2 + w^2 + h^2}$. WORKED EXAMPLE: a $3 \\times 4 \\times 12$ box has $V = 144$, $SA = 192$, diagonal $13$ (a Pythagorean triple in 3D).");
  E("solid-geometry", "Sphere:",
    "Surface area $SA = 4\\pi r^2$; volume $V = \\tfrac{4}{3}\\pi r^3$. ORIGIN: Archimedes (c. 250 BC) proved both — among his proudest results, engraved on his tombstone. DERIVATION: integrate spherical shells $dV = 4\\pi r^2\\,dr$ from 0 to $R$. WORKED EXAMPLE: Earth's radius $\\approx 6370$ km gives surface area $\\approx 5.1 \\times 10^{14}$ m² and volume $\\approx 1.08 \\times 10^{21}$ m³.");
  E("solid-geometry", "Cylinder:",
    "Volume = base area × height = $\\pi r^2 h$. Surface area $2\\pi r^2$ (two circular caps) plus $2\\pi r h$ (lateral rectangle wrapped around). WORKED EXAMPLE: soda can $r = 3.3$ cm, $h = 12$ cm has $V \\approx 411$ cm³ — close to the stated 355 mL because of the curved top/bottom. Optimal can shape (max volume for given surface): $h = 2r$.");
  E("solid-geometry", "Cone:",
    "Volume $V = \\tfrac{1}{3}\\pi r^2 h$ — exactly one-third of the enclosing cylinder. ORIGIN: Eudoxus and Archimedes proved this via the method of exhaustion. Lateral surface area $\\pi r \\ell$ where slant $\\ell = \\sqrt{r^2 + h^2}$. WORKED EXAMPLE: $r = 3, h = 4$ gives slant $5$, volume $12\\pi$, lateral surface $15\\pi$.");
  E("solid-geometry", "Pyramid:",
    "Volume $V = \\tfrac{1}{3}Bh$ for ANY pyramid — square base, triangular base, irregular base. The factor $\\tfrac{1}{3}$ comes from integrating cross-sections that shrink linearly from base to apex. WORKED EXAMPLE: square-base pyramid with base 6×6 and height 10 has volume $\\tfrac{1}{3}(36)(10) = 120$. Same formula gives the volume of a cone (treating its circular base as $B = \\pi r^2$).");

  // ============================================================
  // CONIC SECTIONS
  // ============================================================
  E("conic-sections", "Parabola:",
    "Vertex form $y = a(x-h)^2 + k$ with vertex at $(h, k)$. The factor $a$ controls opening: $a > 0$ opens upward, $a < 0$ downward. ORIGIN: a parabola is the locus of points equidistant from focus and directrix. Focus is at $(h, k + 1/(4a))$, directrix is the line $y = k - 1/(4a)$. WORKED EXAMPLE: $y = 2x^2$ has focus $(0, 1/8)$ — used in parabolic mirrors and satellite dishes to focus parallel rays.");
  E("conic-sections", "Ellipse:",
    "Centered at $(h, k)$ with semi-major axis $a$ and semi-minor axis $b$. Foci at $(h \\pm c, k)$ where $c = \\sqrt{a^2 - b^2}$. ORIGIN: an ellipse is the locus of points whose distances to two foci sum to $2a$ (gardener's construction). WORKED EXAMPLE: Earth's orbit has $a \\approx 1$ AU, $c \\approx 0.0167$ AU, so the eccentricity is small — orbit is nearly circular but the Sun is slightly off-center.");
  E("conic-sections", "Hyperbola:",
    "Two branches with the same asymptotes $y - k = \\pm(b/a)(x - h)$. ORIGIN: locus of points whose distance to two foci DIFFERS by $2a$ (focal-difference definition). $c = \\sqrt{a^2 + b^2}$ here, foci at $(h \\pm c, k)$. WORKED EXAMPLE: GPS uses hyperbolic positioning — the locus of points with constant time-difference of arrival from two satellites is a hyperboloid; three such hyperboloids intersect at your position.");
  E("conic-sections", "Circle:",
    "Special case of the ellipse with $a = b = r$ (eccentricity zero). ORIGIN: defined by Pythagoras' theorem applied to all points equidistant from $(h, k)$. Area $\\pi r^2$, circumference $2\\pi r$. WORKED EXAMPLE: $(x-2)^2 + (y+1)^2 = 25$ is a circle centered at $(2, -1)$ with radius $5$.");
  E("conic-sections", "Eccentricity:",
    "Single number classifying conic shape. ORIGIN: Apollonius of Perga (c. 200 BC) studied conics as sections of a cone — different cutting angles produce circle ($e=0$), ellipse ($0 < e < 1$), parabola ($e = 1$), or hyperbola ($e > 1$). All four obey the focus-directrix definition: $\\text{distance to focus} = e \\times \\text{distance to directrix}$. WORKED EXAMPLE: Halley's comet has $e \\approx 0.967$ — extremely elongated ellipse, ducking close to the Sun every 76 years.");

  // ============================================================
  // MATHEMATICAL LOGIC
  // ============================================================
  E("mathematical-logic", "Direct:",
    "Assume the hypothesis $p$ and derive $q$ step-by-step. Each step uses prior assumptions, axioms, or already-proven theorems. WORKED EXAMPLE: 'if $n$ is even, $n^2$ is even.' Assume $n = 2k$; then $n^2 = 4k^2 = 2(2k^2)$, which is even. Cleanest proof when the implication is straightforward.");
  E("mathematical-logic", "Contradiction:",
    "Assume the negation of what you want to prove ($\\neg q$), follow the consequences, derive a false statement (often $r \\land \\neg r$). The negation must be wrong, so the original $q$ holds. WORKED EXAMPLE: $\\sqrt 2$ irrational. Assume $\\sqrt 2 = p/q$ in lowest terms. Square: $2q^2 = p^2$, so $p$ is even, $p = 2k$, $q^2 = 2k^2$, $q$ even. Both even contradicts lowest terms.");
  E("mathematical-logic", "Contrapositive:",
    "Instead of proving $p \\Rightarrow q$ directly, prove $\\neg q \\Rightarrow \\neg p$. The two statements have IDENTICAL truth tables. Useful when negation simplifies the problem. WORKED EXAMPLE: 'if $n^2$ even then $n$ even' — easier to prove 'if $n$ odd then $n^2$ odd': $n = 2k+1 \\Rightarrow n^2 = 4k^2 + 4k + 1$, odd.");
  E("mathematical-logic", "Induction:",
    "Two ingredients: BASE CASE $P(1)$ true, and INDUCTIVE STEP $P(n) \\Rightarrow P(n+1)$. Together they give all positive integers. ORIGIN: implicit in Euclid; formalized by Pascal and Fermat. WORKED EXAMPLE: $\\sum_{k=1}^n k = n(n+1)/2$. Base: $1 = 1 \\cdot 2/2$ ✓. Step: assume true at $n$; then $\\sum_{k=1}^{n+1} k = n(n+1)/2 + (n+1) = (n+1)(n+2)/2$ ✓.");
  E("mathematical-logic", "Strong induction:",
    "Inductive step uses ALL previous cases $P(1), \\ldots, P(n)$ as hypothesis, not just $P(n)$. Equivalent in logical strength to ordinary induction but often easier to apply. WORKED EXAMPLE: every integer $\\geq 2$ has a prime factorization. If $n$ is prime, done. If composite, $n = ab$ with $1 < a, b < n$; by strong IH both $a$ and $b$ factor into primes, so $n$ does too.");
  E("mathematical-logic", "Pigeonhole:",
    "Putting $n+1$ pigeons in $n$ holes forces some hole to contain at least 2. ORIGIN: Dirichlet (1834) used this trick in number theory. Trivial-looking but devastatingly powerful. WORKED EXAMPLE: 13 people, some two share a birth month (12 months, 13 people). Generalized: with $kn + 1$ pigeons in $n$ holes, some hole has at least $k+1$.");

  // ============================================================
  // RECURRENCE / GENERATING FUNCTIONS
  // ============================================================
  E("recurrence-generating", "Linear:",
    "Each term is a fixed linear combination of the $k$ previous terms. Coefficients $c_1, \\ldots, c_k$ are constants. WORKED EXAMPLE: Fibonacci $F_n = F_{n-1} + F_{n-2}$ has $k = 2$, $c_1 = c_2 = 1$. General theory: solve the characteristic polynomial; combine roots to get the closed form.");
  E("recurrence-generating", "Characteristic:",
    "Substitute $a_n = x^n$ into the recurrence; the polynomial whose roots give exponential solutions. ORIGIN: discrete version of the characteristic polynomial for linear ODEs. WORKED EXAMPLE: $a_n = 5a_{n-1} - 6a_{n-2}$ gives $x^2 - 5x + 6 = (x-2)(x-3)$, so $a_n = A \\cdot 2^n + B \\cdot 3^n$. Repeated roots produce factors $n^k r^n$.");
  E("recurrence-generating", "$F_n",
    "Binet's formula: $F_n = (\\varphi^n - \\hat\\varphi^n)/\\sqrt 5$ where $\\varphi = (1+\\sqrt 5)/2$ is the golden ratio and $\\hat\\varphi = (1-\\sqrt 5)/2$. ORIGIN: derived from characteristic polynomial $x^2 - x - 1 = 0$. WORKED EXAMPLE: $F_{10} = (\\varphi^{10} - \\hat\\varphi^{10})/\\sqrt 5 \\approx 55$ exactly. As $n$ grows, $F_n \\approx \\varphi^n/\\sqrt 5$ — Fibonacci grows exponentially with ratio $\\varphi$.");
  E("recurrence-generating", "$\\sum x^n",
    "Sum of geometric series, valid for $|x| < 1$. ORIGIN: $S(1-x) = 1 + x + x^2 + \\ldots - x - x^2 - \\ldots = 1$. The corresponding generating function packages the sequence $1, 1, 1, \\ldots$ into one function. WORKED EXAMPLE: differentiate to get $\\sum n x^{n-1} = 1/(1-x)^2$, which encodes the sequence $1, 2, 3, \\ldots$.");
  E("recurrence-generating", "$\\sum \\dfrac{x^n}{n!}",
    "Exponential generating function for the constant sequence. ORIGIN: Taylor series of $e^x$. The $n!$ in the denominator means EGFs are best for problems involving arrangements and labeled structures. WORKED EXAMPLE: number of labeled rooted trees on $n$ nodes has EGF $T(x)$ satisfying $T = x e^T$; closed-form $n^{n-1}$ via Lagrange inversion.");
  E("recurrence-generating", "$\\sum \\binom{n}{k}",
    "Binomial theorem written as a generating function. ORIGIN: Newton (1665) generalized to non-integer $n$. Encodes the sequence of binomial coefficients. WORKED EXAMPLE: $(1+x)^n$ at $x = 1$ gives $\\sum \\binom{n}{k} = 2^n$ — number of subsets of an $n$-set; at $x = -1$ gives $0$ — equal numbers of even/odd subsets.");
  E("recurrence-generating", "Convolution:",
    "Multiplying two power series convolves their coefficient sequences. ORIGIN: arises whenever you count pairs adding to $n$. WORKED EXAMPLE: number of ways to roll two dice and get sum $n$ has GF $(x + x^2 + \\ldots + x^6)^2$; coefficient of $x^n$ in the product gives the count. The same trick handles 'change-making' problems, compositions, etc.");

  // ============================================================
  // COMPUTABILITY
  // ============================================================
  E("computability", "Halting problem:",
    "No algorithm can decide, given a program $P$ and input $x$, whether $P$ halts on $x$. ORIGIN: Turing 1936, via diagonal argument. PROOF SKETCH: suppose $H(P, x)$ decides halting. Build $D(P) = $ if $H(P, P)$ says halt, loop forever; else halt. Then $D(D)$ both halts and doesn't — contradiction. CONSEQUENCE: lower bound for theoretical computer science; many real-world problems (program-verification) reduce to halting and are thus undecidable.");
  E("computability", "Church-Turing thesis:",
    "Every 'effectively calculable' function is computable by a Turing machine. ORIGIN: independently formulated by Church (lambda calculus, 1936) and Turing (Turing machines, 1936). PROVED equivalent: lambda calculus, recursive functions, Turing machines, register machines, modern computers — all compute exactly the same class. NOT a theorem but a thesis (definition of 'effective'); confirmed by 90 years of failed attempts to exceed it.");
  E("computability", "P:",
    "Class of decision problems solvable in polynomial time. WORKED EXAMPLES: shortest path (Dijkstra $O(V^2)$), matrix multiplication ($O(n^3)$ or better), primality (AKS, $O(\\log^6 n)$). Considered 'tractable'; cutoff is somewhat arbitrary — $n^{100}$ is in P but useless in practice. Robust to model: same class on Turing machine, RAM, quantum (BQP is bigger).");
  E("computability", "NP:",
    "Decision problems where a 'yes' answer has a polynomial-size certificate that can be verified in polynomial time. WORKED EXAMPLES: SAT (certificate = satisfying assignment), Hamiltonian cycle (certificate = the cycle), factoring (certificate = a factor). Whether P = NP is the most famous open problem in CS, worth \\$1M (Clay Millennium prize).");
  E("computability", "NP-complete:",
    "The hardest problems in NP. Every NP problem reduces to them in polynomial time. ORIGIN: Cook (1971) and Levin (independently) proved SAT is NP-complete; Karp (1972) showed 21 more natural problems are too. Consequence: solve one in polynomial time, and P = NP. WORKED EXAMPLES: 3-SAT, traveling salesman (decision version), graph coloring, knapsack, clique.");
  E("computability", "Rice's theorem:",
    "Any non-trivial property of the LANGUAGE recognized by a program (not its source code) is undecidable. ORIGIN: Henry Rice (1953). DERIVATION: reduce halting to your property. WORKED EXAMPLE: 'does this program ever output 7?' is undecidable. 'does it accept the empty string?' is undecidable. Rice generalizes halting: virtually any interesting semantic question is uncomputable.");

  // ============================================================
  // GALOIS THEORY
  // ============================================================
  E("galois-theory", "$[L : K]$",
    "If $L \\supseteq K$ are fields, $L$ is a vector space over $K$. The DEGREE $[L:K]$ is its dimension. WORKED EXAMPLE: $[\\mathbb Q(\\sqrt 2) : \\mathbb Q] = 2$ — basis $\\{1, \\sqrt 2\\}$. $[\\mathbb Q(\\sqrt[3] 2) : \\mathbb Q] = 3$ — basis $\\{1, \\sqrt[3]2, \\sqrt[3]4\\}$. Multiplicative tower law: $[M:K] = [M:L][L:K]$.");
  E("galois-theory", "$\\text{Gal}(L/K)",
    "All field automorphisms of $L$ that fix every element of $K$. Forms a group under composition. WORKED EXAMPLE: $\\text{Gal}(\\mathbb Q(\\sqrt 2)/\\mathbb Q) = \\{e, \\sigma\\}$ where $\\sigma(\\sqrt 2) = -\\sqrt 2$. Automorphisms permute the roots of the minimal polynomial — the central insight.");
  E("galois-theory", "$|\\text{Gal}(L/K)|",
    "For a Galois (normal + separable) extension, the order of the Galois group equals the extension degree. WORKED EXAMPLE: $\\mathbb Q(\\sqrt 2, \\sqrt 3)/\\mathbb Q$ has degree 4; Galois group is Klein 4-group $\\mathbb Z/2 \\oplus \\mathbb Z/2$ (independent sign flips of $\\sqrt 2$ and $\\sqrt 3$). Non-Galois extensions (e.g., $\\mathbb Q(\\sqrt[3]2)$) have smaller automorphism groups.");
  E("galois-theory", "Solvable by radicals",
    "A polynomial equation can be solved with $+, -, \\times, \\div$ and $n$-th roots iff its Galois group is solvable (has a composition series with abelian factors). ORIGIN: Galois (1832) proved this just before dying in a duel at 20. CONSEQUENCE: there's no general formula for the roots of degree-5 polynomials because $S_5$ is non-solvable. Cubic ($S_3$ solvable) and quartic ($S_4$ solvable) DO have formulas.");
  E("galois-theory", "Fundamental theorem",
    "An inclusion-reversing bijection between subfields of $L$ containing $K$ and subgroups of $\\text{Gal}(L/K)$. WORKED EXAMPLE: $\\mathbb Q(\\sqrt 2, \\sqrt 3)$ has three intermediate fields ($\\mathbb Q(\\sqrt 2)$, $\\mathbb Q(\\sqrt 3)$, $\\mathbb Q(\\sqrt 6)$), matching the three index-2 subgroups of the Klein 4 Galois group.");

  // ============================================================
  // LIE GROUPS
  // ============================================================
  E("lie-groups", "$\\dim SO(n)",
    "The orthogonal group has $n(n-1)/2$ continuous parameters — the number of independent rotations in $n$ dimensions. DERIVATION: $n \\times n$ orthogonal matrices have $n^2$ entries, but $O = I$ imposes $n(n+1)/2$ symmetric constraints. WORKED EXAMPLE: $SO(3)$ has dimension 3 (Euler angles); $SO(4)$ has dimension 6 (used in 4D physics); $SO(1, 3)$ Lorentz has dimension 6 (3 boosts + 3 rotations).");
  E("lie-groups", "$\\dim SU(n)",
    "The special unitary group has $n^2 - 1$ real dimensions. DERIVATION: $n \\times n$ unitary matrices have $2n^2$ real entries; $U^\\dagger U = I$ gives $n^2$ real constraints; det $= 1$ removes one more. WORKED EXAMPLE: $SU(2)$ dimension 3 (matches $SO(3)$ — they share the same Lie algebra); $SU(3)$ dimension 8 (QCD's 8 gluons); $SU(5)$ dimension 24 (Georgi-Glashow GUT).");
  E("lie-groups", "$[X, Y] = XY - YX",
    "The Lie bracket measures how much two infinitesimal generators fail to commute. ORIGIN: defined by Sophus Lie (1880s). PROPERTIES: bilinear, antisymmetric, satisfies Jacobi identity. WORKED EXAMPLE: in $\\mathfrak{so}(3)$, $[J_x, J_y] = J_z$ — rotation about $x$ then $y$ differs from $y$ then $x$ by a small rotation about $z$. The Lie algebra captures all the local group structure.");
  E("lie-groups", "$[X, [Y, Z]]",
    "Jacobi identity: $[X,[Y,Z]] + [Y,[Z,X]] + [Z,[X,Y]] = 0$. The Lie analog of associativity. DERIVATION: applying the commutator $[A,B] = AB - BA$ and expanding all six terms cancel. CONSEQUENCE: makes the Lie bracket compatible with the group structure; allows representation theory to work cleanly.");
  E("lie-groups", "$g(t) = \\exp(tX)",
    "Each element $X$ of a Lie algebra generates a one-parameter subgroup via the matrix exponential. ORIGIN: extends $e^x$ from numbers to matrices: $\\exp(A) = I + A + A^2/2! + \\ldots$. WORKED EXAMPLE: rotations $\\exp(\\theta J_z)$ generated by the angular-momentum-z matrix; quantum time evolution $e^{-iHt/\\hbar}$ generated by the Hamiltonian.");
  E("lie-groups", "$[L_i, L_j]",
    "Angular momentum algebra: $[L_i, L_j] = i\\hbar\\epsilon_{ijk}L_k$. ORIGIN: Heisenberg's matrix mechanics. The structure constants $\\epsilon_{ijk}$ are the Levi-Civita symbol. CONSEQUENCE: simultaneous eigenstates of $L_x, L_y, L_z$ don't exist; one can choose only $L^2$ and one component (conventionally $L_z$) — the source of all magnetic quantum number $m$ rules.");

  // ============================================================
  // DIFFERENTIAL GEOMETRY
  // ============================================================
  E("differential-geometry", "Arc length:",
    "Integrate the speed $|\\vec r'(t)|$ along the curve. INVARIANT under reparametrization — depends only on the path, not how fast you trace it. WORKED EXAMPLE: circle $\\vec r(t) = (R\\cos t, R\\sin t)$ on $[0, 2\\pi]$ has speed $R$ everywhere, so length $= 2\\pi R$. Underlies geodesics, metric structures, and the entire field of intrinsic geometry.");
  E("differential-geometry", "Curvature:",
    "Measures how sharply a curve bends. The cross product $\\vec r' \\times \\vec r''$ picks out the component of acceleration perpendicular to velocity; normalizing by $|\\vec r'|^3$ removes parametrization speed. WORKED EXAMPLE: circle of radius $R$ has $\\kappa = 1/R$ everywhere (smaller circles bend more sharply). Straight line: $\\kappa = 0$. Radius of curvature $1/\\kappa$ is the radius of the best-fitting (osculating) circle.");
  E("differential-geometry", "Torsion:",
    "Rate at which a 3D curve twists OUT of its osculating plane. Zero for planar curves. ORIGIN: Frenet (1847), Serret (1851). WORKED EXAMPLE: a helix $\\vec r = (a\\cos t, a\\sin t, bt)$ has constant curvature $a/(a^2+b^2)$ AND constant torsion $b/(a^2+b^2)$ — characterized uniquely (up to rigid motion) by these two constants.");
  E("differential-geometry", "Frenet-Serret:",
    "Differential equations governing the moving frame $(\\vec T, \\vec N, \\vec B)$ along a curve: $\\vec T' = \\kappa \\vec N$, $\\vec N' = -\\kappa\\vec T + \\tau \\vec B$, $\\vec B' = -\\tau \\vec N$. WORKED EXAMPLE: integrate these with given $\\kappa(s), \\tau(s)$ to reconstruct the unique curve they describe — analog of solving an ODE for position.");
  E("differential-geometry", "Gaussian curvature:",
    "Product of the two principal curvatures at a point. EXTRINSIC formula $K = \\kappa_1 \\kappa_2$ but Gauss's Theorema Egregium shows it's INTRINSIC. WORKED EXAMPLE: unit sphere $K = +1$ everywhere; cylinder $K = 0$ (one principal curvature zero); saddle $K < 0$. Gauss-Bonnet: $\\int K\\,dA = 2\\pi\\chi$ links curvature to topology.");
  E("differential-geometry", "Theorema Egregium",
    "Gauss (1827): Gaussian curvature is preserved under bending (any deformation that preserves distances). REMARKABLE because $K$ is defined extrinsically (via embedding) but is INTRINSIC (computable from the metric alone). CONSEQUENCE: you cannot flatten a sphere onto a plane without stretching — why all flat world maps are distorted.");

  // ============================================================
  // TENSOR CALCULUS
  // ============================================================
  E("tensor-calculus", "Einstein summation:",
    "When an index appears once up and once down in the same term, it's automatically summed over its range. ORIGIN: Einstein introduced this convention while writing his GR papers (1916) to avoid tedious $\\sum$ symbols. WORKED EXAMPLE: $A_\\mu B^\\mu \\equiv \\sum_{\\mu=0}^3 A_\\mu B^\\mu$ in 4D. A summed index is 'dummy'; an unsummed (free) index labels the components of the result.");
  E("tensor-calculus", "Metric:",
    "$ds^2 = g_{\\mu\\nu}dx^\\mu dx^\\nu$ defines infinitesimal distances. The metric encodes the geometry. WORKED EXAMPLES: Minkowski flat $g = \\text{diag}(-1, 1, 1, 1)$; Schwarzschild $g_{tt} = -(1 - 2GM/(rc^2))$; FRW cosmology has time-dependent scale factor $a(t)$ multiplying spatial part.");
  E("tensor-calculus", "Raise/lower:",
    "The metric tensor converts contravariant (upper) to covariant (lower) indices and vice versa. WORKED EXAMPLE: with Minkowski metric, $A_\\mu = (A_0, A_1, A_2, A_3) = (-A^0, A^1, A^2, A^3)$ — the time component flips sign. In curved spacetime, raising/lowering can mix components. Inverse metric $g^{\\mu\\nu}$ is defined by $g^{\\mu\\nu}g_{\\nu\\rho} = \\delta^\\mu_\\rho$.");
  E("tensor-calculus", "Christoffel:",
    "Connection coefficients encoding how basis vectors change from point to point. Computed from the metric via the formula. NOT a tensor — depends on coordinate choice. WORKED EXAMPLE: flat plane in Cartesian: all $\\Gamma = 0$; in polar coordinates $\\Gamma^r_{\\theta\\theta} = -r$, $\\Gamma^\\theta_{r\\theta} = 1/r$ — same geometry, different connection symbols.");
  E("tensor-calculus", "Covariant derivative:",
    "Ordinary derivative $\\partial_\\mu A^\\nu$ doesn't transform as a tensor in curved space because the basis vectors themselves change. Add a Christoffel correction to fix it. WORKED EXAMPLE: parallel transport of a vector along a path uses $\\nabla_\\mu A^\\nu = 0$ — the covariant derivative vanishes when the vector is being carried 'parallel.'");
  E("tensor-calculus", "Riemann:",
    "The full curvature tensor $R^\\rho{}_{\\sigma\\mu\\nu}$. ORIGIN: Riemann (1854). Has $n^2(n^2-1)/12$ independent components in $n$ dimensions: $1$ in 2D, $6$ in 3D, $20$ in 4D. WORKED EXAMPLE: in 4D GR, $20$ components encode tidal forces. Ricci tensor ($n(n+1)/2 = 10$ in 4D) drops 10 components by contraction; rest go into the Weyl tensor (free gravitational waves).");

  // ============================================================
  // ALGEBRAIC TOPOLOGY
  // ============================================================
  E("algebraic-topology", "$\\pi_1(S^1)",
    "Fundamental group of the circle is the integers under addition. Each integer $n$ counts how many times a loop winds around the circle. ORIGIN: Poincaré (1895) formalized homotopy groups. WORKED EXAMPLE: a loop that goes around once represents $1$, around three times represents $3$, going opposite direction is $-1$. Concatenating loops corresponds to adding integers.");
  E("algebraic-topology", "$\\pi_n(S^n)",
    "Homotopy classes of maps $S^n \\to S^n$ are classified by an integer — the DEGREE of the map. WORKED EXAMPLE: $\\pi_2(S^2) = \\mathbb Z$, degree counts how many times the target is covered (with sign). Hairy ball theorem, Brouwer fixed point, and many physics theorems (e.g., monopole quantization) follow.");
  E("algebraic-topology", "$\\pi_1(\\text{torus})",
    "Torus has TWO independent non-contractible loops: one around the donut hole, one through it. Concatenations commute, so the fundamental group is $\\mathbb Z \\oplus \\mathbb Z$. WORKED EXAMPLE: a loop winding 3 times the long way and 2 times the short way represents $(3, 2)$. Distinguishes torus from sphere (trivial $\\pi_1$).");
  E("algebraic-topology", "$\\chi = V - E + F",
    "Euler's polyhedron formula. INVARIANT under continuous deformation. ORIGIN: Euler (1750) for convex polyhedra; later generalized to all spaces. WORKED EXAMPLES: tetrahedron $4 - 6 + 4 = 2$; cube $8 - 12 + 6 = 2$. Both have $\\chi = 2$ because they're topologically spheres.");
  E("algebraic-topology", "$\\chi(\\Sigma_g)",
    "Genus-$g$ closed orientable surface has Euler characteristic $2 - 2g$. WORKED EXAMPLES: sphere ($g=0$) → $\\chi = 2$; torus ($g=1$) → $\\chi = 0$; double torus ($g=2$) → $\\chi = -2$. Each handle drops $\\chi$ by 2. Classifies all closed orientable surfaces up to homeomorphism.");
  E("algebraic-topology", "$H_n(S^n)",
    "Top homology of the $n$-sphere is $\\mathbb Z$ (the fundamental class); all other dimensions vanish. Compact way to encode that $S^n$ is connected (so $H_0 = \\mathbb Z$) and has one $n$-dimensional 'hole.' WORKED EXAMPLE: $H_0(S^2) = H_2(S^2) = \\mathbb Z$, $H_1(S^2) = 0$.");
  E("algebraic-topology", "Brouwer fixed point",
    "Every continuous map from the closed $n$-disk to itself has at least one fixed point. ORIGIN: Brouwer (1909). PROOF via algebraic topology: if there were no fixed point, you'd get a retraction $D^n \\to S^{n-1}$, contradicting $\\pi_{n-1}(D^n) = 0 \\neq \\pi_{n-1}(S^{n-1})$. APPLICATION: economic equilibrium theorems, Nash's existence proof for equilibria, etc.");

  // ============================================================
  // RIEMANNIAN GEOMETRY
  // ============================================================
  E("riemannian-geometry", "$ds^2 = g_{ij}",
    "The metric tensor is a symmetric, positive-definite 2-tensor. It defines lengths and angles at every point. WORKED EXAMPLES: flat space $g_{ij} = \\delta_{ij}$ in Cartesian; sphere of radius $R$ in $(\\theta, \\phi)$: $ds^2 = R^2 d\\theta^2 + R^2 \\sin^2\\theta\\,d\\phi^2$. Everything in Riemannian geometry — curvature, geodesics, volume — derives from $g$.");
  E("riemannian-geometry", "Geodesic:",
    "Generalize 'straight line' to curved manifolds: paths of stationary length. The geodesic equation balances the second derivative of position against the connection coefficients. WORKED EXAMPLES: in $\\mathbb R^n$, geodesics are straight lines; on a sphere, great circles; in Schwarzschild spacetime, orbits of planets.");
  E("riemannian-geometry", "$R_{\\mu\\nu}",
    "Contract the Riemann tensor on one upper and one lower index. Symmetric, $n(n+1)/2$ independent components in $n$ dimensions. WORKED EXAMPLE: in 2D, Ricci has 3 components but only one independent invariant — the Gaussian curvature scalar. In 4D GR, $R_{\\mu\\nu}$ enters Einstein's equation directly.");
  E("riemannian-geometry", "$R = g^{\\mu\\nu}",
    "Ricci scalar (also called scalar curvature) — fully contracted curvature. A single number at each point. WORKED EXAMPLES: flat space $R = 0$; unit sphere $R = 2$; unit hyperbolic plane $R = -2$. Appears in Einstein-Hilbert action $\\int R\\sqrt{-g}\\,d^4x$ — the Lagrangian of GR.");
  E("riemannian-geometry", "Einstein manifold:",
    "Ricci tensor proportional to the metric. ORIGIN: in vacuum GR with cosmological constant, $R_{\\mu\\nu} = \\Lambda g_{\\mu\\nu}$. WORKED EXAMPLES: Minkowski (vacuum, $\\Lambda = 0$); de Sitter ($\\Lambda > 0$, accelerating universe); anti-de Sitter ($\\Lambda < 0$, used in holographic duality).");
  E("riemannian-geometry", "Killing vector:",
    "A vector field whose flow preserves the metric. ORIGIN: Wilhelm Killing (1892). The symmetric part of $\\nabla K$ vanishes. WORKED EXAMPLES: $\\partial_t$ in stationary spacetime → energy conservation; $\\partial_\\phi$ in axially symmetric → angular momentum conservation. Killing vectors directly produce conserved quantities along geodesics.");

  // ============================================================
  // MEASURE THEORY
  // ============================================================
  E("measure-theory", "$\\sigma$-algebra:",
    "A collection of subsets closed under complement, countable union, and countable intersection. ORIGIN: needed to make 'measure' well-defined and avoid paradoxes like Banach-Tarski. WORKED EXAMPLES: Borel $\\sigma$-algebra on $\\mathbb R$ contains all open sets; Lebesgue $\\sigma$-algebra is its completion (adds all subsets of measure-zero sets).");
  E("measure-theory", "$m([a, b])",
    "Lebesgue measure assigns the natural length to intervals. ORIGIN: Lebesgue (1901) extended this to a large class of subsets of $\\mathbb R$. WORKED EXAMPLE: $m([0, 5]) = 5$, $m(\\{0\\}) = 0$, $m(\\mathbb Q \\cap [0,1]) = 0$ (rationals are countable, hence measure zero). Generalizes to $\\mathbb R^n$ with $m(\\text{box}) = $ product of side lengths.");
  E("measure-theory", "$m(\\bigcup A_i) \\leq",
    "Countable subadditivity: measure of a countable union is at most the sum of measures. ORIGIN: built into the definition of outer measure. WORKED EXAMPLE: $\\mathbb Q = \\bigcup_{q \\in \\mathbb Q} \\{q\\}$; each singleton has measure 0; subadditivity gives $m(\\mathbb Q) \\leq 0$, so $\\mathbb Q$ is measure-zero.");
  E("measure-theory", "$m(\\bigcup A_i) = \\sum",
    "When the sets are DISJOINT, the inequality becomes equality. THE defining property of a measure. WORKED EXAMPLE: chop $[0, 1]$ into intervals $[0, 1/2], (1/2, 3/4], (3/4, 7/8], \\ldots$ of lengths $1/2, 1/4, 1/8, \\ldots$; sum is $1 = m([0,1])$.");
  E("measure-theory", "MCT:",
    "Monotone convergence theorem (Beppo Levi). If $f_n$ is increasing and converges to $f$, you can exchange limit and integral. WORKED EXAMPLE: $f_n(x) = \\min(n, 1/\\sqrt x) \\nearrow 1/\\sqrt x$ on $(0, 1]$; MCT gives $\\int_0^1 (1/\\sqrt x)\\,dx = 2$ — important because the limit isn't bounded but the theorem still applies.");
  E("measure-theory", "DCT:",
    "Dominated convergence theorem (Lebesgue). Stronger conclusion than MCT but requires a dominating integrable function. THE workhorse theorem for swapping limit and integral. WORKED EXAMPLE: $f_n(x) = \\sin(nx)/n \\to 0$ on $[0, 2\\pi]$, dominated by $1/n \\leq 1$; DCT gives $\\int f_n \\to 0$.");
  E("measure-theory", "Fatou:",
    "Liminf can only INCREASE under integration — a one-sided inequality. ORIGIN: Pierre Fatou (1906). MOST GENERAL of the three convergence theorems (requires no monotonicity, no dominating function). USED as a lemma to prove the others.");

  // ============================================================
  // FUNCTIONAL ANALYSIS
  // ============================================================
  E("functional-analysis", "Banach:",
    "A normed vector space where every Cauchy sequence converges. ORIGIN: Stefan Banach (1922). Completeness is what makes infinite-dimensional analysis possible. WORKED EXAMPLES: $\\mathbb R^n$, $\\ell^p$ for $1 \\leq p \\leq \\infty$, $L^p$ spaces, $C([0,1])$ with sup norm. NOT Banach: continuous functions with $L^2$ norm (must complete to get $L^2$).");
  E("functional-analysis", "Hilbert:",
    "Inner product space (so it has angles, orthogonality) that is also complete. ORIGIN: Hilbert (early 1900s); Schmidt's thesis (1907). WORKED EXAMPLES: $\\mathbb R^n$ with dot product; $\\ell^2$; $L^2(\\Omega)$. Quantum mechanics LIVES in Hilbert space — states are vectors, observables are self-adjoint operators.");
  E("functional-analysis", "$\\|T\\| = \\sup",
    "The operator norm measures the maximum 'stretching' factor of a linear map. ORIGIN: natural extension of matrix norms to infinite dimensions. WORKED EXAMPLE: differentiation as $T: C^1[0,1] \\to C[0,1]$ is unbounded; bounded operators are the 'tame' ones with finite norm. Completes to the Banach algebra $B(X, Y)$.");
  E("functional-analysis", "Hahn-Banach",
    "Any bounded linear functional on a subspace extends to the whole space with the same norm. ORIGIN: Hahn (1927), Banach (1929). CONSEQUENCES: enough functionals exist to separate points (key to dual spaces); convex sets can be separated by hyperplanes (basis of convex optimization).");
  E("functional-analysis", "Open mapping theorem",
    "A surjective continuous linear map between Banach spaces is open (sends open sets to open sets). ORIGIN: Banach-Schauder (1929). CONSEQUENCE: bijective bounded linear maps have bounded inverses (closed graph theorem). USED in PDE existence theorems and quantum mechanics.");
  E("functional-analysis", "Spectral theorem",
    "Every compact self-adjoint operator on a Hilbert space has an orthonormal eigenbasis with real eigenvalues that approach zero. ORIGIN: Hilbert (1906). WORKED EXAMPLE: integral operator with continuous symmetric kernel has discrete spectrum. Foundation of Sturm-Liouville theory and the quantization of bound-state energies.");

  // ============================================================
  // CALCULUS OF VARIATIONS
  // ============================================================
  E("calculus-of-variations", "Euler-Lagrange:",
    "Necessary condition for a function $y(x)$ to extremize the integral $\\int L(x, y, y')\\,dx$. ORIGIN: Euler 1744, Lagrange 1755 (then 19 years old). DERIVATION: vary $y \\to y + \\epsilon\\eta$, set $d/d\\epsilon = 0$ at $\\epsilon = 0$, integrate by parts. WORKED EXAMPLE: $L = \\sqrt{1 + y'^2}$ (arc length) gives $y'' = 0$, i.e., straight lines.");
  E("calculus-of-variations", "$S = \\int L\\,dt",
    "The action functional assigns a number to each possible path. The TRUE path of a physical system extremizes (usually minimizes) the action. WORKED EXAMPLE: free particle $L = mv^2/2$ has action $\\int (mv^2/2)dt$; extremal motion is uniform — Newton's first law from a variational principle.");
  E("calculus-of-variations", "Principle of least action",
    "$\\delta S = 0$ under physical paths. ORIGIN: Maupertuis (1744), refined by Euler, Lagrange, Hamilton. PROFOUND: derive Newton's laws, Maxwell's equations, Einstein's field equations, even quantum mechanics (path integrals) — all from action principles. Geometric mechanics generalizes this to manifolds.");
  E("calculus-of-variations", "Brachistochrone:",
    "Curve of fastest descent under gravity, between two points at different heights. ORIGIN: Johann Bernoulli 1696 posed it as a public challenge; Newton solved it overnight (allegedly, after returning from the Mint at 4 am). ANSWER: a cycloid, the curve traced by a point on a rolling circle.");
  E("calculus-of-variations", "Soap film:",
    "A soap film between two parallel rings minimizes surface area. The Euler-Lagrange equation gives the CATENOID — a surface of revolution of $\\cosh(x/c)$. WORKED EXAMPLE: critical separation distance exists beyond which no catenoid solution exists; the film 'snaps' to two flat disks.");
  E("calculus-of-variations", "Noether:",
    "Continuous symmetry of the action ⇒ conserved current. ORIGIN: Emmy Noether 1918, proved at Göttingen. WORKED EXAMPLES: time translation → energy; space translation → momentum; rotation → angular momentum; gauge transformations → electric charge. The deepest theorem in classical and quantum field theory.");

  // ============================================================
  // FUNCTION SEQUENCES
  // ============================================================
  E("function-sequences", "Pointwise:",
    "For each fixed $x$, the numerical sequence $\\{f_n(x)\\}$ converges to $f(x)$. The rate of convergence may depend on $x$. WORKED EXAMPLE: $f_n(x) = x^n$ on $[0, 1]$ converges pointwise to $0$ on $[0, 1)$ and to $1$ at $x = 1$ — discontinuous limit of continuous functions.");
  E("function-sequences", "Uniform:",
    "The sup of $|f_n - f|$ tends to zero — the WORST gap shrinks. Stronger than pointwise. WORKED EXAMPLE: $f_n(x) = x/n$ on $[0, 1]$ has $\\sup |f_n| = 1/n \\to 0$ — uniform convergence to 0. On $\\mathbb R$ it's only pointwise (the sup is $\\infty$).");
  E("function-sequences", "Uniform ⇒ pointwise",
    "Uniform convergence implies pointwise (just specialize the sup to one point), but not vice versa. WORKED EXAMPLE: $f_n(x) = x^n$ on $[0, 1]$ converges pointwise to a discontinuous limit — must NOT be uniform (uniform would preserve continuity).");
  E("function-sequences", "Uniform limit",
    "If continuous $f_n \\to f$ uniformly, then $f$ is continuous. PROOF: triangle inequality $|f(x) - f(y)| \\leq |f(x) - f_n(x)| + |f_n(x) - f_n(y)| + |f_n(y) - f(y)|$ — all three terms can be made small. CONTRAPOSITIVE: a sequence of continuous functions with a discontinuous pointwise limit CANNOT converge uniformly.");
  E("function-sequences", "M-test:",
    "Weierstrass M-test: if $|f_n(x)| \\leq M_n$ on the whole domain and $\\sum M_n < \\infty$, then $\\sum f_n$ converges uniformly. WORKED EXAMPLE: $\\sum \\sin(nx)/n^2$ has $|f_n| \\leq 1/n^2$ and $\\sum 1/n^2 = \\pi^2/6 < \\infty$, so converges uniformly on $\\mathbb R$. Cornerstone of analyzing Fourier series.");
  E("function-sequences", "Power series radius:",
    "Cauchy-Hadamard formula: $R = 1/\\limsup_n |a_n|^{1/n}$. Inside $|x| < R$: absolute convergence. Outside: divergence. On the circle $|x| = R$: case-by-case. WORKED EXAMPLE: $\\sum x^n/n$ has $R = 1$; converges at $x = -1$ (alternating series) but diverges at $x = 1$ (harmonic).");

  // ============================================================
  // STOCHASTIC PROCESSES
  // ============================================================
  E("stochastic-processes", "Markov:",
    "Future depends on present, not past. Memoryless property. ORIGIN: Andrey Markov (1906) studying letter sequences in Pushkin's poetry. WORKED EXAMPLE: random walk; the next position depends only on current position, not how you got there. ENORMOUSLY USEFUL: simplifies probability calculations by an exponential factor.");
  E("stochastic-processes", "Stationary:",
    "Distribution $\\pi$ that is invariant under the transition: $\\pi P = \\pi$. Long-run probability of being in each state. WORKED EXAMPLE: two-state chain with transitions $0 \\to 1$ probability $a$, $1 \\to 0$ probability $b$ has stationary $\\pi_0 = b/(a+b), \\pi_1 = a/(a+b)$. Reached as $t \\to \\infty$ for irreducible aperiodic chains.");
  E("stochastic-processes", "Detailed balance:",
    "$\\pi_i P_{ij} = \\pi_j P_{ji}$: at equilibrium, the FLOW from $i$ to $j$ equals the flow from $j$ to $i$. STRONGER than stationarity. ORIGIN: equilibrium statistical mechanics. WORKED EXAMPLE: Metropolis MCMC algorithm enforces detailed balance to sample from a target distribution.");
  E("stochastic-processes", "Poisson process:",
    "Counts random events; inter-event times are independent exponentials with rate $\\lambda$. WORKED EXAMPLE: radioactive decay clicks, customer arrivals, neuron firings. MERGING: sum of two independent Poisson processes is Poisson with $\\lambda_1 + \\lambda_2$. THINNING: keep each event with probability $p$ → Poisson with $\\lambda p$.");
  E("stochastic-processes", "Brownian motion:",
    "Continuous-time random walk, continuous paths but NOWHERE differentiable. ORIGIN: Robert Brown (1827) observed pollen jitter; Einstein (1905) gave the kinetic-theory derivation; Wiener (1923) constructed the mathematical process. PROPERTIES: $W(0) = 0$, independent Gaussian increments $W(t) - W(s) \\sim N(0, t-s)$, continuous paths.");
  E("stochastic-processes", "Itô:",
    "Quadratic variation of Brownian motion is $dt$, not 0. Itô's formula: $df(W_t) = f'(W_t)dW_t + \\tfrac{1}{2}f''(W_t)dt$. ORIGIN: Kiyoshi Itô (1944). WORKED EXAMPLE: drives stochastic calculus, Black-Scholes option pricing, Langevin equations in physics.");
  E("stochastic-processes", "GBM:",
    "Geometric Brownian motion: $X(t) = X_0 \\exp((\\mu - \\sigma^2/2)t + \\sigma W_t)$. Always positive — used for stock prices, asset values. ORIGIN: Samuelson (1965). UNDERLIES the Black-Scholes (1973) option pricing formula — Nobel Prize 1997.");

  // ============================================================
  // BAYESIAN STATISTICS
  // ============================================================
  E("bayesian-statistics", "$P(\\theta | D)",
    "Bayes' rule: posterior $\\propto$ likelihood $\\times$ prior, normalized by the evidence $P(D)$. ORIGIN: Thomas Bayes (1763, posthumous). PROFOUND interpretation: $\\theta$ has a probability distribution that gets UPDATED as data arrives. Frequentists object that $\\theta$ is fixed but unknown; Bayesians treat probability as degree of belief.");
  E("bayesian-statistics", "Posterior $\\propto$",
    "Practical computational form. The proportionality constant (the evidence $P(D)$) is usually hard to compute but unnecessary for most operations like MAP estimation, MCMC sampling, or ratio-based hypothesis testing. WORKED EXAMPLE: flat prior + binomial likelihood gives posterior $\\propto p^k(1-p)^{n-k}$ — Beta$(k+1, n-k+1)$.");
  E("bayesian-statistics", "$P(D) = \\int",
    "Total probability of the data, integrated over all hypotheses. ORIGIN: law of total probability. USED as the normalizing constant in Bayes' rule. HARD to compute in high dimensions — entire methods (MCMC, variational inference) exist to circumvent its evaluation.");
  E("bayesian-statistics", "Beta-Binomial:",
    "Beta prior + binomial likelihood = Beta posterior. ORIGIN: choice of conjugate prior makes update closed-form. WORKED EXAMPLE: prior Beta(2, 2) (gentle preference for $p = 0.5$); observe 7 heads in 10 flips; posterior Beta(9, 5), mean $9/14 \\approx 0.64$. The 'prior pseudo-counts' interpretation: $(\\alpha-1, \\beta-1)$ = imaginary prior data.");
  E("bayesian-statistics", "Normal mean",
    "Normal prior + normal likelihood = normal posterior. Posterior mean is a precision-weighted average of prior mean and sample mean. WORKED EXAMPLE: prior $N(0, 1)$ + observation $x = 2$ with known $\\sigma = 1$ gives posterior $N(1, 1/2)$ — the prior pulls the estimate toward 0.");
  E("bayesian-statistics", "MAP:",
    "Maximum a posteriori: the mode of the posterior. Single 'best guess' for $\\theta$. WORKED EXAMPLE: with flat prior, MAP = MLE. Otherwise MAP includes prior regularization — adding $L^2$ prior gives ridge regression; adding $L^1$ prior gives LASSO.");
  E("bayesian-statistics", "Posterior predictive:",
    "Probability of FUTURE observations $y$, marginalized over parameter uncertainty. ORIGIN: full Bayesian treatment doesn't fix $\\theta$ to a point estimate. WORKED EXAMPLE: predicting heart-attack rate at a new hospital uses the posterior over hospital effects rather than a single point estimate, automatically widening predictions to account for uncertainty.");

  // ============================================================
  // GAME THEORY
  // ============================================================
  E("game-theory", "Nash:",
    "A strategy profile where no player benefits from unilaterally deviating. ORIGIN: John Nash (1950). EXISTS for every finite game (Nash's theorem, via Brouwer fixed-point). NOT necessarily Pareto-optimal — Prisoner's Dilemma has a Nash (mutual defection) worse than cooperative outcome.");
  E("game-theory", "Minimax:",
    "Optimal value of a zero-sum game: each player minimizes the maximum loss. ORIGIN: von Neumann (1928) proved the minimax theorem — in any finite zero-sum game with mixed strategies, max-min equals min-max. WORKED EXAMPLE: rock-paper-scissors has value 0, achieved by uniform random play.");
  E("game-theory", "Mixed strategy:",
    "A probability distribution over pure strategies. RATIONALE: when no pure-strategy Nash exists, randomizing makes you UNPREDICTABLE to opponents. WORKED EXAMPLE: matching pennies has unique mixed Nash at $(1/2, 1/2)$ — any deviation invites exploitation. Penalty kicks in soccer: empirically near 50/50.");
  E("game-theory", "Shapley value:",
    "Single 'fair' allocation in cooperative games. ORIGIN: Lloyd Shapley (1953). AXIOMS: efficiency, symmetry, dummy, additivity uniquely determine the formula. WORKED EXAMPLE: profit-sharing in coalitions, attribution in machine learning (SHAP values), measuring power in voting bodies.");
  E("game-theory", "Subgame perfect:",
    "Refines Nash by ELIMINATING non-credible threats. Every subgame must be a Nash equilibrium. ORIGIN: Selten (1965). COMPUTED via backward induction in finite-horizon games. WORKED EXAMPLE: in the centipede game, backward induction predicts immediate stopping — though human players often cooperate longer.");
  E("game-theory", "Stable matching",
    "Gale-Shapley deferred-acceptance algorithm produces a matching where no two participants prefer each other to their assigned partners. ORIGIN: Gale and Shapley (1962). USED IN: medical residency matching (NRMP since 1952), school choice (NYC, Boston), kidney exchanges. Shapley + Roth Nobel Prize 2012.");

  // ============================================================
  // DYNAMICAL SYSTEMS
  // ============================================================
  E("dynamical-systems", "$\\dot{\\vec x}",
    "Autonomous system: the right-hand side depends on state but not explicitly on time. PHASE SPACE is the state space; the vector field $\\vec f$ defines trajectories. WORKED EXAMPLES: pendulum $\\ddot\\theta = -(g/L)\\sin\\theta$, predator-prey Lotka-Volterra, Lorenz equations.");
  E("dynamical-systems", "Fixed point:",
    "States where the system doesn't move — equilibria. WORKED EXAMPLES: pendulum fixed points at $\\theta = 0$ (stable bottom) and $\\theta = \\pi$ (unstable top); chemical reactions reach concentration fixed points; populations equilibrate. Stability determined by linearization.");
  E("dynamical-systems", "Linearization:",
    "Near a fixed point $\\vec x^*$, the dynamics are approximately $\\dot{\\delta x} = D\\vec f(\\vec x^*) \\delta x$. The Jacobian's eigenvalues classify the equilibrium: stable node (all negative real), unstable node (all positive), saddle (mixed signs), spiral (complex), center (pure imaginary).");
  E("dynamical-systems", "Stable:",
    "All eigenvalues of the linearization have negative real parts → small perturbations decay. Hartman-Grobman theorem: nonlinear dynamics near a hyperbolic fixed point are topologically equivalent to the linearization. EXCEPTION: $\\text{Re}(\\lambda) = 0$ cases require higher-order analysis.");
  E("dynamical-systems", "Lyapunov exponent:",
    "Average exponential rate of separation of nearby trajectories. POSITIVE λ → chaos (sensitive dependence on initial conditions). ORIGIN: Aleksandr Lyapunov (1892). WORKED EXAMPLE: tent map $f(x) = 2 \\min(x, 1-x)$ has $\\lambda = \\ln 2$; logistic map at $r = 4$ has $\\lambda = \\ln 2$ (same Bernoulli shift!).");
  E("dynamical-systems", "Feigenbaum:",
    "Universal ratio of successive bifurcation intervals: $(r_n - r_{n-1})/(r_{n+1} - r_n) \\to \\delta \\approx 4.669$. ORIGIN: Mitchell Feigenbaum (1978) computed this by hand on a calculator. UNIVERSALITY: same $\\delta$ for ANY unimodal map (quadratic, sine, etc.). One of the deepest empirical discoveries in nonlinear dynamics.");
  E("dynamical-systems", "Poincaré section:",
    "Take a transverse hyperplane in phase space; record where the trajectory pierces. Continuous flow reduces to a discrete map of lower dimension. WORKED EXAMPLE: Lorenz attractor visualized via cross-sections; planetary orbits via the surface of section technique pioneered by Poincaré (1890s).");

  // ============================================================
  // CENTRAL FORCE
  // ============================================================
  E("central-force", "$\\vec L = $ const",
    "Angular momentum conserved for central forces because torque $\\vec r \\times \\vec F$ vanishes (force parallel to position). CONSEQUENCE: motion confined to a plane perpendicular to $\\vec L$. ORIGIN: Newton's Principia. APPLIES to gravity, Coulomb, and any spherically symmetric potential.");
  E("central-force", "$dA/dt = L/(2m)",
    "Kepler's second law: equal areas in equal times. DERIVATION: $dA = \\tfrac{1}{2}|\\vec r \\times d\\vec r| = \\tfrac{L}{2m}dt$ from $\\vec L = m\\vec r \\times \\vec v$. WORKED EXAMPLE: comet moves fastest near perihelion (sweeping a thin wedge fast) and slowest at aphelion (thick wedge slow). Holds for ANY central force, not just gravity.");
  E("central-force", "$V_{\\text{eff}}(r)",
    "Combine the radial potential with the centrifugal barrier $L^2/(2mr^2)$ — the rotational kinetic energy expressed in the radial coordinate. Reduces 2D problem to 1D radial motion. WORKED EXAMPLE: for $V = -k/r$, $V_{\\text{eff}}$ has a single minimum giving stable circular orbits.");
  E("central-force", "$T^2 = \\dfrac{4\\pi^2}{GM}",
    "Kepler's third law. ORIGIN: Kepler (1619), found empirically from Tycho Brahe's planetary data. DERIVATION: equate circular gravity $GM/r^2$ with centripetal $\\omega^2 r = (2\\pi/T)^2 r$. WORKED EXAMPLE: Earth's orbit $a = 1$ AU, $T = 1$ year — used to MEASURE the Sun's mass once $G$ was known.");
  E("central-force", "Eccentricity:",
    "Energy and angular momentum together determine the orbit shape: $e < 1$ ellipse (bound), $e = 1$ parabolic (escape), $e > 1$ hyperbolic (unbound). DERIVATION: solve the orbit equation from Newton's gravitation. WORKED EXAMPLE: Halley's comet $e \\approx 0.967$ — barely bound; tiny perturbations could eject it from the solar system.");
  E("central-force", "Inverse-square ⇒ closed",
    "Bertrand's theorem (1873): only inverse-square ($1/r^2$) and Hooke ($r$) forces give closed bound orbits. For ALL other power laws, orbits precess (rosette patterns). PROFOUND: explains why planetary orbits are stable ellipses; Mercury's tiny precession was the first sign Newton's gravity is incomplete (resolved by GR).");
  E("central-force", "Virial:",
    "Time-averaged KE = $-\\tfrac{1}{2}$ × time-averaged PE for $1/r$ potential. ORIGIN: Clausius (1870). GENERALIZED: $\\langle T \\rangle = (n/2)\\langle V\\rangle$ for potentials $V \\propto r^n$. WORKED EXAMPLE: estimate dark-matter halo mass from observed velocity dispersion of cluster galaxies — virial mass $M \\sim R\\sigma^2/G$.");

  // ============================================================
  // NONLINEAR CHAOS PHYSICS
  // ============================================================
  E("nonlinear-chaos-physics", "Logistic:",
    "Simplest map exhibiting chaos. ORIGIN: Pierre-François Verhulst (1838) modeling population growth; rediscovered by May (1976) for ecology. BEHAVIOR: stable point for $r < 3$, period-2 for $r \\in (3, 1+\\sqrt 6)$, period-doubling cascade, full chaos by $r \\approx 3.57$. Toy model with deep universality.");
  E("nonlinear-chaos-physics", "Chaos onset:",
    "Period-doubling cascade accumulates at $r_\\infty \\approx 3.5699$. BEYOND: periodic windows interleave with chaos. WORKED EXAMPLE: at $r = 3.83$, stable period-3 orbit (Sharkovsky theorem: period-3 implies all periods AND chaos).");
  E("nonlinear-chaos-physics", "Feigenbaum",
    "Universal constant: $\\delta \\approx 4.669201609\\ldots$. SAME number for any smooth unimodal map. ORIGIN: Feigenbaum (1978) on an HP-65 calculator. EXPLANATION via renormalization group — period-doubling looks the same at every scale. Experimentally confirmed in fluid turbulence, electronics, biology.");
  E("nonlinear-chaos-physics", "Lyapunov:",
    "Positive Lyapunov exponent ⇔ chaos. MEASURES exponential separation of nearby trajectories. CONSEQUENCE: long-term prediction impossible — tiny initial uncertainty grows as $\\delta(t) \\sim \\delta_0 e^{\\lambda t}$. Weather prediction limit (~2 weeks) comes from atmospheric Lyapunov time.");
  E("nonlinear-chaos-physics", "Lorenz:",
    "Three ODEs from atmospheric convection. ORIGIN: Edward Lorenz (1963), accidentally discovered while truncating weather equations. PARAMETERS $\\sigma = 10, \\rho = 28, \\beta = 8/3$ give the famous butterfly attractor. FRACTAL dimension ≈ 2.06 — trajectories never repeat but stay bounded.");
  E("nonlinear-chaos-physics", "KAM theorem",
    "Kolmogorov-Arnold-Moser (1954-1963): MOST quasi-periodic orbits of an integrable system survive small perturbations. Some break into chaotic 'islands' near resonances. WORKED EXAMPLE: solar system stability over Gyr — KAM helps explain why planets stay in their orbits despite mutual perturbations.");

  // ============================================================
  // QM 3D / HYDROGEN
  // ============================================================
  E("qm-3d-hydrogen", "$\\psi = R_{n\\ell}",
    "Separation of variables in spherical coordinates: radial part $R$, angular part $Y$. ORIGIN: spherical symmetry of the Coulomb potential allows complete separation. WORKED EXAMPLE: ground state $\\psi_{100} = R_{10}(r) Y_0^0(\\theta, \\phi) = (1/\\sqrt{\\pi a_0^3})e^{-r/a_0}$ — spherically symmetric, no nodes.");
  E("qm-3d-hydrogen", "$Y_\\ell^m",
    "Spherical harmonics: eigenfunctions of $L^2$ and $L_z$ with eigenvalues $\\ell(\\ell+1)\\hbar^2$ and $m\\hbar$. ORIGIN: Legendre, Laplace (1780s). PROPERTIES: orthonormal, complete on the sphere. APPEAR in: hydrogen atom, gravity multipole expansions, CMB anisotropy, vibrational modes of a sphere.");
  E("qm-3d-hydrogen", "$E_n = -\\dfrac{13.6}",
    "Hydrogen energy levels. ORIGIN: Bohr (1913) got the right formula classically with quantization ad-hoc; Schrödinger (1926) derived it from quantum mechanics. DEGENERATE in $\\ell$ and $m$ — accident of the Coulomb potential. SPECTRAL LINES: $1/\\lambda = R_H(1/n_f^2 - 1/n_i^2)$ matches observations to extraordinary precision.");
  E("qm-3d-hydrogen", "$\\psi_{100}",
    "Ground state of hydrogen. Spherically symmetric, exponentially decaying. WORKED EXAMPLE: probability density peaks at $r = 0$ but probability/unit radial distance $4\\pi r^2|\\psi|^2$ peaks at $r = a_0$ — Bohr radius. EXPECTATION values: $\\langle r\\rangle = 3a_0/2$, $\\langle 1/r\\rangle = 1/a_0$, $\\langle E\\rangle = -13.6$ eV.");
  E("qm-3d-hydrogen", "Degeneracy of level $n$:",
    "$n^2$ orbital states (sum $\\sum_{\\ell=0}^{n-1}(2\\ell+1) = n^2$) times 2 for spin gives $2n^2$. WORKED EXAMPLE: $n = 1$: 2 states; $n = 2$: 8 states; $n = 3$: 18 states — explains the periodic-table row lengths and the noble-gas closures.");
  E("qm-3d-hydrogen", "$a_0 \\approx",
    "Bohr radius $a_0 = 4\\pi\\epsilon_0\\hbar^2/(m_e e^2) \\approx 5.29 \\times 10^{-11}$ m. ORIGIN: Bohr's quantization condition $L = n\\hbar$ combined with classical circular orbit gives this length. Natural unit for atomic-scale distances. WORKED EXAMPLE: typical chemical bond ~ 1-2 $a_0$.");
  E("qm-3d-hydrogen", "Selection rules:",
    "Electric dipole transitions require $\\Delta\\ell = \\pm 1$ and $\\Delta m = 0, \\pm 1$. ORIGIN: integral $\\int \\psi_f^* \\vec r \\psi_i\\,d^3r$ vanishes unless these conditions hold. WORKED EXAMPLE: hydrogen Lyman alpha is 2p → 1s ($\\Delta\\ell = -1$); 2s → 1s is FORBIDDEN ($\\Delta\\ell = 0$), so 2s is metastable.");

  // ============================================================
  // IDENTICAL PARTICLES
  // ============================================================
  E("identical-particles", "Bosons:",
    "Wavefunction is symmetric under exchange of any two identical bosons: $\\Psi(\\ldots,x_i, \\ldots, x_j, \\ldots) = +\\Psi(\\ldots, x_j, \\ldots, x_i, \\ldots)$. SPIN integer ($0, 1, 2, \\ldots$). EXAMPLES: photons (spin 1), gluons, $W^\\pm, Z$, Higgs (spin 0), gravitons (spin 2). Multiple bosons can occupy the same quantum state — basis of lasers, BEC.");
  E("identical-particles", "Fermions:",
    "Antisymmetric wavefunction: $\\Psi(\\ldots, x_i, \\ldots, x_j, \\ldots) = -\\Psi(\\ldots, x_j, \\ldots, x_i, \\ldots)$. SPIN half-integer ($1/2, 3/2, \\ldots$). EXAMPLES: electrons, protons, neutrons, quarks, neutrinos. PAULI exclusion: two fermions can't share a state — basis of atomic structure, periodic table, neutron-star stability.");
  E("identical-particles", "Pauli exclusion",
    "No two identical fermions in the exact same quantum state. ORIGIN: Wolfgang Pauli (1925). CONSEQUENCE: electrons fill up energy levels rather than collapsing to the ground state — explains atomic structure, chemistry, the periodic table. SUPPORTS white dwarfs against gravitational collapse (electron degeneracy pressure).");
  E("identical-particles", "Slater determinant:",
    "$N$-fermion wavefunction built as a determinant — automatically antisymmetric. ORIGIN: John Slater (1929). WORKED EXAMPLE: two electrons in spin-orbitals $\\phi_a, \\phi_b$: $\\Psi = (1/\\sqrt 2)[\\phi_a(1)\\phi_b(2) - \\phi_b(1)\\phi_a(2)]$. Swap labels → minus sign. Foundation of Hartree-Fock and DFT methods.");
  E("identical-particles", "Bose-Einstein:",
    "Occupation number of boson state with energy $E$: $1/(e^{(E-\\mu)/k_BT} - 1)$. CAN DIVERGE at $E = \\mu$ — leads to BEC. ORIGIN: Bose (1924) for photons, Einstein extended to atoms. CONSEQUENCE at low T: macroscopic occupation of ground state.");
  E("identical-particles", "Fermi-Dirac:",
    "Fermion occupation: $1/(e^{(E-\\mu)/k_BT} + 1)$. ORIGIN: Fermi (1926), Dirac (1926). BOUNDED in [0, 1] (Pauli). At T = 0: step function — all states up to chemical potential $\\mu$ (Fermi energy) are filled. EXPLAINS electrical conductivity, specific heat of metals, white dwarf and neutron star structure.");
  E("identical-particles", "Spin-statistics theorem",
    "Pauli (1940): in relativistic QFT, integer-spin particles MUST obey Bose statistics; half-integer MUST obey Fermi. ORIGIN: requirement of causality and positive energy. CONSEQUENCE: tight connection between rotation (spin) and exchange symmetry. Couldn't be otherwise without breaking relativity or stability.");

  // ============================================================
  // SCATTERING THEORY
  // ============================================================
  E("scattering-theory", "$d\\sigma/d\\Omega",
    "Differential cross section: probability of scattering into solid angle $d\\Omega$ per unit incoming flux. Squared magnitude of scattering amplitude $f(\\theta)$. WORKED EXAMPLE: in an experiment, count detector hits per second per area, divide by beam flux × target density. The 'shape' of the scattered angular distribution probes the scattering potential.");
  E("scattering-theory", "Born:",
    "First-order Born approximation: scattering amplitude is the Fourier transform of the potential. ORIGIN: Max Born (1926). VALID when the potential is weak: $V \\ll$ kinetic energy. WORKED EXAMPLE: for Coulomb potential gives back the Rutherford formula — exactly the same as classical, despite the very different derivations.");
  E("scattering-theory", "Rutherford:",
    "Coulomb scattering cross section, derivable both classically and quantum-mechanically. ORIGIN: Rutherford (1911) used this to discover the atomic nucleus — backwards-scattered $\\alpha$ particles from gold foil were inexplicable without a tiny massive scatterer. The $1/\\sin^4(\\theta/2)$ divergence at small angles is integrable for total cross section in a screened potential.");
  E("scattering-theory", "Partial waves:",
    "Expand the scattering amplitude in Legendre polynomials. Each angular momentum channel $\\ell$ has its own phase shift $\\delta_\\ell$. WORKED EXAMPLE: at low energy, only $\\ell = 0$ (s-wave) contributes — many systems are characterized by the s-wave scattering length $a$. Cold-atom physics is dominated by s-wave.");
  E("scattering-theory", "Optical theorem:",
    "Total cross section is $\\propto$ imaginary part of forward scattering amplitude. ORIGIN: stems from unitarity of S-matrix — anything scattered away from the beam must come from interference with the forward direction. WORKED EXAMPLE: high-energy hadronic cross sections grow logarithmically with energy; optical theorem links this to subtle forward-elastic behavior.");
  E("scattering-theory", "Mean free path:",
    "Average distance between scatterings. WORKED EXAMPLE: in a gas with $n = 10^{25}$/m³ and cross section $10^{-19}$ m²: $\\lambda = 10^{-6}$ m = 1 μm. CONSEQUENCE: bigger cross section or denser medium → shorter mean free path → more frequent collisions. Determines viscosity, thermal conductivity, neutron transport, etc.");

  // ============================================================
  // DENSITY MATRICES
  // ============================================================
  E("density-matrices", "$\\rho = |\\psi\\rangle\\langle\\psi|",
    "Pure state density matrix: outer product of state with itself. WORKED EXAMPLE: qubit state $|\\psi\\rangle = a|0\\rangle + b|1\\rangle$ has $\\rho = \\begin{pmatrix}|a|^2 & ab^* \\\\ a^*b & |b|^2\\end{pmatrix}$. Diagonal = probabilities; off-diagonal = quantum coherence between basis states.");
  E("density-matrices", "$\\rho = \\sum p_i",
    "Mixed state: classical statistical mixture of pure states. ARISES WHEN: you don't know which state you have (statistical ignorance), or after partial trace over an environment. WORKED EXAMPLE: $\\rho = 0.5|0\\rangle\\langle 0| + 0.5|1\\rangle\\langle 1|$ — totally mixed qubit, no coherence.");
  E("density-matrices", "$\\text{tr}(\\rho) = 1",
    "Density matrix must have trace 1 (probabilities sum to 1) and be positive semi-definite (probabilities non-negative). These two properties define the convex set of all valid density matrices. WORKED EXAMPLE: for qubit, the set forms the Bloch ball; pure states sit on the surface (Bloch sphere).");
  E("density-matrices", "Pure iff",
    "$\\rho^2 = \\rho$ iff the state is pure. EQUIVALENTLY, $\\text{tr}(\\rho^2) = 1$. Otherwise $\\text{tr}(\\rho^2) < 1$ — gives the 'purity.' WORKED EXAMPLE: maximally mixed qubit has $\\rho = I/2$, purity $= 1/2$. Purity is conserved under unitary evolution but DECREASES under decoherence.");
  E("density-matrices", "$\\rho_A = \\text{tr}_B",
    "Partial trace over subsystem $B$ gives the REDUCED density matrix for $A$. ORIGIN: when only $A$ is accessible, $\\rho_A$ predicts all measurements you can do. WORKED EXAMPLE: Bell state $(|00\\rangle + |11\\rangle)/\\sqrt 2$ has $\\rho_A = I/2$ — maximally mixed, even though the full state is pure. Source of entanglement entropy.");
  E("density-matrices", "Von Neumann entropy:",
    "$S = -\\text{tr}(\\rho\\ln\\rho)$, equivalently $-\\sum \\lambda_i \\ln\\lambda_i$ over eigenvalues. ORIGIN: von Neumann (1932). PROPERTIES: 0 for pure states, max $\\ln d$ for maximally mixed. ENTANGLEMENT ENTROPY: $S(\\rho_A)$ for reduced state quantifies entanglement between $A$ and $B$.");
  E("density-matrices", "Lindblad:",
    "Most general MARKOVIAN evolution of a density matrix consistent with positivity and trace preservation. ORIGIN: Lindblad (1976), Gorini-Kossakowski-Sudarshan. Hamiltonian part gives unitary evolution; Lindblad operators $L_k$ describe decoherence. USED in quantum optics, open quantum systems, qubit noise modeling.");

  // ============================================================
  // PATH INTEGRALS
  // ============================================================
  E("path-integrals", "$\\langle x_f",
    "Feynman's sum-over-histories formulation: quantum amplitude is integral over ALL paths from initial to final state, weighted by $e^{iS/\\hbar}$. ORIGIN: Feynman PhD thesis (1942), generalizing Dirac (1933). EQUIVALENT to Schrödinger and Heisenberg pictures.");
  E("path-integrals", "$S = \\int L\\,dt",
    "Same action functional as classical mechanics. PROFOUND: classical mechanics emerges as the stationary-phase limit when $\\hbar \\to 0$ — only paths near the classical action contribute. Off-classical paths exhibit destructive interference.");
  E("path-integrals", "Classical limit:",
    "When $S \\gg \\hbar$, the integral is dominated by the path of stationary action ($\\delta S = 0$) — exactly the Euler-Lagrange equation. EXPLAINS the classical/quantum boundary: macroscopic systems have action $\\gg \\hbar$, so they follow classical paths to extraordinary precision.");
  E("path-integrals", "Free particle:",
    "Closed-form propagator $K = \\sqrt{m/(2\\pi i\\hbar t)}\\exp(im(x_f - x_i)^2/(2\\hbar t))$. WORKED EXAMPLE: probability of finding particle at $x_f$ after time $t$ involves $|K|^2$ — gives the spreading Gaussian wavefunction. Cross-check: matches Schrödinger evolution of a Gaussian initial state.");
  E("path-integrals", "Euclidean (Wick):",
    "Rotate time to imaginary: $t \\to -i\\tau$. The phase $e^{iS/\\hbar}$ becomes a real Boltzmann factor $e^{-S_E/\\hbar}$. CONNECTION: Euclidean path integral = partition function of statistical mechanics at temperature $T = \\hbar/(k_B\\tau)$. Connects QFT to stat mech — basis of lattice gauge theory.");
  E("path-integrals", "Functional integral measure",
    "$\\mathcal D x$ is heuristic — formally an infinite product of $dx_n$ at discrete time steps. RIGOROUS construction via lattice + continuum limit. PRACTICAL: in physics, manipulations like change of variables typically work, but care is needed (anomalies = failures of naive measure invariance).");

  // ============================================================
  // SYMMETRIES / NOETHER
  // ============================================================
  E("symmetries-noether", "Continuous symmetry",
    "Noether's theorem (1918): every continuous symmetry of the action produces a conserved current $\\partial_\\mu j^\\mu = 0$. The corresponding conserved charge $Q = \\int j^0\\,d^3x$ is time-independent. THE deepest theorem in classical and quantum field theory.");
  E("symmetries-noether", "Translation $\\Rightarrow$ momentum",
    "Spatial homogeneity of the laws of physics → momentum is conserved. PROOF: Lagrangian doesn't depend explicitly on position → corresponding Euler-Lagrange gives $\\dot p = 0$. WORKED EXAMPLE: closed mechanical system has total momentum constant — basis of rocket propulsion, collision analysis.");
  E("symmetries-noether", "Rotation $\\Rightarrow$ angular momentum",
    "Isotropy of space → angular momentum is conserved. WORKED EXAMPLE: planetary orbits stay in a plane because the gravitational force is central (rotationally symmetric about the Sun); figure skater pulling arms in spins faster (conservation of $L = I\\omega$).");
  E("symmetries-noether", "Time translation",
    "Homogeneity of time → energy is conserved. PROOF: Lagrangian doesn't depend explicitly on time → Hamiltonian $H = \\sum p\\dot q - L$ is conserved. EXCEPTION: in cosmology (expanding universe), time translation is broken → photon energy redshifts.");
  E("symmetries-noether", "Global $U(1)$",
    "Phase symmetry $\\psi \\to e^{i\\theta}\\psi$ → conserved current. In quantum mechanics: probability conservation. In QED: electric charge conservation. WORKED EXAMPLE: $\\rho = |\\psi|^2$ and $\\vec j = (\\hbar/m)\\text{Im}(\\psi^* \\nabla\\psi)$ satisfy continuity $\\partial_t\\rho + \\nabla\\cdot\\vec j = 0$.");
  E("symmetries-noether", "Lorentz $\\Rightarrow$",
    "Spacetime symmetry → stress-energy tensor conservation $\\partial_\\mu T^{\\mu\\nu} = 0$. Encodes both energy AND momentum conservation. WORKED EXAMPLE: in GR, $T^{\\mu\\nu}$ is the source of curvature in Einstein's equation $G^{\\mu\\nu} = 8\\pi G T^{\\mu\\nu}/c^4$ — its conservation is automatic from the Bianchi identity.");
  E("symmetries-noether", "Gauge symmetry",
    "Noether's SECOND theorem: local gauge symmetries produce identities (Bianchi-type) rather than new conservation laws. ORIGIN: gauge symmetry is redundancy of the description. CONSEQUENCE: gauge bosons (photon, gluons, W/Z) are forced to be massless — broken by Higgs mechanism in the Standard Model.");

  // ============================================================
  // CLASSICAL FIELD THEORY
  // ============================================================
  E("classical-field-theory", "$\\mathcal{L}",
    "Lagrangian density $\\mathcal L(\\phi, \\partial_\\mu\\phi)$ specifies the dynamics of a field. POSITIVE LORENTZ-INVARIANT functional. WORKED EXAMPLES: free scalar $\\mathcal L = \\tfrac{1}{2}(\\partial\\phi)^2 - \\tfrac{1}{2}m^2\\phi^2$; electromagnetism $-\\tfrac{1}{4}F^2$. The 'mass term' produces dispersion (massive Klein-Gordon vs massless wave equation).");
  E("classical-field-theory", "$S = \\int d^4x",
    "Action as four-dimensional spacetime integral of the Lagrangian density. DIFFERS from particle action $\\int dt L$ by including the spatial integral. INVARIANCE under coordinate changes requires $\\mathcal L$ to transform appropriately — drives much of differential geometry in field theory.");
  E("classical-field-theory", "$\\partial_\\mu \\dfrac",
    "Euler-Lagrange for fields: a sum of derivatives gives the field equation. DERIVATION: vary $\\phi \\to \\phi + \\delta\\phi$, integrate by parts, set boundary terms to zero, demand $\\delta S = 0$. WORKED EXAMPLE: $\\mathcal L = \\tfrac{1}{2}(\\partial\\phi)^2 - V(\\phi)$ gives $\\Box\\phi + V'(\\phi) = 0$.");
  E("classical-field-theory", "Klein-Gordon:",
    "Field equation for a free spin-0 particle. ORIGIN: relativistic generalization of Schrödinger equation. INTERPRETATION: classical scalar field, OR quantum field whose quanta are spin-0 particles like the Higgs. SOLUTIONS: plane waves $e^{-ip\\cdot x/\\hbar}$ with $p^2 = m^2c^2$ (relativistic energy-momentum relation).");
  E("classical-field-theory", "Dirac:",
    "Relativistic equation for spin-1/2 particles. ORIGIN: Dirac (1928) sought a first-order Lorentz-covariant equation; required four-component spinors and predicted antimatter. WORKED EXAMPLE: positron predicted 1928, observed by Anderson 1932. Source of electron $g \\approx 2$, fine-structure splitting, spin-orbit coupling.");
  E("classical-field-theory", "$F_{\\mu\\nu} = \\partial_\\mu A_\\nu",
    "Electromagnetic field strength as 4-curl of the potential 4-vector $A_\\mu = (\\phi/c, \\vec A)$. ANTISYMMETRIC: 6 independent components — combine to give $\\vec E$ and $\\vec B$. GAUGE INVARIANCE: $A_\\mu \\to A_\\mu + \\partial_\\mu\\Lambda$ leaves $F$ unchanged.");
  E("classical-field-theory", "$\\mathcal{L}_{\\text{EM}}",
    "Maxwell's equations from this Lagrangian via Euler-Lagrange — gauge-invariant and Lorentz-covariant. ORIGIN: this elegant form was identified after Maxwell wrote his equations in cumbersome component form. WORKED EXAMPLE: vary with respect to $A_\\mu$ → Maxwell's source-side equations $\\partial_\\mu F^{\\mu\\nu} = J^\\nu$; remaining two come from antisymmetry of $F$.");

  // ============================================================
  // QFT
  // ============================================================
  E("qft", "$\\phi(x) = \\int",
    "Quantum field as a linear superposition of creation and annihilation operators in momentum space. ORIGIN: 'second quantization' — promote the wavefunction itself to an operator. CONSEQUENCE: particle number becomes an operator that doesn't commute with field amplitude — vacuum has fluctuations.");
  E("qft", "$[a_k, a_{k'}^\\dagger]",
    "Bosonic commutator. ORIGIN: same as ordinary QM ladder operators but for each momentum mode. The delta function reflects the continuum normalization. For FERMIONS, replace commutator with anti-commutator $\\{b_k, b_{k'}^\\dagger\\} = (2\\pi)^3\\delta(k - k')$ — encodes Pauli exclusion.");
  E("qft", "Propagator:",
    "Feynman propagator: amplitude for a virtual particle to travel from one spacetime point to another. ORIGIN: Feynman (1949). The $i\\epsilon$ prescription picks the correct boundary conditions (causal). WORKED EXAMPLE: appears in every Feynman diagram as an internal line.");
  E("qft", "QED vertex:",
    "Coupling between electron, positron, and photon. ORIGIN: comes from interaction term $-e\\bar\\psi\\gamma^\\mu\\psi A_\\mu$ in QED Lagrangian. EVERY interaction in QED is built from this single vertex. WORKED EXAMPLE: $e^+ e^- \\to \\mu^+ \\mu^-$ scattering has two vertices and one photon propagator at tree level.");
  E("qft", "$\\alpha = e^2",
    "Fine-structure constant ≈ 1/137. ORIGIN: Sommerfeld (1916). DIMENSIONLESS — no choice of units affects it. SMALL: makes perturbation theory in QED work brilliantly (each loop costs a factor of $\\alpha/\\pi$). At higher energies, $\\alpha$ runs LARGER (vacuum polarization).");
  E("qft", "Vacuum energy:",
    "Sum of zero-point energies of all field modes. FORMALLY infinite. Renormalized in flat space (only differences matter). PROFOUND PUZZLE: GR couples to absolute energy → predicted cosmological constant is $\\sim 10^{120}$ times the observed value. The cosmological constant problem.");
  E("qft", "Compton wavelength:",
    "$\\lambda_C = h/(mc)$ — natural length scale below which particle creation becomes important. WORKED EXAMPLES: electron $\\lambda_C \\approx 2.43 \\times 10^{-12}$ m; proton $\\lambda_C \\approx 1.32 \\times 10^{-15}$ m. SETS scale where relativistic QFT effects matter — below it, single-particle QM breaks down.");

  // ============================================================
  // RENORMALIZATION
  // ============================================================
  E("renormalization", "$g_{\\text{bare}}",
    "The 'bare' couplings in the Lagrangian are infinite; absorb the infinities into counterterms to leave a finite RENORMALIZED coupling that matches experiment. ORIGIN: developed by Bethe, Tomonaga, Schwinger, Feynman, Dyson (1947-49) — Nobel 1965. CONCEPTUALLY: the parameters in your theory depend on the energy scale you probe.");
  E("renormalization", "$\\beta(g)",
    "Beta function: how the renormalized coupling changes with energy scale. WORKED EXAMPLES: QED $\\beta(\\alpha) = \\alpha^2/(3\\pi) > 0$ (coupling grows at high energy); QCD $\\beta(\\alpha_s) < 0$ (coupling shrinks — asymptotic freedom). DIFFERENTIAL equation governs the running.");
  E("renormalization", "QED: $\\beta > 0$",
    "Vacuum polarization: virtual electron-positron pairs screen the bare charge. At higher energy you probe deeper into the screening cloud and see more of the bare charge. PRACTICAL: $\\alpha$ at LEP energies (91 GeV) is about 1/127 vs 1/137 at low energy. Eventually hits the Landau pole at astronomical energies.");
  E("renormalization", "QCD: $\\beta < 0$",
    "ASYMPTOTIC FREEDOM: quarks become free at high energies. ORIGIN: Gross, Wilczek, Politzer (1973) — Nobel 2004. CONSEQUENCE: deep inelastic scattering sees quasi-free quarks; low-energy QCD is strongly coupled, leading to confinement and hadronization.");
  E("renormalization", "Dimensional reg:",
    "Generalize integrals to $D = 4 - \\epsilon$ dimensions. Poles appear as $1/\\epsilon$ as $\\epsilon \\to 0$ — these are the divergences. ORIGIN: 't Hooft, Veltman (1972) — Nobel 1999. ADVANTAGE: preserves gauge invariance, unlike cutoff regularization. THE standard regulator in modern QFT computations.");
  E("renormalization", "Wilsonian RG:",
    "Integrate out high-momentum (short-distance) modes, see how the effective Lagrangian flows. ORIGIN: Kenneth Wilson (1971) — Nobel 1982. CONCEPTUAL REVOLUTION: renormalization is no longer about hiding infinities but about coarse-graining. UNIFIES particle physics, condensed matter, critical phenomena.");
  E("renormalization", "Fixed points:",
    "Couplings at which $\\beta(g^*) = 0$ — the theory is scale-invariant. WORKED EXAMPLES: free theory ($g = 0$) is a Gaussian fixed point; Wilson-Fisher fixed point describes 3D Ising universality class. PHYSICAL: critical points of phase transitions sit at non-trivial fixed points.");

  // ============================================================
  // RADIATION THEORY
  // ============================================================
  E("radiation-theory", "Larmor:",
    "Non-relativistic power radiated by an accelerating charge. ORIGIN: Larmor (1897). KEY FEATURES: cubic in $c$ in denominator (relativistic suppression); proportional to $a^2$ (only accelerating charges radiate). WORKED EXAMPLE: electron in atom, classical estimate predicts collapse in $10^{-11}$ s — quantum mechanics rescues stability.");
  E("radiation-theory", "Dipole:",
    "Time-averaged power radiated by an oscillating electric dipole. ORIGIN: Hertz (1888) experimentally; classical EM derivation. STRONG $\\omega^4$ dependence: why higher frequencies radiate so much more efficiently. WORKED EXAMPLE: antennas at radio frequencies (GHz) vs power lines (Hz) — power-line radiation is negligible.");
  E("radiation-theory", "Rayleigh:",
    "Scattering cross section $\\propto 1/\\lambda^4$. ORIGIN: Rayleigh (1871). EXPLAINS BLUE SKY: blue light (shorter wavelength) scatters about 6x more than red, so sun's blue gets scattered all over the sky. EXPLAINS RED SUNSETS: through more atmosphere, blue is scattered AWAY from the line of sight, leaving red.");
  E("radiation-theory", "Synchrotron:",
    "Power radiated by relativistic charge in magnetic field. BEAMED into a narrow cone of opening angle $1/\\gamma$. WORKED EXAMPLE: synchrotron light sources (X-ray facilities) exploit this; astrophysical synchrotron from cosmic-ray electrons in galactic magnetic fields produces radio waves with characteristic spectrum $\\propto \\nu^{-(p-1)/2}$.");
  E("radiation-theory", "Retarded time:",
    "Effects propagate at $c$, so radiation observed at time $t$ comes from emission at retarded time $t' = t - r/c$. ORIGIN: causality. CONSEQUENCE: Liénard-Wiechert potentials — full relativistic generalization of Coulomb potential — depend on the source's history, not its current state.");
  E("radiation-theory", "Multipole expansion:",
    "Decompose radiation by angular momentum: dipole ($\\ell=1$), quadrupole ($\\ell=2$), octupole ($\\ell=3$), \\ldots. Each higher multipole falls off as $1/r$ but couples more weakly: ratio $\\sim (\\omega R/c)^{2\\ell}$. WORKED EXAMPLE: photon emission from atomic transitions is overwhelmingly E1 (dipole); M1 and E2 transitions are forbidden or much weaker.");
  E("radiation-theory", "Abraham-Lorentz:",
    "Radiation reaction force on an accelerating charge. ORIGIN: Abraham, Lorentz (early 1900s). PROBLEMATIC: leads to pre-acceleration and runaway solutions — signs of physical incompleteness. RESOLVED in modern field-theoretic treatments. PRACTICAL: matters for relativistic charges in strong fields (synchrotrons, free-electron lasers).");

  // ============================================================
  // EM WAVES IN MATTER
  // ============================================================
  E("em-waves-matter", "$n = \\sqrt{\\varepsilon_r \\mu_r}",
    "Refractive index in linear, isotropic, non-magnetic medium ($\\mu_r \\approx 1$ for most materials) reduces to $n = \\sqrt{\\varepsilon_r}$. WORKED EXAMPLES: glass $n \\approx 1.5$, water $n \\approx 1.33$, diamond $n \\approx 2.4$. EM wave speed in medium: $v = c/n$. Frequency-dependent — gives dispersion (rainbow from a prism).");
  E("em-waves-matter", "$v_p = \\omega/k",
    "Phase velocity: speed at which a single sinusoidal mode's wavefronts move. WORKED EXAMPLE: in waveguide above cutoff, $v_p > c$ — but doesn't violate relativity (no information traveling).");
  E("em-waves-matter", "$v_g = d\\omega/dk",
    "Group velocity: speed at which a wave packet (and the energy it carries) actually moves. SLOW LIGHT: in some EIT experiments, $v_g$ has been reduced to walking speed. FAST LIGHT: in anomalous dispersion regions, $v_g$ can be negative, but pulse-shape distortion preserves causality.");
  E("em-waves-matter", "Critical angle:",
    "Above this incidence angle, total internal reflection: no light enters the second medium. WORKED EXAMPLE: water to air ($n_1 = 1.33$, $n_2 = 1$): $\\sin\\theta_c = 1/1.33$, $\\theta_c \\approx 48.6°$. UNDERLIES fiber optics, prismatic binoculars, evanescent-field sensors.");
  E("em-waves-matter", "Brewster angle:",
    "Reflected ray is FULLY polarized perpendicular to the plane of incidence. ORIGIN: David Brewster (1815). WORKED EXAMPLE: glass $n = 1.5$ gives Brewster angle $\\arctan(1.5) \\approx 56.3°$. USED IN: polarized sunglasses suppress glare from water/road; Brewster windows in laser cavities reduce loss.");
  E("em-waves-matter", "Skin depth:",
    "Depth in a conductor at which EM wave amplitude drops by $1/e$. WORKED EXAMPLE: copper at 1 GHz has $\\delta \\approx 2$ μm — explains why high-frequency wires need to be only as thick as the skin depth (litz wire, hollow waveguides). At 60 Hz: $\\delta \\approx 8.5$ mm in copper.");
  E("em-waves-matter", "Plasma frequency:",
    "Frequency above which EM waves can propagate through a plasma; below it, total reflection. WORKED EXAMPLE: Earth's ionosphere has $f_p \\sim$ few MHz — AM radio (1 MHz) bounces off it (long-distance propagation), FM radio (100 MHz) goes through (line-of-sight only). Stars have plasma frequency setting their opacity.");

  // ============================================================
  // LASERS
  // ============================================================
  E("lasers", "Population inversion:",
    "MORE atoms in upper state than lower — necessary for net stimulated emission to exceed absorption. NOT achievable in thermal equilibrium (Boltzmann puts more atoms in lower). REQUIRES pumping: optical, electrical, or chemical. ESTABLISHED in 4-level systems where excited atoms quickly drop into a metastable upper laser level.");
  E("lasers", "Threshold:",
    "Lasing starts when round-trip gain matches round-trip losses (mirror transmission, scattering, absorption). BELOW threshold: spontaneous emission only — like an LED. ABOVE: coherent stimulated emission dominates — exponentially amplified inside the cavity.");
  E("lasers", "$L_c \\sim c/\\Delta\\nu",
    "Coherence length: distance over which the laser's phase is well-defined. INVERSE of spectral linewidth. WORKED EXAMPLE: HeNe laser $\\Delta\\nu \\sim 1$ MHz → $L_c \\sim 300$ m. Single-frequency stabilized lasers reach $L_c \\sim 10^6$ km — used in gravitational wave detectors (LIGO).");
  E("lasers", "He-Ne:",
    "Classic visible laser. The transition is in NEON; HELIUM is a pumping medium (electron impact excites He, energy transfers to Ne). WORKED EXAMPLE: red 632.8 nm line is most common; green 543.5 nm and infrared 1.15 μm also possible. INVENTED 1961, just a year after the first ruby laser.");
  E("lasers", "Cavity modes:",
    "Fabry-Pérot resonator allows only frequencies where round-trip phase is multiple of $2\\pi$: $\\nu_n = nc/(2L)$. SPACING $c/(2L)$ between modes. WORKED EXAMPLE: 1 m cavity has 150 MHz mode spacing — laser may oscillate on many modes unless mode-selecting elements (etalons) are added.");
  E("lasers", "Q-switched, mode-locked",
    "Q-SWITCHING: store energy by spoiling the cavity Q, then suddenly raise Q for a giant nanosecond pulse. MODE-LOCKING: phase-lock many longitudinal modes so they interfere to a femtosecond pulse train. NOBEL 2018: Mourou and Strickland for chirped pulse amplification — enabling petawatt lasers.");

  // ============================================================
  // QUANTUM OPTICS
  // ============================================================
  E("quantum-optics", "Coherent state:",
    "Eigenstates of the annihilation operator. ORIGIN: Schrödinger (1926), revived by Glauber (1963) — Nobel 2005. WORKED EXAMPLE: $|\\alpha\\rangle$ for complex $\\alpha$. PROPERTIES: minimum-uncertainty, classical-like — describes a laser beam well. Number variance EQUALS mean.");
  E("quantum-optics", "$|\\alpha\\rangle =",
    "Expansion of coherent state in photon number basis. ORIGIN: from $\\hat a|\\alpha\\rangle = \\alpha|\\alpha\\rangle$. WORKED EXAMPLE: average photon number $|\\alpha|^2$; probability of finding $n$ photons is Poisson($|\\alpha|^2$). Different coherent states are NOT orthogonal: $|\\langle\\alpha|\\beta\\rangle|^2 = e^{-|\\alpha - \\beta|^2}$.");
  E("quantum-optics", "Poisson statistics",
    "Photon number distribution of a coherent state. CHARACTERIZES classical-like light: laser, sunlight, thermal lamp. VARIANCE = MEAN: shot noise. SUB-POISSONIAN means non-classical (e.g., single-photon sources, squeezed states).");
  E("quantum-optics", "$g^{(2)}(0)",
    "Second-order correlation at zero delay. Distinguishes light statistics. WORKED EXAMPLES: thermal light $g^{(2)}(0) = 2$ (BUNCHED); coherent $g^{(2)}(0) = 1$ (uncorrelated); antibunched $g^{(2)}(0) < 1$ (non-classical, e.g., single-atom emission, single quantum dot).");

  // ============================================================
  // AMO PHYSICS
  // ============================================================
  E("amo", "Doppler limit:",
    "Lowest temperature reachable by standard Doppler cooling. Arises from balance between cooling (red-detuned absorption) and random spontaneous-emission heating. WORKED EXAMPLE: Cs (natural linewidth $\\Gamma/(2\\pi) = 5.2$ MHz) has $T_D \\approx 125$ μK. Routinely beaten by sub-Doppler techniques.");
  E("amo", "Recoil limit:",
    "Set by the kinetic energy from a single photon recoil. WORKED EXAMPLE: Rb $T_R \\approx 360$ nK. Reached by SISYPHUS cooling, polarization-gradient cooling. Below: Raman cooling, evaporative cooling get into the nK regime — required for BEC.");
  E("amo", "MOT:",
    "Magneto-optical trap. Six counter-propagating red-detuned laser beams along Cartesian axes plus a quadrupole magnetic field. ORIGIN: Raab et al. (1987). MAGNETIC GRADIENT makes the cooling position-dependent — confines atoms in space, not just velocity. The workhorse of cold-atom experiments.");
  E("amo", "$T_c^{\\text{BEC}}",
    "Critical temperature for Bose-Einstein condensation. CONDITION: thermal de Broglie wavelength exceeds inter-particle spacing. WORKED EXAMPLE: $10^{14}$/cm³ Rb atoms condense around 100 nK. FIRST observed: 1995 (Cornell, Wieman, Ketterle — Nobel 2001).");
  E("amo", "$\\lambda_{dB}",
    "Thermal de Broglie wavelength. SETS the length scale of quantum coherence. WORKED EXAMPLE: Rb at 1 μK has $\\lambda_{dB} \\approx 0.3$ μm — already larger than the inter-atomic spacing in typical traps. Quantum identical-particle effects become unavoidable.");
  E("amo", "BEC when",
    "Phase-space density above ≈ 2.612 triggers BEC. WORKED EXAMPLE: typical experiments condense $\\sim 10^5$ to $10^7$ atoms into a single quantum state. Macroscopic occupation makes BEC effectively a single 'super-atom' — observable through its coherence and interference.");
  E("amo", "Atomic clock:",
    "Cesium-133 ground-state hyperfine transition at exactly 9,192,631,770 Hz DEFINES the second since 1967. Modern optical clocks (Sr, Yb) reach fractional accuracy $\\sim 10^{-18}$ — would lose 1 second in the age of the universe. Will redefine the second this decade.");

  // ============================================================
  // PHASE TRANSITIONS
  // ============================================================
  E("phase-transitions", "First-order:",
    "Latent heat absorbed/released at the transition. Order parameter jumps discontinuously. WORKED EXAMPLES: melting (ice ↔ water, 334 J/g), vaporization (water → steam, 2256 J/g), magnetization flip in low-T Ising. Two phases COEXIST at the transition temperature.");
  E("phase-transitions", "Second-order:",
    "Continuous transition, no latent heat, order parameter goes smoothly to zero. WORKED EXAMPLES: Curie point of ferromagnet (1043 K for iron), superconducting transition, liquid-gas critical point. CHARACTERIZED by diverging correlation length and universal critical exponents.");
  E("phase-transitions", "Landau:",
    "Free energy expanded in powers of the order parameter $m$. Linear term forbidden by symmetry. Coefficient of $m^2$ changes sign at $T_c$ — drives the transition. ORIGIN: Lev Landau (1937). MEAN-FIELD: ignores fluctuations — gives critical exponents wrong below upper critical dimension (4 for Ising).");
  E("phase-transitions", "Mean-field $T_c$:",
    "Critical temperature in mean-field approximation: thermal energy $k_BT_c$ equals total exchange interaction $zJ$ ($z$ = coordination, $J$ = nearest-neighbor coupling). WORKED EXAMPLE: 3D simple cubic Ising $z = 6$ → $k_B T_c = 6J$. Exact value is $4.5J$ — fluctuations reduce $T_c$.");
  E("phase-transitions", "Critical exponents:",
    "Universal numbers describing how quantities diverge near $T_c$. SAME within a universality class regardless of microscopic details. WORKED EXAMPLE: 3D Ising/liquid-gas have IDENTICAL exponents ($\\nu \\approx 0.63, \\beta \\approx 0.33$) despite vastly different microscopics — explained by renormalization group.");
  E("phase-transitions", "Ising 2D:",
    "Onsager (1944) exactly solved the 2D Ising model — heroic mathematical feat. Critical exponents $\\beta = 1/8, \\gamma = 7/4, \\nu = 1, \\alpha = 0$ (log divergence in specific heat). FIRST exactly solved interacting many-body model with a phase transition.");
  E("phase-transitions", "Mean field:",
    "Predicts $\\beta = 1/2$ for magnetization, $\\gamma = 1$, $\\alpha = 0$. WRONG below upper critical dimension because it ignores fluctuations. CORRECT above $d = 4$ (in mean-field-exact regime). RG explains the change: in $d > 4$, Gaussian fixed point is stable; below, Wilson-Fisher fixed point takes over.");

  // ============================================================
  // NONEQUILIBRIUM STAT MECH
  // ============================================================
  E("nonequilibrium-statmech", "Boltzmann eq:",
    "Evolution of the phase-space distribution function $f(\\vec r, \\vec v, t)$ under streaming, external forces, and collisions. ORIGIN: Boltzmann (1872). NON-LINEAR (the collision integral involves $f$ twice). UNDERLIES transport theory: diffusion, viscosity, thermal conductivity.");
  E("nonequilibrium-statmech", "Relaxation:",
    "Simplest closure: relax toward local equilibrium at characteristic time $\\tau$. ORIGIN: Bhatnagar-Gross-Krook (1954). WORKED EXAMPLE: gives Navier-Stokes equations with transport coefficients in terms of $\\tau$ and microscopic parameters. Used in lattice Boltzmann simulations.");
  E("nonequilibrium-statmech", "H-theorem:",
    "Boltzmann's H functional monotonically decreases. INTERPRETATION: entropy (–H) increases. ORIGIN: Boltzmann (1872). PROFOUND: derives the second law from microscopic dynamics — but requires assumption of molecular chaos (Stosszahlansatz), introducing irreversibility. Loschmidt's paradox still discussed.");
  E("nonequilibrium-statmech", "FDT:",
    "Fluctuation-dissipation theorem: spontaneous fluctuations and response to external perturbation are linked through the same correlation function. ORIGIN: Callen, Welton (1951). WORKED EXAMPLE: Johnson-Nyquist noise in resistor $S_V = 4k_BT R$ — thermal fluctuations of voltage equal $4k_BT R$ per Hz of bandwidth.");
  E("nonequilibrium-statmech", "Onsager:",
    "ONSAGER RECIPROCITY (1931, Nobel 1968): transport-coefficient matrix is symmetric. WORKED EXAMPLE: thermoelectric (Seebeck) effect has its reciprocal (Peltier) — Onsager showed they're related by detailed balance. UNIVERSAL feature of linear-response near equilibrium.");
  E("nonequilibrium-statmech", "Einstein:",
    "EINSTEIN RELATION: diffusion constant equals mobility times $k_BT$. ORIGIN: Einstein's 1905 paper on Brownian motion — connected microscopic thermal motion to macroscopic diffusion. WORKED EXAMPLE: charged particles in fluid: $\\mu = D/(k_BT/q)$, Nernst-Einstein. Foundation of electrochemistry.");
  E("nonequilibrium-statmech", "Wiedemann-Franz:",
    "Thermal conductivity divided by electrical conductivity times temperature is a UNIVERSAL constant $L_0 = \\pi^2 k_B^2/(3e^2) \\approx 2.44 \\times 10^{-8}$ W·Ω/K². ORIGIN: Wiedemann-Franz (1853 empirical), Sommerfeld (1927 theory). REASON: same electrons carry both heat and charge. Holds in normal metals; breaks down in strange metals.");

  // ============================================================
  // QUANTUM HALL / TOPOLOGICAL
  // ============================================================
  E("quantum-hall-topological", "$\\sigma_{xy} = \\nu",
    "Hall conductance quantized in units of $e^2/h$. ORIGIN: von Klitzing (1980) — Nobel 1985. WORKED EXAMPLE: experimentally measured to 10 significant figures, providing the resistance standard. The quantization is TOPOLOGICAL — insensitive to disorder, sample shape.");
  E("quantum-hall-topological", "$\\nu = nh/(eB)",
    "Filling factor: number of filled Landau levels (integer or fractional). $\\nu = 1$ when each electron has one flux quantum. WORKED EXAMPLE: at $B = 10$ T, density $n = 2.4 \\times 10^{15}$ /m² gives $\\nu = 1$. Adjusting $B$ or density tunes through the QH plateaus.");
  E("quantum-hall-topological", "Landau levels:",
    "Highly degenerate flat bands of charged particles in a magnetic field. SPACING $\\hbar\\omega_c$ where $\\omega_c = eB/m$ is the cyclotron frequency. WORKED EXAMPLE: at $B = 10$ T, $\\hbar\\omega_c \\approx 17$ meV for electrons in vacuum, less in semiconductors due to effective mass. DEGENERACY per level $\\propto B$.");
  E("quantum-hall-topological", "FQHE:",
    "Fractional quantum Hall effect — many-body topological state. ORIGIN: Tsui, Stormer (1982), Laughlin theory (1983) — Nobel 1998. WORKED EXAMPLE: at $\\nu = 1/3$, Laughlin wavefunction with quasiparticles carrying CHARGE $e/3$. Quasiparticles are ANYONS (fractional statistics).");
  E("quantum-hall-topological", "Chern number",
    "Topological invariant of a band. Integer. ORIGIN: Berry phase integrated over the Brillouin zone. WORKED EXAMPLE: TKNN formula (1982) shows integer QH conductance equals the total Chern number of filled bands. ROBUST: unaffected by smooth deformations, disorder.");
  E("quantum-hall-topological", "Topological insulator:",
    "Bulk insulating, edges/surfaces CONDUCT. ORIGIN: theoretically predicted 2005-06 (Kane, Mele, Bernevig, Zhang); first experiments 2007 (HgTe wells). EDGE STATES protected by time-reversal symmetry. EXAMPLES: Bi$_2$Se$_3$, Bi$_2$Te$_3$, magnetic TIs.");
  E("quantum-hall-topological", "Berry phase:",
    "Geometric phase accumulated by a quantum state as the Hamiltonian's parameters traverse a closed loop. ORIGIN: Michael Berry (1984), anticipated by Pancharatnam (1956). WORKED EXAMPLE: spin in slowly rotating magnetic field picks up phase $\\pi(1 - \\cos\\theta)$ — half the solid angle. The geometric structure behind topological phases.");

  // ============================================================
  // PHONONS
  // ============================================================
  E("phonons", "1D chain:",
    "Dispersion relation for monatomic chain of identical masses connected by springs. PERIODIC: only $q$ in first Brillouin zone $[-\\pi/a, \\pi/a]$ matters. EXTREMES: at $q = 0$, $\\omega = 0$ (no restoring force for uniform translation); at $q = \\pi/a$, $\\omega$ peaks ($2\\sqrt{K/m}$) — neighboring atoms move opposite directions.");
  E("phonons", "Sound speed:",
    "Long-wavelength (small $q$) limit of phonon dispersion is linear: $\\omega = v_s q$. INTERPRETATION: long-wavelength phonons are sound waves. WORKED EXAMPLE: diamond has high stiffness $K$ relative to atomic mass → sound speed ≈ 12,000 m/s, fastest of any solid.");
  E("phonons", "Debye temperature:",
    "Sets the scale below which phonon modes become 'frozen out' — quantum effects dominate. WORKED EXAMPLES: aluminum $\\Theta_D \\approx 428$ K, lead 105 K, diamond 2230 K. Many physical properties (heat capacity, thermal conductivity) scale with $T/\\Theta_D$ — universal curves apply across materials.");
  E("phonons", "Debye specific heat:",
    "At low temperature, phonon specific heat goes as $T^3$ — universal. ORIGIN: Debye (1912). DERIVATION: only modes with $\\hbar\\omega \\lesssim k_BT$ are excited; in 3D with linear dispersion, that's $T^3$ modes. AT HIGH T: Dulong-Petit limit $C_V = 3R$ per mole.");
  E("phonons", "Phonon = quantum",
    "Quanta of lattice vibrations, just as photons are quanta of EM waves. CONCEPT introduced by Einstein (1907) and Debye (1912) to fix the classical heat-capacity disaster. BOSE statistics — phonons can pile into the same mode (basis of acoustic 'lasers' and Bose-Einstein-like behavior).");
  E("phonons", "Acoustic vs optical",
    "Crystals with 2-atom basis have 2 phonon branches per polarization: ACOUSTIC (in-phase, $\\omega \\to 0$ as $q \\to 0$) and OPTICAL (out-of-phase, finite $\\omega$ even at $q = 0$). WORKED EXAMPLE: NaCl optical phonon is the ion oscillation driving IR absorption near 25 μm.");
  E("phonons", "Brillouin zone:",
    "Wigner-Seitz unit cell in reciprocal space. PERIODICITY of the crystal means physics is periodic in $q$ with period of a reciprocal lattice vector — only the first BZ is independent. WORKED EXAMPLE: 1D chain BZ is $[-\\pi/a, \\pi/a]$; cubic crystal BZ is a cube; FCC BZ is the truncated octahedron.");

  // ============================================================
  // STELLAR EVOLUTION
  // ============================================================
  E("stellar-evolution", "MS lifetime",
    "Main-sequence lifetime scales as $M^{-2.5}$. ORIGIN: lifetime ~ fuel/luminosity; fuel $\\propto M$, but luminosity $\\propto M^{3.5}$. WORKED EXAMPLES: Sun (1 M☉) lives ~10 Gyr; 10 M☉ star ~30 Myr; 0.5 M☉ star ~50 Gyr (longer than universe age). High-mass stars burn brilliantly but briefly.");
  E("stellar-evolution", "Hayashi track",
    "Pre-main-sequence stage: protostar contracts and is fully convective. Almost vertical line in HR diagram (nearly constant effective temperature ~ 4000 K). ORIGIN: Chushiro Hayashi (1961). WORKED EXAMPLE: Sun spent ~30 Myr on the Hayashi track before reaching the main sequence.");
  E("stellar-evolution", "Eddington luminosity:",
    "Maximum luminosity at which radiation pressure on electrons balances gravity. WORKED EXAMPLE: $L_E \\approx 1.3 \\times 10^{31}(M/M_\\odot)$ W. Approaching it: massive stars and bright AGNs blow away their atmospheres. LIMITS: black hole accretion rates, massive star formation, stellar wind strengths.");
  E("stellar-evolution", "Chandrasekhar:",
    "Maximum mass of a white dwarf, supported by electron degeneracy pressure. ORIGIN: Subrahmanyan Chandrasekhar (1930) — Nobel 1983. DERIVATION: relativistic electrons cap the supported mass. ABOVE: collapse to neutron star (Type II SN) or thermonuclear runaway (Type Ia SN — standard candles for cosmology).");
  E("stellar-evolution", "TOV limit:",
    "Tolman-Oppenheimer-Volkoff: maximum mass of a neutron star, supported by neutron degeneracy + strong-force repulsion. ORIGIN: TOV equation (1939). VALUE depends on equation of state, $\\sim 2-3 M_\\odot$. ABOVE: black hole. GW170817 (neutron-star merger) is helping pin down the limit.");
  E("stellar-evolution", "Sun's age:",
    "Sun age ~4.6 Gyr (from radioactive dating of meteorites); MS lifetime ~10 Gyr (from stellar models). WORKED EXAMPLE: Sun is roughly halfway through its main-sequence life. In ~5 Gyr it will become a red giant, then a white dwarf.");
  E("stellar-evolution", "Main sequence:",
    "The 'normal' phase where the star fuses hydrogen into helium in its core. Most stars (by number) are here. LASTS the longest of any stellar phase. END: core hydrogen exhausted → contracts and heats → shell burning → red giant.");

  // ============================================================
  // STELLAR NUCLEOSYNTHESIS
  // ============================================================
  E("stellar-nucleosynthesis", "pp chain:",
    "Proton-proton chain. Net reaction $4{}^1\\text{H} \\to {}^4\\text{He} + 2e^+ + 2\\nu_e + 26.7$ MeV. ORIGIN: Bethe (1939) — Nobel 1967. RATE LIMITED by weak interaction (first step: $p + p \\to D + e^+ + \\nu_e$) — why the Sun burns so slowly.");
  E("stellar-nucleosynthesis", "CNO:",
    "Carbon-Nitrogen-Oxygen cycle: catalytic, uses pre-existing C/N/O as catalysts for hydrogen → helium. ORIGIN: Bethe (1939), von Weizsäcker (1937). DOMINATES in stars hotter than ~1.7 × 10^7 K (Sun is borderline; bigger stars rely on CNO).");
  E("stellar-nucleosynthesis", "Triple-α:",
    "Three helium nuclei fuse to carbon-12. WORKED EXAMPLE: requires temperatures > 10^8 K. SALPETER (1952) and HOYLE (1954) — Hoyle PREDICTED an excited state of $^{12}$C that would make the reaction fast enough to explain observed C abundance. Found experimentally; cornerstone of nuclear astrophysics.");
  E("stellar-nucleosynthesis", "Iron peak:",
    "Fe-56 has highest binding energy per nucleon. CONSEQUENCE: end of stellar fusion — beyond Fe, fusion costs energy. Stars build up Fe cores → eventually core collapse → supernova. Iron-group elements (V, Cr, Mn, Fe, Co, Ni) are unusually abundant for this reason.");
  E("stellar-nucleosynthesis", "r-process:",
    "Rapid neutron-capture process — neutrons captured faster than the resulting nuclei can $\\beta$-decay. PRODUCES heavy nuclei past iron (gold, uranium). SITE: neutron star mergers (confirmed by GW170817 / kilonova 2017) and possibly core-collapse SNe.");
  E("stellar-nucleosynthesis", "s-process:",
    "Slow neutron-capture process: neutrons captured between $\\beta$-decays. SITE: AGB stars (helium-shell flashes). PRODUCES nuclei up to bismuth-209. Together with r-process, account for nearly all elements heavier than iron in the universe.");
  E("stellar-nucleosynthesis", "Solar metallicity:",
    "By mass fraction, the Sun has H ≈ 71%, He ≈ 27%, 'metals' (everything heavier) ≈ 1.4%. SETS the reference for stellar populations. Pop I (young, metal-rich), Pop II (old, metal-poor), Pop III (first stars, metal-free — yet to be confirmed observationally).");

  // ============================================================
  // COMPACT OBJECTS
  // ============================================================
  E("compact-objects", "$M_{Ch}",
    "Chandrasekhar mass ≈ 1.44 M☉. Above it, electron degeneracy pressure cannot support a star → collapse. WORKED EXAMPLE: white dwarfs accreting from a companion can reach $M_{Ch}$ → Type Ia supernova explosion. Their consistent peak brightness makes them 'standard candles' for cosmology (discovery of dark energy, Nobel 2011).");
  E("compact-objects", "WD density:",
    "White dwarf: Earth-sized object with the Sun's mass. DENSITY $\\sim 10^9$ kg/m³ (a teaspoon weighs ~5 tons). SUPPORTED by electron degeneracy. WORKED EXAMPLE: Sirius B is the nearest WD (8.6 ly).");
  E("compact-objects", "NS density:",
    "Neutron star density $\\sim 10^{17}$ kg/m³ — close to nuclear density. WORKED EXAMPLE: ~1 km³ of NS material masses ~$10^{17}$ kg, more than entire Mt. Everest. SUPPORTED by neutron degeneracy + strong-force repulsion.");
  E("compact-objects", "NS radius:",
    "Typical NS radius ~10-12 km, mass 1.4-2 M☉. WORKED EXAMPLE: surface gravity $\\sim 10^{12}$ × Earth's; escape velocity $\\sim 0.5c$. SPINS up to 716 Hz (millisecond pulsars). Hot at birth (~10^{11} K), cools to $10^6$ K in a million years.");
  E("compact-objects", "$r_s = 2GM/c^2",
    "Schwarzschild radius — boundary of a non-rotating black hole. ORIGIN: Karl Schwarzschild (1916). WORKED EXAMPLES: $r_s$ of 1 M☉ ≈ 3 km; of Earth ≈ 9 mm; of Milky Way SMBH ≈ 0.08 AU. Below: nothing escapes (classically).");
  E("compact-objects", "$T_H",
    "Hawking temperature: black holes radiate like blackbodies at this temperature. ORIGIN: Stephen Hawking (1974). WORKED EXAMPLE: solar-mass BH has $T_H \\approx 60$ nK — far below CMB, never observable. Small primordial BHs (if they exist) would be hot and evaporating.");
  E("compact-objects", "$S_{BH}",
    "Bekenstein-Hawking entropy: proportional to event horizon AREA, not volume. ORIGIN: Bekenstein (1972), Hawking (1974). PROFOUND: suggests information lives on the 2D boundary — basis of the holographic principle ('t Hooft 1993, Susskind 1995). One of the deepest hints about quantum gravity.");
  E("compact-objects", "Sgr A* mass:",
    "Sagittarius A* — the supermassive black hole at the center of the Milky Way. Mass ≈ $4 \\times 10^6$ M☉, distance ~26,000 ly. ORIGIN: stellar orbital tracking — Genzel and Ghez (Nobel 2020). Imaged by Event Horizon Telescope (2022) — second BH ever directly imaged after M87*.");

  // ============================================================
  // GALACTIC DYNAMICS
  // ============================================================
  E("galactic-dynamics", "Rotation curves:",
    "Orbital velocity in spiral galaxies stays FLAT at large radii instead of falling as Kepler $1/\\sqrt r$. ORIGIN: Vera Rubin et al. (1970s). EXPLANATION: galaxies are embedded in massive DARK MATTER halos extending well beyond the visible disk. Direct, smoking-gun evidence for dark matter.");
  E("galactic-dynamics", "$M(r) \\sim v^2 r / G",
    "Mass enclosed within radius $r$ from circular-orbit speed. WORKED EXAMPLE: at Solar radius (8 kpc), $v \\approx 220$ km/s gives $M(<8\\text{ kpc}) \\approx 9 \\times 10^{10} M_\\odot$. At 100 kpc (DM halo edge), $\\sim 10^{12} M_\\odot$ — most of it dark.");
  E("galactic-dynamics", "Virial:",
    "For a self-gravitating system in equilibrium, $\\langle 2T + V\\rangle = 0$, i.e., $\\langle T \\rangle = -\\langle V \\rangle/2$. WORKED EXAMPLE: Coma cluster — Zwicky (1933) applied virial theorem and found dynamical mass FAR exceeds visible mass. The first evidence for dark matter, decades before Rubin.");
  E("galactic-dynamics", "Tully-Fisher:",
    "Empirical correlation: spiral galaxy luminosity $L \\propto v^4$ where $v$ is the flat rotation speed. ORIGIN: Tully and Fisher (1977). USE: distance indicator — measure $v$ (Doppler width of 21cm line), infer $L$, compare to apparent brightness to get distance. Important rung on the cosmic distance ladder.");
  E("galactic-dynamics", "Faber-Jackson:",
    "Elliptical-galaxy analog: $L \\propto \\sigma^4$ where $\\sigma$ is the central velocity dispersion. ORIGIN: Faber and Jackson (1976). MORE refined: fundamental plane (3-parameter relation). PHYSICAL: virial relation plus near-uniform mass-to-light ratio.");
  E("galactic-dynamics", "MW DM halo mass:",
    "Milky Way total mass within virial radius (~250 kpc) estimated $\\sim 10^{12} M_\\odot$ — only a few percent is visible stars and gas. WORKED EXAMPLE: from tracer dynamics — high-velocity stars, satellite galaxies (LMC, Sagittarius dwarf), Gaia kinematics — converge on this number.");
  E("galactic-dynamics", "Density wave theory:",
    "Lin and Shu (1964): spiral arms are NOT material structures but density waves moving through the disk. STARS and gas pass in and out; the pattern persists. EXPLAINS why arms aren't wound up by differential rotation. RECENT: transient spirals from gravitational instabilities also play a role.");

  // ============================================================
  // BBN / CMB / INFLATION
  // ============================================================
  E("bbn-cmb-inflation", "Primordial He fraction:",
    "BBN prediction: $Y_p \\approx 0.245$ (helium mass fraction). DEPENDS on baryon-to-photon ratio, neutron lifetime, neutrino species. ORIGIN: Gamow, Alpher, Herman (1948), refined by many. AGREES with observed He abundance — one of three pillars of Big Bang (along with CMB and Hubble expansion).");
  E("bbn-cmb-inflation", "$T_{\\text{CMB}}",
    "Cosmic microwave background: 2.725 K blackbody radiation filling the universe. ORIGIN: Penzias and Wilson (1965, accidental discovery) — Nobel 1978. Predicted by Gamow et al. PROFOUND: the universe was once hot and dense, and this is the cooled-down photon echo.");
  E("bbn-cmb-inflation", "Recombination:",
    "When electrons and protons combined to form neutral hydrogen, universe became transparent. WORKED EXAMPLE: at $z \\sim 1100$, $T \\sim 3000$ K, photons decoupled from matter. CMB we see today comes from this 'surface of last scattering.' Universe was 380,000 years old.");
  E("bbn-cmb-inflation", "Acoustic peaks",
    "CMB power spectrum shows oscillations from sound waves in the photon-baryon plasma before recombination. ORIGIN: Sakharov (1965), refined into modern theory. WORKED EXAMPLE: first peak at $\\ell \\sim 220$ measures the geometry of the universe — confirms FLATNESS to 0.4%. Pillar of precision cosmology.");
  E("bbn-cmb-inflation", "Inflation:",
    "Brief epoch (~$10^{-32}$ s) of exponential expansion in the early universe. ORIGIN: Guth (1980), Linde, Albrecht, Steinhardt. SOLVES: horizon problem (why CMB so uniform), flatness problem, monopole problem. PREDICTION: near-scale-invariant scalar perturbation spectrum — VERIFIED by CMB observations.");
  E("bbn-cmb-inflation", "Scalar spectral index:",
    "Tilt of the primordial perturbation spectrum: $P(k) \\propto k^{n_s - 1}$. INFLATION predicts $n_s$ slightly less than 1 (red tilt). WORKED EXAMPLE: Planck measures $n_s = 0.965 \\pm 0.004$ — agrees with simplest inflation models, rules out exact scale invariance.");
  E("bbn-cmb-inflation", "$\\Omega_b h^2",
    "Baryon density parameter times $h^2$ (where $h = H_0/100$). From CMB acoustic peaks AND BBN abundances — two independent measurements agreeing on $\\Omega_b h^2 \\approx 0.022$. WORKED EXAMPLE: baryons make up only ~5% of universe; the rest is dark matter (~27%) and dark energy (~68%).");

  // ============================================================
  // GRAVITATIONAL WAVES
  // ============================================================
  E("gravitational-waves", "$h \\sim \\Delta L/L",
    "GW strain: fractional change in length caused by passing wave. WORKED EXAMPLE: LIGO measures $h \\sim 10^{-21}$ — must detect length changes of $10^{-18}$ m over 4 km arms (smaller than nuclear diameter). 'Loudest' detected events.");
  E("gravitational-waves", "Quadrupole:",
    "Power radiated by a system in gravitational waves comes from time variation of the QUADRUPOLE moment (no GW from monopole — energy conservation — or dipole — momentum conservation). WORKED EXAMPLE: binary system has time-varying quadrupole — orbit decays as energy carried away by GWs (verified in Hulse-Taylor binary pulsar — Nobel 1993).");
  E("gravitational-waves", "Speed: $c$",
    "GW travel at the speed of light. CONFIRMED experimentally by GW170817 (neutron-star merger): the GW arrived ~1.7 s before the gamma-ray burst, after a 130 million-year journey. Limits speed deviation to 1 part in $10^{15}$ — rules out many modified gravity theories.");
  E("gravitational-waves", "Two polarizations:",
    "GR predicts exactly 2 GW polarizations: 'plus' ($+$) and 'cross' ($\\times$), differing by 45°. STRETCH and SQUEEZE space transverse to propagation. Modified gravity theories may predict additional polarizations — LIGO/Virgo/KAGRA constraints rule out most.");
  E("gravitational-waves", "Chirp:",
    "Frequency rises ('chirps') as binary spirals together. ORIGIN: orbit shrinks → orbital frequency rises → GW frequency rises (twice orbital). CHIRP MASS $\\mathcal M = (m_1 m_2)^{3/5}/(m_1 + m_2)^{1/5}$ is the cleanest quantity extractable from the inspiral signal.");
  E("gravitational-waves", "Strain:",
    "Typical strain at Earth from astrophysical sources is $\\sim 10^{-21}$. ENORMOUSLY small. Detector technology: laser interferometers with km-scale arms, isolated from seismic noise, vacuum, ultra-stable lasers. Quantum-limited at high frequencies — being addressed with squeezed light.");
  E("gravitational-waves", "GW150914:",
    "First direct GW detection: September 14, 2015. Source: merger of two black holes ~30 M☉ each, distance ~1.3 Gly. Confirmed Einstein's 1916 prediction. NOBEL 2017 to Weiss, Barish, Thorne. Opened gravitational-wave astronomy.");

  // ============================================================
  // HIGH-ENERGY ASTROPHYSICS
  // ============================================================
  E("high-energy-astrophysics", "AGN $L \\lesssim",
    "Active Galactic Nuclei: powered by accretion onto supermassive black holes. MAX LUMINOSITY $\\sim 10^{47}$ erg/s — 100 trillion times the Sun. WORKED EXAMPLE: quasar 3C 273 visible despite being 2.4 Gly away. Discovered by Schmidt (1963) from radio surveys; AGN catalogs now contain millions of objects.");
  E("high-energy-astrophysics", "GRB:",
    "Gamma-Ray Bursts: brightest known electromagnetic events. ISOTROPIC ENERGY $\\sim 10^{52}$ erg over seconds-to-minutes. ORIGIN: collapsars (long bursts, massive star collapse) or NS mergers (short bursts). Observed since 1967 (Vela satellites); cosmological distances confirmed in 1997.");
  E("high-energy-astrophysics", "CR spectrum:",
    "Cosmic ray flux falls as $E^{-2.7}$ up to the 'knee' at $\\sim 10^{15}$ eV; then $E^{-3}$ to the 'ankle' at $\\sim 10^{18}$ eV. ORIGIN of acceleration: supernova remnant shocks for low end; AGN jets, gamma-ray bursts for higher energies. Auger and TA arrays study the highest-energy events.");
  E("high-energy-astrophysics", "GZK cutoff:",
    "Greisen-Zatsepin-Kuz'min (1966): cosmic ray protons above $\\sim 5 \\times 10^{19}$ eV interact with CMB photons (pion photoproduction), losing energy. CONSEQUENCE: ultra-high-energy CRs must come from within ~50 Mpc. CONFIRMED by Auger observations.");
  E("high-energy-astrophysics", "Synchrotron:",
    "Power radiated by relativistic charged particles in magnetic fields. WORKED EXAMPLE: Crab Nebula synchrotron emission spans radio to gamma rays. CHARACTERISTIC frequency $\\nu_c \\sim \\gamma^2 \\nu_B$, beamed into cone of opening angle $1/\\gamma$. UNDERLIES radio astronomy.");
  E("high-energy-astrophysics", "Inverse Compton:",
    "Relativistic electron scatters a low-energy photon, BOOSTING it to higher energy by factor $\\sim \\gamma^2$. WORKED EXAMPLE: in AGN, CMB photons inverse-Compton-scattered to gamma-rays; in clusters, hot gas Compton-scatters CMB photons (Sunyaev-Zel'dovich effect, used to find clusters).");
  E("high-energy-astrophysics", "Eddington for SMBH:",
    "Maximum luminosity from accretion onto a supermassive BH. WORKED EXAMPLE: $L_E \\approx 1.3 \\times 10^{38}(M/M_\\odot)$ erg/s. AGN luminosities are usually a fraction of Eddington. SUB-EDDINGTON accretion is geometrically thin disk; SUPER-EDDINGTON drives winds.");

  // ============================================================
  // MATH METHODS FOR PHYSICS
  // ============================================================
  E("math-methods-physics", "Legendre, Bessel,",
    "Four families of orthogonal polynomials / functions, each arising as eigenfunctions of a Sturm-Liouville problem. APPEARANCES: Legendre (spherical harmonics), Bessel (cylindrical Bessel functions), Hermite (harmonic oscillator), Laguerre (radial hydrogen). WORKED EXAMPLE: $P_2(x) = (3x^2 - 1)/2$, $H_2(x) = 4x^2 - 2$ — both orthogonal w.r.t. their respective weights.");
  E("math-methods-physics", "Green's function:",
    "Solves $\\mathcal L G(x, x') = \\delta(x - x')$ — response to a point source. ORIGIN: George Green (1828). LINEAR PDEs: solution $u(x) = \\int G(x, x') f(x')\\,dx'$ where $f$ is the source. UNIFIES electrostatics, heat conduction, Schrödinger scattering, QFT propagators.");
  E("math-methods-physics", "Heat:",
    "Green's function for 1D heat equation: Gaussian spreading in time. ORIGIN: Fourier (1822). WORKED EXAMPLE: drop a temperature spike at $x = 0$; after time $t$, it has spread to width $\\sqrt{4\\alpha t}$. SAME functional form as the propagator for a free particle in imaginary time.");
  E("math-methods-physics", "Contour integral",
    "Cauchy residue theorem: integral over a closed contour equals $2\\pi i$ times the sum of residues inside. ORIGIN: Cauchy (1814). WORKED EXAMPLE: $\\int_{-\\infty}^\\infty 1/(1+x^2)\\,dx = \\pi$ by closing in the upper half-plane and picking up residue at $i$. Solves hundreds of real-integral problems.");
  E("math-methods-physics", "Saddle point:",
    "Approximate $\\int e^{Nf(x)}dx$ for large $N$ by Gaussian integration around the saddle (maximum). ORIGIN: Laplace's method, generalized by Debye. WORKED EXAMPLE: derivation of Stirling's approximation $n! \\sim \\sqrt{2\\pi n}(n/e)^n$. Underlies semiclassical methods, WKB, instantons.");
  E("math-methods-physics", "Sturm-Liouville:",
    "General eigenvalue problem $(p y')' + (q + \\lambda w)y = 0$ on an interval. ORIGIN: Sturm and Liouville (1830s). PROPERTIES: real discrete eigenvalues, orthogonal eigenfunctions w.r.t. weight $w$, complete on $L^2_w$. FRAMEWORK behind quantum mechanics bound-state problems and Fourier expansions.");
  E("math-methods-physics", "WKB:",
    "Wentzel-Kramers-Brillouin (1926): semiclassical approximation when wavelength varies slowly. ORIGIN: actually Liouville and Green pre-empted by a century. WORKED EXAMPLE: tunneling probability through a barrier $\\propto e^{-2\\int\\sqrt{2m(V-E)}/\\hbar\\,dx}$ — explains alpha-decay (Gamow, 1928).");

  // ============================================================
  // GROUP THEORY IN PHYSICS
  // ============================================================
  E("group-theory-physics", "$SU(2)$ generators:",
    "Three generators $J_i = \\sigma_i/2$ (Pauli matrices divided by 2). COMMUTATORS: $[J_i, J_j] = i\\epsilon_{ijk}J_k$ — same Lie algebra as $SO(3)$. WORKED EXAMPLE: rotation operator $U(\\theta, \\hat n) = e^{-i\\theta \\hat n \\cdot \\vec J}$ — used to rotate quantum spin states.");
  E("group-theory-physics", "$SU(3)$:",
    "Eight generators given by the Gell-Mann matrices $\\lambda_a/2$. ORIGIN: Murray Gell-Mann (1961-64). UNDERLIES QCD: color SU(3) of strong interactions. The 8 gluons transform in the adjoint representation. EIGHT-FOLD WAY (1961): SU(3) flavor classified hadrons before quarks were established.");
  E("group-theory-physics", "Standard Model:",
    "Gauge group $SU(3)_C \\times SU(2)_L \\times U(1)_Y$. THREE forces unified: strong ($SU(3)$), weak ($SU(2)$), hypercharge ($U(1)$). Higgs mechanism breaks $SU(2) \\times U(1) \\to U(1)_{EM}$. RESULT: photon massless, W/Z massive, fermion masses from Yukawa couplings.");
  E("group-theory-physics", "Lorentz:",
    "$SO(3,1)$ symmetry of spacetime: 3 rotations + 3 boosts = 6 generators. Its UNIVERSAL COVER is $SL(2, \\mathbb C)$ — gives rise to spinor representations of half-integer spin. CONSEQUENCE: existence of fermions in nature.");
  E("group-theory-physics", "Crystallographic point groups:",
    "32 distinct point groups describe local symmetry of crystals. ORIGIN: Hessel (1830), Bravais. RESTRICTED to rotations by $1, 2, 3, 4, 6$ (crystallographic theorem) — explains why 5-fold lattices don't exist (quasicrystals are quasi-periodic, breaking this rule).");
  E("group-theory-physics", "Space groups:",
    "230 space groups in 3D combine point-group operations with translations (including non-primitive ones — screw axes, glide planes). ORIGIN: Schoenflies, Fedorov (1890). EVERY crystal structure on Earth belongs to one of these 230. International Tables of Crystallography catalogs them all.");
  E("group-theory-physics", "Representations:",
    "Irreducible representations of $SU(2)$ labeled by spin $j = 0, 1/2, 1, 3/2, \\ldots$, with dimension $2j+1$. ORIGIN: Cartan's classification of semisimple Lie algebras. PHYSICS: spin-$j$ representation of $SU(2)$ is exactly the angular-momentum-$j$ multiplet in QM.");

  // ============================================================
  // COMPUTATIONAL PHYSICS
  // ============================================================
  E("computational-physics", "MC integration:",
    "Monte Carlo: sample $N$ points uniformly, estimate $\\int f = (V/N)\\sum f(x_i)$. Error $\\propto 1/\\sqrt N$ — INDEPENDENT of dimension. WORKED EXAMPLE: for 10D integrals, MC beats grid methods despite $1/\\sqrt N$ scaling. Beautiful: trades smoothness for dimensionality.");
  E("computational-physics", "Metropolis:",
    "Metropolis-Hastings algorithm: propose moves, accept based on Boltzmann ratio. ORIGIN: Metropolis, Rosenbluth, Teller (1953). EFFICIENT sampling from $e^{-\\beta E}$ at arbitrary $T$. UNDERLIES essentially all Monte Carlo simulations in condensed matter, lattice QCD, statistical inference.");
  E("computational-physics", "Verlet:",
    "Symplectic integrator: preserves phase-space volume exactly. WORKED EXAMPLE: solar system simulations stable over millions of years — energy oscillates rather than drifts (unlike Euler). LEAPFROG variant equivalent and slightly more accurate.");
  E("computational-physics", "RK4:",
    "Fourth-order Runge-Kutta: four function evaluations per step, error $O(h^4)$. ORIGIN: Runge (1895), Kutta (1901). WORKHORSE for non-stiff ODEs. Adaptive variants (RK45) automatically choose step size to maintain error tolerance. Default in MATLAB, Mathematica, SciPy.");
  E("computational-physics", "FFT:",
    "Fast Fourier Transform: $O(N \\log N)$ vs naive $O(N^2)$. ORIGIN: Cooley and Tukey (1965), with precedent from Gauss. ENABLES practical signal processing, spectral PDE methods, convolution. Among the most important algorithms ever devised.");
  E("computational-physics", "Detailed balance",
    "For MCMC to sample correctly from target distribution $\\pi$, the chain must satisfy $\\pi_i P_{ij} = \\pi_j P_{ji}$. SUFFICIENT for $\\pi$ to be stationary. Metropolis acceptance criterion enforces this automatically — by construction it's correct.");
  E("computational-physics", "Multigrid:",
    "Multigrid solvers for elliptic PDEs achieve $O(N)$ scaling — optimal. ORIGIN: Brandt (1977). TECHNIQUE: relax on fine grid (kills high-freq error), restrict to coarse grid, solve, prolongate back. Recursive nesting. Used in computational fluid dynamics, general relativity simulations.");

  // ============================================================
  // SOFT MATTER / BIOPHYSICS
  // ============================================================
  E("soft-matter-biophysics", "Polymer end-to-end:",
    "Ideal random walk model: $\\langle R^2 \\rangle = N b^2$ where $N$ is number of segments, $b$ is segment length. ROOT-mean-square distance $R \\sim \\sqrt N b$. CONTRAST with contour length $Nb$: polymer is hugely coiled, $R \\ll$ extended length.");
  E("soft-matter-biophysics", "Flory exponent:",
    "Self-avoiding walk: $R \\sim N^\\nu$ with $\\nu \\approx 3/5$ in 3D good solvent. ORIGIN: Paul Flory (1949) — Nobel 1974. Better than Gaussian $1/2$: chain avoids itself, swells. EXACT in 2D: $\\nu = 3/4$.");
  E("soft-matter-biophysics", "Persistence length",
    "Length over which the chain forgets its direction. Stiffer chains have larger $\\ell_p$. WORKED EXAMPLES: flexible polymers $\\sim$ few monomers; DNA $\\approx 50$ nm; actin filaments $\\sim 10$ μm; microtubules $\\sim 1$ mm. SETS scale separating short-range stiffness from long-range floppiness.");
  E("soft-matter-biophysics", "DNA $\\ell_p$",
    "DNA persistence length $\\approx 50$ nm ~ 150 base pairs. CONSEQUENCE: a human chromosome (10 cm contour) wraps into a 1 μm bundle. SETS the energy scale for DNA bending in nucleosomes ($\\sim$ 80 base pairs), gene packaging.");
  E("soft-matter-biophysics", "Membrane:",
    "Helfrich (1973) energy: lipid bilayer membranes have bending stiffness $\\kappa \\sim 10-20\\, k_BT$. SHAPES: minima of bending energy give red-blood-cell discocyte, vesicle shapes, membrane budding in endocytosis. EXPLAINS membrane fluctuations seen in flicker spectroscopy.");
  E("soft-matter-biophysics", "Motor force:",
    "Molecular motors (kinesin, myosin, dynein) exert forces of $\\sim$ pN over steps of $\\sim$ nm. WORKED EXAMPLE: kinesin walks 8 nm per ATP hydrolysis, exerting up to ~6 pN. POWER per motor $\\sim 10^{-17}$ W — tiny but biology runs on billions of them.");
  E("soft-matter-biophysics", "ATP hydrolysis:",
    "Currency of cellular energy: ATP → ADP + Pi releases ≈ 20 $k_BT$ ≈ 0.5 eV ≈ 30 kJ/mol. ENOUGH to power ~5 pN over 1 nm with reasonable efficiency. CELL uses ~$10^{20}$ ATP/second — a human body recycles its body weight in ATP daily.");

  // ============================================================
  // BODE PLOTS (one last)
  // ============================================================
  E("bode-plots", "Zero at $\\omega_z",
    "Mirror image of a pole: each zero contributes $+20$ dB/dec slope and a $+90°$ phase asymptote. Multiple zeros add (each contributing its $+20$). USE: place zeros in the loop to add phase margin (lead compensation). WORKED EXAMPLE: zero at $\\omega_z = 5$ rad/s starts adding slope from there onward; phase contribution rises through $+45°$ at the corner, asymptotes to $+90°$ a decade above.");

  // === Cleanup pass for entries whose prefix did not match exactly above ===
  E("computability", "Church-Turing thesis",
    "Every 'effectively calculable' function is computable by a Turing machine. ORIGIN: independently formulated by Church (lambda calculus, 1936) and Turing (Turing machines, 1936). PROVED equivalent: lambda calculus, recursive functions, Turing machines, register machines, modern computers — all compute exactly the same class. NOT a theorem but a thesis (definition of 'effective'); confirmed by 90 years of failed attempts to exceed it.");
  E("computability", "Rice's theorem",
    "Any non-trivial property of the LANGUAGE recognized by a program (not its source code) is undecidable. ORIGIN: Henry Rice (1953). DERIVATION: reduce halting to your property. WORKED EXAMPLE: 'does this program ever output 7?' is undecidable. 'does it accept the empty string?' is undecidable. Rice generalizes halting: virtually any interesting semantic question is uncomputable.");
  E("dynamical-systems", "Poincaré section",
    "Take a transverse hyperplane in phase space; record where the trajectory pierces. Continuous flow reduces to a discrete map of lower dimension. WORKED EXAMPLE: Lorenz attractor visualized via cross-sections; planetary orbits via the surface of section technique pioneered by Poincaré (1890s).");
  E("symmetries-noether", "Global $U(1)",
    "Phase symmetry $\\psi \\to e^{i\\theta}\\psi$ → conserved current. In quantum mechanics: probability conservation. In QED: electric charge conservation. WORKED EXAMPLE: $\\rho = |\\psi|^2$ and $\\vec j = (\\hbar/m)\\text{Im}(\\psi^* \\nabla\\psi)$ satisfy continuity $\\partial_t\\rho + \\nabla\\cdot\\vec j = 0$.");
  E("classical-field-theory", "$S = \\int d^4",
    "Action as four-dimensional spacetime integral of the Lagrangian density. DIFFERS from particle action $\\int dt L$ by including the spatial integral. INVARIANCE under coordinate changes requires $\\mathcal L$ to transform appropriately — drives much of differential geometry in field theory.");
  E("quantum-optics", "Squeezed:",
    "Coherent state whose noise in one quadrature is below the shot-noise limit, at the cost of more noise in the other. ORIGIN: theoretical 1976 (Stoler, Yuen); experimental 1985 (Slusher et al.). WORKED EXAMPLE: LIGO injects squeezed light to reduce shot noise at high frequencies — gravitational-wave sensitivity gain factor ~2 (Nobel 2022 for two of the originators).");
  E("quantum-optics", "Jaynes-Cummings:",
    "Two-level atom interacting with a single cavity-mode field. SIMPLEST nontrivial quantum optics Hamiltonian. ORIGIN: Jaynes and Cummings (1963). EXHIBITS Rabi oscillations between $|g, n+1\\rangle$ and $|e, n\\rangle$, vacuum Rabi splitting, photon-blockade. FOUNDATION of cavity QED experiments (Haroche, Nobel 2012).");
  E("galactic-dynamics", "Density wave theory",
    "Lin and Shu (1964): spiral arms are NOT material structures but density waves moving through the disk. STARS and gas pass in and out; the pattern persists. EXPLAINS why arms aren't wound up by differential rotation. RECENT: transient spirals from gravitational instabilities also play a role.");
  E("computational-physics", "MC integration error:",
    "Monte Carlo error scales as $1/\\sqrt N$ regardless of dimension. WORKED EXAMPLE: doubling integral accuracy requires 4× more samples — slow. BUT: grid methods scale as $N^{-2/d}$ in $d$ dimensions, so MC wins past $d = 4$. Quasi-Monte Carlo (low-discrepancy sequences) reaches $\\log^d(N)/N$ for smooth integrands.");
  E("soft-matter-biophysics", "DNA $\\ell_p \\approx",
    "DNA persistence length $\\approx 50$ nm ~ 150 base pairs. CONSEQUENCE: a human chromosome (10 cm contour) wraps into a 1 μm bundle. SETS the energy scale for DNA bending in nucleosomes ($\\sim$ 80 base pairs), gene packaging. Also relevant for plasmid supercoiling and chromatin condensation.");
})();
