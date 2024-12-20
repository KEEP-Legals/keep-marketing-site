import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { JustEmailForm } from '@/components/JustEmailForm'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <PrimaryFeatures />
        <Faqs />
        <JustEmailForm />
      </main>
    </>
  )
}
