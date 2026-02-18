
import React from 'react';

const solutionTypes = [
  {
    title: 'BrandCom AI Automation',
    platform: 'AI-Driven Campaign Engine',
    desc: 'Our proprietary agent that automates content creation, unified analytics, and predictive optimization for global scale.',
    benefits: ['42% Faster Execution', '70% Reduced Manual Effort', 'Predictive Posting Analytics'],
    color: 'bg-blue-600 text-white',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    title: 'Custom Product Development',
    platform: 'React & Next.js',
    desc: 'Bespoke web applications designed to handle complex user logic, real-time data, and high traffic loads.',
    benefits: ['Zero-lag User Experiences', 'Scalable Cloud Architectures', 'Next.js 15+ Frameworks'],
    color: 'bg-red-50 text-red-600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    )
  },
  {
    title: 'Headless E-commerce Engines',
    platform: 'Shopify & Stripe',
    desc: 'Decoupling the frontend from the backend to provide unparalleled design freedom and performance.',
    benefits: ['Custom Checkout Flows', 'Multi-currency Support', 'API-first Commerce'],
    color: 'bg-blue-50 text-blue-600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
    )
  },
  {
    title: 'Technical Infrastructure',
    platform: 'Vercel & AWS',
    desc: 'Modern hosting and devops solutions that guarantee 99.9% uptime and instant global deployment.',
    benefits: ['CI/CD Pipeline Setup', 'Edge Function Logic', 'Serverless Database Scaling'],
    color: 'bg-green-50 text-green-600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    )
  }
];

const SolutionsPage: React.FC = () => {
  const ctaUrl = "https://www.sirz.co.uk/dynamic-contact?from=https%3A%2F%2Fsirz-web-solutions.vercel.app%2F";

  return (
    <div className="pt-24 animate-in fade-in duration-700">
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Development Blueprints</p>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
              Tech <br/>Solutions.
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              We don't just "build websites." We engineer digital foundations and AI automation layers that bridge the gap between business objectives and technical reality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {solutionTypes.map((type, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${type.color}`}>
                  {type.icon}
                </div>
                
                <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">{type.platform}</span>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">{type.title}</h3>
                  <p className="text-gray-500 mb-10 leading-relaxed font-medium">{type.desc}</p>
                  
                  <ul className="space-y-4">
                    {type.benefits.map((b, i) => (
                      <li key={i} className="flex items-center space-x-3 text-sm font-bold text-slate-700">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={ctaUrl} className="mt-12 inline-block px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-all text-center">
                    Inquire for Solution
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
