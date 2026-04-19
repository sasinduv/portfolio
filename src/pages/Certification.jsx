import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CertificationSection from "../component/CertificationSection";

export default function Certification() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <CertificationSection variant="page" />
      <Footer />
    </div>
  );
}
