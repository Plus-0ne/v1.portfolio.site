import { useEffect, useState } from "react";

function Timeline() {

    const [isMobile, setIsMobile] = useState(false);
    
      useEffect(() => {
        // runs only in the browser
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
    
        checkMobile(); // initial check
        window.addEventListener("resize", checkMobile);
    
        return () => window.removeEventListener("resize", checkMobile);
      }, []);

    const experiences = [
        {
            date: "2022 - 2025",
            title: "Full-stack Web Developer",
            company: "Manalo K9 Technologies International Corp.",
            description: "Developed and maintained dynamic web applications using Laravel, delivering responsive and accessible front-end interfaces with HTML5, CSS, and JavaScript. Optimized backend logic and database performance for scalable and reliable solutions, while collaborating with team members through Git version control and code reviews."
        },
        {
            date: "2019 - 2021",
            title: "Freelance Full-stack Web Developer",
            company: "Wercher Solutions and Resources Labor Service Coop",
            description: "Assisted in the development of PHP-based websites and internal tools, providing maintenance, bug fixes, and feature enhancements for client projects. Collaborated closely with designers and stakeholders to deliver solutions that met project requirements and client expectations.",
        },
        {
            date: "2017 - 2018",
            title: "Graphics assistant & Programmer",
            company: "Skill-Power Institute",
            description: "Supported the graphics lead in designing and producing tarpaulins and promotional signage for events. Developed a desktop application using VB.NET to automate certificate generation and event reporting, improving efficiency and accuracy.",
        },
    ];

    return (
        <section id="timeline" className="py-35 bg-navy-deep sectionRow">
            <div className="max-w-6xl mx-auto px-4" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <h2 className="text-3xl font-semibold text-center mb-16 text-ghost-white font-heading tracking-tight">Timeline</h2>

                <div className="relative">
                    {/* The Center Line (Desktop only) */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-4 h-4 rounded-full bg-ocean border-4 border-ocean z-10"></div>

                                {/* Grid Container */}
                                <div className={`grid grid-cols-1 md:grid-cols-2 w-full ${index % 2 === 0 ? 'md:text-right' : ''}`}>

                                    {/* Left Side Content (Even indices) */}
                                    <div className={`pt-1 md:px-12 ${index % 2 === 0 ? 'block' : 'hidden'}`} data-aos={isMobile ? "fade-left" : "fade-right"} data-aos-anchor-placement="center-bottom" data-aos-delay="1000">
                                        <div className="pl-8 md:pl-0">
                                            <span className="text-sm font-bold text-ocean font-body">{exp.date}</span>
                                            <h3 className="text-xl font-bold text-ghost-white font-heading tracking-tight">{exp.title}</h3>
                                            <p className="text-ghost-white font-medium text-sm font-body tracking-wide">{exp.company}</p>
                                            <p className="text-ghost-white-inactive mt-2 text-sm font-body tracking-wide">
                                                 {exp.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Spacer for the opposite side */}
                                    <div className="hidden md:block"></div>

                                    {/* Right Side Content (Odd indices) */}
                                    <div className={`pt-1 md:px-12 ${index % 2 !== 0 ? 'block' : 'hidden'}`} data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-delay="1000">
                                        <div className="pl-8 md:pl-0">
                                            <span className="text-sm font-bold text-ocean font-body">{exp.date}</span>
                                            <h3 className="text-xl font-bold text-ghost-white font-heading tracking-tight">{exp.title}</h3>
                                            <p className="text-ghost-white font-medium text-sm font-body tracking-wide">{exp.company}</p>
                                            <p className="text-ghost-white-inactive mt-2 text-sm font-body tracking-wide">
                                                 {exp.description}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;