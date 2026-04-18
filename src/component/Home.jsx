import React from "react";
import { Link } from "react-router-dom";
import { contactInfo } from "../data/contact";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

const socialLinks = [
  {
    label: "LinkedIn",
    href: contactInfo.links.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: contactInfo.links.github,
    icon: GitHubIcon,
  },
];

export default function Home() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-white py-16"
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

        <div className="text-center md:text-left flex flex-col gap-6 items-center md:items-start">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold md:font-bold tracking-tight leading-[0.98] text-gray-900 flex items-center justify-center md:justify-start gap-3">
            Sasindu Gihan
            <svg
              className="dark:text-white animate-spin [animation-duration:6s] ease-linear"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.4472 4.10557c-.2815-.14076-.6129-.14076-.8944 0L2.76981 8.49706l9.21949 4.39024L21 8.38195l-8.5528-4.27638Z" />
              <path d="M5 17.2222v-5.448l6.5701 3.1286c.278.1325.6016.1293.8771-.0084L19 11.618v5.6042c0 .2857-.1229.5583-.3364.7481l-.0025.0022-.0041.0036-.0103.009-.0119.0101-.0181.0152c-.024.02-.0562.0462-.0965.0776-.0807.0627-.1942.1465-.3405.2441-.2926.195-.7171.4455-1.2736.6928C15.7905 19.5208 14.1527 20 12 20c-2.15265 0-3.79045-.4792-4.90614-.9751-.5565-.2473-.98098-.4978-1.27356-.6928-.14631-.0976-.2598-.1814-.34049-.2441-.04036-.0314-.07254-.0576-.09656-.0776-.01201-.01-.02198-.0185-.02991-.0253l-.01038-.009-.00404-.0036-.00174-.0015-.0008-.0007s-.00004 0 .00978-.0112l-.00009-.0012-.01043.0117C5.12215 17.7799 5 17.5079 5 17.2222Zm-3-6.8765 2 .9523V17c0 .5523-.44772 1-1 1s-1-.4477-1-1v-6.6543Z" />
            </svg>
          </h1>

          <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-600">
            {contactInfo.role}
          </p>

          <p className="max-w-xl text-base leading-7 text-gray-500">
            I design and develop modern web applications with a strong focus on
            user experience, performance, and practical business value.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_16px_32px_rgba(59,130,246,0.28)]"
            >
              Explore Projects
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-7 py-4 font-semibold text-gray-800 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-lg"
            >
              Contact Section
            </a>
          </div>

          <div className="flex flex-wrap justify-center font-semibold md:justify-start gap-4 mt-2 text-gray-800">
            {socialLinks.map((item) => {
              const IconComponent = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl border border-gray-200 px-5 py-3 text-sm text-gray-700 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-lg"
                >
                  <IconComponent className="h-5 w-5" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
