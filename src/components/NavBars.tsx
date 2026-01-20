import { useState } from "react";

function NavBars() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow-md w-full fixed z-50 bg-navy-deep">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-end h-16 items-center">
                    

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-ghost-white hover:text-ocean-hover font-medium">Home</a>
                        <a href="#projectCards" className="text-ghost-white hover:text-ocean-hover font-medium">Projects</a>
                        <a href="#tech" className="text-ghost-white hover:text-ocean-hover font-medium">Tech Stack</a>
                        <a href="#timeline" className="text-ghost-white hover:text-ocean-hover font-medium">Timeline</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-ghost-white hover:text-ocean-hover focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#home" className="block px-3 py-2 text-ghost-white hover:text-ocean-hover rounded-md">
                            Home
                        </a>
                        <a href="#projectCards" className="block px-3 py-2 text-ghost-white hover:text-ocean-hover rounded-md">
                            Projects
                        </a>
                        <a href="#tech" className="block px-3 py-2 text-ghost-white hover:text-ocean-hover rounded-md">
                            Tech Stack
                        </a>
                        <a href="#timeline" className="block px-3 py-2 text-ghost-white hover:text-ocean-hover rounded-md">
                            Timeline
                        </a>
                        
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBars