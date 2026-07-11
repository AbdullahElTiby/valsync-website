"use client";
import { useEffect, useRef } from "react";

export default function GlowProvider({ children }: { children: React.ReactNode }) {
  const touched = useRef<Set<Element>>(new Set());

  useEffect(() => {
    const sync = (e: PointerEvent) => {
      const els = document.elementsFromPoint(e.clientX, e.clientY);
      const current = new Set<Element>();

      for (const el of els) {
        const glow = (el as HTMLElement).closest("[data-glow]");
        if (glow) {
          const rect = glow.getBoundingClientRect();
          const gx = e.clientX - rect.left;
          const gy = e.clientY - rect.top;
          const style = (glow as HTMLElement).style;
          style.setProperty("--gx", gx.toFixed(2));
          style.setProperty("--gy", gy.toFixed(2));
          style.setProperty("--gxp", (gx / rect.width).toFixed(4));
          style.setProperty("--gyp", (gy / rect.height).toFixed(4));
          style.setProperty("--glow", "1");
          current.add(glow);
        }
      }

      for (const el of touched.current) {
        if (!current.has(el)) {
          const style = (el as HTMLElement).style;
          style.removeProperty("--gx");
          style.removeProperty("--gy");
          style.removeProperty("--gxp");
          style.removeProperty("--gyp");
          style.removeProperty("--glow");
        }
      }
      touched.current = current;
    };

    document.addEventListener("pointermove", sync, { passive: true });
    return () => document.removeEventListener("pointermove", sync);
  }, []);

  return <>{children}</>;
}
