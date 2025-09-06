'use client';

import { ReactNode, Suspense } from 'react';
import Container from '@/components/Container';
import Border from '@/components/Border';
import Section from '@/components/Section';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import Button from '@/components/Button';
import Link from 'next/link';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import AppPageHeader from '@/components/CollapsableMenu/components/AppPageHeader';

export interface AppPageSection {
  id: string;
  title: string;
  icon: JSX.Element;
  content: ReactNode;
}

export interface AppPageMetadata {
  title: string;
  description: string;
  industry?: string;
  developedIn?: string;
  projectType?: string;
  service?: string;
  websiteUrl?: string;
}

interface AppPageLayoutProps {
  metadata: AppPageMetadata;
  sections: AppPageSection[];
  className?: string;
}

const AppPageLayout = ({
  metadata,
  sections,
  className,
}: AppPageLayoutProps) => {
  return (
    <div
      className={`w-full overflow-y-auto overflow-x-hidden ${className || ''}`}
    >
      <Container>
        {/* Header Section */}
        <header>
          <Section id="about">
            <FadeInStagger once>
              <FadeIn>
                <div className="flex flex-col justify-center gap-4 pb-20 pt-20">
                  <h1 className="text-3xl font-bold">{metadata.title}</h1>
                  <p className="text-lg text-gray-500">
                    {metadata.description}
                  </p>

                  {/* Metadata Display */}
                  <div className="flex flex-col gap-2">
                    {metadata.industry && (
                      <div className="border-gray-500/20 px-6 py-4 sm:border-l">
                        <dt className="font-semibold text-blue-100">
                          Industry
                        </dt>
                        <dd>{metadata.industry}</dd>
                      </div>
                    )}
                    {metadata.developedIn && (
                      <div className="border-gray-500/20 px-6 py-4 sm:border-l">
                        <dt className="font-semibold text-blue-100">
                          Developed In
                        </dt>
                        <dd>{metadata.developedIn}</dd>
                      </div>
                    )}
                    {metadata.projectType && (
                      <div className="border-gray-500/20 px-6 py-4 sm:border-l">
                        <dt className="font-semibold text-blue-100">
                          Project Type
                        </dt>
                        <dd>{metadata.projectType}</dd>
                      </div>
                    )}
                    {metadata.service && (
                      <div className="border-gray-500/20 px-6 py-4 sm:border-l">
                        <dt className="font-semibold text-blue-100">Service</dt>
                        <dd>{metadata.service}</dd>
                      </div>
                    )}
                  </div>

                  {/* Website Link */}
                  {metadata.websiteUrl && (
                    <div className="mt-5">
                      <Button
                        className="flex items-center gap-x-2"
                        variant="secondary"
                        arrow="right"
                      >
                        <Link
                          href={metadata.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Website
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </FadeIn>
            </FadeInStagger>
          </Section>
        </header>

        {/* Dynamic Sections */}
        <FadeIn>
          {sections.map(section => (
            <div key={section.id}>
              <Border className="pt-10" />
              <Section id={section.id}>
                <div className="mb-20 flex flex-col pt-10">
                  <AppPageHeader icon={section.icon} title={section.title} />
                  <Suspense fallback={<LoadingSpinner size="lg" />}>
                    {section.content}
                  </Suspense>
                </div>
              </Section>
            </div>
          ))}
        </FadeIn>
      </Container>
    </div>
  );
};

export default AppPageLayout;
