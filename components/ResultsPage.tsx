
import React from 'react';

const impactStats = [
  { label: 'Avg Mobile Conversion Boost', value: '140%', trend: '+60% vs Desktop' },
  { label: 'Avg Page Load Speed', value: '0.9s', trend: 'Global Benchmark' },
  { label: 'Security Uptime', value: '99.99%', trend: 'Enterprise Level' },
  { label: 'Codebase Scalability', value: '100/100', trend: 'Vercel Verified' },
];

const detailedCases = [
  {
    brand: 'Moss & Glow Beauty',
    challenge: 'Marketing campaigns were difficult to scale efficiently. Without automation, creating, scheduling, and optimizing content across multiple channels was slow and fragmented for this conscious beauty brand.',
    solution: 'Implemented BrandCom, our AI-driven campaign automation agent. This system leverages intelligent automation to handle content creation, unified analytics, and predictive optimization for posting and retargeting.',
    result: 'Moss & Glow transformed its marketing with an AI-powered system that delivers personalized, high-performing campaigns while significantly reducing manual effort by 70%.',
    metric: '37%',
    metricLabel: 'Returning Customers ↑',
    img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200',
    url: 'https://www.sirz.co.uk/case-study-moss-glow-beauty',
    stats: [
      { label: 'Returning Customers', value: '+37%' },
      { label: 'Campaign Execution', value: '+42% Speed' },
      { label: 'Manual Effort', value: '-70%' }
    ],
    capabilities: [
      'Automate content creation and campaign launches',
      'Track engagement in a single AI-powered dashboard',
      'Optimize posting times via predictive analytics',
      'Personalized retargeting for high-intent customers'
    ]
  },
  {
    brand: 'Wellness Studio 360',
    challenge: 'User engagement was largely manual. Fitness programs and wellness tips were sent uniformly, making it difficult to tailor recommendations to individual habits. Engagement was inconsistent and personalization was time-consuming.',
    solution: 'Implemented LeadScoring AI, our automated lead scoring and engagement optimization agent. We also overhauled their visual identity with a modern palette (Stormcloud & Mindaro) and Poppins typography.',
    result: 'Wellness Studio 360 transformed its user engagement with an AI-powered system that delivers personalized fitness experiences while significantly improving retention.',
    metric: '46%',
    metricLabel: 'Daily Engagement ↑',
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
    url: `https://www.sirz.co.uk/case-study-wellness_studio`,
    stats: [
      { label: 'Daily Engagement', value: '+46%' },
      { label: 'Returning Users', value: '+33%' },
      { label: 'Personalization', value: '2x Boost' }
    ],
    capabilities: [
      'Automatically score and segment users based on activity',
      'Deliver personalized wellness programs aligned with goals',
      'Trigger timely notifications and engagement reminders',
      'Continuously optimize outreach using AI insights'
    ],
    achievements: [
      'Logo Design: Sleek, modern symbol of movement and balance',
      'Color Palette: Eerie Black, Stormcloud, and Mindaro (Strength & Vitality)',
      'Tagline: "Well-being begins at home"',
      'Cohesive Visual Identity across digital & physical platforms'
    ]
  },
  {
    brand: 'Nureva Healthcare',
    challenge: 'Nureva struggled with manual patient engagement and fragmented communication. Providing instant, compassionate support while managing inquiries was slow, taking staff away from direct care delivery.',
    solution: 'Engineered a holistic brand identity and integrated a fully AI-powered patient engagement system to provide instant, accurate, and compassionate responses across all touchpoints.',
    result: 'Nureva transitioned to a fully automated system that handles inquiries in real-time, significantly freeing staff for care delivery while maintaining a 92% satisfaction rate.',
    metric: '92%',
    metricLabel: 'Patient Satisfaction ↑',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    url: `https://www.sirz.co.uk/case-study-nureva`,
    stats: [
      { label: 'Staff Capacity', value: '+40%' },
      { label: 'Response Speed', value: 'Instant' },
      { label: 'Operational Efficiency', value: '2.5x' }
    ],
    capabilities: [
      'AI-powered patient engagement for instant 24/7 support',
      'Automated appointment scheduling and reminders',
      'Secure, HIPAA-compliant data handling architecture',
      'Personalized health tracking and engagement journeys'
    ],
    achievements: [
      'Strong Brand Identity: Concept for care, renewal, and well-being',
      'Professional Visual Identity: Logo reflecting trust and approachability',
      'Cohesive Brand Voice: Warm, professional, and reassuring tone',
      'Refined Messaging: "Caring for you, every step of the way"',
      'Patient-Centered Approach: Balancing modern and traditional medicine',
      'Market Differentiation: Highlighting affordable, accessible solutions'
    ]
  }
];

