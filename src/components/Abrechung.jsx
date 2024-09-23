import React, { useEffect, useRef } from "react";
import aberungimg from "/aberungimg.jpg";
import { GiCheckMark } from "react-icons/gi";

const Abrechung = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const intervalDelay = 1500; // Delay between animations in milliseconds
    const animationDuration = 50; // Duration of each animation in milliseconds
    let currentIndex = 0;

    function animateImages() {
      if (imagesRef.current.length === 0) return; // Ensure there are images to animate

      // Move current image up
      imagesRef.current[currentIndex].style.transform = "translateY(0px)";
      imagesRef.current[
        currentIndex
      ].style.transition = `transform ${animationDuration}ms`;

      // Move current image back down after animationDuration
      setTimeout(() => {
        imagesRef.current[currentIndex].style.transform = "translateY(-8%)";
      }, animationDuration);

      // Increment index or reset to 0 if at the end
      currentIndex = (currentIndex + 1) % imagesRef.current.length;
    }

    // Start the animation
    animateImages(); // Immediately start the first animation

    const animationInterval = setInterval(() => {
      animateImages();
    }, intervalDelay + animationDuration);

    // Cleanup interval on component unmount
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="w-full h-full font-segoe   flex flex-col lg:flex-row items-center justify-center overflow-hidden  lg:gap-0  text-white">
      {/* Left Section */}
      <div className="w-full lg:w-2/3 flex items-start justify-center flex-col bg-[#AEBD48] py-6 px-8 md:px-16 h-full">
        <h1 className="text-4xl lg:text-5xl mt-4 lg:mt-8 mb-4 lg:mb-8">
          Abrechnung
        </h1>
        <p className="text-base md:text-lg lg:text-3xl mb-1 w-full md:w-2/3 lg:w-9/12 font-light">
          Direktabrechnung mit den Krankenkassen durch uns. Keine Schnittstelle.
          Keine Kosten. Kein Aufwand.
        </p>

        <div className="mt-6 lg:mt-10 font-normal">
          <ul className="space-y-2 lg:space-y-4 text-sm lg:text-lg">
            <li className="flex items-center">
              <GiCheckMark className="text-lg lg:text-2xl mr-4" />{" "}
              <span className="md:text-2xl">Krankenkassen</span>
            </li>
            <li className="flex items-center">
              <GiCheckMark className="text-lg lg:text-2xl mr-4" />
              <span className="md:text-2xl">80% automatisch</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full  bg-[#AEBD48] px-8 py-4 flex justify-center lg:hidden">
        <img
          className="w-96 md:w-full  h-96  object-contain"
          src={aberungimg}
          alt="aberungimg"
        />
      </div>
      <div className="w-full lg:w-1/3 lg:bg-white  bg-[#AEBD48] px-8 md:px-16 md:py-4 lg:py-0 lg:px-0  lg:relative hidden lg:flex items-end justify-end relative h-full">
        <img
          ref={(el) => (imagesRef.current[4] = el)}
          src={aberungimg}
          className="w-[80%] h-[80%] xl:bottom-4 xl:-left-24 lg:bottom-4 lg:-left-16 border border-black/10 absolute shadow-2xl shadow-black/10 z-[100]"
          alt=""
        />
        <img
          ref={(el) => (imagesRef.current[2] = el)}
          src={aberungimg}
          className="w-[80%] h-[80%] xl:bottom-12 xl:-left-16 lg:bottom-12 lg:-left-8  border border-black/10 absolute shadow-2xl shadow-black/10 z-[80]"
          alt=""
        />
        <img
          ref={(el) => (imagesRef.current[3] = el)}
          src={aberungimg}
          className="w-[80%] h-[80%] xl:bottom-8   xl:-left-20 lg:bottom-8 lg:-left-12 border border-black/10 absolute  shadow-2xl shadow-black/10 z-[90]"
          alt=""
        />
        <img
          ref={(el) => (imagesRef.current[1] = el)}
          src={aberungimg}
          className="w-[80%] h-[80%] xl:bottom-16 xl:-left-12 lg:bottom-16 lg:-left-4  border border-black/10 absolute shadow-2xl shadow-black/10 z-40"
          alt=""
        />
        <img
          ref={(el) => (imagesRef.current[0] = el)}
          src={aberungimg}
          className="w-[80%] h-[80%] xl:bottom-20 xl:-left-8 lg:bottom-20 lg:-left-0  absolute border border-black/10 shadow-2xl shadow-black/10 z-90"
          alt=""
        />
      </div>
    </div>
  );
};

export default Abrechung;
