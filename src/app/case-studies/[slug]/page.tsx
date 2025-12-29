import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = CASE_STUDIES.find((c) => c.slug === params.slug);
  if (!study) return notFound();

  return (
    <main className="bg-slate-950 text-white">
      {/* HERO */}
      <section className="py-24 px-6 md:px-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-400 uppercase text-xs tracking-widest mb-3">
            Case Study
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            {study.title}
          </h1>
          <p className="text-slate-400 text-lg mb-6">
            {study.subtitle}
          </p>

          <div className="flex flex-wrap gap-2">
            {study.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full border border-slate-700 text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-16">

          <Block title="Business Context">
            {study.context}
          </Block>

          <Block title="Problem Statement">
            {study.problem}
          </Block>

          <Block title="Solution Architecture">
            {study.solution}
          </Block>

          <Block title="Key Features">
            <ul className="list-disc list-inside space-y-2">
              {study.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Block>

          <Block title="Impact & Results">
            <ul className="space-y-2">
              {study.results.map((r) => (
                <li key={r}>✅ {r}</li>
              ))}
            </ul>
          </Block>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want a similar solution?
          </h2>
          <p className="text-slate-400 mb-8">
            Let’s design a system that actually solves business problems.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition"
          >
            Start a Project
          </a>
        </div>
      </section>
    </main>
  );
}

/* ---------- Helper ---------- */

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <div className="text-slate-400 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
