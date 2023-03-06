import Image from "next/image"

interface ITextAndImageProps {
  title: string
  text: string
  showLargeImage: boolean
  image: {
    small: string
    medium: string
    large: string
  }
}

export function TextAndImage({ title, text, showLargeImage, image }: ITextAndImageProps) {
  return (
    <section>
      <h4>{title}</h4>
      <article dangerouslySetInnerHTML={{ __html: text }}></article>
      {image && showLargeImage && (
        <Image src={image.large} width={400} height={400} alt="" />
      )}
      {image && !showLargeImage && (
        <Image src={image.small} width={200} height={200} alt="" />
      )}
    </section>
  )
}