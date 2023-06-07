import Image from 'next/image'
import { VscExtensions } from 'react-icons/vsc'
import { TechBadge } from '@/app/components/tech-badge'
import { Link } from '@/app/components/link'
import { FiChevronsRight } from 'react-icons/fi'
import { Project } from '@/app/types/projects'

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full">
        <Image
          width={420}
          height={304}
          alt={`Thumbnail do projeto ${project.title}`}
          src={project.thumbnail.url}
          className="w-full  object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <VscExtensions className="text-purple-800  h-[20px] w-[20px]" />
          {project.title}
        </h3>
        <p className="text-gray-400 my-6">{project.shortDescription}</p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px] ">
          {project.technologies.map((tech) => (
            <TechBadge
              key={`${project.title}-tech-${tech.name}`}
              name={tech.name}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto <FiChevronsRight />
        </Link>
      </div>
    </div>
  )
}
