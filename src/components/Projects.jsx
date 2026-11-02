import React, { useState } from 'react';
import { ExternalLink, Github, Info, Sparkles, FolderGit2, Shield, HeartPulse, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-100/40 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-100/70 dark:bg-sky-950/70 border border-sky-300/40 dark:border-sky-800">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Real Software Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Live deployed applications engineered with modern full-stack architectures, real-time threat intelligence, and user-centric design.
          </p>
        </div>

        {/* Projects Grid: 2 High-Impact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl flex flex-col transform hover:-translate-y-1.5"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Pill Over Image */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-slate-900/90 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                    {project.id === 'osint-fraud-framework' ? <Shield className="w-3.5 h-3.5 text-cyan-400" /> : <HeartPulse className="w-3.5 h-3.5 text-rose-400" />}
                    <span>{project.category}</span>
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-emerald-300 bg-emerald-950/90 backdrop-blur-md border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Cloud Deployed</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Action Links */}
                <div className="pt-5 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500 transition-colors"
                  >
                    <Info className="w-4 h-4" />
                    <span>Architecture Details</span>
                  </button>

                  <div className="flex items-center gap-2.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-md shadow-sky-500/25 transition-transform active:scale-95"
                    >
                      <span>Launch Live App</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Company Work Mention Banner */}
        <div className="mt-14 max-w-4xl mx-auto glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Commercial Software Engineering</h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Proprietary commercial features built at <span className="font-semibold text-sky-600 dark:text-sky-400">V-RISE INFOTECH PVT LTD</span> are highlighted under Commercial Experience.
              </p>
            </div>
          </div>
          <a
            href="#about"
            className="px-4 py-2 rounded-xl text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 border border-sky-300 dark:border-sky-800 hover:bg-sky-100 transition-all flex-shrink-0"
          >
            View Experience ↑
          </a>
        </div>

      </div>

      {/* Project Modal Preview */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
