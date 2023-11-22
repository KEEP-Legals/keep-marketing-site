'use client'

import Image from 'next/image'

import backgroundImage from '@/images/background-features.jpg'
import { Container } from './Container'
import { Button } from './Button'
import { FormEventHandler, useState } from 'react'

export function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    // Don't make a HTTP Request without us.
    e.preventDefault()

    // Get the data container in the form.
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())

    const target = e.currentTarget

    setIsSubmitting(true)
    fetch('/api/contact', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(data),
    })
      .then(
        (response) => {
          target.reset()
          console.log('Success: ', response.json())
        },
        (err) => {
          console.log('Err: ', err)
        },
      )
      .finally(() => setIsSubmitting(false))
  }
  return (
    <section
      id="contact-us"
      className="relative overflow-hidden bg-primary-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 "
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get in touch
          </h2>
        </div>
        <div className="tracking-tight text-white">
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first_name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last_name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6"
                >
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Button className="block w-full" color="white" type="submit">
                {isSubmitting ? (
                  <div
                    className="inline-block h-5 w-5 animate-spin rounded-full border-[3px] border-current border-t-transparent text-current"
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Let's talk"
                )}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}
