import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h2 className="text-xl font-bold mb-4">Không tìm thấy trang</h2>
      <Link 
        href="/"
        className="px-4 py-2 bg-[#FF2D55] text-white rounded-lg"
      >
        Về trang chủ
      </Link>
    </div>
  )
}
