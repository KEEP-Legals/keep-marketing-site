import clsx from 'clsx'

interface WrapperWithTitleProps {
  title: string
  children: React.ReactNode
  purple?: boolean
  variant?: 'white' | 'purple' | 'gray'
}

export function WrapperWithTitle({
  title,
  children,
  variant = 'white',
}: WrapperWithTitleProps) {
  return (
    <section
      className={clsx('relative overflow-hidden  pt-20 text-center', {
        'bg-primary-600': variant === 'purple',
        'bg-slate-50': variant === 'white',
        'bg-darker-gray': variant === 'gray',
      })}
    >
      <div className="mx-auto max-w-2xl py-4">
        <h1
          className={clsx(
            'font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-center',
            {
              'text-white': variant === 'purple',
              'text-slate-900': variant === 'gray',
              'text-slate-950': variant === 'white',
            },
          )}
        >
          {title}
        </h1>
      </div>
      {children}
    </section>
  )
}
