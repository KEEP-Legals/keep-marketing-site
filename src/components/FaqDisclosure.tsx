'use client'

import { Disclosure } from '@headlessui/react'

export function FaqDisclosure({
  question,
  answer,
  defaultOpen,
}: {
  question: string
  answer: string
  defaultOpen: boolean
}) {
  return (
    <Disclosure
      as="li"
      className="border-b border-slate-900"
      defaultOpen={defaultOpen}
    >
      <Disclosure.Button className="py-2 text-left ">
        <h3 className="font-display text-lg leading-7 text-slate-900">
          {question}
        </h3>
      </Disclosure.Button>
      <Disclosure.Panel>
        <p className="py-4 text-left text-sm text-slate-700">{answer}</p>
      </Disclosure.Panel>
    </Disclosure>
  )
}
