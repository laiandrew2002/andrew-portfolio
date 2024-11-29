import { create } from "zustand";

// Tab Data Type
export type TabData = {
  href: string;
  title: string;
  type: string;
};

// Open Tabs Interface
interface OpenTabs {
  current: string;
  open: TabData[];
}

// Zustand Store
const useTabsStore = create<
  OpenTabs & {
    setCurrentTab: (current: TabData) => void;
    closeTab: (href: string) => void;
    moveTab: (from: string, to: string) => void;
    moveToEnd: (href: string) => void;
  }
>((set) => ({
  current: "",
  open: [],

  // Set Current Tab
  setCurrentTab: (current) =>
    set((state) => {
      const isTabOpen = state.open.some((tab) => tab.href === current.href);
      return {
        current: current.href,
        open: isTabOpen ? state.open : [...state.open, current],
      };
    }),

  // Close Tab
  closeTab: (href) =>
    set((state) => {
      const updatedOpen = state.open.filter((tab) => tab.href !== href);
      let newCurrent = state.current;

      if (state.current === href) {
        const closingTabIndex = state.open.findIndex(
          (tab) => tab.href === href,
        );
        newCurrent =
          closingTabIndex > 0
            ? state.open[closingTabIndex - 1].href
            : state.open[closingTabIndex + 1]?.href || "";
      }

      return {
        open: updatedOpen,
        current: updatedOpen.length ? newCurrent : "",
      };
    }),

  // Move Tab
  moveTab: (from, to) =>
    set((state) => {
      const initialIndex = state.open.findIndex((tab) => tab.href === from);
      const finalIndex = state.open.findIndex((tab) => tab.href === to);
      const updatedOpen = [...state.open];

      if (initialIndex !== -1 && finalIndex !== -1) {
        const [movedTab] = updatedOpen.splice(initialIndex, 1);
        updatedOpen.splice(
          finalIndex + (initialIndex < finalIndex ? 1 : 0),
          0,
          movedTab,
        );
      }

      return { open: updatedOpen };
    }),

  // Move Tab to End
  moveToEnd: (href) =>
    set((state) => {
      const index = state.open.findIndex((tab) => tab.href === href);
      if (index === -1 || state.open.length === 1) return state;

      const updatedOpen = [...state.open];
      const [movedTab] = updatedOpen.splice(index, 1);
      updatedOpen.push(movedTab);

      return { open: updatedOpen };
    }),
}));

export default useTabsStore;
