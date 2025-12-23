import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"

export default function Hero({ onProjects, onContact }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050b14] m-2">

      {/* Background */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_top,#0dd3e020,transparent_45%)]
        opacity-80" />

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
            border border-[#0dd3e0]/40 text-[#0dd3e0] text-xs mb-8">
            ● Available for opportunities
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-[#0dd3e0]">Niresh Shakya</span>
          </h1>

          <p className="mt-4 text-xl text-gray-300">
            Full Stack Developer
          </p>

          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            Building digital experiences that blend creativity with functionality.
            Passionate about clean code and innovative solutions.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={onProjects}
              className="bg-[#0dd3e0] text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              View Projects
            </button>

            <button
              onClick={onContact}
              className="border border-gray-600 px-6 py-3 rounded-lg hover:border-[#0dd3e0] transition"
            >
              Contact Me
            </button>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-10">
            <a
              href="https://github.com/Niresh-sh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center
              hover:border-[#0dd3e0] hover:text-[#0dd3e0] transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/niresh-shakya-34b362259/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center
              hover:border-[#0dd3e0] hover:text-[#0dd3e0] transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:neerace.sh@gmail.com"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center
              hover:border-[#0dd3e0] hover:text-[#0dd3e0] transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center relative">
          <div className="relative w-72 h-72 flex items-center justify-center rounded-full
            border border-[#0dd3e0]/40">

            <div className="absolute w-90 h-90 rounded-full border border-[#0dd3e0]/20" />
            <div className="absolute w-107.5 h-107.5 rounded-full border border-[#0dd3e0]/10" />

            <span className="text-6xl font-bold text-[#0dd3e0]">NS</span>
          </div>
        </div>

      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
        Scroll down
        <ChevronDown className="w-6 h-6 text-slate-500 mx-auto animate-bounce" />
      </div>
    </section>
  )
}
