import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in-section");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant minimalist living room with natural light"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
    <div className="relative container-luxury py-32 md:py-40">
  <div className="max-w-2xl">
    <h1 className="fade-in-section heading-display text-foreground mb-6">
      Building the Future
      <br />
      <span className="italic font-normal">with Bamboo Bricks</span>
    </h1>

    <p
      className="fade-in-section text-refined max-w-lg mb-10"
      style={{ animationDelay: "0.2s" }}
    >
      High-performance bamboo bricks engineered for strength, durability,
      and sustainability. A smarter alternative to traditional construction
      materials — without compromising on aesthetics.
    </p>

    <div
      className="fade-in-section flex flex-col sm:flex-row gap-4"
      style={{ animationDelay: "0.4s" }}
    >
      <a href="#products" className="btn-luxury">
        Explore Products
      </a>
      <a href="#contact" className="btn-outline-luxury">
        Get a Quote
      </a>
    </div>
  </div>
</div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-foreground/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
