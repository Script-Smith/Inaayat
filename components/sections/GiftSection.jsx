import React from 'react';
import { ArrowRight } from 'lucide-react';

const GiftSection = () => {
  return (
    <section className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative w-full">
              <img
                src="/images/spoons.png"
                alt="Personalized gift set with brass kitchenware and decorative flowers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
              PERSONALISED FOR YOU!
            </h2>
            <h1 className="text-4xl sm:text-5xl text-dark-100 leading-tight mb-4">
              Gift Of Health, <br /> Gift Of Impact.
            </h1>
            <p className="text-gray-700 body-medium mb-6">
              When every human being is unique, why should your gift be like someone else&apos;s? Explore the wide range of premium curations by Inaayat and experience the joy of gifting customised handcrafted assortments!
            </p>
            <button className="inline-flex items-center px-6 py-1 border border-transparent small-medium font-medium rounded-full shadow-sm text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300">
              EXPLORE MORE
              <ArrowRight className="ml-2 -mr-1 w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;