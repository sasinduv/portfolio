import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import ProjectsSection from './component/ProjectsSection';
import ContactSection from './component/ContactSection';
import Footer from './component/Footer';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function MainPage() {
  return (
    <div>
      <Navbar />
      <Home />
      <ProjectsSection />
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
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
