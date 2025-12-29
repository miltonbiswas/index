"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, FileText } from "lucide-react";

/* ================= HEALTHCARE CREDENTIALS ================= */

const HEALTHCARE_CREDENTIALS = [
  {
    title: "Bachelor of Pharmacy (B.Pharm)",
    org: "Madhav University, Rajasthan",
    meta: "Graduation Degree",
    verified: true,
    pdf: "/digree.pdf",
  },
  {
    title: "Registered Pharmacist & Drug License",
    org: "Government of Rajasthan",
    meta: "DL No: 97949 (Rajasthan Pharmacy Council)",
    verified: true,
    pdf: "/lisence.pdf",
  },
];

/* ================= OTHER CERTIFICATIONS ================= */

const CERTIFICATIONS = [
  {
    title: "Google Analytics for Beginners",
    org: "Google Analytics Academy",
    date: "June, 2023",
  },
  {
    title: "Javascript Algorithms & Data Structures",
    org: "freeCodeCamp",
    date: "Nov, 2024",
  },
  {
    title: "SQL Certificate",
    org: "HackerRank",
    date: "27 Mar, 2025",
  },
  {
    title: "JavaScript Certificate",
    org: "HackerRank",
    date: "24 Mar, 2025",
  },
  {
    title: "Responsive Web Design",
    org: "freeCodeCamp",
    date: "Apr, 2022",
  },
  {
    title: "Python Fundamentals",
    org: "The Great Learning",
    date: "Apr, 2022",
  },
  {
    title: "UX / UI Design Fundamentals",
    org: "The Great Learning",
    date: "Apr, 2022",
  },
  {
    title: "Microsoft Power BI",
    org: "Office Masters",
    date: "Nov, 2024",
  },
  {
    title: "Pharmacy Hackathon",
    org: "Madhav University",
    date: "2023",
  },
];

/* ================= COMPONENT ================= */

export default function Certifications() {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-white dark:bg-slate-950 overflow-hidden">
      {/* ---------- BACKGROUND GLOWS ---------- */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
            Credentials & Certifications
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl">
            Verified healthcare qualifications and continuous professional learning
            across technology, analytics, and digital systems.
          </p>
        </motion.div>

        {/* ================= HEALTHCARE CREDENTIALS ================= */}
        <div className="mb-28">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-12 bg-blue-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
              Healthcare Credentials
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {HEALTHCARE_CREDENTIALS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="
                  relative rounded-3xl
                  border-2 border-blue-500/40
                  bg-gradient-to-br from-blue-50 to-white
                  dark:from-slate-900 dark:to-slate-950
                  p-8 shadow-xl overflow-hidden
                "
              >
                {/* VERIFIED WATERMARK */}
                <div className="
                  pointer-events-none absolute inset-0 flex items-center justify-center
                  text-6xl md:text-7xl font-black tracking-widest
                  text-blue-500/5 dark:text-blue-400/5
                ">
                  VERIFIED
                </div>

                {/* Verified Badge */}
                {item.verified && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600">
                    <ShieldCheck size={14} />
                    Verified Credential
                  </div>
                )}

                <div className="relative flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg">
                    <Award size={26} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-slate-700 dark:text-slate-300 font-medium">
                      {item.org}
                    </p>

                    <p className="mt-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {item.meta}
                    </p>

                    {/* PDF Verification */}
                    <a
                      href={item.pdf}
                      download
                      className="
                        mt-5 inline-flex items-center gap-2
                        text-sm font-semibold
                        text-blue-600 dark:text-blue-400
                        hover:underline
                      "
                    >
                      <FileText size={16} />
                      Download Verification PDF
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= OTHER CERTIFICATIONS ================= */}
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-12 bg-slate-300 dark:bg-slate-700" />
          <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
            Professional Certifications
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="
                rounded-2xl border border-slate-200 dark:border-slate-800
                bg-white dark:bg-slate-900/60
                p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg
                transition-all
              "
            >
              <h4 className="font-semibold text-slate-900 dark:text-white">
                {cert.title}
              </h4>

              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {cert.org}
              </p>

              <p className="mt-3 text-xs text-slate-500">
                {cert.date}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
