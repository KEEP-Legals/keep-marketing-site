import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { JustEmailForm } from '@/components/JustEmailForm'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <link as="image" rel="preload" href="/images/hero/hero.webp" />
      </Head>
      <main>
        <Hero />
        <PrimaryFeatures />
        <Faqs />
        <JustEmailForm />
      </main>
    </>
  )
}
