"use client";

import React, { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    const email = "manyag.3007@gmail.com";
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <footer className="bg-[#EADDC9] border-t border-[#361B19]/10 text-[#361B19] min-h-[25vh] flex flex-col justify-center py-12 sm:py-16 relative overflow-hidden space-y-8 sm:space-y-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 w-full flex-grow relative z-10">
        
        {/* Left Column - Contact Details */}
        <div className="w-full md:w-[70%] space-y-8 text-left">
          
          {/* Header Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#361B19] font-heading tracking-tight leading-[1.05] w-full">
            Let&apos;s turn good ideas <br /> Into great experiences.
          </h2>
 
          {/* Outlined Pill Buttons */}
          <div className="flex flex-col gap-3.5 pt-4">
            <div className="flex flex-wrap gap-3.5">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=manyag.3007@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleEmailClick}
                className="px-6 py-2.5 rounded-full border border-[#361B19] text-[#361B19] text-sm hover:bg-[#361B19]/5 transition-all text-center inline-block cursor-pointer font-body font-semibold min-w-[120px]"
              >
                {copied ? "Copied! ✓" : "Say Hello!!"}
              </a>
              <a
                href="https://www.linkedin.com/in/manya-gupta-27043a219/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full border border-[#361B19] text-[#361B19] text-sm hover:bg-[#361B19]/5 transition-all text-center inline-block cursor-pointer font-body font-semibold"
              >
                Linkedin
              </a>
              <a
                href="/manya_resume.pdf.pdf"
                download
                className="px-6 py-2.5 rounded-full border border-[#361B19] text-[#361B19] text-sm hover:bg-[#361B19]/5 transition-all text-center inline-block cursor-pointer font-body font-semibold"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Subtext description */}
          <p className="text-base text-[#000000]/80 leading-snug font-light w-full pt-4 font-body">
            Currently designing, learning, and occasionally fighting <br /> Auto Layout.
          </p>
        </div>

        {/* Right Column - Spacer to reserve space for absolute Smiley */}
        <div className="w-full md:w-[30%] hidden md:block" />

      </div>

      <img 
        src="/footer_ascii.png" 
        alt="Smiley ASCII Art" 
        className="absolute right-0 top-[45%] -translate-y-[40%] w-[450px] max-w-none h-auto opacity-70 select-none hidden md:block -mr-[112px] pointer-events-none scale-150"
      />

      {/* Copyright signature - Left-aligned at the bottom */}
      <div className="max-w-6xl mx-auto px-6 w-full text-left text-xs font-semibold text-[#361B19]/60 font-body select-none pt-12 translate-y-[2.5rem] relative z-10">
        © 2026 Manya Gupta. Designed with curiosity
      </div>
    </footer>
  );
}
