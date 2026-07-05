import React from 'react';
import Link from 'next/link';
import { Flame, Play } from 'lucide-react';

export default function HotPage() {
  const albums = [
    {
      id: 'straight',
      title: 'STRAIGHT',
      count: 125,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
      color: 'from-blue-600 to-cyan-400'
    },
    {
      id: 'money-boy',
      title: 'MONEY BOY',
      count: 84,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
      color: 'from-emerald-600 to-teal-400'
    },
    {
      id: 'casting',
      title: 'CASTING',
      count: 210,
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
      color: 'from-purple-600 to-pink-500'
    },
    {
      id: 'gym',
      title: 'GYM BOYS',
      count: 56,
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
      color: 'from-orange-600 to-amber-400'
    },
    {
      id: 'massage',
      title: 'MASSAGE',
      count: 92,
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop',
      color: 'from-rose-600 to-red-500'
    },
    {
      id: 'student',
      title: 'STUDENT',
      count: 143,
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format&fit=crop',
      color: 'from-indigo-600 to-blue-500'
    },
    {
      id: 'couple',
      title: 'COUPLE',
      count: 67,
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop',
      color: 'from-red-600 to-orange-500'
    },
    {
      id: 'outdoor',
      title: 'OUTDOOR',
      count: 45,
      image: 'https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?q=80&w=800&auto=format&fit=crop',
      color: 'from-green-600 to-emerald-400'
    }
  ];

  return (
    <div className="py-6 px-4 lg:px-0 mb-10">
      <div className="mb-8 text-center md:text-left pt-4">
        <h1 className="text-3xl font-black text-white flex items-center justify-center md:justify-start gap-3 uppercase tracking-tight">
          <Flame className="w-8 h-8 text-[#FF2D55] animate-pulse" />
          Bộ Sưu Tập HOT
        </h1>
        <p className="text-gray-400 mt-2 text-sm max-w-2xl mx-auto md:mx-0">
          Khám phá những album đặc sắc được phân loại riêng biệt, cập nhật liên tục với chất lượng cao nhất.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {albums.map((album) => (
          <Link href={`/category/${album.id}`} key={album.id} className="group relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square cursor-pointer block border border-white/10 hover:border-[#FF2D55]/50 transition-all duration-500 shadow-lg">
            <img 
              src={album.image} 
              alt={album.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            
            {/* Gradient Overlays */}
            <div className={`absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${album.color} mix-blend-multiply`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <Play className="w-5 h-5 md:w-6 md:h-6 text-white ml-1 fill-white" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h2 className="text-lg md:text-xl font-black text-white uppercase tracking-wider drop-shadow-md mb-1">
                {album.title}
              </h2>
              <p className="text-xs font-bold text-gray-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF2D55] animate-pulse" />
                {album.count} VIDEOS
              </p>
            </div>
            
            <div className="absolute top-3 right-3">
              <div className="px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-md border border-white/10 text-[9px] md:text-[10px] font-black text-[#FF2D55] uppercase tracking-widest shadow-xl flex items-center gap-1">
                <Flame className="w-3 h-3" /> HOT
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
