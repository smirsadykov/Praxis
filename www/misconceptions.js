// Common misconceptions per topic — confronts wrong intuitions head-on.
// Each entry: { wrong: "thing students often think", right: "actual correction" }
window.MISCONCEPTIONS = {

  // ===== MATH =====

  "fractions-percentages": [
    { wrong: "$\\tfrac{1}{2} + \\tfrac{1}{3} = \\tfrac{2}{5}$ — just add tops and bottoms.", right: "You need a common denominator first: $\\tfrac{3}{6} + \\tfrac{2}{6} = \\tfrac{5}{6}$. Adding numerators and denominators directly only works for multiplication." },
    { wrong: "$50\\%$ off twice equals $100\\%$ off (free).", right: "Each discount applies to the new price. $\\$100 \\to \\$50 \\to \\$25$. The second $50\\%$ acts on a smaller amount. Percentages don't simply add when compounded." },
    { wrong: "If a stock drops $20\\%$ then rises $20\\%$, you're back to where you started.", right: "$\\$100 \\to \\$80 \\to \\$96$. Percent decreases and increases use different bases, so they don't cancel." }
  ],

  "exponents-roots": [
    { wrong: "$\\sqrt{a + b} = \\sqrt a + \\sqrt b$.", right: "Test: $\\sqrt{9 + 16} = 5$, but $\\sqrt 9 + \\sqrt{16} = 3 + 4 = 7$. Roots don't distribute over sums — only over products." },
    { wrong: "$(a + b)^2 = a^2 + b^2$.", right: "$(a+b)^2 = a^2 + 2ab + b^2$. Forgetting the cross term $2ab$ is one of the most common algebra mistakes." },
    { wrong: "$x^a \\cdot y^a = (xy)^{2a}$.", right: "$x^a \\cdot y^a = (xy)^a$. Only the bases combine; the exponent stays the same. Don't double it." }
  ],

  "linear-equations": [
    { wrong: "When dividing both sides by a negative number, the equation flips.", right: "Equations (with $=$) don't flip — only inequalities do. $-2x = 6 \\Rightarrow x = -3$, no flip needed." },
    { wrong: "You can multiply both sides by $x$ without restrictions.", right: "If $x$ might be zero, you can introduce extraneous solutions. Always check after multiplying or dividing by an expression containing the unknown." }
  ],

  "inequalities": [
    { wrong: "$|x| < 5$ means $x < 5$.", right: "$|x| < 5$ means $x$ is within 5 of zero in EITHER direction: $-5 < x < 5$. Don't forget the lower bound." },
    { wrong: "Multiplying both sides by anything keeps the inequality direction.", right: "Multiplying by a NEGATIVE flips the direction. $-2x > 4 \\Rightarrow x < -2$ (flipped)." }
  ],

  "quadratic-equations": [
    { wrong: "$x^2 = 4 \\Rightarrow x = 2$.", right: "$x^2 = 4 \\Rightarrow x = \\pm 2$. Both $2$ and $-2$ square to $4$. Forgetting the negative root is endemic." },
    { wrong: "The discriminant just tells whether real roots exist.", right: "It tells more: $\\Delta > 0$ gives two real roots, $\\Delta = 0$ gives one (repeated), $\\Delta < 0$ gives a complex conjugate pair — never just one complex root." }
  ],

  "functions-graphs": [
    { wrong: "$f(a + b) = f(a) + f(b)$ for any function.", right: "Only true for LINEAR functions through origin. $f(x) = x^2$: $f(1 + 1) = 4 \\neq f(1) + f(1) = 2$." },
    { wrong: "Inverse means reciprocal: $f^{-1}(x) = 1/f(x)$.", right: "$f^{-1}$ is the inverse FUNCTION, not the reciprocal. $f^{-1}(f(x)) = x$. For $f(x) = 2x$: $f^{-1}(x) = x/2$, not $1/(2x)$." }
  ],

  "logarithms": [
    { wrong: "$\\log(a + b) = \\log a + \\log b$.", right: "$\\log a + \\log b = \\log(ab)$, not $\\log(a + b)$. Log turns multiplication into addition, not addition into addition." },
    { wrong: "$\\log(x)$ is defined for all $x$.", right: "Logs require positive arguments. $\\log 0$ is undefined (limit is $-\\infty$); $\\log(\\text{negative})$ is undefined in real numbers." }
  ],

  "trigonometry": [
    { wrong: "$\\sin 2\\theta = 2 \\sin\\theta$.", right: "$\\sin 2\\theta = 2 \\sin\\theta \\cos\\theta$. Sine doesn't distribute over multiplication. Test: $\\sin 90° = 1$, but $2 \\sin 45° = \\sqrt 2 \\neq 1$." },
    { wrong: "Angles must be measured in degrees.", right: "Calculus and physics use RADIANS — they make derivatives clean ($\\frac{d}{dx}\\sin x = \\cos x$ in radians only)." }
  ],

  "limits": [
    { wrong: "$0.999\\ldots$ is slightly less than $1$.", right: "$0.999\\ldots = 1$ exactly. The notation means a limit, and the limit equals 1. Different representations of the same number." },
    { wrong: "If $\\lim f(x) = L$, then $f(a) = L$.", right: "Not necessarily. The limit cares about values NEAR $a$, not AT $a$. The function could be undefined or different at $a$." },
    { wrong: "$\\infty$ is a number you can do arithmetic with.", right: "$\\infty$ is shorthand for 'grows without bound' — not a number. $\\infty - \\infty$, $\\infty/\\infty$, $0 \\cdot \\infty$ are all INDETERMINATE forms requiring careful analysis." }
  ],

  "derivatives": [
    { wrong: "$(fg)' = f' g'$.", right: "$(fg)' = f'g + fg'$. The product rule has TWO terms — one for differentiating each factor in turn, keeping the other intact." },
    { wrong: "$\\frac{d}{dx}(x^x) = x \\cdot x^{x-1}$.", right: "Power rule doesn't apply when the EXPONENT also depends on $x$. Use logarithmic differentiation: $\\frac{d}{dx}(x^x) = x^x(\\ln x + 1)$." }
  ],

  "integrals": [
    { wrong: "$\\int f(x) g(x)\\,dx = \\left(\\int f\\,dx\\right)\\left(\\int g\\,dx\\right)$.", right: "No product rule for integrals. Use integration by parts, $u$-substitution, or other techniques." },
    { wrong: "$\\int \\frac{1}{x}\\,dx = \\frac{x^0}{0}$ via power rule.", right: "Power rule fails at $n = -1$ (division by zero). The correct antiderivative is $\\ln|x| + C$ — special exception." }
  ],

  "probability": [
    { wrong: "After 10 heads in a row, tails is 'due'.", right: "Gambler's fallacy. Each flip is independent. $P(T)$ on the next flip is still $1/2$, regardless of what came before." },
    { wrong: "Two events are independent if $P(A) + P(B) = 1$.", right: "Independence means $P(A \\cap B) = P(A) P(B)$. The sum-to-1 condition is about complementary events." },
    { wrong: "A small sample is representative of the population.", right: "Small samples have large variance. The law of large numbers needs MANY trials. Small samples can wildly mislead." }
  ],

  "statistics": [
    { wrong: "Mean and average are different things.", right: "They're the same word. 'Average' in everyday speech usually means the arithmetic mean. (Statistics also has 'weighted mean,' 'geometric mean,' etc.)" },
    { wrong: "Correlation implies causation.", right: "Two variables can correlate without one causing the other — both might depend on a third variable, or it could be coincidence. A famous trap." },
    { wrong: "$p < 0.05$ means there's a $5\\%$ chance the result is wrong.", right: "$p$ is the probability of seeing data this extreme assuming the null hypothesis is true. It says nothing directly about the probability the null is true." }
  ],

  "complex-numbers": [
    { wrong: "Complex numbers aren't 'real' numbers — they're imaginary.", right: "Complex numbers are perfectly real mathematical objects. 'Imaginary' is a historical misnomer. They describe rotation, waves, AC current, and quantum states — physically real things." },
    { wrong: "$\\sqrt{-1} = i$, so $\\sqrt{-1} \\cdot \\sqrt{-1} = \\sqrt{(-1)(-1)} = \\sqrt 1 = 1$.", right: "The identity $\\sqrt a \\sqrt b = \\sqrt{ab}$ doesn't extend to negative numbers. $i \\cdot i = i^2 = -1$, period." }
  ],

  "vector-algebra": [
    { wrong: "$\\vec a \\cdot \\vec b$ is a vector.", right: "Dot product is a SCALAR (single number). Cross product $\\vec a \\times \\vec b$ is a vector. Don't confuse them." },
    { wrong: "Vectors are just lists of numbers.", right: "A vector is a geometric object (arrow). The list of components depends on the coordinate system. Same vector, different numbers in different coordinates." }
  ],

  "real-analysis": [
    { wrong: "Every sequence with bounded terms converges.", right: "Bounded doesn't mean convergent — see $(-1)^n$. Bolzano-Weierstrass only guarantees a convergent SUBSEQUENCE." },
    { wrong: "Continuous + bounded ⇒ uniformly continuous.", right: "Need the domain to be compact (closed and bounded). $f(x) = \\sin(1/x)$ on $(0, 1]$ is continuous and bounded but not uniformly continuous." }
  ],

  // ===== PHYSICS =====

  "kinematics": [
    { wrong: "Heavy objects fall faster than light ones.", right: "In vacuum, all objects fall at the same rate (Galileo). Air resistance is what makes feathers slower than bowling balls — not gravity." },
    { wrong: "A projectile's horizontal motion affects how fast it falls.", right: "Horizontal and vertical motions are INDEPENDENT. A dropped ball and a horizontally launched one (from the same height) hit the ground at the same time." }
  ],

  "newtons-laws": [
    { wrong: "Moving things have a 'force of motion' acting on them.", right: "Newton's 1st law: objects in motion stay in motion WITHOUT any force. Force is needed to CHANGE motion, not maintain it. Aristotle thought otherwise — he was wrong." },
    { wrong: "Action and reaction cancel out.", right: "They act on DIFFERENT objects, so they don't cancel for either object. The action acts on body A; the reaction on body B. Each object's net force is computed separately." },
    { wrong: "Heavier objects need more force to keep moving.", right: "Once moving (no friction), they keep moving with NO force. Heavier objects only need more force to ACCELERATE — that's $F = ma$." }
  ],

  "momentum-impulse": [
    { wrong: "Momentum and kinetic energy are the same thing.", right: "Different quantities. Momentum $p = mv$ is a vector. KE $= \\tfrac{1}{2}mv^2$ is a scalar. Both are conserved in elastic collisions; only momentum is conserved in inelastic." },
    { wrong: "A bullet hitting a wall: the wall exerts more force than the bullet on the wall.", right: "Equal and opposite (Newton's 3rd law). The wall doesn't 'win' the force exchange. It does, however, accelerate much less because of its huge mass." }
  ],

  "energy-work": [
    { wrong: "Energy is 'lost' to friction.", right: "Energy is converted to HEAT (thermal energy), not destroyed. Total energy is always conserved. 'Lost' usually means 'no longer useful for work.'" },
    { wrong: "If no friction acts, you do no work walking on a level floor.", right: "Walking on a level floor with no friction would mean you'd slip. Friction does NEGATIVE work on your moving foot — but it's friction (between foot and floor) that lets you walk." },
    { wrong: "Holding a heavy book takes work (you get tired).", right: "Mechanically, no work is done (no displacement). Muscle fatigue comes from biochemistry, not physics. Physics work requires force AND motion in the same direction." }
  ],

  "circular-gravitation": [
    { wrong: "Centrifugal force throws objects outward in a turn.", right: "Centrifugal force is FICTITIOUS — it appears only in a rotating frame. From outside, the object is just trying to go straight (Newton's 1st), but a centripetal force (friction, tension, etc.) bends it inward." },
    { wrong: "Astronauts in the ISS are in zero gravity.", right: "They're in FREE FALL. Earth's gravity at ISS altitude is about $90\\%$ of surface gravity. They feel weightless because they (and the station) fall at the same rate." },
    { wrong: "Gravity needs something to pull through (a medium).", right: "Gravity acts across empty space — no medium needed. Same is true of EM force." }
  ],

  "shm": [
    { wrong: "A heavier pendulum swings slower.", right: "Pendulum period $T = 2\\pi\\sqrt{L/g}$ — independent of mass. Galileo's discovery. Only length and gravity matter (for small swings)." },
    { wrong: "Doubling the amplitude doubles the period.", right: "SHM is special: period is independent of amplitude. A small swing and a big swing of the same pendulum take the same time (for small angles)." }
  ],

  "rotational": [
    { wrong: "A heavier wheel always has more rotational inertia.", right: "Depends on where the mass is. A hollow ring has more moment of inertia than a solid disk of the same mass. Distribution matters as much as total mass." }
  ],

  "fluids": [
    { wrong: "Hydrostatic pressure depends on the shape of the container.", right: "Pressure at depth $h$ is $\\rho g h$ regardless of container shape. A narrow tube of water and a wide swimming pool at the same depth have the same pressure." },
    { wrong: "Things float because they're 'lighter than water.'", right: "They float because their AVERAGE density is less than the fluid's. A steel ship floats because it displaces lots of water relative to its weight, despite steel being denser than water." }
  ],

  "thermodynamics": [
    { wrong: "Heat and temperature are the same thing.", right: "Temperature measures average molecular KE. Heat is energy in transit due to temperature difference. A bucket of warm water has more heat than a teaspoon of boiling water, even though the teaspoon has higher temperature." },
    { wrong: "Cold flows into hot objects.", right: "Heat flows from HOT to COLD. 'Cold' isn't a substance — it's just the absence of heat. You don't 'feel cold air' coming in; warm body heat leaves." },
    { wrong: "Entropy always increases.", right: "TOTAL entropy of an isolated system (and ultimately the universe) never decreases. Local entropy CAN decrease (refrigerators, life) at the cost of increasing it more elsewhere." },
    { wrong: "Heat rises.", right: "Hot AIR rises (lower density, buoyancy). Heat itself flows from hot to cold in any direction — through walls, floors, ceilings. Don't confuse fluid convection with heat in general." }
  ],

  "waves": [
    { wrong: "Waves carry matter from one place to another.", right: "Waves transport ENERGY and information, not matter. The medium itself (water, air) oscillates locally but doesn't travel with the wave." },
    { wrong: "Sound and light are basically the same kind of wave.", right: "Sound is a mechanical wave needing a medium. Light is EM and works in vacuum. Different speeds, different physics. Sound is longitudinal; light is transverse." }
  ],

  "optics-geometric": [
    { wrong: "Light always travels in straight lines.", right: "Only in a uniform medium. At interfaces, light refracts (Snell's law). Near very dense objects, GR bends it. Diffraction also bends light." },
    { wrong: "A virtual image isn't real — you can't see it.", right: "You CAN see virtual images — that's what mirrors and magnifying glasses show. 'Virtual' just means light rays only APPEAR to come from there; they don't actually converge. Real images can be projected on a screen; virtual cannot." }
  ],

  "electrostatics": [
    { wrong: "Electric field lines are real, physical things.", right: "Field lines are a visualization tool. The field $\\vec E$ is the real entity. Where field lines are dense, the field is strong — but there are infinitely many lines (we draw a few)." },
    { wrong: "Inside a conductor, the electric field is just very small.", right: "In equilibrium, $\\vec E = 0$ EXACTLY inside a conductor. Free charges rearrange to cancel any internal field. That's why you're safe in a car during lightning (Faraday cage)." }
  ],

  "electric-circuits": [
    { wrong: "Electrons travel at the speed of light through wires.", right: "Individual electrons drift very slowly (mm/s). The signal — the electric field — travels near the speed of light. The lights turn on quickly even though electrons crawl." },
    { wrong: "Current is 'used up' in a circuit.", right: "Current is the same throughout a simple loop (charge conservation). Energy is dissipated (in resistors, bulbs), not current. KCL: in = out at any junction." }
  ],

  "magnetism-induction": [
    { wrong: "Magnets attract everything iron-like all the time.", right: "Ferromagnets (iron, nickel, cobalt) are attracted only to OTHER magnetized or polarizable materials. Aluminum and copper, while conductive, aren't ferromagnetic." },
    { wrong: "A magnetic monopole is just a very strong magnet.", right: "A monopole is a hypothetical magnetic charge — pure north or pure south, never paired. None has ever been found. Cutting a magnet in half always yields two complete magnets." }
  ],

  "maxwell-em": [
    { wrong: "EM waves need a medium (the 'ether') to travel through.", right: "Maxwell's equations show EM waves propagate through vacuum at $c$. The Michelson-Morley experiment ruled out a luminiferous ether. Einstein built relativity on this." }
  ],

  "special-relativity": [
    { wrong: "Only one observer 'really' experiences time dilation.", right: "Each observer sees the OTHER's clocks running slow. There's no absolute rest frame. Reconciliation comes from the relativity of simultaneity." },
    { wrong: "Nothing can travel faster than light, but information could.", right: "No: causality requires information stay at or below $c$. Otherwise paradoxes (effects before causes) emerge in some reference frames." },
    { wrong: "$E = mc^2$ only applies to nuclear physics.", right: "It applies to ALL mass and energy. A burning candle loses tiny mass — the mass equivalent of the radiated energy. Just usually negligible compared to chemical-bond energies." }
  ],

  "general-relativity": [
    { wrong: "Black holes are cosmic vacuum cleaners that suck everything in.", right: "Black holes only attract via normal gravity. Replace the Sun with a same-mass black hole and Earth's orbit doesn't change. You'd have to GET CLOSE to fall in." }
  ],

  "qm-foundations": [
    { wrong: "An electron is just a tiny ball circling the nucleus.", right: "Electrons in atoms aren't particles tracing orbits — they're standing waves with probability distributions (orbitals). Bohr's planetary picture was wrong (though useful for energies)." },
    { wrong: "The uncertainty principle is about our measurement limits.", right: "It's FUNDAMENTAL — not about technology. Position and momentum can't both be sharply defined at all. Even an idealized perfect measurement runs into it." }
  ],

  "qm-1d": [
    { wrong: "A particle 'really' is at a specific location, we just don't know where.", right: "In standard QM, before measurement, the particle has no definite position. Bell's theorem ruled out local hidden variables. Reality is genuinely probabilistic at small scales." },
    { wrong: "Tunneling means the particle 'goes through' the barrier.", right: "The wavefunction extends into the barrier (decaying exponentially) and has nonzero amplitude beyond. 'Going through' is a classical picture imposed on a wave phenomenon." }
  ],

  "atomic-physics": [
    { wrong: "Electrons orbit the nucleus like planets orbit the Sun.", right: "Classical orbits are wrong (would radiate energy and crash). Electrons occupy quantized orbitals — probability clouds with shapes set by quantum numbers." }
  ],

  "nuclear": [
    { wrong: "A nuclear reaction violates conservation of mass.", right: "Mass-energy is conserved. The 'missing mass' is converted to energy via $E = mc^2$. Total mass-energy stays constant." },
    { wrong: "All radioactive decay is dangerous.", right: "Depends on the type and dose. Bananas are mildly radioactive (potassium-40). Your body emits gamma rays. Risk comes from concentrated exposure to high-energy radiation." }
  ],

  "statistical-mechanics": [
    { wrong: "Entropy means disorder.", right: "Entropy is the logarithm of the number of microstates consistent with a macrostate. Higher entropy = more equivalent ways to be that state. 'Disorder' is a rough analogy that breaks for some systems." }
  ],

  "astrophysics-cosmology": [
    { wrong: "The Big Bang happened somewhere — there's a center to the universe.", right: "Space itself expands; the Big Bang happened everywhere at once. No center, no edge (or at least none we can see)." },
    { wrong: "Dark matter is just regular matter we haven't seen yet.", right: "Dark matter doesn't interact with light at all. It's not just dim — it's invisible to EM observation. Constitutes ~85% of all matter." }
  ],

  "fluid-dynamics": [
    { wrong: "Airplane lift comes from longer path over the wing's top.", right: "The 'equal-time' argument is wrong (air doesn't have to meet at the trailing edge). Lift comes from circulation around the wing creating downwash; Newton's 3rd law deflects air down, lifting the wing up." }
  ]
};
