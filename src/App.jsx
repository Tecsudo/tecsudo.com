import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import { initMotion } from './motion.js'
import { brand } from './brand.js'
import { sendContact } from './contact.js'
import { initAnalytics, getConsent, setAnalyticsConsent } from './analytics.js'
import { services, industries, tools, faqs } from './data.js'

function Logo() {
  const [failed, setFailed] = useState(false)
  if (failed) return <span className="logo">{brand.name}</span>
  return <img className="logo-img" src={brand.logoSrc} alt={brand.name} onError={() => setFailed(true)} />
}

function Nav() {
  return (
    <nav><div className="wrap">
      <a href="#top"><Logo /></a>
      <div className="links"><a href="#services">Services</a><a href="#industries">Industries</a></div>
            <a className="btn pill" href="#contact">Book a free call</a>
    </div></nav>
  )
}

function Hero() {
  return (
    <header id="top" className="dark hero">
      <video className="hero-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
        <source src="/hero-bg-v3.mp4" type="video/mp4" />
      </video>
      <div className="hero-scrim" aria-hidden="true" />
      <canvas className="hero-fx" aria-hidden="true" />
      <div className="hero-viz" aria-hidden="true">
        <svg className="hv" style={{ top: '22%', right: '9%', '--z': 1, '--dl': '0s' }} viewBox="0 0 120 70" width="150"><g fill="var(--brand)">{[26, 40, 32, 52, 44].map((h, k) => <rect key={k} className="gr" style={{ '--k': k }} x={8 + k * 22} y={62 - h} width="12" height={h} rx="2" opacity=".75" />)}</g></svg>
        <svg className="hv" style={{ top: '44%', right: '24%', '--z': .6, '--dl': '-2s' }} viewBox="0 0 120 70" width="140"><path className="dr" pathLength="1" d="M6 56 C 24 50, 30 22, 48 30 S 80 50, 96 18 L 114 10" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" /></svg>
        <svg className="hv" style={{ top: '14%', right: '30%', '--z': 1.4, '--dl': '-4s' }} viewBox="0 0 70 70" width="84"><circle cx="35" cy="35" r="24" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="7" /><circle className="dr" pathLength="1" style={{ strokeDasharray: '.72 1' }} cx="35" cy="35" r="24" fill="none" stroke="var(--brand)" strokeWidth="7" strokeLinecap="round" transform="rotate(-90 35 35)" /></svg>
      </div>
      <div className="wrap">
      <div>
        <span className="tag animate-rise" style={{ '--d': '.1s' }}>VISUALIZE. ANALYZE. DECIDE.</span>
        <h1><span className="ln"><span style={{ '--d': '.2s', '--k': 1 }}>Dashboards</span></span><span className="ln"><span style={{ '--d': '.32s', '--k': -.6 }}>your team</span></span><span className="ln"><span className="grad" style={{ '--d': '.44s', '--k': 1.3 }}>actually uses.</span></span></h1>
        <div className="cta"><a className="btn animate-rise" style={{ '--d': '.75s' }} href="#contact">Book a free strategy call</a><a className="btn ghost animate-rise" style={{ '--d': '.88s' }} href="#services">Explore our services →</a></div>
      </div>
      <p className="animate-rise" style={{ '--d': '.65s' }}>Business intelligence built around how your leaders make decisions, so the numbers are clear, current, and trusted.</p>
    </div></header>
  )
}

