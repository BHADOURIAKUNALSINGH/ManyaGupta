"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Compass, Cpu, Layers } from "lucide-react";

interface CardData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const CARDS: CardData[] = [
  {
    id: 1,
    title: "Product Design",
    subtitle: "Intentionality & Empathy",
    description: "I believe that good design is invisible. Every detail—from micro-interactions to typographic hierarchy—must serve a purpose. I focus on creating interfaces that feel intuitive, human, and delightful to interact with daily.",
    icon: <Compass size={32} className="text-[#F5EFE6]" />
  },
  {
    id: 2,
    title: "Ui/Ux Design",
    subtitle: "Ambiguity to Execution",
    description: "I partner with cross-functional teams to distill vague ideas into structured prototypes. By keeping user validation at the center and working closely with engineers, I ensure the final build matches the initial design vision precisely.",
    icon: <Cpu size={32} className="text-[#F5EFE6]" />
  },
  {
    id: 3,
    title: "Logo Design",
    subtitle: "End-to-End Design",
    description: "Specializing in native mobile application design, interactive design systems, responsive web platforms, brand guidelines, and high-fidelity motion prototyping that bridges design ideas and frontend execution.",
    icon: <Layers size={32} className="text-[#F5EFE6]" />
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
        <span className="text-sm uppercase tracking-widest font-semibold text-[#361B19]/60">How I Work</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#361B19] font-heading tracking-tight">
          Philosophy, Process & Mastery.
        </h2>
      </div>

      {/* Cards container */}
      <div className="flex flex-col gap-24 md:gap-32">
        {CARDS.map((card) => {
          return (
            <div
              key={card.id}
              className="sticky w-full h-[400px] sm:h-[450px] flex items-center justify-center"
              style={{ 
                top: "80px",
                zIndex: card.id,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full bg-[#361B19] text-[#F5EFE6] rounded-[2.5rem] shadow-2xl p-8 sm:p-12 md:p-16 flex flex-col justify-between border border-[#F5EFE6]/10 relative overflow-hidden group"
              >
                {/* Background glow micro-animation */}
                <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#F5EFE6]/5 blur-3xl group-hover:bg-[#F5EFE6]/10 transition-all duration-700 pointer-events-none" />
                
                {/* Card Header */}
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#F5EFE6]/60">
                      {card.subtitle}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-[#F5EFE6]">
                      {card.title}
                    </h3>
                  </div>
                  <div className="p-3 bg-[#F5EFE6]/10 rounded-2xl border border-[#F5EFE6]/15">
                    {card.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="max-w-2xl">
                  <p className="text-lg sm:text-xl text-[#F5EFE6]/80 leading-relaxed font-light font-body">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
