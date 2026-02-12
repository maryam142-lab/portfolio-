import { motion } from "framer-motion";

function SkillBadge({ name }) {
  const emojiBySkill = {
    "React.js": "⚛️",
    "Node.js": "🌿",
    MongoDB: "🍃",
    "Tailwind CSS": "🎨",
    "JavaScript (ES6+)": "💛",
    JavaScript: "💛",
    HTML5: "🧩",
    CSS3: "🎯",
    "Express.js": "🚀",
    "REST API Development": "🔗",
    SQLite: "🗄️",
    "JWT Authentication": "🔐",
    JWT: "🔐",
    "bcrypt (Password Hashing)": "🛡️",
    bcrypt: "🛡️",
    "Git & GitHub": "🔧",
    Git: "🔧",
    Vite: "⚡",
    Postman: "📮",
    "VS Code": "🧠"
  };

  return (
    <motion.div
      className="inline-flex items-center gap-2 rounded-full border border-soft-border bg-muted-lavender px-4 py-2 text-sm font-semibold text-ink shadow-sm transition-all dark:border-dark-accent/30 dark:bg-dark-card dark:text-dark-lavender dark:shadow-glow"
      whileHover={{ y: -4, rotate: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 16 }}
    >
      <span>{name}</span>
      <span>{emojiBySkill[name] ?? "✨"}</span>
    </motion.div>
  );
}

export default SkillBadge;

