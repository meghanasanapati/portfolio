import React from 'react';
import { Code, Users, BookOpen } from 'lucide-react';
import Section from './shared/Section';
import { projectsData } from '../data/portfolioData';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      {projectsData.map((project, index) => (
        <div 
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8 transform transition-all hover:shadow-xl"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {project.specialization}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Batch: {project.batch}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start">
                <BookOpen className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-1">Institution</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.institution}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="text-indigo-600 dark:text-indigo-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-1">Guide</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.guide}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-gray-800 dark:text-gray-200 font-medium mb-3">Description</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.description}</p>
            </div>
            
            <div>
              <h4 className="text-gray-800 dark:text-gray-200 font-medium mb-3 flex items-center">
                <Code className="mr-2" size={18} />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 px-3 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Projects;