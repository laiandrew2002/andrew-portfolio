/**
 * @deprecated Use @/lib/utils/cn instead
 */
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Re-export new utilities for backward compatibility
export * from './utils/cn';
export * from './utils/validation';
export * from './utils/format';
