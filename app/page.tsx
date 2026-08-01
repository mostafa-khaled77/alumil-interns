import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OurInterns from "@/components/OurInterns";
import CaseStudy from "@/components/CaseStudy";

export const metadata = {
  title: "Alumil Interns 2026 Portal | Engineering The Future",
  description:
    "Official Alumil Interns 2026 Portal showcasing multidisciplinary intern achievements in IT, Engineering, Supply Chain, and Finance.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-alumil-gray-bg text-alumil-charcoal relative overflow-hidden font-sans selection:bg-alumil-yellow selection:text-alumil-charcoal">
      {/* Sticky Glassmorphic Header */}
      <Navbar />

      {/* Main Hero Section */}
      <HeroSection />

      {/* Our Interns Portfolio Showcase Section */}
      <OurInterns />

      {/* Enterprise Case Study Section */}
      <CaseStudy />
    </main>
  );
}
