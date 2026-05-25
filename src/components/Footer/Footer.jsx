import React from "react";
import { Logo } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#f8faff] px-6 md:px-16 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 border-t border-slate-100 font-sans text-center md:text-left">
      {/* Logo Section */}
      <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
        <img src={Logo} className="w-6 h-6 sm:w-7 sm:h-7" alt="Trunia Logo" />
        <span className="text-brand-navy font-bold text-[20px] sm:text-[22px] tracking-tight">
          Trunia
        </span>
      </div>

      {/* Copyright Text */}
      <div className="text-[#7a819c] text-[10px] sm:text-xs font-normal">
        © {new Date().getFullYear()} Trunia. AI that only knows what you give
        it.
      </div>
    </footer>
  );
};

export default Footer;