export default function BlogListPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-8">
        <section className="text-center py-16 bg-gray-100 dark:bg-gray-700 mb-8">
          <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
          <p className="text-lg">Read our latest articles.</p>
        </section>

        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search posts..."
              className="p-2 border rounded-lg w-1/2 dark:bg-gray-800 dark:text-white"
            />
            <select className="p-2 border rounded-lg dark:bg-gray-800 dark:text-white">
              <option>Category Filter</option>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">Blog Post Title 1</h3>
              <p className="text-gray-600 dark:text-gray-300">Date: YYYY-MM-DD</p>
              <p className="text-gray-600 dark:text-gray-300">Short excerpt of post 1.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">Blog Post Title 2</h3>
              <p className="text-gray-600 dark:text-gray-300">Date: YYYY-MM-DD</p>
              <p className="text-gray-600 dark:text-gray-300">Short excerpt of post 2.</p>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">Previous</button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">1</button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">2</button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">3</button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">Next</button>
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
