/**
 * Navigation and routing types
 */

export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  icon?: string;
  isActive?: boolean;
  children?: NavigationItem[];
}

export interface TabItem {
  id: string;
  title: string;
  href: string;
  icon?: string;
  isActive?: boolean;
  isDirty?: boolean;
  canClose?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

// Layout component types
export interface MenuBarItem {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ActivityBarItem {
  id: string;
  icon: React.ReactNode;
  hoverText: string;
  menu: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface BottomBarItem {
  id: string;
  icon: React.ReactNode;
  text: string;
  position: 'left' | 'right' | 'center';
  className?: string;
  onClick?: () => void;
}

export interface TabData {
  href: string;
  title: string;
  type: string;
  canClose?: boolean;
  isDirty?: boolean;
}
