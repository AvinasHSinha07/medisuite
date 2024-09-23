import React, { useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import arrow from "/arrow.png";
import { GiCheckMark } from "react-icons/gi";

const Verordnungen = () => {
  const progressRefs = useRef([]);

  useEffect(() => {
    const animateProgressBar = (bar, targetWidth) => {
      let currentWidth = 0;
      bar.style.width = '0%'; // Start width for animation

      const animationInterval = setInterval(() => {
        currentWidth += 1;

        if (currentWidth < 33) {
          bar.style.backgroundColor = '#a8bf00'; // Light Green
        } else if (currentWidth < 66) {
          bar.style.backgroundColor = '#fff027'; // Yellow
        } else if (currentWidth < 80) {
          bar.style.backgroundColor = '#FF7927'; // Orange
        } else {
          bar.style.backgroundColor = '#FD6565'; // Red
        }

        bar.style.width = `${currentWidth}%`;

        if (currentWidth >= targetWidth) {
          clearInterval(animationInterval);
        }
      }, 30);
    };

    progressRefs.current.forEach((ref) => {
      const bar = ref.querySelector('.percent');
      const targetWidth = parseFloat(bar.dataset.val);
      animateProgressBar(bar, targetWidth);
    });

    // Restart animation every 5 seconds
    const intervals = progressRefs.current.map((ref) => 
      setInterval(() => {
        const bar = ref.querySelector('.percent');
        const targetWidth = parseFloat(bar.dataset.val);
        animateProgressBar(bar, targetWidth);
      }, 5000)
    );

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="w-full h-full  font-segoe flex flex-col lg:flex-row md:items-center md:gap-0 justify-center overflow-hidden text-white">
 
      <div className="w-full lg:w-2/3 flex items-start justify-center flex-col bg-[#AEBD48] py-6 px-8 md:px-16 h-full">
      <h1 className="text-4xl lg:text-5xl mt-4 lg:mt-8 mb-4 lg:mb-8">
      Verordnungen
        </h1>
        <p className="text-base md:text-lg lg:text-3xl mb-1 w-full md:w-2/3 lg:w-9/12 font-light">
        Jahresverbrauch stets im Blick behalten. Rezeptvorlagen automatisch
          erstellen lassen. Rezepte hochladen und Bewohnern zuordnen. Ganz
          einfach.
        </p>
       
       
        {/* <div className="mt-4 md:mt-2 lg:mt-4">
          <ul className="space-y-2 lg:space-y-4 text-sm md:text-base lg:text-lg">
            <li className="flex items-center">
              <FaCheck className="text-base md:text-lg lg:text-2xl mr-2" /> MiGeL-Barometer
            </li>
            <li className="flex items-center">
              <FaCheck className="text-base md:text-lg lg:text-2xl mr-2" /> Rezeptmanagement
            </li>
            <li className="flex items-center">
              <FaCheck className="text-base md:text-lg lg:text-2xl mr-2" /> Automatische Vorlagen
            </li>
            <li className="flex items-center">
              <FaCheck className="text-base md:text-lg lg:text-2xl mr-2" /> Benachrichtigungen (Apotheke)
            </li>
          </ul>
        </div> */}
         <div className="mt-6 lg:mt-10 font-normal">
        <ul className="space-y-2 lg:space-y-4 text-sm lg:text-lg">
            <li className="flex items-center">
              <GiCheckMark   className="text-lg lg:text-2xl mr-4" />{" "}
              <span className="md:text-2xl">MiGeL-Barometer</span> 
              
            </li>
            <li className="flex items-center">
              <GiCheckMark className="text-lg lg:text-2xl mr-4" />
              <span className="md:text-2xl">Rezeptmanagement</span>  
            </li>
            <li className="flex items-center">
              <GiCheckMark className="text-lg lg:text-2xl mr-4" />
              <span className="md:text-2xl">Automatische Vorlagen</span>  
            </li>
            <li className="flex items-center">
              <GiCheckMark className="text-lg lg:text-2xl mr-4" />
              <span className="md:text-2xl">Benachrichtigungen (Apotheke)</span>  
            </li>
          </ul>
         
        </div>
      </div>

      {/* Right Section */}
      <div className=" lg:w-1/3 bg-[#AEBD48]  lg:bg-white lg:relative  flex justify-center items-center lg:justify-end">
        <div className="p-8 md:p-6 lg:p-6 md:w-[400px] xl:w-[450px] w-[340px]  rounded-lg lg:absolute lg:-left-20 -skew-x-6 md:-skew-x-12 ">
          <div className="bg-gradient-to-r from-[#abbc33] to-[#abbc33]/50 text-white border border-white py-2 px-4 rounded-t-lg font-bold text-sm md:text-base lg:text-lg">
            Abteilung B
          </div>
          <div className="bg-white shadow-lg p-4 rounded-b-lg">
      {[
        { name: "Meier, Hans", current: 322.33, total: 408.01, percentage: 95, color: 'bg-[#ff7927]' },
        { name: "Müller, Erika", current: 650.46, total: 867.28, percentage: 75, color: 'bg-[#ff7927]' },
        { name: "Schmidt, Elisabeth", current: 204.00, total: 408.01, percentage: 50, color: 'bg-[#fff027]' },
        { name: "Fischer, Werner", current: 199.50, total: 798.00, percentage: 25, color: 'bg-[#a8bf00]' }
      ].map((person, index) => (
        <div
          key={index}
          className="flex justify-between gap-4  text-black items-center py-2"
          ref={el => progressRefs.current[index] = el}
        >
          {/* Person Name */}
          <span className="text-xs md:text-sm lg:text-base">
            {person.name}
          </span>

          {/* Progress Bar */}
          <div className="w-28 md:w-36 lg:w-36 h-6 md:h-6 lg:h-6 bg-gray-300 rounded-lg relative overflow-hidden">
            <div
              className={`absolute top-0 left-0 h-full percent`}
              data-val={person.percentage}
              style={{
                width: '0%', 
              }}
            >
              <small className="absolute top-1/2 transform -translate-y-1/2 left-1 text-black text-[9px] md:text-[12px] font-semibold whitespace-nowrap">
                CHF {person.current.toFixed(2)} / CHF {person.total.toFixed(2)}
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
          <div className="relative flex justify-end mt-4">
            <button className="bg-[#f1f1f1] hover:bg-black hover:text-white text-gray-700 py-1 md:py-2 px-3 md:px-4 rounded-lg shadow-lg hover:shadow-md text-xs md:text-sm lg:text-base">
              Rezeptvorlage erstellen
            </button>
            <img
              className="absolute -bottom-4 -right-6 w-10 md:w-14 lg:w-20"
              src={arrow}
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verordnungen;
