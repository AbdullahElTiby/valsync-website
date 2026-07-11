"use client";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <motion.div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(
          135deg,
          #080D1A 0%,
          #101A33 25%,
          #15294A 50%,
          #101A33 75%,
          #080D1A 100%
        )`,
        backgroundSize: "400% 400%",
      }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
  );
}
