import React from "react";
import homeimg from "/homeslider.png";

import { GiCheckMark } from "react-icons/gi";
const Home = () => {
  return (
    <div className=" w-full lg:h-full flex items-center justify-center md:items-start lg:items-center flex-col lg:flex-row">
      <div className=" px-8 py-4 text-white bg-[#AEBD48] lg:h-full lg:flex lg:flex-col lg:items-start  lg:justify-center md:w-full">
        <h1 className="text-4xl lg:text-5xl mt-4 lg:mt-8 mb-4 lg:mb-8">
          Medisuite
        </h1>
        <p className="text-base md:text-lg lg:text-3xl mb-1 w-full md:w-2/3 lg:w-9/12 font-light">
          Die Komplettlösung für eine unkomplizierte{" "}
          <span className="font-bold">MiGeL-Versorgung</span>
        </p>

        <div className="mt-6 lg:mt-10 font-normal">
          <ul className="space-y-2 lg:space-y-4 text-sm lg:text-lg">
            <li className="flex items-center">
              <GiCheckMark className="text-lg lg:text-2xl mr-4" />{" "}
              <span className="md:text-2xl">Krankenkassen-Abrechnung</span>
            </li>
            <li className="flex items-center">
              <GiCheckMark className="text-lg lg:text-2xl mr-4" />
              <span className="md:text-2xl">Rezeptmanagement</span>
            </li>
            <li className="flex items-center">
              <GiCheckMark className="text-lg lg:text-2xl mr-4" />{" "}
              <span className="md:text-2xl">Bewohnerverwaltung</span>
            </li>
            <li className="flex items-center">
              <GiCheckMark className="text-lg lg:text-2xl mr-4" />
              <span className="md:text-2xl">Fremdsortiment (Apotheke)</span>
            </li>
          </ul>
        </div>
      </div>
      <div className=" lg:w-1/3 w-full   lg:bg-white bg-[#AEBD48] px-8 md:px-16 md:py-4 lg:py-0 lg:px-0  lg:relative flex justify-center items-center lg:justify-end">
    <img
      className="w-96 h-96 md:w-80 md:h-80 lg:w-96 lg:h-96  xl:w-[420px] xl:h-[420px] lg:absolute lg:-left-24 xl:-left-36  object-contain"
      src={homeimg}
      alt="Medisuite"
    />
  </div>
    </div>
  );
};

export default Home;
<div className="w-full  font-segoe  h-full  flex flex-col lg:flex-row items-center justify-center overflow-hidden  lg:gap-0 gap-8 text-white">
  {/* Left Section */}
  <div className="w-full lg:w-2/3 flex items-start justify-center flex-col bg-[#AEBD48] py-6 px-8 md:px-16 h-full">
    <h1 className="text-4xl lg:text-5xl mt-4 lg:mt-8 mb-4 lg:mb-8">
      Medisuite
    </h1>
    <p className="text-base md:text-lg lg:text-3xl mb-1 w-full md:w-2/3 lg:w-9/12 font-light">
      Die Komplettlösung für eine unkomplizierte{" "}
      <span className="font-bold">MiGeL-Versorgung</span>
    </p>

    <div className="mt-6 lg:mt-10 font-normal">
      <ul className="space-y-2 lg:space-y-4 text-sm lg:text-lg">
        <li className="flex items-center">
          <GiCheckMark className="text-lg lg:text-2xl mr-4" />{" "}
          <span className="md:text-2xl">Krankenkassen-Abrechnung</span>
        </li>
        <li className="flex items-center">
          <GiCheckMark className="text-lg lg:text-2xl mr-4" />
          <span className="md:text-2xl">Rezeptmanagement</span>
        </li>
        <li className="flex items-center">
          <GiCheckMark className="text-lg lg:text-2xl mr-4" />{" "}
          <span className="md:text-2xl">Bewohnerverwaltung</span>
        </li>
        <li className="flex items-center">
          <GiCheckMark className="text-lg lg:text-2xl mr-4" />
          <span className="md:text-2xl">Fremdsortiment (Apotheke)</span>
        </li>
      </ul>
    </div>
  </div>

  {/* Right Section */}
  <div className="w-full lg:w-1/3 lg:bg-white bg-[#AEBD48] px-8 md:px-16 md:py-4 lg:py-0 lg:px-0  lg:relative flex justify-center items-center lg:justify-end">
    <img
      className="w-96 h-96 md:w-80 md:h-80 lg:w-96 lg:h-96  xl:w-[420px] xl:h-[420px] lg:absolute lg:-left-24 xl:-left-36  object-contain"
      src={homeimg}
      alt="Medisuite"
    />
  </div>
</div>;
