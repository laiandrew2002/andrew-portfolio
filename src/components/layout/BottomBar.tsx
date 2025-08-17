'use client';

import React from 'react';
import {
  Bell,
  CloudUpload,
  Info,
  RadioTower,
  Remote,
  SourceControl,
  Warning,
} from '@/icons';
import { ComponentProps, BottomBarItem } from '@/lib/types';
import { cn } from '@/lib/utils';
import ToolTip from '../ToolTip';

interface BottomBarProps extends ComponentProps {
  leftItems?: BottomBarItem[];
  rightItems?: BottomBarItem[];
}

interface TooltipItemProps extends ComponentProps {
  icon: React.ReactNode;
  text: string;
  position: 'left' | 'right' | 'center';
  onClick?: () => void;
}

const DEFAULT_LEFT_ITEMS: BottomBarItem[] = [
  {
    id: 'remote',
    icon: <Remote />,
    text: 'Open a Remote Window',
    position: 'left',
  },
  {
    id: 'git-branch',
    icon: (
      <div className="flex">
        <SourceControl height={18} width={18} />
        <span className="ml-1">main*</span>
      </div>
    ),
    text: 'portfolio Git - main*',
    position: 'left',
  },
  {
    id: 'git-publish',
    icon: <CloudUpload />,
    text: 'portfolio (Git) - Publish Branch',
    position: 'center',
    className: 'hidden sm:block',
  },
  {
    id: 'problems',
    icon: (
      <div className="flex items-center text-xs">
        <Info />
        <span className="mx-1">0</span>
        <Warning />
        <span className="ml-1">0</span>
      </div>
    ),
    text: 'No Problems',
    position: 'center',
    className: 'hidden sm:block',
  },
];

const DEFAULT_RIGHT_ITEMS: BottomBarItem[] = [
  {
    id: 'indentation',
    icon: <span>Spaces: 2</span>,
    text: 'Select Indentation',
    position: 'center',
    className: 'hidden md:block',
  },
  {
    id: 'encoding',
    icon: <span>UTF-8</span>,
    text: 'Select Encoding',
    position: 'center',
    className: 'hidden sm:block',
  },
  {
    id: 'line-ending',
    icon: <span>CRLF</span>,
    text: 'Select End of Line Sequence',
    position: 'center',
    className: 'hidden sm:block',
  },
  {
    id: 'language-mode',
    icon: <span>&#123; &#125; TypeScript JSX</span>,
    text: 'Select Language Mode',
    position: 'center',
    className: 'hidden sm:block',
  },
  {
    id: 'live-server',
    icon: (
      <div className="flex">
        <RadioTower />
        <span className="ml-1">Go Live</span>
      </div>
    ),
    text: 'Click to run live server',
    position: 'right',
  },
  {
    id: 'notifications',
    icon: <Bell />,
    text: 'No Notifications',
    position: 'right',
  },
];

export default function BottomBar({
  leftItems = DEFAULT_LEFT_ITEMS,
  rightItems = DEFAULT_RIGHT_ITEMS,
  className,
  ...props
}: BottomBarProps) {
  return (
    <footer
      className={cn(
        'flex select-none justify-between border-t-2 border-dark_border text-sm text-gray-500',
        className
      )}
      role="contentinfo"
      {...props}
    >
      <div className="flex cursor-pointer items-center gap-1">
        <div className="bg-blue-300">
          <TooltipItem
            key={leftItems[0]?.id}
            icon={leftItems[0]?.icon}
            text={leftItems[0]?.text || ''}
            position={leftItems[0]?.position || 'left'}
            className={leftItems[0]?.className}
            onClick={leftItems[0]?.onClick}
          />
        </div>
        {leftItems.slice(1).map(item => (
          <TooltipItem
            key={item.id}
            icon={item.icon}
            text={item.text}
            position={item.position}
            className={item.className}
            onClick={item.onClick}
          />
        ))}
      </div>

      <div className="mr-2 flex cursor-pointer items-center gap-2">
        {rightItems.map(item => (
          <TooltipItem
            key={item.id}
            icon={item.icon}
            text={item.text}
            position={item.position}
            className={item.className}
            onClick={item.onClick}
          />
        ))}
      </div>
    </footer>
  );
}

const TooltipItem = React.memo(function TooltipItem({
  icon,
  text,
  position,
  onClick,
  className,
}: TooltipItemProps) {
  const [toolTipActive, setToolTipActive] = React.useState<boolean>(false);

  const handleMouseEnter = React.useCallback(() => {
    setToolTipActive(true);
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setToolTipActive(false);
  }, []);

  const handleClick = React.useCallback(() => {
    onClick?.();
  }, [onClick]);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick?.();
      }
    },
    [onClick]
  );

  const tooltipClasses = React.useMemo(() => {
    let classes = 'top-0 -translate-y-[calc(100%+5px)] ';

    switch (position) {
      case 'right':
        classes += 'right-0';
        break;
      case 'left':
        classes += 'left-0';
        break;
      case 'center':
        classes += 'left-1/2 -translate-x-1/2';
        break;
    }

    return classes;
  }, [position]);

  return (
    <div className="relative">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          'relative p-1 px-2 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none',
          onClick && 'cursor-pointer',
          className
        )}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        aria-label={text}
      >
        {icon}
      </div>
      <ToolTip active={toolTipActive} className={tooltipClasses} text={text} />
    </div>
  );
});
