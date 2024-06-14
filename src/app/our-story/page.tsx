import { JustEmailForm } from '@/components/JustEmailForm'
import { MeetTheTeam } from '@/components/MeetTheTeam'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our story',
  description:
    "We got tired of looking after major brand's campaign rights contracting and payments and being liable, so we decided to do something about it!",
}

export default function OurStory() {
  return (
    <>
      <main>
        <MeetTheTeam />
        <JustEmailForm />
      </main>
    </>
  )
}
