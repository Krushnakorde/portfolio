import React, { useState } from 'react';
import { GraduationCap, Briefcase, Award, Compass, Zap, CheckCircle2, BookOpen, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-100/70 dark:bg-sky-950/70 border border-sky-300/40 dark:border-sky-800">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Full Stack Developer with commercial experience and an MCA scholar at Savitribai Phule Pune University.
          </p>
        </div>

        {/* 2-Column Grid: Left Story & Highlights, Right Experience & Education Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Personal Story & Strengths (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <BookOpen className="w-6 h-6 text-sky-500" />
                <span>My Developer & Academic Background</span>
              </h3>
              {about.story.map((paragraph, idx) => (
                <p key={idx} className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Pillars / Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 transition-all hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-500 flex-shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tabbed Experience & Education (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tab switch buttons */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 max-w-fit">
              <button
                onClick={() => setActiveTab('experience')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Commercial Experience</span>
              </button>

              <button
                onClick={() => setActiveTab('education')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'education'
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Education & Credentials</span>
              </button>
            </div>

            {/* Experience Panel */}
            {activeTab === 'experience' && (
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm animate-fadeIn">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                  <Building2 className="w-5 h-5 text-sky-500" />
                  <span>Work & Industry History</span>
                </h3>

                <div className="relative border-l-2 border-sky-300 dark:border-sky-900/60 ml-3.5 space-y-8 py-2">
                  {about.experience.map((exp, idx) => (
                    <div key={idx} className="relative pl-7 group">
                      <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-500 group-hover:bg-sky-500 transition-colors" />
                      
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
                          {exp.period}
                        </span>
                        <span className="text-xs text-slate-400">{exp.location}</span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                        {exp.company}
                      </p>

                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-sky-500 mt-0.5">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education Panel */}
            {activeTab === 'education' && (
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm animate-fadeIn">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                  <GraduationCap className="w-5 h-5 text-indigo-500" />
                  <span>Degrees & Specialized Certifications</span>
                </h3>

                <div className="relative border-l-2 border-indigo-300 dark:border-indigo-900/60 ml-3.5 space-y-8 py-2">
                  {about.education.map((edu, idx) => (
                    <div key={idx} className="relative pl-7 group">
                      <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors" />
                      
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 mb-1.5">
                        {edu.period}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mb-1.5">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2 leading-relaxed">
                        {edu.description}
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Tech Highlights Badge Container */}
            <div className="glass-card p-5 rounded-3xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Verified Resume Available</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">View complete PDF credentials</p>
              </div>
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download="Krushna_Bharat_Korde_Resume.pdf"
                className="px-4 py-2 rounded-xl text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 border border-sky-300 dark:border-sky-800 hover:bg-sky-100 dark:hover:bg-sky-900/40 transition-all"
              >
                Open Resume PDF ↗
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
