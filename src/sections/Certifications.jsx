import React from 'react';
import { Award } from 'lucide-react';

const certs = [
  { name: "Java Full Stack Developer", issuer: "S2P" },
  { name: "React - The Complete Guide", issuer: "Udemy" },
  { name: "Speakathon for Limca Book of record", issuer: "GHRCE" }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <div key={index} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all text-center flex flex-col items-center group">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Award size={28} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{cert.name}</h3>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
