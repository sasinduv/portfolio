import React from "react";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contactInfo } from "../data/contact";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

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

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{contactInfo.name}</h2>
            <p className="mt-3 max-w-sm text-gray-600">{contactInfo.role}</p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-blue-500 transition hover:text-blue-600"
            >
              <Mail className="h-4 w-4" />
              {contactInfo.email}
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <div className="mt-3 flex flex-col gap-2 text-gray-600">
              <Link to="/" className="transition hover:text-black">
                Home
              </Link>
              <Link to="/certification" className="transition hover:text-black">
                Certification
              </Link>
              <Link to="/projects" className="transition hover:text-black">
                Projects
              </Link>
              <Link to="/contact" className="transition hover:text-black">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Mobile</h3>
            <div className="mt-3 flex flex-col gap-3 text-gray-600">
              {contactInfo.phones.map((phone) => (
                <a
                  key={phone.value}
                  href={`tel:${phone.value}`}
                  className="inline-flex items-center gap-3 transition hover:text-black"
                >
                  <Phone className="h-4 w-4" />
                  {phone.display}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Connect</h3>
            <div className="mt-3 flex gap-4 text-gray-600">
              {socialLinks.map((item) => {
                const IconComponent = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="rounded-full border border-gray-200 p-3 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-500"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-5 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {contactInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
