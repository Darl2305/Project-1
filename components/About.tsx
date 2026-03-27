"use client";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-16">
          Sobre mí
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-[var(--color-accent)] leading-relaxed">
            Estudiante de Ingeniería de Sistemas con experiencia en análisis de datos, visualización e implementación de modelos de machine learning. Domino SQL, Python y Power BI, y he aplicado esas herramientas en proyectos reales de predicción. Busco sumar valor a organizaciones que toman decisiones basadas en datos.
            </p>
            <div className="mt-10 p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                Formación y Educación
              </h3>
              <p className="text-[var(--text-secondary)] mb-2 leading-relaxed">
                Ingeniería de Sistemas de Información — Universidad Peruana de Ciencias Aplicadas (UPC)
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Formación complementaria — DMC PERU: Machine Learning, Power BI, SQL for BI
              </p>
            </div>

            <a
              href="#contacts"
              className="inline-block mt-8 px-6 py-3 border border-[var(--text-primary)] text-[var(--text-primary)] font-medium rounded-lg hover:bg-black/5 transition-colors"
            >
              CONOCE MÁS SOBRE MÍ
            </a>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Habilidades técnicas
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span className="text-[var(--text-primary)]">Python para análisis y modelado</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span className="text-[var(--text-primary)]">SQL / SQL Server para transformar y consultar datos</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span className="text-[var(--text-primary)]">Power BI para tableros e insights accionables</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span className="text-[var(--text-primary)]">Machine learning para evaluación y soporte a decisiones</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span className="text-[var(--text-primary)]">Apps en Streamlit para compartir resultados con interesados</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                Habilidades blandas
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span className="text-[var(--text-primary)]">Pensamiento crítico para validar supuestos</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span className="text-[var(--text-primary)]">Aprendizaje rápido para dominar herramientas y dominios</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span className="text-[var(--text-primary)]">Comunicación efectiva de ideas complejas</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span className="text-[var(--text-primary)]">Alfabetización en IA para un uso responsable</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span className="text-[var(--text-primary)]">Adaptabilidad ante condiciones cambiantes del proyecto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
