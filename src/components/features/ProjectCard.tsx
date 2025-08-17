import clsx from 'clsx';
import Image from 'next/image';
import GlowCard from '../GlowCard';
import Button from '../Button';
import { Project } from '@/lib/types/portfolio';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const heroImage = project.images.find(img => img.isHero) || project.images[0];

  return (
    <GlowCard
      className={clsx('hover:shadow-my_work_yellow/90', className)}
      glowClassName="from-[#ffdc8b] to-[#ffdc8b]"
    >
      <div className="flex flex-col p-4">
        <div className="mb-4 text-2xl text-my_work_yellow">{project.title}</div>
        <div className="flex flex-col gap-4 xl:flex-row">
          <div className="flex w-full flex-col justify-between">
            <div className="w-full text-white">{project.description}</div>
            {project.href && (
              <Button
                className="mt-4 flex w-fit items-center gap-x-2 px-4 py-2"
                variant="secondary"
                arrow="right"
                href={project.href}
              >
                Learn more
              </Button>
            )}
          </div>
          {heroImage && (
            <Image
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              className={clsx('my-work-img-shadow z-10 w-full xl:w-[50%]')}
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
            />
          )}
        </div>
      </div>
    </GlowCard>
  );
};

export default ProjectCard;
