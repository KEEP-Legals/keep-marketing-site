import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { JustEmailForm } from '@/components/JustEmailForm'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import Head from 'next/head'

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
