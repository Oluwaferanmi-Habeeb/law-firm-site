const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function toStr(value) {
  return typeof value === 'string' ? value : ''
}

function getClientIp(req) {
  const forwardedFor = toStr(req.headers['x-forwarded-for'])
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  return (
    toStr(req.headers['x-real-ip']) ||
    toStr(req.socket?.remoteAddress) ||
    toStr(req.connection?.remoteAddress)
  )
}

function safeJsonParse(value) {
  if (!value) return null
  if (typeof value === 'object') return value
  if (typeof value !== 'string') return null
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

function textEmail(payload) {
  const lines = [
    'New website inquiry',
    '',
    `Name: ${payload.fullName || ''}`,
    `Email: ${payload.email || ''}`,
    `Phone: ${payload.phone || ''}`,
    `Company: ${payload.company || ''}`,
    '',
    'Message:',
    payload.message || '',
    '',
    `Source: ${payload.source || 'Website Contact Form'}`,
  ]

  return lines.join('\n')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed.' })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL

  if (!resendApiKey || !toEmail || !fromEmail) {
    return res.status(501).json({
      ok: false,
      error:
        'Server email is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL in Vercel.',
    })
  }

  const payload = safeJsonParse(req.body)
  if (!payload) {
    return res.status(400).json({ ok: false, error: 'Invalid JSON payload.' })
  }

  const website = toStr(payload.website).trim()
  if (website) {
    return res.status(200).json({ ok: true })
  }

  const fullName = toStr(payload.fullName).trim()
  const email = toStr(payload.email).trim()
  const phone = toStr(payload.phone).trim()
  const company = toStr(payload.company).trim()
  const message = toStr(payload.message).trim()

  if (!fullName || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields.' })
  }

  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email address.' })
  }

  const ip = getClientIp(req)
  const ua = toStr(req.headers['user-agent'])
  const now = new Date().toISOString()

  const outbound = {
    from: fromEmail,
    to: [toEmail],
    subject: `Website inquiry — ${fullName}`,
    text: `${textEmail({ fullName, email, phone, company, message, source: payload.source })}\n\nMeta:\nIP: ${ip}\nUA: ${ua}\nAt: ${now}`,
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(outbound),
    })

    if (!response.ok) {
      const bodyText = await response.text().catch(() => '')
      return res.status(502).json({
        ok: false,
        error: 'Email provider error.',
        details: bodyText ? bodyText.slice(0, 500) : undefined,
      })
    }

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(502).json({ ok: false, error: 'Failed to send message.' })
  }
}

