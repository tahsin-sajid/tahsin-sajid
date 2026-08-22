"use client";

import { motion } from "framer-motion";
import Interactive3D from "./Interactive3D";

const testimonials = [
  { name: "Marcus L.", role: "Agency Owner", quote: "Before Tahsin built this system, I was manually texting every new lead and forgetting to follow up. Now the system does everything. Our show rate went from 38% to 71% in the first 30 days.", project: "Lead follow-up automation", initials: "ML" },
  { name: "Priya R.", role: "Online Coaching Business", quote: "We onboarded 12 clients last month and I did not touch the CRM once. The system handled every new lead, sent the contracts, and set up onboarding automatically.", project: "Client onboarding automation", initials: "PR" },
  { name: "James K.", role: "B2B Consultant", quote: "I finally have a pipeline that is predictable. I can see every lead, where they are, and what happens next. Tahsin does not just set up tools. He thinks through the whole business.", project: "Predictable sales pipeline", initials: "JK" },
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
            <div className="testimonial-topline"><span className="testimonial-avatar">{testimonial.initials}</span><span className="stars" aria-label="Five star rating">★★★★★</span></div>
            <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
            <div><strong>{testimonial.name}</strong><p>{testimonial.role}</p><small>{testimonial.project}</small></div>
            </article>
          </Interactive3D>
        ))}
      </div>
    </section>
  );
}