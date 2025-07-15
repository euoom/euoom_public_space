import { getPostContent, PostData } from './getPostContent'; // getPostContent 함수 import 및 PostData 타입 임포트
import MermaidRenderer from './MermaidRenderer'; // MermaidRenderer 컴포넌트 import
import FrontmatterDisplay from './FrontmatterDisplay'; // FrontmatterDisplay 컴포넌트 import

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;
  const postData: PostData = await getPostContent(awaitedParams.slug); // PostData 타입 명시
  const { contentHtml, ...frontmatter } = postData; // contentHtml과 나머지 frontmatter 데이터를 분리

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-8">
        <div className="max-w-screen-xl mx-auto">
          <section className="mb-8">
            <FrontmatterDisplay frontmatter={frontmatter} />
          </section>

          <section className="prose max-w-none dark:prose-invert mb-8">
            <MermaidRenderer contentHtml={contentHtml} />
          </section>
        </div>
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
