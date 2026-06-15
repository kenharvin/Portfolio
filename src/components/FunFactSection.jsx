export default function FunFactSection() {
  return (
    <div className="h-full flex flex-col justify-center">

      {/* Header */}

      <div className="text-center mb-10">

        <h1 className="gradient-text text-5xl font-bold mb-3">
          Beyond Coding
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Here's a little more about who I am outside of programming and
          what keeps me motivated every day.
        </p>

      </div>

      {/* Top Cards */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="glass-card text-center hover:-translate-y-2 transition-all duration-300">

          <div className="text-6xl mb-5">
            💻
          </div>

          <h2 className="text-2xl font-bold text-white mb-3">
            I Love Building
          </h2>

          <p className="text-slate-400 leading-7">
            Turning ideas into functional web applications is one of my
            favorite challenges.
          </p>

        </div>

        <div className="glass-card text-center hover:-translate-y-2 transition-all duration-300">

          <div className="text-6xl mb-5">
            🎮
          </div>

          <h2 className="text-2xl font-bold text-white mb-3">
            Gaming
          </h2>

          <p className="text-slate-400 leading-7">
            I enjoy playing games that challenge strategy, teamwork, and
            problem-solving.
          </p>

        </div>

        <div className="glass-card text-center hover:-translate-y-2 transition-all duration-300">

          <div className="text-6xl mb-5">
            📚
          </div>

          <h2 className="text-2xl font-bold text-white mb-3">
            Always Learning
          </h2>

          <p className="text-slate-400 leading-7">
            I spend time exploring new frameworks, development tools, and
            modern technologies to improve my skills.
          </p>

        </div>

      </div>

      {/* Quote */}

      <div className="glass-card mt-8 p-10 text-center">

        <div className="text-5xl mb-4">
          💡
        </div>

        <blockquote className="text-2xl italic text-slate-200 leading-10">
          "Every project is an opportunity to learn something new and become
          a better developer than yesterday."
        </blockquote>

      </div>

      {/* Interests */}

      <div className="grid md:grid-cols-4 gap-5 mt-8">

        {[
          {
            emoji: "🌐",
            title: "Web Development",
          },
          {
            emoji: "🎨",
            title: "UI Design",
          },
          {
            emoji: "🚀",
            title: "New Technology",
          },
          {
            emoji: "🤝",
            title: "Collaboration",
          },
        ].map((item) => (

          <div
            key={item.title}
            className="glass-card text-center hover:bg-blue-500/10 transition"
          >

            <div className="text-4xl mb-3">
              {item.emoji}
            </div>

            <p className="font-semibold text-white">
              {item.title}
            </p>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="text-center mt-8">

        <p className="text-slate-500 text-lg">
          Outside of coding, I believe curiosity and consistency are the
          keys to continuous growth.
        </p>

      </div>

    </div>
  );
}