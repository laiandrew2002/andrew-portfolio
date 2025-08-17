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

const Explorer = ({ myWork }: { myWork: MyWork[] }) => {
  return (
    <>
      <Header menuTitle="EXPLORER">
        <button className="rounded-md p-1 hover:bg-gray-300">
          <Ellipsis />
        </button>
      </Header>
      <div
        id="subMenusContainer"
        className="mx-[1px] flex flex-1 select-none flex-col divide-y-2 divide-dark_border"
      >
        <Editors />
        <Portfolio myWork={myWork} />
        <Outline />
        <Timeline />
        <Scripts />
      </div>
    </>
  );
};

export default Explorer;
