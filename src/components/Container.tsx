import clsx from 'clsx';

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        'mx-auto max-w-6xl px-4 py-6 text-white sm:px-8 lg:px-12',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
