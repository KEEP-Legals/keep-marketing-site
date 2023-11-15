import { Container } from './Container'

const team = [
  {
    name: 'Adam Sargent',
    role: 'Founder & CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    linkedinUrl: 'https://uk.linkedin.com/in/adam-sargent-mba-8b980154',
    bio: (
      <>
        With 15 years industry expertise, Adam has been making waves as
        Executive Producer at major studios and agencies, most recently running
        a slate of Marvel shows at Framestore.
        <br />
        <br />
        Currently, Adam serves as Executive Producer at Unit 9, focusing on
        cutting-edge technology for brands, pioneering AI projects for giants
        like Pepsi and Meta.
      </>
    ),
  },
  {
    name: 'Campbell Beaton',
    role: 'Founder & COO',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    websiteUrl: 'https://www.campbellbeaton.com/',
    bio: (
      <>
        Highly regarded as a leading freelance Executive Producer, Campbell has
        been the powerhouse behind some of the most innovative campaigns in
        global advertising.
        <br />
        <br />
        Having worked previously with Apple, Burberry, and Google, he now
        manages a complex portfolio of projects with various usage requirements.
      </>
    ),
  },
]

export function MeetTheTeam() {
  return (
    <section
      id="meet-the-team"
      aria-label="Meet the team"
      className="bg-white py-24 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-center">
            Meet the team
          </h2>
        </div>

        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {team.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <img
                className="aspect-[4/5] max-h-64 w-52 flex-none rounded-2xl object-cover"
                src={person.imageUrl}
                alt={person.name}
              />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  {person.linkedinUrl && (
                    <li>
                      <a
                        href={person.linkedinUrl}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  )}
                  {person.websiteUrl && (
                    <li>
                      <a
                        href={person.websiteUrl}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Website</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                          />
                        </svg>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
