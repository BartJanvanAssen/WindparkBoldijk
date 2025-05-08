
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clp30bs3b195a01tahklp1qzg/master",
  documents: ["./app/**/*.ts","./app/**/*.tsx"],
  generates: {
    './app/types/graph.ts': {
      plugins: [
        'typescript', 
        // 'typescript-operations', 
        // 'typescript-graphql-request'
      ],
    },
  }
};

export default config;
