"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CaseStudyModal, { Project } from "./CaseStudyModal";

const PROJECTS: Project[] = [
  {
    id: "aura",
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
    stats: [
      { value: "50+", label: "Levels Designed" },
      { value: "10K+", label: "Active Players" },
      { value: "4.8 ★", label: "Player Rating" }
    ],
    caseStudy: {
      challenge: "Arcade games require perfect balance between difficulty and engagement. Players lose interest if levels are too repetitive or bosses feel unbeatable. The goal was to design an engaging progression loop with power-ups and challenging boss mechanics.",
      approach: "Analyzed player behavior patterns in classic arcade shooters. Designed a curve where difficulty increases dynamically. Developed custom layouts for boss battles and item shop interactions.",
      solution: "Created distinct level maps, modular power-up configurations, and a clean shop menu UI. Implemented clear feedback indicators for score, health, and special weapons.",
      outcome: "Designed a polished game loop that keeps players engaged across 50+ levels, resulting in a high retention rate and highly positive user test feedback.",
      resultsList: [
        "Designed cohesive shop and reward interface panels.",
        "Balanced level difficulty scaling progression curve.",
        "Created interactive boss battle layouts and visual cues.",
        "Delivered standard mobile game UI design layouts."
      ]
    }
  },
  {
    id: "dodge",
    title: "Dodge",
    subtitle: "Fast-paced Arcade Game",
    tags: ["Game Design", "UI/UX Design"],
    description: "Designed a fast-paced arcade game where players dodge incoming obstacles, react quickly, and survive as the challenge intensifies.",
    image: "/dodge_card.png",
    stats: [
      { value: "Fast-paced", label: "Gameplay" },
      { value: "Infinite", label: "Obstacles" },
      { value: "4.9 ★", label: "Player Rating" }
    ],
    caseStudy: {
      challenge: "Arcade reaction games need immediate responsiveness and clear obstacle pathways. Players should quickly identify threats and react within milliseconds. The challenge was designing a clean, high-contrast mobile interface with smooth input controls.",
      approach: "Conducted playtesting sessions to measure player reaction times to obstacle spawn layouts. Adjusted game speed curve dynamically based on duration. Designed clean mobile UI indicators.",
      solution: "Created highly distinct obstacle elements and fluid swipe touch handle models. Built high-contrast game overlays and a simple retry interface.",
      outcome: "Successfully delivered an engaging mobile arcade game design that keeps players hooked, with an average play session length increase of 35%.",
      resultsList: [
        "Designed clear dynamic gameplay indicators.",
        "Balanced reaction speed levels and obstacle scaling.",
        "Created high-fidelity swipe input layouts.",
        "Built responsive menus and leaderboard interfaces."
      ]
    }
  }
];

export default function ProjectCards() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const openCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeCaseStudy = () => {
    setIsModalOpen(false);
  };

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
            imgAlignClass = "object-contain object-center";
          } else {
            imgAlignClass = `object-contain ${isRightImage ? "object-right-bottom" : "object-left-bottom"}`;
          }

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col md:flex-row overflow-hidden items-stretch md:h-[360px] group relative cursor-none bg-white/40 border border-[#361B19]/10 rounded-[2rem] shadow-sm hover:shadow-md hover:bg-white/60 transition-all duration-300 ${
                isRightImage ? "md:flex-row-reverse" : ""
              }`}
              onClick={() => openCaseStudy(project)}
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
                    transform: (project.id === "canon" || project.id === "dodge") ? "translateY(12px) scale(1.5)" : "none",
                    transformOrigin: (project.id === "canon" || project.id === "dodge") ? "top center" : "center"
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
            </motion.div>
          );
        })}
      </div>

      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={closeCaseStudy}
        project={selectedProject}
      />
    </section>
  );
}
