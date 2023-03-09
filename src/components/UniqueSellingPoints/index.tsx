import { LinkType } from "@/graphql/generated/graphql"
import Image from "next/image"

interface IUniqueSellingPointsProps {
  title: string
  sellingPoints: {
    title: string
    text?: string | null
    link?: {
      name: string,
      target?: string | null,
      type: LinkType,
      url: string
    }[]
    image?: {
      url: string
    } | null
  }[]
}

export function UniqueSellingPoints({ title, sellingPoints }: IUniqueSellingPointsProps) {
  return (
    <section>
      <h4>{title}</h4>
      {sellingPoints?.length > 0 && (
        <ul>
          {sellingPoints.map(point => (
            <li key={point.title}>
              <p>{point.title}</p>
              <p>{point.text}</p>

              {point.link && point.link.length > 0 && (
                <ul>
                  {point.link.map(item => (
                    <li key={item.url}>
                      <a href={item.url} target={item.target ?? ''}>
                        {item.name} - {item.type}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {point.image && (
                <Image src={point.image.url} width={200} height={200} alt="" />
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
