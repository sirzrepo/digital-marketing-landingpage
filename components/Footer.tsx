
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-50 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <span className="text-2xl font-black tracking-tighter text-black">Sirz<span className="text-blue-600">.</span></span>
              <div className="text-[11px] font-bold text-gray-300 uppercase tracking-widest md:border-l md:pl-8 border-gray-200">
                Copyright © 2026 Sirz Digital
              </div>
              <div className="flex space-x-6 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
              </div>
           </div>

           <div className="flex items-center space-x-5">
              {/* Facebook Icon */}
              <a href="https://www.facebook.com/profile.php?id=61565689515262" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-600 hover:shadow-lg transition-all duration-300 group" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.597 1.325-1.326V1.326C24 .597 23.403 0 22.675 0z"/>
                </svg>
              </a>
              
              {/* Instagram Icon */}
              <a href="https://www.instagram.com/sirz_official/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:border-pink-500 hover:shadow-lg transition-all duration-300 group" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Linktree Icon */}
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-green-600 hover:border-green-600 hover:shadow-lg transition-all duration-300 group" aria-label="Linktree">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M13.511 5.833h4.662l-6.173-6.173-6.173 6.173h4.662v4.071H5.827l6.173 6.174 6.173-6.174h-4.662V5.833zM12 11.667l-2.022 2.022h4.044L12 11.667zm6.173 5.833H5.827l6.173 6.174 6.173-6.174zM10.489 24h3.022v-3.022h-3.022V24z"/>
                </svg>
              </a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
