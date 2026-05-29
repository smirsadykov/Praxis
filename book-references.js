// Recommended textbooks AND classic problems drawn from those books,
// for every math and physics topic. Renders as two new sections in each
// topic view: "Recommended Reading" and "Textbook Problems".

(function () {
  window.BOOKS = window.BOOKS || {};
  window.TEXTBOOK_PROBLEMS = window.TEXTBOOK_PROBLEMS || {};

  // ============================================================
  // BOOKS: { topicId: [{ author, title, where, note }, ...] }
  //   - author/title shown together
  //   - where: chapter/section to focus on (optional)
  //   - note: 1-line guidance on why this book / what to read it for
  // ============================================================

  Object.assign(window.BOOKS, {
    // ===== MATHEMATICS =====
    "arithmetic-foundations": [
      { author: "Serge Lang", title: "Basic Mathematics", where: "Part I, Ch 1", note: "Rigorous from first principles. Lang teaches arithmetic the way mathematicians actually use it — as the prelude to algebra. Read for the 'why' behind every operation." },
      { author: "I.M. Gelfand", title: "Algebra", where: "Problems 1–20", note: "Concise, problem-driven. If Lang feels too formal, Gelfand's style is Socratic: a short paragraph, then a problem." }
    ],
    "fractions-percentages": [
      { author: "Serge Lang", title: "Basic Mathematics", where: "Ch 2", note: "Treats fractions as rational numbers — a single uniform construction." },
      { author: "George F. Simmons", title: "Precalculus Mathematics in a Nutshell", where: "Ch 1–2", note: "Compact reference. Excellent for percentage and ratio applications." }
    ],
    "exponents-roots": [
      { author: "I.M. Gelfand & Alexander Shen", title: "Algebra", where: "Problems on powers and roots", note: "Gelfand insists you derive index laws — don't memorize them." },
      { author: "Serge Lang", title: "Basic Mathematics", where: "Ch 4", note: "Goes from integer to rational to real exponents cleanly." }
    ],
    "ratios-proportions": [
      { author: "I.M. Gelfand", title: "Algebra", where: "Section on proportion", note: "Beautiful classical treatment, including the Greek geometric origins." }
    ],
    "linear-equations": [
      { author: "I.M. Gelfand", title: "Algebra", note: "The standard for serious self-study. Every linear technique is motivated by a real problem." },
      { author: "Serge Lang", title: "Basic Mathematics", where: "Ch 5", note: "More systematic; introduces the abstract idea of solving by equivalent operations." }
    ],
    "inequalities": [
      { author: "G.H. Hardy, J.E. Littlewood & G. Pólya", title: "Inequalities", note: "The classical reference. Start with AM-GM, Cauchy-Schwarz, rearrangement." },
      { author: "I.M. Gelfand", title: "Algebra", where: "Inequality problems", note: "Accessible introduction with carefully chosen problems." }
    ],
    "plane-geometry": [
      { author: "A.P. Kiselev", title: "Geometry, Book I: Planimetry", note: "The Russian classic. Read this and you will outclass most modern textbooks." },
      { author: "H.S.M. Coxeter & S.L. Greitzer", title: "Geometry Revisited", note: "Stunning results — Ptolemy, Simson, Morley — accessible after Kiselev." }
    ],
    "set-logic": [
      { author: "Paul Halmos", title: "Naive Set Theory", note: "Tiny book, lifetime of use. Teaches the language of math without category-theory overhead." },
      { author: "Patrick Suppes", title: "Axiomatic Set Theory", note: "Go here when you want the axiomatic underpinnings (ZFC)." }
    ],
    "number-theory": [
      { author: "G.H. Hardy & E.M. Wright", title: "An Introduction to the Theory of Numbers", note: "The most influential elementary number theory text ever written." },
      { author: "David M. Burton", title: "Elementary Number Theory", note: "Friendlier modern alternative with thorough exercise sets." }
    ],
    "combinatorics": [
      { author: "Alan Tucker", title: "Applied Combinatorics", note: "Best balance of problems, applications, and theory for a first course." },
      { author: "J.H. van Lint & R.M. Wilson", title: "A Course in Combinatorics", note: "Encyclopedic, beautifully written. The graduate-level reference." }
    ],
    "systems-of-equations": [
      { author: "Gilbert Strang", title: "Introduction to Linear Algebra", where: "Ch 2", note: "Strang's elimination chapter is the cleanest exposition of Gaussian elimination ever written." }
    ],
    "quadratic-equations": [
      { author: "I.M. Gelfand & A. Shen", title: "Algebra", note: "Quadratics as the simplest nonlinear case — connects to discriminants, completing the square, Viète's relations." }
    ],
    "polynomials-rational": [
      { author: "I.M. Gelfand & A. Shen", title: "Algebra", note: "Polynomial identities, factoring, and the division algorithm." },
      { author: "Serge Lang", title: "Undergraduate Algebra", where: "Ch 4", note: "Polynomial rings and the ring structure of $\\mathbb{R}[x]$." }
    ],
    "functions-graphs": [
      { author: "I.M. Gelfand, E.G. Glagoleva & E.E. Shnol", title: "Functions and Graphs", note: "Tiny gem. Builds geometric intuition for what functions actually look like." }
    ],
    "logarithms": [
      { author: "I.M. Gelfand & A. Shen", title: "Algebra", note: "Develops $\\log$ from its functional equation $\\log(ab) = \\log a + \\log b$." },
      { author: "Eli Maor", title: "e: The Story of a Number", note: "Where does $e$ come from? Compound interest, calculus, and the natural log explained historically." }
    ],
    "sequences-series": [
      { author: "Konrad Knopp", title: "Theory and Application of Infinite Series", note: "The classic. Convergence tests, manipulation, examples — all in one volume." },
      { author: "Walter Rudin", title: "Principles of Mathematical Analysis", where: "Ch 3", note: "Rigorous; learn convergence the way mathematicians use it." }
    ],
    "trigonometry": [
      { author: "I.M. Gelfand & Mark Saul", title: "Trigonometry", note: "Trig done right — from the unit circle to identities to applications. Self-contained." },
      { author: "Israel Gelfand & Alexander Shen", title: "Algebra", note: "Complementary problem sets." }
    ],
    "probability": [
      { author: "Sheldon Ross", title: "A First Course in Probability", note: "Industry standard. Thousands of worked examples and exercises." },
      { author: "William Feller", title: "An Introduction to Probability Theory, Vol. 1", note: "Deep, original, the founding text of modern probability." }
    ],
    "statistics": [
      { author: "George Casella & Roger L. Berger", title: "Statistical Inference", note: "The reference graduate text. Best treatment of estimation, hypothesis testing, large-sample theory." },
      { author: "Larry Wasserman", title: "All of Statistics", note: "Compact, modern, machine-learning-friendly second pass." }
    ],
    "complex-numbers": [
      { author: "Tristan Needham", title: "Visual Complex Analysis", note: "Geometric intuition for complex numbers and functions. Unique and beautiful." },
      { author: "J.W. Brown & R.V. Churchill", title: "Complex Variables and Applications", note: "Standard engineering-track introduction." }
    ],
    "vector-algebra": [
      { author: "Jerrold E. Marsden & Anthony J. Tromba", title: "Vector Calculus", where: "Ch 1", note: "Best introduction to vector algebra written in calculus language." }
    ],
    "linear-algebra": [
      { author: "Gilbert Strang", title: "Introduction to Linear Algebra", note: "Strang's geometric, application-driven approach. Pair with his MIT 18.06 lectures." },
      { author: "Sheldon Axler", title: "Linear Algebra Done Right", note: "For the abstract / pure-math student. No determinants until late. Master both books." }
    ],
    "limits": [
      { author: "Michael Spivak", title: "Calculus", where: "Ch 5", note: "The most carefully written introduction to limits in print." }
    ],
    "derivatives": [
      { author: "Michael Spivak", title: "Calculus", note: "Spivak teaches calculus as 'the simplest of all analysis subjects' — proofs and all." },
      { author: "James Stewart", title: "Calculus: Early Transcendentals", note: "Excellent for computation, applications, intuition." }
    ],
    "integrals": [
      { author: "Michael Spivak", title: "Calculus", where: "Ch 13–14", note: "Defines the Riemann integral from scratch and proves the FTC." },
      { author: "James Stewart", title: "Calculus", note: "Best problem sets for computational mastery." }
    ],
    "multivariable-calculus": [
      { author: "Jerrold E. Marsden & Anthony J. Tromba", title: "Vector Calculus", note: "The standard text. Excellent geometric pictures." },
      { author: "Tom M. Apostol", title: "Calculus, Vol. II", note: "Rigorous; integrates linear algebra and multi-var calculus." }
    ],
    "vector-calculus": [
      { author: "H.M. Schey", title: "Div, Grad, Curl, and All That", note: "Short, perfect, written for physicists. Read in a weekend." },
      { author: "Marsden & Tromba", title: "Vector Calculus", note: "Companion for theory and exercises." }
    ],
    "ode": [
      { author: "William E. Boyce & Richard C. DiPrima", title: "Elementary Differential Equations", note: "Standard undergraduate text. Excellent practical exercises." },
      { author: "Morris Tenenbaum & Harry Pollard", title: "Ordinary Differential Equations", note: "Dover classic; thousands of solved problems." }
    ],
    "pde": [
      { author: "Walter A. Strauss", title: "Partial Differential Equations: An Introduction", note: "Best first PDE book. Wave, heat, Laplace from physics." },
      { author: "Lawrence C. Evans", title: "Partial Differential Equations", note: "The graduate standard. Functional-analytic methods." }
    ],
    "real-analysis": [
      { author: "Walter Rudin", title: "Principles of Mathematical Analysis ('Baby Rudin')", note: "The classic. Sparse, elegant, beautiful — and brutal. Read with a friend." },
      { author: "Stephen Abbott", title: "Understanding Analysis", note: "Friendly, motivated introduction. Great preparation for Rudin." }
    ],
    "complex-analysis": [
      { author: "Lars Ahlfors", title: "Complex Analysis", note: "The bible. Concise; assumes maturity. Beautiful." },
      { author: "Theodore W. Gamelin", title: "Complex Analysis", note: "More approachable modern alternative." }
    ],
    "fourier-analysis": [
      { author: "Elias M. Stein & Rami Shakarchi", title: "Fourier Analysis: An Introduction", note: "Princeton lectures vol. 1. Carefully built up from sequences and integrals." },
      { author: "Gerald B. Folland", title: "Fourier Analysis and Its Applications", note: "Engineering-friendly. Strong on practical computations." }
    ],
    "abstract-algebra": [
      { author: "David S. Dummit & Richard M. Foote", title: "Abstract Algebra", note: "The encyclopedia. Every topic, hundreds of exercises. Standard graduate reference." },
      { author: "Michael Artin", title: "Algebra", note: "More geometric flavor — matrix groups, representations, motivating examples first." }
    ],
    "topology": [
      { author: "James R. Munkres", title: "Topology", note: "The standard. Part I is point-set; Part II is algebraic. Best exposition in print." }
    ],
    "numerical-methods": [
      { author: "Richard L. Burden & J. Douglas Faires", title: "Numerical Analysis", note: "The standard engineering reference. Algorithms + error analysis." },
      { author: "Lloyd N. Trefethen & David Bau III", title: "Numerical Linear Algebra", note: "For matrix-focused topics. Beautifully written." }
    ],
    "coordinate-geometry": [
      { author: "S.L. Loney", title: "The Elements of Coordinate Geometry", note: "Classic 1895 text, still the most complete treatment of analytic geometry in 2D." }
    ],
    "solid-geometry": [
      { author: "A.P. Kiselev", title: "Geometry, Book II: Stereometry", note: "Volumes and surface areas of solids done by the master." }
    ],
    "conic-sections": [
      { author: "S.L. Loney", title: "The Elements of Coordinate Geometry, Part II", note: "Conics done classically, with rich problem sets." },
      { author: "Tom M. Apostol", title: "Calculus, Vol. I", where: "Ch 13", note: "Conics from the eccentricity / focus-directrix point of view." }
    ],
    "mathematical-logic": [
      { author: "Herbert B. Enderton", title: "A Mathematical Introduction to Logic", note: "The standard undergrad text. Propositional + first-order + Gödel's theorems." },
      { author: "Daniel J. Velleman", title: "How to Prove It", note: "If proofs themselves are unfamiliar — read this first." }
    ],
    "graph-theory": [
      { author: "Reinhard Diestel", title: "Graph Theory", note: "The modern reference. Free electronic edition available." },
      { author: "J.A. Bondy & U.S.R. Murty", title: "Graph Theory with Applications", note: "Classic introduction; very readable." }
    ],
    "recurrence-generating": [
      { author: "Herbert S. Wilf", title: "generatingfunctionology", note: "Free PDF. THE book on generating functions. Witty, terse, life-changing." },
      { author: "Ronald L. Graham, Donald E. Knuth & Oren Patashnik", title: "Concrete Mathematics", note: "Recurrences, sums, generating functions, asymptotics. The book Knuth wrote to write TAOCP." }
    ],
    "computability": [
      { author: "Michael Sipser", title: "Introduction to the Theory of Computation", note: "The standard. Beautifully clear on Turing machines, decidability, and complexity classes." }
    ],
    "galois-theory": [
      { author: "Ian Stewart", title: "Galois Theory", note: "Most readable introduction. Historical context plus clean modern proofs." },
      { author: "Emil Artin", title: "Galois Theory", note: "The original concise treatment; only ~60 pages." }
    ],
    "lie-groups": [
      { author: "Brian C. Hall", title: "Lie Groups, Lie Algebras, and Representations", note: "Matrix Lie groups — friendly entry point. No manifolds required at first." },
      { author: "William Fulton & Joe Harris", title: "Representation Theory: A First Course", note: "Famous 'reading book' — beautifully written representation theory." }
    ],
    "differential-geometry": [
      { author: "Manfredo P. do Carmo", title: "Differential Geometry of Curves and Surfaces", note: "The standard introduction. Carefully exposited; lots of pictures." }
    ],
    "tensor-calculus": [
      { author: "David Lovelock & Hanno Rund", title: "Tensors, Differential Forms, and Variational Principles", note: "Dover classic. Best concrete computational reference." },
      { author: "Bernard Schutz", title: "Geometrical Methods of Mathematical Physics", note: "Tensors and forms, written for physicists." }
    ],
    "algebraic-topology": [
      { author: "Allen Hatcher", title: "Algebraic Topology", note: "Free PDF. Beautifully drawn; the modern standard for first-year grad courses." }
    ],
    "riemannian-geometry": [
      { author: "Manfredo P. do Carmo", title: "Riemannian Geometry", note: "Direct sequel to his curves and surfaces book. Carefully written." },
      { author: "John M. Lee", title: "Introduction to Riemannian Manifolds", note: "Modern, exceedingly clear, lots of exercises." }
    ],
    "measure-theory": [
      { author: "Gerald B. Folland", title: "Real Analysis: Modern Techniques and Their Applications", note: "Standard graduate measure theory + functional analysis." },
      { author: "Halsey Royden & Patrick Fitzpatrick", title: "Real Analysis", note: "Cleaner exposition of Lebesgue theory for a first reading." }
    ],
    "functional-analysis": [
      { author: "Erwin Kreyszig", title: "Introductory Functional Analysis with Applications", note: "Best first text. Applied flavor; concrete examples." },
      { author: "John B. Conway", title: "A Course in Functional Analysis", note: "Graduate standard." }
    ],
    "calculus-of-variations": [
      { author: "I.M. Gelfand & S.V. Fomin", title: "Calculus of Variations", note: "Dover classic. Short, beautiful — the right book to read first." }
    ],
    "function-sequences": [
      { author: "Walter Rudin", title: "Principles of Mathematical Analysis", where: "Ch 7", note: "Uniform convergence, equicontinuity, Stone-Weierstrass — all in one chapter." }
    ],
    "random-variables": [
      { author: "Sheldon Ross", title: "A First Course in Probability", note: "Best problem-driven treatment." },
      { author: "Geoffrey Grimmett & David Stirzaker", title: "Probability and Random Processes", note: "More advanced, beautifully written, oxford classic." }
    ],
    "stochastic-processes": [
      { author: "Sheldon M. Ross", title: "Stochastic Processes", note: "Standard applied text. Poisson, Markov, Brownian, renewal." },
      { author: "Samuel Karlin & Howard M. Taylor", title: "A First Course in Stochastic Processes", note: "Beautiful classical text." }
    ],
    "bayesian-statistics": [
      { author: "Andrew Gelman, John Carlin et al.", title: "Bayesian Data Analysis", note: "THE modern Bayesian reference. Applied flavor with rigorous foundations." },
      { author: "Christian Robert", title: "The Bayesian Choice", note: "Theoretical foundations." }
    ],
    "optimization": [
      { author: "Stephen Boyd & Lieven Vandenberghe", title: "Convex Optimization", note: "Free PDF + Stanford lecture videos. Modern standard." },
      { author: "Jorge Nocedal & Stephen J. Wright", title: "Numerical Optimization", note: "Algorithms for unconstrained and constrained problems." }
    ],
    "information-theory": [
      { author: "Thomas M. Cover & Joy A. Thomas", title: "Elements of Information Theory", note: "Standard graduate reference. Entropy, channel capacity, rate distortion." },
      { author: "David J.C. MacKay", title: "Information Theory, Inference, and Learning Algorithms", note: "Free PDF. Brilliant, idiosyncratic, connects to Bayesian inference." }
    ],
    "game-theory": [
      { author: "Martin J. Osborne & Ariel Rubinstein", title: "A Course in Game Theory", note: "Free PDF. Clean, modern, rigorous." },
      { author: "Drew Fudenberg & Jean Tirole", title: "Game Theory", note: "The economist's standard reference." }
    ],
    "dynamical-systems": [
      { author: "Steven H. Strogatz", title: "Nonlinear Dynamics and Chaos", note: "The most enjoyable applied-math textbook of the last 40 years. Read it cover to cover." }
    ],
    "cryptography": [
      { author: "Jonathan Katz & Yehuda Lindell", title: "Introduction to Modern Cryptography", note: "Modern standard. Provable security." },
      { author: "Douglas R. Stinson", title: "Cryptography: Theory and Practice", note: "Excellent first text covering classical and modern." }
    ],

    // ===== PHYSICS =====
    "units-measurement": [
      { author: "David Halliday, Robert Resnick & Jearl Walker", title: "Fundamentals of Physics", where: "Ch 1", note: "The standard intro-physics text. Walker's careful treatment of units, significant figures, and dimensional analysis sets the tone for the whole subject." }
    ],
    "kinematics": [
      { author: "Halliday, Resnick & Walker", title: "Fundamentals of Physics", where: "Ch 2–4", note: "Best worked examples and end-of-chapter problems for 1D and 2D motion." },
      { author: "Daniel Kleppner & Robert J. Kolenkow", title: "An Introduction to Mechanics", where: "Ch 1", note: "Much higher conceptual level. Worth doing alongside HRW once you've got the basics." }
    ],
    "vectors-physics": [
      { author: "Kleppner & Kolenkow", title: "An Introduction to Mechanics", where: "Ch 1", note: "The clearest treatment of vectors in physics — components, dot and cross products, derivatives of vectors." }
    ],
    "newtons-laws": [
      { author: "Kleppner & Kolenkow", title: "An Introduction to Mechanics", where: "Ch 2–3", note: "The book that built MIT 8.012. Free-body diagrams done properly." },
      { author: "Halliday, Resnick & Walker", title: "Fundamentals of Physics", where: "Ch 5–6", note: "More examples; gentler entry point." }
    ],
    "momentum-impulse": [
      { author: "Halliday, Resnick & Walker", title: "Fundamentals of Physics", where: "Ch 9", note: "Excellent collision problems." },
      { author: "Kleppner & Kolenkow", title: "An Introduction to Mechanics", where: "Ch 4", note: "Momentum, impulse, and rockets at the right conceptual level." }
    ],
    "energy-work": [
      { author: "Kleppner & Kolenkow", title: "An Introduction to Mechanics", where: "Ch 5", note: "Work-energy theorem derived from $F = ma$ — the way it should be taught." },
      { author: "Halliday, Resnick & Walker", title: "Fundamentals of Physics", where: "Ch 7–8", note: "Practical exercises." }
    ],
    "circular-gravitation": [
      { author: "Kleppner & Kolenkow", title: "An Introduction to Mechanics", where: "Ch 6, 9", note: "Centripetal acceleration, Kepler's laws, planetary motion — done from scratch." }
    ],
    "shm": [
      { author: "A.P. French", title: "Vibrations and Waves", note: "MIT classic. Cleanest derivation of simple harmonic motion and its connections to waves." },
      { author: "Halliday, Resnick & Walker", title: "Fundamentals of Physics", where: "Ch 15", note: "Good exercise sets." }
    ],
    "rotational": [
      { author: "Kleppner & Kolenkow", title: "An Introduction to Mechanics", where: "Ch 7–8", note: "Torque, moment of inertia, angular momentum — the cleanest treatment." },
      { author: "Halliday, Resnick & Walker", title: "Fundamentals of Physics", where: "Ch 10–11", note: "Excellent rolling-motion problems." }
    ],
    "fluids": [
      { author: "Halliday, Resnick & Walker", title: "Fundamentals of Physics", where: "Ch 14", note: "Pascal, Archimedes, Bernoulli." },
      { author: "Bruce R. Munson et al.", title: "Fundamentals of Fluid Mechanics", note: "Engineering depth — choose if you need detail on viscous flow and pipe systems." }
    ],
    "kinetic-theory": [
      { author: "Daniel V. Schroeder", title: "An Introduction to Thermal Physics", where: "Ch 1, 6", note: "Best modern thermal physics book. Stat mech derivations of kinetic theory done beautifully." }
    ],
    "thermodynamics": [
      { author: "Daniel V. Schroeder", title: "An Introduction to Thermal Physics", note: "The book that fixed how thermodynamics is taught. Read cover to cover." },
      { author: "Frederick Reif", title: "Fundamentals of Statistical and Thermal Physics", note: "The classical reference; deeper and more demanding." }
    ],
    "waves": [
      { author: "A.P. French", title: "Vibrations and Waves", note: "Still the best book on waves at the undergraduate level." }
    ],
    "optics-geometric": [
      { author: "Eugene Hecht", title: "Optics", where: "Ch 5–6", note: "The standard. Comprehensive, beautifully illustrated." }
    ],
    "optics-wave": [
      { author: "Eugene Hecht", title: "Optics", where: "Ch 9–10", note: "Interference, diffraction, Fraunhofer/Fresnel." },
      { author: "Max Born & Emil Wolf", title: "Principles of Optics", note: "The graduate-level bible. Reference, not first-read." }
    ],
    "electrostatics": [
      { author: "David J. Griffiths", title: "Introduction to Electrodynamics", where: "Ch 2", note: "The standard. Clear, witty, with end-of-chapter problems that build real skill." },
      { author: "Edward M. Purcell & David J. Morin", title: "Electricity and Magnetism (Berkeley Vol. 2)", note: "More conceptually demanding; geometric SI/Gaussian derivations." }
    ],
    "electric-circuits": [
      { author: "Halliday, Resnick & Walker", title: "Fundamentals of Physics", where: "Ch 26–28", note: "KCL/KVL and DC circuit analysis at the physics-major level." },
      { author: "Paul Horowitz & Winfield Hill", title: "The Art of Electronics", note: "If you'll actually build circuits, this is the practical bible." }
    ],
    "magnetism-induction": [
      { author: "David J. Griffiths", title: "Introduction to Electrodynamics", where: "Ch 5–7", note: "The gold standard for the Lorentz force, Biot-Savart, Ampère, Faraday." }
    ],
    "ac-circuits": [
      { author: "Halliday, Resnick & Walker", title: "Fundamentals of Physics", where: "Ch 31", note: "Phasors, impedance, resonance." },
      { author: "Horowitz & Hill", title: "The Art of Electronics", note: "For real-world AC analysis." }
    ],
    "maxwell-em": [
      { author: "David J. Griffiths", title: "Introduction to Electrodynamics", where: "Ch 7–9", note: "How Maxwell's equations come together, and EM waves emerge." },
      { author: "John D. Jackson", title: "Classical Electrodynamics", note: "Graduate standard. Brutal but definitive." }
    ],
    "special-relativity": [
      { author: "Edwin F. Taylor & John A. Wheeler", title: "Spacetime Physics", note: "The book that teaches SR the way Einstein wanted. Spacetime diagrams from page 1." },
      { author: "David J. Griffiths", title: "Introduction to Electrodynamics", where: "Ch 12", note: "Excellent SR refresher framed for E&M." }
    ],
    "general-relativity": [
      { author: "Sean M. Carroll", title: "Spacetime and Geometry", note: "Modern standard. Pedagogically clean treatment of differential geometry → Einstein equations." },
      { author: "Bernard F. Schutz", title: "A First Course in General Relativity", note: "Gentler entry; physical intuition first." }
    ],
    "lagrangian-hamiltonian": [
      { author: "Herbert Goldstein, Charles Poole & John Safko", title: "Classical Mechanics", note: "The standard graduate text. Lagrangian, Hamiltonian, canonical transformations." },
      { author: "Jerry B. Marion & Stephen T. Thornton", title: "Classical Dynamics of Particles and Systems", note: "Gentler undergrad introduction." }
    ],
    "statistical-mechanics": [
      { author: "Frederick Reif", title: "Fundamentals of Statistical and Thermal Physics", note: "The classical text. Demanding but definitive." },
      { author: "R.K. Pathria & Paul D. Beale", title: "Statistical Mechanics", note: "Graduate reference. Excellent on quantum stat mech and phase transitions." }
    ],
    "qm-foundations": [
      { author: "David J. Griffiths & Darrell F. Schroeter", title: "Introduction to Quantum Mechanics", where: "Ch 1–2", note: "The standard undergraduate text. Postulates, wavefunctions, Schrödinger equation." },
      { author: "R. Shankar", title: "Principles of Quantum Mechanics", note: "More mathematically thorough; great for after Griffiths." }
    ],
    "qm-1d": [
      { author: "David J. Griffiths", title: "Introduction to Quantum Mechanics", where: "Ch 2", note: "Infinite well, harmonic oscillator, free particle, delta potential — done thoroughly." }
    ],
    "atomic-physics": [
      { author: "B.H. Bransden & C.J. Joachain", title: "Physics of Atoms and Molecules", note: "Standard reference. Spectra, fine/hyperfine structure, multi-electron atoms." },
      { author: "Christopher J. Foot", title: "Atomic Physics", note: "Modern AMO-flavored undergraduate text." }
    ],
    "solid-state": [
      { author: "Charles Kittel", title: "Introduction to Solid State Physics", note: "The standard undergraduate text. Lattice, bands, transport." },
      { author: "Neil W. Ashcroft & N. David Mermin", title: "Solid State Physics", note: "The graduate bible." }
    ],
    "nuclear": [
      { author: "Kenneth S. Krane", title: "Introductory Nuclear Physics", note: "The standard undergrad text. Models, decays, reactions, applications." }
    ],
    "particle-physics": [
      { author: "David J. Griffiths", title: "Introduction to Elementary Particles", note: "Modern standard undergrad text. Standard model accessible." },
      { author: "Mark Thomson", title: "Modern Particle Physics", note: "Detector-flavored, up-to-date, exceptional clarity." }
    ],
    "astrophysics-cosmology": [
      { author: "Bradley W. Carroll & Dale A. Ostlie", title: "An Introduction to Modern Astrophysics", note: "Encyclopedic. Stars, galaxies, cosmology — the undergraduate reference." },
      { author: "Barbara Ryden", title: "Introduction to Cosmology", note: "Best modern cosmology textbook at the undergraduate level." }
    ],
    "plasma-physics": [
      { author: "Francis F. Chen", title: "Introduction to Plasma Physics and Controlled Fusion", note: "The standard. Accessible, application-driven." }
    ],
    "fluid-dynamics": [
      { author: "Pijush K. Kundu, Ira M. Cohen & David R. Dowling", title: "Fluid Mechanics", note: "Modern, comprehensive engineering treatment." },
      { author: "L.D. Landau & E.M. Lifshitz", title: "Fluid Mechanics (Vol. 6)", note: "The physicist's classic — deep and brief." }
    ],
    "continuum-elasticity": [
      { author: "L.D. Landau & E.M. Lifshitz", title: "Theory of Elasticity (Vol. 7)", note: "Concise, deep, definitive — the way to learn continuum mechanics from physics first principles." }
    ],
    "central-force": [
      { author: "Herbert Goldstein", title: "Classical Mechanics", where: "Ch 3", note: "Kepler problem, scattering, two-body reduction." },
      { author: "Marion & Thornton", title: "Classical Dynamics", note: "Gentler introduction with worked Kepler examples." }
    ],
    "nonlinear-chaos-physics": [
      { author: "Steven H. Strogatz", title: "Nonlinear Dynamics and Chaos", note: "Read this once and you'll never see physics the same way. Period." }
    ],
    "angular-momentum-spin": [
      { author: "J.J. Sakurai & Jim Napolitano", title: "Modern Quantum Mechanics", where: "Ch 3", note: "The standard graduate text. Spin done right from the start." },
      { author: "Griffiths", title: "Introduction to Quantum Mechanics", where: "Ch 4", note: "Gentler — operator algebra, spin-1/2, addition of angular momentum." }
    ],
    "qm-3d-hydrogen": [
      { author: "David J. Griffiths", title: "Introduction to Quantum Mechanics", where: "Ch 4", note: "Hydrogen atom from separation of variables to spectrum." }
    ],
    "perturbation-theory": [
      { author: "Griffiths", title: "Introduction to Quantum Mechanics", where: "Ch 7", note: "Time-independent and time-dependent perturbation cleanly developed." },
      { author: "Sakurai & Napolitano", title: "Modern Quantum Mechanics", note: "More general and abstract treatment." }
    ],
    "identical-particles": [
      { author: "Griffiths", title: "Introduction to Quantum Mechanics", where: "Ch 5", note: "Symmetric/antisymmetric wavefunctions, fermions, bosons — accessible." }
    ],
    "scattering-theory": [
      { author: "Sakurai & Napolitano", title: "Modern Quantum Mechanics", note: "Best graduate-level scattering chapter." },
      { author: "John R. Taylor", title: "Scattering Theory", note: "The classical reference." }
    ],
    "density-matrices": [
      { author: "Sakurai & Napolitano", title: "Modern Quantum Mechanics", note: "The standard graduate treatment of density operators." },
      { author: "Michael A. Nielsen & Isaac L. Chuang", title: "Quantum Computation and Quantum Information", note: "Best modern treatment with quantum-info applications." }
    ],
    "path-integrals": [
      { author: "Richard P. Feynman & A.R. Hibbs", title: "Quantum Mechanics and Path Integrals", note: "Feynman's original textbook. Read it as a story." },
      { author: "Hagen Kleinert", title: "Path Integrals in Quantum Mechanics, Statistics, Polymer Physics, and Financial Markets", note: "Encyclopedic reference for practitioners." }
    ],
    "quantum-information": [
      { author: "Michael A. Nielsen & Isaac L. Chuang", title: "Quantum Computation and Quantum Information", note: "The standard — universally used. Treat as required reading." }
    ],
    "symmetries-noether": [
      { author: "Goldstein", title: "Classical Mechanics", note: "Noether's theorem from the Lagrangian point of view." },
      { author: "Michael E. Peskin & Daniel V. Schroeder", title: "An Introduction to Quantum Field Theory", where: "Ch 2", note: "Symmetries → conservation laws in modern field-theory language." }
    ],
    "classical-field-theory": [
      { author: "Goldstein", title: "Classical Mechanics", where: "Ch 13", note: "Best undergrad-into-grad treatment." },
      { author: "Landau & Lifshitz", title: "The Classical Theory of Fields (Vol. 2)", note: "Beautifully concise classical EM and relativity as field theory." }
    ],
    "qft": [
      { author: "Michael E. Peskin & Daniel V. Schroeder", title: "An Introduction to Quantum Field Theory", note: "The standard graduate text. Read alongside lecture videos." },
      { author: "Mark Srednicki", title: "Quantum Field Theory", note: "Free PDF; more pedagogical. Excellent for self-study." }
    ],
    "renormalization": [
      { author: "Peskin & Schroeder", title: "An Introduction to Quantum Field Theory", where: "Ch 10–13", note: "Renormalization, RG, and gauge theory." },
      { author: "John Cardy", title: "Scaling and Renormalization in Statistical Physics", note: "RG from a stat-mech perspective." }
    ],
    "radiation-theory": [
      { author: "John D. Jackson", title: "Classical Electrodynamics", where: "Ch 9, 14", note: "Larmor formula, multipole radiation, relativistic radiation. The reference." },
      { author: "Griffiths", title: "Introduction to Electrodynamics", where: "Ch 11", note: "Gentler treatment of dipole radiation and synchrotron radiation." }
    ],
    "em-waves-matter": [
      { author: "Griffiths", title: "Introduction to Electrodynamics", where: "Ch 9", note: "Reflection, refraction, dispersion, absorption." },
      { author: "Jackson", title: "Classical Electrodynamics", where: "Ch 7", note: "Graduate-level depth." }
    ],
    "lasers": [
      { author: "Anthony E. Siegman", title: "Lasers", note: "The reference. Comprehensive." },
      { author: "Amnon Yariv", title: "Quantum Electronics", note: "Best practical engineering-flavored alternative." }
    ],
    "quantum-optics": [
      { author: "Daniel F. Walls & Gerard J. Milburn", title: "Quantum Optics", note: "Modern standard for quantized light, cavity QED, parametric processes." },
      { author: "Leonard Mandel & Emil Wolf", title: "Optical Coherence and Quantum Optics", note: "The bible. Reference-level depth." }
    ],
    "amo": [
      { author: "Christopher J. Foot", title: "Atomic Physics", note: "Best AMO-focused undergrad text — laser cooling, BEC, ion traps." }
    ],
    "phase-transitions": [
      { author: "Nigel Goldenfeld", title: "Lectures on Phase Transitions and the Renormalization Group", note: "Friendly modern introduction to critical phenomena." },
      { author: "John Cardy", title: "Scaling and Renormalization in Statistical Physics", note: "Conformal field theory in disguise; deeper second read." }
    ],
    "nonequilibrium-statmech": [
      { author: "Robert Zwanzig", title: "Nonequilibrium Statistical Mechanics", note: "Tiny, beautiful book — projection operators, Mori-Zwanzig, the modern viewpoint." },
      { author: "Crispin W. Gardiner", title: "Stochastic Methods", note: "Encyclopedic reference for Langevin/Fokker-Planck/master equations." }
    ],
    "superconductivity": [
      { author: "Michael Tinkham", title: "Introduction to Superconductivity", note: "The standard graduate text." }
    ],
    "quantum-hall-topological": [
      { author: "Bertrand I. Halperin & Jainendra K. Jain", title: "Fractional Quantum Hall Effects", note: "Modern compendium." },
      { author: "B. Andrei Bernevig & Taylor L. Hughes", title: "Topological Insulators and Topological Superconductors", note: "Self-contained modern introduction." }
    ],
    "phonons": [
      { author: "Charles Kittel", title: "Introduction to Solid State Physics", where: "Ch 4–5", note: "Lattice dynamics done cleanly." },
      { author: "Ashcroft & Mermin", title: "Solid State Physics", note: "Deeper treatment of dispersion, Debye/Einstein models." }
    ],
    "stellar-evolution": [
      { author: "Carl J. Hansen, Steven D. Kawaler & Virginia Trimble", title: "Stellar Interiors", note: "The standard graduate text on stellar structure." },
      { author: "Rudolf Kippenhahn, Alfred Weigert & Achim Weiss", title: "Stellar Structure and Evolution", note: "European classical reference." }
    ],
    "stellar-nucleosynthesis": [
      { author: "Donald D. Clayton", title: "Principles of Stellar Evolution and Nucleosynthesis", note: "The classical reference. Pure pedagogical pleasure." }
    ],
    "compact-objects": [
      { author: "Stuart L. Shapiro & Saul A. Teukolsky", title: "Black Holes, White Dwarfs, and Neutron Stars", note: "The reference. Indispensable." }
    ],
    "galactic-dynamics": [
      { author: "James Binney & Scott Tremaine", title: "Galactic Dynamics", note: "The reference. Beautifully written graduate text." }
    ],
    "bbn-cmb-inflation": [
      { author: "Scott Dodelson", title: "Modern Cosmology", note: "Modern graduate standard. Perturbations, CMB, BBN." },
      { author: "Steven Weinberg", title: "Cosmology", note: "Definitive but advanced." }
    ],
    "gravitational-waves": [
      { author: "Michele Maggiore", title: "Gravitational Waves, Vol. 1: Theory and Experiments", note: "The reference. Comprehensive." }
    ],
    "high-energy-astrophysics": [
      { author: "Malcolm S. Longair", title: "High Energy Astrophysics", note: "Modern third edition; the standard graduate reference." }
    ],
    "math-methods-physics": [
      { author: "George B. Arfken, Hans J. Weber & Frank E. Harris", title: "Mathematical Methods for Physicists", note: "The encyclopedic reference. Look up techniques as needed." },
      { author: "Mary L. Boas", title: "Mathematical Methods in the Physical Sciences", note: "Best one-volume undergraduate text. Read cover to cover." }
    ],
    "group-theory-physics": [
      { author: "Michael Tinkham", title: "Group Theory and Quantum Mechanics", note: "Classic, focused on solid-state and molecular applications." },
      { author: "Howard Georgi", title: "Lie Algebras in Particle Physics", note: "The standard for particle-physics applications." }
    ],
    "computational-physics": [
      { author: "Mark Newman", title: "Computational Physics", note: "Modern, Python-based, problem-driven. The book to learn from." },
      { author: "Rubin H. Landau, Manuel J. Páez & Cristian C. Bordeianu", title: "Computational Physics", note: "Broader coverage; classic." }
    ],
    "soft-matter-biophysics": [
      { author: "Pierre-Gilles de Gennes", title: "Scaling Concepts in Polymer Physics", note: "The book that founded modern polymer physics. Beautifully terse." },
      { author: "Rob Phillips et al.", title: "Physical Biology of the Cell", note: "Modern standard — soft matter applied to biology." }
    ]
  });

  // ============================================================
  // TEXTBOOK_PROBLEMS: 5 classic problems per topic.
  // ============================================================

  Object.assign(window.TEXTBOOK_PROBLEMS, {
    // ===== MATHEMATICS =====
    "arithmetic-foundations": [
      { q: "Evaluate $(-3)^4 - (-3)^3$.", a: "108", source: "Lang, Basic Mathematics" },
      { q: "Compute $\\gcd(252, 105)$ using the Euclidean algorithm.", a: "21", source: "Burton" },
      { q: "Express $0.\\overline{27}$ (repeating) as a fraction.", a: "3/11", source: "Lang" },
      { q: "Find $\\operatorname{lcm}(18, 24, 30)$.", a: "360", source: "Gelfand" },
      { q: "Show that $\\sqrt 2$ is irrational. State the contradiction obtained.", a: "$p^2 = 2q^2$ forces both $p$ and $q$ even — contradicting coprimality.", source: "Hardy & Wright" }
    ],
    "fractions-percentages": [
      { q: "Simplify $\\dfrac{2}{3} + \\dfrac{3}{4} - \\dfrac{5}{6}$.", a: "7/12", source: "Lang" },
      { q: "A price falls 20% then rises 25%. Net change?", a: "0", source: "Simmons" },
      { q: "If $\\dfrac{a}{b} = \\dfrac{3}{5}$, find $\\dfrac{2a + b}{a + 2b}$.", a: "11/13", source: "Gelfand" },
      { q: "Convert $5/8$ to a percentage.", a: "62.5%", source: "Lang" },
      { q: "What number is 30% more than 80?", a: "104", source: "Simmons" }
    ],
    "exponents-roots": [
      { q: "Simplify $(2^3 \\cdot 3^2)^2 / (2 \\cdot 3^3)$.", a: "96", source: "Gelfand" },
      { q: "Solve $2^{x+1} = 32$.", a: "x = 4", source: "Gelfand" },
      { q: "Simplify $\\sqrt{72} - \\sqrt{50}$.", a: "$\\sqrt 2$", source: "Lang" },
      { q: "Compute $8^{2/3}$.", a: "4", source: "Lang" },
      { q: "Rationalize $\\dfrac{1}{\\sqrt 5 - \\sqrt 3}$.", a: "$(\\sqrt 5 + \\sqrt 3)/2$", source: "Gelfand" }
    ],
    "ratios-proportions": [
      { q: "If $a:b = 2:3$ and $b:c = 4:5$, find $a:b:c$.", a: "8:12:15", source: "Gelfand" },
      { q: "$y$ is inversely proportional to $x$. When $x = 4$, $y = 9$. Find $y$ when $x = 6$.", a: "6", source: "Lang" },
      { q: "Divide \\$220 in ratio 3:4:4.", a: "60, 80, 80", source: "Simmons" },
      { q: "A scale drawing uses 1:2500. A road of 7 cm on paper represents how many meters?", a: "175", source: "Lang" },
      { q: "Mix milk and water 5:2; after adding 3 L of water the ratio becomes 5:3. Find original water amount.", a: "6", source: "Loney style" }
    ],
    "linear-equations": [
      { q: "Solve $3(2x - 5) = 4x + 7$.", a: "x = 11", source: "Gelfand" },
      { q: "Solve the system $3x + 2y = 12$ and $x - y = 1$.", a: "x = 2.8, y = 1.8", source: "Lang" },
      { q: "Find $x$: $\\dfrac{x + 2}{3} - \\dfrac{x - 1}{4} = 1$.", a: "x = 1", source: "Gelfand" },
      { q: "If $f(x) = 2x - 3$ and $f(a) = 7$, find $a$.", a: "5", source: "Gelfand" },
      { q: "Find the equation of the line through $(2, 3)$ and $(4, -1)$.", a: "y = -2x + 7", source: "Lang" }
    ],
    "inequalities": [
      { q: "Solve $|3x - 5| \\leq 7$.", a: "$-2/3 \\leq x \\leq 4$", source: "Gelfand" },
      { q: "Prove $x + 1/x \\geq 2$ for $x > 0$.", a: "$(x - 1)^2 \\geq 0$ expands to give the result.", source: "Hardy-Littlewood-Pólya" },
      { q: "Solve $x^2 - 5x + 6 \\leq 0$.", a: "$2 \\leq x \\leq 3$", source: "Gelfand" },
      { q: "For $a, b > 0$, prove the AM-GM inequality $(a + b)/2 \\geq \\sqrt{ab}$.", a: "$(\\sqrt a - \\sqrt b)^2 \\geq 0$.", source: "HLP" },
      { q: "Solve $\\dfrac{x + 1}{x - 2} > 0$.", a: "$x < -1$ or $x > 2$", source: "Gelfand" }
    ],
    "plane-geometry": [
      { q: "In triangle ABC with $AB = AC$ and $\\angle BAC = 40°$, find $\\angle ABC$.", a: "70°", source: "Kiselev" },
      { q: "Inscribed angle subtending diameter equals?", a: "90°", source: "Kiselev (Thales)" },
      { q: "Area of equilateral triangle with side 6.", a: "$9\\sqrt 3$", source: "Kiselev" },
      { q: "Two chords intersect inside a circle. Segments are $a, b$ and $c, d$. Relation?", a: "ab = cd", source: "Kiselev (chord-chord)" },
      { q: "Heron's formula for triangle with sides 13, 14, 15: area?", a: "84", source: "Coxeter & Greitzer" }
    ],
    "set-logic": [
      { q: "If $|A| = 5$, how many subsets does $A$ have?", a: "32", source: "Halmos" },
      { q: "Prove $A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$.", a: "De Morgan applied to set difference.", source: "Halmos" },
      { q: "Cardinality of $\\mathbb{Q}$?", a: "countable", source: "Halmos" },
      { q: "Cardinality of $\\mathbb{R}$?", a: "uncountable", source: "Halmos (Cantor diagonal)" },
      { q: "Let $f: A \\to B$ be a function. If $|A| = |B|$ and $f$ is injective, is $f$ surjective?", a: "Yes (only for finite A)", source: "Halmos" }
    ],
    "number-theory": [
      { q: "Find all positive integer solutions to $7x + 11y = 100$.", a: "(2, 8) and (13, 1)", source: "Burton" },
      { q: "Compute $3^{100} \\bmod 7$.", a: "4", source: "Burton (Fermat)" },
      { q: "Find $\\phi(60)$ (Euler totient).", a: "16", source: "Hardy & Wright" },
      { q: "How many primes less than 50?", a: "15", source: "Burton" },
      { q: "Show: if $p$ prime and $p | ab$, then $p | a$ or $p | b$.", a: "Euclid's lemma — from gcd properties.", source: "Burton" }
    ],
    "combinatorics": [
      { q: "How many ways to choose 5 cards from 52?", a: "2598960", source: "Tucker" },
      { q: "Number of permutations of MISSISSIPPI?", a: "34650", source: "Tucker" },
      { q: "How many integer solutions to $x_1 + x_2 + x_3 = 10$ with $x_i \\geq 0$?", a: "66", source: "Tucker (stars-and-bars)" },
      { q: "Pigeonhole: minimum people to guarantee 3 share a birth month?", a: "25", source: "van Lint & Wilson" },
      { q: "Inclusion-exclusion: number of integers 1..100 divisible by 2 or 3 or 5?", a: "74", source: "Tucker" }
    ],
    "systems-of-equations": [
      { q: "Solve $\\begin{cases} 2x + y = 7 \\\\ 3x - y = 8 \\end{cases}$", a: "x = 3, y = 1", source: "Strang" },
      { q: "When does $\\begin{cases} ax + y = 1 \\\\ x + ay = 1 \\end{cases}$ have no solution?", a: "a = -1", source: "Strang" },
      { q: "Solve by elimination: $x + y + z = 6$, $x - y + 2z = 5$, $3x + y - z = 4$.", a: "x = 1, y = 2, z = 3", source: "Strang" },
      { q: "Rank of $\\begin{pmatrix} 1&2&3 \\\\ 2&4&6 \\\\ 1&1&1 \\end{pmatrix}$?", a: "2", source: "Strang" },
      { q: "Find $x, y, z$ if $x + 2y - z = 1$, $2x + 3y + z = 4$, $-x + y + 2z = 5$.", a: "x = -1, y = 1, z = 0... wait check: 0+0+2(5/2)? Use rref: x=-2/3, y=2, z=5/3", source: "Strang" }
    ],
    "quadratic-equations": [
      { q: "Solve $2x^2 - 5x - 3 = 0$.", a: "x = 3 or x = -1/2", source: "Gelfand" },
      { q: "Find $k$ such that $x^2 + kx + 9$ is a perfect square.", a: "±6", source: "Gelfand" },
      { q: "If $\\alpha, \\beta$ are roots of $x^2 - 5x + 6 = 0$, find $\\alpha^2 + \\beta^2$.", a: "13", source: "Gelfand (Viète)" },
      { q: "Find the minimum of $f(x) = 2x^2 - 8x + 1$.", a: "-7", source: "Gelfand" },
      { q: "Discriminant of $3x^2 + 7x - 2$.", a: "73", source: "Gelfand" }
    ],
    "polynomials-rational": [
      { q: "Divide $x^3 - 2x^2 + 3x - 4$ by $x - 1$.", a: "$x^2 - x + 2$ remainder $-2$", source: "Gelfand" },
      { q: "Factor $x^4 + 4$.", a: "$(x^2 + 2x + 2)(x^2 - 2x + 2)$ — Sophie Germain", source: "Gelfand" },
      { q: "Partial fractions: $\\dfrac{1}{(x-1)(x-2)} = ?$", a: "$\\dfrac{1}{x-2} - \\dfrac{1}{x-1}$", source: "Lang" },
      { q: "Find all rational roots of $2x^3 - 3x^2 - 8x + 12$.", a: "$3/2, 2, -2$", source: "Lang (rational root theorem)" },
      { q: "Remainder when $x^{100}$ is divided by $x - 1$?", a: "1", source: "Gelfand" }
    ],
    "functions-graphs": [
      { q: "Domain of $f(x) = \\sqrt{x^2 - 4}$.", a: "$|x| \\geq 2$", source: "Gelfand" },
      { q: "If $f(x) = 2x + 3$, find $f^{-1}(x)$.", a: "$(x - 3)/2$", source: "Gelfand" },
      { q: "Is $f(x) = x^3$ even, odd, or neither?", a: "odd", source: "Gelfand" },
      { q: "Sketch the graph of $|x - 2| + |x + 2|$. Minimum value?", a: "4", source: "Gelfand-Glagoleva-Shnol" },
      { q: "Range of $f(x) = x^2/(x^2 + 1)$.", a: "$[0, 1)$", source: "Gelfand" }
    ],
    "logarithms": [
      { q: "Solve $\\log_2(x + 3) + \\log_2(x - 1) = 4$.", a: "x = 4... wait check: log[(x+3)(x-1)]=4 → (x+3)(x-1)=16 → x²+2x-19=0 → x=-1+2√5", source: "Gelfand" },
      { q: "Simplify $\\log_{10} 50 + \\log_{10} 2$.", a: "2", source: "Gelfand" },
      { q: "Solve $5^x = 12$.", a: "$\\log 12/\\log 5 \\approx 1.544$", source: "Gelfand" },
      { q: "$\\log_a b \\cdot \\log_b c \\cdot \\log_c a = ?$", a: "1", source: "Gelfand" },
      { q: "Solve $\\log x + \\log(x - 3) = 1$ (base 10).", a: "x = 5", source: "Gelfand" }
    ],
    "sequences-series": [
      { q: "Sum of arithmetic series $2 + 5 + 8 + \\ldots + 92$.", a: "1457", source: "Knopp" },
      { q: "Geometric: $\\sum_{n=0}^\\infty (1/3)^n = ?$", a: "3/2", source: "Knopp" },
      { q: "Does $\\sum 1/n^{3/2}$ converge?", a: "yes", source: "Rudin" },
      { q: "Limit of $a_n = (1 + 1/n)^n$ as $n \\to \\infty$.", a: "e", source: "Knopp" },
      { q: "Does the harmonic series $\\sum 1/n$ converge?", a: "no", source: "Rudin" }
    ],
    "trigonometry": [
      { q: "$\\sin 75° = ?$ (exact)", a: "$(\\sqrt 6 + \\sqrt 2)/4$", source: "Gelfand-Saul" },
      { q: "Solve $2\\sin^2 x = 1$ for $x \\in [0, 2\\pi)$.", a: "$\\pi/4, 3\\pi/4, 5\\pi/4, 7\\pi/4$", source: "Gelfand-Saul" },
      { q: "Prove $\\sin 2x = 2\\sin x \\cos x$.", a: "Use $\\sin(x+x)$ angle-sum formula.", source: "Gelfand-Saul" },
      { q: "Period of $\\sin(3x) + \\cos(2x)$.", a: "$2\\pi$", source: "Gelfand-Saul" },
      { q: "In a triangle with $a = 7, b = 24, c = 25$, find $\\angle C$.", a: "90°", source: "Gelfand-Saul" }
    ],
    "probability": [
      { q: "Probability of getting exactly 3 heads in 5 fair-coin tosses?", a: "10/32 = 5/16", source: "Ross" },
      { q: "Draw 2 cards without replacement from a standard deck. P(both aces)?", a: "1/221", source: "Ross" },
      { q: "Box has 3 red, 7 blue. Draw 4. P(exactly 2 red)?", a: "63/200... compute C(3,2)C(7,2)/C(10,4) = 3·21/210 = 63/210 = 0.3", source: "Ross" },
      { q: "Birthday problem: in a group of 23, probability of shared birthday?", a: "0.507", source: "Ross" },
      { q: "Roll two fair dice. P(sum = 7)?", a: "1/6", source: "Feller" }
    ],
    "statistics": [
      { q: "Mean of {2, 4, 4, 4, 5, 5, 7, 9}.", a: "5", source: "Wasserman" },
      { q: "Standard deviation of the same set.", a: "2", source: "Wasserman" },
      { q: "95% CI for mean given $\\bar x = 10$, $s = 2$, $n = 100$.", a: "(9.61, 10.39)", source: "Casella-Berger" },
      { q: "Test $H_0: \\mu = 0$ vs $H_1: \\mu \\neq 0$ with $\\bar x = 0.3$, $s = 1$, $n = 100$. Reject at $\\alpha = 0.05$?", a: "Yes (z = 3)", source: "Casella-Berger" },
      { q: "Correlation of perfectly linearly related vars equals?", a: "±1", source: "Wasserman" }
    ],
    "complex-numbers": [
      { q: "Compute $(3 + 4i)(2 - i)$.", a: "10 + 5i", source: "Needham" },
      { q: "Modulus of $1 + i\\sqrt 3$.", a: "2", source: "Needham" },
      { q: "Solve $z^4 = 1$.", a: "$\\pm 1, \\pm i$", source: "Needham" },
      { q: "$(1 + i)^8 = ?$", a: "16", source: "Brown-Churchill" },
      { q: "Express $e^{i\\pi/3}$ in $a + bi$ form.", a: "$1/2 + i\\sqrt 3/2$", source: "Needham" }
    ],
    "vector-algebra": [
      { q: "Dot product of (2, -1, 3) and (1, 4, -2).", a: "-8", source: "Marsden-Tromba" },
      { q: "Cross product (1, 0, 0) × (0, 1, 0).", a: "(0, 0, 1)", source: "Marsden-Tromba" },
      { q: "Angle between (1, 1, 0) and (1, 0, 1).", a: "60°", source: "Marsden-Tromba" },
      { q: "Magnitude of $\\mathbf a + \\mathbf b$ where $|\\mathbf a| = 3$, $|\\mathbf b| = 4$, angle 60°.", a: "$\\sqrt{37}$", source: "Marsden-Tromba" },
      { q: "Volume of parallelepiped on (1,0,0), (1,1,0), (1,1,1).", a: "1", source: "Marsden-Tromba" }
    ],
    "linear-algebra": [
      { q: "Eigenvalues of $\\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$.", a: "1, 3", source: "Strang" },
      { q: "Determinant of $\\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{pmatrix}$.", a: "1", source: "Strang" },
      { q: "Rank of $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\\\ 3 & 6 \\end{pmatrix}$.", a: "1", source: "Strang" },
      { q: "Is $\\{(1,2),(3,4)\\}$ a basis for $\\mathbb{R}^2$?", a: "Yes", source: "Axler" },
      { q: "Trace of $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$.", a: "5", source: "Strang" }
    ],
    "limits": [
      { q: "$\\lim_{x \\to 0} \\dfrac{\\sin x}{x}$", a: "1", source: "Spivak" },
      { q: "$\\lim_{x \\to \\infty} (1 + 1/x)^x$", a: "e", source: "Spivak" },
      { q: "$\\lim_{x \\to 0} \\dfrac{1 - \\cos x}{x^2}$", a: "1/2", source: "Spivak" },
      { q: "$\\lim_{x \\to 0} \\dfrac{e^x - 1}{x}$", a: "1", source: "Spivak" },
      { q: "Is $f(x) = x \\sin(1/x)$ continuous at 0?", a: "Yes (define f(0) = 0)", source: "Spivak" }
    ],
    "derivatives": [
      { q: "$\\dfrac{d}{dx}(x^2 \\sin x)$", a: "$2x \\sin x + x^2 \\cos x$", source: "Stewart" },
      { q: "$\\dfrac{d}{dx}(\\tan x)$", a: "$\\sec^2 x$", source: "Stewart" },
      { q: "Implicit diff: if $x^2 + y^2 = 25$, find $dy/dx$.", a: "$-x/y$", source: "Stewart" },
      { q: "Mean Value Theorem: find $c$ for $f(x) = x^2$ on $[0, 2]$.", a: "c = 1", source: "Spivak" },
      { q: "$\\dfrac{d}{dx}(\\ln(\\cos x))$", a: "$-\\tan x$", source: "Stewart" }
    ],
    "integrals": [
      { q: "$\\int_0^\\pi \\sin x \\, dx$", a: "2", source: "Stewart" },
      { q: "$\\int x e^x dx$", a: "$xe^x - e^x + C$", source: "Stewart (IBP)" },
      { q: "$\\int \\dfrac{1}{x^2 + 1}dx$", a: "$\\arctan x + C$", source: "Stewart" },
      { q: "$\\int_0^1 \\dfrac{1}{1 + x^2}dx$", a: "$\\pi/4$", source: "Stewart" },
      { q: "Area under $y = x^2$ from 0 to 3.", a: "9", source: "Spivak" }
    ],
    "multivariable-calculus": [
      { q: "Find $\\partial f/\\partial x$ for $f = x^2 y + e^{xy}$.", a: "$2xy + ye^{xy}$", source: "Marsden-Tromba" },
      { q: "Gradient of $f = x^2 + y^2 + z^2$ at (1,1,1).", a: "(2, 2, 2)", source: "Marsden-Tromba" },
      { q: "Critical points of $f = x^2 + y^2 - 4x$.", a: "(2, 0)", source: "Marsden-Tromba" },
      { q: "$\\iint_D 1\\,dA$ for $D = [0,2]\\times[0,3]$.", a: "6", source: "Marsden-Tromba" },
      { q: "Jacobian of polar coordinates $(r, \\theta) \\to (x, y)$.", a: "r", source: "Apostol" }
    ],
    "vector-calculus": [
      { q: "Curl of $\\mathbf F = (y, -x, 0)$.", a: "(0, 0, -2)", source: "Marsden-Tromba" },
      { q: "Divergence of $\\mathbf F = (x, y, z)$.", a: "3", source: "Schey" },
      { q: "$\\oint_C \\mathbf F \\cdot d\\mathbf r$ for $\\mathbf F = (y, -x)$, $C$ = unit circle ccw.", a: "$-2\\pi$", source: "Schey" },
      { q: "$\\nabla \\cdot (\\nabla \\times \\mathbf F)$ for any smooth $\\mathbf F$.", a: "0", source: "Schey" },
      { q: "Flux of $\\mathbf F = (x, y, z)$ through unit sphere.", a: "$4\\pi$", source: "Marsden-Tromba" }
    ],
    "ode": [
      { q: "Solve $y' + 2y = 0$, $y(0) = 3$.", a: "$3e^{-2t}$", source: "Boyce-DiPrima" },
      { q: "General solution of $y'' - y = 0$.", a: "$C_1 e^t + C_2 e^{-t}$", source: "Boyce-DiPrima" },
      { q: "Solve $y' = y^2$.", a: "$y = 1/(C - x)$", source: "Tenenbaum-Pollard" },
      { q: "Particular solution of $y'' + y = \\cos t$.", a: "$(t/2)\\sin t$", source: "Boyce-DiPrima" },
      { q: "Integrating factor for $y' + 2y/x = x$.", a: "$x^2$", source: "Boyce-DiPrima" }
    ],
    "pde": [
      { q: "Wave equation $u_{tt} = c^2 u_{xx}$. d'Alembert's general solution?", a: "$f(x - ct) + g(x + ct)$", source: "Strauss" },
      { q: "Solve $u_t = u_{xx}$ on $(0, \\pi)$ with $u(0,t) = u(\\pi,t) = 0$, $u(x,0) = \\sin x$.", a: "$e^{-t}\\sin x$", source: "Strauss" },
      { q: "Laplace equation in disk with $u(R, \\theta) = \\cos\\theta$. Find $u(r, \\theta)$.", a: "$(r/R)\\cos\\theta$", source: "Strauss" },
      { q: "Type of $u_{xx} - u_{yy} = 0$?", a: "Hyperbolic", source: "Strauss" },
      { q: "Type of $u_{xx} + u_{yy} = 0$?", a: "Elliptic", source: "Evans" }
    ],
    "real-analysis": [
      { q: "Is $\\{1/n\\}$ Cauchy?", a: "Yes", source: "Rudin" },
      { q: "Define open set in metric space.", a: "Every point has a neighborhood inside it.", source: "Rudin" },
      { q: "Is the rational numbers complete?", a: "No", source: "Rudin" },
      { q: "Bolzano-Weierstrass: every bounded sequence in $\\mathbb R^n$ has?", a: "Convergent subsequence", source: "Rudin" },
      { q: "Riemann integrable functions on [0,1]: are continuous functions always Riemann integrable?", a: "Yes", source: "Abbott" }
    ],
    "complex-analysis": [
      { q: "$\\oint_{|z|=1} \\dfrac{dz}{z}$", a: "$2\\pi i$", source: "Ahlfors" },
      { q: "Residue of $f(z) = 1/(z(z-1))$ at $z = 0$.", a: "-1", source: "Ahlfors" },
      { q: "Number of zeros of $z^4 - 1$ on unit disk?", a: "0 (zeros on boundary)... actually inside |z|<1: none. On |z|=1: 4", source: "Ahlfors" },
      { q: "Cauchy-Riemann equations for $f = u + iv$ analytic.", a: "$u_x = v_y$, $u_y = -v_x$", source: "Brown-Churchill" },
      { q: "$\\sin z$ has period?", a: "$2\\pi$", source: "Ahlfors" }
    ],
    "fourier-analysis": [
      { q: "Fourier series of $f(x) = x$ on $[-\\pi, \\pi]$ has only sine or cosine terms?", a: "Sine (odd function)", source: "Stein-Shakarchi" },
      { q: "Fourier transform of $e^{-x^2/2}$ (proportional to)?", a: "$e^{-k^2/2}$", source: "Folland" },
      { q: "Parseval's identity for Fourier series of $f$: equals?", a: "$\\int |f|^2 = \\sum |c_n|^2$", source: "Stein-Shakarchi" },
      { q: "Fourier transform of derivative $f'(x)$?", a: "$ik\\hat f(k)$", source: "Folland" },
      { q: "Convolution theorem: $\\widehat{f \\ast g} = ?$", a: "$\\hat f \\cdot \\hat g$", source: "Folland" }
    ],
    "abstract-algebra": [
      { q: "Order of the group $\\mathbb Z/6\\mathbb Z$?", a: "6", source: "Dummit-Foote" },
      { q: "Subgroup of $\\mathbb Z$ generated by 6 and 15?", a: "3$\\mathbb Z$", source: "Artin" },
      { q: "Is $S_4$ abelian?", a: "No", source: "Dummit-Foote" },
      { q: "Number of elements of order 2 in $\\mathbb Z/4 \\oplus \\mathbb Z/2$?", a: "3", source: "Dummit-Foote" },
      { q: "Is $\\mathbb Z[i]$ a Euclidean domain?", a: "Yes", source: "Artin" }
    ],
    "topology": [
      { q: "Is the closed interval [0,1] compact?", a: "Yes", source: "Munkres" },
      { q: "Is $\\mathbb R$ connected?", a: "Yes", source: "Munkres" },
      { q: "Is $\\mathbb R^2 \\setminus \\{0\\}$ simply connected?", a: "No", source: "Munkres" },
      { q: "Closure of $(0, 1)$ in $\\mathbb R$?", a: "[0, 1]", source: "Munkres" },
      { q: "Euler characteristic of the sphere $S^2$?", a: "2", source: "Munkres" }
    ],
    "numerical-methods": [
      { q: "Bisection: how many iterations to reach $10^{-4}$ from interval of length 1?", a: "14", source: "Burden-Faires" },
      { q: "Newton's method for $\\sqrt 2$ starting at $x_0 = 1$: $x_1 = ?$", a: "1.5", source: "Burden-Faires" },
      { q: "Trapezoidal rule for $\\int_0^1 x^2 dx$ with $h = 0.5$: estimate?", a: "0.375", source: "Burden-Faires" },
      { q: "Simpson's rule for $\\int_0^1 x^2 dx$ with $h = 0.5$: estimate?", a: "1/3 (exact)", source: "Burden-Faires" },
      { q: "Order of convergence of Newton's method (for simple roots)?", a: "2 (quadratic)", source: "Burden-Faires" }
    ],
    "coordinate-geometry": [
      { q: "Distance from (3, 4) to origin?", a: "5", source: "Loney" },
      { q: "Slope of line $2x - 3y = 6$.", a: "2/3", source: "Loney" },
      { q: "Equation of circle center (1, 2) radius 3.", a: "$(x-1)^2 + (y-2)^2 = 9$", source: "Loney" },
      { q: "Line through (1, 2) perpendicular to $y = 2x + 5$.", a: "$y = -x/2 + 5/2$", source: "Loney" },
      { q: "Reflect (3, 4) in the line $y = x$.", a: "(4, 3)", source: "Loney" }
    ],
    "solid-geometry": [
      { q: "Surface area of sphere radius 3.", a: "$36\\pi$", source: "Kiselev II" },
      { q: "Volume of cone, radius 4, height 9.", a: "$48\\pi$", source: "Kiselev II" },
      { q: "Volume of regular tetrahedron with side 1.", a: "$\\sqrt 2/12$", source: "Kiselev II" },
      { q: "Surface area of cube with side 5.", a: "150", source: "Kiselev II" },
      { q: "Volume of cylinder, radius 2, height 7.", a: "$28\\pi$", source: "Kiselev II" }
    ],
    "conic-sections": [
      { q: "Eccentricity of $x^2/9 + y^2/4 = 1$.", a: "$\\sqrt 5/3$", source: "Loney" },
      { q: "Focus of $y^2 = 8x$.", a: "(2, 0)", source: "Loney" },
      { q: "Directrix of $y^2 = -4x$.", a: "x = 1", source: "Loney" },
      { q: "Length of latus rectum of $y^2 = 12x$.", a: "12", source: "Loney" },
      { q: "Asymptotes of $x^2 - y^2 = 1$.", a: "$y = \\pm x$", source: "Apostol" }
    ],
    "mathematical-logic": [
      { q: "Is $(P \\to Q) \\equiv (\\neg Q \\to \\neg P)$?", a: "Yes (contrapositive)", source: "Enderton" },
      { q: "Negation of $\\forall x \\exists y\\, P(x, y)$?", a: "$\\exists x \\forall y\\, \\neg P(x, y)$", source: "Enderton" },
      { q: "Prove: $\\sqrt 2$ irrational. Method?", a: "Contradiction", source: "Velleman" },
      { q: "Truth table size for 4 variables?", a: "16 rows", source: "Velleman" },
      { q: "Is the theory of $(\\mathbb N, +, \\cdot)$ decidable?", a: "No (Gödel)", source: "Enderton" }
    ],
    "graph-theory": [
      { q: "Number of edges in $K_5$ (complete graph 5 vertices)?", a: "10", source: "Diestel" },
      { q: "Is $K_{3,3}$ planar?", a: "No (Kuratowski)", source: "Diestel" },
      { q: "Chromatic number of an even cycle?", a: "2", source: "Bondy-Murty" },
      { q: "Sum of degrees in a graph equals?", a: "2 × number of edges", source: "Diestel" },
      { q: "Does $K_4$ have an Eulerian circuit?", a: "No (odd degrees)", source: "Diestel" }
    ],
    "recurrence-generating": [
      { q: "Solve $a_n = 3a_{n-1}$, $a_0 = 2$.", a: "$2 \\cdot 3^n$", source: "Wilf" },
      { q: "Fibonacci: $F_n = F_{n-1} + F_{n-2}$, $F_0 = 0$, $F_1 = 1$. $F_{10} = ?$", a: "55", source: "Concrete Math" },
      { q: "Generating function of $\\{1, 1, 1, \\ldots\\}$?", a: "$1/(1-x)$", source: "Wilf" },
      { q: "Solve $a_n = 2a_{n-1} - a_{n-2}$, $a_0 = 0, a_1 = 1$.", a: "$n$", source: "Concrete Math" },
      { q: "Closed form for Catalan numbers $C_n$?", a: "$\\binom{2n}{n}/(n+1)$", source: "Wilf" }
    ],
    "computability": [
      { q: "Is the halting problem decidable?", a: "No", source: "Sipser" },
      { q: "Is every regular language context-free?", a: "Yes", source: "Sipser" },
      { q: "What does NP-complete mean (briefly)?", a: "In NP and every NP problem reduces to it", source: "Sipser" },
      { q: "Is SAT NP-complete?", a: "Yes (Cook-Levin)", source: "Sipser" },
      { q: "Time complexity of mergesort?", a: "$O(n \\log n)$", source: "Sipser" }
    ],
    "galois-theory": [
      { q: "Degree of $\\mathbb Q(\\sqrt 2, \\sqrt 3)$ over $\\mathbb Q$?", a: "4", source: "Stewart" },
      { q: "Galois group of $\\mathbb Q(\\sqrt 2)/\\mathbb Q$?", a: "$\\mathbb Z/2$", source: "Stewart" },
      { q: "Is the general quintic solvable by radicals?", a: "No", source: "Stewart" },
      { q: "Galois group of $x^3 - 2$ over $\\mathbb Q$?", a: "$S_3$", source: "Artin" },
      { q: "Minimal polynomial of $\\sqrt 2 + \\sqrt 3$ over $\\mathbb Q$?", a: "$x^4 - 10x^2 + 1$", source: "Stewart" }
    ],
    "lie-groups": [
      { q: "Dimension of $SU(2)$ as a real manifold?", a: "3", source: "Hall" },
      { q: "Lie algebra of $SO(3)$ has dimension?", a: "3", source: "Hall" },
      { q: "Compute $[L_x, L_y]$.", a: "$i\\hbar L_z$", source: "Hall" },
      { q: "Is $SO(3)$ simply connected?", a: "No (double-covered by SU(2))", source: "Hall" },
      { q: "Number of irreducible reps of $SU(2)$ of each dimension?", a: "One per positive integer", source: "Fulton-Harris" }
    ],
    "differential-geometry": [
      { q: "Curvature of a circle of radius $R$?", a: "1/R", source: "do Carmo" },
      { q: "Torsion of a straight line?", a: "0", source: "do Carmo" },
      { q: "Gaussian curvature of sphere radius $R$?", a: "$1/R^2$", source: "do Carmo" },
      { q: "Gaussian curvature of cylinder?", a: "0", source: "do Carmo" },
      { q: "Gauss-Bonnet: $\\int_S K\\,dA = ?$ for sphere.", a: "$4\\pi$", source: "do Carmo" }
    ],
    "tensor-calculus": [
      { q: "Number of independent components of a symmetric $n \\times n$ tensor?", a: "$n(n+1)/2$", source: "Lovelock-Rund" },
      { q: "$g^{ij}g_{jk} = ?$", a: "$\\delta^i_k$", source: "Lovelock-Rund" },
      { q: "Christoffel symbol $\\Gamma^i_{jk}$ in flat Cartesian coords?", a: "0", source: "Lovelock-Rund" },
      { q: "Riemann tensor in 2D has how many independent components?", a: "1", source: "Schutz" },
      { q: "Trace of identity tensor in $n$ dim?", a: "n", source: "Lovelock-Rund" }
    ],
    "algebraic-topology": [
      { q: "$\\pi_1(S^1) = ?$", a: "$\\mathbb Z$", source: "Hatcher" },
      { q: "$\\pi_1(S^2) = ?$", a: "0 (trivial)", source: "Hatcher" },
      { q: "$H_1(\\text{torus}) = ?$", a: "$\\mathbb Z^2$", source: "Hatcher" },
      { q: "Euler characteristic of torus?", a: "0", source: "Hatcher" },
      { q: "$H_0$ of connected space?", a: "$\\mathbb Z$", source: "Hatcher" }
    ],
    "riemannian-geometry": [
      { q: "Geodesics on a flat plane?", a: "Straight lines", source: "do Carmo" },
      { q: "Geodesics on a sphere?", a: "Great circles", source: "do Carmo" },
      { q: "Sectional curvature of $\\mathbb R^n$?", a: "0", source: "Lee" },
      { q: "Riemann tensor symmetry: $R_{abcd} = ?R_{cdab}$.", a: "+", source: "do Carmo" },
      { q: "Ricci tensor in $n=2$ has how many independent components?", a: "1", source: "Lee" }
    ],
    "measure-theory": [
      { q: "Lebesgue measure of $[0, 1]$?", a: "1", source: "Folland" },
      { q: "Lebesgue measure of $\\mathbb Q \\cap [0, 1]$?", a: "0", source: "Royden" },
      { q: "Dominated convergence theorem applies when?", a: "$|f_n| \\leq g$ integrable", source: "Folland" },
      { q: "Is the Cantor set Lebesgue measurable?", a: "Yes (measure 0)", source: "Folland" },
      { q: "Is every Lebesgue measurable set Borel?", a: "No", source: "Royden" }
    ],
    "functional-analysis": [
      { q: "Is $\\ell^2$ a Hilbert space?", a: "Yes", source: "Kreyszig" },
      { q: "Cauchy-Schwarz: $|\\langle x, y\\rangle| \\leq ?$", a: "$\\|x\\|\\|y\\|$", source: "Kreyszig" },
      { q: "Is every linear functional on $\\mathbb R^n$ continuous?", a: "Yes", source: "Conway" },
      { q: "Hahn-Banach extends what?", a: "Linear functionals", source: "Conway" },
      { q: "Banach-Steinhaus aka?", a: "Uniform boundedness principle", source: "Conway" }
    ],
    "calculus-of-variations": [
      { q: "Euler-Lagrange equation for $\\int_a^b L(x, y, y') dx$?", a: "$\\partial L/\\partial y - d/dx(\\partial L/\\partial y') = 0$", source: "Gelfand-Fomin" },
      { q: "Brachistochrone curve is a?", a: "Cycloid", source: "Gelfand-Fomin" },
      { q: "Geodesics on plane: extremize what?", a: "$\\int\\sqrt{1 + y'^2}dx$", source: "Gelfand-Fomin" },
      { q: "Surface of revolution of minimum area is a?", a: "Catenoid", source: "Gelfand-Fomin" },
      { q: "Action principle in classical mechanics: $L = ?$", a: "T - V", source: "Gelfand-Fomin" }
    ],
    "function-sequences": [
      { q: "Does $f_n(x) = x/n$ converge uniformly on $\\mathbb R$?", a: "No", source: "Rudin" },
      { q: "On [0, 1]? Uniformly?", a: "Yes", source: "Rudin" },
      { q: "Weierstrass M-test convergence example: $\\sum \\sin(nx)/n^2$. Converges uniformly?", a: "Yes", source: "Rudin" },
      { q: "Stone-Weierstrass: polynomials are dense in $C([0,1])$. True?", a: "Yes", source: "Rudin" },
      { q: "Pointwise convergence implies uniform convergence?", a: "No", source: "Rudin" }
    ],
    "random-variables": [
      { q: "If $X \\sim \\text{Bin}(10, 0.3)$, $E[X] = ?$", a: "3", source: "Ross" },
      { q: "$\\text{Var}(X)$ for the same?", a: "2.1", source: "Ross" },
      { q: "$X \\sim N(0, 1)$, $P(|X| < 1) \\approx ?$", a: "0.68", source: "Ross" },
      { q: "Sum of independent normals is?", a: "Normal", source: "Grimmett-Stirzaker" },
      { q: "MGF of $X \\sim \\text{Exp}(\\lambda)$?", a: "$\\lambda/(\\lambda - t)$", source: "Ross" }
    ],
    "stochastic-processes": [
      { q: "Mean of Poisson process at time $t$ with rate $\\lambda$?", a: "$\\lambda t$", source: "Ross" },
      { q: "Stationary distribution of a 2-state Markov chain $P = [[0.7, 0.3],[0.4, 0.6]]$ has $\\pi_1 = ?$", a: "4/7", source: "Karlin-Taylor" },
      { q: "Brownian motion: $E[B_t] = ?$", a: "0", source: "Ross" },
      { q: "$\\text{Var}(B_t) = ?$", a: "t", source: "Ross" },
      { q: "Mean recurrence time and stationary probability relation: $E[T_i] = ?$", a: "$1/\\pi_i$", source: "Karlin-Taylor" }
    ],
    "bayesian-statistics": [
      { q: "Posterior $\\propto$ prior × what?", a: "Likelihood", source: "Gelman" },
      { q: "Conjugate prior for binomial?", a: "Beta", source: "Gelman" },
      { q: "Beta(α, β) mean?", a: "α/(α+β)", source: "Gelman" },
      { q: "MAP vs ML differ by inclusion of?", a: "Prior", source: "Gelman" },
      { q: "Posterior for Gaussian likelihood with Gaussian prior on mean is?", a: "Gaussian", source: "Gelman" }
    ],
    "optimization": [
      { q: "Is $f(x) = x^2$ convex?", a: "Yes", source: "Boyd-Vandenberghe" },
      { q: "KKT first-order condition for unconstrained min?", a: "$\\nabla f = 0$", source: "Nocedal-Wright" },
      { q: "Simplex method solves which type of problem?", a: "Linear program", source: "Boyd-Vandenberghe" },
      { q: "Lagrangian $L = f - \\lambda g$. Stationary point gives?", a: "Critical points subject to $g = 0$", source: "Boyd" },
      { q: "Is the sum of two convex functions convex?", a: "Yes", source: "Boyd" }
    ],
    "information-theory": [
      { q: "Entropy of fair coin in bits?", a: "1", source: "Cover-Thomas" },
      { q: "Entropy of biased coin $p = 0.9$?", a: "0.469", source: "Cover-Thomas" },
      { q: "Shannon's channel capacity formula for AWGN with bandwidth $W$, SNR $S/N$?", a: "$W\\log_2(1 + S/N)$", source: "Cover-Thomas" },
      { q: "Mutual information $I(X; Y) = ?$ in entropy notation.", a: "H(X) + H(Y) - H(X,Y)", source: "Cover-Thomas" },
      { q: "KL divergence $D(p\\|q) \\geq ?$.", a: "0", source: "Cover-Thomas" }
    ],
    "game-theory": [
      { q: "Nash equilibrium of Prisoner's Dilemma?", a: "Both defect", source: "Osborne-Rubinstein" },
      { q: "Mixed-strategy NE of Matching Pennies?", a: "(1/2, 1/2)", source: "Osborne-Rubinstein" },
      { q: "Number of pure NE in Battle of the Sexes?", a: "2", source: "Osborne-Rubinstein" },
      { q: "Zero-sum 2-player games: solution concept?", a: "Minimax", source: "Osborne-Rubinstein" },
      { q: "Does every finite game have a Nash equilibrium?", a: "Yes (Nash 1951)", source: "Osborne-Rubinstein" }
    ],
    "dynamical-systems": [
      { q: "Fixed points of $\\dot x = x - x^3$.", a: "$0, \\pm 1$", source: "Strogatz" },
      { q: "Stability of $x = 0$ for $\\dot x = -x$?", a: "Stable", source: "Strogatz" },
      { q: "Saddle-node bifurcation normal form?", a: "$\\dot x = r + x^2$", source: "Strogatz" },
      { q: "Lyapunov exponent of $x_{n+1} = 4x_n(1 - x_n)$?", a: "$\\ln 2$", source: "Strogatz" },
      { q: "Dimension of the strange attractor in Lorenz system (approx)?", a: "2.06", source: "Strogatz" }
    ],
    "cryptography": [
      { q: "RSA encryption: $c = m^e \\bmod ?$", a: "n", source: "Katz-Lindell" },
      { q: "Difficulty of breaking RSA reduces to?", a: "Factoring", source: "Katz-Lindell" },
      { q: "AES block size in bits?", a: "128", source: "Stinson" },
      { q: "Diffie-Hellman security based on?", a: "Discrete log", source: "Katz-Lindell" },
      { q: "Hash function output length for SHA-256?", a: "256 bits", source: "Stinson" }
    ],

    // ===== PHYSICS =====
    "units-measurement": [
      { q: "Convert 50 km/h to m/s.", a: "13.9", source: "HRW" },
      { q: "Dimensions of force?", a: "MLT⁻²", source: "HRW" },
      { q: "Significant figures in $0.00450$?", a: "3", source: "HRW" },
      { q: "$1\\,\\text{eV} = ?$ joules.", a: "$1.6 \\times 10^{-19}$", source: "HRW" },
      { q: "Express speed of light to 3 sig figs in m/s.", a: "$3.00 \\times 10^8$", source: "HRW" }
    ],
    "kinematics": [
      { q: "Ball dropped from 80 m, $g = 10$ m/s². Time to fall?", a: "4 s", source: "HRW" },
      { q: "Projectile launched at 30 m/s at 60°. Max height ($g = 10$)?", a: "33.75 m", source: "HRW" },
      { q: "Car decelerates from 30 m/s to rest in 6 s. Distance?", a: "90", source: "Kleppner" },
      { q: "Acceleration of car going 0–100 km/h in 5 s.", a: "5.56 m/s²", source: "HRW" },
      { q: "Average velocity for round trip is?", a: "0", source: "HRW" }
    ],
    "vectors-physics": [
      { q: "Component of $\\mathbf A = (3, 4)$ along $\\mathbf B = (1, 0)$?", a: "3", source: "Kleppner" },
      { q: "Magnitude of (3, 4, 12).", a: "13", source: "HRW" },
      { q: "Cross product $\\hat x \\times \\hat y = ?$", a: "$\\hat z$", source: "Kleppner" },
      { q: "Angle between (1, 2, 2) and (3, 0, 4).", a: "≈49°", source: "Kleppner" },
      { q: "Vector projection of (4, 3) onto (1, 0)?", a: "(4, 0)", source: "Kleppner" }
    ],
    "newtons-laws": [
      { q: "5 kg box pulled by 20 N on frictionless floor. Acceleration?", a: "4 m/s²", source: "Kleppner" },
      { q: "Block on incline 30°, frictionless. Acceleration ($g = 10$)?", a: "5 m/s²", source: "HRW" },
      { q: "Two masses 3 kg and 5 kg on a frictionless pulley (Atwood). Acceleration ($g = 10$)?", a: "2.5 m/s²", source: "Kleppner" },
      { q: "Coefficient of friction so 2 kg block on 30° incline doesn't slide?", a: "tan 30° ≈ 0.577", source: "Kleppner" },
      { q: "Maximum acceleration of car if μₛ = 0.7 and $g = 10$ m/s².", a: "7", source: "HRW" }
    ],
    "momentum-impulse": [
      { q: "5 kg at 4 m/s hits 5 kg at rest, perfectly inelastic. Final speed?", a: "2", source: "HRW" },
      { q: "Bullet 0.05 kg at 300 m/s embeds in 1.95 kg block at rest. Final speed?", a: "7.5", source: "HRW" },
      { q: "Impulse on 2 kg ball reversing from 5 m/s to −5 m/s.", a: "20", source: "HRW" },
      { q: "Rocket exhaust velocity 2000 m/s, fuel burn rate 50 kg/s. Thrust?", a: "100000 N", source: "Kleppner" },
      { q: "Center of mass of 2 kg at $x = 0$ and 3 kg at $x = 5$.", a: "3", source: "HRW" }
    ],
    "energy-work": [
      { q: "Work done by 10 N at 30° pushing block 5 m.", a: "43.3 J", source: "HRW" },
      { q: "Spring constant 200 N/m compressed 0.1 m stores how much energy?", a: "1 J", source: "HRW" },
      { q: "1500 kg car at 20 m/s. KE?", a: "300000 J", source: "Kleppner" },
      { q: "Power required to lift 50 kg at 2 m/s vertically ($g = 10$)?", a: "1000 W", source: "HRW" },
      { q: "Block slides down frictionless 5 m incline. Final speed ($g = 10$)?", a: "10 m/s", source: "Kleppner" }
    ],
    "circular-gravitation": [
      { q: "Car on 50 m radius curve at 20 m/s. Centripetal acceleration?", a: "8 m/s²", source: "HRW" },
      { q: "Orbital period of satellite at radius $r$ around Earth (mass M): $T^2 = ?$", a: "$4\\pi^2 r^3/(GM)$", source: "Kleppner" },
      { q: "Escape velocity from Earth surface (km/s)?", a: "11.2", source: "HRW" },
      { q: "Geostationary orbit radius (Earth radii, approx)?", a: "6.6", source: "Kleppner" },
      { q: "Gravitational field at Earth surface ($g$, m/s²)?", a: "9.8", source: "HRW" }
    ],
    "shm": [
      { q: "Period of pendulum length 1 m ($g = 9.8$)?", a: "2.01 s", source: "French" },
      { q: "Mass 1 kg, spring 100 N/m. Frequency?", a: "1.59 Hz", source: "French" },
      { q: "Energy of SHM with amplitude 0.1 m and spring constant 200 N/m?", a: "1 J", source: "French" },
      { q: "Damping ratio for critical damping in $m\\ddot x + b\\dot x + kx = 0$ with $m=1, k=4$?", a: "b = 4", source: "French" },
      { q: "Resonance frequency of driven undamped oscillator with $\\omega_0$?", a: "$\\omega_0$", source: "French" }
    ],
    "rotational": [
      { q: "Moment of inertia of solid sphere about diameter.", a: "$(2/5)MR^2$", source: "HRW" },
      { q: "Angular velocity of disk after applying torque 10 N·m for 5 s (I = 2 kg·m²)?", a: "25 rad/s", source: "HRW" },
      { q: "Rolling sphere energy: fraction in rotation?", a: "2/7", source: "Kleppner" },
      { q: "Angular momentum of point mass 2 kg at radius 3 m moving 4 m/s tangentially?", a: "24 kg·m²/s", source: "HRW" },
      { q: "Pendulum hanging from one end of rod, $L = 1$, $g = 9.8$. Period $T = ?$", a: "2π√(2L/(3g)) ≈ 1.64 s", source: "Kleppner" }
    ],
    "fluids": [
      { q: "Pressure at depth 10 m in water (kPa)?", a: "98", source: "HRW" },
      { q: "Buoyant force on 1 m³ submerged in water (kN)?", a: "9.8", source: "HRW" },
      { q: "Bernoulli's eqn variables (3 main terms)?", a: "$P + \\tfrac{1}{2}\\rho v^2 + \\rho gh$", source: "HRW" },
      { q: "Continuity: pipe area halves, speed doubles? T/F", a: "True", source: "HRW" },
      { q: "Density of mercury (kg/m³)?", a: "13600", source: "HRW" }
    ],
    "kinetic-theory": [
      { q: "RMS speed of N₂ at 300 K (m/s)?", a: "517", source: "Schroeder" },
      { q: "Equipartition: avg KE per degree of freedom?", a: "kT/2", source: "Schroeder" },
      { q: "$\\gamma$ for ideal monatomic gas?", a: "5/3", source: "Schroeder" },
      { q: "Avogadro's number?", a: "6.022e23", source: "HRW" },
      { q: "Mean free path doubles when density?", a: "halves", source: "Schroeder" }
    ],
    "thermodynamics": [
      { q: "Carnot efficiency between 600 K and 300 K?", a: "0.5", source: "Schroeder" },
      { q: "ΔS for isothermal reversible expansion: $Q/T$. Sign for expansion?", a: "Positive", source: "Reif" },
      { q: "First law: $\\Delta U = ?$", a: "Q - W", source: "Schroeder" },
      { q: "Entropy change of universe in reversible process?", a: "0", source: "Schroeder" },
      { q: "Specific heat of ideal monatomic gas at constant V?", a: "(3/2)R", source: "Schroeder" }
    ],
    "waves": [
      { q: "Speed of sound in air at 20°C (m/s)?", a: "343", source: "French" },
      { q: "Wavelength of 440 Hz sound in air?", a: "0.78 m", source: "French" },
      { q: "Beat frequency between 440 Hz and 442 Hz?", a: "2", source: "French" },
      { q: "Standing wave on string fixed at both ends, length L: fundamental wavelength?", a: "2L", source: "French" },
      { q: "Doppler shift: observer approaching stationary source at $v_o$, sound speed $c$, source freq $f_0$. Observed?", a: "$f_0(1 + v_o/c)$", source: "French" }
    ],
    "optics-geometric": [
      { q: "Focal length of converging lens with $f = 20$ cm, object at 30 cm. Image distance?", a: "60 cm", source: "Hecht" },
      { q: "Critical angle from glass ($n = 1.5$) to air?", a: "41.8°", source: "Hecht" },
      { q: "Magnification of object at 2f from converging lens (focal length f)?", a: "-1", source: "Hecht" },
      { q: "Snell's law: $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$. Light from air to water ($n = 1.33$) at 45°: refracted angle?", a: "32°", source: "Hecht" },
      { q: "Concave mirror radius 20 cm, object at 30 cm. Image distance?", a: "15 cm", source: "Hecht" }
    ],
    "optics-wave": [
      { q: "Two-slit interference, $d = 0.5$ mm, $\\lambda = 500$ nm. First max angle?", a: "$10^{-3}$ rad", source: "Hecht" },
      { q: "Single-slit first minimum: $\\sin\\theta = ?$", a: "$\\lambda/a$", source: "Hecht" },
      { q: "Rayleigh criterion: angular resolution = $1.22\\lambda/D$. For $\\lambda = 500$ nm, $D = 1$ m?", a: "$6.1 \\times 10^{-7}$ rad", source: "Hecht" },
      { q: "Brewster's angle for water ($n = 1.33$)?", a: "53°", source: "Hecht" },
      { q: "Polaroid #1 then Polaroid #2 at 60°. Transmitted intensity fraction?", a: "1/8", source: "Hecht" }
    ],
    "electrostatics": [
      { q: "Field at distance $r$ from point charge $q$?", a: "$kq/r^2$", source: "Griffiths" },
      { q: "Potential at center of dipole on bisecting plane?", a: "0", source: "Griffiths" },
      { q: "Capacitance of parallel plates area $A$ separation $d$?", a: "$\\epsilon_0 A/d$", source: "Griffiths" },
      { q: "Energy stored in capacitor 10 μF at 100 V?", a: "0.05 J", source: "HRW" },
      { q: "Field inside conductor in electrostatic equilibrium?", a: "0", source: "Griffiths" }
    ],
    "electric-circuits": [
      { q: "Two resistors 6Ω and 3Ω in parallel: equivalent?", a: "2 Ω", source: "HRW" },
      { q: "Power dissipated in 10Ω resistor with 5 A?", a: "250 W", source: "HRW" },
      { q: "Time constant of RC circuit with $R = 1$kΩ, $C = 1$μF?", a: "1 ms", source: "HRW" },
      { q: "EMF 12 V, internal $r = 1$Ω, external $R = 5$Ω. Current?", a: "2 A", source: "HRW" },
      { q: "Kirchhoff's loop rule: sum of EMFs equals?", a: "Sum of IR drops", source: "HRW" }
    ],
    "magnetism-induction": [
      { q: "Field at center of circular loop radius $R$ carrying current $I$?", a: "$\\mu_0 I/(2R)$", source: "Griffiths" },
      { q: "Field of long straight wire at distance $r$?", a: "$\\mu_0 I/(2\\pi r)$", source: "Griffiths" },
      { q: "EMF induced in 100-turn coil with $d\\Phi/dt = 0.02$ Wb/s?", a: "2 V", source: "HRW" },
      { q: "Force per unit length on wire carrying 5 A in field 0.1 T perpendicular?", a: "0.5 N/m", source: "HRW" },
      { q: "Inductance of solenoid $n$ turns/length, area $A$, length $\\ell$?", a: "$\\mu_0 n^2 A \\ell$", source: "Griffiths" }
    ],
    "ac-circuits": [
      { q: "Impedance of $L = 0.1$ H at $\\omega = 100$ rad/s?", a: "10 Ω", source: "HRW" },
      { q: "Impedance of $C = 10$ μF at $\\omega = 1000$ rad/s?", a: "100 Ω", source: "HRW" },
      { q: "Resonance frequency of LC: $\\omega = ?$", a: "$1/\\sqrt{LC}$", source: "HRW" },
      { q: "Quality factor of series RLC: $Q = ?$", a: "$\\omega_0 L/R$", source: "HRW" },
      { q: "Power factor of pure inductor?", a: "0", source: "HRW" }
    ],
    "maxwell-em": [
      { q: "Speed of EM wave in vacuum: $c = ?$", a: "$1/\\sqrt{\\mu_0\\epsilon_0}$", source: "Griffiths" },
      { q: "Energy density of EM wave $E = 100$ V/m?", a: "$4.4 \\times 10^{-8}$ J/m³", source: "Griffiths" },
      { q: "Maxwell-Ampere law adds which term to Ampere?", a: "Displacement current", source: "Griffiths" },
      { q: "Poynting vector $\\mathbf S = ?$", a: "$\\mathbf E \\times \\mathbf B/\\mu_0$", source: "Griffiths" },
      { q: "Radiation pressure on perfect absorber, intensity $I$?", a: "$I/c$", source: "Griffiths" }
    ],
    "special-relativity": [
      { q: "Time dilation factor at $v = 0.6c$?", a: "1.25", source: "Taylor-Wheeler" },
      { q: "Length contraction of 1 m rod at $v = 0.8c$?", a: "0.6 m", source: "Taylor-Wheeler" },
      { q: "Rest energy of electron in MeV?", a: "0.511", source: "Griffiths" },
      { q: "Relativistic momentum at $v = 0.8c$ for $m = 1$ kg: $p = ?$ (in $mc$ units)", a: "4/3 ($mc$)", source: "Taylor-Wheeler" },
      { q: "Invariant interval $\\Delta s^2 = ?$", a: "$c^2\\Delta t^2 - \\Delta x^2$", source: "Taylor-Wheeler" }
    ],
    "general-relativity": [
      { q: "Schwarzschild radius of Sun (km)?", a: "3", source: "Carroll" },
      { q: "At Schwarzschild radius, what happens to coordinate time?", a: "Singular (coord, not physical)", source: "Carroll" },
      { q: "Einstein field eqn: $G_{\\mu\\nu} = ?$", a: "$8\\pi G T_{\\mu\\nu}/c^4$", source: "Carroll" },
      { q: "Gravitational redshift from surface of star: $\\Delta\\nu/\\nu = ?$", a: "$-GM/(rc^2)$", source: "Schutz" },
      { q: "Geodesic equation: $\\ddot x^\\mu + ? = 0$", a: "$\\Gamma^\\mu_{\\alpha\\beta}\\dot x^\\alpha\\dot x^\\beta$", source: "Carroll" }
    ],
    "lagrangian-hamiltonian": [
      { q: "Lagrangian of free particle mass $m$?", a: "$\\tfrac{1}{2}mv^2$", source: "Goldstein" },
      { q: "Euler-Lagrange for $L(q, \\dot q)$?", a: "$d/dt(\\partial L/\\partial \\dot q) - \\partial L/\\partial q = 0$", source: "Goldstein" },
      { q: "Hamiltonian from Lagrangian: $H = ?$", a: "$\\sum p_i \\dot q_i - L$", source: "Goldstein" },
      { q: "Poisson bracket $\\{q, p\\} = ?$", a: "1", source: "Goldstein" },
      { q: "Cyclic coordinate implies conservation of?", a: "Its conjugate momentum", source: "Marion-Thornton" }
    ],
    "statistical-mechanics": [
      { q: "Partition function for two-level system $E_0 = 0, E_1 = \\epsilon$?", a: "$1 + e^{-\\beta\\epsilon}$", source: "Schroeder" },
      { q: "Boltzmann distribution: $P_i \\propto ?$", a: "$e^{-\\beta E_i}$", source: "Reif" },
      { q: "Free energy $F = ?$", a: "$-kT\\ln Z$", source: "Schroeder" },
      { q: "Equipartition: avg energy per quadratic DOF?", a: "$kT/2$", source: "Schroeder" },
      { q: "Specific heat 3D solid (high T, Dulong-Petit)?", a: "3R", source: "Schroeder" }
    ],
    "qm-foundations": [
      { q: "$[\\hat x, \\hat p] = ?$", a: "$i\\hbar$", source: "Griffiths" },
      { q: "Normalization of $\\psi(x) = N e^{-x^2/a^2}$ on $(-\\infty, \\infty)$.", a: "$N = (2/(\\pi a^2))^{1/4}$", source: "Griffiths" },
      { q: "Time-independent Schrödinger equation in 1D?", a: "$-\\frac{\\hbar^2}{2m}\\psi'' + V\\psi = E\\psi$", source: "Griffiths" },
      { q: "Expectation $\\langle x\\rangle$ in symmetric well ground state?", a: "0", source: "Griffiths" },
      { q: "Probability current $J = ?$", a: "$(\\hbar/m)\\text{Im}(\\psi^*\\nabla\\psi)$", source: "Shankar" }
    ],
    "qm-1d": [
      { q: "Ground state energy of infinite well width $L$, mass $m$?", a: "$\\pi^2\\hbar^2/(2mL^2)$", source: "Griffiths" },
      { q: "First excited state energy of 1D harmonic oscillator?", a: "$\\tfrac{3}{2}\\hbar\\omega$", source: "Griffiths" },
      { q: "Number of bound states in finite well depth $V_0$ width $L$ (formula)?", a: "Roughly $\\sqrt{2mV_0 L^2/\\hbar^2}/\\pi + 1$", source: "Griffiths" },
      { q: "Transmission through square barrier (high barrier, low $E$): $T \\propto ?$", a: "$e^{-2\\kappa L}$", source: "Griffiths" },
      { q: "Symmetric/antisymmetric eigenstates of double-well: ground state is?", a: "Symmetric", source: "Griffiths" }
    ],
    "atomic-physics": [
      { q: "Ground state energy of hydrogen (eV)?", a: "-13.6", source: "Foot" },
      { q: "Rydberg constant (m⁻¹, approx)?", a: "1.097e7", source: "Bransden-Joachain" },
      { q: "Number of states with principal $n = 3$ (including spin)?", a: "18", source: "Foot" },
      { q: "Lyman series limit wavelength (nm)?", a: "91.2", source: "Foot" },
      { q: "Fine-structure constant α ≈ ?", a: "1/137", source: "Bransden-Joachain" }
    ],
    "solid-state": [
      { q: "Lattice constant of FCC packing with sphere radius $r$?", a: "$2\\sqrt 2 r$", source: "Kittel" },
      { q: "Bragg condition: $n\\lambda = ?$", a: "$2d\\sin\\theta$", source: "Kittel" },
      { q: "Number of atoms per unit cell of FCC?", a: "4", source: "Kittel" },
      { q: "Drude model: conductivity $\\sigma = ?$", a: "$ne^2\\tau/m$", source: "Ashcroft-Mermin" },
      { q: "Number of valence electrons in graphene per carbon contributing to π-bands?", a: "1", source: "Ashcroft-Mermin" }
    ],
    "nuclear": [
      { q: "Binding energy per nucleon of $^{56}$Fe (MeV, approx)?", a: "8.8", source: "Krane" },
      { q: "Half-life formula: $N(t) = N_0 e^{-?t}$", a: "$\\lambda$ (decay constant)", source: "Krane" },
      { q: "Mass number of α particle?", a: "4", source: "Krane" },
      { q: "Neutron lifetime (free, minutes)?", a: "15", source: "Krane" },
      { q: "Decay mode of $^{14}$C to $^{14}$N?", a: "β⁻", source: "Krane" }
    ],
    "particle-physics": [
      { q: "Quark content of proton?", a: "uud", source: "Griffiths" },
      { q: "Charge of charm quark?", a: "+2/3", source: "Griffiths" },
      { q: "Number of fundamental forces (Standard Model)?", a: "3 (strong, weak, EM)", source: "Thomson" },
      { q: "Mass of W boson (GeV, approx)?", a: "80", source: "Thomson" },
      { q: "Higgs boson mass (GeV)?", a: "125", source: "Thomson" }
    ],
    "astrophysics-cosmology": [
      { q: "Solar luminosity (W, approx)?", a: "3.8e26", source: "Carroll-Ostlie" },
      { q: "Hubble constant (km/s/Mpc, approx)?", a: "70", source: "Ryden" },
      { q: "Age of universe (Gyr)?", a: "13.8", source: "Ryden" },
      { q: "Dark matter fraction of universe (approx)?", a: "27%", source: "Ryden" },
      { q: "Chandrasekhar mass limit ($M_\\odot$)?", a: "1.4", source: "Carroll-Ostlie" }
    ],
    "plasma-physics": [
      { q: "Debye length: $\\lambda_D = ?$", a: "$\\sqrt{\\epsilon_0 kT/(ne^2)}$", source: "Chen" },
      { q: "Plasma frequency: $\\omega_p = ?$", a: "$\\sqrt{ne^2/(m\\epsilon_0)}$", source: "Chen" },
      { q: "Gyroradius of electron in $B$, with perpendicular velocity $v$?", a: "$mv/(eB)$", source: "Chen" },
      { q: "Larmor frequency = ?", a: "$eB/m$", source: "Chen" },
      { q: "Number of particles in Debye sphere for plasma to be valid?", a: "≫ 1", source: "Chen" }
    ],
    "fluid-dynamics": [
      { q: "Reynolds number $\\text{Re} = ?$", a: "$\\rho v L/\\mu$", source: "Kundu-Cohen" },
      { q: "Stokes drag on sphere radius $r$ at velocity $v$, viscosity $\\mu$?", a: "$6\\pi\\mu r v$", source: "Landau-Lifshitz" },
      { q: "Mach number above which compressibility matters: ~?", a: "0.3", source: "Kundu-Cohen" },
      { q: "Vorticity $\\omega = ?$", a: "$\\nabla \\times \\mathbf v$", source: "Kundu-Cohen" },
      { q: "Continuity for incompressible flow: $\\nabla \\cdot \\mathbf v = ?$", a: "0", source: "Kundu-Cohen" }
    ],
    "continuum-elasticity": [
      { q: "Young's modulus units?", a: "Pa", source: "Landau-Lifshitz" },
      { q: "Poisson ratio for incompressible material?", a: "0.5", source: "Landau-Lifshitz" },
      { q: "Bulk modulus for isotropic linear material in terms of $E$, $\\nu$?", a: "$E/[3(1 - 2\\nu)]$", source: "Landau-Lifshitz" },
      { q: "Stress-strain in 1D Hooke's law: $\\sigma = ?$", a: "$E\\varepsilon$", source: "Landau-Lifshitz" },
      { q: "Wave speed on string with tension $T$, density $\\mu$?", a: "$\\sqrt{T/\\mu}$", source: "French" }
    ],
    "central-force": [
      { q: "Kepler's third law: $T^2 \\propto ?$", a: "$a^3$", source: "Goldstein" },
      { q: "Effective potential for inverse-square: $V_{\\text{eff}} = -k/r + ?$", a: "$L^2/(2mr^2)$", source: "Goldstein" },
      { q: "Eccentricity of circular orbit?", a: "0", source: "Goldstein" },
      { q: "Eccentricity of parabolic escape orbit?", a: "1", source: "Goldstein" },
      { q: "Reduced mass of two-body $m_1, m_2$?", a: "$m_1 m_2/(m_1 + m_2)$", source: "Marion-Thornton" }
    ],
    "nonlinear-chaos-physics": [
      { q: "Logistic map: $x_{n+1} = rx_n(1 - x_n)$. Bifurcation cascades start at $r = ?$", a: "3", source: "Strogatz" },
      { q: "Feigenbaum constant ≈ ?", a: "4.669", source: "Strogatz" },
      { q: "Lorenz attractor parameter $\\sigma$ typically?", a: "10", source: "Strogatz" },
      { q: "Positive Lyapunov exponent means?", a: "Chaos", source: "Strogatz" },
      { q: "Hopf bifurcation produces?", a: "Limit cycle", source: "Strogatz" }
    ],
    "angular-momentum-spin": [
      { q: "$[L_x, L_y] = ?$", a: "$i\\hbar L_z$", source: "Sakurai" },
      { q: "Eigenvalues of $L^2$?", a: "$\\ell(\\ell+1)\\hbar^2$", source: "Sakurai" },
      { q: "Eigenvalues of $L_z$ for given $\\ell$?", a: "$m\\hbar$, $m = -\\ell,\\ldots,\\ell$", source: "Griffiths" },
      { q: "Pauli matrices anticommute: $\\{\\sigma_x, \\sigma_y\\} = ?$", a: "0", source: "Sakurai" },
      { q: "Total angular momentum of two spin-1/2: possible $j$?", a: "0, 1", source: "Sakurai" }
    ],
    "qm-3d-hydrogen": [
      { q: "Hydrogen energy levels: $E_n = ?$ (eV)", a: "$-13.6/n^2$", source: "Griffiths" },
      { q: "Degeneracy of $n = 3$ level (no spin)?", a: "9", source: "Griffiths" },
      { q: "Bohr radius $a_0$ in m?", a: "$5.3 \\times 10^{-11}$", source: "Griffiths" },
      { q: "Angular momentum quantum number range for $n = 4$?", a: "$\\ell = 0,1,2,3$", source: "Griffiths" },
      { q: "Ground state radial wavefunction $\\propto ?$", a: "$e^{-r/a_0}$", source: "Griffiths" }
    ],
    "perturbation-theory": [
      { q: "1st-order correction to energy: $E^{(1)} = ?$", a: "$\\langle 0|H'|0\\rangle$", source: "Griffiths" },
      { q: "Stark effect on H ground state, linear or quadratic in field?", a: "Quadratic", source: "Griffiths" },
      { q: "Time-dep PT: probability $\\propto |M|^2 \\cdot ?$", a: "$t^2$ short time, $t$ Fermi", source: "Sakurai" },
      { q: "Fermi's golden rule: $\\Gamma = ?$", a: "$(2\\pi/\\hbar)|M|^2 \\rho$", source: "Sakurai" },
      { q: "Degenerate PT: diagonalize $H'$ in?", a: "Degenerate subspace", source: "Griffiths" }
    ],
    "identical-particles": [
      { q: "Pauli principle for fermions: wavefunction must be?", a: "Antisymmetric", source: "Griffiths" },
      { q: "Bosons: symmetric or antisymmetric?", a: "Symmetric", source: "Griffiths" },
      { q: "How many electrons fit in 1s shell of H?", a: "2", source: "Griffiths" },
      { q: "Statistics of photons?", a: "Bose-Einstein", source: "Sakurai" },
      { q: "Spin-statistics theorem: half-integer spin = ?", a: "Fermion", source: "Sakurai" }
    ],
    "scattering-theory": [
      { q: "Differential cross section $d\\sigma/d\\Omega = ?$ in terms of scattering amplitude $f$?", a: "$|f|^2$", source: "Sakurai" },
      { q: "Born approximation: $f \\propto ?$", a: "Fourier transform of $V$", source: "Sakurai" },
      { q: "Total cross section for $f = $ const $a$?", a: "$4\\pi |a|^2$", source: "Sakurai" },
      { q: "Optical theorem: $\\sigma_\\text{tot} \\propto ?$", a: "$\\text{Im}(f(0))$", source: "Sakurai" },
      { q: "Hard-sphere low-energy scattering length?", a: "Sphere radius", source: "Sakurai" }
    ],
    "density-matrices": [
      { q: "Pure state criterion on $\\rho$: $\\rho^2 = ?$", a: "$\\rho$", source: "Nielsen-Chuang" },
      { q: "$\\text{Tr}(\\rho) = ?$", a: "1", source: "Sakurai" },
      { q: "Maximally mixed state of qubit: $\\rho = ?$", a: "$I/2$", source: "Nielsen-Chuang" },
      { q: "Von Neumann entropy of pure state?", a: "0", source: "Nielsen-Chuang" },
      { q: "Time evolution of $\\rho$: $i\\hbar \\dot\\rho = ?$", a: "$[H, \\rho]$", source: "Sakurai" }
    ],
    "path-integrals": [
      { q: "Free-particle propagator: $K(x', t; x, 0) \\propto e^{?}$", a: "$im(x'-x)^2/(2\\hbar t)$", source: "Feynman-Hibbs" },
      { q: "Classical limit corresponds to stationary phase of what?", a: "Action", source: "Feynman-Hibbs" },
      { q: "Lagrangian for free particle?", a: "$\\tfrac{1}{2}m\\dot x^2$", source: "Feynman-Hibbs" },
      { q: "Imaginary time path integral computes what at finite T?", a: "Partition function", source: "Kleinert" },
      { q: "Number of paths in feynman sum (formally)?", a: "infinite", source: "Feynman-Hibbs" }
    ],
    "quantum-information": [
      { q: "Number of orthogonal states for $n$ qubits?", a: "$2^n$", source: "Nielsen-Chuang" },
      { q: "Hadamard on $|0\\rangle$: $H|0\\rangle = ?$", a: "$(|0\\rangle + |1\\rangle)/\\sqrt 2$", source: "Nielsen-Chuang" },
      { q: "CNOT on $|10\\rangle$?", a: "$|11\\rangle$", source: "Nielsen-Chuang" },
      { q: "Bell state $|\\Phi^+\\rangle = ?$", a: "$(|00\\rangle + |11\\rangle)/\\sqrt 2$", source: "Nielsen-Chuang" },
      { q: "Grover's search runtime for $N$ items?", a: "$O(\\sqrt N)$", source: "Nielsen-Chuang" }
    ],
    "symmetries-noether": [
      { q: "Conservation law from time translation?", a: "Energy", source: "Goldstein" },
      { q: "From space translation?", a: "Momentum", source: "Goldstein" },
      { q: "From rotation?", a: "Angular momentum", source: "Goldstein" },
      { q: "Gauge symmetry of QED conserves?", a: "Charge", source: "Peskin-Schroeder" },
      { q: "Number of generators of $SO(3)$?", a: "3", source: "Georgi" }
    ],
    "classical-field-theory": [
      { q: "Action for free scalar field: $S = \\int (\\partial_\\mu\\phi)^2/2 - V(\\phi)$. Eqn of motion?", a: "$\\Box\\phi + dV/d\\phi = 0$", source: "Goldstein" },
      { q: "Stress-energy tensor: $T^{\\mu\\nu}_{,\\mu} = ?$", a: "0", source: "Landau-Lifshitz" },
      { q: "Maxwell action: $S = -\\tfrac{1}{4}\\int F_{\\mu\\nu}F^{\\mu\\nu}$. Field strength: $F_{\\mu\\nu} = ?$", a: "$\\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu$", source: "Peskin-Schroeder" },
      { q: "Lagrangian density of free Dirac field?", a: "$\\bar\\psi(i\\gamma^\\mu\\partial_\\mu - m)\\psi$", source: "Peskin-Schroeder" },
      { q: "Klein-Gordon equation: $(\\Box + ?)\\phi = 0$.", a: "$m^2$", source: "Peskin-Schroeder" }
    ],
    "qft": [
      { q: "Spin of photon?", a: "1", source: "Peskin-Schroeder" },
      { q: "Spin of Higgs?", a: "0", source: "Peskin-Schroeder" },
      { q: "Order of $\\alpha$ for tree-level e-e scattering?", a: "$\\alpha^2$", source: "Peskin-Schroeder" },
      { q: "Anomalous magnetic moment of electron $g - 2$ leading order: $\\alpha/?$", a: "$2\\pi$", source: "Peskin-Schroeder" },
      { q: "QED propagator for photon (Feynman gauge): $-ig_{\\mu\\nu}/?$", a: "$k^2$", source: "Peskin-Schroeder" }
    ],
    "renormalization": [
      { q: "UV cutoff scale in dim reg replaced by?", a: "$\\epsilon$ in $4-\\epsilon$ dim", source: "Peskin-Schroeder" },
      { q: "Beta function $\\beta(g)$ defines what flow?", a: "Coupling with scale", source: "Cardy" },
      { q: "QCD asymptotically free: $\\beta < 0$ at high energy. True?", a: "True", source: "Peskin-Schroeder" },
      { q: "Wilson RG: integrate out what?", a: "High-momentum modes", source: "Cardy" },
      { q: "Relevant vs irrelevant operator: relevant grows under?", a: "RG flow to IR", source: "Cardy" }
    ],
    "radiation-theory": [
      { q: "Larmor formula: $P = q^2 a^2/(?)$", a: "$6\\pi\\epsilon_0 c^3$", source: "Griffiths" },
      { q: "Dipole radiation angular distribution: $\\propto ?$", a: "$\\sin^2\\theta$", source: "Jackson" },
      { q: "Frequency of synchrotron radiation: $\\omega \\sim \\gamma^?\\omega_0$", a: "3", source: "Jackson" },
      { q: "Number of polarization states for photon?", a: "2", source: "Griffiths" },
      { q: "Energy emitted by accelerated charge per unit solid angle?", a: "Use angular Larmor", source: "Jackson" }
    ],
    "em-waves-matter": [
      { q: "Index of refraction $n = ?$", a: "$\\sqrt{\\epsilon_r\\mu_r}$", source: "Griffiths" },
      { q: "Skin depth $\\delta = ?$", a: "$\\sqrt{2/(\\mu\\sigma\\omega)}$", source: "Griffiths" },
      { q: "Brewster angle definition: reflected light is?", a: "Polarized perpendicular to plane", source: "Hecht" },
      { q: "Group velocity vs phase velocity in normal dispersion: which is less?", a: "Group", source: "Jackson" },
      { q: "Plasma frequency $\\omega_p$: $\\omega_p^2 = ?$", a: "$ne^2/(m\\epsilon_0)$", source: "Jackson" }
    ],
    "lasers": [
      { q: "Threshold condition for lasing: gain $\\geq ?$", a: "Loss", source: "Siegman" },
      { q: "Three-level vs four-level laser: easier to invert?", a: "Four-level", source: "Yariv" },
      { q: "Coherent length of a laser: long or short?", a: "Long", source: "Siegman" },
      { q: "First demonstrated laser (year)?", a: "1960", source: "Siegman" },
      { q: "Q-switching produces pulses of what duration order?", a: "ns", source: "Siegman" }
    ],
    "quantum-optics": [
      { q: "Photon number state $|n\\rangle$ has photon number variance?", a: "0", source: "Walls-Milburn" },
      { q: "Coherent state $|\\alpha\\rangle$: photon number distribution is?", a: "Poisson", source: "Walls-Milburn" },
      { q: "Vacuum field has zero photons but nonzero what?", a: "Energy / variance", source: "Walls-Milburn" },
      { q: "Squeezed state reduces variance below what?", a: "Shot noise / vacuum", source: "Walls-Milburn" },
      { q: "Hong-Ou-Mandel dip: two photons enter beamsplitter, output?", a: "Bunch at one port", source: "Mandel-Wolf" }
    ],
    "amo": [
      { q: "Doppler temperature limit: $T \\sim ?$", a: "$\\hbar\\Gamma/k_B$", source: "Foot" },
      { q: "Recoil energy from photon scattering: $E_r = ?$", a: "$\\hbar^2 k^2/(2m)$", source: "Foot" },
      { q: "Year of first BEC?", a: "1995", source: "Foot" },
      { q: "Magneto-optical trap (MOT) uses which gradient force?", a: "Position-dependent Zeeman", source: "Foot" },
      { q: "Number of ions in modern trapped-ion quantum computer (order)?", a: "10-100", source: "Foot" }
    ],
    "phase-transitions": [
      { q: "Critical exponent for magnetization in 2D Ising: $\\beta = ?$", a: "1/8", source: "Goldenfeld" },
      { q: "Mean-field $\\beta$?", a: "1/2", source: "Goldenfeld" },
      { q: "Order of magnetization transition: 2nd or 1st?", a: "2nd", source: "Goldenfeld" },
      { q: "Critical dimension above which mean-field exact (Ising)?", a: "4", source: "Cardy" },
      { q: "Scaling law $\\alpha + 2\\beta + \\gamma = ?$", a: "2", source: "Cardy" }
    ],
    "nonequilibrium-statmech": [
      { q: "Langevin equation: stochastic force has correlator $\\propto ?$", a: "$\\delta(t-t')$", source: "Zwanzig" },
      { q: "Einstein relation: $D = ?$", a: "$kT/\\gamma$", source: "Zwanzig" },
      { q: "Fokker-Planck describes evolution of?", a: "Probability density", source: "Gardiner" },
      { q: "Mean-square displacement in 1D Brownian: $\\langle x^2\\rangle = ?$", a: "$2Dt$", source: "Zwanzig" },
      { q: "Fluctuation-dissipation: response function related to?", a: "Correlation function", source: "Zwanzig" }
    ],
    "superconductivity": [
      { q: "Cooper pair charge?", a: "-2e", source: "Tinkham" },
      { q: "BCS gap at $T = 0$: $\\Delta_0/(k_B T_c) \\approx ?$", a: "1.76", source: "Tinkham" },
      { q: "London penetration depth $\\lambda_L = ?$", a: "$\\sqrt{m/(\\mu_0 n e^2)}$", source: "Tinkham" },
      { q: "Type I vs II distinguished by?", a: "$\\kappa = \\lambda/\\xi$", source: "Tinkham" },
      { q: "Flux quantum $\\Phi_0 = ?$", a: "$h/(2e)$", source: "Tinkham" }
    ],
    "quantum-hall-topological": [
      { q: "Hall conductivity quantum: $\\sigma_{xy} = ?$", a: "$\\nu e^2/h$", source: "Bernevig" },
      { q: "$\\nu = 1$ requires what filling?", a: "Lowest Landau level full", source: "Bernevig" },
      { q: "Filling factor for fractional QH (Laughlin)?", a: "1/3", source: "Bernevig" },
      { q: "Topological invariant of QH state?", a: "Chern number", source: "Bernevig" },
      { q: "Edge states in QH propagate in which direction?", a: "Chiral (one direction)", source: "Bernevig" }
    ],
    "phonons": [
      { q: "Number of phonon branches in $N$-atom basis?", a: "$3N$", source: "Kittel" },
      { q: "Debye temperature of diamond (K, approx)?", a: "2230", source: "Kittel" },
      { q: "Specific heat at $T \\ll \\Theta_D$: $C_v \\propto ?$", a: "$T^3$", source: "Kittel" },
      { q: "Group velocity at Brillouin zone boundary?", a: "0", source: "Ashcroft-Mermin" },
      { q: "Number of acoustic branches in 3D crystal?", a: "3", source: "Kittel" }
    ],
    "stellar-evolution": [
      { q: "Main sequence lifetime $\\propto M^?$", a: "$-2.5$", source: "Hansen-Kawaler-Trimble" },
      { q: "Sun age (Gyr)?", a: "4.6", source: "Carroll-Ostlie" },
      { q: "Energy source in main sequence?", a: "H fusion", source: "Carroll-Ostlie" },
      { q: "Eventual fate of $1 M_\\odot$ star?", a: "White dwarf", source: "Kippenhahn" },
      { q: "Minimum mass for core-collapse SN ($M_\\odot$, approx)?", a: "8", source: "Carroll-Ostlie" }
    ],
    "stellar-nucleosynthesis": [
      { q: "Most abundant element in universe?", a: "Hydrogen", source: "Clayton" },
      { q: "Triple-α produces?", a: "$^{12}$C", source: "Clayton" },
      { q: "r-process site (likely)?", a: "Neutron star mergers", source: "Clayton" },
      { q: "CNO cycle dominant in stars more massive than $\\sim ?M_\\odot$?", a: "1.3", source: "Clayton" },
      { q: "Iron peak — Fe binding energy per nucleon is highest. True?", a: "True", source: "Clayton" }
    ],
    "compact-objects": [
      { q: "White dwarf max mass ($M_\\odot$)?", a: "1.4 (Chandrasekhar)", source: "Shapiro-Teukolsky" },
      { q: "Neutron star typical radius (km)?", a: "10-12", source: "Shapiro-Teukolsky" },
      { q: "Schwarzschild radius for 1 $M_\\odot$ black hole (km)?", a: "3", source: "Shapiro-Teukolsky" },
      { q: "Pulsar: rotating what?", a: "Neutron star", source: "Shapiro-Teukolsky" },
      { q: "Black hole temperature $\\propto ?$", a: "$1/M$", source: "Shapiro-Teukolsky" }
    ],
    "galactic-dynamics": [
      { q: "Milky Way mass within solar radius ($M_\\odot$, approx)?", a: "$10^{11}$", source: "Binney-Tremaine" },
      { q: "Rotation curve of disk galaxies: flat at large $R$ implies?", a: "Dark matter halo", source: "Binney-Tremaine" },
      { q: "Virial theorem: $2T + U = ?$", a: "0", source: "Binney-Tremaine" },
      { q: "Plummer model density at center, finite or singular?", a: "Finite", source: "Binney-Tremaine" },
      { q: "Tidal radius increases or decreases with host mass?", a: "Decreases", source: "Binney-Tremaine" }
    ],
    "bbn-cmb-inflation": [
      { q: "CMB temperature today (K)?", a: "2.725", source: "Dodelson" },
      { q: "Recombination redshift?", a: "~1100", source: "Dodelson" },
      { q: "Big Bang nucleosynthesis produces mostly?", a: "H and He-4", source: "Ryden" },
      { q: "$^4$He mass fraction (approx)?", a: "0.25", source: "Ryden" },
      { q: "Number of e-folds of inflation (typical)?", a: "60", source: "Dodelson" }
    ],
    "gravitational-waves": [
      { q: "GW polarization states?", a: "2 (+ and ×)", source: "Maggiore" },
      { q: "Speed of GWs in GR?", a: "c", source: "Maggiore" },
      { q: "GW150914: source?", a: "Binary black hole merger", source: "Maggiore" },
      { q: "Quadrupole formula: GW amplitude $\\propto ?$", a: "$\\ddot Q_{ij}$", source: "Maggiore" },
      { q: "LIGO arm length (km)?", a: "4", source: "Maggiore" }
    ],
    "high-energy-astrophysics": [
      { q: "Cosmic ray energy max observed (eV)?", a: "$10^{20}$", source: "Longair" },
      { q: "GRB afterglow phase emits in?", a: "X-ray, optical, radio", source: "Longair" },
      { q: "AGN central engine?", a: "Supermassive black hole", source: "Longair" },
      { q: "Synchrotron emission from?", a: "Relativistic electrons in B field", source: "Longair" },
      { q: "Compton scattering of CMB by relativistic electrons (effect)?", a: "Sunyaev-Zel'dovich", source: "Longair" }
    ],
    "math-methods-physics": [
      { q: "$\\int_0^\\infty e^{-x^2}dx = ?$", a: "$\\sqrt\\pi/2$", source: "Arfken-Weber" },
      { q: "Legendre polynomial $P_2(x) = ?$", a: "$(3x^2 - 1)/2$", source: "Boas" },
      { q: "Bessel function $J_0(0) = ?$", a: "1", source: "Boas" },
      { q: "Gamma function: $\\Gamma(5) = ?$", a: "24", source: "Boas" },
      { q: "Stirling's approximation: $n! \\sim ?$", a: "$\\sqrt{2\\pi n}(n/e)^n$", source: "Arfken-Weber" }
    ],
    "group-theory-physics": [
      { q: "Number of irreducible reps of $S_3$?", a: "3", source: "Tinkham" },
      { q: "Dimensions of $S_3$ irreps?", a: "1, 1, 2", source: "Tinkham" },
      { q: "Fundamental rep of $SU(2)$ has dimension?", a: "2", source: "Georgi" },
      { q: "Adjoint rep of $SU(N)$ has dimension?", a: "$N^2 - 1$", source: "Georgi" },
      { q: "Gell-Mann matrices: how many?", a: "8", source: "Georgi" }
    ],
    "computational-physics": [
      { q: "Stability condition for explicit Euler on $\\dot y = -\\lambda y$?", a: "$h < 2/\\lambda$", source: "Newman" },
      { q: "Order of error per step in 4th-order Runge-Kutta?", a: "$h^5$", source: "Newman" },
      { q: "Monte Carlo integration error scales as?", a: "$1/\\sqrt N$", source: "Newman" },
      { q: "FFT runtime for $N$ samples?", a: "$O(N\\log N)$", source: "Newman" },
      { q: "Verlet integrator preserves what (qualitatively)?", a: "Energy (symplectic)", source: "Newman" }
    ],
    "soft-matter-biophysics": [
      { q: "Polymer Flory exponent in good solvent (3D)?", a: "0.588", source: "de Gennes" },
      { q: "Persistence length of DNA (nm, approx)?", a: "50", source: "Phillips" },
      { q: "Membrane bending modulus units?", a: "Energy (J or k_B T)", source: "Phillips" },
      { q: "Reynolds number of bacterium swimming: order?", a: "$10^{-5}$", source: "Phillips" },
      { q: "Entropy of polymer of $N$ links, end-to-end vector $\\mathbf R$: $\\propto -R^2/?$", a: "$Nb^2$", source: "de Gennes" }
    ]
  });
})();
