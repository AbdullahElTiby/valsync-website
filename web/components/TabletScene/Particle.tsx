"use client";
import { motion } from "framer-motion";

interface Props {
  index: number;
  total: number;
}

export default function Particle({ index, total }: Props) {
  const size = 1 + Math.random() * 2;
  const xStart = Math.random() * 100;
  const yStart = 20 + Math.random() * 60;
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        background: index % 3 === 0 ? "rgba(100,180,255,0.6)" : index % 3 === 1 ? "rgba(180,140,255,0.5)" : "rgba(80,200,220,0.5)",
        boxShadow: `0 0 ${size * 3}px currentColor`,
      }}
      animate={{
        x: [`${xStart}%`, `${xStart + (index % 2 === 0 ? 15 : -15)}%`, `${xStart}%`],
        y: [`${yStart}%`, `${yStart - 10 - (index % 4) * 3}%`, `${yStart}%`],
        opacity: [0, 0.8, 0.2, 0.8, 0],
      }}
      transition={{
        duration: 8 + (index % total) * 0.7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.4,
      }}
    />
  );
}
