import { PAGE_CONTENT_BY_SLUG_QUERY } from "../src/graphql/queries"

/**
 * Fetch API
 */
interface IFetchAPIVariables {
  preview: boolean
  variables: any
}

async function fetchAPI(query: string, { variables, preview }: IFetchAPIVariables) {
  const res = await fetch('https://graphql.umbraco.io', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Api-Key': process.env.UMBRACO_API_KEY,
      'Umb-Project-Alias': process.env.UMBRACO_PROJECT_ALIAS,
    } as any,
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

/**
 * Queries
 */
export async function getPageContentBySlug(slug: string, preview: boolean = false) {
  const data = await fetchAPI(
    PAGE_CONTENT_BY_SLUG_QUERY,
    {
      preview,
      variables: {
        url: slug
      }
    }
  )

  return data.content;
}