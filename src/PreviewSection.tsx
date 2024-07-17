import React from 'react';

const PreviewSection: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="grow justify-center pt-48 pr-20 pb-20 pl-16 w-full text-6xl text-black whitespace-nowrap bg-sky-700 rounded-xl border border-black border-solid max-md:pt-10 max-md:pr-8 max-md:pl-7 max-md:mt-10 max-md:text-4xl">
        PREVIEW
      </div>
    </div>
  );
};

export default PreviewSection;