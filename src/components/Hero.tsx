import React from 'react';
import { ChevronDown, Code, Laptop, Rocket, Star } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileImage from './shared/image.png';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 pt-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 animate-fade-in">
          
          {/* Placeholder for Image */}
          <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg">
          <img 
            src={profileImage} 
            alt="Profile" 
            className="object-cover w-full h-full" 
          />
          </div>

          {/* Text Block */}
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-900/50 border border-indigo-700 backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-indigo-200">Welcome to my portfolio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-2">
                {personalInfo.name}
              </span>
              <span className="text-2xl md:text-3xl text-gray-400 font-normal">
                {personalInfo.title}
              </span>
            </h1>

            <p className="text-xl text-gray-300 mx-auto">
              {personalInfo.institution}
            </p>
          </div>
        </div>

        {/* Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-10">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transform hover:scale-105 transition-all">
            <Code className="w-8 h-8 text-indigo-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Developer</h3>
            <p className="text-gray-400">Passionate about creating elegant solutions</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transform hover:scale-105 transition-all">
            <Laptop className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Tech Enthusiast</h3>
            <p className="text-gray-400">Always learning and exploring new technologies</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transform hover:scale-105 transition-all">
            <Rocket className="w-8 h-8 text-pink-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Innovator</h3>
            <p className="text-gray-400">Turning ideas into impactful solutions</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 pt-8">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/20"
          >
            View Portfolio
          </button>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-gray-800 text-indigo-400 hover:bg-gray-700 rounded-full border border-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll Down Button */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="text-indigo-400" size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;