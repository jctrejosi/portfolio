import type { IconType } from 'react-icons'
import {
  FaCode,
  FaDatabase,
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaMobileAlt,
  FaPhoneAlt,
  FaServer,
  FaTools,
  FaWhatsapp,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import logoAranda from '@/assets/images/logo-aranda.webp'
import logoUnal from '@/assets/logo_unal.png'
import logoRoiback from '@/assets/images/logo-roiback.svg'
import asec from '@/assets/images/projects/asec.png'
import bq_hotels from '@/assets/images/projects/bq.png'
import clothing from '@/assets/images/projects/clothing.png'
import crm from '@/assets/images/projects/crm.png'
import daisy_bots from '@/assets/images/projects/daisy-bots.png'
import dracardona from '@/assets/images/projects/dracardona.png'
import geoportal from '@/assets/images/projects/geoportal.png'
import punto_c from '@/assets/images/projects/punto-c.png'
import sismico from '@/assets/images/projects/sismico.png'

/* ------------------------------------
-------------- PERFIL -----------------
-------------------------------------- */

export const profile = {
  name: 'Juan Trejos',
  role: 'Administrador de sistemas, desarrollador de software',
  tagline: 'Diseño y desarrollo software a la medida.',
}

/* ------------------------------------
------------ SECCIONES ----------------
-------------------------------------- */

export type Section = { id: string; label: string; hidden?: boolean }

/** Single source of truth for the section ids, labels and page order */
export const sections = {
  about: { id: 'sobre-mi', label: 'Sobre mí' },
  expertise: { id: 'experticia', label: 'Experticia' },
  experience: { id: 'experiencia', label: 'Experiencia' },
  projects: { id: 'proyectos', label: 'Proyectos' },
  // hidden: true oculta la sección (y por tanto su entrada en el menú)
  skills: { id: 'habilidades', label: 'Habilidades', hidden: true },
  contact: { id: 'contacto', label: 'Contacto' },
} satisfies Record<string, Section>

/**
 * Secciones que aparecen en el menú del header, en este orden.
 * "Experticia" queda fuera a propósito: visualmente va dentro del bloque de "Sobre mí".
 */
const navSectionKeys = ['about', 'projects', 'experience', 'contact'] as const

export const navItems: Section[] = navSectionKeys.map((key) => sections[key])

/* ------------------------------------
----------- REDES SOCIALES ------------
-------------------------------------- */

export type SocialLink = {
  label: string
  url: string
  Icon: IconType
  external?: boolean
  /** hidden: true conserva el enlace pero no lo muestra en la cabecera */
  hidden?: boolean
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/jctrejosi', Icon: FaGithub, external: true },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/juan-carlos-trejos-iglesias-26605b142/',
    Icon: FaLinkedin,
    external: true,
  },
  { label: 'X', url: 'https://x.com/JuanKTrejosI', Icon: FaXTwitter, external: true, hidden: true },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/jcti_jk/',
    Icon: FaInstagram,
    external: true,
    hidden: true,
  },
  { label: 'Email', url: 'mailto:jctrejosi@unal.edu.co', Icon: FaEnvelope, hidden: true },
]

/* ------------------------------------
------------- SOBRE MÍ ----------------
-------------------------------------- */

export type AboutParagraph = {
  text: string
  variant?: 'accent'
}

export const about: AboutParagraph[] = [
  {
    text: '¡Hola! Mi nombre es Juan Carlos Trejos, diseño y desarrollo software a la medida. Si quieres analizar los datos de tu empresa y visualizarlos en dashboards que te ayuden a tomar mejores decisiones, te explico las estadísticas de tu negocio y hacemos una interfaz; si tienes un local y quieres vender tu mercancía en línea, hacemos tu tienda virtual; si quieres un sitio para mostrar tu trabajo profesional, lo creamos juntos; si quieres agendar citas para tu consultorio, lo programamos.',
  },
  {
    text: 'Básicamente "tú lo imaginas; yo lo hago real".',
    variant: 'accent',
  },
  {
    text: 'Pero más allá de este script ajustado con IA, me gustan las matemáticas, la estadística y sobre todo el arte; me gusta capturar la esencia de las ideas y crear una solución tecnológica que se adapte a tus necesidades.',
  },
]

