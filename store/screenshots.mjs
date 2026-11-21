// Store screenshots: node store/screenshots.mjs (from the project folder)
// iOS 6.9" 1320×2868, Android 1080×1920, Google Play feature graphic 1024×500, icon 512.
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const WWW = join(ROOT, 'www'), OUT = join(ROOT, 'store/screenshots');
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json', '.woff2': 'font/woff2' };
const srv = createServer((q, r) => {
  try { const f = join(WWW, q.url === '/' ? 'index.html' : decodeURIComponent(q.url.split('?')[0])), b = readFileSync(f); r.writeHead(200, { 'content-type': MIME[extname(f)] || 'text/plain' }); r.end(b); }
  catch { r.writeHead(404); r.end(); }
}).listen(0);
const URL0 = `http://localhost:${srv.address().port}/`;

// Scroll so that the section heading `text` sits at the top under the sticky bar.
const toSection = (p, text) => p.evaluate(t => {
  const h = [...document.querySelectorAll('.section-head')].find(x => x.textContent.trim() === t);
  scrollTo(0, h.getBoundingClientRect().top + scrollY - 70);
}, text);
const openTopic = async (p, subject, title) => {
  await p.click(`.tab.${subject}`);
  await p.click(`.card.${subject}:has(h3:text-is("${title}"))`);
  await p.waitForTimeout(500);
};

const SHOTS = [
  { id: '1-home', text: '180+ topics from basics to graduate level', go: async () => {} },
  { id: '2-examples', text: 'Worked examples, every step explained', go: async p => {
    await openTopic(p, 'math', 'Derivatives'); await toSection(p, 'Worked Examples');
  } },
  { id: '3-practice', text: 'Try first. Get instant feedback.', go: async p => {
    await openTopic(p, 'physics', 'Kinematics'); await toSection(p, 'Practice Problems');
    const task = p.locator('.task').first();
    const a = await p.evaluate(() => CONTENT.physics.find(t => t.title === 'Kinematics').tasks[0].a.replace(/\$/g, ''));
    await task.locator('.task-input').fill(a);
    await task.locator('.task-check-btn').click();
    await p.waitForTimeout(300); await toSection(p, 'Practice Problems');
  } },
  { id: '4-formulas', text: 'Every symbol in every formula, explained', go: async p => {
    await openTopic(p, 'physics', "Newton's Laws of Motion"); await toSection(p, 'Key Formulas & Results');
  } },
  { id: '5-engineering', text: 'Control, circuits & mechanics too', go: async p => {
    await p.click('.tab.control'); await p.waitForTimeout(200);
  } },
];

const browser = await chromium.launch();
async function raw(w, h, scale, shot) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: scale, serviceWorkers: 'block' });
  const p = await ctx.newPage();
  await p.goto(URL0); await p.waitForTimeout(300);
  await shot.go(p);
  await p.waitForTimeout(300);
  const buf = await p.screenshot();
  await ctx.close();
  return buf;
}
// Frame: caption on top, app screen in a rounded frame below
async function framed(W, H, appW, appH, scale, shot, file) {
  const img = (await raw(appW, appH, scale, shot)).toString('base64');
  const ctx = await browser.newContext({ viewport: { width: W / scale, height: H / scale }, deviceScaleFactor: scale });
  const p = await ctx.newPage();
  await p.setContent(`<body style="margin:0;height:100vh;background:radial-gradient(120% 60% at 20% 0%,#1e2a5e 0%,#0b1020 55%,#2a1a4d 100%);
    font-family:-apple-system,'SF Pro Display',Roboto,sans-serif;color:#e8ecf7;display:flex;flex-direction:column;align-items:center;overflow:hidden">
    <h1 style="margin:${H / scale * .055}px 28px 0;font-size:${W / scale * .08}px;line-height:1.1;font-weight:800;letter-spacing:-.02em;text-align:center">${shot.text}</h1>
    <img src="data:image/png;base64,${img}" style="margin-top:${H / scale * .035}px;width:${appW * .86}px;border-radius:${appW * .08}px;
      border:${appW * .02}px solid #2a335a;box-shadow:0 30px 80px #000c"></body>`);
  await p.screenshot({ path: file });
  await ctx.close();
}

for (const d of ['ios', 'android']) mkdirSync(join(OUT, d), { recursive: true });
for (const shot of SHOTS) {
  await framed(1320, 2868, 440, 900, 3, shot, join(OUT, 'ios', `${shot.id}.png`));
  await framed(1080, 1920, 360, 700, 3, shot, join(OUT, 'android', `${shot.id}.png`));
}
// Google Play feature graphic 1024×500
const icon = readFileSync(join(ROOT, 'assets/icon.svg'), 'utf8').replace('width="1024" height="1024"', 'width="220" height="220" style="border-radius:48px"');
const ctx = await browser.newContext({ viewport: { width: 1024, height: 500 } });
const p = await ctx.newPage();
await p.setContent(`<body style="margin:0;height:500px;background:radial-gradient(90% 120% at 15% 50%,#1e2a5e,#0b1020 70%);display:flex;align-items:center;gap:48px;padding:0 72px;box-sizing:border-box;font-family:-apple-system,Roboto,sans-serif;color:#e8ecf7">
  <div style="flex:none">${icon}</div>
  <div><div style="font-size:84px;font-weight:800;letter-spacing:-.03em">Ergon</div>
  <div style="font-size:30px;color:#9aa3c2;margin-top:8px;line-height:1.25">Math, physics &amp; engineering<br>through worked examples</div></div></body>`);
await p.screenshot({ path: join(OUT, 'android', 'feature.png') });
await ctx.close();
await browser.close(); srv.close();
// Google Play icon 512 = the web icon
copyFileSync(join(WWW, 'icons/icon-512.png'), join(ROOT, 'store/icon-512.png'));
console.log('done');
