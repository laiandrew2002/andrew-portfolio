import { create } from 'zustand';

export enum SubMenu {
  EDITOR = 'editor',
  PORTFOLIO = 'portfolio',
  OUTLINE = 'outline',
  TIMELINE = 'timeline',
  SCRIPTS = 'scripts',
}

interface ExplorerState {
  initial: boolean;
  editor: {
    open: boolean;
    maxHeight: string;
  };
  portfolio: {
    open: boolean;
    height: string;
    maxHeight: string;
  };
  outline: {
    open: boolean;
    maxHeight: string;
  };
  timeline: {
    open: boolean;
    maxHeight: string;
  };
  scripts: {
    open: boolean;
    maxHeight: string;
  };
  setInitialLoad: () => void;
  toggleMenu: (subMenu: SubMenu) => void;
}

const useExplorerStore = create<ExplorerState>((set) => ({
  initial: true,
  editor: {
    open: false,
    maxHeight: '0px',
  },
  portfolio: {
    open: false,
    height: '0px',
    maxHeight: '0px',
  },
  outline: {
    open: false,
    maxHeight: '0px',
  },
  timeline: {
    open: false,
    maxHeight: '0px',
  },
  scripts: {
    open: false,
    maxHeight: '0px',
  },

  setInitialLoad: () => set({ initial: false }),

  toggleMenu: (subMenu: SubMenu) => set((state) => {
    const subMenusContainer = document.getElementById('subMenusContainer') as HTMLDivElement;
    const subMenuEditor = document.getElementById('subMenu-' + SubMenu.EDITOR) as HTMLDivElement;
    const subMenuPortfolio = document.getElementById('subMenu-' + SubMenu.PORTFOLIO) as HTMLDivElement;

    if (state[subMenu].open) {
      if (subMenu === SubMenu.EDITOR) {
        const editorsScrollHeight = subMenuEditor.clientHeight;
        state.editor.maxHeight = '0px';

        if (state.portfolio.open) {
          state.portfolio.height = `${subMenuPortfolio.clientHeight + editorsScrollHeight}px`;
          state.portfolio.maxHeight = `${subMenuPortfolio.scrollHeight + editorsScrollHeight}px`;
        }
      } else if (subMenu === SubMenu.PORTFOLIO) {
        state.portfolio.height = '0px';
        state.portfolio.maxHeight = '0px';
      }
    } else {
      if (subMenu === SubMenu.EDITOR) {
        let newHeight = subMenuPortfolio.clientHeight;

        if (subMenuEditor.scrollHeight > 100) {
          state.editor.maxHeight = '100px';
          newHeight -= 100;
        } else {
          state.editor.maxHeight = `${subMenuEditor.scrollHeight}px`;
          newHeight -= subMenuEditor.scrollHeight;
        }

        if (state.portfolio.open) {
          state.portfolio.maxHeight = `${newHeight}px`;
          state.portfolio.height = `${newHeight}px`;
        }
      } else if (subMenu === SubMenu.PORTFOLIO) {
        const contentNodes = subMenusContainer.children;
        let contentHeight = 0;

        for (let i = 0; i < contentNodes.length; i++) {
          const element = contentNodes.item(i) as HTMLDivElement;
          contentHeight += element.scrollHeight + Number(getComputedStyle(element).borderTopWidth.split('px')[0]);
        }

        const availableHeight = subMenusContainer.scrollHeight - contentHeight;
        state.portfolio.height = `${availableHeight}px`;
        state.portfolio.maxHeight = `${availableHeight}px`;
      }
    }

    if (subMenu === SubMenu.EDITOR) {
      state.editor.open = !state.editor.open;
    } else if (subMenu === SubMenu.PORTFOLIO) {
      state.portfolio.open = !state.portfolio.open;
    }

    return { ...state }; // Ensure state is updated
  }),
}));

export default useExplorerStore;