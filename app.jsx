/* global React, ReactDOM */
const { useState, useEffect, useRef, useMemo } = React;

// ——— Tweaks defaults ———
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "warm",
  "fonts": "instrument",
  "dark": false,
  "density": "roomy",
  "showHidden": false,
  "reorder": false
}/*EDITMODE-END*/;

const PALETTES = {
  warm:    { bg: "#f5f0e8", bg2: "#ece5d8", ink: "#1a1614", ink2: "#524a42", ink3: "#8a8278", rule: "#d8cfbf", accent: "#c25a3c", accentSoft: "#e8b29a", paper: "#fbf8f2" },
  cool:    { bg: "#eef1f3", bg2: "#dde3e7", ink: "#101418", ink2: "#445058", ink3: "#7c8893", rule: "#cdd5db", accent: "#3a6dd9", accentSoft: "#a4baec", paper: "#f7f9fb" },
  noir:    { bg: "#f3f1ed", bg2: "#e8e5dd", ink: "#000",    ink2: "#3a3a3a", ink3: "#888",    rule: "#cfccc4", accent: "#000", accentSoft: "#bdbdbd", paper: "#fff" },
  archive: { bg: "#e9e4d4", bg2: "#dad3bf", ink: "#1c1a14", ink2: "#4a4636", ink3: "#857d65", rule: "#c8c0a4", accent: "#8a4f1f", accentSoft: "#d8b78b", paper: "#f4f0e0" },
};
const FONTS = {
  instrument: { serif: "'Instrument Serif', Georgia, serif", sans: "'Inter Tight', Inter, sans-serif", mono: "'JetBrains Mono', monospace" },
  fraunces:   { serif: "'Cormorant Garamond', Georgia, serif", sans: "'Manrope', sans-serif", mono: "'JetBrains Mono', monospace" },
  hk:         { serif: "'Newsreader', Georgia, serif", sans: "'Familjen Grotesk', sans-serif", mono: "'IBM Plex Mono', monospace" },
};

// ——— Palette / font sync ———
function applyTheme(t) {
  const p = PALETTES[t.palette] || PALETTES.warm;
  const f = FONTS[t.fonts] || FONTS.instrument;
  const r = document.documentElement.style;
  r.setProperty("--bg", p.bg);
  r.setProperty("--bg-2", p.bg2);
  r.setProperty("--ink", p.ink);
  r.setProperty("--ink-2", p.ink2);
  r.setProperty("--ink-3", p.ink3);
  r.setProperty("--rule", p.rule);
  r.setProperty("--accent", p.accent);
  r.setProperty("--accent-soft", p.accentSoft);
  r.setProperty("--paper", p.paper);
  r.setProperty("--serif", f.serif);
  r.setProperty("--sans", f.sans);
  r.setProperty("--mono", f.mono);
  document.body.classList.toggle("dark", !!t.dark);
  document.body.classList.toggle("compact", t.density === "compact");
  document.body.classList.toggle("reorder-on", !!t.reorder);
}

// ——— Reveal-on-scroll ———
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("in"));
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ——— Nav ———
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll); onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="nav__brand">
        <span className="nav__dot"></span>
        <span>Sorawit "Tai" Sukudom</span>
      </div>
      <div className="nav__links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav__time">Portfolio · 2026</div>
    </nav>
  );
}

// ——— Hero ———
function Hero({ p }) {
  return (
    <section className="hero" id="top">
      <div className="hero__top">
        <div className="col-l">
          <div>Sorawit Sukudom — Tai (he/him)</div>
          <div>Designer · Visual Storyteller</div>
          <div>{p.location} · 64807</div>
        </div>
        <div className="col-r">
          <div className="pill">Open to opportunities · h_da</div>
          <div>52 °N — Darmstadt time</div>
        </div>
      </div>

      <div>
        <h1 className="hero__title">
          Designer who<br/>
          builds <span className="ital acc">stories</span>,<br/>
          not just <span className="ital">screens</span>.
        </h1>
        <div className="hero__sub">
          <span>UX/UI</span><span>Brand</span><span>Motion</span><span>Storytelling</span><span>M.A. Expanded Media</span>
        </div>
      </div>

      <div className="hero__bottom">
        <p className="hero__manifesto">{p.manifesto}</p>
        <dl className="hero__meta">
          <dl>
            <dt>Email</dt><dd><a href={"mailto:" + p.email}>{p.email}</a></dd>
            <dt>Phone</dt><dd>{p.phone}</dd>
            <dt>LinkedIn</dt><dd><a href={p.linkedinUrl} target="_blank" rel="noopener">{p.linkedin}</a></dd>
            <dt>TikTok</dt><dd>{p.tiktok}</dd>
          </dl>
        </dl>
      </div>

      <div className="scrollhint">Scroll · selected works</div>
    </section>
  );
}

