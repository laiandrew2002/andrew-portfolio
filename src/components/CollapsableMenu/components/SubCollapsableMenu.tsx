'use client';
import { ChevronDown, ChevronRight } from '@/icons';
import useExplorerStore, { SubMenu } from '@/lib/store/useExplorerStore';
import { useCallback, useRef, useState } from 'react';

interface SubCollapsableMenuProps {
  subMenuTitle: string;
  subMenuButtons: SubCollapsableMenuButtonProps[];
  children: React.ReactNode;
  subMenu: SubMenu;
  open: boolean;
  maxHeight: string;
  height?: string;
}

interface SubCollapsableMenuButtonProps {
  id: number;
  button: React.ReactNode;
}

const SubCollapsableMenu = ({
  subMenuTitle,
  subMenuButtons,
  children,
  subMenu,
  open,
  maxHeight,
  height,
}: SubCollapsableMenuProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { toggleMenu } = useExplorerStore();

  const handleFocusIn: React.FocusEventHandler = useCallback(() => {
    setFocused(true);
  }, []);

  const handleFocusBlur: React.FocusEventHandler = useCallback(() => {
    setFocused(false);
  }, []);

  const handleMouseIn: React.MouseEventHandler = useCallback(() => {
    setHovered(true);
  }, []);

  const handleMouseOut: React.MouseEventHandler = useCallback(() => {
    setHovered(false);
  }, []);

  const handleToggleMenu: React.MouseEventHandler = useCallback(() => {
    toggleMenu(subMenu);
  }, [subMenu, toggleMenu]);

  return (
    <div onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
      <div className="relative">
        <button
          onFocus={handleFocusIn}
          onBlur={handleFocusBlur}
          onClick={handleToggleMenu}
          className="flex w-full justify-between py-1 ring-gray-500 ring-opacity-20 focus:ring-[.5px] active:ring-0"
        >
          <div className="flex">
            {open ? <ChevronDown /> : <ChevronRight />}
            <span className="ml-1 text-xs font-extrabold text-gray-500">
              {subMenuTitle}
            </span>
          </div>
        </button>
        {open && (hovered || focused) && (
          <div className="absolute bottom-0 right-0 top-0 mx-1 my-[1px] flex">
            {subMenuButtons.map((button, index) => (
              <button
                key={index}
                className="rounded-md p-[2px] hover:bg-gray-300"
              >
                {button.button}
              </button>
            ))}
          </div>
        )}
      </div>
      <div
        tabIndex={-1}
        onFocus={handleFocusIn}
        onBlur={handleFocusBlur}
        className="select-none ring-gray-500 ring-opacity-20 focus:ring-[.5px] active:ring-0"
      >
        <div
          id={'subMenu-' + subMenu}
          ref={ref => {
            contentRef.current = ref;
          }}
          className="content overflow-y-auto transition-all"
          style={{ maxHeight: maxHeight, height: height ? height : 'auto' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SubCollapsableMenu;
