
import React from 'react';

interface ContactProps {
  onNavigate: (page: 'home' | 'campaigns' | 'results') => void;
}

const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const ctaUrl = "https://www.sirz.co.uk/dynamic-contact?from=https%3A%2F%2Fsirz-web-solutions.vercel.app%2F";

  return (
    <section id="contact" className="py-32 bg-slate-900 text-white text-center relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Scale Your Impact,<br/><span className="text-blue-400">Not Your Workload</span></h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">Stop managing manual processes. We automate your growth strategy with intelligent campaign tools and real-time ROI tracking.</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
           <a href={ctaUrl} className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20">
             Talk to a Strategist
           </a>
           <button onClick={() => onNavigate('results')} className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white rounded-xl font-bold hover:bg-white/5 transition-all">
             View Our Results
           </button>
        </div>
        
        <div className="mt-12">
          <a href={ctaUrl} className="text-blue-400 font-extrabold text-lg hover:underline underline-offset-8">Join the waitlist for Q3!</a>
          <p className="text-gray-500 text-sm mt-3">The leader in performance-first marketing.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
