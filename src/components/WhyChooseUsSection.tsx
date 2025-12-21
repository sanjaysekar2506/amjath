import { useEffect, useRef } from "react";

const reasons = [
  {
    number: "01",
    title: "Uncompromising Quality",
    description:
      "Every detail is considered, every material hand-selected for its beauty and durability.",
  },
  {
    number: "02",
    title: "Bespoke Design",
    description:
      "No templates, no shortcuts. Each project is a unique response to your lifestyle and aspirations.",
  },
  {
    number: "03",
    title: "Timely Delivery",
    description:
      "Precision planning and experienced project management ensure we meet our commitments.",
  },
  {
    number: "04",
    title: "Trusted Materials",
    description:
      "We work exclusively with certified artisans and source from reputable suppliers worldwide.",
  },
];

const WhyChooseUsSection = () => {
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
      className="py-24 md:py-32 bg-background"
    >
      <div className="container-luxury">
        {/* Header */}
        <div className="fade-in-section text-center mb-16 md:mb-20">
          <span className="text-xs font-sans tracking-widest uppercase text-primary mb-4 block">
            The Difference
          </span>
          <h2 className="heading-section text-foreground">
            Why Choose Us
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {reasons.map((reason, index) => (
            <div
              key={reason.number}
              className="fade-in-section flex gap-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="font-serif text-4xl text-champagne-light shrink-0">
                {reason.number}
              </span>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
