'use client';

import { Ellipsis } from '@/icons';
import Header from './Header';
import Editors from './Editors';
import Outline from './Outline';
import Timeline from './Timeline';
import Scripts from './Scripts';
import Portfolio from './Portfolio';

const Explorer = ({
  allApps,
  allLeetcode,
}: {
  allApps: any;
  allLeetcode: any;
}) => {
  return (
    <>
      <Header menuTitle="EXPLORER">
        <button className="hover:bg-gray-300 p-1 rounded-md">
          <Ellipsis />
        </button>
      </Header>
      <div id="subMenusContainer" className="divide-dark_border divide-y-2 flex flex-col mx-[1px] flex-1 select-none">
        <Editors />
        <Portfolio />
        {/* <Portfolio allApps={allApps} allLeetcode={allLeetcode} /> */}
        <Outline />
        <Timeline />
        <Scripts />
      </div>
    </>
  );
}

export default Explorer;
