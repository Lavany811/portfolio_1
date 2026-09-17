import React from 'react';
import { Code2, Database, Layout, Server, Settings, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6 mb-4 text-blue-500" />,
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite']
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6 mb-4 text-green-500" />,
    skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'REST APIs']
  },
  {
    title: 'Database',
    icon: <Database className="w-6 h-6 mb-4 text-purple-500" />,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Mongoose']
  },
  {
    title: 'Tools & Others',
    icon: <Settings className="w-6 h-6 mb-4 text-orange-500" />,
    skills: ['Git', 'GitHub', 'Postman', 'Docker', 'Linux']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all hover:-translate-y-2 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-white dark:bg-slate-700 shadow-sm group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-6 text-slate-800 dark:text-slate-100">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
