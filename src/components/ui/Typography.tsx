import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { TypographyProps } from '@/lib/types/ui';

const variantStyles = {
  h1: 'text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl',
  h2: 'text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl',
  h3: 'text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl',
  h4: 'text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl',
  h5: 'text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl',
  h6: 'text-base font-semibold tracking-tight text-zinc-900 sm:text-lg',
  body1: 'text-base leading-relaxed text-zinc-700',
  body2: 'text-sm leading-relaxed text-zinc-600',
  caption: 'text-xs leading-normal text-zinc-500',
  overline: 'text-xs font-medium uppercase tracking-wide text-zinc-500',
};

const colorStyles = {
  primary: 'text-zinc-900',
  secondary: 'text-zinc-700',
  muted: 'text-zinc-500',
  error: 'text-red-600',
  warning: 'text-amber-600',
  success: 'text-emerald-600',
};

const defaultComponents = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
} as const;

const Typography = forwardRef<
  HTMLElement,
  TypographyProps & React.HTMLAttributes<HTMLElement>
>(
  (
    { variant = 'body1', component, color, className, children, ...props },
    ref
  ) => {
    const Component = component || defaultComponents[variant] || 'p';

    const combinedClassName = clsx(
      variantStyles[variant],
      color && colorStyles[color],
      className
    );

    const elementProps = {
      ref,
      className: combinedClassName,
      ...props,
    };

    return React.createElement(Component, elementProps, children);
  }
);

Typography.displayName = 'Typography';

// Convenience components for common use cases
const Heading1 = forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography {...props} variant="h1" ref={ref} />);
Heading1.displayName = 'Heading1';

const Heading2 = forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography {...props} variant="h2" ref={ref} />);
Heading2.displayName = 'Heading2';

const Heading3 = forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, 'variant'>
>((props, ref) => <Typography {...props} variant="h3" ref={ref} />);
Heading3.displayName = 'Heading3';

const Body = forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="body1" ref={ref} />
);
Body.displayName = 'Body';

const Caption = forwardRef<HTMLSpanElement, Omit<TypographyProps, 'variant'>>(
  (props, ref) => <Typography {...props} variant="caption" ref={ref} />
);
Caption.displayName = 'Caption';

export { Typography, Heading1, Heading2, Heading3, Body, Caption };
