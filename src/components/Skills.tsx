import React from 'react';
import Section from './shared/Section';
import { skillsData } from '../data/portfolioData';

const Skills: React.FC = () => {
  // Group skills by category
  const technicalSkills = skillsData.filter(skill => skill.category === 'technical');
  const softSkills = skillsData.filter(skill => skill.category === 'soft');
  const languageSkills = skillsData.filter(skill => skill.category === 'language');

  const renderSkillBar = (skill: typeof skillsData[0]) => (
    <div key={skill.name} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Technical Skills
          </h3>
          {technicalSkills.map(renderSkillBar)}
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Soft Skills
          </h3>
          {softSkills.map(renderSkillBar)}
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Language Skills
          </h3>
          {languageSkills.map(renderSkillBar)}
        </div>
      </div>
    </Section>
  );
};

export default Skills;