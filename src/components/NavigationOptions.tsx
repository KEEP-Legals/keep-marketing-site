import { MobileNavLink } from '@/components/MobileNavigation'
import { NavLink } from '@/components/NavLink'

export function NavigationOptions({
  isMobile = false,
  textColor = 'dark',
}: {
  isMobile?: boolean
  textColor?: 'white' | 'dark'
}) {
  const CustomTag = isMobile ? MobileNavLink : NavLink
  return (
    <>
      <CustomTag href="/how-it-works" textColor={textColor}>
        How it works
      </CustomTag>
      <CustomTag href="/how-it-works/#artist-management" textColor={textColor}>
        Artist management
      </CustomTag>
      <CustomTag href="/pricing" textColor={textColor}>
        Pricing
      </CustomTag>
      <CustomTag href="/our-story" textColor={textColor}>
        Our Story
      </CustomTag>
      <CustomTag href="/contact-us" textColor={textColor}>
        Contact Us
      </CustomTag>
    </>
  )
}
