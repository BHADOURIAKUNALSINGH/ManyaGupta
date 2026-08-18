"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { PROJECTS } from "../../components/ProjectCards";
import { getCaseStudyImage } from "../../components/CaseStudyModal";

interface ScrollImageProps {
  src: string;
  title: string;
  aspectRatio?: string;
}

function ScrollImage({ src, title, aspectRatio }: ScrollImageProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement | HTMLObjectElement>(null);
  
  const [maxTranslate, setMaxTranslate] = useState(0);

  // Track the scroll progress of the sticky section relative to the window viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Apply momentum-based physics to smooth the scroll motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001
  });

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
      if ("complete" in imgEl && (imgEl as HTMLImageElement).complete) {
        calculateTranslation();
      }
    }
    window.addEventListener("resize", calculateTranslation);
    calculateTranslation();

    const timer = setTimeout(calculateTranslation, 500);
    const timer2 = setTimeout(calculateTranslation, 2000);

    return () => {
      if (imgEl) {
        imgEl.removeEventListener("load", calculateTranslation);
      }
      window.removeEventListener("resize", calculateTranslation);
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [src]);

  const translateY = useTransform(smoothProgress, [0, 1], [0, -maxTranslate]);

  const isSvg = src.toLowerCase().endsWith(".svg");

  return (
    <div ref={sectionRef} className="relative w-full h-[650vh] bg-[#F5EFE6]">
      {/* Sticky Full-screen Image Viewport Container */}
      <div 
        ref={frameRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden z-10"
      >
        {isSvg ? (
          <motion.object
            ref={imgRef as any}
            data={src}
            type="image/svg+xml"
            style={{ 
              y: translateY,
              aspectRatio: aspectRatio,
            }}
            className="w-full h-auto block select-none will-change-transform pointer-events-none"
          />
        ) : (
          <motion.img
            ref={imgRef as any}
            src={src}
            alt={title}
            style={{ y: translateY }}
            className="w-full h-auto block select-none will-change-transform"
            draggable={false}
          />
        )}
      </div>
    </div>
  );
}

export default function ProjectPage() {
  const params = useParams();
  const id = params?.id as string;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F5EFE6] text-black flex flex-col items-center justify-center">
        <Navbar />
        <h1 className="text-3xl font-extrabold text-[#361B19] font-heading">Project Not Found</h1>
        <Footer />
      </div>
    );
  }

  const caseStudyImage = getCaseStudyImage(project.id);

  let aspectRatio: string | undefined;
  if (project.id === "meetcatch") {
    aspectRatio = "1280 / 31478";
  } else if (project.id === "canon") {
    aspectRatio = "1280 / 18090";
  } else if (project.id === "dodge") {
    aspectRatio = "1280 / 14774";
  }

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-black overflow-x-clip selection:bg-[#361B19]/10 selection:text-[#361B19]">
      <Navbar />

      {/* PARALLAX STICKY SCROLL SECTION */}
      <ScrollImage
        src={caseStudyImage}
        title={project.title}
        aspectRatio={aspectRatio}
      />

      <Footer />
    </div>
  );
}
