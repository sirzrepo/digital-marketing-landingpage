
import React, { useState, useMemo, useEffect } from 'react';

interface Ad {
  id: string;
  title: string;
  img: string;
  category: string;
}

const AdSamples: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  // Dynamic data from backend
  const [categories, setCategories] = useState<string[]>(['All']);
  const [images, setImages] = useState<Ad[]>([]);
  // const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL ?? '';
  const API_BASE_URL = 'https://api.sirz.co.uk';

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const endpoint =
          activeCategory === 'All'
            ? `${API_BASE_URL}/api/digital-images/published`
            : `${API_BASE_URL}/api/digital-images/category/${encodeURIComponent(activeCategory)}`;

        const res = await fetch(endpoint);
        if (!res.ok) throw new Error(`Failed fetching images: ${res.statusText}`);
        const data = await res.json();

        const mapped: Ad[] = data.map((item: any) => ({
          id: item._id ?? item.id ?? `${item.title}-${item.image}`,
          title: item.title,
          img: item.image ?? item.img,
          category: item.category,
        }));

        setImages(mapped);

        if (activeCategory === 'All') {
          const unique = Array.from(new Set(mapped.map((d) => d.category))).sort();
          setCategories(['All', ...unique]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchImages();
  }, [activeCategory, API_BASE_URL]);

  const filteredCreatives = useMemo(() => images, [images]);

  return (
    <section id="ads" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-2">Creative Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Our Creative Categories</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">Explore high-performance ad formats tailored to every major business vertical.</p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-white border-slate-200 text-slate-500 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredCreatives.map((ad, index) => (
           <div 
              key={index} 
              className="group relative aspect-[16/10] bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-xl animate-in fade-in"
            >
              <img 
                src={ad.img} 
                alt={ad.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200";
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <span className="text-[8px] font-black uppercase text-blue-400 mb-1 tracking-widest">{ad.category}</span>
                <p className="text-white text-xs font-bold leading-tight">{ad.title}</p>
              </div>

              <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/40 backdrop-blur-md text-[7px] font-black text-white rounded uppercase tracking-tighter border border-white/10">
                {ad.category}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex -space-x-3">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                 <img src={`https://i.pravatar.cc/150?u=${i+25}`} alt="user" className="w-full h-full object-cover" />
               </div>
             ))}
          </div>
          <p className="text-sm font-bold text-slate-600">Scaling <span className="text-blue-600">10,000+ creatives</span> daily across these categories.</p>
        </div>
      </div>
    </section>
  );
};

export default AdSamples;
