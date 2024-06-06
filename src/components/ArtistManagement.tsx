import { Container } from '@/components/Container'

const points = [
  {
    title: 'Artist Management',
    body: "KEEP is the advertising industry's premier solution for ensuring the safety and security of contracts and payments. What does this mean for IP holders (talent) and Management?",
  },
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

  {
    title: 'Centralised Contract Management',
    body: 'Access and manage all your contracts conveniently from one location.',
  },
  {
    title: 'Notification System',
    body: 'Receive alerts for contracts that are out of license, helping to optimise renewal payments.',
  },
]

export function ArtistManagement() {
  return (
    <section
      id="artist-management"
      aria-labelledby="talent-contracts-title"
      className="overflow-hidden bg-slate-50 bg-[url('/images/background-faqs.webp')] bg-cover bg-center py-20 text-left sm:py-32"
    >
      <Container>
        <ul role="list" className="flex flex-col gap-y-8">
          {points.map((point, pointIndex) => (
            <li key={pointIndex}>
              <h3 className="font-display text-2xl font-semibold leading-7 text-slate-900">
                {point.title}
              </h3>
              <p className="text-lg text-slate-700">{point.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
