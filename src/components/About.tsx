import React from 'react';
import { User, Brain, Database, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-mono mb-4">
          About <span className="text-green-400">Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
          <p className="text-gray-300 text-lg leading-relaxed font-mono">
            Hi, I'm Merin George P — an aspiring Computer Science Engineer passionate about 
            <span className="text-green-400"> Artificial Intelligence</span>, 
            <span className="text-blue-400"> Data Science</span>, and building impactful digital solutions.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed font-mono">
            Currently pursuing my BTech in Computer Science from 
            <span className="text-purple-400"> Govt. Engineering College Thrissur</span>, 
            I enjoy exploring new technologies, solving challenging problems, and continuously 
            learning in the field of computer science.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-green-500/50 transition-colors">
              <Brain className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <span className="text-white font-mono text-sm">AI Enthusiast</span>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500/50 transition-colors">
              <Database className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <span className="text-white font-mono text-sm">Data Science</span>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-purple-500/50 transition-colors">
              <Code className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <span className="text-white font-mono text-sm">Problem Solver</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;