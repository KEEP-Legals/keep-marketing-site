import { CallToAction } from '@/components/CallToAction'
import { ContactUs } from '@/components/ContactUs'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { MeetTheTeam } from '@/components/MeetTheTeam'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { TalentContracts } from '@/components/TalentContracts'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <PrimaryFeatures />
        <Faqs />
        <CallToAction />
      </main>
    </>
  )
}
