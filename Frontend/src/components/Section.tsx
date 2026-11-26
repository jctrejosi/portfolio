import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  label: string
  /** Título visible de la sección; si falta se usa `label`. */
  title?: string
  children: ReactNode
}

export const Section = ({ id, label, title, children }: SectionProps) => (
  <section id={id} className="section">
    <h2 className="section-heading">{title ?? label}</h2>
    {children}
  </section>
)
