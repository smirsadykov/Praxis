// Additional original SVG diagrams illustrating standard concepts.
// These are simple conceptual sketches drawn from scratch — not copied
// from any specific source. Standard ideas (free-body diagram, unit
// circle, phase portrait, etc.) illustrated for clarity.
//
// Each entry: { svg, caption }. Appends to window.DIAGRAMS — does not
// overwrite existing entries from diagrams.js.

(function () {
  window.DIAGRAMS = window.DIAGRAMS || {};

  // Shared style snippet
  const S = {
    stroke: "stroke:#e8ecf7;stroke-width:1.5;fill:none;",
    axis: "stroke:#9aa3c2;stroke-width:1;fill:none;",
    fill: "fill:#5eead4;opacity:0.6;",
    fillPhys: "fill:#fca57a;opacity:0.7;",
    fillCtrl: "fill:#f8b4d9;opacity:0.7;",
    txt: "fill:#e8ecf7;font:13px sans-serif;",
    txtMuted: "fill:#9aa3c2;font:11px sans-serif;",
    dash: "stroke:#9aa3c2;stroke-width:1;stroke-dasharray:4 3;fill:none;",
    arrow: "stroke:#6ea8ff;stroke-width:2;fill:none;marker-end:url(#arr);"
  };

  // SVG arrow marker definition — reused everywhere
  const defs = `<defs>
    <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#6ea8ff"/>
    </marker>
    <marker id="arrR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#fca57a"/>
    </marker>
  </defs>`;

  function wrap(inner, w = 400, h = 220) {
    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:520px;display:block;margin:0 auto;background:#141a32;border-radius:12px;">${defs}${inner}</svg>`;
  }

  Object.assign(window.DIAGRAMS, {

    // ===== MATH =====

    "arithmetic-foundations": {
      svg: wrap(`
        <line x1="20" y1="110" x2="380" y2="110" style="${S.axis}"/>
        ${[-4,-3,-2,-1,0,1,2,3,4].map(n => `<line x1="${200+n*40}" y1="105" x2="${200+n*40}" y2="115" style="${S.axis}"/><text x="${200+n*40}" y="135" text-anchor="middle" style="${S.txtMuted}">${n}</text>`).join('')}
        <circle cx="120" cy="110" r="6" style="${S.fill}"/>
        <text x="120" y="90" text-anchor="middle" style="${S.txt}">$|-2|=2$</text>
        <path d="M 200 70 Q 160 50 120 70" style="${S.arrow}"/>
        <text x="160" y="40" text-anchor="middle" style="${S.txtMuted}">distance 2</text>
      `),
      caption: "The number line. Absolute value measures distance from zero — direction-agnostic."
    },

    "fractions-percentages": {
      svg: wrap(`
        <circle cx="120" cy="110" r="70" style="${S.axis}fill:#1c2444;"/>
        <path d="M 120 110 L 120 40 A 70 70 0 0 1 187.6 84.1 Z" style="${S.fill}"/>
        <text x="120" y="195" text-anchor="middle" style="${S.txt}">¼ = 25%</text>
        <circle cx="290" cy="110" r="70" style="${S.axis}fill:#1c2444;"/>
        <path d="M 290 110 L 290 40 A 70 70 0 1 1 220 110 Z" style="${S.fillPhys}"/>
        <text x="290" y="195" text-anchor="middle" style="${S.txt}">¾ = 75%</text>
      `),
      caption: "A fraction is a slice of the whole; a percentage is the same idea scaled to 100. ¼ = 25%, ¾ = 75%."
    },

    "exponents-roots": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="180" x2="40" y2="20" style="${S.axis}"/>
        <text x="380" y="195" style="${S.txtMuted}">x</text>
        <text x="25" y="25" style="${S.txtMuted}">y</text>
        <path d="M 40 180 Q 100 175 150 165 Q 200 145 240 110 Q 270 75 290 40 Q 300 25 305 20" style="${S.stroke}"/>
        <text x="320" y="40" style="${S.txt}">$y=2^x$</text>
        <path d="M 40 180 Q 80 175 120 170 Q 160 165 200 159 Q 250 152 300 145 Q 350 140 380 137" style="stroke:#fca57a;stroke-width:1.5;fill:none;"/>
        <text x="300" y="125" style="fill:#fca57a;font:13px sans-serif;">$y=\\sqrt x$</text>
      `),
      caption: "Exponentials grow fast; roots grow slowly. The two curves are reflections in $y = x$ — that's what 'inverse' means."
    },

    "linear-equations": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <text x="385" y="195" style="${S.txtMuted}">x</text>
        <text x="25" y="20" style="${S.txtMuted}">y</text>
        <line x1="40" y1="170" x2="380" y2="50" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <circle cx="200" cy="120" r="4" style="fill:#5eead4;"/>
        <text x="210" y="115" style="${S.txt}">(x, y)</text>
        <text x="320" y="40" style="${S.txt}">$y = mx + b$</text>
        <line x1="220" y1="170" x2="280" y2="170" style="${S.dash}"/>
        <line x1="280" y1="170" x2="280" y2="148" style="${S.dash}"/>
        <text x="245" y="190" style="${S.txtMuted}">Δx</text>
        <text x="290" y="163" style="${S.txtMuted}">Δy</text>
        <text x="170" y="190" style="${S.txt}">slope $m = \\Delta y/\\Delta x$</text>
      `),
      caption: "A line is characterized by slope $m$ (steepness) and y-intercept $b$ (where it crosses the y-axis)."
    },

    "inequalities": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        ${[-2,-1,0,1,2,3,4,5].map(n => `<line x1="${200+n*30}" y1="105" x2="${200+n*30}" y2="115" style="${S.axis}"/><text x="${200+n*30}" y="135" text-anchor="middle" style="${S.txtMuted}">${n}</text>`).join('')}
        <line x1="290" y1="110" x2="380" y2="110" style="stroke:#5eead4;stroke-width:5;"/>
        <circle cx="290" cy="110" r="6" style="fill:#5eead4;stroke:#5eead4;"/>
        <text x="200" y="80" text-anchor="middle" style="${S.txt}">$x \\geq 3$</text>
        <circle cx="170" cy="160" r="6" style="fill:none;stroke:#fca57a;stroke-width:2;"/>
        <line x1="170" y1="160" x2="380" y2="160" style="stroke:#fca57a;stroke-width:5;"/>
        <text x="200" y="180" text-anchor="middle" style="fill:#fca57a;font:13px sans-serif;">$x > -1$</text>
      `),
      caption: "Filled dot = inclusive ($\\geq$). Hollow dot = strict ($>$). Shaded ray = the solution set."
    },

    "set-logic": {
      svg: wrap(`
        <circle cx="160" cy="110" r="70" style="${S.axis}fill:#5eead4;fill-opacity:0.15;"/>
        <circle cx="240" cy="110" r="70" style="${S.axis}fill:#fca57a;fill-opacity:0.15;"/>
        <text x="120" y="115" text-anchor="middle" style="${S.txt}">A</text>
        <text x="280" y="115" text-anchor="middle" style="${S.txt}">B</text>
        <text x="200" y="115" text-anchor="middle" style="fill:#b48cff;font:13px sans-serif;">A∩B</text>
        <text x="200" y="200" text-anchor="middle" style="${S.txtMuted}">union A∪B = everything inside either circle</text>
      `),
      caption: "Venn diagrams visualize set operations. Intersection = the overlap; union = the total covered area."
    },

    "combinatorics": {
      svg: wrap(`
        <circle cx="200" cy="40" r="8" style="fill:#5eead4;"/>
        <line x1="200" y1="48" x2="120" y2="92" style="${S.axis}"/>
        <line x1="200" y1="48" x2="280" y2="92" style="${S.axis}"/>
        <circle cx="120" cy="100" r="8" style="fill:#5eead4;"/>
        <circle cx="280" cy="100" r="8" style="fill:#5eead4;"/>
        <line x1="120" y1="108" x2="80" y2="152" style="${S.axis}"/>
        <line x1="120" y1="108" x2="160" y2="152" style="${S.axis}"/>
        <line x1="280" y1="108" x2="240" y2="152" style="${S.axis}"/>
        <line x1="280" y1="108" x2="320" y2="152" style="${S.axis}"/>
        <circle cx="80" cy="160" r="8" style="fill:#5eead4;"/>
        <circle cx="160" cy="160" r="8" style="fill:#5eead4;"/>
        <circle cx="240" cy="160" r="8" style="fill:#5eead4;"/>
        <circle cx="320" cy="160" r="8" style="fill:#5eead4;"/>
        <text x="200" y="200" text-anchor="middle" style="${S.txt}">2 × 2 = 4 outcomes</text>
      `),
      caption: "Tree diagram: at each branch, multiply. Two independent choices with 2 options each give 4 total outcomes."
    },

    "systems-of-equations": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <line x1="40" y1="180" x2="380" y2="20" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <line x1="40" y1="20" x2="380" y2="180" style="stroke:#fca57a;stroke-width:2;fill:none;"/>
        <circle cx="210" cy="100" r="6" style="fill:#b48cff;stroke:#e8ecf7;stroke-width:2;"/>
        <text x="220" y="95" style="${S.txt}">unique solution</text>
        <text x="345" y="35" style="${S.txt}">eq 1</text>
        <text x="345" y="170" style="fill:#fca57a;font:13px sans-serif;">eq 2</text>
      `),
      caption: "Two linear equations in two unknowns = two lines in a plane. Intersection point is the solution (if it exists)."
    },

    "polynomials-rational": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        <path d="M 60 30 Q 130 50 170 95 Q 200 130 230 95 Q 270 50 340 30" transform="translate(0,80) scale(1,-1)" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <circle cx="170" cy="110" r="4" style="fill:#fca57a;"/>
        <circle cx="230" cy="110" r="4" style="fill:#fca57a;"/>
        <circle cx="200" cy="110" r="4" style="fill:#fca57a;"/>
        <text x="170" y="135" text-anchor="middle" style="${S.txtMuted}">root</text>
        <text x="230" y="135" text-anchor="middle" style="${S.txtMuted}">root</text>
        <text x="320" y="50" style="${S.txt}">cubic</text>
      `),
      caption: "A polynomial's roots are where the curve crosses the x-axis. Degree-$n$ polynomial has at most $n$ real roots."
    },

    "sequences-series": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        ${[1,2,3,4,5,6,7,8,9,10].map(n => `<circle cx="${40+n*30}" cy="${180 - 120/(n*0.4+0.5)}" r="4" style="fill:#5eead4;"/>`).join('')}
        <line x1="40" y1="60" x2="380" y2="60" style="${S.dash}"/>
        <text x="350" y="55" style="${S.txt}">limit L</text>
        <text x="200" y="200" text-anchor="middle" style="${S.txtMuted}">terms approach L as n → ∞</text>
      `),
      caption: "A convergent sequence approaches a limit. Eventually all terms cluster within any tolerance of $L$."
    },

    "statistics": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <path d="M 40 180 Q 90 175 130 160 Q 170 130 210 80 Q 250 130 290 160 Q 330 175 380 180" style="stroke:#5eead4;stroke-width:2;fill:#5eead4;fill-opacity:0.25;"/>
        <line x1="210" y1="80" x2="210" y2="180" style="${S.dash}"/>
        <text x="210" y="200" text-anchor="middle" style="${S.txt}">μ</text>
        <text x="130" y="200" text-anchor="middle" style="${S.txtMuted}">μ−σ</text>
        <text x="290" y="200" text-anchor="middle" style="${S.txtMuted}">μ+σ</text>
        <text x="320" y="40" style="${S.txt}">normal curve</text>
      `),
      caption: "The normal (bell) curve. About 68% of probability sits within one $\\sigma$ of the mean; 95% within two."
    },

    "linear-algebra": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        <line x1="200" y1="110" x2="320" y2="110" style="${S.arrow}"/>
        <line x1="200" y1="110" x2="200" y2="40" style="stroke:#5eead4;stroke-width:2;fill:none;marker-end:url(#arr);"/>
        <line x1="200" y1="110" x2="290" y2="50" style="stroke:#fca57a;stroke-width:2;fill:none;marker-end:url(#arrR);"/>
        <line x1="320" y1="110" x2="290" y2="50" style="${S.dash}"/>
        <line x1="200" y1="40" x2="290" y2="50" style="${S.dash}"/>
        <text x="330" y="105" style="${S.txt}">$\\mathbf e_1$</text>
        <text x="180" y="38" style="${S.txt}">$\\mathbf e_2$</text>
        <text x="290" y="40" style="fill:#fca57a;font:13px sans-serif;">$\\mathbf v$</text>
      `),
      caption: "Any vector decomposes as a unique combination of basis vectors: $\\mathbf v = v_1 \\mathbf e_1 + v_2 \\mathbf e_2$."
    },

    "multivariable-calculus": {
      svg: wrap(`
        <ellipse cx="200" cy="110" rx="140" ry="20" style="${S.axis}fill:none;"/>
        <ellipse cx="200" cy="110" rx="100" ry="14" style="${S.axis}fill:none;"/>
        <ellipse cx="200" cy="110" rx="60" ry="9" style="${S.axis}fill:none;"/>
        <ellipse cx="200" cy="110" rx="20" ry="3" style="fill:#5eead4;"/>
        <text x="200" y="155" text-anchor="middle" style="${S.txt}">contour lines of $f(x,y)$</text>
        <text x="200" y="40" text-anchor="middle" style="${S.txtMuted}">closer lines = steeper slope</text>
      `),
      caption: "Contour map of a 2-variable function. Concentric loops mean a peak or trough; close-packed lines mean a steep cliff."
    },

    "vector-calculus": {
      svg: wrap(`
        ${Array.from({length: 8}, (_, i) => Array.from({length: 5}, (_, j) => {
          const x = 60 + i*40, y = 40 + j*35;
          const dx = (x - 200) * 0.05, dy = (y - 110) * 0.05;
          return `<line x1="${x}" y1="${y}" x2="${x + dx}" y2="${y + dy}" style="stroke:#5eead4;stroke-width:1.5;marker-end:url(#arr);"/>`;
        }).join('')).join('')}
        <text x="200" y="200" text-anchor="middle" style="${S.txt}">a vector field $\\mathbf F(x, y)$</text>
      `),
      caption: "A vector field assigns an arrow to each point. Divergence measures spreading, curl measures rotation."
    },

    "pde": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <path d="M 40 110 Q 100 30 160 110 Q 220 190 280 110 Q 340 30 400 110" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <path d="M 40 110 Q 100 60 160 110 Q 220 160 280 110 Q 340 60 400 110" style="stroke:#fca57a;stroke-width:1.5;fill:none;opacity:0.7;"/>
        <text x="320" y="40" style="${S.txt}">t = 0</text>
        <text x="320" y="60" style="fill:#fca57a;font:13px sans-serif;">t > 0 (damped)</text>
        <text x="200" y="200" text-anchor="middle" style="${S.txtMuted}">heat equation smooths sharp features over time</text>
      `),
      caption: "PDE solutions evolve a function in time. Heat equation smooths; wave equation propagates; Laplace equilibrates."
    },

    "real-analysis": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <path d="M 60 160 Q 130 130 180 100 L 220 100 Q 260 120 340 50" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <circle cx="200" cy="100" r="4" style="fill:#5eead4;"/>
        <line x1="190" y1="90" x2="190" y2="110" style="${S.dash}"/>
        <line x1="210" y1="90" x2="210" y2="110" style="${S.dash}"/>
        <line x1="180" y1="80" x2="220" y2="80" style="${S.dash}"/>
        <line x1="180" y1="120" x2="220" y2="120" style="${S.dash}"/>
        <text x="230" y="100" style="${S.txt}">x₀</text>
        <text x="200" y="50" text-anchor="middle" style="${S.txtMuted}">ε-band</text>
        <text x="170" y="140" text-anchor="middle" style="${S.txtMuted}">δ-window</text>
      `),
      caption: "Continuity: for every ε-band around $f(x_0)$, there's a δ-window around $x_0$ whose image stays inside."
    },

    "complex-analysis": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        <text x="385" y="105" style="${S.txtMuted}">Re</text>
        <text x="195" y="25" style="${S.txtMuted}">Im</text>
        <circle cx="200" cy="110" r="60" style="${S.axis}fill:none;"/>
        <text x="270" y="110" style="${S.txt}">|z| = 1</text>
        <circle cx="240" cy="80" r="5" style="fill:#fca57a;"/>
        <text x="250" y="75" style="fill:#fca57a;font:13px sans-serif;">pole</text>
        <path d="M 200 50 A 60 60 0 1 1 199 50 Z" style="stroke:#6ea8ff;stroke-width:2;fill:none;marker-end:url(#arr);"/>
        <text x="200" y="200" text-anchor="middle" style="${S.txtMuted}">contour integral encircles poles</text>
      `),
      caption: "A closed contour in $\\mathbb C$. Residue theorem says the integral equals $2\\pi i$ times the sum of residues inside."
    },

    "abstract-algebra": {
      svg: wrap(`
        ${[0,1,2,3,4].map(i => {
          const a = -Math.PI/2 + i * 2*Math.PI/5;
          const x = 200 + 70*Math.cos(a);
          const y = 110 + 70*Math.sin(a);
          return `<circle cx="${x}" cy="${y}" r="14" style="fill:#5eead4;opacity:0.6;"/><text x="${x}" y="${y+5}" text-anchor="middle" style="fill:#0b1020;font:13px sans-serif;">${i}</text>`;
        }).join('')}
        ${[0,1,2,3,4].map(i => {
          const a1 = -Math.PI/2 + i * 2*Math.PI/5;
          const a2 = -Math.PI/2 + ((i+1)%5) * 2*Math.PI/5;
          const x1 = 200 + 55*Math.cos(a1), y1 = 110 + 55*Math.sin(a1);
          const x2 = 200 + 55*Math.cos(a2), y2 = 110 + 55*Math.sin(a2);
          return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:#6ea8ff;stroke-width:1.5;marker-end:url(#arr);"/>`;
        }).join('')}
        <text x="200" y="205" text-anchor="middle" style="${S.txt}">cyclic group $\\mathbb Z/5$</text>
      `),
      caption: "A cyclic group $\\mathbb Z/n$: $n$ elements arranged in a circle, generator advances by one step each application."
    },

    "topology": {
      svg: wrap(`
        <ellipse cx="200" cy="110" rx="120" ry="35" style="${S.axis}"/>
        <ellipse cx="200" cy="110" rx="120" ry="35" transform="rotate(20 200 110)" style="${S.axis}opacity:0.6;"/>
        <text x="200" y="180" text-anchor="middle" style="${S.txt}">Möbius strip</text>
        <text x="200" y="200" text-anchor="middle" style="${S.txtMuted}">one side, one edge</text>
      `),
      caption: "The Möbius strip — flip a strip half a turn and glue. Locally Euclidean, globally surprising. Topology in a nutshell."
    },

    "numerical-methods": {
      svg: wrap(`
        <line x1="40" y1="120" x2="380" y2="120" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <path d="M 60 180 Q 150 150 220 120 Q 290 90 340 30" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <circle cx="220" cy="120" r="5" style="fill:#fca57a;"/>
        <text x="225" y="140" style="${S.txt}">root</text>
        <line x1="100" y1="120" x2="100" y2="125" style="${S.axis}"/>
        <line x1="320" y1="120" x2="320" y2="125" style="${S.axis}"/>
        <text x="100" y="145" text-anchor="middle" style="${S.txtMuted}">a</text>
        <text x="320" y="145" text-anchor="middle" style="${S.txtMuted}">b</text>
        <line x1="210" y1="120" x2="210" y2="115" style="${S.axis}"/>
        <text x="210" y="105" text-anchor="middle" style="${S.txtMuted}">mid</text>
      `),
      caption: "Bisection: $f(a) < 0 < f(b)$, evaluate at midpoint, narrow interval. Halves the error each step."
    },

    "solid-geometry": {
      svg: wrap(`
        <path d="M 100 50 L 180 50 L 220 90 L 220 170 L 180 210 L 100 210 L 60 170 L 60 90 Z" style="${S.axis}fill:#1c2444;"/>
        <line x1="100" y1="50" x2="60" y2="90" style="${S.axis}"/>
        <line x1="180" y1="50" x2="220" y2="90" style="${S.axis}"/>
        <line x1="60" y1="170" x2="100" y2="210" style="${S.axis}"/>
        <line x1="220" y1="170" x2="180" y2="210" style="${S.axis}"/>
        <line x1="100" y1="50" x2="100" y2="130" style="${S.dash}"/>
        <line x1="60" y1="90" x2="100" y2="130" style="${S.dash}"/>
        <line x1="180" y1="50" x2="100" y2="130" style="${S.dash}"/>
        <circle cx="320" cy="110" r="70" style="${S.axis}fill:#1c2444;"/>
        <ellipse cx="320" cy="110" rx="70" ry="15" style="${S.dash}"/>
        <text x="140" y="240" text-anchor="middle" style="${S.txt}">cube</text>
        <text x="320" y="240" text-anchor="middle" style="${S.txt}">sphere</text>
      `, 400, 250),
      caption: "3D solids: cubes have flat faces and corners; spheres are perfectly smooth. Surface area and volume scale differently."
    },

    "mathematical-logic": {
      svg: wrap(`
        <rect x="60" y="50" width="280" height="120" style="${S.axis}fill:#1c2444;"/>
        <line x1="200" y1="50" x2="200" y2="170" style="${S.axis}"/>
        <line x1="60" y1="80" x2="340" y2="80" style="${S.axis}"/>
        <text x="130" y="72" text-anchor="middle" style="${S.txt}">P</text>
        <text x="270" y="72" text-anchor="middle" style="${S.txt}">¬P</text>
        <text x="130" y="115" text-anchor="middle" style="${S.txt}">T</text>
        <text x="270" y="115" text-anchor="middle" style="fill:#fca57a;font:13px sans-serif;">F</text>
        <text x="130" y="155" text-anchor="middle" style="fill:#fca57a;font:13px sans-serif;">F</text>
        <text x="270" y="155" text-anchor="middle" style="${S.txt}">T</text>
        <text x="200" y="200" text-anchor="middle" style="${S.txtMuted}">truth table</text>
      `),
      caption: "Truth tables: for each combination of inputs, list outputs. The simplest tool of propositional logic."
    },

    "recurrence-generating": {
      svg: wrap(`
        ${[1,1,2,3,5,8].map((v, i) => `<circle cx="${50 + i*60}" cy="110" r="${10 + v*2}" style="fill:#5eead4;opacity:${0.4 + i*0.1};"/><text x="${50 + i*60}" y="${160 + (i%2)*15}" text-anchor="middle" style="${S.txtMuted}">${v}</text>`).join('')}
        <text x="200" y="40" text-anchor="middle" style="${S.txt}">Fibonacci sequence</text>
        <text x="200" y="200" text-anchor="middle" style="${S.txtMuted}">$F_n = F_{n-1} + F_{n-2}$</text>
      `),
      caption: "A recurrence defines each term from earlier ones. Fibonacci is the iconic example."
    },

    "computability": {
      svg: wrap(`
        ${Array.from({length: 10}, (_, i) => `<rect x="${30 + i*35}" y="80" width="35" height="35" style="${S.axis}fill:#1c2444;"/><text x="${48 + i*35}" y="105" text-anchor="middle" style="${S.txt}">${['_','a','b','b','a','_','_','_','_','_'][i]}</text>`).join('')}
        <polygon points="200,135 195,150 205,150" style="fill:#6ea8ff;"/>
        <text x="200" y="170" text-anchor="middle" style="${S.txt}">head</text>
        <text x="200" y="60" text-anchor="middle" style="${S.txt}">Turing machine tape</text>
      `),
      caption: "A Turing machine: infinite tape, a head that reads/writes cells, a finite control. Universal model of computation."
    },

    "galois-theory": {
      svg: wrap(`
        <circle cx="200" cy="60" r="20" style="fill:#1c2444;stroke:#e8ecf7;stroke-width:1.5;"/>
        <text x="200" y="65" text-anchor="middle" style="${S.txt}">$\\mathbb Q$</text>
        <circle cx="200" cy="180" r="22" style="fill:#1c2444;stroke:#5eead4;stroke-width:1.5;"/>
        <text x="200" y="185" text-anchor="middle" style="fill:#5eead4;font:13px sans-serif;">$\\mathbb Q(\\sqrt 2)$</text>
        <line x1="200" y1="80" x2="200" y2="158" style="${S.axis}"/>
        <text x="225" y="125" style="${S.txt}">degree 2</text>
        <circle cx="320" cy="120" r="22" style="fill:#1c2444;stroke:#fca57a;stroke-width:1.5;"/>
        <text x="320" y="125" text-anchor="middle" style="fill:#fca57a;font:13px sans-serif;">$G$</text>
        <path d="M 240 140 Q 280 130 298 125" style="${S.arrow}"/>
        <text x="270" y="115" style="${S.txtMuted}">Gal group</text>
      `),
      caption: "Galois correspondence: subfields between $\\mathbb Q$ and an extension correspond to subgroups of the Galois group."
    },

    "lie-groups": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        <line x1="200" y1="110" x2="280" y2="110" style="${S.arrow}"/>
        <path d="M 280 110 A 80 80 0 0 0 257 53" style="stroke:#fca57a;stroke-width:2;fill:none;marker-end:url(#arrR);"/>
        <line x1="200" y1="110" x2="257" y2="53" style="stroke:#fca57a;stroke-width:1.5;stroke-dasharray:2 3;fill:none;"/>
        <text x="220" y="50" style="${S.txt}">rotation by θ</text>
        <path d="M 280 130 A 60 60 0 0 0 220 170" style="${S.axis}stroke-dasharray:3 2;"/>
        <text x="290" y="180" style="${S.txtMuted}">SO(2) = unit circle</text>
      `),
      caption: "$SO(2)$, the group of plane rotations, is itself a circle. Lie groups are smooth manifolds carrying a group law."
    },

    "differential-geometry": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <path d="M 60 180 Q 150 60 290 180" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <circle cx="175" cy="106" r="60" style="${S.axis}"/>
        <text x="240" y="100" style="${S.txt}">osculating circle</text>
        <text x="180" y="60" style="${S.txtMuted}">radius = 1/κ</text>
      `),
      caption: "Curvature $\\kappa$ at a point = inverse of the radius of the best-fitting circle there. High curvature ↔ tight bend."
    },

    "tensor-calculus": {
      svg: wrap(`
        <text x="60" y="60" style="${S.txt}">$T^{ij} = $</text>
        <text x="150" y="60" style="${S.txt}">$\\begin{pmatrix} T^{11} & T^{12} \\\\ T^{21} & T^{22} \\end{pmatrix}$</text>
        <text x="60" y="160" style="${S.txt}">$T^{ij} \\mapsto T^{ji}$</text>
        <text x="200" y="160" style="${S.txt}">(transposition)</text>
        <line x1="40" y1="100" x2="380" y2="100" style="${S.axis}"/>
        <text x="60" y="195" style="${S.txtMuted}">indices: upper = contravariant, lower = covariant</text>
      `),
      caption: "Tensors are multi-indexed arrays that transform predictably under coordinate changes. Up/down indices matter."
    },

    "algebraic-topology": {
      svg: wrap(`
        <ellipse cx="200" cy="110" rx="120" ry="60" style="${S.axis}fill:none;"/>
        <ellipse cx="200" cy="110" rx="40" ry="20" style="${S.axis}fill:#0b1020;"/>
        <text x="340" y="115" style="${S.txt}">torus</text>
        <path d="M 200 60 Q 235 70 270 110 Q 235 150 200 160 Q 165 150 130 110 Q 165 70 200 60" style="stroke:#fca57a;stroke-width:1.5;fill:none;stroke-dasharray:4 3;"/>
        <text x="200" y="200" text-anchor="middle" style="${S.txtMuted}">two independent loops → $\\pi_1 = \\mathbb Z \\oplus \\mathbb Z$</text>
      `),
      caption: "Torus has TWO essentially different loops (around the tube vs. through the hole), so $\\pi_1 = \\mathbb Z^2$."
    },

    "riemannian-geometry": {
      svg: wrap(`
        <circle cx="200" cy="110" r="80" style="${S.axis}fill:#1c2444;"/>
        <ellipse cx="200" cy="110" rx="80" ry="20" style="${S.dash}"/>
        <path d="M 200 30 A 80 80 0 0 1 200 190" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <text x="290" y="110" style="${S.txt}">geodesic</text>
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">on a sphere, geodesics are great circles</text>
      `),
      caption: "Geodesics generalize straight lines to curved spaces. On a sphere they're arcs of great circles."
    },

    "measure-theory": {
      svg: wrap(`
        <rect x="40" y="40" width="320" height="20" style="${S.axis}"/>
        <rect x="40" y="80" width="106" height="20" style="${S.axis}"/>
        <rect x="254" y="80" width="106" height="20" style="${S.axis}"/>
        <rect x="40" y="120" width="35" height="20" style="${S.axis}"/>
        <rect x="111" y="120" width="35" height="20" style="${S.axis}"/>
        <rect x="254" y="120" width="35" height="20" style="${S.axis}"/>
        <rect x="325" y="120" width="35" height="20" style="${S.axis}"/>
        <text x="200" y="180" text-anchor="middle" style="${S.txt}">Cantor set construction</text>
        <text x="200" y="200" text-anchor="middle" style="${S.txtMuted}">uncountable, measure zero</text>
      `),
      caption: "Each step removes the middle thirds. The total length removed is 1 — what remains has measure zero."
    },

    "functional-analysis": {
      svg: wrap(`
        <circle cx="200" cy="110" r="80" style="${S.axis}"/>
        <circle cx="200" cy="110" r="4" style="fill:#e8ecf7;"/>
        <line x1="200" y1="110" x2="260" y2="60" style="${S.arrow}"/>
        <text x="265" y="55" style="${S.txt}">$\\mathbf v$</text>
        <text x="200" y="120" style="${S.txtMuted}">0</text>
        <text x="280" y="110" style="${S.txt}">$\\|\\mathbf v\\| = 1$</text>
        <text x="200" y="210" text-anchor="middle" style="${S.txtMuted}">unit ball in normed space</text>
      `),
      caption: "An infinite-dimensional Banach space comes with a norm $\\|\\cdot\\|$. The unit ball is the foundational geometric object."
    },

    "calculus-of-variations": {
      svg: wrap(`
        <circle cx="80" cy="80" r="5" style="fill:#5eead4;"/>
        <circle cx="320" cy="170" r="5" style="fill:#5eead4;"/>
        <path d="M 80 80 Q 200 80 320 170" style="stroke:#fca57a;stroke-width:1.5;fill:none;"/>
        <path d="M 80 80 Q 200 200 320 170" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <path d="M 80 80 L 320 170" style="${S.dash}"/>
        <text x="200" y="60" text-anchor="middle" style="${S.txtMuted}">competing curves</text>
        <text x="200" y="125" text-anchor="middle" style="fill:#5eead4;font:13px sans-serif;">extremal (brachistochrone)</text>
      `),
      caption: "Calculus of variations: pick the curve that minimizes some integral. Bead sliding under gravity: cycloid wins."
    },

    "function-sequences": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        ${[0.3, 0.5, 0.8, 1.5, 3].map((p, i) => {
          const op = 0.3 + i*0.15;
          return `<path d="M 40 180 ${Array.from({length:20}, (_, j) => `L ${40 + j*17} ${180 - 160 * Math.pow(j/19, p)}`).join(' ')}" style="stroke:#5eead4;stroke-width:1.5;fill:none;opacity:${op};"/>`;
        }).join('')}
        <text x="320" y="50" style="${S.txt}">$x^n$ on $[0,1]$</text>
        <text x="200" y="200" text-anchor="middle" style="${S.txtMuted}">pointwise to 0 on $[0,1)$, 1 at $x=1$</text>
      `),
      caption: "$f_n(x) = x^n$ on $[0,1]$ converges pointwise to a discontinuous limit. Not uniform — the corner near $x = 1$ never gives up."
    },

    "random-variables": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        ${[0,1,2,3,4,5,6,7].map(k => {
          const h = 30 * Math.exp(-Math.pow(k - 3, 2) / 2) * 5;
          return `<rect x="${60 + k*40}" y="${180 - h}" width="32" height="${h}" style="fill:#5eead4;opacity:0.6;"/>`;
        }).join('')}
        <text x="200" y="40" text-anchor="middle" style="${S.txt}">probability mass function</text>
      `),
      caption: "A discrete probability distribution: each bar is $P(X = k)$. Total height across all bars = 1."
    },

    "stochastic-processes": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <path d="M 40 110 ${Array.from({length: 80}, (_, i) => `L ${40 + i*4.2} ${110 + 30*Math.sin(i*0.7) + 25*Math.sin(i*1.3) + 15*Math.cos(i*2.1)}`).join(' ')}" style="stroke:#5eead4;stroke-width:1.5;fill:none;"/>
        <text x="320" y="40" style="${S.txt}">Brownian path</text>
        <text x="200" y="200" text-anchor="middle" style="${S.txtMuted}">RMS displacement $\\propto \\sqrt t$</text>
      `),
      caption: "Brownian motion: jagged, self-similar. Continuous in time but nowhere differentiable."
    },

    "bayesian-statistics": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <path d="M 40 180 Q 200 130 380 180" style="stroke:#9aa3c2;stroke-width:1.5;fill:none;stroke-dasharray:4 3;"/>
        <path d="M 40 180 Q 150 100 250 180" style="stroke:#fca57a;stroke-width:1.5;fill:none;"/>
        <path d="M 40 180 Q 160 40 280 180" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <text x="300" y="160" style="${S.txtMuted}">prior</text>
        <text x="260" y="115" style="fill:#fca57a;font:13px sans-serif;">likelihood</text>
        <text x="290" y="55" style="fill:#5eead4;font:13px sans-serif;">posterior</text>
      `),
      caption: "Posterior ∝ prior × likelihood. As data arrives, your belief sharpens."
    },

    "optimization": {
      svg: wrap(`
        <ellipse cx="200" cy="110" rx="140" ry="60" style="${S.axis}fill:none;"/>
        <ellipse cx="200" cy="110" rx="100" ry="42" style="${S.axis}fill:none;"/>
        <ellipse cx="200" cy="110" rx="60" ry="25" style="${S.axis}fill:none;"/>
        <ellipse cx="200" cy="110" rx="22" ry="9" style="fill:#5eead4;"/>
        <line x1="50" y1="180" x2="350" y2="40" style="stroke:#fca57a;stroke-width:1.5;fill:none;"/>
        <circle cx="160" cy="146" r="5" style="fill:#fca57a;"/>
        <text x="170" y="170" style="${S.txt}">constrained min</text>
        <text x="200" y="50" text-anchor="middle" style="${S.txtMuted}">contours + constraint line</text>
      `),
      caption: "Constrained optimization: walk along the constraint line until the contours touch it tangentially. Lagrange's method."
    },

    "information-theory": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <path d="M 40 180 ${Array.from({length: 100}, (_, i) => {
          const p = i/100;
          if (p === 0 || p === 1) return `L ${40 + p*340} 180`;
          const H = -p*Math.log2(p) - (1-p)*Math.log2(1-p);
          return `L ${40 + p*340} ${180 - H*150}`;
        }).join(' ')}" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <line x1="210" y1="180" x2="210" y2="30" style="${S.dash}"/>
        <text x="210" y="200" text-anchor="middle" style="${S.txtMuted}">p = 0.5</text>
        <text x="225" y="40" style="${S.txt}">max H = 1</text>
      `),
      caption: "Binary entropy: zero at $p=0$ and $p=1$; maximum 1 bit at $p = 1/2$. Most informative coin is the fair one."
    },

    "game-theory": {
      svg: wrap(`
        <rect x="80" y="50" width="240" height="120" style="${S.axis}fill:#1c2444;"/>
        <line x1="200" y1="50" x2="200" y2="170" style="${S.axis}"/>
        <line x1="80" y1="110" x2="320" y2="110" style="${S.axis}"/>
        <text x="40" y="85" style="${S.txtMuted}">C</text>
        <text x="40" y="145" style="${S.txtMuted}">D</text>
        <text x="140" y="40" text-anchor="middle" style="${S.txtMuted}">C</text>
        <text x="260" y="40" text-anchor="middle" style="${S.txtMuted}">D</text>
        <text x="140" y="85" text-anchor="middle" style="${S.txt}">3,3</text>
        <text x="260" y="85" text-anchor="middle" style="${S.txt}">0,5</text>
        <text x="140" y="145" text-anchor="middle" style="${S.txt}">5,0</text>
        <text x="260" y="145" text-anchor="middle" style="fill:#fca57a;font:13px sans-serif;">1,1</text>
        <text x="200" y="200" text-anchor="middle" style="${S.txtMuted}">Prisoner's Dilemma payoff matrix</text>
      `),
      caption: "Payoff matrix. Each cell: (row player, column player). DD is the NE — even though CC is jointly better."
    },

    "dynamical-systems": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        ${Array.from({length: 30}, (_, i) => {
          const t = i * 0.4;
          const r = 60 * Math.exp(-t * 0.15);
          const a = t;
          const x = 200 + r * Math.cos(a);
          const y = 110 + r * Math.sin(a);
          return `<circle cx="${x}" cy="${y}" r="2" style="fill:#5eead4;opacity:${0.4 + i/40};"/>`;
        }).join('')}
        <circle cx="200" cy="110" r="5" style="fill:#fca57a;"/>
        <text x="210" y="108" style="${S.txt}">stable spiral</text>
      `),
      caption: "Phase portrait: trajectories in state space. Stable spiral = trajectories curl into a stable fixed point."
    },

    "cryptography": {
      svg: wrap(`
        <rect x="60" y="80" width="60" height="60" style="${S.axis}fill:#1c2444;"/>
        <text x="90" y="115" text-anchor="middle" style="${S.txt}">m</text>
        <text x="90" y="160" text-anchor="middle" style="${S.txtMuted}">plaintext</text>
        <rect x="180" y="80" width="60" height="60" style="stroke:#fca57a;fill:#1c2444;stroke-width:1.5;"/>
        <text x="210" y="115" text-anchor="middle" style="fill:#fca57a;font:14px sans-serif;">c</text>
        <text x="210" y="160" text-anchor="middle" style="${S.txtMuted}">ciphertext</text>
        <rect x="300" y="80" width="60" height="60" style="${S.axis}fill:#1c2444;"/>
        <text x="330" y="115" text-anchor="middle" style="${S.txt}">m</text>
        <text x="330" y="160" text-anchor="middle" style="${S.txtMuted}">recovered</text>
        <line x1="125" y1="110" x2="175" y2="110" style="${S.arrow}"/>
        <line x1="245" y1="110" x2="295" y2="110" style="${S.arrow}"/>
        <text x="150" y="65" style="${S.txtMuted}">encrypt</text>
        <text x="270" y="65" style="${S.txtMuted}">decrypt</text>
      `),
      caption: "Encryption: $m \\to c$ via a key. Decryption inverts. Security = computationally hard without the key."
    },

    // ===== PHYSICS =====

    "units-measurement": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}stroke-width:2;"/>
        ${Array.from({length: 11}, (_, i) => `<line x1="${40 + i*34}" y1="105" x2="${40 + i*34}" y2="120" style="${S.axis}"/>`).join('')}
        ${Array.from({length: 50}, (_, i) => i % 5 !== 0 ? `<line x1="${40 + i*6.8}" y1="105" x2="${40 + i*6.8}" y2="113" style="${S.axis}stroke-width:0.5;"/>` : '').join('')}
        <text x="40" y="135" text-anchor="middle" style="${S.txtMuted}">0</text>
        <text x="210" y="135" text-anchor="middle" style="${S.txtMuted}">5 cm</text>
        <text x="380" y="135" text-anchor="middle" style="${S.txtMuted}">10</text>
        <text x="200" y="180" text-anchor="middle" style="${S.txt}">a measurement</text>
        <text x="200" y="200" text-anchor="middle" style="${S.txtMuted}">value + unit + uncertainty</text>
      `),
      caption: "A measurement is meaningless without its unit. Significant figures encode precision."
    },

    "rotational": {
      svg: wrap(`
        <circle cx="200" cy="110" r="70" style="${S.axis}fill:#1c2444;"/>
        <line x1="200" y1="110" x2="200" y2="40" style="stroke:#5eead4;stroke-width:2;fill:none;marker-end:url(#arr);"/>
        <path d="M 200 40 A 70 70 0 0 1 270 110" style="stroke:#fca57a;stroke-width:2;fill:none;marker-end:url(#arrR);"/>
        <text x="280" y="80" style="fill:#fca57a;font:13px sans-serif;">ω</text>
        <text x="170" y="40" style="${S.txt}">r</text>
        <circle cx="200" cy="110" r="4" style="fill:#e8ecf7;"/>
        <line x1="270" y1="110" x2="270" y2="80" style="stroke:#6ea8ff;stroke-width:2;fill:none;marker-end:url(#arr);"/>
        <text x="285" y="100" style="fill:#6ea8ff;font:13px sans-serif;">F</text>
        <text x="200" y="210" text-anchor="middle" style="${S.txtMuted}">$\\tau = r F$ (torque)</text>
      `),
      caption: "Torque = lever arm × force. Causes angular acceleration $\\tau = I\\alpha$, the rotational analog of $F = ma$."
    },

    "fluids": {
      svg: wrap(`
        <rect x="100" y="40" width="200" height="160" style="${S.axis}fill:#1c2444;"/>
        <line x1="100" y1="80" x2="300" y2="80" style="${S.axis}opacity:0.4;"/>
        <line x1="100" y1="120" x2="300" y2="120" style="${S.axis}opacity:0.4;"/>
        <line x1="100" y1="160" x2="300" y2="160" style="${S.axis}opacity:0.4;"/>
        <line x1="320" y1="40" x2="320" y2="200" style="${S.axis}"/>
        <text x="335" y="50" style="${S.txt}">$P_0$</text>
        <text x="335" y="200" style="${S.txt}">$P_0 + \\rho g h$</text>
        <line x1="60" y1="40" x2="60" y2="200" style="${S.arrow}"/>
        <text x="40" y="120" style="${S.txt}">h</text>
      `),
      caption: "Pressure increases linearly with depth: $P = P_0 + \\rho g h$. Hydrostatic pressure underlies dam design and diving."
    },

    "kinetic-theory": {
      svg: wrap(`
        <rect x="60" y="40" width="280" height="160" style="${S.axis}fill:#1c2444;"/>
        ${[[100,80],[150,140],[200,60],[260,110],[300,170],[180,180],[280,50],[120,170],[220,150],[330,90]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="5" style="fill:#5eead4;"/>`).join('')}
        ${[[100,80,130,100],[150,140,180,110],[200,60,170,90],[260,110,290,140],[300,170,270,150]].map(([x1,y1,x2,y2]) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:#6ea8ff;stroke-width:1;marker-end:url(#arr);"/>`).join('')}
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">gas = many molecules, random velocities</text>
      `, 400, 230),
      caption: "Macroscopic pressure and temperature emerge from the microscopic motion of zillions of molecules."
    },

    "thermodynamics": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <text x="385" y="195" style="${S.txtMuted}">V</text>
        <text x="35" y="20" style="${S.txtMuted}">P</text>
        <path d="M 80 50 L 280 50 L 280 160 L 80 160 Z" style="stroke:#5eead4;stroke-width:2;fill:#5eead4;fill-opacity:0.15;"/>
        <text x="180" y="40" text-anchor="middle" style="${S.txt}">isothermal expansion</text>
        <text x="180" y="170" text-anchor="middle" style="${S.txtMuted}">net work = enclosed area</text>
      `),
      caption: "$P$-$V$ diagram. A closed cycle's net work equals the area enclosed. Heat engines are cycles that go clockwise."
    },

    "optics-wave": {
      svg: wrap(`
        <line x1="60" y1="80" x2="60" y2="140" style="${S.axis}stroke-width:2;"/>
        <rect x="55" y="80" width="10" height="15" style="fill:#1c2444;"/>
        <rect x="55" y="125" width="10" height="15" style="fill:#1c2444;"/>
        <line x1="340" y1="20" x2="340" y2="200" style="${S.axis}stroke-width:2;"/>
        ${[60, 100, 140].map(y => `<line x1="65" y1="${y === 100 ? 87 : y === 140 ? 132 : 87}" x2="340" y2="${y}" style="${S.axis}stroke-dasharray:2 2;"/>`).join('')}
        <path d="M 340 ${Array.from({length: 60}, (_, i) => 20 + i*3 + 30*Math.cos(i*0.5)).join(' L 340 ')}" style="stroke:#5eead4;stroke-width:1;fill:none;"/>
        ${[60, 80, 100, 120, 140, 160].map(y => `<rect x="345" y="${y-5}" width="15" height="10" style="fill:${y%40<20 ? '#5eead4' : '#0b1020'};opacity:0.7;"/>`).join('')}
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">two slits → fringe pattern</text>
      `, 400, 230),
      caption: "Two-slit experiment. Bright fringes appear where path-length difference is an integer multiple of wavelength."
    },

    "ac-circuits": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        <line x1="200" y1="110" x2="280" y2="60" style="stroke:#5eead4;stroke-width:2;fill:none;marker-end:url(#arr);"/>
        <text x="290" y="55" style="${S.txt}">V</text>
        <line x1="200" y1="110" x2="240" y2="160" style="stroke:#fca57a;stroke-width:2;fill:none;marker-end:url(#arrR);"/>
        <text x="250" y="170" style="fill:#fca57a;font:13px sans-serif;">I</text>
        <path d="M 230 90 A 25 25 0 0 0 220 130" style="${S.dash}"/>
        <text x="240" y="120" style="${S.txtMuted}">φ</text>
      `),
      caption: "Phasors: voltage and current as rotating vectors. Their phase difference $\\varphi$ determines power factor."
    },

    "general-relativity": {
      svg: wrap(`
        <path d="M 40 60 Q 200 60 360 60" style="${S.axis}"/>
        <path d="M 40 90 Q 200 130 360 90" style="${S.axis}"/>
        <path d="M 40 120 Q 200 170 360 120" style="${S.axis}"/>
        <path d="M 40 150 Q 200 180 360 150" style="${S.axis}"/>
        <circle cx="200" cy="150" r="20" style="fill:#fca57a;opacity:0.9;"/>
        <text x="200" y="210" text-anchor="middle" style="${S.txtMuted}">mass curves the surrounding spacetime</text>
      `),
      caption: "Einstein: 'Spacetime tells matter how to move; matter tells spacetime how to curve.'"
    },

    "lagrangian-hamiltonian": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        <text x="385" y="105" style="${S.txt}">q</text>
        <text x="195" y="25" style="${S.txt}">p</text>
        <ellipse cx="200" cy="110" rx="120" ry="60" style="${S.axis}"/>
        <ellipse cx="200" cy="110" rx="80" ry="40" style="${S.axis}"/>
        <ellipse cx="200" cy="110" rx="40" ry="20" style="${S.axis}"/>
        <text x="200" y="200" text-anchor="middle" style="${S.txtMuted}">phase space: trajectories at constant energy</text>
      `),
      caption: "Phase space: each point is (position, momentum). Conservative systems live on constant-energy surfaces."
    },

    "statistical-mechanics": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <text x="385" y="195" style="${S.txtMuted}">E</text>
        <text x="35" y="20" style="${S.txtMuted}">P(E)</text>
        <path d="M 40 180 ${Array.from({length: 60}, (_, i) => {
          const E = i * 5;
          return `L ${40 + i*5} ${180 - 140 * Math.exp(-E/30)}`;
        }).join(' ')}" style="stroke:#5eead4;stroke-width:2;fill:#5eead4;fill-opacity:0.2;"/>
        <text x="260" y="70" style="${S.txt}">$P \\propto e^{-E/kT}$</text>
      `),
      caption: "Boltzmann distribution. High-energy states are exponentially suppressed. Hot systems = wider distributions."
    },

    "qm-foundations": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        <path d="M 40 110 ${Array.from({length: 70}, (_, i) => {
          const x = -3 + i*0.1;
          const psi = Math.exp(-x*x/2) * Math.cos(x*2);
          return `L ${40 + i*4.9} ${110 - psi*60}`;
        }).join(' ')}" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <text x="320" y="40" style="${S.txt}">$\\psi(x)$</text>
        <text x="200" y="210" text-anchor="middle" style="${S.txtMuted}">$|\\psi|^2$ is the probability density</text>
      `),
      caption: "Wavefunction. Where $|\\psi|^2$ is big, you'll likely find the particle. Squiggles signify momentum."
    },

    "solid-state": {
      svg: wrap(`
        ${Array.from({length: 6}, (_, i) => Array.from({length: 4}, (_, j) => `<circle cx="${60 + i*60}" cy="${50 + j*40}" r="10" style="fill:#5eead4;opacity:0.8;"/>`).join('')).join('')}
        ${Array.from({length: 6}, (_, i) => Array.from({length: 4}, (_, j) => `${i < 5 ? `<line x1="${70 + i*60}" y1="${50 + j*40}" x2="${110 + i*60}" y2="${50 + j*40}" style="${S.axis}"/>` : ''} ${j < 3 ? `<line x1="${60 + i*60}" y1="${60 + j*40}" x2="${60 + i*60}" y2="${80 + j*40}" style="${S.axis}"/>` : ''}`).join('')).join('')}
        <text x="200" y="225" text-anchor="middle" style="${S.txt}">crystal lattice</text>
      `, 400, 240),
      caption: "Crystals are periodic arrays of atoms. The unit cell repeats by translation in three directions."
    },

    "particle-physics": {
      svg: wrap(`
        ${[
          ['u',60,60], ['c',120,60], ['t',180,60],
          ['d',60,100], ['s',120,100], ['b',180,100],
          ['e',60,140], ['μ',120,140], ['τ',180,140],
          ['νe',60,180], ['νμ',120,180], ['ντ',180,180]
        ].map(([name, x, y]) => `<rect x="${x-18}" y="${y-15}" width="36" height="30" style="fill:#1c2444;stroke:#5eead4;stroke-width:1.5;"/><text x="${x}" y="${y+5}" text-anchor="middle" style="${S.txt}">${name}</text>`).join('')}
        ${[['γ',260,60], ['g',310,60], ['W',260,110], ['Z',310,110], ['H',285,170]].map(([name,x,y]) => `<rect x="${x-18}" y="${y-15}" width="36" height="30" style="fill:#1c2444;stroke:#fca57a;stroke-width:1.5;"/><text x="${x}" y="${y+5}" text-anchor="middle" style="fill:#fca57a;font:13px sans-serif;">${name}</text>`).join('')}
        <text x="120" y="35" text-anchor="middle" style="${S.txtMuted}">matter</text>
        <text x="285" y="35" text-anchor="middle" style="${S.txtMuted}">forces</text>
      `, 400, 220),
      caption: "Standard Model particles. Three generations of matter (quarks + leptons) plus force carriers + Higgs."
    },

    "plasma-physics": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <circle cx="80" cy="110" r="3" style="fill:#fca57a;"/>
        <circle cx="120" cy="110" r="3" style="fill:#5eead4;"/>
        <path d="M 60 60 Q 90 100 80 140 Q 80 170 130 150 Q 160 120 200 140 Q 240 160 270 130 Q 290 100 330 120" style="stroke:#5eead4;stroke-width:1.5;fill:none;marker-end:url(#arr);"/>
        <text x="200" y="200" text-anchor="middle" style="${S.txt}">charged particle drifts and gyrates</text>
        <text x="200" y="40" text-anchor="middle" style="${S.txtMuted}">B field (out of page)</text>
        ${Array.from({length: 6}, (_, i) => Array.from({length: 3}, (_, j) => `<circle cx="${50 + i*60}" cy="${50 + j*50}" r="2" style="fill:#9aa3c2;"/>`).join('')).join('')}
      `),
      caption: "Charged particle in a magnetic field: spirals along field lines with gyroradius $r = mv/(qB)$."
    },

    "continuum-elasticity": {
      svg: wrap(`
        <rect x="100" y="80" width="160" height="60" style="${S.axis}fill:#1c2444;"/>
        <line x1="40" y1="40" x2="40" y2="180" style="${S.axis}stroke-width:3;"/>
        ${Array.from({length:7}, (_,i) => `<line x1="35" y1="${40 + i*23}" x2="55" y2="${50 + i*23}" style="${S.axis}"/>`).join('')}
        <line x1="40" y1="110" x2="100" y2="110" style="${S.axis}stroke-dasharray:3 2;"/>
        <line x1="260" y1="110" x2="380" y2="110" style="${S.arrow}"/>
        <text x="370" y="100" style="${S.txt}">F</text>
        <text x="180" y="200" text-anchor="middle" style="${S.txt}">$\\sigma = E\\varepsilon$ (Hooke's law)</text>
      `),
      caption: "Stress (force per area) and strain (fractional stretch) are linearly related by Young's modulus $E$."
    },

    "central-force": {
      svg: wrap(`
        <ellipse cx="200" cy="110" rx="130" ry="60" style="${S.axis}fill:none;"/>
        <ellipse cx="240" cy="110" rx="8" ry="8" style="fill:#fca57a;"/>
        <circle cx="100" cy="135" r="6" style="fill:#5eead4;"/>
        <line x1="240" y1="110" x2="100" y2="135" style="${S.dash}"/>
        <text x="240" y="100" style="${S.txt}">Sun</text>
        <text x="100" y="155" style="${S.txt}">planet</text>
        <text x="200" y="210" text-anchor="middle" style="${S.txtMuted}">elliptical orbit, Sun at one focus</text>
      `),
      caption: "Kepler's first law: planets move in ellipses with the Sun at one focus. Inverse-square gravity makes ellipses."
    },

    "nonlinear-chaos-physics": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        ${Array.from({length: 250}, (_, i) => {
          const r = 2.5 + i*0.006;
          if (r < 3) return `<circle cx="${40 + i*1.36}" cy="${180 - (1 - 1/r)*150}" r="0.7" style="fill:#5eead4;"/>`;
          if (r < 3.45) return `<g><circle cx="${40 + i*1.36}" cy="${180 - 50}" r="0.7" style="fill:#5eead4;"/><circle cx="${40 + i*1.36}" cy="${180 - 120}" r="0.7" style="fill:#5eead4;"/></g>`;
          return Array.from({length: 20}, (_, j) => `<circle cx="${40 + i*1.36}" cy="${180 - 30 - j*7 - Math.random()*20}" r="0.5" style="fill:#5eead4;opacity:0.6;"/>`).join('');
        }).join('')}
        <text x="200" y="220" text-anchor="middle" style="${S.txt}">logistic map: period doubling → chaos</text>
      `, 400, 235),
      caption: "The famous bifurcation diagram. Stable → 2-cycle → 4-cycle → ... → chaos. Found by Feigenbaum in 1975."
    },

    "angular-momentum-spin": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        <line x1="200" y1="110" x2="200" y2="50" style="stroke:#5eead4;stroke-width:3;fill:none;marker-end:url(#arr);"/>
        <text x="220" y="55" style="${S.txt}">+ℏ/2</text>
        <line x1="200" y1="110" x2="200" y2="170" style="stroke:#fca57a;stroke-width:3;fill:none;marker-end:url(#arrR);"/>
        <text x="220" y="180" style="fill:#fca57a;font:13px sans-serif;">−ℏ/2</text>
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">spin-1/2 measurement: only two outcomes</text>
      `),
      caption: "Spin: intrinsic angular momentum. Spin-1/2 only allows two outcomes — up or down — along any chosen axis."
    },

    "qm-3d-hydrogen": {
      svg: wrap(`
        <circle cx="120" cy="110" r="40" style="${S.axis}fill:#5eead4;fill-opacity:0.3;"/>
        <text x="120" y="170" text-anchor="middle" style="${S.txt}">1s</text>
        <ellipse cx="270" cy="110" rx="60" ry="30" style="${S.axis}fill:#5eead4;fill-opacity:0.2;"/>
        <ellipse cx="270" cy="110" rx="20" ry="50" style="${S.axis}fill:#5eead4;fill-opacity:0.2;" transform="rotate(90 270 110)"/>
        <text x="270" y="170" text-anchor="middle" style="${S.txt}">2p</text>
      `),
      caption: "Hydrogen orbitals: 1s spherical, 2p dumbbell. Shape encodes angular momentum quantum number $\\ell$."
    },

    "perturbation-theory": {
      svg: wrap(`
        <line x1="60" y1="50" x2="180" y2="50" style="stroke:#5eead4;stroke-width:2;"/>
        <text x="120" y="40" text-anchor="middle" style="${S.txt}">E₀ (degenerate)</text>
        <text x="180" y="55" style="${S.txtMuted}">→ perturbation →</text>
        <line x1="260" y1="35" x2="380" y2="35" style="stroke:#fca57a;stroke-width:2;"/>
        <line x1="260" y1="80" x2="380" y2="80" style="stroke:#fca57a;stroke-width:2;"/>
        <text x="380" y="40" style="fill:#fca57a;font:13px sans-serif;">E₀ + ε₁</text>
        <text x="380" y="85" style="fill:#fca57a;font:13px sans-serif;">E₀ + ε₂</text>
        <line x1="60" y1="150" x2="180" y2="150" style="stroke:#5eead4;stroke-width:2;"/>
        <text x="120" y="170" text-anchor="middle" style="${S.txt}">E₁</text>
        <line x1="260" y1="155" x2="380" y2="155" style="stroke:#fca57a;stroke-width:2;"/>
        <text x="380" y="160" style="fill:#fca57a;font:13px sans-serif;">E₁ + δ</text>
      `),
      caption: "Perturbation theory: a small extra term shifts and splits energy levels. Degenerate levels split most dramatically."
    },

    "scattering-theory": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}stroke-dasharray:4 3;"/>
        <line x1="40" y1="110" x2="180" y2="110" style="${S.arrow}"/>
        <circle cx="200" cy="110" r="14" style="fill:#fca57a;"/>
        <line x1="220" y1="110" x2="340" y2="50" style="stroke:#5eead4;stroke-width:2;fill:none;marker-end:url(#arr);"/>
        <line x1="220" y1="110" x2="340" y2="170" style="stroke:#5eead4;stroke-width:1;fill:none;marker-end:url(#arr);opacity:0.6;"/>
        <line x1="220" y1="110" x2="380" y2="110" style="stroke:#5eead4;stroke-width:1;fill:none;marker-end:url(#arr);opacity:0.4;"/>
        <text x="300" y="40" style="${S.txt}">θ</text>
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">$d\\sigma/d\\Omega$ as function of θ</text>
      `, 400, 230),
      caption: "Beam comes in, scatters off a target. The angular distribution of outgoing particles encodes the potential."
    },

    "density-matrices": {
      svg: wrap(`
        <circle cx="200" cy="110" r="80" style="${S.axis}fill:none;"/>
        <ellipse cx="200" cy="110" rx="80" ry="25" style="${S.dash}"/>
        <line x1="200" y1="30" x2="200" y2="190" style="${S.dash}"/>
        <text x="205" y="30" style="${S.txt}">|0⟩</text>
        <text x="205" y="195" style="${S.txt}">|1⟩</text>
        <line x1="200" y1="110" x2="270" y2="70" style="stroke:#5eead4;stroke-width:2;fill:none;marker-end:url(#arr);"/>
        <text x="275" y="65" style="${S.txt}">|ψ⟩</text>
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">Bloch sphere of a qubit</text>
      `, 400, 230),
      caption: "Bloch sphere: every pure qubit state is a point on the sphere; mixed states sit inside it."
    },

    "path-integrals": {
      svg: wrap(`
        <circle cx="60" cy="110" r="5" style="fill:#5eead4;"/>
        <circle cx="340" cy="110" r="5" style="fill:#5eead4;"/>
        <text x="60" y="135" text-anchor="middle" style="${S.txt}">x</text>
        <text x="340" y="135" text-anchor="middle" style="${S.txt}">x'</text>
        <line x1="60" y1="110" x2="340" y2="110" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <path d="M 60 110 Q 200 50 340 110" style="${S.axis}"/>
        <path d="M 60 110 Q 200 170 340 110" style="${S.axis}"/>
        <path d="M 60 110 C 150 30 250 190 340 110" style="${S.axis}"/>
        <text x="200" y="40" text-anchor="middle" style="${S.txtMuted}">all possible paths contribute</text>
      `),
      caption: "Feynman's path integral: sum over EVERY path connecting endpoints, weighted by $e^{iS/\\hbar}$."
    },

    "quantum-information": {
      svg: wrap(`
        <circle cx="200" cy="110" r="80" style="${S.axis}fill:none;"/>
        <ellipse cx="200" cy="110" rx="80" ry="25" style="${S.dash}"/>
        <line x1="200" y1="30" x2="200" y2="190" style="${S.dash}"/>
        <text x="205" y="30" style="${S.txt}">|0⟩</text>
        <text x="205" y="195" style="${S.txt}">|1⟩</text>
        <line x1="120" y1="110" x2="280" y2="110" style="${S.dash}"/>
        <text x="280" y="105" style="${S.txt}">|+⟩</text>
        <text x="120" y="105" style="${S.txt}">|−⟩</text>
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">single qubit state space</text>
      `, 400, 230),
      caption: "A qubit lives on the Bloch sphere. Quantum gates rotate the state vector around axes."
    },

    "symmetries-noether": {
      svg: wrap(`
        <text x="80" y="80" style="${S.txt}">$t \\to t + \\tau$</text>
        <text x="240" y="80" style="${S.txt}">→ Energy</text>
        <text x="80" y="125" style="${S.txt}">$\\vec x \\to \\vec x + \\vec a$</text>
        <text x="240" y="125" style="${S.txt}">→ Momentum</text>
        <text x="80" y="170" style="${S.txt}">rotation by θ</text>
        <text x="240" y="170" style="${S.txt}">→ Ang. mom.</text>
        <text x="200" y="40" text-anchor="middle" style="${S.txtMuted}">symmetry → conservation law</text>
      `),
      caption: "Noether's theorem: every continuous symmetry yields a conservation law. The deepest connection in classical mechanics."
    },

    "classical-field-theory": {
      svg: wrap(`
        ${Array.from({length: 14}, (_, i) => Array.from({length: 8}, (_, j) => {
          const x = 60 + i*22, y = 40 + j*22;
          const v = Math.sin((x-200)/40) * Math.cos((y-110)/30);
          const sz = 3 + Math.abs(v)*5;
          const op = 0.3 + Math.abs(v)*0.6;
          return `<circle cx="${x}" cy="${y}" r="${sz}" style="fill:${v > 0 ? '#5eead4' : '#fca57a'};opacity:${op};"/>`;
        }).join('')).join('')}
        <text x="200" y="225" text-anchor="middle" style="${S.txt}">scalar field $\\phi(x, y)$</text>
      `, 400, 240),
      caption: "A field assigns a value at every point in spacetime. Equations of motion govern its evolution."
    },

    "qft": {
      svg: wrap(`
        <line x1="60" y1="50" x2="200" y2="110" style="stroke:#5eead4;stroke-width:2;fill:none;marker-end:url(#arr);"/>
        <line x1="60" y1="170" x2="200" y2="110" style="stroke:#5eead4;stroke-width:2;fill:none;marker-end:url(#arr);"/>
        <line x1="200" y1="110" x2="340" y2="50" style="stroke:#fca57a;stroke-width:2;fill:none;marker-end:url(#arrR);"/>
        <line x1="200" y1="110" x2="340" y2="170" style="stroke:#fca57a;stroke-width:2;fill:none;marker-end:url(#arrR);"/>
        <text x="40" y="50" style="${S.txt}">e⁻</text>
        <text x="40" y="180" style="${S.txt}">e⁺</text>
        <text x="350" y="50" style="fill:#fca57a;font:13px sans-serif;">μ⁻</text>
        <text x="350" y="180" style="fill:#fca57a;font:13px sans-serif;">μ⁺</text>
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">Feynman diagram: $e^+ e^- \\to \\mu^+ \\mu^-$ (γ exchange)</text>
        <path d="M 200 110 Q 220 100 200 100 Q 180 100 200 110" style="stroke:#b48cff;stroke-width:1.5;stroke-dasharray:2 2;fill:none;"/>
      `, 400, 230),
      caption: "Feynman diagrams: vertices = interactions, lines = particle propagators. Sum diagrams to compute amplitudes."
    },

    "renormalization": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <text x="385" y="195" style="${S.txtMuted}">log(scale)</text>
        <text x="35" y="20" style="${S.txtMuted}">coupling</text>
        <path d="M 60 170 Q 150 150 250 80 Q 320 30 360 25" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <text x="200" y="100" style="${S.txt}">growing (QED)</text>
        <path d="M 60 30 Q 150 60 250 130 Q 320 165 360 170" style="stroke:#fca57a;stroke-width:2;fill:none;"/>
        <text x="240" y="155" style="fill:#fca57a;font:13px sans-serif;">shrinking (QCD)</text>
      `),
      caption: "Coupling constants 'run' with energy scale. QED grows; QCD shrinks (asymptotic freedom)."
    },

    "radiation-theory": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}stroke-dasharray:4 3;"/>
        <circle cx="200" cy="110" r="5" style="fill:#fca57a;"/>
        ${Array.from({length: 18}, (_, i) => {
          const a = i * Math.PI/9;
          const r = 80 * Math.sin(a) * Math.sin(a);
          const x = 200 + r * Math.cos(a);
          const y = 110 - r * Math.sin(a);
          return `<line x1="200" y1="110" x2="${x}" y2="${y}" style="stroke:#5eead4;stroke-width:1.5;opacity:${0.3 + Math.sin(a)*0.6};"/>`;
        }).join('')}
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">dipole radiation $\\propto \\sin^2\\theta$</text>
      `, 400, 230),
      caption: "Dipole radiation: zero along the dipole axis, max perpendicular. A figure-eight pattern."
    },

    "em-waves-matter": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="40" y1="40" x2="40" y2="200" style="${S.axis}"/>
        <rect x="200" y="40" width="180" height="160" style="fill:#5eead4;fill-opacity:0.15;stroke:none;"/>
        <text x="290" y="35" style="${S.txt}">medium n > 1</text>
        <line x1="40" y1="50" x2="200" y2="110" style="${S.arrow}"/>
        <text x="100" y="65" style="${S.txt}">incident</text>
        <line x1="200" y1="110" x2="200" y2="180" style="${S.dash}"/>
        <line x1="200" y1="110" x2="320" y2="170" style="stroke:#fca57a;stroke-width:2;fill:none;marker-end:url(#arrR);"/>
        <text x="280" y="160" style="fill:#fca57a;font:13px sans-serif;">refracted</text>
      `),
      caption: "Snell's law: $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$. Light bends toward the normal in denser media."
    },

    "lasers": {
      svg: wrap(`
        <line x1="60" y1="40" x2="200" y2="40" style="stroke:#5eead4;stroke-width:2;"/>
        <line x1="60" y1="90" x2="200" y2="90" style="stroke:#fca57a;stroke-width:2;"/>
        <line x1="60" y1="180" x2="200" y2="180" style="stroke:#e8ecf7;stroke-width:2;"/>
        <text x="220" y="45" style="${S.txt}">E₃ (pump)</text>
        <text x="220" y="95" style="fill:#fca57a;font:13px sans-serif;">E₂ (metastable)</text>
        <text x="220" y="185" style="${S.txt}">E₁ (ground)</text>
        <line x1="100" y1="40" x2="100" y2="90" style="stroke:#b48cff;stroke-width:1;stroke-dasharray:2 2;"/>
        <line x1="160" y1="90" x2="160" y2="180" style="stroke:#5eead4;stroke-width:1.5;marker-end:url(#arr);"/>
        <text x="170" y="135" style="${S.txt}">stimulated</text>
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">3-level laser scheme</text>
      `, 400, 230),
      caption: "Population inversion in 3-level system. Stimulated emission from metastable level → laser light."
    },

    "phase-transitions": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <text x="385" y="195" style="${S.txtMuted}">T</text>
        <text x="35" y="20" style="${S.txtMuted}">M</text>
        <path d="M 40 90 Q 100 100 180 130 Q 220 160 240 180" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <line x1="240" y1="180" x2="380" y2="180" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <line x1="240" y1="20" x2="240" y2="200" style="${S.dash}"/>
        <text x="240" y="215" text-anchor="middle" style="${S.txt}">T_c</text>
        <text x="200" y="65" style="${S.txtMuted}">$M \\sim (T_c - T)^\\beta$</text>
      `),
      caption: "2nd-order transition: order parameter (magnetization) drops continuously to zero at $T_c$ with power-law scaling."
    },

    "phonons": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <text x="385" y="195" style="${S.txtMuted}">k</text>
        <text x="35" y="20" style="${S.txtMuted}">ω</text>
        <path d="M 40 180 Q 130 60 240 50 Q 320 50 380 60" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <text x="80" y="135" style="${S.txt}">acoustic</text>
        <path d="M 40 100 Q 130 30 240 35 Q 320 35 380 45" style="stroke:#fca57a;stroke-width:2;fill:none;"/>
        <text x="120" y="60" style="fill:#fca57a;font:13px sans-serif;">optical</text>
        <line x1="240" y1="20" x2="240" y2="200" style="${S.dash}"/>
        <text x="240" y="215" text-anchor="middle" style="${S.txtMuted}">BZ edge</text>
      `),
      caption: "Phonon dispersion: acoustic branches go through origin; optical branches have gap. Slope at $k=0$ is sound speed."
    },

    "stellar-evolution": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <text x="385" y="195" style="${S.txtMuted}">T (hot ←)</text>
        <text x="20" y="20" style="${S.txtMuted}">L</text>
        <path d="M 60 50 Q 130 80 200 110 Q 270 140 340 170" style="stroke:#5eead4;stroke-width:3;fill:none;"/>
        <text x="280" y="155" style="${S.txt}">main seq.</text>
        <circle cx="280" cy="80" r="6" style="fill:#fca57a;"/>
        <text x="290" y="75" style="fill:#fca57a;font:13px sans-serif;">red giant</text>
        <circle cx="80" cy="160" r="3" style="fill:#9aa3c2;"/>
        <text x="90" y="160" style="${S.txtMuted}">white dwarf</text>
      `),
      caption: "HR diagram: luminosity vs surface temperature. Most stars lie on the main sequence; evolution moves them off."
    },

    "stellar-nucleosynthesis": {
      svg: wrap(`
        ${['H','H','He³','He³','He⁴'].map((n, i) => `<circle cx="${60 + i*70}" cy="110" r="20" style="fill:#5eead4;opacity:0.7;"/><text x="${60 + i*70}" y="115" text-anchor="middle" style="fill:#0b1020;font:13px sans-serif;">${n}</text>`).join('')}
        ${[0,1,2,3].map(i => `<path d="M ${85 + i*70} 110 L ${115 + i*70} 110" style="${S.arrow}"/>`).join('')}
        <text x="200" y="60" text-anchor="middle" style="${S.txt}">p-p chain (Sun)</text>
        <text x="200" y="170" text-anchor="middle" style="${S.txtMuted}">net: 4H → He + 26.7 MeV</text>
      `),
      caption: "Proton-proton chain. Four hydrogen nuclei fuse step-by-step into helium-4, releasing solar energy."
    },

    "compact-objects": {
      svg: wrap(`
        <circle cx="200" cy="110" r="70" style="fill:#1c2444;stroke:#e8ecf7;stroke-width:2;"/>
        <circle cx="200" cy="110" r="55" style="${S.axis}fill:none;stroke-dasharray:3 2;"/>
        <circle cx="200" cy="110" r="35" style="fill:#fca57a;opacity:0.7;"/>
        <text x="280" y="60" style="${S.txt}">crust</text>
        <line x1="240" y1="80" x2="270" y2="65" style="${S.axis}"/>
        <text x="290" y="120" style="${S.txt}">superfluid</text>
        <line x1="240" y1="110" x2="280" y2="115" style="${S.axis}"/>
        <text x="280" y="170" style="${S.txt}">core</text>
        <line x1="220" y1="130" x2="270" y2="160" style="${S.axis}"/>
        <text x="200" y="220" text-anchor="middle" style="${S.txt}">neutron star (10 km, $\\sim M_\\odot$)</text>
      `, 400, 230),
      caption: "Neutron star: a ~10 km ball with the mass of the Sun. Density rivals atomic nuclei."
    },

    "galactic-dynamics": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <text x="385" y="195" style="${S.txtMuted}">r</text>
        <text x="35" y="20" style="${S.txtMuted}">v</text>
        <path d="M 40 180 Q 80 100 120 70 Q 200 80 380 80" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <text x="280" y="70" style="${S.txt}">observed (flat)</text>
        <path d="M 40 180 Q 100 80 140 90 Q 250 140 380 165" style="stroke:#fca57a;stroke-width:1.5;fill:none;stroke-dasharray:3 2;"/>
        <text x="280" y="170" style="fill:#fca57a;font:13px sans-serif;">Kepler (visible)</text>
        <text x="200" y="40" text-anchor="middle" style="${S.txtMuted}">discrepancy → dark matter</text>
      `),
      caption: "Galactic rotation curves stay flat at large radii — direct evidence for unseen mass (dark matter)."
    },

    "bbn-cmb-inflation": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <text x="385" y="105" style="${S.txtMuted}">t</text>
        ${[
          {t: 60, label: "inflation", e: "10⁻³²s", col: "#b48cff"},
          {t: 130, label: "BBN", e: "100 s", col: "#5eead4"},
          {t: 220, label: "recomb", e: "380 ky", col: "#fca57a"},
          {t: 310, label: "today", e: "13.8 Gy", col: "#e8ecf7"}
        ].map(({t, label, e, col}) => `<circle cx="${t}" cy="110" r="6" style="fill:${col};"/><text x="${t}" y="90" text-anchor="middle" style="fill:${col};font:13px sans-serif;">${label}</text><text x="${t}" y="135" text-anchor="middle" style="${S.txtMuted}">${e}</text>`).join('')}
      `, 400, 180),
      caption: "Cosmic timeline. Each milestone marks a major phase: inflation, nucleosynthesis, recombination, today."
    },

    "gravitational-waves": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <path d="M 40 110 ${Array.from({length: 80}, (_, i) => {
          const t = i*0.1;
          const f = 1 + t*0.6;
          const amp = 30 + t*4;
          return `L ${40 + i*4.2} ${110 + amp*Math.sin(t*f*2)}`;
        }).join(' ')}" style="stroke:#5eead4;stroke-width:1.5;fill:none;"/>
        <text x="200" y="200" text-anchor="middle" style="${S.txt}">binary inspiral chirp</text>
      `),
      caption: "GW signature of merging compact objects: frequency and amplitude both rise toward merger ('chirp')."
    },

    "high-energy-astrophysics": {
      svg: wrap(`
        <circle cx="200" cy="110" r="25" style="fill:#fca57a;opacity:0.8;"/>
        <ellipse cx="200" cy="110" rx="60" ry="20" style="${S.axis}fill:#5eead4;fill-opacity:0.15;"/>
        <path d="M 200 85 L 320 30" style="stroke:#5eead4;stroke-width:8;fill:none;opacity:0.6;"/>
        <path d="M 200 135 L 320 190" style="stroke:#5eead4;stroke-width:8;fill:none;opacity:0.6;"/>
        <text x="280" y="20" style="${S.txt}">relativistic jet</text>
        <text x="200" y="220" text-anchor="middle" style="${S.txt}">AGN: black hole + accretion disk + jets</text>
      `, 400, 230),
      caption: "Active galactic nucleus: supermassive black hole, accretion disk, and relativistic jets emitting from radio to gamma."
    },

    "math-methods-physics": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        <path d="M 40 110 ${Array.from({length: 70}, (_, i) => {
          const x = -3 + i*0.1;
          const y = Math.exp(-x*x/2);
          return `L ${40 + i*4.9} ${110 - y*70}`;
        }).join(' ')}" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <text x="295" y="60" style="${S.txt}">Gaussian</text>
      `),
      caption: "Special functions (Gaussian, Bessel, Legendre, gamma...) recur throughout physics. Mastery is a force multiplier."
    },

    "group-theory-physics": {
      svg: wrap(`
        ${[0,1,2,3,4,5].map(i => {
          const a = i * Math.PI/3;
          const x = 200 + 70*Math.cos(a);
          const y = 110 + 70*Math.sin(a);
          return `<circle cx="${x}" cy="${y}" r="14" style="fill:#5eead4;opacity:0.6;"/>`;
        }).join('')}
        ${Array.from({length: 6}, (_, i) => {
          const a1 = i * Math.PI/3;
          const a2 = ((i+1)%6) * Math.PI/3;
          return `<line x1="${200 + 55*Math.cos(a1)}" y1="${110 + 55*Math.sin(a1)}" x2="${200 + 55*Math.cos(a2)}" y2="${110 + 55*Math.sin(a2)}" style="${S.axis}"/>`;
        }).join('')}
        <text x="200" y="115" text-anchor="middle" style="${S.txt}">$D_6$</text>
        <text x="200" y="210" text-anchor="middle" style="${S.txtMuted}">symmetries of a hexagon</text>
      `),
      caption: "Discrete groups describe crystal symmetries; continuous groups describe rotations and gauge symmetries."
    },

    "computational-physics": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        ${Array.from({length: 12}, (_, i) => {
          const t = i / 11;
          const y = 180 - 160 * Math.sin(t*Math.PI*1.5) * Math.exp(-t*0.5);
          return `<circle cx="${40 + i*30}" cy="${y}" r="3" style="fill:#fca57a;"/>${i < 11 ? `<line x1="${40 + i*30}" y1="${y}" x2="${70 + i*30}" y2="${180 - 160 * Math.sin((t+1/11)*Math.PI*1.5) * Math.exp(-(t+1/11)*0.5)}" style="stroke:#fca57a;stroke-width:1;stroke-dasharray:1 1;"/>` : ''}`;
        }).join('')}
        <path d="M 40 180 ${Array.from({length: 100}, (_, i) => {
          const t = i/99;
          return `L ${40 + i*3.4} ${180 - 160 * Math.sin(t*Math.PI*1.5) * Math.exp(-t*0.5)}`;
        }).join(' ')}" style="stroke:#5eead4;stroke-width:1.5;fill:none;opacity:0.7;"/>
        <text x="200" y="210" text-anchor="middle" style="${S.txtMuted}">discrete integration of a continuous ODE</text>
      `),
      caption: "Numerical integration: discrete steps approximate a continuous trajectory. Trade off step size against accuracy."
    },

    "soft-matter-biophysics": {
      svg: wrap(`
        ${(() => {
          const pts = [];
          let x = 80, y = 110;
          let a = 0;
          for (let i = 0; i < 30; i++) {
            pts.push([x, y]);
            a += (Math.random() - 0.5) * 1.5;
            x += Math.cos(a) * 10;
            y += Math.sin(a) * 10;
          }
          return pts.slice(0, -1).map((p, i) => `<line x1="${p[0]}" y1="${p[1]}" x2="${pts[i+1][0]}" y2="${pts[i+1][1]}" style="stroke:#5eead4;stroke-width:2;"/>`).join('') +
                 pts.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3" style="fill:#5eead4;"/>`).join('');
        })()}
        <text x="200" y="210" text-anchor="middle" style="${S.text}">polymer random coil</text>
      `, 400, 230),
      caption: "A polymer in solution: a flexible chain whose RMS end-to-end distance scales as $b\\sqrt N$."
    },

    // ===== CONTROL =====

    "intro-control": {
      svg: wrap(`
        <rect x="40" y="80" width="40" height="40" style="${S.axis}fill:none;"/>
        <text x="60" y="105" text-anchor="middle" style="${S.txt}">r</text>
        <circle cx="120" cy="100" r="14" style="${S.axis}fill:none;"/>
        <text x="120" y="105" text-anchor="middle" style="${S.txt}">⊕</text>
        <line x1="80" y1="100" x2="106" y2="100" style="${S.arrow}"/>
        <text x="105" y="95" style="${S.txtMuted}">+</text>
        <rect x="160" y="80" width="60" height="40" style="${S.axis}fill:#1c2444;"/>
        <text x="190" y="105" text-anchor="middle" style="${S.txt}">C(s)</text>
        <line x1="134" y1="100" x2="156" y2="100" style="${S.arrow}"/>
        <rect x="240" y="80" width="60" height="40" style="${S.axis}fill:#1c2444;"/>
        <text x="270" y="105" text-anchor="middle" style="${S.txt}">P(s)</text>
        <line x1="220" y1="100" x2="236" y2="100" style="${S.arrow}"/>
        <line x1="300" y1="100" x2="370" y2="100" style="${S.arrow}"/>
        <text x="380" y="105" style="${S.txt}">y</text>
        <rect x="200" y="160" width="60" height="30" style="${S.axis}fill:#1c2444;"/>
        <text x="230" y="180" text-anchor="middle" style="${S.txt}">H(s)</text>
        <line x1="340" y1="100" x2="340" y2="175" style="${S.axis}"/>
        <line x1="340" y1="175" x2="262" y2="175" style="${S.axis}"/>
        <line x1="200" y1="175" x2="120" y2="175" style="${S.axis}"/>
        <line x1="120" y1="175" x2="120" y2="118" style="${S.arrow}"/>
        <text x="115" y="130" style="${S.txtMuted}">−</text>
      `),
      caption: "Classical feedback loop. Reference $r$ minus measured output $y$ drives the controller $C$; plant $P$ produces the output; sensor $H$ closes the loop."
    },

    "laplace-transforms-control": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        <text x="385" y="105" style="${S.txt}">Re(s)</text>
        <text x="195" y="25" style="${S.txt}">Im(s)</text>
        <rect x="40" y="20" width="160" height="180" style="fill:#5eead4;fill-opacity:0.1;"/>
        <text x="120" y="50" text-anchor="middle" style="${S.txtMuted}">LHP (stable)</text>
        <text x="290" y="50" text-anchor="middle" style="fill:#fca57a;font:13px sans-serif;">RHP (unstable)</text>
        <circle cx="140" cy="80" r="4" style="fill:#5eead4;"/>
        <circle cx="140" cy="140" r="4" style="fill:#5eead4;"/>
        <text x="155" y="80" style="${S.txt}">×</text>
        <text x="155" y="140" style="${S.txt}">×</text>
      `),
      caption: "The s-plane. Poles in the LEFT half-plane → stable. Poles in the RIGHT half-plane → exponential blow-up."
    },

    "transfer-functions": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        <text x="195" y="25" style="${S.txt}">jω</text>
        <text x="385" y="105" style="${S.txt}">σ</text>
        <circle cx="150" cy="75" r="6" style="fill:none;stroke:#5eead4;stroke-width:2;"/>
        <circle cx="150" cy="145" r="6" style="fill:none;stroke:#5eead4;stroke-width:2;"/>
        <text x="150" y="60" style="${S.txt}">○ zeros</text>
        <line x1="120" y1="100" x2="135" y2="115" style="stroke:#fca57a;stroke-width:2;"/>
        <line x1="120" y1="115" x2="135" y2="100" style="stroke:#fca57a;stroke-width:2;"/>
        <line x1="120" y1="135" x2="135" y2="150" style="stroke:#fca57a;stroke-width:2;"/>
        <line x1="120" y1="150" x2="135" y2="135" style="stroke:#fca57a;stroke-width:2;"/>
        <text x="155" y="135" style="fill:#fca57a;font:13px sans-serif;">× poles</text>
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">pole-zero plot in s-plane</text>
      `, 400, 230),
      caption: "Pole-zero plot. Crosses = poles (natural modes); circles = zeros (input shapes the system blocks)."
    },

    "first-order-response": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <text x="385" y="195" style="${S.txtMuted}">t</text>
        <text x="35" y="25" style="${S.txtMuted}">y</text>
        <line x1="40" y1="40" x2="380" y2="40" style="${S.dash}"/>
        <text x="385" y="40" style="${S.txt}">1</text>
        <path d="M 40 180 ${Array.from({length: 70}, (_, i) => `L ${40 + i*5} ${180 - 140*(1 - Math.exp(-i*0.1))}`).join(' ')}" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <line x1="90" y1="180" x2="90" y2="92" style="${S.dash}"/>
        <text x="90" y="195" text-anchor="middle" style="${S.txtMuted}">τ</text>
        <text x="120" y="100" style="${S.txt}">63%</text>
      `),
      caption: "First-order step response. Reaches 63% at one time constant $\\tau$, settles by $4\\tau$."
    },

    "second-order-response": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <line x1="40" y1="60" x2="380" y2="60" style="${S.dash}"/>
        <text x="385" y="60" style="${S.txt}">final</text>
        <path d="M 40 180 ${Array.from({length: 100}, (_, i) => {
          const t = i*0.08;
          const y = 1 - Math.exp(-0.3*t) * Math.cos(t);
          return `L ${40 + i*3.4} ${180 - 120*y}`;
        }).join(' ')}" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <text x="100" y="40" style="${S.txt}">% OS</text>
        <text x="270" y="170" style="${S.txt}">settling</text>
      `),
      caption: "Underdamped 2nd-order: overshoots, oscillates, settles. Damping $\\zeta$ controls overshoot."
    },

    "block-diagrams": {
      svg: wrap(`
        <rect x="60" y="80" width="60" height="40" style="${S.axis}fill:#1c2444;"/>
        <text x="90" y="105" text-anchor="middle" style="${S.txt}">G₁</text>
        <rect x="160" y="80" width="60" height="40" style="${S.axis}fill:#1c2444;"/>
        <text x="190" y="105" text-anchor="middle" style="${S.txt}">G₂</text>
        <line x1="120" y1="100" x2="156" y2="100" style="${S.arrow}"/>
        <line x1="40" y1="100" x2="56" y2="100" style="${S.arrow}"/>
        <line x1="220" y1="100" x2="380" y2="100" style="${S.arrow}"/>
        <text x="270" y="80" text-anchor="middle" style="${S.txtMuted}">→ series: G₁G₂</text>
        <rect x="60" y="160" width="60" height="40" style="${S.axis}fill:#1c2444;"/>
        <text x="90" y="185" text-anchor="middle" style="${S.txt}">G₁</text>
        <rect x="60" y="220" width="60" height="40" style="${S.axis}fill:#1c2444;"/>
        <text x="90" y="245" text-anchor="middle" style="${S.txt}">G₂</text>
        <circle cx="180" cy="210" r="10" style="${S.axis}fill:none;"/>
        <text x="180" y="215" text-anchor="middle" style="${S.txt}">+</text>
        <line x1="120" y1="180" x2="172" y2="206" style="${S.arrow}"/>
        <line x1="120" y1="240" x2="172" y2="214" style="${S.arrow}"/>
        <line x1="190" y1="210" x2="380" y2="210" style="${S.arrow}"/>
        <text x="270" y="200" text-anchor="middle" style="${S.txtMuted}">→ parallel: G₁+G₂</text>
      `, 400, 290),
      caption: "Two reduction rules: cascaded blocks multiply; parallel paths add."
    },

    "routh-hurwitz": {
      svg: wrap(`
        <text x="40" y="50" style="${S.txt}">s⁴ | 1   3   1</text>
        <text x="40" y="80" style="${S.txt}">s³ | 3   2   0</text>
        <text x="40" y="110" style="${S.txt}">s² | 7/3 1</text>
        <text x="40" y="140" style="${S.txt}">s¹ | 5/7</text>
        <text x="40" y="170" style="${S.txt}">s⁰ | 1</text>
        <rect x="35" y="35" width="60" height="145" style="stroke:#5eead4;fill:none;stroke-width:2;"/>
        <text x="250" y="100" style="${S.txt}">all positive →</text>
        <text x="250" y="125" style="fill:#5eead4;font:14px sans-serif;">STABLE</text>
      `),
      caption: "Routh array. Count sign changes in the boxed first column — that's the number of unstable poles."
    },

    "root-locus": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        <line x1="120" y1="100" x2="135" y2="115" style="stroke:#5eead4;stroke-width:2;"/>
        <line x1="120" y1="115" x2="135" y2="100" style="stroke:#5eead4;stroke-width:2;"/>
        <line x1="160" y1="100" x2="175" y2="115" style="stroke:#5eead4;stroke-width:2;"/>
        <line x1="160" y1="115" x2="175" y2="100" style="stroke:#5eead4;stroke-width:2;"/>
        <line x1="200" y1="100" x2="215" y2="115" style="stroke:#5eead4;stroke-width:2;"/>
        <line x1="200" y1="115" x2="215" y2="100" style="stroke:#5eead4;stroke-width:2;"/>
        <line x1="120" y1="110" x2="160" y2="110" style="stroke:#fca57a;stroke-width:2;"/>
        <path d="M 170 110 Q 200 50 300 30" style="stroke:#fca57a;stroke-width:2;fill:none;"/>
        <path d="M 170 110 Q 200 170 300 190" style="stroke:#fca57a;stroke-width:2;fill:none;"/>
        <text x="160" y="170" style="${S.txtMuted}">poles → as K grows</text>
      `),
      caption: "Root locus: closed-loop poles trace paths as gain $K$ varies. Crossing into RHP marks instability."
    },

    "bode-plots": {
      svg: wrap(`
        <line x1="40" y1="100" x2="380" y2="100" style="${S.axis}"/>
        <line x1="40" y1="30" x2="40" y2="110" style="${S.axis}"/>
        <text x="35" y="25" style="${S.txtMuted}">|G| dB</text>
        <line x1="40" y1="50" x2="200" y2="50" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <line x1="200" y1="50" x2="350" y2="100" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <text x="280" y="70" style="${S.txtMuted}">−20 dB/dec</text>
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="120" x2="40" y2="200" style="${S.axis}"/>
        <text x="35" y="115" style="${S.txtMuted}">∠G</text>
        <line x1="40" y1="135" x2="170" y2="135" style="stroke:#fca57a;stroke-width:2;fill:none;"/>
        <path d="M 170 135 Q 230 160 300 180" style="stroke:#fca57a;stroke-width:2;fill:none;"/>
        <line x1="300" y1="180" x2="380" y2="180" style="stroke:#fca57a;stroke-width:2;fill:none;"/>
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">log ω</text>
      `, 400, 230),
      caption: "Bode plot: magnitude in dB and phase in degrees, both vs $\\log\\omega$. Slope rules make sketching mechanical."
    },

    "nyquist": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        <text x="385" y="105" style="${S.txt}">Re</text>
        <text x="195" y="25" style="${S.txt}">Im</text>
        <circle cx="150" cy="110" r="60" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <text x="80" y="65" style="${S.txt}">G(jω)</text>
        <line x1="150" y1="110" x2="150" y2="110" style="stroke:#5eead4;stroke-width:0;"/>
        <line x1="155" y1="105" x2="165" y2="115" style="stroke:#fca57a;stroke-width:2;"/>
        <line x1="155" y1="115" x2="165" y2="105" style="stroke:#fca57a;stroke-width:2;"/>
        <text x="170" y="100" style="fill:#fca57a;font:13px sans-serif;">−1</text>
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">encirclements of $-1$ count unstable poles</text>
      `, 400, 230),
      caption: "Nyquist plot. Count clockwise encirclements of $-1$ to determine closed-loop stability."
    },

    "ratios-proportions": {
      svg: wrap(`
        <rect x="60" y="80" width="80" height="40" style="fill:#5eead4;opacity:0.6;"/>
        <rect x="60" y="80" width="80" height="40" style="${S.axis}"/>
        <text x="100" y="105" text-anchor="middle" style="fill:#0b1020;font:13px sans-serif;">3 parts</text>
        <rect x="180" y="80" width="160" height="40" style="fill:#fca57a;opacity:0.7;"/>
        <rect x="180" y="80" width="160" height="40" style="${S.axis}"/>
        <text x="260" y="105" text-anchor="middle" style="fill:#0b1020;font:13px sans-serif;">5 parts</text>
        <text x="200" y="155" text-anchor="middle" style="${S.txt}">ratio 3 : 5</text>
        <text x="200" y="185" text-anchor="middle" style="${S.txtMuted}">each "part" is the same size</text>
      `),
      caption: "A ratio splits a quantity into equal parts. 3:5 means 3 parts to one side, 5 to the other, 8 in total."
    },

    "number-theory": {
      svg: wrap(`
        <text x="50" y="80" style="${S.txt}">12 =</text>
        <circle cx="130" cy="75" r="18" style="fill:#5eead4;opacity:0.6;"/>
        <text x="130" y="80" text-anchor="middle" style="fill:#0b1020;font:13px sans-serif;">2</text>
        <text x="160" y="80" style="${S.txt}">×</text>
        <circle cx="190" cy="75" r="18" style="fill:#5eead4;opacity:0.6;"/>
        <text x="190" y="80" text-anchor="middle" style="fill:#0b1020;font:13px sans-serif;">2</text>
        <text x="220" y="80" style="${S.txt}">×</text>
        <circle cx="250" cy="75" r="18" style="fill:#fca57a;opacity:0.7;"/>
        <text x="250" y="80" text-anchor="middle" style="fill:#0b1020;font:13px sans-serif;">3</text>
        <text x="50" y="150" style="${S.txt}">18 =</text>
        <circle cx="130" cy="145" r="18" style="fill:#5eead4;opacity:0.6;"/>
        <text x="130" y="150" text-anchor="middle" style="fill:#0b1020;font:13px sans-serif;">2</text>
        <text x="160" y="150" style="${S.txt}">×</text>
        <circle cx="190" cy="145" r="18" style="fill:#fca57a;opacity:0.7;"/>
        <text x="190" y="150" text-anchor="middle" style="fill:#0b1020;font:13px sans-serif;">3</text>
        <text x="220" y="150" style="${S.txt}">×</text>
        <circle cx="250" cy="145" r="18" style="fill:#fca57a;opacity:0.7;"/>
        <text x="250" y="150" text-anchor="middle" style="fill:#0b1020;font:13px sans-serif;">3</text>
        <text x="60" y="195" style="${S.txtMuted}">gcd = 2 × 3 = 6 (common primes)</text>
      `, 400, 210),
      caption: "Prime factorization is unique. GCD and LCM read off directly from the prime breakdowns."
    },

    "identical-particles": {
      svg: wrap(`
        <text x="60" y="60" style="${S.txt}">Bosons:  Ψ(1, 2) = +Ψ(2, 1)</text>
        <circle cx="120" cy="100" r="12" style="fill:#5eead4;opacity:0.7;"/>
        <circle cx="170" cy="100" r="12" style="fill:#5eead4;opacity:0.7;"/>
        <text x="200" y="105" style="${S.txt}">←swap→</text>
        <circle cx="280" cy="100" r="12" style="fill:#5eead4;opacity:0.7;"/>
        <circle cx="330" cy="100" r="12" style="fill:#5eead4;opacity:0.7;"/>
        <text x="60" y="140" style="${S.txt}">Fermions: Ψ(1, 2) = −Ψ(2, 1)</text>
        <circle cx="120" cy="180" r="12" style="fill:#fca57a;opacity:0.7;"/>
        <circle cx="170" cy="180" r="12" style="fill:#fca57a;opacity:0.7;"/>
        <text x="200" y="185" style="${S.txt}">←swap→</text>
        <text x="280" y="185" style="fill:#fca57a;font:13px sans-serif;">sign flips</text>
      `, 400, 210),
      caption: "Two identical particles: bosons stay the same under swap; fermions pick up a minus sign — leading to Pauli exclusion."
    },

    "quantum-optics": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <text x="385" y="195" style="${S.txtMuted}">photon #</text>
        <text x="35" y="20" style="${S.txtMuted}">P(n)</text>
        ${[0,1,2,3,4,5,6,7,8].map(n => {
          const lam = 4;
          const p = Math.exp(-lam) * Math.pow(lam, n);
          let fact = 1; for (let k=1; k<=n; k++) fact *= k;
          const h = (p/fact) * 1200;
          return `<rect x="${50 + n*38}" y="${180 - h}" width="30" height="${h}" style="fill:#5eead4;opacity:0.7;"/>`;
        }).join('')}
        <text x="200" y="40" text-anchor="middle" style="${S.txt}">coherent state → Poisson statistics</text>
      `),
      caption: "Photon number distribution of laser light follows a Poisson distribution. Mean = variance = $|\\alpha|^2$."
    },

    "amo": {
      svg: wrap(`
        <circle cx="200" cy="110" r="14" style="fill:#fca57a;opacity:0.8;"/>
        <line x1="50" y1="110" x2="186" y2="110" style="stroke:#5eead4;stroke-width:2;marker-end:url(#arr);"/>
        <line x1="350" y1="110" x2="214" y2="110" style="stroke:#5eead4;stroke-width:2;marker-end:url(#arr);"/>
        <line x1="200" y1="20" x2="200" y2="96" style="stroke:#5eead4;stroke-width:2;marker-end:url(#arr);"/>
        <line x1="200" y1="200" x2="200" y2="124" style="stroke:#5eead4;stroke-width:2;marker-end:url(#arr);"/>
        <text x="200" y="220" text-anchor="middle" style="${S.txt}">six counter-propagating laser beams</text>
        <text x="50" y="65" style="${S.txtMuted}">photon kicks slow the atom</text>
      `, 400, 240),
      caption: "Optical molasses: six counter-propagating laser beams slow atoms via repeated photon scattering. Cools to microkelvin."
    },

    "nonequilibrium-statmech": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <text x="385" y="195" style="${S.txtMuted}">x</text>
        ${[20, 50, 100].map((t, i) => `<path d="M 40 180 ${Array.from({length:60}, (_,j) => {
          const x = j*5;
          const sig = Math.sqrt(t/5);
          const y = (60/sig) * Math.exp(-Math.pow(x-100, 2)/(2*sig*sig*100));
          return `L ${40 + j*5.5} ${180 - y*150}`;
        }).join(' ')}" style="stroke:#5eead4;stroke-width:2;fill:none;opacity:${0.4 + i*0.3};"/>`).join('')}
        <text x="200" y="40" text-anchor="middle" style="${S.txtMuted}">spreading Gaussian: $\\sigma \\sim \\sqrt{Dt}$</text>
      `),
      caption: "Brownian density spreads as a widening Gaussian. Width grows like $\\sqrt t$ — slow but inexorable."
    },

    "superconductivity": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <text x="385" y="195" style="${S.txtMuted}">T</text>
        <text x="35" y="20" style="${S.txtMuted}">ρ</text>
        <line x1="220" y1="180" x2="380" y2="80" style="stroke:#5eead4;stroke-width:2;"/>
        <line x1="40" y1="180" x2="220" y2="180" style="stroke:#5eead4;stroke-width:3;"/>
        <line x1="220" y1="20" x2="220" y2="200" style="${S.dash}"/>
        <text x="220" y="215" text-anchor="middle" style="${S.txt}">T_c</text>
        <text x="100" y="170" style="${S.txt}">ρ = 0</text>
        <text x="320" y="60" style="${S.txt}">normal metal</text>
      `),
      caption: "Below $T_c$, electrical resistance drops sharply to zero. The hallmark of superconductivity."
    },

    "quantum-hall-topological": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <text x="385" y="195" style="${S.txtMuted}">B</text>
        <text x="35" y="20" style="${S.txtMuted}">σ_xy</text>
        ${[1,2,3,4].map((n, i) => {
          const y = 180 - n*32;
          const xStart = 60 + i*80;
          return `<line x1="${xStart}" y1="${y}" x2="${xStart+60}" y2="${y}" style="stroke:#5eead4;stroke-width:3;"/><line x1="${xStart+60}" y1="${y}" x2="${xStart+70}" y2="${y - 32}" style="stroke:#5eead4;stroke-width:1.5;"/>`;
        }).join('')}
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">$\\sigma_{xy} = \\nu e^2/h$ (plateaus)</text>
      `, 400, 235),
      caption: "Quantum Hall effect: conductivity plateaus at exact integer (or fractional) multiples of $e^2/h$. Topologically protected."
    },

    "electrical-modeling-control": {
      svg: wrap(`
        <text x="40" y="60" style="${S.txt}">V_in</text>
        <line x1="80" y1="55" x2="180" y2="55" style="${S.axis}"/>
        <rect x="180" y="45" width="40" height="20" style="${S.axis}fill:#1c2444;"/>
        <text x="200" y="60" text-anchor="middle" style="${S.txt}">R</text>
        <line x1="220" y1="55" x2="280" y2="55" style="${S.axis}"/>
        <line x1="280" y1="55" x2="280" y2="120" style="${S.axis}"/>
        <line x1="265" y1="80" x2="295" y2="80" style="${S.axis}stroke-width:3;"/>
        <line x1="265" y1="95" x2="295" y2="95" style="${S.axis}stroke-width:3;"/>
        <text x="305" y="92" style="${S.txt}">C</text>
        <line x1="280" y1="120" x2="80" y2="120" style="${S.axis}"/>
        <line x1="80" y1="55" x2="80" y2="120" style="${S.axis}"/>
        <text x="330" y="60" style="${S.txt}">V_out</text>
        <line x1="295" y1="87" x2="320" y2="55" style="${S.axis}stroke-dasharray:2 2;"/>
        <text x="160" y="155" style="${S.txt}">$V_{out}/V_{in} = 1/(RCs + 1)$</text>
        <text x="200" y="180" text-anchor="middle" style="${S.txtMuted}">RC low-pass filter</text>
      `, 400, 200),
      caption: "RC low-pass: high frequencies are shorted by the capacitor; only slow signals pass. First-order, cutoff at $1/(RC)$."
    },

    "mechanical-modeling-control": {
      svg: wrap(`
        <line x1="40" y1="40" x2="40" y2="160" style="${S.axis}stroke-width:3;"/>
        ${Array.from({length:6}, (_,i) => `<line x1="35" y1="${40 + i*23}" x2="50" y2="${50 + i*23}" style="${S.axis}"/>`).join('')}
        <path d="M 50 90 L 60 90 L 65 80 L 75 100 L 85 80 L 95 100 L 105 90 L 115 90" style="${S.axis}"/>
        <path d="M 50 130 L 70 130 M 80 120 L 80 140 M 80 120 L 100 120 L 100 140 L 80 140 M 100 130 L 120 130" style="${S.axis}"/>
        <rect x="120" y="70" width="80" height="80" style="${S.axis}fill:#1c2444;"/>
        <text x="160" y="115" text-anchor="middle" style="${S.txt}">m</text>
        <line x1="200" y1="110" x2="320" y2="110" style="${S.arrow}"/>
        <text x="335" y="115" style="${S.txt}">F</text>
        <text x="60" y="180" style="${S.txt}">spring k</text>
        <text x="60" y="200" style="${S.txt}">damper b</text>
        <text x="220" y="200" text-anchor="middle" style="${S.txtMuted}">$m\\ddot x + b\\dot x + kx = F$</text>
      `, 400, 220),
      caption: "Mass-spring-damper. The universal 2nd-order mechanical system — car suspension, robot link, MEMS."
    },

    "state-space": {
      svg: wrap(`
        <text x="50" y="60" style="${S.txt}">$\\dot{\\mathbf x}$</text>
        <text x="85" y="60" style="${S.txt}">=</text>
        <text x="105" y="60" style="${S.txt}">A</text>
        <text x="130" y="60" style="${S.txt}">$\\mathbf x$</text>
        <text x="155" y="60" style="${S.txt}">+</text>
        <text x="180" y="60" style="${S.txt}">B</text>
        <text x="205" y="60" style="${S.txt}">u</text>
        <text x="50" y="100" style="${S.txt}">$\\mathbf y$</text>
        <text x="85" y="100" style="${S.txt}">=</text>
        <text x="105" y="100" style="${S.txt}">C</text>
        <text x="130" y="100" style="${S.txt}">$\\mathbf x$</text>
        <text x="155" y="100" style="${S.txt}">+</text>
        <text x="180" y="100" style="${S.txt}">D</text>
        <text x="205" y="100" style="${S.txt}">u</text>
        <rect x="40" y="140" width="60" height="40" style="${S.axis}fill:#1c2444;"/>
        <text x="70" y="165" text-anchor="middle" style="${S.txt}">u</text>
        <line x1="100" y1="160" x2="130" y2="160" style="${S.arrow}"/>
        <rect x="130" y="140" width="80" height="40" style="${S.axis}fill:#1c2444;"/>
        <text x="170" y="165" text-anchor="middle" style="${S.txt}">A, B, C, D</text>
        <line x1="210" y1="160" x2="240" y2="160" style="${S.arrow}"/>
        <rect x="240" y="140" width="60" height="40" style="${S.axis}fill:#1c2444;"/>
        <text x="270" y="165" text-anchor="middle" style="${S.txt}">y</text>
      `),
      caption: "State-space: matrix form of dynamics. Four matrices encode the entire linear system; computers handle the rest."
    },

    "signal-flow-mason": {
      svg: wrap(`
        <circle cx="60" cy="110" r="6" style="fill:#5eead4;"/>
        <circle cx="160" cy="110" r="6" style="fill:#5eead4;"/>
        <circle cx="260" cy="110" r="6" style="fill:#5eead4;"/>
        <circle cx="360" cy="110" r="6" style="fill:#5eead4;"/>
        <line x1="66" y1="110" x2="154" y2="110" style="${S.arrow}"/>
        <line x1="166" y1="110" x2="254" y2="110" style="${S.arrow}"/>
        <line x1="266" y1="110" x2="354" y2="110" style="${S.arrow}"/>
        <text x="110" y="100" style="${S.txt}">G₁</text>
        <text x="210" y="100" style="${S.txt}">G₂</text>
        <text x="310" y="100" style="${S.txt}">G₃</text>
        <path d="M 260 110 Q 210 180 160 110" style="stroke:#fca57a;stroke-width:1.5;fill:none;marker-end:url(#arrR);"/>
        <text x="210" y="170" text-anchor="middle" style="fill:#fca57a;font:13px sans-serif;">−H (loop)</text>
      `),
      caption: "Signal-flow graph: nodes are signals, branches carry gains. Mason's rule turns the whole thing into one formula."
    },

    "steady-state-errors": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <line x1="40" y1="60" x2="380" y2="60" style="${S.dash}"/>
        <text x="385" y="60" style="${S.txt}">ref</text>
        <path d="M 40 180 ${Array.from({length:60}, (_,i) => `L ${40 + i*5} ${180 - 100*(1 - Math.exp(-i*0.1))}`).join(' ')}" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <line x1="340" y1="60" x2="340" y2="80" style="${S.dash}"/>
        <text x="350" y="75" style="fill:#fca57a;font:13px sans-serif;">$e_{ss}$</text>
        <text x="120" y="40" style="${S.txt}">Type 0 to step</text>
      `),
      caption: "Steady-state error: the gap between final output and reference. Adding integrators reduces it; system type determines what inputs can be tracked exactly."
    },

    "root-locus-design": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        <line x1="170" y1="100" x2="185" y2="115" style="stroke:#5eead4;stroke-width:2;"/>
        <line x1="170" y1="115" x2="185" y2="100" style="stroke:#5eead4;stroke-width:2;"/>
        <line x1="220" y1="100" x2="235" y2="115" style="stroke:#5eead4;stroke-width:2;"/>
        <line x1="220" y1="115" x2="235" y2="100" style="stroke:#5eead4;stroke-width:2;"/>
        <circle cx="120" cy="110" r="7" style="stroke:#fca57a;stroke-width:2;fill:none;"/>
        <text x="120" y="90" style="fill:#fca57a;font:13px sans-serif;">added zero</text>
        <path d="M 170 110 L 130 110" style="stroke:#5eead4;stroke-width:1.5;stroke-dasharray:3 2;"/>
        <path d="M 170 110 Q 150 80 110 50" style="stroke:#5eead4;stroke-width:1.5;stroke-dasharray:3 2;"/>
        <path d="M 170 110 Q 150 140 110 170" style="stroke:#5eead4;stroke-width:1.5;stroke-dasharray:3 2;"/>
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">a zero pulls the locus left → more damped</text>
      `, 400, 235),
      caption: "Adding a compensator zero in the LHP pulls the root locus leftward — faster, more damped closed-loop poles."
    },

    "gain-phase-margins": {
      svg: wrap(`
        <line x1="40" y1="100" x2="380" y2="100" style="${S.axis}"/>
        <line x1="40" y1="30" x2="40" y2="110" style="${S.axis}"/>
        <text x="35" y="25" style="${S.txtMuted}">|G|</text>
        <line x1="40" y1="60" x2="380" y2="60" style="${S.dash}"/>
        <text x="385" y="60" style="${S.txtMuted}">0 dB</text>
        <path d="M 40 50 L 200 50 L 320 95" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <line x1="280" y1="60" x2="280" y2="80" style="stroke:#fca57a;stroke-width:2;marker-end:url(#arrR);"/>
        <text x="290" y="75" style="fill:#fca57a;font:12px sans-serif;">GM</text>
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="120" x2="40" y2="200" style="${S.axis}"/>
        <text x="35" y="115" style="${S.txtMuted}">∠G</text>
        <line x1="40" y1="180" x2="380" y2="180" style="${S.dash}"/>
        <text x="385" y="180" style="${S.txtMuted}">−180°</text>
        <path d="M 40 130 Q 200 145 380 195" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <line x1="210" y1="180" x2="210" y2="148" style="stroke:#fca57a;stroke-width:2;marker-end:url(#arrR);"/>
        <text x="220" y="160" style="fill:#fca57a;font:12px sans-serif;">PM</text>
      `, 400, 230),
      caption: "Gain margin: extra gain to instability, read at phase crossover. Phase margin: extra phase lag, read at gain crossover."
    },

    "lead-lag": {
      svg: wrap(`
        <line x1="40" y1="100" x2="380" y2="100" style="${S.axis}"/>
        <line x1="40" y1="30" x2="40" y2="110" style="${S.axis}"/>
        <text x="35" y="25" style="${S.txtMuted}">|G_c|</text>
        <line x1="40" y1="80" x2="120" y2="80" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <line x1="120" y1="80" x2="280" y2="50" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <line x1="280" y1="50" x2="380" y2="50" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <text x="120" y="65" style="${S.txt}">zero</text>
        <text x="280" y="40" style="${S.txt}">pole</text>
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="120" x2="40" y2="200" style="${S.axis}"/>
        <text x="35" y="115" style="${S.txtMuted}">∠G_c</text>
        <path d="M 40 180 L 120 180 Q 200 140 280 180 L 380 180" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <text x="200" y="195" text-anchor="middle" style="${S.txtMuted}">phase boost between corners</text>
      `, 400, 220),
      caption: "Lead compensator: magnitude rises between zero and pole; phase boost peaks at $\\sqrt{zp}$."
    },

    "pid-control": {
      svg: wrap(`
        <line x1="40" y1="180" x2="380" y2="180" style="${S.axis}"/>
        <line x1="40" y1="20" x2="40" y2="200" style="${S.axis}"/>
        <line x1="40" y1="60" x2="380" y2="60" style="${S.dash}"/>
        <path d="M 40 180 ${Array.from({length:100}, (_,i) => {
          const t = i*0.06;
          const y = 1 - Math.exp(-0.5*t) * (Math.cos(t*1.5) + 0.5*Math.sin(t*1.5));
          return `L ${40 + i*3.4} ${180 - 120*y}`;
        }).join(' ')}" style="stroke:#5eead4;stroke-width:2;fill:none;"/>
        <text x="290" y="80" style="${S.txt}">PID output</text>
        <text x="100" y="40" style="${S.txtMuted}">P=fast, I=accurate, D=damped</text>
      `),
      caption: "PID output: proportional acts now, integral accumulates error, derivative anticipates. Tuning balances them."
    },

    "state-space-design": {
      svg: wrap(`
        <rect x="50" y="80" width="60" height="40" style="${S.axis}fill:#1c2444;"/>
        <text x="80" y="105" text-anchor="middle" style="${S.txt}">plant</text>
        <line x1="110" y1="100" x2="160" y2="100" style="${S.arrow}"/>
        <text x="135" y="90" style="${S.txtMuted}">$\\mathbf x$</text>
        <rect x="160" y="80" width="80" height="40" style="${S.axis}fill:#1c2444;"/>
        <text x="200" y="105" text-anchor="middle" style="${S.txt}">−K</text>
        <line x1="240" y1="100" x2="290" y2="100" style="${S.arrow}"/>
        <text x="265" y="90" style="${S.txtMuted}">u</text>
        <line x1="290" y1="100" x2="290" y2="160" style="${S.axis}"/>
        <line x1="290" y1="160" x2="80" y2="160" style="${S.axis}"/>
        <line x1="80" y1="160" x2="80" y2="118" style="${S.arrow}"/>
        <text x="200" y="200" text-anchor="middle" style="${S.txt}">$\\dot{\\mathbf x} = (A - BK)\\mathbf x$</text>
      `),
      caption: "Full-state feedback: choose $K$ to place all closed-loop eigenvalues exactly where you want them."
    },

    "state-observers": {
      svg: wrap(`
        <rect x="40" y="60" width="80" height="40" style="${S.axis}fill:#1c2444;"/>
        <text x="80" y="85" text-anchor="middle" style="${S.txt}">plant</text>
        <line x1="120" y1="80" x2="170" y2="80" style="${S.arrow}"/>
        <text x="145" y="70" style="${S.txt}">y</text>
        <rect x="40" y="140" width="80" height="40" style="${S.axis}fill:#1c2444;"/>
        <text x="80" y="165" text-anchor="middle" style="${S.txt}">model</text>
        <line x1="120" y1="160" x2="170" y2="160" style="${S.arrow}"/>
        <text x="135" y="150" style="${S.txt}">$\\hat y$</text>
        <circle cx="200" cy="120" r="14" style="${S.axis}fill:none;"/>
        <text x="200" y="125" text-anchor="middle" style="${S.txt}">⊕</text>
        <line x1="170" y1="80" x2="194" y2="115" style="${S.axis}"/>
        <line x1="170" y1="160" x2="194" y2="125" style="${S.axis}"/>
        <line x1="214" y1="120" x2="270" y2="120" style="${S.arrow}"/>
        <rect x="270" y="100" width="60" height="40" style="${S.axis}fill:#1c2444;"/>
        <text x="300" y="125" text-anchor="middle" style="${S.txt}">L</text>
        <line x1="330" y1="120" x2="370" y2="120" style="${S.axis}"/>
        <line x1="370" y1="120" x2="370" y2="40" style="${S.axis}"/>
        <line x1="370" y1="40" x2="80" y2="40" style="${S.axis}"/>
        <line x1="80" y1="40" x2="80" y2="138" style="${S.arrow}"/>
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">model + correction = state estimate</text>
      `, 400, 240),
      caption: "Observer: model the plant in software. Multiply (measured − predicted) output by $L$ to keep estimate honest."
    },

    "digital-control": {
      svg: wrap(`
        <line x1="40" y1="110" x2="380" y2="110" style="${S.axis}"/>
        <line x1="200" y1="20" x2="200" y2="200" style="${S.axis}"/>
        <text x="385" y="105" style="${S.txt}">Re(z)</text>
        <text x="195" y="25" style="${S.txt}">Im(z)</text>
        <circle cx="200" cy="110" r="70" style="stroke:#5eead4;stroke-width:2;fill:#5eead4;fill-opacity:0.1;"/>
        <text x="290" y="110" style="${S.txt}">|z| = 1</text>
        <circle cx="240" cy="80" r="4" style="fill:#5eead4;"/>
        <text x="248" y="78" style="${S.txt}">stable</text>
        <circle cx="320" cy="90" r="4" style="fill:#fca57a;"/>
        <text x="328" y="88" style="fill:#fca57a;font:13px sans-serif;">unstable</text>
        <text x="200" y="220" text-anchor="middle" style="${S.txtMuted}">discrete-time: stability inside unit circle</text>
      `, 400, 235),
      caption: "Discrete-time stability boundary is the unit circle. Poles inside → stable; outside → blow up."
    }
  });
})();
