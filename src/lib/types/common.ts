/**
 * Common types and interfaces used throughout the application
 */

export interface BaseEntity {
  id: string;
  title: string;
  description: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends ComponentProps {
  id: string;
  title?: string;
  subtitle?: string;
}

export interface CardAction {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface CardProps extends ComponentProps {
  title: string;
  description?: string;
  image?: ImageAsset;
  actions?: CardAction[];
}
