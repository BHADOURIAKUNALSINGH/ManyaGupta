"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "./CaseStudyModal";

export const PROJECTS: Project[] = [
  {
    id: "meetcatch",
    title: "AI Meeting Recorder-Meetcatch",
    subtitle: "Real-time Transcription & Note-taking",
    tags: ["Product Design", "UX Research", "AI Product"],
    description: "Designed an AI-powered meeting experience that helps users stay present while turning conversations into clear, structured documentation.",
    image: "/meetCatch_Card.png",
  },
  {
    id: "canon",
    title: "Canon Master-Ball blast game",
    subtitle: "Level-based Arcade Game",
    tags: ["Game Design", "UI/UX Design"],
    description: "Designed a level-based arcade game where players master their aim, defeat challenging bosses, and use power-ups to survive increasingly difficult levels.",
    image: "/canon_card.png",
  },
  {
    id: "dodge",
    title: "Dodge",
    subtitle: "Fast-paced Arcade Game",
    tags: ["Game Design", "UI/UX Design"],
    description: "Designed a fast-paced arcade game where players dodge incoming obstacles, react quickly, and survive as the challenge intensifies.",
    image: "/dodge_card.png",
  }
];

const MotionLink = motion(Link);

export default function ProjectCards() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <section id="work" className="py-16 max-w-6xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#361B19] font-heading tracking-tight">
          Selected Work
        </h2>
      </div>

      <div className="space-y-12">
        {PROJECTS.map((project, i) => {
          const isRightImage = i % 2 === 1;
          const imageBg = "bg-[#F5EFE6]";

          // Dynamic image wrapper alignment classes
          let wrapperAlignClass = "";
          if (project.id === "aura") {
            wrapperAlignClass = "items-stretch justify-stretch";
          } else if (project.id === "canon" || project.id === "dodge") {
            wrapperAlignClass = "items-center justify-center";
          } else {
            wrapperAlignClass = isRightImage ? "items-end justify-end" : "items-end justify-start";
          }

          // Dynamic image element alignment classes
          let imgAlignClass = "";
          if (project.id === "aura") {
            imgAlignClass = "object-cover";
          } else if (project.id === "canon" || project.id === "dodge") {
            imgAlignClass = "object-cover object-center";
          } else {
            imgAlignClass = `object-cover ${isRightImage ? "object-right-bottom" : "object-left-bottom"}`;
          }

          return (
            <MotionLink
              href={`/projects/${project.id}`}
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col md:flex-row overflow-hidden items-stretch md:h-[360px] group relative cursor-none bg-white/40 border border-[#361B19]/10 rounded-[2rem] shadow-sm hover:shadow-md hover:bg-white/60 transition-all duration-300 ${
                isRightImage ? "md:flex-row-reverse" : ""
              }`}
              onMouseEnter={() => setActiveHoverId(project.id)}
              onMouseLeave={() => setActiveHoverId(null)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
            >
              {/* Image Wrap (Aligned to left or right outer boundary) */}
              <div 
                className={`w-full md:w-1/2 relative overflow-hidden flex min-h-[260px] md:min-h-full ${imageBg} ${wrapperAlignClass}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${imgAlignClass}`}
                  style={{
                    objectPosition: project.id === "meetcatch" ? "center" : undefined,
                    objectFit: project.id === "meetcatch" ? "contain" : undefined,
                    transform: project.id === "meetcatch" ? "scale(2)" : "none"
                  }}
                />
              </div>

              {/* Copy Wrap (Padded and matches mockup layout order) */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center space-y-6">
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#361B19] font-heading tracking-tight leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-[#000000]/80 text-sm md:text-base leading-relaxed font-light font-body">
                  {project.description}
                </p>

                {/* Tags Section (Placed below the description to match mockup) */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 text-xs sm:text-sm rounded-full bg-[#EADDC9]/60 border border-[#361B19]/10 text-[#361B19] font-body font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {activeHoverId === project.id && (
                <div
                  className="absolute pointer-events-none z-30 bg-[#0B132A] text-white px-4 py-2 flex items-center gap-2 rounded shadow-xl whitespace-nowrap"
                  style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <span className="font-serif text-sm italic tracking-wide">
                    {project.id === "canon" || project.id === "dodge" ? "View full UI" : "view case study"}
                  </span>
                </div>
              )}
            </MotionLink>
          );
        })}
      </div>
    </section>
  );
}
