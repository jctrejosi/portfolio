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
import logoGaia from '@/assets/images/logo-gaia.png'
import logoRoiback from '@/assets/images/logo-roiback.svg'
import contabdsi from '@/assets/images/projects/contabdsi.png'
import crm from '@/assets/images/projects/crm.png'
import daisy_bots from '@/assets/images/projects/daisy-bots.png'
import dracardona from '@/assets/images/projects/dracardona.png'
import ecommerce from '@/assets/images/projects/ecommerce.png'
import geoportal from '@/assets/images/projects/geoportal.png'
import ori from '@/assets/images/projects/ori.png'
import paimon from '@/assets/images/projects/paimon.png'
import proddsi from '@/assets/images/projects/proddsi.png'
import punto_c from '@/assets/images/projects/punto-c.png'
import sismico from '@/assets/images/projects/sismico.png'
import terraiaco from '@/assets/images/projects/terraiaco.png'

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
const navSectionKeys = ['about', 'experience', 'projects', 'contact'] as const

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
    logo: logoGaia,
    role: 'Desarrollador / Investigador',
    description:
      'Desarrollo web desde cero, diseño de software, configuración de servidores y mantenimiento de aplicaciones modernas usando metodologías ágiles y buenas prácticas.',
    technologies: ['php', 'laravel', 'vue', 'react', 'docker', 'linux', 'sql', 'análisis de datos'],
    url: 'https://gaia.manizales.unal.edu.co/grupo_inv/grupo-de-investigacion-en-ambientes-inteligentes-adaptativos-gaia',
  },
  {
    name: 'Aranda Software',
    logo: logoAranda,
    role: 'Frontend developer',
    description:
      'Fortalecí mi conocimiento en arquitectura de software y devops, desarrollando frontend en React, creando componentes reutilizables y trabajando bajo Scrum con despliegues en Azure.',
    technologies: ['react', 'devops', 'azure', 'typescript', 'styled-components', 'git'],
    url: 'https://arandasoft.com/en/',
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
    url: 'https://en.roiback.com/',
  },
]

/* ------------------------------------
---------- DESCARGAS ------------------
-------------------------------------- */

export const downloads = [
  { label: 'Ver CV completo', url: '/files/cv.pdf' },
  { label: 'Ver historial laboral', url: '/files/historial_laboral.pdf' },
]

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
    name: 'Mercaldas · Ecommerce',
    type: 'Comercio electrónico',
    image: ecommerce,
    url: 'https://ecommerce.jcti.xyz',
    description:
      'Tienda en línea con catálogo, cotizador, pedidos y entrega, más apps de picking y delivery y un bot de compras con IA.',
  },
  {
    name: 'Punto C',
    type: 'Restaurante: reservas y operación',
    image: punto_c,
    url: 'https://restaurante.jcti.xyz',
    description:
      'Sitio y sistema para restaurante: carta, reservas de mesa, pedidos y paneles de cocina, meseros y administración en tiempo real.',
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
    name: 'ORI · Movilidad internacional',
    type: 'Gestión universitaria',
    image: ori,
    url: 'https://ori.jcti.xyz',
    description:
      'Aplicación para la Oficina de Relaciones Internacionales de la UNAL: convocatorias, movilidad entrante y saliente, documentos, roles y auditoría.',
  },
  {
    name: 'CRM Mercaldas',
    type: 'Analítica y campañas',
    image: crm,
    url: 'https://crm.jcti.xyz',
    description:
      'Panel para gestionar clientes, analítica y campañas, con IA que redacta y explica campañas y modelos de clustering, propensión y uplift.',
  },
  {
    name: 'PRODDSI',
    type: 'Producción y abastecimiento',
    image: proddsi,
    url: 'https://production.jcti.xyz',
    description:
      'Panel de producción con compras, inventario, MRP, calidad, mantenimiento, trazabilidad e indicadores OEE para la planta.',
  },
  {
    name: 'CONTABDSI',
    type: 'Modernización contable',
    image: contabdsi,
    url: 'https://finances.jcti.xyz',
    description:
      'Interfaz web de contabilidad general: plan de cuentas, terceros y compañías, con asistente contable de IA y migración gradual del sistema heredado.',
  },
  {
    name: 'TerraiaCo',
    type: 'Asistente IA para tierras',
    image: terraiaco,
    url: 'https://terraexpert.jcti.xyz',
    description:
      'Asistente conversacional que ayuda a evaluar terrenos: valoración de precio, riesgos, revisión legal de documentos e inspección de campo.',
  },
  {
    name: 'Paimon',
    type: 'APIs de IA multimodal',
    image: paimon,
    url: 'https://paimon.jcti.xyz',
    description:
      'Servicios de IA para transcripción de audio, generación y edición de imágenes, eliminación de fondo, texto a voz y búsqueda semántica (RAG).',
  },
  {
    name: 'Daisy bots',
    type: 'Bots de WhatsApp',
    image: daisy_bots,
    url: 'https://bot-platform.jcti.xyz',
    description:
      'Plataforma para operar bots de WhatsApp: panel web, API y webhooks para automatizar conversaciones y atención.',
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
