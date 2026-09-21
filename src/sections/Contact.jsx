import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await axios.post(`${API_URL}/api/contact`, formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Let's talk about everything!</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-slate-100 dark:border-slate-700">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">Email</h4>
                  <p className="text-slate-900 dark:text-white font-medium">ingolelavany60@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-slate-100 dark:border-slate-700">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">Phone</h4>
                  <p className="text-slate-900 dark:text-white font-medium">+91 7249573686</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-slate-100 dark:border-slate-700">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400">Location</h4>
                  <p className="text-slate-900 dark:text-white font-medium">India</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg shadow-blue-500/5 border border-slate-100 dark:border-slate-700">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors"
                  placeholder="Job Opportunity"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
              {status === 'success' && <p className="text-green-500 text-center text-sm font-medium mt-2">Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-500 text-center text-sm font-medium mt-2">Failed to send message. Try again later.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
