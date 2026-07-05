'use client';

import React from 'react';
import { Play, Eye, Clock, Star } from 'lucide-react';
import { Video } from '@/app/types';

interface VideoCardProps {
  video: Video;
  onClick: (id: string) => void;
}

export default function VideoCard({ video, onClick }: VideoCardProps) {
  return (
    <div 
      className="group cursor-pointer rounded-xl overflow-hidden bg-[#0e0e13] border border-white/5 hover:border-white/20 transition-all duration-300"
      onClick={() => onClick(video.id)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-[#FF2D55] text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_20px_rgba(255,45,85,0.5)]">
            <Play className="w-5 h-5 ml-1" />
          </div>
        </div>
        
        {video.isPremium && (
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-gradient-to-r from-amber-500 to-yellow-400 text-black text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-lg">
            <Star className="w-3 h-3 fill-black" />
            PREMIUM
          </div>
        )}
        
        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded-md bg-black/80 backdrop-blur-sm text-white text-[10px] font-medium flex items-center gap-1">
          <Clock className="w-3 h-3 text-[#8B5CF6]" />
          {video.duration || '00:00'}
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="text-sm font-bold text-gray-200 line-clamp-2 group-hover:text-[#FF2D55] transition-colors leading-snug">
          {video.title}
        </h3>
        
        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            <span>{(video.views || 0).toLocaleString()}</span>
          </div>
          {video.tags && video.tags.length > 0 && (
            <div className="px-1.5 border border-white/10 rounded text-[9px] uppercase tracking-wider text-[#8B5CF6]">
              {video.tags[0]}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
