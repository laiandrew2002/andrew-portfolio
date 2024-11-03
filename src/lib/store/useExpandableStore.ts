import { create } from 'zustand';

export enum Menu {
  EXPLORER = 'explorer',
  SEARCH = 'search',
  SOURCE_CONTROL = 'source-control',
  DEBUG = 'debug',
  EXTENSIONS = 'extensions',
}

interface ExpandableSliceState {
  value: boolean;
  menu: Menu;
  closeIfOpen: () => void;
  toggleMenu: (menu?: Menu) => void;
}

const useExpandableStore = create<ExpandableSliceState>((set) => ({
  value: false,
  menu: Menu.EXPLORER,

  closeIfOpen: () => set((state) => {
    if (state.value) {
      return { value: false };
    }
    return {};
  }),

  toggleMenu: (menu?: Menu) => set((state) => {
    if (!menu) {
      return { value: !state.value };
    } else if (!state.value) {
      return { value: true, menu };
    } else if (state.menu === menu) {
      return { value: false };
    } else {
      return { menu };
    }
  }),
}));

export default useExpandableStore;