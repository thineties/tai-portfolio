// Morph-reveal trail for the hero flower. Exposes window.initOrbitHero(stage) -> cleanup fn.
(function () {
  const MAXP = 60, HEAD = 140, AMP = 44, PTS = 24, FADE = 0.92, SAMPLE = 8;
  function drawBlob(ctx, cx, cy, r, t, seed) {
    if (r < 2) return;
    const pts = [];
    for (let i = 0; i < PTS; i++) {
      const a = (i / PTS) * Math.PI * 2;
      const n = (Math.sin(a * 3 + t * 1.4 + seed) * 0.45 + Math.sin(a * 5 - t * 0.9 + seed * 2.3) * 0.3 + Math.cos(a * 2 + t * 1.8 + seed * 0.7) * 0.25) * AMP * (r / HEAD);
      const rr = r + n;
      pts.push({ x: cx + Math.cos(a) * rr, y: cy + Math.sin(a) * rr });
    }
    const mid = (p, q) => ({ x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 });
    let m = mid(pts[PTS - 1], pts[0]);
    ctx.beginPath(); ctx.moveTo(m.x, m.y);
    for (let i = 0; i < PTS; i++) { const nx = pts[(i + 1) % PTS]; m = mid(pts[i], nx); ctx.quadraticCurveTo(pts[i].x, pts[i].y, m.x, m.y); }
    ctx.closePath(); ctx.fillStyle = '#fff'; ctx.fill();
  }
  class Layer {
    constructor(el, invert) {
      this.el = el; this.invert = invert; this.img = el.querySelector('img');
      this.mask = document.createElement('canvas'); this.mctx = this.mask.getContext('2d');
      this.out = document.createElement('canvas'); this.octx = this.out.getContext('2d');
      this.out.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:none';
      el.appendChild(this.out);
    }
    resize(w, h) { const dpr = Math.min(2, window.devicePixelRatio || 1); const W = Math.max(1, Math.round(w * dpr)), H = Math.max(1, Math.round(h * dpr)); this.mask.width = this.out.width = W; this.mask.height = this.out.height = H; this.scale = dpr; }
    render(points, t) {
      const { mctx, mask, octx, out, img, scale } = this;
      if (!img || !img.complete || !img.naturalWidth) return;
      mctx.setTransform(1, 0, 0, 1, 0, 0); mctx.globalCompositeOperation = 'source-over'; mctx.globalAlpha = 1; mctx.clearRect(0, 0, mask.width, mask.height);
      if (!this.invert) { mctx.fillStyle = '#fff'; mctx.fillRect(0, 0, mask.width, mask.height); mctx.globalCompositeOperation = 'destination-out'; }
      mctx.setTransform(scale, 0, 0, scale, 0, 0);
      for (const p of points) { mctx.globalAlpha = p.alpha; drawBlob(mctx, p.x, p.y, p.r, t, p.seed); }
      mctx.globalAlpha = 1;
      // cover-fit image, then keep only where mask is opaque
      octx.globalCompositeOperation = 'source-over'; octx.clearRect(0, 0, out.width, out.height);
      const iw = img.naturalWidth, ih = img.naturalHeight, s = Math.max(out.width / iw, out.height / ih), dw = iw * s, dh = ih * s;
      octx.drawImage(img, (out.width - dw) / 2, (out.height - dh) / 2, dw, dh);
      octx.globalCompositeOperation = 'destination-in'; octx.drawImage(mask, 0, 0);
      octx.globalCompositeOperation = 'source-over';
      img.style.visibility = 'hidden'; out.style.display = 'block';
    }
    reset() { if (this.img) this.img.style.visibility = this.invert ? 'hidden' : ''; this.out.style.display = 'none'; }
  }
  window.initOrbitHero = function (stage) {
    const flower = stage.querySelector('.orb-flower');
    const bg = stage.querySelector('.orb-flower__layer--bg');
    const top = stage.querySelector('.orb-flower__layer--top');
    if (!flower || !bg || !top) return () => {};
    const layers = [new Layer(bg, false), new Layer(top, true)];
    const points = []; let hovering = false, headR = 0, time = 0, last = null, mouse = { x: 0, y: 0 }, raf = 0, rect = null;
    const measure = () => { rect = flower.getBoundingClientRect(); layers.forEach(l => l.resize(rect.width, rect.height)); };
    const toLocal = (e) => { if (!rect) measure(); return { x: e.clientX - rect.left, y: e.clientY - rect.top }; };
    const onMove = (e) => { mouse = toLocal(e); hovering = true; kick(); };
    const onEnter = (e) => { measure(); mouse = toLocal(e); hovering = true; kick(); };
    const onLeave = () => { hovering = false; kick(); };
    const onResize = () => { measure(); };
    function kick() { if (!raf) raf = requestAnimationFrame(tick); }
    function tick() {
      raf = 0;
      const targetR = hovering ? HEAD : 0;
      headR += (targetR - headR) * (hovering ? 0.14 : 0.04);
      if (hovering && headR > 5) {
        if (!last || Math.hypot(mouse.x - last.x, mouse.y - last.y) > SAMPLE) { points.push({ x: mouse.x, y: mouse.y, r: headR, alpha: 1, seed: Math.random() * 100 }); last = { x: mouse.x, y: mouse.y }; if (points.length > MAXP) points.shift(); }
      }
      for (let i = points.length - 1; i >= 0; i--) { const p = points[i]; p.alpha *= FADE; p.r *= 0.995; if (p.alpha < 0.01) points.splice(i, 1); }
      time += 0.016;
      if (points.length) { layers.forEach(l => l.render(points, time)); raf = requestAnimationFrame(tick); }
      else { layers.forEach(l => l.reset()); last = null; if (hovering || headR > 0.5) raf = requestAnimationFrame(tick); }
    }
    stage.addEventListener('mousemove', onMove); stage.addEventListener('mouseenter', onEnter); stage.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', onResize);
    measure();
    return () => { stage.removeEventListener('mousemove', onMove); stage.removeEventListener('mouseenter', onEnter); stage.removeEventListener('mouseleave', onLeave); window.removeEventListener('resize', onResize); if (raf) cancelAnimationFrame(raf); };
  };
})();
