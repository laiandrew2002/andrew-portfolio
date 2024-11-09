
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
            <span className="bg-about_me_blue icon-blur absolute inset-0 -z-10"></span>
          </>
        }
        title="About Me"
        description={
          <div>
            A <span className="text-about_me_blue">software engineer</span> specialized on <span className="text-about_me_blue">Web development</span> and <span className="text-about_me_blue">mobile app development</span>.
          </div>
        }
      />
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 mt-20 justify-between">
          <div className="max-w-xl flex-auto">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">Andrew Lai</h3>
            <p className="text-base leading-7 text-about_me_blue">Full-stack software engineer</p>
            <p className="mt-4 text-lg text-gray-500">Result-oriented software engineer with 5+ years of expertise in building responsive, high-
              performance web and mobile applications using React, TypeScript, and Node.js.</p>
            <p className="mt-4 text-lg text-gray-500">Skilled in leading projects and
              collaborating in cross-functional teams to drive innovation and deliver measurable results.</p>
          </div>
          <div className="flex-none mx-auto">
            <Image className="rounded-full object-cover" src="/andrew.jpg" alt="" height={208} width={208} />
          </div>
        </div>
        <div className="container">
          <div className="flex gap-5 mt-16 flex-col @3xl:flex-row justify-between">
            <div>
              <FadeIn
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h4 className="text-about_me_blue mb-1">Languages</h4>
                <div className="border-y py-2 border-gray-500/30 mb-6">
                  <div className="flex flex-wrap gap-x-6">
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">Mandarin / Chinese</p> - <p className="text-gray-500">Advanced</p>
                    </div>
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">English</p> - <p className="text-gray-500">Advanced</p>
                    </div>
                    <div className="text-lg font-bold leading-9 tracking-tight flex gap-1">
                      <p className="text-white">Malay</p> - <p className="text-gray-500">Moderate</p>
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
}

export default AboutMe;

