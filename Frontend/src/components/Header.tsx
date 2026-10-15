import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { navItems, profile, socialLinks } from '@/pages/Home/sources'

const sectionIds = navItems.map(({ id }) => id)

/** Highlights the nav item of the section currently on screen. */
const useActiveSection = () => {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const updateActiveSection = () => {
      const reference = window.scrollY + window.innerHeight * 0.4
      let current = sectionIds[0]

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top + window.scrollY <= reference) {
          current = id
        }
      })

      // Al final de la página la última sección nunca cruza la línea de referencia
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1
      if (atBottom) {
        current = sectionIds[sectionIds.length - 1]
      }

      setActiveId((previous) => (previous === current ? previous : current))
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return activeId
}

export const Header = () => {
  const activeId = useActiveSection()

  return (
    <header className="header">
      <div>
        <h1 className="header-name">
          <Link to="/">{profile.name}</Link>
        </h1>
        <h2 className="header-role">{profile.role}</h2>
        <p className="header-tagline">{profile.tagline}</p>
        <nav className="nav" aria-label="Secciones de la página">
          <ul className="nav-list">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a className={`nav-link${activeId === id ? ' is-active' : ''}`} href={`#${id}`}>
                  <span className="nav-indicator" aria-hidden="true" />
                  <span className="nav-text">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="social" aria-label="Redes sociales">
          {socialLinks
            .filter((socialLink) => !socialLink.hidden)
            .map(({ label, url, Icon, external }) => (
              <li key={label}>
                <a
                  className="social-link"
                  href={url}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer noopener' : undefined}
                  aria-label={external ? `${label} (abre en una pestaña nueva)` : label}
                  title={label}
                >
                  <Icon />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </header>
  )
}
