import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { WrapperWithTitle } from '@/components/WrapperWithTitle'
import React from 'react'

function CheckIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className,
      )}
      {...props}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  priceSuffix,
  priceComment = '',
  description,
  href,
  features,
}: {
  name: string
  price: string
  priceSuffix: string
  priceComment?: React.ReactNode
  description: string
  href: string
  features: Array<React.ReactNode>
}) {
  return (
    <section className="order-first flex flex-col items-center justify-between gap-y-4 rounded-3xl bg-white px-6 py-8 text-gray-900 sm:px-8 lg:order-none">
      <div>
        <h3 className="font-display text-lg ">{name}</h3>
        <div>
          <p className="font-display text-5xl font-semibold tracking-tight">
            {price}
          </p>
          <p className="font-display font-light">{priceSuffix}</p>
          <p className="font-display text-sm font-light">{priceComment}</p>
        </div>
        {description ? <p className="text-base">{description}</p> : <br />}
      </div>
      <ul className="flex flex-col gap-y-3 text-left text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex">
            <CheckIcon />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant="solid"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        Get in touch
      </Button>
    </section>
  )
}

export function Pricing() {
  return (
    <WrapperWithTitle title="Plans that scale with you">
      <div className="bg-primary-600">
        <Container className="flex justify-center py-8">
          <div className="grid max-w-2xl grid-cols-1 gap-y-4 lg:max-w-none lg:grid-cols-3 lg:gap-x-4 xl:gap-x-8">
            <Plan
              name="Single Project"
              price="£0"
              priceSuffix="per month"
              priceComment={
                <>
                  Plus <strong>4%</strong> of project usage
                </>
              }
              description="Good for running small projects"
              href="/contact-us"
              features={[
                <>
                  up to <strong>5 users</strong>
                </>,
                <strong key="2">1 custom contract</strong>,
                <>
                  Access to <strong>all</strong> of KEEP’s industry-approved
                  contracts
                </>,
                <>
                  Automatically <strong>renew</strong> projects
                </>,
              ]}
            />
            <Plan
              name="Advanced Package"
              price="£1000"
              priceSuffix="per month"
              priceComment={
                <>
                  Plus <strong>2%</strong> of project usage
                </>
              }
              description="Good for medium-sized production companies"
              href="/contact-us"
              features={[
                <>
                  Up to <strong>10 users</strong>
                </>,
                <strong key="2">2 custom contracts</strong>,
                <>
                  Unlimited access to <strong>all</strong> of KEEP’s
                  industry-approved contracts
                </>,
                <>
                  Automatically <strong>renew</strong> projects
                </>,
                <>
                  Unlimited access to industry-standard documents, including the{' '}
                  <strong>PIBS</strong>
                </>,
              ]}
            />
            <Plan
              name="Enterprise"
              price="Custom"
              priceSuffix="Let's talk"
              description="Good for enterprice-sized production companies"
              href="/contact-us"
              features={[
                <strong key="1">Unlimited users</strong>,
                <strong key="2">Unlimited custom contracts</strong>,

                <>
                  Unlimited access to <strong>all</strong> of KEEP’s
                  industry-approved contracts
                </>,
                <>
                  Automatically <strong>renew</strong> projects
                </>,
                <>
                  Unlimited access to industry-standard documents, including the{' '}
                  <strong>PIBS</strong>
                </>,
              ]}
            />
          </div>
        </Container>
      </div>
    </WrapperWithTitle>
  )
}
