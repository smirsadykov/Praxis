// Answer checking for practice problems. Shared by app.js and test.mjs.
(function () {
  function normalize(s) {
    if (s == null) return "";
    let t = String(s)
      .toLowerCase()
      .replace(/\$/g, "")
      .replace(/\\[dt]frac/g, "\\frac")
      .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "$1/$2")
      .replace(/\\left|\\right|\\,|\\;|\\!/g, "")
      .replace(/\\times|\\cdot|×|·/g, "*")
      .replace(/\\approx|≈/g, "~")
      .replace(/—|–|−/g, "-")
      .replace(/\^\{([^{}]+)\}/g, "^$1")
      .replace(/\^?\\circ|\\degree/g, "°")
      .replace(/\\%/g, "%")
      .replace(/\s+/g, "");
    return t;
  }

  // "6.0*10^7 m/s" → { v: 6e7, unit: "m/s", int: false }; null if not a plain number (+ optional unit).
  const NUM = /^~?(?:[a-z]\w*=)?([+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?)(?:\*10\^([+-]?\d+))?(?:\/([+-]?(?:\d+\.?\d*|\.\d+)))?(.*)$/;
  function parseNum(s) {
    const m = NUM.exec(s);
    if (!m) return null;
    const unit = m[4];
    // Anything after the number must look like a unit (letters, °, %, /, Ω…), not more math ("^4*3^2", "+1").
    if (unit && !/^[a-zµμωΩ°%][a-zµμωΩ°%/·*^\d\-]*$/i.test(unit)) return null;
    let v = parseFloat(m[1]);
    if (m[2] != null) v *= Math.pow(10, parseInt(m[2], 10));
    if (m[3] != null) v /= parseFloat(m[3]);
    const int = m[2] == null && m[3] == null && !/[.e]/.test(m[1]);
    return isFinite(v) ? { v, unit, int } : null;
  }

  function answersMatch(userInput, answer) {
    const u = normalize(userInput);
    const a = normalize(answer);
    if (!u) return false;
    if (u === a) return true;
    const un = parseNum(u), an = parseNum(a);
    if (un && an) {
      if (un.unit && an.unit && un.unit !== an.unit) return false;
      // Integer answers (counts, gcd, factorials) must be exact; measured values get 1% for rounding.
      const tol = an.int ? 1e-9 : 0.01 * Math.abs(an.v);
      return Math.abs(un.v - an.v) <= Math.max(tol, 1e-12);
    }
    // Short word answers ("circle", "yes"): accept if the user's text contains the word.
    // ponytail: word-level contains, no synonyms; add an `accept: []` list per task if needed.
    if (!/\d/.test(a) && a.length <= 12 && u.includes(a)) return true;
    return false;
  }

  const api = { normalize, answersMatch };
  if (typeof window !== "undefined") window.AnswerCheck = api;
  if (typeof module !== "undefined") module.exports = api;
})();
