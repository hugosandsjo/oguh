"use client";

import Image from "next/image";

type Props = {
  images: string[];
  title: string;
};

export default function ImageCarousel({ images, title }: Props) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-light tracking-tight">More Images</h2>
        <div className="flex gap-4">
          <button
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Scroll left"
            onClick={() => {
              const container = document.getElementById("image-scroll");
              if (container) {
                container.scrollLeft -= container.offsetWidth;
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Scroll right"
            onClick={() => {
              const container = document.getElementById("image-scroll");
              if (container) {
                container.scrollLeft += container.offsetWidth;
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="image-scroll"
        className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square w-80 flex-none bg-gray-100 overflow-hidden snap-start"
          >
            <Image
              src={image}
              alt={`${title} - Image ${index + 2}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
