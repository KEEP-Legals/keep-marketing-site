import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { WrapperWithTitle } from '@/components/WrapperWithTitle'
import React from 'react'

function SwirlyDoodle(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  )
}

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
    <section className="order-first flex flex-col justify-between items-center gap-y-4 rounded-3xl bg-white px-6 py-8 text-gray-900 sm:px-8 lg:order-none">
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
        <Container className="py-8 flex justify-center">
          <div className="grid max-w-2xl grid-cols-1 gap-y-10 lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:gap-x-8">
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
