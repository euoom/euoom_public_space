import { getPostContent, PostData } from './getPostContent'; // getPostContent 함수 import 및 PostData 타입 임포트
import MermaidRenderer from './MermaidRenderer'; // MermaidRenderer 컴포넌트 import

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;
  const postData: PostData = await getPostContent(awaitedParams.slug); // PostData 타입 명시
  const { contentHtml, ...frontmatter } = postData; // contentHtml과 나머지 frontmatter 데이터를 분리

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
        <section className="text-center py-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Date: {frontmatter.date} | Author: {frontmatter.author}</p>
          {frontmatter.tags && Array.isArray(frontmatter.tags) && frontmatter.tags.length > 0 && (
            <div className="flex justify-center mt-2">
              {frontmatter.tags.map((tag: string, index: number) => (
                <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </section>

        <section className="prose dark:prose-invert mb-8">
          <MermaidRenderer contentHtml={contentHtml} />
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
