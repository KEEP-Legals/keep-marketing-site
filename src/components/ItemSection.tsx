import { AppearanceTransition } from '@/components/AppearanceTransition'
import { Container } from '@/components/Container'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'

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
  purple?: boolean
  reverseOrder?: boolean
}

export function ItemSection({
  text,
  title,
  subtitle = '',
  imageSource,
  purple = false,
  reverseOrder = false,
}: ItemSectionProps) {
  const backgroundClass = purple ? 'bg-primary-600' : 'bg-white'
  const reverseOrderClass = reverseOrder ? 'xl:flex-row-reverse' : ''
  const textColorClass = purple ? 'text-primary-100' : 'text-slate-900'

  return (
    <section
      className={clsx({
        'bg-primary-600': purple,
        'bg-slate-50': !purple,
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
                className="aspect-[4/5] flex-none object-contain sm:max-w-xl"
                src={imageSource.src}
                alt={imageSource.alt}
              />
            </figure>
          </AppearanceTransition>
          <div
            className={clsx('flex flex-col gap-y-6', {
              'text-primary-100': purple,
              'text-slate-900': !purple,
            })}
          >
            <h3 className="text-2xl font-semibold">{title}</h3>
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
