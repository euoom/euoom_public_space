"use client";

import React, { useEffect, useRef } from 'react';

interface MermaidRendererProps {
  contentHtml: string;
}

export default function MermaidRenderer({ contentHtml }: MermaidRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderMermaid = async () => {
      // 동적으로 mermaid 모듈을 import
      const { default: mermaid } = await import('mermaid');

      if (containerRef.current) {
        // dangerouslySetInnerHTML로 렌더링된 HTML 내부에서 .mermaid 클래스를 가진 pre 태그를 찾습니다.
        // remark-mermaid가 생성하는 HTML 구조에 맞춰 선택자 변경
        const mermaidBlocks = containerRef.current.querySelectorAll('pre code.language-mermaid');

        // 각 Mermaid 코드 블록을 처리
        for (const block of Array.from(mermaidBlocks)) {
          const mermaidCode = block.textContent;
          if (mermaidCode) {
            // 새로운 div를 생성하고 mermaid 클래스를 부여합니다.
            const mermaidDiv = document.createElement('div');
            mermaidDiv.className = 'mermaid';
            mermaidDiv.textContent = mermaidCode; // Mermaid 코드를 텍스트로 삽입

            // 원래의 pre 태그를 새로 생성한 div로 교체합니다.
            block.parentNode?.parentNode?.replaceChild(mermaidDiv, block.parentNode);
          }
        }
        // 모든 Mermaid 블록을 처리한 후 Mermaid를 초기화합니다.
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded(); // 강제로 렌더링 트리거
      }
    };

    renderMermaid(); // useEffect가 실행될 때 renderMermaid 호출
  }, [contentHtml]); // contentHtml이 변경될 때마다 useEffect 재실행

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: contentHtml }} />
  );
}
