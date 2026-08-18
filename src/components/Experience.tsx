"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "AI Automation & Go High Level Specialist",
    company: "Buildberg",
    date: "Jun 2026 – Present",
    points: [
      "Built Go High Level CRM and automation systems for service businesses, covering lead capture, qualification, appointment booking, follow-ups, and review generation.",
      "Developed AI-powered Voice AI receptionist and automation solutions for inbound calls, lead qualification, customer information collection, and appointment scheduling.",
      "Integrated Go High Level with n8n, Make, Zapier, Twilio, webhooks, APIs, and third-party platforms to create end-to-end automated workflows."
    ]
  },
  {
    role: "Go High Level Automation Specialist",
    company: "Camden Health System",
    date: "May 2025 – May 2026",
    points: [
      "Built complete Go High Level systems including CRM pipelines, forms, calendars, appointment booking, SMS/email automation, reminders, and follow-up workflows.",
      "Developed automated customer journeys for lead nurturing, appointment confirmations, no-show recovery, reactivation, and review generation.",
      "Performed workflow testing, troubleshooting, account audits, and optimization to reduce manual work and improve lead response and customer engagement."
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Science in Chemical Engineering",
    school: "University of Engineering and Technology, Lahore",
    date: "2014 - 2018"
  },
  {
    degree: "Intermediate in Science",
    school: "Punjab College, Bahawalpur Campus",
    date: "2012 - 2014"
  }
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelectorAll(".exp-item"),
      { x: -50, opacity: 0 },
      {
        x: 0,
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
    <section id="experience" ref={sectionRef} style={{ padding: "10vh 10vw", minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
      
      <div>
        <h2 style={{ fontSize: "clamp(2rem, 3vw, 3rem)", marginBottom: "3rem", color: "var(--color-primary)" }}>
          Professional <span className="text-gradient">Experience</span>
        </h2>
        
        <div style={{ position: "relative", borderLeft: "2px solid rgba(0, 245, 239, 0.2)", paddingLeft: "2rem" }}>
          {experiences.map((exp, i) => (
            <div key={i} className="exp-item" style={{ marginBottom: "3rem", position: "relative" }}>
              <div style={{ position: "absolute", left: "-2.45rem", top: "0.4rem", width: "16px", height: "16px", borderRadius: "50%", background: "var(--color-bg)", border: "2px solid var(--color-primary)" }} />
              <h3 style={{ fontSize: "1.5rem", color: "var(--color-text)", marginBottom: "0.5rem" }}>{exp.role}</h3>
              <h4 style={{ fontSize: "1.2rem", color: "var(--color-secondary)", marginBottom: "0.5rem" }}>{exp.company}</h4>
              <p style={{ fontSize: "0.9rem", color: "rgba(228, 234, 237, 0.5)", marginBottom: "1rem" }}>{exp.date}</p>
              <ul style={{ listStyleType: "none" }}>
                {exp.points.map((pt, j) => (
                  <li key={j} style={{ fontSize: "1rem", color: "rgba(228, 234, 237, 0.8)", marginBottom: "0.5rem", paddingLeft: "1rem", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: "0.5rem", width: "4px", height: "4px", background: "var(--color-primary)", borderRadius: "50%" }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: "clamp(2rem, 3vw, 3rem)", marginBottom: "3rem", color: "var(--color-secondary)" }}>
          Education & <span className="text-gradient">Languages</span>
        </h2>
        
        <div style={{ position: "relative", borderLeft: "2px solid rgba(239, 165, 69, 0.2)", paddingLeft: "2rem" }}>
          {education.map((edu, i) => (
            <div key={i} className="exp-item" style={{ marginBottom: "2rem", position: "relative" }}>
              <div style={{ position: "absolute", left: "-2.45rem", top: "0.4rem", width: "16px", height: "16px", borderRadius: "50%", background: "var(--color-bg)", border: "2px solid var(--color-secondary)" }} />
              <h3 style={{ fontSize: "1.2rem", color: "var(--color-text)", marginBottom: "0.5rem" }}>{edu.degree}</h3>
              <h4 style={{ fontSize: "1rem", color: "rgba(228, 234, 237, 0.8)", marginBottom: "0.5rem" }}>{edu.school}</h4>
              <p style={{ fontSize: "0.9rem", color: "rgba(228, 234, 237, 0.5)" }}>{edu.date}</p>
            </div>
          ))}
          
          <div className="exp-item" style={{ marginTop: "4rem" }}>
            <h3 style={{ fontSize: "1.2rem", color: "var(--color-text)", marginBottom: "1rem" }}>Languages & Availability</h3>
            <p style={{ color: "rgba(228, 234, 237, 0.8)", marginBottom: "0.5rem" }}><strong>English:</strong> Excellent written and verbal communication</p>
            <p style={{ color: "rgba(228, 234, 237, 0.8)" }}><strong>Availability:</strong> Immediately available, fully remote, flexible with EST / any US time zone overlap.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
