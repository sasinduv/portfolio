import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const allProjects = [
  {
    id: 1,
    title: "CAFM System - FACILITRON",
    desc: "A full-stack facility management system developed by React and Node.js.",
    img: "images/Screenshot 2026-04-08 142029.png",
  },
  {
    id: 2,
    title: "POS System",
    desc: "JAVA + JDBC architectured builling system",
    img: "images/pos.png",
  },
  {
    id: 3,
    title: "Film Hub",
    desc: "Detailed movie information and recommendation platform built with React and TMDB API.",
    img: "images/filmhub.png",
  },
  {
    id: 4,
    title: "Finance Dashboard",
    desc: "An interactive chart-heavy financial dashboard dashboard built with Chart.js.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    title: "Portfolio Template",
    desc: "A personal portfolio template for creatives, designers, and developers.",
    img: "https://images.unsplash.com/photo-1507238692062-5a042e9eec62?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    title: "Recipe Finder",
    desc: "A responsive single page application that connects to recipe APIs.",
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <div className="mx-auto min-h-[calc(100vh-200px)] w-full max-w-6xl px-6 py-20">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            All Projects
          </h1>
          <Link
            to="/"
            className="font-semibold text-blue-500 transition hover:-translate-x-1 hover:text-blue-600"
          >
            &larr; Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-[28px] bg-gray-50 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={project.img}
                alt={project.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-8 text-left">
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="leading-relaxed text-gray-600">{project.desc}</p>
                <a
                  href="#"
                  className="mt-4 inline-block font-medium text-blue-500 underline-offset-4 hover:text-blue-600 hover:underline"
                >
                  View details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
