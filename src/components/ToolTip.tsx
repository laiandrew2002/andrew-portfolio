import clsx from 'clsx';

interface TooltipProps {
  active: boolean;
  className: string;
  text: string;
}

const ToolTip = ({ active, className, text }: TooltipProps) => {
  return (
    <span
      className={clsx(
        active ? 'block opacity-100' : 'hidden opacity-0',
        className,
        'absolute z-20 select-none whitespace-nowrap border border-dark_border bg-dark_bg px-2 py-1 text-sm transition-opacity duration-300 ease-in-out'
      )}
    >
      {text}
    </span>
  );
};

export default ToolTip;
