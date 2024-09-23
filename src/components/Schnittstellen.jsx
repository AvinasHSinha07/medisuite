import React from "react";
import sortiment from "/sortiment.png";
import { FaCheck } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const Schnittstellen = () => {
  return (
    <div className="w-full h-full font-segoe  flex flex-col lg:flex-row items-center justify-center overflow-hidden  lg:gap-0  text-white">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 flex items-start justify-center flex-col bg-[#AEBD48] py-6 px-8 md:px-16 h-full">
        <h1 className="text-4xl lg:text-5xl mt-4 lg:mt-8 mb-4 lg:mb-12">
          Schnittstellen
        </h1>
        <p className="text-base md:text-lg lg:text-3xl mb-1 w-full md:w-2/3 lg:w-9/12 font-light">
          Artikel von Drittanbietern anbinden und zentral über eine Plattform
          bestellen.
        </p>

        {/* <div className="mt-6 lg:mt-10">
          <ul className="space-y-2 lg:space-y-4">
            <li className="flex items-start justify-start">
              <FaCheck className="text-lg lg:text-2xl mr-2" /> Schnittstelle zu
              Ihrer Apotheke
            </li>
            <li className="flex items-start justify-start">
              <FaCheck className="text-lg lg:text-2xl mr-2" /> Fremdartikel
              hinzufügen & bewohnerbezogen bestellen
            </li>
          </ul>
        </div> */}
     <div className="mt-6 lg:mt-10 font-normal">
  <ul className="space-y-2 lg:space-y-4 text-sm lg:text-lg">
    <li className="flex items-center">
      <div className="flex-shrink-0">
        <GiCheckMark className="text-lg lg:text-2xl mr-4" />
      </div>
      <div className="md:text-2xl">
        Schnittstelle zu Ihrer Apotheke
      </div>
    </li>
    <li className="flex items-center">
      <div className="flex-shrink-0">
        <GiCheckMark className="text-lg lg:text-2xl mr-4" />
      </div>
      <div className="md:text-2xl">
        Fremdartikel hinzufügen & bewohnerbezogen bestellen
      </div>
    </li>
  </ul>
</div>

      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 lg:bg-white bg-[#AEBD48] px-8 md:px-16 md:py-4 lg:py-0 lg:px-0  lg:relative flex justify-center items-center lg:justify-end">
        <img
          className="w-[250px]  h-[400px] lg:w-72 lg:h-72  lg:absolute lg:-left-16    xl:-left-36  object-contain"
          src={sortiment}
          alt="Medisuite"
        />
      </div>
    </div>
  );
};

export default Schnittstellen;
