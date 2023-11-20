import { CallToAction } from '@/components/CallToAction'
import { ContactUs } from '@/components/ContactUs'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { MeetTheTeam } from '@/components/MeetTheTeam'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <MeetTheTeam />
        <CallToAction />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <Faqs />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
