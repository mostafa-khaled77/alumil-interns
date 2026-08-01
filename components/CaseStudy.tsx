"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, FileText, Clock } from "lucide-react";

export const CaseStudy: React.FC = () => {
  return (
    <section id="casestudy" className="py-20 lg:py-28 bg-white relative z-10 border-t border-gray-200">
      {/* Subtle Background Architectural Grid */}
      <div className="absolute inset-0 architectural-grid-light opacity-40 pointer-events-none" />

      {/* Ambient Top Left Yellow Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-alumil-yellow/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-alumil-gray-bg border border-alumil-yellow shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-xs font-black uppercase tracking-wider text-alumil-charcoal">
              Case Study Showcase
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-alumil-charcoal leading-tight"
          >
            PROJECT <span className="relative inline-block px-3 py-1 bg-alumil-yellow text-alumil-charcoal rounded-md shadow-sm transform -skew-x-3">CASE STUDY</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed"
          >
            Project overview and real-world implementation details.
          </motion.p>
        </div>

        {/* Clean Light Corporate Placeholder Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-2xl bg-gray-50/80 border-2 border-dashed border-gray-300 p-10 text-center space-y-4 hover:border-alumil-yellow/80 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-2xl bg-alumil-yellow/20 border border-alumil-yellow flex items-center justify-center mx-auto text-amber-600 shadow-xs">
            <FileText className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-black text-alumil-charcoal">
              Case Study Documentation Ready
            </h3>
            <p className="text-xs font-semibold text-gray-500 max-w-lg mx-auto">
              This section is configured and ready for custom case study content, architecture diagrams, and project milestones.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-extrabold text-gray-600">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>Content Container Initialized</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudy;
