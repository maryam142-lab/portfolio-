import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { featuredProjects, otherGithubProjects } from "../data/portfolioData";

function Projects({ id }) {
  return (
    <SectionWrapper
      id={id}
      title="Projects"
      subtitle="Featured work demonstrating full-stack architecture, secure authentication, and scalable design patterns."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-soft-border bg-white p-5 dark:border-dark-accent/20 dark:bg-dark-card/80">
        <h3 className="text-lg font-bold text-ink dark:text-[#E5D9FF]">
          Additional Projects (Code Repository)
        </h3>
        <p className="mt-2 text-sm text-muted dark:text-dark-muted">
          These projects focus on backend logic, system architecture, and structured data handling.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {otherGithubProjects.map((project) => (
            <a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-soft-border bg-muted-lavender px-4 py-3 text-sm font-medium text-ink transition hover:-translate-y-1 hover:border-violet dark:border-dark-accent/20 dark:bg-[#2a1f4a] dark:text-dark-lavender"
            >
              {project.name}
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Projects;

