import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Abrechung from './Abrechung';
import Verordnungen from './Verordnungen';
import Administration from './Administration';
import Logistik from './Logistik';
import Schnittstellen from './Schnittstellen';
import Kosten from './Kosten';
import Home from './Home';

// Define the content for each route
const contentMap = {
  '/': <Home />,
  '/Abrechung': <Abrechung />,
  '/Verordnungen': <Verordnungen />,
  '/Administration': <Administration />,
  '/Logistik': <Logistik />,
  '/Schnittstellen': <Schnittstellen />,
  '/Kosten': <Kosten />,
};

const MainArea = () => {
  const location = useLocation();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const currentPath = location.pathname;
      const slideIndex = Object.keys(contentMap).indexOf(currentPath);
      if (slideIndex !== -1) {
        swiperRef.current.swiper.slideTo(slideIndex);
      }
    }
  }, [location.pathname]);

  return (
  
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        ref={swiperRef}
        className="flex-grow w-full" // Ensures Swiper takes up the full height
      >
        {Object.keys(contentMap).map((path, index) => (
          <SwiperSlide key={index}>
            {contentMap[path]}
          </SwiperSlide>
        ))}
      </Swiper>
   
  );
};

export default MainArea;
