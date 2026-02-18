
import React, { useState } from 'react';

const webPlans = [
  {
    name: 'Growth Landing',
    desc: 'High-converting one-pagers for new product launches',
    price: '$2,999',
    features: ['Custom Next.js Build', 'Optimized for Conversion', 'SEO Foundation', 'Analytics Dashboard', '7-day Delivery', '1 Month Support']
  },
  {
    name: 'Business Digital',
    desc: 'Full multi-page sites for established scaling brands',
    price: '$7,499',
    features: ['Multi-page Architecture', 'Headless CMS Integration', 'Custom Branding & UI', 'Speed Optimization', 'Technical SEO Audit', '3 Months Support'],
    popular: true
  },
  {
    name: 'E-commerce Core',
    desc: 'Advanced Shopify and Headless commerce solutions',
    price: '$12,999',
    features: ['Custom Checkout Systems', 'API-first Inventory', 'Advanced Filtering', 'Subscription Models', 'Marketing Automations', 'Lifetime Access to Specs']
  },
  {
    name: 'Enterprise Web',
    desc: 'Bespoke infrastructure for global operations',
    price: 'Custom',
    features: ['Full Stack Dev Team', 'Microservices Architecture', 'SLA Uptime Guarantees', 'White-glove Maintenance', 'Security Hardening', 'Internal Tooling']
  }
];

const Pricing: React.FC = () => {
  const ctaUrl = "https://www.sirz.co.uk/dynamic-contact?from=https%3A%2F%2Fsirz-web-solutions.vercel.app%2F";

  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Development Tiers</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">Predictable pricing for world-class engineering. Choose the foundation your business deserves.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {webPlans.map((p, i) => (
            <div key={i} className={`flex flex-col p-8 rounded-[2rem] border transition-all ${p.popular ? 'border-blue-600 shadow-2xl scale-105 z-10 bg-white' : 'border-gray-100 bg-gray-50'}`}>
              <div className="mb-8">
                <h4 className="text-xl font-black text-slate-900 mb-2">{p.name}</h4>
                <p className="text-xs text-gray-400 font-medium mb-6">{p.desc}</p>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-black text-slate-900">{p.price}</span>
                  {p.price !== 'Custom' && <span className="text-sm text-gray-400 font-bold"> start</span>}
                </div>
              </div>

              <a href={ctaUrl} className={`w-full py-4 rounded-xl font-bold text-sm mb-10 transition-all text-center ${p.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-900 text-white hover:bg-black'}`}>
                {p.price === 'Custom' ? 'Contact Solutions Team' : 'Get Started'}
              </a>

              <div className="flex-1 space-y-4">
                 <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Deliverables</p>
                 {p.features.map((f, idx) => (
                   <div key={idx} className="flex items-start space-x-3 text-xs text-gray-600 font-medium leading-relaxed">
                      <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      <span>{f}</span>
                   </div>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
