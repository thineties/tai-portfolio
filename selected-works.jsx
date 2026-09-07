// =================== Selected Works Section ===================
const SW_PROJECTS = [
{
  id: 'tropfin',
  logo: 'assets/logo-tropfin.png',
  hero: 'assets/tropfin-hero.png',
  gallery: ['assets/tropfin-01.png', 'assets/tropfin-07.png', 'assets/tropfin-09.png', 'assets/tropfin-10.png', 'assets/tropfin-08.png', 'assets/tropfin-11.png', 'assets/tropfin-06.png', 'assets/tropfin-05.png', 'assets/tropfin-12.png'],
  num: '01',
  title: 'Tropfin',
  kicker: 'Product — Design Systems & Platform UI',
  year: '2022 — 2025',
  type: 'Product',
  awards: ['-'],
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
  logo: 'assets/logo-vekin.png',
  hero: 'assets/carbon-wallet-hero.png',
  gallery: ['assets/vekin-01.jpg', 'assets/vekin-02.jpg', 'assets/vekin-03.jpg', 'assets/vekin-04.jpg', 'assets/vekin-05.jpg', 'assets/vekin-06.jpg', 'assets/vekin-07.jpg', 'assets/vekin-08.jpg', 'assets/vekin-09.jpg', 'assets/vekin-10.jpg', 'assets/vekin-11.jpg', 'assets/vekin-12.jpg', 'assets/vekin-13.jpg', 'assets/vekin-14.jpg', 'assets/vekin-15.jpg', 'assets/vekin-16.jpg'],
  gallery2: ['assets/carbon-wallet-01.png', 'assets/carbon-wallet-02.png', 'assets/carbon-wallet-03.png', 'assets/carbon-wallet-04.png', 'assets/carbon-wallet-05.png'],
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
  hero: 'assets/wavering-hero.avif',
  gallery: ['assets/wavering-03.avif', 'assets/wavering-06.avif', 'assets/wavering-01.avif', 'assets/wavering-02.avif', 'assets/wavering-04.avif', 'assets/wavering-05.avif', 'assets/wavering-07.avif', 'assets/wavering-08.avif'],
  galleryInline: true,
  footer: 'assets/wavering-footer.avif',
  footerGallery: ['assets/wavering-cs-01.jpg', 'assets/wavering-cs-02.jpg', 'assets/wavering-cs-03.jpg', 'assets/wavering-cs-04.jpg', 'assets/wavering-cs-05.jpg', 'assets/wavering-cs-06.jpg', 'assets/wavering-cs-07.jpg', 'assets/wavering-cs-08.jpg', 'assets/wavering-cs-09.jpg'],
  videoAlbum: [
    { src: 'https://video.wixstatic.com/video/f86e21_d7924c2bc8624923bbe8149dd7c7c0a2/720p/mp4/file.mp4', label: 'Main film' },
    { src: 'assets/wavering-teaser-02.mp4', label: 'Teaser', blob: true }
  ],
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
  hero: 'assets/little-bobby-hero.avif',
  gallery: ['assets/little-bobby-01.avif', 'assets/little-bobby-02.avif'],
  galleryInline: true,
  midImage: 'assets/little-bobby-03.avif',
  youtubeInline: 'https://www.youtube.com/embed/oCaVHah2tL8?si=U-ehYnVDKjKg-jO5',
  youtube: 'https://www.youtube.com/embed/QYYQum8mVUQ?si=9b8BPCkFclquBVee',
  footer: 'assets/little-bobby-footer.avif',
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
  logo: 'assets/logo-gistda.png',
  hero: 'assets/gistda-hero.jpg',
  heroGallery: ['assets/gistda-hero.jpg', 'assets/gistda-hero-02.png', 'assets/gistda-hero-03.png', 'assets/gistda-hero-04.png', 'assets/gistda-hero-05.jpg', 'assets/gistda-hero-06.jpg', 'assets/gistda-hero-07.jpg', 'assets/gistda-hero-08.jpg', 'assets/gistda-hero-09.jpg', 'assets/gistda-hero-10.png', 'assets/gistda-hero-11.png', 'assets/gistda-hero-12.jpg', 'assets/gistda-hero-13.jpg', 'assets/gistda-hero-14.jpg'],
  gallery: ['assets/gistda-wps-01.png', 'assets/gistda-wps-02.jpg'],
  galleryInline: true,
  midImage: 'assets/gistda-flow.jpg',
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
  logo: 'assets/logo-undp.webp',
  hero: 'assets/my-seoul-ceremony.jpeg',
  footer: 'assets/my-seoul-footer.jpg',
  gallery: ['assets/my-seoul-01.jpg', 'assets/my-seoul-02.jpg', 'assets/my-seoul-03.jpg', 'assets/my-seoul-04.jpg', 'assets/my-seoul-05.jpg', 'assets/my-seoul-06.jpg', 'assets/my-seoul-07.jpg', 'assets/my-seoul-08.jpg', 'assets/my-seoul-09.jpg', 'assets/my-seoul-10.jpg', 'assets/my-seoul-11.jpg'],
  galleryInline: true,
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
  id: 'while-it-lasts',
  logo: 'assets/logo-hda.png',
  hero: 'assets/wil-cover.jpg',
  heroGallery: ['assets/wil-cover.jpg', 'assets/wil-01.jpg', 'assets/wil-02.jpg', 'assets/wil-03.jpg', 'assets/wil-04.jpg', 'assets/wil-05.jpg', 'assets/wil-06.jpg'],
  youtubeBody: 'https://www.youtube.com/embed/OrEaBnIldkQ',
  afterOutcomeImage: 'assets/wil-ori.png',
  download: { href: 'assets/While It Lasts Presentation.pdf', label: 'Download presentation (PDF)' },
  youtubeInline: 'https://www.youtube.com/embed/lscYvCT8pIc',
  footer: 'assets/wil-sticker.png',
  num: '07',
  title: 'While It Lasts',
  kicker: 'Immersive Labyrinth Experience — Alive Festival · Master\'s Group Project · Team of 5',
  year: '2026',
  type: 'Installation',
  awards: ['Alive Festival · Dieburg Media Campus, h_da'],
  summary: 'In death, rebirth awaits. Visitors follow Ori, the last survivor of an unknown species, through a cave system on the planet Kharos-9 — earning its trust, feeding it, and accompanying it into death and beyond.',
  role: 'Crystal fabrication · Website & Cave Wall · Unreal environment',
  context: 'The brief: build a festival experience that makes participants feel truly alive. Our team of five — from Russia, Mexico, Namibia, Germany and Thailand — chose the Labyrinth format, staged in the Blue Salon of the Dieburg Media Campus mensa.',
  problem: 'A labyrinth is easy to walk through and forget. We needed a clear emotional arc with a memorable climax, and to turn visitors from passive observers into participants who care about what happens to a creature they met minutes ago.',
  approach: 'Ori was designed for instant empathy — huge eyes, oversized head, a translucent deep-sea body lit from within — modelled in Maya and Houdini and placed in a cave built in Unreal Engine. Physical crystals with copper-tape touch sensors let visitors feed Ori and drive the story. I fabricated 24 crystal pieces and built the companion website with its Cave Wall, where visitors typed what makes them feel alive and read each other\'s answers, stored via Firebase.',
  outcome: 'Shown live at the Alive Festival on 24 July, with a social teaser, an experience trailer and full documentation. The Cave Wall kept collecting answers throughout the run — and one pulled-out crystal taught us why fail-safes matter.',
  toolkit: ['Unreal Engine', 'Autodesk Maya', 'SideFX Houdini', 'Firebase', 'Arduino', 'Figma']
},
{
  id: 'mcd-uniform',
  logo: 'assets/logo-mcd.png',
  hero: 'assets/mcd-hero.png',
  gallery: ['assets/mcd-01.jpg', 'assets/mcd-02.jpg', 'assets/mcd-03.jpg', 'assets/mcd-04.jpg', 'assets/mcd-05.jpg'],
  galleryInline: true,
  num: '08',
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
  hero: 'assets/scb-hero.jpg',
  gallery: ['assets/scb-01.jpg', 'assets/scb-02.jpg', 'assets/scb-03.jpg', 'assets/scb-04.jpg', 'assets/scb-05.jpg', 'assets/scb-06.jpg', 'assets/scb-07.jpg', 'assets/scb-08.jpg'],
  galleryInline: true,
  videos: ['assets/scb-video-01.mp4', 'assets/scb-video-02.mp4'],
  num: '09',
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
  logo: 'assets/logo-grab.png',
  hero: 'assets/grab-hero.png',
  footer: 'assets/grab-footer.png',
  num: '10',
  title: 'GrabFood — M-size Campaign',
  kicker: 'Motion · In-app Advertising — Grab, Southeast Asia\'s No. 1 Super App',
  year: '2022',
  type: 'Graphic & Motion',
  awards: [],
  summary: 'A two-week in-app campaign for GrabFood Thailand. Lead motion designer on the M-size project at Rocketeer.',
  highlight: 'Southeast Asia\'s No. 1 Super App',
  role: 'Lead Motion Designer',
  context: 'Grab is Southeast Asia\'s leading super app, and GrabFood is its food-delivery arm. This in-app advertising campaign for GrabFood Thailand was produced at Rocketeer: two-week turnaround, multiple ad surfaces across the GrabFood app and partner channels.',
  problem: 'The M-size offering had to land fast inside an app already crowded with promos. Static creative wasn\'t going to break through the feed.',
  approach: 'Designed a kinetic identity tuned to GrabFood\'s brand kit. Built a motion master that scaled to home banner, story, in-feed card, and out-of-app social.',
  outcome: 'Shipped on schedule across every required surface. Master cut reused for follow-on campaigns.',
  toolkit: ['After Effects', 'Figma', 'Premiere']
},
{
  id: 'gmm-grammy',
  hero: 'assets/gmm-hero.png',
  videoAboveGallery: 'https://video.wixstatic.com/video/f86e21_35488ec0e8e3450e9d1be96906f0b713/1080p/mp4/file.mp4',
  gallery: ['assets/gmm-06.avif', 'assets/gmm-01.avif', 'assets/gmm-02.avif', 'assets/gmm-03.avif', 'assets/gmm-04.avif', 'assets/gmm-05.avif', 'assets/gmm-07.avif', 'assets/gmm-08.avif', 'assets/gmm-09.avif', 'assets/gmm-10.avif', 'assets/gmm-11.avif'],
  galleryInline: true,
  gallery2: ['assets/gmm-b-02.avif', 'assets/gmm-b-01.avif', 'assets/gmm-b-03.avif', 'assets/gmm-b-04.avif', 'assets/gmm-b-05.avif', 'assets/gmm-b-06.avif'],
  videoAboveGallery2: 'https://video.wixstatic.com/video/f86e21_156a9da7272845fc9b3953c7c26a155c/1080p/mp4/file.mp4',
  videoAboveGallery3: 'https://video.wixstatic.com/video/f86e21_7d31e87e23934e2e960e0fa0a276e3e2/1080p/mp4/file.mp4',
  gallery3: [{ video: 'assets/gmm-chang.mp4' }, 'assets/gmm-c-01.avif', 'assets/gmm-c-02.avif', 'assets/gmm-c-03.avif', 'assets/gmm-c-04.avif', 'assets/gmm-c-05.avif'],
  videoAboveGallery2: 'https://video.wixstatic.com/video/f86e21_156a9da7272845fc9b3953c7c26a155c/1080p/mp4/file.mp4',
  num: '11',
  title: 'GMM Grammy — Music Campaigns',
  kicker: 'Creative Design · Content Promote — Creative Designer',
  year: '2019',
  type: 'Motion',
  awards: [],
  summary: 'Concert posters, single launches and social campaigns for GMM Grammy — Thailand\'s largest music label.',
  highlight: 'Thailand\'s No. 1 Entertainment Company',
  role: 'Creative Designer',
  context: 'GMM Grammy is Thailand\'s largest entertainment company — the country\'s biggest music label and media conglomerate, spanning recorded music, TV, film and live shows since 1983. In-house creative at Genie Records supporting concert teasers, single launches, and social campaigns across artist rosters and TV editorial.',
  problem: 'Weekly drumbeat of releases with no shared template debt — recycling cues had to feel intentional, not lazy.',
  approach: 'Built a kinetic type kit and a small library of transition stings tunable per genre. Iterated against the show calendar, not the brand book.',
  outcome: 'Eight concerts and twenty-plus TV cut-downs delivered without a missed broadcast.',
  toolkit: ['After Effects', 'Premiere', 'Photoshop', 'Illustrator']
},
{
  id: 'astroscopeth',
  hero: 'assets/astroscopeth-hero.png',
  bottomGif: 'assets/daily-software.gif',
  heroLink: 'https://www.tiktok.com/@astroscopeth',
  num: '12',
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
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24, flexDirection: project.logoLeft ? 'row-reverse' : 'row' }}>
          <h2 style={{
            fontFamily: 'var(--sw-serif)', fontWeight: 400,
            fontSize: 'clamp(40px, 6.5vw, 80px)', lineHeight: 1, letterSpacing: '-0.015em',
            color: 'var(--sw-ink)', margin: 0
          }}>{project.title}</h2>
          {project.logo && <img src={project.logo} alt={`${project.title} logo`} style={{ height: 'clamp(40px, 5vw, 64px)', width: 'auto', flexShrink: 0, objectFit: 'contain' }} />}
          </div>
          <div style={{
            marginTop: 14, fontFamily: 'var(--sw-mono)', fontSize: 11,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--sw-accent)'
          }}>{project.kicker}</div>

          {project.heroGallery ?
          <div style={{ marginTop: 40 }}><DrawerCarousel images={project.heroGallery} title={project.title} /></div> :
          project.hero ?
          (project.heroLink ?
          <a href={project.heroLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: 40 }}><img src={project.hero} alt={`${project.title} hero`} style={{ width: '100%', height: 'auto', display: 'block', border: '1px solid var(--sw-rule)' }} /><span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 10, fontFamily: 'var(--sw-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--sw-ink-2)', textDecoration: 'underline', textUnderlineOffset: 3 }}>{project.heroLink.replace(/^https?:\/\/(www\.)?/, '')} ↗</span></a> :
          <img src={project.hero} alt={`${project.title} hero`} style={{ marginTop: 40, width: '100%', height: 'auto', display: 'block', border: '1px solid var(--sw-rule)' }} />) :
          <div style={{
            marginTop: 40, aspectRatio: '16 / 9', width: '100%',
            border: '1px solid var(--sw-rule)',
            backgroundImage: 'repeating-linear-gradient(135deg, transparent 0, transparent 14px, rgba(26,22,20,0.06) 14px, rgba(26,22,20,0.06) 15px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ fontFamily: 'var(--sw-mono)', fontSize: 11, color: 'var(--sw-ink-3)' }}>
              [ {project.title} — hero image ]
            </span>
          </div>}

          {project.video && <video src={project.video} controls playsInline preload="metadata" style={{ marginTop: 24, width: '100%', display: 'block', border: '1px solid var(--sw-rule)', background: '#000' }}></video>}
          {project.videoAlbum && <VideoAlbum items={project.videoAlbum} title={project.title} />}

          {project.youtube && <div style={{ marginTop: 24, aspectRatio: '16 / 9', width: '100%', border: '1px solid var(--sw-rule)', background: '#000' }}><iframe src={project.youtube} title={`${project.title} video`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ width: '100%', height: '100%', border: 0, display: 'block' }}></iframe></div>}

          {project.gallery && project.gallery.length > 0 && !project.galleryInline && <DrawerCarousel images={project.gallery} title={project.title} />}

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
              {project.videoAboveGallery && <video src={project.videoAboveGallery} controls playsInline preload="metadata" style={{ marginBottom: 32, width: '100%', aspectRatio: '16 / 9', display: 'block', border: '1px solid var(--sw-rule)', background: '#000' }}></video>}
              {project.galleryInline && project.gallery && <div style={{ marginBottom: 32 }}><DrawerCarousel images={project.gallery} title={project.title} /></div>}
              <Section title="Problem">{project.problem}</Section>
              {project.videoAboveGallery2 && <video src={project.videoAboveGallery2} controls playsInline preload="metadata" style={{ marginBottom: 32, width: '100%', aspectRatio: '16 / 9', display: 'block', border: '1px solid var(--sw-rule)', background: '#000' }}></video>}
              {project.gallery2 && <div style={{ marginBottom: 32 }}><DrawerCarousel images={project.gallery2} title={project.title} /></div>}
              {project.videos && <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>{project.videos.map((v, i) => <BlobVideo key={v} src={v} />)}</div>}
              {project.youtubeBody && <div style={{ marginBottom: 32, aspectRatio: '16 / 9', width: '100%', border: '1px solid var(--sw-rule)', background: '#000' }}><iframe src={project.youtubeBody} title={`${project.title} teaser`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ width: '100%', height: '100%', border: 0, display: 'block' }}></iframe></div>}
              {project.midImage2 && <img src={project.midImage2} alt={`${project.title} detail`} style={{ marginBottom: 32, width: '100%', height: 'auto', display: 'block', border: '1px solid var(--sw-rule)' }} />}
              {project.midImage && <img src={project.midImage} alt={`${project.title} detail`} style={{ marginBottom: 32, width: '100%', height: 'auto', display: 'block', border: '1px solid var(--sw-rule)' }} />}
              <Section title="Approach">{project.approach}</Section>
              {project.videoAboveGallery3 && <video src={project.videoAboveGallery3} controls playsInline preload="metadata" style={{ marginBottom: 32, width: '100%', aspectRatio: '16 / 9', display: 'block', border: '1px solid var(--sw-rule)', background: '#000' }}></video>}
              {project.gallery3 && <div style={{ marginBottom: 32 }}><DrawerCarousel images={project.gallery3} title={project.title} /></div>}
              {project.footer && <img src={project.footer} alt={`${project.title} footer`} style={{ marginBottom: 32, width: '100%', height: 'auto', display: 'block', border: '1px solid var(--sw-rule)' }} />}
              <Section title="Outcome">{project.outcome}</Section>
              {project.afterOutcomeImage && <img src={project.afterOutcomeImage} alt={`${project.title} detail`} style={{ marginBottom: 32, width: '100%', height: 'auto', display: 'block', border: '1px solid var(--sw-rule)' }} />}
              {project.download && <a href={project.download.href} download className="sw-download" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 22px', border: '1px solid var(--sw-ink, #1a1614)', color: 'var(--sw-ink, #1a1614)', textDecoration: 'none', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}><span>{project.download.label}</span><span aria-hidden="true">↓</span></a>}
            </div>
          </div>
          {project.youtubeInline && <div style={{ marginTop: 48, aspectRatio: '16 / 9', width: '100%', border: '1px solid var(--sw-rule)', background: '#000' }}><iframe src={project.youtubeInline} title={`${project.title} video 2`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ width: '100%', height: '100%', border: 0, display: 'block' }}></iframe></div>}
          {project.footerGallery && <div style={{ marginTop: 8 }}><DrawerCarousel images={project.footerGallery} title={project.title} /></div>}
          {project.bottomGif && <a href={project.heroLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginTop: 48, maxWidth: 420 }}><img src={project.bottomGif} alt={`${project.title} daily content`} style={{ width: '100%', height: 'auto', display: 'block', border: '1px solid var(--sw-rule)' }} /><span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 10, fontFamily: 'var(--sw-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--sw-ink-2)', textDecoration: 'underline', textUnderlineOffset: 3 }}>{project.heroLink.replace(/^https?:\/\/(www\.)?/, '')} ↗</span></a>}
        </div>
      </div>
    </div>);

}

