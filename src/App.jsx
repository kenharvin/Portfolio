import heroImg from './assets/Ken.png';
import Sidebar from './Sidebar';
import React, { useState } from 'react';
import './App.css';

const SYMBOL_CONTENT = [
  {
    title: 'Home',
    icon: '🏠',
    content: (
      <div className="h-full flex flex-col items-center justify-center text-center">
        <div className="mb-8">
          <img src={heroImg} alt="Ken" className="w-40 h-40 rounded-full shadow-2xl shadow-blue-500/50 border-4 border-blue-400/30 object-cover mx-auto" />
        </div>
        <h1 className="gradient-text mb-4 text-5xl font-bold">Hi, I'm Ken</h1>
        <p className="text-2xl text-slate-300 mb-8">Frontend Developer & Designer</p>
        <p className="text-lg text-slate-400 max-w-2xl mb-8">Crafting beautiful, performant web experiences</p>
        
      </div>
    ),
  },
  {
    title: 'About Me',
    icon: '👋',
    content: (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-4xl font-bold gradient-text mb-6">About Me</h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          I'm a passionate front-end developer crafting beautiful, performant web experiences. I specialize in modern JavaScript frameworks and focus on creating intuitive user interfaces that users love.
        </p>
        <p className="text-lg text-slate-400 leading-relaxed">
          With a keen eye for design and a passion for clean code, I build applications that are not just functional but delightful to use. Let's create something amazing together.
        </p>
      </div>
    ),
  },
  {
    title: 'Projects',
    icon: '🚀',
    content: (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-4xl font-bold gradient-text mb-8">Projects</h2>
        <div className="space-y-6 overflow-y-auto max-h-96 pr-4">
          <div className="glass-card group">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors">Portfolio Website</h3>
                <p className="text-sm text-slate-400 mt-2">React • Vite • Tailwind CSS</p>
              </div>
              <span className="text-3xl">💼</span>
            </div>
            <p className="text-slate-300 text-lg">Modern portfolio site with interactive sidebar carousel and dynamic content switching.</p>
          </div>
          <div className="glass-card group">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors">UI Components Library</h3>
                <p className="text-sm text-slate-400 mt-2">React • TypeScript • Storybook</p>
              </div>
              <span className="text-3xl">🎨</span>
            </div>
            <p className="text-slate-300 text-lg">Reusable component library for rapid prototyping with modern design patterns.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Contact',
    icon: '📧',
    content: (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-4xl font-bold gradient-text mb-8">Get In Touch</h2>
        <p className="text-lg text-slate-300 mb-8">I'd love to hear from you! Whether you have a question or just want to chat about web development.</p>
        <div className="flex flex-col gap-4 max-w-md">
          <a href="mailto:ken@example.com" className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105">
            <span className="text-2xl">📧</span> Send an Email
          </a>
          <a href="#" className="inline-flex items-center gap-4 px-6 py-4 rounded-xl border-2 border-blue-400/50 text-blue-300 hover:bg-blue-400/10 transition-all font-semibold text-lg">
            <span className="text-2xl">💼</span> LinkedIn
          </a>
        </div>
      </div>
    ),
  },
  {
    title: 'Skills',
    icon: '⚡',
    content: (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-4xl font-bold gradient-text mb-8">Skills & Expertise</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-blue-300 mb-4 flex items-center gap-2 text-xl">
              <span>⚙️</span> Frontend
            </h3>
            <ul className="text-slate-300 space-y-2 text-lg">
              <li>• React & Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-bold text-cyan-300 mb-4 flex items-center gap-2 text-xl">
              <span>🎨</span> Design
            </h3>
            <ul className="text-slate-300 space-y-2 text-lg">
              <li>• UI/UX Design</li>
              <li>• Responsive Design</li>
              <li>• Accessibility</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Fun Fact',
    icon: '🎮',
    content: (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-4xl font-bold gradient-text mb-8">Fun Fact</h2>
        <div className="glass-card p-8">
          <p className="text-2xl text-slate-300 leading-relaxed">
            I love experimenting with new web technologies and building creative side projects. When I'm not coding, you'll find me exploring the latest design trends or gaming! 🎮✨
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Experience',
    icon: '💼',
    content: (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-4xl font-bold gradient-text mb-8">Experience</h2>
        <div className="space-y-6 overflow-y-auto max-h-80 pr-4">
          <div className="glass-card border-l-4 border-blue-400 p-6">
            <h3 className="text-2xl font-bold text-slate-100 mb-2">Senior Frontend Developer</h3>
            <p className="text-sm text-slate-400 mb-3">2022 - Present</p>
            <p className="text-slate-300 text-lg">Leading frontend initiatives and mentoring junior developers.</p>
          </div>
          <div className="glass-card border-l-4 border-cyan-400 p-6">
            <h3 className="text-2xl font-bold text-slate-100 mb-2">Frontend Developer</h3>
            <p className="text-sm text-slate-400 mb-3">2020 - 2022</p>
            <p className="text-slate-300 text-lg">Built responsive web applications with React and modern tooling.</p>
          </div>
        </div>
      </div>
    ),
  },
];

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="app-wrapper">
      {/* Pop-up Container */}
      <div className="app-popup-container">
        <Sidebar onSelectIndex={setSelectedIndex} />
        <div className="app-content-wrapper">
          {/* Main Content Area - Fixed Height */}
          <main className="app-main">
            <div className="app-content-display">
              {SYMBOL_CONTENT[selectedIndex].content}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
