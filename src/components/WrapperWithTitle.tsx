import clsx from 'clsx'
import { text } from 'stream/consumers'

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
        "bg-[url('/images/background-features.jpg')] bg-primary-600 bg-cover bg-center":
          purple,
        'bg-slate-50': !purple,
      })}
    >
      <div className="mx-auto max-w-2xl py-4">
        <h2
          className={clsx(
            'font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-center',
            {
              'text-white': purple,
            },
          )}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}
