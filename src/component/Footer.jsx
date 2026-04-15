export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-10">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between gap-10">

                    {/* Left - About */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Sasindu Gihan
                        </h2>
                        <p className="mt-3 text-gray-600 max-w-sm">
                            Software Engineer passionate about building modern web
                            applications and solving real-world problems.
                        </p>
                    </div>

                    {/* Middle - Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
                        <ul className="mt-3 space-y-2 text-gray-600">
                            <li><a href="#home" className="hover:text-black">Home</a></li>
                            <li><a href="#projects" className="hover:text-black">Projects</a></li>
                            <li><a href="#contact" className="hover:text-black">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right - Social */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Connect</h3>
                        <div className="flex gap-4 mt-3 text-gray-600 text-xl">

                            <a href="https://github.com/sasinduv" target="_blank">
                                <i className="fab fa-github hover:text-black"></i>
                            </a>

                            <a href="https://www.linkedin.com/in/sasindu-gihan-247716227/" target="_blank">
                                <i className="fab fa-linkedin hover:text-black"></i>
                            </a>

                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-10 text-center text-gray-500 text-sm border-t pt-5">
                    © {new Date().getFullYear()} Sasindu Gihan. All rights reserved.
                </div>

            </div>
        </footer>
    )
}