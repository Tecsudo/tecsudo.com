// Contact form posts to Web3Forms. Set VITE_WEB3FORMS_KEY in .env.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

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
