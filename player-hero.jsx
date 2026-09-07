// =================== Player Hero (Section 1) ===================
// Floating tilting video "screen" + momentum project list. Uses SW_PROJECTS from selected-works.jsx.
const PH_ROW = 60, PH_ORANGE = '#ff7a2f', PH_DEEP = '#c25a3c';
const PH_VIDEO = 'https://video.wixstatic.com/video/f86e21_d7924c2bc8624923bbe8149dd7c7c0a2/720p/mp4/file.mp4';
const phClamp = (v, a, b) => Math.min(b, Math.max(a, v));
const phMod = (n, m) => ((n % m) + m) % m;
function phClick(ctx, strength) {
  const now = ctx.currentTime, len = Math.floor(ctx.sampleRate * 0.012), buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
  const src = ctx.createBufferSource(); src.buffer = buf;
  const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 4200 + strength * 700; bp.Q.value = 3;
  const g = ctx.createGain(); g.gain.setValueAtTime(0.06 + strength * 0.04, now); g.gain.exponentialRampToValueAtTime(0.0001, now + 0.018);
  src.connect(bp); bp.connect(g); g.connect(ctx.destination); src.start(now);
}
function PlayerHero() {
  const projects = window.SW_PROJECTS || [];
  const n = projects.length;
  const cardRef = React.useRef(null), vidWrapRef = React.useRef(null), videoRef = React.useRef(null), rows = React.useRef([]);
  const off = React.useRef(0), vel = React.useRef(0), snap = React.useRef(null), lastDetent = React.useRef(0), drag = React.useRef(false), dragY = React.useRef(0), dragT = React.useRef(0), audio = React.useRef(null), over = React.useRef(false);
  const [active, setActive] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);
  const [mobile, setMobile] = React.useState(false);
  const [full, setFull] = React.useState(true);
  const [theme, setTheme] = React.useState('video');
  const [soundOn, setSoundOn] = React.useState(false);
  const [vol, setVol] = React.useState(0.16);
  React.useEffect(() => { const v = videoRef.current; if (v) { v.muted = !soundOn; v.volume = vol; } }, [soundOn, vol]);
  React.useEffect(() => { const c = () => setMobile(matchMedia('(pointer: coarse)').matches || innerWidth < 700); c(); addEventListener('resize', c); return () => removeEventListener('resize', c); }, []);
  const ctx = () => { try { if (!audio.current) audio.current = new (window.AudioContext || window.webkitAudioContext)(); return audio.current; } catch { return null; } };
  const fire = (s) => { const c = ctx(); if (!c) return; if (c.state === 'suspended') c.resume().then(() => phClick(c, s)).catch(() => {}); else phClick(c, s); };
  React.useEffect(() => {
    let raf = 0;
    const loop = () => {
      if (snap.current !== null) { off.current += (snap.current - off.current) * 0.22; if (Math.abs(snap.current - off.current) < 0.4) { off.current = snap.current; snap.current = null; } }
      else if (!drag.current) { off.current += vel.current; vel.current *= 0.93; if (Math.abs(vel.current) < 0.02) vel.current = 0; }
      const det = Math.round(off.current / PH_ROW);
      if (det !== lastDetent.current) { lastDetent.current = det; fire(phClamp(Math.abs(vel.current) / PH_ROW, 0.15, 1)); }
      const c = off.current / PH_ROW;
      rows.current.forEach((el, i) => {
        if (!el) return; let d = phMod(i - c + n / 2, n) - n / 2; const a = Math.abs(d);
        el.style.transform = `translateY(${d * PH_ROW}px) translateZ(${-a * 18}px) rotateX(${phClamp(d * 9, -22, 22)}deg) scale(${phClamp(1 - a * 0.1, 0.72, 1)})`;
        el.style.opacity = String(phClamp(1 - a * 0.4, 0, 1)); el.style.pointerEvents = a < 0.5 ? 'auto' : 'none'; el.style.zIndex = String(1000 - Math.round(a * 10));
      });
      const near = phMod(Math.round(c), n); setActive((p) => (p === near ? p : near));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop); return () => cancelAnimationFrame(raf);
  }, [n]);
  React.useEffect(() => {
    const el = cardRef.current; if (!el) return;
    const onWheel = (e) => { e.preventDefault(); snap.current = null; vel.current = phClamp(vel.current + e.deltaY * 0.045, -14, 14); };
    const ts = (e) => { drag.current = true; snap.current = null; vel.current = 0; dragY.current = e.touches[0].clientY; dragT.current = performance.now(); };
    const tm = (e) => { if (!drag.current) return; e.preventDefault(); const y = e.touches[0].clientY, dy = dragY.current - y, t = performance.now(), dt = Math.max(1, t - dragT.current); off.current += dy; vel.current = (dy / dt) * 16; dragY.current = y; dragT.current = t; };
    const te = () => { drag.current = false; };
    el.addEventListener('wheel', onWheel, { passive: false }); el.addEventListener('touchstart', ts, { passive: true }); el.addEventListener('touchmove', tm, { passive: false }); el.addEventListener('touchend', te);
    return () => { el.removeEventListener('wheel', onWheel); el.removeEventListener('touchstart', ts); el.removeEventListener('touchmove', tm); el.removeEventListener('touchend', te); };
  }, [mobile, full, theme]);
  React.useEffect(() => { const v = videoRef.current; if (!v) return; playing ? v.play().catch(() => {}) : v.pause(); }, [playing]);
  const step = (dir) => { snap.current = (Math.round(off.current / PH_ROW) + dir) * PH_ROW; vel.current = 0; fire(0.5); };
  const onMove = (e) => { if (mobile || theme === 'minimal') return; const r = cardRef.current.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5; if (full) { const w = vidWrapRef.current; if (!w) return; w.style.transition = 'transform .05s linear'; w.style.transform = `scale(1.45) rotateY(${px * 26}deg) rotateX(${-py * 20}deg)`; return; } const c = cardRef.current; c.style.transition = 'transform .05s linear'; c.style.transform = `rotateY(${px * 34}deg) rotateX(${-py * 26}deg) scale(1.03)`; };
  const onLeave = () => { if (full) { const w = vidWrapRef.current; if (w) { w.style.transition = 'transform .6s cubic-bezier(.2,.8,.2,1)'; w.style.transform = 'scale(1.45) rotateY(0deg) rotateX(0deg)'; } return; } const c = cardRef.current; if (!c) return; c.style.transition = 'transform .6s cubic-bezier(.2,.8,.2,1)'; c.style.transform = 'rotateY(-13deg) rotateX(5deg) scale(1)'; };
  const openCase = (p) => { if (window.__swOpen) window.__swOpen(p.id); const el = document.getElementById('skills'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' }); };
  const cur = projects[active] || {};
  const SANS = 'Inter, sans-serif', MONO = '"JetBrains Mono", monospace', SERIF = '"Instrument Serif", Georgia, serif';
  const iconBtn = { background: 'none', border: 'none', color: 'rgba(255,255,255,.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 6 };
  const size = mobile ? 'min(88vw, 62dvh)' : 'min(58dvh, 460px)';
  const isFull = full || mobile;
  const glassBtn = (on, col) => ({ background: 'rgba(26,22,20,.55)', backdropFilter: 'blur(10px)', border: `1px solid ${on ? col : 'rgba(255,255,255,.3)'}`, boxShadow: on ? `0 0 14px ${col}44` : 'none', borderRadius: 999, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: on ? col : 'rgba(255,255,255,.6)', cursor: 'pointer', transition: 'box-shadow .25s, color .25s' });
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(16px,3vw,48px)' }}>
      <style>{`@keyframes ph-pulse{0%,100%{opacity:.5}50%{opacity:1}}@keyframes ph-eq1{0%,100%{height:4px}50%{height:14px}}@keyframes ph-eq2{0%,100%{height:13px}50%{height:5px}}@keyframes ph-eq3{0%,100%{height:7px}50%{height:15px}}@keyframes ph-in{from{opacity:0}to{opacity:1}}.ph-fade{mask-image:linear-gradient(to bottom,transparent 0%,#000 22%,#000 78%,transparent 100%);-webkit-mask-image:linear-gradient(to bottom,transparent 0%,#000 22%,#000 78%,transparent 100%)}.ph-row:hover .ph-row-t{color:#fff}`}</style>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 30% 25%, ${PH_ORANGE}2e, transparent 55%), radial-gradient(circle at 75% 75%, ${PH_DEEP}33, transparent 55%), #000` }}></div>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 70% at 50% 45%, transparent 40%, rgba(0,0,0,.75) 100%)' }}></div>
      <div style={{ position: 'absolute', top: 'clamp(72px,10vh,104px)', right: 'clamp(12px,2.5vw,24px)', zIndex: 21, display: 'flex', gap: 10 }}>
        <button onClick={() => setTheme((t) => (t === 'video' ? 'minimal' : 'video'))} aria-label="Switch theme" title="Switch theme" style={glassBtn(false)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 1-9 9c-2.5 0-4.7-1-6.3-2.7M3 12a9 9 0 0 1 9-9c2.5 0 4.7 1 6.3 2.7M3 8v4h4M21 16v-4h-4"></path></svg></button>
        {theme === 'video' && <button onClick={() => setSoundOn((v) => !v)} aria-label={soundOn ? 'Mute video' : 'Unmute video'} style={glassBtn(soundOn, PH_ORANGE)}>{soundOn ? <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5 6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg> : <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5 6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>}</button>}
        {!mobile && <button onClick={() => setFull((f) => !f)} aria-label={full ? 'Exit wide view' : 'Expand to wide view'} style={glassBtn(full, PH_ORANGE)}>{full ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v4a1 1 0 0 1-1 1H4M15 3v4a1 1 0 0 0 1 1h4M9 21v-4a1 1 0 0 0-1-1H4M15 21v-4a1 1 0 0 1 1-1h4"></path></svg> : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 0-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3"></path></svg>}</button>}
      </div>
      <div style={{ position: isFull ? 'static' : 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(14px,2.4vh,26px)', animation: 'ph-in 900ms cubic-bezier(.16,1,.3,1) both' }}>
        <div style={{ position: isFull ? 'absolute' : 'static', top: isFull ? 'clamp(72px,10vh,104px)' : undefined, left: 0, right: 0, zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '0 16px', pointerEvents: 'none' }}>
        <h1 style={{ margin: 0, fontFamily: SERIF, fontWeight: 400, fontSize: 'clamp(28px,4.2vw,52px)', lineHeight: 1.05, color: '#fff', textAlign: 'center', letterSpacing: '-0.01em', textShadow: '0 4px 30px rgba(0,0,0,.6)', maxWidth: 820 }}>Designer who builds the stories,<br className="hidden sm:block" /> not just screens</h1>
        <p style={{ margin: '-6px 0 0', fontFamily: MONO, fontSize: 'clamp(10px,.8vw,12px)', letterSpacing: '.08em', color: 'rgba(255,255,255,.5)', textAlign: 'center' }}>UXUI | BRAND | MOTION | STORYTELLING | AI DESIGNER</p>
        </div>
        <div style={{ position: isFull ? 'static' : 'relative', perspective: isFull ? undefined : 1700 }}>
          {!isFull && <div aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '50%', width: '128%', height: '118%', transform: 'translate(-50%,-50%)', background: `radial-gradient(ellipse, ${PH_ORANGE}55, transparent 68%)`, filter: 'blur(40px)', mixBlendMode: 'screen', animation: 'ph-pulse 4s ease-in-out infinite', pointerEvents: 'none' }}></div>}
          <div ref={cardRef} onPointerMove={onMove} onPointerLeave={onLeave} tabIndex={0} role="application" aria-label={`Project player. Showing ${cur.title}. Scroll or use arrows to browse.`}
            onKeyDown={(e) => { if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); step(1); } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); step(-1); } else if (e.key === 'Enter') openCase(cur); }}
            style={{ position: isFull ? 'absolute' : 'relative', inset: isFull ? 0 : undefined, width: isFull ? '100%' : size, height: isFull ? '100%' : size, borderRadius: isFull ? 0 : 30, overflow: 'hidden', background: '#0a0806', boxShadow: isFull ? 'none' : `0 40px 100px rgba(0,0,0,.65), 0 0 0 1px ${PH_ORANGE}2b, inset 0 0 60px rgba(0,0,0,.25)`, transformStyle: 'preserve-3d', transform: isFull ? 'none' : 'rotateY(-13deg) rotateX(5deg)', transition: 'width .5s cubic-bezier(.2,.8,.2,1), height .5s cubic-bezier(.2,.8,.2,1), transform .5s cubic-bezier(.2,.8,.2,1)', outline: 'none', zIndex: isFull ? 1 : undefined }}>
            {theme === 'video' ? <div ref={vidWrapRef} style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d', transform: isFull && !mobile ? 'scale(1.45)' : 'none', transition: 'transform .5s cubic-bezier(.2,.8,.2,1)' }}>
              <video ref={videoRef} src={PH_VIDEO} autoPlay muted loop playsInline preload="auto" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}></video>
            </div> : <PhMinimalBackdrop />}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 55%, rgba(10,6,2,.55) 100%)', pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,6,2,.1) 0%, rgba(10,6,2,0) 26%, rgba(10,6,2,.3) 55%, rgba(10,6,2,.88) 100%)', pointerEvents: 'none' }}></div>
            <div className="ph-fade" style={{ position: 'absolute', left: isFull ? '50%' : 0, right: isFull ? 'auto' : 0, width: isFull ? 'min(92vw, 520px)' : 'auto', transform: isFull ? 'translateX(-50%)' : 'none', bottom: isFull ? 'calc(clamp(96px,14vh,150px) + 64px)' : 112, height: isFull ? '34%' : '48%', overflow: 'hidden', perspective: 1500, perspectiveOrigin: '50% 30%', touchAction: 'none' }}>
              <div style={{ position: 'absolute', left: 0, right: 0, top: '30%', height: 0, transformStyle: 'preserve-3d' }}>
                {projects.map((p, i) => { const on = i === active; return (
                  <div key={p.id} ref={(el) => { rows.current[i] = el; }} className="ph-row" onClick={() => openCase(p)} style={{ position: 'absolute', left: '6%', right: '6%', top: -PH_ROW / 2, height: PH_ROW, display: 'flex', alignItems: 'center', gap: 12, padding: '0 10px', borderRadius: 14, cursor: 'pointer', background: on ? 'rgba(255,255,255,.1)' : 'transparent', backdropFilter: on ? 'blur(14px)' : 'none', WebkitBackdropFilter: on ? 'blur(14px)' : 'none', boxShadow: on ? `inset 0 0 0 1px ${PH_ORANGE}55, 0 0 26px ${PH_ORANGE}33` : 'none', transformOrigin: 'center', willChange: 'transform, opacity', transition: 'background .25s, box-shadow .25s' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 9, flexShrink: 0, overflow: 'hidden', background: '#1a1614', boxShadow: on ? `0 0 20px ${PH_ORANGE}55` : '0 2px 8px rgba(0,0,0,.55)' }}>{p.hero && <img src={p.hero} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}</div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div className="ph-row-t" style={{ fontFamily: SANS, fontWeight: on ? 700 : 500, fontSize: on ? 15 : 13, color: on ? '#fff' : 'rgba(255,255,255,.68)', textShadow: '0 1px 8px rgba(0,0,0,.8)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.title}</div>
                      <div style={{ fontFamily: SANS, fontSize: 11.5, color: on ? 'rgba(255,255,255,.7)' : 'rgba(255,255,255,.4)', textShadow: '0 1px 6px rgba(0,0,0,.85)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.type} · {p.year}</div>
                    </div>
                    {on && <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 15, flexShrink: 0 }}>{['ph-eq1 .9s', 'ph-eq2 .75s', 'ph-eq3 1.05s'].map((a, k) => <span key={k} style={{ width: 3, borderRadius: 2, background: PH_ORANGE, animation: playing ? `${a} ease-in-out infinite` : 'none', height: playing ? undefined : 4 }}></span>)}</div>}
                  </div>); })}
              </div>
            </div>
            <div style={{ position: 'absolute', left: isFull ? '50%' : 14, right: isFull ? 'auto' : 14, width: isFull ? 'min(92vw, 520px)' : 'auto', transform: isFull ? 'translateX(-50%)' : 'none', bottom: 14, zIndex: 4, borderRadius: 16, background: 'rgba(26,22,20,.55)', backdropFilter: 'blur(20px) saturate(1.2)', WebkitBackdropFilter: 'blur(20px) saturate(1.2)', boxShadow: `inset 0 0 0 1px ${PH_ORANGE}2a`, padding: '10px 14px 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, flexShrink: 0, overflow: 'hidden', background: '#1a1614', boxShadow: `0 0 16px ${PH_ORANGE}55` }}>{cur.hero && <img src={cur.hero} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}</div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 13.5, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{cur.title}</div>
                  <div style={{ fontFamily: MONO, fontSize: 10.5, color: 'rgba(255,255,255,.55)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{cur.num} / {String(n).padStart(2, '0')}</div>
                </div>
                <button onClick={() => step(-1)} aria-label="Previous project" style={iconBtn}><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zM20 6 10 12l10 6z"></path></svg></button>
                <button onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause' : 'Play'} style={{ ...iconBtn, width: 44, height: 44, borderRadius: 999, background: PH_ORANGE, boxShadow: `0 0 18px ${PH_ORANGE}66` }}>
                  {playing ? <svg width="15" height="15" viewBox="0 0 24 24" fill="#0a0806"><rect x="6" y="5" width="4" height="14" rx="1"></rect><rect x="14" y="5" width="4" height="14" rx="1"></rect></svg> : <svg width="15" height="15" viewBox="0 0 24 24" fill="#0a0806"><path d="M7 5v14l12-7z"></path></svg>}
                </button>
                <button onClick={() => step(1)} aria-label="Next project" style={iconBtn}><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM4 6l10 6-10 6z"></path></svg></button>
                <button onClick={() => openCase(cur)} aria-label="Open case study" title="Open case" style={{ ...iconBtn, color: PH_ORANGE }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9"></path></svg></button>
              </div>
            </div>
          </div>
        </div>
        <button type="button" onClick={() => { const el = document.getElementById('work'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' }); }} className="liquid-glass flex items-center gap-2.5 px-5 py-2.5 rounded-full text-white text-sm font-medium transition-colors duration-300 hover:bg-white/[0.04] group" style={{ fontFamily: SANS, position: isFull ? 'absolute' : 'static', bottom: isFull ? 'clamp(96px,14vh,150px)' : undefined, left: isFull ? '50%' : undefined, transform: isFull ? 'translateX(-50%)' : undefined, zIndex: 20 }}>
          See the Work <ArrowRightIcon size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      </div>
    </section>);
}
function PhMinimalBackdrop() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#0a0806', overflow: 'hidden' }}>
      <style>{`@keyframes ph-ga{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(6%,5%) scale(1.12)}}@keyframes ph-gb{0%,100%{transform:translate(0,0) scale(1.05)}50%{transform:translate(-7%,-4%) scale(.95)}}@keyframes ph-cw{from{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(360deg)}}@keyframes ph-ccw{from{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(-360deg)}}`}</style>
      <div style={{ position: 'absolute', width: '56%', height: '56%', left: '-12%', top: '-14%', borderRadius: '50%', background: `radial-gradient(circle, ${PH_ORANGE}38, transparent 72%)`, filter: 'blur(50px)', animation: 'ph-ga 14s ease-in-out infinite' }}></div>
      <div style={{ position: 'absolute', width: '48%', height: '48%', right: '-10%', bottom: '-12%', borderRadius: '50%', background: `radial-gradient(circle, ${PH_DEEP}40, transparent 72%)`, filter: 'blur(55px)', animation: 'ph-gb 18s ease-in-out infinite 1s' }}></div>
      <div style={{ position: 'absolute', width: '62%', aspectRatio: '1 / 1', left: '50%', top: '48%', borderRadius: '50%', border: '1px solid rgba(255,255,255,.09)', borderTopColor: `${PH_ORANGE}44`, animation: 'ph-cw 40s linear infinite' }}></div>
      <div style={{ position: 'absolute', width: '38%', aspectRatio: '1 / 1', left: '50%', top: '48%', borderRadius: '50%', border: `1px solid ${PH_ORANGE}22`, borderBottomColor: `${PH_DEEP}66`, animation: 'ph-ccw 28s linear infinite' }}></div>
    </div>);
}
Object.assign(window, { PlayerHero });
