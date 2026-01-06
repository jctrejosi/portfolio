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
import UnalLogo from '@/assets/logos/UN.svg'
import {
  introductionSocialIcons,
  ItemsWorkAntlia,
  logosHeroSection,
  professionalExperience,
  translationsHeroSection,
  translationsIntroduction,
  translationsWorkAntlia
} from './sources'

export const Home = () => {
  return (
    <ScrollSnapAndromeda
      sections={[
        {
          component: (
            <HeroSectionAntlia
              translations={translationsHeroSection}
              items={logosHeroSection}
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
          dotLabel: '/Inicio',
          dotColor: 'var(--base-color-5)',
          backgroundColor: 'var(--bg-primary)',
        },
        {
          component: <IntroductionSectionAndromeda
            socialIcons={introductionSocialIcons}
            backgroundImage={bgCircuitBoard}
            translations={translationsIntroduction}
            style={
            {
              '--icon-color': 'var(--base-color-6)',
              '--icon-color-hover': 'var(--base-color-5)',
              }
            }/>,
          dotLabel: '/Sobre mi',
          dotColor: 'var(--base-color-6)',
          backgroundColor: 'var(--bg-primary)',
        },
        {
          component: <WorkSectionAntlia
            items={ItemsWorkAntlia}
            translations={translationsWorkAntlia}
            style={
            {
              '--item-bg': 'var(--base-color-10)',
              '--item-border-color': 'var(--base-color-4)',
              '--icon-color': 'var(--base-color-4)',
              '--subtitle-color': 'var(--base-color-4)',
            }
          } />,
          dotLabel: '/Experticie',
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
          dotLabel: '/Experiencia profesional',
          dotColor: 'var(--base-color-5)',
          backgroundColor: 'var(--bg-primary)',
        },
        {
          component: <ProjectsAndromeda />,
          dotLabel: '/Proyectos',
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
          dotLabel: '/Habilidades',
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
          dotLabel: '/Contáctame',
          dotColor: 'var(--base-color-5)',
          backgroundColor: 'var(--bg-primary)',
        },
      ]}
    />
  )
}
