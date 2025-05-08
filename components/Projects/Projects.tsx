import { Project } from "@/app/types/graph";
import Image from "next/image";
function splitOnUpperCase(str?:string | null) {
  if (!str) return [];
  return str.split(/(?=[A-Z])/);
}

export default function Projecten({ items }: { items: Project[] }) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Projecten van de coöperatie
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Dit zijn de projecten die Energiek Daarle op dit moment aan het
            uitvoeren is.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {items.map((project) => (
              <article
                key={project.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
              <a href={`/projecten/${project.slug}`} className="contents">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <Image
                    fill
                    src={project.fotos?.[0]?.url ?? ""}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={project.startDatum}
                      className="text-gray-500"
                    >
                      {project.startDatum}
                    </time>
                    {/* <a
                      href={project.slug}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {project.category.title}
                    </a> */}
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={`/projecten/${project.slug}`}>
                        <span className="absolute inset-0" />
                        {project.projectNaam}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {project.projectSamenvatting}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      {/* {splitOnUpperCase(project.projectStatus).join(" ")} */}
                      {!project.projectStatus?.includes("Open") ? (
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          {/* Participatie afgerond */}
                          {splitOnUpperCase(project.projectStatus).join(" ")}
                        </span>
                      ): (

                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-gray-600">
                          {splitOnUpperCase(project.projectStatus).join(" ")}
                        </span>
                      )}
                      {/* <img src={project.author?.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href={project.publishedBy?.name}>
                            <span className="absolute inset-0" />
                            {project.createdBy?.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{project.createdBy?.kind}</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
