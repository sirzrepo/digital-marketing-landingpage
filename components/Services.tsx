
import React from 'react';

const webServices = [
  {
    title: 'Next.js Architecture',
    desc: 'Clean-code applications built from the ground up for speed, stability, and search visibility.',
    icon: 'CODE'
  },
  {
    title: 'Modular Commerce',
    desc: 'Next-gen Shopify and Stripe integrations that remove the limits of traditional commerce templates.',
    icon: 'CART'
  },
  {
    title: 'Design Systems',
    desc: 'Visual frameworks that grow with your brand, ensuring every pixel serves a purpose.',
    icon: 'DESIGN'
  },
  {
    title: 'API & Cloud',
    desc: 'Serverless logic and APIs built to handle security and sudden surges in global traffic without breaking.',
    icon: 'CLOUD'
  }
];

const Services: React.FC = () => {
  const ctaUrl = "https://www.sirz.co.uk/dynamic-contact?from=https%3A%2F%2Fsirz-web-solutions.vercel.app%2F";

  return (
    <section id="services" className="py-32 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-20">
          <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Our Methodology</p>
          <p className="text-slate-900 font-bold text-lg md:text-xl mb-4 leading-tight">Trusted by brands building a growth engine for their business</p>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[0.95]">Digital Products <br/>Built to <span className="text-blue-600">Scale.</span></h2>
          <p className="text-gray-500 text-lg font-medium max-w-2xl">We bridge the gap between building a technical website to growing a product that your customers love without complexity.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {webServices.map((t, i) => (
            <div key={i} className="group relative p-12 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] transition-all cursor-pointer flex flex-col">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl mb-8 flex items-center justify-center text-slate-900 font-black text-[10px] uppercase tracking-widest group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {t.icon}
              </div>
              
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                {t.title}
              </h4>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {t.desc}
              </p>

              <div className="mt-auto">
                <button className="text-slate-900 text-xs font-black uppercase tracking-widest flex items-center space-x-2 group/btn">
                  <span>Development details</span>
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] flex flex-col md:flex-row items-center justify-between text-white shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] pointer-events-none"></div>
           <div className="mb-8 md:mb-0 relative z-10">
              <h3 className="text-3xl font-black tracking-tight">Slow site killing your sales?</h3>
              <p className="text-slate-400 text-lg mt-2">Get a free technical performance audit from our engineering team.</p>
           </div>
           <a href={ctaUrl} className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-xl relative z-10">
             Get Free Performance Audit
           </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
