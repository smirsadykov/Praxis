// node test.mjs — checks the answer checker on known traps.
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
const { answersMatch: m } = createRequire(import.meta.url)('./www/answer-check.js');

const yes = [
  ['15', '$15$'], ['-4', '$-4$'], ['3/11', '$\\dfrac{3}{11}$'], ['0.2727', '3/11'],
  ['6e7', '$6.0 \\times 10^7$'], ['6.0*10^7', '6.0 × 10^{7} m/s'], ['6.01e7', '6.0 × 10^7'],
  ['10', '10 V'], ['10 V', '10 V'], ['62.5%', '62.5%'], ['75', '$75^\\circ$'],
  ['x = 5', '$x = 5$'], ['circle', 'circle'], ['a circle', 'circle'], ['2^4*3^2', '$2^4 \\times 3^2$'],
];
const no = [
  ['1', '15'], ['0', '10 V'], ['6', '6.0 × 10^7'], ['150', '15'], ['2', '$2^4 \\times 3^2$'],
  ['16', '15'], ['10 mV', '10 V'], ['', '15'], ['5', 'x = 5 or x = -3'],
];
for (const [u, a] of yes) assert.ok(m(u, a), `should accept "${u}" for "${a}"`);
for (const [u, a] of no) assert.ok(!m(u, a), `should reject "${u}" for "${a}"`);
console.log(`answer check ok: ${yes.length} accepted, ${no.length} rejected`);
