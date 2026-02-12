import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

function Footer() {
  return (
    <motion.footer
      className="mt-16 border-t border-lilac/70 bg-lavender/70 py-8 transition-colors dark:border-dark-accent/20 dark:bg-dark-bg/80"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 text-center sm:px-6 md:grid-cols-3 md:text-left lg:px-8">
        <div>
          <h3 className="text-lg font-bold text-ink dark:text-[#E5D9FF]">Maryam</h3>
          <p className="text-sm text-body dark:text-dark-lavender">MERN Stack Developer</p>
        </div>

        <div className="flex justify-center gap-6 md:justify-center">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-body transition hover:text-violet dark:text-dark-lavender dark:hover:text-dark-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-4 md:justify-end">
          <a
            href="https://github.com/maryam142-lab"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-body transition hover:scale-110 hover:text-violet dark:text-dark-lavender dark:hover:text-dark-accent"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/marium-javed-316203387"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-body transition hover:scale-110 hover:text-violet dark:text-dark-lavender dark:hover:text-dark-accent"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:marium142005@gmail.com"
            aria-label="Email"
            className="text-body transition hover:scale-110 hover:text-violet dark:text-dark-lavender dark:hover:text-dark-accent"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;

