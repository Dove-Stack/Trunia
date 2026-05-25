

import React, { useState } from "react";
import { Icon } from "@iconify/react";

const SideBySide = () => {
  const [activeTab, setActiveTab] = useState("trunia");

  return (
    <div className="flex items-center justify-center px-4 py-12 sm:py-20 mt-12 sm:mt-20 flex-col gap-6 sm:gap-8 w-full max-w-[800px] mx-auto font-sans">
      {/* Header Section */}
      <div className="text-center flex flex-col gap-2 sm:gap-3">
        <h3 className="text-xs sm:text-sm font-medium tracking-tight text-brand-gradient uppercase">
          Side by Side
        </h3>
        <h2 className="text-[#1a1f3d] text-2xl sm:text-3xl font-bold">
          See the difference
        </h2>
        <p className="text-sm sm:text-base text-slate-500">
          Same question. Completely different answers.
        </p>
      </div>

      {/* Pill Toggle Switch */}
      <div className="bg-slate-100/50 p-1 sm:p-1.5 rounded-xl flex items-center gap-1 border border-slate-100 w-full max-w-xs sm:w-auto">
        <button
          onClick={() => setActiveTab("other")}
          className={`flex-1 sm:flex-none px-6 sm:px-8 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === "other"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
          Other AI
        </button>
        <button
          onClick={() => setActiveTab("trunia")}
          className={`flex-1 sm:flex-none px-6 sm:px-8 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === "trunia"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-400 hover:text-slate-600"
          }`}
        >
          Trunia
        </button>
      </div>

      {/* Content Container */}
      <div className="w-full flex flex-col gap-4">
        {/* Shared Question Box */}
        <div
          className={`p-4 px-5 sm:px-7 rounded-xl transition-colors duration-300 ${
            activeTab === "trunia" ? "bg-mockup-user" : "bg-[#f2f4f7]"
          }`}
        >
          <p className="text-brand-navy text-xs font-normal mb-1">Question:</p>
          <p className="text-brand-navy text-sm font-medium leading-relaxed">
            "What is the projected growth rate mentioned in the report?"
          </p>
        </div>

        {/* Conditional Response Box */}
        <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-100 shadow-xs flex flex-col justify-between min-h-[220px] sm:min-h-[200px] gap-4">
          <div>
            <p
              className={`text-xs font-bold uppercase mb-3 ${
                activeTab === "trunia" ? "text-brand-navy" : "text-red-400"
              }`}
            >
              {activeTab === "trunia" ? "Trunia Response" : "Other AI Response"}
            </p>
            <p className="text-slate-text text-xs sm:text-[13px] leading-relaxed">
              {activeTab === "trunia"
                ? ' "The report projects a growth rate of 3.8% for the fiscal year 2025, as stated in the executive summary."'
                : ' "The projected growth rate is approximately 4.2% annually, which is consistent with global trends in the sector. According to various industry reports, this figure aligns with expectations from the World Economic Forum and McKinsey projections."'}
            </p>
          </div>

          {/* Footer Status Box */}
          <div className="w-full">
            {activeTab === "trunia" ? (
              <div className="bg-brand-navy text-white px-4 py-2.5 rounded-lg flex items-center gap-3">
                <Icon icon="ph:file-text" width="18" className="shrink-0" />
                <p className="text-[11px] sm:text-xs font-light tracking-wide">
                  Source: Executive Summary, Page 3, Paragraph 2
                </p>
              </div>
            ) : (
              <div className="bg-red-50 border border-red-100 px-4 py-2.5 rounded-lg flex items-start gap-2.5">
                <Icon
                  icon="ph:warning-circle"
                  className="text-red-500 mt-0.5 shrink-0"
                  width="16"
                />
                <p className="text-[11px] sm:text-xs text-red-500 font-medium leading-tight">
                  Mixes document data with external knowledge. "4.2%" may be
                  fabricated. Sources unverifiable.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBySide;