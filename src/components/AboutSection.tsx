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
          {/* Left Column */}
          <div className="fade-in-section">
            <span className="text-xs font-sans tracking-widest uppercase text-primary mb-4 block">
              About
            </span>
            <h2 className="heading-section text-foreground mb-8">
              Practical Building
              <br />
              with Bamboo Bricks
            </h2>
          </div>

          {/* Right Column */}
          <div className="fade-in-section" style={{ animationDelay: "0.2s" }}>
            <p className="text-refined mb-6">
              I am a freelance construction professional specializing in bamboo
              brick solutions for sustainable and cost-effective building.
              With hands-on industry experience, I help clients adopt bamboo-focused
              construction without compromising on strength or reliability.
            </p>

            <p className="text-refined mb-8">
              Over the years, I have worked closely with homeowners, builders,
              and small developers — guiding projects from material selection
              to on-site execution, ensuring bamboo bricks are used correctly
              and efficiently.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <span className="font-serif text-3xl md:text-4xl text-foreground block">
                  8
                </span>
                <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground mt-1 block">
                  Years Experience
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-foreground block">
                  50+
                </span>
                <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground mt-1 block">
                  Projects Completed
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-foreground block">
                  100%
                </span>
                <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground mt-1 block">
                  Client Focus
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
