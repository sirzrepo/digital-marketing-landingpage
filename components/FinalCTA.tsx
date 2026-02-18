
import React from 'react';

const FinalCTA: React.FC = () => {
  const ctaUrl = "https://www.sirz.co.uk/dynamic-contact?from=https%3A%2F%2Fsirz-web-solutions.vercel.app%2F";

  return (
    <section className="py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-12 tracking-tight leading-[1.1]">
          Your vision. Your goals.<br />
          Your website.
        </h2>
        <div className="flex justify-center">
          <a 
            href={ctaUrl} 
            className="px-12 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-100/50"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
