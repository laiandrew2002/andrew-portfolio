/**
 * Layout components export
 */

export { default as TopBar } from './TopBar';
export { default as BottomBar } from './BottomBar';
export { default as ActivityBar } from './ActivityBar';
export { default as TabContainer } from './TabContainer';

// Re-export types for convenience
export type {
  MenuBarItem,
  ActivityBarItem,
  BottomBarItem,
  TabData,
} from '@/lib/types/navigation';
