"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb } from "lucide-react";

export default function AboutFounder() {
  return (
    <section className="relative py-28 px-6 md:px-20 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
      {/* background accent */}
      <div className="absolute -top-32 right-0 h-96 w-96 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT: TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-widest text-xs font-bold text-blue-600 dark:text-blue-400">
              About the Founder
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              The Pharmacist Who Codes.
            </h2>

            <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-400">
              My journey is unconventional. I run a{" "}
              <span className="font-medium text-slate-900 dark:text-white">
                24×7 Medical &amp; General Store
              </span>{" "}
              in Reodar, Rajasthan, while simultaneously architecting
              enterprise-level software systems.
            </p>

            <p
              className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              This <strong className="text-slate-900 dark:text-white">dual life</strong>{" "}
              defines my work ethic. In pharmacy, a small error can impact a life.
              In software, I apply that same{" "}
              <span className="font-medium text-slate-900 dark:text-white">
                zero-tolerance for error
              </span>{" "}
              to system design, performance, and security.
            </p>

            {/* What I Solve */}
            <div
              className="mt-8 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 backdrop-blur-md">
              <h4
                className="flex items-center gap-2 mb-4 font-bold text-slate-900 dark:text-white">
                <Lightbulb className="text-yellow-500" size={18} />
                What I Actually Solve
              </h4>

              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1" size={16} />
                  Bridging complex business logic (ERP) with clean user interfaces.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1" size={16} />
                  Transforming manual, paper-based workflows into automated SaaS.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1" size={16} />
                  Fixing slow, un-optimized legacy systems and Core Web Vitals.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* ================= RIGHT: INFO CARD ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 backdrop-blur-md">
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                📍 MBD HQ, Reodar (RJ)
              </div>

              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Current Mission
              </h3>

              <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                Building reliable digital systems for healthcare, operations,
                and growing businesses — with the same discipline used in
                medicine.
              </p>
            </div>

            {/* Fun fact */}
            <div className="mt-6 rounded-xl p-4 text-sm border border-yellow-500/30 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300">
              ☕ <strong>Fun Fact:</strong> I’m a night owl. Most of my best code
              is written between <strong>11 PM and 3 AM</strong>, after the
              pharmacy closes.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
