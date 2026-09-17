import React from 'react';
import { User, Code, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-500 to-purple-500 p-1 shadow-xl">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <span className="text-[120px] drop-shadow-xl">👩‍💻</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300">
            <p>
              I am a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Java Full Stack Developer</span> and a B.Tech IT graduate. 
              I specialize in building robust, scalable applications using modern technologies across the stack.
            </p>
            <p>
              My expertise lies in backend development with Java and Spring Boot, paired with dynamic frontend interfaces built in React.js. I thrive in creating seamless user experiences and optimizing database architectures.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Development</h4>
                  <p className="text-sm">Full Stack Solutions</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Education</h4>
                  <p className="text-sm">B.Tech in IT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
