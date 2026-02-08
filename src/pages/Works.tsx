import { useEffect } from "react";
import { Link } from "react-router-dom";

import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.jpeg";
import gallery6 from "../assets/gallery6.jpeg";

const works = [
  { id: 1, img: gallery1, title: "Modern Bamboo Villa", category: "Interior" },
  { id: 2, img: gallery2, title: "Eco-Brick Pavilion", category: "Architecture" },
  { id: 3, img: gallery3, title: "Sustainable Lounge", category: "Design" },
  { id: 4, img: gallery4, title: "Urban Greenery", category: "Commercial" },
  { id: 5, img: gallery5, title: "Minimalist Structure", category: "Residential" },
  { id: 6, img: gallery6, title: "The Atrium Project", category: "Architecture" },
];

// helper → converts "Interior Design" → "interior-design"
const slugify = (value: string) =>
  value.toLowerCase().replace(/\s+/g, "-");

const Works = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Back to Home */}
        <div className="mb-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <header className="mb-20 text-center">
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
            Selected Works
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {works.map((work) => {
            const categorySlug = slugify(work.category);

            return (
              <Link
                key={work.id}
                to={`/works/${categorySlug}`}
                className="group block cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden bg-muted mb-6">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text */}
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                      {work.category}
                    </p>
                    <h3 className="text-xl font-medium text-gray-900">
                      {work.title}
                    </h3>
                  </div>
                  <div className="h-[1px] w-12 bg-gray-300 mb-2 group-hover:w-20 transition-all duration-500" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
