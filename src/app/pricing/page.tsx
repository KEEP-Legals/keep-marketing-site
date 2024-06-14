import { Pricing } from '@/components/Pricing'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Rates and charges for KEEP',
}

export default function PricingPage() {
  return (
    <>
      <main>
        <Pricing />
      </main>
    </>
  )
}
