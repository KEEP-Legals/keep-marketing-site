import { Container } from '@/components/Container'

import { PrimaryFeaturesTabs } from '@/components/PrimaryFeaturesTabs'

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="bg-primary-600 pb-28 pt-20 sm:py-32"
    >
      <Container>
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Safe and secure contracting and payments
          </h2>
          <p className="mt-6 text-lg tracking-tight text-primary-100">
            No more contractual insecurity. No paperwork vanishing when you need
            it most. No budget-draining markups on usage rights management or
            onboarding hundreds of talent. KEEP consolidates your contracts and
            automates the end to end process of creation and renewal. All in one
            easy-to-use, customisable platform.
          </p>
        </div>
        <PrimaryFeaturesTabs />
      </Container>
    </section>
  )
}
