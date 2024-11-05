'use client';

import { useCallback, useEffect, useState } from 'react';
import { Accounts, Debug, Explorer, Extensions, Gear, Search, SourceControl } from '@/icons';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import ToolTip from './ToolTip';
import CollapsableMenu from './CollapsableMenu';
import useExpandableStore, { Menu } from '@/lib/store/useExpandableStore';
import useExplorerStore, { SubMenu } from '@/lib/store/useExplorerStore';
import useSectionStore from '@/lib/store/useSectionStore';

const barItems = [
  {
    hoverText: 'Search (Ctrl + Shift + F)',
    icon: <Search />,
    menu: Menu.SEARCH,
  },
  {
    hoverText: 'Source Control (Ctrl + Shift + G)',
    icon: <SourceControl height={32} width={32} />,
    menu: Menu.SOURCE_CONTROL,
  },
  {
    hoverText: 'Run and Debug (Ctrl + Shift + D)',
    icon: <Debug />,
    menu: Menu.DEBUG,
  },
  {
    hoverText: 'Extensions (Ctrl + Shift + X)',
    icon: <Extensions />,
    menu: Menu.EXTENSIONS,
  },
];

interface TooltipProps {
  icon: JSX.Element;
  text: string;
  active: boolean;
  handleMouseClick: React.MouseEventHandler;
}

const ActivityBar = ({
    sections,
    allApps,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sections: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  allApps: any;
}) => {
  const { menu, toggleMenu } = useExpandableStore();
  const { toggleMenu: toggleExplorer } = useExplorerStore();
  const { initial: initialLoad, setInitialLoad } = useExplorerStore();
  const { setSections } = useSectionStore();
  const pathname = usePathname();

  useEffect(() => {
    setSections(sections[pathname]);
  }, [pathname, sections, setSections]);

  return (
    <div className="relative md:flex z-30 ">
      <div className="max-w-fit text-gray-500 flex flex-col justify-between h-full border-r-dark_border bg-topbar_dark_bg">
        <div className="cursor-pointer">
          <Tooltip
            icon={<Explorer />}
            text="Explorer (Ctrl+Shift+E)"
            active={menu === Menu.EXPLORER}
            handleMouseClick={() => {
              toggleMenu(Menu.EXPLORER);

              if (!initialLoad || window.innerWidth >= 768) return;

              setInitialLoad();

              setTimeout(() => {
                toggleExplorer(SubMenu.PORTFOLIO);
              }, 200);
            }}
          />
          {barItems.map((item, index) => (
            <Tooltip
              key={index}
              icon={item.icon}
              text={item.hoverText}
              active={menu === item.menu}
              handleMouseClick={() => {
                toggleMenu(item.menu);
              }}
            />
          ))}
        </div>
        <div className="cursor-pointer">
          <Tooltip icon={<Accounts width="32" height="32" />} text="Accounts" active={false} handleMouseClick={() => {}} />
          <Tooltip icon={<Gear />} text="Manage" active={false} handleMouseClick={() => {}} />
        </div>
      </div>
      <CollapsableMenu allApps={allApps} />
    </div>
  );
}

export default ActivityBar;

const Tooltip = ({ icon, text, active, handleMouseClick }: TooltipProps) => {
  const [toolTipActive, setToolTipActive] = useState<boolean>(false);

  const handleMouseIn: React.MouseEventHandler = useCallback(() => {
    setToolTipActive(true);
  }, []);

  const handleMouseOut: React.MouseEventHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    setToolTipActive(false);
  }, []);

  const handleFocus: React.FocusEventHandler = useCallback(() => {
    setToolTipActive(false);
  }, []);

  return (
    <div className="relative">
      <button
        onFocus={handleFocus}
        onClick={handleMouseClick}
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseOut}
        className={clsx(active ? 'border-gray-500' : 'opacity-50 hover:opacity-90', 'p-3 relative border-l-2 border-dark_bg')}
      >
        {icon}
      </button>
      <ToolTip className="top-1/2 -translate-y-1/2 right-0 translate-x-full" active={toolTipActive} text={text} />
    </div>
  );
}
