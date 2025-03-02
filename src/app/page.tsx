import Image from "next/image";
import Link from "next/link";
import { illustrations } from "@/data/illustrations";

export default function Home() {
  return (
    <div className="md:p-8 p-4">
      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {illustrations.map((illustration) => (
            <div key={illustration.id} className="break-inside-avoid mb-4">
              <Link
                href={`/projects/${illustration.slug}`}
                className="block group relative w-full"
              >
                <div className={`relative w-full overflow-hidden bg-gray-100`}>
                  <div
                    className={`absolute inset-0 ${illustration.color} animate-pulse`}
                  />
                  <div className="relative">
                    <Image
                      src={illustration.imagePath}
                      alt={illustration.title}
                      width={1200}
                      height={1200}
                      priority
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <span className="text-white text-2xl font-semibold tracking-wide">
                        {illustration.title}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
