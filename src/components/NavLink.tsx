import clsx from 'clsx'
import Link from 'next/link'

export function NavLink({
  href,
  children,
  textColor = 'dark',
}: {
  href: string
  children: React.ReactNode
  textColor?: 'white' | 'dark'
}) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900',
        {
          'text-white': textColor === 'white',
        },
        {
          'text-slate-900': textColor === 'dark',
        },
      )}
    >
      {children}
    </Link>
  )
}
