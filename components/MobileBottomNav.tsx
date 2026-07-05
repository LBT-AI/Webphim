'use client';

import React from 'react';
import { Home, Flame, Radio, Search, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileBottomNav() {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', icon: Home, label: 'Trang chủ' },
    { href: '/xem/hot', icon: Flame, label: 'HOT' },
    { href: '/live', icon: Radio, label: 'Live' },
    { href: '/search', icon: Search, label: 'Search' },
    { href: '/account', icon: User, label: 'Account' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-xl border-t border-white/[0.06] pb-safe">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className="relative flex flex-col items-center justify-center gap-1 w-16 h-full group"
            >
              <div className={`transition-all duration-300 ${isActive ? 'text-[#FF2D55] -translate-y-1' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                <Icon className="w-5.5 h-5.5" />
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${isActive ? 'text-white opacity-100' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                {item.label}
              </span>
              
              {isActive && (
                <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-[#FF2D55] to-[#8B5CF6] rounded-t-full shadow-[0_-2px_10px_rgba(255,45,85,0.5)]" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
