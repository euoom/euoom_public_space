"use client";

import React from 'react';
import { Pill } from 'react-pill';

interface FrontmatterDisplayProps {
  frontmatter: { [key: string]: any };
}

const FrontmatterDisplay: React.FC<FrontmatterDisplayProps> = ({ frontmatter }) => {

  const getPillColor = (keyword: string): string => {
    switch (keyword.toLowerCase()) {
      case '테스트':
        return '#3B82F6'; // blue-500
      case '블로그':
        return '#22C55E'; // green-500
      case '다른페이지':
        return '#A855F7'; // purple-500
      default:
        let hash = 0;
        for (let i = 0; i < keyword.length; i++) {
          hash = keyword.charCodeAt(i) + ((hash << 5) - hash);
        }
        const colors = [
          '#EF4444', // red-500
          '#EAB308', // yellow-500
          '#6366F1', // indigo-500
          '#EC4899', // pink-500
          '#14B8A6', // teal-500
          '#F97316'  // orange-500
        ];
        return colors[Math.abs(hash % colors.length)];
    }
  };

  const formatValue = (key: string, value: any): React.ReactNode => {
    // react-pill의 data prop 형식에 맞게 변환
    const transformToPillData = (item: string) => ({
      label: item,
      bgcolor: getPillColor(item),
    });

    if (Array.isArray(value)) {
      const pillData = value.map(item => {
        if (typeof item === 'string' && item.match(/^\[\[.*\]\]$/)) {
          const pageName = item.substring(2, item.length - 2);
          return {
            label: pageName,
            bgcolor: getPillColor(pageName),
            // WikiLink는 별도로 처리해야 하므로, 여기에 Link 컴포넌트를 직접 넣을 수는 없음.
            // react-pill 컴포넌트가 Link를 직접 렌더링할 수 있는 prop을 제공하지 않으므로,
            // 이 부분은 외부에서 Link 컴포넌트로 래핑하거나, react-pill의 itemClassName을 활용하여
            // CSS로 링크처럼 보이게 할 수 있음. 여기서는 단순히 텍스트만 표시.
          };
        }
        return transformToPillData(String(item));
      });

      // WikiLink 처리를 위해 Link 컴포넌트를 직접 렌더링할 수 없으므로,
      // 여기서는 react-pill의 Pill 컴포넌트가 Link를 직접 렌더링하지 않도록 함.
      // 필요하다면 FrontmatterDisplay 외부에서 Link 컴포넌트로 래핑해야 함.
      return (
        <div className="flex flex-wrap gap-2">
          {value.map((item, index) => {
            if (typeof item === 'string' && item.match(/^\[\[.*\]\]$/)) {
                const pageName = item.substring(2, item.length - 2);
                return (
                    <a key={index} href={`/blog/${pageName}`} className="no-underline">
                        <Pill data={[{ label: pageName, bgcolor: getPillColor(pageName) }]} rounded={true} itemClassName="rounded-full" />
                    </a>
                );
            }
            return <Pill key={index} data={[transformToPillData(String(item))]} rounded={true} itemClassName="rounded-full" />;
          })}
        </div>
      );
    }

    if (typeof value === 'string' && value.match(/^\[\[.*\]\]$/)) {
      const pageName = value.substring(2, value.length - 2);
      return (
        <a href={`/blog/${pageName}`} className="no-underline">
          <Pill data={[{ label: pageName, bgcolor: getPillColor(pageName) }]} rounded={true} itemClassName="rounded-full" />
        </a>
      );
    }

    return <span className="text-gray-800 dark:text-gray-200">{String(value)}</span>;
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
        <div className="p-6">
            <div className="space-y-4">
                {Object.entries(frontmatter).map(([key, value]) => (
                    <div key={key} className="flex items-center">
                        <div className="w-1/4 text-sm font-medium text-gray-500 dark:text-gray-400 capitalize">
                            {key}
                        </div>
                        <div className="w-3/4">
                            {formatValue(key, value)}
                        </div>
                    </div>
                ))}
            </div>
      </div>
    </div>
  );
};

export default FrontmatterDisplay;
