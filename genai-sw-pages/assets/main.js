(() => {
  "use strict";

  const categories = [
    ["all", "전체"],
    ["protection", "워터마킹·저작권"],
    ["unlearning", "언러닝·언어 모델"],
    ["video", "영상 생성·이해"],
    ["spatial", "3D·공간 지능"],
    ["image", "이미지 생성·편집"],
    ["agents", "에이전트·멀티모달"]
  ];
  const labels = Object.fromEntries(categories);
  const projects = [...(window.SOFTWARE_PROJECTS || [])].sort(
    (a, b) => Number(b.featured) - Number(a.featured) || a.page - b.page
  );
  const grid = document.getElementById("project-grid");
  const search = document.getElementById("project-search");
  const filters = document.getElementById("category-filters");
  const count = document.getElementById("result-count");
  const empty = document.getElementById("empty-state");
  let selectedCategory = "all";

  const normalize = value => String(value).normalize("NFKC").toLocaleLowerCase("ko").trim();
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const link = (url, text, label) => {
    const node = element("a", "", text);
    node.href = url;
    node.target = "_blank";
    node.rel = "noopener";
    node.setAttribute("aria-label", label);
    return node;
  };

  if (!projects.length) {
    count.textContent = "목록을 불러오지 못했습니다. 아래 홍보자료 PDF에서 전체 연구 SW를 확인해 주세요.";
    return;
  }

  document.querySelectorAll("[data-total]").forEach(node => { node.textContent = projects.length; });

  const cards = projects.map(project => {
    const article = element("article", "project-card");
    article.id = `project-${project.id}`;
    const category = element("p", "project-category", labels[project.category] || project.category);
    const title = element("h3", "", project.name);
    title.title = project.title;
    const description = element("p", "project-description", project.description);
    const repoPath = element("p", "repo-path", project.url.replace("https://github.com/", ""));
    const links = element("div", "project-links");
    links.append(
      link(project.url, "GitHub 코드 보기", `${project.name} GitHub 저장소 (새 탭)`),
      link(`./genai_compyright_sw.pdf#page=${project.page}`, "소개자료", `${project.name} 소개자료 PDF ${project.page}페이지 (새 탭)`)
    );
    article.append(category, title, description, repoPath, links);
    grid.append(article);
    return {
      article,
      category: project.category,
      searchText: normalize([project.name, project.title, project.description, project.url, labels[project.category]].join(" "))
    };
  });

  categories.forEach(([key, label]) => {
    const categoryCount = key === "all" ? projects.length : projects.filter(project => project.category === key).length;
    const button = element("button", "filter-button", label);
    button.type = "button";
    button.dataset.category = key;
    button.setAttribute("aria-pressed", String(key === selectedCategory));
    button.setAttribute("aria-controls", "project-grid");
    button.setAttribute("aria-label", `${label}, ${categoryCount}개 프로젝트`);
    const number = element("span", "", String(categoryCount));
    number.setAttribute("aria-hidden", "true");
    button.append(number);
    button.addEventListener("click", () => {
      selectedCategory = key;
      update();
    });
    filters.append(button);
  });

  function update() {
    const tokens = normalize(search.value).split(/\s+/).filter(Boolean);
    let visibleCount = 0;
    cards.forEach(card => {
      const matchesCategory = selectedCategory === "all" || card.category === selectedCategory;
      const matchesSearch = tokens.every(token => card.searchText.includes(token));
      card.article.hidden = !(matchesCategory && matchesSearch);
      if (!card.article.hidden) visibleCount += 1;
    });
    filters.querySelectorAll("button").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.category === selectedCategory));
    });
    count.textContent = selectedCategory === "all" && tokens.length === 0
      ? `전체 ${projects.length}개 프로젝트`
      : `${labels[selectedCategory]} ${visibleCount}개${tokens.length ? " 검색됨" : " 프로젝트"} · 전체 ${projects.length}개`;
    empty.hidden = visibleCount !== 0;
    grid.hidden = visibleCount === 0;
  }

  search.addEventListener("input", update);
  document.getElementById("reset-search").addEventListener("click", () => {
    selectedCategory = "all";
    search.value = "";
    update();
    search.focus();
  });
  document.getElementById("catalog-controls").hidden = false;
  update();
})();
