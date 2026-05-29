(function () {
  const app = document.getElementById("app");
  const backBtn = document.getElementById("backBtn");
  const title = document.getElementById("title");

  let state = { view: "home", subject: "math", topicId: null };

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
      }, "Physics")
    ]);

    const grid = el("div", { class: "grid" });
    for (const topic of CONTENT[state.subject]) {
      const card = el("div", {
        class: `card ${state.subject}`,
        onclick: () => openTopic(topic.id)
      }, [
        el("div", { class: "stripe" }),
        el("span", { class: `level ${topic.level}` }, topic.level),
        el("h3", {}, topic.title),
        el("p", {}, topic.summary)
      ]);
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

  function renderTopic() {
    const topic = CONTENT[state.subject].find(t => t.id === state.topicId);
    if (!topic) { state.view = "home"; renderHome(); return; }

    backBtn.hidden = false;
    title.textContent = topic.title;

    app.innerHTML = "";

    const head = el("section", { class: "topic-head" }, [
      el("span", { class: `level ${topic.level}` }, topic.level),
      el("h2", {}, topic.title),
      el("p", {}, topic.summary)
    ]);
    app.appendChild(head);

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

    if (topic.examples && topic.examples.length) {
      app.appendChild(el("h3", { class: "section-head" }, "Worked Examples"));
      const explainMap = (window.EXPLAIN || {})[topic.id] || [];
      topic.examples.forEach((ex, exIdx) => {
        const exDiv = el("div", { class: "example" });
        exDiv.appendChild(el("h4", {}, ex.title));
        exDiv.appendChild(el("p", { class: "prompt", html: ex.prompt }));
        const explainText = explainMap[exIdx];
        if (explainText) {
          exDiv.appendChild(el("div", { class: "explain", html: explainText }));
        }
        for (const step of ex.steps) {
          const stepDiv = el("div", { class: "step" }, [
            el("div", { class: "label" }, step.label),
            el("div", { class: "body", html: step.body })
          ]);
          exDiv.appendChild(stepDiv);
        }
        exDiv.appendChild(el("div", { class: "answer", html: ex.answer }));
        app.appendChild(exDiv);
      });
    }

    if (topic.tasks && topic.tasks.length) {
      app.appendChild(el("h3", { class: "section-head" }, "Practice Problems"));
      topic.tasks.forEach((task, i) => {
        const answerDiv = el("div", { class: "task-answer", html: task.a });
        answerDiv.hidden = true;
        const btn = el("button", { class: "show-answer-btn" }, "Show answer");
        btn.addEventListener("click", () => {
          const showing = !answerDiv.hidden;
          answerDiv.hidden = showing;
          btn.textContent = showing ? "Show answer" : "Hide answer";
        });
        const taskDiv = el("div", { class: "task" }, [
          el("div", { class: "task-num" }, "Problem " + (i + 1)),
          el("div", { class: "task-q", html: task.q }),
          btn,
          answerDiv
        ]);
        app.appendChild(taskDiv);
      });
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

  // Register service worker for offline support.
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    });
  }
})();
