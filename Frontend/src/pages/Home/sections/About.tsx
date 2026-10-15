import { Section } from '@/components/Section'
import { about, sections } from '@/pages/Home/sources'

export const About = () => (
  <Section {...sections.about}>
    {about.map(({ text, variant }) => (
      <p className={variant ? `about-paragraph about-${variant}` : 'about-paragraph'} key={text}>
        {text}
      </p>
    ))}
  </Section>
)
