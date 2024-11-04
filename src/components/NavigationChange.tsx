'use client';
import useExpandableStore from '@/lib/store/useExpandableStore';
import useSectionStore from '@/lib/store/useSectionStore';
import useTabsStore from '@/lib/store/useTabsStore';
import App from 'next/app';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const NavigationChange = ({ allPaths }: { allPaths: any[] }) => {
  const pathname = usePathname();
  const initialLoad = useRef(true);
  const { setCurrentTab } = useTabsStore();
  const { closeIfOpen } = useExpandableStore();
  const { resetVisible } = useSectionStore();

  useEffect(() => {
    let currentPath = allPaths.find((path) => path.href === pathname);
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
          },
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
}

export default NavigationChange;