/* ------------------------------------
----------- EXPERTICIA ----------------
-------------------------------------- */

export type ExpertiseItem = {
  Icon: IconType
  title: string
  subtitle: string
  description: string
}

export const expertise: ExpertiseItem[] = [
  {
    Icon: FaCode,
    title: 'Software personalizado',
    subtitle: 'Java · Python · C++',
    description:
      'Desarrollo de soluciones de software personalizadas, escalables y mantenibles, integradas a los procesos y sistemas de la organización.',
  },
  {
    Icon: FaGlobe,
    title: 'Desarrollo web',
    subtitle: 'React · Angular · Vue',
    description:
      'Diseño y desarrollo de aplicaciones web modernas, enfocadas en usabilidad, rendimiento y escalabilidad, adaptadas a las necesidades del negocio.',
  },
  {
    Icon: FaMobileAlt,
    title: 'Desarrollo móvil',
    subtitle: 'Android · iOS · Flutter · ReactNative',
    description:
      'Aplicaciones móviles para clientes o uso interno, pensadas para extender y complementar los procesos del negocio.',
  },
]

/* ------------------------------------
------- EXPERIENCIA PROFESIONAL -------
-------------------------------------- */

export type ExperienceItem = {
  name: string
  logo: string
  role: string
  description: string
  technologies: string[]
  url: string
}

export const experience: ExperienceItem[] = [
  {
    name: 'GAIA',
    logo: logoUnal,
    role: 'Investigador / Desarrollador',
    description:
      'Investigador y desarrollador en el grupo de investigación GAIA de la Universidad Nacional de Colombia, sede Manizales: desarrollo web desde cero, diseño de software, configuración de servidores y mantenimiento de aplicaciones modernas, con metodologías ágiles y análisis de datos.',
    technologies: ['php', 'laravel', 'vue', 'react', 'docker', 'linux', 'sql', 'análisis de datos'],
    url: 'https://gaia.manizales.unal.edu.co/grupo_inv/grupo-de-investigacion-en-ambientes-inteligentes-adaptativos-gaia',
  },
  {
    name: 'Aranda Software',
    logo: logoAranda,
    role: 'Frontend developer',
    description:
      'Desarrollo frontend en React con componentes reutilizables bajo Scrum y despliegues en Azure, fortaleciendo arquitectura de software y DevOps. También adquirí experiencia en el control de sistemas mediante scripts para la revisión de vulnerabilidades en dispositivos, reforzando mis conocimientos en ciberseguridad, junto con habilidades en desarrollo y maquetación web y en la construcción de motores de reservas.',
    technologies: ['react', 'devops', 'azure', 'typescript', 'styled-components', 'git'],
    url: 'https://arandasoft.com/en/',
  },
  {
    name: 'Roiback Latam',
    logo: logoRoiback,
    role: 'Frontend developer',
    description:
      'Desarrollo frontend de webs de reservas para hoteles: personalización de páginas de habitaciones, salones, eventos y restaurantes dentro del hotel, gestión de SEO para este tipo de sitios, mantenimiento y adaptación continua a los requerimientos del cliente.',
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
    url: 'https://en.roiback.com/',
  },
]

/* ------------------------------------
---------- DESCARGAS ------------------
-------------------------------------- */

export const downloads = [{ label: 'Ver CV completo', url: '/files/cv.pdf' }]

/* ------------------------------------
------- PROYECTOS DESTACADOS ----------
-------------------------------------- */

export type Project = {
  name: string
  type: string
  image: string
  url: string
  description: string
}

