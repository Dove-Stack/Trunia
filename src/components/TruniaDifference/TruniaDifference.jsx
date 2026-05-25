// import React from "react";
// import { Icon } from "@iconify/react";

// const TruniaDifference = () => {
//   const others = [
//     "Pulls from the entire internet",
//     "May hallucinate facts and sources",
//     "Hard to verify any claim",
//     "Mixes real data with fabrication",
//   ];

//   const trunia = [
//     "Only uses your uploaded documents",
//     "Zero hallucination by design",
//     "Every answer traceable to source",
//     "Strict fidelity to your data",
//   ];

//   return (
//     <div className="flex items-center justify-center p-6 mt-20 flex-col gap-10 mx-auto">
//       {/* Header Section */}
//       <div className="text-center flex flex-col gap-3">
//         <h3 className="text-sm font-semibold tracking-wider text-brand-gradient uppercase">
//           The Difference
//         </h3>
//         <h2 className="text-brand-navy text-2xl font-bold ">
//           How Trunia is different
//         </h2>
//         <p className="text-base max-w-xl text-center leading-relaxed text-dull-text mx-auto">
//           Limitation is our feature. By refusing to go beyond your documents, we
//           guarantee every answer is real.
//         </p>
//       </div>

//       {/* Comparison Container */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8  items-stretch">
//         {/* Others Card */}
//         <div className="bg-white p-10 rounded-lg shadow-sm flex flex-col gap-6 border border-slate-100">
//           <h4 className="text-slate-text font-bold tracking-widest text-sm uppercase">
//             Other AI Tools
//           </h4>
//           <ul className="flex flex-col gap-5">
//             {others.map((item, i) => (
//               <li key={i} className="flex items-center gap-3 text-slate-600">
//                 <div className="bg-red-50 p-1 rounded-full">
//                   <Icon icon="ph:x" className="text-red-400" width="16" />
//                 </div>
//                 <span className="text-sm font-normal">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Trunia Card */}
//         <div className="relative bg-[#f0fdfa] p-10 flex flex-col gap-6 border-2 border-[#00a191]">
//           {/* Top Badge */}
//           <div className="absolute -top-4 left-8 bg-[#00a191] text-white px-4 py-1 rounded-md text-xs font-bold tracking-widest uppercase">
//             Trunia
//           </div>

//           <h4 className="text-slate-text font-bold tracking-widest text-md uppercase">
//             Trunia
//           </h4>
//           <ul className="flex flex-col gap-5">
//             {trunia.map((item, i) => (
//               <li key={i} className="flex items-center gap-3 text-slate-700">
//                 <Icon icon="ph:check" className="text-[#00a191]" width="20" />
//                 <span className="text-sm text-dull-text font-normal">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TruniaDifference;

import React from "react";
import { Icon } from "@iconify/react";

const TruniaDifference = () => {
  const others = [
    "Pulls from the entire internet",
    "May hallucinate facts and sources",
    "Hard to verify any claim",
    "Mixes real data with fabrication",
  ];

  const trunia = [
    "Only uses your uploaded documents",
    "Zero hallucination by design",
    "Every answer traceable to source",
    "Strict fidelity to your data",
  ];

  return (
    <div className="flex items-center justify-center px-3 py-30 mt-20 flex-col gap-10 w-full bg-page-gradient">
      {/* Header Section */}
      <div className="text-center flex flex-col gap-3">
        <h3 className="text-sm   font-semibold  text-brand-gradient uppercase">
          The Difference
        </h3>
        <h2 className="text-[#1a1f3d] text-2xl  font-bold">
          How Trunia is different
        </h2>
        <p className="text-base max-w-xl text-center leading-relaxed text-slate-500 mx-auto">
          Limitation is our feature. By refusing to go beyond your documents, we
          guarantee every answer is real.
        </p>
      </div>

      {/* 
          ADJUSTABLE COMPARISON CONTAINER 
          Change 'max-w-[950px]' to any px or % value to fine-tune the width
      */}
      <div className="w-full max-w-[950px] grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mx-auto">
        {/* Others Card */}
        <div className="bg-white p-8 rounded-2xl shadow-xs flex flex-col gap-4 border border-slate-100 cursor-pointer">
          <h4 className="text-slate-text font-bold text-base uppercase">
            Other AI Tools
          </h4>
          <ul className="flex flex-col gap-4">
            {others.map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-600">
                <div className="bg-red-50 p-1.5 rounded-full flex items-center justify-center">
                  <Icon icon="ph:x" className="text-red-400" width="14" />
                </div>
                <span className="text-[15px] font-normal">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Trunia Card */}
        <div className="relative bg-[#f0fdfa] p-9 rounded-2xl flex flex-col gap-4 border border-[#00a191] cursor-pointer">
          {/* Top Badge */}
          <div className="absolute -top-4 left-8 bg-[#00a191] text-white px-5 py-1.5 rounded-lg text-sm font-bold  uppercase">
            Trunia
          </div>

          <h4 className="text-slate-text font-bold text-base uppercase">
            Trunia
          </h4>
          <ul className="flex flex-col gap-4">
            {trunia.map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-700">
                <Icon icon="ph:check" className="text-[#00a191]" width="22" />
                <span className="text-[15px] font-normal text-slate-600">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TruniaDifference;