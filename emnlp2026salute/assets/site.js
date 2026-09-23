"use strict";

const benchmarks = window.SALUTE_BENCHMARKS;
if (benchmarks) {
  for (const [key, dataset] of Object.entries(benchmarks)) {
    document.querySelector(`[data-count="${key}"]`).textContent = dataset.count.toLocaleString("en-US");
    document.querySelector(`[data-split="${key}"]`).style.width = `${dataset.sources.doctrine / dataset.count * 100}%`;
    for (const source of ["doctrine", "news"]) {
      document.querySelector(`[data-source-count="${key}:${source}"]`).textContent = dataset.sources[source].toLocaleString("en-US");
    }
  }

  const tabs = [...document.querySelectorAll("[data-example]")];
  const panel = document.getElementById("example-panel");
  const answer = document.getElementById("example-answer");
  const choices = document.getElementById("example-options");
  let currentExample;

  function showExample(key) {
    currentExample = benchmarks[key].example;
    answer.open = false;
    tabs.forEach((tab) => {
      const selected = tab.dataset.example === key;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", `${key}-tab`);
    document.getElementById("example-task").textContent = currentExample.task.replaceAll("_", " ");
    document.getElementById("example-document").textContent = currentExample.document;
    document.getElementById("example-question").textContent = currentExample.question;
    document.querySelector(".example-source").textContent = `SOURCE: ${currentExample.source.toUpperCase()}`;
    choices.replaceChildren();
    choices.hidden = !currentExample.options;
    for (const [letter, text] of Object.entries(currentExample.options || {})) {
      const item = document.createElement("li");
      item.dataset.letter = letter;
      const label = document.createElement("span");
      label.className = "option-letter";
      label.textContent = letter;
      const description = document.createElement("span");
      description.textContent = text;
      item.append(label, description);
      choices.append(item);
    }
    const answerKey = document.getElementById("example-key");
    answerKey.hidden = !currentExample.answer;
    answerKey.textContent = currentExample.answer ? `Correct answer: ${currentExample.answer}` : "";
    document.getElementById("example-reference").textContent = currentExample.reference;
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => showExample(tab.dataset.example));
    tab.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      tabs[next].focus();
      showExample(tabs[next].dataset.example);
    });
  });
  answer.addEventListener("toggle", () => {
    choices.querySelectorAll("li").forEach((item) => {
      item.classList.toggle("correct-option", answer.open && item.dataset.letter === currentExample.answer);
    });
  });
  showExample("mcq");
  document.getElementById("example-browser").hidden = false;
}

const copyButton = document.getElementById("copy-citation");
const copyStatus = document.getElementById("copy-status");
copyButton.hidden = false;
copyButton.addEventListener("click", async () => {
  const citation = document.getElementById("bibtex");
  try {
    await navigator.clipboard.writeText(citation.textContent);
    copyButton.textContent = "Copied ✓";
    copyStatus.textContent = "Citation copied to clipboard.";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citation);
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = "Selected — press Ctrl/Cmd+C";
    copyStatus.textContent = "Clipboard access unavailable. Citation selected; press Control+C or Command+C to copy, or use Download BibTeX.";
  }
});

// Keep the result tables readable without JavaScript; enhance them with tabs.
{
  const tabs = [...document.querySelectorAll("[data-result]")];
  const select = (tab) => {
    tabs.forEach((item) => {
      const active = item === tab;
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(item.getAttribute("aria-controls"));
      panel.hidden = !active;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", item.id);
    });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => select(tab));
    tab.addEventListener("keydown", (event) => {
      const target = {
        ArrowRight: (index + 1) % tabs.length,
        ArrowLeft: (index + tabs.length - 1) % tabs.length,
        Home: 0,
        End: tabs.length - 1,
      }[event.key];
      if (target === undefined) return;
      event.preventDefault();
      tabs[target].focus();
      select(tabs[target]);
    });
  });
  if (tabs.length) {
    select(tabs[0]);
    document.querySelector(".results-tabs").hidden = false;
  }
}

