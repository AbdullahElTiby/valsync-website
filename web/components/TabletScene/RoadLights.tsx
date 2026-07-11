"use client";
import { motion } from "framer-motion";

export default function RoadLights() {
  const streaks = 12;
  return (
    <div className="absolute bottom-[8%] left-0 right-0 h-px" style={{ background: "rgba(100,180,255,0.15)" }}>
      {Array.from({ length: streaks }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 h-px rounded-full"
          style={{ width: `${4 + Math.random() * 8}%`, background: "rgba(100,180,255,0.7)", boxShadow: "0 0 6px rgba(100,180,255,0.5)" }}
          animate={{ x: ["-5%", "105%"], opacity: [0, 1, 0] }}
          transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
        />
      ))}
    </div>
  );
}
