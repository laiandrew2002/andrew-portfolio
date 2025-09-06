'use client';

import { memo, ReactNode } from 'react';

interface ListItem {
  title?: string;
  content: string | ReactNode;
  subItems?: ListItem[];
}

interface CustomListSectionProps {
  items: ListItem[];
  listType?: 'disc' | 'decimal';
  className?: string;
}

const CustomListSection = memo<CustomListSectionProps>(
  ({ items, listType = 'disc', className }) => {
    const renderListItem = (item: ListItem, index: number) => (
      <li key={index} className="text-md py-1">
        {item.title && <h3 className="font-bold">{item.title}</h3>}
        {typeof item.content === 'string' ? (
          <span>{item.content}</span>
        ) : (
          item.content
        )}
        {item.subItems && (
          <ul className="mt-1 list-disc pl-6 text-gray-500">
            {item.subItems.map((subItem, subIndex) =>
              renderListItem(subItem, subIndex)
            )}
          </ul>
        )}
      </li>
    );

    return (
      <div className={className}>
        <ul
          className={`mt-1 pl-6 text-gray-500 ${listType === 'decimal' ? 'list-decimal' : 'list-disc'}`}
        >
          {items.map((item, index) => renderListItem(item, index))}
        </ul>
      </div>
    );
  }
);

CustomListSection.displayName = 'CustomListSection';

export default CustomListSection;
