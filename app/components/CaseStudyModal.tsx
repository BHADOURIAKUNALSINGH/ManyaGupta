"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  image: string;
  stats: { value: string; label: string }[];
  caseStudyUrl?: string;
  caseStudy: {
    challenge: string;
    approach: string;
    solution: string;
    outcome: string;
    resultsList: string[];
  };
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

interface ScrollImageProps {
  src: string;
  title: string;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

function ScrollImage({ src, title, scrollContainerRef }: ScrollImageProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  
  const [maxTranslate, setMaxTranslate] = useState(0);

  // Track the scroll progress of the sticky section relative to the modal scroll container
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Calculate the maximum translateY value dynamically based on DOM heights
  const calculateTranslation = () => {
    if (imgRef.current && frameRef.current) {
      const imgHeight = imgRef.current.clientHeight;
      const frameHeight = frameRef.current.clientHeight;
      setMaxTranslate(Math.max(0, imgHeight - frameHeight));
    }
  };

  useEffect(() => {
    const imgEl = imgRef.current;
    if (imgEl) {
      imgEl.addEventListener("load", calculateTranslation);
      if (imgEl.complete) {
        calculateTranslation();
      }
    }
    window.addEventListener("resize", calculateTranslation);
    calculateTranslation();

    // Recalculate dimensions periodically in case next.js layout changes late
    const timer = setTimeout(calculateTranslation, 500);

    return () => {
      if (imgEl) {
        imgEl.removeEventListener("load", calculateTranslation);
      }
      window.removeEventListener("resize", calculateTranslation);
      clearTimeout(timer);
    };
  }, [src]);

  // Smoothly transform scroll progress (0 to 1) into vertical translation
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);

  return (
    <div ref={sectionRef} className="relative w-full h-[350vh] bg-[#F5EFE6]">
          {/* Browser Page Frame Content Viewport */}
          <div className="flex-1 w-full overflow-hidden relative bg-[#F5EFE6]">
            <motion.img
              ref={imgRef}
              src={src}
              alt={title}
              style={{ y: translateY }}
              className="w-full h-auto block select-none will-change-transform"
              draggable={false}
            />
          </div>

    </div>
  );
}

const getCaseStudyImage = (projectId: string) => {
  if (projectId === "aura") return "/portfolio/case-study.webp";
  if (projectId === "vertex") return "/vertex.png";
  if (projectId === "chronos") return "/chronos.png";
  return "/portfolio/case-study.webp";
};

export default function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Prevent background body scrolling when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  const caseStudyImage = getCaseStudyImage(project.id);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#361B19]/35 backdrop-blur-sm"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0.95 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.95 }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="relative w-full max-w-5xl h-full bg-[#F5EFE6] shadow-2xl flex flex-col border-l border-[#361B19]/10"
          >
            {/* Floating Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-[#361B19]/80 text-[#F5EFE6] hover:bg-[#361B19] transition-all cursor-pointer shadow-lg backdrop-blur-sm"
              aria-label="Close case study"
            >
              <X size={20} />
            </button>

            {/* Scrollable Container (Acts as the scroll page viewport) */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto scrollbar-none relative"
            >
              
              {/* HERO INTRO SECTION (100vh) */}
              <div className="w-full h-screen flex flex-col items-center justify-center text-center p-8 space-y-6 bg-[#F5EFE6]">
                {/* Monogram Brand Symbol */}
                <div className="text-[#361B19]/80 mb-2">
                  <svg className="w-12 h-12" viewBox="0 0 100 100" fill="currentColor">
                    <rect x="25" y="30" width="10" height="40" rx="5" />
                    <rect x="45" y="20" width="10" height="60" rx="5" />
                    <rect x="65" y="45" width="10" height="30" rx="5" />
                  </svg>
                </div>
                
                <span className="text-xs uppercase tracking-[0.25em] font-mono font-bold text-[#E05A47]">
                  {project.subtitle}
                </span>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-none text-[#361B19] max-w-2xl">
                  {project.title}
                </h1>
                
                <p className="text-sm sm:text-base text-black/70 max-w-md font-light leading-relaxed font-body">
                  {project.description}
                </p>
                
                {/* Bounce Scroll Indicator */}
                <div className="pt-12 animate-bounce text-[#361B19]/50 flex flex-col items-center gap-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest">Scroll to explore</span>
                  <ArrowRight size={16} className="rotate-90" />
                </div>
              </div>

              {/* PARALLAX STICKY SCROLL SECTION */}
              <ScrollImage
                src={caseStudyImage}
                title={project.title}
                scrollContainerRef={scrollRef}
              />

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
