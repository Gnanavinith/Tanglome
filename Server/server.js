import "dotenv/config"
import express from "express"
import cors from "cors"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { sendMail, verifyTransporter } from "./mail.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173"

app.use(cors({
  origin: [CLIENT_URL, "http://localhost:5173", "http://localhost:5174", "http://localhost:3000"],
  credentials: true,
}))
app.use(express.json({ limit: "2mb" }))
app.use(express.urlencoded({ extended: true }))

// health
app.get("/health", (_req, res) => res.json({ ok: true, time: new Date().toISOString() }))
app.get("/api/health", (_req, res) => res.json({ ok: true, time: new Date().toISOString() }))

// ── SEO: sitemap, robots, llms (dynamic) ──
const SITE_URL = (process.env.CLIENT_URL || process.env.SITE_URL || "https://tanglome.in").replace(/\/$/, "")
app.get("/sitemap.xml", (req, res) => {
  const blogs = loadJson("blogs.json", []).filter(b => b.published !== false)
  const staticUrls = [
    "", "/work", "/blog", "/about", "/contact", "/start-project",
    "/services/web-development", "/services/ai-automation", "/services/editing-cinematography",
    "/services/ad-campaigns", "/services/social-media-marketing", "/services/mobile-app-development",
  ]
  const blogUrls = blogs.map(b => `/blog/${b.slug}`)
  const all = [...staticUrls, ...blogUrls]
  const now = new Date().toISOString().slice(0, 10)
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${all.map(u => `  <url><loc>${SITE_URL}${u}</loc><lastmod>${now}</lastmod><changefreq>${u.startsWith("/blog/") ? "weekly" : u === "/blog" ? "daily" : "monthly"}</changefreq><priority>${u === "" ? "1.0" : u.startsWith("/blog/") ? "0.7" : "0.8"}</priority></url>`).join("\n")}\n</urlset>`
  res.header("Content-Type", "application/xml; charset=utf-8").send(xml)
})
app.get("/robots.txt", (_req, res) => {
  const txt = `User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\nAllow: /api/blogs\nAllow: /api/health\nHost: ${SITE_URL}\nSitemap: ${SITE_URL}/sitemap.xml\n`
  res.header("Content-Type", "text/plain; charset=utf-8").send(txt)
})
app.get("/llms.txt", (_req, res) => {
  const txt = `# Tanglome\n> Coimbatore-based product studio - web, AI, mobile & growth. Serving all India. Live link in 48h.\n\n## Site\n- URL: ${SITE_URL}\n- Sitemap: ${SITE_URL}/sitemap.xml\n- Blog API: ${SITE_URL.replace("tanglome.in","localhost:5000")}/api/blogs\n- Contact: ${SITE_URL}/contact | hellotanglome@gmail.com | +91 95854 58794\n\n## Services\n- Web Development: ${SITE_URL}/services/web-development\n- AI Automation: ${SITE_URL}/services/ai-automation\n- Editing: ${SITE_URL}/services/editing-cinematography\n- Ads: ${SITE_URL}/services/ad-campaigns\n- Social: ${SITE_URL}/services/social-media-marketing\n- Mobile: ${SITE_URL}/services/mobile-app-development\n`
  res.header("Content-Type", "text/plain; charset=utf-8").send(txt)
})

function escapeHtml(s = "") {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

function wrapHtml({ title, intro, rows }) {
  const rowsHtml = rows.map(([k, v]) => `
    <tr>
      <td style="padding:8px 12px; font-weight:600; color:#6D28D9; border-bottom:1px solid #eee; white-space:nowrap;">${escapeHtml(k)}</td>
      <td style="padding:8px 12px; border-bottom:1px solid #eee; color:#111;">${escapeHtml(v)}</td>
    </tr>`).join("")
  return `
  <div style="font-family: Inter, Arial, sans-serif; max-width:600px; margin:0 auto; background:#ffffff; border:1px solid #eee; border-radius:16px; overflow:hidden;">
    <div style="background:#0A0A0A; color:#fff; padding:20px 24px;">
      <div style="font-size:11px; letter-spacing:0.18em; opacity:0.6;">TANGLOME - INQUIRY</div>
      <div style="font-size:20px; font-weight:700; margin-top:4px;">${escapeHtml(title)}</div>
      <div style="font-size:13px; opacity:0.6; margin-top:4px;">${escapeHtml(intro)}</div>
    </div>
    <table style="width:100%; border-collapse:collapse; font-size:14px;">${rowsHtml}</table>
    <div style="padding:12px 24px; font-size:11px; color:#999; background:#fafafa; border-top:1px solid #eee;">
      Sent from Tanglome website - ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
    </div>
  </div>`
}

// ─────────────────────────────────────
// File persistence helpers (no DB)
// ─────────────────────────────────────
const DATA_DIR = path.join(__dirname, "data")
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })

