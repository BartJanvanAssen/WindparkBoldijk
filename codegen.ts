
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://eu-west-2.cdn.hygraph.com/content/cmal7hwk303eb07w4cl6h39o5/master",
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
