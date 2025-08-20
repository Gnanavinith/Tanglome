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
        <title>Schedule a Meeting | Book a Call with ZeonHub</title>
        <meta name="description" content="Book your free consultation with ZeonHub. Schedule a one-on-one meeting to discuss your web development, app development, SEO or digital marketing needs." />
        <meta name="keywords" content="ZeonHub Meeting, Book Consultation, Schedule Appointment, Web Development Consultation, App Development Discussion, Digital Marketing Strategy" />
        <meta property="og:title" content="Schedule a Meeting with ZeonHub" />
        <meta property="og:description" content="Schedule a free 30-minute consultation with ZeonHub experts to explore your business requirements." />
        <meta property="og:url" content="https://zeonhub.com/schedule-meeting" />
        <meta property="og:image" content="https://zeonhub.com/schedule-meeting-preview-image.png" />
        <meta name="twitter:title" content="Book a Call with ZeonHub" />
        <meta name="twitter:description" content="Book your consultation call with ZeonHub specialists today." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 py-10">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-2xl mt-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-100 text-center mb-4">
            Schedule a Meeting
          </h2>

          {showText && (
            <p className="text-gray-300 text-sm sm:text-base text-center transition-opacity duration-500">
              Please wait while we take you to Calendly{dots}
            </p>
          )}

          <div className="mt-4 w-full">
            <InlineWidget
              url="https://calendly.com/hellotanglome/30min"
              styles={{ height: "600px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleMeeting;
