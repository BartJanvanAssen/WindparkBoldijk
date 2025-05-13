"use client";

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import ProjectLogo from '../../public/project-logo.png'
import Image from 'next/image'
import { useState } from 'react'


import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
  { name: 'Windenergie in provincie Overijssel', description: 'Waarom en hoe Overijssel 90 windmolens wil realiseren', href: 'https://www.overijssel.nl/onderwerpen/energie/windenergie/' },
  {
    name: 'Regionale Energie Strategie (RES) & Lokaal eigendom',
    description: 'Wat is Lokaal eigendom en hoe werkt dat?',
    href: 'https://www.regionale-energiestrategie.nl/participatie/lokaal+eigendom/default.aspx',
  },
  { name: 'Windbeleid in de Gemeente Hellendoorn', description: 'Ben je bereid met de energiecooperatie je dak te verhuren voor een zo-op-dak project?', href: 'https://www.hellendoorn.nl/duurzaamheid/windenergie/' },
  { name: 'Energiepotentiekaart Overijssel', description: 'Ontdek via ArcGIS hoe het gebied er uit ziet en wat uitsluitings gebieden zijn.', href: 'https://www.arcgis.com/apps/instant/sidebar/index.html?appid=223e757dd172413cb3c996dec57b8366' },
  { name: 'Energiek Daarle', description: 'Meer informatie over energie coöperatie EnergiekDaarle', href: 'https://www.energiekdaarle.nl/' },
  { name: 'Duurzaam Daarlerveen', description: 'Meer informatie over duurzaam Daarlerveen', href: 'https://www.duurzaamdaarlerveen.nl/' },
]

 function MeeDoenKnop() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900 bg-lime-600 text-white px-4 py-2 rounded">
        <span>Meer informatie</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-3/4 px-4">
          <div className="w-screen max-w-md flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            {solutions.map((item) => (
              <div key={item.name} className="relative rounded-lg p-4 hover:bg-gray-50">
                <a href={item.href} target='_blank' className="font-semibold text-gray-900">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}




const navigation = [
  { name: 'Home', href: '/' },
  // { name: 'Ons verhaal', href: '/ons-verhaal' },
  // { name: 'Cooperatie', href: '/cooperatie' },
  { name: 'Blog', href: '/blog' },
  { name: 'Vraag & antwoord', href: '/veel-gestelde-vragen' },
  { name: 'Contact', href: '/contact' },
]


export default function Header(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="inset-x-0 top-0 z-50 sticky bg-white shadow-sm" style={{
            marginTop: -128
        }}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
          {/* <div className="flex lg:flex-1"> */}
            {/* <a href="/" className="-m-1.5 p-1.5 text-2xl font-bold"> */}
              {/* <span className="sr-only">Energiek Daarle</span> */}
             {/* Windpark de Boldijk */}
            {/* </a> */}
          {/* </div> */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-md font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <MeeDoenKnop />
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=lime&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    )
}