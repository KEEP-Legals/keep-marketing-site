'use client'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { NavigationOptions } from '@/components/NavigationOptions'
import { MobileNavigation } from '@/components/MobileNavigation'
import { usePathname } from 'next/navigation'
import { WhiteLogo } from '@/components/WhiteLogo'

export function Header() {
  const pathname = usePathname()
  return (
    <header
      className={clsx('w-full py-10', {
        absolute: pathname === '/',
        'bg-video-background': pathname === '/how-it-works',
      })}
    >
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              {pathname === '/how-it-works' ? (
                <WhiteLogo className="h-10 w-auto" />
              ) : (
                <Logo className="h-10 w-auto" />
              )}
            </Link>
            <div className="hidden xl:text-lg text-white lg:flex lg:gap-x-6">
              <NavigationOptions
                textColor={
                  pathname === '/' || pathname === '/how-it-works'
                    ? 'white'
                    : 'dark'
                }
              />
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden xl:text-lg lg:block">
              <NavLink
                href="https://app.keeplegals.com/"
                textColor={pathname === '/how-it-works' ? 'white' : 'dark'}
              >
                Sign in
              </NavLink>
            </div>
            <Button
              href="/contact-us"
              color={pathname === '/how-it-works' ? 'white' : 'blue'}
            >
              <span className="text-center text-base xl:text-lg">
                Get a demo
              </span>
            </Button>
            <div className="-mr-1 lg:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
