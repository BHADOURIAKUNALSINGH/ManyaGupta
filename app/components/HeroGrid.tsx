"use client";

import React, { useState, useRef } from "react";

const COLS = 10;
const ROWS = 15;
const TOTAL_CELLS = COLS * ROWS;

// Hardcoded deterministic indices that will always be visible initially
const ALWAYS_VISIBLE = [4, 9, 16, 25, 22, 32, 35, 44, 42, 50, 58, 67, 78, 85, 88, 90, 100, 115, 124, 135];

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
        w-[300px] h-[880px]
        sm:w-[330px] sm:h-[880px]
        md:w-[360px] md:h-[880px]
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
          top-0
          left-1/2
          -translate-x-1/2
          w-[780px]
          h-[1040px]
          max-w-none
          pointer-events-auto
          select-none
        "
        style={{
          transform: "translateY(-152px)",
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

        {/* Floating cursive intro text and arrow on the left */}
        <div className="absolute right-[calc(100%-5%)] top-[304px] -translate-y-1/2 hidden md:flex flex-col items-start pointer-events-none select-none z-50 w-[450px]">
          <p className="font-script text-2xl md:text-3xl text-[#361B19]/70 leading-tight tracking-wide text-left">
            A designer who loves making tech<br />
            useful, usable and beautiful for<br />
            people globally:)
          </p>
          <svg 
            className="w-28 h-20 text-[#361B19]/50 mt-[-5%] self-center mr-[-70%]" 
            viewBox="0 0 110 69" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.62">
              <path d="M12.6079 6.14156C12.1635 6.95069 11.8035 7.54694 11.4265 8.18576C10.7759 9.30724 10.1063 10.372 9.43679 11.4368C9.21361 11.7917 8.93587 12.0757 8.67499 12.3172C8.41411 12.5587 8.09668 12.63 7.8447 12.4317C7.55702 12.2193 7.44392 11.8789 7.55996 11.4816C7.64228 11.1694 7.7603 10.8714 7.86147 10.6159C9.35922 7.56409 11.0187 4.62559 13.0015 1.91367C13.191 1.64391 13.4161 1.38829 13.677 1.14681C14.1125 0.777447 14.4676 0.819571 14.795 1.24475C14.9944 1.47148 15.1581 1.68407 15.4101 1.88237C16.8673 3.00129 18.3415 4.07763 19.7988 5.19655C19.9962 5.32399 20.1599 5.53658 20.2878 5.73502C20.5061 6.01848 20.5309 6.3731 20.3791 6.7563C20.1917 7.12536 19.8951 7.3527 19.54 7.31057C19.2205 7.28259 18.8466 7.18374 18.5777 7.02802C17.5738 6.43343 16.5679 5.73954 15.5808 5.10237C15.4191 4.98908 15.2406 4.91837 14.9717 4.76265C15.0343 5.23071 15.0402 5.5286 15.0819 5.84065C16.2032 14.0671 19.0744 21.2133 23.6259 27.3503C27.2896 32.4954 31.6962 36.7032 36.6711 40.1018C41.1253 43.1464 45.7838 45.7793 50.8172 47.6741C58.0291 50.4316 65.5385 52.1248 73.4238 52.2429C80.9371 52.3615 88.3491 50.9622 95.6519 47.6481C99.7775 45.7847 103.572 43.2976 107.068 40.1015C107.277 39.8884 107.521 39.6895 107.784 39.5474C108.309 39.263 108.796 39.7022 108.632 40.3265C108.533 40.6813 108.381 41.0645 108.156 41.3201C107.602 41.9876 107.049 42.655 106.422 43.1948C103.71 45.7657 100.666 47.7129 97.4743 49.3056C91.0206 52.562 84.3922 54.1731 77.6894 54.7203C72.7732 55.1376 68.0533 54.7462 63.378 53.9291C58.1522 53.0417 53.1456 51.6008 48.2867 49.5781C44.8395 48.1637 41.5798 46.3802 38.3875 44.4264C34.4412 41.9771 30.7539 39.1869 27.3741 35.829C23.3246 31.7625 19.778 27.1564 17.1529 21.6838C15.0081 17.1895 13.5466 12.3255 12.7687 7.09182C12.729 6.87908 12.6704 6.60962 12.6079 6.14156Z" fill="currentColor"/>
            </g>
          </svg>
        </div>

        {/* Floating cursive 'hover to reveal' indicator on the right */}
        <div className="absolute left-[calc(100%-12%)] top-[400px] -translate-y-1/2 hidden md:flex items-center gap-2 pointer-events-none select-none whitespace-nowrap z-50">
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
