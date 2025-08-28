import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300ff88%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="text-center z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-white font-mono">Hello, I'm </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-mono">
            Merin George P
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-mono max-w-3xl mx-auto">
          Aspiring Computer Science Engineer | AI & Data Science Enthusiast
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-lg">
            <span className="text-green-400 font-mono">BTech CSE Student</span>
          </div>
          <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <span className="text-blue-400 font-mono">Govt. Engg College Thrissur</span>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-400 hover:text-green-300 transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;