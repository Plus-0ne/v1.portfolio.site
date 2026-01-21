import mypic from '../assets/2x2_pic_500x500.webp';
import smMyPic from '../assets/2x2_pic_200x200.webp';

function Hero() {
    return (
        <section id='home' className="relative w-full pt-20 pb-20 lg:pt-50 lg:pb-55  transition-colors duration-300 mt-16 sectionRow section-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-anchor-placement="center-bottom">

                {/* Added items-center to the parent so the image and text align vertically */}
                <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-12">

                    {/* Image Container: Removed pb-20 which was creating huge uneven gaps */}
                    <div className="flex justify-center w-full lg:w-auto mb-8 lg:mb-0">
                        <div className="relative">
                            {/* Added a subtle glow effect to the image to match your dark theme */}
                            <div className="absolute -inset-1 bg-ocean rounded-full blur opacity-25"></div>
                            <picture>
                                <source media="(min-width: 600px)" srcSet={`${mypic}`}></source>
                                <img className="relative rounded-full w-40 h-40 md:w-48 md:h-48 object-cover border-4 border-slate-900 shadow-2xl" src={smMyPic}
                                    alt="Romel Cubelo"
                                    loading="lazy" />
                            </picture>




                        </div>
                    </div>

                    {/* Text Container: Changed lg:w-auto to lg:text-left for better flow */}
                    <div className="text-center lg:text-left max-w-2xl">
                        
                        <h1 className="text-4xl md:text-6xl tracking-tight text-white font-heading font-bold">
                            Hi, I'm <span className="text-ocean">Romel Cubelo</span>
                        </h1>
                        <h2 className='text-md md:text-lg mt-6 text-ghost-white tracking-tight font-heading font-semibold'>
                            Full-Stack Web Developer • 5+ Years Experience
                        </h2>
                        <p className="mt-6 text-xs md:text-sm leading-relaxed tracking-wide text-gray-100 font-body">
                            I build production-ready applications using PHP (Laravel, CodeIgniter) and relational databases, with responsive interfaces powered by Bootstrap, jQuery, and modern JavaScript.
                            I also apply React, Vite, and TypeScript to create modern UI components as part of my full-stack toolkit.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 font-body tracking-wide">
                            <a className="px-8 py-4 bg-ocean hover:bg-ocean-hover text-slate-950 font-semibold rounded-lg transition-all shadow-lg hover:scale-105 cursor-pointer" href='#projectCards'>
                                View Projects
                            </a>
                            <a className="px-8 py-4 bg-ghost-white hover:bg-ghost-white-hover text-slate-950 font-semibold rounded-lg transition-all shadow-lg hover:scale-105 cursor-pointer" href='#footer'>
                                Contact me
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Background Glow (Optional) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] -z-10" />
        </section>
    );
}
export default Hero;