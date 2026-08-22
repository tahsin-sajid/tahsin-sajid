"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import dynamic from "next/dynamic";
import Interactive3D from "./Interactive3D";

const Background3D = dynamic(() => import("./Background3D"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showBackground, setShowBackground] = useState(false);
  const [typedName, setTypedName] = useState("");
  
  useEffect(() => {
    // Simple GSAP animation for text load
    const tl = gsap.timeline();
    tl.fromTo(".hero-text-anim", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  useEffect(() => {
    const backgroundTimer = window.setTimeout(() => setShowBackground(true), 1200);

    return () => {
      window.clearTimeout(backgroundTimer);
    };
  }, []);

  useEffect(() => {
    const name = "I am Tahsin Sajid";
    let characterIndex = 0;
    const typingTimer = window.setInterval(() => {
      characterIndex += 1;
      setTypedName(name.slice(0, characterIndex));

      if (characterIndex === name.length) {
        window.clearInterval(typingTimer);
      }
    }, 120);

    return () => window.clearInterval(typingTimer);
  }, []);

  return (
    <section
      className="hero-section"
      ref={containerRef}
      id="home"
      style={{
        position: "relative",
        minHeight: "calc(100svh - 74px)",
        height: "calc(100vh - 74px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
            padding: "0 10vw",
            scrollMarginTop: "100px",
        overflow: "hidden"
      }}
    >
      {showBackground && <Background3D />}
      
      <div className="hero-copy" style={{ zIndex: 10, maxWidth: "600px" }}>
        <p className="hero-text-anim hero-typed-name" aria-label="I am Tahsin Sajid">
          {typedName}<span className="typing-cursor" aria-hidden="true">|</span>
        </p>
        <h1 className="hero-text-anim" style={{ fontSize: "clamp(3rem, 5vw, 5rem)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
          Go High Level <br/>
          <span className="text-gradient">Automation Specialist</span>
          <br/> & AI Expert
        </h1>
        <p className="hero-text-anim" style={{ fontSize: "1.2rem", color: "rgba(228, 234, 237, 0.7)", marginBottom: "2rem", lineHeight: 1.6 }}>
          Building end-to-end automation systems and AI integrations for service businesses that reduce manual work and increase revenue.
        </p>
        
        <div className="hero-text-anim hero-actions" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <motion.a 
            href="#projects"
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
          </motion.a>
          <motion.a
            href="#contact"
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
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/18uzf8-j-p5wjU5q-QlCkB4J8v4RM5yWO/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(239,165,69,0.12)" }}
            whileTap={{ scale: 0.95 }}
            className="resume-button"
          >
            See My Resume
          </motion.a>
        </div>
      </div>

      <Interactive3D className="hero-text-anim profile-frame hero-profile" intensity={11}>
         <span className="profile-glow" aria-hidden="true" />
         <span className="profile-grid" aria-hidden="true" />
         <span className="profile-orbit profile-orbit-one" />
         <span className="profile-orbit profile-orbit-two" />
         <span className="profile-corner profile-corner-one" />
         <span className="profile-corner profile-corner-two" />
         <div className="profile-image-shell">
           <Image 
             src="/images/branding image.png"
             alt="Tahsin Sajid Portrait" 
             fill
             sizes="(max-width: 768px) 72vw, 400px"
             className="profile-portrait"
             style={{ objectFit: "cover", objectPosition: "center top" }}
           />
           </div>
      </Interactive3D>
    </section>
  );
}
