import { Container } from '@/components/Container'
import { Button } from './Button'
import FaqCollapses from './FaqCollapses'

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-[url('/images/background-faqs.jpg')] bg-cover bg-center py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Can&apos;t find what you&apos;re looking for? Contact us for more
            information.
          </p>
          <Button className="mt-4" href="/contact-us">
            Get in touch
          </Button>
        </div>
        <FaqCollapses />
      </Container>
    </section>
  )
}
