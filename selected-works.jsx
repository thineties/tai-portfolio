// =================== Selected Works Section ===================
const SW_PROJECTS = [
{
  id: 'tropfin',
  num: '01',
  title: 'Tropfin',
  kicker: 'Product — Design Systems & Platform UI',
  year: '2022 — 2025',
  type: 'Product',
  awards: ['Internal Award'],
  summary: 'A B2B trading platform connecting tropical-fruit factories and buyers across Europe and Asia. Three years owning the design system, marketing site, and platform UI end-to-end.',
  role: 'Senior Product Designer',
  context: 'Tropfin matches factories in Southeast Asia with buyers across the EU. Inventory, pricing, and shipping all live in a single console used by ops teams across six time zones.',
  problem: 'The first iteration was a spreadsheet with a paint job — every release shipped misaligned tokens, ad-hoc components, and unscalable layouts. Buyers refused to log in twice.',
  approach: 'Built a token-first system (color, type, motion, density) and a 60-component library. Re-platformed marketing on the same primitives. Documented every pattern.',
  outcome: 'Onboarding time fell 64%. Time-to-quote dropped from 9 minutes to 2. Two engineering teams now ship UI without design review.',
  toolkit: ['Figma', 'Tokens Studio', 'Storybook', 'React']
},
{
  id: 'carbon-wallet',
  num: '02',
  title: 'Carbon Wallet',
  kicker: 'Mobile Application — UX/UI Designer · Team of 3',
  year: '2021',
  type: 'Product',
  awards: ['ASEAN Energy Awards 2021 — Winner', 'depa Smart City Accelerator 2021'],
  summary: 'A behavioural app that turns everyday low-carbon choices — recycling, transit, energy use — into a savings wallet you can actually watch grow.',
  role: 'UX/UI Designer',
  context: 'A behaviour-change app aimed at urban commuters, building a low-carbon habit loop one trip at a time. Built in a team of three across research, design, and engineering.',
  problem: 'Climate apps either preach or gamify badly. Neither moves the daily decision — bike vs. car, recycle vs. trash — at the moment it matters.',
  approach: 'Treated CO₂ savings as currency. Designed a wallet metaphor: every low-carbon action drops measurable value into a balance you can watch grow, redeem, and share.',
  outcome: 'ASEAN Energy Awards 2021 winner. depa Smart City Accelerator 2021 cohort.',
  toolkit: ['Figma', 'Protopie', 'After Effects']
},
{
  id: 'wavering',
  num: '03',
  title: 'Wavering',
  kicker: 'Interactive Game · Senior Project — Product Owner, Designer, Developer',
  year: '2020',
  type: 'Self-initiated',
  awards: [],
  summary: 'An interactive mobile game about bipolar disorder. You play a small ship across moods — happiness, sadness, mania, depression — each one rewriting the physics of the sea.',
  role: 'Product Owner, Designer, Developer',
  context: 'Senior thesis project translating lived experience with bipolar disorder into mechanics: not a metaphor in copy, but a metaphor in physics.',
  problem: 'Mental-health content tends to land as either clinical or sentimental. Neither lets you feel the disorientation of a mood swing the way the people inside one do.',
  approach: 'Built four ocean modes — happy, sad, manic, depressive — each with its own wave physics, control responsiveness, and palette. Switching moods changes the game under the player\'s thumbs.',
  outcome: 'Shipped as a senior project. Used in classroom discussions on game design as empathy infrastructure.',
  toolkit: ['Unreal Engine 4', 'C#', 'Figma', 'Procreate']
},
{
  id: 'little-bobby',
  num: '04',
  title: 'Little Bobby',
  kicker: 'Pre-school Animation — Team Lead · Animator · Team of 4',
  year: '2020',
  type: 'Animation',
  awards: ['1st Runner-up — Pre-school Animation'],
  summary: 'A short animated series about Bobby, a small star preparing for an adventure to the Candy Galaxy. Designed to teach pre-schoolers everyday self-care.',
  role: 'Team Lead · Animator',
  context: 'Team-of-four production aimed at pre-school audiences — short episodes built around one self-care habit each (brushing teeth, washing hands, sharing).',
  problem: 'How to land a self-care lesson in two minutes without lecturing — and keep four-year-olds rewatching.',
  approach: 'Built a tiny stable of repeating characters and a soft candy-galaxy world. Each episode followed the same emotional shape: Bobby tries, Bobby fumbles, Bobby learns. Habit modeled, not stated.',
  outcome: '1st Runner-up — Pre-school Animation. Series used as classroom material in early-childhood pilots.',
  toolkit: ['After Effects', 'Illustrator', 'Procreate', 'Premiere']
},
{
  id: 'gistda-suvarnabhumi',
  num: '05',
  title: 'Gistda Suvarnabhumi',
  kicker: 'Cultural Heritage Platform — UI Designer · Team of 3',
  year: '2024',
  type: 'Product',
  awards: [],
  summary: 'Web platform for Thailand\'s Geo-Informatics agency mapping the ASEAN co-cultural heritage of the Suvarnabhumi region — historical sites, civilisations, ancient trade routes.',
  role: 'UI Designer',
  context: 'Built for Gistda (Geo-Informatics and Space Technology Development Agency) as a public-facing window into the Suvarnabhumi region\'s shared heritage across modern-day Thailand, Cambodia, Laos, Myanmar, and Vietnam.',
  problem: 'Decades of research, satellite data, and field surveys living in PDFs no one outside the agency reads. The story of a shared region was buried in dataset silos.',
  approach: 'Designed a map-led browse pattern: time-based filters across millennia, layer toggles for civilisations and trade routes, and case-card detail views that pulled images, citations, and field notes into one read.',
  outcome: 'Shipped as the agency\'s flagship public platform. Used in classroom and museum partnerships across the region.',
  toolkit: ['Figma', 'Mapbox', 'Notion', 'Photoshop']
},
{
  id: 'my-seoul',
  num: '06',
  title: 'My Seoul',
  kicker: 'SDG-aligned App Feature — UI Designer · Intl. Team of 4',
  year: '2019',
  type: 'Product',
  awards: ['UN Youth Program · UNDP Asia-Pacific'],
  summary: 'A social-development module for an existing Seoul city app, designed during a UN-supported youth program at Hanyang University.',
  role: 'UI Designer',
  context: 'Built during a UN Youth Program hosted at Hanyang University with an international team of four — concept-to-prototype in two weeks, framed around the UN Sustainable Development Goals.',
  problem: 'The existing Seoul city app served tourists and residents but had no surface for civic-action behaviour: volunteering, community events, neighbourhood reporting.',
  approach: 'Designed a "social development" module that grafted onto the existing app — same shell, new feature surface. Mapped SDG targets to concrete in-app actions citizens could take this week.',
  outcome: 'Prototype presented at the UN Youth Program showcase. Used as a brief reference for follow-on city-app pilots.',
  toolkit: ['Figma', 'Adobe XD', 'Illustrator']
},
{
  id: 'mcd-uniform',
  num: '07',
  title: 'McDonald\'s Uniform System',
  kicker: 'Product Design — Product Designer',
  year: '2021',
  type: 'Brand',
  awards: [],
  summary: 'Uniform design collection for McDonald\'s HQ Thailand — polo shirts, caps, aprons, jackets, shirts — plus sister projects for Delta and Kobelco.',
  role: 'Product Designer',
  context: 'In-house product design for McDonald\'s HQ Thailand: a working-uniform system used across crew, manager, and front-of-house roles, with sister briefs for Delta and Kobelco running in parallel.',
  problem: 'Existing uniform pieces were inconsistent across role and season — shirts, caps, aprons, jackets all sourced separately, with no shared spec or grading.',
  approach: 'Set a system spec across silhouette, fabric weight, palette, and trim. Designed each piece to read as one family on the floor while still solving role-specific needs (heat, motion, brand visibility).',
  outcome: 'System adopted across HQ Thailand. Sister briefs for Delta and Kobelco shipped using the same spec scaffolding.',
  toolkit: ['Illustrator', 'Photoshop', 'CLO 3D']
},
{
  id: 'scb-elearning',
  num: '08',
  title: 'SCB E-Learning',
  kicker: 'Internal Learning Platform — UI Compositor',
  year: '2021',
  type: 'Education',
  awards: [],
  summary: 'An interactive e-learning module for Siam Commercial Bank covering credit policy and process — built to be navigated with a single mouse drag.',
  role: 'UI Compositor',
  context: 'Internal training tool for Siam Commercial Bank staff onboarding into credit operations. Replaced a slide-deck curriculum with a single-screen interactive module.',
  problem: 'Existing training: 200-slide deck, 90 minutes, near-zero retention. Compliance still required everyone to sit through it.',
  approach: 'Compressed the curriculum into one scrollable / draggable canvas. State-machine interactions for branching decisions; inline checks instead of end-of-module quizzes.',
  outcome: 'Module completion time halved. Manager-reported retention up. Adopted as the template for adjacent compliance modules.',
  toolkit: ['Figma', 'Adobe Animate', 'Illustrator']
},
{
  id: 'grabfood-msize',
  num: '09',
  title: 'GrabFood — M-size Campaign',
  kicker: 'Motion · In-app Advertising — Lead Motion Designer',
  year: '2022',
  type: 'Motion',
  awards: [],
  summary: 'A two-week in-app campaign for GrabFood Thailand. Lead motion designer on the M-size project at Rocketeer.',
  role: 'Lead Motion Designer',
  context: 'In-app advertising campaign for GrabFood Thailand, produced at Rocketeer. Two-week turnaround, multiple ad surfaces across the GrabFood app and partner channels.',
  problem: 'The M-size offering had to land fast inside an app already crowded with promos. Static creative wasn\'t going to break through the feed.',
  approach: 'Designed a kinetic identity tuned to GrabFood\'s brand kit. Built a motion master that scaled to home banner, story, in-feed card, and out-of-app social.',
  outcome: 'Shipped on schedule across every required surface. Master cut reused for follow-on campaigns.',
  toolkit: ['After Effects', 'Figma', 'Premiere']
},
{
  id: 'gmm-grammy',
  num: '10',
  title: 'GMM Grammy — Music Campaigns',
  kicker: 'Creative Design · Content Promote — Creative Designer',
  year: '2019',
  type: 'Motion',
  awards: [],
  summary: 'Concert posters, single launches and social campaigns for GMM Grammy — Thailand\'s largest music label.',
  role: 'Creative Designer',
  context: 'In-house creative at GMM Grammy supporting concert teasers, single launches, and social campaigns across artist rosters and TV editorial.',
  problem: 'Weekly drumbeat of releases with no shared template debt — recycling cues had to feel intentional, not lazy.',
  approach: 'Built a kinetic type kit and a small library of transition stings tunable per genre. Iterated against the show calendar, not the brand book.',
  outcome: 'Eight concerts and twenty-plus TV cut-downs delivered without a missed broadcast.',
  toolkit: ['After Effects', 'Premiere', 'Photoshop', 'Illustrator']
},
{
  id: 'astroscopeth',
  num: '11',
  title: '@astroscopeth',
  kicker: 'TikTok · Self-Initiated — Creator · Editor · Researcher',
  year: '2025 — present',
  type: 'Motion',
  awards: [],
  summary: 'A personal experiment in short-form storytelling on TikTok. Three months in, three numbers I keep watching.',
  role: 'Creator · Editor · Researcher',
  context: 'Self-initiated channel running parallel to client work — fast iteration, no committee, daily release cadence.',
  problem: 'How to make repeated-format content stay fresh when the brief is "same thing tomorrow."',
  approach: 'Locked a frame system, varied only the inside: typography studies, color sets, micro-motion. Treated each post as a one-frame poster.',
  outcome: 'Three months in, three numbers I keep watching: reach, save-rate, comments-per-view. The frame system became the visual DNA of subsequent projects.',
  toolkit: ['CapCut', 'After Effects', 'Figma']
}];


