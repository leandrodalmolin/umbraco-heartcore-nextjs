import { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnvConfig } from '@next/env'

// Source:
// https://github.com/dotansimha/graphql-code-generator/issues/1757#issuecomment-1436039415
loadEnvConfig(process.cwd())

const config: CodegenConfig = {
  schema: {
    'https://graphql.umbraco.io': {
      headers: {
        'Api-Key': String(process.env.UMBRACO_API_KEY),
        'Umb-Project-Alias': String(process.env.UMBRACO_PROJECT_ALIAS),
      }
    }
  },
  documents: ['src/graphql/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
    },
    './src/graphql/generated/introspection-result.json': {
      plugins: ['fragment-matcher']
    },
  }
}

export default config