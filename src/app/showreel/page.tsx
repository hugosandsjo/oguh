import Link from "next/link";

export default function ShowreelPage() {
  return (
    <div className="min-h-screen p-8">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center text-sm hover:underline underline-offset-4 mb-12"
      >
        ← Back to home
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Showreel</h1>

        {/* Video Container */}
        <div className="relative w-full aspect-video bg-gray-100 rounded-lg mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-gray-400">Video placeholder</div>
          </div>
        </div>

        {/* Description */}
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Here you can find a collection of my best work and creative process.
            The showreel demonstrates my skills in illustration, character
            design, and digital art.
          </p>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="text-xl font-medium mb-4">Technical Skills</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Digital Illustration</li>
                <li>Character Design</li>
                <li>Editorial Illustration</li>
                <li>Book Cover Design</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-medium mb-4">Tools</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Procreate</li>
                <li>Traditional Media</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
