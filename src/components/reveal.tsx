"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealDirection = "up" | "left" | "right";

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  initiallyVisible = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  initiallyVisible?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(initiallyVisible);

  useEffect(() => {
    if (visible) {
      return;
    }

    const node = ref.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.18,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