const ResultsPage: React.FC = () => {
  return (
    <div className="pt-24 animate-in fade-in duration-700">
      {/* Hero Header */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Quantifiable Results</p>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              The Code <br/><span className="text-blue-500">of Success.</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
              We don't just ship code. We ship measurable business outcomes. From Core Web Vitals to AI-driven automation impact, the data proves our methodology works.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactStats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-4xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{stat.label}</div>
                  <div className="text-[10px] font-bold text-green-500">{stat.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Deep Dives */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 space-y-32">
          {detailedCases.map((c, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}>
              <div className="flex-1 w-full sticky top-32">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] -z-10 group-hover:bg-blue-50 transition-colors"></div>
                  <img src={c.img} alt={c.brand} className="w-full aspect-video object-cover rounded-[2rem] shadow-2xl border border-slate-100" />
                  <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-[2rem] shadow-2xl hidden md:block">
                    <div className="text-4xl font-black">{c.metric}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-80">{c.metricLabel}</div>
                  </div>
                </div>
                
                {c.stats && (
                  <div className="mt-12 grid grid-cols-3 gap-4">
                    {c.stats.map((s, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                        <div className="text-2xl font-black text-blue-600">{s.value}</div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex-1 space-y-8">
                <div className="inline-block px-4 py-2 bg-slate-100 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Case Study: {c.brand}</div>
                <h3 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">Driving Efficiency through Engineering.</h3>
                
                <div className="space-y-8">
                  <div>
                    <h5 className="text-[11px] font-black uppercase text-blue-600 mb-2 tracking-widest">The Challenge</h5>
                    <p className="text-slate-600 font-medium leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <h5 className="text-[11px] font-black uppercase text-blue-600 mb-2 tracking-widest">Our Solution</h5>
                    <p className="text-slate-600 font-medium leading-relaxed mb-4">{c.solution}</p>
                    {c.capabilities && (
                      <div className="mt-4">
                        <p className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">Key Capabilities</p>
                        <ul className="grid grid-cols-1 gap-3">
                          {c.capabilities.map((cap, idx) => (
                            <li key={idx} className="flex items-center space-x-3 text-sm font-bold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                              <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {c.achievements && (
                      <div className="mt-8">
                        <p className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">What we Achieved</p>
                        <ul className="space-y-2">
                          {c.achievements.map((ach, idx) => (
                            <li key={idx} className="text-xs font-bold text-slate-500 flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="p-8 bg-slate-900 text-white rounded-[2rem] border-l-8 border-blue-600 shadow-xl">
                    <h5 className="text-[11px] font-black uppercase text-blue-400 mb-3 tracking-widest">The Outcome</h5>
                    <p className="text-white font-medium text-lg leading-relaxed">{c.result}</p>
                  </div>
                </div>

                <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 text-slate-900 font-black text-xs uppercase tracking-widest group pt-4">
                  <span>View Case Study Details</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology - Marketing Oriented */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter">Conversion First <br/><span className="text-blue-600">Marketing Strategy.</span></h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">Most sites focus on traffic. We focus on ROI. Our strategy integrates high-performance engineering with real-time campaign tools to turn visitors into long-term customers.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  title: 'Conversion-Engineered Funnels', 
                  desc: 'Every layout is data-driven to guide the customer journey, minimizing churn and maximizing the value of every click.' 
                },
                { 
                  title: 'Retention-Led Speed', 
                  desc: 'Sub-second load times don’t just help SEO; they keep high-intent users engaged, significantly reducing bounce rates for paid traffic.' 
                },
                { 
                  title: 'Organic Authority Scaling', 
                  desc: 'We build structural visibility that helps your brand dominate search rankings, lowering your blended customer acquisition costs (CAC).' 
                },
                { 
                  title: 'Omnichannel Campaign Hub', 
                  desc: 'Integrated tracking and AI automation that scales your growth strategy across social, search, and email seamlessly.' 
                }
              ].map((f, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <h5 className="font-black text-slate-900 mb-3 text-sm">{f.title}</h5>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;
