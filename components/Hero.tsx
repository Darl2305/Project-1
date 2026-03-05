import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight mb-6">
            Dreams are not what you see when you sleep. Dreams are what keep you awake.
          </h1>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-xl">
            In Data and Machine Learning, I turn complex information into actionable insights that drive real results.
          </p>
          <a
            href="#contacts"
            className="btn-contact inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-lg transition-opacity hover:opacity-90"
          >
            Contact me
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div className="flex flex-wrap gap-4 mt-8 text-sm text-[var(--text-secondary)]">
            {["Machine Learning", "Data Analysis", "Visualization", "Python", "SQL"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--color-accent)]/30 bg-[var(--bg-secondary)]">
            <Image
              src="/me.png"
              alt="David Roca"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 320px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
