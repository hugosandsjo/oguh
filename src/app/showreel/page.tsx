import Link from "next/link";

export default function ShowreelPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-medium tracking-tight mb-12">Showreel</h1>

        {/* Video Container */}
        <div className="relative w-full aspect-video bg-gray-100 rounded-lg mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-gray-400">Video placeholder</div>
          </div>
        </div>

        {/* Description */}
      </div>
    </div>
  );
}
