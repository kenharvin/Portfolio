export default function SkillsSection() {
  return (
    <div className="h-full flex flex-col justify-center">

      {/* Header */}

      <div className="mb-10">

        <h1 className="gradient-text text-5xl font-bold mb-3">
          Skills & Expertise
        </h1>

        <p className="text-slate-400 text-lg">
          Technologies and tools that I use to build modern web applications.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Frontend */}

        <div className="glass-card">

          <h2 className="text-2xl font-bold text-blue-300 mb-8">
            💻 Frontend Development
          </h2>

          <div className="space-y-6">

            {[
              ["React", "90%"],
              ["JavaScript", "90%"],
              ["HTML", "95%"],
              ["CSS", "90%"],
            ].map(([skill, width]) => (
              <div key={skill}>
                <div className="flex justify-between mb-2">
                  <span>{skill}</span>
                  <span className="text-slate-400">{width}</span>
                </div>

                <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    style={{ width }}
                  />
                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Backend */}

        <div className="glass-card">

          <h2 className="text-2xl font-bold text-cyan-300 mb-8">
            ⚙️ Backend Development
          </h2>

          <div className="space-y-6">

            {[
              ["Node.js", "80%"],
              ["PHP", "80%"],
              ["Python", "75%"],
              ["MySQL", "80%"],
            ].map(([skill, width]) => (
              <div key={skill}>
                <div className="flex justify-between mb-2">
                  <span>{skill}</span>
                  <span className="text-slate-400">{width}</span>
                </div>

                <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
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

        <div className="glass-card">

          <h2 className="text-2xl font-bold text-white mb-6">
            🚀 Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">

            {[
              "React",
              "Node.js",
              "JavaScript",
              "PHP",
              "Python",
              "HTML",
              "CSS",
              "Tailwind",
              "Git",
              "GitHub",
              "MySQL",
              "Vite",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-blue-500/20 transition cursor-default"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        {/* Summary */}

        <div className="glass-card">

          <h2 className="text-2xl font-bold text-white mb-6">
            📊 Overview
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <div className="text-center p-4 rounded-xl bg-white/5">

              <h3 className="text-4xl font-bold gradient-text">
                7+
              </h3>

              <p className="text-slate-400">
                Languages & Frameworks
              </p>

            </div>

            <div className="text-center p-4 rounded-xl bg-white/5">

              <h3 className="text-4xl font-bold gradient-text">
                2+
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