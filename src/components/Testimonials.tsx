"use client";

import { motion } from "framer-motion";
import Interactive3D from "./Interactive3D";

// Replace these clearly marked placeholders with approved client feedback.
const testimonials = [
  { name: "Client testimonial placeholder", role: "Replace with client role / company", quote: "Add a verified testimonial here describing the outcome of the automation system.", project: "Featured project", initials: "CT" },
  { name: "Client testimonial placeholder", role: "Replace with client role / company", quote: "Add a verified testimonial here describing the collaboration and measurable result.", project: "Automation delivery", initials: "CT" },
  { name: "Client testimonial placeholder", role: "Replace with client role / company", quote: "Add a verified testimonial here describing the business impact of the work.", project: "AI integration", initials: "CT" },
];

export default function Testimonials() {
  return (
    <section id="results" className="section-shell" aria-labelledby="results-title">
      <div className="section-kicker">Results</div>
      <h2 id="results-title">Client <span className="text-gradient">Testimonials</span></h2>
      <p className="section-intro">Real feedback from businesses and clients I&apos;ve worked with.</p>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <Interactive3D key={`${testimonial.name}-${index}`} className="testimonial-card glass-panel" intensity={6}>
            <article>
            <div className="testimonial-topline"><span className="testimonial-avatar">{testimonial.initials}</span><span className="stars" aria-label="Placeholder five star rating">★★★★★</span></div>
            <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
            <div><strong>{testimonial.name}</strong><p>{testimonial.role}</p><small>{testimonial.project}</small></div>
            </article>
          </Interactive3D>
        ))}
      </div>
    </section>
  );
}