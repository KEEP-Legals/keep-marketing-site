import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import MangoPayImg from '@/images/logos/mangopay_powered.svg'
import Image from 'next/image'
import { NavigationOptions } from './NavigationOptions'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavigationOptions />
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row sm:justify-between">
          <Link
            href="https://mangopay.com/en-gb/terms-and-conditions/e-money"
            target="_blank"
          >
            <Image src={MangoPayImg} height={40} alt="Powered by MangoPay" />
          </Link>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Keep Media Ltd. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
