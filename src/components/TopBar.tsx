'use client';

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
const menuItems = [
  'File',
  'Edit',
  'Selection',
  'View',
  'Go',
  'Run',
  'Terminal',
  'Help',
];

export default function TopBar() {
  const { value } = useExpandableStore();
  useTogglePortfolio();

  return (
    <div className="flex items-center justify-between bg-topbar_dark_bg text-gray-500">
      <MenuBar />
      <h1 className="pointer-events-none hidden select-none py-3 text-sm sm:block">
        Andrew Lai - Portfolio
      </h1>
      <div className="flex">
        <ToggleButtons menuExpanded={value} />
        <ControlButtons />
      </div>
    </div>
  );
}

const MenuBar = () => {
  // const initialLoad = useSelector(selectInitialLoad);

  const toggleMenu: React.MouseEventHandler<HTMLDivElement> = () => {
    // dispatch(expandableSlice.actions.toggleMenu({ menu: Menu.EXPLORER }));
    // if (!initialLoad) return;
    // dispatch(explorerSlice.actions.setInitialLoad());
    // setTimeout(() => {
    //   dispatch(explorerSlice.actions.toggleMenu({ subMenu: SubMenu.PORTFOLIO }));
    // }, 200);
  };

  return (
    <div className="flex p-1">
      <div className="my-auto flex items-center px-2">
        <VSCode />
      </div>
      <div className="ml-2 hidden p-1 lg:block">
        {menuItems.map(item => (
          <button
            key={item}
            className="cursor-default rounded-lg px-2 py-1 hover:bg-gray-300"
          >
            {item}
          </button>
        ))}
      </div>
      <div
        className="ml-4 flex items-center rounded-md px-4 py-2 hover:bg-gray-300 lg:hidden"
        onClick={toggleMenu}
      >
        <ChromeMenu />
      </div>
    </div>
  );
};

const toggleButtons = [
  { icon: <SplitVerticalUntoggled /> },
  { icon: <SplitHorizontal /> },
];

const ToggleButtons = ({ menuExpanded }: { menuExpanded: boolean }) => {
  const { toggleMenu } = useExpandableStore();

  return (
    <div className="mx-1 flex py-2">
      {menuExpanded ? (
        <button
          onClick={() => toggleMenu()}
          className="rounded-md p-1 hover:bg-gray-300"
        >
          <ToggledSidebar />
        </button>
      ) : (
        <button
          onClick={() => toggleMenu()}
          className="rounded-md p-1 hover:bg-gray-300"
        >
          <UntoggledSidebar />
        </button>
      )}
      {toggleButtons.map((button, index) => (
        <button key={index} className="rounded-md p-1 hover:bg-gray-300">
          {button.icon}
        </button>
      ))}
    </div>
  );
};

const ControlButtons = () => {
  return (
    <div className="flex">
      <div className="transform p-3 duration-300 hover:bg-gray-300">
        <ChromeMinimize />
      </div>
      <div className="transform p-3 duration-300 hover:bg-gray-300">
        <ChromeRestore />
      </div>
      <div className="transform p-3 duration-300 hover:bg-red-500 hover:text-white">
        <ChromeClose />
      </div>
    </div>
  );
};