function SwTag({ children, accent = false }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px',
      borderRadius: 999, fontFamily: 'var(--sw-mono)', fontSize: 11, letterSpacing: '0.04em',
      color: accent ? '#fff' : 'var(--sw-ink-2)',
      backgroundColor: accent ? 'var(--sw-accent)' : 'transparent',
      border: `1px solid ${accent ? 'var(--sw-accent)' : 'var(--sw-rule)'}`,
      whiteSpace: 'nowrap'
    }}>{children}</span>);

}

function SwArrow() {
  return (
    <svg width="40" height="10" viewBox="0 0 40 10" fill="none" style={{ overflow: 'visible' }}>
      <line x1="0" y1="5" x2="32" y2="5" stroke="currentColor" strokeWidth="1" className="sw-arrow-line" />
      <polyline points="28,1 32,5 28,9" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>);

}

function CaseDrawer({ project, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  if (!project) return null;

  const Section = ({ title, children }) =>
  <div style={{ marginBottom: 36 }}>
      <div style={{
      fontFamily: 'var(--sw-mono)', fontSize: 11, letterSpacing: '0.12em',
      textTransform: 'uppercase', color: 'var(--sw-accent)', marginBottom: 10
    }}>{title}</div>
      <div style={{
      fontFamily: 'var(--sw-serif)', fontSize: 22, lineHeight: 1.4,
      color: 'var(--sw-ink)', textWrap: 'pretty', maxWidth: '60ch'
    }}>{children}</div>
    </div>;


  const MetaRow = ({ label, value }) =>
  <div style={{ padding: '14px 0', borderBottom: '1px solid var(--sw-rule)' }}>
      <div style={{ fontFamily: 'var(--sw-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--sw-ink-3)', marginBottom: 4 }}>{label}</div>
      <div style={{ fontFamily: 'var(--sw-sans)', fontSize: 14, color: 'var(--sw-ink)' }}>{value}</div>
    </div>;


  return (
    <div className="selected-works" style={{ position: 'fixed', inset: 0, zIndex: 100 }}>
      <div
        className="sw-backdrop"
        onClick={onClose}
        style={{
          position: 'absolute', inset: 0, background: 'rgba(26,22,20,0.7)',
          backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)'
        }}>
      </div>
      <div
        className="sw-drawer"
        style={{
          position: 'absolute', top: 0, right: 0, bottom: 0,
          width: 'min(960px, 92vw)', backgroundColor: 'var(--sw-bg)',
          overflowY: 'auto', transform: 'translateX(100%)'
        }}>
        
        <div style={{ padding: 'clamp(40px, 6vw, 80px) clamp(24px, 5vw, 64px) 100px', position: 'relative' }}>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute', top: 24, right: 24, width: 40, height: 40,
              borderRadius: 999, border: '1px solid var(--sw-rule)',
              color: 'var(--sw-ink)', background: 'transparent',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer'
            }}>
            
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div style={{ fontFamily: 'var(--sw-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--sw-ink-3)', marginBottom: 18 }}>
            Case · {project.num} / {project.year}
          </div>
          <h2 style={{
            fontFamily: 'var(--sw-serif)', fontWeight: 400,
            fontSize: 'clamp(40px, 6.5vw, 80px)', lineHeight: 1, letterSpacing: '-0.015em',
            color: 'var(--sw-ink)', margin: 0
          }}>{project.title}</h2>
          <div style={{
            marginTop: 14, fontFamily: 'var(--sw-mono)', fontSize: 11,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--sw-accent)'
          }}>{project.kicker}</div>

          <div style={{
            marginTop: 40, aspectRatio: '16 / 9', width: '100%',
            border: '1px solid var(--sw-rule)',
            backgroundImage: 'repeating-linear-gradient(135deg, transparent 0, transparent 14px, rgba(26,22,20,0.06) 14px, rgba(26,22,20,0.06) 15px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ fontFamily: 'var(--sw-mono)', fontSize: 11, color: 'var(--sw-ink-3)' }}>
              [ {project.title} — hero image ]
            </span>
          </div>

          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '200px 1fr', gap: 56 }} className="sw-drawer-body">
            <div>
              <MetaRow label="Role" value={project.role} />
              <MetaRow label="Type" value={project.type} />
              <MetaRow label="Year" value={project.year} />
              <MetaRow label="Recognition" value={project.awards.length ? project.awards.join(', ') : '—'} />
              <div style={{ padding: '14px 0' }}>
                <div style={{ fontFamily: 'var(--sw-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--sw-ink-3)', marginBottom: 8 }}>Toolkit</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.toolkit.map((t) => <SwTag key={t}>{t}</SwTag>)}
                </div>
              </div>
            </div>
            <div>
              <Section title="Context">{project.context}</Section>
              <Section title="Problem">{project.problem}</Section>
              <Section title="Approach">{project.approach}</Section>
              <Section title="Outcome">{project.outcome}</Section>
            </div>
          </div>
        </div>
      </div>
    </div>);

}

