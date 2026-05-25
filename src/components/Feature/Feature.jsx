import { Icon } from "@iconify/react";
import React from "react";
import { featuresData } from "../../assets/assets";

const Feature = () => {
  return (
    <section className="w-full px-4 py-12 sm:py-20" id="feature">
      <div className="max-w-6xl mx-auto flex flex-col gap-1 items-center justify-center">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-3 text-center mb-10 sm:mb-14">
          <h3 className="text-sm sm:text-base md:text-xl font-semibold tracking-wider text-brand-gradient uppercase">
            FEATURES
          </h3>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-brand-navy max-w-2xl px-2">
            Everything You Need for Smarter Research
          </h2>
          {/* Changed w-4/6 to a max-width for better mobile readability */}
          <p className="text-xs sm:text-base text-slate-text max-w-xl mx-auto px-4">
            Trunia combines powerful AI technology with an intuitive interface
            to transform how you work with documents.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full cursor-pointer">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`inline-flex p-3 rounded-xl mb-5 sm:mb-6 ${feature.bgColor}`}
              >
                <Icon
                  icon={feature.icon}
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.iconColor}`}
                />
              </div>

              <h4 className="text-lg font-bold text-brand-navy mb-2 sm:mb-3">
                {feature.title}
              </h4>

              <p className="text-sm text-slate-text leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