function DrawerCarousel({ images, title }) {
  const [idx, setIdx] = React.useState(0);
  const [drag, setDrag] = React.useState(null);
  const wrapRef = React.useRef(null);
  const thumbsRef = React.useRef(null);
  const n = images.length;
  const go = (i) => setIdx(Math.max(0, Math.min(n - 1, i)));
  React.useEffect(() => {
    const el = thumbsRef.current; if (!el) return;
    const t = el.children[idx]; if (!t) return;
    el.scrollTo({ left: t.offsetLeft - el.clientWidth / 2 + t.offsetWidth / 2, behavior: 'smooth' });
  }, [idx]);
  React.useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const onKey = (e) => {if (e.key === 'ArrowLeft') go(idx - 1);if (e.key === 'ArrowRight') go(idx + 1);};
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [idx, n]);
  const onDown = (e) => {if (e.button !== 0 || e.target.closest('button')) return;setDrag({ x0: e.clientX, dx: 0, t: Date.now() });e.currentTarget.setPointerCapture(e.pointerId);};
  const onMove = (e) => {if (drag) setDrag({ ...drag, dx: e.clientX - drag.x0 });};
  const onUp = () => {
    if (!drag) return;
    const w = wrapRef.current ? wrapRef.current.clientWidth : 1;
    const v = drag.dx / Math.max(1, Date.now() - drag.t);
    if (Math.abs(v) > 0.5 || Math.abs(drag.dx) > w * 0.25) go(drag.dx > 0 ? idx - 1 : idx + 1);
    setDrag(null);
  };
  const offset = drag ? drag.dx : 0;
  const arrow = (dir, disabled) =>
    <button type="button" aria-label={dir < 0 ? 'Previous' : 'Next'} disabled={disabled} onPointerDown={(e) => e.stopPropagation()} onClick={(e) => {e.stopPropagation();go(idx + dir);}} style={{
      position: 'absolute', top: '50%', [dir < 0 ? 'left' : 'right']: 14, transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: 999, border: 0,
      background: 'rgba(250,247,242,0.92)', color: 'var(--sw-ink)', boxShadow: '0 8px 24px rgba(26,22,20,0.25)', cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.35 : 0.85, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform .2s, opacity .2s', zIndex: 2
    }} onMouseEnter={(e) => {if (!disabled) {e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';e.currentTarget.style.opacity = 1;}}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(-50%)';e.currentTarget.style.opacity = disabled ? 0.35 : 0.85;}}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points={dir < 0 ? '15 18 9 12 15 6' : '9 18 15 12 9 6'}></polyline></svg>
    </button>;
  return (
    <div ref={wrapRef} tabIndex={0} style={{ marginTop: 40, outline: 'none' }}>
      <div onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
        style={{ position: 'relative', overflow: 'hidden', borderRadius: 12, background: 'rgba(26,22,20,0.04)', border: '1px solid var(--sw-rule)', aspectRatio: '16 / 10', cursor: drag ? 'grabbing' : 'grab', touchAction: 'pan-y', userSelect: 'none' }}>
        <div style={{ display: 'flex', height: '100%', transform: `translateX(calc(${-idx * 100}% + ${offset}px))`, transition: drag ? 'none' : 'transform .55s cubic-bezier(.22,1,.36,1)' }}>
          {images.map((src, i) =>
          <div key={i} style={{ flex: '0 0 100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {src && src.video ? <SlideVideo src={src.video} active={i === idx} /> :
            <img src={src} alt={`${title} screen ${i + 1}`} draggable={false} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block', pointerEvents: 'none' }} />}
          </div>)}
        </div>
        {arrow(-1, idx === 0)}
        {arrow(1, idx === n - 1)}
        <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', background: 'rgba(26,22,20,0.7)', color: '#f3ece7', fontFamily: 'var(--sw-mono)', fontSize: 11, letterSpacing: '0.1em', padding: '5px 12px', borderRadius: 999, fontVariantNumeric: 'tabular-nums' }}>{String(idx + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</div>
      </div>
      <div ref={thumbsRef} className="sw-gallery" style={{ display: 'flex', gap: 3, marginTop: 10, overflowX: 'auto', scrollbarWidth: 'none', padding: '2px 0' }}>
        {images.map((src, i) =>
        <button key={i} type="button" onClick={() => go(i)} aria-label={`Go to screen ${i + 1}`} style={{
          flex: '0 0 auto', width: i === idx ? 112 : 36, height: 68, margin: i === idx ? '0 3px' : 0, padding: 0, border: 0, borderRadius: 6, overflow: 'hidden', cursor: 'pointer',
          background: 'rgba(26,22,20,0.06)', opacity: i === idx ? 1 : 0.6, transition: 'width .3s ease-out, margin .3s ease-out, opacity .3s', outline: i === idx ? '1px solid var(--sw-ink)' : 'none', outlineOffset: -1
        }}>
          {src && src.video ? <span style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', color: '#fff' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg></span> :
          <img src={src} alt="" draggable={false} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }} />}
        </button>)}
      </div>
    </div>);
}

