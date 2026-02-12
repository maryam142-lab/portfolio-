import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import maryamImage from "../assets/maryam.jpg";

function About({ id }) {
  return (
    <SectionWrapper
      id={id}
      title="About"
      subtitle="MERN developer focused on building maintainable products with clear UX and dependable backend logic."
      className="bg-lightPurple/65 dark:bg-dark-card/65"
    >
      <div className="grid items-center gap-6 rounded-3xl border border-soft-border bg-white/90 p-5 backdrop-blur-md dark:border-dark-accent/25 dark:bg-dark-card/65 md:grid-cols-[220px_1fr]">
        <img
          src={maryamImage}
          alt="Maryam"
          className="h-52 w-52 rounded-2xl border border-soft-border object-cover dark:border-dark-accent/20"
        />
        <div className="space-y-3 text-sm leading-6 text-body dark:text-dark-lavender sm:text-base">
          <div>
            <h3 className="text-xl font-bold text-ink dark:text-[#E5D9FF]">Maryam</h3>
            <motion.span
              className="mt-2 block h-1 w-24 rounded-full bg-gradient-to-r from-violet to-lilac dark:from-dark-accent dark:to-[#A855F7]"
              initial={{ width: 0, opacity: 0.2 }}
              whileInView={{ width: 140, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
          <p>
            I&apos;m a MERN Stack Developer focused on production-ready applications with strong
            architecture, secure systems, and thoughtful user experience.
          </p>
          <ul className="space-y-2">
            <li>- Passionate about clean architecture and maintainable codebases</li>
            <li>- Experienced with JWT authentication and secure API workflows</li>
            <li>- Focused on performance optimization and scalable backend design</li>
            <li>- Strong understanding of REST API design and frontend-backend integration</li>
          </ul>
          <p>
            I enjoy solving real-world problems and continuously improving my development skills.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default About;

