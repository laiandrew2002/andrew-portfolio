'use client';

import React from 'react';
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
import { ComponentProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface TabContainerProps extends ComponentProps {
  showControls?: boolean;
}

interface TabProps extends TabData {
  active: boolean;
  canClose?: boolean;
  onClose?: (href: string) => void;
  onNavigate?: (href: string) => void;
}

interface DropEndProps extends ComponentProps {
  onMoveToEnd?: (href: string) => void;
}

interface TabControlsProps extends ComponentProps {
  onGitCompare?: () => void;
  onToggleSidebar?: () => void;
  onShowMore?: () => void;
}

const FILE_TYPE_ICONS: Record<string, React.ReactNode> = {
  react: <ReactIcon />,
  about: <FavIcon />,
  next: <NextConfig />,
  svelte: <Svelte />,
  leetcode: <Leetcode />,
};

const DND_ITEM_TYPE = 'tab';

export default function TabContainer({
  showControls = true,
  className,
  ...props
}: TabContainerProps) {
  const { open: openTabs, current: currentTab } = useTabsStore();
  const router = useRouter();

  const navigateTo = React.useCallback(() => {
    try {
      router.push(currentTab);
    } catch (error) {
      console.error('Error navigating to tab:', error);
    }
  }, [router, currentTab]);

  React.useEffect(() => {
    try {
      if (!openTabs.find(tab => tab.href === window.location.pathname)) {
        navigateTo();
      }
    } catch (error) {
      console.error('Error checking tab navigation:', error);
    }
  }, [openTabs, navigateTo]);

  if (!openTabs.length) return null;

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className={cn(
          'slim sticky top-0 z-20 flex flex-none overflow-y-hidden border-dark_border bg-activity_dark_bg text-gray-500',
          className
        )}
        role="tablist"
        {...props}
      >
        {openTabs.map(tab => (
          <Tab key={tab.href} {...tab} active={tab.href === currentTab} />
        ))}

        <DropEnd />

        {showControls && <TabControls />}

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

const DropEnd = React.memo(function DropEnd({ onMoveToEnd }: DropEndProps) {
  const { moveToEnd } = useTabsStore();

  const [collectedDrop, drop] = useDrop(() => ({
    accept: DND_ITEM_TYPE,
    drop(item: { href: string }) {
      try {
        if (onMoveToEnd) {
          onMoveToEnd(item.href);
        } else {
          moveToEnd(item.href);
        }
      } catch (error) {
        console.error('Error moving tab to end:', error);
      }
    },
    collect: monitor => ({
      hover: monitor.isOver(),
      item: monitor.getItem() as { href: string },
    }),
  }));

  const dropRef: React.RefCallback<HTMLDivElement> = React.useCallback(
    node => {
      drop(node);
    },
    [drop]
  );

  return (
    <div
      ref={dropRef}
      className={cn(
        'flex-1',
        collectedDrop.item && collectedDrop.hover && 'bg-gray-200'
      )}
      aria-hidden="true"
    />
  );
});

const Tab = React.memo(function Tab({
  href,
  title,
  type,
  active,
  canClose = true,
  onClose,
  onNavigate,
}: TabProps) {
  const { moveTab, closeTab } = useTabsStore();
  const router = useRouter();

  const [collectedDrop, drop] = useDrop(() => ({
    accept: DND_ITEM_TYPE,
    drop(item: { href: string }) {
      if (item.href === href) return;
      try {
        moveTab(item.href, href);
      } catch (error) {
        console.error('Error moving tab:', error);
      }
    },
    collect: monitor => ({
      hover: monitor.isOver(),
      item: monitor.getItem() as { href: string },
    }),
  }));

  const [, dragRef] = useDrag(() => ({
    type: DND_ITEM_TYPE,
    item: { href },
    collect: monitor => ({
      dragging: monitor.isDragging(),
    }),
  }));

  const handleNavigation = React.useCallback(() => {
    try {
      if (onNavigate) {
        onNavigate(href);
      } else {
        router.push(href);
      }
    } catch (error) {
      console.error('Error navigating to tab:', error);
    }
  }, [href, onNavigate, router]);

  const handleClose = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      try {
        if (onClose) {
          onClose(href);
        } else {
          closeTab(href);
        }
      } catch (error) {
        console.error('Error closing tab:', error);
      }
    },
    [href, onClose, closeTab]
  );

  const handleMiddleClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (e.button === 1) {
        try {
          if (onClose) {
            onClose(href);
          } else {
            closeTab(href);
          }
        } catch (error) {
          console.error('Error closing tab with middle click:', error);
        }
      }
    },
    [href, onClose, closeTab]
  );

  const handleDragStart = React.useCallback(() => {
    try {
      router.push(href);
    } catch (error) {
      console.error('Error handling drag start:', error);
    }
  }, [router, href]);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleNavigation();
      } else if (e.key === 'Delete' && canClose) {
        e.preventDefault();
        const mouseEvent = new MouseEvent(
          'click'
        ) as unknown as React.MouseEvent;
        handleClose(mouseEvent);
      }
    },
    [handleNavigation, handleClose, canClose]
  );

  const combinedRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      dragRef(node);
      drop(node);
    },
    [dragRef, drop]
  );

  return (
    <div
      ref={combinedRef}
      onDragStart={handleDragStart}
      onClick={handleNavigation}
      onMouseDown={handleMiddleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        'group relative w-max cursor-pointer border-r border-dark_2_border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500',
        collectedDrop.item &&
          collectedDrop.item.href !== href &&
          collectedDrop.hover &&
          'bg-gray-200',
        active && 'bg-dark_bg'
      )}
      role="tab"
      tabIndex={0}
      aria-selected={active}
      aria-label={`${title} tab`}
    >
      <div className="flex items-center gap-2">
        <span aria-hidden="true">{FILE_TYPE_ICONS[type] || <FavIcon />}</span>
        <p
          className={cn(
            'select-none whitespace-nowrap',
            active && 'text-blue-100'
          )}
        >
          {title}
        </p>
        {canClose && (
          <button
            className={cn(
              'rounded-md p-1 opacity-0 hover:bg-gray-500/20 focus:bg-gray-500/20 focus:opacity-100 focus:outline-none group-hover:opacity-100',
              active && 'opacity-100'
            )}
            onClick={handleClose}
            aria-label={`Close ${title} tab`}
            type="button"
          >
            <ChromeClose />
          </button>
        )}
      </div>
    </div>
  );
});

