import { FaBootstrap, FaCss3, FaGit, FaHtml5, FaReact } from "react-icons/fa";
import { SiCodeigniter, SiJavascript, SiJquery, SiLaravel, SiPhp, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

function TechStacks() {

    

    const skills = [
        { icon: <FaHtml5 />, name: "Html5", color: "hover:text-[#e34f26]", textcolor: "text-[#e34f26]" },
        { icon: <FaCss3 />, name: "Css3", color: "hover:text-[#379AD6]", textcolor: "text-[#379AD6]" },
        { icon: <FaBootstrap />, name: "Bootstrap", color: "hover:text-[#702cf5]", textcolor: "text-[#702cf5]" },
        { icon: <SiJavascript />, name: "JavaScript", color: "hover:text-[#f6de16]", textcolor: "text-[#f6de16]" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "hover:text-[#06B6D4]", textcolor: "text-[#06B6D4]" },
        { icon: <SiJquery />, name: "jQuery", color: "hover:text-[#1169ae]", textcolor: "text-[#1169ae]" },
        { icon: <FaReact />, name: "React", color: "hover:text-[#61DAFB]", textcolor: "text-[#61DAFB]" },
        { icon: <SiTypescript />, name: "TypeScript", color: "hover:text-[#3178C6]", textcolor: "text-[#3178C6]" },
        { icon: <SiPhp />, name: "PHP", color: "hover:text-[#3178C6]", textcolor: "text-[#3178C6]" },
        { icon: <SiLaravel />, name: "Laravel", color: "hover:text-[#3178C6]", textcolor: "text-[#3178C6]" },
        { icon: <SiCodeigniter />, name: "Codeigniter", color: "hover:text-[#3178C6]", textcolor: "text-[#3178C6]" },
        { icon: <SiVite />, name: "Vite", color: "hover:text-[#646CFF]", textcolor: "text-[#646CFF]" },
        { icon: <FaGit />, name: "Git", color: "hover:text-[#F05032]", textcolor: "text-[#F05032]" },
    ];

    return (
        <section id="tech" className="py-35 sectionRow section-primary">
            <div className="max-w-6xl mx-auto px-4" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <h2 className="text-3xl font-semibold text-center mb-16 text-ghost-white font-heading tracking-tight">Tech Stack</h2>

                <div className="flex flex-wrap justify-center items-center gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`flex flex-col w-25 items-center justify-center p-6 rounded-1xl transition-all duration-300 group ${skill.textcolor} md:text-slate-400 ${skill.color} cursor-pointer`}
                        >
                            <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                                {skill.icon}
                            </div>
                            <span className="text-ghost-white-inactive font-medium text-sm group-hover:text-white font-body tracking-wide">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStacks;