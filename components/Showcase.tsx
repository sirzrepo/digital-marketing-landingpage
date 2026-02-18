
import React from 'react';

const examples = [
  {
    title: "Asarai Scale",
    category: "Paid Social / Meta",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
    tagline: "4.2x ROAS in 90 Days"
  },
  {
    title: "Artisan Co.",
    category: "Omnichannel Growth",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    tagline: "300% Revenue Increase YoY"
  },
  {
    title: "PayFlow Acquisition",
    category: "B2B LinkedIn Ads",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    tagline: "$12 Demo Lead Cost"
  },
  {
    title: "Hume Health",
    category: "Performance Creative",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    tagline: "24% Lower CPA via UGC"
  },
  {
    title: "Urban Mob",
    category: "App Install Campaign",
    img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
    tagline: "50k Monthly Installs"
  },
  {
    title: "Street Wear",
    category: "Retargeting Pro",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
    tagline: "12% Cart Abandonment Recapture"
  }
];

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Case Studies</p>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Growth Without <br/><span className="text-blue-600 border-b-4 border-blue-600">The Guesswork.</span></h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            We deliver measurable business impact. No vanity metrics, just pure revenue growth for our partners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-slate-50 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Reliable fallback image if specific Unsplash ID fails
                    target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1 block">{item.category}</span>
                    <h4 className="text-2xl font-black text-slate-900 leading-tight">{item.title}</h4>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
                <p className="text-sm text-green-600 font-black italic">{item.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
