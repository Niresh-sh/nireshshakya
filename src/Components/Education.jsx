import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_right,#0c1b2a,#05080f)] text-white px-6 sm:px-16 py-20">
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
      <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start md:gap-15">
        {/* Vertical Line */}
        <div className="absolute md:relative w-0.5 md:h-50 h-0.75 bg-cyan-400 md:mx-0 mx-auto md:mb-0 mb-10 shrink-0 md:grow-0">
          {/* Dots */}
          <span className="absolute md:relative top-[27.5px] md:top-auto left-1/2 md:left-auto w-2.5 h-2.5 bg-cyan-400 rounded-full -translate-x-1/2 md:translate-x-0 md:mx-auto md:mb-6 md:block hidden" />
          <span className="absolute md:relative top-27.5 md:top-auto left-1/2 md:left-auto w-2.5 h-2.5 bg-cyan-400 rounded-full -translate-x-1/2 md:translate-x-0 md:mx-auto md:mb-6 md:block hidden" />
          <span className="absolute md:relative top-42.5 md:top-auto left-1/2 md:left-auto w-2.5 h-2.5 bg-cyan-400 rounded-full -translate-x-1/2 md:translate-x-0 md:mx-auto md:mb-0 md:block hidden" />
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-10 w-full max-w-225">
          {/* Card 1 - LEFT */}
          <div className="w-full md:w-105 bg-[#0b1626] border border-cyan-400/30 rounded-xl p-6 shadow-[0_0_35px_rgba(0,194,209,0.12)] md:-ml-105 mx-auto">
            {/* Top Row: Icon + Title */}
            <div className="flex items-start gap-4 mb-4">
              {/* Icon */}
              <div className="w-11 h-11 bg-cyan-400/20 rounded-lg flex items-center justify-center shrink-0">
                <GraduationCap size={20} />
              </div>

              {/* Title */}
              <div>
                <h3 className="text-lg font-semibold leading-tight">
                  Secondary Education Examination (SEE)
                </h3>
                <h4 className="text-sm text-cyan-400 mt-1">
                  Moonlight Secondary School
                </h4>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-slate-400 mb-4">
              <span className="flex items-center gap-1">2005-2016</span>
              <span className="flex items-center gap-1">Lalitpur, Nepal</span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed">
              I completed my Secondary Education Examination (SEE) from Moonlight
              Secondary School, where I built a strong academic foundation and
              developed essential skills for my future studies.
            </p>
          </div>

          {/* Card 2 - RIGHT */}
          <div className="w-full md:w-105 bg-linear-to-br from-[#0b1626] to-[#0a1220] border border-cyan-400/30 rounded-xl p-6 shadow-[0_0_35px_rgba(0,194,209,0.08)] md:ml-105 mx-auto">
            {/* Top Row */}
            <div className="flex items-start gap-4 mb-4">
              {/* Icon */}
              <div className="w-11 h-11 bg-cyan-400/15 rounded-lg flex items-center justify-center shrink-0">
                <GraduationCap size={20} />
              </div>

              {/* Title */}
              <div>
                <h3 className="text-lg font-semibold text-white leading-tight">
                  +2 in Business Studies
                </h3>
                <p className="text-sm text-cyan-400 mt-1">MOLIHSS</p>
              </div>
            </div>

            {/* Meta */}
            <div className="flex gap-5 text-xs text-slate-400 mb-3">
              <span className="flex items-center gap-1">2017 – 2019</span>
              <span className="flex items-center gap-1">Lalitpur, Nepal</span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-300">
              I completed my +2 in Business Studies from MOLIHSS, where I gained
              valuable knowledge in business concepts and developed skills that
              have been instrumental in my academic and professional journey.
            </p>
          </div>

          {/* Card 3 - LEFT */}
          <div className="w-full md:w-105 bg-[#0b1626] border border-cyan-400/30 rounded-xl p-6 shadow-[0_0_35px_rgba(0,194,209,0.12)] md:-ml-105 mx-auto">
            {/* Top Row: Icon + Title */}
            <div className="flex items-start gap-4 mb-4">
              {/* Icon */}
              <div className="w-11 h-11 bg-cyan-400/20 rounded-lg flex items-center justify-center shrink-0">
                <GraduationCap size={20} />
              </div>

              {/* Title */}
              <div>
                <h3 className="text-lg font-semibold leading-tight">
                  Bachelor in Computer Application
                </h3>
                <h4 className="text-sm text-cyan-400 mt-1">
                  Tribhuvan University
                </h4>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-sm text-slate-400 mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                2020 - 2025
              </span>
              <span className="flex items-center gap-1">Kathmandu, Nepal</span>
            </div>

            {/* Description */}
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
