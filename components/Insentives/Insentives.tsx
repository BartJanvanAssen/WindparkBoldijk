const perks = [
    {
      name: 'Samen Regie op Energie:',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
      description:
        "Gezamenlijk de regie behouden in de energietransitie betekent dat we als gemeenschap actief deelnemen aan het sturen en vormgeven van de overgang naar duurzame energie. Door samen te coördineren en te monitoren, kunnen we flexibel inspelen op veranderingen en de transitie op een effectieve manier leiden.",
    },
    {
      name: 'Duurzame Toekomst Samen Waarmaken:',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
      description:
        "Het streven naar een duurzame toekomst vereist gezamenlijke inzet. We werken samen aan initiatieven die bijdragen aan duurzaamheid, en pakken nieuwe projecten op die onze gemeenschap op weg helpen naar een milieuvriendelijke en duurzame toekomst.",
    },
    {
      name: 'Uitvoeren en Borgen van Daarle Energie Neutraal:',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
      description:
        'We nemen actieve stappen om het plan "Daarle Energie Neutraal" uit te voeren. Dit omvat niet alleen het implementeren van concrete maatregelen voor duurzame energie, maar ook het zorgen voor een blijvende verankering van deze initiatieven in onze lokale gemeenschap.',
    },
    {
      name: 'Beheer van Gemeenschapsfonds:',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
      description:
        "Het beheer van het gemeenschapsfonds is cruciaal voor het ondersteunen van projecten en initiatieven die onze gemeenschap versterken. We nemen de verantwoordelijkheid voor een transparant beheer en zorgen ervoor dat de middelen op een effectieve manier worden besteed ter bevordering van gemeenschapsbelangen.",
    },
  ]
  
  export default function Insentives() {
    return (
      <div className="bg-gray-50">
        <h2 className="sr-only">Our perks</h2>
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 px-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {perks.map((perk) => (
              <div key={perk.name} className="sm:flex">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img className="h-24 w-28" src={perk.imageSrc} alt="" />
                  </div>
                </div>
                <div className="mt-3 sm:ml-3 sm:mt-0">
                  <h3 className="text-sm font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  