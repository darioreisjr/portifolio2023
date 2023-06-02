import { Button } from '@/app/components/button'
import { Link } from '@/app/components/link'
import { SectionTitle } from '@/app/components/section-title'
import { TechBadge } from '@/app/components/tech-badge'
import { AiOutlineDoubleLeft } from 'react-icons/ai'
import { FiGithub, FiGlobe } from 'react-icons/fi'

export const Projectdatails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            'url(/images/hero-bg.png) no-repeat center/cover, url(https://cdn.pixabay.com/photo/2016/07/30/20/39/mario-1557973_1280.jpg) no-repeat center/cover',
        }}
      />

      <SectionTitle
        subtitle="projetos"
        title="Mario Bross"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        BookWise é uma plataforma de avaliação de livros que foi desenvolvida
        durante o bootcamp Ignite da Rocketseat. Com apenas um Figma
        precisavamos desenvolver essa aplicação completa Full Stack com Next.js.
      </p>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
        <TechBadge name="Next.js" />
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a
          href="https://github.com/darioreisjr"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="min-w-[180px]">
            <FiGithub size={20} />
            Repositório
          </Button>
        </a>
        <a
          href="https://github.com/darioreisjr"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Repositório
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <AiOutlineDoubleLeft />
        Voltar para projetos
      </Link>
    </section>
  )
}
