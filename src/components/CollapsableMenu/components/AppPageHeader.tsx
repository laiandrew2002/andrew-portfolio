import { FadeIn } from '@/components/FadeIn';

const AppPageHeader = ({
  icon,
  title,
}: {
  icon: JSX.Element;
  title: string;
}) => {
  return (
    <div className="mb-4 flex gap-6">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="relative self-center"
      >
        <div>
          {icon}
          <span className="icon-blur absolute inset-2 -z-10 bg-white"></span>
        </div>
      </FadeIn>
      <FadeIn
        variants={{
          hidden: { opacity: 0, x: -15 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="text-2xl font-semibold">{title}</h2>
      </FadeIn>
    </div>
  );
};

export default AppPageHeader;
