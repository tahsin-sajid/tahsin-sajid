"use client";

import Interactive3D from "./Interactive3D";

export default function WorkShowcase() {
  return (
    <section id="more-work" className="showcase-section" aria-labelledby="more-work-title">
      <div className="section-kicker">Additional Work</div>
      <h2 id="more-work-title">Selected Website <span className="text-gradient">&amp; Funnel Work</span></h2>
      <p className="section-intro">A closer look at additional digital experiences built for conversion and clarity.</p>
      <div className="showcase-stack">
        <Interactive3D className="showcase-card" intensity={5}>
          <iframe src="/Go High Level Automation.pdf#view=FitH" title="Go High Level Automation portfolio" loading="lazy" />
          <figcaption>Go High Level Automation portfolio</figcaption>
        </Interactive3D>
      </div>
    </section>
  );
}