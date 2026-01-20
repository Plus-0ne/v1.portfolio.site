import { FaGithub } from "react-icons/fa";
import { JobstreetLogo } from "../assets/icons/JobstreetLogo";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full section-primary py-20 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12">
          
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-ghost-white">
              IKKI<span className="text-ocean">.dev</span>
            </h2>
            <p className="text-ghost-white-inactive max-w-xs text-sm leading-relaxed">
              Building high-performance web applications with React, TypeScript, and Tailwind CSS.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold uppercase tracking-wider text-xs">Socials</h3>
            <div className="flex gap-5">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Github">
                <FaGithub className="w-7 h-7"/>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Jobstreet">
                <JobstreetLogo className="w-7 h-7"/>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-ghost-white-inactive text-xs">
            © {currentYear} IKKI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;