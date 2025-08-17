import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef } from 'react';
import { LoadingSpinner } from './ui/LoadingSpinner';

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  );
}

const variantStyles = {
  primary: 'bg-zinc-900 text-white hover:bg-zinc-700 focus:ring-zinc-900',
  secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 focus:ring-zinc-500',
  outline:
    'text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 focus:ring-zinc-900',
  ghost: 'text-zinc-700 hover:bg-zinc-100 focus:ring-zinc-500',
  text: 'text-emerald-500 hover:text-emerald-600 focus:ring-emerald-500',
};

const sizeStyles = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-2 text-base',
};

export interface ButtonProps {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  arrow?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
>(
  (
    {
      variant = 'primary',
      size = 'md',
      arrow,
      loading = false,
      disabled = false,
      children,
      className,
      href,
      type = 'button',
      onClick,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const combinedClassName = clsx(
      'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      variantStyles[variant],
      sizeStyles[size],
      isDisabled && 'pointer-events-none',
      className
    );

    const ArrowIconComponent = () => (
      <ArrowIcon
        className={clsx(
          'h-4 w-4',
          arrow === 'left' && 'rotate-180',
          loading && 'opacity-0'
        )}
      />
    );

    const content = (
      <>
        {loading && <LoadingSpinner size="sm" className="absolute" />}
        {arrow === 'left' && !loading && <ArrowIconComponent />}
        <span className={clsx(loading && 'opacity-0')}>{children}</span>
        {arrow === 'right' && !loading && <ArrowIconComponent />}
      </>
    );

    if (href && !isDisabled) {
      return (
        <Link
          href={href}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        type={type}
        disabled={isDisabled}
        onClick={onClick}
        className={clsx(combinedClassName, 'relative')}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
