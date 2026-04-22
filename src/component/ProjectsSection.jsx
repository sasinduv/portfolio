import React from 'react';
import { Link } from 'react-router-dom';

const featuredProjects = [
    {
        id: 1,
        title: 'CAFM System - FACILITRON',
        desc: 'A full-stack facility management system developed by React and Node.js.',
        img: 'images/Screenshot 2026-04-08 142029.png'
    },
    {
        id: 2,
        title: 'POS System',
        desc: 'JAVA + JDBC architectured builling system',
        img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 3,
        title: 'AI Chat Interface',
        desc: 'An AI-powered chat interface utilizing OpenAI API.',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80'
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 bg-gray-50 flex items-center justify-center w-full">
            <div className="max-w-6xl w-full mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Here are a few of my recent works. To see more of what I've been building, check out the all projects page.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProjects.map(p => (
                        <div key={p.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="overflow-hidden">
                                <img src={p.img} alt={p.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{p.title}</h3>
                                <p className="text-gray-600">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-2xl hover:shadow-[0_10px_25px_rgba(59,130,246,0.25)] transition hover:-translate-y-0.5"
                    >
                        View All Projects
                        <span>&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
