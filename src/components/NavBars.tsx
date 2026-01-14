import { useState } from "react";

function NavBars() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md w-full fixed z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo Section */}
                    <div className="shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-blue-600">Brand</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Projects</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Tech Stack</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Timeline</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
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
                <div className="md:hidden bg-gray-50 border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                            Home
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                            Projects
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                            Tech Stack
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                            Timeline
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBars