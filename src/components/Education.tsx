import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import Section from './shared/Section';
import { educationData } from '../data/portfolioData';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {educationData.map((education, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-4px]"
          >
            <div className="flex flex-col md:flex-row">
              <div className="bg-indigo-600 dark:bg-indigo-800 text-white p-6 flex items-center justify-center md:w-1/4">
                <GraduationCap size={48} />
              </div>
              <div className="p-6 md:w-3/4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {education.institution}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 mb-3">{education.degree}</p>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{education.duration}</span>
                </div>
                {education.grade && (
                  <div className="mt-3 inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                    Grade: {education.grade}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;