import { useEffect } from 'react';

export function UpdateTitleOnScroll() {

  useEffect(() => {

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    // Map of ID to the Title you want to show
    const titleMap: Record<string, string> = {
      home: "Hi! Good day",
      projectCards: "Featured projects",
      tech: "Tech Stack",
      timeline: "Timeline"
    };

    if (typeof window !== 'undefined') {
      const animationObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const el = entry.target as HTMLElement;

            const delay = el.dataset.delay || "0";
            el.style.setProperty("--animate-delay", `${delay}s`);

            el.classList.add("animate__animated", "animate__fadeInUp");
            observer.unobserve(el); // animate ONCE
          });
        },
        {
          threshold: 0.15
        }
      );

      const titleObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter(e => e.isIntersecting);
          if (visible.length === 0) return;

          const topMost = visible.reduce((prev, curr) =>
            curr.boundingClientRect.top < prev.boundingClientRect.top
              ? curr
              : prev
          );

          const el = topMost.target as HTMLElement;
          const newTitle = titleMap[el.id];

          if (newTitle) document.title = newTitle;
        },
        {
          threshold: 0,
          rootMargin: "-20% 0px -50% 0px"
        }
      );

      // Wait for first paint before observing

    requestAnimationFrame(() => {
      const sections = document.querySelectorAll<HTMLElement>(".sectionRow");
      sections.forEach((section, index) => {
        section.dataset.delay = (index * 0.3).toString(); // stagger 0.2s per section
        animationObserver.observe(section);
        titleObserver.observe(section);
      });
    });

    return () => {
      titleObserver.disconnect();
      animationObserver.disconnect();
    };
    }

    
  }, []);
}