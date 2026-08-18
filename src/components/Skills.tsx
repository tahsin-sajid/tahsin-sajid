"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Go High Level",
    skills: ["Workflows", "Pipelines", "Opportunities", "Funnels", "Landing Pages", "Forms", "Surveys", "Calendars", "Smart Lists", "Snapshots", "AI Features"]
  },
  {
    title: "Automation & Integrations",
    skills: ["n8n", "Twilio", "Mailgun", "Stripe", "Zapier", "Make", "Custom Webhooks", "Retell", "Vapi", "REST APIs"]
  },
  {
    title: "AI & Emerging",
    skills: ["AI-Powered Workflows", "AI Voice Agents", "AI Chatbots", "Gemini API", "Groq API", "Prompt Engineering"]
  }
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelectorAll(".skill-card"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="skills" ref={sectionRef} style={{ padding: "10vh 10vw", minHeight: "100vh" }}>
      <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", marginBottom: "4rem", textAlign: "center" }}>
        Technical <span className="text-gradient">Expertise</span>
      </h2>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
        {skillCategories.map((cat, i) => (
          <div key={i} className="skill-card glass-panel" style={{ padding: "2.5rem", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", background: `linear-gradient(90deg, ${i === 0 ? "var(--color-primary)" : i === 1 ? "var(--color-secondary)" : "#00c4c0"}, transparent)` }} />
            <h3 style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "var(--color-text)" }}>{cat.title}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
              {cat.skills.map((skill, j) => (
                <motion.span 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 245, 239, 0.1)", borderColor: "var(--color-primary)" }}
                  key={j} 
                  style={{ 
                    padding: "0.5rem 1rem", 
                    background: "rgba(255,255,255,0.03)", 
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    color: "rgba(228, 234, 237, 0.9)",
                    transition: "all 0.3s ease"
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
