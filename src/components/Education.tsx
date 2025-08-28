import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'BTech in Computer Science',
      duration: '2025–2029',
      institution: 'Govt. Engineering College, Thrissur, India',
      grade: 'Current',
      status: 'current'
    },
    {
      degree: 'Higher Secondary Education',
      duration: '2023–2025',
      institution: 'Devagiri CMI Public School, Calicut, India',
      grade: '95.6%',
      status: 'completed'
    },
    {
      degree: 'High School Education',
      duration: '2021–2023',
      institution: 'Devagiri CMI Public School',
      grade: '95%',
      status: 'completed'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-mono mb-4">
          <span className="text-blue-400">Education</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-green-400 via-blue-500 to-purple-600"></div>
        
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-4 border-gray-900 z-10"></div>
              
              {/* Content card */}
              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className={`bg-gray-800/50 border ${edu.status === 'current' ? 'border-green-500/30' : 'border-gray-700'} rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${edu.status === 'current' ? 'bg-green-500/20' : 'bg-blue-500/20'} rounded-lg flex items-center justify-center`}>
                      <GraduationCap className={`w-6 h-6 ${edu.status === 'current' ? 'text-green-400' : 'text-blue-400'}`} />
                    </div>
                    {edu.status === 'current' && (
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-mono">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white font-mono mb-2">
                    {edu.degree}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="font-mono text-sm">{edu.duration}</span>
                    </div>
                    <div className="flex items-start text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="font-mono text-sm">{edu.institution}</span>
                    </div>
                    {edu.grade !== 'Current' && (
                      <div className="flex items-center text-gray-300">
                        <Award className="w-4 h-4 mr-2 text-purple-400" />
                        <span className="font-mono text-sm">Grade: <span className="text-purple-400 font-bold">{edu.grade}</span></span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-2/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;