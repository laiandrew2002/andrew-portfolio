const Pill = ({
  text,
  color,
  background,
}: {
  text: string;
  color?: string;
  background?: string;
}) => {
  const textColor = color ?? 'text-blue-200';
  const backgroundColor = background ?? 'bg-blue-800';
  return (
    <div
      className={`rounded-full px-4 py-1 text-sm font-medium ${textColor} ${backgroundColor}`}
    >
      {text}
    </div>
  );
};

export default Pill;
