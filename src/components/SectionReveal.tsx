"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionRevealProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function SectionReveal({ children, id, className }: SectionRevealProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
