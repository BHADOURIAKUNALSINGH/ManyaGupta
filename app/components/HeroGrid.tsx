"use client";

import React, { useState, useRef } from "react";

const COLS = 10;
const ROWS = 15;
const TOTAL_CELLS = COLS * ROWS;

// Hardcoded deterministic indices that will always be visible initially
const ALWAYS_VISIBLE = [4, 9, 16, 25, 22, 32,35, 44,42, 50, 58, 67, 78, 85, 90, 100];

export default function HeroGrid() {
  const [hoveredCells, setHoveredCells] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle cell hover (Desktop)
  const revealCell = (index: number) => {
    if (!hoveredCells.includes(index)) {
      setHoveredCells((prev) => [...prev, index]);
    }
  };

  // Helper to calculate touched/hovered cell from coordinates
  const handleRevealAtCoords = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      const colWidth = rect.width / COLS;
      const rowHeight = rect.height / ROWS;
      
      const colIndex = Math.floor(x / colWidth);
      const rowIndex = Math.floor(y / rowHeight);
      
      const cellIndex = rowIndex * COLS + colIndex;
      if (cellIndex >= 0 && cellIndex < TOTAL_CELLS) {
        revealCell(cellIndex);
      }
    }
  };

  // Handle touch events (Mobile swipe-to-reveal)
  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleRevealAtCoords(touch.clientX, touch.clientY);
  };

  // Handle mouse move (Desktop hover-to-reveal)
  const handleMouseMove = (e: React.MouseEvent) => {
    handleRevealAtCoords(e.clientX, e.clientY);
  };

  // Reset hovered state
  const handleReset = () => {
    setHoveredCells([]);
  };

  const cells = Array.from({ length: TOTAL_CELLS }, (_, i) => i);

  return (
        <div className="flex flex-col items-center  ">
  <div className="relative">

    {/* Image interaction area */}
    <div
      ref={containerRef}
      className="
        relative
        w-[300px] h-[662px]
        sm:w-[330px] sm:h-[572px]
        md:w-[360px] md:h-[592px]
        select-none
        cursor-pointer
        rounded-2xl
        overflow-hidden
        -mt-12 sm:-mt-16 md:-mt-24
        z-12
      "
      onTouchMove={handleTouchMove}
      onMouseMove={handleMouseMove}
    >

      {/* Actual image */}
      <img
        src="/landing_image.png"
        alt="Landing image centerpiece"
        draggable={false}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-fill
          object-top
          pointer-events-auto
          select-none

        "
        style={{
          transform: "scale(1.5) translateY(1rem)",
          transformOrigin: "center"
        }}
      />

      {/* Reveal grid */}
      <div
        className="absolute inset-0 pointer-events-none grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
        }}
      >
        {cells.map((i) => {
          const isVisible =
            ALWAYS_VISIBLE.includes(i) ||
            hoveredCells.includes(i);

          return (
            <div
              key={i}
              className="
                bg-[#F5EFE6]
                transition-opacity
                duration-500
                ease-out
              "
              style={{
                opacity: isVisible ? 0 : 1,
              }}
            />
          );
        })}
      </div>

    </div>

        {/* Floating cursive 'hover to reveal' indicator on the right */}
        <div className="absolute left-[calc(100%-12%)] top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 pointer-events-none select-none whitespace-nowrap z-50">
          <svg 
            className="w-5 h-5 text-[#361B19]/50 -rotate-[15deg] transform" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.75" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
          </svg>
          <span className="font-script text-3xl text-[#361B19]/70 tracking-wide">
            hover to reveal
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-xs font-semibold text-[#361B19]/60">
        <span className="animate-pulse md:hidden">↖ hover or drag to reveal</span>
      </div>
    </div>
  );
}
