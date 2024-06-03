import { HowItWorksSections } from '@/components/HowItWorksSections'
import { ArtistManagement } from '@/components/ArtistManagement'
import { WrapperWithTitle } from '@/components/WrapperWithTitle'

export default function HowItWorks() {
  return (
    <>
      <main>
        <WrapperWithTitle title="What can KEEP do for me">
          <HowItWorksSections />
          <ArtistManagement />
        </WrapperWithTitle>
      </main>
    </>
  )
}
