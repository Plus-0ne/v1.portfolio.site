function Timeline() {
    const experiences = [
        {
            date: "2022 - 2025",
            title: "Full-stack Web Developer",
            company: "Manalo K9 Technologies International Corp.",
            description: "Develop and maintain dynamic web applications using Laravel.",
        },
        {
            date: "2019 - 2021",
            title: "Freelance Full-stack Web Developer",
            company: "Wercher Solutions and Resources Labor Service Coop",
            description: "Developed payroll web application using CodeIgniter 3.",
        },
        {
            date: "2017 - 2018",
            title: "Graphics assistant & Programmer",
            company: "Skill-Power Institute",
            description: "Assisted the Graphics Artist and develop desktop application using VB.NET.",
        },
    ];

    return (
        <section className="py-20 bg-slate-900">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Timeline</h2>

                <div className="relative">
                    {/* The Center Line (Desktop only) */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900 z-10"></div>

                                {/* Grid Container */}
                                <div className={`grid grid-cols-1 md:grid-cols-2 w-full ${index % 2 === 0 ? 'md:text-right' : ''}`}>

                                    {/* Left Side Content (Even indices) */}
                                    <div className={`md:px-12 ${index % 2 === 0 ? 'block' : 'hidden'}`}>
                                        <div className="pl-8 md:pl-0">
                                            <span className="text-sm font-bold text-blue-400">{exp.date}</span>
                                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                            <p className="text-gray-400 font-medium">{exp.company}</p>
                                            <p className="text-gray-500 mt-2 text-sm">{exp.description}</p>
                                        </div>
                                    </div>

                                    {/* Spacer for the opposite side */}
                                    <div className="hidden md:block"></div>

                                    {/* Right Side Content (Odd indices) */}
                                    <div className={`md:px-12 ${index % 2 !== 0 ? 'block' : 'hidden'}`}>
                                        <div className="pl-8 md:pl-0">
                                            <span className="text-sm font-bold text-blue-400">{exp.date}</span>
                                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                            <p className="text-gray-400 font-medium">{exp.company}</p>
                                            <p className="text-gray-500 mt-2 text-sm">{exp.description}</p>
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