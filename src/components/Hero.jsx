import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import maryamImage from "../assets/maryam.jpg";

const roles = ["I am a MERN Stack Developer.", "I design clean user interfaces.", "I build scalable full-stack apps."];

function Hero({ id }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = deleting ? 45 : 85;

    const timer = setTimeout(() => {
      setTypedText((prev) => {
        if (!deleting) {
          const next = currentRole.slice(0, prev.length + 1);
          if (next === currentRole) {
            setTimeout(() => setDeleting(true), 1000);
          }
          return next;
        }

        const next = currentRole.slice(0, prev.length - 1);
        if (!next) {
          setDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
        return next;
      });
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, deleting, roleIndex]);

  const navigateTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id={id} className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-16 -top-12 h-40 w-40 rounded-full bg-lilac/45 blur-3xl dark:bg-dark-accent/25" />
      <div className="pointer-events-none absolute -bottom-16 right-4 h-52 w-52 rounded-full bg-violet/20 blur-3xl dark:bg-[#A855F7]/30" />
      <motion.span
        className="pointer-events-none absolute right-[18%] top-[14%] h-2.5 w-2.5 rounded-full bg-lilac/90"
        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="pointer-events-none absolute right-[12%] top-[35%] h-2 w-2 rounded-full bg-violet/80"
        animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.span
        className="pointer-events-none absolute right-[26%] top-[52%] h-1.5 w-1.5 rounded-full bg-lilac"
        animate={{ y: [0, -12, 0], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet dark:text-dark-accent">Portfolio</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-ink dark:text-[#E5D9FF] sm:text-5xl">
            Hi, I&apos;m Maryam
          </h1>
          <p className="mt-3 text-xl font-semibold text-violet dark:text-dark-accent">
            I Build Scalable MERN Stack Applications with Clean Architecture
          </p>

          <p className="mt-3 h-7 text-sm font-medium text-muted dark:text-dark-muted sm:text-base">
            {typedText}
            <span className="animate-pulse text-violet dark:text-dark-accent">|</span>
          </p>

          <p className="mt-5 max-w-xl text-sm leading-6 text-body dark:text-dark-lavender sm:text-base">
            I specialize in building full-stack applications with clean architecture, secure
            authentication, and responsive user interfaces. My focus is writing maintainable code
            that delivers real-world impact.
          </p>
          <ul className="mt-4 space-y-1 text-sm text-muted dark:text-dark-muted">
            <li>- Built 5+ full-stack applications with production-ready patterns</li>
            <li>- Designed REST APIs with secure JWT authentication</li>
            <li>- Focused on scalable architecture and maintainable code quality</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigateTo("projects")}
              className="gradient-btn"
            >
              Explore My Work
            </button>
            <button
              type="button"
              onClick={() => navigateTo("contact")}
              className="outline-btn"
            >
              Let&apos;s Connect
            </button>
            <a href="/maryam-javed-resume.pdf" download className="outline-btn">
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex h-[26rem] w-full max-w-md items-center justify-center sm:h-[30rem]">
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-tr from-violet/45 to-lilac/55 blur-2xl dark:from-dark-accent/45 dark:to-[#A855F7]/45" />
          <motion.img
            src={maryamImage}
            alt="Maryam"
            className="relative z-10 h-72 w-full max-w-md rounded-3xl border border-violet/25 object-cover object-top shadow-soft dark:border-dark-accent/25 sm:h-96"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Hero;

