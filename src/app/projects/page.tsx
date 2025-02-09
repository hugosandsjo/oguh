import Image from "next/image";
import Link from "next/link";
import { illustrations } from "@/data/illustrations";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-8">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center text-sm font-light hover:underline underline-offset-4 mb-12"
      >
        ← Back to home
      </Link>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light tracking-tight mb-12">
          All Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {illustrations.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <div
                className={`relative ${project.aspectRatio} w-full rounded-lg overflow-hidden bg-gray-100 mb-4`}
              >
                <div
                  className={`absolute inset-0 ${project.color} animate-pulse`}
                />
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <h2 className="text-xl font-light mb-2">{project.title}</h2>
              <p className="text-gray-600 font-light">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
