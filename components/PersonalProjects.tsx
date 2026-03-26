"use client";

export default function PersonalProjects() {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-16">
          Proyectos Personales
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6 min-h-[200px] flex flex-col items-center justify-center text-center"
            >
              <p className="text-[var(--text-secondary)] text-sm">
                Próximamente
              </p>
              <p className="text-[var(--text-primary)] mt-2 font-medium">
                Proyecto {i}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
