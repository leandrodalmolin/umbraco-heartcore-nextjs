import { graphql } from "../generated"

export const getPageBySlugQuery = graphql(`
  query GetPageBySlug($url: String!) {
    content(url: $url) {
      ...Hero
      ...UnigueSellingPoints
      ...Elements
    }
  }

  fragment Hero on HeroComposition {
    heroTitle
    heroSubtitle
    heroImage {
      cropUrl(width: 1980, height: 430, cropMode: CROP)
    }
  }

  fragment Elements on ElementsComposition {
    elements {
      ... on TextAndImage {
        title
        text
        showLargeImage
        image {
          small: cropUrl(width: 320, height: 240, cropMode: CROP)
          medium: cropUrl(width: 480, height: 360, cropMode: CROP)
          large: cropUrl(width: 1024, height: 768, cropMode: CROP)
        }
      }
    }
  }

  fragment UnigueSellingPoints on UniqueSellingPointsComposition {
    uniqueSellingPointsTitle
    uniqueSellingPoints {
      ... on UniqueSellingPoint {
        title
        text
        link {
          name
          target
          type
          url
        }
        image {
          url
        }
      }
    }
  }
`)