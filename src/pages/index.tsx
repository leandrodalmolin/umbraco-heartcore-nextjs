import Image from "next/image"
import { IPageContent } from "../../graphql/types";
import { ROOT_SLUG } from "../../lib/constants";
import { getPageContentBySlug } from "../../lib/umbraco-heartcore"

interface IHomeProps {
  content: IPageContent
  preview: boolean
}

export default function Home({ content, preview }: IHomeProps) {
  const {
    elements,
    uniqueSellingPoints,
    uniqueSellingPointsTitle,
    heroTitle,
    heroSubtitle,
    heroImage
  } = content

  return (
    <>
      <main>
        <h1>Home</h1>

        <h2>Hero</h2>
        <p>{heroTitle}</p>
        <p>{heroSubtitle}</p>
        <Image src={heroImage.cropUrl} width={400} height={400} alt="" priority />

        <h2>Elements</h2>
        <ul>
          {elements.map(({ title, text, image, showLargeImage }) => (
            <li key={title}>
              <h4>{title}</h4>
              <article dangerouslySetInnerHTML={{ __html: text }}></article>
              {showLargeImage && (
                <Image src={image.large} width={400} height={400} alt="" />
              )}
              {!showLargeImage && (
                <Image src={image.small} width={200} height={200} alt="" />
              )}
            </li>
          ))}
        </ul>

        <h2>Unique Selling Points</h2>
        <h4>{uniqueSellingPointsTitle}</h4>
        <h5>Selling Points</h5>
        <ul>
          {uniqueSellingPoints.map(point => (
            <li key={point.title}>
              <p>{point.title}</p>
              <p>{point.text}</p>
              <ul>
                {point.link.map(item => (
                  <li key={item.url}>
                    <a href={item.url} target={item.target ?? ''}>
                      {item.name} - {item.type}
                    </a>
                  </li>
                ))}
              </ul>
              <Image src={point.image.url} width={200} height={200} alt="" />
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const content = await getPageContentBySlug(ROOT_SLUG, preview) || []
  return {
    props: { content, preview },
  }
}