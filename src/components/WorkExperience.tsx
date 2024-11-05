import clsx from 'clsx';
import { default as Image } from 'next/image';
import { FadeIn, FadeInStagger } from './FadeIn';
import Border from './Border';

const experience = [
  {
    title: 'Cake Group | Software Engineer.',
    date: 'April 2021 - Oct 2024',
    description: [
      'Spearheaded development and maintenance for high-traffic web applications, delivering a seamless user experience across https://bake.io and  https://app.bake.io using React (TypeScript), Redux, and Node.js (Express/TypeScript), Postgres Database and Redis.',
      'Enhanced the company admin panel with React Admin and React Query, improving data accessibility for internal teams.',
    ],
    image: { url: '/workExperience/cake_logo.jpeg', height: 96, width: 96, className: 'rounded-none' },
  },
  {
    title: 'Ufinity Pte Ltd | Software Engineer.',
    date: 'Nov 2020 - Mar 2021',
    description: [
      'Contributed to the LifeSG mobile application (iOS & Android) with React Native (TypeScript), enhancing user experience through performance optimization and clean UI design.',
      'Played a pivotal role in agile development, with a focus on TDD and high-quality code production through pair programming.',
      'Recognized for delivering programming estimates with high accuracy, enabling efficient resource allocation.',
    ],
    image: { url: '/workExperience/ufinity_logo.jpeg', height: 96, width: 96, className: 'rounded-none' },
  },
  {
    title: 'DXC Technology | Associate Professional Programmer Analyst.',
    date: 'Feb 2019 - Nov 2020',
    description: [
      'Involved in the development of the front end of an API gateway using React.js & Redux.',
      'Developed a REST API generator using loopback in Node.js',
      'Involved in the development of integration of a microservice to provide Singpass OIDC authentication for clients. (Node.js & Express.js).',
    ],
    image: { url: '/workExperience/dxc_logo.jpg', height: 96, width: 96, className: '' },
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
