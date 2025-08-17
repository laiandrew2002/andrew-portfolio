import Image from 'next/image';
import { FadeIn } from '../FadeIn';
import { Skill } from '@/lib/types/portfolio';

interface SkillGridProps {
  skills: readonly Skill[];
  className?: string;
}

const SkillGrid = ({ skills, className }: SkillGridProps) => {
  return (
    <div className={className}>
      {skills.map((skillCategory, index) => (
        <SkillCategory key={index} skill={skillCategory} />
      ))}
    </div>
  );
};

interface SkillCategoryProps {
  skill: Skill;
}

const SkillCategory = ({ skill }: SkillCategoryProps) => {
  return (
    <div>
      <div className="mb-6 flex items-center">
        <h3 className="text-center text-2xl font-semibold">{skill.category}</h3>
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        {skill.technologies.map((technology, index) => (
          <TechnologyItem key={index} technology={technology} />
        ))}
      </div>
    </div>
  );
};

interface TechnologyItemProps {
  technology: {
    name: string;
    image: string;
  };
}

const TechnologyItem = ({ technology }: TechnologyItemProps) => {
  return (
    <FadeIn className="flex w-24 flex-col">
      <div>
        <Image
          src={technology.image}
          className="m-auto rounded-md object-contain"
          alt={`${technology.name} logo`}
          height={64}
          width={64}
          style={{
            width: 64,
            height: 64,
          }}
        />
        <h3 className="m-2 mx-auto w-min px-2 text-center text-sm font-semibold tracking-tight text-gray-500">
          {technology.name}
        </h3>
      </div>
    </FadeIn>
  );
};

export default SkillGrid;
