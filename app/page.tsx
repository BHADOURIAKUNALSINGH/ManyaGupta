import React from "react";
import HeroGrid from "./components/HeroGrid";
import ProjectCards from "./components/ProjectCards";
import StackedCards from "./components/StackedCards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-black selection:bg-[#361B19] selection:text-[#361B19] overflow-x-clip">
      <Navbar />
      
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden">
        
        {/* Centered Stacked Layout */}
        <div className="relative z-10 flex-grow flex flex-col justify-center items-center py-13">
          
          {/* Full bleed name */}
          <h1 className="w-full text-center font-extrabold tracking-tighter uppercase text-[#361B19] select-none leading-none z-20"
              style={{ fontSize: "clamp(3rem, 14vw, 12rem)" }}>
            MANYA GUPTA
          </h1>

          {/* Centered Image Grid */}
          <div className="flex justify-center w-full">
            <HeroGrid />
          </div>

          {/* Intro Description */}
          <div className="max-w-xl space-y-6 text-center">
            <p className="text-m text-black leading-snug font-light">
              A designer who loves making tech useful,<br/> usable and beautiful for people globally
            </p>
          </div>

        </div>

      </section>

      {/* SECTION 2 - SELECTED WORK */}
      <div id="work">
        <ProjectCards />
      </div>

      {/* SECTION 3 - STACKED CARDS */}
      <StackedCards />

      {/* SECTION 4 - FOOTER */}
      <Footer />

    </div>
  );
}
