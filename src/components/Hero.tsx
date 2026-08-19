"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Background3D from "./Background3D";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple GSAP animation for text load
    const tl = gsap.timeline();
    tl.fromTo(".hero-text-anim", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10vw",
        overflow: "hidden"
      }}
    >
      <Background3D />
      
      <div style={{ zIndex: 10, maxWidth: "600px" }}>
        <p className="hero-text-anim" style={{ color: "var(--color-primary)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "1rem" }}>
          Tahsin Sajid
        </p>
        <h1 className="hero-text-anim" style={{ fontSize: "clamp(3rem, 5vw, 5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
          Go High Level <br/>
          <span className="text-gradient">Automation Specialist</span>
          <br/> & AI Expert
        </h1>
        <p className="hero-text-anim" style={{ fontSize: "1.2rem", color: "rgba(228, 234, 237, 0.7)", marginBottom: "2rem", lineHeight: 1.6 }}>
          Building end-to-end automation systems and AI integrations for service businesses that reduce manual work and increase revenue.
        </p>
        
        <div className="hero-text-anim" style={{ display: "flex", gap: "1rem" }}>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "1rem 2rem",
              background: "linear-gradient(90deg, var(--color-primary), #00c4c0)",
              color: "#0B181A",
              fontWeight: 600,
              borderRadius: "30px",
              fontSize: "1rem"
            }}
          >
            View Work
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "1rem 2rem",
              background: "transparent",
              color: "var(--color-text)",
              border: "1px solid rgba(255,255,255,0.2)",
              fontWeight: 600,
              borderRadius: "30px",
              fontSize: "1rem"
            }}
          >
            Contact Me
          </motion.button>
        </div>
      </div>

      <div className="hero-text-anim" style={{ zIndex: 10, position: "relative", width: "min(400px, 38vw)", aspectRatio: "1 / 1", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(0, 245, 239, 0.35)", background: "#fff", boxShadow: "0 24px 80px rgba(0, 245, 239, 0.12)" }}>
           <Image 
             src="/images/branding%20image.png" 
             alt="Tahsin Sajid Portrait" 
             fill
             sizes="(max-width: 768px) 72vw, 400px"
             style={{ objectFit: "contain", objectPosition: "center" }}
           />
      </div>
    </section>
  );
}
