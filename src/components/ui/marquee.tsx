"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface MarqueeProps {
  className?: string;
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  children,
  direction = "left",
  speed = 20,
  pauseOnHover = false,
  reverse = false,
  repeat = 1,
}: MarqueeProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    const updateWidths = () => {
      const container = document.querySelector('.marquee-container');
      const content = document.querySelector('.marquee-content');
      if (container && content) {
        setContainerWidth(container.clientWidth);
        setContentWidth(content.clientWidth);
      }
    };

    updateWidths();
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  return (
    <div 
      className={cn(
        "overflow-hidden w-full",
        pauseOnHover && "hover:[animation-play-state:paused]",
        className
      )}
    >
      <motion.div
        className="flex whitespace-nowrap marquee-content"
        animate={{
          x: direction === "left" ? [0, -contentWidth] : [0, contentWidth],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
            repeatDelay: 0,
          },
        }}
        style={{
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex shrink-0">
              {children}
            </div>
          ))}
        {/* Duplicate content for seamless loop */}
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div key={`duplicate-${i}`} className="flex shrink-0">
              {children}
            </div>
          ))}
      </motion.div>
    </div>
  );
}