const BX = [30, 48, 38, 66, 84]
function Deco({ i }) {
  const n = [[380, 300], [430, 270], [430, 330], [480, 300], [515, 270]], L = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]]
  const ln = { stroke: 'currentColor', opacity: .45 }
  if (i === 0) return <g>{BX.map((h, k) => <rect key={k} className="gr" style={{ '--k': k }} x={372 + k * 28} y={350 - h} width="18" height={h} rx="2" fill="var(--brand)" opacity=".75" />)}<path className="dr" pathLength="1" d="M381 318 L409 302 L437 312 L465 284 L493 266" stroke="var(--brand)" strokeWidth="2" /></g>
  if (i === 1) return <g>{L.map(([a, b], k) => <line key={k} className="dr" pathLength="1" style={{ '--k': k }} x1={n[a][0]} y1={n[a][1]} x2={n[b][0]} y2={n[b][1]} {...ln} />)}{n.map(([x, y], k) => <circle key={k} className="nd" style={{ '--k': k }} cx={x} cy={y} r="7" fill="var(--brand)" />)}</g>
  if (i === 2) return <g>{[0, 1, 2].map(k => <rect key={k} className="st" style={{ '--k': k }} x={352 + k * 62} y="290" width="48" height="34" rx="6" fill="var(--brand)" fillOpacity="0" stroke="var(--brand)" />)}<path d="M400 307 H414 M462 307 H476" {...ln} /><g className="flow"><circle r="4.5" fill="var(--brand)" /><animateMotion dur="3s" repeatCount="indefinite" path="M360 307 H520" /></g></g>
  if (i === 3) return <g>{[0, 1, 2, 3].map(k => <rect key={k} className="gr" style={{ '--k': k }} x={360 + k * 50} y={350 - (24 + k * 22)} width="44" height={24 + k * 22} rx="3" stroke="var(--brand)" />)}<g className="flow"><circle r="5" fill="var(--brand)" /><animateMotion dur="4s" repeatCount="indefinite" path="M382 318 L432 296 L482 274 L532 252" /></g></g>
  if (i === 4) return <g><rect x="350" y="268" width="84" height="76" rx="6" {...ln} /><path className="dr" pathLength="1" d="M360 328 L378 306 L396 316 L414 288 L426 296" stroke="var(--brand)" strokeWidth="2" /><rect x="444" y="268" width="76" height="44" rx="6" {...ln} />{[0, 1, 2].map(k => <rect key={k} className="gr" style={{ '--k': k }} x={456 + k * 20} y={304 - [14, 26, 20][k]} width="12" height={[14, 26, 20][k]} rx="2" fill="var(--brand)" opacity=".7" />)}<rect x="444" y="322" width="60" height="18" rx="9" {...ln} /><circle className="flow" cy="331" r="6" fill="var(--brand)"><animate attributeName="cx" values="453;495;453" dur="4s" repeatCount="indefinite" /></circle></g>
  return <g>{[0, 1, 2].map(k => <g key={k} className="wl" style={{ '--k': k }}><ellipse cx="435" cy={338 - k * 26} rx="52" ry="12" fill="var(--brand-soft)" stroke="var(--brand)" /></g>)}</g>
}

