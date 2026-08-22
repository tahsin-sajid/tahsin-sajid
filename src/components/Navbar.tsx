"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["About", "Skills", "Projects", "Results", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!bookingOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setBookingOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [bookingOpen]);

  return (
    <>
      <motion.nav
      className="site-nav"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        padding: "1.5rem 5vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        backdropFilter: "blur(10px)",
        background: "rgba(11, 24, 26, 0.5)",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      <Link href="#home" className="brand-link" aria-label="Return to Tahsin Sajid home page">
        <Image className="brand-logo" src="/images/logo.png" alt="" width={42} height={42} priority />
        <span className="brand-name">Tahsin Sajid</span>
      </Link>
      
      <div className={`nav-links ${open ? "nav-links-open" : ""}`}>
        <div className="nav-menu-links">
          {links.map((item) => (
            <Link key={item} href={`#${item === "Home" ? "home" : item.toLowerCase()}`} onClick={closeMenu} style={{ fontSize: "0.9rem", fontWeight: 500, opacity: 0.8, transition: "opacity 0.2s" }}>
              <span className="nav-link-hover">{item}</span>
            </Link>
          ))}
        </div>
        <div className="nav-cta-group">
          <a href="https://drive.google.com/file/d/18uzf8-j-p5wjU5q-QlCkB4J8v4RM5yWO/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="nav-resume-button">
              See My Resume
            </motion.button>
          </a>
          <motion.button type="button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="nav-call-button" onClick={() => { setBookingOpen(true); closeMenu(); }}>
              Book a Call
          </motion.button>
        </div>
      </div>
      <button className="nav-menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      </motion.nav>
      {bookingOpen && (
        <div className="booking-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setBookingOpen(false); }}>
          <section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
            <div className="booking-modal-header">
              <div><h2 id="booking-modal-title">Book a call with Tahsin</h2></div>
              <button type="button" className="booking-modal-close" aria-label="Close booking calendar" onClick={() => setBookingOpen(false)}><X size={22} /></button>
            </div>
            <div className="booking-modal-frame">
              <iframe
                src="https://api.leadconnectorhq.com/widget/bookings/tahsin-sajid-1-on-1-call"
                title="Book a call with Tahsin Sajid"
                allow="payment"
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
}
