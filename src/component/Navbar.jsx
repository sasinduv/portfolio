import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [active, setActive] = useState(location.hash || "#home");

    const menu = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <nav className="w-full bg-white py-6 px-6">
            <div className="max-w-7xl mx-auto bg-white rounded-[28px] shadow-sm border border-gray-200 px-8 py-6 flex items-center justify-between">

                {/* Left Logo */}
                <Link to="/" className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center text-white text-3xl font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-pointer">
                        S
                    </div>
                    <div>
                        <h1 className="font-heading text-2xl font-semibold tracking-normal text-gray-900 leading-none hover:text-blue-500 transition">Sasindu</h1>
                        <p className="text-xs tracking-[0.3em] text-gray-400 font-semibold mt-1 hover:text-black transition">
                            Sasindu Gihan
                        </p>
                    </div>
                </Link>

                {/* Center Menu */}
                <div className="hidden md:flex items-center bg-[#f8f8f8] border border-gray-200 rounded-3xl px-3 py-2 gap-2 shadow-inner">
                    {menu.map((item) => {
                        const isProjectsTab = item.name === "Projects";
                        const target = isProjectsTab ? item.href : (isHomePage ? item.href : `/${item.href}`);
                        const isActive = isProjectsTab 
                            ? location.pathname === "/projects" 
                            : (active === item.href && isHomePage);

                        return (
                            <a
                                key={item.name}
                                href={target}
                                onClick={() => setActive(item.href)}
                                className={`group relative px-8 py-3 rounded-2xl font-medium transition-all duration-300
        ${isActive
                                        ? "bg-white text-blue-500 shadow-sm"
                                        : "text-gray-500 hover:text-black"
                                    }`}
                            >
                                {item.name}

                                {/* underline */}
                                <span className={`absolute left-1/2 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-1/8 ${isActive ? "w-1/8" : ""}`}></span>
                            </a>
                        );
                    })}
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-5">
                    <div className="hidden lg:flex items-center gap-5 text-gray-600">

                        <a href="#" className="hover:text-blue-500 transition hover:-translate-y-0.5">
                            <svg  
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                            className="w-6 h-6"
                            fill="currentColor" 
                            viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                            </svg>

                        </a>

                        <a href="#" className="hover:text-blue-500 transition hover:-translate-y-0.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.766S5.534 3.2 6.5 3.2s1.75.79 1.75 1.766-.784 1.766-1.75 1.766zM20 19h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867 0-2.154 1.46-2.154 2.965V19h-3V8h2.881v1.507h.041c.401-.761 1.381-1.564 2.844-1.564 3.041 0 3.603 2.002 3.603 4.604V19z" />
                            </svg>
                        </a>

                        <a href="#" className="hover:text-blue-500 transition hover:-translate-y-0.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 4.557a9.839 9.839 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.061a4.917 4.917 0 003.946 4.817 4.902 4.902 0 01-2.224.084 4.919 4.919 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.009-7.504 14.009-14.01 0-.213-.004-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
                            </svg>
                        </a>
                    </div>

                    <a
                        href="#contact"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-2xl hover:shadow-[0_10px_25px_rgba(59,130,246,0.25)] transition flex items-center gap-3 hover:-translate-y-0.5"
                    >
                        Get in Touch
                        <span className="text-xl">→</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}

