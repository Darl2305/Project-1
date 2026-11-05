"use client";

// ---------------------------------------------------------------------------
// Proyecto 1: Detección de fraude bancario
//
// Cuando despliegues la app en Streamlit Community Cloud, pega aquí su
// dirección (termina en .streamlit.app). Mientras esté vacía, el botón
// "Ver app" no se muestra y la tarjeta solo enseña el enlace al código.
// ---------------------------------------------------------------------------
const FRAUD_APP_URL = "https://fraude-bancario-darl.streamlit.app";
const FRAUD_REPO_URL = "https://github.com/Darl2305/Bank-transaction-fraud";

// Dashboard publicado en Power BI (enlace público) y diagrama del modelo
// semántico (imagen en /public).
const FRAUD_DASHBOARD_URL =
  "https://app.powerbi.com/view?r=eyJrIjoiNDUzNzk2MjctMWQyMi00YWU5LWE1ZGEtYTY2OTBlMWNkYWVlIiwidCI6IjBlMGNiMDYwLTA5YWQtNDlmNS1hMDA1LTY4YjliNDlhYTFmNiIsImMiOjR9";
const FRAUD_MODEL_URL = "/modelo-semantico.png";

// Carpeta con los scripts de SQL Server (T-SQL) en el repo del proyecto.
const FRAUD_SQL_URL =
  "https://github.com/Darl2305/Bank-transaction-fraud/tree/main/sql";

const fraudProject = {
  title: "Detección de fraude bancario",
  description:
    "Modelo de machine learning que estima la probabilidad de fraude de cada transacción, entrenado con 1 millón de transacciones (2020-2024) siguiendo CRISP-DM. En la app se puede evaluar una transacción individual, subir un lote en CSV o consultar los datos con SQL. El dashboard de Power BI resume el fraude por año, comercio, hora y método de pago, y la base en SQL Server (modelo en estrella y consultas en T-SQL) respalda esas consultas.",
  result:
    "Revisando el 10 % de transacciones de mayor riesgo se captura el 27 % de los fraudes (ROC-AUC 0.73, medido en 2024 con datos que el modelo no vio).",
  note: "Dataset sintético de Kaggle.",
  tags: ["Python", "LightGBM", "Streamlit", "SQL Server", "T-SQL", "Power BI", "DAX", "CRISP-DM"],
};

const placeholders = [2, 3];

export default function PersonalProjects() {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-16">
          Proyectos Personales
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proyecto real */}
          <article className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6 min-h-[200px] flex flex-col text-left transition-colors hover:border-[var(--color-accent)]">
            <h3 className="text-[var(--text-primary)] text-lg font-semibold mb-3">
              {fraudProject.title}
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
              {fraudProject.description}
            </p>
            <p className="text-[var(--text-primary)] text-sm leading-relaxed mb-3">
              {fraudProject.result}
            </p>
            <p className="text-[var(--text-secondary)] text-xs mb-4">
              {fraudProject.note}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {fraudProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-md border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-3">
              {FRAUD_APP_URL && (
                <a
                  href={FRAUD_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-contact inline-flex items-center gap-2 px-4 py-2 text-sm text-white font-medium rounded-lg transition-opacity hover:opacity-90"
                >
                  Ver app
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              <a
                href={FRAUD_DASHBOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Dashboard Power BI
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href={FRAUD_MODEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Modelo semántico
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href={FRAUD_SQL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                SQL
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href={FRAUD_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Código
              </a>
            </div>
          </article>

          {/* Marcadores de posición para los siguientes proyectos */}
          {placeholders.map((i) => (
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
