'use client';

import React from 'react';
import { User } from 'lucide-react';

interface LiveStreamCardProps {
  stream: {
    id: string;
    title: string;
    viewerCount: number;
    thumbnail: string;
    streamer: string;
  };
}

export default function LiveStreamCard({ stream }: LiveStreamCardProps) {
  return (
    <div className="group relative min-w-[240px] md:min-w-[280px] rounded-2xl overflow-hidden cursor-pointer">
      <div className="aspect-[9/16] md:aspect-[3/4] overflow-hidden bg-gray-900">
        <img 
          src={stream.thumbnail} 
          alt={stream.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      
      <div className="absolute top-3 left-3 flex gap-2">
        <div className="px-2 py-0.5 rounded text-[10px] font-black bg-[#FF2D55] text-white flex items-center gap-1 shadow-lg shadow-[#FF2D55]/30 animate-pulse">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
          LIVE
        </div>
        <div className="px-2 py-0.5 rounded text-[10px] font-bold bg-black/60 backdrop-blur-md text-white flex items-center gap-1">
          <User className="w-3 h-3" />
          {stream.viewerCount.toLocaleString()}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-bold text-sm line-clamp-1 mb-1">{stream.title}</h3>
        <p className="text-gray-300 text-xs flex items-center gap-1">
          <span className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#FF2D55] to-[#8B5CF6] flex items-center justify-center text-[8px] font-black">{stream.streamer[0]}</span>
          {stream.streamer}
        </p>
      </div>
    </div>
  );
}
