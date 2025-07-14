import { parseMarkdown } from './frontmatterParser'; // parseMarkdown 함수 임포트 경로 수정

export interface PostData { // export 키워드 추가
  contentHtml: string;
  title?: string;
  date?: string;
  author?: string;
  tags?: string[];
  [key: string]: any; // 사용자 정의 프론트매터 필드를 위한 인덱스 시그니처 추가
}

export async function getPostContent(slug: string): Promise<PostData> {
  // 실제 마크다운 파일이 호스팅되는 URL로 변경해야 합니다.
  // 이 예시에서는 로컬 개발 서버를 가정하고 있습니다.
  const res = await fetch(`http://localhost:3000/blog-content/${slug}.md`);
  if (!res.ok) {
    // 마크다운 파일을 찾을 수 없는 경우 404 페이지를 렌더링하거나 오류를 처리할 수 있습니다.
    // 이 부분은 PostData 인터페이스에 맞춰 업데이트해야 합니다.
    // 예시: 최소한의 contentHtml과 빈 frontmatter를 반환합니다.
    return { contentHtml: '<p>요청하신 게시물을 찾을 수 없습니다.</p>', title: '게시물을 찾을 수 없습니다.' };
  }
  const markdown = await res.text();
  console.log("1번 출력: Fetch 결과 (Markdown Content)", markdown); // 1번 출력

  const { contentHtml, frontmatter } = await parseMarkdown(markdown);
  console.log("2번 출력: 프론트매터 파싱 결과", frontmatter); // 2번 출력

  // 사용자 지시에 따라 프론트매터의 모든 키-값을 동적으로 반환
  return { ...frontmatter, contentHtml };
}
