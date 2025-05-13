export default function Hero3({
  title,
  subtitel,
  afbeelding,
  center,
  primareActie,
  secondaireActie
}: any) {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        {/* <p className="text-base/7 font-semibold text-indigo-600">Welkom om onze inloopavond (eerste dinsdag van de maand)</p> */}
        <h2 className="mt-2 t
        ext-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">{title}</h2>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          {subtitel}
        </p>
      </div>
      <div className="mt-10 flex  items-center justify-center gap-x-6">
                    {!!primareActie?.link ? (<a
                      href={primareActie?.link ?? ''}
                      target='_blank'
                      className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                    >
                      {primareActie.tekst}
                    </a>
                    ) : null}
                    {!!secondaireActie?.link ? (
                    <a
                      href={secondaireActie.link ?? ''}
                      target='_blank'
                      className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                    >
                      {secondaireActie.tekst}
                    </a>): null}
                  </div>
    </div>
  )
}
