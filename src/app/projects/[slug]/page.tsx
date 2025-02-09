import Link from "next/link";

// Mock data for a single project
const getProjectData = (slug: string) => ({
  title: "Project Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  images: [
    { id: 1, color: "bg-purple-200" },
    { id: 2, color: "bg-blue-200" },
    { id: 3, color: "bg-green-200" },
    { id: 4, color: "bg-pink-200" },
  ],
});

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug);

  return (
    <div className="min-h-screen p-8">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center text-sm hover:underline underline-offset-4 mb-12"
      >
        ← Back to projects
      </Link>

      <div className="max-w-4xl mx-auto">
        {/* Project info */}
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <p className="text-gray-600 mb-12">{project.description}</p>

        {/* Image Carousel */}
        <div className="relative group">
          <div
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex gap-4">
              {project.images.map((image) => (
                <div
                  key={image.id}
                  className={`${image.color} flex-none w-[300px] h-[300px] rounded-lg`}
                  role="img"
                  aria-label={`Project image ${image.id}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous image"
            onClick={() => {
              const container = document.querySelector(".overflow-x-auto");
              if (container) {
                container.scrollLeft -= 300;
              }
            }}
          >
            ←
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next image"
            onClick={() => {
              const container = document.querySelector(".overflow-x-auto");
              if (container) {
                container.scrollLeft += 300;
              }
            }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
