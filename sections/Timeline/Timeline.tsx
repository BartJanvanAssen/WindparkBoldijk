import type { Timeline } from "@/app/types/graph";

const timeline = [
    {
      name: 'Founded company',
      description:
        'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
      date: 'Aug 2021',
      dateTime: '2021-08',
    },
    {
      name: 'Secured $65m in funding',
      description:
        'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
      date: 'Dec 2021',
      dateTime: '2021-12',
    },
    {
      name: 'Released beta',
      description:
        'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
      date: 'Feb 2022',
      dateTime: '2022-02',
    },
    {
      name: 'Global launch of product',
      description:
        'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
      date: 'Dec 2022',
      dateTime: '2022-12',
    },
  ]
  
  export default function Timeline( props: Timeline) {
    
    const cols = Math.min(props.moments.length, 4)
    return (
      <div className=" py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {props.tijdslijnTitel ? (
        <div className="mx-auto max-w-2xl lg:mx-0 mb-7">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {props.tijdslijnTitel}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {props.beschijving}
          </p>
        </div>
          ) : null}
          <div className={`mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-${cols}`}>
            {props.moments.map((item: any) => (
              <div key={item.name}>
                <time
                  dateTime={item.datum}
                  className="flex items-center text-sm font-semibold leading-6 text-lime-600"
                >
                  <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {new Date(item.datum).toLocaleDateString("nl-NL", { day: 'numeric', month: "numeric", year: "numeric" })}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.titel}</p>
                <p className="mt-1 text-base leading-7 text-gray-600">{item.beschijving}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  