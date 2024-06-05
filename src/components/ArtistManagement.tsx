import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const points = [
  [
    {
      title: 'Transparent Contracting',
      body: 'All contracts are fully transparent, allowing key stakeholders to view them easily and for Artist or management to sign.',
    },
    {
      title: 'Secure Payments',
      body: 'Payments are fully secure and compliant with FCA regulations that can be made straight to Artist or Management bank accounts without delay.',
    },
    {
      title: 'Effortless Contract Management',
      body: 'Easily renew or extend usage contracts, facilitating simple additional payments.',
    },
  ],
  [
    {
      title: 'Centralised Contract Management',
      body: 'Access and manage all your contracts conveniently from one location.',
    },
    {
      title: 'Notification System',
      body: 'Receive alerts for contracts that are out of license, helping to optimise renewal payments.',
    },
  ],
  [],
]

export function ArtistManagement() {
  return (
    <section
      id="artist-management"
      aria-labelledby="talent-contracts-title"
      className="overflow-hidden bg-slate-50 py-20 sm:py-32 text-left bg-[url('/images/background-faqs.jpg')] bg-cover bg-center"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="talent-contracts-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Artist Management
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            KEEP is the advertising industry&apos;s premier solution for
            ensuring the safety and security of contracts and payments. What
            does this mean for IP holders (talent) and Management?
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
        >
          {points.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {point.title}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{point.body}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-16">
          <ul
            className="flex flex-col gap-y-8 text-lg tracking-tight text-slate-700"
            role="list"
          >
            <li>
              Our platform facilitates safe and secure IP rights contracting and
              payments. Clients can execute contracts using either their own
              terms or industry-standard templates, all while ensuring
              compliance with FCA regulations.
            </li>
            <li>
              Our digital signing process matches the highest security
              standards, allowing for talent to assign their portals to their
              agents or guardians and sign on their behalf.
            </li>
            <li>
              By signing up when you receive your first contract it ensures that
              your details are stored securely and payments can be made
              promptly. Additionally, KEEP is the only platform that ensures
              that you can be located to receive usage renewal fees and that
              clients have no excuse not to pay you!
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
