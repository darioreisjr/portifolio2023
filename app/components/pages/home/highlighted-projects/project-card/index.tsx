import Image from 'next/image'
import Capa from '../../../../../../public/images/exemploprojeto.png'
import { VscExtensions } from 'react-icons/vsc'
import { TechBadge } from '@/app/components/tech-badge'
import { Link } from '@/app/components/link'
import { FiChevronsRight } from 'react-icons/fi'

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          alt=""
          src={Capa}
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <VscExtensions className="text-purple-800  h-[20px] w-[20px]" />
          MarioBross
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          repudiandae minus ullam. Explicabo ipsa nobis iste, excepturi quisquam
          corporis sed reprehenderit assumenda. Necessitatibus, rem nisi nulla
          tenetur libero modi laboriosam aut quasi, minus id velit voluptate et,
          omnis veniam! Rem itaque voluptate ut id? Excepturi repudiandae
          officiis commodi omnis totam!
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px] ">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="/projects/mariobross">
          Ver projeto <FiChevronsRight />
        </Link>
      </div>
    </div>
  )
}
