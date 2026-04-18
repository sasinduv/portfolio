import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
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

export default function ContactSection({ variant = "section" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const isPage = variant === "page";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject =
      formData.subject.trim() || `New portfolio inquiry from ${formData.name.trim()}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className={`w-full ${
        isPage
          ? "bg-white py-20 min-h-[calc(100vh-220px)]"
          : "bg-gradient-to-b from-white via-[#f8fafc] to-[#eef4ff] py-24"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Send className="h-4 w-4" />
              Contact
            </div>

            <div className="space-y-5">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Let&apos;s build something meaningful together.
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                If you&apos;re looking for a developer for a product build,
                freelance project, or a new opportunity, you can email me
                directly from this page or reach out through my social profiles.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${contactInfo.email}`}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <Mail className="h-6 w-6 text-blue-500" />
                  <ArrowUpRight className="h-5 w-5 text-gray-400" />
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Email
                </p>
                <p className="mt-2 break-all text-lg font-semibold text-gray-900">
                  {contactInfo.email}
                </p>
              </a>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <MapPin className="h-6 w-6 text-blue-500" />
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Available
                  </span>
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Based In
                </p>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  {contactInfo.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {contactInfo.availability}
                </p>
              </div>
            </div>

            <div className="rounded-[32px] bg-[#111827] px-8 py-8 text-white shadow-xl">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                    Mobile Numbers
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    Call or message me directly
                  </h3>
                </div>
                {!isPage && (
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition hover:text-white"
                  >
                    Open full contact page
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {contactInfo.phones.map((phone) => (
                  <a
                    key={phone.value}
                    href={`tel:${phone.value}`}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-200" />
                      <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">
                        {phone.label}
                      </span>
                    </div>
                    <p className="mt-4 text-2xl font-semibold tracking-wide">
                      {phone.display}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((item) => {
                const IconComponent = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 font-semibold text-gray-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-lg"
                  >
                    <IconComponent className="h-5 w-5" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Send an Email
              </p>
              <h3 className="mt-3 text-3xl font-bold text-gray-900">
                Write your message here
              </h3>
              <p className="mt-3 text-gray-600">
                Submitting this form opens your email app with your message
                pre-filled to send directly to me.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">
                    Your Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-400 focus:bg-white"
                    placeholder="Your full name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-gray-700">
                    Your Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-400 focus:bg-white"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-700">
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-400 focus:bg-white"
                  placeholder="Project inquiry"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-gray-700">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[170px] w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-400 focus:bg-white"
                  placeholder="Tell me a bit about your idea, timeline, or opportunity."
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-500 px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_16px_32px_rgba(59,130,246,0.28)]"
              >
                Send Email Now
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
