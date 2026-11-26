import { useCallback, useState } from 'react'

import { ArrowRightIcon } from '@/components/icons'
import { Section } from '@/components/Section'
import { ServiceModal } from '@/components/ServiceModal'
import { expertise, sections, type ExpertiseItem } from '@/pages/Home/sources'

export const Expertise = () => {
  const [activeService, setActiveService] = useState<ExpertiseItem | null>(null)
  const closeModal = useCallback(() => setActiveService(null), [])

  return (
    <Section {...sections.expertise}>
      <ul className="list">
        {expertise.map((service) => {
          const { Icon, title, description } = service

          return (
            <li className="list-item" key={title}>
              <div className="item-backdrop" aria-hidden="true" />
              <div className="item-aside">
                <div className="item-icon">
                  <Icon />
                </div>
              </div>
              <div className="item-content">
                <h3 className="item-title">{title}</h3>
                <p className="item-text">{description}</p>
                <button
                  type="button"
                  className="service-more"
                  onClick={() => setActiveService(service)}
                  aria-haspopup="dialog"
                >
                  Ver más
                  <ArrowRightIcon className="service-more-icon" />
                </button>
              </div>
            </li>
          )
        })}
      </ul>

      {activeService && <ServiceModal service={activeService} onClose={closeModal} />}
    </Section>
  )
}
