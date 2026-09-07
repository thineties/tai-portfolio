// =================== Cinematic Hero (Section 1) — Vantage-style composition ===================
const CH_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_064556_051587f1-74a1-4336-8c05-4dde3594ed05.mp4';
const CH_CSS = `
.ch{position:relative;width:100%;height:100vh;height:100dvh;min-height:560px;overflow:hidden;background:#000;color-scheme:dark;isolation:isolate;
--gs:clamp(20px,4.177vw,96px);--ge:clamp(20px,4.04vw,96px);--hb:clamp(28px,5.19vh,64px);
--ds:clamp(44px,7.64vh,88px);--dl:clamp(52px,9.34vh,106px);--cs:clamp(14px,1.7vh,19px);--cl:clamp(19px,2.17vh,24px);
--tcg:clamp(15px,2.08vh,24px);--ccg:clamp(24px,3.11vh,36px);--cw:clamp(142px,15.09vh,168px);--chh:clamp(38px,3.96vh,44px);--card:clamp(150px,18.96vh,215px)}
.ch-bg{position:absolute;inset:0;z-index:-3;width:100%;height:100%;object-fit:cover;object-position:center;pointer-events:none;user-select:none}
.ch::before{content:"";position:absolute;inset:0;z-index:-2;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.03),transparent 24%,transparent 82%,rgba(0,0,0,.05)),radial-gradient(ellipse at 44% 54%,transparent 30%,rgba(0,0,0,.055) 100%)}
.ch::after{content:"";position:absolute;inset:auto 0 0 0;height:46%;z-index:-1;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(0,0,0,.55))}
.ch-content{position:absolute;left:var(--gs);bottom:var(--hb);display:flex;flex-direction:column;align-items:flex-start;max-width:calc(100% - var(--gs) - var(--ge))}
.ch-title{margin:0;font-family:"Instrument Serif",Georgia,serif;font-weight:400;font-size:var(--ds);line-height:var(--dl);letter-spacing:-.02em;white-space:nowrap;text-shadow:0 2px 2px rgba(0,0,0,.44);display:flex;flex-direction:column;align-items:flex-start}
.ch-line{display:block;overflow:hidden;transform-origin:left center}
.ch-line-1{color:#fff}.ch-line-2{color:rgba(211,207,207,.78)}
.ch-reveal{display:block}
.ch-copy{margin:var(--tcg) 0 0 1px;font-family:"JetBrains Mono",ui-monospace,monospace;font-size:clamp(11px,1.3vh,13px);line-height:var(--cl);letter-spacing:.06em;color:rgba(226,229,228,.84);text-shadow:0 1px 3px rgba(0,0,0,.7);max-width:clamp(300px,31.67vw,500px)}
.ch-cta{position:relative;overflow:hidden;margin-top:var(--ccg);height:48px;padding:0 60px 0 22px;border:1px solid rgba(243,236,231,.14);border-radius:999px;background:rgba(26,22,20,.72);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);color:rgba(243,236,231,.85);cursor:pointer;font-family:Inter,sans-serif;font-weight:500;font-size:14px;letter-spacing:-.1px;display:inline-flex;align-items:center;white-space:nowrap;transition:border-color .25s,color .25s}
.ch-cta:hover{border-color:rgba(243,236,231,.3);color:#f3ece7}
.ch-cta .lb{transition:opacity 500ms}
.ch-cta:hover .lb{opacity:0}
.ch-cta .ab{position:absolute;right:5px;top:5px;bottom:5px;width:36px;border-radius:999px;z-index:1;display:grid;place-items:center;background:#f3ece7;color:#1a1614;transition:width 500ms cubic-bezier(.2,.8,.2,1),transform .15s}
.ch-cta:hover .ab{width:calc(100% - 10px)}
.ch-cta:active .ab{transform:scale(.96)}
.ch-card{position:absolute;right:var(--ge);bottom:var(--hb);width:var(--card);aspect-ratio:201/265;container-type:inline-size;border:1px solid rgba(255,255,255,.13);border-radius:clamp(12px,1.52vh,18px);background:linear-gradient(145deg,rgba(24,22,20,.8),rgba(5,12,14,.86));box-shadow:0 2px 10px rgba(0,0,0,.44),0 0 0 3px rgba(255,255,255,.035) inset,0 0 0 1px rgba(0,0,0,.9);backdrop-filter:blur(14px) saturate(108%);-webkit-backdrop-filter:blur(14px) saturate(108%);transform-origin:82% 50%}
.ch-visual{position:absolute;left:3.5cqw;top:4cqw;width:92.5cqw;height:92cqw;border-radius:4cqw;background:#101a1e;overflow:hidden}
.ch-visual img{width:100%;height:100%;object-fit:cover;display:block;filter:brightness(.89) saturate(.93) contrast(1.03)}
.ch-play{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:29cqw;height:29cqw;border-radius:50%;border:1px solid rgba(255,255,255,.34);background:rgba(3,5,7,.47);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;color:#fff;cursor:pointer;padding:0}
.ch-watch{position:absolute;left:3.5cqw;right:3.5cqw;bottom:4cqw;height:16cqw;border-radius:3.5cqw;border:1px solid rgba(255,255,255,.21);background:linear-gradient(145deg,rgba(26,34,36,.86),rgba(16,29,33,.9));color:#fff;font-family:Inter,sans-serif;font-weight:500;font-size:6.5cqw;cursor:pointer;padding:0}
.ch-card:hover .ch-visual img{filter:brightness(1) saturate(1) contrast(1.03)}
.ch button:hover{filter:brightness(1.08)}.ch button{transition:filter 140ms}
.ch button:focus-visible{outline:2px solid #fff;outline-offset:3px}
@keyframes ch-line{from{transform:translate3d(0,110%,0) skewY(2deg)}to{transform:none}}
@keyframes ch-copy{from{opacity:0;transform:translateY(10px) scale(.99)}to{opacity:1;transform:none}}
@keyframes ch-action{from{opacity:0;transform:translateY(8px) scale(.985)}to{opacity:1;transform:none}}
@keyframes ch-card{from{opacity:0;transform:translateY(12px) scale(.968)}to{opacity:1;transform:none}}
.ch-anim .ch-line-1 .ch-reveal{animation:ch-line 800ms cubic-bezier(.22,1,.36,1) 300ms both}
.ch-anim .ch-line-2 .ch-reveal{animation:ch-line 850ms cubic-bezier(.22,1,.36,1) 440ms both}
.ch-anim .ch-copy{animation:ch-copy 620ms cubic-bezier(.16,1,.3,1) 740ms both}
.ch-anim .ch-cta{animation:ch-action 560ms cubic-bezier(.16,1,.3,1) 960ms both}
.ch-anim .ch-card{animation:ch-card 920ms cubic-bezier(.22,1,.36,1) 1040ms both}
@media (prefers-reduced-motion:reduce){.ch-anim *{animation:none!important}}
@media (max-width:760px){.ch-title{white-space:normal;font-size:clamp(34px,9.5vw,52px);line-height:1.05}.ch-copy br{display:none}.ch-card{bottom:auto;top:clamp(120px,22svh,220px);width:clamp(120px,32vw,160px)}.ch-content{max-width:calc(100% - var(--gs) - var(--ge))}}
`;
function CinematicHero() {
  const ref = React.useRef(null);
  React.useEffect(() => { const el = ref.current; if (!el) return; const t = setTimeout(() => el.classList.remove('ch-anim'), 3500); return () => clearTimeout(t); }, []);
  const go = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' }); };
  const openWil = () => { if (window.__swOpen) window.__swOpen('while-it-lasts'); go('skills'); };
  return (
    <section ref={ref} className="ch ch-anim" aria-label="Intro">
      <style>{CH_CSS}</style>
      <video className="ch-bg" src={CH_VIDEO} autoPlay muted loop playsInline disablePictureInPicture aria-hidden="true"></video>
      <div className="ch-content">
        <h1 className="ch-title">
          <span className="ch-line ch-line-1"><span className="ch-reveal">Designer who builds</span></span>
          <span className="ch-line ch-line-2"><span className="ch-reveal">the stories, not just screens.</span></span>
        </h1>
        <p className="ch-copy">UXUI | Brand | Motion<br />Storytelling | Ai Designer</p>
        <button type="button" className="ch-cta" onClick={() => go('skills')}>
          <span className="lb">See the Work</span>
          <i className="ab" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9"></path></svg></i>
        </button>
      </div>
      <article className="ch-card" aria-label="Featured case">
        <div className="ch-visual">
          <img src="assets/wil-festival.jpg" alt="While It Lasts — festival installation" />
          <button type="button" className="ch-play" aria-label="Open featured case" onClick={openWil}><svg width="40%" height="40%" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"></path></svg></button>
        </div>
        <button type="button" className="ch-watch" onClick={openWil}>Featured Case</button>
      </article>
    </section>);
}
Object.assign(window, { CinematicHero });
