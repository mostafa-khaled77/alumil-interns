"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Milestone,
  CheckCircle2,
} from "lucide-react";

// Inline SVG for LinkedIn Icon
const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const mostafaProfile = {
  id: "mostafa-khaled",
  name: "Mostafa Khaled",
  role: "Frontend Developer & IT Infrastructure Intern",
  trackName: "IT & Digital",
  image: "/mostafa.jpg",
  journeyTitle: "Building Enterprise Web Portals & Scaling IT Infrastructure",
  journeyStory:
    "During my 1-month intensive internship at Alumil, I bridged software engineering with enterprise IT systems. I learned and applied key modules in Active Directory user management, network firewall policies, and enterprise IT security. Concurrently, I architected and built Alumil's Next.js 16 Intern Portal using TypeScript, Tailwind CSS v4, and Framer Motion micro-interactions, delivering a responsive, production-ready web platform.",
  keyMilestones: [
    "Architected Next.js 16 App Router portal with zero UI latency.",
    "Configured enterprise Active Directory security & role permissions.",
    "Optimized internal web tools for cross-departmental collaboration.",
  ],
  skills: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "IT Infrastructure", "Active Directory", "Network Firewalls", "Framer Motion"],
  linkedin: "https://www.linkedin.com",
  portfolio: "#",
};

export const OurInterns: React.FC = () => {
  return (
    <section id="interns" className="py-20 lg:py-28 bg-alumil-gray-bg relative z-10 border-t border-gray-200">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-alumil-yellow/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-alumil-yellow shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-xs font-black uppercase tracking-wider text-alumil-charcoal">
              Cohort 2026 Profile
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-alumil-charcoal"
          >
            MEET OUR <span className="relative inline-block px-3 py-1 bg-alumil-yellow text-alumil-charcoal rounded-md shadow-sm transform -skew-x-3">INTERNS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed"
          >
            Our 1-month journey at Alumil: Real-world stories, hands-on learning, and technical impact across our tracks.
          </motion.p>
        </div>

        {/* Single Featured Journey Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-2xl bg-white border border-gray-200 hover:border-alumil-yellow/80 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT PROFILE COLUMN (Sidebar) */}
            <div className="lg:col-span-4 space-y-5 border-b lg:border-b-0 lg:border-r border-gray-100 pb-6 lg:pb-0 lg:pr-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              
              {/* Avatar Photo */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-alumil-yellow/60 shadow-md group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={mostafaProfile.image}
                  alt={mostafaProfile.name}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Name & Role */}
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-alumil-charcoal group-hover:text-amber-600 transition-colors">
                  {mostafaProfile.name}
                </h3>
                <p className="text-xs font-bold text-gray-600 leading-snug">
                  {mostafaProfile.role}
                </p>
              </div>

              {/* Track Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-alumil-yellow/20 text-alumil-charcoal border border-alumil-yellow/50">
                <span className="w-2 h-2 rounded-full bg-alumil-yellow" />
                <span>{mostafaProfile.trackName} Track</span>
              </div>

              {/* Profile Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 w-full">
                <a
                  href={mostafaProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs bg-gray-100 hover:bg-alumil-yellow text-alumil-charcoal border border-gray-200 hover:border-alumil-yellow transition-all duration-200 shadow-xs"
                >
                  <LinkedInIcon className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={mostafaProfile.portfolio || mostafaProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-50 hover:bg-alumil-yellow border border-gray-200 text-alumil-charcoal transition-all shadow-xs"
                  aria-label={`View ${mostafaProfile.name}'s work`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* RIGHT JOURNEY STORY BODY */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Journey Section Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-600">
                  <BookOpen className="w-4 h-4" />
                  <span>My 1-Month Internship Journey & Impact</span>
                </div>
                <h4 className="text-lg sm:text-xl font-black text-alumil-charcoal leading-snug">
                  {mostafaProfile.journeyTitle}
                </h4>
              </div>

              {/* Detailed Narrative Story */}
              <p className="text-sm text-gray-700 leading-relaxed font-normal bg-gray-50/70 p-4 rounded-xl border border-gray-100">
                {mostafaProfile.journeyStory}
              </p>

              {/* Key Engineering Milestones */}
              <div className="space-y-2.5">
                <h5 className="text-xs font-black uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                  <Milestone className="w-3.5 h-3.5 text-amber-500" />
                  Key Accomplishments & Learnings:
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-gray-700">
                  {mostafaProfile.keyMilestones.map((milestone, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-gray-100 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{milestone}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology & Learned Skills Tags */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <span className="text-[11px] font-black uppercase tracking-wider text-gray-500 block">
                  Learned Skills & Technology Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {mostafaProfile.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-extrabold bg-gray-100 text-alumil-charcoal border border-gray-200/80 group-hover:border-amber-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurInterns;
