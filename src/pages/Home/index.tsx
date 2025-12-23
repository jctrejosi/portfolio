import {
  ContactFormAndromeda,
  HeroSectionAndromeda,
  IntroductionSectionAndromeda,
  ScrollSnapAndromeda,
  WorkSectionAndromeda,
  WorkSectionAntlia
} from '@jctrejosi/components-seed'

// ---- Assets ----

import bgWorldMap from '@/assets/images/bg_world_map.svg'
import bgCircuitBoard from '@/assets/images/circuit_board.svg'
import imageProfile from '@/assets/images/imageProfile1.png'
import logoAranda from '@/assets/images/logo-aranda.webp'
import logoGaia from '@/assets/images/logo-gaia.png'
import logoRoiback from '@/assets/images/logo-roiback.svg'
import bgMatrix from '@/assets/images/matrix_bg.png'

// ---- Props hero section ----

import { translationsHeroSection, translationsIntroduction } from './translations'

// ---- Props introduction section ----

const socialIcons = {
  twitter: 'https://x.com/JuanKTrejosI',
  github: 'https://github.com/jctrejosi',
  instagram: 'https://www.instagram.com/jcti_jk/',
  linkedin: 'https://www.linkedin.com/in/juan-carlos-trejos-iglesias-26605b142/',
  email: 'jctrejosi@unal.edu.co'
}

// ---- Props work section ----

const projects = [
  {
    name: 'GAIA',
    logo: logoGaia,
    link: {
      url: 'https://gaia.manizales.unal.edu.co/grupo_inv/grupo-de-investigacion-en-ambientes-inteligentes-adaptativos-gaia',
      text: 'Website',
    },
  },
  {
    name: 'Aranda Software',
    logo: logoAranda,
    link: {
      url: 'https://arandasoft.com/en/',
      text: 'Website',
    },
  },
  {
    name: 'Roiback Latam',
    logo: logoRoiback,
    link: {
      url: 'https://en.roiback.com/',
      text: 'Website',
    },
  },
]

export const Home = () => {
  return (
    <ScrollSnapAndromeda
      sections={[
        {
          component: (
            <HeroSectionAndromeda imageProfile={imageProfile} backgroundImage={bgWorldMap} backgroundImageRight={bgCircuitBoard} translations={translationsHeroSection} style={{
              '--subtitle-color': 'var(--base-color-5)',
            }as React.CSSProperties} />
          ),
          dotLabel: 'Init',
          dotColor: 'var(--base-color-12)',
        },
        {
          component: <IntroductionSectionAndromeda socialIcons={socialIcons} backgroundImage={bgCircuitBoard} translations={translationsIntroduction} />,
          dotLabel: 'Hi there',
          dotColor: 'var(--base-color-6)',
          backgroundColor: 'var(--bg-secondary)',
        },
        {
          component: <WorkSectionAndromeda items={projects} backgroundImage={bgMatrix}  />,
          dotLabel: '/Work',
          dotColor: 'var(--base-color-4)',
          backgroundColor: 'var(--bg-primary)',
        },
        {
          component: <WorkSectionAntlia />,
          dotLabel: '/Professional Experience',
          dotColor: 'var(--base-color-4)',
          backgroundColor: 'var(--bg-primary)',
        },
        {
          component: <ContactFormAndromeda sendTo="contact@myportfolio.com" backgroundImage={bgCircuitBoard} />,
          dotLabel: 'Contact me',
          dotColor: 'var(--dark-100)',
          backgroundColor: 'var(--bg-secondary)',
        },
      ]}
    />
  )
}
