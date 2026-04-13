
import { ExternalLink } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-luxury px-6 py-10">
        <div className="flex flex-col items-center text-center gap-8 md:flex-row md:justify-between md:text-left md:items-start">
          
          {/* Logo */}
          <div>
            <a
              href="#"
              className="font-serif text-xl font-medium tracking-wide"
            >
              bamboo bricks
            </a>
          </div>
      

<div className="px-4 py-3 border border-primary-foreground/20 rounded-md bg-primary-foreground/5 flex items-center justify-between gap-3">

  {/* Text */}
  <span className="uppercase tracking-wider text-[10px] text-primary-foreground/60">
    Developed By
  </span>

  {/* Icon with tooltip */}
  <div className="relative group">
    <a
      href="https://sanportfolioo.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl"
    >
      <ExternalLink size={18} />
    </a>

    {/* Tooltip */}
    <span className="absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-black text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-[-4px] transition-all duration-300 pointer-events-none">
      View Developer Portfolio 👀
    </span>
  </div>

</div>
          {/* Navigation */}
          <nav className="flex flex-col gap-4 md:flex-row md:gap-8">
            <a
              href="#about"
              className="text-xs tracking-widest uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-xs tracking-widest uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="text-xs tracking-widest uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-xs tracking-widest uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Copyright & Developer */}
          <div className="flex flex-col gap-3 text-xs items-center md:items-end">
            <p className="text-primary-foreground/50">
              © {currentYear} Bamboo Bricks. All rights reserved.
            </p>

          
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
