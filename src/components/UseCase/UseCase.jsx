// import React from "react";
// import { useCasedata } from "../../assets/assets";
// import { useState } from "react";
// import { Icon } from "@iconify/react";

// const UseCase = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="flex flex-col items-center justify-center mt-7 mb-10 gap-4">
//       <div>
//         <h1 className="text-base font-medium tracking-tight mt-1.5 mb-2 text-center text-brand-gradient">
//           PERFECT FOR EVERY USE CASE
//         </h1>
//       </div>

//       {/* Added flex-wrap and justify-center so buttons don't overflow on mobile */}
//       <div className="flex flex-wrap justify-center gap-4 px-4">
//         {useCasedata.map((usecase, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`px-4 py-2 rounded-md text-xs transition-all duration-200 cursor-pointer ${
//               activeIndex === index
//                 ? "bg-brand-navy text-white"
//                 : "bg-mockup-bg text-dull-text"
//             }`}
//           >
//             {usecase.title}
//           </button>
//         ))}
//       </div>

//       {/* Made width responsive: 91% on mobile, 75% on tablets, 47% on desktops */}
//       <div className="bg-page-gradient flex items-center justify-center flex-col w-11/12 md:w-3/4 lg:w-[47%] rounded-xl py-6 md:py-8 px-4 md:px-7 gap-2.5 mt-5 mb-5 mx-auto">
//         <h3 className="text-lg font-semibold tracking-tight mb-1 mt-1 text-center text-brand-navy">
//           For {useCasedata[activeIndex].title}
//         </h3>

//         {/* Adjusted padding to be smaller on mobile and px-16 only on large screens */}
//         <p className="text-center text-sm font-normal text-slate-text leading-5 px-2 md:px-8 lg:px-16">
//           {useCasedata[activeIndex].description}
//         </p>

//         <ul className="space-y-2 mt-2">
//           {useCasedata[activeIndex].features.map((feature) => (
//             <li
//               key={feature.id}
//               className="flex items-start md:items-center gap-2"
//             >
//               <Icon
//                 icon="iconoir:check"
//                 className="text-green-700 mt-1 md:mt-0 flex-shrink-0"
//               />
//               <span className="text-sm font-normal text-left md:text-center text-slate-text leading-6">
//                 {feature.text}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default UseCase;
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const useCasedata = [
  {
    title: "Students",
    icon: "ph:student",
    punchline: "Study smarter, not harder",
    features: [
      "Summarize lengthy research papers",
      "Extract key arguments and citations",
      "Generate study notes automatically",
    ],
  },
  {
    title: "Researchers",
    icon: "ph:flask",
    punchline: "Precision at speed",
    features: [
      "Compare multiple research papers",
      "Maintain strict source integrity in reviews",
      "Extract methodologies and findings",
    ],
  },
  {
    title: "Professionals",
    icon: "ph:briefcase",
    punchline: "Work with confidence",
    features: [
      "Analyze contracts and legal documents",
      "Get answers traceable to specific clauses",
      "Summarize meeting notes instantly",
    ],
  },
];

const UseCase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="flex flex-col items-center justify-center mt-12 sm:mt-16 mb-10 px-4 gap-6 sm:gap-8 w-full max-w-7xl mx-auto"
      id="usecase"
    >
      {/* Header */}
      <h3 className="text-xs sm:text-sm font-semibold text-brand-gradient uppercase text-center tracking-wider">
        Perfect for every use case
      </h3>

      {/* Responsive Pill Switcher Grid */}
      <div className="bg-slate-100/50 p-1 sm:p-1.5 rounded-xl grid grid-cols-3 sm:flex items-center gap-1 sm:gap-2 border border-slate-100 w-full max-w-md sm:w-auto">
        {useCasedata.map((usecase, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 px-2 sm:px-5 py-2.5 sm:py-2 rounded-lg text-[11px] sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
              activeIndex === index
                ? "bg-white text-[#1a1f3d] shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Icon
              icon={usecase.icon}
              width="16"
              className="sm:w-[18px] shrink-0"
            />
            <span className="truncate">{usecase.title}</span>
          </button>
        ))}
      </div>

      {/* Main Content Card */}
      <div className="bg-[#f8faff] flex items-center justify-center flex-col w-full max-w-[570px] rounded-2xl py-6 sm:py-8 px-5 sm:px-8 gap-5 border border-slate-50 shadow-xs">
        {/* Navy Icon Box */}
        <div className="bg-brand-navy w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-md">
          <Icon
            icon={useCasedata[activeIndex].icon}
            className="text-white w-5 sm:w-6 h-5 sm:h-6"
          />
        </div>

        {/* Content */}
        <div className="text-center flex flex-col gap-4 sm:gap-5 w-full">
          <h2 className="text-brand-navy font-bold text-base sm:text-lg tracking-tight">
            {useCasedata[activeIndex].punchline}
          </h2>

          <ul className="flex flex-col items-start gap-3 w-full max-w-xs sm:max-w-md mx-auto pl-2">
            {useCasedata[activeIndex].features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-left">
                <Icon
                  icon="ph:check"
                  className="text-green-500 shrink-0 mt-0.5"
                  width="16"
                />
                <span className="text-xs sm:text-sm font-normal text-slate-text leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseCase;