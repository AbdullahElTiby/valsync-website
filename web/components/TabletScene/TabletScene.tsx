"use client";
import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Background from "./Background";
import Building from "./Building";
import RoadLights from "./RoadLights";
import Particle from "./Particle";

const BUILDINGS = [
  { height: 55, left: "2%", width: "18%", accent: "rgba(80,160,255,0.4)" },
  { height: 38, left: "16%", width: "12%", accent: "rgba(100,200,220,0.35)" },
  { height: 65, left: "28%", width: "16%", accent: "rgba(120,160,255,0.45)" },
  { height: 82, left: "42%", width: "16%", accent: "rgba(100,180,255,0.5)" },
  { height: 48, left: "58%", width: "14%", accent: "rgba(140,120,255,0.4)" },
  { height: 72, left: "72%", width: "12%", accent: "rgba(80,180,240,0.45)" },
  { height: 42, left: "82%", width: "16%", accent: "rgba(100,160,255,0.35)" },
];

export default function TabletScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 16);
    mouseY.set(y * 16);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      style={{ borderRadius: "inherit" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Background />

      <motion.div className="absolute inset-0" style={{ x: useTransform(mouseX, (v) => v), y: useTransform(mouseY, (v) => v * 0.7) }}>
        {BUILDINGS.map((b, i) => (
          <Building key={i} height={b.height} left={b.left} width={b.width} delay={i * 0.3} accent={b.accent} />
        ))}
      </motion.div>

      <motion.div className="absolute inset-0" style={{ x: useTransform(mouseX, (v) => v * 0.3), y: useTransform(mouseY, (v) => v * 0.3) }}>
        <RoadLights />
      </motion.div>

      <motion.div className="absolute inset-0" style={{ x: useTransform(mouseX, (v) => v * 0.5), y: useTransform(mouseY, (v) => v * 0.5) }}>
        {Array.from({ length: 15 }).map((_, i) => (
          <Particle key={i} index={i} total={15} />
        ))}
      </motion.div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(100,180,255,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(180,120,255,0.05) 0%, transparent 50%)",
        }}
      />
    </motion.div>
  );
}
