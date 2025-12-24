import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_right,#0c1b2a,#05080f)] text-white px-4 sm:px-16 py-20">
      {/* Header */}
      <div className="text-center mb-24">
        <span className="block text-xs tracking-[0.25em] text-cyan-400 mb-3">
          EDUCATION
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Academic <span className="text-cyan-400">Background</span>
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative flex flex-col items-center md:justify-center">
        {/* Vertical Line */}
        <div className="absolute md:w-0.5 md:h-210 w-[90%] h-0.5 bg-cyan-400 top-7 md:top-0 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0" />
        <span className="relative top-40  left-1/2 md:left-auto w-2.5 h-2.5 bg-cyan-400 rounded-full -translate-x-1/2 md:translate-x-0 md:mx-auto" />
        <span className="relative top-110 left-1/2 md:left-auto w-2.5 h-2.5 bg-cyan-400 rounded-full -translate-x-1/2 md:translate-x-0 md:mx-auto" />
        <span className="relative top-170 left-1/2 md:left-auto w-2.5 h-2.5 bg-cyan-400 rounded-full -translate-x-1/2 md:translate-x-0 md:mx-auto" />

        {/* Cards */}
        <div className="flex flex-col gap-8 w-full max-w-225">
          {/* Card 1 - LEFT */}
          <div className="w-full md:w-105 bg-[#0b1626] border border-cyan-400/30 rounded-xl p-6 shadow-[0_0_35px_rgba(0,194,209,0.12)] md:-ml-5 mx-auto">
            {/* Top Row: Icon + Title */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 bg-cyan-400/20 rounded-lg flex items-center justify-center shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-tight">
                  Secondary Education Examination (SEE)
                </h3>
                <h4 className="text-sm text-cyan-400 mt-1">
                  Moonlight Secondary School
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400 mb-4 flex-wrap">
              <span className="flex items-center gap-1">2005-2016</span>
              <span className="flex items-center gap-1">Lalitpur, Nepal</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              I completed my Secondary Education Examination (SEE) from Moonlight
              Secondary School, where I built a strong academic foundation and
              developed essential skills for my future studies.
            </p>
          </div>

          {/* Card 2 - RIGHT */}
          <div className="w-full md:w-105 bg-linear-to-br from-[#0b1626] to-[#0a1220] border border-cyan-400/30 rounded-xl p-6 shadow-[0_0_35px_rgba(0,194,209,0.08)] md:ml-125 mx-auto">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 bg-cyan-400/15 rounded-lg flex items-center justify-center shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white leading-tight">
                  +2 in Business Studies
                </h3>
                <p className="text-sm text-cyan-400 mt-1">MOLIHSS</p>
              </div>
            </div>
            <div className="flex gap-5 text-xs text-slate-400 mb-3 flex-wrap">
              <span className="flex items-center gap-1">2017 – 2019</span>
              <span className="flex items-center gap-1">Lalitpur, Nepal</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              I completed my +2 in Business Studies from MOLIHSS, where I gained
              valuable knowledge in business concepts and developed skills that
              have been instrumental in my academic and professional journey.
            </p>
          </div>

          {/* Card 3 - LEFT */}
          <div className="w-full md:w-105 bg-[#0b1626] border border-cyan-400/30 rounded-xl p-6 shadow-[0_0_35px_rgba(0,194,209,0.12)] md:-ml-5 mx-auto">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 bg-cyan-400/20 rounded-lg flex items-center justify-center shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-tight">
                  Bachelor in Computer Application
                </h3>
                <h4 className="text-sm text-cyan-400 mt-1">
                  Tribhuvan University
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400 mb-4 flex-wrap">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                2020 - 2025
              </span>
              <span className="flex items-center gap-1">Kathmandu, Nepal</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              I am currently pursuing my Bachelor's degree in Computer
              Application at Tribhuvan University. This program is enhancing my
              technical skills and preparing me for a career in software
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
