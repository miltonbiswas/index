"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Database,
  Cloud,
  Layout,
  Globe,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-[95vh] flex flex-col justify-center px-6 md:px-20 overflow-hidden z-10 bg-white dark:bg-slate-950">


      {/* ================= BACKGROUND GLOWS ================= */}
      <div
        className="absolute top-[20%] right-[10%] w-[520px] h-[520px] bg-blue-400/20 dark:bg-blue-500/20 rounded-full blur-[130px] pointer-events-none" />
      <div
        className="absolute bottom-[10%] left-[8%] w-[420px] h-[420px] bg-indigo-400/20 dark:bg-indigo-500/20 rounded-full blur-[110px] pointer-events-none" />

      {/* ================= FLOATING BRAND STRIP ================= */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-24 right-10 hidden md:flex items-center gap-6 px-6 py-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl">
        <Image
          src="/mb.png"
          alt="Milton Biswas"
          width={140}
          height={50}
          className="opacity-90 hover:opacity-100 transition"
        />
        <span className="text-slate-400 font-semibold text-lg">×</span>
        <Image
          src="/srmgs.png"
          alt="Shri Ram Medical & General Store"
          width={170}
          height={50}
          className="opacity-90 hover:opacity-100 transition"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid md:grid-cols-2 gap-18 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-24 md:pt-28"
            >

            {/* ================= EYEBROW ================= */}
            <div className="pt-24 md:pt-28 mb-10">
              <div className="flex items-center gap-4">
                <span className="h-px w-14 bg-gradient-to-r from-blue-500 to-indigo-500" />
                <span className="tracking-widest uppercase text-xs font-semibold text-blue-600 dark:text-blue-400">
                  Built by a Pharmacist · Engineered for Real Care
                </span>
              </div>
            </div>

            {/* ================= HEADLINE ================= */}
            <h1
              className="text-[3.2rem] sm:text-5xl md:text-[6.2rem] font-black leading-[0.92] tracking-tight mb-10 text-slate-900 dark:text-white">
              A Healthcare Professional
              <br />
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-500 dark:via-indigo-500 dark:to-violet-500">
                Engineering Technology.
              </span>
            </h1>


            {/* Description */}
            <p
              className="text-xl leading-relaxed mb-8 max-w-lg text-slate-600 dark:text-slate-400">
              I am{" "}
              <strong className="text-slate-900 dark:text-white">
                Milton Biswas
              </strong>
              , a Full Stack Architect & Registered Pharmacist — building
              reliable digital systems with the same precision used in
              healthcare operations.
            </p>

            {/* ================= CTAs ================= */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Primary */}
              <Link
                href="mailto:miltonbiswasdev@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg hover:shadow-xl hover:-translate-y-1 transition">
                Start a Project
                <ArrowRight />
              </Link>

              {/* Highlighted Pharmacy CTA */}
              <a
                href="https://srmgs.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all">
                Visit the Pharmacy
                <ArrowRight size={18} />
              </a>
            </div>

            {/* ================= LIVE BADGE ================= */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-full px-5 py-2 bg-emerald-500/10 border border-emerald-500/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                24×7 Live Pharmacy • Real-Time Operations
              </span>
            </div>
          </motion.div>

          {/* ================= RIGHT VISUAL CORE ================= */}
          <div className="hidden md:flex justify-center items-center relative h-[520px]">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* Core */}
              <div className="w-32 h-32 rounded-3xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl border border-white/20">
                <Cpu size={64} className="text-white" />
              </div>

              {/* Orbit Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-90px] border border-blue-500/20 rounded-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-white dark:bg-slate-900 p-3 rounded-full shadow-lg">
                  <Database size={22} className="text-emerald-500" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-white dark:bg-slate-900 p-3 rounded-full shadow-lg">
                  <Cloud size={22} className="text-blue-500" />
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-170px] border border-indigo-500/20 rounded-full">
                <div className="absolute left-0 top-1/2 -translate-x-4 bg-white dark:bg-slate-900 p-3 rounded-full shadow-lg">
                  <Layout size={22} className="text-purple-500" />
                </div>
                <div className="absolute right-0 top-1/2 translate-x-4 bg-white dark:bg-slate-900 p-3 rounded-full shadow-lg">
                  <Globe size={22} className="text-orange-500" />
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
