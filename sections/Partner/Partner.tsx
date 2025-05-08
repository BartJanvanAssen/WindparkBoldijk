import type { Partner } from "@/app/types/graph";

export default function Partner(props: Partner) {
  return (
    <div className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl ">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {props.titel}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {props.beschijving}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {props.blokken.map((blok) => (
            <div key={blok.titel}>
              <h3 className="border-l border-lime-600 pl-6 font-semibold text-gray-900">
                {blok.titel}
              </h3>
              <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
                <p>{blok.beschijving}</p>
                <p>{blok.contact}</p>
              </address>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
