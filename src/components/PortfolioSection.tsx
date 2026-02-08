import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.jpeg";
import gallery6 from "../assets/gallery6.jpeg";

const projects = [
  {
    image: gallery1,
    title: "Single-Storey Bamboo Brick House",
    category: "Residential Construction",
  },
  {
    image: gallery2,
    title: "Eco-Friendly Farmhouse Build",
    category: "Rural Housing",
  },
  {
    image: gallery3,
    title: "Load-Bearing Bamboo Brick Walls",
    category: "Structural Work",
  },
  {
    image: gallery4,
    title: "Low-Cost Housing Project",
    category: "Affordable Housing",
  },
  {
    image: gallery5,
    title: "Bamboo Brick Compound Wall",
    category: "Boundary Construction",
  },
  {
    image: gallery6,
    title: "Small Commercial Unit Using Bamboo Bricks",
    category: "Commercial Construction",
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
        
        <div
          className="fade-in-section text-center mt-16"
          style={{ animationDelay: "0.6s" }}
        >
          <Link to="/works" className="btn-outline-luxury">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
