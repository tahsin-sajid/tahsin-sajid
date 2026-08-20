"use client";

const work = [
  { page: 1, label: "Provided PDF - page 01" },
  { page: 2, label: "Provided PDF - page 02" },
];

export default function WorkShowcase() {
  return (
    <section id="more-work" className="showcase-section" aria-labelledby="more-work-title">
      <div className="section-kicker">Additional Work</div>
      <h2 id="more-work-title">Selected Website <span className="text-gradient">&amp; Funnel Work</span></h2>
      <p className="section-intro">A closer look at additional digital experiences built for conversion and clarity.</p>
      <div className="showcase-stack">
        {work.map((item, index) => (
          <figure className="showcase-card" key={item.page} style={{ zIndex: index + 1 }}>
            <iframe src={`/Go High Level Automation.pdf#page=${item.page}&view=FitH`} title={item.label} loading="lazy" />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}