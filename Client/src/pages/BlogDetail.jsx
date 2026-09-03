import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { motion } from "motion/react"
import { ArrowLeft, Clock, Tag, Share2, Calendar, AlertCircle } from "lucide-react"
import { api } from "../lib/api.js"
import CTASection from "../components/home/CTASection.jsx"
import SEO from "../components/common/SEO.jsx"
import { SITE } from "../utils/seo.js"

function formatDate(d) {
  try { return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) } catch { return "" }
}

const DETAIL_THEMES = [
  { bar: "bg-violet", chip: "bg-violet/10 border-violet/20 text-violet", excerpt: "border-violet", dot: "bg-violet" },
  { bar: "bg-emerald-500", chip: "bg-emerald-50 border-emerald-200 text-emerald-700", excerpt: "border-emerald-500", dot: "bg-emerald-500" },
  { bar: "bg-sky-500", chip: "bg-sky-50 border-sky-200 text-sky-700", excerpt: "border-sky-500", dot: "bg-sky-500" },
  { bar: "bg-amber-500", chip: "bg-amber-50 border-amber-200 text-amber-700", excerpt: "border-amber-500", dot: "bg-amber-500" },
  { bar: "bg-fuchsia-500", chip: "bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700", excerpt: "border-fuchsia-500", dot: "bg-fuchsia-500" },
  { bar: "bg-cyan-500", chip: "bg-cyan-50 border-cyan-200 text-cyan-700", excerpt: "border-cyan-500", dot: "bg-cyan-500" },
]
function themeForSlug(slug = "") {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  return DETAIL_THEMES[h % DETAIL_THEMES.length]
}

