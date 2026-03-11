import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Faq from '../Components/Faq';

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const canonicalUrl = 'https://tanglome.com/faq';
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why should I choose Tanglome for my digital transformation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "At Tanglome, we don't just build software—we craft digital experiences that accelerate growth, optimize efficiency, and keep you ahead of the competition.",
        },
      },
      {
        '@type': 'Question',
        name: 'How can Tanglome turn my idea into reality?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'From brainstorming to deployment, we guide you through every step—offering strategic insights, expert development, and scalable solutions tailored to your vision.',
        },
      },
      {
        '@type': 'Question',
        name: 'What industries does Tanglome specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We cater to a wide range of industries, including e-commerce, healthcare, fintech, SaaS, and startups, delivering cutting-edge tech solutions that drive impact.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Tanglome ensure project success?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We follow an agile methodology, providing transparent communication, iterative development, and data-driven decisions to deliver outstanding results.',
        },
      },
      {
        '@type': 'Question',
        name: "What's the first step to working with Tanglome?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Let's talk! Schedule a free consultation, and we'll analyze your needs, propose a strategy, and help you take the next step toward digital excellence.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>FAQ | Tanglome - No 1 IT Company in India & Tamil Nadu | Frequently Asked Questions</title>
        <meta name="description" content="Get answers to frequently asked questions about Tanglome - No 1 IT Company in India & Tamil Nadu. Web development, app development, AI solutions, cloud services, and digital marketing services. Your questions about our process, pricing, and solutions answered." />
        <meta name="keywords" content="Tanglome FAQ, Tanglome frequently asked questions, IT company India FAQ, web development company FAQ, app development company FAQ, AI solutions FAQ, digital marketing company FAQ, cloud services FAQ, software development FAQ, Tanglome services FAQ, Tanglome process FAQ, Tanglome pricing FAQ, web development questions, mobile app development FAQ, AI implementation FAQ, digital marketing questions, cloud migration FAQ, software development questions, IT services FAQ, technology consulting FAQ, e-commerce development FAQ, SaaS solutions FAQ, enterprise software FAQ, business automation FAQ, CRM development FAQ, mobile app questions, web application FAQ, custom software FAQ, digital transformation FAQ, SEO services FAQ, Google Ads FAQ, Facebook Ads FAQ, LinkedIn Ads FAQ, content marketing FAQ, email marketing FAQ, conversion optimization FAQ, Google Analytics FAQ, social media marketing FAQ, influencer marketing FAQ, YouTube advertising FAQ" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Faq />
    </>
  );
};

export default FAQPage;


