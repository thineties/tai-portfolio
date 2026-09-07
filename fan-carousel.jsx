// =================== Card Fan Carousel (Section 3) ===================
const FAN_MAX_VISIBLE = 7;
const FAN_HALF = 3;
const FAN_POSITIONS = [
{ rot: -21, scale: 0.7756, x: -30, y: 7.3, zIndex: 1 },
{ rot: -14, scale: 0.8498, x: -22, y: 4.0, zIndex: 2 },
{ rot: -7, scale: 0.9346, x: -11, y: 1.3, zIndex: 3 },
{ rot: 0, scale: 1.0, x: 0, y: 0.0, zIndex: 10 },
{ rot: 7, scale: 0.9346, x: 11, y: 1.3, zIndex: 3 },
{ rot: 14, scale: 0.8498, x: 22, y: 4.0, zIndex: 2 },
{ rot: 21, scale: 0.7756, x: 30, y: 7.3, zIndex: 1 }];

function fanResponsiveMultiplier(w) {
  if (w < 480) return 0.28;
  if (w < 640) return 0.38;
  if (w < 768) return 0.5;
  if (w < 1024) return 0.75;
  return 1.0;
}
function fanHeightMultiplier(w) {
  let idealPx;
  if (w < 480) idealPx = 22 * 16;else if (w < 640) idealPx = 26 * 16;else if (w < 768) idealPx = 28 * 16;else if (w < 1024) idealPx = 34 * 16;else idealPx = 38 * 16;
  const available = window.innerHeight * 0.7;
  return available >= idealPx ? 1 : available / idealPx;
}
function fanSlotConfig(total, slot) {
  if (total >= FAN_MAX_VISIBLE) return FAN_POSITIONS[slot];
  const center = total >> 1;
  const distance = total > 1 ? (slot - center) / center : 0;
  const a = Math.abs(distance);
  return { rot: distance * 21, scale: 1.0 - 0.2244 * a * a, x: distance * 30, y: a * a * 7.3, zIndex: 10 - Math.abs(slot - center) };
}

const FAN_ARROW = "relative flex items-center justify-center rounded-full border-[1.5px] border-white/10 bg-white/5 backdrop-blur-[16px] text-white/55 cursor-pointer shrink-0 z-30 outline-none shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-white/25 hover:text-white/80 active:opacity-70 transition-colors duration-300";

