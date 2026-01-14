"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector(".site-header");
    const toggleHeader = () => {
      if (!header) return;
      if (window.scrollY > 12) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };

    toggleHeader();
    window.addEventListener("scroll", toggleHeader, { passive: true });

    const revealItems = Array.from(
      document.querySelectorAll("[data-reveal]")
    );
    let observer;

    if (revealItems.length) {
      if (!("IntersectionObserver" in window)) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
      } else {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.2 }
        );

        revealItems.forEach((item) => observer.observe(item));
      }
    }

    return () => {
      window.removeEventListener("scroll", toggleHeader);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