const SW_PREVIEW = {
  'tropfin': 'assets/tropfin-hero.png',
  'carbon-wallet': 'assets/carbon-wallet.jpg',
  'wavering': 'assets/wavering.jpg',
  'little-bobby': 'assets/little-bobby-shower.gif',
  'gistda-suvarnabhumi': 'assets/gistda.jpg',
  'my-seoul': 'assets/my-seoul.jpg',
  'while-it-lasts': 'assets/wil-preview.png',
  'mcd-uniform': 'assets/mcd-polo.png',
  'scb-elearning': 'assets/scb-card.gif',
  'grabfood-msize': 'assets/grabfood.jpg',
  'gmm-grammy': 'assets/gmm-card.png',
  'astroscopeth': 'assets/daily-software.gif'
};

function VideoAlbum({ items, title }) {
  const [idx, setIdx] = React.useState(0);
  const [urls, setUrls] = React.useState({});
  React.useEffect(() => {
    let alive = true; const made = [];
    items.forEach((it, i) => {
      if (!it.blob) return;
      fetch(it.src).then(r => r.blob()).then(b => { if (!alive) return; const u = URL.createObjectURL(b); made.push(u); setUrls(p => ({ ...p, [i]: u })); }).catch(() => {});
    });
    return () => { alive = false; made.forEach(URL.revokeObjectURL); };
  }, [items]);
  const cur = items[idx];
  const src = cur.blob ? urls[idx] : cur.src;
  return (
    <div style={{ marginTop: 24 }}>
      <video key={idx} src={src || undefined} controls playsInline preload="metadata" style={{ width: '100%', aspectRatio: '16 / 9', display: 'block', border: '1px solid var(--sw-rule)', background: '#000' }}></video>
      <div style={{ display: 'flex', gap: 10, marginTop: 10, overflowX: 'auto', scrollbarWidth: 'none', padding: '2px 0' }}>
        {items.map((it, i) =>
        <button key={i} type="button" onClick={() => setIdx(i)} aria-label={`${title} video ${i + 1}`} style={{ flex: '0 0 auto', width: 168, textAlign: 'left', padding: 0, border: 0, background: 'transparent', cursor: 'pointer', opacity: i === idx ? 1 : 0.55, transition: 'opacity .25s' }}>
          <div style={{ position: 'relative', aspectRatio: '16 / 9', background: '#000', border: i === idx ? '1px solid var(--sw-ink)' : '1px solid var(--sw-rule)', overflow: 'hidden' }}>
            <video src={(it.blob ? urls[i] : it.src) || undefined} muted playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }}></video>
            <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg></span>
          </div>
          <div style={{ marginTop: 6, fontFamily: 'var(--sw-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--sw-ink-2)' }}>{String(i + 1).padStart(2, '0')} · {it.label}</div>
        </button>)}
      </div>
    </div>);
}