function loadJson(file, fallback) {
  try {
    const p = path.join(DATA_DIR, file)
    if (!fs.existsSync(p)) return fallback
    return JSON.parse(fs.readFileSync(p, "utf8"))
  } catch { return fallback }
}
function saveJson(file, data) {
  const p = path.join(DATA_DIR, file)
  fs.writeFileSync(p, JSON.stringify(data, null, 2), "utf8")
}
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}
function slugify(s) {
  return String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80)
}

// ─────────────────────────────────────
// Public routes - also persist to files
// ─────────────────────────────────────

// Contact page
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, service, budget, message } = req.body
    if (!name || !phone || !service) return res.status(400).json({ ok: false, error: "name, phone, service required" })
    const subject = `[Tanglome Contact] ${service} - ${name}`
    const rows = [
      ["Name", name],
      ["Email", email || "-"],
      ["Phone", phone],
      ["Service", service],
      ["Budget", budget || "-"],
      ["Message", message || "-"],
    ]
    await sendMail({
      subject,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: wrapHtml({ title: "New Contact Inquiry", intro: `${name} - ${service}`, rows }),
      replyTo: email || undefined,
    })
    // persist
    const contacts = loadJson("contacts.json", [])
    contacts.unshift({ id: uid(), name, email: email || "", phone, service, budget: budget || "", message: message || "", createdAt: new Date().toISOString() })
    saveJson("contacts.json", contacts)
    // also add to users if email present
    if (email) {
      const users = loadJson("users.json", [])
      if (!users.find(u => u.email?.toLowerCase() === email.toLowerCase())) {
        users.unshift({ id: uid(), name, email, phone, service, source: "contact", createdAt: new Date().toISOString() })
        saveJson("users.json", users)
      }
    }
    res.json({ ok: true })
  } catch (e) {
    console.error(e)
    res.status(500).json({ ok: false, error: e.message })
  }
})

// Claim plan (home CTA)
app.post("/api/claim-plan", async (req, res) => {
  try {
    const { name, company, email, phone, service } = req.body
    if (!name || !phone || !service) return res.status(400).json({ ok: false, error: "name, phone, service required" })
    if (email && !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ ok: false, error: "valid email required" })
    const subject = `[Tanglome Claim] ${service} - ${name}${company ? ` (${company})` : ""}`
    const rows = [["Name", name], ["Company", company || "-"], ["Email", email || "-"], ["Phone", phone], ["Service", service]]
    await sendMail({
      subject,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: wrapHtml({ title: "New 21-Day Plan Claim", intro: `${name}${company ? ` - ${company}` : ""} wants a free plan`, rows }),
      replyTo: email || undefined,
    })
    const claims = loadJson("claims.json", [])
    claims.unshift({ id: uid(), name, company: company || "", email: email || "", phone, service, createdAt: new Date().toISOString() })
    saveJson("claims.json", claims)
    if (email) {
      const users = loadJson("users.json", [])
      if (!users.find(u => u.email?.toLowerCase() === email.toLowerCase())) {
        users.unshift({ id: uid(), name, email, phone, service, company: company || "", source: "claim-plan", createdAt: new Date().toISOString() })
        saveJson("users.json", users)
      }
    }
    res.json({ ok: true })
  } catch (e) {
    console.error(e)
    res.status(500).json({ ok: false, error: e.message })
  }
})

// Start project (multi-step)
app.post("/api/start-project", async (req, res) => {
  try {
    const { services: svc, budget, timeline, name, email, phone, company, details } = req.body
    if (!name || !phone || !email) return res.status(400).json({ ok: false, error: "name, email, phone required" })
    const servicesStr = Array.isArray(svc) ? svc.join(", ") : svc || "-"
    const subject = `[Tanglome Start] ${servicesStr} - ${name}`
    const rows = [
      ["Name", name],
      ["Company", company || "-"],
      ["Email", email],
      ["Phone", phone],
      ["Services", servicesStr],
      ["Budget", budget || "-"],
      ["Timeline", timeline || "-"],
      ["Details", details || "-"],
    ]
    await sendMail({
      subject,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: wrapHtml({ title: "New Project Request", intro: `${name} - ${servicesStr}`, rows }),
      replyTo: email,
    })
    const projects = loadJson("projects.json", [])
    projects.unshift({ id: uid(), name, email, phone, company: company || "", services: servicesStr, budget: budget || "", timeline: timeline || "", details: details || "", createdAt: new Date().toISOString() })
    saveJson("projects.json", projects)
    const users = loadJson("users.json", [])
    if (!users.find(u => u.email?.toLowerCase() === email.toLowerCase())) {
      users.unshift({ id: uid(), name, email, phone, service: servicesStr, company: company || "", source: "start-project", createdAt: new Date().toISOString() })
      saveJson("users.json", users)
    }
    res.json({ ok: true })
  } catch (e) {
    console.error(e)
    res.status(500).json({ ok: false, error: e.message })
  }
})

