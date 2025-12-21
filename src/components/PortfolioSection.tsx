import { useEffect, useRef } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  {
    image: portfolio1,
    title: "The Whitmore Residence",
    category: "Private Residence",
  },
  {
    image: portfolio2,
    title: "Serenity Suite",
    category: "Boutique Hotel",
  },
  {
    image: portfolio3,
    title: "Modern Kitchen Design",
    category: "Private Residence",
  },
  {
    image: portfolio4,
    title: "The Library Collection",
    category: "Private Study",
  },
  {
    image: portfolio5,
    title: "Spa Retreat",
    category: "Wellness Center",
  },
  {
    image: portfolio6,
    title: "The Grand Lobby",
    category: "Commercial",
  },
];

const PortfolioSection = () => {
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
      id="portfolio"
      className="py-24 md:py-32 bg-background"
    >
      <div className="container-luxury">
        {/* Header */}
        <div className="fade-in-section text-center mb-16 md:mb-20">
          <span className="text-xs font-sans tracking-widest uppercase text-primary mb-4 block">
            Selected Work
          </span>
          <h2 className="heading-section text-foreground">
            Our Portfolio
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="fade-in-section group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
              </div>
              <div className="pt-5">
                <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground block mb-1">
                  {project.category}
                </span>
                <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="fade-in-section text-center mt-16" style={{ animationDelay: "0.6s" }}>
          <a href="#contact" className="btn-outline-luxury">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
