"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Interactive3D from "./Interactive3D";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelectorAll(".about-animate"), 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ padding: "10vh 10vw", minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        
        <div>
          <h2 className="about-animate" style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", marginBottom: "2rem" }}>
            My <span className="text-gradient">Story</span>
          </h2>
          <div className="about-animate glass-panel" style={{ padding: "2.5rem" }}>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(228, 234, 237, 0.8)", marginBottom: "1.5rem" }}>
              I am an AI Automation & Go High Level Specialist with a proven track record of taking complex client requirements from concept to fully operational, revenue-generating systems.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(228, 234, 237, 0.8)" }}>
              My expertise lies in building end-to-end GHL systems, developing AI-powered Voice receptionists, and integrating platforms like n8n, Zapier, and Make to reduce manual follow-up by 40-50% and increase lead conversion by 25-35%.
            </p>
            
            <div style={{ display: "flex", gap: "2rem", marginTop: "3rem" }}>
              <div>
                <h3 style={{ fontSize: "2.5rem", color: "var(--color-primary)" }}>40-50%</h3>
                <p style={{ color: "var(--color-secondary)", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>Less Manual Work</p>
              </div>
              <div>
                <h3 style={{ fontSize: "2.5rem", color: "var(--color-primary)" }}>25-35%</h3>
                <p style={{ color: "var(--color-secondary)", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>More Conversions</p>
              </div>
            </div>
          </div>
        </div>

        <Interactive3D className="about-animate about-visual" intensity={7} style={{ position: "relative", height: "100%", minHeight: "500px", borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(239, 165, 69, 0.2)" }}>
           {/* Visual element representing automation nodes */}
           <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(0,245,239,0.1) 0%, transparent 70%)" }} />
           <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
             <motion.div 
               animate={{ rotate: 360 }} 
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               style={{ width: "200px", height: "200px", border: "1px dashed var(--color-primary)", borderRadius: "50%", position: "absolute", top: "-100px", left: "-100px" }}
             />
             <motion.div 
               animate={{ rotate: -360 }} 
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               style={{ width: "150px", height: "150px", border: "1px dashed var(--color-secondary)", borderRadius: "50%", position: "absolute", top: "-75px", left: "-75px" }}
             />
             <div style={{ fontSize: "3rem", color: "var(--color-text)", background: "rgba(11,24,26,0.8)", padding: "1rem", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)" }}>
               ⚙️
             </div>
           </div>
        </Interactive3D>
      </div>
    </section>
  );
}
