'use client';

import { memo } from 'react';
import { FadeInStagger } from '../FadeIn';
import { ContactMe as ContactMeIcon } from '@/icons';
import Socials from '../Socials';
import { CONTACT_INFO } from '@/lib/constants/personalInfo';
import { useLazyLoad } from '@/lib/hooks/useLazyLoad';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface ContactSectionProps {
  className?: string;
}

const ContactSection = memo<ContactSectionProps>(({ className }) => {
  const { ref, shouldLoad } = useLazyLoad({ threshold: 0.1 });
  const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(CONTACT_INFO.emailSubject)}`;

  return (
    <div ref={ref} className={`container ${className || ''}`}>
      {shouldLoad ? (
        <FadeInStagger
          faster
          className="relative z-10 mb-60 mt-20 flex flex-col gap-4"
        >
          <div className="flex flex-row items-center gap-4 text-center">
            <ContactMeIcon />
            <a
              href={mailtoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
          <Socials showContactMe={false} />
        </FadeInStagger>
      ) : (
        <div className="flex justify-center py-12">
          <LoadingSpinner size="lg" />
        </div>
      )}
    </div>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
