'use client'

import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { SiWhatsapp, SiTiktok } from 'react-icons/si'

const MOCK_CONTACTS = [
  {
    url: 'https://github.com/darioreisjr',
    icon: <FiGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/darioreisjr/',
    icon: <FiLinkedin />,
  },
  {
    url: 'https://instagram.com/darioreisjr',
    icon: <FiInstagram />,
  },
  {
    url: 'https://github.com/darioreisjr',
    icon: <SiWhatsapp />,
  },
  {
    url: 'https://tiktok.com/darioreisjr',
    icon: <SiTiktok />,
  },
]

export const HeroSection = () => {
  const handleContact = () => {
    const contactSections = document.querySelector('#contact')
    if (contactSections) {
      contactSections.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-center bg-cover bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row ">
        <div className="w-full lg:max-w-[530px]:">
          <p className="font-mono text-purple-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Dario Reis</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Sou Dario Reis, tenho 27 anos, sou desenvolvedor focado no front-end
            e venho constantemente aprimorando meus conhecimentos em HTML, CSS,
            JavaScript, ReactJS, Java . Estou cursando Análise e Desenvolvimento
            de Sistemas na Faculdade Estácio, atualmente estou no terceiro
            semestre, e estudo tambem pela plataforma da alura.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px] ">
            {Array.from({ length: 7 }).map((index) => (
              <TechBadge name="Next.js" />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="shadow-button w-max" onClick={handleContact}>
              Entre em contato
              <HiChevronDoubleRight size={18} />
            </Button>

            <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={420}
          src="/images/profile-pic.png"
          alt="foto do perfil do Dario Reis"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