function SwRow({ project, isLast }) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <article
        className="sw-row"
        onClick={() => setOpen(true)}
        style={{
          display: 'grid',
          gridTemplateColumns: '60px 1.1fr 1.4fr',
          gap: 48,
          padding: '28px 0',
          borderTop: '1px solid var(--sw-rule)',
          borderBottom: isLast ? '1px solid var(--sw-rule)' : 'none',
          cursor: 'pointer',
          alignItems: 'start'
        }}>
        
        <div style={{
          fontFamily: 'var(--sw-mono)', fontSize: 11, letterSpacing: '0.08em',
          color: 'var(--sw-ink-3)', paddingTop: 8
        }}>{project.num}</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0 }}>
          <h3 style={{
            fontFamily: 'var(--sw-serif)', fontWeight: 400,
            fontSize: 'clamp(28px, 3.2vw, 44px)', lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--sw-ink)', margin: 0
          }}>{project.title}</h3>
          <div style={{
            fontFamily: 'var(--sw-mono)', fontSize: 11, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--sw-ink-3)'
          }}>{project.kicker}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 4 }}>
            <SwTag>{project.year}</SwTag>
            <SwTag>{project.type}</SwTag>
            {project.awards.map((a) => <SwTag key={a} accent>{`★ ${a}`}</SwTag>)}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, minWidth: 0 }}>
          <p style={{
            fontFamily: 'var(--sw-sans)', fontSize: 15, lineHeight: 1.55,
            color: 'var(--sw-ink-2)', maxWidth: '60ch', margin: 0,
            textWrap: 'pretty'
          }}>{project.summary}</p>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontFamily: 'var(--sw-mono)', fontSize: 11, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--sw-accent)'
          }}>
            Read case study <SwArrow />
          </span>
        </div>
      </article>
      {open && <CaseDrawer project={project} onClose={() => setOpen(false)} />}
    </React.Fragment>);

}

