import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="px-9 py-9 max-w-full bg-white rounded-xl w-[839px] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
          <h1 className="text-sky-700 border-2 border-black border-solid text-[160px] max-md:mt-10 max-md:text-4xl">
            MIND
          </h1>
        </div>
        <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
          <h2 className="text-6xl text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Magnetic Imaging Neuro-Diagnosis
          </h2>
        </div>
      </div>
      <p className="z-10 mt-0 ml-28 text-lg text-black max-md:max-w-full">
        Created by James Escobedo, Jasmine Hightower, Blen Mekonen, James Silva Rodriguez, and Isabel Tejeda
      </p>
    </header>
  );
};

export default Header;