const TabControls = React.memo(function TabControls({
  onGitCompare,
  onToggleSidebar,
  onShowMore,
  className,
}: TabControlsProps) {
  const handleGitCompare = React.useCallback(() => {
    onGitCompare?.();
  }, [onGitCompare]);

  const handleToggleSidebar = React.useCallback(() => {
    onToggleSidebar?.();
  }, [onToggleSidebar]);

  const handleShowMore = React.useCallback(() => {
    onShowMore?.();
  }, [onShowMore]);

  return (
    <div
      className={cn(
        'sticky bottom-0 right-0 top-0 flex flex-none items-center bg-dark_bg px-4 text-gray-500',
        className
      )}
      role="toolbar"
      aria-label="Tab controls"
    >
      <button
        className="rounded-md p-1 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
        onClick={handleGitCompare}
        aria-label="Git compare"
        type="button"
      >
        <GitCompare />
      </button>
      <button
        className="rounded-md p-1 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
        onClick={handleToggleSidebar}
        aria-label="Toggle sidebar"
        type="button"
      >
        <UntoggledSidebar />
      </button>
      <button
        className="rounded-md p-1 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
        onClick={handleShowMore}
        aria-label="More options"
        type="button"
      >
        <Ellipsis />
      </button>
    </div>
  );
});
