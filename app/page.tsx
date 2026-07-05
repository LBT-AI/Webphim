import CategoryStrip from "@/components/CategoryStrip";
import HomeHero from "@/components/HomeHero";
import LiveSection from "@/components/LiveSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  const categories = [
    { id: '1', name: 'TẤT CẢ' },
    { id: '2', name: 'PHIM MỚI', isHot: true },
    { id: '3', name: 'NHẬT BẢN' },
    { id: '4', name: 'HÀN QUỐC' },
    { id: '5', name: 'ÂU MỸ' },
    { id: '6', name: 'KHÔNG CHE', isHot: true },
    { id: '7', name: 'VIỆT NAM' },
  ];

  const featuredVideo = {
    id: 'hero-1',
    title: 'SIÊU PHẨM MÙA HÈ NÀY',
    thumbnail: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1200&auto=format&fit=crop',
    duration: '1:45:00',
    views: 450000,
    isPremium: true
  };

  const trendingVideos = [
    { id: '1', title: 'Siêu phẩm HD', thumbnail: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=800&auto=format&fit=crop', duration: '45:20', views: 125000, tags: ['HD', 'VIETNAM'] },
    { id: '2', title: 'Hành động kịch tính', thumbnail: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop', duration: '1:12:00', views: 89000, isPremium: true, tags: ['ACTION'] },
    { id: '3', title: 'Tình cảm lãng mạn', thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop', duration: '32:15', views: 34000, tags: ['KOREA'] },
    { id: '4', title: 'Hài hước vui nhộn', thumbnail: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop', duration: '1:05:00', views: 56000, tags: ['COMEDY'] },
    { id: '5', title: 'Du lịch khám phá', thumbnail: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop', duration: '55:30', views: 78000, tags: ['EUROPE'] },
  ];

  return (
    <div className="flex flex-col gap-2 pb-10">
      <CategoryStrip categories={categories} />
      <HomeHero featuredVideo={featuredVideo} />
      <LiveSection />
      <VideoSection title="XEM NHIỀU NHẤT TRONG TUẦN" videos={trendingVideos} />
      <VideoSection title="PHIM MỚI CẬP NHẬT" videos={trendingVideos.slice().reverse()} />
    </div>
  );
}
