"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[78vh] relative overflow-hidden flex items-center pt-20 pb-10 px-6">
      {/* Background accents to match the visual style */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at 20% 30%, rgba(34,197,94,0.18), transparent 60%), radial-gradient(520px circle at 80% 20%, rgba(34,197,94,0.10), transparent 55%), linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.35))",
        }}
      />
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-center text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-accent)] leading-tight mb-3 tracking-wider font-mono"
            style={{
              textShadow:
                "0 0 6px rgba(34,197,94,0.65), 0 0 18px rgba(34,197,94,0.35), 0 0 40px rgba(34,197,94,0.18)",
            }}
          >
            DAVID ADRIAN ROCA LIMACHE
          </h1>

          <p className="text-[11px] md:text-xs text-[var(--text-secondary)] uppercase tracking-[0.2em] mb-4">
            INGENIERIA DE SISTEMAS • ANALISTA DE DATOS
          </p>

          <a
            href="#contacts"
            className="btn-contact inline-flex items-center gap-2 px-5 py-2 text-sm text-white font-medium rounded-lg transition-opacity hover:opacity-90"
          >
            Contáctame
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--color-accent)]/60 bg-[var(--bg-secondary)] shadow-[0_0_0_1px_rgba(34,197,94,0.35),0_20px_60px_rgba(0,0,0,0.45)]">
            <Image
              src="/me.png"
              alt="David Adrian Roca Limache"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 320px"
              priority
            />
          </div>
        </div>
      </div>

      {/* Skill chips (posición para evitar mucho espacio vacío) */}
      <div className="hidden md:flex absolute bottom-16 left-1/2 -translate-x-1/2 gap-2 flex-wrap justify-center opacity-60 pointer-events-none">
        {["Python", "SQL Server", "Power BI", "Machine Learning", "Streamlit"].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[11px] tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
