"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  TrendingUp,
  ShieldCheck,
  Database,
  Workflow,
} from "lucide-react";

const SERVICES = [
  {
    title: "Frontend Engineering",
    description:
      "Pixel-perfect, cinematic interfaces using React, Next.js, Tailwind CSS, and Framer Motion.",
    icon: Layout,
  },
  {
    title: "Backend Architecture",
    description:
      "Secure, scalable APIs and systems built with Django, Node.js, and production-grade databases.",
    icon: Server,
  },
  {
    title: "Database & System Design",
    description:
      "Efficient data models, migrations, indexing strategies, and performance-optimized schemas.",
    icon: Database,
  },
  {
    title: "DevOps & Deployment",
    description:
      "Production-ready deployments using Docker, cloud platforms, CI/CD, and monitoring setups.",
    icon: Workflow,
  },
  {
    title: "Security & Compliance",
    description:
      "Role-based access control, data protection, audit logs, and compliance-first system design.",
    icon: ShieldCheck,
  },
  {
    title: "SEO & Growth Engineering",
    description:
      "Technical SEO strategies that rank fast, scale organically, and drive real business traffic.",
    icon: TrendingUp,
  },
];

export default function WhatIDo() {
  return (
    <section
      className="relative py-24 px-6 md:px-20 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 overflow-hidden" >
      {/* subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 dark:bg-blue-500/10 blur-3xl"/>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
            What I Do
          </h2>
          <p
            className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            As the founder of{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              MBD®
            </span>
            , I design, build, and scale digital systems end-to-end.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)]">
              {/* hover glow */}
              <div className=" absolute inset-0 rounded-3xl bg-blue-500/0 group-hover:bg-blue-500/10  blur-xl transition pointer-events-none" />

              {/* icon */}
              <div
                className=" relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 ">
                <service.icon size={22} />
              </div>

              {/* content */}
              <div className="relative z-10">
                <h3
                  className="text-xl font-bold mb-3 text-slate-900 dark:text-white ">
                  {service.title}
                </h3>
                <p
                  className=" leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
