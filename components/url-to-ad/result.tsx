import React from 'react';
import ADCardViewer from './ad-card-viewer';
import GoogleSearchADCard from './google-search-ad-card';
import FacebookAdCard from './facebook-ad-card';
import TwitterADCard from './twitter-ad-card';
import LinkedinAdCard from './linkedin-ad-card';
import BingSearchADCard from './bing-search-ad-card';

export default function Result() {
  return (
    <div className="flex flex-col gap-4  w- [1158px] ">
      <div className="text-[#0033FF] border-b-2 border-[#0033FF] w-fit py-2">
        <p>Result</p>
      </div>
      <div className="h-full overflow-y-scroll p-6  bg-[#F5F5F5]">
        {false ? (
          <div className="flex justify-center items-start pt-20">
            <div>Generate your copy to see results here</div>
          </div>
        ) : (
          <div className="flex flex-col h-fit  items-center gap-6  pb-6 ">
            <ADHeader title="Google Ad" icon="icons/svg/google-ads.svg" />
            <ADCardViewer card={<GoogleSearchADCard />} />
            <ADHeader title="Facebook Ad" icon="icons/svg/facebook.svg" />
            <ADCardViewer card={<FacebookAdCard />} />
            <ADHeader title="Twitter" icon="icons/svg/twitter.svg" />
            <ADCardViewer card={<TwitterADCard />} />
            <ADHeader title="LinkedIn Ad" icon="icons/svg/linkedin.svg" />
            <ADCardViewer card={<LinkedinAdCard />} />
            <ADHeader title="Bing Ad" icon="icons/svg/bing.svg" />
            <ADCardViewer card={<BingSearchADCard />} />
          </div>
        )}
      </div>
    </div>
  );
}

export function ADHeader({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <img src={icon} alt="" />
      <span>{title}</span>
    </div>
  );
}
