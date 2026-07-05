'use client';

import React from 'react';
import { Flame } from 'lucide-react';
import VideoCard from './VideoCard';
import { Video } from '@/app/types';

interface VideoSectionProps {
  title: string;
  videos: Video[];
  icon?: React.ReactNode;
}

export default function VideoSection({ title, videos, icon }: VideoSectionProps) {
  return (
    <section className="py-6 px-4 lg:px-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          {icon || <Flame className="w-5 h-5 text-[#FF2D55]" />}
          {title}
        </h2>
        <button className="text-xs font-bold text-[#FF2D55] hover:text-[#ff4d6d]">XEM TẤT CẢ</button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
        {videos.map(video => (
          <VideoCard 
            key={video.id} 
            video={video} 
            onClick={(id) => console.log('Navigate to video', id)} 
          />
        ))}
      </div>
    </section>
  );
}
