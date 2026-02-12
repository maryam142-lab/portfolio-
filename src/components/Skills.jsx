import SectionWrapper from "./SectionWrapper";
import SkillBadge from "./SkillBadge";
import { skillCategories } from "../data/portfolioData";

function Skills({ id }) {
  const primarySkills = [
    { name: "React.js", usage: "Used in 6+ projects to build responsive component-based UIs." },
    { name: "Node.js", usage: "Built backend services with authentication, CRUD, and validation." },
    { name: "Express.js", usage: "Designed RESTful API routes and middleware architecture." },
    { name: "MongoDB", usage: "Applied data modeling and query design for scalable apps." },
    { name: "JWT Authentication", usage: "Implemented token-based auth flows and protected routes." },
    { name: "Tailwind CSS", usage: "Created fast, consistent UI systems with reusable utility patterns." }
  ];

  const primarySkillNames = new Set(primarySkills.map((skill) => skill.name));
  const otherTools = skillCategories
    .flatMap((category) => category.skills.map((skill) => skill.name))
    .filter((skillName) => !primarySkillNames.has(skillName));

  return (
    <SectionWrapper
      id={id}
      title="Skills"
      subtitle="Technologies I use to design, build, and deploy modern full-stack applications."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-soft-border bg-white p-5 dark:border-dark-accent/20 dark:bg-dark-card/80 lg:col-span-2">
          <h3 className="text-base font-bold text-ink dark:text-[#E5D9FF]">Primary Skills</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {primarySkills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-xl border border-soft-border bg-white p-3 dark:border-dark-accent/20 dark:bg-[#241b42]"
              >
                <SkillBadge name={skill.name} />
                <p className="mt-2 text-xs leading-5 text-muted dark:text-dark-muted">{skill.usage}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-soft-border bg-white p-5 dark:border-dark-accent/20 dark:bg-dark-card/80 lg:col-span-2">
          <h3 className="text-base font-bold text-ink dark:text-[#E5D9FF]">Other Tools</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {otherTools.map((skillName) => (
              <SkillBadge key={skillName} name={skillName} />
            ))}
          </div>
        </article>
      </div>
    </SectionWrapper>
  );
}

export default Skills;
