"use client";
import Image from "next/image";

type Props = {
  images: string[];
  title: string;
};

export default function ImageCarousel({ images, title }: Props) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <Image
              src={image}
              alt={`${title} - Image ${index + 2}`}
              width={800}
              height={600}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
