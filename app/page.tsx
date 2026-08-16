import React from "react";
import HeroGrid from "./components/HeroGrid";
import ProjectCards from "./components/ProjectCards";
import StackedCards from "./components/StackedCards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-black selection:bg-[#361B19] selection:text-[#361B19]">
      <Navbar />
      
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden">
        
        {/* Centered Stacked Layout */}
        <div className="relative z-10 flex-grow flex flex-col justify-center items-center py-12">
          
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
          <div className="max-w-xl space-y-6 text-center mt-5">
            <p className="text-m text-black leading-snug font-light">
              Designer who loves making tech useful, usable and beautiful for people globally
            </p>

            {/* <div className="flex gap-6 justify-center items-center pt-2">
              <a 
                href="#work" 
                className="px-6 py-3 rounded-full bg-[#361B19] text-[#F5EFE6] hover:bg-[#361B19]/90 font-bold transition-all shadow-md"
              >
                View selected work
              </a>
              <a 
                href="mailto:hello@manyagupta.com"
                className="font-bold text-[#361B19] hover:underline"
              >
                Let&apos;s talk
              </a>
            </div> */}
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
