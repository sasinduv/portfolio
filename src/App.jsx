import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import CertificationSection from './component/CertificationSection';
import ProjectsSection from './component/ProjectsSection';
import ContactSection from './component/ContactSection';
import Footer from './component/Footer';
import Projects from './pages/Projects';
import Certification from './pages/Certification';
import Contact from './pages/Contact';

function MainPage() {
  return (
    <div>
      <Navbar />
      <Home />
      <ProjectsSection />
      <CertificationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
