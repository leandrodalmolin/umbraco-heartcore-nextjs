import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { IPageContent } from "../../graphql/types"
import { ROOT_SLUG } from "../../lib/constants"
import { getPageContentBySlug } from "../../lib/umbraco-heartcore"
import { normalizeSlug } from "../../util/normalizer"

interface IPageProps {
  content: IPageContent
  preview?: boolean
}

export default function Page({ content, preview }: IPageProps) {
  const { isFallback } = useRouter()

  if (isFallback) return <p>Loading...</p>

  return (
    <main>
      <h1>This is [...slug].tsx</h1>

      <h2>Hero</h2>
      <p>{content.heroTitle}</p>
      <p>{content.heroSubtitle}</p>
      {content.heroImage.cropUrl && (
        <Image src={content.heroImage.cropUrl} width={400} height={400} alt="" priority />
      )}

      {content.elements?.length > 0 && (
        <>
          <h2>Elements</h2>
          <ul>
            {content.elements.map(({ title, text, image, showLargeImage }) => (
              <li key={title}>
                <h4>{title}</h4>
                <article dangerouslySetInnerHTML={{ __html: text }}></article>
                {image && showLargeImage && (
                  <Image src={image.large} width={400} height={400} alt="" />
                )}
                {image && !showLargeImage && (
                  <Image src={image.small} width={200} height={200} alt="" />
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      <h2>Unique Selling Points</h2>
      <h4>{content.uniqueSellingPointsTitle}</h4>
      {content.uniqueSellingPoints?.length > 0 && (
        <>
          <h5>Selling Points</h5>
          <ul>
            {content.uniqueSellingPoints.map(point => (
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
        </>
      )}
    </main>
  )
}

export const getStaticProps: GetStaticProps<any, { slug: [] }> = async ({ params, preview = false }) => {
  const normalizedSlug = params?.slug
    ? normalizeSlug(params?.slug)
    : ROOT_SLUG

  const content = await getPageContentBySlug(normalizedSlug, preview) || null

  if (!content) {
    return {
      notFound: true
    }
  }

  return {
    props: { content, preview },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: [] } },
      { params: { slug: ['home-leandro'] } },
    ],
    fallback: true
  }
}