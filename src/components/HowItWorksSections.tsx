import imageUndrawSchedule from '@/images/how-it-works/undraw_schedule.svg'
import imageUndarawPayOnline from '@/images/how-it-works/undraw_pay_online.svg'
import imageUndrawAgreement from '@/images/how-it-works/undraw_agreement.svg'
import { ItemSection } from '@/components/ItemSection'

const sectionItems = [
  {
    title: 'Remove days off your contracting on every project',
    text: `
    PIBS, talent contracts, usage memos - create 100s of contracts in minutes. 
    Use one of our templates or upload your own, either way KEEP will automatically generate and update the necessary paperwork, 
    pulling information from your project fact sheet. 
    Do it once, KEEP will take it from there with full customisation available at every level.
        `,
    imageSource: {
      src: imageUndrawSchedule,
      alt: 'undraw schedule',
    },
  },
  {
    title: 'Make campaign payments secure and simple',
    text: `
    We are FCA and EBA compliant. KEEP automatically knows who is owed what and when and 
    generate invoices for all IP creators, making sure that people are compensated fairly and quickly, 
    with all payments made as soon as the funds are received and all contracts are fully executed. 
    What’s more, KEEP can hold a fully executed contract until payment is received making the process for deliveries more structured.
        `,
    imageSource: {
      src: imageUndarawPayOnline,
      alt: 'undraw pay online',
    },
  },
  {
    title: 'Simplify options and extensions to be instantaneous',
    text: `
    KEEP tracks usage terms and the associated rights holders, generating the necessary contractual 
    and financial paperwork ahead of time so renewals are done swiftly, 
    easily and without having to go back to the negotiating table.
        `,
    imageSource: {
      src: imageUndrawAgreement,
      alt: 'undraw agreement',
    },
  },
]

export function HowItWorksSections() {
  return (
    <section>
      {sectionItems.map((item, itemIndex) => (
        <ItemSection
          key={item.title}
          imageFetchPriority={itemIndex === 0}
          {...item}
          reverseOrder={itemIndex % 2 === 0}
          variant={itemIndex % 2 === 0 ? 'gray' : 'white'}
        />
      ))}
    </section>
  )
}
