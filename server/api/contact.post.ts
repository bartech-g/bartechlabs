const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function field(body: Record<string, unknown>, key: string, max: number) {
  const value = typeof body[key] === 'string' ? (body[key] as string).trim() : ''
  return value.slice(0, max)
}

export default defineEventHandler(async (event) => {
  const body = await readBody<Record<string, unknown>>(event) ?? {}

  // Honeypot: bots fill every field. Pretend it worked.
  if (field(body, 'hp_field', 200)) {
    return { ok: true }
  }

  const name = field(body, 'name', 200)
  const email = field(body, 'email', 320)
  const projectType = field(body, 'projectType', 100)
  const idea = field(body, 'idea', 5000)
  const locale = field(body, 'locale', 5)

  if (!name || !idea || !EMAIL_RE.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid form data' })
  }

  const { contactTo } = useRuntimeConfig(event)
  const { sendMail } = useNodeMailer()
  try {
    await sendMail({
      to: contactTo,
      replyTo: { name, address: email },
      subject: `[bartechlabs] ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType || '-'}`,
        `Language: ${locale || '-'}`,
        '',
        idea
      ].join('\n')
    })
  }
  catch (error) {
    console.error('[contact] sendMail failed', error)
    throw createError({ statusCode: 500, statusMessage: 'Could not send message' })
  }

  return { ok: true }
})
