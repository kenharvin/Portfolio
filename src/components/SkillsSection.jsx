export default function SkillsSection() {
  return (
    <div className="h-full flex flex-col justify-center">

      {/* Header */}

      <div className="mb-12 animate-fade-in">

        <h1 className="gradient-text text-5xl font-bold mb-3">
          Skills & Expertise
        </h1>

        <p className="text-slate-400 text-lg">
          Technologies, frameworks, and development tools I've used to build full-stack web and mobile applications.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Frontend */}

        <div className="glass-card animate-fade-in-left">

          <h2 className="text-2xl font-bold text-blue-300 mb-8">
            💻 Frontend Development
          </h2>

          <div className="space-y-6">

            {[
              ["React", "90%"],
              ["React Native", "85%"],
              ["JavaScript", "90%"],
              ["HTML & CSS", "95%"],
            ].map(([skill, width]) => (
              <div key={skill}>
                <div className="flex justify-between mb-2">
                  <span>{skill}</span>
                  <span className="text-slate-400">{width}</span>
                </div>

                <div className="h-3 rounded-full bg-slate-700/50 overflow-hidden shadow-inner">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-glow-sm transition-all duration-300"
                    style={{ width }}
                  />
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Backend */}

        <div className="glass-card animate-fade-in-right">

          <h2 className="text-2xl font-bold text-cyan-300 mb-8">
            ⚙️ Backend Development
          </h2>

          <div className="space-y-6">

            {[
              ["Node.js", "85%"],
              ["FastAPI", "80%"],
              ["Python", "80%"],
              ["MySQL / PostgreSQL", "85%"],
            ].map(([skill, width]) => (
              <div key={skill}>
                <div className="flex justify-between mb-2">
                  <span>{skill}</span>
                  <span className="text-slate-400">{width}</span>
                </div>

                <div className="h-3 rounded-full bg-slate-700/50 overflow-hidden shadow-inner">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-glow-sm transition-all duration-300"
                    style={{ width }}
                  />
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="grid md:grid-cols-2 gap-8 mt-8">

        {/* Tech Stack */}

        <div className="glass-card animate-fade-in-up">

          <h2 className="text-2xl font-bold text-white mb-6">
            🚀 Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">

            {[
              "React",
              "React Native",
              "Node.js",
              "FastAPI",
              "JavaScript",
              "Python",
              "PHP",
              "MySQL",
              "PostgreSQL",
              "Git",
              "GitHub",
              "Vite",
            ].map((tech) => (
              <span
                key={tech}
                className="tag"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        {/* Summary */}

        <div className="glass-card animate-fade-in-up" style={{animationDelay: '0.1s'}}>

          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Overview
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <div className="text-center p-4 rounded-xl bg-white/5">

              <h3 className="text-4xl font-bold gradient-text">
                10+
              </h3>

              <p className="text-slate-400">
                Languages & Frameworks
              </p>

            </div>

            <div className="text-center p-4 rounded-xl bg-white/5">

              <h3 className="text-4xl font-bold gradient-text">
                2
              </h3>

              <p className="text-slate-400">
                Major Projects
              </p>

            </div>

            <div className="text-center p-4 rounded-xl bg-white/5">

              <h3 className="text-4xl font-bold gradient-text">
                3+
              </h3>

              <p className="text-slate-400">
                Seminars
              </p>

            </div>

            <div className="text-center p-4 rounded-xl bg-white/5">

              <h3 className="text-4xl font-bold gradient-text">
                ∞
              </h3>

              <p className="text-slate-400">
                Passion to Learn
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}