import { ContactUs } from '@/components/ContactUs'
import { WrapperWithTitle } from '@/components/WrapperWithTitle'

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
