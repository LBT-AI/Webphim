'use client';

import React from 'react';
import { Play, Info } from 'lucide-react';
import { Video } from '@/app/types';

interface HomeHeroProps {
  featuredVideo: Video;
}

export default function HomeHero({ featuredVideo }: HomeHeroProps) {
  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-[21/9] lg:aspect-[2.5/1] overflow-hidden group">
      <div className="absolute inset-0 bg-black">
        <img 
          src={featuredVideo.thumbnail} 
          alt={featuredVideo.title}
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-4xl mx-auto w-full">
        <div className="flex gap-2 mb-3">
          <span className="px-2 py-0.5 rounded text-[10px] font-black bg-[#FF2D55] text-white tracking-wider">ĐỘC QUYỀN</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-black bg-white/10 text-white backdrop-blur-md tracking-wider">4K ULTRA HD</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-2 drop-shadow-lg">
          {featuredVideo.title}
        </h1>
        
        <p className="text-sm md:text-base text-gray-300 max-w-2xl line-clamp-2 mb-6 text-shadow-sm">
          Siêu phẩm mới nhất vừa được cập nhật. Trải nghiệm không giới hạn với chất lượng 4K sắc nét cùng âm thanh sống động.
        </p>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <Play className="w-5 h-5 fill-black" />
            XEM NGAY
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm hover:bg-white/20 backdrop-blur-md transition-colors">
            <Info className="w-5 h-5" />
            CHI TIẾT
          </button>
        </div>
      </div>
    </div>
  );
}
