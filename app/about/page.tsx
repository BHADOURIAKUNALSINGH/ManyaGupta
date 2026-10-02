"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AvatarCarousel from "../components/AvatarCarousel";

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    const email = "manyag.3007@gmail.com";
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  const experiences = [
    {
      role: "UI/UX Designer",
      company: "Web3task Pvt. Ltd.",
      dates: "Jan 2026 – Jun 2026",
      location: "Noida, UP",
      bullets: [
        "Designed end-to-end product including UI/UX, logo design and interactive figma prototypes of an AI-powered app, gaming apps and responsive websites, each currently live.",
        "Redesigned a VPN website to fix core user navigation, contributing to 5% user growth over the period of 3 months.",
        "Collaborated with developers and PM on handoff and iterated designs based on feedback and testing."
      ]
    },
    {
      role: "Visual Designer Intern",
      company: "Off The Road Voyages (Furgetaway)",
      dates: "Jun 2025 – Nov 2025",
      location: "Noida, UP",
      bullets: [
        "Designed screens for the brand's website in Figma, from wireframes to final UI.",
        "Created 20+ social media posts and trip creatives aligned with brand identity.",
        "Contributed to content ideation and community engagement."
      ]
    },
    {
      role: "UX Research Intern",
      company: "Wilson Wings",
      dates: "May 2025 – Jun 2025",
      location: "Remote",
      bullets: [
        "Conducted 10+ user interviews to evaluate post-launch usability of the Travlo app.",
        "Synthesized findings into reports with prioritized recommendations for the product team."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Galgotias University",
      dates: "2022 – 2026",
      details: "CGPA: 8.12"
    }
  ];

  const certifications = [
    {
      name: "Google UX Design Professional Certificate",
      issuer: "Google / Coursera",
      dates: "Feb 2025 – Apr 2025",
      link: "/ux design certificate.pdf"
    },
    {
      name: "Complete Web and Mobile Designer - UI/UX +Figma and more",
      issuer: "Udemy",
      dates: "July 2024 – Aug 2024",
      link: "/Udemy certificate.pdf"
    }
  ];

  const skillCategories = [
    {
      category: "UX Design",
      items: [
        "User Research",
        "User Personas",
        "User Flow",
        "Competitive Analysis",
        "Usability Testing",
        "Information Architecture",
        "Accessibility (WCAG)",
        "Design Thinking"
      ]
    },
    {
      category: "UI Design",
      items: [
        "Mobile, Tablet & Web Apps",
        "Mobile Games",
        "Landing Pages"
      ]
    },
    {
      category: "Visual Design",
      items: [
        "Graphic Design",
        "Branding",
        "Typography",
        "Visual Storytelling"
      ]
    },
    {
      category: "Tools",
      items: [
        "Figma",
        "Adobe Illustrator",
        "Canva",
        "Canva’s Affinity",
        "Google Stitch",
        "Claude design",
        "HTML/CSS & JavaScript(basic)"
      ]
    },
    {
      category: "Professional",
      items: [
        "Problem Solving",
        "Multidisciplinary",
        "Story Telling",
        "Communication",
        "Cross-functional collaboration",
        "Time management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-black overflow-x-clip selection:bg-[#361B19]/10 selection:text-[#361B19]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-24">
        
        {/* HERO SECTION - ABOUT */}
        <section className="flex flex-col md:flex-row gap-12 items-center justify-between">
          {/* Left Block */}
          <div className="w-full md:w-3/5 space-y-6 md:-translate-y-10">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#361B19]/60">About</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#361B19] font-heading tracking-tight leading-none">
              Hi, I&apos;m MANYA<span className="text-[#F4B3A8]">.</span>
            </h1>
            <div className="space-y-4 text-base sm:text-lg text-black leading-relaxed font-light">
              <p>
                I’m a UI/UX Designer with ~1 year of internship experience across AI, gaming, and travel products. My work sits at the intersection of user experience, visual design, and problem-solving. I enjoy taking messy ideas, understanding the people behind them, and turning them into experiences that feel simple, intuitive, and purposeful.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/Manya's Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F4B3A8] text-[#361B19] hover:bg-[#F4B3A8]/90 font-bold transition-all shadow-md text-sm cursor-pointer"
              >
                Download resume ⬇
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=manyag.3007@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleEmailClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#361B19] bg-transparent text-[#361B19] hover:bg-[#361B19]/5 font-body font-bold transition-all text-sm cursor-pointer min-w-[200px] justify-center"
              >
                {copied ? "Copied! ✓" : "manyag.3007@gmail.com"}
              </a>
            </div>
          </div>

          {/* Right Block - Avatar Carousel */}
          <div className="w-full md:w-2/5">
            <AvatarCarousel />
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="space-y-6">
          <div className="border-b border-[#361B19] pb-3">
            <h2 className="text-3xl font-extrabold text-[#361B19] font-heading tracking-tight">Experience</h2>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h3 className="text-xl font-bold text-[#361B19]">
                    {exp.role} <span className="font-normal text-[#361B19]/60">•</span> {exp.company}
                  </h3>
                  <span className="text-xs font-semibold text-[#361B19]/70 font-body">
                    {exp.dates} &nbsp;•&nbsp; {exp.location}
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-black/85 leading-relaxed font-light">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="space-y-6">
          <div className="border-b border-[#361B19] pb-3">
            <h2 className="text-3xl font-extrabold text-[#361B19] font-heading tracking-tight">Education</h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <div>
                  <h3 className="text-xl font-bold text-[#361B19]">{edu.degree}</h3>
                  <p className="text-sm font-semibold text-[#361B19]/70 font-body mt-1">{edu.institution}</p>
                </div>
                <div className="text-right sm:text-left">
                  <span className="text-xs font-semibold text-[#361B19]/70 font-body">{edu.dates}</span>
                  <p className="text-sm font-bold text-[#E05A47] mt-1">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section className="space-y-6">
          <div className="border-b border-[#361B19] pb-3">
            <h2 className="text-3xl font-extrabold text-[#361B19] font-heading tracking-tight">Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/40 border border-[#361B19]/10 p-5 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md hover:bg-white/60 hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-lg font-bold text-[#361B19] leading-snug group-hover:underline">{cert.name}</h3>
                    <span className="text-xs text-[#361B19]/50 font-body flex items-center gap-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      View ↗
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#361B19]/60 font-body mt-1">{cert.issuer}</p>
                </div>
                <span className="text-xs font-semibold text-[#E05A47] font-body mt-4">{cert.dates}</span>
              </a>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="space-y-6">
          <div className="border-b border-[#361B19] pb-3">
            <h2 className="text-3xl font-extrabold text-[#361B19] font-heading tracking-tight">Skills</h2>
          </div>
          
          <div className="space-y-8">
            {skillCategories.map((group, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg font-bold text-[#361B19]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-white/50 border border-[#361B19]/10 text-[#361B19] hover:bg-[#361B19]/5 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
