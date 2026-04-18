import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ContactSection from "../component/ContactSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <ContactSection variant="page" />
      <Footer />
    </div>
  );
}
