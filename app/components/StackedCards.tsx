"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
}

const CARDS: CardData[] = [
  {
    id: 1,
    title: "Ui / Ux Design",
    description: "Making digital feel effortless.",
    image: "/uiux.png"
  },
  {
    id: 2,
    title: "Product Design",
    description: "Turning “what if?” into “it works.”",
    image: "/product.png"
  },
  {
    id: 3,
    title: "Game Design",
    description: "Making pixels worth playing.",
    image: "/game.png"
  }
];

export default function StackedCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section 
      ref={containerRef}
      className="py-24 max-w-6xl mx-auto px-6 relative"
    >
      <div className="space-y-4 mb-16">
        <span className="text-sm uppercase tracking-widest font-semibold text-[#361B19]/60">Core Skills</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#361B19] font-heading tracking-tight">
          Things I Do Pretty Well.
        </h2>
      </div>

      {/* Cards container */}
      <div className="flex flex-col gap-16 md:gap-20">
        {CARDS.map((card) => {
          return (
            <div
              key={card.id}
              className="sticky w-full h-[280px] sm:h-[300px] flex items-center justify-center"
              style={{ 
                top: "100px",
                zIndex: card.id,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full bg-[#361B19] text-[#F5EFE6] rounded-[2rem] shadow-2xl p-8 sm:p-10 flex flex-row items-center justify-center border border-[#F5EFE6]/10 relative overflow-hidden group gap-6"
              >
                {/* Background glow micro-animation */}
                <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#F5EFE6]/5 blur-3xl group-hover:bg-[#F5EFE6]/10 transition-all duration-700 pointer-events-none" />
                
                {/* Left side: Content block */}
                <div className="space-y-3 flex-1 translate-y-[-1.7rem]">
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-[#F5EFE6]">
                    {card.title}
                  </h3>
                  <p className="text-base sm:text-xl text-[#F5EFE6]/80 leading-relaxed font-light font-body">
                    {card.description}
                  </p>
                </div>

                {/* Right side: Enlarged Image */}
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className={`w-32 h-32 sm:w-52 sm:h-52 object-contain shrink-0 ${
                    card.id === 3 ? "scale-75 sm:scale-80" : ""
                  }`}
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
