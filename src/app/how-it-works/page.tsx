import { HowItWorksSections } from '@/components/HowItWorksSections'
import { ArtistManagement } from '@/components/ArtistManagement'
import { ExplainWhatKeepIsVideo } from '@/components/ExplainWhatKeepIsVideo'
import { JustEmailForm } from '@/components/JustEmailForm'
import { WrapperWithTitle } from '@/components/WrapperWithTitle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How it works',
  description:
    'The only platform purpose built to streamline payments and contracting for commercial productions.',
}

export default function HowItWorks() {
  return (
    <>
      <main>
        <ExplainWhatKeepIsVideo />
        <WrapperWithTitle title="What can KEEP do for me" variant="gray">
          <HowItWorksSections />
          <ArtistManagement />
          <JustEmailForm />
        </WrapperWithTitle>
      </main>
    </>
  )
}
