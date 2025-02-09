import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen p-8">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center text-sm hover:underline underline-offset-4 mb-12"
      >
        ← Back to home
      </Link>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Contact</h1>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Alternative Contact Methods */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-xl font-medium mb-6">Other Ways to Connect</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong className="text-black">Email:</strong>{" "}
              <a href="mailto:hello@example.com" className="hover:underline">
                hello@example.com
              </a>
            </p>
            <p>
              <strong className="text-black">Instagram:</strong>{" "}
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @yourusername
              </a>
            </p>
            <p>
              <strong className="text-black">Location:</strong> Stockholm,
              Sweden
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
