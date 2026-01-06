/* ------------------------------------
------------ HERO SECTION -------------
--------------------------------------*/

// ---- Logos hero section ----
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


export const translationsHeroSection = {
  title: {
    es: 'JUAN TREJOS',
    en: 'JUAN TREJOS',
  },
  subtitle: {
    es: 'INGENIERO DE SOFTWARE, FRONTEND Y DESARROLLADOR DE APLICACIONES.',
    en: 'SOFTWARE INGENIER, FRONTEND AND APP DEVELOPER.',
  },
  featuredTitle: {
    es: 'TECNOLOGÍAS QUE USO',
    en: 'TECH STACK',
  },
}

export const logosHeroSection = [
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

/* ------------------------------------
------------ INTRODUCTION -------------
--------------------------------------*/

export const translationsIntroduction = {
  hi_there: {
    es: '¡Hola!',
  },
  i_am: {
    es: 'Mi nombre es ',
  },
  name: 'Juan Carlos Trejos Iglesias',
  developer_focus: {
    es: ', diseño y desarrollo software a la medida. Si quieres analizar los datos de tu empresa y visualizarlos en dashboards que te ayuden a tomar mejores decisiones, te explico las estadísticas de tu negocio y hacemos una interfaz; si tienes un local y quieres vender tu mercancía en línea, hacemos tu tienda virtual; si quieres un sitio para mostrar tu trabajo profesional, lo creamos juntos; si quieres agendar citas para tu consultorio, lo programamos.'
      + '\n\nBásicamente "tú lo imaginas; yo lo hago real".'
      + '\n\nPero más allá de este script ajustado con IA, me gustan las matemáticas, la estadística y sobre todo el arte; me gusta capturar la esencia de las ideas y crear una solución tecnológica que se adapte a tus necesidades y sea útil, si no lo usas no sirve...',
  },
  enjoy_simplifying: {
    es: 'Disfruto simplificar desafíos técnicos y hacer que la tecnología sea accesible para todos',
  },
  slogan: {
    es: '\n"Este sitio será mi jardín digital".',
  },
  find_me_on: {
    es: 'Encuéntrame en',
  },
}

export const introductionSocialIcons = {
  twitter: 'https://x.com/JuanKTrejosI',
  github: 'https://github.com/jctrejosi',
  instagram: 'https://www.instagram.com/jcti_jk/',
  linkedin: 'https://www.linkedin.com/in/juan-carlos-trejos-iglesias-26605b142/',
  email: 'jctrejosi@unal.edu.co'
}

/* ------------------------------------
---------WORK SECTION ANTLIA ----------
------------ EXPERTICIE ---------------
--------------------------------------*/
import { BsGlobe2 } from 'react-icons/bs'
import { FaCode, FaMobileAlt } from 'react-icons/fa'

export const translationsWorkAntlia = {
  title: {
    es: '/Experticie',
  },
  subtitle: {
    es: 'Áreas en las que me especializo',
  },
}

export const ItemsWorkAntlia = [
  {
    icon: FaCode,
    title: 'Software personalizado',
    subtitle: 'Java · Python · C++',
    description: 'Desarrollo de soluciones de software personalizadas, escalables y mantenibles, integradas a los procesos y sistemas de la organización.',
  },
  {
    icon: BsGlobe2,
    title: 'Desarrollo web',
    subtitle: 'React · Angular · Vue',
    description: 'Diseño y desarrollo de aplicaciones web modernas, enfocadas en usabilidad, rendimiento y escalabilidad, adaptadas a las necesidades del negocio.',
  },
  {
    icon: FaMobileAlt,
    title: 'Desarrollo móvil',
    subtitle: 'Flutter · ReactNative · Android · iOS',
    description: 'Aplicaciones móviles para clientes o uso interno, pensadas para extender y complementar los procesos del negocio.',
  },
]



/* ------------------------------------
------- WORK SECTION ANDROMEDA --------
--------------------------------------*/
import logoAranda from '@/assets/images/logo-aranda.webp'
import logoGaia from '@/assets/images/logo-gaia.png'
import logoRoiback from '@/assets/images/logo-roiback.svg'

export const professionalExperience = [
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

