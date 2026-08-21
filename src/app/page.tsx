import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import WorkShowcase from "@/components/WorkShowcase";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WorkShowcase />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
