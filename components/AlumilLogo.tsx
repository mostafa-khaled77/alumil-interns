"use client";

import React from "react";
import Image from "next/image";

interface AlumilLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const AlumilLogo: React.FC<AlumilLogoProps> = ({
  className = "h-9 w-auto object-contain",
  width = 140,
  height = 54,
}) => {
  return (
    <Image
      src="/alumil-logo.svg"
      alt="Alumil Corporate Logo"
      width={width}
      height={height}
      priority
      className={`object-contain transition-transform duration-300 hover:scale-105 ${className}`}
    />
  );
};

export default AlumilLogo;
