import React from "react";
import { Icon } from "@iconify/react";

const TruniaReason = () => {
  const features = [
    {
      icon: (
        <Icon
          icon="ph:warning"
          className="text-red-500"
          width="22"
          height="22"
        />
      ),
      title: "AI hallucinations are everywhere",
      description:
        "Large language models confidently fabricate facts, citations, and data. You can't tell what's real and what's invented.",
    },
    {
      icon: (
        <Icon
          icon="ph:shield-slash"
          className="text-red-500"
          width="22"
          height="22"
        />
      ),
      title: "Trust is broken",
      description:
        "When AI pulls from the entire internet, there's no way to verify where an answer came from or if the source even exists.",
    },
    {
      icon: (
        <Icon icon="ph:eye" className="text-red-500" width="22" height="22" />
      ),
      title: "Verification shouldn't be this hard",
      description:
        "Researchers, students, and professionals need answers they can cite. Not guesses dressed up as knowledge.",
    },
  ];

  return (
    <div className="flex items-center justify-center p-6 mt-16 flex-col gap-6 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center flex flex-col gap-3 items-center">
        <h3 className="text-sm  font-semibold tracking-wider text-brand-gradient uppercase">
          The Problem
        </h3>
        <h2 className="text-brand-navy text-3xl font-bold ">
          Why Trunia exists
        </h2>
        <p className="text-base md:w-[65%] text-center leading-relaxed text-slate-500">
          When precision matters, guessing isn’t enough. Trunia is engineered
          for absolute source fidelity, guaranteeing that every insight is
          directly traceable to your documents.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#f8faff] p-8 rounded-xl flex flex-col gap-3 border border-slate-50"
          >
            {/* Icon Container */}
            <div className="w-13 h-13 rounded-md bg-red-50 flex items-center justify-center">
              {feature.icon}
            </div>

            {/* Content */}
            <h4 className="text-brand-navy text-[20px] font-bold w-[90%]">
              {feature.title}
            </h4>
            <p className="text-dull-text text-sm leading-6 font-normal">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TruniaReason;
