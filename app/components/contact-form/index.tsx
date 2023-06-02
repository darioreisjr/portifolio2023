'use client'

import { Button } from '../button'
import { SectionTitle } from '../section-title'
import { BiSend } from 'react-icons/bi'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { type } from 'os'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email().min(3).max(60),
  message: z.string().min(10).max(500),
})

type contactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const { handleSubmit, register } = useForm<contactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = (data: contactFormData) => {
    console.log(data)
  }

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="Contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />

        <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-purple-600"
            {...register('name')}
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-purple-600"
            {...register('email')}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-purple-600"
            {...register('message')}
            maxLength={500}
          />

          <Button className="mt-6 w-max mx-auto shadow-button">
            Enviar Mensagem <BiSend size={18} />
          </Button>
        </form>
      </div>
    </section>
  )
}
