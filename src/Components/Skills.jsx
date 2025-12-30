export default function Skills() {
  
  return (
    <section className="relative py-24 bg-[#050b14] overflow-hidden">

      {/* Background glow */}
      <div
        className="absolute inset-0 
        bg-[radial-gradient(circle_at_right,#0dd3e015,transparent_50%)]"
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-[#0dd3e0] mb-4">
            SKILLS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Technical <span className="text-[#0dd3e0]">Expertise</span>
          </h2>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <SkillCard
            title="Frontend"
            skills={[
              "HTML5",
              "CSS3",
              "React",
              "JavaScript",
              "Next.js",
              "Tailwind CSS",
              "Redux"
            ]}
          />

          <SkillCard
            title="Backend"
            skills={[
              "Node.js",
              "Express.js",
              "PHP",
              "PostgreSQL",
              "MongoDB",
              "MySQL",
            ]}
          />

          <SkillCard
            title="Tools & Others"
            skills={[
              "Postman",
              "REST APIs",
              "Vercel",
              "Netlify",
              "Git",
              "GitHub",
              "Figma",
              "Canva",
            ]}
          />

        </div>

        {/* Bottom tech pills */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Technologies I work with
          </p>

          <div className="flex min-w-full shrink-0 gap-12 py-4 w-max flex-nowrap animate-scroll">
            {[
              "React",
              "JavaScript",
              "Node.js",
              "Express.js",
              "HTML5",
              "CSS3",
              "MongoDB",
              "MySQL",
              "Git",
              "GitHub",
              "Tailwind CSS",
              "Postman",
              "Figma",
              "Vercel",
              "Netlify"
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-4 py-2 rounded-full text-sm
                  bg-[#0b1320]/70 backdrop-blur
                  border border-white/10
                  hover:border-[#0dd3e0]/40 hover:text-[#0dd3e0]
                  transition cursor-default
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

function SkillCard({ title, skills }) {
  return (
    <div
      className="
        bg-white/5 backdrop-blur-xl
        border border-white/10
        rounded-2xl p-6
        shadow-[0_0_30px_#00000040]
        hover:border-[#0dd3e0]/40
        transition
      "
    >
      <h3 className="flex items-center gap-3 mb-6 font-semibold">
        <span className="w-2 h-2 rounded-full bg-[#0dd3e0]" />
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-3 py-1.5 text-sm rounded-full
              bg-[#0b1c2d]/80
              border border-white/10
              hover:border-[#0dd3e0]/40 hover:text-[#0dd3e0]
              transition
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
