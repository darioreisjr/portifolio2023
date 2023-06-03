import { HeroSection } from './components/pages/home/hero-section'
import { HighLightedProjects } from './components/pages/home/highlighted-projects'
import { KnownTechs } from './components/pages/home/known-techs'
import { WorkExperience } from './components/pages/home/work-experience'
import page from './projects/page'
import { HomePageData } from './types/page-info'
import { fetchHygraphQuery } from './ultils/fetch-hygraph-query'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `

  return fetchHygraphQuery(
    query,
    60 * 60 * 24, // 24 hours
  )
}

export default async function Home() {
  const { page: pageData } = await getPageData()
  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs />
      <HighLightedProjects />
      <WorkExperience />
    </>
  )
}
