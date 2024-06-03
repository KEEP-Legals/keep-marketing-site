import { Container } from './Container'
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
  const textColorClass = purple ? 'text-white' : 'text-gray-900'
  return (
    <section className={backgroundClass}>
      <Container
        id="get-started-today"
        className="relative overflow-hidden  py-32"
      >
        <div className={`flex flex-col gap-6 xl:flex-row ${reverseOrderClass}`}>
          <figure>
            <Image
              className="aspect-[4/5] flex-none rounded-2xl object-cover"
              src={imageSource.src}
              alt={imageSource.alt}
              width={imageSource.width}
              height={imageSource.height}
            />
          </figure>
          <div className={`flex flex-col gap-y-6 ${textColorClass}`}>
            <h3 className="text-2xl font-semibold">{title}</h3>
            {subtitle ? (
              <p className="text-base font-semibold">{subtitle}</p>
            ) : null}
            <p className="text-base">{text}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
