import type { NextApiRequest, NextApiResponse } from 'next'
import Mailgun from 'mailgun.js'

const formData = require('form-data')
const mailgun = new Mailgun(formData)

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY ?? '',
  url: 'https://api.eu.mailgun.net',
})

type ResponseData = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  try {
    await mg.messages.create('mail.keeplegals.com', {
      from: 'Keep Legals <mailer@mail.keeplegals.com>',
      to: ['info@keeplegals.com'],
      subject: 'Website Contact Form Submission',
      text: 'Form Submission',
      html: `<ul><li><strong>Email:</strong> ${req.body?.email}</li></ul>`,
    })
  } catch (err) {
    // Handle the error - add it to Sentry
  }

  res.status(200).json({})
}
