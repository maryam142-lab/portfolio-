import { useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

function Navbar({ navItems, isDarkMode, onToggleDarkMode }) {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-violet/20 bg-white/70 backdrop-blur-md transition-colors dark:border-dark-accent/20 dark:bg-dark-bg/70">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="text-lg font-bold tracking-wide text-ink dark:text-dark-lavender"
        >
          Maryam
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-muted transition hover:text-violet dark:text-dark-muted dark:hover:text-dark-accent"
            >
              {item.label}
            </button>
          ))}
          <a
            href="/maryam-javed-resume.pdf"
            download
            className="rounded-lg border border-violet/30 px-3 py-2 text-sm font-medium text-violet transition hover:bg-violet hover:text-white dark:border-dark-accent/30 dark:text-dark-lavender dark:hover:bg-dark-accent dark:hover:text-dark-bg"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="rounded-lg border border-violet/30 px-3 py-2 text-violet transition hover:bg-violet hover:text-white dark:border-dark-accent/30 dark:text-dark-lavender dark:hover:bg-dark-accent dark:hover:text-dark-bg"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/maryam-javed-resume.pdf"
            download
            className="rounded-lg border border-violet/30 p-2 text-violet transition hover:bg-violet hover:text-white dark:border-dark-accent/30 dark:text-dark-lavender dark:hover:bg-dark-accent dark:hover:text-dark-bg"
            aria-label="Download resume"
          >
            CV
          </a>
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="rounded-lg border border-violet/30 p-2 text-violet transition hover:bg-violet hover:text-white dark:border-dark-accent/30 dark:text-dark-lavender dark:hover:bg-dark-accent dark:hover:text-dark-bg"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun size={15} /> : <FaMoon size={15} />}
          </button>
          <button
            type="button"
            className="text-violet dark:text-dark-lavender"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-violet/20 bg-white/90 px-4 py-3 md:hidden dark:border-dark-accent/20 dark:bg-dark-bg/95">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-md px-3 py-2 text-left text-sm font-medium text-muted transition hover:bg-lavender hover:text-violet dark:text-dark-muted dark:hover:bg-dark-card dark:hover:text-dark-accent"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

