import type { Experience, Project, SiteConfig } from "../data/types";

function hasLink(url?: string) {
  return Boolean(url && url !== "#" && url.trim() !== "");
}

function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderProjectItem(project: Project, index: number) {
  const num = String(index + 1).padStart(2, "0");
  const titleHtml = hasLink(project.link)
    ? `<a href="${escapeHtml(project.link!)}" target="_blank" rel="noopener noreferrer" class="project-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bloom"><span class="project-title">${escapeHtml(project.title)}</span></a>`
    : `<span class="project-title">${escapeHtml(project.title)}</span>`;

  const awardHtml = project.award
    ? `<p class="mt-3 text-sm font-semibold text-bloom">${escapeHtml(project.award)}</p>`
    : "";

  const tagsHtml = (project.tags || [])
    .map((tag) => `<li class="text-sm text-ink">${escapeHtml(tag)}</li>`)
    .join("");

  const links: string[] = [];
  if (hasLink(project.link)) {
    links.push(
      `<a href="${escapeHtml(project.link!)}" target="_blank" rel="noopener noreferrer" class="text-bloom transition-colors hover:text-bloom-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bloom">Live demo</a>`,
    );
  }
  if (hasLink(project.repo)) {
    links.push(
      `<a href="${escapeHtml(project.repo!)}" target="_blank" rel="noopener noreferrer" class="text-ink transition-colors hover:text-bloom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bloom">Source</a>`,
    );
  }
  const linksHtml = links.length
    ? `<div class="mt-6 flex flex-wrap gap-5 text-sm font-semibold">${links.join("")}</div>`
    : "";

  return `
    <li class="project-item reveal is-visible py-10 md:py-12" style="transition-delay: ${index * 80}ms">
      <article class="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] md:gap-12">
        <div>
          <p class="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">${num}</p>
          <h3 class="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">${titleHtml}</h3>
          ${awardHtml}
        </div>
        <div class="flex flex-col justify-center">
          <p class="text-base leading-relaxed text-ink-muted md:text-lg">${escapeHtml(project.description || "")}</p>
          <ul class="mt-5 flex flex-wrap gap-x-5 gap-y-2" aria-label="Technologies">${tagsHtml}</ul>
          ${linksHtml}
        </div>
      </article>
    </li>
  `;
}

function renderExperienceItem(item: Experience, index: number) {
  return `
    <li class="reveal is-visible border-t border-line/70 py-8 first:border-t-0 first:pt-0 md:py-10" style="transition-delay: ${index * 80}ms">
      <div class="grid gap-3 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-12">
        <div>
          <h3 class="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">${escapeHtml(item.role || "")}</h3>
          <p class="mt-1 text-sm font-semibold text-bloom">${escapeHtml(item.org || "")}</p>
        </div>
        <p class="text-base leading-relaxed text-ink-muted md:text-lg">${escapeHtml(item.detail || "")}</p>
      </div>
    </li>
  `;
}

/** Apply admin-saved config to the live homepage DOM */
export function applySiteContent(config: SiteConfig) {
  const { site, projects, experience } = config;

  if (site.pageTitle) document.title = site.pageTitle;

  const setText = (selector: string, value: string) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
  };

  const setHtml = (selector: string, value: string) => {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = value;
  };

  const setAttr = (selector: string, attr: string, value: string) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  };

  // Nav
  setText("[data-content='nav-name']", site.name.split(" ")[0] || site.name);
  const navImg = document.querySelector<HTMLImageElement>("[data-content='nav-headshot']");
  if (navImg && site.headshot) {
    navImg.src = site.headshot;
    navImg.hidden = false;
  }

  // Hero
  setText("[data-content='hero-name']", site.name);
  setText("[data-content='hero-role']", site.role);
  setText("[data-content='hero-tagline']", site.tagline);
  const heroImg = document.querySelector<HTMLImageElement>("[data-content='hero-headshot']");
  if (heroImg && site.headshot) {
    heroImg.src = site.headshot;
    heroImg.alt = `${site.name} headshot`;
    heroImg.hidden = false;
  }

  // About stack
  if (site.stack?.length) {
    const stackSentence =
      site.stack.length === 1
        ? site.stack[0]
        : `${site.stack.slice(0, -1).join(", ")}, and ${site.stack[site.stack.length - 1]}`;
    setText("[data-content='about-stack-inline']", stackSentence);
    setHtml(
      "[data-content='about-stack-list']",
      site.stack
        .map(
          (tech) =>
            `<li class="font-display text-sm font-semibold tracking-wide text-ink">${escapeHtml(tech)}</li>`,
        )
        .join(""),
    );
  }

  // Projects
  const projectsList = document.querySelector("[data-content='projects-list']");
  if (projectsList) {
    projectsList.innerHTML = (projects || []).map(renderProjectItem).join("");
  }

  // Experience
  const expList = document.querySelector("[data-content='experience-list']");
  if (expList) {
    expList.innerHTML = (experience || []).map(renderExperienceItem).join("");
  }

  // Contact
  setAttr("[data-content='contact-email']", "href", site.email || "#");
  setAttr("[data-content='contact-github']", "href", site.github || "#");
  setAttr("[data-content='contact-linkedin']", "href", site.linkedin || "#");

  // Footer
  setText("[data-content='footer-name']", site.name);
  if (site.stack?.length) {
    setText(
      "[data-content='footer-stack']",
      `CS student & software developer · Building with ${site.stack.join(", ")}`,
    );
  }
}
