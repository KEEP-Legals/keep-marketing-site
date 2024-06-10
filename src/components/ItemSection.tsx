import { AppearanceTransition } from '@/components/AppearanceTransition'
import { Container } from '@/components/Container'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import * as React from 'react'

type ItemSectionProps = {
  text: JSX.Element | string
  title: string
  subtitle?: string
  imageSource: {
    src: string | StaticImageData
    alt: string
    width?: number
    height?: number
  }
  variant?: 'white' | 'purple' | 'gray'
  reverseOrder?: boolean
  imageFetchPriority?: boolean
  titleTag?: keyof React.JSX.IntrinsicElements
}

export function ItemSection({
  text,
  title,
  titleTag = 'h2',
  subtitle = '',
  imageSource,
  variant = 'white',
  reverseOrder = false,
  imageFetchPriority = false,
}: ItemSectionProps) {
  const TitleTag = titleTag
  return (
    <section
      className={clsx({
        'bg-primary-600': variant === 'purple',
        'bg-slate-50': variant === 'white',
        'bg-darker-gray': variant === 'gray',
      })}
    >
      <Container id="get-started-today" className="text-left">
        <div
          className={clsx(
            'flex flex-col items-center justify-center py-4 xl:flex-row xl:gap-x-8',
            {
              'xl:flex-row-reverse': reverseOrder,
            },
          )}
        >
          <AppearanceTransition>
            <figure className="flex items-center justify-center py-2">
              <Image
                priority={imageFetchPriority}
                className="aspect-[4/5] flex-none object-contain sm:max-w-xl"
                src={imageSource.src}
                alt={imageSource.alt}
              />
            </figure>
          </AppearanceTransition>
          <div
            className={clsx('flex flex-col gap-y-6', {
              'text-primary-100': variant === 'purple',
              'text-slate-950': variant === 'gray',
              'text-slate-900': variant === 'white',
            })}
          >
            <TitleTag className="text-2xl font-semibold">{title}</TitleTag>
            {subtitle ? (
              <p className="text-lg font-semibold">{subtitle}</p>
            ) : null}
            <p className="text-lg">{text}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
