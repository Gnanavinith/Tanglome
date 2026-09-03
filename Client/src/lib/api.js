const API = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "")

function getAdminToken() {
  try { return localStorage.getItem("tanglome_admin_token") || "" } catch { return "" }
}

function authHeaders() {
  const t = getAdminToken()
  return t ? { "x-admin-token": t } : {}
}

async function request(path, { method = "GET", body, headers = {} } = {}) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: { "Content-Type": "application/json", ...authHeaders(), ...headers },
    body: body ? JSON.stringify(body) : undefined,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`)
  return data
}

async function post(path, body) {
  return request(path, { method: "POST", body })
}
async function get(path) {
  return request(path, { method: "GET" })
}
async function put(path, body) {
  return request(path, { method: "PUT", body })
}
async function del(path) {
  return request(path, { method: "DELETE" })
}

export const api = {
  // public
  contact: (payload) => post("/api/contact", payload),
  claimPlan: (payload) => post("/api/claim-plan", payload),
  startProject: (payload) => post("/api/start-project", payload),
  subscribe: (payload) => post("/api/subscribe", payload),
  signup: (payload) => post("/api/signup", payload),
  login: (payload) => post("/api/login", payload),
  adminLogin: (payload) => post("/api/admin/login", payload),
  blogs: () => get("/api/blogs"),
  blog: (slug) => get(`/api/blogs/${encodeURIComponent(slug)}`),

  // admin - require token
  adminVerify: () => post("/api/admin/verify", {}),
  adminBlogs: () => get("/api/admin/blogs"),
  adminCreateBlog: (payload) => post("/api/admin/blogs", payload),
  adminUpdateBlog: (id, payload) => put(`/api/admin/blogs/${id}`, payload),
  adminDeleteBlog: (id) => del(`/api/admin/blogs/${id}`),
  adminUsers: () => get("/api/admin/users"),
  adminSubscribers: () => get("/api/admin/subscribers"),
  adminContacts: () => get("/api/admin/contacts"),
  adminStats: () => get("/api/admin/stats"),
  adminDeleteUser: (id) => del(`/api/admin/users/${id}`),
  adminBulkMail: (payload) => post("/api/admin/bulk-mail", payload),
  adminMailHistory: () => get("/api/admin/mail-history"),
}

export function setAdminSession({ token, user }) {
  try {
    if (token) localStorage.setItem("tanglome_admin_token", token)
    if (user) localStorage.setItem("tanglome_admin_user", JSON.stringify(user))
    localStorage.setItem("tanglome_admin", "1")
  } catch {}
}
export function clearAdminSession() {
  try {
    localStorage.removeItem("tanglome_admin_token")
    localStorage.removeItem("tanglome_admin_user")
    localStorage.removeItem("tanglome_admin")
  } catch {}
}
export function isAdmin() {
  try { return !!localStorage.getItem("tanglome_admin_token") } catch { return false }
}
