import { Icon } from "@iconify/react";
import React from "react";
import { testimonialData } from "../../assets/assets";

const Testimonials = () => {
  return (
    <div className="mb-15" id="testimonials">
      <div className="flex flex-col gap-1 mt-10 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <h3 className="text-xl font-medium tracking-tight mb-1 text-center text-brand-gradient">
            TESTIMONALS
          </h3>
          <h2 className="text-4xl font-semibold tracking-tight text-center text-brand-navy">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-sm w-4/6 text-center text-slate-text">
            Join thousands of researchers, students and professionals who are
            transforming their document workflow with Trunia.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 p-8">
        {testimonialData.map((testimony, index) => (
          <div
            key={index}
            className="group p-8 rounded-2xl bg-white/50 shadow-card transition-all duration-300
                       w-full sm:w-[90%] md:w-[45%] lg:w-[30%]"
          >
            <div className="flex">
              <Icon
                icon="heroicons:star-solid"
                className="text-amber-400 mr-1 mb-3"
              ></Icon>
              <Icon
                icon="heroicons:star-solid"
                className="text-amber-400 mr-1 mb-3"
              ></Icon>
              <Icon
                icon="heroicons:star-solid"
                className="text-amber-400 mr-1 mb-3"
              ></Icon>
              <Icon
                icon="heroicons:star-solid"
                className="text-amber-400 mr-1 mb-3"
              ></Icon>
              <Icon
                icon="heroicons:star-solid"
                className="text-amber-400 mr-1 mb-3"
              ></Icon>
            </div>
            <p className="text-xs w-11/12 text-brand-navy mb-3">
              "{testimony.description}"
            </p>

            <hr className="my-1 border-none h-px bg-slate-100/90" />

            <div className="flex items-center gap-2 mt-3">
              <span
                className={`${testimony.bgColor} rounded-full ${testimony.iconColor} text-sm px-3 py-2`}
              >
                {testimony.initials}
              </span>

              <div>
                <p className="text-xs font-medium text-slate-text">
                  {testimony.userName}
                </p>
                <p className="text-xs text-slate-text">{testimony.title}</p>
                <p className="text-xs font-medium text-brand-navy">
                  {testimony.instituition}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
