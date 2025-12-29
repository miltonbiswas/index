"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950">
      {/* MASSIVE BACKGROUND WORD */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="select-none text-[18vw] font-black tracking-tight text-slate-100 dark:text-slate-900/60">
          MBD
        </span>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-40">
        <div className="flex flex-col gap-16">

          {/* STATEMENT */}
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.05]">
              I don’t build websites.
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                I engineer systems.
              </span>
            </h2>

            <p className="mt-8 text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
              From healthcare workflows to enterprise dashboards —  
              I design digital systems with the same precision
              that pharmacy demands: accuracy, reliability, and zero tolerance
              for failure.
            </p>
          </div>

          {/* CTA STRIP */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 border-t border-slate-200 dark:border-slate-800 pt-12">

            {/* LEFT */}
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                Available for new projects
              </span>

              <a
                href="mailto:miltonbiswasdev@gmail.com"
                className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Let’s talk
                <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <span className="text-sm text-slate-500 dark:text-slate-400">
                India (IST) · GMT +5:30
              </span>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-6 text-slate-500 dark:text-slate-400">
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-slate-900 dark:hover:text-white transition"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="hover:text-slate-900 dark:hover:text-white transition"
              >
                <Github size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="hover:text-slate-900 dark:hover:text-white transition"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>

          {/* MICRO SIGNATURE */}
          <div className="pt-14 border-t border-slate-200 dark:border-slate-800">
  {/* TOP LINE */}
  <div
    className="
      flex flex-col md:flex-row
      items-center justify-between gap-6
      text-sm
      text-slate-600 dark:text-slate-400
      text-center md:text-left
    "
  >
    <span>
      © {new Date().getFullYear()}{" "}
      <strong className="font-semibold text-slate-800 dark:text-slate-200">
        Milton Biswas (MBD®)
      </strong>{" "}
      &amp;{" "}
      <strong className="font-semibold text-slate-800 dark:text-slate-200">
        Shri Ram Medical &amp; General Store
      </strong>
      . All rights reserved.
    </span>

    <span className="font-medium">
      Healthcare professional. Full-stack engineer. Responsible systems.
    </span>
  </div>

  {/* DISCLAIMER */}
  <div
    className="
      mt-6 max-w-5xl mx-auto
      text-sm leading-relaxed
      text-slate-500 dark:text-slate-400
      text-center
    "
  >
    Content on this website is for informational purposes only and does not
    constitute medical advice. No part of this website may be reproduced,
    distributed, or transmitted in any form without prior written permission.
    This is a healthcare professional–led technology practice.
  </div>

  {/* ATTRIBUTION */}
  <div
    className="
      mt-6
      text-sm
      text-slate-500 dark:text-slate-400
      text-center
    "
  >
    Designed with ❤️ by{" "}
    <a
      href="https://instagram.com/miltonbiswasx"
      target="_blank"
      rel="noopener noreferrer"
      className="
        font-semibold
        text-blue-600 dark:text-blue-400
        hover:underline
      "
    >
      Milton Biswas
    </a>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
