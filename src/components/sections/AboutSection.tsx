import { memo } from 'react';
import { Accounts } from '@/icons';
import Image from 'next/image';
import { FadeIn } from '../FadeIn';
import Socials from '../Socials';
import SectionHeader from '../SectionHeader';
import { PERSONAL_INFO } from '@/lib/constants/personalInfo';
import { useLazyLoad } from '@/lib/hooks/useLazyLoad';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface AboutSectionProps {
  className?: string;
}

const AboutSection = memo<AboutSectionProps>(({ className }) => {
  const { ref, shouldLoad } = useLazyLoad({ threshold: 0.1 });
  return (
    <div ref={ref} className={`relative z-10 ${className || ''}`}>
      {shouldLoad ? (
        <>
          <SectionHeader
            icon={
              <>
                <Accounts height="28" width="28" />
                <span className="icon-blur absolute inset-0 -z-10 bg-about_me_blue"></span>
              </>
            }
            title="About Me"
            description={
              <div>
                A <span className="text-about_me_blue">software engineer</span>{' '}
                with expertise in{' '}
                <span className="text-about_me_blue">Web</span> and{' '}
                <span className="text-about_me_blue">Mobile development</span>.
              </div>
            }
          />
          <div className="container">
            <div className="mt-20 flex flex-col justify-between gap-8 lg:flex-row">
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-base leading-7 text-about_me_blue">
                  {PERSONAL_INFO.title}
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  {PERSONAL_INFO.shortBio}
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  {PERSONAL_INFO.extendedBio}
                </p>
              </div>
              <div className="mx-auto flex-none">
                <Image
                  className="rounded-full object-cover"
                  src={PERSONAL_INFO.profileImage.src}
                  alt={PERSONAL_INFO.profileImage.alt}
                  height={PERSONAL_INFO.profileImage.height}
                  width={PERSONAL_INFO.profileImage.width}
                />
              </div>
            </div>
            <div className="container">
              <div className="@3xl:flex-row mt-16 flex flex-col justify-between gap-5">
                <div>
                  <FadeIn
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <h4 className="mb-1 text-xl font-bold text-about_me_blue">
                      Languages
                    </h4>
                    <div className="mb-6 border-y border-gray-500/30 py-2">
                      <div className="flex flex-wrap gap-x-6">
                        {PERSONAL_INFO.languages.map((language, index) => (
                          <div
                            key={index}
                            className="flex gap-1 text-lg font-bold leading-9 tracking-tight"
                          >
                            <p className="text-white">{language.name}</p> -{' '}
                            <p className="text-gray-500">{language.level}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center py-12">
          <LoadingSpinner size="lg" />
        </div>
      )}
    </div>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
