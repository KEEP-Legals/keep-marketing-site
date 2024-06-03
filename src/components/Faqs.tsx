import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { Button } from './Button'

const faqs = [
  [
    {
      question: 'How does the platform make renewals easy?',
      answer:
        'Our platform streamlines the contract renewal process. You can set up automated reminders, easily extend or renew usage contracts at the click of a button, and maintain a clear overview of your renewal schedule.',
    },
    {
      question: 'Is the platform easy to use?',
      answer:
        'Yes. Our intuitive platform is designed to take the headache out of usage rights management. Speak with one of our experts for a walk-through tutorial to see the platform in action.',
    },
    {
      question: 'Can I use my own contracts?',
      answer:
        'Yes, we offer total flexibility. You can onboard your existing contracts, create new ones, or customise templates to fit your needs.',
    },
  ],
  [
    {
      question:
        'Can I have control over who can access contracts when collaborating with stakeholders?',
      answer:
        'Absolutely. Our walled garden security access gives you complete control over permissions during collaboration; you designate who can view, edit, or sign contracts.',
    },
    {
      question: 'How does the platform simplify invoicing?',
      answer:
        'By consolidating client payments into a single invoice, we resolve the challenge of attributing costs across different IP creators. Billing is automated with talent paid directly, so you can focus on creative endeavours.',
    },
    {
      question:
        'Does the platform offer approval and authorisation features within projects?',
      answer:
        'Yes. Our platform enables project budgeting and client approvals, ensuring streamlined workflows for your projects.',
    },
    {
      question: 'How does KEEP guarantee the secure storage of contracts?',
      answer:
        'We employ advanced protection measures to ensure the integrity of your data: we host our platform on secure cloud-based servers, conduct annual security audits, and ensure full GDPR compliance. Read our Privacy Policy for details.',
    },
  ],
  [
    {
      question:
        'How does KEEP ensure that contracts are not lost or misplaced?',
      answer:
        'Our centralised platform ensures that contracts are always accessible and never lost. Contracts remain secure and can be easily transferred to new team members or stakeholders.',
    },
    {
      question: 'Do you offer bespoke contracting and services?',
      answer:
        'Yes. We can offer services ranging from bespoke contracting to consultancy on complex usage rights. Contact our team to find out more.',
    },
    {
      question: 'How can I join the platform?',
      answer:
        'We offer two services: project-based access or subscription. Our project model is calculated on a 4% fee of the total contract value. Our subscription manages contracts from origin to renewal, with fees based on usage and project size. Contact us to explore the right model for you.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Can&apos;t find what you&apos;re looking for? Contact us for more
            information.
          </p>
          <Button className="mt-4" href="/contact-us">
            Get in touch
          </Button>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
