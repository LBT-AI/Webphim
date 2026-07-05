'use client';

import React from 'react';
import Link from 'next/link';
import { Crown, Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 -ml-2 text-gray-400 hover:text-white transition-colors lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF2D55] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_15px_rgba(255,45,85,0.4)] group-hover:shadow-[0_0_25px_rgba(255,45,85,0.6)] transition-all">
              <span className="text-white font-black text-lg tracking-tighter">P</span>
            </div>
            <span className="text-xl font-black text-white tracking-tight hidden sm:block">
              PRISM<span className="text-[#FF2D55]">X</span>
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-sm font-bold text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">TRANG CHỦ</Link>
          <Link href="/xem/hot" className="text-[#FF2D55] hover:text-[#ff4d6d] transition-colors flex items-center gap-1">
            HOT <div className="w-1.5 h-1.5 rounded-full bg-[#FF2D55] animate-pulse" />
          </Link>
          <Link href="/category/jav" className="hover:text-white transition-colors">JAV</Link>
          <Link href="/category/onlyfans" className="hover:text-white transition-colors">ONLYFANS</Link>
          <Link href="/live" className="hover:text-white transition-colors flex items-center gap-1">
            LIVE <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <Search className="w-5 h-5" />
          </button>
          
          <Link href="/vip" className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-400/20 border border-amber-500/30 text-amber-400 hover:bg-amber-500/30 transition-all text-xs font-bold shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Crown className="w-4 h-4" />
            <span>NÂNG CẤP VIP</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
