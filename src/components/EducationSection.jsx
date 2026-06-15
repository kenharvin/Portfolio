export default function EducationSection() {
  return (
    <div className="h-full flex flex-col justify-center">

      {/* Header */}

      <div className="mb-10">
        <h1 className="gradient-text text-5xl font-bold mb-3">
          Education
        </h1>

        <p className="text-slate-400 text-lg">
          My academic journey and continuous pursuit of knowledge.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8">

        {/* Timeline */}

        <div className="glass-card">

          <h2 className="text-2xl font-bold text-blue-300 mb-8">
            🎓 Academic Journey
          </h2>

          <div className="space-y-10">

            {/* College */}

            <div className="flex gap-6">

              <div className="flex flex-col items-center">

                <div className="w-5 h-5 rounded-full bg-blue-500"></div>

                <div className="w-1 flex-1 bg-blue-500/30 mt-2"></div>

              </div>

              <div>

                <h3 className="text-2xl font-semibold text-white">
                  ACLC College of Taytay
                </h3>

                <p className="text-blue-300 mb-2">
                  Bachelor of Science in Information Technology
                </p>

                <p className="text-slate-400">
                  2022 – Present
                </p>

                <p className="text-slate-500 mt-3 leading-7">
                  Currently pursuing my degree while building web
                  applications and strengthening my skills in frontend and
                  backend development.
                </p>

              </div>

            </div>

            {/* Senior High */}

            <div className="flex gap-6">

              <div className="flex flex-col items-center">

                <div className="w-5 h-5 rounded-full bg-cyan-500"></div>

                <div className="w-1 flex-1 bg-cyan-500/30 mt-2"></div>

              </div>

              <div>

                <h3 className="text-xl font-semibold text-white">
                  Juan Sumulong Memorial Junior College
                </h3>

                <p className="text-slate-400">
                  Secondary Education
                </p>

                <p className="text-slate-500">
                  2014 – 2020
                </p>

              </div>

            </div>

            {/* Elementary */}

            <div className="flex gap-6">

              <div className="flex flex-col items-center">

                <div className="w-5 h-5 rounded-full bg-blue-300"></div>

              </div>

              <div>

                <h3 className="text-xl font-semibold text-white">
                  Dolores Elementary School
                </h3>

                <p className="text-slate-400">
                  Primary Education
                </p>

                <p className="text-slate-500">
                  2008 – 2014
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Side Cards */}

        <div className="flex flex-col gap-6">

          <div className="glass-card text-center">

            <div className="text-5xl mb-4">
              🎓
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              BSIT Student
            </h3>

            <p className="text-slate-400">
              Currently pursuing Information Technology with a focus on
              software and web development.
            </p>

          </div>

          <div className="glass-card text-center">

            <div className="text-5xl mb-4">
              🚀
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              Practical Learning
            </h3>

            <p className="text-slate-400">
              Applying classroom knowledge through personal and academic
              projects like Progresstify.
            </p>

          </div>

          <div className="glass-card text-center">

            <div className="text-5xl mb-4">
              📚
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              Lifelong Learner
            </h3>

            <p className="text-slate-400">
              Always exploring new technologies, frameworks, and best
              practices in software development.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}