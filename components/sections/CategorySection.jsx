import React from "react";

const categories = [
  {
    id: 1,
    name: "Gold",
    image: "/images/gold.png",
    description: "Luxurious gold-plated serving bowls and utensils",
  },
  {
    id: 2,
    name: "Copper & Brass",
    image: "/images/brass.png",
    description: "Traditional copper and brass cookware and drinkware",
  },
  {
    id: 3,
    name: "Silver",
    image: "/images/silver.png",
    description: "Elegant silver-plated dining sets and accessories",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            AYURVEDA SWEARS BY THESE
          </h2>
          <h1 className="mt-2 text-4xl leading-tight font-viaoda text-dark-100 sm:text-5xl">
            Shop by category
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30" />
              </div>
              <div className="text-center">
                <h3 className="text-xl text-dark-100 shadow-text">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
