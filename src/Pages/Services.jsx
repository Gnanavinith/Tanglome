import React from "react";
import { motion } from "framer-motion";
import AppDevelopment from "../assets/MobileApp.jpg";
import WebDevelopment from "../assets/Web.png";
import Seo from "../assets/Seo.jpg";
import GraphicsDesigning from "../assets/Graphics Design.jpg";
import SocialMediaMarketing from "../assets/SocialMediaMarket.jpg";
import PaidAdCampaign from "../assets/AdCampaign.jpg";
import NewProductDevelopment from "../assets/Software.jpg";
import HostingService from "../assets/Hosting.jpg";
import WindowsApp from "../assets/windowsApp.jpg";
import Contact from "../Components/Contact";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet";
// Services Data
const services = [
  {
    id: 1,
    name: "App Development",
    image: AppDevelopment,
    details: [
      {
        title: "Custom App Development",
        description:
          "We create custom apps tailored to your unique requirements and objectives. Our team of skilled app developers is proficient in developing apps for iOS, Android, and cross-platform.",
      },
      {
        title: "UI/UX Design",
        description:
          "We understand the importance of a seamless user experience. Our UI/UX designers create visually appealing, intuitive, and user-friendly interfaces that enhance the overall app experience.",
      },
      {
        title: "App Testing",
        description:
          "We conduct rigorous testing to ensure that your app is bug-free, reliable, and performs seamlessly across different devices and platforms.",
      },
      {
        title: "App Maintenance and Support",
        description:
          "We provide ongoing app maintenance and support to ensure that your app remains up-to-date, secure, and optimized for performance.",
      },
    ],
  },
  {
    id: 2,
    name: "Windows Application Development",
    image: WindowsApp,
    details: [
      {
        title: "Custom Windows Applications",
        description:
          "We develop tailored Windows applications for businesses, ensuring high performance and security.",
      },
      {
        title: "Enterprise Software Solutions",
        description:
          "Providing robust and scalable Windows-based enterprise solutions to enhance business operations.",
      },
      {
        title: "Desktop Application Development",
        description:
          "Building powerful desktop applications with seamless user experiences and rich functionality.",
      },
      {
        title: "Migration & Modernization",
        description:
          "Upgrading legacy Windows applications to modern frameworks for better performance and security.",
      },
    ],
  },
  {
    id: 3,
    name: "Web Development",
    image: WebDevelopment,
    details: [
      {
        title: "Custom Website Development",
        description:
          "We build responsive and dynamic websites tailored to your business needs using the latest technologies.",
      },
      {
        title: "E-Commerce Solutions",
        description:
          "We develop e-commerce platforms with secure payment gateways, inventory management, and user-friendly designs.",
      },
      {
        title: "CMS Development",
        description:
          "We create user-friendly Content Management Systems (CMS) like WordPress and custom-built solutions.",
      },
      {
        title: "Performance Optimization",
        description:
          "We optimize website speed, responsiveness, and SEO for a seamless user experience.",
      },
    ],
  },
  {
    id: 4,
    name: "SEO Optimization",
    image: Seo,
    details: [
      {
        title: "On-Page SEO",
        description:
          "Optimizing website content, meta tags, and structure for better search engine rankings.",
      },
      {
        title: "Off-Page SEO",
        description:
          "Building high-quality backlinks and increasing domain authority through link-building strategies.",
      },
      {
        title: "Technical SEO",
        description:
          "Improving site speed, mobile-friendliness, and structured data for better search visibility.",
      },
      {
        title: "Local SEO",
        description:
          "Helping businesses rank higher in local search results and Google My Business optimization.",
      },
    ],
  },
  {
    id: 5,
    name: "Graphics Designing",
    image: GraphicsDesigning,
    details: [
      {
        title: "Logo & Branding",
        description:
          "Creating unique brand identities with logos, color schemes, and brand guidelines.",
      },
      {
        title: "UI/UX Design",
        description:
          "Designing aesthetically pleasing and intuitive digital experiences for websites and apps.",
      },
      {
        title: "Marketing Materials",
        description:
          "Designing brochures, flyers, posters, and other promotional content for your business.",
      },
      {
        title: "Motion Graphics",
        description:
          "Creating animated videos and motion graphics for advertisements and branding.",
      },
    ],
  },
  {
    id: 6,
    name: "Social Media Marketing",
    image: SocialMediaMarketing,
    details: [
      {
        title: "Content Strategy",
        description:
          "We develop social media content strategies to boost engagement and brand awareness.",
      },
      {
        title: "Ad Campaign Management",
        description:
          "We run effective paid advertising campaigns on platforms like Facebook, Instagram, and LinkedIn.",
      },
      {
        title: "Influencer Marketing",
        description:
          "Collaborating with influencers to increase brand credibility and reach.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Providing in-depth insights and analytics to improve marketing performance.",
      },
    ],
  },
  {
    id: 7,
    name: "Paid Ad Campaigns",
    image: PaidAdCampaign,
    details: [
      {
        title: "Google Ads",
        description:
          "We optimize PPC campaigns to ensure maximum return on investment through Google Ads.",
      },
      {
        title: "Social Media Ads",
        description:
          "Targeted ad campaigns on social media platforms to boost sales and reach.",
      },
      {
        title: "Retargeting Ads",
        description:
          "Re-engage potential customers by displaying targeted ads based on their previous interactions.",
      },
      {
        title: "Conversion Rate Optimization",
        description:
          "Improving ad strategies to enhance conversions and lead generation.",
      },
    ],
  },
  {
    id: 8,
    name: "New Product Development",
    image: NewProductDevelopment,
    details: [
      {
        title: "Software Development",
        description:
          "From idea to launch, we help you build custom software solutions tailored to your needs.",
      },
      {
        title: "MVP Development",
        description:
          "Creating a Minimum Viable Product (MVP) to test business ideas before full-scale development.",
      },
      {
        title: "Prototyping & Wireframing",
        description:
          "Developing interactive prototypes and wireframes to visualize app functionality.",
      },
      {
        title: "Scalability Planning",
        description:
          "Ensuring your software is scalable to handle future growth and increased user demands.",
      },
    ],
  },
  {
    id: 9,
    name: "Hosting Services",
    image: HostingService,
    details: [
      {
        title: "Cloud Hosting",
        description:
          "Secure and scalable cloud hosting solutions to keep your business online 24/7.",
      },
      {
        title: "Managed Hosting",
        description:
          "Fully managed hosting services with regular backups, security patches, and updates.",
      },
      {
        title: "Dedicated Servers",
        description:
          "High-performance dedicated servers tailored for businesses with high-traffic needs.",
      },
      {
        title: "Security & DDoS Protection",
        description:
          "Robust security measures to protect your website from cyber threats and attacks.",
      },
    ],
  },
];

