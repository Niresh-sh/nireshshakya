import React from "react";
import home from "../assets/home.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import { CgLivePhoto } from "react-icons/cg";

function Projects() {
  const githubUrl = "https://github.com/Niresh-sh";
  return (
    <>
      <section className="relative py-24 bg-[#050b14] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_left,#0dd3e015,transparent_45%)]"
        ></div>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-sm text-cyan-400 uppercase tracking-widest mb-2">
              Projects
            </p>
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience in building web applications.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#0f1629] rounded-xl border border-white/10 overflow-hidden hover:border-cyan-400 transition">
              <img src={home} alt="" className="h-44 w-full object-cover" />
              <div className="p-5">
                <span className="text-xs bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full">
                  Featured
                </span>
                <h3 className="text-lg font-semibold mt-4">
                  E-Commerce Platform
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  A full-stack e-commerce platform with user authentication,
                  product management, shopping cart, and Khalti payment
                  integration.
                </p>
                <div className="flex gap-2 flex-wrap mt-4 text-xs text-gray-300">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Express.js</span>
                  <span>Tailwind CSS</span>
                  <span>REST APIs</span>
                  <span>Postman</span>
                  <span>Git</span>
                  <span>Redux</span>
                  <span>Khalti</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0f1629] rounded-xl border border-white/10 overflow-hidden hover:border-cyan-400 transition">
              <img src={img1} alt="" className="h-44 w-full object-cover" />
              <div className="p-5">
                <span className="text-xs bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full">
                  Featured
                </span>
                <h3 className="text-lg font-semibold mt-4">
                  Trek Management System
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  A trek management application with updates about trekking
                  routes, packages for trekkers and multiple trekking options.
                </p>
                <div className="flex gap-2 flex-wrap mt-4 text-xs text-gray-300">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>PHP</span>
                  <span>MySql</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0f1629] rounded-xl border border-white/10 overflow-hidden hover:border-cyan-400 transition">
              <img src={img2} alt="" className="h-44 w-full object-cover" />
              <div className="p-5">
                <span className="text-xs bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full">
                  Featured
                </span>
                <h3 className="text-lg font-semibold mt-4">
                  Trip Planner System
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  An online trip planner system that allows users to plan and
                  organize their trips effectively.
                </p>
                <div className="flex gap-2 flex-wrap mt-4 text-xs text-gray-300">
                  <span>REACT Js</span>
                  <span>Tailwind CSS</span>
                  <span>Node Js</span>
                  <span>Express Js</span>
                  <span>MongoDB</span>
                  <span>REST APIs</span>
                  <span>Postman</span>
                  <span>Git</span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-cyan-400 text-2xl"><CgLivePhoto /></span>
                  <a
                    href="https://trip-planner-system.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cyan-400 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-14">
            <a
              href="https://github.com/Niresh-sh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/20 px-6 py-3 rounded-lg hover:border-cyan-400 transition"
            >
              View More on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
