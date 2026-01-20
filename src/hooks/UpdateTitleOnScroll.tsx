import { useEffect } from 'react';

export function UpdateTitleOnScroll() {

  useEffect(() => {

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    // Map of ID to the Title you want to show
    const titleMap: Record<string, string> = {
      home: "Welcome",
      projectCards: "Featured projects",
      tech: "Tech Stack",
      timeline: "Timeline"
    };



    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          const el = entry.target as HTMLElement;

          // If the section is taking up 50% or more of the screen
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {

            const newTitle = titleMap[entry.target.id];

            if (newTitle) document.title = newTitle;

            const delay = el.dataset.delay || "0";

            el.style.setProperty("--animate-delay", `${delay}s`);

            el.classList.add("animate__animated", "animate__fadeInUp");

            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.3
      }


    );

    // Wait for first paint before observing
    
    requestAnimationFrame(() => {
      const sections = document.querySelectorAll<HTMLElement>(".sectionRow");
      sections.forEach((section, index) => {
        section.dataset.delay = (index * 0.3).toString(); // stagger 0.2s per section
        observer.observe(section);
      });
    });

    return () => observer.disconnect();
  }, []);
}