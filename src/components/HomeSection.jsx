import heroImg from "../assets/Ken.png";

export default function HomeSection() {
  return (
    <div className="w-full min-h-full flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-7xl px-4">

        {/* LEFT SIDE - IMAGE */}

        <div className="flex justify-center animate-fade-in-left order-2 lg:order-1">

          <div className="relative hero-image">

            {/* Glow */}

            <div className="absolute inset-0 bg-blue-500 rounded-full blur-[60px] opacity-25 scale-100"></div>

            {/* Ring */}

            <div className="absolute inset-0 rounded-full border border-blue-400/30 scale-105"></div>

            {/* Image */}

            <img
              src={heroImg}
              alt="Ken"
              className="relative w-[250px] h-[250px] rounded-full object-cover border-[5px] border-slate-900 shadow-xl shadow-blue-500/20"
            />

          </div>

        </div>

        {/* RIGHT SIDE - CONTENT */}

        <div className="space-y-8 animate-fade-in-right order-1 lg:order-2">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-sm font-medium">
            👋 Available for Opportunities
          </span>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-black leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">
                Ken
              </span>
            </h1>

            <h2 className="text-xl lg:text-2xl text-slate-300 font-semibold leading-relaxed">
              Aspiring Full Stack Web Developer
            </h2>
          </div>

          <p className="text-base lg:text-lg text-slate-400 leading-8">
            Passionate about building modern web applications using React,
            Node.js, JavaScript, PHP, and Python while continuously learning
            new technologies and creating intuitive user experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">

            <a
              href="https://progresstify.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              View Project →
            </a>

            <a
              href="mailto:kenlacanienta93@gmail.com"
              className="btn-secondary"
            >
              Contact Me
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-3 pt-6">

            <div className="glass-card text-center py-4 transition-all duration-300 hover:bg-blue-500/10">
              <h3 className="text-2xl font-bold gradient-text">
                1+
              </h3>

              <p className="text-slate-400 mt-1 text-xs font-medium">
                Project
              </p>
            </div>

            <div className="glass-card text-center py-4 transition-all duration-300 hover:bg-blue-500/10">
              <h3 className="text-2xl font-bold gradient-text">
                7+
              </h3>

              <p className="text-slate-400 mt-1 text-xs font-medium">
                Tech Stack
              </p>
            </div>

            <div className="glass-card text-center py-4 transition-all duration-300 hover:bg-blue-500/10">
              <h3 className="text-2xl font-bold gradient-text">
                2022
              </h3>

              <p className="text-slate-400 mt-1 text-xs font-medium">
                Started
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}