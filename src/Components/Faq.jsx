import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

const faqData = [
  {
    question: "Why should I choose Tanglome for my digital transformation?",
    answer:
      "At Tanglome, we don’t just build software—we craft digital experiences that accelerate growth, optimize efficiency, and keep you ahead of the competition.",
  },
  {
    question: "How can Tanglome turn my idea into reality?",
    answer:
      "From brainstorming to deployment, we guide you through every step—offering strategic insights, expert development, and scalable solutions tailored to your vision.",
  },
  {
    question: "What industries does Tanglome specialize in?",
    answer:
      "We cater to a wide range of industries, including e-commerce, healthcare, fintech, SaaS, and startups, delivering cutting-edge tech solutions that drive impact.",
  },
  {
    question: "How does Tanglome ensure project success?",
    answer:
      "We follow an agile methodology, providing transparent communication, iterative development, and data-driven decisions to deliver outstanding results.",
  },
  {
    question: "What’s the first step to working with Tanglome?",
    answer:
      "Let’s talk! Schedule a free consultation, and we’ll analyze your needs, propose a strategy, and help you take the next step toward digital excellence.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
     

      <div className="w-full h-auto py-12 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-200">
  <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-12">

    {/* FAQ Content */}
    <div className="w-full lg:w-1/2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        Frequently Asked Questions
      </h1>

      <p className="mb-6 text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
        Dedicated to helping with all of your needs.
      </p>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="rounded-lg overflow-hidden text-base sm:text-lg md:text-xl text-gray-300">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-5 text-left font-semibold bg-gray-800 transition duration-300"
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="p-4 bg-gray-200 border-t border-gray-600 text-black text-base sm:text-lg md:text-xl"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>

    {/* Lottie Animation */}
    <div className="hidden lg:flex w-full lg:w-1/2 justify-end mt-20 relative group overflow-hidden rounded-lg">
      <iframe
        src="https://lottie.host/embed/cf727ed2-233d-44b7-9497-29d10fabb6b2/qnS2NrABeN.lottie"
        title="Faq Animation"
        className="w-full max-w-md h-[400px] rounded-lg transition-transform duration-500"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>

    </>
  );
};

export default Faq;

