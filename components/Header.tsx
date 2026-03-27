"use client";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const navItems = [
    { href: "#about", label: "Sobre mí" },
    { href: "#work", label: "Proyectos" },
    { href: "#contacts", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-[var(--color-accent)] font-bold text-xl">
          DARL
        </a>
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[var(--text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
