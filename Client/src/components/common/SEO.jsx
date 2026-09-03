import { useEffect } from "react"
import { SITE, canonical, DEFAULT_TITLE, DEFAULT_DESCRIPTION, GLOBAL_KEYWORDS } from "../../utils/seo.js"

// Lightweight SEO manager - no extra deps (replaces react-helmet)
// Updates <title>, meta description/keywords, OG, Twitter, canonical & JSON-LD
export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = GLOBAL_KEYWORDS,
  path = "/",
  image = SITE.ogImage,
  type = "website",
  jsonLd = null,
  noindex = false,
}) {
  const url = canonical(path)

  useEffect(() => {
    document.title = title

    const setMeta = (selector, content) => {
      if (!content) return
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement("meta")
        // parse selector like 'meta[name="description"]' or 'meta[property="og:title"]'
        const m = selector.match(/meta\[(name|property)="([^"]+)"\]/)
        if (m) el.setAttribute(m[1], m[2])
        document.head.appendChild(el)
      }
      el.setAttribute("content", content)
    }

    setMeta('meta[name="description"]', description)
    setMeta('meta[name="keywords"]', keywords)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:url"]', url)
    setMeta('meta[property="og:image"]', image)
    setMeta('meta[property="og:type"]', type)
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)
    setMeta('meta[name="twitter:image"]', image)
    setMeta('meta[name="twitter:url"]', url)

    // canonical
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement("link")
      link.setAttribute("rel", "canonical")
      document.head.appendChild(link)
    }
    link.setAttribute("href", url)

    // robots
    let robots = document.querySelector('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement("meta")
      robots.setAttribute("name", "robots")
      document.head.appendChild(robots)
    }
    robots.setAttribute("content", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1")

    // JSON-LD
    const id = "seo-jsonld"
    let script = document.getElementById(id)
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script")
        script.id = id
        script.type = "application/ld+json"
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    } else if (script) {
      script.remove()
    }

    return () => {
      // keep title/meta for SPA nav - don't clean on unmount
    }
  }, [title, description, keywords, url, image, type, jsonLd, noindex])

  return null
}

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo,
    description: DEFAULT_DESCRIPTION,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.geo.city,
      addressRegion: SITE.geo.state,
      addressCountry: SITE.geo.country,
      postalCode: SITE.geo.postalCode,
      streetAddress: SITE.geo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Coimbatore" },
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Bengaluru" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Pune" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: Object.values(SITE.social),
  }
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    image: SITE.ogImage,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.geo.city,
      addressRegion: SITE.geo.state,
      postalCode: SITE.geo.postalCode,
      addressCountry: SITE.geo.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: { "@type": "Country", name: "India" },
    openingHours: "Mo-Sa 09:00-19:00",
    sameAs: Object.values(SITE.social),
  }
}
