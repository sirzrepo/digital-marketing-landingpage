
import React from 'react';

const cases = [
  {
    category: 'E-commerce',
    name: 'Omiana',
    stat: '+200%',
    statLabel: 'Sales Growth',
    metric: '+135%',
    metricLabel: 'Ad Spend',
    desc: 'How Omiana leveraged Sirz AI to scale spend by 135% profitably.',
    color: 'bg-green-600'
  },
  {
    category: 'SaaS',
    name: 'Rad Intel',
    stat: '-80%',
    statLabel: 'Lead Costs',
    metric: '$366K+',
    metricLabel: 'Raised',
    desc: 'How RAD Intel cut costs by 80% while boosting overall performance.',
    color: 'bg-blue-600'
  },
  {
    category: 'Entertainment',
    name: '2X Monster',
    stat: '7.51',
    statLabel: 'ROAS',
    metric: '$53K',
    metricLabel: 'Revenue',
    desc: 'Achieved a massive return on investment with AI-powered creative.',
    color: 'bg-slate-700'
  }
];

const Stats: React.FC = () => {
  return (
    <section className="py-32 bg-slate-900 text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-24">
           <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Transforming Growth. <br/><span className="text-blue-500">Real Stories of Success.</span></h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {cases.map((c, i) => (
            <div key={i} className="flex flex-col border border-white/10 rounded-[2.5rem] overflow-hidden p-10 bg-white/5 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500">
              <div className="flex justify-between items-start mb-10">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">{c.category}</span>
                  <h4 className="text-2xl font-black text-white">{c.name}</h4>
                </div>
                <div className={`${c.color} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase`}>Verified</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-green-400">{c.stat}</span>
                  <span className="text-[9px] font-bold text-gray-400 uppercase mt-1">{c.statLabel}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-white">{c.metric}</span>
                  <span className="text-[9px] font-bold text-gray-400 uppercase mt-1">{c.metricLabel}</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">{c.desc}</p>
              
              <button className="w-full py-4 border border-white/20 rounded-xl font-bold text-sm hover:bg-white hover:text-slate-900 transition-all">
                Read Full Case Study
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <button className="text-blue-400 font-bold flex items-center justify-center mx-auto space-x-2 group">
             <span>View all Success Stories</span>
             <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
           </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;