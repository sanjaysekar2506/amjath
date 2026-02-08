import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.jpeg";
import gallery5 from "../assets/gallery5.jpeg";
import gallery6 from "../assets/gallery6.jpeg";

const works = [
  { id: 1, img: gallery1, title: "Modern Bamboo Villa", category: "interior" },
  { id: 2, img: gallery2, title: "Eco-Brick Pavilion", category: "architecture" },
  { id: 3, img: gallery3, title: "Sustainable Lounge", category: "design" },
  { id: 4, img: gallery4, title: "Urban Greenery", category: "commercial" },
  { id: 5, img: gallery5, title: "Minimalist Structure", category: "residential" },
  { id: 6, img: gallery6, title: "The Atrium Project", category: "architecture" },
];

const WorksByCategory = () => {
  const { category } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const filteredWorks = works.filter(
    (work) => work.category === category
  );

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Back */}
        <div className="mb-12 text-center">
          <Link
            to="/works"
            className="text-sm uppercase tracking-widest text-gray-500 hover:text-gray-900"
          >
            ← Back to all works
          </Link>
        </div>

        <header className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight capitalize">
            {category} Projects
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredWorks.map((work) => (
            <div key={work.id} className="group">
              <div className="aspect-[3/2] overflow-hidden mb-6">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium">{work.title}</h3>
            </div>
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <p className="text-center text-gray-500 mt-20">
            No projects found for this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default WorksByCategory;
