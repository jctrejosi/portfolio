import { Section } from '@/components/Section'
import { expertise, sections } from '@/pages/Home/sources'

export const Expertise = () => (
  <Section {...sections.expertise}>
    <ul className="list">
      {expertise.map(({ Icon, title, subtitle, description }) => (
        <li className="list-item" key={title}>
          <div className="item-backdrop" aria-hidden="true" />
          <div className="item-aside">
            <div className="item-icon">
              <Icon />
            </div>
          </div>
          <div className="item-content">
            <h3 className="item-title">{title}</h3>
            <p className="item-subtitle">{subtitle}</p>
            <p className="item-text">{description}</p>
          </div>
        </li>
      ))}
    </ul>
  </Section>
)
