import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <section className="bg-[url('/images/hero/hero.jpg')] bg-cover bg-center py-48">
      <Container className="flex flex-col items-start gap-y-6 text-left">
        <h1 className="max-w-4xl font-display text-5xl tracking-tight text-slate-800 sm:text-7xl xl:text-white">
          Campaign rights,
          <br />
          <span className="font-semibold">made easy</span>
        </h1>
        <p className="tracking-tighttext-white max-w-2xl text-white text-lg font-semibold">
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
