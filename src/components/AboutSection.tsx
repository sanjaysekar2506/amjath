import { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in-section");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 bg-cream"
    >
      <div className="container-luxury">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Label */}
          <div className="fade-in-section">
            <span className="text-xs font-sans tracking-widest uppercase text-primary mb-4 block">
              Our Philosophy
            </span>
            <h2 className="heading-section text-foreground mb-8">
              Where Vision
              <br />
              Meets Craft
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="fade-in-section" style={{ animationDelay: "0.2s" }}>
            <p className="text-refined mb-6">
              For over two decades, Atelier Lumière has been defining luxury
              interiors through an unwavering commitment to craftsmanship and
              an intuitive understanding of space.
            </p>
            <p className="text-refined mb-8">
              We believe that exceptional design emerges from the harmony of
              form and function, material and meaning. Every project is an
              opportunity to create something enduring.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <span className="font-serif text-3xl md:text-4xl text-foreground block">
                  22
                </span>
                <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground mt-1 block">
                  Years
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-foreground block">
                  180+
                </span>
                <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground mt-1 block">
                  Projects
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-foreground block">
                  12
                </span>
                <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground mt-1 block">
                  Awards
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
