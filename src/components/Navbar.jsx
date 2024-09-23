import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logomobile from "/mobilelogo.ico";
import logo from "/logo.png";
const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-16 lg:px-24 px-4">
        <div>
          <NavLink to="/" className="flex-shrink-0">
            <img
              src={logomobile}
              alt="Logo"
              className="block h-8 md:hidden" // Hidden on md and larger screens
            />
            <img
              src={logo}
              alt="Logo"
              className="hidden h-10 md:block" // Hidden on sm screens
            />
          </NavLink>
        </div>
  
        <div className="hidden lg:flex">
          <ul className="flex items-center justify-between gap-4 md:gap-2 lg:gap-2 xl:gap-4   lg:text-xs xl:text-base  font-normal">
            <li>
              <NavLink
                to="/Abrechung"
                className={({ isActive }) => isActive ? 'text-blue-500' : ''}
              >
                Abrechung
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Verordnungen"
                className={({ isActive }) => isActive ? 'text-blue-500' : ''}
              >
                Verordnungen
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Administration"
                className={({ isActive }) => isActive ? 'text-blue-500' : ''}
              >
                Administration
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Logistik"
                className={({ isActive }) => isActive ? 'text-blue-500' : ''}
              >
                Logistik
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Schnittstellen"
                className={({ isActive }) => isActive ? 'text-blue-500' : ''}
              >
                Schnittstellen
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Kosten"
                className={({ isActive }) => isActive ? 'text-blue-500' : ''}
              >
                Kosten
              </NavLink>
            </li>
          </ul>
        </div>
  
        <div className="flex items-center justify-between gap-4">
          <button className="bg-transparent border border-black md:px-4 md:py-2 px-4 py-2 text-xs rounded-full font-bold">
            Anmelden
          </button>
          <button className="flex items-center space-x-2 bg-black border border-white text-white font-bold md:px-4 md:py-2 px-4 py-2 text-xs rounded-full">
            <span>Demoanfragen</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    );
};

export default Navbar;