// Original paper images remain ordinary image links when dialogs are unavailable.
{
  const dialog = document.getElementById("figure-dialog");
  if (typeof dialog.showModal === "function") {
    const preview = document.getElementById("figure-dialog-img");
    const zoom = document.getElementById("figure-size");
    document.querySelectorAll("[data-figure]").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        preview.src = link.href;
        preview.alt = link.querySelector("img").alt;
        document.getElementById("figure-dialog-title").textContent = link.dataset.figure;
        dialog.classList.remove("is-zoomed");
        zoom.setAttribute("aria-pressed", "false");
        zoom.textContent = "Original size";
        dialog.showModal();
        document.body.classList.add("modal-open");
        document.dispatchEvent(new Event("salute:figurechange"));
      });
    });
    zoom.addEventListener("click", () => {
      const zoomed = dialog.classList.toggle("is-zoomed");
      zoom.setAttribute("aria-pressed", String(zoomed));
      zoom.textContent = zoomed ? "Fit to screen" : "Original size";
    });
    document.getElementById("figure-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
    });
    dialog.addEventListener("close", () => {
      document.body.classList.remove("modal-open");
      document.dispatchEvent(new Event("salute:figurechange"));
    });
  }
}

// Animate only while the pipeline is visible. Manual selection pauses playback.
{
  const pipeline = document.getElementById("animated-pipeline");
  const stages = [...pipeline.querySelectorAll("[data-stage]")];
  const toggle = document.getElementById("pipeline-toggle");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const descriptions = [
    ["Salute-Base", "Continual pretraining combines Salute-Corpus with 10.2M general replay tokens to build a defense-domain knowledge foundation."],
    ["Salute-Instruct", "Two SFT stages pair 255K Salute-Conv examples with general instruction replay: 939K examples in Stage 1, then 100K in Stage 2."],
    ["Salute-LLM", "DPO combines approximately 19K Salute-Pref pairs with 273K general preference examples, improving response alignment while preserving domain capabilities."],
    ["Held-out evaluation", "Salute-Bench measures MCQ accuracy and open-ended response quality. Six general benchmarks assess capability retention; evaluation does not train the model."],
  ];
  let active = 0;
  let inView = false;
  let playRequested = !reduceMotion.matches;
  let timer;

  function selectStage(index) {
    active = index;
    stages.forEach((button, i) => {
      button.setAttribute("aria-pressed", String(i === index));
      button.parentElement.classList.toggle("is-active", i === index);
      button.parentElement.classList.toggle("is-complete", i < index);
    });
    document.getElementById("pipeline-output").textContent = descriptions[index][0];
    document.getElementById("pipeline-description").textContent = descriptions[index][1];
  }

  function syncPlayback() {
    clearInterval(timer);
    const playing = playRequested && inView && !document.hidden && !reduceMotion.matches && !document.getElementById("figure-dialog").open;
    pipeline.dataset.playing = String(playing);
    toggle.textContent = playRequested ? "Pause animation" : "Play animation";
    toggle.hidden = reduceMotion.matches;
    if (playing) timer = setInterval(() => selectStage((active + 1) % stages.length), 4600);
  }

  stages.forEach((button, index) => button.addEventListener("click", () => {
    playRequested = false;
    selectStage(index);
    syncPlayback();
  }));
  toggle.addEventListener("click", () => {
    playRequested = !playRequested;
    syncPlayback();
  });
  reduceMotion.addEventListener("change", () => {
    playRequested = !reduceMotion.matches;
    syncPlayback();
  });
  document.addEventListener("visibilitychange", syncPlayback);
  document.addEventListener("salute:figurechange", syncPlayback);
  const observer = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    syncPlayback();
  }, {threshold: 0.25});
  observer.observe(pipeline);
  selectStage(0);
  syncPlayback();
}
