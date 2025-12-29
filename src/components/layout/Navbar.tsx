"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
} from "lucide-react";
import ThemeToggle from "@/ui/ThemeToggle";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ⛔ Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2 hidden md:block">
        <nav
          className="flex items-center gap-8 rounded-full px-8 py-3 bg-white border border-slate-200 shadow-lg dark:bg-slate-900 dark:border-slate-800 ">
          {/* Brand */}
          <Link
            href="/"
            className="text-sm font-black tracking-tight text-slate-900 dark:text-white"
          >
            MBD<span className="text-blue-600">®</span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-slate-900 dark:hover:text-white transition"
              >
                {l.label}
              </Link>
            ))}

            <a
              href="https://srmgs.vercel.app/"
              target="_blank"
              className="font-semibold text-blue-600 hover:underline flex items-center gap-1"
            >
              Visit the Pharmacy
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-slate-200 dark:bg-slate-700" />

          {/* Socials */}
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <a href="https://www.linkedin.com/in/xmiltonbiswasx/" target="_blank">
              <Linkedin size={16} />
            </a>
            <a href="https://github.com/miltonbiswas/" target="_blank">
              <Github size={16} />
            </a>
            <a href="https://instagram.com/miltonbiswasx" target="_blank">
              <Instagram size={16} />
            </a>
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-slate-200 dark:bg-slate-700" />

          {/* Theme */}
          <ThemeToggle />
        </nav>
      </header>

      {/* ================= MOBILE NAV ================= */}
      <header className="fixed top-0 inset-x-0 z-50 md:hidden">
        <div className="
          flex items-center justify-between
          px-5 py-4
          bg-white
          border-b border-slate-200
          dark:bg-slate-950
          dark:border-slate-800
        ">
          {/* Brand */}
          <Link href="/" className="font-black text-slate-900 dark:text-white">
            MBD<span className="text-blue-600">®</span>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open Menu"
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* ================= MOBILE DRAWER ================= */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="
                absolute inset-x-0
                bg-white
                dark:bg-slate-950
                border-b border-slate-200
                dark:border-slate-800
                shadow-xl
              "
            >
              <div className="p-6 space-y-5">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Navigation
                  </span>
                  <button onClick={() => setMobileOpen(false)}>
                    <X />
                  </button>
                </div>

                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-lg font-medium text-slate-900 dark:text-white"
                  >
                    {l.label}
                  </Link>
                ))}

                <a
                  href="https://srmgs.vercel.app/"
                  target="_blank"
                  className="
                    inline-flex items-center gap-2
                    font-bold text-blue-600
                    text-lg
                  "
                >
                  Visit the Pharmacy
                  <ExternalLink size={18} />
                </a>

                <div className="pt-4 flex gap-4 text-slate-500 dark:text-slate-400">
                  <a href="https://www.linkedin.com/in/xmiltonbiswasx/"><Linkedin /></a>
                  <a href="https://github.com/miltonbiswas/"><Github /></a>
                  <a href="https://instagram.com/miltonbiswasx"><Instagram /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
