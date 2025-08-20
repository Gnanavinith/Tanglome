import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const WhatsAppButton = () => {
  const phoneNumber = "9585458794";
  const message = "Hello! I'm interested in your IT solutions services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  const phoneLink = `tel:+91${phoneNumber}`;

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center gap-4 z-50">
      {/* WhatsApp Button */}
      <div className="relative">
        <div className="absolute w-16 h-16 bg-green-500 rounded-full animate-ping opacity-80"></div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaWhatsapp size={32} className="text-white" />
        </a>
      </div>

      {/* Phone Call Button */}
      <div className="relative">
        <div className="absolute w-16 h-16 bg-blue-500 rounded-full animate-ping opacity-80"></div>
        <a
          href={phoneLink}
          className="relative flex items-center justify-center bg-blue-500 p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaPhone size={30} className="text-white" />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
