import Image from 'next/image'
import LogoBravote from '../../../../../public/images/bravote.png'
import { TechBadge } from '@/app/components/tech-badge'

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={LogoBravote}
            width={40}
            height={40}
            className="rounded-full"
            alt="Logo da empresa Bravote"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.linkedin.com/company/grupobravote"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-purple-500 transition-colors"
          >
            @ Bravo Te
          </a>

          <h4 className="text-gray-300">Porteiro</h4>
          <span className="tex-gray-500">
            {' '}
            mar 2023 - O momento - (3 meses){' '}
          </span>
          <p className="text-gray-400">
            Controlar o acesso às dependências do edifício sob minha
            responsabilidade; Facilidade de comunicação com os moradores e
            demais usuários do condomínio.
          </p>
          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            Competências
          </p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
            <TechBadge name="Comunicação" />
            <TechBadge name="Comunicação" />
            <TechBadge name="Comunicação" />
            <TechBadge name="Comunicação" />
            <TechBadge name="Comunicação" />
            <TechBadge name="Comunicação" />
          </div>
        </div>
      </div>
    </div>
  )
}
