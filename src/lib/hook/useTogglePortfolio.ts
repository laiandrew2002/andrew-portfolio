'use client';

import { useEffect } from 'react';
import useExpandableStore, { Menu } from '../store/useExpandableStore';
import useExplorerStore, { SubMenu } from '../store/useExplorerStore';

export function useTogglePortfolio() {
  const { toggleMenu } = useExpandableStore();
  const { toggleMenu: togglePortfolio } = useExplorerStore();

  useEffect(() => {
    if (window.innerWidth < 768) {
      return;
    }
    toggleMenu(Menu.EXPLORER);

    const cleanup = window.requestAnimationFrame(() => {
      togglePortfolio(SubMenu.PORTFOLIO);
    });

    return () => {
      window.cancelAnimationFrame(cleanup);
    };
  }, [toggleMenu, togglePortfolio]);
}