import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import Section from './shared/Section';
import { certificationsData } from '../data/portfolioData';

const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((certification, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-start">
              <div className="mr-4 bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full">
                <Award className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {certification.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {certification.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                  {certification.date}
                </p>
                
                {certification.url && (
                  <a 
                    href={certification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-3 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                  >
                    <span className="mr-1 text-sm">View Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;