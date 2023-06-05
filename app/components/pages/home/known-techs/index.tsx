import { SectionTitle } from '@/app/components/section-title'
import { KnownTech } from './known-tech'
import { Knowntech as IknownTech } from '@/app/types/projects'

type KnownTechsProps = {
  techs: IknownTech[]
}

export const KnownTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((techs) => (
          <KnownTech key={techs.name} tech={techs} />
        ))}
      </div>
    </section>
  )
}
