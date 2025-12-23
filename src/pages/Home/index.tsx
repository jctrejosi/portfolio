import {
  ContactFormAntlia,
  HeroSectionAntlia,
  IntroductionSectionAndromeda,
  ProjectsAndromeda,
  ScrollSnapAndromeda,
  WorkSectionAndromeda,
  WorkSectionAntlia,
} from '@jctrejosi/components-seed'

// ---- Assets ----

import bgCircuitBoard from '@/assets/images/circuit_board.svg'
import logoAranda from '@/assets/images/logo-aranda.webp'
import logoGaia from '@/assets/images/logo-gaia.png'
import logoRoiback from '@/assets/images/logo-roiback.svg'
import { translationsIntroduction } from './translations'

// ---- Props hero section ----

const logos = [
  { image: 'logo1', url: 'https://example.com', alt: 'logo 1' },
  { image: 'logo2', url: 'https://example.com', alt: 'logo 2' },
  { image: 'logo3', url: 'https://example.com', alt: 'logo 3' },
  { image: 'logo1', url: 'https://example.com', alt: 'logo 4' }, // puedes repetir para más items
]

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
            <HeroSectionAntlia
              mainTitle="TAMAL SEN"
              subtitle="Software engineer, front end & app developer."
              items={logos}
              backgroundImage={'heroBg'}
            />
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
          component: <ContactFormAntlia />,
          dotLabel: '/Contact me',
          dotColor: 'var(--dark-100)',
          backgroundColor: 'var(--bg-secondary)',
        },
      ]}
    />
  )
}
