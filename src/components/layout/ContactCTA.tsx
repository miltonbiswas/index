"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  Calendar,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-white dark:bg-slate-950 overflow-hidden">
      {/* ---------- BACKGROUND ABSTRACT ---------- */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* ---------- AVAILABILITY BADGE ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-6 rounded-full border border-emerald-300/40 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for new projects
        </motion.div>

        {/* ---------- HEADING ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Let’s Build Something That Actually Works.
        </motion.h2>

        {/* ---------- DESCRIPTION ---------- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Whether it’s an ERP, internal dashboard, or scalable web platform —
          I focus on clarity, reliability, and long-term maintainability.
        </motion.p>

        {/* ---------- SERVICES QUICK LIST ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 grid sm:grid-cols-3 gap-4 text-sm"
        >
          {[
            "ERP & Business Systems",
            "Dashboards & Analytics",
            "Scalable Web Platforms",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 px-4 py-2 text-slate-700 dark:text-slate-300" >
              <CheckCircle2
                size={14}
                className="text-blue-600 dark:text-blue-400"
              />
              {item}
            </div>
          ))}
        </motion.div>

        {/* ---------- PRIMARY + SECONDARY CTA ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {/* EMAIL */}
          <a href="mailto:miltonbiswasdev@gmail.com" className="group inline-flex items-center gap-3 rounded-full bg-slate-900 dark:bg-white px-10 py-4 text-white dark:text-slate-900 font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            <Mail size={20} />
            Email Me
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition"
            />
          </a>

          {/* WHATSAPP */}
          <a href="https://wa.me/916377603244" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60  px-6 py-4  font-semibold text-slate-700 dark:text-slate-300  hover:border-emerald-500 hover:text-emerald-600 transition" >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          {/* CALENDLY */}
          <a
            href="https://calendly.com/"
            target="_blank"
            className="inline-flex items-center gap-2  rounded-full  border border-slate-300 dark:border-slate-700  bg-white dark:bg-slate-900/60 px-6 py-4  font-semibold text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 transition" >
            <Calendar size={18} />
            Schedule Call
          </a>
        </motion.div>

        {/* ---------- LOCATION & TIMEZONE ---------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            Rajasthan, India
          </span>

          <span className="flex items-center gap-1">
            <Clock size={14} />
            IST (UTC +5:30)
          </span>

          <span>Usually replies within 24 hours</span>
        </motion.div>
      </div>
    </section>
  );
}
