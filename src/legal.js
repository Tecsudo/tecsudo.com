import { brand } from './brand.js'

const updated = '11 October 2026'
const place = brand.address.join(', ')

const who = `${brand.legalName}. We are based in ${place}. Email ${brand.email}.`

export const legalPages = {
  terms: {
    path: '/terms',
    title: 'Terms of Service',
    updated,
    sections: [
      {
        heading: 'Who we are',
        body: [
          who,
          `This website is run by ${brand.legalName}. These terms cover your use of the site.`,
        ],
      },
      {
        heading: 'Acceptance',
        body: [
          'By using this website, you agree to these terms. If you do not agree, please stop using the site.',
        ],
      },
      {
        heading: 'The site is not an offer',
        body: [
          'The site describes our services. That description is general information. It is not an offer, a quote, or a promise that we will take on work.',
        ],
      },
      {
        heading: 'A separate written agreement',
        body: [
          'A project starts only under a separate written agreement between you and us. These terms do not set fees, scope, timelines, or deliverables.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          `The text, design, graphics, and other material on this site belong to ${brand.legalName}, or are used with permission. You may read them for your own information. You may not copy or reuse them for a commercial purpose without our written permission.`,
        ],
      },
      {
        heading: 'Acceptable use',
        body: [
          'Use the site lawfully. Do not try to disrupt it, interfere with other visitors, or send unlawful, harmful, or misleading content through the contact form.',
        ],
      },
      {
        heading: 'Contact-form submissions',
        body: [
          'If you send a message, you confirm that the name, email, company, and message are accurate and that you may share them with us. We use them to reply to you, as described in our Privacy Policy.',
        ],
        links: [{ href: '/privacy', label: 'Privacy Policy' }],
      },
      {
        heading: 'Disclaimer of warranties',
        body: [
          'The site is provided as is and as available. We do not promise that it will be uninterrupted, error-free, or suitable for a particular purpose. Content can change and may be incomplete.',
        ],
      },
      {
        heading: 'Limitation of liability',
        body: [
          `To the extent allowed by the law of ${brand.jurisdiction}, we are not liable for loss or damage that comes from using this website or relying on its content. Nothing in these terms excludes liability that the law does not allow us to exclude.`,
        ],
      },
      {
        heading: 'Governing law',
        body: [
          `These terms are governed by the law of ${brand.jurisdiction}. Disputes about them are brought in ${brand.venue}.`,
        ],
      },
      {
        heading: 'Changes to these terms',
        body: [
          'We may update these terms. The date at the top of this page is the date of the latest version. If you keep using the site after a change, you accept the updated terms.',
        ],
      },
      {
        heading: 'Contact',
        body: [
          `Questions about these terms: ${brand.legalName}, ${place}. Email ${brand.email}.`,
        ],
        links: [{ href: `mailto:${brand.email}`, label: brand.email }],
      },
    ],
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy Policy',
    updated,
    sections: [
      {
        heading: 'Who we are',
        body: [
          `${who} ${brand.legalName} is the controller of personal data collected through this website.`,
        ],
      },
      {
        heading: 'Data we collect',
        body: [
          'If you use the contact form, we collect your name, email address, company if you choose to give one, and your message.',
          'We do not ask you to create an account on this site.',
        ],
      },
      {
        heading: 'Why we use it',
        body: [
          'We use those details to reply to your enquiry.',
        ],
      },
      {
        heading: 'Web3Forms',
        body: [
          'The contact form is handled by Web3Forms, our processor. Web3Forms receives the form fields and sends the enquiry to us by email.',
        ],
      },
      {
        heading: 'Cloudflare Web Analytics',
        body: [
          'Cloudflare Web Analytics runs on every visit. It is cookieless. It provides aggregate visit information and does not use a cookie to recognise you.',
        ],
      },
      {
        heading: 'Google Analytics',
        body: [
          'Google Analytics cookies and events run only after you choose Accept. Until then, Google Analytics stays off.',
          'Your choice is stored in this browser under the localStorage key tecsudo-consent. The value is granted if you accept, or denied if you decline.',
        ],
      },
      {
        heading: 'How long we keep enquiries',
        body: [
          'We keep enquiry records long enough to respond and to keep a business record of the conversation. We do not keep them once that purpose has passed.',
        ],
      },
      {
        heading: 'Transfers outside Pakistan',
        body: [
          `When you send the contact form, or when the analytics tools above run, data may be processed outside ${brand.jurisdiction} by Web3Forms, Google, and Cloudflare.`,
        ],
      },
      {
        heading: 'Access, correction, and deletion',
        body: [
          `You can ask for access to the personal data we hold about you, for a correction, or for deletion. Email ${brand.email}.`,
        ],
      },
      {
        heading: 'Children',
        body: [
          'This site is not directed at children. We do not knowingly collect personal data from children.',
        ],
      },
      {
        heading: 'Changes',
        body: [
          'We may update this policy. The date at the top of this page shows when it was last changed.',
        ],
      },
      {
        heading: 'Contact',
        body: [
          `Privacy questions: ${brand.legalName}, ${place}. Email ${brand.email}.`,
        ],
        links: [{ href: `mailto:${brand.email}`, label: brand.email }],
      },
      {
        heading: 'Cookie Policy',
        body: [
          'How we use the consent choice, Google Analytics, and the Cloudflare beacon is set out in our Cookie Policy.',
        ],
        links: [{ href: '/cookies', label: 'Cookie Policy' }],
      },
    ],
  },
  cookies: {
    path: '/cookies',
    title: 'Cookie Policy',
    updated,
    sections: [
      {
        heading: 'Who we are',
        body: [who],
      },
      {
        heading: 'Your consent choice',
        body: [
          'We store your analytics choice in this browser under the localStorage key tecsudo-consent. The stored value is granted or denied. That key is local storage, not a cookie.',
        ],
      },
      {
        heading: 'Google Analytics cookies',
        body: [
          'After you Accept, we load Google Analytics 4. Google may then set analytics cookies, commonly named _ga and _ga_ followed by a measurement id, and we may send events such as page views and clicks on booking links.',
          'If tecsudo-consent is denied, or if you have not chosen yet, those cookies and events stay off.',
        ],
      },
      {
        heading: 'Cloudflare Web Analytics',
        body: [
          'A Cloudflare Web Analytics beacon runs on every visit. It is cookieless. It does not read tecsudo-consent, and Decline does not turn it off.',
        ],
      },
      {
        heading: 'Accept, Decline, and Cookie settings',
        body: [
          'Accept stores granted in tecsudo-consent and allows Google Analytics cookies and events.',
          'Decline stores denied in tecsudo-consent and keeps Google Analytics off.',
          'Cookie settings is the control that reopens the choice, so you can accept or decline again. It lives in the footer.',
        ],
      },
    ],
  },
}
