const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            className="font-serif text-xl font-medium tracking-wide text-primary-foreground"
          >
            bamboo bricks
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a
              href="#about"
              className="text-xs font-sans tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-xs font-sans tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="text-xs font-sans tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-xs font-sans tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-xs font-sans text-primary-foreground/40">
            © {currentYear} Atelier Lumière. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
