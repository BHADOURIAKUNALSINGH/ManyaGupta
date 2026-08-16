"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CaseStudyModal, { Project } from "./CaseStudyModal";

const PROJECTS: Project[] = [
  {
    id: "aura",
    title: "Bill Buster — E-Commerce Progress Tracker",
    subtitle: "Checkout & Delivery Experience",
    tags: ["Product Design", "UX Research", "E-Commerce"],
    description: "Designed a progress-tracking checkout system that reduced cart abandonment rates and made delivery timelines transparent.",
    image: "/aura.png",
    stats: [
      { value: "26%", label: "Checkout Conversion" },
      { value: "+14%", label: "Average Order Value" },
      { value: "4.8 ★", label: "App Store Rating" }
    ],
    caseStudy: {
      challenge: "Cart abandonment is a major issue in e-commerce checkout flows, often caused by lack of transparency in delivery progress and confusing steps. Bill Buster solves this by making the entire purchase-to-delivery lifecycle visually progress-oriented.",
      approach: "Conducted research with 100+ active online shoppers to map friction points during checkout. Discovered that anxiety spikes between payment and delivery. Designed a keyboard-first tracker with real-time updates.",
      solution: "Created progress indicators that dynamically visualise checkout states. Integrated live maps with delivery partner details like OTP, names (e.g. Rakesh Sharma), and order tracking benchmarks.",
      outcome: "Successfully increased conversion rates from 19% to 26%, boosted average cart value by 14%, and created an engaging, stress-free delivery tracking experience.",
      resultsList: [
        "Reduced checkout cart abandonment rate significantly.",
        "Increased 30-day user engagement and tracking interaction.",
        "Built dynamic checkout timeline components.",
        "Designed comprehensive delivery state transitions."
      ]
    }
  },
  {
    id: "vertex",
    title: "Vertex — Financial Analytics Dashboard",
    subtitle: "Enterprise Data Visualization",
    tags: ["UI/UX Design", "Web Application", "Data Viz"],
    description: "Synthesized complex high-frequency trading data into intuitive visual feeds. Created a unified component library that cut development handoff time by 40%.",
    image: "/vertex.png",
    stats: [
      { value: "3x", label: "Faster Reporting" },
      { value: "$12B", label: "Processed Volume" },
      { value: "99%", label: "CSAT Score" }
    ],
    caseStudy: {
      challenge: "Trading desks use dense terminal feeds that cause fatigue and result in costly order placement mistakes. Vertex wanted to bring consumer-grade clarity and responsiveness to institutional-grade trading panels without losing information density.",
      approach: "Spent two weeks observing active trading floors. Identified key hotkeys and visual hierarchy gaps where information was regularly misread. Formulated a dark-mode priority layout with customizable module docks.",
      solution: "Engineered high-frequency chart modules using canvas-rendering. Constructed a system of color-coded risk vectors and clear typography that helps traders distinguish order types and execution states within milliseconds.",
      outcome: "Adopted by three major investment firms, processing over $12 billion in transactions with a 99% user satisfaction rating, cutting onboarding training cycles from weeks to days.",
      resultsList: [
        "Created custom data visualization layouts.",
        "Reduced trading input error rates to near zero.",
        "Delivered a 120-token Tailwind-compatible design system.",
        "Designed customizable widget boards for dual-monitor setups."
      ]
    }
  },
  {
    id: "chronos",
    title: "Chronos — Time-Blocking Planner",
    subtitle: "Keyboard-First Productivity Tool",
    tags: ["Interaction Design", "Desktop App", "Product Strategy"],
    description: "A keyboard-first time-blocking tool engineered for remote creators. Features spatial task layout, calendars syncing, and offline-first storage.",
    image: "/chronos.png",
    stats: [
      { value: "4.9 ★", label: "ProductHunt Rating" },
      { value: "150K", label: "Active Creators" },
      { value: "#1", label: "Product of the Day" }
    ],
    caseStudy: {
      challenge: "Calendar apps are designed for booking meetings, not scheduling focused work. Remote workers suffer from fragmented schedules. Chronos designed a solution focused on keyboard-driven block scheduling and offline-first sync.",
      approach: "Interviewed 30 remote software engineers and designers. Discovered that calendar management often requires too many clicks, leading to abandonment. Formulated a command-bar model for calendar block creation.",
      solution: "Engineered a command menu interface similar to spotlight search. Used a dual-pane canvas displaying the calendar day alongside a scratchpad. Implemented local-first CRDT syncing for instant offline load.",
      outcome: "Voted #1 Product of the Day on Product Hunt, growing to 150k monthly active users who spend an average of 40% less time planning their workweek.",
      resultsList: [
        "Designed natural-language parsing scheduler.",
        "Implemented smooth, fluid calendar grid drag handles.",
        "Integrated multi-account calendar syncing (Google, Outlook).",
        "Wrote comprehensive local-first indexedDB storage layers."
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
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`border border-[#361B19]/20 rounded-[2.5rem] bg-white/40 shadow-sm flex flex-col md:flex-row overflow-hidden items-stretch md:h-[360px] ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Wrap (Full bleed on its side of the card) */}
            <div 
              className="w-full md:w-1/2 group relative cursor-none overflow-hidden flex items-stretch min-h-[260px] md:min-h-full"
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
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {activeHoverId === project.id && (
                <div 
                  className="absolute pointer-events-none z-30 bg-[#0B132A] text-white px-4 py-2 flex items-center gap-2 rounded shadow-xl whitespace-nowrap"
                  style={{ 
                    left: mousePos.x, 
                    top: mousePos.y, 
                    transform: "translate(-50%, -50%)" 
                  }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  <span className="font-serif text-sm italic tracking-wide">
                    view case study
                  </span>
                </div>
              )}
            </div>

            {/* Copy Wrap (Padded inside its container) */}
            <div className="w-full md:w-1/2 p-6 md:p-10 md:py-6 flex flex-col justify-center space-y-3">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-0.5 text-[10px] sm:text-xs rounded-full font-mono transition-all ${
                      tagIdx === 0
                        ? "bg-[#361B19] text-[#F5EFE6] font-bold"
                        : "border border-[#361B19]/25 text-[#361B19]/80 bg-transparent"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#361B19] font-heading tracking-tight leading-tight">
                {project.title}
              </h3>
              
              <p className="text-[#000000]/80 text-sm md:text-base leading-normal font-light font-body">
                {project.description}
              </p>
              
              {/* Stats Ribbon */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                {project.stats.map((stat, statIdx) => {
                  const statColors = ["text-[#1A44E8]", "text-[#E05A47]", "text-[#361B19]"];
                  return (
                    <div key={stat.label}>
                      <div className={`text-xl md:text-2xl font-extrabold font-heading leading-tight ${statColors[statIdx]}`}>
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-mono font-semibold text-[#361B19]/60 mt-0.5">
                        {stat.label.toLowerCase()}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openCaseStudy(project)}
                  className="relative font-mono font-bold text-xs text-[#361B19] group cursor-pointer pb-1 inline-block"
                >
                  Read the full case study &rarr;
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#E05A47] scale-x-100 group-hover:bg-[#E05A47]/90 transition-all" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={closeCaseStudy}
        project={selectedProject}
      />
    </section>
  );
}
