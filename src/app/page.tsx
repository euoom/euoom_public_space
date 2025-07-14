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
              Welcome to euoom's public space!
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
        <section>
          <h2 className="text-2xl font-bold mb-4">Featured Services</h2>
          <div className="flex gap-4">
            {/* Placeholder for services */}
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">[Service A]</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Brief description of Service A.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">[Service B]</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Brief description of Service B.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="w-full p-4 bg-gray-800 text-white text-center">
        <p>© 2025 euoom's public space</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Social Links
          </a>
        </div>
      </footer>
    </div>
  );
}
