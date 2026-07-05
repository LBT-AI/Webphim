'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h2 className="text-xl font-bold mb-4">Đã có lỗi xảy ra!</h2>
      <button 
        onClick={() => reset()}
        className="px-4 py-2 bg-[#FF2D55] text-white rounded-lg"
      >
        Thử lại
      </button>
    </div>
  )
}
