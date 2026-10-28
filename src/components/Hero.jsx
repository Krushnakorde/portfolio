import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Terminal, Database, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, stats } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-sky-400/20 to-indigo-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-sky-300/15 dark:bg-sky-500/10 rounded-full blur-2xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/15 dark:bg-purple-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Grid: Introduction on Left, Photo Beside on Right (Stacks on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Details (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-sky-300/40 dark:border-sky-500/30 text-xs sm:text-sm font-medium text-slate-800 dark:text-sky-300 shadow-sm animate-pulse-slow">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personal.statusBadge}</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
                Hello World, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                <span className="text-gradient">{personal.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 flex items-center justify-center lg:justify-start gap-2">
                <span>{personal.role}</span>
              </h2>
            </div>

            {/* Intro Bio Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {personal.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold text-slate-800 dark:text-slate-200 glass-card hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-all border border-slate-300 dark:border-slate-700 transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-sky-500" />
                <span>Contact Me</span>
              </a>

              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
                title="Download Alex's Resume"
              >
                <Download className="w-4 h-4" />
                <span>Resume / CV</span>
              </a>
            </div>

            {/* Social Connect Icons */}
            <div className="flex items-center gap-4 pt-4 text-slate-600 dark:text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg glass-card hover:text-sky-500 hover:border-sky-500 transition-all transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg glass-card hover:text-sky-500 hover:border-sky-500 transition-all transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-lg glass-card hover:text-sky-500 hover:border-sky-500 transition-all transform hover:scale-110"
                aria-label="Email Me Directly"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Photo of Yourself placed beside Introduction (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square group">
              
              {/* Animated decorative gradient ring & glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 blur-xl opacity-70 group-hover:opacity-100 transition-opacity animate-glow" />
              
              {/* Outer decorative ring border */}
              <div className="absolute -inset-2 rounded-full border-2 border-dashed border-sky-400/40 dark:border-sky-400/30 animate-spin-slow pointer-events-none" />

              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl bg-slate-900">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge 1: Top Right (React & Frontend) */}
              <div className="absolute -top-2 -right-2 glass-card px-3.5 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-lg border border-sky-400/30 animate-float">
                <Code2 className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">React & Tailwind</span>
              </div>

              {/* Floating Badge 2: Bottom Left (Full-Stack & Cloud) */}
              <div className="absolute -bottom-3 -left-3 glass-card px-3.5 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-lg border border-indigo-400/30 animate-float [animation-delay:2s]">
                <Database className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Full Stack & Cloud</span>
              </div>

              {/* Floating Badge 3: Terminal / Code */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 glass-card p-2 rounded-xl shadow-lg border border-emerald-400/30 hidden sm:flex items-center justify-center animate-float [animation-delay:4s]">
                <Terminal className="w-5 h-5 text-emerald-400" />
              </div>

            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl text-center border border-slate-200/80 dark:border-slate-800 hover:border-sky-500/40 transition-all hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 dark:text-sky-400 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
