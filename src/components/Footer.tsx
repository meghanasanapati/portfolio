import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-indigo-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-300">
            &copy; 2025 Meghana Ram — All Rights Reserved
          </p>
          
          <button
            onClick={scrollToTop}
            className="bg-indigo-800 hover:bg-indigo-700 p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;