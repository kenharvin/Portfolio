import { useState } from "react";

export default function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("kenlacanienta93@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

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

                <div>

                  <h4 className="text-slate-400 text-sm">
                    Email:
                  </h4>

                  <a
                    className="text-lg text-white hover:text-white-300 transition"
                  >
                    kenlacanienta93@gmail.com
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div>

                  <h4 className="text-slate-400 text-sm">
                    GitHub:
                  </h4>

                  <a
                    
                    className="text-lg !text-white hover:text-cyan-300 transition"
                  >
                    github.com/kenharvin
                  </a>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div>

                  <h4 className="text-slate-400 text-sm">
                    Location:
                  </h4>

                  <p className="text-lg text-white">
                    Alfonso, Cavite, Philippines
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

                <button
                onClick={copyEmail}
                className="btn-outline"
              >
                {emailCopied ? "✅ Copied!" : "📋 Copy Email"}
              </button>

                <a
                  href="https://github.com/kenharvin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  💻 GitHub
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