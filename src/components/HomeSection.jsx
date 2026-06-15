import heroImg from "../assets/hero.png";

export default function HomeSection() {
  return (
    <div className="w-full min-h-full flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300">
            👋 Available for Opportunities
          </span>

          <div>
            <h1 className="text-6xl lg:text-7xl font-black leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">
                Ken
              </span>
            </h1>

            <h2 className="mt-4 text-2xl text-slate-300 font-medium">
              Aspiring Full Stack Web Developer
            </h2>
          </div>

          <p className="text-lg text-slate-400 leading-8 max-w-2xl">
            Passionate about building modern web applications using React,
            Node.js, JavaScript, PHP, and Python while continuously learning
            new technologies and creating intuitive user experiences.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="https://progresstify.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold shadow-lg hover:scale-105 transition"
            >
              View Project →
            </a>

            <a
              href="mailto:kenlacanienta93@gmail.com"
              className="px-7 py-3 rounded-xl border border-slate-600 hover:border-blue-400 hover:bg-blue-500/10 transition"
            >
              Contact Me
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-5 pt-4">

            <div className="glass-card text-center py-6">
              <h3 className="text-4xl font-bold gradient-text">
                1+
              </h3>

              <p className="text-slate-400 mt-2">
                Major Project
              </p>
            </div>

            <div className="glass-card text-center py-6">
              <h3 className="text-4xl font-bold gradient-text">
                7+
              </h3>

              <p className="text-slate-400 mt-2">
                Technologies
              </p>
            </div>

            <div className="glass-card text-center py-6">
              <h3 className="text-4xl font-bold gradient-text">
                2022
              </h3>

              <p className="text-slate-400 mt-2">
                Started BSIT
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center lg:justify-end">

          <div className="relative hero-image">

            {/* Glow */}

            <div className="absolute inset-0 bg-blue-500 rounded-full blur-[120px] opacity-30 scale-125"></div>

            {/* Ring */}

            <div className="absolute inset-0 rounded-full border border-blue-400/30 scale-110"></div>

            {/* Image */}

            <img
              src={heroImg}
              alt="Ken"
              className="relative w-[420px] h-[420px] rounded-full object-cover border-[8px] border-slate-900 shadow-2xl shadow-blue-500/20"
            />

          </div>

        </div>

      </div>
    </div>
  );
}