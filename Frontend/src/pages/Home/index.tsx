import { Header } from '@/components/Header'
import { Spotlight } from '@/components/Spotlight'
import { sections } from '@/pages/Home/sources'

import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Expertise } from './sections/Expertise'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export const Home = () => (
  <div className="page-root">
    <Spotlight />
    <div className="page">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <div className="page-inner">
        <Header />
        <main id="contenido" className="main">
          <About />
          <Expertise />
          <Experience />
          <Projects />
          {sections.skills.hidden ? null : <Skills />}
          <Contact />
        </main>
      </div>
    </div>
  </div>
)
