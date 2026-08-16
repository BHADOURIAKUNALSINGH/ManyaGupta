"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#EADDC9] border-t border-[#361B19]/10 text-[#361B19] min-h-[25vh] flex flex-col justify-center  py-5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 w-full flex-grow">
        
        {/* Left Column - Contact Details */}
        <div className="w-full md:w-[70%] space-y-6 text-left">
          
          {/* Header Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#361B19] font-heading tracking-tight leading-[1.05] w-full">
            Let&apos;s turn good ideas <br /> Into great experiences.
          </h2>

          {/* Outlined Pill Buttons */}
          <div className="flex flex-col gap-3.5 pt-4">
            <div className="flex flex-wrap gap-3.5">
              <a
                href="mailto:hello@manyagupta.com"
                className="px-6 py-2.5 rounded-full border border-[#361B19] text-[#361B19] text-sm hover:bg-[#361B19]/5 transition-all text-center inline-block cursor-pointer font-body font-semibold"
              >
                Say Hello!!
              </a>
              <a
                href="https://linkedin.com/in/manya-gupta"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full border border-[#361B19] text-[#361B19] text-sm hover:bg-[#361B19]/5 transition-all text-center inline-block cursor-pointer font-body font-semibold"
              >
                Linkedin
              </a>
              <a
                href="/resume.pdf"
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

        {/* Right Column - Smiley ASCII Art */}
        <div className="w-full md:w-[30%] flex justify-center md:justify-end">
          <pre className="font-mono text-[7px] sm:text-[8px] md:text-[9px] leading-tight text-[#361B19] opacity-60 select-none hidden md:block text-right">
            {`
                @@@@@@@@@@@                
          @@@@@@@@@     @@@@@@@@@          
        @@@@@                   @@@@@       
      @@@@                         @@@@     
    @@@                             @@@   
   @@@      @@@               @@@      @@@  
  @@@      @@@@@             @@@@@      @@@ 
 @@@       @@@@@            @@@@@@       @@@
 @@@       @@@@@             @@@@@       @@@
 @@@        @@@@             @@@@        @@@
 @@@                                     @@@
 @@@     @@                        @@    @@@
  @@@    @@@                      @@@   @@@ 
   @@@    @@@                    @@@   @@@  
    @@@@   @@@@@              @@@@@  @@@@   
      @@@@    @@@@@@@@  @@@@@@@@   @@@@     
        @@@@@       @@@@@@      @@@@@       
           @@@@@@@@@     @@@@@@@@@          
                @@@@@@@@@@@`}
          </pre>
        </div>

      </div>

      {/* Copyright signature - Centered at the bottom */}
      <div className="w-full text-center text-xs font-semibold text-[#361B19]/60 font-body select-none pt-12">
        © 2026 Manya Gupta. Designed with curiosity
      </div>
    </footer>
  );
}
