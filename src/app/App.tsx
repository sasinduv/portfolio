import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { FloatingIcons } from './components/FloatingIcons';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="dark min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30 text-foreground relative overflow-x-hidden">
      {/* Floating background icons */}
      <FloatingIcons />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar scrolled={scrolled} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
