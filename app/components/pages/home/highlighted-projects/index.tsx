import { HorizontalDivider } from '@/app/components/divider/horizontal'
import { SectionTitle } from '@/app/components/section-title'
import { ProjectCard } from './project-card'
import { Link } from '@/app/components/link'
import { FiChevronsRight } from 'react-icons/fi'
import { Project } from '@/app/types/projects'

type HighLightedProjectsProps = {
  projects: Project[]
}

export const HighLightedProjects = ({ projects }: HighLightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos <FiChevronsRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
