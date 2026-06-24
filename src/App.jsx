import React, { useState } from "react";
import "./App.css";

import Sidebar from "./Sidebar";

import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import SeminarsSection from "./components/SeminarsSection";
import ContactSection from "./components/ContactSection";
import FunFactSection from "./components/FunFactSection";



function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const SECTIONS = [
  {
    title: "Home",
    icon: "🏠",
    component: (
        <HomeSection
          goToProjects={() => setSelectedIndex(3)}
        />
      ),
  },
  {
    title: "About",
    icon: "👋",
    component: <AboutSection />,
  },
  {
    title: "Education",
    icon: "🎓",
    component: <EducationSection />,
  },
  {
    title: "Projects",
    icon: "🚀",
    component: <ProjectsSection />,
  },
  {
    title: "Skills",
    icon: "⚡",
    component: <SkillsSection />,
  },
  {
    title: "Experience",
    icon: "💼",
    component: <ExperienceSection />,
  },
  {
    title: "Seminars",
    icon: "🏆",
    component: <SeminarsSection />,
  },
  {
    title: "Contact",
    icon: "📧",
    component: <ContactSection />,
  },
  {
    title: "Fun Fact",
    icon: "🎮",
    component: <FunFactSection />,
  },
];

  return (
    <div className="app-wrapper">
      <div className="app-popup-container">
        <Sidebar
          items={SECTIONS}
          onSelectIndex={setSelectedIndex}
        />

        <div className="app-content-wrapper">
          <main className="app-main">
            <div
              key={selectedIndex}
              className="app-content-display page-transition"
            >
              {SECTIONS[selectedIndex].component}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;