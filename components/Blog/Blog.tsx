import { BlogPost } from "@/app/types/graph"

  
  export default function Blog({items, showMore}: {items: BlogPost[], showMore: boolean}) {
    return (
      <div className="relative px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nieuws berichten </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            {showMore ?
            "Hier vind je de laatste nieuwsberichten" :
            "Hier vind je alle nieuws berichten die gaan over het Windpark de Boldijk."
            }
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-3">
          {items.map((post) => (
            <div key={post.titel} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.foto?.url} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-lime-600">
                    <a href={post.project?.slug ?? '#'} className="hover:underline">
                      {post.project?.projectNaam}
                    </a>
                  </p>
                  <a href={`/blog/${post.slug}`} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.titel}</p>
                    <p className="mt-3 text-base text-gray-500">{post.korteSamenvatting}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="">
                    <div className="flex text-sm text-gray-500">
                      <time dateTime={post.datum}>{post.datum}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showMore && (
          <div className="mt-12 flex justify-center">
            <a href="/blog" className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600">
              Meer nieuws berichten
            </a>
          </div>
        )}
      </div>
    </div>


      // <div className="bg-white py-24 sm:py-32">
      //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
      //     <div className="mx-auto max-w-2xl lg:max-w-4xl">
      //       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
      //       <p className="mt-2 text-lg leading-8 text-gray-600">
      //         Learn how to grow your business with our expert advice.
      //       </p>
      //       <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
      //         {items.map((post) => (
      //           <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
      //             <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
      //               <img
      //                 src={post.foto?.url}
      //                 alt=""
      //                 className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
      //               />
      //               <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      //             </div>
      //             <div>
      //               <div className="flex items-center gap-x-4 text-xs">
      //                 <time dateTime={post.datum} className="text-gray-500">
      //                   {post.datum}
      //                 </time>
      //                 <a
      //                   href={`/projecten/${post.project?.slug}`}
      //                   className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
      //                 >
      //                   {post.project?.projectNaam}
      //                 </a>
      //               </div>
      //               <div className="group r elative max-w-xl">
      //                 <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
      //                   <a href={`/blog/${post.slug}`}>
      //                     <span className="absolute inset-0" />
      //                     {post.titel}
      //                   </a>
      //                 </h3>
      //                 <p className="mt-5 text-sm leading-6 text-gray-600">{post.korteSamenvatting}</p>
      //               </div>
      //               <div className="mt-6 flex border-t border-gray-900/5 pt-6">
      //                 <div className="relative flex items-center gap-x-4">
      //                   <img src={post.createdBy?.picture} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
      //                   <div className="text-sm leading-6">
      //                     <p className="font-semibold text-gray-900">
      //                       {/* <a href={post.author.href}> */}
      //                         <span className="absolute inset-0" />
      //                         {post.createdBy?.name}
      //                       {/* </a> */}
      //                     </p>
      //                     <p className="text-gray-600">Bestuur</p>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </article>
      //         ))}
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  }
  