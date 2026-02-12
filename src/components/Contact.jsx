import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

function Contact({ id }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const whatsappNumber = "923057161188";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = `Hi, my name is ${form.name}.\nMy email: ${form.email}\n\nMessage:\n${form.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id={id} className="bg-lightPurple/70 dark:bg-dark-card/60">
      <h2 className="text-center text-3xl font-bold text-violet">Get in Touch</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-body dark:text-dark-lavender md:text-base">
        Have a project in mind or an opportunity to discuss? Reach out through the form or via
        direct channels below. I usually respond within 24 hours.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-violet dark:text-dark-accent">
        <span className="rounded-full border border-violet/25 bg-white/70 px-3 py-1 dark:border-dark-accent/30 dark:bg-dark-card/70">
          Available for Internship / Junior Developer Roles
        </span>
        <span className="rounded-full border border-violet/25 bg-white/70 px-3 py-1 dark:border-dark-accent/30 dark:bg-dark-card/70">
          Open to Remote Opportunities
        </span>
      </div>

      <div className="mt-8 flex flex-col items-start justify-center gap-10 text-sm text-body dark:text-dark-lavender md:flex-row md:text-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="space-y-2 rounded-2xl border border-soft-border bg-white p-5 dark:border-dark-accent/20 dark:bg-dark-card/80"
        >
          <p>
            📞{" "}
            <a href="tel:+923057161188" className="transition hover:underline">
              03057161188
            </a>
          </p>
          <p>
            ✉️{" "}
            <a href="mailto:marium142005@gmail.com" className="transition hover:underline">
              marium142005@gmail.com
            </a>
          </p>
          <p>
            💼{" "}
            <a
              href="https://linkedin.com/in/marium-javed-316203387"
              target="_blank"
              rel="noreferrer"
              className="transition hover:underline"
            >
              LinkedIn
            </a>
          </p>
          <p>
            🐙{" "}
            <a
              href="https://github.com/maryam142-lab"
              target="_blank"
              rel="noreferrer"
              className="transition hover:underline"
            >
              GitHub
            </a>
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="flex w-full flex-col gap-4 rounded-2xl border border-soft-border bg-white p-5 dark:border-dark-accent/20 dark:bg-dark-card/85 md:w-1/2"
        >
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="rounded-lg border border-soft-border bg-white p-3 text-sm text-body outline-none transition focus:border-violet focus:ring-2 focus:ring-violet/20 dark:border-dark-accent/30 dark:bg-[#22193f] dark:text-dark-lavender"
          />

          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="rounded-lg border border-soft-border bg-white p-3 text-sm text-body outline-none transition focus:border-violet focus:ring-2 focus:ring-violet/20 dark:border-dark-accent/30 dark:bg-[#22193f] dark:text-dark-lavender"
          />

          <textarea
            name="message"
            required
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="h-32 rounded-lg border border-soft-border bg-white p-3 text-sm text-body outline-none transition focus:border-violet focus:ring-2 focus:ring-violet/20 dark:border-dark-accent/30 dark:bg-[#22193f] dark:text-dark-lavender"
          />

          <button type="submit" className="gradient-btn w-full">
            Send Message
          </button>

          <p className="mt-1 text-sm text-muted dark:text-dark-muted">
            WhatsApp will open with your message. Press send there to deliver it.
          </p>

          {submitted && (
            <p className="text-sm font-medium text-violet dark:text-dark-accent">
              WhatsApp opened with your message. Press send there to deliver it.
            </p>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
