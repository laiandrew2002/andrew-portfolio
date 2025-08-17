'use client';

import React from 'react';
import {
  Accounts,
  Debug,
  Explorer,
  Extensions,
  Gear,
  Search,
  SourceControl,
} from '@/icons';
import { usePathname } from 'next/navigation';
import { ComponentProps, ActivityBarItem } from '@/lib/types';
import { cn } from '@/lib/utils';
import ToolTip from '../ToolTip';
import CollapsableMenu from '../CollapsableMenu';
import useExpandableStore, { Menu } from '@/lib/store/useExpandableStore';
import useExplorerStore, { SubMenu } from '@/lib/store/useExplorerStore';
import useSectionStore, { Section } from '@/lib/store/useSectionStore';
import { MyWork } from '@/app/layout';

interface ActivityBarProps extends ComponentProps {
  sections: Record<string, Array<Section>>;
  myWork: MyWork[];
  topItems?: ActivityBarItem[];
  bottomItems?: ActivityBarItem[];
}

interface TooltipButtonProps extends ComponentProps {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  onClick: () => void;
}

const DEFAULT_TOP_ITEMS: ActivityBarItem[] = [
  {
    id: 'search',
    hoverText: 'Search (Ctrl + Shift + F)',
    icon: <Search />,
    menu: Menu.SEARCH,
  },
  {
    id: 'source-control',
    hoverText: 'Source Control (Ctrl + Shift + G)',
    icon: <SourceControl height={32} width={32} />,
    menu: Menu.SOURCE_CONTROL,
  },
  {
    id: 'debug',
    hoverText: 'Run and Debug (Ctrl + Shift + D)',
    icon: <Debug />,
    menu: Menu.DEBUG,
  },
  {
    id: 'extensions',
    hoverText: 'Extensions (Ctrl + Shift + X)',
    icon: <Extensions />,
    menu: Menu.EXTENSIONS,
  },
];

const DEFAULT_BOTTOM_ITEMS: ActivityBarItem[] = [
  {
    id: 'accounts',
    hoverText: 'Accounts',
    icon: <Accounts width="32" height="32" />,
    menu: '',
  },
  {
    id: 'settings',
    hoverText: 'Manage',
    icon: <Gear />,
    menu: '',
  },
];

export default function ActivityBar({
  sections,
  myWork,
  topItems = DEFAULT_TOP_ITEMS,
  bottomItems = DEFAULT_BOTTOM_ITEMS,
  className,
  ...props
}: ActivityBarProps) {
  const { menu, toggleMenu } = useExpandableStore();
  const {
    toggleMenu: toggleExplorer,
    initial: initialLoad,
    setInitialLoad,
  } = useExplorerStore();
  const { setSections } = useSectionStore();
  const pathname = usePathname();

  // Update sections when pathname changes
  React.useEffect(() => {
    try {
      setSections(sections[pathname] || []);
    } catch (error) {
      console.error('Error setting sections:', error);
      setSections([]);
    }
  }, [pathname, sections, setSections]);

  const handleExplorerClick = React.useCallback(() => {
    try {
      toggleMenu(Menu.EXPLORER);

      if (!initialLoad || window.innerWidth >= 768) return;

      setInitialLoad();

      setTimeout(() => {
        toggleExplorer(SubMenu.PORTFOLIO);
      }, 200);
    } catch (error) {
      console.error('Error handling explorer click:', error);
    }
  }, [toggleMenu, initialLoad, setInitialLoad, toggleExplorer]);

  const handleMenuItemClick = React.useCallback(
    (menuType: string) => {
      try {
        toggleMenu(menuType as Menu);
      } catch (error) {
        console.error('Error handling menu item click:', error);
      }
    },
    [toggleMenu]
  );

  return (
    <div className={cn('relative z-30 md:flex', className)} {...props}>
      <nav
        className="flex h-full max-w-fit flex-col justify-between border-r-dark_border bg-topbar_dark_bg text-gray-500"
        role="navigation"
        aria-label="Activity bar"
      >
        <div className="cursor-pointer">
          <TooltipButton
            icon={<Explorer />}
            text="Explorer (Ctrl+Shift+E)"
            active={menu === Menu.EXPLORER}
            onClick={handleExplorerClick}
          />

          {topItems.map(item => (
            <TooltipButton
              key={item.id}
              icon={item.icon}
              text={item.hoverText}
              active={menu === item.menu}
              onClick={() => handleMenuItemClick(item.menu)}
            />
          ))}
        </div>

        <div className="cursor-pointer">
          {bottomItems.map(item => (
            <TooltipButton
              key={item.id}
              icon={item.icon}
              text={item.hoverText}
              active={false}
              onClick={() => item.onClick?.()}
            />
          ))}
        </div>
      </nav>

      <CollapsableMenu myWork={myWork} />
    </div>
  );
}

const TooltipButton = React.memo(function TooltipButton({
  icon,
  text,
  active,
  onClick,
  className,
}: TooltipButtonProps) {
  const [toolTipActive, setToolTipActive] = React.useState<boolean>(false);

  const handleMouseEnter = React.useCallback(() => {
    setToolTipActive(true);
  }, []);

  const handleMouseLeave = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.blur();
      setToolTipActive(false);
    },
    []
  );

  const handleFocus = React.useCallback(() => {
    setToolTipActive(false);
  }, []);

  const handleClick = React.useCallback(() => {
    try {
      onClick();
    } catch (error) {
      console.error('Error in tooltip button click:', error);
    }
  }, [onClick]);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick]
  );

  return (
    <div className="relative">
      <button
        onFocus={handleFocus}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          'relative border-l-2 border-dark_bg p-3 focus:outline-none',
          active
            ? 'border-gray-500'
            : 'opacity-50 hover:opacity-90 focus:opacity-90',
          className
        )}
        aria-label={text}
        type="button"
      >
        {icon}
      </button>
      <ToolTip
        className="right-0 top-1/2 -translate-y-1/2 translate-x-full"
        active={toolTipActive}
        text={text}
      />
    </div>
  );
});
