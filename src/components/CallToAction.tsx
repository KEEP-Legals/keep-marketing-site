import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className=" bg-primary-600 bg-[url('/images/background-call-to-action.jpg')] bg-cover bg-center py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Limitless customisation. Your contracts, your way.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Unlock the power of flexible, automated usage rights contracting.
            It&apos;s time to get back to creating.
          </p>
          <Button href="/contact-us" color="white" className="mt-10">
            Join the platform now
          </Button>
        </div>
      </Container>
    </section>
  )
}