function Services() {
  const [i, setI] = useState(1), [out, setOut] = useState(false), [ink, setInk] = useState({ x: 0, w: 1 })
  const tabs = useRef(null), hold = useRef(false), seen = useRef(false), t = useRef(0)
  const s = services[i], ys = [90, 200, 310]
  const go = k => { if (k === i || t.current) return; setOut(true); t.current = setTimeout(() => { setI(k); setOut(false); t.current = 0 }, 230) }
  useLayoutEffect(() => {
    const m = () => { const b = tabs.current?.children[i]; if (b) setInk({ x: b.offsetLeft, w: b.offsetWidth }) }
    m(); addEventListener('resize', m); document.fonts?.ready.then(m)
    const b = tabs.current?.children[i]; if (b && tabs.current.scrollWidth > tabs.current.clientWidth) tabs.current.scrollTo({ left: b.offsetLeft - 20, behavior: 'smooth' })
    return () => removeEventListener('resize', m)
  }, [i])
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(([e]) => { seen.current = e.isIntersecting }); io.observe(tabs.current)
    const id = setInterval(() => { if (!hold.current && seen.current) go((i + 1) % services.length) }, 6500)
    return () => { clearInterval(id); io.disconnect() }
  }, [i])
  useEffect(() => () => clearTimeout(t.current), [])
  return (
    <section id="services"><div className="wrap" onPointerEnter={() => hold.current = true} onPointerLeave={() => hold.current = false} onFocus={() => hold.current = true} onBlur={() => hold.current = false}>
      <div className="eyebrow">Services</div><h2>What we help with</h2>
      <p className="sub">Six capabilities, each shown as a working data flow.</p>
      <div className="tabs" role="tablist" ref={tabs}>
        {services.map((x, k) => <button key={x.tab} role="tab" aria-selected={k === i} onClick={() => go(k)}>{x.tab}</button>)}
        <span className="ink" style={{ transform: `translateX(${ink.x}px) scaleX(${ink.w})` }} />
      </div>
      <div className="panel" data-out={out ? '1' : undefined}>
        <div key={i}><h3>{s.tab}</h3><p>{s.text}</p><hr /><b>Outcome</b><p>{s.outcome}</p></div>
        <svg key={"s" + i} viewBox="0 0 560 400" fill="none" aria-hidden="true">
          {ys.map((y, k) => (
            <g key={k} style={{ '--k': k }}>
              <rect x="30" y={y - 26} width="130" height="52" rx="6" stroke="rgba(128,128,128,.5)" />
              <text x="95" y={y + 5} textAnchor="middle" fontSize="13" fill="currentColor" opacity=".7">{s.from[k]}</text>
              <path d={`M160 ${y} C 250 ${y},260 200,350 200`} stroke="var(--brand)" strokeWidth="1.6" strokeDasharray="5 7" />
              {[0, 1].map(d => <g key={d} className="flow"><circle r="3.5" fill="var(--brand)" /><animateMotion dur="2.4s" begin={`${-(d * 1.2 + k * .5)}s`} repeatCount="indefinite" path={`M160 ${y} C 250 ${y},260 200,350 200`} /></g>)}
            </g>
          ))}
          <rect className="ring" x="350" y="160" width="170" height="80" rx="8" />
          <rect className="tgt" x="350" y="160" width="170" height="80" rx="8" stroke="var(--brand)" fill="var(--brand-soft)" />
          <text className="tgt" x="435" y="206" textAnchor="middle" fontSize="14" fill="currentColor">{s.to}</text>
          <Deco i={i} />
        </svg>
      </div>
    </div></section>
  )
}

function Stats() {
  const items = [['Projects delivered', '120+'], ['Clients worldwide', '25+', true], ['Average client rating', '4.8/5']]
  return (
    <section className="dark stats"><div className="wrap"><div className="cards">
      {items.map(([l, v, hot]) => <div key={l} className={'stat' + (hot ? ' hot float-y' : '')}><small>{l}</small><div>{v}</div></div>)}
    </div></div></section>
  )
}

function Industries() {
  return (
    <section id="industries" className="dark flush"><div className="wrap">
      <div className="eyebrow">Industries</div><h2>We've worked in<br />your sector</h2>
      <div className="ind">{industries.map(([n, img, pos]) => (
        <div key={n}>
          <img src={`/industries/${img}.jpg`} alt="" loading="lazy" style={{ objectPosition: pos }} />
          <span>{n}</span>
        </div>
      ))}</div>
    </div></section>
  )
}

function Toolkit() {
  return (
    <section><div className="wrap">
      <div className="eyebrow">Tools &amp; platforms</div><h2>Our analytics toolkit</h2>
      <div className="tools">{tools.map(t => <div key={t}>{t}<span>{t.toUpperCase()}</span></div>)}</div>
    </div></section>
  )
}

function Faq() {
  return (
    <section id="faq"><div className="wrap">
      <div className="eyebrow">FAQ</div><h2>Questions we get a lot</h2>
      <div className="faq">{faqs.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}</div>
    </div></section>
  )
}

