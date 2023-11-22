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
    const data = await mg.messages.create('mail.keeplegals.com', {
      from: 'Keep Legals <mailer@mail.keeplegals.com>',
      to: ['shane@ivodigital.com', 'info@keeplegals.com'],
      subject: 'Website Contact Form Submission',
      text: req.body?.message ?? 'Form Submission',
      html: `<ul><li><strong>First name:</strong> ${req.body?.first_name}</li><li><strong>Last name:</strong> ${req.body?.last_name}</li><li><strong>Company:</strong> ${req.body?.company}</li><li><strong>Email:</strong> ${req.body?.email}</li><li><strong>Message:</strong> ${req.body?.message}</li></ul>`,
    })
    console.log('Submitted: ', data)
  } catch (err) {
    console.log('Error: ', err)
  }

  res.status(200).json({})
}
