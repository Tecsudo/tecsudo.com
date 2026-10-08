// Motion layer: runs after the existing reveal system. Pure DOM + rAF, no dependencies.
const $ = (s, r = document) => r.querySelector(s)
const $$ = (s, r = document) => [...r.querySelectorAll(s)]
const clamp = (v, a, b) => Math.min(b, Math.max(a, v))
const CARDS = [['.ind>div', 7], ['.cases>article', 4], ['.tools>div', 9], ['.stat', 8], ['.tabs button', 0], ['.research .art', 5]]
const FX = CARDS.map(c => c[0]).join(',')

export function initMotion() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches
  const wide = matchMedia('(min-width:900px)').matches
  const off = []
  const on = (t, e, f, o) => { t.addEventListener(e, f, o); off.push(() => t.removeEventListener(e, f, o)) }

  // sequential children (contact + research)
  $$('.contact .wrap>div>*, .contact form>*, .contact li, .research .wrap>div>*').forEach(el => {
    el.classList.add('stg')
    el.style.setProperty('--c', [...el.parentElement.children].indexOf(el) + (el.tagName === 'LI' ? 4 : 0))
  })
  CARDS.forEach(([s, d]) => $$(s).forEach(el => { el.classList.add('fxc'); el._deg = d }))
  const lap = $('.laptop'); if (lap) lap.style.setProperty('--reveal-delay', '1400ms') // wait for the pipeline

  if (reduce) return () => off.forEach(f => f())

  // ---- hero: particle network + mouse depth
  const hero = $('.hero'), cv = $('.hero-fx'), mouse = { x: -999, y: -999 }
  if (hero && fine) {
    on(hero, 'pointermove', e => {
      const r = hero.getBoundingClientRect()
      hero.style.setProperty('--hx', ((e.clientX - r.left) / r.width - .5).toFixed(3))
      hero.style.setProperty('--hy', ((e.clientY - r.top) / r.height - .5).toFixed(3))
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top
    })
    on(hero, 'pointerleave', () => { hero.style.setProperty('--hx', 0); hero.style.setProperty('--hy', 0); mouse.x = mouse.y = -999 })
  }
  if (cv) {
    const x = cv.getContext('2d'), N = wide ? 64 : 24
    let w, h, P = [], run = false, raf
    const size = () => {
      const d = Math.min(devicePixelRatio || 1, 2)
      w = cv.clientWidth; h = cv.clientHeight; cv.width = w * d; cv.height = h * d; x.setTransform(d, 0, 0, d, 0, 0)
      if (!P.length) P = Array.from({ length: N }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3, r: Math.random() * 1.4 + .6 }))
    }
    const tick = () => {
      x.clearRect(0, 0, w, h)
      for (const p of P) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        const dx = p.x - mouse.x, dy = p.y - mouse.y
        if (dx * dx + dy * dy < 14000) { p.x += dx * .02; p.y += dy * .02 }
      }
      x.beginPath()
      for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) {
        const dx = P[i].x - P[j].x, dy = P[i].y - P[j].y
        if (dx * dx + dy * dy < 13000) { x.moveTo(P[i].x, P[i].y); x.lineTo(P[j].x, P[j].y) }
      }
      x.strokeStyle = 'rgba(4,240,228,.14)'; x.stroke()
      x.beginPath(); for (const p of P) { x.moveTo(p.x + p.r, p.y); x.arc(p.x, p.y, p.r, 0, 6.283) }
      x.fillStyle = 'rgba(4,240,228,.75)'; x.fill()
      if (run) raf = requestAnimationFrame(tick)
    }
    size(); on(window, 'resize', size)
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !run) { run = true; tick() } else if (!e.isIntersecting) { run = false; cancelAnimationFrame(raf) }
    })
    io.observe(cv); off.push(() => { run = false; cancelAnimationFrame(raf); io.disconnect() })
  }

  // ---- stats: live counters
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return
    io.unobserve(e.target)
    const s = e.target, { d, n, suf, dec } = s._c, t0 = performance.now() + $$('.stat').indexOf(s) * 160
    const step = now => {
      const k = clamp((now - t0) / 1600, 0, 1)
      d.textContent = (n * (1 - Math.pow(1 - k, 4))).toFixed(dec) + suf
      if (k < 1) requestAnimationFrame(step); else s.classList.add('done')
    }
    requestAnimationFrame(step)
  }), { threshold: .4 })
  $$('.stat').forEach(s => {
    const d = s.querySelector('div'), m = d.textContent.match(/^([\d.]+)(.*)$/)
    if (!m) return
    s._c = { d, n: +m[1], suf: m[2], dec: m[1].includes('.') ? 1 : 0 }
    d.textContent = (0).toFixed(s._c.dec) + m[2]; io.observe(s)
  })
  off.push(() => io.disconnect())

  // ---- FAQ: smooth height accordion (WAAPI)
  $$('.faq details').forEach(d => {
    const s = d.querySelector('summary'), p = d.querySelector('p')
    on(s, 'click', e => {
      e.preventDefault(); d._a?.cancel()
      const h0 = d.offsetHeight, opening = !d.open
      let h1
      if (opening) { d.open = true; h1 = d.offsetHeight }
      else { d.open = false; h1 = d.offsetHeight; d.open = true; d.dataset.c = 1 }
      d.style.overflow = 'hidden'
      if (opening) p.animate({ opacity: [0, 1], transform: ['translateY(-8px)', 'none'] }, { duration: 520, delay: 90, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' })
      else p.animate({ opacity: [1, 0] }, { duration: 200, fill: 'forwards' })
      const a = d._a = d.animate({ height: [h0 + 'px', h1 + 'px'] }, { duration: 420, easing: 'cubic-bezier(.16,1,.3,1)' })
      a.onfinish = () => { d.open = opening; delete d.dataset.c; d.style.overflow = ''; d._a = null; p.getAnimations().forEach(x => x.cancel()) }
      a.oncancel = () => { d.style.overflow = '' }
    })
  })

  // ---- desktop pointer system: tilt + spotlight, magnetic buttons
  if (fine) {
    let cur = null
    on(document, 'pointermove', e => {
      const el = e.target.closest?.(FX)
      if (cur && cur !== el) cur.style.rotate = ''
      if (!(cur = el)) return
      const r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5, m = Math.hypot(px, py)
      el.style.setProperty('--mx', e.clientX - r.left + 'px'); el.style.setProperty('--my', e.clientY - r.top + 'px')
      el.style.setProperty('--nx', px.toFixed(3)); el.style.setProperty('--ny', py.toFixed(3))
      el.style.rotate = el._deg && m > .01 ? `${-py} ${px} 0 ${(m * 2 * el._deg).toFixed(2)}deg` : ''
    }, { passive: true })
    on(document.documentElement, 'pointerleave', () => { if (cur) cur.style.rotate = '' })
    $$('.btn').forEach(b => {
      on(b, 'pointermove', e => { const r = b.getBoundingClientRect(); b.style.translate = `${(e.clientX - r.left - r.width / 2) * .22}px ${(e.clientY - r.top - r.height / 2) * .3}px` })
      on(b, 'pointerleave', () => { b.style.translate = '' })
    })
  }
  // ---- one rAF loop: scroll parallax, progress, marquee speed + skew
  const prog = document.createElement('div'); prog.className = 'prog'; document.body.append(prog); off.push(() => prog.remove())
  const par = []
  if (wide) {
    $$('.stat').forEach((el, k) => par.push([el, el.closest('.cards'), [.07, -.05, .1][k % 3], '--py']))
    const hv = $('.hero-video'); if (hv) par.push([hv, hero, -.12, '--py'])
    const st = $('.stats'); if (st) par.push([st, st, .12, '--bgy'])
    $$('.ind>div').forEach((el, k) => par.push([el, el.parentElement, (k % 2 ? -1 : 1) * .03, '--py']))
  }
  const tracks = $$('.track').map(t => { const o = { t, a: t.getAnimations?.()[0], h: false, r: 1 }; on(t, 'pointerenter', () => o.h = true); on(t, 'pointerleave', () => o.h = false); return o })
  const skewEls = $$('.logos,.closing')
  let y0 = scrollY, v = 0, sk = 0, first = true, raf2
  const frame = () => {
    const y = scrollY, dv = y - y0; y0 = y; v += (dv - v) * .12
    const vh = innerHeight, max = document.documentElement.scrollHeight - vh
    if (dv || first) {
      first = false
      par.forEach(([el, ref, p, name]) => { const r = ref.getBoundingClientRect(); el.style.setProperty(name, ((r.top + r.height / 2 - vh / 2) * p).toFixed(1) + 'px') })
      prog.style.transform = `scaleX(${max > 0 ? clamp(y / max, 0, 1).toFixed(4) : 0})`
    }
    tracks.forEach(o => { o.r += ((o.h ? .25 : 1 + clamp(Math.abs(v) * .35, 0, 6)) - o.r) * .08; if (o.a) o.a.playbackRate = o.r })
    sk += (clamp(v * .25, -9, 9) - sk) * .1
    skewEls.forEach(e => e.style.setProperty('--sk', sk.toFixed(2)))
    raf2 = requestAnimationFrame(frame)
  }
  frame(); off.push(() => cancelAnimationFrame(raf2))
  return () => off.forEach(f => f())
}