function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [err, setErr] = useState('')
  const submit = async e => {
    e.preventDefault()
    const f = e.currentTarget, v = k => f.elements[k].value.trim()
    setStatus('sending'); setErr('')
    try {
      await sendContact({ name: v('name'), email: v('email'), company: v('company'), message: v('message'), botcheck: f.elements.botcheck.checked })
      setStatus('sent'); f.reset()
    } catch (x) {
      setErr(x.message === 'not-configured' ? 'The contact form is not set up yet. Please email us directly.' : 'Sorry, something went wrong. Please try again in a moment.')
      setStatus('error')
    }
  }
  return (
    <section id="contact" className="dark contact"><div className="wrap">
      <div>
        <div className="eyebrow left">Let's talk</div>
        <h2>Tell us about<br />your data</h2>
        <p className="lead">Send a message or book a free strategy session. We reply within 24 hours.</p>
        <ul><li>A clear plan for your dashboards</li><li>Honest advice on your BI stack</li><li>No obligation</li></ul>
        <a className="btn ghost" href="#">Book a call →</a>
      </div>
      <form onSubmit={submit}>
        <h3>Contact us</h3>
        <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />
        <label htmlFor="n">Full name</label><input id="n" name="name" required placeholder="Jane Doe" />
        <label htmlFor="e">Email address</label><input id="e" name="email" type="email" required placeholder="jane@company.com" />
        <label htmlFor="c">Company (optional)</label><input id="c" name="company" placeholder="Company, City" />
        <label htmlFor="m">What do you need help with?</label><textarea id="m" name="message" required rows="3" placeholder="Tell us about your data sources and goals" />
        <button className="btn submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</button>
        {status === 'sent' && <div className="sent" role="status">Thanks, your message has been sent. We'll reply within 24 hours.</div>}
        {status === 'error' && <div className="sent err" role="alert">{err}</div>}
      </form>
    </div></section>
  )
}

function Closing() {
  const line = "Let's sort out your data."
  return (
    <div className="closing">
      <div className="track">{[0, 1, 2, 3].map(k => <span key={k}>{line} •</span>)}</div>
      <a className="btn" href="#contact">Book a free strategy call →</a>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div><Logo /><p>End-to-end business intelligence for teams that want to see what's working and move faster.</p></div>
        <div><h4>Explore</h4><a href="#services">Services</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></div>
        <div><h4>Get in touch</h4><p>{brand.address.map((l, i) => <span key={i}>{l}<br /></span>)}</p><p>{brand.email}</p></div>
      </div>
      <div className="fine">© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
    </footer>
  )
}

function Cookie() {
  const [open, setOpen] = useState(() => !getConsent())
  useEffect(() => { initAnalytics() }, [])
  if (!open) return null
  return (
    <div id="cookie" role="dialog" aria-label="Cookie notice">
      <span>We use cookies to analyse traffic and improve your experience. Analytics stay off until you accept.</span>
      <button className="btn ghost" onClick={() => { setAnalyticsConsent(false); setOpen(false) }}>Decline</button>
      <button className="btn" onClick={() => { setAnalyticsConsent(true); setOpen(false) }}>Accept</button>
    </div>
  )
}


// Scroll-reveal + sticky-nav state (ported from databi.me). Runs before first paint so nothing flashes.
const REVEAL = [
  ['.eyebrow, section h2, .sub, .tabs, .panel, .quote, .ctl, .laptop, .research .wrap > *, .contact .wrap > *, .closing .btn', 'reveal'],
  ['.stat', 'reveal-scale'],
  ['.ind > div, .cases > article, .tools > div, .faq details', 'reveal'],
]
function useMotion() {
  useLayoutEffect(() => {
    const nav = document.querySelector('nav')
    const onScroll = () => nav?.classList.toggle('nav-scrolled', window.scrollY > 8)
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })

    const els = []
    REVEAL.forEach(([sel, cls]) => document.querySelectorAll(sel).forEach(el => {
      if (el.closest('.hero')) return
      el.classList.add(cls)
      // stagger siblings that share a parent grid
      const sibs = [...el.parentElement.children].filter(c => c.classList.contains(cls))
      el.style.setProperty('--reveal-delay', Math.min(sibs.indexOf(el), 5) * 70 + 'ms')
      els.push(el)
    }))

    const stop = initMotion()
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)
    if (still) { els.forEach(el => el.classList.add('is-visible')); return () => { removeEventListener('scroll', onScroll); stop() } }
    const io = new IntersectionObserver((entries, o) => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); o.unobserve(e.target) }
    }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
    els.forEach(el => io.observe(el))
    return () => { io.disconnect(); removeEventListener('scroll', onScroll); stop() }
  }, [])
}

export default function App() {
  useMotion()
  return (<><Nav /><Hero /><Services /><Stats /><Industries /><Toolkit /><Faq /><Contact /><Closing /><Footer /><Cookie /></>)
}
