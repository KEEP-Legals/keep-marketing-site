'use client'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { NavigationOptions } from '@/components/NavigationOptions'
import { MobileNavigation } from './MobileNavigation'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  return (
    <header
      className={clsx('w-full py-10', {
        absolute: pathname === '/',
      })}
    >
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden text-white md:flex md:gap-x-6">
              <NavigationOptions
                textColor={pathname === '/' ? 'white' : 'dark'}
              />
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="https://app.keeplegals.com/">Sign in</NavLink>
            </div>
            <Button href="/contact-us" color="blue">
              <span>Get a demo</span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
