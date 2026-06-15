export default function ExperienceSection() {
  return (
    <div className="h-full flex flex-col justify-center">

      {/* Header */}

      <div className="mb-10">

        <h1 className="gradient-text text-5xl font-bold mb-3">
          Experience
        </h1>

        <p className="text-slate-400 text-lg">
          My journey as a student developer and the experiences that shaped my
          technical skills.
        </p>

      </div>

      <div className="grid lg:grid-cols-[1.5fr_0.8fr] gap-8">

        {/* Timeline */}

        <div className="glass-card">

          <h2 className="text-2xl font-bold text-blue-300 mb-8">
            💼 Career Timeline
          </h2>

          <div className="space-y-10">

            {/* Student Developer */}

            <div className="flex gap-5">

              <div className="flex flex-col items-center">

                <div className="w-5 h-5 rounded-full bg-blue-500"></div>

                <div className="w-1 h-24 bg-blue-500/30 mt-2"></div>

              </div>

              <div>

                <span className="text-sm text-blue-300">
                  2022 - Present
                </span>

                <h3 className="text-2xl font-bold text-white mt-1">
                  Student Developer
                </h3>

                <p className="text-slate-400 mt-3 leading-8">
                  Developing academic and personal projects using React,
                  Node.js, JavaScript, PHP, and Python while strengthening
                  my understanding of full stack web development.
                </p>

              </div>

            </div>

            {/* Progresstify */}

            <div className="flex gap-5">

              <div className="flex flex-col items-center">

                <div className="w-5 h-5 rounded-full bg-cyan-500"></div>

                <div className="w-1 h-24 bg-cyan-500/30 mt-2"></div>

              </div>

              <div>

                <span className="text-sm text-cyan-300">
                  Major Project
                </span>

                <h3 className="text-2xl font-bold text-white mt-1">
                  Progresstify Development
                </h3>

                <p className="text-slate-400 mt-3 leading-8">
                  Built a web-based project management system using React
                  and Node.js with emphasis on responsive UI design and
                  user experience.
                </p>

              </div>

            </div>

            {/* Seminars */}

            <div className="flex gap-5">

              <div className="flex flex-col items-center">

                <div className="w-5 h-5 rounded-full bg-blue-300"></div>

                <div className="w-1 h-24 bg-blue-300/30 mt-2"></div>

              </div>

              <div>

                <span className="text-sm text-blue-200">
                  Professional Development
                </span>

                <h3 className="text-2xl font-bold text-white mt-1">
                  Bootcamps & Conferences
                </h3>

                <p className="text-slate-400 mt-3 leading-8">
                  Participated in coding bootcamps, career orientation
                  programs, and IoT Conference 2025 to expand my technical
                  and professional knowledge.
                </p>

              </div>

            </div>

            {/* Future */}

            <div className="flex gap-5">

              <div className="flex flex-col items-center">

                <div className="w-5 h-5 rounded-full bg-green-400"></div>

              </div>

              <div>

                <span className="text-sm text-green-300">
                  Next Goal
                </span>

                <h3 className="text-2xl font-bold text-white mt-1">
                  Junior Full Stack Developer
                </h3>

                <p className="text-slate-400 mt-3 leading-8">
                  Looking forward to contributing to real-world software
                  development projects while continuously learning and
                  growing as a professional developer.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Highlights */}

        <div className="flex flex-col gap-6">

          <div className="glass-card text-center">

            <div className="text-5xl mb-4">
              🚀
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Major Project
            </h3>

            <p className="text-slate-400">
              Developed Progresstify using React and Node.js.
            </p>

          </div>

          <div className="glass-card text-center">

            <div className="text-5xl mb-4">
              💻
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Full Stack Focus
            </h3>

            <p className="text-slate-400">
              Experience with frontend, backend, and database
              technologies.
            </p>

          </div>

          <div className="glass-card text-center">

            <div className="text-5xl mb-4">
              📚
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Continuous Growth
            </h3>

            <p className="text-slate-400">
              Always learning through projects, seminars,
              and self-study.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}