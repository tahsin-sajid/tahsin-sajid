"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = ["About", "Skills", "Projects", "Results", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <motion.nav
      className="site-nav"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
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
        {links.map((item) => (
          <Link key={item} href={`#${item === "Home" ? "home" : item.toLowerCase()}`} onClick={closeMenu} style={{ fontSize: "0.9rem", fontWeight: 500, opacity: 0.8, transition: "opacity 0.2s" }}>
            <span className="nav-link-hover">{item}</span>
          </Link>
        ))}
      </div>
      
      <a href="https://api.leadconnectorhq.com/widget/bookings/tahsin-sajid-1-on-1-call" target="_blank" rel="noopener noreferrer">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "0.6rem 1.5rem",
            background: "transparent",
            color: "var(--color-primary)",
            border: "1px solid var(--color-primary)",
            borderRadius: "20px",
            fontSize: "0.9rem",
            fontWeight: 600
          }}
        >
          Book a Call
        </motion.button>
      </a>
      <button className="nav-menu-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </motion.nav>
  );
}
