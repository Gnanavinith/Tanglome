import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import DataVisualization from "../Components/DataVisualization";
import Mantra from "../Components/Mantra";
import ServicesIntro from "../Components/ServicesIntro";
import ConnectUs from "../Components/ConnectUs";
import Faq from "../Components/Faq";
import Process from "../Components/Process";
import Email from "../Components/Email";
import DedicatedDevelopers from "../Components/DedicatedDevelopers";
import HeroHeader from "../Components/HeroHeader";
import AdShoot from "../Components/AdShoot";
import AdCampaigns from "../Components/AdCampaign";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ✅ Meta Tags for SEO - Tanglome */}
      <Helmet>
        <title>Tanglome | IT Consulting & Digital Solutions Company in Coimbatore, India</title>
        <meta
          name="description"
          content="Tanglome is a leading IT consulting company in Coimbatore, India. We provide expert IT consulting services, web development, mobile app development, e-commerce solutions, Shopify development, digital marketing, and AI agent development services."
        />
        <meta
          name="keywords"
          content="IT consulting, IT consulting companies, IT consulting services, IT consulting firm, IT consulting companies in India, IT strategy consulting, IT management consulting, web development in Coimbatore, web development company in Coimbatore, web design company in Coimbatore, web application development company in Coimbatore, top rated web development in Coimbatore, web development agency in Coimbatore, web development company in Tamilnadu, app development company in Coimbatore, mobile app development company in Coimbatore, top mobile app development company in Coimbatore, android app development company in Coimbatore, ios app development company in Coimbatore, flutter app development company in Coimbatore, web app development company in Coimbatore, ecommerce app development company in Coimbatore, ecommerce website development company in India, top ecommerce website development company in India, best ecommerce website development company in India, ecommerce website development company in Coimbatore, shopify development company in India, best shopify development company in India, top shopify development company in India, shopify app development company in India, hire shopify developers India, digital marketing agency Coimbatore, top digital marketing agency Coimbatore, best digital marketing agency in Coimbatore, digital marketing agency Tamilnadu, healthcare digital marketing agency in Coimbatore, AI agent development, AI agent development company, custom AI agent development, AI voice agent development, AI virtual agent development, Tanglome, Software Consulting, Web Development, Mobile App Development, Digital Solutions, IT Services, Business Growth"
        />
        <meta name="author" content="Tanglome" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <meta name="geo.position" content="11.0168;76.9558" />
        <meta name="ICBM" content="11.0168, 76.9558" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Tanglome | IT Consulting & Digital Solutions Company in Coimbatore" />
        <meta
          property="og:description"
          content="Leading IT consulting company in Coimbatore, India. Expert IT consulting services, web development, mobile app development, e-commerce, Shopify, digital marketing, and AI solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tanglome.com/" />
        <meta property="og:image" content="https://tanglome.com/preview-image.jpg" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card (for Twitter/X sharing) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tanglome | IT Consulting & Digital Solutions Company in Coimbatore" />
        <meta
          name="twitter:description"
          content="Leading IT consulting company in Coimbatore, India. Expert IT consulting services, web development, mobile app development, e-commerce, Shopify, digital marketing, and AI solutions."
        />
        <meta name="twitter:image" content="https://tanglome.com/preview-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Hero Header Section */}
      <HeroHeader />

      {/* Dedicated Developers Section */}
      <DedicatedDevelopers />

      {/* Main Sections */}
      <main>
        <section id="data-visualization">
          <DataVisualization />
        </section>

        <section id="ad-shoot">
          <AdShoot />
        </section>

        <AdCampaigns/>

        <section id="mantra">
          <Mantra />
        </section>

        <section id="services-intro">
          <ServicesIntro />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="faq">
          <Faq />
        </section>

        <section id="connect-us">
          <ConnectUs />
        </section>

        <section id="email">
          <Email />
        </section>
      </main>
    </>
  );
};

export default Home;