// Subscribe
app.post("/api/subscribe", async (req, res) => {
  try {
    const { email } = req.body
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ ok: false, error: "valid email required" })
    const subject = `[Tanglome Subscribe] ${email}`
    await sendMail({
      subject,
      text: `New subscriber: ${email}`,
      html: wrapHtml({ title: "New Newsletter Subscriber", intro: email, rows: [["Email", email]] }),
    })
    const subs = loadJson("subscribers.json", [])
    if (!subs.find(s => s.email.toLowerCase() === email.toLowerCase())) {
      subs.unshift({ id: uid(), email, createdAt: new Date().toISOString() })
      saveJson("subscribers.json", subs)
    }
    // also mirror to users for bulk mail
    const users = loadJson("users.json", [])
    if (!users.find(u => u.email?.toLowerCase() === email.toLowerCase())) {
      users.unshift({ id: uid(), name: email.split("@")[0], email, phone: "", service: "newsletter", source: "subscribe", createdAt: new Date().toISOString() })
      saveJson("users.json", users)
    }
    res.json({ ok: true })
  } catch (e) {
    console.error(e)
    res.status(500).json({ ok: false, error: e.message })
  }
})

// Signup notification
app.post("/api/signup", async (req, res) => {
 try {
 const { name, email, phone, service } = req.body
 if (!name || !email || !phone) return res.status(400).json({ ok: false, error: "name, email, phone required" })
 const subject = `[Tanglome Signup] ${name} - ${email}`
 const rows = [["Name", name || "-"], ["Email", email || "-"], ["Phone", phone || "-"], ["Service", service || "-"]]
 await sendMail({ subject, text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"), html: wrapHtml({ title: "New Signup", intro: `${name} just signed up`, rows }) })
 const users = loadJson("users.json", [])
 // upsert by email
 const idx = users.findIndex(u => u.email?.toLowerCase() === email.toLowerCase())
 const entry = { id: idx >= 0 ? users[idx].id : uid(), name, email, phone, service: service || "", source: "signup", createdAt: idx >= 0 ? users[idx].createdAt : new Date().toISOString(), updatedAt: new Date().toISOString() }
 if (idx >= 0) users[idx] = entry
 else users.unshift(entry)
 saveJson("users.json", users)
 res.json({ ok: true })
 } catch (e) {
 console.error(e)
 res.status(500).json({ ok: false, error: e.message })
 }
})

// ─────────────────────────────────────
// Admin auth
// ─────────────────────────────────────
const ADMIN_EMAIL = process.env.ADMIN_EMAIL
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
const validAdminTokens = new Set()

function generateAdminToken(email) {
  const raw = `${email}:${Date.now()}:${Math.random().toString(36).slice(2)}`
  const token = Buffer.from(raw).toString("base64")
  validAdminTokens.add(token)
  // keep set bounded
  if (validAdminTokens.size > 100) {
    const first = validAdminTokens.values().next().value
    validAdminTokens.delete(first)
  }
  return token
}

function requireAdmin(req, res, next) {
  const header = req.headers["x-admin-token"] || req.headers["authorization"]?.replace(/^Bearer\s+/i, "")
  if (!header) return res.status(401).json({ ok: false, error: "Missing admin token" })
  // allow tokens generated above OR legacy check: token decodes to admin email
  if (validAdminTokens.has(header)) return next()
  try {
    const decoded = Buffer.from(header, "base64").toString("utf8")
    const emailPart = decoded.split(":")[0]
    if (emailPart && ADMIN_EMAIL && emailPart.trim().toLowerCase() === String(ADMIN_EMAIL).trim().toLowerCase()) {
      return next()
    }
  } catch {}
  // fallback: raw email equals?
  if (ADMIN_EMAIL && header.trim().toLowerCase() === String(ADMIN_EMAIL).trim().toLowerCase()) return next()
  return res.status(401).json({ ok: false, error: "Invalid admin token" })
}

function handleAdminLogin(req, res) {
 const { email, password } = req.body || {}
 if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
 return res.status(500).json({ ok: false, error: "Admin credentials not configured in .env (ADMIN_EMAIL / ADMIN_PASSWORD)" })
 }
 if (!email || !password) return res.status(400).json({ ok: false, error: "email and password required" })
 if (String(email).trim().toLowerCase() === String(ADMIN_EMAIL).trim().toLowerCase() && String(password) === String(ADMIN_PASSWORD)) {
 const token = generateAdminToken(ADMIN_EMAIL)
 return res.json({ ok: true, token, user: { email: ADMIN_EMAIL, role: "admin" } })
 }
 return res.status(401).json({ ok: false, error: "Invalid email or password" })
}

app.post("/api/login", handleAdminLogin)
app.post("/api/admin/login", handleAdminLogin)
app.post("/api/admin/verify", requireAdmin, (req, res) => res.json({ ok: true }))

// ─────────────────────────────────────
// Blogs (public + admin)
// ─────────────────────────────────────
app.get("/api/blogs", (req, res) => {
  const blogs = loadJson("blogs.json", [])
  const published = blogs.filter(b => b.published !== false)
  res.json({ ok: true, blogs: published })
})
app.get("/api/blogs/:slug", (req, res) => {
  const blogs = loadJson("blogs.json", [])
  const published = blogs.filter(b => b.published !== false)
  const blog = published.find(b => b.slug === req.params.slug || b.id === req.params.slug)
  if (!blog) return res.status(404).json({ ok: false, error: "Blog not found" })
  res.json({ ok: true, blog })
})
app.get("/api/admin/blogs", requireAdmin, (req, res) => {
  const blogs = loadJson("blogs.json", [])
  res.json({ ok: true, blogs })
})
app.post("/api/admin/blogs", requireAdmin, (req, res) => {
  const { title, slug, excerpt, content, cover, tags, published } = req.body
  if (!title || !content) return res.status(400).json({ ok: false, error: "title and content required" })
  const blogs = loadJson("blogs.json", [])
  const id = uid()
  const finalSlug = slug ? slugify(slug) : slugify(title)
  // ensure unique slug
  let uniqueSlug = finalSlug
  let n = 1
  while (blogs.find(b => b.slug === uniqueSlug)) uniqueSlug = `${finalSlug}-${n++}`
  const blog = {
    id,
    title: title.trim(),
    slug: uniqueSlug,
    excerpt: excerpt || content.slice(0, 160),
    content,
    cover: cover || "",
    tags: Array.isArray(tags) ? tags : String(tags || "").split(",").map(s => s.trim()).filter(Boolean),
    published: published !== false,
    author: ADMIN_EMAIL,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  blogs.unshift(blog)
  saveJson("blogs.json", blogs)
  res.json({ ok: true, blog })
})
app.put("/api/admin/blogs/:id", requireAdmin, (req, res) => {
  const blogs = loadJson("blogs.json", [])
  const idx = blogs.findIndex(b => b.id === req.params.id)
  if (idx === -1) return res.status(404).json({ ok: false, error: "Blog not found" })
  const b = blogs[idx]
  const { title, slug, excerpt, content, cover, tags, published } = req.body
  if (title !== undefined) b.title = title
  if (slug !== undefined) {
    const s = slugify(slug)
    if (s && s !== b.slug && !blogs.find(x => x.slug === s)) b.slug = s
  }
  if (excerpt !== undefined) b.excerpt = excerpt
  if (content !== undefined) b.content = content
  if (cover !== undefined) b.cover = cover
  if (tags !== undefined) b.tags = Array.isArray(tags) ? tags : String(tags).split(",").map(s=>s.trim()).filter(Boolean)
  if (published !== undefined) b.published = !!published
  b.updatedAt = new Date().toISOString()
  blogs[idx] = b
  saveJson("blogs.json", blogs)
  res.json({ ok: true, blog: b })
})
app.delete("/api/admin/blogs/:id", requireAdmin, (req, res) => {
  let blogs = loadJson("blogs.json", [])
  const before = blogs.length
  blogs = blogs.filter(b => b.id !== req.params.id)
  if (blogs.length === before) return res.status(404).json({ ok: false, error: "Blog not found" })
  saveJson("blogs.json", blogs)
  res.json({ ok: true })
})

// ─────────────────────────────────────
// Users / subscribers / stats (admin)
// ─────────────────────────────────────
app.get("/api/admin/users", requireAdmin, (req, res) => {
  const users = loadJson("users.json", [])
  res.json({ ok: true, users })
})
app.get("/api/admin/subscribers", requireAdmin, (req, res) => {
  const subs = loadJson("subscribers.json", [])
  res.json({ ok: true, subscribers: subs })
})
app.get("/api/admin/contacts", requireAdmin, (req, res) => {
  const contacts = loadJson("contacts.json", [])
  const claims = loadJson("claims.json", [])
  const projects = loadJson("projects.json", [])
  res.json({ ok: true, contacts, claims, projects })
})
app.get("/api/admin/stats", requireAdmin, (req, res) => {
  const users = loadJson("users.json", [])
  const blogs = loadJson("blogs.json", [])
  const subs = loadJson("subscribers.json", [])
  const contacts = loadJson("contacts.json", [])
  const claims = loadJson("claims.json", [])
  const projects = loadJson("projects.json", [])
  res.json({
    ok: true,
    stats: {
      users: users.length,
      blogs: blogs.length,
      publishedBlogs: blogs.filter(b=>b.published!==false).length,
      subscribers: subs.length,
      contacts: contacts.length,
      claims: claims.length,
      projects: projects.length,
    }
  })
})
app.delete("/api/admin/users/:id", requireAdmin, (req, res) => {
  let users = loadJson("users.json", [])
  const before = users.length
  users = users.filter(u => u.id !== req.params.id)
  if (users.length === before) return res.status(404).json({ ok: false, error: "User not found" })
  saveJson("users.json", users)
  res.json({ ok: true })
})

// Bulk mail
app.post("/api/admin/bulk-mail", requireAdmin, async (req, res) => {
  try {
    const { subject, html, text, emails } = req.body
    if (!subject || (!html && !text)) return res.status(400).json({ ok: false, error: "subject and html/text required" })
    let recipients = []
    if (Array.isArray(emails) && emails.length) {
      recipients = emails
    } else {
      const users = loadJson("users.json", [])
      const subs = loadJson("subscribers.json", [])
      const set = new Set()
      users.forEach(u => u.email && set.add(u.email.toLowerCase()))
      subs.forEach(s => s.email && set.add(s.email.toLowerCase()))
      recipients = [...set]
    }
    if (!recipients.length) return res.status(400).json({ ok: false, error: "No recipients found" })

    // build html wrapper if plain
    const htmlBody = html || `<div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#111"><h2 style="color:#6D28D9">${escapeHtml(subject)}</h2><p style="white-space:pre-wrap">${escapeHtml(text)}</p></div>`

    // send sequentially to respect rate limits, collect results
    let sent = 0, failed = 0
    const errors = []
    // use nodemailer directly to send to multiple via BCC batch or individually
    // For demo: send one mail with BCC to all (preserves privacy) + also log
    // If transporter exists, send as bulk BCC
    const t = (await import("./mail.js")).then ? null : null // placeholder

    // Actually use sendMail helper but we need to allow custom to
    const { getTransporter } = await import("./mail.js")
    const transporter = getTransporter()
    if (!transporter) {
      console.log(`[bulk-mail:mock] to ${recipients.length} | subject: ${subject}`)
      return res.json({ ok: true, mocked: true, recipients: recipients.length, sent: recipients.length })
    }

    // Chunk into 50 per mail to avoid SMTP limits
    const CHUNK = 50
    for (let i = 0; i < recipients.length; i += CHUNK) {
      const chunk = recipients.slice(i, i + CHUNK)
      try {
        const from = process.env.MAIL_FROM || process.env.SMTP_FROM || `"Tanglome" <${process.env.MAIL_USER}>`
        await transporter.sendMail({
          from,
          to: process.env.MAIL_USER, // envelope to self
          bcc: chunk,
          subject,
          text: text || undefined,
          html: htmlBody,
        })
        sent += chunk.length
      } catch (e) {
        failed += chunk.length
        errors.push(e.message)
        console.error("[bulk-mail chunk failed]", e.message)
      }
    }

    // log history
    const history = loadJson("mail_history.json", [])
    history.unshift({ id: uid(), subject, recipients: recipients.length, sent, failed, createdAt: new Date().toISOString() })
    saveJson("mail_history.json", history.slice(0, 100))

    res.json({ ok: true, sent, failed, total: recipients.length, errors: errors.slice(0,3) })
  } catch (e) {
    console.error(e)
    res.status(500).json({ ok: false, error: e.message })
  }
})
app.get("/api/admin/mail-history", requireAdmin, (req, res) => {
  const h = loadJson("mail_history.json", [])
  res.json({ ok: true, history: h })
})

app.listen(PORT, async () => {
  console.log(`[server] listening on http://localhost:${PORT}`)
  await verifyTransporter()
})
