import { ArrowUpRightIcon } from '@/components/icons'
import { Section } from '@/components/Section'
import { projects, sections } from '@/pages/Home/sources'

export const Projects = () => (
  <Section {...sections.projects}>
    <ul className="list">
      {projects.map(({ name, type, image, url, description }) => (
        <li className="list-item" key={name}>
          <div className="item-backdrop" aria-hidden="true" />
          <div className="item-content">
            <h3 className="item-title">
              <a className="link" href={url} target="_blank" rel="noreferrer noopener">
                <span className="link-overlay" aria-hidden="true" />
                <span>{name}</span>
                <ArrowUpRightIcon className="link-icon" />
              </a>
            </h3>
            <p className="item-text">{description}</p>
            <ul className="pill-list" aria-label="Tipo de proyecto">
              <li>
                <span className="pill">{type}</span>
              </li>
            </ul>
          </div>
          <img
            className="item-aside item-image item-image--cover"
            src={image}
            alt={`Captura de ${name}`}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  </Section>
)
