import { useEffect } from "react";

/**
 * useScrollAnimation
 * ------------------
 * Observes all elements with [data-animate] on the page and adds
 * the class "in-view" when they enter the viewport.
 * Import this hook once in App.js.
 */
export default function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            // Once visible, stop watching (animation plays once)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}