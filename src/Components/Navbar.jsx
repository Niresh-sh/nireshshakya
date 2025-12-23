export default function Navbar({
  onHome,
  onAbout,
  onSkills,
  onProjects,
  onContact,
}) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050b14]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide">
          Niresh Shakya<span className="text-[#0dd3e0]">.</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-sm text-gray-400">
          {[
            ["Home", onHome],
            ["About", onAbout],
            ["Skills", onSkills],
            ["Projects", onProjects],
            ["Contact", onContact],
          ].map(([label, action]) => (
            <li
              key={label}
              onClick={action}
              className="cursor-pointer hover:text-[#0dd3e0] transition"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
