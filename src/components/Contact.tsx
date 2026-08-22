"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Globe2, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at bottom, rgba(0,245,239,0.15) 0%, transparent 60%)", zIndex: -1 }} />
      
      <div className="contact-grid">
        <div className="contact-copy">
        <div className="section-kicker">Start a conversation</div>
        <h2 id="contact-title" style={{ fontSize: "clamp(3rem, 5vw, 5rem)", marginBottom: "2rem" }}>
          Let's build your next <span className="text-gradient">Automated System</span>
        </h2>
        <p className="contact-intro">
          Whether you need a complete GHL CRM setup, an AI Voice Receptionist, or a custom automation workflow, I'm here to help you reduce manual work and scale your revenue.
        </p>
        
        <div className="contact-details">
          <motion.a 
            href="mailto:tahsinsajid1616@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="contact-detail glass-panel"
          >
            <Mail size={20} aria-hidden="true" /> tahsinsajid1616@gmail.com <ArrowUpRight size={17} aria-hidden="true" />
          </motion.a>

          <motion.a 
            href="https://wa.me/923305503887"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="contact-detail contact-whatsapp"
          >
            <MessageCircle size={20} aria-hidden="true" /> WhatsApp: +92 330 5503887 <ArrowUpRight size={17} aria-hidden="true" />
          </motion.a>
          <p className="contact-detail contact-location"><Globe2 size={20} aria-hidden="true" /> Remote-first. Working with clients globally.</p>
        </div>
      </div>

        <div className="booking-panel">
          <div className="booking-panel-header"><div><div className="section-kicker">Book a call</div><h3>Choose a time that works</h3></div><span className="booking-live"><i /> Live availability</span></div>
          <iframe
            src="https://api.leadconnectorhq.com/widget/bookings/tahsin-sajid-1-on-1-call"
            title="Book a call with Tahsin Sajid"
            loading="lazy"
            allow="payment"
          />
        </div>
      </div>

    </section>
  );
}
