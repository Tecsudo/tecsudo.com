import { useEffect } from 'react'
import { brand } from './brand.js'

export default function LegalPage({ page }) {
  useEffect(() => {
    document.title = `${page.title} | ${brand.name}`
  }, [page.title])

  return (
    <div className="wrap">
      <main className="legal">
        <h1>{page.title}</h1>
        <p className="legal-updated">Last updated {page.updated}</p>
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.links?.length ? (
              <p>
                {section.links.map((link) => (
                  <a key={link.href} href={link.href}>{link.label}</a>
                ))}
              </p>
            ) : null}
          </section>
        ))}
      </main>
    </div>
  )
}
