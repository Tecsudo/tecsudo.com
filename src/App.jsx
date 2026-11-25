import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import { initMotion } from './motion.js'
import { brand } from './brand.js'
import { sendContact } from './contact.js'
import { initAnalytics, getConsent, setAnalyticsConsent } from './analytics.js'
import { services, industries, tools, faqs } from './data.js'
import { legalPages } from './legal.js'
import LegalPage from './LegalPage.jsx'

function Logo() {
  const [failed, setFailed] = useState(false)
  if (failed) return <span className="logo">{brand.name}</span>
  return <img className="logo-img" src={brand.logoSrc} alt={brand.name} onError={() => setFailed(true)} />
}

function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <nav data-open={open || undefined}><div className="wrap">
      <a href="/" className="nav-logo" onClick={close}><Logo /></a>
      <div className="links" onClick={close}>
        <a href="/#services">Services</a><a href="/#results">Results</a><a href="/#industries">Industries</a><a href="/#tools">Toolkit</a><a href="/#faq">FAQ</a>
      </div>
      <a className="btn pill" href="/#contact" onClick={close}>Book a free call</a>
      <button className="burger" type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
    </div></nav>
  )
}

function Hero() {
  return (
    <header id="top" className="dark hero">
      <div className="hero-media" aria-hidden="true">
      <video className="hero-video" autoPlay muted loop playsInline preload="auto">
        <source src="/hero-bg-v3.mp4" type="video/mp4" />
      </video>
      <div className="hero-scrim" />
      <canvas className="hero-fx" />
      <div className="hero-viz">
        <svg className="hv" style={{ top: '22%', right: '9%', '--z': 1, '--dl': '0s' }} viewBox="0 0 120 70" width="150"><g fill="var(--brand)">{[26, 40, 32, 52, 44].map((h, k) => <rect key={k} className="gr" style={{ '--k': k }} x={8 + k * 22} y={62 - h} width="12" height={h} rx="2" opacity=".75" />)}</g></svg>
        <svg className="hv" style={{ top: '44%', right: '24%', '--z': .6, '--dl': '-2s' }} viewBox="0 0 120 70" width="140"><path className="dr" pathLength="1" d="M6 56 C 24 50, 30 22, 48 30 S 80 50, 96 18 L 114 10" fill="none" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" /></svg>
        <svg className="hv" style={{ top: '14%', right: '30%', '--z': 1.4, '--dl': '-4s' }} viewBox="0 0 70 70" width="84"><circle cx="35" cy="35" r="24" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="7" /><circle className="dr" pathLength="1" style={{ strokeDasharray: '.72 1' }} cx="35" cy="35" r="24" fill="none" stroke="var(--brand)" strokeWidth="7" strokeLinecap="round" transform="rotate(-90 35 35)" /></svg>
      </div>
      </div>
      <div className="wrap">
      <div>
        <span className="tag animate-rise" style={{ '--d': '.1s' }}>VISUALIZE. ANALYZE. DECIDE.</span>
        <h1><span className="ln"><span style={{ '--d': '.2s', '--k': 1 }}>Dashboards</span></span><span className="ln"><span style={{ '--d': '.32s', '--k': -.6 }}>your team</span></span><span className="ln"><span className="grad" style={{ '--d': '.44s', '--k': 1.3 }}>actually uses.</span></span></h1>
        <div className="cta"><a className="btn animate-rise" style={{ '--d': '.75s' }} href="/#contact">Book a free strategy call</a><a className="btn ghost animate-rise" style={{ '--d': '.88s' }} href="/#services">Explore our services →</a></div>
      </div>
      <p className="animate-rise" style={{ '--d': '.65s' }}>Business intelligence built around how your leaders make decisions, so the numbers are clear, current, and trusted.</p>
    </div></header>
  )
}

// Service illustrations: minimal, large, grey base with one teal highlight (same visual language as the rest of the site)
const FR = 'rgba(128,128,128,.4)'
const GR = 'rgba(128,128,128,.32)'
const B = 'var(--brand)', B2 = 'var(--brand-2)', BS = 'var(--brand-soft)'
const Tx = ({ children, ...p }) => <text textAnchor="middle" fontSize="14" fill="currentColor" opacity=".65" {...p}>{children}</text>
const Flow = ({ d, n = 2, dur = 2.6, off = 0, dash = true, w = 1.6, op = 1 }) => <>
  <path d={d} stroke={B} strokeWidth={w} strokeDasharray={dash ? '5 7' : undefined} opacity={op} />
  {Array.from({ length: n }, (_, k) => <g key={k} className="flow"><circle r="3.5" fill={B} /><animateMotion dur={`${dur}s`} begin={`${-(k * dur / n + off)}s`} repeatCount="indefinite" path={d} /></g>)}
