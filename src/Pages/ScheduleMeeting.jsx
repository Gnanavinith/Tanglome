import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ScheduleMeeting = () => {
  const [showText, setShowText] = useState(true);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (performance.navigation.type === 1) {
      navigate("/schedule-meeting");
    }
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Schedule a Meeting | Tanglome - No 1 IT Company in India & Tamil Nadu | Free Consultation</title>
        <meta name="description" content="Schedule a free consultation with Tanglome - No 1 IT Company in India & Tamil Nadu. Discuss your project requirements and get tailored solutions for web development, mobile apps, AI solutions, cloud services, and digital marketing." />
        <meta name="keywords" content="schedule meeting, free consultation, strategy session, web development consultation, app development consultation, AI solutions consultation, cloud services consultation, digital marketing consultation, IT consulting India, software development consultation, business consultation India, project discussion, technical consultation, digital transformation consultation, e-commerce consultation, SaaS consultation, enterprise solutions consultation, startup consultation India, business development meeting, project planning session, technology advisory, software architecture consultation, mobile app strategy, digital marketing strategy, SEO consultation, social media marketing consultation, Google Ads consultation, Facebook Ads consultation, cloud migration consultation, AI implementation consultation, business automation consultation, CRM consultation, software development advice, IT solutions consultation, technology partnership discussion" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tanglome.com/schedule-meeting" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 py-10">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl bg-white p-6 sm:p-8 rounded-2xl shadow-2xl mt-20 border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-2 font-['Clash Display']">
              Schedule a Meeting
            </h2>
            <p className="text-gray-600 text-lg font-['Space Grotesk']">
              Talk to our CEO - Gnanavinith.G
            </p>
          </div>

          {showText && (
            <p className="text-gray-600 text-sm sm:text-base text-center transition-opacity duration-500 mb-6 font-['Space Grotesk']">
              Please wait while we take you to Calendly{dots}
            </p>
          )}

          <div className="mt-4 w-full">
            <InlineWidget
              url="https://calendly.com/hellotanglome/30min"
              styles={{ height: "600px", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleMeeting;
