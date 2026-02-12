import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { timelineData } from "../data/portfolioData";

function Timeline({ id }) {
  return (
    <SectionWrapper
      id={id}
      title="Experience Timeline"
      subtitle="Project milestones with architecture and implementation highlights."
      className="bg-lavender/65 dark:bg-dark-card/70"
    >
      <div className="relative space-y-4 before:absolute before:left-3 before:top-1 before:h-[calc(100%-8px)] before:w-0.5 before:bg-violet/40 dark:before:bg-dark-accent/45">
        {timelineData.map((item, index) => (
          <motion.article
            key={`${item.date}-${item.title}`}
            className="relative mb-10 pl-10"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <span className="absolute -left-1 top-1 h-8 w-8 rounded-full border-2 border-white bg-lilac dark:border-dark-card dark:bg-dark-accent" />
            <div className="rounded-xl border border-soft-border bg-white p-4 dark:border-dark-accent/20 dark:bg-dark-card/80">
              <p className="text-sm font-semibold text-violet">{item.date}</p>
              <h3 className="mt-1 text-xl font-semibold text-violet">{item.title}</h3>

              {item.points?.length > 0 && (
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-body dark:text-dark-lavender">
                  {item.points.map((point) => (
                    <li key={`${item.title}-${point}`}>{point}</li>
                  ))}
                </ul>
              )}

              {item.projects?.length > 0 && (
                <div className="mt-2 space-y-4">
                  {item.projects.map((project) => (
                    <div key={project.name}>
                      <h4 className="text-lg font-semibold text-violet">{project.name}</h4>
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-body dark:text-dark-lavender">
                        {project.points.map((point) => (
                          <li key={`${project.name}-${point}`}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Timeline;

