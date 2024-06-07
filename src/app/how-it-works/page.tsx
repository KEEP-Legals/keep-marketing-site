import { HowItWorksSections } from '@/components/HowItWorksSections'
import { ArtistManagement } from '@/components/ArtistManagement'
import { ExplainWhatKeepIsVideo } from '@/components/ExplainWhatKeepIsVideo'
import { JustEmailForm } from '@/components/JustEmailForm'
import { WrapperWithTitle } from '@/components/WrapperWithTitle'

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
