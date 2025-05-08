// `app` directory

import { GraphQLClient, gql } from "graphql-request";

import Hero, { SmallHero } from "@/sections/Hero/Hero";
import AboutContent from "@/sections/Content/About";
import FAQ from "@/sections/FAQ/FAQ";
import { BlogPost, Query } from "../../types/graph";
import Blog from "@/components/Blog/Blog";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { renderers } from "@/components/RichText";
import Image from 'next/image'
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
      query PostRoutes {
        blogPosts {
          slug
        }
      }
    `,
    {},
    requestHeaders
  );
  return posts.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const getPost = async (params:any): Promise<BlogPost> => {
  console.log(params);
  const post = await hygraph.request<{ blogPost: BlogPost }>(
    ` query Post($slug: String!) {
      blogPost(where: {slug: $slug}) {
        titel
        slug
        project {
          participatieRond
          projectBeschijving {
            raw
          }
          projectNaam
        }
        datum
        introductie
        bericht {
          json
        }
        bestanden {
          fileName
          mimeType
          size
          url
          updatedAt
        }
        createdBy {
          name
          picture
        }
        korteSamenvatting
        foto {
          url
        }
      }
    }`,
    {
      slug: params.slug,
    },
    requestHeaders
  );
  return post.blogPost;
};

export default async function Page({ params }:any) {
  const post = await getPost(params);

  return (
    <div className="mt-32 color-black">
      {/* <Image
        src={post.foto?.url ?? '/kanaal-1.jpeg'}
        // fill
        // objectFit="cover"
        alt="foto van kanaal in daarle"
        className="" /> */}
      <SmallHero
        title={post.titel}
        subtitel={post.datum}
        afbeelding={post.foto}
        center
      />
      <div className=" px-6 pb-32 pt-8 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <Link href="/blog" className="text-lime-600 hover:underline">
          ← Terug naar alle blog berichten
          </Link>
        </div>
        <div className="mx-auto max-w-3xl pt-16 text-base leading-7 text-gray-700">
          {post.project ? <p className="text-base font-semibold leading-7 text-lime-600">
            {post.project?.projectNaam}
          </p>
: null}
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {post.titel}
          </h1>
          <p className="mt-6 text-xl leading-8 font-semibold">
            {post.introductie}
          </p>
          <div className="mt-10 max-w-2xl body">
            <RichText content={post.bericht?.json} renderers={renderers} />
          </div>
          <div className="mt-10" />
          {post.bestanden ? <FileGallery files={post.bestanden} /> : null}
        </div>
      </div>
    </div>
  );
}
