export default function ContactSection() {
  return (
    <div className="h-full flex flex-col justify-center">

      {/* Header */}

      <div className="text-center mb-12 animate-fade-in">

        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 border border-green-400/30 text-green-300 mb-5 text-sm font-medium">
          🟢 Open to Opportunities
        </span>

        <h1 className="gradient-text text-5xl font-bold mb-4">
          Let's Connect
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Whether you have a job opportunity, collaboration, or simply want
          to talk about technology, I'd be happy to hear from you.
        </p>

      </div>

      {/* Contact Card */}

      <div className="glass-card p-10 animate-fade-in-up">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div>

            <h2 className="text-2xl font-bold text-white mb-8">
              📬 Contact Information
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110">
                  📧
                </div>

                <div>

                  <p className="text-slate-400 text-sm">
                    Email
                  </p>

                  <a
                    href="mailto:kenlacanienta93@gmail.com"
                    className="text-lg text-white hover:text-blue-300 transition"
                  >
                    kenlacanienta93@gmail.com
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110">
                  💻
                </div>

                <div>

                  <p className="text-slate-400 text-sm">
                    GitHub
                  </p>

                  <a
                    href="https://github.com/kenharvin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-white hover:text-cyan-300 transition"
                  >
                    github.com/kenharvin
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110">
                  📍
                </div>

                <div>

                  <p className="text-slate-400 text-sm">
                    Location
                  </p>

                  <p className="text-lg text-white">
                    Taytay, Rizal, Philippines
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-col justify-center">

            <div className="glass-card bg-white/5 p-8">

              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Build Something Great?
              </h2>

              <p className="text-slate-400 leading-8 mb-8">
                I'm currently looking for opportunities where I can grow as
                a Full Stack Web Developer while contributing meaningful
                solutions and learning from experienced teams.
              </p>

              <div className="flex flex-wrap gap-4">

                <a
                  href="mailto:kenlacanienta93@gmail.com"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold hover:scale-105 transition"
                >
                  📧 Email Me
                </a>

                <a
                  href="https://github.com/kenharvin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl border border-slate-500 hover:border-blue-400 transition"
                >
                  💻 View GitHub
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="glass-card text-center">

          <div className="text-4xl mb-3">
            ⚡
          </div>

          <h3 className="font-bold text-white mb-2">
            Quick Learner
          </h3>

          <p className="text-slate-400 text-sm">
            Always eager to learn new technologies and frameworks.
          </p>

        </div>

        <div className="glass-card text-center">

          <div className="text-4xl mb-3">
            🤝
          </div>

          <h3 className="font-bold text-white mb-2">
            Collaborative
          </h3>

          <p className="text-slate-400 text-sm">
            Enjoy working with teams to create impactful software.
          </p>

        </div>

        <div className="glass-card text-center">

          <div className="text-4xl mb-3">
            🚀
          </div>

          <h3 className="font-bold text-white mb-2">
            Growth Mindset
          </h3>

          <p className="text-slate-400 text-sm">
            Focused on continuous improvement and innovation.
          </p>

        </div>

      </div>

    </div>
  );
}