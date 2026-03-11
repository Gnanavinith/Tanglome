import React from "react";
import { motion } from "framer-motion";

const HeroHeader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      style={{
        minHeight: "100svh",
        height: "auto",
        backgroundColor: "#ffffff",
        color: "#020202",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        willChange: "auto",
        transform: "none",
        backfaceVisibility: "visible",
        boxSizing: "border-box",
        /* Responsive horizontal padding */
        padding: "5rem clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      {/* Grid Pattern Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, #8080800a 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px)",
          backgroundSize: "14px 24px",
          pointerEvents: "none",
        }}
      />

      {/* Top-right decorative blob */}
      <div
        style={{
          position: "absolute",
          top: "-8rem",
          right: "-8rem",
          width: "30rem",
          height: "30rem",
          background: "radial-gradient(circle, rgba(165,86,248,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom-left decorative blob */}
      <div
        style={{
          position: "absolute",
          bottom: "-6rem",
          left: "-6rem",
          width: "24rem",
          height: "24rem",
          background: "radial-gradient(circle, rgba(73,34,229,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        style={{
          display: "grid",
          /* 1 col on mobile, 2 cols on desktop */
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 28rem), 1fr))",
          gap: "clamp(2rem, 5vw, 4rem)",
          width: "100%",
          maxWidth: "82rem",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
          alignItems: "center",
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── LEFT: TEXT CONTENT ── */}
        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: "clamp(1rem, 3vw, 1.75rem)" }}
          variants={itemVariants}
        >
          {/* Badge */}
          <motion.span
            style={{
              display: "inline-block",
              color: "#4922E5",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
              fontWeight: 700,
            }}
            variants={itemVariants}
          >
            Tanglome IT Consulting
          </motion.span>

          {/* Heading */}
          <motion.h1
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#020202",
              margin: 0,
            }}
            variants={itemVariants}
          >
            Custom Digital
            <br />
            <span
              style={{
                background: "linear-gradient(to right, #A556F8, #4922E5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Software Solutions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            style={{
              color: "rgba(73,34,229,0.75)",
              maxWidth: "30rem",
              lineHeight: 1.75,
              fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
              margin: 0,
            }}
            variants={itemVariants}
          >
            Delivering enterprise-grade software, automation, and AI-powered
            solutions to help businesses scale faster and smarter.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.875rem",
              marginTop: "0.5rem",
            }}
            variants={itemVariants}
          >
            <a
              href="https://wa.me/919585458794"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", flexGrow: 1, minWidth: "10rem", maxWidth: "16rem" }}
            >
              <motion.button
                style={{
                  width: "100%",
                  backgroundColor: "#ffffff",
                  color: "#4922E5",
                  padding: "0.9rem 1.75rem",
                  borderRadius: "0.75rem",
                  fontWeight: 600,
                  border: "2px solid #4922E5",
                  cursor: "pointer",
                  fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                }}
                whileHover={{ scale: 1.04, backgroundColor: "#f3f0ff" }}
                whileTap={{ scale: 0.97 }}
              >
                WhatsApp Us
              </motion.button>
            </a>
            <a
              href="/schedule-meeting"
              style={{ textDecoration: "none", flexGrow: 1, minWidth: "10rem", maxWidth: "16rem" }}
            >
              <motion.button
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #A556F8, #4922E5)",
                  color: "#ffffff",
                  padding: "0.9rem 1.75rem",
                  borderRadius: "0.75rem",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                  boxShadow: "0 4px 20px rgba(73,34,229,0.35)",
                }}
                whileHover={{ scale: 1.04, opacity: 0.92 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's Talk →
              </motion.button>
            </a>
          </motion.div>

          {/* Trust strip — desktop only feel */}
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              marginTop: "0.5rem",
              flexWrap: "wrap",
            }}
            variants={itemVariants}
          >
            {["50+ Projects", "10+ Industries", "24/7 Support"].map((stat) => (
              <div
                key={stat}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "clamp(0.75rem, 1.4vw, 0.85rem)",
                  color: "#6b7280",
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "#A556F8", fontSize: "1rem" }}>✦</span>
                {stat}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: CARD ── */}
        <motion.div
          style={{ position: "relative" }}
          variants={itemVariants}
        >
          {/* Glow behind card */}
          <motion.div
            style={{
              position: "absolute",
              inset: "-1rem",
              background: "linear-gradient(135deg, rgba(165,86,248,0.25), rgba(73,34,229,0.2))",
              filter: "blur(40px)",
              borderRadius: "2rem",
              zIndex: 0,
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />

          <motion.div
            style={{
              position: "relative",
              zIndex: 1,
              backgroundColor: "#ffffff",
              border: "1px solid rgba(73,34,229,0.2)",
              borderRadius: "1.75rem",
              padding: "clamp(1.5rem, 4vw, 2.75rem)",
              boxShadow: "0 20px 60px rgba(73,34,229,0.12), 0 4px 16px rgba(0,0,0,0.06)",
              boxSizing: "border-box",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Card header accent line */}
            <div
              style={{
                height: "3px",
                background: "linear-gradient(to right, #A556F8, #4922E5)",
                borderRadius: "2px",
                marginBottom: "1.5rem",
                width: "3rem",
              }}
            />

            <motion.h2
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                fontWeight: 700,
                marginBottom: "0.75rem",
                color: "#020202",
                lineHeight: 1.3,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Empowering Businesses Through Technology
            </motion.h2>

            <motion.p
              style={{
                color: "rgba(73,34,229,0.75)",
                marginBottom: "1.75rem",
                fontSize: "clamp(0.85rem, 1.6vw, 0.975rem)",
                lineHeight: 1.7,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              We design scalable platforms, SaaS products, and automation
              systems that drive measurable business outcomes.
            </motion.p>

            <motion.div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { label: "Low-Code & Custom Development", icon: "⚡" },
                { label: "AI & Process Automation", icon: "🤖" },
                { label: "Cloud, DevOps & Security", icon: "☁️" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "rgba(165,86,248,0.05)",
                    border: "1px solid rgba(165,86,248,0.12)",
                    boxSizing: "border-box",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                  <span
                    style={{
                      color: "#020202",
                      fontWeight: 500,
                      fontSize: "clamp(0.82rem, 1.5vw, 0.95rem)",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      color: "#A556F8",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    ✔
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroHeader;