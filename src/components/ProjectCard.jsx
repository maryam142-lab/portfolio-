import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-soft-border bg-white shadow-soft transition-shadow hover:shadow-softHover dark:border-dark-accent/20 dark:bg-dark-card/85"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-violet/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100 dark:from-dark-accent/45" />
      </div>
      <div className="flex h-full flex-col p-4">
        <h3 className="text-lg font-bold text-ink dark:text-[#E5D9FF]">{project.title}</h3>
        <p className="mt-2 text-sm text-muted dark:text-dark-muted">{project.description}</p>

        {project.features?.length > 0 && (
          <div className="mt-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet dark:text-dark-accent">
              Key Features
            </p>
            <ul className="mt-2 space-y-1 text-xs text-body dark:text-dark-lavender">
              {project.features.map((feature) => (
                <li key={`${project.title}-${feature}`}>- {feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.metrics?.length > 0 && (
          <div className="mt-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet dark:text-dark-accent">
              Project Metrics
            </p>
            <ul className="mt-2 space-y-1 text-xs text-body dark:text-dark-lavender">
              {project.metrics.map((metric) => (
                <li key={`${project.title}-${metric}`}>- {metric}</li>
              ))}
            </ul>
          </div>
        )}

        {project.architecture && (
          <div className="mt-3 rounded-lg border border-soft-border bg-lightPurple/65 p-3 text-xs text-body dark:border-dark-accent/25 dark:bg-[#2a1f4a] dark:text-dark-lavender">
            <p className="font-semibold text-violet dark:text-dark-accent">Architecture</p>
            <p className="mt-1">Frontend: {project.architecture.frontend}</p>
            <p>Backend: {project.architecture.backend}</p>
            <p>Database: {project.architecture.database}</p>
            <p>Authentication: {project.architecture.authentication}</p>
          </div>
        )}

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={`${project.title}-${item}`}
              className="rounded-full bg-muted-lavender px-3 py-1 text-xs font-medium text-ink dark:bg-[#2a1f4a] dark:text-dark-accent"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-2 pt-2">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet to-lilac px-3 py-2 text-xs font-semibold text-ink transition duration-300 hover:-translate-y-1 hover:from-lilac hover:to-violet dark:text-white dark:from-dark-accent dark:to-[#A855F7]"
          >
            <FaExternalLinkAlt /> View Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-violet bg-lightPurple px-3 py-2 text-xs font-semibold text-ink transition duration-300 hover:-translate-y-1 hover:bg-violet/45 dark:border-dark-accent dark:bg-transparent dark:text-dark-lavender dark:hover:bg-dark-accent dark:hover:text-dark-bg"
          >
            <FaGithub /> View Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;

