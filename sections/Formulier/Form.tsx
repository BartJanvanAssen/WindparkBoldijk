import { Formulier } from "@/app/types/graph";
import Script from "next/script";
import Image from "next/image";

export default function Forms({ iframe, beschijving, formulierTitel, afbeelding }: Formulier) {
    return (
    <div className="mt-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {formulierTitel}
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          {beschijving}
        </p>
      </div>
      
      <div className="mt-10 flex items-center justify-center gap-x-6 max-w-lg mx-auto">
        <Script src="https://tally.so/widgets/embed.js" />
        {iframe ? (
                        <div
                          style={{
                            // maxWidth: "100vw",
                            width: "100%",
                            height: "100%",
                            minHeight: "500px",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: iframe,
                          }}
                        />
                      ) : null}
      </div>
      <div className="relative mt-10">

      {afbeelding && (
        <Image
        src={afbeelding?.url}
        height={250}
        width={250}
        alt={afbeelding.fileName}
        className="w-full object-cover"
        />
      )} 
      </div>
    </div>
  );
}
