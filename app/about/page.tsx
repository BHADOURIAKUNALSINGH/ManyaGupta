import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AvatarCarousel from "../components/AvatarCarousel";

export default function About() {
  const experiences = [
    {
      role: "UI/UX Design Intern",
      company: "Web3task Pvt. Ltd.",
      dates: "Jan 2026 – Jun 2026",
      location: "Noida, UP",
      bullets: [
        "Designed intuitive user interfaces and interactive prototypes for AI-powered applications, gaming applications, and responsive websites.",
        "Collaborated with product and engineering teams to ensure pixel-perfect layout delivery, contributing to a 10% growth in user engagement.",
        "Developed cohesive visual assets, wireframes, and interactive component libraries in Figma."
      ]
    },
    {
      role: "Design, Community & Social Media Intern",
      company: "Off The Road Voyages (Furgetaway)",
      dates: "Jun 2025 – Nov 2025",
      location: "Noida, UP",
      bullets: [
        "Designed the brand's travel app and responsive website pages, focusing on clear navigation and user-centered information architecture.",
        "Created social media posts, visual branding, and trip-related marketing creatives.",
        "Supported content ideation, product copy, and community outreach strategies."
      ]
    },
    {
      role: "UX Research Intern",
      company: "Wilson Wings (Travlo App)",
      dates: "May 2025 – Jun 2025",
      location: "Remote",
      bullets: [
        "Conducted user interviews and usability tests to gather qualitative feedback on the Travlo app post-launch.",
        "Generated insightful research reports to identify user pain points and recommend product optimization areas.",
        "Refined user personas, empathy maps, and journey maps based on real test data."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Galgotias University",
      dates: "Nov 2022 – July 2026",
      details: "CGPA: 8.36"
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
      name: "Complete Web and Mobile Designer - UI/UX+ Figma and more",
      issuer: "Udemy",
      dates: "July 2024 – Aug 2024",
      link: "/Udemy certificate.pdf"
    }
  ];

  const skills = [
    "Product Design", "UI Design", "UX Design", "Wireframing", "Prototyping",
    "User Research", "Visual Design", "Interaction Design", "Figma", "Canva",
    "Affinity", "HTML/CSS", "Design Thinking", "Information Architecture"
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
               I’m a UX Designer with around a year of experience designing digital products and websites. My work sits at the intersection of user experience, visual design, and problem-solving.I enjoy taking messy ideas, understanding the people behind them, and turning them into experiences that feel simple, intuitive, and purposeful.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/manya_resume.pdf.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F4B3A8] text-[#361B19] hover:bg-[#F4B3A8]/90 font-bold transition-all shadow-md text-sm cursor-pointer"
              >
                Download resume ⬇
              </a>
              <a
                href="mailto:manyag.3007@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#361B19] bg-transparent text-[#361B19] hover:bg-[#361B19]/5 font-mono font-bold transition-all text-sm cursor-pointer"
              >
                manyag.3007@gmail.com
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
                  <span className="text-xs font-semibold text-[#361B19]/70 font-mono">
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
                  <p className="text-sm font-semibold text-[#361B19]/70 font-mono mt-1">{edu.institution}</p>
                </div>
                <div className="text-right sm:text-left">
                  <span className="text-xs font-semibold text-[#361B19]/70 font-mono">{edu.dates}</span>
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
                    <span className="text-xs text-[#361B19]/50 font-mono flex items-center gap-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      View ↗
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#361B19]/60 font-mono mt-1">{cert.issuer}</p>
                </div>
                <span className="text-xs font-semibold text-[#E05A47] font-mono mt-4">{cert.dates}</span>
              </a>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="space-y-6">
          <div className="border-b border-[#361B19] pb-3">
            <h2 className="text-3xl font-extrabold text-[#361B19] font-heading tracking-tight">Skills</h2>
          </div>
          
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-white/50 border border-[#361B19]/10 text-[#361B19] hover:bg-[#361B19]/5 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
