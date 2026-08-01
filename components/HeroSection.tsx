"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Cpu,
  Truck,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const disciplines = [
  { id: "it", label: "IT & Digital", icon: Code2, desc: "Cloud Architecture & AI Platforms" },
  { id: "engineering", label: "Engineering", icon: Cpu, desc: "Architectural Aluminum Systems" },
  { id: "supply", label: "Supply Chain", icon: Truck, desc: "Global Logistics Optimization" },
  { id: "finance", label: "Finance & Strategy", icon: TrendingUp, desc: "Financial Modeling & Analytics" },
];

export const HeroSection: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<string>("it");
  const [imgSrc, setImgSrc] = useState<string>("/Allumilers.jpg");

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-alumil-gray-bg flex items-center justify-center">
      {/* Background Architectural Grid & Subtle Ambient Soft Glow */}
      <div className="absolute inset-0 architectural-grid-light opacity-60 pointer-events-none" />
      
      {/* Soft Yellow Top-Left Light Sphere */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-alumil-yellow/20 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Soft Bottom-Right Neutral Sphere */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gray-200/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Asymmetric 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: Typography & Action ================= */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Animated Entry Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-badge border border-alumil-yellow shadow-sm bg-white/90"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-alumil-yellow opacity-85" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-alumil-yellow" />
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-alumil-charcoal flex items-center gap-1.5">
                Alumil Interns <span className="text-amber-600 font-extrabold">2026</span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </motion.div>

            {/* Main Headline with High-Contrast Alumil Yellow Highlight Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-alumil-charcoal leading-[1.08]">
                ENGINEERING <br className="hidden sm:inline" />
                <span className="text-alumil-slate">
                  THE FUTURE
                </span>
              </h1>
              
              {/* Highlight Block: AT ALUMIL */}
              <div className="inline-block relative mt-2">
                <div className="absolute inset-0 bg-alumil-yellow transform -skew-x-6 rounded-md shadow-[0_4px_25px_rgba(255,210,0,0.45)]" />
                <span className="relative z-10 px-5 py-1.5 text-3xl sm:text-5xl lg:text-6xl font-black tracking-wider text-alumil-charcoal uppercase block">
                  AT ALUMIL
                </span>
              </div>
            </motion.div>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl font-normal leading-relaxed"
            >
              Empowering next-generation leaders across <span className="text-alumil-charcoal font-extrabold border-b-2 border-alumil-yellow">IT, Engineering, Supply Chain</span>, and <span className="text-alumil-charcoal font-extrabold border-b-2 border-alumil-yellow">Finance</span>. Driving architectural aluminum innovations and digital transformation worldwide.
            </motion.p>

            {/* Dual Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary CTA */}
              <a
                href="#apply"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-black text-base bg-alumil-yellow text-alumil-charcoal overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_6px_25px_rgba(255,210,0,0.5)] hover:shadow-[0_8px_35px_rgba(255,210,0,0.7)] border border-alumil-yellow/80"
              >
                <span>Discover 2026 Program</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                <span className="absolute inset-0 bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#interns"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-base bg-alumil-slate hover:bg-alumil-charcoal text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Alumil Interns</span>
                <ChevronRight className="w-4 h-4 text-alumil-yellow transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Interactive Discipline Chips (Cleaned: No Mock Counts) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 space-y-3"
            >
              <div className="text-xs font-extrabold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-alumil-yellow" />
                Multidisciplinary Tracks
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {disciplines.map((item) => {
                  const Icon = item.icon;
                  const isSelected = activeTrack === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTrack(item.id)}
                      className={`flex flex-col items-start p-3.5 rounded-xl transition-all duration-300 text-left border ${
                        isSelected
                          ? "bg-white border-2 border-alumil-yellow text-alumil-charcoal shadow-md scale-[1.02]"
                          : "bg-white/70 border-gray-200 text-gray-600 hover:border-amber-400 hover:text-alumil-charcoal hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className={`w-4 h-4 ${isSelected ? "text-amber-600" : "text-gray-500"}`} />
                        <span className="text-xs font-extrabold">{item.label}</span>
                      </div>
                      <span className="text-[11px] text-gray-500 leading-snug line-clamp-1">{item.desc}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN: Creative Group Photo Showcase ================= */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Layered Ambient Soft Glow behind Photo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-alumil-yellow/40 via-amber-200/50 to-amber-300/30 rounded-3xl blur-2xl opacity-70 animate-pulse" />
              
              {/* Continuous Floating Frame Wrapper */}
              <div className="relative animate-float">
                
                {/* Architectural Corner Yellow Accents */}
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-alumil-yellow z-30 rounded-tl-xl shadow-sm" />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-alumil-yellow z-30 rounded-br-xl shadow-sm" />

                {/* Skewed Skew/Rotated Photo Frame Container */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/80 shadow-2xl bg-white group">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={imgSrc}
                      alt="Alumil 2026 Interns Cohort"
                      fill
                      priority
                      className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                      onError={() => {
                        if (imgSrc === "/Allumilers.jpg") {
                          setImgSrc("/Allumilers.jpeg");
                        }
                      }}
                    />
                    
                    {/* Subtle Overlay Gradient for Quality Finish */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Image Footer Caption inside Card */}
                  <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between shadow-inner">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-600" />
                      <span className="text-xs font-bold text-alumil-charcoal">
                        Alumil Cohort <span className="text-amber-600 font-extrabold">2026</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-600 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Active Program</span>
                    </div>
                  </div>
                </div>

                {/* Glassmorphism Floating Corner Micro-Badge 1: Cohort Program (Cleaned: No Mock Stats) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -bottom-6 -left-6 z-40 bg-white/95 p-4 rounded-2xl border-2 border-alumil-yellow shadow-xl backdrop-blur-xl max-w-[220px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-alumil-yellow text-alumil-charcoal font-black shadow-md">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-black text-gray-500 uppercase tracking-wider">
                        Interns Cohort
                      </div>
                      <div className="text-sm font-black text-alumil-charcoal">
                        Multidisciplinary
                      </div>
                      <div className="text-[10px] text-gray-600 font-bold">
                        Professional Program 2026
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Glassmorphism Floating Corner Micro-Badge 2: Live Status */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -top-5 -right-4 z-40 bg-white/90 px-3.5 py-2 rounded-xl border border-gray-200 shadow-md flex items-center gap-2 backdrop-blur-md"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-bold text-alumil-charcoal">
                    Live Case Studies
                  </span>
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
