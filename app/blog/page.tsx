import Blog from "@/components/Blog/Blog";
import { GraphQLClient, gql } from "graphql-request";
import { Query } from "../types/graph";
import { getPages, getPosts } from "../../api/posts";



export default async function Posts() {
    const posts = await getPosts();
    return (
      <div className="mt-20 color-black">
        <Blog items={posts.blogPosts} />
      </div>
    );
  }


  

  export async function generateStaticParams() {
    const pages = await getPages();
    return pages.blogPosts.map((page: any) => ({
      slug: page.slug,
    }));
  }
  