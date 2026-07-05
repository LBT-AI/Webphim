'use client';

import React from 'react';
import { Heart, Eye, User, LogOut } from 'lucide-react';
import { User as UserType, Video } from '@/app/types';
import VideoCard from './VideoCard';

interface AccountProfileCardProps {
  currentUser: UserType | null;
  favorites: string[];
  watchHistory: string[];
  videos: Video[];
  onLogout: () => void;
  onLogin: () => void;
  onSelectVideo: (id: string) => void;
}

export default function AccountProfileCard({
  currentUser, favorites, watchHistory, videos, onLogout, onLogin, onSelectVideo
}: AccountProfileCardProps) {
  const favoriteVideos = videos.filter(v => favorites.includes(v.id));
  const historyVideos = videos.filter(v => watchHistory.includes(v.id)).slice(0, 6);

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-b from-[#0e0e13] to-[#0a0a0f] border border-white/[0.06] rounded-3xl p-6 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF2D55] via-[#8B5CF6] to-[#EC4899]" />
        <div className="w-[82px] h-[82px] rounded-full bg-gradient-to-tr from-[#FF2D55] to-[#8B5CF6] flex items-center justify-center font-black text-3xl text-white uppercase shadow-[0_0_25px_rgba(255,45,85,0.35)] mb-4">
          {currentUser?.username?.[0] || 'U'}
        </div>
        <h1 className="text-xl font-black text-white tracking-tight">TÀI KHOẢN: {currentUser?.username || 'KHÁCH'}</h1>
        <p className="text-xs text-[#8B5CF6] font-semibold mt-1">{currentUser?.email || 'Chưa đăng nhập'}</p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          <span className="px-3 py-0.5 rounded-full text-[10px] font-bold bg-[#FF2D55]/10 text-[#FF2D55] border border-[#FF2D55]/20">VIP GOLD MEMBER</span>
          <span className="px-3 py-0.5 rounded-full text-[10px] font-bold bg-white/5 text-gray-400 border border-white/10">Xác minh: ĐÃ ĐỦ TUỔI</span>
        </div>
        <div className="mt-5">
          {currentUser ? (
            <button onClick={onLogout} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 text-xs font-bold transition-all cursor-pointer">
              <LogOut className="w-3.5 h-3.5" />
              <span>Đăng xuất</span>
            </button>
          ) : (
            <button onClick={onLogin} className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] text-white text-xs font-bold hover:opacity-90 transition-all cursor-pointer shadow-[0_4px_15px_rgba(255,45,85,0.3)]">
              Đăng nhập ngay
            </button>
          )}
        </div>
      </div>

      <section className="space-y-4">
        <h3 className="text-white text-sm font-bold tracking-tight flex items-center gap-2">
          <Heart className="w-4 h-4 text-[#FF2D55] fill-[#FF2D55]" />
          DANH SÁCH PHIM YÊU THÍCH ({favorites.length})
        </h3>
        {favoriteVideos.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {favoriteVideos.map(video => (
              <VideoCard key={video.id} video={video} onClick={onSelectVideo} />
            ))}
          </div>
        ) : (
          <div className="bg-[#0e0e13] border border-white/[0.06] rounded-2xl p-8 text-center">
            <Heart className="w-8 h-8 text-gray-500 mx-auto mb-2" />
            <p className="text-sm text-gray-400">Chưa có phim yêu thích</p>
            <p className="text-xs text-gray-600 mt-1">Hãy thêm phim vào danh sách yêu thích để xem sau.</p>
          </div>
        )}
      </section>

      <section className="space-y-4">
        <h3 className="text-white text-sm font-bold tracking-tight flex items-center gap-2">
          <Eye className="w-4 h-4 text-[#8B5CF6]" />
          LỊCH SỬ XEM ({watchHistory.length})
        </h3>
        {historyVideos.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {historyVideos.map(video => (
              <VideoCard key={video.id} video={video} onClick={onSelectVideo} />
            ))}
          </div>
        ) : (
          <div className="bg-[#0e0e13] border border-white/[0.06] rounded-2xl p-8 text-center">
            <Eye className="w-8 h-8 text-gray-500 mx-auto mb-2" />
            <p className="text-sm text-gray-400">Chưa có lịch sử xem</p>
          </div>
        )}
      </section>
    </div>
  );
}