function SelectedWorksSection() {
  return (
    <section
      className="selected-works"
      style={{
        backgroundColor: 'var(--sw-bg)',
        padding: 'clamp(64px, 9vw, 140px) clamp(20px, 5vw, 80px)',
        borderTop: '1px solid var(--sw-rule)'
      }}>
      
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div
          className="sw-header"
          style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: 48,
            marginBottom: 64,
            alignItems: 'baseline'
          }}>
          
          <div style={{
            fontFamily: 'var(--sw-mono)', fontSize: 11, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--sw-ink-3)'
          }}>SELECTED WORKS · 2019—2025</div>
          <h2 style={{
            fontWeight: 400,
            fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1, letterSpacing: '-0.015em',
            color: 'var(--sw-ink)', margin: 0, fontFamily: "\"Instrument Serif\""
          }}>
            Work that <em style={{ fontStyle: 'italic' }}>earns</em> a second look — <span style={{ color: 'var(--sw-accent)' }}>shipped</span>, signed, alive.
          </h2>
        </div>

        <div>
          {SW_PROJECTS.map((p, i) =>
          <SwRow key={p.id} project={p} isLast={i === SW_PROJECTS.length - 1} />
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .selected-works .sw-header { grid-template-columns: 1fr !important; gap: 16px !important; }
          .selected-works .sw-row { grid-template-columns: 40px 1fr !important; gap: 16px !important; }
          .selected-works .sw-row > div:nth-child(3) { grid-column: 2 / -1; padding-left: 0; }
          .selected-works .sw-drawer-body { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>);

}

window.SelectedWorksSection = SelectedWorksSection;