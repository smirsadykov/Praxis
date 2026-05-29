// Hand-crafted SVG diagrams for topics where visualization matters.
// Each entry: { svg: "<svg>...</svg>", caption: "what to look at" }
// Color palette: --muted #9aa3c2, --accent #6ea8ff, --accent-2 #b48cff,
// --math #5eead4, --physics #fca57a, --good #4ade80, --text #e8ecf7
window.DIAGRAMS = {

  // ===== MATH =====

  "plane-geometry": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <polygon points="60,180 280,180 280,40" fill="rgba(110,168,255,0.12)" stroke="#6ea8ff" stroke-width="2"/>
      <rect x="260" y="160" width="20" height="20" fill="none" stroke="#9aa3c2" stroke-width="1.5"/>
      <line x1="60" y1="180" x2="280" y2="40" stroke="#5eead4" stroke-width="2"/>
      <text x="160" y="200" fill="#e8ecf7" font-size="16">a = 4</text>
      <text x="295" y="115" fill="#e8ecf7" font-size="16">b = 3</text>
      <text x="120" y="105" fill="#5eead4" font-size="16">c = 5</text>
      <text x="175" y="60" fill="#9aa3c2" font-size="13">a² + b² = c²</text>
    </svg>`,
    caption: "A 3-4-5 right triangle. The Pythagorean theorem relates the squares of the legs to the hypotenuse: $3^2 + 4^2 = 9 + 16 = 25 = 5^2$. Always works for right triangles."
  },

  "coordinate-geometry": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="180" x2="340" y2="180" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="180" y1="20" x2="180" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <polygon points="340,180 332,176 332,184" fill="#9aa3c2"/>
      <polygon points="180,20 176,28 184,28" fill="#9aa3c2"/>
      <text x="345" y="184" fill="#9aa3c2" font-size="13">x</text>
      <text x="186" y="20" fill="#9aa3c2" font-size="13">y</text>
      <line x1="60" y1="200" x2="320" y2="40" stroke="#6ea8ff" stroke-width="2.5"/>
      <circle cx="180" cy="120" r="4" fill="#fca57a"/>
      <text x="190" y="135" fill="#fca57a" font-size="13">(0, b)</text>
      <text x="240" y="80" fill="#6ea8ff" font-size="14">y = mx + b</text>
      <text x="100" y="155" fill="#9aa3c2" font-size="12">slope m</text>
    </svg>`,
    caption: "A line in slope-intercept form. The slope $m$ tells you how steep the line is; the $y$-intercept $b$ is where it crosses the $y$-axis."
  },

  "conic-sections": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="110" x2="340" y2="110" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="180" y1="10" x2="180" y2="210" stroke="#9aa3c2" stroke-width="1"/>
      <path d="M 100 200 Q 180 -20 260 200" fill="none" stroke="#6ea8ff" stroke-width="2"/>
      <ellipse cx="180" cy="110" rx="100" ry="50" fill="none" stroke="#5eead4" stroke-width="2"/>
      <path d="M 60 60 Q 130 110 60 160" fill="none" stroke="#fca57a" stroke-width="2"/>
      <path d="M 300 60 Q 230 110 300 160" fill="none" stroke="#fca57a" stroke-width="2"/>
      <text x="220" y="40" fill="#6ea8ff" font-size="13">parabola</text>
      <text x="195" y="100" fill="#5eead4" font-size="13">ellipse</text>
      <text x="35" y="200" fill="#fca57a" font-size="13">hyperbola</text>
    </svg>`,
    caption: "Slice a cone with a plane at different angles and you get a circle, ellipse, parabola, or hyperbola. Eccentricity classifies them: $0$, $0$–$1$, $1$, $>1$."
  },

  "trigonometry": {
    svg: `<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="140" x2="300" y2="140" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="160" y1="20" x2="160" y2="240" stroke="#9aa3c2" stroke-width="1"/>
      <circle cx="160" cy="140" r="90" fill="none" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="160" y1="140" x2="220" y2="50" stroke="#e8ecf7" stroke-width="2"/>
      <line x1="220" y1="140" x2="220" y2="50" stroke="#5eead4" stroke-width="2"/>
      <line x1="160" y1="140" x2="220" y2="140" stroke="#b48cff" stroke-width="2"/>
      <path d="M 200 140 A 40 40 0 0 0 195 110" fill="none" stroke="#fca57a" stroke-width="2"/>
      <circle cx="220" cy="50" r="3.5" fill="#e8ecf7"/>
      <text x="225" y="48" fill="#e8ecf7" font-size="13">(cos θ, sin θ)</text>
      <text x="225" y="100" fill="#5eead4" font-size="14">sin θ</text>
      <text x="178" y="160" fill="#b48cff" font-size="14">cos θ</text>
      <text x="195" y="135" fill="#fca57a" font-size="13">θ</text>
      <text x="252" y="195" fill="#9aa3c2" font-size="12">radius 1</text>
    </svg>`,
    caption: "Unit circle: any angle $\\theta$ traces a point $(\\cos\\theta, \\sin\\theta)$ on a radius-1 circle. The Pythagorean identity $\\sin^2 + \\cos^2 = 1$ is just $x^2 + y^2 = 1$ for that point."
  },

  "quadratic-equations": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="180" x2="340" y2="180" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="180" y1="20" x2="180" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <path d="M 60 60 Q 180 240 300 60" fill="none" stroke="#6ea8ff" stroke-width="2.5"/>
      <circle cx="120" cy="180" r="4" fill="#fca57a"/>
      <circle cx="240" cy="180" r="4" fill="#fca57a"/>
      <circle cx="180" cy="158" r="4" fill="#5eead4"/>
      <text x="100" y="200" fill="#fca57a" font-size="13">root 1</text>
      <text x="220" y="200" fill="#fca57a" font-size="13">root 2</text>
      <text x="190" y="155" fill="#5eead4" font-size="13">vertex</text>
      <text x="60" y="50" fill="#6ea8ff" font-size="14">y = ax² + bx + c</text>
    </svg>`,
    caption: "A quadratic graphs as a parabola. It crosses the $x$-axis at the roots (if real). The vertex is the maximum (if $a < 0$) or minimum (if $a > 0$) — at $x = -b/(2a)$."
  },

  "functions-graphs": {
    svg: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="200" x2="340" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="180" y1="20" x2="180" y2="220" stroke="#9aa3c2" stroke-width="1"/>
      <path d="M 60 220 Q 180 -60 300 220" fill="none" stroke="#6ea8ff" stroke-width="2"/>
      <path d="M 180 200 C 220 130 260 100 320 80" fill="none" stroke="#5eead4" stroke-width="2"/>
      <path d="M 200 35 C 230 60 290 195 320 198" fill="none" stroke="#fca57a" stroke-width="2"/>
      <text x="60" y="40" fill="#6ea8ff" font-size="13">y = x²</text>
      <text x="265" y="70" fill="#5eead4" font-size="13">y = √x</text>
      <text x="220" y="50" fill="#fca57a" font-size="13">y = 1/x</text>
    </svg>`,
    caption: "Three foundational shapes. Polynomial ($x^2$): symmetric. Root ($\\sqrt x$): grows but slows. Rational ($1/x$): two branches separated by an asymptote."
  },

  "logarithms": {
    svg: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="140" x2="340" y2="140" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="120" y1="20" x2="120" y2="220" stroke="#9aa3c2" stroke-width="1"/>
      <path d="M 50 30 C 90 60 110 130 120 140 C 130 150 160 165 340 175" fill="none" stroke="#fca57a" stroke-width="2.5"/>
      <path d="M 30 175 C 150 165 180 150 190 140 C 200 130 220 60 260 30" fill="none" stroke="#6ea8ff" stroke-width="2.5"/>
      <line x1="20" y1="20" x2="340" y2="220" stroke="#9aa3c2" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="270" y="55" fill="#6ea8ff" font-size="14">y = eˣ</text>
      <text x="280" y="195" fill="#fca57a" font-size="14">y = ln x</text>
      <text x="30" y="40" fill="#9aa3c2" font-size="12">y = x</text>
    </svg>`,
    caption: "$\\ln x$ and $e^x$ are mirror images across $y = x$ — they're inverse functions. $e^x$ blows up; $\\ln x$ grows slowly forever."
  },

  "complex-numbers": {
    svg: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="140" x2="340" y2="140" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="180" y1="20" x2="180" y2="220" stroke="#9aa3c2" stroke-width="1"/>
      <text x="345" y="143" fill="#9aa3c2" font-size="13">Re</text>
      <text x="186" y="20" fill="#9aa3c2" font-size="13">Im</text>
      <circle cx="180" cy="140" r="85" fill="none" stroke="#9aa3c2" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="180" y1="140" x2="240" y2="80" stroke="#6ea8ff" stroke-width="2.5"/>
      <polygon points="240,80 232,80 240,88" fill="#6ea8ff"/>
      <circle cx="240" cy="80" r="4" fill="#fca57a"/>
      <line x1="240" y1="80" x2="240" y2="140" stroke="#5eead4" stroke-width="1.5" stroke-dasharray="3,3"/>
      <line x1="180" y1="140" x2="240" y2="140" stroke="#5eead4" stroke-width="1.5" stroke-dasharray="3,3"/>
      <path d="M 215 140 A 35 35 0 0 0 215 115" fill="none" stroke="#b48cff" stroke-width="1.5"/>
      <text x="245" y="78" fill="#fca57a" font-size="13">z = a + bi</text>
      <text x="195" y="160" fill="#5eead4" font-size="12">a</text>
      <text x="245" y="118" fill="#5eead4" font-size="12">b</text>
      <text x="208" y="132" fill="#b48cff" font-size="12">θ</text>
      <text x="195" y="115" fill="#6ea8ff" font-size="12">|z| = r</text>
    </svg>`,
    caption: "A complex number is a 2D point: real part horizontal, imaginary vertical. In polar form, $z = re^{i\\theta}$ — magnitude $r$ and angle $\\theta$ replace the rectangular components."
  },

  "vector-algebra": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="60" y1="170" x2="200" y2="60" stroke="#6ea8ff" stroke-width="2.5"/>
      <polygon points="200,60 190,67 196,73" fill="#6ea8ff"/>
      <line x1="200" y1="60" x2="320" y2="100" stroke="#fca57a" stroke-width="2.5"/>
      <polygon points="320,100 311,98 313,107" fill="#fca57a"/>
      <line x1="60" y1="170" x2="320" y2="100" stroke="#5eead4" stroke-width="2.5" stroke-dasharray="6,4"/>
      <polygon points="320,100 311,99 312,108" fill="#5eead4"/>
      <text x="100" y="100" fill="#6ea8ff" font-size="14">a</text>
      <text x="260" y="70" fill="#fca57a" font-size="14">b</text>
      <text x="170" y="155" fill="#5eead4" font-size="14">a + b</text>
    </svg>`,
    caption: "Vector addition tip-to-tail: place $\\vec b$ at the tip of $\\vec a$, and $\\vec a + \\vec b$ is the arrow from $\\vec a$'s tail to $\\vec b$'s tip. Equivalent to component-wise addition."
  },

  "limits": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="180" x2="340" y2="180" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="180" y1="20" x2="180" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <path d="M 60 60 C 100 60 140 90 175 119 L 185 119 C 220 90 260 60 300 60" fill="none" stroke="#6ea8ff" stroke-width="2.5"/>
      <circle cx="180" cy="120" r="4" fill="none" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="180" y1="120" x2="20" y2="120" stroke="#fca57a" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="25" y="115" fill="#fca57a" font-size="13">L</text>
      <text x="183" y="195" fill="#9aa3c2" font-size="13">a</text>
      <text x="80" y="50" fill="#6ea8ff" font-size="13">f(x)</text>
      <text x="200" y="155" fill="#9aa3c2" font-size="11">f(a) may not exist</text>
    </svg>`,
    caption: "$\\lim_{x \\to a} f(x) = L$ means the function approaches $L$ as $x$ approaches $a$ — even if $f(a)$ itself is undefined. The hole at $x = a$ doesn't break the limit."
  },

  "derivatives": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="180" x2="340" y2="180" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="40" y1="20" x2="40" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <path d="M 40 180 Q 180 -20 320 180" fill="none" stroke="#6ea8ff" stroke-width="2.5"/>
      <line x1="100" y1="180" x2="280" y2="60" stroke="#fca57a" stroke-width="2"/>
      <circle cx="180" cy="120" r="4" fill="#5eead4"/>
      <text x="190" y="120" fill="#5eead4" font-size="13">(a, f(a))</text>
      <text x="60" y="50" fill="#6ea8ff" font-size="13">f(x)</text>
      <text x="260" y="80" fill="#fca57a" font-size="13">tangent: slope f'(a)</text>
    </svg>`,
    caption: "The derivative $f'(a)$ is the slope of the tangent line at the point $(a, f(a))$. Limit of average slopes as the interval shrinks to a point."
  },

  "integrals": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="180" x2="340" y2="180" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="40" y1="20" x2="40" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <path d="M 60 160 Q 180 30 300 130 L 300 180 L 60 180 Z" fill="rgba(94,234,212,0.18)" stroke="none"/>
      <path d="M 60 160 Q 180 30 300 130" fill="none" stroke="#6ea8ff" stroke-width="2.5"/>
      <line x1="60" y1="180" x2="60" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="300" y1="180" x2="300" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <text x="55" y="200" fill="#9aa3c2" font-size="13">a</text>
      <text x="295" y="200" fill="#9aa3c2" font-size="13">b</text>
      <text x="160" y="120" fill="#5eead4" font-size="14">∫ₐᵇ f(x) dx</text>
      <text x="80" y="50" fill="#6ea8ff" font-size="13">y = f(x)</text>
    </svg>`,
    caption: "The definite integral $\\int_a^b f(x)\\,dx$ is the (signed) area between the curve and the $x$-axis from $a$ to $b$. Built up from thin rectangles in the Riemann limit."
  },

  "probability": {
    svg: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
      <circle cx="180" cy="40" r="14" fill="#141a32" stroke="#9aa3c2" stroke-width="1.5"/>
      <text x="170" y="46" fill="#e8ecf7" font-size="13">S</text>
      <line x1="170" y1="55" x2="100" y2="105" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="190" y1="55" x2="260" y2="105" stroke="#fca57a" stroke-width="2"/>
      <text x="125" y="85" fill="#6ea8ff" font-size="13">P(H)</text>
      <text x="220" y="85" fill="#fca57a" font-size="13">P(T)</text>
      <circle cx="100" cy="120" r="14" fill="#141a32" stroke="#6ea8ff" stroke-width="1.5"/>
      <text x="92" y="125" fill="#e8ecf7" font-size="12">H</text>
      <circle cx="260" cy="120" r="14" fill="#141a32" stroke="#fca57a" stroke-width="1.5"/>
      <text x="253" y="125" fill="#e8ecf7" font-size="12">T</text>
      <line x1="92" y1="135" x2="55" y2="180" stroke="#6ea8ff" stroke-width="1.5"/>
      <line x1="108" y1="135" x2="145" y2="180" stroke="#fca57a" stroke-width="1.5"/>
      <line x1="252" y1="135" x2="215" y2="180" stroke="#6ea8ff" stroke-width="1.5"/>
      <line x1="268" y1="135" x2="305" y2="180" stroke="#fca57a" stroke-width="1.5"/>
      <text x="40" y="200" fill="#e8ecf7" font-size="12">HH</text>
      <text x="135" y="200" fill="#e8ecf7" font-size="12">HT</text>
      <text x="205" y="200" fill="#e8ecf7" font-size="12">TH</text>
      <text x="295" y="200" fill="#e8ecf7" font-size="12">TT</text>
      <text x="40" y="218" fill="#9aa3c2" font-size="11">1/4</text>
      <text x="135" y="218" fill="#9aa3c2" font-size="11">1/4</text>
      <text x="205" y="218" fill="#9aa3c2" font-size="11">1/4</text>
      <text x="295" y="218" fill="#9aa3c2" font-size="11">1/4</text>
    </svg>`,
    caption: "Probability tree for flipping two fair coins. Multiply along branches for joint probabilities; sum branches that lead to the outcome you want."
  },

  "graph-theory": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="80" y1="50" x2="180" y2="40" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="180" y1="40" x2="280" y2="50" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="80" y1="50" x2="80" y2="170" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="80" y1="170" x2="180" y2="180" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="180" y1="180" x2="280" y2="170" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="280" y1="50" x2="280" y2="170" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="80" y1="50" x2="280" y2="170" stroke="#fca57a" stroke-width="1.5" stroke-dasharray="4,4"/>
      <line x1="180" y1="40" x2="180" y2="180" stroke="#fca57a" stroke-width="1.5" stroke-dasharray="4,4"/>
      <circle cx="80" cy="50" r="12" fill="#141a32" stroke="#5eead4" stroke-width="2"/>
      <circle cx="180" cy="40" r="12" fill="#141a32" stroke="#5eead4" stroke-width="2"/>
      <circle cx="280" cy="50" r="12" fill="#141a32" stroke="#5eead4" stroke-width="2"/>
      <circle cx="80" cy="170" r="12" fill="#141a32" stroke="#5eead4" stroke-width="2"/>
      <circle cx="180" cy="180" r="12" fill="#141a32" stroke="#5eead4" stroke-width="2"/>
      <circle cx="280" cy="170" r="12" fill="#141a32" stroke="#5eead4" stroke-width="2"/>
      <text x="76" y="55" fill="#e8ecf7" font-size="12">A</text>
      <text x="176" y="45" fill="#e8ecf7" font-size="12">B</text>
      <text x="276" y="55" fill="#e8ecf7" font-size="12">C</text>
      <text x="76" y="175" fill="#e8ecf7" font-size="12">D</text>
      <text x="176" y="185" fill="#e8ecf7" font-size="12">E</text>
      <text x="276" y="175" fill="#e8ecf7" font-size="12">F</text>
    </svg>`,
    caption: "Graph with 6 vertices and 8 edges. Solid edges are part of the graph; dashed could be added. Graph theory cares only about connections, not where the vertices sit in space."
  },

  "fourier-analysis": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="110" x2="340" y2="110" stroke="#9aa3c2" stroke-width="1"/>
      <path d="M 20 50 L 100 50 L 100 170 L 180 170 L 180 50 L 260 50 L 260 170 L 340 170" fill="none" stroke="#fca57a" stroke-width="2.5"/>
      <path d="M 20 110 Q 80 30 140 110 Q 200 190 260 110 Q 320 30 340 90" fill="none" stroke="#6ea8ff" stroke-width="1.5" opacity="0.8"/>
      <path d="M 20 110 Q 50 60 80 110 Q 110 160 140 110 Q 170 60 200 110 Q 230 160 260 110 Q 290 60 320 110 Q 335 95 340 100" fill="none" stroke="#5eead4" stroke-width="1.5" opacity="0.8"/>
      <text x="200" y="40" fill="#fca57a" font-size="13">square wave</text>
      <text x="20" y="200" fill="#6ea8ff" font-size="12">+ fundamental</text>
      <text x="160" y="200" fill="#5eead4" font-size="12">+ 3rd harmonic + 5th + ...</text>
    </svg>`,
    caption: "Even a sharp square wave is a sum of smooth sine waves at odd harmonics (frequencies 1, 3, 5, ...). Adding more harmonics sharpens the corners. Foundation of signal processing."
  },

  "ode": {
    svg: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="120" x2="340" y2="120" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="180" y1="20" x2="180" y2="220" stroke="#9aa3c2" stroke-width="1"/>
      <circle cx="180" cy="120" r="70" fill="none" stroke="#5eead4" stroke-width="2" opacity="0.6"/>
      <circle cx="180" cy="120" r="40" fill="none" stroke="#5eead4" stroke-width="2" opacity="0.6"/>
      <g stroke="#6ea8ff" stroke-width="1.5" fill="#6ea8ff">
        <line x1="220" y1="120" x2="232" y2="135"/>
        <polygon points="232,135 230,128 225,131"/>
        <line x1="120" y1="120" x2="108" y2="105"/>
        <polygon points="108,105 110,112 115,109"/>
        <line x1="180" y1="60" x2="195" y2="72"/>
        <polygon points="195,72 188,70 191,65"/>
        <line x1="180" y1="180" x2="165" y2="168"/>
        <polygon points="165,168 172,170 169,175"/>
      </g>
      <text x="200" y="40" fill="#5eead4" font-size="13">trajectories</text>
      <text x="20" y="220" fill="#6ea8ff" font-size="13">direction field</text>
    </svg>`,
    caption: "Phase portrait for a harmonic oscillator. Arrows show direction; orbits are closed circles (energy is conserved). ODEs are about flow on phase space."
  },

  // ===== PHYSICS =====

  "kinematics": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="190" x2="340" y2="190" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="40" y1="30" x2="40" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <path d="M 40 190 Q 180 -10 320 190" fill="none" stroke="#fca57a" stroke-width="2.5"/>
      <line x1="40" y1="190" x2="80" y2="150" stroke="#6ea8ff" stroke-width="2"/>
      <polygon points="80,150 75,151 78,158" fill="#6ea8ff"/>
      <path d="M 40 190 A 30 30 0 0 0 70 190" fill="none" stroke="#9aa3c2" stroke-width="1"/>
      <circle cx="40" cy="190" r="5" fill="#5eead4"/>
      <circle cx="180" cy="80" r="5" fill="#5eead4"/>
      <circle cx="320" cy="190" r="5" fill="#5eead4"/>
      <text x="55" y="135" fill="#6ea8ff" font-size="13">v₀</text>
      <text x="55" y="180" fill="#9aa3c2" font-size="12">θ</text>
      <text x="180" y="65" fill="#5eead4" font-size="13">peak</text>
      <text x="280" y="180" fill="#fca57a" font-size="12">range</text>
    </svg>`,
    caption: "Projectile motion: parabolic trajectory under constant gravity. Horizontal velocity stays the same; vertical changes by $-g$ each second. Maximum range at $45°$."
  },

  "vectors-physics": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="180" x2="340" y2="180" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="60" y1="20" x2="60" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="60" y1="180" x2="240" y2="60" stroke="#6ea8ff" stroke-width="2.5"/>
      <polygon points="240,60 230,64 235,73" fill="#6ea8ff"/>
      <line x1="60" y1="180" x2="240" y2="180" stroke="#fca57a" stroke-width="2" stroke-dasharray="4,4"/>
      <line x1="240" y1="180" x2="240" y2="60" stroke="#5eead4" stroke-width="2" stroke-dasharray="4,4"/>
      <path d="M 100 180 A 40 40 0 0 0 90 152" fill="none" stroke="#9aa3c2" stroke-width="1.5"/>
      <text x="140" y="105" fill="#6ea8ff" font-size="14">|F|</text>
      <text x="140" y="200" fill="#fca57a" font-size="13">Fₓ = |F| cos θ</text>
      <text x="245" y="125" fill="#5eead4" font-size="13">Fᵧ = |F| sin θ</text>
      <text x="78" y="170" fill="#9aa3c2" font-size="12">θ</text>
    </svg>`,
    caption: "Any vector at angle $\\theta$ splits into horizontal and vertical components. Use cosine for the adjacent component, sine for the opposite. Essential for force diagrams and 2D motion."
  },

  "newtons-laws": {
    svg: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
      <rect x="120" y="100" width="120" height="80" fill="rgba(110,168,255,0.15)" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="40" y1="200" x2="340" y2="200" stroke="#9aa3c2" stroke-width="2"/>
      <pattern id="hatchN" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="10" stroke="#9aa3c2" stroke-width="1"/>
      </pattern>
      <rect x="40" y="200" width="300" height="14" fill="url(#hatchN)"/>
      <line x1="180" y1="140" x2="180" y2="220" stroke="#fca57a" stroke-width="2"/>
      <polygon points="180,220 174,212 186,212" fill="#fca57a"/>
      <line x1="180" y1="100" x2="180" y2="50" stroke="#5eead4" stroke-width="2"/>
      <polygon points="180,50 174,58 186,58" fill="#5eead4"/>
      <line x1="240" y1="140" x2="320" y2="140" stroke="#b48cff" stroke-width="2.5"/>
      <polygon points="320,140 312,136 312,144" fill="#b48cff"/>
      <line x1="40" y1="140" x2="120" y2="140" stroke="#fca57a" stroke-width="2"/>
      <polygon points="40,140 48,136 48,144" fill="#fca57a"/>
      <text x="185" y="235" fill="#fca57a" font-size="13">W = mg</text>
      <text x="185" y="48" fill="#5eead4" font-size="13">N</text>
      <text x="280" y="130" fill="#b48cff" font-size="13">F (applied)</text>
      <text x="50" y="130" fill="#fca57a" font-size="13">f (friction)</text>
      <text x="170" y="148" fill="#e8ecf7" font-size="12">m</text>
    </svg>`,
    caption: "Free-body diagram for a block on a floor. All four forces shown: weight $W$ down, normal $N$ up, applied $F$ right, friction $f$ left. Net force = sum of vectors = $ma$."
  },

  "momentum-impulse": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <text x="170" y="25" fill="#9aa3c2" font-size="13">before</text>
      <circle cx="80" cy="60" r="22" fill="rgba(110,168,255,0.2)" stroke="#6ea8ff" stroke-width="2"/>
      <circle cx="240" cy="60" r="30" fill="rgba(252,165,122,0.2)" stroke="#fca57a" stroke-width="2"/>
      <text x="75" y="65" fill="#e8ecf7" font-size="13">m₁</text>
      <text x="232" y="65" fill="#e8ecf7" font-size="13">m₂</text>
      <line x1="105" y1="60" x2="140" y2="60" stroke="#5eead4" stroke-width="2"/>
      <polygon points="140,60 132,56 132,64" fill="#5eead4"/>
      <text x="110" y="50" fill="#5eead4" font-size="12">v₁</text>
      <text x="220" y="50" fill="#9aa3c2" font-size="12">at rest</text>
      <line x1="40" y1="115" x2="320" y2="115" stroke="#9aa3c2" stroke-width="1" stroke-dasharray="4,4"/>
      <text x="170" y="135" fill="#9aa3c2" font-size="13">after</text>
      <circle cx="60" cy="170" r="22" fill="rgba(110,168,255,0.2)" stroke="#6ea8ff" stroke-width="2"/>
      <circle cx="280" cy="170" r="30" fill="rgba(252,165,122,0.2)" stroke="#fca57a" stroke-width="2"/>
      <line x1="55" y1="170" x2="20" y2="170" stroke="#5eead4" stroke-width="2"/>
      <polygon points="20,170 28,166 28,174" fill="#5eead4"/>
      <line x1="305" y1="170" x2="340" y2="170" stroke="#5eead4" stroke-width="2"/>
      <polygon points="340,170 332,166 332,174" fill="#5eead4"/>
      <text x="20" y="160" fill="#5eead4" font-size="12">v₁'</text>
      <text x="320" y="160" fill="#5eead4" font-size="12">v₂'</text>
    </svg>`,
    caption: "An elastic collision in 1D. Total momentum $m_1 v_1$ before equals $m_1 v_1' + m_2 v_2'$ after. Energy and momentum together determine the outcome."
  },

  "energy-work": {
    svg: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="30" x2="320" y2="30" stroke="#9aa3c2" stroke-width="2"/>
      <line x1="180" y1="30" x2="80" y2="160" stroke="#9aa3c2" stroke-width="1.5"/>
      <line x1="180" y1="30" x2="180" y2="180" stroke="#9aa3c2" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="180" y1="30" x2="280" y2="160" stroke="#9aa3c2" stroke-width="1.5"/>
      <circle cx="80" cy="160" r="14" fill="rgba(252,165,122,0.3)" stroke="#fca57a" stroke-width="2"/>
      <circle cx="180" cy="180" r="14" fill="rgba(94,234,212,0.3)" stroke="#5eead4" stroke-width="2"/>
      <circle cx="280" cy="160" r="14" fill="rgba(252,165,122,0.3)" stroke="#fca57a" stroke-width="2"/>
      <path d="M 80 160 Q 180 230 280 160" fill="none" stroke="#6ea8ff" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="42" y="145" fill="#fca57a" font-size="12">max PE</text>
      <text x="160" y="208" fill="#5eead4" font-size="12">max KE</text>
      <text x="290" y="145" fill="#fca57a" font-size="12">max PE</text>
      <text x="200" y="50" fill="#9aa3c2" font-size="12">pivot</text>
    </svg>`,
    caption: "Pendulum: energy sloshes between potential (highest at extremes) and kinetic (highest at bottom). Total stays constant — that's conservation of energy."
  },

  "circular-gravitation": {
    svg: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
      <circle cx="180" cy="120" r="30" fill="rgba(252,165,122,0.4)" stroke="#fca57a" stroke-width="2"/>
      <text x="174" y="125" fill="#e8ecf7" font-size="13">M</text>
      <ellipse cx="180" cy="120" rx="120" ry="80" fill="none" stroke="#5eead4" stroke-width="1.5" stroke-dasharray="5,3"/>
      <circle cx="60" cy="120" r="8" fill="#6ea8ff"/>
      <circle cx="300" cy="120" r="8" fill="#6ea8ff"/>
      <line x1="60" y1="120" x2="100" y2="120" stroke="#b48cff" stroke-width="2"/>
      <polygon points="100,120 92,116 92,124" fill="#b48cff"/>
      <line x1="60" y1="120" x2="60" y2="90" stroke="#fca57a" stroke-width="2"/>
      <polygon points="60,90 56,98 64,98" fill="#fca57a"/>
      <text x="105" y="135" fill="#b48cff" font-size="12">v</text>
      <text x="40" y="85" fill="#fca57a" font-size="12">F_g</text>
      <text x="30" y="115" fill="#6ea8ff" font-size="12">perihelion</text>
      <text x="265" y="115" fill="#6ea8ff" font-size="12">aphelion</text>
    </svg>`,
    caption: "Planet in elliptical orbit. Gravity pulls toward $M$; the planet moves perpendicular at each moment, sweeping out equal areas in equal times (Kepler's 2nd law)."
  },

  "shm": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="60" x2="50" y2="160" stroke="#9aa3c2" stroke-width="2"/>
      <g stroke="#6ea8ff" stroke-width="1.5" fill="none">
        <path d="M 50 75 L 65 80 L 35 90 L 65 100 L 35 110 L 65 120 L 35 130 L 65 140 L 50 145"/>
      </g>
      <rect x="35" y="145" width="30" height="22" fill="rgba(252,165,122,0.3)" stroke="#fca57a" stroke-width="2"/>
      <text x="42" y="160" fill="#e8ecf7" font-size="12">m</text>
      <line x1="105" y1="110" x2="340" y2="110" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="115" y1="20" x2="115" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <path d="M 115 70 Q 138 70 150 110 Q 162 150 185 150 Q 208 150 220 110 Q 232 70 255 70 Q 278 70 290 110 Q 302 150 325 150" fill="none" stroke="#6ea8ff" stroke-width="2.5"/>
      <text x="115" y="40" fill="#6ea8ff" font-size="13">x(t) = A cos(ωt)</text>
      <text x="185" y="135" fill="#fca57a" font-size="11">period T</text>
      <line x1="150" y1="170" x2="290" y2="170" stroke="#fca57a" stroke-width="1.5"/>
    </svg>`,
    caption: "Mass on a spring oscillates sinusoidally. Period $T = 2\\pi\\sqrt{m/k}$ depends only on mass and stiffness, not amplitude. The basis of every clock and tuning fork."
  },

  "waves": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="110" x2="340" y2="110" stroke="#9aa3c2" stroke-width="1"/>
      <path d="M 20 110 Q 50 50 80 110 Q 110 170 140 110 Q 170 50 200 110 Q 230 170 260 110 Q 290 50 320 110" fill="none" stroke="#6ea8ff" stroke-width="2.5"/>
      <line x1="80" y1="110" x2="200" y2="110" stroke="#fca57a" stroke-width="1.5"/>
      <line x1="80" y1="115" x2="80" y2="105" stroke="#fca57a" stroke-width="1.5"/>
      <line x1="200" y1="115" x2="200" y2="105" stroke="#fca57a" stroke-width="1.5"/>
      <text x="125" y="100" fill="#fca57a" font-size="13">wavelength λ</text>
      <line x1="50" y1="50" x2="50" y2="170" stroke="#5eead4" stroke-width="1.5"/>
      <line x1="45" y1="50" x2="55" y2="50" stroke="#5eead4" stroke-width="1.5"/>
      <line x1="45" y1="170" x2="55" y2="170" stroke="#5eead4" stroke-width="1.5"/>
      <text x="20" y="200" fill="#5eead4" font-size="13">amplitude A</text>
      <text x="160" y="200" fill="#9aa3c2" font-size="12">speed v = f λ</text>
    </svg>`,
    caption: "A sinusoidal wave. Amplitude is the height of the crest, wavelength is the distance between crests. Speed = frequency × wavelength. Same form for any wave."
  },

  "optics-geometric": {
    svg: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="120" x2="340" y2="120" stroke="#9aa3c2" stroke-width="1" stroke-dasharray="3,3"/>
      <path d="M 180 50 Q 195 120 180 190 Q 165 120 180 50 Z" fill="rgba(94,234,212,0.15)" stroke="#5eead4" stroke-width="2"/>
      <line x1="50" y1="70" x2="180" y2="70" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="50" y1="90" x2="180" y2="90" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="50" y1="120" x2="180" y2="120" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="180" y1="70" x2="320" y2="170" stroke="#fca57a" stroke-width="2"/>
      <line x1="180" y1="90" x2="320" y2="170" stroke="#fca57a" stroke-width="2"/>
      <line x1="180" y1="120" x2="320" y2="170" stroke="#fca57a" stroke-width="2"/>
      <circle cx="320" cy="170" r="4" fill="#fca57a"/>
      <text x="290" y="190" fill="#fca57a" font-size="13">focus</text>
      <text x="180" y="40" fill="#5eead4" font-size="13">lens</text>
      <text x="55" y="60" fill="#6ea8ff" font-size="13">parallel rays</text>
    </svg>`,
    caption: "Converging lens focuses parallel rays to a single point — the focal point at distance $f$. The basis of magnifiers, cameras, and telescopes."
  },

  "electrostatics": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="110" r="18" fill="rgba(252,165,122,0.4)" stroke="#fca57a" stroke-width="2"/>
      <text x="94" y="116" fill="#e8ecf7" font-size="16">+</text>
      <circle cx="260" cy="110" r="18" fill="rgba(110,168,255,0.4)" stroke="#6ea8ff" stroke-width="2"/>
      <text x="254" y="116" fill="#e8ecf7" font-size="16">−</text>
      <g stroke="#5eead4" stroke-width="1.5" fill="none">
        <path d="M 118 110 Q 180 110 242 110"/>
        <path d="M 118 100 Q 180 30 242 100"/>
        <path d="M 118 120 Q 180 190 242 120"/>
        <path d="M 110 95 Q 130 50 180 50 Q 230 50 250 95"/>
        <path d="M 110 125 Q 130 170 180 170 Q 230 170 250 125"/>
      </g>
      <polygon points="180,110 174,107 174,113" fill="#5eead4"/>
      <polygon points="180,50 174,47 174,53" fill="#5eead4"/>
      <polygon points="180,190 174,187 174,193" fill="#5eead4"/>
      <text x="155" y="210" fill="#5eead4" font-size="13">field lines</text>
    </svg>`,
    caption: "Electric field lines from positive to negative charge. Lines start on $+$, end on $-$. Density of lines indicates field strength. Like charges repel; opposites attract."
  },

  "electric-circuits": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="60" y1="60" x2="300" y2="60" stroke="#9aa3c2" stroke-width="2"/>
      <line x1="60" y1="160" x2="300" y2="160" stroke="#9aa3c2" stroke-width="2"/>
      <line x1="60" y1="60" x2="60" y2="90" stroke="#9aa3c2" stroke-width="2"/>
      <line x1="60" y1="130" x2="60" y2="160" stroke="#9aa3c2" stroke-width="2"/>
      <line x1="50" y1="95" x2="70" y2="95" stroke="#5eead4" stroke-width="3"/>
      <line x1="45" y1="105" x2="75" y2="105" stroke="#5eead4" stroke-width="2"/>
      <line x1="50" y1="115" x2="70" y2="115" stroke="#5eead4" stroke-width="3"/>
      <line x1="45" y1="125" x2="75" y2="125" stroke="#5eead4" stroke-width="2"/>
      <text x="25" y="115" fill="#5eead4" font-size="13">V</text>
      <line x1="300" y1="60" x2="300" y2="90" stroke="#9aa3c2" stroke-width="2"/>
      <line x1="300" y1="130" x2="300" y2="160" stroke="#9aa3c2" stroke-width="2"/>
      <rect x="285" y="90" width="30" height="40" fill="rgba(252,165,122,0.2)" stroke="#fca57a" stroke-width="2"/>
      <text x="325" y="115" fill="#fca57a" font-size="13">R</text>
      <line x1="180" y1="50" x2="180" y2="40" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="170" y1="40" x2="190" y2="40" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="180" y1="60" x2="180" y2="50" stroke="#6ea8ff" stroke-width="2"/>
      <polygon points="180,40 175,32 185,32" fill="#6ea8ff"/>
      <text x="190" y="35" fill="#6ea8ff" font-size="13">I</text>
    </svg>`,
    caption: "Simple DC circuit: battery $V$, resistor $R$, current $I$ flowing. Ohm's law $V = IR$ relates them. Power dissipated: $P = VI = I^2 R$."
  },

  "magnetism-induction": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="180" y1="20" x2="180" y2="200" stroke="#fca57a" stroke-width="3"/>
      <polygon points="180,20 174,30 186,30" fill="#fca57a"/>
      <circle cx="180" cy="110" r="40" fill="none" stroke="#6ea8ff" stroke-width="1.5"/>
      <circle cx="180" cy="110" r="65" fill="none" stroke="#6ea8ff" stroke-width="1.5"/>
      <circle cx="180" cy="110" r="90" fill="none" stroke="#6ea8ff" stroke-width="1.5"/>
      <polygon points="220,110 213,106 213,114" fill="#6ea8ff"/>
      <polygon points="245,110 238,106 238,114" fill="#6ea8ff"/>
      <polygon points="270,110 263,106 263,114" fill="#6ea8ff"/>
      <text x="190" y="40" fill="#fca57a" font-size="13">I</text>
      <text x="275" y="125" fill="#6ea8ff" font-size="13">B</text>
      <text x="20" y="200" fill="#9aa3c2" font-size="12">right-hand rule: thumb in current direction, fingers curl in B direction</text>
    </svg>`,
    caption: "A current-carrying wire produces a magnetic field $\\vec B$ that circles the wire. Field strength: $B = \\mu_0 I / (2\\pi r)$. Direction by right-hand rule."
  },

  "maxwell-em": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="110" x2="340" y2="110" stroke="#9aa3c2" stroke-width="1.5"/>
      <polygon points="340,110 332,106 332,114" fill="#9aa3c2"/>
      <text x="320" y="100" fill="#9aa3c2" font-size="13">k</text>
      <path d="M 20 110 Q 50 50 80 110 Q 110 170 140 110 Q 170 50 200 110 Q 230 170 260 110 Q 290 50 320 110" fill="none" stroke="#6ea8ff" stroke-width="2"/>
      <g stroke="#fca57a" stroke-width="2" fill="none">
        <line x1="50" y1="110" x2="65" y2="80"/>
        <line x1="50" y1="110" x2="35" y2="140"/>
        <line x1="110" y1="110" x2="125" y2="140"/>
        <line x1="110" y1="110" x2="95" y2="80"/>
        <line x1="170" y1="110" x2="185" y2="80"/>
        <line x1="170" y1="110" x2="155" y2="140"/>
        <line x1="230" y1="110" x2="245" y2="140"/>
        <line x1="230" y1="110" x2="215" y2="80"/>
        <line x1="290" y1="110" x2="305" y2="80"/>
        <line x1="290" y1="110" x2="275" y2="140"/>
      </g>
      <text x="20" y="40" fill="#6ea8ff" font-size="13">E (electric)</text>
      <text x="20" y="190" fill="#fca57a" font-size="13">B (magnetic)</text>
    </svg>`,
    caption: "EM wave: oscillating $\\vec E$ (perpendicular to page in/out, shown as vertical) and $\\vec B$ (rotated 90°), both perpendicular to direction of propagation $\\vec k$. Speed: $c$ in vacuum."
  },

  "special-relativity": {
    svg: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="200" x2="340" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="180" y1="20" x2="180" y2="220" stroke="#9aa3c2" stroke-width="1"/>
      <text x="345" y="200" fill="#9aa3c2" font-size="13">x</text>
      <text x="186" y="20" fill="#9aa3c2" font-size="13">ct</text>
      <line x1="180" y1="200" x2="40" y2="60" stroke="#fca57a" stroke-width="2"/>
      <line x1="180" y1="200" x2="320" y2="60" stroke="#fca57a" stroke-width="2"/>
      <line x1="180" y1="200" x2="40" y2="200" stroke="#fca57a" stroke-width="2" stroke-dasharray="4,4" opacity="0.5"/>
      <line x1="180" y1="200" x2="320" y2="200" stroke="#fca57a" stroke-width="2" stroke-dasharray="4,4" opacity="0.5"/>
      <path d="M 180 200 L 240 60 L 120 60 Z" fill="rgba(110,168,255,0.1)" stroke="none"/>
      <text x="60" y="100" fill="#fca57a" font-size="12">light past</text>
      <text x="240" y="100" fill="#fca57a" font-size="12">light future</text>
      <text x="155" y="80" fill="#6ea8ff" font-size="13">future</text>
      <text x="245" y="220" fill="#9aa3c2" font-size="12">elsewhere</text>
      <text x="55" y="220" fill="#9aa3c2" font-size="12">elsewhere</text>
    </svg>`,
    caption: "Light cone. Past and future are inside; 'elsewhere' is causally disconnected. Nothing travels faster than light, so causal influence stays inside the cone."
  },

  "qm-1d": {
    svg: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
      <line x1="60" y1="30" x2="60" y2="200" stroke="#fca57a" stroke-width="3"/>
      <line x1="300" y1="30" x2="300" y2="200" stroke="#fca57a" stroke-width="3"/>
      <line x1="60" y1="200" x2="300" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <path d="M 60 150 Q 120 60 180 150 Q 240 240 300 150" fill="none" stroke="#6ea8ff" stroke-width="2"/>
      <path d="M 60 90 Q 90 50 120 90 Q 150 130 180 90 Q 210 50 240 90 Q 270 130 300 90" fill="none" stroke="#5eead4" stroke-width="2"/>
      <line x1="60" y1="170" x2="300" y2="170" stroke="#6ea8ff" stroke-width="1" stroke-dasharray="2,3" opacity="0.4"/>
      <line x1="60" y1="110" x2="300" y2="110" stroke="#5eead4" stroke-width="1" stroke-dasharray="2,3" opacity="0.4"/>
      <text x="20" y="115" fill="#5eead4" font-size="13">E₂</text>
      <text x="20" y="175" fill="#6ea8ff" font-size="13">E₁</text>
      <text x="105" y="220" fill="#fca57a" font-size="13">infinite well</text>
      <text x="190" y="50" fill="#5eead4" font-size="12">ψ₂</text>
    </svg>`,
    caption: "Particle in a 1D box. Like a guitar string, only specific 'standing wave' patterns fit. Energies are quantized: $E_n \\propto n^2$ for the well."
  },

  "atomic-physics": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="190" x2="340" y2="190" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="40" y1="20" x2="40" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <text x="186" y="20" fill="#9aa3c2" font-size="13">E (eV)</text>
      <line x1="50" y1="60" x2="320" y2="60" stroke="#6ea8ff" stroke-width="2"/>
      <line x1="50" y1="90" x2="320" y2="90" stroke="#5eead4" stroke-width="2"/>
      <line x1="50" y1="120" x2="320" y2="120" stroke="#fca57a" stroke-width="2"/>
      <line x1="50" y1="180" x2="320" y2="180" stroke="#b48cff" stroke-width="2.5"/>
      <line x1="120" y1="180" x2="120" y2="60" stroke="#9aa3c2" stroke-width="1.5" stroke-dasharray="3,3"/>
      <polygon points="120,60 116,68 124,68" fill="#9aa3c2"/>
      <line x1="220" y1="120" x2="220" y2="60" stroke="#9aa3c2" stroke-width="1.5" stroke-dasharray="3,3"/>
      <polygon points="220,60 216,68 224,68" fill="#9aa3c2"/>
      <text x="325" y="64" fill="#6ea8ff" font-size="12">n=∞ (0)</text>
      <text x="325" y="94" fill="#5eead4" font-size="12">n=3</text>
      <text x="325" y="124" fill="#fca57a" font-size="12">n=2</text>
      <text x="325" y="184" fill="#b48cff" font-size="12">n=1 (-13.6)</text>
    </svg>`,
    caption: "Hydrogen energy levels $E_n = -13.6/n^2$ eV. Discrete (quantized), accumulating toward 0 at $n = \\infty$ (ionization). Transitions produce photons with specific wavelengths."
  },

  "nuclear": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="190" x2="340" y2="190" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="40" y1="20" x2="40" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <path d="M 40 190 Q 80 100 140 60 Q 220 40 320 110" fill="none" stroke="#6ea8ff" stroke-width="2.5"/>
      <circle cx="160" cy="50" r="5" fill="#fca57a"/>
      <line x1="160" y1="50" x2="160" y2="20" stroke="#fca57a" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="160" y="15" fill="#fca57a" font-size="12" text-anchor="middle">Fe-56</text>
      <text x="45" y="200" fill="#9aa3c2" font-size="12">H</text>
      <text x="320" y="200" fill="#9aa3c2" font-size="12">U</text>
      <text x="180" y="210" fill="#9aa3c2" font-size="13">mass number A</text>
      <text x="46" y="35" fill="#9aa3c2" font-size="13">BE/A</text>
      <text x="100" y="105" fill="#5eead4" font-size="11">fusion releases energy →</text>
      <text x="200" y="170" fill="#fca57a" font-size="11">← fission releases energy</text>
    </svg>`,
    caption: "Binding energy per nucleon vs mass number. Iron-56 sits at the peak — most stable. Fusing light nuclei (left) and splitting heavy ones (right) both release energy."
  },

  "astrophysics-cosmology": {
    svg: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="200" x2="340" y2="200" stroke="#9aa3c2" stroke-width="1"/>
      <line x1="40" y1="20" x2="40" y2="210" stroke="#9aa3c2" stroke-width="1"/>
      <path d="M 280 30 Q 200 80 80 170" fill="none" stroke="#fca57a" stroke-width="2.5"/>
      <ellipse cx="120" cy="60" rx="55" ry="15" fill="none" stroke="#6ea8ff" stroke-width="2" stroke-dasharray="3,3"/>
      <ellipse cx="200" cy="180" rx="40" ry="12" fill="none" stroke="#5eead4" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="46" y="35" fill="#9aa3c2" font-size="11">brightness</text>
      <text x="250" y="220" fill="#9aa3c2" font-size="11">← hotter | cooler →</text>
      <text x="170" y="125" fill="#fca57a" font-size="12">main sequence</text>
      <text x="80" y="50" fill="#6ea8ff" font-size="12">giants</text>
      <text x="160" y="180" fill="#5eead4" font-size="12">white dwarfs</text>
    </svg>`,
    caption: "Hertzsprung-Russell diagram. Most stars sit on the main sequence (diagonal) fusing hydrogen. Giants are bright and cool; white dwarfs are dim and hot."
  },

  "fluid-dynamics": {
    svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
      <circle cx="180" cy="110" r="35" fill="rgba(252,165,122,0.3)" stroke="#fca57a" stroke-width="2"/>
      <g stroke="#6ea8ff" stroke-width="2" fill="none">
        <path d="M 20 70 Q 100 70 180 75 Q 250 80 340 70"/>
        <path d="M 20 110 Q 100 110 145 110 M 215 110 Q 260 110 340 110"/>
        <path d="M 20 150 Q 100 150 180 145 Q 250 140 340 150"/>
        <path d="M 20 50 Q 100 50 180 55 Q 270 60 340 50"/>
        <path d="M 20 170 Q 100 170 180 165 Q 270 160 340 170"/>
      </g>
      <polygon points="320,50 312,46 312,54" fill="#6ea8ff"/>
      <polygon points="320,70 312,66 312,74" fill="#6ea8ff"/>
      <polygon points="320,110 312,106 312,114" fill="#6ea8ff"/>
      <polygon points="320,150 312,146 312,154" fill="#6ea8ff"/>
      <polygon points="320,170 312,166 312,174" fill="#6ea8ff"/>
      <text x="50" y="40" fill="#9aa3c2" font-size="12">streamlines</text>
      <text x="170" y="115" fill="#e8ecf7" font-size="12">obstacle</text>
    </svg>`,
    caption: "Streamlines around a sphere in steady flow. They bunch up where flow speeds up (sides), spread out where it slows (front/back). Bernoulli says: fast flow → low pressure."
  }
};
