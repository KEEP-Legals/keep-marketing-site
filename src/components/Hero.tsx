'use client'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { AppearanceTransition } from './AppearanceTransition'

export function Hero() {
  return (
    <section
      className={`top-0 w-full bg-[url("/images/hero/hero.webp")] bg-cover bg-center py-48`}
    >
      <AppearanceTransition>
        <Container className="flex flex-col items-start gap-y-6 text-left">
          <h1 className="tracking-tightsm:text-7xl max-w-4xl font-display text-5xl text-white">
            Campaign rights,
            <br />
            made easy
          </h1>
          <p className="tracking-tighttext-white max-w-2xl text-lg font-semibold text-white">
            The only online platform for safe and secure contracting and
            payments in advertising
          </p>
          <div className="flex justify-center gap-x-6">
            <Button color="white" href="/contact-us">
              Get a demo
            </Button>
          </div>
        </Container>
      </AppearanceTransition>
    </section>
  )
}
