/*
  THE PAPERS — content list

  To add a new paper:
  1. Create a new HTML file inside the "papers" folder.
  2. Copy the structure from paper-001.html and replace its content.
  3. Add a new object below. Give it a unique id and the path to its file.
  4. Commit/push the changes to GitHub Pages.

  Categories supported by the filters: Essays, Reports, Research.
*/

const papers = [
  {
    id: "paper-001",
    title: "The Missing Prom",
    label: "CASE 001",
    category: "Essays",
    topics: ["Culture", "Society", "Human Behavior"],
    date: "June 2026",
    readTime: "5 min read",
    description: "Why did the traditional American-style prom never become a major coming-of-age ritual in India?",
    file: "papers/paper-001.html"
  }
];

const papersGrid = document.getElementById("papers-grid");
const paperSearch = document.getElementById("paper-search");
const paperFilters = document.getElementById("paper-filters");
const noPapers = document.getElementById("no-papers");

let activePaperFilter = "All";

function createPaperCard(paper) {
  const card = document.createElement("a");
  card.className = "paper-card";
  card.href = paper.file;

  const top = document.createElement("div");
  top.className = "paper-card-top";

  const label = document.createElement("span");
  label.className = "paper-label";
  label.textContent = paper.label || paper.category;

  const readTime = document.createElement("span");
  readTime.className = "paper-read-time";
  readTime.textContent = paper.readTime || "";

  top.append(label, readTime);

  const title = document.createElement("h3");
  title.textContent = paper.title;

  const description = document.createElement("p");
  description.className = "paper-description";
  description.textContent = paper.description;

  const topics = document.createElement("div");
  topics.className = "paper-topics";
  (paper.topics || []).forEach((topic) => {
    const chip = document.createElement("span");
    chip.textContent = topic;
    topics.appendChild(chip);
  });

  const bottom = document.createElement("div");
  bottom.className = "paper-card-bottom";

  const meta = document.createElement("span");
  meta.textContent = `${paper.category || "Paper"}${paper.date ? " · " + paper.date : ""}`;

  const read = document.createElement("span");
  read.className = "read-link";
  read.textContent = "Read paper ↗";

  bottom.append(meta, read);
  card.append(top, title, description, topics, bottom);
  return card;
}

function renderPapers() {
  if (!papersGrid) return;

  const query = (paperSearch?.value || "").trim().toLowerCase();
  const filtered = papers.filter((paper) => {
    const matchesCategory = activePaperFilter === "All" || paper.category === activePaperFilter;
    const searchable = [
      paper.title,
      paper.label,
      paper.category,
      paper.description,
      ...(paper.topics || [])
    ].join(" ").toLowerCase();
    return matchesCategory && searchable.includes(query);
  });

  papersGrid.replaceChildren(...filtered.map(createPaperCard));
  if (noPapers) noPapers.hidden = filtered.length > 0;
}

paperSearch?.addEventListener("input", renderPapers);

paperFilters?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activePaperFilter = button.dataset.filter;
  paperFilters.querySelectorAll(".filter-button").forEach((item) => {
    const selected = item === button;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-pressed", String(selected));
  });
  renderPapers();
});

renderPapers();
