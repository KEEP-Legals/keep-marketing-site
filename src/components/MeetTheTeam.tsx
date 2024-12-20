import imageAdam from '@/images/our-story/adam-headshot.jpg'
import imageCampbell from '@/images/our-story/campbell-headshot.jpg'
import imageWhereItAllBegan from '@/images/our-story/where-it-all-began.png'
import imageOurValues from '@/images/our-story/our-values.png'
import { ItemSection } from '@/components/ItemSection'
import { WrapperWithTitle } from '@/components/WrapperWithTitle'

const sectionItems = [
  {
    title: 'Meet the team',
    subtitle: 'Adam Sargent, Founder & CEO',
    imageSource: {
      src: imageAdam,
      alt: 'Adam Sargent',
    },
    text: `
        With 15 years industry experience, Adam has been making waves as an
        Executive Producer, working at the top end of VFX on Harry Potter, James
        Bond, and running a slate of Marvel shows at Framestore. Most recently Adam serves as Executive Producer at Unit 9,
        focusing on cutting-edge technology for brands, pioneering AI projects for giants like Pepsi and Meta.
    `,
  },
  {
    title: 'Meet the team',
    subtitle: 'Campbell Beaton, Founder & COO',
    imageSource: {
      src: imageCampbell,
      alt: 'Campbell Beaton',
    },
    text: `
        Highly regarded as a leading freelance Executive Producer and Director,
        Campbell has been the powerhouse behind some of the most innovative
        campaigns in global advertising. Having worked previously with Apple, Burberry, and Google,
        he now manages a complex portfolion of projects with various usage requirements.
    `,
  },
  {
    title: 'Where it all began',
    imageSource: {
      src: imageWhereItAllBegan,
      alt: 'where it all began',
    },
    text: `
        Our team has lived advertising production for our careers. 
        We got ried of looking after major brand's campaign rights contracting and payments and being liable, 
        so we decided to do soemthing about it!
    `,
  },
  {
    title: 'Our values',
    imageSource: {
      src: imageOurValues,
      alt: 'our values',
    },
    text: `
        Keep is about looking after every stakeholder in the creative process. 
        We bring transparency where it has been lacking previously. 
        Our reminder system and centralised database allows for all stakeholders in IP rights to know 
        exactly what the terrms are on their contracts and when they are up for renewal. We believe in 
        looking after people at the heart of what we do.
    `,
  },
]

export function MeetTheTeam() {
  return (
    <WrapperWithTitle title="Where it all began">
      {sectionItems.map((item, itemIndex) => (
        <ItemSection
          key={item.title}
          imageFetchPriority={itemIndex === 0}
          imageSource={item.imageSource}
          title={item.title}
          subtitle={item.subtitle}
          text={item.text}
          reverseOrder={itemIndex % 2 === 0}
          variant={itemIndex % 2 === 0 ? 'purple' : 'white'}
        />
      ))}
    </WrapperWithTitle>
  )
}
