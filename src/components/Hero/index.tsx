import Image from "next/image"

interface IHeroProps {
  title: string
  subtitle: string
  image: string | null
}

export function Hero({ title, subtitle, image = null }: IHeroProps) {
  return (
    <section>
      <h2>Hero</h2>
      <p>{title}</p>
      <p>{subtitle}</p>
      {image && <Image src={image} width={400} height={400} alt="" priority />}
    </section>
  )
}