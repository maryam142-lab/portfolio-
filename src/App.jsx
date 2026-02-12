import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatMakesMeDifferent from "./components/WhatMakesMeDifferent";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Why Me", id: "why-me" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Timeline", id: "timeline" },
  { label: "Contact", id: "contact" }
];

function App() {
  const glowRef = useRef(null);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!glowRef.current) {
        return;
      }
      glowRef.current.style.transform = `translate(${event.clientX - 90}px, ${event.clientY - 90}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-lavender via-[#f7f3ff] to-lightPurple text-body transition-colors duration-300 dark:from-dark-bg dark:via-[#141027] dark:to-[#1a1230] dark:text-dark-lavender">
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-20 hidden h-44 w-44 rounded-full cursor-glow md:block"
      />
      <Navbar
        navItems={navItems}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
      />
      <main className="relative z-30 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:gap-10">
        <Hero id="home" />
        <About id="about" />
        <WhatMakesMeDifferent id="why-me" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Timeline id="timeline" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;

