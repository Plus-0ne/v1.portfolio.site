import Card from "./Card";
import loungeImage from "../assets/img/Screenshot 2026-01-08 233807.webp";
import resortMapImage from "../assets/img/Screenshot 2026-01-08 233517.webp";
function ProjectsCards() {

  const projects = [
    {
      title: "Social Media Platform",
      description: "A full-featured social platform built using Laravel, featuring user authentication, interactive feeds, and responsive design with Bootstrap. Implemented dynamic UI elements with jQuery for an engaging user experience.",
      tags: ["Laravel", "Bootstrap", "jQuery"],
      img: loungeImage, link: "https://metaanimals.tech/"
    },
    {
      title: "Resort Interactive Map",
      description: "An immersive interactive map for a resort, built with Laravel and Leaflet. Designed to let users explore 360° locations and points of interest with smooth animations and responsive layout.",
      tags: ["Laravel", "Bootstrap", "jQuery", "Leaflet"],
      img: resortMapImage, link: "https://map.manalok9.com/"
    },
    {
      title: "IAGD",
      description: "A global database management system for tracking animal genetics with advanced filtering, secure data storage, and admin dashboards — optimized for performance and usability.",
      tags: ["Laravel", "Bootstrap", "jQuery"],
      img: "", link: ""
    },
  ];

  return (
    <section id="projectCards" className="py-35 sectionRow bg-navy-deep animate__delay-1s">
      <div className="max-w-7xl mx-auto px-4">
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