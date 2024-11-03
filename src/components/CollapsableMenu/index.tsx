'use client';
// import { App, Leetcode, MDXEntry } from '@/lib/mdx';
import clsx from 'clsx';
import Explorer from './components/Explorer';
import useExpandableStore, { Menu } from '@/lib/store/useExpandableStore';

export default function CollapsableMenu({
  allApps,
  allLeetcode,
}: {
  allApps: any;
  allLeetcode: any;
  // allApps: MDXEntry<App>[];
  // allLeetcode: MDXEntry<Leetcode>[];
}) {
  const expanded = useExpandableStore((state) => state.value);
  const currentMenu = useExpandableStore((state) => state.menu);

  return (
    <div
      className = {
        clsx(
          !expanded && 'hidden',
          'z-10 bg-dark_bg absolute md:static left-full top-0 bottom-0 flex flex-col text-gray-500 border-r-2 border-r-dark_border min-w-[300px] max-w-[300px]'
        )
      }>
      {currentMenu === Menu.EXPLORER && <Explorer allApps={allApps} allLeetcode={allLeetcode} />}
    </div>
  );
}
