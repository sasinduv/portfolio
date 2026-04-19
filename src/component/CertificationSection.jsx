import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  CalendarDays,
  Clock3,
  Sparkles,
} from "lucide-react";
import { certifications } from "../data/certifications";

const featuredCertifications = certifications.filter((item) => item.featured);

export default function CertificationSection({ variant = "section" }) {
  const isPage = variant === "page";
  const items = isPage ? certifications : featuredCertifications.slice(0, 3);
  const issuers = new Set(certifications.map((item) => item.issuer)).size;

  const stats = [
    {
      label: "Certificates",
      value: certifications.length,
      icon: Award,
    },
    {
      label: "Verified Entries",
      value: certifications.length,
      icon: BadgeCheck,
    },
    {
      label: "Issuing Bodies",
      value: issuers,
      icon: Sparkles,
    },
  ];

  return (
    <section
      id="certification"
      className={`w-full ${
        isPage
          ? "bg-white py-20 min-h-[calc(100vh-220px)]"
          : "bg-gradient-to-b from-[#f8fbff] via-white to-[#eef4ff] py-24"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Award className="h-4 w-4" />
              Certification
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
                Showcase your certifications with clear proof and context.
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                This section highlights each certificate with its issuer,
                credential ID, issue date, learning scope, and the technical
                skills it supports.
              </p>
            </div>

            {isPage ? (
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition hover:text-blue-600"
              >
                <ArrowUpRight className="h-4 w-4 rotate-180" />
                Back to Home
              </Link>
            ) : (
              <Link
                to="/certification"
                className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_16px_32px_rgba(59,130,246,0.28)]"
              >
                Open Full Certification Page
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {stats.map((item) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <IconComponent className="h-6 w-6 text-blue-500" />
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                      Live
                    </span>
                  </div>
                  <p className="mt-8 text-4xl font-bold text-gray-900">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-gray-400">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`mt-16 grid gap-8 ${
            isPage ? "lg:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"
          }`}
        >
          {items.map((certificate) => (
            <article
              key={certificate.id}
              className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
            >
              <div
                className="relative overflow-hidden px-8 py-8 text-white"
                style={{ backgroundImage: certificate.background }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                      Certificate
                    </p>
                    <p className="mt-4 text-5xl font-bold tracking-tight">
                      {certificate.badge}
                    </p>
                  </div>

                  <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {certificate.level}
                  </span>
                </div>

                <div className="mt-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                    Issued By
                  </p>
                  <p className="mt-2 text-xl font-semibold">{certificate.issuer}</p>
                </div>
              </div>

              <div className="space-y-6 p-8">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                    <BadgeCheck className="h-4 w-4" />
                    Verified portfolio entry
                  </div>
                  <h3 className="mt-4 text-3xl font-bold text-gray-900">
                    {certificate.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-gray-600">
                    {certificate.description}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-gray-50 p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                      <CalendarDays className="h-4 w-4 text-blue-500" />
                      Issue Date
                    </div>
                    <p className="mt-3 text-lg font-semibold text-gray-900">
                      {certificate.issueDate}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-gray-50 p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                      <Clock3 className="h-4 w-4 text-blue-500" />
                      Duration
                    </div>
                    <p className="mt-3 text-lg font-semibold text-gray-900">
                      {certificate.duration}
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-200 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Credential ID
                  </p>
                  <p className="mt-3 break-all text-lg font-semibold text-gray-900">
                    {certificate.credentialId}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Skills Covered
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {isPage && (
          <div className="mt-16 rounded-[32px] bg-[#111827] px-8 py-8 text-white shadow-xl">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Need More Details?
                </p>
                <h3 className="mt-3 text-3xl font-semibold">
                  Share the original certificate files or verification links in
                  this section whenever you&apos;re ready.
                </h3>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Contact Page
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
