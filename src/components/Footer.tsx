import { FaGithub } from "react-icons/fa";
import { JobstreetLogo } from "../assets/icons/JobstreetLogo";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12">
          
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              IKKI<span className="text-blue-500">.dev</span>
            </h2>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Building high-performance web applications with React, TypeScript, and Tailwind CSS.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold uppercase tracking-wider text-xs">Socials</h3>
            <div className="flex gap-5">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaGithub className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <JobstreetLogo className="w-7 h-7"/>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} IKKI. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;