import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [

  {
    title: "MicroGigs",
    description: "A freelancing micro-job platform designed to connect freelancers with clients. Includes payment gateway integration and real-time chat.",
    tags: ["React", "Spring Boot", "MySQL", "WebSockets"],
    github: "https://github.com/Lavany811/Microgig",
    live: "#"
  },
    {
    title: "Job_Portal",
    description: "Developed a full-stack Job Portal application using Spring Boot, enabling job seekers to search and apply for jobs while recruiters manage job postings.",
    tags: ["MySQL","Spring Boot", "React", "Node.js", "Tailwind"],
    github: "",
    live: "#"
  }

];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
