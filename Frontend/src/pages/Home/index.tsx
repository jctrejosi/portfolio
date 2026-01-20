import {
  ContactFormAntlia,
  HeroSectionAntlia,
  IntroductionSectionAndromeda,
  ProjectsAndromeda,
  ScrollSnapAndromeda,
  SkillsAndromeda,
  WorkSectionAndromeda,
  WorkSectionAntlia,
  SocialLinksAndromeda
} from '@jctrejosi/components-seed'

// ---- Assets ----

import bgWorlsMap from '@/assets/images/bg_world_map.svg'
import bgCircuitBoard from '@/assets/images/circuit_board.svg'
import UnalLogo from '@/assets/logos/UN.svg'
import {
  introductionSocialIcons,
  itemsSkillsAndromeda,
  ItemsWorkAntlia,
  ItemsWorkSectionAndromeda,
  logosHeroSection,
  projects,
  socialLinksItems,
  translationsHeroSection,
  translationsIntroduction,
  translationsProjects,
  translationsSkillsAndromeda,
  translationsWorkAntlia,
  translationsWorkSectionAndromeda
} from './sources'

export const Home = () => {
  return (
    <>
      <SocialLinksAndromeda
        items={socialLinksItems}
        style={{
          '--icon-bg': 'var(--dark-100)',
          '--icon-color': 'var(--dark-20)',
        }}
      />
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
            component: <WorkSectionAndromeda
              translations={translationsWorkSectionAndromeda}
              items={ItemsWorkSectionAndromeda}
              style={
              {
                '--item-bg': 'var(--base-color-10)',
                '--item-border-color': 'var(--base-color-3)',
                '--text-color': 'var(--base-color-1)',
                '--company-color': 'var(--base-color-1)',
                '--role-color': 'var(--base-color-3)',
                '--subtitle-color': 'var(--base-color-3)',
                '--link-color': 'var(--base-color-3)',
                '--link-color-hover': 'var(--base-color-7)',
              }
            } />,
            dotLabel: '/Experiencia profesional',
            dotColor: 'var(--base-color-5)',
            backgroundColor: 'var(--bg-primary)',
          },
          {
            component: <ProjectsAndromeda
              translations={translationsProjects}
              items={projects}
              style={{
              '--bg-container': 'var(--bg-primary)',
              '--title-color': 'var(--base-color-1)',
              '--subtitle-color': 'var(--base-color-6)',
              '--link-color': 'var(--text-color)',
              '--link-color-hover': 'var(--base-color-6)',
            }} />,
            dotLabel: '/Proyectos',
            dotColor: 'var(--base-color-6)',
            backgroundColor: 'var(--bg-primary)',
          },
          {
            component: <SkillsAndromeda
              translations={translationsSkillsAndromeda}
              items={itemsSkillsAndromeda}
              style={{
                '--bg-item': 'var(--dark-70)',
                '--subtitle-color': 'var(--base-color-4)',
                '--icon-color': 'var(--base-color-4)',
                '--icon-size': '2rem',
                '--title-color': 'var(--base-color-1)',
                '--label-color': 'var(--base-color-4)',
                '--value-color': 'var(--base-color-4)',
                '--bar-bg': 'var(--dark-80)',
                '--gradient-start': 'var(--base-color-4-1)',
                '--gradient-end': 'var(--base-color-4)',
            }} />,
            dotLabel: '/Habilidades',
            dotColor: 'var(--base-color-4)',
            backgroundColor: 'var(--bg-primary)',
          },
          {
            component: <ContactFormAntlia
              idForm={import.meta.env.VITE_ID_CONTACT}
              style={{
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
    </>
  )
}
