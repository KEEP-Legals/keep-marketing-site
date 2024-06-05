import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { AppearanceTransition } from './AppearanceTransition'

export function Hero() {
  const bgImageClass = `bg-[url("/images/hero/hero.png")]`
  return (
    <section
      className={`bg-primary-500 bg-cover bg-center ${bgImageClass} py-48`}
    >
      <Container className="flex flex-col items-start gap-y-6 text-left">
        <h1 className="max-w-4xl font-display text-5xl tracking-tight text-slate-800 sm:text-7xl xl:text-white">
          Campaign rights,
          <br />
          <span className="font-semibold">made easy</span>
        </h1>
        <p className="tracking-tighttext-white max-w-2xl text-lg font-semibold text-white">
          The only online platform for safe and secure contracting and payments
          in advertising
        </p>
        <div className="flex justify-center gap-x-6">
          <Button color="white" href="/contact-us">
            Get a demo
          </Button>
        </div>
      </Container>
    </section>
  )
}
