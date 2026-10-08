// ─── Contact form backend ──────────────────────────────────────────
// Uses Web3Forms (free): it emails each submission to the address you
// registered. Get a key at https://web3forms.com and paste it below.
export const WEB3FORMS_KEY = '6555804c-933e-405b-97a1-d0559d3c6edf'   // e.g. 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
// ───────────────────────────────────────────────────────────────────

export async function sendContact({ name, email, company, message, botcheck }) {
  if (!WEB3FORMS_KEY) throw new Error('not-configured')
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `New Tecsudo enquiry from ${name}`,
      from_name: 'Tecsudo website',
      name, email, company, message, botcheck,
    }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok || !data.success) throw new Error(data.message || 'failed')
}
