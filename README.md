This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## GraphQL

- "GraphQL Code Generator" is needed to generate the schemas' types automatically
- The Code Generator already has integration with the most popular GraphQL clients like Apollo, returning typed data directly from the query, making it easier to use
- It is possible to use native fetch, but this needs extra configuration

## Apollo + GraphQL

- When a query has fragments, we need to add the possible types to Apollo's caching settings, otherwise, no data will be returned from fragments
- The possible types addition can be done manually or automatically (see lib/apollo-client.ts)

## To do

- Improve Apollo's data fetching for SSR and SSG:
  - https://dev.to/ivanms1/take-your-next-js-graphql-typescript-setup-to-the-next-level-5b0i
  - https://www.youtube.com/watch?v=syV82gmnPbc
  - https://github.com/vercel/next.js/tree/canary/examples/with-apollo
- Handle elements types on pages/index.tsx and pages/[slug].tsx
