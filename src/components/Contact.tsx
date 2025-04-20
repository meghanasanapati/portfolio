import React from 'react';
import * as Icons from 'lucide-react';
import Section from './shared/Section';
import { contactData } from '../data/portfolioData';

// Dynamically access Lucide icons
const LucideIcon = ({ name, ...props }: { name: string; [key: string]: any }) => {
  // @ts-ignore - Dynamically access icons from the imported Icons collection
  const Icon = Icons[name.charAt(0).toUpperCase() + name.slice(1)];
  return Icon ? <Icon {...props} /> : null;
};

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get in Touch">
      <div className="space-y-6">
        {contactData.map((contact, index) => (
          <div 
            key={index}
            className="flex items-center p-4 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-indigo-900 p-3 rounded-full mr-4">
              <LucideIcon 
                name={contact.icon} 
                className="text-indigo-400" 
                size={20} 
              />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">
                {contact.type}
              </p>
              {contact.url ? (
                <a 
                  href={contact.url}
                  target={contact.type === 'Email' || contact.type === 'Phone' ? '' : '_blank'}
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-gray-300">{contact.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Contact;