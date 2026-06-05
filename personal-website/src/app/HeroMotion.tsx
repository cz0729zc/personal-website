"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function HeroMotion() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero='copy']", {
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        y: 24,
      });

      gsap.from("[data-hero='panel']", {
        autoAlpha: 0,
        delay: 0.18,
        duration: 1,
        ease: "power3.out",
        scale: 0.97,
        y: 28,
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
