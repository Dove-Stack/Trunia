import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";

const Demo = () => {
  const [file, setFile] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState(null);
  const responseContainerRef = useRef(null);

  // Handle file selection
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploadedFileName(e.target.files[0].name);
      // Simulate loading or processing here
    }
  };

  return (
    <section className="py-11 sm:py-19 bg-white" id="demo">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-3 mb-10 sm:mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-navy text-[10px] sm:text-xs font-bold uppercase tracking-wide">
            <Icon
              icon="heroicons:beaker-solid"
              className="w-3 h-3 sm:w-4 sm:h-4"
            />
            Interactive Demo
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy">
            See Trunia in Action
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-lg leading-relaxed">
            Try uploading a document right here and experience the power of
            AI-driven analysis instantly.
          </p>
        </div>

        {/* Upload Card */}
        <div className="w-full bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 p-4 sm:p-8">
          <div className="relative group w-full">
            {/* Hidden Input that covers the whole area for easier clicking/tapping */}
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
              accept=".pdf,.docx,.txt"
            />

            {/* Visual Drop Zone */}
            <div
              className="
              relative z-10
              border border-dashed border-gray-200 
              group-hover:border-brand-navy/50 group-hover:bg-blue-50/30
              rounded-2xl
              px-6 py-12 sm:px-16 sm:py-16
              text-center
              transition-all duration-300 ease-out
              flex flex-col items-center justify-center
            "
            >
              {/* Animated Icon Container */}
              <div
                className="
                w-10 h-10 sm:w-11 sm:h-11 
                bg-sky-50 
                rounded
                flex items-center justify-center 
                mb-6 
                group-hover:scale-110 group-hover:rotate-3 
                transition-transform duration-300
                shadow-sm
              "
              >
                <Icon
                  icon="akar-icons:cloud-upload"
                  className="w-4 h-4 sm:w-6 sm:h-6 text-brand-navy"
                />
              </div>

              {/* Dynamic Text for Mobile vs Desktop */}
              <h3 className="text-xs sm:text-sm  text-slate-text mb-2">
                <span className="hidden sm:inline">
                  Drop your document here, or click to browse{" "}
                </span>
                <span className="sm:hidden">Tap to upload file</span>
              </h3>

              <div
                className="
                bg-brand-navy text-white 
                px-7 py-2 
                rounded
                text-sm sm:text-base 
                inline-flex items-center gap-2
                group-hover:-translate-y-1 transition-transform duration-300
                mb-5 mt-4
              "
              >
                <span>{uploadedFileName ? "Change File" : "Choose File"}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-text  mb-8 max-w-xs mx-auto">
                Supports DOCX., Word, TXT (Max 10MB)
              </p>

              {/* Filename Feedback */}
              {uploadedFileName && (
                <div className="mt-6 flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg text-sm font-medium animate-fade-in">
                  <Icon
                    icon="heroicons:check-circle-20-solid"
                    className="w-5 h-5"
                  />
                  {uploadedFileName}
                </div>
              )}
            </div>
          </div>

          {/* Security Footer */}
          {/* <div className="mt-4 text-center">
            <p className="text-[10px] sm:text-xs text-gray-400 flex items-center justify-center gap-1.5">
              <Icon icon="heroicons:lock-closed-solid" className="w-3 h-3" />
              Files are processed securely and deleted after analysis.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Demo;
