import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
          Built with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> by Lavanya Ingole © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