export const projects: Project[] = [
  {
    name: 'Aranda Security Compliance (ASEC)',
    type: 'Plataforma b2b',
    image: asec,
    url: 'https://arandasoft.com/productos/aranda-security-compliance/',
    description:
      'Plataforma empresarial para gestión de cumplimiento en seguridad de la información, auditorías, riesgos y controles en los dispositivos de TI.',
  },
  {
    name: 'Clothing ecommerce',
    type: 'Comercio electrónico',
    image: clothing,
    url: 'https://clothing.jcti.xyz',
    description:
      'Tienda de moda en línea con catálogo, ofertas y novedades, carrito y compra segura, sobre el mismo backend del ecommerce.',
  },
  {
    name: 'Daisy bots',
    type: 'Bots de WhatsApp',
    image: daisy_bots,
    url: 'https://bot-platform.jcti.xyz',
    description:
      'Plataforma para operar bots de WhatsApp: panel web, API y webhooks para automatizar conversaciones y atención.',
  },
  {
    name: 'Dra. Camila Cardona',
    type: 'Reservas para consultorio',
    image: dracardona,
    url: 'https://dracardona.co',
    description:
      'Sitio de reservas para consultorio odontológico, con agenda de citas para pacientes y panel de administración para el equipo.',
  },
  {
    name: 'Restaurantes',
    type: 'Reservas y operación',
    image: punto_c,
    url: 'https://restaurante.jcti.xyz',
    description:
      'Sitio y sistema para restaurante: carta, reservas de mesa, pedidos y paneles de cocina, meseros y administración en tiempo real.',
  },
  {
    name: 'CRM',
    type: 'Analítica y campañas',
    image: crm,
    url: 'https://crm.jcti.xyz',
    description:
      'Panel para gestionar clientes, analítica y campañas, con IA que redacta y explica campañas y modelos de clustering, propensión y uplift.',
  },
  {
    name: 'Geoportal SIMAC',
    type: 'Monitoreo ambiental',
    image: geoportal,
    url: 'https://geoportal.jcti.xyz',
    description:
      'Mapa interactivo para visualizar en tiempo real estaciones hidrometeorológicas, comunitarias y de calidad del aire de Caldas, Colombia.',
  },
  {
    name: 'Monitor sísmico',
    type: 'Respuesta a emergencias',
    image: sismico,
    url: 'https://sismico.jcti.xyz',
    description:
      'Mapa colaborativo para reportar daños y coordinar ayuda tras un sismo, con reportes por app, SMS y voz, deduplicación con IA y bot de asistencia.',
  },
  {
    name: 'BQ hotels',
    type: 'Plataforma de reservas',
    image: bq_hotels,
    url: 'https://www.bqhoteles.com/es/',
    description:
      'Sistema web de reservas hoteleras, con landings para cada sección del hotel (habitaciones, ofertas, servicios, etc...).',
  },
]

/* ------------------------------------
----------- HABILIDADES ---------------
-------------------------------------- */

export type SkillGroup = {
  title: string
  Icon: IconType
  items: { label: string; value: number }[]
}

export const skillGroups: SkillGroup[] = [
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
    Icon: FaCode,
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
    Icon: FaServer,
  },
  {
    title: 'Bases de datos',
    items: [
      { label: 'PostgreSQL', value: 90 },
      { label: 'MySQL', value: 75 },
      { label: 'MongoDB', value: 75 },
    ],
    Icon: FaDatabase,
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
    Icon: FaDocker,
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
    Icon: FaTools,
  },
]

/* ------------------------------------
------------- CONTACTO ----------------
-------------------------------------- */

export type ContactItem = {
  key: string
  title: string
  value: string
  action: string
  url: string
  Icon: IconType
  external?: boolean
}

export const contactItems: ContactItem[] = [
  {
    key: 'phone',
    title: 'Teléfono',
    value: '+57 314 885 4358',
    action: 'Llamar',
    url: 'tel:+573148854358',
    Icon: FaPhoneAlt,
  },
  {
    key: 'email',
    title: 'Email',
    value: 'jctrejosi@unal.edu.co',
    action: 'Escribir',
    url: 'mailto:jctrejosi@unal.edu.co',
    Icon: FaEnvelope,
  },
  {
    key: 'whatsapp',
    title: 'WhatsApp',
    value: '+57 314 885 4358',
    action: 'Escribir',
    // formato estándar para wa.me: https://wa.me/<number>?text=<mensaje>
    url: 'https://wa.me/3148854358?text=Hola%2C%20quiero%20hablar%20de%20un%20proyecto',
    Icon: FaWhatsapp,
    external: true,
  },
]
