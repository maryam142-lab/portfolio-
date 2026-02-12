import SectionWrapper from "./SectionWrapper";

const differentiators = [
  {
    title: "Clean Code Focused",
    description: "I prioritize readable, maintainable code structures that teams can scale confidently."
  },
  {
    title: "Scalable Architecture",
    description: "I design features with modular patterns to support growth without major rewrites."
  },
  {
    title: "Full-Stack Ownership",
    description: "I handle both frontend UX and backend logic to deliver complete, production-ready flows."
  },
  {
    title: "Security-Aware Development",
    description: "I implement secure auth patterns and practical validation across client and server layers."
  }
];

function WhatMakesMeDifferent({ id }) {
  return (
    <SectionWrapper
      id={id}
      title="What Makes Me Different"
      subtitle="A development approach focused on quality, scale, and real-world reliability."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {differentiators.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-soft-border bg-white p-4 dark:border-dark-accent/20 dark:bg-dark-card/80"
          >
            <h3 className="text-base font-bold text-ink dark:text-[#E5D9FF]">{item.title}</h3>
            <p className="mt-2 text-sm text-muted dark:text-dark-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default WhatMakesMeDifferent;