</>

function Illus({ i }) {
  if (i === 0) { // Data Analytics: revenue trend, last bar highlighted
    const hs = [90, 140, 110, 190, 150, 235], x = k => 86 + k * 68, pts = hs.map((h, k) => [x(k) + 21, 350 - h])
    const line = 'M' + pts.map(p => p.join(' ')).join(' L')
    return <>
      <g style={{ '--k': 0 }}><text x="80" y="62" fontSize="14" fill="currentColor" opacity=".65">Revenue trend</text><path d="M76 78 V350 H500" stroke={FR} /></g>
      <g style={{ '--k': 1 }}>
        {hs.map((h, k) => <rect key={k} className="gr" style={{ '--k': k }} x={x(k)} y={350 - h} width="42" height={h} rx="2" fill={k === 5 ? B : GR} />)}
        <path className="dr" pathLength="1" d={line} stroke={B2} strokeWidth="2.5" strokeLinejoin="round" />
        {pts.map(([px, py], k) => <circle key={k} className="nd" style={{ '--k': k }} cx={px} cy={py} r="5" fill={B2} />)}
      </g>
    </>
  }
  if (i === 1) { // AI & Generative AI: your data -> network -> answer
    const L = [110, 200, 290], H = [80, 160, 240, 320]
    return <>
      <g style={{ '--k': 0 }}>{L.flatMap((ly, a) => H.map((hy, b) => <path key={a + '-' + b} className="dr" pathLength="1" style={{ '--k': a + b }} d={`M80 ${ly} L270 ${hy}`} stroke={FR} opacity=".55" />))}</g>
      <g style={{ '--k': 1 }}>
        {H.map((hy, b) => <Flow key={b} d={`M270 ${hy} L470 200`} n={1} dur={2.4} off={b * .6} dash={false} w={1.6} op={.55} />)}
      </g>
      <g style={{ '--k': 2 }}>
        {L.map((ly, a) => <circle key={a} cx="80" cy={ly} r="10" fill={GR} />)}
        {H.map((hy, b) => <circle key={b} className="nd" style={{ '--k': b }} cx="270" cy={hy} r="10" fill={b === 1 || b === 2 ? B2 : GR} />)}
        <circle className="ring" cx="470" cy="200" r="16" />
        <circle cx="470" cy="200" r="16" fill={B} />
        <path d="M470 191 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6z" fill="#04201f" />
        <Tx x="80" y="372">Your data</Tx><Tx x="270" y="372">Model</Tx><Tx x="470" y="372">Answer</Tx>
      </g>
    </>
  }
  if (i === 2) { // Data Automation: sources -> live dashboard, refreshed hourly
    const Y = [98, 200, 302]
    return <>
      {['CRM', 'Ads', 'Sheets'].map((t, k) => <g key={t} style={{ '--k': k }}>
        <rect x="40" y={Y[k] - 28} width="130" height="56" rx="8" fill="rgba(128,128,128,.07)" stroke={FR} /><Tx x="105" y={Y[k] + 5} fontSize="15">{t}</Tx>
        <Flow d={`M170 ${Y[k]} C 265 ${Y[k]},265 200,360 200`} off={k * .6} />
      </g>)}
      <g style={{ '--k': 3 }}>
        <rect className="ring" x="360" y="146" width="170" height="108" rx="10" />
        <rect x="360" y="146" width="170" height="108" rx="10" fill={BS} stroke={B} />
        <text x="445" y="208" textAnchor="middle" fontSize="17" fontWeight="600" fill="currentColor">Live dashboard</text>
        <text x="445" y="230" textAnchor="middle" fontSize="14" fill="currentColor" opacity=".6">refreshed hourly</text>
        <g transform="translate(437 164)"><g><animateTransform attributeName="transform" type="rotate" from="0 8 8" to="360 8 8" dur="6s" repeatCount="indefinite" /><path d="M14 8a6 6 0 1 1-2-4.500M14 2v3.500h-3.500" stroke={B2} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></g></g>
      </g>
    </>
  }
  if (i === 3) { // Data Strategy: a path through Audit, Model, Build, Scale
    const d = 'M70 320 C 130 320,140 150,190 150 C 250 150,270 178,330 178 C 400 178,420 84,480 84'
    return <>
      <g style={{ '--k': 0 }}><path d={d} stroke={GR} strokeWidth="2.5" strokeLinecap="round" /><path className="dr" pathLength="1" d={d} stroke={B2} strokeWidth="2.5" strokeLinecap="round" /></g>
      <g style={{ '--k': 1 }}><g className="flow"><circle r="5" fill={B} /><animateMotion dur="5s" repeatCount="indefinite" path={d} /></g></g>
      <g style={{ '--k': 2 }}>
        {[[70, 320, 'Audit', 346], [190, 150, 'Model', 126], [330, 178, 'Build', 154]].map(([x, y, t, ty]) => <g key={t}><circle cx={x} cy={y} r="8" fill="currentColor" /><Tx x={x} y={ty}>{t}</Tx></g>)}
        <circle className="ring" cx="480" cy="84" r="14" /><circle cx="480" cy="84" r="13" fill={B} /><Tx x="480" y="56">Scale</Tx>
      </g>
    </>
  }
  if (i === 4) { // Interactive Dashboards: KPI cards, donut, bars, a cursor
    const hs = [40, 78, 56, 112, 66]
    return <>
      <g style={{ '--k': 0 }}><rect x="60" y="62" width="440" height="276" rx="14" fill="rgba(128,128,128,.06)" stroke={FR} /></g>
      <g style={{ '--k': 1 }}>{[56, 36, 76].map((w, k) => <g key={k}><rect x={80 + k * 140} y="84" width="126" height="66" rx="8" fill="var(--paper)" stroke={FR} /><rect className="gr" style={{ '--k': k }} x={96 + k * 140} y="112" width={w} height="9" rx="4.500" fill={B} /></g>)}</g>
      <g style={{ '--k': 2 }}>
        <circle cx="146" cy="258" r="44" stroke={GR} strokeWidth="14" />
        <circle className="dr" pathLength="1" style={{ strokeDasharray: '.62 1' }} cx="146" cy="258" r="44" stroke={B} strokeWidth="14" strokeLinecap="round" transform="rotate(-90 146 258)" />
      </g>
      <g style={{ '--k': 3 }}>
        {hs.map((h, k) => <rect key={k} className="gr" style={{ '--k': k }} x={248 + k * 48} y={314 - h} width="30" height={h} rx="2" fill={k === 3 ? B : GR} />)}
        <g className="flow"><g><animateTransform attributeName="transform" type="translate" values="0 0;-28 24;0 0" dur="5s" repeatCount="indefinite" /><path d="M404 222 v22 l5.500 -5.500 4.500 11 4 -1.800 -4.500 -11 7.500 0z" fill="currentColor" stroke="var(--paper)" strokeWidth="1.5" strokeLinejoin="round" /></g></g>
      </g>
    </>
  }
  // i === 5: Warehousing & Integration: many sources -> one source of truth
  const Y = [82, 162, 242, 322]
  return <>
    {['Postgres', 'Shopify', 'Salesforce', 'CSV'].map((t, k) => <g key={t} style={{ '--k': k }}>
      <rect x="40" y={Y[k] - 24} width="130" height="48" rx="8" fill="rgba(128,128,128,.07)" stroke={FR} /><Tx x="105" y={Y[k] + 5} fontSize="15">{t}</Tx>
      <Flow d={`M170 ${Y[k]} C 270 ${Y[k]},270 202,350 202`} off={k * .5} dash={false} w={1.8} op={.7} />
    </g>)}
    <g style={{ '--k': 4 }}>
      <path d="M360 150 v104 a70 18 0 0 0 140 0 v-104" fill={BS} stroke={B} />
      <path d="M360 202 a70 18 0 0 0 140 0" stroke={B} opacity=".6" />
      <ellipse className="wl" style={{ '--k': 0 }} cx="430" cy="150" rx="70" ry="18" fill={BS} stroke={B} />
      <Tx x="430" y="306">Single source of truth</Tx>
    </g>
  </>
}

