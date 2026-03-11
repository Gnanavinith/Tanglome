import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const SitemapPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const pages = [
    {
      url: 'https://tanglome.com/',
      lastmod: '2026-02-18',
      priority: '1.0',
      changefreq: 'daily'
    },
    {
      url: 'https://tanglome.com/about',
      lastmod: '2026-02-18',
      priority: '0.8',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/solutions',
      lastmod: '2026-02-18',
      priority: '0.8',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/products',
      lastmod: '2026-02-18',
      priority: '0.7',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/products/mobile-billing',
      lastmod: '2026-02-18',
      priority: '0.6',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/products/crm-consulting',
      lastmod: '2026-02-18',
      priority: '0.6',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/services',
      lastmod: '2026-02-18',
      priority: '0.9',
      changefreq: 'weekly'
    },
    {
      url: 'https://tanglome.com/services/web-development',
      lastmod: '2026-02-18',
      priority: '0.7',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/services/app-development',
      lastmod: '2026-02-18',
      priority: '0.7',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/services/ai-solutions',
      lastmod: '2026-02-18',
      priority: '0.7',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/services/cloud-services',
      lastmod: '2026-02-18',
      priority: '0.7',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/services/digital-marketing',
      lastmod: '2026-02-18',
      priority: '0.7',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/services/whatsapp-automation',
      lastmod: '2026-02-18',
      priority: '0.7',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/services/mvp-development',
      lastmod: '2026-02-18',
      priority: '0.7',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/ourservices',
      lastmod: '2026-02-18',
      priority: '0.8',
      changefreq: 'weekly'
    },
    {
      url: 'https://tanglome.com/contact',
      lastmod: '2026-02-18',
      priority: '0.7',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/schedule-meeting',
      lastmod: '2026-02-18',
      priority: '0.7',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/careers',
      lastmod: '2026-02-18',
      priority: '0.7',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/team',
      lastmod: '2026-02-18',
      priority: '0.6',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/portfolio',
      lastmod: '2026-02-18',
      priority: '0.6',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/sitemap',
      lastmod: '2026-02-18',
      priority: '0.3',
      changefreq: 'monthly'
    },
    {
      url: 'https://tanglome.com/faq',
      lastmod: '2026-02-18',
      priority: '0.7',
      changefreq: 'weekly'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap | Tanglome - No 1 IT Company in India & Tamil Nadu</title>
        <meta name="description" content="Complete sitemap of Tanglome website - No 1 IT Company in India & Tamil Nadu. Access all pages for web development, app development, AI solutions, digital marketing, and more." />
        <meta name="keywords" content="Tanglome sitemap, Tanglome India, Tanglome Tamil Nadu, Tanglome IT Solutions, web development sitemap, app development sitemap, AI solutions sitemap, digital marketing sitemap, IT services India, web development India, app development India, AI solutions India, digital marketing India, IT company Tamil Nadu" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tanglome Sitemap</h1>
            <p className="text-gray-600">Complete list of all pages on our website</p>
          </div>

          {/* Sitemap Content */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-800">Website Pages</h2>
            </div>
            
            <div className="divide-y divide-gray-100">
              {pages.map((page, index) => (
                <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <a 
                        href={page.url} 
                        className="text-blue-600 hover:text-blue-800 font-medium text-lg mb-1 block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {page.url.replace('https://tanglome.com', '') || '/'}
                      </a>
                      <p className="text-gray-500 text-sm">
                        Last updated: {page.lastmod} • Priority: {page.priority} • Frequency: {page.changefreq}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:ml-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* XML Download Section */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">XML Sitemap</h3>
            <p className="text-gray-600 mb-4">
              For search engines and developers, you can access our XML sitemap:
            </p>
            <a 
              href="/sitemap.xml" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              View XML Sitemap
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;


