export default function ServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
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

      <main className="flex-grow p-8">
        <section className="text-center py-16 bg-gray-100 dark:bg-gray-700 mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg">Here are the services we offer.</p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">Service 1 Title</h3>
              <p className="text-gray-600 dark:text-gray-300">Brief description of Service 1.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">Service 2 Title</h3>
              <p className="text-gray-600 dark:text-gray-300">Brief description of Service 2.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">Service 3 Title</h3>
              <p className="text-gray-600 dark:text-gray-300">Brief description of Service 3.</p>
            </div>
          </div>
        </section>
      </main>

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
