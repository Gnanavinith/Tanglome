import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "motion/react"
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"
import Logo from "../components/common/Logo.jsx"
import { api, setAdminSession } from "../lib/api.js"
import SEO from "../components/common/SEO.jsx"

export default function Login() {
  const navigate = useNavigate()

  const [show, setShow] = useState(false)
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: true,
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!form.email.trim() || !form.password) {
      setError("Email and password are required.")
      return
    }

    if (
      !/^\S+@\S+\.\S+$/.test(form.email) &&
      !/^\+?[0-9 ]{8,}$/.test(form.email)
    ) {
      setError("Enter a valid email or phone.")
      return
    }

    setError("")
    setLoading(true)

    try {
      const data = await api.login({
        email: form.email.trim(),
        password: form.password,
      })

      // Admin login → store token and go to admin panel
      if (data.token || data.user?.role === "admin") {
        setAdminSession({ token: data.token, user: data.user })
        navigate("/admin", { replace: true })
      } else {
        navigate("/")
      }
    } catch (err) {
      setError(
        err.message ||
          "Login failed. Check admin credentials in Server/.env"
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-ink flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10 relative overflow-hidden">
      <SEO title="Login - Tanglome" description="Login to Tanglome." path="/login" noindex />
      {/* subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* violet glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full opacity-[0.12] blur-[70px]"
        style={{
          background:
            "radial-gradient(circle at center, #6D28D9 0%, #3B1877 45%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-[480px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[20px] sm:rounded-[24px] border border-white/10 bg-white p-6 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.4)]"
        >
          {/* Header */}
          <div className="text-center">
            <Logo light={false} className="text-2xl justify-center" />
            <h1 className="font-display font-semibold text-2xl sm:text-[28px] leading-tight mt-4 text-ink">
              Welcome back
            </h1>
            <p className="font-body text-sm text-black/60 mt-1">
              Enter your details to access your account.
            </p>
          </div>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            {/* Email */}
            <div>
              <label className="font-body text-xs font-medium text-black/60">
                Email or phone
              </label>
              <div className="mt-1.5 relative">
                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30"
                />
                <input
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="you@company.com"
                  autoComplete="username"
                  className="h-11 w-full rounded-xl border border-black/10 bg-white pl-10 pr-3 font-body text-sm text-ink placeholder:text-black/30 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15 transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label className="font-body text-xs font-medium text-black/60">
                  Password
                </label>
                <Link
                  to="#"
                  className="font-body text-xs font-medium text-violet hover:text-violet-deep transition"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="mt-1.5 relative">
                <Lock
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30"
                />
                <input
                  type={show ? "text" : "password"}
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="h-11 w-full rounded-xl border border-black/10 bg-white pl-10 pr-10 font-body text-sm text-ink placeholder:text-black/30 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15 transition"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  aria-label={show ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 hover:text-black/60 transition"
                >
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={(e) =>
                    setForm({ ...form, remember: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-black/20 bg-white text-violet focus:ring-violet/20 focus:ring-2"
                />
                <span className="font-body text-xs text-black/60 group-hover:text-black/80 transition">
                  Remember me
                </span>
              </label>
              <span className="font-body text-[11px] text-black/30 hidden sm:inline">
                Secure login
              </span>
            </div>

            {/* Error */}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-body text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2.5"
              >
                {error}
              </motion.p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 font-body text-sm font-semibold text-white hover:bg-violet-deep active:scale-[0.99] transition-all disabled:opacity-60 shadow-[0_8px_20px_rgba(109,40,217,0.25)]"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Logging in...
                </>
              ) : (
                <>
                  Log in <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="h-px flex-1 bg-black/10" />
            <span className="font-body text-[11px] tracking-widest text-black/30">
              OR
            </span>
            <div className="h-px flex-1 bg-black/10" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="h-11 w-full rounded-xl border border-black/10 bg-white hover:bg-black/[0.03] transition flex items-center justify-center gap-2.5 font-body text-sm font-medium text-ink"
          >
            <span className="h-6 w-6 rounded-full bg-white border border-black/10 flex items-center justify-center text-[11px] font-bold text-ink shadow-sm">
              G
            </span>
            Continue with Google
          </button>

          {/* Signup */}
          <p className="font-body text-sm text-center text-black/60 mt-6">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-violet hover:text-violet-deep transition"
            >
              Create account
            </Link>
          </p>
        </motion.div>

        {/* Bottom links - outside card like subtle footer */}
        <div className="flex items-center justify-center gap-3 mt-6 font-body text-[11px] text-white/25">
          <Link to="#" className="hover:text-white/50 transition">
            Terms
          </Link>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <Link to="#" className="hover:text-white/50 transition">
            Privacy
          </Link>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <Link to="#" className="hover:text-white/50 transition">
            Security
          </Link>
        </div>
      </div>
    </div>
  )
}
