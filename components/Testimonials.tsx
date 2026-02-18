
import React from 'react';

const testimonials = [
  {
    quote: "Sirz has seriously helped uplevel our agency's approach to creative testing. We've achieved rapid testing, high volumes of actionable learnings, and a high degree of ad diversity that was previously impossible.",
    author: "Max Cammarota",
    role: "Director of Media",
    brand: "Beeby Clark+Meyler",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    avatarColor: "bg-blue-100 text-blue-600"
  },
  {
    quote: "The exceptional quality and scale of our digital assets have been instrumental in broadening our customer base. We've seen a 40% reduction in CPA since switching to their AI-powered layouts.",
    author: "Kevin Schrantz",
    role: "Chief Executive Officer",
    brand: "Omiana",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    avatarColor: "bg-green-100 text-green-600"
  },
  {
    quote: "Timely deliverance of creatives enables us to scale and execute our marketing programs quickly. The team is kind, thorough, and incredibly helpful during the onboarding process.",
    author: "Jessica DeLucia",
    role: "Digital Marketing Manager",
    brand: "Westgate Resorts",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    avatarColor: "bg-purple-100 text-purple-600"
  },
  {
    quote: "We were skeptical about AI design at first, but the results speak for themselves. The conversion rates on our new landing pages are significantly higher than our manual designs.",
    author: "Sarah Jenkins",
    role: "Founder",
    brand: "EcoTech",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    avatarColor: "bg-orange-100 text-orange-600"
  },
  {
    quote: "The ability to generate hundreds of on-brand variations in minutes changed our entire workflow. Sirz is now a core part of our creative tech stack.",
    author: "David Chen",
    role: "Creative Director",
    brand: "FlowSaaS",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    avatarColor: "bg-slate-200 text-slate-700"
  },
  {
    quote: "Finally, a tool that understands brand guidelines. The 'Brand LLM' feature ensures every site we launch looks and feels like it was hand-crafted by our top designers.",
    author: "Elena Rodriguez",
    role: "Head of Design",
    brand: "Vogue Partners",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
    avatarColor: "bg-pink-100 text-pink-600"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-slate-100/50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Social Proof</p>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
              The Wall of <span className="text-blue-600">Success.</span>
            </h2>
            <p className="mt-6 text-lg text-gray-500 font-medium">
              Join 2,000+ businesses scaling their digital presence with Sirz.
            </p>
          </div>
          <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={t.avatar} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm font-bold">
              <span className="text-slate-900">4.9/5</span>
              <span className="text-gray-400 ml-1">from 500+ reviews</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-[2rem] border border-gray-200 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex space-x-1 mb-6">
                  {[...Array(t.rating)].map((_, idx) => (
                    <svg key={idx} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 text-[15px] leading-relaxed mb-8 font-medium">"{t.quote}"</p>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full ${t.avatarColor} flex items-center justify-center font-black text-xs overflow-hidden border border-gray-100 shadow-sm`}>
                    <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm flex items-center">
                      {t.author}
                      <svg className="w-3.5 h-3.5 ml-1.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </h5>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
                <div className="font-black text-slate-300 text-[10px] uppercase tracking-widest">{t.brand}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-4 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-all shadow-lg">
            See More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
