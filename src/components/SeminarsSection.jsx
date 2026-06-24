export default function SeminarsSection() {
  const seminars = [
    {
      title: "Live Remote Coding Bootcamp",
      location: "Entirety Technologies",
      year: "2019",
      description:
        "Participated in an intensive coding bootcamp focused on practical software development skills and industry best practices.",
    },
    {
      title: "Career Orientation Program",
      location: "Professional Development",
      year: "2023",
      description:
        "Learned about career preparation, workplace expectations, communication, and opportunities in the IT industry.",
    },
    {
      title: "IoT Conference 2025",
      location: "SMX Convention Center",
      year: "2025",
      description:
        "Attended the Internet of Things Conference to explore emerging technologies, smart systems, and industry innovations.",
    },
    
  ];

  return (
    <div className="h-full flex flex-col justify-center">

      {/* Header */}

      <div className="mb-12 animate-fade-in">

        <h1 className="gradient-text text-5xl font-bold mb-3">
          Seminars & Training
        </h1>

        <p className="text-slate-400 text-lg">
          Continuous learning through conferences, bootcamps, and professional
          development programs.
        </p>

      </div>

      {/* Seminar Cards */}

      <div className="grid lg:grid-cols-3 gap-6 animate-fade-in-up">

        {seminars.map((seminar) => (

          <div
            key={seminar.title}
            className="glass-card hover:shadow-glow hover:scale-105 transition-all duration-300 group"
          >

            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm mb-4 font-medium">
              {seminar.year}
            </span>

            <h2 className="text-2xl font-bold text-white mb-2">
              {seminar.title}
            </h2>

            <p className="text-cyan-300 text-sm mb-4">
              {seminar.location}
            </p>

            <p className="text-slate-400 leading-7">
              {seminar.description}
            </p>

          </div>

        ))}

      </div>

      {/* Bottom Stats */}

      <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>

        <div className="glass-card text-center">

          <h2 className="text-5xl font-bold gradient-text mb-2">
            3+
          </h2>

          <p className="text-slate-400">
            Professional Events
          </p>

        </div>

        <div className="glass-card text-center">

          <h2 className="text-5xl font-bold gradient-text mb-2">
            ∞
          </h2>

          <p className="text-slate-400">
            Curiosity to Learn
          </p>

        </div>

        <div className="glass-card text-center">

          <h2 className="text-5xl font-bold gradient-text mb-2">
            🚀
          </h2>

          <p className="text-slate-400">
            Ready for Industry
          </p>

        </div>

      </div>

    </div>
  );
}