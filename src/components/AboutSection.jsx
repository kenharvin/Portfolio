export default function AboutSection() {
  return (
    <div className="h-full flex flex-col justify-center">

      {/* Header */}

      <div className="mb-12 animate-fade-in">
        <h1 className="gradient-text text-5xl font-bold mb-3">
          About Me
        </h1>

        <p className="text-slate-400 text-lg">
          Get to know who I am, my journey, and what drives me as a developer.
        </p>
      </div>

      {/* Main Grid */}

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Left Side */}

        <div className="glass-card animate-fade-in-left">

          <h2 className="text-2xl font-bold text-blue-300 mb-6">
            👨‍💻 Who I Am
          </h2>

          <p className="text-slate-300 leading-8 mb-5">
            I'm Ken Harvin Lacanienta, a Bachelor of Science in Computer Science 
            graduate from ACLC College of Taytay with a passion for
            creating modern and user-friendly web applications.
          </p>

          <p className="text-slate-400 leading-8 mb-5">
            My interests revolve around web development,
            particularly building responsive interfaces with React while
            integrating backend technologies like Node.js, Python, and PHP.
          </p>

          <p className="text-slate-400 leading-8">
            I enjoy learning new technologies, solving real-world problems,
            and continuously improving my technical and creative skills
            through personal and academic projects.
          </p>

        </div>

        {/* Right Side */}

        <div className="glass-card animate-fade-in-right">

          <h2 className="text-2xl font-bold text-cyan-300 mb-8">
            🚀 My Journey
          </h2>

          <div className="space-y-8">

            <div className="flex gap-5">

              <div className="flex flex-col items-center">

                <div className="w-4 h-4 rounded-full bg-blue-400 shadow-glow-sm"></div>

                <div className="w-1 h-20 bg-gradient-to-b from-blue-400/50 to-transparent mt-2"></div>

              </div>

              <div>

                <h3 className="font-semibold text-white">
                  2022
                </h3>

                <p className="text-slate-400">
                  Started my BSCS journey at ACLC College of Taytay and began
                  exploring web development.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="flex flex-col items-center">

                <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-glow-sm"></div>

                <div className="w-1 h-20 bg-gradient-to-b from-cyan-400/50 to-transparent mt-2"></div>

              </div>

              <div>

                <h3 className="font-semibold text-white">
                  2024
                </h3>

                <p className="text-slate-400">
                  Helped developed Progresstify, a web-based project management
                  application using React and Node.js.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="flex flex-col items-center">

                <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-glow-sm"></div>

                <div className="w-1 h-20 bg-gradient-to-b from-cyan-400/50 to-transparent mt-2"></div>

              </div>

              <div>

                <h3 className="font-semibold text-white">
                  2025-2026
                </h3>

                <p className="text-slate-400">
                  Developed a mobile application called NaviGO, a multi-modal fare and route estimation system for our group thesis project.
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="flex flex-col items-center">

                <div className="w-4 h-4 rounded-full bg-blue-300 shadow-glow-sm"></div>

              </div>

              <div>

                <h3 className="font-semibold text-white">
                  Today
                </h3>

                <p className="text-slate-400">
                  Continuously improving my skills while seeking opportunities
                  to contribute as a Junior Full Stack Web Developer.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Cards */}

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="glass-card text-center animate-fade-in-up transition-all duration-300">

          <div className="text-4xl mb-3">
            💡
          </div>

          <h3 className="font-semibold text-white mb-2">
            Problem Solver
          </h3>

          <p className="text-slate-400 text-sm">
            I enjoy transforming ideas into practical web solutions.
          </p>

        </div>

        <div className="glass-card text-center animate-fade-in-up transition-all duration-300" style={{animationDelay: '0.1s'}}>

          <div className="text-4xl mb-3">
            📚
          </div>

          <h3 className="font-semibold text-white mb-2">
            Continuous Learner
          </h3>

          <p className="text-slate-400 text-sm">
            Always exploring new frameworks, tools, and best practices.
          </p>

        </div>

        <div className="glass-card text-center animate-fade-in-up transition-all duration-300" style={{animationDelay: '0.2s'}}>

          <div className="text-4xl mb-3">
            🤝
          </div>

          <h3 className="font-semibold text-white mb-2">
            Team Player
          </h3>

          <p className="text-slate-400 text-sm">
            I value collaboration, communication, and shared success.
          </p>

        </div>

      </div>

    </div>
  );
}