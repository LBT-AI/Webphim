'use client';

import React from 'react';
import Link from 'next/link';

interface CategoryStripProps {
  categories: { id: string; name: string; isHot?: boolean }[];
}

export default function CategoryStrip({ categories }: CategoryStripProps) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-4 border-b border-white/[0.06] bg-[#0a0a0f]">
      <div className="flex px-4 gap-2 min-w-max">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            href={`/category/${category.id}`}
            className="relative px-4 py-1.5 rounded-full bg-[#0e0e13] border border-white/10 hover:border-white/20 transition-all text-xs font-bold text-gray-300 hover:text-white"
          >
            {category.name}
            {category.isHot && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2D55] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF2D55] border border-[#0a0a0f]"></span>
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