function FanCarousel({ cards }) {
  const containerRef = React.useRef(null);
  const isAnimating = React.useRef(false);
  const hasEntered = React.useRef(false);
  const directionRef = React.useRef(null);
  const prevVisible = React.useRef(new Set());
  const total = cards.length;
  const needsPagination = total > FAN_MAX_VISIBLE;
  const [centerIndex, setCenterIndex] = React.useState(needsPagination ? FAN_HALF : total >> 1);

  const getVisibleMap = React.useCallback((center) => {
    const map = new Map();
    if (!needsPagination) {cards.forEach((_, i) => map.set(i, i));return map;}
    for (let slot = 0; slot < FAN_MAX_VISIBLE; slot++) map.set(((center + slot - FAN_HALF) % total + total) % total, slot);
    return map;
  }, [total, needsPagination, cards]);

  const cycle = React.useCallback((dir) => {
    if (isAnimating.current || !needsPagination) return;
    isAnimating.current = true;
    directionRef.current = dir;
    setCenterIndex((p) => dir === 'right' ? (p + 1) % total : (p - 1 + total) % total);
  }, [total, needsPagination]);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container || !total || typeof gsap === 'undefined') return;
    const els = Array.from(container.querySelectorAll('.fan-card'));
    if (!els.length) return;
    const visibleMap = getVisibleMap(centerIndex);
    const prev = prevVisible.current;
    const direction = directionRef.current;
    const first = !hasEntered.current;
    const mult = fanResponsiveMultiplier(window.innerWidth);
    const hMult = fanHeightMultiplier(window.innerWidth);
    const slotCount = needsPagination ? FAN_MAX_VISIBLE : total;
    const config = (s) => fanSlotConfig(slotCount, s);
    if (first) isAnimating.current = true;
    let done = 0;
    const onDone = () => {if (++done >= visibleMap.size) {isAnimating.current = false;if (first) hasEntered.current = true;}};

    els.forEach((card, i) => {
      const slot = visibleMap.get(i);
      const was = prev.has(i);
      if (slot !== undefined) {
        const { x, y, rot, scale, zIndex } = config(slot);
        const target = { x: `${x * mult}rem`, y: `${y * hMult}rem`, rotation: rot, scale, opacity: 1, zIndex };
        if (first) {
          gsap.set(card, { x: 0, y: `${12 * hMult}rem`, rotation: 0, scale: 0.5, opacity: 0 });
          gsap.to(card, { ...target, duration: 1.2, ease: 'elastic.out(1.05,.78)', delay: 0.2 + slot * 0.06, onComplete: onDone });
        } else if (!was) {
          gsap.set(card, { x: `${direction === 'right' ? 40 : -40}rem`, y: `${y * hMult}rem`, rotation: direction === 'right' ? 30 : -30, scale: 0.5, opacity: 0 });
          gsap.to(card, { ...target, duration: 0.6, ease: 'power2.out', onComplete: onDone });
        } else {
          gsap.to(card, { ...target, duration: 0.5, ease: 'power2.out', onComplete: onDone });
        }
      } else if (was) {
        gsap.to(card, { x: `${direction === 'right' ? -40 : 40}rem`, opacity: 0, scale: 0.5, rotation: direction === 'right' ? -30 : 30, duration: 0.4, ease: 'power2.in', zIndex: 0 });
      } else if (first) {
        gsap.set(card, { opacity: 0, scale: 0.3, x: 0, y: 0, zIndex: 0 });
      }
    });
    prevVisible.current = new Set(visibleMap.keys());

    const visible = [];
    els.forEach((el, i) => {const s = visibleMap.get(i);if (s !== undefined) visible.push({ el, slot: s });});
    visible.sort((a, b) => a.slot - b.slot);
    let activeSlot = null;
    let leaveTimer = null;
    const centerSlot = visible.length >> 1;

    const updateHover = (hovered) => {
      const m = fanResponsiveMultiplier(window.innerWidth);
      const hM = fanHeightMultiplier(window.innerWidth);
      visible.forEach(({ el, slot }) => {
        const base = config(slot);
        let tx = base.x * m, ty = base.y * hM, tr = base.rot, ts = base.scale, delay = 0;
        if (hovered !== null) {
          const d = Math.abs(slot - hovered);
          delay = d * 0.02;
          if (slot === hovered) {ty -= 2.5 * hM;ts *= 1.08;} else {
            const n = centerSlot > 0 ? (slot - centerSlot) / centerSlot : 0;
            const push = 8 * (1 - Math.abs(n)) * (1 + 0.2 * Math.max(0, 3 - d));
            if (slot < hovered) {tx -= push * m;tr -= 3 / (d + 1);} else {tx += push * m;tr += 3 / (d + 1);}
            if (slot === visible.length - 1 && hovered < centerSlot) ty -= 1 * hM;
            if (slot === 0 && hovered > centerSlot) ty -= 1 * hM;
          }
        } else delay = Math.abs(slot - centerSlot) * 0.02;
        gsap.to(el, { x: `${tx}rem`, y: `${ty}rem`, rotation: tr, scale: ts, duration: 0.5, delay, ease: 'elastic.out(1,.75)', overwrite: 'auto' });
        gsap.set(el, { zIndex: base.zIndex });
      });
    };
    const enters = visible.map(({ el, slot }) => {
      const h = () => {if (isAnimating.current) return;if (leaveTimer) {clearTimeout(leaveTimer);leaveTimer = null;}if (activeSlot !== slot) {activeSlot = slot;updateHover(slot);}};
      el.addEventListener('mouseenter', h);
      return { el, h };
    });
    const onLeave = () => {if (isAnimating.current) return;if (leaveTimer) clearTimeout(leaveTimer);leaveTimer = setTimeout(() => {activeSlot = null;updateHover(null);}, 50);};
    container.addEventListener('mouseleave', onLeave);
    const onResize = () => {if (!isAnimating.current) updateHover(activeSlot);};
    window.addEventListener('resize', onResize);
    return () => {
      enters.forEach(({ el, h }) => el.removeEventListener('mouseenter', h));
      container.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
      if (leaveTimer) clearTimeout(leaveTimer);
    };
  }, [centerIndex, total, getVisibleMap, needsPagination]);

  if (!total) return null;
  const chevron = (dir) =>
  <svg className="relative z-[2] w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points={dir === 'left' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'}></polyline></svg>;

  return (
    <div className="flex flex-col items-center w-full relative z-20">
      <div className="flex items-center justify-center w-full max-w-[90rem]">
        <div ref={containerRef} className="fan-layout flex relative justify-center items-center w-full max-w-[80rem]">
          {cards.map((card, i) => {
            const img = <div className="relative w-full h-full overflow-hidden"><img src={card.imgUrl} loading="lazy" alt={card.alt || `Card ${i}`} className="absolute inset-0 w-full h-full object-cover z-10" /></div>;
            return card.linkUrl ?
            <a key={i} href={card.linkUrl} target={card.linkUrl.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="fan-card block cursor-pointer">{img}</a> :
            <div key={i} className="fan-card">{img}</div>;
          })}
        </div>
      </div>
      {needsPagination &&
      <div className="flex items-center justify-center gap-4 mt-6 md:mt-8 z-30">
        <button type="button" className={`${FAN_ARROW} w-10 h-10 md:w-12 md:h-12`} onClick={() => cycle('left')} aria-label="Previous">{chevron('left')}</button>
        <div className="flex items-center gap-2">
          {cards.map((_, i) => <span key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === centerIndex ? 'bg-white/80 scale-[1.3]' : 'bg-white/15'}`}></span>)}
        </div>
        <button type="button" className={`${FAN_ARROW} w-10 h-10 md:w-12 md:h-12`} onClick={() => cycle('right')} aria-label="Next">{chevron('right')}</button>
      </div>}
    </div>);
}

Object.assign(window, { FanCarousel });
