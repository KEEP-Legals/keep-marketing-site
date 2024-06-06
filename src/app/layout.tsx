import { Lato } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s - Keep',
    default: 'Keep - Usage rights made easy',
  },
  description:
    'The go-to contracting platform for safeguarding, simplifying, and securing usage rights.',
}

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['100', '300', '400', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        lato.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
