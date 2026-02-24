
import React from 'react';

const services = [
  {
    title: "Media Generation - Videos & Photos",
    description: "Create engaging videos and high-quality photos to captivate your audience and drive engagement.",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Content Posting & Scheduling",
    description: "Automate your social media strategy with seamless content posting and scheduling tools.",
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Email Automation",
    description: "Enhance your email marketing with automated, personalized campaigns that convert leads.",
    img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Landing Page Builder",
    description: "Design stunning landing pages effortlessly with our user-friendly builder.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Campaign & Funnels",
    description: "Build effective marketing campaigns and sales funnels to maximize conversions.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "AI Creator System",
    description: "Harness AI to generate innovative content and creative ideas for your brand.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  }
];

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Our Services</p>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Digital Marketing <br/><span className="text-blue-600 border-b-4 border-blue-600">Services.</span></h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Unlock the full potential of your digital presence with our comprehensive suite of marketing tools and strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
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
                    <h4 className="text-2xl font-black text-slate-900 leading-tight">{item.title}</h4>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
                <p className="text-sm text-slate-600 font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
