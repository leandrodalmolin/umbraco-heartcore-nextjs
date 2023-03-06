import { UniqueSellingPointsType } from "@/graphql/types"
import Image from "next/image"

interface IUniqueSellingPointsProps {
  title: string
  sellingPoints: UniqueSellingPointsType[]
}

export function UniqueSellingPoints({ title, sellingPoints }: IUniqueSellingPointsProps) {
  return (
    <section>
      <h4>{title}</h4>
      {sellingPoints?.length > 0 && (
        <>
          <h5>Selling Points</h5>
          <ul>
            {sellingPoints.map(point => (
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
    </section>
  )
}
