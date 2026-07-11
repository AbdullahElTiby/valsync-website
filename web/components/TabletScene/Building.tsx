"use client";
import { motion } from "framer-motion";

interface Props {
  height: number;
  left: string;
  width: string;
  delay: number;
  accent: string;
}

export default function Building({ height, left, width, delay, accent }: Props) {
  const rows = Math.floor(height / 10);
  const cols = Math.max(2, Math.floor((parseInt(width) > 60 ? 6 : parseInt(width) > 40 ? 4 : 2)));

  return (
    <motion.div
      className="absolute bottom-0 rounded-t-sm"
      style={{ left, width, height: `${height}%`, background: "linear-gradient(180deg, rgba(30,50,80,0.9) 0%, rgba(15,25,45,0.95) 100%)", border: "1px solid rgba(255,255,255,0.04)" }}
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div
        className="absolute inset-0 grid gap-px p-1 opacity-80"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}
      >
        {Array.from({ length: rows * cols }).map((_, i) => (
          <motion.div
            key={i}
            className="rounded-[1px]"
            style={{ background: accent }}
            animate={{ opacity: [0.1, Math.random() * 0.6 + 0.2, 0.1] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2, ease: "easeInOut" }}
          />
        ))}
      </div>
    </motion.div>
  );
}