function SlideVideo({ src, active }) {
  const [url, setUrl] = React.useState(/^https?:/.test(src) ? src : null);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (/^https?:/.test(src)) return;
    let u; let alive = true;
    fetch(src).then(r => r.blob()).then(b => { if (!alive) return; u = URL.createObjectURL(b); setUrl(u); }).catch(() => {});
    return () => { alive = false; if (u) URL.revokeObjectURL(u); };
  }, [src]);
  React.useEffect(() => { if (!active && ref.current) ref.current.pause(); }, [active]);
  return <video ref={ref} src={url || undefined} controls playsInline preload="metadata" onPointerDown={(e) => e.stopPropagation()} style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%', objectFit: 'contain', display: 'block', background: '#000' }}></video>;
}

function BlobVideo({ src }) {
  const [url, setUrl] = React.useState(null);
  React.useEffect(() => {
    let u; let alive = true;
    fetch(src).then(r => r.blob()).then(b => { if (!alive) return; u = URL.createObjectURL(b); setUrl(u); }).catch(() => {});
    return () => { alive = false; if (u) URL.revokeObjectURL(u); };
  }, [src]);
  return <video src={url || undefined} controls playsInline preload="metadata" style={{ width: '100%', aspectRatio: '16 / 9', display: 'block', border: '1px solid var(--sw-rule)', background: '#000' }}></video>;
}

