export default function About() {
  const skills = [
    "Build ML models that extract value from real-world data.",
    "Visualize data in clear, actionable ways.",
    "Collaborate with teams to define metrics and goals.",
    "Document processes and results for reproducibility.",
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] text-center mb-16">
          About me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-[var(--color-accent)] leading-relaxed">
              I have experience in data science, building solutions with Machine Learning
              and exploratory analysis. I focus on end-to-end projects: from exploration
              to model implementation in production.
            </p>
          </div>
          <div>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              In Data, it&apos;s essential to have a broad skill set: programming, statistics,
              visualization, and communication. I work to ensure every project meets the
              highest standards of quality.
            </p>
            <ul className="space-y-3 mb-6">
              {skills.map((skill) => (
                <li key={skill} className="flex gap-3 items-start">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span className="text-[var(--text-primary)]">{skill}</span>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-secondary)] mb-8">
              The work I deliver is reproducible, documented, and built to scale.
            </p>
            <a
              href="#contacts"
              className="inline-block px-6 py-3 border border-[var(--text-primary)] text-[var(--text-primary)] font-medium rounded-lg hover:bg-black/5 transition-colors"
            >
              LEARN MORE ABOUT ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
