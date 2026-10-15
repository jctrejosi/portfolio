import { ArrowUpRightIcon } from '@/components/icons'
import { Section } from '@/components/Section'
import { downloads, experience, sections } from '@/pages/Home/sources'

export const Experience = () => (
  <Section {...sections.experience}>
    <ul className="list">
      {experience.map(({ name, logo, role, description, technologies, url }) => (
        <li className="list-item" key={name}>
          <div className="item-backdrop" aria-hidden="true" />
          <img
            className="item-aside item-image item-image--contain"
            src={logo}
            alt={`Logo de ${name}`}
            loading="lazy"
          />
          <div className="item-content">
            <h3 className="item-title">
              <a className="link" href={url} target="_blank" rel="noreferrer noopener">
                <span className="link-overlay" aria-hidden="true" />
                <span>
                  {role} · {name}
                </span>
                <ArrowUpRightIcon className="link-icon" />
              </a>
            </h3>
            <p className="item-text">{description}</p>
            <ul className="pill-list" aria-label="Tecnologías usadas">
              {technologies.map((technology) => (
                <li key={technology}>
                  <span className="pill">{technology}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
    <div className="section-footer">
      {downloads.map(({ label, url }) => (
        <a
          className="link link--strong"
          key={url}
          href={url}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>{label}</span>
          <ArrowUpRightIcon className="link-icon" />
        </a>
      ))}
    </div>
  </Section>
)