// ——— Application banner ———
function AppBanner({ p }) {
  return (
    <div className="appbanner">
      <div className="ref">REF · 2026 / FE-DESIGN</div>
      <div className="role">Curated for <em>{p.forRole.role}</em> — {p.forRole.company}</div>
      <div className="meta">{p.forRole.note}</div>
    </div>
  );
}

// ——— About ———
function About({ p, journey }) {
  return (
    <section className="section" id="about">
      <div className="section__head">
        <div className="section__no">§ 01 — About</div>
        <h2 className="section__title">Six years across <span className="ital acc">brand</span>, <span className="ital">product</span>, and <span className="ital">motion</span> — now studying Expanded Media in Darmstadt.</h2>
      </div>
      <div className="about__grid">
        <div>
          <div className="about__copy">
            I move between <strong>research-led product work</strong> and <strong>storytelling</strong> that has to land in seconds.
          </div>
          <div className="about__journey">
            {journey.map((j, i) => (
              <div className="j-row" key={i}>
                <span className="y">{j.y}</span>
                <span className="l">{j.label}</span>
                <span className="p">{j.place}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about__lede">
          <p className="dropcap">Bangkok-trained, Germany-based. I started in concert promo and TV editorial at GMM Grammy, where every cut had to earn the next two seconds. I moved into product at Tropfin — three years owning a B2B platform's design system, marketing site, and trade-show presence end-to-end.</p>
          <p>Along the way I led an award-winning sustainability app (ASEAN Energy Awards 2021), a pre-school animation series, a McDonald's uniform collection, and an interactive game about bipolar disorder built across ten prototype iterations.</p>
          <p>Now I'm a Master's student in Expanded Media at h_da. I read papers in the morning, ship Figma files in the afternoon, and spend the evening growing a TikTok channel — currently 320K+ views in three months — as a live A/B-test surface I plug back into client work.</p>
          <p>I care about <em>accessibility</em>, <em>typography</em>, and the small details of a learning-platform UI that decide whether someone finishes the module.</p>
        </div>
      </div>
    </section>
  );
}

// ——— Work ———
function Work({ projects, onOpen, t, setTweak }) {
  const [order, setOrder] = useState(() => {
    try { return JSON.parse(localStorage.getItem("tai-order") || "null") || projects.map(p => p.id); }
    catch { return projects.map(p => p.id); }
  });
  const [hidden, setHidden] = useState(() => {
    try { return JSON.parse(localStorage.getItem("tai-hidden") || "[]"); }
    catch { return []; }
  });
  const [drag, setDrag] = useState(null);
  const [over, setOver] = useState(null);

  useEffect(() => { localStorage.setItem("tai-order", JSON.stringify(order)); }, [order]);
  useEffect(() => { localStorage.setItem("tai-hidden", JSON.stringify(hidden)); }, [hidden]);

  const byId = useMemo(() => Object.fromEntries(projects.map(p => [p.id, p])), [projects]);
  const sorted = order.map(id => byId[id]).filter(Boolean);
  const visible = sorted.filter(p => !hidden.includes(p.id));
  const hiddenItems = sorted.filter(p => hidden.includes(p.id));

  const move = (id, dir) => {
    const idx = order.indexOf(id);
    const next = idx + dir;
    if (next < 0 || next >= order.length) return;
    const o = order.slice();
    [o[idx], o[next]] = [o[next], o[idx]];
    setOrder(o);
  };
  const hide = (id) => setHidden([...hidden, id]);
  const unhide = (id) => setHidden(hidden.filter(x => x !== id));

  const onDragStart = (id) => () => setDrag(id);
  const onDragOver = (id) => (e) => { e.preventDefault(); setOver(id); };
  const onDrop = (id) => (e) => {
    e.preventDefault();
    if (!drag || drag === id) { setDrag(null); setOver(null); return; }
    const o = order.slice();
    const fromIdx = o.indexOf(drag);
    o.splice(fromIdx, 1);
    const toIdx = o.indexOf(id);
    o.splice(toIdx, 0, drag);
    setOrder(o);
    setDrag(null); setOver(null);
  };

  return (
    <section className="section" id="work">
      <div className="section__head">
        <div className="section__no">§ 02 — Selected Works · 2019—2025</div>
        <h2 className="section__title">Eleven projects, in <span className="ital">your</span> preferred order.</h2>
      </div>
      <div className="work__list">
        {visible.map((p) => (
          <article
            key={p.id}
            className={"proj " + (drag === p.id ? "dragging " : "") + (over === p.id ? "drag-over " : "")}
            onClick={() => onOpen(p)}
            draggable={t.reorder}
            onDragStart={onDragStart(p.id)}
            onDragOver={onDragOver(p.id)}
            onDrop={onDrop(p.id)}
            onDragEnd={() => { setDrag(null); setOver(null); }}
          >
            <div className="proj__order" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => move(p.id, -1)} title="Move up">↑</button>
              <button onClick={() => move(p.id, 1)} title="Move down">↓</button>
            </div>
            <button className="proj__hide-btn" onClick={(e) => { e.stopPropagation(); hide(p.id); }}>Hide</button>
            <div className="proj__no">{p.no}</div>
            <div className="proj__col-l">
              <h3 className="proj__title">{p.title}</h3>
              <div className="proj__kicker">{p.kicker} — {p.role}</div>
              <div className="proj__meta">
                <span className="tag">{p.year}</span>
                <span className="tag">{p.type}</span>
                {p.awards && p.awards.map((a, i) => <span key={i} className="tag award">★ {a}</span>)}
              </div>
            </div>
            <div className="proj__col-r">
              <p className="proj__summary">{p.summary}</p>
              <div className="proj__expand">Read case study <span className="ar"></span></div>
            </div>
          </article>
        ))}
      </div>
      {hiddenItems.length > 0 && (
        <div className="hidden-list-wrap">
          <div className="hidden-list-toggle" style={{marginBottom: 8}}>{hiddenItems.length} hidden</div>
          <div style={{display: "flex", gap: 8, flexWrap: "wrap"}}>
            {hiddenItems.map(p => (
              <button key={p.id} className="hidden-list-toggle" onClick={() => unhide(p.id)}
                style={{border: "1px solid var(--rule)", padding: "6px 10px", borderRadius: 999}}>
                + {p.title}
              </button>
            ))}
          </div>
        </div>
      )}
      {!t.reorder && (
        <div style={{marginTop: 32, fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".1em"}}>
          Tip — open Tweaks to <button onClick={() => setTweak("reorder", true)} style={{borderBottom: "1px solid var(--accent)", color: "var(--accent)"}}>reorder or hide projects</button>
        </div>
      )}
    </section>
  );
}

// ——— Modal ———
function Modal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [project]);

  return (
    <div className={"modal-bg" + (project ? " open" : "")} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>Close</button>
        {project && (
          <>
            <div className="modal__no">Case · {project.no} / {project.year}</div>
            <h2 className="modal__title">{project.title}</h2>
            <div className="modal__kicker">{project.kicker}</div>
            <div className="modal__image" style={project.image ? {backgroundImage: `url(${project.image})`} : {}}>
              {!project.image && <div className="ph">[ Place TikTok stat overlay or screen-capture ]</div>}
            </div>
            <div className="modal__body">
              <div className="modal__meta">
                <div className="row"><div className="lab">Role</div><div className="val">{project.role}</div></div>
                <div className="row"><div className="lab">Type</div><div className="val">{project.type}</div></div>
                <div className="row"><div className="lab">Year</div><div className="val">{project.year}</div></div>
                {project.awards && (
                  <div className="row">
                    <div className="lab">Recognition</div>
                    <div className="val">{project.awards.map((a, i) => <div key={i}>★ {a}</div>)}</div>
                  </div>
                )}
                <div className="row">
                  <div className="lab">Toolkit</div>
                  <div className="modal__tags">
                    {project.tags.map((t, i) => <span key={i} className="t">{t}</span>)}
                  </div>
                </div>
              </div>
              <div className="modal__sections">
                <div>
                  <h3>Context</h3>
                  <p>{project.summary}</p>
                </div>
                <div>
                  <h3>Problem</h3>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <h3>Approach</h3>
                  <p>{project.approach}</p>
                </div>
                <div>
                  <h3>Outcome</h3>
                  <p>{project.outcome}</p>
                </div>
                {project.stats && (
                  <div className="modal__stats">
                    {project.stats.map((s, i) => (
                      <div className="s" key={i}><span className="v">{s.value}</span><span className="l">{s.label}</span></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ——— Skills ———
function Skills({ skills }) {
  return (
    <section className="section" id="skills">
      <div className="section__head">
        <div className="section__no">§ 03 — Capabilities</div>
        <h2 className="section__title">A toolkit shaped by <span className="ital acc">five disciplines</span>.</h2>
      </div>
      <div className="skills__grid">
        {Object.entries(skills).map(([k, items]) => (
          <div className="skill-col" key={k}>
            <h4>{k}</h4>
            <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="langs">
        <div className="lang">
          <span className="name">Thai</span>
          <span className="level">Native</span>
          <span className="bar"><i style={{width: "100%"}}/></span>
        </div>
        <div className="lang">
          <span className="name">English</span>
          <span className="level">B2 · Independent</span>
          <span className="bar"><i style={{width: "70%"}}/></span>
        </div>
        <div className="lang">
          <span className="name">Deutsch</span>
          <span className="level">A1 · Lernend</span>
          <span className="bar"><i style={{width: "20%"}}/></span>
        </div>
      </div>
    </section>
  );
}

// ——— Contact ———
function Contact({ p }) {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__head">
        Let's <span className="ital acc">talk</span>.<br/>
        Schreib mir an <a href={"mailto:" + p.email}>{p.email}</a>
      </h2>
      <div className="contact__grid">
        <div className="contact__col">
          <h4>Direct</h4>
          <ul>
            <li><a href={"mailto:" + p.email}><span className="ic">Email</span> {p.email}</a></li>
            <li><a href={"tel:" + p.phone.replace(/\s/g,"")}><span className="ic">Phone</span> {p.phone}</a></li>
            <li><a href={"https://wa.me/" + p.phone.replace(/\D/g,"")}><span className="ic">WhatsApp</span> Message me →</a></li>
          </ul>
        </div>
        <div className="contact__col">
          <h4>Elsewhere</h4>
          <ul>
            <li><a href={p.linkedinUrl} target="_blank" rel="noopener"><span className="ic">LinkedIn</span> {p.linkedin}</a></li>
            <li><a href="#"><span className="ic">TikTok</span> {p.tiktok}</a></li>
            <li><a href={p.websiteUrl} target="_blank" rel="noopener"><span className="ic">Web</span> {p.website}</a></li>
            <li><a href="#"><span className="ic">Address</span> Altheimer Str. 56, 64807 Dieburg</a></li>
          </ul>
        </div>
      </div>
      <div className="foot">
        <span>© 2026 Sorawit Sukudom</span>
        <span>Made by hand · Darmstadt</span>
        <span>Available · Q2 2026</span>
      </div>
    </section>
  );
}

// ——— App ———
function App() {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [open, setOpen] = useState(null);

  useEffect(() => { applyTheme(tweaks); }, [tweaks]);
  useReveal();

  const setT = (k, v) => {
    if (typeof k === "object") setTweak(k);
    else setTweak({ [k]: v });
  };

  return (
    <>
      <Nav />
      <Hero p={window.PROFILE} />
      <AppBanner p={window.PROFILE} />
      <About p={window.PROFILE} journey={window.JOURNEY} />
      <Work projects={window.PROJECTS} onOpen={setOpen} t={tweaks} setTweak={setT} />
      <Skills skills={window.SKILLS} />
      <Contact p={window.PROFILE} />
      <Modal project={open} onClose={() => setOpen(null)} />

      <window.TweaksPanel title="Portfolio Tweaks">
        <window.TweakSection label="Aesthetic">
          <window.TweakSelect label="Palette" value={tweaks.palette} onChange={(v) => setT("palette", v)}
            options={["warm", "cool", "noir", "archive"]} />
          <window.TweakSelect label="Type" value={tweaks.fonts} onChange={(v) => setT("fonts", v)}
            options={["instrument", "fraunces", "hk"]} />
          <window.TweakToggle label="Dark mode" value={tweaks.dark} onChange={(v) => setT("dark", v)} />
          <window.TweakRadio label="Density" value={tweaks.density} onChange={(v) => setT("density", v)}
            options={["roomy", "compact"]} />
        </window.TweakSection>
        <window.TweakSection label="Project list">
          <window.TweakToggle label="Reorder & hide mode" value={tweaks.reorder} onChange={(v) => setT("reorder", v)} />
          <window.TweakButton label="Reset order & hidden" onClick={() => {
            localStorage.removeItem("tai-order");
            localStorage.removeItem("tai-hidden");
            window.location.reload();
          }} />
        </window.TweakSection>
        <window.TweakSection label="About">
          <div style={{fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-3)", lineHeight: 1.5}}>
            Curated for the <strong style={{color: "var(--accent)"}}>HiWi Frontend Design</strong> position at h_da SecureBot.
            Click any project to open its case study. Press <kbd style={{padding: "1px 5px", border: "1px solid var(--rule)", borderRadius: 3}}>Esc</kbd> to close.
          </div>
        </window.TweakSection>
      </window.TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
