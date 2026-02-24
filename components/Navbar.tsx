
import React, { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'campaigns' | 'results') => void;
  currentPage: 'home' | 'campaigns' | 'results';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ctaUrl = "https://www.sirz.co.uk/dynamic-contact?from=https%3A%2F%2Fsirz-web-solutions.vercel.app%2F";

  const navLinks = [
    { name: 'Home', action: () => onNavigate('home'), id: 'home' },
    { name: 'Solutions', action: () => onNavigate('campaigns'), id: 'campaigns' },
    { name: 'Results', action: () => onNavigate('results'), id: 'results' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <button onClick={() => onNavigate('home')} className="flex items-center space-x-2 outline-none">
             <span className="text-2xl font-black tracking-tighter text-black">Sirz<span className="text-blue-600">.</span></span>
          </button>
          
          <div className="hidden lg:flex space-x-8 items-center font-semibold text-[14px] text-gray-600">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => { link.action(); setMobileMenuOpen(false); }}
                className={`hover:text-blue-600 transition-colors ${currentPage === link.id ? 'text-blue-600 underline underline-offset-8' : ''}`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-4 font-semibold text-[14px]">
          <a href={ctaUrl} className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">Start Project</a>
          <a href={ctaUrl} className="px-6 py-2.5 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">Contact</a>
        </div>

        <button className="lg:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg border-gray-100">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={`mobile-${link.name}`}
                onClick={() => { link.action(); setMobileMenuOpen(false); }}
                className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                  currentPage === link.id 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2 space-y-3">
              <a 
                href={ctaUrl} 
                className="block w-full text-center px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                Start Project
              </a>
              <a 
                href="#contact" 
                className="block w-full text-center px-6 py-2.5 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
