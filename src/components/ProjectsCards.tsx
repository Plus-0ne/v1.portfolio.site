import { useEffect, useState } from "react";
import Card from "./Card";
import loungeImage from "../assets/img/Screenshot 2026-01-08 233807.webp";
import resortMapImage from "../assets/img/Screenshot 2026-01-08 233517.webp";
import portfolioImage from "../assets/img/portf.webp";
function ProjectsCards() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // runs only in the browser
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile(); // initial check
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const projects = [
    {
      title: "Social Media Platform",
      description: "A full-stack social media platform built with Laravel, featuring role-based authentication, interactive feeds, real-time notifications, and marketplace functionality.",
      key_features: [
        "Implemented user and admin authentication with role-based access control",
        "Developed interactive feeds with posts, reactions, and comments using Laravel, PHP, and JavaScript",
        "Integrated real-time notifications using Laravel WebSockets",
        "Built a marketplace system including product listing, cart, and checkout",
        "Implemented Google Sign-In for seamless authentication",
        "Developed a gallery module to display registered pets with dynamic listing",
        "Developed a chat system (work in progress) for user-to-user communication"
      ],
      tags: ["PHP/Laravel", "MySQL", "JavaScript", "jQuery", "Bootstrap"],
      img: loungeImage, link: "https://metaanimals.tech/"
    },
    {
      title: "Resort Interactive Map",
      description: "A dynamic resort map with admin-managed points of interest (POIs), custom map pins, and embedded 360° views.",
      key_features: [
        "Implemented admin interface for managing POIs (create, edit, delete)",
        "Integrated Leaflet.js for interactive map rendering",
        "Created custom map pin icons for different location types",
        "Embedded 360° views for selected locations",
        "Developed responsive layout for desktop and mobile"
      ],
      tags: ["PHP/Laravel", "MySQL", "JavaScript", "jQuery", "Bootstrap" ,"Leaflet.js"],
      img: resortMapImage, link: "https://map.manalok9.com/"
    },
    {
      title: "Developer Portfolio",
      description: "A modern full-stack developer portfolio built with React, Vite, TypeScript, and SSR using Vike, optimized for performance, accessibility, and SEO.",
      key_features: [
        "Implemented SSR with Vike for improved SEO and performance",
        "Optimized site performance with code splitting and lazy loading",
        "Built responsive and accessible UI using React + Tailwind CSS",
        "Created reusable components for featured projects, cards, and drawers",
        "Integrated project showcase with interactive project drawers and developer-focused feature descriptions"
      ],
      tags: ["React", "Vite", "TypeScript", "SSR with Vike", "Tailwind CSS", "Headless UI"],
      img: portfolioImage, // replace with your actual portfolio image import
      link: "https://v1-portfolio-site.vercel.app/"
    },
  ];

  return (
    <section id="projectCards" className="py-35 sectionRow bg-navy-deep">
      <div className="max-w-7xl mx-auto px-4" data-aos="fade-up" data-aos-anchor-placement={isMobile ? "center-center" : "top-center"} {...(isMobile ? { "data-aos-anchor": "#home" } : {})}>
        <h2 className="text-3xl font-semibold text-center mb-16 text-ghost-white font-heading tracking-tight">Featured Projects</h2>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsCards