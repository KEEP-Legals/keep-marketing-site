'use client'
import { Container } from '@/components/Container'
import { Button } from './Button'
import { FormEventHandler, useState } from 'react'

export function JustEmailForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  /**
   * Don't work yet
   */
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
    <section className="bg-primary-600 py-16 text-white">
      <Container className="flex flex-col justify-center gap-y-8 text-left">
        <div>
          <h2 className="text-2xl font-semibold">
            Limitless customisation. Your contracts, your way.
          </h2>
          <p className="text-lg">
            Unlock the power of flexible, automated usage rights contracting.
            It&apos;s time to get back to creating.
          </p>
        </div>
        <form
          action="#"
          className="flex flex-wrap items-center gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <label htmlFor="email">Want to know more?</label>
            <input
              type="email"
              id="email"
              placeholder="Adress email"
              autoComplete="email"
              required
              className="rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <Button color="white" type="submit">
            {isSubmitting ? (
              <div
                className="inline-block h-5 w-5 animate-spin rounded-full border-[3px] border-current border-t-transparent text-current"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              'Submit'
            )}
          </Button>
        </form>
      </Container>
    </section>
  )
}
