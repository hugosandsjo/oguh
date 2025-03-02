import Image from "next/image";
import { illustrations } from "@/data/illustrations";
import { notFound } from "next/navigation";
import ImageCarousel from "@/components/ImageCarousel";
import type { Metadata, ResolvingMetadata } from "next";
import BackToHomeButton from "@/components/BackToHomeButton";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { slug } = params;

  // Find all illustrations with this slug
  const relatedIllustrations = illustrations.filter(
    (illustration) => illustration.slug === slug
  );

  if (relatedIllustrations.length === 0) {
    return {
      title: "Project Not Found",
    };
  }

  // Get the first one for metadata purposes
  const project = relatedIllustrations[0];

  // optionally access and extend parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: [project.imagePath, ...previousImages],
    },
  };
}

export default function ProjectPage({ params, searchParams }: Props) {
  const { slug } = params;
  
  // Find all illustrations with this slug
  const relatedIllustrations = illustrations.filter(
    (illustration) => illustration.slug === slug
  );

  if (relatedIllustrations.length === 0) {
    notFound();
  }

  // Get the imageIndex from the query params (which illustration in the related group)
  const imageIndexParam = searchParams.imageIndex;
  const imageIndex = typeof imageIndexParam === 'string' ? 
    parseInt(imageIndexParam, 10) : 0;
  
  // Get the illustration that should be the main one
  const mainIllustration = relatedIllustrations[imageIndex] || relatedIllustrations[0];
  
  // Collect all images from all related illustrations
  const allImages = relatedIllustrations.reduce((acc, illustration) => {
    // Add the main image
    acc.push(illustration.imagePath);
    
    // Add any additional images
    if (illustration.additionalImages) {
      acc.push(...illustration.additionalImages);
    }
    
    return acc;
  }, [] as string[]);
  
  // Remove duplicates
  const uniqueImages = [...new Set(allImages)];
  
  // Make sure the main image is first in the array
  const orderedImages = [
    mainIllustration.imagePath,
    ...uniqueImages.filter(img => img !== mainIllustration.imagePath)
  ];

  return (
    <div className="p-8">
      <BackToHomeButton />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-semibold mb-4">{mainIllustration.title}</h1>
        <p className="text-lg mb-8">{mainIllustration.description}</p>

        {/* Main Image */}
        <div className="relative w-full mb-4 bg-gray-100 overflow-hidden">
          <div className="relative w-full h-auto">
            <Image
              src={mainIllustration.imagePath}
              alt={mainIllustration.title}
              width={1200}
              height={800}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Additional Images */}
        {orderedImages.length > 1 && (
          <ImageCarousel
            images={orderedImages.slice(1)}
            title={mainIllustration.title}
          />
        )}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  // Get unique slugs
  const uniqueSlugs = [...new Set(illustrations.map(ill => ill.slug))];
  
  return uniqueSlugs.map((slug) => ({
    slug,
  }));
}
