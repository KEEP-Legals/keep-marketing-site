import clsx from 'clsx'

interface WrapperWithTitleProps {
  title: string
  children: React.ReactNode
  purple?: boolean
}

export function WrapperWithTitle({
  title,
  children,
  purple = false,
}: WrapperWithTitleProps) {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className={clsx('relative overflow-hidden  py-20 text-center', {
        'bg-primary-600': purple,
        'bg-slate-50': !purple,
      })}
    >
      <div className="mx-auto max-w-2xl py-4">
        <h1
          className={clsx(
            'font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-center',
            {
              'text-white': purple,
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
