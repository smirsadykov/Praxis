(function () {
  const app = document.getElementById("app");
  const backBtn = document.getElementById("backBtn");
  const title = document.getElementById("title");

  let state = { view: "home", subject: "math", topicId: null };

  // === Progress tracking (localStorage) ===
  const PROGRESS_KEY = "praxis-progress-v1";
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}"); }
    catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch (e) {}
  }
  let progress = loadProgress();

  function recordVisit(topicId) {
    progress[topicId] = progress[topicId] || { visits: 0, attempted: {}, correct: {} };
    progress[topicId].visits = (progress[topicId].visits || 0) + 1;
    progress[topicId].lastVisit = Date.now();
    saveProgress(progress);
  }
  function recordAttempt(topicId, idx, isCorrect) {
    progress[topicId] = progress[topicId] || { visits: 0, attempted: {}, correct: {} };
    progress[topicId].attempted[idx] = true;
    if (isCorrect) progress[topicId].correct[idx] = true;
    saveProgress(progress);
  }
  function topicMastery(topicId) {
    const p = progress[topicId];
    if (!p) return { state: "none", attempted: 0, correct: 0 };
    const attempted = Object.keys(p.attempted || {}).length;
    const correct = Object.keys(p.correct || {}).length;
    let s = "started";
    if (correct >= 8) s = "mastered";
    else if (correct >= 4) s = "practicing";
    return { state: s, attempted, correct };
  }

  // Normalize answers for fuzzy comparison
  function normalize(s) {
    if (s == null) return "";
    return String(s)
      .toLowerCase()
      .replace(/\$/g, "")
      .replace(/\\dfrac/g, "\\frac")
      .replace(/\\tfrac/g, "\\frac")
      .replace(/\\left|\\right/g, "")
      .replace(/\s+/g, "")
      .replace(/[≈]/g, "~")
      .replace(/—|–/g, "-")
      .replace(/×/g, "*")
      .replace(/·/g, "*");
  }
  function answersMatch(userInput, answer) {
    const u = normalize(userInput);
    const a = normalize(answer);
    if (!u) return false;
    if (u === a) return true;
    // Try matching as a number
    const un = parseFloat(u);
    const an = parseFloat(a);
    if (!isNaN(un) && !isNaN(an) && Math.abs(un - an) < 1e-4 * Math.max(1, Math.abs(an))) return true;
    // Substring (for short answers like "yes", "no", "5", "circle")
    if (a.length <= 12 && u.includes(a)) return true;
    if (u.length <= 12 && a.includes(u)) return true;
    return false;
  }

  function renderMath(root) {
    if (window.renderMathInElement) {
      window.renderMathInElement(root, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    } else {
      // KaTeX loaded with `defer`; retry once it arrives.
      setTimeout(() => renderMath(root), 100);
    }
  }

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    for (const c of [].concat(children)) {
      if (c == null) continue;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return node;
  }

  function renderHome() {
    backBtn.hidden = true;
    title.textContent = "Praxis";

    app.innerHTML = "";

    const hero = el("section", { class: "hero" }, [
      el("h2", {}, "Praxis — math & physics through worked examples."),
      el("p", {}, "Theory put into practice. Pick a subject, walk through carefully solved examples, then try the practice problems.")
    ]);

    const tabs = el("div", { class: "tabs" }, [
      el("button", {
        class: `tab math ${state.subject === "math" ? "active" : ""}`,
        onclick: () => { state.subject = "math"; renderHome(); }
      }, "Mathematics"),
      el("button", {
        class: `tab physics ${state.subject === "physics" ? "active" : ""}`,
        onclick: () => { state.subject = "physics"; renderHome(); }
      }, "Physics"),
      el("button", {
        class: `tab control ${state.subject === "control" ? "active" : ""}`,
        onclick: () => { state.subject = "control"; renderHome(); }
      }, "Control Systems")
    ]);

    const grid = el("div", { class: "grid" });
    for (const topic of CONTENT[state.subject]) {
      const m = topicMastery(topic.id);
      const badgeText = m.state === "mastered" ? "✓ mastered" :
                       m.state === "practicing" ? `${m.correct}/10 solved` :
                       m.state === "started" ? "started" : "";
      const cardChildren = [
        el("div", { class: "stripe" }),
        el("span", { class: `level ${topic.level}` }, topic.level),
        el("h3", {}, topic.title),
        el("p", {}, topic.summary)
      ];
      if (badgeText) cardChildren.push(el("div", { class: `mastery-badge ${m.state}` }, badgeText));
      const card = el("div", {
        class: `card ${state.subject}`,
        onclick: () => openTopic(topic.id)
      }, cardChildren);
      grid.appendChild(card);
    }

    app.appendChild(hero);
    app.appendChild(tabs);
    app.appendChild(grid);
  }

  function openTopic(topicId) {
    state.view = "topic";
    state.topicId = topicId;
    renderTopic();
  }

  function findTopic(topicId) {
    for (const subj of Object.keys(CONTENT)) {
      const t = CONTENT[subj].find(x => x.id === topicId);
      if (t) return { subj, topic: t };
    }
    return null;
  }

  function renderTopic() {
    let topic = CONTENT[state.subject].find(t => t.id === state.topicId);
    if (!topic) {
      // Topic might live in a different subject (e.g., follow a Connection link).
      const found = findTopic(state.topicId);
      if (found) { state.subject = found.subj; topic = found.topic; }
    }
    if (!topic) { state.view = "home"; renderHome(); return; }

    recordVisit(topic.id);

    backBtn.hidden = false;
    title.textContent = topic.title;

    app.innerHTML = "";

    const head = el("section", { class: "topic-head" }, [
      el("span", { class: `level ${topic.level}` }, topic.level),
      el("h2", {}, topic.title),
      el("p", {}, topic.summary)
    ]);
    app.appendChild(head);

    // Encyclopedia article — extended prose, render right after the head
    const article = (window.ENCYCLOPEDIA_ARTICLE || {})[topic.id];
    if (article) {
      app.appendChild(el("h3", { class: "section-head" }, "Encyclopedia Article"));
      const articleCard = el("div", { class: "article-card", html: article });
      app.appendChild(articleCard);
    }

    const intro = (window.INTROS || {})[topic.id];
    if (intro) {
      const introCard = el("section", { class: "intro" }, [
        el("div", { class: "intro-block" }, [
          el("div", { class: "intro-label" }, "What is this and why does it exist?"),
          el("p", { html: intro.whyExists })
        ]),
        el("div", { class: "intro-block" }, [
          el("div", { class: "intro-label" }, "Why does it matter?"),
          el("p", { html: intro.whyImportant })
        ]),
        el("div", { class: "intro-block" }, [
          el("div", { class: "intro-label" }, "The big idea"),
          el("p", { html: intro.intuition })
        ])
      ]);
      app.appendChild(introCard);
    }

    const glossary = (window.GLOSSARY || {})[topic.id];
    if (glossary && glossary.length) {
      app.appendChild(el("h3", { class: "section-head" }, "Words You'll See"));
      const card = el("div", { class: "glossary-card" });
      glossary.forEach((g) => {
        const row = el("div", { class: "gloss-row" }, [
          el("div", { class: "gloss-term", html: g.term }),
          el("div", { class: "gloss-def", html: g.def })
        ]);
        card.appendChild(row);
      });
      app.appendChild(card);
    }

    const diagram = (window.DIAGRAMS || {})[topic.id];
    if (diagram) {
      app.appendChild(el("h3", { class: "section-head" }, "Visualize"));
      const figure = el("div", { class: "diagram", html: diagram.svg });
      if (diagram.caption) {
        figure.appendChild(el("div", { class: "diagram-caption", html: diagram.caption }));
      }
      app.appendChild(figure);
    }

    // External images from Wikimedia Commons (CC-licensed / public domain)
    const commonsImages = (window.COMMONS_IMAGES || {})[topic.id];
    if (commonsImages && commonsImages.length) {
      app.appendChild(el("h3", { class: "section-head" }, "Image Gallery"));
      commonsImages.forEach((img) => {
        const fileName = img.file;
        const url = "https://commons.wikimedia.org/wiki/Special:FilePath/" + fileName + "?width=720";
        const fileLink = "https://commons.wikimedia.org/wiki/File:" + fileName;
        const figure = el("figure", { class: "commons-figure" });
        const imgEl = el("img", {
          class: "commons-img",
          src: url,
          alt: img.caption ? img.caption.replace(/<[^>]*>/g, "") : fileName,
          loading: "lazy",
          referrerpolicy: "no-referrer"
        });
        imgEl.addEventListener("error", () => {
          imgEl.style.display = "none";
          fallback.hidden = false;
        });
        figure.appendChild(imgEl);
        const fallback = el("div", { class: "commons-fallback" }, "Image temporarily unavailable.");
        fallback.hidden = true;
        figure.appendChild(fallback);
        if (img.caption) {
          figure.appendChild(el("figcaption", { class: "commons-caption", html: img.caption }));
        }
        figure.appendChild(el("div", {
          class: "commons-credit",
          html: 'Image: <a href="' + fileLink + '" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a> · ' +
                (img.credit || "") + (img.credit && img.license ? " · " : "") + (img.license || "")
        }));
        app.appendChild(figure);
      });
    }

    const miscon = (window.MISCONCEPTIONS || {})[topic.id];
    if (miscon && miscon.length) {
      app.appendChild(el("h3", { class: "section-head" }, "Common Misconceptions"));
      const card = el("div", { class: "miscon-card" });
      miscon.forEach((m) => {
        const row = el("div", { class: "miscon-row" }, [
          el("div", { class: "miscon-wrong" }, m.wrong),
          el("div", { class: "miscon-right", html: m.right })
        ]);
        card.appendChild(row);
      });
      app.appendChild(card);
    }

    const formulas = (window.FORMULAS || {})[topic.id];
    if (formulas && formulas.length) {
      app.appendChild(el("h3", { class: "section-head" }, "Key Formulas & Results"));
      const card = el("div", { class: "formulas" });
      formulas.forEach((row) => {
        const r = el("div", { class: "formula-row" }, [
          el("div", { class: "formula-f", html: row.f }),
          el("div", { class: "formula-n", html: row.n })
        ]);
        card.appendChild(r);
      });
      app.appendChild(card);
    }

    if (topic.examples && topic.examples.length) {
      app.appendChild(el("h3", { class: "section-head" }, "Worked Examples"));
      const explainMap = (window.EXPLAIN || {})[topic.id] || [];
      const stepWhys = (window.STEP_WHYS || {})[topic.id] || [];
      topic.examples.forEach((ex, exIdx) => {
        const exDiv = el("div", { class: "example" });
        exDiv.appendChild(el("h4", {}, ex.title));
        exDiv.appendChild(el("p", { class: "prompt", html: ex.prompt }));
        const explainText = explainMap[exIdx];
        if (explainText) {
          exDiv.appendChild(el("div", { class: "explain", html: explainText }));
        }
        const exStepWhys = stepWhys[exIdx] || [];
        ex.steps.forEach((step, stepIdx) => {
          const why = exStepWhys[stepIdx];
          const stepChildren = [
            el("div", { class: "label" }, step.label),
            el("div", { class: "body", html: step.body })
          ];
          if (why) {
            const whyDiv = el("div", { class: "step-why", html: why });
            whyDiv.hidden = true;
            const whyBtn = el("button", { class: "step-why-btn" }, "Why?");
            whyBtn.addEventListener("click", () => {
              const showing = !whyDiv.hidden;
              whyDiv.hidden = showing;
              whyBtn.textContent = showing ? "Why?" : "Hide";
            });
            stepChildren.push(whyBtn);
            stepChildren.push(whyDiv);
          }
          const stepDiv = el("div", { class: "step" }, stepChildren);
          exDiv.appendChild(stepDiv);
        });
        exDiv.appendChild(el("div", { class: "answer", html: ex.answer }));
        app.appendChild(exDiv);
      });
    }

    // EXTRA worked examples — drawn from canonical textbooks.
    // Each example carries its own explain + step-level details.
    const extras = (window.EXTRA_EXAMPLES || {})[topic.id];
    if (extras && extras.length) {
      app.appendChild(el("h3", { class: "section-head" }, "More Worked Examples"));
      app.appendChild(el("p", { class: "section-sub" }, "Additional walk-throughs drawn from canonical textbooks. Same pattern — try to follow each step, then read why it works."));
      extras.forEach((ex) => {
        const exDiv = el("div", { class: "example" });
        exDiv.appendChild(el("h4", {}, ex.title));
        exDiv.appendChild(el("p", { class: "prompt", html: ex.prompt }));
        if (ex.explain) {
          exDiv.appendChild(el("div", { class: "explain", html: ex.explain }));
        }
        ex.steps.forEach((step) => {
          const stepDiv = el("div", { class: "step" }, [
            el("div", { class: "label" }, step.label),
            el("div", { class: "body", html: step.body })
          ]);
          exDiv.appendChild(stepDiv);
        });
        exDiv.appendChild(el("div", { class: "answer", html: ex.answer }));
        app.appendChild(exDiv);
      });
    }

    // Recommended Reading — render before practice problems
    const books = (window.BOOKS || {})[topic.id];
    if (books && books.length) {
      app.appendChild(el("h3", { class: "section-head" }, "Recommended Reading"));
      app.appendChild(el("p", { class: "section-sub" }, "Canonical textbooks for going deeper. The textbook problems below are drawn from these sources."));
      const card = el("div", { class: "books-card" });
      books.forEach((b) => {
        const row = el("div", { class: "book-row" }, [
          el("div", { class: "book-title", html: "<strong>" + b.author + "</strong> — <em>" + b.title + "</em>" + (b.where ? " (" + b.where + ")" : "") }),
          el("div", { class: "book-note", html: b.note })
        ]);
        card.appendChild(row);
      });
      app.appendChild(card);
    }

    if (topic.tasks && topic.tasks.length) {
      app.appendChild(el("h3", { class: "section-head" }, "Practice Problems"));
      app.appendChild(el("p", { class: "section-sub" }, "Try first — type your guess, then check. Attempting before reading the answer dramatically improves retention."));
      const taskExplain = (window.TASK_EXPLAIN || {})[topic.id] || [];
      topic.tasks.forEach((task, i) => {
        const alreadyCorrect = progress[topic.id]?.correct?.[i];
        const alreadyAttempted = progress[topic.id]?.attempted?.[i];

        const feedbackDiv = el("div", { class: "task-feedback" });
        feedbackDiv.hidden = true;
        const answerDiv = el("div", { class: "task-answer", html: task.a });
        answerDiv.hidden = true;
        const explainText = taskExplain[i];
        const explainDiv = explainText ? el("div", { class: "task-explain", html: explainText }) : null;
        if (explainDiv) explainDiv.hidden = true;

        const input = el("input", {
          class: "task-input",
          type: "text",
          placeholder: "Your answer…",
          autocomplete: "off",
          spellcheck: "false"
        });
        const checkBtn = el("button", { class: "task-check-btn" }, "Check");
        const revealBtn = el("button", { class: "show-answer-btn task-reveal-btn" }, "Show answer");

        const showAnswerAndExplain = () => {
          answerDiv.hidden = false;
          if (explainDiv) explainDiv.hidden = false;
          revealBtn.textContent = "Hide answer";
        };
        const hideAnswerAndExplain = () => {
          answerDiv.hidden = true;
          if (explainDiv) explainDiv.hidden = true;
          revealBtn.textContent = "Show answer";
        };

        const doCheck = () => {
          const v = input.value;
          if (!v.trim()) return;
          const ok = answersMatch(v, task.a);
          recordAttempt(topic.id, i, ok);
          feedbackDiv.hidden = false;
          if (ok) {
            feedbackDiv.className = "task-feedback correct";
            feedbackDiv.innerHTML = "✓ Correct!";
            showAnswerAndExplain();
          } else {
            feedbackDiv.className = "task-feedback wrong";
            feedbackDiv.innerHTML = "✗ Not quite. Try again, or click <em>Show answer</em>.";
          }
        };
        checkBtn.addEventListener("click", doCheck);
        input.addEventListener("keydown", (e) => { if (e.key === "Enter") doCheck(); });

        revealBtn.addEventListener("click", () => {
          if (answerDiv.hidden) showAnswerAndExplain();
          else hideAnswerAndExplain();
        });

        const inputRow = el("div", { class: "task-input-row" }, [input, checkBtn, revealBtn]);

        const taskClass = alreadyCorrect ? "task task-solved" : alreadyAttempted ? "task task-tried" : "task";
        const children = [
          el("div", { class: "task-num" }, "Problem " + (i + 1) + (alreadyCorrect ? " · ✓ solved" : alreadyAttempted ? " · attempted" : "")),
          el("div", { class: "task-q", html: task.q }),
          inputRow,
          feedbackDiv,
          answerDiv
        ];
        if (explainDiv) children.push(explainDiv);
        const taskDiv = el("div", { class: taskClass }, children);
        app.appendChild(taskDiv);
      });
    }

    // Textbook Problems — additional problems drawn from canonical books
    const tbProblems = (window.TEXTBOOK_PROBLEMS || {})[topic.id];
    if (tbProblems && tbProblems.length) {
      app.appendChild(el("h3", { class: "section-head" }, "Textbook Problems"));
      app.appendChild(el("p", { class: "section-sub" }, "Classic problems drawn from the books listed in Recommended Reading. Same rules — try first, then check."));
      tbProblems.forEach((tp, i) => {
        const tbIdx = "tb-" + i;  // distinct progress index
        const alreadyCorrect = progress[topic.id]?.correct?.[tbIdx];
        const alreadyAttempted = progress[topic.id]?.attempted?.[tbIdx];

        const feedbackDiv = el("div", { class: "task-feedback" });
        feedbackDiv.hidden = true;
        const answerDiv = el("div", { class: "task-answer", html: tp.a });
        answerDiv.hidden = true;
        const sourceDiv = el("div", { class: "task-source", html: "Source: " + tp.source });

        const input = el("input", {
          class: "task-input",
          type: "text",
          placeholder: "Your answer…",
          autocomplete: "off",
          spellcheck: "false"
        });
        const checkBtn = el("button", { class: "task-check-btn" }, "Check");
        const revealBtn = el("button", { class: "show-answer-btn task-reveal-btn" }, "Show answer");

        const showAns = () => { answerDiv.hidden = false; revealBtn.textContent = "Hide answer"; };
        const hideAns = () => { answerDiv.hidden = true; revealBtn.textContent = "Show answer"; };

        const doCheck = () => {
          const v = input.value;
          if (!v.trim()) return;
          const ok = answersMatch(v, tp.a);
          recordAttempt(topic.id, tbIdx, ok);
          feedbackDiv.hidden = false;
          if (ok) {
            feedbackDiv.className = "task-feedback correct";
            feedbackDiv.innerHTML = "✓ Correct!";
            showAns();
          } else {
            feedbackDiv.className = "task-feedback wrong";
            feedbackDiv.innerHTML = "✗ Not quite. Try again, or click <em>Show answer</em>.";
          }
        };
        checkBtn.addEventListener("click", doCheck);
        input.addEventListener("keydown", (e) => { if (e.key === "Enter") doCheck(); });
        revealBtn.addEventListener("click", () => answerDiv.hidden ? showAns() : hideAns());

        const inputRow = el("div", { class: "task-input-row" }, [input, checkBtn, revealBtn]);
        const taskClass = alreadyCorrect ? "task task-textbook task-solved"
                       : alreadyAttempted ? "task task-textbook task-tried"
                       : "task task-textbook";
        const taskDiv = el("div", { class: taskClass }, [
          el("div", { class: "task-num" }, "Textbook Problem " + (i + 1) + (alreadyCorrect ? " · ✓ solved" : alreadyAttempted ? " · attempted" : "")),
          el("div", { class: "task-q", html: tp.q }),
          inputRow,
          feedbackDiv,
          answerDiv,
          sourceDiv
        ]);
        app.appendChild(taskDiv);
      });
    }

    // Encyclopedia Problems — extra problem set per topic
    const encyclProblems = (window.ENCYCLOPEDIA_PROBLEMS || {})[topic.id];
    if (encyclProblems && encyclProblems.length) {
      app.appendChild(el("h3", { class: "section-head" }, "Encyclopedia Problems"));
      app.appendChild(el("p", { class: "section-sub" }, "Additional drilling on the core ideas of this topic — same try-first, check-second pattern."));
      encyclProblems.forEach((ep, i) => {
        const epIdx = "ep-" + i;
        const alreadyCorrect = progress[topic.id]?.correct?.[epIdx];
        const alreadyAttempted = progress[topic.id]?.attempted?.[epIdx];

        const feedbackDiv = el("div", { class: "task-feedback" });
        feedbackDiv.hidden = true;
        const answerDiv = el("div", { class: "task-answer", html: ep.a });
        answerDiv.hidden = true;

        const input = el("input", {
          class: "task-input", type: "text", placeholder: "Your answer…",
          autocomplete: "off", spellcheck: "false"
        });
        const checkBtn = el("button", { class: "task-check-btn" }, "Check");
        const revealBtn = el("button", { class: "show-answer-btn task-reveal-btn" }, "Show answer");

        const showAns = () => { answerDiv.hidden = false; revealBtn.textContent = "Hide answer"; };
        const hideAns = () => { answerDiv.hidden = true; revealBtn.textContent = "Show answer"; };

        const doCheck = () => {
          const v = input.value;
          if (!v.trim()) return;
          const ok = answersMatch(v, ep.a);
          recordAttempt(topic.id, epIdx, ok);
          feedbackDiv.hidden = false;
          if (ok) {
            feedbackDiv.className = "task-feedback correct";
            feedbackDiv.innerHTML = "✓ Correct!";
            showAns();
          } else {
            feedbackDiv.className = "task-feedback wrong";
            feedbackDiv.innerHTML = "✗ Not quite. Try again, or click <em>Show answer</em>.";
          }
        };
        checkBtn.addEventListener("click", doCheck);
        input.addEventListener("keydown", (e) => { if (e.key === "Enter") doCheck(); });
        revealBtn.addEventListener("click", () => answerDiv.hidden ? showAns() : hideAns());

        const inputRow = el("div", { class: "task-input-row" }, [input, checkBtn, revealBtn]);
        const taskClass = alreadyCorrect ? "task task-encyc task-solved"
                       : alreadyAttempted ? "task task-encyc task-tried"
                       : "task task-encyc";
        const taskDiv = el("div", { class: taskClass }, [
          el("div", { class: "task-num" }, "Encyclopedia Problem " + (i + 1) + (alreadyCorrect ? " · ✓ solved" : alreadyAttempted ? " · attempted" : "")),
          el("div", { class: "task-q", html: ep.q }),
          inputRow,
          feedbackDiv,
          answerDiv
        ]);
        app.appendChild(taskDiv);
      });
    }

    // Connections — render at the end
    const conn = (window.CONNECTIONS || {})[topic.id];
    if (conn) {
      app.appendChild(el("h3", { class: "section-head" }, "Connections"));
      const card = el("div", { class: "connections-card" });
      const sections = [];
      if (conn.prereq && conn.prereq.length) {
        sections.push({ label: "You should already know", color: "muted", items: conn.prereq });
      }
      if (conn.next && conn.next.length) {
        sections.push({ label: "Now you can learn", color: "accent", items: conn.next });
      }
      if (conn.realWorld) {
        sections.push({ label: "Where you'll meet this", color: "physics", text: conn.realWorld });
      }
      sections.forEach((s) => {
        const block = el("div", { class: "conn-block" });
        block.appendChild(el("div", { class: "conn-label" }, s.label));
        if (s.items) {
          const list = el("div", { class: "conn-links" });
          s.items.forEach((id) => {
            const found = findTopic(id);
            if (!found) return;
            const t = found.topic;
            const link = el("button", {
              class: "conn-link",
              onclick: () => {
                state.subject = found.subj;
                openTopic(t.id);
                window.scrollTo(0, 0);
              }
            }, t.title);
            list.appendChild(link);
          });
          block.appendChild(list);
        } else if (s.text) {
          block.appendChild(el("p", { class: "conn-text", html: s.text }));
        }
        card.appendChild(block);
      });
      app.appendChild(card);
    }

    renderMath(app);
  }

  backBtn.addEventListener("click", () => {
    state.view = "home";
    state.topicId = null;
    renderHome();
  });

  // Initial render. Wait for KaTeX auto-render to be ready for home (no math), still safe.
  renderHome();

  // === PWA: install prompt, service worker, update detection ===
  let deferredInstallPrompt = null;
  let installBtn = null;
  let updateToast = null;

  function showInstallButton() {
    if (installBtn || !deferredInstallPrompt) return;
    installBtn = el("button", {
      class: "pwa-install-btn",
      onclick: async () => {
        if (!deferredInstallPrompt) return;
        installBtn.disabled = true;
        deferredInstallPrompt.prompt();
        try {
          await deferredInstallPrompt.userChoice;
        } catch (e) {}
        deferredInstallPrompt = null;
        installBtn.remove();
        installBtn = null;
      }
    }, "Install");
    document.querySelector(".topbar")?.appendChild(installBtn);
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    showInstallButton();
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    if (installBtn) { installBtn.remove(); installBtn = null; }
  });

  function showUpdateToast(reg) {
    if (updateToast) return;
    updateToast = el("div", { class: "pwa-update-toast" });
    updateToast.appendChild(el("span", {}, "A new version of Praxis is available."));
    const btn = el("button", { class: "pwa-update-btn" }, "Reload");
    btn.addEventListener("click", () => {
      if (reg.waiting) reg.waiting.postMessage({ type: "SKIP_WAITING" });
    });
    updateToast.appendChild(btn);
    document.body.appendChild(updateToast);
  }

  function watchForUpdates(reg) {
    if (!reg) return;
    if (reg.waiting) showUpdateToast(reg);
    reg.addEventListener("updatefound", () => {
      const sw = reg.installing;
      if (!sw) return;
      sw.addEventListener("statechange", () => {
        if (sw.state === "installed" && navigator.serviceWorker.controller) {
          showUpdateToast(reg);
        }
      });
    });
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").then((reg) => {
        watchForUpdates(reg);
        // Check for updates periodically (every 60 min) while open.
        setInterval(() => reg.update().catch(() => {}), 60 * 60 * 1000);
      }).catch(() => {});

      // When the new SW takes control, reload once to use it.
      let reloading = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (reloading) return;
        reloading = true;
        window.location.reload();
      });
    });
  }

  // Honor #math, #physics, or #control hash from shortcut launchers.
  const hash = window.location.hash.replace("#", "");
  if (hash === "math" || hash === "physics" || hash === "control") {
    state.subject = hash;
    renderHome();
  }
})();
