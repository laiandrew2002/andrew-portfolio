'use client';

import React from 'react';
import {
  ChromeClose,
  ChromeMenu,
  ChromeMinimize,
  ChromeRestore,
  SplitHorizontal,
  SplitVerticalUntoggled,
  ToggledSidebar,
  UntoggledSidebar,
  VSCode,
} from '@/icons';
import { useTogglePortfolio } from '@/lib/hook/useTogglePortfolio';
import useExpandableStore from '@/lib/store/useExpandableStore';
import { ComponentProps, MenuBarItem } from '@/lib/types';
import { cn } from '@/lib/utils';

interface TopBarProps extends ComponentProps {
  title?: string;
  showMenuItems?: boolean;
}

interface MenuBarProps extends ComponentProps {
  items?: MenuBarItem[];
  showLogo?: boolean;
  onMenuToggle?: () => void;
}

interface ToggleButtonsProps extends ComponentProps {
  menuExpanded: boolean;
  onToggleMenu?: () => void;
}

interface ControlButtonsProps extends ComponentProps {
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
}

const DEFAULT_MENU_ITEMS: MenuBarItem[] = [
  { label: 'File' },
  { label: 'Edit' },
  { label: 'Selection' },
  { label: 'View' },
  { label: 'Go' },
  { label: 'Run' },
  { label: 'Terminal' },
  { label: 'Help' },
];

const TOGGLE_BUTTONS = [
  { icon: <SplitVerticalUntoggled />, ariaLabel: 'Split vertical' },
  { icon: <SplitHorizontal />, ariaLabel: 'Split horizontal' },
];

export default function TopBar({
  title = 'Andrew Lai - Portfolio',
  showMenuItems = true,
  className,
  ...props
}: TopBarProps) {
  const { value: menuExpanded } = useExpandableStore();
  useTogglePortfolio();

  return (
    <div
      className={cn(
        'flex items-center justify-between bg-topbar_dark_bg text-gray-500',
        className
      )}
      role="banner"
      {...props}
    >
      <MenuBar
        items={showMenuItems ? DEFAULT_MENU_ITEMS : undefined}
        showLogo={true}
      />
      <h1 className="pointer-events-none hidden select-none py-3 text-sm sm:block">
        {title}
      </h1>
      <div className="flex">
        <ToggleButtons menuExpanded={menuExpanded} />
        <ControlButtons />
      </div>
    </div>
  );
}

const MenuBar = React.memo(function MenuBar({
  items = DEFAULT_MENU_ITEMS,
  showLogo = true,
  onMenuToggle,
  className,
}: MenuBarProps) {
  const handleMenuToggle = React.useCallback(() => {
    onMenuToggle?.();
  }, [onMenuToggle]);

  return (
    <div className={cn('flex p-1', className)}>
      {showLogo && (
        <div className="my-auto flex items-center px-2" aria-label="VS Code">
          <VSCode />
        </div>
      )}

      <nav className="ml-2 hidden p-1 lg:block" role="menubar">
        {items.map(item => (
          <button
            key={item.label}
            className="cursor-default rounded-lg px-2 py-1 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
            onClick={item.onClick}
            disabled={item.disabled}
            role="menuitem"
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
        className="ml-4 flex items-center rounded-md px-4 py-2 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none lg:hidden"
        onClick={handleMenuToggle}
        aria-label="Toggle menu"
        type="button"
      >
        <ChromeMenu />
      </button>
    </div>
  );
});

const ToggleButtons = React.memo(function ToggleButtons({
  menuExpanded,
  onToggleMenu,
  className,
}: ToggleButtonsProps) {
  const { toggleMenu } = useExpandableStore();

  const handleToggleMenu = React.useCallback(() => {
    if (onToggleMenu) {
      onToggleMenu();
    } else {
      toggleMenu();
    }
  }, [onToggleMenu, toggleMenu]);

  return (
    <div className={cn('mx-1 flex py-2', className)} role="toolbar">
      <button
        onClick={handleToggleMenu}
        className="rounded-md p-1 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
        aria-label={menuExpanded ? 'Hide sidebar' : 'Show sidebar'}
        type="button"
      >
        {menuExpanded ? <ToggledSidebar /> : <UntoggledSidebar />}
      </button>

      {TOGGLE_BUTTONS.map((button, index) => (
        <button
          key={index}
          className="rounded-md p-1 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
          aria-label={button.ariaLabel}
          type="button"
        >
          {button.icon}
        </button>
      ))}
    </div>
  );
});

const ControlButtons = React.memo(function ControlButtons({
  onMinimize,
  onMaximize,
  onClose,
  className,
}: ControlButtonsProps) {
  const handleMinimize = React.useCallback(() => {
    onMinimize?.();
  }, [onMinimize]);

  const handleMaximize = React.useCallback(() => {
    onMaximize?.();
  }, [onMaximize]);

  const handleClose = React.useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <div className={cn('flex', className)} role="toolbar">
      <button
        className="transform p-3 duration-300 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
        onClick={handleMinimize}
        aria-label="Minimize window"
        type="button"
      >
        <ChromeMinimize />
      </button>
      <button
        className="transform p-3 duration-300 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
        onClick={handleMaximize}
        aria-label="Maximize window"
        type="button"
      >
        <ChromeRestore />
      </button>
      <button
        className="transform p-3 duration-300 hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white focus:outline-none"
        onClick={handleClose}
        aria-label="Close window"
        type="button"
      >
        <ChromeClose />
      </button>
    </div>
  );
});
