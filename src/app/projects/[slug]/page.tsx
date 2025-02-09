import Image from "next/image";
import { illustrations } from "@/data/illustrations";
import { notFound } from "next/navigation";
import ImageCarousel from "@/components/ImageCarousel";

// Updated type definition to match Next.js App Router expectations
type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Change the function signature to use the new type
export default function ProjectPage({ params }: Props) {
  const project = illustrations.find(
    (illustration) => illustration.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">{project.title}</h1>
        <p className="text-gray-600 mb-12">{project.description}</p>

        {/* Main Image */}
        <div className="relative h-full aspect-[1/1] w-full mb-12 bg-gray-100 overflow-hidden">
          <Image
            src={project.imagePath}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Additional Images */}
        {project.additionalImages && project.additionalImages.length > 0 && (
          <ImageCarousel
            images={project.additionalImages}
            title={project.title}
          />
        )}
      </div>
    </div>
  );
}

// Generate static params for all projects
export function generateStaticParams() {
  return illustrations.map((illustration) => ({
    slug: illustration.slug,
  }));
}
