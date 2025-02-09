import Image from "next/image";
import Link from "next/link";
import { illustrations } from "@/data/illustrations";

export default function Home() {
  return (
    <div className="p-8">
      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {illustrations.map((illustration) => {
            // Calculate dynamic height based on aspect ratio
            let height = "400px";
            if (illustration.aspectRatio === "aspect-[3/4]") height = "500px";
            if (illustration.aspectRatio === "aspect-[16/9]") height = "300px";
            if (illustration.aspectRatio === "aspect-[1/1.5]") height = "600px";
            if (illustration.aspectRatio === "aspect-[5/7]") height = "550px";

            return (
              <div key={illustration.id} className="break-inside-avoid mb-4">
                <Link
                  href={`/projects/${illustration.slug}`}
                  className={`block group relative w-full`}
                  style={{ height }}
                >
                  <div
                    className={`relative w-full h-full overflow-hidden bg-gray-100`}
                  >
                    <div
                      className={`absolute inset-0 ${illustration.color} animate-pulse`}
                    />
                    <Image
                      src={illustration.imagePath}
                      alt={illustration.title}
                      fill
                      priority
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                      <span className="text-white font-light tracking-wide">
                        {illustration.title}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
