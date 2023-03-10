import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { ROOT_SLUG } from "../../lib/constants"
import { normalizeSlug } from "../../util/normalizer"
import { Hero } from "@/components/Hero"
import { TextAndImage } from "@/components/TextAndImage"
import { UniqueSellingPoints } from "@/components/UniqueSellingPoints"
import { client } from "../../lib/apollo-client"
import { getPageBySlugQuery } from "@/graphql/queries/get-page-by-slug"
import { Frontpage } from "@/graphql/generated/graphql"

interface IPageProps {
  content: Frontpage
  preview?: boolean
}

export default function Page({ content, preview }: IPageProps) {
  const { isFallback } = useRouter()

  if (isFallback) return <p>Loading...</p>

  return (
    <div>
      {content.heroTitle && content.heroSubtitle && (
        <Hero
          title={content.heroTitle}
          subtitle={content.heroSubtitle}
          image={content.heroImage ? String(content.heroImage.cropUrl) : null}
        />
      )}

      {content.elements && content.elements.length > 0 && (
        <ul>
          {/* TODO: Find out how to handle elements types  */}
          {content.elements.map(({ title, text, image, showLargeImage }: any) => (
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
      )}

      {content.uniqueSellingPointsTitle && content.uniqueSellingPoints && (
        // TODO fix type
        <UniqueSellingPoints
          title={content.uniqueSellingPointsTitle}
          sellingPoints={content.uniqueSellingPoints as any}
        />
      )}
    </div>
  )
}

export const getStaticProps: GetStaticProps<any, { slug: [] }> = async ({ params, preview = false }) => {
  const normalizedSlug = params?.slug
    ? normalizeSlug(params?.slug)
    : ROOT_SLUG

  const { data } = await client.query({
    query: getPageBySlugQuery,
    variables: {
      url: normalizedSlug
    }
  })

  if (!data.content) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      content: data.content,
      preview
    },
  }
}