function Services() {
  const [i, setI] = useState(1), [out, setOut] = useState(false), [ink, setInk] = useState({ x: 0, w: 1 })
  const tabs = useRef(null), hold = useRef(false), seen = useRef(false), t = useRef(0)
  const s = services[i]
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
        <svg key={"s" + i} viewBox="0 0 560 400" fill="none" aria-hidden="true"><Illus i={i} /></svg>
      </div>
    </div></section>
  )
}

function Stats() {
  const items = [['Projects delivered', '120+', 'Dashboards, pipelines and AI builds'], ['Clients worldwide', '25+', 'Across industries and time zones', true], ['Average client rating', '4.8/5', 'Based on client feedback']]
  return (
    <section id="results" className="dark stats"><div className="wrap">
      <div className="eyebrow">By the numbers</div><h2>A track record you can check</h2>
      <div className="cards">
        {items.map(([l, v, c, hot]) => <div key={l} className={'stat' + (hot ? ' hot float-y' : '')}><small>{l}</small><div>{v}</div><p>{c}</p></div>)}
      </div>
    </div></section>
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
    <section id="tools"><div className="wrap">
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
      await sendContact({ name: v('name'), email: v('email'), company: v('company'), message: `[Interested in: ${v('service')}]\n${v('message')}`, botcheck: f.elements.botcheck.checked })
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
        <p className="lead">Share a few details and we'll reply within 24 hours with next steps.</p>
        <ol className="next">
          <li><b>1</b><span><strong>You tell us the goal</strong>Sources, questions, deadlines. A few lines is enough.</span></li>
          <li><b>2</b><span><strong>Free strategy call</strong>We talk through options and honest tool advice.</span></li>
          <li><b>3</b><span><strong>Clear plan and quote</strong>Scope, timeline and a first deliverable. No obligation.</span></li>
        </ol>
        <a className="mailto" href={`mailto:${brand.email}`}><span className="live-dot" />Prefer email? {brand.email}</a>
      </div>
      <form onSubmit={submit}>
        <h3>Tell us about your project</h3>
        <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />
        <div className="row2">
          <div><label htmlFor="n">Full name</label><input id="n" name="name" required maxLength={120} autoComplete="name" placeholder="Jane Doe" /></div>
          <div><label htmlFor="e">Work email</label><input id="e" name="email" type="email" required maxLength={200} autoComplete="email" placeholder="you@company.com" /></div>
        </div>
        <div className="row2">
          <div><label htmlFor="c">Company <span className="opt">(optional)</span></label><input id="c" name="company" maxLength={160} autoComplete="organization" placeholder="Company name" /></div>
          <div><label htmlFor="s">I'm interested in</label><select id="s" name="service">{[...services.map(x => x.tab), 'Not sure yet'].map(x => <option key={x}>{x}</option>)}</select></div>
        </div>
        <div><label htmlFor="m">What do you need help with?</label><textarea id="m" name="message" required maxLength={4000} rows="4" placeholder="Tell us about your data sources and what you want to achieve" /></div>
        <button className="btn submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</button>
        <p className="consent">By submitting you agree to be contacted about your enquiry. We never share your details.</p>
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
      <a className="btn" href="/#contact">Book a free strategy call →</a>
    </div>
  )
}

