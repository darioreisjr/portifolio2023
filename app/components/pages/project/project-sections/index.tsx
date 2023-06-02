import Image from 'next/image'

export const ProjectSections = () => {
  const sections = [
    {
      title: 'Login',
      image:
        'https://cdn.pixabay.com/photo/2021/12/07/19/03/login-6853900_1280.png',
    },
    {
      title: 'Home',
      image:
        'https://cdn.pixabay.com/photo/2019/06/19/14/55/online-4285034_1280.png',
    },
  ]
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {section.title}
          </h2>
          <Image
            src={section.image}
            alt={`Imagem da sessão ${section.title}`}
            width={1080}
            height={372}
            className="w-full aspect-auto rounded-lg object-cover"
            unoptimized
          />
        </div>
      ))}
    </section>
  )
}
