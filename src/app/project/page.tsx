export default function ProjectPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-8">
        <section className="text-center py-16 bg-gray-100 dark:bg-gray-700 mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg">Explore our recent works.</p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">Project Title A</h3>
              <p className="text-gray-600 dark:text-gray-300">Short description of Project A.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">Project Title B</h3>
              <p className="text-gray-600 dark:text-gray-300">Short description of Project B.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">Project Title C</h3>
              <p className="text-gray-600 dark:text-gray-300">Short description of Project C.</p>
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
