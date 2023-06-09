'use client'
import { SectionTitle } from '@/app/components/section-title'
import { KnownTech } from './known-tech'
import { KnownTech as IknownTech } from '@/app/types/projects'
import { motion } from 'framer-motion'

type KnownTechsProps = {
  techs: IknownTech[]
}

export const KnownTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((techs, i) => (
          <motion.div
            key={techs.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <KnownTech tech={techs} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
