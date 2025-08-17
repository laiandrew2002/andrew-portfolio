'use client';

import clsx from 'clsx';
import Explorer from './components/Explorer';
import useExpandableStore, { Menu } from '@/lib/store/useExpandableStore';
import { MyWork } from '@/app/layout';

const CollapsableMenu = ({ myWork }: { myWork: MyWork[] }) => {
  const expanded = useExpandableStore(state => state.value);
  const currentMenu = useExpandableStore(state => state.menu);

  return (
    <div
      className={clsx(
        !expanded && 'hidden',
        'absolute bottom-0 left-full top-0 z-10 flex min-w-[300px] max-w-[300px] flex-col border-r-dark_border bg-activity_dark_bg text-gray-500 md:static'
      )}
    >
      {currentMenu === Menu.EXPLORER && <Explorer myWork={myWork} />}
    </div>
  );
};

export default CollapsableMenu;
