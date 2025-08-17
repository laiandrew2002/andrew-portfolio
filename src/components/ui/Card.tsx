import clsx from 'clsx';
import { forwardRef } from 'react';
import { CardProps } from '@/lib/types/common';
import Button from '../Button';
import { Image } from './Image';

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { title, description, image, actions, children, className, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm',
          'transition-shadow duration-200 hover:shadow-md',
          className
        )}
        {...props}
      >
        {image && (
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || 400}
              height={image.height || 300}
              className="h-full w-full object-cover"
              containerClassName="h-full w-full"
            />
          </div>
        )}

        <div className="p-6">
          <h3 className="mb-2 text-lg font-semibold text-zinc-900">{title}</h3>

          {description && (
            <p className="mb-4 text-sm leading-relaxed text-zinc-600">
              {description}
            </p>
          )}

          {children && <div className="mb-4">{children}</div>}

          {actions && actions.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || 'outline'}
                  size="sm"
                  href={action.href}
                  onClick={action.onClick}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
