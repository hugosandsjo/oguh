import Image from "next/image";
import Link from "next/link";

// Mock data for illustrations with different aspect ratios
const illustrations = [
  {
    id: 1,
    slug: "illustration-1",
    title: "Character Design",
    color: "bg-purple-200",
    aspectRatio: "aspect-[3/4]", // Vertical
  },
  {
    id: 2,
    slug: "illustration-2",
    title: "Festival Poster",
    color: "bg-blue-200",
    aspectRatio: "aspect-square", // Square
  },
  {
    id: 3,
    slug: "illustration-3",
    title: "Editorial",
    color: "bg-green-200",
    aspectRatio: "aspect-[16/9]", // Horizontal
  },
  {
    id: 4,
    slug: "illustration-4",
    title: "Book Cover",
    color: "bg-pink-200",
    aspectRatio: "aspect-[4/3]", // Horizontal
  },
  {
    id: 5,
    slug: "illustration-5",
    title: "Character Set",
    color: "bg-yellow-200",
    aspectRatio: "aspect-[1/1.5]", // Vertical
  },
  {
    id: 6,
    slug: "illustration-6",
    title: "Magazine Cover",
    color: "bg-red-200",
    aspectRatio: "aspect-[5/7]", // Vertical
  },
  {
    id: 7,
    slug: "illustration-7",
    title: "Concept Art",
    color: "bg-indigo-200",
    aspectRatio: "aspect-[16/9]", // Horizontal
  },
  {
    id: 8,
    slug: "illustration-8",
    title: "Digital Painting",
    color: "bg-orange-200",
    aspectRatio: "aspect-square", // Square
  },
];

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      {/* Logo */}
      <div className="flex justify-center mb-16">
        <h1 className="text-6xl font-bold">OGUH</h1>
      </div>

      {/* Navigation */}
      <nav className="flex justify-center gap-8 mb-16">
        <Link
          href="/"
          className="text-sm hover:underline underline-offset-4"
          aria-current="page"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="text-sm hover:underline underline-offset-4"
        >
          Projects
        </Link>
        <Link
          href="/showreel"
          className="text-sm hover:underline underline-offset-4"
        >
          Showreel
        </Link>
        <Link
          href="/contact"
          className="text-sm hover:underline underline-offset-4"
        >
          Contact
        </Link>
      </nav>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] mx-auto max-w-7xl">
        {illustrations.map((illustration) => (
          <Link
            key={illustration.id}
            href={`/projects/${illustration.slug}`}
            className="block group relative mb-6 break-inside-avoid"
          >
            <div
              className={`${illustration.color} ${illustration.aspectRatio} w-full rounded-lg transition-transform duration-300 group-hover:scale-[0.98]`}
              role="img"
              aria-label={illustration.title}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-lg">
              <span className="text-white font-medium">
                {illustration.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
