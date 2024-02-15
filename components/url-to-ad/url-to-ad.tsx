import React from 'react';
import Prompt from './prompt';
import TitleBar from '../common/title-bar';
import Result from './result';

export default function UrlToAdPage() {
  return (
    <div
      className=" flex flex-col gap-4 p-8 h-full w-full text-sm "
      style={{ backgroundColor: '#ffffff' }}>
      <TitleBar />
      <div className="flex  h-full ">
        <Prompt />
        <Result />
      </div>
    </div>
  );
}
