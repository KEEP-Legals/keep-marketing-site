'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import screenshotSecure from '@/images/screenshots/keep-it-secure.png'
import screenshotStreamlined from '@/images/screenshots/keep-it-streamlined.png'
import screenshotAutomated from '@/images/screenshots/keep-it-automated.png'

const features = [
  {
    title: 'secure',
    description:
      'Safeguard usage rights with bespoke or templated contracts from leading media law firms via our secure asset management tool.',
    image: screenshotSecure,
  },
  {
    title: 'streamlined',
    description:
      'Streamline payments into a single invoice and let the platform process payments directly to IP creators.',
    image: screenshotStreamlined,
  },
  {
    title: 'automated',
    description:
      'Seamlessly extend and renew contracts at a single click with automated reminders. Say goodbye to broken, incomplete, or lapsed usage contracts.',
    image: screenshotAutomated,
  },
]

export function PrimaryFeaturesTabs() {
  const [tabOrientation, setTabOrientation] = useState<
    'horizontal' | 'vertical'
  >('horizontal')

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
      vertical={tabOrientation === 'vertical'}
    >
      {({ selectedIndex }) => (
        <>
          <div className="-mx-4 flex flex-col overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
            <span className="mb-3 px-4 text-lg text-white sm:hidden">
              KEEP it:
            </span>
            <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:flex-row sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
              {features.map((feature, featureIndex) => (
                <div
                  key={feature.title}
                  className={clsx(
                    'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                    selectedIndex === featureIndex
                      ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                      : 'hover:bg-white/10 lg:hover:bg-white/5',
                  )}
                >
                  <h3>
                    <Tab
                      className={clsx(
                        'test-xs flex gap-x-1 font-display ui-not-focus-visible:outline-none sm:text-lg',
                        selectedIndex === featureIndex
                          ? 'text-primary-600 lg:text-white'
                          : 'text-primary-100 hover:text-white lg:text-white',
                      )}
                    >
                      <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                      <span className="hidden sm:block">KEEP it </span>
                      {feature.title}
                    </Tab>
                  </h3>
                  <p
                    className={clsx(
                      'mt-2 hidden text-sm lg:block',
                      selectedIndex === featureIndex
                        ? 'text-white'
                        : 'text-primary-100 group-hover:text-white',
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-7">
            {features.map((feature) => (
              <Tab.Panel key={feature.title} unmount={false}>
                <div className="relative sm:px-6 lg:hidden">
                  <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                  <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-10 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-primary-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                  <Image
                    className="w-full"
                    src={feature.image}
                    alt=""
                    sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw"
                  />
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}
