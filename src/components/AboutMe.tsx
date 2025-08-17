import { Accounts } from '@/icons';
import Image from 'next/image';
import { FadeIn } from './FadeIn';
import Socials from './Socials';
import SectionHeader from './SectionHeader';

const AboutMe = () => {
  return (
    <div className="relative z-10">
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
            A <span className="text-about_me_blue">software engineer</span> with
            expertise in <span className="text-about_me_blue">Web</span> and{' '}
            <span className="text-about_me_blue">Mobile development</span>.
          </div>
        }
      />
      <div className="container">
        <div className="mt-20 flex flex-col justify-between gap-8 lg:flex-row">
          <div className="max-w-xl flex-auto">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">
              Andrew Lai
            </h3>
            <p className="text-base leading-7 text-about_me_blue">
              Full stack software engineer
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Result-oriented software engineer with 5+ years of expertise in
              building responsive, high-performance web and mobile applications
              using React, TypeScript, and Node.js.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Skilled in leading projects and collaborating in cross-functional
              teams to drive innovation and deliver measurable results.
            </p>
          </div>
          <div className="mx-auto flex-none">
            <Image
              className="rounded-full object-cover"
              src="/andrew.jpg"
              alt="andrew portrait"
              height={208}
              width={200}
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
                    <div className="flex gap-1 text-lg font-bold leading-9 tracking-tight">
                      <p className="text-white">Mandarin / Chinese</p> -{' '}
                      <p className="text-gray-500">Advanced</p>
                    </div>
                    <div className="flex gap-1 text-lg font-bold leading-9 tracking-tight">
                      <p className="text-white">English</p> -{' '}
                      <p className="text-gray-500">Advanced</p>
                    </div>
                    <div className="flex gap-1 text-lg font-bold leading-9 tracking-tight">
                      <p className="text-white">Malay</p> -{' '}
                      <p className="text-gray-500">Moderate</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
