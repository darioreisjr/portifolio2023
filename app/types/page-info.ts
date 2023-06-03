import type { RichTextContent } from '@graphcms/rich-text-types'
import { Knowtech } from './projects'

export type Social = {
  url: string
  iconSvg: string
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }
  technologies: Knowtech[]
  profilePicture: {
    url: string
  }
  socials: Social[]
  knownTechs: Knowtech[]
}

export type HomePageData = {
  page: HomePageInfo
}
