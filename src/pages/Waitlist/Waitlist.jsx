import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Logo } from "../../assets/assets.js";
import { Link } from "react-router-dom";

const WaitlistPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const messages = [
    "Your documents are its only truth...",
    "AI that only knows what you give it...!",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  React.useEffect(() => {
    let charIndex = 0;

    const currentText = messages[messageIndex];

    setDisplayedText("");

    const typingInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 1800);
      }
    }, 70);

    return () => clearInterval(typingInterval);
  }, [messageIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      setIsSubmitted(true);
      setEmail("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-page-gradient font-sans text-slate-800 antialiased overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-5 flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Logo} className="w-8 h-8" alt="Trunia Logo" />
            <span className="text-brand-navy font-bold text-lg sm:text-xl">
              Trunia
            </span>
          </div>
        </Link>
      </nav>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-14 flex flex-col items-center">
        {/* AIRPLANE TRACKER */}
        <div className="w-full max-w-lg flex items-center justify-center gap-3 mb-8 text-slate-300">
          {/* <div className="h-px flex-1 border-t border-dashed border-slate-300" /> */}
          <svg
            width="96"
            height="8"
            viewBox="0 0 96 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="4.46375"
              cy="3.96778"
              rx="4.46375"
              ry="3.96778"
              fill="#3A3541"
              fill-opacity="0.9"
            />
            <path
              d="M95.2676 4.1049L8.92715 3.83065"
              stroke="#3A3541"
              stroke-opacity="0.9"
              stroke-width="1.32275"
              stroke-linecap="round"
            />
          </svg>


          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="rotate-90 w-6 h-6 sm:w-7 sm:h-7 text-dull-text/95 animate-bounce"
          >
            <path fill="none" d="M0 0h24v24H0z" />

            <path
              fill="currentColor"
              d="M7.712 21v-1.538l2.846-2.004v-4.331L3 16.173v-1.961l7.558-5.331V4.442q0-.594.424-1.018T12 3t1.018.424t.424 1.018v4.439L21 14.21v1.962l-7.558-3.046v4.33l2.827 2.005V21L12 19.692z"
            />
          </svg>

          <svg
            width="95"
            height="7"
            viewBox="0 0 95 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="90.5667"
              cy="3.22195"
              rx="3.6247"
              ry="3.22195"
              transform="rotate(180 90.5667 3.22195)"
              fill="#3A3541"
              fill-opacity="0.57"
            />
            <path
              d="M0.604492 3.14283L86.9417 3.30143"
              stroke="#3A3541"
              stroke-opacity="0.57"
              stroke-width="1.20823"
              stroke-linecap="round"
              stroke-dasharray="4.03 4.03"
            />
          </svg>
        </div>

        {/* HERO TEXT */}
        <h1 className="text-sm sm:text-xl lg:text-xl font-normal tracking-tight text-slate-700 text-center leading-tight mb-5">
          Answers are grounded in
          <br />
          <span className="text-transparent text-xl bg-clip-text bg-linear-to-r from-brand-navy to-brand-blue">
            your own documents
          </span>
        </h1>

        <p className="max-w-155 text-center text-xs sm:text-sm text-dull-text leading-relaxed mb-12 px-2">
          Trunia is a research assistant that never guesses. Upload a document
          or paste text and get cited, source-linked answers nothing more,
          nothing less.
        </p>

        {/* WAITLIST + TOOLTIP */}
        <div className="relative w-full flex justify-center items-center mb-20 px-4">
          {/* MAIN CARD */}
          <div className="w-full max-w-120 bg-white rounded-2xl border border-slate-100 shadow-sm px-5 sm:px-8 py-6 relative z-10">
            {/* ICON STACK */}
            <div className="flex items-center -space-x-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-yellow-400 text-white text-sm border-2 border-white flex items-center justify-center">
                P
              </div>

              <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm border-2 border-white flex items-center justify-center">
                B
              </div>

              <div className="w-8 h-8 rounded-full bg-mauve-700 text-white text-sm border-2 border-white flex items-center justify-center">
                R
              </div>

              <div className="w-8 h-8 rounded-full bg-slate-50 text-brand-navy text-[10px] border-2 border-white flex items-center justify-center font-semibold">
                10+
              </div>
            </div>

            <h2 className="text-lg font-medium text-slate-800 mb-1">
              Join the waitlist
            </h2>

            <p className="text-xs sm:text-sm text-dull-text mb-5">
              Sign up to be one of the first to test Trunia
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 bg-slate-50 border border-slate-100 rounded-md p-1 shadow-xs"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent outline-none px-3 text-sm placeholder:text-xs"
              />

              <button
                type="submit"
                className="bg-brand-navy hover:bg-brand-navy/90 text-white text-[11px] py-2 px-3 rounded-sm font-light transition-all cursor-pointer"
              >
                {isSubmitted ? "Added!" : "Get Notified"}
              </button>
            </form>

            <p className="text-[11px] text-slate-text mt-4 text-center flex items-center justify-center sm:text-left">
              No spam, one email when your invite is ready.
            </p>
          </div>

          {/* FLOATING SLANTED TOOLTIP */}
          <div
            className="
                hidden md:flex
                absolute
                right-[-5%]
                top-1/4
                -translate-y-1/2
                rotate-[-8deg]
                bg-white
                shadow-sm
                rounded-md
                px-9
                py-2
                items-center
                gap-4
                min-w-[320px]
                max-w-80
                transition-all
                duration-500
                hover:rotate-[-5deg]
                z-20
                cursor-pointer
                animate-bounce
                "
          >
            {/* TEXT */}
            <div className="overflow-hidden flex-1 relative h-5">
              <p className="text-xs text-slate-700 whitespace-nowrap flex">
                {displayedText.split("").map((char, index) => (
                  <span
                    key={index}
                    className="animate-[charFade_0.3s_ease_forwards]"
                    style={{
                      animationDelay: `${index * 0.01}s`,
                      opacity: 0,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}

                <span className="ml-0.5 animate-pulse"></span>
              </p>
            </div>

            {/* ICON */}
            <div className="w-6 h-6 rounded-full bg-brand-navy flex items-center justify-center shrink-0">
              <Icon icon="ph:arrow-up" className="text-white w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* CARD 1 */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center mb-5">
              <Icon icon="akar-icons:cloud-upload" className="w-5 h-5" />
            </div>

            <h3 className="text-sm font-semibold text-brand-navy mb-2">
              Upload Your Document
            </h3>

            <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed">
              Drag and drop any document or spreadsheet, then let our system
              analyze the layout effortlessly.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5">
              <Icon
                icon="heroicons:chat-bubble-left-right"
                className="w-5 h-5"
              />
            </div>

            <h3 className="text-sm font-semibold text-brand-navy mb-2">
              Ask Questions or Use Prompts
            </h3>

            <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed">
              Chat naturally with your document or use pre-designed prompts to
              query text, tables and conclusions.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-xs sm:col-span-2 lg:col-span-1">
            <div className="w-11 h-11 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-5">
              <Icon icon="ri:lightbulb-flash-line" className="w-5 h-5" />
            </div>

            <h3 className="text-sm font-semibold text-brand-navy mb-2">
              Get Cited Answers
            </h3>

            <p className="text-[10px] sm:text-xs text-slate-500 leading-relaxed">
              Receive accurate, cited answers matching source content while
              preserving context and accountability.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WaitlistPage;
