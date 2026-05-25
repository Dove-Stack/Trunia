import React from "react";
import { counterData } from "../../assets/assets";

const Counter = () => {
  return (
    <div
      className="
      flex flex-col
      sm:flex-row sm:flex-wrap
      items-center justify-center
      gap-8 sm:gap-16 lg:gap-40
      mt-10 mb-10
    "
    >
      {counterData.map((counter, index) => (
        <div key={index} className="flex flex-col gap-1 text-center min-w-30">
          <h3 className="text-2xl sm:text-3xl font-medium text-brand-navy mb-0.5">
            {counter.feat}
          </h3>
          <p className="text-xs sm:text-xs text-slate-text">
            {counter.context}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
