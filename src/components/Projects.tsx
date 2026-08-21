"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Interactive3D from "./Interactive3D";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "HVAC Lead-to-Review Automation System",
    description: "Built a 4-stage automated lead lifecycle covering lead capture, booking confirmation, estimate approval, and review requests. Reduced follow-up time by 60% and recovered 15-20% of non-responsive leads.",
    stack: ["Go High Level", "Make", "Twilio", "OpenAI", "Webhooks"],
    videoSrc: "/videos/HVAC.mp4"
  },
  {
    title: "Dental Clinic Patient Journey Automation",
    description: "Zero-manual-intervention patient journey covering form submission to review request. Multi-stage reminder automation reduced no-shows by 30-40% and increased online patient testimonials by 25-35%.",
    stack: ["Go High Level", "Twilio", "Google Workspace", "Webhooks"],
    videoSrc: "/videos/Dental.mp4"
  },
  {
    title: "Voice AI Receptionist System",
    description: "AI-powered Voice Receptionist for service businesses to handle inbound calls, automated lead qualification, and appointment scheduling seamlessly integrated with GHL CRM and calendars.",
    stack: ["Go High Level", "Voice AI", "Conversational AI", "CRM"],
    videoSrc: "/videos/Voice AI Agent.mp4"
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const projectCards = el.querySelectorAll(".project-card");
    projectCards.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef} style={{ padding: "10vh 10vw", minHeight: "100vh" }}>
      <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", marginBottom: "4rem" }}>
        Selected <span className="text-gradient">Work</span>
      </h2>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
        {projects.map((project, i) => (
          <div key={i} className="project-card" style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1.2fr 1fr" : "1fr 1.2fr", gap: "4rem", alignItems: "center" }}>
            
            {i % 2 !== 0 && (
              <div style={{ order: 1 }}>
                <ProjectContent project={project} />
              </div>
            )}
            
            <Interactive3D className="project-media" intensity={5} style={{ order: i % 2 === 0 ? 1 : 2, borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", position: "relative", aspectRatio: "16/9", background: "#000" }}>
              <video
                src={project.videoSrc} 
                muted 
                playsInline
                preload="none"
                controls
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,24,26,0.8), transparent)" }} />
            </Interactive3D>

            {i % 2 === 0 && (
              <div style={{ order: 2 }}>
                <ProjectContent project={project} />
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectContent({ project }: { project: any }) {
  return (
    <div>
      <h3 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "var(--color-text)" }}>{project.title}</h3>
      <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(228, 234, 237, 0.7)", marginBottom: "2rem" }}>
        {project.description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginBottom: "2rem" }}>
        {project.stack.map((tech: string, j: number) => (
          <span key={j} style={{ padding: "0.4rem 0.8rem", background: "rgba(0,245,239,0.1)", color: "var(--color-primary)", borderRadius: "4px", fontSize: "0.8rem", fontWeight: 600 }}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
