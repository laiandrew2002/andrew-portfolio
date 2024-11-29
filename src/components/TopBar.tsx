"use client";

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
} from "@/icons";
import { useTogglePortfolio } from "@/lib/hook/useTogglePortfolio";
import useExpandableStore from "@/lib/store/useExpandableStore";
const menuItems = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

export default function TopBar() {
  const { value } = useExpandableStore();
  useTogglePortfolio();

  return (
    <div className="flex justify-between text-gray-500 items-center bg-topbar_dark_bg">
      <MenuBar />
      <h1 className="text-sm py-3 pointer-events-none select-none hidden sm:block">
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
    <div className="p-1 flex">
      <div className="my-auto flex items-center px-2">
        <VSCode />
      </div>
      <div className="p-1 ml-2 hidden lg:block">
        {menuItems.map((item) => (
          <button
            key={item}
            className="py-1 px-2 hover:bg-gray-300 rounded-lg cursor-default"
          >
            {item}
          </button>
        ))}
      </div>
      <div
        className="flex items-center ml-4 lg:hidden hover:bg-gray-300 px-4 rounded-md py-2"
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
    <div className="flex py-2 mx-1">
      {menuExpanded ? (
        <button
          onClick={() => toggleMenu()}
          className="hover:bg-gray-300 p-1 rounded-md"
        >
          <ToggledSidebar />
        </button>
      ) : (
        <button
          onClick={() => toggleMenu()}
          className="hover:bg-gray-300 p-1 rounded-md"
        >
          <UntoggledSidebar />
        </button>
      )}
      {toggleButtons.map((button, index) => (
        <button key={index} className="hover:bg-gray-300 p-1 rounded-md">
          {button.icon}
        </button>
      ))}
    </div>
  );
};

const ControlButtons = () => {
  return (
    <div className="flex">
      <div className="hover:bg-gray-300 p-3 transform duration-300">
        <ChromeMinimize />
      </div>
      <div className="hover:bg-gray-300 p-3 transform duration-300">
        <ChromeRestore />
      </div>
      <div className="hover:bg-red-500 hover:text-white p-3 transform duration-300">
        <ChromeClose />
      </div>
    </div>
  );
};
