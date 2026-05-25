// import React from "react";
// import { useState } from "react";
// import { footerData } from "../../assets/assets";
// import { Icon } from "@iconify/react";

// const Footer = () => {
//   return (
//     <footer className="bg-footer-bg px-8 md:px-14 py-12 mt-10">
//       <div className="grid md:grid-cols-4 gap-10">
//         {footerData.map((footer, index) => (
//           <div key={index}>
//             <h3 className="text-white font-semibold mb-3">{footer.title}</h3>
//             {footer.text && (
//               <div className="flex flex-col">
//                 <p className="text-footer-text text-xs ">{footer.text}</p>
//                 <div className="flex mt-6 gap-1">
//                   <div className="bg-footer-icon text-hr-color rounded-md p-2 cursor-pointer">
//                     <Icon icon="prime:twitter"></Icon>
//                   </div>
//                   <div className="bg-footer-icon text-hr-color rounded-md p-2 ml-1.5 cursor-pointer">
//                     <Icon icon="radix-icons:linkedin-logo"></Icon>
//                   </div>
//                   <div className="bg-footer-icon text-hr-color rounded-md p-2 ml-1.5 cursor-pointer">
//                     <Icon icon="ant-design:github-filled"></Icon>
//                   </div>
//                   <div className="bg-footer-icon text-hr-color rounded-md p-2 ml-1.5 cursor-pointer">
//                     <Icon icon="uil:youtube"></Icon>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {footer.subFeatures && (
//               <ul className="space-y-2">
//                 {footer.subFeatures.map((item) => (
//                   <li
//                     key={item.id}
//                     className="text-footer-text font-normal text-xs hover:text-white cursor-pointer transition-colors duration-200"
//                   >
//                     {item.text}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="border-t border-gray-700 mt-12 pt-6 text-start text-footer-text text-xs">
//         © {new Date().getFullYear()} Cognita. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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