import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen flex items-center justify-center bg-white"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-16 px-6">


        <div className="p-2 flex items-center justify-center rounded-full bg-gray-300">
          <div className="p-1 rounded-full bg-white shadow-lg">
            <img
              src="/myprofessional.png"
              alt="profile"
              className="w-64 h-64 object-cover rounded-full"
            />
          </div>
        </div>


        <div className="text-center md:text-left flex flex-col gap-6 items-center">

          {/* Name */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold md:font-bold tracking-tight leading-[0.98] text-gray-900 flex items-center justify-center md:justify-start gap-3">
  Sasindu Gihan
</h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-600">
            Software Engineer | Full Stack Developer & Problem Solver
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-6 text-gray-600">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sasindu-gihan-247716227/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/sasinduv"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition text-2xl"
            >
              <i className="fab fa-github"></i>
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="hover:text-black transition text-2xl"
            >
              <i className="fab fa-x-twitter"></i>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
