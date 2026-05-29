// Plain-language explanations for every topic.
// For each topic: WHY IT EXISTS, WHY IT MATTERS, THE BIG IDEA.
// Written assuming zero background. No jargon without a quick translation.
window.INTROS = {

  // ===== MATH =====

  "arithmetic-foundations": {
    whyExists: "Before you can do anything in math, you need rules for combining numbers. Without rules, $2 + 3 \\times 4$ could mean two different things to two different people. Arithmetic gives everyone the same answer.",
    whyImportant: "Every other topic — physics, money, computers, recipes, building anything — builds on this. If your basic arithmetic is shaky, everything else collapses.",
    intuition: "Math is a language. Arithmetic is the alphabet and the grammar. The numbers are the words, and the operations ($+$, $-$, $\\times$, $\\div$) tell you how to put them together."
  },

  "fractions-percentages": {
    whyExists: "Whole numbers like 1, 2, 3 work for whole things — one apple, two cats. But what if you eat half an apple? You need a way to write 'a piece of something'. That's a fraction. A percentage is just a fraction with the bottom always set to 100, because humans find 100 easy to think about.",
    whyImportant: "Almost everything you pay for involves a percentage: sales tax, tips, discounts, interest on a loan, the chance of rain. If you don't understand percentages, the world quietly takes money or time from you.",
    intuition: "A fraction is a pizza. The bottom number says how many slices the pizza was cut into. The top number says how many slices you have. $50\\%$ just means 'half'."
  },

  "exponents-roots": {
    whyExists: "If you multiply the same number by itself many times — say $2 \\times 2 \\times 2 \\times 2 \\times 2$ — writing it out gets tiring. Exponents are shorthand: $2^5$. Roots ask the reverse: 'what number, multiplied by itself, gives this?'",
    whyImportant: "Compound interest, population growth, computer memory, earthquake strength, sound loudness, radioactive decay — they're all exponents. Roots show up every time you compute distance or solve a quadratic.",
    intuition: "Exponents are fast multiplication. Roots undo exponents, the same way subtraction undoes addition."
  },

  "ratios-proportions": {
    whyExists: "If a recipe for 4 people uses 200 g of flour, how much for 7 people? You need a way to scale things up and down while keeping the relationship the same. That's what ratios do.",
    whyImportant: "Cooking, mixing paint, currency exchange, map scales, gear ratios on a bike, dosage of medicine, mixing chemicals — they're all proportions. Get the ratio wrong and the cake is salty, the medicine is dangerous, the map is wrong.",
    intuition: "A ratio tells you how two quantities compare. A proportion says 'this ratio equals that ratio'. If two situations stay in the same proportion, scaling one tells you how to scale the other."
  },

  "linear-equations": {
    whyExists: "Often you know a relationship between things but not one of the pieces. 'I have some money. After spending $5, I had $12 left. How much did I start with?' Linear equations are how you write down such puzzles and solve them.",
    whyImportant: "Pricing, planning, budgeting, conversion between units, balancing chemical equations, simple physics — most everyday math problems are linear equations in disguise.",
    intuition: "An equation is a balance scale. Whatever you do to one side, do to the other, and it stays balanced. Your job is to peel away everything around the unknown until it's alone."
  },

  "inequalities": {
    whyExists: "Sometimes you don't need an exact answer — you need a range. 'How fast can I drive without getting a ticket?' 'How much can I spend and still afford rent?' These aren't equations; they're inequalities.",
    whyImportant: "Budget constraints, speed limits, safety margins, error tolerances in engineering, dosage ranges in medicine — anything with a limit or threshold is an inequality.",
    intuition: "An inequality is like an equation, except instead of 'equals' it says 'less than' or 'greater than'. One sneaky rule: if you multiply both sides by a negative, you must flip the direction of the inequality."
  },

  "plane-geometry": {
    whyExists: "Long before algebra, humans needed to measure land, build pyramids, divide property, and navigate. Geometry is the original applied math — about shapes, distances, and angles in the world.",
    whyImportant: "Architecture, art, navigation, sports, screen design, packaging — anything that has a shape or takes up space. The Pythagorean theorem alone is the backbone of half of physics and engineering.",
    intuition: "Geometry studies what doesn't change when you slide, rotate, or flip a shape. A triangle is still a triangle; its angles still add to 180°. The rules of geometry are the rules of physical space."
  },

  "set-logic": {
    whyExists: "To think clearly about math, you need to be precise about 'a collection of things' and 'this statement is true'. Sets and logic give math a clean foundation. Without them, you can't define anything else rigorously.",
    whyImportant: "Programming, databases, search engines, AI, electronics — all built on logic. Every Google search is a set operation. Every \"if-then\" in code is propositional logic.",
    intuition: "A set is just a collection. Logic is the rules for combining true/false statements without contradicting yourself. Together they tell you when two things really are the same thing."
  },

  "number-theory": {
    whyExists: "Whole numbers look simple but hide deep patterns. Why are primes irregular? When does one number divide another? Number theory studies the secret structure of the integers.",
    whyImportant: "Modern cryptography — online banking, secure messaging, cryptocurrencies — relies on the hardness of factoring large numbers. Every time you see a padlock in your browser, number theory is doing the work.",
    intuition: "Primes are the atoms of numbers — every integer is built by multiplying primes. Number theory studies these atoms and how numbers behave when you look at remainders ('clock arithmetic')."
  },

  "combinatorics": {
    whyExists: "How many ways can you arrange your bookshelf? How many possible passwords exist? How many lottery tickets would you need to guarantee a win? Combinatorics counts possibilities, often without listing them.",
    whyImportant: "Probability, cryptography, computer algorithms, genetics, scheduling, optimal seating, network design — they all need to count arrangements without enumerating them.",
    intuition: "Two rules do most of the work. Multiplication rule: independent choices multiply. Order matters → permutations. Order doesn't matter → combinations."
  },

  "systems-of-equations": {
    whyExists: "Sometimes one equation isn't enough — you have several unknowns that depend on each other. 'Tickets cost $\\$8$ for adults, $\\$5$ for kids; 20 people paid $\\$130$ — how many adults?' That's two unknowns linked by two equations.",
    whyImportant: "Circuits, traffic flow, supply and demand, optimization, equilibrium in chemistry, mixtures, balancing forces — basically every real-world problem with more than one unknown.",
    intuition: "Each equation is a constraint that cuts down possibilities. With $n$ unknowns and $n$ independent equations, you can usually pin down exactly one answer (the intersection of all constraints)."
  },

  "quadratic-equations": {
    whyExists: "When something is squared — area, distance, energy — linear equations aren't enough. A ball's flight, the shape of a satellite dish, the trajectory of a thrown rock — all involve $x^2$. We need tools to solve $ax^2 + bx + c = 0$.",
    whyImportant: "Physics of motion under gravity, optimization problems (maximum profit, minimum cost), parabolic mirrors and antennas, projectile motion, every situation where 'too small' and 'too big' both fail.",
    intuition: "A quadratic equation graphs as a U-shaped curve (parabola). Solving it asks: where does the U cross the x-axis? It can cross twice, just touch, or not cross at all — the discriminant tells you which."
  },

  "polynomials-rational": {
    whyExists: "Polynomials extend quadratics: $x^3$, $x^4$, and beyond. They're the simplest functions after linear and quadratic, and they can approximate almost anything. Rational functions are polynomial divided by polynomial — they let you describe rates, ratios, and asymptotic behavior.",
    whyImportant: "Used to model nearly every smooth phenomenon in science. Computer graphics use polynomial curves (Bézier). Engineering uses transfer functions (rational). Signal processing relies on polynomial factorization.",
    intuition: "A polynomial is just adding up powers of $x$. The degree (highest power) determines how many times the graph can wiggle. A rational function is one polynomial divided by another — it can shoot to infinity at the bottom's zeros."
  },

  "functions-graphs": {
    whyExists: "A function is a machine: put a number in, get a number out. Once you have a machine, you want to ask: what comes out for typical inputs? Can I reverse the machine? What if I plug one machine into another?",
    whyImportant: "Functions are the language of science. Velocity as a function of time, temperature as a function of altitude, profit as a function of price. Without functions, you can't describe any changing quantity.",
    intuition: "A function takes inputs to outputs, in a predictable way (same input → same output). A graph is just a picture of the function — every input on the x-axis paired with its output on the y-axis."
  },

  "logarithms": {
    whyExists: "Some quantities span huge ranges — sound from a whisper to a jet engine, earthquake energy from a tremor to total destruction. Multiplying gets unwieldy. Logarithms compress these huge ranges into manageable numbers, turning multiplication into addition.",
    whyImportant: "Decibels, the pH scale, the Richter scale, brightness of stars, half-lives, computer complexity, finance (compound interest), information theory — all use logs because they make exponential growth manageable.",
    intuition: "A logarithm asks: 'how many times do I have to multiply this base to get that number?' $\\log_{10} 1000 = 3$ because $10 \\times 10 \\times 10 = 1000$. Logs are the inverse of exponents."
  },

  "sequences-series": {
    whyExists: "A sequence is an ordered list of numbers; a series is what you get when you add a sequence up. The big question: when you add infinitely many things, can the total be finite? Surprisingly, yes — sometimes.",
    whyImportant: "Loan payments, savings, calculating $\\pi$ and $e$, computer approximations, Fourier series for sound and images, every numerical algorithm that converges to an answer step by step.",
    intuition: "Arithmetic sequences add the same step each time. Geometric sequences multiply by the same factor. Their sums have neat formulas. Infinite geometric series with $|r| < 1$ converge because the terms shrink fast enough."
  },

  "trigonometry": {
    whyExists: "Triangles are everywhere — the simplest 2D shape with corners. If you know some sides and angles, you should be able to figure out the rest. Trigonometry is the systematic way to convert between angles and lengths.",
    whyImportant: "GPS, surveying, signal processing, sound waves, vibrations, AC electricity, computer graphics, optics, astronomy — anything that rotates, oscillates, or has angles. Sine and cosine are the heart of waves.",
    intuition: "Sine, cosine, and tangent are ratios of sides in a right triangle that depend only on the angle. They unlock all the other angles and sides in any triangle (via law of sines / cosines)."
  },

  "probability": {
    whyExists: "Most of the future is uncertain — but we still need to make decisions. Probability puts numbers on uncertainty, so you can compare risks and make sensible choices instead of guessing.",
    whyImportant: "Insurance, medicine, weather forecasts, gambling, investing, machine learning, quality control, genetics, all of statistics — any time you don't know the future for sure, probability is the tool.",
    intuition: "Probability is a number between 0 (impossible) and 1 (certain). For equally likely outcomes: favorable outcomes ÷ total outcomes. Independent events multiply; complements subtract from 1."
  },

  "statistics": {
    whyExists: "Probability tells you what to expect in the future; statistics looks at data from the past and asks 'what is this telling me?' Given a pile of measurements, statistics extracts the signal from the noise.",
    whyImportant: "Medicine (does the drug work?), business (which product sells?), science (is the effect real?), elections (who will win?), sports analytics, A/B testing every website you use. Without statistics, data is just noise.",
    intuition: "Summarize data with center (mean, median) and spread (standard deviation). Then use probability backwards: how likely is this data if the truth were X? That's the heart of hypothesis testing and inference."
  },

  "complex-numbers": {
    whyExists: "Some equations have no real solutions — like $x^2 = -1$. Centuries ago, mathematicians invented a new number $i$ where $i^2 = -1$ to fill the gap. It seemed like a hack, but it turns out the universe loves it.",
    whyImportant: "Every wave, every alternating current, every quantum particle, every signal in your phone, every spinning thing is described more cleanly using complex numbers. They aren't 'imaginary' — they're how nature actually works.",
    intuition: "A complex number is a 2D number: a real part and an imaginary part. It's just a point on a plane. Multiplication by $i$ rotates 90°. Once you accept that, all the magic falls out — including Euler's formula $e^{i\\pi} = -1$."
  },

  "vector-algebra": {
    whyExists: "Numbers alone can't describe wind, force, or velocity — those need a direction too. A vector is a number with a direction baked in. Once you have vectors, you need rules to add and combine them.",
    whyImportant: "Every force, every velocity, every flow, every electric and magnetic field is a vector. Without them, you can't do physics, engineering, computer graphics, or robotics.",
    intuition: "Picture an arrow in space. Its length is its size; where it points is its direction. Add vectors tip-to-tail. The dot product measures how aligned two vectors are; the cross product makes a new vector perpendicular to both."
  },

  "linear-algebra": {
    whyExists: "When you have many quantities tangled together by linear relations, you need a powerful tool to keep track of everything. Linear algebra organizes lists of numbers (vectors) and tables of numbers (matrices), then gives clean operations to manipulate them.",
    whyImportant: "Every algorithm in machine learning, every 3D graphics engine, every quantum simulation, every spreadsheet computation, every Google search ranking — built on linear algebra. It is the workhorse of modern computation.",
    intuition: "A matrix is a function that takes vectors to vectors. Eigenvectors are the special directions where the function just stretches (doesn't twist). Most hard problems become 'find the eigenvectors'."
  },

  "limits": {
    whyExists: "What does a function do as you get closer and closer to a point — even if you can't actually reach it? Limits answer this. They are the foundation that makes calculus possible.",
    whyImportant: "Without limits, you can't define instantaneous speed, area under a curve, infinite series, or the number $e$. Every concept in calculus is built from limits.",
    intuition: "A limit is the value a function is sneaking up on. You don't need to land on the point; you just need to know what value the function approaches as you get arbitrarily close."
  },

  "derivatives": {
    whyExists: "Average speed over an hour is easy. But what is your speed at one instant? You can't divide distance by zero time. Derivatives are the trick: take a limit of the average speed as the time interval shrinks to zero.",
    whyImportant: "Optimization (find the maximum or minimum), physics (force is mass times acceleration, the second derivative of position), economics (marginal cost), engineering, AI (gradient descent), every science.",
    intuition: "A derivative is the instantaneous rate of change — the slope of the curve at one point. Zero derivative means the curve is flat (max, min, or saddle). The sign tells you if the function is rising or falling."
  },

  "integrals": {
    whyExists: "Derivatives ask 'how fast is it changing?' Integrals ask the reverse: 'given the rate of change, what's the total accumulation?' If you know how fast water flows in, an integral tells you how much water is in the tank.",
    whyImportant: "Area under any curve, volume of any solid, work done by any force, total distance from velocity, probability from probability density, electric charge from current — all integrals. Twin engine of calculus alongside derivatives.",
    intuition: "An integral is a sum of infinitely many tiny pieces. Picture chopping the area under a curve into thin rectangles. As the rectangles get thinner, the sum becomes exact. The Fundamental Theorem of Calculus says: integration and differentiation undo each other."
  },

  "multivariable-calculus": {
    whyExists: "Real-world functions usually depend on more than one variable — temperature depends on latitude, longitude, and altitude. You need calculus that handles many variables at once.",
    whyImportant: "Heat flow, fluid flow, electromagnetism, gravitational fields, optimization in many dimensions (machine learning lives here), economics, weather modeling — anything that varies across space.",
    intuition: "Partial derivatives: hold every variable but one fixed, and ask how the function changes in that direction. The gradient is the vector of all partial derivatives — it points in the direction of steepest increase."
  },

  "vector-calculus": {
    whyExists: "When fields (like wind or gravity) live in 3D space and change everywhere, you need new derivatives that work on vector fields. Divergence and curl ask: is stuff flowing out? Is stuff swirling?",
    whyImportant: "Maxwell's equations of electromagnetism are written in vector calculus. Fluid flow, weather, gravitational fields, plasma physics — anything with a flow through space — needs it.",
    intuition: "Divergence measures whether a field is 'spreading out' (positive) or 'sinking in' (negative) at a point. Curl measures the local rotation. Stokes' and divergence theorems let you trade boundary integrals for volume integrals — incredibly powerful."
  },

  "ode": {
    whyExists: "Most physical laws aren't equations for $x$ — they're equations for how $x$ changes ('the derivative of $x$ is $-x$'). Solving such a differential equation tells you the actual behavior over time.",
    whyImportant: "Newton's laws, population dynamics, electrical circuits, chemical reactions, epidemics, planetary orbits, oscillations — ODEs describe nearly every dynamical system in science.",
    intuition: "An ODE says: the future depends on the present in some specific way. Solving it means finding the function whose derivative matches the relation. Initial conditions pin down which specific solution you get."
  },

  "pde": {
    whyExists: "When something varies in both space and time (or multiple spaces), you need partial derivatives in the equation. PDEs describe how fields spread, flow, or evolve over multi-dimensional domains.",
    whyImportant: "Heat conduction, sound waves, electromagnetic waves, quantum mechanics (Schrödinger), gravity (Einstein), fluid dynamics, options pricing in finance (Black-Scholes is a PDE).",
    intuition: "Three big examples capture most cases: the heat equation (smoothing, spreading), the wave equation (oscillation, propagation), and Laplace's equation (steady-state, equilibrium). Boundary conditions are everything."
  },

  "real-analysis": {
    whyExists: "Calculus mostly works, but at the edges weird things happen — discontinuous functions, ill-behaved limits, slippery infinities. Real analysis re-does calculus with absolute rigor, so you know exactly what you can trust.",
    whyImportant: "Foundation of modern mathematics. Without it, there's no proof that calculus works, no measure theory, no functional analysis, no probability theory at graduate level.",
    intuition: "Replace 'the function gets close to L' with the precise $\\varepsilon$-$\\delta$ definition. Once you accept the discipline of $\\varepsilon$-$\\delta$, everything else (continuity, derivative, integral) becomes airtight."
  },

  "complex-analysis": {
    whyExists: "Calculus on complex numbers turns out to be far more powerful and beautiful than calculus on real numbers. A complex-differentiable function is automatically infinitely differentiable. Strange but true.",
    whyImportant: "Solves real integrals that pure real-variable methods can't. Used in fluid flow (potential theory), quantum field theory, signal processing, number theory (Riemann zeta), electromagnetism.",
    intuition: "A holomorphic function is one whose derivative exists in the complex sense — much stronger than real differentiability. Contour integrals walk loops in the complex plane and capture information about singularities via residues."
  },

  "fourier-analysis": {
    whyExists: "Any reasonable function can be written as a sum of sines and cosines of different frequencies — even a sharp square wave. This is one of the most surprising and useful facts in all of mathematics.",
    whyImportant: "MP3 and JPEG compression, MRI imaging, noise cancellation, sonar, radar, every audio equalizer, solving PDEs, signal processing, quantum mechanics — all rely on Fourier methods.",
    intuition: "Fourier analysis decomposes a signal into its frequency content — like separating white light into a rainbow with a prism. Time domain and frequency domain are two views of the same thing."
  },

  "abstract-algebra": {
    whyExists: "Adding numbers, composing rotations, multiplying matrices — superficially different, but they share structure. Abstract algebra strips away the specifics and studies the structure itself: groups, rings, fields.",
    whyImportant: "Cryptography (group theory), error-correcting codes (finite fields), quantum mechanics (symmetry groups), particle physics (Lie groups), chemistry (point groups for molecules), modern combinatorics.",
    intuition: "A group is a set with one operation that's associative, has an identity, and has inverses. That's it. From these three simple rules, an enormous amount of structure follows."
  },

  "topology": {
    whyExists: "Geometry cares about distances and angles. But sometimes you only care about what's connected to what — like a subway map, where exact distances are irrelevant. Topology is geometry without the metric.",
    whyImportant: "Used in data analysis (topological data analysis), robotics (configuration spaces), physics (topological phases of matter, quantum field theory), and the proof of many central theorems in math.",
    intuition: "A coffee cup and a doughnut are topologically the same — both have exactly one hole. Topology cares about properties that survive bending and stretching, not slicing or gluing."
  },

  "numerical-methods": {
    whyExists: "Most real-world equations can't be solved exactly. You can't write a closed-form formula for everything. Numerical methods give approximate answers, accurate enough to use, in finite time.",
    whyImportant: "Weather prediction, structural engineering, computer graphics, finance, machine learning training, computational physics, every simulation. The universe doesn't care if you have a closed-form answer — only if your approximation is good enough.",
    intuition: "Instead of solving exactly, you iterate: guess, improve, repeat. Newton's method, Euler's method, Simpson's rule — all are systematic ways to get closer with each step until the answer is accurate enough."
  },

  // ===== PHYSICS =====

  "units-measurement": {
    whyExists: "A number alone — '5' — means nothing in physics. 5 what? Seconds? Meters? Kilograms? Units anchor numbers to physical reality, and dimensional analysis tells you when an equation can't possibly be right.",
    whyImportant: "Engineering disasters happen when units are confused (NASA lost a Mars orbiter that way). Doctors give the wrong dose. Bridges fall down. Getting units right is the difference between a result and a fantasy.",
    intuition: "Treat units like variables. They add and cancel just like $x$ and $y$. If both sides of your equation don't have the same units, your equation is wrong — no matter how clean the math looks."
  },

  "kinematics": {
    whyExists: "Before asking why things move, ask how they move. Kinematics describes motion — position, speed, acceleration — without worrying about the cause. It's the vocabulary of motion.",
    whyImportant: "Every moving thing — cars, planets, electrons, sports balls, projectiles, robots — is described first by its kinematics. You can't apply Newton's laws until you can describe the motion they're producing.",
    intuition: "Position tells you where. Velocity tells you how position changes. Acceleration tells you how velocity changes. Each is the derivative of the one before it."
  },

  "vectors-physics": {
    whyExists: "Physics deals with quantities that have direction — force, velocity, acceleration, momentum. A number alone can't describe wind blowing northeast at 30 km/h. You need vectors.",
    whyImportant: "Every force diagram, every motion analysis, every navigation calculation uses vectors. Without them, physics couldn't describe anything more complex than motion in a straight line.",
    intuition: "Picture an arrow. Its length is the size of the quantity; its direction is the direction. Adding vectors is laying arrows tip-to-tail. Splitting a vector into x and y components is like asking 'how much is east, how much is north'."
  },

  "newtons-laws": {
    whyExists: "Aristotle thought objects naturally come to rest. Galileo and Newton realized that's wrong — objects naturally keep moving. The mystery isn't motion; it's change in motion. Newton's three laws are the rules for how forces cause change.",
    whyImportant: "Every machine, building, vehicle, sport, satellite, and engineering project uses Newton's laws. They are the foundation of all classical mechanics — the way humans built the modern world before quantum mechanics arrived.",
    intuition: "First: no force → no change in motion (inertia). Second: $F = ma$ (force = mass times acceleration). Third: every action has an equal-and-opposite reaction. That's almost all of classical mechanics in three sentences."
  },

  "momentum-impulse": {
    whyExists: "When two objects collide, why do some bounce and others stick? Why is it so much worse to be hit by a truck than a bicycle, even at the same speed? You need a quantity that captures 'how hard to stop' — that's momentum.",
    whyImportant: "Car crashes, rocket propulsion, billiards, particle physics collisions, recoil from a gun, jet engines, even walking. Momentum is conserved in any closed system — one of the deepest laws of nature.",
    intuition: "Momentum is mass × velocity. A big truck at the same speed as a bike has way more momentum, so it takes way more force (or more time) to stop. Impulse is the change in momentum, equal to force × time."
  },

  "energy-work": {
    whyExists: "Forces are the immediate cause of motion, but they're often hard to track. Energy is a more powerful concept: a single bookkeeping number that's conserved through every interaction, even when forces are complex.",
    whyImportant: "Energy crisis, energy bills, food calories, batteries, engines, power plants, climate change, weapons, biology, chemistry, every machine — energy is the universal currency of physics.",
    intuition: "Energy comes in forms (kinetic = motion, potential = position, thermal = heat, chemical, electric, nuclear). It moves between forms but the total never changes (conservation of energy). Work is energy transferred by a force over a distance."
  },

  "circular-gravitation": {
    whyExists: "Things moving in circles need a force pulling them toward the center — otherwise they'd fly off in straight lines. Newton's biggest insight: the apple falling from a tree and the Moon orbiting Earth feel the same kind of force.",
    whyImportant: "Satellites, GPS, planetary motion, particle accelerators, centrifuges, banked roads, roller coasters, weather (Coriolis effect), the structure of galaxies — all involve circular motion and gravitation.",
    intuition: "Centripetal acceleration points inward. The force creating it doesn't have to be one type — it could be tension, gravity, friction, the wall of a centrifuge. Gravity itself falls off as $1/r^2$ — twice as far means a quarter the force."
  },

  "shm": {
    whyExists: "Push something away from equilibrium and let it spring back; it usually oscillates. Pendulums, springs, vibrating strings, atoms in a crystal — they all wiggle the same way. SHM is the math of wiggling.",
    whyImportant: "Clocks, musical instruments, atomic vibrations, building responses to earthquakes, AC current, every wave, the foundation of quantum harmonic oscillators (the most important model in QM).",
    intuition: "If the restoring force grows linearly with displacement, you get a sine/cosine in time. Frequency depends on stiffness and mass; amplitude depends on how hard you started it. Energy sloshes between kinetic and potential."
  },

  "rotational": {
    whyExists: "Things don't just move from place to place — they spin. Wheels, planets, gymnasts, gears, the Earth itself. You need a rotational version of Newton's laws: torque instead of force, moment of inertia instead of mass.",
    whyImportant: "Engines, wheels, gyroscopes, hard drives, satellites, sports (a figure skater pulling their arms in), star formation, conservation of angular momentum across the universe.",
    intuition: "Every linear concept has a rotational analog. Force → torque. Mass → moment of inertia. Velocity → angular velocity. The equations look the same; just replace each linear quantity with its rotational counterpart."
  },

  "fluids": {
    whyExists: "Liquids and gases don't have fixed shape — they flow. They push on things via pressure, and they exert buoyancy on submerged objects. You need a different set of laws from solid mechanics.",
    whyImportant: "Plumbing, hydraulics, ships, blood circulation, weather, oceans, dams, airplane wings, syringes, scuba diving safety — fluids are everywhere.",
    intuition: "Pressure increases with depth. Buoyancy equals the weight of fluid displaced (Archimedes). In flowing fluid, fast → low pressure (Bernoulli) — why planes lift and curveballs curve."
  },

  "kinetic-theory": {
    whyExists: "A gas is invisible — but you can feel it press on your hand. Why? Kinetic theory says a gas is a swarm of zillions of tiny particles bouncing around, and pressure is just trillions of tiny collisions.",
    whyImportant: "Connects the microscopic world (atoms, molecules) to the macroscopic world (temperature, pressure). The bridge between Newtonian mechanics and thermodynamics — and the foundation of statistical mechanics.",
    intuition: "Temperature is just a measure of how fast the molecules are moving on average. Hot = fast molecules. Cold = slow. Pressure comes from molecules hitting the walls. Equipartition says each 'way of moving' gets $\\tfrac{1}{2}k_B T$ of energy."
  },

  "thermodynamics": {
    whyExists: "Heat seemed mysterious — sometimes it does work (steam engines), sometimes it just spreads out. Thermodynamics gave us four laws that explain heat, work, and why time only flows one way.",
    whyImportant: "Every engine, refrigerator, power plant, atmosphere, ocean, star, and living cell. The reason perpetual-motion machines are impossible. The reason your coffee gets cold but never spontaneously gets hot.",
    intuition: "First law: energy is conserved (heat in = work out + internal energy change). Second law: entropy (disorder) always increases overall. That's why broken eggs don't unbreak — there are vastly more ways to be broken than whole."
  },

  "waves": {
    whyExists: "Disturb something elastic — air, water, a string — and the disturbance spreads. That's a wave. Waves carry energy and information without carrying matter. They are how almost every signal in nature travels.",
    whyImportant: "Sound, light, radio, microwaves, music, earthquakes, ocean waves, sonar, ultrasound. The wave equation appears in every branch of physics — even quantum mechanics is fundamentally about waves.",
    intuition: "Wavelength is the distance between peaks. Frequency is how many peaks pass per second. Speed = frequency × wavelength. When waves meet, they add (interference). Moving source → Doppler shift."
  },

  "optics-geometric": {
    whyExists: "When light passes through lenses or bounces off mirrors, you can ignore that it's a wave and just track rays (straight lines) bending at surfaces. That's geometric optics — accurate when wavelengths are much smaller than the objects.",
    whyImportant: "Eyeglasses, microscopes, telescopes, cameras, the human eye, lasers, fiber optics, projectors, periscopes — every optical instrument we've built.",
    intuition: "Light travels in straight lines until it hits something. Mirrors reflect at equal angles. Refraction bends light toward the slower medium (Snell's law). Lenses are shaped to focus parallel rays to a single point — the focal point."
  },

  "optics-wave": {
    whyExists: "When light meets something close to its wavelength (slits, thin films, fine gratings), ray optics breaks. Light interferes with itself, diffracts around edges, and shows colors. You have to treat it as a wave.",
    whyImportant: "How CDs and DVDs work, why thin oil films are colorful, X-ray crystallography (the structure of DNA was found this way), holograms, anti-reflective coatings, polarized sunglasses, modern microscopy.",
    intuition: "Two paths from a source can arrive in step (bright) or out of step (dark) — interference. Light bends around obstacles — diffraction. These two effects together explain everything wavelike about light."
  },

  "electrostatics": {
    whyExists: "Two kinds of charge (positive and negative) push or pull each other. Unlike charges attract, like charges repel. Electrostatics is the physics of charges at rest — the foundation of all of electricity.",
    whyImportant: "Electronics, capacitors, lightning, ink-jet printers, photocopiers, particle accelerators, chemistry (bonds), biology (membranes), the structure of atoms.",
    intuition: "Charges create an electric field. Field lines start on positive and end on negative. Closer charges → stronger field. The field tells nearby charges how much force they'll feel. Voltage is electric potential energy per unit charge."
  },

  "electric-circuits": {
    whyExists: "Stationary charge is useful, but moving charge does work — it lights bulbs, runs motors, powers everything. A circuit is a controlled path for moving charge, with rules for how voltage and current relate.",
    whyImportant: "Every electronic device, every appliance, every wire in your house and car. Understanding circuits is foundational for electronics, electrical engineering, computer hardware, and just not getting electrocuted.",
    intuition: "Voltage pushes current through resistance, like pressure pushes water through a pipe. $V = IR$ (Ohm's law). Charge is conserved at every junction (Kirchhoff's current law). Voltage around any loop sums to zero (Kirchhoff's voltage law)."
  },

  "magnetism-induction": {
    whyExists: "Moving charges create magnetic fields, and changing magnetic fields push on charges. This deep coupling between electricity and magnetism is the basis of generators, motors, and the existence of light itself.",
    whyImportant: "Every electric motor, generator, transformer, MRI scanner, hard drive, induction stove, contactless charging pad, train (maglev), and the magnetic field of the Earth that protects us from solar wind.",
    intuition: "A current in a wire makes a magnetic field around it. Move a magnet near a coil and current is induced (Faraday's law). The induced current always opposes the change (Lenz's law) — nature is conservative."
  },

  "ac-circuits": {
    whyExists: "DC current flows one way; AC current oscillates back and forth. AC is what comes out of your wall socket, and it has surprisingly different behavior in circuits with capacitors and inductors. Resistance alone isn't enough — you need impedance.",
    whyImportant: "Power grids, radio tuning, audio equipment, oscillators, filters, every signal-processing circuit, wireless communications. The reason your wall outlet is 50/60 Hz and not DC.",
    intuition: "In AC circuits, capacitors and inductors don't just dissipate energy — they store and return it, but with a time delay (phase shift). Impedance is resistance generalized to AC. At resonance, oppositions cancel and current peaks."
  },

  "maxwell-em": {
    whyExists: "Maxwell unified electricity and magnetism into four equations — and discovered that the equations themselves predict an electromagnetic wave traveling at the speed of light. Light is electromagnetism.",
    whyImportant: "Radio, TV, Wi-Fi, cell phones, microwaves, X-rays, lasers, every electromagnetic technology. Plus the basis of special relativity (Einstein's starting question was 'why is Maxwell's $c$ the same in every frame?').",
    intuition: "Changing electric fields create magnetic fields. Changing magnetic fields create electric fields. Together they sustain each other, propagating through empty space as light. All of electromagnetism follows from four short equations."
  },

  "special-relativity": {
    whyExists: "Maxwell said the speed of light is the same constant for everyone. But if you're chasing a light beam at half the speed of light, shouldn't it appear slower? Einstein resolved the paradox: space and time themselves adjust so that $c$ stays constant.",
    whyImportant: "GPS satellites must correct for both special and general relativity to give accurate positions. Particle accelerators only work because of relativistic mass. Nuclear energy comes from $E = mc^2$.",
    intuition: "Moving clocks run slow; moving rulers shrink; mass and energy are interchangeable. Past and future split differently for differently-moving observers. The speed of light is the universal speed limit."
  },

  "general-relativity": {
    whyExists: "Newton's gravity says masses pull each other instantly, which conflicts with relativity. Einstein replaced 'force of gravity' with 'curved spacetime'. Mass tells spacetime how to curve; curved spacetime tells matter how to move.",
    whyImportant: "GPS, black holes, gravitational waves (detected by LIGO in 2015), cosmology, the structure of the universe, every star and galaxy. The biggest predictive triumph of any physics theory.",
    intuition: "Spacetime is like a stretched rubber sheet. Heavy things create dents. Other things roll into the dents not because of force but because the geometry guides them. Near a black hole, the dent is so deep that even light can't climb out."
  },

  "lagrangian-hamiltonian": {
    whyExists: "Newton's laws work, but they're awkward for constrained systems (a pendulum on a moving cart). Lagrange and Hamilton reformulated mechanics so that you write down energy and the equations follow automatically.",
    whyImportant: "The foundation of all of modern physics — quantum mechanics, quantum field theory, general relativity, and string theory are all most naturally written in Lagrangian/Hamiltonian form. Plus it's the cleanest way to discover conservation laws (Noether's theorem).",
    intuition: "Nature is lazy — systems follow the path that minimizes the action (∫ Lagrangian dt). From this 'principle of least action' you can derive every equation of motion, plus learn that every symmetry of nature implies a conservation law."
  },

  "statistical-mechanics": {
    whyExists: "Thermodynamics works with bulk quantities (pressure, temperature, entropy). Statistical mechanics derives those bulk quantities from the microscopic chaos of zillions of atoms, using probability.",
    whyImportant: "Explains why thermodynamics works. Predicts phase transitions, magnetism, black-body radiation, heat capacities, semiconductors, lasers. Foundation of modern condensed matter physics. Concepts now also used in finance, biology, networks, and machine learning.",
    intuition: "Don't track every particle — track the probability distribution over states. Hot systems have many likely states (high entropy). Cold systems concentrate on the lowest-energy states. The partition function $Z$ encodes everything."
  },

  "qm-foundations": {
    whyExists: "Around 1900, classical physics said atoms shouldn't even exist — electrons should spiral into the nucleus and radiate away their energy. They obviously don't. Reality needed new rules. Those rules are quantum mechanics, and they describe nature at small scales.",
    whyImportant: "Every electronic device, every laser, every chemistry result, every modern material, MRI, GPS atomic clocks. Tiny things just don't obey classical rules — and the universe is made of tiny things.",
    intuition: "A particle has a wavefunction $\\psi$, and $|\\psi|^2$ gives the probability of finding it somewhere. Observables become operators. Some pairs (position/momentum) can't both be sharply defined (Heisenberg). Measurement randomly picks an outcome from the wavefunction's probabilities."
  },

  "qm-1d": {
    whyExists: "Before tackling the full 3D world, physicists solve canonical 1D quantum problems — particle in a box, harmonic oscillator, tunneling. These simple cases teach the intuitions you need everywhere else.",
    whyImportant: "Tunneling explains nuclear fusion in stars, scanning tunneling microscopes, flash memory, alpha decay. The harmonic oscillator is the foundation of all of quantum field theory. The infinite well models electrons in nanostructures and quantum dots.",
    intuition: "Bound particles have discrete energy levels (quantization), like notes on a guitar string. Particles can leak through barriers they classically couldn't cross (tunneling). There's always a non-zero lowest energy (zero-point energy)."
  },

  "atomic-physics": {
    whyExists: "Atoms are the building blocks of everything you can see. To understand chemistry, materials, light, and life, you need to know how atoms are built — and that's a quantum mechanical question.",
    whyImportant: "Lasers, atomic clocks (GPS), all of chemistry, spectroscopy (how we know what stars are made of), quantum computing using atoms, atomic-scale electronics, MRI, fluorescence in biology.",
    intuition: "Electrons in an atom occupy quantized shells. The pattern (n, ℓ, m, s) explains the periodic table. Pauli exclusion stops electrons from piling up in the same state. Spectral lines come from electrons jumping between shells."
  },

  "solid-state": {
    whyExists: "Atoms stuck together in a crystal don't behave like a bag of separate atoms. Their electrons share, form bands, and the whole solid develops properties no individual atom has — like conductivity, magnetism, hardness.",
    whyImportant: "The silicon revolution. Every chip, every LED, every solar panel, every magnetic storage device, every superconductor, every semiconductor, every laser diode is solid-state physics in practice.",
    intuition: "Pack atoms together → electron energy levels broaden into bands. A fully filled band can't carry current (insulator). A partly filled band can (metal). A small gap between bands → semiconductor, tunable with doping."
  },

  "nuclear": {
    whyExists: "Inside every atom is a tiny nucleus that holds enormous energy. Understanding what binds it, what tears it apart, and what comes out has profound consequences — from medicine to weapons to the stars.",
    whyImportant: "Nuclear power, nuclear weapons, medical imaging (PET, SPECT), cancer treatment (radiation therapy), carbon dating, smoke detectors, fusion energy research, the energy of stars.",
    intuition: "The strong force binds protons and neutrons against electric repulsion — but only at very short range. Some nuclei are stable; others decay (alpha, beta, gamma) toward stability. Fission breaks heavy nuclei; fusion combines light ones. Both release energy when moving toward iron."
  },

  "particle-physics": {
    whyExists: "What is matter made of, at the deepest level? Smash particles together hard enough and you see what comes out. The Standard Model is the result: a catalog of all known fundamental particles and forces (except gravity).",
    whyImportant: "Reveals the deepest known laws of nature. Spawned the World Wide Web (invented at CERN). Pushes accelerator and detector technology used in medicine and industry. Opens questions like: what is dark matter? Why is there more matter than antimatter?",
    intuition: "Quarks (six flavors) make protons and neutrons. Leptons (electrons and friends, six total) don't feel the strong force. Force carriers: photon (EM), gluons (strong), W/Z (weak), and the Higgs gives mass to the others. That's nearly everything we currently know."
  },

  "astrophysics-cosmology": {
    whyExists: "How do stars work? Where did galaxies come from? How old is the universe? Astrophysics applies physics to the cosmos; cosmology applies it to the universe as a whole. These are humanity's oldest scientific questions.",
    whyImportant: "Tells us our origin and likely fate. Stars made the atoms in your body. Galaxies hold dark matter we can't see. The Big Bang theory and the cosmic microwave background reveal the universe's earliest moments. Gravitational waves opened a new window on black holes and neutron stars.",
    intuition: "Stars fuse hydrogen → helium → heavier elements, releasing the energy that lights them. Heavy elements form in supernovae. The universe is expanding (Hubble's law). Going back in time, everything was hotter and denser — leading to the Big Bang model with the CMB as its leftover heat."
  },

  "plasma-physics": {
    whyExists: "Heat a gas hot enough and electrons rip off their atoms. You get a soup of charged particles — plasma, the fourth state of matter. It behaves nothing like a normal gas because charges couple via long-range electromagnetic forces.",
    whyImportant: "99% of the visible universe is plasma (stars, interstellar gas). Fusion energy research (ITER) is plasma physics. Plasma TVs, neon signs, lightning, the aurora, plasma cutters in industry, semiconductor manufacturing.",
    intuition: "A plasma is electrically conducting and tied to magnetic fields. Its collective behavior dominates: waves, instabilities, confinement issues. Confining plasma hot enough and long enough for fusion is one of the hardest problems in physics."
  },

  "fluid-dynamics": {
    whyExists: "Static fluids (pressure, buoyancy) are tractable. But moving fluids are notoriously hard — the Navier-Stokes equations describe flow, but solving them exactly is one of the great unsolved problems of mathematics.",
    whyImportant: "Weather, climate, oceans, blood flow, airplanes, rockets, ships, pipelines, racing cars, wind turbines, sediment transport. Turbulence — the chaotic regime of fluid flow — is everywhere and barely understood.",
    intuition: "Reynolds number compares inertia to viscosity. Low Reynolds: smooth, predictable laminar flow. High Reynolds: chaotic turbulence with energy cascading down to smaller and smaller eddies. Most real flows are turbulent."
  }
};
