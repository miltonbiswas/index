"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Layers,
  Stethoscope,
  Building2,
  Receipt,
  FileText,
  Activity,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const PROJECTS = [
  {
    title: "Medical ERP System",
    slug: "medical-erp",
    description:
      "End-to-end ERP for retail & wholesale pharmacy operations with inventory, billing, compliance, and reporting.",
    icon: Stethoscope,
    tag: "Healthcare / ERP",
  },
  {
    title: "HRMS & Payroll Platform",
    slug: "hrms-payroll",
    description:
      "Role-based HR management system with attendance, payroll, employee lifecycle, and admin dashboards.",
    icon: Building2,
    tag: "Enterprise / HR",
  },
  {
    title: "Admin IDV Dashboard",
    slug: "admin-idv",
    description:
      "Internal operations dashboard for tour & travel business management, bookings, invoicing, and analytics.",
    icon: Layers,
    tag: "Operations / Dashboard",
  },
  {
    title: "Shri Ram Medical Store System",
    slug: "shri-ram-medical-store",
    description:
      "Real-time billing, inventory, expiry tracking, and analytics for a 24/7 retail pharmacy.",
    icon: Activity,
    tag: "Retail / HealthTech",
  },
  {
    title: "OSIG Invoice Generator",
    slug: "osig-invoice-generator",
    description:
      "Open-source invoice & billing tool with PDF generation and offline-first support.",
    icon: Receipt,
    tag: "Finance / Open Source",
  },
  {
    title: "Quick Resume Builder",
    slug: "quick-resume-builder",
    description:
      "ATS-friendly resume builder with local storage, export, and print-ready layouts.",
    icon: FileText,
    tag: "Productivity / UI",
  },
  {
    title: "MedM System",
    slug: "medm-system",
    description:
      "Medical management and analytics platform focused on optimized patient data flow.",
    icon: Stethoscope,
    tag: "Medical / Analytics",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function ProjectsShowcase() {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-white dark:bg-slate-950 overflow-hidden">
      {/* ---------- ABSTRACT BACKGROUND ---------- */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ---------- HEADING ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
            Portfolio
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Featured Case Studies
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of production-grade systems I’ve architected and built
            for real-world business impact.
          </p>
        </motion.div>

        {/* ---------- GRID ---------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}>
              <Link
                href={`/case-studies/${project.slug}`}
                className="group relative block h-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-8 shadow-sm dark:shadow-none hover:-translate-y-1 hover:shadow-lg dark:hover:border-blue-500/40 transition-all  flex flex-col"
              >
                {/* hover glow */}
                <div className="absolute inset-0 rounded-3xl bg-blue-500/0 group-hover:bg-blue-500/5 dark:group-hover:bg-blue-500/10 blur-xl transition pointer-events-none" />

                {/* icon */}
                <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <project.icon size={22} />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 flex-grow">
                  <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    {project.tag}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* CTA FOOTER */}
                <div
                  className="relative z-10 mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  <span>View Case Study</span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
