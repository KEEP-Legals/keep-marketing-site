import { ContactUs } from '@/components/ContactUs'
import { WrapperWithTitle } from '@/components/WrapperWithTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact us',
  description: "We're here to answer all of your questions.",
}

export default function HowItWorks() {
  return (
    <>
      <main>
        <WrapperWithTitle title="Get in touch" variant="purple">
          <ContactUs />
        </WrapperWithTitle>
      </main>
    </>
  )
}
