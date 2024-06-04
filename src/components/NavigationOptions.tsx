import { MobileNavLink } from '@/components/Header'
import { NavLink } from '@/components/NavLink'

export function NavigationOptions({
  isMobile = false,
}: {
  isMobile?: boolean
}) {
  const CustomTag = isMobile ? MobileNavLink : NavLink
  return (
    <>
      <CustomTag href="/">Home</CustomTag>
      <CustomTag href="/how-it-works">How it works</CustomTag>
      <CustomTag href="/how-it-works/#artist-management">
        Artist management
      </CustomTag>
      <CustomTag href="/pricing">Pricing</CustomTag>
      <CustomTag href="/our-story">Our Story</CustomTag>
      <CustomTag href="/contact-us">Contact Us</CustomTag>
    </>
  )
}
