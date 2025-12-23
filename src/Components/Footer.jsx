export default function Footer( onHome,
  onAbout,
  onSkills,
  onProjects,
  onContact,) {
  return (
    <footer className="relative bg-[#050b14] border-t border-white/10 ">
      {/* Subtle glow */}
      <div
        className="absolute inset-0 
        bg-[radial-gradient(circle_at_bottom,#0dd3e012,transparent_60%)]"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400">

          {/* Left */}
          <p>
            © 2025 Niresh Shakya.
            <span className="text-[#0dd3e0]">♥</span> All rights reserved.
          </p>


        </div>
      </div>
    </footer>
  );
}
