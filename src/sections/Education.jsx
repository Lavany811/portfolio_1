import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400 shrink-0">
            <BookOpen size={40} />
          </div>
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Bachelor of Technology in Information Technology</h3>
            <h4 className="text-xl text-blue-600 dark:text-blue-400 mt-2 font-medium">G.H. Raisoni College of Engineering</h4>
            <div className="mt-4 text-slate-600 dark:text-slate-300 flex flex-col sm:flex-row items-center sm:gap-4 justify-center md:justify-start">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Graduation Year: 2026
              </span>
              <span className="hidden sm:block text-slate-300 dark:text-slate-600">|</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                CGPA: 8.0/10.0
              </span>
            </div>
            <p className="mt-6 text-slate-600 dark:text-slate-400">
              Core coursework included Data Structures, Algorithms, Database Management Systems, Object-Oriented Programming, and Web Technologies. Actively participated in technical fests and coding competitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
