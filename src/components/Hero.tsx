import mypic from '../assets/pic1.png';

function Hero() {
    return (
        <section className="relative w-full py-20 lg:py-50 bg-slate-950 transition-colors duration-300 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Added items-center to the parent so the image and text align vertically */}
                <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-12">

                    {/* Image Container: Removed pb-20 which was creating huge uneven gaps */}
                    <div className="flex justify-center w-full lg:w-auto mb-8 lg:mb-0">
                        <div className="relative">
                            {/* Added a subtle glow effect to the image to match your dark theme */}
                            <div className="absolute -inset-1 bg-blue-600 rounded-full blur opacity-25"></div>
                            <img
                                className="relative rounded-full w-40 h-40 md:w-48 md:h-48 object-cover border-4 border-slate-900 shadow-2xl"
                                src={mypic}
                                alt="Romel Cubelo"
                            />
                        </div>
                    </div>

                    {/* Text Container: Changed lg:w-auto to lg:text-left for better flow */}
                    <div className="text-center lg:text-left max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white sm:text-7xl font-heading">
                            I'm <span className="text-blue-400">Romel Cubelo</span>
                        </h1>

                        <p className="mt-6 text-lg leading-relaxed text-gray-400 font-body">
                            <span className="text-blue-400 font-medium">Full-Stack Developer & Laravel Expert</span>
                            — 5+ years of experience building end-to-end web applications. Expert in PHP/Laravel with a proven track record of delivering responsive, mobile-first interfaces.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-blue-500/50">
                                View Projects
                            </button>
                            <button className="px-8 py-3 border-2 border-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition-all">
                                Contact Me
                            </button>
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