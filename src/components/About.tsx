import React from 'react';
import Section from './shared/Section';
import { Brain, Users, Lightbulb, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden mx-auto max-w-5xl">
        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative space-y-6 mb-10">
          {personalInfo.about.map((paragraph, index) => (
            <div key={index} className="flex items-start space-x-4">
              <Target className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
              <p className="text-gray-300 leading-relaxed">{paragraph}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-102 text-center">
            <Brain className="w-10 h-10 text-indigo-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-3">Analytical Mind</h3>
            <p className="text-indigo-200">Approaching challenges with logical thinking and innovative solutions</p>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-102 text-center">
            <Users className="w-10 h-10 text-purple-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-3">Team Player</h3>
            <p className="text-purple-200">Collaborating effectively with diverse teams to achieve common goals</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-102 text-center">
            <Lightbulb className="w-10 h-10 text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-3">Creative Problem Solver</h3>
            <p className="text-blue-200">Finding innovative solutions to complex challenges</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