export default function BlogDetail() {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState("")
  const [related, setRelated] = useState([])

  useEffect(() => {
    if (!slug) return
    let alive = true
    setLoading(true); setErr("")
    api.blog(slug)
      .then(r => { if (alive) setBlog(r.blog) })
      .catch(e => { if (alive) setErr(e.message) })
      .finally(() => { if (alive) setLoading(false) })
    // fetch related
    api.blogs().then(r => {
      if (!alive) return
      const list = (r.blogs || []).filter(b => b.slug !== slug).slice(0, 3)
      setRelated(list)
    }).catch(()=>{})
    return () => { alive = false }
  }, [slug])

  const share = async () => {
    const url = window.location.href
    try {
      if (navigator.share) await navigator.share({ title: blog?.title, url })
      else { await navigator.clipboard.writeText(url); alert("Link copied!") }
    } catch {}
  }

  if (loading) {
    return (
      <div className="bg-paper animate-pulse">
        {/* header skeleton */}
        <div className="bg-ink h-[260px] relative overflow-hidden">
          <div className="mx-auto max-w-[720px] px-4 sm:px-6 py-8 sm:py-10">
            <div className="h-7 w-28 rounded-full bg-white/10" />
            <div className="h-8 rounded bg-white/10 mt-5 w-5/6" />
            <div className="h-8 rounded bg-white/10 mt-2 w-3/4" />
            <div className="flex gap-2 mt-4">
              <div className="h-6 w-24 rounded-full bg-white/10" />
              <div className="h-6 w-20 rounded-full bg-white/10" />
              <div className="h-6 w-16 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
        {/* cover skeleton */}
        <div className="mx-auto max-w-[720px] px-4 sm:px-6 -mt-6 relative z-10">
          <div className="h-[280px] rounded-2xl bg-black/5 border border-black/5" />
        </div>
        {/* content skeleton */}
        <div className="mx-auto max-w-[720px] px-4 sm:px-6 py-8 sm:py-10">
          <div className="rounded-2xl border border-black/5 bg-white p-5 sm:p-7 md:p-8">
            <div className="h-4 rounded bg-black/5 w-full" />
            <div className="h-4 rounded bg-black/5 w-5/6 mt-2" />
            <div className="h-4 rounded bg-black/5 w-4/6 mt-2" />
            <div className="h-20 rounded bg-black/[0.03] mt-6" />
            <div className="h-3 rounded bg-black/5 w-full mt-6" />
            <div className="h-3 rounded bg-black/5 w-full mt-2" />
            <div className="h-3 rounded bg-black/5 w-3/4 mt-2" />
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {[1,2,3].map(i => <div key={i} className="h-24 rounded-2xl bg-black/5 border border-black/5" />)}
          </div>
        </div>
      </div>
    )
  }

  if (err || !blog) {
    return (
      <div className="bg-paper">
        <div className="mx-auto max-w-[720px] px-4 sm:px-6 py-12 sm:py-16">
          <Link to="/blog" className="inline-flex items-center gap-1.5 font-body text-sm text-black/60 hover:text-ink"><ArrowLeft size={14}/> Back to blog</Link>
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-6 flex gap-3">
            <AlertCircle className="text-red-600 shrink-0 mt-0.5" size={18} />
            <div>
              <p className="font-body font-semibold text-red-800">Post not found</p>
              <p className="font-body text-sm text-red-700 mt-1">{err || "This post may be unpublished or the slug is incorrect."}</p>
              <p className="font-body text-xs text-red-600 mt-2">Tried: /api/blogs/{slug}</p>
            </div>
          </div>
          <Link to="/blog" className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-full bg-violet px-5 py-2.5 font-body text-sm font-semibold leading-none text-white hover:bg-violet-deep shadow-[0_8px_20px_rgba(109,40,217,0.25)] transition">Browse all posts →</Link>
        </div>
      </div>
    )
  }

  const isHtml = /<\s*(p|h\d|ul|ol|div|br|strong|em)[^>]*>/i.test(blog.content)
  const theme = themeForSlug(blog.slug)
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt || blog.content.slice(0, 160),
    image: blog.cover || SITE.ogImage,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: SITE.logo } },
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,
    mainEntityOfPage: `${SITE.url}/blog/${blog.slug}`,
    keywords: (blog.tags || []).join(", "),
  }

  return (
    <div className="bg-paper">
      <SEO title={`${blog.title} | Tanglome Blog - Coimbatore & India`} description={blog.excerpt || blog.content.slice(0, 155)} keywords={(blog.tags || []).join(", ")} path={`/blog/${blog.slug}`} image={blog.cover || SITE.ogImage} type="article" jsonLd={blogJsonLd} />
      {/* Header */}
      <section className="bg-ink text-paper overflow-hidden relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto max-w-[720px] px-4 sm:px-6 py-8 sm:py-10">
          <Link to="/blog" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-body text-xs font-medium text-paper/70 hover:text-paper hover:bg-white/10 transition">
            <ArrowLeft size={13} /> Back to blog
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="font-display font-semibold text-[28px] sm:text-3xl md:text-4xl leading-[0.95] mt-5">
            {blog.title}
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-4 flex flex-wrap items-center gap-2 font-body text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-2.5 py-1 text-paper/70"><Calendar size={12}/> {formatDate(blog.createdAt)}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-2.5 py-1 text-paper/70"><Clock size={12}/> {Math.max(1, Math.ceil(blog.content.length/900))} min read</span>
            <button onClick={share} className="inline-flex items-center gap-1.5 rounded-full bg-violet px-3 py-1 text-white hover:bg-violet-light transition"><Share2 size={12}/> Share</button>
          </motion.div>
          {(blog.tags || []).length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {blog.tags.map(t => (
                <span key={t} className="inline-flex items-center gap-1 rounded-full bg-white/[0.06] border border-white/10 px-2.5 py-1 font-body text-[11px] font-medium text-paper/60"><Tag size={10}/> {t}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cover */}
      {blog.cover && (
        <div className="mx-auto max-w-[720px] px-4 sm:px-6 -mt-6 relative z-10">
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
            <img src={blog.cover} alt={blog.title} className="w-full h-auto max-h-[420px] object-cover" />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="mx-auto max-w-[720px] px-4 sm:px-6 py-8 sm:py-10">
        <div className="rounded-2xl border border-black/5 bg-white p-5 sm:p-7 md:p-8 shadow-sm">
          {blog.excerpt && <p className={`font-body text-[15px] leading-relaxed text-black/60 border-l-2 pl-4 italic mb-6 ${theme.excerpt}`}>{blog.excerpt}</p>}
          {isHtml ? (
            <div className="prose prose-sm sm:prose-base max-w-none prose-headings:font-display prose-headings:font-semibold prose-p:font-body prose-p:leading-relaxed prose-p:text-black/70 prose-a:text-violet prose-strong:text-ink" dangerouslySetInnerHTML={{ __html: blog.content }} />
          ) : (
            <div className="font-body text-[15px] leading-7 text-black/70 whitespace-pre-wrap break-words">{blog.content}</div>
          )}
          <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
            <p className="font-body text-xs text-black/30">Slug: /{blog.slug} • Updated {formatDate(blog.updatedAt || blog.createdAt)}</p>
            <button onClick={share} className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-3 py-1.5 font-body text-xs font-medium hover:bg-black/5"><Share2 size={12}/> Share</button>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-8">
            <h3 className="font-display font-semibold text-lg text-ink">More from the blog</h3>
            <div className="mt-3 grid sm:grid-cols-3 gap-3">
              {related.map(r => (
                <Link key={r.id} to={`/blog/${r.slug}`} className="rounded-2xl border border-black/5 bg-white p-4 hover:border-black/10 hover:shadow-sm transition">
                  <p className="font-body font-semibold text-sm leading-tight line-clamp-2 text-ink">{r.title}</p>
                  <p className="font-body text-xs text-black/50 mt-1 line-clamp-2">{r.excerpt || r.content.slice(0,80)}</p>
                  <span className="font-body text-xs font-medium text-violet mt-2 inline-flex">Read →</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link to="/blog" className="inline-flex items-center justify-center gap-1.5 rounded-full bg-violet px-5 py-2.5 font-body text-sm font-semibold leading-none text-white hover:bg-violet-deep shadow-[0_8px_20px_rgba(109,40,217,0.25)] transition"><ArrowLeft size={14} className="shrink-0"/> All posts</Link>
          <Link to="/contact" className="inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-5 py-2.5 font-body text-sm font-semibold leading-none text-white hover:bg-black transition">Start a project →</Link>
        </div>
      </article>

      <CTASection />
    </div>
  )
}