const SOCIAL = {
  linkedin: <path d="M4.980 3.500a2.500 2.500 0 1 1 0 5 2.500 2.500 0 0 1 0-5zM3 9.500h4V21H3zM9.500 9.500h3.800v1.600h.1c.5-1 1.800-2 3.800-2 4 0 4.800 2.600 4.800 6V21h-4v-5.100c0-1.200 0-2.800-1.700-2.800s-2 1.300-2 2.700V21h-4z" />,
  facebook: <path d="M14 8V6.500c0-.8.2-1.200 1.300-1.200H17V2h-2.600C11.400 2 10 3.800 10 6.200V8H7.500v3.300H10V22h4V11.300h2.600L17 8z" />,
  instagram: <><rect x="3.500" y="3.500" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.800" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.800" /><circle cx="17.200" cy="6.800" r="1.100" /></>,
}
function Footer({ onOpenCookieSettings }) {
  return (
    <footer>
      <div className="wrap fgrid">
        <div className="fbrand">
          <Logo />
          <p>End-to-end business intelligence for teams that want to see what's working and move faster.</p>
          <div className="social">
            {Object.entries(brand.social).map(([k, href]) => (
              <a key={k} href={href} target="_blank" rel="noopener noreferrer" aria-label={k[0].toUpperCase() + k.slice(1)}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{SOCIAL[k]}</svg>
              </a>
            ))}
          </div>
        </div>
        <div><h4>Explore</h4><a href="/#services">Services</a><a href="/#results">Results</a><a href="/#industries">Industries</a><a href="/#tools">Toolkit</a><a href="/#faq">FAQ</a><a href="/#contact">Contact</a></div>
        <div><h4>What we do</h4>{services.map(x => <a key={x.tab} href="/#services">{x.tab}</a>)}</div>
        <div><h4>Legal</h4><a href="/terms">Terms</a><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><button type="button" className="cookie-settings" onClick={onOpenCookieSettings}>Cookie settings</button></div>
        <div>
          <h4>Get in touch</h4>
          <address>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.800" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-6.200-7-11.500a7 7 0 0 1 14 0C19 14.800 12 21 12 21z" /><circle cx="12" cy="9.500" r="2.500" /></svg>
            <span>{brand.address.map((l, i) => <span key={i}>{l}<br /></span>)}</span>
          </address>
          <a className="frow" href={`mailto:${brand.email}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.800" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
            <span>{brand.email}</span>
          </a>
          <a className="btn pill" href="/#contact">Book a free call</a>
        </div>
      </div>
      <div className="wrap"><div className="fine"><span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span><span>Serving clients worldwide</span></div></div>
    </footer>
  )
}

function Cookie({ open, onClose }) {
  useEffect(() => { initAnalytics() }, [])
  if (!open) return null
  const choose = (granted) => {
    const gaRunning = Boolean(document.querySelector('script[src*="googletagmanager.com/gtag"]'))
    setAnalyticsConsent(granted)
    if (!granted && gaRunning) {
      window.location.reload()
      return
    }
    onClose()
  }
  return (
    <div id="cookie" role="dialog" aria-label="Cookie notice">
      <span>Cookieless analytics runs on every visit. Google Analytics cookies stay off until Accept. <a href="/cookies">Cookie Policy</a></span>
      <button className="btn ghost" onClick={() => choose(false)}>Decline</button>
      <button className="btn" onClick={() => choose(true)}>Accept</button>
    </div>
  )
}


// Scroll-reveal + sticky-nav state (ported from databi.me). Runs before first paint so nothing flashes.
const REVEAL = [
  ['.eyebrow, section h2, .sub, .tabs, .panel, .quote, .ctl, .laptop, .research .wrap > *, .contact .wrap > *, .closing .btn', 'reveal'],
  ['.stat', 'reveal-scale'],
  ['.ind > div, .cases > article, .tools > div, .faq details', 'reveal'],
]
function useMotion(path) {
  useLayoutEffect(() => {
    const nav = document.querySelector('nav')
    const onScroll = () => nav?.classList.toggle('nav-scrolled', window.scrollY > 8)
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })

    const els = []
    REVEAL.forEach(([sel, cls]) => document.querySelectorAll(sel).forEach(el => {
      if (el.closest('.hero') || el.closest('.legal')) return
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
  }, [path])
}

const HOME_TITLE = 'Tecsudo | Dashboards your team actually uses'
const CLIENT_PATHS = new Set(['/', ...Object.values(legalPages).map((page) => page.path)])

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1)
  return pathname
}

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
}

function useRoute() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname))
  const pathRef = useRef(path)

  useLayoutEffect(() => {
    pathRef.current = path
  }, [path])

  useLayoutEffect(() => {
    if (path !== '/') return
    const id = window.location.hash.slice(1)
    if (!id) return
    document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'instant' })
  }, [path])

  useEffect(() => {
    const onPop = () => {
      const next = normalizePath(window.location.pathname)
      const pathChanged = next !== pathRef.current
      setPath(next)
      if (!pathChanged || window.location.hash) return
      setTimeout(scrollToTop, 0)
    }
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return
      let url
      try { url = new URL(anchor.href) } catch { return }
      if (url.origin !== window.location.origin || url.hash) return
      const next = normalizePath(url.pathname)
      if (!CLIENT_PATHS.has(next)) return
      event.preventDefault()
      const destination = next + url.search + url.hash
      const current = window.location.pathname + window.location.search + window.location.hash
      if (current !== destination) history.pushState(null, '', destination)
      setPath(next)
      scrollToTop()
    }
    addEventListener('popstate', onPop)
    document.addEventListener('click', onClick)
    return () => {
      removeEventListener('popstate', onPop)
      document.removeEventListener('click', onClick)
    }
  }, [])

  useEffect(() => {
    if (path === '/') document.title = HOME_TITLE
  }, [path])

  return path
}

function NotFound() {
  useEffect(() => { document.title = 'Page not found | Tecsudo' }, [])
  return (
    <main className="not-found wrap">
      <h1>Page not found</h1>
      <a href="/">Home</a>
    </main>
  )
}

function Home() {
  return (<><Hero /><Services /><Stats /><Industries /><Toolkit /><Faq /><Contact /><Closing /></>)
}

export default function App() {
  const path = useRoute()
  useMotion(path)
  const [cookieOpen, setCookieOpen] = useState(() => !getConsent())
  const page = Object.values(legalPages).find((item) => item.path === path)
  return (
    <>
      <Nav />
      {path === '/' ? <Home /> : page ? <LegalPage page={page} /> : <NotFound />}
      <Footer onOpenCookieSettings={() => setCookieOpen(true)} />
      <Cookie open={cookieOpen} onClose={() => setCookieOpen(false)} />
    </>
  )
}
