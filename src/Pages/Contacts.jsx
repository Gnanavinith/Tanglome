import React, { useEffect } from "react";
import { MdOutlineWifiCalling3, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Email from "../Components/Email";
import Contact from "../Components/Contact";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Contacts = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (performance.navigation.type === 1) {
      navigate("/contact");
    }
  }, [navigate]);

  return (
   <>
  <Helmet>
    <title>Contact Tanglome | Get in Touch with Us</title>
    <meta
      name="description"
      content="Contact Tanglome for any business inquiries, partnership opportunities or support. We are located at Coimbatore."
    />
    <meta
      name="keywords"
      content="Tanglome Contact, Get in Touch, Tanglome Office, Business Inquiry, Coimbatore IT Company, Web Development, App Development"
    />
    <meta property="og:title" content="Contact Tanglome" />
    <meta
      property="og:description"
      content="We would love to hear from you! Contact Tanglome today for your digital needs."
    />
    <meta property="og:url" content="https://tanglome.com/contact" />
    <meta property="og:image" content="https://tanglome.com/contact-preview-image.png" />
    <meta name="twitter:title" content="Contact Tanglome" />
    <meta
      name="twitter:description"
      content="Get in touch with Tanglome for business collaborations and IT solutions."
    />
  </Helmet>

  <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
    <div className="max-w-[1200px] mx-auto mt-15">
      <div className="text-center px-4">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text mt-10">
          Get in Touch
        </h3>
        <h1 className="text-2xl mt-3 text-gray-300">
          Connecting People with Knowledge
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 md:px-10 py-16">
        <div className="relative h-60 flex flex-col items-center justify-center bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/50 p-5">
          <div className="text-5xl w-16 h-16 flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-800 text-yellow-400 rounded-full mb-5 shadow-md hover:scale-110">
            <MdOutlineWifiCalling3 />
          </div>
          <div className="text-xl font-semibold text-gray-200">Call Us Anytime</div>
          <a href="tel:+917200424294" className="text-lg text-blue-400 mt-2 hover:underline">
            +91 9585458794
          </a>
        </div>

        <a href="mailto:tanglomeofficial@gmail.com">
          <div className="relative h-60 flex flex-col items-center justify-center bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/50 p-5 cursor-pointer">
            <div className="text-5xl w-16 h-16 flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-800 text-blue-400 rounded-full mb-5 shadow-md hover:scale-110">
              <MdEmail />
            </div>
            <div className="text-xl font-semibold text-gray-200">Drop Us a Mail</div>
            <div className="text-lg text-gray-400 mt-2">hellotanglome@gmail.com</div>
          </div>
        </a>

        <div className="relative h-60 flex flex-col items-center justify-center bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/50 p-5 cursor-pointer">
          <div className="text-5xl w-16 h-16 flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-800 text-green-400 rounded-full mb-5 shadow-md hover:scale-110">
            <FaLocationDot />
          </div>
          <div className="text-xl font-semibold text-gray-200">Visit Our Office</div>
          <div className="text-lg text-gray-400 mt-2 text-center">Coimbatore</div>
        </div>
      </div>

      <div className="mb-20">
        <div className="text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text mt-10">
            Contact with us
          </h3>
          <h1 className="mt-3 text-gray-300 text-3xl">Have Any Questions? Let's Talk</h1>
        </div>
        <div className="gap-20 mt-10">
          <div className="rounded-2xl shadow-2xl">
            <Email />
          </div>
          <div className="rounded-2xl overflow-hidden mt-20">
           <iframe
  title="Our Location - Ganapathy, Coimbatore"
  className="w-full h-full min-h-[400px] rounded-lg shadow-lg"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2557969040963!2d76.97317611428824!3d11.04560409213625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85869d2ddad99%3A0x4c2387c362112525!2sGanapathy%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
        </div>
      </div>
    </div>
  </div>

  <Contact />
</>

  );
};

export default Contacts;
