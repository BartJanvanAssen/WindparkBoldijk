import { GraphQLClient, gql } from "graphql-request";
import { Query } from "../app/types/graph";


const key =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NDcwNjE4MzksImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY21hbDdod2szMDNlYjA3dzRjbDZoMzlvNS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiYTg4OTM2NzEtYzA1NC00ZjI3LWFjZjctMTJiZGE3MmE1NTBjIiwianRpIjoiY2xwMzhjY3h5MXRwczAxdXBkMG1jMWdsaiJ9.2yoToy-Xn7Oxctg6BZywnF8GZxD-wTiw_j94pmvnZuyg-raMudmX-zC5JABWqVM2ugUumYen3ZCiPv90D7ktXjM9qLlDXU6HQV4cNatc3gpYgO6JlktrOnXxChUFxN0DlBew8H4cZg7558Krk_UGpyVqRdxBxmzqAW1-6Lk6Ni__A0kgK5RxEW5j8FCfPv0SBNCox5m-Ur_Q2A_LDDZ9F9C5ekjF2kYAiMviVurjCE2biBGYhhuj-Z6uZIS1-xhLpGlK0tnegKoaRXejejdzDmM1r3_-Uh4M2ASrKB9EEBUj1MJXx3GyNhrxBoXdht4DU0lc4LJO6cU52ULUIVyiIpYIkbaA_QFUXG7Pzxy86nhoxmaHuBVwhw6xcwwZ4rBu1nDN3r5ogZWU7sdUIDW53G8N3TnzL-8TmjFh21UEx9GitK-LmcUt-LZ7x0olSmsR_nCltm5WLpV5qX928JTYen_PDXrNKmgQcWiq_-8rFvF4VCtCLLfobInZJ2NE5mFzWz5dqUnHLG-kaImWQoYB070SOmpMU87IKlHrK5EBaAojLbQ_EeeMlO0LR8IyKjPus3T5_NLS5UEkoOOhHrc-1TIsJaN4Y3RK5ieTfOGfhF3xoJq5SW4Om6B5kcsg8f71phwftSkrA9X6vtPSwnVmvOr-k5ws_N52S-f6tAiTxuM";
const contentEndpoint =
  "https://eu-west-2.cdn.hygraph.com/content/cmal7hwk303eb07w4cl6h39o5/master";

const hygraph = new GraphQLClient(contentEndpoint);

const requestHeaders = {
  authorization: `Bearer ${key}`,
};

export async function getPosts() {
  return await hygraph.request<Query>(query, {}, requestHeaders);
}

export async function getPages() {
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

  return pages;
}

const query = gql`
query Posts {
  blogPosts(orderBy: datum_DESC) {
    titel
    slug
    project {
      participatieRond
      projectBeschijving {
        raw
      }
      projectNaam
    }
    bericht {
      raw
    }
    datum,
    createdBy {
      name
      picture
    }
    korteSamenvatting
    foto {
      url
    }
  }
}
`
