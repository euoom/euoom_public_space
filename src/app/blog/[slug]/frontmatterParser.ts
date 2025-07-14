import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import remarkMermaid from 'remark-mermaid';
import remarkFrontmatter from 'remark-frontmatter';
import remarkFrontmatterYaml from 'remark-frontmatter-yaml';
import { VFile } from 'vfile';

interface ParsedMarkdown {
  contentHtml: string;
  frontmatter: { [key: string]: any }; // 모든 프론트매터 필드를 동적으로 포함
}

export async function parseMarkdown(markdown: string): Promise<ParsedMarkdown> {
  const result = await remark()
    .use(gfm)
    .use(remarkFrontmatter)
    .use(remarkFrontmatterYaml)
    .use(remarkMermaid)
    .use(html)
    .process(markdown) as VFile; // VFile 타입 단언

  const contentHtml = result.toString();

  // frontmatter 데이터를 그대로 반환
  const frontmatter = (result.data.frontmatter || {}) as { [key: string]: any };

  return {
    contentHtml,
    frontmatter,
  };
}
