import imageAdam from '@/images/headshots/adam.jpg'
import { ItemSection } from './ItemSection'
const sectionItems = [
  {
    title: 'Remove days off your contracting on every project',
    text: `
            KEEP is the advertising industry's premier solution for ensuring the safety and security of contracts and payments. 
            What does this mean for IP holders (talent) and Management?
        `,
    imageSource: {
      src: imageAdam,
      alt: 'Adam Sargent',
    },
  },
  {
    title: 'Make campaign payments secure and simple',
    text: `
            KEEP is the advertising industry's premier solution for ensuring the safety and security of contracts and payments. 
            What does this mean for IP holders (talent) and Management?
        `,
    imageSource: {
      src: imageAdam,
      alt: 'Adam Sargent',
    },
  },
  {
    title: 'Simplify options and extensions to be instantaneous',
    text: `
            KEEP is the advertising industry's premier solution for ensuring the safety and security of contracts and payments. 
            What does this mean for IP holders (talent) and Management?
        `,
    imageSource: {
      src: imageAdam,
      alt: 'Adam Sargent',
    },
  },
]

export function HowItWorksSections() {
  return (
    <section>
      {sectionItems.map((item, itemIndex) => (
        <ItemSection
          key={item.title}
          {...item}
          reverseOrder={itemIndex % 2 !== 0}
          purple={itemIndex % 2 === 0}
        />
      ))}
    </section>
  )
}
