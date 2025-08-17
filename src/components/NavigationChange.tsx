'use client';
import useExpandableStore from '@/lib/store/useExpandableStore';
import useSectionStore from '@/lib/store/useSectionStore';
import useTabsStore from '@/lib/store/useTabsStore';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavigationChange = ({ allPaths }: { allPaths: any[] }) => {
  const pathname = usePathname();
  const initialLoad = useRef(true);
  const { setCurrentTab } = useTabsStore();
  const { closeIfOpen } = useExpandableStore();
  const { resetVisible } = useSectionStore();

  useEffect(() => {
    const currentPath = allPaths.find(path => path.href === pathname);
    setCurrentTab(
      currentPath
        ? {
            href: currentPath.href,
            title: currentPath.title,
            type: currentPath.framework,
          }
        : {
            href: '/',
            title: 'About Me',
            type: 'about',
          }
    );
  }, [allPaths, pathname, setCurrentTab]);

  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      return;
    }

    if (window.innerWidth < 768) {
      closeIfOpen();
    }
    resetVisible();
  }, [closeIfOpen, pathname, resetVisible]);

  return <></>;
};

export default NavigationChange;
