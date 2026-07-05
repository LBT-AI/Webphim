'use client';

import React from 'react';
import { Radio } from 'lucide-react';
import LiveStreamCard from './LiveStreamCard';

export default function LiveSection() {
  const dummyStreams = [
    { id: '1', title: 'Phòng VIP Riêng Tư 1', viewerCount: 1450, thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop', streamer: 'Lina_Cute' },
    { id: '2', title: 'Đêm Party Cuối Tuần', viewerCount: 3200, thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop', streamer: 'DJ_Mix' },
    { id: '3', title: 'Giao lưu cùng Idol', viewerCount: 890, thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop', streamer: 'Sara99' },
  ];

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-4 px-4 lg:px-0">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <Radio className="w-5 h-5 text-[#8B5CF6] animate-pulse" />
          ĐANG TRỰC TIẾP
        </h2>
        <button className="text-xs font-bold text-[#8B5CF6] hover:text-[#7c3aed]">XEM TẤT CẢ</button>
      </div>
      
      <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 lg:px-0 pb-4">
        {dummyStreams.map(stream => (
          <LiveStreamCard key={stream.id} stream={stream} />
        ))}
      </div>
    </section>
  );
}
