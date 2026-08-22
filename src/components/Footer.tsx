import Link from "next/link";
import { Globe2, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

const navigation = ["Home", "About", "Skills", "Projects", "Results", "Contact"];
const services = ["GoHighLevel CRM Automation", "AI Voice & Chat Agents", "Sales Funnel & Landing Page Development", "Workflow & Pipeline Automation", "Email & SMS Marketing Automation", "Third-Party Integrations"];
const socials = [
  ["Facebook", "https://web.facebook.com/profile.php?id=61573770764598"], ["X", "https://x.com/TahsinSajid16"], ["LinkedIn", "https://www.linkedin.com/in/tahsin--sajid/"], ["Threads", "https://www.threads.com/@ghlwithtahsin"], ["Instagram", "https://www.instagram.com/ghlwithtahsin"],
];

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-brand"><div className="brand-mark">TS<span>.</span></div><p>We build AI automation systems, intelligent agents, and modern digital products that help businesses scale operations without scaling headcount.</p><div className="social-links">{socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit Tahsin on ${label}`}>{label}</a>)}</div></div>
      <div><div className="footer-kicker">Navigation</div><h3>Quick Links</h3><nav className="footer-links">{navigation.map((item) => <Link key={item} href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}>{item}</Link>)}</nav></div>
      <div><div className="footer-kicker">Services</div><h3>What We Build</h3><div className="footer-links">{services.map((service) => <a key={service} href="#skills">{service}</a>)}</div></div>
      <div><div className="footer-kicker">Get In Touch</div><h3>Contact Us</h3><div className="contact-links"><a href="https://wa.me/923305503887" target="_blank" rel="noopener noreferrer"><MessageCircle size={17} />+92 330 5503887</a><a href="mailto:tahsinsajid1616@gmail.com"><Mail size={17} />tahsinsajid1616@gmail.com</a><p><Globe2 size={17} />Remote-first delivery<br />Working with clients globally</p></div></div>
    </div>
    <div className="footer-bottom"><div><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms &amp; Conditions</Link><a href="#home" aria-label="Back to top"><ArrowUpRight size={16} /></a></div><span>© {new Date().getFullYear()} Tahsin Sajid. All rights reserved.</span></div>
  </footer>;
}