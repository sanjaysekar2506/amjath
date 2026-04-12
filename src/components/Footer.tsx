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
            {/* 🔥 Highlighted Developer Section */}
            <div className="px-4 py-2 border border-primary-foreground/20 rounded-md bg-primary-foreground/5">
              <span className="uppercase tracking-wider text-[10px] text-primary-foreground/60 block">
                Developed By
              </span>
              <a
                href="https://sanportfolioo.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:text-primary-foreground transition-colors"
              >
                sanportfolioo.netlify.app
              </a>
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
              © {currentYear} test. All rights reserved.
            </p>

          
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
