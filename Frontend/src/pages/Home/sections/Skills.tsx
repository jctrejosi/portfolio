import { Section } from '@/components/Section'
import { sections, skillGroups } from '@/pages/Home/sources'

export const Skills = () => (
  <Section {...sections.skills}>
    <div className="skills-grid">
      {skillGroups.map(({ title, Icon, items }) => (
        <article className="skill-card" key={title}>
          <h3 className="skill-card-title">
            <Icon aria-hidden="true" />
            {title}
          </h3>
          <ul className="skill-list">
            {items.map(({ label, value }) => (
              <li key={label}>
                <div className="skill-head">
                  <span>{label}</span>
                  <span className="skill-value">{value}%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-bar" style={{ width: `${value}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </Section>
)
