import { HeroSection } from './components/pages/home/hero-section'
import { HighLightedProjects } from './components/pages/home/highlighted-projects'
import { KnownTechs } from './components/pages/home/known-techs'
import { WorkExperience } from './components/pages/home/work-experience'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighLightedProjects />
      <WorkExperience />
    </>
  )
}
