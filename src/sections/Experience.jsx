import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Web Development Intern",
    company: "AB Infotech Solutions",
    duration: "Dec 2025 - May 2026",
    description: [
      "Developed web applications using Java, Spring Boot, and React.",
      "Collaborated with cross-functional teams to design and implement REST APIs.",
      "Improved database query performance using MySQL indexing strategies."
    ]
  },
  {
    role: "Web Development Intern",
    company: "Prodigy InfoTech",
    duration: "1 April 2025 - April 2025",
    description: [
      "Built interactive user interfaces and responsive web pages.",
      "Integrated third-party APIs and managed state with React Context.",
      "Participated in agile workflows and daily stand-ups."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-0">
              <div className="hidden sm:block absolute left-[50%] -ml-[0.5px] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700"></div>
              
              <div className={`sm:flex items-center justify-between w-full ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                <div className="hidden sm:block w-5/12"></div>
                
                <div className="absolute sm:static left-0 sm:left-auto sm:transform sm:-translate-x-0 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-50 dark:border-slate-900 flex items-center justify-center z-10 shadow">
                  <Briefcase className="w-3 h-3 text-white" />
                </div>

                <div className={`w-full sm:w-5/12 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'sm:text-left' : 'sm:text-right'}`}>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <h4 className="text-blue-600 dark:text-blue-400 font-medium mt-1">{exp.company}</h4>
                  <span className="inline-block py-1 px-3 rounded-full bg-slate-100 dark:bg-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 mt-3 mb-4">
                    {exp.duration}
                  </span>
                  <ul className={`text-slate-600 dark:text-slate-300 text-sm space-y-2 ${index % 2 === 0 ? '' : 'sm:text-right'}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? 'justify-start' : 'sm:justify-end'}`}>
                        <span className={`text-blue-500 mt-1 ${index % 2 === 0 ? '' : 'sm:hidden'}`}>•</span>
                        <span>{item}</span>
                        <span className={`text-blue-500 mt-1 hidden ${index % 2 !== 0 ? 'sm:block' : ''}`}>•</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
