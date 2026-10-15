import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  label: string
  children: ReactNode
}

export const Section = ({ id, label, children }: SectionProps) => (
  <section id={id} className="section">
    <h2 className="section-heading">{label}</h2>
    {children}
  </section>
)
