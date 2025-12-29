"use client";

import { motion } from "framer-motion";
import {
  School,
  Trophy,
  Briefcase,
  Stethoscope,
  Globe,
  Building2,
  User,
} from "lucide-react";

/* ==================== DATA ==================== */

const EXPERIENCE = [
  {
    id: 1,
    role: "Owner & Pharmacist",
    company: "Shri Ram Medical & General Store",
    date: "2025 – Present",
    type: "Business",
    current: true,
    icon: <Stethoscope size={18} />,
    desc:
      "Managing operations for a 24/7 retail and wholesale pharmacy business while integrating digital systems for efficiency.",
    achievements:
      "Achieved a 0% error rate in inventory dispensing through digital tracking.",
    tech: ["Medical ERP", "Inventory", "Operations"],
  },
  {
    id: 2,
    role: "Full Stack WordPress Developer",
    company: "India Dream Vacations Tours",
    date: "2024 – 2025",
    type: "Contract",
    icon: <Globe size={18} />,
    desc:
      "Built and launched a high-performance WordPress platform with custom themes and plugins.",
    achievements:
      "Boosted organic traffic by 150% and reduced booking drop-offs.",
    tech: ["WordPress", "PHP", "MySQL", "SEO"],
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "BatchBits Technologies Pvt Ltd",
    date: "2017 – 2021",
    type: "Full Time",
    icon: <Building2 size={18} />,
    desc:
      "Worked on production web applications using HTML, CSS, JavaScript, and PHP.",
    achievements:
      "Reduced average page load time by 40% across client projects.",
    tech: ["HTML", "CSS", "JavaScript", "CodeIgniter"],
  },
  {
    id: 4,
    role: "Freelance Web Developer",
    company: "Self Employed",
    date: "2013 – 2017",
    type: "Freelance",
    icon: <User size={18} />,
    desc:
      "Delivered custom websites for clients across multiple industries.",
    achievements:
      "Completed 15+ projects with 98% client satisfaction.",
    tech: ["HTML", "CSS", "jQuery", "Laravel"],
  },
];

/* ==================== EDUCATION ITEM ==================== */

function EducationItem({
  year,
  title,
  org,
  children,
  current,
  delay = 0,
}: {
  year: string;
  title: string;
  org: string;
  children?: React.ReactNode;
  current?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative pl-12 group"
    >
      {/* Vertical line */}
      <span className="absolute left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

      {/* DOT (NEW DESIGN) */}
      <span
        className={`
          absolute left-1.5 top-2
          transition-all duration-300
          ${
            current
              ? `
                h-6 w-3 rounded-full
                bg-blue-600
                shadow-[0_0_0_6px_rgba(37,99,235,0.15)]
                animate-pulse
              `
              : `
                h-3 w-3 rounded-full
                border-2 border-slate-300 dark:border-slate-600
                bg-white dark:bg-slate-950
                group-hover:border-blue-500
              `
          }
        `}
      />

      {/* CONTENT */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xs font-semibold text-slate-500">
            {year}
          </span>

          {current && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold">
              Current
            </span>
          )}
        </div>

        <h4 className="font-semibold text-slate-900 dark:text-white">
          {title}
        </h4>

        <p className="text-sm text-slate-600 dark:text-slate-400">
          {org}
        </p>

        {children}
      </div>
    </motion.div>
  );
}

/* ==================== CAREER CARD ==================== */

function CareerCard({ job, index }: { job: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`
        rounded-2xl border p-6 transition
        hover:-translate-y-1 hover:shadow-lg
        ${
          job.current
            ? "border-blue-500/40 bg-blue-50 dark:bg-blue-500/10"
            : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60"
        }
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">
            {job.role}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {job.company}
          </p>
        </div>

        <div
          className={`
            p-2 rounded-lg
            ${
              job.current
                ? "bg-blue-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            }
          `}
        >
          {job.icon}
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold">
          {job.date}
        </span>
        <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">
          {job.type}
        </span>
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
        {job.desc}
      </p>

      <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-3 mb-4">
        <p className="text-xs font-bold text-emerald-600 mb-1">KEY WIN</p>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          {job.achievements}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {job.tech.map((t: string) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ==================== MAIN SECTION ==================== */

export default function CareerTimeline() {
  return (
    <section className="py-32 px-6 md:px-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* EDUCATION */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <School size={22} className="text-blue-600" />
            Academic Background
          </h3>

          <div className="space-y-12">
            <EducationItem
              year="2024 – Present"
              title="M.Pharm in Pharmaceutics"
              org="Madhav University, Pindwara"
              current
              delay={0}
            />

            <EducationItem
              year="2020 – 2024"
              title="Bachelor of Pharmacy (B.Pharm)"
              org="Madhav University, Pindwara"
              delay={0.1}
            >
              <div className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>
                  <strong>Special Interest:</strong> Medicinal Chemistry, Pharmacology
                </p>
                <p>
                  <strong>Project:</strong> Marketing Strategy of Pharma Industry
                </p>
                <p className="flex items-center gap-1">
                  <Trophy size={12} className="text-yellow-500" />
                  Academic Excellence, Chess, Football
                </p>
              </div>
            </EducationItem>

            <EducationItem
              year="2018 – 2020"
              title="HSE in Biology (Major)"
              org="Adarsh Govt. Sen. Sec. School, Reodar"
              delay={0.2}
            />

            <EducationItem
              year="2015 – 2017"
              title="HSE in Commerce"
              org="Adarsh Govt. Sen. Sec. School, Reodar"
              delay={0.3}
            />
          </div>
        </div>

        {/* CAREER */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <Briefcase size={22} className="text-blue-600" />
            Professional Career
          </h3>

          <div className="space-y-6">
            {EXPERIENCE.map((job, i) => (
              <CareerCard key={job.id} job={job} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