function SwShowcase({ projects, onOpen }) {
  const ref = React.useRef(null);
  const [hovered, setHovered] = React.useState(null);
  const [touch, setTouch] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(hover: none), (max-width: 800px)');
    const upd = () => setTouch(mq.matches);
    upd(); mq.addEventListener('change', upd);
    return () => mq.removeEventListener('change', upd);
  }, []);
  const target = React.useRef({ x: 0, y: 0 });
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    let raf;
    const tick = () => {
      setPos((p) => {
        const nx = p.x + (target.current.x - p.x) * 0.15, ny = p.y + (target.current.y - p.y) * 0.15;
        return Math.abs(nx - p.x) < 0.05 && Math.abs(ny - p.y) < 0.05 ? p : { x: nx, y: ny };
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    target.current = { x: e.clientX - r.left, y: e.clientY - r.top };
  };
  const on = hovered !== null && !touch;
  return (
    <div ref={ref} onMouseMove={onMove} style={{ position: 'relative' }}>
      {!touch && <div style={{
        position: 'absolute', left: 0, top: 0, zIndex: 5, pointerEvents: 'none',
        width: 300, height: 200, borderRadius: 14, overflow: 'hidden',
        background: '#1a1614', boxShadow: '0 30px 60px -12px rgba(26,22,20,0.35), 0 0 0 1px rgba(26,22,20,0.08)',
        transform: `translate3d(${pos.x + 24}px, ${pos.y - 110}px, 0) scale(${on ? 1 : 0.85})`,
        opacity: on ? 1 : 0,
        transition: 'opacity .3s cubic-bezier(.4,0,.2,1), transform .06s linear'
      }}>
        {projects.map((p, i) =>
        <img key={p.id} src={SW_PREVIEW[p.id]} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          opacity: hovered === i ? 1 : 0, transform: hovered === i ? 'scale(1)' : 'scale(1.1)',
          filter: hovered === i ? 'none' : 'blur(10px)', transition: 'all .5s cubic-bezier(.4,0,.2,1)'
        }} />
        )}
      </div>}
      {projects.map((p, i) => {
        const h = hovered === i;
        return (
          <a key={p.id} href="#" onClick={(e) => {e.preventDefault();onOpen(p);}}
            onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
            className="sw-row" style={{ display: 'block', textDecoration: 'none', color: 'inherit', position: 'relative', padding: '22px 0', borderTop: '1px solid var(--sw-rule)' }}>
            <div style={{
              position: 'absolute', inset: 0, margin: '0 -16px', borderRadius: 10, background: 'rgba(26,22,20,0.04)',
              opacity: h ? 1 : 0, transform: h ? 'scale(1)' : 'scale(.97)', transition: 'all .3s cubic-bezier(.4,0,.2,1)'
            }}></div>
            <div className="sw-row-inner" style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24 }}>
              {touch && <img src={SW_PREVIEW[p.id]} alt="" className="sw-row-thumb" />}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <h3 style={{ fontFamily: 'var(--sw-serif)', fontWeight: 400, fontSize: 'clamp(24px, 2.4vw, 32px)', lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--sw-ink)', margin: 0 }}>
                    <span style={{ position: 'relative' }}>{p.title}<span style={{ position: 'absolute', left: 0, bottom: -2, height: 1, background: 'var(--sw-ink)', width: h ? '100%' : 0, transition: 'width .3s cubic-bezier(.4,0,.2,1)' }}></span></span>
                  </h3>
                  {p.highlight && <span className="sw-row-badge" style={{ display: 'inline-block', padding: '5px 10px', borderRadius: 999, background: 'var(--sw-ink)', color: 'var(--sw-bg, #faf7f2)', fontFamily: 'var(--sw-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1, whiteSpace: 'nowrap' }}>{p.highlight}</span>}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--sw-ink-3)', opacity: h ? 1 : 0, transform: h ? 'translate(0,0)' : 'translate(-8px,8px)', transition: 'all .3s cubic-bezier(.4,0,.2,1)' }}><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
                <p style={{ fontFamily: 'var(--sw-sans)', fontSize: 14, lineHeight: 1.55, margin: '6px 0 0', maxWidth: '80ch', color: h ? 'var(--sw-ink-2)' : 'var(--sw-ink-3)', transition: 'color .3s', textWrap: 'pretty' }}>{p.summary}</p>
              </div>
              <span style={{ fontFamily: 'var(--sw-mono)', fontSize: 11, letterSpacing: '0.08em', color: h ? 'var(--sw-ink-2)' : 'var(--sw-ink-3)', whiteSpace: 'nowrap', paddingTop: 8, transition: 'color .3s', fontVariantNumeric: 'tabular-nums' }}>{p.year}</span>
            </div>
          </a>);
      })}
      <div style={{ borderTop: '1px solid var(--sw-rule)' }}></div>
    </div>);
}

