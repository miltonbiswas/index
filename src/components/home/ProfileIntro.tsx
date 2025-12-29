"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Terminal,
  ScrollText,
  Code,
  Braces,
  Binary,
  Code2,
  Mountain,
  Palette,
  Paintbrush,
  Layers,
  Wind,
  Server,
  Database,
  Globe,
  DatabaseZap,
  Cloud,
  Rocket,
  BookOpen,
  GitBranch,
  BarChart3,
  Github,
  Linkedin,
  Twitter,
  Download,
  Ghost,
  Instagram,
  MessageCircle,
  Send,
} from "lucide-react";

/* -------------------- Small reusable components -------------------- */

function TechBadge({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <span className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 backdrop-blur-md">
      {icon}
      {label}
    </span>
  );
}

function SocialLink({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className=" text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
      {icon}
    </a>
  );
}

/* -------------------- Main section -------------------- */

export default function ProfileIntro() {
  return (
    <section className=" relative py-28 px-6 md:px-20 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* ================= LEFT — PHOTO ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative"
          >
            {/* Abstract background */}
            <div className="absolute -inset-6 z-0">
              {/* Gradient Ring */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-transparent blur-2xl" />

              {/* Soft Blob */}
              <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400/20 dark:bg-blue-500/20 rounded-full blur-3xl" />

              {/* Subtle Grid */}
              <div className=" absolute inset-0 rounded-[2.5rem] bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px), linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px), linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
            </div>

            {/* Image Card */}
            <div className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
              <Image
                src="/profile.jpg"
                alt="Milton Biswas"
                fill
                className="object-cover hover:scale-105 transition duration-700"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />

              {/* Mission Card */}
              <div className=" absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur border border-slate-200 dark:border-slate-700 p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Terminal size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">
                      Current working at
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      Shri Ram Medical
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT — INFO ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-7 flex flex-col justify-center"
          >
            {/* Availability */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
              <span className=" text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Available for Hire
              </span>
            </div>

            <h2 className=" text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">
              Hi, I’m Milton.
              <br />
              <span className="text-slate-500 dark:text-slate-400">
                The Full Stack Architect.
              </span>
            </h2>

            {/* Pharmacist Badge */}
            <div className=" inline-flex flex-wrap items-center gap-3 mb-6 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-lg">
              <div
                className="p-1 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                <ScrollText size={16} />
              </div>
              <div>
                <span
                  className=" block text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                  Registered Pharmacist
                </span>
                <span className=" block text-xs font-medium text-emerald-600 dark:text-emerald-400 ">
                  Verified by Rajasthan Pharmacy Council
                </span>
              </div>
            </div>

            <p
              className="text-lg mb-8 leading-relaxed max-w-xl text-slate-600 dark:text-slate-400">
              I don’t just write code; I orchestrate systems. Specializing in{" "}
              <strong className="text-slate-900 dark:text-white">
                Next.js
              </strong>{" "}
              and{" "}
              <strong className="text-slate-900 dark:text-white">Django</strong>
              , I help businesses scale from simple ideas to complex,
              revenue-generating ecosystems.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              <TechBadge icon={<Code size={14} />} label="JavaScript" />
              <TechBadge icon={<Braces size={14} />} label="TypeScript" />
              <TechBadge icon={<Binary size={14} />} label="Python" />
              <TechBadge icon={<Code2 size={14} />} label="PHP" />

              <TechBadge icon={<Code size={14} />} label="React" />
              <TechBadge icon={<Terminal size={14} />} label="Next.js 14" />
              <TechBadge icon={<Mountain size={14} />} label="Vue.js" />
              <TechBadge icon={<Palette size={14} />} label="HTML5" />
              <TechBadge icon={<Paintbrush size={14} />} label="CSS3 (SASS)" />
              <TechBadge icon={<Layers size={14} />} label="Bootstrap" />
              <TechBadge icon={<Wind size={14} />} label="Tailwind" />

              <TechBadge icon={<Server size={14} />} label="Node.js" />
              <TechBadge icon={<Database size={14} />} label="Django" />

              <TechBadge icon={<Database size={14} />} label="MongoDB" />
              <TechBadge icon={<Database size={14} />} label="MySQL" />
              <TechBadge icon={<Globe size={14} />} label="PostgreSQL" />
              <TechBadge icon={<DatabaseZap size={14} />} label="Firebase" />

              <TechBadge icon={<Cloud size={14} />} label="GCP" />
              <TechBadge icon={<Cloud size={14} />} label="AWS" />
              <TechBadge icon={<Rocket size={14} />} label="Vercel" />

              <TechBadge icon={<BookOpen size={14} />} label="WordPress" />
              <TechBadge icon={<GitBranch size={14} />} label="Git/GitHub" />
              <TechBadge icon={<BarChart3 size={14} />} label="Power BI" />
            </div>

            {/* Social + CV */}
            <div className="flex flex-wrap items-center gap-6">
              <SocialLink
                icon={<Github size={20} />}
                href="https://github.com/miltonbiswas/"
                />

              <SocialLink
                icon={<Linkedin size={20} />}
                href="https://www.linkedin.com/in/xmiltonbiswasx/"
              />

              <SocialLink
                icon={<Twitter size={20} />}
                href="https://twitter.com/miltonbiswascod"
              />

              <SocialLink
                icon={<Instagram size={20} />}
                href="https://instagram.com/miltonbiswasx"
              />

              <SocialLink
                icon={<MessageCircle size={20} />}
                href="https://wa.me/916377603244"
              />

              <SocialLink
                icon={<Send size={20} />}
                href="https://t.me/+916377603244"
              />

              <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 font-bold text-blue-600 dark:text-blue-400 hover:underline underline-offset-4 ">
                <Download size={18} />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
