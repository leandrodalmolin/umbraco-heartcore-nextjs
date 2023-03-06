// Hero types
type HeroCompositionType = {
  heroTitle: string
  heroSubtitle: string
  heroImage: {
    cropUrl: string
  }
}

// Elements types
type TextAndImageElementType = {
  text: string
  title: string
  showLargeImage: boolean
  image: {
    small: string
    medium: string
    large: string
  }
}

type ElementsCompositionType = {
  elements: TextAndImageElementType[]
}

// Unique Selling Points types
type UniqueSellingPointsType = {
  title: string
  text: string
  link: {
    name: string
    target: string | null
    type: string
    url: string
  }[]
  image: {
    url: string
  }
}

type UniqueSellingPointsCompositionType = {
  uniqueSellingPointsTitle: string
  uniqueSellingPoints: UniqueSellingPointsType[]
}

// Pages interfaces
export interface IPageContent extends HeroCompositionType, ElementsCompositionType, UniqueSellingPointsCompositionType { }