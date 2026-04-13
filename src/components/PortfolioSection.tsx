import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gallery1 from "../images/gallery/projects/shrinivas-bangalore/IMG_20251123_130137936.jpg";
import gallery2 from "../images/gallery/projects/sanjay-chikmagalur/IMG-20260208-WA0071.jpg";
import gallery3 from "../images/gallery/projects/sanjeev-bangalore/09b46e9551224e91b18bb6e0caac970f.jpg";
import gallery4 from "../images/gallery/projects/ajay-bangalore/IMG-20260122-WA0085.jpg";
// import gallery5 from "../assets/gallery5.jpeg";
// import gallery6 from "../assets/gallery6.jpeg";

/*
slug MUST match folder name exactly inside:
src/images/gallery/
*/

const projects = [
    {
    image: gallery1,
    title: "shrinivas bangalore Project",
    category: "Interior Work",
    slug: "shrinivas-bangalore", // already correct
  },
  {
    image: gallery2,
    title: "Sanjay Chikmagalur Project",
    category: "Interior Work",
    slug: "sanjay-chikmagalur", // ✅ exact match
  },
 

  {
    image: gallery3,
    title: "Sanjeev-bangalore Project",
    category: "Interior Work",
    slug: "sanjeev-bangalore",
  },
   {
    image: gallery4,
    title: "Ajay Bangalore Project",
    category: "Interior Work",
    slug: "ajay-bangalore", // ✅ exact match
  },
  // {
  //   image: gallery5,
  //   title: "Partition Design",
  //   category: "Interior Work",
  //   slug: "partition design 1",
  // },
  // {
  //   image: gallery6,
  //   title: "Head Board Wall",
  //   category: "Interior Work",
  //   slug: "Head board wall design",
  // },
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

    const elements =
      sectionRef.current?.querySelectorAll(".fade-in-section");
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
        <div className="fade-in-section text-center mb-16 md:mb-20">
          <span className="text-xs tracking-widest uppercase text-primary mb-4 block">
            Selected Work
          </span>
          <h2 className="heading-section text-foreground">
            Our Portfolio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to={`/gallery/${encodeURIComponent(project.slug)}`}
              className="fade-in-section group block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <article className="cursor-pointer">
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
                  <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
