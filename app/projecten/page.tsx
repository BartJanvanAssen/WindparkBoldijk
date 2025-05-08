import Blog from "@/components/Blog/Blog";
import { GraphQLClient, gql } from "graphql-request";
import Projects from "@/components/Projects/Projects";
import { Query, Stage } from "../types/graph";
import Forms from "@/sections/Formulier/Form";


const key =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDAyNjM3NTIsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xwMzBiczNiMTk1YTAxdGFoa2xwMXF6Zy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOWI1OTAxZTktYTlmMS00ZDY3LTliZjUtY2RmMmE3YmZkZWZkIiwianRpIjoiY2xwMzk0em96MXhhdTAxdDZmZWZlOTB4biJ9.epIvKtq6O2yKyv7PDU_7dMczn0q9m-RP_fimGF-CZsqhj4V4i5rFbjAo_WkLLyPGYIf07weA_lEz_k6hcbnaxVnKwoUYC9Iie6BNCWGXj8dlJLBIZxxNCoK-Epqi9cCwyRmKCgdUZD1dQyd8vcgPnByXZffFDVjnlWXCM_WPZAa0jvqwYLgUm37U3JFq-2jASnSzL745VglNGqqwvF0zj_rCNFVxd1AzaP3J4nMLye_iac5Xt2MBqLNddN5w8nIdgt5Su4WWy_CduZiFdx2086DZ35FvR1Dgf5lLyrW99cwM2w21RRbzDLssKoSmRgCyrjiHHPJMo-U_Tn9GT-PMnnNl0AbmPMQZQspUGl75eke4xwVa30dkIMdIJE-xZ4Ez95q-pClC2Hnih4juhdluxcrYd3Elq9G1NU5rOCnZcygOF2KbRv2FGjrdf_oz3FmAvgnvhR-KgSNimN9OyttFHozkafJVj2JkyHKt4J3D-IGEp877AlJlkg5S7zjj829q61lBYPfEh6FSAwM8MFSCo9m7BGFfH_SpCskw5dqNr1O3HLXxqKiUXH8iUjqWbXV6FppF9GWqAX6t-OYuyOyjoKZtoiy0yhefKUHFI2VrvcyGDNYyFgfOayJDWjZ_h201uY4V7eKp15kUESW1TEnQil8Jvc-TBx8lrmaQacrTKQ0";
const contentEndpoint =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clp30bs3b195a01tahklp1qzg/master";

const hygraph = new GraphQLClient(contentEndpoint);

const requestHeaders = {
  authorization: `Bearer ${key}`,
};



const getAllProjectsQuery = gql`
query Projects() {
  projects(orderBy: startDatum_DESC) {
    projectBeschijving {
      raw
      text
    }
    projectStatus
    projectSamenvatting
    participatieRond
    projectNaam
    startDatum
    slug
    fotos {
      url
    }
  }
}

`
async function getProjects() {
  return await hygraph.request<Query>(getAllProjectsQuery, {}, requestHeaders);
}


export default async function Posts({ params }: { params: { slug: string } }) {
    const projects = await getProjects();
    return (
      <div className="mt-20 color-black">
        <Projects items={projects.projects} />
        <hr className="max-w-2xl mx-auto "/>
        <Forms stage={Stage.Published} id={"aanmelden formulieren"} formulierTitel={"Project aandragen"}
        beschijving={"Heb je een idee voor een project? Laat het ons weten!"}
        iframe={`
        <iframe data-tally-src="https://tally.so/embed/mDNkO5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="200" frameborder="0" marginheight="0" marginwidth="0" title="Project aandragen
"></iframe>
        `}
        />
      </div>
    );
  }


  export async function generateStaticParams() {
    const pages = await hygraph.request<Query>(
      gql`
        query Projects {
          projects {
            slug
          }
        }
      `,
      {},
      requestHeaders
    );
    return pages.projects.map((page) => ({
      slug: page.slug,
    }));
  }
