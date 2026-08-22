"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "10vh 10vw", minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at bottom, rgba(0,245,239,0.15) 0%, transparent 60%)", zIndex: -1 }} />
      
      <div style={{ textAlign: "center", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "clamp(3rem, 5vw, 5rem)", marginBottom: "2rem" }}>
          Let's build your next <span className="text-gradient">Automated System</span>
        </h2>
        <p style={{ fontSize: "1.2rem", color: "rgba(228, 234, 237, 0.7)", marginBottom: "3rem", lineHeight: 1.6 }}>
          Whether you need a complete GHL CRM setup, an AI Voice Receptionist, or a custom automation workflow, I'm here to help you reduce manual work and scale your revenue.
        </p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center" }}>
          <motion.a 
            href="mailto:tahsinsajid1616@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-panel"
            style={{ padding: "1.5rem 3rem", display: "flex", alignItems: "center", gap: "1rem", color: "var(--color-primary)", fontSize: "1.2rem", fontWeight: 600 }}
          >
            ✉️ tahsinsajid1616@gmail.com
          </motion.a>

          <motion.a 
            href="https://wa.me/923305503887"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: "1rem 2rem", color: "var(--color-text)", fontSize: "1.1rem", borderBottom: "1px solid rgba(255,255,255,0.2)" }}
          >
            WhatsApp: +92 330 5503887
          </motion.a>
          <p style={{ color: "rgba(228, 234, 237, 0.6)", fontSize: "1rem" }}>Remote-first. Working with clients globally.</p>
        </div>
      </div>

      <div className="copyright-notice" style={{ position: "absolute", right: "10vw", bottom: "2rem", color: "rgba(228, 234, 237, 0.3)", fontSize: "0.9rem", textAlign: "right" }}>
        © {new Date().getFullYear()} Tahsin Sajid. All rights reserved.
      </div>
    </section>
  );
}
