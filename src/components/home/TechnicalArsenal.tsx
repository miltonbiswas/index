"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Code,
  Terminal,
  Mountain,
  Braces,
  Wind,
  Palette,
  Server,
  Database,
  Code2,
  Binary,
  Globe,
  DatabaseZap,
  Cloud,
  Rocket,
  GitBranch,
  Layers,
  BookOpen,
  BarChart3,
} from "lucide-react";

/* ---------- Reusable UI ---------- */

function TechBadge({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <span
      className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-0.5 ">
      {icon}
      {label}
    </span>
  );
}

function TechCategory({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }} className=" rounded-3xl p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {children}
      </div>
    </motion.div>
  );
}

/* ---------- Main Section ---------- */

export default function TechnicalArsenal() {
  return (
    <section className="py-24 px-6 md:px-20 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">
            Technical Arsenal
          </h2>
          <p className=" max-w-2xl mx-auto text-slate-600 dark:text-slate-400 ">
            A detailed breakdown of my production-grade capabilities and
            proficiency.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend */}
          <TechCategory title="Frontend Engineering" icon={<Layout size={20} />}>
            <TechBadge icon={<Code size={14} />} label="React" />
            <TechBadge icon={<Terminal size={14} />} label="Next.js 14" />
            <TechBadge icon={<Mountain size={14} />} label="Vue.js" />
            <TechBadge icon={<Braces size={14} />} label="TypeScript" />
            <TechBadge icon={<Wind size={14} />} label="Tailwind CSS" />
            <TechBadge icon={<Palette size={14} />} label="HTML5 / SCSS" />
          </TechCategory>

          {/* Backend */}
          <TechCategory title="Backend & Core" icon={<Server size={20} />}>
            <TechBadge icon={<Server size={14} />} label="Node.js" />
            <TechBadge icon={<Database size={14} />} label="Django" />
            <TechBadge icon={<Code2 size={14} />} label="PHP" />
            <TechBadge icon={<Code size={14} />} label="JavaScript" />
            <TechBadge icon={<Binary size={14} />} label="Python" />
          </TechCategory>

          {/* Data */}
          <TechCategory title="Data Architecture" icon={<Database size={20} />}>
            <TechBadge icon={<Globe size={14} />} label="PostgreSQL" />
            <TechBadge icon={<Database size={14} />} label="MongoDB" />
            <TechBadge icon={<Database size={14} />} label="MySQL" />
            <TechBadge icon={<Database size={14} />} label="SQLite" />
            <TechBadge icon={<DatabaseZap size={14} />} label="Firebase" />
          </TechCategory>

          {/* DevOps */}
          <TechCategory
            title="DevOps, Cloud & Tools"
            icon={<Cloud size={20} />}
          >
            <TechBadge icon={<Cloud size={14} />} label="AWS" />
            <TechBadge icon={<Rocket size={14} />} label="Vercel" />
            <TechBadge icon={<GitBranch size={14} />} label="Git / GitHub" />
            <TechBadge icon={<Layers size={14} />} label="Docker" />
            <TechBadge icon={<BookOpen size={14} />} label="WordPress" />
            <TechBadge icon={<BarChart3 size={14} />} label="Power BI" />
          </TechCategory>
        </div>
      </div>
    </section>
  );
}
