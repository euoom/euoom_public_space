import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="w-full p-4 bg-gray-800 임시 text-white flex justify-between items-center">
        <div className="text-xl font-bold">[로고/사이트명]</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/service" className="hover:underline">Service</a></li>
            <li><a href="/project" className="hover:underline">Project</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-8">
        {/* Hero Section */}
        <section className="text-center py-16 bg-gray-100 dark:bg-gray-700 mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to euoom's public space!</h1>
          <p className="text-lg">Your personal blog and portfolio.</p>
        </section>

        {/* Latest Blog Posts */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Placeholder for blog posts */}
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">[Blog Post Title 1]</h3>
              <p className="text-gray-600 dark:text-gray-300">Short description of post 1...</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">[Blog Post Title 2]</h3>
              <p className="text-gray-600 dark:text-gray-300">Short description of post 2...</p>
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
              <p className="text-gray-600 dark:text-gray-300">Brief description of Service A.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">[Service B]</h3>
              <p className="text-gray-600 dark:text-gray-300">Brief description of Service B.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="w-full p-4 bg-gray-800 text-white text-center">
        <p>© 2025 euoom's public space</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Social Links</a>
        </div>
      </footer>
    </div>
  );
}
