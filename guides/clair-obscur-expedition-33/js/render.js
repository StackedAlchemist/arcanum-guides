// ============================================================
// THE ARCANUM - Clair Obscur Wiki
// render.js - the renderer (the hammer)
//
// Reads WIKI_NAV + data files, builds the sidebar and every
// page. Routing is hash-based (#characters, #gustave, etc.) so
// it works on static hosting (GitHub Pages) with no build step.
//
// Page types: index (card grid), article (prose sections),
//             list (data tables), detail (single character).
// ============================================================

(function () {
  "use strict";

  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // ---- sidebar ----------------------------------------------
  function renderSidebar(activeSlug) {
    const html = WIKI_NAV.map(b => `
      <div class="nav-bucket">
        <h4>${esc(b.bucket)}</h4>
        ${b.pages.map(p => `
          <a class="nav-link ${p.slug === activeSlug ? "active" : ""}" href="#${p.slug}">
            <span>${esc(p.title)}</span>
            ${p.status === "stub" ? '<span class="stub-dot">soon</span>' : ""}
          </a>`).join("")}
      </div>`).join("");
    document.getElementById("sidebar-nav").innerHTML = html;
  }

  function findPage(slug) {
    for (const b of WIKI_NAV) {
      const p = b.pages.find(x => x.slug === slug);
      if (p) return { ...p, bucket: b.bucket };
    }
    // character detail pages aren't in nav; synthesize
    if (typeof CHARACTERS !== "undefined") {
      const c = CHARACTERS.find(x => x.slug === slug);
      if (c) return { slug, title: c.name, bucket: "Characters", type: "detail" };
    }
    return null;
  }

  function crumb(bucket, title) {
    return `<div class="crumb"><a href="../../index.html">The Arcanum</a> / <a href="#characters">Clair Obscur</a> / ${esc(bucket)} / ${esc(title)}</div>`;
  }

  // ---- page builders ----------------------------------------
  function buildIndexCharacters() {
    const cards = CHARACTERS.map(c => `
      <a class="card" href="#${c.slug}">
        <h3>${esc(c.name)}</h3>
        <div class="role">${esc(c.role)}</div>
        <div class="blurb">${esc(c.summary.slice(0, 120))}${c.summary.length > 120 ? "…" : ""}</div>
      </a>`).join("");
    return crumb("Characters", "Characters")
      + `<h1 class="page-title">Characters</h1>`
      + `<p class="page-lede">The eight playable members of Expedition 33. All join by mid-Act II; the active party holds three, with reserves swapping in for any KO'd member.</p>`
      + `<div class="card-grid">${cards}</div>`;
  }

  function buildDetailCharacter(slug) {
    const c = CHARACTERS.find(x => x.slug === slug);
    if (!c) return notFound();
    const skills = (c.startingSkills || []).map(s => `<span class="chip">${esc(s)}</span>`).join("") || '<span class="chip">&mdash;</span>';
    let extra = "";
    if (c.mechanic.stances) extra += stanceTable("Stances", c.mechanic.stances);
    if (c.mechanic.charges) extra += stanceTable("Charges", c.mechanic.charges);
    if (c.mechanic.ranks)   extra += `<p><strong>Rank ladder:</strong> ${c.mechanic.ranks.join(" &rarr; ")}</p>`;
    if (c.affinities)       extra += stanceTable("Elemental Affinities", c.affinities, "name", "effect");
    return crumb("Characters", c.name)
      + `<div class="detail-head"><h1 class="page-title">${esc(c.name)}</h1></div>`
      + (c.quote ? `<div class="detail-quote">"${esc(c.quote)}"</div>` : "")
      + `<dl class="kv">
           <dt>Role</dt><dd>${esc(c.role)}</dd>
           <dt>Weapon</dt><dd>${esc(c.weapon)}</dd>
           <dt>Joins</dt><dd>${esc(c.actStatus)}</dd>
         </dl>`
      + `<p>${esc(c.summary)}</p>`
      + `<div class="mech-box"><h3>${esc(c.mechanic.name)}</h3><p>${esc(c.mechanic.detail)}</p>${extra}</div>`
      + `<h2 class="sec">Starting Skills</h2><div>${skills}</div>`
      + `<h2 class="sec">Build Notes</h2><p>${esc(c.buildNotes)}</p>`;
  }

  function stanceTable(title, rows, k1 = "name", k2 = "effect") {
    return `<h3 style="font-family:'Cinzel',serif;color:var(--ink);font-size:.85rem;margin:1rem 0 .4rem;">${esc(title)}</h3>`
      + `<table class="data"><tbody>${rows.map(r => `<tr><td>${esc(r[k1])}</td><td>${esc(r[k2])}</td></tr>`).join("")}</tbody></table>`;
  }

  function buildArticle(slug) {
    const a = ARTICLES[slug];
    if (!a) return notFound();
    const body = a.sections.map(s => `<h2 class="sec">${esc(s.h)}</h2><p>${esc(s.p)}</p>`).join("");
    const page = findPage(slug);
    return crumb(page.bucket, a.title) + `<h1 class="page-title">${esc(a.title)}</h1>` + body;
  }

  function buildLuminas() {
    const types = stanceTable("Lumina Types", LUMINAS.types, "name", "effect");
    const standout = `<table class="data"><thead><tr><th>Lumina</th><th>Type</th><th>Notes</th></tr></thead><tbody>`
      + LUMINAS.standout.map(l => `<tr><td>${esc(l.name)}</td><td>${esc(l.type)}</td><td>${esc(l.note)}</td></tr>`).join("")
      + `</tbody></table>`;
    return crumb("Equipment", "Luminas")
      + `<h1 class="page-title">Luminas</h1>`
      + `<p class="page-lede">${esc(LUMINAS.intro)}</p>`
      + types
      + `<h2 class="sec">Standout Luminas</h2>${standout}`
      + `<div class="note"><span class="label">Build note</span>${esc(LUMINAS.note)}</div>`;
  }

  function buildStatusEffects() {
    const off = stanceTable("Offensive / Engine", STATUS_EFFECTS.offensive, "name", "effect");
    const def = stanceTable("Defensive / Buff", STATUS_EFFECTS.defensive, "name", "effect");
    const aff = stanceTable("Elemental Affinities", STATUS_EFFECTS.affinities, "name", "effect");
    return crumb("Characters", "Status Effects")
      + `<h1 class="page-title">Status Effects</h1>`
      + `<p class="page-lede">${esc(STATUS_EFFECTS.intro)}</p>`
      + off + def + aff;
  }

  function buildStub(slug) {
    const page = findPage(slug);
    return crumb(page.bucket, page.title)
      + `<h1 class="page-title">${esc(page.title)}</h1>`
      + `<div class="stub-notice"><strong>Page under construction.</strong><br>`
      + `The structure for this page is live, but the data is being researched and entered in a later batch. `
      + `This is a data page (${esc(page.type)}) and will populate from its data file once compiled against current sources, including the Thank You Update content.</div>`;
  }

  function notFound() {
    return `<h1 class="page-title">Not found</h1><p>That page doesn't exist yet. <a href="#characters">Back to Characters</a>.</p>`;
  }

  // ---- router -----------------------------------------------
  function route() {
    const slug = (location.hash || "#characters").slice(1) || "characters";
    const page = findPage(slug);
    const main = document.getElementById("content");
    renderSidebar(slug);

    if (!page) { main.innerHTML = notFound(); return; }
    if (page.status === "stub") { main.innerHTML = buildStub(slug); window.scrollTo(0,0); return; }

    let html;
    switch (page.type) {
      case "detail":  html = buildDetailCharacter(slug); break;
      case "index":   html = (slug === "characters") ? buildIndexCharacters() : notFound(); break;
      case "article": html = buildArticle(slug); break;
      case "list":
        if (slug === "luminas")        html = buildLuminas();
        else if (slug === "status-effects") html = buildStatusEffects();
        else html = buildStub(slug);
        break;
      default: html = buildStub(slug);
    }
    main.innerHTML = html;
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", route);
})();
