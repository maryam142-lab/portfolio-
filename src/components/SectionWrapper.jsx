import { motion } from "framer-motion";

function SectionWrapper({ id, title, subtitle, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`section-card ${className}`.trim()}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {(title || subtitle) && (
        <header className="mb-6">
          {title && <h2 className="text-2xl font-bold text-ink dark:text-dark-lavender sm:text-3xl">{title}</h2>}
          {subtitle && (
            <p className="mt-2 max-w-2xl text-sm text-muted dark:text-dark-muted">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </motion.section>
  );
}

export default SectionWrapper;

