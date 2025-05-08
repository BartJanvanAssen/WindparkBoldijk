import { GraphQLClient, gql } from "graphql-request";
import Hero from "@/sections/Hero/Hero";
import AboutContent from "@/sections/Content/About";
import FAQ from "@/sections/FAQ/FAQ";
import { Pagina, Query } from "../types/graph";
import Forms from "@/sections/Formulier/Form";
import Timeline from "@/sections/Timeline/Timeline";
import Partner from "@/sections/Partner/Partner";

const key =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDAyNjM3NTIsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xwMzBiczNiMTk1YTAxdGFoa2xwMXF6Zy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOWI1OTAxZTktYTlmMS00ZDY3LTliZjUtY2RmMmE3YmZkZWZkIiwianRpIjoiY2xwMzk0em96MXhhdTAxdDZmZWZlOTB4biJ9.epIvKtq6O2yKyv7PDU_7dMczn0q9m-RP_fimGF-CZsqhj4V4i5rFbjAo_WkLLyPGYIf07weA_lEz_k6hcbnaxVnKwoUYC9Iie6BNCWGXj8dlJLBIZxxNCoK-Epqi9cCwyRmKCgdUZD1dQyd8vcgPnByXZffFDVjnlWXCM_WPZAa0jvqwYLgUm37U3JFq-2jASnSzL745VglNGqqwvF0zj_rCNFVxd1AzaP3J4nMLye_iac5Xt2MBqLNddN5w8nIdgt5Su4WWy_CduZiFdx2086DZ35FvR1Dgf5lLyrW99cwM2w21RRbzDLssKoSmRgCyrjiHHPJMo-U_Tn9GT-PMnnNl0AbmPMQZQspUGl75eke4xwVa30dkIMdIJE-xZ4Ez95q-pClC2Hnih4juhdluxcrYd3Elq9G1NU5rOCnZcygOF2KbRv2FGjrdf_oz3FmAvgnvhR-KgSNimN9OyttFHozkafJVj2JkyHKt4J3D-IGEp877AlJlkg5S7zjj829q61lBYPfEh6FSAwM8MFSCo9m7BGFfH_SpCskw5dqNr1O3HLXxqKiUXH8iUjqWbXV6FppF9GWqAX6t-OYuyOyjoKZtoiy0yhefKUHFI2VrvcyGDNYyFgfOayJDWjZ_h201uY4V7eKp15kUESW1TEnQil8Jvc-TBx8lrmaQacrTKQ0";
const contentEndpoint =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clp30bs3b195a01tahklp1qzg/master";

const hygraph = new GraphQLClient(contentEndpoint);

const requestHeaders = {
  authorization: `Bearer ${key}`,
};

export async function generateStaticParams() {
  const pages = await hygraph.request<Query>(
    gql`
      query Paginas {
        paginas {
          slug
        }
      }
    `,
    {},
    requestHeaders
  );
  return pages.paginas.map((page) => ({
    slug: page.slug,
  }));
}

const getPage = async (params: any) => {
  const pagina = await hygraph.request<{ pagina: Pagina }>(
    `query Pagina($slug: String!) {
        pagina(where: { slug: $slug }) {
          titel
          slug
          sections {
                ... on Hero {
                    __typename
                  id
                  small
                  title
                  primareActie {
                    link
                    tekst
                  }
                  secondaireActie { 
                    link
                    tekst
                  }
                  subtitel
                  afbeelding {
                    url
                  }
                  afbeelding2 {
                    url
                  }
                  afbeelding3 {
                    url
                  }
                  afbeelding4 {
                    url
                  }
                  afbeelding5 {
                    url
                  }
                }
                ... on Formulier {
                    __typename
                    iframe
                    id
                    beschijving
                    formulierTitel 
                }
                ... on Partner {
                  __typename
                  id
                  blokken {
                    ... on ContentBlok {
                      id
                      contact
                      beschijving
                      titel
                      afbeelding {
                        url
                      }
                    }
                  }
                  titel
                  beschijving
                }
                ... on Faq {
                  __typename
                  id
                  vragen {
                    ... on VraagAntwoord {
                      id
                      antwoord {
                        text
                      }
                      vraag
                    }
                  }
                }
                ... on Content {
                  __typename
                  id
                  titel
                  centreren
                  subtitel
                  introductie
                  zijElement {
                    ... on Quote {
                      __typename
                      id
                      inhoud
                      naam
                      image {
                        url
                      }
                      titel
                    }
                    ... on Formulier {
                      __typename
                      iframe
                      id
                      beschijving
                      formulierTitel 
                    }
                  }
                  inhoud {
                    raw
                  }
                }
                ... on Timeline {
                  __typename
                  ... on Timeline {
                    id
                    tijdslijnTitel
                    beschijving
                    moments {
                      ... on Moment {
                        id
                        beschijving
                        datum
                        titel
                      }
                    }
                  }
                }
          }
        }
      }`,
    {
      slug: params.slug,
    },
    requestHeaders
  );

  return pagina.pagina;
};

export default async function Page({ params }: any) {
  const post = await getPage(params);
  console.log(post);

  return (
    <div className="mt-32 color-black">
      {/* <h1>{post.titel}</h1> */}
      {post?.sections?.map((section) => {
        console.log(section.__typename);
        switch (section.__typename) {
          case 'Timeline': 
            return <Timeline {...section} />
          case "Hero":
            return <Hero {...section} />;
          case "Formulier":
            return <Forms {...section} />;
          case "Content":
            return <AboutContent {...section} />;
          case "Partner":
            return <Partner {...section} />;
          case "Faq":
            return <FAQ {...section} />;
        }
      })}
    </div>
  );
}
