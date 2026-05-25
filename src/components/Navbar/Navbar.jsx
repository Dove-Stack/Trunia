/* import { Icon } from "@iconify/react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className="flex items-center gap-2">
          <div className="bg-linear-to-b from-brand-navy to-brand-blue p-2 rounded-lg text-white">
            <Icon icon="mage:light-bulb" className="w-6 h-6" />
          </div>
          <span className="bg-linear-to-r from-brand-navy to-brand-blue bg-clip-text text-transparent text-xl font-bold tracking-tight">
            Trunia
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-dull-text">
          <a href="#" className="hover:text-brand-navy transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-brand-navy transition-colors">
            How It Works
          </a>
          <a href="#" className="hover:text-brand-navy transition-colors">
            Demo
          </a>
          <a href="#" className="hover:text-brand-navy transition-colors">
            Testimonials
          </a>

          <div className="flex gap-3.5">
            <button className="text-brand-navy border border-brand-navy px-8 py-2 text-xs rounded font-semibold hover:scale-105 transition-transform">
              Login
            </button>
            <button className="bg-brand-navy text-white px-5 py-2 text-xs rounded font-semibold hover:scale-105 transition-transform">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Logo } from "../../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Scroll to waitlist section
  // const scrollToWaitlist = () => {
  //   const waitlistElement = document.getElementById("waitlist");
  //   if (waitlistElement) {
  //     waitlistElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={Logo} className="w-8 h-8" alt="" />
            <span className="text-lg sm:text-xl font-bold tracking-tight bg-linear-to-r from-brand-navy to-brand-blue bg-clip-text text-transparent">
              Trunia
            </span>
          </div>

          <div className="hidden md:flex md:items-center md:gap-8">
            <div className="flex items-center gap-6 font-medium text-dull-text">
              <a
                href="#feature"
                className="hover:text-brand-navy transition-colors text-xs"
              >
                Features
              </a>
              <a
                href="#steps"
                className="hover:text-brand-navy transition-colors text-xs"
              >
                How It Works
              </a>
              <a
                href="#usecase"
                className="hover:text-brand-navy transition-colors text-xs"
              >
                Use Cases
              </a>
            </div>

            <div className="flex gap-3.5 ml-4">
              <Link to="/waitlist">
                <button className="bg-brand-navy text-white px-3 sm:px-5 py-2 text-xs sm:text-sm rounded font-medium transition-all cursor-pointer">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-navy"
            >
              {open ? (
                <Icon icon="mdi:close" className="w-6 h-6" />
              ) : (
                <Icon icon="mdi:menu" className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="pt-4 pb-6 space-y-4">
            <div className="flex flex-col gap-3 px-2">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-dull-text hover:text-brand-navy hover:bg-gray-50 transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-dull-text hover:text-brand-navy hover:bg-gray-50 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-dull-text hover:text-brand-navy hover:bg-gray-50 transition-colors"
              >
                Demo
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-dull-text hover:text-brand-navy hover:bg-gray-50 transition-colors"
              >
                Testimonials
              </a>
            </div>

            <div className="px-3 flex flex-col gap-3">
              <button className="w-full text-brand-navy border border-brand-navy px-4 py-2 text-sm rounded font-semibold hover:scale-105 transition-transform">
                Login
              </button>
              <Link to="/waitlist">
                {" "}
                <button className="w-full bg-brand-navy text-white px-4 py-2 text-sm rounded font-semibold hover:scale-105 transition-transform">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
