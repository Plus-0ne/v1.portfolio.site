import { FaGithub } from "react-icons/fa";
import { JobstreetLogo } from "../assets/icons/JobstreetLogo";
import { SiIndeed } from "react-icons/si";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="w-full section-primary py-20 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12">

          {/* Logo & Tagline */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-ghost-white font-heading tracking-tight">
              RC<span className="text-ocean"> dev</span>
            </h2>
            <p className="text-ghost-white-inactive max-w-xs text-sm leading-relaxed font-body tracking-wide">
              Full-Stack Web Developer | PHP, Laravel, CodeIgniter | Responsive, high-impact web applications
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-ghost-white font-semibold uppercase font-heading tracking-wide text-xs">Socials</h3>
            <div className="flex gap-5">
              <a href="https://github.com/Plus-0ne" className="text-ghost-white-inactive hover:text-blue-400 transition-colors" aria-label="Github" target="_blank">
                <FaGithub className="w-7 h-7" />
              </a>
              <a href="https://ph.jobstreet.com/profiles/romel-cubelo-VKZ1lQ8L0x" className="text-ghost-white-inactive hover:text-blue-400 transition-colors" aria-label="Jobstreet" target="_blank">
                <JobstreetLogo className="w-7 h-7" />
              </a>
              <a href="https://profile.indeed.com/p/romelc-kw37sxh" className="text-ghost-white-inactive hover:text-blue-400 transition-colors" aria-label="Indeed" target="_blank">
                <SiIndeed className="w-7 h-7"></SiIndeed>
              </a>
              <SiIndeed></SiIndeed>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-ghost-white-inactive text-xs">
            © {currentYear} RC dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;