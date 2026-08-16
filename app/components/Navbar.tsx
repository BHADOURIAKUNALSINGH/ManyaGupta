"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const prevScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolling down (increasing scrollY) and past threshold
      if (currentScrollY > prevScrollY.current && currentScrollY > 80) {
        setVisible(false);
      } else {
        // Scrolling up (decreasing scrollY)
        setVisible(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleWorkClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToSection("work");
    }
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F5EFE6]/90 backdrop-blur-md border-b border-[#361B19]/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left Side - Name */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="text-lg font-bold text-[#361B19] tracking-tight hover:opacity-80 transition-opacity cursor-pointer font-heading"
        >
          Manya Gupta
        </Link>

        {/* Right Side - Links & Open-to-work Button */}
        <div className="flex items-center gap-6 md:gap-8">
          <nav className="flex items-center gap-4 md:gap-6 text-sm font-semibold text-[#361B19]/80 font-body">
            <Link
              href="/#work"
              onClick={handleWorkClick}
              className="hover:text-[#361B19] transition-colors cursor-pointer"
            >
              work
            </Link>
            <Link
              href="/about"
              className="hover:text-[#361B19] transition-colors cursor-pointer"
            >
              about
            </Link>
          </nav>

          {/* Pill button: Open to Work */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#361B19] bg-[#361B19]/5 text-xs font-mono font-bold text-[#361B19] select-none">
            {/* Pulsing Dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4B3A8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4B3A8]"></span>
            </span>
            Open to work
          </div>
        </div>

      </div>
    </motion.header>
  );
}
