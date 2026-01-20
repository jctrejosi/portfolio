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
    es: 'ADMINISTRADOR DE SISTEMAS, DESARROLLADOR DE SOFTWARE Y APPS',
  },
  featuredTitle: {
    es: 'TECNOLOGÍAS QUE USO',
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
------------ SOCIAL-LINKS -------------
--------------------------------------*/
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const socialLinksItems = [
  {
    url: 'https://github.com/jctrejosi',
    icon: <FaGithub />,
    label: 'GitHub',
  },
  {
    url: 'https://www.linkedin.com/in/juan-carlos-trejos-iglesias-26605b142',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
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
import { FaCode, FaDatabase, FaDocker, FaMobileAlt, FaServer, FaTools } from 'react-icons/fa'

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
------- EXPERIENCIA PROFESIONAL -------
--------------------------------------*/

import logoAranda from '@/assets/images/logo-aranda.webp'
import logoGaia from '@/assets/images/logo-gaia.png'
import logoRoiback from '@/assets/images/logo-roiback.svg'

export const translationsWorkSectionAndromeda = {
  title: {
    es: '/Experiencia profesional',
  },
  subtitle: {
    es: 'Lugares donde he trabajado y aprendido',
  },
}

export const ItemsWorkSectionAndromeda = [
  {
    name: 'GAIA',
    logo: logoGaia,
    role: 'Desarrollador / Investigador',
    description:
      'Desarrollo web desde cero, diseño de software, configuración de servidores y mantenimiento de aplicaciones modernas usando metodologías ágiles y buenas prácticas.',
      technologies: [
      'php',
      'laravel',
      'vue',
      'react',
      'docker',
      'linux',
      'sql',
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
    role: 'Frontend developer',
    description:
      'Fortalecí mi conocimiento en arquitectura de software y devops, desarrollando frontend en React, creando componentes reutilizables y trabajando bajo Scrum con despliegues en Azure.',
    technologies: [
      'react',
      'devops',
      'azure',
      'typescript',
      'styled-components',
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
    role: 'Frontend developer',
    description:
      'Desarrollo frontend para sitios corporativos, creación de componentes reutilizables, mantenimiento, atención de bugs y adaptación continua a requerimientos y retroalimentación del cliente.',
    technologies: [
      'vue',
      'python',
      'django',
      'docker',
      'ios',
      'git',
      'sass',
      'javascript',
      'google-analitycs',
    ],
    link: {
      url: 'https://en.roiback.com/',
      text: 'website',
    },
  },
]

/* ------------------------------------
------- PROYECTOS DESTACADOS ----------
--------------------------------------*/
import asec from '@/assets/images/projects/asec.png'
import bh_hotels from '@/assets/images/projects/bh.png'
import bq_hotels from '@/assets/images/projects/bq.png'
import coins from '@/assets/images/projects/coin.png'
import geoportal from '@/assets/images/projects/geoportal.png'
import ilunion_hotels from '@/assets/images/projects/ilunion.png'
import linear_regression from '@/assets/images/projects/regression.png'
import pert_solver from '@/assets/images/projects/pert.png'
import tafer_hotels from '@/assets/images/projects/tafer.png'

export const projects = [
  {
    name: 'Aranda Security Compliance (ASEC)',
    type: 'Plataforma b2b',
    image: asec,
    url: 'https://arandasoft.com/productos/aranda-security-compliance/',
    description:
      'Plataforma empresarial para gestión de cumplimiento en seguridad de la información, auditorías, riesgos y controles en los dispositivos de TI',
  },
  {
    name: 'Linear regression',
    type: 'Herramienta de regresión automatizada',
    image: linear_regression,
    url: 'https://regression.jcti.xyz',
    description:
      'Aplicación web + agente IA, para análisis estadístico que permite cargar archivos y ejecutar una regresión lineal múltiple con interpretación automática de resultados',
  },
  {
    name: 'Geoportal SIMAC',
    type: 'Plataforma de monitoreo ambiental',
    image: geoportal,
    url: 'https://cdiac.manizales.unal.edu.co/geoportal-simac/',
    description:
      'Mapa interactivo para visualización y consulta de datos climatológicos en tiempo real desde estaciones meteorológicas ubicadas en Caldas, Colombia',
  },
  {
    name: 'PERT-Solver',
    type: 'Herramienta para planificar tiempos',
    image: pert_solver,
    url: 'https://pert.jcti.xyz',
    description:
      'Aplicación web + agente IA, para análisis estadístico que permite ingresar actividades y ejecutar un análisis para optimizar',
  },
  /*
  {
    name: 'jcti-coins',
    type: 'Plataforma de pronóstico de monedas',
    image: coins,
    url: 'https://coins.jcti.xyz',
    description:
      'Plataforma web para análisis y predicción de precios de monedas mediante modelos estadísticos',
  },
  */
  {
    name: 'BQ hotels',
    type: 'Plataforma de reservas',
    image: bq_hotels,
    url: 'https://www.bqhoteles.com/es/',
    description:
      'Sistema web de reservas hoteleras, con landings para cada sección del hotel (habitaciones, ofertas, servicios, etc...)',
  },
  {
    name: 'Ilunion hotels',
    type: 'Plataforma de reservas',
    image: ilunion_hotels,
    url: 'https://www.ilunionhotels.com/',
    description:
      'Sistema web de reservas hoteleras, con landings para cada sección del hotel (habitaciones, ofertas, servicios, etc...)',
  },
  {
    name: 'Tafer hotels',
    type: 'Plataforma de reservas',
    image: tafer_hotels,
    url: 'https://www.taferresorts.com.mx/',
    description:
      'Sistema web de reservas hoteleras, con landings para cada sección del hotel (habitaciones, ofertas, servicios, etc...)',
  },
  {
    name: 'BH hotels',
    type: 'Plataforma de reservas',
    image: bh_hotels,
    url: 'https://www.bhhoteles.com/',
    description:
      'Sistema web de reservas hoteleras, con landings para cada sección del hotel (habitaciones, ofertas, servicios, etc...)',
  },
]

export const translationsProjects = {
  title: {
    es: '/Proyectos destacados',
  },
  subtitle: {
    es: 'Ideas convertidas en software',
  },
  show: {
    es: 'ver proyecto',
  },
}

/* ------------------------------------
----------- HABILIDADES ---------------
--------------------------------------*/
export const translationsSkillsAndromeda = {
  title: {
    es: 'Habilidades',
  },
  subtitle: {
    es: 'Mis herramientas como desarrollador',
  },
}

export const itemsSkillsAndromeda = [
  {
    title: 'Frontend',
    items: [
      { label: 'React', value: 90 },
      { label: 'Vue', value: 80 },
      { label: 'Angular', value: 70 },
      { label: 'JavaScript', value: 85 },
      { label: 'HTML5', value: 95 },
      { label: 'CSS', value: 90 },
      { label: 'TypeScript', value: 85 },
      { label: 'Tailwind', value: 80 },
      { label: 'CSS-Modules', value: 90 },
      { label: 'Styled-Components', value: 90 },
      { label: 'Sass', value: 90 },
      { label: 'Jest', value: 80 },
    ],
    icons: FaCode,
  },
  {
    title: 'Backend',
    items: [
      { label: 'Python', value: 85 },
      { label: 'Node.js', value: 80 },
      { label: 'Java', value: 75 },
      { label: 'Express', value: 70 },
      { label: 'Django', value: 80 },
      { label: 'Flask', value: 80 },
      { label: 'Spring Boot', value: 60 },
      { label: 'Spring Boot Test', value: 60 },
      { label: 'Swagger', value: 85 },
      { label: 'Pytest', value: 85 },
      { label: 'REST APIs', value: 90 },
    ],
    icons: FaServer,
  },
  {
    title: 'Bases de datos',
    items: [
      { label: 'PostgreSQL', value: 90 },
      { label: 'MySQL', value: 75 },
      { label: 'MongoDB', value: 75 },
    ],
    icons: FaDatabase,
  },
  {
    title: 'Devops',
    items: [
      { label: 'Docker', value: 80 },
      { label: 'Linux', value: 85 },
      { label: 'CI/CD', value: 70 },
      { label: 'AWS', value: 75 },
      { label: 'Azure', value: 70 },
    ],
    icons: FaDocker,
  },
  {
    title: 'Otras herramientas',
    items: [
      { label: 'Git', value: 90 },
      { label: 'Figma', value: 80 },
      { label: 'SonarQube', value: 80 },
      { label: 'Cypress', value: 70 },
      { label: 'scrum', value: 95 },
      { label: 'Notion', value: 70 },
      { label: 'Jira', value: 90 },
      { label: 'Postman', value: 90 },
    ],
    icons: FaTools,
  },
]

/* ------------------------------------
----------- CONTACTO ------------------
--------------------------------------*/
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa'

export const contactItems = [
  {
    key: 'phone',
    type: 'phone' as const,
    title: 'Teléfono',
    subtitle: '+57 314 885 4358',
    actionText: 'Llamar →',
    url: 'tel:+573148854358',
    icon: <FaPhoneAlt />,
    targetBlank: false,
  },
  {
    key: 'email',
    type: 'email' as const,
    title: 'Email',
    subtitle: 'jctrejosi@unal.edu.co',
    actionText: 'Escribir →',
    url: 'mailto:jctrejosi@unal.edu.com',
    icon: <FaEnvelope />,
    targetBlank: false,
  },
  {
    key: 'whatsapp',
    type: 'whatsapp' as const,
    title: 'WhatsApp',
    subtitle: '+57 314 885 4358',
    actionText: 'Escribir →',
    // formato estándar para wa.me: https://wa.me/<number>?text=<mensaje>
    url: 'https://wa.me/3148854358?text=Hola%2C%20quiero%20hablar%20de%20un%20proyecto',
    icon: <FaWhatsapp />,
    targetBlank: true,
  },
]

