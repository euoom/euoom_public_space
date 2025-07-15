import React from 'react';
import { Badge } from '@/components/ui/badge';

interface FrontmatterDisplayProps {
  frontmatter: { [key: string]: any };
}

const FrontmatterDisplay: React.FC<FrontmatterDisplayProps> = ({ frontmatter }) => {

  const getBadgeColorClass = (keyword: string): string => {
    switch (keyword.toLowerCase()) {
      case '테스트':
        return 'bg-blue-500 text-white';
      case '블로그':
        return 'bg-green-500 text-white';
      case '다른페이지':
        return 'bg-purple-500 text-white';
      default:
        // 간단한 해시 함수를 사용하여 키워드에 따라 다른 색상을 반환
        let hash = 0;
        for (let i = 0; i < keyword.length; i++) {
          hash = keyword.charCodeAt(i) + ((hash << 5) - hash);
        }
        const colors = [
          'bg-red-500 text-white', 'bg-yellow-500 text-white', 'bg-indigo-500 text-white',
          'bg-pink-500 text-white', 'bg-teal-500 text-white', 'bg-orange-500 text-white'
        ];
        return colors[Math.abs(hash % colors.length)];
    }
  };

  const formatValue = (key: string, value: any): React.ReactNode => {
    const renderPill = (text: string) => (
        <Badge className={getBadgeColorClass(text)}>{text}</Badge>
    );

    const renderWikiLink = (pageName: string) => (
        <a href={`/blog/${pageName}`}>
            <Badge variant="outline" className={getBadgeColorClass(pageName)}>{pageName}</Badge>
        </a>
    )

    if (Array.isArray(value)) {
      return (
        <div className="flex flex-wrap gap-2">
          {value.map((item, index) => {
            if (typeof item === 'string' && item.match(/^\[\[.*\]\]$/)) {
                const pageName = item.substring(2, item.length - 2);
                return <span key={index}>{renderWikiLink(pageName)}</span>;
            }
            return <span key={index}>{renderPill(String(item))}</span>;
          })}
        </div>
      );
    }

    if (typeof value === 'string' && value.match(/^\[\[.*\]\]$/)) {
      const pageName = value.substring(2, value.length - 2);
      return renderWikiLink(pageName);
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
