import React from 'react';
import { Helmet } from 'react-helmet';
import Faq from '../Components/Faq';

const FAQPage = () => {
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
        <title>FAQ | Tanglome - Your Questions Answered</title>
        <meta name="description" content="Get answers to frequently asked questions about Tanglome's services, process, and how we can transform your digital presence." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Faq />
    </>
  );
};

export default FAQPage;


