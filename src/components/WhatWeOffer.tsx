const services = [
  { label: "Foyers", icon: "🏺" },
  { label: "Living TV Units", icon: "📺" },
  { label: "Pooja Units", icon: "🛕" },
  { label: "Dining & Crockery Units", icon: "🥂" },
  { label: "Modular Kitchens", icon: "🍽️" },
  { label: "Storage Solutions & Wardrobes", icon: "🧥" },
  { label: "False Ceilings", icon: "🏠" },
  { label: "Bathroom Designs", icon: "🚿" },
  { label: "Outdoor / Balcony Spaces", icon: "🌿" },
  { label: "Custom Furniture", icon: "🪑" },
  { label: "Wallpaper Installation", icon: "🖼️" },
  { label: "Fabrication Works", icon: "⚙️" },
  { label: "Painting Services", icon: "🎨" },
  { label: "Living Spaces & more to transform your home", icon: "🛋️" },
];


const WhatWeOffer = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-xl mx-auto text-center">

        {/* Eyebrow */}
        <p className="text-sm tracking-widest uppercase text-[#c8a65b] mb-4">
          What We Offer
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-light leading-relaxed text-gray-900 mb-12">
          We Specialize In A Wide Range Of Interior Design Services.
        </h2>

        {/* Services List */}
        <div className="space-y-6 text-left mb-12">
          {services.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-xl text-[#c8a65b] leading-none">
                {item.icon}
              </span>
              <p className="text-gray-800 text-base leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-10">
          We handle everything for your dream home, from design to flawless
          completion, on time and on budget. Our experts create unique spaces
          that reflect your style. Experience luxury redefined — it’s about you,
          not just the price tag.
        </p>

        {/* CTA */}
        {/* <button className="w-full rounded-full bg-gradient-to-r from-[#c8a65b] to-[#e3c77a] text-white py-4 text-sm tracking-widest uppercase shadow-md hover:opacity-90 transition">
          Book Free Consultation Now
        </button> */}

      </div>
    </section>
  );
};

export default WhatWeOffer;
