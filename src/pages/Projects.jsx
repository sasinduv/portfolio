import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const allProjects = [
    { id: 1, title: 'E-Commerce Platform', desc: 'A full-stack e-commerce solution with React and Node.js.', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=400&q=80' },
    { id: 2, title: 'Task Management Tool', desc: 'A Kanban-style task management app built with Tailwind UI.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80' },
    { id: 3, title: 'AI Chat Interface', desc: 'An AI-powered chat interface utilizing OpenAI API.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80' },
    { id: 4, title: 'Finance Dashboard', desc: 'An interactive chart-heavy financial dashboard dashboard built with Chart.js.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80' },
    { id: 5, title: 'Portfolio Template', desc: 'A personal portfolio template for creatives, designers, and developers.', img: 'https://images.unsplash.com/photo-1507238692062-5a042e9eec62?auto=format&fit=crop&w=400&q=80' },
    { id: 6, title: 'Recipe Finder', desc: 'A responsive single page application that connects to recipe APIs.', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=80' },
];

export default function Projects() {
    return (
        <div className="bg-white min-h-screen font-sans">
            <Navbar />
            <div className="max-w-6xl w-full mx-auto px-6 py-20 min-h-[calc(100vh-200px)]">
                <div className="flex items-center justify-between mb-12 flex-col md:flex-row gap-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">All Projects</h1>
                    <Link to="/" className="text-blue-500 font-semibold hover:text-blue-600 transition hover:-translate-x-1">
                        ← Back to Home
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map(p => (
                        <div key={p.id} className="bg-gray-50 rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
                            <div className="p-8 text-left">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{p.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
                                <a href="#" className="inline-block mt-4 text-blue-500 font-medium hover:text-blue-600 underline-offset-4 hover:underline">
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