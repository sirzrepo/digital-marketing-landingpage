
import React from 'react';

const FoundationCards = [
  {
    title: 'Engineered for top speed',
    desc: 'SIRZ sites are designed to ensure fast loading times across all devices.',
    bgColor: 'bg-blue-50/50',
    borderColor: 'border-blue-100',
    textColor: 'text-blue-600'
  },
  {
    title: 'Designed for accessibility',
    desc: 'Build an inclusive site that everyone can interact with and understand.',
    bgColor: 'bg-pink-50/50',
    borderColor: 'border-pink-100',
    textColor: 'text-pink-600'
  },
  {
    title: 'Secured by industry experts',
    desc: 'Get enterprise-grade security against threats for you and your visitors.',
    bgColor: 'bg-cyan-50/50',
    borderColor: 'border-cyan-100',
    textColor: 'text-cyan-600'
  },
  {
    title: 'Built with reliability in mind',
    desc: 'Multi-cloud hosting ensures 99.9% uptime, even during traffic spikes.',
    bgColor: 'bg-orange-50/50',
    borderColor: 'border-orange-100',
    textColor: 'text-orange-600'
  }
];

const steps = [
  { id: 1, title: 'Find a platform.', desc: 'Pick a secure and reliable website builder like SIRZ.' },
  { id: 2, title: 'Plan your website.', desc: 'Map out your goals, site structure and audience.' },
  { id: 3, title: 'Start creating.', desc: 'Choose from 2,000+ templates or use the AI builder.' },
  { id: 4, title: 'Customize everything.', desc: 'Use the drag and drop editor to adjust colors and fonts.' },
  { id: 5, title: 'Optimize for search engines.', desc: 'Set up your site for strong organic visibility.' },
  { id: 6, title: 'Publish your website.', desc: 'Register a domain name and make your site live.' },
  { id: 7, title: 'Drive traffic.', desc: 'Use built-in marketing tools to create email campaigns.' },
];

const Portfolio: React.FC = () => {
  const ctaUrl = "https://www.sirz.co.uk/dynamic-contact?from=https%3A%2F%2Fsirz-web-solutions.vercel.app%2F";

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section 1: Rock-solid Foundation */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Grow your website on <br className="hidden md:block" /> a rock-solid foundation
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mb-10 font-medium opacity-80">
            Set your site up for success on the powerful infrastructure that supports millions of websites worldwide.
          </p>
          <a href={ctaUrl} className="inline-block px-10 py-3.5 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-black transition-all">
            Get Started
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {FoundationCards.map((card, i) => (
            <div key={i} className={`${card.bgColor} ${card.borderColor} border p-8 rounded-2xl transition-transform hover:scale-[1.02] duration-300`}>
              <h4 className={`text-lg font-bold mb-3 ${card.textColor}`}>{card.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Section 2: 7-Step Guide */}
        <div className="flex flex-col lg:flex-row gap-20 mb-32 items-start">
          <div className="lg:w-1/3">
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              How to create a <br /> website for free
            </h3>
            <p className="text-slate-500 text-sm mb-10 font-medium">
              Follow these 7 simple steps to create a website today.
            </p>
            <div className="flex items-center space-x-6">
              <a href={ctaUrl} className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-lg">
                Get Started
              </a>
              <a href="#" className="text-slate-900 font-bold text-sm border-b-2 border-slate-900 pb-0.5">
                Learn more
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start space-x-6">
                <span className="text-blue-600 font-bold text-sm pt-0.5">{step.id}.</span>
                <div>
                  <h5 className="text-slate-900 font-bold text-sm mb-1">{step.title}</h5>
                  <p className="text-slate-500 text-sm font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Audience CTA */}
        <div className="relative pt-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#C9FF6C] rounded-full border-[6px] border-white shadow-xl flex items-center justify-center z-10">
            <div className="w-8 h-8 rounded-full border-[3px] border-black flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
            </div>
          </div>
          
          <div className="bg-[#111] rounded-[3rem] p-16 md:p-24 text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12 tracking-tight leading-[1.1]">
                Reach your best audience at the lowest cost!
              </h2>
              <a 
                href={ctaUrl} 
                className="inline-block px-12 py-5 bg-[#FF33CC] text-white rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 hover:bg-[#e62eb7] transition-all shadow-[0_15px_30px_rgba(255,51,204,0.3)]"
              >
                Create Account
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
