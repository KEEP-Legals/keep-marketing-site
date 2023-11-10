import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Is the platform easy to use?',
      answer:
        'Yes. Our intuitive platform is designed to take the headache out of usage rights management. Speak with one of our experts for a walk-through tutorial to see the platform in action.',
    },
    {
      question: 'How does the platform simplify invoicing?',
      answer:
        'KEEP consolidates client payments into a single invoice and resolves the challenge of attributing costs across different IP creators and talent streams. The platform pays talent directly, automating billing across parties, so you can focus on creative endeavours without the headache of invoicing logistics.',
    },
    {
      question: 'How does KEEP guarantee the secure storage of contracts?',
      answer:
        'Security is a top priority at KEEP. We utilise state-of-the-art data protection measures to ensure the confidentiality and integrity of your contracts. Our platform is hosted on secure cloud-based servers, with annual security audits conducted. We are fully compliant with GDPR regulations. Read our Privacy Policy to find out more.',
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
      question:
        'Does the platform offer approval and authorisation features within projects?',
      answer:
        'Yes. Our platform enables project budgeting and client approvals, ensuring streamlined workflows for your projects.',
    },
    {
      question: 'Can I use my own contracts?',
      answer:
        'You have the flexibility to onboard your existing contracts, create new ones from scratch, or customise templates to suit your needs. KEEP is thoughtfully designed to simplify your usage rights management, and that includes integrating current agreements onto the platform.',
    },
    {
      question: 'How does the platform make renewals easy?',
      answer:
        'Our platform streamlines the contract renewal process. You can set up automated reminders, easily extend or renew usage contracts at the click of a button, and maintain a clear overview of your renewal schedule.',
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
      question: 'How can I join the platform?',
      answer:
        'Choose from our project-based access or subscription service. Our project model is based upon a 4% usage fee per contract, calculated from the total rights contract value. Our subscription model is a 360-degree service managing contracts from origination to renewal, with fees based upon client usage and project size. Get in touch to explore which model is right for you.',
    },
    {
      question: 'Do you offer bespoke contracting and services?',
      answer:
        'Yes. We can offer services ranging from bespoke contracting to consultancy on complex usage rights. Contact our team to find out more.',
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
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
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
