import { Icon } from "@iconify/react";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { stepsData } from "../../assets/assets";
import { Link } from "react-router-dom";

const Step = () => {
  const [file, setFile] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState(null);
  const responseContainerRef = useRef(null);

  const API_BASE_URL = "/api";

  const handleFileUpload = async (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;
    setFile(uploadedFile);
    setError(null);
    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      const response = await axios.post(`${API_BASE_URL}/upload`, formData);
      setUploadedFileName(response.data.filename);
      setResponses([]);
    } catch (err) {
      setError(`Upload failed: ${err.response?.data?.message || err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateResponse = async (e) => {
    e.preventDefault();
    if (!userQuestion.trim() || !uploadedFileName) return;

    setError(null);
    setIsLoading(true);
    const formData = new FormData();
    formData.append("user_prompt", userQuestion);

    try {
      const response = await axios.post(`${API_BASE_URL}/generate`, formData);
      setResponses([
        ...responses,
        { question: userQuestion, answer: response.data },
      ]);
      setUserQuestion("");
      setTimeout(
        () =>
          responseContainerRef.current?.scrollIntoView({
            behavior: "smooth",
          }),
        100,
      );
    } catch (err) {
      setError(`Error: ${err.response?.data?.error || err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to waitlist section
  const scrollToWaitlist = () => {
    const waitlistElement = document.getElementById("waitlist");
    if (waitlistElement) {
      waitlistElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="w-full py-8 sm:py-15 px-4 sm:px-6 bg-page-gradient"
      id="steps"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center mb-8">
        <div className="flex flex-col items-center justify-center gap-3 max-w-2xl text-center mb-10 sm:mb-16">
          <h3 className="text-sm sm:text-base md:text-xl font-medium tracking-tight text-brand-gradient uppercase">
            HOW IT WORKS
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-brand-navy">
            From Documents to Insights in 3 Simple Steps
          </h2>
          <p className="text-sm sm:text-base text-slate-text leading-relaxed">
            Trunia makes document analysis effortless. Just upload, ask, and
            discover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-12 sm:mb-16">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl bg-white/50 shadow-card transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100 cursor-pointer"
            >
              <div
                className={`inline-flex p-3 rounded-xl mb-5 sm:mb-6 ${step.bgColor}`}
              >
                <Icon
                  icon={step.icon}
                  className={`w-6 h-6 ${step.iconColor}`}
                />
              </div>
              <p className="text-sm font-semibold text-brand-navy mb-2 sm:mb-3">
                {step.title}
              </p>
              <span className="text-xs text-slate-text leading-relaxed block">
                {step.description}
              </span>
            </div>
          ))}
        </div>

        {/* Updated button with scroll handler */}
        <Link to="/waitlist">
          <button
            className="w-full sm:w-auto bg-brand-navy hover:bg-opacity-90 transition-colors text-white px-6 py-3 sm:py-3 rounded-lg font-normal inline-flex items-center justify-center gap-2 cursor-pointer text-sm"
            onClick={scrollToWaitlist}
          >
            Be The First to Try Trunia
            <Icon icon="heroicons:arrow-long-right" className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Step;
