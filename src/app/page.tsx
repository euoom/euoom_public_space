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
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Placeholder for blog posts */}
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">[Blog Post Title 1]</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Short description of post 1...
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">[Blog Post Title 2]</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Short description of post 2...
              </p>
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
