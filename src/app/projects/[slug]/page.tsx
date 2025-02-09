import Image from "next/image";
import { illustrations } from "@/data/illustrations";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

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
        <h1 className="text-4xl font-light tracking-tight mb-6">
          {project.title}
        </h1>
        <p className="text-gray-600 mb-12">{project.description}</p>

        {/* Main Image */}
        <div className="relative aspect-[16/9] w-full mb-12 bg-gray-100 overflow-hidden">
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
          <div className="space-y-8">
            <h2 className="text-2xl font-light tracking-tight">More Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.additionalImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square w-full bg-gray-100 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
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
