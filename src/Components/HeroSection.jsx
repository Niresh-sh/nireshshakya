import { useState } from "react"
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  FileText,
  Download,
  X
} from "lucide-react"


export default function Hero({ onProjects, onContact }) {
  const [isCVOpen, setIsCVOpen] = useState(false)

  const handleDownloadCV = () => {
    const link = document.createElement("a")
  link.href = "/nireshcv.jpeg"
    link.download = "Niresh_Shakya_CV.jpeg"
    link.click()
  }

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden mt-1"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-[#050b14] via-[#050b14] to-[#0dd3e0]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(13,211,224,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(13,211,224,0.08),transparent_55%)]" />

        {/* Grid */}
        <div className="absolute inset-0 
          bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-size[60px_60px]
          mask-image[radial-gradient(ellipse_at_center,black_25%,transparent_70%)]
        " />

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-[#0dd3e0]/10 border border-[#0dd3e0]/30 text-[#0dd3e0]
              text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0dd3e0] animate-pulse" />
              Available for opportunities
            </span>

            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-[#0dd3e0] via-cyan-300 to-[#0dd3e0]
                bg-size[200%_100%] bg-clip-text text-transparent animate-gradient">
                Niresh Shakya
              </span>
            </h1>

            <p className="mt-4 text-xl md:text-2xl text-gray-300">
              Full Stack Developer
            </p>

            <p className="mt-6 text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Building digital experiences that blend creativity with functionality.
              Passionate about clean code and innovative solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
              <button
                onClick={onProjects}
                className="px-6 py-3 rounded-lg font-semibold
                bg-[#0dd3e0] text-black hover:opacity-90 transition shadow-lg"
              >
                View Projects
              </button>

              <button
                onClick={onContact}
                className="px-6 py-3 rounded-lg font-semibold
                border border-gray-600 hover:border-[#0dd3e0] transition"
              >
                Contact Me
              </button>

              <button
                onClick={() => setIsCVOpen(true)}
                className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2
                border border-gray-600
                hover:border-[#0dd3e0] hover:text-[#0dd3e0]
                transition"
              >
                <FileText size={18} />
                View CV
              </button>
            </div>

            {/* Socials */}
            <div className="flex justify-center md:justify-start gap-4 mt-10">
              {[ 
                { href: "https://github.com/Niresh-sh", icon: Github },
                { href: "https://www.linkedin.com/in/niresh-shakya-34b362259/", icon: Linkedin },
                { href: "mailto:neerace.sh@gmail.com", icon: Mail },
              ].map(({ href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#0f172a]
                  hover:bg-[#0dd3e0] hover:text-black
                  transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center relative">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full
                bg-linear-to-r from-[#0dd3e0] to-cyan-400
                opacity-20 blur-3xl animate-pulse" />

              <div className="absolute inset-0 rounded-full border-2 border-[#0dd3e0]/40 animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-[#0dd3e0]/20 animate-spin-reverse" />

              <div className="absolute inset-10 rounded-full bg-linear-to-br
                from-[#0dd3e0]/20 to-cyan-400/20 p-1">
                <div className="w-full h-full rounded-full bg-[#050b14]
                  flex items-center justify-center text-6xl md:text-7xl
                  font-bold text-[#0dd3e0]">
                  <img src="/src/assets/icon.jpg" className="rounded-full w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2
          hidden md:flex flex-col items-center gap-2 text-gray-400 text-sm">
          Scroll down
          <ChevronDown className="w-6 h-6 text-[#0dd3e0] animate-bounce" />
        </div>
      </section>

      {/* CV MODAL */}
      {isCVOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-[#050b14] w-200  max-w-4xl rounded-xl border border-gray-700 overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold">My Resume / CV</h2>
              <button
                onClick={() => setIsCVOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-800 transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Preview */}
            <div className="h-[60vh] bg-black">
              <iframe
                src="/nireshcv.jpeg"
                title="CV Preview"
                className="w-full h-full"
              />
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700">
              <button
                onClick={handleDownloadCV}
                className="w-full flex items-center justify-center gap-2
                bg-[#0dd3e0] text-black font-semibold py-3 rounded-lg
                hover:opacity-90 transition"
              >
                <Download size={18} />
                Download CV
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
