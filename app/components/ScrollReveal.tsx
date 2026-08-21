"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-card"),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    document.documentElement.classList.add("reveal-ready");

    let observer: IntersectionObserver | null = null;

    const revealElements = (items: HTMLElement[]) => {
      items
        .filter((element) => !element.classList.contains("is-revealed"))
        .sort((a, b) => {
          const aRect = a.getBoundingClientRect();
          const bRect = b.getBoundingClientRect();
          return aRect.top - bRect.top || aRect.left - bRect.left;
        })
        .forEach((element, index) => {
          element.style.setProperty("--reveal-delay", `${index * 150}ms`);
          element.classList.add("is-revealed");
          observer?.unobserve(element);
        });
    };

    observer = new IntersectionObserver(
      (entries) => {
        revealElements(
          entries
            .filter((entry) => entry.isIntersecting)
            .map((entry) => entry.target as HTMLElement),
        );
      },
      { threshold: 0.15, rootMargin: "0px 0px -22% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    const getVisibleElements = () =>
      elements.filter((element) => {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      });

    // Reveal every card in the initial homepage viewport, including short cards
    // below the normal trigger line.
    const initialRevealFrame = window.requestAnimationFrame(() => {
      if (window.scrollY < 10) revealElements(getVisibleElements());
    });

    // The last section cannot always cross the raised trigger line because the
    // document has no additional scroll room beneath it.
    const handlePageBottom = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (isAtBottom) revealElements(getVisibleElements());
    };

    window.addEventListener("scroll", handlePageBottom, { passive: true });

    return () => {
      window.cancelAnimationFrame(initialRevealFrame);
      window.removeEventListener("scroll", handlePageBottom);
      observer?.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, [pathname]);

  return null;
}
