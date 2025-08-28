import React from 'react';
import { Code, Globe, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'C'],
      color: 'green'
    },
    {
      title: 'Web',
      icon: <Globe className="w-6 h-6" />,
      skills: ['HTML'],
      color: 'blue'
    },
    {
      title: 'Tools',
      icon: <Settings className="w-6 h-6" />,
      skills: ['Git', 'VS Code'],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        border: 'border-green-500/20 hover:border-green-500/50',
        bg: 'bg-green-500/10',
        text: 'text-green-400',
        skillBg: 'bg-green-500/20'
      },
      blue: {
        border: 'border-blue-500/20 hover:border-blue-500/50',
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        skillBg: 'bg-blue-500/20'
      },
      purple: {
        border: 'border-purple-500/20 hover:border-purple-500/50',
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        skillBg: 'bg-purple-500/20'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-900/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-mono mb-4">
          Technical <span className="text-green-400">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => {
          const colorClasses = getColorClasses(category.color);
          return (
            <div 
              key={index}
              className={`bg-gray-800/50 border ${colorClasses.border} rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300`}
            >
              <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                <div className={colorClasses.text}>
                  {category.icon}
                </div>
              </div>
              
              <h3 className={`text-xl font-bold ${colorClasses.text} font-mono text-center mb-4`}>
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`${colorClasses.skillBg} rounded-lg px-3 py-2 text-center`}
                  >
                    <span className="text-white font-mono text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;