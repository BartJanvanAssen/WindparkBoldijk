// `app` directory

import { GraphQLClient, gql } from "graphql-request";

import { SmallHero } from "@/sections/Hero/Hero";
import FAQ from "@/sections/FAQ/FAQ";
import { Asset, Query } from "../../types/graph";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { renderers } from "@/components/RichText";
import Image from "next/image";
import Forms from "@/sections/Formulier/Form";
import Timeline from "@/sections/Timeline/Timeline";
import Link from "next/link";
import { FileGallery } from "@/components/FileGallary";
const key =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDAyNjM3NTIsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xwMzBiczNiMTk1YTAxdGFoa2xwMXF6Zy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOWI1OTAxZTktYTlmMS00ZDY3LTliZjUtY2RmMmE3YmZkZWZkIiwianRpIjoiY2xwMzk0em96MXhhdTAxdDZmZWZlOTB4biJ9.epIvKtq6O2yKyv7PDU_7dMczn0q9m-RP_fimGF-CZsqhj4V4i5rFbjAo_WkLLyPGYIf07weA_lEz_k6hcbnaxVnKwoUYC9Iie6BNCWGXj8dlJLBIZxxNCoK-Epqi9cCwyRmKCgdUZD1dQyd8vcgPnByXZffFDVjnlWXCM_WPZAa0jvqwYLgUm37U3JFq-2jASnSzL745VglNGqqwvF0zj_rCNFVxd1AzaP3J4nMLye_iac5Xt2MBqLNddN5w8nIdgt5Su4WWy_CduZiFdx2086DZ35FvR1Dgf5lLyrW99cwM2w21RRbzDLssKoSmRgCyrjiHHPJMo-U_Tn9GT-PMnnNl0AbmPMQZQspUGl75eke4xwVa30dkIMdIJE-xZ4Ez95q-pClC2Hnih4juhdluxcrYd3Elq9G1NU5rOCnZcygOF2KbRv2FGjrdf_oz3FmAvgnvhR-KgSNimN9OyttFHozkafJVj2JkyHKt4J3D-IGEp877AlJlkg5S7zjj829q61lBYPfEh6FSAwM8MFSCo9m7BGFfH_SpCskw5dqNr1O3HLXxqKiUXH8iUjqWbXV6FppF9GWqAX6t-OYuyOyjoKZtoiy0yhefKUHFI2VrvcyGDNYyFgfOayJDWjZ_h201uY4V7eKp15kUESW1TEnQil8Jvc-TBx8lrmaQacrTKQ0";
const contentEndpoint =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clp30bs3b195a01tahklp1qzg/master";

const hygraph = new GraphQLClient(contentEndpoint);

const requestHeaders = {
  authorization: `Bearer ${key}`,
};

export async function generateStaticParams() {
  const posts = await hygraph.request<Query>(
    gql`
      query ProjectRoutes {
        projects {
          slug
        }
      }
    `,
    {},
    requestHeaders
  );
  return posts.projects.map((post) => ({
    slug: post.slug,
  }));
}

const getProduct = async (params: { slug: string }) => {
  const post = await hygraph.request<Query>(
    ` query Project($slug: String!) {
      projects(where: {slug: $slug}) {
        projectBeschijving {
          raw
        }
        participatieRond
        projectNaam
        startDatum
        slug
        projectType
        fotos {
          url
        }
        bestanden {
          fileName
          mimeType
          size
          url
          updatedAt
        }
        secties {
          
          ... on Formulier {
              __typename
              iframe
              id
              beschijving
              afbeelding {
                url
                fileName
              }
              formulierTitel 
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
  return post.projects?.[0];
};

const ImageGallery = ({ fotos }: any) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-12">
      {fotos?.map((foto: any) => (
        <div key={foto.url}>
          <Image
            className="h-full w-full max-w-full rounded-lg"
            width={500}
            objectFit="cover"
            height={500}
            src={foto.url}
            style={{ objectFit: "cover" }}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default async function Page({ params }: { params: { slug: string } }) {
  const project = await getProduct(params);

  if (!project) {
    return <div>404</div>;
  }
  return (
    <div className="mt-32 color-black">
      <SmallHero
        title={project.projectNaam}
        subtitel={project.startDatum}
        afbeelding={project.fotos?.[0]}
        center
      />
      <div className="px-6 pb-32 pt-8 lg:px-8">
        <div className="mx-auto max-w-4xl text-base leading-7 text-gray-700">
          <Link href="/projecten" className="text-lime-600 hover:underline">
          ← Terug naar alle projecten
          </Link>
        </div>
        <div className="mx-auto pt-16 max-w-4xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-lime-600">
            {project.projectType}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {project.projectNaam}
          </h1>
          <p className="mt-6 text-xl leading-8 font-semibold">
            {/* {project.introductie} */}
          </p>
          <div className="mt-10 max-w-2xl">
            <RichText
              content={project.projectBeschijving?.raw}
              renderers={renderers}
            />
          </div>
          <ImageGallery fotos={project.fotos} />
          <FileGallery files={project.bestanden} />
          
          {project?.secties?.map((section) => {
            switch (section.__typename) {
              case "Timeline":
                return <Timeline {...section} />;
              case "Formulier":
                return <Forms {...section} />;
              case "Faq":
                return <FAQ {...section} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
