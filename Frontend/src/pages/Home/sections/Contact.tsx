import { ArrowRightIcon } from '@/components/icons'
import { Section } from '@/components/Section'
import { contactItems, sections } from '@/pages/Home/sources'

export const Contact = () => (
  <Section {...sections.contact}>
    <ul className="contact-grid">
      {contactItems.map(({ key, title, value, action, url, Icon, external }) => (
        <li key={key}>
          <a
            className="contact-card"
            href={url}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer noopener' : undefined}
          >
            <span className="contact-icon">
              <Icon />
            </span>
            <span className="contact-title">{title}</span>
            <span className="contact-value">{value}</span>
            <span className="contact-action">
              {action}
              <ArrowRightIcon className="contact-arrow" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  </Section>
)
