import React from "react";
import logo from "../assets/logo.png";
import coin from "../assets/coin.png";

interface NavbarProps {
  balance: number;
}

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ balance }, ref) => (
    <nav
      ref={ref}
      className="fixed top-0 left-0 w-full bg-neutral-50 shadow-md z-50"
    >
      <div className="flex items-center justify-between w-full px-8 py-4">
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
        {/* Account Balance Section */}
        <div className="flex items-center gap-2">
          <img src={coin} alt="Coin icon" className="object-contain" />
          <span className="font-bold text-gray-800 text-xl whitespace-nowrap">
            {balance} BDT
          </span>
        </div>
      </div>
    </nav>
  ),
);

export default Navbar;
