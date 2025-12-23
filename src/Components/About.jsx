import { Code, Briefcase, Target, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <section className="relative py-24 bg-[#050b14] overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_left,#0dd3e015,transparent_40%)]">
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        {/* Section title */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-[#0dd3e0] mb-4">
            ABOUT ME
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Passionate Developer with a{" "}
            <span className="text-[#0dd3e0]">Creative Mind</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT CARD */}
          <div className="bg-[#0b1320]/80 backdrop-blur-md border border-white/10 
            rounded-2xl p-8 text-gray-400 leading-relaxed">

            <p className="mb-6">
              I'm a passionate Full Stack Developer with 
              experience in creating dynamic and responsive web applications.
              My journey in tech started with a curiosity about how things work,
              and it evolved into a career where I get to build solutions that
              make a difference.
            </p>

            <p className="mb-6">
              I specialize in modern JavaScript frameworks, particularly React
              and Node.js, and I'm always excited to learn new technologies.
              When I'm not coding, you'll find me exploring new tech trends,
              contributing to open-source projects, or enjoying a good cup of
              coffee.
            </p>

            <p>
              My approach to development is centered around clean, maintainable
              code and creating exceptional user experiences. I believe in
              continuous learning and staying up-to-date with the latest
              industry trends.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">

            {/* Card */}
            {/* <InfoCard
              icon={<Briefcase size={22} />}
              title="5+ Years Experience"
              desc="Building scalable web applications"
            />

            <InfoCard
              icon={<Code size={22} />}
              title="50+ Projects"
              desc="Delivered successfully to clients"
            /> */}

            <InfoCard
              icon={<Lightbulb size={22} />}
              title="Problem Solver"
              desc="Creative solutions for complex challenges"
            />

            <InfoCard
              icon={<Target size={22} />}
              title="Goal Oriented"
              desc="Focused on delivering results"
            />

          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, title, desc }) {
  return (
    <div className="bg-[#0b1320]/80 backdrop-blur-md border border-white/10 
      rounded-xl p-6 hover:border-[#0dd3e0]/40 transition">

      <div className="w-12 h-12 mb-4 rounded-lg bg-[#0dd3e0]/10 
        flex items-center justify-center text-[#0dd3e0]">
        {icon}
      </div>

      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  )
}
