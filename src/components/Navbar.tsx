import React from "react";
import logo from "../assets/logo.png";
import coin from "../assets/coin.png";

const Navbar = React.forwardRef<HTMLDivElement>((_, ref) => (
  <nav
    ref={ref}
    className="fixed top-0 left-0 w-full bg-neutral-50 shadow-md z-50"
  >
    <div className="flex items-center justify-between w-full px-8 py-4">
      {/* Blog Button */}
      <button className="bg-lime-400 text-black font-bold px-6 py-3 rounded-xl text-lg whitespace-nowrap">
        Blog
      </button>
      {/* Donate Bangladesh Section */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Hand dropping coin into pot icon"
          className="object-contain"
        />
        <span className="font-bold text-gray-800 text-xl whitespace-nowrap">
          Donate Bangladesh
        </span>
      </div>
      {/* 5500 BDT Section */}
      <div className="flex items-center gap-2">
        <img src={coin} alt="Coin icon" className="object-contain" />
        <span className="font-bold text-gray-800 text-xl whitespace-nowrap">
          5500 BDT
        </span>
      </div>
    </div>
  </nav>
));

export default Navbar;
