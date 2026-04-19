import React from "react";
import { Link, NavLink } from "react-router-dom";
import { contactInfo } from "../data/contact";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

const menu = [
  { name: "Home", to: "/" },
  { name: "Certification", to: "/certification" },
  { name: "Contact", to: "/contact" },
  { name: "Project", to: "/projects" }
];

const socialLinks = [
  {
    label: "GitHub",
    href: contactInfo.links.github,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: contactInfo.links.linkedin,
    icon: LinkedInIcon,
  },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-[28px] border border-gray-200 bg-white px-8 py-6 shadow-sm">
        <Link to="/" className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-3xl font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
            S
          </div>
          <div>
            <h1 className="font-heading text-2xl font-semibold tracking-normal text-gray-900 transition hover:text-blue-500">
              Sasindu
            </h1>
            <p className="mt-1 text-xs font-semibold tracking-[0.3em] text-gray-400 transition hover:text-black">
              {contactInfo.name}
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 rounded-3xl border border-gray-200 bg-[#f8f8f8] px-3 py-2 shadow-inner md:flex">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `rounded-2xl px-8 py-3 font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white text-blue-500 shadow-sm"
                    : "text-gray-500 hover:text-black"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-4 text-gray-600 lg:flex">
            {socialLinks.map((item) => {
              const IconComponent = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="rounded-full p-2 transition hover:-translate-y-0.5 hover:text-blue-500"
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="flex items-center gap-3 rounded-2xl bg-blue-500 px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_10px_25px_rgba(59,130,246,0.25)]"
          >
            Get in Touch
            <span className="text-xl">&rarr;</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
