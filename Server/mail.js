import nodemailer from "nodemailer"

let transporter = null

export function getTransporter() {
  if (transporter) return transporter

  const host = process.env.MAIL_HOST || "smtp.gmail.com"
  const port = parseInt(process.env.MAIL_PORT || process.env.SMTP_PORT || "587", 10)
  const user = process.env.MAIL_USER || process.env.SMTP_USER
  const pass = (process.env.MAIL_PASS || process.env.SMTP_PASS || "").replace(/\s/g, "")

  if (!user || !pass) {
    console.warn("[mail] MAIL_USER / MAIL_PASS not set - mails will be logged only")
    return null
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  return transporter
}

export async function sendMail({ to, subject, html, text, replyTo }) {
  const t = getTransporter()
  const from = process.env.MAIL_FROM || process.env.SMTP_FROM || `"Tanglome" <${process.env.MAIL_USER}>`
  const dest = to || process.env.CONTACT_TO_EMAIL || process.env.MAIL_TO || process.env.MAIL_USER

  if (!t) {
    console.log("[mail:mock] to:", dest, "subject:", subject)
    console.log(text || html?.slice(0, 500))
    return { mocked: true, to: dest, subject }
  }

  const info = await t.sendMail({
    from,
    to: dest,
    subject,
    text,
    html,
    replyTo,
  })
  console.log("[mail:sent]", info.messageId, "to", dest)
  return info
}

export function verifyTransporter() {
  const t = getTransporter()
  if (!t) return Promise.resolve(false)
  return t.verify().then(() => {
    console.log("[mail] transporter verified")
    return true
  }).catch((err) => {
    console.error("[mail] verify failed:", err.message)
    return false
  })
}
