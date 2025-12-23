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

// ---- Props hero section ----

import { ProjectsAndromeda } from '@jctrejosi/components-seed'
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

const professionalExperience = [
  {
    name: 'GAIA',
    logo: logoGaia,
    role: 'desarrollador de software / investigador',
    description:
      'desarrollo de aplicaciones y prototipos para proyectos de investigación en ambientes inteligentes y sistemas adaptativos. apoyo en automatización, análisis de datos y desarrollo de soluciones orientadas a investigación académica.',
    technologies: [
      'python',
      'flask',
      'react',
      'docker',
      'linux',
      'análisis de datos',
    ],
    link: {
      url: 'https://gaia.manizales.unal.edu.co/grupo_inv/grupo-de-investigacion-en-ambientes-inteligentes-adaptativos-gaia',
      text: 'website',
    },
  },
  {
    name: 'Aranda Software',
    logo: logoAranda,
    role: 'frontend developer',
    description:
      'desarrollo y mantenimiento de aplicaciones web empresariales tipo saas. creación de interfaces reutilizables, consumo de apis y trabajo colaborativo bajo arquitecturas escalables.',
    technologies: [
      'react',
      'typescript',
      'redux',
      'axios',
      'css modules',
      'git',
    ],
    link: {
      url: 'https://arandasoft.com/en/',
      text: 'website',
    },
  },
  {
    name: 'Roiback Latam',
    logo: logoRoiback,
    role: 'full stack developer',
    description:
      'participación en el desarrollo de soluciones web para el sector hotelero. implementación de funcionalidades frontend y backend, optimización de flujos y soporte a plataformas en producción.',
    technologies: [
      'javascript',
      'react',
      'node.js',
      'apis rest',
      'sql',
      'docker',
    ],
    link: {
      url: 'https://en.roiback.com/',
      text: 'website',
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
          dotLabel: '/Hi there',
          dotColor: 'var(--base-color-6)',
          backgroundColor: 'var(--bg-secondary)',
        },
        {
          component: <WorkSectionAntlia />,
          dotLabel: '/Expertices',
          dotColor: 'var(--base-color-4)',
          backgroundColor: 'var(--bg-primary)',
        },
        {
          component: <WorkSectionAndromeda items={professionalExperience}  />,
          dotLabel: '/Professional Experience',
          dotColor: 'var(--base-color-4)',
          backgroundColor: 'var(--bg-primary)',
        },
        {
          component: <ProjectsAndromeda />,
          dotLabel: '/Projects',
          dotColor: 'var(--dark-100)',
          backgroundColor: 'var(--bg-secondary)',
        },
        {
          component: <ContactFormAndromeda sendTo="contact@myportfolio.com" backgroundImage={bgCircuitBoard} />,
          dotLabel: '/Contact me',
          dotColor: 'var(--dark-100)',
          backgroundColor: 'var(--bg-secondary)',
        },
      ]}
    />
  )
}
