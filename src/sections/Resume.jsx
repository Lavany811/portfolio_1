import React from 'react';
import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-blue-600 dark:bg-blue-900 text-white transition-colors relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to review my full profile?
        </h2>
        <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
          Download my comprehensive resume to get an in-depth overview of my skills, experience, and educational background.
        </p>
        <a 
          href="/resume/Lavanya-Ingole-Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-full font-bold transition-all hover:scale-105 shadow-xl"
        >
          <Download size={20} />
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
}
