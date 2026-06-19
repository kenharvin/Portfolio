export default function ProjectsSection() {
  return (
    <div className="h-full flex flex-col justify-center">

      {/* Header */}

      <div className="mb-12 animate-fade-in">

        <h1 className="gradient-text text-5xl font-bold mb-3">
          Projects
        </h1>

        <p className="text-slate-400 text-lg">
          A collection of projects where I apply my knowledge and continuously
          improve my development skills.
        </p>

      </div>

      {/* Featured Project */}

      <div className="glass-card mb-8 p-8 animate-fade-in-up transition-all duration-300 hover:shadow-glow">

        <div className="flex flex-col lg:flex-row justify-between gap-8">

          <div className="flex-1 space-y-6">

            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium">
              ⭐ Featured Project
            </span>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">
                Progresstify
              </h2>

              <p className="text-slate-300 leading-8">
                A web-based project management application developed using
                React and Node.js. The system helps users organize tasks,
                manage projects, and improve productivity through an intuitive
                and responsive interface.
              </p>
            </div>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-3">

              <span className="tag">
                React
              </span>

              <span className="tag">
                Node.js
              </span>

              <span className="tag">
                JavaScript
              </span>

              <span className="tag">
                Responsive UI
              </span>

            </div>

            {/* Buttons */}

            <div className="flex gap-4 flex-wrap pt-4">

              <a
                href="https://progresstify.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                🚀 Live Demo
              </a>

              <a
                href="https://github.com/kenharvin"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                💻 GitHub
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex items-center justify-center lg:justify-end">

            <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/20 flex flex-col items-center justify-center shadow-glow hover:shadow-glow-lg transition-all duration-300">

              <div className="text-7xl mb-4">
                📋
              </div>

              <h3 className="text-2xl font-bold text-white">
                Progresstify
              </h3>

              <p className="text-slate-400 mt-2">
                Project Management System
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Other Projects */}

      <div className="grid md:grid-cols-2 gap-6">

        {/* Portfolio */}

        <div className="glass-card hover:-translate-y-2 transition-all">

          <div className="text-5xl mb-5">
            🌐
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">
            Personal Portfolio
          </h3>

          <p className="text-slate-400 leading-7 mb-5">
            A modern portfolio website built with React and Vite to showcase
            my projects, skills, and professional journey.
          </p>

          <div className="flex gap-2 flex-wrap">

            <span className="px-3 py-1 rounded-full bg-white/10">
              React
            </span>

            <span className="px-3 py-1 rounded-full bg-white/10">
              Vite
            </span>

            <span className="px-3 py-1 rounded-full bg-white/10">
              Tailwind
            </span>

          </div>

        </div>

        {/* Future */}

        <div className="glass-card hover:-translate-y-2 transition-all">

          <div className="text-5xl mb-5">
            🚧
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">
            More Projects Coming Soon
          </h3>

          <p className="text-slate-400 leading-7">
            I'm continuously building new applications and experimenting
            with different technologies. Stay tuned for more exciting
            projects in the future.
          </p>

          <div className="mt-6">

            <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-300">
              In Progress
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}