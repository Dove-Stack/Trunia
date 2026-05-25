
import { Icon } from "@iconify/react";
import { Logo } from "../../assets/assets";

const Hero = () => {
  return (
    <div className="bg-page-gradient">
      {/* Top Header Section */}
      <header className="pt-12 sm:pt-16 pb-7 px-4 text-center relative overflow-hidden">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 p-2 sm:p-3 bg-linear-to-b from-brand-navy to-brand-blue bg-clip-text text-transparent">
          Your documents are its only truth
        </h1>
        <p className="max-w-xl mx-auto text-sm sm:text-md text-dull-text mb-8 sm:mb-10 leading-relaxed px-2">
          Upload any document or text and let Trunia's advanced AI analyze,
          summarize, and answer your questions instantly. Research made simple.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mb-2 px-4 sm:px-0">
          <button className="bg-brand-navy w-full sm:w-auto justify-center inline-flex items-center py-3 px-8 text-sm text-white rounded-md cursor-pointer transition-colors hover:bg-brand-navy/90">
            <Icon
              icon="heroicons-outline:cloud-download"
              className="w-5 h-5 mr-2"
            />
            Start Analyzing Now
          </button>
          <button className="bg-white w-full sm:w-auto justify-center inline-flex items-center py-3 px-8 rounded-md text-sm text-dull-text outline outline-1 outline-dull-text cursor-pointer transition-colors hover:bg-gray-50">
            <Icon icon="octicon:play-16" className="w-5 h-5 mr-2" />
            Watch Demo
          </button>
        </div>
      </header>

      {/* Mockup Window Container */}
      <div className="relative w-full max-w-4xl mx-auto px-4 pb-12 sm:pb-20">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
          {/* Mockup Header Row */}
          <div className="bg-gray-50/50 border-b border-gray-100 px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-5">
              {/* Mac window controls */}
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="text-[10px] sm:text-xs font-regular text-slate-700 tracking-wide truncate uppercase">
                CHIMA REPORT.PDF
              </div>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-brand-navy  uppercase pl-2">
              TRUNIA
            </div>
          </div>

          {/* Chat Interface Workspace */}
          <div className="p-4 sm:p-6 md:p-10 flex flex-col gap-6 bg-white min-h-[350px]">
            {/* User Query Block */}
            <div className="flex items-center gap-3 justify-end self-end max-w-[90%] sm:max-w-[75%]">
              <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Icon
                  icon="icon-park-outline:user"
                  className="w-4 h-4 text-brand-navy"
                />
              </div>
              <div className="bg-[#F0F4FF]  px-4 py-3 rounded-2xl ">
                <p className="text-slate-700 text-[12px] sm:text-sm leading-relaxed">
                  Can you summarize the key findings from this research paper?
                </p>
              </div>
            </div>

            {/* AI Response Block */}
            <div className="flex items-start gap-3 sm:gap-4 max-w-[95%] sm:max-w-[85%]">
              {/* Custom Document Style App Logo Icon */}
              <div className="shrink-0 w-7 h-7 rounded-xl bg-indigo-950 flex items-center justify-center shadow-2xs">
                <img src={Logo} alt="" />
              </div>

              {/* AI Bubble content */}
              <div className="bg-white border border-gray-100 shadow-xs rounded-2xl p-4 sm:p-5 text-[12px] sm:text-sm text-slate-700 flex flex-col gap-1.5">
                <p className="font-regular text-[13px]">
                  Based on the document provided, here are the 5 key findings:
                </p>
                <ol className="space-y-1 text-slate-600 font-normal text-xs">
                  <li>1. AI adoption increased by 47% in 2024</li>
                  <li>2. Cost reduction was the primary driver...</li>
                </ol>

                {/* Citation Badge */}
                <div className="mt-2 self-start">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] sm:text-xs bg-white border border-gray-200 rounded-lg text-slate-500 shadow-2xs">
                    <Icon
                      icon="mi:document"
                      className="w-3.5 h-3.5 text-slate-400 shrink-0"
                    />
                    <span className="font-normal text-[10px]">
                      Page 1, section 1.1, Page 3, Paragraph 2
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Unified Input Console Component */}
          <div className="p-4 sm:p-6 bg-white">
            <div className="border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col gap-4 bg-white">
              {/* Floating Suggestion Tags */}
              <div className="flex flex-wrap gap-2">
                {["Summarize", "Key Points", "Statistics"].map((pill) => (
                  <div>
                    <button
                      key={pill}
                      disabled
                      className="px-3 py-1.5 text-[10px] bg-mockup-user border border-slate-200 rounded-lg font-normal cursor-not-allowed"
                    >
                      {pill}
                    </button>
                  </div>
                ))}
              </div>
              <hr className=" border-none h-px bg-slate-100/90" />

              {/* Core Text Input Control Row */}
              <div className="flex items-center justify-between gap-4 pt-1">
                <input
                  disabled
                  type="text"
                  placeholder="Ask anything about this document..."
                  className="w-full text-xs sm:text-sm text-slate-700 placeholder-slate-400 placeholder:text-xs focus:outline-none bg-transparent cursor-not-allowed"
                />
                <button
                  disabled
                  className="w-9 h-9 rounded-xl bg-slate-500/80 text-white flex items-center justify-center cursor-not-allowed shrink-0"
                >
                  <Icon icon="ph:paper-plane-tilt-fill" className="w-4 h-4" />
                </button>
              </div>

              {/* Footer Source Context Disclaimer */}
              <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-slate-400 mt-1 font-normal">
                <span>Answers cite only to CHIMA REPORT.PDF</span>
                <Icon
                  icon="mi:document"
                  className="w-3.5 h-3.5 text-slate-400 shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
