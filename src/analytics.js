// ─── Analytics setup ───────────────────────────────────────────────
// Paste your IDs below. Leave a value empty ('') to switch that tool off.
export const GA_ID = 'G-DY6CMZLE8Q'          // GA4 Measurement ID, e.g. 'G-XXXXXXXXXX'
export const CF_TOKEN = 'b7711dd7cb034242b5cd2b4f09e69bab'       // Cloudflare Web Analytics token (32-character string)
// ───────────────────────────────────────────────────────────────────

const KEY = 'tecsudo-consent'    // stored value: 'granted' | 'denied'

export const getConsent = () => { try { return localStorage.getItem(KEY) } catch { return null } }
const setConsent = v => { try { localStorage.setItem(KEY, v) } catch {} }

const addScript = (src, attrs = {}) => {
  const s = document.createElement('script')
  s.async = true; s.src = src
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v))
  document.head.appendChild(s)
}

// Cloudflare Web Analytics is cookieless, so it loads for every visitor.
function loadCloudflare() {
  if (!CF_TOKEN || document.querySelector('script[data-cf-beacon]')) return
  addScript('https://static.cloudflareinsights.com/beacon.min.js', {
    type: 'module', 'data-cf-beacon': JSON.stringify({ token: CF_TOKEN }),
  })
}

// GA4 loads only after the visitor accepts.
let gaLoaded = false
function loadGA() {
  if (!GA_ID || gaLoaded) return
  gaLoaded = true
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
  addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`)
}

// Track clicks on "Book a call / strategy call" buttons as a GA4 event.
let ctaBound = false
function trackCtas() {
  if (ctaBound) return
  ctaBound = true
  document.addEventListener('click', e => {
    const a = e.target.closest?.('a.btn')
    if (!a || !window.gtag || !/book a/i.test(a.textContent)) return
    window.gtag('event', 'book_call_click', { link_text: a.textContent.trim(), link_location: a.closest('nav') ? 'nav' : (a.closest('section, footer')?.id || 'page') })
  })
}

export function initAnalytics() {
  loadCloudflare()
  if (getConsent() === 'granted') { loadGA(); trackCtas() }
}

export function setAnalyticsConsent(granted) {
  setConsent(granted ? 'granted' : 'denied')
  if (granted) { loadGA(); trackCtas() }
}
