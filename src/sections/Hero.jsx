import React from 'react';
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-overlay" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-4 tracking-wide">
          Hi, I'm
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
            Lavanya Ingole
          </span>
        </h1>
        <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-400 mb-8 font-light max-w-2xl mx-auto">
          Java Full Stack Developer
        </p>
        
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          Passionate about building scalable web applications and solving complex problems using modern technologies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            View Projects
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a
            href="https://drive.google.com/file/d/1Sm03w9BODtr4bFwlb-GoOCd1QtrFYZM7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-full transition-all hover:scale-105 shadow-md"
          >
             Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <a href="https://github.com/Lavany811" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full shadow-sm hover:shadow-md hover:text-primary-600 dark:hover:text-primary-500 transition-all hover:-translate-y-1">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/lavany-ingole-40a102341/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full shadow-sm hover:shadow-md hover:text-primary-600 dark:hover:text-primary-500 transition-all hover:-translate-y-1">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:ingolelavany60@gmail.com" className="p-3 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full shadow-md hover:scale-110 transition-all">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
