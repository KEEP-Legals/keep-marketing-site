import { HowItWorksSections } from '@/components/HowItWorksSections'
import { ArtistManagement } from '@/components/ArtistManagement'
import { WrapperWithTitle } from '@/components/WrapperWithTitle'
import { ExplainWhatKeepIsVideo } from '@/components/ExplainWhatKeepIsVideo'

export default function HowItWorks() {
  return (
    <>
      <main>
        <WrapperWithTitle title="What can KEEP do for me">
          <ExplainWhatKeepIsVideo />
          <HowItWorksSections />
          <ArtistManagement />
        </WrapperWithTitle>
      </main>
    </>
  )
}
