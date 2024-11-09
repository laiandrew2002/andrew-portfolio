'use client';

import { FadeInStagger } from "./FadeIn";
import { ContactMe as ContactMeIcon } from '@/icons';
import Socials from "./Socials";

const ContactMe = () => {
  const email = 'laiandrew2002@gmail.com';
  const subject = 'Reach out from portfolio';
  // const body = 'Hello, I would like to reach out from your portfolio.';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  console.log(mailtoLink);
  return (
    <div className="@container">
      <FadeInStagger faster className="relative z-10 flex flex-col gap-4 mt-20 mb-60">
        <div className="flex flex-row items-center gap-4 text-center">
          <ContactMeIcon />
          <a
            href={mailtoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-500 hover:text-blue-700 font-medium transition-colors"
          >
            {email}
          </a>
        </div>
        <Socials showContactMe={false} />
      </FadeInStagger>
    </div>
  );
}

export default ContactMe;
