import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { IPageContent } from "../graphql/types"
import { ROOT_SLUG } from "../../lib/constants"
import { getPageContentBySlug } from "../../lib/umbraco-heartcore"
import { normalizeSlug } from "../../util/normalizer"
import { Hero } from "@/components/Hero"
import { TextAndImage } from "@/components/TextAndImage"
import { UniqueSellingPoints } from "@/components/UniqueSellingPoints"

interface IPageProps {
  content: IPageContent
  preview?: boolean
}

export default function Page({ content, preview }: IPageProps) {
  const { isFallback } = useRouter()

  if (isFallback) return <p>Loading...</p>

  return (
    <main>
      <Hero
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        image={content.heroImage?.cropUrl}
      />

      {content.elements?.length > 0 && (
        <>
          <h2>Elements</h2>
          <ul>
            {content.elements.map(({ title, text, image, showLargeImage }) => (
              <li key={title}>
                <TextAndImage
                  title={title}
                  text={text}
                  showLargeImage={showLargeImage}
                  image={image}
                />
              </li>
            ))}
          </ul>
        </>
      )}

      <h2>Unique Selling Points</h2>
      <UniqueSellingPoints
        title={content.uniqueSellingPointsTitle}
        sellingPoints={content.uniqueSellingPoints}
      />
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