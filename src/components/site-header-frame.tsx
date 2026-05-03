"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export function SiteHeaderFrame({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`.trim()}>
      {children}
    </header>
  );
}
