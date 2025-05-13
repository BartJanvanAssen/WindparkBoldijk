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
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NDcwNjE4MzksImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY21hbDdod2szMDNlYjA3dzRjbDZoMzlvNS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiYTg4OTM2NzEtYzA1NC00ZjI3LWFjZjctMTJiZGE3MmE1NTBjIiwianRpIjoiY2xwMzhjY3h5MXRwczAxdXBkMG1jMWdsaiJ9.2yoToy-Xn7Oxctg6BZywnF8GZxD-wTiw_j94pmvnZuyg-raMudmX-zC5JABWqVM2ugUumYen3ZCiPv90D7ktXjM9qLlDXU6HQV4cNatc3gpYgO6JlktrOnXxChUFxN0DlBew8H4cZg7558Krk_UGpyVqRdxBxmzqAW1-6Lk6Ni__A0kgK5RxEW5j8FCfPv0SBNCox5m-Ur_Q2A_LDDZ9F9C5ekjF2kYAiMviVurjCE2biBGYhhuj-Z6uZIS1-xhLpGlK0tnegKoaRXejejdzDmM1r3_-Uh4M2ASrKB9EEBUj1MJXx3GyNhrxBoXdht4DU0lc4LJO6cU52ULUIVyiIpYIkbaA_QFUXG7Pzxy86nhoxmaHuBVwhw6xcwwZ4rBu1nDN3r5ogZWU7sdUIDW53G8N3TnzL-8TmjFh21UEx9GitK-LmcUt-LZ7x0olSmsR_nCltm5WLpV5qX928JTYen_PDXrNKmgQcWiq_-8rFvF4VCtCLLfobInZJ2NE5mFzWz5dqUnHLG-kaImWQoYB070SOmpMU87IKlHrK5EBaAojLbQ_EeeMlO0LR8IyKjPus3T5_NLS5UEkoOOhHrc-1TIsJaN4Y3RK5ieTfOGfhF3xoJq5SW4Om6B5kcsg8f71phwftSkrA9X6vtPSwnVmvOr-k5ws_N52S-f6tAiTxuM";
const contentEndpoint =
  "https://eu-west-2.cdn.hygraph.com/content/cmal7hwk303eb07w4cl6h39o5/master";

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
