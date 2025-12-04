import {
  ContactFormAndromeda,
  HeroSectionAndromeda,
  IntroductionSectionAndromeda,
  ScrollSnapAndromeda,
  WorkSectionAndromeda,
} from '@jctrejosi/components-seed'
import styles from './styles.module.css'

// ---- Assets ----

import bgWorldMap from '@/assets/images/bg_world_map.svg'
import bgCircuitBoard from '@/assets/images/circuit_board.svg'
import imageProfile from '@/assets/images/imageProfile1.png'
import logoAranda from '@/assets/images/logo-aranda.webp'
import logoGaia from '@/assets/images/logo-gaia.png'
import logoRoiback from '@/assets/images/logo-roiback.svg'
import bgMatrix from '@/assets/images/matrix_bg.png'

// ---- Props hero section ----

export const translationsHeroSection = {
  title_web: {
    es: 'Desarrollador ',
    en: 'Web ',
    pt: 'Web ',
  },
  title_developer: {
    es: 'web',
    en: 'Developer',
    pt: 'Desenvolvedor',
  },
  subtitle: {
    es: 'Me gusta crear productos frontend sólidos y escalables con excelentes experiencias de usuario.',
    en: 'I like to craft solid and scalable frontend products with great user experiences.',
    pt: 'Gosto de criar produtos frontend sólidos e escaláveis com ótimas experiências de usuário.',
  },
  highlight_1: {
    es: 'Altamente capacitado en mejora progresiva, sistemas de diseño e ingeniería de interfaces.',
    en: 'Highly skilled at progressive enhancement, design systems & UI Engineering.',
    pt: 'Altamente qualificado em aprimoramento progressivo, sistemas de design e engenharia de UI.',
  },
  highlight_2: {
    es: 'Experiencia comprobada en la creación de productos exitosos para clientes en varios países.',
    en: 'Proven experience building successful products for clients across several countries.',
    pt: 'Experiência comprovada na criação de produtos bem-sucedidos para clientes em vários países.',
  },
  name: {
    es: 'Juan Carlos Trejos Iglesias',
    en: 'Juan Carlos Trejos Iglesias',
    pt: 'Juan Carlos Trejos Iglesias',
  },
  address: {
    es: 'Manizales, Colombia',
    en: 'Manizales, Colombia',
    pt: 'Manizales, Colombia',
  },
  email: {
    es: 'jctrejosi@unal.edu.co',
    en: 'jctrejosi@unal.edu.co',
    pt: 'jctrejosi@unal.edu.co',
  },
  phone: {
    es: '(+57) 314 885 4358',
    en: '(+57) 314 885 4358',
    pt: '(+57) 314 885 4358',
  },
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
      className={styles.home}
      sections={[
        {
          component: (
            <HeroSectionAndromeda imageProfile={imageProfile} backgroundImage={bgWorldMap} backgroundImageRight={bgCircuitBoard} translations={translationsHeroSection} style={{
              '--subtitle-color': 'var(--base-color-5)',
            }} />
          ),
          dotLabel: 'Init',
          dotColor: 'var(--base-color-12)',
        },
        {
          component: <IntroductionSectionAndromeda backgroundImage={bgCircuitBoard} />,
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
          component: <ContactFormAndromeda sendTo="contact@myportfolio.com" backgroundImage={bgCircuitBoard} />,
          dotLabel: 'Contact me',
          dotColor: 'var(--dark-100)',
          backgroundColor: 'var(--bg-secondary)',
        },
      ]}
    />
  )
}
