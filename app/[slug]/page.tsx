import { GraphQLClient, gql } from "graphql-request";
import Hero from "@/sections/Hero/Hero";
import AboutContent from "@/sections/Content/About";
import FAQ from "@/sections/FAQ/FAQ";
import { Pagina, Query } from "../types/graph";
import Forms from "@/sections/Formulier/Form";
import Timeline from "@/sections/Timeline/Timeline";
import Partner from "@/sections/Partner/Partner";
// import { Hero2} from "../../sections/Hero/Hero2";
import EmailContact from "../../sections/Contact/Email";
import Hero3 from "../../sections/Hero/Hero3";
import Posts from "../blog/page";

const key =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NDcwNjE4MzksImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY21hbDdod2szMDNlYjA3dzRjbDZoMzlvNS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiYTg4OTM2NzEtYzA1NC00ZjI3LWFjZjctMTJiZGE3MmE1NTBjIiwianRpIjoiY2xwMzhjY3h5MXRwczAxdXBkMG1jMWdsaiJ9.2yoToy-Xn7Oxctg6BZywnF8GZxD-wTiw_j94pmvnZuyg-raMudmX-zC5JABWqVM2ugUumYen3ZCiPv90D7ktXjM9qLlDXU6HQV4cNatc3gpYgO6JlktrOnXxChUFxN0DlBew8H4cZg7558Krk_UGpyVqRdxBxmzqAW1-6Lk6Ni__A0kgK5RxEW5j8FCfPv0SBNCox5m-Ur_Q2A_LDDZ9F9C5ekjF2kYAiMviVurjCE2biBGYhhuj-Z6uZIS1-xhLpGlK0tnegKoaRXejejdzDmM1r3_-Uh4M2ASrKB9EEBUj1MJXx3GyNhrxBoXdht4DU0lc4LJO6cU52ULUIVyiIpYIkbaA_QFUXG7Pzxy86nhoxmaHuBVwhw6xcwwZ4rBu1nDN3r5ogZWU7sdUIDW53G8N3TnzL-8TmjFh21UEx9GitK-LmcUt-LZ7x0olSmsR_nCltm5WLpV5qX928JTYen_PDXrNKmgQcWiq_-8rFvF4VCtCLLfobInZJ2NE5mFzWz5dqUnHLG-kaImWQoYB070SOmpMU87IKlHrK5EBaAojLbQ_EeeMlO0LR8IyKjPus3T5_NLS5UEkoOOhHrc-1TIsJaN4Y3RK5ieTfOGfhF3xoJq5SW4Om6B5kcsg8f71phwftSkrA9X6vtPSwnVmvOr-k5ws_N52S-f6tAiTxuM";
const contentEndpoint =
  "https://eu-west-2.cdn.hygraph.com/content/cmal7hwk303eb07w4cl6h39o5/master";

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
            return <Hero3 {...section} />;
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
      {post.slug === 'index' && <Posts maxPosts={3} />}
      {post.slug != 'contact' && <EmailContact />}
    </div>
  );
}
