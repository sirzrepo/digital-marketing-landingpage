
import React from 'react';

const Hero: React.FC = () => {
  const ctaUrl = "https://www.sirz.co.uk/dynamic-contact?from=https%3A%2F%2Fsirz-web-solutions.vercel.app%2F";

  return (
    <section id="home" className="pt-24 pb-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest">Performance-First Engineering</span>
            </div>
            
            <h1 className="text-5xl md:text-[80px] font-black text-slate-900 mb-8 leading-[0.95] tracking-tight">
              Digital marketing that <span className="text-blue-600">works.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-medium">
              Stop losing customers to a slow, confusing website. We build custom websites that look great, run fast, and make it easy for your customers to buy from you.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12 w-full max-w-md">
              <a href={ctaUrl} className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200/50 text-center">
                Start My Project
              </a>
              <button className="w-full sm:w-auto px-10 py-5 border border-slate-200 text-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                View Showcase
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-4 border-white shadow-sm" src={`https://i.pravatar.cc/100?u=sirz_dev${i}`} alt="Client" />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-400">Trusted by 500+ high-growth brands</p>
            </div>
          </div>

          <div className="flex-1 relative w-full hidden lg:block">
            <div className="relative z-10 bg-slate-100 rounded-[2rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white">
              <div className="bg-white rounded-2xl overflow-hidden shadow-inner border border-slate-200 p-8">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex space-x-2">
                    <div className="h-2.5 w-2.5 bg-red-400 rounded-full"></div>
                    <div className="h-2.5 w-2.5 bg-yellow-400 rounded-full"></div>
                    <div className="h-2.5 w-2.5 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="h-6 w-32 bg-slate-50 rounded-full border border-slate-100 text-[10px] flex items-center justify-center font-bold text-slate-400 uppercase tracking-widest">sirz.build/live-demo</div>
                </div>
                <div className="space-y-6">
                   <div className="flex items-end justify-between">
                      <div className="space-y-2">
                         <div className="h-3 w-24 bg-slate-100 rounded-full"></div>
                         <div className="text-4xl font-black text-slate-900 tracking-tighter">100/100</div>
                      </div>
                      <div className="text-green-500 font-bold text-sm">Perfect Score</div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                         <div className="h-2 w-16 bg-slate-200 rounded-full mb-3"></div>
                         <div className="h-8 w-full bg-white rounded-lg border border-slate-100"></div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                         <div className="h-2 w-16 bg-slate-200 rounded-full mb-3"></div>
                         <div className="h-8 w-full bg-white rounded-lg border border-slate-100"></div>
                      </div>
                   </div>
                   <div className="h-32 bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-blue-600 opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <div className="text-white font-black text-xl z-10 tracking-tight">Optimized Conversion Layer</div>
                   </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-400/20 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-purple-400/20 blur-[80px] rounded-full"></div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-gray-100 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-300 mb-12">Building high-performance digital infrastructure with</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale">
             <span className="text-2xl font-black">REACT</span>
             <span className="text-2xl font-bold">NEXT.JS</span>
             <span className="text-2xl font-black">TYPESCRIPT</span>
             <span className="text-2xl font-black">TAILWIND</span>
             <span className="text-2xl font-bold">VERCEL</span>
             <span className="text-2xl font-bold">STRIPE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
