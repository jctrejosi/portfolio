import {
  ContactFormAntlia,
  HeroSectionAntlia,
  IntroductionSectionAndromeda,
  ProjectsAndromeda,
  ScrollSnapAndromeda,
  SkillsAndromeda,
  WorkSectionAndromeda,
  WorkSectionAntlia,
} from '@jctrejosi/components-seed'

// ---- Assets ----

import bgWorlsMap from '@/assets/images/bg_world_map.svg'
import bgCircuitBoard from '@/assets/images/circuit_board.svg'
import logoAranda from '@/assets/images/logo-aranda.webp'
import logoGaia from '@/assets/images/logo-gaia.png'
import logoRoiback from '@/assets/images/logo-roiback.svg'
import { translationsIntroduction } from './translations'

// ---- Props hero section ----
import UnalLogo from '@/assets/logos/UN.svg'
import angular from '@/assets/stack/angular.svg'
import aws from '@/assets/stack/aws.svg'
import azure from '@/assets/stack/azure.svg'
import java from '@/assets/stack/java.svg'
import ollama from '@/assets/stack/ollama.svg'
import postgressql from '@/assets/stack/postgressql.svg'
import python from '@/assets/stack/python.svg'
import react from '@/assets/stack/react.svg'
import spring from '@/assets/stack/spring.svg'
import vue from '@/assets/stack/vue.svg'

const logos = [
  { image: react, url: 'https://react.dev/', alt: 'react logo', text: 'React' },
  { image: vue, url: 'https://vuejs.org/', alt: 'vue logo', text: 'Vue' },
  { image: angular, url: 'https://angular.dev/', alt: 'angular logo', text: 'Angular' },
  { image: python, url: 'https://www.python.org/dev/', alt: 'python logo', text: 'Python' },
  { image: java, url: 'https://dev.java/', alt: 'java logo', text: 'Java' },
  {
    image: postgressql,
    url: 'https://www.postgresql.org/developer/',
    alt: 'postgresql logo',
    text: 'PostgreSQL',
  },
  { image: ollama, url: 'https://docs.ollama.com/', alt: 'ollama logo', text: 'Ollama' },
  { image: spring, url: 'https://spring.io/', alt: 'spring logo', text: 'Spring' },
  { image: aws, url: 'https://developer.amazon.com/', alt: 'aws logo', text: 'AWS' },
  {
    image: azure,
    url: 'https://azure.microsoft.com/es-es/products/devops',
    alt: 'azure logo',
    text: 'Azure',
  },
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
              mainTitle="JUAN TREJOS"
              subtitle="Software engineer, front end & app developer."
              items={logos}
              logo={UnalLogo}
              backgroundImage={bgWorlsMap}
              style={
                {
                  '--bg-container': 'var(--bg-primary)',
                  '--subtitle-color': 'var(--base-color-1)',
                  '--featured-color': 'var(--base-color-5)',
                }
              }
            />
          ),
          dotLabel: 'Init',
          dotColor: 'var(--base-color-5)',
          backgroundColor: 'var(--bg-primary)',
        },
        {
          component: <IntroductionSectionAndromeda socialIcons={socialIcons} backgroundImage={bgCircuitBoard} translations={translationsIntroduction} style={{
            '--icon-color': 'var(--base-color-6)',
            '--icon-color-hover': 'var(--base-color-5)',
          }} />,
          dotLabel: '/Hi there',
          dotColor: 'var(--base-color-6)',
          backgroundColor: 'var(--bg-primary)',
        },
        {
          component: <WorkSectionAntlia style={
            {
              '--item-bg': 'var(--base-color-10)',
              '--item-border-color': 'var(--base-color-4)',
              '--icon-color': 'var(--base-color-4)',
              '--subtitle-color': 'var(--base-color-4)',
            }
          } />,
          dotLabel: '/Expertices',
          dotColor: 'var(--base-color-4)',
          backgroundColor: 'var(--bg-primary)',
        },
        {
          component: <WorkSectionAndromeda items={professionalExperience} style={
            {
              '--item-bg': 'var(--base-color-10)',
              '--item-border-color': 'var(--base-color-5)',
              '--text-color': 'var(--dark-100)',
              '--company-color': 'var(--base-color-1)',
              '--role-color': 'var(--base-color-5)',
              '--subtitle-color': 'var(--base-color-3)',
              '--link-color': 'var(--base-color-5)',
              '--link-color-hover': 'var(--base-color-7)',
            }
          } />,
          dotLabel: '/Professional Experience',
          dotColor: 'var(--base-color-5)',
          backgroundColor: 'var(--bg-primary)',
        },
        {
          component: <ProjectsAndromeda />,
          dotLabel: '/Projects',
          dotColor: 'var(--base-color-6)',
          backgroundColor: 'var(--bg-primary)',
        },
        {
          component: <SkillsAndromeda style={{
            '--bg-item': 'var(--dark-70)',
            '--icon-color': 'var(--base-color-6)',
            '--title-color': 'var(--base-color-1)',
            '--label-color': 'var(--base-color-4)',
            '--value-color': 'var(--base-color-4)',
            '--bg-bar': 'var(--base-color-8)',
            '--gradient-start': 'var(--base-color-4-1)',
            '--gradient-end': 'var(--base-color-4)',
          }} />,
          dotLabel: '/Skills',
          dotColor: 'var(--base-color-4)',
          backgroundColor: 'var(--bg-primary)',
        },
        {
          component: <ContactFormAntlia style={{
            '--accent-color': 'var(--base-color-3)',
            '--subtitle-color': 'var(--base-color-3)',
            '--submit-bg': 'var(--base-color-5)',
            '--submit-color': 'var(--bg-primary)',
          }} />,
          dotLabel: '/Contact me',
          dotColor: 'var(--base-color-5)',
          backgroundColor: 'var(--bg-primary)',
        },
      ]}
    />
  )
}