const Services = () => {

  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);

    // Redirect to home page on refresh
    if (performance.navigation.type === 1) {
      navigate("/services");
    }
  }, [navigate]);
  
  return (

     <>
  <Helmet>
    <title>Tanglome Services - Software, Web, App & Digital Marketing Solutions</title>
    <meta
      name="description"
      content="Tanglome offers a full range of IT services including app development, web development, Windows applications, SEO, graphic design, social media marketing, paid ad campaigns, and hosting solutions."
    />
    <meta
      name="keywords"
      content="App Development, Web Development, Windows Applications, SEO Optimization, Graphics Designing, Social Media Marketing, Paid Ads, Hosting Services, Tanglome Services"
    />
    <meta name="author" content="Tanglome" />
    {/* Open Graph */}
    <meta property="og:title" content="Tanglome Services" />
    <meta
      property="og:description"
      content="Explore Tanglome's full range of software development and digital marketing services."
    />
    <meta property="og:url" content="https://tanglome.com/services" />
    <meta property="og:image" content="https://tanglome.com/services-image.png" />
    {/* Twitter */}
    <meta name="twitter:title" content="Tanglome Services" />
    <meta
      name="twitter:description"
      content="Discover Tanglome's full suite of development and marketing services."
    />
    <meta name="twitter:image" content="https://tanglome.com/services-twitter.png" />
  </Helmet>

  <div className="w-full min-h-screen bg-gray-900 px-6 py-16">
    <div className="max-w-6xl mx-auto mt-15 space-y-16">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <motion.h2
            className="text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text text-center mb-6 drop-shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
          >
            {service.name}
          </motion.h2>

          <div
            className={`flex flex-col md:flex-row items-center gap-10 overflow-hidden ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.div className="md:w-1/2 w-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div
              className="md:w-1/2 w-full p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mt-4 space-y-4">
                {service.details.map((detail, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-2xl font-semibold text-gray-200 mb-5">{detail.title}</h3>
                    <p className="text-gray-400 text-xl">{detail.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  <Contact />
</>

  );
};

export default Services;
