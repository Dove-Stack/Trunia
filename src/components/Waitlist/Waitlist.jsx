import React, { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import { MailPng } from "../../assets/assets";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const canvasRef = useRef(null);

  // High-performance self-contained canvas confetti animation
  const triggerConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const colors = ["#00a191", "#22c55e", "#3b82f6", "#ef4444", "#eab308"];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2 + 50,
        radius: Math.random() * 4 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.7) * 15,
        gravity: 0.25,
        opacity: 1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach((p) => {
        if (p.opacity > 0) {
          alive = true;
          p.x += p.vx;
          p.y += p.vy;
          p.vy += p.gravity;
          p.opacity -= 0.015;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;

          // Draw rectangle confetti pieces
          ctx.fillRect(-p.radius, -p.radius, p.radius * 2, p.radius * 1.5);
          ctx.restore();
        }
      });

      if (alive) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitted(true);
    // Tiny delay ensures canvas context initializes correctly after modal mount
    setTimeout(() => {
      triggerConfetti();
    }, 50);
  };

  return (
    <div
      className="relative bg-brand-navy w-full py-16 sm:py-24 flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden min-h-[400px]"
      id="waitlist"
    >
      {/* Confetti Canvas Layer */}
      {isSubmitted && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-[60] w-full h-full"
        />
      )}

      {/* Main Form content */}
      <div className="flex flex-col items-center justify-center w-full z-10">
        {/* Heading */}
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mb-3 sm:mb-4 text-center px-2">
          Be among the first to use Trunia
        </h2>

        {/* Subtext */}
        <p className="text-[#9ea6c4] text-[15px] sm:text-[17px] text-center max-w-[550px] leading-relaxed mb-6 sm:mb-8 font-light px-2">
          Join researchers and professionals who demand verifiable answers.
          Early access is free.
        </p>

        {/* Input Form Group */}
        <form onSubmit={handleSubmit} className="w-full max-w-[480px]">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 bg-transparent sm:bg-[#e2e5ed] sm:rounded-xl sm:p-1.5 sm:shadow-inner">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:flex-1 bg-[#e2e5ed] sm:bg-transparent rounded-lg sm:rounded-none border-none outline-none px-4 py-3 sm:py-0 text-[#1a1f3d] placeholder-[#9ca3b8] text-sm h-11 sm:h-auto"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-navy text-white px-7 py-3 sm:py-2.5 rounded-lg text-sm font-medium border border-white/20 sm:border-none hover:bg-[#151930] transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-[#5c6488] text-[12px] sm:text-[13px] mt-4 font-light">
            No spam. No credit card. Just early access.
          </p>
        </form>
      </div>

      {/* Success Modal Overlay */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-[50] animate-fade-in">
          {/* Modal Container */}
          <div className="bg-white p-6 sm:p-10 rounded-2xl max-w-110 w-full shadow-2xl flex flex-col items-center justify-center text-center border border-slate-100 transition-all transform scale-100 duration-300 relative animate-zoom-in">
            {/* Top Green Checkmark Container */}
            <div className="w-20 h-14 rounded-md bg-green-100 flex items-center justify-center text-green-500 mb-4 shrink-0">
              <Icon icon="ph:check-circle" width="40" height="40" />
            </div>

            {/* Heading Text */}
            <h3 className="text-[#1a1f3d] text-lg sm:text-xl font-bold tracking-tight mb-2">
              You have been added to the{" "}
              <span className="text-green-600 font-bold">
                waitlist!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="inline-block ml-1.5 mb-3.5"
                >
                  <path
                    fill="currentColor"
                    d="M15.97 13.83A5.9 5.9 0 0 0 13.82 16l-2.27-4.37l-3.89 3.87L8 18l-1.05 1.06l-1.77-3.19L2 14.11l1.06-1.06l2.48.35l3.89-3.9L2 5.62l1.41-1.41l9.2 2.12l3.89-3.89a1.49 1.49 0 0 1 2.12 0c.58.59.58 1.56 0 2.12l-3.89 3.89zm5.37 2.01l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"
                  ></path>
                </svg>
              </span>
            </h3>

            {/* Body Copy */}
            <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed mb-6 max-w-[320px]">
              Thank you for joining, you'll be the first to know when Trunia
              goes live.
            </p>

            {/* Bottom Form Dismiss Button */}
            <button
              onClick={() => {
                setIsSubmitted(false);
                setEmail("");
              }}
              className="w-full bg-[#1db123] hover:bg-green-700 text-white py-3 px-5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
            >
              Waitlist Confirmed
              <img src={MailPng} className="w-8 " alt="" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Waitlist;
