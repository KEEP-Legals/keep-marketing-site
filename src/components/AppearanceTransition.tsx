"use client"
import { Transition } from '@headlessui/react'

export function AppearanceTransition({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Transition
      appear
      show
      enter="transition-opacity duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  )
}
