import Image from "next/image";
import { illustrations } from "@/data/illustrations";
import { notFound } from "next/navigation";
import ImageCarousel from "@/components/ImageCarousel";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  // find project
  const project = illustrations.find(
    (illustration) => illustration.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = illustrations.find(
    (illustration) => illustration.slug === slug
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
        <div className="relative h-full aspect-[16/9] w-full mb-12 bg-gray-100 overflow-hidden">
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

export function generateStaticParams() {
  return illustrations.map((illustration) => ({
    slug: illustration.slug,
  }));
}
