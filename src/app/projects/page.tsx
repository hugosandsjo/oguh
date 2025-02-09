import Link from "next/link";

// Reusing the illustrations data
const illustrations = [
  {
    id: 1,
    slug: "illustration-1",
    title: "Character Design",
    color: "bg-purple-200",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 2,
    slug: "illustration-2",
    title: "Festival Poster",
    color: "bg-blue-200",
    aspectRatio: "aspect-square",
  },
  {
    id: 3,
    slug: "illustration-3",
    title: "Editorial",
    color: "bg-green-200",
    aspectRatio: "aspect-[16/9]",
  },
  {
    id: 4,
    slug: "illustration-4",
    title: "Book Cover",
    color: "bg-pink-200",
    aspectRatio: "aspect-[4/3]",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-8">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center text-sm hover:underline underline-offset-4 mb-12"
      >
        ← Back to home
      </Link>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">All Projects</h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {illustrations.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <div
                className={`${project.color} ${project.aspectRatio} w-full rounded-lg mb-4 transition-transform duration-300 group-hover:scale-[0.98]`}
                role="img"
                aria-label={project.title}
              />
              <h2 className="text-xl font-medium mb-2">{project.title}</h2>
              <p className="text-gray-600">
                Click to view project details and more images
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
