"use client";

import React from "react";

export default function AvatarCarousel() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Outer Wrapper */}
      <div className="relative w-full max-w-[340px] md:max-w-[400px] aspect-[4/5] overflow-visible pb-8">
        
        {/* STATIC BACKDROP CARD */}
        <div className="absolute top-4 bottom-16 left-4 right-4 bg-[#F4B3A8] rounded-[2.5rem] border border-[#361B19]/10 shadow-lg z-0" />

        {/* Static Image Overlay */}
        <div className="absolute inset-0 z-10 overflow-visible pointer-events-none">
          <img
            src="/about.a.png"
            alt="Manya Gupta"
            className="absolute bottom-16 right-[0.3rem] h-[100%] w-auto object-contain mix-blend-multiply pointer-events-none rounded-[2.5rem]"
          />
        </div>

      </div>
    </div>
  );
}
