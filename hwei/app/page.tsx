import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { UltronVisualization } from '../components/ultron/UltronVisualization';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-900">
      {/* Fixed Ultron Visualization Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <UltronVisualization />
      </div>
      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
