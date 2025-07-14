import { Navigation } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-center py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Welcome to euoom&apos;s public space!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your personal blog and portfolio space
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/blog"
                className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Read Blog
              </a>
              <a
                href="/project"
                className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Latest Blog Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder for blog posts */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Getting Started with Next.js
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn the fundamentals of Next.js and how to build modern web
                  applications...
                </p>
                <span className="text-sm text-gray-500">January 15, 2025</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  React Best Practices
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover essential patterns and practices for writing clean,
                  maintainable React code...
                </p>
                <span className="text-sm text-gray-500">January 10, 2025</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  TypeScript Deep Dive
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced TypeScript techniques for building robust
                  applications...
                </p>
                <span className="text-sm text-gray-500">January 5, 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Featured Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Placeholder for services */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Web Development
                </h3>
                <p className="text-gray-600">
                  Custom web applications built with modern technologies and
                  best practices.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Consulting
                </h3>
                <p className="text-gray-600">
                  Technical consulting and code reviews to help optimize your
                  development process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">
                euoom's public space
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              © 2025 euoom's public space. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
