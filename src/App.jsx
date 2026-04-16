import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import ProjectsSection from './component/ProjectsSection';
import Footer from './component/Footer';
import Projects from './pages/Projects';

function MainPage() {
  return (
    <div>
      <Navbar />
      <Home />
      <ProjectsSection />
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
      </Routes>
    </Router>
  );
}

export default App;
