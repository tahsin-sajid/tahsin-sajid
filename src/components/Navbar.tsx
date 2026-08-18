"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
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
        zIndex: 100,
        backdropFilter: "blur(10px)",
        background: "rgba(11, 24, 26, 0.5)",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--color-primary)" }}>
        TS<span style={{ color: "var(--color-text)" }}>.</span>
      </div>
      
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
          <Link key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: "0.9rem", fontWeight: 500, opacity: 0.8, transition: "opacity 0.2s" }}>
            <span className="nav-link-hover" style={{ cursor: "pointer" }}>{item}</span>
          </Link>
        ))}
      </div>
      
      <a href="mailto:tahsinsajid1616@gmail.com">
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
          Let's Talk
        </motion.button>
      </a>
    </motion.nav>
  );
}