function SelectedWorksSection() {
  const [active, setActive] = React.useState(null);
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
          style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 48, marginBottom: 64, alignItems: 'baseline' }}>
          <div style={{ fontFamily: 'var(--sw-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--sw-ink-3)' }}>SELECTED WORKS · 2019—2025</div>
          <h2 style={{ fontWeight: 400, fontSize: 'clamp(36px, 5.5vw, 72px)', lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--sw-ink)', margin: 0, fontFamily: "\"Instrument Serif\"" }}>
            Work that <em style={{ fontStyle: 'italic' }}>earns</em> a second look<br /><span style={{ color: 'var(--sw-accent)' }}>shipped</span>, signed, alive.
          </h2>
        </div>
        <div className="sw-list">
          <SwShowcase projects={SW_PROJECTS} onOpen={setActive} />
        </div>
      </div>
      {active && <CaseDrawer project={active} onClose={() => setActive(null)} />}
      <style>{`
        .selected-works .sw-row-thumb { width: 88px; height: 64px; object-fit: cover; border-radius: 8px; flex: 0 0 auto; background: #1a1614; }
        @media (max-width: 800px) {
          .selected-works .sw-header { grid-template-columns: 1fr !important; gap: 16px !important; margin-bottom: 40px !important; }
          .selected-works .sw-list { max-width: none !important; }
          .selected-works .sw-row { padding: 18px 0 !important; }
          .selected-works .sw-row-inner { gap: 14px !important; }
          .selected-works .sw-row-inner h3 { font-size: 20px !important; }
          .selected-works .sw-row-inner p { font-size: 13px !important; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
          .selected-works .sw-drawer-body { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 480px) {
          .selected-works .sw-row-thumb { width: 64px; height: 48px; }
          .selected-works .sw-row-inner > span { display: none; }
        }
      `}</style>
    </section>);
}

window.SelectedWorksSection = SelectedWorksSection;