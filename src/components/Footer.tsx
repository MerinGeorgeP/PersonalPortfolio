import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800/50 border-t border-gray-700 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-gray-900" />
            </div>
            <span className="font-mono text-lg font-bold text-white">MGP</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 font-mono">
            <span>© 2025 Merin George P. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 font-mono mt-4 md:mt-0">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>and</span>
            <Code2 className="w-4 h-4 text-green-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;