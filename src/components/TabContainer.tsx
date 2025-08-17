'use client';
import {
  ChromeClose,
  Ellipsis,
  FavIcon,
  GitCompare,
  Leetcode,
  NextConfig,
  ReactIcon,
  Svelte,
  UntoggledSidebar,
} from '@/icons';
import useTabsStore, { TabData } from '@/lib/store/useTabsStore';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { mergeRefs } from 'react-merge-refs';

const fileType = {
  ['react' as string]: <ReactIcon />,
  ['about' as string]: <FavIcon />,
  ['next' as string]: <NextConfig />,
  ['svelte' as string]: <Svelte />,
  ['leetcode' as string]: <Leetcode />,
};

export default function TabsContainer() {
  const { open: openTabs, current: currentTab } = useTabsStore();
  const router = useRouter();

  const navigateTo = useCallback(() => {
    router.push(currentTab);
  }, [router, currentTab]);

  useEffect(() => {
    if (!openTabs.find(tab => tab.href === window.location.pathname)) {
      navigateTo();
    }
  }, [openTabs, navigateTo]);

  if (!openTabs.length) return null;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="slim sticky top-0 z-20 flex flex-none overflow-y-hidden border-dark_border bg-activity_dark_bg text-gray-500">
        {openTabs.map(tab => (
          <Tab key={tab.href} {...tab} active={tab.href === currentTab} />
        ))}
        <DropEnd />
        <div className="sticky bottom-0 right-0 top-0 flex flex-none items-center bg-dark_bg px-4 text-gray-500">
          <button className="rounded-md p-1 hover:bg-gray-300">
            <GitCompare />
          </button>
          <button className="rounded-md p-1 hover:bg-gray-300">
            <UntoggledSidebar />
          </button>
          <button className="rounded-md p-1 hover:bg-gray-300">
            <Ellipsis />
          </button>
        </div>
        <style jsx global>
          {`
            .slim::-webkit-scrollbar {
              height: 8px;
            }
          `}
        </style>
      </div>
    </DndProvider>
  );
}

const DropEnd = () => {
  const { moveToEnd } = useTabsStore();

  const [collectedDrop, drop] = useDrop(() => ({
    accept: 'tab',
    drop(item: { href: string }) {
      moveToEnd(item.href);
    },
    collect: monitor => ({
      hover: monitor.isOver(),
      item: monitor.getItem() as { href: string },
    }),
  }));

  const dropRef: React.RefCallback<HTMLDivElement> = node => {
    drop(node);
  };

  return (
    <div
      ref={dropRef}
      className={clsx(
        'flex-1',
        collectedDrop.item && collectedDrop.hover && 'bg-gray-200'
      )}
    />
  );
};

const Tab = ({ href, title, type, active }: TabData & { active: boolean }) => {
  const { moveTab, closeTab } = useTabsStore();
  const router = useRouter();

  const [collectedDrop, drop] = useDrop(() => ({
    accept: 'tab',
    drop(item: { href: string }) {
      if (item.href === href) return;
      moveTab(item.href, href);
    },
    collect: monitor => ({
      hover: monitor.isOver(),
      item: monitor.getItem() as { href: string },
    }),
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [, dragRef]: any = useDrag(() => ({
    type: 'tab',
    item: { href },
    collect: monitor => ({
      dragging: monitor.isDragging(),
    }),
  }));

  const handleClickNavigation: React.MouseEventHandler<HTMLDivElement> = () => {
    router.push(href);
  };

  const handleCloseTab: React.MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    e.preventDefault();
    closeTab(href);
  };

  const handleCloseWithWheel: React.MouseEventHandler<HTMLDivElement> = e => {
    if (e.button === 1) {
      closeTab(href);
      return;
    }
  };

  const handleStartDrag: React.DragEventHandler<HTMLDivElement> = () => {
    router.push(href);
  };

  return (
    <div
      ref={mergeRefs([dragRef, drop])}
      onDragStart={handleStartDrag}
      onClick={handleClickNavigation}
      onMouseDown={handleCloseWithWheel}
      className={clsx(
        'group relative w-max cursor-pointer border-r border-dark_2_border p-2',
        collectedDrop.item &&
          collectedDrop.item.href !== href &&
          collectedDrop.hover &&
          'bg-gray-200',
        active && 'bg-dark_bg'
      )}
    >
      {/* {active && <span className="after:bg-blue-300 after:absolute after:bottom-0 after:translate-y-[2px] after:left-0 after:right-0 after:h-[4px]" />} */}
      <div className="flex items-center gap-2">
        {fileType[type]}
        <p
          className={clsx(
            'select-none whitespace-nowrap',
            active && 'text-blue-100'
          )}
        >
          {title}
        </p>
        <div
          className={clsx(
            'rounded-md p-1 opacity-0 hover:bg-gray-500/20 group-hover:opacity-100',
            active && 'opacity-100'
          )}
          onClick={handleCloseTab}
        >
          <ChromeClose />
        </div>
      </div>
    </div>
  );
};
