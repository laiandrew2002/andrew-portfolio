/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Ellipsis } from '@/icons';
import { MyWork } from '@/app/layout';
import Header from './Header';
import Editors from './Editors';
import Outline from './Outline';
import Timeline from './Timeline';
import Scripts from './Scripts';
import Portfolio from './Portfolio';

const Explorer = ({
  myWork,
}: {
  myWork: MyWork[];
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
        <Portfolio myWork={myWork} />
        <Outline />
        <Timeline />
        <Scripts />
      </div>
    </>
  );
}

export default Explorer;
