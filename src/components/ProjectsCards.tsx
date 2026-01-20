import Card from "./Card";
// import loungeImage from "../../public/img/Screenshot 2026-01-08 233807.png";
// import resortMapImage from "../../public/img/Screenshot 2026-01-08 233517.png";
import loungeImage from "../assets/img/Screenshot 2026-01-08 233807.png";
import resortMapImage from "../assets/img/Screenshot 2026-01-08 233517.png";
function ProjectsCards() {

  const projects = [
    { title: "Social Media Platform", description: "A custom social media platform built with PHP Laravel.", tags: ["Laravel", "Bootstrap", "jQuery"], img: loungeImage, link : "https://metaanimals.tech/" },
    { title: "Resort Interactive Map", description: "An interactive resort map with 360 images builth with PHP Laravel & Leaflet.", tags: ["Laravel", "Bootstrap", "jQuery", "Leaflet"], img: resortMapImage, link : "https://map.manalok9.com/" },
    { title: "IAGD", description: "a global database system for tracking and managing animal genetics .", tags: ["Laravel", "Bootstrap", "jQuery"], img: "", link : "" },
  ];

  return (
    <section id="projectCards" className="py-20 bg-slate-900 sectionRow animate__delay-1s">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Featured Projects</h2>

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