# MERN Developer Portfolio (React + Vite + Tailwind)

Professional, responsive portfolio website for Marium Javed with modular React components and Framer Motion animations.

## Tech Stack

- React (Vite)
- Tailwind CSS
- Framer Motion
- React Icons

## Project Structure

```txt
.
+-- package.json
+-- tailwind.config.js
+-- src
¦   +-- App.jsx
¦   +-- main.jsx
¦   +-- index.css
¦   +-- assets
¦   ¦   +-- hero-placeholder.svg
¦   ¦   +-- profile-placeholder.svg
¦   ¦   +-- project-blog.svg
¦   ¦   +-- project-quiz.svg
¦   ¦   +-- project-calculator.svg
¦   +-- data
¦   ¦   +-- portfolioData.js
¦   +-- components
¦       +-- Navbar.jsx
¦       +-- Hero.jsx
¦       +-- About.jsx
¦       +-- Skills.jsx
¦       +-- Projects.jsx
¦       +-- Timeline.jsx
¦       +-- Contact.jsx
¦       +-- Footer.jsx
¦       +-- SectionWrapper.jsx
¦       +-- ProjectCard.jsx
¦       +-- SkillBadge.jsx
```

## Setup

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## Vercel Deployment

1. Push the repository to GitHub.
2. Open Vercel and import the repository.
3. Select Framework Preset: `Vite`.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click Deploy.